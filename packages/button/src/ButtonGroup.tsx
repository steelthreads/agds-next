import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';

export type ButtonGroupProps = { children: ReactNode };

export const ButtonGroup = ({ children }: ButtonGroupProps) => {
	return (
		<Flex
			gap={1}
			flexDirection={['column', 'row']}
			alignItems={['stretch', 'flex-start']}
		>
			{children}
		</Flex>
	);
};
