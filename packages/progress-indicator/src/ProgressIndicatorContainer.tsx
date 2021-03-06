import type { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';

export type ProgressIndicatorContainerProps = {
	children: ReactNode;
};

export const ProgressIndicatorContainer = ({
	children,
}: ProgressIndicatorContainerProps) => (
	<Box
		as="section"
		borderBottom
		css={{
			'li:last-of-type': { borderBottom: 'none' },
		}}
	>
		{children}
	</Box>
);
