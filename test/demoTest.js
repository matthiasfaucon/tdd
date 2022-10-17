import { assert } from 'chai'
import { sum } from '../demo/demo.js'

describe('sum()', function(){
    it('sum should return a+b', function(){
        assert.equal(sum(5,5), 10)
    })
})