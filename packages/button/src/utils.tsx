import {
	fontGrid,
	outline,
	themeValues,
	tokens,
	mapSpacing,
} from '@ag.ds-next/core';

const variants = {
	primary: {
		background: themeValues.foreground.action,
		borderColor: themeValues.foreground.action,
		color: themeValues.background.page,
		textDecoration: 'none',

		'&:hover': {
			background: themeValues.foreground.text,
			borderColor: themeValues.foreground.text,
			color: themeValues.background.page,
			textDecoration: 'underline',
		},

		'&:focus': outline,
	},
	secondary: {
		background: 'transparent',
		border: `3px solid ${themeValues.foreground.action}`,
		color: themeValues.foreground.action,
		textDecoration: 'none',

		'&:hover': {
			background: 'transparent',
			border: `3px solid ${themeValues.foreground.text}`,
			color: themeValues.foreground.text,
			textDecoration: 'underline',
		},

		'&:focus': outline,
	},
	tertiary: {
		background: 'transparent',
		border: `3px solid transparent`,
		color: themeValues.foreground.action,
		textDecoration: 'underline',

		'&:hover': {
			background: 'transparent',
			border: `3px solid transparent`,
			color: themeValues.foreground.text,
			textDecoration: 'none',
		},

		'&:focus': outline,
	},
} as const;

export type ButtonVariant = keyof typeof variants;

export function buttonStyles({
	block,
	disabled,
	variant = 'primary',
}: {
	block?: boolean;
	disabled?: boolean;
	variant?: ButtonVariant;
}) {
	return {
		...variants[variant],
		...fontGrid('sm', 'default'),
		display: 'inline-block',
		borderWidth: 3,
		borderStyle: 'solid',
		borderRadius: tokens.borderRadius,
		cursor: 'pointer',
		fontFamily: tokens.font.body,
		paddingTop: mapSpacing(0.5),
		paddingBottom: mapSpacing(0.5),
		paddingLeft: mapSpacing(1.5),
		paddingRight: mapSpacing(1.5),
		boxSizing: 'border-box',
		textAlign: 'center',

		...(block && {
			display: 'block',
			width: '100%',
		}),

		...(disabled && {
			cursor: 'not-allowed',
			opacity: 0.3,
			// reset hover and focus styles
			'&:hover': {},
			'&:focus': {},
		}),
	} as const;
}
