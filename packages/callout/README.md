---
title: Callouts
description: Callouts are an excerpt of text or an article that has been pulled out and used as a visual clue to draw the eye to the text. They are used to help direct a user's attention to important pieces of information.
group: Content
---

## Default

Use callout to notify and alert users of important snippets of information.

```jsx live
<Callout>
  <H2>Title of the callout</H2>
  <Text>Description of the callout</Text>
</Callout>
```

## Callout heading screen reader only

A callout with a heading that can be read by screen readers. Markup for the title is included for screen reader users.

```jsx live
<Callout>
  <VisuallyHidden>
    <H2>Title of the callout</H2>
  </VisuallyHidden>
  <Text>Description of the callout</Text>
</Callout>
```

## Calendar
Use a calendar callout to notify and alert users of important dates and events.

```jsx live
<Callout as="section">
  <H2>Description of the callout</H2>
  <Text>The next public holiday is:</Text>
  <Text as="time" size="lg" datetime="2017-01-01T00:00:00+00:00">Sunday 1 January</Text>
  <Text>New Year’s Day</Text>
</Callout>
```