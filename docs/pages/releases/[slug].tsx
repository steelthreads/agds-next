import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Prose } from '@ag.ds-next/prose';
import {
	getRelease,
	getReleaseBreadcrumbs,
	getReleaseList,
	getReleaseSlugs,
	Release,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';

export default function Releases({
	release,
	releaseLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={release.data.title} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Releases',
						titleLink: '/releases',
						items: releaseLinks,
					}}
					editPath={`/releases/${release.slug}.mdx`}
					breadcrumbs={breadcrumbs}
				>
					<H1>{release.data.title}</H1>
					<Prose>
						<MDXRemote {...release.source} components={mdxComponents} />
					</Prose>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		release: Release;
		releaseLinks: { href: string; label: string }[];
		breadcrumbs: Awaited<ReturnType<typeof getReleaseBreadcrumbs>>;
	},
	{ slug: string }
> = async ({ params }) => {
	const { slug } = params ?? {};
	const release = slug ? await getRelease(slug) : undefined;
	const releaseList = await getReleaseList();
	const releaseLinks = releaseList.map(({ title, slug }) => ({
		href: `/releases/${slug}`,
		label: title,
	}));

	if (!(slug && release)) {
		return { notFound: true };
	}

	const breadcrumbs = await getReleaseBreadcrumbs(slug);

	return {
		props: {
			release,
			releaseLinks,
			breadcrumbs,
			slug,
		},
	};
};

export const getStaticPaths = async () => {
	const slugs = await getReleaseSlugs();

	return {
		paths: slugs.map((slug) => ({
			params: { slug },
		})),
		fallback: false,
	};
};
