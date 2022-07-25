# @ag.ds-next/box

## 6.1.0

### Minor Changes

- 46eea44f4: Add support for `columnGap` and `rowGap` props

### Patch Changes

- 0f76d269a: Update documentation
- 042fb9e8c: Added `@babel/runtime` as a package dependency.
- Updated dependencies [d43864f0e]
- Updated dependencies [27b6ef36b]
- Updated dependencies [042fb9e8c]
  - @ag.ds-next/core@3.0.1

## 6.0.0

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- Updated dependencies [c248ec2e]
- Updated dependencies [6fa3aa60]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [6c5d1563]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [df01e99d]
- Updated dependencies [9d64236c]
  - @ag.ds-next/core@2.2.1

## 5.0.0

### Minor Changes

- 71bdfef2: Add `borderColor` prop to `Box`

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site
- Updated dependencies [0e3c9d9e]
- Updated dependencies [2e52d3d2]
  - @ag.ds-next/core@2.2.0

## 4.1.1

### Patch Changes

- 3e2abfe3: Added responsive type scale
- Updated dependencies [3e2abfe3]
  - @ag.ds-next/core@2.1.5

## 4.1.0

### Minor Changes

- 533c20f6: Add support for table display properties

### Patch Changes

- Updated dependencies [1c084608]
- Updated dependencies [b2270b13]
  - @ag.ds-next/core@2.1.4

## 4.0.3

### Patch Changes

- Updated dependencies [e8ea2abe]
  - @ag.ds-next/core@2.1.3

## 4.0.2

### Patch Changes

- 89e8a5bd: Added `underline` pack and updated usage
- Updated dependencies [89e8a5bd]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
  - @ag.ds-next/core@2.1.2

## 4.0.1

### Patch Changes

- c16dbbe: - Added new token `borderWidths` to `core`
  - Added new props to `Box` for configuring border widths
  - Replaced usage of inline border widths with new token values
- 653709c: Support reverse flex directions
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [bd36abb]
  - @ag.ds-next/core@2.1.1

## 4.0.0

### Patch Changes

- c7d2a66: Fixed bug in `Box` where border top styles were not being applied when using the `borderTop` prop
- cd7e437: Added responsive prop logic to the `background` and `color` props
- 9680133: Added cursor styles to `linkStyles`
- 3e8b39b: Added `packs` to core and updated usage
- Updated dependencies [9680133]
- Updated dependencies [d94cb5d]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0

## 3.0.0

### Major Changes

- fd181c9: Swapped the naming of theme and palette to better reflect expectations

  `theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

  `palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`

### Patch Changes

- c995f6e: Consolidate link styles into the Box component
- 4d2c4a5: Rename background.page to body
- 0d4cf72: Allow selecting system colors via the Box color prop. eg. `color="error"`
- e1c6866: Improve documentation
- 5517fac: Added `inherit` to the foreground color map
- Updated dependencies [3194f79]
- Updated dependencies [bd3a1bb]
- Updated dependencies [4d2c4a5]
- Updated dependencies [9986517]
- Updated dependencies [d860253]
- Updated dependencies [fd181c9]
- Updated dependencies [e1c6866]
- Updated dependencies [c995f6e]
  - @ag.ds-next/core@2.0.0

## 2.0.0

### Patch Changes

- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0

## 1.0.1

### Patch Changes

- 458f1db: Added flexGrow and flexShrink props
- Updated dependencies [458f1db]
  - @ag.ds-next/core@1.0.1

## 1.0.0

### Major Changes

- 7e4600a: Initial Test Release

  This is the initial pre-release of the base set of DS components. The goal of this release is to test the process. Expect things to be broken if you're trying to use components from this release.

  ### If this is just a test, why is it a "major release"

  TL;DR: Because it **is** a major release. Before there was nothing. Now there is something.

  The slightly more complete answer is that publishing anything below a `1.0.0` to npm can lead to some unexpected behaviour when it comes to resolving dependencies. These numbers only have meaning within a given context so there is little benefit to using `0.1.0` over `1.0.0` other than that it hints to users that this **may** not be stable. Just starting at `1.0.0` makes things easier.

### Patch Changes

- Updated dependencies [7e4600a]
  - @ag.ds-next/core@1.0.0
