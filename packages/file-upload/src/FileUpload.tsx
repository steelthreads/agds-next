import {
	Fragment,
	forwardRef,
	InputHTMLAttributes,
	useEffect,
	useState,
} from 'react';
import { useDropzone, DropzoneOptions } from 'react-dropzone';
import formatFileSize from 'filesize';
import { Flex, Stack } from '@ag.ds-next/box';
import { Button } from '@ag.ds-next/button';
import { packs, boxPalette, globalPalette, tokens } from '@ag.ds-next/core';
import { Field } from '@ag.ds-next/field';
import { UploadIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
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

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseInputProps = {
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onFocus?: NativeInputProps['onFocus'];
};

export type FileUploadProps = BaseInputProps & {
	/** List of acceptible file types, e.g.`image/jpeg`, `application/pdf` */
	accept?: FileFormats[];
	/** A label that describes the field*/
	label: string;
	/** The maximum number of files allowed to be selected. By default there is no limit (if `multiple` is true). */
	maxFiles?: DropzoneOptions['maxFiles'];
	/** The maximum allowed size for each file, measured in KB */
	maxSize?: DropzoneOptions['maxSize'];
	/** The value of the input */
	value: FileWithStatus[];
	/** Callback for when an accepted file is added or removed */
	onChange: (value: FileWithStatus[]) => void;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid or valid. */
	message?: string;
	/** Whether multiple files are allowed to be selected. */
	multiple?: boolean;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the valid state will be rendered. */
	valid?: boolean;
};

type RejectedFile = {
	id: string;
	fileName: string;
	fileSize: number;
	code: string;
	message: string;
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
			value = [],
			onChange,
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

		const [fileRejections, setFileRejections] = useState<RejectedFile[]>([]);

		const handleRemoveFile = (file: FileWithStatus) => {
			const indexOfFile = value.indexOf(file);
			onChange(value.filter((_, index) => index !== indexOfFile));
		};

		const handleRemoveRejection = (errId: string) => {
			setFileRejections(fileRejections.filter((err) => err.id !== errId));
		};

		const handleDropAccepted = (acceptedFiles: FileWithStatus[]) => {
			// replace file if multiple is false
			if (multiple) {
				onChange([...value, ...acceptedFiles]);
			} else {
				onChange(acceptedFiles);
			}
		};

		const {
			getRootProps,
			getInputProps,
			isDragActive,
			open,
			fileRejections: dropzoneFileRejections,
		} = useDropzone({
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

		useEffect(() => {
			const rejections: RejectedFile[] = [];
			dropzoneFileRejections.forEach(({ file, errors }) => {
				errors.forEach((error) =>
					rejections.push({
						id: `${file.name}_${error.code}`,
						fileName: file.name,
						fileSize: file.size,
						message: getFileRejectionErrorMessage(
							error,
							formattedMaxFileSize,
							acceptedFilesSummary
						),
						code: error.code,
					})
				);
			});
			setFileRejections(rejections);
		}, [dropzoneFileRejections, formattedMaxFileSize, acceptedFilesSummary]);

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
					// eslint-disable-next-line @typescript-eslint/no-unused-vars
					const { color: _, ...rootProps } = getRootProps();
					return (
						<Stack gap={1.5} {...rootProps}>
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
									Select {filesPlural}
								</Button>
							</Flex>
							{value.length || fileRejections.length ? (
								<Stack gap={0.5}>
									{value.length ? (
										<Fragment>
											<Text color="muted">{getFilesTotal(value)}</Text>
											<Stack as="ul" gap={0.5}>
												{value.map((file, index) => (
													<FileUploadFile
														key={index}
														name={file.name}
														size={file.size}
														status={file.status}
														onRemove={() => handleRemoveFile(file)}
													/>
												))}
											</Stack>
										</Fragment>
									) : null}
									{fileRejections.length ? (
										<Stack as="ul" gap={0.5}>
											{fileRejections.map(({ id, ...rejection }) => (
												<FileRejection
													key={id}
													{...rejection}
													onRemove={() => handleRemoveRejection(id)}
												/>
											))}
										</Stack>
									) : null}
								</Stack>
							) : null}
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
