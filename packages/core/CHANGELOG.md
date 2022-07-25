# @ag.ds-next/core

## 3.0.1

### Patch Changes

- d43864f0e: Updated documentation
- 27b6ef36b: Added comments to each prop to improve documentation
- 042fb9e8c: Added `@babel/runtime` as a package dependency.

## 3.0.0

### Major Changes

- c248ec2e: Updated default link component to include `forwardRef`

### Minor Changes

- 8ddb8b61: Add support for React version 18
- 00cbe00f: Created new `mergeRefs` utilty function

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- afdc5214: Fixed small eslint warnings
- 6c5d1563: Removed color from `LinkProps`

## 2.2.1

### Patch Changes

- df01e99d: Increased control (checkboxes, radio buttons) border widths from `2px` to `3px`
- 9d64236c: Updated type definition for `LinkComponent`

## 2.2.0

### Minor Changes

- 2e52d3d2: - Reset the global theme to black and white in print mode
  - Add new `print` pack

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site

## 2.1.5

### Patch Changes

- 3e2abfe3: Added responsive type scale

## 2.1.4

### Patch Changes

- 1c084608: Updated control pack sizes
- b2270b13: Added new hook `useClickOutside`

## 2.1.3

### Patch Changes

- e8ea2abe: Updated documentation

## 2.1.2

### Patch Changes

- 89e8a5bd: Added `underline` pack and updated usage
- d1d414c9: Added new hook `useWindowSize`
- cb844b7e: Added new color token `borderMuted`

## 2.1.1

### Patch Changes

- 135bb87: Updated link components to accept all anchor element HTML attributes
- c16dbbe: - Added new token `borderWidths` to `core`
  - Added new props to `Box` for configuring border widths
  - Replaced usage of inline border widths with new token values
- bd36abb: Replaced usage of `useLayoutEffect` with `useEffect` in `useElementSize`

## 2.1.0

### Minor Changes

- 9680133: Added new hooks `useElementSize` and `usePrefersReducedMotion`

### Patch Changes

- d94cb5d: Updated styles of the `control` pack and related components `ControlGroup`, `Radio` and `Checkbox`.
- 214cbf9: Added new colors to theme object for use in field components (`errorMuted`, `successMuted`, `warningMuted` and `infoMuted`)
- 3e8b39b: Added `packs` to core and updated usage

## 2.0.0

### Major Changes

- fd181c9: Swapped the naming of theme and palette to better reflect expectations

  `theme` now means the global set of colours which are applied to the a site as a whole. Eg. Gold theme or Agriculture theme.

  `palette` (aka. `boxPalette`) is the set of colours to be applied within a Box or related component. Eg. `<Box palette="dark" />`

### Minor Changes

- 4d2c4a5: Rename background.page to body
- 9986517: Retire hint color
- d860253: Core: Rename gutter token to containerPadding

### Patch Changes

- 3194f79: Updated documentation
- bd3a1bb: Updated documentation
- e1c6866: Improve documentation
- c995f6e: Add fontFamily to Core's reset

## 1.1.0

### Minor Changes

- 6048f94: Playroom fixes

### Patch Changes

- 50d3dd9: - Fixed internal usage of `themeVars` vs `themeValues`
  - Use the LinkComponent from Core in TextLink
  - Added `agriculture` variant to `MainNav` component.

## 1.0.1

### Patch Changes

- 458f1db: Add a linkComponent to Core which can be used in LinkList and MainNav. This enables supporting Link components from `next.js` or `react-router` inside DS components.

## 1.0.0

### Major Changes

- 7e4600a: Initial Test Release

  This is the initial pre-release of the base set of DS components. The goal of this release is to test the process. Expect things to be broken if you're trying to use components from this release.

  ### If this is just a test, why is it a "major release"

  TL;DR: Because it **is** a major release. Before there was nothing. Now there is something.

  The slightly more complete answer is that publishing anything below a `1.0.0` to npm can lead to some unexpected behaviour when it comes to resolving dependencies. These numbers only have meaning within a given context so there is little benefit to using `0.1.0` over `1.0.0` other than that it hints to users that this **may** not be stable. Just starting at `1.0.0` makes things easier.
