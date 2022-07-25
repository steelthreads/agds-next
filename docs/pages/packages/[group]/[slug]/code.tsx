import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/prose';
import {
	getPkgList,
	getPkg,
	Pkg,
	getPkgNavLinks,
	getPkgBreadcrumbs,
	getPkgDocsContent,
} from '../../../../lib/mdx/packages';
import { mdxComponents } from '../../../../components/mdxComponents';
import { AppLayout } from '../../../../components/AppLayout';
import { DocumentTitle } from '../../../../components/DocumentTitle';
import { PkgLayout } from '../../../../components/PkgLayout';

export default function PackagesCode({
	pkg,
	navLinks,
	breadcrumbs,
	content,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={`${pkg.title} Code`} />
			<AppLayout>
				<PkgLayout
					pkg={pkg}
					navLinks={navLinks}
					breadcrumbs={breadcrumbs}
					skipLinks={[
						{
							label: `Skip to ${pkg.title} code`,
							href: '#pkg-content',
						},
					]}
					editPath={`/packages/${pkg.slug}/docs/code.mdx`}
				>
					<Prose id="pkg-content">
						<h2>Source</h2>
						<p>
							You can view the full source code for this package on{' '}
							<a
								href={`https://github.com/steelthreads/agds-next/tree/main/packages/${pkg.slug}`}
							>
								Github
							</a>
							.
						</p>
						<MDXRemote {...content} components={mdxComponents} />
					</Prose>
				</PkgLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pkg: NonNullable<Pkg>;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
		content: NonNullable<Awaited<ReturnType<typeof getPkgDocsContent>>>;
	},
	{ slug: string; group: string }
> = async ({ params }) => {
	const { slug, group } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;
	const content = pkg ? await getPkgDocsContent(pkg.slug, 'code.mdx') : null;

	if (!(slug && group && pkg && content)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks(group);
	const breadcrumbs = await getPkgBreadcrumbs(slug, 'Code');

	return {
		props: {
			pkg,
			navLinks,
			breadcrumbs,
			content,
		},
	};
};

export const getStaticPaths = async () => {
	const packages = await getPkgList();

	return {
		paths: packages.map(({ group, slug }) => ({
			params: { group, slug },
		})),
		fallback: false,
	};
};
