# 📅 copyright-updater

A lightweight and customizable utility to auto-generate or update copyright years in your projects. Supports multiple formats, including custom ranges — perfect for open-source projects, websites, and professional applications.

---

## ✨ Features

- ✅ Auto-generates dynamic copyright year ranges
- 🧠 Smart format selection (`minimal`, `ranged`, `full`, and more)
- 🧩 Custom year range via `modified` mode
- ⚙️ Lightweight and dependency-free
- 🛠️ Works in both JavaScript and Node.js environments

---

## 📦 Installation

```bash
npm install copyright-updater
````

Or for testing locally with symlink:

```bash
npm link
```

---

## 🚀 Usage

### 1. Basic Example

```js
import cpUpdate from "copyright-updater";

console.log(cpUpdate("minimal", 2020)); 
// Output: © 2020 - 2025
```

---

### 2. Custom Format Example

```js
import cpUpdate from "copyright-updater";

console.log(cpUpdate("modified", 2018, 2030)); 
// Output: Copyright 2018 - 2030
```

---

## 🔤 Available Formats

| Format             | Description                               | Example Output                    |
| ------------------ | ----------------------------------------- | --------------------------------- |
| `minimal`          | Uses symbol + range                       | `© 2020 - 2025`                   |
| `ranged`           | Always shows range                        | `© 2021 - 2025`                   |
| `copyright-ranged` | Adds "Copyright" label                    | `Copyright 2019 - 2025`           |
| `full` *(default)* | Shows single or ranged year with label    | `Copyright 2025` or `2020 - 2025` |
| `modified`         | Manually provide both start and end years | `Copyright 2018 - 2030`           |

---

## 🧠 API

### `cpUpdate(format, startYear, endYear?)`

| Param       | Type   | Required | Description                             |
| ----------- | ------ | -------- | --------------------------------------- |
| `format`    | string | ✅        | One of the predefined format types      |
| `startYear` | number | ✅        | Start year of the copyright             |
| `endYear`   | number | ❌        | Required **only** for `"modified"` mode |

---

## 🛑 Throws Error

If `modified` format is used **without end year**, you'll get:

```
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
