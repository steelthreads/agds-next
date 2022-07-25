import { Stack } from '@ag.ds-next/box';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { PageContent } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { PageAlert, PageAlertTitle } from '@ag.ds-next/page-alert';
import { Prose } from '@ag.ds-next/prose';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PageTitle } from '../../../components/PageTitle';
import { FormHelpCallout } from '../../../components/FormHelpCallout';

export default function SinglePageFormSuccessPage() {
	return (
		<>
			<DocumentTitle title="Single-page form example" />
			<AppLayout
				template={{ name: 'Single-page form', slug: 'single-page-form' }}
			>
				<PageContent>
					<Columns>
						<Column columnSpan={{ xs: 12, md: 8 }}>
							<Stack gap={3}>
								<Breadcrumbs
									links={[
										{ href: '/', label: 'Home' },
										{ href: '/category', label: 'Category 1' },
										{
											href: '/category/subcategory',
											label: 'Subcategory page',
										},
										{ label: 'Single-page form' },
									]}
								/>
								<PageTitle title="Single-page form (multi-question) xxl/display (H1)" />
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
		</>
	);
}
