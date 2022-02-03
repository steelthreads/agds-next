import { Flex } from '@ag.ds-next/box';
import { tokens } from '@ag.ds-next/core';
import { Columns } from '@ag.ds-next/columns';
import React from 'react';

const variantMap = {
	light: {
		theme: 'light',
		background: 'page',
	},
	lightAlt: {
		theme: 'light',
		background: 'pageAlt',
	},
	dark: {
		theme: 'dark',
		background: 'page',
	},
	darkAlt: {
		theme: 'dark',
		background: 'pageAlt',
	},
} as const;

type HeaderContainerProps = React.PropsWithChildren<{
	variant: keyof typeof variantMap;
}>;

export function HeaderContainer({ variant, children }: HeaderContainerProps) {
	return (
		<Flex
			as="header"
			theme={variantMap[variant].theme}
			background={variantMap[variant].background}
			color="text"
			paddingY={{ xs: 1, md: 3 }}
			justifyContent="center"
		>
			<Columns
				alignItems="center"
				maxWidth={tokens.maxWidth.container}
				paddingX={tokens.containerPadding}
				width="100%"
			>
				{children}
			</Columns>
		</Flex>
	);
}
