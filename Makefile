SHELL := /bin/bash
PATH  := node_modules/.bin:$(PATH)

SRC       := ./app
BUILD     := ./build
JS_ENTRY  := $(SRC)/js/index.js
JS_BUNDLE := $(BUILD)/app.min.js

SERVE     := http-server

BROWSERIFY_ARGS := -t babelify -v

build: static
	browserify $(JS_ENTRY) --debug $(BROWSERIFY_ARGS) -o $(JS_BUNDLE)

prod: static
	browserify $(JS_ENTRY) $(BROWSERIFY_ARGS) | uglifyjs -mc > $(JS_BUNDLE)

static:
	rsync -ramv $(SRC)/ $(BUILD) --include="*/" --include=*.{html,css} --exclude="*"

test:
	mocha --compilers js:babel-register -u bdd -R spec test

lint:
	eslint $(SRC)/js

watch:
	$(SERVE) public &\
	watchify $(JS_ENTRY) --debug -p livereactload $(BROWSERIFY_ARGS) &\
	livereload $(SRC) -d --exclusions "/\\.js/" &\
	wait

clean:
	rm -rf $(BUILD)

.PHONY: test lint watch clean
