function _defineProperty(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
} ! function (e, t) {
    "object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).GhostContentAPI = t()
}(this, function () {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function R(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }

    function M(e) {
        return e && e.Math == Math && e
    }

    function n(e) {
        try {
            return !!e()
        } catch (e) {
            return !0
        }
    }

    function z(e, t) {
        return {
            enumerable: !(1 & e),
            configurable: !(2 & e),
            writable: !(4 & e),
            value: t
        }
    }

    function B(e) {
        if (oe(e)) throw ie("Can't call method on " + e);
        return e
    }

    function D(e) {
        return re(B(e))
    }

    function q(e, t) {
        return arguments.length < 2 ? (n = r[e], l(n) ? n : void 0) : r[e] && r[e][t];
        var n
    }

    function H(t, n) {
        try {
            ye(r, t, {
                value: n,
                configurable: !0,
                writable: !0
            })
        } catch (e) {
            r[t] = n
        }
        return n
    }

    function W(e) {
        return "Symbol(" + (void 0 === e ? "" : e) + ")_" + Ee(++we + Se, 36)
    }

    function G(e) {
        var t;
        return d(Ce, e) && (ue || "string" == typeof Ce[e]) || (t = "Symbol." + e, ue && d(f, e) ? Ce[e] = f[e] : Ce[e] = (de && Ae ? Ae : Le)(t)), Ce[e]
    }

    function U(e) {
        return e = function (e, t) {
            if (!i(e) || pe(e)) return e;
            o = e[Te];
            var n, r, o = oe(o) ? void 0 : ge(o);
            if (o) {
                if (o = V(o, e, t = void 0 === t ? "default" : t), !i(o) || pe(o)) return o;
                throw Oe("Can't convert object to primitive value")
            }
            o = e, e = t = void 0 === t ? "number" : t;
            if ("string" === e && l(n = o.toString) && !i(r = V(n, o))) return r;
            if (l(n = o.valueOf) && !i(r = V(n, o))) return r;
            if ("string" !== e && l(n = o.toString) && !i(r = V(n, o))) return r;
            throw ve("Can't convert object to primitive value")
        }(e, "string"), pe(e) ? e : e + ""
    }

    function $(e) {
        return ke ? Ne.createElement(e) : {}
    }

    function s(e) {
        if (i(e)) return e;
        throw Ie(je(e) + " is not an object")
    }
    var r = M("object" == ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis)) && globalThis) || M("object" == ("undefined" == typeof window ? "undefined" : _typeof(window)) && window) || M("object" == ("undefined" == typeof self ? "undefined" : _typeof(self)) && self) || M("object" == _typeof(e) && e) || function () {
        return this
    }() || Function("return this")(),
        c = !n(function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        }),
        e = !n(function () {
            var e = function () { }.bind();
            return "function" != typeof e || e.hasOwnProperty("prototype")
        }),
        X = Function.prototype.call,
        V = e ? X.bind(X) : function () {
            return X.apply(X, arguments)
        },
        t = {}.propertyIsEnumerable,
        Y = Object.getOwnPropertyDescriptor,
        K = {
            f: Y && !t.call({
                1: 2
            }, 1) ? function (e) {
                e = Y(this, e);
                return !!e && e.enumerable
            } : t
        },
        t = Function.prototype,
        o = t.bind,
        J = t.call,
        Z = e && o.bind(J, J),
        t = e ? function (e) {
            return e && Z(e)
        } : function (e) {
            return e && function () {
                return J.apply(e, arguments)
            }
        },
        Q = t({}.toString),
        ee = t("".slice),
        te = Object,
        ne = t("".split),
        re = n(function () {
            return !te("z").propertyIsEnumerable(0)
        }) ? function (e) {
            return "String" == ee(Q(e), 8, -1) ? ne(e, "") : te(e)
        } : te,
        oe = function (e) {
            return null == e
        },
        ie = TypeError,
        o = "object" == ("undefined" == typeof document ? "undefined" : _typeof(document)) && document.all,
        e = {
            all: o,
            IS_HTMLDDA: void 0 === o && void 0 !== o
        },
        ae = e.all,
        l = e.IS_HTMLDDA ? function (e) {
            return "function" == typeof e || e === ae
        } : function (e) {
            return "function" == typeof e
        },
        se = e.all,
        i = e.IS_HTMLDDA ? function (e) {
            return "object" == _typeof(e) ? null !== e : l(e) || e === se
        } : function (e) {
            return "object" == _typeof(e) ? null !== e : l(e)
        },
        ce = t({}.isPrototypeOf),
        o = q("navigator", "userAgent") || "",
        e = r.process,
        a = r.Deno,
        e = e && e.versions || a && a.version,
        a = e && e.v8,
        le = h = !(h = a ? 0 < (p = a.split("."))[0] && p[0] < 4 ? 1 : +(p[0] + p[1]) : h) && o && (!(p = o.match(/Edge\/(\d+)/)) || 74 <= p[1]) && (p = o.match(/Chrome\/(\d+)/)) ? +p[1] : h,
        ue = !!Object.getOwnPropertySymbols && !n(function () {
            var e = Symbol();
            return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && le && le < 41
        }),
        de = ue && !Symbol.sham && "symbol" == _typeof(Symbol.iterator),
        fe = Object,
        pe = de ? function (e) {
            return "symbol" == _typeof(e)
        } : function (e) {
            var t = q("Symbol");
            return l(t) && ce(t.prototype, fe(e))
        },
        he = String,
        me = TypeError,
        ge = function (e) {
            if (l(e)) return e;
            throw me(function (e) {
                try {
                    return he(e)
                } catch (e) {
                    return "Object"
                }
            }(e) + " is not a function")
        },
        ve = TypeError,
        ye = Object.defineProperty,
        e = "__core-js_shared__",
        u = r[e] || H(e, {}),
        a = R(function (e) {
            (e.exports = function (e, t) {
                return u[e] || (u[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.25.2",
                mode: "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.25.2/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        }),
        be = Object,
        xe = t({}.hasOwnProperty),
        d = Object.hasOwn || function (e, t) {
            return xe(be(B(e)), t)
        },
        we = 0,
        Se = Math.random(),
        Ee = t(1..toString),
        Ce = a("wks"),
        f = r.Symbol,
        Ae = f && f.for,
        Le = de ? f : f && f.withoutSetter || W,
        Oe = TypeError,
        Te = G("toPrimitive"),
        Ne = r.document,
        ke = i(Ne) && i(Ne.createElement),
        _e = !c && !n(function () {
            return 7 != Object.defineProperty($("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        }),
        Pe = Object.getOwnPropertyDescriptor,
        Fe = {
            f: c ? Pe : function (e, t) {
                if (e = D(e), t = U(t), _e) try {
                    return Pe(e, t)
                } catch (e) { }
                if (d(e, t)) return z(!V(K.f, e, t), e[t])
            }
        },
        o = c && n(function () {
            return 42 != Object.defineProperty(function () { }, "prototype", {
                value: 42,
                writable: !1
            }).prototype
        }),
        je = String,
        Ie = TypeError,
        Re = TypeError,
        Me = Object.defineProperty,
        ze = Object.getOwnPropertyDescriptor,
        Be = {
            f: c ? o ? function (e, t, n) {
                var r;
                return s(e), t = U(t), s(n), "function" == typeof e && "prototype" === t && "value" in n && "writable" in n && !n.writable && (r = ze(e, t)) && r.writable && (e[t] = n.value, n = {
                    configurable: ("configurable" in n ? n : r).configurable,
                    enumerable: ("enumerable" in n ? n : r).enumerable,
                    writable: !1
                }), Me(e, t, n)
            } : Me : function (e, t, n) {
                if (s(e), t = U(t), s(n), _e) try {
                    return Me(e, t, n)
                } catch (e) { }
                if ("get" in n || "set" in n) throw Re("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        De = c ? function (e, t, n) {
            return Be.f(e, t, z(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        },
        p = Function.prototype,
        h = c && Object.getOwnPropertyDescriptor,
        e = d(p, "name"),
        qe = {
            EXISTS: e,
            PROPER: e && "something" === function () { }.name,
            CONFIGURABLE: e && (!c || h(p, "name").configurable)
        },
        He = t(Function.toString);
    l(u.inspectSource) || (u.inspectSource = function (e) {
        return He(e)
    });

    function We(e) {
        return Je[e] || (Je[e] = W(e))
    }
    var m, Ge, Ue, $e, Xe, Ve, Ye, g, Ke = u.inspectSource,
        e = r.WeakMap,
        h = l(e) && /native code/.test(String(e)),
        Je = a("keys"),
        Ze = {},
        Qe = "Object already initialized",
        et = r.TypeError,
        p = r.WeakMap;
    Ye = h || u.state ? (m = u.state || (u.state = new p), Ge = t(m.get), Ue = t(m.has), $e = t(m.set), Xe = function (e, t) {
        if (Ue(m, e)) throw et(Qe);
        return t.facade = e, $e(m, e, t), t
    }, Ve = function (e) {
        return Ge(m, e) || {}
    }, function (e) {
        return Ue(m, e)
    }) : (g = We("state"), Ze[g] = !0, Xe = function (e, t) {
        if (d(e, g)) throw et(Qe);
        return t.facade = e, De(e, g, t), t
    }, Ve = function (e) {
        return d(e, g) ? e[g] : {}
    }, function (e) {
        return d(e, g)
    });

    function tt(s) {
        return function (e, t, n) {
            var r, o = D(e),
                i = 0 < (e = (e = o).length) ? mt(ft(e), 9007199254740991) : 0,
                a = (e = i, (n = ft(n)) < 0 ? pt(n + e, 0) : ht(n, e));
            if (s && t != t) {
                for (; a < i;)
                    if ((r = o[a++]) != r) return !0
            } else
                for (; a < i; a++)
                    if ((s || a in o) && o[a] === t) return s || a || 0;
            return !s && -1
        }
    }

    function nt(e, t) {
        var n, r = D(e),
            o = 0,
            i = [];
        for (n in r) !d(Ze, n) && d(r, n) && vt(i, n);
        for (; t.length > o;) !d(r, n = t[o++]) || ~gt(i, n) || vt(i, n);
        return i
    }

    function rt(e, t) {
        return (e = Lt[At(e)]) == Tt || e != Ot && (l(t) ? n(t) : !!t)
    }

    function ot() { }

    function it(e) {
        e.write(It("")), e.close();
        var t = e.parentWindow.Object;
        return e = null, t
    }
    var at, st = {
        set: Xe,
        get: Ve,
        has: Ye,
        enforce: function (e) {
            return Ye(e) ? Ve(e) : Xe(e, {})
        },
        getterFor: function (t) {
            return function (e) {
                if (i(e) && (e = Ve(e)).type === t) return e;
                throw et("Incompatible receiver, " + t + " required")
            }
        }
    },
        ct = R(function (e) {
            var r = qe.CONFIGURABLE,
                o = st.enforce,
                t = st.get,
                i = Object.defineProperty,
                a = c && !n(function () {
                    return 8 !== i(function () { }, "length", {
                        value: 8
                    }).length
                }),
                s = String(String).split("String"),
                e = e.exports = function (e, t, n) {
                    "Symbol(" === String(t).slice(0, 7) && (t = "[" + String(t).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), n && n.getter && (t = "get " + t), n && n.setter && (t = "set " + t), (!d(e, "name") || r && e.name !== t) && (c ? i(e, "name", {
                        value: t,
                        configurable: !0
                    }) : e.name = t), a && n && d(n, "arity") && e.length !== n.arity && i(e, "length", {
                        value: n.arity
                    });
                    try {
                        n && d(n, "constructor") && n.constructor ? c && i(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (e) { }
                    n = o(e);
                    return d(n, "source") || (n.source = s.join("string" == typeof t ? t : "")), e
                };
            Function.prototype.toString = e(function () {
                return l(this) && t(this).source || Ke(this)
            }, "toString")
        }),
        lt = Math.ceil,
        ut = Math.floor,
        dt = Math.trunc || function (e) {
            e = +e;
            return (0 < e ? ut : lt)(e)
        },
        ft = function (e) {
            e = +e;
            return e != e || 0 == e ? 0 : dt(e)
        },
        pt = Math.max,
        ht = Math.min,
        mt = Math.min,
        e = {
            includes: tt(!0),
            indexOf: tt(!1)
        },
        gt = e.indexOf,
        vt = t([].push),
        yt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        bt = yt.concat("length", "prototype"),
        xt = {
            f: Object.getOwnPropertyNames || function (e) {
                return nt(e, bt)
            }
        },
        wt = {
            f: Object.getOwnPropertySymbols
        },
        St = t([].concat),
        Et = q("Reflect", "ownKeys") || function (e) {
            var t = xt.f(s(e)),
                n = wt.f;
            return n ? St(t, n(e)) : t
        },
        Ct = /#|\.prototype\./,
        At = rt.normalize = function (e) {
            return String(e).replace(Ct, ".").toLowerCase()
        },
        Lt = rt.data = {},
        Ot = rt.NATIVE = "N",
        Tt = rt.POLYFILL = "P",
        Nt = rt,
        kt = Fe.f,
        _t = Object.keys || function (e) {
            return nt(e, yt)
        },
        Pt = {
            f: c && !o ? Object.defineProperties : function (e, t) {
                s(e);
                for (var n, r = D(t), o = _t(t), i = o.length, a = 0; a < i;) Be.f(e, n = o[a++], r[n]);
                return e
            }
        },
        Ft = q("document", "documentElement"),
        jt = We("IE_PROTO"),
        It = function (e) {
            return "<script>" + e + "<\/script>"
        },
        Rt = function () {
            try {
                at = new ActiveXObject("htmlfile")
            } catch (e) { }
            var e, t;
            Rt = "undefined" == typeof document || document.domain && at ? it(at) : ((t = $("iframe")).style.display = "none", Ft.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(It("document.F=Object")), e.close(), e.F);
            for (var n = yt.length; n--;) delete Rt.prototype[yt[n]];
            return Rt()
        },
        a = (Ze[jt] = !0, Object.create || function (e, t) {
            var n;
            return null !== e ? (ot.prototype = s(e), n = new ot, ot.prototype = null, n[jt] = e) : n = Rt(), void 0 === t ? n : Pt.f(n, t)
        }),
        h = Be.f,
        p = G("unscopables"),
        t = Array.prototype;
    null == t[p] && h(t, p, {
        configurable: !0,
        value: a(null)
    });
    var Mt, v, y, zt = e.includes,
        b = {
            target: "Array",
            proto: !0,
            forced: n(function () {
                return !Array(1).includes()
            })
        },
        Bt = {
            includes: function (e) {
                return zt(this, e, 1 < arguments.length ? arguments[1] : void 0)
            }
        },
        Dt = b.target,
        qt = b.global,
        Ht = b.stat;
    if (Mt = qt ? r : Ht ? r[Dt] || H(Dt, {}) : (r[Dt] || {}).prototype)
        for (v in Bt) {
            if (C = Bt[v], y = b.dontCallGetSet ? (y = kt(Mt, v)) && y.value : Mt[v], !Nt(qt ? v : Dt + (Ht ? "." : "#") + v, b.forced) && void 0 !== y) {
                if (_typeof(C) == _typeof(y)) continue;
                for (var Wt = C, Gt = y, Ut = Kt = Yt = Vt = Xt = $t = void 0, $t = Et(Gt), Xt = Be.f, Vt = Fe.f, Yt = 0; Yt < $t.length; Yt++) {
                    var Kt = $t[Yt];
                    d(Wt, Kt) || Ut && d(Ut, Kt) || Xt(Wt, Kt, Vt(Gt, Kt))
                }
            } (b.sham || y && y.sham) && De(C, "sham", !0), Jt = E = S = w = x = void 0;
            var x = Mt,
                w = v,
                S = C,
                E = b,
                Jt = (E = E || {}).enumerable,
                C = (C = void 0) !== E.name ? E.name : w;
            if (l(S) && ct(S, C, E), E.global) Jt ? x[w] = S : H(w, S);
            else {
                try {
                    E.unsafe ? x[w] && (Jt = !0) : delete x[w]
                } catch (x) { }
                Jt ? x[w] = S : Be.f(x, w, {
                    value: S,
                    enumerable: !1,
                    configurable: !E.nonConfigurable,
                    writable: !E.nonWritable
                })
            }
        }
    t[p].includes = !0;

    function Zt(n, r) {
        return function () {
            for (var e = new Array(arguments.length), t = 0; t < e.length; t++) e[t] = arguments[t];
            return n.apply(r, e)
        }
    }

    function Qt(e) {
        return e = tn.call(e), en[e] || (en[e] = e.slice(8, -1).toLowerCase())
    }
    var en, tn = Object.prototype.toString;
    en = Object.create(null);

    function A(t) {
        return t = t.toLowerCase(),
            function (e) {
                return Qt(e) === t
            }
    }

    function nn(e) {
        return Array.isArray(e)
    }

    function rn(e) {
        return void 0 === e
    }
    var on = A("ArrayBuffer");

    function an(e) {
        return null !== e && "object" == _typeof(e)
    }

    function sn(e) {
        return "object" === Qt(e) && (null === (e = Object.getPrototypeOf(e)) || e === Object.prototype)
    }
    o = A("Date"), h = A("File"), a = A("Blob"), e = A("FileList");

    function cn(e) {
        return "[object Function]" === tn.call(e)
    }
    t = A("URLSearchParams");

    function ln(e, t) {
        if (null != e)
            if (nn(e = "object" != _typeof(e) ? [e] : e))
                for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e);
            else
                for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.call(null, e[o], o, e)
    }
    un = "undefined" != typeof Uint8Array && Object.getPrototypeOf(Uint8Array);
    var un, L = {
        supportedProtocols: ["http:", "https:", "file:"],
        getProtocol: function (e) {
            return e || "http:"
        },
        isArray: nn,
        isArrayBuffer: on,
        isBuffer: function (e) {
            return null !== e && !rn(e) && null !== e.constructor && !rn(e.constructor) && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        },
        isFormData: function (e) {
            var t = "[object FormData]";
            return e && ("function" == typeof FormData && e instanceof FormData || tn.call(e) === t || cn(e.toString) && e.toString() === t)
        },
        isArrayBufferView: function (e) {
            return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && on(e.buffer)
        },
        isString: function (e) {
            return "string" == typeof e
        },
        isNumber: function (e) {
            return "number" == typeof e
        },
        isObject: an,
        isPlainObject: sn,
        isUndefined: rn,
        isDate: o,
        isFile: h,
        isBlob: a,
        isFunction: cn,
        isStream: function (e) {
            return an(e) && cn(e.pipe)
        },
        isURLSearchParams: t,
        isStandardBrowserEnv: function () {
            return ("undefined" == typeof navigator || "ReactNative" !== navigator.product && "NativeScript" !== navigator.product && "NS" !== navigator.product) && "undefined" != typeof window && "undefined" != typeof document
        },
        forEach: ln,
        merge: function n() {
            var r = {};

            function e(e, t) {
                sn(r[t]) && sn(e) ? r[t] = n(r[t], e) : sn(e) ? r[t] = n({}, e) : nn(e) ? r[t] = e.slice() : r[t] = e
            }
            for (var t = 0, o = arguments.length; t < o; t++) ln(arguments[t], e);
            return r
        },
        extend: function (n, e, r) {
            return ln(e, function (e, t) {
                n[t] = r && "function" == typeof e ? Zt(e, r) : e
            }), n
        },
        trim: function (e) {
            return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
        },
        stripBOM: function (e) {
            return e = 65279 === e.charCodeAt(0) ? e.slice(1) : e
        },
        inherits: function (e, t, n, r) {
            e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, n && Object.assign(e.prototype, n)
        },
        toFlatObject: function (e, t, n) {
            var r, o, i, a = {};
            t = t || {};
            do {
                for (o = (r = Object.getOwnPropertyNames(e)).length; 0 < o--;) a[i = r[o]] || (t[i] = e[i], a[i] = !0)
            } while ((e = Object.getPrototypeOf(e)) && (!n || n(e, t)) && e !== Object.prototype);
            return t
        },
        kindOf: Qt,
        kindOfTest: A,
        endsWith: function (e, t, n) {
            e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
            e = e.indexOf(t, n);
            return -1 !== e && e === n
        },
        toArray: function (e) {
            if (!e) return null;
            var t = e.length;
            if (rn(t)) return null;
            for (var n = new Array(t); 0 < t--;) n[t] = e[t];
            return n
        },
        isTypedArray: function (e) {
            return un && e instanceof un
        },
        isFileList: e
    };

    function dn(e) {
        return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
    }

    function fn(e, t, n) {
        var r;
        return t && (n = n ? n(t) : L.isURLSearchParams(t) ? t.toString() : (r = [], L.forEach(t, function (e, t) {
            null != e && (L.isArray(e) ? t += "[]" : e = [e], L.forEach(e, function (e) {
                L.isDate(e) ? e = e.toISOString() : L.isObject(e) && (e = JSON.stringify(e)), r.push(dn(t) + "=" + dn(e))
            }))
        }), r.join("&"))) && (-1 !== (t = e.indexOf("#")) && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + n), e
    }

    function pn() {
        this.handlers = []
    }
    pn.prototype.use = function (e, t, n) {
        return this.handlers.push({
            fulfilled: e,
            rejected: t,
            synchronous: !!n && n.synchronous,
            runWhen: n ? n.runWhen : null
        }), this.handlers.length - 1
    }, pn.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
    }, pn.prototype.forEach = function (t) {
        L.forEach(this.handlers, function (e) {
            null !== e && t(e)
        })
    };

    function hn(n, r) {
        L.forEach(n, function (e, t) {
            t !== r && t.toUpperCase() === r.toUpperCase() && (n[r] = e, delete n[t])
        })
    }
    var mn = pn;

    function O(e, t, n, r, o) {
        Error.call(this), this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), o && (this.response = o)
    }
    L.inherits(O, Error, {
        toJSON: function () {
            return {
                message: this.message,
                name: this.name,
                description: this.description,
                number: this.number,
                fileName: this.fileName,
                lineNumber: this.lineNumber,
                columnNumber: this.columnNumber,
                stack: this.stack,
                config: this.config,
                code: this.code,
                status: this.response && this.response.status ? this.response.status : null
            }
        }
    });

    function gn(e, i) {
        i = i || new FormData;
        var t = [];

        function a(e) {
            return null === e ? "" : L.isDate(e) ? e.toISOString() : L.isArrayBuffer(e) || L.isTypedArray(e) ? "function" == typeof Blob ? new Blob([e]) : Buffer.from(e) : e
        }
        return function r(e, o) {
            if (L.isPlainObject(e) || L.isArray(e)) {
                if (-1 !== t.indexOf(e)) throw Error("Circular reference detected in " + o);
                t.push(e), L.forEach(e, function (e, t) {
                    if (!L.isUndefined(e)) {
                        var n = o ? o + "." + t : t;
                        if (e && !o && "object" == _typeof(e))
                            if (L.endsWith(t, "{}")) e = JSON.stringify(e);
                            else if (L.endsWith(t, "[]") && (t = L.toArray(e))) return void t.forEach(function (e) {
                                L.isUndefined(e) || i.append(n, a(e))
                            });
                        r(e, n)
                    }
                }), t.pop()
            } else i.append(o, a(e))
        }(e), i
    }

    function vn(e, t) {
        return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? (e = e, (n = t) ? e.replace(/\/+$/, "") + "/" + n.replace(/^\/+/, "") : e) : t;
        var n
    }
    var yn, bn, T, xn = O.prototype,
        wn = {},
        N = (["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED"].forEach(function (e) {
            wn[e] = {
                value: e
            }
        }), Object.defineProperties(O, wn), Object.defineProperty(xn, "isAxiosError", {
            value: !0
        }), O.from = function (e, t, n, r, o, i) {
            var a = Object.create(xn);
            return L.toFlatObject(e, a, function (e) {
                return e !== Error.prototype
            }), O.call(a, e.message, t, n, r, o), a.name = e.name, i && Object.assign(a, i), a
        }, O),
        Sn = {
            silentJSONParsing: !0,
            forcedJSONParsing: !0,
            clarifyTimeoutError: !1
        },
        En = L.isStandardBrowserEnv() ? {
            write: function (e, t, n, r, o, i) {
                var a = [];
                a.push(e + "=" + encodeURIComponent(t)), L.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), L.isString(r) && a.push("path=" + r), L.isString(o) && a.push("domain=" + o), !0 === i && a.push("secure"), document.cookie = a.join("; ")
            },
            read: function (e) {
                e = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                return e ? decodeURIComponent(e[3]) : null
            },
            remove: function (e) {
                this.write(e, "", Date.now() - 864e5)
            }
        } : {
            write: function () { },
            read: function () {
                return null
            },
            remove: function () { }
        },
        Cn = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"],
        An = L.isStandardBrowserEnv() ? (bn = /(msie|trident)/i.test(navigator.userAgent), T = document.createElement("a"), yn = _n(window.location.href), function (e) {
            e = L.isString(e) ? _n(e) : e;
            return e.protocol === yn.protocol && e.host === yn.host
        }) : function () {
            return !0
        },
        Ln = 2147483647,
        On = /[^\x20-\x7E]/,
        Tn = /[\x2E\u3002\uFF0E\uFF61]/g,
        Nn = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
        },
        k = Math.floor,
        kn = String.fromCharCode;

    function _n(e) {
        return bn && (T.setAttribute("href", e), e = T.href), T.setAttribute("href", e), {
            href: T.href,
            protocol: T.protocol ? T.protocol.replace(/:$/, "") : "",
            host: T.host,
            search: T.search ? T.search.replace(/^\?/, "") : "",
            hash: T.hash ? T.hash.replace(/^#/, "") : "",
            hostname: T.hostname,
            port: T.port,
            pathname: "/" === T.pathname.charAt(0) ? T.pathname : "/" + T.pathname
        }
    }

    function Pn(e) {
        throw new RangeError(Nn[e])
    }

    function Fn(e, t) {
        return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
    }

    function jn(e, t, n) {
        var r = 0;
        for (e = n ? k(e / 700) : e >> 1, e += k(e / t); 455 < e; r += 36) e = k(e / 35);
        return k(r + 36 * e / (e + 38))
    }

    function In(e) {
        return t = (e = e).split("@"), n = "", 1 < t.length && (n = t[0] + "@", e = t[1]), t = function (e, t) {
            for (var n = e.length, r = []; n--;) r[n] = t(e[n]);
            return r
        }((e = e.replace(Tn, ".")).split("."), function (e) {
            return On.test(e) ? "xn--" + function (e) {
                var t, n, r, o, i, a, s, c, l, u, d, f, p, h, m, g = [];
                for (e = function (e) {
                    for (var t, n, r = [], o = 0, i = e.length; o < i;)(t = e.charCodeAt(o++)) >= 55296 && t <= 56319 && o < i ? 56320 == (64512 & (n = e.charCodeAt(o++))) ? r.push(((1023 & t) << 10) + (1023 & n) + 65536) : (r.push(t), o--) : r.push(t);
                    return r
                }(e), f = e.length, t = 128, n = 0, i = 72, a = 0; a < f; ++a)(d = e[a]) < 128 && g.push(kn(d));
                for (r = o = g.length, o && g.push("-"); r < f;) {
                    for (s = Ln, a = 0; a < f; ++a)(d = e[a]) >= t && d < s && (s = d);
                    for (s - t > k((Ln - n) / (p = r + 1)) && Pn("overflow"), n += (s - t) * p, t = s, a = 0; a < f; ++a)
                        if ((d = e[a]) < t && ++n > Ln && Pn("overflow"), d == t) {
                            for (c = n, l = 36; !(c < (u = l <= i ? 1 : l >= i + 26 ? 26 : l - i)); l += 36) m = c - u, h = 36 - u, g.push(kn(Fn(u + m % h, 0))), c = k(m / h);
                            g.push(kn(Fn(c, 0))), i = jn(n, p, r == o), n = 0, ++r
                        } ++n, ++t
                }
                return g.join("")
            }(e) : e
        }).join("."), n + t;
        var t, n
    }

    function Rn(e) {
        return null === e
    }

    function Mn(e) {
        return "string" == typeof e
    }

    function zn(e) {
        return "object" == _typeof(e) && null !== e
    }
    var Bn = Array.isArray || function (e) {
        return "[object Array]" === Object.prototype.toString.call(e)
    };

    function Dn(e) {
        switch (_typeof(e)) {
            case "string":
                return e;
            case "boolean":
                return e ? "true" : "false";
            case "number":
                return isFinite(e) ? e : "";
            default:
                return ""
        }
    }

    function qn(e, t) {
        if (e.map) return e.map(t);
        for (var n = [], r = 0; r < e.length; r++) n.push(t(e[r], r));
        return n
    }
    var Hn = Object.keys || function (e) {
        var t, n = [];
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
    };

    function Wn(e, t, n, r) {
        t = t || "&", n = n || "=";
        var o = {};
        if ("string" == typeof e && 0 !== e.length) {
            var i = /\+/g,
                t = (e = e.split(t), 1e3),
                a = (r && "number" == typeof r.maxKeys && (t = r.maxKeys), e.length);
            0 < t && t < a && (a = t);
            for (var s = 0; s < a; ++s) {
                var c, l = e[s].replace(i, "%20"),
                    u = l.indexOf(n),
                    u = 0 <= u ? (c = l.substr(0, u), l.substr(u + 1)) : (c = l, ""),
                    l = decodeURIComponent(c),
                    u = decodeURIComponent(u);
                Object.prototype.hasOwnProperty.call(o, l) ? Bn(o[l]) ? o[l].push(u) : o[l] = [o[l], u] : o[l] = u
            }
        }
        return o
    }
    var Gn = {
        parse: tr,
        resolve: function (e, t) {
            return tr(e, !1, !0).resolve(t)
        },
        resolveObject: function (e, t) {
            return e ? tr(e, !1, !0).resolveObject(t) : t
        },
        fileURLToPath: function (e) {
            if ("string" == typeof e) e = (new _).parse(e);
            else if (!(e instanceof _)) throw new TypeError('The "path" argument must be of type string or an instance of URL. Received type ' + _typeof(e) + String(e));
            if ("file:" !== e.protocol) throw new TypeError("The URL must be of scheme file");
            for (var t = e.pathname, n = 0; n < t.length; n++)
                if ("%" === t[n]) {
                    var r = 32 | t.codePointAt(n + 2);
                    if ("2" === t[n + 1] && 102 == r) throw new TypeError("must not include encoded / characters")
                } return decodeURIComponent(t)
        },
        format: function (e) {
            return rr(e = Mn(e) ? nr({}, e) : e)
        },
        Url: _
    };

    function _() {
        this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    var Un = /^([a-z0-9.+-]+:)/i,
        $n = /:[0-9]*$/,
        Xn = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
        p = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]),
        Vn = ["'"].concat(p),
        Yn = ["%", "/", "?", ";", "#"].concat(Vn),
        Kn = ["/", "?", "#"],
        Jn = /^[+a-z0-9A-Z_-]{0,63}$/,
        Zn = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
        Qn = {
            javascript: !0,
            "javascript:": !0
        },
        er = {
            javascript: !0,
            "javascript:": !0
        },
        P = {
            http: !0,
            https: !0,
            ftp: !0,
            gopher: !0,
            file: !0,
            "http:": !0,
            "https:": !0,
            "ftp:": !0,
            "gopher:": !0,
            "file:": !0
        };

    function tr(e, t, n) {
        var r;
        return e && zn(e) && e instanceof _ ? e : ((r = new _).parse(e, t, n), r)
    }

    function nr(e, t, n, r) {
        if (!Mn(t)) throw new TypeError("Parameter 'url' must be a string, not " + _typeof(t));
        var o = t.indexOf("?"),
            o = -1 !== o && o < t.indexOf("#") ? "?" : "#",
            i = t.split(o);
        i[0] = i[0].replace(/\\/g, "/");
        var a = (a = t = i.join(o)).trim();
        if (!r && 1 === t.split("#").length) {
            i = Xn.exec(a);
            if (i) return e.path = a, e.href = a, e.pathname = i[1], i[2] ? (e.search = i[2], e.query = n ? Wn(e.search.substr(1)) : e.search.substr(1)) : n && (e.search = "", e.query = {}), e
        }
        var s, c, o = Un.exec(a);
        if (o && (c = (o = o[0]).toLowerCase(), e.protocol = c, a = a.substr(o.length)), !(r || o || a.match(/^\/\/[^@\/]+@[^@\/]+/)) || !(w = "//" === a.substr(0, 2)) || o && er[o] || (a = a.substr(2), e.slashes = !0), !er[o] && (w || o && !P[o])) {
            var l = -1;
            for (d = 0; d < Kn.length; d++) - 1 !== (s = a.indexOf(Kn[d])) && (-1 === l || s < l) && (l = s);
            for (-1 !== (t = -1 === l ? a.lastIndexOf("@") : a.lastIndexOf("@", l)) && (i = a.slice(0, t), a = a.slice(t + 1), e.auth = decodeURIComponent(i)), l = -1, d = 0; d < Yn.length; d++) - 1 !== (s = a.indexOf(Yn[d])) && (-1 === l || s < l) && (l = s); - 1 === l && (l = a.length), e.host = a.slice(0, l), a = a.slice(l), or(e), e.hostname = e.hostname || "";
            r = "[" === e.hostname[0] && "]" === e.hostname[e.hostname.length - 1];
            if (!r)
                for (var u = e.hostname.split(/\./), d = 0, f = u.length; d < f; d++) {
                    var p = u[d];
                    if (p && !p.match(Jn)) {
                        for (var h = "", m = 0, g = p.length; m < g; m++) 127 < p.charCodeAt(m) ? h += "x" : h += p[m];
                        if (!h.match(Jn)) {
                            var v = u.slice(0, d),
                                y = u.slice(d + 1),
                                b = p.match(Zn);
                            b && (v.push(b[1]), y.unshift(b[2])), y.length && (a = "/" + y.join(".") + a), e.hostname = v.join(".");
                            break
                        }
                    }
                }
            255 < e.hostname.length ? e.hostname = "" : e.hostname = e.hostname.toLowerCase(), r || (e.hostname = In(e.hostname));
            var x = e.port ? ":" + e.port : "",
                w = e.hostname || "";
            e.host = w + x, e.href += e.host, r && (e.hostname = e.hostname.substr(1, e.hostname.length - 2), "/" !== a[0]) && (a = "/" + a)
        }
        if (!Qn[c])
            for (d = 0, f = Vn.length; d < f; d++) {
                var S, E = Vn[d]; - 1 !== a.indexOf(E) && ((S = encodeURIComponent(E)) === E && (S = escape(E)), a = a.split(E).join(S))
            }
        o = a.indexOf("#"), -1 !== o && (e.hash = a.substr(o), a = a.slice(0, o)), t = a.indexOf("?");
        return -1 !== t ? (e.search = a.substr(t), e.query = a.substr(t + 1), n && (e.query = Wn(e.query)), a = a.slice(0, t)) : n && (e.search = "", e.query = {}), a && (e.pathname = a), P[c] && e.hostname && !e.pathname && (e.pathname = "/"), (e.pathname || e.search) && (x = e.pathname || "", i = e.search || "", e.path = x + i), e.href = rr(e), e
    }

    function rr(e) {
        var n, t = e.auth || "",
            r = (t && (t = (t = encodeURIComponent(t)).replace(/%3A/i, ":"), t += "@"), e.protocol || ""),
            o = e.pathname || "",
            i = e.hash || "",
            a = !1,
            s = "",
            t = (e.host ? a = t + e.host : e.hostname && (a = t + (-1 === e.hostname.indexOf(":") ? e.hostname : "[" + this.hostname + "]"), e.port) && (a += ":" + e.port), e.query && zn(e.query) && Object.keys(e.query).length && (n = e.query, s = "object" == _typeof(n = null === n ? void 0 : n) ? qn(Hn(n), function (e) {
                var t = encodeURIComponent(Dn(e)) + "=";
                return Bn(n[e]) ? qn(n[e], function (e) {
                    return t + encodeURIComponent(Dn(e))
                }).join("&") : t + encodeURIComponent(Dn(n[e]))
            }).join("&") : ""), e.search || s && "?" + s || "");
        return r && ":" !== r.substr(-1) && (r += ":"), e.slashes || (!r || P[r]) && !1 !== a ? (a = "//" + (a || ""), o && "/" !== o.charAt(0) && (o = "/" + o)) : a = a || "", i && "#" !== i.charAt(0) && (i = "#" + i), t && "?" !== t.charAt(0) && (t = "?" + t), r + a + (o = o.replace(/[?#]/g, function (e) {
            return encodeURIComponent(e)
        })) + (t = t.replace("#", "%23")) + i
    }

    function or(e) {
        var t = e.host,
            n = $n.exec(t);
        n && (":" !== (n = n[0]) && (e.port = n.substr(1)), t = t.substr(0, t.length - n.length)), t && (e.hostname = t)
    }

    function ir(e) {
        N.call(this, null == e ? "canceled" : e, N.ERR_CANCELED), this.name = "CanceledError"
    }
    _.prototype.parse = function (e, t, n) {
        return nr(this, e, t, n)
    }, _.prototype.format = function () {
        return rr(this)
    }, _.prototype.resolve = function (e) {
        return this.resolveObject(tr(e, !1, !0)).format()
    }, _.prototype.resolveObject = function (e) {
        Mn(e) && ((f = new _).parse(e, !1, !0), e = f);
        for (var t = new _, n = Object.keys(this), r = 0; r < n.length; r++) {
            var o = n[r];
            t[o] = this[o]
        }
        if (t.hash = e.hash, "" !== e.href)
            if (e.slashes && !e.protocol) {
                for (var i = Object.keys(e), a = 0; a < i.length; a++) {
                    var s = i[a];
                    "protocol" !== s && (t[s] = e[s])
                }
                P[t.protocol] && t.hostname && !t.pathname && (t.path = t.pathname = "/")
            } else if (e.protocol && e.protocol !== t.protocol)
                if (P[e.protocol]) {
                    if (t.protocol = e.protocol, e.host || er[e.protocol]) t.pathname = e.pathname;
                    else {
                        for (v = (e.pathname || "").split("/"); v.length && !(e.host = v.shift()););
                        e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== v[0] && v.unshift(""), v.length < 2 && v.unshift(""), t.pathname = v.join("/")
                    }
                    t.search = e.search, t.query = e.query, t.host = e.host || "", t.auth = e.auth, t.hostname = e.hostname || e.host, t.port = e.port, (t.pathname || t.search) && (f = t.pathname || "", p = t.search || "", t.path = f + p), t.slashes = t.slashes || e.slashes
                } else
                    for (var c = Object.keys(e), l = 0; l < c.length; l++) {
                        var u = c[l];
                        t[u] = e[u]
                    } else {
                var d, f = t.pathname && "/" === t.pathname.charAt(0),
                    p = e.host || e.pathname && "/" === e.pathname.charAt(0),
                    f = p || f || t.host && e.pathname,
                    h = f,
                    m = t.pathname && t.pathname.split("/") || [],
                    g = t.protocol && !P[t.protocol],
                    v = e.pathname && e.pathname.split("/") || [];
                if (g && (t.hostname = "", t.port = null, t.host && ("" === m[0] ? m[0] = t.host : m.unshift(t.host)), t.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === v[0] ? v[0] = e.host : v.unshift(e.host)), e.host = null), f = f && ("" === v[0] || "" === m[0])), p) t.host = (e.host || "" === e.host ? e : t).host, t.hostname = (e.hostname || "" === e.hostname ? e : t).hostname, t.search = e.search, t.query = e.query, m = v;
                else if (v.length) (m = m || []).pop(), m = m.concat(v), t.search = e.search, t.query = e.query;
                else if (null != e.search) return g && (t.hostname = t.host = m.shift(), d = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = d.shift(), t.host = t.hostname = d.shift()), t.search = e.search, t.query = e.query, Rn(t.pathname) && Rn(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.href = t.format(), t;
                if (m.length) {
                    for (var y = m.slice(-1)[0], p = (t.host || e.host || 1 < m.length) && ("." === y || ".." === y) || "" === y, b = 0, x = m.length; 0 <= x; x--) "." === (y = m[x]) ? m.splice(x, 1) : ".." === y ? (m.splice(x, 1), b++) : b && (m.splice(x, 1), b--);
                    if (!f && !h)
                        for (; b--;) m.unshift("..");
                    !f || "" === m[0] || m[0] && "/" === m[0].charAt(0) || m.unshift(""), p && "/" !== m.join("/").substr(-1) && m.push("");
                    h = "" === m[0] || m[0] && "/" === m[0].charAt(0);
                    g && (t.hostname = t.host = !h && m.length ? m.shift() : "", d = !!(t.host && 0 < t.host.indexOf("@")) && t.host.split("@")) && (t.auth = d.shift(), t.host = t.hostname = d.shift()), (f = f || t.host && m.length) && !h && m.unshift(""), m.length ? t.pathname = m.join("/") : (t.pathname = null, t.path = null), Rn(t.pathname) && Rn(t.search) || (t.path = (t.pathname || "") + (t.search || "")), t.auth = e.auth || t.auth, t.slashes = t.slashes || e.slashes
                } else t.pathname = null, t.search ? t.path = "/" + t.search : t.path = null
            }
        return t.href = t.format(), t
    }, _.prototype.parseHost = function () {
        return or(this)
    }, L.inherits(ir, N, {
        __CANCEL__: !0
    });
    var ar = ir,
        sr = {
            "Content-Type": "application/x-www-form-urlencoded"
        };

    function cr(e, t) {
        !L.isUndefined(e) && L.isUndefined(e["Content-Type"]) && (e["Content-Type"] = t)
    }

    function lr(t, n, e) {
        var r = this || pr;
        return L.forEach(e, function (e) {
            t = e.call(r, t, n)
        }), t
    }

    function ur(e) {
        return !(!e || !e.__CANCEL__)
    }
    var dr, fr = {
        transitional: Sn,
        adapter: dr = "undefined" != typeof XMLHttpRequest || "undefined" != typeof process && "[object process]" === Object.prototype.toString.call(process) ? function (p) {
            return new Promise(function (a, s) {
                var e, n = p.data,
                    r = p.headers,
                    c = p.responseType;

                function l() {
                    p.cancelToken && p.cancelToken.unsubscribe(e), p.signal && p.signal.removeEventListener("abort", e)
                }
                var t, u = new XMLHttpRequest,
                    o = (p.auth && (o = p.auth.username || "", i = p.auth.password ? unescape(encodeURIComponent(p.auth.password)) : "", r.Authorization = "Basic " + btoa(o + ":" + i)), vn(p.baseURL, p.url)),
                    i = Gn.parse(o),
                    d = L.getProtocol(i.protocol);

                function f() {
                    var e, t, n, r, o, i;
                    u && (n = "getAllResponseHeaders" in u ? (n = u.getAllResponseHeaders(), i = {}, n && L.forEach(n.split("\n"), function (e) {
                        o = e.indexOf(":"), r = L.trim(e.substr(0, o)).toLowerCase(), o = L.trim(e.substr(o + 1)), !r || i[r] && 0 <= Cn.indexOf(r) || (i[r] = "set-cookie" === r ? (i[r] || []).concat([o]) : i[r] ? i[r] + ", " + o : o)
                    }), i) : null, e = {
                        data: c && "text" !== c && "json" !== c ? u.response : u.responseText,
                        status: u.status,
                        statusText: u.statusText,
                        headers: n,
                        config: p,
                        request: u
                    }, t = e.config.validateStatus, e.status && t && !t(e.status) ? (t = new N("Request failed with status code " + e.status, [N.ERR_BAD_REQUEST, N.ERR_BAD_RESPONSE][Math.floor(e.status / 100) - 4], e.config, e.request, e), s(t)) : a(e), l(), u = null)
                }
                u.open(p.method.toUpperCase(), fn(o, p.params, p.paramsSerializer), !0), u.timeout = p.timeout, "onloadend" in u ? u.onloadend = f : u.onreadystatechange = function () {
                    u && 4 === u.readyState && (0 !== u.status || u.responseURL && 0 === u.responseURL.indexOf("file:")) && setTimeout(f)
                }, u.onabort = function () {
                    u && (s(new N("Request aborted", N.ECONNABORTED, p, u)), u = null)
                }, u.onerror = function () {
                    s(new N("Network Error", N.ERR_NETWORK, p, u, u)), u = null
                }, u.ontimeout = function () {
                    var e = p.timeout ? "timeout of " + p.timeout + "ms exceeded" : "timeout exceeded",
                        t = p.transitional || Sn;
                    p.timeoutErrorMessage && (e = p.timeoutErrorMessage), s(new N(e, t.clarifyTimeoutError ? N.ETIMEDOUT : N.ECONNABORTED, p, u)), u = null
                }, L.isStandardBrowserEnv() && (t = (p.withCredentials || An(o)) && p.xsrfCookieName ? En.read(p.xsrfCookieName) : void 0) && (r[p.xsrfHeaderName] = t), "setRequestHeader" in u && L.forEach(r, function (e, t) {
                    void 0 === n && "content-type" === t.toLowerCase() ? delete r[t] : u.setRequestHeader(t, e)
                }), L.isUndefined(p.withCredentials) || (u.withCredentials = !!p.withCredentials), c && "json" !== c && (u.responseType = p.responseType), "function" == typeof p.onDownloadProgress && u.addEventListener("progress", p.onDownloadProgress), "function" == typeof p.onUploadProgress && u.upload && u.upload.addEventListener("progress", p.onUploadProgress), (p.cancelToken || p.signal) && (e = function (e) {
                    u && (s(!e || e.type ? new ar : e), u.abort(), u = null)
                }, p.cancelToken && p.cancelToken.subscribe(e), p.signal) && (p.signal.aborted ? e() : p.signal.addEventListener("abort", e)), n = n || null, null !== i.path ? L.supportedProtocols.includes(d) ? u.send(n) : s(new N("Unsupported protocol " + d, N.ERR_BAD_REQUEST, p)) : s(new N("Malformed URL " + o, N.ERR_BAD_REQUEST, p))
            })
        } : dr,
        transformRequest: [function (e, t) {
            if (hn(t, "Accept"), hn(t, "Content-Type"), !(L.isFormData(e) || L.isArrayBuffer(e) || L.isBuffer(e) || L.isStream(e) || L.isFile(e) || L.isBlob(e))) {
                if (L.isArrayBufferView(e)) return e.buffer;
                if (L.isURLSearchParams(e)) return cr(t, "application/x-www-form-urlencoded;charset=utf-8"), e.toString();
                var n, r, o = L.isObject(e),
                    i = t && t["Content-Type"];
                if ((n = L.isFileList(e)) || o && "multipart/form-data" === i) return r = this.env && this.env.FormData, gn(n ? {
                    "files[]": e
                } : e, r && new r);
                if (o || "application/json" === i) {
                    cr(t, "application/json");
                    var a = e;
                    if (L.isString(a)) try {
                        return (0, JSON.parse)(a), L.trim(a)
                    } catch (a) {
                        if ("SyntaxError" !== a.name) throw a
                    }
                    return (0, JSON.stringify)(a)
                }
            }
            return e
        }],
        transformResponse: [function (e) {
            var t = this.transitional || fr.transitional,
                n = t && t.silentJSONParsing,
                t = t && t.forcedJSONParsing,
                n = !n && "json" === this.responseType;
            if (n || t && L.isString(e) && e.length) try {
                return JSON.parse(e)
            } catch (e) {
                if (n) {
                    if ("SyntaxError" === e.name) throw N.from(e, N.ERR_BAD_RESPONSE, this, null, this.response);
                    throw e
                }
            }
            return e
        }],
        timeout: 0,
        xsrfCookieName: "XSRF-TOKEN",
        xsrfHeaderName: "X-XSRF-TOKEN",
        maxContentLength: -1,
        maxBodyLength: -1,
        env: {
            FormData: null
        },
        validateStatus: function (e) {
            return 200 <= e && e < 300
        },
        headers: {
            common: {
                Accept: "application/json, text/plain, */*"
            }
        }
    },
        pr = (L.forEach(["delete", "get", "head"], function (e) {
            fr.headers[e] = {}
        }), L.forEach(["post", "put", "patch"], function (e) {
            fr.headers[e] = L.merge(sr)
        }), fr);

    function hr(e) {
        if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new ar
    }

    function mr(t) {
        return hr(t), t.headers = t.headers || {}, t.data = lr.call(t, t.data, t.headers, t.transformRequest), t.headers = L.merge(t.headers.common || {}, t.headers[t.method] || {}, t.headers), L.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (e) {
            delete t.headers[e]
        }), (t.adapter || pr.adapter)(t).then(function (e) {
            return hr(t), e.data = lr.call(t, e.data, e.headers, t.transformResponse), e
        }, function (e) {
            return ur(e) || (hr(t), e && e.response && (e.response.data = lr.call(t, e.response.data, e.response.headers, t.transformResponse))), Promise.reject(e)
        })
    }

    function gr(t, n) {
        n = n || {};
        var r = {};

        function o(e, t) {
            return L.isPlainObject(e) && L.isPlainObject(t) ? L.merge(e, t) : L.isPlainObject(t) ? L.merge({}, t) : L.isArray(t) ? t.slice() : t
        }

        function i(e) {
            return L.isUndefined(n[e]) ? L.isUndefined(t[e]) ? void 0 : o(void 0, t[e]) : o(t[e], n[e])
        }

        function e(e) {
            if (!L.isUndefined(n[e])) return o(void 0, n[e])
        }

        function a(e) {
            return L.isUndefined(n[e]) ? L.isUndefined(t[e]) ? void 0 : o(void 0, t[e]) : o(void 0, n[e])
        }

        function s(e) {
            return e in n ? o(t[e], n[e]) : e in t ? o(void 0, t[e]) : void 0
        }
        var c = {
            url: e,
            method: e,
            data: e,
            baseURL: a,
            transformRequest: a,
            transformResponse: a,
            paramsSerializer: a,
            timeout: a,
            timeoutMessage: a,
            withCredentials: a,
            adapter: a,
            responseType: a,
            xsrfCookieName: a,
            xsrfHeaderName: a,
            onUploadProgress: a,
            onDownloadProgress: a,
            decompress: a,
            maxContentLength: a,
            maxBodyLength: a,
            beforeRedirect: a,
            transport: a,
            httpAgent: a,
            httpsAgent: a,
            cancelToken: a,
            socketPath: a,
            responseEncoding: a,
            validateStatus: s
        };
        return L.forEach(Object.keys(t).concat(Object.keys(n)), function (e) {
            var t = c[e] || i,
                n = t(e);
            L.isUndefined(n) && t !== s || (r[e] = n)
        }), r
    }
    var vr = {},
        yr = (["object", "boolean", "number", "function", "string", "symbol"].forEach(function (t, n) {
            vr[t] = function (e) {
                return _typeof(e) === t || "a" + (n < 1 ? "n " : " ") + t
            }
        }), {}),
        br = (vr.transitional = function (r, o, n) {
            function i(e, t) {
                return "[Axios v0.27.0] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
            }
            return function (e, t, n) {
                if (!1 === r) throw new N(i(t, " has been removed" + (o ? " in " + o : "")), N.ERR_DEPRECATED);
                return o && !yr[t] && (yr[t] = !0, console.warn(i(t, " has been deprecated since v" + o + " and will be removed in the near future"))), !r || r(e, t, n)
            }
        }, {
            assertOptions: function (e, t, n) {
                if ("object" != _typeof(e)) throw new N("options must be an object", N.ERR_BAD_OPTION_VALUE);
                for (var r = Object.keys(e), o = r.length; 0 < o--;) {
                    var i = r[o],
                        a = t[i];
                    if (a) {
                        var s = e[i],
                            a = void 0 === s || a(s, i, e);
                        if (!0 !== a) throw new N("option " + i + " must be " + a, N.ERR_BAD_OPTION_VALUE)
                    } else if (!0 !== n) throw new N("Unknown option " + i, N.ERR_BAD_OPTION)
                }
            },
            validators: vr
        }),
        F = br.validators;

    function j(e) {
        this.defaults = e, this.interceptors = {
            request: new mn,
            response: new mn
        }
    }
    j.prototype.request = function (e, t) {
        "string" == typeof e ? (t = t || {}).url = e : t = e || {}, (t = gr(this.defaults, t)).method ? t.method = t.method.toLowerCase() : this.defaults.method ? t.method = this.defaults.method.toLowerCase() : t.method = "get";
        var n = t.transitional,
            r = (void 0 !== n && br.assertOptions(n, {
                silentJSONParsing: F.transitional(F.boolean),
                forcedJSONParsing: F.transitional(F.boolean),
                clarifyTimeoutError: F.transitional(F.boolean)
            }, !1), []),
            o = !0;
        this.interceptors.request.forEach(function (e) {
            "function" == typeof e.runWhen && !1 === e.runWhen(t) || (o = o && e.synchronous, r.unshift(e.fulfilled, e.rejected))
        });
        var i, a = [];
        if (this.interceptors.response.forEach(function (e) {
            a.push(e.fulfilled, e.rejected)
        }), o) {
            for (var s = t; r.length;) {
                var c = r.shift(),
                    l = r.shift();
                try {
                    s = c(s)
                } catch (e) {
                    l(e);
                    break
                }
            }
            try {
                i = mr(s)
            } catch (e) {
                return Promise.reject(e)
            }
            for (; a.length;) i = i.then(a.shift(), a.shift())
        } else {
            var u = [mr, void 0];
            for (Array.prototype.unshift.apply(u, r), u = u.concat(a), i = Promise.resolve(t); u.length;) i = i.then(u.shift(), u.shift())
        }
        return i
    }, j.prototype.getUri = function (e) {
        e = gr(this.defaults, e);
        var t = vn(e.baseURL, e.url);
        return fn(t, e.params, e.paramsSerializer)
    }, L.forEach(["delete", "get", "head", "options"], function (n) {
        j.prototype[n] = function (e, t) {
            return this.request(gr(t || {}, {
                method: n,
                url: e,
                data: (t || {}).data
            }))
        }
    }), L.forEach(["post", "put", "patch"], function (o) {
        function e(r) {
            return function (e, t, n) {
                return this.request(gr(n || {}, {
                    method: o,
                    headers: r ? {
                        "Content-Type": "multipart/form-data"
                    } : {},
                    url: e,
                    data: t
                }))
            }
        }
        j.prototype[o] = e(), j.prototype[o + "Form"] = e(!0)
    });
    var xr = j;

    function wr(e) {
        if ("function" != typeof e) throw new TypeError("executor must be a function.");
        this.promise = new Promise(function (e) {
            t = e
        });
        var t, r = this;
        this.promise.then(function (e) {
            if (r._listeners) {
                for (var t = r._listeners.length, n = 0; n < t; n++) r._listeners[n](e);
                r._listeners = null
            }
        }), this.promise.then = function (e) {
            var t, e = new Promise(function (e) {
                r.subscribe(e), t = e
            }).then(e);
            return e.cancel = function () {
                r.unsubscribe(t)
            }, e
        }, e(function (e) {
            r.reason || (r.reason = new ar(e), t(r.reason))
        })
    }
    wr.prototype.throwIfRequested = function () {
        if (this.reason) throw this.reason
    }, wr.prototype.subscribe = function (e) {
        this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
    }, wr.prototype.unsubscribe = function (e) {
        this._listeners && -1 !== (e = this._listeners.indexOf(e)) && this._listeners.splice(e, 1)
    }, wr.source = function () {
        var t;
        return {
            token: new wr(function (e) {
                t = e
            }),
            cancel: t
        }
    };

    function Sr(e) {
        var t = e.url,
            n = e.method,
            r = e.params,
            e = e.headers;
        return Er[n](t, {
            params: r,
            paramsSerializer: function (r) {
                return Object.keys(r).reduce(function (e, t) {
                    var n = encodeURIComponent([].concat(r[t]).join(","));
                    return e.concat("".concat(t, "=").concat(n))
                }, []).join("&")
            },
            headers: e
        })
    }
    var o = wr,
        h = function t(n) {
            var e = new xr(n),
                r = Zt(xr.prototype.request, e);
            return L.extend(r, xr.prototype, e), L.extend(r, e), r.create = function (e) {
                return t(gr(n, e))
            }, r
        }(pr),
        a = (h.Axios = xr, h.CanceledError = ar, h.CancelToken = o, h.isCancel = ur, h.VERSION = "0.27.0", h.toFormData = gn, h.AxiosError = N, h.Cancel = h.CanceledError, h.all = function (e) {
            return Promise.all(e)
        }, h.spread = function (t) {
            return function (e) {
                return t.apply(null, e)
            }
        }, h.isAxiosError = function (e) {
            return L.isObject(e) && !0 === e.isAxiosError
        }, h),
        Er = (a.default = h, a),
        Cr = ["v2", "v3", "v4", "v5", "canary"],
        I = "@tryghost/content-api";
    return function e(t) {
        var o, i = t.url,
            a = t.key,
            n = t.host,
            s = t.version,
            c = t.userAgent,
            r = t.ghostPath,
            l = void 0 === r ? "ghost" : r,
            r = t.makeRequest,
            u = void 0 === r ? Sr : r;
        if (n && (console.warn("".concat(I, ": The 'host' parameter is deprecated, please use 'url' instead")), i = i || n), this instanceof e) return e({
            url: i,
            key: a,
            version: s,
            userAgent: c,
            ghostPath: l,
            makeRequest: u
        });
        if (void 0 === s) throw new Error("".concat(I, " Config Missing: 'version' is required. E.g. ").concat(Cr.join(",")));
        if ("boolean" == typeof s) !0 === s && (o = "v5.0"), s = void 0;
        else {
            if (s && !Cr.includes(s) && !s.match(/^v\d+\.\d+/)) throw new Error("".concat(I, " Config Invalid: 'version' ").concat(s, " is not supported"));
            o = "canary" === s ? (console.warn("".concat(I, ": The 'version' parameter has a deprecated format 'canary', please use 'v{major}.{minor}' format instead")), "v5.0") : s.match(/^v\d+$/) ? (console.warn("".concat(I, ": The 'version' parameter has a deprecated format 'v{major}', please use 'v{major}.{minor}' format instead")), "".concat(s, ".0")) : s
        }
        if (!i) throw new Error("".concat(I, " Config Missing: 'url' is required. E.g. 'https://site.com'"));
        if (!/https?:\/\//.test(i)) throw new Error("".concat(I, " Config Invalid: 'url' ").concat(i, " requires a protocol. E.g. 'https://site.com'"));
        if (i.endsWith("/")) throw new Error("".concat(I, " Config Invalid: 'url' ").concat(i, " must not have a trailing slash. E.g. 'https://site.com'"));
        if (l.endsWith("/") || l.startsWith("/")) throw new Error("".concat(I, " Config Invalid: 'ghostPath' ").concat(l, " must not have a leading or trailing slash. E.g. 'ghost'"));
        if (a && !/[0-9a-f]{26}/.test(a)) throw new Error("".concat(I, " Config Invalid: 'key' ").concat(a, " must have 26 hex characters"));
        void 0 === c && (c = !1);
        t = ["posts", "authors", "tags", "pages", "settings", "tiers", "newsletters", "offers"].reduce(function (e, r) {
            return Object.assign(e, _defineProperty({}, r, {
                read: function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                        n = 2 < arguments.length ? arguments[2] : void 0;
                    return e && (e.id || e.slug) ? (t = Object.assign({}, e, t), d(r, t, e.id || "slug/".concat(e.slug), n)) : Promise.reject(new Error("".concat(I, " read requires an id or slug.")))
                },
                browse: function () {
                    return d(r, 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, null, 1 < arguments.length ? arguments[1] : void 0)
                }
            }))
        }, {});
        return delete t.settings.read, delete t.tiers.read, delete t.newsletters.read, delete t.offers.browse, t;

        function d(t, e, n, r) {
            r = 3 < arguments.length && void 0 !== r ? r : null;
            if (!r && !a) return Promise.reject(new Error("".concat(I, " Config Missing: 'key' is required.")));
            delete e.id;
            r = r ? {
                Authorization: "GhostMembers ".concat(r)
            } : {}, c && (r["User-Agent"] = "boolean" == typeof c ? "GhostContentSDK/".concat("1.11.4") : c), o && (r["Accept-Version"] = o), e = Object.assign({
                key: a
            }, e), n = "".concat(i, "/").concat(l, "/api").concat(function (e) {
                e = "v5" === e || void 0 === e || e.match(/^v5\.\d+/) ? "/content/" : e.match(/^v\d+\.\d+/) ? "/".concat(/^(v\d+)\.\d+/.exec(e)[1], "/content/") : "/".concat(e, "/content/");
                return e
            }(s)).concat(t, "/").concat(n ? n + "/" : "");
            return u({
                url: n,
                method: "get",
                params: e,
                headers: r
            }).then(function (e) {
                return Array.isArray(e.data[t]) ? 1 !== e.data[t].length || e.data.meta ? Object.assign(e.data[t], {
                    meta: e.data.meta
                }) : e.data[t][0] : e.data[t]
            }).catch(function (e) {
                var t, n, r;
                if (e.response && e.response.data && e.response.data.errors) throw t = e.response.data.errors[0], n = new Error(t.message), r = Object.keys(t), n.name = t.type, r.forEach(function (e) {
                    n[e] = t[e]
                }), n.response = e.response, n.request = e.request, n.config = e.config, n;
                throw e
            })
        }
    }
}),
    function (e) {
        var t = function (r, f, i) {
            "use strict";
            var p, h, m, R, a, g, e, u, M, s, z, B, n, D, c, d, v, q, y, b, x, H, w, t, W, G, l, U, $, X, V, S, E, Y, C, K, J, Z, A, L, O, T, N, Q, ee, te, ne, o, re, oe, ie, ae, k, _, P, se, F, ce, le, ue, j, de, fe, pe, he, me, I, ge, ve = {
                lazyClass: "lazyload",
                loadedClass: "lazyloaded",
                loadingClass: "lazyloading",
                preloadClass: "lazypreload",
                errorClass: "lazyerror",
                autosizesClass: "lazyautosizes",
                fastLoadedClass: "ls-is-cached",
                iframeLoadMode: 0,
                srcAttr: "data-src",
                srcsetAttr: "data-srcset",
                sizesAttr: "data-sizes",
                minSize: 40,
                customMedia: {},
                init: !0,
                expFactor: 1.5,
                hFac: .8,
                loadMode: 2,
                loadHidden: !0,
                ricTimeout: 0,
                throttleDelay: 125
            };
            for (ge in h = r.lazySizesConfig || r.lazysizesConfig || {}, ve) ge in h || (h[ge] = ve[ge]);
            return f && f.getElementsByClassName ? (m = f.documentElement, R = r.HTMLPictureElement, g = "getAttribute", e = r[a = "addEventListener"].bind(r), u = r.setTimeout, M = r.requestAnimationFrame || u, s = r.requestIdleCallback, z = /^picture$/i, B = ["load", "error", "lazyincluded", "_lazyloaded"], n = {}, D = Array.prototype.forEach, c = function (e, t) {
                return n[t] || (n[t] = new RegExp("(\\s|^)" + t + "(\\s|$)")), n[t].test(e[g]("class") || "") && n[t]
            }, d = function (e, t) {
                c(e, t) || e.setAttribute("class", (e[g]("class") || "").trim() + " " + t)
            }, v = function (e, t) {
                (t = c(e, t)) && e.setAttribute("class", (e[g]("class") || "").replace(t, " "))
            }, q = function e(t, n, r) {
                var o = r ? a : "removeEventListener";
                r && e(t, n), B.forEach(function (e) {
                    t[o](e, n)
                })
            }, y = function (e, t, n, r, o) {
                var i = f.createEvent("Event");
                return (n = n || {}).instance = p, i.initEvent(t, !r, !o), i.detail = n, e.dispatchEvent(i), i
            }, b = function (e, t) {
                var n;
                !R && (n = r.picturefill || h.pf) ? (t && t.src && !e[g]("srcset") && e.setAttribute("srcset", t.src), n({
                    reevaluate: !0,
                    elements: [e]
                })) : t && t.src && (e.src = t.src)
            }, x = function (e, t) {
                return (getComputedStyle(e, null) || {})[t]
            }, H = function (e, t, n) {
                for (n = n || e.offsetWidth; n < h.minSize && t && !e._lazysizesWidth;) n = t.offsetWidth, t = t.parentNode;
                return n
            }, me = [], I = he = [], Oe._lsFlush = Le, w = Oe, t = function (n, e) {
                return e ? function () {
                    w(n)
                } : function () {
                    var e = this,
                        t = arguments;
                    w(function () {
                        n.apply(e, t)
                    })
                }
            }, W = function (e) {
                function t() {
                    var e = i.now() - r;
                    e < 99 ? u(t, 99 - e) : (s || o)(o)
                }
                var n, r, o = function () {
                    n = null, e()
                };
                return function () {
                    r = i.now(), n = n || u(t, 99)
                }
            }, oe = /^img$/i, ie = /^iframe$/i, ae = "onscroll" in r && !/(gle|ing)bot/.test(navigator.userAgent), P = -1, se = function (e) {
                return (N = null == N ? "hidden" == x(f.body, "visibility") : N) || !("hidden" == x(e.parentNode, "visibility") && "hidden" == x(e, "visibility"))
            }, Q = xe, te = _ = k = 0, ne = h.throttleDelay, o = h.ricTimeout, re = s && 49 < o ? function () {
                s(we, {
                    timeout: o
                }), o !== h.ricTimeout && (o = h.ricTimeout)
            } : t(function () {
                u(we)
            }, !0), ce = t(Se), le = function (e) {
                ce({
                    target: e.target
                })
            }, ue = t(function (t, e, n, r, o) {
                var i, a, s, c, l;
                (a = y(t, "lazybeforeunveil", e)).defaultPrevented || (r && (n ? d(t, h.autosizesClass) : t.setAttribute("sizes", r)), n = t[g](h.srcsetAttr), r = t[g](h.srcAttr), o && (i = (c = t.parentNode) && z.test(c.nodeName || "")), s = e.firesLoad || "src" in t && (n || r || i), a = {
                    target: t
                }, d(t, h.loadingClass), s && (clearTimeout(Y), Y = u(be, 2500), q(t, le, !0)), i && D.call(c.getElementsByTagName("source"), Ee), n ? t.setAttribute("srcset", n) : r && !i && (ie.test(t.nodeName) ? (e = r, 0 == (l = (c = t).getAttribute("data-load-mode") || h.iframeLoadMode) ? c.contentWindow.location.replace(e) : 1 == l && (c.src = e)) : t.src = r), o && (n || i) && b(t, {
                    src: r
                })), t._lazyRace && delete t._lazyRace, v(t, h.lazyClass), w(function () {
                    var e = t.complete && 1 < t.naturalWidth;
                    s && !e || (e && d(t, h.fastLoadedClass), Se(a), t._lazyCache = !0, u(function () {
                        "_lazyCache" in t && delete t._lazyCache
                    }, 9)), "lazy" == t.loading && _--
                }, !0)
            }), de = W(function () {
                h.loadMode = 3, F()
            }), G = {
                _: function () {
                    K = i.now(), p.elements = f.getElementsByClassName(h.lazyClass), S = f.getElementsByClassName(h.lazyClass + " " + h.preloadClass), e("scroll", F, !0), e("resize", F, !0), e("pageshow", function (e) {
                        var t;
                        e.persisted && (t = f.querySelectorAll("." + h.loadingClass)).length && t.forEach && M(function () {
                            t.forEach(function (e) {
                                e.complete && j(e)
                            })
                        })
                    }), r.MutationObserver ? new MutationObserver(F).observe(m, {
                        childList: !0,
                        subtree: !0,
                        attributes: !0
                    }) : (m[a]("DOMNodeInserted", F, !0), m[a]("DOMAttrModified", F, !0), setInterval(F, 999)), e("hashchange", F, !0), ["focus", "mouseover", "click", "load", "transitionend", "animationend"].forEach(function (e) {
                        f[a](e, F, !0)
                    }), /d$|^c/.test(f.readyState) ? Ae() : (e("load", Ae), f[a]("DOMContentLoaded", F), u(Ae, 2e4)), p.elements.length ? (xe(), w._lsFlush()) : F()
                },
                checkElems: F = function (e) {
                    var t;
                    (e = !0 === e) && (o = 33), ee || (ee = !0, (t = ne - (i.now() - te)) < 0 && (t = 0), e || t < 9 ? re() : u(re, t))
                },
                unveil: j = function (e) {
                    var t, n, r, o;
                    e._lazyRace || !(!(o = "auto" == (r = (n = oe.test(e.nodeName)) && (e[g](h.sizesAttr) || e[g]("sizes")))) && E || !n || !e[g]("src") && !e.srcset || e.complete || c(e, h.errorClass)) && c(e, h.lazyClass) || (t = y(e, "lazyunveilread").detail, o && l.updateElem(e, !0, e.offsetWidth), e._lazyRace = !0, _++, ue(e, t, o, r, n))
                },
                _aLSL: Ce
            }, X = t(function (e, t, n, r) {
                var o, i, a;
                if (e._lazysizesWidth = r, e.setAttribute("sizes", r += "px"), z.test(t.nodeName || ""))
                    for (i = 0, a = (o = t.getElementsByTagName("source")).length; i < a; i++) o[i].setAttribute("sizes", r);
                n.detail.dataAttr || b(e, n.detail)
            }), l = {
                _: function () {
                    $ = f.getElementsByClassName(h.autosizesClass), e("resize", V)
                },
                checkElems: V = W(function () {
                    var e, t = $.length;
                    if (t)
                        for (e = 0; e < t; e++) ye($[e])
                }),
                updateElem: ye
            }, U = function e() {
                !e.i && f.getElementsByClassName && (e.i = !0, l._(), G._())
            }, u(function () {
                h.init && U()
            }), p = {
                cfg: h,
                autoSizer: l,
                loader: G,
                init: U,
                uP: b,
                aC: d,
                rC: v,
                hC: c,
                fire: y,
                gW: H,
                rAF: w
            }) : {
                init: function () { },
                cfg: h,
                noSupport: !0
            };

            function ye(e, t, n) {
                var r = e.parentNode;
                r && (n = H(e, r, n), (t = y(e, "lazybeforesizes", {
                    width: n,
                    dataAttr: !!t
                })).defaultPrevented || (n = t.detail.width) && n !== e._lazysizesWidth && X(e, r, t, n))
            }

            function be(e) {
                _--, e && !(_ < 0) && e.target || (_ = 0)
            }

            function xe() {
                var e, t, n, r, o, i, a, s, c, l, u, d = p.elements;
                if ((C = h.loadMode) && _ < 8 && (e = d.length)) {
                    for (t = 0, P++; t < e; t++)
                        if (d[t] && !d[t]._lazyRace)
                            if (!ae || p.prematureUnveil && p.prematureUnveil(d[t])) j(d[t]);
                            else if ((a = d[t][g]("data-expand")) && (o = +a) || (o = k), c || (c = !h.expand || h.expand < 1 ? 500 < m.clientHeight && 500 < m.clientWidth ? 500 : 370 : h.expand, l = (p._defEx = c) * h.expFactor, u = h.hFac, N = null, k < l && _ < 1 && 2 < P && 2 < C && !f.hidden ? (k = l, P = 0) : k = 1 < C && 1 < P && _ < 6 ? c : 0), s !== o && (J = innerWidth + o * u, Z = innerHeight + o, i = -1 * o, s = o), l = d[t].getBoundingClientRect(), (T = l.bottom) >= i && (A = l.top) <= Z && (O = l.right) >= i * u && (L = l.left) <= J && (T || O || L || A) && (h.loadHidden || se(d[t])) && (E && _ < 3 && !a && (C < 3 || P < 4) || function (e, t) {
                                var n, r = e,
                                    o = se(e);
                                for (A -= t, T += t, L -= t, O += t; o && (r = r.offsetParent) && r != f.body && r != m;)(o = 0 < (x(r, "opacity") || 1)) && "visible" != x(r, "overflow") && (n = r.getBoundingClientRect(), o = O > n.left && L < n.right && T > n.top - 1 && A < n.bottom + 1);
                                return o
                            }(d[t], o))) {
                                if (j(d[t]), r = !0, 9 < _) break
                            } else !r && E && !n && _ < 4 && P < 4 && 2 < C && (S[0] || h.preloadAfterLoad) && (S[0] || !a && (T || O || L || A || "auto" != d[t][g](h.sizesAttr))) && (n = S[0] || d[t]);
                    n && !r && j(n)
                }
            }

            function we() {
                ee = !1, te = i.now(), Q()
            }

            function Se(e) {
                var t = e.target;
                t._lazyCache ? delete t._lazyCache : (be(e), d(t, h.loadedClass), v(t, h.loadingClass), q(t, le), y(t, "lazyloaded"))
            }

            function Ee(e) {
                var t, n = e[g](h.srcsetAttr);
                (t = h.customMedia[e[g]("data-media") || e[g]("media")]) && e.setAttribute("media", t), n && e.setAttribute("srcset", n)
            }

            function Ce() {
                3 == h.loadMode && (h.loadMode = 2), de()
            }

            function Ae() {
                E || (i.now() - K < 999 ? u(Ae, 999) : (E = !0, h.loadMode = 3, F(), e("scroll", Ce, !0)))
            }

            function Le() {
                var e = I;
                for (I = he.length ? me : he, pe = !(fe = !0); e.length;) e.shift()();
                fe = !1
            }

            function Oe(e, t) {
                fe && !t ? e.apply(this, arguments) : (I.push(e), pe || (pe = !0, (f.hidden ? u : M)(Le)))
            }
        }(e, e.document, Date);
        e.lazySizes = t, "object" == ("undefined" == typeof module ? "undefined" : _typeof(module)) && module.exports && (module.exports = t)
    }("undefined" != typeof window ? window : {}),
    function (e) {
        "object" === ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).fitvids = e()
    }(function () {
        return function r(o, i, a) {
            function s(n, e) {
                if (!i[n]) {
                    if (!o[n]) {
                        var t = "function" == typeof require && require;
                        if (!e && t) return t(n, !0);
                        if (c) return c(n, !0);
                        e = new Error("Cannot find module '" + n + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }
                    t = i[n] = {
                        exports: {}
                    };
                    o[n][0].call(t.exports, function (e) {
                        var t = o[n][1][e];
                        return s(t || e)
                    }, t, t.exports, r, o, i, a)
                }
                return i[n].exports
            }
            for (var c = "function" == typeof require && require, e = 0; e < a.length; e++) s(a[e]);
            return s
        }({
            1: [function (e, t, n) {
                var i = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object"];

                function a(e, t) {
                    return "string" == typeof e && (t = e, e = document), Array.prototype.slice.call(e.querySelectorAll(t))
                }

                function s(e) {
                    var t;
                    return "string" == typeof e ? e.split(",").map(r).filter(c) : "[object Array]" === Object.prototype.toString.call(e) ? (t = e.map(s).filter(c), [].concat.apply([], t)) : e || []
                }

                function c(e) {
                    return 0 < e.length
                }

                function r(e) {
                    return e.replace(/^\s+|\s+$/g, "")
                }
                t.exports = function (e, t) {
                    t = t || {}, o = e = e || "body", "[object Object]" === Object.prototype.toString.call(o) && (t = e, e = "body"), t.ignore = t.ignore || "", t.players = t.players || "";
                    var r, n, o = a(e);
                    c(o) && (document.getElementById("fit-vids-style") || (document.head || document.getElementsByTagName("head")[0]).appendChild(((e = document.createElement("div")).innerHTML = '<p>x</p><style id="fit-vids-style">.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>', e.childNodes[1])), e = s(t.players), t = s(t.ignore), r = 0 < t.length ? t.join() : null, c(n = i.concat(e).join())) && o.forEach(function (e) {
                        a(e, n).forEach(function (e) {
                            var t, n;
                            r && e.matches(r) || /fluid-width-video-wrapper/.test((e = e).parentNode.className) || (n = parseInt(e.getAttribute("width"), 10), t = parseInt(e.getAttribute("height"), 10), n = isNaN(n) ? e.clientWidth : n, t = (isNaN(t) ? e.clientHeight : t) / n, e.removeAttribute("width"), e.removeAttribute("height"), n = document.createElement("div"), e.parentNode.insertBefore(n, e), n.className = "fluid-width-video-wrapper", n.style.paddingTop = 100 * t + "%", n.appendChild(e))
                        })
                    })
                }
            }, {}]
        }, {}, [1])(1)
    });
var _self = "undefined" != typeof window ? window : "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope ? self : {},
    Prism = function (c) {
        var e, n = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            r = {},
            k = {
                manual: c.Prism && c.Prism.manual,
                disableWorkerMessageHandler: c.Prism && c.Prism.disableWorkerMessageHandler,
                util: {
                    encode: function e(t) {
                        return t instanceof _ ? new _(t.type, e(t.content), t.alias) : Array.isArray(t) ? t.map(e) : t.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/\u00a0/g, " ")
                    },
                    type: function (e) {
                        return Object.prototype.toString.call(e).slice(8, -1)
                    },
                    objId: function (e) {
                        return e.__id || Object.defineProperty(e, "__id", {
                            value: ++t
                        }), e.__id
                    },
                    clone: function n(e, r) {
                        var o, t;
                        switch (r = r || {}, k.util.type(e)) {
                            case "Object":
                                if (t = k.util.objId(e), r[t]) return r[t];
                                for (var i in o = {}, r[t] = o, e) e.hasOwnProperty(i) && (o[i] = n(e[i], r));
                                return o;
                            case "Array":
                                return (t = k.util.objId(e), r[t]) ? r[t] : (o = [], r[t] = o, e.forEach(function (e, t) {
                                    o[t] = n(e, r)
                                }), o);
                            default:
                                return e
                        }
                    },
                    getLanguage: function (e) {
                        for (; e;) {
                            var t = n.exec(e.className);
                            if (t) return t[1].toLowerCase();
                            e = e.parentElement
                        }
                        return "none"
                    },
                    setLanguage: function (e, t) {
                        e.className = e.className.replace(RegExp(n, "gi"), ""), e.classList.add("language-" + t)
                    },
                    currentScript: function () {
                        if ("undefined" == typeof document) return null;
                        if ("currentScript" in document) return document.currentScript;
                        try {
                            throw new Error
                        } catch (e) {
                            var t = (/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(e.stack) || [])[1];
                            if (t) {
                                var n, r = document.getElementsByTagName("script");
                                for (n in r)
                                    if (r[n].src == t) return r[n]
                            }
                            return null
                        }
                    },
                    isActive: function (e, t, n) {
                        for (var r = "no-" + t; e;) {
                            var o = e.classList;
                            if (o.contains(t)) return !0;
                            if (o.contains(r)) return !1;
                            e = e.parentElement
                        }
                        return !!n
                    }
                },
                languages: {
                    plain: r,
                    plaintext: r,
                    text: r,
                    txt: r,
                    extend: function (e, t) {
                        var n, r = k.util.clone(k.languages[e]);
                        for (n in t) r[n] = t[n];
                        return r
                    },
                    insertBefore: function (n, e, t, r) {
                        var o, i = (r = r || k.languages)[n],
                            a = {};
                        for (o in i)
                            if (i.hasOwnProperty(o)) {
                                if (o == e)
                                    for (var s in t) t.hasOwnProperty(s) && (a[s] = t[s]);
                                t.hasOwnProperty(o) || (a[o] = i[o])
                            } var c = r[n];
                        return r[n] = a, k.languages.DFS(k.languages, function (e, t) {
                            t === c && e != n && (this[e] = a)
                        }), a
                    },
                    DFS: function e(t, n, r, o) {
                        o = o || {};
                        var i, a, s, c = k.util.objId;
                        for (i in t) t.hasOwnProperty(i) && (n.call(t, i, t[i], r || i), a = t[i], "Object" !== (s = k.util.type(a)) || o[c(a)] ? "Array" !== s || o[c(a)] || (o[c(a)] = !0, e(a, n, i, o)) : (o[c(a)] = !0, e(a, n, null, o)))
                    }
                },
                plugins: {},
                highlightAll: function (e, t) {
                    k.highlightAllUnder(document, e, t)
                },
                highlightAllUnder: function (e, t, n) {
                    var r = {
                        callback: n,
                        container: e,
                        selector: 'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'
                    };
                    k.hooks.run("before-highlightall", r), r.elements = Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)), k.hooks.run("before-all-elements-highlight", r);
                    for (var o, i = 0; o = r.elements[i++];) k.highlightElement(o, !0 === t, r.callback)
                },
                highlightElement: function (e, t, n) {
                    var r = k.util.getLanguage(e),
                        o = k.languages[r],
                        i = (k.util.setLanguage(e, r), e.parentElement);
                    i && "pre" === i.nodeName.toLowerCase() && k.util.setLanguage(i, r);
                    var a = {
                        element: e,
                        language: r,
                        grammar: o,
                        code: e.textContent
                    };

                    function s(e) {
                        a.highlightedCode = e, k.hooks.run("before-insert", a), a.element.innerHTML = a.highlightedCode, k.hooks.run("after-highlight", a), k.hooks.run("complete", a), n && n.call(a.element)
                    }
                    k.hooks.run("before-sanity-check", a), (i = a.element.parentElement) && "pre" === i.nodeName.toLowerCase() && !i.hasAttribute("tabindex") && i.setAttribute("tabindex", "0"), a.code ? (k.hooks.run("before-highlight", a), a.grammar ? t && c.Worker ? ((r = new Worker(k.filename)).onmessage = function (e) {
                        s(e.data)
                    }, r.postMessage(JSON.stringify({
                        language: a.language,
                        code: a.code,
                        immediateClose: !0
                    }))) : s(k.highlight(a.code, a.grammar, a.language)) : s(k.util.encode(a.code))) : (k.hooks.run("complete", a), n && n.call(a.element))
                },
                highlight: function (e, t, n) {
                    e = {
                        code: e,
                        grammar: t,
                        language: n
                    };
                    if (k.hooks.run("before-tokenize", e), e.grammar) return e.tokens = k.tokenize(e.code, e.grammar), k.hooks.run("after-tokenize", e), _.stringify(k.util.encode(e.tokens), e.language);
                    throw new Error('The language "' + e.language + '" has no grammar.')
                },
                tokenize: function (e, t) {
                    var n = t.rest;
                    if (n) {
                        for (var r in n) t[r] = n[r];
                        delete t.rest
                    }
                    for (var o = new l, i = (F(o, o.head, e), ! function e(t, n, r, o, i, a) {
                        for (var s in r)
                            if (r.hasOwnProperty(s) && r[s]) {
                                var c = r[s];
                                c = Array.isArray(c) ? c : [c];
                                for (var l = 0; l < c.length; ++l) {
                                    if (a && a.cause == s + "," + l) return;
                                    for (var u, d = c[l], f = d.inside, p = !!d.lookbehind, h = !!d.greedy, m = d.alias, g = (h && !d.pattern.global && (u = d.pattern.toString().match(/[imsuy]*$/)[0], d.pattern = RegExp(d.pattern.source, u + "g")), d.pattern || d), v = o.next, y = i; v !== n.tail && !(a && y >= a.reach); y += v.value.length, v = v.next) {
                                        var b = v.value;
                                        if (n.length > t.length) return;
                                        if (!(b instanceof _)) {
                                            var x, w = 1;
                                            if (h) {
                                                if (!(x = P(g, y, t, p)) || x.index >= t.length) break;
                                                var S = x.index,
                                                    E = x.index + x[0].length,
                                                    C = y;
                                                for (C += v.value.length; C <= S;) v = v.next, C += v.value.length;
                                                if (C -= v.value.length, y = C, v.value instanceof _) continue;
                                                for (var A = v; A !== n.tail && (C < E || "string" == typeof A.value); A = A.next) w++, C += A.value.length;
                                                w--, b = t.slice(y, C), x.index -= y
                                            } else if (!(x = P(g, 0, b, p))) continue;
                                            var S = x.index,
                                                L = x[0],
                                                O = b.slice(0, S),
                                                T = b.slice(S + L.length),
                                                b = y + b.length,
                                                N = (a && b > a.reach && (a.reach = b), v.prev),
                                                O = (O && (N = F(n, N, O), y += O.length), j(n, N, w), new _(s, f ? k.tokenize(L, f) : L, m, L));
                                            v = F(n, N, O), T && F(n, v, T), 1 < w && (L = {
                                                cause: s + "," + l,
                                                reach: b
                                            }, e(t, n, r, v.prev, y, L), a) && L.reach > a.reach && (a.reach = L.reach)
                                        }
                                    }
                                }
                            }
                    }(e, o, t, o.head, 0), o), a = [], s = i.head.next; s !== i.tail;) a.push(s.value), s = s.next;
                    return a
                },
                hooks: {
                    all: {},
                    add: function (e, t) {
                        var n = k.hooks.all;
                        n[e] = n[e] || [], n[e].push(t)
                    },
                    run: function (e, t) {
                        var n = k.hooks.all[e];
                        if (n && n.length)
                            for (var r, o = 0; r = n[o++];) r(t)
                    }
                },
                Token: _
            };

        function _(e, t, n, r) {
            this.type = e, this.content = t, this.alias = n, this.length = 0 | (r || "").length
        }

        function P(e, t, n, r) {
            e.lastIndex = t;
            t = e.exec(n);
            return t && r && t[1] && (e = t[1].length, t.index += e, t[0] = t[0].slice(e)), t
        }

        function l() {
            var e = {
                value: null,
                prev: null,
                next: null
            },
                t = {
                    value: null,
                    prev: e,
                    next: null
                };
            e.next = t, this.head = e, this.tail = t, this.length = 0
        }

        function F(e, t, n) {
            var r = t.next,
                n = {
                    value: n,
                    prev: t,
                    next: r
                };
            return t.next = n, r.prev = n, e.length++, n
        }

        function j(e, t, n) {
            for (var r = t.next, o = 0; o < n && r !== e.tail; o++) r = r.next;
            (t.next = r).prev = t, e.length -= o
        }
        return c.Prism = k, _.stringify = function t(e, n) {
            if ("string" == typeof e) return e;
            var r;
            if (Array.isArray(e)) return r = "", e.forEach(function (e) {
                r += t(e, n)
            }), r;
            var o, i = {
                type: e.type,
                content: t(e.content, n),
                tag: "span",
                classes: ["token", e.type],
                attributes: {},
                language: n
            },
                e = e.alias,
                a = (e && (Array.isArray(e) ? Array.prototype.push.apply(i.classes, e) : i.classes.push(e)), k.hooks.run("wrap", i), "");
            for (o in i.attributes) a += " " + o + '="' + (i.attributes[o] || "").replace(/"/g, "&quot;") + '"';
            return "<" + i.tag + ' class="' + i.classes.join(" ") + '"' + a + ">" + i.content + "</" + i.tag + ">"
        }, c.document ? ((r = k.util.currentScript()) && (k.filename = r.src, r.hasAttribute("data-manual")) && (k.manual = !0), k.manual || ("loading" === (e = document.readyState) || "interactive" === e && r && r.defer ? document.addEventListener("DOMContentLoaded", o) : window.requestAnimationFrame ? window.requestAnimationFrame(o) : window.setTimeout(o, 16))) : c.addEventListener && !k.disableWorkerMessageHandler && c.addEventListener("message", function (e) {
            var e = JSON.parse(e.data),
                t = e.language,
                n = e.code,
                e = e.immediateClose;
            c.postMessage(k.highlight(n, k.languages[t], t)), e && c.close()
        }, !1), k;

        function o() {
            k.manual || k.highlightAll()
        }
    }(_self);

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}
"undefined" != typeof module && module.exports && (module.exports = Prism), "undefined" != typeof global && (global.Prism = Prism), Prism.languages.markup = {
    comment: {
        pattern: /<!--(?:(?!<!--)[\s\S])*?-->/,
        greedy: !0
    },
    prolog: {
        pattern: /<\?[\s\S]+?\?>/,
        greedy: !0
    },
    doctype: {
        pattern: /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
        greedy: !0,
        inside: {
            "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null
            },
            string: {
                pattern: /"[^"]*"|'[^']*'/,
                greedy: !0
            },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/i,
            name: /[^\s<>'"]+/
        }
    },
    cdata: {
        pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
        greedy: !0
    },
    tag: {
        pattern: /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
        greedy: !0,
        inside: {
            tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: {
                    punctuation: /^<\/?/,
                    namespace: /^[^\s>\/:]+:/
                }
            },
            "special-attr": [],
            "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                    punctuation: [{
                        pattern: /^=/,
                        alias: "attr-equals"
                    }, {
                        pattern: /^(\s*)["']|["']$/,
                        lookbehind: !0
                    }]
                }
            },
            punctuation: /\/?>/,
            "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: {
                    namespace: /^[^\s>\/:]+:/
                }
            }
        }
    },
    entity: [{
        pattern: /&[\da-z]{1,8};/i,
        alias: "named-entity"
    }, /&#x?[\da-f]{1,8};/i]
}, Prism.languages.markup.tag.inside["attr-value"].inside.entity = Prism.languages.markup.entity, Prism.languages.markup.doctype.inside["internal-subset"].inside = Prism.languages.markup, Prism.hooks.add("wrap", function (e) {
    "entity" === e.type && (e.attributes.title = e.content.replace(/&amp;/, "&"))
}), Object.defineProperty(Prism.languages.markup.tag, "addInlined", {
    value: function (e, t) {
        var n = {},
            n = (n["language-" + t] = {
                pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
                lookbehind: !0,
                inside: Prism.languages[t]
            }, n.cdata = /^<!\[CDATA\[|\]\]>$/i, {
                "included-cdata": {
                    pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                    inside: n
                }
            }),
            t = (n["language-" + t] = {
                pattern: /[\s\S]+/,
                inside: Prism.languages[t]
            }, {});
        t[e] = {
            pattern: RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g, function () {
                return e
            }), "i"),
            lookbehind: !0,
            greedy: !0,
            inside: n
        }, Prism.languages.insertBefore("markup", "cdata", t)
    }
}), Object.defineProperty(Prism.languages.markup.tag, "addAttribute", {
    value: function (e, t) {
        Prism.languages.markup.tag.inside["special-attr"].push({
            pattern: RegExp(/(^|["'\s])/.source + "(?:" + e + ")" + /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source, "i"),
            lookbehind: !0,
            inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                    pattern: /=[\s\S]+/,
                    inside: {
                        value: {
                            pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                            lookbehind: !0,
                            alias: [t, "language-" + t],
                            inside: Prism.languages[t]
                        },
                        punctuation: [{
                            pattern: /^=/,
                            alias: "attr-equals"
                        }, /"|'/]
                    }
                }
            }
        })
    }
}), Prism.languages.html = Prism.languages.markup, Prism.languages.mathml = Prism.languages.markup, Prism.languages.svg = Prism.languages.markup, Prism.languages.xml = Prism.languages.extend("markup", {}), Prism.languages.ssml = Prism.languages.xml, Prism.languages.atom = Prism.languages.xml, Prism.languages.rss = Prism.languages.xml,
    function (e) {
        var t = /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/,
            t = (e.languages.css = {
                comment: /\/\*[\s\S]*?\*\//,
                atrule: {
                    pattern: RegExp("@[\\w-](?:" + /[^;{\s"']|\s+(?!\s)/.source + "|" + t.source + ")*?" + /(?:;|(?=\s*\{))/.source),
                    inside: {
                        rule: /^@[\w-]+/,
                        "selector-function-argument": {
                            pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                            lookbehind: !0,
                            alias: "selector"
                        },
                        keyword: {
                            pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                            lookbehind: !0
                        }
                    }
                },
                url: {
                    pattern: RegExp("\\burl\\((?:" + t.source + "|" + /(?:[^\\\r\n()"']|\\[\s\S])*/.source + ")\\)", "i"),
                    greedy: !0,
                    inside: {
                        function: /^url/i,
                        punctuation: /^\(|\)$/,
                        string: {
                            pattern: RegExp("^" + t.source + "$"),
                            alias: "url"
                        }
                    }
                },
                selector: {
                    pattern: RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" + t.source + ")*(?=\\s*\\{)"),
                    lookbehind: !0
                },
                string: {
                    pattern: t,
                    greedy: !0
                },
                property: {
                    pattern: /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
                    lookbehind: !0
                },
                important: /!important\b/i,
                function: {
                    pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
                    lookbehind: !0
                },
                punctuation: /[(){};:,]/
            }, e.languages.css.atrule.inside.rest = e.languages.css, e.languages.markup);
        t && (t.tag.addInlined("style", "css"), t.tag.addAttribute("style", "css"))
    }(Prism), Prism.languages.clike = {
        comment: [{
            pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
            lookbehind: !0,
            greedy: !0
        }, {
            pattern: /(^|[^\\:])\/\/.*/,
            lookbehind: !0,
            greedy: !0
        }],
        string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0
        },
        "class-name": {
            pattern: /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: {
                punctuation: /[.\\]/
            }
        },
        keyword: /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
        boolean: /\b(?:false|true)\b/,
        function: /\b\w+(?=\()/,
        number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
        operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
        punctuation: /[{}[\];(),.:]/
    }, Prism.languages.javascript = Prism.languages.extend("clike", {
        "class-name": [Prism.languages.clike["class-name"], {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
            lookbehind: !0
        }],
        keyword: [{
            pattern: /((?:^|\})\s*)catch\b/,
            lookbehind: !0
        }, {
            pattern: /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
            lookbehind: !0
        }],
        function: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
        number: {
            pattern: RegExp(/(^|[^\w$])/.source + "(?:" + /NaN|Infinity/.source + "|" + /0[bB][01]+(?:_[01]+)*n?/.source + "|" + /0[oO][0-7]+(?:_[0-7]+)*n?/.source + "|" + /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source + "|" + /\d+(?:_\d+)*n/.source + "|" + /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source + ")" + /(?![\w$])/.source),
            lookbehind: !0
        },
        operator: /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/
    }), Prism.languages.javascript["class-name"][0].pattern = /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/, Prism.languages.insertBefore("javascript", "keyword", {
        regex: {
            pattern: RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source + /\//.source + "(?:" + /(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source + "|" + /(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source + ")" + /(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),
            lookbehind: !0,
            greedy: !0,
            inside: {
                "regex-source": {
                    pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                    lookbehind: !0,
                    alias: "language-regex",
                    inside: Prism.languages.regex
                },
                "regex-delimiter": /^\/|\/$/,
                "regex-flags": /^[a-z]+$/
            }
        },
        "function-variable": {
            pattern: /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function"
        },
        parameter: [{
            pattern: /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }, {
            pattern: /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
            lookbehind: !0,
            inside: Prism.languages.javascript
        }],
        constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/
    }), Prism.languages.insertBefore("javascript", "string", {
        hashbang: {
            pattern: /^#!.*/,
            greedy: !0,
            alias: "comment"
        },
        "template-string": {
            pattern: /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
                "template-punctuation": {
                    pattern: /^`|`$/,
                    alias: "string"
                },
                interpolation: {
                    pattern: /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                    lookbehind: !0,
                    inside: {
                        "interpolation-punctuation": {
                            pattern: /^\$\{|\}$/,
                            alias: "punctuation"
                        },
                        rest: Prism.languages.javascript
                    }
                },
                string: /[\s\S]+/
            }
        },
        "string-property": {
            pattern: /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property"
        }
    }), Prism.languages.insertBefore("javascript", "operator", {
        "literal-property": {
            pattern: /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property"
        }
    }), Prism.languages.markup && (Prism.languages.markup.tag.addInlined("script", "javascript"), Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source, "javascript")), Prism.languages.js = Prism.languages.javascript,
    function () {
        var r, a, s, c, e;

        function l(e, n, r) {
            var o = new XMLHttpRequest;
            o.open("GET", e, !0), o.onreadystatechange = function () {
                var e, t;
                4 == o.readyState && (o.status < 400 && o.responseText ? n(o.responseText) : 400 <= o.status ? r((e = o.status, t = o.statusText, "✖ Error " + e + " while fetching file: " + t)) : r("✖ Error: File does not exist or is empty"))
            }, o.send(null)
        }
        void 0 !== Prism && "undefined" != typeof document && (Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), r = {
            js: "javascript",
            py: "python",
            rb: "ruby",
            ps1: "powershell",
            psm1: "powershell",
            sh: "bash",
            bat: "batch",
            h: "c",
            tex: "latex"
        }, c = "pre[data-src]:not([" + (a = "data-src-status") + '="loaded"]):not([' + a + '="' + (s = "loading") + '"])', Prism.hooks.add("before-highlightall", function (e) {
            e.selector += ", " + c
        }), Prism.hooks.add("before-sanity-check", function (e) {
            var o, t, n, i = e.element;
            i.matches(c) && (e.code = "", i.setAttribute(a, s), (o = i.appendChild(document.createElement("CODE"))).textContent = "Loading…", t = i.getAttribute("data-src"), "none" === (e = e.language) && (n = (/\.(\w+)$/.exec(t) || [, "none"])[1], e = r[n] || n), Prism.util.setLanguage(o, e), Prism.util.setLanguage(i, e), (n = Prism.plugins.autoloader) && n.loadLanguages(e), l(t, function (e) {
                i.setAttribute(a, "loaded");
                var t, n, r = function (e) {
                    var t, n;
                    if (e = /^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e || "")) return t = Number(e[1]), n = e[2], e = e[3], n ? e ? [t, Number(e)] : [t, void 0] : [t, t]
                }(i.getAttribute("data-range"));
                r && (t = e.split(/\r\n?|\n/g), n = r[0], r = null == r[1] ? t.length : r[1], n < 0 && (n += t.length), n = Math.max(0, Math.min(n - 1, t.length)), r < 0 && (r += t.length), r = Math.max(0, Math.min(r, t.length)), e = t.slice(n, r).join("\n"), i.hasAttribute("data-start") || i.setAttribute("data-start", String(n + 1))), o.textContent = e, Prism.highlightElement(o)
            }, function (e) {
                i.setAttribute(a, "failed"), o.textContent = e
            }))
        }), e = !(Prism.plugins.fileHighlight = {
            highlight: function (e) {
                for (var t, n = (e || document).querySelectorAll(c), r = 0; t = n[r++];) Prism.highlightElement(t)
            }
        }), Prism.fileHighlight = function () {
            e || (console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."), e = !0), Prism.plugins.fileHighlight.highlight.apply(this, arguments)
        })
    }(),
    function (e, t) {
        if ("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) && "object" == ("undefined" == typeof module ? "undefined" : _typeof(module))) module.exports = t();
        else if ("function" == typeof define && define.amd) define([], t);
        else {
            var n, r = t();
            for (n in r) ("object" == ("undefined" == typeof exports ? "undefined" : _typeof(exports)) ? exports : e)[n] = r[n]
        }
    }(window, function () {
        return n = [function (L, e, t) {
            "use strict";
            t.r(e);
            var K = "fslightbox-",
                t = "".concat(K, "styles"),
                s = "".concat(K, "cursor-grabbing"),
                J = "".concat(K, "full-dimension"),
                Z = "".concat(K, "flex-centered"),
                h = "".concat(K, "open"),
                Q = "".concat(K, "transform-transition"),
                ee = "".concat(K, "absoluted"),
                a = "".concat(K, "slide-btn"),
                c = "".concat(a, "-container"),
                f = "".concat(K, "fade-in"),
                p = "".concat(K, "fade-out"),
                te = f + "-strong",
                d = p + "-strong",
                e = "".concat(K, "opacity-"),
                u = "".concat(e, "1"),
                l = "".concat(K, "source");

            function n(e) {
                return (n = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
                    return _typeof(e)
                } : function (e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : _typeof(e)
                })(e)
            }

            function ne(e) {
                var i, e = e.props,
                    a = 0,
                    s = {},
                    t = (this.getSourceTypeFromLocalStorageByUrl = function (e) {
                        return i[e] || t(e)
                    }, this.handleReceivedSourceTypeForUrl = function (e, t) {
                        if (!1 === s[t] && (a--, "invalid" !== e ? s[t] = e : delete s[t], 0 === a)) {
                            var n, r = i,
                                o = s;
                            for (n in o) r[n] = o[n];
                            localStorage.setItem("fslightbox-types", JSON.stringify(i))
                        }
                    }, function (e) {
                        a++, s[e] = !1
                    });
                e.disableLocalStorage ? (this.getSourceTypeFromLocalStorageByUrl = function () { }, this.handleReceivedSourceTypeForUrl = function () { }) : (i = JSON.parse(localStorage.getItem("fslightbox-types"))) || (i = {}, this.getSourceTypeFromLocalStorageByUrl = t)
            }

            function m(e, t, n, r) {
                var o = e.data,
                    i = e.elements.sources,
                    a = n / r,
                    s = 0,
                    c = (this.adjustSize = function () {
                        if ((s = o.maxSourceWidth / a) < o.maxSourceHeight) return n < o.maxSourceWidth && (s = r), c();
                        s = r > o.maxSourceHeight ? o.maxSourceHeight : r, c()
                    }, function () {
                        i[t].style.width = s * a + "px", i[t].style.height = s + "px"
                    })
            }

            function g(e, n) {
                var r = this,
                    o = e.collections.sourceSizers,
                    t = e.elements,
                    i = t.sourceAnimationWrappers,
                    a = t.sourceMainWrappers,
                    s = t.sources,
                    c = e.resolve;

                function l(e, t) {
                    o[n] = c(m, [n, e, t]), o[n].adjustSize()
                }
                this.runActions = function (e, t) {
                    s[n].classList.add(u), i[n].classList.add(te), a[n].removeChild(a[n].firstChild), l(e, t), r.runActions = l
                }
            }

            function v(e, t) {
                var n, r = this,
                    o = e.elements.sources,
                    i = e.props,
                    a = (0, e.resolve)(g, [t]);
                this.handleImageLoad = function (e) {
                    var e = e.target,
                        t = e.naturalWidth,
                        e = e.naturalHeight;
                    a.runActions(t, e)
                }, this.handleVideoLoad = function (e) {
                    var e = e.target,
                        t = e.videoWidth,
                        e = e.videoHeight;
                    n = !0, a.runActions(t, e)
                }, this.handleNotMetaDatedVideoLoad = function () {
                    n || r.handleYoutubeLoad()
                }, this.handleYoutubeLoad = function () {
                    var e = 1920,
                        t = 1080;
                    i.maxYoutubeDimensions && (e = i.maxYoutubeDimensions.width, t = i.maxYoutubeDimensions.height), a.runActions(e, t)
                }, this.handleCustomLoad = function () {
                    setTimeout(function () {
                        var e = o[t];
                        a.runActions(e.offsetWidth, e.offsetHeight)
                    })
                }
            }

            function y(e, t, n) {
                var r = e.elements.sources,
                    e = e.props.customClasses,
                    e = e[t] || "";
                r[t].className = n + " " + e
            }

            function b(e, t) {
                var n, r = e.elements.sources,
                    o = e.props.customAttributes;
                for (n in o[t]) r[t].setAttribute(n, o[t][n])
            }

            function x(e, t) {
                var n = e.collections.sourceLoadHandlers,
                    r = e.elements,
                    o = r.sources,
                    r = r.sourceAnimationWrappers,
                    i = e.props.sources;
                o[t] = document.createElement("img"), y(e, t, l), o[t].src = i[t], o[t].onload = n[t].handleImageLoad, b(e, t), r[t].appendChild(o[t])
            }

            function w(e, t) {
                var n = e.collections.sourceLoadHandlers,
                    r = e.elements,
                    o = r.sources,
                    r = r.sourceAnimationWrappers,
                    i = e.props,
                    a = i.sources,
                    i = i.videosPosters,
                    e = (o[t] = document.createElement("video"), y(e, t, l), o[t].src = a[t], o[t].onloadedmetadata = function (e) {
                        n[t].handleVideoLoad(e)
                    }, o[t].controls = !0, b(e, t), i[t] && (o[t].poster = i[t]), document.createElement("source"));
                e.src = a[t], o[t].appendChild(e), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), r[t].appendChild(o[t])
            }

            function O(e, t) {
                var n = e.collections.sourceLoadHandlers,
                    r = e.elements,
                    o = r.sources,
                    r = r.sourceAnimationWrappers,
                    i = e.props.sources;
                o[t] = document.createElement("iframe"), y(e, t, "".concat(l, " ").concat(K, "youtube-iframe")), o[t].src = "https://www.youtube.com/embed/".concat(i[t].match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?enablejsapi=1"), o[t].allowFullscreen = !0, b(e, t), r[t].appendChild(o[t]), n[t].handleYoutubeLoad()
            }

            function T(e, t) {
                var n = e.collections.sourceLoadHandlers,
                    r = e.elements,
                    o = r.sources,
                    r = r.sourceAnimationWrappers,
                    i = e.props.sources;
                o[t] = i[t], y(e, t, "".concat(o[t].className, " ").concat(l)), r[t].appendChild(o[t]), n[t].handleCustomLoad()
            }

            function N(e, t) {
                var n = e.elements,
                    r = n.sources,
                    o = n.sourceAnimationWrappers,
                    n = n.sourceMainWrappers;
                e.props.sources, r[t] = document.createElement("div"), r[t].className = "".concat(K, "invalid-file-wrapper ").concat(Z), r[t].innerHTML = "Invalid source", o[t].classList.add(te), o[t].appendChild(r[t]), n[t].removeChild(n[t].firstChild)
            }

            function ae(r) {
                var e = r.collections,
                    o = e.sourceLoadHandlers,
                    i = e.sourcesRenderFunctions,
                    a = r.core.sourceDisplayFacade,
                    s = r.resolve;
                this.runActionsForSourceTypeAndIndex = function (e, t) {
                    var n;
                    switch ("invalid" !== e && (o[t] = s(v, [t])), e) {
                        case "image":
                            n = x;
                            break;
                        case "video":
                            n = w;
                            break;
                        case "youtube":
                            n = O;
                            break;
                        case "custom":
                            n = T;
                            break;
                        default:
                            n = N
                    }
                    i[t] = function () {
                        return n(r, t)
                    }, a.displaySourcesWhichShouldBeDisplayed()
                }
            }

            function k() {
                var t, n, r, o = function (e) {
                    var t = document.createElement("a");
                    return t.href = e, "www.youtube.com" === t.hostname
                },
                    i = function (e) {
                        return e.slice(0, e.indexOf("/"))
                    };

                function a() {
                    if (4 !== r.readyState) {
                        if (2 === r.readyState) {
                            var e;
                            switch (i(r.getResponseHeader("content-type"))) {
                                case "image":
                                    e = "image";
                                    break;
                                case "video":
                                    e = "video";
                                    break;
                                default:
                                    e = "invalid"
                            }
                            r.onreadystatechange = null, r.abort(), n(e)
                        }
                    } else n("invalid")
                }
                this.setUrlToCheck = function (e) {
                    t = e
                }, this.getSourceType = function (e) {
                    if (o(t)) return e("youtube");
                    n = e, (r = new XMLHttpRequest).onreadystatechange = a, r.open("GET", t, !0), r.send()
                }
            }

            function se(e, n, r) {
                var t = e.props,
                    o = t.types,
                    i = t.type,
                    a = t.sources,
                    s = e.resolve;
                this.getTypeSetByClientForIndex = function (e) {
                    var t;
                    return o && o[e] ? t = o[e] : i && (t = i), t
                }, this.retrieveTypeWithXhrForIndex = function (t) {
                    var e = s(k);
                    e.setUrlToCheck(a[t]), e.getSourceType(function (e) {
                        n.handleReceivedSourceTypeForUrl(e, a[t]), r.runActionsForSourceTypeAndIndex(e, t)
                    })
                }
            }

            function S(e, t, n, r) {
                var o = document.createElementNS("http://www.w3.org/2000/svg", "svg"),
                    t = (o.setAttributeNS(null, "width", t), o.setAttributeNS(null, "height", t), o.setAttributeNS(null, "viewBox", n), document.createElementNS("http://www.w3.org/2000/svg", "path"));
                return t.setAttributeNS(null, "class", "".concat(K, "svg-path")), t.setAttributeNS(null, "d", r), o.appendChild(t), e.appendChild(o), o
            }

            function E(e, t) {
                var n = document.createElement("div");
                return n.className = "".concat(K, "toolbar-button ").concat(Z), n.title = t, e.appendChild(n), n
            }

            function ce(e) {
                var t, n, r, o, i, a, s, c, l, u, d = e.props.sources,
                    f = e.elements.container,
                    p = document.createElement("div");
                p.className = "".concat(K, "nav"), f.appendChild(p), f = e, o = p, (u = document.createElement("div")).className = "".concat(K, "toolbar"), o.appendChild(u), o = f.componentsServices, i = f.core.fullscreenToggler, a = f.data, s = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", (c = E(u)).title = "Enter fullscreen", l = S(c, "20px", "0 0 18 18", s), o.enterFullscreen = function () {
                    a.isFullscreenOpen = !0, c.title = "Exit fullscreen", l.setAttributeNS(null, "width", "24px"), l.setAttributeNS(null, "height", "24px"), l.setAttributeNS(null, "viewBox", "0 0 950 1024"), l.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z")
                }, o.exitFullscreen = function () {
                    a.isFullscreenOpen = !1, c.title = "Enter fullscreen", l.setAttributeNS(null, "width", "20px"), l.setAttributeNS(null, "height", "20px"), l.setAttributeNS(null, "viewBox", "0 0 18 18"), l.firstChild.setAttributeNS(null, "d", s)
                }, c.onclick = function () {
                    a.isFullscreenOpen ? i.exitFullscreen() : i.enterFullscreen()
                }, o = f, (f = E(u, "Close")).onclick = o.core.lightboxCloser.closeLightbox, S(f, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"), 1 < d.length && (u = p, o = e.componentsServices, f = e.props.sources, e.stageIndexes, (t = document.createElement("div")).className = "".concat(K, "slide-number-container"), (n = document.createElement("div")).className = Z, r = document.createElement("span"), o.setSlideNumber = function (e) {
                    return r.innerHTML = e
                }, (o = document.createElement("span")).className = "".concat(K, "slash"), (d = document.createElement("div")).innerHTML = f.length, t.appendChild(n), n.appendChild(r), n.appendChild(o), n.appendChild(d), u.appendChild(t), setTimeout(function () {
                    55 < n.offsetWidth && (t.style.justifyContent = "flex-start")
                }))
            }

            function le(e, t) {
                var n = this,
                    r = e.elements.sourceMainWrappers,
                    o = e.props,
                    i = 0,
                    a = (this.byValue = function (e) {
                        return i = e, n
                    }, this.negative = function () {
                        a(-s())
                    }, this.zero = function () {
                        a(0)
                    }, this.positive = function () {
                        a(s())
                    }, function (e) {
                        r[t].style.transform = "translateX(".concat(e + i, "px)"), i = 0
                    }),
                    s = function () {
                        return (1 + o.slideDistance) * innerWidth
                    }
            }

            function re(e, t, n, r) {
                var e = e.elements.container,
                    o = n.charAt(0).toUpperCase() + n.slice(1),
                    i = document.createElement("div");
                i.className = "".concat(c, " ").concat(c, "-").concat(n), i.title = "".concat(o, " slide"), i.onclick = t, n = i, o = r, (t = document.createElement("div")).className = "".concat(a, " ").concat(Z), S(t, "20px", "0 0 20 20", o), n.appendChild(t), e.appendChild(i)
            }

            function oe(e, t) {
                e = e.classList;
                e.contains(t) && e.remove(t)
            }

            function ue(e) {
                var t = this,
                    n = e.core,
                    r = n.eventsDispatcher,
                    o = n.fullscreenToggler,
                    i = n.globalEventsController,
                    a = n.scrollbarRecompensor,
                    s = e.data,
                    c = e.elements,
                    l = e.props,
                    u = e.sourcePointerProps;
                this.isLightboxFadingOut = !1, this.runActions = function () {
                    t.isLightboxFadingOut = !0, c.container.classList.add(d), i.removeListeners(), l.exitFullscreenOnClose && s.isFullscreenOpen && o.exitFullscreen(), setTimeout(function () {
                        t.isLightboxFadingOut = !1, u.isPointering = !1, c.container.classList.remove(d), document.documentElement.classList.remove(h), a.removeRecompense(), document.body.removeChild(c.container), r.dispatch("onClose")
                    }, 270)
                }
            }

            function de(e) {
                var n, r, o = e.collections.sourceMainWrappersTransformers,
                    t = e.componentsServices,
                    i = e.core,
                    a = i.classFacade,
                    s = i.slideIndexChanger,
                    c = i.sourceDisplayFacade,
                    l = i.stageManager,
                    u = e.elements.sourceAnimationWrappers,
                    d = e.stageIndexes;
                n = function () {
                    a.removeFromEachElementClassIfContains("sourceAnimationWrappers", p)
                }, r = [];
                s.changeTo = function (e) {
                    d.current = e, l.updateStageIndexes(), t.setSlideNumber(e + 1), c.displaySourcesWhichShouldBeDisplayed()
                }, s.jumpTo = function (e) {
                    var t = d.current;
                    s.changeTo(e), a.removeFromEachElementClassIfContains("sourceMainWrappers", Q), oe(u[t], te), oe(u[t], f), u[t].classList.add(p), oe(u[e], te), oe(u[e], p), u[e].classList.add(f), r.push(!0), setTimeout(function () {
                        r.pop(), r.length || n()
                    }, 300), o[e].zero(), setTimeout(function () {
                        t !== d.current && o[t].negative()
                    }, 270)
                }
            }

            function fe(e) {
                var e = e.core,
                    t = e.lightboxCloser,
                    n = e.fullscreenToggler,
                    r = e.slideChangeFacade;
                this.listener = function (e) {
                    switch (e.key) {
                        case "Escape":
                            t.closeLightbox();
                            break;
                        case "ArrowLeft":
                            r.changeToPrevious();
                            break;
                        case "ArrowRight":
                            r.changeToNext();
                            break;
                        case "F11":
                            e.preventDefault(), n.enterFullscreen()
                    }
                }
            }

            function _(e) {
                var n = e.collections.sourceMainWrappersTransformers,
                    r = e.elements,
                    o = e.sourcePointerProps,
                    i = e.stageIndexes;

                function a(e, t) {
                    n[e].byValue(o.swipedX)[t]()
                }
                this.runActionsForEvent = function (e) {
                    var t, n;
                    r.container.contains(r.slideSwipingHoverer) || r.container.appendChild(r.slideSwipingHoverer), (n = r.container.classList).contains(t = s) || n.add(t), o.swipedX = e.screenX - o.downScreenX, a(i.current, "zero"), void 0 !== i.previous && 0 < o.swipedX ? a(i.previous, "negative") : void 0 !== i.next && o.swipedX < 0 && a(i.next, "positive")
                }
            }

            function pe(e) {
                var t = e.props.sources,
                    n = e.resolve,
                    r = e.sourcePointerProps,
                    o = n(_);
                1 === t.length ? this.listener = function () {
                    r.swipedX = 1
                } : this.listener = function (e) {
                    r.isPointering && o.runActionsForEvent(e)
                }
            }

            function P(e) {
                var t = e.collections.sourceMainWrappersTransformers,
                    n = e.core.slideIndexChanger,
                    r = e.elements.sourceMainWrappers,
                    o = e.stageIndexes,
                    i = (this.runPositiveSwipedXActions = function () {
                        void 0 !== o.previous && (i("positive"), n.changeTo(o.previous)), i("zero")
                    }, this.runNegativeSwipedXActions = function () {
                        void 0 !== o.next && (i("negative"), n.changeTo(o.next)), i("zero")
                    }, function (e) {
                        r[o.current].classList.add(Q), t[o.current][e]()
                    })
            }

            function C(e, t) {
                e.contains(t) && e.removeChild(t)
            }

            function F(e) {
                var t = e.core.lightboxCloser,
                    n = e.elements,
                    r = e.resolve,
                    o = e.sourcePointerProps,
                    i = r(P);
                this.runNoSwipeActions = function () {
                    C(n.container, n.slideSwipingHoverer), o.isSourceDownEventTarget || t.closeLightbox(), o.isPointering = !1
                }, this.runActions = function () {
                    0 < o.swipedX ? i.runPositiveSwipedXActions() : i.runNegativeSwipedXActions(), C(n.container, n.slideSwipingHoverer), n.container.classList.remove(s), o.isPointering = !1
                }
            }

            function he(e) {
                var t = e.resolve,
                    n = e.sourcePointerProps,
                    r = t(F);
                this.listener = function () {
                    n.isPointering && (n.swipedX ? r.runActions() : r.runNoSwipeActions())
                }
            }

            function j(e) {
                var r, t, n, o, i, a, s, c, l, u, d, R, f, M, z, p, B, h, m, D, g, v, y, b, x, w, S, E, C, q = e.core.eventsDispatcher,
                    A = e.data,
                    L = e.elements,
                    H = e.props.sources;
                A.isInitialized = !0, A.scrollbarWidth = function (e) {
                    if (!(e = e.props.disableLocalStorage)) {
                        var t = localStorage.getItem("fslightbox-scrollbar-width");
                        if (t) return t
                    }
                    t = document.createElement("div"), (n = t.style).visibility = "hidden", n.width = "100px", n.msOverflowStyle = "scrollbar", n.overflow = "scroll";
                    var n = t,
                        r = ((o = document.createElement("div")).style.width = "100%", document.body.appendChild(n), n.offsetWidth),
                        o = (n.appendChild(o), o.offsetWidth),
                        n = (document.body.removeChild(n), r - o);
                    return e || localStorage.setItem("fslightbox-scrollbar-width", n.toString()), n
                }(e);
                for (var W = e.collections.sourceMainWrappersTransformers, G = e.props.sources, U = e.resolve, O = 0; O < G.length; O++) W[O] = U(le, [O]);
                E = (A = e).core.classFacade, r = A.elements, E.removeFromEachElementClassIfContains = function (e, t) {
                    for (var n = 0; n < r[e].length; n++) oe(r[e][n], t)
                }, E = A.core.eventsDispatcher, C = A.props, E.dispatch = function (e) {
                    C[e] && C[e]()
                }, S = A.componentsServices, (E = A.core.fullscreenToggler).enterFullscreen = function () {
                    S.enterFullscreen();
                    var e = document.documentElement;
                    e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen()
                }, E.exitFullscreen = function () {
                    S.exitFullscreen(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen()
                }, E = A.core, N = E.globalEventsController, y = E.windowResizeActioner, E = A.resolve, b = E(fe), x = E(pe), w = E(he), N.attachListeners = function () {
                    document.addEventListener("pointermove", x.listener), document.addEventListener("pointerup", w.listener), addEventListener("resize", y.runActions), document.addEventListener("keydown", b.listener)
                }, N.removeListeners = function () {
                    document.removeEventListener("pointermove", x.listener), document.removeEventListener("pointerup", w.listener), removeEventListener("resize", y.runActions), document.removeEventListener("keydown", b.listener)
                }, E = A.core.lightboxCloser, v = (0, A.resolve)(ue), E.closeLightbox = function () {
                    v.isLightboxFadingOut || v.runActions()
                }, ie(A), D = A.data, (g = A.core.scrollbarRecompensor).addRecompense = function () {
                    "complete" === document.readyState ? I() : addEventListener("load", function () {
                        I(), g.addRecompense = I
                    })
                }, g.removeRecompense = function () {
                    document.body.style.removeProperty("margin-right")
                }, N = A.core, E = N.slideChangeFacade, h = N.slideIndexChanger, m = N.stageManager, 1 < A.props.sources.length ? (E.changeToPrevious = function () {
                    h.jumpTo(m.getPreviousSlideIndex())
                }, E.changeToNext = function () {
                    h.jumpTo(m.getNextSlideIndex())
                }) : (E.changeToPrevious = function () { }, E.changeToNext = function () { }), de(A), N = A.core, M = N.classFacade, N = N.sourcesPointerDown, z = A.elements.sources, p = A.sourcePointerProps, B = A.stageIndexes, N.listener = function (e) {
                    "VIDEO" !== e.target.tagName && e.preventDefault(), p.isPointering = !0, p.downScreenX = e.screenX, p.swipedX = 0;
                    var t = z[B.current];
                    t && t.contains(e.target) ? p.isSourceDownEventTarget = !0 : p.isSourceDownEventTarget = !1, M.removeFromEachElementClassIfContains("sourceMainWrappers", Q)
                }, d = A.collections.sourcesRenderFunctions, E = A.core.sourceDisplayFacade, R = A.props, f = A.stageIndexes, E.displaySourcesWhichShouldBeDisplayed = function () {
                    if (R.loadOnlyCurrentSource) Y(f.current);
                    else
                        for (var e in f) Y(f[e])
                }, c = A.stageIndexes, l = A.core.stageManager, u = A.props.sources.length - 1, l.getPreviousSlideIndex = function () {
                    return 0 === c.current ? u : c.current - 1
                }, l.getNextSlideIndex = function () {
                    return c.current === u ? 0 : c.current + 1
                }, l.updateStageIndexes = 0 == u ? function () { } : 1 == u ? function () {
                    0 === c.current ? (c.next = 1, delete c.previous) : (c.previous = 0, delete c.next)
                } : function () {
                    c.previous = l.getPreviousSlideIndex(), c.next = l.getNextSlideIndex()
                }, l.isSourceInStage = u <= 2 ? function () {
                    return !0
                } : function (e) {
                    var t = c.current;
                    return 0 === t && e === u || t === u && 0 === e || -1 == (t = t - e) || 0 == t || 1 == t
                }, N = A.collections, t = N.sourceMainWrappersTransformers, n = N.sourceSizers, N = A.core.windowResizeActioner, o = A.data, i = A.elements.sourceMainWrappers, a = A.props, s = A.stageIndexes, N.runActions = function () {
                    innerWidth < 992 ? o.maxSourceWidth = innerWidth : o.maxSourceWidth = .9 * innerWidth, o.maxSourceHeight = .9 * innerHeight;
                    for (var e = 0; e < a.sources.length; e++) oe(i[e], Q), e !== s.current && t[e].negative(), n[e] && n[e].adjustSize()
                }, L.container = document.createElement("div"), L.container.className = "".concat(K, "container ").concat(J, " ").concat(te), (E = e.elements).slideSwipingHoverer = document.createElement("div"), E.slideSwipingHoverer.className = "".concat(K, "slide-swiping-hoverer ").concat(J, " ").concat(ee), ce(e);
                var T = e,
                    A = T.core.sourcesPointerDown,
                    N = T.elements,
                    $ = T.props.sources,
                    L = document.createElement("div");
                L.className = "".concat(ee, " ").concat(J), N.container.appendChild(L), L.addEventListener("pointerdown", A.listener), N.sourceWrappersContainer = L;
                for (var k = 0; k < $.length; k++) ! function (e, t) {
                    var n = e.componentsServices.hideSourceLoaderIfNotYetCollection,
                        r = e.elements,
                        o = r.sourceWrappersContainer,
                        i = r.sourceMainWrappers,
                        a = (i[t] = document.createElement("div"), i[t].className = "".concat(ee, " ").concat(J, " ").concat(Z), i[t].innerHTML = '<div class="fslightbox-loader"><div></div><div></div><div></div><div></div></div>', i[t].firstChild);
                    n[t] = function () {
                        i[t].contains(a) && i[t].removeChild(a)
                    }, o.appendChild(i[t]), r = t, n = e.elements, o = n.sourceMainWrappers, (n = n.sourceAnimationWrappers)[r] = document.createElement("div"), o[r].appendChild(n[r])
                }(T, k);
                1 < H.length && (A = (E = e).core.slideChangeFacade, re(E, A.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), re(E, A.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z"));
                for (var _, P = e.props.sources, N = e.resolve, X = N(ne), F = N(ae), V = N(se, [X, F]), j = 0; j < P.length; j++) "string" == typeof P[j] ? (_ = V.getTypeSetByClientForIndex(j)) ? F.runActionsForSourceTypeAndIndex(_, j) : (_ = X.getSourceTypeFromLocalStorageByUrl(P[j])) ? F.runActionsForSourceTypeAndIndex(_, j) : V.retrieveTypeWithXhrForIndex(j) : F.runActionsForSourceTypeAndIndex("custom", j);

                function Y(e) {
                    d[e] && (d[e](), delete d[e])
                }

                function I() {
                    document.body.offsetHeight > innerHeight && (document.body.style.marginRight = D.scrollbarWidth + "px")
                }
                q.dispatch("onInit")
            }

            function ie(t) {
                var n = t.collections.sourceMainWrappersTransformers,
                    r = t.componentsServices,
                    e = t.core,
                    o = e.eventsDispatcher,
                    i = e.lightboxOpener,
                    a = e.globalEventsController,
                    s = e.scrollbarRecompensor,
                    c = e.sourceDisplayFacade,
                    l = e.stageManager,
                    u = e.windowResizeActioner,
                    d = t.data,
                    f = t.elements,
                    p = t.stageIndexes;
                i.open = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                    p.current = e, d.isInitialized ? o.dispatch("onShow") : j(t), l.updateStageIndexes(), c.displaySourcesWhichShouldBeDisplayed(), r.setSlideNumber(e + 1), document.body.appendChild(f.container), document.documentElement.classList.add(h), s.addRecompense(), a.attachListeners(), u.runActions(), n[p.current].zero(), o.dispatch("onOpen")
                }
            }

            function r(e, t, n) {
                return (r = function () {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return;
                    if (Reflect.construct.sham) return;
                    if ("function" == typeof Proxy) return 1;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), 1
                    } catch (e) { }
                }() ? Reflect.construct : function (e, t, n) {
                    var r = [null],
                        t = (r.push.apply(r, t), new (Function.bind.apply(e, r)));
                    return n && o(t, n.prototype), t
                }).apply(null, arguments)
            }

            function o(e, t) {
                return (o = Object.setPrototypeOf || function (e, t) {
                    return e.__proto__ = t, e
                })(e, t)
            }

            function i(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }

            function A() {
                for (var d = document.getElementsByTagName("a"), e = 0; e < d.length; e++) ! function (n) {
                    if (!d[n].hasAttribute("data-fslightbox")) return;
                    var r = d[n].getAttribute("data-fslightbox"),
                        e = d[n].getAttribute("href"),
                        t = (fsLightboxInstances[r] || (fsLightboxInstances[r] = new FsLightbox), null),
                        o = ("#" === e.charAt(0) ? (t = document.getElementById(e.substring(1)).cloneNode(!0)).removeAttribute("id") : t = e, fsLightboxInstances[r].props.sources.push(t), fsLightboxInstances[r].elements.a.push(d[n]), fsLightboxInstances[r].props.sources.length - 1);
                    d[n].onclick = function (e) {
                        e.preventDefault(), fsLightboxInstances[r].open(o)
                    }, u("types", "data-type"), u("videosPosters", "data-video-poster"), u("customClasses", "data-class"), u("customClasses", "data-custom-class");
                    for (var i, a = ["href", "data-fslightbox", "data-type", "data-video-poster", "data-class", "data-custom-class"], s = d[n].attributes, c = fsLightboxInstances[r].props.customAttributes, l = 0; l < s.length; l++) - 1 === a.indexOf(s[l].name) && "data-" === s[l].name.substr(0, 5) && (c[o] || (c[o] = {}), i = s[l].name.substr(5), c[o][i] = s[l].value);

                    function u(e, t) {
                        d[n].hasAttribute(t) && (fsLightboxInstances[r].props[e][o] = d[n].getAttribute(t))
                    }
                }(e);
                var t = Object.keys(fsLightboxInstances);
                window.fsLightbox = fsLightboxInstances[t[t.length - 1]]
            }
            "object" === ("undefined" == typeof document ? "undefined" : n(document)) && ((e = document.createElement("style")).className = t, e.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightbox-loader{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightbox-loader div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightbox-loader 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightbox-loader div:nth-child(1){animation-delay:-.45s}.fslightbox-loader div:nth-child(2){animation-delay:-.3s}.fslightbox-loader div:nth-child(3){animation-delay:-.15s}@keyframes fslightbox-loader{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), document.head.appendChild(e)), window.FsLightbox = function () {
                var n = this;
                this.props = {
                    sources: [],
                    customAttributes: [],
                    customClasses: [],
                    types: [],
                    videosPosters: [],
                    slideDistance: .3
                }, this.data = {
                    isInitialized: !1,
                    isFullscreenOpen: !1,
                    maxSourceWidth: 0,
                    maxSourceHeight: 0,
                    scrollbarWidth: 0
                }, this.sourcePointerProps = {
                    downScreenX: null,
                    isPointering: !1,
                    isSourceDownEventTarget: !1,
                    swipedX: 0
                }, this.stageIndexes = {}, this.elements = {
                    a: [],
                    container: null,
                    slideSwipingHoverer: null,
                    sourceWrappersContainer: null,
                    sources: [],
                    sourceMainWrappers: [],
                    sourceAnimationWrappers: []
                }, this.componentsServices = {
                    enterFullscreen: null,
                    exitFullscreen: null,
                    hideSourceLoaderIfNotYetCollection: [],
                    setSlideNumber: function () { }
                }, this.resolve = function (e) {
                    var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [];
                    return t.unshift(n), r(e, function (e) {
                        if (Array.isArray(e)) return i(e)
                    }(e = t) || function (e) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
                    }(e) || function (e) {
                        var t;
                        if (e) return "string" == typeof e ? i(e, void 0) : "Map" === (t = "Object" === (t = Object.prototype.toString.call(e).slice(8, -1)) && e.constructor ? e.constructor.name : t) || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? i(e, void 0) : void 0
                    }(e) || function () {
                        throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }())
                }, this.collections = {
                    sourceMainWrappersTransformers: [],
                    sourceLoadHandlers: [],
                    sourcesRenderFunctions: [],
                    sourceSizers: []
                }, this.core = {
                    classFacade: {},
                    eventsDispatcher: {},
                    fullscreenToggler: {},
                    globalEventsController: {},
                    lightboxCloser: {},
                    lightboxOpener: {},
                    lightboxUpdater: {},
                    scrollbarRecompensor: {},
                    slideChangeFacade: {},
                    slideIndexChanger: {},
                    sourcesPointerDown: {},
                    sourceDisplayFacade: {},
                    stageManager: {},
                    windowResizeActioner: {}
                }, ie(this), this.open = function (e) {
                    return n.core.lightboxOpener.open(e)
                }, this.close = function () {
                    return n.core.lightboxCloser.closeLightbox()
                }
            }, window.fsLightboxInstances = {}, A(), window.refreshFsLightbox = function () {
                for (var e in fsLightboxInstances) {
                    var t = fsLightboxInstances[e].props;
                    fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], fsLightboxInstances[e].elements.a = []
                }
                A()
            }
        }], r = {}, o.m = n, o.c = r, o.d = function (e, t, n) {
            o.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, o.r = function (e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, o.t = function (t, e) {
            if (1 & e && (t = o(t)), 8 & e) return t;
            if (4 & e && "object" == _typeof(t) && t && t.__esModule) return t;
            var n = Object.create(null);
            if (o.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
                for (var r in t) o.d(n, r, function (e) {
                    return t[e]
                }.bind(null, r));
            return n
        }, o.n = function (e) {
            var t = e && e.__esModule ? function () {
                return e.default
            } : function () {
                return e
            };
            return o.d(t, "a", t), t
        }, o.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, o.p = "", o(o.s = 0);

        function o(e) {
            var t;
            return (r[e] || (t = r[e] = {
                i: e,
                l: !1,
                exports: {}
            }, n[e].call(t.exports, t, t.exports, o), t.l = !0, t)).exports
        }
        var n, r
    }),
    function () {
        var n = {
            163: function (e) {
                e.exports = function (s) {
                    var c, l = [].forEach,
                        u = [].some,
                        d = document.body,
                        f = !0,
                        p = " ";

                    function a(e) {
                        var t = s.orderedList ? "ol" : "ul",
                            t = document.createElement(t),
                            n = s.listClass + p + s.extraListClasses;
                        return e && (n = (n += p + s.collapsibleClass) + (p + s.isCollapsedClass)), t.setAttribute("class", n), t
                    }
                    return {
                        enableTocAnimation: function () {
                            f = !0
                        },
                        disableTocAnimation: function (e) {
                            e = e.target || e.srcElement;
                            "string" == typeof e.className && -1 !== e.className.indexOf(s.linkClass) && (f = !1)
                        },
                        render: function (e, t) {
                            var n = a(!1);
                            if (t.forEach(function (e) {
                                ! function t(e, n) {
                                    var r, o, i, n = n.appendChild((n = e, r = document.createElement("li"), o = document.createElement("a"), s.listItemClass && r.setAttribute("class", s.listItemClass), s.onClick && (o.onclick = s.onClick), s.includeTitleTags && o.setAttribute("title", n.textContent), s.includeHtml && n.childNodes.length ? l.call(n.childNodes, function (e) {
                                        o.appendChild(e.cloneNode(!0))
                                    }) : o.textContent = n.textContent, o.setAttribute("href", s.basePath + "#" + n.id), o.setAttribute("class", s.linkClass + p + "node-name--" + n.nodeName + p + s.extraLinkClasses), r.appendChild(o), r));
                                    e.children.length && (i = a(e.isCollapsed), e.children.forEach(function (e) {
                                        t(e, i)
                                    }), n.appendChild(i))
                                }(e, n)
                            }), null !== (c = e || c)) return c.firstChild && c.removeChild(c.firstChild), 0 === t.length ? c : c.appendChild(n)
                        },
                        updateToc: function (e) {
                            var n = s.scrollContainer && document.querySelector(s.scrollContainer) ? document.querySelector(s.scrollContainer).scrollTop : document.documentElement.scrollTop || d.scrollTop;
                            s.positionFixedSelector && (t = s.scrollContainer && document.querySelector(s.scrollContainer) ? document.querySelector(s.scrollContainer).scrollTop : document.documentElement.scrollTop || d.scrollTop, o = document.querySelector(s.positionFixedSelector), "auto" === s.fixedSidebarOffset && (s.fixedSidebarOffset = c.offsetTop), t > s.fixedSidebarOffset ? -1 === o.className.indexOf(s.positionFixedClass) && (o.className += p + s.positionFixedClass) : o.className = o.className.split(p + s.positionFixedClass).join(""));
                            var r, t, o, i, a = e;
                            f && null !== c && 0 < a.length && (u.call(a, function (e, t) {
                                return function e(t) {
                                    var n = 0;
                                    return null !== t && (n = t.offsetTop, s.hasInnerContainers) && (n += e(t.offsetParent)), n
                                }(e) > n + s.headingsOffset + 10 ? (r = a[0 === t ? t : t - 1], !0) : t === a.length - 1 ? (r = a[a.length - 1], !0) : void 0
                            }), t = c.querySelectorAll("." + s.linkClass), l.call(t, function (e) {
                                e.className = e.className.split(p + s.activeLinkClass).join("")
                            }), o = c.querySelectorAll("." + s.listItemClass), l.call(o, function (e) {
                                e.className = e.className.split(p + s.activeListItemClass).join("")
                            }), (e = c.querySelector("." + s.linkClass + ".node-name--" + r.nodeName + '[href="' + s.basePath + "#" + r.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g, "\\$1") + '"]')) && -1 === e.className.indexOf(s.activeLinkClass) && (e.className += p + s.activeLinkClass), (i = e && e.parentNode) && -1 === i.className.indexOf(s.activeListItemClass) && (i.className += p + s.activeListItemClass), i = c.querySelectorAll("." + s.listClass + "." + s.collapsibleClass), l.call(i, function (e) {
                                -1 === e.className.indexOf(s.isCollapsedClass) && (e.className += p + s.isCollapsedClass)
                            }), e && e.nextSibling && -1 !== e.nextSibling.className.indexOf(s.isCollapsedClass) && (e.nextSibling.className = e.nextSibling.className.split(p + s.isCollapsedClass).join("")), function e(t) {
                                return t && -1 !== t.className.indexOf(s.collapsibleClass) && -1 !== t.className.indexOf(s.isCollapsedClass) ? (t.className = t.className.split(p + s.isCollapsedClass).join(""), e(t.parentNode.parentNode)) : t
                            }(e && e.parentNode.parentNode))
                        }
                    }
                }
            },
            547: function (e) {
                e.exports = {
                    tocSelector: ".js-toc",
                    contentSelector: ".js-toc-content",
                    headingSelector: "h1, h2, h3",
                    ignoreSelector: ".js-toc-ignore",
                    hasInnerContainers: !1,
                    linkClass: "toc-link",
                    extraLinkClasses: "",
                    activeLinkClass: "is-active-link",
                    listClass: "toc-list",
                    extraListClasses: "",
                    isCollapsedClass: "is-collapsed",
                    collapsibleClass: "is-collapsible",
                    listItemClass: "toc-list-item",
                    activeListItemClass: "is-active-li",
                    collapseDepth: 0,
                    scrollSmooth: !0,
                    scrollSmoothDuration: 420,
                    scrollSmoothOffset: 0,
                    scrollEndCallback: function (e) { },
                    headingsOffset: 1,
                    throttleTimeout: 50,
                    positionFixedSelector: null,
                    positionFixedClass: "is-position-fixed",
                    fixedSidebarOffset: "auto",
                    includeHtml: !1,
                    includeTitleTags: !1,
                    onClick: function (e) { },
                    orderedList: !0,
                    scrollContainer: null,
                    skipRendering: !1,
                    headingLabelCallback: !1,
                    ignoreHiddenElements: !1,
                    headingObjectCallback: null,
                    basePath: "",
                    disableTocScrollSync: !1
                }
            },
            971: function (e, t, g) {
                var n, r = [];
                void 0 !== (t = "function" == typeof (n = function (e) {
                    "use strict";
                    var r, o, i, a, s = g(547),
                        c = {},
                        l = {},
                        u = g(163),
                        d = g(279),
                        f = g(938),
                        p = !!(e && e.document && e.document.querySelector && e.addEventListener);
                    if ("undefined" != typeof window || p) return a = Object.prototype.hasOwnProperty, l.destroy = function () {
                        var e = m(c);
                        null !== e && (c.skipRendering || e && (e.innerHTML = ""), c.scrollContainer && document.querySelector(c.scrollContainer) ? (document.querySelector(c.scrollContainer).removeEventListener("scroll", this._scrollListener, !1), document.querySelector(c.scrollContainer).removeEventListener("resize", this._scrollListener, !1), r && document.querySelector(c.scrollContainer).removeEventListener("click", this._clickListener, !1)) : (document.removeEventListener("scroll", this._scrollListener, !1), document.removeEventListener("resize", this._scrollListener, !1), r && document.removeEventListener("click", this._clickListener, !1)))
                    }, l.init = function (e) {
                        if (p) {
                            c = function () {
                                for (var e = {}, t = 0; t < arguments.length; t++) {
                                    var n, r = arguments[t];
                                    for (n in r) a.call(r, n) && (e[n] = r[n])
                                }
                                return e
                            }(s, e || {}), this.options = c, this.state = {}, c.scrollSmooth && (c.duration = c.scrollSmoothDuration, c.offset = c.scrollSmoothOffset, l.scrollSmooth = g(374).initSmoothScrolling(c)), r = u(c), o = d(c), this._buildHtml = r, this._parseContent = o, this._headingsArray = i, l.destroy();
                            e = function (t) {
                                try {
                                    return t.contentElement || document.querySelector(t.contentSelector)
                                } catch (e) {
                                    return console.warn("Contents element not found: " + t.contentSelector), null
                                }
                            }(c);
                            if (null !== e) {
                                var t, n = m(c);
                                if (null !== n && null !== (i = o.selectHeadings(e, c.headingSelector))) return e = o.nestHeadingsArray(i).nest, c.skipRendering || r.render(n, e), this._scrollListener = h(function (e) {
                                    r.updateToc(i), c.disableTocScrollSync || f(c);
                                    var t = e && e.target && e.target.scrollingElement && 0 === e.target.scrollingElement.scrollTop;
                                    (e && (0 === e.eventPhase || null === e.currentTarget) || t) && (r.updateToc(i), c.scrollEndCallback) && c.scrollEndCallback(e)
                                }, c.throttleTimeout), this._scrollListener(), (c.scrollContainer && document.querySelector(c.scrollContainer) ? (document.querySelector(c.scrollContainer).addEventListener("scroll", this._scrollListener, !1), document.querySelector(c.scrollContainer)) : (document.addEventListener("scroll", this._scrollListener, !1), document)).addEventListener("resize", this._scrollListener, !1), t = null, this._clickListener = h(function (e) {
                                    c.scrollSmooth && r.disableTocAnimation(e), r.updateToc(i), t && clearTimeout(t), t = setTimeout(function () {
                                        r.enableTocAnimation()
                                    }, c.scrollSmoothDuration)
                                }, c.throttleTimeout), (c.scrollContainer && document.querySelector(c.scrollContainer) ? document.querySelector(c.scrollContainer) : document).addEventListener("click", this._clickListener, !1), this
                            }
                        }
                    }, l.refresh = function (e) {
                        l.destroy(), l.init(e || this.options)
                    }, e.tocbot = l;

                    function h(r, o, i) {
                        var a, s;
                        return o = o || 250,
                            function () {
                                var e = i || this,
                                    t = +new Date,
                                    n = arguments;
                                a && t < a + o ? (clearTimeout(s), s = setTimeout(function () {
                                    a = t, r.apply(e, n)
                                }, o)) : (a = t, r.apply(e, n))
                            }
                    }

                    function m(t) {
                        try {
                            return t.tocElement || document.querySelector(t.tocSelector)
                        } catch (e) {
                            return console.warn("TOC element not found: " + t.tocSelector), null
                        }
                    }
                }(void 0 === g.g && window || g.g)) ? n.apply(t, r) : n) && (e.exports = t)
            },
            279: function (e) {
                e.exports = function (s) {
                    var t = [].reduce;

                    function c(e) {
                        return e[e.length - 1]
                    }

                    function l(e) {
                        var t;
                        return e instanceof window.HTMLElement ? !s.ignoreHiddenElements || e.offsetHeight && e.offsetParent ? (t = e.getAttribute("data-heading-label") || (s.headingLabelCallback ? String(s.headingLabelCallback(e.textContent)) : e.textContent.trim()), t = {
                            id: e.id,
                            children: [],
                            nodeName: e.nodeName,
                            headingLevel: +e.nodeName.toUpperCase().replace("H", ""),
                            textContent: t
                        }, s.includeHtml && (t.childNodes = e.childNodes), s.headingObjectCallback ? s.headingObjectCallback(t, e) : t) : null : e
                    }
                    return {
                        nestHeadingsArray: function (e) {
                            return t.call(e, function (e, t) {
                                t = l(t);
                                if (t) {
                                    for (var n = e.nest, t, r = (t = l(t)).headingLevel, o = n, i = c(o), a = r - (i ? i.headingLevel : 0); 0 < a && (!(i = c(o)) || r !== i.headingLevel);) i && void 0 !== i.children && (o = i.children), a--;
                                    r >= s.collapseDepth && (t.isCollapsed = !0), o.push(t)
                                }
                                return e
                            }, {
                                nest: []
                            })
                        },
                        selectHeadings: function (e, t) {
                            var n = t;
                            s.ignoreSelector && (n = t.split(",").map(function (e) {
                                return e.trim() + ":not(" + s.ignoreSelector + ")"
                            }));
                            try {
                                return e.querySelectorAll(n)
                            } catch (e) {
                                return console.warn("Headers not found with selector: " + n), null
                            }
                        }
                    }
                }
            },
            374: function (e, t) {
                t.initSmoothScrolling = function (u) {
                    var d = u.duration,
                        f = u.offset,
                        p = location.hash ? h(location.href) : location.href;

                    function h(e) {
                        return e.slice(0, e.lastIndexOf("#"))
                    }
                    document.body.addEventListener("click", function (t) {
                        var e, n, r, o, i, a, s, c;

                        function l(e) {
                            o = e - r, window.scrollTo(0, a.easing(o, i, s, c)), o < c ? requestAnimationFrame(l) : (window.scrollTo(0, i + s), "function" == typeof a.callback && a.callback())
                        }
                        "a" !== (e = t.target).tagName.toLowerCase() || !(0 < e.hash.length || "#" === e.href.charAt(e.href.length - 1)) || h(e.href) !== p && h(e.href) + "#" !== p || -1 < t.target.className.indexOf("no-smooth-scroll") || "#" === t.target.href.charAt(t.target.href.length - 2) && "!" === t.target.href.charAt(t.target.href.length - 1) || -1 === t.target.className.indexOf(u.linkClass) || (e = t.target.hash, n = {
                            duration: d,
                            offset: f,
                            callback: function () {
                                var e = t.target.hash;
                                (e = document.getElementById(e.substring(1))) && (/^(?:a|select|input|button|textarea)$/i.test(e.tagName) || (e.tabIndex = -1), e.focus())
                            }
                        }, i = window.pageYOffset, a = {
                            duration: n.duration,
                            offset: n.offset || 0,
                            callback: n.callback,
                            easing: n.easing || function (e, t, n, r) {
                                return (e /= r / 2) < 1 ? n / 2 * e * e + t : -n / 2 * (--e * (e - 2) - 1) + t
                            }
                        }, n = document.querySelector('[id="' + decodeURI(e).split("#").join("") + '"]') || document.querySelector('[id="' + e.split("#").join("") + '"]'), s = "string" == typeof e ? a.offset + (e ? n && n.getBoundingClientRect().top || 0 : -(document.documentElement.scrollTop || document.body.scrollTop)) : e, c = "function" == typeof a.duration ? a.duration(s) : a.duration, requestAnimationFrame(function (e) {
                            l(r = e)
                        }))
                    }, !1)
                }
            },
            938: function (e) {
                e.exports = function (e) {
                    var t = e.tocElement || document.querySelector(e.tocSelector);
                    t && t.scrollHeight > t.clientHeight && (e = t.querySelector("." + e.activeListItemClass)) && (t.scrollTop = e.offsetTop)
                }
            }
        },
            r = {};

        function o(e) {
            var t = r[e];
            return void 0 !== t || (t = r[e] = {
                exports: {}
            }, n[e](t, t.exports, o)), t.exports
        }
        o.g = function () {
            if ("object" == ("undefined" == typeof globalThis ? "undefined" : _typeof(globalThis))) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == ("undefined" == typeof window ? "undefined" : _typeof(window))) return window
            }
        }(), o(971)
    }();
