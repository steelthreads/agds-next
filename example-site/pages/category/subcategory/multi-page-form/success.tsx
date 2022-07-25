import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Column, Columns } from '@ag.ds-next/columns';
import { PageContent } from '@ag.ds-next/content';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/page-alert';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../components/PageTitle';

export default function FormMultiPageFormPage() {
	return (
		<AppLayout template={{ name: 'Multi-page form', slug: 'multi-page-form' }}>
			<PageContent>
				<Columns>
					<Column columnSpan={{ xs: 12, md: 8 }}>
						<Stack gap={3}>
							<DocumentTitle title="Multi-page form example" />
							<Breadcrumbs
								links={[
									{ href: '/', label: 'Home' },
									{ href: '/category', label: 'Category 1' },
									{
										href: '/category/subcategory',
										label: 'Subcategory page',
									},
									{ label: 'Multi-page form' },
								]}
							/>
							<PageTitle
								pretext="Title of multi-page form"
								title="Multi-page form title (H1)"
							/>

							<PageAlert tone="success">
								<PageAlertTitle as="h2">
									Descriptive success message (H2)
								</PageAlertTitle>
								<Prose>
									<p>Supporting paragraph for the success message</p>
									<p>
										<strong>Reference: 00000000</strong>
									</p>
								</Prose>
							</PageAlert>
							<Prose>
								<h2>What happens next? (H2)</h2>
								<p>
									Short paragraph to describe what a user can anticipate next.
									Use a short paragraph to reduce cognitive load.
								</p>
							</Prose>
							<FormHelpCallout />
						</Stack>
					</Column>
				</Columns>
			</PageContent>
		</AppLayout>
	);
}
