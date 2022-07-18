import { forwardRef, InputHTMLAttributes } from 'react';
import { Field, fieldMaxWidth, FieldMaxWidth } from '@ag.ds-next/field';
import {
	packs,
	boxPalette,
	mapSpacing,
	globalPalette,
	tokens,
} from '@ag.ds-next/core';

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;

type BaseTextInputProps = {
	disabled?: NativeInputProps['disabled'];
	id?: NativeInputProps['id'];
	inputMode?: NativeInputProps['inputMode'];
	name?: NativeInputProps['name'];
	onBlur?: NativeInputProps['onBlur'];
	onChange?: NativeInputProps['onChange'];
	onFocus?: NativeInputProps['onFocus'];
	pattern?: NativeInputProps['pattern'];
	placeholder?: NativeInputProps['placeholder'];
	value?: NativeInputProps['value'];
	type?: NativeInputProps['type'];
};

export type TextInputProps = BaseTextInputProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Message to show when the field is invalid or valid. */
	message?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true, the valid state will be rendered. */
	valid?: boolean;
	/** If true, the field will stretch to the fill the width of its container. */
	block?: boolean;
	/** The maximum width of the field. */
	maxWidth?: FieldMaxWidth;
};

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
	function TextInput(
		{
			label,
			required,
			hint,
			message,
			invalid,
			valid,
			block,
			maxWidth,
			id,
			...props
		},
		ref
	) {
		const styles = textInputStyles({ block, maxWidth, invalid, valid });
		return (
			<Field
				label={label}
				required={Boolean(required)}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={id}
			>
				{(allyProps) => (
					<input ref={ref} css={styles} {...allyProps} {...props} />
				)}
			</Field>
		);
	}
);

export const textInputStyles = ({
	block,
	maxWidth,
	invalid,
	valid,
	multiline,
}: {
	block?: boolean;
	maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
	invalid?: boolean;
	valid?: boolean;
	multiline?: boolean;
}) =>
	({
		appearance: 'none',
		boxSizing: 'border-box',
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(1),
		margin: 0,
		backgroundColor: globalPalette.lightBackgroundBody,
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderColor: boxPalette.borderInput,
		borderRadius: tokens.borderRadius,
		color: globalPalette.lightForegroundText,
		maxWidth: maxWidth ? fieldMaxWidth[maxWidth] : '12.8125rem',
		fontFamily: tokens.font.body,
		...packs.input.md,

		...(block && {
			maxWidth: 'none',
			display: 'block',
			width: '100%',
		}),

		...(invalid
			? {
					backgroundColor: boxPalette.backgroundError,
					borderColor: globalPalette.error,
			  }
			: valid
			? {
					backgroundColor: boxPalette.backgroundSuccess,
					borderColor: globalPalette.success,
			  }
			: undefined),

		...(multiline && {
			lineHeight: tokens.lineHeight.default,
			paddingTop: mapSpacing(0.5),
			paddingBottom: mapSpacing(0.5),
			height: 'auto,',
			minHeight: '6rem',
		}),

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	} as const);
