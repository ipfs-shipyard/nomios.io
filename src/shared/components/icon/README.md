# Icon

An SVG icon with support for sprites by using the SVG component.

## Usage

**Using a specific icon from the icon set:**

```jsx
import { CloseIcon, ReplyIcon } from 'path/to/shared/components/icon';

<WarningIcon />
<InfoIcon />
```

Please check the "Icon/All icons" under Storybook for the list of available icons.

**Using manually:**

```jsx
import Icon from 'path/to/shared/components/icon';
import mySvg from './path/to/my.svg';

<Icon svg={ mySvg } />
```

### Changing the color

By default, `fill` inherits from the current `color`.

Neverthless, you may change the color via the `fill` CSS property.
Additionally, you may tweak the opacity via the `fill-opacity` CSS property.

```jsx
import { WarningIcon } from 'path/to/shared/components/icon';

<WarningIcon style={ { fill: 'yellow' } } />
```

### Changing the size

You may change the icon size via the `fontSize` CSS property (defaults to `2.4rem`).

```jsx
import { ReplyIcon } from 'path/to/shared/components/icon';

<ReplyIcon style={ { fontSize: '1.6rem' } } />
```

Alternatively you may change the `width` and `height` CSS properties.

## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| svg | string, Promise | | The svg contents or a promise for its contents |

Any other properties supplied will be spread to the root element.
