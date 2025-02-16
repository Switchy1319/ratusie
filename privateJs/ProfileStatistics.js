!function() {
    "use strict";
    var r = {
        n: function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            }
            : function() {
                return e
            }
            ;
            return r.d(t, {
                a: t
            }),
            t
        },
        d: function(e, t) {
            for (var n in t)
                r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                    enumerable: !0,
                    get: t[n]
                })
        },
        o: function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
    }
      , a = CoreUtilities
      , R = React
      , S = r.n(R)
      , e = ReactDOM
      , t = PropTypes
      , n = r.n(t)
      , i = ReactUtilities
      , l = {
        common: [],
        feature: "Feature.Profile"
    }
      , N = HeaderScripts
      , c = "Heading.Statistics"
      , q = "Label.JoinDate"
      , C = "Label.PlaceVisits";
    function o(e) {
        e = e.translate;
        return S().createElement("div", {
            className: "container-header"
        }, S().createElement("h2", null, e(c)))
    }
    o.propTypes = {
        translate: n().func.isRequired
    };
    var O = o;
    function u(e) {
        var t = e.label
          , n = e.value
          , e = e.translate;
        return S().createElement("li", {
            className: "profile-stat"
        }, S().createElement("p", {
            className: "text-label"
        }, e(t)), S().createElement("p", {
            className: "text-lead"
        }, n))
    }
    u.propTypes = {
        label: n().string.isRequired,
        value: n().string.isRequired,
        translate: n().func.isRequired
    };
    var A = u;
    function s(e) {
        var t = e.label
          , n = e.gameData
          , e = e.translate
          , r = 0;
        return n.forEach(function(e) {
            r += Number.isNaN(e.placeVisits) ? 0 : e.placeVisits
        }),
        r = a.numberFormat.getNumberFormat(r),
        S().createElement(A, {
            translate: e,
            label: t,
            value: r
        })
    }
    s.propTypes = {
        label: n().string.isRequired,
        gameData: n().arrayOf(n().shape({
            placeVisits: n().number
        })).isRequired,
        translate: n().func.isRequired
    };
    var T = s
      , f = (t = Roblox).EnvironmentUrls.gamesApi
      , d = t.EnvironmentUrls.usersApi
      , m = function(e) {
        return {
            url: "".concat(f, "/v2/users/").concat(e, "/games"),
            withCredentials: !0
        }
    }
      , p = {
        public: "Public"
    }
      , v = 50
      , b = function(e) {
        return {
            url: "".concat(d, "/v1/users/").concat(e),
            withCredentials: !0
        }
    }
      , D = function(e, t) {
        t = {
            accessFilter: p.public,
            cursor: t,
            limit: v
        };
        return a.httpService.get(m(e), t).then(function(e) {
            return e.data
        })
    }
      , P = function(e) {
        return a.httpService.get(b(e), {}).then(function(e) {
            return e.data
        })
    };
    function U(e, t) {
        return function(e) {
            if (Array.isArray(e))
                return e
        }(e) || function(e, t) {
            if ("undefined" == typeof Symbol || !(Symbol.iterator in Object(e)))
                return;
            var n = []
              , r = !0
              , a = !1
              , i = void 0;
            try {
                for (var l, c = e[Symbol.iterator](); !(r = (l = c.next()).done) && (n.push(l.value),
                !t || n.length !== t); r = !0)
                    ;
            } catch (e) {
                a = !0,
                i = e
            } finally {
                try {
                    r || null == c.return || c.return()
                } finally {
                    if (a)
                        throw i
                }
            }
            return n
        }(e, t) || function(e, t) {
            if (!e)
                return;
            if ("string" == typeof e)
                return h(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n)
                return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                return h(e, t)
        }(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }
    function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++)
            r[n] = e[n];
        return r
    }
    function g(e) {
        function t(e) {
            u(new Date(e).toLocaleDateString())
        }
        var n = e.translate
          , r = N.authenticatedUser.created
          , a = N.authenticatedUser.id
          , i = q
          , l = C
          , c = U((0,
        R.useState)([]), 2)
          , o = c[0]
          , u = c[1]
          , s = U((0,
        R.useState)([]), 2)
          , e = s[0]
          , f = s[1]
          , c = U((0,
        R.useState)(!1), 2)
          , s = c[0]
          , d = c[1]
          , c = U((0,
        R.useState)(!1), 2)
          , m = c[0]
          , p = c[1]
          , v = null === (c = window) || void 0 === c || null === (v = c.location) || void 0 === v ? void 0 : v.pathname
          , v = v ? v.split("/") : []
          , b = null != v && v.length && 3 < v.length && !Number.isNaN(v[2]) ? v[2] : a
          , h = parseInt(b, 10) === a
          , g = (0,
        R.useCallback)(function() {
            h ? t(r) : P(b).then(function(e) {
                null != e && e.created && t(null == e ? void 0 : e.created)
            }).catch(console.debug)
        }, [r, h, b])
          , y = (0,
        R.useCallback)(function(r, a) {
            D(b, a).then(function(e) {
                var t, n;
                e && (t = e.nextPageCursor,
                n = e.data,
                e = (e = r).concat(n),
                t && a !== t ? y(e, t) : (f(e),
                d(!0)))
            }, function() {
                0 < r.length && (f(r),
                d(!0))
            }).catch(console.debug)
        }, [b])
          , E = (0,
        R.useRef)()
          , w = (0,
        R.useCallback)(function() {
            var e;
            (null === (e = E.current) || void 0 === e ? void 0 : e.getBoundingClientRect().top) < window.pageYOffset + window.innerHeight && (m ? window.removeEventListener("scroll", w) : (p(!0),
            y([]),
            g()))
        }, [y, m]);
        return (0,
        R.useEffect)(function() {
            return m || (w(),
            window.addEventListener("scroll", w)),
            function() {
                window.removeEventListener("scroll", w)
            }
        }, [m, w]),
        S().createElement("div", {
            className: "section profile-statistics",
            ref: E
        }, S().createElement(O, {
            translate: n
        }), S().createElement("div", {
            className: "section-content"
        }, S().createElement("ul", {
            className: "profile-stats-container"
        }, S().createElement(A, {
            translate: n,
            label: i,
            value: o
        }), s && S().createElement(T, {
            translate: n,
            label: l,
            gameData: e
        }))))
    }
    g.propTypes = {
        translate: n().func.isRequired
    };
    var y = g;
    function E(e) {
        e = e.translate;
        return S().createElement(y, {
            translate: e
        })
    }
    E.propTypes = {
        translate: n().func.isRequired
    };
    var w = (0,
    i.withTranslations)(E, l);
    (0,
    a.ready)(function() {
        (0,
        e.render)(S().createElement(w, null), document.getElementById("profile-statistics-container"))
    })
}();
//# sourceMappingURL=https://js.rbxcdn.com/b8247bdc462a250b2715-profileStatistics.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("ProfileStatistics");
