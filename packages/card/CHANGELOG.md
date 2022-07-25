# @ag.ds-next/card

## 6.0.0

### Major Changes

- dda722445: Remove CardList component. Please use `Columns` instead. Check out Storybook or ask the AgDS team to learn more.

### Minor Changes

- 5b573b930: Add support for CSS prop

### Patch Changes

- 797ca223f: Update documentation
- 042fb9e8c: Added `@babel/runtime` as a package dependency.
- Updated dependencies [0f76d269a]
- Updated dependencies [d43864f0e]
- Updated dependencies [27b6ef36b]
- Updated dependencies [46eea44f4]
- Updated dependencies [042fb9e8c]
  - @ag.ds-next/box@6.1.0
  - @ag.ds-next/core@3.0.1

## 5.0.0

### Minor Changes

- 8ddb8b61: Add support for React version 18

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- 0e2cc75b: Updated imports of `text-link`
- Updated dependencies [c248ec2e]
- Updated dependencies [6fa3aa60]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [6c5d1563]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/box@6.0.0

## 4.0.1

### Patch Changes

- 72a7efa7: Fixed type error in `CardListProps`. The `gap` prop is now optional.
- Updated dependencies [df01e99d]
- Updated dependencies [9d64236c]
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/box@5.0.1

## 4.0.0

### Minor Changes

- 71bdfef2: Updated border color from `border` to `borderMuted`

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site
- 71bdfef2: Replaced custom CSS border colors with new `borderColor` prop
- Updated dependencies [0e3c9d9e]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/core@2.2.0

## 3.0.1

### Patch Changes

- 7c567fb6: Remove withBody example
- Updated dependencies [3e2abfe3]
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5

## 3.0.0

### Patch Changes

- 1fb96813: Remove pointer cursor for clickable mode
- Updated dependencies [1c084608]
- Updated dependencies [533c20f6]
- Updated dependencies [b2270b13]
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/box@4.1.0

## 2.1.2

### Patch Changes

- fe63315e: Document compositions
- aa23d98f: Update inner padding
- Updated dependencies [e8ea2abe]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/box@4.0.3

## 2.1.1

### Patch Changes

- 60822794: - Restricted the `size` prop in the `Icon` component to accept only `sm` and `md`
  - Removed vector scaling from icon components
  - Updated usage of icons
- 22f57db3: Use new Icon components
- Updated dependencies [89e8a5bd]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2

## 2.1.0

### Minor Changes

- fe056ee: Add `CardHeader`, `CardFooter` and `CardList`

### Patch Changes

- 135bb87: Updated link components to accept all anchor element HTML attributes
- 69cdd3d: Fix positioning bug in `CardLink` component
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/box@4.0.1

## 2.0.0

### Patch Changes

- 3e8b39b: Added `packs` to core and updated usage
- Updated dependencies [9680133]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [d94cb5d]
- Updated dependencies [9680133]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/box@4.0.0

## 1.0.0

### Major Changes

- c995f6e: Created the Card component

### Patch Changes

- fd181c9: Swapped the naming of theme and palette to better reflect expectations

  `theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

  `palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`

- Updated dependencies [c995f6e]
- Updated dependencies [3194f79]
- Updated dependencies [bd3a1bb]
- Updated dependencies [4d2c4a5]
- Updated dependencies [9986517]
- Updated dependencies [d860253]
- Updated dependencies [0d4cf72]
- Updated dependencies [fd181c9]
- Updated dependencies [e1c6866]
- Updated dependencies [c995f6e]
- Updated dependencies [5517fac]
  - @ag.ds-next/box@3.0.0
  - @ag.ds-next/core@2.0.0
