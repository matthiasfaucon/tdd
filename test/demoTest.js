import { assert } from 'chai'
import { sum, sayHello, getUsers, getCaptain } from '../demo/demo.js'

describe('sum()', function(){
    it('sum should return a+b', function(){
        assert.equal(sum(5,5), 10)
    })
})

describe('sayHello()', function(){
    it('function should return hello', function(){
        assert.equal(sayHello(), 'hello')
    })
    it('function should return a string', function(){
        assert.isString(sayHello(), 'c bien une string')
        // ? l'un ou l'autre -> assert.typeOf(sayHello(), 'string');
    })
})

describe('getUsers()', function(){
    it('function should return an array', function(){
        assert.isArray(getUsers(), 'c\'est un tableau')
    })
    it('function should return 6 items', function(){
        assert.lengthOf(getUsers(), 6, 'possède 6 items')
    })
})

describe('getCaptain()', function(){
    it('getCaptain should return luffy', function(){
        assert.equal(getCaptain(), 'luffy');
    })
})