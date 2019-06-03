# Logo

The Nomios logo, in four possible variants: `symbol`, `logotype`, `horizontal` and `vertical`.

## Usage

```jsx
import Logo from 'path/to/shared/components/logo';

<Logo variant="symbol" />
```

### Changing the color

By default, `fill` inherits from the current `color`.

Neverthless, you may change the color via the `fill` CSS property.
Additionally, you may tweak the opacity via the `fill-opacity` CSS property.

```jsx
import Logo from 'path/to/shared/components/logo';

<Logo variant="horizontal" style={ { fill: 'yellow' } } />
```

### Changing the size

You may change the icon size via the `fontSize` CSS property (defaults to `1rem`).

```jsx
import Logo from 'path/to/shared/components/logo';

<Logo variant="vertical" style={ { fontSize: '1.6rem' } } />
```

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| variant | string | `horizontal` | The variant of the logo. Can be one of `symbol`, `logotype`, `horizontal` and `vertical` |

Any other properties supplied will be spread to the root element.
