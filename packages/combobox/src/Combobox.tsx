import { Fragment, ReactNode, useState } from 'react';
import { useCombobox } from 'downshift';
import { usePopper } from 'react-popper';
import { textInputStyles } from '@ag.ds-next/text-input';
import { ChevronDownIcon } from '@ag.ds-next/icon';
import { Button } from '@ag.ds-next/button';
import { FieldContainer, FieldHint, FieldLabel } from '@ag.ds-next/field';
import { Box, Flex, Stack } from '@ag.ds-next/box';
import { mapSpacing } from '@ag.ds-next/core';
import { ComboboxList } from './ComboboxList';
import { ComboboxListItem } from './ComboboxListItem';
import { LoadingDots } from '@ag.ds-next/loading';
import { Text } from '@ag.ds-next/text';

type DefaultOption = { label: string; value: string };

type ComboBoxProps<Option extends DefaultOption> = {
	label: string;
	hint?: string;
	options?: Option[];
	onChange?: (value: Option) => void;
	loadOptions?: (inputValue: string) => Promise<Option[]>;
	renderItem?: (item: Option) => ReactNode;
};

export function Combobox<Option extends DefaultOption>({
	label,
	hint,
	options = [],
	loadOptions,
	onChange,
	renderItem = (item) => item.label,
}: ComboBoxProps<Option>) {
	const [loading, setLoading] = useState(false);
	const [inputItems, setInputItems] = useState<Option[]>(options);

	const {
		isOpen,
		getToggleButtonProps,
		getLabelProps,
		getMenuProps,
		getInputProps,
		getComboboxProps,
		highlightedIndex,
		getItemProps,
	} = useCombobox<Option>({
		items: inputItems,
		itemToString: (item) => item?.label ?? '',
		onSelectedItemChange: ({ selectedItem }) => {
			if (onChange && selectedItem) onChange(selectedItem);
		},
		onInputValueChange: async ({ inputValue = '' }) => {
			inputValue = inputValue.toLowerCase();
			if (loadOptions) {
				// Asynchronous
				setLoading(true);
				const inputItems = await loadOptions(inputValue);
				setInputItems(inputItems);
				setLoading(false);
			} else {
				// Synchronos
				setInputItems(
					options.filter(({ value }) =>
						value.toLowerCase().startsWith(inputValue)
					)
				);
			}
		},
	});

	// Popper state
	const [refEl, setRefEl] = useState<HTMLDivElement | null>(null);
	const [popperEl, setPopperEl] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(refEl, popperEl, {
		placement: 'bottom-start',
		modifiers: [{ name: 'offset', options: { offset: [0, 8] } }],
	});

	const inputStyles = {
		...textInputStyles({
			block: true,
			maxWidth: undefined,
			invalid: false,
			valid: false,
		}),
		borderRight: 'none',
		borderTopRightRadius: 0,
		borderBottomRightRadius: 0,
	};

	return (
		<div css={{ position: 'relative' }} ref={setRefEl}>
			<FieldContainer>
				<FieldLabel {...getLabelProps()}>{label}</FieldLabel>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				<Flex alignItems="flex-end" {...getComboboxProps()}>
					<input css={inputStyles} {...getInputProps()} />
					<Button
						type="button"
						variant="secondary"
						{...getToggleButtonProps()}
						aria-label={'toggle menu'}
						css={{
							borderTopLeftRadius: 0,
							borderBottomLeftRadius: 0,
							paddingLeft: mapSpacing(1),
							paddingRight: mapSpacing(1),
						}}
					>
						<ChevronDownIcon />
					</Button>
				</Flex>
				<div
					ref={setPopperEl}
					style={styles.popper}
					{...attributes.popper}
					css={{ zIndex: 1, width: '100%' }}
				>
					<ComboboxList {...getMenuProps()} isOpen={isOpen}>
						{isOpen ? (
							<Fragment>
								{loading ? (
									<ComboboxListLoading />
								) : (
									<Fragment>
										{inputItems.length ? (
											inputItems.map((item, index) => {
												const isActiveItem = highlightedIndex === index;
												return (
													<ComboboxListItem
														key={`${item.value}${index}`}
														isActiveItem={isActiveItem}
														{...getItemProps({ item, index })}
													>
														{renderItem(item)}
													</ComboboxListItem>
												);
											})
										) : (
											<ComboboxListEmptyResults />
										)}
									</Fragment>
								)}
							</Fragment>
						) : null}
					</ComboboxList>
				</div>
			</FieldContainer>
		</div>
	);
}

function ComboboxListLoading() {
	return (
		<ComboboxListItem isActiveItem={false}>
			<Flex gap={1} padding={0.5} alignItems="center" justifyContent="center">
				<LoadingDots size="sm" aria-label="Loading" />
				<Text>Loading</Text>
			</Flex>
		</ComboboxListItem>
	);
}

function ComboboxListEmptyResults() {
	return (
		<ComboboxListItem isActiveItem={false}>
			<Text>No options found.</Text>
		</ComboboxListItem>
	);
}
