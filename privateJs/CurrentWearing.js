!function() {
    var n = {
        5145: function(e, t, n) {
            var r;
            function c(e) {
                return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                }
                : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }
                )(e)
            }
            /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
            !function() {
                "use strict";
                var o = {}.hasOwnProperty;
                function l() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var r = c(n);
                            if ("string" === r || "number" === r)
                                e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var a = l.apply(null, n);
                                a && e.push(a)
                            } else if ("object" === r)
                                for (var i in n)
                                    o.call(n, i) && n[i] && e.push(i)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (l.default = l,
                e.exports = l) : "object" === c(n.amdO) && n.amdO ? void 0 === (r = function() {
                    return l
                }
                .apply(t, [])) || (e.exports = r) : window.classNames = l
            }()
        }
    }
      , r = {};
    function L(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, L),
        t.exports
    }
    L.amdO = {},
    L.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return L.d(t, {
            a: t
        }),
        t
    }
    ,
    L.d = function(e, t) {
        for (var n in t)
            L.o(t, n) && !L.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    L.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    function() {
        "use strict";
        function n(n) {
            return D(void 0, void 0, Promise, function() {
                var t;
                return T(this, function(e) {
                    return t = {
                        url: k + "/v1/users/" + document.getElementById("CurrentWearing").getAttribute("userid") + "/currently-wearing",
                        retryable: !0,
                        withCredentials: !0
                    },
                    [2, c.httpService.get(t)]
                })
            })
        }
        function r(r) {
            return D(void 0, void 0, Promise, function() {
                var t, n;
                return T(this, function(e) {
                    return t = {
                        url: R + "/v1/catalog/items/details",
                        retryable: !0,
                        withCredentials: !0
                    },
                    n = r.map(function(e) {
                        return {
                            itemType: "Asset",
                            id: e
                        }
                    }),
                    [2, c.httpService.post(t, {
                        items: n
                    })]
                })
            })
        }
        function a() {
            return document.getElementById("CurrentWearing").getAttribute("userid")
        }
        function i() {
            var e = (0,
            u.useState)(C())
              , t = e[0]
              , n = e[1];
            return s().createElement("div", {
                className: "col-sm-6 section-content profile-avatar-left"
            }, s().createElement("div", {
                className: "thumbnail-holder"
            }, t === m.twoD ? s().createElement(E.Thumbnail2d, {
                targetId: U(),
                type: E.ThumbnailTypes.avatar,
                size: p,
                containerClass: "thumbnail-span"
            }) : s().createElement(x.Thumbnail3d, {
                targetId: U()
            }), s().createElement(g.Button, {
                className: "enable-three-dee btn-control",
                variant: g.Button.variants.control,
                size: g.Button.sizes.large,
                width: g.Button.widths.default,
                onClick: function() {
                    t === m.twoD ? (n(m.threeD),
                    P(m.threeD)) : (n(m.twoD),
                    P(m.twoD))
                }
            }, t === m.twoD ? m.threeD : m.twoD)))
        }
        function o(e) {
            var t, n, r = e.asset, e = null === (t = r.itemRestrictions) || void 0 === t ? void 0 : t.includes(b.limited);
            return (null === (t = r.itemRestrictions) || void 0 === t ? void 0 : t.includes(b.limitedUnique)) ? n = s().createElement("span", {
                className: "icon-label icon-limited-unique-label"
            }) : e && (n = s().createElement("span", {
                className: "icon-label icon-limited-label"
            })),
            s().createElement("li", {
                className: "accoutrement-item"
            }, s().createElement(g.Link, {
                url: "/catalog/" + r.id
            }, s().createElement(E.Thumbnail2d, {
                targetId: r.id,
                type: E.ThumbnailTypes.assetThumbnail,
                imgClassName: "accoutrment-image",
                altName: r.name
            }), s().createElement("div", {
                className: "asset-restriction-icon"
            }, n)))
        }
        function l(e) {
            var t = e.assets
              , n = (e = (0,
            u.useState)(0))[0]
              , r = e[1]
              , e = new Array(Math.min(Math.ceil(t.length / h), v)).fill(0).map(function(e, t) {
                return t
            })
              , t = t.slice(n * h, (n + 1) * h).map(function(e) {
                return s().createElement(o, {
                    asset: e
                })
            })
              , e = e.map(function(e) {
                return s().createElement("span", {
                    onClick: function() {
                        r(e)
                    },
                    className: A()("profile-accoutrements-page", {
                        "page-active": n === e
                    })
                })
            });
            return s().createElement("div", {
                className: "col-sm-6 section-content profile-avatar-right"
            }, s().createElement("div", {
                className: "profile-avatar-mask"
            }, s().createElement("div", {
                className: "profile-accoutrements-container"
            }, s().createElement("div", {
                className: "profile-accoutrements-slider"
            }, s().createElement("ul", {
                className: "accoutrement-items-container"
            }, t)), s().createElement("div", {
                className: "profile-accoutrements-page-container"
            }, e))))
        }
        var c = CoreUtilities
          , u = React
          , s = L.n(u)
          , e = ReactDOM
          , t = function() {
            return document.getElementById("profile-current-wearing-avatar")
        }
          , f = {
            currentlyWearing: "Heading.CurrentlyWearing"
        }
          , m = {
            twoD: "2D",
            threeD: "3D"
        }
          , d = "profileAvatarMode"
          , p = "352x352"
          , v = 9
          , h = 8
          , b = {
            limitedUnique: "LimitedUnique",
            limited: "Limited"
        }
          , y = ReactUtilities
          , w = {
            common: [],
            feature: "Feature.Profile"
        }
          , g = ReactStyleGuide
          , E = RobloxThumbnails
          , x = RobloxThumbnail3d
          , S = CoreRobloxUtilities
          , N = Roblox
          , D = function(e, o, l, c) {
            return new (l = l || Promise)(function(n, t) {
                function r(e) {
                    try {
                        i(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function a(e) {
                    try {
                        i(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function i(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof l ? t : new l(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                i((c = c.apply(e, o || [])).next())
            }
            )
        }
          , T = function(n, r) {
            var a, i, o, l = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (a)
                            throw new TypeError("Generator is already executing.");
                        for (; l; )
                            try {
                                if (a = 1,
                                i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, t[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (t = [2 & t[0], o.value]),
                                t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return l.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++,
                                    i = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(),
                                    l.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < o[1]) {
                                        l.label = o[1],
                                        o = t;
                                        break
                                    }
                                    if (o && l.label < o[2]) {
                                        l.label = o[2],
                                        l.ops.push(t);
                                        break
                                    }
                                    o[2] && l.ops.pop(),
                                    l.trys.pop();
                                    continue
                                }
                                t = r.call(n, l)
                            } catch (e) {
                                t = [6, e],
                                i = 0
                            } finally {
                                a = o = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , k = N.EnvironmentUrls.avatarApi
          , R = N.EnvironmentUrls.catalogApi
          , C = function() {
            return S.localStorageService.getLocalStorage(d) || m.twoD
        }
          , P = function(e) {
            S.localStorageService.setLocalStorage(d, e)
        }
          , O = function() {
            return D(void 0, void 0, Promise, function() {
                var t;
                return T(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, n(a())];
                    case 1:
                        return t = e.sent().data.assetIds,
                        [4, r(void 0 === t ? [] : t)];
                    case 2:
                        return t = e.sent().data.data,
                        [2, void 0 === t ? [] : t]
                    }
                })
            })
        }
          , U = a
          , N = L(5145)
          , A = L.n(N)
          , I = function(e, o, l, c) {
            return new (l = l || Promise)(function(n, t) {
                function r(e) {
                    try {
                        i(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function a(e) {
                    try {
                        i(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function i(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof l ? t : new l(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                i((c = c.apply(e, o || [])).next())
            }
            )
        }
          , j = function(n, r) {
            var a, i, o, l = {
                label: 0,
                sent: function() {
                    if (1 & o[0])
                        throw o[1];
                    return o[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(t) {
                return function(e) {
                    return function(t) {
                        if (a)
                            throw new TypeError("Generator is already executing.");
                        for (; l; )
                            try {
                                if (a = 1,
                                i && (o = 2 & t[0] ? i.return : t[0] ? i.throw || ((o = i.return) && o.call(i),
                                0) : i.next) && !(o = o.call(i, t[1])).done)
                                    return o;
                                switch (i = 0,
                                o && (t = [2 & t[0], o.value]),
                                t[0]) {
                                case 0:
                                case 1:
                                    o = t;
                                    break;
                                case 4:
                                    return l.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    l.label++,
                                    i = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = l.ops.pop(),
                                    l.trys.pop();
                                    continue;
                                default:
                                    if (!(o = 0 < (o = l.trys).length && o[o.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        l = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!o || t[1] > o[0] && t[1] < o[3])) {
                                        l.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && l.label < o[1]) {
                                        l.label = o[1],
                                        o = t;
                                        break
                                    }
                                    if (o && l.label < o[2]) {
                                        l.label = o[2],
                                        l.ops.push(t);
                                        break
                                    }
                                    o[2] && l.ops.pop(),
                                    l.trys.pop();
                                    continue
                                }
                                t = r.call(n, l)
                            } catch (e) {
                                t = [6, e],
                                i = 0
                            } finally {
                                a = o = 0
                            }
                        if (5 & t[0])
                            throw t[1];
                        return {
                            value: t[0] ? t[1] : void 0,
                            done: !0
                        }
                    }([t, e])
                }
            }
        }
          , B = (0,
        y.withTranslations)(function(e) {
            var t = e.translate
              , n = (0,
            u.useState)([])
              , e = n[0]
              , r = n[1];
            return (0,
            u.useEffect)(function() {
                I(void 0, void 0, void 0, function() {
                    var t;
                    return j(this, function(e) {
                        switch (e.label) {
                        case 0:
                            return e.trys.push([0, 2, , 3]),
                            [4, O()];
                        case 1:
                            return t = e.sent(),
                            r(t),
                            [3, 3];
                        case 2:
                            return t = e.sent(),
                            console.debug(t),
                            [3, 3];
                        case 3:
                            return [2]
                        }
                    })
                })
            }, []),
            s().createElement(s().Fragment, null, s().createElement("div", {
                className: "container-header"
            }, s().createElement("h2", null, t(f.currentlyWearing))), s().createElement(i, null), s().createElement(l, {
                assets: e
            }))
        }, w);
        (0,
        c.ready)(function() {
            t() && (0,
            e.render)(s().createElement(B, null), t())
        })
    }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/43a66f891738ec36ba6f-currentWearing.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("CurrentWearing");
