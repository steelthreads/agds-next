import { css } from '@emotion/react';
import {
	tokens,
	BoxPalette,
	boxPalettes,
	boxPalette,
	ResponsiveProp,
	mapResponsiveProp,
	mapSpacing,
	mq,
	fontGrid,
	Spacing,
	globalPalette,
	packs,
	BorderWidth,
	FontWeight,
	FontSize,
	LineHeight,
	Font,
} from '@ag.ds-next/core';

type PaletteProps = Partial<{
	palette: BoxPalette;
	dark: boolean;
	light: boolean;
}>;

function paletteStyles({ palette, dark, light }: PaletteProps) {
	if (palette) return boxPalettes[palette];
	if (dark) return boxPalettes.dark;
	if (light) return boxPalettes.light;
}

export const foregroundColorMap = {
	text: boxPalette.foregroundText,
	action: boxPalette.foregroundAction,
	focus: boxPalette.foregroundFocus,
	muted: boxPalette.foregroundMuted,
	accent: globalPalette.accent,
	error: globalPalette.error,
	success: globalPalette.success,
	warning: globalPalette.warning,
	info: globalPalette.info,
	inherit: 'inherit',
};

export const backgroundColorMap = {
	body: boxPalette.backgroundBody,
	shade: boxPalette.backgroundShade,
	bodyAlt: boxPalette.backgroundBodyAlt,
	shadeAlt: boxPalette.backgroundShadeAlt,
};

type ColorProps = Partial<{
	color: ResponsiveProp<keyof typeof foregroundColorMap>;
	background: ResponsiveProp<keyof typeof backgroundColorMap>;
}>;

function colorStyles({ color, background }: ColorProps) {
	return {
		color: color
			? mapResponsiveProp(color, (t) => foregroundColorMap[t])
			: undefined,
		backgroundColor: background
			? mapResponsiveProp(background, (t) => backgroundColorMap[t])
			: undefined,
	};
}

type TypographyProps = Partial<{
	fontWeight: ResponsiveProp<FontWeight>;
	fontFamily: ResponsiveProp<Font>;
	fontSize: ResponsiveProp<FontSize>;
	lineHeight: LineHeight;
}>;

function typographyStyles({
	fontWeight,
	fontFamily,
	fontSize: _fontSize,
	lineHeight: _lineHeight = 'default',
}: TypographyProps) {
	const responsiveFontGrid = mapResponsiveProp(_fontSize, (t) =>
		fontGrid(t, _lineHeight)
	);

	const { fontSize, lineHeight } = responsiveFontGrid?.reduce<{
		fontSize: (string | null)[];
		lineHeight: (number | null)[];
	}>(
		(acc, entry, index) => {
			acc.fontSize[index] = isEntry(entry) ? entry.fontSize : null;
			acc.lineHeight[index] = isEntry(entry) ? entry.lineHeight : null;
			return acc;
		},
		{ fontSize: [], lineHeight: [] }
	) ?? { fontSize: undefined, lineHeight: undefined };

	return {
		fontWeight: mapResponsiveProp(fontWeight, (t) => tokens.fontWeight[t]),
		fontFamily: mapResponsiveProp(fontFamily, (t) => tokens.font[t]),
		fontSize,
		lineHeight,
		'& ::selection': {
			color: boxPalette.backgroundBody,
			backgroundColor: boxPalette.foregroundAction,
		},
	};
}

function isEntry(a: unknown): a is {
	fontSize: string;
	lineHeight: number;
} {
	return !!a; // ie. not null or undefined
}
type LayoutProps = Partial<{
	display: ResponsiveProp<
		| 'block'
		| 'flex'
		| 'inline'
		| 'inline-block'
		| 'inline-flex'
		| 'none'
		| 'table-row-group'
		| 'table-header-group'
		| 'table-footer-group'
		| 'table-row'
		| 'table-cell'
		| 'table-column-group'
		| 'table-column'
		| 'table-caption'
	>;
	flexDirection: ResponsiveProp<
		'row' | 'column' | 'row-reverse' | 'column-reverse'
	>;
	flexWrap: ResponsiveProp<'nowrap' | 'wrap' | 'wrap-reverse'>;
	flexGrow: ResponsiveProp<number>;
	flexShrink: ResponsiveProp<number>;
	columnSpan: ResponsiveProp<number>;
	gridColumnStart: ResponsiveProp<number>;
	gridColumnEnd: ResponsiveProp<number>;
	justifyContent: ResponsiveProp<
		| 'flex-start'
		| 'flex-end'
		| 'center'
		| 'space-between'
		| 'space-around'
		| 'space-evenly'
	>;
	alignItems: ResponsiveProp<
		'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline'
	>;
	gap: ResponsiveProp<Spacing>;
	width: ResponsiveProp<number | string>;
	minWidth: ResponsiveProp<number | string>;
	maxWidth: ResponsiveProp<number | string>;
	height: ResponsiveProp<number | string>;
	minHeight: ResponsiveProp<number | string>;
	maxHeight: ResponsiveProp<number | string>;
}>;

