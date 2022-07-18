export const themeVars = {
	// Light
	lightForegroundText: '--agds-light-foreground-text',
	lightForegroundAction: '--agds-light-foreground-action',
	lightForegroundFocus: '--agds-light-foreground-focus',
	lightForegroundMuted: '--agds-light-foreground-muted',
	lightBackgroundBody: '--agds-light-background-body',
	lightBackgroundShade: '--agds-light-background-shade',
	lightBackgroundBodyAlt: '--agds-light-background-body-alt',
	lightBackgroundShadeAlt: '--agds-light-background-shade-alt',
	lightBackgroundSuccess: '--agds-light-background-success',
	lightBackgroundError: '--agds-light-background-error',
	lightBackgroundWarning: '--agds-light-background-warning',
	lightBackgroundInfo: '--agds-light-background-info',
	lightBorder: '--agds-light-border',
	lightBorderMuted: '--agds-light-border-muted',
	lightBorderInput: '--agds-light-border-input',
	// Dark
	darkForegroundText: '--agds-dark-foreground-text',
	darkForegroundAction: '--agds-dark-foreground-action',
	darkForegroundFocus: '--agds-dark-foreground-focus',
	darkForegroundMuted: '--agds-dark-foreground-muted',
	darkBackgroundBody: '--agds-dark-background-body',
	darkBackgroundShade: '--agds-dark-background-shade',
	darkBackgroundBodyAlt: '--agds-dark-background-body-alt',
	darkBackgroundShadeAlt: '--agds-dark-background-shade-alt',
	darkBackgroundSuccess: '--agds-dark-background-success',
	darkBackgroundError: '--agds-dark-background-error',
	darkBackgroundWarning: '--agds-dark-background-warning',
	darkBackgroundInfo: '--agds-dark-background-info',
	darkBorder: '--agds-dark-border',
	darkBorderMuted: '--agds-dark-border-muted',
	darkBorderInput: '--agds-dark-border-input',
	// System colors
	accent: '--agds-accent',
	error: '--agds-error',
	success: '--agds-success',
	warning: '--agds-warning',
	info: '--agds-info',
} as const;

export type Theme = Partial<Record<keyof typeof themeVars, string>>;

type ThemeKey = keyof typeof themeVars;
export function mergeTheme(defaultTheme: Theme, theme: Theme) {
	return Object.fromEntries(
		Object.entries(themeVars).map(([key, variableName]) => [
			variableName,
			theme[key as ThemeKey] ?? defaultTheme[key as ThemeKey],
		])
	);
}
