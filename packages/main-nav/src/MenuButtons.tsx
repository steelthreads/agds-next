import { MouseEventHandler, PropsWithChildren } from 'react';
import { Box, Flex } from '@ag.ds-next/box';
import { boxPalette } from '@ag.ds-next/core';

import { localPalette } from './utils';

export type MenuButtonProps = PropsWithChildren<{
	onClick: MouseEventHandler<HTMLButtonElement>;
}>;

function MenuButton({ onClick, children }: MenuButtonProps) {
	return (
		<Box paddingBottom={0.5} display={{ xs: 'block', lg: 'none' }}>
			<Flex
				as="button"
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
				fontSize="xs"
				lineHeight="nospace"
				gap={0.5}
				padding={1}
				height="100%"
				focus
				css={{
					appearance: 'none',
					border: 'none',
					cursor: 'pointer',
					background: 'transparent',
					color: boxPalette.foregroundAction,
					'&:hover': {
						color: boxPalette.foregroundText,
						backgroundColor: localPalette.linkHoverBg,
					},
				}}
				onClick={onClick}
			>
				{children}
			</Flex>
		</Box>
	);
}

export function ToggleButton({ onClick }: MenuButtonProps) {
	return (
		<MenuButton onClick={onClick}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentcolor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect x="4" y="16" width="16" height="2" />
				<rect x="4" y="11" width="16" height="2" />
				<rect x="4" y="6" width="16" height="2" />
			</svg>
			<span>Menu</span>
		</MenuButton>
	);
}

export function CloseButton({ onClick }: MenuButtonProps) {
	return (
		<MenuButton onClick={onClick}>
			<svg
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="currentcolor"
				xmlns="http://www.w3.org/2000/svg"
			>
				<rect
					x="6"
					y="17.3137"
					width="16"
					height="2"
					transform="rotate(-45 6 17.3137)"
				/>
				<rect
					x="7.41406"
					y="6"
					width="16"
					height="2"
					transform="rotate(45 7.41406 6)"
				/>
			</svg>
			<span>Close</span>
		</MenuButton>
	);
}