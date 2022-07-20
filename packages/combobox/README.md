---
title: Combobox
storybookPath: forms-combobox--default
isExperimentalPackage: true
---

The `Combobox` allows the user to browse, search, and make a single selection
from a large list of values.

## Usage

### Controlled component

```jsx live
<Combobox
	placeholder="Select a character"
	items={[
		{ label: 'Jake', value: 'jake' },
		{ label: 'Finn', value: 'finn' },
		{ label: 'BMO', value: 'bmo' },
	]}
	onChange={console.log}
/>
```
