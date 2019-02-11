[![Build Status](https://travis-ci.org/mlipilin/bem-classnames-maker.svg?branch=master)](https://travis-ci.org/mlipilin/bem-classnames-maker)
[![npm version](https://badge.fury.io/js/bem-classnames-maker.svg)](https://badge.fury.io/js/bem-classnames-maker)

# bem-classnames-maker
A simple utility for making class names in accordance with BEM methodology

## Installation
```npm install bem-classnames-maker``` or ```yarn add bem-classnames-maker```

## How to use
```javascript
import bem from 'bem-classnames-maker';

// Create a BEM instance with passed block name
const cx = bem('block');

cx();                                                     // "block"
cx('', ['mod']);                                          // "block_mod"
cx('', ['mod1', 'mod2']);                                 // "block_mod1 block_mod2"
cx('', { mod1: 'val1', mod2: 'val2' });                   // "block_mod1_value1 block_mod2_value2"
cx('element');                                            // "block__element"
cx('element', ['mod']);                                   // "block__element_mod"
cx('element', ['mod1', 'mod2']);                          // "block__element_mod1 block__element_mod2"
cx('element', { mod1: 'val1', mod2: 'val2' });            // "block__element_mod1_val1 block__element_mod2_val2"
cx('element', { mod1: 'val1', mod2: false, mod3: true }); // "block__element_mod1_val1 block__element_mod3"
```

If you need to add a small modifier (without block and element prefix) you can do that by passing the modifier as a string (but BEM methodology doesn't encourage such naming):
```javascript
const cx = bem('block');
cx('', 'mod');     // "block mod"
```

There is also an ability to chande default delimiters:
```javascript
const cx = bem('block', {

  // delimiter between block and element (by default "__")
  BLOCK_ELEMENT_DELIMITER: '___',

  // delimiter between element and modifier (by default "_")
  MOD_DELIMITER: '_',

  // delimiter between modifier name and modifier value (by default "_")
  MOD_VALUE_DELIMITER: '-',

});
```

## Examples

### React Component
```javascript
import React from 'react';
import bem from 'bem-classnames-maker';

const cx = bem('user');

const MyComponent = props => (
  <div className={cx()}>
    <div className={cx('avatar')}>
      <img src="path_to_user_avatar.jpg" />
    </div>
    <div className={cx('name')}>
      John Doe
    </div>
  </div>
);
```
