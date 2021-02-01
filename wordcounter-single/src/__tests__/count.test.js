import countWords from '../countWords'
import {describe, expect, it } from '@jest/globals'


describe('the counting Function', () => {
    it('counts the number of words', () => {
        expect(countWords("One Two three")).toBe(3)
    })

    it('counts an empty string', () => {
        expect(countWords('')).toBe(0)
    })
    
    it('counts other string', () => {
        expect(countWords('do bee do bee dooo')).toBe(5)
    })  
    
}) 
