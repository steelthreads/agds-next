import { Flex } from '@ag.ds-next/box';
import { Text, TextLink } from '@ag.ds-next/text';
import { DoingIcon, DoneIcon, TodoIcon } from '@ag.ds-next/icon';
import { boxPalette, LinkProps } from '@ag.ds-next/core';

export type ProgressIndicatorItemStatus = 'doing' | 'todo' | 'done';

export type ProgressIndicatorItemProps = LinkProps & {
	status: ProgressIndicatorItemStatus;
};

export const ProgressIndicatorItem = ({
	children,
	status,
	...props
}: ProgressIndicatorItemProps) => {
	const active = status === 'doing';
	const Icon = statusIconMap[status];
	return (
		<li>
			<Flex
				as={TextLink}
				{...props}
				alignItems="center"
				gap={0.75}
				padding={0.75}
				color="text"
				fontWeight={active ? 'bold' : 'normal'}
				borderBottom
				borderLeft
				borderLeftWidth="xl"
				css={{
					borderLeftColor: active ? boxPalette.foregroundAction : 'transparent',
					textDecoration: 'none',
					'&:hover': {
						backgroundColor: boxPalette.backgroundShade,
					},
				}}
			>
				<Icon size={1.5} color="action" />
				<Flex flexDirection="column" gap={0}>
					<Text color="muted" fontSize="xs" lineHeight="nospace">
						{statusLabelMap[status]}
					</Text>
					{children}
				</Flex>
			</Flex>
		</li>
	);
};

const statusIconMap = {
	doing: DoingIcon,
	todo: TodoIcon,
	done: DoneIcon,
} as const;

const statusLabelMap = {
	doing: 'Doing',
	todo: 'Todo',
	done: 'Done',
} as const;
