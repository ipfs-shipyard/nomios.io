# SVG

An SVG element with support for sprites via dynamic imports.

## Usage

```jsx
import Svg from 'path/to/shared/components/logo';
import mySvg from './path/to/my.svg';

<Svg svg={ mySvg } />
```

### Changing the color

By default, `fill` inherits from the current `color`.

Neverthless, you may change the color via the `fill` CSS property, as well as the `stroke` CSS property.
Additionally, you may tweak the opacity via the `fill-opacity` CSS property.

```jsx
import Svg from 'path/to/shared/components/logo';
import mySvg from './path/to/my.svg';

<Svg svg={ mySvg } style={ { fill: 'yellow' } } />
```

### Changing the size

You may change the `width` and `height` CSS properties.

```jsx
import Svg from 'path/to/shared/components/logo';
import mySvg from './path/to/my.svg';

<Svg svg={ mySvg } style={ { height: '1.6rem', width: '1.6rem' } } />
```


## Props

| name | type | default | description |
| ---- | ---- | ------- | ----------- |
| svg | string, Promise | | The svg contents or a promise for its contents |

Any other properties supplied will be spread to the root element.
