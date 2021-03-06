import { PropsWithChildren } from 'react';
import { Text } from '@ag.ds-next/text';

export type ControlLabelProps = PropsWithChildren<{
	disabled?: boolean;
}>;

export const ControlLabel = ({ children, disabled }: ControlLabelProps) => (
	<Text flexGrow={1} color={disabled ? 'muted' : 'text'}>
		{children}
	</Text>
);
