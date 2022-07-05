import {
	ButtonHTMLAttributes,
	MouseEvent,
	forwardRef,
	useCallback,
	useRef,
	PropsWithChildren,
} from 'react';
import { mergeRefs, tokens } from '@ag.ds-next/core';

type NativeButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export type BaseButtonProps = PropsWithChildren<{
	/** Identifies the element (or elements) whose contents or presence are controlled by the current element. */
	'aria-controls'?: NativeButtonProps['aria-controls'];
	/** Identifies the element (or elements) that describes the object. */
	'aria-describedby'?: NativeButtonProps['aria-describedby'];
	/** Indicates whether the element, or another grouping element it controls, is currently expanded or collapsed. */
	'aria-expanded'?: NativeButtonProps['aria-expanded'];
	/** Describes the button element to assistive technologies. */
	'aria-label'?: NativeButtonProps['aria-label'];
	/** The CSS class name, typically generated from the `css` prop. */
	className?: string;
	/** When true, prevents onClick from firing. */
	disabled?: boolean;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** Function to be fired following a click event of the button. */
	onClick?: NativeButtonProps['onClick'];
	/** Provide an alternate type if the button is within a form. */
	type?: NativeButtonProps['type'];
}>;

export const BaseButton = forwardRef<HTMLButtonElement, BaseButtonProps>(
	function BaseButton({ onClick: onClickProp, ...props }, forwardedRef) {
		const ref = useRef<HTMLButtonElement>(null);

		/**
		 * In Safari buttons are not focused automatically by the browser once pressed, the default behaviour is to focus the nearest focusable ancestor.
		 * To fix this we need to manually focus the button element after the user presses the element.
		 */
		const onClick = useCallback(
			(event: MouseEvent<HTMLButtonElement>) => {
				ref.current?.focus();
				onClickProp?.(event);
			},
			[ref, onClickProp]
		);

		return (
			<button
				ref={mergeRefs([ref, forwardedRef])}
				onClick={onClick}
				css={{
					appearance: 'none',
					background: 'transparent',
					cursor: 'pointer',
					textAlign: 'left',
					border: 'none',
					padding: 0,
					fontFamily: tokens.font.body,
					fontSize: 'inherit',
					lineHeight: 'inherit',
				}}
				{...props}
			/>
		);
	}
);
