import { Updater } from "./lib/updater.js";


/**  @typedef {'minimal' | 'ranged' | 'copyright-ranged' | "modified" | 'full'} FormatType */


/** 
 * @param {FormatType} format
 * @param {number} year
 * @param {number} [endYear] optional
*/

export default function cpUpdate(format, year, endYear) {
    const updater = new Updater(format, year,endYear);

    return updater.cpUpdater();
}
