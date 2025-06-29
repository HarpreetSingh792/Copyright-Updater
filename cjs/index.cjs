const { Updater } = require("../lib/updater.cjs");


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

module.exports = cpUpdate;