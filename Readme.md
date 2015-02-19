# img-loaded #

Call a callback when an image has loaded.

## Installation ##

Using [component](http://https://github.com/componentjs/component/):

``` bash
component install staygrimm/img-loaded
```

Using [duo](http://duojs.org/):

``` js
var loaded = require('staygrimm/img-loaded');
```

Using [npm](http://npmjs.com/):

``` bash
npm install img-loaded
```

## Usage ##

**loaded(image, callback)**

`image` may be an element, css selector, node list or array.  Note that if multiple images are
passed to `loaded` then `callback` will be returned for each image.

``` javascript
var loaded = require('img-loaded');
var images = '.hidden-image';

loaded(images, function(err, img) {
   // img is loaded!
});
```

## Test ##
```bash
make test
```

## Similar libs ##
These guys did it first:

[image-loaded](https://github.com/hughsk/image-loaded)
[imagesloaded](https://github.com/desandro/imagesloaded) (Not compatible with Component/Duo)

The MIT License (MIT)

Copyright (c) 2015 River Grimm

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.