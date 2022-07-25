import { PageContent } from '@ag.ds-next/content';
import { Columns, Column } from '@ag.ds-next/columns';
import { ButtonLink } from '@ag.ds-next/button';
import { Prose } from '@ag.ds-next/prose';
import { Breadcrumbs } from '@ag.ds-next/breadcrumbs';
import { Stack } from '@ag.ds-next/box';
import { H2 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { FormHelpCallout } from '../../../../components/FormHelpCallout';
import { PageTitle } from '../../../../components/PageTitle';
import { FormDivider } from '../../../../components/FormDivider';

export default function FormMultiPageHomePage() {
	return (
		<>
			<DocumentTitle title="Multi-page form example" />
			<AppLayout
				template={{ name: 'Multi-page form', slug: 'multi-page-form' }}
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
										{ label: 'Multi-page form' },
									]}
								/>
								<PageTitle
									title="Multi-page form title (H1)"
									introduction="The introductory paragraph provides context about the entire multi-page form. Use a short paragraph to reduce cognitive load."
								/>
								<Stack gap={1.5}>
									<H2>Multi-page form subheading (H2)</H2>
									<Text as="p">Multi-page form subheading content</Text>
								</Stack>
								<div>
									<ButtonLink href="/category/subcategory/multi-page-form/form">
										Start form
									</ButtonLink>
								</div>
								<FormDivider />
								<Prose>
									<h2>More information section heading (H2)</h2>
									<h3>More information link list heading (H3)</h3>
									<ul>
										<li>
											<a href="#">
												Meaningful link label that shows link purpose
											</a>
										</li>
										<li>
											<a href="#">
												Meaningful link label that shows link purpose
											</a>
										</li>
										<li>
											<a href="#">
												Meaningful link label that shows link purpose
											</a>
										</li>
									</ul>
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
