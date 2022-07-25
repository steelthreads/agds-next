import { normalize } from 'path';
import { MDXRemote } from 'next-mdx-remote';
import { Prose } from '@ag.ds-next/prose';
import { boxPalette } from '@ag.ds-next/core';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { Card, CardLink, CardInner } from '@ag.ds-next/card';
import { Columns } from '@ag.ds-next/columns';
import { mq } from '@ag.ds-next/core';
import { Text } from '@ag.ds-next/text';
import { getMarkdownData, serializeMarkdown } from '../../lib/mdxUtils';
import { getTemplateList } from '../../lib/mdx/templates';
import { mdxComponents } from '../../components/mdxComponents';
import { AppLayout } from '../../components/AppLayout';
import { PageLayout } from '../../components/PageLayout';
import { DocumentTitle } from '../../components/DocumentTitle';

type StaticProps = Awaited<ReturnType<typeof getStaticProps>>['props'];

export default function TemplatesPage({ source, templateLinks }: StaticProps) {
	return (
		<>
			<DocumentTitle title="Templates" />
			<AppLayout>
				<PageLayout
					sideNav={{
						title: 'Templates',
						titleLink: '/templates',
						items: templateLinks,
					}}
					editPath="/templates/index.mdx"
				>
					<Prose>
						<MDXRemote {...source} components={mdxComponents} />
					</Prose>
					<Columns as="ul" gap={1.5} cols={{ xs: 1, sm: 2, lg: 3 }}>
						{templateLinks.map((template) => {
							return <TemplateCard key={template.slug} {...template} />;
						})}
					</Columns>
				</PageLayout>
			</AppLayout>
		</>
	);
}

const TemplateCard = ({
	slug,
	label,
	description,
}: {
	slug: string;
	label: string;
	description: string;
}) => {
	return (
		<Card as="li" clickable shadow>
			<Flex flexDirection="column-reverse">
				<CardInner>
					<Stack gap={1} flexGrow={1}>
						<Box as="h3">
							<CardLink href={`/templates/${slug}`}>{label}</CardLink>
						</Box>
						<Text>{description}</Text>
					</Stack>
				</CardInner>
				<img
					src={`/agds-next/img/templates/${slug}.png`}
					alt=""
					role="presentation"
					height="auto"
					width="100%"
					css={mq({
						borderBottom: `1px solid ${boxPalette.borderMuted}`,
						objectFit: 'cover',
					})}
				/>
			</Flex>
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
