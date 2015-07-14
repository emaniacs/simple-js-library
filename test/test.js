var assert = require("assert");
var Model = require("../Model");
var model = new Model({name:'Ardi'});

describe('Model', function(){
    it('should return my name', function(){
        assert.equal('Ardi', model.get('name'))
    });

    it('should throw an error', function(){
        function thr(){
            var m = new Model('sds');
        };
        assert.throws(thr, Error);
    })
})
