[![npm](https://img.shields.io/npm/v/keycode-to-codes?style=flat-square)](https://www.npmjs.com/package/keycode-to-codes)

# keycode-to-codes

Library that returns a list of possible KeyboardEvent codes based the input keyCode.
Useful for replacing a missing KeyboardEvent.code property.

Example:  
13 -> `["Enter", "NumpadEnter"]`  
32 -> `["Space"]`  
97 -> `["KeyA"]`

## Code example

```javascript
  import keyCodeToCodes from 'keycode-to-codes';
  // OR
  const keyCodeToCodes = require('keycode-to-codes').default;

  window.addEventListener('keypress', (event) => {
    const codes = keyCodeToCodes(event.keyCode);
  });
```