function layoutStyles({
	display,
	flexDirection,
	flexWrap,
	flexGrow,
	flexShrink,
	columnSpan,
	gridColumnStart,
	gridColumnEnd,
	justifyContent,
	alignItems,
	gap,
	width,
	minWidth,
	maxWidth,
	height,
	minHeight,
	maxHeight,
}: LayoutProps) {
	return {
		display: mapResponsiveProp(display),
		flexDirection: mapResponsiveProp(flexDirection),
		flexWrap: mapResponsiveProp(flexWrap),
		flexGrow: mapResponsiveProp(flexGrow),
		flexShrink: mapResponsiveProp(flexShrink),
		gridColumn: mapResponsiveProp(columnSpan, (v) => `span ${v}/span ${v}`),
		gridColumnStart: mapResponsiveProp(gridColumnStart),
		gridColumnEnd: mapResponsiveProp(gridColumnEnd),
		justifyContent: mapResponsiveProp(justifyContent),
		alignItems: mapResponsiveProp(alignItems),
		gap: mapResponsiveProp(gap, mapSpacing),
		width: mapResponsiveProp(width),
		minWidth: mapResponsiveProp(minWidth),
		maxWidth: mapResponsiveProp(maxWidth),
		height: mapResponsiveProp(height),
		minHeight: mapResponsiveProp(minHeight),
		maxHeight: mapResponsiveProp(maxHeight),
	};
}

const borderColorMap = {
	border: 'border',
	muted: 'borderMuted',
} as const;

type BorderColor = keyof typeof borderColorMap;

type BorderProps = Partial<{
	border: boolean;
	borderWidth: BorderWidth;
	borderColor: BorderColor;
	borderLeft: boolean;
	borderLeftWidth: BorderWidth;
	borderRight: boolean;
	borderRightWidth: BorderWidth;
	borderTop: boolean;
	borderTopWidth: BorderWidth;
	borderBottom: boolean;
	borderBottomWidth: BorderWidth;
	borderX: boolean;
	borderY: boolean;
	rounded: boolean;
}>;

function borderStyles({
	border,
	borderWidth = 'sm',
	borderColor = 'border',
	borderLeft,
	borderLeftWidth,
	borderRight,
	borderRightWidth,
	borderTop,
	borderTopWidth,
	borderBottom,
	borderBottomWidth,
	borderX,
	borderY,
	rounded,
}: BorderProps) {
	const anyBorder =
		border ||
		borderLeft ||
		borderRight ||
		borderTop ||
		borderBottom ||
		borderX ||
		borderY;
	return {
		borderWidth: 0,
		borderLeftWidth:
			border ?? borderX ?? borderLeft
				? tokens.borderWidth[borderLeftWidth || borderWidth]
				: undefined,
		borderRightWidth:
			border ?? borderX ?? borderRight
				? tokens.borderWidth[borderRightWidth || borderWidth]
				: undefined,
		borderTopWidth:
			border ?? borderY ?? borderTop
				? tokens.borderWidth[borderTopWidth || borderWidth]
				: undefined,
		borderBottomWidth:
			border ?? borderY ?? borderBottom
				? tokens.borderWidth[borderBottomWidth || borderWidth]
				: undefined,
		borderColor: anyBorder
			? boxPalette[borderColorMap[borderColor]]
			: undefined,
		borderStyle: anyBorder ? 'solid' : undefined,
		borderRadius: rounded ? tokens.borderRadius : undefined,
	};
}

