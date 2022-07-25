import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { Card, CardInner, CardLink } from '@ag.ds-next/card';
import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import { Heading } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import {
	getMarkdownData,
	getReleaseList,
	serializeMarkdown,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { DocumentTitle } from '../../components/DocumentTitle';
import { PageLayout } from '../../components/PageLayout';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function ReleasesHome({ source, releaseLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Releases" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Releases',
						titleLink: '/releases',
						items: releaseLinks,
					}}
					editPath="/releases/index.mdx"
				>
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<Stack as="ul" gap={1.5}>
						{releaseLinks.map(({ href, label, description }) => (
							<Card as="li" key={label} clickable shadow>
								<CardInner>
									<Stack gap={1}>
										<Heading type="h3">
											<CardLink href={href}>{label}</CardLink>
										</Heading>
										{description ? <Text as="p">{description}</Text> : null}
									</Stack>
								</CardInner>
							</Card>
						))}
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../releases/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const releaseList = await getReleaseList();

	const releaseLinks = releaseList.map(({ slug, title, description }) => ({
		href: `/releases/${slug}`,
		label: title,
		description,
	}));

	return {
		props: {
			source,
			releaseLinks,
		},
	};
}
