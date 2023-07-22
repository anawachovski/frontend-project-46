install:
	npm ci

gendiff:
	node bin/gendiff.js

test:
	npx jest