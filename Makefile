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
	npm test -- --coverage --coverageProvider=v8
