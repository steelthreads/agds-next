import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Box } from '@ag.ds-next/box';
import { Prose } from '@ag.ds-next/prose';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateNavLinks,
	getTemplateSlugs,
	getTemplateSubNavItems,
	Template,
} from '../../../lib/mdx/templates';
import { TemplateLayout } from '../../../components/TemplateLayout';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TemplateOverviewPage({
	breadcrumbs,
	subNavItems,
	template,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${template.data.title} template`} />
			<TemplateLayout
				template={template}
				breadcrumbs={breadcrumbs}
				subNavItems={subNavItems}
				navLinks={navLinks}
				editPath={`/templates/${template.slug}/index.mdx`}
				skipLinks={[
					{
						label: `Skip to ${template.data.title} template overview`,
						href: '#page-content',
					},
				]}
			>
				<Prose id="page-content">
					<Box border borderColor="muted" css={{ img: { display: 'block' } }}>
						<img
							role="presentation"
							src={`/agds-next/img/templates/${template.slug}.png`}
							alt=""
						/>
					</Box>
					<MDXRemote {...template.source} components={mdxComponents} />
				</Prose>
			</TemplateLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		template: Template;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
		subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const subNavItems = slug ? await getTemplateSubNavItems(slug) : undefined;
	const navLinks = await getTemplateNavLinks();
	const breadcrumbs = slug
		? await getTemplateBreadcrumbs(slug, 'Overview')
		: undefined;

	if (!(slug && template && subNavItems && breadcrumbs)) {
		return { notFound: true };
	}

	return {
		props: {
			template,
			navLinks,
			subNavItems,
			breadcrumbs,
			slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getTemplateSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
