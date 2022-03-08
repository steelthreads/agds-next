import React, { PropsWithChildren, ReactNode } from 'react';
import FocusTrap from 'focus-trap-react';

import { Box, Flex, backgroundColorMap } from '@ag.ds-next/box';
import {
	boxPalette,
	useTernaryState,
	mapSpacing,
	tokens,
	globalPalette,
} from '@ag.ds-next/core';

import { localPalette, localPaletteVars } from './utils';
import { CloseButton, ToggleButton } from './MenuButtons';

const variantMap = {
	light: {
		palette: 'light',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.foregroundAction,
	},
	lightAlt: {
		palette: 'light',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.foregroundAction,
	},
	dark: {
		palette: 'dark',
		background: 'body',
		hover: 'shade',
		bottomBar: boxPalette.foregroundAction,
	},
	darkAlt: {
		palette: 'dark',
		background: 'bodyAlt',
		hover: 'shadeAlt',
		bottomBar: boxPalette.foregroundAction,
	},
	agriculture: {
		palette: 'dark',
		background: 'shade',
		hover: 'body',
		bottomBar: globalPalette.accent,
	},
} as const;

export type NavContainerProps = PropsWithChildren<{
	id?: string;
	'aria-label': string;
	rightContent?: ReactNode;
	variant: keyof typeof variantMap;
}>;

export function NavContainer({
	id,
	rightContent,
	'aria-label': ariaLabel,
	children,
	variant,
}: NavContainerProps) {
	const [menuOpen, open, close] = useTernaryState(false);
	const { background, bottomBar, hover, palette } = variantMap[variant];

	return (
		<Box
			id={id}
			data-name="nav-container" // TODO: make this (or something like this) a pattern for providing end users a consistent handle for applying style overrides.
			palette={palette}
			background={background}
			color="text"
			css={{
				position: 'relative',
				[localPaletteVars.linkHoverBg]: backgroundColorMap[hover],
				[localPaletteVars.linkActiveBg]: backgroundColorMap[background],
				[localPaletteVars.bottomBar]: bottomBar, // <-- special case
			}}
		>
			<BottomBar />
			<Flex
				as="nav"
				justifyContent="center"
				css={{ position: 'relative' }}
				aria-label={ariaLabel}
			>
				<Flex
					justifyContent="space-between"
					alignItems="center"
					maxWidth={tokens.maxWidth.container}
					width="100%"
					paddingX={{ xs: 0.75, lg: 2 }}
				>
					<ToggleButton onClick={open} />
					<FocusTrap
						active={menuOpen}
						focusTrapOptions={{
							clickOutsideDeactivates: true,
							onDeactivate: close,
						}}
					>
						<div
							css={{
								[tokens.mediaQuery.max.md]: {
									zIndex: 200,
									position: 'fixed',
									display: menuOpen ? 'block' : 'none',
									background: boxPalette.backgroundBody,
									top: 0,
									left: 0,
									bottom: 0,
									width: '100%',
									maxWidth: tokens.maxWidth.mobileMenu,
									padding: mapSpacing(1),
									boxSizing: 'border-box',
								},
							}}
						>
							<CloseButton onClick={close} />
							<Flex
								justifyContent="space-between"
								width="100%"
								flexDirection={{ xs: 'column', lg: 'row' }}
							>
								{children}
							</Flex>
						</div>
					</FocusTrap>
					{rightContent}
				</Flex>
			</Flex>
			<Overlay menuOpen={menuOpen} />
		</Box>
	);
}

function Overlay({ menuOpen }: { menuOpen: boolean }) {
	if (!menuOpen) return null;
	return (
		<Box
			display={{
				xs: 'block',
				lg: 'none',
			}}
			css={{
				position: 'fixed',
				top: 0,
				left: 0,
				bottom: 0,
				right: 0,
				background: '#000',
				opacity: 0.8,
				zIndex: 100,
			}}
		/>
	);
}

function BottomBar() {
	return (
		<Box
			data-name="nav-bottom-bar"
			paddingTop={0.5}
			css={{
				position: 'absolute',
				bottom: 0,
				left: 0,
				right: 0,
				backgroundColor: localPalette.bottomBar,
			}}
		/>
	);
}