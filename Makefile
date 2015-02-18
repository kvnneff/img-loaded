BIN := ./node_modules/.bin

build: node_modules
	mkdir -p build
	$(MAKE) js

node_modules:
	npm install

js:
	@$(BIN)/duo --stdout index.js > build/index.js \
		--development

build-test: build
	@$(BIN)/duo --stdout test/index.js > build/test.js

test:
	$(MAKE) build-test
	@$(BIN)/duo-test -B build/test.js -c 'make build-test' browser

test-sauce: build-test
	@$(BIN)/duo-test -B build/test.js saucelabs -n 1.0.0 -i public -b \
		ie:6..stable \
		firefox:3..stable \
		iphone:4.3..stable \
		ipad:4.3..stable \
		android:4.0..stable \
		opera:11..stable \
		safari:5..stable


clean:
	rm -rf components
	rm -rf build
	rm -rf node_modules

.PHONY: js build test