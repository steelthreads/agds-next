import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/prose';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import { getGuideList } from '../../lib/mdx/guides';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function GuidesHome({ source, guideLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Guides" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Guides',
						titleLink: '/guides',
						items: guideLinks,
					}}
					editPath="/guides/index.mdx"
				>
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../guides/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const guideList = await getGuideList();
	const guideLinks = guideList.map(({ slug, title }) => ({
		href: `/guides/${slug}`,
		label: title,
	}));

	return {
		props: {
			source,
			guideLinks,
		},
	};
}
