# @ag.ds-next/link-list

## 11.0.0

### Patch Changes

- 9c434b358: Updated documentation
- 042fb9e8c: Added `@babel/runtime` as a package dependency.
- Updated dependencies [0f76d269a]
- Updated dependencies [d43864f0e]
- Updated dependencies [27b6ef36b]
- Updated dependencies [46eea44f4]
- Updated dependencies [c970b5d81]
- Updated dependencies [042fb9e8c]
- Updated dependencies [633228a0f]
  - @ag.ds-next/box@6.1.0
  - @ag.ds-next/core@3.0.1
  - @ag.ds-next/text-link@5.0.0
  - @ag.ds-next/text@9.0.0

## 10.0.0

### Patch Changes

- Updated dependencies [1c78eebc]
- Updated dependencies [aac71787]
  - @ag.ds-next/text-link@4.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [743cd7b5]
  - @ag.ds-next/text-link@3.0.0

## 8.0.0

### Minor Changes

- 989b45b4: Links that open in a new tab will use show the external link indicator

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- 0e2cc75b: Updated imports of `text-link`
- ac551394: Updated documentation
- Updated dependencies [c248ec2e]
- Updated dependencies [6c5d1563]
- Updated dependencies [6fa3aa60]
- Updated dependencies [0e2cc75b]
- Updated dependencies [ac551394]
- Updated dependencies [0e2cc75b]
- Updated dependencies [c248ec2e]
- Updated dependencies [0e2cc75b]
- Updated dependencies [dd4f423d]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [c248ec2e]
- Updated dependencies [6c5d1563]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/text-link@1.0.0
  - @ag.ds-next/box@6.0.0
  - @ag.ds-next/text@8.0.0

## 7.0.0

### Patch Changes

- Updated dependencies [df01e99d]
- Updated dependencies [8b7b300c]
- Updated dependencies [9d64236c]
- Updated dependencies [f9ec2e90]
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/text@7.0.0
  - @ag.ds-next/box@5.0.1

## 6.0.0

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site
- Updated dependencies [0e3c9d9e]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/core@2.2.0
  - @ag.ds-next/text@6.0.0

## 5.0.1

### Patch Changes

- Updated dependencies [3e2abfe3]
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5
  - @ag.ds-next/text@5.0.1

## 5.0.0

### Patch Changes

- Updated dependencies [1c084608]
- Updated dependencies [533c20f6]
- Updated dependencies [b2270b13]
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/box@4.1.0
  - @ag.ds-next/text@5.0.0

## 4.0.3

### Patch Changes

- Updated dependencies [e8ea2abe]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/box@4.0.3
  - @ag.ds-next/text@4.0.3

## 4.0.2

### Patch Changes

- a48ac575: Updated documentation
- Updated dependencies [89e8a5bd]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2
  - @ag.ds-next/text@4.0.2

## 4.0.1

### Patch Changes

- 135bb87: Updated link components to accept all anchor element HTML attributes
- 66eb7ed: Fix small typescript bug in main component types
- c3a5ded: Improved the typescript types of components with children or extend default HTML elements
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/text@4.0.1
  - @ag.ds-next/box@4.0.1

## 4.0.0

### Patch Changes

- 86cf334: Use `TextLink` in `LinkListItem`
- Updated dependencies [9680133]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [d94cb5d]
- Updated dependencies [9680133]
- Updated dependencies [b6a9bd9]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/box@4.0.0
  - @ag.ds-next/text@4.0.0

## 3.0.0

### Minor Changes

- ea3087e: Enable wrapping for LinkList

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

### Minor Changes

- c13a0e6: Refactor LinkList, new subcomponents and improved spacing

### Patch Changes

- 6048f94: Playroom fixes
- 62bc031: - Added new `Breadcrumbs` component
  - Renamed `LinkListGroup` to `LinkListContainer`
  - Updated `Icon` component to allow spreading of SVG props
- 331c577: LinkListItem takes `children` instead of `label` prop
- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0
  - @ag.ds-next/box@2.0.0

## 1.0.1

### Patch Changes

- 458f1db: Add a linkComponent to Core which can be used in LinkList and MainNav. This enables supporting Link components from `next.js` or `react-router` inside DS components.
- Updated dependencies [458f1db]
- Updated dependencies [458f1db]
  - @ag.ds-next/core@1.0.1
  - @ag.ds-next/box@1.0.1
  - @ag.ds-next/text-link@1.0.1

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
  - @ag.ds-next/text-link@1.0.0
