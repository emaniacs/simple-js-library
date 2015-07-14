function Model(val){
    var 
        // get the real type
        is = function(value, type){
            if(type=='int' || type =='integer')
                type = 'number';

            var name = '[object '+ type.toLowerCase();
            var compare = Object.prototype.toString.call(value);

            return name === compare;
        },

        // check existing key on the value.
        exist = function(val ,key){
            return val.hasOwnProperty(key);
        },

        // on container
        on = {},

        // copy the value and check, it must be an object
        data = val
    ;

    if(is(data, 'object'))
        throw new Error('Argument must be an object');

    // set the value
    this.set = function(key, val){
        if(! exist(data, key))
            throw new Error('The key of "'+key+'" not existing.');

        data[key] = val;
        return this;
    }

    // add new key into data
    this.add = function(key, val){
        data[key] = val;
        return this;
    }

    // get the data
    this.get = function(key){
        if(!key) return data;

        return exist(data, key) ? data[key] : undefined;
    }

    // set event
    this.on = function(name, cb){
        if(! exist(on, name))
            on[name] = [];
        on[name].push(cb);
    }

    // take care about this
    this.trigger = function(name){
        if(exist(on, name))
            return on[name].map(function(cb){
                return cb();
            })

        return [];
    }
}
