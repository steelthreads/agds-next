import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';
import { AlertFilledIcon } from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';

type FileRejectionProps = {
	children: ReactNode;
};

export const FileRejection = ({ children }: FileRejectionProps) => {
	return (
		<Flex
			as="li"
			gap={0.5}
			alignItems="center"
			rounded
			padding={1}
			css={{
				background: boxPalette.backgroundError,
			}}
		>
			<AlertFilledIcon color="error" size="md" />
			<Text color="error">{children}</Text>
		</Flex>
	);
};
