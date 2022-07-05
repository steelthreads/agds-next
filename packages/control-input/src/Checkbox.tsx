import { forwardRef, InputHTMLAttributes, PropsWithChildren } from 'react';
import { CheckboxIndicator } from './CheckboxIndicator';
import { ControlInput } from './ControlInput';
import { ControlContainer } from './ControlContainer';
import { ControlLabel } from './ControlLabel';
import { ControlSize } from './utils';

type NativeCheckboxProps = InputHTMLAttributes<HTMLInputElement>;

type BaseCheckboxProps = PropsWithChildren<{
	'aria-required'?: NativeCheckboxProps['aria-required'];
	disabled?: NativeCheckboxProps['disabled'];
	checked?: NativeCheckboxProps['checked'];
	id?: NativeCheckboxProps['id'];
	max?: NativeCheckboxProps['max'];
	maxLength?: NativeCheckboxProps['maxLength'];
	min?: NativeCheckboxProps['min'];
	minLength?: NativeCheckboxProps['minLength'];
	name?: NativeCheckboxProps['name'];
	onBlur?: NativeCheckboxProps['onBlur'];
	onChange?: NativeCheckboxProps['onChange'];
	pattern?: NativeCheckboxProps['pattern'];
	required?: NativeCheckboxProps['required'];
	value?: NativeCheckboxProps['value'];
}>;

export type CheckboxProps = BaseCheckboxProps & {
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** If true,  the valid state will be rendered. */
	valid?: boolean;
	/** The size of the input. */
	size?: ControlSize;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
	function Checkbox(
		{ children, disabled, invalid, valid, size = 'md', ...props },
		ref
	) {
		return (
			<ControlContainer disabled={disabled}>
				<ControlInput
					ref={ref}
					type="checkbox"
					disabled={disabled}
					{...props}
				/>
				<CheckboxIndicator
					disabled={disabled}
					invalid={invalid}
					size={size}
					valid={valid}
				/>
				<ControlLabel disabled={disabled}>{children}</ControlLabel>
			</ControlContainer>
		);
	}
);
