# @ag.ds-next/button

## 10.0.0

### Patch Changes

- 272c39925: Added default `type="button"` to `BaseButton`
- 89372aa9d: Update documentation
- 27b6ef36b: Added comments to each prop to improve documentation
- db54c495b: Updated documentation
- c9413c905: Improved prop type definitions for `BaseButton`
- 042fb9e8c: Added `@babel/runtime` as a package dependency.
- Updated dependencies [0f76d269a]
- Updated dependencies [d43864f0e]
- Updated dependencies [27b6ef36b]
- Updated dependencies [46eea44f4]
- Updated dependencies [042fb9e8c]
- Updated dependencies [cec044d6e]
  - @ag.ds-next/box@6.1.0
  - @ag.ds-next/core@3.0.1
  - @ag.ds-next/loading@5.0.0

## 9.1.0

### Minor Changes

- 724f47ec: Removed `target="_blank"` from all links as per accessibility recommendations.

### Patch Changes

- cc586fd2: Updated documentation

## 9.0.0

### Minor Changes

- f8d3f116: Added abilty to pass refs to `ButtonLink`
- 00cbe00f: Applied new `BaseButton` component to fix focus accessibility bug in safari.
- 00cbe00f: Created new `BaseButton` component
- 8ddb8b61: Add support for React version 18

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- Updated dependencies [c248ec2e]
- Updated dependencies [6fa3aa60]
- Updated dependencies [4d5acb08]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [6c5d1563]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/box@6.0.0
  - @ag.ds-next/loading@4.0.0

## 8.0.0

### Minor Changes

- 48324e1d: Created `ButtonGroup` component which can be used to group buttons whose actions are related.
- 711c47b1: Updated default props to ensure the default type of each button is `button`

### Patch Changes

- 585bffeb: Improve stacking in docs
- Updated dependencies [df01e99d]
- Updated dependencies [9d64236c]
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/box@5.0.1
  - @ag.ds-next/loading@3.0.0

## 7.0.0

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site
- Updated dependencies [0e3c9d9e]
- Updated dependencies [3062abfa]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/core@2.2.0
  - @ag.ds-next/loading@2.0.0

## 6.0.0

### Minor Changes

- 4869ca9a: Added `LoadingDots` to button component

### Patch Changes

- Updated dependencies [4869ca9a]
- Updated dependencies [3e2abfe3]
- Updated dependencies [c15a9374]
  - @ag.ds-next/loading@1.0.0
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5

## 5.0.0

### Patch Changes

- c2d3c64a: Update stories to include icons
- Updated dependencies [1c084608]
- Updated dependencies [533c20f6]
- Updated dependencies [b2270b13]
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/box@4.1.0

## 4.0.3

### Patch Changes

- Updated dependencies [e8ea2abe]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/box@4.0.3

## 4.0.2

### Patch Changes

- 89e8a5bd: Added `underline` pack and updated usage
- 42b85722: Added `iconBefore` and `iconAfter` props
- Updated dependencies [89e8a5bd]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2

## 4.0.1

### Patch Changes

- 135bb87: Updated link components to accept all anchor element HTML attributes
- c16dbbe: - Added new token `borderWidths` to `core`
  - Added new props to `Box` for configuring border widths
  - Replaced usage of inline border widths with new token values
- f8cba6b: Exported `buttonStyles` function for use in other packages
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/box@4.0.1

## 4.0.0

### Patch Changes

- 088ff6c: Removed default browser margins
- 3e8b39b: - Added fixed height
  - Added ability to forward ref to `Button` and `ButtonLink` component
  - Exported `ButtonProps` and `ButtonLinkProps`
  - Simplified markup in storybook stories
- cb58bc1: - Updated horizontal padding for the `sm` variant in the `Button` component
  - Added `size` prop to `ButtonLink`
  - Refactored how disabled styles are applied
- Updated dependencies [9680133]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [d94cb5d]
- Updated dependencies [9680133]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/box@4.0.0

## 3.0.0

### Major Changes

- 889e832: Style Button, Add ButtonLink

### Minor Changes

- 9336772: Add size prop to Button

### Patch Changes

- 4d2c4a5: Rename background.page to body
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

## 2.0.0

### Patch Changes

- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0
  - @ag.ds-next/box@2.0.0

## 1.0.1

### Patch Changes

- Updated dependencies [458f1db]
- Updated dependencies [458f1db]
  - @ag.ds-next/core@1.0.1
  - @ag.ds-next/box@1.0.1

## 1.0.0

### Major Changes

- 7e4600a: Initial Test Release

  This is the initial pre-release of the base set of DS components. The goal of this release is to test the process. Expect things to be broken if you're trying to use components from this release.

  ### If this is just a test, why is it a "major release"

  TL;DR: Because it **is** a major release. Before there was nothing. Now there is something.

  The slightly more complete answer is that publishing anything below a `1.0.0` to npm can lead to some unexpected behaviour when it comes to resolving dependencies. These numbers only have meaning within a given context so there is little benefit to using `0.1.0` over `1.0.0` other than that it hints to users that this **may** not be stable. Just starting at `1.0.0` makes things easier.

### Patch Changes

- Updated dependencies [7e4600a]
  - @ag.ds-next/box@1.0.0
  - @ag.ds-next/core@1.0.0
