import { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import {
	InpageNav,
	InpageNavContainer,
	InpageNavItem,
	InpageNavItemContainer,
	InpageNavTitle,
} from './index';

export default {
	title: 'navigation/InpageNav',
	component: InpageNav,
	subcomponents: {
		InpageNavContainer,
		InpageNavItem,
		InpageNavItemContainer,
		InpageNavTitle,
	},
} as ComponentMeta<typeof InpageNav>;

const exampleLinks = [
	{ href: '#section-1', label: 'Section 1' },
	{ href: '#section-2', label: 'Section 2' },
	{ href: '#section-3', label: 'Section 3' },
	{ href: '#section-4', label: 'Section 4' },
	{ href: '#section-5', label: 'Section 5' },
];

const ExampleContent = () => (
	<Prose>
		{[1, 2, 3, 4, 5].map((idx) => (
			<Fragment key={idx}>
				<h2 id={`section-${idx}`}>Section {idx}</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
					praesentium at voluptas voluptate, minus accusamus doloremque repellat
					molestias id, iusto cum adipisci distinctio tempore blanditiis dolor
					hic vero omnis laboriosam! Aenean mattis maximus ante, vitae facilisis
					nunc commodo vitae.
				</p>
				<p>
					Pellentesque habitant morbi tristique senectus et netus et malesuada
					fames ac turpis egestas. Integer non erat et purus faucibus
					consectetur. Donec at hendrerit odio. In hac habitasse platea
					dictumst. Sed eleifend eu sem ut laoreet. Cras rutrum metus consequat
					pellentesque luctus. Aenean nunc purus, scelerisque ut pretium ut,
					blandit ac lacus.
				</p>
			</Fragment>
		))}
	</Prose>
);

export const Basic: ComponentStory<typeof InpageNav> = (args) => (
	<Stack gap={3}>
		<InpageNav {...args} />
		<ExampleContent />
	</Stack>
);
Basic.args = {
	title: 'On this page',
	links: exampleLinks,
};

export const Modular = () => (
	<Stack gap={3}>
		<InpageNavContainer aria-label="In page">
			<InpageNavTitle>On this page</InpageNavTitle>
			<InpageNavItemContainer>
				{exampleLinks.map(({ label, ...props }, index) => (
					<InpageNavItem key={index} {...props}>
						{label}
					</InpageNavItem>
				))}
			</InpageNavItemContainer>
		</InpageNavContainer>
		<ExampleContent />
	</Stack>
);
