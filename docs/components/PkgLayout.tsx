import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import { CallToActionLink } from '@ag.ds-next/call-to-action';
import { Prose } from '@ag.ds-next/prose';
import { SkipLinksProps } from '@ag.ds-next/skip-link';
import { SubNav } from '@ag.ds-next/sub-nav';
import { Text } from '@ag.ds-next/text';
import { PageAlert } from '@ag.ds-next/page-alert';
import { getPkgBreadcrumbs, getPkgNavLinks, Pkg } from '../lib/mdx/packages';
import { PageTitle } from './PageTitle';
import { PageLayout } from './PageLayout';

export function PkgLayout({
	children,
	pkg,
	navLinks,
	breadcrumbs,
	skipLinks,
	editPath,
}: PropsWithChildren<{
	pkg: Pkg;
	navLinks: Awaited<ReturnType<typeof getPkgNavLinks>>;
	breadcrumbs: Awaited<ReturnType<typeof getPkgBreadcrumbs>>;
	skipLinks?: SkipLinksProps['links'];
	editPath?: string;
}>) {
	const { asPath } = useRouter();
	const isUnreleased = pkg.version == '0.0.1';
	return (
		<PageLayout
			sideNav={{
				title: 'Packages',
				titleLink: '/packages',
				items: navLinks,
			}}
			editPath={editPath}
			breadcrumbs={breadcrumbs}
			skipLinks={skipLinks}
		>
			<PageTitle
				pretext={isUnreleased ? 'In development' : `v${pkg.version}`}
				title={pkg.title}
				introduction={pkg.data.description}
				callToAction={
					pkg.storybookPath && (
						<CallToActionLink
							href={`https://steelthreads.github.io/agds-next/storybook/index.html?path=${pkg.storybookPath}`}
						>
							View in Storybook
						</CallToActionLink>
					)
				}
			/>
			{isUnreleased ? (
				<PageAlert tone="warning">
					<Text as="p">This package is yet to be released on npm.</Text>
				</PageAlert>
			) : (
				<Prose>
					<pre>
						<code>
							yarn add {pkg.name}@{pkg.version}
						</code>
					</pre>
				</Prose>
			)}
			{pkg.subNavItems?.length ? (
				<SubNav
					activePath={asPath}
					links={pkg.subNavItems.map((item) => ({
						...item,
						scroll: false,
					}))}
				/>
			) : null}
			{children}
		</PageLayout>
	);
}
