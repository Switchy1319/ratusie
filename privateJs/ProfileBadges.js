!function() {
    var n = {
        779: function(e, t) {
            var n;
            /*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
            !function() {
                "use strict";
                var i = {}.hasOwnProperty;
                function l() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var r = typeof n;
                            if ("string" == r || "number" == r)
                                e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var a = l.apply(null, n);
                                a && e.push(a)
                            } else if ("object" == r)
                                for (var o in n)
                                    i.call(n, o) && n[o] && e.push(o)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (l.default = l,
                e.exports = l) : void 0 === (n = function() {
                    return l
                }
                .apply(t, [])) || (e.exports = n)
            }()
        }
    }
      , r = {};
    function re(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, re),
        t.exports
    }
    re.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return re.d(t, {
            a: t
        }),
        t
    }
    ,
    re.d = function(e, t) {
        for (var n in t)
            re.o(t, n) && !re.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    re.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    function() {
        "use strict";
        var n = CoreUtilities
          , b = React
          , m = re.n(b)
          , e = ReactDOM
          , t = PropTypes
          , r = re.n(t)
          , a = ReactUtilities
          , g = ReactStyleGuide
          , o = {
            common: ["CommonUI.Controls"],
            feature: "Feature.ProfileBadges"
        }
          , i = Roblox
          , l = i.EnvironmentUrls.websiteUrl
          , d = "Heading.PlayerAssetsBadges"
          , u = "Action.SeeAll"
          , f = 6
          , p = function(e) {
            return "".concat(l, "/users/").concat(e, "/inventory/#!/badges")
        }
          , h = "Heading.RobloxBadge"
          , c = "Action.SeeMore"
          , s = "Action.SeeLess"
          , y = 6;
        function v(e) {
            var t = e.translate
              , n = e.headerLabel
              , r = e.isSeeAllShown
              , a = e.url
              , o = e.seeMoreLessCallback
              , i = e.seeMore
              , e = e.isSeeMoreShown
              , i = o ? i ? s : c : null;
            return m().createElement("div", {
                className: "container-header"
            }, m().createElement("h2", null, n), r && m().createElement(g.Link, {
                url: a,
                class: "btn-fixed-width btn-secondary-xs btn-more see-all-link-icon"
            }, t(u)), e && m().createElement(g.Link, {
                onClick: o,
                class: "btn-fixed-width btn-secondary-xs btn-more see-all-link"
            }, t(i)))
        }
        v.defaultProps = {
            isSeeAllShown: !1,
            url: "",
            seeMoreLessCallback: null,
            seeMore: "",
            isSeeMoreShown: !1
        },
        v.propTypes = {
            translate: r().func.isRequired,
            headerLabel: r().string.isRequired,
            isSeeAllShown: r().bool,
            url: r().string,
            seeMoreLessCallback: r().func,
            seeMore: r().string,
            isSeeMoreShown: r().bool
        };
        var S = v
          , t = re(779)
          , w = re.n(t)
          , E = RobloxThumbnails
          , A = i.EnvironmentUrls.websiteUrl
          , x = {
            1: "icon-badge-administrator",
            2: "icon-badge-friendship",
            3: "icon-badge-combat-initiation",
            4: "icon-badge-warrior",
            5: "icon-badge-bloxxer",
            6: "icon-badge-homestead",
            7: "icon-badge-bricksmith",
            8: "icon-badge-inviter",
            11: "icon-badge-builders-club",
            12: "icon-badge-veteran",
            14: "icon-badge-ambassador",
            15: "icon-badge-turbo-builders-club",
            16: "icon-badge-outrageous-builders-club",
            17: "icon-badge-official-model-maker",
            18: "icon-badge-welcome-to-the-club",
            33: "icon-badge-official-model-maker",
            34: "icon-badge-welcome-to-the-club"
        }
          , T = function(e, t) {
            t = n.seoName.formatSeoName(t);
            return "".concat(A, "/badges/").concat(e, "/").concat(t)
        }
          , O = function(e) {
            return "".concat(A, "/info/roblox-badges#Badge").concat(e)
        }
          , I = function(e) {
            return x[e] || null
        }
          , j = "playerBadge"
          , M = "robloxBadge";
        function C(e) {
            var t, n = e.badgeData, e = e.badgeType, r = n.id, a = n.name, o = n.description, i = "", l = "";
            switch (e) {
            case j:
                i = T(r, a),
                l = m().createElement(E.Thumbnail2d, {
                    type: E.ThumbnailTypes.badgeIcon,
                    size: E.DefaultThumbnailSize,
                    targetId: r,
                    imgClassName: "asset-thumb-container",
                    format: E.ThumbnailFormat.png,
                    altName: o
                });
                break;
            case M:
            default:
                i = O(r),
                t = w()("border asset-thumb-container", [I(r)]),
                l = m().createElement("span", {
                    className: t,
                    title: a
                })
            }
            return m().createElement("li", {
                className: "list-item asset-item"
            }, m().createElement(g.Link, {
                url: i,
                title: o
            }, l, m().createElement("span", {
                className: "font-header-2 text-overflow item-name"
            }, a)))
        }
        C.propTypes = {
            badgeData: r().arrayOf(r().shape({
                id: r().number,
                name: r().string,
                description: r().string,
                iconImageId: r().number
            })).isRequired,
            badgeType: r().string.isRequired
        };
        var k = C;
        function L(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , a = !1
                  , o = void 0;
                try {
                    for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == l.return || l.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return R(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return R(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function R(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function U(e) {
            var t = e.badgesData
              , n = e.badgeType
              , r = e.isSectionHeightAuto
              , a = w()("hlist badge-list", {
                "badge-list-more": r
            })
              , e = L((0,
            b.useState)([]), 2)
              , r = e[0]
              , o = e[1];
            return (0,
            b.useEffect)(function() {
                return null != t && t.length && o(t),
                function() {}
            }, [t]),
            m().createElement("div", {
                className: "section-content remove-panel"
            }, m().createElement("ul", {
                className: a
            }, 0 < (null == r ? void 0 : r.length) && r.map(function(e) {
                return m().createElement(k, {
                    badgeData: e,
                    badgeType: n
                })
            })))
        }
        U.defaultProps = {
            isSectionHeightAuto: !1
        },
        U.propTypes = {
            badgesData: r().arrayOf(r().shape({})).isRequired,
            badgeType: r().string.isRequired,
            isSectionHeightAuto: r().bool
        };
        var N = U
          , P = i.EnvironmentUrls.badgesApi
          , B = i.EnvironmentUrls.accountInformationApi
          , D = function(e) {
            return {
                url: "".concat(P, "/v1/users/").concat(document.getElementById("ProfileBadges").getAttribute("userid"), "/badges"),
                withCredentials: !0
            }
        }
          , q = function(e) {
            return {
                url: "".concat(B, "/v1/users/").concat(document.getElementById("ProfileBadges").getAttribute("userid"), "/roblox-badges"),
                withCredentials: !0
            }
        }
          , H = {
            desc: "Desc"
        }
          , F = function(e) {
            var t = {
                sortOrder: H.desc
            };
            return n.httpService.get(D(e), t).then(function(e) {
                return e.data
            })
        }
          , z = function(e) {
            return n.httpService.get(q(e), {}).then(function(e) {
                return e.data
            })
        }
          , $ = HeaderScripts
          , _ = function() {
            var e, t = null === (e = window) || void 0 === e || null === (t = e.location) || void 0 === t ? void 0 : t.pathname, t = t ? t.split("/") : [];
            return null != t && t.length && 3 < t.length && !Number.isNaN(t[2]) ? t[2] : null === $.authenticatedUser || void 0 === $.authenticatedUser ? void 0 : $.authenticatedUser.id
        };
        function G() {
            return (G = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function J(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , a = !1
                  , o = void 0;
                try {
                    for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == l.return || l.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return K(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return K(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function K(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Q(e) {
            var t = e.translate
              , n = J((0,
            b.useState)(!1), 2)
              , r = n[0]
              , a = n[1]
              , o = J((0,
            b.useState)([]), 2)
              , i = o[0]
              , l = o[1]
              , n = J((0,
            b.useState)(!1), 2)
              , o = n[0]
              , u = n[1]
              , c = _()
              , n = p(c)
              , s = (0,
            b.useCallback)(function() {
                a(!0),
                F(c).then(function(e) {
                    var t;
                    null != e && e.data && (t = f,
                    u(!!e.nextPageCursor || e.data.length > t),
                    t = e.data.slice(0, t),
                    l(t))
                }).catch(console.debug).finally(function() {
                    a(!1)
                })
            }, [c]);
            return (0,
            b.useEffect)(function() {
                return s(),
                function() {}
            }, [s]),
            m().createElement(m().Fragment, null, r ? m().createElement(g.Loading, null) : null, 0 < i.length && m().createElement(m().Fragment, null, m().createElement(S, G({
                headerLabel: t(d),
                isSeeAllShown: o,
                url: n
            }, e)), m().createElement(N, G({
                badgesData: i,
                isInitializedLoading: r,
                badgeType: j
            }, e))))
        }
        Q.propTypes = {
            translate: r().func.isRequired
        };
        var V = (0,
        a.withTranslations)(Q, o);
        function W() {
            return (W = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function X(e, t) {
            return function(e) {
                if (Array.isArray(e))
                    return e
            }(e) || function(e, t) {
                if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                    return;
                var n = []
                  , r = !0
                  , a = !1
                  , o = void 0;
                try {
                    for (var i, l = e[Symbol.iterator](); !(r = (i = l.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == l.return || l.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return n
            }(e, t) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return Y(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Y(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Y(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Z(e) {
            var t = e.translate
              , n = X((0,
            b.useState)(!1), 2)
              , r = n[0]
              , a = n[1]
              , o = X((0,
            b.useState)([]), 2)
              , i = o[0]
              , l = o[1]
              , u = X((0,
            b.useState)(!1), 2)
              , n = u[0]
              , c = u[1]
              , o = X((0,
            b.useState)(!1), 2)
              , u = o[0]
              , s = o[1]
              , d = _()
              , f = (0,
            b.useCallback)(function() {
                a(!0),
                z(d).then(function(e) {
                    e && (s((null == e ? void 0 : e.length) > y),
                    l(e))
                }).catch(console.debug).finally(function() {
                    a(!1)
                })
            }, [d]);
            return (0,
            b.useEffect)(function() {
                return f(),
                function() {}
            }, [f]),
            m().createElement(m().Fragment, null, r ? m().createElement(g.Loading, null) : null, 0 < i.length && m().createElement(m().Fragment, null, m().createElement(S, W({
                headerLabel: t(h),
                seeMoreLessCallback: function() {
                    c(function(e) {
                        return !e
                    })
                },
                seeMore: n,
                isSeeMoreShown: u
            }, e)), m().createElement(N, W({
                badgesData: i,
                isInitializedLoading: r,
                isSectionHeightAuto: n,
                badgeType: M
            }, e))))
        }
        Z.propTypes = {
            translate: r().func.isRequired
        };
        var ee = (0,
        a.withTranslations)(Z, o)
          , te = "roblox-badges-container"
          , ne = "player-badges-container";
        (0,
        n.ready)(function() {
            document.getElementById(te) && (0,
            e.render)(m().createElement(ee, null), document.getElementById(te)),
            document.getElementById(ne) && (0,
            e.render)(m().createElement(V, null), document.getElementById(ne))
        })
    }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/7e1457e688449b65f8e3-profileBadges.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ProfileBadges");
