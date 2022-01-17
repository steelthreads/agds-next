import { ReactNode } from 'react';
import { Box } from '@ag.ds-next/box';
import { LinkListContext, useLinkListDepth } from './context';

export const SideNavLinkGroup = ({
	children,
	...props
}: {
	children: ReactNode;
}) => {
	const depth = useLinkListDepth();
	return (
		<LinkListContext.Provider value={depth + 1}>
			<Box as="ul" {...props}>
				{children}
			</Box>
		</LinkListContext.Provider>
	);
};
