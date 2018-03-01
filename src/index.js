import TwelveTet from 'twelvetet'

/**
 * @class TwelveTetFretboard
 * @param {Array} tuning An array of values representing fretboard tuning.
 * @param {Number} numFrets A positive integer indicating the number of frets.
 * @param {Number} [tuningFrequency] An optional positive number indicating the tuning frequency.
 * @example
 * import Fretboard from 'twelvetet-fretboard'
 *
 * const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] // standard guitar tuning
 * const numFrets = 12
 * const fretboard = new Fretboard(tuning, numFrets)
 *
 * console.log(fretboard.at(0, 0).toString())          // E4
 */
export default class TwelveTetFretboard {
    constructor(tuning, numFrets, tuningFrequency = 440) {
        if (!isNonEmptyArray(tuning)) {
            throw new TypeError("Missing or invalid argument, 'tuning'. Non-empty array expected.")
        }

        if (!isPositiveInteger(numFrets)) {
            throw new TypeError(
                "Missing or invalid argument, 'numFrets'. Positive integer expected."
            )
        }

        if (!isFrequency(tuningFrequency)) {
            throw new TypeError(
                "Missing or invalid argument, 'tuningFrequency'. Positive number expected."
            )
        }

        const twelvetet = new TwelveTet(tuningFrequency)
        const positions = (this._positions = [])
        tuning
            .slice(0)
            .reverse()
            .forEach((value, stringIndex) => {
                for (var fretIndex = 0; fretIndex < numFrets; fretIndex++) {
                    positions.push({
                        pitch: twelvetet.pitch(value).next(fretIndex),
                        stringIndex,
                        fretIndex,
                    })
                }
            })
    }

    /**
     * Returns the pitch at `(stringIndex, fretIndex)`
     * @function at
     * @memberof TwelveTetFretboard
     * @instance
     * @param {Number} aStringIndex A zero-based integer indicating the string
     * @param {Number} aFretIndex A zero-based integer indicating the fret
     * @returns {external:Pitch}
     */
    at(aStringIndex, aFretIndex) {
        if (!isNonNegativeInteger(aStringIndex)) {
            throw new TypeError(
                "Missing or invalid argument, 'aStringIndex'. Non-negative integer expected"
            )
        }

        if (!isNonNegativeInteger(aFretIndex)) {
            throw new TypeError(
                "Missing or invalid argument, 'aFretIndex'. Non-negative integer expected."
            )
        }

        const position = this._positions.find(
            ({ stringIndex, fretIndex }) => stringIndex === aStringIndex && fretIndex === aFretIndex
        )

        return position != null ? position.pitch : null
    }

    /**
     * @property {Array.<Position>} positions An array of all the positions on the fretboard
     * @memberof TwelveTetFretboard
     * @instance
     */
    get positions() {
        return this._positions.map(position => Object.assign({}, position))
    }
}

function isNonEmptyArray(value) {
    return /^\[object Array\]$/.test(Object.prototype.toString.call(value)) && value.length > 0
}

function isInteger(value) {
    return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
}

function isNonNegativeInteger(value) {
    return isInteger(value) && value >= 0
}

function isPositiveInteger(value) {
    return isInteger(value) && value > 0
}

function isFrequency(value) {
    return typeof value === 'number' && isFinite(value) && value > 0
}

/**
 * @external Pitch
 * @see [Pitch]{@link https://github.com/adriano-di-giovanni/twelvetet#Pitch}
 */

/**
 * @typedef Position
 * @property {external:Pitch} pitch The pitch at `(stringIndex, fretIndex)`.
 * @property {Number} stringIndex A zero-based integer indicating the string
 * @property {Number} fretIndex A zero-based integer indicating the fret
 */
