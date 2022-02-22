import { useId } from '@reach/auto-id';

export function findBestMatch(items: { href: string }[], activePath?: string) {
	if (!activePath) return '';
	let bestMatch = '';

	for (const link of items) {
		if (link.href === activePath) return link.href;
		if (
			activePath?.startsWith(link.href) &&
			link.href.length > bestMatch.length
		) {
			bestMatch = link.href;
		}
	}

	return bestMatch;
}

export const localPaletteVars = {
	hover: '--sideNav-hover',
};

export const localPalette = {
	hover: `var(${localPaletteVars.hover})`,
};

export const useSideNavIds = (initialId?: string | undefined) => {
	const id = useId(initialId);
	return {
		titleId: `${id}-title`,
		bodyId: `${id}-default`,
	};
};

const defaultStyles = {
	background: { xs: 'bodyAlt', md: 'body' },
	hover: { xs: 'shadeAlt', md: 'shade' },
} as const;

const altStyles = {
	background: { xs: 'body', md: 'bodyAlt' },
	hover: { xs: 'shade', md: 'shadeAlt' },
} as const;

export const variantMap = {
	light: {
		palette: 'light',
		...defaultStyles,
	},
	lightAlt: {
		palette: 'light',
		...altStyles,
	},
	dark: {
		palette: 'dark',
		...defaultStyles,
	},
	darkAlt: {
		palette: 'dark',
		...altStyles,
	},
} as const;

export type SideNavVariant = keyof typeof variantMap;
