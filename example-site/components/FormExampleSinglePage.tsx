import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button } from '@ag.ds-next/button';
import { Checkbox, ControlGroup, Radio } from '@ag.ds-next/control-input';
import { Body } from '@ag.ds-next/body';
import { Flex, Stack } from '@ag.ds-next/box';
import { Fieldset } from '@ag.ds-next/fieldset';
import { FormStack } from '@ag.ds-next/form-stack';
import { Select } from '@ag.ds-next/select';
import { Textarea } from '@ag.ds-next/textarea';
import { TextInput } from '@ag.ds-next/text-input';
import { TextLink } from '@ag.ds-next/text';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Divider } from './Divider';
import { useScrollToField } from '@ag.ds-next/field';

const formSchema = yup
	.object({
		fullName: yup.string().required('Enter your name'),
		streetAddress: yup.string().required('Enter your street address'),
		state: yup.string().required('Enter your state'),
		postcode: yup.string().required('Enter your postcode'),
		email: yup
			.string()
			.email('Invalid email address')
			.required('Enter your email address'),
		mobile: yup.string().required('Enter your mobile'),
		interest: yup
			.string()
			.typeError('Select an interest')
			.required('Select an interest'),
		message: yup.string(),
		termsAndConditions: yup
			.boolean()
			.oneOf([true], 'You must agree to our terms and conditions'),
	})
	.required();

type FormSchema = yup.InferType<typeof formSchema>;

export const FormExampleSinglePage = () => {
	const scrollToField = useScrollToField();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormSchema>({
		resolver: yupResolver(formSchema),
	});

	const onSubmit: SubmitHandler<FormSchema> = (data) => {
		console.log(data);
	};

	const hasErrors = Boolean(Object.keys(errors).length);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<Stack gap={3}>
				{hasErrors && (
					<PageAlert tone="error" title="There is a problem">
						<Body>
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
						</Body>
					</PageAlert>
				)}
				<Fieldset legend="Personal details">
					<FormStack>
						<TextInput
							label="Full name"
							{...register('fullName')}
							id="fullName"
							invalid={Boolean(errors.fullName?.message)}
							message={errors.fullName?.message}
							maxWidth="xl"
							required
						/>
						<TextInput
							label="Street address"
							{...register('streetAddress')}
							id="streetAddress"
							invalid={Boolean(errors.streetAddress?.message)}
							message={errors.streetAddress?.message}
							maxWidth="xl"
							required
						/>
						<Select
							label="State"
							{...register('state')}
							id="state"
							placeholder="Please select"
							options={[
								{ label: 'QLD', value: 'qld' },
								{ label: 'NSW', value: 'nsw' },
								{ label: 'VIC', value: 'vic' },
							]}
							invalid={Boolean(errors.state?.message)}
							message={errors.state?.message}
							maxWidth="xl"
							required
						/>
						<TextInput
							label="Postcode"
							{...register('postcode')}
							id="postcode"
							invalid={Boolean(errors.postcode?.message)}
							message={errors.postcode?.message}
							maxWidth="sm"
							required
						/>
					</FormStack>
				</Fieldset>
				<Divider />
				<Fieldset legend="Contact details">
					<FormStack>
						<TextInput
							label="Email"
							type="email"
							{...register('email')}
							id="email"
							invalid={Boolean(errors.email?.message)}
							message={errors.email?.message}
							maxWidth="xl"
							required
						/>
						<TextInput
							label="Mobile"
							type="tel"
							hint="We use this to send you SMS notifications"
							{...register('mobile')}
							id="mobile"
							invalid={Boolean(errors.mobile?.message)}
							message={errors.mobile?.message}
							maxWidth="md"
						/>
					</FormStack>
				</Fieldset>
				<Divider />
				<FormStack>
					<ControlGroup
						label="Interest"
						invalid={Boolean(errors.interest?.message)}
						message={errors.interest?.message}
						id="interest"
					>
						<Radio
							{...register('interest')}
							invalid={Boolean(errors.interest?.message)}
						>
							Art
						</Radio>
						<Radio
							{...register('interest')}
							invalid={Boolean(errors.interest?.message)}
						>
							Cooking
						</Radio>
						<Radio
							{...register('interest')}
							invalid={Boolean(errors.interest?.message)}
						>
							Reading
						</Radio>
					</ControlGroup>
					<Textarea
						label="Message"
						{...register('message')}
						id="message"
						invalid={Boolean(errors.message?.message)}
						message={errors.message?.message}
						maxWidth="xl"
					/>
					<Checkbox
						{...register('termsAndConditions')}
						id="termsAndConditions"
						invalid={Boolean(errors.termsAndConditions?.message)}
					>
						By checking this box you agree to our{' '}
						<TextLink href="#">terms and conditions</TextLink>.
					</Checkbox>
				</FormStack>
				<Divider />
				<Flex gap={1}>
					<Button type="submit">Submit</Button>
					<Button type="button" variant="secondary">
						Cancel
					</Button>
				</Flex>
			</Stack>
		</form>
	);
};
