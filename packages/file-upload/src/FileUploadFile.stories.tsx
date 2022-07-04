import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Box } from '@ag.ds-next/box';
import { FileUploadFile } from './FileUploadFile';

export default {
	title: 'forms/FileUpload/FileUploadFile',
	component: FileUploadFile,
} as ComponentMeta<typeof FileUploadFile>;

const Template: ComponentStory<typeof FileUploadFile> = (args) => {
	return <FileUploadFile {...args} />;
};

export const OnLight = Template.bind({});
OnLight.args = {
	name: 'Example.jpg',
	size: 2345,
	// file: new File(['this is an example file'], 'example.jpg', {
	// 	type: 'image/jpg',
	// }),
};

export const OnDark: ComponentStory<typeof FileUploadFile> = (args) => (
	<Box background="body" palette="dark" padding={1.5}>
		<Template {...args} />
	</Box>
);
OnDark.args = {
	file: new File(['this is an example file'], 'example.jpg', {
		type: 'image/jpg',
	}),
};
