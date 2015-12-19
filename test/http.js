var assert = require("assert");
var ajax = require("../ajax");

describe('http', function(){
    var promise;
    beforeEach(function(done){
        promise = ajax('GET', '127.0.0.1:8000');
        done();
    })

    it('should return all data', function(){
        promise.then(
            function(msg){
                // expect(msg).equals('test');
            assert.equal('test', msg)
            }
        )
        .catch(function(msg){
            assert.equal('test', msg)
        })
    });

//     it('should return single data', function(){
//         assert.equal('Ardi', model.get('name'))
//     });

//     it('should throw an error', function(){
//         function thr(){
//             var m = new Model('sds');
//         };
//         assert.throws(thr, Error);
//     })

//     it('should return new single data', function(){
//         var name = 'Novi';
//         model.set('name', name);
//         assert.equal(name, model.get('name'));
//     })

//     it('should throw error while set unexisting key', function(){
//         function err(){
//             model.set('wew', 'nothing');
//         };

//         assert.throws(err, Error);
//     })

//     it('should add new key on data', function(){
//         var age = 30;
//         model.add('age', age);
//         assert.equal(age, model.get('age'));
//     })

//     it('should return array on trigger single event', function(){
//         var expected = ['ok'];
//         var mm = new Model({});
//         mm.on('change', function(){
//             return 'ok';
//         })

//         assert.deepEqual(expected, mm.trigger('change'));
//     })

//     it('should return array on trigger multiple event', function(){
//         var expected = ['ok', 'ok'];
//         var mm = new Model({});
//         mm.on('change', function(){
//             return 'ok';
//         })
//         mm.on('change', function(){
//             return 'ok';
//         })

//         assert.deepEqual(expected, mm.trigger('change'));
//     })
//     it('should return empty array on trigger() after off()', function(){
//         var expected = [];
//         var mm = new Model({});
//         mm.on('change', function(){
//             return 'ok';
//         })
//         mm.on('change', function(){
//             return 'ok';
//         })

//         mm.off('change');

//         assert.deepEqual(expected, mm.trigger('change'));
//     })

})
