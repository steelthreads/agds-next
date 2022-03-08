import { PropsWithChildren } from 'react';
import { useSpring, animated } from 'react-spring';
import { Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { tokens, usePrefersReducedMotion } from '@ag.ds-next/core';
import { variantMap, SideNavVariant } from './utils';

const AnimatedIcon = animated(ChevronDownIcon);

type SideNavCollapseButtonProps = PropsWithChildren<{
	ariaControls: string;
	id: string;
	isOpen: boolean;
	onClick: () => void;
	variant: SideNavVariant;
}>;

export const SideNavCollapseButton = ({
	ariaControls,
	children,
	id,
	isOpen,
	onClick,
	variant,
}: SideNavCollapseButtonProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();
	const { background } = variantMap[variant];

	const iconStyle = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(${isOpen ? 180 : 0}deg)` },
		immediate: prefersReducedMotion,
	});

	return (
		<Flex
			as="button"
			role="button"
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			aria-haspopup="menu"
			rounded
			background={background}
			color="action"
			onClick={onClick}
			fontSize="sm"
			lineHeight="heading"
			id={id}
			padding={1}
			width="100%"
			justifyContent="space-between"
			alignItems="center"
			link
			focus
			css={{
				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			{children}
			<AnimatedIcon size={1} style={iconStyle} weight="bold" />
		</Flex>
	);
};