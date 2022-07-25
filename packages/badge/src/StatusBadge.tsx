import { ReactNode } from 'react';
import { Flex } from '@ag.ds-next/box';
import { boxPalette, globalPalette, mapSpacing } from '@ag.ds-next/core';
import {
	SuccessIcon,
	AlertIcon,
	InfoIcon,
	WarningIcon,
} from '@ag.ds-next/icon';
import { Text } from '@ag.ds-next/text';
import { IndicatorDot } from './IndicatorDot';

export type StatusBadgeProps = {
	/** The status that is printed in the text label. */
	label: ReactNode;
	/** The colour tone to apply. */
	tone: StatusBadgeTone;
};

export const StatusBadge = ({ label, tone }: StatusBadgeProps) => {
	const { borderColor, icon: Icon } = toneMap[tone];
	return (
		<Flex
			display="inline-flex"
			alignItems="center"
			gap={0.5}
			height={height}
			paddingX={0.75}
			background="body"
			border
			css={{
				overflow: 'hidden',
				flexShrink: 0,
				borderRadius,
				borderColor,
				'& svg': {
					flexShrink: 0,
					width: iconWidth,
				},
			}}
		>
			<Icon />
			<Text
				as="span"
				fontSize="sm"
				lineHeight="nospace"
				css={{ whiteSpace: 'nowrap' }}
			>
				{label}
			</Text>
		</Flex>
	);
};

const height = mapSpacing(2); // 32px
const borderRadius = mapSpacing(1); // 16px
const iconWidth = '1.375rem'; // 22px

export type StatusBadgeTone = keyof typeof toneMap;

const toneMap = {
	neutral: {
		borderColor: boxPalette.border,
		icon: () => <IndicatorDot tone="neutral" />,
	},
	success: {
		borderColor: globalPalette.success,
		icon: () => <SuccessIcon color="success" />,
	},
	error: {
		borderColor: globalPalette.error,
		icon: () => <AlertIcon color="error" />,
	},

	info: {
		borderColor: globalPalette.info,
		icon: () => <InfoIcon color="info" />,
	},
	warning: {
		borderColor: globalPalette.warning,
		icon: () => <WarningIcon color="warning" />,
	},
} as const;
