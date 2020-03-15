var loader = function(i) {
    function opts(r) {
        if (n[r]) {
            return n[r]["exports"];
        }
        var source = n[r] = {
            "i" : r,
            "l" : false,
            "exports" : {}
        };
        return i[r]["call"](source["exports"], source, source["exports"], opts), source["l"] = true, source["exports"];
    }
    var n = {};
    return opts["m"] = i, opts["c"] = n, opts["d"] = function(obj, prop, userNormalizer) {
        if (!opts["o"](obj, prop)) {
            Object["defineProperty"](obj, prop, {
                "enumerable" : true,
                "get" : userNormalizer
            });
        }
    }, opts["r"] = function(obj) {
        if ("undefined" != typeof Symbol && Symbol["toStringTag"]) {
            Object["defineProperty"](obj, Symbol["toStringTag"], {
                "value" : "Module"
            });
        }
        Object["defineProperty"](obj, "__esModule", {
            "value" : true
        });
    }, opts["t"] = function(val, canCreateDiscussions) {
        if (1 & canCreateDiscussions && (val = opts(val)), 8 & canCreateDiscussions) {
            return val;
        }
        if (4 & canCreateDiscussions && "object" == typeof val && val && val["__esModule"]) {
            return val;
        }
        var e = Object["create"](null);
        if (opts["r"](e), Object["defineProperty"](e, "default", {
            "enumerable" : true,
            "value" : val
        }), 2 & canCreateDiscussions && "string" != typeof val) {
            var offset;
            for (offset in val) {
                opts["d"](e, offset, function(attrPropertyName) {
                    return val[attrPropertyName];
                }["bind"](null, offset));
            }
        }
        return e;
    }, opts["n"] = function(exports) {
        var e = exports && exports["__esModule"] ? function() {
            return exports["default"];
        } : function() {
            return exports;
        };
        return opts["d"](e, "a", e), e;
    }, opts["o"] = function(e, p) {
        return Object["prototype"]["hasOwnProperty"]["call"](e, p);
    }, opts["p"] = "", opts(opts["s"] = 393);
}({
    393 : function(models, options) {
        var doc;
        var script;
        var url;
        var link;
        var self;
        window;
        doc = document;
        script = "script";
        url = "emulator.js";
        link = doc["createElement"](script);
        self = doc["getElementsByTagName"](script)[0];
        link["async"] = 1;
        link["src"] = url;
        self["parentNode"]["insertBefore"](link, self);
        link["onload"] = function() {
            var options = {};
            options["gameUrl"] = EJS_gameUrl;
            if ("undefined" != typeof EJS_biosUrl) {
                options["biosUrl"] = EJS_biosUrl;
            }
            if ("undefined" != typeof EJS_gameID) {
                options["gameId"] = EJS_gameID;
            }
            if ("undefined" != typeof EJS_gameParentUrl) {
                options["gameParentUrl"] = EJS_gameParentUrl;
            }
            if ("undefined" != typeof EJS_gamePatchUrl) {
                options["gamePatchUrl"] = EJS_gamePatchUrl;
            }
            options["system"] = EJS_core;
            options["onsavestate"] = null;
            options["onloadstate"] = null;
            if ("undefined" != typeof EJS_onSaveState) {
                options["onsavestate"] = EJS_onSaveState;
            }
            if ("undefined" != typeof EJS_onLoadState) {
                options["onloadstate"] = EJS_onLoadState;
            }
            if ("undefined" != typeof EJS_lightgun) {
                options["lightgun"] = EJS_lightgun;
            }
            if ("undefined" != typeof EJS_mouse) {
                options["mouse"] = EJS_mouse;
            }
            if ("undefined" != typeof EJS_multitap) {
                options["multitap"] = EJS_multitap;
            }
            if ("undefined" != typeof EJS_playerName) {
                options["playerName"] = EJS_playerName;
            }
            window["EJS_emulator"] = new EJS(EJS_player, options);
            if ("undefined" != typeof EJS_onGameStart) {
                EJS_emulator["on"]("start-game", EJS_onGameStart);
            }
        };
    }
})["default"];
