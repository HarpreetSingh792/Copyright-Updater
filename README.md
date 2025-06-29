# 📅 copyright-updater

A lightweight and customizable utility to auto-generate or update copyright years in your projects. Supports multiple formats, including custom ranges — perfect for open-source projects, websites, and professional applications.

---

## ✨ Features

- ✅ Auto-generates dynamic copyright year ranges
- 🧠 Smart format selection (`minimal`, `ranged`, `full`, etc.)
- 📆 `ranged` & `copyright-ranged` now accept **optional end year**
- 🧩 `modified` format enforces manual range
- ⚙️ Lightweight and dependency-free
- 🛠️ Works in both JavaScript and Node.js environments

---

## 📦 Installation

```bash
npm install copyright-updater
```

Or for testing locally with symlink:

```bash
npm link
```

---

## 🚀 Usage

### 1. Minimal Format

```js
import cpUpdate from "copyright-updater";

console.log(cpUpdate("minimal", 2020)); 
// Output: © 2020 - 2025 (or current year)
```

---

### 2. Ranged Format

```js
console.log(cpUpdate("ranged", 2018)); 
// Output: © 2018 - 2025

console.log(cpUpdate("ranged", 2018, 2030)); 
// Output: © 2018 - 2030
```

---

### 3. Copyright-Ranged

```js
console.log(cpUpdate("copyright-ranged", 2019)); 
// Output: Copyright 2019 - 2025

console.log(cpUpdate("copyright-ranged", 2019, 2029)); 
// Output: Copyright 2019 - 2029
```

---

### 4. Modified Format (Strict)

```js
console.log(cpUpdate("modified", 2015, 2022)); 
// Output: Copyright 2015 - 2022
```

> ⚠️ This format **requires both** `startYear` and `endYear`. If either is missing, an error is thrown.

---

### 5. Full Format (Default fallback)

```js
console.log(cpUpdate("full", 2025));
// Output: Copyright 2025
```

---

## 🔤 Available Formats

| Format             | Description                                        | Example Output                    |
|-------------------|----------------------------------------------------|-----------------------------------|
| `minimal`          | Symbol + smart range (`©`)                        | `© 2020 - 2025`                   |
| `ranged`           | Accepts optional end year                         | `© 2018 - 2030` or `© 2018 - 2025`|
| `copyright-ranged` | Same as `ranged`, but with `"Copyright"` label    | `Copyright 2018 - 2025`           |
| `full` *(default)* | Smart single or ranged year with `"Copyright"`    | `Copyright 2025` or `2020 - 2025` |
| `modified`         | Manual range, **requires both** start & end years | `Copyright 2018 - 2030`           |

---

## 🧠 API

### `cpUpdate(format, startYear, endYear?)`

| Param       | Type   | Required | Description                             |
|-------------|--------|----------|-----------------------------------------|
| `format`    | string | ✅        | One of the predefined format types      |
| `startYear` | number | ✅        | Start year of the copyright             |
| `endYear`   | number | ❌        | Used only in `ranged`, `copyright-ranged`, and `modified` |

---

## 🛑 Error Handling

If `modified` format is used without `endYear`, you'll get:

```bash
Error: Both startYear and endYear are required for 'modified' format.
```

---

## 🧪 Coming Soon

* [ ] CLI Support (e.g. `npx copyright-updater`)
* [ ] Auto-update license headers across files
* [ ] Config-based year override

---

## 👨‍💻 Author

Created with ❤️ by [Harpreet Singh](https://github.com/HarpreetSingh792)

---

## 📄 License

[ISC](./LICENSE)
