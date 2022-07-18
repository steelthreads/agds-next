import { themeVars } from './theme';

export const globalPalette = {
	lightForegroundText: `var(${themeVars.lightForegroundText})`,
	lightForegroundAction: `var(${themeVars.lightForegroundAction})`,
	lightForegroundFocus: `var(${themeVars.lightForegroundFocus})`,
	lightForegroundMuted: `var(${themeVars.lightForegroundMuted})`,
	lightBackgroundBody: `var(${themeVars.lightBackgroundBody})`,
	lightBackgroundShade: `var(${themeVars.lightBackgroundShade})`,
	lightBackgroundBodyAlt: `var(${themeVars.lightBackgroundBodyAlt})`,
	lightBackgroundShadeAlt: `var(${themeVars.lightBackgroundShadeAlt})`,
	lightBorder: `var(${themeVars.lightBorder})`,
	darkForegroundText: `var(${themeVars.darkForegroundText})`,
	darkForegroundAction: `var(${themeVars.darkForegroundAction})`,
	darkForegroundFocus: `var(${themeVars.darkForegroundFocus})`,
	darkForegroundMuted: `var(${themeVars.darkForegroundMuted})`,
	darkBackgroundBody: `var(${themeVars.darkBackgroundBody})`,
	darkBackgroundShade: `var(${themeVars.darkBackgroundShade})`,
	darkBackgroundBodyAlt: `var(${themeVars.darkBackgroundBodyAlt})`,
	darkBackgroundShadeAlt: `var(${themeVars.darkBackgroundShadeAlt})`,
	darkBorder: `var(${themeVars.darkBorder})`,
	accent: `var(${themeVars.accent}, ${themeVars.lightForegroundAction})`, // NOTE: accent is optional
	error: `var(${themeVars.error})`,
	success: `var(${themeVars.success})`,
	warning: `var(${themeVars.warning})`,
	info: `var(${themeVars.info})`,
} as const;
