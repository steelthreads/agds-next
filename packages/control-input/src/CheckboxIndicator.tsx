import { Flex } from '@ag.ds-next/box';
import {
	boxPalette,
	globalPalette,
	mapSpacing,
	packs,
	Spacing,
} from '@ag.ds-next/core';
import { ControlSize, iconSize } from './utils';

export type CheckboxIndicatorProps = {
	disabled?: boolean;
	invalid?: boolean;
	size: ControlSize;
	valid?: boolean;
};

export const CheckboxIndicator = ({
	disabled,
	invalid,
	size,
	valid,
}: CheckboxIndicatorProps) => {
	const { width, height, borderWidth } = packs.control[size];
	return (
		<Flex
			justifyContent="center"
			alignItems="center"
			width={width}
			height={height}
			css={{
				borderWidth,
				borderStyle: 'solid',
				borderColor: boxPalette.borderInput,
				backgroundColor: globalPalette.lightBackgroundBody,
				opacity: disabled ? 0.3 : undefined,
				...(invalid
					? {
							borderColor: globalPalette.error,
							backgroundColor: boxPalette.backgroundError,
					  }
					: valid
					? {
							borderColor: globalPalette.success,
							backgroundColor: boxPalette.backgroundSuccess,
					  }
					: undefined),
			}}
			background="body"
			color="text"
			rounded
		>
			<CheckboxIcon size={iconSize[size]} />
		</Flex>
	);
};

const CheckboxIcon = ({ size }: { size: Spacing }) => (
	<svg
		aria-hidden="true"
		viewBox="0 0 24 24"
		clipRule="evenodd"
		xmlns="http://www.w3.org/2000/svg"
		focusable="false"
		css={{
			width: mapSpacing(size),
			height: mapSpacing(size),
			display: 'none',
			color: globalPalette.lightForegroundText,
			fill: 'none',
			stroke: 'currentColor',
		}}
		role="img"
	>
		<path
			d="M3 13.4286L8.4 19L21 6"
			strokeWidth={3}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
