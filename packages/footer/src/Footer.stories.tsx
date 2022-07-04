import { useMemo } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { tokens } from '@ag.ds-next/core';
import { Logo } from '@ag.ds-next/ag-branding';
import { Box, Stack } from '@ag.ds-next/box';
import { Columns, Column } from '@ag.ds-next/columns';
import { H3 } from '@ag.ds-next/heading';
import { Text } from '@ag.ds-next/text';
import { LinkList } from '@ag.ds-next/link-list';
import { Footer, FooterDivider } from './';

export default {
	title: 'layout/Footer',
	component: Footer,
} as ComponentMeta<typeof Footer>;

const AgSimpleFooter: ComponentStory<typeof Footer> = (args) => {
	const year = useMemo(() => new Date().getFullYear(), []);
	return (
		<Footer variant={args.variant}>
			<nav aria-label="footer">
				<LinkList
					horizontal
					links={[
						{ href: '#', label: 'Home' },
						{ href: '#', label: 'Terms and conditions' },
						{ href: '#', label: 'Privacy policy' },
						{ href: '#', label: 'A really long link title' },
					]}
				/>
			</nav>
			<FooterDivider />
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				We acknowledge the traditional owners of country throughout Australia
				and recognise their continuing connection to land, waters and culture.
				We pay our respects to their Elders past, present and emerging.
			</Text>
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				&copy; {year} Department of Agriculture, Fisheries and Forestry
			</Text>
		</Footer>
	);
};

export const AgricultureVariant = AgSimpleFooter.bind({});
AgricultureVariant.args = {
	variant: 'agriculture',
};
export const LightVariant = AgSimpleFooter.bind({});
LightVariant.args = {
	variant: 'light',
};

export const LightAltVariant = AgSimpleFooter.bind({});
LightAltVariant.args = {
	variant: 'lightAlt',
};

export const DarkVariant = AgSimpleFooter.bind({});
DarkVariant.args = {
	variant: 'dark',
};

export const DarkAltVariant = AgSimpleFooter.bind({});
DarkAltVariant.args = {
	variant: 'darkAlt',
};

const AgComplexFooter: ComponentStory<typeof Footer> = (args) => {
	const year = useMemo(() => new Date().getFullYear(), []);
	const columnSpanning = { xs: 12, sm: 6, lg: 3 } as const;
	return (
		<Footer variant={args.variant}>
			<nav aria-label="footer">
				<Columns>
					<Column columnSpan={columnSpanning}>
						<Stack gap={0.5}>
							<H3>Section</H3>
							<LinkList
								links={[
									{ href: '#', label: 'Link 1' },
									{ href: '#', label: 'Link 2' },
									{ href: '#', label: 'Link 3' },
								]}
							/>
						</Stack>
					</Column>
					<Column columnSpan={columnSpanning}>
						<Stack gap={0.5}>
							<H3>Section</H3>
							<LinkList
								links={[
									{ href: '#', label: 'Link 1' },
									{ href: '#', label: 'Link 2' },
									{ href: '#', label: 'Link 3' },
								]}
							/>
						</Stack>
					</Column>
					<Column columnSpan={columnSpanning}>
						<Stack gap={0.5}>
							<H3>Section</H3>
							<LinkList
								links={[
									{ href: '#', label: 'Link 1' },
									{ href: '#', label: 'Link 2' },
									{ href: '#', label: 'Link 3' },
								]}
							/>
						</Stack>
					</Column>
					<Column columnSpan={columnSpanning}>
						<Stack gap={0.5}>
							<H3>Section</H3>
							<LinkList
								links={[
									{ href: '#', label: 'Link 1' },
									{ href: '#', label: 'Link 2' },
									{ href: '#', label: 'Link 3' },
								]}
							/>
						</Stack>
					</Column>
				</Columns>
			</nav>
			<FooterDivider />
			<Text as="p">Footer text</Text>
			<Box maxWidth="240px">
				<Logo />
			</Box>
			<FooterDivider />
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				We acknowledge the traditional owners of country throughout Australia
				and recognise their continuing connection to land, waters and culture.
				We pay our respects to their Elders past, present and emerging.
			</Text>
			<Text fontSize="xs" maxWidth={tokens.maxWidth.bodyText}>
				&copy; {year} Department of Agriculture, Fisheries and Forestry
			</Text>
		</Footer>
	);
};

export const ComplexContent = AgComplexFooter.bind({});
ComplexContent.args = {
	variant: 'agriculture',
};
