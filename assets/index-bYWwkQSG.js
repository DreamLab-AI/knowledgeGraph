const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/HomePage-6t0zzDgO.js","assets/HomePage-RKp01P_F.css","assets/PageView-CKv9Myon.js","assets/useGraphStore-otTAmbC8.js","assets/PageView-CrBiD9jX.css","assets/OntologyView-ALfuyrpn.js","assets/OntologyView-COLyS6Oa.css","assets/SearchView-HIbNQ7CC.js","assets/SearchView-B1Oxdz51.css"])))=>i.map(i=>d[i]);
let Zu, Jv, Mr, Or, tf, Vp, ef, u1, Wp, Ty, Rt, Y, Dr, ce, gS, ly, pf, gl, mS, Ip, cS, Kp, vS, Zp, pS, eg, yS, of, aS, SS;
let __tla = (async ()=>{
    function ty(n, i) {
        for(var c = 0; c < i.length; c++){
            const s = i[c];
            if (typeof s != "string" && !Array.isArray(s)) {
                for(const o in s)if (o !== "default" && !(o in n)) {
                    const d = Object.getOwnPropertyDescriptor(s, o);
                    d && Object.defineProperty(n, o, d.get ? d : {
                        enumerable: !0,
                        get: ()=>s[o]
                    });
                }
            }
        }
        return Object.freeze(Object.defineProperty(n, Symbol.toStringTag, {
            value: "Module"
        }));
    }
    (function() {
        const i = document.createElement("link").relList;
        if (i && i.supports && i.supports("modulepreload")) return;
        for (const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);
        new MutationObserver((o)=>{
            for (const d of o)if (d.type === "childList") for (const m of d.addedNodes)m.tagName === "LINK" && m.rel === "modulepreload" && s(m);
        }).observe(document, {
            childList: !0,
            subtree: !0
        });
        function c(o) {
            const d = {};
            return o.integrity && (d.integrity = o.integrity), o.referrerPolicy && (d.referrerPolicy = o.referrerPolicy), o.crossOrigin === "use-credentials" ? d.credentials = "include" : o.crossOrigin === "anonymous" ? d.credentials = "omit" : d.credentials = "same-origin", d;
        }
        function s(o) {
            if (o.ep) return;
            o.ep = !0;
            const d = c(o);
            fetch(o.href, d);
        }
    })();
    ly = function(n) {
        return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
    };
    var Qs = {
        exports: {}
    }, wu = {};
    var cm;
    function Vv() {
        if (cm) return wu;
        cm = 1;
        var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
        function c(s, o, d) {
            var m = null;
            if (d !== void 0 && (m = "" + d), o.key !== void 0 && (m = "" + o.key), "key" in o) {
                d = {};
                for(var v in o)v !== "key" && (d[v] = o[v]);
            } else d = o;
            return o = d.ref, {
                $$typeof: n,
                type: s,
                key: m,
                ref: o !== void 0 ? o : null,
                props: d
            };
        }
        return wu.Fragment = i, wu.jsx = c, wu.jsxs = c, wu;
    }
    var sm;
    function Zv() {
        return sm || (sm = 1, Qs.exports = Vv()), Qs.exports;
    }
    let Ys, ge;
    ce = Zv();
    Ys = {
        exports: {}
    };
    ge = {};
    var fm;
    function Kv() {
        if (fm) return ge;
        fm = 1;
        var n = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), c = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), m = Symbol.for("react.context"), v = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), y = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), S = Symbol.for("react.activity"), _ = Symbol.iterator;
        function N(T) {
            return T === null || typeof T != "object" ? null : (T = _ && T[_] || T["@@iterator"], typeof T == "function" ? T : null);
        }
        var j = {
            isMounted: function() {
                return !1;
            },
            enqueueForceUpdate: function() {},
            enqueueReplaceState: function() {},
            enqueueSetState: function() {}
        }, L = Object.assign, X = {};
        function te(T, w, V) {
            this.props = T, this.context = w, this.refs = X, this.updater = V || j;
        }
        te.prototype.isReactComponent = {}, te.prototype.setState = function(T, w) {
            if (typeof T != "object" && typeof T != "function" && T != null) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
            this.updater.enqueueSetState(this, T, w, "setState");
        }, te.prototype.forceUpdate = function(T) {
            this.updater.enqueueForceUpdate(this, T, "forceUpdate");
        };
        function W() {}
        W.prototype = te.prototype;
        function ne(T, w, V) {
            this.props = T, this.context = w, this.refs = X, this.updater = V || j;
        }
        var de = ne.prototype = new W;
        de.constructor = ne, L(de, te.prototype), de.isPureReactComponent = !0;
        var Ee = Array.isArray;
        function qe() {}
        var O = {
            H: null,
            A: null,
            T: null,
            S: null
        }, I = Object.prototype.hasOwnProperty;
        function ve(T, w, V) {
            var k = V.ref;
            return {
                $$typeof: n,
                type: T,
                key: w,
                ref: k !== void 0 ? k : null,
                props: V
            };
        }
        function he(T, w) {
            return ve(T.type, w, T.props);
        }
        function He(T) {
            return typeof T == "object" && T !== null && T.$$typeof === n;
        }
        function pe(T) {
            var w = {
                "=": "=0",
                ":": "=2"
            };
            return "$" + T.replace(/[=:]/g, function(V) {
                return w[V];
            });
        }
        var at = /\/+/g;
        function Oe(T, w) {
            return typeof T == "object" && T !== null && T.key != null ? pe("" + T.key) : w.toString(36);
        }
        function Fe(T) {
            switch(T.status){
                case "fulfilled":
                    return T.value;
                case "rejected":
                    throw T.reason;
                default:
                    switch(typeof T.status == "string" ? T.then(qe, qe) : (T.status = "pending", T.then(function(w) {
                        T.status === "pending" && (T.status = "fulfilled", T.value = w);
                    }, function(w) {
                        T.status === "pending" && (T.status = "rejected", T.reason = w);
                    })), T.status){
                        case "fulfilled":
                            return T.value;
                        case "rejected":
                            throw T.reason;
                    }
            }
            throw T;
        }
        function B(T, w, V, k, re) {
            var me = typeof T;
            (me === "undefined" || me === "boolean") && (T = null);
            var Ae = !1;
            if (T === null) Ae = !0;
            else switch(me){
                case "bigint":
                case "string":
                case "number":
                    Ae = !0;
                    break;
                case "object":
                    switch(T.$$typeof){
                        case n:
                        case i:
                            Ae = !0;
                            break;
                        case b:
                            return Ae = T._init, B(Ae(T._payload), w, V, k, re);
                    }
            }
            if (Ae) return re = re(T), Ae = k === "" ? "." + Oe(T, 0) : k, Ee(re) ? (V = "", Ae != null && (V = Ae.replace(at, "$&/") + "/"), B(re, w, V, "", function(Oa) {
                return Oa;
            })) : re != null && (He(re) && (re = he(re, V + (re.key == null || T && T.key === re.key ? "" : ("" + re.key).replace(at, "$&/") + "/") + Ae)), w.push(re)), 1;
            Ae = 0;
            var ft = k === "" ? "." : k + ":";
            if (Ee(T)) for(var lt = 0; lt < T.length; lt++)k = T[lt], me = ft + Oe(k, lt), Ae += B(k, w, V, me, re);
            else if (lt = N(T), typeof lt == "function") for(T = lt.call(T), lt = 0; !(k = T.next()).done;)k = k.value, me = ft + Oe(k, lt++), Ae += B(k, w, V, me, re);
            else if (me === "object") {
                if (typeof T.then == "function") return B(Fe(T), w, V, k, re);
                throw w = String(T), Error("Objects are not valid as a React child (found: " + (w === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : w) + "). If you meant to render a collection of children, use an array instead.");
            }
            return Ae;
        }
        function Z(T, w, V) {
            if (T == null) return T;
            var k = [], re = 0;
            return B(T, k, "", "", function(me) {
                return w.call(V, me, re++);
            }), k;
        }
        function P(T) {
            if (T._status === -1) {
                var w = T._result;
                w = w(), w.then(function(V) {
                    (T._status === 0 || T._status === -1) && (T._status = 1, T._result = V);
                }, function(V) {
                    (T._status === 0 || T._status === -1) && (T._status = 2, T._result = V);
                }), T._status === -1 && (T._status = 0, T._result = w);
            }
            if (T._status === 1) return T._result.default;
            throw T._result;
        }
        var Ne = typeof reportError == "function" ? reportError : function(T) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var w = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
                    error: T
                });
                if (!window.dispatchEvent(w)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", T);
                return;
            }
            console.error(T);
        }, Be = {
            map: Z,
            forEach: function(T, w, V) {
                Z(T, function() {
                    w.apply(this, arguments);
                }, V);
            },
            count: function(T) {
                var w = 0;
                return Z(T, function() {
                    w++;
                }), w;
            },
            toArray: function(T) {
                return Z(T, function(w) {
                    return w;
                }) || [];
            },
            only: function(T) {
                if (!He(T)) throw Error("React.Children.only expected to receive a single React element child.");
                return T;
            }
        };
        return ge.Activity = S, ge.Children = Be, ge.Component = te, ge.Fragment = c, ge.Profiler = o, ge.PureComponent = ne, ge.StrictMode = s, ge.Suspense = g, ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = O, ge.__COMPILER_RUNTIME = {
            __proto__: null,
            c: function(T) {
                return O.H.useMemoCache(T);
            }
        }, ge.cache = function(T) {
            return function() {
                return T.apply(null, arguments);
            };
        }, ge.cacheSignal = function() {
            return null;
        }, ge.cloneElement = function(T, w, V) {
            if (T == null) throw Error("The argument must be a React element, but you passed " + T + ".");
            var k = L({}, T.props), re = T.key;
            if (w != null) for(me in w.key !== void 0 && (re = "" + w.key), w)!I.call(w, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && w.ref === void 0 || (k[me] = w[me]);
            var me = arguments.length - 2;
            if (me === 1) k.children = V;
            else if (1 < me) {
                for(var Ae = Array(me), ft = 0; ft < me; ft++)Ae[ft] = arguments[ft + 2];
                k.children = Ae;
            }
            return ve(T.type, re, k);
        }, ge.createContext = function(T) {
            return T = {
                $$typeof: m,
                _currentValue: T,
                _currentValue2: T,
                _threadCount: 0,
                Provider: null,
                Consumer: null
            }, T.Provider = T, T.Consumer = {
                $$typeof: d,
                _context: T
            }, T;
        }, ge.createElement = function(T, w, V) {
            var k, re = {}, me = null;
            if (w != null) for(k in w.key !== void 0 && (me = "" + w.key), w)I.call(w, k) && k !== "key" && k !== "__self" && k !== "__source" && (re[k] = w[k]);
            var Ae = arguments.length - 2;
            if (Ae === 1) re.children = V;
            else if (1 < Ae) {
                for(var ft = Array(Ae), lt = 0; lt < Ae; lt++)ft[lt] = arguments[lt + 2];
                re.children = ft;
            }
            if (T && T.defaultProps) for(k in Ae = T.defaultProps, Ae)re[k] === void 0 && (re[k] = Ae[k]);
            return ve(T, me, re);
        }, ge.createRef = function() {
            return {
                current: null
            };
        }, ge.forwardRef = function(T) {
            return {
                $$typeof: v,
                render: T
            };
        }, ge.isValidElement = He, ge.lazy = function(T) {
            return {
                $$typeof: b,
                _payload: {
                    _status: -1,
                    _result: T
                },
                _init: P
            };
        }, ge.memo = function(T, w) {
            return {
                $$typeof: y,
                type: T,
                compare: w === void 0 ? null : w
            };
        }, ge.startTransition = function(T) {
            var w = O.T, V = {};
            O.T = V;
            try {
                var k = T(), re = O.S;
                re !== null && re(V, k), typeof k == "object" && k !== null && typeof k.then == "function" && k.then(qe, Ne);
            } catch (me) {
                Ne(me);
            } finally{
                w !== null && V.types !== null && (w.types = V.types), O.T = w;
            }
        }, ge.unstable_useCacheRefresh = function() {
            return O.H.useCacheRefresh();
        }, ge.use = function(T) {
            return O.H.use(T);
        }, ge.useActionState = function(T, w, V) {
            return O.H.useActionState(T, w, V);
        }, ge.useCallback = function(T, w) {
            return O.H.useCallback(T, w);
        }, ge.useContext = function(T) {
            return O.H.useContext(T);
        }, ge.useDebugValue = function() {}, ge.useDeferredValue = function(T, w) {
            return O.H.useDeferredValue(T, w);
        }, ge.useEffect = function(T, w) {
            return O.H.useEffect(T, w);
        }, ge.useEffectEvent = function(T) {
            return O.H.useEffectEvent(T);
        }, ge.useId = function() {
            return O.H.useId();
        }, ge.useImperativeHandle = function(T, w, V) {
            return O.H.useImperativeHandle(T, w, V);
        }, ge.useInsertionEffect = function(T, w) {
            return O.H.useInsertionEffect(T, w);
        }, ge.useLayoutEffect = function(T, w) {
            return O.H.useLayoutEffect(T, w);
        }, ge.useMemo = function(T, w) {
            return O.H.useMemo(T, w);
        }, ge.useOptimistic = function(T, w) {
            return O.H.useOptimistic(T, w);
        }, ge.useReducer = function(T, w, V) {
            return O.H.useReducer(T, w, V);
        }, ge.useRef = function(T) {
            return O.H.useRef(T);
        }, ge.useState = function(T) {
            return O.H.useState(T);
        }, ge.useSyncExternalStore = function(T, w, V) {
            return O.H.useSyncExternalStore(T, w, V);
        }, ge.useTransition = function() {
            return O.H.useTransition();
        }, ge.version = "19.2.0", ge;
    }
    var om;
    of = function() {
        return om || (om = 1, Ys.exports = Kv()), Ys.exports;
    };
    Y = of();
    let Fv;
    Jv = ly(Y);
    Fv = ty({
        __proto__: null,
        default: Jv
    }, [
        Y
    ]);
    var Gs = {
        exports: {}
    }, qu = {}, Xs = {
        exports: {}
    }, Vs = {};
    var dm;
    function Wv() {
        return dm || (dm = 1, (function(n) {
            function i(B, Z) {
                var P = B.length;
                B.push(Z);
                e: for(; 0 < P;){
                    var Ne = P - 1 >>> 1, Be = B[Ne];
                    if (0 < o(Be, Z)) B[Ne] = Z, B[P] = Be, P = Ne;
                    else break e;
                }
            }
            function c(B) {
                return B.length === 0 ? null : B[0];
            }
            function s(B) {
                if (B.length === 0) return null;
                var Z = B[0], P = B.pop();
                if (P !== Z) {
                    B[0] = P;
                    e: for(var Ne = 0, Be = B.length, T = Be >>> 1; Ne < T;){
                        var w = 2 * (Ne + 1) - 1, V = B[w], k = w + 1, re = B[k];
                        if (0 > o(V, P)) k < Be && 0 > o(re, V) ? (B[Ne] = re, B[k] = P, Ne = k) : (B[Ne] = V, B[w] = P, Ne = w);
                        else if (k < Be && 0 > o(re, P)) B[Ne] = re, B[k] = P, Ne = k;
                        else break e;
                    }
                }
                return Z;
            }
            function o(B, Z) {
                var P = B.sortIndex - Z.sortIndex;
                return P !== 0 ? P : B.id - Z.id;
            }
            if (n.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
                var d = performance;
                n.unstable_now = function() {
                    return d.now();
                };
            } else {
                var m = Date, v = m.now();
                n.unstable_now = function() {
                    return m.now() - v;
                };
            }
            var g = [], y = [], b = 1, S = null, _ = 3, N = !1, j = !1, L = !1, X = !1, te = typeof setTimeout == "function" ? setTimeout : null, W = typeof clearTimeout == "function" ? clearTimeout : null, ne = typeof setImmediate < "u" ? setImmediate : null;
            function de(B) {
                for(var Z = c(y); Z !== null;){
                    if (Z.callback === null) s(y);
                    else if (Z.startTime <= B) s(y), Z.sortIndex = Z.expirationTime, i(g, Z);
                    else break;
                    Z = c(y);
                }
            }
            function Ee(B) {
                if (L = !1, de(B), !j) if (c(g) !== null) j = !0, qe || (qe = !0, pe());
                else {
                    var Z = c(y);
                    Z !== null && Fe(Ee, Z.startTime - B);
                }
            }
            var qe = !1, O = -1, I = 5, ve = -1;
            function he() {
                return X ? !0 : !(n.unstable_now() - ve < I);
            }
            function He() {
                if (X = !1, qe) {
                    var B = n.unstable_now();
                    ve = B;
                    var Z = !0;
                    try {
                        e: {
                            j = !1, L && (L = !1, W(O), O = -1), N = !0;
                            var P = _;
                            try {
                                t: {
                                    for(de(B), S = c(g); S !== null && !(S.expirationTime > B && he());){
                                        var Ne = S.callback;
                                        if (typeof Ne == "function") {
                                            S.callback = null, _ = S.priorityLevel;
                                            var Be = Ne(S.expirationTime <= B);
                                            if (B = n.unstable_now(), typeof Be == "function") {
                                                S.callback = Be, de(B), Z = !0;
                                                break t;
                                            }
                                            S === c(g) && s(g), de(B);
                                        } else s(g);
                                        S = c(g);
                                    }
                                    if (S !== null) Z = !0;
                                    else {
                                        var T = c(y);
                                        T !== null && Fe(Ee, T.startTime - B), Z = !1;
                                    }
                                }
                                break e;
                            } finally{
                                S = null, _ = P, N = !1;
                            }
                            Z = void 0;
                        }
                    } finally{
                        Z ? pe() : qe = !1;
                    }
                }
            }
            var pe;
            if (typeof ne == "function") pe = function() {
                ne(He);
            };
            else if (typeof MessageChannel < "u") {
                var at = new MessageChannel, Oe = at.port2;
                at.port1.onmessage = He, pe = function() {
                    Oe.postMessage(null);
                };
            } else pe = function() {
                te(He, 0);
            };
            function Fe(B, Z) {
                O = te(function() {
                    B(n.unstable_now());
                }, Z);
            }
            n.unstable_IdlePriority = 5, n.unstable_ImmediatePriority = 1, n.unstable_LowPriority = 4, n.unstable_NormalPriority = 3, n.unstable_Profiling = null, n.unstable_UserBlockingPriority = 2, n.unstable_cancelCallback = function(B) {
                B.callback = null;
            }, n.unstable_forceFrameRate = function(B) {
                0 > B || 125 < B ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < B ? Math.floor(1e3 / B) : 5;
            }, n.unstable_getCurrentPriorityLevel = function() {
                return _;
            }, n.unstable_next = function(B) {
                switch(_){
                    case 1:
                    case 2:
                    case 3:
                        var Z = 3;
                        break;
                    default:
                        Z = _;
                }
                var P = _;
                _ = Z;
                try {
                    return B();
                } finally{
                    _ = P;
                }
            }, n.unstable_requestPaint = function() {
                X = !0;
            }, n.unstable_runWithPriority = function(B, Z) {
                switch(B){
                    case 1:
                    case 2:
                    case 3:
                    case 4:
                    case 5:
                        break;
                    default:
                        B = 3;
                }
                var P = _;
                _ = B;
                try {
                    return Z();
                } finally{
                    _ = P;
                }
            }, n.unstable_scheduleCallback = function(B, Z, P) {
                var Ne = n.unstable_now();
                switch(typeof P == "object" && P !== null ? (P = P.delay, P = typeof P == "number" && 0 < P ? Ne + P : Ne) : P = Ne, B){
                    case 1:
                        var Be = -1;
                        break;
                    case 2:
                        Be = 250;
                        break;
                    case 5:
                        Be = 1073741823;
                        break;
                    case 4:
                        Be = 1e4;
                        break;
                    default:
                        Be = 5e3;
                }
                return Be = P + Be, B = {
                    id: b++,
                    callback: Z,
                    priorityLevel: B,
                    startTime: P,
                    expirationTime: Be,
                    sortIndex: -1
                }, P > Ne ? (B.sortIndex = P, i(y, B), c(g) === null && B === c(y) && (L ? (W(O), O = -1) : L = !0, Fe(Ee, P - Ne))) : (B.sortIndex = Be, i(g, B), j || N || (j = !0, qe || (qe = !0, pe()))), B;
            }, n.unstable_shouldYield = he, n.unstable_wrapCallback = function(B) {
                var Z = _;
                return function() {
                    var P = _;
                    _ = Z;
                    try {
                        return B.apply(this, arguments);
                    } finally{
                        _ = P;
                    }
                };
            };
        })(Vs)), Vs;
    }
    var hm;
    function $v() {
        return hm || (hm = 1, Xs.exports = Wv()), Xs.exports;
    }
    var Zs = {
        exports: {}
    }, _t = {};
    var mm;
    function kv() {
        if (mm) return _t;
        mm = 1;
        var n = of();
        function i(g) {
            var y = "https://react.dev/errors/" + g;
            if (1 < arguments.length) {
                y += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var b = 2; b < arguments.length; b++)y += "&args[]=" + encodeURIComponent(arguments[b]);
            }
            return "Minified React error #" + g + "; visit " + y + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function c() {}
        var s = {
            d: {
                f: c,
                r: function() {
                    throw Error(i(522));
                },
                D: c,
                C: c,
                L: c,
                m: c,
                X: c,
                S: c,
                M: c
            },
            p: 0,
            findDOMNode: null
        }, o = Symbol.for("react.portal");
        function d(g, y, b) {
            var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
            return {
                $$typeof: o,
                key: S == null ? null : "" + S,
                children: g,
                containerInfo: y,
                implementation: b
            };
        }
        var m = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
        function v(g, y) {
            if (g === "font") return "";
            if (typeof y == "string") return y === "use-credentials" ? y : "";
        }
        return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, _t.createPortal = function(g, y) {
            var b = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
            if (!y || y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11) throw Error(i(299));
            return d(g, y, null, b);
        }, _t.flushSync = function(g) {
            var y = m.T, b = s.p;
            try {
                if (m.T = null, s.p = 2, g) return g();
            } finally{
                m.T = y, s.p = b, s.d.f();
            }
        }, _t.preconnect = function(g, y) {
            typeof g == "string" && (y ? (y = y.crossOrigin, y = typeof y == "string" ? y === "use-credentials" ? y : "" : void 0) : y = null, s.d.C(g, y));
        }, _t.prefetchDNS = function(g) {
            typeof g == "string" && s.d.D(g);
        }, _t.preinit = function(g, y) {
            if (typeof g == "string" && y && typeof y.as == "string") {
                var b = y.as, S = v(b, y.crossOrigin), _ = typeof y.integrity == "string" ? y.integrity : void 0, N = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
                b === "style" ? s.d.S(g, typeof y.precedence == "string" ? y.precedence : void 0, {
                    crossOrigin: S,
                    integrity: _,
                    fetchPriority: N
                }) : b === "script" && s.d.X(g, {
                    crossOrigin: S,
                    integrity: _,
                    fetchPriority: N,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0
                });
            }
        }, _t.preinitModule = function(g, y) {
            if (typeof g == "string") if (typeof y == "object" && y !== null) {
                if (y.as == null || y.as === "script") {
                    var b = v(y.as, y.crossOrigin);
                    s.d.M(g, {
                        crossOrigin: b,
                        integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                        nonce: typeof y.nonce == "string" ? y.nonce : void 0
                    });
                }
            } else y == null && s.d.M(g);
        }, _t.preload = function(g, y) {
            if (typeof g == "string" && typeof y == "object" && y !== null && typeof y.as == "string") {
                var b = y.as, S = v(b, y.crossOrigin);
                s.d.L(g, b, {
                    crossOrigin: S,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0,
                    nonce: typeof y.nonce == "string" ? y.nonce : void 0,
                    type: typeof y.type == "string" ? y.type : void 0,
                    fetchPriority: typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
                    referrerPolicy: typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
                    imageSrcSet: typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
                    imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
                    media: typeof y.media == "string" ? y.media : void 0
                });
            }
        }, _t.preloadModule = function(g, y) {
            if (typeof g == "string") if (y) {
                var b = v(y.as, y.crossOrigin);
                s.d.m(g, {
                    as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
                    crossOrigin: b,
                    integrity: typeof y.integrity == "string" ? y.integrity : void 0
                });
            } else s.d.m(g);
        }, _t.requestFormReset = function(g) {
            s.d.r(g);
        }, _t.unstable_batchedUpdates = function(g, y) {
            return g(y);
        }, _t.useFormState = function(g, y, b) {
            return m.H.useFormState(g, y, b);
        }, _t.useFormStatus = function() {
            return m.H.useHostTransitionStatus();
        }, _t.version = "19.2.0", _t;
    }
    var ym;
    function ay() {
        if (ym) return Zs.exports;
        ym = 1;
        function n() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (i) {
                console.error(i);
            }
        }
        return n(), Zs.exports = kv(), Zs.exports;
    }
    var vm;
    function Pv() {
        if (vm) return qu;
        vm = 1;
        var n = $v(), i = of(), c = ay();
        function s(e) {
            var t = "https://react.dev/errors/" + e;
            if (1 < arguments.length) {
                t += "?args[]=" + encodeURIComponent(arguments[1]);
                for(var l = 2; l < arguments.length; l++)t += "&args[]=" + encodeURIComponent(arguments[l]);
            }
            return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
        }
        function o(e) {
            return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
        }
        function d(e) {
            var t = e, l = e;
            if (e.alternate) for(; t.return;)t = t.return;
            else {
                e = t;
                do t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
                while (e);
            }
            return t.tag === 3 ? l : null;
        }
        function m(e) {
            if (e.tag === 13) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function v(e) {
            if (e.tag === 31) {
                var t = e.memoizedState;
                if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
            }
            return null;
        }
        function g(e) {
            if (d(e) !== e) throw Error(s(188));
        }
        function y(e) {
            var t = e.alternate;
            if (!t) {
                if (t = d(e), t === null) throw Error(s(188));
                return t !== e ? null : e;
            }
            for(var l = e, a = t;;){
                var u = l.return;
                if (u === null) break;
                var r = u.alternate;
                if (r === null) {
                    if (a = u.return, a !== null) {
                        l = a;
                        continue;
                    }
                    break;
                }
                if (u.child === r.child) {
                    for(r = u.child; r;){
                        if (r === l) return g(u), e;
                        if (r === a) return g(u), t;
                        r = r.sibling;
                    }
                    throw Error(s(188));
                }
                if (l.return !== a.return) l = u, a = r;
                else {
                    for(var f = !1, h = u.child; h;){
                        if (h === l) {
                            f = !0, l = u, a = r;
                            break;
                        }
                        if (h === a) {
                            f = !0, a = u, l = r;
                            break;
                        }
                        h = h.sibling;
                    }
                    if (!f) {
                        for(h = r.child; h;){
                            if (h === l) {
                                f = !0, l = r, a = u;
                                break;
                            }
                            if (h === a) {
                                f = !0, a = r, l = u;
                                break;
                            }
                            h = h.sibling;
                        }
                        if (!f) throw Error(s(189));
                    }
                }
                if (l.alternate !== a) throw Error(s(190));
            }
            if (l.tag !== 3) throw Error(s(188));
            return l.stateNode.current === l ? e : t;
        }
        function b(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e;
            for(e = e.child; e !== null;){
                if (t = b(e), t !== null) return t;
                e = e.sibling;
            }
            return null;
        }
        var S = Object.assign, _ = Symbol.for("react.element"), N = Symbol.for("react.transitional.element"), j = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), X = Symbol.for("react.strict_mode"), te = Symbol.for("react.profiler"), W = Symbol.for("react.consumer"), ne = Symbol.for("react.context"), de = Symbol.for("react.forward_ref"), Ee = Symbol.for("react.suspense"), qe = Symbol.for("react.suspense_list"), O = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), ve = Symbol.for("react.activity"), he = Symbol.for("react.memo_cache_sentinel"), He = Symbol.iterator;
        function pe(e) {
            return e === null || typeof e != "object" ? null : (e = He && e[He] || e["@@iterator"], typeof e == "function" ? e : null);
        }
        var at = Symbol.for("react.client.reference");
        function Oe(e) {
            if (e == null) return null;
            if (typeof e == "function") return e.$$typeof === at ? null : e.displayName || e.name || null;
            if (typeof e == "string") return e;
            switch(e){
                case L:
                    return "Fragment";
                case te:
                    return "Profiler";
                case X:
                    return "StrictMode";
                case Ee:
                    return "Suspense";
                case qe:
                    return "SuspenseList";
                case ve:
                    return "Activity";
            }
            if (typeof e == "object") switch(e.$$typeof){
                case j:
                    return "Portal";
                case ne:
                    return e.displayName || "Context";
                case W:
                    return (e._context.displayName || "Context") + ".Consumer";
                case de:
                    var t = e.render;
                    return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
                case O:
                    return t = e.displayName || null, t !== null ? t : Oe(e.type) || "Memo";
                case I:
                    t = e._payload, e = e._init;
                    try {
                        return Oe(e(t));
                    } catch  {}
            }
            return null;
        }
        var Fe = Array.isArray, B = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Z = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, P = {
            pending: !1,
            data: null,
            method: null,
            action: null
        }, Ne = [], Be = -1;
        function T(e) {
            return {
                current: e
            };
        }
        function w(e) {
            0 > Be || (e.current = Ne[Be], Ne[Be] = null, Be--);
        }
        function V(e, t) {
            Be++, Ne[Be] = e.current, e.current = t;
        }
        var k = T(null), re = T(null), me = T(null), Ae = T(null);
        function ft(e, t) {
            switch(V(me, t), V(re, e), V(k, null), t.nodeType){
                case 9:
                case 11:
                    e = (e = t.documentElement) && (e = e.namespaceURI) ? xh(e) : 0;
                    break;
                default:
                    if (e = t.tagName, t = t.namespaceURI) t = xh(t), e = Uh(t, e);
                    else switch(e){
                        case "svg":
                            e = 1;
                            break;
                        case "math":
                            e = 2;
                            break;
                        default:
                            e = 0;
                    }
            }
            w(k), V(k, e);
        }
        function lt() {
            w(k), w(re), w(me);
        }
        function Oa(e) {
            e.memoizedState !== null && V(Ae, e);
            var t = k.current, l = Uh(t, e.type);
            t !== l && (V(re, e), V(k, l));
        }
        function nn(e) {
            re.current === e && (w(k), w(re)), Ae.current === e && (w(Ae), Bu._currentValue = P);
        }
        var vt, Ol;
        function Sl(e) {
            if (vt === void 0) try {
                throw Error();
            } catch (l) {
                var t = l.stack.trim().match(/\n( *(at )?)/);
                vt = t && t[1] || "", Ol = -1 < l.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < l.stack.indexOf("@") ? "@unknown:0:0" : "";
            }
            return `
` + vt + e + Ol;
        }
        var Kn = !1;
        function sl(e, t) {
            if (!e || Kn) return "";
            Kn = !0;
            var l = Error.prepareStackTrace;
            Error.prepareStackTrace = void 0;
            try {
                var a = {
                    DetermineComponentFrameRoot: function() {
                        try {
                            if (t) {
                                var Q = function() {
                                    throw Error();
                                };
                                if (Object.defineProperty(Q.prototype, "props", {
                                    set: function() {
                                        throw Error();
                                    }
                                }), typeof Reflect == "object" && Reflect.construct) {
                                    try {
                                        Reflect.construct(Q, []);
                                    } catch (U) {
                                        var R = U;
                                    }
                                    Reflect.construct(e, [], Q);
                                } else {
                                    try {
                                        Q.call();
                                    } catch (U) {
                                        R = U;
                                    }
                                    e.call(Q.prototype);
                                }
                            } else {
                                try {
                                    throw Error();
                                } catch (U) {
                                    R = U;
                                }
                                (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {});
                            }
                        } catch (U) {
                            if (U && R && typeof U.stack == "string") return [
                                U.stack,
                                R.stack
                            ];
                        }
                        return [
                            null,
                            null
                        ];
                    }
                };
                a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
                var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, "name");
                u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
                    value: "DetermineComponentFrameRoot"
                });
                var r = a.DetermineComponentFrameRoot(), f = r[0], h = r[1];
                if (f && h) {
                    var p = f.split(`
`), z = h.split(`
`);
                    for(u = a = 0; a < p.length && !p[a].includes("DetermineComponentFrameRoot");)a++;
                    for(; u < z.length && !z[u].includes("DetermineComponentFrameRoot");)u++;
                    if (a === p.length || u === z.length) for(a = p.length - 1, u = z.length - 1; 1 <= a && 0 <= u && p[a] !== z[u];)u--;
                    for(; 1 <= a && 0 <= u; a--, u--)if (p[a] !== z[u]) {
                        if (a !== 1 || u !== 1) do if (a--, u--, 0 > u || p[a] !== z[u]) {
                            var H = `
` + p[a].replace(" at new ", " at ");
                            return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), H;
                        }
                        while (1 <= a && 0 <= u);
                        break;
                    }
                }
            } finally{
                Kn = !1, Error.prepareStackTrace = l;
            }
            return (l = e ? e.displayName || e.name : "") ? Sl(l) : "";
        }
        function _r(e, t) {
            switch(e.tag){
                case 26:
                case 27:
                case 5:
                    return Sl(e.type);
                case 16:
                    return Sl("Lazy");
                case 13:
                    return e.child !== t && t !== null ? Sl("Suspense Fallback") : Sl("Suspense");
                case 19:
                    return Sl("SuspenseList");
                case 0:
                case 15:
                    return sl(e.type, !1);
                case 11:
                    return sl(e.type.render, !1);
                case 1:
                    return sl(e.type, !0);
                case 31:
                    return Sl("Activity");
                default:
                    return "";
            }
        }
        function Iu(e) {
            try {
                var t = "", l = null;
                do t += _r(e, l), l = e, e = e.return;
                while (e);
                return t;
            } catch (a) {
                return `
Error generating stack: ` + a.message + `
` + a.stack;
            }
        }
        var un = Object.prototype.hasOwnProperty, Jn = n.unstable_scheduleCallback, Fn = n.unstable_cancelCallback, Cr = n.unstable_shouldYield, zr = n.unstable_requestPaint, rt = n.unstable_now, _a = n.unstable_getCurrentPriorityLevel, Wn = n.unstable_ImmediatePriority, rn = n.unstable_UserBlockingPriority, Qt = n.unstable_NormalPriority, fl = n.unstable_LowPriority, $n = n.unstable_IdlePriority, cn = n.log, Rr = n.unstable_setDisableYieldValue, xt = null, Dt = null;
        function ol(e) {
            if (typeof cn == "function" && Rr(e), Dt && typeof Dt.setStrictMode == "function") try {
                Dt.setStrictMode(xt, e);
            } catch  {}
        }
        var Ot = Math.clz32 ? Math.clz32 : sn, xr = Math.log, ei = Math.LN2;
        function sn(e) {
            return e >>>= 0, e === 0 ? 32 : 31 - (xr(e) / ei | 0) | 0;
        }
        var Ca = 256, Wl = 262144, $l = 4194304;
        function _l(e) {
            var t = e & 42;
            if (t !== 0) return t;
            switch(e & -e){
                case 1:
                    return 1;
                case 2:
                    return 2;
                case 4:
                    return 4;
                case 8:
                    return 8;
                case 16:
                    return 16;
                case 32:
                    return 32;
                case 64:
                    return 64;
                case 128:
                    return 128;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                    return e & 261888;
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return e & 3932160;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return e & 62914560;
                case 67108864:
                    return 67108864;
                case 134217728:
                    return 134217728;
                case 268435456:
                    return 268435456;
                case 536870912:
                    return 536870912;
                case 1073741824:
                    return 0;
                default:
                    return e;
            }
        }
        function za(e, t, l) {
            var a = e.pendingLanes;
            if (a === 0) return 0;
            var u = 0, r = e.suspendedLanes, f = e.pingedLanes;
            e = e.warmLanes;
            var h = a & 134217727;
            return h !== 0 ? (a = h & ~r, a !== 0 ? u = _l(a) : (f &= h, f !== 0 ? u = _l(f) : l || (l = h & ~e, l !== 0 && (u = _l(l))))) : (h = a & ~r, h !== 0 ? u = _l(h) : f !== 0 ? u = _l(f) : l || (l = a & ~e, l !== 0 && (u = _l(l)))), u === 0 ? 0 : t !== 0 && t !== u && (t & r) === 0 && (r = u & -u, l = t & -t, r >= l || r === 32 && (l & 4194048) !== 0) ? t : u;
        }
        function Ra(e, t) {
            return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
        }
        function ti(e, t) {
            switch(e){
                case 1:
                case 2:
                case 4:
                case 8:
                case 64:
                    return t + 250;
                case 16:
                case 32:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                    return t + 5e3;
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    return -1;
                case 67108864:
                case 134217728:
                case 268435456:
                case 536870912:
                case 1073741824:
                    return -1;
                default:
                    return -1;
            }
        }
        function xa() {
            var e = $l;
            return $l <<= 1, ($l & 62914560) === 0 && ($l = 4194304), e;
        }
        function kl(e) {
            for(var t = [], l = 0; 31 > l; l++)t.push(e);
            return t;
        }
        function Ua(e, t) {
            e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
        }
        function Ur(e, t, l, a, u, r) {
            var f = e.pendingLanes;
            e.pendingLanes = l, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= l, e.entangledLanes &= l, e.errorRecoveryDisabledLanes &= l, e.shellSuspendCounter = 0;
            var h = e.entanglements, p = e.expirationTimes, z = e.hiddenUpdates;
            for(l = f & ~l; 0 < l;){
                var H = 31 - Ot(l), Q = 1 << H;
                h[H] = 0, p[H] = -1;
                var R = z[H];
                if (R !== null) for(z[H] = null, H = 0; H < R.length; H++){
                    var U = R[H];
                    U !== null && (U.lane &= -536870913);
                }
                l &= ~Q;
            }
            a !== 0 && E(e, a, 0), r !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= r & ~(f & ~t));
        }
        function E(e, t, l) {
            e.pendingLanes |= t, e.suspendedLanes &= ~t;
            var a = 31 - Ot(t);
            e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | l & 261930;
        }
        function D(e, t) {
            var l = e.entangledLanes |= t;
            for(e = e.entanglements; l;){
                var a = 31 - Ot(l), u = 1 << a;
                u & t | e[a] & t && (e[a] |= t), l &= ~u;
            }
        }
        function x(e, t) {
            var l = t & -t;
            return l = (l & 42) !== 0 ? 1 : G(l), (l & (e.suspendedLanes | t)) !== 0 ? 0 : l;
        }
        function G(e) {
            switch(e){
                case 2:
                    e = 1;
                    break;
                case 8:
                    e = 4;
                    break;
                case 32:
                    e = 16;
                    break;
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                    e = 128;
                    break;
                case 268435456:
                    e = 134217728;
                    break;
                default:
                    e = 0;
            }
            return e;
        }
        function K(e) {
            return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
        }
        function ue() {
            var e = Z.p;
            return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : tm(e.type));
        }
        function fe(e, t) {
            var l = Z.p;
            try {
                return Z.p = e, t();
            } finally{
                Z.p = l;
            }
        }
        var $ = Math.random().toString(36).slice(2), F = "__reactFiber$" + $, J = "__reactProps$" + $, le = "__reactContainer$" + $, ye = "__reactEvents$" + $, _e = "__reactListeners$" + $, gt = "__reactHandles$" + $, Qe = "__reactResources$" + $, Te = "__reactMarker$" + $;
        function We(e) {
            delete e[F], delete e[J], delete e[ye], delete e[_e], delete e[gt];
        }
        function Yt(e) {
            var t = e[F];
            if (t) return t;
            for(var l = e.parentNode; l;){
                if (t = l[le] || l[F]) {
                    if (l = t.alternate, t.child !== null || l !== null && l.child !== null) for(e = qh(e); e !== null;){
                        if (l = e[F]) return l;
                        e = qh(e);
                    }
                    return t;
                }
                e = l, l = e.parentNode;
            }
            return null;
        }
        function kt(e) {
            if (e = e[F] || e[le]) {
                var t = e.tag;
                if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3) return e;
            }
            return null;
        }
        function Ct(e) {
            var t = e.tag;
            if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
            throw Error(s(33));
        }
        function bt(e) {
            var t = e[Qe];
            return t || (t = e[Qe] = {
                hoistableStyles: new Map,
                hoistableScripts: new Map
            }), t;
        }
        function nt(e) {
            e[Te] = !0;
        }
        var Pl = new Set, bl = {};
        function Pt(e, t) {
            dl(e, t), dl(e + "Capture", t);
        }
        function dl(e, t) {
            for(bl[e] = t, e = 0; e < t.length; e++)Pl.add(t[e]);
        }
        var Ue = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"), $e = {}, Cl = {};
        function Na(e) {
            return un.call(Cl, e) ? !0 : un.call($e, e) ? !1 : Ue.test(e) ? Cl[e] = !0 : ($e[e] = !0, !1);
        }
        function ke(e, t, l) {
            if (Na(t)) if (l === null) e.removeAttribute(t);
            else {
                switch(typeof l){
                    case "undefined":
                    case "function":
                    case "symbol":
                        e.removeAttribute(t);
                        return;
                    case "boolean":
                        var a = t.toLowerCase().slice(0, 5);
                        if (a !== "data-" && a !== "aria-") {
                            e.removeAttribute(t);
                            return;
                        }
                }
                e.setAttribute(t, "" + l);
            }
        }
        function hl(e, t, l) {
            if (l === null) e.removeAttribute(t);
            else {
                switch(typeof l){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(t);
                        return;
                }
                e.setAttribute(t, "" + l);
            }
        }
        function It(e, t, l, a) {
            if (a === null) e.removeAttribute(l);
            else {
                switch(typeof a){
                    case "undefined":
                    case "function":
                    case "symbol":
                    case "boolean":
                        e.removeAttribute(l);
                        return;
                }
                e.setAttributeNS(t, l, "" + a);
            }
        }
        function Ut(e) {
            switch(typeof e){
                case "bigint":
                case "boolean":
                case "number":
                case "string":
                case "undefined":
                    return e;
                case "object":
                    return e;
                default:
                    return "";
            }
        }
        function Af(e) {
            var t = e.type;
            return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
        }
        function Hy(e, t, l) {
            var a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
            if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
                var u = a.get, r = a.set;
                return Object.defineProperty(e, t, {
                    configurable: !0,
                    get: function() {
                        return u.call(this);
                    },
                    set: function(f) {
                        l = "" + f, r.call(this, f);
                    }
                }), Object.defineProperty(e, t, {
                    enumerable: a.enumerable
                }), {
                    getValue: function() {
                        return l;
                    },
                    setValue: function(f) {
                        l = "" + f;
                    },
                    stopTracking: function() {
                        e._valueTracker = null, delete e[t];
                    }
                };
            }
        }
        function Nr(e) {
            if (!e._valueTracker) {
                var t = Af(e) ? "checked" : "value";
                e._valueTracker = Hy(e, t, "" + e[t]);
            }
        }
        function Tf(e) {
            if (!e) return !1;
            var t = e._valueTracker;
            if (!t) return !0;
            var l = t.getValue(), a = "";
            return e && (a = Af(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== l ? (t.setValue(e), !0) : !1;
        }
        function li(e) {
            if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
            try {
                return e.activeElement || e.body;
            } catch  {
                return e.body;
            }
        }
        var wy = /[\n"\\]/g;
        function el(e) {
            return e.replace(wy, function(t) {
                return "\\" + t.charCodeAt(0).toString(16) + " ";
            });
        }
        function Br(e, t, l, a, u, r, f, h) {
            e.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.type = f : e.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ut(t)) : e.value !== "" + Ut(t) && (e.value = "" + Ut(t)) : f !== "submit" && f !== "reset" || e.removeAttribute("value"), t != null ? jr(e, f, Ut(t)) : l != null ? jr(e, f, Ut(l)) : a != null && e.removeAttribute("value"), u == null && r != null && (e.defaultChecked = !!r), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), h != null && typeof h != "function" && typeof h != "symbol" && typeof h != "boolean" ? e.name = "" + Ut(h) : e.removeAttribute("name");
        }
        function Mf(e, t, l, a, u, r, f, h) {
            if (r != null && typeof r != "function" && typeof r != "symbol" && typeof r != "boolean" && (e.type = r), t != null || l != null) {
                if (!(r !== "submit" && r !== "reset" || t != null)) {
                    Nr(e);
                    return;
                }
                l = l != null ? "" + Ut(l) : "", t = t != null ? "" + Ut(t) : l, h || t === e.value || (e.value = t), e.defaultValue = t;
            }
            a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = h ? e.checked : !!a, e.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.name = f), Nr(e);
        }
        function jr(e, t, l) {
            t === "number" && li(e.ownerDocument) === e || e.defaultValue === "" + l || (e.defaultValue = "" + l);
        }
        function fn(e, t, l, a) {
            if (e = e.options, t) {
                t = {};
                for(var u = 0; u < l.length; u++)t["$" + l[u]] = !0;
                for(l = 0; l < e.length; l++)u = t.hasOwnProperty("$" + e[l].value), e[l].selected !== u && (e[l].selected = u), u && a && (e[l].defaultSelected = !0);
            } else {
                for(l = "" + Ut(l), t = null, u = 0; u < e.length; u++){
                    if (e[u].value === l) {
                        e[u].selected = !0, a && (e[u].defaultSelected = !0);
                        return;
                    }
                    t !== null || e[u].disabled || (t = e[u]);
                }
                t !== null && (t.selected = !0);
            }
        }
        function Df(e, t, l) {
            if (t != null && (t = "" + Ut(t), t !== e.value && (e.value = t), l == null)) {
                e.defaultValue !== t && (e.defaultValue = t);
                return;
            }
            e.defaultValue = l != null ? "" + Ut(l) : "";
        }
        function Of(e, t, l, a) {
            if (t == null) {
                if (a != null) {
                    if (l != null) throw Error(s(92));
                    if (Fe(a)) {
                        if (1 < a.length) throw Error(s(93));
                        a = a[0];
                    }
                    l = a;
                }
                l == null && (l = ""), t = l;
            }
            l = Ut(t), e.defaultValue = l, a = e.textContent, a === l && a !== "" && a !== null && (e.value = a), Nr(e);
        }
        function on(e, t) {
            if (t) {
                var l = e.firstChild;
                if (l && l === e.lastChild && l.nodeType === 3) {
                    l.nodeValue = t;
                    return;
                }
            }
            e.textContent = t;
        }
        var qy = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
        function _f(e, t, l) {
            var a = t.indexOf("--") === 0;
            l == null || typeof l == "boolean" || l === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, l) : typeof l != "number" || l === 0 || qy.has(t) ? t === "float" ? e.cssFloat = l : e[t] = ("" + l).trim() : e[t] = l + "px";
        }
        function Cf(e, t, l) {
            if (t != null && typeof t != "object") throw Error(s(62));
            if (e = e.style, l != null) {
                for(var a in l)!l.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "");
                for(var u in t)a = t[u], t.hasOwnProperty(u) && l[u] !== a && _f(e, u, a);
            } else for(var r in t)t.hasOwnProperty(r) && _f(e, r, t[r]);
        }
        function Lr(e) {
            if (e.indexOf("-") === -1) return !1;
            switch(e){
                case "annotation-xml":
                case "color-profile":
                case "font-face":
                case "font-face-src":
                case "font-face-uri":
                case "font-face-format":
                case "font-face-name":
                case "missing-glyph":
                    return !1;
                default:
                    return !0;
            }
        }
        var Qy = new Map([
            [
                "acceptCharset",
                "accept-charset"
            ],
            [
                "htmlFor",
                "for"
            ],
            [
                "httpEquiv",
                "http-equiv"
            ],
            [
                "crossOrigin",
                "crossorigin"
            ],
            [
                "accentHeight",
                "accent-height"
            ],
            [
                "alignmentBaseline",
                "alignment-baseline"
            ],
            [
                "arabicForm",
                "arabic-form"
            ],
            [
                "baselineShift",
                "baseline-shift"
            ],
            [
                "capHeight",
                "cap-height"
            ],
            [
                "clipPath",
                "clip-path"
            ],
            [
                "clipRule",
                "clip-rule"
            ],
            [
                "colorInterpolation",
                "color-interpolation"
            ],
            [
                "colorInterpolationFilters",
                "color-interpolation-filters"
            ],
            [
                "colorProfile",
                "color-profile"
            ],
            [
                "colorRendering",
                "color-rendering"
            ],
            [
                "dominantBaseline",
                "dominant-baseline"
            ],
            [
                "enableBackground",
                "enable-background"
            ],
            [
                "fillOpacity",
                "fill-opacity"
            ],
            [
                "fillRule",
                "fill-rule"
            ],
            [
                "floodColor",
                "flood-color"
            ],
            [
                "floodOpacity",
                "flood-opacity"
            ],
            [
                "fontFamily",
                "font-family"
            ],
            [
                "fontSize",
                "font-size"
            ],
            [
                "fontSizeAdjust",
                "font-size-adjust"
            ],
            [
                "fontStretch",
                "font-stretch"
            ],
            [
                "fontStyle",
                "font-style"
            ],
            [
                "fontVariant",
                "font-variant"
            ],
            [
                "fontWeight",
                "font-weight"
            ],
            [
                "glyphName",
                "glyph-name"
            ],
            [
                "glyphOrientationHorizontal",
                "glyph-orientation-horizontal"
            ],
            [
                "glyphOrientationVertical",
                "glyph-orientation-vertical"
            ],
            [
                "horizAdvX",
                "horiz-adv-x"
            ],
            [
                "horizOriginX",
                "horiz-origin-x"
            ],
            [
                "imageRendering",
                "image-rendering"
            ],
            [
                "letterSpacing",
                "letter-spacing"
            ],
            [
                "lightingColor",
                "lighting-color"
            ],
            [
                "markerEnd",
                "marker-end"
            ],
            [
                "markerMid",
                "marker-mid"
            ],
            [
                "markerStart",
                "marker-start"
            ],
            [
                "overlinePosition",
                "overline-position"
            ],
            [
                "overlineThickness",
                "overline-thickness"
            ],
            [
                "paintOrder",
                "paint-order"
            ],
            [
                "panose-1",
                "panose-1"
            ],
            [
                "pointerEvents",
                "pointer-events"
            ],
            [
                "renderingIntent",
                "rendering-intent"
            ],
            [
                "shapeRendering",
                "shape-rendering"
            ],
            [
                "stopColor",
                "stop-color"
            ],
            [
                "stopOpacity",
                "stop-opacity"
            ],
            [
                "strikethroughPosition",
                "strikethrough-position"
            ],
            [
                "strikethroughThickness",
                "strikethrough-thickness"
            ],
            [
                "strokeDasharray",
                "stroke-dasharray"
            ],
            [
                "strokeDashoffset",
                "stroke-dashoffset"
            ],
            [
                "strokeLinecap",
                "stroke-linecap"
            ],
            [
                "strokeLinejoin",
                "stroke-linejoin"
            ],
            [
                "strokeMiterlimit",
                "stroke-miterlimit"
            ],
            [
                "strokeOpacity",
                "stroke-opacity"
            ],
            [
                "strokeWidth",
                "stroke-width"
            ],
            [
                "textAnchor",
                "text-anchor"
            ],
            [
                "textDecoration",
                "text-decoration"
            ],
            [
                "textRendering",
                "text-rendering"
            ],
            [
                "transformOrigin",
                "transform-origin"
            ],
            [
                "underlinePosition",
                "underline-position"
            ],
            [
                "underlineThickness",
                "underline-thickness"
            ],
            [
                "unicodeBidi",
                "unicode-bidi"
            ],
            [
                "unicodeRange",
                "unicode-range"
            ],
            [
                "unitsPerEm",
                "units-per-em"
            ],
            [
                "vAlphabetic",
                "v-alphabetic"
            ],
            [
                "vHanging",
                "v-hanging"
            ],
            [
                "vIdeographic",
                "v-ideographic"
            ],
            [
                "vMathematical",
                "v-mathematical"
            ],
            [
                "vectorEffect",
                "vector-effect"
            ],
            [
                "vertAdvY",
                "vert-adv-y"
            ],
            [
                "vertOriginX",
                "vert-origin-x"
            ],
            [
                "vertOriginY",
                "vert-origin-y"
            ],
            [
                "wordSpacing",
                "word-spacing"
            ],
            [
                "writingMode",
                "writing-mode"
            ],
            [
                "xmlnsXlink",
                "xmlns:xlink"
            ],
            [
                "xHeight",
                "x-height"
            ]
        ]), Yy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
        function ai(e) {
            return Yy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
        }
        function zl() {}
        var Hr = null;
        function wr(e) {
            return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
        }
        var dn = null, hn = null;
        function zf(e) {
            var t = kt(e);
            if (t && (e = t.stateNode)) {
                var l = e[J] || null;
                e: switch(e = t.stateNode, t.type){
                    case "input":
                        if (Br(e, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), t = l.name, l.type === "radio" && t != null) {
                            for(l = e; l.parentNode;)l = l.parentNode;
                            for(l = l.querySelectorAll('input[name="' + el("" + t) + '"][type="radio"]'), t = 0; t < l.length; t++){
                                var a = l[t];
                                if (a !== e && a.form === e.form) {
                                    var u = a[J] || null;
                                    if (!u) throw Error(s(90));
                                    Br(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name);
                                }
                            }
                            for(t = 0; t < l.length; t++)a = l[t], a.form === e.form && Tf(a);
                        }
                        break e;
                    case "textarea":
                        Df(e, l.value, l.defaultValue);
                        break e;
                    case "select":
                        t = l.value, t != null && fn(e, !!l.multiple, t, !1);
                }
            }
        }
        var qr = !1;
        function Rf(e, t, l) {
            if (qr) return e(t, l);
            qr = !0;
            try {
                var a = e(t);
                return a;
            } finally{
                if (qr = !1, (dn !== null || hn !== null) && (Vi(), dn && (t = dn, e = hn, hn = dn = null, zf(t), e))) for(t = 0; t < e.length; t++)zf(e[t]);
            }
        }
        function kn(e, t) {
            var l = e.stateNode;
            if (l === null) return null;
            var a = l[J] || null;
            if (a === null) return null;
            l = a[t];
            e: switch(t){
                case "onClick":
                case "onClickCapture":
                case "onDoubleClick":
                case "onDoubleClickCapture":
                case "onMouseDown":
                case "onMouseDownCapture":
                case "onMouseMove":
                case "onMouseMoveCapture":
                case "onMouseUp":
                case "onMouseUpCapture":
                case "onMouseEnter":
                    (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
                    break e;
                default:
                    e = !1;
            }
            if (e) return null;
            if (l && typeof l != "function") throw Error(s(231, t, typeof l));
            return l;
        }
        var Rl = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qr = !1;
        if (Rl) try {
            var Pn = {};
            Object.defineProperty(Pn, "passive", {
                get: function() {
                    Qr = !0;
                }
            }), window.addEventListener("test", Pn, Pn), window.removeEventListener("test", Pn, Pn);
        } catch  {
            Qr = !1;
        }
        var Il = null, Yr = null, ni = null;
        function xf() {
            if (ni) return ni;
            var e, t = Yr, l = t.length, a, u = "value" in Il ? Il.value : Il.textContent, r = u.length;
            for(e = 0; e < l && t[e] === u[e]; e++);
            var f = l - e;
            for(a = 1; a <= f && t[l - a] === u[r - a]; a++);
            return ni = u.slice(e, 1 < a ? 1 - a : void 0);
        }
        function ui(e) {
            var t = e.keyCode;
            return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
        }
        function ii() {
            return !0;
        }
        function Uf() {
            return !1;
        }
        function Nt(e) {
            function t(l, a, u, r, f) {
                this._reactName = l, this._targetInst = u, this.type = a, this.nativeEvent = r, this.target = f, this.currentTarget = null;
                for(var h in e)e.hasOwnProperty(h) && (l = e[h], this[h] = l ? l(r) : r[h]);
                return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ii : Uf, this.isPropagationStopped = Uf, this;
            }
            return S(t.prototype, {
                preventDefault: function() {
                    this.defaultPrevented = !0;
                    var l = this.nativeEvent;
                    l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = ii);
                },
                stopPropagation: function() {
                    var l = this.nativeEvent;
                    l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = ii);
                },
                persist: function() {},
                isPersistent: ii
            }), t;
        }
        var Ba = {
            eventPhase: 0,
            bubbles: 0,
            cancelable: 0,
            timeStamp: function(e) {
                return e.timeStamp || Date.now();
            },
            defaultPrevented: 0,
            isTrusted: 0
        }, ri = Nt(Ba), In = S({}, Ba, {
            view: 0,
            detail: 0
        }), Gy = Nt(In), Gr, Xr, eu, ci = S({}, In, {
            screenX: 0,
            screenY: 0,
            clientX: 0,
            clientY: 0,
            pageX: 0,
            pageY: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            getModifierState: Zr,
            button: 0,
            buttons: 0,
            relatedTarget: function(e) {
                return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
            },
            movementX: function(e) {
                return "movementX" in e ? e.movementX : (e !== eu && (eu && e.type === "mousemove" ? (Gr = e.screenX - eu.screenX, Xr = e.screenY - eu.screenY) : Xr = Gr = 0, eu = e), Gr);
            },
            movementY: function(e) {
                return "movementY" in e ? e.movementY : Xr;
            }
        }), Nf = Nt(ci), Xy = S({}, ci, {
            dataTransfer: 0
        }), Vy = Nt(Xy), Zy = S({}, In, {
            relatedTarget: 0
        }), Vr = Nt(Zy), Ky = S({}, Ba, {
            animationName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), Jy = Nt(Ky), Fy = S({}, Ba, {
            clipboardData: function(e) {
                return "clipboardData" in e ? e.clipboardData : window.clipboardData;
            }
        }), Wy = Nt(Fy), $y = S({}, Ba, {
            data: 0
        }), Bf = Nt($y), ky = {
            Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }, Py = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }, Iy = {
            Alt: "altKey",
            Control: "ctrlKey",
            Meta: "metaKey",
            Shift: "shiftKey"
        };
        function e0(e) {
            var t = this.nativeEvent;
            return t.getModifierState ? t.getModifierState(e) : (e = Iy[e]) ? !!t[e] : !1;
        }
        function Zr() {
            return e0;
        }
        var t0 = S({}, In, {
            key: function(e) {
                if (e.key) {
                    var t = ky[e.key] || e.key;
                    if (t !== "Unidentified") return t;
                }
                return e.type === "keypress" ? (e = ui(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Py[e.keyCode] || "Unidentified" : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: Zr,
            charCode: function(e) {
                return e.type === "keypress" ? ui(e) : 0;
            },
            keyCode: function(e) {
                return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            },
            which: function(e) {
                return e.type === "keypress" ? ui(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
            }
        }), l0 = Nt(t0), a0 = S({}, ci, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0
        }), jf = Nt(a0), n0 = S({}, In, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: Zr
        }), u0 = Nt(n0), i0 = S({}, Ba, {
            propertyName: 0,
            elapsedTime: 0,
            pseudoElement: 0
        }), r0 = Nt(i0), c0 = S({}, ci, {
            deltaX: function(e) {
                return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
            },
            deltaY: function(e) {
                return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
            },
            deltaZ: 0,
            deltaMode: 0
        }), s0 = Nt(c0), f0 = S({}, Ba, {
            newState: 0,
            oldState: 0
        }), o0 = Nt(f0), d0 = [
            9,
            13,
            27,
            32
        ], Kr = Rl && "CompositionEvent" in window, tu = null;
        Rl && "documentMode" in document && (tu = document.documentMode);
        var h0 = Rl && "TextEvent" in window && !tu, Lf = Rl && (!Kr || tu && 8 < tu && 11 >= tu), Hf = " ", wf = !1;
        function qf(e, t) {
            switch(e){
                case "keyup":
                    return d0.indexOf(t.keyCode) !== -1;
                case "keydown":
                    return t.keyCode !== 229;
                case "keypress":
                case "mousedown":
                case "focusout":
                    return !0;
                default:
                    return !1;
            }
        }
        function Qf(e) {
            return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
        }
        var mn = !1;
        function m0(e, t) {
            switch(e){
                case "compositionend":
                    return Qf(t);
                case "keypress":
                    return t.which !== 32 ? null : (wf = !0, Hf);
                case "textInput":
                    return e = t.data, e === Hf && wf ? null : e;
                default:
                    return null;
            }
        }
        function y0(e, t) {
            if (mn) return e === "compositionend" || !Kr && qf(e, t) ? (e = xf(), ni = Yr = Il = null, mn = !1, e) : null;
            switch(e){
                case "paste":
                    return null;
                case "keypress":
                    if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                        if (t.char && 1 < t.char.length) return t.char;
                        if (t.which) return String.fromCharCode(t.which);
                    }
                    return null;
                case "compositionend":
                    return Lf && t.locale !== "ko" ? null : t.data;
                default:
                    return null;
            }
        }
        var v0 = {
            color: !0,
            date: !0,
            datetime: !0,
            "datetime-local": !0,
            email: !0,
            month: !0,
            number: !0,
            password: !0,
            range: !0,
            search: !0,
            tel: !0,
            text: !0,
            time: !0,
            url: !0,
            week: !0
        };
        function Yf(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t === "input" ? !!v0[e.type] : t === "textarea";
        }
        function Gf(e, t, l, a) {
            dn ? hn ? hn.push(a) : hn = [
                a
            ] : dn = a, t = ki(t, "onChange"), 0 < t.length && (l = new ri("onChange", "change", null, l, a), e.push({
                event: l,
                listeners: t
            }));
        }
        var lu = null, au = null;
        function g0(e) {
            Dh(e, 0);
        }
        function si(e) {
            var t = Ct(e);
            if (Tf(t)) return e;
        }
        function Xf(e, t) {
            if (e === "change") return t;
        }
        var Vf = !1;
        if (Rl) {
            var Jr;
            if (Rl) {
                var Fr = "oninput" in document;
                if (!Fr) {
                    var Zf = document.createElement("div");
                    Zf.setAttribute("oninput", "return;"), Fr = typeof Zf.oninput == "function";
                }
                Jr = Fr;
            } else Jr = !1;
            Vf = Jr && (!document.documentMode || 9 < document.documentMode);
        }
        function Kf() {
            lu && (lu.detachEvent("onpropertychange", Jf), au = lu = null);
        }
        function Jf(e) {
            if (e.propertyName === "value" && si(au)) {
                var t = [];
                Gf(t, au, e, wr(e)), Rf(g0, t);
            }
        }
        function p0(e, t, l) {
            e === "focusin" ? (Kf(), lu = t, au = l, lu.attachEvent("onpropertychange", Jf)) : e === "focusout" && Kf();
        }
        function S0(e) {
            if (e === "selectionchange" || e === "keyup" || e === "keydown") return si(au);
        }
        function b0(e, t) {
            if (e === "click") return si(t);
        }
        function E0(e, t) {
            if (e === "input" || e === "change") return si(t);
        }
        function A0(e, t) {
            return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
        }
        var Gt = typeof Object.is == "function" ? Object.is : A0;
        function nu(e, t) {
            if (Gt(e, t)) return !0;
            if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
            var l = Object.keys(e), a = Object.keys(t);
            if (l.length !== a.length) return !1;
            for(a = 0; a < l.length; a++){
                var u = l[a];
                if (!un.call(t, u) || !Gt(e[u], t[u])) return !1;
            }
            return !0;
        }
        function Ff(e) {
            for(; e && e.firstChild;)e = e.firstChild;
            return e;
        }
        function Wf(e, t) {
            var l = Ff(e);
            e = 0;
            for(var a; l;){
                if (l.nodeType === 3) {
                    if (a = e + l.textContent.length, e <= t && a >= t) return {
                        node: l,
                        offset: t - e
                    };
                    e = a;
                }
                e: {
                    for(; l;){
                        if (l.nextSibling) {
                            l = l.nextSibling;
                            break e;
                        }
                        l = l.parentNode;
                    }
                    l = void 0;
                }
                l = Ff(l);
            }
        }
        function $f(e, t) {
            return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $f(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
        }
        function kf(e) {
            e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
            for(var t = li(e.document); t instanceof e.HTMLIFrameElement;){
                try {
                    var l = typeof t.contentWindow.location.href == "string";
                } catch  {
                    l = !1;
                }
                if (l) e = t.contentWindow;
                else break;
                t = li(e.document);
            }
            return t;
        }
        function Wr(e) {
            var t = e && e.nodeName && e.nodeName.toLowerCase();
            return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
        }
        var T0 = Rl && "documentMode" in document && 11 >= document.documentMode, yn = null, $r = null, uu = null, kr = !1;
        function Pf(e, t, l) {
            var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
            kr || yn == null || yn !== li(a) || (a = yn, "selectionStart" in a && Wr(a) ? a = {
                start: a.selectionStart,
                end: a.selectionEnd
            } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
                anchorNode: a.anchorNode,
                anchorOffset: a.anchorOffset,
                focusNode: a.focusNode,
                focusOffset: a.focusOffset
            }), uu && nu(uu, a) || (uu = a, a = ki($r, "onSelect"), 0 < a.length && (t = new ri("onSelect", "select", null, t, l), e.push({
                event: t,
                listeners: a
            }), t.target = yn)));
        }
        function ja(e, t) {
            var l = {};
            return l[e.toLowerCase()] = t.toLowerCase(), l["Webkit" + e] = "webkit" + t, l["Moz" + e] = "moz" + t, l;
        }
        var vn = {
            animationend: ja("Animation", "AnimationEnd"),
            animationiteration: ja("Animation", "AnimationIteration"),
            animationstart: ja("Animation", "AnimationStart"),
            transitionrun: ja("Transition", "TransitionRun"),
            transitionstart: ja("Transition", "TransitionStart"),
            transitioncancel: ja("Transition", "TransitionCancel"),
            transitionend: ja("Transition", "TransitionEnd")
        }, Pr = {}, If = {};
        Rl && (If = document.createElement("div").style, "AnimationEvent" in window || (delete vn.animationend.animation, delete vn.animationiteration.animation, delete vn.animationstart.animation), "TransitionEvent" in window || delete vn.transitionend.transition);
        function La(e) {
            if (Pr[e]) return Pr[e];
            if (!vn[e]) return e;
            var t = vn[e], l;
            for(l in t)if (t.hasOwnProperty(l) && l in If) return Pr[e] = t[l];
            return e;
        }
        var eo = La("animationend"), to = La("animationiteration"), lo = La("animationstart"), M0 = La("transitionrun"), D0 = La("transitionstart"), O0 = La("transitioncancel"), ao = La("transitionend"), no = new Map, Ir = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
        Ir.push("scrollEnd");
        function ml(e, t) {
            no.set(e, t), Pt(t, [
                e
            ]);
        }
        var fi = typeof reportError == "function" ? reportError : function(e) {
            if (typeof window == "object" && typeof window.ErrorEvent == "function") {
                var t = new window.ErrorEvent("error", {
                    bubbles: !0,
                    cancelable: !0,
                    message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
                    error: e
                });
                if (!window.dispatchEvent(t)) return;
            } else if (typeof process == "object" && typeof process.emit == "function") {
                process.emit("uncaughtException", e);
                return;
            }
            console.error(e);
        }, tl = [], gn = 0, ec = 0;
        function oi() {
            for(var e = gn, t = ec = gn = 0; t < e;){
                var l = tl[t];
                tl[t++] = null;
                var a = tl[t];
                tl[t++] = null;
                var u = tl[t];
                tl[t++] = null;
                var r = tl[t];
                if (tl[t++] = null, a !== null && u !== null) {
                    var f = a.pending;
                    f === null ? u.next = u : (u.next = f.next, f.next = u), a.pending = u;
                }
                r !== 0 && uo(l, u, r);
            }
        }
        function di(e, t, l, a) {
            tl[gn++] = e, tl[gn++] = t, tl[gn++] = l, tl[gn++] = a, ec |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
        }
        function tc(e, t, l, a) {
            return di(e, t, l, a), hi(e);
        }
        function Ha(e, t) {
            return di(e, null, null, t), hi(e);
        }
        function uo(e, t, l) {
            e.lanes |= l;
            var a = e.alternate;
            a !== null && (a.lanes |= l);
            for(var u = !1, r = e.return; r !== null;)r.childLanes |= l, a = r.alternate, a !== null && (a.childLanes |= l), r.tag === 22 && (e = r.stateNode, e === null || e._visibility & 1 || (u = !0)), e = r, r = r.return;
            return e.tag === 3 ? (r = e.stateNode, u && t !== null && (u = 31 - Ot(l), e = r.hiddenUpdates, a = e[u], a === null ? e[u] = [
                t
            ] : a.push(t), t.lane = l | 536870912), r) : null;
        }
        function hi(e) {
            if (50 < _u) throw _u = 0, fs = null, Error(s(185));
            for(var t = e.return; t !== null;)e = t, t = e.return;
            return e.tag === 3 ? e.stateNode : null;
        }
        var pn = {};
        function _0(e, t, l, a) {
            this.tag = e, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
        }
        function Xt(e, t, l, a) {
            return new _0(e, t, l, a);
        }
        function lc(e) {
            return e = e.prototype, !(!e || !e.isReactComponent);
        }
        function xl(e, t) {
            var l = e.alternate;
            return l === null ? (l = Xt(e.tag, t, e.key, e.mode), l.elementType = e.elementType, l.type = e.type, l.stateNode = e.stateNode, l.alternate = e, e.alternate = l) : (l.pendingProps = t, l.type = e.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = e.flags & 65011712, l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, t = e.dependencies, l.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }, l.sibling = e.sibling, l.index = e.index, l.ref = e.ref, l.refCleanup = e.refCleanup, l;
        }
        function io(e, t) {
            e.flags &= 65011714;
            var l = e.alternate;
            return l === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, e.type = l.type, t = l.dependencies, e.dependencies = t === null ? null : {
                lanes: t.lanes,
                firstContext: t.firstContext
            }), e;
        }
        function mi(e, t, l, a, u, r) {
            var f = 0;
            if (a = e, typeof e == "function") lc(e) && (f = 1);
            else if (typeof e == "string") f = Uv(e, l, k.current) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
            else e: switch(e){
                case ve:
                    return e = Xt(31, l, t, u), e.elementType = ve, e.lanes = r, e;
                case L:
                    return wa(l.children, u, r, t);
                case X:
                    f = 8, u |= 24;
                    break;
                case te:
                    return e = Xt(12, l, t, u | 2), e.elementType = te, e.lanes = r, e;
                case Ee:
                    return e = Xt(13, l, t, u), e.elementType = Ee, e.lanes = r, e;
                case qe:
                    return e = Xt(19, l, t, u), e.elementType = qe, e.lanes = r, e;
                default:
                    if (typeof e == "object" && e !== null) switch(e.$$typeof){
                        case ne:
                            f = 10;
                            break e;
                        case W:
                            f = 9;
                            break e;
                        case de:
                            f = 11;
                            break e;
                        case O:
                            f = 14;
                            break e;
                        case I:
                            f = 16, a = null;
                            break e;
                    }
                    f = 29, l = Error(s(130, e === null ? "null" : typeof e, "")), a = null;
            }
            return t = Xt(f, l, t, u), t.elementType = e, t.type = a, t.lanes = r, t;
        }
        function wa(e, t, l, a) {
            return e = Xt(7, e, a, t), e.lanes = l, e;
        }
        function ac(e, t, l) {
            return e = Xt(6, e, null, t), e.lanes = l, e;
        }
        function ro(e) {
            var t = Xt(18, null, null, 0);
            return t.stateNode = e, t;
        }
        function nc(e, t, l) {
            return t = Xt(4, e.children !== null ? e.children : [], e.key, t), t.lanes = l, t.stateNode = {
                containerInfo: e.containerInfo,
                pendingChildren: null,
                implementation: e.implementation
            }, t;
        }
        var co = new WeakMap;
        function ll(e, t) {
            if (typeof e == "object" && e !== null) {
                var l = co.get(e);
                return l !== void 0 ? l : (t = {
                    value: e,
                    source: t,
                    stack: Iu(t)
                }, co.set(e, t), t);
            }
            return {
                value: e,
                source: t,
                stack: Iu(t)
            };
        }
        var Sn = [], bn = 0, yi = null, iu = 0, al = [], nl = 0, ea = null, El = 1, Al = "";
        function Ul(e, t) {
            Sn[bn++] = iu, Sn[bn++] = yi, yi = e, iu = t;
        }
        function so(e, t, l) {
            al[nl++] = El, al[nl++] = Al, al[nl++] = ea, ea = e;
            var a = El;
            e = Al;
            var u = 32 - Ot(a) - 1;
            a &= ~(1 << u), l += 1;
            var r = 32 - Ot(t) + u;
            if (30 < r) {
                var f = u - u % 5;
                r = (a & (1 << f) - 1).toString(32), a >>= f, u -= f, El = 1 << 32 - Ot(t) + u | l << u | a, Al = r + e;
            } else El = 1 << r | l << u | a, Al = e;
        }
        function uc(e) {
            e.return !== null && (Ul(e, 1), so(e, 1, 0));
        }
        function ic(e) {
            for(; e === yi;)yi = Sn[--bn], Sn[bn] = null, iu = Sn[--bn], Sn[bn] = null;
            for(; e === ea;)ea = al[--nl], al[nl] = null, Al = al[--nl], al[nl] = null, El = al[--nl], al[nl] = null;
        }
        function fo(e, t) {
            al[nl++] = El, al[nl++] = Al, al[nl++] = ea, El = t.id, Al = t.overflow, ea = e;
        }
        var Et = null, Pe = null, xe = !1, ta = null, ul = !1, rc = Error(s(519));
        function la(e) {
            var t = Error(s(418, 1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML", ""));
            throw ru(ll(t, e)), rc;
        }
        function oo(e) {
            var t = e.stateNode, l = e.type, a = e.memoizedProps;
            switch(t[F] = e, t[J] = a, l){
                case "dialog":
                    De("cancel", t), De("close", t);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    De("load", t);
                    break;
                case "video":
                case "audio":
                    for(l = 0; l < zu.length; l++)De(zu[l], t);
                    break;
                case "source":
                    De("error", t);
                    break;
                case "img":
                case "image":
                case "link":
                    De("error", t), De("load", t);
                    break;
                case "details":
                    De("toggle", t);
                    break;
                case "input":
                    De("invalid", t), Mf(t, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0);
                    break;
                case "select":
                    De("invalid", t);
                    break;
                case "textarea":
                    De("invalid", t), Of(t, a.value, a.defaultValue, a.children);
            }
            l = a.children, typeof l != "string" && typeof l != "number" && typeof l != "bigint" || t.textContent === "" + l || a.suppressHydrationWarning === !0 || zh(t.textContent, l) ? (a.popover != null && (De("beforetoggle", t), De("toggle", t)), a.onScroll != null && De("scroll", t), a.onScrollEnd != null && De("scrollend", t), a.onClick != null && (t.onclick = zl), t = !0) : t = !1, t || la(e, !0);
        }
        function ho(e) {
            for(Et = e.return; Et;)switch(Et.tag){
                case 5:
                case 31:
                case 13:
                    ul = !1;
                    return;
                case 27:
                case 3:
                    ul = !0;
                    return;
                default:
                    Et = Et.return;
            }
        }
        function En(e) {
            if (e !== Et) return !1;
            if (!xe) return ho(e), xe = !0, !1;
            var t = e.tag, l;
            if ((l = t !== 3 && t !== 27) && ((l = t === 5) && (l = e.type, l = !(l !== "form" && l !== "button") || Ds(e.type, e.memoizedProps)), l = !l), l && Pe && la(e), ho(e), t === 13) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
                Pe = wh(e);
            } else if (t === 31) {
                if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
                Pe = wh(e);
            } else t === 27 ? (t = Pe, va(e.type) ? (e = Rs, Rs = null, Pe = e) : Pe = t) : Pe = Et ? rl(e.stateNode.nextSibling) : null;
            return !0;
        }
        function qa() {
            Pe = Et = null, xe = !1;
        }
        function cc() {
            var e = ta;
            return e !== null && (Ht === null ? Ht = e : Ht.push.apply(Ht, e), ta = null), e;
        }
        function ru(e) {
            ta === null ? ta = [
                e
            ] : ta.push(e);
        }
        var sc = T(null), Qa = null, Nl = null;
        function aa(e, t, l) {
            V(sc, t._currentValue), t._currentValue = l;
        }
        function Bl(e) {
            e._currentValue = sc.current, w(sc);
        }
        function fc(e, t, l) {
            for(; e !== null;){
                var a = e.alternate;
                if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === l) break;
                e = e.return;
            }
        }
        function oc(e, t, l, a) {
            var u = e.child;
            for(u !== null && (u.return = e); u !== null;){
                var r = u.dependencies;
                if (r !== null) {
                    var f = u.child;
                    r = r.firstContext;
                    e: for(; r !== null;){
                        var h = r;
                        r = u;
                        for(var p = 0; p < t.length; p++)if (h.context === t[p]) {
                            r.lanes |= l, h = r.alternate, h !== null && (h.lanes |= l), fc(r.return, l, e), a || (f = null);
                            break e;
                        }
                        r = h.next;
                    }
                } else if (u.tag === 18) {
                    if (f = u.return, f === null) throw Error(s(341));
                    f.lanes |= l, r = f.alternate, r !== null && (r.lanes |= l), fc(f, l, e), f = null;
                } else f = u.child;
                if (f !== null) f.return = u;
                else for(f = u; f !== null;){
                    if (f === e) {
                        f = null;
                        break;
                    }
                    if (u = f.sibling, u !== null) {
                        u.return = f.return, f = u;
                        break;
                    }
                    f = f.return;
                }
                u = f;
            }
        }
        function An(e, t, l, a) {
            e = null;
            for(var u = t, r = !1; u !== null;){
                if (!r) {
                    if ((u.flags & 524288) !== 0) r = !0;
                    else if ((u.flags & 262144) !== 0) break;
                }
                if (u.tag === 10) {
                    var f = u.alternate;
                    if (f === null) throw Error(s(387));
                    if (f = f.memoizedProps, f !== null) {
                        var h = u.type;
                        Gt(u.pendingProps.value, f.value) || (e !== null ? e.push(h) : e = [
                            h
                        ]);
                    }
                } else if (u === Ae.current) {
                    if (f = u.alternate, f === null) throw Error(s(387));
                    f.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Bu) : e = [
                        Bu
                    ]);
                }
                u = u.return;
            }
            e !== null && oc(t, e, l, a), t.flags |= 262144;
        }
        function vi(e) {
            for(e = e.firstContext; e !== null;){
                if (!Gt(e.context._currentValue, e.memoizedValue)) return !0;
                e = e.next;
            }
            return !1;
        }
        function Ya(e) {
            Qa = e, Nl = null, e = e.dependencies, e !== null && (e.firstContext = null);
        }
        function At(e) {
            return mo(Qa, e);
        }
        function gi(e, t) {
            return Qa === null && Ya(e), mo(e, t);
        }
        function mo(e, t) {
            var l = t._currentValue;
            if (t = {
                context: t,
                memoizedValue: l,
                next: null
            }, Nl === null) {
                if (e === null) throw Error(s(308));
                Nl = t, e.dependencies = {
                    lanes: 0,
                    firstContext: t
                }, e.flags |= 524288;
            } else Nl = Nl.next = t;
            return l;
        }
        var C0 = typeof AbortController < "u" ? AbortController : function() {
            var e = [], t = this.signal = {
                aborted: !1,
                addEventListener: function(l, a) {
                    e.push(a);
                }
            };
            this.abort = function() {
                t.aborted = !0, e.forEach(function(l) {
                    return l();
                });
            };
        }, z0 = n.unstable_scheduleCallback, R0 = n.unstable_NormalPriority, ot = {
            $$typeof: ne,
            Consumer: null,
            Provider: null,
            _currentValue: null,
            _currentValue2: null,
            _threadCount: 0
        };
        function dc() {
            return {
                controller: new C0,
                data: new Map,
                refCount: 0
            };
        }
        function cu(e) {
            e.refCount--, e.refCount === 0 && z0(R0, function() {
                e.controller.abort();
            });
        }
        var su = null, hc = 0, Tn = 0, Mn = null;
        function x0(e, t) {
            if (su === null) {
                var l = su = [];
                hc = 0, Tn = vs(), Mn = {
                    status: "pending",
                    value: void 0,
                    then: function(a) {
                        l.push(a);
                    }
                };
            }
            return hc++, t.then(yo, yo), t;
        }
        function yo() {
            if (--hc === 0 && su !== null) {
                Mn !== null && (Mn.status = "fulfilled");
                var e = su;
                su = null, Tn = 0, Mn = null;
                for(var t = 0; t < e.length; t++)(0, e[t])();
            }
        }
        function U0(e, t) {
            var l = [], a = {
                status: "pending",
                value: null,
                reason: null,
                then: function(u) {
                    l.push(u);
                }
            };
            return e.then(function() {
                a.status = "fulfilled", a.value = t;
                for(var u = 0; u < l.length; u++)(0, l[u])(t);
            }, function(u) {
                for(a.status = "rejected", a.reason = u, u = 0; u < l.length; u++)(0, l[u])(void 0);
            }), a;
        }
        var vo = B.S;
        B.S = function(e, t) {
            Id = rt(), typeof t == "object" && t !== null && typeof t.then == "function" && x0(e, t), vo !== null && vo(e, t);
        };
        var Ga = T(null);
        function mc() {
            var e = Ga.current;
            return e !== null ? e : Je.pooledCache;
        }
        function pi(e, t) {
            t === null ? V(Ga, Ga.current) : V(Ga, t.pool);
        }
        function go() {
            var e = mc();
            return e === null ? null : {
                parent: ot._currentValue,
                pool: e
            };
        }
        var Dn = Error(s(460)), yc = Error(s(474)), Si = Error(s(542)), bi = {
            then: function() {}
        };
        function po(e) {
            return e = e.status, e === "fulfilled" || e === "rejected";
        }
        function So(e, t, l) {
            switch(l = e[l], l === void 0 ? e.push(t) : l !== t && (t.then(zl, zl), t = l), t.status){
                case "fulfilled":
                    return t.value;
                case "rejected":
                    throw e = t.reason, Eo(e), e;
                default:
                    if (typeof t.status == "string") t.then(zl, zl);
                    else {
                        if (e = Je, e !== null && 100 < e.shellSuspendCounter) throw Error(s(482));
                        e = t, e.status = "pending", e.then(function(a) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "fulfilled", u.value = a;
                            }
                        }, function(a) {
                            if (t.status === "pending") {
                                var u = t;
                                u.status = "rejected", u.reason = a;
                            }
                        });
                    }
                    switch(t.status){
                        case "fulfilled":
                            return t.value;
                        case "rejected":
                            throw e = t.reason, Eo(e), e;
                    }
                    throw Va = t, Dn;
            }
        }
        function Xa(e) {
            try {
                var t = e._init;
                return t(e._payload);
            } catch (l) {
                throw l !== null && typeof l == "object" && typeof l.then == "function" ? (Va = l, Dn) : l;
            }
        }
        var Va = null;
        function bo() {
            if (Va === null) throw Error(s(459));
            var e = Va;
            return Va = null, e;
        }
        function Eo(e) {
            if (e === Dn || e === Si) throw Error(s(483));
        }
        var On = null, fu = 0;
        function Ei(e) {
            var t = fu;
            return fu += 1, On === null && (On = []), So(On, e, t);
        }
        function ou(e, t) {
            t = t.props.ref, e.ref = t !== void 0 ? t : null;
        }
        function Ai(e, t) {
            throw t.$$typeof === _ ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(s(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)));
        }
        function Ao(e) {
            function t(M, A) {
                if (e) {
                    var C = M.deletions;
                    C === null ? (M.deletions = [
                        A
                    ], M.flags |= 16) : C.push(A);
                }
            }
            function l(M, A) {
                if (!e) return null;
                for(; A !== null;)t(M, A), A = A.sibling;
                return null;
            }
            function a(M) {
                for(var A = new Map; M !== null;)M.key !== null ? A.set(M.key, M) : A.set(M.index, M), M = M.sibling;
                return A;
            }
            function u(M, A) {
                return M = xl(M, A), M.index = 0, M.sibling = null, M;
            }
            function r(M, A, C) {
                return M.index = C, e ? (C = M.alternate, C !== null ? (C = C.index, C < A ? (M.flags |= 67108866, A) : C) : (M.flags |= 67108866, A)) : (M.flags |= 1048576, A);
            }
            function f(M) {
                return e && M.alternate === null && (M.flags |= 67108866), M;
            }
            function h(M, A, C, q) {
                return A === null || A.tag !== 6 ? (A = ac(C, M.mode, q), A.return = M, A) : (A = u(A, C), A.return = M, A);
            }
            function p(M, A, C, q) {
                var ie = C.type;
                return ie === L ? H(M, A, C.props.children, q, C.key) : A !== null && (A.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === I && Xa(ie) === A.type) ? (A = u(A, C.props), ou(A, C), A.return = M, A) : (A = mi(C.type, C.key, C.props, null, M.mode, q), ou(A, C), A.return = M, A);
            }
            function z(M, A, C, q) {
                return A === null || A.tag !== 4 || A.stateNode.containerInfo !== C.containerInfo || A.stateNode.implementation !== C.implementation ? (A = nc(C, M.mode, q), A.return = M, A) : (A = u(A, C.children || []), A.return = M, A);
            }
            function H(M, A, C, q, ie) {
                return A === null || A.tag !== 7 ? (A = wa(C, M.mode, q, ie), A.return = M, A) : (A = u(A, C), A.return = M, A);
            }
            function Q(M, A, C) {
                if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint") return A = ac("" + A, M.mode, C), A.return = M, A;
                if (typeof A == "object" && A !== null) {
                    switch(A.$$typeof){
                        case N:
                            return C = mi(A.type, A.key, A.props, null, M.mode, C), ou(C, A), C.return = M, C;
                        case j:
                            return A = nc(A, M.mode, C), A.return = M, A;
                        case I:
                            return A = Xa(A), Q(M, A, C);
                    }
                    if (Fe(A) || pe(A)) return A = wa(A, M.mode, C, null), A.return = M, A;
                    if (typeof A.then == "function") return Q(M, Ei(A), C);
                    if (A.$$typeof === ne) return Q(M, gi(M, A), C);
                    Ai(M, A);
                }
                return null;
            }
            function R(M, A, C, q) {
                var ie = A !== null ? A.key : null;
                if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint") return ie !== null ? null : h(M, A, "" + C, q);
                if (typeof C == "object" && C !== null) {
                    switch(C.$$typeof){
                        case N:
                            return C.key === ie ? p(M, A, C, q) : null;
                        case j:
                            return C.key === ie ? z(M, A, C, q) : null;
                        case I:
                            return C = Xa(C), R(M, A, C, q);
                    }
                    if (Fe(C) || pe(C)) return ie !== null ? null : H(M, A, C, q, null);
                    if (typeof C.then == "function") return R(M, A, Ei(C), q);
                    if (C.$$typeof === ne) return R(M, A, gi(M, C), q);
                    Ai(M, C);
                }
                return null;
            }
            function U(M, A, C, q, ie) {
                if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint") return M = M.get(C) || null, h(A, M, "" + q, ie);
                if (typeof q == "object" && q !== null) {
                    switch(q.$$typeof){
                        case N:
                            return M = M.get(q.key === null ? C : q.key) || null, p(A, M, q, ie);
                        case j:
                            return M = M.get(q.key === null ? C : q.key) || null, z(A, M, q, ie);
                        case I:
                            return q = Xa(q), U(M, A, C, q, ie);
                    }
                    if (Fe(q) || pe(q)) return M = M.get(C) || null, H(A, M, q, ie, null);
                    if (typeof q.then == "function") return U(M, A, C, Ei(q), ie);
                    if (q.$$typeof === ne) return U(M, A, C, gi(A, q), ie);
                    Ai(A, q);
                }
                return null;
            }
            function ee(M, A, C, q) {
                for(var ie = null, je = null, ae = A, be = A = 0, ze = null; ae !== null && be < C.length; be++){
                    ae.index > be ? (ze = ae, ae = null) : ze = ae.sibling;
                    var Le = R(M, ae, C[be], q);
                    if (Le === null) {
                        ae === null && (ae = ze);
                        break;
                    }
                    e && ae && Le.alternate === null && t(M, ae), A = r(Le, A, be), je === null ? ie = Le : je.sibling = Le, je = Le, ae = ze;
                }
                if (be === C.length) return l(M, ae), xe && Ul(M, be), ie;
                if (ae === null) {
                    for(; be < C.length; be++)ae = Q(M, C[be], q), ae !== null && (A = r(ae, A, be), je === null ? ie = ae : je.sibling = ae, je = ae);
                    return xe && Ul(M, be), ie;
                }
                for(ae = a(ae); be < C.length; be++)ze = U(ae, M, be, C[be], q), ze !== null && (e && ze.alternate !== null && ae.delete(ze.key === null ? be : ze.key), A = r(ze, A, be), je === null ? ie = ze : je.sibling = ze, je = ze);
                return e && ae.forEach(function(Ea) {
                    return t(M, Ea);
                }), xe && Ul(M, be), ie;
            }
            function se(M, A, C, q) {
                if (C == null) throw Error(s(151));
                for(var ie = null, je = null, ae = A, be = A = 0, ze = null, Le = C.next(); ae !== null && !Le.done; be++, Le = C.next()){
                    ae.index > be ? (ze = ae, ae = null) : ze = ae.sibling;
                    var Ea = R(M, ae, Le.value, q);
                    if (Ea === null) {
                        ae === null && (ae = ze);
                        break;
                    }
                    e && ae && Ea.alternate === null && t(M, ae), A = r(Ea, A, be), je === null ? ie = Ea : je.sibling = Ea, je = Ea, ae = ze;
                }
                if (Le.done) return l(M, ae), xe && Ul(M, be), ie;
                if (ae === null) {
                    for(; !Le.done; be++, Le = C.next())Le = Q(M, Le.value, q), Le !== null && (A = r(Le, A, be), je === null ? ie = Le : je.sibling = Le, je = Le);
                    return xe && Ul(M, be), ie;
                }
                for(ae = a(ae); !Le.done; be++, Le = C.next())Le = U(ae, M, be, Le.value, q), Le !== null && (e && Le.alternate !== null && ae.delete(Le.key === null ? be : Le.key), A = r(Le, A, be), je === null ? ie = Le : je.sibling = Le, je = Le);
                return e && ae.forEach(function(Xv) {
                    return t(M, Xv);
                }), xe && Ul(M, be), ie;
            }
            function Ke(M, A, C, q) {
                if (typeof C == "object" && C !== null && C.type === L && C.key === null && (C = C.props.children), typeof C == "object" && C !== null) {
                    switch(C.$$typeof){
                        case N:
                            e: {
                                for(var ie = C.key; A !== null;){
                                    if (A.key === ie) {
                                        if (ie = C.type, ie === L) {
                                            if (A.tag === 7) {
                                                l(M, A.sibling), q = u(A, C.props.children), q.return = M, M = q;
                                                break e;
                                            }
                                        } else if (A.elementType === ie || typeof ie == "object" && ie !== null && ie.$$typeof === I && Xa(ie) === A.type) {
                                            l(M, A.sibling), q = u(A, C.props), ou(q, C), q.return = M, M = q;
                                            break e;
                                        }
                                        l(M, A);
                                        break;
                                    } else t(M, A);
                                    A = A.sibling;
                                }
                                C.type === L ? (q = wa(C.props.children, M.mode, q, C.key), q.return = M, M = q) : (q = mi(C.type, C.key, C.props, null, M.mode, q), ou(q, C), q.return = M, M = q);
                            }
                            return f(M);
                        case j:
                            e: {
                                for(ie = C.key; A !== null;){
                                    if (A.key === ie) if (A.tag === 4 && A.stateNode.containerInfo === C.containerInfo && A.stateNode.implementation === C.implementation) {
                                        l(M, A.sibling), q = u(A, C.children || []), q.return = M, M = q;
                                        break e;
                                    } else {
                                        l(M, A);
                                        break;
                                    }
                                    else t(M, A);
                                    A = A.sibling;
                                }
                                q = nc(C, M.mode, q), q.return = M, M = q;
                            }
                            return f(M);
                        case I:
                            return C = Xa(C), Ke(M, A, C, q);
                    }
                    if (Fe(C)) return ee(M, A, C, q);
                    if (pe(C)) {
                        if (ie = pe(C), typeof ie != "function") throw Error(s(150));
                        return C = ie.call(C), se(M, A, C, q);
                    }
                    if (typeof C.then == "function") return Ke(M, A, Ei(C), q);
                    if (C.$$typeof === ne) return Ke(M, A, gi(M, C), q);
                    Ai(M, C);
                }
                return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, A !== null && A.tag === 6 ? (l(M, A.sibling), q = u(A, C), q.return = M, M = q) : (l(M, A), q = ac(C, M.mode, q), q.return = M, M = q), f(M)) : l(M, A);
            }
            return function(M, A, C, q) {
                try {
                    fu = 0;
                    var ie = Ke(M, A, C, q);
                    return On = null, ie;
                } catch (ae) {
                    if (ae === Dn || ae === Si) throw ae;
                    var je = Xt(29, ae, null, M.mode);
                    return je.lanes = q, je.return = M, je;
                } finally{}
            };
        }
        var Za = Ao(!0), To = Ao(!1), na = !1;
        function vc(e) {
            e.updateQueue = {
                baseState: e.memoizedState,
                firstBaseUpdate: null,
                lastBaseUpdate: null,
                shared: {
                    pending: null,
                    lanes: 0,
                    hiddenCallbacks: null
                },
                callbacks: null
            };
        }
        function gc(e, t) {
            e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                callbacks: null
            });
        }
        function ua(e) {
            return {
                lane: e,
                tag: 0,
                payload: null,
                callback: null,
                next: null
            };
        }
        function ia(e, t, l) {
            var a = e.updateQueue;
            if (a === null) return null;
            if (a = a.shared, (we & 2) !== 0) {
                var u = a.pending;
                return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = hi(e), uo(e, null, l), t;
            }
            return di(e, a, t, l), hi(e);
        }
        function du(e, t, l) {
            if (t = t.updateQueue, t !== null && (t = t.shared, (l & 4194048) !== 0)) {
                var a = t.lanes;
                a &= e.pendingLanes, l |= a, t.lanes = l, D(e, l);
            }
        }
        function pc(e, t) {
            var l = e.updateQueue, a = e.alternate;
            if (a !== null && (a = a.updateQueue, l === a)) {
                var u = null, r = null;
                if (l = l.firstBaseUpdate, l !== null) {
                    do {
                        var f = {
                            lane: l.lane,
                            tag: l.tag,
                            payload: l.payload,
                            callback: null,
                            next: null
                        };
                        r === null ? u = r = f : r = r.next = f, l = l.next;
                    }while (l !== null);
                    r === null ? u = r = t : r = r.next = t;
                } else u = r = t;
                l = {
                    baseState: a.baseState,
                    firstBaseUpdate: u,
                    lastBaseUpdate: r,
                    shared: a.shared,
                    callbacks: a.callbacks
                }, e.updateQueue = l;
                return;
            }
            e = l.lastBaseUpdate, e === null ? l.firstBaseUpdate = t : e.next = t, l.lastBaseUpdate = t;
        }
        var Sc = !1;
        function hu() {
            if (Sc) {
                var e = Mn;
                if (e !== null) throw e;
            }
        }
        function mu(e, t, l, a) {
            Sc = !1;
            var u = e.updateQueue;
            na = !1;
            var r = u.firstBaseUpdate, f = u.lastBaseUpdate, h = u.shared.pending;
            if (h !== null) {
                u.shared.pending = null;
                var p = h, z = p.next;
                p.next = null, f === null ? r = z : f.next = z, f = p;
                var H = e.alternate;
                H !== null && (H = H.updateQueue, h = H.lastBaseUpdate, h !== f && (h === null ? H.firstBaseUpdate = z : h.next = z, H.lastBaseUpdate = p));
            }
            if (r !== null) {
                var Q = u.baseState;
                f = 0, H = z = p = null, h = r;
                do {
                    var R = h.lane & -536870913, U = R !== h.lane;
                    if (U ? (Ce & R) === R : (a & R) === R) {
                        R !== 0 && R === Tn && (Sc = !0), H !== null && (H = H.next = {
                            lane: 0,
                            tag: h.tag,
                            payload: h.payload,
                            callback: null,
                            next: null
                        });
                        e: {
                            var ee = e, se = h;
                            R = t;
                            var Ke = l;
                            switch(se.tag){
                                case 1:
                                    if (ee = se.payload, typeof ee == "function") {
                                        Q = ee.call(Ke, Q, R);
                                        break e;
                                    }
                                    Q = ee;
                                    break e;
                                case 3:
                                    ee.flags = ee.flags & -65537 | 128;
                                case 0:
                                    if (ee = se.payload, R = typeof ee == "function" ? ee.call(Ke, Q, R) : ee, R == null) break e;
                                    Q = S({}, Q, R);
                                    break e;
                                case 2:
                                    na = !0;
                            }
                        }
                        R = h.callback, R !== null && (e.flags |= 64, U && (e.flags |= 8192), U = u.callbacks, U === null ? u.callbacks = [
                            R
                        ] : U.push(R));
                    } else U = {
                        lane: R,
                        tag: h.tag,
                        payload: h.payload,
                        callback: h.callback,
                        next: null
                    }, H === null ? (z = H = U, p = Q) : H = H.next = U, f |= R;
                    if (h = h.next, h === null) {
                        if (h = u.shared.pending, h === null) break;
                        U = h, h = U.next, U.next = null, u.lastBaseUpdate = U, u.shared.pending = null;
                    }
                }while (!0);
                H === null && (p = Q), u.baseState = p, u.firstBaseUpdate = z, u.lastBaseUpdate = H, r === null && (u.shared.lanes = 0), oa |= f, e.lanes = f, e.memoizedState = Q;
            }
        }
        function Mo(e, t) {
            if (typeof e != "function") throw Error(s(191, e));
            e.call(t);
        }
        function Do(e, t) {
            var l = e.callbacks;
            if (l !== null) for(e.callbacks = null, e = 0; e < l.length; e++)Mo(l[e], t);
        }
        var _n = T(null), Ti = T(0);
        function Oo(e, t) {
            e = Xl, V(Ti, e), V(_n, t), Xl = e | t.baseLanes;
        }
        function bc() {
            V(Ti, Xl), V(_n, _n.current);
        }
        function Ec() {
            Xl = Ti.current, w(_n), w(Ti);
        }
        var Vt = T(null), il = null;
        function ra(e) {
            var t = e.alternate;
            V(ct, ct.current & 1), V(Vt, e), il === null && (t === null || _n.current !== null || t.memoizedState !== null) && (il = e);
        }
        function Ac(e) {
            V(ct, ct.current), V(Vt, e), il === null && (il = e);
        }
        function _o(e) {
            e.tag === 22 ? (V(ct, ct.current), V(Vt, e), il === null && (il = e)) : ca();
        }
        function ca() {
            V(ct, ct.current), V(Vt, Vt.current);
        }
        function Zt(e) {
            w(Vt), il === e && (il = null), w(ct);
        }
        var ct = T(0);
        function Mi(e) {
            for(var t = e; t !== null;){
                if (t.tag === 13) {
                    var l = t.memoizedState;
                    if (l !== null && (l = l.dehydrated, l === null || Cs(l) || zs(l))) return t;
                } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
                    if ((t.flags & 128) !== 0) return t;
                } else if (t.child !== null) {
                    t.child.return = t, t = t.child;
                    continue;
                }
                if (t === e) break;
                for(; t.sibling === null;){
                    if (t.return === null || t.return === e) return null;
                    t = t.return;
                }
                t.sibling.return = t.return, t = t.sibling;
            }
            return null;
        }
        var jl = 0, Se = null, Ve = null, dt = null, Di = !1, Cn = !1, Ka = !1, Oi = 0, yu = 0, zn = null, N0 = 0;
        function ut() {
            throw Error(s(321));
        }
        function Tc(e, t) {
            if (t === null) return !1;
            for(var l = 0; l < t.length && l < e.length; l++)if (!Gt(e[l], t[l])) return !1;
            return !0;
        }
        function Mc(e, t, l, a, u, r) {
            return jl = r, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, B.H = e === null || e.memoizedState === null ? fd : qc, Ka = !1, r = l(a, u), Ka = !1, Cn && (r = zo(t, l, a, u)), Co(e), r;
        }
        function Co(e) {
            B.H = pu;
            var t = Ve !== null && Ve.next !== null;
            if (jl = 0, dt = Ve = Se = null, Di = !1, yu = 0, zn = null, t) throw Error(s(300));
            e === null || ht || (e = e.dependencies, e !== null && vi(e) && (ht = !0));
        }
        function zo(e, t, l, a) {
            Se = e;
            var u = 0;
            do {
                if (Cn && (zn = null), yu = 0, Cn = !1, 25 <= u) throw Error(s(301));
                if (u += 1, dt = Ve = null, e.updateQueue != null) {
                    var r = e.updateQueue;
                    r.lastEffect = null, r.events = null, r.stores = null, r.memoCache != null && (r.memoCache.index = 0);
                }
                B.H = od, r = t(l, a);
            }while (Cn);
            return r;
        }
        function B0() {
            var e = B.H, t = e.useState()[0];
            return t = typeof t.then == "function" ? vu(t) : t, e = e.useState()[0], (Ve !== null ? Ve.memoizedState : null) !== e && (Se.flags |= 1024), t;
        }
        function Dc() {
            var e = Oi !== 0;
            return Oi = 0, e;
        }
        function Oc(e, t, l) {
            t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l;
        }
        function _c(e) {
            if (Di) {
                for(e = e.memoizedState; e !== null;){
                    var t = e.queue;
                    t !== null && (t.pending = null), e = e.next;
                }
                Di = !1;
            }
            jl = 0, dt = Ve = Se = null, Cn = !1, yu = Oi = 0, zn = null;
        }
        function zt() {
            var e = {
                memoizedState: null,
                baseState: null,
                baseQueue: null,
                queue: null,
                next: null
            };
            return dt === null ? Se.memoizedState = dt = e : dt = dt.next = e, dt;
        }
        function st() {
            if (Ve === null) {
                var e = Se.alternate;
                e = e !== null ? e.memoizedState : null;
            } else e = Ve.next;
            var t = dt === null ? Se.memoizedState : dt.next;
            if (t !== null) dt = t, Ve = e;
            else {
                if (e === null) throw Se.alternate === null ? Error(s(467)) : Error(s(310));
                Ve = e, e = {
                    memoizedState: Ve.memoizedState,
                    baseState: Ve.baseState,
                    baseQueue: Ve.baseQueue,
                    queue: Ve.queue,
                    next: null
                }, dt === null ? Se.memoizedState = dt = e : dt = dt.next = e;
            }
            return dt;
        }
        function _i() {
            return {
                lastEffect: null,
                events: null,
                stores: null,
                memoCache: null
            };
        }
        function vu(e) {
            var t = yu;
            return yu += 1, zn === null && (zn = []), e = So(zn, e, t), t = Se, (dt === null ? t.memoizedState : dt.next) === null && (t = t.alternate, B.H = t === null || t.memoizedState === null ? fd : qc), e;
        }
        function Ci(e) {
            if (e !== null && typeof e == "object") {
                if (typeof e.then == "function") return vu(e);
                if (e.$$typeof === ne) return At(e);
            }
            throw Error(s(438, String(e)));
        }
        function Cc(e) {
            var t = null, l = Se.updateQueue;
            if (l !== null && (t = l.memoCache), t == null) {
                var a = Se.alternate;
                a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
                    data: a.data.map(function(u) {
                        return u.slice();
                    }),
                    index: 0
                })));
            }
            if (t == null && (t = {
                data: [],
                index: 0
            }), l === null && (l = _i(), Se.updateQueue = l), l.memoCache = t, l = t.data[t.index], l === void 0) for(l = t.data[t.index] = Array(e), a = 0; a < e; a++)l[a] = he;
            return t.index++, l;
        }
        function Ll(e, t) {
            return typeof t == "function" ? t(e) : t;
        }
        function zi(e) {
            var t = st();
            return zc(t, Ve, e);
        }
        function zc(e, t, l) {
            var a = e.queue;
            if (a === null) throw Error(s(311));
            a.lastRenderedReducer = l;
            var u = e.baseQueue, r = a.pending;
            if (r !== null) {
                if (u !== null) {
                    var f = u.next;
                    u.next = r.next, r.next = f;
                }
                t.baseQueue = u = r, a.pending = null;
            }
            if (r = e.baseState, u === null) e.memoizedState = r;
            else {
                t = u.next;
                var h = f = null, p = null, z = t, H = !1;
                do {
                    var Q = z.lane & -536870913;
                    if (Q !== z.lane ? (Ce & Q) === Q : (jl & Q) === Q) {
                        var R = z.revertLane;
                        if (R === 0) p !== null && (p = p.next = {
                            lane: 0,
                            revertLane: 0,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }), Q === Tn && (H = !0);
                        else if ((jl & R) === R) {
                            z = z.next, R === Tn && (H = !0);
                            continue;
                        } else Q = {
                            lane: 0,
                            revertLane: z.revertLane,
                            gesture: null,
                            action: z.action,
                            hasEagerState: z.hasEagerState,
                            eagerState: z.eagerState,
                            next: null
                        }, p === null ? (h = p = Q, f = r) : p = p.next = Q, Se.lanes |= R, oa |= R;
                        Q = z.action, Ka && l(r, Q), r = z.hasEagerState ? z.eagerState : l(r, Q);
                    } else R = {
                        lane: Q,
                        revertLane: z.revertLane,
                        gesture: z.gesture,
                        action: z.action,
                        hasEagerState: z.hasEagerState,
                        eagerState: z.eagerState,
                        next: null
                    }, p === null ? (h = p = R, f = r) : p = p.next = R, Se.lanes |= Q, oa |= Q;
                    z = z.next;
                }while (z !== null && z !== t);
                if (p === null ? f = r : p.next = h, !Gt(r, e.memoizedState) && (ht = !0, H && (l = Mn, l !== null))) throw l;
                e.memoizedState = r, e.baseState = f, e.baseQueue = p, a.lastRenderedState = r;
            }
            return u === null && (a.lanes = 0), [
                e.memoizedState,
                a.dispatch
            ];
        }
        function Rc(e) {
            var t = st(), l = t.queue;
            if (l === null) throw Error(s(311));
            l.lastRenderedReducer = e;
            var a = l.dispatch, u = l.pending, r = t.memoizedState;
            if (u !== null) {
                l.pending = null;
                var f = u = u.next;
                do r = e(r, f.action), f = f.next;
                while (f !== u);
                Gt(r, t.memoizedState) || (ht = !0), t.memoizedState = r, t.baseQueue === null && (t.baseState = r), l.lastRenderedState = r;
            }
            return [
                r,
                a
            ];
        }
        function Ro(e, t, l) {
            var a = Se, u = st(), r = xe;
            if (r) {
                if (l === void 0) throw Error(s(407));
                l = l();
            } else l = t();
            var f = !Gt((Ve || u).memoizedState, l);
            if (f && (u.memoizedState = l, ht = !0), u = u.queue, Nc(No.bind(null, a, u, e), [
                e
            ]), u.getSnapshot !== t || f || dt !== null && dt.memoizedState.tag & 1) {
                if (a.flags |= 2048, Rn(9, {
                    destroy: void 0
                }, Uo.bind(null, a, u, l, t), null), Je === null) throw Error(s(349));
                r || (jl & 127) !== 0 || xo(a, t, l);
            }
            return l;
        }
        function xo(e, t, l) {
            e.flags |= 16384, e = {
                getSnapshot: t,
                value: l
            }, t = Se.updateQueue, t === null ? (t = _i(), Se.updateQueue = t, t.stores = [
                e
            ]) : (l = t.stores, l === null ? t.stores = [
                e
            ] : l.push(e));
        }
        function Uo(e, t, l, a) {
            t.value = l, t.getSnapshot = a, Bo(t) && jo(e);
        }
        function No(e, t, l) {
            return l(function() {
                Bo(t) && jo(e);
            });
        }
        function Bo(e) {
            var t = e.getSnapshot;
            e = e.value;
            try {
                var l = t();
                return !Gt(e, l);
            } catch  {
                return !0;
            }
        }
        function jo(e) {
            var t = Ha(e, 2);
            t !== null && wt(t, e, 2);
        }
        function xc(e) {
            var t = zt();
            if (typeof e == "function") {
                var l = e;
                if (e = l(), Ka) {
                    ol(!0);
                    try {
                        l();
                    } finally{
                        ol(!1);
                    }
                }
            }
            return t.memoizedState = t.baseState = e, t.queue = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Ll,
                lastRenderedState: e
            }, t;
        }
        function Lo(e, t, l, a) {
            return e.baseState = l, zc(e, Ve, typeof a == "function" ? a : Ll);
        }
        function j0(e, t, l, a, u) {
            if (Ui(e)) throw Error(s(485));
            if (e = t.action, e !== null) {
                var r = {
                    payload: u,
                    action: e,
                    next: null,
                    isTransition: !0,
                    status: "pending",
                    value: null,
                    reason: null,
                    listeners: [],
                    then: function(f) {
                        r.listeners.push(f);
                    }
                };
                B.T !== null ? l(!0) : r.isTransition = !1, a(r), l = t.pending, l === null ? (r.next = t.pending = r, Ho(t, r)) : (r.next = l.next, t.pending = l.next = r);
            }
        }
        function Ho(e, t) {
            var l = t.action, a = t.payload, u = e.state;
            if (t.isTransition) {
                var r = B.T, f = {};
                B.T = f;
                try {
                    var h = l(u, a), p = B.S;
                    p !== null && p(f, h), wo(e, t, h);
                } catch (z) {
                    Uc(e, t, z);
                } finally{
                    r !== null && f.types !== null && (r.types = f.types), B.T = r;
                }
            } else try {
                r = l(u, a), wo(e, t, r);
            } catch (z) {
                Uc(e, t, z);
            }
        }
        function wo(e, t, l) {
            l !== null && typeof l == "object" && typeof l.then == "function" ? l.then(function(a) {
                qo(e, t, a);
            }, function(a) {
                return Uc(e, t, a);
            }) : qo(e, t, l);
        }
        function qo(e, t, l) {
            t.status = "fulfilled", t.value = l, Qo(t), e.state = l, t = e.pending, t !== null && (l = t.next, l === t ? e.pending = null : (l = l.next, t.next = l, Ho(e, l)));
        }
        function Uc(e, t, l) {
            var a = e.pending;
            if (e.pending = null, a !== null) {
                a = a.next;
                do t.status = "rejected", t.reason = l, Qo(t), t = t.next;
                while (t !== a);
            }
            e.action = null;
        }
        function Qo(e) {
            e = e.listeners;
            for(var t = 0; t < e.length; t++)(0, e[t])();
        }
        function Yo(e, t) {
            return t;
        }
        function Go(e, t) {
            if (xe) {
                var l = Je.formState;
                if (l !== null) {
                    e: {
                        var a = Se;
                        if (xe) {
                            if (Pe) {
                                t: {
                                    for(var u = Pe, r = ul; u.nodeType !== 8;){
                                        if (!r) {
                                            u = null;
                                            break t;
                                        }
                                        if (u = rl(u.nextSibling), u === null) {
                                            u = null;
                                            break t;
                                        }
                                    }
                                    r = u.data, u = r === "F!" || r === "F" ? u : null;
                                }
                                if (u) {
                                    Pe = rl(u.nextSibling), a = u.data === "F!";
                                    break e;
                                }
                            }
                            la(a);
                        }
                        a = !1;
                    }
                    a && (t = l[0]);
                }
            }
            return l = zt(), l.memoizedState = l.baseState = t, a = {
                pending: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: Yo,
                lastRenderedState: t
            }, l.queue = a, l = rd.bind(null, Se, a), a.dispatch = l, a = xc(!1), r = wc.bind(null, Se, !1, a.queue), a = zt(), u = {
                state: t,
                dispatch: null,
                action: e,
                pending: null
            }, a.queue = u, l = j0.bind(null, Se, u, r, l), u.dispatch = l, a.memoizedState = e, [
                t,
                l,
                !1
            ];
        }
        function Xo(e) {
            var t = st();
            return Vo(t, Ve, e);
        }
        function Vo(e, t, l) {
            if (t = zc(e, t, Yo)[0], e = zi(Ll)[0], typeof t == "object" && t !== null && typeof t.then == "function") try {
                var a = vu(t);
            } catch (f) {
                throw f === Dn ? Si : f;
            }
            else a = t;
            t = st();
            var u = t.queue, r = u.dispatch;
            return l !== t.memoizedState && (Se.flags |= 2048, Rn(9, {
                destroy: void 0
            }, L0.bind(null, u, l), null)), [
                a,
                r,
                e
            ];
        }
        function L0(e, t) {
            e.action = t;
        }
        function Zo(e) {
            var t = st(), l = Ve;
            if (l !== null) return Vo(t, l, e);
            st(), t = t.memoizedState, l = st();
            var a = l.queue.dispatch;
            return l.memoizedState = e, [
                t,
                a,
                !1
            ];
        }
        function Rn(e, t, l, a) {
            return e = {
                tag: e,
                create: l,
                deps: a,
                inst: t,
                next: null
            }, t = Se.updateQueue, t === null && (t = _i(), Se.updateQueue = t), l = t.lastEffect, l === null ? t.lastEffect = e.next = e : (a = l.next, l.next = e, e.next = a, t.lastEffect = e), e;
        }
        function Ko() {
            return st().memoizedState;
        }
        function Ri(e, t, l, a) {
            var u = zt();
            Se.flags |= e, u.memoizedState = Rn(1 | t, {
                destroy: void 0
            }, l, a === void 0 ? null : a);
        }
        function xi(e, t, l, a) {
            var u = st();
            a = a === void 0 ? null : a;
            var r = u.memoizedState.inst;
            Ve !== null && a !== null && Tc(a, Ve.memoizedState.deps) ? u.memoizedState = Rn(t, r, l, a) : (Se.flags |= e, u.memoizedState = Rn(1 | t, r, l, a));
        }
        function Jo(e, t) {
            Ri(8390656, 8, e, t);
        }
        function Nc(e, t) {
            xi(2048, 8, e, t);
        }
        function H0(e) {
            Se.flags |= 4;
            var t = Se.updateQueue;
            if (t === null) t = _i(), Se.updateQueue = t, t.events = [
                e
            ];
            else {
                var l = t.events;
                l === null ? t.events = [
                    e
                ] : l.push(e);
            }
        }
        function Fo(e) {
            var t = st().memoizedState;
            return H0({
                ref: t,
                nextImpl: e
            }), function() {
                if ((we & 2) !== 0) throw Error(s(440));
                return t.impl.apply(void 0, arguments);
            };
        }
        function Wo(e, t) {
            return xi(4, 2, e, t);
        }
        function $o(e, t) {
            return xi(4, 4, e, t);
        }
        function ko(e, t) {
            if (typeof t == "function") {
                e = e();
                var l = t(e);
                return function() {
                    typeof l == "function" ? l() : t(null);
                };
            }
            if (t != null) return e = e(), t.current = e, function() {
                t.current = null;
            };
        }
        function Po(e, t, l) {
            l = l != null ? l.concat([
                e
            ]) : null, xi(4, 4, ko.bind(null, t, e), l);
        }
        function Bc() {}
        function Io(e, t) {
            var l = st();
            t = t === void 0 ? null : t;
            var a = l.memoizedState;
            return t !== null && Tc(t, a[1]) ? a[0] : (l.memoizedState = [
                e,
                t
            ], e);
        }
        function ed(e, t) {
            var l = st();
            t = t === void 0 ? null : t;
            var a = l.memoizedState;
            if (t !== null && Tc(t, a[1])) return a[0];
            if (a = e(), Ka) {
                ol(!0);
                try {
                    e();
                } finally{
                    ol(!1);
                }
            }
            return l.memoizedState = [
                a,
                t
            ], a;
        }
        function jc(e, t, l) {
            return l === void 0 || (jl & 1073741824) !== 0 && (Ce & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = l, e = th(), Se.lanes |= e, oa |= e, l);
        }
        function td(e, t, l, a) {
            return Gt(l, t) ? l : _n.current !== null ? (e = jc(e, l, a), Gt(e, t) || (ht = !0), e) : (jl & 42) === 0 || (jl & 1073741824) !== 0 && (Ce & 261930) === 0 ? (ht = !0, e.memoizedState = l) : (e = th(), Se.lanes |= e, oa |= e, t);
        }
        function ld(e, t, l, a, u) {
            var r = Z.p;
            Z.p = r !== 0 && 8 > r ? r : 8;
            var f = B.T, h = {};
            B.T = h, wc(e, !1, t, l);
            try {
                var p = u(), z = B.S;
                if (z !== null && z(h, p), p !== null && typeof p == "object" && typeof p.then == "function") {
                    var H = U0(p, a);
                    gu(e, t, H, Ft(e));
                } else gu(e, t, a, Ft(e));
            } catch (Q) {
                gu(e, t, {
                    then: function() {},
                    status: "rejected",
                    reason: Q
                }, Ft());
            } finally{
                Z.p = r, f !== null && h.types !== null && (f.types = h.types), B.T = f;
            }
        }
        function w0() {}
        function Lc(e, t, l, a) {
            if (e.tag !== 5) throw Error(s(476));
            var u = ad(e).queue;
            ld(e, u, t, P, l === null ? w0 : function() {
                return nd(e), l(a);
            });
        }
        function ad(e) {
            var t = e.memoizedState;
            if (t !== null) return t;
            t = {
                memoizedState: P,
                baseState: P,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ll,
                    lastRenderedState: P
                },
                next: null
            };
            var l = {};
            return t.next = {
                memoizedState: l,
                baseState: l,
                baseQueue: null,
                queue: {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: Ll,
                    lastRenderedState: l
                },
                next: null
            }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
        }
        function nd(e) {
            var t = ad(e);
            t.next === null && (t = e.alternate.memoizedState), gu(e, t.next.queue, {}, Ft());
        }
        function Hc() {
            return At(Bu);
        }
        function ud() {
            return st().memoizedState;
        }
        function id() {
            return st().memoizedState;
        }
        function q0(e) {
            for(var t = e.return; t !== null;){
                switch(t.tag){
                    case 24:
                    case 3:
                        var l = Ft();
                        e = ua(l);
                        var a = ia(t, e, l);
                        a !== null && (wt(a, t, l), du(a, t, l)), t = {
                            cache: dc()
                        }, e.payload = t;
                        return;
                }
                t = t.return;
            }
        }
        function Q0(e, t, l) {
            var a = Ft();
            l = {
                lane: a,
                revertLane: 0,
                gesture: null,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ui(e) ? cd(t, l) : (l = tc(e, t, l, a), l !== null && (wt(l, e, a), sd(l, t, a)));
        }
        function rd(e, t, l) {
            var a = Ft();
            gu(e, t, l, a);
        }
        function gu(e, t, l, a) {
            var u = {
                lane: a,
                revertLane: 0,
                gesture: null,
                action: l,
                hasEagerState: !1,
                eagerState: null,
                next: null
            };
            if (Ui(e)) cd(t, u);
            else {
                var r = e.alternate;
                if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = t.lastRenderedReducer, r !== null)) try {
                    var f = t.lastRenderedState, h = r(f, l);
                    if (u.hasEagerState = !0, u.eagerState = h, Gt(h, f)) return di(e, t, u, 0), Je === null && oi(), !1;
                } catch  {} finally{}
                if (l = tc(e, t, u, a), l !== null) return wt(l, e, a), sd(l, t, a), !0;
            }
            return !1;
        }
        function wc(e, t, l, a) {
            if (a = {
                lane: 2,
                revertLane: vs(),
                gesture: null,
                action: a,
                hasEagerState: !1,
                eagerState: null,
                next: null
            }, Ui(e)) {
                if (t) throw Error(s(479));
            } else t = tc(e, l, a, 2), t !== null && wt(t, e, 2);
        }
        function Ui(e) {
            var t = e.alternate;
            return e === Se || t !== null && t === Se;
        }
        function cd(e, t) {
            Cn = Di = !0;
            var l = e.pending;
            l === null ? t.next = t : (t.next = l.next, l.next = t), e.pending = t;
        }
        function sd(e, t, l) {
            if ((l & 4194048) !== 0) {
                var a = t.lanes;
                a &= e.pendingLanes, l |= a, t.lanes = l, D(e, l);
            }
        }
        var pu = {
            readContext: At,
            use: Ci,
            useCallback: ut,
            useContext: ut,
            useEffect: ut,
            useImperativeHandle: ut,
            useLayoutEffect: ut,
            useInsertionEffect: ut,
            useMemo: ut,
            useReducer: ut,
            useRef: ut,
            useState: ut,
            useDebugValue: ut,
            useDeferredValue: ut,
            useTransition: ut,
            useSyncExternalStore: ut,
            useId: ut,
            useHostTransitionStatus: ut,
            useFormState: ut,
            useActionState: ut,
            useOptimistic: ut,
            useMemoCache: ut,
            useCacheRefresh: ut
        };
        pu.useEffectEvent = ut;
        var fd = {
            readContext: At,
            use: Ci,
            useCallback: function(e, t) {
                return zt().memoizedState = [
                    e,
                    t === void 0 ? null : t
                ], e;
            },
            useContext: At,
            useEffect: Jo,
            useImperativeHandle: function(e, t, l) {
                l = l != null ? l.concat([
                    e
                ]) : null, Ri(4194308, 4, ko.bind(null, t, e), l);
            },
            useLayoutEffect: function(e, t) {
                return Ri(4194308, 4, e, t);
            },
            useInsertionEffect: function(e, t) {
                Ri(4, 2, e, t);
            },
            useMemo: function(e, t) {
                var l = zt();
                t = t === void 0 ? null : t;
                var a = e();
                if (Ka) {
                    ol(!0);
                    try {
                        e();
                    } finally{
                        ol(!1);
                    }
                }
                return l.memoizedState = [
                    a,
                    t
                ], a;
            },
            useReducer: function(e, t, l) {
                var a = zt();
                if (l !== void 0) {
                    var u = l(t);
                    if (Ka) {
                        ol(!0);
                        try {
                            l(t);
                        } finally{
                            ol(!1);
                        }
                    }
                } else u = t;
                return a.memoizedState = a.baseState = u, e = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: u
                }, a.queue = e, e = e.dispatch = Q0.bind(null, Se, e), [
                    a.memoizedState,
                    e
                ];
            },
            useRef: function(e) {
                var t = zt();
                return e = {
                    current: e
                }, t.memoizedState = e;
            },
            useState: function(e) {
                e = xc(e);
                var t = e.queue, l = rd.bind(null, Se, t);
                return t.dispatch = l, [
                    e.memoizedState,
                    l
                ];
            },
            useDebugValue: Bc,
            useDeferredValue: function(e, t) {
                var l = zt();
                return jc(l, e, t);
            },
            useTransition: function() {
                var e = xc(!1);
                return e = ld.bind(null, Se, e.queue, !0, !1), zt().memoizedState = e, [
                    !1,
                    e
                ];
            },
            useSyncExternalStore: function(e, t, l) {
                var a = Se, u = zt();
                if (xe) {
                    if (l === void 0) throw Error(s(407));
                    l = l();
                } else {
                    if (l = t(), Je === null) throw Error(s(349));
                    (Ce & 127) !== 0 || xo(a, t, l);
                }
                u.memoizedState = l;
                var r = {
                    value: l,
                    getSnapshot: t
                };
                return u.queue = r, Jo(No.bind(null, a, r, e), [
                    e
                ]), a.flags |= 2048, Rn(9, {
                    destroy: void 0
                }, Uo.bind(null, a, r, l, t), null), l;
            },
            useId: function() {
                var e = zt(), t = Je.identifierPrefix;
                if (xe) {
                    var l = Al, a = El;
                    l = (a & ~(1 << 32 - Ot(a) - 1)).toString(32) + l, t = "_" + t + "R_" + l, l = Oi++, 0 < l && (t += "H" + l.toString(32)), t += "_";
                } else l = N0++, t = "_" + t + "r_" + l.toString(32) + "_";
                return e.memoizedState = t;
            },
            useHostTransitionStatus: Hc,
            useFormState: Go,
            useActionState: Go,
            useOptimistic: function(e) {
                var t = zt();
                t.memoizedState = t.baseState = e;
                var l = {
                    pending: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: null,
                    lastRenderedState: null
                };
                return t.queue = l, t = wc.bind(null, Se, !0, l), l.dispatch = t, [
                    e,
                    t
                ];
            },
            useMemoCache: Cc,
            useCacheRefresh: function() {
                return zt().memoizedState = q0.bind(null, Se);
            },
            useEffectEvent: function(e) {
                var t = zt(), l = {
                    impl: e
                };
                return t.memoizedState = l, function() {
                    if ((we & 2) !== 0) throw Error(s(440));
                    return l.impl.apply(void 0, arguments);
                };
            }
        }, qc = {
            readContext: At,
            use: Ci,
            useCallback: Io,
            useContext: At,
            useEffect: Nc,
            useImperativeHandle: Po,
            useInsertionEffect: Wo,
            useLayoutEffect: $o,
            useMemo: ed,
            useReducer: zi,
            useRef: Ko,
            useState: function() {
                return zi(Ll);
            },
            useDebugValue: Bc,
            useDeferredValue: function(e, t) {
                var l = st();
                return td(l, Ve.memoizedState, e, t);
            },
            useTransition: function() {
                var e = zi(Ll)[0], t = st().memoizedState;
                return [
                    typeof e == "boolean" ? e : vu(e),
                    t
                ];
            },
            useSyncExternalStore: Ro,
            useId: ud,
            useHostTransitionStatus: Hc,
            useFormState: Xo,
            useActionState: Xo,
            useOptimistic: function(e, t) {
                var l = st();
                return Lo(l, Ve, e, t);
            },
            useMemoCache: Cc,
            useCacheRefresh: id
        };
        qc.useEffectEvent = Fo;
        var od = {
            readContext: At,
            use: Ci,
            useCallback: Io,
            useContext: At,
            useEffect: Nc,
            useImperativeHandle: Po,
            useInsertionEffect: Wo,
            useLayoutEffect: $o,
            useMemo: ed,
            useReducer: Rc,
            useRef: Ko,
            useState: function() {
                return Rc(Ll);
            },
            useDebugValue: Bc,
            useDeferredValue: function(e, t) {
                var l = st();
                return Ve === null ? jc(l, e, t) : td(l, Ve.memoizedState, e, t);
            },
            useTransition: function() {
                var e = Rc(Ll)[0], t = st().memoizedState;
                return [
                    typeof e == "boolean" ? e : vu(e),
                    t
                ];
            },
            useSyncExternalStore: Ro,
            useId: ud,
            useHostTransitionStatus: Hc,
            useFormState: Zo,
            useActionState: Zo,
            useOptimistic: function(e, t) {
                var l = st();
                return Ve !== null ? Lo(l, Ve, e, t) : (l.baseState = e, [
                    e,
                    l.queue.dispatch
                ]);
            },
            useMemoCache: Cc,
            useCacheRefresh: id
        };
        od.useEffectEvent = Fo;
        function Qc(e, t, l, a) {
            t = e.memoizedState, l = l(a, t), l = l == null ? t : S({}, t, l), e.memoizedState = l, e.lanes === 0 && (e.updateQueue.baseState = l);
        }
        var Yc = {
            enqueueSetState: function(e, t, l) {
                e = e._reactInternals;
                var a = Ft(), u = ua(a);
                u.payload = t, l != null && (u.callback = l), t = ia(e, u, a), t !== null && (wt(t, e, a), du(t, e, a));
            },
            enqueueReplaceState: function(e, t, l) {
                e = e._reactInternals;
                var a = Ft(), u = ua(a);
                u.tag = 1, u.payload = t, l != null && (u.callback = l), t = ia(e, u, a), t !== null && (wt(t, e, a), du(t, e, a));
            },
            enqueueForceUpdate: function(e, t) {
                e = e._reactInternals;
                var l = Ft(), a = ua(l);
                a.tag = 2, t != null && (a.callback = t), t = ia(e, a, l), t !== null && (wt(t, e, l), du(t, e, l));
            }
        };
        function dd(e, t, l, a, u, r, f) {
            return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, r, f) : t.prototype && t.prototype.isPureReactComponent ? !nu(l, a) || !nu(u, r) : !0;
        }
        function hd(e, t, l, a) {
            e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(l, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(l, a), t.state !== e && Yc.enqueueReplaceState(t, t.state, null);
        }
        function Ja(e, t) {
            var l = t;
            if ("ref" in t) {
                l = {};
                for(var a in t)a !== "ref" && (l[a] = t[a]);
            }
            if (e = e.defaultProps) {
                l === t && (l = S({}, l));
                for(var u in e)l[u] === void 0 && (l[u] = e[u]);
            }
            return l;
        }
        function md(e) {
            fi(e);
        }
        function yd(e) {
            console.error(e);
        }
        function vd(e) {
            fi(e);
        }
        function Ni(e, t) {
            try {
                var l = e.onUncaughtError;
                l(t.value, {
                    componentStack: t.stack
                });
            } catch (a) {
                setTimeout(function() {
                    throw a;
                });
            }
        }
        function gd(e, t, l) {
            try {
                var a = e.onCaughtError;
                a(l.value, {
                    componentStack: l.stack,
                    errorBoundary: t.tag === 1 ? t.stateNode : null
                });
            } catch (u) {
                setTimeout(function() {
                    throw u;
                });
            }
        }
        function Gc(e, t, l) {
            return l = ua(l), l.tag = 3, l.payload = {
                element: null
            }, l.callback = function() {
                Ni(e, t);
            }, l;
        }
        function pd(e) {
            return e = ua(e), e.tag = 3, e;
        }
        function Sd(e, t, l, a) {
            var u = l.type.getDerivedStateFromError;
            if (typeof u == "function") {
                var r = a.value;
                e.payload = function() {
                    return u(r);
                }, e.callback = function() {
                    gd(t, l, a);
                };
            }
            var f = l.stateNode;
            f !== null && typeof f.componentDidCatch == "function" && (e.callback = function() {
                gd(t, l, a), typeof u != "function" && (da === null ? da = new Set([
                    this
                ]) : da.add(this));
                var h = a.stack;
                this.componentDidCatch(a.value, {
                    componentStack: h !== null ? h : ""
                });
            });
        }
        function Y0(e, t, l, a, u) {
            if (l.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
                if (t = l.alternate, t !== null && An(t, l, u, !0), l = Vt.current, l !== null) {
                    switch(l.tag){
                        case 31:
                        case 13:
                            return il === null ? Zi() : l.alternate === null && it === 0 && (it = 3), l.flags &= -257, l.flags |= 65536, l.lanes = u, a === bi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? l.updateQueue = new Set([
                                a
                            ]) : t.add(a), hs(e, a, u)), !1;
                        case 22:
                            return l.flags |= 65536, a === bi ? l.flags |= 16384 : (t = l.updateQueue, t === null ? (t = {
                                transitions: null,
                                markerInstances: null,
                                retryQueue: new Set([
                                    a
                                ])
                            }, l.updateQueue = t) : (l = t.retryQueue, l === null ? t.retryQueue = new Set([
                                a
                            ]) : l.add(a)), hs(e, a, u)), !1;
                    }
                    throw Error(s(435, l.tag));
                }
                return hs(e, a, u), Zi(), !1;
            }
            if (xe) return t = Vt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== rc && (e = Error(s(422), {
                cause: a
            }), ru(ll(e, l)))) : (a !== rc && (t = Error(s(423), {
                cause: a
            }), ru(ll(t, l))), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, a = ll(a, l), u = Gc(e.stateNode, a, u), pc(e, u), it !== 4 && (it = 2)), !1;
            var r = Error(s(520), {
                cause: a
            });
            if (r = ll(r, l), Ou === null ? Ou = [
                r
            ] : Ou.push(r), it !== 4 && (it = 2), t === null) return !0;
            a = ll(a, l), l = t;
            do {
                switch(l.tag){
                    case 3:
                        return l.flags |= 65536, e = u & -u, l.lanes |= e, e = Gc(l.stateNode, a, e), pc(l, e), !1;
                    case 1:
                        if (t = l.type, r = l.stateNode, (l.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || r !== null && typeof r.componentDidCatch == "function" && (da === null || !da.has(r)))) return l.flags |= 65536, u &= -u, l.lanes |= u, u = pd(u), Sd(u, e, l, a), pc(l, u), !1;
                }
                l = l.return;
            }while (l !== null);
            return !1;
        }
        var Xc = Error(s(461)), ht = !1;
        function Tt(e, t, l, a) {
            t.child = e === null ? To(t, null, l, a) : Za(t, e.child, l, a);
        }
        function bd(e, t, l, a, u) {
            l = l.render;
            var r = t.ref;
            if ("ref" in a) {
                var f = {};
                for(var h in a)h !== "ref" && (f[h] = a[h]);
            } else f = a;
            return Ya(t), a = Mc(e, t, l, f, r, u), h = Dc(), e !== null && !ht ? (Oc(e, t, u), Hl(e, t, u)) : (xe && h && uc(t), t.flags |= 1, Tt(e, t, a, u), t.child);
        }
        function Ed(e, t, l, a, u) {
            if (e === null) {
                var r = l.type;
                return typeof r == "function" && !lc(r) && r.defaultProps === void 0 && l.compare === null ? (t.tag = 15, t.type = r, Ad(e, t, r, a, u)) : (e = mi(l.type, null, a, t, t.mode, u), e.ref = t.ref, e.return = t, t.child = e);
            }
            if (r = e.child, !kc(e, u)) {
                var f = r.memoizedProps;
                if (l = l.compare, l = l !== null ? l : nu, l(f, a) && e.ref === t.ref) return Hl(e, t, u);
            }
            return t.flags |= 1, e = xl(r, a), e.ref = t.ref, e.return = t, t.child = e;
        }
        function Ad(e, t, l, a, u) {
            if (e !== null) {
                var r = e.memoizedProps;
                if (nu(r, a) && e.ref === t.ref) if (ht = !1, t.pendingProps = a = r, kc(e, u)) (e.flags & 131072) !== 0 && (ht = !0);
                else return t.lanes = e.lanes, Hl(e, t, u);
            }
            return Vc(e, t, l, a, u);
        }
        function Td(e, t, l, a) {
            var u = a.children, r = e !== null ? e.memoizedState : null;
            if (e === null && t.stateNode === null && (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), a.mode === "hidden") {
                if ((t.flags & 128) !== 0) {
                    if (r = r !== null ? r.baseLanes | l : l, e !== null) {
                        for(a = t.child = e.child, u = 0; a !== null;)u = u | a.lanes | a.childLanes, a = a.sibling;
                        a = u & ~r;
                    } else a = 0, t.child = null;
                    return Md(e, t, r, l, a);
                }
                if ((l & 536870912) !== 0) t.memoizedState = {
                    baseLanes: 0,
                    cachePool: null
                }, e !== null && pi(t, r !== null ? r.cachePool : null), r !== null ? Oo(t, r) : bc(), _o(t);
                else return a = t.lanes = 536870912, Md(e, t, r !== null ? r.baseLanes | l : l, l, a);
            } else r !== null ? (pi(t, r.cachePool), Oo(t, r), ca(), t.memoizedState = null) : (e !== null && pi(t, null), bc(), ca());
            return Tt(e, t, u, l), t.child;
        }
        function Su(e, t) {
            return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
                _visibility: 1,
                _pendingMarkers: null,
                _retryCache: null,
                _transitions: null
            }), t.sibling;
        }
        function Md(e, t, l, a, u) {
            var r = mc();
            return r = r === null ? null : {
                parent: ot._currentValue,
                pool: r
            }, t.memoizedState = {
                baseLanes: l,
                cachePool: r
            }, e !== null && pi(t, null), bc(), _o(t), e !== null && An(e, t, a, !0), t.childLanes = u, null;
        }
        function Bi(e, t) {
            return t = Li({
                mode: t.mode,
                children: t.children
            }, e.mode), t.ref = e.ref, e.child = t, t.return = e, t;
        }
        function Dd(e, t, l) {
            return Za(t, e.child, null, l), e = Bi(t, t.pendingProps), e.flags |= 2, Zt(t), t.memoizedState = null, e;
        }
        function G0(e, t, l) {
            var a = t.pendingProps, u = (t.flags & 128) !== 0;
            if (t.flags &= -129, e === null) {
                if (xe) {
                    if (a.mode === "hidden") return e = Bi(t, a), t.lanes = 536870912, Su(null, e);
                    if (Ac(t), (e = Pe) ? (e = Hh(e, ul), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: ea !== null ? {
                            id: El,
                            overflow: Al
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, l = ro(e), l.return = t, t.child = l, Et = t, Pe = null)) : e = null, e === null) throw la(t);
                    return t.lanes = 536870912, null;
                }
                return Bi(t, a);
            }
            var r = e.memoizedState;
            if (r !== null) {
                var f = r.dehydrated;
                if (Ac(t), u) if (t.flags & 256) t.flags &= -257, t = Dd(e, t, l);
                else if (t.memoizedState !== null) t.child = e.child, t.flags |= 128, t = null;
                else throw Error(s(558));
                else if (ht || An(e, t, l, !1), u = (l & e.childLanes) !== 0, ht || u) {
                    if (a = Je, a !== null && (f = x(a, l), f !== 0 && f !== r.retryLane)) throw r.retryLane = f, Ha(e, f), wt(a, e, f), Xc;
                    Zi(), t = Dd(e, t, l);
                } else e = r.treeContext, Pe = rl(f.nextSibling), Et = t, xe = !0, ta = null, ul = !1, e !== null && fo(t, e), t = Bi(t, a), t.flags |= 4096;
                return t;
            }
            return e = xl(e.child, {
                mode: a.mode,
                children: a.children
            }), e.ref = t.ref, t.child = e, e.return = t, e;
        }
        function ji(e, t) {
            var l = t.ref;
            if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
            else {
                if (typeof l != "function" && typeof l != "object") throw Error(s(284));
                (e === null || e.ref !== l) && (t.flags |= 4194816);
            }
        }
        function Vc(e, t, l, a, u) {
            return Ya(t), l = Mc(e, t, l, a, void 0, u), a = Dc(), e !== null && !ht ? (Oc(e, t, u), Hl(e, t, u)) : (xe && a && uc(t), t.flags |= 1, Tt(e, t, l, u), t.child);
        }
        function Od(e, t, l, a, u, r) {
            return Ya(t), t.updateQueue = null, l = zo(t, a, l, u), Co(e), a = Dc(), e !== null && !ht ? (Oc(e, t, r), Hl(e, t, r)) : (xe && a && uc(t), t.flags |= 1, Tt(e, t, l, r), t.child);
        }
        function _d(e, t, l, a, u) {
            if (Ya(t), t.stateNode === null) {
                var r = pn, f = l.contextType;
                typeof f == "object" && f !== null && (r = At(f)), r = new l(a, r), t.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Yc, t.stateNode = r, r._reactInternals = t, r = t.stateNode, r.props = a, r.state = t.memoizedState, r.refs = {}, vc(t), f = l.contextType, r.context = typeof f == "object" && f !== null ? At(f) : pn, r.state = t.memoizedState, f = l.getDerivedStateFromProps, typeof f == "function" && (Qc(t, l, f, a), r.state = t.memoizedState), typeof l.getDerivedStateFromProps == "function" || typeof r.getSnapshotBeforeUpdate == "function" || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (f = r.state, typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount(), f !== r.state && Yc.enqueueReplaceState(r, r.state, null), mu(t, a, r, u), hu(), r.state = t.memoizedState), typeof r.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
            } else if (e === null) {
                r = t.stateNode;
                var h = t.memoizedProps, p = Ja(l, h);
                r.props = p;
                var z = r.context, H = l.contextType;
                f = pn, typeof H == "object" && H !== null && (f = At(H));
                var Q = l.getDerivedStateFromProps;
                H = typeof Q == "function" || typeof r.getSnapshotBeforeUpdate == "function", h = t.pendingProps !== h, H || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (h || z !== f) && hd(t, r, a, f), na = !1;
                var R = t.memoizedState;
                r.state = R, mu(t, a, r, u), hu(), z = t.memoizedState, h || R !== z || na ? (typeof Q == "function" && (Qc(t, l, Q, a), z = t.memoizedState), (p = na || dd(t, l, p, a, R, z, f)) ? (H || typeof r.UNSAFE_componentWillMount != "function" && typeof r.componentWillMount != "function" || (typeof r.componentWillMount == "function" && r.componentWillMount(), typeof r.UNSAFE_componentWillMount == "function" && r.UNSAFE_componentWillMount()), typeof r.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = z), r.props = a, r.state = z, r.context = f, a = p) : (typeof r.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
            } else {
                r = t.stateNode, gc(e, t), f = t.memoizedProps, H = Ja(l, f), r.props = H, Q = t.pendingProps, R = r.context, z = l.contextType, p = pn, typeof z == "object" && z !== null && (p = At(z)), h = l.getDerivedStateFromProps, (z = typeof h == "function" || typeof r.getSnapshotBeforeUpdate == "function") || typeof r.UNSAFE_componentWillReceiveProps != "function" && typeof r.componentWillReceiveProps != "function" || (f !== Q || R !== p) && hd(t, r, a, p), na = !1, R = t.memoizedState, r.state = R, mu(t, a, r, u), hu();
                var U = t.memoizedState;
                f !== Q || R !== U || na || e !== null && e.dependencies !== null && vi(e.dependencies) ? (typeof h == "function" && (Qc(t, l, h, a), U = t.memoizedState), (H = na || dd(t, l, H, a, R, U, p) || e !== null && e.dependencies !== null && vi(e.dependencies)) ? (z || typeof r.UNSAFE_componentWillUpdate != "function" && typeof r.componentWillUpdate != "function" || (typeof r.componentWillUpdate == "function" && r.componentWillUpdate(a, U, p), typeof r.UNSAFE_componentWillUpdate == "function" && r.UNSAFE_componentWillUpdate(a, U, p)), typeof r.componentDidUpdate == "function" && (t.flags |= 4), typeof r.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), r.props = a, r.state = U, r.context = p, a = H) : (typeof r.componentDidUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 4), typeof r.getSnapshotBeforeUpdate != "function" || f === e.memoizedProps && R === e.memoizedState || (t.flags |= 1024), a = !1);
            }
            return r = a, ji(e, t), a = (t.flags & 128) !== 0, r || a ? (r = t.stateNode, l = a && typeof l.getDerivedStateFromError != "function" ? null : r.render(), t.flags |= 1, e !== null && a ? (t.child = Za(t, e.child, null, u), t.child = Za(t, null, l, u)) : Tt(e, t, l, u), t.memoizedState = r.state, e = t.child) : e = Hl(e, t, u), e;
        }
        function Cd(e, t, l, a) {
            return qa(), t.flags |= 256, Tt(e, t, l, a), t.child;
        }
        var Zc = {
            dehydrated: null,
            treeContext: null,
            retryLane: 0,
            hydrationErrors: null
        };
        function Kc(e) {
            return {
                baseLanes: e,
                cachePool: go()
            };
        }
        function Jc(e, t, l) {
            return e = e !== null ? e.childLanes & ~l : 0, t && (e |= Jt), e;
        }
        function zd(e, t, l) {
            var a = t.pendingProps, u = !1, r = (t.flags & 128) !== 0, f;
            if ((f = r) || (f = e !== null && e.memoizedState === null ? !1 : (ct.current & 2) !== 0), f && (u = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
                if (xe) {
                    if (u ? ra(t) : ca(), (e = Pe) ? (e = Hh(e, ul), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
                        dehydrated: e,
                        treeContext: ea !== null ? {
                            id: El,
                            overflow: Al
                        } : null,
                        retryLane: 536870912,
                        hydrationErrors: null
                    }, l = ro(e), l.return = t, t.child = l, Et = t, Pe = null)) : e = null, e === null) throw la(t);
                    return zs(e) ? t.lanes = 32 : t.lanes = 536870912, null;
                }
                var h = a.children;
                return a = a.fallback, u ? (ca(), u = t.mode, h = Li({
                    mode: "hidden",
                    children: h
                }, u), a = wa(a, u, l, null), h.return = t, a.return = t, h.sibling = a, t.child = h, a = t.child, a.memoizedState = Kc(l), a.childLanes = Jc(e, f, l), t.memoizedState = Zc, Su(null, a)) : (ra(t), Fc(t, h));
            }
            var p = e.memoizedState;
            if (p !== null && (h = p.dehydrated, h !== null)) {
                if (r) t.flags & 256 ? (ra(t), t.flags &= -257, t = Wc(e, t, l)) : t.memoizedState !== null ? (ca(), t.child = e.child, t.flags |= 128, t = null) : (ca(), h = a.fallback, u = t.mode, a = Li({
                    mode: "visible",
                    children: a.children
                }, u), h = wa(h, u, l, null), h.flags |= 2, a.return = t, h.return = t, a.sibling = h, t.child = a, Za(t, e.child, null, l), a = t.child, a.memoizedState = Kc(l), a.childLanes = Jc(e, f, l), t.memoizedState = Zc, t = Su(null, a));
                else if (ra(t), zs(h)) {
                    if (f = h.nextSibling && h.nextSibling.dataset, f) var z = f.dgst;
                    f = z, a = Error(s(419)), a.stack = "", a.digest = f, ru({
                        value: a,
                        source: null,
                        stack: null
                    }), t = Wc(e, t, l);
                } else if (ht || An(e, t, l, !1), f = (l & e.childLanes) !== 0, ht || f) {
                    if (f = Je, f !== null && (a = x(f, l), a !== 0 && a !== p.retryLane)) throw p.retryLane = a, Ha(e, a), wt(f, e, a), Xc;
                    Cs(h) || Zi(), t = Wc(e, t, l);
                } else Cs(h) ? (t.flags |= 192, t.child = e.child, t = null) : (e = p.treeContext, Pe = rl(h.nextSibling), Et = t, xe = !0, ta = null, ul = !1, e !== null && fo(t, e), t = Fc(t, a.children), t.flags |= 4096);
                return t;
            }
            return u ? (ca(), h = a.fallback, u = t.mode, p = e.child, z = p.sibling, a = xl(p, {
                mode: "hidden",
                children: a.children
            }), a.subtreeFlags = p.subtreeFlags & 65011712, z !== null ? h = xl(z, h) : (h = wa(h, u, l, null), h.flags |= 2), h.return = t, a.return = t, a.sibling = h, t.child = a, Su(null, a), a = t.child, h = e.child.memoizedState, h === null ? h = Kc(l) : (u = h.cachePool, u !== null ? (p = ot._currentValue, u = u.parent !== p ? {
                parent: p,
                pool: p
            } : u) : u = go(), h = {
                baseLanes: h.baseLanes | l,
                cachePool: u
            }), a.memoizedState = h, a.childLanes = Jc(e, f, l), t.memoizedState = Zc, Su(e.child, a)) : (ra(t), l = e.child, e = l.sibling, l = xl(l, {
                mode: "visible",
                children: a.children
            }), l.return = t, l.sibling = null, e !== null && (f = t.deletions, f === null ? (t.deletions = [
                e
            ], t.flags |= 16) : f.push(e)), t.child = l, t.memoizedState = null, l);
        }
        function Fc(e, t) {
            return t = Li({
                mode: "visible",
                children: t
            }, e.mode), t.return = e, e.child = t;
        }
        function Li(e, t) {
            return e = Xt(22, e, null, t), e.lanes = 0, e;
        }
        function Wc(e, t, l) {
            return Za(t, e.child, null, l), e = Fc(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
        }
        function Rd(e, t, l) {
            e.lanes |= t;
            var a = e.alternate;
            a !== null && (a.lanes |= t), fc(e.return, t, l);
        }
        function $c(e, t, l, a, u, r) {
            var f = e.memoizedState;
            f === null ? e.memoizedState = {
                isBackwards: t,
                rendering: null,
                renderingStartTime: 0,
                last: a,
                tail: l,
                tailMode: u,
                treeForkCount: r
            } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = l, f.tailMode = u, f.treeForkCount = r);
        }
        function xd(e, t, l) {
            var a = t.pendingProps, u = a.revealOrder, r = a.tail;
            a = a.children;
            var f = ct.current, h = (f & 2) !== 0;
            if (h ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, V(ct, f), Tt(e, t, a, l), a = xe ? iu : 0, !h && e !== null && (e.flags & 128) !== 0) e: for(e = t.child; e !== null;){
                if (e.tag === 13) e.memoizedState !== null && Rd(e, l, t);
                else if (e.tag === 19) Rd(e, l, t);
                else if (e.child !== null) {
                    e.child.return = e, e = e.child;
                    continue;
                }
                if (e === t) break e;
                for(; e.sibling === null;){
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                e.sibling.return = e.return, e = e.sibling;
            }
            switch(u){
                case "forwards":
                    for(l = t.child, u = null; l !== null;)e = l.alternate, e !== null && Mi(e) === null && (u = l), l = l.sibling;
                    l = u, l === null ? (u = t.child, t.child = null) : (u = l.sibling, l.sibling = null), $c(t, !1, u, l, r, a);
                    break;
                case "backwards":
                case "unstable_legacy-backwards":
                    for(l = null, u = t.child, t.child = null; u !== null;){
                        if (e = u.alternate, e !== null && Mi(e) === null) {
                            t.child = u;
                            break;
                        }
                        e = u.sibling, u.sibling = l, l = u, u = e;
                    }
                    $c(t, !0, l, null, r, a);
                    break;
                case "together":
                    $c(t, !1, null, null, void 0, a);
                    break;
                default:
                    t.memoizedState = null;
            }
            return t.child;
        }
        function Hl(e, t, l) {
            if (e !== null && (t.dependencies = e.dependencies), oa |= t.lanes, (l & t.childLanes) === 0) if (e !== null) {
                if (An(e, t, l, !1), (l & t.childLanes) === 0) return null;
            } else return null;
            if (e !== null && t.child !== e.child) throw Error(s(153));
            if (t.child !== null) {
                for(e = t.child, l = xl(e, e.pendingProps), t.child = l, l.return = t; e.sibling !== null;)e = e.sibling, l = l.sibling = xl(e, e.pendingProps), l.return = t;
                l.sibling = null;
            }
            return t.child;
        }
        function kc(e, t) {
            return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && vi(e)));
        }
        function X0(e, t, l) {
            switch(t.tag){
                case 3:
                    ft(t, t.stateNode.containerInfo), aa(t, ot, e.memoizedState.cache), qa();
                    break;
                case 27:
                case 5:
                    Oa(t);
                    break;
                case 4:
                    ft(t, t.stateNode.containerInfo);
                    break;
                case 10:
                    aa(t, t.type, t.memoizedProps.value);
                    break;
                case 31:
                    if (t.memoizedState !== null) return t.flags |= 128, Ac(t), null;
                    break;
                case 13:
                    var a = t.memoizedState;
                    if (a !== null) return a.dehydrated !== null ? (ra(t), t.flags |= 128, null) : (l & t.child.childLanes) !== 0 ? zd(e, t, l) : (ra(t), e = Hl(e, t, l), e !== null ? e.sibling : null);
                    ra(t);
                    break;
                case 19:
                    var u = (e.flags & 128) !== 0;
                    if (a = (l & t.childLanes) !== 0, a || (An(e, t, l, !1), a = (l & t.childLanes) !== 0), u) {
                        if (a) return xd(e, t, l);
                        t.flags |= 128;
                    }
                    if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), V(ct, ct.current), a) break;
                    return null;
                case 22:
                    return t.lanes = 0, Td(e, t, l, t.pendingProps);
                case 24:
                    aa(t, ot, e.memoizedState.cache);
            }
            return Hl(e, t, l);
        }
        function Ud(e, t, l) {
            if (e !== null) if (e.memoizedProps !== t.pendingProps) ht = !0;
            else {
                if (!kc(e, l) && (t.flags & 128) === 0) return ht = !1, X0(e, t, l);
                ht = (e.flags & 131072) !== 0;
            }
            else ht = !1, xe && (t.flags & 1048576) !== 0 && so(t, iu, t.index);
            switch(t.lanes = 0, t.tag){
                case 16:
                    e: {
                        var a = t.pendingProps;
                        if (e = Xa(t.elementType), t.type = e, typeof e == "function") lc(e) ? (a = Ja(e, a), t.tag = 1, t = _d(null, t, e, a, l)) : (t.tag = 0, t = Vc(null, t, e, a, l));
                        else {
                            if (e != null) {
                                var u = e.$$typeof;
                                if (u === de) {
                                    t.tag = 11, t = bd(null, t, e, a, l);
                                    break e;
                                } else if (u === O) {
                                    t.tag = 14, t = Ed(null, t, e, a, l);
                                    break e;
                                }
                            }
                            throw t = Oe(e) || e, Error(s(306, t, ""));
                        }
                    }
                    return t;
                case 0:
                    return Vc(e, t, t.type, t.pendingProps, l);
                case 1:
                    return a = t.type, u = Ja(a, t.pendingProps), _d(e, t, a, u, l);
                case 3:
                    e: {
                        if (ft(t, t.stateNode.containerInfo), e === null) throw Error(s(387));
                        a = t.pendingProps;
                        var r = t.memoizedState;
                        u = r.element, gc(e, t), mu(t, a, null, l);
                        var f = t.memoizedState;
                        if (a = f.cache, aa(t, ot, a), a !== r.cache && oc(t, [
                            ot
                        ], l, !0), hu(), a = f.element, r.isDehydrated) if (r = {
                            element: a,
                            isDehydrated: !1,
                            cache: f.cache
                        }, t.updateQueue.baseState = r, t.memoizedState = r, t.flags & 256) {
                            t = Cd(e, t, a, l);
                            break e;
                        } else if (a !== u) {
                            u = ll(Error(s(424)), t), ru(u), t = Cd(e, t, a, l);
                            break e;
                        } else {
                            switch(e = t.stateNode.containerInfo, e.nodeType){
                                case 9:
                                    e = e.body;
                                    break;
                                default:
                                    e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
                            }
                            for(Pe = rl(e.firstChild), Et = t, xe = !0, ta = null, ul = !0, l = To(t, null, a, l), t.child = l; l;)l.flags = l.flags & -3 | 4096, l = l.sibling;
                        }
                        else {
                            if (qa(), a === u) {
                                t = Hl(e, t, l);
                                break e;
                            }
                            Tt(e, t, a, l);
                        }
                        t = t.child;
                    }
                    return t;
                case 26:
                    return ji(e, t), e === null ? (l = Xh(t.type, null, t.pendingProps, null)) ? t.memoizedState = l : xe || (l = t.type, e = t.pendingProps, a = Pi(me.current).createElement(l), a[F] = t, a[J] = e, Mt(a, l, e), nt(a), t.stateNode = a) : t.memoizedState = Xh(t.type, e.memoizedProps, t.pendingProps, e.memoizedState), null;
                case 27:
                    return Oa(t), e === null && xe && (a = t.stateNode = Qh(t.type, t.pendingProps, me.current), Et = t, ul = !0, u = Pe, va(t.type) ? (Rs = u, Pe = rl(a.firstChild)) : Pe = u), Tt(e, t, t.pendingProps.children, l), ji(e, t), e === null && (t.flags |= 4194304), t.child;
                case 5:
                    return e === null && xe && ((u = a = Pe) && (a = Sv(a, t.type, t.pendingProps, ul), a !== null ? (t.stateNode = a, Et = t, Pe = rl(a.firstChild), ul = !1, u = !0) : u = !1), u || la(t)), Oa(t), u = t.type, r = t.pendingProps, f = e !== null ? e.memoizedProps : null, a = r.children, Ds(u, r) ? a = null : f !== null && Ds(u, f) && (t.flags |= 32), t.memoizedState !== null && (u = Mc(e, t, B0, null, null, l), Bu._currentValue = u), ji(e, t), Tt(e, t, a, l), t.child;
                case 6:
                    return e === null && xe && ((e = l = Pe) && (l = bv(l, t.pendingProps, ul), l !== null ? (t.stateNode = l, Et = t, Pe = null, e = !0) : e = !1), e || la(t)), null;
                case 13:
                    return zd(e, t, l);
                case 4:
                    return ft(t, t.stateNode.containerInfo), a = t.pendingProps, e === null ? t.child = Za(t, null, a, l) : Tt(e, t, a, l), t.child;
                case 11:
                    return bd(e, t, t.type, t.pendingProps, l);
                case 7:
                    return Tt(e, t, t.pendingProps, l), t.child;
                case 8:
                    return Tt(e, t, t.pendingProps.children, l), t.child;
                case 12:
                    return Tt(e, t, t.pendingProps.children, l), t.child;
                case 10:
                    return a = t.pendingProps, aa(t, t.type, a.value), Tt(e, t, a.children, l), t.child;
                case 9:
                    return u = t.type._context, a = t.pendingProps.children, Ya(t), u = At(u), a = a(u), t.flags |= 1, Tt(e, t, a, l), t.child;
                case 14:
                    return Ed(e, t, t.type, t.pendingProps, l);
                case 15:
                    return Ad(e, t, t.type, t.pendingProps, l);
                case 19:
                    return xd(e, t, l);
                case 31:
                    return G0(e, t, l);
                case 22:
                    return Td(e, t, l, t.pendingProps);
                case 24:
                    return Ya(t), a = At(ot), e === null ? (u = mc(), u === null && (u = Je, r = dc(), u.pooledCache = r, r.refCount++, r !== null && (u.pooledCacheLanes |= l), u = r), t.memoizedState = {
                        parent: a,
                        cache: u
                    }, vc(t), aa(t, ot, u)) : ((e.lanes & l) !== 0 && (gc(e, t), mu(t, null, null, l), hu()), u = e.memoizedState, r = t.memoizedState, u.parent !== a ? (u = {
                        parent: a,
                        cache: a
                    }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), aa(t, ot, a)) : (a = r.cache, aa(t, ot, a), a !== u.cache && oc(t, [
                        ot
                    ], l, !0))), Tt(e, t, t.pendingProps.children, l), t.child;
                case 29:
                    throw t.pendingProps;
            }
            throw Error(s(156, t.tag));
        }
        function wl(e) {
            e.flags |= 4;
        }
        function Pc(e, t, l, a, u) {
            if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
                if (e.flags |= 16777216, (u & 335544128) === u) if (e.stateNode.complete) e.flags |= 8192;
                else if (uh()) e.flags |= 8192;
                else throw Va = bi, yc;
            } else e.flags &= -16777217;
        }
        function Nd(e, t) {
            if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0) e.flags &= -16777217;
            else if (e.flags |= 16777216, !Fh(t)) if (uh()) e.flags |= 8192;
            else throw Va = bi, yc;
        }
        function Hi(e, t) {
            t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? xa() : 536870912, e.lanes |= t, Bn |= t);
        }
        function bu(e, t) {
            if (!xe) switch(e.tailMode){
                case "hidden":
                    t = e.tail;
                    for(var l = null; t !== null;)t.alternate !== null && (l = t), t = t.sibling;
                    l === null ? e.tail = null : l.sibling = null;
                    break;
                case "collapsed":
                    l = e.tail;
                    for(var a = null; l !== null;)l.alternate !== null && (a = l), l = l.sibling;
                    a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
            }
        }
        function Ie(e) {
            var t = e.alternate !== null && e.alternate.child === e.child, l = 0, a = 0;
            if (t) for(var u = e.child; u !== null;)l |= u.lanes | u.childLanes, a |= u.subtreeFlags & 65011712, a |= u.flags & 65011712, u.return = e, u = u.sibling;
            else for(u = e.child; u !== null;)l |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = e, u = u.sibling;
            return e.subtreeFlags |= a, e.childLanes = l, t;
        }
        function V0(e, t, l) {
            var a = t.pendingProps;
            switch(ic(t), t.tag){
                case 16:
                case 15:
                case 0:
                case 11:
                case 7:
                case 8:
                case 12:
                case 9:
                case 14:
                    return Ie(t), null;
                case 1:
                    return Ie(t), null;
                case 3:
                    return l = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bl(ot), lt(), l.pendingContext && (l.context = l.pendingContext, l.pendingContext = null), (e === null || e.child === null) && (En(t) ? wl(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, cc())), Ie(t), null;
                case 26:
                    var u = t.type, r = t.memoizedState;
                    return e === null ? (wl(t), r !== null ? (Ie(t), Nd(t, r)) : (Ie(t), Pc(t, u, null, a, l))) : r ? r !== e.memoizedState ? (wl(t), Ie(t), Nd(t, r)) : (Ie(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && wl(t), Ie(t), Pc(t, u, e, a, l)), null;
                case 27:
                    if (nn(t), l = me.current, u = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && wl(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(s(166));
                            return Ie(t), null;
                        }
                        e = k.current, En(t) ? oo(t) : (e = Qh(u, a, l), t.stateNode = e, wl(t));
                    }
                    return Ie(t), null;
                case 5:
                    if (nn(t), u = t.type, e !== null && t.stateNode != null) e.memoizedProps !== a && wl(t);
                    else {
                        if (!a) {
                            if (t.stateNode === null) throw Error(s(166));
                            return Ie(t), null;
                        }
                        if (r = k.current, En(t)) oo(t);
                        else {
                            var f = Pi(me.current);
                            switch(r){
                                case 1:
                                    r = f.createElementNS("http://www.w3.org/2000/svg", u);
                                    break;
                                case 2:
                                    r = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                    break;
                                default:
                                    switch(u){
                                        case "svg":
                                            r = f.createElementNS("http://www.w3.org/2000/svg", u);
                                            break;
                                        case "math":
                                            r = f.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                                            break;
                                        case "script":
                                            r = f.createElement("div"), r.innerHTML = "<script><\/script>", r = r.removeChild(r.firstChild);
                                            break;
                                        case "select":
                                            r = typeof a.is == "string" ? f.createElement("select", {
                                                is: a.is
                                            }) : f.createElement("select"), a.multiple ? r.multiple = !0 : a.size && (r.size = a.size);
                                            break;
                                        default:
                                            r = typeof a.is == "string" ? f.createElement(u, {
                                                is: a.is
                                            }) : f.createElement(u);
                                    }
                            }
                            r[F] = t, r[J] = a;
                            e: for(f = t.child; f !== null;){
                                if (f.tag === 5 || f.tag === 6) r.appendChild(f.stateNode);
                                else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                                    f.child.return = f, f = f.child;
                                    continue;
                                }
                                if (f === t) break e;
                                for(; f.sibling === null;){
                                    if (f.return === null || f.return === t) break e;
                                    f = f.return;
                                }
                                f.sibling.return = f.return, f = f.sibling;
                            }
                            t.stateNode = r;
                            e: switch(Mt(r, u, a), u){
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    a = !!a.autoFocus;
                                    break e;
                                case "img":
                                    a = !0;
                                    break e;
                                default:
                                    a = !1;
                            }
                            a && wl(t);
                        }
                    }
                    return Ie(t), Pc(t, t.type, e === null ? null : e.memoizedProps, t.pendingProps, l), null;
                case 6:
                    if (e && t.stateNode != null) e.memoizedProps !== a && wl(t);
                    else {
                        if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
                        if (e = me.current, En(t)) {
                            if (e = t.stateNode, l = t.memoizedProps, a = null, u = Et, u !== null) switch(u.tag){
                                case 27:
                                case 5:
                                    a = u.memoizedProps;
                            }
                            e[F] = t, e = !!(e.nodeValue === l || a !== null && a.suppressHydrationWarning === !0 || zh(e.nodeValue, l)), e || la(t, !0);
                        } else e = Pi(e).createTextNode(a), e[F] = t, t.stateNode = e;
                    }
                    return Ie(t), null;
                case 31:
                    if (l = t.memoizedState, e === null || e.memoizedState !== null) {
                        if (a = En(t), l !== null) {
                            if (e === null) {
                                if (!a) throw Error(s(318));
                                if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
                                e[F] = t;
                            } else qa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ie(t), e = !1;
                        } else l = cc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), e = !0;
                        if (!e) return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
                        if ((t.flags & 128) !== 0) throw Error(s(558));
                    }
                    return Ie(t), null;
                case 13:
                    if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                        if (u = En(t), a !== null && a.dehydrated !== null) {
                            if (e === null) {
                                if (!u) throw Error(s(318));
                                if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(s(317));
                                u[F] = t;
                            } else qa(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
                            Ie(t), u = !1;
                        } else u = cc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
                        if (!u) return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
                    }
                    return Zt(t), (t.flags & 128) !== 0 ? (t.lanes = l, t) : (l = a !== null, e = e !== null && e.memoizedState !== null, l && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), r = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (r = a.memoizedState.cachePool.pool), r !== u && (a.flags |= 2048)), l !== e && l && (t.child.flags |= 8192), Hi(t, t.updateQueue), Ie(t), null);
                case 4:
                    return lt(), e === null && bs(t.stateNode.containerInfo), Ie(t), null;
                case 10:
                    return Bl(t.type), Ie(t), null;
                case 19:
                    if (w(ct), a = t.memoizedState, a === null) return Ie(t), null;
                    if (u = (t.flags & 128) !== 0, r = a.rendering, r === null) if (u) bu(a, !1);
                    else {
                        if (it !== 0 || e !== null && (e.flags & 128) !== 0) for(e = t.child; e !== null;){
                            if (r = Mi(e), r !== null) {
                                for(t.flags |= 128, bu(a, !1), e = r.updateQueue, t.updateQueue = e, Hi(t, e), t.subtreeFlags = 0, e = l, l = t.child; l !== null;)io(l, e), l = l.sibling;
                                return V(ct, ct.current & 1 | 2), xe && Ul(t, a.treeForkCount), t.child;
                            }
                            e = e.sibling;
                        }
                        a.tail !== null && rt() > Gi && (t.flags |= 128, u = !0, bu(a, !1), t.lanes = 4194304);
                    }
                    else {
                        if (!u) if (e = Mi(r), e !== null) {
                            if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, Hi(t, e), bu(a, !0), a.tail === null && a.tailMode === "hidden" && !r.alternate && !xe) return Ie(t), null;
                        } else 2 * rt() - a.renderingStartTime > Gi && l !== 536870912 && (t.flags |= 128, u = !0, bu(a, !1), t.lanes = 4194304);
                        a.isBackwards ? (r.sibling = t.child, t.child = r) : (e = a.last, e !== null ? e.sibling = r : t.child = r, a.last = r);
                    }
                    return a.tail !== null ? (e = a.tail, a.rendering = e, a.tail = e.sibling, a.renderingStartTime = rt(), e.sibling = null, l = ct.current, V(ct, u ? l & 1 | 2 : l & 1), xe && Ul(t, a.treeForkCount), e) : (Ie(t), null);
                case 22:
                case 23:
                    return Zt(t), Ec(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (l & 536870912) !== 0 && (t.flags & 128) === 0 && (Ie(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ie(t), l = t.updateQueue, l !== null && Hi(t, l.retryQueue), l = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== l && (t.flags |= 2048), e !== null && w(Ga), null;
                case 24:
                    return l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Bl(ot), Ie(t), null;
                case 25:
                    return null;
                case 30:
                    return null;
            }
            throw Error(s(156, t.tag));
        }
        function Z0(e, t) {
            switch(ic(t), t.tag){
                case 1:
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 3:
                    return Bl(ot), lt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
                case 26:
                case 27:
                case 5:
                    return nn(t), null;
                case 31:
                    if (t.memoizedState !== null) {
                        if (Zt(t), t.alternate === null) throw Error(s(340));
                        qa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 13:
                    if (Zt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                        if (t.alternate === null) throw Error(s(340));
                        qa();
                    }
                    return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 19:
                    return w(ct), null;
                case 4:
                    return lt(), null;
                case 10:
                    return Bl(t.type), null;
                case 22:
                case 23:
                    return Zt(t), Ec(), e !== null && w(Ga), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
                case 24:
                    return Bl(ot), null;
                case 25:
                    return null;
                default:
                    return null;
            }
        }
        function Bd(e, t) {
            switch(ic(t), t.tag){
                case 3:
                    Bl(ot), lt();
                    break;
                case 26:
                case 27:
                case 5:
                    nn(t);
                    break;
                case 4:
                    lt();
                    break;
                case 31:
                    t.memoizedState !== null && Zt(t);
                    break;
                case 13:
                    Zt(t);
                    break;
                case 19:
                    w(ct);
                    break;
                case 10:
                    Bl(t.type);
                    break;
                case 22:
                case 23:
                    Zt(t), Ec(), e !== null && w(Ga);
                    break;
                case 24:
                    Bl(ot);
            }
        }
        function Eu(e, t) {
            try {
                var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
                if (a !== null) {
                    var u = a.next;
                    l = u;
                    do {
                        if ((l.tag & e) === e) {
                            a = void 0;
                            var r = l.create, f = l.inst;
                            a = r(), f.destroy = a;
                        }
                        l = l.next;
                    }while (l !== u);
                }
            } catch (h) {
                Ge(t, t.return, h);
            }
        }
        function sa(e, t, l) {
            try {
                var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
                if (u !== null) {
                    var r = u.next;
                    a = r;
                    do {
                        if ((a.tag & e) === e) {
                            var f = a.inst, h = f.destroy;
                            if (h !== void 0) {
                                f.destroy = void 0, u = t;
                                var p = l, z = h;
                                try {
                                    z();
                                } catch (H) {
                                    Ge(u, p, H);
                                }
                            }
                        }
                        a = a.next;
                    }while (a !== r);
                }
            } catch (H) {
                Ge(t, t.return, H);
            }
        }
        function jd(e) {
            var t = e.updateQueue;
            if (t !== null) {
                var l = e.stateNode;
                try {
                    Do(t, l);
                } catch (a) {
                    Ge(e, e.return, a);
                }
            }
        }
        function Ld(e, t, l) {
            l.props = Ja(e.type, e.memoizedProps), l.state = e.memoizedState;
            try {
                l.componentWillUnmount();
            } catch (a) {
                Ge(e, t, a);
            }
        }
        function Au(e, t) {
            try {
                var l = e.ref;
                if (l !== null) {
                    switch(e.tag){
                        case 26:
                        case 27:
                        case 5:
                            var a = e.stateNode;
                            break;
                        case 30:
                            a = e.stateNode;
                            break;
                        default:
                            a = e.stateNode;
                    }
                    typeof l == "function" ? e.refCleanup = l(a) : l.current = a;
                }
            } catch (u) {
                Ge(e, t, u);
            }
        }
        function Tl(e, t) {
            var l = e.ref, a = e.refCleanup;
            if (l !== null) if (typeof a == "function") try {
                a();
            } catch (u) {
                Ge(e, t, u);
            } finally{
                e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
            }
            else if (typeof l == "function") try {
                l(null);
            } catch (u) {
                Ge(e, t, u);
            }
            else l.current = null;
        }
        function Hd(e) {
            var t = e.type, l = e.memoizedProps, a = e.stateNode;
            try {
                e: switch(t){
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l.autoFocus && a.focus();
                        break e;
                    case "img":
                        l.src ? a.src = l.src : l.srcSet && (a.srcset = l.srcSet);
                }
            } catch (u) {
                Ge(e, e.return, u);
            }
        }
        function Ic(e, t, l) {
            try {
                var a = e.stateNode;
                hv(a, e.type, l, t), a[J] = t;
            } catch (u) {
                Ge(e, e.return, u);
            }
        }
        function wd(e) {
            return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && va(e.type) || e.tag === 4;
        }
        function es(e) {
            e: for(;;){
                for(; e.sibling === null;){
                    if (e.return === null || wd(e.return)) return null;
                    e = e.return;
                }
                for(e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;){
                    if (e.tag === 27 && va(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
                    e.child.return = e, e = e.child;
                }
                if (!(e.flags & 2)) return e.stateNode;
            }
        }
        function ts(e, t, l) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? (l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l).insertBefore(e, t) : (t = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, t.appendChild(e), l = l._reactRootContainer, l != null || t.onclick !== null || (t.onclick = zl));
            else if (a !== 4 && (a === 27 && va(e.type) && (l = e.stateNode, t = null), e = e.child, e !== null)) for(ts(e, t, l), e = e.sibling; e !== null;)ts(e, t, l), e = e.sibling;
        }
        function wi(e, t, l) {
            var a = e.tag;
            if (a === 5 || a === 6) e = e.stateNode, t ? l.insertBefore(e, t) : l.appendChild(e);
            else if (a !== 4 && (a === 27 && va(e.type) && (l = e.stateNode), e = e.child, e !== null)) for(wi(e, t, l), e = e.sibling; e !== null;)wi(e, t, l), e = e.sibling;
        }
        function qd(e) {
            var t = e.stateNode, l = e.memoizedProps;
            try {
                for(var a = e.type, u = t.attributes; u.length;)t.removeAttributeNode(u[0]);
                Mt(t, a, l), t[F] = e, t[J] = l;
            } catch (r) {
                Ge(e, e.return, r);
            }
        }
        var ql = !1, mt = !1, ls = !1, Qd = typeof WeakSet == "function" ? WeakSet : Set, St = null;
        function K0(e, t) {
            if (e = e.containerInfo, Ts = ur, e = kf(e), Wr(e)) {
                if ("selectionStart" in e) var l = {
                    start: e.selectionStart,
                    end: e.selectionEnd
                };
                else e: {
                    l = (l = e.ownerDocument) && l.defaultView || window;
                    var a = l.getSelection && l.getSelection();
                    if (a && a.rangeCount !== 0) {
                        l = a.anchorNode;
                        var u = a.anchorOffset, r = a.focusNode;
                        a = a.focusOffset;
                        try {
                            l.nodeType, r.nodeType;
                        } catch  {
                            l = null;
                            break e;
                        }
                        var f = 0, h = -1, p = -1, z = 0, H = 0, Q = e, R = null;
                        t: for(;;){
                            for(var U; Q !== l || u !== 0 && Q.nodeType !== 3 || (h = f + u), Q !== r || a !== 0 && Q.nodeType !== 3 || (p = f + a), Q.nodeType === 3 && (f += Q.nodeValue.length), (U = Q.firstChild) !== null;)R = Q, Q = U;
                            for(;;){
                                if (Q === e) break t;
                                if (R === l && ++z === u && (h = f), R === r && ++H === a && (p = f), (U = Q.nextSibling) !== null) break;
                                Q = R, R = Q.parentNode;
                            }
                            Q = U;
                        }
                        l = h === -1 || p === -1 ? null : {
                            start: h,
                            end: p
                        };
                    } else l = null;
                }
                l = l || {
                    start: 0,
                    end: 0
                };
            } else l = null;
            for(Ms = {
                focusedElem: e,
                selectionRange: l
            }, ur = !1, St = t; St !== null;)if (t = St, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, St = e;
            else for(; St !== null;){
                switch(t = St, r = t.alternate, e = t.flags, t.tag){
                    case 0:
                        if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null)) for(l = 0; l < e.length; l++)u = e[l], u.ref.impl = u.nextImpl;
                        break;
                    case 11:
                    case 15:
                        break;
                    case 1:
                        if ((e & 1024) !== 0 && r !== null) {
                            e = void 0, l = t, u = r.memoizedProps, r = r.memoizedState, a = l.stateNode;
                            try {
                                var ee = Ja(l.type, u);
                                e = a.getSnapshotBeforeUpdate(ee, r), a.__reactInternalSnapshotBeforeUpdate = e;
                            } catch (se) {
                                Ge(l, l.return, se);
                            }
                        }
                        break;
                    case 3:
                        if ((e & 1024) !== 0) {
                            if (e = t.stateNode.containerInfo, l = e.nodeType, l === 9) _s(e);
                            else if (l === 1) switch(e.nodeName){
                                case "HEAD":
                                case "HTML":
                                case "BODY":
                                    _s(e);
                                    break;
                                default:
                                    e.textContent = "";
                            }
                        }
                        break;
                    case 5:
                    case 26:
                    case 27:
                    case 6:
                    case 4:
                    case 17:
                        break;
                    default:
                        if ((e & 1024) !== 0) throw Error(s(163));
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, St = e;
                    break;
                }
                St = t.return;
            }
        }
        function Yd(e, t, l) {
            var a = l.flags;
            switch(l.tag){
                case 0:
                case 11:
                case 15:
                    Yl(e, l), a & 4 && Eu(5, l);
                    break;
                case 1:
                    if (Yl(e, l), a & 4) if (e = l.stateNode, t === null) try {
                        e.componentDidMount();
                    } catch (f) {
                        Ge(l, l.return, f);
                    }
                    else {
                        var u = Ja(l.type, t.memoizedProps);
                        t = t.memoizedState;
                        try {
                            e.componentDidUpdate(u, t, e.__reactInternalSnapshotBeforeUpdate);
                        } catch (f) {
                            Ge(l, l.return, f);
                        }
                    }
                    a & 64 && jd(l), a & 512 && Au(l, l.return);
                    break;
                case 3:
                    if (Yl(e, l), a & 64 && (e = l.updateQueue, e !== null)) {
                        if (t = null, l.child !== null) switch(l.child.tag){
                            case 27:
                            case 5:
                                t = l.child.stateNode;
                                break;
                            case 1:
                                t = l.child.stateNode;
                        }
                        try {
                            Do(e, t);
                        } catch (f) {
                            Ge(l, l.return, f);
                        }
                    }
                    break;
                case 27:
                    t === null && a & 4 && qd(l);
                case 26:
                case 5:
                    Yl(e, l), t === null && a & 4 && Hd(l), a & 512 && Au(l, l.return);
                    break;
                case 12:
                    Yl(e, l);
                    break;
                case 31:
                    Yl(e, l), a & 4 && Vd(e, l);
                    break;
                case 13:
                    Yl(e, l), a & 4 && Zd(e, l), a & 64 && (e = l.memoizedState, e !== null && (e = e.dehydrated, e !== null && (l = tv.bind(null, l), Ev(e, l))));
                    break;
                case 22:
                    if (a = l.memoizedState !== null || ql, !a) {
                        t = t !== null && t.memoizedState !== null || mt, u = ql;
                        var r = mt;
                        ql = a, (mt = t) && !r ? Gl(e, l, (l.subtreeFlags & 8772) !== 0) : Yl(e, l), ql = u, mt = r;
                    }
                    break;
                case 30:
                    break;
                default:
                    Yl(e, l);
            }
        }
        function Gd(e) {
            var t = e.alternate;
            t !== null && (e.alternate = null, Gd(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && We(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
        }
        var et = null, Bt = !1;
        function Ql(e, t, l) {
            for(l = l.child; l !== null;)Xd(e, t, l), l = l.sibling;
        }
        function Xd(e, t, l) {
            if (Dt && typeof Dt.onCommitFiberUnmount == "function") try {
                Dt.onCommitFiberUnmount(xt, l);
            } catch  {}
            switch(l.tag){
                case 26:
                    mt || Tl(l, t), Ql(e, t, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && (l = l.stateNode, l.parentNode.removeChild(l));
                    break;
                case 27:
                    mt || Tl(l, t);
                    var a = et, u = Bt;
                    va(l.type) && (et = l.stateNode, Bt = !1), Ql(e, t, l), xu(l.stateNode), et = a, Bt = u;
                    break;
                case 5:
                    mt || Tl(l, t);
                case 6:
                    if (a = et, u = Bt, et = null, Ql(e, t, l), et = a, Bt = u, et !== null) if (Bt) try {
                        (et.nodeType === 9 ? et.body : et.nodeName === "HTML" ? et.ownerDocument.body : et).removeChild(l.stateNode);
                    } catch (r) {
                        Ge(l, t, r);
                    }
                    else try {
                        et.removeChild(l.stateNode);
                    } catch (r) {
                        Ge(l, t, r);
                    }
                    break;
                case 18:
                    et !== null && (Bt ? (e = et, jh(e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, l.stateNode), Gn(e)) : jh(et, l.stateNode));
                    break;
                case 4:
                    a = et, u = Bt, et = l.stateNode.containerInfo, Bt = !0, Ql(e, t, l), et = a, Bt = u;
                    break;
                case 0:
                case 11:
                case 14:
                case 15:
                    sa(2, l, t), mt || sa(4, l, t), Ql(e, t, l);
                    break;
                case 1:
                    mt || (Tl(l, t), a = l.stateNode, typeof a.componentWillUnmount == "function" && Ld(l, t, a)), Ql(e, t, l);
                    break;
                case 21:
                    Ql(e, t, l);
                    break;
                case 22:
                    mt = (a = mt) || l.memoizedState !== null, Ql(e, t, l), mt = a;
                    break;
                default:
                    Ql(e, t, l);
            }
        }
        function Vd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
                e = e.dehydrated;
                try {
                    Gn(e);
                } catch (l) {
                    Ge(t, t.return, l);
                }
            }
        }
        function Zd(e, t) {
            if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null)))) try {
                Gn(e);
            } catch (l) {
                Ge(t, t.return, l);
            }
        }
        function J0(e) {
            switch(e.tag){
                case 31:
                case 13:
                case 19:
                    var t = e.stateNode;
                    return t === null && (t = e.stateNode = new Qd), t;
                case 22:
                    return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Qd), t;
                default:
                    throw Error(s(435, e.tag));
            }
        }
        function qi(e, t) {
            var l = J0(e);
            t.forEach(function(a) {
                if (!l.has(a)) {
                    l.add(a);
                    var u = lv.bind(null, e, a);
                    a.then(u, u);
                }
            });
        }
        function jt(e, t) {
            var l = t.deletions;
            if (l !== null) for(var a = 0; a < l.length; a++){
                var u = l[a], r = e, f = t, h = f;
                e: for(; h !== null;){
                    switch(h.tag){
                        case 27:
                            if (va(h.type)) {
                                et = h.stateNode, Bt = !1;
                                break e;
                            }
                            break;
                        case 5:
                            et = h.stateNode, Bt = !1;
                            break e;
                        case 3:
                        case 4:
                            et = h.stateNode.containerInfo, Bt = !0;
                            break e;
                    }
                    h = h.return;
                }
                if (et === null) throw Error(s(160));
                Xd(r, f, u), et = null, Bt = !1, r = u.alternate, r !== null && (r.return = null), u.return = null;
            }
            if (t.subtreeFlags & 13886) for(t = t.child; t !== null;)Kd(t, e), t = t.sibling;
        }
        var yl = null;
        function Kd(e, t) {
            var l = e.alternate, a = e.flags;
            switch(e.tag){
                case 0:
                case 11:
                case 14:
                case 15:
                    jt(t, e), Lt(e), a & 4 && (sa(3, e, e.return), Eu(3, e), sa(5, e, e.return));
                    break;
                case 1:
                    jt(t, e), Lt(e), a & 512 && (mt || l === null || Tl(l, l.return)), a & 64 && ql && (e = e.updateQueue, e !== null && (a = e.callbacks, a !== null && (l = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = l === null ? a : l.concat(a))));
                    break;
                case 26:
                    var u = yl;
                    if (jt(t, e), Lt(e), a & 512 && (mt || l === null || Tl(l, l.return)), a & 4) {
                        var r = l !== null ? l.memoizedState : null;
                        if (a = e.memoizedState, l === null) if (a === null) if (e.stateNode === null) {
                            e: {
                                a = e.type, l = e.memoizedProps, u = u.ownerDocument || u;
                                t: switch(a){
                                    case "title":
                                        r = u.getElementsByTagName("title")[0], (!r || r[Te] || r[F] || r.namespaceURI === "http://www.w3.org/2000/svg" || r.hasAttribute("itemprop")) && (r = u.createElement(a), u.head.insertBefore(r, u.querySelector("head > title"))), Mt(r, a, l), r[F] = e, nt(r), a = r;
                                        break e;
                                    case "link":
                                        var f = Kh("link", "href", u).get(a + (l.href || ""));
                                        if (f) {
                                            for(var h = 0; h < f.length; h++)if (r = f[h], r.getAttribute("href") === (l.href == null || l.href === "" ? null : l.href) && r.getAttribute("rel") === (l.rel == null ? null : l.rel) && r.getAttribute("title") === (l.title == null ? null : l.title) && r.getAttribute("crossorigin") === (l.crossOrigin == null ? null : l.crossOrigin)) {
                                                f.splice(h, 1);
                                                break t;
                                            }
                                        }
                                        r = u.createElement(a), Mt(r, a, l), u.head.appendChild(r);
                                        break;
                                    case "meta":
                                        if (f = Kh("meta", "content", u).get(a + (l.content || ""))) {
                                            for(h = 0; h < f.length; h++)if (r = f[h], r.getAttribute("content") === (l.content == null ? null : "" + l.content) && r.getAttribute("name") === (l.name == null ? null : l.name) && r.getAttribute("property") === (l.property == null ? null : l.property) && r.getAttribute("http-equiv") === (l.httpEquiv == null ? null : l.httpEquiv) && r.getAttribute("charset") === (l.charSet == null ? null : l.charSet)) {
                                                f.splice(h, 1);
                                                break t;
                                            }
                                        }
                                        r = u.createElement(a), Mt(r, a, l), u.head.appendChild(r);
                                        break;
                                    default:
                                        throw Error(s(468, a));
                                }
                                r[F] = e, nt(r), a = r;
                            }
                            e.stateNode = a;
                        } else Jh(u, e.type, e.stateNode);
                        else e.stateNode = Zh(u, a, e.memoizedProps);
                        else r !== a ? (r === null ? l.stateNode !== null && (l = l.stateNode, l.parentNode.removeChild(l)) : r.count--, a === null ? Jh(u, e.type, e.stateNode) : Zh(u, a, e.memoizedProps)) : a === null && e.stateNode !== null && Ic(e, e.memoizedProps, l.memoizedProps);
                    }
                    break;
                case 27:
                    jt(t, e), Lt(e), a & 512 && (mt || l === null || Tl(l, l.return)), l !== null && a & 4 && Ic(e, e.memoizedProps, l.memoizedProps);
                    break;
                case 5:
                    if (jt(t, e), Lt(e), a & 512 && (mt || l === null || Tl(l, l.return)), e.flags & 32) {
                        u = e.stateNode;
                        try {
                            on(u, "");
                        } catch (ee) {
                            Ge(e, e.return, ee);
                        }
                    }
                    a & 4 && e.stateNode != null && (u = e.memoizedProps, Ic(e, u, l !== null ? l.memoizedProps : u)), a & 1024 && (ls = !0);
                    break;
                case 6:
                    if (jt(t, e), Lt(e), a & 4) {
                        if (e.stateNode === null) throw Error(s(162));
                        a = e.memoizedProps, l = e.stateNode;
                        try {
                            l.nodeValue = a;
                        } catch (ee) {
                            Ge(e, e.return, ee);
                        }
                    }
                    break;
                case 3:
                    if (tr = null, u = yl, yl = Ii(t.containerInfo), jt(t, e), yl = u, Lt(e), a & 4 && l !== null && l.memoizedState.isDehydrated) try {
                        Gn(t.containerInfo);
                    } catch (ee) {
                        Ge(e, e.return, ee);
                    }
                    ls && (ls = !1, Jd(e));
                    break;
                case 4:
                    a = yl, yl = Ii(e.stateNode.containerInfo), jt(t, e), Lt(e), yl = a;
                    break;
                case 12:
                    jt(t, e), Lt(e);
                    break;
                case 31:
                    jt(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qi(e, a)));
                    break;
                case 13:
                    jt(t, e), Lt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (Yi = rt()), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qi(e, a)));
                    break;
                case 22:
                    u = e.memoizedState !== null;
                    var p = l !== null && l.memoizedState !== null, z = ql, H = mt;
                    if (ql = z || u, mt = H || p, jt(t, e), mt = H, ql = z, Lt(e), a & 8192) e: for(t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (l === null || p || ql || mt || Fa(e)), l = null, t = e;;){
                        if (t.tag === 5 || t.tag === 26) {
                            if (l === null) {
                                p = l = t;
                                try {
                                    if (r = p.stateNode, u) f = r.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                                    else {
                                        h = p.stateNode;
                                        var Q = p.memoizedProps.style, R = Q != null && Q.hasOwnProperty("display") ? Q.display : null;
                                        h.style.display = R == null || typeof R == "boolean" ? "" : ("" + R).trim();
                                    }
                                } catch (ee) {
                                    Ge(p, p.return, ee);
                                }
                            }
                        } else if (t.tag === 6) {
                            if (l === null) {
                                p = t;
                                try {
                                    p.stateNode.nodeValue = u ? "" : p.memoizedProps;
                                } catch (ee) {
                                    Ge(p, p.return, ee);
                                }
                            }
                        } else if (t.tag === 18) {
                            if (l === null) {
                                p = t;
                                try {
                                    var U = p.stateNode;
                                    u ? Lh(U, !0) : Lh(p.stateNode, !1);
                                } catch (ee) {
                                    Ge(p, p.return, ee);
                                }
                            }
                        } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
                            t.child.return = t, t = t.child;
                            continue;
                        }
                        if (t === e) break e;
                        for(; t.sibling === null;){
                            if (t.return === null || t.return === e) break e;
                            l === t && (l = null), t = t.return;
                        }
                        l === t && (l = null), t.sibling.return = t.return, t = t.sibling;
                    }
                    a & 4 && (a = e.updateQueue, a !== null && (l = a.retryQueue, l !== null && (a.retryQueue = null, qi(e, l))));
                    break;
                case 19:
                    jt(t, e), Lt(e), a & 4 && (a = e.updateQueue, a !== null && (e.updateQueue = null, qi(e, a)));
                    break;
                case 30:
                    break;
                case 21:
                    break;
                default:
                    jt(t, e), Lt(e);
            }
        }
        function Lt(e) {
            var t = e.flags;
            if (t & 2) {
                try {
                    for(var l, a = e.return; a !== null;){
                        if (wd(a)) {
                            l = a;
                            break;
                        }
                        a = a.return;
                    }
                    if (l == null) throw Error(s(160));
                    switch(l.tag){
                        case 27:
                            var u = l.stateNode, r = es(e);
                            wi(e, r, u);
                            break;
                        case 5:
                            var f = l.stateNode;
                            l.flags & 32 && (on(f, ""), l.flags &= -33);
                            var h = es(e);
                            wi(e, h, f);
                            break;
                        case 3:
                        case 4:
                            var p = l.stateNode.containerInfo, z = es(e);
                            ts(e, z, p);
                            break;
                        default:
                            throw Error(s(161));
                    }
                } catch (H) {
                    Ge(e, e.return, H);
                }
                e.flags &= -3;
            }
            t & 4096 && (e.flags &= -4097);
        }
        function Jd(e) {
            if (e.subtreeFlags & 1024) for(e = e.child; e !== null;){
                var t = e;
                Jd(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
            }
        }
        function Yl(e, t) {
            if (t.subtreeFlags & 8772) for(t = t.child; t !== null;)Yd(e, t.alternate, t), t = t.sibling;
        }
        function Fa(e) {
            for(e = e.child; e !== null;){
                var t = e;
                switch(t.tag){
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                        sa(4, t, t.return), Fa(t);
                        break;
                    case 1:
                        Tl(t, t.return);
                        var l = t.stateNode;
                        typeof l.componentWillUnmount == "function" && Ld(t, t.return, l), Fa(t);
                        break;
                    case 27:
                        xu(t.stateNode);
                    case 26:
                    case 5:
                        Tl(t, t.return), Fa(t);
                        break;
                    case 22:
                        t.memoizedState === null && Fa(t);
                        break;
                    case 30:
                        Fa(t);
                        break;
                    default:
                        Fa(t);
                }
                e = e.sibling;
            }
        }
        function Gl(e, t, l) {
            for(l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null;){
                var a = t.alternate, u = e, r = t, f = r.flags;
                switch(r.tag){
                    case 0:
                    case 11:
                    case 15:
                        Gl(u, r, l), Eu(4, r);
                        break;
                    case 1:
                        if (Gl(u, r, l), a = r, u = a.stateNode, typeof u.componentDidMount == "function") try {
                            u.componentDidMount();
                        } catch (z) {
                            Ge(a, a.return, z);
                        }
                        if (a = r, u = a.updateQueue, u !== null) {
                            var h = a.stateNode;
                            try {
                                var p = u.shared.hiddenCallbacks;
                                if (p !== null) for(u.shared.hiddenCallbacks = null, u = 0; u < p.length; u++)Mo(p[u], h);
                            } catch (z) {
                                Ge(a, a.return, z);
                            }
                        }
                        l && f & 64 && jd(r), Au(r, r.return);
                        break;
                    case 27:
                        qd(r);
                    case 26:
                    case 5:
                        Gl(u, r, l), l && a === null && f & 4 && Hd(r), Au(r, r.return);
                        break;
                    case 12:
                        Gl(u, r, l);
                        break;
                    case 31:
                        Gl(u, r, l), l && f & 4 && Vd(u, r);
                        break;
                    case 13:
                        Gl(u, r, l), l && f & 4 && Zd(u, r);
                        break;
                    case 22:
                        r.memoizedState === null && Gl(u, r, l), Au(r, r.return);
                        break;
                    case 30:
                        break;
                    default:
                        Gl(u, r, l);
                }
                t = t.sibling;
            }
        }
        function as(e, t) {
            var l = null;
            e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (l = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== l && (e != null && e.refCount++, l != null && cu(l));
        }
        function ns(e, t) {
            e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && cu(e));
        }
        function vl(e, t, l, a) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;)Fd(e, t, l, a), t = t.sibling;
        }
        function Fd(e, t, l, a) {
            var u = t.flags;
            switch(t.tag){
                case 0:
                case 11:
                case 15:
                    vl(e, t, l, a), u & 2048 && Eu(9, t);
                    break;
                case 1:
                    vl(e, t, l, a);
                    break;
                case 3:
                    vl(e, t, l, a), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && cu(e)));
                    break;
                case 12:
                    if (u & 2048) {
                        vl(e, t, l, a), e = t.stateNode;
                        try {
                            var r = t.memoizedProps, f = r.id, h = r.onPostCommit;
                            typeof h == "function" && h(f, t.alternate === null ? "mount" : "update", e.passiveEffectDuration, -0);
                        } catch (p) {
                            Ge(t, t.return, p);
                        }
                    } else vl(e, t, l, a);
                    break;
                case 31:
                    vl(e, t, l, a);
                    break;
                case 13:
                    vl(e, t, l, a);
                    break;
                case 23:
                    break;
                case 22:
                    r = t.stateNode, f = t.alternate, t.memoizedState !== null ? r._visibility & 2 ? vl(e, t, l, a) : Tu(e, t) : r._visibility & 2 ? vl(e, t, l, a) : (r._visibility |= 2, xn(e, t, l, a, (t.subtreeFlags & 10256) !== 0 || !1)), u & 2048 && as(f, t);
                    break;
                case 24:
                    vl(e, t, l, a), u & 2048 && ns(t.alternate, t);
                    break;
                default:
                    vl(e, t, l, a);
            }
        }
        function xn(e, t, l, a, u) {
            for(u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null;){
                var r = e, f = t, h = l, p = a, z = f.flags;
                switch(f.tag){
                    case 0:
                    case 11:
                    case 15:
                        xn(r, f, h, p, u), Eu(8, f);
                        break;
                    case 23:
                        break;
                    case 22:
                        var H = f.stateNode;
                        f.memoizedState !== null ? H._visibility & 2 ? xn(r, f, h, p, u) : Tu(r, f) : (H._visibility |= 2, xn(r, f, h, p, u)), u && z & 2048 && as(f.alternate, f);
                        break;
                    case 24:
                        xn(r, f, h, p, u), u && z & 2048 && ns(f.alternate, f);
                        break;
                    default:
                        xn(r, f, h, p, u);
                }
                t = t.sibling;
            }
        }
        function Tu(e, t) {
            if (t.subtreeFlags & 10256) for(t = t.child; t !== null;){
                var l = e, a = t, u = a.flags;
                switch(a.tag){
                    case 22:
                        Tu(l, a), u & 2048 && as(a.alternate, a);
                        break;
                    case 24:
                        Tu(l, a), u & 2048 && ns(a.alternate, a);
                        break;
                    default:
                        Tu(l, a);
                }
                t = t.sibling;
            }
        }
        var Mu = 8192;
        function Un(e, t, l) {
            if (e.subtreeFlags & Mu) for(e = e.child; e !== null;)Wd(e, t, l), e = e.sibling;
        }
        function Wd(e, t, l) {
            switch(e.tag){
                case 26:
                    Un(e, t, l), e.flags & Mu && e.memoizedState !== null && Nv(l, yl, e.memoizedState, e.memoizedProps);
                    break;
                case 5:
                    Un(e, t, l);
                    break;
                case 3:
                case 4:
                    var a = yl;
                    yl = Ii(e.stateNode.containerInfo), Un(e, t, l), yl = a;
                    break;
                case 22:
                    e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Mu, Mu = 16777216, Un(e, t, l), Mu = a) : Un(e, t, l));
                    break;
                default:
                    Un(e, t, l);
            }
        }
        function $d(e) {
            var t = e.alternate;
            if (t !== null && (e = t.child, e !== null)) {
                t.child = null;
                do t = e.sibling, e.sibling = null, e = t;
                while (e !== null);
            }
        }
        function Du(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var a = t[l];
                    St = a, Pd(a, e);
                }
                $d(e);
            }
            if (e.subtreeFlags & 10256) for(e = e.child; e !== null;)kd(e), e = e.sibling;
        }
        function kd(e) {
            switch(e.tag){
                case 0:
                case 11:
                case 15:
                    Du(e), e.flags & 2048 && sa(9, e, e.return);
                    break;
                case 3:
                    Du(e);
                    break;
                case 12:
                    Du(e);
                    break;
                case 22:
                    var t = e.stateNode;
                    e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Qi(e)) : Du(e);
                    break;
                default:
                    Du(e);
            }
        }
        function Qi(e) {
            var t = e.deletions;
            if ((e.flags & 16) !== 0) {
                if (t !== null) for(var l = 0; l < t.length; l++){
                    var a = t[l];
                    St = a, Pd(a, e);
                }
                $d(e);
            }
            for(e = e.child; e !== null;){
                switch(t = e, t.tag){
                    case 0:
                    case 11:
                    case 15:
                        sa(8, t, t.return), Qi(t);
                        break;
                    case 22:
                        l = t.stateNode, l._visibility & 2 && (l._visibility &= -3, Qi(t));
                        break;
                    default:
                        Qi(t);
                }
                e = e.sibling;
            }
        }
        function Pd(e, t) {
            for(; St !== null;){
                var l = St;
                switch(l.tag){
                    case 0:
                    case 11:
                    case 15:
                        sa(8, l, t);
                        break;
                    case 23:
                    case 22:
                        if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
                            var a = l.memoizedState.cachePool.pool;
                            a != null && a.refCount++;
                        }
                        break;
                    case 24:
                        cu(l.memoizedState.cache);
                }
                if (a = l.child, a !== null) a.return = l, St = a;
                else e: for(l = e; St !== null;){
                    a = St;
                    var u = a.sibling, r = a.return;
                    if (Gd(a), a === l) {
                        St = null;
                        break e;
                    }
                    if (u !== null) {
                        u.return = r, St = u;
                        break e;
                    }
                    St = r;
                }
            }
        }
        var F0 = {
            getCacheForType: function(e) {
                var t = At(ot), l = t.data.get(e);
                return l === void 0 && (l = e(), t.data.set(e, l)), l;
            },
            cacheSignal: function() {
                return At(ot).controller.signal;
            }
        }, W0 = typeof WeakMap == "function" ? WeakMap : Map, we = 0, Je = null, Me = null, Ce = 0, Ye = 0, Kt = null, fa = !1, Nn = !1, us = !1, Xl = 0, it = 0, oa = 0, Wa = 0, is = 0, Jt = 0, Bn = 0, Ou = null, Ht = null, rs = !1, Yi = 0, Id = 0, Gi = 1 / 0, Xi = null, da = null, pt = 0, ha = null, jn = null, Vl = 0, cs = 0, ss = null, eh = null, _u = 0, fs = null;
        function Ft() {
            return (we & 2) !== 0 && Ce !== 0 ? Ce & -Ce : B.T !== null ? vs() : ue();
        }
        function th() {
            if (Jt === 0) if ((Ce & 536870912) === 0 || xe) {
                var e = Wl;
                Wl <<= 1, (Wl & 3932160) === 0 && (Wl = 262144), Jt = e;
            } else Jt = 536870912;
            return e = Vt.current, e !== null && (e.flags |= 32), Jt;
        }
        function wt(e, t, l) {
            (e === Je && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (Ln(e, 0), ma(e, Ce, Jt, !1)), Ua(e, l), ((we & 2) === 0 || e !== Je) && (e === Je && ((we & 2) === 0 && (Wa |= l), it === 4 && ma(e, Ce, Jt, !1)), Ml(e));
        }
        function lh(e, t, l) {
            if ((we & 6) !== 0) throw Error(s(327));
            var a = !l && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Ra(e, t), u = a ? P0(e, t) : ds(e, t, !0), r = a;
            do {
                if (u === 0) {
                    Nn && !a && ma(e, t, 0, !1);
                    break;
                } else {
                    if (l = e.current.alternate, r && !$0(l)) {
                        u = ds(e, t, !1), r = !1;
                        continue;
                    }
                    if (u === 2) {
                        if (r = t, e.errorRecoveryDisabledLanes & r) var f = 0;
                        else f = e.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
                        if (f !== 0) {
                            t = f;
                            e: {
                                var h = e;
                                u = Ou;
                                var p = h.current.memoizedState.isDehydrated;
                                if (p && (Ln(h, f).flags |= 256), f = ds(h, f, !1), f !== 2) {
                                    if (us && !p) {
                                        h.errorRecoveryDisabledLanes |= r, Wa |= r, u = 4;
                                        break e;
                                    }
                                    r = Ht, Ht = u, r !== null && (Ht === null ? Ht = r : Ht.push.apply(Ht, r));
                                }
                                u = f;
                            }
                            if (r = !1, u !== 2) continue;
                        }
                    }
                    if (u === 1) {
                        Ln(e, 0), ma(e, t, 0, !0);
                        break;
                    }
                    e: {
                        switch(a = e, r = u, r){
                            case 0:
                            case 1:
                                throw Error(s(345));
                            case 4:
                                if ((t & 4194048) !== t) break;
                            case 6:
                                ma(a, t, Jt, !fa);
                                break e;
                            case 2:
                                Ht = null;
                                break;
                            case 3:
                            case 5:
                                break;
                            default:
                                throw Error(s(329));
                        }
                        if ((t & 62914560) === t && (u = Yi + 300 - rt(), 10 < u)) {
                            if (ma(a, t, Jt, !fa), za(a, 0, !0) !== 0) break e;
                            Vl = t, a.timeoutHandle = Nh(ah.bind(null, a, l, Ht, Xi, rs, t, Jt, Wa, Bn, fa, r, "Throttled", -0, 0), u);
                            break e;
                        }
                        ah(a, l, Ht, Xi, rs, t, Jt, Wa, Bn, fa, r, null, -0, 0);
                    }
                }
                break;
            }while (!0);
            Ml(e);
        }
        function ah(e, t, l, a, u, r, f, h, p, z, H, Q, R, U) {
            if (e.timeoutHandle = -1, Q = t.subtreeFlags, Q & 8192 || (Q & 16785408) === 16785408) {
                Q = {
                    stylesheets: null,
                    count: 0,
                    imgCount: 0,
                    imgBytes: 0,
                    suspenseyImages: [],
                    waitingForImages: !0,
                    waitingForViewTransition: !1,
                    unsuspend: zl
                }, Wd(t, r, Q);
                var ee = (r & 62914560) === r ? Yi - rt() : (r & 4194048) === r ? Id - rt() : 0;
                if (ee = Bv(Q, ee), ee !== null) {
                    Vl = r, e.cancelPendingCommit = ee(oh.bind(null, e, t, r, l, a, u, f, h, p, H, Q, null, R, U)), ma(e, r, f, !z);
                    return;
                }
            }
            oh(e, t, r, l, a, u, f, h, p);
        }
        function $0(e) {
            for(var t = e;;){
                var l = t.tag;
                if ((l === 0 || l === 11 || l === 15) && t.flags & 16384 && (l = t.updateQueue, l !== null && (l = l.stores, l !== null))) for(var a = 0; a < l.length; a++){
                    var u = l[a], r = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Gt(r(), u)) return !1;
                    } catch  {
                        return !1;
                    }
                }
                if (l = t.child, t.subtreeFlags & 16384 && l !== null) l.return = t, t = l;
                else {
                    if (t === e) break;
                    for(; t.sibling === null;){
                        if (t.return === null || t.return === e) return !0;
                        t = t.return;
                    }
                    t.sibling.return = t.return, t = t.sibling;
                }
            }
            return !0;
        }
        function ma(e, t, l, a) {
            t &= ~is, t &= ~Wa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
            for(var u = t; 0 < u;){
                var r = 31 - Ot(u), f = 1 << r;
                a[r] = -1, u &= ~f;
            }
            l !== 0 && E(e, l, t);
        }
        function Vi() {
            return (we & 6) === 0 ? (Cu(0), !1) : !0;
        }
        function os() {
            if (Me !== null) {
                if (Ye === 0) var e = Me.return;
                else e = Me, Nl = Qa = null, _c(e), On = null, fu = 0, e = Me;
                for(; e !== null;)Bd(e.alternate, e), e = e.return;
                Me = null;
            }
        }
        function Ln(e, t) {
            var l = e.timeoutHandle;
            l !== -1 && (e.timeoutHandle = -1, vv(l)), l = e.cancelPendingCommit, l !== null && (e.cancelPendingCommit = null, l()), Vl = 0, os(), Je = e, Me = l = xl(e.current, null), Ce = t, Ye = 0, Kt = null, fa = !1, Nn = Ra(e, t), us = !1, Bn = Jt = is = Wa = oa = it = 0, Ht = Ou = null, rs = !1, (t & 8) !== 0 && (t |= t & 32);
            var a = e.entangledLanes;
            if (a !== 0) for(e = e.entanglements, a &= t; 0 < a;){
                var u = 31 - Ot(a), r = 1 << u;
                t |= e[u], a &= ~r;
            }
            return Xl = t, oi(), l;
        }
        function nh(e, t) {
            Se = null, B.H = pu, t === Dn || t === Si ? (t = bo(), Ye = 3) : t === yc ? (t = bo(), Ye = 4) : Ye = t === Xc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, Me === null && (it = 1, Ni(e, ll(t, e.current)));
        }
        function uh() {
            var e = Vt.current;
            return e === null ? !0 : (Ce & 4194048) === Ce ? il === null : (Ce & 62914560) === Ce || (Ce & 536870912) !== 0 ? e === il : !1;
        }
        function ih() {
            var e = B.H;
            return B.H = pu, e === null ? pu : e;
        }
        function rh() {
            var e = B.A;
            return B.A = F0, e;
        }
        function Zi() {
            it = 4, fa || (Ce & 4194048) !== Ce && Vt.current !== null || (Nn = !0), (oa & 134217727) === 0 && (Wa & 134217727) === 0 || Je === null || ma(Je, Ce, Jt, !1);
        }
        function ds(e, t, l) {
            var a = we;
            we |= 2;
            var u = ih(), r = rh();
            (Je !== e || Ce !== t) && (Xi = null, Ln(e, t)), t = !1;
            var f = it;
            e: do try {
                if (Ye !== 0 && Me !== null) {
                    var h = Me, p = Kt;
                    switch(Ye){
                        case 8:
                            os(), f = 6;
                            break e;
                        case 3:
                        case 2:
                        case 9:
                        case 6:
                            Vt.current === null && (t = !0);
                            var z = Ye;
                            if (Ye = 0, Kt = null, Hn(e, h, p, z), l && Nn) {
                                f = 0;
                                break e;
                            }
                            break;
                        default:
                            z = Ye, Ye = 0, Kt = null, Hn(e, h, p, z);
                    }
                }
                k0(), f = it;
                break;
            } catch (H) {
                nh(e, H);
            }
            while (!0);
            return t && e.shellSuspendCounter++, Nl = Qa = null, we = a, B.H = u, B.A = r, Me === null && (Je = null, Ce = 0, oi()), f;
        }
        function k0() {
            for(; Me !== null;)ch(Me);
        }
        function P0(e, t) {
            var l = we;
            we |= 2;
            var a = ih(), u = rh();
            Je !== e || Ce !== t ? (Xi = null, Gi = rt() + 500, Ln(e, t)) : Nn = Ra(e, t);
            e: do try {
                if (Ye !== 0 && Me !== null) {
                    t = Me;
                    var r = Kt;
                    t: switch(Ye){
                        case 1:
                            Ye = 0, Kt = null, Hn(e, t, r, 1);
                            break;
                        case 2:
                        case 9:
                            if (po(r)) {
                                Ye = 0, Kt = null, sh(t);
                                break;
                            }
                            t = function() {
                                Ye !== 2 && Ye !== 9 || Je !== e || (Ye = 7), Ml(e);
                            }, r.then(t, t);
                            break e;
                        case 3:
                            Ye = 7;
                            break e;
                        case 4:
                            Ye = 5;
                            break e;
                        case 7:
                            po(r) ? (Ye = 0, Kt = null, sh(t)) : (Ye = 0, Kt = null, Hn(e, t, r, 7));
                            break;
                        case 5:
                            var f = null;
                            switch(Me.tag){
                                case 26:
                                    f = Me.memoizedState;
                                case 5:
                                case 27:
                                    var h = Me;
                                    if (f ? Fh(f) : h.stateNode.complete) {
                                        Ye = 0, Kt = null;
                                        var p = h.sibling;
                                        if (p !== null) Me = p;
                                        else {
                                            var z = h.return;
                                            z !== null ? (Me = z, Ki(z)) : Me = null;
                                        }
                                        break t;
                                    }
                            }
                            Ye = 0, Kt = null, Hn(e, t, r, 5);
                            break;
                        case 6:
                            Ye = 0, Kt = null, Hn(e, t, r, 6);
                            break;
                        case 8:
                            os(), it = 6;
                            break e;
                        default:
                            throw Error(s(462));
                    }
                }
                I0();
                break;
            } catch (H) {
                nh(e, H);
            }
            while (!0);
            return Nl = Qa = null, B.H = a, B.A = u, we = l, Me !== null ? 0 : (Je = null, Ce = 0, oi(), it);
        }
        function I0() {
            for(; Me !== null && !Cr();)ch(Me);
        }
        function ch(e) {
            var t = Ud(e.alternate, e, Xl);
            e.memoizedProps = e.pendingProps, t === null ? Ki(e) : Me = t;
        }
        function sh(e) {
            var t = e, l = t.alternate;
            switch(t.tag){
                case 15:
                case 0:
                    t = Od(l, t, t.pendingProps, t.type, void 0, Ce);
                    break;
                case 11:
                    t = Od(l, t, t.pendingProps, t.type.render, t.ref, Ce);
                    break;
                case 5:
                    _c(t);
                default:
                    Bd(l, t), t = Me = io(t, Xl), t = Ud(l, t, Xl);
            }
            e.memoizedProps = e.pendingProps, t === null ? Ki(e) : Me = t;
        }
        function Hn(e, t, l, a) {
            Nl = Qa = null, _c(t), On = null, fu = 0;
            var u = t.return;
            try {
                if (Y0(e, u, t, l, Ce)) {
                    it = 1, Ni(e, ll(l, e.current)), Me = null;
                    return;
                }
            } catch (r) {
                if (u !== null) throw Me = u, r;
                it = 1, Ni(e, ll(l, e.current)), Me = null;
                return;
            }
            t.flags & 32768 ? (xe || a === 1 ? e = !0 : Nn || (Ce & 536870912) !== 0 ? e = !1 : (fa = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Vt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), fh(t, e)) : Ki(t);
        }
        function Ki(e) {
            var t = e;
            do {
                if ((t.flags & 32768) !== 0) {
                    fh(t, fa);
                    return;
                }
                e = t.return;
                var l = V0(t.alternate, t, Xl);
                if (l !== null) {
                    Me = l;
                    return;
                }
                if (t = t.sibling, t !== null) {
                    Me = t;
                    return;
                }
                Me = t = e;
            }while (t !== null);
            it === 0 && (it = 5);
        }
        function fh(e, t) {
            do {
                var l = Z0(e.alternate, e);
                if (l !== null) {
                    l.flags &= 32767, Me = l;
                    return;
                }
                if (l = e.return, l !== null && (l.flags |= 32768, l.subtreeFlags = 0, l.deletions = null), !t && (e = e.sibling, e !== null)) {
                    Me = e;
                    return;
                }
                Me = e = l;
            }while (e !== null);
            it = 6, Me = null;
        }
        function oh(e, t, l, a, u, r, f, h, p) {
            e.cancelPendingCommit = null;
            do Ji();
            while (pt !== 0);
            if ((we & 6) !== 0) throw Error(s(327));
            if (t !== null) {
                if (t === e.current) throw Error(s(177));
                if (r = t.lanes | t.childLanes, r |= ec, Ur(e, l, r, f, h, p), e === Je && (Me = Je = null, Ce = 0), jn = t, ha = e, Vl = l, cs = r, ss = u, eh = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, av(Qt, function() {
                    return vh(), null;
                })) : (e.callbackNode = null, e.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
                    a = B.T, B.T = null, u = Z.p, Z.p = 2, f = we, we |= 4;
                    try {
                        K0(e, t, l);
                    } finally{
                        we = f, Z.p = u, B.T = a;
                    }
                }
                pt = 1, dh(), hh(), mh();
            }
        }
        function dh() {
            if (pt === 1) {
                pt = 0;
                var e = ha, t = jn, l = (t.flags & 13878) !== 0;
                if ((t.subtreeFlags & 13878) !== 0 || l) {
                    l = B.T, B.T = null;
                    var a = Z.p;
                    Z.p = 2;
                    var u = we;
                    we |= 4;
                    try {
                        Kd(t, e);
                        var r = Ms, f = kf(e.containerInfo), h = r.focusedElem, p = r.selectionRange;
                        if (f !== h && h && h.ownerDocument && $f(h.ownerDocument.documentElement, h)) {
                            if (p !== null && Wr(h)) {
                                var z = p.start, H = p.end;
                                if (H === void 0 && (H = z), "selectionStart" in h) h.selectionStart = z, h.selectionEnd = Math.min(H, h.value.length);
                                else {
                                    var Q = h.ownerDocument || document, R = Q && Q.defaultView || window;
                                    if (R.getSelection) {
                                        var U = R.getSelection(), ee = h.textContent.length, se = Math.min(p.start, ee), Ke = p.end === void 0 ? se : Math.min(p.end, ee);
                                        !U.extend && se > Ke && (f = Ke, Ke = se, se = f);
                                        var M = Wf(h, se), A = Wf(h, Ke);
                                        if (M && A && (U.rangeCount !== 1 || U.anchorNode !== M.node || U.anchorOffset !== M.offset || U.focusNode !== A.node || U.focusOffset !== A.offset)) {
                                            var C = Q.createRange();
                                            C.setStart(M.node, M.offset), U.removeAllRanges(), se > Ke ? (U.addRange(C), U.extend(A.node, A.offset)) : (C.setEnd(A.node, A.offset), U.addRange(C));
                                        }
                                    }
                                }
                            }
                            for(Q = [], U = h; U = U.parentNode;)U.nodeType === 1 && Q.push({
                                element: U,
                                left: U.scrollLeft,
                                top: U.scrollTop
                            });
                            for(typeof h.focus == "function" && h.focus(), h = 0; h < Q.length; h++){
                                var q = Q[h];
                                q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
                            }
                        }
                        ur = !!Ts, Ms = Ts = null;
                    } finally{
                        we = u, Z.p = a, B.T = l;
                    }
                }
                e.current = t, pt = 2;
            }
        }
        function hh() {
            if (pt === 2) {
                pt = 0;
                var e = ha, t = jn, l = (t.flags & 8772) !== 0;
                if ((t.subtreeFlags & 8772) !== 0 || l) {
                    l = B.T, B.T = null;
                    var a = Z.p;
                    Z.p = 2;
                    var u = we;
                    we |= 4;
                    try {
                        Yd(e, t.alternate, t);
                    } finally{
                        we = u, Z.p = a, B.T = l;
                    }
                }
                pt = 3;
            }
        }
        function mh() {
            if (pt === 4 || pt === 3) {
                pt = 0, zr();
                var e = ha, t = jn, l = Vl, a = eh;
                (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? pt = 5 : (pt = 0, jn = ha = null, yh(e, e.pendingLanes));
                var u = e.pendingLanes;
                if (u === 0 && (da = null), K(l), t = t.stateNode, Dt && typeof Dt.onCommitFiberRoot == "function") try {
                    Dt.onCommitFiberRoot(xt, t, void 0, (t.current.flags & 128) === 128);
                } catch  {}
                if (a !== null) {
                    t = B.T, u = Z.p, Z.p = 2, B.T = null;
                    try {
                        for(var r = e.onRecoverableError, f = 0; f < a.length; f++){
                            var h = a[f];
                            r(h.value, {
                                componentStack: h.stack
                            });
                        }
                    } finally{
                        B.T = t, Z.p = u;
                    }
                }
                (Vl & 3) !== 0 && Ji(), Ml(e), u = e.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? e === fs ? _u++ : (_u = 0, fs = e) : _u = 0, Cu(0);
            }
        }
        function yh(e, t) {
            (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, cu(t)));
        }
        function Ji() {
            return dh(), hh(), mh(), vh();
        }
        function vh() {
            if (pt !== 5) return !1;
            var e = ha, t = cs;
            cs = 0;
            var l = K(Vl), a = B.T, u = Z.p;
            try {
                Z.p = 32 > l ? 32 : l, B.T = null, l = ss, ss = null;
                var r = ha, f = Vl;
                if (pt = 0, jn = ha = null, Vl = 0, (we & 6) !== 0) throw Error(s(331));
                var h = we;
                if (we |= 4, kd(r.current), Fd(r, r.current, f, l), we = h, Cu(0, !1), Dt && typeof Dt.onPostCommitFiberRoot == "function") try {
                    Dt.onPostCommitFiberRoot(xt, r);
                } catch  {}
                return !0;
            } finally{
                Z.p = u, B.T = a, yh(e, t);
            }
        }
        function gh(e, t, l) {
            t = ll(l, t), t = Gc(e.stateNode, t, 2), e = ia(e, t, 2), e !== null && (Ua(e, 2), Ml(e));
        }
        function Ge(e, t, l) {
            if (e.tag === 3) gh(e, e, l);
            else for(; t !== null;){
                if (t.tag === 3) {
                    gh(t, e, l);
                    break;
                } else if (t.tag === 1) {
                    var a = t.stateNode;
                    if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (da === null || !da.has(a))) {
                        e = ll(l, e), l = pd(2), a = ia(t, l, 2), a !== null && (Sd(l, a, t, e), Ua(a, 2), Ml(a));
                        break;
                    }
                }
                t = t.return;
            }
        }
        function hs(e, t, l) {
            var a = e.pingCache;
            if (a === null) {
                a = e.pingCache = new W0;
                var u = new Set;
                a.set(t, u);
            } else u = a.get(t), u === void 0 && (u = new Set, a.set(t, u));
            u.has(l) || (us = !0, u.add(l), e = ev.bind(null, e, t, l), t.then(e, e));
        }
        function ev(e, t, l) {
            var a = e.pingCache;
            a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & l, e.warmLanes &= ~l, Je === e && (Ce & l) === l && (it === 4 || it === 3 && (Ce & 62914560) === Ce && 300 > rt() - Yi ? (we & 2) === 0 && Ln(e, 0) : is |= l, Bn === Ce && (Bn = 0)), Ml(e);
        }
        function ph(e, t) {
            t === 0 && (t = xa()), e = Ha(e, t), e !== null && (Ua(e, t), Ml(e));
        }
        function tv(e) {
            var t = e.memoizedState, l = 0;
            t !== null && (l = t.retryLane), ph(e, l);
        }
        function lv(e, t) {
            var l = 0;
            switch(e.tag){
                case 31:
                case 13:
                    var a = e.stateNode, u = e.memoizedState;
                    u !== null && (l = u.retryLane);
                    break;
                case 19:
                    a = e.stateNode;
                    break;
                case 22:
                    a = e.stateNode._retryCache;
                    break;
                default:
                    throw Error(s(314));
            }
            a !== null && a.delete(t), ph(e, l);
        }
        function av(e, t) {
            return Jn(e, t);
        }
        var Fi = null, wn = null, ms = !1, Wi = !1, ys = !1, ya = 0;
        function Ml(e) {
            e !== wn && e.next === null && (wn === null ? Fi = wn = e : wn = wn.next = e), Wi = !0, ms || (ms = !0, uv());
        }
        function Cu(e, t) {
            if (!ys && Wi) {
                ys = !0;
                do for(var l = !1, a = Fi; a !== null;){
                    if (e !== 0) {
                        var u = a.pendingLanes;
                        if (u === 0) var r = 0;
                        else {
                            var f = a.suspendedLanes, h = a.pingedLanes;
                            r = (1 << 31 - Ot(42 | e) + 1) - 1, r &= u & ~(f & ~h), r = r & 201326741 ? r & 201326741 | 1 : r ? r | 2 : 0;
                        }
                        r !== 0 && (l = !0, Ah(a, r));
                    } else r = Ce, r = za(a, a === Je ? r : 0, a.cancelPendingCommit !== null || a.timeoutHandle !== -1), (r & 3) === 0 || Ra(a, r) || (l = !0, Ah(a, r));
                    a = a.next;
                }
                while (l);
                ys = !1;
            }
        }
        function nv() {
            Sh();
        }
        function Sh() {
            Wi = ms = !1;
            var e = 0;
            ya !== 0 && yv() && (e = ya);
            for(var t = rt(), l = null, a = Fi; a !== null;){
                var u = a.next, r = bh(a, t);
                r === 0 ? (a.next = null, l === null ? Fi = u : l.next = u, u === null && (wn = l)) : (l = a, (e !== 0 || (r & 3) !== 0) && (Wi = !0)), a = u;
            }
            pt !== 0 && pt !== 5 || Cu(e), ya !== 0 && (ya = 0);
        }
        function bh(e, t) {
            for(var l = e.suspendedLanes, a = e.pingedLanes, u = e.expirationTimes, r = e.pendingLanes & -62914561; 0 < r;){
                var f = 31 - Ot(r), h = 1 << f, p = u[f];
                p === -1 ? ((h & l) === 0 || (h & a) !== 0) && (u[f] = ti(h, t)) : p <= t && (e.expiredLanes |= h), r &= ~h;
            }
            if (t = Je, l = Ce, l = za(e, e === t ? l : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a = e.callbackNode, l === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) return a !== null && a !== null && Fn(a), e.callbackNode = null, e.callbackPriority = 0;
            if ((l & 3) === 0 || Ra(e, l)) {
                if (t = l & -l, t === e.callbackPriority) return t;
                switch(a !== null && Fn(a), K(l)){
                    case 2:
                    case 8:
                        l = rn;
                        break;
                    case 32:
                        l = Qt;
                        break;
                    case 268435456:
                        l = $n;
                        break;
                    default:
                        l = Qt;
                }
                return a = Eh.bind(null, e), l = Jn(l, a), e.callbackPriority = t, e.callbackNode = l, t;
            }
            return a !== null && a !== null && Fn(a), e.callbackPriority = 2, e.callbackNode = null, 2;
        }
        function Eh(e, t) {
            if (pt !== 0 && pt !== 5) return e.callbackNode = null, e.callbackPriority = 0, null;
            var l = e.callbackNode;
            if (Ji() && e.callbackNode !== l) return null;
            var a = Ce;
            return a = za(e, e === Je ? a : 0, e.cancelPendingCommit !== null || e.timeoutHandle !== -1), a === 0 ? null : (lh(e, a, t), bh(e, rt()), e.callbackNode != null && e.callbackNode === l ? Eh.bind(null, e) : null);
        }
        function Ah(e, t) {
            if (Ji()) return null;
            lh(e, t, !0);
        }
        function uv() {
            gv(function() {
                (we & 6) !== 0 ? Jn(Wn, nv) : Sh();
            });
        }
        function vs() {
            if (ya === 0) {
                var e = Tn;
                e === 0 && (e = Ca, Ca <<= 1, (Ca & 261888) === 0 && (Ca = 256)), ya = e;
            }
            return ya;
        }
        function Th(e) {
            return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : ai("" + e);
        }
        function Mh(e, t) {
            var l = t.ownerDocument.createElement("input");
            return l.name = t.name, l.value = t.value, e.id && l.setAttribute("form", e.id), t.parentNode.insertBefore(l, t), e = new FormData(e), l.parentNode.removeChild(l), e;
        }
        function iv(e, t, l, a, u) {
            if (t === "submit" && l && l.stateNode === u) {
                var r = Th((u[J] || null).action), f = a.submitter;
                f && (t = (t = f[J] || null) ? Th(t.formAction) : f.getAttribute("formAction"), t !== null && (r = t, f = null));
                var h = new ri("action", "action", null, a, u);
                e.push({
                    event: h,
                    listeners: [
                        {
                            instance: null,
                            listener: function() {
                                if (a.defaultPrevented) {
                                    if (ya !== 0) {
                                        var p = f ? Mh(u, f) : new FormData(u);
                                        Lc(l, {
                                            pending: !0,
                                            data: p,
                                            method: u.method,
                                            action: r
                                        }, null, p);
                                    }
                                } else typeof r == "function" && (h.preventDefault(), p = f ? Mh(u, f) : new FormData(u), Lc(l, {
                                    pending: !0,
                                    data: p,
                                    method: u.method,
                                    action: r
                                }, r, p));
                            },
                            currentTarget: u
                        }
                    ]
                });
            }
        }
        for(var gs = 0; gs < Ir.length; gs++){
            var ps = Ir[gs], rv = ps.toLowerCase(), cv = ps[0].toUpperCase() + ps.slice(1);
            ml(rv, "on" + cv);
        }
        ml(eo, "onAnimationEnd"), ml(to, "onAnimationIteration"), ml(lo, "onAnimationStart"), ml("dblclick", "onDoubleClick"), ml("focusin", "onFocus"), ml("focusout", "onBlur"), ml(M0, "onTransitionRun"), ml(D0, "onTransitionStart"), ml(O0, "onTransitionCancel"), ml(ao, "onTransitionEnd"), dl("onMouseEnter", [
            "mouseout",
            "mouseover"
        ]), dl("onMouseLeave", [
            "mouseout",
            "mouseover"
        ]), dl("onPointerEnter", [
            "pointerout",
            "pointerover"
        ]), dl("onPointerLeave", [
            "pointerout",
            "pointerover"
        ]), Pt("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Pt("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Pt("onBeforeInput", [
            "compositionend",
            "keypress",
            "textInput",
            "paste"
        ]), Pt("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Pt("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Pt("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
        var zu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), sv = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zu));
        function Dh(e, t) {
            t = (t & 4) !== 0;
            for(var l = 0; l < e.length; l++){
                var a = e[l], u = a.event;
                a = a.listeners;
                e: {
                    var r = void 0;
                    if (t) for(var f = a.length - 1; 0 <= f; f--){
                        var h = a[f], p = h.instance, z = h.currentTarget;
                        if (h = h.listener, p !== r && u.isPropagationStopped()) break e;
                        r = h, u.currentTarget = z;
                        try {
                            r(u);
                        } catch (H) {
                            fi(H);
                        }
                        u.currentTarget = null, r = p;
                    }
                    else for(f = 0; f < a.length; f++){
                        if (h = a[f], p = h.instance, z = h.currentTarget, h = h.listener, p !== r && u.isPropagationStopped()) break e;
                        r = h, u.currentTarget = z;
                        try {
                            r(u);
                        } catch (H) {
                            fi(H);
                        }
                        u.currentTarget = null, r = p;
                    }
                }
            }
        }
        function De(e, t) {
            var l = t[ye];
            l === void 0 && (l = t[ye] = new Set);
            var a = e + "__bubble";
            l.has(a) || (Oh(t, e, 2, !1), l.add(a));
        }
        function Ss(e, t, l) {
            var a = 0;
            t && (a |= 4), Oh(l, e, a, t);
        }
        var $i = "_reactListening" + Math.random().toString(36).slice(2);
        function bs(e) {
            if (!e[$i]) {
                e[$i] = !0, Pl.forEach(function(l) {
                    l !== "selectionchange" && (sv.has(l) || Ss(l, !1, e), Ss(l, !0, e));
                });
                var t = e.nodeType === 9 ? e : e.ownerDocument;
                t === null || t[$i] || (t[$i] = !0, Ss("selectionchange", !1, t));
            }
        }
        function Oh(e, t, l, a) {
            switch(tm(t)){
                case 2:
                    var u = Hv;
                    break;
                case 8:
                    u = wv;
                    break;
                default:
                    u = js;
            }
            l = u.bind(null, t, l, e), u = void 0, !Qr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? e.addEventListener(t, l, {
                capture: !0,
                passive: u
            }) : e.addEventListener(t, l, !0) : u !== void 0 ? e.addEventListener(t, l, {
                passive: u
            }) : e.addEventListener(t, l, !1);
        }
        function Es(e, t, l, a, u) {
            var r = a;
            if ((t & 1) === 0 && (t & 2) === 0 && a !== null) e: for(;;){
                if (a === null) return;
                var f = a.tag;
                if (f === 3 || f === 4) {
                    var h = a.stateNode.containerInfo;
                    if (h === u) break;
                    if (f === 4) for(f = a.return; f !== null;){
                        var p = f.tag;
                        if ((p === 3 || p === 4) && f.stateNode.containerInfo === u) return;
                        f = f.return;
                    }
                    for(; h !== null;){
                        if (f = Yt(h), f === null) return;
                        if (p = f.tag, p === 5 || p === 6 || p === 26 || p === 27) {
                            a = r = f;
                            continue e;
                        }
                        h = h.parentNode;
                    }
                }
                a = a.return;
            }
            Rf(function() {
                var z = r, H = wr(l), Q = [];
                e: {
                    var R = no.get(e);
                    if (R !== void 0) {
                        var U = ri, ee = e;
                        switch(e){
                            case "keypress":
                                if (ui(l) === 0) break e;
                            case "keydown":
                            case "keyup":
                                U = l0;
                                break;
                            case "focusin":
                                ee = "focus", U = Vr;
                                break;
                            case "focusout":
                                ee = "blur", U = Vr;
                                break;
                            case "beforeblur":
                            case "afterblur":
                                U = Vr;
                                break;
                            case "click":
                                if (l.button === 2) break e;
                            case "auxclick":
                            case "dblclick":
                            case "mousedown":
                            case "mousemove":
                            case "mouseup":
                            case "mouseout":
                            case "mouseover":
                            case "contextmenu":
                                U = Nf;
                                break;
                            case "drag":
                            case "dragend":
                            case "dragenter":
                            case "dragexit":
                            case "dragleave":
                            case "dragover":
                            case "dragstart":
                            case "drop":
                                U = Vy;
                                break;
                            case "touchcancel":
                            case "touchend":
                            case "touchmove":
                            case "touchstart":
                                U = u0;
                                break;
                            case eo:
                            case to:
                            case lo:
                                U = Jy;
                                break;
                            case ao:
                                U = r0;
                                break;
                            case "scroll":
                            case "scrollend":
                                U = Gy;
                                break;
                            case "wheel":
                                U = s0;
                                break;
                            case "copy":
                            case "cut":
                            case "paste":
                                U = Wy;
                                break;
                            case "gotpointercapture":
                            case "lostpointercapture":
                            case "pointercancel":
                            case "pointerdown":
                            case "pointermove":
                            case "pointerout":
                            case "pointerover":
                            case "pointerup":
                                U = jf;
                                break;
                            case "toggle":
                            case "beforetoggle":
                                U = o0;
                        }
                        var se = (t & 4) !== 0, Ke = !se && (e === "scroll" || e === "scrollend"), M = se ? R !== null ? R + "Capture" : null : R;
                        se = [];
                        for(var A = z, C; A !== null;){
                            var q = A;
                            if (C = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || C === null || M === null || (q = kn(A, M), q != null && se.push(Ru(A, q, C))), Ke) break;
                            A = A.return;
                        }
                        0 < se.length && (R = new U(R, ee, null, l, H), Q.push({
                            event: R,
                            listeners: se
                        }));
                    }
                }
                if ((t & 7) === 0) {
                    e: {
                        if (R = e === "mouseover" || e === "pointerover", U = e === "mouseout" || e === "pointerout", R && l !== Hr && (ee = l.relatedTarget || l.fromElement) && (Yt(ee) || ee[le])) break e;
                        if ((U || R) && (R = H.window === H ? H : (R = H.ownerDocument) ? R.defaultView || R.parentWindow : window, U ? (ee = l.relatedTarget || l.toElement, U = z, ee = ee ? Yt(ee) : null, ee !== null && (Ke = d(ee), se = ee.tag, ee !== Ke || se !== 5 && se !== 27 && se !== 6) && (ee = null)) : (U = null, ee = z), U !== ee)) {
                            if (se = Nf, q = "onMouseLeave", M = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (se = jf, q = "onPointerLeave", M = "onPointerEnter", A = "pointer"), Ke = U == null ? R : Ct(U), C = ee == null ? R : Ct(ee), R = new se(q, A + "leave", U, l, H), R.target = Ke, R.relatedTarget = C, q = null, Yt(H) === z && (se = new se(M, A + "enter", ee, l, H), se.target = C, se.relatedTarget = Ke, q = se), Ke = q, U && ee) t: {
                                for(se = fv, M = U, A = ee, C = 0, q = M; q; q = se(q))C++;
                                q = 0;
                                for(var ie = A; ie; ie = se(ie))q++;
                                for(; 0 < C - q;)M = se(M), C--;
                                for(; 0 < q - C;)A = se(A), q--;
                                for(; C--;){
                                    if (M === A || A !== null && M === A.alternate) {
                                        se = M;
                                        break t;
                                    }
                                    M = se(M), A = se(A);
                                }
                                se = null;
                            }
                            else se = null;
                            U !== null && _h(Q, R, U, se, !1), ee !== null && Ke !== null && _h(Q, Ke, ee, se, !0);
                        }
                    }
                    e: {
                        if (R = z ? Ct(z) : window, U = R.nodeName && R.nodeName.toLowerCase(), U === "select" || U === "input" && R.type === "file") var je = Xf;
                        else if (Yf(R)) if (Vf) je = E0;
                        else {
                            je = S0;
                            var ae = p0;
                        }
                        else U = R.nodeName, !U || U.toLowerCase() !== "input" || R.type !== "checkbox" && R.type !== "radio" ? z && Lr(z.elementType) && (je = Xf) : je = b0;
                        if (je && (je = je(e, z))) {
                            Gf(Q, je, l, H);
                            break e;
                        }
                        ae && ae(e, R, z), e === "focusout" && z && R.type === "number" && z.memoizedProps.value != null && jr(R, "number", R.value);
                    }
                    switch(ae = z ? Ct(z) : window, e){
                        case "focusin":
                            (Yf(ae) || ae.contentEditable === "true") && (yn = ae, $r = z, uu = null);
                            break;
                        case "focusout":
                            uu = $r = yn = null;
                            break;
                        case "mousedown":
                            kr = !0;
                            break;
                        case "contextmenu":
                        case "mouseup":
                        case "dragend":
                            kr = !1, Pf(Q, l, H);
                            break;
                        case "selectionchange":
                            if (T0) break;
                        case "keydown":
                        case "keyup":
                            Pf(Q, l, H);
                    }
                    var be;
                    if (Kr) e: {
                        switch(e){
                            case "compositionstart":
                                var ze = "onCompositionStart";
                                break e;
                            case "compositionend":
                                ze = "onCompositionEnd";
                                break e;
                            case "compositionupdate":
                                ze = "onCompositionUpdate";
                                break e;
                        }
                        ze = void 0;
                    }
                    else mn ? qf(e, l) && (ze = "onCompositionEnd") : e === "keydown" && l.keyCode === 229 && (ze = "onCompositionStart");
                    ze && (Lf && l.locale !== "ko" && (mn || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && mn && (be = xf()) : (Il = H, Yr = "value" in Il ? Il.value : Il.textContent, mn = !0)), ae = ki(z, ze), 0 < ae.length && (ze = new Bf(ze, e, null, l, H), Q.push({
                        event: ze,
                        listeners: ae
                    }), be ? ze.data = be : (be = Qf(l), be !== null && (ze.data = be)))), (be = h0 ? m0(e, l) : y0(e, l)) && (ze = ki(z, "onBeforeInput"), 0 < ze.length && (ae = new Bf("onBeforeInput", "beforeinput", null, l, H), Q.push({
                        event: ae,
                        listeners: ze
                    }), ae.data = be)), iv(Q, e, z, l, H);
                }
                Dh(Q, t);
            });
        }
        function Ru(e, t, l) {
            return {
                instance: e,
                listener: t,
                currentTarget: l
            };
        }
        function ki(e, t) {
            for(var l = t + "Capture", a = []; e !== null;){
                var u = e, r = u.stateNode;
                if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || r === null || (u = kn(e, l), u != null && a.unshift(Ru(e, u, r)), u = kn(e, t), u != null && a.push(Ru(e, u, r))), e.tag === 3) return a;
                e = e.return;
            }
            return [];
        }
        function fv(e) {
            if (e === null) return null;
            do e = e.return;
            while (e && e.tag !== 5 && e.tag !== 27);
            return e || null;
        }
        function _h(e, t, l, a, u) {
            for(var r = t._reactName, f = []; l !== null && l !== a;){
                var h = l, p = h.alternate, z = h.stateNode;
                if (h = h.tag, p !== null && p === a) break;
                h !== 5 && h !== 26 && h !== 27 || z === null || (p = z, u ? (z = kn(l, r), z != null && f.unshift(Ru(l, z, p))) : u || (z = kn(l, r), z != null && f.push(Ru(l, z, p)))), l = l.return;
            }
            f.length !== 0 && e.push({
                event: t,
                listeners: f
            });
        }
        var ov = /\r\n?/g, dv = /\u0000|\uFFFD/g;
        function Ch(e) {
            return (typeof e == "string" ? e : "" + e).replace(ov, `
`).replace(dv, "");
        }
        function zh(e, t) {
            return t = Ch(t), Ch(e) === t;
        }
        function Ze(e, t, l, a, u, r) {
            switch(l){
                case "children":
                    typeof a == "string" ? t === "body" || t === "textarea" && a === "" || on(e, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && on(e, "" + a);
                    break;
                case "className":
                    hl(e, "class", a);
                    break;
                case "tabIndex":
                    hl(e, "tabindex", a);
                    break;
                case "dir":
                case "role":
                case "viewBox":
                case "width":
                case "height":
                    hl(e, l, a);
                    break;
                case "style":
                    Cf(e, a, r);
                    break;
                case "data":
                    if (t !== "object") {
                        hl(e, "data", a);
                        break;
                    }
                case "src":
                case "href":
                    if (a === "" && (t !== "a" || l !== "href")) {
                        e.removeAttribute(l);
                        break;
                    }
                    if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    a = ai("" + a), e.setAttribute(l, a);
                    break;
                case "action":
                case "formAction":
                    if (typeof a == "function") {
                        e.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
                        break;
                    } else typeof r == "function" && (l === "formAction" ? (t !== "input" && Ze(e, t, "name", u.name, u, null), Ze(e, t, "formEncType", u.formEncType, u, null), Ze(e, t, "formMethod", u.formMethod, u, null), Ze(e, t, "formTarget", u.formTarget, u, null)) : (Ze(e, t, "encType", u.encType, u, null), Ze(e, t, "method", u.method, u, null), Ze(e, t, "target", u.target, u, null)));
                    if (a == null || typeof a == "symbol" || typeof a == "boolean") {
                        e.removeAttribute(l);
                        break;
                    }
                    a = ai("" + a), e.setAttribute(l, a);
                    break;
                case "onClick":
                    a != null && (e.onclick = zl);
                    break;
                case "onScroll":
                    a != null && De("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && De("scrollend", e);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                        if (l = a.__html, l != null) {
                            if (u.children != null) throw Error(s(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "multiple":
                    e.multiple = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "muted":
                    e.muted = a && typeof a != "function" && typeof a != "symbol";
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "defaultValue":
                case "defaultChecked":
                case "innerHTML":
                case "ref":
                    break;
                case "autoFocus":
                    break;
                case "xlinkHref":
                    if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
                        e.removeAttribute("xlink:href");
                        break;
                    }
                    l = ai("" + a), e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
                    break;
                case "contentEditable":
                case "spellCheck":
                case "draggable":
                case "value":
                case "autoReverse":
                case "externalResourcesRequired":
                case "focusable":
                case "preserveAlpha":
                    a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "" + a) : e.removeAttribute(l);
                    break;
                case "inert":
                case "allowFullScreen":
                case "async":
                case "autoPlay":
                case "controls":
                case "default":
                case "defer":
                case "disabled":
                case "disablePictureInPicture":
                case "disableRemotePlayback":
                case "formNoValidate":
                case "hidden":
                case "loop":
                case "noModule":
                case "noValidate":
                case "open":
                case "playsInline":
                case "readOnly":
                case "required":
                case "reversed":
                case "scoped":
                case "seamless":
                case "itemScope":
                    a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, "") : e.removeAttribute(l);
                    break;
                case "capture":
                case "download":
                    a === !0 ? e.setAttribute(l, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(l, a) : e.removeAttribute(l);
                    break;
                case "cols":
                case "rows":
                case "size":
                case "span":
                    a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(l, a) : e.removeAttribute(l);
                    break;
                case "rowSpan":
                case "start":
                    a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(l) : e.setAttribute(l, a);
                    break;
                case "popover":
                    De("beforetoggle", e), De("toggle", e), ke(e, "popover", a);
                    break;
                case "xlinkActuate":
                    It(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
                    break;
                case "xlinkArcrole":
                    It(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
                    break;
                case "xlinkRole":
                    It(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
                    break;
                case "xlinkShow":
                    It(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
                    break;
                case "xlinkTitle":
                    It(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
                    break;
                case "xlinkType":
                    It(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
                    break;
                case "xmlBase":
                    It(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
                    break;
                case "xmlLang":
                    It(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
                    break;
                case "xmlSpace":
                    It(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
                    break;
                case "is":
                    ke(e, "is", a);
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    (!(2 < l.length) || l[0] !== "o" && l[0] !== "O" || l[1] !== "n" && l[1] !== "N") && (l = Qy.get(l) || l, ke(e, l, a));
            }
        }
        function As(e, t, l, a, u, r) {
            switch(l){
                case "style":
                    Cf(e, a, r);
                    break;
                case "dangerouslySetInnerHTML":
                    if (a != null) {
                        if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
                        if (l = a.__html, l != null) {
                            if (u.children != null) throw Error(s(60));
                            e.innerHTML = l;
                        }
                    }
                    break;
                case "children":
                    typeof a == "string" ? on(e, a) : (typeof a == "number" || typeof a == "bigint") && on(e, "" + a);
                    break;
                case "onScroll":
                    a != null && De("scroll", e);
                    break;
                case "onScrollEnd":
                    a != null && De("scrollend", e);
                    break;
                case "onClick":
                    a != null && (e.onclick = zl);
                    break;
                case "suppressContentEditableWarning":
                case "suppressHydrationWarning":
                case "innerHTML":
                case "ref":
                    break;
                case "innerText":
                case "textContent":
                    break;
                default:
                    if (!bl.hasOwnProperty(l)) e: {
                        if (l[0] === "o" && l[1] === "n" && (u = l.endsWith("Capture"), t = l.slice(2, u ? l.length - 7 : void 0), r = e[J] || null, r = r != null ? r[l] : null, typeof r == "function" && e.removeEventListener(t, r, u), typeof a == "function")) {
                            typeof r != "function" && r !== null && (l in e ? e[l] = null : e.hasAttribute(l) && e.removeAttribute(l)), e.addEventListener(t, a, u);
                            break e;
                        }
                        l in e ? e[l] = a : a === !0 ? e.setAttribute(l, "") : ke(e, l, a);
                    }
            }
        }
        function Mt(e, t, l) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "img":
                    De("error", e), De("load", e);
                    var a = !1, u = !1, r;
                    for(r in l)if (l.hasOwnProperty(r)) {
                        var f = l[r];
                        if (f != null) switch(r){
                            case "src":
                                a = !0;
                                break;
                            case "srcSet":
                                u = !0;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                throw Error(s(137, t));
                            default:
                                Ze(e, t, r, f, l, null);
                        }
                    }
                    u && Ze(e, t, "srcSet", l.srcSet, l, null), a && Ze(e, t, "src", l.src, l, null);
                    return;
                case "input":
                    De("invalid", e);
                    var h = r = f = u = null, p = null, z = null;
                    for(a in l)if (l.hasOwnProperty(a)) {
                        var H = l[a];
                        if (H != null) switch(a){
                            case "name":
                                u = H;
                                break;
                            case "type":
                                f = H;
                                break;
                            case "checked":
                                p = H;
                                break;
                            case "defaultChecked":
                                z = H;
                                break;
                            case "value":
                                r = H;
                                break;
                            case "defaultValue":
                                h = H;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (H != null) throw Error(s(137, t));
                                break;
                            default:
                                Ze(e, t, a, H, l, null);
                        }
                    }
                    Mf(e, r, h, p, z, f, u, !1);
                    return;
                case "select":
                    De("invalid", e), a = f = r = null;
                    for(u in l)if (l.hasOwnProperty(u) && (h = l[u], h != null)) switch(u){
                        case "value":
                            r = h;
                            break;
                        case "defaultValue":
                            f = h;
                            break;
                        case "multiple":
                            a = h;
                        default:
                            Ze(e, t, u, h, l, null);
                    }
                    t = r, l = f, e.multiple = !!a, t != null ? fn(e, !!a, t, !1) : l != null && fn(e, !!a, l, !0);
                    return;
                case "textarea":
                    De("invalid", e), r = u = a = null;
                    for(f in l)if (l.hasOwnProperty(f) && (h = l[f], h != null)) switch(f){
                        case "value":
                            a = h;
                            break;
                        case "defaultValue":
                            u = h;
                            break;
                        case "children":
                            r = h;
                            break;
                        case "dangerouslySetInnerHTML":
                            if (h != null) throw Error(s(91));
                            break;
                        default:
                            Ze(e, t, f, h, l, null);
                    }
                    Of(e, a, u, r);
                    return;
                case "option":
                    for(p in l)if (l.hasOwnProperty(p) && (a = l[p], a != null)) switch(p){
                        case "selected":
                            e.selected = a && typeof a != "function" && typeof a != "symbol";
                            break;
                        default:
                            Ze(e, t, p, a, l, null);
                    }
                    return;
                case "dialog":
                    De("beforetoggle", e), De("toggle", e), De("cancel", e), De("close", e);
                    break;
                case "iframe":
                case "object":
                    De("load", e);
                    break;
                case "video":
                case "audio":
                    for(a = 0; a < zu.length; a++)De(zu[a], e);
                    break;
                case "image":
                    De("error", e), De("load", e);
                    break;
                case "details":
                    De("toggle", e);
                    break;
                case "embed":
                case "source":
                case "link":
                    De("error", e), De("load", e);
                case "area":
                case "base":
                case "br":
                case "col":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "track":
                case "wbr":
                case "menuitem":
                    for(z in l)if (l.hasOwnProperty(z) && (a = l[z], a != null)) switch(z){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            throw Error(s(137, t));
                        default:
                            Ze(e, t, z, a, l, null);
                    }
                    return;
                default:
                    if (Lr(t)) {
                        for(H in l)l.hasOwnProperty(H) && (a = l[H], a !== void 0 && As(e, t, H, a, l, void 0));
                        return;
                    }
            }
            for(h in l)l.hasOwnProperty(h) && (a = l[h], a != null && Ze(e, t, h, a, l, null));
        }
        function hv(e, t, l, a) {
            switch(t){
                case "div":
                case "span":
                case "svg":
                case "path":
                case "a":
                case "g":
                case "p":
                case "li":
                    break;
                case "input":
                    var u = null, r = null, f = null, h = null, p = null, z = null, H = null;
                    for(U in l){
                        var Q = l[U];
                        if (l.hasOwnProperty(U) && Q != null) switch(U){
                            case "checked":
                                break;
                            case "value":
                                break;
                            case "defaultValue":
                                p = Q;
                            default:
                                a.hasOwnProperty(U) || Ze(e, t, U, null, a, Q);
                        }
                    }
                    for(var R in a){
                        var U = a[R];
                        if (Q = l[R], a.hasOwnProperty(R) && (U != null || Q != null)) switch(R){
                            case "type":
                                r = U;
                                break;
                            case "name":
                                u = U;
                                break;
                            case "checked":
                                z = U;
                                break;
                            case "defaultChecked":
                                H = U;
                                break;
                            case "value":
                                f = U;
                                break;
                            case "defaultValue":
                                h = U;
                                break;
                            case "children":
                            case "dangerouslySetInnerHTML":
                                if (U != null) throw Error(s(137, t));
                                break;
                            default:
                                U !== Q && Ze(e, t, R, U, a, Q);
                        }
                    }
                    Br(e, f, h, p, z, H, r, u);
                    return;
                case "select":
                    U = f = h = R = null;
                    for(r in l)if (p = l[r], l.hasOwnProperty(r) && p != null) switch(r){
                        case "value":
                            break;
                        case "multiple":
                            U = p;
                        default:
                            a.hasOwnProperty(r) || Ze(e, t, r, null, a, p);
                    }
                    for(u in a)if (r = a[u], p = l[u], a.hasOwnProperty(u) && (r != null || p != null)) switch(u){
                        case "value":
                            R = r;
                            break;
                        case "defaultValue":
                            h = r;
                            break;
                        case "multiple":
                            f = r;
                        default:
                            r !== p && Ze(e, t, u, r, a, p);
                    }
                    t = h, l = f, a = U, R != null ? fn(e, !!l, R, !1) : !!a != !!l && (t != null ? fn(e, !!l, t, !0) : fn(e, !!l, l ? [] : "", !1));
                    return;
                case "textarea":
                    U = R = null;
                    for(h in l)if (u = l[h], l.hasOwnProperty(h) && u != null && !a.hasOwnProperty(h)) switch(h){
                        case "value":
                            break;
                        case "children":
                            break;
                        default:
                            Ze(e, t, h, null, a, u);
                    }
                    for(f in a)if (u = a[f], r = l[f], a.hasOwnProperty(f) && (u != null || r != null)) switch(f){
                        case "value":
                            R = u;
                            break;
                        case "defaultValue":
                            U = u;
                            break;
                        case "children":
                            break;
                        case "dangerouslySetInnerHTML":
                            if (u != null) throw Error(s(91));
                            break;
                        default:
                            u !== r && Ze(e, t, f, u, a, r);
                    }
                    Df(e, R, U);
                    return;
                case "option":
                    for(var ee in l)if (R = l[ee], l.hasOwnProperty(ee) && R != null && !a.hasOwnProperty(ee)) switch(ee){
                        case "selected":
                            e.selected = !1;
                            break;
                        default:
                            Ze(e, t, ee, null, a, R);
                    }
                    for(p in a)if (R = a[p], U = l[p], a.hasOwnProperty(p) && R !== U && (R != null || U != null)) switch(p){
                        case "selected":
                            e.selected = R && typeof R != "function" && typeof R != "symbol";
                            break;
                        default:
                            Ze(e, t, p, R, a, U);
                    }
                    return;
                case "img":
                case "link":
                case "area":
                case "base":
                case "br":
                case "col":
                case "embed":
                case "hr":
                case "keygen":
                case "meta":
                case "param":
                case "source":
                case "track":
                case "wbr":
                case "menuitem":
                    for(var se in l)R = l[se], l.hasOwnProperty(se) && R != null && !a.hasOwnProperty(se) && Ze(e, t, se, null, a, R);
                    for(z in a)if (R = a[z], U = l[z], a.hasOwnProperty(z) && R !== U && (R != null || U != null)) switch(z){
                        case "children":
                        case "dangerouslySetInnerHTML":
                            if (R != null) throw Error(s(137, t));
                            break;
                        default:
                            Ze(e, t, z, R, a, U);
                    }
                    return;
                default:
                    if (Lr(t)) {
                        for(var Ke in l)R = l[Ke], l.hasOwnProperty(Ke) && R !== void 0 && !a.hasOwnProperty(Ke) && As(e, t, Ke, void 0, a, R);
                        for(H in a)R = a[H], U = l[H], !a.hasOwnProperty(H) || R === U || R === void 0 && U === void 0 || As(e, t, H, R, a, U);
                        return;
                    }
            }
            for(var M in l)R = l[M], l.hasOwnProperty(M) && R != null && !a.hasOwnProperty(M) && Ze(e, t, M, null, a, R);
            for(Q in a)R = a[Q], U = l[Q], !a.hasOwnProperty(Q) || R === U || R == null && U == null || Ze(e, t, Q, R, a, U);
        }
        function Rh(e) {
            switch(e){
                case "css":
                case "script":
                case "font":
                case "img":
                case "image":
                case "input":
                case "link":
                    return !0;
                default:
                    return !1;
            }
        }
        function mv() {
            if (typeof performance.getEntriesByType == "function") {
                for(var e = 0, t = 0, l = performance.getEntriesByType("resource"), a = 0; a < l.length; a++){
                    var u = l[a], r = u.transferSize, f = u.initiatorType, h = u.duration;
                    if (r && h && Rh(f)) {
                        for(f = 0, h = u.responseEnd, a += 1; a < l.length; a++){
                            var p = l[a], z = p.startTime;
                            if (z > h) break;
                            var H = p.transferSize, Q = p.initiatorType;
                            H && Rh(Q) && (p = p.responseEnd, f += H * (p < h ? 1 : (h - z) / (p - z)));
                        }
                        if (--a, t += 8 * (r + f) / (u.duration / 1e3), e++, 10 < e) break;
                    }
                }
                if (0 < e) return t / e / 1e6;
            }
            return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
        }
        var Ts = null, Ms = null;
        function Pi(e) {
            return e.nodeType === 9 ? e : e.ownerDocument;
        }
        function xh(e) {
            switch(e){
                case "http://www.w3.org/2000/svg":
                    return 1;
                case "http://www.w3.org/1998/Math/MathML":
                    return 2;
                default:
                    return 0;
            }
        }
        function Uh(e, t) {
            if (e === 0) switch(t){
                case "svg":
                    return 1;
                case "math":
                    return 2;
                default:
                    return 0;
            }
            return e === 1 && t === "foreignObject" ? 0 : e;
        }
        function Ds(e, t) {
            return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
        }
        var Os = null;
        function yv() {
            var e = window.event;
            return e && e.type === "popstate" ? e === Os ? !1 : (Os = e, !0) : (Os = null, !1);
        }
        var Nh = typeof setTimeout == "function" ? setTimeout : void 0, vv = typeof clearTimeout == "function" ? clearTimeout : void 0, Bh = typeof Promise == "function" ? Promise : void 0, gv = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bh < "u" ? function(e) {
            return Bh.resolve(null).then(e).catch(pv);
        } : Nh;
        function pv(e) {
            setTimeout(function() {
                throw e;
            });
        }
        function va(e) {
            return e === "head";
        }
        function jh(e, t) {
            var l = t, a = 0;
            do {
                var u = l.nextSibling;
                if (e.removeChild(l), u && u.nodeType === 8) if (l = u.data, l === "/$" || l === "/&") {
                    if (a === 0) {
                        e.removeChild(u), Gn(t);
                        return;
                    }
                    a--;
                } else if (l === "$" || l === "$?" || l === "$~" || l === "$!" || l === "&") a++;
                else if (l === "html") xu(e.ownerDocument.documentElement);
                else if (l === "head") {
                    l = e.ownerDocument.head, xu(l);
                    for(var r = l.firstChild; r;){
                        var f = r.nextSibling, h = r.nodeName;
                        r[Te] || h === "SCRIPT" || h === "STYLE" || h === "LINK" && r.rel.toLowerCase() === "stylesheet" || l.removeChild(r), r = f;
                    }
                } else l === "body" && xu(e.ownerDocument.body);
                l = u;
            }while (l);
            Gn(t);
        }
        function Lh(e, t) {
            var l = e;
            e = 0;
            do {
                var a = l.nextSibling;
                if (l.nodeType === 1 ? t ? (l._stashedDisplay = l.style.display, l.style.display = "none") : (l.style.display = l._stashedDisplay || "", l.getAttribute("style") === "" && l.removeAttribute("style")) : l.nodeType === 3 && (t ? (l._stashedText = l.nodeValue, l.nodeValue = "") : l.nodeValue = l._stashedText || ""), a && a.nodeType === 8) if (l = a.data, l === "/$") {
                    if (e === 0) break;
                    e--;
                } else l !== "$" && l !== "$?" && l !== "$~" && l !== "$!" || e++;
                l = a;
            }while (l);
        }
        function _s(e) {
            var t = e.firstChild;
            for(t && t.nodeType === 10 && (t = t.nextSibling); t;){
                var l = t;
                switch(t = t.nextSibling, l.nodeName){
                    case "HTML":
                    case "HEAD":
                    case "BODY":
                        _s(l), We(l);
                        continue;
                    case "SCRIPT":
                    case "STYLE":
                        continue;
                    case "LINK":
                        if (l.rel.toLowerCase() === "stylesheet") continue;
                }
                e.removeChild(l);
            }
        }
        function Sv(e, t, l, a) {
            for(; e.nodeType === 1;){
                var u = l;
                if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
                    if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
                } else if (a) {
                    if (!e[Te]) switch(t){
                        case "meta":
                            if (!e.hasAttribute("itemprop")) break;
                            return e;
                        case "link":
                            if (r = e.getAttribute("rel"), r === "stylesheet" && e.hasAttribute("data-precedence")) break;
                            if (r !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title)) break;
                            return e;
                        case "style":
                            if (e.hasAttribute("data-precedence")) break;
                            return e;
                        case "script":
                            if (r = e.getAttribute("src"), (r !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && r && e.hasAttribute("async") && !e.hasAttribute("itemprop")) break;
                            return e;
                        default:
                            return e;
                    }
                } else if (t === "input" && e.type === "hidden") {
                    var r = u.name == null ? null : "" + u.name;
                    if (u.type === "hidden" && e.getAttribute("name") === r) return e;
                } else return e;
                if (e = rl(e.nextSibling), e === null) break;
            }
            return null;
        }
        function bv(e, t, l) {
            if (t === "") return null;
            for(; e.nodeType !== 3;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !l || (e = rl(e.nextSibling), e === null)) return null;
            return e;
        }
        function Hh(e, t) {
            for(; e.nodeType !== 8;)if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = rl(e.nextSibling), e === null)) return null;
            return e;
        }
        function Cs(e) {
            return e.data === "$?" || e.data === "$~";
        }
        function zs(e) {
            return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
        }
        function Ev(e, t) {
            var l = e.ownerDocument;
            if (e.data === "$~") e._reactRetry = t;
            else if (e.data !== "$?" || l.readyState !== "loading") t();
            else {
                var a = function() {
                    t(), l.removeEventListener("DOMContentLoaded", a);
                };
                l.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
            }
        }
        function rl(e) {
            for(; e != null; e = e.nextSibling){
                var t = e.nodeType;
                if (t === 1 || t === 3) break;
                if (t === 8) {
                    if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F") break;
                    if (t === "/$" || t === "/&") return null;
                }
            }
            return e;
        }
        var Rs = null;
        function wh(e) {
            e = e.nextSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var l = e.data;
                    if (l === "/$" || l === "/&") {
                        if (t === 0) return rl(e.nextSibling);
                        t--;
                    } else l !== "$" && l !== "$!" && l !== "$?" && l !== "$~" && l !== "&" || t++;
                }
                e = e.nextSibling;
            }
            return null;
        }
        function qh(e) {
            e = e.previousSibling;
            for(var t = 0; e;){
                if (e.nodeType === 8) {
                    var l = e.data;
                    if (l === "$" || l === "$!" || l === "$?" || l === "$~" || l === "&") {
                        if (t === 0) return e;
                        t--;
                    } else l !== "/$" && l !== "/&" || t++;
                }
                e = e.previousSibling;
            }
            return null;
        }
        function Qh(e, t, l) {
            switch(t = Pi(l), e){
                case "html":
                    if (e = t.documentElement, !e) throw Error(s(452));
                    return e;
                case "head":
                    if (e = t.head, !e) throw Error(s(453));
                    return e;
                case "body":
                    if (e = t.body, !e) throw Error(s(454));
                    return e;
                default:
                    throw Error(s(451));
            }
        }
        function xu(e) {
            for(var t = e.attributes; t.length;)e.removeAttributeNode(t[0]);
            We(e);
        }
        var cl = new Map, Yh = new Set;
        function Ii(e) {
            return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
        }
        var Zl = Z.d;
        Z.d = {
            f: Av,
            r: Tv,
            D: Mv,
            C: Dv,
            L: Ov,
            m: _v,
            X: zv,
            S: Cv,
            M: Rv
        };
        function Av() {
            var e = Zl.f(), t = Vi();
            return e || t;
        }
        function Tv(e) {
            var t = kt(e);
            t !== null && t.tag === 5 && t.type === "form" ? nd(t) : Zl.r(e);
        }
        var qn = typeof document > "u" ? null : document;
        function Gh(e, t, l) {
            var a = qn;
            if (a && typeof t == "string" && t) {
                var u = el(t);
                u = 'link[rel="' + e + '"][href="' + u + '"]', typeof l == "string" && (u += '[crossorigin="' + l + '"]'), Yh.has(u) || (Yh.add(u), e = {
                    rel: e,
                    crossOrigin: l,
                    href: t
                }, a.querySelector(u) === null && (t = a.createElement("link"), Mt(t, "link", e), nt(t), a.head.appendChild(t)));
            }
        }
        function Mv(e) {
            Zl.D(e), Gh("dns-prefetch", e, null);
        }
        function Dv(e, t) {
            Zl.C(e, t), Gh("preconnect", e, t);
        }
        function Ov(e, t, l) {
            Zl.L(e, t, l);
            var a = qn;
            if (a && e && t) {
                var u = 'link[rel="preload"][as="' + el(t) + '"]';
                t === "image" && l && l.imageSrcSet ? (u += '[imagesrcset="' + el(l.imageSrcSet) + '"]', typeof l.imageSizes == "string" && (u += '[imagesizes="' + el(l.imageSizes) + '"]')) : u += '[href="' + el(e) + '"]';
                var r = u;
                switch(t){
                    case "style":
                        r = Qn(e);
                        break;
                    case "script":
                        r = Yn(e);
                }
                cl.has(r) || (e = S({
                    rel: "preload",
                    href: t === "image" && l && l.imageSrcSet ? void 0 : e,
                    as: t
                }, l), cl.set(r, e), a.querySelector(u) !== null || t === "style" && a.querySelector(Uu(r)) || t === "script" && a.querySelector(Nu(r)) || (t = a.createElement("link"), Mt(t, "link", e), nt(t), a.head.appendChild(t)));
            }
        }
        function _v(e, t) {
            Zl.m(e, t);
            var l = qn;
            if (l && e) {
                var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + el(a) + '"][href="' + el(e) + '"]', r = u;
                switch(a){
                    case "audioworklet":
                    case "paintworklet":
                    case "serviceworker":
                    case "sharedworker":
                    case "worker":
                    case "script":
                        r = Yn(e);
                }
                if (!cl.has(r) && (e = S({
                    rel: "modulepreload",
                    href: e
                }, t), cl.set(r, e), l.querySelector(u) === null)) {
                    switch(a){
                        case "audioworklet":
                        case "paintworklet":
                        case "serviceworker":
                        case "sharedworker":
                        case "worker":
                        case "script":
                            if (l.querySelector(Nu(r))) return;
                    }
                    a = l.createElement("link"), Mt(a, "link", e), nt(a), l.head.appendChild(a);
                }
            }
        }
        function Cv(e, t, l) {
            Zl.S(e, t, l);
            var a = qn;
            if (a && e) {
                var u = bt(a).hoistableStyles, r = Qn(e);
                t = t || "default";
                var f = u.get(r);
                if (!f) {
                    var h = {
                        loading: 0,
                        preload: null
                    };
                    if (f = a.querySelector(Uu(r))) h.loading = 5;
                    else {
                        e = S({
                            rel: "stylesheet",
                            href: e,
                            "data-precedence": t
                        }, l), (l = cl.get(r)) && xs(e, l);
                        var p = f = a.createElement("link");
                        nt(p), Mt(p, "link", e), p._p = new Promise(function(z, H) {
                            p.onload = z, p.onerror = H;
                        }), p.addEventListener("load", function() {
                            h.loading |= 1;
                        }), p.addEventListener("error", function() {
                            h.loading |= 2;
                        }), h.loading |= 4, er(f, t, a);
                    }
                    f = {
                        type: "stylesheet",
                        instance: f,
                        count: 1,
                        state: h
                    }, u.set(r, f);
                }
            }
        }
        function zv(e, t) {
            Zl.X(e, t);
            var l = qn;
            if (l && e) {
                var a = bt(l).hoistableScripts, u = Yn(e), r = a.get(u);
                r || (r = l.querySelector(Nu(u)), r || (e = S({
                    src: e,
                    async: !0
                }, t), (t = cl.get(u)) && Us(e, t), r = l.createElement("script"), nt(r), Mt(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, a.set(u, r));
            }
        }
        function Rv(e, t) {
            Zl.M(e, t);
            var l = qn;
            if (l && e) {
                var a = bt(l).hoistableScripts, u = Yn(e), r = a.get(u);
                r || (r = l.querySelector(Nu(u)), r || (e = S({
                    src: e,
                    async: !0,
                    type: "module"
                }, t), (t = cl.get(u)) && Us(e, t), r = l.createElement("script"), nt(r), Mt(r, "link", e), l.head.appendChild(r)), r = {
                    type: "script",
                    instance: r,
                    count: 1,
                    state: null
                }, a.set(u, r));
            }
        }
        function Xh(e, t, l, a) {
            var u = (u = me.current) ? Ii(u) : null;
            if (!u) throw Error(s(446));
            switch(e){
                case "meta":
                case "title":
                    return null;
                case "style":
                    return typeof l.precedence == "string" && typeof l.href == "string" ? (t = Qn(l.href), l = bt(u).hoistableStyles, a = l.get(t), a || (a = {
                        type: "style",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                case "link":
                    if (l.rel === "stylesheet" && typeof l.href == "string" && typeof l.precedence == "string") {
                        e = Qn(l.href);
                        var r = bt(u).hoistableStyles, f = r.get(e);
                        if (f || (u = u.ownerDocument || u, f = {
                            type: "stylesheet",
                            instance: null,
                            count: 0,
                            state: {
                                loading: 0,
                                preload: null
                            }
                        }, r.set(e, f), (r = u.querySelector(Uu(e))) && !r._p && (f.instance = r, f.state.loading = 5), cl.has(e) || (l = {
                            rel: "preload",
                            as: "style",
                            href: l.href,
                            crossOrigin: l.crossOrigin,
                            integrity: l.integrity,
                            media: l.media,
                            hrefLang: l.hrefLang,
                            referrerPolicy: l.referrerPolicy
                        }, cl.set(e, l), r || xv(u, e, l, f.state))), t && a === null) throw Error(s(528, ""));
                        return f;
                    }
                    if (t && a !== null) throw Error(s(529, ""));
                    return null;
                case "script":
                    return t = l.async, l = l.src, typeof l == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = Yn(l), l = bt(u).hoistableScripts, a = l.get(t), a || (a = {
                        type: "script",
                        instance: null,
                        count: 0,
                        state: null
                    }, l.set(t, a)), a) : {
                        type: "void",
                        instance: null,
                        count: 0,
                        state: null
                    };
                default:
                    throw Error(s(444, e));
            }
        }
        function Qn(e) {
            return 'href="' + el(e) + '"';
        }
        function Uu(e) {
            return 'link[rel="stylesheet"][' + e + "]";
        }
        function Vh(e) {
            return S({}, e, {
                "data-precedence": e.precedence,
                precedence: null
            });
        }
        function xv(e, t, l, a) {
            e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = e.createElement("link"), a.preload = t, t.addEventListener("load", function() {
                return a.loading |= 1;
            }), t.addEventListener("error", function() {
                return a.loading |= 2;
            }), Mt(t, "link", l), nt(t), e.head.appendChild(t));
        }
        function Yn(e) {
            return '[src="' + el(e) + '"]';
        }
        function Nu(e) {
            return "script[async]" + e;
        }
        function Zh(e, t, l) {
            if (t.count++, t.instance === null) switch(t.type){
                case "style":
                    var a = e.querySelector('style[data-href~="' + el(l.href) + '"]');
                    if (a) return t.instance = a, nt(a), a;
                    var u = S({}, l, {
                        "data-href": l.href,
                        "data-precedence": l.precedence,
                        href: null,
                        precedence: null
                    });
                    return a = (e.ownerDocument || e).createElement("style"), nt(a), Mt(a, "style", u), er(a, l.precedence, e), t.instance = a;
                case "stylesheet":
                    u = Qn(l.href);
                    var r = e.querySelector(Uu(u));
                    if (r) return t.state.loading |= 4, t.instance = r, nt(r), r;
                    a = Vh(l), (u = cl.get(u)) && xs(a, u), r = (e.ownerDocument || e).createElement("link"), nt(r);
                    var f = r;
                    return f._p = new Promise(function(h, p) {
                        f.onload = h, f.onerror = p;
                    }), Mt(r, "link", a), t.state.loading |= 4, er(r, l.precedence, e), t.instance = r;
                case "script":
                    return r = Yn(l.src), (u = e.querySelector(Nu(r))) ? (t.instance = u, nt(u), u) : (a = l, (u = cl.get(r)) && (a = S({}, l), Us(a, u)), e = e.ownerDocument || e, u = e.createElement("script"), nt(u), Mt(u, "link", a), e.head.appendChild(u), t.instance = u);
                case "void":
                    return null;
                default:
                    throw Error(s(443, t.type));
            }
            else t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, er(a, l.precedence, e));
            return t.instance;
        }
        function er(e, t, l) {
            for(var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, r = u, f = 0; f < a.length; f++){
                var h = a[f];
                if (h.dataset.precedence === t) r = h;
                else if (r !== u) break;
            }
            r ? r.parentNode.insertBefore(e, r.nextSibling) : (t = l.nodeType === 9 ? l.head : l, t.insertBefore(e, t.firstChild));
        }
        function xs(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
        }
        function Us(e, t) {
            e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
        }
        var tr = null;
        function Kh(e, t, l) {
            if (tr === null) {
                var a = new Map, u = tr = new Map;
                u.set(l, a);
            } else u = tr, a = u.get(l), a || (a = new Map, u.set(l, a));
            if (a.has(e)) return a;
            for(a.set(e, null), l = l.getElementsByTagName(e), u = 0; u < l.length; u++){
                var r = l[u];
                if (!(r[Te] || r[F] || e === "link" && r.getAttribute("rel") === "stylesheet") && r.namespaceURI !== "http://www.w3.org/2000/svg") {
                    var f = r.getAttribute(t) || "";
                    f = e + f;
                    var h = a.get(f);
                    h ? h.push(r) : a.set(f, [
                        r
                    ]);
                }
            }
            return a;
        }
        function Jh(e, t, l) {
            e = e.ownerDocument || e, e.head.insertBefore(l, t === "title" ? e.querySelector("head > title") : null);
        }
        function Uv(e, t, l) {
            if (l === 1 || t.itemProp != null) return !1;
            switch(e){
                case "meta":
                case "title":
                    return !0;
                case "style":
                    if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "") break;
                    return !0;
                case "link":
                    if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError) break;
                    switch(t.rel){
                        case "stylesheet":
                            return e = t.disabled, typeof t.precedence == "string" && e == null;
                        default:
                            return !0;
                    }
                case "script":
                    if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string") return !0;
            }
            return !1;
        }
        function Fh(e) {
            return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
        }
        function Nv(e, t, l, a) {
            if (l.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (l.state.loading & 4) === 0) {
                if (l.instance === null) {
                    var u = Qn(a.href), r = t.querySelector(Uu(u));
                    if (r) {
                        t = r._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = lr.bind(e), t.then(e, e)), l.state.loading |= 4, l.instance = r, nt(r);
                        return;
                    }
                    r = t.ownerDocument || t, a = Vh(a), (u = cl.get(u)) && xs(a, u), r = r.createElement("link"), nt(r);
                    var f = r;
                    f._p = new Promise(function(h, p) {
                        f.onload = h, f.onerror = p;
                    }), Mt(r, "link", a), l.instance = r;
                }
                e.stylesheets === null && (e.stylesheets = new Map), e.stylesheets.set(l, t), (t = l.state.preload) && (l.state.loading & 3) === 0 && (e.count++, l = lr.bind(e), t.addEventListener("load", l), t.addEventListener("error", l));
            }
        }
        var Ns = 0;
        function Bv(e, t) {
            return e.stylesheets && e.count === 0 && nr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(l) {
                var a = setTimeout(function() {
                    if (e.stylesheets && nr(e, e.stylesheets), e.unsuspend) {
                        var r = e.unsuspend;
                        e.unsuspend = null, r();
                    }
                }, 6e4 + t);
                0 < e.imgBytes && Ns === 0 && (Ns = 62500 * mv());
                var u = setTimeout(function() {
                    if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && nr(e, e.stylesheets), e.unsuspend)) {
                        var r = e.unsuspend;
                        e.unsuspend = null, r();
                    }
                }, (e.imgBytes > Ns ? 50 : 800) + t);
                return e.unsuspend = l, function() {
                    e.unsuspend = null, clearTimeout(a), clearTimeout(u);
                };
            } : null;
        }
        function lr() {
            if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
                if (this.stylesheets) nr(this, this.stylesheets);
                else if (this.unsuspend) {
                    var e = this.unsuspend;
                    this.unsuspend = null, e();
                }
            }
        }
        var ar = null;
        function nr(e, t) {
            e.stylesheets = null, e.unsuspend !== null && (e.count++, ar = new Map, t.forEach(jv, e), ar = null, lr.call(e));
        }
        function jv(e, t) {
            if (!(t.state.loading & 4)) {
                var l = ar.get(e);
                if (l) var a = l.get(null);
                else {
                    l = new Map, ar.set(e, l);
                    for(var u = e.querySelectorAll("link[data-precedence],style[data-precedence]"), r = 0; r < u.length; r++){
                        var f = u[r];
                        (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (l.set(f.dataset.precedence, f), a = f);
                    }
                    a && l.set(null, a);
                }
                u = t.instance, f = u.getAttribute("data-precedence"), r = l.get(f) || a, r === a && l.set(null, u), l.set(f, u), this.count++, a = lr.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), r ? r.parentNode.insertBefore(u, r.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
            }
        }
        var Bu = {
            $$typeof: ne,
            Provider: null,
            Consumer: null,
            _currentValue: P,
            _currentValue2: P,
            _threadCount: 0
        };
        function Lv(e, t, l, a, u, r, f, h, p) {
            this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = kl(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = kl(0), this.hiddenUpdates = kl(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = r, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = p, this.incompleteTransitions = new Map;
        }
        function Wh(e, t, l, a, u, r, f, h, p, z, H, Q) {
            return e = new Lv(e, t, l, f, p, z, H, Q, h), t = 1, r === !0 && (t |= 24), r = Xt(3, null, null, t), e.current = r, r.stateNode = e, t = dc(), t.refCount++, e.pooledCache = t, t.refCount++, r.memoizedState = {
                element: a,
                isDehydrated: l,
                cache: t
            }, vc(r), e;
        }
        function $h(e) {
            return e ? (e = pn, e) : pn;
        }
        function kh(e, t, l, a, u, r) {
            u = $h(u), a.context === null ? a.context = u : a.pendingContext = u, a = ua(t), a.payload = {
                element: l
            }, r = r === void 0 ? null : r, r !== null && (a.callback = r), l = ia(e, a, t), l !== null && (wt(l, e, t), du(l, e, t));
        }
        function Ph(e, t) {
            if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
                var l = e.retryLane;
                e.retryLane = l !== 0 && l < t ? l : t;
            }
        }
        function Bs(e, t) {
            Ph(e, t), (e = e.alternate) && Ph(e, t);
        }
        function Ih(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = Ha(e, 67108864);
                t !== null && wt(t, e, 67108864), Bs(e, 67108864);
            }
        }
        function em(e) {
            if (e.tag === 13 || e.tag === 31) {
                var t = Ft();
                t = G(t);
                var l = Ha(e, t);
                l !== null && wt(l, e, t), Bs(e, t);
            }
        }
        var ur = !0;
        function Hv(e, t, l, a) {
            var u = B.T;
            B.T = null;
            var r = Z.p;
            try {
                Z.p = 2, js(e, t, l, a);
            } finally{
                Z.p = r, B.T = u;
            }
        }
        function wv(e, t, l, a) {
            var u = B.T;
            B.T = null;
            var r = Z.p;
            try {
                Z.p = 8, js(e, t, l, a);
            } finally{
                Z.p = r, B.T = u;
            }
        }
        function js(e, t, l, a) {
            if (ur) {
                var u = Ls(a);
                if (u === null) Es(e, t, a, ir, l), lm(e, a);
                else if (Qv(u, e, t, l, a)) a.stopPropagation();
                else if (lm(e, a), t & 4 && -1 < qv.indexOf(e)) {
                    for(; u !== null;){
                        var r = kt(u);
                        if (r !== null) switch(r.tag){
                            case 3:
                                if (r = r.stateNode, r.current.memoizedState.isDehydrated) {
                                    var f = _l(r.pendingLanes);
                                    if (f !== 0) {
                                        var h = r;
                                        for(h.pendingLanes |= 2, h.entangledLanes |= 2; f;){
                                            var p = 1 << 31 - Ot(f);
                                            h.entanglements[1] |= p, f &= ~p;
                                        }
                                        Ml(r), (we & 6) === 0 && (Gi = rt() + 500, Cu(0));
                                    }
                                }
                                break;
                            case 31:
                            case 13:
                                h = Ha(r, 2), h !== null && wt(h, r, 2), Vi(), Bs(r, 2);
                        }
                        if (r = Ls(a), r === null && Es(e, t, a, ir, l), r === u) break;
                        u = r;
                    }
                    u !== null && a.stopPropagation();
                } else Es(e, t, a, null, l);
            }
        }
        function Ls(e) {
            return e = wr(e), Hs(e);
        }
        var ir = null;
        function Hs(e) {
            if (ir = null, e = Yt(e), e !== null) {
                var t = d(e);
                if (t === null) e = null;
                else {
                    var l = t.tag;
                    if (l === 13) {
                        if (e = m(t), e !== null) return e;
                        e = null;
                    } else if (l === 31) {
                        if (e = v(t), e !== null) return e;
                        e = null;
                    } else if (l === 3) {
                        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
                        e = null;
                    } else t !== e && (e = null);
                }
            }
            return ir = e, null;
        }
        function tm(e) {
            switch(e){
                case "beforetoggle":
                case "cancel":
                case "click":
                case "close":
                case "contextmenu":
                case "copy":
                case "cut":
                case "auxclick":
                case "dblclick":
                case "dragend":
                case "dragstart":
                case "drop":
                case "focusin":
                case "focusout":
                case "input":
                case "invalid":
                case "keydown":
                case "keypress":
                case "keyup":
                case "mousedown":
                case "mouseup":
                case "paste":
                case "pause":
                case "play":
                case "pointercancel":
                case "pointerdown":
                case "pointerup":
                case "ratechange":
                case "reset":
                case "resize":
                case "seeked":
                case "submit":
                case "toggle":
                case "touchcancel":
                case "touchend":
                case "touchstart":
                case "volumechange":
                case "change":
                case "selectionchange":
                case "textInput":
                case "compositionstart":
                case "compositionend":
                case "compositionupdate":
                case "beforeblur":
                case "afterblur":
                case "beforeinput":
                case "blur":
                case "fullscreenchange":
                case "focus":
                case "hashchange":
                case "popstate":
                case "select":
                case "selectstart":
                    return 2;
                case "drag":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "mousemove":
                case "mouseout":
                case "mouseover":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "scroll":
                case "touchmove":
                case "wheel":
                case "mouseenter":
                case "mouseleave":
                case "pointerenter":
                case "pointerleave":
                    return 8;
                case "message":
                    switch(_a()){
                        case Wn:
                            return 2;
                        case rn:
                            return 8;
                        case Qt:
                        case fl:
                            return 32;
                        case $n:
                            return 268435456;
                        default:
                            return 32;
                    }
                default:
                    return 32;
            }
        }
        var ws = !1, ga = null, pa = null, Sa = null, ju = new Map, Lu = new Map, ba = [], qv = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
        function lm(e, t) {
            switch(e){
                case "focusin":
                case "focusout":
                    ga = null;
                    break;
                case "dragenter":
                case "dragleave":
                    pa = null;
                    break;
                case "mouseover":
                case "mouseout":
                    Sa = null;
                    break;
                case "pointerover":
                case "pointerout":
                    ju.delete(t.pointerId);
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                    Lu.delete(t.pointerId);
            }
        }
        function Hu(e, t, l, a, u, r) {
            return e === null || e.nativeEvent !== r ? (e = {
                blockedOn: t,
                domEventName: l,
                eventSystemFlags: a,
                nativeEvent: r,
                targetContainers: [
                    u
                ]
            }, t !== null && (t = kt(t), t !== null && Ih(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
        }
        function Qv(e, t, l, a, u) {
            switch(t){
                case "focusin":
                    return ga = Hu(ga, e, t, l, a, u), !0;
                case "dragenter":
                    return pa = Hu(pa, e, t, l, a, u), !0;
                case "mouseover":
                    return Sa = Hu(Sa, e, t, l, a, u), !0;
                case "pointerover":
                    var r = u.pointerId;
                    return ju.set(r, Hu(ju.get(r) || null, e, t, l, a, u)), !0;
                case "gotpointercapture":
                    return r = u.pointerId, Lu.set(r, Hu(Lu.get(r) || null, e, t, l, a, u)), !0;
            }
            return !1;
        }
        function am(e) {
            var t = Yt(e.target);
            if (t !== null) {
                var l = d(t);
                if (l !== null) {
                    if (t = l.tag, t === 13) {
                        if (t = m(l), t !== null) {
                            e.blockedOn = t, fe(e.priority, function() {
                                em(l);
                            });
                            return;
                        }
                    } else if (t === 31) {
                        if (t = v(l), t !== null) {
                            e.blockedOn = t, fe(e.priority, function() {
                                em(l);
                            });
                            return;
                        }
                    } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
                        e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
                        return;
                    }
                }
            }
            e.blockedOn = null;
        }
        function rr(e) {
            if (e.blockedOn !== null) return !1;
            for(var t = e.targetContainers; 0 < t.length;){
                var l = Ls(e.nativeEvent);
                if (l === null) {
                    l = e.nativeEvent;
                    var a = new l.constructor(l.type, l);
                    Hr = a, l.target.dispatchEvent(a), Hr = null;
                } else return t = kt(l), t !== null && Ih(t), e.blockedOn = l, !1;
                t.shift();
            }
            return !0;
        }
        function nm(e, t, l) {
            rr(e) && l.delete(t);
        }
        function Yv() {
            ws = !1, ga !== null && rr(ga) && (ga = null), pa !== null && rr(pa) && (pa = null), Sa !== null && rr(Sa) && (Sa = null), ju.forEach(nm), Lu.forEach(nm);
        }
        function cr(e, t) {
            e.blockedOn === t && (e.blockedOn = null, ws || (ws = !0, n.unstable_scheduleCallback(n.unstable_NormalPriority, Yv)));
        }
        var sr = null;
        function um(e) {
            sr !== e && (sr = e, n.unstable_scheduleCallback(n.unstable_NormalPriority, function() {
                sr === e && (sr = null);
                for(var t = 0; t < e.length; t += 3){
                    var l = e[t], a = e[t + 1], u = e[t + 2];
                    if (typeof a != "function") {
                        if (Hs(a || l) === null) continue;
                        break;
                    }
                    var r = kt(l);
                    r !== null && (e.splice(t, 3), t -= 3, Lc(r, {
                        pending: !0,
                        data: u,
                        method: l.method,
                        action: a
                    }, a, u));
                }
            }));
        }
        function Gn(e) {
            function t(p) {
                return cr(p, e);
            }
            ga !== null && cr(ga, e), pa !== null && cr(pa, e), Sa !== null && cr(Sa, e), ju.forEach(t), Lu.forEach(t);
            for(var l = 0; l < ba.length; l++){
                var a = ba[l];
                a.blockedOn === e && (a.blockedOn = null);
            }
            for(; 0 < ba.length && (l = ba[0], l.blockedOn === null);)am(l), l.blockedOn === null && ba.shift();
            if (l = (e.ownerDocument || e).$$reactFormReplay, l != null) for(a = 0; a < l.length; a += 3){
                var u = l[a], r = l[a + 1], f = u[J] || null;
                if (typeof r == "function") f || um(l);
                else if (f) {
                    var h = null;
                    if (r && r.hasAttribute("formAction")) {
                        if (u = r, f = r[J] || null) h = f.formAction;
                        else if (Hs(u) !== null) continue;
                    } else h = f.action;
                    typeof h == "function" ? l[a + 1] = h : (l.splice(a, 3), a -= 3), um(l);
                }
            }
        }
        function im() {
            function e(r) {
                r.canIntercept && r.info === "react-transition" && r.intercept({
                    handler: function() {
                        return new Promise(function(f) {
                            return u = f;
                        });
                    },
                    focusReset: "manual",
                    scroll: "manual"
                });
            }
            function t() {
                u !== null && (u(), u = null), a || setTimeout(l, 20);
            }
            function l() {
                if (!a && !navigation.transition) {
                    var r = navigation.currentEntry;
                    r && r.url != null && navigation.navigate(r.url, {
                        state: r.getState(),
                        info: "react-transition",
                        history: "replace"
                    });
                }
            }
            if (typeof navigation == "object") {
                var a = !1, u = null;
                return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(l, 100), function() {
                    a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
                };
            }
        }
        function qs(e) {
            this._internalRoot = e;
        }
        fr.prototype.render = qs.prototype.render = function(e) {
            var t = this._internalRoot;
            if (t === null) throw Error(s(409));
            var l = t.current, a = Ft();
            kh(l, a, e, t, null, null);
        }, fr.prototype.unmount = qs.prototype.unmount = function() {
            var e = this._internalRoot;
            if (e !== null) {
                this._internalRoot = null;
                var t = e.containerInfo;
                kh(e.current, 2, null, e, null, null), Vi(), t[le] = null;
            }
        };
        function fr(e) {
            this._internalRoot = e;
        }
        fr.prototype.unstable_scheduleHydration = function(e) {
            if (e) {
                var t = ue();
                e = {
                    blockedOn: null,
                    target: e,
                    priority: t
                };
                for(var l = 0; l < ba.length && t !== 0 && t < ba[l].priority; l++);
                ba.splice(l, 0, e), l === 0 && am(e);
            }
        };
        var rm = i.version;
        if (rm !== "19.2.0") throw Error(s(527, rm, "19.2.0"));
        Z.findDOMNode = function(e) {
            var t = e._reactInternals;
            if (t === void 0) throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
            return e = y(t), e = e !== null ? b(e) : null, e = e === null ? null : e.stateNode, e;
        };
        var Gv = {
            bundleType: 0,
            version: "19.2.0",
            rendererPackageName: "react-dom",
            currentDispatcherRef: B,
            reconcilerVersion: "19.2.0"
        };
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
            var or = __REACT_DEVTOOLS_GLOBAL_HOOK__;
            if (!or.isDisabled && or.supportsFiber) try {
                xt = or.inject(Gv), Dt = or;
            } catch  {}
        }
        return qu.createRoot = function(e, t) {
            if (!o(e)) throw Error(s(299));
            var l = !1, a = "", u = md, r = yd, f = vd;
            return t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (r = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = Wh(e, 1, !1, null, null, l, a, null, u, r, f, im), e[le] = t.current, bs(e), new qs(t);
        }, qu.hydrateRoot = function(e, t, l) {
            if (!o(e)) throw Error(s(299));
            var a = !1, u = "", r = md, f = yd, h = vd, p = null;
            return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (r = l.onUncaughtError), l.onCaughtError !== void 0 && (f = l.onCaughtError), l.onRecoverableError !== void 0 && (h = l.onRecoverableError), l.formState !== void 0 && (p = l.formState)), t = Wh(e, 1, !0, t, l ?? null, a, u, p, r, f, h, im), t.context = $h(null), l = t.current, a = Ft(), a = G(a), u = ua(a), u.callback = null, ia(l, u, a), l = a, t.current.lanes = l, Ua(t, l), Ml(t), e[le] = t.current, bs(e), new fr(t);
        }, qu.version = "19.2.0", qu;
    }
    var gm;
    function Iv() {
        if (gm) return Gs.exports;
        gm = 1;
        function n() {
            if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
                __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n);
            } catch (i) {
                console.error(i);
            }
        }
        return n(), Gs.exports = Pv(), Gs.exports;
    }
    let ny;
    eg = Iv();
    ny = ay();
    const tg = ly(ny), lg = ty({
        __proto__: null,
        default: tg
    }, [
        ny
    ]);
    function tt() {
        return tt = Object.assign ? Object.assign.bind() : function(n) {
            for(var i = 1; i < arguments.length; i++){
                var c = arguments[i];
                for(var s in c)Object.prototype.hasOwnProperty.call(c, s) && (n[s] = c[s]);
            }
            return n;
        }, tt.apply(this, arguments);
    }
    var yt;
    (function(n) {
        n.Pop = "POP", n.Push = "PUSH", n.Replace = "REPLACE";
    })(yt || (yt = {}));
    const pm = "popstate";
    function ag(n) {
        n === void 0 && (n = {});
        function i(s, o) {
            let { pathname: d, search: m, hash: v } = s.location;
            return Ju("", {
                pathname: d,
                search: m,
                hash: v
            }, o.state && o.state.usr || null, o.state && o.state.key || "default");
        }
        function c(s, o) {
            return typeof o == "string" ? o : en(o);
        }
        return ug(i, c, null, n);
    }
    function Re(n, i) {
        if (n === !1 || n === null || typeof n > "u") throw new Error(i);
    }
    function Vn(n, i) {
        if (!n) {
            typeof console < "u" && console.warn(i);
            try {
                throw new Error(i);
            } catch  {}
        }
    }
    function ng() {
        return Math.random().toString(36).substr(2, 8);
    }
    function Sm(n, i) {
        return {
            usr: n.state,
            key: n.key,
            idx: i
        };
    }
    function Ju(n, i, c, s) {
        return c === void 0 && (c = null), tt({
            pathname: typeof n == "string" ? n : n.pathname,
            search: "",
            hash: ""
        }, typeof i == "string" ? Ma(i) : i, {
            state: c,
            key: i && i.key || s || ng()
        });
    }
    function en(n) {
        let { pathname: i = "/", search: c = "", hash: s = "" } = n;
        return c && c !== "?" && (i += c.charAt(0) === "?" ? c : "?" + c), s && s !== "#" && (i += s.charAt(0) === "#" ? s : "#" + s), i;
    }
    function Ma(n) {
        let i = {};
        if (n) {
            let c = n.indexOf("#");
            c >= 0 && (i.hash = n.substr(c), n = n.substr(0, c));
            let s = n.indexOf("?");
            s >= 0 && (i.search = n.substr(s), n = n.substr(0, s)), n && (i.pathname = n);
        }
        return i;
    }
    function ug(n, i, c, s) {
        s === void 0 && (s = {});
        let { window: o = document.defaultView, v5Compat: d = !1 } = s, m = o.history, v = yt.Pop, g = null, y = b();
        y == null && (y = 0, m.replaceState(tt({}, m.state, {
            idx: y
        }), ""));
        function b() {
            return (m.state || {
                idx: null
            }).idx;
        }
        function S() {
            v = yt.Pop;
            let X = b(), te = X == null ? null : X - y;
            y = X, g && g({
                action: v,
                location: L.location,
                delta: te
            });
        }
        function _(X, te) {
            v = yt.Push;
            let W = Ju(L.location, X, te);
            y = b() + 1;
            let ne = Sm(W, y), de = L.createHref(W);
            try {
                m.pushState(ne, "", de);
            } catch (Ee) {
                if (Ee instanceof DOMException && Ee.name === "DataCloneError") throw Ee;
                o.location.assign(de);
            }
            d && g && g({
                action: v,
                location: L.location,
                delta: 1
            });
        }
        function N(X, te) {
            v = yt.Replace;
            let W = Ju(L.location, X, te);
            y = b();
            let ne = Sm(W, y), de = L.createHref(W);
            m.replaceState(ne, "", de), d && g && g({
                action: v,
                location: L.location,
                delta: 0
            });
        }
        function j(X) {
            let te = o.location.origin !== "null" ? o.location.origin : o.location.href, W = typeof X == "string" ? X : en(X);
            return W = W.replace(/ $/, "%20"), Re(te, "No window.location.(origin|href) available to create URL for href: " + W), new URL(W, te);
        }
        let L = {
            get action () {
                return v;
            },
            get location () {
                return n(o, m);
            },
            listen (X) {
                if (g) throw new Error("A history only accepts one active listener");
                return o.addEventListener(pm, S), g = X, ()=>{
                    o.removeEventListener(pm, S), g = null;
                };
            },
            createHref (X) {
                return i(o, X);
            },
            createURL: j,
            encodeLocation (X) {
                let te = j(X);
                return {
                    pathname: te.pathname,
                    search: te.search,
                    hash: te.hash
                };
            },
            push: _,
            replace: N,
            go (X) {
                return m.go(X);
            }
        };
        return L;
    }
    var Xe;
    (function(n) {
        n.data = "data", n.deferred = "deferred", n.redirect = "redirect", n.error = "error";
    })(Xe || (Xe = {}));
    const ig = new Set([
        "lazy",
        "caseSensitive",
        "path",
        "id",
        "index",
        "children"
    ]);
    function rg(n) {
        return n.index === !0;
    }
    function vr(n, i, c, s) {
        return c === void 0 && (c = []), s === void 0 && (s = {}), n.map((o, d)=>{
            let m = [
                ...c,
                String(d)
            ], v = typeof o.id == "string" ? o.id : m.join("-");
            if (Re(o.index !== !0 || !o.children, "Cannot specify children on an index route"), Re(!s[v], 'Found a route id collision on id "' + v + `".  Route id's must be globally unique within Data Router usages`), rg(o)) {
                let g = tt({}, o, i(o), {
                    id: v
                });
                return s[v] = g, g;
            } else {
                let g = tt({}, o, i(o), {
                    id: v,
                    children: void 0
                });
                return s[v] = g, o.children && (g.children = vr(o.children, i, m, s)), g;
            }
        });
    }
    function $a(n, i, c) {
        return c === void 0 && (c = "/"), yr(n, i, c, !1);
    }
    function yr(n, i, c, s) {
        let o = typeof i == "string" ? Ma(i) : i, d = Zn(o.pathname || "/", c);
        if (d == null) return null;
        let m = uy(n);
        sg(m);
        let v = null;
        for(let g = 0; v == null && g < m.length; ++g){
            let y = bg(d);
            v = pg(m[g], y, s);
        }
        return v;
    }
    function cg(n, i) {
        let { route: c, pathname: s, params: o } = n;
        return {
            id: c.id,
            pathname: s,
            params: o,
            data: i[c.id],
            handle: c.handle
        };
    }
    function uy(n, i, c, s) {
        i === void 0 && (i = []), c === void 0 && (c = []), s === void 0 && (s = "");
        let o = (d, m, v)=>{
            let g = {
                relativePath: v === void 0 ? d.path || "" : v,
                caseSensitive: d.caseSensitive === !0,
                childrenIndex: m,
                route: d
            };
            g.relativePath.startsWith("/") && (Re(g.relativePath.startsWith(s), 'Absolute route path "' + g.relativePath + '" nested under path ' + ('"' + s + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), g.relativePath = g.relativePath.slice(s.length));
            let y = Kl([
                s,
                g.relativePath
            ]), b = c.concat(g);
            d.children && d.children.length > 0 && (Re(d.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + y + '".')), uy(d.children, i, b, y)), !(d.path == null && !d.index) && i.push({
                path: y,
                score: vg(y, d.index),
                routesMeta: b
            });
        };
        return n.forEach((d, m)=>{
            var v;
            if (d.path === "" || !((v = d.path) != null && v.includes("?"))) o(d, m);
            else for (let g of iy(d.path))o(d, m, g);
        }), i;
    }
    function iy(n) {
        let i = n.split("/");
        if (i.length === 0) return [];
        let [c, ...s] = i, o = c.endsWith("?"), d = c.replace(/\?$/, "");
        if (s.length === 0) return o ? [
            d,
            ""
        ] : [
            d
        ];
        let m = iy(s.join("/")), v = [];
        return v.push(...m.map((g)=>g === "" ? d : [
                d,
                g
            ].join("/"))), o && v.push(...m), v.map((g)=>n.startsWith("/") && g === "" ? "/" : g);
    }
    function sg(n) {
        n.sort((i, c)=>i.score !== c.score ? c.score - i.score : gg(i.routesMeta.map((s)=>s.childrenIndex), c.routesMeta.map((s)=>s.childrenIndex)));
    }
    const fg = /^:[\w-]+$/, og = 3, dg = 2, hg = 1, mg = 10, yg = -2, bm = (n)=>n === "*";
    function vg(n, i) {
        let c = n.split("/"), s = c.length;
        return c.some(bm) && (s += yg), i && (s += dg), c.filter((o)=>!bm(o)).reduce((o, d)=>o + (fg.test(d) ? og : d === "" ? hg : mg), s);
    }
    function gg(n, i) {
        return n.length === i.length && n.slice(0, -1).every((s, o)=>s === i[o]) ? n[n.length - 1] - i[i.length - 1] : 0;
    }
    function pg(n, i, c) {
        c === void 0 && (c = !1);
        let { routesMeta: s } = n, o = {}, d = "/", m = [];
        for(let v = 0; v < s.length; ++v){
            let g = s[v], y = v === s.length - 1, b = d === "/" ? i : i.slice(d.length) || "/", S = Em({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: y
            }, b), _ = g.route;
            if (!S && y && c && !s[s.length - 1].route.index && (S = Em({
                path: g.relativePath,
                caseSensitive: g.caseSensitive,
                end: !1
            }, b)), !S) return null;
            Object.assign(o, S.params), m.push({
                params: o,
                pathname: Kl([
                    d,
                    S.pathname
                ]),
                pathnameBase: Tg(Kl([
                    d,
                    S.pathnameBase
                ])),
                route: _
            }), S.pathnameBase !== "/" && (d = Kl([
                d,
                S.pathnameBase
            ]));
        }
        return m;
    }
    function Em(n, i) {
        typeof n == "string" && (n = {
            path: n,
            caseSensitive: !1,
            end: !0
        });
        let [c, s] = Sg(n.path, n.caseSensitive, n.end), o = i.match(c);
        if (!o) return null;
        let d = o[0], m = d.replace(/(.)\/+$/, "$1"), v = o.slice(1);
        return {
            params: s.reduce((y, b, S)=>{
                let { paramName: _, isOptional: N } = b;
                if (_ === "*") {
                    let L = v[S] || "";
                    m = d.slice(0, d.length - L.length).replace(/(.)\/+$/, "$1");
                }
                const j = v[S];
                return N && !j ? y[_] = void 0 : y[_] = (j || "").replace(/%2F/g, "/"), y;
            }, {}),
            pathname: d,
            pathnameBase: m,
            pattern: n
        };
    }
    function Sg(n, i, c) {
        i === void 0 && (i = !1), c === void 0 && (c = !0), Vn(n === "*" || !n.endsWith("*") || n.endsWith("/*"), 'Route path "' + n + '" will be treated as if it were ' + ('"' + n.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + n.replace(/\*$/, "/*") + '".'));
        let s = [], o = "^" + n.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (m, v, g)=>(s.push({
                paramName: v,
                isOptional: g != null
            }), g ? "/?([^\\/]+)?" : "/([^\\/]+)"));
        return n.endsWith("*") ? (s.push({
            paramName: "*"
        }), o += n === "*" || n === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : c ? o += "\\/*$" : n !== "" && n !== "/" && (o += "(?:(?=\\/|$))"), [
            new RegExp(o, i ? void 0 : "i"),
            s
        ];
    }
    function bg(n) {
        try {
            return n.split("/").map((i)=>decodeURIComponent(i).replace(/\//g, "%2F")).join("/");
        } catch (i) {
            return Vn(!1, 'The URL path "' + n + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + i + ").")), n;
        }
    }
    function Zn(n, i) {
        if (i === "/") return n;
        if (!n.toLowerCase().startsWith(i.toLowerCase())) return null;
        let c = i.endsWith("/") ? i.length - 1 : i.length, s = n.charAt(c);
        return s && s !== "/" ? null : n.slice(c) || "/";
    }
    function Eg(n, i) {
        i === void 0 && (i = "/");
        let { pathname: c, search: s = "", hash: o = "" } = typeof n == "string" ? Ma(n) : n;
        return {
            pathname: c ? c.startsWith("/") ? c : Ag(c, i) : i,
            search: Mg(s),
            hash: Dg(o)
        };
    }
    function Ag(n, i) {
        let c = i.replace(/\/+$/, "").split("/");
        return n.split("/").forEach((o)=>{
            o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
        }), c.length > 1 ? c.join("/") : "/";
    }
    function Ks(n, i, c, s) {
        return "Cannot include a '" + n + "' character in a manually specified " + ("`to." + i + "` field [" + JSON.stringify(s) + "].  Please separate it out to the ") + ("`to." + c + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
    }
    function ry(n) {
        return n.filter((i, c)=>c === 0 || i.route.path && i.route.path.length > 0);
    }
    function df(n, i) {
        let c = ry(n);
        return i ? c.map((s, o)=>o === c.length - 1 ? s.pathname : s.pathnameBase) : c.map((s)=>s.pathnameBase);
    }
    function hf(n, i, c, s) {
        s === void 0 && (s = !1);
        let o;
        typeof n == "string" ? o = Ma(n) : (o = tt({}, n), Re(!o.pathname || !o.pathname.includes("?"), Ks("?", "pathname", "search", o)), Re(!o.pathname || !o.pathname.includes("#"), Ks("#", "pathname", "hash", o)), Re(!o.search || !o.search.includes("#"), Ks("#", "search", "hash", o)));
        let d = n === "" || o.pathname === "", m = d ? "/" : o.pathname, v;
        if (m == null) v = c;
        else {
            let S = i.length - 1;
            if (!s && m.startsWith("..")) {
                let _ = m.split("/");
                for(; _[0] === "..";)_.shift(), S -= 1;
                o.pathname = _.join("/");
            }
            v = S >= 0 ? i[S] : "/";
        }
        let g = Eg(o, v), y = m && m !== "/" && m.endsWith("/"), b = (d || m === ".") && c.endsWith("/");
        return !g.pathname.endsWith("/") && (y || b) && (g.pathname += "/"), g;
    }
    const Kl = (n)=>n.join("/").replace(/\/\/+/g, "/"), Tg = (n)=>n.replace(/\/+$/, "").replace(/^\/*/, "/"), Mg = (n)=>!n || n === "?" ? "" : n.startsWith("?") ? n : "?" + n, Dg = (n)=>!n || n === "#" ? "" : n.startsWith("#") ? n : "#" + n;
    class gr {
        constructor(i, c, s, o){
            o === void 0 && (o = !1), this.status = i, this.statusText = c || "", this.internal = o, s instanceof Error ? (this.data = s.toString(), this.error = s) : this.data = s;
        }
    }
    function Fu(n) {
        return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.internal == "boolean" && "data" in n;
    }
    const cy = [
        "post",
        "put",
        "patch",
        "delete"
    ], Og = new Set(cy), _g = [
        "get",
        ...cy
    ], Cg = new Set(_g), zg = new Set([
        301,
        302,
        303,
        307,
        308
    ]), Rg = new Set([
        307,
        308
    ]), Js = {
        state: "idle",
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }, xg = {
        state: "idle",
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0
    }, Qu = {
        state: "unblocked",
        proceed: void 0,
        reset: void 0,
        location: void 0
    }, mf = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, Ug = (n)=>({
            hasErrorBoundary: !!n.hasErrorBoundary
        }), sy = "remix-router-transitions";
    function Ng(n) {
        const i = n.window ? n.window : typeof window < "u" ? window : void 0, c = typeof i < "u" && typeof i.document < "u" && typeof i.document.createElement < "u", s = !c;
        Re(n.routes.length > 0, "You must provide a non-empty routes array to createRouter");
        let o;
        if (n.mapRouteProperties) o = n.mapRouteProperties;
        else if (n.detectErrorBoundary) {
            let E = n.detectErrorBoundary;
            o = (D)=>({
                    hasErrorBoundary: E(D)
                });
        } else o = Ug;
        let d = {}, m = vr(n.routes, o, void 0, d), v, g = n.basename || "/", y = n.dataStrategy || Hg, b = n.patchRoutesOnNavigation, S = tt({
            v7_fetcherPersist: !1,
            v7_normalizeFormMethod: !1,
            v7_partialHydration: !1,
            v7_prependBasename: !1,
            v7_relativeSplatPath: !1,
            v7_skipActionErrorRevalidation: !1
        }, n.future), _ = null, N = new Set, j = null, L = null, X = null, te = n.hydrationData != null, W = $a(m, n.history.location, g), ne = !1, de = null;
        if (W == null && !b) {
            let E = qt(404, {
                pathname: n.history.location.pathname
            }), { matches: D, route: x } = Um(m);
            W = D, de = {
                [x.id]: E
            };
        }
        W && !n.hydrationData && xa(W, m, n.history.location.pathname).active && (W = null);
        let Ee;
        if (W) if (W.some((E)=>E.route.lazy)) Ee = !1;
        else if (!W.some((E)=>E.route.loader)) Ee = !0;
        else if (S.v7_partialHydration) {
            let E = n.hydrationData ? n.hydrationData.loaderData : null, D = n.hydrationData ? n.hydrationData.errors : null;
            if (D) {
                let x = W.findIndex((G)=>D[G.route.id] !== void 0);
                Ee = W.slice(0, x + 1).every((G)=>!ks(G.route, E, D));
            } else Ee = W.every((x)=>!ks(x.route, E, D));
        } else Ee = n.hydrationData != null;
        else if (Ee = !1, W = [], S.v7_partialHydration) {
            let E = xa(null, m, n.history.location.pathname);
            E.active && E.matches && (ne = !0, W = E.matches);
        }
        let qe, O = {
            historyAction: n.history.action,
            location: n.history.location,
            matches: W,
            initialized: Ee,
            navigation: Js,
            restoreScrollPosition: n.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: "idle",
            loaderData: n.hydrationData && n.hydrationData.loaderData || {},
            actionData: n.hydrationData && n.hydrationData.actionData || null,
            errors: n.hydrationData && n.hydrationData.errors || de,
            fetchers: new Map,
            blockers: new Map
        }, I = yt.Pop, ve = !1, he, He = !1, pe = new Map, at = null, Oe = !1, Fe = !1, B = [], Z = new Set, P = new Map, Ne = 0, Be = -1, T = new Map, w = new Set, V = new Map, k = new Map, re = new Set, me = new Map, Ae = new Map, ft;
        function lt() {
            if (_ = n.history.listen((E)=>{
                let { action: D, location: x, delta: G } = E;
                if (ft) {
                    ft(), ft = void 0;
                    return;
                }
                Vn(Ae.size === 0 || G != null, "You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");
                let K = Ca({
                    currentLocation: O.location,
                    nextLocation: x,
                    historyAction: D
                });
                if (K && G != null) {
                    let ue = new Promise((fe)=>{
                        ft = fe;
                    });
                    n.history.go(G * -1), sn(K, {
                        state: "blocked",
                        location: x,
                        proceed () {
                            sn(K, {
                                state: "proceeding",
                                proceed: void 0,
                                reset: void 0,
                                location: x
                            }), ue.then(()=>n.history.go(G));
                        },
                        reset () {
                            let fe = new Map(O.blockers);
                            fe.set(K, Qu), vt({
                                blockers: fe
                            });
                        }
                    });
                    return;
                }
                return sl(D, x);
            }), c) {
                kg(i, pe);
                let E = ()=>Pg(i, pe);
                i.addEventListener("pagehide", E), at = ()=>i.removeEventListener("pagehide", E);
            }
            return O.initialized || sl(yt.Pop, O.location, {
                initialHydration: !0
            }), qe;
        }
        function Oa() {
            _ && _(), at && at(), N.clear(), he && he.abort(), O.fetchers.forEach((E, D)=>cn(D)), O.blockers.forEach((E, D)=>ei(D));
        }
        function nn(E) {
            return N.add(E), ()=>N.delete(E);
        }
        function vt(E, D) {
            D === void 0 && (D = {}), O = tt({}, O, E);
            let x = [], G = [];
            S.v7_fetcherPersist && O.fetchers.forEach((K, ue)=>{
                K.state === "idle" && (re.has(ue) ? G.push(ue) : x.push(ue));
            }), re.forEach((K)=>{
                !O.fetchers.has(K) && !P.has(K) && G.push(K);
            }), [
                ...N
            ].forEach((K)=>K(O, {
                    deletedFetchers: G,
                    viewTransitionOpts: D.viewTransitionOpts,
                    flushSync: D.flushSync === !0
                })), S.v7_fetcherPersist ? (x.forEach((K)=>O.fetchers.delete(K)), G.forEach((K)=>cn(K))) : G.forEach((K)=>re.delete(K));
        }
        function Ol(E, D, x) {
            var G, K;
            let { flushSync: ue } = x === void 0 ? {} : x, fe = O.actionData != null && O.navigation.formMethod != null && pl(O.navigation.formMethod) && O.navigation.state === "loading" && ((G = E.state) == null ? void 0 : G._isRedirect) !== !0, $;
            D.actionData ? Object.keys(D.actionData).length > 0 ? $ = D.actionData : $ = null : fe ? $ = O.actionData : $ = null;
            let F = D.loaderData ? Rm(O.loaderData, D.loaderData, D.matches || [], D.errors) : O.loaderData, J = O.blockers;
            J.size > 0 && (J = new Map(J), J.forEach((_e, gt)=>J.set(gt, Qu)));
            let le = ve === !0 || O.navigation.formMethod != null && pl(O.navigation.formMethod) && ((K = E.state) == null ? void 0 : K._isRedirect) !== !0;
            v && (m = v, v = void 0), Oe || I === yt.Pop || (I === yt.Push ? n.history.push(E, E.state) : I === yt.Replace && n.history.replace(E, E.state));
            let ye;
            if (I === yt.Pop) {
                let _e = pe.get(O.location.pathname);
                _e && _e.has(E.pathname) ? ye = {
                    currentLocation: O.location,
                    nextLocation: E
                } : pe.has(E.pathname) && (ye = {
                    currentLocation: E,
                    nextLocation: O.location
                });
            } else if (He) {
                let _e = pe.get(O.location.pathname);
                _e ? _e.add(E.pathname) : (_e = new Set([
                    E.pathname
                ]), pe.set(O.location.pathname, _e)), ye = {
                    currentLocation: O.location,
                    nextLocation: E
                };
            }
            vt(tt({}, D, {
                actionData: $,
                loaderData: F,
                historyAction: I,
                location: E,
                initialized: !0,
                navigation: Js,
                revalidation: "idle",
                restoreScrollPosition: ti(E, D.matches || O.matches),
                preventScrollReset: le,
                blockers: J
            }), {
                viewTransitionOpts: ye,
                flushSync: ue === !0
            }), I = yt.Pop, ve = !1, He = !1, Oe = !1, Fe = !1, B = [];
        }
        async function Sl(E, D) {
            if (typeof E == "number") {
                n.history.go(E);
                return;
            }
            let x = $s(O.location, O.matches, g, S.v7_prependBasename, E, S.v7_relativeSplatPath, D?.fromRouteId, D?.relative), { path: G, submission: K, error: ue } = Am(S.v7_normalizeFormMethod, !1, x, D), fe = O.location, $ = Ju(O.location, G, D && D.state);
            $ = tt({}, $, n.history.encodeLocation($));
            let F = D && D.replace != null ? D.replace : void 0, J = yt.Push;
            F === !0 ? J = yt.Replace : F === !1 || K != null && pl(K.formMethod) && K.formAction === O.location.pathname + O.location.search && (J = yt.Replace);
            let le = D && "preventScrollReset" in D ? D.preventScrollReset === !0 : void 0, ye = (D && D.flushSync) === !0, _e = Ca({
                currentLocation: fe,
                nextLocation: $,
                historyAction: J
            });
            if (_e) {
                sn(_e, {
                    state: "blocked",
                    location: $,
                    proceed () {
                        sn(_e, {
                            state: "proceeding",
                            proceed: void 0,
                            reset: void 0,
                            location: $
                        }), Sl(E, D);
                    },
                    reset () {
                        let gt = new Map(O.blockers);
                        gt.set(_e, Qu), vt({
                            blockers: gt
                        });
                    }
                });
                return;
            }
            return await sl(J, $, {
                submission: K,
                pendingError: ue,
                preventScrollReset: le,
                replace: D && D.replace,
                enableViewTransition: D && D.viewTransition,
                flushSync: ye
            });
        }
        function Kn() {
            if (rn(), vt({
                revalidation: "loading"
            }), O.navigation.state !== "submitting") {
                if (O.navigation.state === "idle") {
                    sl(O.historyAction, O.location, {
                        startUninterruptedRevalidation: !0
                    });
                    return;
                }
                sl(I || O.historyAction, O.navigation.location, {
                    overrideNavigation: O.navigation,
                    enableViewTransition: He === !0
                });
            }
        }
        async function sl(E, D, x) {
            he && he.abort(), he = null, I = E, Oe = (x && x.startUninterruptedRevalidation) === !0, Ra(O.location, O.matches), ve = (x && x.preventScrollReset) === !0, He = (x && x.enableViewTransition) === !0;
            let G = v || m, K = x && x.overrideNavigation, ue = x != null && x.initialHydration && O.matches && O.matches.length > 0 && !ne ? O.matches : $a(G, D, g), fe = (x && x.flushSync) === !0;
            if (ue && O.initialized && !Fe && Xg(O.location, D) && !(x && x.submission && pl(x.submission.formMethod))) {
                Ol(D, {
                    matches: ue
                }, {
                    flushSync: fe
                });
                return;
            }
            let $ = xa(ue, G, D.pathname);
            if ($.active && $.matches && (ue = $.matches), !ue) {
                let { error: Qe, notFoundMatches: Te, route: We } = Wl(D.pathname);
                Ol(D, {
                    matches: Te,
                    loaderData: {},
                    errors: {
                        [We.id]: Qe
                    }
                }, {
                    flushSync: fe
                });
                return;
            }
            he = new AbortController;
            let F = Xn(n.history, D, he.signal, x && x.submission), J;
            if (x && x.pendingError) J = [
                ka(ue).route.id,
                {
                    type: Xe.error,
                    error: x.pendingError
                }
            ];
            else if (x && x.submission && pl(x.submission.formMethod)) {
                let Qe = await _r(F, D, x.submission, ue, $.active, {
                    replace: x.replace,
                    flushSync: fe
                });
                if (Qe.shortCircuited) return;
                if (Qe.pendingActionResult) {
                    let [Te, We] = Qe.pendingActionResult;
                    if (Wt(We) && Fu(We.error) && We.error.status === 404) {
                        he = null, Ol(D, {
                            matches: Qe.matches,
                            loaderData: {},
                            errors: {
                                [Te]: We.error
                            }
                        });
                        return;
                    }
                }
                ue = Qe.matches || ue, J = Qe.pendingActionResult, K = Fs(D, x.submission), fe = !1, $.active = !1, F = Xn(n.history, F.url, F.signal);
            }
            let { shortCircuited: le, matches: ye, loaderData: _e, errors: gt } = await Iu(F, D, ue, $.active, K, x && x.submission, x && x.fetcherSubmission, x && x.replace, x && x.initialHydration === !0, fe, J);
            le || (he = null, Ol(D, tt({
                matches: ye || ue
            }, xm(J), {
                loaderData: _e,
                errors: gt
            })));
        }
        async function _r(E, D, x, G, K, ue) {
            ue === void 0 && (ue = {}), rn();
            let fe = Wg(D, x);
            if (vt({
                navigation: fe
            }, {
                flushSync: ue.flushSync === !0
            }), K) {
                let J = await kl(G, D.pathname, E.signal);
                if (J.type === "aborted") return {
                    shortCircuited: !0
                };
                if (J.type === "error") {
                    let le = ka(J.partialMatches).route.id;
                    return {
                        matches: J.partialMatches,
                        pendingActionResult: [
                            le,
                            {
                                type: Xe.error,
                                error: J.error
                            }
                        ]
                    };
                } else if (J.matches) G = J.matches;
                else {
                    let { notFoundMatches: le, error: ye, route: _e } = Wl(D.pathname);
                    return {
                        matches: le,
                        pendingActionResult: [
                            _e.id,
                            {
                                type: Xe.error,
                                error: ye
                            }
                        ]
                    };
                }
            }
            let $, F = Vu(G, D);
            if (!F.route.action && !F.route.lazy) $ = {
                type: Xe.error,
                error: qt(405, {
                    method: E.method,
                    pathname: D.pathname,
                    routeId: F.route.id
                })
            };
            else if ($ = (await _a("action", O, E, [
                F
            ], G, null))[F.route.id], E.signal.aborted) return {
                shortCircuited: !0
            };
            if (Ia($)) {
                let J;
                return ue && ue.replace != null ? J = ue.replace : J = _m($.response.headers.get("Location"), new URL(E.url), g) === O.location.pathname + O.location.search, await rt(E, $, !0, {
                    submission: x,
                    replace: J
                }), {
                    shortCircuited: !0
                };
            }
            if (Ta($)) throw qt(400, {
                type: "defer-action"
            });
            if (Wt($)) {
                let J = ka(G, F.route.id);
                return (ue && ue.replace) !== !0 && (I = yt.Push), {
                    matches: G,
                    pendingActionResult: [
                        J.route.id,
                        $
                    ]
                };
            }
            return {
                matches: G,
                pendingActionResult: [
                    F.route.id,
                    $
                ]
            };
        }
        async function Iu(E, D, x, G, K, ue, fe, $, F, J, le) {
            let ye = K || Fs(D, ue), _e = ue || fe || Bm(ye), gt = !Oe && (!S.v7_partialHydration || !F);
            if (G) {
                if (gt) {
                    let $e = un(le);
                    vt(tt({
                        navigation: ye
                    }, $e !== void 0 ? {
                        actionData: $e
                    } : {}), {
                        flushSync: J
                    });
                }
                let Ue = await kl(x, D.pathname, E.signal);
                if (Ue.type === "aborted") return {
                    shortCircuited: !0
                };
                if (Ue.type === "error") {
                    let $e = ka(Ue.partialMatches).route.id;
                    return {
                        matches: Ue.partialMatches,
                        loaderData: {},
                        errors: {
                            [$e]: Ue.error
                        }
                    };
                } else if (Ue.matches) x = Ue.matches;
                else {
                    let { error: $e, notFoundMatches: Cl, route: Na } = Wl(D.pathname);
                    return {
                        matches: Cl,
                        loaderData: {},
                        errors: {
                            [Na.id]: $e
                        }
                    };
                }
            }
            let Qe = v || m, [Te, We] = Mm(n.history, O, x, _e, D, S.v7_partialHydration && F === !0, S.v7_skipActionErrorRevalidation, Fe, B, Z, re, V, w, Qe, g, le);
            if ($l((Ue)=>!(x && x.some(($e)=>$e.route.id === Ue)) || Te && Te.some(($e)=>$e.route.id === Ue)), Be = ++Ne, Te.length === 0 && We.length === 0) {
                let Ue = ol();
                return Ol(D, tt({
                    matches: x,
                    loaderData: {},
                    errors: le && Wt(le[1]) ? {
                        [le[0]]: le[1].error
                    } : null
                }, xm(le), Ue ? {
                    fetchers: new Map(O.fetchers)
                } : {}), {
                    flushSync: J
                }), {
                    shortCircuited: !0
                };
            }
            if (gt) {
                let Ue = {};
                if (!G) {
                    Ue.navigation = ye;
                    let $e = un(le);
                    $e !== void 0 && (Ue.actionData = $e);
                }
                We.length > 0 && (Ue.fetchers = Jn(We)), vt(Ue, {
                    flushSync: J
                });
            }
            We.forEach((Ue)=>{
                xt(Ue.key), Ue.controller && P.set(Ue.key, Ue.controller);
            });
            let Yt = ()=>We.forEach((Ue)=>xt(Ue.key));
            he && he.signal.addEventListener("abort", Yt);
            let { loaderResults: kt, fetcherResults: Ct } = await Wn(O, x, Te, We, E);
            if (E.signal.aborted) return {
                shortCircuited: !0
            };
            he && he.signal.removeEventListener("abort", Yt), We.forEach((Ue)=>P.delete(Ue.key));
            let bt = dr(kt);
            if (bt) return await rt(E, bt.result, !0, {
                replace: $
            }), {
                shortCircuited: !0
            };
            if (bt = dr(Ct), bt) return w.add(bt.key), await rt(E, bt.result, !0, {
                replace: $
            }), {
                shortCircuited: !0
            };
            let { loaderData: nt, errors: Pl } = zm(O, x, kt, le, We, Ct, me);
            me.forEach((Ue, $e)=>{
                Ue.subscribe((Cl)=>{
                    (Cl || Ue.done) && me.delete($e);
                });
            }), S.v7_partialHydration && F && O.errors && (Pl = tt({}, O.errors, Pl));
            let bl = ol(), Pt = Ot(Be), dl = bl || Pt || We.length > 0;
            return tt({
                matches: x,
                loaderData: nt,
                errors: Pl
            }, dl ? {
                fetchers: new Map(O.fetchers)
            } : {});
        }
        function un(E) {
            if (E && !Wt(E[1])) return {
                [E[0]]: E[1].data
            };
            if (O.actionData) return Object.keys(O.actionData).length === 0 ? null : O.actionData;
        }
        function Jn(E) {
            return E.forEach((D)=>{
                let x = O.fetchers.get(D.key), G = Yu(void 0, x ? x.data : void 0);
                O.fetchers.set(D.key, G);
            }), new Map(O.fetchers);
        }
        function Fn(E, D, x, G) {
            if (s) throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");
            xt(E);
            let K = (G && G.flushSync) === !0, ue = v || m, fe = $s(O.location, O.matches, g, S.v7_prependBasename, x, S.v7_relativeSplatPath, D, G?.relative), $ = $a(ue, fe, g), F = xa($, ue, fe);
            if (F.active && F.matches && ($ = F.matches), !$) {
                fl(E, D, qt(404, {
                    pathname: fe
                }), {
                    flushSync: K
                });
                return;
            }
            let { path: J, submission: le, error: ye } = Am(S.v7_normalizeFormMethod, !0, fe, G);
            if (ye) {
                fl(E, D, ye, {
                    flushSync: K
                });
                return;
            }
            let _e = Vu($, J), gt = (G && G.preventScrollReset) === !0;
            if (le && pl(le.formMethod)) {
                Cr(E, D, J, _e, $, F.active, K, gt, le);
                return;
            }
            V.set(E, {
                routeId: D,
                path: J
            }), zr(E, D, J, _e, $, F.active, K, gt, le);
        }
        async function Cr(E, D, x, G, K, ue, fe, $, F) {
            rn(), V.delete(E);
            function J(ke) {
                if (!ke.route.action && !ke.route.lazy) {
                    let hl = qt(405, {
                        method: F.formMethod,
                        pathname: x,
                        routeId: D
                    });
                    return fl(E, D, hl, {
                        flushSync: fe
                    }), !0;
                }
                return !1;
            }
            if (!ue && J(G)) return;
            let le = O.fetchers.get(E);
            Qt(E, $g(F, le), {
                flushSync: fe
            });
            let ye = new AbortController, _e = Xn(n.history, x, ye.signal, F);
            if (ue) {
                let ke = await kl(K, new URL(_e.url).pathname, _e.signal, E);
                if (ke.type === "aborted") return;
                if (ke.type === "error") {
                    fl(E, D, ke.error, {
                        flushSync: fe
                    });
                    return;
                } else if (ke.matches) {
                    if (K = ke.matches, G = Vu(K, x), J(G)) return;
                } else {
                    fl(E, D, qt(404, {
                        pathname: x
                    }), {
                        flushSync: fe
                    });
                    return;
                }
            }
            P.set(E, ye);
            let gt = Ne, Te = (await _a("action", O, _e, [
                G
            ], K, E))[G.route.id];
            if (_e.signal.aborted) {
                P.get(E) === ye && P.delete(E);
                return;
            }
            if (S.v7_fetcherPersist && re.has(E)) {
                if (Ia(Te) || Wt(Te)) {
                    Qt(E, Aa(void 0));
                    return;
                }
            } else {
                if (Ia(Te)) if (P.delete(E), Be > gt) {
                    Qt(E, Aa(void 0));
                    return;
                } else return w.add(E), Qt(E, Yu(F)), rt(_e, Te, !1, {
                    fetcherSubmission: F,
                    preventScrollReset: $
                });
                if (Wt(Te)) {
                    fl(E, D, Te.error);
                    return;
                }
            }
            if (Ta(Te)) throw qt(400, {
                type: "defer-action"
            });
            let We = O.navigation.location || O.location, Yt = Xn(n.history, We, ye.signal), kt = v || m, Ct = O.navigation.state !== "idle" ? $a(kt, O.navigation.location, g) : O.matches;
            Re(Ct, "Didn't find any matches after fetcher action");
            let bt = ++Ne;
            T.set(E, bt);
            let nt = Yu(F, Te.data);
            O.fetchers.set(E, nt);
            let [Pl, bl] = Mm(n.history, O, Ct, F, We, !1, S.v7_skipActionErrorRevalidation, Fe, B, Z, re, V, w, kt, g, [
                G.route.id,
                Te
            ]);
            bl.filter((ke)=>ke.key !== E).forEach((ke)=>{
                let hl = ke.key, It = O.fetchers.get(hl), Ut = Yu(void 0, It ? It.data : void 0);
                O.fetchers.set(hl, Ut), xt(hl), ke.controller && P.set(hl, ke.controller);
            }), vt({
                fetchers: new Map(O.fetchers)
            });
            let Pt = ()=>bl.forEach((ke)=>xt(ke.key));
            ye.signal.addEventListener("abort", Pt);
            let { loaderResults: dl, fetcherResults: Ue } = await Wn(O, Ct, Pl, bl, Yt);
            if (ye.signal.aborted) return;
            ye.signal.removeEventListener("abort", Pt), T.delete(E), P.delete(E), bl.forEach((ke)=>P.delete(ke.key));
            let $e = dr(dl);
            if ($e) return rt(Yt, $e.result, !1, {
                preventScrollReset: $
            });
            if ($e = dr(Ue), $e) return w.add($e.key), rt(Yt, $e.result, !1, {
                preventScrollReset: $
            });
            let { loaderData: Cl, errors: Na } = zm(O, Ct, dl, void 0, bl, Ue, me);
            if (O.fetchers.has(E)) {
                let ke = Aa(Te.data);
                O.fetchers.set(E, ke);
            }
            Ot(bt), O.navigation.state === "loading" && bt > Be ? (Re(I, "Expected pending action"), he && he.abort(), Ol(O.navigation.location, {
                matches: Ct,
                loaderData: Cl,
                errors: Na,
                fetchers: new Map(O.fetchers)
            })) : (vt({
                errors: Na,
                loaderData: Rm(O.loaderData, Cl, Ct, Na),
                fetchers: new Map(O.fetchers)
            }), Fe = !1);
        }
        async function zr(E, D, x, G, K, ue, fe, $, F) {
            let J = O.fetchers.get(E);
            Qt(E, Yu(F, J ? J.data : void 0), {
                flushSync: fe
            });
            let le = new AbortController, ye = Xn(n.history, x, le.signal);
            if (ue) {
                let Te = await kl(K, new URL(ye.url).pathname, ye.signal, E);
                if (Te.type === "aborted") return;
                if (Te.type === "error") {
                    fl(E, D, Te.error, {
                        flushSync: fe
                    });
                    return;
                } else if (Te.matches) K = Te.matches, G = Vu(K, x);
                else {
                    fl(E, D, qt(404, {
                        pathname: x
                    }), {
                        flushSync: fe
                    });
                    return;
                }
            }
            P.set(E, le);
            let _e = Ne, Qe = (await _a("loader", O, ye, [
                G
            ], K, E))[G.route.id];
            if (Ta(Qe) && (Qe = await yf(Qe, ye.signal, !0) || Qe), P.get(E) === le && P.delete(E), !ye.signal.aborted) {
                if (re.has(E)) {
                    Qt(E, Aa(void 0));
                    return;
                }
                if (Ia(Qe)) if (Be > _e) {
                    Qt(E, Aa(void 0));
                    return;
                } else {
                    w.add(E), await rt(ye, Qe, !1, {
                        preventScrollReset: $
                    });
                    return;
                }
                if (Wt(Qe)) {
                    fl(E, D, Qe.error);
                    return;
                }
                Re(!Ta(Qe), "Unhandled fetcher deferred data"), Qt(E, Aa(Qe.data));
            }
        }
        async function rt(E, D, x, G) {
            let { submission: K, fetcherSubmission: ue, preventScrollReset: fe, replace: $ } = G === void 0 ? {} : G;
            D.response.headers.has("X-Remix-Revalidate") && (Fe = !0);
            let F = D.response.headers.get("Location");
            Re(F, "Expected a Location header on the redirect Response"), F = _m(F, new URL(E.url), g);
            let J = Ju(O.location, F, {
                _isRedirect: !0
            });
            if (c) {
                let Te = !1;
                if (D.response.headers.has("X-Remix-Reload-Document")) Te = !0;
                else if (mf.test(F)) {
                    const We = n.history.createURL(F);
                    Te = We.origin !== i.location.origin || Zn(We.pathname, g) == null;
                }
                if (Te) {
                    $ ? i.location.replace(F) : i.location.assign(F);
                    return;
                }
            }
            he = null;
            let le = $ === !0 || D.response.headers.has("X-Remix-Replace") ? yt.Replace : yt.Push, { formMethod: ye, formAction: _e, formEncType: gt } = O.navigation;
            !K && !ue && ye && _e && gt && (K = Bm(O.navigation));
            let Qe = K || ue;
            if (Rg.has(D.response.status) && Qe && pl(Qe.formMethod)) await sl(le, J, {
                submission: tt({}, Qe, {
                    formAction: F
                }),
                preventScrollReset: fe || ve,
                enableViewTransition: x ? He : void 0
            });
            else {
                let Te = Fs(J, K);
                await sl(le, J, {
                    overrideNavigation: Te,
                    fetcherSubmission: ue,
                    preventScrollReset: fe || ve,
                    enableViewTransition: x ? He : void 0
                });
            }
        }
        async function _a(E, D, x, G, K, ue) {
            let fe, $ = {};
            try {
                fe = await wg(y, E, D, x, G, K, ue, d, o);
            } catch (F) {
                return G.forEach((J)=>{
                    $[J.route.id] = {
                        type: Xe.error,
                        error: F
                    };
                }), $;
            }
            for (let [F, J] of Object.entries(fe))if (Vg(J)) {
                let le = J.result;
                $[F] = {
                    type: Xe.redirect,
                    response: Yg(le, x, F, K, g, S.v7_relativeSplatPath)
                };
            } else $[F] = await Qg(J);
            return $;
        }
        async function Wn(E, D, x, G, K) {
            let ue = E.matches, fe = _a("loader", E, K, x, D, null), $ = Promise.all(G.map(async (le)=>{
                if (le.matches && le.match && le.controller) {
                    let _e = (await _a("loader", E, Xn(n.history, le.path, le.controller.signal), [
                        le.match
                    ], le.matches, le.key))[le.match.route.id];
                    return {
                        [le.key]: _e
                    };
                } else return Promise.resolve({
                    [le.key]: {
                        type: Xe.error,
                        error: qt(404, {
                            pathname: le.path
                        })
                    }
                });
            })), F = await fe, J = (await $).reduce((le, ye)=>Object.assign(le, ye), {});
            return await Promise.all([
                Jg(D, F, K.signal, ue, E.loaderData),
                Fg(D, J, G)
            ]), {
                loaderResults: F,
                fetcherResults: J
            };
        }
        function rn() {
            Fe = !0, B.push(...$l()), V.forEach((E, D)=>{
                P.has(D) && Z.add(D), xt(D);
            });
        }
        function Qt(E, D, x) {
            x === void 0 && (x = {}), O.fetchers.set(E, D), vt({
                fetchers: new Map(O.fetchers)
            }, {
                flushSync: (x && x.flushSync) === !0
            });
        }
        function fl(E, D, x, G) {
            G === void 0 && (G = {});
            let K = ka(O.matches, D);
            cn(E), vt({
                errors: {
                    [K.route.id]: x
                },
                fetchers: new Map(O.fetchers)
            }, {
                flushSync: (G && G.flushSync) === !0
            });
        }
        function $n(E) {
            return k.set(E, (k.get(E) || 0) + 1), re.has(E) && re.delete(E), O.fetchers.get(E) || xg;
        }
        function cn(E) {
            let D = O.fetchers.get(E);
            P.has(E) && !(D && D.state === "loading" && T.has(E)) && xt(E), V.delete(E), T.delete(E), w.delete(E), S.v7_fetcherPersist && re.delete(E), Z.delete(E), O.fetchers.delete(E);
        }
        function Rr(E) {
            let D = (k.get(E) || 0) - 1;
            D <= 0 ? (k.delete(E), re.add(E), S.v7_fetcherPersist || cn(E)) : k.set(E, D), vt({
                fetchers: new Map(O.fetchers)
            });
        }
        function xt(E) {
            let D = P.get(E);
            D && (D.abort(), P.delete(E));
        }
        function Dt(E) {
            for (let D of E){
                let x = $n(D), G = Aa(x.data);
                O.fetchers.set(D, G);
            }
        }
        function ol() {
            let E = [], D = !1;
            for (let x of w){
                let G = O.fetchers.get(x);
                Re(G, "Expected fetcher: " + x), G.state === "loading" && (w.delete(x), E.push(x), D = !0);
            }
            return Dt(E), D;
        }
        function Ot(E) {
            let D = [];
            for (let [x, G] of T)if (G < E) {
                let K = O.fetchers.get(x);
                Re(K, "Expected fetcher: " + x), K.state === "loading" && (xt(x), T.delete(x), D.push(x));
            }
            return Dt(D), D.length > 0;
        }
        function xr(E, D) {
            let x = O.blockers.get(E) || Qu;
            return Ae.get(E) !== D && Ae.set(E, D), x;
        }
        function ei(E) {
            O.blockers.delete(E), Ae.delete(E);
        }
        function sn(E, D) {
            let x = O.blockers.get(E) || Qu;
            Re(x.state === "unblocked" && D.state === "blocked" || x.state === "blocked" && D.state === "blocked" || x.state === "blocked" && D.state === "proceeding" || x.state === "blocked" && D.state === "unblocked" || x.state === "proceeding" && D.state === "unblocked", "Invalid blocker state transition: " + x.state + " -> " + D.state);
            let G = new Map(O.blockers);
            G.set(E, D), vt({
                blockers: G
            });
        }
        function Ca(E) {
            let { currentLocation: D, nextLocation: x, historyAction: G } = E;
            if (Ae.size === 0) return;
            Ae.size > 1 && Vn(!1, "A router only supports one blocker at a time");
            let K = Array.from(Ae.entries()), [ue, fe] = K[K.length - 1], $ = O.blockers.get(ue);
            if (!($ && $.state === "proceeding") && fe({
                currentLocation: D,
                nextLocation: x,
                historyAction: G
            })) return ue;
        }
        function Wl(E) {
            let D = qt(404, {
                pathname: E
            }), x = v || m, { matches: G, route: K } = Um(x);
            return $l(), {
                notFoundMatches: G,
                route: K,
                error: D
            };
        }
        function $l(E) {
            let D = [];
            return me.forEach((x, G)=>{
                (!E || E(G)) && (x.cancel(), D.push(G), me.delete(G));
            }), D;
        }
        function _l(E, D, x) {
            if (j = E, X = D, L = x || null, !te && O.navigation === Js) {
                te = !0;
                let G = ti(O.location, O.matches);
                G != null && vt({
                    restoreScrollPosition: G
                });
            }
            return ()=>{
                j = null, X = null, L = null;
            };
        }
        function za(E, D) {
            return L && L(E, D.map((G)=>cg(G, O.loaderData))) || E.key;
        }
        function Ra(E, D) {
            if (j && X) {
                let x = za(E, D);
                j[x] = X();
            }
        }
        function ti(E, D) {
            if (j) {
                let x = za(E, D), G = j[x];
                if (typeof G == "number") return G;
            }
            return null;
        }
        function xa(E, D, x) {
            if (b) if (E) {
                if (Object.keys(E[0].params).length > 0) return {
                    active: !0,
                    matches: yr(D, x, g, !0)
                };
            } else return {
                active: !0,
                matches: yr(D, x, g, !0) || []
            };
            return {
                active: !1,
                matches: null
            };
        }
        async function kl(E, D, x, G) {
            if (!b) return {
                type: "success",
                matches: E
            };
            let K = E;
            for(;;){
                let ue = v == null, fe = v || m, $ = d;
                try {
                    await b({
                        signal: x,
                        path: D,
                        matches: K,
                        fetcherKey: G,
                        patch: (le, ye)=>{
                            x.aborted || Om(le, ye, fe, $, o);
                        }
                    });
                } catch (le) {
                    return {
                        type: "error",
                        error: le,
                        partialMatches: K
                    };
                } finally{
                    ue && !x.aborted && (m = [
                        ...m
                    ]);
                }
                if (x.aborted) return {
                    type: "aborted"
                };
                let F = $a(fe, D, g);
                if (F) return {
                    type: "success",
                    matches: F
                };
                let J = yr(fe, D, g, !0);
                if (!J || K.length === J.length && K.every((le, ye)=>le.route.id === J[ye].route.id)) return {
                    type: "success",
                    matches: null
                };
                K = J;
            }
        }
        function Ua(E) {
            d = {}, v = vr(E, o, void 0, d);
        }
        function Ur(E, D) {
            let x = v == null;
            Om(E, D, v || m, d, o), x && (m = [
                ...m
            ], vt({}));
        }
        return qe = {
            get basename () {
                return g;
            },
            get future () {
                return S;
            },
            get state () {
                return O;
            },
            get routes () {
                return m;
            },
            get window () {
                return i;
            },
            initialize: lt,
            subscribe: nn,
            enableScrollRestoration: _l,
            navigate: Sl,
            fetch: Fn,
            revalidate: Kn,
            createHref: (E)=>n.history.createHref(E),
            encodeLocation: (E)=>n.history.encodeLocation(E),
            getFetcher: $n,
            deleteFetcher: Rr,
            dispose: Oa,
            getBlocker: xr,
            deleteBlocker: ei,
            patchRoutes: Ur,
            _internalFetchControllers: P,
            _internalActiveDeferreds: me,
            _internalSetRoutes: Ua
        }, qe;
    }
    function Bg(n) {
        return n != null && ("formData" in n && n.formData != null || "body" in n && n.body !== void 0);
    }
    function $s(n, i, c, s, o, d, m, v) {
        let g, y;
        if (m) {
            g = [];
            for (let S of i)if (g.push(S), S.route.id === m) {
                y = S;
                break;
            }
        } else g = i, y = i[i.length - 1];
        let b = hf(o || ".", df(g, d), Zn(n.pathname, c) || n.pathname, v === "path");
        if (o == null && (b.search = n.search, b.hash = n.hash), (o == null || o === "" || o === ".") && y) {
            let S = vf(b.search);
            if (y.route.index && !S) b.search = b.search ? b.search.replace(/^\?/, "?index&") : "?index";
            else if (!y.route.index && S) {
                let _ = new URLSearchParams(b.search), N = _.getAll("index");
                _.delete("index"), N.filter((L)=>L).forEach((L)=>_.append("index", L));
                let j = _.toString();
                b.search = j ? "?" + j : "";
            }
        }
        return s && c !== "/" && (b.pathname = b.pathname === "/" ? c : Kl([
            c,
            b.pathname
        ])), en(b);
    }
    function Am(n, i, c, s) {
        if (!s || !Bg(s)) return {
            path: c
        };
        if (s.formMethod && !Kg(s.formMethod)) return {
            path: c,
            error: qt(405, {
                method: s.formMethod
            })
        };
        let o = ()=>({
                path: c,
                error: qt(400, {
                    type: "invalid-body"
                })
            }), d = s.formMethod || "get", m = n ? d.toUpperCase() : d.toLowerCase(), v = dy(c);
        if (s.body !== void 0) {
            if (s.formEncType === "text/plain") {
                if (!pl(m)) return o();
                let _ = typeof s.body == "string" ? s.body : s.body instanceof FormData || s.body instanceof URLSearchParams ? Array.from(s.body.entries()).reduce((N, j)=>{
                    let [L, X] = j;
                    return "" + N + L + "=" + X + `
`;
                }, "") : String(s.body);
                return {
                    path: c,
                    submission: {
                        formMethod: m,
                        formAction: v,
                        formEncType: s.formEncType,
                        formData: void 0,
                        json: void 0,
                        text: _
                    }
                };
            } else if (s.formEncType === "application/json") {
                if (!pl(m)) return o();
                try {
                    let _ = typeof s.body == "string" ? JSON.parse(s.body) : s.body;
                    return {
                        path: c,
                        submission: {
                            formMethod: m,
                            formAction: v,
                            formEncType: s.formEncType,
                            formData: void 0,
                            json: _,
                            text: void 0
                        }
                    };
                } catch  {
                    return o();
                }
            }
        }
        Re(typeof FormData == "function", "FormData is not available in this environment");
        let g, y;
        if (s.formData) g = Ps(s.formData), y = s.formData;
        else if (s.body instanceof FormData) g = Ps(s.body), y = s.body;
        else if (s.body instanceof URLSearchParams) g = s.body, y = Cm(g);
        else if (s.body == null) g = new URLSearchParams, y = new FormData;
        else try {
            g = new URLSearchParams(s.body), y = Cm(g);
        } catch  {
            return o();
        }
        let b = {
            formMethod: m,
            formAction: v,
            formEncType: s && s.formEncType || "application/x-www-form-urlencoded",
            formData: y,
            json: void 0,
            text: void 0
        };
        if (pl(b.formMethod)) return {
            path: c,
            submission: b
        };
        let S = Ma(c);
        return i && S.search && vf(S.search) && g.append("index", ""), S.search = "?" + g, {
            path: en(S),
            submission: b
        };
    }
    function Tm(n, i, c) {
        c === void 0 && (c = !1);
        let s = n.findIndex((o)=>o.route.id === i);
        return s >= 0 ? n.slice(0, c ? s + 1 : s) : n;
    }
    function Mm(n, i, c, s, o, d, m, v, g, y, b, S, _, N, j, L) {
        let X = L ? Wt(L[1]) ? L[1].error : L[1].data : void 0, te = n.createURL(i.location), W = n.createURL(o), ne = c;
        d && i.errors ? ne = Tm(c, Object.keys(i.errors)[0], !0) : L && Wt(L[1]) && (ne = Tm(c, L[0]));
        let de = L ? L[1].statusCode : void 0, Ee = m && de && de >= 400, qe = ne.filter((I, ve)=>{
            let { route: he } = I;
            if (he.lazy) return !0;
            if (he.loader == null) return !1;
            if (d) return ks(he, i.loaderData, i.errors);
            if (jg(i.loaderData, i.matches[ve], I) || g.some((at)=>at === I.route.id)) return !0;
            let He = i.matches[ve], pe = I;
            return Dm(I, tt({
                currentUrl: te,
                currentParams: He.params,
                nextUrl: W,
                nextParams: pe.params
            }, s, {
                actionResult: X,
                actionStatus: de,
                defaultShouldRevalidate: Ee ? !1 : v || te.pathname + te.search === W.pathname + W.search || te.search !== W.search || fy(He, pe)
            }));
        }), O = [];
        return S.forEach((I, ve)=>{
            if (d || !c.some((Oe)=>Oe.route.id === I.routeId) || b.has(ve)) return;
            let he = $a(N, I.path, j);
            if (!he) {
                O.push({
                    key: ve,
                    routeId: I.routeId,
                    path: I.path,
                    matches: null,
                    match: null,
                    controller: null
                });
                return;
            }
            let He = i.fetchers.get(ve), pe = Vu(he, I.path), at = !1;
            _.has(ve) ? at = !1 : y.has(ve) ? (y.delete(ve), at = !0) : He && He.state !== "idle" && He.data === void 0 ? at = v : at = Dm(pe, tt({
                currentUrl: te,
                currentParams: i.matches[i.matches.length - 1].params,
                nextUrl: W,
                nextParams: c[c.length - 1].params
            }, s, {
                actionResult: X,
                actionStatus: de,
                defaultShouldRevalidate: Ee ? !1 : v
            })), at && O.push({
                key: ve,
                routeId: I.routeId,
                path: I.path,
                matches: he,
                match: pe,
                controller: new AbortController
            });
        }), [
            qe,
            O
        ];
    }
    function ks(n, i, c) {
        if (n.lazy) return !0;
        if (!n.loader) return !1;
        let s = i != null && i[n.id] !== void 0, o = c != null && c[n.id] !== void 0;
        return !s && o ? !1 : typeof n.loader == "function" && n.loader.hydrate === !0 ? !0 : !s && !o;
    }
    function jg(n, i, c) {
        let s = !i || c.route.id !== i.route.id, o = n[c.route.id] === void 0;
        return s || o;
    }
    function fy(n, i) {
        let c = n.route.path;
        return n.pathname !== i.pathname || c != null && c.endsWith("*") && n.params["*"] !== i.params["*"];
    }
    function Dm(n, i) {
        if (n.route.shouldRevalidate) {
            let c = n.route.shouldRevalidate(i);
            if (typeof c == "boolean") return c;
        }
        return i.defaultShouldRevalidate;
    }
    function Om(n, i, c, s, o) {
        var d;
        let m;
        if (n) {
            let y = s[n];
            Re(y, "No route found to patch children into: routeId = " + n), y.children || (y.children = []), m = y.children;
        } else m = c;
        let v = i.filter((y)=>!m.some((b)=>oy(y, b))), g = vr(v, o, [
            n || "_",
            "patch",
            String(((d = m) == null ? void 0 : d.length) || "0")
        ], s);
        m.push(...g);
    }
    function oy(n, i) {
        return "id" in n && "id" in i && n.id === i.id ? !0 : n.index === i.index && n.path === i.path && n.caseSensitive === i.caseSensitive ? (!n.children || n.children.length === 0) && (!i.children || i.children.length === 0) ? !0 : n.children.every((c, s)=>{
            var o;
            return (o = i.children) == null ? void 0 : o.some((d)=>oy(c, d));
        }) : !1;
    }
    async function Lg(n, i, c) {
        if (!n.lazy) return;
        let s = await n.lazy();
        if (!n.lazy) return;
        let o = c[n.id];
        Re(o, "No route found in manifest");
        let d = {};
        for(let m in s){
            let g = o[m] !== void 0 && m !== "hasErrorBoundary";
            Vn(!g, 'Route "' + o.id + '" has a static property "' + m + '" defined but its lazy function is also returning a value for this property. ' + ('The lazy route property "' + m + '" will be ignored.')), !g && !ig.has(m) && (d[m] = s[m]);
        }
        Object.assign(o, d), Object.assign(o, tt({}, i(o), {
            lazy: void 0
        }));
    }
    async function Hg(n) {
        let { matches: i } = n, c = i.filter((o)=>o.shouldLoad);
        return (await Promise.all(c.map((o)=>o.resolve()))).reduce((o, d, m)=>Object.assign(o, {
                [c[m].route.id]: d
            }), {});
    }
    async function wg(n, i, c, s, o, d, m, v, g, y) {
        let b = d.map((N)=>N.route.lazy ? Lg(N.route, g, v) : void 0), S = d.map((N, j)=>{
            let L = b[j], X = o.some((W)=>W.route.id === N.route.id);
            return tt({}, N, {
                shouldLoad: X,
                resolve: async (W)=>(W && s.method === "GET" && (N.route.lazy || N.route.loader) && (X = !0), X ? qg(i, s, N, L, W, y) : Promise.resolve({
                        type: Xe.data,
                        result: void 0
                    }))
            });
        }), _ = await n({
            matches: S,
            request: s,
            params: d[0].params,
            fetcherKey: m,
            context: y
        });
        try {
            await Promise.all(b);
        } catch  {}
        return _;
    }
    async function qg(n, i, c, s, o, d) {
        let m, v, g = (y)=>{
            let b, S = new Promise((j, L)=>b = L);
            v = ()=>b(), i.signal.addEventListener("abort", v);
            let _ = (j)=>typeof y != "function" ? Promise.reject(new Error("You cannot call the handler for a route which defines a boolean " + ('"' + n + '" [routeId: ' + c.route.id + "]"))) : y({
                    request: i,
                    params: c.params,
                    context: d
                }, ...j !== void 0 ? [
                    j
                ] : []), N = (async ()=>{
                try {
                    return {
                        type: "data",
                        result: await (o ? o((L)=>_(L)) : _())
                    };
                } catch (j) {
                    return {
                        type: "error",
                        result: j
                    };
                }
            })();
            return Promise.race([
                N,
                S
            ]);
        };
        try {
            let y = c.route[n];
            if (s) if (y) {
                let b, [S] = await Promise.all([
                    g(y).catch((_)=>{
                        b = _;
                    }),
                    s
                ]);
                if (b !== void 0) throw b;
                m = S;
            } else if (await s, y = c.route[n], y) m = await g(y);
            else if (n === "action") {
                let b = new URL(i.url), S = b.pathname + b.search;
                throw qt(405, {
                    method: i.method,
                    pathname: S,
                    routeId: c.route.id
                });
            } else return {
                type: Xe.data,
                result: void 0
            };
            else if (y) m = await g(y);
            else {
                let b = new URL(i.url), S = b.pathname + b.search;
                throw qt(404, {
                    pathname: S
                });
            }
            Re(m.result !== void 0, "You defined " + (n === "action" ? "an action" : "a loader") + " for route " + ('"' + c.route.id + "\" but didn't return anything from your `" + n + "` ") + "function. Please return a value or `null`.");
        } catch (y) {
            return {
                type: Xe.error,
                result: y
            };
        } finally{
            v && i.signal.removeEventListener("abort", v);
        }
        return m;
    }
    async function Qg(n) {
        let { result: i, type: c } = n;
        if (hy(i)) {
            let S;
            try {
                let _ = i.headers.get("Content-Type");
                _ && /\bapplication\/json\b/.test(_) ? i.body == null ? S = null : S = await i.json() : S = await i.text();
            } catch (_) {
                return {
                    type: Xe.error,
                    error: _
                };
            }
            return c === Xe.error ? {
                type: Xe.error,
                error: new gr(i.status, i.statusText, S),
                statusCode: i.status,
                headers: i.headers
            } : {
                type: Xe.data,
                data: S,
                statusCode: i.status,
                headers: i.headers
            };
        }
        if (c === Xe.error) {
            if (Nm(i)) {
                var s, o;
                if (i.data instanceof Error) {
                    var d, m;
                    return {
                        type: Xe.error,
                        error: i.data,
                        statusCode: (d = i.init) == null ? void 0 : d.status,
                        headers: (m = i.init) != null && m.headers ? new Headers(i.init.headers) : void 0
                    };
                }
                return {
                    type: Xe.error,
                    error: new gr(((s = i.init) == null ? void 0 : s.status) || 500, void 0, i.data),
                    statusCode: Fu(i) ? i.status : void 0,
                    headers: (o = i.init) != null && o.headers ? new Headers(i.init.headers) : void 0
                };
            }
            return {
                type: Xe.error,
                error: i,
                statusCode: Fu(i) ? i.status : void 0
            };
        }
        if (Zg(i)) {
            var v, g;
            return {
                type: Xe.deferred,
                deferredData: i,
                statusCode: (v = i.init) == null ? void 0 : v.status,
                headers: ((g = i.init) == null ? void 0 : g.headers) && new Headers(i.init.headers)
            };
        }
        if (Nm(i)) {
            var y, b;
            return {
                type: Xe.data,
                data: i.data,
                statusCode: (y = i.init) == null ? void 0 : y.status,
                headers: (b = i.init) != null && b.headers ? new Headers(i.init.headers) : void 0
            };
        }
        return {
            type: Xe.data,
            data: i
        };
    }
    function Yg(n, i, c, s, o, d) {
        let m = n.headers.get("Location");
        if (Re(m, "Redirects returned/thrown from loaders/actions must have a Location header"), !mf.test(m)) {
            let v = s.slice(0, s.findIndex((g)=>g.route.id === c) + 1);
            m = $s(new URL(i.url), v, o, !0, m, d), n.headers.set("Location", m);
        }
        return n;
    }
    function _m(n, i, c) {
        if (mf.test(n)) {
            let s = n, o = s.startsWith("//") ? new URL(i.protocol + s) : new URL(s), d = Zn(o.pathname, c) != null;
            if (o.origin === i.origin && d) return o.pathname + o.search + o.hash;
        }
        return n;
    }
    function Xn(n, i, c, s) {
        let o = n.createURL(dy(i)).toString(), d = {
            signal: c
        };
        if (s && pl(s.formMethod)) {
            let { formMethod: m, formEncType: v } = s;
            d.method = m.toUpperCase(), v === "application/json" ? (d.headers = new Headers({
                "Content-Type": v
            }), d.body = JSON.stringify(s.json)) : v === "text/plain" ? d.body = s.text : v === "application/x-www-form-urlencoded" && s.formData ? d.body = Ps(s.formData) : d.body = s.formData;
        }
        return new Request(o, d);
    }
    function Ps(n) {
        let i = new URLSearchParams;
        for (let [c, s] of n.entries())i.append(c, typeof s == "string" ? s : s.name);
        return i;
    }
    function Cm(n) {
        let i = new FormData;
        for (let [c, s] of n.entries())i.append(c, s);
        return i;
    }
    function Gg(n, i, c, s, o) {
        let d = {}, m = null, v, g = !1, y = {}, b = c && Wt(c[1]) ? c[1].error : void 0;
        return n.forEach((S)=>{
            if (!(S.route.id in i)) return;
            let _ = S.route.id, N = i[_];
            if (Re(!Ia(N), "Cannot handle redirect results in processLoaderData"), Wt(N)) {
                let j = N.error;
                b !== void 0 && (j = b, b = void 0), m = m || {};
                {
                    let L = ka(n, _);
                    m[L.route.id] == null && (m[L.route.id] = j);
                }
                d[_] = void 0, g || (g = !0, v = Fu(N.error) ? N.error.status : 500), N.headers && (y[_] = N.headers);
            } else Ta(N) ? (s.set(_, N.deferredData), d[_] = N.deferredData.data, N.statusCode != null && N.statusCode !== 200 && !g && (v = N.statusCode), N.headers && (y[_] = N.headers)) : (d[_] = N.data, N.statusCode && N.statusCode !== 200 && !g && (v = N.statusCode), N.headers && (y[_] = N.headers));
        }), b !== void 0 && c && (m = {
            [c[0]]: b
        }, d[c[0]] = void 0), {
            loaderData: d,
            errors: m,
            statusCode: v || 200,
            loaderHeaders: y
        };
    }
    function zm(n, i, c, s, o, d, m) {
        let { loaderData: v, errors: g } = Gg(i, c, s, m);
        return o.forEach((y)=>{
            let { key: b, match: S, controller: _ } = y, N = d[b];
            if (Re(N, "Did not find corresponding fetcher result"), !(_ && _.signal.aborted)) if (Wt(N)) {
                let j = ka(n.matches, S?.route.id);
                g && g[j.route.id] || (g = tt({}, g, {
                    [j.route.id]: N.error
                })), n.fetchers.delete(b);
            } else if (Ia(N)) Re(!1, "Unhandled fetcher revalidation redirect");
            else if (Ta(N)) Re(!1, "Unhandled fetcher deferred data");
            else {
                let j = Aa(N.data);
                n.fetchers.set(b, j);
            }
        }), {
            loaderData: v,
            errors: g
        };
    }
    function Rm(n, i, c, s) {
        let o = tt({}, i);
        for (let d of c){
            let m = d.route.id;
            if (i.hasOwnProperty(m) ? i[m] !== void 0 && (o[m] = i[m]) : n[m] !== void 0 && d.route.loader && (o[m] = n[m]), s && s.hasOwnProperty(m)) break;
        }
        return o;
    }
    function xm(n) {
        return n ? Wt(n[1]) ? {
            actionData: {}
        } : {
            actionData: {
                [n[0]]: n[1].data
            }
        } : {};
    }
    function ka(n, i) {
        return (i ? n.slice(0, n.findIndex((s)=>s.route.id === i) + 1) : [
            ...n
        ]).reverse().find((s)=>s.route.hasErrorBoundary === !0) || n[0];
    }
    function Um(n) {
        let i = n.length === 1 ? n[0] : n.find((c)=>c.index || !c.path || c.path === "/") || {
            id: "__shim-error-route__"
        };
        return {
            matches: [
                {
                    params: {},
                    pathname: "",
                    pathnameBase: "",
                    route: i
                }
            ],
            route: i
        };
    }
    function qt(n, i) {
        let { pathname: c, routeId: s, method: o, type: d, message: m } = i === void 0 ? {} : i, v = "Unknown Server Error", g = "Unknown @remix-run/router error";
        return n === 400 ? (v = "Bad Request", o && c && s ? g = "You made a " + o + ' request to "' + c + '" but ' + ('did not provide a `loader` for route "' + s + '", ') + "so there is no way to handle the request." : d === "defer-action" ? g = "defer() is not supported in actions" : d === "invalid-body" && (g = "Unable to encode submission body")) : n === 403 ? (v = "Forbidden", g = 'Route "' + s + '" does not match URL "' + c + '"') : n === 404 ? (v = "Not Found", g = 'No route matches URL "' + c + '"') : n === 405 && (v = "Method Not Allowed", o && c && s ? g = "You made a " + o.toUpperCase() + ' request to "' + c + '" but ' + ('did not provide an `action` for route "' + s + '", ') + "so there is no way to handle the request." : o && (g = 'Invalid request method "' + o.toUpperCase() + '"')), new gr(n || 500, v, new Error(g), !0);
    }
    function dr(n) {
        let i = Object.entries(n);
        for(let c = i.length - 1; c >= 0; c--){
            let [s, o] = i[c];
            if (Ia(o)) return {
                key: s,
                result: o
            };
        }
    }
    function dy(n) {
        let i = typeof n == "string" ? Ma(n) : n;
        return en(tt({}, i, {
            hash: ""
        }));
    }
    function Xg(n, i) {
        return n.pathname !== i.pathname || n.search !== i.search ? !1 : n.hash === "" ? i.hash !== "" : n.hash === i.hash ? !0 : i.hash !== "";
    }
    function Vg(n) {
        return hy(n.result) && zg.has(n.result.status);
    }
    function Ta(n) {
        return n.type === Xe.deferred;
    }
    function Wt(n) {
        return n.type === Xe.error;
    }
    function Ia(n) {
        return (n && n.type) === Xe.redirect;
    }
    function Nm(n) {
        return typeof n == "object" && n != null && "type" in n && "data" in n && "init" in n && n.type === "DataWithResponseInit";
    }
    function Zg(n) {
        let i = n;
        return i && typeof i == "object" && typeof i.data == "object" && typeof i.subscribe == "function" && typeof i.cancel == "function" && typeof i.resolveData == "function";
    }
    function hy(n) {
        return n != null && typeof n.status == "number" && typeof n.statusText == "string" && typeof n.headers == "object" && typeof n.body < "u";
    }
    function Kg(n) {
        return Cg.has(n.toLowerCase());
    }
    function pl(n) {
        return Og.has(n.toLowerCase());
    }
    async function Jg(n, i, c, s, o) {
        let d = Object.entries(i);
        for(let m = 0; m < d.length; m++){
            let [v, g] = d[m], y = n.find((_)=>_?.route.id === v);
            if (!y) continue;
            let b = s.find((_)=>_.route.id === y.route.id), S = b != null && !fy(b, y) && (o && o[y.route.id]) !== void 0;
            Ta(g) && S && await yf(g, c, !1).then((_)=>{
                _ && (i[v] = _);
            });
        }
    }
    async function Fg(n, i, c) {
        for(let s = 0; s < c.length; s++){
            let { key: o, routeId: d, controller: m } = c[s], v = i[o];
            n.find((y)=>y?.route.id === d) && Ta(v) && (Re(m, "Expected an AbortController for revalidating fetcher deferred result"), await yf(v, m.signal, !0).then((y)=>{
                y && (i[o] = y);
            }));
        }
    }
    async function yf(n, i, c) {
        if (c === void 0 && (c = !1), !await n.deferredData.resolveData(i)) {
            if (c) try {
                return {
                    type: Xe.data,
                    data: n.deferredData.unwrappedData
                };
            } catch (o) {
                return {
                    type: Xe.error,
                    error: o
                };
            }
            return {
                type: Xe.data,
                data: n.deferredData.data
            };
        }
    }
    function vf(n) {
        return new URLSearchParams(n).getAll("index").some((i)=>i === "");
    }
    function Vu(n, i) {
        let c = typeof i == "string" ? Ma(i).search : i.search;
        if (n[n.length - 1].route.index && vf(c || "")) return n[n.length - 1];
        let s = ry(n);
        return s[s.length - 1];
    }
    function Bm(n) {
        let { formMethod: i, formAction: c, formEncType: s, text: o, formData: d, json: m } = n;
        if (!(!i || !c || !s)) {
            if (o != null) return {
                formMethod: i,
                formAction: c,
                formEncType: s,
                formData: void 0,
                json: void 0,
                text: o
            };
            if (d != null) return {
                formMethod: i,
                formAction: c,
                formEncType: s,
                formData: d,
                json: void 0,
                text: void 0
            };
            if (m !== void 0) return {
                formMethod: i,
                formAction: c,
                formEncType: s,
                formData: void 0,
                json: m,
                text: void 0
            };
        }
    }
    function Fs(n, i) {
        return i ? {
            state: "loading",
            location: n,
            formMethod: i.formMethod,
            formAction: i.formAction,
            formEncType: i.formEncType,
            formData: i.formData,
            json: i.json,
            text: i.text
        } : {
            state: "loading",
            location: n,
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0
        };
    }
    function Wg(n, i) {
        return {
            state: "submitting",
            location: n,
            formMethod: i.formMethod,
            formAction: i.formAction,
            formEncType: i.formEncType,
            formData: i.formData,
            json: i.json,
            text: i.text
        };
    }
    function Yu(n, i) {
        return n ? {
            state: "loading",
            formMethod: n.formMethod,
            formAction: n.formAction,
            formEncType: n.formEncType,
            formData: n.formData,
            json: n.json,
            text: n.text,
            data: i
        } : {
            state: "loading",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0,
            data: i
        };
    }
    function $g(n, i) {
        return {
            state: "submitting",
            formMethod: n.formMethod,
            formAction: n.formAction,
            formEncType: n.formEncType,
            formData: n.formData,
            json: n.json,
            text: n.text,
            data: i ? i.data : void 0
        };
    }
    function Aa(n) {
        return {
            state: "idle",
            formMethod: void 0,
            formAction: void 0,
            formEncType: void 0,
            formData: void 0,
            json: void 0,
            text: void 0,
            data: n
        };
    }
    function kg(n, i) {
        try {
            let c = n.sessionStorage.getItem(sy);
            if (c) {
                let s = JSON.parse(c);
                for (let [o, d] of Object.entries(s || {}))d && Array.isArray(d) && i.set(o, new Set(d || []));
            }
        } catch  {}
    }
    function Pg(n, i) {
        if (i.size > 0) {
            let c = {};
            for (let [s, o] of i)c[s] = [
                ...o
            ];
            try {
                n.sessionStorage.setItem(sy, JSON.stringify(c));
            } catch (s) {
                Vn(!1, "Failed to save applied view transitions in sessionStorage (" + s + ").");
            }
        }
    }
    function pr() {
        return pr = Object.assign ? Object.assign.bind() : function(n) {
            for(var i = 1; i < arguments.length; i++){
                var c = arguments[i];
                for(var s in c)Object.prototype.hasOwnProperty.call(c, s) && (n[s] = c[s]);
            }
            return n;
        }, pr.apply(this, arguments);
    }
    const Tr = Y.createContext(null), my = Y.createContext(null), ln = Y.createContext(null), gf = Y.createContext(null), Fl = Y.createContext({
        outlet: null,
        matches: [],
        isDataRoute: !1
    }), yy = Y.createContext(null);
    function Ig(n, i) {
        let { relative: c } = i === void 0 ? {} : i;
        Pu() || Re(!1);
        let { basename: s, navigator: o } = Y.useContext(ln), { hash: d, pathname: m, search: v } = gy(n, {
            relative: c
        }), g = m;
        return s !== "/" && (g = m === "/" ? s : Kl([
            s,
            m
        ])), o.createHref({
            pathname: g,
            search: v,
            hash: d
        });
    }
    function Pu() {
        return Y.useContext(gf) != null;
    }
    function an() {
        return Pu() || Re(!1), Y.useContext(gf).location;
    }
    function vy(n) {
        Y.useContext(ln).static || Y.useLayoutEffect(n);
    }
    pf = function() {
        let { isDataRoute: n } = Y.useContext(Fl);
        return n ? hp() : ep();
    };
    function ep() {
        Pu() || Re(!1);
        let n = Y.useContext(Tr), { basename: i, future: c, navigator: s } = Y.useContext(ln), { matches: o } = Y.useContext(Fl), { pathname: d } = an(), m = JSON.stringify(df(o, c.v7_relativeSplatPath)), v = Y.useRef(!1);
        return vy(()=>{
            v.current = !0;
        }), Y.useCallback(function(y, b) {
            if (b === void 0 && (b = {}), !v.current) return;
            if (typeof y == "number") {
                s.go(y);
                return;
            }
            let S = hf(y, JSON.parse(m), d, b.relative === "path");
            n == null && i !== "/" && (S.pathname = S.pathname === "/" ? i : Kl([
                i,
                S.pathname
            ])), (b.replace ? s.replace : s.push)(S, b.state, b);
        }, [
            i,
            s,
            m,
            d,
            n
        ]);
    }
    const tp = Y.createContext(null);
    function lp(n) {
        let i = Y.useContext(Fl).outlet;
        return i && Y.createElement(tp.Provider, {
            value: n
        }, i);
    }
    mS = function() {
        let { matches: n } = Y.useContext(Fl), i = n[n.length - 1];
        return i ? i.params : {};
    };
    function gy(n, i) {
        let { relative: c } = i === void 0 ? {} : i, { future: s } = Y.useContext(ln), { matches: o } = Y.useContext(Fl), { pathname: d } = an(), m = JSON.stringify(df(o, s.v7_relativeSplatPath));
        return Y.useMemo(()=>hf(n, JSON.parse(m), d, c === "path"), [
            n,
            m,
            d,
            c
        ]);
    }
    function ap(n, i, c, s) {
        Pu() || Re(!1);
        let { navigator: o } = Y.useContext(ln), { matches: d } = Y.useContext(Fl), m = d[d.length - 1], v = m ? m.params : {};
        m && m.pathname;
        let g = m ? m.pathnameBase : "/";
        m && m.route;
        let y = an(), b;
        b = y;
        let S = b.pathname || "/", _ = S;
        if (g !== "/") {
            let L = g.replace(/^\//, "").split("/");
            _ = "/" + S.replace(/^\//, "").split("/").slice(L.length).join("/");
        }
        let N = $a(n, {
            pathname: _
        });
        return cp(N && N.map((L)=>Object.assign({}, L, {
                params: Object.assign({}, v, L.params),
                pathname: Kl([
                    g,
                    o.encodeLocation ? o.encodeLocation(L.pathname).pathname : L.pathname
                ]),
                pathnameBase: L.pathnameBase === "/" ? g : Kl([
                    g,
                    o.encodeLocation ? o.encodeLocation(L.pathnameBase).pathname : L.pathnameBase
                ])
            })), d, c, s);
    }
    function np() {
        let n = dp(), i = Fu(n) ? n.status + " " + n.statusText : n instanceof Error ? n.message : JSON.stringify(n), c = n instanceof Error ? n.stack : null, o = {
            padding: "0.5rem",
            backgroundColor: "rgba(200,200,200, 0.5)"
        };
        return Y.createElement(Y.Fragment, null, Y.createElement("h2", null, "Unexpected Application Error!"), Y.createElement("h3", {
            style: {
                fontStyle: "italic"
            }
        }, i), c ? Y.createElement("pre", {
            style: o
        }, c) : null, null);
    }
    const up = Y.createElement(np, null);
    class ip extends Y.Component {
        constructor(i){
            super(i), this.state = {
                location: i.location,
                revalidation: i.revalidation,
                error: i.error
            };
        }
        static getDerivedStateFromError(i) {
            return {
                error: i
            };
        }
        static getDerivedStateFromProps(i, c) {
            return c.location !== i.location || c.revalidation !== "idle" && i.revalidation === "idle" ? {
                error: i.error,
                location: i.location,
                revalidation: i.revalidation
            } : {
                error: i.error !== void 0 ? i.error : c.error,
                location: c.location,
                revalidation: i.revalidation || c.revalidation
            };
        }
        componentDidCatch(i, c) {
            console.error("React Router caught the following error during render", i, c);
        }
        render() {
            return this.state.error !== void 0 ? Y.createElement(Fl.Provider, {
                value: this.props.routeContext
            }, Y.createElement(yy.Provider, {
                value: this.state.error,
                children: this.props.component
            })) : this.props.children;
        }
    }
    function rp(n) {
        let { routeContext: i, match: c, children: s } = n, o = Y.useContext(Tr);
        return o && o.static && o.staticContext && (c.route.errorElement || c.route.ErrorBoundary) && (o.staticContext._deepestRenderedBoundaryId = c.route.id), Y.createElement(Fl.Provider, {
            value: i
        }, s);
    }
    function cp(n, i, c, s) {
        var o;
        if (i === void 0 && (i = []), c === void 0 && (c = null), s === void 0 && (s = null), n == null) {
            var d;
            if (!c) return null;
            if (c.errors) n = c.matches;
            else if ((d = s) != null && d.v7_partialHydration && i.length === 0 && !c.initialized && c.matches.length > 0) n = c.matches;
            else return null;
        }
        let m = n, v = (o = c) == null ? void 0 : o.errors;
        if (v != null) {
            let b = m.findIndex((S)=>S.route.id && v?.[S.route.id] !== void 0);
            b >= 0 || Re(!1), m = m.slice(0, Math.min(m.length, b + 1));
        }
        let g = !1, y = -1;
        if (c && s && s.v7_partialHydration) for(let b = 0; b < m.length; b++){
            let S = m[b];
            if ((S.route.HydrateFallback || S.route.hydrateFallbackElement) && (y = b), S.route.id) {
                let { loaderData: _, errors: N } = c, j = S.route.loader && _[S.route.id] === void 0 && (!N || N[S.route.id] === void 0);
                if (S.route.lazy || j) {
                    g = !0, y >= 0 ? m = m.slice(0, y + 1) : m = [
                        m[0]
                    ];
                    break;
                }
            }
        }
        return m.reduceRight((b, S, _)=>{
            let N, j = !1, L = null, X = null;
            c && (N = v && S.route.id ? v[S.route.id] : void 0, L = S.route.errorElement || up, g && (y < 0 && _ === 0 ? (mp("route-fallback"), j = !0, X = null) : y === _ && (j = !0, X = S.route.hydrateFallbackElement || null)));
            let te = i.concat(m.slice(0, _ + 1)), W = ()=>{
                let ne;
                return N ? ne = L : j ? ne = X : S.route.Component ? ne = Y.createElement(S.route.Component, null) : S.route.element ? ne = S.route.element : ne = b, Y.createElement(rp, {
                    match: S,
                    routeContext: {
                        outlet: b,
                        matches: te,
                        isDataRoute: c != null
                    },
                    children: ne
                });
            };
            return c && (S.route.ErrorBoundary || S.route.errorElement || _ === 0) ? Y.createElement(ip, {
                location: c.location,
                revalidation: c.revalidation,
                component: L,
                error: N,
                children: W(),
                routeContext: {
                    outlet: null,
                    matches: te,
                    isDataRoute: !0
                }
            }) : W();
        }, null);
    }
    var py = (function(n) {
        return n.UseBlocker = "useBlocker", n.UseRevalidator = "useRevalidator", n.UseNavigateStable = "useNavigate", n;
    })(py || {}), Sy = (function(n) {
        return n.UseBlocker = "useBlocker", n.UseLoaderData = "useLoaderData", n.UseActionData = "useActionData", n.UseRouteError = "useRouteError", n.UseNavigation = "useNavigation", n.UseRouteLoaderData = "useRouteLoaderData", n.UseMatches = "useMatches", n.UseRevalidator = "useRevalidator", n.UseNavigateStable = "useNavigate", n.UseRouteId = "useRouteId", n;
    })(Sy || {});
    function sp(n) {
        let i = Y.useContext(Tr);
        return i || Re(!1), i;
    }
    function fp(n) {
        let i = Y.useContext(my);
        return i || Re(!1), i;
    }
    function op(n) {
        let i = Y.useContext(Fl);
        return i || Re(!1), i;
    }
    function by(n) {
        let i = op(), c = i.matches[i.matches.length - 1];
        return c.route.id || Re(!1), c.route.id;
    }
    function dp() {
        var n;
        let i = Y.useContext(yy), c = fp(), s = by();
        return i !== void 0 ? i : (n = c.errors) == null ? void 0 : n[s];
    }
    function hp() {
        let { router: n } = sp(py.UseNavigateStable), i = by(Sy.UseNavigateStable), c = Y.useRef(!1);
        return vy(()=>{
            c.current = !0;
        }), Y.useCallback(function(o, d) {
            d === void 0 && (d = {}), c.current && (typeof o == "number" ? n.navigate(o) : n.navigate(o, pr({
                fromRouteId: i
            }, d)));
        }, [
            n,
            i
        ]);
    }
    const jm = {};
    function mp(n, i, c) {
        jm[n] || (jm[n] = !0);
    }
    function yp(n, i) {
        n?.v7_startTransition, n?.v7_relativeSplatPath === void 0 && (!i || i.v7_relativeSplatPath), i && (i.v7_fetcherPersist, i.v7_normalizeFormMethod, i.v7_partialHydration, i.v7_skipActionErrorRevalidation);
    }
    function vp(n) {
        return lp(n.context);
    }
    function gp(n) {
        let { basename: i = "/", children: c = null, location: s, navigationType: o = yt.Pop, navigator: d, static: m = !1, future: v } = n;
        Pu() && Re(!1);
        let g = i.replace(/^\/*/, "/"), y = Y.useMemo(()=>({
                basename: g,
                navigator: d,
                static: m,
                future: pr({
                    v7_relativeSplatPath: !1
                }, v)
            }), [
            g,
            v,
            d,
            m
        ]);
        typeof s == "string" && (s = Ma(s));
        let { pathname: b = "/", search: S = "", hash: _ = "", state: N = null, key: j = "default" } = s, L = Y.useMemo(()=>{
            let X = Zn(b, g);
            return X == null ? null : {
                location: {
                    pathname: X,
                    search: S,
                    hash: _,
                    state: N,
                    key: j
                },
                navigationType: o
            };
        }, [
            g,
            b,
            S,
            _,
            N,
            j,
            o
        ]);
        return L == null ? null : Y.createElement(ln.Provider, {
            value: y
        }, Y.createElement(gf.Provider, {
            children: c,
            value: L
        }));
    }
    new Promise(()=>{});
    function pp(n) {
        let i = {
            hasErrorBoundary: n.ErrorBoundary != null || n.errorElement != null
        };
        return n.Component && Object.assign(i, {
            element: Y.createElement(n.Component),
            Component: void 0
        }), n.HydrateFallback && Object.assign(i, {
            hydrateFallbackElement: Y.createElement(n.HydrateFallback),
            HydrateFallback: void 0
        }), n.ErrorBoundary && Object.assign(i, {
            errorElement: Y.createElement(n.ErrorBoundary),
            ErrorBoundary: void 0
        }), i;
    }
    function Wu() {
        return Wu = Object.assign ? Object.assign.bind() : function(n) {
            for(var i = 1; i < arguments.length; i++){
                var c = arguments[i];
                for(var s in c)Object.prototype.hasOwnProperty.call(c, s) && (n[s] = c[s]);
            }
            return n;
        }, Wu.apply(this, arguments);
    }
    function Sp(n, i) {
        if (n == null) return {};
        var c = {}, s = Object.keys(n), o, d;
        for(d = 0; d < s.length; d++)o = s[d], !(i.indexOf(o) >= 0) && (c[o] = n[o]);
        return c;
    }
    function bp(n) {
        return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey);
    }
    function Ep(n, i) {
        return n.button === 0 && (!i || i === "_self") && !bp(n);
    }
    function Is(n) {
        return n === void 0 && (n = ""), new URLSearchParams(typeof n == "string" || Array.isArray(n) || n instanceof URLSearchParams ? n : Object.keys(n).reduce((i, c)=>{
            let s = n[c];
            return i.concat(Array.isArray(s) ? s.map((o)=>[
                    c,
                    o
                ]) : [
                [
                    c,
                    s
                ]
            ]);
        }, []));
    }
    function Ap(n, i) {
        let c = Is(n);
        return i && i.forEach((s, o)=>{
            c.has(o) || i.getAll(o).forEach((d)=>{
                c.append(o, d);
            });
        }), c;
    }
    const Tp = [
        "onClick",
        "relative",
        "reloadDocument",
        "replace",
        "state",
        "target",
        "to",
        "preventScrollReset",
        "viewTransition"
    ], Mp = "6";
    try {
        window.__reactRouterVersion = Mp;
    } catch  {}
    function Dp(n, i) {
        return Ng({
            basename: void 0,
            future: Wu({}, void 0, {
                v7_prependBasename: !0
            }),
            history: ag({
                window: void 0
            }),
            hydrationData: Op(),
            routes: n,
            mapRouteProperties: pp,
            dataStrategy: void 0,
            patchRoutesOnNavigation: void 0,
            window: void 0
        }).initialize();
    }
    function Op() {
        var n;
        let i = (n = window) == null ? void 0 : n.__staticRouterHydrationData;
        return i && i.errors && (i = Wu({}, i, {
            errors: _p(i.errors)
        })), i;
    }
    function _p(n) {
        if (!n) return null;
        let i = Object.entries(n), c = {};
        for (let [s, o] of i)if (o && o.__type === "RouteErrorResponse") c[s] = new gr(o.status, o.statusText, o.data, o.internal === !0);
        else if (o && o.__type === "Error") {
            if (o.__subType) {
                let d = window[o.__subType];
                if (typeof d == "function") try {
                    let m = new d(o.message);
                    m.stack = "", c[s] = m;
                } catch  {}
            }
            if (c[s] == null) {
                let d = new Error(o.message);
                d.stack = "", c[s] = d;
            }
        } else c[s] = o;
        return c;
    }
    const Cp = Y.createContext({
        isTransitioning: !1
    }), zp = Y.createContext(new Map), Rp = "startTransition", Lm = Fv[Rp], xp = "flushSync", Hm = lg[xp];
    function Up(n) {
        Lm ? Lm(n) : n();
    }
    function Gu(n) {
        Hm ? Hm(n) : n();
    }
    class Np {
        constructor(){
            this.status = "pending", this.promise = new Promise((i, c)=>{
                this.resolve = (s)=>{
                    this.status === "pending" && (this.status = "resolved", i(s));
                }, this.reject = (s)=>{
                    this.status === "pending" && (this.status = "rejected", c(s));
                };
            });
        }
    }
    function Bp(n) {
        let { fallbackElement: i, router: c, future: s } = n, [o, d] = Y.useState(c.state), [m, v] = Y.useState(), [g, y] = Y.useState({
            isTransitioning: !1
        }), [b, S] = Y.useState(), [_, N] = Y.useState(), [j, L] = Y.useState(), X = Y.useRef(new Map), { v7_startTransition: te } = s || {}, W = Y.useCallback((I)=>{
            te ? Up(I) : I();
        }, [
            te
        ]), ne = Y.useCallback((I, ve)=>{
            let { deletedFetchers: he, flushSync: He, viewTransitionOpts: pe } = ve;
            I.fetchers.forEach((Oe, Fe)=>{
                Oe.data !== void 0 && X.current.set(Fe, Oe.data);
            }), he.forEach((Oe)=>X.current.delete(Oe));
            let at = c.window == null || c.window.document == null || typeof c.window.document.startViewTransition != "function";
            if (!pe || at) {
                He ? Gu(()=>d(I)) : W(()=>d(I));
                return;
            }
            if (He) {
                Gu(()=>{
                    _ && (b && b.resolve(), _.skipTransition()), y({
                        isTransitioning: !0,
                        flushSync: !0,
                        currentLocation: pe.currentLocation,
                        nextLocation: pe.nextLocation
                    });
                });
                let Oe = c.window.document.startViewTransition(()=>{
                    Gu(()=>d(I));
                });
                Oe.finished.finally(()=>{
                    Gu(()=>{
                        S(void 0), N(void 0), v(void 0), y({
                            isTransitioning: !1
                        });
                    });
                }), Gu(()=>N(Oe));
                return;
            }
            _ ? (b && b.resolve(), _.skipTransition(), L({
                state: I,
                currentLocation: pe.currentLocation,
                nextLocation: pe.nextLocation
            })) : (v(I), y({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: pe.currentLocation,
                nextLocation: pe.nextLocation
            }));
        }, [
            c.window,
            _,
            b,
            X,
            W
        ]);
        Y.useLayoutEffect(()=>c.subscribe(ne), [
            c,
            ne
        ]), Y.useEffect(()=>{
            g.isTransitioning && !g.flushSync && S(new Np);
        }, [
            g
        ]), Y.useEffect(()=>{
            if (b && m && c.window) {
                let I = m, ve = b.promise, he = c.window.document.startViewTransition(async ()=>{
                    W(()=>d(I)), await ve;
                });
                he.finished.finally(()=>{
                    S(void 0), N(void 0), v(void 0), y({
                        isTransitioning: !1
                    });
                }), N(he);
            }
        }, [
            W,
            m,
            b,
            c.window
        ]), Y.useEffect(()=>{
            b && m && o.location.key === m.location.key && b.resolve();
        }, [
            b,
            _,
            o.location,
            m
        ]), Y.useEffect(()=>{
            !g.isTransitioning && j && (v(j.state), y({
                isTransitioning: !0,
                flushSync: !1,
                currentLocation: j.currentLocation,
                nextLocation: j.nextLocation
            }), L(void 0));
        }, [
            g.isTransitioning,
            j
        ]), Y.useEffect(()=>{}, []);
        let de = Y.useMemo(()=>({
                createHref: c.createHref,
                encodeLocation: c.encodeLocation,
                go: (I)=>c.navigate(I),
                push: (I, ve, he)=>c.navigate(I, {
                        state: ve,
                        preventScrollReset: he?.preventScrollReset
                    }),
                replace: (I, ve, he)=>c.navigate(I, {
                        replace: !0,
                        state: ve,
                        preventScrollReset: he?.preventScrollReset
                    })
            }), [
            c
        ]), Ee = c.basename || "/", qe = Y.useMemo(()=>({
                router: c,
                navigator: de,
                static: !1,
                basename: Ee
            }), [
            c,
            de,
            Ee
        ]), O = Y.useMemo(()=>({
                v7_relativeSplatPath: c.future.v7_relativeSplatPath
            }), [
            c.future.v7_relativeSplatPath
        ]);
        return Y.useEffect(()=>yp(s, c.future), [
            s,
            c.future
        ]), Y.createElement(Y.Fragment, null, Y.createElement(Tr.Provider, {
            value: qe
        }, Y.createElement(my.Provider, {
            value: o
        }, Y.createElement(zp.Provider, {
            value: X.current
        }, Y.createElement(Cp.Provider, {
            value: g
        }, Y.createElement(gp, {
            basename: Ee,
            location: o.location,
            navigationType: o.historyAction,
            navigator: de,
            future: O
        }, o.initialized || c.future.v7_partialHydration ? Y.createElement(jp, {
            routes: c.routes,
            future: c.future,
            state: o
        }) : i))))), null);
    }
    const jp = Y.memo(Lp);
    function Lp(n) {
        let { routes: i, future: c, state: s } = n;
        return ap(i, void 0, s, c);
    }
    let Hp, wp;
    Hp = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
    wp = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;
    Zu = Y.forwardRef(function(i, c) {
        let { onClick: s, relative: o, reloadDocument: d, replace: m, state: v, target: g, to: y, preventScrollReset: b, viewTransition: S } = i, _ = Sp(i, Tp), { basename: N } = Y.useContext(ln), j, L = !1;
        if (typeof y == "string" && wp.test(y) && (j = y, Hp)) try {
            let ne = new URL(window.location.href), de = y.startsWith("//") ? new URL(ne.protocol + y) : new URL(y), Ee = Zn(de.pathname, N);
            de.origin === ne.origin && Ee != null ? y = Ee + de.search + de.hash : L = !0;
        } catch  {}
        let X = Ig(y, {
            relative: o
        }), te = qp(y, {
            replace: m,
            state: v,
            target: g,
            preventScrollReset: b,
            relative: o,
            viewTransition: S
        });
        function W(ne) {
            s && s(ne), ne.defaultPrevented || te(ne);
        }
        return Y.createElement("a", Wu({}, _, {
            href: j || X,
            onClick: L || d ? s : W,
            ref: c,
            target: g
        }));
    });
    var wm;
    (function(n) {
        n.UseScrollRestoration = "useScrollRestoration", n.UseSubmit = "useSubmit", n.UseSubmitFetcher = "useSubmitFetcher", n.UseFetcher = "useFetcher", n.useViewTransitionState = "useViewTransitionState";
    })(wm || (wm = {}));
    var qm;
    (function(n) {
        n.UseFetcher = "useFetcher", n.UseFetchers = "useFetchers", n.UseScrollRestoration = "useScrollRestoration";
    })(qm || (qm = {}));
    function qp(n, i) {
        let { target: c, replace: s, state: o, preventScrollReset: d, relative: m, viewTransition: v } = i === void 0 ? {} : i, g = pf(), y = an(), b = gy(n, {
            relative: m
        });
        return Y.useCallback((S)=>{
            if (Ep(S, c)) {
                S.preventDefault();
                let _ = s !== void 0 ? s : en(y) === en(b);
                g(n, {
                    replace: _,
                    state: o,
                    preventScrollReset: d,
                    relative: m,
                    viewTransition: v
                });
            }
        }, [
            y,
            g,
            b,
            s,
            o,
            c,
            n,
            d,
            m,
            v
        ]);
    }
    yS = function(n) {
        let i = Y.useRef(Is(n)), c = Y.useRef(!1), s = an(), o = Y.useMemo(()=>Ap(s.search, c.current ? null : i.current), [
            s.search
        ]), d = pf(), m = Y.useCallback((v, g)=>{
            const y = Is(typeof v == "function" ? v(o) : v);
            c.current = !0, d("?" + y, g);
        }, [
            d,
            o
        ]);
        return [
            o,
            m
        ];
    };
    let Qp, Yp;
    Mr = class {
        constructor(){
            this.listeners = new Set, this.subscribe = this.subscribe.bind(this);
        }
        subscribe(n) {
            return this.listeners.add(n), this.onSubscribe(), ()=>{
                this.listeners.delete(n), this.onUnsubscribe();
            };
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    };
    Qp = {
        setTimeout: (n, i)=>setTimeout(n, i),
        clearTimeout: (n)=>clearTimeout(n),
        setInterval: (n, i)=>setInterval(n, i),
        clearInterval: (n)=>clearInterval(n)
    };
    Yp = class {
        #e = Qp;
        #t = !1;
        setTimeoutProvider(n) {
            this.#e = n;
        }
        setTimeout(n, i) {
            return this.#e.setTimeout(n, i);
        }
        clearTimeout(n) {
            this.#e.clearTimeout(n);
        }
        setInterval(n, i) {
            return this.#e.setInterval(n, i);
        }
        clearInterval(n) {
            this.#e.clearInterval(n);
        }
    };
    ef = new Yp;
    function Gp(n) {
        setTimeout(n, 0);
    }
    Dr = typeof window > "u" || "Deno" in globalThis;
    gl = function() {};
    function Xp(n, i) {
        return typeof n == "function" ? n(i) : n;
    }
    Vp = function(n) {
        return typeof n == "number" && n >= 0 && n !== 1 / 0;
    };
    Zp = function(n, i) {
        return Math.max(n + (i || 0) - Date.now(), 0);
    };
    tf = function(n, i) {
        return typeof n == "function" ? n(i) : n;
    };
    Kp = function(n, i) {
        return typeof n == "function" ? n(i) : n;
    };
    function Qm(n, i) {
        const { type: c = "all", exact: s, fetchStatus: o, predicate: d, queryKey: m, stale: v } = n;
        if (m) {
            if (s) {
                if (i.queryHash !== Sf(m, i.options)) return !1;
            } else if (!ku(i.queryKey, m)) return !1;
        }
        if (c !== "all") {
            const g = i.isActive();
            if (c === "active" && !g || c === "inactive" && g) return !1;
        }
        return !(typeof v == "boolean" && i.isStale() !== v || o && o !== i.state.fetchStatus || d && !d(i));
    }
    function Ym(n, i) {
        const { exact: c, status: s, predicate: o, mutationKey: d } = n;
        if (d) {
            if (!i.options.mutationKey) return !1;
            if (c) {
                if ($u(i.options.mutationKey) !== $u(d)) return !1;
            } else if (!ku(i.options.mutationKey, d)) return !1;
        }
        return !(s && i.state.status !== s || o && !o(i));
    }
    function Sf(n, i) {
        return (i?.queryKeyHashFn || $u)(n);
    }
    function $u(n) {
        return JSON.stringify(n, (i, c)=>lf(c) ? Object.keys(c).sort().reduce((s, o)=>(s[o] = c[o], s), {}) : c);
    }
    function ku(n, i) {
        return n === i ? !0 : typeof n != typeof i ? !1 : n && i && typeof n == "object" && typeof i == "object" ? Object.keys(i).every((c)=>ku(n[c], i[c])) : !1;
    }
    var Jp = Object.prototype.hasOwnProperty;
    function Ey(n, i) {
        if (n === i) return n;
        const c = Gm(n) && Gm(i);
        if (!c && !(lf(n) && lf(i))) return i;
        const o = (c ? n : Object.keys(n)).length, d = c ? i : Object.keys(i), m = d.length, v = c ? new Array(m) : {};
        let g = 0;
        for(let y = 0; y < m; y++){
            const b = c ? y : d[y], S = n[b], _ = i[b];
            if (S === _) {
                v[b] = S, (c ? y < o : Jp.call(n, b)) && g++;
                continue;
            }
            if (S === null || _ === null || typeof S != "object" || typeof _ != "object") {
                v[b] = _;
                continue;
            }
            const N = Ey(S, _);
            v[b] = N, N === S && g++;
        }
        return o === m && g === o ? n : v;
    }
    vS = function(n, i) {
        if (!i || Object.keys(n).length !== Object.keys(i).length) return !1;
        for(const c in n)if (n[c] !== i[c]) return !1;
        return !0;
    };
    function Gm(n) {
        return Array.isArray(n) && n.length === Object.keys(n).length;
    }
    function lf(n) {
        if (!Xm(n)) return !1;
        const i = n.constructor;
        if (i === void 0) return !0;
        const c = i.prototype;
        return !(!Xm(c) || !c.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(n) !== Object.prototype);
    }
    function Xm(n) {
        return Object.prototype.toString.call(n) === "[object Object]";
    }
    function Fp(n) {
        return new Promise((i)=>{
            ef.setTimeout(i, n);
        });
    }
    Wp = function(n, i, c) {
        return typeof c.structuralSharing == "function" ? c.structuralSharing(n, i) : c.structuralSharing !== !1 ? Ey(n, i) : i;
    };
    function $p(n, i, c = 0) {
        const s = [
            ...n,
            i
        ];
        return c && s.length > c ? s.slice(1) : s;
    }
    function kp(n, i, c = 0) {
        const s = [
            i,
            ...n
        ];
        return c && s.length > c ? s.slice(0, -1) : s;
    }
    var bf = Symbol();
    function Ay(n, i) {
        return !n.queryFn && i?.initialPromise ? ()=>i.initialPromise : !n.queryFn || n.queryFn === bf ? ()=>Promise.reject(new Error(`Missing queryFn: '${n.queryHash}'`)) : n.queryFn;
    }
    gS = function(n, i) {
        return typeof n == "function" ? n(...i) : !!n;
    };
    let Pp;
    Pp = class extends Mr {
        #e;
        #t;
        #l;
        constructor(){
            super(), this.#l = (n)=>{
                if (!Dr && window.addEventListener) {
                    const i = ()=>n();
                    return window.addEventListener("visibilitychange", i, !1), ()=>{
                        window.removeEventListener("visibilitychange", i);
                    };
                }
            };
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#l);
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0);
        }
        setEventListener(n) {
            this.#l = n, this.#t?.(), this.#t = n((i)=>{
                typeof i == "boolean" ? this.setFocused(i) : this.onFocus();
            });
        }
        setFocused(n) {
            this.#e !== n && (this.#e = n, this.onFocus());
        }
        onFocus() {
            const n = this.isFocused();
            this.listeners.forEach((i)=>{
                i(n);
            });
        }
        isFocused() {
            return typeof this.#e == "boolean" ? this.#e : globalThis.document?.visibilityState !== "hidden";
        }
    };
    Ty = new Pp;
    Ip = function() {
        let n, i;
        const c = new Promise((o, d)=>{
            n = o, i = d;
        });
        c.status = "pending", c.catch(()=>{});
        function s(o) {
            Object.assign(c, o), delete c.resolve, delete c.reject;
        }
        return c.resolve = (o)=>{
            s({
                status: "fulfilled",
                value: o
            }), n(o);
        }, c.reject = (o)=>{
            s({
                status: "rejected",
                reason: o
            }), i(o);
        }, c;
    };
    var e1 = Gp;
    function t1() {
        let n = [], i = 0, c = (v)=>{
            v();
        }, s = (v)=>{
            v();
        }, o = e1;
        const d = (v)=>{
            i ? n.push(v) : o(()=>{
                c(v);
            });
        }, m = ()=>{
            const v = n;
            n = [], v.length && o(()=>{
                s(()=>{
                    v.forEach((g)=>{
                        c(g);
                    });
                });
            });
        };
        return {
            batch: (v)=>{
                let g;
                i++;
                try {
                    g = v();
                } finally{
                    i--, i || m();
                }
                return g;
            },
            batchCalls: (v)=>(...g)=>{
                    d(()=>{
                        v(...g);
                    });
                },
            schedule: d,
            setNotifyFunction: (v)=>{
                c = v;
            },
            setBatchNotifyFunction: (v)=>{
                s = v;
            },
            setScheduler: (v)=>{
                o = v;
            }
        };
    }
    let l1, Sr;
    Rt = t1();
    l1 = class extends Mr {
        #e = !0;
        #t;
        #l;
        constructor(){
            super(), this.#l = (n)=>{
                if (!Dr && window.addEventListener) {
                    const i = ()=>n(!0), c = ()=>n(!1);
                    return window.addEventListener("online", i, !1), window.addEventListener("offline", c, !1), ()=>{
                        window.removeEventListener("online", i), window.removeEventListener("offline", c);
                    };
                }
            };
        }
        onSubscribe() {
            this.#t || this.setEventListener(this.#l);
        }
        onUnsubscribe() {
            this.hasListeners() || (this.#t?.(), this.#t = void 0);
        }
        setEventListener(n) {
            this.#l = n, this.#t?.(), this.#t = n(this.setOnline.bind(this));
        }
        setOnline(n) {
            this.#e !== n && (this.#e = n, this.listeners.forEach((c)=>{
                c(n);
            }));
        }
        isOnline() {
            return this.#e;
        }
    };
    Sr = new l1;
    function a1(n) {
        return Math.min(1e3 * 2 ** n, 3e4);
    }
    function My(n) {
        return (n ?? "online") === "online" ? Sr.isOnline() : !0;
    }
    var af = class extends Error {
        constructor(n){
            super("CancelledError"), this.revert = n?.revert, this.silent = n?.silent;
        }
    };
    function Dy(n) {
        let i = !1, c = 0, s;
        const o = Ip(), d = ()=>o.status !== "pending", m = (L)=>{
            if (!d()) {
                const X = new af(L);
                _(X), n.onCancel?.(X);
            }
        }, v = ()=>{
            i = !0;
        }, g = ()=>{
            i = !1;
        }, y = ()=>Ty.isFocused() && (n.networkMode === "always" || Sr.isOnline()) && n.canRun(), b = ()=>My(n.networkMode) && n.canRun(), S = (L)=>{
            d() || (s?.(), o.resolve(L));
        }, _ = (L)=>{
            d() || (s?.(), o.reject(L));
        }, N = ()=>new Promise((L)=>{
                s = (X)=>{
                    (d() || y()) && L(X);
                }, n.onPause?.();
            }).then(()=>{
                s = void 0, d() || n.onContinue?.();
            }), j = ()=>{
            if (d()) return;
            let L;
            const X = c === 0 ? n.initialPromise : void 0;
            try {
                L = X ?? n.fn();
            } catch (te) {
                L = Promise.reject(te);
            }
            Promise.resolve(L).then(S).catch((te)=>{
                if (d()) return;
                const W = n.retry ?? (Dr ? 0 : 3), ne = n.retryDelay ?? a1, de = typeof ne == "function" ? ne(c, te) : ne, Ee = W === !0 || typeof W == "number" && c < W || typeof W == "function" && W(c, te);
                if (i || !Ee) {
                    _(te);
                    return;
                }
                c++, n.onFail?.(c, te), Fp(de).then(()=>y() ? void 0 : N()).then(()=>{
                    i ? _(te) : j();
                });
            });
        };
        return {
            promise: o,
            status: ()=>o.status,
            cancel: m,
            continue: ()=>(s?.(), o),
            cancelRetry: v,
            continueRetry: g,
            canStart: b,
            start: ()=>(b() ? j() : N().then(j), o)
        };
    }
    var Oy = class {
        #e;
        destroy() {
            this.clearGcTimeout();
        }
        scheduleGc() {
            this.clearGcTimeout(), Vp(this.gcTime) && (this.#e = ef.setTimeout(()=>{
                this.optionalRemove();
            }, this.gcTime));
        }
        updateGcTime(n) {
            this.gcTime = Math.max(this.gcTime || 0, n ?? (Dr ? 1 / 0 : 300 * 1e3));
        }
        clearGcTimeout() {
            this.#e && (ef.clearTimeout(this.#e), this.#e = void 0);
        }
    }, n1 = class extends Oy {
        #e;
        #t;
        #l;
        #n;
        #a;
        #i;
        #r;
        constructor(n){
            super(), this.#r = !1, this.#i = n.defaultOptions, this.setOptions(n.options), this.observers = [], this.#n = n.client, this.#l = this.#n.getQueryCache(), this.queryKey = n.queryKey, this.queryHash = n.queryHash, this.#e = Zm(this.options), this.state = n.state ?? this.#e, this.scheduleGc();
        }
        get meta() {
            return this.options.meta;
        }
        get promise() {
            return this.#a?.promise;
        }
        setOptions(n) {
            if (this.options = {
                ...this.#i,
                ...n
            }, this.updateGcTime(this.options.gcTime), this.state && this.state.data === void 0) {
                const i = Zm(this.options);
                i.data !== void 0 && (this.setState(Vm(i.data, i.dataUpdatedAt)), this.#e = i);
            }
        }
        optionalRemove() {
            !this.observers.length && this.state.fetchStatus === "idle" && this.#l.remove(this);
        }
        setData(n, i) {
            const c = Wp(this.state.data, n, this.options);
            return this.#u({
                data: c,
                type: "success",
                dataUpdatedAt: i?.updatedAt,
                manual: i?.manual
            }), c;
        }
        setState(n, i) {
            this.#u({
                type: "setState",
                state: n,
                setStateOptions: i
            });
        }
        cancel(n) {
            const i = this.#a?.promise;
            return this.#a?.cancel(n), i ? i.then(gl).catch(gl) : Promise.resolve();
        }
        destroy() {
            super.destroy(), this.cancel({
                silent: !0
            });
        }
        reset() {
            this.destroy(), this.setState(this.#e);
        }
        isActive() {
            return this.observers.some((n)=>Kp(n.options.enabled, this) !== !1);
        }
        isDisabled() {
            return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === bf || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
        }
        isStatic() {
            return this.getObserversCount() > 0 ? this.observers.some((n)=>tf(n.options.staleTime, this) === "static") : !1;
        }
        isStale() {
            return this.getObserversCount() > 0 ? this.observers.some((n)=>n.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated;
        }
        isStaleByTime(n = 0) {
            return this.state.data === void 0 ? !0 : n === "static" ? !1 : this.state.isInvalidated ? !0 : !Zp(this.state.dataUpdatedAt, n);
        }
        onFocus() {
            this.observers.find((i)=>i.shouldFetchOnWindowFocus())?.refetch({
                cancelRefetch: !1
            }), this.#a?.continue();
        }
        onOnline() {
            this.observers.find((i)=>i.shouldFetchOnReconnect())?.refetch({
                cancelRefetch: !1
            }), this.#a?.continue();
        }
        addObserver(n) {
            this.observers.includes(n) || (this.observers.push(n), this.clearGcTimeout(), this.#l.notify({
                type: "observerAdded",
                query: this,
                observer: n
            }));
        }
        removeObserver(n) {
            this.observers.includes(n) && (this.observers = this.observers.filter((i)=>i !== n), this.observers.length || (this.#a && (this.#r ? this.#a.cancel({
                revert: !0
            }) : this.#a.cancelRetry()), this.scheduleGc()), this.#l.notify({
                type: "observerRemoved",
                query: this,
                observer: n
            }));
        }
        getObserversCount() {
            return this.observers.length;
        }
        invalidate() {
            this.state.isInvalidated || this.#u({
                type: "invalidate"
            });
        }
        async fetch(n, i) {
            if (this.state.fetchStatus !== "idle" && this.#a?.status() !== "rejected") {
                if (this.state.data !== void 0 && i?.cancelRefetch) this.cancel({
                    silent: !0
                });
                else if (this.#a) return this.#a.continueRetry(), this.#a.promise;
            }
            if (n && this.setOptions(n), !this.options.queryFn) {
                const v = this.observers.find((g)=>g.options.queryFn);
                v && this.setOptions(v.options);
            }
            const c = new AbortController, s = (v)=>{
                Object.defineProperty(v, "signal", {
                    enumerable: !0,
                    get: ()=>(this.#r = !0, c.signal)
                });
            }, o = ()=>{
                const v = Ay(this.options, i), y = (()=>{
                    const b = {
                        client: this.#n,
                        queryKey: this.queryKey,
                        meta: this.meta
                    };
                    return s(b), b;
                })();
                return this.#r = !1, this.options.persister ? this.options.persister(v, y, this) : v(y);
            }, m = (()=>{
                const v = {
                    fetchOptions: i,
                    options: this.options,
                    queryKey: this.queryKey,
                    client: this.#n,
                    state: this.state,
                    fetchFn: o
                };
                return s(v), v;
            })();
            this.options.behavior?.onFetch(m, this), this.#t = this.state, (this.state.fetchStatus === "idle" || this.state.fetchMeta !== m.fetchOptions?.meta) && this.#u({
                type: "fetch",
                meta: m.fetchOptions?.meta
            }), this.#a = Dy({
                initialPromise: i?.initialPromise,
                fn: m.fetchFn,
                onCancel: (v)=>{
                    v instanceof af && v.revert && this.setState({
                        ...this.#t,
                        fetchStatus: "idle"
                    }), c.abort();
                },
                onFail: (v, g)=>{
                    this.#u({
                        type: "failed",
                        failureCount: v,
                        error: g
                    });
                },
                onPause: ()=>{
                    this.#u({
                        type: "pause"
                    });
                },
                onContinue: ()=>{
                    this.#u({
                        type: "continue"
                    });
                },
                retry: m.options.retry,
                retryDelay: m.options.retryDelay,
                networkMode: m.options.networkMode,
                canRun: ()=>!0
            });
            try {
                const v = await this.#a.start();
                if (v === void 0) throw new Error(`${this.queryHash} data is undefined`);
                return this.setData(v), this.#l.config.onSuccess?.(v, this), this.#l.config.onSettled?.(v, this.state.error, this), v;
            } catch (v) {
                if (v instanceof af) {
                    if (v.silent) return this.#a.promise;
                    if (v.revert) {
                        if (this.state.data === void 0) throw v;
                        return this.state.data;
                    }
                }
                throw this.#u({
                    type: "error",
                    error: v
                }), this.#l.config.onError?.(v, this), this.#l.config.onSettled?.(this.state.data, v, this), v;
            } finally{
                this.scheduleGc();
            }
        }
        #u(n) {
            const i = (c)=>{
                switch(n.type){
                    case "failed":
                        return {
                            ...c,
                            fetchFailureCount: n.failureCount,
                            fetchFailureReason: n.error
                        };
                    case "pause":
                        return {
                            ...c,
                            fetchStatus: "paused"
                        };
                    case "continue":
                        return {
                            ...c,
                            fetchStatus: "fetching"
                        };
                    case "fetch":
                        return {
                            ...c,
                            ...u1(c.data, this.options),
                            fetchMeta: n.meta ?? null
                        };
                    case "success":
                        const s = {
                            ...c,
                            ...Vm(n.data, n.dataUpdatedAt),
                            dataUpdateCount: c.dataUpdateCount + 1,
                            ...!n.manual && {
                                fetchStatus: "idle",
                                fetchFailureCount: 0,
                                fetchFailureReason: null
                            }
                        };
                        return this.#t = n.manual ? s : void 0, s;
                    case "error":
                        const o = n.error;
                        return {
                            ...c,
                            error: o,
                            errorUpdateCount: c.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: c.fetchFailureCount + 1,
                            fetchFailureReason: o,
                            fetchStatus: "idle",
                            status: "error"
                        };
                    case "invalidate":
                        return {
                            ...c,
                            isInvalidated: !0
                        };
                    case "setState":
                        return {
                            ...c,
                            ...n.state
                        };
                }
            };
            this.state = i(this.state), Rt.batch(()=>{
                this.observers.forEach((c)=>{
                    c.onQueryUpdate();
                }), this.#l.notify({
                    query: this,
                    type: "updated",
                    action: n
                });
            });
        }
    };
    u1 = function(n, i) {
        return {
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchStatus: My(i.networkMode) ? "fetching" : "paused",
            ...n === void 0 && {
                error: null,
                status: "pending"
            }
        };
    };
    function Vm(n, i) {
        return {
            data: n,
            dataUpdatedAt: i ?? Date.now(),
            error: null,
            isInvalidated: !1,
            status: "success"
        };
    }
    function Zm(n) {
        const i = typeof n.initialData == "function" ? n.initialData() : n.initialData, c = i !== void 0, s = c ? typeof n.initialDataUpdatedAt == "function" ? n.initialDataUpdatedAt() : n.initialDataUpdatedAt : 0;
        return {
            data: i,
            dataUpdateCount: 0,
            dataUpdatedAt: c ? s ?? Date.now() : 0,
            error: null,
            errorUpdateCount: 0,
            errorUpdatedAt: 0,
            fetchFailureCount: 0,
            fetchFailureReason: null,
            fetchMeta: null,
            isInvalidated: !1,
            status: c ? "success" : "pending",
            fetchStatus: "idle"
        };
    }
    function Km(n) {
        return {
            onFetch: (i, c)=>{
                const s = i.options, o = i.fetchOptions?.meta?.fetchMore?.direction, d = i.state.data?.pages || [], m = i.state.data?.pageParams || [];
                let v = {
                    pages: [],
                    pageParams: []
                }, g = 0;
                const y = async ()=>{
                    let b = !1;
                    const S = (j)=>{
                        Object.defineProperty(j, "signal", {
                            enumerable: !0,
                            get: ()=>(i.signal.aborted ? b = !0 : i.signal.addEventListener("abort", ()=>{
                                    b = !0;
                                }), i.signal)
                        });
                    }, _ = Ay(i.options, i.fetchOptions), N = async (j, L, X)=>{
                        if (b) return Promise.reject();
                        if (L == null && j.pages.length) return Promise.resolve(j);
                        const W = (()=>{
                            const qe = {
                                client: i.client,
                                queryKey: i.queryKey,
                                pageParam: L,
                                direction: X ? "backward" : "forward",
                                meta: i.options.meta
                            };
                            return S(qe), qe;
                        })(), ne = await _(W), { maxPages: de } = i.options, Ee = X ? kp : $p;
                        return {
                            pages: Ee(j.pages, ne, de),
                            pageParams: Ee(j.pageParams, L, de)
                        };
                    };
                    if (o && d.length) {
                        const j = o === "backward", L = j ? i1 : Jm, X = {
                            pages: d,
                            pageParams: m
                        }, te = L(s, X);
                        v = await N(X, te, j);
                    } else {
                        const j = n ?? d.length;
                        do {
                            const L = g === 0 ? m[0] ?? s.initialPageParam : Jm(s, v);
                            if (g > 0 && L == null) break;
                            v = await N(v, L), g++;
                        }while (g < j);
                    }
                    return v;
                };
                i.options.persister ? i.fetchFn = ()=>i.options.persister?.(y, {
                        client: i.client,
                        queryKey: i.queryKey,
                        meta: i.options.meta,
                        signal: i.signal
                    }, c) : i.fetchFn = y;
            }
        };
    }
    function Jm(n, { pages: i, pageParams: c }) {
        const s = i.length - 1;
        return i.length > 0 ? n.getNextPageParam(i[s], i, c[s], c) : void 0;
    }
    function i1(n, { pages: i, pageParams: c }) {
        return i.length > 0 ? n.getPreviousPageParam?.(i[0], i, c[0], c) : void 0;
    }
    var r1 = class extends Oy {
        #e;
        #t;
        #l;
        #n;
        constructor(n){
            super(), this.#e = n.client, this.mutationId = n.mutationId, this.#l = n.mutationCache, this.#t = [], this.state = n.state || c1(), this.setOptions(n.options), this.scheduleGc();
        }
        setOptions(n) {
            this.options = n, this.updateGcTime(this.options.gcTime);
        }
        get meta() {
            return this.options.meta;
        }
        addObserver(n) {
            this.#t.includes(n) || (this.#t.push(n), this.clearGcTimeout(), this.#l.notify({
                type: "observerAdded",
                mutation: this,
                observer: n
            }));
        }
        removeObserver(n) {
            this.#t = this.#t.filter((i)=>i !== n), this.scheduleGc(), this.#l.notify({
                type: "observerRemoved",
                mutation: this,
                observer: n
            });
        }
        optionalRemove() {
            this.#t.length || (this.state.status === "pending" ? this.scheduleGc() : this.#l.remove(this));
        }
        continue() {
            return this.#n?.continue() ?? this.execute(this.state.variables);
        }
        async execute(n) {
            const i = ()=>{
                this.#a({
                    type: "continue"
                });
            }, c = {
                client: this.#e,
                meta: this.options.meta,
                mutationKey: this.options.mutationKey
            };
            this.#n = Dy({
                fn: ()=>this.options.mutationFn ? this.options.mutationFn(n, c) : Promise.reject(new Error("No mutationFn found")),
                onFail: (d, m)=>{
                    this.#a({
                        type: "failed",
                        failureCount: d,
                        error: m
                    });
                },
                onPause: ()=>{
                    this.#a({
                        type: "pause"
                    });
                },
                onContinue: i,
                retry: this.options.retry ?? 0,
                retryDelay: this.options.retryDelay,
                networkMode: this.options.networkMode,
                canRun: ()=>this.#l.canRun(this)
            });
            const s = this.state.status === "pending", o = !this.#n.canStart();
            try {
                if (s) i();
                else {
                    this.#a({
                        type: "pending",
                        variables: n,
                        isPaused: o
                    }), await this.#l.config.onMutate?.(n, this, c);
                    const m = await this.options.onMutate?.(n, c);
                    m !== this.state.context && this.#a({
                        type: "pending",
                        context: m,
                        variables: n,
                        isPaused: o
                    });
                }
                const d = await this.#n.start();
                return await this.#l.config.onSuccess?.(d, n, this.state.context, this, c), await this.options.onSuccess?.(d, n, this.state.context, c), await this.#l.config.onSettled?.(d, null, this.state.variables, this.state.context, this, c), await this.options.onSettled?.(d, null, n, this.state.context, c), this.#a({
                    type: "success",
                    data: d
                }), d;
            } catch (d) {
                try {
                    throw await this.#l.config.onError?.(d, n, this.state.context, this, c), await this.options.onError?.(d, n, this.state.context, c), await this.#l.config.onSettled?.(void 0, d, this.state.variables, this.state.context, this, c), await this.options.onSettled?.(void 0, d, n, this.state.context, c), d;
                } finally{
                    this.#a({
                        type: "error",
                        error: d
                    });
                }
            } finally{
                this.#l.runNext(this);
            }
        }
        #a(n) {
            const i = (c)=>{
                switch(n.type){
                    case "failed":
                        return {
                            ...c,
                            failureCount: n.failureCount,
                            failureReason: n.error
                        };
                    case "pause":
                        return {
                            ...c,
                            isPaused: !0
                        };
                    case "continue":
                        return {
                            ...c,
                            isPaused: !1
                        };
                    case "pending":
                        return {
                            ...c,
                            context: n.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: n.isPaused,
                            status: "pending",
                            variables: n.variables,
                            submittedAt: Date.now()
                        };
                    case "success":
                        return {
                            ...c,
                            data: n.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1
                        };
                    case "error":
                        return {
                            ...c,
                            data: void 0,
                            error: n.error,
                            failureCount: c.failureCount + 1,
                            failureReason: n.error,
                            isPaused: !1,
                            status: "error"
                        };
                }
            };
            this.state = i(this.state), Rt.batch(()=>{
                this.#t.forEach((c)=>{
                    c.onMutationUpdate(n);
                }), this.#l.notify({
                    mutation: this,
                    type: "updated",
                    action: n
                });
            });
        }
    };
    function c1() {
        return {
            context: void 0,
            data: void 0,
            error: null,
            failureCount: 0,
            failureReason: null,
            isPaused: !1,
            status: "idle",
            variables: void 0,
            submittedAt: 0
        };
    }
    var s1 = class extends Mr {
        constructor(n = {}){
            super(), this.config = n, this.#e = new Set, this.#t = new Map, this.#l = 0;
        }
        #e;
        #t;
        #l;
        build(n, i, c) {
            const s = new r1({
                client: n,
                mutationCache: this,
                mutationId: ++this.#l,
                options: n.defaultMutationOptions(i),
                state: c
            });
            return this.add(s), s;
        }
        add(n) {
            this.#e.add(n);
            const i = hr(n);
            if (typeof i == "string") {
                const c = this.#t.get(i);
                c ? c.push(n) : this.#t.set(i, [
                    n
                ]);
            }
            this.notify({
                type: "added",
                mutation: n
            });
        }
        remove(n) {
            if (this.#e.delete(n)) {
                const i = hr(n);
                if (typeof i == "string") {
                    const c = this.#t.get(i);
                    if (c) if (c.length > 1) {
                        const s = c.indexOf(n);
                        s !== -1 && c.splice(s, 1);
                    } else c[0] === n && this.#t.delete(i);
                }
            }
            this.notify({
                type: "removed",
                mutation: n
            });
        }
        canRun(n) {
            const i = hr(n);
            if (typeof i == "string") {
                const s = this.#t.get(i)?.find((o)=>o.state.status === "pending");
                return !s || s === n;
            } else return !0;
        }
        runNext(n) {
            const i = hr(n);
            return typeof i == "string" ? this.#t.get(i)?.find((s)=>s !== n && s.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve();
        }
        clear() {
            Rt.batch(()=>{
                this.#e.forEach((n)=>{
                    this.notify({
                        type: "removed",
                        mutation: n
                    });
                }), this.#e.clear(), this.#t.clear();
            });
        }
        getAll() {
            return Array.from(this.#e);
        }
        find(n) {
            const i = {
                exact: !0,
                ...n
            };
            return this.getAll().find((c)=>Ym(i, c));
        }
        findAll(n = {}) {
            return this.getAll().filter((i)=>Ym(n, i));
        }
        notify(n) {
            Rt.batch(()=>{
                this.listeners.forEach((i)=>{
                    i(n);
                });
            });
        }
        resumePausedMutations() {
            const n = this.getAll().filter((i)=>i.state.isPaused);
            return Rt.batch(()=>Promise.all(n.map((i)=>i.continue().catch(gl))));
        }
    };
    function hr(n) {
        return n.options.scope?.id;
    }
    let f1, o1, _y, d1;
    f1 = class extends Mr {
        constructor(n = {}){
            super(), this.config = n, this.#e = new Map;
        }
        #e;
        build(n, i, c) {
            const s = i.queryKey, o = i.queryHash ?? Sf(s, i);
            let d = this.get(o);
            return d || (d = new n1({
                client: n,
                queryKey: s,
                queryHash: o,
                options: n.defaultQueryOptions(i),
                state: c,
                defaultOptions: n.getQueryDefaults(s)
            }), this.add(d)), d;
        }
        add(n) {
            this.#e.has(n.queryHash) || (this.#e.set(n.queryHash, n), this.notify({
                type: "added",
                query: n
            }));
        }
        remove(n) {
            const i = this.#e.get(n.queryHash);
            i && (n.destroy(), i === n && this.#e.delete(n.queryHash), this.notify({
                type: "removed",
                query: n
            }));
        }
        clear() {
            Rt.batch(()=>{
                this.getAll().forEach((n)=>{
                    this.remove(n);
                });
            });
        }
        get(n) {
            return this.#e.get(n);
        }
        getAll() {
            return [
                ...this.#e.values()
            ];
        }
        find(n) {
            const i = {
                exact: !0,
                ...n
            };
            return this.getAll().find((c)=>Qm(i, c));
        }
        findAll(n = {}) {
            const i = this.getAll();
            return Object.keys(n).length > 0 ? i.filter((c)=>Qm(n, c)) : i;
        }
        notify(n) {
            Rt.batch(()=>{
                this.listeners.forEach((i)=>{
                    i(n);
                });
            });
        }
        onFocus() {
            Rt.batch(()=>{
                this.getAll().forEach((n)=>{
                    n.onFocus();
                });
            });
        }
        onOnline() {
            Rt.batch(()=>{
                this.getAll().forEach((n)=>{
                    n.onOnline();
                });
            });
        }
    };
    o1 = class {
        #e;
        #t;
        #l;
        #n;
        #a;
        #i;
        #r;
        #u;
        constructor(n = {}){
            this.#e = n.queryCache || new f1, this.#t = n.mutationCache || new s1, this.#l = n.defaultOptions || {}, this.#n = new Map, this.#a = new Map, this.#i = 0;
        }
        mount() {
            this.#i++, this.#i === 1 && (this.#r = Ty.subscribe(async (n)=>{
                n && (await this.resumePausedMutations(), this.#e.onFocus());
            }), this.#u = Sr.subscribe(async (n)=>{
                n && (await this.resumePausedMutations(), this.#e.onOnline());
            }));
        }
        unmount() {
            this.#i--, this.#i === 0 && (this.#r?.(), this.#r = void 0, this.#u?.(), this.#u = void 0);
        }
        isFetching(n) {
            return this.#e.findAll({
                ...n,
                fetchStatus: "fetching"
            }).length;
        }
        isMutating(n) {
            return this.#t.findAll({
                ...n,
                status: "pending"
            }).length;
        }
        getQueryData(n) {
            const i = this.defaultQueryOptions({
                queryKey: n
            });
            return this.#e.get(i.queryHash)?.state.data;
        }
        ensureQueryData(n) {
            const i = this.defaultQueryOptions(n), c = this.#e.build(this, i), s = c.state.data;
            return s === void 0 ? this.fetchQuery(n) : (n.revalidateIfStale && c.isStaleByTime(tf(i.staleTime, c)) && this.prefetchQuery(i), Promise.resolve(s));
        }
        getQueriesData(n) {
            return this.#e.findAll(n).map(({ queryKey: i, state: c })=>{
                const s = c.data;
                return [
                    i,
                    s
                ];
            });
        }
        setQueryData(n, i, c) {
            const s = this.defaultQueryOptions({
                queryKey: n
            }), d = this.#e.get(s.queryHash)?.state.data, m = Xp(i, d);
            if (m !== void 0) return this.#e.build(this, s).setData(m, {
                ...c,
                manual: !0
            });
        }
        setQueriesData(n, i, c) {
            return Rt.batch(()=>this.#e.findAll(n).map(({ queryKey: s })=>[
                        s,
                        this.setQueryData(s, i, c)
                    ]));
        }
        getQueryState(n) {
            const i = this.defaultQueryOptions({
                queryKey: n
            });
            return this.#e.get(i.queryHash)?.state;
        }
        removeQueries(n) {
            const i = this.#e;
            Rt.batch(()=>{
                i.findAll(n).forEach((c)=>{
                    i.remove(c);
                });
            });
        }
        resetQueries(n, i) {
            const c = this.#e;
            return Rt.batch(()=>(c.findAll(n).forEach((s)=>{
                    s.reset();
                }), this.refetchQueries({
                    type: "active",
                    ...n
                }, i)));
        }
        cancelQueries(n, i = {}) {
            const c = {
                revert: !0,
                ...i
            }, s = Rt.batch(()=>this.#e.findAll(n).map((o)=>o.cancel(c)));
            return Promise.all(s).then(gl).catch(gl);
        }
        invalidateQueries(n, i = {}) {
            return Rt.batch(()=>(this.#e.findAll(n).forEach((c)=>{
                    c.invalidate();
                }), n?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
                    ...n,
                    type: n?.refetchType ?? n?.type ?? "active"
                }, i)));
        }
        refetchQueries(n, i = {}) {
            const c = {
                ...i,
                cancelRefetch: i.cancelRefetch ?? !0
            }, s = Rt.batch(()=>this.#e.findAll(n).filter((o)=>!o.isDisabled() && !o.isStatic()).map((o)=>{
                    let d = o.fetch(void 0, c);
                    return c.throwOnError || (d = d.catch(gl)), o.state.fetchStatus === "paused" ? Promise.resolve() : d;
                }));
            return Promise.all(s).then(gl);
        }
        fetchQuery(n) {
            const i = this.defaultQueryOptions(n);
            i.retry === void 0 && (i.retry = !1);
            const c = this.#e.build(this, i);
            return c.isStaleByTime(tf(i.staleTime, c)) ? c.fetch(i) : Promise.resolve(c.state.data);
        }
        prefetchQuery(n) {
            return this.fetchQuery(n).then(gl).catch(gl);
        }
        fetchInfiniteQuery(n) {
            return n.behavior = Km(n.pages), this.fetchQuery(n);
        }
        prefetchInfiniteQuery(n) {
            return this.fetchInfiniteQuery(n).then(gl).catch(gl);
        }
        ensureInfiniteQueryData(n) {
            return n.behavior = Km(n.pages), this.ensureQueryData(n);
        }
        resumePausedMutations() {
            return Sr.isOnline() ? this.#t.resumePausedMutations() : Promise.resolve();
        }
        getQueryCache() {
            return this.#e;
        }
        getMutationCache() {
            return this.#t;
        }
        getDefaultOptions() {
            return this.#l;
        }
        setDefaultOptions(n) {
            this.#l = n;
        }
        setQueryDefaults(n, i) {
            this.#n.set($u(n), {
                queryKey: n,
                defaultOptions: i
            });
        }
        getQueryDefaults(n) {
            const i = [
                ...this.#n.values()
            ], c = {};
            return i.forEach((s)=>{
                ku(n, s.queryKey) && Object.assign(c, s.defaultOptions);
            }), c;
        }
        setMutationDefaults(n, i) {
            this.#a.set($u(n), {
                mutationKey: n,
                defaultOptions: i
            });
        }
        getMutationDefaults(n) {
            const i = [
                ...this.#a.values()
            ], c = {};
            return i.forEach((s)=>{
                ku(n, s.mutationKey) && Object.assign(c, s.defaultOptions);
            }), c;
        }
        defaultQueryOptions(n) {
            if (n._defaulted) return n;
            const i = {
                ...this.#l.queries,
                ...this.getQueryDefaults(n.queryKey),
                ...n,
                _defaulted: !0
            };
            return i.queryHash || (i.queryHash = Sf(i.queryKey, i)), i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"), i.throwOnError === void 0 && (i.throwOnError = !!i.suspense), !i.networkMode && i.persister && (i.networkMode = "offlineFirst"), i.queryFn === bf && (i.enabled = !1), i;
        }
        defaultMutationOptions(n) {
            return n?._defaulted ? n : {
                ...this.#l.mutations,
                ...n?.mutationKey && this.getMutationDefaults(n.mutationKey),
                ...n,
                _defaulted: !0
            };
        }
        clear() {
            this.#e.clear(), this.#t.clear();
        }
    };
    _y = Y.createContext(void 0);
    pS = (n)=>{
        const i = Y.useContext(_y);
        if (!i) throw new Error("No QueryClient set, use QueryClientProvider to set one");
        return i;
    };
    d1 = ({ client: n, children: i })=>(Y.useEffect(()=>(n.mount(), ()=>{
                n.unmount();
            }), [
            n
        ]), ce.jsx(_y.Provider, {
            value: n,
            children: i
        }));
    let h1, m1, Fm;
    h1 = "modulepreload";
    m1 = function(n) {
        return "/" + n;
    };
    Fm = {};
    Or = function(i, c, s) {
        let o = Promise.resolve();
        if (c && c.length > 0) {
            let g = function(y) {
                return Promise.all(y.map((b)=>Promise.resolve(b).then((S)=>({
                            status: "fulfilled",
                            value: S
                        }), (S)=>({
                            status: "rejected",
                            reason: S
                        }))));
            };
            document.getElementsByTagName("link");
            const m = document.querySelector("meta[property=csp-nonce]"), v = m?.nonce || m?.getAttribute("nonce");
            o = g(c.map((y)=>{
                if (y = m1(y), y in Fm) return;
                Fm[y] = !0;
                const b = y.endsWith(".css"), S = b ? '[rel="stylesheet"]' : "";
                if (document.querySelector(`link[href="${y}"]${S}`)) return;
                const _ = document.createElement("link");
                if (_.rel = b ? "stylesheet" : h1, b || (_.as = "script"), _.crossOrigin = "", _.href = y, v && _.setAttribute("nonce", v), document.head.appendChild(_), b) return new Promise((N, j)=>{
                    _.addEventListener("load", N), _.addEventListener("error", ()=>j(new Error(`Unable to preload CSS for ${y}`)));
                });
            }));
        }
        function d(m) {
            const v = new Event("vite:preloadError", {
                cancelable: !0
            });
            if (v.payload = m, window.dispatchEvent(v), !v.defaultPrevented) throw m;
        }
        return o.then((m)=>{
            for (const v of m || [])v.status === "rejected" && d(v.reason);
            return i().catch(d);
        });
    };
    function Jl(n) {
        return Array.isArray ? Array.isArray(n) : Ry(n) === "[object Array]";
    }
    function y1(n) {
        if (typeof n == "string") return n;
        let i = n + "";
        return i == "0" && 1 / n == -1 / 0 ? "-0" : i;
    }
    function v1(n) {
        return n == null ? "" : y1(n);
    }
    function Dl(n) {
        return typeof n == "string";
    }
    function Cy(n) {
        return typeof n == "number";
    }
    function g1(n) {
        return n === !0 || n === !1 || p1(n) && Ry(n) == "[object Boolean]";
    }
    function zy(n) {
        return typeof n == "object";
    }
    function p1(n) {
        return zy(n) && n !== null;
    }
    function $t(n) {
        return n != null;
    }
    function Ws(n) {
        return !n.trim().length;
    }
    function Ry(n) {
        return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
    }
    const S1 = "Incorrect 'index' type", b1 = (n)=>`Invalid value for key ${n}`, E1 = (n)=>`Pattern length exceeds max of ${n}.`, A1 = (n)=>`Missing ${n} property in key`, T1 = (n)=>`Property 'weight' in key '${n}' must be a positive integer`, Wm = Object.prototype.hasOwnProperty;
    class M1 {
        constructor(i){
            this._keys = [], this._keyMap = {};
            let c = 0;
            i.forEach((s)=>{
                let o = xy(s);
                this._keys.push(o), this._keyMap[o.id] = o, c += o.weight;
            }), this._keys.forEach((s)=>{
                s.weight /= c;
            });
        }
        get(i) {
            return this._keyMap[i];
        }
        keys() {
            return this._keys;
        }
        toJSON() {
            return JSON.stringify(this._keys);
        }
    }
    function xy(n) {
        let i = null, c = null, s = null, o = 1, d = null;
        if (Dl(n) || Jl(n)) s = n, i = $m(n), c = nf(n);
        else {
            if (!Wm.call(n, "name")) throw new Error(A1("name"));
            const m = n.name;
            if (s = m, Wm.call(n, "weight") && (o = n.weight, o <= 0)) throw new Error(T1(m));
            i = $m(m), c = nf(m), d = n.getFn;
        }
        return {
            path: i,
            id: c,
            weight: o,
            src: s,
            getFn: d
        };
    }
    function $m(n) {
        return Jl(n) ? n : n.split(".");
    }
    function nf(n) {
        return Jl(n) ? n.join(".") : n;
    }
    function D1(n, i) {
        let c = [], s = !1;
        const o = (d, m, v)=>{
            if ($t(d)) if (!m[v]) c.push(d);
            else {
                let g = m[v];
                const y = d[g];
                if (!$t(y)) return;
                if (v === m.length - 1 && (Dl(y) || Cy(y) || g1(y))) c.push(v1(y));
                else if (Jl(y)) {
                    s = !0;
                    for(let b = 0, S = y.length; b < S; b += 1)o(y[b], m, v + 1);
                } else m.length && o(y, m, v + 1);
            }
        };
        return o(n, Dl(i) ? i.split(".") : i, 0), s ? c : c[0];
    }
    const O1 = {
        includeMatches: !1,
        findAllMatches: !1,
        minMatchCharLength: 1
    }, _1 = {
        isCaseSensitive: !1,
        ignoreDiacritics: !1,
        includeScore: !1,
        keys: [],
        shouldSort: !0,
        sortFn: (n, i)=>n.score === i.score ? n.idx < i.idx ? -1 : 1 : n.score < i.score ? -1 : 1
    }, C1 = {
        location: 0,
        threshold: .6,
        distance: 100
    }, z1 = {
        useExtendedSearch: !1,
        getFn: D1,
        ignoreLocation: !1,
        ignoreFieldNorm: !1,
        fieldNormWeight: 1
    };
    var oe = {
        ..._1,
        ...O1,
        ...C1,
        ...z1
    };
    const R1 = /[^ ]+/g;
    function x1(n = 1, i = 3) {
        const c = new Map, s = Math.pow(10, i);
        return {
            get (o) {
                const d = o.match(R1).length;
                if (c.has(d)) return c.get(d);
                const m = 1 / Math.pow(d, .5 * n), v = parseFloat(Math.round(m * s) / s);
                return c.set(d, v), v;
            },
            clear () {
                c.clear();
            }
        };
    }
    class Ef {
        constructor({ getFn: i = oe.getFn, fieldNormWeight: c = oe.fieldNormWeight } = {}){
            this.norm = x1(c, 3), this.getFn = i, this.isCreated = !1, this.setIndexRecords();
        }
        setSources(i = []) {
            this.docs = i;
        }
        setIndexRecords(i = []) {
            this.records = i;
        }
        setKeys(i = []) {
            this.keys = i, this._keysMap = {}, i.forEach((c, s)=>{
                this._keysMap[c.id] = s;
            });
        }
        create() {
            this.isCreated || !this.docs.length || (this.isCreated = !0, Dl(this.docs[0]) ? this.docs.forEach((i, c)=>{
                this._addString(i, c);
            }) : this.docs.forEach((i, c)=>{
                this._addObject(i, c);
            }), this.norm.clear());
        }
        add(i) {
            const c = this.size();
            Dl(i) ? this._addString(i, c) : this._addObject(i, c);
        }
        removeAt(i) {
            this.records.splice(i, 1);
            for(let c = i, s = this.size(); c < s; c += 1)this.records[c].i -= 1;
        }
        getValueForItemAtKeyId(i, c) {
            return i[this._keysMap[c]];
        }
        size() {
            return this.records.length;
        }
        _addString(i, c) {
            if (!$t(i) || Ws(i)) return;
            let s = {
                v: i,
                i: c,
                n: this.norm.get(i)
            };
            this.records.push(s);
        }
        _addObject(i, c) {
            let s = {
                i: c,
                $: {}
            };
            this.keys.forEach((o, d)=>{
                let m = o.getFn ? o.getFn(i) : this.getFn(i, o.path);
                if ($t(m)) {
                    if (Jl(m)) {
                        let v = [];
                        const g = [
                            {
                                nestedArrIndex: -1,
                                value: m
                            }
                        ];
                        for(; g.length;){
                            const { nestedArrIndex: y, value: b } = g.pop();
                            if ($t(b)) if (Dl(b) && !Ws(b)) {
                                let S = {
                                    v: b,
                                    i: y,
                                    n: this.norm.get(b)
                                };
                                v.push(S);
                            } else Jl(b) && b.forEach((S, _)=>{
                                g.push({
                                    nestedArrIndex: _,
                                    value: S
                                });
                            });
                        }
                        s.$[d] = v;
                    } else if (Dl(m) && !Ws(m)) {
                        let v = {
                            v: m,
                            n: this.norm.get(m)
                        };
                        s.$[d] = v;
                    }
                }
            }), this.records.push(s);
        }
        toJSON() {
            return {
                keys: this.keys,
                records: this.records
            };
        }
    }
    function Uy(n, i, { getFn: c = oe.getFn, fieldNormWeight: s = oe.fieldNormWeight } = {}) {
        const o = new Ef({
            getFn: c,
            fieldNormWeight: s
        });
        return o.setKeys(n.map(xy)), o.setSources(i), o.create(), o;
    }
    function U1(n, { getFn: i = oe.getFn, fieldNormWeight: c = oe.fieldNormWeight } = {}) {
        const { keys: s, records: o } = n, d = new Ef({
            getFn: i,
            fieldNormWeight: c
        });
        return d.setKeys(s), d.setIndexRecords(o), d;
    }
    function mr(n, { errors: i = 0, currentLocation: c = 0, expectedLocation: s = 0, distance: o = oe.distance, ignoreLocation: d = oe.ignoreLocation } = {}) {
        const m = i / n.length;
        if (d) return m;
        const v = Math.abs(s - c);
        return o ? m + v / o : v ? 1 : m;
    }
    function N1(n = [], i = oe.minMatchCharLength) {
        let c = [], s = -1, o = -1, d = 0;
        for(let m = n.length; d < m; d += 1){
            let v = n[d];
            v && s === -1 ? s = d : !v && s !== -1 && (o = d - 1, o - s + 1 >= i && c.push([
                s,
                o
            ]), s = -1);
        }
        return n[d - 1] && d - s >= i && c.push([
            s,
            d - 1
        ]), c;
    }
    const Pa = 32;
    function B1(n, i, c, { location: s = oe.location, distance: o = oe.distance, threshold: d = oe.threshold, findAllMatches: m = oe.findAllMatches, minMatchCharLength: v = oe.minMatchCharLength, includeMatches: g = oe.includeMatches, ignoreLocation: y = oe.ignoreLocation } = {}) {
        if (i.length > Pa) throw new Error(E1(Pa));
        const b = i.length, S = n.length, _ = Math.max(0, Math.min(s, S));
        let N = d, j = _;
        const L = v > 1 || g, X = L ? Array(S) : [];
        let te;
        for(; (te = n.indexOf(i, j)) > -1;){
            let O = mr(i, {
                currentLocation: te,
                expectedLocation: _,
                distance: o,
                ignoreLocation: y
            });
            if (N = Math.min(O, N), j = te + b, L) {
                let I = 0;
                for(; I < b;)X[te + I] = 1, I += 1;
            }
        }
        j = -1;
        let W = [], ne = 1, de = b + S;
        const Ee = 1 << b - 1;
        for(let O = 0; O < b; O += 1){
            let I = 0, ve = de;
            for(; I < ve;)mr(i, {
                errors: O,
                currentLocation: _ + ve,
                expectedLocation: _,
                distance: o,
                ignoreLocation: y
            }) <= N ? I = ve : de = ve, ve = Math.floor((de - I) / 2 + I);
            de = ve;
            let he = Math.max(1, _ - ve + 1), He = m ? S : Math.min(_ + ve, S) + b, pe = Array(He + 2);
            pe[He + 1] = (1 << O) - 1;
            for(let Oe = He; Oe >= he; Oe -= 1){
                let Fe = Oe - 1, B = c[n.charAt(Fe)];
                if (L && (X[Fe] = +!!B), pe[Oe] = (pe[Oe + 1] << 1 | 1) & B, O && (pe[Oe] |= (W[Oe + 1] | W[Oe]) << 1 | 1 | W[Oe + 1]), pe[Oe] & Ee && (ne = mr(i, {
                    errors: O,
                    currentLocation: Fe,
                    expectedLocation: _,
                    distance: o,
                    ignoreLocation: y
                }), ne <= N)) {
                    if (N = ne, j = Fe, j <= _) break;
                    he = Math.max(1, 2 * _ - j);
                }
            }
            if (mr(i, {
                errors: O + 1,
                currentLocation: _,
                expectedLocation: _,
                distance: o,
                ignoreLocation: y
            }) > N) break;
            W = pe;
        }
        const qe = {
            isMatch: j >= 0,
            score: Math.max(.001, ne)
        };
        if (L) {
            const O = N1(X, v);
            O.length ? g && (qe.indices = O) : qe.isMatch = !1;
        }
        return qe;
    }
    function j1(n) {
        let i = {};
        for(let c = 0, s = n.length; c < s; c += 1){
            const o = n.charAt(c);
            i[o] = (i[o] || 0) | 1 << s - c - 1;
        }
        return i;
    }
    const br = String.prototype.normalize ? ((n)=>n.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((n)=>n);
    class Ny {
        constructor(i, { location: c = oe.location, threshold: s = oe.threshold, distance: o = oe.distance, includeMatches: d = oe.includeMatches, findAllMatches: m = oe.findAllMatches, minMatchCharLength: v = oe.minMatchCharLength, isCaseSensitive: g = oe.isCaseSensitive, ignoreDiacritics: y = oe.ignoreDiacritics, ignoreLocation: b = oe.ignoreLocation } = {}){
            if (this.options = {
                location: c,
                threshold: s,
                distance: o,
                includeMatches: d,
                findAllMatches: m,
                minMatchCharLength: v,
                isCaseSensitive: g,
                ignoreDiacritics: y,
                ignoreLocation: b
            }, i = g ? i : i.toLowerCase(), i = y ? br(i) : i, this.pattern = i, this.chunks = [], !this.pattern.length) return;
            const S = (N, j)=>{
                this.chunks.push({
                    pattern: N,
                    alphabet: j1(N),
                    startIndex: j
                });
            }, _ = this.pattern.length;
            if (_ > Pa) {
                let N = 0;
                const j = _ % Pa, L = _ - j;
                for(; N < L;)S(this.pattern.substr(N, Pa), N), N += Pa;
                if (j) {
                    const X = _ - Pa;
                    S(this.pattern.substr(X), X);
                }
            } else S(this.pattern, 0);
        }
        searchIn(i) {
            const { isCaseSensitive: c, ignoreDiacritics: s, includeMatches: o } = this.options;
            if (i = c ? i : i.toLowerCase(), i = s ? br(i) : i, this.pattern === i) {
                let L = {
                    isMatch: !0,
                    score: 0
                };
                return o && (L.indices = [
                    [
                        0,
                        i.length - 1
                    ]
                ]), L;
            }
            const { location: d, distance: m, threshold: v, findAllMatches: g, minMatchCharLength: y, ignoreLocation: b } = this.options;
            let S = [], _ = 0, N = !1;
            this.chunks.forEach(({ pattern: L, alphabet: X, startIndex: te })=>{
                const { isMatch: W, score: ne, indices: de } = B1(i, L, X, {
                    location: d + te,
                    distance: m,
                    threshold: v,
                    findAllMatches: g,
                    minMatchCharLength: y,
                    includeMatches: o,
                    ignoreLocation: b
                });
                W && (N = !0), _ += ne, W && de && (S = [
                    ...S,
                    ...de
                ]);
            });
            let j = {
                isMatch: N,
                score: N ? _ / this.chunks.length : 1
            };
            return N && o && (j.indices = S), j;
        }
    }
    class Da {
        constructor(i){
            this.pattern = i;
        }
        static isMultiMatch(i) {
            return km(i, this.multiRegex);
        }
        static isSingleMatch(i) {
            return km(i, this.singleRegex);
        }
        search() {}
    }
    function km(n, i) {
        const c = n.match(i);
        return c ? c[1] : null;
    }
    class L1 extends Da {
        constructor(i){
            super(i);
        }
        static get type() {
            return "exact";
        }
        static get multiRegex() {
            return /^="(.*)"$/;
        }
        static get singleRegex() {
            return /^=(.*)$/;
        }
        search(i) {
            const c = i === this.pattern;
            return {
                isMatch: c,
                score: c ? 0 : 1,
                indices: [
                    0,
                    this.pattern.length - 1
                ]
            };
        }
    }
    class H1 extends Da {
        constructor(i){
            super(i);
        }
        static get type() {
            return "inverse-exact";
        }
        static get multiRegex() {
            return /^!"(.*)"$/;
        }
        static get singleRegex() {
            return /^!(.*)$/;
        }
        search(i) {
            const s = i.indexOf(this.pattern) === -1;
            return {
                isMatch: s,
                score: s ? 0 : 1,
                indices: [
                    0,
                    i.length - 1
                ]
            };
        }
    }
    class w1 extends Da {
        constructor(i){
            super(i);
        }
        static get type() {
            return "prefix-exact";
        }
        static get multiRegex() {
            return /^\^"(.*)"$/;
        }
        static get singleRegex() {
            return /^\^(.*)$/;
        }
        search(i) {
            const c = i.startsWith(this.pattern);
            return {
                isMatch: c,
                score: c ? 0 : 1,
                indices: [
                    0,
                    this.pattern.length - 1
                ]
            };
        }
    }
    class q1 extends Da {
        constructor(i){
            super(i);
        }
        static get type() {
            return "inverse-prefix-exact";
        }
        static get multiRegex() {
            return /^!\^"(.*)"$/;
        }
        static get singleRegex() {
            return /^!\^(.*)$/;
        }
        search(i) {
            const c = !i.startsWith(this.pattern);
            return {
                isMatch: c,
                score: c ? 0 : 1,
                indices: [
                    0,
                    i.length - 1
                ]
            };
        }
    }
    class Q1 extends Da {
        constructor(i){
            super(i);
        }
        static get type() {
            return "suffix-exact";
        }
        static get multiRegex() {
            return /^"(.*)"\$$/;
        }
        static get singleRegex() {
            return /^(.*)\$$/;
        }
        search(i) {
            const c = i.endsWith(this.pattern);
            return {
                isMatch: c,
                score: c ? 0 : 1,
                indices: [
                    i.length - this.pattern.length,
                    i.length - 1
                ]
            };
        }
    }
    class Y1 extends Da {
        constructor(i){
            super(i);
        }
        static get type() {
            return "inverse-suffix-exact";
        }
        static get multiRegex() {
            return /^!"(.*)"\$$/;
        }
        static get singleRegex() {
            return /^!(.*)\$$/;
        }
        search(i) {
            const c = !i.endsWith(this.pattern);
            return {
                isMatch: c,
                score: c ? 0 : 1,
                indices: [
                    0,
                    i.length - 1
                ]
            };
        }
    }
    class By extends Da {
        constructor(i, { location: c = oe.location, threshold: s = oe.threshold, distance: o = oe.distance, includeMatches: d = oe.includeMatches, findAllMatches: m = oe.findAllMatches, minMatchCharLength: v = oe.minMatchCharLength, isCaseSensitive: g = oe.isCaseSensitive, ignoreDiacritics: y = oe.ignoreDiacritics, ignoreLocation: b = oe.ignoreLocation } = {}){
            super(i), this._bitapSearch = new Ny(i, {
                location: c,
                threshold: s,
                distance: o,
                includeMatches: d,
                findAllMatches: m,
                minMatchCharLength: v,
                isCaseSensitive: g,
                ignoreDiacritics: y,
                ignoreLocation: b
            });
        }
        static get type() {
            return "fuzzy";
        }
        static get multiRegex() {
            return /^"(.*)"$/;
        }
        static get singleRegex() {
            return /^(.*)$/;
        }
        search(i) {
            return this._bitapSearch.searchIn(i);
        }
    }
    class jy extends Da {
        constructor(i){
            super(i);
        }
        static get type() {
            return "include";
        }
        static get multiRegex() {
            return /^'"(.*)"$/;
        }
        static get singleRegex() {
            return /^'(.*)$/;
        }
        search(i) {
            let c = 0, s;
            const o = [], d = this.pattern.length;
            for(; (s = i.indexOf(this.pattern, c)) > -1;)c = s + d, o.push([
                s,
                c - 1
            ]);
            const m = !!o.length;
            return {
                isMatch: m,
                score: m ? 0 : 1,
                indices: o
            };
        }
    }
    const uf = [
        L1,
        jy,
        w1,
        q1,
        Y1,
        Q1,
        H1,
        By
    ], Pm = uf.length, G1 = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, X1 = "|";
    function V1(n, i = {}) {
        return n.split(X1).map((c)=>{
            let s = c.trim().split(G1).filter((d)=>d && !!d.trim()), o = [];
            for(let d = 0, m = s.length; d < m; d += 1){
                const v = s[d];
                let g = !1, y = -1;
                for(; !g && ++y < Pm;){
                    const b = uf[y];
                    let S = b.isMultiMatch(v);
                    S && (o.push(new b(S, i)), g = !0);
                }
                if (!g) for(y = -1; ++y < Pm;){
                    const b = uf[y];
                    let S = b.isSingleMatch(v);
                    if (S) {
                        o.push(new b(S, i));
                        break;
                    }
                }
            }
            return o;
        });
    }
    const Z1 = new Set([
        By.type,
        jy.type
    ]);
    class K1 {
        constructor(i, { isCaseSensitive: c = oe.isCaseSensitive, ignoreDiacritics: s = oe.ignoreDiacritics, includeMatches: o = oe.includeMatches, minMatchCharLength: d = oe.minMatchCharLength, ignoreLocation: m = oe.ignoreLocation, findAllMatches: v = oe.findAllMatches, location: g = oe.location, threshold: y = oe.threshold, distance: b = oe.distance } = {}){
            this.query = null, this.options = {
                isCaseSensitive: c,
                ignoreDiacritics: s,
                includeMatches: o,
                minMatchCharLength: d,
                findAllMatches: v,
                ignoreLocation: m,
                location: g,
                threshold: y,
                distance: b
            }, i = c ? i : i.toLowerCase(), i = s ? br(i) : i, this.pattern = i, this.query = V1(this.pattern, this.options);
        }
        static condition(i, c) {
            return c.useExtendedSearch;
        }
        searchIn(i) {
            const c = this.query;
            if (!c) return {
                isMatch: !1,
                score: 1
            };
            const { includeMatches: s, isCaseSensitive: o, ignoreDiacritics: d } = this.options;
            i = o ? i : i.toLowerCase(), i = d ? br(i) : i;
            let m = 0, v = [], g = 0;
            for(let y = 0, b = c.length; y < b; y += 1){
                const S = c[y];
                v.length = 0, m = 0;
                for(let _ = 0, N = S.length; _ < N; _ += 1){
                    const j = S[_], { isMatch: L, indices: X, score: te } = j.search(i);
                    if (L) {
                        if (m += 1, g += te, s) {
                            const W = j.constructor.type;
                            Z1.has(W) ? v = [
                                ...v,
                                ...X
                            ] : v.push(X);
                        }
                    } else {
                        g = 0, m = 0, v.length = 0;
                        break;
                    }
                }
                if (m) {
                    let _ = {
                        isMatch: !0,
                        score: g / m
                    };
                    return s && (_.indices = v), _;
                }
            }
            return {
                isMatch: !1,
                score: 1
            };
        }
    }
    const rf = [];
    function J1(...n) {
        rf.push(...n);
    }
    function cf(n, i) {
        for(let c = 0, s = rf.length; c < s; c += 1){
            let o = rf[c];
            if (o.condition(n, i)) return new o(n, i);
        }
        return new Ny(n, i);
    }
    const Er = {
        AND: "$and",
        OR: "$or"
    }, sf = {
        PATH: "$path",
        PATTERN: "$val"
    }, ff = (n)=>!!(n[Er.AND] || n[Er.OR]), F1 = (n)=>!!n[sf.PATH], W1 = (n)=>!Jl(n) && zy(n) && !ff(n), Im = (n)=>({
            [Er.AND]: Object.keys(n).map((i)=>({
                    [i]: n[i]
                }))
        });
    function Ly(n, i, { auto: c = !0 } = {}) {
        const s = (o)=>{
            let d = Object.keys(o);
            const m = F1(o);
            if (!m && d.length > 1 && !ff(o)) return s(Im(o));
            if (W1(o)) {
                const g = m ? o[sf.PATH] : d[0], y = m ? o[sf.PATTERN] : o[g];
                if (!Dl(y)) throw new Error(b1(g));
                const b = {
                    keyId: nf(g),
                    pattern: y
                };
                return c && (b.searcher = cf(y, i)), b;
            }
            let v = {
                children: [],
                operator: d[0]
            };
            return d.forEach((g)=>{
                const y = o[g];
                Jl(y) && y.forEach((b)=>{
                    v.children.push(s(b));
                });
            }), v;
        };
        return ff(n) || (n = Im(n)), s(n);
    }
    function $1(n, { ignoreFieldNorm: i = oe.ignoreFieldNorm }) {
        n.forEach((c)=>{
            let s = 1;
            c.matches.forEach(({ key: o, norm: d, score: m })=>{
                const v = o ? o.weight : null;
                s *= Math.pow(m === 0 && v ? Number.EPSILON : m, (v || 1) * (i ? 1 : d));
            }), c.score = s;
        });
    }
    function k1(n, i) {
        const c = n.matches;
        i.matches = [], $t(c) && c.forEach((s)=>{
            if (!$t(s.indices) || !s.indices.length) return;
            const { indices: o, value: d } = s;
            let m = {
                indices: o,
                value: d
            };
            s.key && (m.key = s.key.src), s.idx > -1 && (m.refIndex = s.idx), i.matches.push(m);
        });
    }
    function P1(n, i) {
        i.score = n.score;
    }
    function I1(n, i, { includeMatches: c = oe.includeMatches, includeScore: s = oe.includeScore } = {}) {
        const o = [];
        return c && o.push(k1), s && o.push(P1), n.map((d)=>{
            const { idx: m } = d, v = {
                item: i[m],
                refIndex: m
            };
            return o.length && o.forEach((g)=>{
                g(d, v);
            }), v;
        });
    }
    class tn {
        constructor(i, c = {}, s){
            this.options = {
                ...oe,
                ...c
            }, this.options.useExtendedSearch, this._keyStore = new M1(this.options.keys), this.setCollection(i, s);
        }
        setCollection(i, c) {
            if (this._docs = i, c && !(c instanceof Ef)) throw new Error(S1);
            this._myIndex = c || Uy(this.options.keys, this._docs, {
                getFn: this.options.getFn,
                fieldNormWeight: this.options.fieldNormWeight
            });
        }
        add(i) {
            $t(i) && (this._docs.push(i), this._myIndex.add(i));
        }
        remove(i = ()=>!1) {
            const c = [];
            for(let s = 0, o = this._docs.length; s < o; s += 1){
                const d = this._docs[s];
                i(d, s) && (this.removeAt(s), s -= 1, o -= 1, c.push(d));
            }
            return c;
        }
        removeAt(i) {
            this._docs.splice(i, 1), this._myIndex.removeAt(i);
        }
        getIndex() {
            return this._myIndex;
        }
        search(i, { limit: c = -1 } = {}) {
            const { includeMatches: s, includeScore: o, shouldSort: d, sortFn: m, ignoreFieldNorm: v } = this.options;
            let g = Dl(i) ? Dl(this._docs[0]) ? this._searchStringList(i) : this._searchObjectList(i) : this._searchLogical(i);
            return $1(g, {
                ignoreFieldNorm: v
            }), d && g.sort(m), Cy(c) && c > -1 && (g = g.slice(0, c)), I1(g, this._docs, {
                includeMatches: s,
                includeScore: o
            });
        }
        _searchStringList(i) {
            const c = cf(i, this.options), { records: s } = this._myIndex, o = [];
            return s.forEach(({ v: d, i: m, n: v })=>{
                if (!$t(d)) return;
                const { isMatch: g, score: y, indices: b } = c.searchIn(d);
                g && o.push({
                    item: d,
                    idx: m,
                    matches: [
                        {
                            score: y,
                            value: d,
                            norm: v,
                            indices: b
                        }
                    ]
                });
            }), o;
        }
        _searchLogical(i) {
            const c = Ly(i, this.options), s = (v, g, y)=>{
                if (!v.children) {
                    const { keyId: S, searcher: _ } = v, N = this._findMatches({
                        key: this._keyStore.get(S),
                        value: this._myIndex.getValueForItemAtKeyId(g, S),
                        searcher: _
                    });
                    return N && N.length ? [
                        {
                            idx: y,
                            item: g,
                            matches: N
                        }
                    ] : [];
                }
                const b = [];
                for(let S = 0, _ = v.children.length; S < _; S += 1){
                    const N = v.children[S], j = s(N, g, y);
                    if (j.length) b.push(...j);
                    else if (v.operator === Er.AND) return [];
                }
                return b;
            }, o = this._myIndex.records, d = {}, m = [];
            return o.forEach(({ $: v, i: g })=>{
                if ($t(v)) {
                    let y = s(c, v, g);
                    y.length && (d[g] || (d[g] = {
                        idx: g,
                        item: v,
                        matches: []
                    }, m.push(d[g])), y.forEach(({ matches: b })=>{
                        d[g].matches.push(...b);
                    }));
                }
            }), m;
        }
        _searchObjectList(i) {
            const c = cf(i, this.options), { keys: s, records: o } = this._myIndex, d = [];
            return o.forEach(({ $: m, i: v })=>{
                if (!$t(m)) return;
                let g = [];
                s.forEach((y, b)=>{
                    g.push(...this._findMatches({
                        key: y,
                        value: m[b],
                        searcher: c
                    }));
                }), g.length && d.push({
                    idx: v,
                    item: m,
                    matches: g
                });
            }), d;
        }
        _findMatches({ key: i, value: c, searcher: s }) {
            if (!$t(c)) return [];
            let o = [];
            if (Jl(c)) c.forEach(({ v: d, i: m, n: v })=>{
                if (!$t(d)) return;
                const { isMatch: g, score: y, indices: b } = s.searchIn(d);
                g && o.push({
                    score: y,
                    key: i,
                    value: d,
                    idx: m,
                    norm: v,
                    indices: b
                });
            });
            else {
                const { v: d, n: m } = c, { isMatch: v, score: g, indices: y } = s.searchIn(d);
                v && o.push({
                    score: g,
                    key: i,
                    value: d,
                    norm: m,
                    indices: y
                });
            }
            return o;
        }
    }
    tn.version = "7.1.0";
    tn.createIndex = Uy;
    tn.parseIndex = U1;
    tn.config = oe;
    tn.parseQuery = Ly;
    J1(K1);
    let Ar = null, Ku = [];
    async function eS() {
        try {
            const n = await fetch("/api/search-index.json");
            if (!n.ok) throw new Error("Failed to load search index");
            Ku = await n.json(), Ar = new tn(Ku, {
                keys: [
                    {
                        name: "title",
                        weight: 2
                    },
                    {
                        name: "content",
                        weight: 1
                    },
                    {
                        name: "tags",
                        weight: 1.5
                    }
                ],
                threshold: .4,
                includeScore: !0,
                includeMatches: !0,
                minMatchCharLength: 2,
                ignoreLocation: !0
            });
        } catch  {
            console.warn("Search index not available, using mock data"), Ku = tS(), Ar = new tn(Ku, {
                keys: [
                    {
                        name: "title",
                        weight: 2
                    },
                    {
                        name: "content",
                        weight: 1
                    },
                    {
                        name: "tags",
                        weight: 1.5
                    }
                ],
                threshold: .4,
                includeScore: !0,
                includeMatches: !0,
                minMatchCharLength: 2
            });
        }
    }
    function tS() {
        return [
            {
                id: "ai-alignment",
                title: "AI Alignment",
                content: "AI alignment is the challenge of ensuring that artificial intelligence systems pursue goals that are aligned with human values and intentions.",
                tags: [
                    "ai",
                    "safety",
                    "ethics"
                ],
                ontology_id: "AI-0268"
            },
            {
                id: "smart-contracts",
                title: "Smart Contracts",
                content: "Smart contracts are self-executing contracts with the terms of the agreement directly written into code on a blockchain.",
                tags: [
                    "blockchain",
                    "ethereum",
                    "solidity"
                ],
                ontology_id: "BC-0045"
            },
            {
                id: "robotics",
                title: "Robotics",
                content: "Robotics is an interdisciplinary field that integrates computer science, engineering, and artificial intelligence to design, construct, and operate robots.",
                tags: [
                    "robotics",
                    "automation",
                    "ai"
                ],
                ontology_id: "RB-0001"
            },
            {
                id: "virtual-worlds",
                title: "Virtual Worlds",
                content: "Virtual worlds are computer-simulated environments that users can inhabit and interact with through avatars.",
                tags: [
                    "metaverse",
                    "vr",
                    "gaming"
                ],
                ontology_id: "MV-0001"
            },
            {
                id: "disruptive-technologies",
                title: "Disruptive Technologies",
                content: "Disruptive technologies are innovations that significantly alter the way that consumers, industries, or businesses operate.",
                tags: [
                    "innovation",
                    "transformation",
                    "future"
                ],
                ontology_id: "DT-0001"
            }
        ];
    }
    function lS(n, i, c = 150) {
        const s = n.toLowerCase(), o = i.toLowerCase(), d = s.indexOf(o);
        if (d === -1) return n.substring(0, c) + (n.length > c ? "..." : "");
        const m = Math.max(0, d - 50), v = Math.min(n.length, d + i.length + 100), g = n.substring(m, v);
        return (m > 0 ? "..." : "") + g + (v < n.length ? "..." : "");
    }
    aS = function(n, i = 50) {
        if (!Ar) throw new Error("Search not initialized. Call initializeSearch() first.");
        return n.length < 2 ? [] : Ar.search(n, {
            limit: i
        }).map((s)=>({
                id: s.item.id,
                title: s.item.title,
                excerpt: lS(s.item.content, n),
                score: s.score || 0,
                type: s.item.ontology_id ? "ontology" : "page",
                matches: s.matches
            }));
    };
    SS = function() {
        return Ku.length;
    };
    function nS() {
        const [n, i] = Y.useState(""), [c, s] = Y.useState([]), [o, d] = Y.useState(!1), [m, v] = Y.useState(0), g = pf(), y = Y.useRef(null), b = Y.useRef(null);
        Y.useEffect(()=>{
            if (n.length < 2) {
                s([]), d(!1);
                return;
            }
            const j = setTimeout(()=>{
                try {
                    const L = aS(n, 10);
                    s(L), d(L.length > 0), v(0);
                } catch (L) {
                    console.error("Search error:", L), s([]);
                }
            }, 300);
            return ()=>clearTimeout(j);
        }, [
            n
        ]);
        const S = (j)=>{
            g(`/page/${encodeURIComponent(j.title)}`), i(""), d(!1), y.current?.blur();
        }, _ = (j)=>{
            if (!(!o || c.length === 0)) switch(j.key){
                case "ArrowDown":
                    j.preventDefault(), v((L)=>(L + 1) % c.length);
                    break;
                case "ArrowUp":
                    j.preventDefault(), v((L)=>(L - 1 + c.length) % c.length);
                    break;
                case "Enter":
                    j.preventDefault(), c[m] && S(c[m]);
                    break;
                case "Escape":
                    d(!1), y.current?.blur();
                    break;
            }
        }, N = ()=>{
            setTimeout(()=>d(!1), 200);
        };
        return ce.jsxs("div", {
            className: "search-bar",
            children: [
                ce.jsxs("div", {
                    className: "search-input-wrapper",
                    children: [
                        ce.jsx("span", {
                            className: "search-icon",
                            children: "🔍"
                        }),
                        ce.jsx("input", {
                            ref: y,
                            type: "text",
                            value: n,
                            onChange: (j)=>i(j.target.value),
                            onFocus: ()=>n.length >= 2 && c.length > 0 && d(!0),
                            onBlur: N,
                            onKeyDown: _,
                            placeholder: "Search pages and ontology...",
                            className: "search-input"
                        }),
                        n && ce.jsx("button", {
                            className: "search-clear",
                            onClick: ()=>{
                                i(""), s([]), d(!1);
                            },
                            "aria-label": "Clear search",
                            children: "×"
                        })
                    ]
                }),
                o && c.length > 0 && ce.jsx("div", {
                    ref: b,
                    className: "search-results-dropdown",
                    children: c.map((j, L)=>ce.jsxs("div", {
                            className: `search-result-item ${L === m ? "selected" : ""}`,
                            onClick: ()=>S(j),
                            onMouseEnter: ()=>v(L),
                            children: [
                                ce.jsxs("div", {
                                    className: "result-header",
                                    children: [
                                        ce.jsx("span", {
                                            className: "result-title",
                                            children: j.title
                                        }),
                                        ce.jsx("span", {
                                            className: `result-badge ${j.type}`,
                                            children: j.type === "ontology" ? "🏷️" : "📄"
                                        })
                                    ]
                                }),
                                ce.jsx("p", {
                                    className: "result-excerpt",
                                    children: j.excerpt
                                })
                            ]
                        }, j.id))
                })
            ]
        });
    }
    function uS() {
        const n = an(), i = (c)=>n.pathname === c || n.pathname.startsWith(c + "/");
        return ce.jsxs("nav", {
            className: "navbar",
            children: [
                ce.jsxs(Zu, {
                    to: "/",
                    className: "logo",
                    children: [
                        ce.jsx("span", {
                            className: "logo-icon",
                            children: "🧠"
                        }),
                        "Narrative Goldmine"
                    ]
                }),
                ce.jsxs("div", {
                    className: "nav-links",
                    children: [
                        ce.jsx(Zu, {
                            to: "/",
                            className: i("/") && n.pathname === "/" ? "active" : "",
                            children: "Home"
                        }),
                        ce.jsx(Zu, {
                            to: "/ontology",
                            className: i("/ontology") ? "active" : "",
                            children: "Ontology Graph"
                        }),
                        ce.jsx(Zu, {
                            to: "/search",
                            className: i("/search") ? "active" : "",
                            children: "Search"
                        })
                    ]
                }),
                ce.jsx(nS, {})
            ]
        });
    }
    function iS() {
        const [n, i] = Y.useState(!1), [c] = Y.useState([
            "AI Alignment",
            "Smart Contracts",
            "Robotics",
            "Virtual Worlds",
            "Disruptive Technologies"
        ]);
        return ce.jsxs("aside", {
            className: `sidebar ${n ? "collapsed" : ""}`,
            children: [
                ce.jsxs("div", {
                    className: "sidebar-header",
                    children: [
                        ce.jsx("h3", {
                            children: "Pages"
                        }),
                        ce.jsx("button", {
                            className: "collapse-btn",
                            onClick: ()=>i(!n),
                            "aria-label": n ? "Expand sidebar" : "Collapse sidebar",
                            children: n ? "→" : "←"
                        })
                    ]
                }),
                !n && ce.jsx("nav", {
                    className: "sidebar-nav",
                    children: ce.jsx("ul", {
                        children: c.map((s)=>ce.jsx("li", {
                                children: ce.jsx(Zu, {
                                    to: `/page/${encodeURIComponent(s)}`,
                                    children: s
                                })
                            }, s))
                    })
                })
            ]
        });
    }
    function rS() {
        return an(), ce.jsxs("div", {
            className: "app-layout",
            children: [
                ce.jsx(uS, {}),
                ce.jsxs("div", {
                    className: "content-wrapper",
                    children: [
                        ce.jsx(iS, {}),
                        ce.jsx("main", {
                            className: "main-content",
                            children: ce.jsx(vp, {})
                        })
                    ]
                })
            ]
        });
    }
    cS = function() {
        return ce.jsx("div", {
            className: "loading-spinner-container",
            children: ce.jsxs("div", {
                className: "loading-spinner",
                children: [
                    ce.jsx("div", {
                        className: "spinner"
                    }),
                    ce.jsx("p", {
                        children: "Loading..."
                    })
                ]
            })
        });
    };
    const sS = Y.lazy(()=>Or(()=>import("./HomePage-6t0zzDgO.js"), __vite__mapDeps([0,1]))), fS = Y.lazy(()=>Or(()=>import("./PageView-CKv9Myon.js"), __vite__mapDeps([2,3,4]))), ey = Y.lazy(()=>Or(()=>import("./OntologyView-ALfuyrpn.js").then(async (m)=>{
                await m.__tla;
                return m;
            }), __vite__mapDeps([5,3,6]))), oS = Y.lazy(()=>Or(()=>import("./SearchView-HIbNQ7CC.js"), __vite__mapDeps([7,8])));
    function Xu({ children: n }) {
        return ce.jsx(Y.Suspense, {
            fallback: ce.jsx(cS, {}),
            children: n
        });
    }
    const dS = Dp([
        {
            path: "/",
            element: ce.jsx(rS, {}),
            children: [
                {
                    index: !0,
                    element: ce.jsx(Xu, {
                        children: ce.jsx(sS, {})
                    })
                },
                {
                    path: "page/:pageName",
                    element: ce.jsx(Xu, {
                        children: ce.jsx(fS, {})
                    })
                },
                {
                    path: "ontology",
                    element: ce.jsx(Xu, {
                        children: ce.jsx(ey, {})
                    }),
                    children: [
                        {
                            path: ":nodeId",
                            element: ce.jsx(Xu, {
                                children: ce.jsx(ey, {})
                            })
                        }
                    ]
                },
                {
                    path: "search",
                    element: ce.jsx(Xu, {
                        children: ce.jsx(oS, {})
                    })
                }
            ]
        }
    ]);
    eS().catch(console.error);
    const hS = new o1({
        defaultOptions: {
            queries: {
                staleTime: 300 * 1e3,
                retry: 1
            }
        }
    });
    eg.createRoot(document.getElementById("root")).render(ce.jsx(Y.StrictMode, {
        children: ce.jsx(d1, {
            client: hS,
            children: ce.jsx(Bp, {
                router: dS
            })
        })
    }));
})();
export { Zu as L, Jv as R, Mr as S, Or as _, tf as a, Vp as b, ef as c, u1 as d, Wp as e, Ty as f, Rt as g, Y as h, Dr as i, ce as j, gS as k, ly as l, pf as m, gl as n, mS as o, Ip as p, cS as q, Kp as r, vS as s, Zp as t, pS as u, eg as v, yS as w, of as x, aS as y, SS as z, __tla };
