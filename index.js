try {
    var events = require('event');
} catch(e) {
    var events = require('component-event');
}
var toArray = require('arrayify');
var blankImage = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

/**
 * Expose `loaded`
 */
module.exports = loaded;

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

    function bind(img) {
        // return immediately if image is already loaded
        if (img.src && img.complete && img.naturalWidth !== undefined) return cb(null, img);

        // unbind once the image is loaded
        events.bind(img, 'load', function () {
            setTimeout(function () {
                events.unbind(img, 'load', function (e) {
                    return cb(null, img);
                });
            }, 500);
        });

        events.bind(img, 'load', function (e) {
            return cb(null, img);
        });

        // fix for cached images
        if (img.readyState || img.complete) {
            src = img.src
            img.src = blankImage
            img.src = src
        }
    };

    collection.forEach(bind);
}
