import { useEffect, useRef, useState } from 'react';
import {
	useForm,
	SubmitHandler,
	SubmitErrorHandler,
	Controller,
} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Prose } from '@ag.ds-next/prose';
import { FileUpload } from '@ag.ds-next/file-upload';
import { FormStack } from '@ag.ds-next/form-stack';
import { LoadingBlanket } from '@ag.ds-next/loading';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Stack } from '@ag.ds-next/box';
import { Textarea } from '@ag.ds-next/textarea';
import { useScrollToField } from '@ag.ds-next/field';
import { FormExampleMultiStepActions } from './FormExampleMultiStepActions';
import { useFormExampleMultiStep } from './FormExampleMultiStep';
import { FormExampleMultiStepContainer } from './FormExampleMultiStepContainer';

const formSchema = yup
	.object({
		description: yup.string().required('Describe actions taken'),
		files: yup.array().of(yup.mixed()).required('Select a file to upload'),
	})
	.required();

export type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleMultiStep1 = () => {
	const { next, stepFormState, isSubmittingStep } = useFormExampleMultiStep();
	const scrollToField = useScrollToField();
	const errorRef = useRef<HTMLDivElement>(null);
	const [focusedError, setFocusedError] = useState(false);

	const {
		register,
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		defaultValues: stepFormState ?? { files: [] },
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setFocusedError(false);
		next(data);
	};

	const onError: SubmitErrorHandler<FormSchema> = () => {
		setFocusedError(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (hasErrors && !focusedError) {
			errorRef.current?.focus();
			setFocusedError(true);
		}
	}, [hasErrors, focusedError, errors]);

	return (
		<FormExampleMultiStepContainer
			title="Submit evidence (H1)"
			introduction="The introductory paragraph provides context about this page of the form. Use a short paragraph to reduce cognitive load."
		>
			<Stack
				as="form"
				gap={3}
				onSubmit={handleSubmit(onSubmit, onError)}
				noValidate
			>
				<FormStack>
					{hasErrors && (
						<PageAlert
							ref={errorRef}
							tone="error"
							title="There is a problem"
							tabIndex={-1}
						>
							<Prose>
								<p>Please correct the following fields and try again</p>
								<ul>
									{Object.entries(errors).map(([key, value]) => (
										<li key={key}>
											<a href={`#${key}`} onClick={scrollToField}>
												{Array.isArray(value)
													? value[0].message
													: value.message}
											</a>
										</li>
									))}
								</ul>
							</Prose>
						</PageAlert>
					)}
					<Textarea
						label="Describe actions taken"
						hint="Hint text"
						id="description"
						{...register('description')}
						invalid={Boolean(errors.description?.message)}
						message={errors.description?.message}
						required
						block
					/>
					<Controller
						control={control}
						name="files"
						render={({
							field: { value, onChange, onBlur, name },
							fieldState: { invalid, error },
						}) => (
							<div css={{ position: 'relative' }}>
								<FileUpload
									id="file"
									label="Select file to upload"
									hint="General hint information"
									accept={['image/jpeg', 'image/jpg', 'image/png']}
									maxSize={2000}
									maxFiles={3}
									multiple
									value={value}
									onChange={onChange}
									onBlur={onBlur}
									name={name}
									invalid={invalid}
									message={error?.message}
									required
								/>
								{isSubmittingStep && <LoadingBlanket label="Uploading file" />}
							</div>
						)}
					/>
				</FormStack>
				<FormExampleMultiStepActions />
			</Stack>
		</FormExampleMultiStepContainer>
	);
};
