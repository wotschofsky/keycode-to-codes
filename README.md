[![npm](https://img.shields.io/npm/v/keycode-to-codes?style=flat-square)](https://www.npmjs.com/package/keycode-to-codes)

# keycode-to-codes

Library that returns a list of possible KeyboardEvent codes based the input keyCode.
Useful for replacing a missing KeyboardEvent.code property.

Example:
13 -> `["Enter", "NumpadEnter"]` \
32 -> `["Space"]` \
97 -> `["KeyA"]`

## Installation

Add the script to your project through a package manager:

`$ npm i keycode-to-codes`

or

`$ yarn add keycode-to-codes`

Alternatively you can also import the script found in the releases section on GitHub directly. If you choose this option you won't need to use imports going forward - everything will all be available to you automatically.

```html
<script src="keycode-to-codes.min.js"></script>
```

Or include through a public CDN:

```html
<script src="https://unpkg.com/keycode-to-codes@2/dist/keycode-to-codes.min.js"></script>
```

### Usage Example

```javascript
  import keyCodeToCodes from 'keycode-to-codes';
  // OR
  const keyCodeToCodes = require('keycode-to-codes');

  window.addEventListener('keypress', (event) => {
    const codes = keyCodeToCodes(event.keyCode);
  });
```
