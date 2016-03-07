[![npm version](https://badge.fury.io/js/urlgenerator.svg)](https://badge.fury.io/js/urlgenerator)

[![NPM](https://nodei.co/npm/urlgenerator.png?downloads=true)](https://www.npmjs.com/package/urlgenerator)
URL Generator for Node JS / Express JS
=======================================

A small library creating a url from base url and parameters / key value pairs

## Installation

```shell
  npm install urlgenerator --save
```
  
## Usage

```
  var urlgenerator = require('urlgenerator');
  var createURLwithParameters = urlgenerator.createURLwithParameters;
  var baseURL = "www.google.com";
  var parameters = {};
  parameters.mobile = '7838185123';
  parameters.shit = 'xxx';
  var finalURL = createURLwithParameters(baseURL,parameters);
  console.log("final URL is " , finalURL);
 
  prints - final URL is www.google.com?mobile=7838185123&shit=xxx
```

## Tests

```shell
   npm test
```

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release