var tns = function () {
    var e = window,
        $r = e.requestAnimationFrame || e.webkitRequestAnimationFrame || e.mozRequestAnimationFrame || e.msRequestAnimationFrame || function (e) {
            return setTimeout(e, 16)
        },
        t = window,
        Xr = t.cancelAnimationFrame || t.mozCancelAnimationFrame || function (e) {
            clearTimeout(e)
        };

    function Vr(e) {
        for (var t, n, r, o = e || {}, i = 1, a = arguments.length; i < a; i++)
            if (null !== (t = arguments[i]))
                for (n in t) o !== (r = t[n]) && void 0 !== r && (o[n] = r);
        return o
    }

    function Yr(e) {
        return 0 <= ["true", "false"].indexOf(e) ? JSON.parse(e) : e
    }

    function Kr(e, t, n, r) {
        if (r) try {
            e.setItem(t, n)
        } catch (e) { }
        return n
    }

    function Jr() {
        var e = document,
            t = e.body;
        return t || ((t = e.createElement("body")).fake = !0), t
    }
    var n = document.documentElement;

    function Zr(e) {
        var t = "";
        return e.fake && (t = n.style.overflow, e.style.background = "", e.style.overflow = n.style.overflow = "hidden", n.appendChild(e)), t
    }

    function Qr(e, t) {
        e.fake && (e.remove(), n.style.overflow = t, n.offsetHeight)
    }

    function eo(e, t, n, r) {
        "insertRule" in e ? e.insertRule(t + "{" + n + "}", r) : e.addRule(t, n, r)
    }

    function to(e) {
        return ("insertRule" in e ? e.cssRules : e.rules).length
    }

    function no(e, t, n) {
        for (var r = 0, o = e.length; r < o; r++) t.call(n, e[r], r)
    }
    var t = "classList" in document.createElement("_"),
        ro = t ? function (e, t) {
            return e.classList.contains(t)
        } : function (e, t) {
            return 0 <= e.className.indexOf(t)
        },
        oo = t ? function (e, t) {
            ro(e, t) || e.classList.add(t)
        } : function (e, t) {
            ro(e, t) || (e.className += " " + t)
        },
        io = t ? function (e, t) {
            ro(e, t) && e.classList.remove(t)
        } : function (e, t) {
            ro(e, t) && (e.className = e.className.replace(t, ""))
        };

    function ao(e, t) {
        return e.hasAttribute(t)
    }

    function so(e, t) {
        return e.getAttribute(t)
    }

    function i(e) {
        return void 0 !== e.item
    }

    function co(e, t) {
        if (e = i(e) || e instanceof Array ? e : [e], "[object Object]" === Object.prototype.toString.call(t))
            for (var n = e.length; n--;)
                for (var r in t) e[n].setAttribute(r, t[r])
    }

    function lo(e, t) {
        e = i(e) || e instanceof Array ? e : [e];
        for (var n = (t = t instanceof Array ? t : [t]).length, r = e.length; r--;)
            for (var o = n; o--;) e[r].removeAttribute(t[o])
    }

    function uo(e) {
        for (var t = [], n = 0, r = e.length; n < r; n++) t.push(e[n]);
        return t
    }

    function fo(e, t) {
        "none" !== e.style.display && (e.style.display = "none")
    }

    function po(e, t) {
        "none" === e.style.display && (e.style.display = "")
    }

    function ho(e) {
        return "none" !== window.getComputedStyle(e).display
    }

    function mo(t) {
        var n, r;
        "string" == typeof t && (n = [t], r = t.charAt(0).toUpperCase() + t.substr(1), ["Webkit", "Moz", "ms", "O"].forEach(function (e) {
            "ms" === e && "transform" !== t || n.push(e + r)
        }), t = n);
        for (var e = document.createElement("fakeelement"), o = (t.length, 0); o < t.length; o++) {
            var i = t[o];
            if (void 0 !== e.style[i]) return i
        }
        return !1
    }

    function go(e, t) {
        var n = !1;
        return /^Webkit/.test(e) ? n = "webkit" + t + "End" : /^O/.test(e) ? n = "o" + t + "End" : e && (n = t.toLowerCase() + "end"), n
    }
    var r = !1;
    try {
        var o = Object.defineProperty({}, "passive", {
            get: function () {
                r = !0
            }
        });
        window.addEventListener("test", null, o)
    } catch (e) { }
    var a = !!r && {
        passive: !0
    };

    function vo(e, t, n) {
        for (var r in t) {
            var o = 0 <= ["touchstart", "touchmove"].indexOf(r) && !n && a;
            e.addEventListener(r, t[r], o)
        }
    }

    function yo(e, t) {
        for (var n in t) {
            var r = 0 <= ["touchstart", "touchmove"].indexOf(n) && a;
            e.removeEventListener(n, t[n], r)
        }
    }

    function bo() {
        return {
            topics: {},
            on: function (e, t) {
                this.topics[e] = this.topics[e] || [], this.topics[e].push(t)
            },
            off: function (e, t) {
                if (this.topics[e])
                    for (var n = 0; n < this.topics[e].length; n++)
                        if (this.topics[e][n] === t) {
                            this.topics[e].splice(n, 1);
                            break
                        }
            },
            emit: function (t, n) {
                n.type = t, this.topics[t] && this.topics[t].forEach(function (e) {
                    e(n, t)
                })
            }
        }
    }
    return Object.keys || (Object.keys = function (e) {
        var t, n = [];
        for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
        return n
    }), "remove" in Element.prototype || (Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this)
    }),
        function r(T) {
            T = Vr({
                container: ".slider",
                mode: "carousel",
                axis: "horizontal",
                items: 1,
                gutter: 0,
                edgePadding: 0,
                fixedWidth: !1,
                autoWidth: !1,
                viewportMax: !1,
                slideBy: 1,
                center: !1,
                controls: !0,
                controlsPosition: "top",
                controlsText: ["prev", "next"],
                controlsContainer: !1,
                prevButton: !1,
                nextButton: !1,
                nav: !0,
                navPosition: "top",
                navContainer: !1,
                navAsThumbnails: !1,
                arrowKeys: !1,
                speed: 300,
                autoplay: !1,
                autoplayPosition: "top",
                autoplayTimeout: 5e3,
                autoplayDirection: "forward",
                autoplayText: ["start", "stop"],
                autoplayHoverPause: !1,
                autoplayButton: !1,
                autoplayButtonOutput: !0,
                autoplayResetOnVisibility: !0,
                animateIn: "tns-fadeIn",
                animateOut: "tns-fadeOut",
                animateNormal: "tns-normal",
                animateDelay: !1,
                loop: !0,
                rewind: !1,
                autoHeight: !1,
                responsive: !1,
                lazyload: !1,
                lazyloadSelector: ".tns-lazy-img",
                touch: !0,
                mouseDrag: !1,
                swipeAngle: 15,
                nested: !1,
                preventActionWhenRunning: !1,
                preventScrollOnTouch: !1,
                freezable: !0,
                onInit: !1,
                useLocalStorage: !0,
                nonce: !1
            }, T || {});
            var N = document,
                o = window,
                i = {
                    ENTER: 13,
                    SPACE: 32,
                    LEFT: 37,
                    RIGHT: 39
                },
                t = {},
                e = T.useLocalStorage;
            if (e) {
                var c = navigator.userAgent,
                    l = new Date;
                try {
                    (t = o.localStorage) ? (t.setItem(l, l), e = t.getItem(l) == l, t.removeItem(l)) : e = !1, e || (t = {})
                } catch (c) {
                    e = !1
                }
                e && (t.tnsApp && t.tnsApp !== c && ["tC", "tPL", "tMQ", "tTf", "t3D", "tTDu", "tTDe", "tADu", "tADe", "tTE", "tAE"].forEach(function (e) {
                    t.removeItem(e)
                }), localStorage.tnsApp = c)
            }
            var u, f, p, h, m, g = t.tC ? Yr(t.tC) : Kr(t, "tC", function () {
                var e = document,
                    t = Jr(),
                    n = Zr(t),
                    r = e.createElement("div"),
                    o = !1;
                t.appendChild(r);
                try {
                    for (var i, a = "(10px * 10)", s = ["calc" + a, "-moz-calc" + a, "-webkit-calc" + a], c = 0; c < 3; c++)
                        if (i = s[c], r.style.width = i, 100 === r.offsetWidth) {
                            o = i.replace(a, "");
                            break
                        }
                } catch (e) { }
                return t.fake ? Qr(t, n) : r.remove(), o
            }(), e),
                l = t.tPL ? Yr(t.tPL) : Kr(t, "tPL", function () {
                    var e = document,
                        t = Jr(),
                        n = Zr(t),
                        r = e.createElement("div"),
                        e = e.createElement("div"),
                        o = "";
                    r.className = "tns-t-subp2", e.className = "tns-t-ct";
                    for (var i = 0; i < 70; i++) o += "<div></div>";
                    return e.innerHTML = o, r.appendChild(e), t.appendChild(r), e = Math.abs(r.getBoundingClientRect().left - e.children[67].getBoundingClientRect().left) < 2, t.fake ? Qr(t, n) : r.remove(), e
                }(), e),
                oe = t.tMQ ? Yr(t.tMQ) : Kr(t, "tMQ", !(!window.matchMedia && !window.msMatchMedia) || (u = document, p = Zr(f = Jr()), h = u.createElement("div"), m = "@media all and (min-width:1px){.tns-mq-test{position:absolute}}", (y = u.createElement("style")).type = "text/css", h.className = "tns-mq-test", f.appendChild(y), f.appendChild(h), y.styleSheet ? y.styleSheet.cssText = m : y.appendChild(u.createTextNode(m)), y = (window.getComputedStyle ? window.getComputedStyle(h) : h.currentStyle).position, f.fake ? Qr(f, p) : h.remove(), "absolute" === y), e),
                v = t.tTf ? Yr(t.tTf) : Kr(t, "tTf", mo("transform"), e),
                y = t.t3D ? Yr(t.t3D) : Kr(t, "t3D", !!(u = v) && !!window.getComputedStyle && (m = document, p = Zr(f = Jr()), m = m.createElement("p"), h = 9 < u.length ? "-" + u.slice(0, -9).toLowerCase() + "-" : "", h += "transform", f.insertBefore(m, null), m.style[u] = "translate3d(1px,1px,1px)", u = window.getComputedStyle(m).getPropertyValue(h), f.fake ? Qr(f, p) : m.remove(), void 0 !== u) && 0 < u.length && "none" !== u, e),
                d = t.tTDu ? Yr(t.tTDu) : Kr(t, "tTDu", mo("transitionDuration"), e),
                b = t.tTDe ? Yr(t.tTDe) : Kr(t, "tTDe", mo("transitionDelay"), e),
                x = t.tADu ? Yr(t.tADu) : Kr(t, "tADu", mo("animationDuration"), e),
                w = t.tADe ? Yr(t.tADe) : Kr(t, "tADe", mo("animationDelay"), e),
                S = t.tTE ? Yr(t.tTE) : Kr(t, "tTE", go(d, "Transition"), e),
                E = t.tAE ? Yr(t.tAE) : Kr(t, "tAE", go(x, "Animation"), e),
                C = o.console && "function" == typeof o.console.warn,
                A = ["container", "controlsContainer", "prevButton", "nextButton", "navContainer", "autoplayButton"],
                L = {};
            if (A.forEach(function (e) {
                var t, n;
                "string" == typeof T[e] && (t = T[e], n = N.querySelector(t), L[e] = t, n && n.nodeName ? T[e] = n : C && console.warn("Can't find", T[e]))
            }), !(T.container.children.length < 1)) {
                var ie, ae, O, se, k = T.responsive,
                    ce = T.nested,
                    _ = "carousel" === T.mode;
                if (k) {
                    0 in k && (T = Vr(T, k[0]), delete k[0]);
                    var le, ue = {};
                    for (le in k) {
                        var de = k[le];
                        ue[le] = "number" == typeof de ? {
                            items: de
                        } : de
                    }
                    k = ue, ue = null
                }
                _ || function e(t) {
                    for (var n in t) _ || ("slideBy" === n && (t[n] = "page"), "edgePadding" === n && (t[n] = !1), "autoHeight" === n && (t[n] = !1)), "responsive" === n && e(t[n])
                }(T), _ || (T.axis = "horizontal", T.slideBy = "page", T.edgePadding = !1, ie = T.animateIn, ae = T.animateOut, O = T.animateDelay, se = T.animateNormal);
                var fe, pe, P = "horizontal" === T.axis,
                    a = N.createElement("div"),
                    he = N.createElement("div"),
                    F = T.container,
                    me = F.parentNode,
                    ge = F.outerHTML,
                    j = F.children,
                    I = j.length,
                    ve = On(),
                    ye = !1;
                k && $n(), _ && (F.className += " tns-vpfix");
                var s, be, xe, we, Se, R, Ee, M, z, Ce, Ae, Le, B, Oe, Te, Ne, ke, _e, Pe, Fe, je, Ie, Re, Me, ze, Be, De, qe, D, He, We, Ge, Ue, $e, Xe, Ve, Ye, q = T.autoWidth,
                    H = ne("fixedWidth"),
                    W = ne("edgePadding"),
                    G = ne("gutter"),
                    U = Nn(),
                    $ = ne("center"),
                    X = q ? 1 : Math.floor(ne("items")),
                    Ke = ne("slideBy"),
                    Je = T.viewportMax || T.fixedWidthViewportWidth,
                    Ze = ne("arrowKeys"),
                    Qe = ne("speed"),
                    et = T.rewind,
                    V = !et && T.loop,
                    tt = ne("autoHeight"),
                    nt = ne("controls"),
                    rt = ne("controlsText"),
                    ot = ne("nav"),
                    it = ne("touch"),
                    at = ne("mouseDrag"),
                    Y = ne("autoplay"),
                    st = ne("autoplayTimeout"),
                    ct = ne("autoplayText"),
                    lt = ne("autoplayHoverPause"),
                    ut = ne("autoplayResetOnVisibility"),
                    K = (e = ne("nonce"), $t = document.createElement("style"), e && $t.setAttribute("nonce", e), document.querySelector("head").appendChild($t), $t.sheet || $t.styleSheet),
                    dt = T.lazyload,
                    ft = T.lazyloadSelector,
                    pt = [],
                    J = V ? (e = function () {
                        if (q || H && !Je) return I - 1;
                        var e = H ? "fixedWidth" : "items",
                            t = [];
                        if ((H || T[e] < I) && t.push(T[e]), k)
                            for (var n in k) {
                                n = k[n][e];
                                n && (H || n < I) && t.push(n)
                            }
                        return t.length || t.push(0), Math.ceil(H ? Je / Math.min.apply(null, t) : Math.max.apply(null, t))
                    }(), $t = _ ? Math.ceil((5 * e - I) / 2) : 4 * e - I, $t = Math.max(e, $t), kn("edgePadding") ? $t + 1 : $t) : 0,
                    Z = _ ? I + 2 * J : I + J,
                    ht = !(!H && !q || V),
                    mt = H ? yr() : null,
                    gt = !_ || !V,
                    vt = P ? "left" : "top",
                    yt = "",
                    bt = "",
                    xt = H ? function () {
                        return $ && !V ? I - 1 : Math.ceil(-mt / (H + G))
                    } : q ? function () {
                        for (var e = 0; e < Z; e++)
                            if (s[e] >= -mt) return e
                    } : function () {
                        return $ && _ && !V ? I - 1 : V || _ ? Math.max(0, Z - Math.ceil(X)) : Z - 1
                    },
                    Q = Cn(ne("startIndex")),
                    wt = Q,
                    St = (En(), 0),
                    Et = q ? null : xt(),
                    Ct = T.preventActionWhenRunning,
                    At = T.swipeAngle,
                    Lt = !At || "?",
                    Ot = !1,
                    Tt = T.onInit,
                    ee = new bo,
                    Nt = " tns-slider tns-" + T.mode,
                    te = F.id || (e = window.tnsId, window.tnsId = e ? e + 1 : 1, "tns" + window.tnsId),
                    kt = ne("disable"),
                    _t = !1,
                    Pt = T.freezable,
                    Ft = !(!Pt || q) && Un(),
                    jt = !1,
                    It = {
                        click: Or,
                        keydown: function (e) {
                            e = Ir(e);
                            var t = [i.LEFT, i.RIGHT].indexOf(e.keyCode);
                            0 <= t && (0 === t ? M.disabled || Or(e, -1) : z.disabled || Or(e, 1))
                        }
                    },
                    Rt = {
                        click: function (e) {
                            if (Ot) {
                                if (Ct) return;
                                Ar()
                            }
                            for (var t, n, r = Rr(e = Ir(e)); r !== B && !ao(r, "data-nav");) r = r.parentNode;
                            ao(r, "data-nav") && (t = ke = Number(so(r, "data-nav")), n = H || q ? t * I / Te : t * X, Lr(Gt ? t : Math.min(Math.ceil(n), I - 1), e), _e === t) && (Me && Pr(), ke = -1)
                        },
                        keydown: function (e) {
                            e = Ir(e);
                            var t, n = N.activeElement;
                            ao(n, "data-nav") && (t = [i.LEFT, i.RIGHT, i.ENTER, i.SPACE].indexOf(e.keyCode), n = Number(so(n, "data-nav")), 0 <= t) && (0 === t ? 0 < n && jr(Le[n - 1]) : 1 === t ? n < Te - 1 && jr(Le[n + 1]) : Lr(ke = n, e))
                        }
                    },
                    Mt = {
                        mouseover: function () {
                            Me && (Nr(), ze = !0)
                        },
                        mouseout: function () {
                            ze && (Tr(), ze = !1)
                        }
                    },
                    zt = {
                        visibilitychange: function () {
                            N.hidden ? Me && (Nr(), De = !0) : De && (Tr(), De = !1)
                        }
                    },
                    Bt = {
                        keydown: function (e) {
                            e = Ir(e);
                            var t = [i.LEFT, i.RIGHT].indexOf(e.keyCode);
                            0 <= t && Or(e, 0 === t ? -1 : 1)
                        }
                    },
                    Dt = {
                        touchstart: Dr,
                        touchmove: qr,
                        touchend: Hr,
                        touchcancel: Hr
                    },
                    qt = {
                        mousedown: Dr,
                        mousemove: qr,
                        mouseup: Hr,
                        mouseleave: Hr
                    },
                    Ht = kn("controls"),
                    Wt = kn("nav"),
                    Gt = !!q || T.navAsThumbnails,
                    Ut = kn("autoplay"),
                    $t = kn("touch"),
                    Xt = kn("mouseDrag"),
                    Vt = "tns-slide-active",
                    Yt = "tns-slide-cloned",
                    Kt = "tns-complete",
                    Jt = {
                        load: function (e) {
                            tr(Rr(e))
                        },
                        error: function (e) {
                            e = Rr(e);
                            oo(e, "failed"), nr(e)
                        }
                    },
                    Zt = "force" === T.preventScrollOnTouch;
                if (Ht && (R = T.controlsContainer, Ee = T.controlsContainer ? T.controlsContainer.outerHTML : "", M = T.prevButton, z = T.nextButton, Ce = T.prevButton ? T.prevButton.outerHTML : "", Ae = T.nextButton ? T.nextButton.outerHTML : ""), Wt && (B = T.navContainer, Oe = T.navContainer ? T.navContainer.outerHTML : "", Te = q ? I : Gr(), Ne = 0, ke = -1, _e = Ln(), Pe = _e, Fe = "tns-nav-active", je = "Carousel Page ", Ie = " (Current Slide)"), Ut && (qe = "forward" === T.autoplayDirection ? 1 : -1, D = T.autoplayButton, He = T.autoplayButton ? T.autoplayButton.outerHTML : "", We = ["<span class='tns-visually-hidden'>", " animation</span>"]), ($t || Xt) && ($e = {}, Ve = !(Xe = {}), Ye = P ? function (e, t) {
                    return e.x - t.x
                } : function (e, t) {
                    return e.y - t.y
                }), q || Sn(kt || Ft), v && (vt = v, yt = "translate", bt = y ? (yt += P ? "3d(" : "3d(0px, ", P ? ", 0px, 0px)" : ", 0px)") : (yt += P ? "X(" : "Y(", ")")), _ && (F.className = F.className.replace("tns-vpfix", "")), kn("gutter"), a.className = "tns-outer", he.className = "tns-inner", a.id = te + "-ow", he.id = te + "-iw", "" === F.id && (F.id = te), Nt = Nt + (l || q ? " tns-subpixel" : " tns-no-subpixel") + (g ? " tns-calc" : " tns-no-calc"), q && (Nt += " tns-autowidth"), Nt += " tns-" + T.axis, F.className += Nt, (_ ? ((fe = N.createElement("div")).id = te + "-mw", fe.className = "tns-ovh", a.appendChild(fe), fe) : a).appendChild(he), tt && ((fe || he).className += " tns-ah"), me.insertBefore(a, F), he.appendChild(F), no(j, function (e, t) {
                    oo(e, "tns-item"), e.id || (e.id = te + "-item" + t), !_ && se && oo(e, se), co(e, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    })
                }), J) {
                    for (var Qt = N.createDocumentFragment(), en = N.createDocumentFragment(), tn = J; tn--;) {
                        var nn = tn % I,
                            rn = j[nn].cloneNode(!0);
                        oo(rn, Yt), lo(rn, "id"), en.insertBefore(rn, en.firstChild), _ && (rn = j[I - 1 - nn].cloneNode(!0), oo(rn, Yt), lo(rn, "id"), Qt.appendChild(rn))
                    }
                    F.insertBefore(Qt, F.firstChild), F.appendChild(en), j = F.children
                }
                if (!_)
                    for (var on = Q, an = Q + Math.min(I, X); on < an; on++) {
                        var sn = j[on];
                        sn.style.left = 100 * (on - Q) / X + "%", oo(sn, ie), io(sn, se)
                    }
                if (P && (l || q ? (eo(K, "#" + te + " > .tns-item", "font-size:" + o.getComputedStyle(j[0]).fontSize + ";", to(K)), eo(K, "#" + te, "font-size:0;", to(K))) : _ && no(j, function (e, t) {
                    e.style.marginLeft = g ? g + "(" + 100 * t + "% / " + Z + ")" : 100 * t / Z + "%"
                })), oe ? (d && (n = fe && T.autoHeight ? Rn(T.speed) : "", eo(K, "#" + te + "-mw", n, to(K))), n = _n(T.edgePadding, T.gutter, T.fixedWidth, T.speed, T.autoHeight), eo(K, "#" + te + "-iw", n, to(K)), _ && (n = P && !q ? "width:" + Pn(T.fixedWidth, T.gutter, T.items) + ";" : "", d && (n += Rn(Qe)), eo(K, "#" + te, n, to(K))), n = P && !q ? Fn(T.fixedWidth, T.gutter, T.items) : "", T.gutter && (n += jn(T.gutter)), _ || (d && (n += Rn(Qe)), x && (n += Mn(Qe)))) : (_ && tt && (fe.style[d] = Qe / 1e3 + "s"), he.style.cssText = _n(W, G, H, tt), _ && P && !q && (F.style.width = Pn(H, G, X)), n = P && !q ? Fn(H, G, X) : "", G && (n += jn(G))), n && eo(K, "#" + te + " > .tns-item", n, to(K)), k && oe)
                    for (var cn in k) {
                        var cn = parseInt(cn),
                            ln = k[cn],
                            n = "",
                            un = "",
                            dn = "",
                            fn = "",
                            pn = "",
                            hn = q ? null : ne("items", cn),
                            mn = ne("fixedWidth", cn),
                            gn = ne("speed", cn),
                            vn = ne("edgePadding", cn),
                            yn = ne("autoHeight", cn),
                            bn = ne("gutter", cn);
                        d && fe && ne("autoHeight", cn) && "speed" in ln && (un = "#" + te + "-mw{" + Rn(gn) + "}"), ("edgePadding" in ln || "gutter" in ln) && (dn = "#" + te + "-iw{" + _n(vn, bn, mn, gn, yn) + "}"), _ && P && !q && ("fixedWidth" in ln || "items" in ln || H && "gutter" in ln) && (fn = "width:" + Pn(mn, bn, hn) + ";"), d && "speed" in ln && (fn += Rn(gn)), fn = fn && "#" + te + "{" + fn + "}", ("fixedWidth" in ln || H && "gutter" in ln || !_ && "items" in ln) && (pn += Fn(mn, bn, hn)), "gutter" in ln && (pn += jn(bn)), !_ && "speed" in ln && (d && (pn += Rn(gn)), x) && (pn += Mn(gn)), (n = un + dn + fn + (pn = pn && "#" + te + " > .tns-item{" + pn + "}")) && K.insertRule("@media (min-width: " + cn / 16 + "em) {" + n + "}", K.cssRules.length)
                    }
                zn();
                var xn = V ? _ ? function () {
                    var e = St,
                        t = Et;
                    e += Ke, t -= Ke, W ? (e += 1, --t) : H && (U + G) % (H + G) && --t, J && (t < Q ? Q -= I : Q < e && (Q += I))
                } : function () {
                    if (Et < Q)
                        for (; St + I <= Q;) Q -= I;
                    else if (Q < St)
                        for (; Q <= Et - I;) Q += I
                } : function () {
                    Q = Math.max(St, Math.min(Et, Q))
                },
                    wn = _ ? function () {
                        var t, n, r, o, e, i, a, s, c, l, u;
                        gr(F, ""), d || !Qe ? (wr(), Qe && ho(F) || Ar()) : (t = F, n = vt, r = yt, o = bt, e = br(), i = Qe, a = Ar, s = Math.min(i, 10), c = 0 <= e.indexOf("%") ? "%" : "px", e = e.replace(c, ""), l = Number(t.style[n].replace(r, "").replace(o, "").replace(c, "")), u = (e - l) / i * s, setTimeout(function e() {
                            i -= s, l += u, t.style[n] = r + l + c + o, 0 < i ? setTimeout(e, s) : a()
                        }, s)), P || Wr()
                    } : function () {
                        pt = [];
                        var e = {};
                        e[S] = e[E] = Ar, yo(j[wt], e), vo(j[Q], e), Sr(wt, ie, ae, !0), Sr(Q, se, ie), S && E && Qe && ho(F) || Ar()
                    };
                return {
                    version: "2.9.4",
                    getInfo: re,
                    events: ee,
                    goTo: Lr,
                    play: function () {
                        Y && !Me && (_r(), Be = !1)
                    },
                    pause: function () {
                        Me && (Pr(), Be = !0)
                    },
                    isOn: ye,
                    updateSliderHeight: cr,
                    refresh: zn,
                    destroy: function () {
                        K.disabled = !0, K.ownerNode && K.ownerNode.remove(), yo(o, {
                            resize: Wn
                        }), Ze && yo(N, Bt), R && yo(R, It), B && yo(B, Rt), yo(F, Mt), yo(F, zt), D && yo(D, {
                            click: Fr
                        }), Y && clearInterval(Re), _ && S && ((e = {})[S] = Ar, yo(F, e)), it && yo(F, Dt), at && yo(F, qt);
                        var e, t, i = [ge, Ee, Ce, Ae, Oe, He];
                        for (t in A.forEach(function (e, t) {
                            var n, r, o = "container" === e ? a : T[e];
                            "object" == _typeof(o) && o && (n = !!o.previousElementSibling && o.previousElementSibling, r = o.parentNode, o.outerHTML = i[t], T[e] = n ? n.nextElementSibling : r.firstElementChild)
                        }), A = ie = ae = O = se = P = a = he = F = me = ge = j = I = pe = ve = q = H = W = G = U = X = Ke = Je = Ze = Qe = et = V = tt = K = dt = s = pt = J = Z = ht = mt = gt = vt = yt = bt = xt = Q = wt = St = Et = At = Lt = Ot = Tt = ee = Nt = te = kt = _t = Pt = Ft = jt = It = Rt = Mt = zt = Bt = Dt = qt = Ht = Wt = Gt = Ut = Xt = Vt = Kt = Jt = be = nt = rt = R = Ee = M = z = we = Se = ot = B = Oe = Le = Te = Ne = ke = _e = Pe = Fe = je = Ie = Y = st = qe = ct = lt = D = He = ut = We = Re = Me = ze = Be = De = $e = Xe = Ge = Ve = Ue = Ye = it = at = null, this) "rebuild" !== t && (this[t] = null);
                        ye = !1
                    },
                    rebuild: function () {
                        return r(Vr(T, L))
                    }
                }
            }

            function Sn(e) {
                e && (nt = ot = it = at = Ze = Y = lt = ut = !1)
            }

            function En() {
                for (var e = _ ? Q - J : Q; e < 0;) e += I;
                return e % I + 1
            }

            function Cn(e) {
                return e = e ? Math.max(0, Math.min(V ? I - 1 : I - X, e)) : 0, _ ? e + J : e
            }

            function An(e) {
                for (null == e && (e = Q), _ && (e -= J); e < 0;) e += I;
                return Math.floor(e % I)
            }

            function Ln() {
                var e = An(),
                    e = Gt ? e : H || q ? Math.ceil((e + 1) * Te / I - 1) : Math.floor(e / X);
                return e = !V && _ && Q === Et ? Te - 1 : e
            }

            function On() {
                return o.innerWidth || N.documentElement.clientWidth || N.body.clientWidth
            }

            function Tn(e) {
                return "top" === e ? "afterbegin" : "beforeend"
            }

            function Nn() {
                var e = W ? 2 * W - G : 0;
                return function e(t) {
                    var n, r;
                    if (null != t) return r = N.createElement("div"), t.appendChild(r), n = (n = r.getBoundingClientRect()).right - n.left, r.remove(), n || e(t.parentNode)
                }(me) - e
            }

            function kn(e) {
                if (T[e]) return !0;
                if (k)
                    for (var t in k)
                        if (k[t][e]) return !0;
                return !1
            }

            function ne(e, t) {
                if (null == t && (t = ve), "items" === e && H) return Math.floor((U + G) / (H + G)) || 1;
                var n = T[e];
                if (k)
                    for (var r in k) t >= parseInt(r) && e in k[r] && (n = k[r][e]);
                return "slideBy" === e && "page" === n && (n = ne("items")), n = _ || "slideBy" !== e && "items" !== e ? n : Math.floor(n)
            }

            function _n(e, t, n, r, o) {
                var i, a = "";
                return void 0 !== e ? (i = e, t && (i -= t), a = P ? "margin: 0 " + i + "px 0 " + e + "px;" : "margin: " + e + "px 0 " + i + "px 0;") : t && !n && (e = "-" + t + "px", a = "margin: 0 " + (P ? e + " 0 0" : "0 " + e + " 0") + ";"), !_ && o && d && r && (a += Rn(r)), a
            }

            function Pn(e, t, n) {
                return e ? (e + t) * Z + "px" : g ? g + "(" + 100 * Z + "% / " + n + ")" : 100 * Z / n + "%"
            }

            function Fn(e, t, n) {
                return t = "width:" + (t = e ? e + t + "px" : (_ || (n = Math.floor(n)), e = _ ? Z : n, g ? g + "(100% / " + e + ")" : 100 / e + "%")), "inner" !== ce ? t + ";" : t + " !important;"
            }

            function jn(e) {
                return !1 !== e ? (P ? "padding-" : "margin-") + (P ? "right" : "bottom") + ": " + e + "px;" : ""
            }

            function In(e, t) {
                e = e.substring(0, e.length - t).toLowerCase();
                return e = e && "-" + e + "-"
            }

            function Rn(e) {
                return In(d, 18) + "transition-duration:" + e / 1e3 + "s;"
            }

            function Mn(e) {
                return In(x, 17) + "animation-duration:" + e / 1e3 + "s;"
            }

            function zn() {
                var e;
                kn("autoHeight") || q || !P ? (no(e = F.querySelectorAll("img"), function (e) {
                    var t = e.src;
                    dt || (t && t.indexOf("data:image") < 0 ? (e.src = "", vo(e, Jt), oo(e, "loading"), e.src = t) : tr(e))
                }), $r(function () {
                    ir(uo(e), function () {
                        be = !0
                    })
                }), kn("autoHeight") && (e = rr(Q, Math.min(Q + X - 1, Z - 1))), dt ? Bn() : $r(function () {
                    ir(uo(e), Bn)
                })) : (_ && xr(), qn(), Hn())
            }

            function Bn() {
                var r;
                (q && 1 < I ? (r = V ? Q : I - 1, function e() {
                    var t = j[r].getBoundingClientRect().left,
                        n = j[r - 1].getBoundingClientRect().right;
                    Math.abs(t - n) <= 1 ? Dn() : setTimeout(function () {
                        e()
                    }, 16)
                }) : Dn)()
            }

            function Dn() {
                P && !q || (lr(), q ? (mt = yr(), Pt && (Ft = Un()), Et = xt(), Sn(kt || Ft)) : Wr()), _ && xr(), qn(), Hn()
            }

            function qn() {
                var e, t;
                if (ur(), a.insertAdjacentHTML("afterbegin", '<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">' + Zn() + "</span>  of " + I + "</div>"), xe = a.querySelector(".tns-liveregion .current"), Ut && (e = Y ? "stop" : "start", D ? co(D, {
                    "data-action": e
                }) : T.autoplayButtonOutput && (a.insertAdjacentHTML(Tn(T.autoplayPosition), '<button type="button" data-action="' + e + '">' + We[0] + e + We[1] + ct[0] + "</button>"), D = a.querySelector("[data-action]")), D && vo(D, {
                    click: Fr
                }), Y) && (_r(), lt && vo(F, Mt), ut) && vo(F, zt), Wt) {
                    if (B) co(B, {
                        "aria-label": "Carousel Pagination"
                    }), no(Le = B.children, function (e, t) {
                        co(e, {
                            "data-nav": t,
                            tabindex: "-1",
                            "aria-label": je + (t + 1),
                            "aria-controls": te
                        })
                    });
                    else {
                        for (var n = "", r = Gt ? "" : 'style="display:none"', o = 0; o < I; o++) n += '<button type="button" data-nav="' + o + '" tabindex="-1" aria-controls="' + te + '" ' + r + ' aria-label="' + je + (o + 1) + '"></button>';
                        a.insertAdjacentHTML(Tn(T.navPosition), n = '<div class="tns-nav" aria-label="Carousel Pagination">' + n + "</div>"), B = a.querySelector(".tns-nav"), Le = B.children
                    }
                    Ur(), d && (e = d.substring(0, d.length - 18).toLowerCase(), t = "transition: all " + Qe / 1e3 + "s", eo(K, "[aria-controls^=" + te + "-item]", t = e ? "-" + e + "-" + t : t, to(K))), co(Le[_e], {
                        "aria-label": je + (_e + 1) + Ie
                    }), lo(Le[_e], "tabindex"), oo(Le[_e], Fe), vo(B, Rt)
                }
                Ht && (R || M && z || (a.insertAdjacentHTML(Tn(T.controlsPosition), '<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button type="button" data-controls="prev" tabindex="-1" aria-controls="' + te + '">' + rt[0] + '</button><button type="button" data-controls="next" tabindex="-1" aria-controls="' + te + '">' + rt[1] + "</button></div>"), R = a.querySelector(".tns-controls")), M && z || (M = R.children[0], z = R.children[1]), T.controlsContainer && co(R, {
                    "aria-label": "Carousel Navigation",
                    tabindex: "0"
                }), (T.controlsContainer || T.prevButton && T.nextButton) && co([M, z], {
                    "aria-controls": te,
                    tabindex: "-1"
                }), (T.controlsContainer || T.prevButton && T.nextButton) && (co(M, {
                    "data-controls": "prev"
                }), co(z, {
                    "data-controls": "next"
                })), we = fr(M), Se = fr(z), mr(), R ? vo(R, It) : (vo(M, It), vo(z, It))), Xn()
            }

            function Hn() {
                var e;
                _ && S && ((e = {})[S] = Ar, vo(F, e)), it && vo(F, Dt, T.preventScrollOnTouch), at && vo(F, qt), Ze && vo(N, Bt), "inner" === ce ? ee.on("outerResized", function () {
                    Gn(), ee.emit("innerLoaded", re())
                }) : (k || H || q || tt || !P) && vo(o, {
                    resize: Wn
                }), tt && ("outer" === ce ? ee.on("innerLoaded", or) : kt || or()), er(), kt ? Kn() : Ft && Yn(), ee.on("indexChanged", ar), "inner" === ce && ee.emit("innerLoaded", re()), "function" == typeof Tt && Tt(re()), ye = !0
            }

            function Wn(e) {
                $r(function () {
                    Gn(Ir(e))
                })
            }

            function Gn(e) {
                if (ye) {
                    "outer" === ce && ee.emit("outerResized", re(e)), ve = On();
                    var t, n = pe,
                        r = !1;
                    k && ($n(), t = n !== pe) && ee.emit("newBreakpointStart", re(e));
                    var o, i, a, s, c, l, u, d, n = X,
                        f = kt,
                        p = Ft,
                        h = Ze,
                        m = nt,
                        g = ot,
                        v = it,
                        y = at,
                        b = Y,
                        x = lt,
                        w = ut,
                        S = Q;
                    if (t && (i = H, a = tt, s = rt, c = $, l = ct, oe || (u = G, d = W)), Ze = ne("arrowKeys"), nt = ne("controls"), ot = ne("nav"), it = ne("touch"), $ = ne("center"), at = ne("mouseDrag"), Y = ne("autoplay"), lt = ne("autoplayHoverPause"), ut = ne("autoplayResetOnVisibility"), t && (kt = ne("disable"), H = ne("fixedWidth"), Qe = ne("speed"), tt = ne("autoHeight"), rt = ne("controlsText"), ct = ne("autoplayText"), st = ne("autoplayTimeout"), oe || (W = ne("edgePadding"), G = ne("gutter"))), Sn(kt), U = Nn(), P && !q || kt || (lr(), P) || (Wr(), r = !0), (H || q) && (mt = yr(), Et = xt()), (t || H) && (X = ne("items"), Ke = ne("slideBy"), o = X !== n) && (H || q || (Et = xt()), xn()), t && kt !== f && (kt ? Kn : function () {
                        if (_t) {
                            if (K.disabled = !1, F.className += Nt, xr(), V)
                                for (var e = J; e--;) _ && po(j[e]), po(j[Z - e - 1]);
                            if (!_)
                                for (var t = Q, n = Q + I; t < n; t++) {
                                    var r = j[t],
                                        o = t < Q + X ? ie : se;
                                    r.style.left = 100 * (t - Q) / X + "%", oo(r, o)
                                }
                            Vn(), _t = !1
                        }
                    })(), Pt && (t || H || q) && (Ft = Un()) !== p)
                        if (Ft) wr(br(Cn(0))), Yn();
                        else {
                            if (jt) {
                                if (W && oe && (he.style.margin = ""), J)
                                    for (var E = "tns-transparent", C = J; C--;) _ && io(j[C], E), io(j[Z - C - 1], E);
                                Vn(), jt = !1
                            }
                            r = !0
                        } if (Sn(kt || Ft), Y || (lt = ut = !1), Ze !== h && (Ze ? vo : yo)(N, Bt), nt !== m && (nt ? R ? po(R) : (M && po(M), z && po(z)) : R ? fo(R) : (M && fo(M), z && fo(z))), ot !== g && (ot ? (po(B), Ur()) : fo(B)), it !== v && (it ? vo(F, Dt, T.preventScrollOnTouch) : yo(F, Dt)), at !== y && (at ? vo : yo)(F, qt), Y !== b && (Y ? (D && po(D), Me || Be || _r()) : (D && fo(D), Me && Pr())), lt !== x && (lt ? vo : yo)(F, Mt), ut !== w && (ut ? vo : yo)(N, zt), t ? (H === i && $ === c || (r = !0), tt === a || tt || (he.style.height = ""), nt && rt !== s && (M.innerHTML = rt[0], z.innerHTML = rt[1]), D && ct !== l && (n = Y ? 1 : 0, p = (f = D.innerHTML).length - l[n].length, f.substring(p) === l[n]) && (D.innerHTML = f.substring(0, p) + ct[n])) : $ && (H || q) && (r = !0), (o || H && !q) && (Te = Gr(), Ur()), (h = Q !== S) ? (ee.emit("indexChanged", re()), r = !0) : o ? h || ar() : (H || q) && (er(), ur(), Jn()), o && !_) {
                            for (var A = Q + Math.min(I, X), L = Z; L--;) {
                                var O = j[L];
                                Q <= L && L < A ? (oo(O, "tns-moving"), O.style.left = 100 * (L - Q) / X + "%", oo(O, ie), io(O, se)) : O.style.left && (O.style.left = "", oo(O, se), io(O, ie)), io(O, ae)
                            }
                            setTimeout(function () {
                                no(j, function (e) {
                                    io(e, "tns-moving")
                                })
                            }, 300)
                        }
                    kt || Ft || (t && !oe && (W === d && G === u || (he.style.cssText = _n(W, G, H, Qe, tt)), P) && (_ && (F.style.width = Pn(H, G, X)), m = Fn(H, G, X) + jn(G), v = to(g = K) - 1, "deleteRule" in g ? g.deleteRule(v) : g.removeRule(v), eo(K, "#" + te + " > .tns-item", m, to(K))), tt && or(), r && (xr(), wt = Q)), t && ee.emit("newBreakpointEnd", re(e))
                }
            }

            function Un() {
                var e, t;
                return H || q ? (e = H ? (H + G) * I : s[I], t = W ? U + 2 * W : U + G, $ && (t -= H ? (U - H) / 2 : (U - (s[Q + 1] - s[Q] - G)) / 2), e <= t) : I <= ($ ? X - (X - 1) / 2 : X)
            }

            function $n() {
                for (var e in pe = 0, k) (e = parseInt(e)) <= ve && (pe = e)
            }

            function Xn() {
                !Y && D && fo(D), !ot && B && fo(B), nt || (R ? fo(R) : (M && fo(M), z && fo(z)))
            }

            function Vn() {
                Y && D && po(D), ot && B && po(B), nt && (R ? po(R) : (M && po(M), z && po(z)))
            }

            function Yn() {
                if (!jt) {
                    if (W && (he.style.margin = "0px"), J)
                        for (var e = "tns-transparent", t = J; t--;) _ && oo(j[t], e), oo(j[Z - t - 1], e);
                    Xn(), jt = !0
                }
            }

            function Kn() {
                if (!_t) {
                    if (K.disabled = !0, F.className = F.className.replace(Nt.substring(1), ""), lo(F, ["style"]), V)
                        for (var e = J; e--;) _ && fo(j[e]), fo(j[Z - e - 1]);
                    if (P && _ || lo(he, ["style"]), !_)
                        for (var t = Q, n = Q + I; t < n; t++) {
                            var r = j[t];
                            lo(r, ["style"]), io(r, ie), io(r, se)
                        }
                    Xn(), _t = !0
                }
            }

            function Jn() {
                var e = Zn();
                xe.innerHTML !== e && (xe.innerHTML = e)
            }

            function Zn() {
                var e = Qn(),
                    t = e[0] + 1,
                    e = e[1] + 1;
                return t === e ? t + "" : t + " to " + e
            }

            function Qn(e) {
                null == e && (e = br());
                var n, r, o, i = Q;
                return $ || W ? (q || H) && (n = -(parseFloat(e) + W), r = n + U + 2 * W) : q && (n = s[Q], r = n + U), q ? s.forEach(function (e, t) {
                    t < Z && (($ || W) && e <= n + .5 && (i = t), .5 <= r - e) && (o = t)
                }) : (o = H ? (e = H + G, $ || W ? (i = Math.floor(n / e), Math.ceil(r / e - 1)) : i + Math.ceil(U / e) - 1) : $ || W ? (e = X - 1, o = $ ? (i -= e / 2, Q + e / 2) : Q + e, W && (i -= e = W * X / U, o += e), i = Math.floor(i), Math.ceil(o)) : i + X - 1, i = Math.max(i, 0), o = Math.min(o, Z - 1)), [i, o]
            }

            function er() {
                var e;
                dt && !kt && ((e = Qn()).push(ft), rr.apply(null, e).forEach(function (e) {
                    var t;
                    ro(e, Kt) || ((t = {})[S] = function (e) {
                        e.stopPropagation()
                    }, vo(e, t), vo(e, Jt), e.src = so(e, "data-src"), (t = so(e, "data-srcset")) && (e.srcset = t), oo(e, "loading"))
                }))
            }

            function tr(e) {
                oo(e, "loaded"), nr(e)
            }

            function nr(e) {
                oo(e, Kt), io(e, "loading"), yo(e, Jt)
            }

            function rr(e, t, n) {
                var r = [];
                for (n = n || "img"; e <= t;) no(j[e].querySelectorAll(n), function (e) {
                    r.push(e)
                }), e++;
                return r
            }

            function or() {
                var e = rr.apply(null, Qn());
                $r(function () {
                    ir(e, cr)
                })
            }

            function ir(n, e) {
                !be && (n.forEach(function (e, t) {
                    !dt && e.complete && nr(e), ro(e, Kt) && n.splice(t, 1)
                }), n.length) ? $r(function () {
                    ir(n, e)
                }) : e()
            }

            function ar() {
                var e, t;
                er(), ur(), Jn(), mr(), ot && (_e = 0 <= ke ? ke : Ln(), ke = -1, _e !== Pe) && (e = Le[Pe], t = Le[_e], co(e, {
                    tabindex: "-1",
                    "aria-label": je + (Pe + 1)
                }), io(e, Fe), co(t, {
                    "aria-label": je + (_e + 1) + Ie
                }), lo(t, "tabindex"), oo(t, Fe), Pe = _e)
            }

            function sr(e, t) {
                for (var n = [], r = e, o = Math.min(e + t, Z); r < o; r++) n.push(j[r].offsetHeight);
                return Math.max.apply(null, n)
            }

            function cr() {
                var e = tt ? sr(Q, X) : sr(J, I),
                    t = fe || he;
                t.style.height !== e && (t.style.height = e + "px")
            }

            function lr() {
                s = [0];
                var n = P ? "left" : "top",
                    r = P ? "right" : "bottom",
                    o = j[0].getBoundingClientRect()[n];
                no(j, function (e, t) {
                    t && s.push(e.getBoundingClientRect()[n] - o), t === Z - 1 && s.push(e.getBoundingClientRect()[r] - o)
                })
            }

            function ur() {
                var e = Qn(),
                    n = e[0],
                    r = e[1];
                no(j, function (e, t) {
                    n <= t && t <= r ? ao(e, "aria-hidden") && (lo(e, ["aria-hidden", "tabindex"]), oo(e, Vt)) : ao(e, "aria-hidden") || (co(e, {
                        "aria-hidden": "true",
                        tabindex: "-1"
                    }), io(e, Vt))
                })
            }

            function dr(e) {
                return e.nodeName.toLowerCase()
            }

            function fr(e) {
                return "button" === dr(e)
            }

            function pr(e) {
                return "true" === e.getAttribute("aria-disabled")
            }

            function hr(e, t, n) {
                e ? t.disabled = n : t.setAttribute("aria-disabled", n.toString())
            }

            function mr() {
                var e, t, n, r;
                !nt || et || V || (e = we ? M.disabled : pr(M), t = Se ? z.disabled : pr(z), r = !et && Et <= Q, (n = Q <= St) && !e && hr(we, M, !0), !n && e && hr(we, M, !1), r && !t && hr(Se, z, !0), !r && t && hr(Se, z, !1))
            }

            function gr(e, t) {
                d && (e.style[d] = t)
            }

            function vr(e) {
                return null == e && (e = Q), q ? (U - (W ? G : 0) - (s[e + 1] - s[e] - G)) / 2 : H ? (U - H) / 2 : (X - 1) / 2
            }

            function yr() {
                var e = U + (W ? G : 0) - (H ? (H + G) * Z : s[Z]);
                return e = 0 < (e = $ && !V ? H ? -(H + G) * (Z - 1) - vr() : vr(Z - 1) - s[Z - 1] : e) ? 0 : e
            }

            function br(e) {
                var t, n;
                return null == e && (e = Q), P && !q ? H ? (t = -(H + G) * e, $ && (t += vr())) : (n = v ? Z : X, $ && (e -= vr()), t = 100 * -e / n) : (t = -s[e], $ && q && (t += vr())), (t = ht ? Math.max(t, mt) : t) + (!P || q || H ? "px" : "%")
            }

            function xr(e) {
                gr(F, "0s"), wr(e)
            }

            function wr(e) {
                null == e && (e = br()), F.style[vt] = yt + e + bt
            }

            function Sr(e, t, n, r) {
                var o = e + X;
                V || (o = Math.min(o, Z));
                for (var i = e; i < o; i++) {
                    var a = j[i];
                    r || (a.style.left = 100 * (i - Q) / X + "%"), O && b && (a.style[b] = a.style[w] = O * (i - e) / 1e3 + "s"), io(a, t), oo(a, n), r && pt.push(a)
                }
            }

            function Er(e, t) {
                gt && xn(), Q === wt && !t || (ee.emit("indexChanged", re()), ee.emit("transitionStart", re()), tt && or(), Me && e && 0 <= ["click", "keydown"].indexOf(e.type) && Pr(), Ot = !0, wn())
            }

            function Cr(e) {
                return e.toLowerCase().replace(/-/g, "")
            }

            function Ar(e) {
                if (_ || Ot) {
                    if (ee.emit("transitionEnd", re(e)), !_ && 0 < pt.length)
                        for (var t = 0; t < pt.length; t++) {
                            var n = pt[t];
                            n.style.left = "", w && b && (n.style[w] = "", n.style[b] = ""), io(n, ae), oo(n, se)
                        } (!e || !_ && e.target.parentNode === F || e.target === F && Cr(e.propertyName) === Cr(vt)) && (gt || (e = Q, xn(), Q !== e && (ee.emit("indexChanged", re()), xr())), "inner" === ce && ee.emit("innerLoaded", re()), Ot = !1, wt = Q)
                }
            }

            function Lr(e, t) {
                if (!Ft)
                    if ("prev" === e) Or(t, -1);
                    else if ("next" === e) Or(t, 1);
                    else {
                        if (Ot) {
                            if (Ct) return;
                            Ar()
                        }
                        var n = An(),
                            r = 0;
                        "first" === e ? r = -n : "last" === e ? r = _ ? I - X - n : I - 1 - n : ("number" != typeof e && (e = parseInt(e)), isNaN(e) || (r = (e = t ? e : Math.max(0, Math.min(I - 1, e))) - n)), !_ && r && Math.abs(r) < X && (e = 0 < r ? 1 : -1, r += St <= Q + r - I ? I * e : 2 * I * e * -1), Q += r, _ && V && (Q < St && (Q += I), Et < Q) && (Q -= I), An(Q) !== An(wt) && Er(t)
                    }
            }

            function Or(e, t) {
                if (Ot) {
                    if (Ct) return;
                    Ar()
                }
                var n;
                if (!t) {
                    for (var r = Rr(e = Ir(e)); r !== R && [M, z].indexOf(r) < 0;) r = r.parentNode;
                    var o = [M, z].indexOf(r);
                    0 <= o && (n = !0, t = 0 === o ? -1 : 1)
                }
                if (et) {
                    if (Q === St && -1 === t) return void Lr("last", e);
                    if (Q === Et && 1 === t) return void Lr("first", e)
                }
                t && (Q += Ke * t, q && (Q = Math.floor(Q)), Er(n || e && "keydown" === e.type ? e : null))
            }

            function Tr() {
                Re = setInterval(function () {
                    Or(null, qe)
                }, st), Me = !0
            }

            function Nr() {
                clearInterval(Re), Me = !1
            }

            function kr(e, t) {
                co(D, {
                    "data-action": e
                }), D.innerHTML = We[0] + e + We[1] + t
            }

            function _r() {
                Tr(), D && kr("stop", ct[1])
            }

            function Pr() {
                Nr(), D && kr("start", ct[0])
            }

            function Fr() {
                Be = Me ? (Pr(), !0) : (_r(), !1)
            }

            function jr(e) {
                e.focus()
            }

            function Ir(e) {
                return Mr(e = e || o.event) ? e.changedTouches[0] : e
            }

            function Rr(e) {
                return e.target || o.event.srcElement
            }

            function Mr(e) {
                return 0 <= e.type.indexOf("touch")
            }

            function zr(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }

            function Br() {
                return t = Xe.y - $e.y, n = Xe.x - $e.x, t = Math.atan2(t, n) * (180 / Math.PI), n = !1, 90 - (e = At) <= (t = Math.abs(90 - Math.abs(t))) ? n = "horizontal" : t <= e && (n = "vertical"), n === T.axis;
                var e, t, n
            }

            function Dr(e) {
                if (Ot) {
                    if (Ct) return;
                    Ar()
                }
                Y && Me && Nr(), Ve = !0, Ue && (Xr(Ue), Ue = null);
                var t = Ir(e);
                ee.emit(Mr(e) ? "touchStart" : "dragStart", re(e)), !Mr(e) && 0 <= ["img", "a"].indexOf(dr(Rr(e))) && zr(e), Xe.x = $e.x = t.clientX, Xe.y = $e.y = t.clientY, _ && (Ge = parseFloat(F.style[vt].replace(yt, "")), gr(F, "0s"))
            }

            function qr(e) {
                var t;
                Ve && (t = Ir(e), Xe.x = t.clientX, Xe.y = t.clientY, _ ? Ue = Ue || $r(function () {
                    ! function e(t) {
                        if (!Lt) return Ve = !1;
                        if (Xr(Ue), Ve && (Ue = $r(function () {
                            e(t)
                        })), Lt = "?" === Lt ? Br() : Lt) {
                            !Zt && Mr(t) && (Zt = !0);
                            try {
                                t.type && ee.emit(Mr(t) ? "touchMove" : "dragMove", re(t))
                            } catch (e) { }
                            var n = Ge,
                                r = Ye(Xe, $e);
                            n = !P || H || q ? n + r + "px" : n + (v ? r * X * 100 / ((U + G) * Z) : 100 * r / (U + G)) + "%", F.style[vt] = yt + n + bt
                        }
                    }(e)
                }) : (Lt = "?" === Lt ? Br() : Lt) && (Zt = !0), "boolean" != typeof e.cancelable || e.cancelable) && Zt && e.preventDefault()
            }

            function Hr(r) {
                var e, o, n;
                Ve && (Ue && (Xr(Ue), Ue = null), _ && gr(F, ""), Ve = !1, e = Ir(r), Xe.x = e.clientX, Xe.y = e.clientY, o = Ye(Xe, $e), Math.abs(o)) && (Mr(r) || vo(n = Rr(r), {
                    click: function e(t) {
                        zr(t), yo(n, {
                            click: e
                        })
                    }
                }), _ ? Ue = $r(function () {
                    if (P && !q) {
                        var e = -o * X / (U + G),
                            e = 0 < o ? Math.floor(e) : Math.ceil(e);
                        Q += e
                    } else {
                        var t = -(Ge + o);
                        if (t <= 0) Q = St;
                        else if (t >= s[Z - 1]) Q = Et;
                        else
                            for (var n = 0; n < Z && t >= s[n];) t > s[Q = n] && o < 0 && (Q += 1), n++
                    }
                    Er(r, o), ee.emit(Mr(r) ? "touchEnd" : "dragEnd", re(r))
                }) : Lt && Or(r, 0 < o ? -1 : 1)), "auto" === T.preventScrollOnTouch && (Zt = !1), At && (Lt = "?"), Y && !Me && Tr()
            }

            function Wr() {
                (fe || he).style.height = s[Q + X] - s[Q] + "px"
            }

            function Gr() {
                var e = H ? (H + G) * I / U : I / X;
                return Math.min(Math.ceil(e), I)
            }

            function Ur() {
                if (ot && !Gt && Te !== Ne) {
                    var e = Ne,
                        t = Te,
                        n = po;
                    for (Te < Ne && (e = Te, t = Ne, n = fo); e < t;) n(Le[e]), e++;
                    Ne = Te
                }
            }

            function re(e) {
                return {
                    container: F,
                    slideItems: j,
                    navContainer: B,
                    navItems: Le,
                    controlsContainer: R,
                    hasControls: Ht,
                    prevButton: M,
                    nextButton: z,
                    items: X,
                    slideBy: Ke,
                    cloneCount: J,
                    slideCount: I,
                    slideCountNew: Z,
                    index: Q,
                    indexCached: wt,
                    displayIndex: En(),
                    navCurrentIndex: _e,
                    navCurrentIndexCached: Pe,
                    pages: Te,
                    pagesCached: Ne,
                    sheet: K,
                    isOn: ye,
                    event: e || {}
                }
            }
            C && console.warn("No slides found in", T.container)
        }
}();

