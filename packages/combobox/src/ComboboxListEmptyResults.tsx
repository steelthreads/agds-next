import { Text } from '@ag.ds-next/text';
import { ComboboxListItem } from './ComboboxListItem';

export function ComboboxListEmptyResults() {
	return (
		<ComboboxListItem isActiveItem={false}>
			<Text>No options found.</Text>
		</ComboboxListItem>
	);
}
