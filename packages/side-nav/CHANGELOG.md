# @ag.ds-next/side-nav

## 12.0.0

### Major Changes

- e769cb490: Replace 'variant' prop with 'background'

### Patch Changes

- 4829c105f: Improved overflow of mobile version
- 4c370db43: Updated documentation
- 48c64b03e: Converted `titleLink` into an optional prop
- c9413c905: Removed unnecessary button role on collapsible button
- 042fb9e8c: Added `@babel/runtime` as a package dependency.
- Updated dependencies [0f76d269a]
- Updated dependencies [d43864f0e]
- Updated dependencies [8969f876a]
- Updated dependencies [43fa70f0f]
- Updated dependencies [272c39925]
- Updated dependencies [89372aa9d]
- Updated dependencies [27b6ef36b]
- Updated dependencies [db54c495b]
- Updated dependencies [46eea44f4]
- Updated dependencies [c9413c905]
- Updated dependencies [042fb9e8c]
  - @ag.ds-next/box@6.1.0
  - @ag.ds-next/core@3.0.1
  - @ag.ds-next/icon@10.0.0
  - @ag.ds-next/button@10.0.0

## 11.0.0

### Patch Changes

- Updated dependencies [cc586fd2]
- Updated dependencies [724f47ec]
  - @ag.ds-next/button@9.1.0

## 10.0.0

### Minor Changes

- 00cbe00f: Applied new `BaseButton` component to fix focus accessibility bug in safari.
- 8ddb8b61: Add support for React version 18

### Patch Changes

- 6fa3aa60: Fixed small eslint warnings after updating import order rule
- ac551394: Updated documentation
- 4d5acb08: Upgraded dependency to react spring
- 6c5d1563: Removed color from `LinkProps`
- Updated dependencies [c248ec2e]
- Updated dependencies [6fa3aa60]
- Updated dependencies [f8d3f116]
- Updated dependencies [00cbe00f]
- Updated dependencies [00cbe00f]
- Updated dependencies [afdc5214]
- Updated dependencies [8ddb8b61]
- Updated dependencies [6c5d1563]
- Updated dependencies [00cbe00f]
  - @ag.ds-next/core@3.0.0
  - @ag.ds-next/box@6.0.0
  - @ag.ds-next/button@9.0.0
  - @ag.ds-next/icon@9.0.0

## 9.0.0

### Patch Changes

- Updated dependencies [df01e99d]
- Updated dependencies [9d64236c]
  - @ag.ds-next/core@2.2.1
  - @ag.ds-next/box@5.0.1
  - @ag.ds-next/icon@8.0.0

## 8.0.0

### Patch Changes

- 0e3c9d9e: Add Storybook links to docs site
- 2e52d3d2: Added print media styles
- 3062abfa: Replaced `react-spring` dependency with `@react-spring/web`
- 71bdfef2: Replaced custom CSS border colors with new `borderColor` prop
- Updated dependencies [0e3c9d9e]
- Updated dependencies [ae1ca403]
- Updated dependencies [ae1ca403]
- Updated dependencies [2e52d3d2]
- Updated dependencies [71bdfef2]
- Updated dependencies [f596c8b5]
  - @ag.ds-next/box@5.0.0
  - @ag.ds-next/core@2.2.0
  - @ag.ds-next/icon@7.0.0

## 7.1.0

### Minor Changes

- 181b58f6: Updated height animation logic to improve accessibility

### Patch Changes

- Updated dependencies [3e2abfe3]
  - @ag.ds-next/box@4.1.1
  - @ag.ds-next/core@2.1.5
  - @ag.ds-next/icon@6.0.1

## 7.0.0

### Patch Changes

- Updated dependencies [1c084608]
- Updated dependencies [35f6f094]
- Updated dependencies [533c20f6]
- Updated dependencies [1d641451]
- Updated dependencies [b2270b13]
  - @ag.ds-next/core@2.1.4
  - @ag.ds-next/icon@6.0.0
  - @ag.ds-next/box@4.1.0

