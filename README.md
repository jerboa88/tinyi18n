# tinyl18n [JS Library]
![](https://img.shields.io/badge/type-JS_Library-brightgreen.svg "Project type")
![](https://img.shields.io/github/repo-size/jerboa88/tinyl18n.svg "Repository size")
[![](https://img.shields.io/github/license/jerboa88/tinyl18n.svg "Project license")](LICENSE)


A tiny javascript library for internationalization and easy switching of languages on HTML pages

> **Note:** This is an experimental project at the moment. Use at your own risk

## Usage
1. Include `tinyl18n.js` before the closing body tag in your page and call `tinyl18n.loadTranslations('translations.json')` with the name of your JSON file to load it. Put the `data-translatekey` attribute on any block of text you want to have multiple languages. The value of this attribute is essentially an id for the block of text so you can write translations for it. You can use the same value for multiple blocks of text.

##### index.html
```html
<html>
  <head>
    <meta charset="UTF-8">
    <title data-translatekey="title"></title>
  </head>
  <body>
    <h1 data-translatekey="title"></h1>
    <p data-translatekey="description"></p>
    <script src="tinyl18n.js"></script>
    <script>
      tinyl18n.loadTranslations('translations.json')
    </script>
  </body>
</html>
```

2. Create your translations as shown below with multiple languages listed for each key. Make sure to include `default_language` and `languages` for the module to work properly
##### translations.json
```json
{
  "default_language": "es",
  "languages": ["en", "es"],
  "translations": {
    "title": {
      "en": "Title in English",
      "es": "Título en Inglés"
    },
    "description": {
      "en": "I like cats",
      "es": "Me gustan los gatos"
    }
  }
}
```
##### index.html
3. Call `tinyl18n.translate` with the language you want to switch to and voila!

```html
<html>
  <head>
    <meta charset="UTF-8">
    <title data-translatekey="title"></title>
  </head>
  <body>
    <h1 data-translatekey="title"></h1>
    <p data-translatekey="description"></p>
    <button onclick="tinyl18n.translate('en')">Translate to English</button>
    <button onclick="tinyl18n.translate('es')">Traducir al inglés</button>
    <script src="tinyl18n.js"></script>
    <script>
      tinyl18n.loadTranslations('translations.json')
    </script>
  </body>
</html>
```


## Contributing
Contributions, issues, and forks are welcome but this is a hobby project so don't expect too much from it. [SemVer](http://semver.org/) is used for versioning.


## License
This project is licensed under the Mozilla Public License 2.0. See [LICENSE](LICENSE.md) for details.
