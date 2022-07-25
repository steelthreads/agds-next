import { Fragment } from 'react';
import { ComponentMeta } from '@storybook/react';
import { Prose } from '@ag.ds-next/prose';
import { Stack } from '@ag.ds-next/box';
import { SkipLinkItem } from './SkipLinkItem';
import { SkipLinks } from './SkipLinks';
import { SkipLinkContainer } from './SkipLinkContainer';

export default {
	title: 'navigation/SkipLinks',
	component: SkipLinks,
	subcomponents: { SkipLinkContainer, SkipLinkItem },
} as ComponentMeta<typeof SkipLinkItem>;

export const Basic = () => (
	<Fragment>
		<SkipLinks
			links={[
				{ href: '#main-content', label: 'Skip to main content' },
				{ href: '#main-nav', label: 'Skip to main navigation' },
			]}
		/>
		<ExampleContent />
	</Fragment>
);

export const Modular = () => (
	<Fragment>
		<SkipLinkContainer aria-label="skip links navigation">
			<SkipLinkItem href="#main-content">Skip to main content</SkipLinkItem>
			<SkipLinkItem href="#main-nav">Skip to main navigation</SkipLinkItem>
		</SkipLinkContainer>
		<ExampleContent />
	</Fragment>
);

const ExampleContent = () => (
	<Prose>
		<Stack gap={4}>
			<p>This example space contains a visually hidden feature.</p>
			<nav id="main-nav">
				<ul>
					<li>
						<a href="#">Some navigation</a>
					</li>
				</ul>
			</nav>
			<main id="main-content">
				Some content here with <a href="#">an example link</a>
			</main>
		</Stack>
	</Prose>
);
