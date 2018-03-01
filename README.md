# TwelveTetFretboard

> TwelveTetFretboard is a small fretboard utility library for Javascript. It helps you manipulate pitches on a fretboard.

Please, refer to the [Installation](#installation), [Usage](#usage) and [API](#api) sections for more information.

## Installation <a name="installation"></a>

Install the latest stable version of TwelveTetFretboard using [npm](https://www.npmjs.com/):

```bash
npm install twelvetet-fretboard twelvetet
```

You can also [access the files on unpkg.com](https://unpkg.com/twelvetet-fretboard/).

You can use TwelveTetFretboard with module bundlers.

The [npm package](https://www.npmjs.com/package/twelvetet-fretboard) includes precompiled production and development [UMD](https://github.com/umdjs/umd) builds in the `dist/` folder. They can be used without a bundler.

The UMD builds make TwelveTetFretboard available as `window.TwelveTetFretboard` global variable.

TwelveTetFretboard works in [any modern browser](http://caniuse.com/#feat=es5) and Node.js.

## Usage <a name="usage"></a>

```Javascript
import Fretboard from 'twelvetet-fretboard'

const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] // standard guitar tuning
const numFrets = 12
const fretboard = new Fretboard(tuning, numFrets)

console.log(fretboard.at(0, 0).toString())          // E4
```

## API  <a name="api"></a>

## Classes

<dl>
<dt><a href="#TwelveTetFretboard">TwelveTetFretboard</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Position">Position</a></dt>
<dd></dd>
</dl>

<a name="TwelveTetFretboard"></a>

## TwelveTetFretboard
**Kind**: global class  

* [TwelveTetFretboard](#TwelveTetFretboard)
    * [new TwelveTetFretboard(tuning, numFrets, [tuningFrequency])](#new_TwelveTetFretboard_new)
    * [.positions](#TwelveTetFretboard+positions)
    * [.at(aStringIndex, aFretIndex)](#TwelveTetFretboard+at) ⇒ [<code>Pitch</code>](https://github.com/adriano-di-giovanni/twelvetet#Pitch)

<a name="new_TwelveTetFretboard_new"></a>

### new TwelveTetFretboard(tuning, numFrets, [tuningFrequency])

| Param | Type | Description |
| --- | --- | --- |
| tuning | <code>Array</code> | An array of values representing fretboard tuning. |
| numFrets | <code>Number</code> | A positive integer indicating the number of frets. |
| [tuningFrequency] | <code>Number</code> | An optional positive number indicating the tuning frequency. |

**Example**  
```js
import Fretboard from 'twelvetet-fretboard'

const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4'] // standard guitar tuning
const numFrets = 12
const fretboard = new Fretboard(tuning, numFrets)

console.log(fretboard.at(0, 0).toString())          // E4
```
<a name="TwelveTetFretboard+positions"></a>

### twelveTetFretboard.positions
**Kind**: instance property of [<code>TwelveTetFretboard</code>](#TwelveTetFretboard)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| positions | [<code>Array.&lt;Position&gt;</code>](#Position) | An array of all the positions on the fretboard |

<a name="TwelveTetFretboard+at"></a>

### twelveTetFretboard.at(aStringIndex, aFretIndex) ⇒ [<code>Pitch</code>](https://github.com/adriano-di-giovanni/twelvetet#Pitch)
Returns the pitch at `(stringIndex, fretIndex)`

**Kind**: instance method of [<code>TwelveTetFretboard</code>](#TwelveTetFretboard)  

| Param | Type | Description |
| --- | --- | --- |
| aStringIndex | <code>Number</code> | A zero-based integer indicating the string |
| aFretIndex | <code>Number</code> | A zero-based integer indicating the fret |

<a name="Position"></a>

## Position
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| pitch | [<code>Pitch</code>](https://github.com/adriano-di-giovanni/twelvetet#Pitch) | The pitch at `(stringIndex, fretIndex)`. |
| stringIndex | <code>Number</code> | A zero-based integer indicating the string |
| fretIndex | <code>Number</code> | A zero-based integer indicating the fret |


## License

This project is [MIT-licensed](LICENSE)
