<!-- Project Header -->
<div align="center"> 
  <h1 class="projectName">tinyi18n</h1>

  <p class="projectBadges">
    <img src="https://img.shields.io/badge/Experimental-%E2%9A%A0%EF%B8%8E-ca8a04.svg" alt="Experimental" title="Experimental"/>
    <img src="https://johng.io/badges/category/Library.svg" alt="Project category" title="Project category">
    <img src="https://img.shields.io/github/languages/top/jerboa88/tinyi18n.svg" alt="Language" title="Language">
    <img src="https://img.shields.io/github/repo-size/jerboa88/tinyi18n.svg" alt="Repository size" title="Repository size">
    <a href="LICENSE">
      <img src="https://img.shields.io/github/license/jerboa88/tinyi18n.svg" alt="Project license" title="Project license"/>
    </a>
  </p>
  
  <p class="projectDesc">
    A tiny JavaScript library for internationalization and easy switching of languages on HTML pages
  </p>
  
  <br/>
</div>

> [!WARNING]
> This is an currently an experimental project or proof-of-concept. It may contain bugs or incomplete features, and is not intended for production use. Breaking changes may be made at any time. Consider more stable alternatives for critical applications.


## 👋 About

### Functions
- `loadTranslations('translations.json')`: Loads JSON file with translations. Takes a filename as input
- `getLang()`: Get the current language of the page according to tinyi18n
- `setLang('en')`: Changes the page language to a specified language. Takes a language string as input

### Attributes
- `data-translatekey="title"`: Use this on every text element you want to translate. Choose a different key for every element and add the translations for your keys in your JSON file
- `data-translateattribute="value"`: Use this on non-text elements where you need to have translated text for an attribute value (ex. value attribute for input elements)

## 🕹️ Usage
1. Include `tinyi18n.js` before the closing body tag in your page and call `tinyi18n.loadTranslations('translations.json')` with the name of your JSON file to load it. Put the `data-translatekey` attribute on any block of text you want to have multiple languages. The value of this attribute is essentially an id for the block of text so you can write translations for it. You can use the same value for multiple blocks of text. For non-text elements, also add the `data-translateattribute` to specify which attribute you want to have translations for.

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

    <input type="text" data-translatekey="searchbox" data-translateattribute="value"></input>

    <script src="tinyi18n.js"></script>
    <script>
      tinyi18n.loadTranslations('translations.json')
    </script>
  </body>
</html>
```

2. Create your translations as shown below with multiple languages listed for each key. Make sure to include `default_language` and `languages` for the module to work properly.
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
    },
    "searchbox": {
      "en": "search",
      "es": "buscar"
    }
  }
}
```
##### index.html
3. Call `tinyi18n.translate` with the language you want to switch to and voila!

```html
<html>
  <head>
    <meta charset="UTF-8">
    <title data-translatekey="title"></title>
  </head>
  <body>
    <h1 data-translatekey="title"></h1>
    <p data-translatekey="description"></p>
    <input type="text" data-translatekey="searchbox" data-translateattribute="value"></input>

    <button onclick="tinyi18n.setLang('en')">Translate to English</button>
    <button onclick="tinyi18n.setLang('es')">Traducir al inglés</button>

    <script src="tinyi18n.js"></script>
    <script>
      tinyi18n.loadTranslations('translations.json')
    </script>
  </body>
</html>
```


## 🤝 Contributing
Contributions, issues, and forks are welcome but this is a hobby project so don't expect too much from it. [SemVer](http://semver.org/) is used for versioning.


## 🧾 License
This project is licensed under the Mozilla Public License 2.0. See [LICENSE](LICENSE.md) for details.


## 💕 Funding
Find this project useful? [Sponsoring me](https://johng.io/funding) will help me cover costs and **_commit_** more time to open-source.

If you can't donate but still want to contribute, don't worry. There are many other ways to help out, like:

- 📢 reporting (submitting feature requests & bug reports)
- 👨‍💻 coding (implementing features & fixing bugs)
- 📝 writing (documenting & translating)
- 💬 spreading the word
- ⭐ starring the project

I appreciate the support!
