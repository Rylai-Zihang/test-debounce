import debounce from '../debounce'
import sinon from 'sinon'

let clock
beforeEach(() => {
    clock = sinon.useFakeTimers()
})

afterEach(() => {
    clock.restore()
})

describe('debounce', () => {
    let fn, debounced
    beforeEach(() => {
        fn = jest.fn()
        debounced = debounce(fn, 1000)
    })
    it('not execute', () => {
        debounced()
        expect(fn).toHaveBeenCalledTimes(0)
    })
    it('execute', () => {
        debounced()
        clock.tick(1000)
        expect(fn).toHaveBeenCalledTimes(1)
    })
    it('cancel', () => {
        debounced()
        clock.tick(999)
        debounced.cancel()
        expect(fn).toHaveBeenCalledTimes(0)
    })
})