function _typeof(e) {
    return (_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e
    } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
    })(e)
}

function _regeneratorRuntime() {
    "use strict";
    _regeneratorRuntime = function () {
        return a
    };
    var a = {},
        e = Object.prototype,
        c = e.hasOwnProperty,
        l = Object.defineProperty || function (e, t, n) {
            e[t] = n.value
        },
        t = "function" == typeof Symbol ? Symbol : {},
        r = t.iterator || "@@iterator",
        n = t.asyncIterator || "@@asyncIterator",
        o = t.toStringTag || "@@toStringTag";

    function i(e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }), e[t]
    }
    try {
        i({}, "")
    } catch (e) {
        i = function (e, t, n) {
            return e[t] = n
        }
    }

    function s(e, t, n, r) {
        var o, i, a, s, t = t && t.prototype instanceof f ? t : f,
            t = Object.create(t.prototype),
            r = new w(r || []);
        return l(t, "_invoke", {
            value: (o = e, i = n, a = r, s = "suspendedStart", function (e, t) {
                if ("executing" === s) throw new Error("Generator is already running");
                if ("completed" === s) {
                    if ("throw" === e) throw t;
                    return E()
                }
                for (a.method = e, a.arg = t; ;) {
                    var n = a.delegate;
                    if (n) {
                        n = function e(t, n) {
                            var r = t.iterator[n.method];
                            if (void 0 === r) {
                                if (n.delegate = null, "throw" === n.method) {
                                    if (t.iterator.return && (n.method = "return", n.arg = void 0, e(t, n), "throw" === n.method)) return d;
                                    n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                                }
                                return d
                            }
                            r = u(r, t.iterator, n.arg);
                            if ("throw" === r.type) return n.method = "throw", n.arg = r.arg, n.delegate = null, d;
                            r = r.arg;
                            return r ? r.done ? (n[t.resultName] = r.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = void 0), n.delegate = null, d) : r : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, d)
                        }(n, a);
                        if (n) {
                            if (n === d) continue;
                            return n
                        }
                    }
                    if ("next" === a.method) a.sent = a._sent = a.arg;
                    else if ("throw" === a.method) {
                        if ("suspendedStart" === s) throw s = "completed", a.arg;
                        a.dispatchException(a.arg)
                    } else "return" === a.method && a.abrupt("return", a.arg);
                    s = "executing";
                    n = u(o, i, a);
                    if ("normal" === n.type) {
                        if (s = a.done ? "completed" : "suspendedYield", n.arg === d) continue;
                        return {
                            value: n.arg,
                            done: a.done
                        }
                    }
                    "throw" === n.type && (s = "completed", a.method = "throw", a.arg = n.arg)
                }
            })
        }), t
    }

    function u(e, t, n) {
        try {
            return {
                type: "normal",
                arg: e.call(t, n)
            }
        } catch (e) {
            return {
                type: "throw",
                arg: e
            }
        }
    }
    a.wrap = s;
    var d = {};

    function f() { }

    function p() { }

    function h() { }
    var t = {},
        m = (i(t, r, function () {
            return this
        }), Object.getPrototypeOf),
        m = m && m(m(S([]))),
        g = (m && m !== e && c.call(m, r) && (t = m), h.prototype = f.prototype = Object.create(t));

    function v(e) {
        ["next", "throw", "return"].forEach(function (t) {
            i(e, t, function (e) {
                return this._invoke(t, e)
            })
        })
    }

    function y(a, s) {
        var t;
        l(this, "_invoke", {
            value: function (n, r) {
                function e() {
                    return new s(function (e, t) {
                        ! function t(e, n, r, o) {
                            var i, e = u(a[e], a, n);
                            if ("throw" !== e.type) return (n = (i = e.arg).value) && "object" == _typeof(n) && c.call(n, "__await") ? s.resolve(n.__await).then(function (e) {
                                t("next", e, r, o)
                            }, function (e) {
                                t("throw", e, r, o)
                            }) : s.resolve(n).then(function (e) {
                                i.value = e, r(i)
                            }, function (e) {
                                return t("throw", e, r, o)
                            });
                            o(e.arg)
                        }(n, r, e, t)
                    })
                }
                return t = t ? t.then(e, e) : e()
            }
        })
    }

    function b(e) {
        var t = {
            tryLoc: e[0]
        };
        1 in e && (t.catchLoc = e[1]), 2 in e && (t.finallyLoc = e[2], t.afterLoc = e[3]), this.tryEntries.push(t)
    }

    function x(e) {
        var t = e.completion || {};
        t.type = "normal", delete t.arg, e.completion = t
    }

    function w(e) {
        this.tryEntries = [{
            tryLoc: "root"
        }], e.forEach(b, this), this.reset(!0)
    }

    function S(t) {
        if (t) {
            var n, e = t[r];
            if (e) return e.call(t);
            if ("function" == typeof t.next) return t;
            if (!isNaN(t.length)) return n = -1, (e = function e() {
                for (; ++n < t.length;)
                    if (c.call(t, n)) return e.value = t[n], e.done = !1, e;
                return e.value = void 0, e.done = !0, e
            }).next = e
        }
        return {
            next: E
        }
    }

    function E() {
        return {
            value: void 0,
            done: !0
        }
    }
    return l(g, "constructor", {
        value: p.prototype = h,
        configurable: !0
    }), l(h, "constructor", {
        value: p,
        configurable: !0
    }), p.displayName = i(h, o, "GeneratorFunction"), a.isGeneratorFunction = function (e) {
        e = "function" == typeof e && e.constructor;
        return !!e && (e === p || "GeneratorFunction" === (e.displayName || e.name))
    }, a.mark = function (e) {
        return Object.setPrototypeOf ? Object.setPrototypeOf(e, h) : (e.__proto__ = h, i(e, o, "GeneratorFunction")), e.prototype = Object.create(g), e
    }, a.awrap = function (e) {
        return {
            __await: e
        }
    }, v(y.prototype), i(y.prototype, n, function () {
        return this
    }), a.AsyncIterator = y, a.async = function (e, t, n, r, o) {
        void 0 === o && (o = Promise);
        var i = new y(s(e, t, n, r), o);
        return a.isGeneratorFunction(t) ? i : i.next().then(function (e) {
            return e.done ? e.value : i.next()
        })
    }, v(g), i(g, o, "Generator"), i(g, r, function () {
        return this
    }), i(g, "toString", function () {
        return "[object Generator]"
    }), a.keys = function (e) {
        var t, n = Object(e),
            r = [];
        for (t in n) r.push(t);
        return r.reverse(),
            function e() {
                for (; r.length;) {
                    var t = r.pop();
                    if (t in n) return e.value = t, e.done = !1, e
                }
                return e.done = !0, e
            }
    }, a.values = S, w.prototype = {
        constructor: w,
        reset: function (e) {
            if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, this.tryEntries.forEach(x), !e)
                for (var t in this) "t" === t.charAt(0) && c.call(this, t) && !isNaN(+t.slice(1)) && (this[t] = void 0)
        },
        stop: function () {
            this.done = !0;
            var e = this.tryEntries[0].completion;
            if ("throw" === e.type) throw e.arg;
            return this.rval
        },
        dispatchException: function (n) {
            if (this.done) throw n;
            var r = this;

            function e(e, t) {
                return i.type = "throw", i.arg = n, r.next = e, t && (r.method = "next", r.arg = void 0), !!t
            }
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var o = this.tryEntries[t],
                    i = o.completion;
                if ("root" === o.tryLoc) return e("end");
                if (o.tryLoc <= this.prev) {
                    var a = c.call(o, "catchLoc"),
                        s = c.call(o, "finallyLoc");
                    if (a && s) {
                        if (this.prev < o.catchLoc) return e(o.catchLoc, !0);
                        if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                    } else if (a) {
                        if (this.prev < o.catchLoc) return e(o.catchLoc, !0)
                    } else {
                        if (!s) throw new Error("try statement without catch or finally");
                        if (this.prev < o.finallyLoc) return e(o.finallyLoc)
                    }
                }
            }
        },
        abrupt: function (e, t) {
            for (var n = this.tryEntries.length - 1; 0 <= n; --n) {
                var r = this.tryEntries[n];
                if (r.tryLoc <= this.prev && c.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                    var o = r;
                    break
                }
            }
            var i = (o = o && ("break" === e || "continue" === e) && o.tryLoc <= t && t <= o.finallyLoc ? null : o) ? o.completion : {};
            return i.type = e, i.arg = t, o ? (this.method = "next", this.next = o.finallyLoc, d) : this.complete(i)
        },
        complete: function (e, t) {
            if ("throw" === e.type) throw e.arg;
            return "break" === e.type || "continue" === e.type ? this.next = e.arg : "return" === e.type ? (this.rval = this.arg = e.arg, this.method = "return", this.next = "end") : "normal" === e.type && t && (this.next = t), d
        },
        finish: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n = this.tryEntries[t];
                if (n.finallyLoc === e) return this.complete(n.completion, n.afterLoc), x(n), d
            }
        },
        catch: function (e) {
            for (var t = this.tryEntries.length - 1; 0 <= t; --t) {
                var n, r, o = this.tryEntries[t];
                if (o.tryLoc === e) return "throw" === (n = o.completion).type && (r = n.arg, x(o)), r
            }
            throw new Error("illegal catch attempt")
        },
        delegateYield: function (e, t, n) {
            return this.delegate = {
                iterator: S(e),
                resultName: t,
                nextLoc: n
            }, "next" === this.method && (this.arg = void 0), d
        }
    }, a
}

