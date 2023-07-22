install:
	npm ci

gendiff:
	node bin/gendiff.js

test:
	npx jest

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

test-coverage:
	npx jest -- --coverage --coverageProvider=v8
