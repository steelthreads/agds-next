import { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { VisuallyHidden } from '@ag.ds-next/a11y';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { H2, H3, Heading } from '@ag.ds-next/heading';
import { ChevronRightIcon } from '@ag.ds-next/icon';
import { Columns, Column } from '@ag.ds-next/columns';
import { DirectionLink } from '@ag.ds-next/direction-link';
import { Tags } from '@ag.ds-next/tags';
import { Text } from '@ag.ds-next/text';
import { TextLink } from '@ag.ds-next/text-link';
import { ExternalLinkIcon } from '@ag.ds-next/icon';
import { StatusBadge } from '@ag.ds-next/badge';
import { PageContent } from '@ag.ds-next/content';
import { Card } from './Card';
import { CardInner } from './CardInner';
import { CardLink } from './CardLink';
import { CardHeader } from './CardHeader';
import { CardFooter } from './CardFooter';

export default {
	title: 'layout/Card',
	component: Card,
	subcomponents: { CardInner, CardLink, CardHeader, CardFooter },
} as ComponentMeta<typeof Card>;

export const Basic: ComponentStory<typeof Card> = (args) => (
	<Box maxWidth={300}>
		<Card {...args}>
			<CardInner>
				<Stack gap={1}>
					<Heading as="h2" type="h3">
						Card heading
					</Heading>
					<Text as="p">
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
						voluptat
					</Text>
					<CardLink href="#">
						Linking out
						<ChevronRightIcon weight="bold" size="sm" />
					</CardLink>
				</Stack>
			</CardInner>
		</Card>
	</Box>
);

export const Link: ComponentStory<typeof Card> = (args) => (
	<Box maxWidth={300}>
		<Card shadow clickable {...args}>
			<CardInner>
				<Heading as="h2" type="h3" paddingBottom={1}>
					Card heading
				</Heading>
				<CardLink href="#">
					Linking out
					<ChevronRightIcon weight="bold" size="sm" />
				</CardLink>
			</CardInner>
		</Card>
	</Box>
);

export const FeatureHeader: ComponentStory<typeof Card> = (args) => (
	<Columns>
		<Column columnSpan={6}>
			<Card {...args}>
				<CardHeader>
					<Heading type="h4">Feature card title</Heading>
				</CardHeader>
				<CardInner>
					<Text as="p">Additional conent relating to the card</Text>
				</CardInner>
			</Card>
		</Column>
		<Column columnSpan={6}>
			<Card {...args}>
				<CardHeader background="bodyAlt">
					<Heading type="h4">Feature card title</Heading>
				</CardHeader>
				<CardInner>
					<Text as="p">Additional conent relating to the card</Text>
				</CardInner>
			</Card>
		</Column>
	</Columns>
);
FeatureHeader.args = {
	background: 'body',
};

export const FeatureFooter: ComponentStory<typeof Card> = (args) => (
	<Columns>
		<Column columnSpan={6}>
			<Card {...args}>
				<CardInner>
					<Stack gap={1}>
						<Heading type="h3">Card title</Heading>
						<Text as="p">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
							voluptatibus.
						</Text>
					</Stack>
				</CardInner>
				<CardFooter>
					<TextLink href="#">Action</TextLink>
				</CardFooter>
			</Card>
		</Column>
		<Column columnSpan={6}>
			<Card {...args}>
				<CardInner>
					<Stack gap={1}>
						<Heading type="h3">Card title</Heading>
						<Text as="p">
							Lorem ipsum dolor, sit amet consectetur adipisicing elit. In,
							voluptatibus.
						</Text>
					</Stack>
				</CardInner>
				<CardFooter background="bodyAlt">
					<TextLink href="#">Action</TextLink>
				</CardFooter>
			</Card>
		</Column>
	</Columns>
);
FeatureFooter.args = {
	background: 'body',
};

export const CardListStory = () => {
	const toneMapper = {
		Closed: 'success',
		Open: 'warning',
		Pending: 'info',
	} as const;

	const listData = [
		{
			id: 'RE4321–2201–03',
			businessName: 'Orange Meat Works',
			type: 'Record keeping (Minor)',
			status: 'Pending',
		},
		{
			id: 'RE4321–2201–02',
			businessName: 'Orange Meat Works',
			type: 'Hygiene (Major)',
			status: 'Open',
		},
		{
			id: 'RE4321–2201–01',
			businessName: 'Orange Meat Works',
			type: 'Record keeping (Minor)',
			status: 'Closed',
		},
	] as const;

	return (
		<PageContent>
			<Stack gap={1.5}>
				<H2>Active CARs</H2>
				<Text as="p">You may now manage your CARs online.</Text>
				<Columns as="ul" gap={1} cols={{ xs: 1, sm: 2, lg: 3 }}>
					{listData.map((item) => (
						<Card as="li" shadow clickable key={item.id}>
							<CardInner>
								<Stack gap={0.5} width="100%" flexWrap="wrap">
									<H3>
										<CardLink href={`#${item.id}`}>
											{item.businessName}
										</CardLink>
									</H3>

									<Text as="p">
										<VisuallyHidden>Type: </VisuallyHidden>
										{item.type}
									</Text>

									<Flex
										gap={0.5}
										flexWrap="wrap"
										justifyContent="space-between"
										alignItems="center"
									>
										<Text color="muted" fontSize="xs">
											<VisuallyHidden>{'CAR ID: '}</VisuallyHidden>
											{item.id}
										</Text>
										<StatusBadge
											tone={toneMapper[item.status]}
											label={
												<Fragment>
													<VisuallyHidden>{'Status: '}</VisuallyHidden>
													{item.status}
												</Fragment>
											}
										/>
									</Flex>
								</Stack>
							</CardInner>
						</Card>
					))}
				</Columns>
			</Stack>
		</PageContent>
	);
};
CardListStory.storyName = 'List of Cards';

export const Compositions = () => {
	return (
		<Columns>
			<Column columnSpan={4}>
				<Stack gap={2} width="100%">
					<Card shadow>
						<CardInner>
							<Stack gap={1}>
								<Heading as="h2" type="h3">
									Card title
								</Heading>
								<Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
									non finibus leo.
								</Text>
								<DirectionLink direction="right">Learn more</DirectionLink>
							</Stack>
						</CardInner>
					</Card>

					<Card shadow clickable>
						<CardInner>
							<Stack gap={1}>
								<Box as="h3">
									<CardLink href="#">Card link</CardLink>
								</Box>
								<Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
									non finibus leo.
								</Text>
							</Stack>
						</CardInner>
					</Card>

					<Card shadow clickable>
						<CardInner>
							<Stack gap={1}>
								<Box as="h3">
									<CardLink href="#">Card link</CardLink>

									<div
										style={{
											position: 'absolute',
											top: 16,
											right: 16,
										}}
									>
										<ExternalLinkIcon color="action" />
									</div>
								</Box>

								<Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
									non finibus leo.
								</Text>
							</Stack>
						</CardInner>
					</Card>

					<Card shadow clickable>
						<CardInner>
							<Stack gap={1}>
								<Pictogram />

								<Box as="h3">
									<CardLink href="#">Card link</CardLink>
								</Box>
								<Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
									non finibus leo.
								</Text>
							</Stack>
						</CardInner>
					</Card>
				</Stack>
			</Column>

			<Column columnSpan={4}>
				<Stack gap={2} width="100%">
					<Card shadow clickable>
						<CardInner>
							<Stack gap={0.5}>
								<Pictogram />

								<Box fontWeight="bold">
									<CardLink>Add a commodity, product or operation</CardLink>
								</Box>
							</Stack>
						</CardInner>
					</Card>

					<Card shadow clickable>
						<CardInner>
							<Stack gap={1}>
								<Tags items={[{ label: '1034' }]} />

								<Box fontWeight="bold">
									<CardLink>Orange Farmers Market</CardLink>
								</Box>
							</Stack>
						</CardInner>
					</Card>

					<Card shadow clickable>
						<img
							alt="Placeholder image"
							src="/agds-next/img/placeholder/600X260.png"
							width="100%"
						/>
						<CardInner>
							<Stack gap={1}>
								<Box as="h3">
									<CardLink href="#">News item</CardLink>
								</Box>
								<Text>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
									non finibus leo.
								</Text>
							</Stack>
						</CardInner>
					</Card>
				</Stack>
			</Column>
		</Columns>
	);
};

const Pictogram = () => {
	return (
		<svg
			width="64"
			height="64"
			viewBox="0 0 64 64"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			stroke="#00558B"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M31 36H17" />
			<path d="M47 59C53.6274 59 59 53.6274 59 47C59 40.3726 53.6274 35 47 35C40.3726 35 35 40.3726 35 47C35 53.6274 40.3726 59 47 59Z" />
			<path d="M51 43C49.8647 44.8542 45.5972 50.9964 45.5972 50.9964L43 49" />
			<path d="M27 46H17" />
			<path d="M41 26H17" />
			<path d="M32.9989 59H10.9989C9.89459 59 8.99925 58.1049 8.99897 57.0006C8.99475 40.3336 8.99555 23.6666 8.99894 6.99957C8.99916 5.89517 9.89462 5 10.999 5V5H42.0763C42.6601 5 43.2147 5.25505 43.5946 5.69823L54.5173 18.4382C54.8281 18.8007 54.9989 19.2625 54.9989 19.74V31" />
			<path d="M43.0003 6L43 17C43 18.1045 43.8955 19 45 19H54" />
		</svg>
	);
};
