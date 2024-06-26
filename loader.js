"use strict";
function _typeof(e) {
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
        return typeof e
    }
    : function(e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    }
    ,
    _typeof(e)
}
function ownKeys(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        t && (o = o.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        }
        ))),
        r.push.apply(r, o)
    }
    return r
}
function _objectSpread(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {};
        t % 2 ? ownKeys(Object(r), !0).forEach((function(t) {
            _defineProperty(e, t, r[t])
        }
        )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : ownKeys(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
        }
        ))
    }
    return e
}
function _defineProperty(e, t, r) {
    return (t = _toPropertyKey(t))in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = r,
    e
}
function _toPropertyKey(e) {
    var t = _toPrimitive(e, "string");
    return "symbol" == _typeof(t) ? t : t + ""
}
function _toPrimitive(e, t) {
    if ("object" != _typeof(e) || !e)
        return e;
    var r = e[Symbol.toPrimitive];
    if (void 0 !== r) {
        var o = r.call(e, t || "default");
        if ("object" != _typeof(o))
            return o;
        throw new TypeError("@@toPrimitive must return a primitive value.")
    }
    return ("string" === t ? String : Number)(e)
}
var spLiveChatLoadedEvent = new CustomEvent("spLiveChatLoaded");
function createScriptElement(e) {
    return new Promise((function(t) {
        var r = document.createElement("script");
        r.setAttribute("async", ""),
        r.src = e,
        document.getElementsByTagName("body")[0].appendChild(r),
        r.onload = function() {
            return t()
        }
    }
    ))
}
function insert() {
    var e = document.querySelector("[data-live-chat-id]");
    window.sp = _objectSpread(_objectSpread({}, window.sp), {}, {
        liveChat: {
            projectId: e.dataset.liveChatId
        }
    }),
    createScriptElement(getHost()).then((function() {
        var e = document.getElementsByTagName("sp-live-chat").item(0);
        e.style.zIndex = "-1",
        e.style.position = "fixed",
        e.style.bottom = 0,
        e.style.display = "block",
        e.style.width = "100%",
        setTimeout((function() {
            return document.dispatchEvent(spLiveChatLoadedEvent)
        }
        ))
    }
    ))
}
function getHost() {
    return {
        "https://s3.eu-central-1.amazonaws.com/live-chat.sendpulse.prod/loader.js": "https://s3.eu-central-1.amazonaws.com/live-chat.sendpulse.prod/bundle.js",
        "https://s3.eu-central-1.amazonaws.com/live-chat.sendpulse.stage/loader.js": "https://s3.eu-central-1.amazonaws.com/live-chat.sendpulse.stage/bundle.js",
        "http://localhost:8000/loader.js": "http://localhost:8000/build/bundle.js"
    }[document.querySelector("[data-live-chat-id]").getAttribute("src")] || "https://cdn.pulse.is/livechat/bundle.js"
}
insert();
