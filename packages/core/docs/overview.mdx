---
title: Core
description: Core includes a range of styles, variables and code that form the foundation of how the Design System works, including colour, typography and spacing.
group: Foundations
storybookPath: /story/foundations-core--usage
---

The `Core` component should wrap your entire application, which will enable our CSS variables reset styles.

### Theming

The `Core` component accepts a `theme` prop that enables overwriting of the default theme.

```jsx
import { Core } from '@ag.ds-next/core';

export default function MyApp({ Component, pageProps }) {
	return (
		<Core theme={theme}>
			<Component {...pageProps} />
		</Core>
	);
}
```

### Routing / Linking

Our component library has been designed to work with any react routing library. For an example of configuring routing/links in AgDS for a Next.js application, please see [our example site](https://github.com/steelthreads/agds-next/tree/main/example-site/components/LinkComponent.tsx).

```jsx
import { Core } from '@ag.ds-next/core';

export default function MyApp({ Component, pageProps }) {
	return (
		<Core theme={theme} linkComponent={LinkComponent}>
			<Component {...pageProps} />
		</Core>
	);
}
```

## Design Tokens

Core includes a range of styles, variables and code that form the foundation of how the Design System works, including colour, typography and spacing.

### Colour

The colour palette is designed and tested to provide colour pairings that pass accessibility contrast ratios while still being easy to implement. This means that designers and developers using the system do not need to be concerned about if a colour will pass WCAG requirements in a particular circumstance.

#### Colour names imply their use

We use semantic naming so that all colours labeled as foreground colours in a theme. These colours are manually tested to pass accessibility contrast ratios when used with all background colours within a theme and vice versa.

#### Tips

- **Do** pair foreground and background colours.
- **Don't** mix light and dark variables.
- **Don't** pair foreground with foreground or background with background.

```jsx live
<Flex flexDirection="column" gap={1}>
	<Flex palette="light">
		{['body', 'shade', 'bodyAlt', 'shadeAlt'].map((bg) => (
			<Flex
				key={bg}
				flexDirection="column"
				gap={1}
				background={bg}
				paddingY={1}
				paddingX={2}
			>
				{['text', 'muted', 'action', 'focus'].map((fg) => (
					<Text key={fg} color={fg}>
						{fg}
					</Text>
				))}
			</Flex>
		))}
	</Flex>
	<Flex palette="dark">
		{['body', 'shade', 'bodyAlt', 'shadeAlt'].map((bg) => (
			<Flex
				key={bg}
				flexDirection="column"
				gap={1}
				background={bg}
				paddingY={1}
				paddingX={2}
			>
				{['text', 'muted', 'action', 'focus'].map((fg) => (
					<Text key={fg} color={fg}>
						{fg}
					</Text>
				))}
				<Text color="focus">
					<hr />
				</Text>
			</Flex>
		))}
	</Flex>
</Flex>
```

### Typography

A typographic scale was used to create a set of font-size and line-height values which have been designed for legibility and can be easily be implemented by designers or developers with a predictable output.

Using the design system's typography values means any object containing text is more likely to align with another element. This appearance of a baseline grid is created by automatically rounding the line-heights to the nearest grid value 4px, then converting them back to a unit-less value.

To ensure consistency with other components in the system:

- Designers can use font-size and line-height values from the typographic scale.
- Developers can use the `fontSize` and `lineHeight` props available on typographic components which use of the `fontGrid` function.

```jsx live
<Flex palette="light" background="body" gap={1}>
	<Flex flexDirection="column" gap={1}>
		<Text fontSize="sm" fontWeight="bold">
			Default
		</Text>
		{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
			<Box key={size} background="shade">
				<Text fontSize={size}>{size.toUpperCase()}</Text>
			</Box>
		))}
	</Flex>
	<Flex flexDirection="column" palette="light" background="body" gap={1}>
		<Text fontSize="sm" fontWeight="bold">
			Heading
		</Text>
		{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
			<Box key={size} background="shade">
				<Text fontSize={size} lineHeight="heading">
					{size.toUpperCase()}
				</Text>
			</Box>
		))}
	</Flex>
	<Flex flexDirection="column" palette="light" background="body" gap={1}>
		<Text fontSize="sm" fontWeight="bold">
			Nospace
		</Text>
		{['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs'].map((size) => (
			<Box key={size} background="shade">
				<Text fontSize={size} lineHeight="nospace">
					{size.toUpperCase()}
				</Text>
			</Box>
		))}
	</Flex>
</Flex>
```
