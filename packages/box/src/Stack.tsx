import { forwardRefWithAs } from '@ag.ds-next/core';
import type { BoxProps } from './styles';
import { Box } from './Box';

export type StackProps = Omit<BoxProps, 'display'>;

export const Stack = forwardRefWithAs<'div', StackProps>(function Stack(
	{
		flexDirection = 'column',
		justifyContent = 'flex-start',
		alignItems = 'stretch',
		...props
	},
	ref
) {
	return (
		<Box
			ref={ref}
			display="flex"
			flexDirection={flexDirection}
			justifyContent={justifyContent}
			alignItems={alignItems}
			css={{
				p: { margin: 0 },
			}}
			{...props}
		/>
	);
});
