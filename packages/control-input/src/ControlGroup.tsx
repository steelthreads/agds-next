import { PropsWithChildren } from 'react';
import { Flex, Stack } from '@ag.ds-next/box';
import { mapSpacing } from '@ag.ds-next/core';
import {
	FieldContainer,
	FieldHint,
	FieldLabel,
	FieldMessage,
} from '@ag.ds-next/field';

export type ControlGroupProps = PropsWithChildren<{
	/** If true, children will be stacked vertically. */
	block?: boolean;
	/** Provides extra information about the field. */
	hint?: string;
	/** Defines an identifier (ID) which must be unique. */
	id?: string;
	/** If true, the invalid state will be rendered. */
	invalid?: boolean;
	/** Describes the purpose of the field. */
	label?: string;
	/** Message to show when the field is invalid. */
	message?: string;
	/** If false, "(optional)" will be appended to the label. */
	required?: boolean;
}>;

export const ControlGroup = ({
	block = false,
	children,
	hint,
	id,
	invalid = false,
	label,
	message,
	required = false,
}: ControlGroupProps) => (
	<FieldContainer invalid={invalid} id={id}>
		<fieldset css={{ padding: 0, margin: 0, border: 'none' }}>
			{label ? (
				<FieldLabel as="legend" required={required}>
					{label}
				</FieldLabel>
			) : null}
			<Stack gap={0.5} css={{ marginTop: label ? mapSpacing(0.5) : undefined }}>
				{hint ? <FieldHint>{hint}</FieldHint> : null}
				{message && invalid ? (
					<FieldMessage invalid={invalid}>{message}</FieldMessage>
				) : null}
				<Flex
					gap={1}
					flexDirection={block ? 'column' : 'row'}
					width="100%"
					paddingTop={0.5}
				>
					{children}
				</Flex>
			</Stack>
		</fieldset>
	</FieldContainer>
);
