import { css } from '@emotion/react';
import { themeVars } from './theme';

// Box Palette

const boxPaletteVars = {
	foregroundText: '--agds-foreground-text',
	foregroundAction: '--agds-foreground-action',
	foregroundFocus: '--agds-foreground-focus',
	foregroundMuted: '--agds-foreground-muted',
	backgroundBody: '--agds-background-body',
	backgroundShade: '--agds-background-shade',
	backgroundBodyAlt: '--agds-background-body-alt',
	backgroundShadeAlt: '--agds-background-shade-alt',
	border: '--agds-border',
	borderMuted: '--agds-border-muted',
	borderInput: '--agds-border-input',
};

export const boxPalettes = {
	light: css({
		[boxPaletteVars.foregroundText]: `var(${themeVars.lightForegroundText})`,
		[boxPaletteVars.foregroundAction]: `var(${themeVars.lightForegroundAction})`,
		[boxPaletteVars.foregroundFocus]: `var(${themeVars.lightForegroundFocus})`,
		[boxPaletteVars.foregroundMuted]: `var(${themeVars.lightForegroundMuted})`,
		[boxPaletteVars.backgroundBody]: `var(${themeVars.lightBackgroundBody})`,
		[boxPaletteVars.backgroundShade]: `var(${themeVars.lightBackgroundShade})`,
		[boxPaletteVars.backgroundBodyAlt]: `var(${themeVars.lightBackgroundBodyAlt})`,
		[boxPaletteVars.backgroundShadeAlt]: `var(${themeVars.lightBackgroundShadeAlt})`,
		[boxPaletteVars.border]: `var(${themeVars.lightBorder})`,
		[boxPaletteVars.borderMuted]: `var(${themeVars.lightBorderMuted})`,
		[boxPaletteVars.borderInput]: `var(${themeVars.lightBorderInput})`,
	}),
	dark: css({
		[boxPaletteVars.foregroundText]: `var(${themeVars.darkForegroundText})`,
		[boxPaletteVars.foregroundAction]: `var(${themeVars.darkForegroundAction})`,
		[boxPaletteVars.foregroundFocus]: `var(${themeVars.darkForegroundFocus})`,
		[boxPaletteVars.foregroundMuted]: `var(${themeVars.darkForegroundMuted})`,
		[boxPaletteVars.backgroundBody]: `var(${themeVars.darkBackgroundBody})`,
		[boxPaletteVars.backgroundShade]: `var(${themeVars.darkBackgroundShade})`,
		[boxPaletteVars.backgroundBodyAlt]: `var(${themeVars.darkBackgroundBodyAlt})`,
		[boxPaletteVars.backgroundShadeAlt]: `var(${themeVars.darkBackgroundShadeAlt})`,
		[boxPaletteVars.border]: `var(${themeVars.darkBorder})`,
		[boxPaletteVars.borderMuted]: `var(${themeVars.darkBorderMuted})`,
		[boxPaletteVars.borderInput]: `var(${themeVars.darkBorderInput})`,
	}),
} as const;

export type BoxPalette = keyof typeof boxPalettes;

export const boxPalette = {
	foregroundText: `var(${boxPaletteVars.foregroundText})`,
	foregroundAction: `var(${boxPaletteVars.foregroundAction})`,
	foregroundFocus: `var(${boxPaletteVars.foregroundFocus})`,
	foregroundMuted: `var(${boxPaletteVars.foregroundMuted})`,
	backgroundBody: `var(${boxPaletteVars.backgroundBody})`,
	backgroundShade: `var(${boxPaletteVars.backgroundShade})`,
	backgroundBodyAlt: `var(${boxPaletteVars.backgroundBodyAlt})`,
	backgroundShadeAlt: `var(${boxPaletteVars.backgroundShadeAlt})`,
	border: `var(${boxPaletteVars.border})`,
	borderMuted: `var(${boxPaletteVars.borderMuted})`,
	borderInput: `var(${boxPaletteVars.borderInput})`,
};
