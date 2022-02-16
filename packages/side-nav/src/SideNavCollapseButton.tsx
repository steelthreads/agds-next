import { useSpring, animated } from 'react-spring';
import { Flex } from '@ag.ds-next/box';
import { Icon } from '@ag.ds-next/icon';
import { tokens, usePrefersReducedMotion } from '@ag.ds-next/core';

const AnimatedIcon = animated(Icon);

export const SideNavCollapseButton = ({
	isOpen,
	onClick,
}: {
	isOpen: boolean;
	onClick: () => void;
}) => {
	const prefersReducedMotion = usePrefersReducedMotion();

	const iconStyle = useSpring({
		from: { transform: `rotate(0deg)` },
		to: { transform: `rotate(${isOpen ? 0 : 180}deg)` },
		immediate: prefersReducedMotion,
	});

	return (
		<Flex
			as="button"
			// aria-controls={ariaControls}
			aria-expanded={isOpen}
			rounded
			color="action"
			onClick={onClick}
			fontSize="md"
			// id={id}
			fontWeight="bold"
			padding={1}
			width="100%"
			justifyContent="space-between"
			alignItems="center"
			link
			focus
			css={{
				[tokens.mediaQuery.min.sm]: {
					display: 'none',
				},
			}}
		>
			In this section
			<AnimatedIcon icon="chevronUp" size={1} style={iconStyle} />
		</Flex>
	);
};
