README
=======================

#### Installation

``
$ npm install domip
``

#### Usage

##### isDominican(ip)

```javascript
var domip = require('domip');
domip.isDominican('64.32.64.1'); // true
domip.isDominican('8.8.8.8'); 	 // false
```

##### convertToDecimalIP(ip)

```javascript
var domip = require('domip');
domip.convertToDecimalIP('64.32.64.1'); // 1075855361
```