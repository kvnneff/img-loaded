var events = require('component/event');
var toArray = require('ForbesLindesay/arrayify');
var blankImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

/**
 * Loop `collection` and bind `cb` to each image's onload event
 * @param  {Mixed}   collection
 * @param  {Function} cb
 * @api public
 */
function loaded(collection, cb) {
    var src;
    var onload;

    collection = toArray(collection);

    function bind(el) {
        if (img.src && img.complete && img.naturalWidth !== undefined) return cb(null, true)
        img.once('load', function () {
            events.unbind(img, 'load', cb);
        });
        events.bind(img, 'load', cb);
        if (img.readyState || img.complete) {
            src = img.src
            img.src = blankImage
            img.src = src
        }
    };

    collection.forEach(bind);
}
