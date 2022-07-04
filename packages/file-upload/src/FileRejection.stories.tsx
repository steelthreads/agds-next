import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { FileRejection } from './FileRejection';

export default {
	title: 'forms/FileUpload/FileRejection',
	component: FileRejection,
} as ComponentMeta<typeof FileRejection>;

const Template: ComponentStory<typeof FileRejection> = (args) => {
	return <FileRejection {...args} />;
};

export const OnLight = Template.bind({});
OnLight.args = {
	message: 'File size exceeds 10MB',
	fileName: 'ExampleFile.jpg',
};

export const OnDark: ComponentStory<typeof FileRejection> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	message: 'File size exceeds 10MB',
	fileName: 'ExampleFile.jpg',
};
