import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Prose } from '@ag.ds-next/prose';
import { SectionContent } from './SectionContent';

export default {
	title: 'layout/Content/SectionContent',
	component: SectionContent,
} as ComponentMeta<typeof SectionContent>;

export const Basic: ComponentStory<typeof SectionContent> = (args) => (
	<SectionContent {...args}>
		<Prose>
			<h2>Section heading</h2>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque at
				arcu eleifend, varius enim non, eleifend nibh. Quisque ac lacinia elit.
				Orci varius natoque penatibus et magnis dis parturient montes, nascetur
				ridiculus mus. Integer scelerisque at ligula tempor eleifend. Vestibulum
				volutpat, dolor eu rutrum consequat, libero justo lacinia tortor, id
				varius tortor ante sit amet nisl. Aenean at dui diam. Cras a ligula a
				ante aliquam lacinia. Ut dolor quam, gravida eu dui quis, molestie
				lacinia dolor. Fusce lacus mi, pharetra molestie tortor eu, finibus
				lacinia libero.
			</p>
		</Prose>
	</SectionContent>
);
Basic.args = {
	background: 'shade',
};
