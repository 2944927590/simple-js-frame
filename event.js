/**
 * Created by ZQX on 2016/6/2.
 */
/**
 * Created by ZQX on 2016/6/2.
 */
(function(window, undefined){
    if (window.simpleEvent) {
        return ;
    }

    var simpleEvent = window.simpleEvent = {
        version: "0.0.1"
    };

    var data = simpleEvent.data = {};

    var events = data.events = {};

    simpleEvent.on = function(name, callback){
        var list = events[name] || (events[name] = [])
        list.push(callback);
        return simpleEvent;
    }

    simpleEvent.off = function(name, callback) {
        if (!(name || callback)) {
            events = data.events = {};
            return simpleEvent;
        }
        var list = events[name];
        if (list) {
            if (callback) {
                for (var i = list.length - 1; i >= 0; i--) {
                    if (list[i] === callback) {
                        list.splice(i, 1);
                    }
                }
            }
            else {
                delete events[name];
            }
        }
        return simpleEvent;
    }

    var emit = simpleEvent.emit = function(name, data) {
        var list = events[name];
        if (list) {
            list = list.slice();
            for(var i = 0, len = list.length; i < len; i++) {
                list[i](data);
            }
        }
        return simpleEvent;
    }
})(window);