type PaddingProps = Partial<{
	paddingTop: ResponsiveProp<Spacing>;
	paddingBottom: ResponsiveProp<Spacing>;
	paddingRight: ResponsiveProp<Spacing>;
	paddingLeft: ResponsiveProp<Spacing>;
	paddingX: ResponsiveProp<Spacing>;
	paddingY: ResponsiveProp<Spacing>;
	padding: ResponsiveProp<Spacing>;
}>;

// TODO: Explain how overlapping shorthands padding is applied.
function paddingStyles({
	paddingTop,
	paddingBottom,
	paddingRight,
	paddingLeft,
	paddingX,
	paddingY,
	padding,
}: PaddingProps) {
	return {
		paddingTop: mapResponsiveProp(
			paddingTop ?? paddingY ?? padding,
			mapSpacing
		),
		paddingBottom: mapResponsiveProp(
			paddingBottom ?? paddingY ?? padding,
			mapSpacing
		),
		paddingRight: mapResponsiveProp(
			paddingRight ?? paddingX ?? padding,
			mapSpacing
		),
		paddingLeft: mapResponsiveProp(
			paddingLeft ?? paddingX ?? padding,
			mapSpacing
		),
	};
}

type LinkProps = Partial<{ link: boolean }>;
export const linkStyles = {
	...packs.underline,
	color: boxPalette.foregroundAction,
	cursor: 'pointer',

	'&:hover': {
		color: boxPalette.foregroundText,
		textDecoration: 'none',
	},

	// Display link URLs
	'@media print': {
		'&[href]:after': {
			content: '" (" attr(href) ")" !important',
		},
	},
};

type FocusProps = Partial<{ focus: boolean }>;
export const focusStyles = {
	':focus': packs.outline,
	'&::-moz-focus-inner': {
		border: 0,
	},
};

export type BoxProps = PaletteProps &
	ColorProps &
	BorderProps &
	FocusProps &
	TypographyProps &
	LayoutProps &
	LinkProps &
	PaddingProps;

export function boxStyles({
	palette,
	dark,
	light,
	color,
	background,
	border,
	borderWidth,
	borderColor,
	borderLeft,
	borderLeftWidth,
	borderRight,
	borderRightWidth,
	borderTop,
	borderTopWidth,
	borderBottom,
	borderBottomWidth,
	borderX,
	borderY,
	rounded,
	display,
	flexDirection,
	flexWrap,
	flexGrow,
	flexShrink,
	columnSpan,
	gridColumnStart,
	gridColumnEnd,
	justifyContent,
	alignItems,
	gap,
	width,
	minWidth,
	maxWidth,
	height,
	minHeight,
	maxHeight,
	paddingTop,
	paddingBottom,
	paddingRight,
	paddingLeft,
	paddingX,
	paddingY,
	padding,
	fontWeight,
	fontFamily,
	fontSize,
	focus,
	link,
	lineHeight,
	...restProps
}: BoxProps) {
	return [
		css([
			paletteStyles({ palette, dark, light }),

			// common resets
			{
				boxSizing: 'border-box',
				listStyle: 'none',
				margin: 0,
				padding: 0,
			},

			mq({
				...colorStyles({ background, color }),

				...borderStyles({
					border,
					borderWidth,
					borderColor,
					borderLeft,
					borderLeftWidth,
					borderRight,
					borderRightWidth,
					borderTop,
					borderTopWidth,
					borderBottom,
					borderBottomWidth,
					borderX,
					borderY,
					rounded,
				}),

				...layoutStyles({
					display,
					flexDirection,
					flexWrap,
					flexGrow,
					flexShrink,
					columnSpan,
					gridColumnStart,
					gridColumnEnd,
					justifyContent,
					alignItems,
					gap,
					width,
					minWidth,
					maxWidth,
					height,
					minHeight,
					maxHeight,
				}),

				...paddingStyles({
					paddingTop,
					paddingBottom,
					paddingRight,
					paddingLeft,
					paddingX,
					paddingY,
					padding,
				}),

				...typographyStyles({
					fontWeight,
					fontFamily,
					fontSize,
					lineHeight,
				}),

				...(link ? linkStyles : undefined),
				...(focus ? focusStyles : undefined),
			}),
		]),
		restProps,
	];
}
