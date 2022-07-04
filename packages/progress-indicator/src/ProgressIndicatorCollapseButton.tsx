import { useMemo } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Flex } from '@ag.ds-next/box';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { boxPalette, tokens, usePrefersReducedMotion } from '@ag.ds-next/core';
import { BaseButton } from '@ag.ds-next/button';
import type { ProgressIndicatorItem } from './ProgressIndicatorItem';

type ProgressIndicatorCollapseButtonProps = {
	ariaControls: string;
	id: string;
	isOpen: boolean;
	items: ProgressIndicatorItem[];
	onClick: () => void;
};

const AnimatedIcon = animated(ChevronDownIcon);

export const ProgressIndicatorCollapseButton = ({
	ariaControls,
	id,
	isOpen,
	items,
	onClick,
}: ProgressIndicatorCollapseButtonProps) => {
	const prefersReducedMotion = usePrefersReducedMotion();

	const iconStyle = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(${isOpen ? 180 : 0}deg)` },
		immediate: prefersReducedMotion,
	});

	const title = useMemo(() => {
		const activeItemIndex = items.findIndex(({ status }) => status === 'doing');
		if (activeItemIndex === -1) return 'Progress';
		return `Doing step ${activeItemIndex + 1} of ${items.length}`;
	}, [items]);

	return (
		<Flex
			as={BaseButton}
			aria-controls={ariaControls}
			aria-expanded={isOpen}
			onClick={onClick}
			id={id}
			color="action"
			fontSize="md"
			lineHeight="heading"
			fontWeight="bold"
			padding={1}
			justifyContent="space-between"
			alignItems="center"
			width="100%"
			link
			focus
			css={{
				'&:hover': {
					background: boxPalette.backgroundShade,
				},

				[tokens.mediaQuery.min.md]: {
					display: 'none',
				},
			}}
		>
			{title}
			<AnimatedIcon size="sm" weight="bold" style={iconStyle} />
		</Flex>
	);
};
