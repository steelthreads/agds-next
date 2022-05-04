import { css } from '@emotion/react';
import {
	forwardRefWithAs,
	tokens,
	boxPalette,
	mapSpacing,
	fontGrid,
	packs,
} from '@ag.ds-next/core';
import { Box, BoxProps, linkStyles, focusStyles } from '@ag.ds-next/box';

export const Body = forwardRefWithAs<'div', BoxProps>(function Body(
	props,
	ref
) {
	return <Box ref={ref} css={bodyClass} {...props} />;
});

export const excludeBodyStylesClassname = 'agds-body-reset';

const notSelector = `:not([class]):not(.${excludeBodyStylesClassname})`;

export const bodyClass = css({
	margin: 0,
	textSizeAdjust: '100%',
	color: boxPalette.foregroundText,

	// Font grid
	fontFamily: tokens.font.body,
	...fontGrid('sm', 'default'),

	[`a${notSelector}`]: [linkStyles, focusStyles],

	/**
	 * Highlighting in-page sections that are in focus
	 */
	'[tabindex="0"]:focus, :target': packs.outline,

	/**
	 * `mark` styling.
	 */
	mark: {
		color: boxPalette.backgroundBody,
		backgroundColor: boxPalette.foregroundAction,
	},

	/**
	 * Text selection styling
	 */
	'& ::selection': {
		color: boxPalette.backgroundBody,
		backgroundColor: boxPalette.foregroundAction,
	},

	img: {
		maxWidth: '100%',
	},

	/**
	 * Vertical spacing of common text elements.
	 */
	[`p${notSelector}`]: {
		maxWidth: tokens.maxWidth.bodyText,
		margin: 0,
	},

	[`* + p${notSelector}`]: {
		marginTop: mapSpacing(1.5),
	},

	[`ul${notSelector},ol${notSelector},dl${notSelector},pre`]: {
		margin: 0, //reset defaults
	},

	[`* + ul${notSelector}, * + ol${notSelector}, * + dl${notSelector}, * + pre`]:
		{
			marginTop: mapSpacing(1.5),
		},

	[`ul${notSelector}, ol${notSelector}`]: {
		'> li': {
			marginTop: mapSpacing(0.5),

			[`> ul${notSelector}, > ol${notSelector}`]: {
				marginTop: mapSpacing(0.5),
			},
		},

		[`> ul${notSelector}`]: {
			listStyleType: 'disc',
		},
	},

	[`dl${notSelector}`]: {
		'> dd': {
			marginTop: mapSpacing(0.5),
			paddingLeft: mapSpacing(0.5),
			marginLeft: 0,
			borderLeftWidth: tokens.borderWidth.sm,
			borderLeftStyle: 'solid',
			borderLeftColor: boxPalette.border,
		},

		'> dt': {
			marginTop: mapSpacing(1.5),
			fontWeight: 'bold',

			'&:first-of-type': {
				marginTop: 0,
			},
		},
	},

	[`h1${notSelector}`]: {
		...fontGrid('xxl', 'heading'),
		marginTop: 0,
		marginBottom: 0,
	},
	[`h2${notSelector}`]: {
		...fontGrid('xl', 'heading'),
		marginTop: 0,
		marginBottom: 0,
	},
	[`h3${notSelector}`]: {
		...fontGrid('lg', 'heading'),
		marginTop: 0,
		marginBottom: 0,
	},
	[`h4${notSelector}`]: {
		...fontGrid('md', 'heading'),
		marginTop: 0,
		marginBottom: 0,
	},
	[`h5${notSelector}`]: {
		...fontGrid('sm', 'heading'),
		marginTop: 0,
		marginBottom: 0,
	},
	[`h6${notSelector}`]: {
		...fontGrid('xs', 'heading'),
		marginTop: 0,
		marginBottom: 0,
	},

	[`* + h1${notSelector}`]: { marginTop: mapSpacing(3) },
	[`* + h2${notSelector}`]: { marginTop: mapSpacing(3) },
	[`* + h3${notSelector}`]: { marginTop: mapSpacing(1.5) },
	[`* + h4${notSelector}`]: { marginTop: mapSpacing(1.5) },
	[`* + h5${notSelector}`]: { marginTop: mapSpacing(1.5) },
	[`* + h6${notSelector}`]: { marginTop: mapSpacing(1.5) },

	// Override for sequential headings
	[`h1 + h2${notSelector}`]: { marginTop: mapSpacing(1.5) },
	[`h2 + h3${notSelector}`]: { marginTop: mapSpacing(1.5) },

	/**
	 * Emphasis and alt. voice/mood/diff. from prose text.
	 */
	'em,i': {
		fontStyle: 'italic',
	},

	/**
	 * Stong emphasis.
	 */
	'strong,b': {
		fontWeight: 'bold',
	},

	/**
	 * `small`: for less important information (not stylistic purposes).
	 */
	small: {
		...fontGrid('xs', 'default'),
	},

	/**
	 * `s`: represents contents no longer accurate/relevant.
	 * del` & `ins`: editorial markup.
	 */
	's,del': {
		textDecoration: 'line-through',
	},

	ins: {
		textDecorationLine: 'underline',
		textDecorationStyle: 'dashed', //Waiting on Chrome.
		textDecorationSkipInk: 'auto',
	},

	/**
	 * Defining definition of a term.
	 *
	 * The paragraph, description list group, or section that is the nearest
	 * ancestor of the `dfn` element must also contain the definition(s) for the term
	 * given by the `dfn` element.
	 *
	 * Note: `abbr` can be nested inside `dfn`.
	 */
	dfn: {
		fontStyle: 'normal',
	},

	/**
	 * Abbreviations/acronyms.
	 */
	'abbr,abbr[title]': {
		borderBottom: 'none',
		textDecoration: 'underline dotted',
	},

	'abbr[title]': {
		cursor: 'help',
	},

	'a abbr': {
		paddingBottom: 1,
	},

	/**
	 * Variables, eg. as used in mathematical expressions.
	 *
	 * We also provide semantic support for nested vars, and things like indices.
	 */
	var: {
		padding: '0 1px',
		fontStyle: 'italic',
		fontFamily: 'serif', //We want mathematical notation to use serif vars per convention.

		'sup,sub': {
			fontFamily: tokens.font.body,
			fontStyle: 'normal',
			padding: '0 1px',
		},
	},

	/**
	 * Prevent `sub` and `sup` elements from affecting the line height in
	 * all browsers.
	 * https://github.com/necolas/normalize.css/blob/master/normalize.css#L174
	 */
	'sub,sup': {
		...fontGrid('xs', 'nospace'),
		position: 'relative',
		verticalAlign: 'baseline',
	},

	sub: {
		bottom: '-0.25em',
	},

	sup: {
		top: '-0.5em',
	},

	[`figure${notSelector}`]: {
		marginTop: mapSpacing(1.5),
		marginBottom: 0,
		marginLeft: 0,
		marginRight: 0,
	},

	[`blockquote${notSelector}`]: {
		marginTop: mapSpacing(1.5),
		marginBottom: mapSpacing(1),
		marginLeft: 0,
		marginRight: 0,
		padding: mapSpacing(2),
		borderLeftWidth: tokens.borderWidth.xl,
		borderLeftStyle: 'solid',
		borderColor: boxPalette.border,
		background: boxPalette.backgroundShade,
	},

	/**
	 * Keyboard strokes.
	 * Code snippets and code blocks.
	 */
	[`kbd${notSelector},code${notSelector},samp${notSelector}`]: {
		...fontGrid('xs', 'default'),
		padding: mapSpacing(0.25),
		fontFamily: tokens.font.monospace,
		display: 'inline-block',
		borderRadius: tokens.borderRadius,
		backgroundColor: boxPalette.backgroundShade, // TODO: Check this did't break Docs code rendering
		color: boxPalette.foregroundText,
	},

	'pre${notSelector}': {
		fontFamily: tokens.font.monospace,
	},

	'pre code': {
		display: 'block',
		tabSize: 4,
	},

	/**
	 * Horizontal rule, used for paragraph-level thematic breaks.
	 */
	[`hr${notSelector}`]: {
		boxSizing: 'content-box',
		height: 0,
		overflow: 'visible',
		border: 'none',
		borderTopWidth: tokens.borderWidth.sm,
		borderTopStyle: 'solid',
		borderColor: boxPalette.border,
		marginBottom: mapSpacing(1.5),
	},

	[`* + hr${notSelector}`]: {
		marginTop: mapSpacing(1.5),
	},

	/**
	 * Print styles
	 */
	'@media print': {
		// Display link URLs
		[`a${notSelector}[href]:after`]: {
			content: '" (" attr(href) ")" !important',
		},
		// Expand abbreviations
		'abbr[title]:after': {
			content: '" (" attr(title) ")"',
		},
		// Page breaks
		'pre, blockquote, tr, img': {
			pageBreakInside: 'avoid',
		},
		'h2, h3 ': {
			pageBreakAfter: 'avoid',
		},
	},
});
