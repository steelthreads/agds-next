import { Box, Flex, Stack } from '@ag.ds-next/box';
import { globalPalette } from '@ag.ds-next/core';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

type FileRejectionProps = {
	fileName: string;
	message: string;
};

export const FileRejection = ({ fileName, message }: FileRejectionProps) => {
	return (
		<Flex
			as="li"
			gap={0.5}
			alignItems="flex-start"
			rounded
			flexDirection="row"
			padding={1}
			css={{
				background: globalPalette.errorMuted,
			}}
		>
			<Box flexShrink={1}>
				<AlertFilledIcon color="error" size="md" />
			</Box>
			<Stack gap={0}>
				<Text color="error">{message}</Text>
				<Text>{fileName}</Text>
			</Stack>
		</Flex>
	);
};
