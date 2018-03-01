import Fretboard from './index'

const tuning = ['E2', 'A2', 'D3', 'G3', 'B3', 'E4']

it('should be defined', () => {
    expect(Fretboard).toBeDefined()
})

it('should be a function', () => {
    expect(typeof Fretboard).toBe('function')
})

it('should be a constructor', () => {
    const fretboard = new Fretboard(tuning, 12)
    expect(fretboard instanceof Fretboard).toBe(true)
})

describe('positions', () => {
    let fretboard

    beforeEach(() => {
        fretboard = new Fretboard(tuning, 12)
    })

    it('should be defined', () => {
        expect(fretboard.positions).toBeDefined()
    })

    it('should return an array', () => {
        expect(Array.isArray(fretboard.positions)).toBe(true)
    })
})

describe('at', () => {
    let fretboard

    beforeEach(() => {
        fretboard = new Fretboard(tuning, 12)
    })

    it('should be defined', () => {
        expect(fretboard.at).toBeDefined()
    })

    it('should be a function', () => {
        expect(typeof fretboard.at).toBe('function')
    })

    it('should return a pitch', () => {
        expect(fretboard.at(0, 0).constructor.name).toBe('Pitch')
    })

    it('should return correct pitch at open strings', () => {
        expect(tuning.reverse().every((value, index) => fretboard.at(index, 0).equals(value))).toBe(
            true
        )
    })
})
