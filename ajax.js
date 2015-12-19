(function(name, definition) {
    if (typeof module != 'undefined') module.exports = definition();
    else if (typeof define == 'function' && typeof define.amd == 'object') define(definition);
    else this[name] = definition();
}('ajax', function() {
    'use strict';

    return function (method, uri, args){
        var promise = new Promise(function(resolve, reject){
            var client = new XMLHttpRequest();
            var method = method.toUpperCase();

            if (args && (method === 'POST' || method === 'PUT')) {
                var cont = [];
                for (var key in args) {
                    if (args.hasOwnProperty(key)) {
                        cont.push (encodeURIComponent(key) + '=' + encodeURIComponent(args[key]))
                    }
                }
                uri += '?' + cont.join('&');
            }

            client.open(method, uri);
            client.send();

            client.onload = function(){
                if (this.status == 200)
                    resolve(this.response);
                else
                    reject(this.statusText);
            };

            client.onerror = function(){
                reject(this.statusText);
            };

        });

        return promise;
    }
}));
