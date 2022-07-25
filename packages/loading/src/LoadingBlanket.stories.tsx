import { Fragment } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { Header } from '@ag.ds-next/header';
import { Logo } from '@ag.ds-next/ag-branding/';
import { MainNav } from '@ag.ds-next/main-nav';
import { Content } from '@ag.ds-next/content';
import { Prose } from '@ag.ds-next/prose';
import {
	LoadingBlanket,
	LoadingBlanketProps,
	LoadingBlanketContainer,
	LoadingBlanketContent,
	LoadingBlanketLabel,
	LoadingDots,
} from './index';

export default {
	title: 'content/Loading/LoadingBlanket',
	component: LoadingBlanket,
} as ComponentMeta<typeof LoadingBlanket>;

const Template = (props: LoadingBlanketProps) => (
	<Box
		background="body"
		height="300px"
		width="100%"
		padding={1}
		border
		css={{ position: 'relative' }}
	>
		<LoadingBlanket {...props} />
	</Box>
);

export const Basic: ComponentStory<typeof LoadingBlanket> = (args) => (
	<Template {...args} />
);
Basic.args = {
	label: 'Component loading state message',
};

const FullScreenContent = () => (
	<Fragment>
		<Header logo={<Logo />} heading="Export Service" />
		<MainNav links={[{ label: 'Hello', href: '#' }]} variant="agriculture" />
		<Content>
			<Prose>
				<h1>Page heading</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia
					elit. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend.
					Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia
					tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras
					a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis,
					molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu,
					finibus lacinia libero.
				</p>
				<p>
					Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex
					convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo
					sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam
					libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam
					aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta
					ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros.
					Interdum et malesuada fames ac ante ipsum primis in faucibus.
					Suspendisse sodales metus quis vulputate convallis. Morbi congue
					lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor
					ullamcorper.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
					at arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia
					elit. Orci varius natoque penatibus et magnis dis parturient montes,
					nascetur ridiculus mus. Integer scelerisque at ligula tempor eleifend.
					Vestibulum volutpat, dolor eu rutrum consequat, libero justo lacinia
					tortor, id varius tortor ante sit amet nisl. Aenean at dui diam. Cras
					a ligula a ante aliquam lacinia. Ut dolor quam, gravida eu dui quis,
					molestie lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu,
					finibus lacinia libero.
				</p>
				<p>
					Suspendisse feugiat rhoncus magna eleifend aliquam. Morbi euismod ex
					convallis viverra eleifend. Nullam vel finibus libero. Maecenas leo
					sem, consectetur sit amet ipsum vel, commodo porttitor quam. Nullam
					libero nulla, cursus a turpis et, ullamcorper lobortis metus. Aliquam
					aliquam sodales malesuada. Phasellus sit amet libero ut nulla porta
					ornare. In elit lectus, iaculis et volutpat eget, tempor ornare eros.
					Interdum et malesuada fames ac ante ipsum primis in faucibus.
					Suspendisse sodales metus quis vulputate convallis. Morbi congue
					lectus eget massa finibus luctus. Pellentesque tempus dui vel auctor
					ullamcorper.
				</p>
			</Prose>
		</Content>
	</Fragment>
);

export const FullScreen: ComponentStory<typeof LoadingBlanket> = (args) => (
	<Box background="body">
		<FullScreenContent />
		<LoadingBlanket {...args} />
	</Box>
);
FullScreen.args = {
	fullScreen: true,
	label: 'Loading state message',
};

export const Modular = () => (
	<Box background="body" dark>
		<FullScreenContent />
		<LoadingBlanketContainer fullScreen>
			<LoadingBlanketContent>
				<LoadingDots aria-label="loading" role="status" size="lg" />
				<LoadingBlanketLabel>Loading</LoadingBlanketLabel>
			</LoadingBlanketContent>
		</LoadingBlanketContainer>
	</Box>
);
