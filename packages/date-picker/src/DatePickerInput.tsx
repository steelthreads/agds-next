import { forwardRef, MouseEventHandler, RefObject, useMemo } from 'react';
import { Flex } from '@ag.ds-next/box';
import { CalendarIcon } from '@ag.ds-next/icon';
import { TextInputProps, textInputStyles } from '@ag.ds-next/text-input';
import { mapSpacing } from '@ag.ds-next/core';
import { Button } from '@ag.ds-next/button';
import { Field } from '@ag.ds-next/field';
import { parseDate, formatHumanReadableDate } from './utils';

export type DateInputProps = Pick<
	TextInputProps,
	| 'block'
	| 'disabled'
	| 'hint'
	| 'id'
	| 'invalid'
	| 'label'
	| 'maxWidth'
	| 'message'
	| 'onChange'
	| 'placeholder'
	| 'required'
	| 'valid'
	| 'value'
> & {
	buttonRef: RefObject<HTMLButtonElement>;
	buttonOnClick: MouseEventHandler<HTMLButtonElement>;
};

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
	function DateInput(
		{
			label,
			required,
			hint,
			message,
			invalid,
			valid,
			block,
			id,
			buttonRef,
			maxWidth: maxWidthProp,
			buttonOnClick,
			disabled,
			value,
			onChange,
			placeholder,
		},
		ref
	) {
		const { maxWidth, ...styles } = {
			...textInputStyles({ block, invalid, maxWidth: maxWidthProp, valid }),
			width: '100%',
			borderRight: 'none',
			borderTopRightRadius: 0,
			borderBottomRightRadius: 0,
		};

		const ariaLabel = useMemo(() => {
			if (typeof value !== 'string') return 'Choose date';
			const parsed = parseDate(value);
			if (!parsed) return 'Choose date';
			return `Change Date, ${formatHumanReadableDate(parsed)}`;
		}, [value]);

		return (
			<Field
				label={label}
				secondaryLabel="(dd/mm/yyyy)"
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={id}
			>
				{(allyProps) => (
					<Flex alignItems="flex-end" css={{ maxWidth }}>
						<input
							ref={ref}
							css={{ ...styles, maxWidth: 'unset' }}
							{...allyProps}
							value={value}
							onChange={onChange}
							disabled={disabled}
							placeholder={placeholder}
						/>
						<Button
							type="button"
							ref={buttonRef}
							onClick={buttonOnClick}
							disabled={disabled}
							variant="secondary"
							aria-label={ariaLabel}
							css={{
								borderTopLeftRadius: 0,
								borderBottomLeftRadius: 0,
								paddingLeft: mapSpacing(1),
								paddingRight: mapSpacing(1),
							}}
						>
							<CalendarIcon size="md" />
						</Button>
					</Flex>
				)}
			</Field>
		);
	}
);
