import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/prose';
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
import { TemplateLayout } from '../../../components/TemplateLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';

export default function TemplateCodePage({
	breadcrumbs,
	content,
	subNavItems,
	template,
	navLinks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${template.data.title} template code`} />
			<TemplateLayout
				template={template}
				breadcrumbs={breadcrumbs}
				navLinks={navLinks}
				subNavItems={subNavItems}
				editPath={`/templates/${template.slug}/code.mdx`}
				skipLinks={[
					{
						label: `Skip to ${template.data.title} template code`,
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
		subNavItems: Awaited<ReturnType<typeof getTemplateSubNavItems>>;
		breadcrumbs: Awaited<ReturnType<typeof getTemplateBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const template = slug ? await getTemplate(slug) : undefined;
	const subNavItems = slug ? await getTemplateSubNavItems(slug) : undefined;
	const navLinks = await getTemplateNavLinks();
	const breadcrumbs = slug
		? await getTemplateBreadcrumbs(slug, 'Code')
		: undefined;

	const content = template
		? await getTemplateDocsContent(template.slug, 'code.mdx')
		: null;

	if (!(slug && template && content && subNavItems && breadcrumbs)) {
		return { notFound: true };
	}

	return {
		props: {
			content,
			template,
			navLinks,
			breadcrumbs,
			slug,
			subNavItems,
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
