var assert = require("assert");
var Model = require("../Model");

var alldata = {name: 'Ardi'};
var model = new Model({name:'Ardi'});

describe('Model', function(){
    it('should return all data', function(){
        assert.deepEqual(alldata, model.get())
    });

    it('should return single data', function(){
        assert.equal('Ardi', model.get('name'))
    });

    it('should throw an error', function(){
        function thr(){
            var m = new Model('sds');
        };
        assert.throws(thr, Error);
    })

    it('should return new single data', function(){
        var name = 'Novi';
        model.set('name', name);
        assert.equal(name, model.get('name'));
    })

    it('should throw error while set unexisting key', function(){
        function err(){
            model.set('wew', 'nothing');
        };

        assert.throws(err, Error);
    })
})
