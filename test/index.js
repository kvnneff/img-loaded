var domify = require('domify');
var assert = require('assert');
var template = domify(require('./fixtures/template.html'));
var loaded = require('..');
var src = 'https://raw.githubusercontent.com/staygrimm/img-loaded/master/test/fixtures/image1.jpg'

describe('Loaded', function () {
    it('returns true if an image has already loaded', function (done) {
        var image = new Image();
        image.onload = function() {
            loaded(image, function(err, img) {
                assert(err === null);
                assert(img);
                done();
            });
        }
        image.src = src;
    });
    it('returns true once an image has loaded', function(done) {
        var image = new Image();
        loaded(image, function(err, img) {
            assert(err === null);
            assert(img);
            done();
        });

        setTimeout(function() {
            image.src = src
        }, 500);
    });
    it('passes image element to callback function', function(done) {
        var image = template.querySelector('img');
        loaded(image, function(err, img) {
            assert(err === null);
            assert(img === image);
            done();
        });
    });
    it('accepts an image element', function (done) {
        var image = template.querySelector('.ImageOne');
        loaded(image, function(err, img) {
            assert(err === null);
            assert(img);
            done();
        });
    });
    it('accepts a node list', function (done) {
        var images = template.querySelectorAll('img');
        var count = 0;

        function complete() {
            count = count + 1;
            if (count === 2) done();
        }

        loaded(images, function(err, img) {
            assert(err === null);
            assert(img);
            complete();
        });
    });
    it('accepts an array of elements', function (done) {
        var images = [];
        images.push(template.children[0]);
        images.push(template.children[1]);
        var count = 0;

        function complete() {
            count = count + 1;
            if (count === 2) done();
        }

        loaded(images, function(err, img) {
            assert(err === null);
            assert(img);
            complete();
        });
    });
});