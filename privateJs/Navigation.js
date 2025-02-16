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
                function c() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var r = typeof n;
                            if ("string" == r || "number" == r)
                                e.push(n);
                            else if (Array.isArray(n) && n.length) {
                                var a = c.apply(null, n);
                                a && e.push(a)
                            } else if ("object" == r)
                                for (var o in n)
                                    i.call(n, o) && n[o] && e.push(o)
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (c.default = c,
                e.exports = c) : void 0 === (n = function() {
                    return c
                }
                .apply(t, [])) || (e.exports = n)
            }()
        },
        635: function(e) {
            e.exports = 'module.exports = __webpack_public_path__ + "../html/navigation.html";'
        }
    }
      , r = {};
    function Kr(e) {
        if (r[e])
            return r[e].exports;
        var t = r[e] = {
            exports: {}
        };
        return n[e](t, t.exports, Kr),
        t.exports
    }
    Kr.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return Kr.d(t, {
            a: t
        }),
        t
    }
    ,
    Kr.d = function(e, t) {
        for (var n in t)
            Kr.o(t, n) && !Kr.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
    }
    ,
    Kr.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    function() {
        "use strict";
        var L = React
          , U = Kr.n(L)
          , q = CoreUtilities
          , e = ReactDOM
          , D = Roblox
          , t = Kr.n(D)
          , d = HeaderScripts
          , M = ReactUtilities
          , B = {
            arrowUp: 38,
            arrowDown: 40,
            tab: 9,
            enter: 13
        }
          , n = "container-main"
          , r = {
            name: "Roblox.Logout"
        }
          , a = 1
          , o = {
            clickMerchandise: "clickMerchandiseInLeftNav",
            goToAmazonStore: "clickContinueToAmazonStore"
        }
          , i = {
            friendshipNotifications: "FriendshipNotifications",
            requestCountChanged: "Roblox.Friends.CountChanged",
            friendshipCreated: "FriendshipCreated",
            friendshipDestroyed: "FriendshipDestroyed",
            friendshipDeclined: "FriendshipDeclined",
            friendshipRequested: "FriendshipRequested"
        }
          , c = {
            name: "Roblox.Messages.CountChanged"
        }
          , u = "?"
          , l = {
            name: "headerMenuIconClick"
        }
          , s = {
            quickLogin: "quickLogin",
            logout: "logout",
            settings: "settings"
        }
          , f = {
            common: ["CommonUI.Features", "Common.AlertsAndOptions"],
            feature: "Feature.ShopDialog"
        }
          , m = PropTypes
          , p = Kr.n(m)
          , b = Kr(779)
          , h = Kr.n(b)
          , v = ReactStyleGuide
          , y = RobloxThumbnails
          , g = RobloxBadges
          , S = D.Endpoints.getAbsoluteUrl
          , E = D.EnvironmentUrls.authApi
          , w = {
            url: S("/discovers/?Keyword="),
            label: "Label.Experience",
            pageSort: ["home", "games", "discover"],
            icon: "icon-menu-games-off"
        }
          , O = {
            url: S("/catalog?CatalogContext=1&Keyword="),
            label: "Label.AvatarShop",
            pageSort: ["catalog", "inventory", "bundles", "my/avatar", "trades"],
            icon: "icon-menu-shop"
        }
          , m = [{
            url: S("/search/users?keyword="),
            label: "Label.Players",
            pageSort: ["users"],
            icon: "icon-menu-profile"
        }, O, {
            url: S("/search/groups?keyword="),
            label: "Label.sGroups",
            pageSort: ["groups"],
            icon: "icon-menu-groups"
        }, {
            url: S("/develop/library?CatalogContext=2&Category=6&Keyword="),
            label: "Label.CreatorMarketplace",
            pageSort: ["develop"],
            icon: "icon-menu-library"
        }]
          , F = {
            creatorMarketplaceUrl: "https://create.".concat(D.EnvironmentUrls.domain, "/marketplace/models?keyword="),
            scrollListItems: {
                home: {
                    url: S("/"),
                    idSelector: "nav-home",
                    iconClass: "icon-nav-home",
                    name: "home",
                    labelTranslationKey: "Label.sHome"
                },
                profile: {
                    url: S("/users/".concat(d.authenticatedUser.id, "/profile")),
                    idSelector: "nav-profile",
                    iconClass: "icon-nav-profile",
                    name: "profile",
                    labelTranslationKey: "Label.sProfile"
                },
                messages: {
                    url: S("/my/messages/#!/inbox"),
                    urlForNotification: S("/my/messages/#!/inbox"),
                    idSelector: "nav-message",
                    iconClass: "icon-nav-message",
                    name: "messages",
                    labelTranslationKey: "Label.sMessages"
                },
                friends: {
                    url: S("/users/friends"),
                    urlForNotification: S("/users/friends#!/friend-requests"),
                    idSelector: "nav-friends",
                    iconClass: "icon-nav-friends",
                    name: "friends",
                    labelTranslationKey: "Label.sFriends"
                },
                avatar: {
                    url: S("/my/avatar"),
                    idSelector: "nav-character",
                    iconClass: "icon-nav-charactercustomizer",
                    name: "avatar",
                    labelTranslationKey: "Label.sAvatar"
                },
                inventory: {
                    url: S("/users/".concat(d.authenticatedUser.id, "/inventory")),
                    idSelector: "nav-inventory",
                    iconClass: "icon-nav-inventory",
                    name: "inventory",
                    labelTranslationKey: "Label.sInventory"
                },
                trade: {
                    url: S("/trades"),
                    urlForNotification: S("/trades"),
                    idSelector: "nav-trade",
                    iconClass: "icon-nav-trade",
                    name: "trade",
                    labelTranslationKey: "Label.sTrade"
                },
                groups: {
                    url: S("/my/groups"),
                    idSelector: "nav-group",
                    iconClass: "icon-nav-group",
                    name: "groups",
                    labelTranslationKey: "Label.sGroups"
                },
                blog: {
                    url: S("https://blog.roblox.com"),
                    idSelector: "nav-blog",
                    iconClass: "icon-nav-blog",
                    name: "blog",
                    labelTranslationKey: "Label.sBlog"
                },
                shop: {
                    isModal: !0,
                    idSelector: "nav-shop",
                    iconClass: "icon-nav-shop",
                    name: "shop",
                    labelTranslationKey: "Label.OfficialStore"
                },
                giftcards: {
                    url: S("/giftcards-us"),
                    idSelector: "nav-giftcards",
                    iconClass: "icon-nav-giftcards",
                    name: "giftcards",
                    labelTranslationKey: "Label.GiftCards"
                }
            },
            upgradeButton: {
                url: S("/premium/membership?ctx=leftnav"),
                labelTranslationKey: d.authenticatedUser.isPremiumUser ? "ActionsPremium" : "ActionsGetPremium"
            },
            sponsorEvents: {
                label: {
                    labelTranslationKey: "Label.sEvents"
                },
                events: {}
            },
            gameSearchLink: w,
            avatarSearchLink: O,
            miscSearchLink: m,
            universalSearchUrls: [{
                url: S("/search/users?keyword="),
                label: "Label.Players",
                pageSort: []
            }, {
                url: S("/discover/?Keyword="),
                label: "Label.Experience",
                pageSort: ["home", "games", "discover"]
            }, {
                url: S("/catalog/browse.aspx?CatalogContext=1&Keyword="),
                label: "Label.sCatalog",
                pageSort: ["catalog", "inventory", "bundles"]
            }, {
                url: S("/search/groups?keyword="),
                label: "Label.sGroups",
                pageSort: ["groups"]
            }, {
                url: S("/develop/library?CatalogContext=2&Category=6&Keyword="),
                label: "Label.CreatorMarketplace",
                pageSort: ["develop"]
            }],
            newUniversalSearchUrls: [w].concat(m),
            settingsUrl: {
                settings: {
                    url: S("/my/account"),
                    label: "Label.sSettings"
                },
                quickLogin: {
                    url: S("/home"),
                    label: "Label.sQuickLogin"
                },
                help: {
                    url: S("/info/help?locale="),
                    label: "Label.sHelp"
                },
                logout: {
                    url: "".concat(E, "/v2/logout"),
                    label: "Label.sLogout"
                }
            },
            buyRobuxUrl: {
                robuxBalance: {
                    url: S("/transactions"),
                    label: "Label.sRobuxMessage"
                },
                buyRobux: {
                    url: S("/upgrades/robux?ctx=navpopover"),
                    label: "Label.sBuyRobux"
                }
            },
            userDataUrl: S("/navigation/userData"),
            quickLoginUrl: S("/crossdevicelogin/ConfirmCode")
        }
          , x = D.Endpoints.getAbsoluteUrl
          , C = D.EnvironmentUrls.authApi
          , A = D.EnvironmentUrls.accountSettingsApi
          , I = D.EnvironmentUrls.websiteUrl
          , k = D.EnvironmentUrls.adsApi
          , N = D.EnvironmentUrls.economyApi
          , j = D.EnvironmentUrls.privateMessagesApi
          , R = D.EnvironmentUrls.tradesApi
          , T = D.EnvironmentUrls.friendsApi
          , b = (D.EnvironmentUrls.apiGatewayUrl,
        function() {
            return x("/account/signupredir")
        }
        )
          , O = function() {
            return I
        }
          , w = function() {
            return x("/")
        }
          , m = function(e, t) {
            return x("/".concat(e.toLowerCase(), "/").concat(t))
        }
          , E = function() {
            return x("/login")
        }
          , P = function() {
            return "".concat(A, "/v1/email")
        }
          , K = function() {
            return "".concat(C, "/v2/logout")
        }
          , Q = function() {
            return "".concat(k, "/v1/sponsored-pages")
        }
          , V = function() {
            return "".concat(j, "/v1/messages/unread/count")
        }
          , G = function(e) {
            return "".concat(N, "/v1/users/").concat(e, "/currency")
        }
          , _ = function() {
            return "".concat(R, "/v1/trades/inbound/count")
        }
          , z = function() {
            return "".concat(T, "/v1/user/friend-requests/count")
        }
          , $ = function() {
            var e = {
                url: V(),
                withCredentials: !0
            };
            return q.httpService.get(e)
        }
          , H = function(e) {
            e = {
                url: G(e),
                withCredentials: !0
            };
            return q.httpService.get(e)
        }
          , W = function() {
            var e = {
                url: _(),
                withCredentials: !0
            };
            return q.httpService.get(e)
        }
          , X = function() {
            var e = {
                url: z(),
                withCredentials: !0
            };
            return q.httpService.get(e)
        }
          , J = function() {
            var e = {
                url: P(),
                withCredentials: !0
            };
            return q.httpService.get(e)
        }
          , Y = function() {
            var e = {
                url: Q(),
                withCredentials: !0
            };
            return q.httpService.get(e).then(function(e) {
                return null == e ? void 0 : e.data
            }).catch(function(e) {
                console.error(e)
            })
        }
          , Z = function() {
            var e = {
                url: K(),
                withCredentials: !0
            };
            return q.httpService.post(e)
        }
          , ee = CoreRobloxUtilities;
        function te(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var ne = ee.dataStores.userDataStore.maxFriendRequestNotificationCount;
        function re(e) {
            var t = e.translate
              , n = e.idSelector
              , r = e.isModal
              , a = e.name
              , o = e.iconClass
              , i = e.labelTranslationKey
              , c = e.url
              , u = e.urlForNotification
              , l = e.onClickShopLink
              , s = e.friendsData
              , f = e.messagesData
              , m = e.tradeData
              , e = (te(e = {}, F.scrollListItems.friends.name, s),
            te(e, F.scrollListItems.messages.name, f),
            te(e, F.scrollListItems.trade.name, m),
            e)[a]
              , c = null != e && e.count ? u : c;
            return r ? U().createElement("li", {
                key: a
            }, U().createElement("button", {
                id: n,
                type: "button",
                onClick: l,
                className: "dynamic-overflow-container text-nav"
            }, U().createElement("div", null, U().createElement("span", {
                className: o
            })), U().createElement("span", {
                className: "font-header-2 dynamic-ellipsis-item"
            }, t(i)))) : U().createElement("li", {
                key: a
            }, U().createElement(v.Link, {
                url: c,
                id: n,
                className: "dynamic-overflow-container text-nav"
            }, U().createElement("div", null, U().createElement("span", {
                className: o
            })), U().createElement("span", {
                className: "font-header-2 dynamic-ellipsis-item"
            }, t(i)), e && 0 < e.count && U().createElement("div", {
                className: "dynamic-width-item align-right"
            }, U().createElement("span", {
                className: "notification-blue notification",
                title: q.numberFormat.getNumberFormat(e.count)
            }, function(e, t) {
                if (e === F.scrollListItems.friends.name && ne <= t)
                    return "".concat(ne, "+");
                return q.abbreviateNumber.getTruncValue(t, 1e3)
            }(a, e.count)))))
        }
        re.defaultProps = {
            idSelector: "",
            url: "",
            urlForNotification: "",
            isModal: !1,
            friendsData: {
                count: 0
            },
            messagesData: {
                count: 0
            },
            tradeData: {
                count: 0
            }
        },
        re.propTypes = {
            idSelector: p().string,
            translate: p().func.isRequired,
            isModal: p().bool,
            name: p().string.isRequired,
            iconClass: p().string.isRequired,
            labelTranslationKey: p().string.isRequired,
            url: p().string,
            urlForNotification: p().string,
            onClickShopLink: p().func.isRequired,
            friendsData: p().shape({
                count: p().number
            }),
            messagesData: p().shape({
                count: p().number
            }),
            tradeData: p().shape({
                count: p().number
            })
        };
        var ae = re
          , S = ee.eventStreamService.eventTypes
          , oe = m
          , ie = {
            name: "sponsoredEventClicked",
            type: S.pageLoad,
            context: "click"
        };
        function ce(e) {
            var t = e.translate
              , e = e.sponsoredPagesData.map(function(e) {
                var t = e.title
                  , n = e.name
                  , r = e.pageType
                  , e = e.logoImageUrl;
                return e ? U().createElement("li", {
                    key: n,
                    className: "rbx-nav-sponsor",
                    "ng-non-bindable": "true"
                }, U().createElement("a", {
                    className: "text-nav menu-item",
                    href: oe(r, n),
                    title: t,
                    onClick: function() {
                        return e = t,
                        void (ee.eventStreamService && ee.eventStreamService.sendEvent(ie, {
                            sponsoredPageName: e
                        }));
                        var e
                    }
                }, e ? U().createElement("img", {
                    src: e,
                    alt: ""
                }) : U().createElement("span", null, t))) : null
            });
            return U().createElement(U().Fragment, null, U().createElement("li", {
                className: "font-bold small text-nav"
            }, " ", t("Label.sEvents")), e)
        }
        ce.defaultProps = {
            sponsoredPagesData: []
        },
        ce.propTypes = {
            translate: p().func.isRequired,
            sponsoredPagesData: p().instanceOf(Array)
        };
        var ue = ce;
        function le(t, e) {
            var n, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)),
            r
        }
        function se(r) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? le(Object(a), !0).forEach(function(e) {
                    var t, n;
                    t = r,
                    e = a[n = e],
                    n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : le(Object(a)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return r
        }
        function fe(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return me(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return me(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function me(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function pe(e) {
            var t = d.authenticatedUser.isAuthenticated
              , n = fe((0,
            L.useState)([]), 2)
              , r = n[0]
              , a = n[1];
            return (0,
            L.useEffect)(function() {
                t && Y().then(function(e) {
                    e = (null !== (e = null == e ? void 0 : e.data) && void 0 !== e ? e : []).filter(function(e) {
                        var t, n;
                        return !(null != e && null !== (t = e.name) && void 0 !== t && t.includes("giftcards") || null != e && null !== (n = e.title) && void 0 !== n && n.includes("giftcards"))
                    });
                    a(e)
                }, function(e) {
                    console.debug(e)
                })
            }, [t]),
            U().createElement(ue, se({
                sponsoredPagesData: r
            }, e))
        }
        var S = angular
          , de = Kr.n(S);
        function be(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return n
            }(e, t) || ye(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ve(e) {
            return function(e) {
                if (Array.isArray(e))
                    return ge(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || ye(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ye(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return ge(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? ge(e, t) : void 0
            }
        }
        function ge(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function he(e) {
            var t = (r = Ce(Ne())).host
              , n = r.hostname
              , r = (a = Ce(e, !1, !0)).host
              , a = a.hostname;
            return e && r && r === t || a && a === n || !r && !a
        }
        function Se() {
            return Z().then(function() {
                window.location.href = je()
            })
        }
        var Ee = F.universalSearchUrls
          , we = F.newUniversalSearchUrls
          , Oe = F.avatarSearchLink
          , xe = q.urlService.getQueryParam
          , Ce = q.urlService.parseUrl
          , Ae = q.urlService.composeQueryString
          , Ie = b
          , ke = E
          , Ne = O
          , je = w
          , Re = a
          , Te = r
          , Pe = !d.authenticatedUser.isAuthenticated
          , S = function() {
            var r = d.authenticatedUser.created;
            return J().then(function(e) {
                var t, n = e.data.verified;
                return t = r,
                e = n,
                n = new Date,
                t = new Date(t),
                +(Re < (n - t) / 864e5 && !e)
            }).catch(function(e) {
                console.debug(e)
            })
        }
          , b = function() {
            var e = xe("returnUrl") || window.location.href
              , t = Ie();
            return he(e) ? "".concat(t, "?").concat(Ae({
                returnUrl: e
            })) : t
        }
          , E = function() {
            var e = xe("returnUrl") || window.location.href
              , t = ke();
            return he(e) ? "".concat(t, "?").concat(Ae({
                returnUrl: e
            })) : t
        }
          , O = function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            document.dispatchEvent(new CustomEvent(Te.name)),
            de().isUndefined(de().element("#chat-container").scope()) || (e = de().element("#chat-container").scope()).$digest(e.$broadcast("Roblox.Chat.destroyChatCookie")),
            null !== D.EmailVerificationService && void 0 !== D.EmailVerificationService && D.EmailVerificationService.handleUserEmailUpsellAtLogout(Se).then(function(e) {
                e && !e.emailAddress || Se()
            })
        }
          , w = Se
          , Le = function(e) {
            D.EventStream && D.EventStream.SendEventWithTarget(e, "click", {}, D.EventStream.TargetTypes.WWW)
        }
          , Ue = function(e) {
            if (Pe || !D.RealTime)
                return function() {}
                ;
            document.addEventListener(i.requestCountChanged, e);
            var t = D.RealTime.Factory.GetClient();
            return t.Subscribe(i.friendshipNotifications, e),
            function() {
                document.removeEventListener(i.requestCountChanged, e),
                t.Unsubscribe(i.friendshipNotifications, e)
            }
        }
          , qe = function(e) {
            return Pe || !D.RealTime ? function() {}
            : (document.addEventListener(c, e),
            function() {
                document.removeEventListener(c, e)
            }
            )
        }
          , De = function() {
            var e;
            return null !== (e = (null === (e = window) || void 0 === e ? void 0 : e.innerWidth) < 543) && e
        }
          , a = function() {
            var e = (null === (e = window) || void 0 === e ? void 0 : e.location).pathname
              , e = null !== (e = null == e ? void 0 : e.toLowerCase()) && void 0 !== e ? e : "";
            return !e.startsWith("/login") && !e.startsWith("/newlogin")
        }
          , Me = function() {
            var e = ve(Ee);
            return e.sort(function(e) {
                return e.pageSort.reduce(function(e, t) {
                    return e || -1 < window.location.href.indexOf(t)
                }, !1) ? -1 : 1
            }),
            e
        }
          , Be = function() {
            var e = ve(we)
              , t = e.filter(function(e) {
                return e.pageSort.some(function(e) {
                    return -1 < window.location.pathname.indexOf(e)
                })
            })
              , e = e.filter(function(e) {
                return e.pageSort.every(function(e) {
                    return -1 === window.location.pathname.indexOf(e)
                })
            });
            return [].concat(ve(t), ve(e))
        }
          , Fe = function() {
            return Oe.pageSort.some(function(e) {
                return -1 < window.location.pathname.indexOf(e)
            })
        }
          , Ke = function() {
            return document.getElementById("navigation-container") && document.getElementById("navigation-container").className
        }
          , Qe = function(e) {
            var n = {};
            return ("?" === e[0] ? e.substr(1) : e).split("&").forEach(function(e) {
                var t;
                e.includes("=") && (e = (t = be(e.split("="), 2))[0],
                t = t[1],
                n[null === (e = decodeURIComponent(e)) || void 0 === e ? void 0 : e.toLowerCase()] = decodeURIComponent(t))
            }),
            n
        };
        function Ve() {
            return (Ve = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ge(t, e) {
            var n, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)),
            r
        }
        function _e(r) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ge(Object(a), !0).forEach(function(e) {
                    var t, n;
                    t = r,
                    e = a[n = e],
                    n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Ge(Object(a)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return r
        }
        function ze(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return $e(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return $e(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function $e(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function He(e, t) {
            if (null == e)
                return {};
            var n, r = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    0 <= t.indexOf(n) || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols)
                for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++)
                    n = a[o],
                    0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }
        var We = o;
        function Xe(e) {
            var t = e.translate
              , n = He(e, ["translate"])
              , r = ze((0,
            L.useState)(!1), 2)
              , a = r[0]
              , o = r[1]
              , i = (0,
            L.useCallback)(function() {
                o(function(e) {
                    return !e
                }),
                Le(We.clickMerchandise)
            }, [])
              , c = function() {
                o(!1)
            }
              , u = Object.values(F.scrollListItems).map(function(e) {
                return U().createElement(ae, Ve({
                    key: e.name
                }, _e(_e({
                    translate: t,
                    onClickShopLink: i
                }, e), n)))
            })
              , e = U().createElement("li", {
                className: "rbx-upgrade-now"
            }, U().createElement("a", {
                href: F.upgradeButton.url,
                className: "btn-growth-md btn-secondary-md",
                id: "upgrade-now-button"
            }, t(F.upgradeButton.labelTranslationKey)))
              , r = U().createElement(U().Fragment, null, U().createElement("p", {
                className: "shop-description"
            }, t("Description.RetailWebsiteRedirect")), U().createElement("p", {
                className: "shop-warning"
            }, t("Description.PurchaseAgeWarning")))
              , c = U().createElement(v.SimpleModal, {
                title: t("Heading.LeavingRoblox"),
                body: r,
                show: a,
                actionButtonShow: !0,
                actionButtonText: t("Action.Continue"),
                neutralButtonText: t("Action.Cancel"),
                onAction: function() {
                    var e = decodeURIComponent(D.EnvironmentUrls.amazonWebStoreLink);
                    window.open(e, "_blank"),
                    Le(We.goToAmazonStore)
                },
                onNeutral: c,
                onClose: c
            });
            return U().createElement("ul", {
                className: "left-col-list"
            }, u, e, U().createElement(pe, {
                translate: t
            }), c)
        }
        Xe.defaultProps = {
            sponsoredPagesData: []
        },
        Xe.propTypes = {
            sponsoredPagesData: p().instanceOf(Array),
            translate: p().func.isRequired
        };
        var Je = Xe;
        function Ye(t, e) {
            var n, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)),
            r
        }
        function Ze(r) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? Ye(Object(a), !0).forEach(function(e) {
                    var t, n;
                    t = r,
                    e = a[n = e],
                    n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : Ye(Object(a)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return r
        }
        function et(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return tt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return tt(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function tt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function nt(e) {
            var n = d.authenticatedUser.isAuthenticated
              , t = et((0,
            L.useState)({}), 2)
              , r = t[0]
              , a = t[1]
              , o = (c = et((0,
            L.useState)({}), 2))[0]
              , i = c[1]
              , c = (t = et((0,
            L.useState)({}), 2))[0]
              , u = t[1];
            return (0,
            L.useEffect)(function() {
                var e = function() {}
                  , t = function() {};
                return n && (e = Ue(function() {
                    X().then(function(e) {
                        e = e.data;
                        a(e)
                    }, function(e) {
                        console.debug(e)
                    })
                }),
                t = qe(function() {
                    $().then(function(e) {
                        e = e.data;
                        i(e)
                    })
                }),
                X().then(function(e) {
                    e = e.data;
                    a(e)
                }, function(e) {
                    console.debug(e)
                }),
                $().then(function(e) {
                    e = e.data;
                    i(e)
                }, function(e) {
                    console.debug(e)
                }),
                W().then(function(e) {
                    e = e.data;
                    u(e)
                }, function(e) {
                    console.debug(e)
                })),
                function() {
                    e(),
                    t()
                }
            }, []),
            U().createElement(Je, Ze({
                friendsData: r,
                messagesData: o,
                tradeData: c
            }, e))
        }
        var rt = d.authenticatedUser.name
          , m = d.authenticatedUser.displayName
          , at = {
            nameForDisplay: null !== D.DisplayNames && void 0 !== D.DisplayNames && D.DisplayNames.Enabled() ? m : rt,
            nameForHeader: null !== D.DisplayNames && void 0 !== D.DisplayNames && D.DisplayNames.Enabled() ? q.concatTexts.concat(["", rt]) : rt
        };
        function ot(e, t, n, r, a, o, i) {
            try {
                var c = e[o](i)
                  , u = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(r, a)
        }
        function it(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return ct(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ct(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ct(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function ut(e, t) {
            if (null == e)
                return {};
            var n, r = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    0 <= t.indexOf(n) || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols)
                for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++)
                    n = a[o],
                    0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }
        function lt(e) {
            var r, a = e.isLeftNavOpen, t = ut(e, ["isLeftNavOpen"]), n = it((0,
            L.useState)(!1), 2), o = n[0], i = n[1], u = (0,
            L.useRef)(null);
            (0,
            L.useEffect)(function() {
                (function() {
                    var c, e = (c = regeneratorRuntime.mark(function e() {
                        var t, n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!r || !a) {
                                        e.next = 4;
                                        break
                                    }
                                    r(),
                                    e.next = 21;
                                    break;
                                case 4:
                                    return e.prev = 4,
                                    e.next = 7,
                                    (0,
                                    g.robloxBadgesReadyForRender)();
                                case 7:
                                    if (e.sent)
                                        return e.next = 11,
                                        (0,
                                        g.getVerifiedBadgeExperimentInfo)();
                                    e.next = 16;
                                    break;
                                case 11:
                                    n = e.sent,
                                    t = n.showBadges,
                                    i(t && (0,
                                    g.currentUserHasVerifiedBadge)()),
                                    n = {
                                        verifiedBadgeEnabledVariant: t.toString(),
                                        surface: "Web_Navigation_LeftNav",
                                        creatorId: (0,
                                        g.getCurrentUserId)().toString()
                                    },
                                    t && u.current && (r = (0,
                                    g.exposeBadgeOnlyIfInViewport)({
                                        exposureAttrs: n,
                                        elToWatch: u.current
                                    }));
                                case 16:
                                    e.next = 21;
                                    break;
                                case 18:
                                    e.prev = 18,
                                    e.t0 = e.catch(4),
                                    i(!1);
                                case 21:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[4, 18]])
                    }),
                    function() {
                        var e = this
                          , i = arguments;
                        return new Promise(function(t, n) {
                            var r = c.apply(e, i);
                            function a(e) {
                                ot(r, t, n, a, o, "next", e)
                            }
                            function o(e) {
                                ot(r, t, n, a, o, "throw", e)
                            }
                            a(void 0)
                        }
                        )
                    }
                    );
                    return function() {
                        return e.apply(this, arguments)
                    }
                }
                )()().catch(function() {})
            }, [a, u]);
            e = o && g.VerifiedBadgeIcon ? U().createElement("section", {
                ref: function(e) {
                    u.current = e
                }
            }, U().createElement(g.VerifiedBadgeIcon, {
                overrideImgClass: "verified-badge-icon-header",
                size: g.BadgeSizes.CAPTIONHEADER,
                titleText: g.translatedVerifiedBadgeTitleText
            })) : null,
            n = h()("rbx-left-col", {
                "nav-show": a
            }),
            o = h()("font-header-2 dynamic-ellipsis-item", {
                "verified-badge-left-nav": o
            });
            return U().createElement("div", {
                id: "navigation",
                className: n
            }, U().createElement("ul", null, U().createElement("li", {
                key: "username"
            }, U().createElement(v.Link, {
                className: "dynamic-overflow-container text-nav",
                role: "link",
                url: F.scrollListItems.profile.url
            }, U().createElement("span", {
                className: "avatar avatar-headshot-xs"
            }, U().createElement(y.Thumbnail2d, {
                containerClass: "avatar-card-image",
                targetId: d.authenticatedUser.id,
                type: y.ThumbnailTypes.avatarHeadshot,
                altName: d.authenticatedUser.name
            })), U().createElement("div", {
                className: o
            }, at.nameForDisplay), e)), U().createElement("li", {
                key: "divider",
                className: "rbx-divider"
            })), U().createElement(v.ScrollBar, {
                className: "rbx-scrollbar"
            }, U().createElement(nt, t)))
        }
        lt.propTypes = {
            isLeftNavOpen: p().bool.isRequired
        };
        var st = lt;
        function ft(t, e) {
            var n, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)),
            r
        }
        function mt(r) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? ft(Object(a), !0).forEach(function(e) {
                    var t, n;
                    t = r,
                    e = a[n = e],
                    n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : ft(Object(a)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return r
        }
        function pt(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return dt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return dt(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function dt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var bt = l;
        function vt() {
            return document.getElementById("navigation-container")
        }
        var yt, gt = (0,
        M.withTranslations)(function(e) {
            var t = d.authenticatedUser.isAuthenticated
              , n = pt((0,
            L.useState)(!1), 2)
              , r = n[0]
              , a = n[1]
              , o = (0,
            L.useCallback)(function() {
                a(!r)
            }, [r]);
            return (0,
            L.useEffect)(function() {
                return document.addEventListener(bt.name, o),
                function() {
                    document.removeEventListener(bt.name, o)
                }
            }, [o]),
            t ? U().createElement(st, mt({
                isLeftNavOpen: r
            }, e)) : null
        }, f), r = D.EnvironmentUrls.apiGatewayUrl, o = D.EnvironmentUrls.apiGatewayCdnUrl, ht = (D.EnvironmentUrls.localeApi,
        {
            experimentLayer: "Website.TopNavSearchBox",
            debounceTimeout: 100,
            debouncedSearchInputMaxLength: 35,
            expiryTimeout: 5e3,
            variationId: 1,
            trendingVariationId: 0,
            avatarAutocompleteQueryPaddingAmount: 10,
            requestSuggestionUrl: {
                url: r + "/games-autocomplete/v1/request-suggestion",
                withCredentials: !0
            },
            getSuggestionUrl: {
                url: r + "/games-autocomplete/v1/get-suggestion/",
                withCredentials: !0
            },
            avatarRequestSuggestionUrl: {
                url: r + "/autocomplete-avatar/v2/suggest",
                withCredentials: !0
            },
            avatarRequestSuggestionCdnUrl: {
                url: o + "/autocomplete-avatar/v2/suggest",
                withCredentials: !0
            },
            englishLanguageCode: "en",
            avatarAutocompleteUrlLocations: ["Catalog", "Trades", "Inventory", "Avatar", "CatalogItem"],
            avatarAutocompleteSuggestionLimit: 5,
            isSpecialTreatmentAutocompleteRestricted: function() {
                return 7 === parseInt(vt().dataset.numberOfAutocompleteSuggestions, 10) && F.miscSearchLink.reduce(function(e, t) {
                    return e.push.apply(e, t.pageSort),
                    e
                }, []).reduce(function(e, t) {
                    return e || -1 < window.location.pathname.indexOf(t)
                }, !1)
            },
            isSpecialTreatment: function() {
                var e;
                return 7 === parseInt(null === (e = vt()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
            },
            numberOfSpecialTreatmentAutocompleteSuggestions: 3,
            isAutocompleteSuggestionsIXPTestEnabled: function() {
                var e;
                return 0 < parseInt(null === (e = vt()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10)
            },
            numberOfAutocompleteSuggestions: function() {
                var e;
                return parseInt(null === (e = vt()) || void 0 === e ? void 0 : e.dataset.numberOfAutocompleteSuggestions, 10) || 0
            },
            isRedirectLibraryToCreatorMarketplaceEnabled: function() {
                var e;
                return "True" === (null === (e = vt()) || void 0 === e ? void 0 : e.dataset.isRedirectLibraryToCreatorMarketplaceEnabled)
            }
        }), St = function() {
            return (St = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var a in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                return e
            }
            ).apply(this, arguments)
        }, Et = function(e, i, c, u) {
            return new (c = c || Promise)(function(n, t) {
                function r(e) {
                    try {
                        o(u.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function a(e) {
                    try {
                        o(u.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof c ? t : new c(function(e) {
                        e(t)
                    }
                    )).then(r, a)
                }
                o((u = u.apply(e, i || [])).next())
            }
            )
        }, wt = function(n, r) {
            var a, o, i, c = {
                label: 0,
                sent: function() {
                    if (1 & i[0])
                        throw i[1];
                    return i[1]
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
                        for (; c; )
                            try {
                                if (a = 1,
                                o && (i = 2 & t[0] ? o.return : t[0] ? o.throw || ((i = o.return) && i.call(o),
                                0) : o.next) && !(i = i.call(o, t[1])).done)
                                    return i;
                                switch (o = 0,
                                i && (t = [2 & t[0], i.value]),
                                t[0]) {
                                case 0:
                                case 1:
                                    i = t;
                                    break;
                                case 4:
                                    return c.label++,
                                    {
                                        value: t[1],
                                        done: !1
                                    };
                                case 5:
                                    c.label++,
                                    o = t[1],
                                    t = [0];
                                    continue;
                                case 7:
                                    t = c.ops.pop(),
                                    c.trys.pop();
                                    continue;
                                default:
                                    if (!(i = 0 < (i = c.trys).length && i[i.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                        c = 0;
                                        continue
                                    }
                                    if (3 === t[0] && (!i || t[1] > i[0] && t[1] < i[3])) {
                                        c.label = t[1];
                                        break
                                    }
                                    if (6 === t[0] && c.label < i[1]) {
                                        c.label = i[1],
                                        i = t;
                                        break
                                    }
                                    if (i && c.label < i[2]) {
                                        c.label = i[2],
                                        c.ops.push(t);
                                        break
                                    }
                                    i[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                t = r.call(n, c)
                            } catch (e) {
                                t = [6, e],
                                o = 0
                            } finally {
                                a = i = 0
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
        }, Ot = q.httpService.createCancelToken();
        function xt(e) {
            return void 0 === (null == e ? void 0 : e.label)
        }
        function Ct(e) {
            return void 0 !== (null == e ? void 0 : e.Query)
        }
        function At(e) {
            if (Ct(e))
                return "avatar";
            switch (e.type) {
            case yt.QuerySuggestion:
                return "keyword";
            case yt.GameSuggestion:
                return "game";
            default:
                throw Error("Unrecognized autocomplete suggestion, ".concat(JSON.stringify(e)))
            }
        }
        function It(e) {
            switch (e.label) {
            case "Label.Players":
                return "defaultPlayers";
            case "Label.AvatarShop":
            case "Label.sCatalog":
                return "defaultShops";
            case "Label.sGroups":
                return "defaultGroups";
            case "Label.CreatorMarketplace":
                return "defaultLibrary";
            case "Label.Experience":
                return "defaultGames";
            default:
                throw Error("Unrecognized default suggestion, ".concat(JSON.stringify(e)))
            }
        }
        (o = yt = yt || {})[o.GameSuggestion = 0] = "GameSuggestion",
        o[o.QuerySuggestion = 1] = "QuerySuggestion",
        o[o.TrendingQuerySuggestion = 2] = "TrendingQuerySuggestion";
        var kt = function(t) {
            return Et(void 0, void 0, Promise, function() {
                return wt(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return Ot.cancel(),
                        Ot = q.httpService.createCancelToken(),
                        [4, q.httpService.get(St(St({}, ht.getSuggestionUrl), {
                            url: ht.getSuggestionUrl.url + encodeURIComponent(t.toLowerCase()),
                            cancelToken: Ot.token
                        }))];
                    case 1:
                        return [2, e.sent().data]
                    }
                })
            })
        }
          , Nt = function(n, r, a, o, i) {
            return void 0 === i && (i = !1),
            Et(void 0, void 0, Promise, function() {
                var t;
                return wt(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return null === (t = r) && (t = ht.englishLanguageCode),
                        t = {
                            prefix: n.toLowerCase(),
                            limit: a,
                            lang: t,
                            q: o
                        },
                        Ot.cancel(),
                        Ot = q.httpService.createCancelToken(),
                        i ? [4, q.httpService.get(St(St({}, ht.avatarRequestSuggestionUrl), {
                            timeout: ht.expiryTimeout,
                            cancelToken: Ot.token,
                            fullError: !0
                        }), t)] : [3, 2];
                    case 1:
                        return [2, e.sent().data];
                    case 2:
                        return [4, q.httpService.get(St(St({}, ht.avatarRequestSuggestionCdnUrl), {
                            timeout: ht.expiryTimeout,
                            cancelToken: Ot.token,
                            fullError: !0
                        }), t)];
                    case 3:
                        return [2, e.sent().data]
                    }
                })
            })
        }
          , jt = xt
          , Rt = Ct
          , Tt = At
          , Pt = It
          , Lt = function(e, t) {
            var n;
            return xt(e) && Ct(e) ? F.avatarSearchLink.url + encodeURIComponent(e.Query) : xt(e) ? F.gameSearchLink.url + encodeURIComponent(e.searchQuery) : null != t && null !== (n = t.target) && void 0 !== n && n.value ? e.url + encodeURIComponent(t.target.value) : ""
        }
          , Ut = function() {
            var e = (new D.TranslationResourceProvider).intl.locale
              , t = e.indexOf("-");
            return (e = e.substring(0, -1 !== t ? t : e.length)) !== ht.englishLanguageCode && (e += ",".concat(ht.englishLanguageCode)),
            e
        }
          , qt = function(e, t) {
            return e.map(function(e) {
                return xt(e) ? "".concat(At(e), "|").concat(e.searchQuery) : "".concat(It(e), "|").concat(t)
            }).join(",")
        }
          , Dt = ee.eventStreamService.eventTypes
          , Mt = "searchAutocomplete"
          , Bt = {
            actionTypes: {
                open: "open",
                submit: "submit",
                close: "close"
            },
            generateSessionInfo: q.uuidService.generateRandomUuid,
            searchTextTrim: function(e, t, n, r) {
                return [{
                    name: "searchTextTrim",
                    type: Dt.formInteraction,
                    context: Mt
                }, {
                    kwd: e,
                    resultingKwd: t,
                    searchType: n,
                    sessionInfo: r
                }]
            },
            searchClear: function(e, t, n, r) {
                return [{
                    name: "searchClear",
                    type: Dt.formInteraction,
                    context: Mt
                }, {
                    kwd: e,
                    searchType: t,
                    sessionInfo: n,
                    page: r
                }]
            },
            searchSuggestionClicked: function(e, t, n, r, a, o, i) {
                return [{
                    name: "searchSuggestionClicked",
                    type: Dt.formInteraction,
                    context: Mt
                }, {
                    kwd: e,
                    searchType: t,
                    suggestionPosition: n,
                    suggestionClicked: r,
                    suggestionType: a,
                    suggestions: o,
                    sessionInfo: i
                }]
            },
            searchAutocomplete: function(e, t, n, r, a, o, i, c, u, l) {
                return [{
                    name: "searchAutocomplete",
                    type: Dt.formInteraction,
                    context: Mt
                }, {
                    kwd: e,
                    previousKwd: t,
                    fromLocalCache: n,
                    suggestions: r,
                    algorithm: a,
                    latency: o,
                    timeoutDelayMs: i,
                    sessionInfo: c,
                    page: u,
                    isPersonalizedBasedOnPreviousQuery: l
                }]
            },
            search: function(e, t, n) {
                return [{
                    name: "search",
                    type: Dt.formInteraction,
                    context: Mt
                }, {
                    kwd: e,
                    actionType: t,
                    sessionInfo: n
                }]
            },
            catalogSearch: function(e, t) {
                return [{
                    name: "catalogSearch",
                    type: Dt.formInteraction,
                    context: Mt
                }, {
                    autocompleteFlag: e,
                    previousPage: t
                }]
            }
        };
        function Ft(e) {
            return function(e) {
                if (Array.isArray(e))
                    return Vt(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || Qt(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Kt(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return n
            }(e, t) || Qt(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Qt(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return Vt(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Vt(e, t) : void 0
            }
        }
        function Vt(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function Gt(e) {
            var a, o = e.translate, i = e.searchInput, c = e.indexOfSelectedOption, u = e.autocompleteSessionInfo, l = e.resetAutocompleteSessionInfo, s = Me();
            return U().createElement(U().Fragment, null, Object.entries(s).map(function(e) {
                var t = Kt(e, 2)
                  , n = t[0]
                  , r = t[1]
                  , e = r.url
                  , t = r.label;
                "Label.sCatalog" === (a = t) && (a = "Label.AvatarShop");
                t = h()("navbar-search-option rbx-clickable-li", parseInt(n, 10) === c ? " selected" : "");
                return U().createElement("li", {
                    key: n,
                    className: t
                }, U().createElement(v.Link, {
                    className: "navbar-search-anchor",
                    url: e + i,
                    onClick: function() {
                        ee.eventStreamService.sendEvent.apply(ee.eventStreamService, Ft(Bt.searchSuggestionClicked(i, void 0, n, i, Pt(r), qt(s, i), u))),
                        l()
                    }
                }, o("Label.sSearchPhrase", {
                    phrase: i,
                    location: o(a)
                })))
            }))
        }
        Gt.propTypes = {
            translate: p().func.isRequired,
            searchInput: p().string.isRequired,
            indexOfSelectedOption: p().number.isRequired,
            autocompleteSessionInfo: p().string.isRequired,
            resetAutocompleteSessionInfo: p().func.isRequired
        };
        var _t = Gt;
        function zt(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return $t(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return $t(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function $t(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var Ht = F.gameSearchLink
          , Wt = F.avatarSearchLink
          , Xt = F.creatorMarketplaceUrl;
        function Jt(e) {
            var t = e.translate
              , n = e.selected
              , r = e.suggestion
              , a = e.onClick
              , o = h()("navbar-search-option rbx-clickable-li", {
                "new-selected": n
            })
              , i = r.type
              , c = r.universeId
              , e = r.searchQuery
              , n = zt((0,
            L.useState)(!1), 2)
              , r = n[0]
              , u = n[1];
            return i === yt.GameSuggestion ? U().createElement("li", {
                className: o
            }, U().createElement(v.Link, {
                className: "new-navbar-search-anchor",
                url: Ht.url + encodeURIComponent(e),
                onClick: a
            }, U().createElement("span", {
                className: h()(Ht.icon, "navbar-list-option-icon")
            }), U().createElement("span", {
                className: "navbar-list-option-text"
            }, e), U().createElement("span", {
                className: "navbar-list-option-suffix"
            }, t("Label.sSearchPhraseV2", {
                location: t(Ht.label)
            })), U().createElement("span", {
                className: h()("navbar-list-option-thumbnail", {
                    "navbar-list-option-thumbnail-visible": r
                })
            }, U().createElement("span", {
                className: "background-icon"
            }), U().createElement(y.Thumbnail2d, {
                type: y.ThumbnailTypes.gameIcon,
                size: y.DefaultThumbnailSize,
                targetId: c,
                containerClass: "thumbnail-icon",
                format: y.ThumbnailFormat.jpeg,
                onLoad: function() {
                    u(!0)
                }
            })))) : U().createElement("li", {
                className: o
            }, U().createElement(v.Link, {
                className: "new-navbar-search-anchor",
                url: Ht.url + encodeURIComponent(e),
                onClick: a
            }, U().createElement("span", {
                className: h()(Ht.icon, "navbar-list-option-icon")
            }), U().createElement("span", {
                className: "navbar-list-option-text"
            }, e), U().createElement("span", {
                className: "navbar-list-option-suffix"
            }, t("Label.sSearchPhraseV2", {
                location: t(Ht.label)
            }))))
        }
        function Yt(e) {
            var t = e.translate
              , n = e.selected
              , r = e.suggestion
              , e = e.onClick
              , n = h()("navbar-search-option rbx-clickable-li", {
                "new-selected": n
            })
              , r = r.Query;
            return U().createElement("li", {
                className: n
            }, U().createElement(v.Link, {
                className: "new-navbar-search-anchor",
                url: Wt.url + encodeURIComponent(r),
                onClick: e
            }, U().createElement("span", {
                className: h()(Wt.icon, "navbar-list-option-icon")
            }), U().createElement("span", {
                className: "navbar-list-option-text"
            }, r), U().createElement("span", {
                className: "navbar-list-option-suffix"
            }, t("Label.sSearchPhraseV2", {
                location: t(Wt.label)
            }))))
        }
        function Zt(e) {
            var t = e.translate
              , n = e.selected
              , r = e.searchInput
              , a = e.suggestion
              , o = e.onClick
              , i = a.url
              , e = a.label
              , a = a.icon
              , i = (0,
            ht.isRedirectLibraryToCreatorMarketplaceEnabled)() && "Label.CreatorMarketplace" === e ? Xt : i
              , n = h()("navbar-search-option rbx-clickable-li", {
                "new-selected": n
            });
            return U().createElement("li", {
                className: n
            }, U().createElement(v.Link, {
                className: "new-navbar-search-anchor",
                url: i + encodeURIComponent(r),
                onClick: o
            }, U().createElement("span", {
                className: h()(a, "navbar-list-option-icon")
            }), U().createElement("span", {
                className: "navbar-list-option-text"
            }, r.toLowerCase()), U().createElement("span", {
                className: "navbar-list-option-suffix"
            }, t("Label.sSearchPhraseV2", {
                location: t(e)
            }))))
        }
        function en(e) {
            return function(e) {
                if (Array.isArray(e))
                    return tn(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return tn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return tn(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function tn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function nn(e) {
            function r(t, n) {
                return function() {
                    var e = c[n];
                    ee.eventStreamService.sendEvent.apply(ee.eventStreamService, en(Bt.searchSuggestionClicked(o, void 0, n, jt(e) ? e.searchQuery : o, t, qt(c, o), u))),
                    l();
                    e = t.includes("default") ? 0 : 1;
                    ee.eventStreamService.sendEvent.apply(ee.eventStreamService, en(Bt.catalogSearch(e, q.pageName.PageNameProvider.getInternalPageName())))
                }
            }
            var a = e.translate
              , o = e.searchInput
              , i = e.indexOfSelectedOption
              , c = e.searchSuggestions
              , u = e.autocompleteSessionInfo
              , l = e.resetAutocompleteSessionInfo;
            return c.map(function(e, t) {
                var n = parseInt(t, 10) === i;
                return jt(e) && Rt(e) ? U().createElement(Yt, {
                    key: e.Query,
                    translate: a,
                    selected: n,
                    suggestion: e,
                    onClick: r(Tt(e), t)
                }) : jt(e) ? U().createElement(Jt, {
                    key: e.searchQuery,
                    translate: a,
                    selected: n,
                    suggestion: e,
                    onClick: r(Tt(e), t)
                }) : U().createElement(Zt, {
                    key: e.url,
                    translate: a,
                    selected: n,
                    suggestion: e,
                    searchInput: o,
                    onClick: r(Pt(e), t)
                })
            })
        }
        Jt.propTypes = {
            translate: p().func.isRequired,
            selected: p().bool.isRequired,
            suggestion: p().shape({
                type: p().number.isRequired,
                score: p().number.isRequired,
                universeId: p().number,
                canonicalTitle: p().string,
                thumbnailUrl: p().string,
                searchQuery: p().string.isRequired,
                trendingSearchStartDateTime: p().string
            }).isRequired,
            onClick: p().func.isRequired
        },
        Yt.propTypes = {
            translate: p().func.isRequired,
            selected: p().bool.isRequired,
            suggestion: p().shape({
                Query: p().string
            }).isRequired,
            onClick: p().func.isRequired
        },
        Zt.propTypes = {
            translate: p().func.isRequired,
            selected: p().bool.isRequired,
            searchInput: p().string.isRequired,
            suggestion: p().shape({
                url: p().string.isRequired,
                label: p().string.isRequired,
                pageSort: p().arrayOf(p().string).isRequired,
                icon: p().string.isRequired
            }).isRequired,
            onClick: p().func.isRequired
        },
        nn.propTypes = {
            translate: p().func.isRequired,
            searchInput: p().string.isRequired,
            indexOfSelectedOption: p().number.isRequired,
            searchSuggestions: p().arrayOf(p().oneOfType([p().shape({
                type: p().number.isRequired,
                score: p().number.isRequired,
                universeId: p().number.isRequired,
                canonicalTitle: p().string,
                thumbnailUrl: p().string,
                searchQuery: p().string.isRequired,
                trendingSearchStartDateTime: p().string
            }), p().shape({
                url: p().string.isRequired,
                label: p().string.isRequired,
                pageSort: p().arrayOf(p().string).isRequired,
                icon: p().string.isRequired
            }), p().shape({
                Query: p().string.isRequired,
                Score: p().number.isRequired
            })])).isRequired,
            autocompleteSessionInfo: p().string.isRequired,
            resetAutocompleteSessionInfo: p().func.isRequired
        };
        var rn = nn;
        function an(e) {
            return function(e) {
                if (Array.isArray(e))
                    return on(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || function(e, t) {
                if (!e)
                    return;
                if ("string" == typeof e)
                    return on(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return on(e, t)
            }(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function on(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function cn(e) {
            var t = e.translate
              , n = e.searchInput
              , r = e.isMenuOpen
              , a = e.openMenu
              , o = e.closeMenu
              , i = e.handleSearch
              , c = e.setIsMenuHover
              , u = e.indexOfSelectedOption
              , l = e.onSubmit
              , s = e.onKeyDown
              , f = e.onKeyUp
              , m = e.isUniverseSearchShown
              , p = e.searchSuggestions
              , d = e.autocompleteSessionInfo
              , b = e.resetAutocompleteSessionInfo
              , v = e.isAvatarAutocompleteEnabled
              , y = (0,
            L.createRef)()
              , g = (0,
            L.createRef)()
              , e = function() {
                var e;
                ee.eventStreamService.sendEvent.apply(ee.eventStreamService, an(Bt.searchClear(n, void 0, d, null === q.pageName || void 0 === q.pageName || null === (e = q.pageName.PageNameProvider) || void 0 === e ? void 0 : e.getInternalPageName()))),
                null == y || null !== (e = y.current) && void 0 !== e && e.focus(),
                i({
                    target: {
                        value: ""
                    }
                })
            }
              , m = h()("navbar-left navbar-search col-xs-5 col-sm-6 col-md-2 col-lg-3", {
                "navbar-search-open": r,
                shown: m
            })
              , v = ht.isAutocompleteSuggestionsIXPTestEnabled() || v;
            return (0,
            M.useOnClickOutside)([y, g], o),
            U().createElement("div", {
                "data-testid": "navigation-search-input",
                className: m,
                role: "search"
            }, U().createElement("div", {
                className: "input-group"
            }, U().createElement("form", {
                onSubmit: l
            }, v ? U().createElement("div", {
                className: "form-has-feedback"
            }, U().createElement("input", {
                ref: y,
                id: "navbar-search-input",
                "data-testid": "navigation-search-input-field",
                className: "form-control input-field new-input-field",
                value: n,
                onChange: i,
                placeholder: t("Label.sSearch"),
                maxLength: "120",
                onFocus: a,
                onKeyDown: s,
                onKeyUp: f,
                autoComplete: "off",
                autoCorrect: "off",
                autoCapitalize: "off",
                spellCheck: "false"
            }), 0 < n.length && U().createElement("span", {
                "data-testid": "navigation-search-input-clear-button",
                tabIndex: 0,
                role: "button",
                "aria-label": "Clear Search",
                onClick: e,
                onKeyDown: e,
                className: "clear-search icon-actions-clear-sm"
            }, U().createElement("span", null))) : U().createElement("input", {
                ref: y,
                id: "navbar-search-input",
                "data-testid": "navigation-search-input-field",
                className: "form-control input-field",
                type: "text",
                value: n,
                onChange: i,
                placeholder: t("Label.sSearch"),
                maxLength: "120",
                onFocus: a,
                onKeyDown: s,
                onKeyUp: f,
                autoComplete: "off"
            })), U().createElement("div", {
                className: "input-group-btn"
            }, U().createElement("button", {
                "data-testid": "navigation-search-input-search-button",
                className: "input-addon-btn",
                type: "submit"
            }, U().createElement("span", {
                className: "icon-common-search-sm"
            })))), U().createElement("ul", {
                ref: g,
                className: h()("dropdown-menu", {
                    "new-dropdown-menu": v
                }),
                role: "menu",
                onMouseEnter: function() {
                    c(!0)
                },
                onMouseLeave: function() {
                    c(!1)
                }
            }, v ? U().createElement(rn, {
                translate: t,
                searchInput: n,
                indexOfSelectedOption: u,
                searchSuggestions: p,
                autocompleteSessionInfo: d,
                resetAutocompleteSessionInfo: b
            }) : U().createElement(_t, {
                translate: t,
                searchInput: n,
                indexOfSelectedOption: u,
                autocompleteSessionInfo: d,
                resetAutocompleteSessionInfo: b
            })))
        }
        cn.defaultProps = {
            isUniverseSearchShown: !0,
            isAvatarAutocompleteEnabled: !1
        },
        cn.propTypes = {
            translate: p().func.isRequired,
            searchInput: p().string.isRequired,
            isMenuOpen: p().bool.isRequired,
            openMenu: p().func.isRequired,
            closeMenu: p().func.isRequired,
            handleSearch: p().func.isRequired,
            setIsMenuHover: p().func.isRequired,
            indexOfSelectedOption: p().number.isRequired,
            onSubmit: p().func.isRequired,
            onKeyDown: p().func.isRequired,
            onKeyUp: p().func.isRequired,
            isUniverseSearchShown: p().bool,
            isAvatarAutocompleteEnabled: p().bool,
            searchSuggestions: p().arrayOf(p().oneOfType([p().shape({
                type: p().number.isRequired,
                score: p().number.isRequired,
                universeId: p().number.isRequired,
                canonicalTitle: p().string,
                thumbnailUrl: p().string,
                searchQuery: p().string.isRequired,
                trendingSearchStartDateTime: p().string
            }), p().shape({
                url: p().string.isRequired,
                label: p().string.isRequired,
                pageSort: p().arrayOf(p().string).isRequired,
                icon: p().string
            }), p().shape({
                query: p().string.isRequired,
                score: p().number.isRequired
            })])).isRequired,
            autocompleteSessionInfo: p().string.isRequired,
            resetAutocompleteSessionInfo: p().func.isRequired
        };
        var un = cn;
        function ln(e, t, n, r, a, o, i) {
            try {
                var c = e[o](i)
                  , u = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(r, a)
        }
        function sn(e) {
            return function(e) {
                if (Array.isArray(e))
                    return pn(e)
            }(e) || function(e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(e))
                    return Array.from(e)
            }(e) || mn(e) || function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function fn(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
                    } finally {
                        if (a)
                            throw o
                    }
                }
                return n
            }(e, t) || mn(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function mn(e, t) {
            if (e) {
                if ("string" == typeof e)
                    return pn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Object" === n && e.constructor && (n = e.constructor.name),
                "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pn(e, t) : void 0
            }
        }
        function pn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function dn(e) {
            var t = e.translate
              , n = e.isUniverseSearchShown
              , r = fn((0,
            L.useState)(Qe(window.location.search).keyword || ""), 2)
              , o = r[0]
              , a = r[1]
              , i = (0,
            M.useDebounce)(o, ht.debounceTimeout)
              , u = (0,
            M.usePrevious)(i)
              , e = fn((0,
            L.useState)(null), 2)
              , c = e[0]
              , l = e[1]
              , r = fn((0,
            L.useState)(Bt.generateSessionInfo()), 2)
              , s = r[0]
              , f = r[1]
              , e = fn((0,
            L.useState)(!1), 2)
              , m = e[0]
              , p = e[1]
              , r = fn((0,
            L.useState)(!0), 2)
              , d = r[0]
              , b = r[1]
              , e = fn((0,
            L.useState)(!1), 2)
              , v = e[0]
              , r = e[1]
              , e = fn((0,
            L.useState)(0), 2)
              , y = e[0]
              , g = e[1]
              , e = fn((0,
            L.useState)(!1), 2)
              , h = e[0]
              , S = e[1]
              , e = fn((0,
            L.useState)(!1), 2)
              , E = e[0]
              , w = e[1]
              , O = B
              , e = fn((0,
            L.useState)((ht.isAutocompleteSuggestionsIXPTestEnabled() ? Be : Me)()), 2)
              , x = e[0]
              , C = e[1]
              , A = x.findIndex(function(e) {
                return e.label === F.gameSearchLink.label
            })
              , I = Be().findIndex(function(e) {
                return e.label === F.avatarSearchLink.label
            })
              , k = Ut();
            (0,
            L.useEffect)(function() {
                D.ExperimentationService && D.ExperimentationService.getAllValuesForLayer(ht.experimentLayer).then(function(e) {
                    e.ixpDisableGamesAutocomplete && S(!0)
                })
            }, []);
            function N(e) {
                if (e) {
                    if (j) {
                        var t = -1 === c.findIndex(function(e) {
                            return e.searchQuery === i.toLowerCase() && Rt(e)
                        })
                          , n = e.filter(function(e) {
                            return e.searchQuery !== i.toLowerCase() || Rt(e)
                        });
                        return [].concat(sn(x.slice(0, t ? I + 1 : I)), sn(n), sn(x.slice(I + 1)))
                    }
                    if (ht.isSpecialTreatmentAutocompleteRestricted())
                        return x;
                    n = -1 === e.findIndex(function(e) {
                        return e.searchQuery === i.toLowerCase() && e.type === yt.GameSuggestion
                    }),
                    e = e.filter(function(e) {
                        return e.searchQuery !== i.toLowerCase() || e.type === yt.GameSuggestion
                    }).slice(0, ht.isSpecialTreatment() ? ht.numberOfSpecialTreatmentAutocompleteSuggestions : ht.numberOfAutocompleteSuggestions());
                    return [].concat(sn(x.slice(0, n ? A + 1 : A)), sn(e), sn(x.slice(A + 1)))
                }
                return x
            }
            var j = Fe()
              , R = (0,
            L.useMemo)(function() {
                return N(c)
            }, [c, x])
              , T = R.length;
            (0,
            L.useEffect)(function() {
                d || ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.search(o, Bt.actionTypes.submit, s))),
                b(!1);
                var e = function() {
                    var c, e = (c = regeneratorRuntime.mark(function e() {
                        var t, n, r, a, o;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if (!("" !== i && i.length <= ht.debouncedSearchInputMaxLength)) {
                                        e.next = 34;
                                        break
                                    }
                                    if (l(null),
                                    t = Date.now(),
                                    j)
                                        return e.prev = 4,
                                        n = Date.now(),
                                        e.next = 8,
                                        Nt(i, k, ht.avatarAutocompleteQueryPaddingAmount, u, E);
                                    e.next = 20;
                                    break;
                                case 8:
                                    a = e.sent,
                                    o = function(e, t) {
                                        var n = 0
                                          , r = [];
                                        return e.forEach(function(e) {
                                            n < ht.avatarAutocompleteSuggestionLimit && e.Query !== t && (r.push(e),
                                            n += 1)
                                        }),
                                        r
                                    }(a.Data, i),
                                    ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.searchAutocomplete(i, u, !1, o, a.Args.Algo, n - t, ht.debounceTimeout, "", q.pageName.PageNameProvider.getInternalPageName(), "" !== u))),
                                    l(o),
                                    e.next = 18;
                                    break;
                                case 14:
                                    e.prev = 14,
                                    e.t0 = e.catch(4),
                                    q.httpService.isCancelled(e.t0) || l([]),
                                    w(!0);
                                case 18:
                                    e.next = 34;
                                    break;
                                case 20:
                                    if (ht.isAutocompleteSuggestionsIXPTestEnabled() && !h)
                                        return e.prev = 21,
                                        e.next = 24,
                                        kt(i);
                                    e.next = 34;
                                    break;
                                case 24:
                                    r = e.sent,
                                    a = Date.now(),
                                    o = N(r.entries),
                                    ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.searchAutocomplete(i, u, !1, qt(o, i), r.algorithmName, a - t, ht.debounceTimeout, s, q.pageName.PageNameProvider.getInternalPageName(), !1))),
                                    l(r.entries),
                                    e.next = 34;
                                    break;
                                case 31:
                                    e.prev = 31,
                                    e.t1 = e.catch(21),
                                    q.httpService.isCancelled(e.t1) || l([]);
                                case 34:
                                case "end":
                                    return e.stop()
                                }
                        }, e, null, [[4, 14], [21, 31]])
                    }),
                    function() {
                        var e = this
                          , i = arguments;
                        return new Promise(function(t, n) {
                            var r = c.apply(e, i);
                            function a(e) {
                                ln(r, t, n, a, o, "next", e)
                            }
                            function o(e) {
                                ln(r, t, n, a, o, "throw", e)
                            }
                            a(void 0)
                        }
                        )
                    }
                    );
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                j && C(Be()),
                e()
            }, [i]);
            function P() {
                f(Bt.generateSessionInfo())
            }
            return U().createElement(un, {
                searchInput: o,
                handleSearch: function(e) {
                    e = e.target.value;
                    e.length < o.length && ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.searchTextTrim(o, e, void 0, s))),
                    0 === e.length && P(),
                    g(0),
                    p(0 < e.length),
                    a(e)
                },
                openMenu: function() {
                    var e = Bt.generateSessionInfo();
                    ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.search(o, Bt.actionTypes.open, e))),
                    f(e),
                    0 === o.length || v || p(!0)
                },
                closeMenu: function() {
                    m && (ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.search(o, Bt.actionTypes.close, s))),
                    p(!1))
                },
                setIsMenuHover: r,
                isMenuOpen: m,
                indexOfSelectedOption: y,
                onSubmit: function(e) {
                    e.preventDefault(),
                    e.stopPropagation()
                },
                onKeyDown: function(e) {
                    var t = y;
                    !m || e.keyCode !== O.arrowUp && e.keyCode !== O.arrowDown && e.keyCode !== O.tab || (e.stopPropagation(),
                    e.preventDefault(),
                    e.keyCode === O.arrowUp ? --t : t += 1,
                    (t %= T) < 0 && (t = T + t),
                    g(t))
                },
                onKeyUp: function(e) {
                    var t, n, r, a;
                    e.keyCode === O.enter && (e.stopPropagation(),
                    e.preventDefault(),
                    t = R[y],
                    jt(t) ? (ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.searchSuggestionClicked(i, void 0, y, t.searchQuery, Tt(t), qt(R, o), s))),
                    ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.catalogSearch(1, q.pageName.PageNameProvider.getInternalPageName())))) : (ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.searchSuggestionClicked(i, void 0, y, i, Pt(t), qt(R, o), s))),
                    ee.eventStreamService.sendEvent.apply(ee.eventStreamService, sn(Bt.catalogSearch(0, q.pageName.PageNameProvider.getInternalPageName())))),
                    P(),
                    (a = Lt(t, e)) && (n = ht.isRedirectLibraryToCreatorMarketplaceEnabled,
                    a = a,
                    "Label.CreatorMarketplace" === t.label && n() && (a = F.creatorMarketplaceUrl,
                    null != e && null !== (r = e.target) && void 0 !== r && r.value && (a += encodeURIComponent(e.target.value))),
                    window.location = a))
                },
                isUniverseSearchShown: n,
                translate: t,
                searchSuggestions: R,
                autocompleteSessionInfo: s,
                resetAutocompleteSessionInfo: P,
                isAvatarAutocompleteEnabled: j
            })
        }
        dn.defaultProps = {
            isUniverseSearchShown: !0
        },
        dn.propTypes = {
            translate: p().func.isRequired,
            isUniverseSearchShown: p().bool
        };
        var bn = (0,
        M.withTranslations)(dn, f);
        function vn(e) {
            return (vn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function yn(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function gn(e, t) {
            return (gn = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function hn(n) {
            var r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t = Sn(n);
                return e = r ? (e = Sn(this).constructor,
                Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
                t = this,
                !(e = e) || "object" !== vn(e) && "function" != typeof e ? function(e) {
                    if (void 0 !== e)
                        return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }
        }
        function Sn(e) {
            return (Sn = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var En = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && gn(e, t)
            }(a, U().Component);
            var e, t, n, r = hn(a);
            function a() {
                return function(e) {
                    if (!(e instanceof a))
                        throw new TypeError("Cannot call a class as a function")
                }(this),
                r.apply(this, arguments)
            }
            return e = a,
            (t = [{
                key: "componentDidMount",
                value: function() {
                    try {
                        de().module("notificationStreamIcon"),
                        de().bootstrap(this.container, ["notificationStreamIcon"])
                    } catch (e) {
                        console.log(e)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var t = this;
                    return U().createElement("span", {
                        ref: function(e) {
                            t.container = e
                        },
                        className: "nav-robux-icon rbx-menu-item"
                    }, U().createElement("span", {
                        id: "notification-stream-icon-container",
                        "notification-stream-indicator": "true"
                    }))
                }
            }]) && yn(e.prototype, t),
            n && yn(e, n),
            a
        }();
        function wn(e) {
            return (wn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
            }
            : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            )(e)
        }
        function On(e, t) {
            for (var n = 0; n < t.length; n++) {
                var r = t[n];
                r.enumerable = r.enumerable || !1,
                r.configurable = !0,
                "value"in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r)
            }
        }
        function xn(e, t) {
            return (xn = Object.setPrototypeOf || function(e, t) {
                return e.__proto__ = t,
                e
            }
            )(e, t)
        }
        function Cn(n) {
            var r = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function() {})),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var e, t = An(n);
                return e = r ? (e = An(this).constructor,
                Reflect.construct(t, arguments, e)) : t.apply(this, arguments),
                t = this,
                !(e = e) || "object" !== wn(e) && "function" != typeof e ? function(e) {
                    if (void 0 !== e)
                        return e;
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                }(t) : e
            }
        }
        function An(e) {
            return (An = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                return e.__proto__ || Object.getPrototypeOf(e)
            }
            )(e)
        }
        var In = function() {
            !function(e, t) {
                if ("function" != typeof t && null !== t)
                    throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && xn(e, t)
            }(a, U().Component);
            var e, t, n, r = Cn(a);
            function a() {
                return function(e) {
                    if (!(e instanceof a))
                        throw new TypeError("Cannot call a class as a function")
                }(this),
                r.apply(this, arguments)
            }
            return e = a,
            (t = [{
                key: "componentDidMount",
                value: function() {
                    try {
                        de().module("notificationStream"),
                        de().bootstrap(this.container, ["notificationStream"])
                    } catch (e) {
                        console.log(e)
                    }
                }
            }, {
                key: "render",
                value: function() {
                    var t = this
                      , e = Ke()
                      , e = h()("notification-stream-base", e);
                    return U().createElement("div", {
                        ref: function(e) {
                            t.container = e
                        },
                        className: e,
                        "notification-stream-base-view": "true"
                    })
                }
            }]) && On(e.prototype, t),
            n && On(e, n),
            a
        }()
          , kn = {
            name: "nsCloseContent",
            context: "click",
            additionalProperties: {}
        };
        function Nn() {
            var e = (0,
            L.useRef)();
            return U().createElement("li", {
                id: "navbar-stream",
                ref: e,
                className: "navbar-icon-item navbar-stream notification-margins"
            }, U().createElement(v.Popover, {
                id: "notification-stream-popover",
                trigger: "click",
                placement: "bottom",
                closeOnClick: !1,
                button: U().createElement("button", {
                    type: "button",
                    className: "btn-uiblox-common-common-notification-bell-md"
                }, U().createElement(En, null)),
                container: e.current,
                onExit: function() {
                    window.dispatchEvent(new Event("Roblox.NotificationStream.StreamClosed")),
                    ee.eventStreamService.sendEventWithTarget(kn.name, kn.context, kn.additionalProperties)
                },
                role: "menu"
            }, U().createElement(In, null)))
        }
        Nn.propTypes = {};
        var jn = Nn;
        function Rn(e) {
            var t = e.accountNotificationCount
              , e = h()("notification-red notification nav-setting-highlight", {
                hidden: 0 === t
            });
            return U().createElement("span", {
                id: "settings-icon",
                className: "nav-settings-icon rbx-menu-item"
            }, U().createElement("span", {
                className: "icon-nav-settings roblox-popover-close",
                id: "nav-settings"
            }), U().createElement("span", {
                className: e
            }, t))
        }
        Rn.defaultProps = {
            accountNotificationCount: 0
        },
        Rn.propTypes = {
            accountNotificationCount: p().number
        };
        var Tn = Rn;
        function Pn(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return Ln(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Ln(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ln(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var Un = F.settingsUrl
          , qn = F.quickLoginUrl
          , Dn = O
          , Mn = s.quickLogin
          , Bn = s.settings
          , Fn = s.logout;
        function Kn(e) {
            var r = e.translate
              , a = e.accountNotificationCount
              , o = e.isCrossDeviceLoginCodeValidationDisplayed
              , i = h()("notification-blue notification nav-setting-highlight", {
                hidden: 0 === a
            });
            return Object.entries(Un).map(function(e) {
                var t = Pn(e, 2)
                  , n = t[0]
                  , e = t[1]
                  , t = e.url
                  , e = e.label;
                return U().createElement("li", null, n === Fn && U().createElement(v.Link, {
                    className: "rbx-menu-item logout-menu-item",
                    key: n,
                    onClick: Dn,
                    url: "#"
                }, r(e)), n === Mn && o && U().createElement(v.Link, {
                    className: "rbx-menu-item",
                    key: n,
                    url: qn
                }, r(e)), n !== Fn && n !== Mn && U().createElement(v.Link, {
                    cssClasses: "rbx-menu-item",
                    key: n,
                    url: t
                }, r(e), n === Bn && U().createElement("span", {
                    className: i
                }, a)))
            })
        }
        Kn.defaultProps = {
            accountNotificationCount: 0,
            isCrossDeviceLoginCodeValidationDisplayed: !1
        },
        Kn.propTypes = {
            translate: p().func.isRequired,
            accountNotificationCount: p().number,
            isCrossDeviceLoginCodeValidationDisplayed: p().bool
        };
        var Qn = Kn;
        function Vn(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return Gn(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Gn(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Gn(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function _n(e) {
            var t = e.translate
              , n = e.accountNotificationCount
              , r = Vn((0,
            L.useState)(!1), 2)
              , e = r[0]
              , a = r[1]
              , r = (0,
            L.useRef)();
            return (0,
            L.useEffect)(function() {
                a(!0)
            }, []),
            U().createElement("li", {
                id: "navbar-settings",
                ref: r,
                className: "navbar-icon-item"
            }, U().createElement(v.Popover, {
                id: "settings-popover",
                trigger: "click",
                placement: "bottom",
                className: Ke(),
                containerPadding: 20,
                button: U().createElement("button", {
                    type: "button",
                    className: "btn-navigation-nav-settings-md"
                }, U().createElement(Tn, {
                    accountNotificationCount: n
                })),
                container: r.current,
                role: "menu"
            }, U().createElement("div", {
                className: Ke()
            }, U().createElement("ul", {
                id: "settings-popover-menu",
                className: "dropdown-menu"
            }, U().createElement(Qn, {
                isCrossDeviceLoginCodeValidationDisplayed: e,
                translate: t,
                accountNotificationCount: n
            })))))
        }
        _n.defaultProps = {
            accountNotificationCount: 0
        },
        _n.propTypes = {
            translate: p().func.isRequired,
            accountNotificationCount: p().number
        };
        var zn = _n;
        function $n(e) {
            var t = e.robuxAmount
              , n = e.isGetCurrencyCallDone
              , e = e.robuxError
              , t = e ? u : q.abbreviateNumber.getTruncValue(t)
              , t = U().createElement(L.Fragment, null, U().createElement("span", {
                className: "icon-robux-28x28 roblox-popover-close",
                id: "nav-robux"
            }), U().createElement("span", {
                className: "rbx-text-navbar-right text-header",
                id: "nav-robux-amount"
            }, n && t));
            return U().createElement("span", {
                id: "nav-robux-icon",
                className: "nav-robux-icon rbx-menu-item"
            }, e ? U().createElement(v.Tooltip, {
                id: "current-error",
                content: e,
                placement: "bottom",
                containerClassName: "nav-buy-robux-icon-tooltip-container"
            }, t) : t)
        }
        $n.defaultProps = {
            robuxAmount: 0,
            robuxError: ""
        },
        $n.propTypes = {
            robuxAmount: p().number,
            robuxError: p().string,
            isGetCurrencyCallDone: p().bool.isRequired
        };
        var Hn = $n
          , Wn = F.buyRobuxUrl;
        function Xn(e) {
            var t = e.translate
              , n = e.robuxAmount
              , r = e.isGetCurrencyCallDone
              , n = e.robuxError ? u : q.numberFormat.getNumberFormat(n);
            return U().createElement(U().Fragment, null, U().createElement("li", null, U().createElement(v.Link, {
                cssClasses: "rbx-menu-item",
                id: "nav-robux-balance",
                url: Wn.robuxBalance.url
            }, r && t("Label.sRobuxMessage", {
                robuxValue: n
            }))), U().createElement("li", null, U().createElement(v.Link, {
                cssClasses: "rbx-menu-item",
                url: Wn.buyRobux.url
            }, t(Wn.buyRobux.label))))
        }
        Xn.defaultProps = {
            robuxAmount: 0,
            robuxError: ""
        },
        Xn.propTypes = {
            translate: p().func.isRequired,
            robuxAmount: p().number,
            robuxError: p().string,
            isGetCurrencyCallDone: p().bool.isRequired
        };
        var Jn = Xn;
        function Yn(e) {
            var t = e.translate
              , n = e.robuxAmount
              , r = e.isGetCurrencyCallDone
              , a = e.robuxError
              , e = (0,
            L.useRef)();
            return U().createElement("li", {
                id: "navbar-robux",
                ref: e,
                className: "navbar-icon-item"
            }, U().createElement(v.Popover, {
                id: "buy-robux-popover",
                trigger: "click",
                placement: "bottom",
                button: U().createElement("button", {
                    type: "button",
                    className: "btn-navigation-nav-robux-md"
                }, U().createElement(Hn, {
                    robuxAmount: n,
                    isGetCurrencyCallDone: r,
                    robuxError: a
                })),
                role: "menu",
                container: e.current
            }, U().createElement("div", {
                className: Ke()
            }, U().createElement("ul", {
                id: "buy-robux-popover-menu",
                className: "dropdown-menu"
            }, U().createElement(Jn, {
                translate: t,
                robuxAmount: n,
                isGetCurrencyCallDone: r,
                robuxError: a
            })))))
        }
        Yn.defaultProps = {
            robuxAmount: 0,
            robuxError: ""
        },
        Yn.propTypes = {
            translate: p().func.isRequired,
            robuxAmount: p().number,
            robuxError: p().string,
            isGetCurrencyCallDone: p().bool.isRequired
        };
        var Zn = Yn;
        function er(e) {
            e = e.toggleUniverseSearch;
            return U().createElement("li", {
                className: "rbx-navbar-right-search"
            }, U().createElement("button", {
                type: "button",
                className: "rbx-menu-item btn-navigation-nav-search-white-md",
                onClick: e
            }, U().createElement("span", {
                className: "icon-nav-search-white"
            })))
        }
        er.propTypes = {
            toggleUniverseSearch: p().func.isRequired
        };
        var tr = er;
        function nr(e, t, n, r, a, o, i) {
            try {
                var c = e[o](i)
                  , u = c.value
            } catch (e) {
                return void n(e)
            }
            c.done ? t(u) : Promise.resolve(u).then(r, a)
        }
        function rr(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return ar(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ar(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ar(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        function or() {
            var e = rr((0,
            L.useState)(!1), 2)
              , t = e[0]
              , r = e[1]
              , a = (0,
            L.useRef)(null);
            (0,
            L.useEffect)(function() {
                (function() {
                    var c, e = (c = regeneratorRuntime.mark(function e() {
                        var t, n;
                        return regeneratorRuntime.wrap(function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2,
                                    (0,
                                    g.robloxBadgesReadyForRender)();
                                case 2:
                                    if (e.sent)
                                        return e.next = 6,
                                        (0,
                                        g.getVerifiedBadgeExperimentInfo)();
                                    e.next = 12;
                                    break;
                                case 6:
                                    t = e.sent,
                                    n = t.showBadges,
                                    t = n && (0,
                                    g.currentUserHasVerifiedBadge)(),
                                    r(t),
                                    n = {
                                        verifiedBadgeEnabledVariant: n.toString(),
                                        surface: "Web_Navigation_Header",
                                        creatorId: (0,
                                        g.getCurrentUserId)().toString()
                                    },
                                    t && a.current ? (0,
                                    g.exposeBadgeOnlyIfInViewport)({
                                        exposureAttrs: n,
                                        elToWatch: a.current
                                    }) : (0,
                                    g.sendVerifiedBadgeSeenExperimentExposure)(n);
                                case 12:
                                case "end":
                                    return e.stop()
                                }
                        }, e)
                    }),
                    function() {
                        var e = this
                          , i = arguments;
                        return new Promise(function(t, n) {
                            var r = c.apply(e, i);
                            function a(e) {
                                nr(r, t, n, a, o, "next", e)
                            }
                            function o(e) {
                                nr(r, t, n, a, o, "throw", e)
                            }
                            a(void 0)
                        }
                        )
                    }
                    );
                    return function() {
                        return e.apply(this, arguments)
                    }
                }
                )()().catch(function() {
                    r(!1)
                })
            }, [a]);
            e = d.authenticatedUser.isUnder13,
            t = t && g.VerifiedBadgeIcon ? U().createElement("section", {
                ref: function(e) {
                    a.current = e
                }
            }, U().createElement(g.VerifiedBadgeIcon, {
                overrideImgClass: "verified-badge-icon-header",
                size: g.BadgeSizes.CAPTIONHEADER,
                titleText: g.translatedVerifiedBadgeTitleText
            })) : null;
            return U().createElement("div", {
                className: "age-bracket-label text-header"
            }, U().createElement(v.Link, {
                className: "text-link dynamic-overflow-container",
                url: F.scrollListItems.profile.url
            }, U().createElement("span", {
                className: "avatar avatar-headshot-xs"
            }, U().createElement(y.Thumbnail2d, {
                containerClass: "avatar-card-image",
                targetId: d.authenticatedUser.id,
                type: y.ThumbnailTypes.avatarHeadshot,
                altName: d.authenticatedUser.name
            })), U().createElement("span", {
                className: "text-overflow age-bracket-label-username font-caption-header"
            }, at.nameForHeader), t), U().createElement("span", {
                className: "xsmall age-bracket-label-age text-secondary"
            }, e ? "<13" : "13+"))
        }
        or.propTypes = {};
        var ir = or;
        function cr(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return ur(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return ur(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function ur(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var lr = S;
        function sr(e) {
            var t = e.translate
              , n = e.toggleUniverseSearch
              , r = d.authenticatedUser.isAuthenticated
              , a = d.authenticatedUser.id
              , o = cr((0,
            L.useState)(0), 2)
              , i = o[0]
              , c = o[1]
              , u = cr((0,
            L.useState)(!1), 2)
              , l = u[0]
              , s = u[1]
              , e = cr((0,
            L.useState)(0), 2)
              , o = e[0]
              , f = e[1]
              , u = cr((0,
            L.useState)(""), 2)
              , e = u[0]
              , m = u[1];
            (0,
            L.useEffect)(function() {
                r && (lr().then(c),
                H(a).then(function(e) {
                    e = e.data;
                    f(e.robux)
                }, function() {
                    m("Currency service unavailable")
                }).finally(function() {
                    s(!0)
                }))
            }, [r, a]);
            var p = U().createElement("li", {
                id: "navbar-stream",
                className: "navbar-icon-item navbar-stream"
            }, U().createElement("span", {
                className: "nav-robux-icon rbx-menu-item"
            }, U().createElement("span", {
                id: "notification-stream-icon-container",
                "notification-stream-indicator": "true"
            })));
            try {
                de().module("notificationStreamIcon"),
                de().module("notificationStream"),
                p = U().createElement(jn, null)
            } catch (e) {
                console.log(e)
            }
            return U().createElement("ul", {
                className: "nav navbar-right rbx-navbar-icon-group"
            }, U().createElement(ir, null), U().createElement(tr, {
                translate: t,
                toggleUniverseSearch: n
            }), p, U().createElement(Zn, {
                translate: t,
                robuxAmount: o,
                isGetCurrencyCallDone: l,
                robuxError: e
            }), U().createElement(zn, {
                translate: t,
                accountNotificationCount: i
            }))
        }
        function fr() {
            window.location.href = pr()
        }
        sr.defaultProps = {
            accountNotificationCount: 0
        },
        sr.propTypes = {
            translate: p().func.isRequired,
            accountNotificationCount: p().number,
            toggleUniverseSearch: p().func.isRequired
        };
        var mr = sr
          , pr = b;
        function dr(e) {
            e = e.translate;
            return U().createElement("li", {
                className: "signup-button-container"
            }, U().createElement(v.Link, {
                onClick: fr,
                url: pr(),
                id: "sign-up-button",
                className: "rbx-navbar-signup btn-growth-sm nav-menu-title signup-button"
            }, e("Label.sSignUp")))
        }
        function br() {
            window.location.href = gr()
        }
        dr.propTypes = {
            translate: p().func.isRequired
        };
        var vr = dr
          , yr = a
          , gr = E;
        function hr(e) {
            e = e.translate;
            return U().createElement("li", {
                className: "login-action"
            }, yr() && U().createElement(v.Link, {
                onClick: br,
                url: gr(),
                className: "rbx-navbar-login btn-secondary-sm nav-menu-title rbx-menu-item"
            }, e("Label.sLogin")))
        }
        hr.propTypes = {
            translate: p().func.isRequired
        };
        var Sr = hr;
        function Er() {
            return (Er = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function wr(e, t) {
            if (null == e)
                return {};
            var n, r = function(e, t) {
                if (null == e)
                    return {};
                var n, r, a = {}, o = Object.keys(e);
                for (r = 0; r < o.length; r++)
                    n = o[r],
                    0 <= t.indexOf(n) || (a[n] = e[n]);
                return a
            }(e, t);
            if (Object.getOwnPropertySymbols)
                for (var a = Object.getOwnPropertySymbols(e), o = 0; o < a.length; o++)
                    n = a[o],
                    0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
            return r
        }
        function Or(e) {
            var t = e.translate
              , n = e.toggleUniverseSearch
              , e = wr(e, ["translate", "toggleUniverseSearch"]);
            return d.authenticatedUser.isAuthenticated ? U().createElement("div", {
                className: "navbar-right rbx-navbar-right"
            }, U().createElement(mr, Er({
                translate: t,
                toggleUniverseSearch: n
            }, e))) : U().createElement("div", {
                className: "navbar-right rbx-navbar-right"
            }, U().createElement("ul", {
                className: "nav navbar-right rbx-navbar-right-nav"
            }, U().createElement(vr, {
                translate: t
            }), U().createElement(Sr, {
                translate: t
            }), U().createElement(tr, {
                translate: t,
                toggleUniverseSearch: n
            })))
        }
        Or.propTypes = {
            translate: p().func.isRequired,
            toggleUniverseSearch: p().func.isRequired
        };
        var xr = Or;
        function Cr() {
            return (Cr = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n, r = arguments[t];
                    for (n in r)
                        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            }
            ).apply(this, arguments)
        }
        function Ar(e, t) {
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
                    for (var i, c = e[Symbol.iterator](); !(r = (i = c.next()).done) && (n.push(i.value),
                    !t || n.length !== t); r = !0)
                        ;
                } catch (e) {
                    a = !0,
                    o = e
                } finally {
                    try {
                        r || null == c.return || c.return()
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
                    return Ir(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                "Object" === n && e.constructor && (n = e.constructor.name);
                if ("Map" === n || "Set" === n)
                    return Array.from(e);
                if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                    return Ir(e, t)
            }(e, t) || function() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }()
        }
        function Ir(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var n = 0, r = new Array(t); n < t; n++)
                r[n] = e[n];
            return r
        }
        var kr = (0,
        M.withTranslations)(function(e) {
            var t = De()
              , n = Ar((0,
            L.useState)(t), 2)
              , r = n[0]
              , a = n[1]
              , t = (n = Ar((0,
            L.useState)(!t), 2))[0]
              , o = n[1]
              , i = (0,
            L.useCallback)(function() {
                var e = De();
                r !== e && (a(e),
                o(!e))
            }, [r]);
            return (0,
            L.useEffect)(function() {
                return window.addEventListener("resize", i),
                function() {
                    window.removeEventListener("resize", i)
                }
            }, [i]),
            U().createElement(U().Fragment, null, U().createElement(bn, Cr({
                isUniverseSearchShown: t
            }, e)), U().createElement(xr, Cr({
                toggleUniverseSearch: function() {
                    o(function(e) {
                        return !e
                    })
                }
            }, e)))
        }, f)
          , Nr = n;
        function jr(e) {
            var e = e.translate
              , t = document.getElementById(Nr);
            return U().createElement(v.Button, {
                id: "skip-to-main-content",
                size: v.Button.sizes.extraSmall,
                variant: v.Button.variants.primary,
                onClick: function() {
                    return t.focus()
                }
            }, e("Action.SkipToMainContent") || "Skip to main content")
        }
        jr.propTypes = {
            translate: p().func.isRequired
        };
        var Rr = jr
          , Tr = l
          , Pr = d.authenticatedUser.isAuthenticated;
        function Lr(e) {
            var t = v.IconButton.iconTypes;
            return U().createElement(L.Fragment, null, U().createElement(Rr, e), Pr && U().createElement(v.IconButton, {
                className: "menu-button",
                iconType: t.navigation,
                iconName: "nav-menu",
                onClick: function() {
                    document.dispatchEvent(new CustomEvent(Tr.name))
                }
            }))
        }
        Lr.propTypes = {};
        var Ur = (0,
        M.withTranslations)(Lr, f);
        function qr(t, e) {
            var n, r = Object.keys(t);
            return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t),
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            })),
            r.push.apply(r, n)),
            r
        }
        function Dr(r) {
            for (var e = 1; e < arguments.length; e++) {
                var a = null != arguments[e] ? arguments[e] : {};
                e % 2 ? qr(Object(a), !0).forEach(function(e) {
                    var t, n;
                    t = r,
                    e = a[n = e],
                    n in t ? Object.defineProperty(t, n, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[n] = e
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : qr(Object(a)).forEach(function(e) {
                    Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
                })
            }
            return r
        }
        Kr(635);
        var w = w
          , Mr = "right-navigation-header"
          , Br = "left-navigation-container"
          , Fr = "header-menu-icon";
        t().NavigationService = Dr(Dr({}, t().NavigationService), {}, {
            logoutAndRedirect: w
        }),
        (0,
        q.ready)(function() {
            document.getElementById(Fr) && (0,
            e.render)(U().createElement(Ur, null), document.getElementById(Fr)),
            document.getElementById(Mr) && (0,
            e.render)(U().createElement(kr, null), document.getElementById(Mr)),
            document.getElementById(Br) && (0,
            e.render)(U().createElement(gt, null), document.getElementById(Br))
        })
    }()
}();
//# sourceMappingURL=https://js.rbxcdn.com/5ea334fe4b4a36352ed0-navigation.bundle.min.js.map

/* Bundle detector */
window.Roblox && window.Roblox.BundleDetector && window.Roblox.BundleDetector.bundleDetected("Navigation");