function asyncGeneratorStep(e, t, n, r, o, i, a) {
    try {
        var s = e[i](a),
            c = s.value
    } catch (e) {
        return void n(e)
    }
    s.done ? t(c) : Promise.resolve(c).then(r, o)
}

function _asyncToGenerator(s) {
    return function () {
        var e = this,
            a = arguments;
        return new Promise(function (t, n) {
            var r = s.apply(e, a);

            function o(e) {
                asyncGeneratorStep(r, t, n, o, i, "next", e)
            }

            function i(e) {
                asyncGeneratorStep(r, t, n, o, i, "throw", e)
            }
            o(void 0)
        })
    }
}
var handleSearch = function () {
    var e, t, n = document.querySelector(".js-header-search-inner"),
        r = document.querySelector(".js-search-toggle");
    !n || !r || CONFIG.GHOST_URL && CONFIG.GHOST_KEY ? (e = document.querySelector(".js-search-input"), t = document.querySelector(".js-search-form"), e && t && (e.addEventListener("focus", function (e) {
        prepareSearch()
    }), e.onkeyup = function (e) {
        e.preventDefault(), 2 < e.target.value.length ? performSearch(e.target.value) : document.querySelector(".js-search-results").innerHTML = ""
    }, t.addEventListener("submit", function (e) {
        e.preventDefault(), console.log(e.target.value), performSearch(e.target.value)
    }, !1), (t = document.querySelector(".js-search-btn")) && (t.onclick = function () {
        e.focus()
    }), t = document.querySelector(".js-search-cancel")) && (t.onclick = function () {
        e.value = "", e.dispatchEvent(new Event("keyup"))
    })) : (n.classList.add("is-hidden"), r.classList.add("is-hidden"))
},
    prepareSearch = function () {
        GLOBAL.FUSE || function () {
            var n = _asyncToGenerator(_regeneratorRuntime().mark(function e(t, n) {
                var r, o, i;
                return _regeneratorRuntime().wrap(function (e) {
                    for (; ;) switch (e.prev = e.next) {
                        case 0:
                            return i = new GhostContentAPI({
                                url: CONFIG.GHOST_URL,
                                key: CONFIG.GHOST_KEY,
                                version: CONFIG.GHOST_VERSION
                            }), r = CONFIG.GHOST_SEARCH_IN_CONTENT ? "url,slug,title,published_at,custom_excerpt,visibility,plaintext" : "url,slug,title,published_at,custom_excerpt,visibility", o = CONFIG.GHOST_SEARCH_IN_CONTENT ? ["html,plaintext"] : "", e.prev = 3, e.next = 6, i.posts.browse({
                                limit: "all",
                                include: "tags",
                                fields: r,
                                filter: t,
                                formats: o
                            });
                        case 6:
                            return i = e.sent, e.abrupt("return", i);
                        case 10:
                            e.prev = 10, e.t0 = e.catch(3), console.log(e.t0);
                        case 13:
                        case "end":
                            return e.stop()
                    }
                }, e, null, [
                    [3, 10]
                ])
            }));
            return function (e, t) {
                return n.apply(this, arguments)
            }
        }()().then(function (e) {
            var t = CONFIG.GHOST_SEARCH_IN_CONTENT ? [{
                name: "title"
            }, {
                name: "tags.name"
            }, {
                name: "custom_excerpt"
            }, {
                name: "plaintext"
            }] : [{
                name: "title"
            }, {
                name: "tags.name"
            }, {
                name: "custom_excerpt"
            }];
            GLOBAL.FUSE = new Fuse(e, {
                shouldSort: !0,
                tokenize: !0,
                matchAllTokens: !0,
                threshold: 0,
                location: 0,
                distance: 100,
                maxPatternLength: 32,
                minMatchCharLength: 3,
                ignoreLocation: !0,
                keys: t
            })
        })
    },
    performSearch = function (a) {
        var e = GLOBAL.FUSE.search(a, {
            limit: CONFIG.GHOST_SEARCH_LIMIT
        }),
            t = document.querySelector(".js-search-results");
        0 === e.length ? t.innerHTML = "" : (e = e.map(function (e) {
            var t, n, r = e.item.title.search(new RegExp(a, "i")),
                r = -1 < r ? "".concat(e.item.title.substring(0, r), '<span class="highlight">').concat(e.item.title.substring(r, r + a.length), "</span>").concat(e.item.title.substring(r + a.length, e.item.title.length)) : e.item.title,
                o = 0,
                i = 100;
            return n = CONFIG.GHOST_SEARCH_IN_CONTENT ? (50 < (t = e.item.plaintext.search(new RegExp(a, "i"))) && (o = t - 50, i = t + 50), n = e.item.plaintext.substring(o, i), -1 < t ? "...".concat(e.item.plaintext.substring(o, t), '<span class="highlight">').concat(e.item.plaintext.substring(t, t + a.length), "</span>").concat(e.item.plaintext.substring(t + a.length, i), "...") : n) : e.item.custom_excerpt ? (50 < (t = e.item.custom_excerpt.search(new RegExp(a, "i"))) && (o = t - 50, i = t + 50), n = e.item.custom_excerpt ? e.item.custom_excerpt.substring(o, i) : "", -1 < t ? "...".concat(e.item.custom_excerpt.substring(o, t), '<span class="highlight">').concat(e.item.custom_excerpt.substring(t, t + a.length), "</span>").concat(e.item.custom_excerpt.substring(t + a.length, i), "...") : n) : "", "<a href='".concat(e.item.url, "' class='search-result__post border'>\n              <div class='search-result__content'>\n                <h5 class='search-result__title'>").concat(r, "</h5>\n                <p class='search-result__excerpt'>").concat(n, "</p>\n              </div>\n            </a>")
        }).join(" "), t.innerHTML = e)
    },
    handleLoadMore = function () {
        var e = document.querySelector(".js-load-more");
        e && GLOBAL.LAST_PAGE && (e.disabled = !0, e.classList.add("btn--disabled")), e && (e.onclick = function (e) {
            loadMorePosts(e.srcElement)
        })
    },
    handleImageGallery = function () {
        var e = document.querySelectorAll(".kg-image-card img, .kg-gallery-card img");
        document.querySelectorAll(".kg-gallery-image img").forEach(function (e) {
            e.setAttribute("alt", "Gallery Image");
            var t = e.closest(".kg-gallery-image"),
                n = e.attributes.width.value,
                e = e.attributes.height.value;
            t.style.flex = "".concat(n / e, " 1 0%")
        }), CONFIG.ENABLE_IMAGE_LIGHTBOX && (e.forEach(function (e) {
            var t, n = "A" === e.parentNode.nodeName ? e.parentNode.getAttribute("href") : "",
                r = n ? e.parentNode : document.createElement("a");
            r.setAttribute("data-no-swup", ""), r.setAttribute("data-fslightbox", ""), r.setAttribute("href", e.src), r.setAttribute("aria-label", "Click for Lightbox"), n ? ((t = document.createElement("a")).innerHTML = '<i class="icon icon-link icon--xs"><svg class="icon__svg"><use xlink:href="/assets/icons/feather-sprite.svg#link"></use></svg></i>', t.setAttribute("class", "image-link"), t.setAttribute("href", n), CONFIG.OPEN_LINKS_IN_NEW_TAB && (t.setAttribute("target", "_blank"), t.setAttribute("rel", "noreferrer noopener")), r.parentNode.insertBefore(t, r.parentNode.firstChild)) : (e.parentNode.insertBefore(r, e.parentNode.firstChild), r.appendChild(e))
        }), refreshFsLightbox()), CONFIG.ENABLE_IMAGE_LIGHTBOX && refreshFsLightbox()
    },
    handleMenu = function () {
        var e = document.querySelector(".js-theme-toggle"),
            e = (e && (e.onclick = function (e) {
                e.currentTarget.classList.toggle("is-active")
            }), document.querySelector(".js-grid-btn")),
            e = (e && (e.onclick = function () {
                setView("grid")
            }), document.querySelector(".js-list-btn")),
            e = (e && (e.onclick = function () {
                setView("list")
            }), document.querySelector(".js-view-toggle"));
        e && (e.onclick = function () {
            toggleView()
        }), 0 == CONFIG.ENABLE_STICKY_HEADER && window.addEventListener("scroll", function (e) {
            var t = window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop;
            document.querySelector(".menu").style.top = t <= 60 ? "".concat(60 - t, "px") : "0px"
        }, !1)
    },
    handleUserMenu = function () {
        var e = document.querySelector(".js-member-btn"),
            t = !1;
        e && (e.onfocus = function (e) {
            t = !0, e.currentTarget.nextElementSibling.classList.add("is-active")
        }, e.onblur = function (e) {
            e.currentTarget.nextElementSibling.classList.remove("is-active")
        }, e.onclick = function (e) {
            t ? t = !1 : e.currentTarget.nextElementSibling.classList.toggle("is-active")
        })
    },
    handleAnnouncement = function () {
        var e = document.querySelector(".js-announce-btn"),
            t = !1;
        e && (e.onfocus = function (e) {
            t = !0, e.currentTarget.nextElementSibling.classList.add("is-active")
        }, e.onblur = function (e) {
            e.currentTarget.nextElementSibling.classList.remove("is-active")
        }, e.onclick = function (e) {
            t ? t = !1 : e.currentTarget.nextElementSibling.classList.toggle("is-active")
        })
    },
    handleFilter = function () {
        var e = document.querySelector(".js-filter-btn");
        e && (e.onchange = function (e) {
            e.target.value && (window.location.href = e.target.value)
        })
    },
    handleScrollTop = function () {
        var e = document.querySelector(".js-scroll-top");
        e && (e.onclick = function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            })
        })
    },
    handleNotifications = function () {
        document.querySelectorAll(".js-notify-close").forEach(function (e) {
            e.onclick = function (e) {
                var t = e.currentTarget.getAttribute("data-class");
                t ? (document.body.classList.remove(t), clearURI()) : e.currentTarget.parentNode.classList.remove("success", "error")
            }
        })
    },
    handleSlider = function () {
        var e = document.querySelector(".js-featured-feed");
        e && tns({
            container: e,
            items: 3,
            slideBy: 1,
            loop: !0,
            autoplay: !1,
            gutter: 32,
            nav: !1,
            controls: !0,
            prevButton: document.querySelector(".js-featured-prev"),
            nextButton: document.querySelector(".js-featured-next"),
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        })
    },
    handleClick = function () {
        var t = document.querySelector(".js-menu-toggle"),
            n = document.querySelector(".js-menu"),
            r = document.querySelector(".js-search-toggle"),
            o = document.querySelector(".js-header-search");
        window.addEventListener("click", function (e) {
            t && n && e.target.closest(".js-menu-toggle") && (t.classList.toggle("is-active"), n.toggleAttribute("data-menu-active"), document.body.classList.toggle("menu-open")), r && e.target.closest(".js-search-toggle") && o && o.classList.toggle("is-active"), !CONFIG.ENABLE_MENU_AUTO_CLOSE || e.target.closest(".js-menu") || e.target.closest(".js-menu-toggle") || (document.body.classList.remove("menu-open"), n.removeAttribute("data-menu-active"), t.classList.remove("is-active")), e.target.closest(".js-header-search") || e.target.closest(".js-search-toggle") || o && o.classList.remove("is-active")
        })
    },
    handleExternalLinks = function () {
        var t;
        CONFIG.OPEN_LINKS_IN_NEW_TAB && (t = location.host.replace("www.", ""), document.querySelectorAll(".content a").forEach(function (e) {
            e.href.includes(t) || (e.setAttribute("target", "_blank"), e.setAttribute("rel", "noreferrer noopener"))
        }))
    },
    setColorScheme = function (e) {
        document.documentElement.setAttribute("data-color-scheme", e), localStorage.setItem("USER_COLOR_SCHEME", e)
    },
    toggleView = function () {
        var e = document.documentElement.getAttribute("data-view-type");
        setView("grid" === e ? "list" : "grid")
    },
    setView = function (e) {
        document.documentElement.setAttribute("data-view-type", e), localStorage.setItem("USER_VIEW_TYPE", e)
    },
    toggleClass = function (e, t) {
        e && document.querySelector(e).classList.toggle(t)
    },
    addClass = function (e, t) {
        e && document.querySelector(e).classList.add(t)
    },
    removeClass = function (e, t) {
        e && document.querySelector(e).classList.remove(t)
    },
    isInViewport = function (e) {
        for (var t = e.offsetTop, n = e.offsetLeft, r = e.offsetWidth, o = e.offsetHeight; e.offsetParent;) t += (e = e.offsetParent).offsetTop, n += e.offsetLeft;
        return t < window.pageYOffset + window.innerHeight && n < window.pageXOffset + window.innerWidth && t + o > window.pageYOffset && n + r > window.pageXOffset
    },
    loadMorePosts = function (r) {
        var e = document.querySelector("link[rel=next]");
        GLOBAL.NEXT_PAGE_LINK = e && !GLOBAL.NEXT_PAGE_LINK ? e.getAttribute("href") : GLOBAL.NEXT_PAGE_LINK, GLOBAL.NEXT_PAGE_LINK && !GLOBAL.LAST_PAGE && (r && r.classList.add("is-loading"), fetch(GLOBAL.NEXT_PAGE_LINK).then(function (e) {
            return e.text()
        }).then(function (e) {
            return (new DOMParser).parseFromString(e, "text/html")
        }).then(function (e) {
            var t = e.querySelectorAll(".js-post-card"),
                n = document.querySelector(".js-post-feed"),
                e = e.querySelector("link[rel=next]");
            t.forEach(function (e) {
                n.appendChild(e)
            }), GLOBAL.CURRENT_PAGE = GLOBAL.CURRENT_PAGE + 1, GLOBAL.NEXT_PAGE_LINK = e ? e.getAttribute("href") : "", GLOBAL.NEXT_PAGE = GLOBAL.NEXT_PAGE_LINK ? GLOBAL.NEXT_PAGE + 1 : NaN, GLOBAL.LAST_PAGE = GLOBAL.CURRENT_PAGE === GLOBAL.MAX_PAGES, r && GLOBAL.LAST_PAGE && (r.disabled = !0, r.classList.add("btn--disabled")), r && r.classList.remove("is-loading")
        }).catch(function (e) {
            console.warn("Something went wrong.", e)
        }))
    },
    getPosts = function (e, t) {
        getApi().posts.browse({
            limit: "all",
            include: "tags,authors",
            filter: e
        }).then(function (e) {
            t(e)
        }).catch(function (e) {
            console.error(e)
        })
    },
    getApi = function () {
        var e;
        return GLOBAL.API || (e = new GhostContentAPI({
            url: CONFIG.GHOST_URL,
            key: CONFIG.GHOST_KEY,
            version: CONFIG.GHOST_VERSION
        }), GLOBAL.API = e), GLOBAL.API
    },
    callback = function () {
        fitvids(), handleLoadMore(), handleImageGallery(), handleMenu(), handleUserMenu(), handleAnnouncement(), handleFilter(), handleScrollTop(), handleNotifications(), handleSlider(), handleClick(), handleExternalLinks()
    };
"complete" === document.readyState || "loading" !== document.readyState && !document.documentElement.doScroll ? callback() : document.addEventListener("DOMContentLoaded", callback);