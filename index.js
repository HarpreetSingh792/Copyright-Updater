import { Updater } from "./lib/updater.js";


/** 
 * @typedef {'minimal' | 'ranged' | 'copyright-ranged' | "modified" | 'full'} FormatType
 * @param {FormatType} format
 * @param {number} year
 * @param {number} [endYear] optional
*/

function cpUpdate(format, year, endYear) {
    const updater = new Updater(format, year,endYear);

    return updater.cpUpdater();
}

// Named and default exports for ESM
export default cpUpdate;
export { cpUpdate, Updater };

// CommonJS fallback support
// This ensures require() works too
if (typeof module !== "undefined") {
  module.exports = cpUpdate;
}