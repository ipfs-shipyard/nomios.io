# SideBySide

A component that displays two other components side-by-side.

## Usage

```jsx
import SideBySide from 'path/to/shared/components/side-by-side';

<SideBySide
    left={ <SomeComponent /> }
    right={ <SomeOtherComponent /> } />
```

Note that the elements specified on the `left` and `right` **must** accept a `className` property.

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| left | element | *required* | The react element to render on the left side |
| right | element | *required* | The react element to render on the right side |

Any other properties supplied will be spread to the root element.
