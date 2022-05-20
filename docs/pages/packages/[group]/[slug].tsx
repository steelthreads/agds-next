import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import { H1 } from '@ag.ds-next/heading';
import { Flex, Stack } from '@ag.ds-next/box';
import { Text } from '@ag.ds-next/text';
import { Body } from '@ag.ds-next/body';
import { ButtonLink } from '@ag.ds-next/button';
import { ExternalLinkIcon } from '@ag.ds-next/icon';

import {
	getPkgList,
	getPkg,
	Pkg,
	getPkgNavLinks,
	getPkgBreadcrumbs,
} from '../../../lib/mdxUtils';

import { mdxComponents } from '../../../components/utils';
import { AppLayout } from '../../../components/AppLayout';
import { DocumentTitle } from '../../../components/DocumentTitle';
import { PageLayout } from '../../../components/PageLayout';
import { ExternalLinkCallout } from '@ag.ds-next/a11y';

export default function Packages({
	pkg,
	navLinks,
	breadcrumbs,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<DocumentTitle title={pkg.title} />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Packages',
						titleLink: '/packages',
						items: navLinks,
					}}
					editPath={`/packages/${pkg.slug}/README.md`}
					breadcrumbs={breadcrumbs}
				>
					<Stack as="main" gap={2}>
						<Stack gap={1.5} alignItems="flex-start">
							<Stack gap={0.25}>
								<Text fontSize="sm" color="muted" fontWeight="bold">
									v{pkg.version}
								</Text>
								<H1>{pkg.data.title}</H1>
								{pkg.data.description && (
									<Text as="p" fontSize="lg" color="muted">
										{pkg.data.description}
									</Text>
								)}
							</Stack>
							{pkg.storybookPath && (
								<div>
									<ButtonLink
										target="_blank"
										href={`https://steelthreads.github.io/agds-next/storybook/index.html?path=${pkg.storybookPath}`}
										rel="noopener noreferrer"
										variant="secondary"
										iconAfter={ExternalLinkIcon}
									>
										View in Storybook
									</ButtonLink>
								</div>
							)}
<<<<<<< Updated upstream
						</Flex>
						{pkg.storybookPath && (
							<div>
								<ButtonLink
									target="_blank"
									href={`https://steelthreads.github.io/agds-next/storybook/index.html?path=${pkg.storybookPath}`}
									rel="noopener noreferrer"
									variant="secondary"
									iconAfter={ExternalLinkIcon}
								>
									View in Storybook <ExternalLinkCallout />
								</ButtonLink>
							</div>
						)}
=======
						</Stack>
>>>>>>> Stashed changes
						<Body>
							<pre>
								<code>
									yarn add {pkg.name}@{pkg.version}
								</code>
							</pre>
							<MDXRemote {...pkg.source} components={mdxComponents} />
						</Body>
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export const getStaticProps: GetStaticProps<
	{
		pkg: Pkg;
		navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
		breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
	},
	{ slug: string; group: string }
> = async ({ params }) => {
	const { slug, group } = params ?? {};
	const pkg = slug ? await getPkg(slug) : undefined;

	if (!(slug && group && pkg)) {
		return { notFound: true };
	}

	const navLinks = await getPkgNavLinks(group);
	const breadcrumbs = await getPkgBreadcrumbs(slug);

	return {
		props: {
			pkg,
			navLinks,
			breadcrumbs,
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