## 6.0.0

### Patch Changes

- 335dd760: Updated hover state colours
- Updated dependencies [e8ea2abe]
- Updated dependencies [f05e58d8]
  - @ag.ds-next/core@2.1.3
  - @ag.ds-next/icon@5.1.0
  - @ag.ds-next/box@4.0.3

## 5.0.0

### Major Changes

- 1c2bd6b3: - Move collapse logic outside of SideNavContainer.
  - Improve accessibility for screenreader users.

### Patch Changes

- 60822794: - Restricted the `size` prop in the `Icon` component to accept only `sm` and `md`
  - Removed vector scaling from icon components
  - Updated usage of icons
- 89e8a5bd: Added `underline` pack and updated usage
- 22f57db3: Use new Icon components
- cb844b7e: Applied new design
- d1d414c9: Added `aria-hidden` to collapsable content
- Updated dependencies [60822794]
- Updated dependencies [a35f83a5]
- Updated dependencies [42b85722]
- Updated dependencies [89e8a5bd]
- Updated dependencies [d1d414c9]
- Updated dependencies [cb844b7e]
- Updated dependencies [cfea9d7e]
- Updated dependencies [22f57db3]
  - @ag.ds-next/icon@5.0.0
  - @ag.ds-next/box@4.0.2
  - @ag.ds-next/core@2.1.2

## 4.0.1

### Patch Changes

- 135bb87: Updated link components to accept all anchor element HTML attributes
- c16dbbe: - Added new token `borderWidths` to `core`
  - Added new props to `Box` for configuring border widths
  - Replaced usage of inline border widths with new token values
- 2af17ba: Removed overflow to improve focus state
- ffa1b11: Ensured consistent API of `aria-label`
- c3a5ded: Improved the typescript types of components with children or extend default HTML elements
- Updated dependencies [135bb87]
- Updated dependencies [c16dbbe]
- Updated dependencies [653709c]
- Updated dependencies [bd36abb]
- Updated dependencies [c3a5ded]
  - @ag.ds-next/core@2.1.1
  - @ag.ds-next/box@4.0.1
  - @ag.ds-next/a11y@1.0.1
  - @ag.ds-next/icon@4.0.1

## 4.0.0

### Minor Changes

- cd7e437: Implement collapsing logic in SideNav

### Patch Changes

- be7b54f: Wrap title in H2. Adjust lineheight
- 0ccabe5: Adjust padding for mobile breakpoints
- 8504053: Used new `VisuallyHidden` component
- 3e8b39b: Added `packs` to core and updated usage
- Updated dependencies [9680133]
- Updated dependencies [c7d2a66]
- Updated dependencies [cd7e437]
- Updated dependencies [d94cb5d]
- Updated dependencies [b6a9bd9]
- Updated dependencies [214cbf9]
- Updated dependencies [9680133]
- Updated dependencies [b6a9bd9]
- Updated dependencies [214cbf9]
- Updated dependencies [3e8b39b]
  - @ag.ds-next/core@2.1.0
  - @ag.ds-next/box@4.0.0
  - @ag.ds-next/icon@4.0.0

## 3.0.0

### Patch Changes

- bd69a75: Read our current page for all levels
- 56c2179: Layout changes from review
- 4d2c4a5: Rename background.page to body
- 6f7ad65: Fix active state
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

- 50d3dd9: - Fixed internal usage of `themeVars` vs `themeValues`
  - Use the LinkComponent from Core in TextLink
  - Added `agriculture` variant to `MainNav` component.
- 62bc031: - Added new `Breadcrumbs` component
  - Renamed `LinkListGroup` to `LinkListContainer`
  - Updated `Icon` component to allow spreading of SVG props
- Updated dependencies [6048f94]
- Updated dependencies [50d3dd9]
  - @ag.ds-next/core@1.1.0
  - @ag.ds-next/box@2.0.0
