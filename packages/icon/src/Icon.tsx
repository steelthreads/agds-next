import { ReactNode, SVGAttributes } from 'react';
import { boxPalette, mapSpacing } from '@ag.ds-next/core';
import { foregroundColorMap } from '@ag.ds-next/box';

export const iconColors = {
	...foregroundColorMap,
	border: boxPalette.border,
};

type IconColor = keyof typeof iconColors;

const iconSizes = {
	sm: 1,
	md: 1.5,
	lg: 2,
} as const;

type IconSize = keyof typeof iconSizes;

type NativeSvgProps = SVGAttributes<SVGSVGElement>;

export type IconProps = {
	className?: string;
	color?: IconColor;
	size?: IconSize;
	style?: NativeSvgProps['style'];
	weight?: 'regular' | 'bold';
};

export const createIcon = (children: ReactNode, name: string) => {
	const Icon = ({
		className,
		size = 'md',
		color,
		weight = 'regular',
		style,
	}: IconProps) => {
		const resolvedSize = mapSpacing(iconSizes[size]);
		return (
			<svg
				aria-hidden="true"
				// Note the width and height attribute is a fallback for older browsers. This may not be required and could potentially be removed.
				width="24"
				height="24"
				viewBox="0 0 24 24"
				clipRule="evenodd"
				xmlns="http://www.w3.org/2000/svg"
				focusable="false"
				css={{
					width: resolvedSize,
					height: resolvedSize,
					fill: 'none',
					color: color ? iconColors[color] : undefined,
					stroke: 'currentColor',
					strokeLinejoin: 'round',
					strokeLinecap: 'round',
					strokeWidth: weight === 'bold' ? 3 : 2,
				}}
				role="img"
				style={style}
				className={className}
			>
				{children}
			</svg>
		);
	};

	Icon.displayName = name;

	return Icon;
};
