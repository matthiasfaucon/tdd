import { assert } from 'chai'
import { sum, sayHello } from '../demo/demo.js'

describe('sum()', function(){
    it('sum should return a+b', function(){
        assert.equal(sum(5,5), 10)
    })
})

describe('sayHello()', function(){
    it('function should return hello', function(){
        assert.equal(sayHello(), 'hello')
        assert.isString(sayHello(), 'c bien une string')
    })
})