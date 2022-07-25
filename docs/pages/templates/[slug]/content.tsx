import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/prose';
import { TemplateLayout } from '../../../components/TemplateLayout';
import {
	getTemplate,
	getTemplateBreadcrumbs,
	getTemplateDocsContent,
	getTemplateNavLinks,
	getTemplateSlugs,
	getTemplateSubNavItems,
	Template,
} from '../../../lib/mdx/templates';
import { mdxComponents } from '../../../components/mdxComponents';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TemplateContentPage({
	breadcrumbs,
	template,
	content,
	subNavItems,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${template.data.title} template content`} />
			<TemplateLayout
				template={template}
				breadcrumbs={breadcrumbs}
				navLinks={navLinks}
				subNavItems={subNavItems}
				editPath={`/templates/${template.slug}/content.mdx`}
				skipLinks={[
					{
						label: `Skip to ${template.data.title} template content`,
						href: '#page-content',
					},
				]}
			>
				<Prose id="page-content">
					<MDXRemote {...content} components={mdxComponents} />
				</Prose>
			</TemplateLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		content: NonNullable<Awaited<ReturnType<typeof getTemplateDocsContent>>>;
		template: Template;
		navLinks: Awaited<ReturnType<typeof getTemplateNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
		subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const navLinks = await getTemplateNavLinks();
	const subNavItems = slug ? await getTemplateSubNavItems(slug) : undefined;
	const breadcrumbs = slug
		? await getTemplateBreadcrumbs(slug, 'Content')
		: undefined;

	const content = template
		? await getTemplateDocsContent(template.slug, 'content.mdx')
		: null;

	if (!(slug && template && content && subNavItems && breadcrumbs)) {
		return { notFound: true };
	}

	return {
		props: {
			content,
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
