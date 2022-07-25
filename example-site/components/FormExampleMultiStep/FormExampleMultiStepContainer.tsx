import { ReactNode } from 'react';
import { Stack } from '@ag.ds-next/box';
import { PageAlert } from '@ag.ds-next/page-alert';
import { Prose } from '@ag.ds-next/prose';
import { PageTitle } from '../PageTitle';
import { useFormExampleMultiStep } from './FormExampleMultiStep';

export const FormExampleMultiStepContainer = ({
	children,
	title,
	introduction,
}: {
	children: ReactNode;
	title: string;
	introduction: string;
}) => {
	const { hasCompletedPreviousSteps } = useFormExampleMultiStep();
	return (
		<Stack gap={3}>
			<PageTitle
				pretext="Title of multi-page form"
				title={title}
				introduction={introduction}
			/>
			{hasCompletedPreviousSteps ? (
				children
			) : (
				<PageAlert
					tone="warning"
					title="This section of the form is not ready to be completed"
				>
					<Prose>
						<p>
							Before starting this part of the form, you will need to go back
							and complete all of the previous sections.
						</p>
					</Prose>
				</PageAlert>
			)}
		</Stack>
	);
};
