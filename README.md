## Вычислитель отличий
### Hexlet tests and linter status:
[![Actions Status](https://github.com/anawachovski/frontend-project-46/workflows/hexlet-check/badge.svg)](https://github.com/anawachovski/frontend-project-46/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/fdb9761a43fe36d4a6a0/maintainability)](https://codeclimate.com/github/anawachovski/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fdb9761a43fe36d4a6a0/test_coverage)](https://codeclimate.com/github/anawachovski/frontend-project-46/test_coverage)
---
### Описание
Вычислитель отличий – программа, определяющая разницу между двумя структурами данных. Программа может использоваться как утилита в командной строке, так и быть установленной как библиотека в стороннее приложение.

Возможности утилиты:

* Поддержка разных входных форматов: yaml, json
* Генерация отчета в виде plain text, stylish и json
### Настройка пакета
```
make install
npm link
```
Команда npm link может потребовать запуск с sudo:
```
sudo npm link
```
## Демонстрация работы пакета
### Сравнение плоских файлов формата JSON
[![asciicast](https://asciinema.org/a/VUYPOIDYnVCkQKts0Rzt9DWsP.svg)](https://asciinema.org/a/VUYPOIDYnVCkQKts0Rzt9DWsP)
### Сравнение плоских файлов формата YML/YAML
[![asciicast](https://asciinema.org/a/iJ6p2vm1YbZ4h9stHNtJXIFxa.svg)](https://asciinema.org/a/iJ6p2vm1YbZ4h9stHNtJXIFxa)
### Сравнение файлов с вложенной структурой JSON/YML/YAML в формате 'stylish'(по умолчанию)
[![asciicast](https://asciinema.org/a/NyXlYQ5i0e9lcoDCpWPY3WIAy.svg)](https://asciinema.org/a/NyXlYQ5i0e9lcoDCpWPY3WIAy)
### Вывод сравнения файлов с вложенной структурой JSON/YML/YAML в формате 'plain'
[![asciicast](https://asciinema.org/a/rZVH0jyT8ROdQLIsbZE1ioNIl.svg)](https://asciinema.org/a/rZVH0jyT8ROdQLIsbZE1ioNIl)
### Вывод сравнение файлов с вложенной структурой JSON/YML/YAML в формате 'json'
[![asciicast](https://asciinema.org/a/bmv2FlpJlMT3qMBHAvq56N54M.svg)](https://asciinema.org/a/bmv2FlpJlMT3qMBHAvq56N54M)
