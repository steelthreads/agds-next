import React, { forwardRef, TextareaHTMLAttributes } from 'react';
import { Field, FieldMaxWidth } from '@ag.ds-next/field';
import { textInputStyles } from '@ag.ds-next/text-input';

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	label: string;
	required?: boolean;
	requiredLabel?: boolean;
	hint?: string;
	message?: string;
	invalid?: boolean;
	valid?: boolean;
	block?: true;
	maxWidth?: FieldMaxWidth;
};

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
	function Textarea(
		{
			label,
			required,
			requiredLabel,
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
		const styles = textInputStyles({
			block,
			maxWidth,
			invalid,
			valid,
			multiline: true,
		});

		return (
			<Field
				label={label}
				required={Boolean(required)}
				requiredLabel={requiredLabel}
				hint={hint}
				message={message}
				invalid={invalid}
				valid={valid}
				id={id}
			>
				{(allyProps) => (
					<textarea ref={ref} css={styles} {...allyProps} {...props} />
				)}
			</Field>
		);
	}
);
