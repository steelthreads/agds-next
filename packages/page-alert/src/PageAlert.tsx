import { forwardRef, HTMLAttributes, PropsWithChildren } from 'react';
import { Flex } from '@ag.ds-next/box';
import { boxPalette, globalPalette, tokens } from '@ag.ds-next/core';
import {
	AlertFilledIcon,
	InfoFilledIcon,
	SuccessFilledIcon,
	WarningFilledIcon,
} from '@ag.ds-next/icon';
import { PageAlertTitle } from './PageAlertTitle';

export type PageAlertTone = 'success' | 'error' | 'warning' | 'info';

type DivProps = HTMLAttributes<HTMLDivElement>;

export type PageAlertProps = PropsWithChildren<{
	id?: string;
	role?: DivProps['role'];
	tabIndex?: number;
	title?: string;
	tone: PageAlertTone;
}>;

export const PageAlert = forwardRef<HTMLDivElement, PageAlertProps>(
	function PageAlert({ id, role, children, title, tone, tabIndex }, ref) {
		const { fg, bg, Icon } = pageAlertToneMap[tone];
		return (
			<Flex
				ref={ref}
				role={role}
				id={id}
				tabIndex={tabIndex}
				rounded
				focus
				css={{ backgroundColor: bg }}
			>
				<Flex
					padding={0.5}
					alignItems="center"
					palette="dark"
					css={{
						borderTopLeftRadius: tokens.borderRadius,
						borderBottomLeftRadius: tokens.borderRadius,
						backgroundColor: fg,
					}}
				>
					<Icon color="text" />
				</Flex>
				<Flex padding={1.5} gap={1} flexDirection="column">
					{title ? <PageAlertTitle>{title}</PageAlertTitle> : null}
					{children}
				</Flex>
			</Flex>
		);
	}
);

const pageAlertToneMap = {
	success: {
		fg: globalPalette.success,
		bg: boxPalette.backgroundSuccess,
		Icon: SuccessFilledIcon,
	},
	error: {
		fg: globalPalette.error,
		bg: boxPalette.backgroundError,
		Icon: AlertFilledIcon,
	},
	info: {
		fg: globalPalette.info,
		bg: boxPalette.backgroundInfo,
		Icon: InfoFilledIcon,
	},
	warning: {
		fg: globalPalette.warning,
		bg: boxPalette.backgroundWarning,
		Icon: WarningFilledIcon,
	},
};
