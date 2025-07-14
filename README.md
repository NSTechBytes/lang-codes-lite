# lang-codes-lite 🌐

A lightweight, zero-dependency npm module that provides bidirectional lookup between ISO 639-1 language codes and their English names.

## ✅ Installation

```bash
npm install lang-codes-lite
````

## 🚀 Usage

```js
const { getCodeByName, getNameByCode, allLanguages } = require('lang-codes-lite');

// Lookup by name (case-insensitive):
console.log(getCodeByName('Hindi'));    // → "hi"
console.log(getCodeByName('hInDi'));    // → "hi"

// Lookup by code (case-insensitive):
console.log(getNameByCode('FR'));       // → "French"
console.log(getNameByCode('fr'));       // → "French"

// Access all mappings:
console.log(allLanguages.fr);           // → "French"
console.log(allLanguages['hi']);        // → "Hindi"
```

## 🧠 API Reference

* `getCodeByName(name: string): string | null`
  Returns the ISO 639-1 code for a given language name (case-insensitive). Returns `null` if not found.

* `getNameByCode(code: string): string | null`
  Returns the English name of a language for a given ISO 639-1 code (case-insensitive). Returns `null` if not found.

* `allLanguages: Record<string, string>`
  An object mapping every supported ISO 639-1 code to its corresponding English name.

## 🎯 Supported Languages

This module supports all ISO 639-1 two-letter codes, including major and less common languages like:

* Abkhazian (`ab`)
* Arabic (`ar`)
* Bengali (`bn`)
* Chinese – Simplified & Traditional (`zh_cn`, `zh_tw`)
* English (`en`)
* French (`fr`)
* Hindi (`hi`)
* Spanish (`es`)
* …and many more.

For the full list, see the `allLanguages` export.

## 🔄 Case Insensitivity

Both lookup functions work irrespective of letter casing:

```js
getCodeByName('HINDI'); // “hi”
getNameByCode('Fr');    // “French”
```

---

## 📝 License

MIT © 2025 nstechbytes

