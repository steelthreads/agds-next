import {
	Fragment,
	forwardRef,
	PropsWithChildren,
	SelectHTMLAttributes,
} from 'react';
import { Field, FieldMaxWidth, fieldMaxWidth } from '@ag.ds-next/field';
import {
	packs,
	boxPalette,
	mapSpacing,
	globalPalette,
	tokens,
} from '@ag.ds-next/core';
import { ChevronDownIcon } from '@ag.ds-next/icon';

export type Option = {
	label: string;
	value: string;
	disabled?: boolean;
};
export type OptionGroup = {
	label: string;
	disabled?: boolean;
	options: Option[];
};
export type Options = (Option | OptionGroup)[];

type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>;

type BaseSelectProps = {
	disabled?: NativeSelectProps['disabled'];
	id?: NativeSelectProps['id'];
	name?: NativeSelectProps['name'];
	onBlur?: NativeSelectProps['onBlur'];
	onChange?: NativeSelectProps['onChange'];
	onFocus?: NativeSelectProps['onFocus'];
	placeholder?: NativeSelectProps['placeholder'];
	value?: NativeSelectProps['value'];
};

export type SelectProps = BaseSelectProps & {
	/** Describes the purpose of the field. */
	label: string;
	/** The list of options to display in the drop-down list. */
	options: Options;
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

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
	function Select(
		{
			label,
			required,
			hint,
			message,
			invalid,
			valid,
			block,
			maxWidth,
			options,
			placeholder,
			id,
			...props
		},
		ref
	) {
		const styles = selectStyles({ block, invalid, valid });
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
					<SelectContainer block={block} maxWidth={maxWidth}>
						<select ref={ref} css={styles} {...allyProps} {...props}>
							<SelectOptions options={options} placeholder={placeholder} />
						</select>
						<SelectIcon disabled={props.disabled} />
					</SelectContainer>
				)}
			</Field>
		);
	}
);

const SelectContainer = ({
	children,
	block,
	maxWidth,
}: PropsWithChildren<{
	block?: boolean;
	maxWidth?: FieldMaxWidth;
}>) => (
	<div
		css={{
			position: 'relative',
			maxWidth: block
				? undefined
				: maxWidth
				? fieldMaxWidth[maxWidth]
				: '12.8125rem',
		}}
	>
		{children}
	</div>
);

const SelectOptions = ({
	options,
	placeholder,
}: {
	options: Options;
	placeholder?: string;
}) => {
	return (
		<Fragment>
			{placeholder ? <option value="">{placeholder}</option> : null}
			{options.map((opt) => {
				if ('options' in opt) {
					return (
						<optgroup key={opt.label} label={opt.label} disabled={opt.disabled}>
							{opt.options.map(({ value, label, disabled }) => (
								<option key={value} value={value} disabled={disabled}>
									{label}
								</option>
							))}
						</optgroup>
					);
				}
				return (
					<option key={opt.value} value={opt.value} disabled={opt.disabled}>
						{opt.label}
					</option>
				);
			})}
		</Fragment>
	);
};

const SelectIcon = ({ disabled }: { disabled?: boolean }) => (
	<ChevronDownIcon
		size="sm"
		weight="bold"
		css={{
			position: 'absolute',
			top: '50%',
			right: mapSpacing(1),
			transform: 'translateY(-50%)',
			opacity: disabled ? 0.3 : 1,
			pointerEvents: 'none',
			color: globalPalette.lightForegroundAction,
		}}
	/>
);

const selectStyles = ({
	block,
	invalid,
	valid,
}: {
	block?: boolean;
	invalid?: boolean;
	valid?: boolean;
}) =>
	({
		position: 'relative',
		appearance: 'none',
		boxSizing: 'border-box',
		paddingLeft: mapSpacing(1),
		paddingRight: mapSpacing(3),
		margin: 0,
		backgroundColor: globalPalette.lightBackgroundBody,
		borderWidth: tokens.borderWidth.lg,
		borderStyle: 'solid',
		borderColor: boxPalette.borderInput,
		borderRadius: tokens.borderRadius,
		color: globalPalette.lightForegroundText,
		width: '100%',
		fontFamily: tokens.font.body,
		...packs.input.md,
		lineHeight: tokens.lineHeight.default,

		...(block && {
			maxWidth: 'none',
			display: 'block',
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

		'&:disabled': {
			cursor: 'not-allowed',
			opacity: 0.3,
		},

		'&:focus': packs.outline,
	} as const);
