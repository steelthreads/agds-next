import { Flex } from '@ag.ds-next/box';
import { LoadingDots } from '@ag.ds-next/loading';
import { Text } from '@ag.ds-next/text';
import { ComboboxListItem } from './ComboboxListItem';

export function ComboboxListLoading() {
	return (
		<ComboboxListItem isActiveItem={false}>
			<Flex gap={1} padding={0.5} alignItems="center" justifyContent="center">
				<LoadingDots size="sm" aria-label="Loading" />
				<Text>Loading</Text>
			</Flex>
		</ComboboxListItem>
	);
}
