import React, { Fragment, forwardRef } from 'react';
import { useDropzone, DropzoneOptions, FileWithPath } from 'react-dropzone';
import { Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { packs, boxPalette, globalPalette, tokens } from '@ag.ds-next/core';
import { Field } from '@ag.ds-next/field';
import { UploadIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
import formatFileSize from 'filesize';

import { FileRejection } from './FileRejection';
import { FileUploadFile } from './FileUploadFile';
import {
	getFilesTotal,
	getAcceptedFilesSummary,
	FileFormats,
	getFileRejectionErrorMessage,
	getErrorSummary,
	FileWithStatus,
} from './utils';

type InputProps = Pick<
	React.InputHTMLAttributes<HTMLInputElement>,
	'name' | 'onBlur' | 'disabled' | 'id'
>;

export type FileUploadProps = InputProps & {
	/** List of acceptible file types, e.g.`image/jpeg`, `application/pdf` */
	accept?: FileFormats[];
	/** A label that describes the field*/
	label: string;
	/** The maximum number of files allowed to be selected. By default there is no limit (if `multiple` is true). */
	maxFiles?: DropzoneOptions['maxFiles'];
	/** The maximum allowed file size, measured in KB */
	maxSize?: DropzoneOptions['maxSize'];
	value: FileWithStatus[];
	onChange: (value: FileWithStatus[]) => void;
	/** A function that runs when a file with a 'success' status is removed. This should be used to delete a file from a server. */
	onRemoveUploadedFile?: (removedFile: FileWithStatus) => void;
	/** Whether the field is required */
	required?: boolean;
	hint?: string;
	message?: string;
	/** Whether multiple files are allowed to be selected. False by default. */
	multiple?: boolean;
	invalid?: boolean;
	valid?: boolean;
};

export const FileUpload = forwardRef<HTMLInputElement, FileUploadProps>(
	function FileUpload(
		{
			accept,
			disabled,
			label,
			maxFiles,
			maxSize,
			multiple,
			value,
			onChange,
			onRemoveUploadedFile,
			required,
			hint,
			message,
			invalid,
			valid,
			id,
			...props
		},
		ref
	) {
		const filesPlural = multiple ? 'files' : 'file';
		const maxSizeBytes = (maxSize || 0) * 1000;
		const formattedMaxFileSize = formatFileSize(maxSizeBytes);

		const handleRemoveFile = (file: FileWithStatus) => {
			if (file.status === 'success' && onRemoveUploadedFile) {
				onRemoveUploadedFile(file);
			}
			const indexOfFile = value.indexOf(file);
			onChange(value.filter((_, index) => index !== indexOfFile));
		};

		const handleDropAccepted = (acceptedFiles: FileWithStatus[]) => {
			// replace file if multiple is false
			if (multiple) {
				onChange([...value, ...acceptedFiles]);
			} else {
				onChange(acceptedFiles);
			}
		};

		const { getRootProps, getInputProps, isDragActive, open, fileRejections } =
			useDropzone({
				accept,
				maxFiles,
				// converts kB to B
				maxSize: maxSize && maxSize * 1000,
				multiple,
				onDropAccepted: handleDropAccepted,
				disabled,
				noClick: true,
				noKeyboard: true,
			});

		const errorSummary = getErrorSummary(
			fileRejections,
			formattedMaxFileSize,
			maxFiles
		);
		const acceptedFilesSummary = getAcceptedFilesSummary(accept);
		const styles = fileInputStyles({
			disabled,
			invalid: invalid || !!errorSummary,
			valid,
		});

		return (
			<Field
				label={label}
				required={Boolean(required)}
				hint={hint}
				message={message || errorSummary}
				invalid={invalid || !!errorSummary}
				valid={valid}
				id={id}
			>
				{(allyProps) => {
					// Avoid passing `color` to the Stack component, which causes
					// TypeScript errors.
					const { color: _, ...rootProps } = getRootProps();

					return (
						<Stack gap={0.5} {...rootProps}>
							<Flex
								gap={1}
								padding={1.5}
								alignItems="center"
								flexDirection="column"
								border
								rounded
								css={styles}
							>
								<UploadIcon size="lg" color="muted" />
								<input
									ref={ref}
									{...getInputProps()}
									{...allyProps}
									{...props}
								/>
								<Flex
									flexDirection="column"
									alignItems="center"
									css={{ textAlign: 'center' }}
								>
									<Text color="muted">
										{isDragActive
											? `Drop ${filesPlural} here...`
											: `Drag and drop ${filesPlural} here or select ${filesPlural} to upload.`}
									</Text>
									{maxSize ? (
										<Text color="muted">
											{multiple ? 'Each file' : 'File'} cannot exceed{' '}
											{formattedMaxFileSize}.
										</Text>
									) : null}
									{accept ? (
										<Text color="muted">
											Files accepted: {acceptedFilesSummary}
										</Text>
									) : null}
								</Flex>
								<Button
									type="button"
									variant="secondary"
									onClick={open}
									disabled={disabled}
								>
									{`Select ${filesPlural}`}
								</Button>
							</Flex>
							{value.length ? (
								<Fragment>
									<Text color="muted">{getFilesTotal(value)}</Text>
									<Stack as="ul" gap={0.5}>
										{value.map((file, index) => (
											<FileUploadFile
												file={file}
												key={index}
												onRemove={() => handleRemoveFile(file)}
											/>
										))}
									</Stack>
								</Fragment>
							) : null}
							{fileRejections.length ? (
								<Stack as="ul" gap={0.5}>
									{fileRejections.map((err, index) => (
										<FileRejection key={index}>
											{getFileRejectionErrorMessage(
												err,
												formattedMaxFileSize,
												acceptedFilesSummary
											)}
										</FileRejection>
									))}
								</Stack>
							) : null}{' '}
						</Stack>
					);
				}}
			</Field>
		);
	}
);

export const fileInputStyles = ({
	disabled,
	invalid,
	valid,
}: {
	disabled?: boolean;
	invalid?: boolean;
	valid?: boolean;
	multiline?: boolean;
}) =>
	({
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'dashed',
		borderColor: boxPalette.borderInput,
		backgroundColor: boxPalette.backgroundShade,
		...(invalid
			? {
					backgroundColor: globalPalette.errorMuted,
					borderColor: globalPalette.error,
			  }
			: valid
			? {
					backgroundColor: globalPalette.successMuted,
					borderColor: globalPalette.success,
			  }
			: disabled
			? {
					cursor: 'not-allowed',
					opacity: 0.3,
					background: 'none',
			  }
			: undefined),

		'&:focus': packs.outline,
	} as const);
