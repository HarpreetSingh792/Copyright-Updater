/**
 * @typedef {'minimal' | 'ranged' | 'copyright-ranged' | 'modified' | 'full'} FormatType
 */

class Updater {
    static formats = Object.freeze({
        MINIMAL: "minimal",
        RANGED: "ranged",
        COPYRIGHT_RANGED: "copyright-ranged",
        MODIFIED: "modified",
        FULL: "full"
    });


    /**
     * @param {FormatType} format
     * @param {number} startYear
     *  @param {number=} endYear
     */
    constructor(format, startYear = 0, endYear = 0) {
        this.format = format;
        this.startYear = startYear;
        this.endYear = endYear
    }

    cpUpdater() {
        const currentYear = new Date().getFullYear();

        switch (this.format) {
            case Updater.formats.MINIMAL:
                return this.startYear < currentYear
                    ? `© ${this.startYear} - ${currentYear}`
                    : `© ${this.startYear}`;

            case Updater.formats.RANGED:
                return `© ${this.startYear} - ${currentYear}`;

            case Updater.formats.COPYRIGHT_RANGED:
                return `Copyright ${this.startYear} - ${currentYear}`;

            case Updater.formats.MODIFIED:
                if (!this.startYear || !this.endYear) {
                    throw new Error("Both startYear and endYear are required for 'modified' format.");
                }
                return `Copyright ${this.startYear} - ${this.endYear}`;

            case Updater.formats.FULL:
            default:
                return this.startYear < currentYear
                    ? `Copyright ${this.startYear} - ${currentYear}`
                    : `Copyright ${this.startYear}`;
        }
    }
}

export { Updater };
