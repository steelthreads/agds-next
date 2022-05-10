import { MDXRemote } from 'next-mdx-remote';
import { normalize } from 'path';
import { Body } from '@ag.ds-next/body';
import { mapSpacing } from '@ag.ds-next/core';
import { H2, H3 } from '@ag.ds-next/heading';
import { Box, Stack } from '@ag.ds-next/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/card';
import { mq } from '@ag.ds-next/core';
import { Text, TextLink } from '@ag.ds-next/text';

import {
	getMarkdownData,
	getTemplateList,
	serializeMarkdown,
} from '../../lib/mdxUtils';
import { mdxComponents } from '../../components/utils';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({ source, templateLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates | AgDS" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Templates',
						titleLink: '/templates',
						items: templateLinks,
					}}
					editPath="/templates/index.mdx"
				>
					<Stack gap={2}>
						<Body>
							<MDXRemote {...source} components={mdxComponents} />
						</Body>

						<H2>All Templates</H2>
						<Box
							as="ul"
							css={mq({
								display: 'grid',
								gridGap: mapSpacing(1.5),
								gridTemplateColumns: ['1fr', '1fr 1fr', '1fr 1fr 1fr'],
							})}
						>
							{templateLinks.map((template) => {
								return <TemplateCard key={template.slug} data={template} />;
							})}
						</Box>
					</Stack>
				</PageLayout>
			</AppLayout>
		</>
	);
}

const TemplateCard = ({
	data: { slug, label, description },
}: {
	data: { slug: string; label: string; description: string };
}) => {
	return (
		<Card as="li" clickable shadow>
			<img
				src={`/agds-next/img/templates/${slug}.jpg`}
				alt={`Screenshot of ${label} example`}
				height="auto"
				width="100%"
				css={mq({
					objectFit: 'cover',
				})}
			/>
			<CardInner>
				<Stack gap={1} flexGrow={1}>
					<H3>
						<CardLink href={`./templates/${slug}`}>{label}</CardLink>
					</H3>
					<Text>{description}</Text>
				</Stack>
			</CardInner>
		</Card>
	);
};

export async function getStaticProps() {
	const { content } = await getMarkdownData(
		normalize(`${process.cwd()}/../templates/index.mdx`)
	);
	const source = await serializeMarkdown(content);
	const templateList = await getTemplateList();

	const templateLinks = templateList.map(({ slug, title, description }) => ({
		href: `/templates/${slug}`,
		slug,
		label: title,
		description: description || null,
	}));

	return {
		props: {
			source,
			templateLinks,
		},
	};
}
