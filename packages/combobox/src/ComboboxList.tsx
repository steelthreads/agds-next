import { forwardRef, PropsWithChildren } from 'react';
import { Box } from '@ag.ds-next/box';

export type ComboboxListProps = PropsWithChildren<{
	isOpen: boolean;
}>;

export const ComboboxList = forwardRef<HTMLUListElement, ComboboxListProps>(
	function ComboboxList({ children, isOpen, ...props }, ref) {
		return (
			<Box
				ref={ref}
				as="ul"
				background="body"
				border
				borderColor="muted"
				rounded
				{...props}
				css={{
					opacity: isOpen ? 1 : 0,
					position: 'relative',
					overflowY: 'scroll',
					maxHeight: 160,
				}}
			>
				{children}
			</Box>
		);
	}
);
