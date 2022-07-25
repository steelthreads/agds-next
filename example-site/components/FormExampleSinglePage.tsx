import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, ButtonGroup } from '@ag.ds-next/button';
import { Checkbox } from '@ag.ds-next/control-input';
import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import { Fieldset } from '@ag.ds-next/fieldset';
import { FormStack } from '@ag.ds-next/form-stack';
import { Select } from '@ag.ds-next/select';
import { H2, H3 } from '@ag.ds-next/heading';
import { TextInput } from '@ag.ds-next/text-input';
import { PageAlert } from '@ag.ds-next/page-alert';
import { useScrollToField } from '@ag.ds-next/field';
import { FormDivider } from './FormDivider';

const formSchema = yup
	.object({
		// business details
		abn: yup.string().required('Enter your ABN'),
		acn: yup.string().required('Enter your ACN'),
		businessName: yup.string().required('Enter your business name'),
		// entity details
		entityName: yup.string().required('Enter your entity name'),
		entityNumber: yup.string().required('Enter your entity number'),
		// street address
		streetAddress: yup.string().required('Enter your street address'),
		suburbTownCity: yup.string().required('Enter your suburb, town or city'),
		state: yup.string().required('Enter your state'),
		postcode: yup.string().required('Enter your postcode'),
		// postal address
		isPostalAddressSameAsStreetAddress: yup.boolean(),
		postalAddress: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postal address'),
		}),
		postalSuburbTownCity: yup
			.string()
			.when('isPostalAddressSameAsStreetAddress', {
				is: false,
				then: yup.string().required('Enter your suburb, town or city'),
			}),
		postalState: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your state'),
		}),
		postalPostcode: yup.string().when('isPostalAddressSameAsStreetAddress', {
			is: false,
			then: yup.string().required('Enter your postcode'),
		}),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleSinglePage = () => {
	const router = useRouter();
	const [isSubmitting, setIsSubmitting] = useState(false);
	const errorPageAlertRef = useRef<HTMLDivElement>(null);
	const [hasFocusedErrorRef, setHasFocusedErrorRef] = useState(false);

	const scrollToField = useScrollToField();

	const {
		register,
		handleSubmit,
		watch,
		trigger,
		formState: { errors, isSubmitted },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		setIsSubmitting(true);
		console.log(data);
		setTimeout(() => {
			setIsSubmitting(false);
			router.push('single-page-form-success');
		}, 2000);
	};

	const onError: SubmitErrorHandler<FormSchema> = (errors, event) => {
		console.log(errors, event);
		setHasFocusedErrorRef(false);
	};

	// Only show the page alert if there is more than 1 error
	const hasErrors = Object.keys(errors).length > 1;

	useEffect(() => {
		if (!(hasErrors || hasFocusedErrorRef)) return;
		errorPageAlertRef.current?.focus();
		setHasFocusedErrorRef(true);
	}, [hasFocusedErrorRef, hasErrors]);

	const isPostalAddressSameAsStreetAddress = watch(
		'isPostalAddressSameAsStreetAddress',
		false
	);

	useEffect(() => {
		if (isSubmitted) trigger();
	}, [isPostalAddressSameAsStreetAddress, trigger, isSubmitted]);

	return (
		<form onSubmit={handleSubmit(onSubmit, onError)} noValidate>
			<Stack gap={3}>
				{hasErrors && (
					<PageAlert
						ref={errorPageAlertRef}
						tabIndex={-1}
						tone="error"
						title="There is a problem"
					>
						<Prose>
							<p>Please correct the following fields and try again</p>
							<ul>
								{Object.entries(errors).map(([key, value]) => (
									<li key={key}>
										<a href={`#${key}`} onClick={scrollToField}>
											{value.message}
										</a>
									</li>
								))}
							</ul>
						</Prose>
					</PageAlert>
				)}
				<Fieldset
					legend={<H2>Business details (H2)</H2>}
					hint="Supporting information for provide details subheading - sm/default"
				>
					<FormStack>
						<TextInput
							label="Australian Business Number (ABN)"
							{...register('abn')}
							id="abn"
							invalid={Boolean(errors.abn?.message)}
							message={errors.abn?.message}
							required
							inputMode="numeric"
							pattern="[0-9]*"
						/>
						<TextInput
							label="Australian Company Number (ACN)"
							{...register('acn')}
							id="acn"
							invalid={Boolean(errors.acn?.message)}
							message={errors.acn?.message}
							required
							inputMode="numeric"
							pattern="[0-9]*"
						/>
						<TextInput
							label="Business name"
							{...register('businessName')}
							id="businessName"
							invalid={Boolean(errors.businessName?.message)}
							message={errors.businessName?.message}
							required
							maxWidth="xl"
						/>
					</FormStack>
				</Fieldset>
				<FormDivider />
				<Fieldset
					legend={<H2>Provide entity details (H2)</H2>}
					hint="Supporting information for provide details subheading - sm/default"
				>
					<FormStack>
						<TextInput
							label="Entity name"
							{...register('entityName')}
							id="entityName"
							invalid={Boolean(errors.entityName?.message)}
							message={errors.entityName?.message}
							required
						/>
						<TextInput
							label="Entity number"
							{...register('entityNumber')}
							id="entityNumber"
							invalid={Boolean(errors.entityNumber?.message)}
							message={errors.entityNumber?.message}
							required
							inputMode="numeric"
							pattern="[0-9]*"
						/>
					</FormStack>
				</Fieldset>
				<Fieldset legend={<H3>Street address (H3)</H3>}>
					<FormStack>
						<TextInput
							label="Street address"
							{...register('streetAddress')}
							id="streetAddress"
							invalid={Boolean(errors.streetAddress?.message)}
							message={errors.streetAddress?.message}
							required
							maxWidth="xl"
						/>
						<TextInput
							label="Suburb, town or city"
							{...register('suburbTownCity')}
							id="suburbTownCity"
							invalid={Boolean(errors.suburbTownCity?.message)}
							message={errors.suburbTownCity?.message}
							required
						/>
						<Select
							label="State or territory"
							{...register('state')}
							id="state"
							placeholder="Select"
							options={[
								{ label: 'NSW', value: 'nsw' },
								{ label: 'QLD', value: 'qld' },
								{ label: 'ACT', value: 'act' },
								{ label: 'VIC', value: 'vic' },
								{ label: 'TAS', value: 'tas' },
								{ label: 'NT', value: 'nt' },
								{ label: 'SA', value: 'sa' },
								{ label: 'WA', value: 'wa' },
							]}
							invalid={Boolean(errors.state?.message)}
							message={errors.state?.message}
							required
							maxWidth="md"
						/>
						<TextInput
							label="Postcode"
							{...register('postcode')}
							id="postcode"
							invalid={Boolean(errors.postcode?.message)}
							message={errors.postcode?.message}
							maxWidth="sm"
							inputMode="numeric"
							pattern="[0-9]*"
							required
						/>
					</FormStack>
				</Fieldset>
				<Fieldset legend={<H3>Postal address (H3)</H3>}>
					<FormStack>
						<Checkbox
							{...register('isPostalAddressSameAsStreetAddress')}
							id="isPostalAddressSameAsStreetAddress"
						>
							Same as street address
						</Checkbox>

						{!isPostalAddressSameAsStreetAddress && (
							<FormStack>
								<TextInput
									label="Postal address"
									{...register('postalAddress')}
									id="postalAddress"
									invalid={Boolean(errors.postalAddress?.message)}
									message={errors.postalAddress?.message}
									required
									maxWidth="xl"
								/>
								<TextInput
									label="Suburb, town or city"
									{...register('postalSuburbTownCity')}
									id="postalSuburbTownCity"
									invalid={Boolean(errors.postalSuburbTownCity?.message)}
									message={errors.postalSuburbTownCity?.message}
									required
								/>
								<Select
									label="State or territory"
									{...register('postalState')}
									id="postalState"
									placeholder="Select"
									options={[
										{ label: 'NSW', value: 'nsw' },
										{ label: 'QLD', value: 'qld' },
										{ label: 'ACT', value: 'act' },
										{ label: 'VIC', value: 'vic' },
										{ label: 'TAS', value: 'tas' },
										{ label: 'NT', value: 'nt' },
										{ label: 'SA', value: 'sa' },
										{ label: 'WA', value: 'wa' },
									]}
									invalid={Boolean(errors.postalState?.message)}
									message={errors.postalState?.message}
									required
									maxWidth="md"
								/>
								<TextInput
									label="Postcode"
									{...register('postalPostcode')}
									id="postalPostcode"
									invalid={Boolean(errors.postalPostcode?.message)}
									message={errors.postalPostcode?.message}
									maxWidth="sm"
									required
									inputMode="numeric"
									pattern="[0-9]*"
								/>
							</FormStack>
						)}
					</FormStack>
				</Fieldset>
				<FormDivider />
				<ButtonGroup>
					<Button type="submit" loading={isSubmitting}>
						Submit
					</Button>
					<Button type="button" variant="secondary">
						Cancel
					</Button>
				</ButtonGroup>
			</Stack>
		</form>
	);
};
