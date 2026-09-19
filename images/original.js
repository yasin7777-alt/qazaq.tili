(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload")) return;
  for (const u of document.querySelectorAll('link[rel="modulepreload"]')) c(u);
  new MutationObserver((u) => {
    for (const p of u)
      if (p.type === "childList")
        for (const d of p.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && c(d);
  }).observe(document, { childList: !0, subtree: !0 });
  function o(u) {
    const p = {};
    return (
      u.integrity && (p.integrity = u.integrity),
      u.referrerPolicy && (p.referrerPolicy = u.referrerPolicy),
      u.crossOrigin === "use-credentials"
        ? (p.credentials = "include")
        : u.crossOrigin === "anonymous"
          ? (p.credentials = "omit")
          : (p.credentials = "same-origin"),
      p
    );
  }
  function c(u) {
    if (u.ep) return;
    u.ep = !0;
    const p = o(u);
    fetch(u.href, p);
  }
})();
var tu = { exports: {} },
  vi = {};
var Dm;
function bx() {
  if (Dm) return vi;
  Dm = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.fragment");
  function o(c, u, p) {
    var d = null;
    if (
      (p !== void 0 && (d = "" + p),
      u.key !== void 0 && (d = "" + u.key),
      "key" in u)
    ) {
      p = {};
      for (var y in u) y !== "key" && (p[y] = u[y]);
    } else p = u;
    return (
      (u = p.ref),
      { $$typeof: a, type: c, key: d, ref: u !== void 0 ? u : null, props: p }
    );
  }
  return ((vi.Fragment = i), (vi.jsx = o), (vi.jsxs = o), vi);
}
var Rm;
function Sx() {
  return (Rm || ((Rm = 1), (tu.exports = bx())), tu.exports);
}
var f = Sx(),
  eu = { exports: {} },
  ut = {};
var Om;
function Tx() {
  if (Om) return ut;
  Om = 1;
  var a = Symbol.for("react.transitional.element"),
    i = Symbol.for("react.portal"),
    o = Symbol.for("react.fragment"),
    c = Symbol.for("react.strict_mode"),
    u = Symbol.for("react.profiler"),
    p = Symbol.for("react.consumer"),
    d = Symbol.for("react.context"),
    y = Symbol.for("react.forward_ref"),
    g = Symbol.for("react.suspense"),
    m = Symbol.for("react.memo"),
    x = Symbol.for("react.lazy"),
    A = Symbol.for("react.activity"),
    S = Symbol.iterator;
  function O(j) {
    return j === null || typeof j != "object"
      ? null
      : ((j = (S && j[S]) || j["@@iterator"]),
        typeof j == "function" ? j : null);
  }
  var M = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    w = Object.assign,
    q = {};
  function Y(j, L, J) {
    ((this.props = j),
      (this.context = L),
      (this.refs = q),
      (this.updater = J || M));
  }
  ((Y.prototype.isReactComponent = {}),
    (Y.prototype.setState = function (j, L) {
      if (typeof j != "object" && typeof j != "function" && j != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, j, L, "setState");
    }),
    (Y.prototype.forceUpdate = function (j) {
      this.updater.enqueueForceUpdate(this, j, "forceUpdate");
    }));
  function X() {}
  X.prototype = Y.prototype;
  function Q(j, L, J) {
    ((this.props = j),
      (this.context = L),
      (this.refs = q),
      (this.updater = J || M));
  }
  var Z = (Q.prototype = new X());
  ((Z.constructor = Q), w(Z, Y.prototype), (Z.isPureReactComponent = !0));
  var nt = Array.isArray;
  function ct() {}
  var F = { H: null, A: null, T: null, S: null },
    $ = Object.prototype.hasOwnProperty;
  function st(j, L, J) {
    var W = J.ref;
    return {
      $$typeof: a,
      type: j,
      key: L,
      ref: W !== void 0 ? W : null,
      props: J,
    };
  }
  function b(j, L) {
    return st(j.type, L, j.props);
  }
  function ht(j) {
    return typeof j == "object" && j !== null && j.$$typeof === a;
  }
  function ot(j) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      j.replace(/[=:]/g, function (J) {
        return L[J];
      })
    );
  }
  var $t = /\/+/g;
  function Ct(j, L) {
    return typeof j == "object" && j !== null && j.key != null
      ? ot("" + j.key)
      : L.toString(36);
  }
  function Mt(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (
          (typeof j.status == "string"
            ? j.then(ct, ct)
            : ((j.status = "pending"),
              j.then(
                function (L) {
                  j.status === "pending" &&
                    ((j.status = "fulfilled"), (j.value = L));
                },
                function (L) {
                  j.status === "pending" &&
                    ((j.status = "rejected"), (j.reason = L));
                },
              )),
          j.status)
        ) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function _(j, L, J, W, rt) {
    var mt = typeof j;
    (mt === "undefined" || mt === "boolean") && (j = null);
    var R = !1;
    if (j === null) R = !0;
    else
      switch (mt) {
        case "bigint":
        case "string":
        case "number":
          R = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case a:
            case i:
              R = !0;
              break;
            case x:
              return ((R = j._init), _(R(j._payload), L, J, W, rt));
          }
      }
    if (R)
      return (
        (rt = rt(j)),
        (R = W === "" ? "." + Ct(j, 0) : W),
        nt(rt)
          ? ((J = ""),
            R != null && (J = R.replace($t, "$&/") + "/"),
            _(rt, L, J, "", function (kt) {
              return kt;
            }))
          : rt != null &&
            (ht(rt) &&
              (rt = b(
                rt,
                J +
                  (rt.key == null || (j && j.key === rt.key)
                    ? ""
                    : ("" + rt.key).replace($t, "$&/") + "/") +
                  R,
              )),
            L.push(rt)),
        1
      );
    R = 0;
    var H = W === "" ? "." : W + ":";
    if (nt(j))
      for (var lt = 0; lt < j.length; lt++)
        ((W = j[lt]), (mt = H + Ct(W, lt)), (R += _(W, L, J, mt, rt)));
    else if (((lt = O(j)), typeof lt == "function"))
      for (j = lt.call(j), lt = 0; !(W = j.next()).done;)
        ((W = W.value), (mt = H + Ct(W, lt++)), (R += _(W, L, J, mt, rt)));
    else if (mt === "object") {
      if (typeof j.then == "function") return _(Mt(j), L, J, W, rt);
      throw (
        (L = String(j)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(j).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return R;
  }
  function K(j, L, J) {
    if (j == null) return j;
    var W = [],
      rt = 0;
    return (
      _(j, W, "", "", function (mt) {
        return L.call(J, mt, rt++);
      }),
      W
    );
  }
  function P(j) {
    if (j._status === -1) {
      var L = j._result;
      ((L = L()),
        L.then(
          function (J) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 1), (j._result = J));
          },
          function (J) {
            (j._status === 0 || j._status === -1) &&
              ((j._status = 2), (j._result = J));
          },
        ),
        j._status === -1 && ((j._status = 0), (j._result = L)));
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ft =
      typeof reportError == "function"
        ? reportError
        : function (j) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var L = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof j == "object" &&
                  j !== null &&
                  typeof j.message == "string"
                    ? String(j.message)
                    : String(j),
                error: j,
              });
              if (!window.dispatchEvent(L)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", j);
              return;
            }
            console.error(j);
          },
    yt = {
      map: K,
      forEach: function (j, L, J) {
        K(
          j,
          function () {
            L.apply(this, arguments);
          },
          J,
        );
      },
      count: function (j) {
        var L = 0;
        return (
          K(j, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (j) {
        return (
          K(j, function (L) {
            return L;
          }) || []
        );
      },
      only: function (j) {
        if (!ht(j))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return j;
      },
    };
  return (
    (ut.Activity = A),
    (ut.Children = yt),
    (ut.Component = Y),
    (ut.Fragment = o),
    (ut.Profiler = u),
    (ut.PureComponent = Q),
    (ut.StrictMode = c),
    (ut.Suspense = g),
    (ut.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (ut.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (j) {
        return F.H.useMemoCache(j);
      },
    }),
    (ut.cache = function (j) {
      return function () {
        return j.apply(null, arguments);
      };
    }),
    (ut.cacheSignal = function () {
      return null;
    }),
    (ut.cloneElement = function (j, L, J) {
      if (j == null)
        throw Error(
          "The argument must be a React element, but you passed " + j + ".",
        );
      var W = w({}, j.props),
        rt = j.key;
      if (L != null)
        for (mt in (L.key !== void 0 && (rt = "" + L.key), L))
          !$.call(L, mt) ||
            mt === "key" ||
            mt === "__self" ||
            mt === "__source" ||
            (mt === "ref" && L.ref === void 0) ||
            (W[mt] = L[mt]);
      var mt = arguments.length - 2;
      if (mt === 1) W.children = J;
      else if (1 < mt) {
        for (var R = Array(mt), H = 0; H < mt; H++) R[H] = arguments[H + 2];
        W.children = R;
      }
      return st(j.type, rt, W);
    }),
    (ut.createContext = function (j) {
      return (
        (j = {
          $$typeof: d,
          _currentValue: j,
          _currentValue2: j,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (j.Provider = j),
        (j.Consumer = { $$typeof: p, _context: j }),
        j
      );
    }),
    (ut.createElement = function (j, L, J) {
      var W,
        rt = {},
        mt = null;
      if (L != null)
        for (W in (L.key !== void 0 && (mt = "" + L.key), L))
          $.call(L, W) &&
            W !== "key" &&
            W !== "__self" &&
            W !== "__source" &&
            (rt[W] = L[W]);
      var R = arguments.length - 2;
      if (R === 1) rt.children = J;
      else if (1 < R) {
        for (var H = Array(R), lt = 0; lt < R; lt++) H[lt] = arguments[lt + 2];
        rt.children = H;
      }
      if (j && j.defaultProps)
        for (W in ((R = j.defaultProps), R)) rt[W] === void 0 && (rt[W] = R[W]);
      return st(j, mt, rt);
    }),
    (ut.createRef = function () {
      return { current: null };
    }),
    (ut.forwardRef = function (j) {
      return { $$typeof: y, render: j };
    }),
    (ut.isValidElement = ht),
    (ut.lazy = function (j) {
      return { $$typeof: x, _payload: { _status: -1, _result: j }, _init: P };
    }),
    (ut.memo = function (j, L) {
      return { $$typeof: m, type: j, compare: L === void 0 ? null : L };
    }),
    (ut.startTransition = function (j) {
      var L = F.T,
        J = {};
      F.T = J;
      try {
        var W = j(),
          rt = F.S;
        (rt !== null && rt(J, W),
          typeof W == "object" &&
            W !== null &&
            typeof W.then == "function" &&
            W.then(ct, ft));
      } catch (mt) {
        ft(mt);
      } finally {
        (L !== null && J.types !== null && (L.types = J.types), (F.T = L));
      }
    }),
    (ut.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh();
    }),
    (ut.use = function (j) {
      return F.H.use(j);
    }),
    (ut.useActionState = function (j, L, J) {
      return F.H.useActionState(j, L, J);
    }),
    (ut.useCallback = function (j, L) {
      return F.H.useCallback(j, L);
    }),
    (ut.useContext = function (j) {
      return F.H.useContext(j);
    }),
    (ut.useDebugValue = function () {}),
    (ut.useDeferredValue = function (j, L) {
      return F.H.useDeferredValue(j, L);
    }),
    (ut.useEffect = function (j, L) {
      return F.H.useEffect(j, L);
    }),
    (ut.useEffectEvent = function (j) {
      return F.H.useEffectEvent(j);
    }),
    (ut.useId = function () {
      return F.H.useId();
    }),
    (ut.useImperativeHandle = function (j, L, J) {
      return F.H.useImperativeHandle(j, L, J);
    }),
    (ut.useInsertionEffect = function (j, L) {
      return F.H.useInsertionEffect(j, L);
    }),
    (ut.useLayoutEffect = function (j, L) {
      return F.H.useLayoutEffect(j, L);
    }),
    (ut.useMemo = function (j, L) {
      return F.H.useMemo(j, L);
    }),
    (ut.useOptimistic = function (j, L) {
      return F.H.useOptimistic(j, L);
    }),
    (ut.useReducer = function (j, L, J) {
      return F.H.useReducer(j, L, J);
    }),
    (ut.useRef = function (j) {
      return F.H.useRef(j);
    }),
    (ut.useState = function (j) {
      return F.H.useState(j);
    }),
    (ut.useSyncExternalStore = function (j, L, J) {
      return F.H.useSyncExternalStore(j, L, J);
    }),
    (ut.useTransition = function () {
      return F.H.useTransition();
    }),
    (ut.version = "19.2.8"),
    ut
  );
}
var wm;
function Iu() {
  return (wm || ((wm = 1), (eu.exports = Tx())), eu.exports);
}
var k = Iu(),
  nu = { exports: {} },
  xi = {},
  au = { exports: {} },
  su = {};
var Vm;
function jx() {
  return (
    Vm ||
      ((Vm = 1),
      (function (a) {
        function i(_, K) {
          var P = _.length;
          _.push(K);
          t: for (; 0 < P;) {
            var ft = (P - 1) >>> 1,
              yt = _[ft];
            if (0 < u(yt, K)) ((_[ft] = K), (_[P] = yt), (P = ft));
            else break t;
          }
        }
        function o(_) {
          return _.length === 0 ? null : _[0];
        }
        function c(_) {
          if (_.length === 0) return null;
          var K = _[0],
            P = _.pop();
          if (P !== K) {
            _[0] = P;
            t: for (var ft = 0, yt = _.length, j = yt >>> 1; ft < j;) {
              var L = 2 * (ft + 1) - 1,
                J = _[L],
                W = L + 1,
                rt = _[W];
              if (0 > u(J, P))
                W < yt && 0 > u(rt, J)
                  ? ((_[ft] = rt), (_[W] = P), (ft = W))
                  : ((_[ft] = J), (_[L] = P), (ft = L));
              else if (W < yt && 0 > u(rt, P))
                ((_[ft] = rt), (_[W] = P), (ft = W));
              else break t;
            }
          }
          return K;
        }
        function u(_, K) {
          var P = _.sortIndex - K.sortIndex;
          return P !== 0 ? P : _.id - K.id;
        }
        if (
          ((a.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var p = performance;
          a.unstable_now = function () {
            return p.now();
          };
        } else {
          var d = Date,
            y = d.now();
          a.unstable_now = function () {
            return d.now() - y;
          };
        }
        var g = [],
          m = [],
          x = 1,
          A = null,
          S = 3,
          O = !1,
          M = !1,
          w = !1,
          q = !1,
          Y = typeof setTimeout == "function" ? setTimeout : null,
          X = typeof clearTimeout == "function" ? clearTimeout : null,
          Q = typeof setImmediate < "u" ? setImmediate : null;
        function Z(_) {
          for (var K = o(m); K !== null;) {
            if (K.callback === null) c(m);
            else if (K.startTime <= _)
              (c(m), (K.sortIndex = K.expirationTime), i(g, K));
            else break;
            K = o(m);
          }
        }
        function nt(_) {
          if (((w = !1), Z(_), !M))
            if (o(g) !== null) ((M = !0), ct || ((ct = !0), ot()));
            else {
              var K = o(m);
              K !== null && Mt(nt, K.startTime - _);
            }
        }
        var ct = !1,
          F = -1,
          $ = 5,
          st = -1;
        function b() {
          return q ? !0 : !(a.unstable_now() - st < $);
        }
        function ht() {
          if (((q = !1), ct)) {
            var _ = a.unstable_now();
            st = _;
            var K = !0;
            try {
              t: {
                ((M = !1), w && ((w = !1), X(F), (F = -1)), (O = !0));
                var P = S;
                try {
                  e: {
                    for (
                      Z(_), A = o(g);
                      A !== null && !(A.expirationTime > _ && b());
                    ) {
                      var ft = A.callback;
                      if (typeof ft == "function") {
                        ((A.callback = null), (S = A.priorityLevel));
                        var yt = ft(A.expirationTime <= _);
                        if (((_ = a.unstable_now()), typeof yt == "function")) {
                          ((A.callback = yt), Z(_), (K = !0));
                          break e;
                        }
                        (A === o(g) && c(g), Z(_));
                      } else c(g);
                      A = o(g);
                    }
                    if (A !== null) K = !0;
                    else {
                      var j = o(m);
                      (j !== null && Mt(nt, j.startTime - _), (K = !1));
                    }
                  }
                  break t;
                } finally {
                  ((A = null), (S = P), (O = !1));
                }
                K = void 0;
              }
            } finally {
              K ? ot() : (ct = !1);
            }
          }
        }
        var ot;
        if (typeof Q == "function")
          ot = function () {
            Q(ht);
          };
        else if (typeof MessageChannel < "u") {
          var $t = new MessageChannel(),
            Ct = $t.port2;
          (($t.port1.onmessage = ht),
            (ot = function () {
              Ct.postMessage(null);
            }));
        } else
          ot = function () {
            Y(ht, 0);
          };
        function Mt(_, K) {
          F = Y(function () {
            _(a.unstable_now());
          }, K);
        }
        ((a.unstable_IdlePriority = 5),
          (a.unstable_ImmediatePriority = 1),
          (a.unstable_LowPriority = 4),
          (a.unstable_NormalPriority = 3),
          (a.unstable_Profiling = null),
          (a.unstable_UserBlockingPriority = 2),
          (a.unstable_cancelCallback = function (_) {
            _.callback = null;
          }),
          (a.unstable_forceFrameRate = function (_) {
            0 > _ || 125 < _
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : ($ = 0 < _ ? Math.floor(1e3 / _) : 5);
          }),
          (a.unstable_getCurrentPriorityLevel = function () {
            return S;
          }),
          (a.unstable_next = function (_) {
            switch (S) {
              case 1:
              case 2:
              case 3:
                var K = 3;
                break;
              default:
                K = S;
            }
            var P = S;
            S = K;
            try {
              return _();
            } finally {
              S = P;
            }
          }),
          (a.unstable_requestPaint = function () {
            q = !0;
          }),
          (a.unstable_runWithPriority = function (_, K) {
            switch (_) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                _ = 3;
            }
            var P = S;
            S = _;
            try {
              return K();
            } finally {
              S = P;
            }
          }),
          (a.unstable_scheduleCallback = function (_, K, P) {
            var ft = a.unstable_now();
            switch (
              (typeof P == "object" && P !== null
                ? ((P = P.delay),
                  (P = typeof P == "number" && 0 < P ? ft + P : ft))
                : (P = ft),
              _)
            ) {
              case 1:
                var yt = -1;
                break;
              case 2:
                yt = 250;
                break;
              case 5:
                yt = 1073741823;
                break;
              case 4:
                yt = 1e4;
                break;
              default:
                yt = 5e3;
            }
            return (
              (yt = P + yt),
              (_ = {
                id: x++,
                callback: K,
                priorityLevel: _,
                startTime: P,
                expirationTime: yt,
                sortIndex: -1,
              }),
              P > ft
                ? ((_.sortIndex = P),
                  i(m, _),
                  o(g) === null &&
                    _ === o(m) &&
                    (w ? (X(F), (F = -1)) : (w = !0), Mt(nt, P - ft)))
                : ((_.sortIndex = yt),
                  i(g, _),
                  M || O || ((M = !0), ct || ((ct = !0), ot()))),
              _
            );
          }),
          (a.unstable_shouldYield = b),
          (a.unstable_wrapCallback = function (_) {
            var K = S;
            return function () {
              var P = S;
              S = K;
              try {
                return _.apply(this, arguments);
              } finally {
                S = P;
              }
            };
          }));
      })(su)),
    su
  );
}
var _m;
function Ex() {
  return (_m || ((_m = 1), (au.exports = jx())), au.exports);
}
var iu = { exports: {} },
  oe = {};
var Um;
function Mx() {
  if (Um) return oe;
  Um = 1;
  var a = Iu();
  function i(g) {
    var m = "https://react.dev/errors/" + g;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var x = 2; x < arguments.length; x++)
        m += "&args[]=" + encodeURIComponent(arguments[x]);
    }
    return (
      "Minified React error #" +
      g +
      "; visit " +
      m +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o() {}
  var c = {
      d: {
        f: o,
        r: function () {
          throw Error(i(522));
        },
        D: o,
        C: o,
        L: o,
        m: o,
        X: o,
        S: o,
        M: o,
      },
      p: 0,
      findDOMNode: null,
    },
    u = Symbol.for("react.portal");
  function p(g, m, x) {
    var A =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: A == null ? null : "" + A,
      children: g,
      containerInfo: m,
      implementation: x,
    };
  }
  var d = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(g, m) {
    if (g === "font") return "";
    if (typeof m == "string") return m === "use-credentials" ? m : "";
  }
  return (
    (oe.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c),
    (oe.createPortal = function (g, m) {
      var x =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11))
        throw Error(i(299));
      return p(g, m, null, x);
    }),
    (oe.flushSync = function (g) {
      var m = d.T,
        x = c.p;
      try {
        if (((d.T = null), (c.p = 2), g)) return g();
      } finally {
        ((d.T = m), (c.p = x), c.d.f());
      }
    }),
    (oe.preconnect = function (g, m) {
      typeof g == "string" &&
        (m
          ? ((m = m.crossOrigin),
            (m =
              typeof m == "string"
                ? m === "use-credentials"
                  ? m
                  : ""
                : void 0))
          : (m = null),
        c.d.C(g, m));
    }),
    (oe.prefetchDNS = function (g) {
      typeof g == "string" && c.d.D(g);
    }),
    (oe.preinit = function (g, m) {
      if (typeof g == "string" && m && typeof m.as == "string") {
        var x = m.as,
          A = y(x, m.crossOrigin),
          S = typeof m.integrity == "string" ? m.integrity : void 0,
          O = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        x === "style"
          ? c.d.S(g, typeof m.precedence == "string" ? m.precedence : void 0, {
              crossOrigin: A,
              integrity: S,
              fetchPriority: O,
            })
          : x === "script" &&
            c.d.X(g, {
              crossOrigin: A,
              integrity: S,
              fetchPriority: O,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
      }
    }),
    (oe.preinitModule = function (g, m) {
      if (typeof g == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var x = y(m.as, m.crossOrigin);
            c.d.M(g, {
              crossOrigin: x,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0,
            });
          }
        } else m == null && c.d.M(g);
    }),
    (oe.preload = function (g, m) {
      if (
        typeof g == "string" &&
        typeof m == "object" &&
        m !== null &&
        typeof m.as == "string"
      ) {
        var x = m.as,
          A = y(x, m.crossOrigin);
        c.d.L(g, x, {
          crossOrigin: A,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority:
            typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy:
            typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet:
            typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0,
        });
      }
    }),
    (oe.preloadModule = function (g, m) {
      if (typeof g == "string")
        if (m) {
          var x = y(m.as, m.crossOrigin);
          c.d.m(g, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: x,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          });
        } else c.d.m(g);
    }),
    (oe.requestFormReset = function (g) {
      c.d.r(g);
    }),
    (oe.unstable_batchedUpdates = function (g, m) {
      return g(m);
    }),
    (oe.useFormState = function (g, m, x) {
      return d.H.useFormState(g, m, x);
    }),
    (oe.useFormStatus = function () {
      return d.H.useHostTransitionStatus();
    }),
    (oe.version = "19.2.8"),
    oe
  );
}
var Bm;
function zx() {
  if (Bm) return iu.exports;
  Bm = 1;
  function a() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (iu.exports = Mx()), iu.exports);
}
var Lm;
function Nx() {
  if (Lm) return xi;
  Lm = 1;
  var a = Ex(),
    i = Iu(),
    o = zx();
  function c(t) {
    var e = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      e += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        e += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return (
      "Minified React error #" +
      t +
      "; visit " +
      e +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function u(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
  }
  function p(t) {
    var e = t,
      n = t;
    if (t.alternate) for (; e.return;) e = e.return;
    else {
      t = e;
      do ((e = t), (e.flags & 4098) !== 0 && (n = e.return), (t = e.return));
      while (t);
    }
    return e.tag === 3 ? n : null;
  }
  function d(t) {
    if (t.tag === 13) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function y(t) {
    if (t.tag === 31) {
      var e = t.memoizedState;
      if (
        (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
        e !== null)
      )
        return e.dehydrated;
    }
    return null;
  }
  function g(t) {
    if (p(t) !== t) throw Error(c(188));
  }
  function m(t) {
    var e = t.alternate;
    if (!e) {
      if (((e = p(t)), e === null)) throw Error(c(188));
      return e !== t ? null : t;
    }
    for (var n = t, s = e; ;) {
      var l = n.return;
      if (l === null) break;
      var r = l.alternate;
      if (r === null) {
        if (((s = l.return), s !== null)) {
          n = s;
          continue;
        }
        break;
      }
      if (l.child === r.child) {
        for (r = l.child; r;) {
          if (r === n) return (g(l), t);
          if (r === s) return (g(l), e);
          r = r.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== s.return) ((n = l), (s = r));
      else {
        for (var h = !1, v = l.child; v;) {
          if (v === n) {
            ((h = !0), (n = l), (s = r));
            break;
          }
          if (v === s) {
            ((h = !0), (s = l), (n = r));
            break;
          }
          v = v.sibling;
        }
        if (!h) {
          for (v = r.child; v;) {
            if (v === n) {
              ((h = !0), (n = r), (s = l));
              break;
            }
            if (v === s) {
              ((h = !0), (s = r), (n = l));
              break;
            }
            v = v.sibling;
          }
          if (!h) throw Error(c(189));
        }
      }
      if (n.alternate !== s) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? t : e;
  }
  function x(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t;
    for (t = t.child; t !== null;) {
      if (((e = x(t)), e !== null)) return e;
      t = t.sibling;
    }
    return null;
  }
  var A = Object.assign,
    S = Symbol.for("react.element"),
    O = Symbol.for("react.transitional.element"),
    M = Symbol.for("react.portal"),
    w = Symbol.for("react.fragment"),
    q = Symbol.for("react.strict_mode"),
    Y = Symbol.for("react.profiler"),
    X = Symbol.for("react.consumer"),
    Q = Symbol.for("react.context"),
    Z = Symbol.for("react.forward_ref"),
    nt = Symbol.for("react.suspense"),
    ct = Symbol.for("react.suspense_list"),
    F = Symbol.for("react.memo"),
    $ = Symbol.for("react.lazy"),
    st = Symbol.for("react.activity"),
    b = Symbol.for("react.memo_cache_sentinel"),
    ht = Symbol.iterator;
  function ot(t) {
    return t === null || typeof t != "object"
      ? null
      : ((t = (ht && t[ht]) || t["@@iterator"]),
        typeof t == "function" ? t : null);
  }
  var $t = Symbol.for("react.client.reference");
  function Ct(t) {
    if (t == null) return null;
    if (typeof t == "function")
      return t.$$typeof === $t ? null : t.displayName || t.name || null;
    if (typeof t == "string") return t;
    switch (t) {
      case w:
        return "Fragment";
      case Y:
        return "Profiler";
      case q:
        return "StrictMode";
      case nt:
        return "Suspense";
      case ct:
        return "SuspenseList";
      case st:
        return "Activity";
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case M:
          return "Portal";
        case Q:
          return t.displayName || "Context";
        case X:
          return (t._context.displayName || "Context") + ".Consumer";
        case Z:
          var e = t.render;
          return (
            (t = t.displayName),
            t ||
              ((t = e.displayName || e.name || ""),
              (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
            t
          );
        case F:
          return (
            (e = t.displayName || null),
            e !== null ? e : Ct(t.type) || "Memo"
          );
        case $:
          ((e = t._payload), (t = t._init));
          try {
            return Ct(t(e));
          } catch {}
      }
    return null;
  }
  var Mt = Array.isArray,
    _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    K = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    P = { pending: !1, data: null, method: null, action: null },
    ft = [],
    yt = -1;
  function j(t) {
    return { current: t };
  }
  function L(t) {
    0 > yt || ((t.current = ft[yt]), (ft[yt] = null), yt--);
  }
  function J(t, e) {
    (yt++, (ft[yt] = t.current), (t.current = e));
  }
  var W = j(null),
    rt = j(null),
    mt = j(null),
    R = j(null);
  function H(t, e) {
    switch ((J(mt, e), J(rt, t), J(W, null), e.nodeType)) {
      case 9:
      case 11:
        t = (t = e.documentElement) && (t = t.namespaceURI) ? Ip(t) : 0;
        break;
      default:
        if (((t = e.tagName), (e = e.namespaceURI)))
          ((e = Ip(e)), (t = tm(e, t)));
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0;
          }
    }
    (L(W), J(W, t));
  }
  function lt() {
    (L(W), L(rt), L(mt));
  }
  function kt(t) {
    t.memoizedState !== null && J(R, t);
    var e = W.current,
      n = tm(e, t.type);
    e !== n && (J(rt, t), J(W, n));
  }
  function Hi(t) {
    (rt.current === t && (L(W), L(rt)),
      R.current === t && (L(R), (pi._currentValue = P)));
  }
  var Uo, Cf;
  function ea(t) {
    if (Uo === void 0)
      try {
        throw Error();
      } catch (n) {
        var e = n.stack.trim().match(/\n( *(at )?)/);
        ((Uo = (e && e[1]) || ""),
          (Cf =
            -1 <
            n.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < n.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Uo +
      t +
      Cf
    );
  }
  var Bo = !1;
  function Lo(t, e) {
    if (!t || Bo) return "";
    Bo = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var s = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var G = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(G.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(G, []);
                } catch (V) {
                  var D = V;
                }
                Reflect.construct(t, [], G);
              } else {
                try {
                  G.call();
                } catch (V) {
                  D = V;
                }
                t.call(G.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                D = V;
              }
              (G = t()) &&
                typeof G.catch == "function" &&
                G.catch(function () {});
            }
          } catch (V) {
            if (V && D && typeof V.stack == "string") return [V.stack, D.stack];
          }
          return [null, null];
        },
      };
      s.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        s.DetermineComponentFrameRoot,
        "name",
      );
      l &&
        l.configurable &&
        Object.defineProperty(s.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var r = s.DetermineComponentFrameRoot(),
        h = r[0],
        v = r[1];
      if (h && v) {
        var T = h.split(`
`),
          C = v.split(`
`);
        for (
          l = s = 0;
          s < T.length && !T[s].includes("DetermineComponentFrameRoot");
        )
          s++;
        for (; l < C.length && !C[l].includes("DetermineComponentFrameRoot");)
          l++;
        if (s === T.length || l === C.length)
          for (
            s = T.length - 1, l = C.length - 1;
            1 <= s && 0 <= l && T[s] !== C[l];
          )
            l--;
        for (; 1 <= s && 0 <= l; s--, l--)
          if (T[s] !== C[l]) {
            if (s !== 1 || l !== 1)
              do
                if ((s--, l--, 0 > l || T[s] !== C[l])) {
                  var U =
                    `
` + T[s].replace(" at new ", " at ");
                  return (
                    t.displayName &&
                      U.includes("<anonymous>") &&
                      (U = U.replace("<anonymous>", t.displayName)),
                    U
                  );
                }
              while (1 <= s && 0 <= l);
            break;
          }
      }
    } finally {
      ((Bo = !1), (Error.prepareStackTrace = n));
    }
    return (n = t ? t.displayName || t.name : "") ? ea(n) : "";
  }
  function W0(t, e) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return ea(t.type);
      case 16:
        return ea("Lazy");
      case 13:
        return t.child !== e && e !== null
          ? ea("Suspense Fallback")
          : ea("Suspense");
      case 19:
        return ea("SuspenseList");
      case 0:
      case 15:
        return Lo(t.type, !1);
      case 11:
        return Lo(t.type.render, !1);
      case 1:
        return Lo(t.type, !0);
      case 31:
        return ea("Activity");
      default:
        return "";
    }
  }
  function Df(t) {
    try {
      var e = "",
        n = null;
      do ((e += W0(t, n)), (n = t), (t = t.return));
      while (t);
      return e;
    } catch (s) {
      return (
        `
Error generating stack: ` +
        s.message +
        `
` +
        s.stack
      );
    }
  }
  var Ho = Object.prototype.hasOwnProperty,
    Go = a.unstable_scheduleCallback,
    qo = a.unstable_cancelCallback,
    I0 = a.unstable_shouldYield,
    tg = a.unstable_requestPaint,
    Ae = a.unstable_now,
    eg = a.unstable_getCurrentPriorityLevel,
    Rf = a.unstable_ImmediatePriority,
    Of = a.unstable_UserBlockingPriority,
    Gi = a.unstable_NormalPriority,
    ng = a.unstable_LowPriority,
    wf = a.unstable_IdlePriority,
    ag = a.log,
    sg = a.unstable_setDisableYieldValue,
    Ms = null,
    be = null;
  function En(t) {
    if (
      (typeof ag == "function" && sg(t),
      be && typeof be.setStrictMode == "function")
    )
      try {
        be.setStrictMode(Ms, t);
      } catch {}
  }
  var Se = Math.clz32 ? Math.clz32 : og,
    ig = Math.log,
    lg = Math.LN2;
  function og(t) {
    return ((t >>>= 0), t === 0 ? 32 : (31 - ((ig(t) / lg) | 0)) | 0);
  }
  var qi = 256,
    ki = 262144,
    Yi = 4194304;
  function na(t) {
    var e = t & 42;
    if (e !== 0) return e;
    switch (t & -t) {
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
        return t & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
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
        return t;
    }
  }
  function Xi(t, e, n) {
    var s = t.pendingLanes;
    if (s === 0) return 0;
    var l = 0,
      r = t.suspendedLanes,
      h = t.pingedLanes;
    t = t.warmLanes;
    var v = s & 134217727;
    return (
      v !== 0
        ? ((s = v & ~r),
          s !== 0
            ? (l = na(s))
            : ((h &= v),
              h !== 0
                ? (l = na(h))
                : n || ((n = v & ~t), n !== 0 && (l = na(n)))))
        : ((v = s & ~r),
          v !== 0
            ? (l = na(v))
            : h !== 0
              ? (l = na(h))
              : n || ((n = s & ~t), n !== 0 && (l = na(n)))),
      l === 0
        ? 0
        : e !== 0 &&
            e !== l &&
            (e & r) === 0 &&
            ((r = l & -l),
            (n = e & -e),
            r >= n || (r === 32 && (n & 4194048) !== 0))
          ? e
          : l
    );
  }
  function zs(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0;
  }
  function cg(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return e + 250;
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
        return e + 5e3;
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
  function Vf() {
    var t = Yi;
    return ((Yi <<= 1), (Yi & 62914560) === 0 && (Yi = 4194304), t);
  }
  function ko(t) {
    for (var e = [], n = 0; 31 > n; n++) e.push(t);
    return e;
  }
  function Ns(t, e) {
    ((t.pendingLanes |= e),
      e !== 268435456 &&
        ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0)));
  }
  function rg(t, e, n, s, l, r) {
    var h = t.pendingLanes;
    ((t.pendingLanes = n),
      (t.suspendedLanes = 0),
      (t.pingedLanes = 0),
      (t.warmLanes = 0),
      (t.expiredLanes &= n),
      (t.entangledLanes &= n),
      (t.errorRecoveryDisabledLanes &= n),
      (t.shellSuspendCounter = 0));
    var v = t.entanglements,
      T = t.expirationTimes,
      C = t.hiddenUpdates;
    for (n = h & ~n; 0 < n;) {
      var U = 31 - Se(n),
        G = 1 << U;
      ((v[U] = 0), (T[U] = -1));
      var D = C[U];
      if (D !== null)
        for (C[U] = null, U = 0; U < D.length; U++) {
          var V = D[U];
          V !== null && (V.lane &= -536870913);
        }
      n &= ~G;
    }
    (s !== 0 && _f(t, s, 0),
      r !== 0 && l === 0 && t.tag !== 0 && (t.suspendedLanes |= r & ~(h & ~e)));
  }
  function _f(t, e, n) {
    ((t.pendingLanes |= e), (t.suspendedLanes &= ~e));
    var s = 31 - Se(e);
    ((t.entangledLanes |= e),
      (t.entanglements[s] = t.entanglements[s] | 1073741824 | (n & 261930)));
  }
  function Uf(t, e) {
    var n = (t.entangledLanes |= e);
    for (t = t.entanglements; n;) {
      var s = 31 - Se(n),
        l = 1 << s;
      ((l & e) | (t[s] & e) && (t[s] |= e), (n &= ~l));
    }
  }
  function Bf(t, e) {
    var n = e & -e;
    return (
      (n = (n & 42) !== 0 ? 1 : Yo(n)),
      (n & (t.suspendedLanes | e)) !== 0 ? 0 : n
    );
  }
  function Yo(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0;
    }
    return t;
  }
  function Xo(t) {
    return (
      (t &= -t),
      2 < t ? (8 < t ? ((t & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Lf() {
    var t = K.p;
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : Tm(t.type));
  }
  function Hf(t, e) {
    var n = K.p;
    try {
      return ((K.p = t), e());
    } finally {
      K.p = n;
    }
  }
  var Mn = Math.random().toString(36).slice(2),
    ee = "__reactFiber$" + Mn,
    he = "__reactProps$" + Mn,
    Na = "__reactContainer$" + Mn,
    Qo = "__reactEvents$" + Mn,
    ug = "__reactListeners$" + Mn,
    fg = "__reactHandles$" + Mn,
    Gf = "__reactResources$" + Mn,
    Cs = "__reactMarker$" + Mn;
  function Zo(t) {
    (delete t[ee], delete t[he], delete t[Qo], delete t[ug], delete t[fg]);
  }
  function Ca(t) {
    var e = t[ee];
    if (e) return e;
    for (var n = t.parentNode; n;) {
      if ((e = n[Na] || n[ee])) {
        if (
          ((n = e.alternate),
          e.child !== null || (n !== null && n.child !== null))
        )
          for (t = om(t); t !== null;) {
            if ((n = t[ee])) return n;
            t = om(t);
          }
        return e;
      }
      ((t = n), (n = t.parentNode));
    }
    return null;
  }
  function Da(t) {
    if ((t = t[ee] || t[Na])) {
      var e = t.tag;
      if (
        e === 5 ||
        e === 6 ||
        e === 13 ||
        e === 31 ||
        e === 26 ||
        e === 27 ||
        e === 3
      )
        return t;
    }
    return null;
  }
  function Ds(t) {
    var e = t.tag;
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode;
    throw Error(c(33));
  }
  function Ra(t) {
    var e = t[Gf];
    return (
      e ||
        (e = t[Gf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      e
    );
  }
  function It(t) {
    t[Cs] = !0;
  }
  var qf = new Set(),
    kf = {};
  function aa(t, e) {
    (Oa(t, e), Oa(t + "Capture", e));
  }
  function Oa(t, e) {
    for (kf[t] = e, t = 0; t < e.length; t++) qf.add(e[t]);
  }
  var dg = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    Yf = {},
    Xf = {};
  function hg(t) {
    return Ho.call(Xf, t)
      ? !0
      : Ho.call(Yf, t)
        ? !1
        : dg.test(t)
          ? (Xf[t] = !0)
          : ((Yf[t] = !0), !1);
  }
  function Qi(t, e, n) {
    if (hg(e))
      if (n === null) t.removeAttribute(e);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(e);
            return;
          case "boolean":
            var s = e.toLowerCase().slice(0, 5);
            if (s !== "data-" && s !== "aria-") {
              t.removeAttribute(e);
              return;
            }
        }
        t.setAttribute(e, "" + n);
      }
  }
  function Zi(t, e, n) {
    if (n === null) t.removeAttribute(e);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(e);
          return;
      }
      t.setAttribute(e, "" + n);
    }
  }
  function ln(t, e, n, s) {
    if (s === null) t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return;
      }
      t.setAttributeNS(e, n, "" + s);
    }
  }
  function Oe(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return "";
    }
  }
  function Qf(t) {
    var e = t.type;
    return (
      (t = t.nodeName) &&
      t.toLowerCase() === "input" &&
      (e === "checkbox" || e === "radio")
    );
  }
  function pg(t, e, n) {
    var s = Object.getOwnPropertyDescriptor(t.constructor.prototype, e);
    if (
      !t.hasOwnProperty(e) &&
      typeof s < "u" &&
      typeof s.get == "function" &&
      typeof s.set == "function"
    ) {
      var l = s.get,
        r = s.set;
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return l.call(this);
          },
          set: function (h) {
            ((n = "" + h), r.call(this, h));
          },
        }),
        Object.defineProperty(t, e, { enumerable: s.enumerable }),
        {
          getValue: function () {
            return n;
          },
          setValue: function (h) {
            n = "" + h;
          },
          stopTracking: function () {
            ((t._valueTracker = null), delete t[e]);
          },
        }
      );
    }
  }
  function Ko(t) {
    if (!t._valueTracker) {
      var e = Qf(t) ? "checked" : "value";
      t._valueTracker = pg(t, e, "" + t[e]);
    }
  }
  function Zf(t) {
    if (!t) return !1;
    var e = t._valueTracker;
    if (!e) return !0;
    var n = e.getValue(),
      s = "";
    return (
      t && (s = Qf(t) ? (t.checked ? "true" : "false") : t.value),
      (t = s),
      t !== n ? (e.setValue(t), !0) : !1
    );
  }
  function Ki(t) {
    if (
      ((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u")
    )
      return null;
    try {
      return t.activeElement || t.body;
    } catch {
      return t.body;
    }
  }
  var mg = /[\n"\\]/g;
  function we(t) {
    return t.replace(mg, function (e) {
      return "\\" + e.charCodeAt(0).toString(16) + " ";
    });
  }
  function Jo(t, e, n, s, l, r, h, v) {
    ((t.name = ""),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (t.type = h)
        : t.removeAttribute("type"),
      e != null
        ? h === "number"
          ? ((e === 0 && t.value === "") || t.value != e) &&
            (t.value = "" + Oe(e))
          : t.value !== "" + Oe(e) && (t.value = "" + Oe(e))
        : (h !== "submit" && h !== "reset") || t.removeAttribute("value"),
      e != null
        ? Fo(t, h, Oe(e))
        : n != null
          ? Fo(t, h, Oe(n))
          : s != null && t.removeAttribute("value"),
      l == null && r != null && (t.defaultChecked = !!r),
      l != null &&
        (t.checked = l && typeof l != "function" && typeof l != "symbol"),
      v != null &&
      typeof v != "function" &&
      typeof v != "symbol" &&
      typeof v != "boolean"
        ? (t.name = "" + Oe(v))
        : t.removeAttribute("name"));
  }
  function Kf(t, e, n, s, l, r, h, v) {
    if (
      (r != null &&
        typeof r != "function" &&
        typeof r != "symbol" &&
        typeof r != "boolean" &&
        (t.type = r),
      e != null || n != null)
    ) {
      if (!((r !== "submit" && r !== "reset") || e != null)) {
        Ko(t);
        return;
      }
      ((n = n != null ? "" + Oe(n) : ""),
        (e = e != null ? "" + Oe(e) : n),
        v || e === t.value || (t.value = e),
        (t.defaultValue = e));
    }
    ((s = s ?? l),
      (s = typeof s != "function" && typeof s != "symbol" && !!s),
      (t.checked = v ? t.checked : !!s),
      (t.defaultChecked = !!s),
      h != null &&
        typeof h != "function" &&
        typeof h != "symbol" &&
        typeof h != "boolean" &&
        (t.name = h),
      Ko(t));
  }
  function Fo(t, e, n) {
    (e === "number" && Ki(t.ownerDocument) === t) ||
      t.defaultValue === "" + n ||
      (t.defaultValue = "" + n);
  }
  function wa(t, e, n, s) {
    if (((t = t.options), e)) {
      e = {};
      for (var l = 0; l < n.length; l++) e["$" + n[l]] = !0;
      for (n = 0; n < t.length; n++)
        ((l = e.hasOwnProperty("$" + t[n].value)),
          t[n].selected !== l && (t[n].selected = l),
          l && s && (t[n].defaultSelected = !0));
    } else {
      for (n = "" + Oe(n), e = null, l = 0; l < t.length; l++) {
        if (t[l].value === n) {
          ((t[l].selected = !0), s && (t[l].defaultSelected = !0));
          return;
        }
        e !== null || t[l].disabled || (e = t[l]);
      }
      e !== null && (e.selected = !0);
    }
  }
  function Jf(t, e, n) {
    if (
      e != null &&
      ((e = "" + Oe(e)), e !== t.value && (t.value = e), n == null)
    ) {
      t.defaultValue !== e && (t.defaultValue = e);
      return;
    }
    t.defaultValue = n != null ? "" + Oe(n) : "";
  }
  function Ff(t, e, n, s) {
    if (e == null) {
      if (s != null) {
        if (n != null) throw Error(c(92));
        if (Mt(s)) {
          if (1 < s.length) throw Error(c(93));
          s = s[0];
        }
        n = s;
      }
      (n == null && (n = ""), (e = n));
    }
    ((n = Oe(e)),
      (t.defaultValue = n),
      (s = t.textContent),
      s === n && s !== "" && s !== null && (t.value = s),
      Ko(t));
  }
  function Va(t, e) {
    if (e) {
      var n = t.firstChild;
      if (n && n === t.lastChild && n.nodeType === 3) {
        n.nodeValue = e;
        return;
      }
    }
    t.textContent = e;
  }
  var yg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function $f(t, e, n) {
    var s = e.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === ""
      ? s
        ? t.setProperty(e, "")
        : e === "float"
          ? (t.cssFloat = "")
          : (t[e] = "")
      : s
        ? t.setProperty(e, n)
        : typeof n != "number" || n === 0 || yg.has(e)
          ? e === "float"
            ? (t.cssFloat = n)
            : (t[e] = ("" + n).trim())
          : (t[e] = n + "px");
  }
  function Pf(t, e, n) {
    if (e != null && typeof e != "object") throw Error(c(62));
    if (((t = t.style), n != null)) {
      for (var s in n)
        !n.hasOwnProperty(s) ||
          (e != null && e.hasOwnProperty(s)) ||
          (s.indexOf("--") === 0
            ? t.setProperty(s, "")
            : s === "float"
              ? (t.cssFloat = "")
              : (t[s] = ""));
      for (var l in e)
        ((s = e[l]), e.hasOwnProperty(l) && n[l] !== s && $f(t, l, s));
    } else for (var r in e) e.hasOwnProperty(r) && $f(t, r, e[r]);
  }
  function $o(t) {
    if (t.indexOf("-") === -1) return !1;
    switch (t) {
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
  var gg = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    vg =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ji(t) {
    return vg.test("" + t)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : t;
  }
  function on() {}
  var Po = null;
  function Wo(t) {
    return (
      (t = t.target || t.srcElement || window),
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
    );
  }
  var _a = null,
    Ua = null;
  function Wf(t) {
    var e = Da(t);
    if (e && (t = e.stateNode)) {
      var n = t[he] || null;
      t: switch (((t = e.stateNode), e.type)) {
        case "input":
          if (
            (Jo(
              t,
              n.value,
              n.defaultValue,
              n.defaultValue,
              n.checked,
              n.defaultChecked,
              n.type,
              n.name,
            ),
            (e = n.name),
            n.type === "radio" && e != null)
          ) {
            for (n = t; n.parentNode;) n = n.parentNode;
            for (
              n = n.querySelectorAll(
                'input[name="' + we("" + e) + '"][type="radio"]',
              ),
                e = 0;
              e < n.length;
              e++
            ) {
              var s = n[e];
              if (s !== t && s.form === t.form) {
                var l = s[he] || null;
                if (!l) throw Error(c(90));
                Jo(
                  s,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name,
                );
              }
            }
            for (e = 0; e < n.length; e++)
              ((s = n[e]), s.form === t.form && Zf(s));
          }
          break t;
        case "textarea":
          Jf(t, n.value, n.defaultValue);
          break t;
        case "select":
          ((e = n.value), e != null && wa(t, !!n.multiple, e, !1));
      }
    }
  }
  var Io = !1;
  function If(t, e, n) {
    if (Io) return t(e, n);
    Io = !0;
    try {
      var s = t(e);
      return s;
    } finally {
      if (
        ((Io = !1),
        (_a !== null || Ua !== null) &&
          (_l(), _a && ((e = _a), (t = Ua), (Ua = _a = null), Wf(e), t)))
      )
        for (e = 0; e < t.length; e++) Wf(t[e]);
    }
  }
  function Rs(t, e) {
    var n = t.stateNode;
    if (n === null) return null;
    var s = n[he] || null;
    if (s === null) return null;
    n = s[e];
    t: switch (e) {
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
        ((s = !s.disabled) ||
          ((t = t.type),
          (s = !(
            t === "button" ||
            t === "input" ||
            t === "select" ||
            t === "textarea"
          ))),
          (t = !s));
        break t;
      default:
        t = !1;
    }
    if (t) return null;
    if (n && typeof n != "function") throw Error(c(231, e, typeof n));
    return n;
  }
  var cn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    tc = !1;
  if (cn)
    try {
      var Os = {};
      (Object.defineProperty(Os, "passive", {
        get: function () {
          tc = !0;
        },
      }),
        window.addEventListener("test", Os, Os),
        window.removeEventListener("test", Os, Os));
    } catch {
      tc = !1;
    }
  var zn = null,
    ec = null,
    Fi = null;
  function td() {
    if (Fi) return Fi;
    var t,
      e = ec,
      n = e.length,
      s,
      l = "value" in zn ? zn.value : zn.textContent,
      r = l.length;
    for (t = 0; t < n && e[t] === l[t]; t++);
    var h = n - t;
    for (s = 1; s <= h && e[n - s] === l[r - s]; s++);
    return (Fi = l.slice(t, 1 < s ? 1 - s : void 0));
  }
  function $i(t) {
    var e = t.keyCode;
    return (
      "charCode" in t
        ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
        : (t = e),
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
    );
  }
  function Pi() {
    return !0;
  }
  function ed() {
    return !1;
  }
  function pe(t) {
    function e(n, s, l, r, h) {
      ((this._reactName = n),
        (this._targetInst = l),
        (this.type = s),
        (this.nativeEvent = r),
        (this.target = h),
        (this.currentTarget = null));
      for (var v in t)
        t.hasOwnProperty(v) && ((n = t[v]), (this[v] = n ? n(r) : r[v]));
      return (
        (this.isDefaultPrevented = (
          r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1
        )
          ? Pi
          : ed),
        (this.isPropagationStopped = ed),
        this
      );
    }
    return (
      A(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = Pi));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = Pi));
        },
        persist: function () {},
        isPersistent: Pi,
      }),
      e
    );
  }
  var sa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Wi = pe(sa),
    ws = A({}, sa, { view: 0, detail: 0 }),
    xg = pe(ws),
    nc,
    ac,
    Vs,
    Ii = A({}, ws, {
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
      getModifierState: ic,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0
          ? t.fromElement === t.srcElement
            ? t.toElement
            : t.fromElement
          : t.relatedTarget;
      },
      movementX: function (t) {
        return "movementX" in t
          ? t.movementX
          : (t !== Vs &&
              (Vs && t.type === "mousemove"
                ? ((nc = t.screenX - Vs.screenX), (ac = t.screenY - Vs.screenY))
                : (ac = nc = 0),
              (Vs = t)),
            nc);
      },
      movementY: function (t) {
        return "movementY" in t ? t.movementY : ac;
      },
    }),
    nd = pe(Ii),
    Ag = A({}, Ii, { dataTransfer: 0 }),
    bg = pe(Ag),
    Sg = A({}, ws, { relatedTarget: 0 }),
    sc = pe(Sg),
    Tg = A({}, sa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    jg = pe(Tg),
    Eg = A({}, sa, {
      clipboardData: function (t) {
        return "clipboardData" in t ? t.clipboardData : window.clipboardData;
      },
    }),
    Mg = pe(Eg),
    zg = A({}, sa, { data: 0 }),
    ad = pe(zg),
    Ng = {
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
      MozPrintableKey: "Unidentified",
    },
    Cg = {
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
      224: "Meta",
    },
    Dg = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Rg(t) {
    var e = this.nativeEvent;
    return e.getModifierState
      ? e.getModifierState(t)
      : (t = Dg[t])
        ? !!e[t]
        : !1;
  }
  function ic() {
    return Rg;
  }
  var Og = A({}, ws, {
      key: function (t) {
        if (t.key) {
          var e = Ng[t.key] || t.key;
          if (e !== "Unidentified") return e;
        }
        return t.type === "keypress"
          ? ((t = $i(t)), t === 13 ? "Enter" : String.fromCharCode(t))
          : t.type === "keydown" || t.type === "keyup"
            ? Cg[t.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ic,
      charCode: function (t) {
        return t.type === "keypress" ? $i(t) : 0;
      },
      keyCode: function (t) {
        return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
      },
      which: function (t) {
        return t.type === "keypress"
          ? $i(t)
          : t.type === "keydown" || t.type === "keyup"
            ? t.keyCode
            : 0;
      },
    }),
    wg = pe(Og),
    Vg = A({}, Ii, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    sd = pe(Vg),
    _g = A({}, ws, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ic,
    }),
    Ug = pe(_g),
    Bg = A({}, sa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Lg = pe(Bg),
    Hg = A({}, Ii, {
      deltaX: function (t) {
        return "deltaX" in t
          ? t.deltaX
          : "wheelDeltaX" in t
            ? -t.wheelDeltaX
            : 0;
      },
      deltaY: function (t) {
        return "deltaY" in t
          ? t.deltaY
          : "wheelDeltaY" in t
            ? -t.wheelDeltaY
            : "wheelDelta" in t
              ? -t.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Gg = pe(Hg),
    qg = A({}, sa, { newState: 0, oldState: 0 }),
    kg = pe(qg),
    Yg = [9, 13, 27, 32],
    lc = cn && "CompositionEvent" in window,
    _s = null;
  cn && "documentMode" in document && (_s = document.documentMode);
  var Xg = cn && "TextEvent" in window && !_s,
    id = cn && (!lc || (_s && 8 < _s && 11 >= _s)),
    ld = " ",
    od = !1;
  function cd(t, e) {
    switch (t) {
      case "keyup":
        return Yg.indexOf(e.keyCode) !== -1;
      case "keydown":
        return e.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rd(t) {
    return (
      (t = t.detail),
      typeof t == "object" && "data" in t ? t.data : null
    );
  }
  var Ba = !1;
  function Qg(t, e) {
    switch (t) {
      case "compositionend":
        return rd(e);
      case "keypress":
        return e.which !== 32 ? null : ((od = !0), ld);
      case "textInput":
        return ((t = e.data), t === ld && od ? null : t);
      default:
        return null;
    }
  }
  function Zg(t, e) {
    if (Ba)
      return t === "compositionend" || (!lc && cd(t, e))
        ? ((t = td()), (Fi = ec = zn = null), (Ba = !1), t)
        : null;
    switch (t) {
      case "paste":
        return null;
      case "keypress":
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char;
          if (e.which) return String.fromCharCode(e.which);
        }
        return null;
      case "compositionend":
        return id && e.locale !== "ko" ? null : e.data;
      default:
        return null;
    }
  }
  var Kg = {
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
    week: !0,
  };
  function ud(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return e === "input" ? !!Kg[t.type] : e === "textarea";
  }
  function fd(t, e, n, s) {
    (_a ? (Ua ? Ua.push(s) : (Ua = [s])) : (_a = s),
      (e = kl(e, "onChange")),
      0 < e.length &&
        ((n = new Wi("onChange", "change", null, n, s)),
        t.push({ event: n, listeners: e })));
  }
  var Us = null,
    Bs = null;
  function Jg(t) {
    Kp(t, 0);
  }
  function tl(t) {
    var e = Ds(t);
    if (Zf(e)) return t;
  }
  function dd(t, e) {
    if (t === "change") return e;
  }
  var hd = !1;
  if (cn) {
    var oc;
    if (cn) {
      var cc = "oninput" in document;
      if (!cc) {
        var pd = document.createElement("div");
        (pd.setAttribute("oninput", "return;"),
          (cc = typeof pd.oninput == "function"));
      }
      oc = cc;
    } else oc = !1;
    hd = oc && (!document.documentMode || 9 < document.documentMode);
  }
  function md() {
    Us && (Us.detachEvent("onpropertychange", yd), (Bs = Us = null));
  }
  function yd(t) {
    if (t.propertyName === "value" && tl(Bs)) {
      var e = [];
      (fd(e, Bs, t, Wo(t)), If(Jg, e));
    }
  }
  function Fg(t, e, n) {
    t === "focusin"
      ? (md(), (Us = e), (Bs = n), Us.attachEvent("onpropertychange", yd))
      : t === "focusout" && md();
  }
  function $g(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return tl(Bs);
  }
  function Pg(t, e) {
    if (t === "click") return tl(e);
  }
  function Wg(t, e) {
    if (t === "input" || t === "change") return tl(e);
  }
  function Ig(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
  }
  var Te = typeof Object.is == "function" ? Object.is : Ig;
  function Ls(t, e) {
    if (Te(t, e)) return !0;
    if (
      typeof t != "object" ||
      t === null ||
      typeof e != "object" ||
      e === null
    )
      return !1;
    var n = Object.keys(t),
      s = Object.keys(e);
    if (n.length !== s.length) return !1;
    for (s = 0; s < n.length; s++) {
      var l = n[s];
      if (!Ho.call(e, l) || !Te(t[l], e[l])) return !1;
    }
    return !0;
  }
  function gd(t) {
    for (; t && t.firstChild;) t = t.firstChild;
    return t;
  }
  function vd(t, e) {
    var n = gd(t);
    t = 0;
    for (var s; n;) {
      if (n.nodeType === 3) {
        if (((s = t + n.textContent.length), t <= e && s >= e))
          return { node: n, offset: e - t };
        t = s;
      }
      t: {
        for (; n;) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break t;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = gd(n);
    }
  }
  function xd(t, e) {
    return t && e
      ? t === e
        ? !0
        : t && t.nodeType === 3
          ? !1
          : e && e.nodeType === 3
            ? xd(t, e.parentNode)
            : "contains" in t
              ? t.contains(e)
              : t.compareDocumentPosition
                ? !!(t.compareDocumentPosition(e) & 16)
                : !1
      : !1;
  }
  function Ad(t) {
    t =
      t != null &&
      t.ownerDocument != null &&
      t.ownerDocument.defaultView != null
        ? t.ownerDocument.defaultView
        : window;
    for (var e = Ki(t.document); e instanceof t.HTMLIFrameElement;) {
      try {
        var n = typeof e.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) t = e.contentWindow;
      else break;
      e = Ki(t.document);
    }
    return e;
  }
  function rc(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase();
    return (
      e &&
      ((e === "input" &&
        (t.type === "text" ||
          t.type === "search" ||
          t.type === "tel" ||
          t.type === "url" ||
          t.type === "password")) ||
        e === "textarea" ||
        t.contentEditable === "true")
    );
  }
  var tv = cn && "documentMode" in document && 11 >= document.documentMode,
    La = null,
    uc = null,
    Hs = null,
    fc = !1;
  function bd(t, e, n) {
    var s =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fc ||
      La == null ||
      La !== Ki(s) ||
      ((s = La),
      "selectionStart" in s && rc(s)
        ? (s = { start: s.selectionStart, end: s.selectionEnd })
        : ((s = (
            (s.ownerDocument && s.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (s = {
            anchorNode: s.anchorNode,
            anchorOffset: s.anchorOffset,
            focusNode: s.focusNode,
            focusOffset: s.focusOffset,
          })),
      (Hs && Ls(Hs, s)) ||
        ((Hs = s),
        (s = kl(uc, "onSelect")),
        0 < s.length &&
          ((e = new Wi("onSelect", "select", null, e, n)),
          t.push({ event: e, listeners: s }),
          (e.target = La))));
  }
  function ia(t, e) {
    var n = {};
    return (
      (n[t.toLowerCase()] = e.toLowerCase()),
      (n["Webkit" + t] = "webkit" + e),
      (n["Moz" + t] = "moz" + e),
      n
    );
  }
  var Ha = {
      animationend: ia("Animation", "AnimationEnd"),
      animationiteration: ia("Animation", "AnimationIteration"),
      animationstart: ia("Animation", "AnimationStart"),
      transitionrun: ia("Transition", "TransitionRun"),
      transitionstart: ia("Transition", "TransitionStart"),
      transitioncancel: ia("Transition", "TransitionCancel"),
      transitionend: ia("Transition", "TransitionEnd"),
    },
    dc = {},
    Sd = {};
  cn &&
    ((Sd = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ha.animationend.animation,
      delete Ha.animationiteration.animation,
      delete Ha.animationstart.animation),
    "TransitionEvent" in window || delete Ha.transitionend.transition);
  function la(t) {
    if (dc[t]) return dc[t];
    if (!Ha[t]) return t;
    var e = Ha[t],
      n;
    for (n in e) if (e.hasOwnProperty(n) && n in Sd) return (dc[t] = e[n]);
    return t;
  }
  var Td = la("animationend"),
    jd = la("animationiteration"),
    Ed = la("animationstart"),
    ev = la("transitionrun"),
    nv = la("transitionstart"),
    av = la("transitioncancel"),
    Md = la("transitionend"),
    zd = new Map(),
    hc =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  hc.push("scrollEnd");
  function Xe(t, e) {
    (zd.set(t, e), aa(e, [t]));
  }
  var el =
      typeof reportError == "function"
        ? reportError
        : function (t) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var e = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof t == "object" &&
                  t !== null &&
                  typeof t.message == "string"
                    ? String(t.message)
                    : String(t),
                error: t,
              });
              if (!window.dispatchEvent(e)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", t);
              return;
            }
            console.error(t);
          },
    Ve = [],
    Ga = 0,
    pc = 0;
  function nl() {
    for (var t = Ga, e = (pc = Ga = 0); e < t;) {
      var n = Ve[e];
      Ve[e++] = null;
      var s = Ve[e];
      Ve[e++] = null;
      var l = Ve[e];
      Ve[e++] = null;
      var r = Ve[e];
      if (((Ve[e++] = null), s !== null && l !== null)) {
        var h = s.pending;
        (h === null ? (l.next = l) : ((l.next = h.next), (h.next = l)),
          (s.pending = l));
      }
      r !== 0 && Nd(n, l, r);
    }
  }
  function al(t, e, n, s) {
    ((Ve[Ga++] = t),
      (Ve[Ga++] = e),
      (Ve[Ga++] = n),
      (Ve[Ga++] = s),
      (pc |= s),
      (t.lanes |= s),
      (t = t.alternate),
      t !== null && (t.lanes |= s));
  }
  function mc(t, e, n, s) {
    return (al(t, e, n, s), sl(t));
  }
  function oa(t, e) {
    return (al(t, null, null, e), sl(t));
  }
  function Nd(t, e, n) {
    t.lanes |= n;
    var s = t.alternate;
    s !== null && (s.lanes |= n);
    for (var l = !1, r = t.return; r !== null;)
      ((r.childLanes |= n),
        (s = r.alternate),
        s !== null && (s.childLanes |= n),
        r.tag === 22 &&
          ((t = r.stateNode), t === null || t._visibility & 1 || (l = !0)),
        (t = r),
        (r = r.return));
    return t.tag === 3
      ? ((r = t.stateNode),
        l &&
          e !== null &&
          ((l = 31 - Se(n)),
          (t = r.hiddenUpdates),
          (s = t[l]),
          s === null ? (t[l] = [e]) : s.push(e),
          (e.lane = n | 536870912)),
        r)
      : null;
  }
  function sl(t) {
    if (50 < oi) throw ((oi = 0), (jr = null), Error(c(185)));
    for (var e = t.return; e !== null;) ((t = e), (e = t.return));
    return t.tag === 3 ? t.stateNode : null;
  }
  var qa = {};
  function sv(t, e, n, s) {
    ((this.tag = t),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = e),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = s),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function je(t, e, n, s) {
    return new sv(t, e, n, s);
  }
  function yc(t) {
    return ((t = t.prototype), !(!t || !t.isReactComponent));
  }
  function rn(t, e) {
    var n = t.alternate;
    return (
      n === null
        ? ((n = je(t.tag, e, t.key, t.mode)),
          (n.elementType = t.elementType),
          (n.type = t.type),
          (n.stateNode = t.stateNode),
          (n.alternate = t),
          (t.alternate = n))
        : ((n.pendingProps = e),
          (n.type = t.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = t.flags & 65011712),
      (n.childLanes = t.childLanes),
      (n.lanes = t.lanes),
      (n.child = t.child),
      (n.memoizedProps = t.memoizedProps),
      (n.memoizedState = t.memoizedState),
      (n.updateQueue = t.updateQueue),
      (e = t.dependencies),
      (n.dependencies =
        e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
      (n.sibling = t.sibling),
      (n.index = t.index),
      (n.ref = t.ref),
      (n.refCleanup = t.refCleanup),
      n
    );
  }
  function Cd(t, e) {
    t.flags &= 65011714;
    var n = t.alternate;
    return (
      n === null
        ? ((t.childLanes = 0),
          (t.lanes = e),
          (t.child = null),
          (t.subtreeFlags = 0),
          (t.memoizedProps = null),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.dependencies = null),
          (t.stateNode = null))
        : ((t.childLanes = n.childLanes),
          (t.lanes = n.lanes),
          (t.child = n.child),
          (t.subtreeFlags = 0),
          (t.deletions = null),
          (t.memoizedProps = n.memoizedProps),
          (t.memoizedState = n.memoizedState),
          (t.updateQueue = n.updateQueue),
          (t.type = n.type),
          (e = n.dependencies),
          (t.dependencies =
            e === null
              ? null
              : { lanes: e.lanes, firstContext: e.firstContext })),
      t
    );
  }
  function il(t, e, n, s, l, r) {
    var h = 0;
    if (((s = t), typeof t == "function")) yc(t) && (h = 1);
    else if (typeof t == "string")
      h = rx(t, n, W.current)
        ? 26
        : t === "html" || t === "head" || t === "body"
          ? 27
          : 5;
    else
      t: switch (t) {
        case st:
          return (
            (t = je(31, n, e, l)),
            (t.elementType = st),
            (t.lanes = r),
            t
          );
        case w:
          return ca(n.children, l, r, e);
        case q:
          ((h = 8), (l |= 24));
          break;
        case Y:
          return (
            (t = je(12, n, e, l | 2)),
            (t.elementType = Y),
            (t.lanes = r),
            t
          );
        case nt:
          return (
            (t = je(13, n, e, l)),
            (t.elementType = nt),
            (t.lanes = r),
            t
          );
        case ct:
          return (
            (t = je(19, n, e, l)),
            (t.elementType = ct),
            (t.lanes = r),
            t
          );
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case Q:
                h = 10;
                break t;
              case X:
                h = 9;
                break t;
              case Z:
                h = 11;
                break t;
              case F:
                h = 14;
                break t;
              case $:
                ((h = 16), (s = null));
                break t;
            }
          ((h = 29),
            (n = Error(c(130, t === null ? "null" : typeof t, ""))),
            (s = null));
      }
    return (
      (e = je(h, n, e, l)),
      (e.elementType = t),
      (e.type = s),
      (e.lanes = r),
      e
    );
  }
  function ca(t, e, n, s) {
    return ((t = je(7, t, s, e)), (t.lanes = n), t);
  }
  function gc(t, e, n) {
    return ((t = je(6, t, null, e)), (t.lanes = n), t);
  }
  function Dd(t) {
    var e = je(18, null, null, 0);
    return ((e.stateNode = t), e);
  }
  function vc(t, e, n) {
    return (
      (e = je(4, t.children !== null ? t.children : [], t.key, e)),
      (e.lanes = n),
      (e.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation,
      }),
      e
    );
  }
  var Rd = new WeakMap();
  function _e(t, e) {
    if (typeof t == "object" && t !== null) {
      var n = Rd.get(t);
      return n !== void 0
        ? n
        : ((e = { value: t, source: e, stack: Df(e) }), Rd.set(t, e), e);
    }
    return { value: t, source: e, stack: Df(e) };
  }
  var ka = [],
    Ya = 0,
    ll = null,
    Gs = 0,
    Ue = [],
    Be = 0,
    Nn = null,
    Pe = 1,
    We = "";
  function un(t, e) {
    ((ka[Ya++] = Gs), (ka[Ya++] = ll), (ll = t), (Gs = e));
  }
  function Od(t, e, n) {
    ((Ue[Be++] = Pe), (Ue[Be++] = We), (Ue[Be++] = Nn), (Nn = t));
    var s = Pe;
    t = We;
    var l = 32 - Se(s) - 1;
    ((s &= ~(1 << l)), (n += 1));
    var r = 32 - Se(e) + l;
    if (30 < r) {
      var h = l - (l % 5);
      ((r = (s & ((1 << h) - 1)).toString(32)),
        (s >>= h),
        (l -= h),
        (Pe = (1 << (32 - Se(e) + l)) | (n << l) | s),
        (We = r + t));
    } else ((Pe = (1 << r) | (n << l) | s), (We = t));
  }
  function xc(t) {
    t.return !== null && (un(t, 1), Od(t, 1, 0));
  }
  function Ac(t) {
    for (; t === ll;)
      ((ll = ka[--Ya]), (ka[Ya] = null), (Gs = ka[--Ya]), (ka[Ya] = null));
    for (; t === Nn;)
      ((Nn = Ue[--Be]),
        (Ue[Be] = null),
        (We = Ue[--Be]),
        (Ue[Be] = null),
        (Pe = Ue[--Be]),
        (Ue[Be] = null));
  }
  function wd(t, e) {
    ((Ue[Be++] = Pe),
      (Ue[Be++] = We),
      (Ue[Be++] = Nn),
      (Pe = e.id),
      (We = e.overflow),
      (Nn = t));
  }
  var ne = null,
    Ut = null,
    bt = !1,
    Cn = null,
    Le = !1,
    bc = Error(c(519));
  function Dn(t) {
    var e = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (qs(_e(e, t)), bc);
  }
  function Vd(t) {
    var e = t.stateNode,
      n = t.type,
      s = t.memoizedProps;
    switch (((e[ee] = t), (e[he] = s), n)) {
      case "dialog":
        (vt("cancel", e), vt("close", e));
        break;
      case "iframe":
      case "object":
      case "embed":
        vt("load", e);
        break;
      case "video":
      case "audio":
        for (n = 0; n < ri.length; n++) vt(ri[n], e);
        break;
      case "source":
        vt("error", e);
        break;
      case "img":
      case "image":
      case "link":
        (vt("error", e), vt("load", e));
        break;
      case "details":
        vt("toggle", e);
        break;
      case "input":
        (vt("invalid", e),
          Kf(
            e,
            s.value,
            s.defaultValue,
            s.checked,
            s.defaultChecked,
            s.type,
            s.name,
            !0,
          ));
        break;
      case "select":
        vt("invalid", e);
        break;
      case "textarea":
        (vt("invalid", e), Ff(e, s.value, s.defaultValue, s.children));
    }
    ((n = s.children),
      (typeof n != "string" && typeof n != "number" && typeof n != "bigint") ||
      e.textContent === "" + n ||
      s.suppressHydrationWarning === !0 ||
      Pp(e.textContent, n)
        ? (s.popover != null && (vt("beforetoggle", e), vt("toggle", e)),
          s.onScroll != null && vt("scroll", e),
          s.onScrollEnd != null && vt("scrollend", e),
          s.onClick != null && (e.onclick = on),
          (e = !0))
        : (e = !1),
      e || Dn(t, !0));
  }
  function _d(t) {
    for (ne = t.return; ne;)
      switch (ne.tag) {
        case 5:
        case 31:
        case 13:
          Le = !1;
          return;
        case 27:
        case 3:
          Le = !0;
          return;
        default:
          ne = ne.return;
      }
  }
  function Xa(t) {
    if (t !== ne) return !1;
    if (!bt) return (_d(t), (bt = !0), !1);
    var e = t.tag,
      n;
    if (
      ((n = e !== 3 && e !== 27) &&
        ((n = e === 5) &&
          ((n = t.type),
          (n =
            !(n !== "form" && n !== "button") || Hr(t.type, t.memoizedProps))),
        (n = !n)),
      n && Ut && Dn(t),
      _d(t),
      e === 13)
    ) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(c(317));
      Ut = lm(t);
    } else if (e === 31) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
        throw Error(c(317));
      Ut = lm(t);
    } else
      e === 27
        ? ((e = Ut), Xn(t.type) ? ((t = Xr), (Xr = null), (Ut = t)) : (Ut = e))
        : (Ut = ne ? Ge(t.stateNode.nextSibling) : null);
    return !0;
  }
  function ra() {
    ((Ut = ne = null), (bt = !1));
  }
  function Sc() {
    var t = Cn;
    return (
      t !== null &&
        (ve === null ? (ve = t) : ve.push.apply(ve, t), (Cn = null)),
      t
    );
  }
  function qs(t) {
    Cn === null ? (Cn = [t]) : Cn.push(t);
  }
  var Tc = j(null),
    ua = null,
    fn = null;
  function Rn(t, e, n) {
    (J(Tc, e._currentValue), (e._currentValue = n));
  }
  function dn(t) {
    ((t._currentValue = Tc.current), L(Tc));
  }
  function jc(t, e, n) {
    for (; t !== null;) {
      var s = t.alternate;
      if (
        ((t.childLanes & e) !== e
          ? ((t.childLanes |= e), s !== null && (s.childLanes |= e))
          : s !== null && (s.childLanes & e) !== e && (s.childLanes |= e),
        t === n)
      )
        break;
      t = t.return;
    }
  }
  function Ec(t, e, n, s) {
    var l = t.child;
    for (l !== null && (l.return = t); l !== null;) {
      var r = l.dependencies;
      if (r !== null) {
        var h = l.child;
        r = r.firstContext;
        t: for (; r !== null;) {
          var v = r;
          r = l;
          for (var T = 0; T < e.length; T++)
            if (v.context === e[T]) {
              ((r.lanes |= n),
                (v = r.alternate),
                v !== null && (v.lanes |= n),
                jc(r.return, n, t),
                s || (h = null));
              break t;
            }
          r = v.next;
        }
      } else if (l.tag === 18) {
        if (((h = l.return), h === null)) throw Error(c(341));
        ((h.lanes |= n),
          (r = h.alternate),
          r !== null && (r.lanes |= n),
          jc(h, n, t),
          (h = null));
      } else h = l.child;
      if (h !== null) h.return = l;
      else
        for (h = l; h !== null;) {
          if (h === t) {
            h = null;
            break;
          }
          if (((l = h.sibling), l !== null)) {
            ((l.return = h.return), (h = l));
            break;
          }
          h = h.return;
        }
      l = h;
    }
  }
  function Qa(t, e, n, s) {
    t = null;
    for (var l = e, r = !1; l !== null;) {
      if (!r) {
        if ((l.flags & 524288) !== 0) r = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var h = l.alternate;
        if (h === null) throw Error(c(387));
        if (((h = h.memoizedProps), h !== null)) {
          var v = l.type;
          Te(l.pendingProps.value, h.value) ||
            (t !== null ? t.push(v) : (t = [v]));
        }
      } else if (l === R.current) {
        if (((h = l.alternate), h === null)) throw Error(c(387));
        h.memoizedState.memoizedState !== l.memoizedState.memoizedState &&
          (t !== null ? t.push(pi) : (t = [pi]));
      }
      l = l.return;
    }
    (t !== null && Ec(e, t, n, s), (e.flags |= 262144));
  }
  function ol(t) {
    for (t = t.firstContext; t !== null;) {
      if (!Te(t.context._currentValue, t.memoizedValue)) return !0;
      t = t.next;
    }
    return !1;
  }
  function fa(t) {
    ((ua = t),
      (fn = null),
      (t = t.dependencies),
      t !== null && (t.firstContext = null));
  }
  function ae(t) {
    return Ud(ua, t);
  }
  function cl(t, e) {
    return (ua === null && fa(t), Ud(t, e));
  }
  function Ud(t, e) {
    var n = e._currentValue;
    if (((e = { context: e, memoizedValue: n, next: null }), fn === null)) {
      if (t === null) throw Error(c(308));
      ((fn = e),
        (t.dependencies = { lanes: 0, firstContext: e }),
        (t.flags |= 524288));
    } else fn = fn.next = e;
    return n;
  }
  var iv =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (n, s) {
                  t.push(s);
                },
              });
            this.abort = function () {
              ((e.aborted = !0),
                t.forEach(function (n) {
                  return n();
                }));
            };
          },
    lv = a.unstable_scheduleCallback,
    ov = a.unstable_NormalPriority,
    Qt = {
      $$typeof: Q,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mc() {
    return { controller: new iv(), data: new Map(), refCount: 0 };
  }
  function ks(t) {
    (t.refCount--,
      t.refCount === 0 &&
        lv(ov, function () {
          t.controller.abort();
        }));
  }
  var Ys = null,
    zc = 0,
    Za = 0,
    Ka = null;
  function cv(t, e) {
    if (Ys === null) {
      var n = (Ys = []);
      ((zc = 0),
        (Za = Dr()),
        (Ka = {
          status: "pending",
          value: void 0,
          then: function (s) {
            n.push(s);
          },
        }));
    }
    return (zc++, e.then(Bd, Bd), e);
  }
  function Bd() {
    if (--zc === 0 && Ys !== null) {
      Ka !== null && (Ka.status = "fulfilled");
      var t = Ys;
      ((Ys = null), (Za = 0), (Ka = null));
      for (var e = 0; e < t.length; e++) (0, t[e])();
    }
  }
  function rv(t, e) {
    var n = [],
      s = {
        status: "pending",
        value: null,
        reason: null,
        then: function (l) {
          n.push(l);
        },
      };
    return (
      t.then(
        function () {
          ((s.status = "fulfilled"), (s.value = e));
          for (var l = 0; l < n.length; l++) (0, n[l])(e);
        },
        function (l) {
          for (s.status = "rejected", s.reason = l, l = 0; l < n.length; l++)
            (0, n[l])(void 0);
        },
      ),
      s
    );
  }
  var Ld = _.S;
  _.S = function (t, e) {
    ((bp = Ae()),
      typeof e == "object" &&
        e !== null &&
        typeof e.then == "function" &&
        cv(t, e),
      Ld !== null && Ld(t, e));
  };
  var da = j(null);
  function Nc() {
    var t = da.current;
    return t !== null ? t : wt.pooledCache;
  }
  function rl(t, e) {
    e === null ? J(da, da.current) : J(da, e.pool);
  }
  function Hd() {
    var t = Nc();
    return t === null ? null : { parent: Qt._currentValue, pool: t };
  }
  var Ja = Error(c(460)),
    Cc = Error(c(474)),
    ul = Error(c(542)),
    fl = { then: function () {} };
  function Gd(t) {
    return ((t = t.status), t === "fulfilled" || t === "rejected");
  }
  function qd(t, e, n) {
    switch (
      ((n = t[n]),
      n === void 0 ? t.push(e) : n !== e && (e.then(on, on), (e = n)),
      e.status)
    ) {
      case "fulfilled":
        return e.value;
      case "rejected":
        throw ((t = e.reason), Yd(t), t);
      default:
        if (typeof e.status == "string") e.then(on, on);
        else {
          if (((t = wt), t !== null && 100 < t.shellSuspendCounter))
            throw Error(c(482));
          ((t = e),
            (t.status = "pending"),
            t.then(
              function (s) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "fulfilled"), (l.value = s));
                }
              },
              function (s) {
                if (e.status === "pending") {
                  var l = e;
                  ((l.status = "rejected"), (l.reason = s));
                }
              },
            ));
        }
        switch (e.status) {
          case "fulfilled":
            return e.value;
          case "rejected":
            throw ((t = e.reason), Yd(t), t);
        }
        throw ((pa = e), Ja);
    }
  }
  function ha(t) {
    try {
      var e = t._init;
      return e(t._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function"
        ? ((pa = n), Ja)
        : n;
    }
  }
  var pa = null;
  function kd() {
    if (pa === null) throw Error(c(459));
    var t = pa;
    return ((pa = null), t);
  }
  function Yd(t) {
    if (t === Ja || t === ul) throw Error(c(483));
  }
  var Fa = null,
    Xs = 0;
  function dl(t) {
    var e = Xs;
    return ((Xs += 1), Fa === null && (Fa = []), qd(Fa, t, e));
  }
  function Qs(t, e) {
    ((e = e.props.ref), (t.ref = e !== void 0 ? e : null));
  }
  function hl(t, e) {
    throw e.$$typeof === S
      ? Error(c(525))
      : ((t = Object.prototype.toString.call(e)),
        Error(
          c(
            31,
            t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t,
          ),
        ));
  }
  function Xd(t) {
    function e(z, E) {
      if (t) {
        var N = z.deletions;
        N === null ? ((z.deletions = [E]), (z.flags |= 16)) : N.push(E);
      }
    }
    function n(z, E) {
      if (!t) return null;
      for (; E !== null;) (e(z, E), (E = E.sibling));
      return null;
    }
    function s(z) {
      for (var E = new Map(); z !== null;)
        (z.key !== null ? E.set(z.key, z) : E.set(z.index, z), (z = z.sibling));
      return E;
    }
    function l(z, E) {
      return ((z = rn(z, E)), (z.index = 0), (z.sibling = null), z);
    }
    function r(z, E, N) {
      return (
        (z.index = N),
        t
          ? ((N = z.alternate),
            N !== null
              ? ((N = N.index), N < E ? ((z.flags |= 67108866), E) : N)
              : ((z.flags |= 67108866), E))
          : ((z.flags |= 1048576), E)
      );
    }
    function h(z) {
      return (t && z.alternate === null && (z.flags |= 67108866), z);
    }
    function v(z, E, N, B) {
      return E === null || E.tag !== 6
        ? ((E = gc(N, z.mode, B)), (E.return = z), E)
        : ((E = l(E, N)), (E.return = z), E);
    }
    function T(z, E, N, B) {
      var at = N.type;
      return at === w
        ? U(z, E, N.props.children, B, N.key)
        : E !== null &&
            (E.elementType === at ||
              (typeof at == "object" &&
                at !== null &&
                at.$$typeof === $ &&
                ha(at) === E.type))
          ? ((E = l(E, N.props)), Qs(E, N), (E.return = z), E)
          : ((E = il(N.type, N.key, N.props, null, z.mode, B)),
            Qs(E, N),
            (E.return = z),
            E);
    }
    function C(z, E, N, B) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== N.containerInfo ||
        E.stateNode.implementation !== N.implementation
        ? ((E = vc(N, z.mode, B)), (E.return = z), E)
        : ((E = l(E, N.children || [])), (E.return = z), E);
    }
    function U(z, E, N, B, at) {
      return E === null || E.tag !== 7
        ? ((E = ca(N, z.mode, B, at)), (E.return = z), E)
        : ((E = l(E, N)), (E.return = z), E);
    }
    function G(z, E, N) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return ((E = gc("" + E, z.mode, N)), (E.return = z), E);
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case O:
            return (
              (N = il(E.type, E.key, E.props, null, z.mode, N)),
              Qs(N, E),
              (N.return = z),
              N
            );
          case M:
            return ((E = vc(E, z.mode, N)), (E.return = z), E);
          case $:
            return ((E = ha(E)), G(z, E, N));
        }
        if (Mt(E) || ot(E))
          return ((E = ca(E, z.mode, N, null)), (E.return = z), E);
        if (typeof E.then == "function") return G(z, dl(E), N);
        if (E.$$typeof === Q) return G(z, cl(z, E), N);
        hl(z, E);
      }
      return null;
    }
    function D(z, E, N, B) {
      var at = E !== null ? E.key : null;
      if (
        (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
      )
        return at !== null ? null : v(z, E, "" + N, B);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case O:
            return N.key === at ? T(z, E, N, B) : null;
          case M:
            return N.key === at ? C(z, E, N, B) : null;
          case $:
            return ((N = ha(N)), D(z, E, N, B));
        }
        if (Mt(N) || ot(N)) return at !== null ? null : U(z, E, N, B, null);
        if (typeof N.then == "function") return D(z, E, dl(N), B);
        if (N.$$typeof === Q) return D(z, E, cl(z, N), B);
        hl(z, N);
      }
      return null;
    }
    function V(z, E, N, B, at) {
      if (
        (typeof B == "string" && B !== "") ||
        typeof B == "number" ||
        typeof B == "bigint"
      )
        return ((z = z.get(N) || null), v(E, z, "" + B, at));
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case O:
            return (
              (z = z.get(B.key === null ? N : B.key) || null),
              T(E, z, B, at)
            );
          case M:
            return (
              (z = z.get(B.key === null ? N : B.key) || null),
              C(E, z, B, at)
            );
          case $:
            return ((B = ha(B)), V(z, E, N, B, at));
        }
        if (Mt(B) || ot(B))
          return ((z = z.get(N) || null), U(E, z, B, at, null));
        if (typeof B.then == "function") return V(z, E, N, dl(B), at);
        if (B.$$typeof === Q) return V(z, E, N, cl(E, B), at);
        hl(E, B);
      }
      return null;
    }
    function I(z, E, N, B) {
      for (
        var at = null, St = null, et = E, pt = (E = 0), At = null;
        et !== null && pt < N.length;
        pt++
      ) {
        et.index > pt ? ((At = et), (et = null)) : (At = et.sibling);
        var Tt = D(z, et, N[pt], B);
        if (Tt === null) {
          et === null && (et = At);
          break;
        }
        (t && et && Tt.alternate === null && e(z, et),
          (E = r(Tt, E, pt)),
          St === null ? (at = Tt) : (St.sibling = Tt),
          (St = Tt),
          (et = At));
      }
      if (pt === N.length) return (n(z, et), bt && un(z, pt), at);
      if (et === null) {
        for (; pt < N.length; pt++)
          ((et = G(z, N[pt], B)),
            et !== null &&
              ((E = r(et, E, pt)),
              St === null ? (at = et) : (St.sibling = et),
              (St = et)));
        return (bt && un(z, pt), at);
      }
      for (et = s(et); pt < N.length; pt++)
        ((At = V(et, z, pt, N[pt], B)),
          At !== null &&
            (t &&
              At.alternate !== null &&
              et.delete(At.key === null ? pt : At.key),
            (E = r(At, E, pt)),
            St === null ? (at = At) : (St.sibling = At),
            (St = At)));
      return (
        t &&
          et.forEach(function (Fn) {
            return e(z, Fn);
          }),
        bt && un(z, pt),
        at
      );
    }
    function it(z, E, N, B) {
      if (N == null) throw Error(c(151));
      for (
        var at = null,
          St = null,
          et = E,
          pt = (E = 0),
          At = null,
          Tt = N.next();
        et !== null && !Tt.done;
        pt++, Tt = N.next()
      ) {
        et.index > pt ? ((At = et), (et = null)) : (At = et.sibling);
        var Fn = D(z, et, Tt.value, B);
        if (Fn === null) {
          et === null && (et = At);
          break;
        }
        (t && et && Fn.alternate === null && e(z, et),
          (E = r(Fn, E, pt)),
          St === null ? (at = Fn) : (St.sibling = Fn),
          (St = Fn),
          (et = At));
      }
      if (Tt.done) return (n(z, et), bt && un(z, pt), at);
      if (et === null) {
        for (; !Tt.done; pt++, Tt = N.next())
          ((Tt = G(z, Tt.value, B)),
            Tt !== null &&
              ((E = r(Tt, E, pt)),
              St === null ? (at = Tt) : (St.sibling = Tt),
              (St = Tt)));
        return (bt && un(z, pt), at);
      }
      for (et = s(et); !Tt.done; pt++, Tt = N.next())
        ((Tt = V(et, z, pt, Tt.value, B)),
          Tt !== null &&
            (t &&
              Tt.alternate !== null &&
              et.delete(Tt.key === null ? pt : Tt.key),
            (E = r(Tt, E, pt)),
            St === null ? (at = Tt) : (St.sibling = Tt),
            (St = Tt)));
      return (
        t &&
          et.forEach(function (Ax) {
            return e(z, Ax);
          }),
        bt && un(z, pt),
        at
      );
    }
    function Ot(z, E, N, B) {
      if (
        (typeof N == "object" &&
          N !== null &&
          N.type === w &&
          N.key === null &&
          (N = N.props.children),
        typeof N == "object" && N !== null)
      ) {
        switch (N.$$typeof) {
          case O:
            t: {
              for (var at = N.key; E !== null;) {
                if (E.key === at) {
                  if (((at = N.type), at === w)) {
                    if (E.tag === 7) {
                      (n(z, E.sibling),
                        (B = l(E, N.props.children)),
                        (B.return = z),
                        (z = B));
                      break t;
                    }
                  } else if (
                    E.elementType === at ||
                    (typeof at == "object" &&
                      at !== null &&
                      at.$$typeof === $ &&
                      ha(at) === E.type)
                  ) {
                    (n(z, E.sibling),
                      (B = l(E, N.props)),
                      Qs(B, N),
                      (B.return = z),
                      (z = B));
                    break t;
                  }
                  n(z, E);
                  break;
                } else e(z, E);
                E = E.sibling;
              }
              N.type === w
                ? ((B = ca(N.props.children, z.mode, B, N.key)),
                  (B.return = z),
                  (z = B))
                : ((B = il(N.type, N.key, N.props, null, z.mode, B)),
                  Qs(B, N),
                  (B.return = z),
                  (z = B));
            }
            return h(z);
          case M:
            t: {
              for (at = N.key; E !== null;) {
                if (E.key === at)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === N.containerInfo &&
                    E.stateNode.implementation === N.implementation
                  ) {
                    (n(z, E.sibling),
                      (B = l(E, N.children || [])),
                      (B.return = z),
                      (z = B));
                    break t;
                  } else {
                    n(z, E);
                    break;
                  }
                else e(z, E);
                E = E.sibling;
              }
              ((B = vc(N, z.mode, B)), (B.return = z), (z = B));
            }
            return h(z);
          case $:
            return ((N = ha(N)), Ot(z, E, N, B));
        }
        if (Mt(N)) return I(z, E, N, B);
        if (ot(N)) {
          if (((at = ot(N)), typeof at != "function")) throw Error(c(150));
          return ((N = at.call(N)), it(z, E, N, B));
        }
        if (typeof N.then == "function") return Ot(z, E, dl(N), B);
        if (N.$$typeof === Q) return Ot(z, E, cl(z, N), B);
        hl(z, N);
      }
      return (typeof N == "string" && N !== "") ||
        typeof N == "number" ||
        typeof N == "bigint"
        ? ((N = "" + N),
          E !== null && E.tag === 6
            ? (n(z, E.sibling), (B = l(E, N)), (B.return = z), (z = B))
            : (n(z, E), (B = gc(N, z.mode, B)), (B.return = z), (z = B)),
          h(z))
        : n(z, E);
    }
    return function (z, E, N, B) {
      try {
        Xs = 0;
        var at = Ot(z, E, N, B);
        return ((Fa = null), at);
      } catch (et) {
        if (et === Ja || et === ul) throw et;
        var St = je(29, et, null, z.mode);
        return ((St.lanes = B), (St.return = z), St);
      }
    };
  }
  var ma = Xd(!0),
    Qd = Xd(!1),
    On = !1;
  function Dc(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Rc(t, e) {
    ((t = t.updateQueue),
      e.updateQueue === t &&
        (e.updateQueue = {
          baseState: t.baseState,
          firstBaseUpdate: t.firstBaseUpdate,
          lastBaseUpdate: t.lastBaseUpdate,
          shared: t.shared,
          callbacks: null,
        }));
  }
  function wn(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Vn(t, e, n) {
    var s = t.updateQueue;
    if (s === null) return null;
    if (((s = s.shared), (jt & 2) !== 0)) {
      var l = s.pending;
      return (
        l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)),
        (s.pending = e),
        (e = sl(t)),
        Nd(t, null, n),
        e
      );
    }
    return (al(t, s, e, n), sl(t));
  }
  function Zs(t, e, n) {
    if (
      ((e = e.updateQueue), e !== null && ((e = e.shared), (n & 4194048) !== 0))
    ) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (n |= s), (e.lanes = n), Uf(t, n));
    }
  }
  function Oc(t, e) {
    var n = t.updateQueue,
      s = t.alternate;
    if (s !== null && ((s = s.updateQueue), n === s)) {
      var l = null,
        r = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var h = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null,
          };
          (r === null ? (l = r = h) : (r = r.next = h), (n = n.next));
        } while (n !== null);
        r === null ? (l = r = e) : (r = r.next = e);
      } else l = r = e;
      ((n = {
        baseState: s.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: r,
        shared: s.shared,
        callbacks: s.callbacks,
      }),
        (t.updateQueue = n));
      return;
    }
    ((t = n.lastBaseUpdate),
      t === null ? (n.firstBaseUpdate = e) : (t.next = e),
      (n.lastBaseUpdate = e));
  }
  var wc = !1;
  function Ks() {
    if (wc) {
      var t = Ka;
      if (t !== null) throw t;
    }
  }
  function Js(t, e, n, s) {
    wc = !1;
    var l = t.updateQueue;
    On = !1;
    var r = l.firstBaseUpdate,
      h = l.lastBaseUpdate,
      v = l.shared.pending;
    if (v !== null) {
      l.shared.pending = null;
      var T = v,
        C = T.next;
      ((T.next = null), h === null ? (r = C) : (h.next = C), (h = T));
      var U = t.alternate;
      U !== null &&
        ((U = U.updateQueue),
        (v = U.lastBaseUpdate),
        v !== h &&
          (v === null ? (U.firstBaseUpdate = C) : (v.next = C),
          (U.lastBaseUpdate = T)));
    }
    if (r !== null) {
      var G = l.baseState;
      ((h = 0), (U = C = T = null), (v = r));
      do {
        var D = v.lane & -536870913,
          V = D !== v.lane;
        if (V ? (xt & D) === D : (s & D) === D) {
          (D !== 0 && D === Za && (wc = !0),
            U !== null &&
              (U = U.next =
                {
                  lane: 0,
                  tag: v.tag,
                  payload: v.payload,
                  callback: null,
                  next: null,
                }));
          t: {
            var I = t,
              it = v;
            D = e;
            var Ot = n;
            switch (it.tag) {
              case 1:
                if (((I = it.payload), typeof I == "function")) {
                  G = I.call(Ot, G, D);
                  break t;
                }
                G = I;
                break t;
              case 3:
                I.flags = (I.flags & -65537) | 128;
              case 0:
                if (
                  ((I = it.payload),
                  (D = typeof I == "function" ? I.call(Ot, G, D) : I),
                  D == null)
                )
                  break t;
                G = A({}, G, D);
                break t;
              case 2:
                On = !0;
            }
          }
          ((D = v.callback),
            D !== null &&
              ((t.flags |= 64),
              V && (t.flags |= 8192),
              (V = l.callbacks),
              V === null ? (l.callbacks = [D]) : V.push(D)));
        } else
          ((V = {
            lane: D,
            tag: v.tag,
            payload: v.payload,
            callback: v.callback,
            next: null,
          }),
            U === null ? ((C = U = V), (T = G)) : (U = U.next = V),
            (h |= D));
        if (((v = v.next), v === null)) {
          if (((v = l.shared.pending), v === null)) break;
          ((V = v),
            (v = V.next),
            (V.next = null),
            (l.lastBaseUpdate = V),
            (l.shared.pending = null));
        }
      } while (!0);
      (U === null && (T = G),
        (l.baseState = T),
        (l.firstBaseUpdate = C),
        (l.lastBaseUpdate = U),
        r === null && (l.shared.lanes = 0),
        (Hn |= h),
        (t.lanes = h),
        (t.memoizedState = G));
    }
  }
  function Zd(t, e) {
    if (typeof t != "function") throw Error(c(191, t));
    t.call(e);
  }
  function Kd(t, e) {
    var n = t.callbacks;
    if (n !== null)
      for (t.callbacks = null, t = 0; t < n.length; t++) Zd(n[t], e);
  }
  var $a = j(null),
    pl = j(0);
  function Jd(t, e) {
    ((t = bn), J(pl, t), J($a, e), (bn = t | e.baseLanes));
  }
  function Vc() {
    (J(pl, bn), J($a, $a.current));
  }
  function _c() {
    ((bn = pl.current), L($a), L(pl));
  }
  var Ee = j(null),
    He = null;
  function _n(t) {
    var e = t.alternate;
    (J(Yt, Yt.current & 1),
      J(Ee, t),
      He === null &&
        (e === null || $a.current !== null || e.memoizedState !== null) &&
        (He = t));
  }
  function Uc(t) {
    (J(Yt, Yt.current), J(Ee, t), He === null && (He = t));
  }
  function Fd(t) {
    t.tag === 22
      ? (J(Yt, Yt.current), J(Ee, t), He === null && (He = t))
      : Un();
  }
  function Un() {
    (J(Yt, Yt.current), J(Ee, Ee.current));
  }
  function Me(t) {
    (L(Ee), He === t && (He = null), L(Yt));
  }
  var Yt = j(0);
  function ml(t) {
    for (var e = t; e !== null;) {
      if (e.tag === 13) {
        var n = e.memoizedState;
        if (n !== null && ((n = n.dehydrated), n === null || kr(n) || Yr(n)))
          return e;
      } else if (
        e.tag === 19 &&
        (e.memoizedProps.revealOrder === "forwards" ||
          e.memoizedProps.revealOrder === "backwards" ||
          e.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          e.memoizedProps.revealOrder === "together")
      ) {
        if ((e.flags & 128) !== 0) return e;
      } else if (e.child !== null) {
        ((e.child.return = e), (e = e.child));
        continue;
      }
      if (e === t) break;
      for (; e.sibling === null;) {
        if (e.return === null || e.return === t) return null;
        e = e.return;
      }
      ((e.sibling.return = e.return), (e = e.sibling));
    }
    return null;
  }
  var hn = 0,
    dt = null,
    Dt = null,
    Zt = null,
    yl = !1,
    Pa = !1,
    ya = !1,
    gl = 0,
    Fs = 0,
    Wa = null,
    uv = 0;
  function Ht() {
    throw Error(c(321));
  }
  function Bc(t, e) {
    if (e === null) return !1;
    for (var n = 0; n < e.length && n < t.length; n++)
      if (!Te(t[n], e[n])) return !1;
    return !0;
  }
  function Lc(t, e, n, s, l, r) {
    return (
      (hn = r),
      (dt = e),
      (e.memoizedState = null),
      (e.updateQueue = null),
      (e.lanes = 0),
      (_.H = t === null || t.memoizedState === null ? Oh : Ic),
      (ya = !1),
      (r = n(s, l)),
      (ya = !1),
      Pa && (r = Pd(e, n, s, l)),
      $d(t),
      r
    );
  }
  function $d(t) {
    _.H = Ws;
    var e = Dt !== null && Dt.next !== null;
    if (((hn = 0), (Zt = Dt = dt = null), (yl = !1), (Fs = 0), (Wa = null), e))
      throw Error(c(300));
    t === null ||
      Kt ||
      ((t = t.dependencies), t !== null && ol(t) && (Kt = !0));
  }
  function Pd(t, e, n, s) {
    dt = t;
    var l = 0;
    do {
      if ((Pa && (Wa = null), (Fs = 0), (Pa = !1), 25 <= l))
        throw Error(c(301));
      if (((l += 1), (Zt = Dt = null), t.updateQueue != null)) {
        var r = t.updateQueue;
        ((r.lastEffect = null),
          (r.events = null),
          (r.stores = null),
          r.memoCache != null && (r.memoCache.index = 0));
      }
      ((_.H = wh), (r = e(n, s)));
    } while (Pa);
    return r;
  }
  function fv() {
    var t = _.H,
      e = t.useState()[0];
    return (
      (e = typeof e.then == "function" ? $s(e) : e),
      (t = t.useState()[0]),
      (Dt !== null ? Dt.memoizedState : null) !== t && (dt.flags |= 1024),
      e
    );
  }
  function Hc() {
    var t = gl !== 0;
    return ((gl = 0), t);
  }
  function Gc(t, e, n) {
    ((e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~n));
  }
  function qc(t) {
    if (yl) {
      for (t = t.memoizedState; t !== null;) {
        var e = t.queue;
        (e !== null && (e.pending = null), (t = t.next));
      }
      yl = !1;
    }
    ((hn = 0), (Zt = Dt = dt = null), (Pa = !1), (Fs = gl = 0), (Wa = null));
  }
  function re() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (Zt === null ? (dt.memoizedState = Zt = t) : (Zt = Zt.next = t), Zt);
  }
  function Xt() {
    if (Dt === null) {
      var t = dt.alternate;
      t = t !== null ? t.memoizedState : null;
    } else t = Dt.next;
    var e = Zt === null ? dt.memoizedState : Zt.next;
    if (e !== null) ((Zt = e), (Dt = t));
    else {
      if (t === null)
        throw dt.alternate === null ? Error(c(467)) : Error(c(310));
      ((Dt = t),
        (t = {
          memoizedState: Dt.memoizedState,
          baseState: Dt.baseState,
          baseQueue: Dt.baseQueue,
          queue: Dt.queue,
          next: null,
        }),
        Zt === null ? (dt.memoizedState = Zt = t) : (Zt = Zt.next = t));
    }
    return Zt;
  }
  function vl() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function $s(t) {
    var e = Fs;
    return (
      (Fs += 1),
      Wa === null && (Wa = []),
      (t = qd(Wa, t, e)),
      (e = dt),
      (Zt === null ? e.memoizedState : Zt.next) === null &&
        ((e = e.alternate),
        (_.H = e === null || e.memoizedState === null ? Oh : Ic)),
      t
    );
  }
  function xl(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function") return $s(t);
      if (t.$$typeof === Q) return ae(t);
    }
    throw Error(c(438, String(t)));
  }
  function kc(t) {
    var e = null,
      n = dt.updateQueue;
    if ((n !== null && (e = n.memoCache), e == null)) {
      var s = dt.alternate;
      s !== null &&
        ((s = s.updateQueue),
        s !== null &&
          ((s = s.memoCache),
          s != null &&
            (e = {
              data: s.data.map(function (l) {
                return l.slice();
              }),
              index: 0,
            })));
    }
    if (
      (e == null && (e = { data: [], index: 0 }),
      n === null && ((n = vl()), (dt.updateQueue = n)),
      (n.memoCache = e),
      (n = e.data[e.index]),
      n === void 0)
    )
      for (n = e.data[e.index] = Array(t), s = 0; s < t; s++) n[s] = b;
    return (e.index++, n);
  }
  function pn(t, e) {
    return typeof e == "function" ? e(t) : e;
  }
  function Al(t) {
    var e = Xt();
    return Yc(e, Dt, t);
  }
  function Yc(t, e, n) {
    var s = t.queue;
    if (s === null) throw Error(c(311));
    s.lastRenderedReducer = n;
    var l = t.baseQueue,
      r = s.pending;
    if (r !== null) {
      if (l !== null) {
        var h = l.next;
        ((l.next = r.next), (r.next = h));
      }
      ((e.baseQueue = l = r), (s.pending = null));
    }
    if (((r = t.baseState), l === null)) t.memoizedState = r;
    else {
      e = l.next;
      var v = (h = null),
        T = null,
        C = e,
        U = !1;
      do {
        var G = C.lane & -536870913;
        if (G !== C.lane ? (xt & G) === G : (hn & G) === G) {
          var D = C.revertLane;
          if (D === 0)
            (T !== null &&
              (T = T.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: C.action,
                  hasEagerState: C.hasEagerState,
                  eagerState: C.eagerState,
                  next: null,
                }),
              G === Za && (U = !0));
          else if ((hn & D) === D) {
            ((C = C.next), D === Za && (U = !0));
            continue;
          } else
            ((G = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null,
            }),
              T === null ? ((v = T = G), (h = r)) : (T = T.next = G),
              (dt.lanes |= D),
              (Hn |= D));
          ((G = C.action),
            ya && n(r, G),
            (r = C.hasEagerState ? C.eagerState : n(r, G)));
        } else
          ((D = {
            lane: G,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null,
          }),
            T === null ? ((v = T = D), (h = r)) : (T = T.next = D),
            (dt.lanes |= G),
            (Hn |= G));
        C = C.next;
      } while (C !== null && C !== e);
      if (
        (T === null ? (h = r) : (T.next = v),
        !Te(r, t.memoizedState) && ((Kt = !0), U && ((n = Ka), n !== null)))
      )
        throw n;
      ((t.memoizedState = r),
        (t.baseState = h),
        (t.baseQueue = T),
        (s.lastRenderedState = r));
    }
    return (l === null && (s.lanes = 0), [t.memoizedState, s.dispatch]);
  }
  function Xc(t) {
    var e = Xt(),
      n = e.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = t;
    var s = n.dispatch,
      l = n.pending,
      r = e.memoizedState;
    if (l !== null) {
      n.pending = null;
      var h = (l = l.next);
      do ((r = t(r, h.action)), (h = h.next));
      while (h !== l);
      (Te(r, e.memoizedState) || (Kt = !0),
        (e.memoizedState = r),
        e.baseQueue === null && (e.baseState = r),
        (n.lastRenderedState = r));
    }
    return [r, s];
  }
  function Wd(t, e, n) {
    var s = dt,
      l = Xt(),
      r = bt;
    if (r) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = e();
    var h = !Te((Dt || l).memoizedState, n);
    if (
      (h && ((l.memoizedState = n), (Kt = !0)),
      (l = l.queue),
      Kc(eh.bind(null, s, l, t), [t]),
      l.getSnapshot !== e || h || (Zt !== null && Zt.memoizedState.tag & 1))
    ) {
      if (
        ((s.flags |= 2048),
        Ia(9, { destroy: void 0 }, th.bind(null, s, l, n, e), null),
        wt === null)
      )
        throw Error(c(349));
      r || (hn & 127) !== 0 || Id(s, e, n);
    }
    return n;
  }
  function Id(t, e, n) {
    ((t.flags |= 16384),
      (t = { getSnapshot: e, value: n }),
      (e = dt.updateQueue),
      e === null
        ? ((e = vl()), (dt.updateQueue = e), (e.stores = [t]))
        : ((n = e.stores), n === null ? (e.stores = [t]) : n.push(t)));
  }
  function th(t, e, n, s) {
    ((e.value = n), (e.getSnapshot = s), nh(e) && ah(t));
  }
  function eh(t, e, n) {
    return n(function () {
      nh(e) && ah(t);
    });
  }
  function nh(t) {
    var e = t.getSnapshot;
    t = t.value;
    try {
      var n = e();
      return !Te(t, n);
    } catch {
      return !0;
    }
  }
  function ah(t) {
    var e = oa(t, 2);
    e !== null && xe(e, t, 2);
  }
  function Qc(t) {
    var e = re();
    if (typeof t == "function") {
      var n = t;
      if (((t = n()), ya)) {
        En(!0);
        try {
          n();
        } finally {
          En(!1);
        }
      }
    }
    return (
      (e.memoizedState = e.baseState = t),
      (e.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: t,
      }),
      e
    );
  }
  function sh(t, e, n, s) {
    return ((t.baseState = n), Yc(t, Dt, typeof s == "function" ? s : pn));
  }
  function dv(t, e, n, s, l) {
    if (Tl(t)) throw Error(c(485));
    if (((t = e.action), t !== null)) {
      var r = {
        payload: l,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (h) {
          r.listeners.push(h);
        },
      };
      (_.T !== null ? n(!0) : (r.isTransition = !1),
        s(r),
        (n = e.pending),
        n === null
          ? ((r.next = e.pending = r), ih(e, r))
          : ((r.next = n.next), (e.pending = n.next = r)));
    }
  }
  function ih(t, e) {
    var n = e.action,
      s = e.payload,
      l = t.state;
    if (e.isTransition) {
      var r = _.T,
        h = {};
      _.T = h;
      try {
        var v = n(l, s),
          T = _.S;
        (T !== null && T(h, v), lh(t, e, v));
      } catch (C) {
        Zc(t, e, C);
      } finally {
        (r !== null && h.types !== null && (r.types = h.types), (_.T = r));
      }
    } else
      try {
        ((r = n(l, s)), lh(t, e, r));
      } catch (C) {
        Zc(t, e, C);
      }
  }
  function lh(t, e, n) {
    n !== null && typeof n == "object" && typeof n.then == "function"
      ? n.then(
          function (s) {
            oh(t, e, s);
          },
          function (s) {
            return Zc(t, e, s);
          },
        )
      : oh(t, e, n);
  }
  function oh(t, e, n) {
    ((e.status = "fulfilled"),
      (e.value = n),
      ch(e),
      (t.state = n),
      (e = t.pending),
      e !== null &&
        ((n = e.next),
        n === e ? (t.pending = null) : ((n = n.next), (e.next = n), ih(t, n))));
  }
  function Zc(t, e, n) {
    var s = t.pending;
    if (((t.pending = null), s !== null)) {
      s = s.next;
      do ((e.status = "rejected"), (e.reason = n), ch(e), (e = e.next));
      while (e !== s);
    }
    t.action = null;
  }
  function ch(t) {
    t = t.listeners;
    for (var e = 0; e < t.length; e++) (0, t[e])();
  }
  function rh(t, e) {
    return e;
  }
  function uh(t, e) {
    if (bt) {
      var n = wt.formState;
      if (n !== null) {
        t: {
          var s = dt;
          if (bt) {
            if (Ut) {
              e: {
                for (var l = Ut, r = Le; l.nodeType !== 8;) {
                  if (!r) {
                    l = null;
                    break e;
                  }
                  if (((l = Ge(l.nextSibling)), l === null)) {
                    l = null;
                    break e;
                  }
                }
                ((r = l.data), (l = r === "F!" || r === "F" ? l : null));
              }
              if (l) {
                ((Ut = Ge(l.nextSibling)), (s = l.data === "F!"));
                break t;
              }
            }
            Dn(s);
          }
          s = !1;
        }
        s && (e = n[0]);
      }
    }
    return (
      (n = re()),
      (n.memoizedState = n.baseState = e),
      (s = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: rh,
        lastRenderedState: e,
      }),
      (n.queue = s),
      (n = Ch.bind(null, dt, s)),
      (s.dispatch = n),
      (s = Qc(!1)),
      (r = Wc.bind(null, dt, !1, s.queue)),
      (s = re()),
      (l = { state: e, dispatch: null, action: t, pending: null }),
      (s.queue = l),
      (n = dv.bind(null, dt, l, r, n)),
      (l.dispatch = n),
      (s.memoizedState = t),
      [e, n, !1]
    );
  }
  function fh(t) {
    var e = Xt();
    return dh(e, Dt, t);
  }
  function dh(t, e, n) {
    if (
      ((e = Yc(t, e, rh)[0]),
      (t = Al(pn)[0]),
      typeof e == "object" && e !== null && typeof e.then == "function")
    )
      try {
        var s = $s(e);
      } catch (h) {
        throw h === Ja ? ul : h;
      }
    else s = e;
    e = Xt();
    var l = e.queue,
      r = l.dispatch;
    return (
      n !== e.memoizedState &&
        ((dt.flags |= 2048),
        Ia(9, { destroy: void 0 }, hv.bind(null, l, n), null)),
      [s, r, t]
    );
  }
  function hv(t, e) {
    t.action = e;
  }
  function hh(t) {
    var e = Xt(),
      n = Dt;
    if (n !== null) return dh(e, n, t);
    (Xt(), (e = e.memoizedState), (n = Xt()));
    var s = n.queue.dispatch;
    return ((n.memoizedState = t), [e, s, !1]);
  }
  function Ia(t, e, n, s) {
    return (
      (t = { tag: t, create: n, deps: s, inst: e, next: null }),
      (e = dt.updateQueue),
      e === null && ((e = vl()), (dt.updateQueue = e)),
      (n = e.lastEffect),
      n === null
        ? (e.lastEffect = t.next = t)
        : ((s = n.next), (n.next = t), (t.next = s), (e.lastEffect = t)),
      t
    );
  }
  function ph() {
    return Xt().memoizedState;
  }
  function bl(t, e, n, s) {
    var l = re();
    ((dt.flags |= t),
      (l.memoizedState = Ia(
        1 | e,
        { destroy: void 0 },
        n,
        s === void 0 ? null : s,
      )));
  }
  function Sl(t, e, n, s) {
    var l = Xt();
    s = s === void 0 ? null : s;
    var r = l.memoizedState.inst;
    Dt !== null && s !== null && Bc(s, Dt.memoizedState.deps)
      ? (l.memoizedState = Ia(e, r, n, s))
      : ((dt.flags |= t), (l.memoizedState = Ia(1 | e, r, n, s)));
  }
  function mh(t, e) {
    bl(8390656, 8, t, e);
  }
  function Kc(t, e) {
    Sl(2048, 8, t, e);
  }
  function pv(t) {
    dt.flags |= 4;
    var e = dt.updateQueue;
    if (e === null) ((e = vl()), (dt.updateQueue = e), (e.events = [t]));
    else {
      var n = e.events;
      n === null ? (e.events = [t]) : n.push(t);
    }
  }
  function yh(t) {
    var e = Xt().memoizedState;
    return (
      pv({ ref: e, nextImpl: t }),
      function () {
        if ((jt & 2) !== 0) throw Error(c(440));
        return e.impl.apply(void 0, arguments);
      }
    );
  }
  function gh(t, e) {
    return Sl(4, 2, t, e);
  }
  function vh(t, e) {
    return Sl(4, 4, t, e);
  }
  function xh(t, e) {
    if (typeof e == "function") {
      t = t();
      var n = e(t);
      return function () {
        typeof n == "function" ? n() : e(null);
      };
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null;
        }
      );
  }
  function Ah(t, e, n) {
    ((n = n != null ? n.concat([t]) : null), Sl(4, 4, xh.bind(null, e, t), n));
  }
  function Jc() {}
  function bh(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var s = n.memoizedState;
    return e !== null && Bc(e, s[1]) ? s[0] : ((n.memoizedState = [t, e]), t);
  }
  function Sh(t, e) {
    var n = Xt();
    e = e === void 0 ? null : e;
    var s = n.memoizedState;
    if (e !== null && Bc(e, s[1])) return s[0];
    if (((s = t()), ya)) {
      En(!0);
      try {
        t();
      } finally {
        En(!1);
      }
    }
    return ((n.memoizedState = [s, e]), s);
  }
  function Fc(t, e, n) {
    return n === void 0 || ((hn & 1073741824) !== 0 && (xt & 261930) === 0)
      ? (t.memoizedState = e)
      : ((t.memoizedState = n), (t = Tp()), (dt.lanes |= t), (Hn |= t), n);
  }
  function Th(t, e, n, s) {
    return Te(n, e)
      ? n
      : $a.current !== null
        ? ((t = Fc(t, n, s)), Te(t, e) || (Kt = !0), t)
        : (hn & 42) === 0 || ((hn & 1073741824) !== 0 && (xt & 261930) === 0)
          ? ((Kt = !0), (t.memoizedState = n))
          : ((t = Tp()), (dt.lanes |= t), (Hn |= t), e);
  }
  function jh(t, e, n, s, l) {
    var r = K.p;
    K.p = r !== 0 && 8 > r ? r : 8;
    var h = _.T,
      v = {};
    ((_.T = v), Wc(t, !1, e, n));
    try {
      var T = l(),
        C = _.S;
      if (
        (C !== null && C(v, T),
        T !== null && typeof T == "object" && typeof T.then == "function")
      ) {
        var U = rv(T, s);
        Ps(t, e, U, Ce(t));
      } else Ps(t, e, s, Ce(t));
    } catch (G) {
      Ps(t, e, { then: function () {}, status: "rejected", reason: G }, Ce());
    } finally {
      ((K.p = r),
        h !== null && v.types !== null && (h.types = v.types),
        (_.T = h));
    }
  }
  function mv() {}
  function $c(t, e, n, s) {
    if (t.tag !== 5) throw Error(c(476));
    var l = Eh(t).queue;
    jh(
      t,
      l,
      e,
      P,
      n === null
        ? mv
        : function () {
            return (Mh(t), n(s));
          },
    );
  }
  function Eh(t) {
    var e = t.memoizedState;
    if (e !== null) return e;
    e = {
      memoizedState: P,
      baseState: P,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: pn,
        lastRenderedState: P,
      },
      next: null,
    };
    var n = {};
    return (
      (e.next = {
        memoizedState: n,
        baseState: n,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: pn,
          lastRenderedState: n,
        },
        next: null,
      }),
      (t.memoizedState = e),
      (t = t.alternate),
      t !== null && (t.memoizedState = e),
      e
    );
  }
  function Mh(t) {
    var e = Eh(t);
    (e.next === null && (e = t.alternate.memoizedState),
      Ps(t, e.next.queue, {}, Ce()));
  }
  function Pc() {
    return ae(pi);
  }
  function zh() {
    return Xt().memoizedState;
  }
  function Nh() {
    return Xt().memoizedState;
  }
  function yv(t) {
    for (var e = t.return; e !== null;) {
      switch (e.tag) {
        case 24:
        case 3:
          var n = Ce();
          t = wn(n);
          var s = Vn(e, t, n);
          (s !== null && (xe(s, e, n), Zs(s, e, n)),
            (e = { cache: Mc() }),
            (t.payload = e));
          return;
      }
      e = e.return;
    }
  }
  function gv(t, e, n) {
    var s = Ce();
    ((n = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Tl(t)
        ? Dh(e, n)
        : ((n = mc(t, e, n, s)), n !== null && (xe(n, t, s), Rh(n, e, s))));
  }
  function Ch(t, e, n) {
    var s = Ce();
    Ps(t, e, n, s);
  }
  function Ps(t, e, n, s) {
    var l = {
      lane: s,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Tl(t)) Dh(e, l);
    else {
      var r = t.alternate;
      if (
        t.lanes === 0 &&
        (r === null || r.lanes === 0) &&
        ((r = e.lastRenderedReducer), r !== null)
      )
        try {
          var h = e.lastRenderedState,
            v = r(h, n);
          if (((l.hasEagerState = !0), (l.eagerState = v), Te(v, h)))
            return (al(t, e, l, 0), wt === null && nl(), !1);
        } catch {}
      if (((n = mc(t, e, l, s)), n !== null))
        return (xe(n, t, s), Rh(n, e, s), !0);
    }
    return !1;
  }
  function Wc(t, e, n, s) {
    if (
      ((s = {
        lane: 2,
        revertLane: Dr(),
        gesture: null,
        action: s,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Tl(t))
    ) {
      if (e) throw Error(c(479));
    } else ((e = mc(t, n, s, 2)), e !== null && xe(e, t, 2));
  }
  function Tl(t) {
    var e = t.alternate;
    return t === dt || (e !== null && e === dt);
  }
  function Dh(t, e) {
    Pa = yl = !0;
    var n = t.pending;
    (n === null ? (e.next = e) : ((e.next = n.next), (n.next = e)),
      (t.pending = e));
  }
  function Rh(t, e, n) {
    if ((n & 4194048) !== 0) {
      var s = e.lanes;
      ((s &= t.pendingLanes), (n |= s), (e.lanes = n), Uf(t, n));
    }
  }
  var Ws = {
    readContext: ae,
    use: xl,
    useCallback: Ht,
    useContext: Ht,
    useEffect: Ht,
    useImperativeHandle: Ht,
    useLayoutEffect: Ht,
    useInsertionEffect: Ht,
    useMemo: Ht,
    useReducer: Ht,
    useRef: Ht,
    useState: Ht,
    useDebugValue: Ht,
    useDeferredValue: Ht,
    useTransition: Ht,
    useSyncExternalStore: Ht,
    useId: Ht,
    useHostTransitionStatus: Ht,
    useFormState: Ht,
    useActionState: Ht,
    useOptimistic: Ht,
    useMemoCache: Ht,
    useCacheRefresh: Ht,
  };
  Ws.useEffectEvent = Ht;
  var Oh = {
      readContext: ae,
      use: xl,
      useCallback: function (t, e) {
        return ((re().memoizedState = [t, e === void 0 ? null : e]), t);
      },
      useContext: ae,
      useEffect: mh,
      useImperativeHandle: function (t, e, n) {
        ((n = n != null ? n.concat([t]) : null),
          bl(4194308, 4, xh.bind(null, e, t), n));
      },
      useLayoutEffect: function (t, e) {
        return bl(4194308, 4, t, e);
      },
      useInsertionEffect: function (t, e) {
        bl(4, 2, t, e);
      },
      useMemo: function (t, e) {
        var n = re();
        e = e === void 0 ? null : e;
        var s = t();
        if (ya) {
          En(!0);
          try {
            t();
          } finally {
            En(!1);
          }
        }
        return ((n.memoizedState = [s, e]), s);
      },
      useReducer: function (t, e, n) {
        var s = re();
        if (n !== void 0) {
          var l = n(e);
          if (ya) {
            En(!0);
            try {
              n(e);
            } finally {
              En(!1);
            }
          }
        } else l = e;
        return (
          (s.memoizedState = s.baseState = l),
          (t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: l,
          }),
          (s.queue = t),
          (t = t.dispatch = gv.bind(null, dt, t)),
          [s.memoizedState, t]
        );
      },
      useRef: function (t) {
        var e = re();
        return ((t = { current: t }), (e.memoizedState = t));
      },
      useState: function (t) {
        t = Qc(t);
        var e = t.queue,
          n = Ch.bind(null, dt, e);
        return ((e.dispatch = n), [t.memoizedState, n]);
      },
      useDebugValue: Jc,
      useDeferredValue: function (t, e) {
        var n = re();
        return Fc(n, t, e);
      },
      useTransition: function () {
        var t = Qc(!1);
        return (
          (t = jh.bind(null, dt, t.queue, !0, !1)),
          (re().memoizedState = t),
          [!1, t]
        );
      },
      useSyncExternalStore: function (t, e, n) {
        var s = dt,
          l = re();
        if (bt) {
          if (n === void 0) throw Error(c(407));
          n = n();
        } else {
          if (((n = e()), wt === null)) throw Error(c(349));
          (xt & 127) !== 0 || Id(s, e, n);
        }
        l.memoizedState = n;
        var r = { value: n, getSnapshot: e };
        return (
          (l.queue = r),
          mh(eh.bind(null, s, r, t), [t]),
          (s.flags |= 2048),
          Ia(9, { destroy: void 0 }, th.bind(null, s, r, n, e), null),
          n
        );
      },
      useId: function () {
        var t = re(),
          e = wt.identifierPrefix;
        if (bt) {
          var n = We,
            s = Pe;
          ((n = (s & ~(1 << (32 - Se(s) - 1))).toString(32) + n),
            (e = "_" + e + "R_" + n),
            (n = gl++),
            0 < n && (e += "H" + n.toString(32)),
            (e += "_"));
        } else ((n = uv++), (e = "_" + e + "r_" + n.toString(32) + "_"));
        return (t.memoizedState = e);
      },
      useHostTransitionStatus: Pc,
      useFormState: uh,
      useActionState: uh,
      useOptimistic: function (t) {
        var e = re();
        e.memoizedState = e.baseState = t;
        var n = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (e.queue = n),
          (e = Wc.bind(null, dt, !0, n)),
          (n.dispatch = e),
          [t, e]
        );
      },
      useMemoCache: kc,
      useCacheRefresh: function () {
        return (re().memoizedState = yv.bind(null, dt));
      },
      useEffectEvent: function (t) {
        var e = re(),
          n = { impl: t };
        return (
          (e.memoizedState = n),
          function () {
            if ((jt & 2) !== 0) throw Error(c(440));
            return n.impl.apply(void 0, arguments);
          }
        );
      },
    },
    Ic = {
      readContext: ae,
      use: xl,
      useCallback: bh,
      useContext: ae,
      useEffect: Kc,
      useImperativeHandle: Ah,
      useInsertionEffect: gh,
      useLayoutEffect: vh,
      useMemo: Sh,
      useReducer: Al,
      useRef: ph,
      useState: function () {
        return Al(pn);
      },
      useDebugValue: Jc,
      useDeferredValue: function (t, e) {
        var n = Xt();
        return Th(n, Dt.memoizedState, t, e);
      },
      useTransition: function () {
        var t = Al(pn)[0],
          e = Xt().memoizedState;
        return [typeof t == "boolean" ? t : $s(t), e];
      },
      useSyncExternalStore: Wd,
      useId: zh,
      useHostTransitionStatus: Pc,
      useFormState: fh,
      useActionState: fh,
      useOptimistic: function (t, e) {
        var n = Xt();
        return sh(n, Dt, t, e);
      },
      useMemoCache: kc,
      useCacheRefresh: Nh,
    };
  Ic.useEffectEvent = yh;
  var wh = {
    readContext: ae,
    use: xl,
    useCallback: bh,
    useContext: ae,
    useEffect: Kc,
    useImperativeHandle: Ah,
    useInsertionEffect: gh,
    useLayoutEffect: vh,
    useMemo: Sh,
    useReducer: Xc,
    useRef: ph,
    useState: function () {
      return Xc(pn);
    },
    useDebugValue: Jc,
    useDeferredValue: function (t, e) {
      var n = Xt();
      return Dt === null ? Fc(n, t, e) : Th(n, Dt.memoizedState, t, e);
    },
    useTransition: function () {
      var t = Xc(pn)[0],
        e = Xt().memoizedState;
      return [typeof t == "boolean" ? t : $s(t), e];
    },
    useSyncExternalStore: Wd,
    useId: zh,
    useHostTransitionStatus: Pc,
    useFormState: hh,
    useActionState: hh,
    useOptimistic: function (t, e) {
      var n = Xt();
      return Dt !== null
        ? sh(n, Dt, t, e)
        : ((n.baseState = t), [t, n.queue.dispatch]);
    },
    useMemoCache: kc,
    useCacheRefresh: Nh,
  };
  wh.useEffectEvent = yh;
  function tr(t, e, n, s) {
    ((e = t.memoizedState),
      (n = n(s, e)),
      (n = n == null ? e : A({}, e, n)),
      (t.memoizedState = n),
      t.lanes === 0 && (t.updateQueue.baseState = n));
  }
  var er = {
    enqueueSetState: function (t, e, n) {
      t = t._reactInternals;
      var s = Ce(),
        l = wn(s);
      ((l.payload = e),
        n != null && (l.callback = n),
        (e = Vn(t, l, s)),
        e !== null && (xe(e, t, s), Zs(e, t, s)));
    },
    enqueueReplaceState: function (t, e, n) {
      t = t._reactInternals;
      var s = Ce(),
        l = wn(s);
      ((l.tag = 1),
        (l.payload = e),
        n != null && (l.callback = n),
        (e = Vn(t, l, s)),
        e !== null && (xe(e, t, s), Zs(e, t, s)));
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals;
      var n = Ce(),
        s = wn(n);
      ((s.tag = 2),
        e != null && (s.callback = e),
        (e = Vn(t, s, n)),
        e !== null && (xe(e, t, n), Zs(e, t, n)));
    },
  };
  function Vh(t, e, n, s, l, r, h) {
    return (
      (t = t.stateNode),
      typeof t.shouldComponentUpdate == "function"
        ? t.shouldComponentUpdate(s, r, h)
        : e.prototype && e.prototype.isPureReactComponent
          ? !Ls(n, s) || !Ls(l, r)
          : !0
    );
  }
  function _h(t, e, n, s) {
    ((t = e.state),
      typeof e.componentWillReceiveProps == "function" &&
        e.componentWillReceiveProps(n, s),
      typeof e.UNSAFE_componentWillReceiveProps == "function" &&
        e.UNSAFE_componentWillReceiveProps(n, s),
      e.state !== t && er.enqueueReplaceState(e, e.state, null));
  }
  function ga(t, e) {
    var n = e;
    if ("ref" in e) {
      n = {};
      for (var s in e) s !== "ref" && (n[s] = e[s]);
    }
    if ((t = t.defaultProps)) {
      n === e && (n = A({}, n));
      for (var l in t) n[l] === void 0 && (n[l] = t[l]);
    }
    return n;
  }
  function Uh(t) {
    el(t);
  }
  function Bh(t) {
    console.error(t);
  }
  function Lh(t) {
    el(t);
  }
  function jl(t, e) {
    try {
      var n = t.onUncaughtError;
      n(e.value, { componentStack: e.stack });
    } catch (s) {
      setTimeout(function () {
        throw s;
      });
    }
  }
  function Hh(t, e, n) {
    try {
      var s = t.onCaughtError;
      s(n.value, {
        componentStack: n.stack,
        errorBoundary: e.tag === 1 ? e.stateNode : null,
      });
    } catch (l) {
      setTimeout(function () {
        throw l;
      });
    }
  }
  function nr(t, e, n) {
    return (
      (n = wn(n)),
      (n.tag = 3),
      (n.payload = { element: null }),
      (n.callback = function () {
        jl(t, e);
      }),
      n
    );
  }
  function Gh(t) {
    return ((t = wn(t)), (t.tag = 3), t);
  }
  function qh(t, e, n, s) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var r = s.value;
      ((t.payload = function () {
        return l(r);
      }),
        (t.callback = function () {
          Hh(e, n, s);
        }));
    }
    var h = n.stateNode;
    h !== null &&
      typeof h.componentDidCatch == "function" &&
      (t.callback = function () {
        (Hh(e, n, s),
          typeof l != "function" &&
            (Gn === null ? (Gn = new Set([this])) : Gn.add(this)));
        var v = s.stack;
        this.componentDidCatch(s.value, {
          componentStack: v !== null ? v : "",
        });
      });
  }
  function vv(t, e, n, s, l) {
    if (
      ((n.flags |= 32768),
      s !== null && typeof s == "object" && typeof s.then == "function")
    ) {
      if (
        ((e = n.alternate),
        e !== null && Qa(e, n, l, !0),
        (n = Ee.current),
        n !== null)
      ) {
        switch (n.tag) {
          case 31:
          case 13:
            return (
              He === null ? Ul() : n.alternate === null && Gt === 0 && (Gt = 3),
              (n.flags &= -257),
              (n.flags |= 65536),
              (n.lanes = l),
              s === fl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null ? (n.updateQueue = new Set([s])) : e.add(s),
                  zr(t, s, l)),
              !1
            );
          case 22:
            return (
              (n.flags |= 65536),
              s === fl
                ? (n.flags |= 16384)
                : ((e = n.updateQueue),
                  e === null
                    ? ((e = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([s]),
                      }),
                      (n.updateQueue = e))
                    : ((n = e.retryQueue),
                      n === null ? (e.retryQueue = new Set([s])) : n.add(s)),
                  zr(t, s, l)),
              !1
            );
        }
        throw Error(c(435, n.tag));
      }
      return (zr(t, s, l), Ul(), !1);
    }
    if (bt)
      return (
        (e = Ee.current),
        e !== null
          ? ((e.flags & 65536) === 0 && (e.flags |= 256),
            (e.flags |= 65536),
            (e.lanes = l),
            s !== bc && ((t = Error(c(422), { cause: s })), qs(_e(t, n))))
          : (s !== bc && ((e = Error(c(423), { cause: s })), qs(_e(e, n))),
            (t = t.current.alternate),
            (t.flags |= 65536),
            (l &= -l),
            (t.lanes |= l),
            (s = _e(s, n)),
            (l = nr(t.stateNode, s, l)),
            Oc(t, l),
            Gt !== 4 && (Gt = 2)),
        !1
      );
    var r = Error(c(520), { cause: s });
    if (
      ((r = _e(r, n)),
      li === null ? (li = [r]) : li.push(r),
      Gt !== 4 && (Gt = 2),
      e === null)
    )
      return !0;
    ((s = _e(s, n)), (n = e));
    do {
      switch (n.tag) {
        case 3:
          return (
            (n.flags |= 65536),
            (t = l & -l),
            (n.lanes |= t),
            (t = nr(n.stateNode, s, t)),
            Oc(n, t),
            !1
          );
        case 1:
          if (
            ((e = n.type),
            (r = n.stateNode),
            (n.flags & 128) === 0 &&
              (typeof e.getDerivedStateFromError == "function" ||
                (r !== null &&
                  typeof r.componentDidCatch == "function" &&
                  (Gn === null || !Gn.has(r)))))
          )
            return (
              (n.flags |= 65536),
              (l &= -l),
              (n.lanes |= l),
              (l = Gh(l)),
              qh(l, t, n, s),
              Oc(n, l),
              !1
            );
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ar = Error(c(461)),
    Kt = !1;
  function se(t, e, n, s) {
    e.child = t === null ? Qd(e, null, n, s) : ma(e, t.child, n, s);
  }
  function kh(t, e, n, s, l) {
    n = n.render;
    var r = e.ref;
    if ("ref" in s) {
      var h = {};
      for (var v in s) v !== "ref" && (h[v] = s[v]);
    } else h = s;
    return (
      fa(e),
      (s = Lc(t, e, n, h, r, l)),
      (v = Hc()),
      t !== null && !Kt
        ? (Gc(t, e, l), mn(t, e, l))
        : (bt && v && xc(e), (e.flags |= 1), se(t, e, s, l), e.child)
    );
  }
  function Yh(t, e, n, s, l) {
    if (t === null) {
      var r = n.type;
      return typeof r == "function" &&
        !yc(r) &&
        r.defaultProps === void 0 &&
        n.compare === null
        ? ((e.tag = 15), (e.type = r), Xh(t, e, r, s, l))
        : ((t = il(n.type, null, s, e, e.mode, l)),
          (t.ref = e.ref),
          (t.return = e),
          (e.child = t));
    }
    if (((r = t.child), !fr(t, l))) {
      var h = r.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Ls), n(h, s) && t.ref === e.ref)
      )
        return mn(t, e, l);
    }
    return (
      (e.flags |= 1),
      (t = rn(r, s)),
      (t.ref = e.ref),
      (t.return = e),
      (e.child = t)
    );
  }
  function Xh(t, e, n, s, l) {
    if (t !== null) {
      var r = t.memoizedProps;
      if (Ls(r, s) && t.ref === e.ref)
        if (((Kt = !1), (e.pendingProps = s = r), fr(t, l)))
          (t.flags & 131072) !== 0 && (Kt = !0);
        else return ((e.lanes = t.lanes), mn(t, e, l));
    }
    return sr(t, e, n, s, l);
  }
  function Qh(t, e, n, s) {
    var l = s.children,
      r = t !== null ? t.memoizedState : null;
    if (
      (t === null &&
        e.stateNode === null &&
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      s.mode === "hidden")
    ) {
      if ((e.flags & 128) !== 0) {
        if (((r = r !== null ? r.baseLanes | n : n), t !== null)) {
          for (s = e.child = t.child, l = 0; s !== null;)
            ((l = l | s.lanes | s.childLanes), (s = s.sibling));
          s = l & ~r;
        } else ((s = 0), (e.child = null));
        return Zh(t, e, r, n, s);
      }
      if ((n & 536870912) !== 0)
        ((e.memoizedState = { baseLanes: 0, cachePool: null }),
          t !== null && rl(e, r !== null ? r.cachePool : null),
          r !== null ? Jd(e, r) : Vc(),
          Fd(e));
      else
        return (
          (s = e.lanes = 536870912),
          Zh(t, e, r !== null ? r.baseLanes | n : n, n, s)
        );
    } else
      r !== null
        ? (rl(e, r.cachePool), Jd(e, r), Un(), (e.memoizedState = null))
        : (t !== null && rl(e, null), Vc(), Un());
    return (se(t, e, l, n), e.child);
  }
  function Is(t, e) {
    return (
      (t !== null && t.tag === 22) ||
        e.stateNode !== null ||
        (e.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.sibling
    );
  }
  function Zh(t, e, n, s, l) {
    var r = Nc();
    return (
      (r = r === null ? null : { parent: Qt._currentValue, pool: r }),
      (e.memoizedState = { baseLanes: n, cachePool: r }),
      t !== null && rl(e, null),
      Vc(),
      Fd(e),
      t !== null && Qa(t, e, s, !0),
      (e.childLanes = l),
      null
    );
  }
  function El(t, e) {
    return (
      (e = zl({ mode: e.mode, children: e.children }, t.mode)),
      (e.ref = t.ref),
      (t.child = e),
      (e.return = t),
      e
    );
  }
  function Kh(t, e, n) {
    return (
      ma(e, t.child, null, n),
      (t = El(e, e.pendingProps)),
      (t.flags |= 2),
      Me(e),
      (e.memoizedState = null),
      t
    );
  }
  function xv(t, e, n) {
    var s = e.pendingProps,
      l = (e.flags & 128) !== 0;
    if (((e.flags &= -129), t === null)) {
      if (bt) {
        if (s.mode === "hidden")
          return ((t = El(e, s)), (e.lanes = 536870912), Is(null, t));
        if (
          (Uc(e),
          (t = Ut)
            ? ((t = im(t, Le)),
              (t = t !== null && t.data === "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Nn !== null ? { id: Pe, overflow: We } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Dd(t)),
                (n.return = e),
                (e.child = n),
                (ne = e),
                (Ut = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return ((e.lanes = 536870912), null);
      }
      return El(e, s);
    }
    var r = t.memoizedState;
    if (r !== null) {
      var h = r.dehydrated;
      if ((Uc(e), l))
        if (e.flags & 256) ((e.flags &= -257), (e = Kh(t, e, n)));
        else if (e.memoizedState !== null)
          ((e.child = t.child), (e.flags |= 128), (e = null));
        else throw Error(c(558));
      else if (
        (Kt || Qa(t, e, n, !1), (l = (n & t.childLanes) !== 0), Kt || l)
      ) {
        if (
          ((s = wt),
          s !== null && ((h = Bf(s, n)), h !== 0 && h !== r.retryLane))
        )
          throw ((r.retryLane = h), oa(t, h), xe(s, t, h), ar);
        (Ul(), (e = Kh(t, e, n)));
      } else
        ((t = r.treeContext),
          (Ut = Ge(h.nextSibling)),
          (ne = e),
          (bt = !0),
          (Cn = null),
          (Le = !1),
          t !== null && wd(e, t),
          (e = El(e, s)),
          (e.flags |= 4096));
      return e;
    }
    return (
      (t = rn(t.child, { mode: s.mode, children: s.children })),
      (t.ref = e.ref),
      (e.child = t),
      (t.return = e),
      t
    );
  }
  function Ml(t, e) {
    var n = e.ref;
    if (n === null) t !== null && t.ref !== null && (e.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object") throw Error(c(284));
      (t === null || t.ref !== n) && (e.flags |= 4194816);
    }
  }
  function sr(t, e, n, s, l) {
    return (
      fa(e),
      (n = Lc(t, e, n, s, void 0, l)),
      (s = Hc()),
      t !== null && !Kt
        ? (Gc(t, e, l), mn(t, e, l))
        : (bt && s && xc(e), (e.flags |= 1), se(t, e, n, l), e.child)
    );
  }
  function Jh(t, e, n, s, l, r) {
    return (
      fa(e),
      (e.updateQueue = null),
      (n = Pd(e, s, n, l)),
      $d(t),
      (s = Hc()),
      t !== null && !Kt
        ? (Gc(t, e, r), mn(t, e, r))
        : (bt && s && xc(e), (e.flags |= 1), se(t, e, n, r), e.child)
    );
  }
  function Fh(t, e, n, s, l) {
    if ((fa(e), e.stateNode === null)) {
      var r = qa,
        h = n.contextType;
      (typeof h == "object" && h !== null && (r = ae(h)),
        (r = new n(s, r)),
        (e.memoizedState =
          r.state !== null && r.state !== void 0 ? r.state : null),
        (r.updater = er),
        (e.stateNode = r),
        (r._reactInternals = e),
        (r = e.stateNode),
        (r.props = s),
        (r.state = e.memoizedState),
        (r.refs = {}),
        Dc(e),
        (h = n.contextType),
        (r.context = typeof h == "object" && h !== null ? ae(h) : qa),
        (r.state = e.memoizedState),
        (h = n.getDerivedStateFromProps),
        typeof h == "function" && (tr(e, n, h, s), (r.state = e.memoizedState)),
        typeof n.getDerivedStateFromProps == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function" ||
          (typeof r.UNSAFE_componentWillMount != "function" &&
            typeof r.componentWillMount != "function") ||
          ((h = r.state),
          typeof r.componentWillMount == "function" && r.componentWillMount(),
          typeof r.UNSAFE_componentWillMount == "function" &&
            r.UNSAFE_componentWillMount(),
          h !== r.state && er.enqueueReplaceState(r, r.state, null),
          Js(e, s, r, l),
          Ks(),
          (r.state = e.memoizedState)),
        typeof r.componentDidMount == "function" && (e.flags |= 4194308),
        (s = !0));
    } else if (t === null) {
      r = e.stateNode;
      var v = e.memoizedProps,
        T = ga(n, v);
      r.props = T;
      var C = r.context,
        U = n.contextType;
      ((h = qa), typeof U == "object" && U !== null && (h = ae(U)));
      var G = n.getDerivedStateFromProps;
      ((U =
        typeof G == "function" ||
        typeof r.getSnapshotBeforeUpdate == "function"),
        (v = e.pendingProps !== v),
        U ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((v || C !== h) && _h(e, r, s, h)),
        (On = !1));
      var D = e.memoizedState;
      ((r.state = D),
        Js(e, s, r, l),
        Ks(),
        (C = e.memoizedState),
        v || D !== C || On
          ? (typeof G == "function" && (tr(e, n, G, s), (C = e.memoizedState)),
            (T = On || Vh(e, n, T, s, D, C, h))
              ? (U ||
                  (typeof r.UNSAFE_componentWillMount != "function" &&
                    typeof r.componentWillMount != "function") ||
                  (typeof r.componentWillMount == "function" &&
                    r.componentWillMount(),
                  typeof r.UNSAFE_componentWillMount == "function" &&
                    r.UNSAFE_componentWillMount()),
                typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308))
              : (typeof r.componentDidMount == "function" &&
                  (e.flags |= 4194308),
                (e.memoizedProps = s),
                (e.memoizedState = C)),
            (r.props = s),
            (r.state = C),
            (r.context = h),
            (s = T))
          : (typeof r.componentDidMount == "function" && (e.flags |= 4194308),
            (s = !1)));
    } else {
      ((r = e.stateNode),
        Rc(t, e),
        (h = e.memoizedProps),
        (U = ga(n, h)),
        (r.props = U),
        (G = e.pendingProps),
        (D = r.context),
        (C = n.contextType),
        (T = qa),
        typeof C == "object" && C !== null && (T = ae(C)),
        (v = n.getDerivedStateFromProps),
        (C =
          typeof v == "function" ||
          typeof r.getSnapshotBeforeUpdate == "function") ||
          (typeof r.UNSAFE_componentWillReceiveProps != "function" &&
            typeof r.componentWillReceiveProps != "function") ||
          ((h !== G || D !== T) && _h(e, r, s, T)),
        (On = !1),
        (D = e.memoizedState),
        (r.state = D),
        Js(e, s, r, l),
        Ks());
      var V = e.memoizedState;
      h !== G ||
      D !== V ||
      On ||
      (t !== null && t.dependencies !== null && ol(t.dependencies))
        ? (typeof v == "function" && (tr(e, n, v, s), (V = e.memoizedState)),
          (U =
            On ||
            Vh(e, n, U, s, D, V, T) ||
            (t !== null && t.dependencies !== null && ol(t.dependencies)))
            ? (C ||
                (typeof r.UNSAFE_componentWillUpdate != "function" &&
                  typeof r.componentWillUpdate != "function") ||
                (typeof r.componentWillUpdate == "function" &&
                  r.componentWillUpdate(s, V, T),
                typeof r.UNSAFE_componentWillUpdate == "function" &&
                  r.UNSAFE_componentWillUpdate(s, V, T)),
              typeof r.componentDidUpdate == "function" && (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate == "function" &&
                (e.flags |= 1024))
            : (typeof r.componentDidUpdate != "function" ||
                (h === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 4),
              typeof r.getSnapshotBeforeUpdate != "function" ||
                (h === t.memoizedProps && D === t.memoizedState) ||
                (e.flags |= 1024),
              (e.memoizedProps = s),
              (e.memoizedState = V)),
          (r.props = s),
          (r.state = V),
          (r.context = T),
          (s = U))
        : (typeof r.componentDidUpdate != "function" ||
            (h === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 4),
          typeof r.getSnapshotBeforeUpdate != "function" ||
            (h === t.memoizedProps && D === t.memoizedState) ||
            (e.flags |= 1024),
          (s = !1));
    }
    return (
      (r = s),
      Ml(t, e),
      (s = (e.flags & 128) !== 0),
      r || s
        ? ((r = e.stateNode),
          (n =
            s && typeof n.getDerivedStateFromError != "function"
              ? null
              : r.render()),
          (e.flags |= 1),
          t !== null && s
            ? ((e.child = ma(e, t.child, null, l)),
              (e.child = ma(e, null, n, l)))
            : se(t, e, n, l),
          (e.memoizedState = r.state),
          (t = e.child))
        : (t = mn(t, e, l)),
      t
    );
  }
  function $h(t, e, n, s) {
    return (ra(), (e.flags |= 256), se(t, e, n, s), e.child);
  }
  var ir = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function lr(t) {
    return { baseLanes: t, cachePool: Hd() };
  }
  function or(t, e, n) {
    return ((t = t !== null ? t.childLanes & ~n : 0), e && (t |= Ne), t);
  }
  function Ph(t, e, n) {
    var s = e.pendingProps,
      l = !1,
      r = (e.flags & 128) !== 0,
      h;
    if (
      ((h = r) ||
        (h =
          t !== null && t.memoizedState === null ? !1 : (Yt.current & 2) !== 0),
      h && ((l = !0), (e.flags &= -129)),
      (h = (e.flags & 32) !== 0),
      (e.flags &= -33),
      t === null)
    ) {
      if (bt) {
        if (
          (l ? _n(e) : Un(),
          (t = Ut)
            ? ((t = im(t, Le)),
              (t = t !== null && t.data !== "&" ? t : null),
              t !== null &&
                ((e.memoizedState = {
                  dehydrated: t,
                  treeContext: Nn !== null ? { id: Pe, overflow: We } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (n = Dd(t)),
                (n.return = e),
                (e.child = n),
                (ne = e),
                (Ut = null)))
            : (t = null),
          t === null)
        )
          throw Dn(e);
        return (Yr(t) ? (e.lanes = 32) : (e.lanes = 536870912), null);
      }
      var v = s.children;
      return (
        (s = s.fallback),
        l
          ? (Un(),
            (l = e.mode),
            (v = zl({ mode: "hidden", children: v }, l)),
            (s = ca(s, l, n, null)),
            (v.return = e),
            (s.return = e),
            (v.sibling = s),
            (e.child = v),
            (s = e.child),
            (s.memoizedState = lr(n)),
            (s.childLanes = or(t, h, n)),
            (e.memoizedState = ir),
            Is(null, s))
          : (_n(e), cr(e, v))
      );
    }
    var T = t.memoizedState;
    if (T !== null && ((v = T.dehydrated), v !== null)) {
      if (r)
        e.flags & 256
          ? (_n(e), (e.flags &= -257), (e = rr(t, e, n)))
          : e.memoizedState !== null
            ? (Un(), (e.child = t.child), (e.flags |= 128), (e = null))
            : (Un(),
              (v = s.fallback),
              (l = e.mode),
              (s = zl({ mode: "visible", children: s.children }, l)),
              (v = ca(v, l, n, null)),
              (v.flags |= 2),
              (s.return = e),
              (v.return = e),
              (s.sibling = v),
              (e.child = s),
              ma(e, t.child, null, n),
              (s = e.child),
              (s.memoizedState = lr(n)),
              (s.childLanes = or(t, h, n)),
              (e.memoizedState = ir),
              (e = Is(null, s)));
      else if ((_n(e), Yr(v))) {
        if (((h = v.nextSibling && v.nextSibling.dataset), h)) var C = h.dgst;
        ((h = C),
          (s = Error(c(419))),
          (s.stack = ""),
          (s.digest = h),
          qs({ value: s, source: null, stack: null }),
          (e = rr(t, e, n)));
      } else if (
        (Kt || Qa(t, e, n, !1), (h = (n & t.childLanes) !== 0), Kt || h)
      ) {
        if (
          ((h = wt),
          h !== null && ((s = Bf(h, n)), s !== 0 && s !== T.retryLane))
        )
          throw ((T.retryLane = s), oa(t, s), xe(h, t, s), ar);
        (kr(v) || Ul(), (e = rr(t, e, n)));
      } else
        kr(v)
          ? ((e.flags |= 192), (e.child = t.child), (e = null))
          : ((t = T.treeContext),
            (Ut = Ge(v.nextSibling)),
            (ne = e),
            (bt = !0),
            (Cn = null),
            (Le = !1),
            t !== null && wd(e, t),
            (e = cr(e, s.children)),
            (e.flags |= 4096));
      return e;
    }
    return l
      ? (Un(),
        (v = s.fallback),
        (l = e.mode),
        (T = t.child),
        (C = T.sibling),
        (s = rn(T, { mode: "hidden", children: s.children })),
        (s.subtreeFlags = T.subtreeFlags & 65011712),
        C !== null ? (v = rn(C, v)) : ((v = ca(v, l, n, null)), (v.flags |= 2)),
        (v.return = e),
        (s.return = e),
        (s.sibling = v),
        (e.child = s),
        Is(null, s),
        (s = e.child),
        (v = t.child.memoizedState),
        v === null
          ? (v = lr(n))
          : ((l = v.cachePool),
            l !== null
              ? ((T = Qt._currentValue),
                (l = l.parent !== T ? { parent: T, pool: T } : l))
              : (l = Hd()),
            (v = { baseLanes: v.baseLanes | n, cachePool: l })),
        (s.memoizedState = v),
        (s.childLanes = or(t, h, n)),
        (e.memoizedState = ir),
        Is(t.child, s))
      : (_n(e),
        (n = t.child),
        (t = n.sibling),
        (n = rn(n, { mode: "visible", children: s.children })),
        (n.return = e),
        (n.sibling = null),
        t !== null &&
          ((h = e.deletions),
          h === null ? ((e.deletions = [t]), (e.flags |= 16)) : h.push(t)),
        (e.child = n),
        (e.memoizedState = null),
        n);
  }
  function cr(t, e) {
    return (
      (e = zl({ mode: "visible", children: e }, t.mode)),
      (e.return = t),
      (t.child = e)
    );
  }
  function zl(t, e) {
    return ((t = je(22, t, null, e)), (t.lanes = 0), t);
  }
  function rr(t, e, n) {
    return (
      ma(e, t.child, null, n),
      (t = cr(e, e.pendingProps.children)),
      (t.flags |= 2),
      (e.memoizedState = null),
      t
    );
  }
  function Wh(t, e, n) {
    t.lanes |= e;
    var s = t.alternate;
    (s !== null && (s.lanes |= e), jc(t.return, e, n));
  }
  function ur(t, e, n, s, l, r) {
    var h = t.memoizedState;
    h === null
      ? (t.memoizedState = {
          isBackwards: e,
          rendering: null,
          renderingStartTime: 0,
          last: s,
          tail: n,
          tailMode: l,
          treeForkCount: r,
        })
      : ((h.isBackwards = e),
        (h.rendering = null),
        (h.renderingStartTime = 0),
        (h.last = s),
        (h.tail = n),
        (h.tailMode = l),
        (h.treeForkCount = r));
  }
  function Ih(t, e, n) {
    var s = e.pendingProps,
      l = s.revealOrder,
      r = s.tail;
    s = s.children;
    var h = Yt.current,
      v = (h & 2) !== 0;
    if (
      (v ? ((h = (h & 1) | 2), (e.flags |= 128)) : (h &= 1),
      J(Yt, h),
      se(t, e, s, n),
      (s = bt ? Gs : 0),
      !v && t !== null && (t.flags & 128) !== 0)
    )
      t: for (t = e.child; t !== null;) {
        if (t.tag === 13) t.memoizedState !== null && Wh(t, n, e);
        else if (t.tag === 19) Wh(t, n, e);
        else if (t.child !== null) {
          ((t.child.return = t), (t = t.child));
          continue;
        }
        if (t === e) break t;
        for (; t.sibling === null;) {
          if (t.return === null || t.return === e) break t;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    switch (l) {
      case "forwards":
        for (n = e.child, l = null; n !== null;)
          ((t = n.alternate),
            t !== null && ml(t) === null && (l = n),
            (n = n.sibling));
        ((n = l),
          n === null
            ? ((l = e.child), (e.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ur(e, !1, l, n, r, s));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, l = e.child, e.child = null; l !== null;) {
          if (((t = l.alternate), t !== null && ml(t) === null)) {
            e.child = l;
            break;
          }
          ((t = l.sibling), (l.sibling = n), (n = l), (l = t));
        }
        ur(e, !0, n, null, r, s);
        break;
      case "together":
        ur(e, !1, null, null, void 0, s);
        break;
      default:
        e.memoizedState = null;
    }
    return e.child;
  }
  function mn(t, e, n) {
    if (
      (t !== null && (e.dependencies = t.dependencies),
      (Hn |= e.lanes),
      (n & e.childLanes) === 0)
    )
      if (t !== null) {
        if ((Qa(t, e, n, !1), (n & e.childLanes) === 0)) return null;
      } else return null;
    if (t !== null && e.child !== t.child) throw Error(c(153));
    if (e.child !== null) {
      for (
        t = e.child, n = rn(t, t.pendingProps), e.child = n, n.return = e;
        t.sibling !== null;
      )
        ((t = t.sibling),
          (n = n.sibling = rn(t, t.pendingProps)),
          (n.return = e));
      n.sibling = null;
    }
    return e.child;
  }
  function fr(t, e) {
    return (t.lanes & e) !== 0
      ? !0
      : ((t = t.dependencies), !!(t !== null && ol(t)));
  }
  function Av(t, e, n) {
    switch (e.tag) {
      case 3:
        (H(e, e.stateNode.containerInfo),
          Rn(e, Qt, t.memoizedState.cache),
          ra());
        break;
      case 27:
      case 5:
        kt(e);
        break;
      case 4:
        H(e, e.stateNode.containerInfo);
        break;
      case 10:
        Rn(e, e.type, e.memoizedProps.value);
        break;
      case 31:
        if (e.memoizedState !== null) return ((e.flags |= 128), Uc(e), null);
        break;
      case 13:
        var s = e.memoizedState;
        if (s !== null)
          return s.dehydrated !== null
            ? (_n(e), (e.flags |= 128), null)
            : (n & e.child.childLanes) !== 0
              ? Ph(t, e, n)
              : (_n(e), (t = mn(t, e, n)), t !== null ? t.sibling : null);
        _n(e);
        break;
      case 19:
        var l = (t.flags & 128) !== 0;
        if (
          ((s = (n & e.childLanes) !== 0),
          s || (Qa(t, e, n, !1), (s = (n & e.childLanes) !== 0)),
          l)
        ) {
          if (s) return Ih(t, e, n);
          e.flags |= 128;
        }
        if (
          ((l = e.memoizedState),
          l !== null &&
            ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
          J(Yt, Yt.current),
          s)
        )
          break;
        return null;
      case 22:
        return ((e.lanes = 0), Qh(t, e, n, e.pendingProps));
      case 24:
        Rn(e, Qt, t.memoizedState.cache);
    }
    return mn(t, e, n);
  }
  function tp(t, e, n) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) Kt = !0;
      else {
        if (!fr(t, n) && (e.flags & 128) === 0) return ((Kt = !1), Av(t, e, n));
        Kt = (t.flags & 131072) !== 0;
      }
    else ((Kt = !1), bt && (e.flags & 1048576) !== 0 && Od(e, Gs, e.index));
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          var s = e.pendingProps;
          if (((t = ha(e.elementType)), (e.type = t), typeof t == "function"))
            yc(t)
              ? ((s = ga(t, s)), (e.tag = 1), (e = Fh(null, e, t, s, n)))
              : ((e.tag = 0), (e = sr(null, e, t, s, n)));
          else {
            if (t != null) {
              var l = t.$$typeof;
              if (l === Z) {
                ((e.tag = 11), (e = kh(null, e, t, s, n)));
                break t;
              } else if (l === F) {
                ((e.tag = 14), (e = Yh(null, e, t, s, n)));
                break t;
              }
            }
            throw ((e = Ct(t) || t), Error(c(306, e, "")));
          }
        }
        return e;
      case 0:
        return sr(t, e, e.type, e.pendingProps, n);
      case 1:
        return ((s = e.type), (l = ga(s, e.pendingProps)), Fh(t, e, s, l, n));
      case 3:
        t: {
          if ((H(e, e.stateNode.containerInfo), t === null))
            throw Error(c(387));
          s = e.pendingProps;
          var r = e.memoizedState;
          ((l = r.element), Rc(t, e), Js(e, s, null, n));
          var h = e.memoizedState;
          if (
            ((s = h.cache),
            Rn(e, Qt, s),
            s !== r.cache && Ec(e, [Qt], n, !0),
            Ks(),
            (s = h.element),
            r.isDehydrated)
          )
            if (
              ((r = { element: s, isDehydrated: !1, cache: h.cache }),
              (e.updateQueue.baseState = r),
              (e.memoizedState = r),
              e.flags & 256)
            ) {
              e = $h(t, e, s, n);
              break t;
            } else if (s !== l) {
              ((l = _e(Error(c(424)), e)), qs(l), (e = $h(t, e, s, n)));
              break t;
            } else
              for (
                t = e.stateNode.containerInfo,
                  t.nodeType === 9
                    ? (t = t.body)
                    : (t = t.nodeName === "HTML" ? t.ownerDocument.body : t),
                  Ut = Ge(t.firstChild),
                  ne = e,
                  bt = !0,
                  Cn = null,
                  Le = !0,
                  n = Qd(e, null, s, n),
                  e.child = n;
                n;
              )
                ((n.flags = (n.flags & -3) | 4096), (n = n.sibling));
          else {
            if ((ra(), s === l)) {
              e = mn(t, e, n);
              break t;
            }
            se(t, e, s, n);
          }
          e = e.child;
        }
        return e;
      case 26:
        return (
          Ml(t, e),
          t === null
            ? (n = fm(e.type, null, e.pendingProps, null))
              ? (e.memoizedState = n)
              : bt ||
                ((n = e.type),
                (t = e.pendingProps),
                (s = Yl(mt.current).createElement(n)),
                (s[ee] = e),
                (s[he] = t),
                ie(s, n, t),
                It(s),
                (e.stateNode = s))
            : (e.memoizedState = fm(
                e.type,
                t.memoizedProps,
                e.pendingProps,
                t.memoizedState,
              )),
          null
        );
      case 27:
        return (
          kt(e),
          t === null &&
            bt &&
            ((s = e.stateNode = cm(e.type, e.pendingProps, mt.current)),
            (ne = e),
            (Le = !0),
            (l = Ut),
            Xn(e.type) ? ((Xr = l), (Ut = Ge(s.firstChild))) : (Ut = l)),
          se(t, e, e.pendingProps.children, n),
          Ml(t, e),
          t === null && (e.flags |= 4194304),
          e.child
        );
      case 5:
        return (
          t === null &&
            bt &&
            ((l = s = Ut) &&
              ((s = $v(s, e.type, e.pendingProps, Le)),
              s !== null
                ? ((e.stateNode = s),
                  (ne = e),
                  (Ut = Ge(s.firstChild)),
                  (Le = !1),
                  (l = !0))
                : (l = !1)),
            l || Dn(e)),
          kt(e),
          (l = e.type),
          (r = e.pendingProps),
          (h = t !== null ? t.memoizedProps : null),
          (s = r.children),
          Hr(l, r) ? (s = null) : h !== null && Hr(l, h) && (e.flags |= 32),
          e.memoizedState !== null &&
            ((l = Lc(t, e, fv, null, null, n)), (pi._currentValue = l)),
          Ml(t, e),
          se(t, e, s, n),
          e.child
        );
      case 6:
        return (
          t === null &&
            bt &&
            ((t = n = Ut) &&
              ((n = Pv(n, e.pendingProps, Le)),
              n !== null
                ? ((e.stateNode = n), (ne = e), (Ut = null), (t = !0))
                : (t = !1)),
            t || Dn(e)),
          null
        );
      case 13:
        return Ph(t, e, n);
      case 4:
        return (
          H(e, e.stateNode.containerInfo),
          (s = e.pendingProps),
          t === null ? (e.child = ma(e, null, s, n)) : se(t, e, s, n),
          e.child
        );
      case 11:
        return kh(t, e, e.type, e.pendingProps, n);
      case 7:
        return (se(t, e, e.pendingProps, n), e.child);
      case 8:
        return (se(t, e, e.pendingProps.children, n), e.child);
      case 12:
        return (se(t, e, e.pendingProps.children, n), e.child);
      case 10:
        return (
          (s = e.pendingProps),
          Rn(e, e.type, s.value),
          se(t, e, s.children, n),
          e.child
        );
      case 9:
        return (
          (l = e.type._context),
          (s = e.pendingProps.children),
          fa(e),
          (l = ae(l)),
          (s = s(l)),
          (e.flags |= 1),
          se(t, e, s, n),
          e.child
        );
      case 14:
        return Yh(t, e, e.type, e.pendingProps, n);
      case 15:
        return Xh(t, e, e.type, e.pendingProps, n);
      case 19:
        return Ih(t, e, n);
      case 31:
        return xv(t, e, n);
      case 22:
        return Qh(t, e, n, e.pendingProps);
      case 24:
        return (
          fa(e),
          (s = ae(Qt)),
          t === null
            ? ((l = Nc()),
              l === null &&
                ((l = wt),
                (r = Mc()),
                (l.pooledCache = r),
                r.refCount++,
                r !== null && (l.pooledCacheLanes |= n),
                (l = r)),
              (e.memoizedState = { parent: s, cache: l }),
              Dc(e),
              Rn(e, Qt, l))
            : ((t.lanes & n) !== 0 && (Rc(t, e), Js(e, null, null, n), Ks()),
              (l = t.memoizedState),
              (r = e.memoizedState),
              l.parent !== s
                ? ((l = { parent: s, cache: s }),
                  (e.memoizedState = l),
                  e.lanes === 0 &&
                    (e.memoizedState = e.updateQueue.baseState = l),
                  Rn(e, Qt, s))
                : ((s = r.cache),
                  Rn(e, Qt, s),
                  s !== l.cache && Ec(e, [Qt], n, !0))),
          se(t, e, e.pendingProps.children, n),
          e.child
        );
      case 29:
        throw e.pendingProps;
    }
    throw Error(c(156, e.tag));
  }
  function yn(t) {
    t.flags |= 4;
  }
  function dr(t, e, n, s, l) {
    if (((e = (t.mode & 32) !== 0) && (e = !1), e)) {
      if (((t.flags |= 16777216), (l & 335544128) === l))
        if (t.stateNode.complete) t.flags |= 8192;
        else if (zp()) t.flags |= 8192;
        else throw ((pa = fl), Cc);
    } else t.flags &= -16777217;
  }
  function ep(t, e) {
    if (e.type !== "stylesheet" || (e.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (((t.flags |= 16777216), !ym(e)))
      if (zp()) t.flags |= 8192;
      else throw ((pa = fl), Cc);
  }
  function Nl(t, e) {
    (e !== null && (t.flags |= 4),
      t.flags & 16384 &&
        ((e = t.tag !== 22 ? Vf() : 536870912), (t.lanes |= e), (as |= e)));
  }
  function ti(t, e) {
    if (!bt)
      switch (t.tailMode) {
        case "hidden":
          e = t.tail;
          for (var n = null; e !== null;)
            (e.alternate !== null && (n = e), (e = e.sibling));
          n === null ? (t.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = t.tail;
          for (var s = null; n !== null;)
            (n.alternate !== null && (s = n), (n = n.sibling));
          s === null
            ? e || t.tail === null
              ? (t.tail = null)
              : (t.tail.sibling = null)
            : (s.sibling = null);
      }
  }
  function Bt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      n = 0,
      s = 0;
    if (e)
      for (var l = t.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags & 65011712),
          (s |= l.flags & 65011712),
          (l.return = t),
          (l = l.sibling));
    else
      for (l = t.child; l !== null;)
        ((n |= l.lanes | l.childLanes),
          (s |= l.subtreeFlags),
          (s |= l.flags),
          (l.return = t),
          (l = l.sibling));
    return ((t.subtreeFlags |= s), (t.childLanes = n), e);
  }
  function bv(t, e, n) {
    var s = e.pendingProps;
    switch ((Ac(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (Bt(e), null);
      case 1:
        return (Bt(e), null);
      case 3:
        return (
          (n = e.stateNode),
          (s = null),
          t !== null && (s = t.memoizedState.cache),
          e.memoizedState.cache !== s && (e.flags |= 2048),
          dn(Qt),
          lt(),
          n.pendingContext &&
            ((n.context = n.pendingContext), (n.pendingContext = null)),
          (t === null || t.child === null) &&
            (Xa(e)
              ? yn(e)
              : t === null ||
                (t.memoizedState.isDehydrated && (e.flags & 256) === 0) ||
                ((e.flags |= 1024), Sc())),
          Bt(e),
          null
        );
      case 26:
        var l = e.type,
          r = e.memoizedState;
        return (
          t === null
            ? (yn(e),
              r !== null ? (Bt(e), ep(e, r)) : (Bt(e), dr(e, l, null, s, n)))
            : r
              ? r !== t.memoizedState
                ? (yn(e), Bt(e), ep(e, r))
                : (Bt(e), (e.flags &= -16777217))
              : ((t = t.memoizedProps),
                t !== s && yn(e),
                Bt(e),
                dr(e, l, t, s, n)),
          null
        );
      case 27:
        if (
          (Hi(e),
          (n = mt.current),
          (l = e.type),
          t !== null && e.stateNode != null)
        )
          t.memoizedProps !== s && yn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(c(166));
            return (Bt(e), null);
          }
          ((t = W.current),
            Xa(e) ? Vd(e) : ((t = cm(l, s, n)), (e.stateNode = t), yn(e)));
        }
        return (Bt(e), null);
      case 5:
        if ((Hi(e), (l = e.type), t !== null && e.stateNode != null))
          t.memoizedProps !== s && yn(e);
        else {
          if (!s) {
            if (e.stateNode === null) throw Error(c(166));
            return (Bt(e), null);
          }
          if (((r = W.current), Xa(e))) Vd(e);
          else {
            var h = Yl(mt.current);
            switch (r) {
              case 1:
                r = h.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                r = h.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    r = h.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    r = h.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l,
                    );
                    break;
                  case "script":
                    ((r = h.createElement("div")),
                      (r.innerHTML = "<script><\/script>"),
                      (r = r.removeChild(r.firstChild)));
                    break;
                  case "select":
                    ((r =
                      typeof s.is == "string"
                        ? h.createElement("select", { is: s.is })
                        : h.createElement("select")),
                      s.multiple
                        ? (r.multiple = !0)
                        : s.size && (r.size = s.size));
                    break;
                  default:
                    r =
                      typeof s.is == "string"
                        ? h.createElement(l, { is: s.is })
                        : h.createElement(l);
                }
            }
            ((r[ee] = e), (r[he] = s));
            t: for (h = e.child; h !== null;) {
              if (h.tag === 5 || h.tag === 6) r.appendChild(h.stateNode);
              else if (h.tag !== 4 && h.tag !== 27 && h.child !== null) {
                ((h.child.return = h), (h = h.child));
                continue;
              }
              if (h === e) break t;
              for (; h.sibling === null;) {
                if (h.return === null || h.return === e) break t;
                h = h.return;
              }
              ((h.sibling.return = h.return), (h = h.sibling));
            }
            e.stateNode = r;
            t: switch ((ie(r, l, s), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                s = !!s.autoFocus;
                break t;
              case "img":
                s = !0;
                break t;
              default:
                s = !1;
            }
            s && yn(e);
          }
        }
        return (
          Bt(e),
          dr(e, e.type, t === null ? null : t.memoizedProps, e.pendingProps, n),
          null
        );
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== s && yn(e);
        else {
          if (typeof s != "string" && e.stateNode === null) throw Error(c(166));
          if (((t = mt.current), Xa(e))) {
            if (
              ((t = e.stateNode),
              (n = e.memoizedProps),
              (s = null),
              (l = ne),
              l !== null)
            )
              switch (l.tag) {
                case 27:
                case 5:
                  s = l.memoizedProps;
              }
            ((t[ee] = e),
              (t = !!(
                t.nodeValue === n ||
                (s !== null && s.suppressHydrationWarning === !0) ||
                Pp(t.nodeValue, n)
              )),
              t || Dn(e, !0));
          } else
            ((t = Yl(t).createTextNode(s)), (t[ee] = e), (e.stateNode = t));
        }
        return (Bt(e), null);
      case 31:
        if (((n = e.memoizedState), t === null || t.memoizedState !== null)) {
          if (((s = Xa(e)), n !== null)) {
            if (t === null) {
              if (!s) throw Error(c(318));
              if (
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated : null),
                !t)
              )
                throw Error(c(557));
              t[ee] = e;
            } else
              (ra(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Bt(e), (t = !1));
          } else
            ((n = Sc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = n),
              (t = !0));
          if (!t) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
          if ((e.flags & 128) !== 0) throw Error(c(558));
        }
        return (Bt(e), null);
      case 13:
        if (
          ((s = e.memoizedState),
          t === null ||
            (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
        ) {
          if (((l = Xa(e)), s !== null && s.dehydrated !== null)) {
            if (t === null) {
              if (!l) throw Error(c(318));
              if (
                ((l = e.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(c(317));
              l[ee] = e;
            } else
              (ra(),
                (e.flags & 128) === 0 && (e.memoizedState = null),
                (e.flags |= 4));
            (Bt(e), (l = !1));
          } else
            ((l = Sc()),
              t !== null &&
                t.memoizedState !== null &&
                (t.memoizedState.hydrationErrors = l),
              (l = !0));
          if (!l) return e.flags & 256 ? (Me(e), e) : (Me(e), null);
        }
        return (
          Me(e),
          (e.flags & 128) !== 0
            ? ((e.lanes = n), e)
            : ((n = s !== null),
              (t = t !== null && t.memoizedState !== null),
              n &&
                ((s = e.child),
                (l = null),
                s.alternate !== null &&
                  s.alternate.memoizedState !== null &&
                  s.alternate.memoizedState.cachePool !== null &&
                  (l = s.alternate.memoizedState.cachePool.pool),
                (r = null),
                s.memoizedState !== null &&
                  s.memoizedState.cachePool !== null &&
                  (r = s.memoizedState.cachePool.pool),
                r !== l && (s.flags |= 2048)),
              n !== t && n && (e.child.flags |= 8192),
              Nl(e, e.updateQueue),
              Bt(e),
              null)
        );
      case 4:
        return (lt(), t === null && Vr(e.stateNode.containerInfo), Bt(e), null);
      case 10:
        return (dn(e.type), Bt(e), null);
      case 19:
        if ((L(Yt), (s = e.memoizedState), s === null)) return (Bt(e), null);
        if (((l = (e.flags & 128) !== 0), (r = s.rendering), r === null))
          if (l) ti(s, !1);
          else {
            if (Gt !== 0 || (t !== null && (t.flags & 128) !== 0))
              for (t = e.child; t !== null;) {
                if (((r = ml(t)), r !== null)) {
                  for (
                    e.flags |= 128,
                      ti(s, !1),
                      t = r.updateQueue,
                      e.updateQueue = t,
                      Nl(e, t),
                      e.subtreeFlags = 0,
                      t = n,
                      n = e.child;
                    n !== null;
                  )
                    (Cd(n, t), (n = n.sibling));
                  return (
                    J(Yt, (Yt.current & 1) | 2),
                    bt && un(e, s.treeForkCount),
                    e.child
                  );
                }
                t = t.sibling;
              }
            s.tail !== null &&
              Ae() > wl &&
              ((e.flags |= 128), (l = !0), ti(s, !1), (e.lanes = 4194304));
          }
        else {
          if (!l)
            if (((t = ml(r)), t !== null)) {
              if (
                ((e.flags |= 128),
                (l = !0),
                (t = t.updateQueue),
                (e.updateQueue = t),
                Nl(e, t),
                ti(s, !0),
                s.tail === null &&
                  s.tailMode === "hidden" &&
                  !r.alternate &&
                  !bt)
              )
                return (Bt(e), null);
            } else
              2 * Ae() - s.renderingStartTime > wl &&
                n !== 536870912 &&
                ((e.flags |= 128), (l = !0), ti(s, !1), (e.lanes = 4194304));
          s.isBackwards
            ? ((r.sibling = e.child), (e.child = r))
            : ((t = s.last),
              t !== null ? (t.sibling = r) : (e.child = r),
              (s.last = r));
        }
        return s.tail !== null
          ? ((t = s.tail),
            (s.rendering = t),
            (s.tail = t.sibling),
            (s.renderingStartTime = Ae()),
            (t.sibling = null),
            (n = Yt.current),
            J(Yt, l ? (n & 1) | 2 : n & 1),
            bt && un(e, s.treeForkCount),
            t)
          : (Bt(e), null);
      case 22:
      case 23:
        return (
          Me(e),
          _c(),
          (s = e.memoizedState !== null),
          t !== null
            ? (t.memoizedState !== null) !== s && (e.flags |= 8192)
            : s && (e.flags |= 8192),
          s
            ? (n & 536870912) !== 0 &&
              (e.flags & 128) === 0 &&
              (Bt(e), e.subtreeFlags & 6 && (e.flags |= 8192))
            : Bt(e),
          (n = e.updateQueue),
          n !== null && Nl(e, n.retryQueue),
          (n = null),
          t !== null &&
            t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (n = t.memoizedState.cachePool.pool),
          (s = null),
          e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (s = e.memoizedState.cachePool.pool),
          s !== n && (e.flags |= 2048),
          t !== null && L(da),
          null
        );
      case 24:
        return (
          (n = null),
          t !== null && (n = t.memoizedState.cache),
          e.memoizedState.cache !== n && (e.flags |= 2048),
          dn(Qt),
          Bt(e),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(c(156, e.tag));
  }
  function Sv(t, e) {
    switch ((Ac(e), e.tag)) {
      case 1:
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 3:
        return (
          dn(Qt),
          lt(),
          (t = e.flags),
          (t & 65536) !== 0 && (t & 128) === 0
            ? ((e.flags = (t & -65537) | 128), e)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (Hi(e), null);
      case 31:
        if (e.memoizedState !== null) {
          if ((Me(e), e.alternate === null)) throw Error(c(340));
          ra();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 13:
        if (
          (Me(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)
        ) {
          if (e.alternate === null) throw Error(c(340));
          ra();
        }
        return (
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 19:
        return (L(Yt), null);
      case 4:
        return (lt(), null);
      case 10:
        return (dn(e.type), null);
      case 22:
      case 23:
        return (
          Me(e),
          _c(),
          t !== null && L(da),
          (t = e.flags),
          t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
        );
      case 24:
        return (dn(Qt), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function np(t, e) {
    switch ((Ac(e), e.tag)) {
      case 3:
        (dn(Qt), lt());
        break;
      case 26:
      case 27:
      case 5:
        Hi(e);
        break;
      case 4:
        lt();
        break;
      case 31:
        e.memoizedState !== null && Me(e);
        break;
      case 13:
        Me(e);
        break;
      case 19:
        L(Yt);
        break;
      case 10:
        dn(e.type);
        break;
      case 22:
      case 23:
        (Me(e), _c(), t !== null && L(da));
        break;
      case 24:
        dn(Qt);
    }
  }
  function ei(t, e) {
    try {
      var n = e.updateQueue,
        s = n !== null ? n.lastEffect : null;
      if (s !== null) {
        var l = s.next;
        n = l;
        do {
          if ((n.tag & t) === t) {
            s = void 0;
            var r = n.create,
              h = n.inst;
            ((s = r()), (h.destroy = s));
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (v) {
      Nt(e, e.return, v);
    }
  }
  function Bn(t, e, n) {
    try {
      var s = e.updateQueue,
        l = s !== null ? s.lastEffect : null;
      if (l !== null) {
        var r = l.next;
        s = r;
        do {
          if ((s.tag & t) === t) {
            var h = s.inst,
              v = h.destroy;
            if (v !== void 0) {
              ((h.destroy = void 0), (l = e));
              var T = n,
                C = v;
              try {
                C();
              } catch (U) {
                Nt(l, T, U);
              }
            }
          }
          s = s.next;
        } while (s !== r);
      }
    } catch (U) {
      Nt(e, e.return, U);
    }
  }
  function ap(t) {
    var e = t.updateQueue;
    if (e !== null) {
      var n = t.stateNode;
      try {
        Kd(e, n);
      } catch (s) {
        Nt(t, t.return, s);
      }
    }
  }
  function sp(t, e, n) {
    ((n.props = ga(t.type, t.memoizedProps)), (n.state = t.memoizedState));
    try {
      n.componentWillUnmount();
    } catch (s) {
      Nt(t, e, s);
    }
  }
  function ni(t, e) {
    try {
      var n = t.ref;
      if (n !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var s = t.stateNode;
            break;
          case 30:
            s = t.stateNode;
            break;
          default:
            s = t.stateNode;
        }
        typeof n == "function" ? (t.refCleanup = n(s)) : (n.current = s);
      }
    } catch (l) {
      Nt(t, e, l);
    }
  }
  function Ie(t, e) {
    var n = t.ref,
      s = t.refCleanup;
    if (n !== null)
      if (typeof s == "function")
        try {
          s();
        } catch (l) {
          Nt(t, e, l);
        } finally {
          ((t.refCleanup = null),
            (t = t.alternate),
            t != null && (t.refCleanup = null));
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Nt(t, e, l);
        }
      else n.current = null;
  }
  function ip(t) {
    var e = t.type,
      n = t.memoizedProps,
      s = t.stateNode;
    try {
      t: switch (e) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && s.focus();
          break t;
        case "img":
          n.src ? (s.src = n.src) : n.srcSet && (s.srcset = n.srcSet);
      }
    } catch (l) {
      Nt(t, t.return, l);
    }
  }
  function hr(t, e, n) {
    try {
      var s = t.stateNode;
      (Xv(s, t.type, n, e), (s[he] = e));
    } catch (l) {
      Nt(t, t.return, l);
    }
  }
  function lp(t) {
    return (
      t.tag === 5 ||
      t.tag === 3 ||
      t.tag === 26 ||
      (t.tag === 27 && Xn(t.type)) ||
      t.tag === 4
    );
  }
  function pr(t) {
    t: for (;;) {
      for (; t.sibling === null;) {
        if (t.return === null || lp(t.return)) return null;
        t = t.return;
      }
      for (
        t.sibling.return = t.return, t = t.sibling;
        t.tag !== 5 && t.tag !== 6 && t.tag !== 18;
      ) {
        if (
          (t.tag === 27 && Xn(t.type)) ||
          t.flags & 2 ||
          t.child === null ||
          t.tag === 4
        )
          continue t;
        ((t.child.return = t), (t = t.child));
      }
      if (!(t.flags & 2)) return t.stateNode;
    }
  }
  function mr(t, e, n) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode),
        e
          ? (n.nodeType === 9
              ? n.body
              : n.nodeName === "HTML"
                ? n.ownerDocument.body
                : n
            ).insertBefore(t, e)
          : ((e =
              n.nodeType === 9
                ? n.body
                : n.nodeName === "HTML"
                  ? n.ownerDocument.body
                  : n),
            e.appendChild(t),
            (n = n._reactRootContainer),
            n != null || e.onclick !== null || (e.onclick = on)));
    else if (
      s !== 4 &&
      (s === 27 && Xn(t.type) && ((n = t.stateNode), (e = null)),
      (t = t.child),
      t !== null)
    )
      for (mr(t, e, n), t = t.sibling; t !== null;)
        (mr(t, e, n), (t = t.sibling));
  }
  function Cl(t, e, n) {
    var s = t.tag;
    if (s === 5 || s === 6)
      ((t = t.stateNode), e ? n.insertBefore(t, e) : n.appendChild(t));
    else if (
      s !== 4 &&
      (s === 27 && Xn(t.type) && (n = t.stateNode), (t = t.child), t !== null)
    )
      for (Cl(t, e, n), t = t.sibling; t !== null;)
        (Cl(t, e, n), (t = t.sibling));
  }
  function op(t) {
    var e = t.stateNode,
      n = t.memoizedProps;
    try {
      for (var s = t.type, l = e.attributes; l.length;)
        e.removeAttributeNode(l[0]);
      (ie(e, s, n), (e[ee] = t), (e[he] = n));
    } catch (r) {
      Nt(t, t.return, r);
    }
  }
  var gn = !1,
    Jt = !1,
    yr = !1,
    cp = typeof WeakSet == "function" ? WeakSet : Set,
    te = null;
  function Tv(t, e) {
    if (((t = t.containerInfo), (Br = $l), (t = Ad(t)), rc(t))) {
      if ("selectionStart" in t)
        var n = { start: t.selectionStart, end: t.selectionEnd };
      else
        t: {
          n = ((n = t.ownerDocument) && n.defaultView) || window;
          var s = n.getSelection && n.getSelection();
          if (s && s.rangeCount !== 0) {
            n = s.anchorNode;
            var l = s.anchorOffset,
              r = s.focusNode;
            s = s.focusOffset;
            try {
              (n.nodeType, r.nodeType);
            } catch {
              n = null;
              break t;
            }
            var h = 0,
              v = -1,
              T = -1,
              C = 0,
              U = 0,
              G = t,
              D = null;
            e: for (;;) {
              for (
                var V;
                G !== n || (l !== 0 && G.nodeType !== 3) || (v = h + l),
                  G !== r || (s !== 0 && G.nodeType !== 3) || (T = h + s),
                  G.nodeType === 3 && (h += G.nodeValue.length),
                  (V = G.firstChild) !== null;
              )
                ((D = G), (G = V));
              for (;;) {
                if (G === t) break e;
                if (
                  (D === n && ++C === l && (v = h),
                  D === r && ++U === s && (T = h),
                  (V = G.nextSibling) !== null)
                )
                  break;
                ((G = D), (D = G.parentNode));
              }
              G = V;
            }
            n = v === -1 || T === -1 ? null : { start: v, end: T };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      Lr = { focusedElem: t, selectionRange: n }, $l = !1, te = e;
      te !== null;
    )
      if (
        ((e = te), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)
      )
        ((t.return = e), (te = t));
      else
        for (; te !== null;) {
          switch (((e = te), (r = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              if (
                (t & 4) !== 0 &&
                ((t = e.updateQueue),
                (t = t !== null ? t.events : null),
                t !== null)
              )
                for (n = 0; n < t.length; n++)
                  ((l = t[n]), (l.ref.impl = l.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && r !== null) {
                ((t = void 0),
                  (n = e),
                  (l = r.memoizedProps),
                  (r = r.memoizedState),
                  (s = n.stateNode));
                try {
                  var I = ga(n.type, l);
                  ((t = s.getSnapshotBeforeUpdate(I, r)),
                    (s.__reactInternalSnapshotBeforeUpdate = t));
                } catch (it) {
                  Nt(n, n.return, it);
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (
                  ((t = e.stateNode.containerInfo), (n = t.nodeType), n === 9)
                )
                  qr(t);
                else if (n === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      qr(t);
                      break;
                    default:
                      t.textContent = "";
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
              if ((t & 1024) !== 0) throw Error(c(163));
          }
          if (((t = e.sibling), t !== null)) {
            ((t.return = e.return), (te = t));
            break;
          }
          te = e.return;
        }
  }
  function rp(t, e, n) {
    var s = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        (xn(t, n), s & 4 && ei(5, n));
        break;
      case 1:
        if ((xn(t, n), s & 4))
          if (((t = n.stateNode), e === null))
            try {
              t.componentDidMount();
            } catch (h) {
              Nt(n, n.return, h);
            }
          else {
            var l = ga(n.type, e.memoizedProps);
            e = e.memoizedState;
            try {
              t.componentDidUpdate(l, e, t.__reactInternalSnapshotBeforeUpdate);
            } catch (h) {
              Nt(n, n.return, h);
            }
          }
        (s & 64 && ap(n), s & 512 && ni(n, n.return));
        break;
      case 3:
        if ((xn(t, n), s & 64 && ((t = n.updateQueue), t !== null))) {
          if (((e = null), n.child !== null))
            switch (n.child.tag) {
              case 27:
              case 5:
                e = n.child.stateNode;
                break;
              case 1:
                e = n.child.stateNode;
            }
          try {
            Kd(t, e);
          } catch (h) {
            Nt(n, n.return, h);
          }
        }
        break;
      case 27:
        e === null && s & 4 && op(n);
      case 26:
      case 5:
        (xn(t, n), e === null && s & 4 && ip(n), s & 512 && ni(n, n.return));
        break;
      case 12:
        xn(t, n);
        break;
      case 31:
        (xn(t, n), s & 4 && dp(t, n));
        break;
      case 13:
        (xn(t, n),
          s & 4 && hp(t, n),
          s & 64 &&
            ((t = n.memoizedState),
            t !== null &&
              ((t = t.dehydrated),
              t !== null && ((n = Ov.bind(null, n)), Wv(t, n)))));
        break;
      case 22:
        if (((s = n.memoizedState !== null || gn), !s)) {
          ((e = (e !== null && e.memoizedState !== null) || Jt), (l = gn));
          var r = Jt;
          ((gn = s),
            (Jt = e) && !r ? An(t, n, (n.subtreeFlags & 8772) !== 0) : xn(t, n),
            (gn = l),
            (Jt = r));
        }
        break;
      case 30:
        break;
      default:
        xn(t, n);
    }
  }
  function up(t) {
    var e = t.alternate;
    (e !== null && ((t.alternate = null), up(e)),
      (t.child = null),
      (t.deletions = null),
      (t.sibling = null),
      t.tag === 5 && ((e = t.stateNode), e !== null && Zo(e)),
      (t.stateNode = null),
      (t.return = null),
      (t.dependencies = null),
      (t.memoizedProps = null),
      (t.memoizedState = null),
      (t.pendingProps = null),
      (t.stateNode = null),
      (t.updateQueue = null));
  }
  var Lt = null,
    me = !1;
  function vn(t, e, n) {
    for (n = n.child; n !== null;) (fp(t, e, n), (n = n.sibling));
  }
  function fp(t, e, n) {
    if (be && typeof be.onCommitFiberUnmount == "function")
      try {
        be.onCommitFiberUnmount(Ms, n);
      } catch {}
    switch (n.tag) {
      case 26:
        (Jt || Ie(n, e),
          vn(t, e, n),
          n.memoizedState
            ? n.memoizedState.count--
            : n.stateNode && ((n = n.stateNode), n.parentNode.removeChild(n)));
        break;
      case 27:
        Jt || Ie(n, e);
        var s = Lt,
          l = me;
        (Xn(n.type) && ((Lt = n.stateNode), (me = !1)),
          vn(t, e, n),
          fi(n.stateNode),
          (Lt = s),
          (me = l));
        break;
      case 5:
        Jt || Ie(n, e);
      case 6:
        if (
          ((s = Lt),
          (l = me),
          (Lt = null),
          vn(t, e, n),
          (Lt = s),
          (me = l),
          Lt !== null)
        )
          if (me)
            try {
              (Lt.nodeType === 9
                ? Lt.body
                : Lt.nodeName === "HTML"
                  ? Lt.ownerDocument.body
                  : Lt
              ).removeChild(n.stateNode);
            } catch (r) {
              Nt(n, e, r);
            }
          else
            try {
              Lt.removeChild(n.stateNode);
            } catch (r) {
              Nt(n, e, r);
            }
        break;
      case 18:
        Lt !== null &&
          (me
            ? ((t = Lt),
              am(
                t.nodeType === 9
                  ? t.body
                  : t.nodeName === "HTML"
                    ? t.ownerDocument.body
                    : t,
                n.stateNode,
              ),
              fs(t))
            : am(Lt, n.stateNode));
        break;
      case 4:
        ((s = Lt),
          (l = me),
          (Lt = n.stateNode.containerInfo),
          (me = !0),
          vn(t, e, n),
          (Lt = s),
          (me = l));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (Bn(2, n, e), Jt || Bn(4, n, e), vn(t, e, n));
        break;
      case 1:
        (Jt ||
          (Ie(n, e),
          (s = n.stateNode),
          typeof s.componentWillUnmount == "function" && sp(n, e, s)),
          vn(t, e, n));
        break;
      case 21:
        vn(t, e, n);
        break;
      case 22:
        ((Jt = (s = Jt) || n.memoizedState !== null), vn(t, e, n), (Jt = s));
        break;
      default:
        vn(t, e, n);
    }
  }
  function dp(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null))
    ) {
      t = t.dehydrated;
      try {
        fs(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
    }
  }
  function hp(t, e) {
    if (
      e.memoizedState === null &&
      ((t = e.alternate),
      t !== null &&
        ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null)))
    )
      try {
        fs(t);
      } catch (n) {
        Nt(e, e.return, n);
      }
  }
  function jv(t) {
    switch (t.tag) {
      case 31:
      case 13:
      case 19:
        var e = t.stateNode;
        return (e === null && (e = t.stateNode = new cp()), e);
      case 22:
        return (
          (t = t.stateNode),
          (e = t._retryCache),
          e === null && (e = t._retryCache = new cp()),
          e
        );
      default:
        throw Error(c(435, t.tag));
    }
  }
  function Dl(t, e) {
    var n = jv(t);
    e.forEach(function (s) {
      if (!n.has(s)) {
        n.add(s);
        var l = wv.bind(null, t, s);
        s.then(l, l);
      }
    });
  }
  function ye(t, e) {
    var n = e.deletions;
    if (n !== null)
      for (var s = 0; s < n.length; s++) {
        var l = n[s],
          r = t,
          h = e,
          v = h;
        t: for (; v !== null;) {
          switch (v.tag) {
            case 27:
              if (Xn(v.type)) {
                ((Lt = v.stateNode), (me = !1));
                break t;
              }
              break;
            case 5:
              ((Lt = v.stateNode), (me = !1));
              break t;
            case 3:
            case 4:
              ((Lt = v.stateNode.containerInfo), (me = !0));
              break t;
          }
          v = v.return;
        }
        if (Lt === null) throw Error(c(160));
        (fp(r, h, l),
          (Lt = null),
          (me = !1),
          (r = l.alternate),
          r !== null && (r.return = null),
          (l.return = null));
      }
    if (e.subtreeFlags & 13886)
      for (e = e.child; e !== null;) (pp(e, t), (e = e.sibling));
  }
  var Qe = null;
  function pp(t, e) {
    var n = t.alternate,
      s = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (ye(e, t),
          ge(t),
          s & 4 && (Bn(3, t, t.return), ei(3, t), Bn(5, t, t.return)));
        break;
      case 1:
        (ye(e, t),
          ge(t),
          s & 512 && (Jt || n === null || Ie(n, n.return)),
          s & 64 &&
            gn &&
            ((t = t.updateQueue),
            t !== null &&
              ((s = t.callbacks),
              s !== null &&
                ((n = t.shared.hiddenCallbacks),
                (t.shared.hiddenCallbacks = n === null ? s : n.concat(s))))));
        break;
      case 26:
        var l = Qe;
        if (
          (ye(e, t),
          ge(t),
          s & 512 && (Jt || n === null || Ie(n, n.return)),
          s & 4)
        ) {
          var r = n !== null ? n.memoizedState : null;
          if (((s = t.memoizedState), n === null))
            if (s === null)
              if (t.stateNode === null) {
                t: {
                  ((s = t.type),
                    (n = t.memoizedProps),
                    (l = l.ownerDocument || l));
                  e: switch (s) {
                    case "title":
                      ((r = l.getElementsByTagName("title")[0]),
                        (!r ||
                          r[Cs] ||
                          r[ee] ||
                          r.namespaceURI === "http://www.w3.org/2000/svg" ||
                          r.hasAttribute("itemprop")) &&
                          ((r = l.createElement(s)),
                          l.head.insertBefore(
                            r,
                            l.querySelector("head > title"),
                          )),
                        ie(r, s, n),
                        (r[ee] = t),
                        It(r),
                        (s = r));
                      break t;
                    case "link":
                      var h = pm("link", "href", l).get(s + (n.href || ""));
                      if (h) {
                        for (var v = 0; v < h.length; v++)
                          if (
                            ((r = h[v]),
                            r.getAttribute("href") ===
                              (n.href == null || n.href === ""
                                ? null
                                : n.href) &&
                              r.getAttribute("rel") ===
                                (n.rel == null ? null : n.rel) &&
                              r.getAttribute("title") ===
                                (n.title == null ? null : n.title) &&
                              r.getAttribute("crossorigin") ===
                                (n.crossOrigin == null ? null : n.crossOrigin))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      ((r = l.createElement(s)),
                        ie(r, s, n),
                        l.head.appendChild(r));
                      break;
                    case "meta":
                      if (
                        (h = pm("meta", "content", l).get(
                          s + (n.content || ""),
                        ))
                      ) {
                        for (v = 0; v < h.length; v++)
                          if (
                            ((r = h[v]),
                            r.getAttribute("content") ===
                              (n.content == null ? null : "" + n.content) &&
                              r.getAttribute("name") ===
                                (n.name == null ? null : n.name) &&
                              r.getAttribute("property") ===
                                (n.property == null ? null : n.property) &&
                              r.getAttribute("http-equiv") ===
                                (n.httpEquiv == null ? null : n.httpEquiv) &&
                              r.getAttribute("charset") ===
                                (n.charSet == null ? null : n.charSet))
                          ) {
                            h.splice(v, 1);
                            break e;
                          }
                      }
                      ((r = l.createElement(s)),
                        ie(r, s, n),
                        l.head.appendChild(r));
                      break;
                    default:
                      throw Error(c(468, s));
                  }
                  ((r[ee] = t), It(r), (s = r));
                }
                t.stateNode = s;
              } else mm(l, t.type, t.stateNode);
            else t.stateNode = hm(l, s, t.memoizedProps);
          else
            r !== s
              ? (r === null
                  ? n.stateNode !== null &&
                    ((n = n.stateNode), n.parentNode.removeChild(n))
                  : r.count--,
                s === null
                  ? mm(l, t.type, t.stateNode)
                  : hm(l, s, t.memoizedProps))
              : s === null &&
                t.stateNode !== null &&
                hr(t, t.memoizedProps, n.memoizedProps);
        }
        break;
      case 27:
        (ye(e, t),
          ge(t),
          s & 512 && (Jt || n === null || Ie(n, n.return)),
          n !== null && s & 4 && hr(t, t.memoizedProps, n.memoizedProps));
        break;
      case 5:
        if (
          (ye(e, t),
          ge(t),
          s & 512 && (Jt || n === null || Ie(n, n.return)),
          t.flags & 32)
        ) {
          l = t.stateNode;
          try {
            Va(l, "");
          } catch (I) {
            Nt(t, t.return, I);
          }
        }
        (s & 4 &&
          t.stateNode != null &&
          ((l = t.memoizedProps), hr(t, l, n !== null ? n.memoizedProps : l)),
          s & 1024 && (yr = !0));
        break;
      case 6:
        if ((ye(e, t), ge(t), s & 4)) {
          if (t.stateNode === null) throw Error(c(162));
          ((s = t.memoizedProps), (n = t.stateNode));
          try {
            n.nodeValue = s;
          } catch (I) {
            Nt(t, t.return, I);
          }
        }
        break;
      case 3:
        if (
          ((Zl = null),
          (l = Qe),
          (Qe = Xl(e.containerInfo)),
          ye(e, t),
          (Qe = l),
          ge(t),
          s & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            fs(e.containerInfo);
          } catch (I) {
            Nt(t, t.return, I);
          }
        yr && ((yr = !1), mp(t));
        break;
      case 4:
        ((s = Qe),
          (Qe = Xl(t.stateNode.containerInfo)),
          ye(e, t),
          ge(t),
          (Qe = s));
        break;
      case 12:
        (ye(e, t), ge(t));
        break;
      case 31:
        (ye(e, t),
          ge(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Dl(t, s))));
        break;
      case 13:
        (ye(e, t),
          ge(t),
          t.child.flags & 8192 &&
            (t.memoizedState !== null) !=
              (n !== null && n.memoizedState !== null) &&
            (Ol = Ae()),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Dl(t, s))));
        break;
      case 22:
        l = t.memoizedState !== null;
        var T = n !== null && n.memoizedState !== null,
          C = gn,
          U = Jt;
        if (
          ((gn = C || l),
          (Jt = U || T),
          ye(e, t),
          (Jt = U),
          (gn = C),
          ge(t),
          s & 8192)
        )
          t: for (
            e = t.stateNode,
              e._visibility = l ? e._visibility & -2 : e._visibility | 1,
              l && (n === null || T || gn || Jt || va(t)),
              n = null,
              e = t;
            ;
          ) {
            if (e.tag === 5 || e.tag === 26) {
              if (n === null) {
                T = n = e;
                try {
                  if (((r = T.stateNode), l))
                    ((h = r.style),
                      typeof h.setProperty == "function"
                        ? h.setProperty("display", "none", "important")
                        : (h.display = "none"));
                  else {
                    v = T.stateNode;
                    var G = T.memoizedProps.style,
                      D =
                        G != null && G.hasOwnProperty("display")
                          ? G.display
                          : null;
                    v.style.display =
                      D == null || typeof D == "boolean" ? "" : ("" + D).trim();
                  }
                } catch (I) {
                  Nt(T, T.return, I);
                }
              }
            } else if (e.tag === 6) {
              if (n === null) {
                T = e;
                try {
                  T.stateNode.nodeValue = l ? "" : T.memoizedProps;
                } catch (I) {
                  Nt(T, T.return, I);
                }
              }
            } else if (e.tag === 18) {
              if (n === null) {
                T = e;
                try {
                  var V = T.stateNode;
                  l ? sm(V, !0) : sm(T.stateNode, !1);
                } catch (I) {
                  Nt(T, T.return, I);
                }
              }
            } else if (
              ((e.tag !== 22 && e.tag !== 23) ||
                e.memoizedState === null ||
                e === t) &&
              e.child !== null
            ) {
              ((e.child.return = e), (e = e.child));
              continue;
            }
            if (e === t) break t;
            for (; e.sibling === null;) {
              if (e.return === null || e.return === t) break t;
              (n === e && (n = null), (e = e.return));
            }
            (n === e && (n = null),
              (e.sibling.return = e.return),
              (e = e.sibling));
          }
        s & 4 &&
          ((s = t.updateQueue),
          s !== null &&
            ((n = s.retryQueue),
            n !== null && ((s.retryQueue = null), Dl(t, n))));
        break;
      case 19:
        (ye(e, t),
          ge(t),
          s & 4 &&
            ((s = t.updateQueue),
            s !== null && ((t.updateQueue = null), Dl(t, s))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (ye(e, t), ge(t));
    }
  }
  function ge(t) {
    var e = t.flags;
    if (e & 2) {
      try {
        for (var n, s = t.return; s !== null;) {
          if (lp(s)) {
            n = s;
            break;
          }
          s = s.return;
        }
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var l = n.stateNode,
              r = pr(t);
            Cl(t, r, l);
            break;
          case 5:
            var h = n.stateNode;
            n.flags & 32 && (Va(h, ""), (n.flags &= -33));
            var v = pr(t);
            Cl(t, v, h);
            break;
          case 3:
          case 4:
            var T = n.stateNode.containerInfo,
              C = pr(t);
            mr(t, C, T);
            break;
          default:
            throw Error(c(161));
        }
      } catch (U) {
        Nt(t, t.return, U);
      }
      t.flags &= -3;
    }
    e & 4096 && (t.flags &= -4097);
  }
  function mp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var e = t;
        (mp(e),
          e.tag === 5 && e.flags & 1024 && e.stateNode.reset(),
          (t = t.sibling));
      }
  }
  function xn(t, e) {
    if (e.subtreeFlags & 8772)
      for (e = e.child; e !== null;) (rp(t, e.alternate, e), (e = e.sibling));
  }
  function va(t) {
    for (t = t.child; t !== null;) {
      var e = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (Bn(4, e, e.return), va(e));
          break;
        case 1:
          Ie(e, e.return);
          var n = e.stateNode;
          (typeof n.componentWillUnmount == "function" && sp(e, e.return, n),
            va(e));
          break;
        case 27:
          fi(e.stateNode);
        case 26:
        case 5:
          (Ie(e, e.return), va(e));
          break;
        case 22:
          e.memoizedState === null && va(e);
          break;
        case 30:
          va(e);
          break;
        default:
          va(e);
      }
      t = t.sibling;
    }
  }
  function An(t, e, n) {
    for (n = n && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null;) {
      var s = e.alternate,
        l = t,
        r = e,
        h = r.flags;
      switch (r.tag) {
        case 0:
        case 11:
        case 15:
          (An(l, r, n), ei(4, r));
          break;
        case 1:
          if (
            (An(l, r, n),
            (s = r),
            (l = s.stateNode),
            typeof l.componentDidMount == "function")
          )
            try {
              l.componentDidMount();
            } catch (C) {
              Nt(s, s.return, C);
            }
          if (((s = r), (l = s.updateQueue), l !== null)) {
            var v = s.stateNode;
            try {
              var T = l.shared.hiddenCallbacks;
              if (T !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < T.length; l++)
                  Zd(T[l], v);
            } catch (C) {
              Nt(s, s.return, C);
            }
          }
          (n && h & 64 && ap(r), ni(r, r.return));
          break;
        case 27:
          op(r);
        case 26:
        case 5:
          (An(l, r, n), n && s === null && h & 4 && ip(r), ni(r, r.return));
          break;
        case 12:
          An(l, r, n);
          break;
        case 31:
          (An(l, r, n), n && h & 4 && dp(l, r));
          break;
        case 13:
          (An(l, r, n), n && h & 4 && hp(l, r));
          break;
        case 22:
          (r.memoizedState === null && An(l, r, n), ni(r, r.return));
          break;
        case 30:
          break;
        default:
          An(l, r, n);
      }
      e = e.sibling;
    }
  }
  function gr(t, e) {
    var n = null;
    (t !== null &&
      t.memoizedState !== null &&
      t.memoizedState.cachePool !== null &&
      (n = t.memoizedState.cachePool.pool),
      (t = null),
      e.memoizedState !== null &&
        e.memoizedState.cachePool !== null &&
        (t = e.memoizedState.cachePool.pool),
      t !== n && (t != null && t.refCount++, n != null && ks(n)));
  }
  function vr(t, e) {
    ((t = null),
      e.alternate !== null && (t = e.alternate.memoizedState.cache),
      (e = e.memoizedState.cache),
      e !== t && (e.refCount++, t != null && ks(t)));
  }
  function Ze(t, e, n, s) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) (yp(t, e, n, s), (e = e.sibling));
  }
  function yp(t, e, n, s) {
    var l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        (Ze(t, e, n, s), l & 2048 && ei(9, e));
        break;
      case 1:
        Ze(t, e, n, s);
        break;
      case 3:
        (Ze(t, e, n, s),
          l & 2048 &&
            ((t = null),
            e.alternate !== null && (t = e.alternate.memoizedState.cache),
            (e = e.memoizedState.cache),
            e !== t && (e.refCount++, t != null && ks(t))));
        break;
      case 12:
        if (l & 2048) {
          (Ze(t, e, n, s), (t = e.stateNode));
          try {
            var r = e.memoizedProps,
              h = r.id,
              v = r.onPostCommit;
            typeof v == "function" &&
              v(
                h,
                e.alternate === null ? "mount" : "update",
                t.passiveEffectDuration,
                -0,
              );
          } catch (T) {
            Nt(e, e.return, T);
          }
        } else Ze(t, e, n, s);
        break;
      case 31:
        Ze(t, e, n, s);
        break;
      case 13:
        Ze(t, e, n, s);
        break;
      case 23:
        break;
      case 22:
        ((r = e.stateNode),
          (h = e.alternate),
          e.memoizedState !== null
            ? r._visibility & 2
              ? Ze(t, e, n, s)
              : ai(t, e)
            : r._visibility & 2
              ? Ze(t, e, n, s)
              : ((r._visibility |= 2),
                ts(t, e, n, s, (e.subtreeFlags & 10256) !== 0 || !1)),
          l & 2048 && gr(h, e));
        break;
      case 24:
        (Ze(t, e, n, s), l & 2048 && vr(e.alternate, e));
        break;
      default:
        Ze(t, e, n, s);
    }
  }
  function ts(t, e, n, s, l) {
    for (
      l = l && ((e.subtreeFlags & 10256) !== 0 || !1), e = e.child;
      e !== null;
    ) {
      var r = t,
        h = e,
        v = n,
        T = s,
        C = h.flags;
      switch (h.tag) {
        case 0:
        case 11:
        case 15:
          (ts(r, h, v, T, l), ei(8, h));
          break;
        case 23:
          break;
        case 22:
          var U = h.stateNode;
          (h.memoizedState !== null
            ? U._visibility & 2
              ? ts(r, h, v, T, l)
              : ai(r, h)
            : ((U._visibility |= 2), ts(r, h, v, T, l)),
            l && C & 2048 && gr(h.alternate, h));
          break;
        case 24:
          (ts(r, h, v, T, l), l && C & 2048 && vr(h.alternate, h));
          break;
        default:
          ts(r, h, v, T, l);
      }
      e = e.sibling;
    }
  }
  function ai(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null;) {
        var n = t,
          s = e,
          l = s.flags;
        switch (s.tag) {
          case 22:
            (ai(n, s), l & 2048 && gr(s.alternate, s));
            break;
          case 24:
            (ai(n, s), l & 2048 && vr(s.alternate, s));
            break;
          default:
            ai(n, s);
        }
        e = e.sibling;
      }
  }
  var si = 8192;
  function es(t, e, n) {
    if (t.subtreeFlags & si)
      for (t = t.child; t !== null;) (gp(t, e, n), (t = t.sibling));
  }
  function gp(t, e, n) {
    switch (t.tag) {
      case 26:
        (es(t, e, n),
          t.flags & si &&
            t.memoizedState !== null &&
            ux(n, Qe, t.memoizedState, t.memoizedProps));
        break;
      case 5:
        es(t, e, n);
        break;
      case 3:
      case 4:
        var s = Qe;
        ((Qe = Xl(t.stateNode.containerInfo)), es(t, e, n), (Qe = s));
        break;
      case 22:
        t.memoizedState === null &&
          ((s = t.alternate),
          s !== null && s.memoizedState !== null
            ? ((s = si), (si = 16777216), es(t, e, n), (si = s))
            : es(t, e, n));
        break;
      default:
        es(t, e, n);
    }
  }
  function vp(t) {
    var e = t.alternate;
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null;
      do ((e = t.sibling), (t.sibling = null), (t = e));
      while (t !== null);
    }
  }
  function ii(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          ((te = s), Ap(s, t));
        }
      vp(t);
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;) (xp(t), (t = t.sibling));
  }
  function xp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (ii(t), t.flags & 2048 && Bn(9, t, t.return));
        break;
      case 3:
        ii(t);
        break;
      case 12:
        ii(t);
        break;
      case 22:
        var e = t.stateNode;
        t.memoizedState !== null &&
        e._visibility & 2 &&
        (t.return === null || t.return.tag !== 13)
          ? ((e._visibility &= -3), Rl(t))
          : ii(t);
        break;
      default:
        ii(t);
    }
  }
  function Rl(t) {
    var e = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (e !== null)
        for (var n = 0; n < e.length; n++) {
          var s = e[n];
          ((te = s), Ap(s, t));
        }
      vp(t);
    }
    for (t = t.child; t !== null;) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          (Bn(8, e, e.return), Rl(e));
          break;
        case 22:
          ((n = e.stateNode),
            n._visibility & 2 && ((n._visibility &= -3), Rl(e)));
          break;
        default:
          Rl(e);
      }
      t = t.sibling;
    }
  }
  function Ap(t, e) {
    for (; te !== null;) {
      var n = te;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Bn(8, n, e);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var s = n.memoizedState.cachePool.pool;
            s != null && s.refCount++;
          }
          break;
        case 24:
          ks(n.memoizedState.cache);
      }
      if (((s = n.child), s !== null)) ((s.return = n), (te = s));
      else
        t: for (n = t; te !== null;) {
          s = te;
          var l = s.sibling,
            r = s.return;
          if ((up(s), s === n)) {
            te = null;
            break t;
          }
          if (l !== null) {
            ((l.return = r), (te = l));
            break t;
          }
          te = r;
        }
    }
  }
  var Ev = {
      getCacheForType: function (t) {
        var e = ae(Qt),
          n = e.data.get(t);
        return (n === void 0 && ((n = t()), e.data.set(t, n)), n);
      },
      cacheSignal: function () {
        return ae(Qt).controller.signal;
      },
    },
    Mv = typeof WeakMap == "function" ? WeakMap : Map,
    jt = 0,
    wt = null,
    gt = null,
    xt = 0,
    zt = 0,
    ze = null,
    Ln = !1,
    ns = !1,
    xr = !1,
    bn = 0,
    Gt = 0,
    Hn = 0,
    xa = 0,
    Ar = 0,
    Ne = 0,
    as = 0,
    li = null,
    ve = null,
    br = !1,
    Ol = 0,
    bp = 0,
    wl = 1 / 0,
    Vl = null,
    Gn = null,
    Pt = 0,
    qn = null,
    ss = null,
    Sn = 0,
    Sr = 0,
    Tr = null,
    Sp = null,
    oi = 0,
    jr = null;
  function Ce() {
    return (jt & 2) !== 0 && xt !== 0 ? xt & -xt : _.T !== null ? Dr() : Lf();
  }
  function Tp() {
    if (Ne === 0)
      if ((xt & 536870912) === 0 || bt) {
        var t = ki;
        ((ki <<= 1), (ki & 3932160) === 0 && (ki = 262144), (Ne = t));
      } else Ne = 536870912;
    return ((t = Ee.current), t !== null && (t.flags |= 32), Ne);
  }
  function xe(t, e, n) {
    (((t === wt && (zt === 2 || zt === 9)) || t.cancelPendingCommit !== null) &&
      (is(t, 0), kn(t, xt, Ne, !1)),
      Ns(t, n),
      ((jt & 2) === 0 || t !== wt) &&
        (t === wt &&
          ((jt & 2) === 0 && (xa |= n), Gt === 4 && kn(t, xt, Ne, !1)),
        tn(t)));
  }
  function jp(t, e, n) {
    if ((jt & 6) !== 0) throw Error(c(327));
    var s = (!n && (e & 127) === 0 && (e & t.expiredLanes) === 0) || zs(t, e),
      l = s ? Cv(t, e) : Mr(t, e, !0),
      r = s;
    do {
      if (l === 0) {
        ns && !s && kn(t, e, 0, !1);
        break;
      } else {
        if (((n = t.current.alternate), r && !zv(n))) {
          ((l = Mr(t, e, !1)), (r = !1));
          continue;
        }
        if (l === 2) {
          if (((r = e), t.errorRecoveryDisabledLanes & r)) var h = 0;
          else
            ((h = t.pendingLanes & -536870913),
              (h = h !== 0 ? h : h & 536870912 ? 536870912 : 0));
          if (h !== 0) {
            e = h;
            t: {
              var v = t;
              l = li;
              var T = v.current.memoizedState.isDehydrated;
              if ((T && (is(v, h).flags |= 256), (h = Mr(v, h, !1)), h !== 2)) {
                if (xr && !T) {
                  ((v.errorRecoveryDisabledLanes |= r), (xa |= r), (l = 4));
                  break t;
                }
                ((r = ve),
                  (ve = l),
                  r !== null &&
                    (ve === null ? (ve = r) : ve.push.apply(ve, r)));
              }
              l = h;
            }
            if (((r = !1), l !== 2)) continue;
          }
        }
        if (l === 1) {
          (is(t, 0), kn(t, e, 0, !0));
          break;
        }
        t: {
          switch (((s = t), (r = l), r)) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((e & 4194048) !== e) break;
            case 6:
              kn(s, e, Ne, !Ln);
              break t;
            case 2:
              ve = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((e & 62914560) === e && ((l = Ol + 300 - Ae()), 10 < l)) {
            if ((kn(s, e, Ne, !Ln), Xi(s, 0, !0) !== 0)) break t;
            ((Sn = e),
              (s.timeoutHandle = em(
                Ep.bind(
                  null,
                  s,
                  n,
                  ve,
                  Vl,
                  br,
                  e,
                  Ne,
                  xa,
                  as,
                  Ln,
                  r,
                  "Throttled",
                  -0,
                  0,
                ),
                l,
              )));
            break t;
          }
          Ep(s, n, ve, Vl, br, e, Ne, xa, as, Ln, r, null, -0, 0);
        }
      }
      break;
    } while (!0);
    tn(t);
  }
  function Ep(t, e, n, s, l, r, h, v, T, C, U, G, D, V) {
    if (
      ((t.timeoutHandle = -1),
      (G = e.subtreeFlags),
      G & 8192 || (G & 16785408) === 16785408)
    ) {
      ((G = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: on,
      }),
        gp(e, r, G));
      var I =
        (r & 62914560) === r ? Ol - Ae() : (r & 4194048) === r ? bp - Ae() : 0;
      if (((I = fx(G, I)), I !== null)) {
        ((Sn = r),
          (t.cancelPendingCommit = I(
            wp.bind(null, t, e, r, n, s, l, h, v, T, U, G, null, D, V),
          )),
          kn(t, r, h, !C));
        return;
      }
    }
    wp(t, e, r, n, s, l, h, v, T);
  }
  function zv(t) {
    for (var e = t; ;) {
      var n = e.tag;
      if (
        (n === 0 || n === 11 || n === 15) &&
        e.flags & 16384 &&
        ((n = e.updateQueue), n !== null && ((n = n.stores), n !== null))
      )
        for (var s = 0; s < n.length; s++) {
          var l = n[s],
            r = l.getSnapshot;
          l = l.value;
          try {
            if (!Te(r(), l)) return !1;
          } catch {
            return !1;
          }
        }
      if (((n = e.child), e.subtreeFlags & 16384 && n !== null))
        ((n.return = e), (e = n));
      else {
        if (e === t) break;
        for (; e.sibling === null;) {
          if (e.return === null || e.return === t) return !0;
          e = e.return;
        }
        ((e.sibling.return = e.return), (e = e.sibling));
      }
    }
    return !0;
  }
  function kn(t, e, n, s) {
    ((e &= ~Ar),
      (e &= ~xa),
      (t.suspendedLanes |= e),
      (t.pingedLanes &= ~e),
      s && (t.warmLanes |= e),
      (s = t.expirationTimes));
    for (var l = e; 0 < l;) {
      var r = 31 - Se(l),
        h = 1 << r;
      ((s[r] = -1), (l &= ~h));
    }
    n !== 0 && _f(t, n, e);
  }
  function _l() {
    return (jt & 6) === 0 ? (ci(0), !1) : !0;
  }
  function Er() {
    if (gt !== null) {
      if (zt === 0) var t = gt.return;
      else ((t = gt), (fn = ua = null), qc(t), (Fa = null), (Xs = 0), (t = gt));
      for (; t !== null;) (np(t.alternate, t), (t = t.return));
      gt = null;
    }
  }
  function is(t, e) {
    var n = t.timeoutHandle;
    (n !== -1 && ((t.timeoutHandle = -1), Kv(n)),
      (n = t.cancelPendingCommit),
      n !== null && ((t.cancelPendingCommit = null), n()),
      (Sn = 0),
      Er(),
      (wt = t),
      (gt = n = rn(t.current, null)),
      (xt = e),
      (zt = 0),
      (ze = null),
      (Ln = !1),
      (ns = zs(t, e)),
      (xr = !1),
      (as = Ne = Ar = xa = Hn = Gt = 0),
      (ve = li = null),
      (br = !1),
      (e & 8) !== 0 && (e |= e & 32));
    var s = t.entangledLanes;
    if (s !== 0)
      for (t = t.entanglements, s &= e; 0 < s;) {
        var l = 31 - Se(s),
          r = 1 << l;
        ((e |= t[l]), (s &= ~r));
      }
    return ((bn = e), nl(), n);
  }
  function Mp(t, e) {
    ((dt = null),
      (_.H = Ws),
      e === Ja || e === ul
        ? ((e = kd()), (zt = 3))
        : e === Cc
          ? ((e = kd()), (zt = 4))
          : (zt =
              e === ar
                ? 8
                : e !== null &&
                    typeof e == "object" &&
                    typeof e.then == "function"
                  ? 6
                  : 1),
      (ze = e),
      gt === null && ((Gt = 1), jl(t, _e(e, t.current))));
  }
  function zp() {
    var t = Ee.current;
    return t === null
      ? !0
      : (xt & 4194048) === xt
        ? He === null
        : (xt & 62914560) === xt || (xt & 536870912) !== 0
          ? t === He
          : !1;
  }
  function Np() {
    var t = _.H;
    return ((_.H = Ws), t === null ? Ws : t);
  }
  function Cp() {
    var t = _.A;
    return ((_.A = Ev), t);
  }
  function Ul() {
    ((Gt = 4),
      Ln || ((xt & 4194048) !== xt && Ee.current !== null) || (ns = !0),
      ((Hn & 134217727) === 0 && (xa & 134217727) === 0) ||
        wt === null ||
        kn(wt, xt, Ne, !1));
  }
  function Mr(t, e, n) {
    var s = jt;
    jt |= 2;
    var l = Np(),
      r = Cp();
    ((wt !== t || xt !== e) && ((Vl = null), is(t, e)), (e = !1));
    var h = Gt;
    t: do
      try {
        if (zt !== 0 && gt !== null) {
          var v = gt,
            T = ze;
          switch (zt) {
            case 8:
              (Er(), (h = 6));
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              Ee.current === null && (e = !0);
              var C = zt;
              if (((zt = 0), (ze = null), ls(t, v, T, C), n && ns)) {
                h = 0;
                break t;
              }
              break;
            default:
              ((C = zt), (zt = 0), (ze = null), ls(t, v, T, C));
          }
        }
        (Nv(), (h = Gt));
        break;
      } catch (U) {
        Mp(t, U);
      }
    while (!0);
    return (
      e && t.shellSuspendCounter++,
      (fn = ua = null),
      (jt = s),
      (_.H = l),
      (_.A = r),
      gt === null && ((wt = null), (xt = 0), nl()),
      h
    );
  }
  function Nv() {
    for (; gt !== null;) Dp(gt);
  }
  function Cv(t, e) {
    var n = jt;
    jt |= 2;
    var s = Np(),
      l = Cp();
    wt !== t || xt !== e
      ? ((Vl = null), (wl = Ae() + 500), is(t, e))
      : (ns = zs(t, e));
    t: do
      try {
        if (zt !== 0 && gt !== null) {
          e = gt;
          var r = ze;
          e: switch (zt) {
            case 1:
              ((zt = 0), (ze = null), ls(t, e, r, 1));
              break;
            case 2:
            case 9:
              if (Gd(r)) {
                ((zt = 0), (ze = null), Rp(e));
                break;
              }
              ((e = function () {
                ((zt !== 2 && zt !== 9) || wt !== t || (zt = 7), tn(t));
              }),
                r.then(e, e));
              break t;
            case 3:
              zt = 7;
              break t;
            case 4:
              zt = 5;
              break t;
            case 7:
              Gd(r)
                ? ((zt = 0), (ze = null), Rp(e))
                : ((zt = 0), (ze = null), ls(t, e, r, 7));
              break;
            case 5:
              var h = null;
              switch (gt.tag) {
                case 26:
                  h = gt.memoizedState;
                case 5:
                case 27:
                  var v = gt;
                  if (h ? ym(h) : v.stateNode.complete) {
                    ((zt = 0), (ze = null));
                    var T = v.sibling;
                    if (T !== null) gt = T;
                    else {
                      var C = v.return;
                      C !== null ? ((gt = C), Bl(C)) : (gt = null);
                    }
                    break e;
                  }
              }
              ((zt = 0), (ze = null), ls(t, e, r, 5));
              break;
            case 6:
              ((zt = 0), (ze = null), ls(t, e, r, 6));
              break;
            case 8:
              (Er(), (Gt = 6));
              break t;
            default:
              throw Error(c(462));
          }
        }
        Dv();
        break;
      } catch (U) {
        Mp(t, U);
      }
    while (!0);
    return (
      (fn = ua = null),
      (_.H = s),
      (_.A = l),
      (jt = n),
      gt !== null ? 0 : ((wt = null), (xt = 0), nl(), Gt)
    );
  }
  function Dv() {
    for (; gt !== null && !I0();) Dp(gt);
  }
  function Dp(t) {
    var e = tp(t.alternate, t, bn);
    ((t.memoizedProps = t.pendingProps), e === null ? Bl(t) : (gt = e));
  }
  function Rp(t) {
    var e = t,
      n = e.alternate;
    switch (e.tag) {
      case 15:
      case 0:
        e = Jh(n, e, e.pendingProps, e.type, void 0, xt);
        break;
      case 11:
        e = Jh(n, e, e.pendingProps, e.type.render, e.ref, xt);
        break;
      case 5:
        qc(e);
      default:
        (np(n, e), (e = gt = Cd(e, bn)), (e = tp(n, e, bn)));
    }
    ((t.memoizedProps = t.pendingProps), e === null ? Bl(t) : (gt = e));
  }
  function ls(t, e, n, s) {
    ((fn = ua = null), qc(e), (Fa = null), (Xs = 0));
    var l = e.return;
    try {
      if (vv(t, l, e, n, xt)) {
        ((Gt = 1), jl(t, _e(n, t.current)), (gt = null));
        return;
      }
    } catch (r) {
      if (l !== null) throw ((gt = l), r);
      ((Gt = 1), jl(t, _e(n, t.current)), (gt = null));
      return;
    }
    e.flags & 32768
      ? (bt || s === 1
          ? (t = !0)
          : ns || (xt & 536870912) !== 0
            ? (t = !1)
            : ((Ln = t = !0),
              (s === 2 || s === 9 || s === 3 || s === 6) &&
                ((s = Ee.current),
                s !== null && s.tag === 13 && (s.flags |= 16384))),
        Op(e, t))
      : Bl(e);
  }
  function Bl(t) {
    var e = t;
    do {
      if ((e.flags & 32768) !== 0) {
        Op(e, Ln);
        return;
      }
      t = e.return;
      var n = bv(e.alternate, e, bn);
      if (n !== null) {
        gt = n;
        return;
      }
      if (((e = e.sibling), e !== null)) {
        gt = e;
        return;
      }
      gt = e = t;
    } while (e !== null);
    Gt === 0 && (Gt = 5);
  }
  function Op(t, e) {
    do {
      var n = Sv(t.alternate, t);
      if (n !== null) {
        ((n.flags &= 32767), (gt = n));
        return;
      }
      if (
        ((n = t.return),
        n !== null &&
          ((n.flags |= 32768), (n.subtreeFlags = 0), (n.deletions = null)),
        !e && ((t = t.sibling), t !== null))
      ) {
        gt = t;
        return;
      }
      gt = t = n;
    } while (t !== null);
    ((Gt = 6), (gt = null));
  }
  function wp(t, e, n, s, l, r, h, v, T) {
    t.cancelPendingCommit = null;
    do Ll();
    while (Pt !== 0);
    if ((jt & 6) !== 0) throw Error(c(327));
    if (e !== null) {
      if (e === t.current) throw Error(c(177));
      if (
        ((r = e.lanes | e.childLanes),
        (r |= pc),
        rg(t, n, r, h, v, T),
        t === wt && ((gt = wt = null), (xt = 0)),
        (ss = e),
        (qn = t),
        (Sn = n),
        (Sr = r),
        (Tr = l),
        (Sp = s),
        (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
          ? ((t.callbackNode = null),
            (t.callbackPriority = 0),
            Vv(Gi, function () {
              return (Lp(), null);
            }))
          : ((t.callbackNode = null), (t.callbackPriority = 0)),
        (s = (e.flags & 13878) !== 0),
        (e.subtreeFlags & 13878) !== 0 || s)
      ) {
        ((s = _.T), (_.T = null), (l = K.p), (K.p = 2), (h = jt), (jt |= 4));
        try {
          Tv(t, e, n);
        } finally {
          ((jt = h), (K.p = l), (_.T = s));
        }
      }
      ((Pt = 1), Vp(), _p(), Up());
    }
  }
  function Vp() {
    if (Pt === 1) {
      Pt = 0;
      var t = qn,
        e = ss,
        n = (e.flags & 13878) !== 0;
      if ((e.subtreeFlags & 13878) !== 0 || n) {
        ((n = _.T), (_.T = null));
        var s = K.p;
        K.p = 2;
        var l = jt;
        jt |= 4;
        try {
          pp(e, t);
          var r = Lr,
            h = Ad(t.containerInfo),
            v = r.focusedElem,
            T = r.selectionRange;
          if (
            h !== v &&
            v &&
            v.ownerDocument &&
            xd(v.ownerDocument.documentElement, v)
          ) {
            if (T !== null && rc(v)) {
              var C = T.start,
                U = T.end;
              if ((U === void 0 && (U = C), "selectionStart" in v))
                ((v.selectionStart = C),
                  (v.selectionEnd = Math.min(U, v.value.length)));
              else {
                var G = v.ownerDocument || document,
                  D = (G && G.defaultView) || window;
                if (D.getSelection) {
                  var V = D.getSelection(),
                    I = v.textContent.length,
                    it = Math.min(T.start, I),
                    Ot = T.end === void 0 ? it : Math.min(T.end, I);
                  !V.extend && it > Ot && ((h = Ot), (Ot = it), (it = h));
                  var z = vd(v, it),
                    E = vd(v, Ot);
                  if (
                    z &&
                    E &&
                    (V.rangeCount !== 1 ||
                      V.anchorNode !== z.node ||
                      V.anchorOffset !== z.offset ||
                      V.focusNode !== E.node ||
                      V.focusOffset !== E.offset)
                  ) {
                    var N = G.createRange();
                    (N.setStart(z.node, z.offset),
                      V.removeAllRanges(),
                      it > Ot
                        ? (V.addRange(N), V.extend(E.node, E.offset))
                        : (N.setEnd(E.node, E.offset), V.addRange(N)));
                  }
                }
              }
            }
            for (G = [], V = v; (V = V.parentNode);)
              V.nodeType === 1 &&
                G.push({ element: V, left: V.scrollLeft, top: V.scrollTop });
            for (
              typeof v.focus == "function" && v.focus(), v = 0;
              v < G.length;
              v++
            ) {
              var B = G[v];
              ((B.element.scrollLeft = B.left), (B.element.scrollTop = B.top));
            }
          }
          (($l = !!Br), (Lr = Br = null));
        } finally {
          ((jt = l), (K.p = s), (_.T = n));
        }
      }
      ((t.current = e), (Pt = 2));
    }
  }
  function _p() {
    if (Pt === 2) {
      Pt = 0;
      var t = qn,
        e = ss,
        n = (e.flags & 8772) !== 0;
      if ((e.subtreeFlags & 8772) !== 0 || n) {
        ((n = _.T), (_.T = null));
        var s = K.p;
        K.p = 2;
        var l = jt;
        jt |= 4;
        try {
          rp(t, e.alternate, e);
        } finally {
          ((jt = l), (K.p = s), (_.T = n));
        }
      }
      Pt = 3;
    }
  }
  function Up() {
    if (Pt === 4 || Pt === 3) {
      ((Pt = 0), tg());
      var t = qn,
        e = ss,
        n = Sn,
        s = Sp;
      (e.subtreeFlags & 10256) !== 0 || (e.flags & 10256) !== 0
        ? (Pt = 5)
        : ((Pt = 0), (ss = qn = null), Bp(t, t.pendingLanes));
      var l = t.pendingLanes;
      if (
        (l === 0 && (Gn = null),
        Xo(n),
        (e = e.stateNode),
        be && typeof be.onCommitFiberRoot == "function")
      )
        try {
          be.onCommitFiberRoot(Ms, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
      if (s !== null) {
        ((e = _.T), (l = K.p), (K.p = 2), (_.T = null));
        try {
          for (var r = t.onRecoverableError, h = 0; h < s.length; h++) {
            var v = s[h];
            r(v.value, { componentStack: v.stack });
          }
        } finally {
          ((_.T = e), (K.p = l));
        }
      }
      ((Sn & 3) !== 0 && Ll(),
        tn(t),
        (l = t.pendingLanes),
        (n & 261930) !== 0 && (l & 42) !== 0
          ? t === jr
            ? oi++
            : ((oi = 0), (jr = t))
          : (oi = 0),
        ci(0));
    }
  }
  function Bp(t, e) {
    (t.pooledCacheLanes &= e) === 0 &&
      ((e = t.pooledCache), e != null && ((t.pooledCache = null), ks(e)));
  }
  function Ll() {
    return (Vp(), _p(), Up(), Lp());
  }
  function Lp() {
    if (Pt !== 5) return !1;
    var t = qn,
      e = Sr;
    Sr = 0;
    var n = Xo(Sn),
      s = _.T,
      l = K.p;
    try {
      ((K.p = 32 > n ? 32 : n), (_.T = null), (n = Tr), (Tr = null));
      var r = qn,
        h = Sn;
      if (((Pt = 0), (ss = qn = null), (Sn = 0), (jt & 6) !== 0))
        throw Error(c(331));
      var v = jt;
      if (
        ((jt |= 4),
        xp(r.current),
        yp(r, r.current, h, n),
        (jt = v),
        ci(0, !1),
        be && typeof be.onPostCommitFiberRoot == "function")
      )
        try {
          be.onPostCommitFiberRoot(Ms, r);
        } catch {}
      return !0;
    } finally {
      ((K.p = l), (_.T = s), Bp(t, e));
    }
  }
  function Hp(t, e, n) {
    ((e = _e(n, e)),
      (e = nr(t.stateNode, e, 2)),
      (t = Vn(t, e, 2)),
      t !== null && (Ns(t, 2), tn(t)));
  }
  function Nt(t, e, n) {
    if (t.tag === 3) Hp(t, t, n);
    else
      for (; e !== null;) {
        if (e.tag === 3) {
          Hp(e, t, n);
          break;
        } else if (e.tag === 1) {
          var s = e.stateNode;
          if (
            typeof e.type.getDerivedStateFromError == "function" ||
            (typeof s.componentDidCatch == "function" &&
              (Gn === null || !Gn.has(s)))
          ) {
            ((t = _e(n, t)),
              (n = Gh(2)),
              (s = Vn(e, n, 2)),
              s !== null && (qh(n, s, e, t), Ns(s, 2), tn(s)));
            break;
          }
        }
        e = e.return;
      }
  }
  function zr(t, e, n) {
    var s = t.pingCache;
    if (s === null) {
      s = t.pingCache = new Mv();
      var l = new Set();
      s.set(e, l);
    } else ((l = s.get(e)), l === void 0 && ((l = new Set()), s.set(e, l)));
    l.has(n) ||
      ((xr = !0), l.add(n), (t = Rv.bind(null, t, e, n)), e.then(t, t));
  }
  function Rv(t, e, n) {
    var s = t.pingCache;
    (s !== null && s.delete(e),
      (t.pingedLanes |= t.suspendedLanes & n),
      (t.warmLanes &= ~n),
      wt === t &&
        (xt & n) === n &&
        (Gt === 4 || (Gt === 3 && (xt & 62914560) === xt && 300 > Ae() - Ol)
          ? (jt & 2) === 0 && is(t, 0)
          : (Ar |= n),
        as === xt && (as = 0)),
      tn(t));
  }
  function Gp(t, e) {
    (e === 0 && (e = Vf()), (t = oa(t, e)), t !== null && (Ns(t, e), tn(t)));
  }
  function Ov(t) {
    var e = t.memoizedState,
      n = 0;
    (e !== null && (n = e.retryLane), Gp(t, n));
  }
  function wv(t, e) {
    var n = 0;
    switch (t.tag) {
      case 31:
      case 13:
        var s = t.stateNode,
          l = t.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        s = t.stateNode;
        break;
      case 22:
        s = t.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    (s !== null && s.delete(e), Gp(t, n));
  }
  function Vv(t, e) {
    return Go(t, e);
  }
  var Hl = null,
    os = null,
    Nr = !1,
    Gl = !1,
    Cr = !1,
    Yn = 0;
  function tn(t) {
    (t !== os &&
      t.next === null &&
      (os === null ? (Hl = os = t) : (os = os.next = t)),
      (Gl = !0),
      Nr || ((Nr = !0), Uv()));
  }
  function ci(t, e) {
    if (!Cr && Gl) {
      Cr = !0;
      do
        for (var n = !1, s = Hl; s !== null;) {
          if (t !== 0) {
            var l = s.pendingLanes;
            if (l === 0) var r = 0;
            else {
              var h = s.suspendedLanes,
                v = s.pingedLanes;
              ((r = (1 << (31 - Se(42 | t) + 1)) - 1),
                (r &= l & ~(h & ~v)),
                (r = r & 201326741 ? (r & 201326741) | 1 : r ? r | 2 : 0));
            }
            r !== 0 && ((n = !0), Xp(s, r));
          } else
            ((r = xt),
              (r = Xi(
                s,
                s === wt ? r : 0,
                s.cancelPendingCommit !== null || s.timeoutHandle !== -1,
              )),
              (r & 3) === 0 || zs(s, r) || ((n = !0), Xp(s, r)));
          s = s.next;
        }
      while (n);
      Cr = !1;
    }
  }
  function _v() {
    qp();
  }
  function qp() {
    Gl = Nr = !1;
    var t = 0;
    Yn !== 0 && Zv() && (t = Yn);
    for (var e = Ae(), n = null, s = Hl; s !== null;) {
      var l = s.next,
        r = kp(s, e);
      (r === 0
        ? ((s.next = null),
          n === null ? (Hl = l) : (n.next = l),
          l === null && (os = n))
        : ((n = s), (t !== 0 || (r & 3) !== 0) && (Gl = !0)),
        (s = l));
    }
    ((Pt !== 0 && Pt !== 5) || ci(t), Yn !== 0 && (Yn = 0));
  }
  function kp(t, e) {
    for (
      var n = t.suspendedLanes,
        s = t.pingedLanes,
        l = t.expirationTimes,
        r = t.pendingLanes & -62914561;
      0 < r;
    ) {
      var h = 31 - Se(r),
        v = 1 << h,
        T = l[h];
      (T === -1
        ? ((v & n) === 0 || (v & s) !== 0) && (l[h] = cg(v, e))
        : T <= e && (t.expiredLanes |= v),
        (r &= ~v));
    }
    if (
      ((e = wt),
      (n = xt),
      (n = Xi(
        t,
        t === e ? n : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      (s = t.callbackNode),
      n === 0 ||
        (t === e && (zt === 2 || zt === 9)) ||
        t.cancelPendingCommit !== null)
    )
      return (
        s !== null && s !== null && qo(s),
        (t.callbackNode = null),
        (t.callbackPriority = 0)
      );
    if ((n & 3) === 0 || zs(t, n)) {
      if (((e = n & -n), e === t.callbackPriority)) return e;
      switch ((s !== null && qo(s), Xo(n))) {
        case 2:
        case 8:
          n = Of;
          break;
        case 32:
          n = Gi;
          break;
        case 268435456:
          n = wf;
          break;
        default:
          n = Gi;
      }
      return (
        (s = Yp.bind(null, t)),
        (n = Go(n, s)),
        (t.callbackPriority = e),
        (t.callbackNode = n),
        e
      );
    }
    return (
      s !== null && s !== null && qo(s),
      (t.callbackPriority = 2),
      (t.callbackNode = null),
      2
    );
  }
  function Yp(t, e) {
    if (Pt !== 0 && Pt !== 5)
      return ((t.callbackNode = null), (t.callbackPriority = 0), null);
    var n = t.callbackNode;
    if (Ll() && t.callbackNode !== n) return null;
    var s = xt;
    return (
      (s = Xi(
        t,
        t === wt ? s : 0,
        t.cancelPendingCommit !== null || t.timeoutHandle !== -1,
      )),
      s === 0
        ? null
        : (jp(t, s, e),
          kp(t, Ae()),
          t.callbackNode != null && t.callbackNode === n
            ? Yp.bind(null, t)
            : null)
    );
  }
  function Xp(t, e) {
    if (Ll()) return null;
    jp(t, e, !0);
  }
  function Uv() {
    Jv(function () {
      (jt & 6) !== 0 ? Go(Rf, _v) : qp();
    });
  }
  function Dr() {
    if (Yn === 0) {
      var t = Za;
      (t === 0 && ((t = qi), (qi <<= 1), (qi & 261888) === 0 && (qi = 256)),
        (Yn = t));
    }
    return Yn;
  }
  function Qp(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean"
      ? null
      : typeof t == "function"
        ? t
        : Ji("" + t);
  }
  function Zp(t, e) {
    var n = e.ownerDocument.createElement("input");
    return (
      (n.name = e.name),
      (n.value = e.value),
      t.id && n.setAttribute("form", t.id),
      e.parentNode.insertBefore(n, e),
      (t = new FormData(t)),
      n.parentNode.removeChild(n),
      t
    );
  }
  function Bv(t, e, n, s, l) {
    if (e === "submit" && n && n.stateNode === l) {
      var r = Qp((l[he] || null).action),
        h = s.submitter;
      h &&
        ((e = (e = h[he] || null)
          ? Qp(e.formAction)
          : h.getAttribute("formAction")),
        e !== null && ((r = e), (h = null)));
      var v = new Wi("action", "action", null, s, l);
      t.push({
        event: v,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (s.defaultPrevented) {
                if (Yn !== 0) {
                  var T = h ? Zp(l, h) : new FormData(l);
                  $c(
                    n,
                    { pending: !0, data: T, method: l.method, action: r },
                    null,
                    T,
                  );
                }
              } else
                typeof r == "function" &&
                  (v.preventDefault(),
                  (T = h ? Zp(l, h) : new FormData(l)),
                  $c(
                    n,
                    { pending: !0, data: T, method: l.method, action: r },
                    r,
                    T,
                  ));
            },
            currentTarget: l,
          },
        ],
      });
    }
  }
  for (var Rr = 0; Rr < hc.length; Rr++) {
    var Or = hc[Rr],
      Lv = Or.toLowerCase(),
      Hv = Or[0].toUpperCase() + Or.slice(1);
    Xe(Lv, "on" + Hv);
  }
  (Xe(Td, "onAnimationEnd"),
    Xe(jd, "onAnimationIteration"),
    Xe(Ed, "onAnimationStart"),
    Xe("dblclick", "onDoubleClick"),
    Xe("focusin", "onFocus"),
    Xe("focusout", "onBlur"),
    Xe(ev, "onTransitionRun"),
    Xe(nv, "onTransitionStart"),
    Xe(av, "onTransitionCancel"),
    Xe(Md, "onTransitionEnd"),
    Oa("onMouseEnter", ["mouseout", "mouseover"]),
    Oa("onMouseLeave", ["mouseout", "mouseover"]),
    Oa("onPointerEnter", ["pointerout", "pointerover"]),
    Oa("onPointerLeave", ["pointerout", "pointerover"]),
    aa(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    aa(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    aa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    aa(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    aa(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    aa(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var ri =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    Gv = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(ri),
    );
  function Kp(t, e) {
    e = (e & 4) !== 0;
    for (var n = 0; n < t.length; n++) {
      var s = t[n],
        l = s.event;
      s = s.listeners;
      t: {
        var r = void 0;
        if (e)
          for (var h = s.length - 1; 0 <= h; h--) {
            var v = s[h],
              T = v.instance,
              C = v.currentTarget;
            if (((v = v.listener), T !== r && l.isPropagationStopped()))
              break t;
            ((r = v), (l.currentTarget = C));
            try {
              r(l);
            } catch (U) {
              el(U);
            }
            ((l.currentTarget = null), (r = T));
          }
        else
          for (h = 0; h < s.length; h++) {
            if (
              ((v = s[h]),
              (T = v.instance),
              (C = v.currentTarget),
              (v = v.listener),
              T !== r && l.isPropagationStopped())
            )
              break t;
            ((r = v), (l.currentTarget = C));
            try {
              r(l);
            } catch (U) {
              el(U);
            }
            ((l.currentTarget = null), (r = T));
          }
      }
    }
  }
  function vt(t, e) {
    var n = e[Qo];
    n === void 0 && (n = e[Qo] = new Set());
    var s = t + "__bubble";
    n.has(s) || (Jp(e, t, 2, !1), n.add(s));
  }
  function wr(t, e, n) {
    var s = 0;
    (e && (s |= 4), Jp(n, t, s, e));
  }
  var ql = "_reactListening" + Math.random().toString(36).slice(2);
  function Vr(t) {
    if (!t[ql]) {
      ((t[ql] = !0),
        qf.forEach(function (n) {
          n !== "selectionchange" && (Gv.has(n) || wr(n, !1, t), wr(n, !0, t));
        }));
      var e = t.nodeType === 9 ? t : t.ownerDocument;
      e === null || e[ql] || ((e[ql] = !0), wr("selectionchange", !1, e));
    }
  }
  function Jp(t, e, n, s) {
    switch (Tm(e)) {
      case 2:
        var l = px;
        break;
      case 8:
        l = mx;
        break;
      default:
        l = Fr;
    }
    ((n = l.bind(null, e, n, t)),
      (l = void 0),
      !tc ||
        (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
        (l = !0),
      s
        ? l !== void 0
          ? t.addEventListener(e, n, { capture: !0, passive: l })
          : t.addEventListener(e, n, !0)
        : l !== void 0
          ? t.addEventListener(e, n, { passive: l })
          : t.addEventListener(e, n, !1));
  }
  function _r(t, e, n, s, l) {
    var r = s;
    if ((e & 1) === 0 && (e & 2) === 0 && s !== null)
      t: for (;;) {
        if (s === null) return;
        var h = s.tag;
        if (h === 3 || h === 4) {
          var v = s.stateNode.containerInfo;
          if (v === l) break;
          if (h === 4)
            for (h = s.return; h !== null;) {
              var T = h.tag;
              if ((T === 3 || T === 4) && h.stateNode.containerInfo === l)
                return;
              h = h.return;
            }
          for (; v !== null;) {
            if (((h = Ca(v)), h === null)) return;
            if (((T = h.tag), T === 5 || T === 6 || T === 26 || T === 27)) {
              s = r = h;
              continue t;
            }
            v = v.parentNode;
          }
        }
        s = s.return;
      }
    If(function () {
      var C = r,
        U = Wo(n),
        G = [];
      t: {
        var D = zd.get(t);
        if (D !== void 0) {
          var V = Wi,
            I = t;
          switch (t) {
            case "keypress":
              if ($i(n) === 0) break t;
            case "keydown":
            case "keyup":
              V = wg;
              break;
            case "focusin":
              ((I = "focus"), (V = sc));
              break;
            case "focusout":
              ((I = "blur"), (V = sc));
              break;
            case "beforeblur":
            case "afterblur":
              V = sc;
              break;
            case "click":
              if (n.button === 2) break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = nd;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = bg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = Ug;
              break;
            case Td:
            case jd:
            case Ed:
              V = jg;
              break;
            case Md:
              V = Lg;
              break;
            case "scroll":
            case "scrollend":
              V = xg;
              break;
            case "wheel":
              V = Gg;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = Mg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = sd;
              break;
            case "toggle":
            case "beforetoggle":
              V = kg;
          }
          var it = (e & 4) !== 0,
            Ot = !it && (t === "scroll" || t === "scrollend"),
            z = it ? (D !== null ? D + "Capture" : null) : D;
          it = [];
          for (var E = C, N; E !== null;) {
            var B = E;
            if (
              ((N = B.stateNode),
              (B = B.tag),
              (B !== 5 && B !== 26 && B !== 27) ||
                N === null ||
                z === null ||
                ((B = Rs(E, z)), B != null && it.push(ui(E, B, N))),
              Ot)
            )
              break;
            E = E.return;
          }
          0 < it.length &&
            ((D = new V(D, I, null, n, U)),
            G.push({ event: D, listeners: it }));
        }
      }
      if ((e & 7) === 0) {
        t: {
          if (
            ((D = t === "mouseover" || t === "pointerover"),
            (V = t === "mouseout" || t === "pointerout"),
            D &&
              n !== Po &&
              (I = n.relatedTarget || n.fromElement) &&
              (Ca(I) || I[Na]))
          )
            break t;
          if (
            (V || D) &&
            ((D =
              U.window === U
                ? U
                : (D = U.ownerDocument)
                  ? D.defaultView || D.parentWindow
                  : window),
            V
              ? ((I = n.relatedTarget || n.toElement),
                (V = C),
                (I = I ? Ca(I) : null),
                I !== null &&
                  ((Ot = p(I)),
                  (it = I.tag),
                  I !== Ot || (it !== 5 && it !== 27 && it !== 6)) &&
                  (I = null))
              : ((V = null), (I = C)),
            V !== I)
          ) {
            if (
              ((it = nd),
              (B = "onMouseLeave"),
              (z = "onMouseEnter"),
              (E = "mouse"),
              (t === "pointerout" || t === "pointerover") &&
                ((it = sd),
                (B = "onPointerLeave"),
                (z = "onPointerEnter"),
                (E = "pointer")),
              (Ot = V == null ? D : Ds(V)),
              (N = I == null ? D : Ds(I)),
              (D = new it(B, E + "leave", V, n, U)),
              (D.target = Ot),
              (D.relatedTarget = N),
              (B = null),
              Ca(U) === C &&
                ((it = new it(z, E + "enter", I, n, U)),
                (it.target = N),
                (it.relatedTarget = Ot),
                (B = it)),
              (Ot = B),
              V && I)
            )
              e: {
                for (it = qv, z = V, E = I, N = 0, B = z; B; B = it(B)) N++;
                B = 0;
                for (var at = E; at; at = it(at)) B++;
                for (; 0 < N - B;) ((z = it(z)), N--);
                for (; 0 < B - N;) ((E = it(E)), B--);
                for (; N--;) {
                  if (z === E || (E !== null && z === E.alternate)) {
                    it = z;
                    break e;
                  }
                  ((z = it(z)), (E = it(E)));
                }
                it = null;
              }
            else it = null;
            (V !== null && Fp(G, D, V, it, !1),
              I !== null && Ot !== null && Fp(G, Ot, I, it, !0));
          }
        }
        t: {
          if (
            ((D = C ? Ds(C) : window),
            (V = D.nodeName && D.nodeName.toLowerCase()),
            V === "select" || (V === "input" && D.type === "file"))
          )
            var St = dd;
          else if (ud(D))
            if (hd) St = Wg;
            else {
              St = $g;
              var et = Fg;
            }
          else
            ((V = D.nodeName),
              !V ||
              V.toLowerCase() !== "input" ||
              (D.type !== "checkbox" && D.type !== "radio")
                ? C && $o(C.elementType) && (St = dd)
                : (St = Pg));
          if (St && (St = St(t, C))) {
            fd(G, St, n, U);
            break t;
          }
          (et && et(t, D, C),
            t === "focusout" &&
              C &&
              D.type === "number" &&
              C.memoizedProps.value != null &&
              Fo(D, "number", D.value));
        }
        switch (((et = C ? Ds(C) : window), t)) {
          case "focusin":
            (ud(et) || et.contentEditable === "true") &&
              ((La = et), (uc = C), (Hs = null));
            break;
          case "focusout":
            Hs = uc = La = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((fc = !1), bd(G, n, U));
            break;
          case "selectionchange":
            if (tv) break;
          case "keydown":
          case "keyup":
            bd(G, n, U);
        }
        var pt;
        if (lc)
          t: {
            switch (t) {
              case "compositionstart":
                var At = "onCompositionStart";
                break t;
              case "compositionend":
                At = "onCompositionEnd";
                break t;
              case "compositionupdate":
                At = "onCompositionUpdate";
                break t;
            }
            At = void 0;
          }
        else
          Ba
            ? cd(t, n) && (At = "onCompositionEnd")
            : t === "keydown" &&
              n.keyCode === 229 &&
              (At = "onCompositionStart");
        (At &&
          (id &&
            n.locale !== "ko" &&
            (Ba || At !== "onCompositionStart"
              ? At === "onCompositionEnd" && Ba && (pt = td())
              : ((zn = U),
                (ec = "value" in zn ? zn.value : zn.textContent),
                (Ba = !0))),
          (et = kl(C, At)),
          0 < et.length &&
            ((At = new ad(At, t, null, n, U)),
            G.push({ event: At, listeners: et }),
            pt
              ? (At.data = pt)
              : ((pt = rd(n)), pt !== null && (At.data = pt)))),
          (pt = Xg ? Qg(t, n) : Zg(t, n)) &&
            ((At = kl(C, "onBeforeInput")),
            0 < At.length &&
              ((et = new ad("onBeforeInput", "beforeinput", null, n, U)),
              G.push({ event: et, listeners: At }),
              (et.data = pt))),
          Bv(G, t, C, n, U));
      }
      Kp(G, e);
    });
  }
  function ui(t, e, n) {
    return { instance: t, listener: e, currentTarget: n };
  }
  function kl(t, e) {
    for (var n = e + "Capture", s = []; t !== null;) {
      var l = t,
        r = l.stateNode;
      if (
        ((l = l.tag),
        (l !== 5 && l !== 26 && l !== 27) ||
          r === null ||
          ((l = Rs(t, n)),
          l != null && s.unshift(ui(t, l, r)),
          (l = Rs(t, e)),
          l != null && s.push(ui(t, l, r))),
        t.tag === 3)
      )
        return s;
      t = t.return;
    }
    return [];
  }
  function qv(t) {
    if (t === null) return null;
    do t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null;
  }
  function Fp(t, e, n, s, l) {
    for (var r = e._reactName, h = []; n !== null && n !== s;) {
      var v = n,
        T = v.alternate,
        C = v.stateNode;
      if (((v = v.tag), T !== null && T === s)) break;
      ((v !== 5 && v !== 26 && v !== 27) ||
        C === null ||
        ((T = C),
        l
          ? ((C = Rs(n, r)), C != null && h.unshift(ui(n, C, T)))
          : l || ((C = Rs(n, r)), C != null && h.push(ui(n, C, T)))),
        (n = n.return));
    }
    h.length !== 0 && t.push({ event: e, listeners: h });
  }
  var kv = /\r\n?/g,
    Yv = /\u0000|\uFFFD/g;
  function $p(t) {
    return (typeof t == "string" ? t : "" + t)
      .replace(
        kv,
        `
`,
      )
      .replace(Yv, "");
  }
  function Pp(t, e) {
    return ((e = $p(e)), $p(t) === e);
  }
  function Rt(t, e, n, s, l, r) {
    switch (n) {
      case "children":
        typeof s == "string"
          ? e === "body" || (e === "textarea" && s === "") || Va(t, s)
          : (typeof s == "number" || typeof s == "bigint") &&
            e !== "body" &&
            Va(t, "" + s);
        break;
      case "className":
        Zi(t, "class", s);
        break;
      case "tabIndex":
        Zi(t, "tabindex", s);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Zi(t, n, s);
        break;
      case "style":
        Pf(t, s, r);
        break;
      case "data":
        if (e !== "object") {
          Zi(t, "data", s);
          break;
        }
      case "src":
      case "href":
        if (s === "" && (e !== "a" || n !== "href")) {
          t.removeAttribute(n);
          break;
        }
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "symbol" ||
          typeof s == "boolean"
        ) {
          t.removeAttribute(n);
          break;
        }
        ((s = Ji("" + s)), t.setAttribute(n, s));
        break;
      case "action":
      case "formAction":
        if (typeof s == "function") {
          t.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof r == "function" &&
            (n === "formAction"
              ? (e !== "input" && Rt(t, e, "name", l.name, l, null),
                Rt(t, e, "formEncType", l.formEncType, l, null),
                Rt(t, e, "formMethod", l.formMethod, l, null),
                Rt(t, e, "formTarget", l.formTarget, l, null))
              : (Rt(t, e, "encType", l.encType, l, null),
                Rt(t, e, "method", l.method, l, null),
                Rt(t, e, "target", l.target, l, null)));
        if (s == null || typeof s == "symbol" || typeof s == "boolean") {
          t.removeAttribute(n);
          break;
        }
        ((s = Ji("" + s)), t.setAttribute(n, s));
        break;
      case "onClick":
        s != null && (t.onclick = on);
        break;
      case "onScroll":
        s != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && vt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(c(61));
          if (((n = s.__html), n != null)) {
            if (l.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "multiple":
        t.multiple = s && typeof s != "function" && typeof s != "symbol";
        break;
      case "muted":
        t.muted = s && typeof s != "function" && typeof s != "symbol";
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
        if (
          s == null ||
          typeof s == "function" ||
          typeof s == "boolean" ||
          typeof s == "symbol"
        ) {
          t.removeAttribute("xlink:href");
          break;
        }
        ((n = Ji("" + s)),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", n));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        s != null && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(n, "" + s)
          : t.removeAttribute(n);
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
        s && typeof s != "function" && typeof s != "symbol"
          ? t.setAttribute(n, "")
          : t.removeAttribute(n);
        break;
      case "capture":
      case "download":
        s === !0
          ? t.setAttribute(n, "")
          : s !== !1 &&
              s != null &&
              typeof s != "function" &&
              typeof s != "symbol"
            ? t.setAttribute(n, s)
            : t.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        s != null &&
        typeof s != "function" &&
        typeof s != "symbol" &&
        !isNaN(s) &&
        1 <= s
          ? t.setAttribute(n, s)
          : t.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        s == null || typeof s == "function" || typeof s == "symbol" || isNaN(s)
          ? t.removeAttribute(n)
          : t.setAttribute(n, s);
        break;
      case "popover":
        (vt("beforetoggle", t), vt("toggle", t), Qi(t, "popover", s));
        break;
      case "xlinkActuate":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:actuate", s);
        break;
      case "xlinkArcrole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", s);
        break;
      case "xlinkRole":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:role", s);
        break;
      case "xlinkShow":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:show", s);
        break;
      case "xlinkTitle":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:title", s);
        break;
      case "xlinkType":
        ln(t, "http://www.w3.org/1999/xlink", "xlink:type", s);
        break;
      case "xmlBase":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:base", s);
        break;
      case "xmlLang":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", s);
        break;
      case "xmlSpace":
        ln(t, "http://www.w3.org/XML/1998/namespace", "xml:space", s);
        break;
      case "is":
        Qi(t, "is", s);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) ||
          (n[0] !== "o" && n[0] !== "O") ||
          (n[1] !== "n" && n[1] !== "N")) &&
          ((n = gg.get(n) || n), Qi(t, n, s));
    }
  }
  function Ur(t, e, n, s, l, r) {
    switch (n) {
      case "style":
        Pf(t, s, r);
        break;
      case "dangerouslySetInnerHTML":
        if (s != null) {
          if (typeof s != "object" || !("__html" in s)) throw Error(c(61));
          if (((n = s.__html), n != null)) {
            if (l.children != null) throw Error(c(60));
            t.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof s == "string"
          ? Va(t, s)
          : (typeof s == "number" || typeof s == "bigint") && Va(t, "" + s);
        break;
      case "onScroll":
        s != null && vt("scroll", t);
        break;
      case "onScrollEnd":
        s != null && vt("scrollend", t);
        break;
      case "onClick":
        s != null && (t.onclick = on);
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
        if (!kf.hasOwnProperty(n))
          t: {
            if (
              n[0] === "o" &&
              n[1] === "n" &&
              ((l = n.endsWith("Capture")),
              (e = n.slice(2, l ? n.length - 7 : void 0)),
              (r = t[he] || null),
              (r = r != null ? r[n] : null),
              typeof r == "function" && t.removeEventListener(e, r, l),
              typeof s == "function")
            ) {
              (typeof r != "function" &&
                r !== null &&
                (n in t
                  ? (t[n] = null)
                  : t.hasAttribute(n) && t.removeAttribute(n)),
                t.addEventListener(e, s, l));
              break t;
            }
            n in t
              ? (t[n] = s)
              : s === !0
                ? t.setAttribute(n, "")
                : Qi(t, n, s);
          }
    }
  }
  function ie(t, e, n) {
    switch (e) {
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
        (vt("error", t), vt("load", t));
        var s = !1,
          l = !1,
          r;
        for (r in n)
          if (n.hasOwnProperty(r)) {
            var h = n[r];
            if (h != null)
              switch (r) {
                case "src":
                  s = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, e));
                default:
                  Rt(t, e, r, h, n, null);
              }
          }
        (l && Rt(t, e, "srcSet", n.srcSet, n, null),
          s && Rt(t, e, "src", n.src, n, null));
        return;
      case "input":
        vt("invalid", t);
        var v = (r = h = l = null),
          T = null,
          C = null;
        for (s in n)
          if (n.hasOwnProperty(s)) {
            var U = n[s];
            if (U != null)
              switch (s) {
                case "name":
                  l = U;
                  break;
                case "type":
                  h = U;
                  break;
                case "checked":
                  T = U;
                  break;
                case "defaultChecked":
                  C = U;
                  break;
                case "value":
                  r = U;
                  break;
                case "defaultValue":
                  v = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null) throw Error(c(137, e));
                  break;
                default:
                  Rt(t, e, s, U, n, null);
              }
          }
        Kf(t, r, v, T, C, h, l, !1);
        return;
      case "select":
        (vt("invalid", t), (s = h = r = null));
        for (l in n)
          if (n.hasOwnProperty(l) && ((v = n[l]), v != null))
            switch (l) {
              case "value":
                r = v;
                break;
              case "defaultValue":
                h = v;
                break;
              case "multiple":
                s = v;
              default:
                Rt(t, e, l, v, n, null);
            }
        ((e = r),
          (n = h),
          (t.multiple = !!s),
          e != null ? wa(t, !!s, e, !1) : n != null && wa(t, !!s, n, !0));
        return;
      case "textarea":
        (vt("invalid", t), (r = l = s = null));
        for (h in n)
          if (n.hasOwnProperty(h) && ((v = n[h]), v != null))
            switch (h) {
              case "value":
                s = v;
                break;
              case "defaultValue":
                l = v;
                break;
              case "children":
                r = v;
                break;
              case "dangerouslySetInnerHTML":
                if (v != null) throw Error(c(91));
                break;
              default:
                Rt(t, e, h, v, n, null);
            }
        Ff(t, s, l, r);
        return;
      case "option":
        for (T in n)
          n.hasOwnProperty(T) &&
            ((s = n[T]), s != null) &&
            (T === "selected"
              ? (t.selected =
                  s && typeof s != "function" && typeof s != "symbol")
              : Rt(t, e, T, s, n, null));
        return;
      case "dialog":
        (vt("beforetoggle", t),
          vt("toggle", t),
          vt("cancel", t),
          vt("close", t));
        break;
      case "iframe":
      case "object":
        vt("load", t);
        break;
      case "video":
      case "audio":
        for (s = 0; s < ri.length; s++) vt(ri[s], t);
        break;
      case "image":
        (vt("error", t), vt("load", t));
        break;
      case "details":
        vt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        (vt("error", t), vt("load", t));
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
        for (C in n)
          if (n.hasOwnProperty(C) && ((s = n[C]), s != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, e));
              default:
                Rt(t, e, C, s, n, null);
            }
        return;
      default:
        if ($o(e)) {
          for (U in n)
            n.hasOwnProperty(U) &&
              ((s = n[U]), s !== void 0 && Ur(t, e, U, s, n, void 0));
          return;
        }
    }
    for (v in n)
      n.hasOwnProperty(v) && ((s = n[v]), s != null && Rt(t, e, v, s, n, null));
  }
  function Xv(t, e, n, s) {
    switch (e) {
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
        var l = null,
          r = null,
          h = null,
          v = null,
          T = null,
          C = null,
          U = null;
        for (V in n) {
          var G = n[V];
          if (n.hasOwnProperty(V) && G != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                T = G;
              default:
                s.hasOwnProperty(V) || Rt(t, e, V, null, s, G);
            }
        }
        for (var D in s) {
          var V = s[D];
          if (((G = n[D]), s.hasOwnProperty(D) && (V != null || G != null)))
            switch (D) {
              case "type":
                r = V;
                break;
              case "name":
                l = V;
                break;
              case "checked":
                C = V;
                break;
              case "defaultChecked":
                U = V;
                break;
              case "value":
                h = V;
                break;
              case "defaultValue":
                v = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null) throw Error(c(137, e));
                break;
              default:
                V !== G && Rt(t, e, D, V, s, G);
            }
        }
        Jo(t, h, v, T, C, U, r, l);
        return;
      case "select":
        V = h = v = D = null;
        for (r in n)
          if (((T = n[r]), n.hasOwnProperty(r) && T != null))
            switch (r) {
              case "value":
                break;
              case "multiple":
                V = T;
              default:
                s.hasOwnProperty(r) || Rt(t, e, r, null, s, T);
            }
        for (l in s)
          if (
            ((r = s[l]),
            (T = n[l]),
            s.hasOwnProperty(l) && (r != null || T != null))
          )
            switch (l) {
              case "value":
                D = r;
                break;
              case "defaultValue":
                v = r;
                break;
              case "multiple":
                h = r;
              default:
                r !== T && Rt(t, e, l, r, s, T);
            }
        ((e = v),
          (n = h),
          (s = V),
          D != null
            ? wa(t, !!n, D, !1)
            : !!s != !!n &&
              (e != null ? wa(t, !!n, e, !0) : wa(t, !!n, n ? [] : "", !1)));
        return;
      case "textarea":
        V = D = null;
        for (v in n)
          if (
            ((l = n[v]),
            n.hasOwnProperty(v) && l != null && !s.hasOwnProperty(v))
          )
            switch (v) {
              case "value":
                break;
              case "children":
                break;
              default:
                Rt(t, e, v, null, s, l);
            }
        for (h in s)
          if (
            ((l = s[h]),
            (r = n[h]),
            s.hasOwnProperty(h) && (l != null || r != null))
          )
            switch (h) {
              case "value":
                D = l;
                break;
              case "defaultValue":
                V = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== r && Rt(t, e, h, l, s, r);
            }
        Jf(t, D, V);
        return;
      case "option":
        for (var I in n)
          ((D = n[I]),
            n.hasOwnProperty(I) &&
              D != null &&
              !s.hasOwnProperty(I) &&
              (I === "selected" ? (t.selected = !1) : Rt(t, e, I, null, s, D)));
        for (T in s)
          ((D = s[T]),
            (V = n[T]),
            s.hasOwnProperty(T) &&
              D !== V &&
              (D != null || V != null) &&
              (T === "selected"
                ? (t.selected =
                    D && typeof D != "function" && typeof D != "symbol")
                : Rt(t, e, T, D, s, V)));
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
        for (var it in n)
          ((D = n[it]),
            n.hasOwnProperty(it) &&
              D != null &&
              !s.hasOwnProperty(it) &&
              Rt(t, e, it, null, s, D));
        for (C in s)
          if (
            ((D = s[C]),
            (V = n[C]),
            s.hasOwnProperty(C) && D !== V && (D != null || V != null))
          )
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null) throw Error(c(137, e));
                break;
              default:
                Rt(t, e, C, D, s, V);
            }
        return;
      default:
        if ($o(e)) {
          for (var Ot in n)
            ((D = n[Ot]),
              n.hasOwnProperty(Ot) &&
                D !== void 0 &&
                !s.hasOwnProperty(Ot) &&
                Ur(t, e, Ot, void 0, s, D));
          for (U in s)
            ((D = s[U]),
              (V = n[U]),
              !s.hasOwnProperty(U) ||
                D === V ||
                (D === void 0 && V === void 0) ||
                Ur(t, e, U, D, s, V));
          return;
        }
    }
    for (var z in n)
      ((D = n[z]),
        n.hasOwnProperty(z) &&
          D != null &&
          !s.hasOwnProperty(z) &&
          Rt(t, e, z, null, s, D));
    for (G in s)
      ((D = s[G]),
        (V = n[G]),
        !s.hasOwnProperty(G) ||
          D === V ||
          (D == null && V == null) ||
          Rt(t, e, G, D, s, V));
  }
  function Wp(t) {
    switch (t) {
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
  function Qv() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var t = 0, e = 0, n = performance.getEntriesByType("resource"), s = 0;
        s < n.length;
        s++
      ) {
        var l = n[s],
          r = l.transferSize,
          h = l.initiatorType,
          v = l.duration;
        if (r && v && Wp(h)) {
          for (h = 0, v = l.responseEnd, s += 1; s < n.length; s++) {
            var T = n[s],
              C = T.startTime;
            if (C > v) break;
            var U = T.transferSize,
              G = T.initiatorType;
            U &&
              Wp(G) &&
              ((T = T.responseEnd), (h += U * (T < v ? 1 : (v - C) / (T - C))));
          }
          if ((--s, (e += (8 * (r + h)) / (l.duration / 1e3)), t++, 10 < t))
            break;
        }
      }
      if (0 < t) return e / t / 1e6;
    }
    return navigator.connection &&
      ((t = navigator.connection.downlink), typeof t == "number")
      ? t
      : 5;
  }
  var Br = null,
    Lr = null;
  function Yl(t) {
    return t.nodeType === 9 ? t : t.ownerDocument;
  }
  function Ip(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function tm(t, e) {
    if (t === 0)
      switch (e) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return t === 1 && e === "foreignObject" ? 0 : t;
  }
  function Hr(t, e) {
    return (
      t === "textarea" ||
      t === "noscript" ||
      typeof e.children == "string" ||
      typeof e.children == "number" ||
      typeof e.children == "bigint" ||
      (typeof e.dangerouslySetInnerHTML == "object" &&
        e.dangerouslySetInnerHTML !== null &&
        e.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Gr = null;
  function Zv() {
    var t = window.event;
    return t && t.type === "popstate"
      ? t === Gr
        ? !1
        : ((Gr = t), !0)
      : ((Gr = null), !1);
  }
  var em = typeof setTimeout == "function" ? setTimeout : void 0,
    Kv = typeof clearTimeout == "function" ? clearTimeout : void 0,
    nm = typeof Promise == "function" ? Promise : void 0,
    Jv =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof nm < "u"
          ? function (t) {
              return nm.resolve(null).then(t).catch(Fv);
            }
          : em;
  function Fv(t) {
    setTimeout(function () {
      throw t;
    });
  }
  function Xn(t) {
    return t === "head";
  }
  function am(t, e) {
    var n = e,
      s = 0;
    do {
      var l = n.nextSibling;
      if ((t.removeChild(n), l && l.nodeType === 8))
        if (((n = l.data), n === "/$" || n === "/&")) {
          if (s === 0) {
            (t.removeChild(l), fs(e));
            return;
          }
          s--;
        } else if (
          n === "$" ||
          n === "$?" ||
          n === "$~" ||
          n === "$!" ||
          n === "&"
        )
          s++;
        else if (n === "html") fi(t.ownerDocument.documentElement);
        else if (n === "head") {
          ((n = t.ownerDocument.head), fi(n));
          for (var r = n.firstChild; r;) {
            var h = r.nextSibling,
              v = r.nodeName;
            (r[Cs] ||
              v === "SCRIPT" ||
              v === "STYLE" ||
              (v === "LINK" && r.rel.toLowerCase() === "stylesheet") ||
              n.removeChild(r),
              (r = h));
          }
        } else n === "body" && fi(t.ownerDocument.body);
      n = l;
    } while (n);
    fs(e);
  }
  function sm(t, e) {
    var n = t;
    t = 0;
    do {
      var s = n.nextSibling;
      if (
        (n.nodeType === 1
          ? e
            ? ((n._stashedDisplay = n.style.display),
              (n.style.display = "none"))
            : ((n.style.display = n._stashedDisplay || ""),
              n.getAttribute("style") === "" && n.removeAttribute("style"))
          : n.nodeType === 3 &&
            (e
              ? ((n._stashedText = n.nodeValue), (n.nodeValue = ""))
              : (n.nodeValue = n._stashedText || "")),
        s && s.nodeType === 8)
      )
        if (((n = s.data), n === "/$")) {
          if (t === 0) break;
          t--;
        } else (n !== "$" && n !== "$?" && n !== "$~" && n !== "$!") || t++;
      n = s;
    } while (n);
  }
  function qr(t) {
    var e = t.firstChild;
    for (e && e.nodeType === 10 && (e = e.nextSibling); e;) {
      var n = e;
      switch (((e = e.nextSibling), n.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (qr(n), Zo(n));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      t.removeChild(n);
    }
  }
  function $v(t, e, n, s) {
    for (; t.nodeType === 1;) {
      var l = n;
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!s && (t.nodeName !== "INPUT" || t.type !== "hidden")) break;
      } else if (s) {
        if (!t[Cs])
          switch (e) {
            case "meta":
              if (!t.hasAttribute("itemprop")) break;
              return t;
            case "link":
              if (
                ((r = t.getAttribute("rel")),
                r === "stylesheet" && t.hasAttribute("data-precedence"))
              )
                break;
              if (
                r !== l.rel ||
                t.getAttribute("href") !==
                  (l.href == null || l.href === "" ? null : l.href) ||
                t.getAttribute("crossorigin") !==
                  (l.crossOrigin == null ? null : l.crossOrigin) ||
                t.getAttribute("title") !== (l.title == null ? null : l.title)
              )
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence")) break;
              return t;
            case "script":
              if (
                ((r = t.getAttribute("src")),
                (r !== (l.src == null ? null : l.src) ||
                  t.getAttribute("type") !== (l.type == null ? null : l.type) ||
                  t.getAttribute("crossorigin") !==
                    (l.crossOrigin == null ? null : l.crossOrigin)) &&
                  r &&
                  t.hasAttribute("async") &&
                  !t.hasAttribute("itemprop"))
              )
                break;
              return t;
            default:
              return t;
          }
      } else if (e === "input" && t.type === "hidden") {
        var r = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && t.getAttribute("name") === r) return t;
      } else return t;
      if (((t = Ge(t.nextSibling)), t === null)) break;
    }
    return null;
  }
  function Pv(t, e, n) {
    if (e === "") return null;
    for (; t.nodeType !== 3;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !n) ||
        ((t = Ge(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function im(t, e) {
    for (; t.nodeType !== 8;)
      if (
        ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") &&
          !e) ||
        ((t = Ge(t.nextSibling)), t === null)
      )
        return null;
    return t;
  }
  function kr(t) {
    return t.data === "$?" || t.data === "$~";
  }
  function Yr(t) {
    return (
      t.data === "$!" ||
      (t.data === "$?" && t.ownerDocument.readyState !== "loading")
    );
  }
  function Wv(t, e) {
    var n = t.ownerDocument;
    if (t.data === "$~") t._reactRetry = e;
    else if (t.data !== "$?" || n.readyState !== "loading") e();
    else {
      var s = function () {
        (e(), n.removeEventListener("DOMContentLoaded", s));
      };
      (n.addEventListener("DOMContentLoaded", s), (t._reactRetry = s));
    }
  }
  function Ge(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType;
      if (e === 1 || e === 3) break;
      if (e === 8) {
        if (
          ((e = t.data),
          e === "$" ||
            e === "$!" ||
            e === "$?" ||
            e === "$~" ||
            e === "&" ||
            e === "F!" ||
            e === "F")
        )
          break;
        if (e === "/$" || e === "/&") return null;
      }
    }
    return t;
  }
  var Xr = null;
  function lm(t) {
    t = t.nextSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "/$" || n === "/&") {
          if (e === 0) return Ge(t.nextSibling);
          e--;
        } else
          (n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&") ||
            e++;
      }
      t = t.nextSibling;
    }
    return null;
  }
  function om(t) {
    t = t.previousSibling;
    for (var e = 0; t;) {
      if (t.nodeType === 8) {
        var n = t.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (e === 0) return t;
          e--;
        } else (n !== "/$" && n !== "/&") || e++;
      }
      t = t.previousSibling;
    }
    return null;
  }
  function cm(t, e, n) {
    switch (((e = Yl(n)), t)) {
      case "html":
        if (((t = e.documentElement), !t)) throw Error(c(452));
        return t;
      case "head":
        if (((t = e.head), !t)) throw Error(c(453));
        return t;
      case "body":
        if (((t = e.body), !t)) throw Error(c(454));
        return t;
      default:
        throw Error(c(451));
    }
  }
  function fi(t) {
    for (var e = t.attributes; e.length;) t.removeAttributeNode(e[0]);
    Zo(t);
  }
  var qe = new Map(),
    rm = new Set();
  function Xl(t) {
    return typeof t.getRootNode == "function"
      ? t.getRootNode()
      : t.nodeType === 9
        ? t
        : t.ownerDocument;
  }
  var Tn = K.d;
  K.d = { f: Iv, r: tx, D: ex, C: nx, L: ax, m: sx, X: lx, S: ix, M: ox };
  function Iv() {
    var t = Tn.f(),
      e = _l();
    return t || e;
  }
  function tx(t) {
    var e = Da(t);
    e !== null && e.tag === 5 && e.type === "form" ? Mh(e) : Tn.r(t);
  }
  var cs = typeof document > "u" ? null : document;
  function um(t, e, n) {
    var s = cs;
    if (s && typeof e == "string" && e) {
      var l = we(e);
      ((l = 'link[rel="' + t + '"][href="' + l + '"]'),
        typeof n == "string" && (l += '[crossorigin="' + n + '"]'),
        rm.has(l) ||
          (rm.add(l),
          (t = { rel: t, crossOrigin: n, href: e }),
          s.querySelector(l) === null &&
            ((e = s.createElement("link")),
            ie(e, "link", t),
            It(e),
            s.head.appendChild(e))));
    }
  }
  function ex(t) {
    (Tn.D(t), um("dns-prefetch", t, null));
  }
  function nx(t, e) {
    (Tn.C(t, e), um("preconnect", t, e));
  }
  function ax(t, e, n) {
    Tn.L(t, e, n);
    var s = cs;
    if (s && t && e) {
      var l = 'link[rel="preload"][as="' + we(e) + '"]';
      e === "image" && n && n.imageSrcSet
        ? ((l += '[imagesrcset="' + we(n.imageSrcSet) + '"]'),
          typeof n.imageSizes == "string" &&
            (l += '[imagesizes="' + we(n.imageSizes) + '"]'))
        : (l += '[href="' + we(t) + '"]');
      var r = l;
      switch (e) {
        case "style":
          r = rs(t);
          break;
        case "script":
          r = us(t);
      }
      qe.has(r) ||
        ((t = A(
          {
            rel: "preload",
            href: e === "image" && n && n.imageSrcSet ? void 0 : t,
            as: e,
          },
          n,
        )),
        qe.set(r, t),
        s.querySelector(l) !== null ||
          (e === "style" && s.querySelector(di(r))) ||
          (e === "script" && s.querySelector(hi(r))) ||
          ((e = s.createElement("link")),
          ie(e, "link", t),
          It(e),
          s.head.appendChild(e)));
    }
  }
  function sx(t, e) {
    Tn.m(t, e);
    var n = cs;
    if (n && t) {
      var s = e && typeof e.as == "string" ? e.as : "script",
        l =
          'link[rel="modulepreload"][as="' + we(s) + '"][href="' + we(t) + '"]',
        r = l;
      switch (s) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          r = us(t);
      }
      if (
        !qe.has(r) &&
        ((t = A({ rel: "modulepreload", href: t }, e)),
        qe.set(r, t),
        n.querySelector(l) === null)
      ) {
        switch (s) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(hi(r))) return;
        }
        ((s = n.createElement("link")),
          ie(s, "link", t),
          It(s),
          n.head.appendChild(s));
      }
    }
  }
  function ix(t, e, n) {
    Tn.S(t, e, n);
    var s = cs;
    if (s && t) {
      var l = Ra(s).hoistableStyles,
        r = rs(t);
      e = e || "default";
      var h = l.get(r);
      if (!h) {
        var v = { loading: 0, preload: null };
        if ((h = s.querySelector(di(r)))) v.loading = 5;
        else {
          ((t = A({ rel: "stylesheet", href: t, "data-precedence": e }, n)),
            (n = qe.get(r)) && Qr(t, n));
          var T = (h = s.createElement("link"));
          (It(T),
            ie(T, "link", t),
            (T._p = new Promise(function (C, U) {
              ((T.onload = C), (T.onerror = U));
            })),
            T.addEventListener("load", function () {
              v.loading |= 1;
            }),
            T.addEventListener("error", function () {
              v.loading |= 2;
            }),
            (v.loading |= 4),
            Ql(h, e, s));
        }
        ((h = { type: "stylesheet", instance: h, count: 1, state: v }),
          l.set(r, h));
      }
    }
  }
  function lx(t, e) {
    Tn.X(t, e);
    var n = cs;
    if (n && t) {
      var s = Ra(n).hoistableScripts,
        l = us(t),
        r = s.get(l);
      r ||
        ((r = n.querySelector(hi(l))),
        r ||
          ((t = A({ src: t, async: !0 }, e)),
          (e = qe.get(l)) && Zr(t, e),
          (r = n.createElement("script")),
          It(r),
          ie(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        s.set(l, r));
    }
  }
  function ox(t, e) {
    Tn.M(t, e);
    var n = cs;
    if (n && t) {
      var s = Ra(n).hoistableScripts,
        l = us(t),
        r = s.get(l);
      r ||
        ((r = n.querySelector(hi(l))),
        r ||
          ((t = A({ src: t, async: !0, type: "module" }, e)),
          (e = qe.get(l)) && Zr(t, e),
          (r = n.createElement("script")),
          It(r),
          ie(r, "link", t),
          n.head.appendChild(r)),
        (r = { type: "script", instance: r, count: 1, state: null }),
        s.set(l, r));
    }
  }
  function fm(t, e, n, s) {
    var l = (l = mt.current) ? Xl(l) : null;
    if (!l) throw Error(c(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string"
          ? ((e = rs(n.href)),
            (n = Ra(l).hoistableStyles),
            (s = n.get(e)),
            s ||
              ((s = { type: "style", instance: null, count: 0, state: null }),
              n.set(e, s)),
            s)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          n.rel === "stylesheet" &&
          typeof n.href == "string" &&
          typeof n.precedence == "string"
        ) {
          t = rs(n.href);
          var r = Ra(l).hoistableStyles,
            h = r.get(t);
          if (
            (h ||
              ((l = l.ownerDocument || l),
              (h = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              r.set(t, h),
              (r = l.querySelector(di(t))) &&
                !r._p &&
                ((h.instance = r), (h.state.loading = 5)),
              qe.has(t) ||
                ((n = {
                  rel: "preload",
                  as: "style",
                  href: n.href,
                  crossOrigin: n.crossOrigin,
                  integrity: n.integrity,
                  media: n.media,
                  hrefLang: n.hrefLang,
                  referrerPolicy: n.referrerPolicy,
                }),
                qe.set(t, n),
                r || cx(l, t, n, h.state))),
            e && s === null)
          )
            throw Error(c(528, ""));
          return h;
        }
        if (e && s !== null) throw Error(c(529, ""));
        return null;
      case "script":
        return (
          (e = n.async),
          (n = n.src),
          typeof n == "string" &&
          e &&
          typeof e != "function" &&
          typeof e != "symbol"
            ? ((e = us(n)),
              (n = Ra(l).hoistableScripts),
              (s = n.get(e)),
              s ||
                ((s = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                n.set(e, s)),
              s)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(c(444, t));
    }
  }
  function rs(t) {
    return 'href="' + we(t) + '"';
  }
  function di(t) {
    return 'link[rel="stylesheet"][' + t + "]";
  }
  function dm(t) {
    return A({}, t, { "data-precedence": t.precedence, precedence: null });
  }
  function cx(t, e, n, s) {
    t.querySelector('link[rel="preload"][as="style"][' + e + "]")
      ? (s.loading = 1)
      : ((e = t.createElement("link")),
        (s.preload = e),
        e.addEventListener("load", function () {
          return (s.loading |= 1);
        }),
        e.addEventListener("error", function () {
          return (s.loading |= 2);
        }),
        ie(e, "link", n),
        It(e),
        t.head.appendChild(e));
  }
  function us(t) {
    return '[src="' + we(t) + '"]';
  }
  function hi(t) {
    return "script[async]" + t;
  }
  function hm(t, e, n) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case "style":
          var s = t.querySelector('style[data-href~="' + we(n.href) + '"]');
          if (s) return ((e.instance = s), It(s), s);
          var l = A({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null,
          });
          return (
            (s = (t.ownerDocument || t).createElement("style")),
            It(s),
            ie(s, "style", l),
            Ql(s, n.precedence, t),
            (e.instance = s)
          );
        case "stylesheet":
          l = rs(n.href);
          var r = t.querySelector(di(l));
          if (r) return ((e.state.loading |= 4), (e.instance = r), It(r), r);
          ((s = dm(n)),
            (l = qe.get(l)) && Qr(s, l),
            (r = (t.ownerDocument || t).createElement("link")),
            It(r));
          var h = r;
          return (
            (h._p = new Promise(function (v, T) {
              ((h.onload = v), (h.onerror = T));
            })),
            ie(r, "link", s),
            (e.state.loading |= 4),
            Ql(r, n.precedence, t),
            (e.instance = r)
          );
        case "script":
          return (
            (r = us(n.src)),
            (l = t.querySelector(hi(r)))
              ? ((e.instance = l), It(l), l)
              : ((s = n),
                (l = qe.get(r)) && ((s = A({}, n)), Zr(s, l)),
                (t = t.ownerDocument || t),
                (l = t.createElement("script")),
                It(l),
                ie(l, "link", s),
                t.head.appendChild(l),
                (e.instance = l))
          );
        case "void":
          return null;
        default:
          throw Error(c(443, e.type));
      }
    else
      e.type === "stylesheet" &&
        (e.state.loading & 4) === 0 &&
        ((s = e.instance), (e.state.loading |= 4), Ql(s, n.precedence, t));
    return e.instance;
  }
  function Ql(t, e, n) {
    for (
      var s = n.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        l = s.length ? s[s.length - 1] : null,
        r = l,
        h = 0;
      h < s.length;
      h++
    ) {
      var v = s[h];
      if (v.dataset.precedence === e) r = v;
      else if (r !== l) break;
    }
    r
      ? r.parentNode.insertBefore(t, r.nextSibling)
      : ((e = n.nodeType === 9 ? n.head : n), e.insertBefore(t, e.firstChild));
  }
  function Qr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.title == null && (t.title = e.title));
  }
  function Zr(t, e) {
    (t.crossOrigin == null && (t.crossOrigin = e.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy),
      t.integrity == null && (t.integrity = e.integrity));
  }
  var Zl = null;
  function pm(t, e, n) {
    if (Zl === null) {
      var s = new Map(),
        l = (Zl = new Map());
      l.set(n, s);
    } else ((l = Zl), (s = l.get(n)), s || ((s = new Map()), l.set(n, s)));
    if (s.has(t)) return s;
    for (
      s.set(t, null), n = n.getElementsByTagName(t), l = 0;
      l < n.length;
      l++
    ) {
      var r = n[l];
      if (
        !(
          r[Cs] ||
          r[ee] ||
          (t === "link" && r.getAttribute("rel") === "stylesheet")
        ) &&
        r.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var h = r.getAttribute(e) || "";
        h = t + h;
        var v = s.get(h);
        v ? v.push(r) : s.set(h, [r]);
      }
    }
    return s;
  }
  function mm(t, e, n) {
    ((t = t.ownerDocument || t),
      t.head.insertBefore(
        n,
        e === "title" ? t.querySelector("head > title") : null,
      ));
  }
  function rx(t, e, n) {
    if (n === 1 || e.itemProp != null) return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof e.precedence != "string" ||
          typeof e.href != "string" ||
          e.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof e.rel != "string" ||
          typeof e.href != "string" ||
          e.href === "" ||
          e.onLoad ||
          e.onError
        )
          break;
        return e.rel === "stylesheet"
          ? ((t = e.disabled), typeof e.precedence == "string" && t == null)
          : !0;
      case "script":
        if (
          e.async &&
          typeof e.async != "function" &&
          typeof e.async != "symbol" &&
          !e.onLoad &&
          !e.onError &&
          e.src &&
          typeof e.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function ym(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0);
  }
  function ux(t, e, n, s) {
    if (
      n.type === "stylesheet" &&
      (typeof s.media != "string" || matchMedia(s.media).matches !== !1) &&
      (n.state.loading & 4) === 0
    ) {
      if (n.instance === null) {
        var l = rs(s.href),
          r = e.querySelector(di(l));
        if (r) {
          ((e = r._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (t.count++, (t = Kl.bind(t)), e.then(t, t)),
            (n.state.loading |= 4),
            (n.instance = r),
            It(r));
          return;
        }
        ((r = e.ownerDocument || e),
          (s = dm(s)),
          (l = qe.get(l)) && Qr(s, l),
          (r = r.createElement("link")),
          It(r));
        var h = r;
        ((h._p = new Promise(function (v, T) {
          ((h.onload = v), (h.onerror = T));
        })),
          ie(r, "link", s),
          (n.instance = r));
      }
      (t.stylesheets === null && (t.stylesheets = new Map()),
        t.stylesheets.set(n, e),
        (e = n.state.preload) &&
          (n.state.loading & 3) === 0 &&
          (t.count++,
          (n = Kl.bind(t)),
          e.addEventListener("load", n),
          e.addEventListener("error", n)));
    }
  }
  var Kr = 0;
  function fx(t, e) {
    return (
      t.stylesheets && t.count === 0 && Fl(t, t.stylesheets),
      0 < t.count || 0 < t.imgCount
        ? function (n) {
            var s = setTimeout(function () {
              if ((t.stylesheets && Fl(t, t.stylesheets), t.unsuspend)) {
                var r = t.unsuspend;
                ((t.unsuspend = null), r());
              }
            }, 6e4 + e);
            0 < t.imgBytes && Kr === 0 && (Kr = 62500 * Qv());
            var l = setTimeout(
              function () {
                if (
                  ((t.waitingForImages = !1),
                  t.count === 0 &&
                    (t.stylesheets && Fl(t, t.stylesheets), t.unsuspend))
                ) {
                  var r = t.unsuspend;
                  ((t.unsuspend = null), r());
                }
              },
              (t.imgBytes > Kr ? 50 : 800) + e,
            );
            return (
              (t.unsuspend = n),
              function () {
                ((t.unsuspend = null), clearTimeout(s), clearTimeout(l));
              }
            );
          }
        : null
    );
  }
  function Kl() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) Fl(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        ((this.unsuspend = null), t());
      }
    }
  }
  var Jl = null;
  function Fl(t, e) {
    ((t.stylesheets = null),
      t.unsuspend !== null &&
        (t.count++,
        (Jl = new Map()),
        e.forEach(dx, t),
        (Jl = null),
        Kl.call(t)));
  }
  function dx(t, e) {
    if (!(e.state.loading & 4)) {
      var n = Jl.get(t);
      if (n) var s = n.get(null);
      else {
        ((n = new Map()), Jl.set(t, n));
        for (
          var l = t.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            r = 0;
          r < l.length;
          r++
        ) {
          var h = l[r];
          (h.nodeName === "LINK" || h.getAttribute("media") !== "not all") &&
            (n.set(h.dataset.precedence, h), (s = h));
        }
        s && n.set(null, s);
      }
      ((l = e.instance),
        (h = l.getAttribute("data-precedence")),
        (r = n.get(h) || s),
        r === s && n.set(null, l),
        n.set(h, l),
        this.count++,
        (s = Kl.bind(this)),
        l.addEventListener("load", s),
        l.addEventListener("error", s),
        r
          ? r.parentNode.insertBefore(l, r.nextSibling)
          : ((t = t.nodeType === 9 ? t.head : t),
            t.insertBefore(l, t.firstChild)),
        (e.state.loading |= 4));
    }
  }
  var pi = {
    $$typeof: Q,
    Provider: null,
    Consumer: null,
    _currentValue: P,
    _currentValue2: P,
    _threadCount: 0,
  };
  function hx(t, e, n, s, l, r, h, v, T) {
    ((this.tag = 1),
      (this.containerInfo = t),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = ko(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ko(0)),
      (this.hiddenUpdates = ko(null)),
      (this.identifierPrefix = s),
      (this.onUncaughtError = l),
      (this.onCaughtError = r),
      (this.onRecoverableError = h),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = T),
      (this.incompleteTransitions = new Map()));
  }
  function gm(t, e, n, s, l, r, h, v, T, C, U, G) {
    return (
      (t = new hx(t, e, n, h, T, C, U, G, v)),
      (e = 1),
      r === !0 && (e |= 24),
      (r = je(3, null, null, e)),
      (t.current = r),
      (r.stateNode = t),
      (e = Mc()),
      e.refCount++,
      (t.pooledCache = e),
      e.refCount++,
      (r.memoizedState = { element: s, isDehydrated: n, cache: e }),
      Dc(r),
      t
    );
  }
  function vm(t) {
    return t ? ((t = qa), t) : qa;
  }
  function xm(t, e, n, s, l, r) {
    ((l = vm(l)),
      s.context === null ? (s.context = l) : (s.pendingContext = l),
      (s = wn(e)),
      (s.payload = { element: n }),
      (r = r === void 0 ? null : r),
      r !== null && (s.callback = r),
      (n = Vn(t, s, e)),
      n !== null && (xe(n, t, e), Zs(n, t, e)));
  }
  function Am(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var n = t.retryLane;
      t.retryLane = n !== 0 && n < e ? n : e;
    }
  }
  function Jr(t, e) {
    (Am(t, e), (t = t.alternate) && Am(t, e));
  }
  function bm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = oa(t, 67108864);
      (e !== null && xe(e, t, 67108864), Jr(t, 67108864));
    }
  }
  function Sm(t) {
    if (t.tag === 13 || t.tag === 31) {
      var e = Ce();
      e = Yo(e);
      var n = oa(t, e);
      (n !== null && xe(n, t, e), Jr(t, e));
    }
  }
  var $l = !0;
  function px(t, e, n, s) {
    var l = _.T;
    _.T = null;
    var r = K.p;
    try {
      ((K.p = 2), Fr(t, e, n, s));
    } finally {
      ((K.p = r), (_.T = l));
    }
  }
  function mx(t, e, n, s) {
    var l = _.T;
    _.T = null;
    var r = K.p;
    try {
      ((K.p = 8), Fr(t, e, n, s));
    } finally {
      ((K.p = r), (_.T = l));
    }
  }
  function Fr(t, e, n, s) {
    if ($l) {
      var l = $r(s);
      if (l === null) (_r(t, e, s, Pl, n), jm(t, s));
      else if (gx(l, t, e, n, s)) s.stopPropagation();
      else if ((jm(t, s), e & 4 && -1 < yx.indexOf(t))) {
        for (; l !== null;) {
          var r = Da(l);
          if (r !== null)
            switch (r.tag) {
              case 3:
                if (((r = r.stateNode), r.current.memoizedState.isDehydrated)) {
                  var h = na(r.pendingLanes);
                  if (h !== 0) {
                    var v = r;
                    for (v.pendingLanes |= 2, v.entangledLanes |= 2; h;) {
                      var T = 1 << (31 - Se(h));
                      ((v.entanglements[1] |= T), (h &= ~T));
                    }
                    (tn(r), (jt & 6) === 0 && ((wl = Ae() + 500), ci(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((v = oa(r, 2)), v !== null && xe(v, r, 2), _l(), Jr(r, 2));
            }
          if (((r = $r(s)), r === null && _r(t, e, s, Pl, n), r === l)) break;
          l = r;
        }
        l !== null && s.stopPropagation();
      } else _r(t, e, s, null, n);
    }
  }
  function $r(t) {
    return ((t = Wo(t)), Pr(t));
  }
  var Pl = null;
  function Pr(t) {
    if (((Pl = null), (t = Ca(t)), t !== null)) {
      var e = p(t);
      if (e === null) t = null;
      else {
        var n = e.tag;
        if (n === 13) {
          if (((t = d(e)), t !== null)) return t;
          t = null;
        } else if (n === 31) {
          if (((t = y(e)), t !== null)) return t;
          t = null;
        } else if (n === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated)
            return e.tag === 3 ? e.stateNode.containerInfo : null;
          t = null;
        } else e !== t && (t = null);
      }
    }
    return ((Pl = t), null);
  }
  function Tm(t) {
    switch (t) {
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
        switch (eg()) {
          case Rf:
            return 2;
          case Of:
            return 8;
          case Gi:
          case ng:
            return 32;
          case wf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Wr = !1,
    Qn = null,
    Zn = null,
    Kn = null,
    mi = new Map(),
    yi = new Map(),
    Jn = [],
    yx =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function jm(t, e) {
    switch (t) {
      case "focusin":
      case "focusout":
        Qn = null;
        break;
      case "dragenter":
      case "dragleave":
        Zn = null;
        break;
      case "mouseover":
      case "mouseout":
        Kn = null;
        break;
      case "pointerover":
      case "pointerout":
        mi.delete(e.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        yi.delete(e.pointerId);
    }
  }
  function gi(t, e, n, s, l, r) {
    return t === null || t.nativeEvent !== r
      ? ((t = {
          blockedOn: e,
          domEventName: n,
          eventSystemFlags: s,
          nativeEvent: r,
          targetContainers: [l],
        }),
        e !== null && ((e = Da(e)), e !== null && bm(e)),
        t)
      : ((t.eventSystemFlags |= s),
        (e = t.targetContainers),
        l !== null && e.indexOf(l) === -1 && e.push(l),
        t);
  }
  function gx(t, e, n, s, l) {
    switch (e) {
      case "focusin":
        return ((Qn = gi(Qn, t, e, n, s, l)), !0);
      case "dragenter":
        return ((Zn = gi(Zn, t, e, n, s, l)), !0);
      case "mouseover":
        return ((Kn = gi(Kn, t, e, n, s, l)), !0);
      case "pointerover":
        var r = l.pointerId;
        return (mi.set(r, gi(mi.get(r) || null, t, e, n, s, l)), !0);
      case "gotpointercapture":
        return (
          (r = l.pointerId),
          yi.set(r, gi(yi.get(r) || null, t, e, n, s, l)),
          !0
        );
    }
    return !1;
  }
  function Em(t) {
    var e = Ca(t.target);
    if (e !== null) {
      var n = p(e);
      if (n !== null) {
        if (((e = n.tag), e === 13)) {
          if (((e = d(n)), e !== null)) {
            ((t.blockedOn = e),
              Hf(t.priority, function () {
                Sm(n);
              }));
            return;
          }
        } else if (e === 31) {
          if (((e = y(n)), e !== null)) {
            ((t.blockedOn = e),
              Hf(t.priority, function () {
                Sm(n);
              }));
            return;
          }
        } else if (e === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    t.blockedOn = null;
  }
  function Wl(t) {
    if (t.blockedOn !== null) return !1;
    for (var e = t.targetContainers; 0 < e.length;) {
      var n = $r(t.nativeEvent);
      if (n === null) {
        n = t.nativeEvent;
        var s = new n.constructor(n.type, n);
        ((Po = s), n.target.dispatchEvent(s), (Po = null));
      } else return ((e = Da(n)), e !== null && bm(e), (t.blockedOn = n), !1);
      e.shift();
    }
    return !0;
  }
  function Mm(t, e, n) {
    Wl(t) && n.delete(e);
  }
  function vx() {
    ((Wr = !1),
      Qn !== null && Wl(Qn) && (Qn = null),
      Zn !== null && Wl(Zn) && (Zn = null),
      Kn !== null && Wl(Kn) && (Kn = null),
      mi.forEach(Mm),
      yi.forEach(Mm));
  }
  function Il(t, e) {
    t.blockedOn === e &&
      ((t.blockedOn = null),
      Wr ||
        ((Wr = !0),
        a.unstable_scheduleCallback(a.unstable_NormalPriority, vx)));
  }
  var to = null;
  function zm(t) {
    to !== t &&
      ((to = t),
      a.unstable_scheduleCallback(a.unstable_NormalPriority, function () {
        to === t && (to = null);
        for (var e = 0; e < t.length; e += 3) {
          var n = t[e],
            s = t[e + 1],
            l = t[e + 2];
          if (typeof s != "function") {
            if (Pr(s || n) === null) continue;
            break;
          }
          var r = Da(n);
          r !== null &&
            (t.splice(e, 3),
            (e -= 3),
            $c(r, { pending: !0, data: l, method: n.method, action: s }, s, l));
        }
      }));
  }
  function fs(t) {
    function e(T) {
      return Il(T, t);
    }
    (Qn !== null && Il(Qn, t),
      Zn !== null && Il(Zn, t),
      Kn !== null && Il(Kn, t),
      mi.forEach(e),
      yi.forEach(e));
    for (var n = 0; n < Jn.length; n++) {
      var s = Jn[n];
      s.blockedOn === t && (s.blockedOn = null);
    }
    for (; 0 < Jn.length && ((n = Jn[0]), n.blockedOn === null);)
      (Em(n), n.blockedOn === null && Jn.shift());
    if (((n = (t.ownerDocument || t).$$reactFormReplay), n != null))
      for (s = 0; s < n.length; s += 3) {
        var l = n[s],
          r = n[s + 1],
          h = l[he] || null;
        if (typeof r == "function") h || zm(n);
        else if (h) {
          var v = null;
          if (r && r.hasAttribute("formAction")) {
            if (((l = r), (h = r[he] || null))) v = h.formAction;
            else if (Pr(l) !== null) continue;
          } else v = h.action;
          (typeof v == "function" ? (n[s + 1] = v) : (n.splice(s, 3), (s -= 3)),
            zm(n));
        }
      }
  }
  function Nm() {
    function t(r) {
      r.canIntercept &&
        r.info === "react-transition" &&
        r.intercept({
          handler: function () {
            return new Promise(function (h) {
              return (l = h);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function e() {
      (l !== null && (l(), (l = null)), s || setTimeout(n, 20));
    }
    function n() {
      if (!s && !navigation.transition) {
        var r = navigation.currentEntry;
        r &&
          r.url != null &&
          navigation.navigate(r.url, {
            state: r.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var s = !1,
        l = null;
      return (
        navigation.addEventListener("navigate", t),
        navigation.addEventListener("navigatesuccess", e),
        navigation.addEventListener("navigateerror", e),
        setTimeout(n, 100),
        function () {
          ((s = !0),
            navigation.removeEventListener("navigate", t),
            navigation.removeEventListener("navigatesuccess", e),
            navigation.removeEventListener("navigateerror", e),
            l !== null && (l(), (l = null)));
        }
      );
    }
  }
  function Ir(t) {
    this._internalRoot = t;
  }
  ((eo.prototype.render = Ir.prototype.render =
    function (t) {
      var e = this._internalRoot;
      if (e === null) throw Error(c(409));
      var n = e.current,
        s = Ce();
      xm(n, s, t, e, null, null);
    }),
    (eo.prototype.unmount = Ir.prototype.unmount =
      function () {
        var t = this._internalRoot;
        if (t !== null) {
          this._internalRoot = null;
          var e = t.containerInfo;
          (xm(t.current, 2, null, t, null, null), _l(), (e[Na] = null));
        }
      }));
  function eo(t) {
    this._internalRoot = t;
  }
  eo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Lf();
      t = { blockedOn: null, target: t, priority: e };
      for (var n = 0; n < Jn.length && e !== 0 && e < Jn[n].priority; n++);
      (Jn.splice(n, 0, t), n === 0 && Em(t));
    }
  };
  var Cm = i.version;
  if (Cm !== "19.2.8") throw Error(c(527, Cm, "19.2.8"));
  K.findDOMNode = function (t) {
    var e = t._reactInternals;
    if (e === void 0)
      throw typeof t.render == "function"
        ? Error(c(188))
        : ((t = Object.keys(t).join(",")), Error(c(268, t)));
    return (
      (t = m(e)),
      (t = t !== null ? x(t) : null),
      (t = t === null ? null : t.stateNode),
      t
    );
  };
  var xx = {
    bundleType: 0,
    version: "19.2.8",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.2.8",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var no = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!no.isDisabled && no.supportsFiber)
      try {
        ((Ms = no.inject(xx)), (be = no));
      } catch {}
  }
  return (
    (xi.createRoot = function (t, e) {
      if (!u(t)) throw Error(c(299));
      var n = !1,
        s = "",
        l = Uh,
        r = Bh,
        h = Lh;
      return (
        e != null &&
          (e.unstable_strictMode === !0 && (n = !0),
          e.identifierPrefix !== void 0 && (s = e.identifierPrefix),
          e.onUncaughtError !== void 0 && (l = e.onUncaughtError),
          e.onCaughtError !== void 0 && (r = e.onCaughtError),
          e.onRecoverableError !== void 0 && (h = e.onRecoverableError)),
        (e = gm(t, 1, !1, null, null, n, s, null, l, r, h, Nm)),
        (t[Na] = e.current),
        Vr(t),
        new Ir(e)
      );
    }),
    (xi.hydrateRoot = function (t, e, n) {
      if (!u(t)) throw Error(c(299));
      var s = !1,
        l = "",
        r = Uh,
        h = Bh,
        v = Lh,
        T = null;
      return (
        n != null &&
          (n.unstable_strictMode === !0 && (s = !0),
          n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
          n.onUncaughtError !== void 0 && (r = n.onUncaughtError),
          n.onCaughtError !== void 0 && (h = n.onCaughtError),
          n.onRecoverableError !== void 0 && (v = n.onRecoverableError),
          n.formState !== void 0 && (T = n.formState)),
        (e = gm(t, 1, !0, e, n ?? null, s, l, T, r, h, v, Nm)),
        (e.context = vm(null)),
        (n = e.current),
        (s = Ce()),
        (s = Yo(s)),
        (l = wn(s)),
        (l.callback = null),
        Vn(n, l, s),
        (n = s),
        (e.current.lanes = n),
        Ns(e, n),
        tn(e),
        (t[Na] = e.current),
        Vr(t),
        new eo(e)
      );
    }),
    (xi.version = "19.2.8"),
    xi
  );
}
var Hm;
function Cx() {
  if (Hm) return nu.exports;
  Hm = 1;
  function a() {
    if (!(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    ))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return (a(), (nu.exports = Nx()), nu.exports);
}
var Dx = Cx();
const tf = k.createContext({});
function No(a) {
  const i = k.useRef(null);
  return (i.current === null && (i.current = a()), i.current);
}
const Rx = typeof window < "u",
  fy = Rx ? k.useLayoutEffect : k.useEffect,
  Co = k.createContext(null);
function ef(a, i) {
  a.indexOf(i) === -1 && a.push(i);
}
function vo(a, i) {
  const o = a.indexOf(i);
  o > -1 && a.splice(o, 1);
}
const sn = (a, i, o) => (o > i ? i : o < a ? a : o);
let Do = () => {};
const Wn = {},
  dy = (a) => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(a),
  hy = (a) => typeof a == "object" && a !== null,
  py = (a) => /^0[^.\s]+$/u.test(a);
function my(a) {
  let i;
  return () => (i === void 0 && (i = a()), i);
}
const Ye = (a) => a,
  _i = (...a) => a.reduce((i, o) => (c) => o(i(c))),
  Di = (a, i, o) => {
    const c = i - a;
    return c ? (o - a) / c : 1;
  };
class nf {
  constructor() {
    this.subscriptions = [];
  }
  add(i) {
    return (ef(this.subscriptions, i), () => vo(this.subscriptions, i));
  }
  notify(i, o, c) {
    const u = this.subscriptions.length;
    if (u)
      if (u === 1) this.subscriptions[0](i, o, c);
      else
        for (let p = 0; p < u; p++) {
          const d = this.subscriptions[p];
          d && d(i, o, c);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Re = (a) => a * 1e3,
  ke = (a) => a / 1e3,
  yy = (a, i) => (i ? a * (1e3 / i) : 0),
  gy = (a, i, o) =>
    (((1 - 3 * o + 3 * i) * a + (3 * o - 6 * i)) * a + 3 * i) * a,
  Ox = 1e-7,
  wx = 12;
function Vx(a, i, o, c, u) {
  let p,
    d,
    y = 0;
  do ((d = i + (o - i) / 2), (p = gy(d, c, u) - a), p > 0 ? (o = d) : (i = d));
  while (Math.abs(p) > Ox && ++y < wx);
  return d;
}
function Ui(a, i, o, c) {
  if (a === i && o === c) return Ye;
  const u = (p) => Vx(p, 0, 1, a, o);
  return (p) => (p === 0 || p === 1 ? p : gy(u(p), i, c));
}
const vy = (a) => (i) => (i <= 0.5 ? a(2 * i) / 2 : (2 - a(2 * (1 - i))) / 2),
  xy = (a) => (i) => 1 - a(1 - i),
  Ay = Ui(0.33, 1.53, 0.69, 0.99),
  af = xy(Ay),
  by = vy(af),
  Sy = (a) =>
    a >= 1
      ? 1
      : (a *= 2) < 1
        ? 0.5 * af(a)
        : 0.5 * (2 - Math.pow(2, -10 * (a - 1))),
  sf = (a) => 1 - Math.sin(Math.acos(a)),
  Ty = xy(sf),
  jy = vy(sf),
  _x = Ui(0.42, 0, 1, 1),
  Ux = Ui(0, 0, 0.58, 1),
  Ey = Ui(0.42, 0, 0.58, 1),
  Bx = (a) => Array.isArray(a) && typeof a[0] != "number",
  My = (a) => Array.isArray(a) && typeof a[0] == "number",
  Lx = {
    linear: Ye,
    easeIn: _x,
    easeInOut: Ey,
    easeOut: Ux,
    circIn: sf,
    circInOut: jy,
    circOut: Ty,
    backIn: af,
    backInOut: by,
    backOut: Ay,
    anticipate: Sy,
  },
  Hx = (a) => typeof a == "string",
  Gm = (a) => {
    if (My(a)) {
      Do(a.length === 4);
      const [i, o, c, u] = a;
      return Ui(i, o, c, u);
    } else if (Hx(a)) return Lx[a];
    return a;
  },
  ao = [
    "setup",
    "read",
    "resolveKeyframes",
    "preUpdate",
    "update",
    "preRender",
    "render",
    "postRender",
  ];
function Gx(a) {
  let i = new Set(),
    o = new Set(),
    c = !1,
    u = !1;
  const p = new WeakSet();
  let d = { delta: 0, timestamp: 0, isProcessing: !1 };
  function y(m) {
    (p.has(m) && (g.schedule(m), a()), m(d));
  }
  const g = {
    schedule: (m, x = !1, A = !1) => {
      const O = A && c ? i : o;
      return (x && p.add(m), O.add(m), m);
    },
    cancel: (m) => {
      (o.delete(m), p.delete(m));
    },
    process: (m) => {
      if (((d = m), c)) {
        u = !0;
        return;
      }
      c = !0;
      const x = i;
      ((i = o),
        (o = x),
        i.forEach(y),
        i.clear(),
        (c = !1),
        u && ((u = !1), g.process(m)));
    },
  };
  return g;
}
const qx = 40;
function zy(a, i) {
  let o = !1,
    c = !0;
  const u = { delta: 0, timestamp: 0, isProcessing: !1 },
    p = () => (o = !0),
    d = ao.reduce((Q, Z) => ((Q[Z] = Gx(p)), Q), {}),
    {
      setup: y,
      read: g,
      resolveKeyframes: m,
      preUpdate: x,
      update: A,
      preRender: S,
      render: O,
      postRender: M,
    } = d,
    w = () => {
      const Q = Wn.useManualTiming,
        Z = Q ? u.timestamp : performance.now();
      ((o = !1),
        Q ||
          (u.delta = c ? 1e3 / 60 : Math.max(Math.min(Z - u.timestamp, qx), 1)),
        (u.timestamp = Z),
        (u.isProcessing = !0),
        y.process(u),
        g.process(u),
        m.process(u),
        x.process(u),
        A.process(u),
        S.process(u),
        O.process(u),
        M.process(u),
        (u.isProcessing = !1),
        o && i && ((c = !1), a(w)));
    },
    q = () => {
      ((o = !0), (c = !0), u.isProcessing || a(w));
    };
  return {
    schedule: ao.reduce((Q, Z) => {
      const nt = d[Z];
      return (
        (Q[Z] = (ct, F = !1, $ = !1) => (o || q(), nt.schedule(ct, F, $))),
        Q
      );
    }, {}),
    cancel: (Q) => {
      for (let Z = 0; Z < ao.length; Z++) d[ao[Z]].cancel(Q);
    },
    state: u,
    steps: d,
  };
}
const {
  schedule: _t,
  cancel: In,
  state: le,
  steps: lu,
} = zy(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0);
let ro;
function kx() {
  ro = void 0;
}
const fe = {
    now: () => (
      ro === void 0 &&
        fe.set(
          le.isProcessing || Wn.useManualTiming
            ? le.timestamp
            : performance.now(),
        ),
      ro
    ),
    set: (a) => {
      ((ro = a), queueMicrotask(kx));
    },
  },
  Ny = (a) => (i) => typeof i == "string" && i.startsWith(a),
  Cy = Ny("--"),
  Yx = Ny("var(--"),
  lf = (a) => (Yx(a) ? Xx.test(a.split("/*")[0].trim()) : !1),
  Xx =
    /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function qm(a) {
  return typeof a != "string" ? !1 : a.split("/*")[0].includes("var(--");
}
const Ts = {
    test: (a) => typeof a == "number",
    parse: parseFloat,
    transform: (a) => a,
  },
  Ri = { ...Ts, transform: (a) => sn(0, 1, a) },
  so = { ...Ts, default: 1 },
  ji = (a) => Math.round(a * 1e5) / 1e5,
  of = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function Qx(a) {
  return a == null;
}
const Zx =
    /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,
  cf = (a, i) => (o) =>
    !!(
      (typeof o == "string" && Zx.test(o) && o.startsWith(a)) ||
      (i && !Qx(o) && Object.prototype.hasOwnProperty.call(o, i))
    ),
  Dy = (a, i, o) => (c) => {
    if (typeof c != "string") return c;
    const [u, p, d, y] = c.match(of);
    return {
      [a]: parseFloat(u),
      [i]: parseFloat(p),
      [o]: parseFloat(d),
      alpha: y !== void 0 ? parseFloat(y) : 1,
    };
  },
  Kx = (a) => sn(0, 255, a),
  ou = { ...Ts, transform: (a) => Math.round(Kx(a)) },
  ja = {
    test: cf("rgb", "red"),
    parse: Dy("red", "green", "blue"),
    transform: ({ red: a, green: i, blue: o, alpha: c = 1 }) =>
      "rgba(" +
      ou.transform(a) +
      ", " +
      ou.transform(i) +
      ", " +
      ou.transform(o) +
      ", " +
      ji(Ri.transform(c)) +
      ")",
  };
function Jx(a) {
  let i = "",
    o = "",
    c = "",
    u = "";
  return (
    a.length > 5
      ? ((i = a.substring(1, 3)),
        (o = a.substring(3, 5)),
        (c = a.substring(5, 7)),
        (u = a.substring(7, 9)))
      : ((i = a.substring(1, 2)),
        (o = a.substring(2, 3)),
        (c = a.substring(3, 4)),
        (u = a.substring(4, 5)),
        (i += i),
        (o += o),
        (c += c),
        (u += u)),
    {
      red: parseInt(i, 16),
      green: parseInt(o, 16),
      blue: parseInt(c, 16),
      alpha: u ? parseInt(u, 16) / 255 : 1,
    }
  );
}
const Eu = { test: cf("#"), parse: Jx, transform: ja.transform },
  Bi = (a) => ({
    test: (i) =>
      typeof i == "string" && i.endsWith(a) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: (i) => `${i}${a}`,
  }),
  jn = Bi("deg"),
  an = Bi("%"),
  tt = Bi("px"),
  Fx = Bi("vh"),
  $x = Bi("vw"),
  km = {
    ...an,
    parse: (a) => an.parse(a) / 100,
    transform: (a) => an.transform(a * 100),
  },
  ys = {
    test: cf("hsl", "hue"),
    parse: Dy("hue", "saturation", "lightness"),
    transform: ({ hue: a, saturation: i, lightness: o, alpha: c = 1 }) =>
      "hsla(" +
      Math.round(a) +
      ", " +
      an.transform(ji(i)) +
      ", " +
      an.transform(ji(o)) +
      ", " +
      ji(Ri.transform(c)) +
      ")",
  },
  Ft = {
    test: (a) => ja.test(a) || Eu.test(a) || ys.test(a),
    parse: (a) =>
      ja.test(a) ? ja.parse(a) : ys.test(a) ? ys.parse(a) : Eu.parse(a),
    transform: (a) =>
      typeof a == "string"
        ? a
        : a.hasOwnProperty("red")
          ? ja.transform(a)
          : ys.transform(a),
    getAnimatableNone: (a) => {
      const i = Ft.parse(a);
      return ((i.alpha = 0), Ft.transform(i));
    },
  },
  Px =
    /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function Wx(a) {
  return (
    isNaN(a) &&
    typeof a == "string" &&
    (a.match(of)?.length || 0) + (a.match(Px)?.length || 0) > 0
  );
}
const Ry = "number",
  Oy = "color",
  Ix = "var",
  t2 = "var(",
  Ym = "${}",
  e2 =
    /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function bs(a) {
  const i = a.toString(),
    o = [],
    c = { color: [], number: [], var: [] },
    u = [];
  let p = 0;
  const y = i
    .replace(
      e2,
      (g) => (
        Ft.test(g)
          ? (c.color.push(p), u.push(Oy), o.push(Ft.parse(g)))
          : g.startsWith(t2)
            ? (c.var.push(p), u.push(Ix), o.push(g))
            : (c.number.push(p), u.push(Ry), o.push(parseFloat(g))),
        ++p,
        Ym
      ),
    )
    .split(Ym);
  return { values: o, split: y, indexes: c, types: u };
}
function n2(a) {
  return bs(a).values;
}
function wy({ split: a, types: i }) {
  const o = a.length;
  return (c) => {
    let u = "";
    for (let p = 0; p < o; p++)
      if (((u += a[p]), c[p] !== void 0)) {
        const d = i[p];
        d === Ry
          ? (u += ji(c[p]))
          : d === Oy
            ? (u += Ft.transform(c[p]))
            : (u += c[p]);
      }
    return u;
  };
}
function a2(a) {
  return wy(bs(a));
}
const s2 = (a) =>
    typeof a == "number" ? 0 : Ft.test(a) ? Ft.getAnimatableNone(a) : a,
  i2 = (a, i) =>
    typeof a == "number" ? (i?.trim().endsWith("/") ? a : 0) : s2(a);
function l2(a) {
  const i = bs(a);
  return wy(i)(i.values.map((c, u) => i2(c, i.split[u])));
}
const $e = {
  test: Wx,
  parse: n2,
  createTransformer: a2,
  getAnimatableNone: l2,
};
function cu(a, i, o) {
  return (
    o < 0 && (o += 1),
    o > 1 && (o -= 1),
    o < 1 / 6
      ? a + (i - a) * 6 * o
      : o < 1 / 2
        ? i
        : o < 2 / 3
          ? a + (i - a) * (2 / 3 - o) * 6
          : a
  );
}
function o2({ hue: a, saturation: i, lightness: o, alpha: c }) {
  ((a /= 360), (i /= 100), (o /= 100));
  let u = 0,
    p = 0,
    d = 0;
  if (!i) u = p = d = o;
  else {
    const y = o < 0.5 ? o * (1 + i) : o + i - o * i,
      g = 2 * o - y;
    ((u = cu(g, y, a + 1 / 3)), (p = cu(g, y, a)), (d = cu(g, y, a - 1 / 3)));
  }
  return {
    red: Math.round(u * 255),
    green: Math.round(p * 255),
    blue: Math.round(d * 255),
    alpha: c,
  };
}
function xo(a, i) {
  return (o) => (o > 0 ? i : a);
}
const Vt = (a, i, o) => a + (i - a) * o,
  ru = (a, i, o) => {
    const c = a * a,
      u = o * (i * i - c) + c;
    return u < 0 ? 0 : Math.sqrt(u);
  },
  c2 = [Eu, ja, ys],
  r2 = (a) => c2.find((i) => i.test(a));
function Xm(a) {
  const i = r2(a);
  if (!i) return !1;
  let o = i.parse(a);
  return (i === ys && (o = o2(o)), o);
}
const Qm = (a, i) => {
    const o = Xm(a),
      c = Xm(i);
    if (!o || !c) return xo(a, i);
    const u = { ...o };
    return (p) => (
      (u.red = ru(o.red, c.red, p)),
      (u.green = ru(o.green, c.green, p)),
      (u.blue = ru(o.blue, c.blue, p)),
      (u.alpha = Vt(o.alpha, c.alpha, p)),
      ja.transform(u)
    );
  },
  Mu = new Set(["none", "hidden"]);
function u2(a, i) {
  return Mu.has(a) ? (o) => (o <= 0 ? a : i) : (o) => (o >= 1 ? i : a);
}
function f2(a, i) {
  return (o) => Vt(a, i, o);
}
function rf(a) {
  return typeof a == "number"
    ? f2
    : typeof a == "string"
      ? lf(a)
        ? xo
        : Ft.test(a)
          ? Qm
          : p2
      : Array.isArray(a)
        ? Vy
        : typeof a == "object"
          ? Ft.test(a)
            ? Qm
            : d2
          : xo;
}
function Vy(a, i) {
  const o = [...a],
    c = o.length,
    u = a.map((p, d) => rf(p)(p, i[d]));
  return (p) => {
    for (let d = 0; d < c; d++) o[d] = u[d](p);
    return o;
  };
}
function d2(a, i) {
  const o = { ...a, ...i },
    c = {};
  for (const u in o)
    a[u] !== void 0 && i[u] !== void 0 && (c[u] = rf(a[u])(a[u], i[u]));
  return (u) => {
    for (const p in c) o[p] = c[p](u);
    return o;
  };
}
function h2(a, i) {
  const o = [],
    c = { color: 0, var: 0, number: 0 };
  for (let u = 0; u < i.values.length; u++) {
    const p = i.types[u],
      d = a.indexes[p][c[p]],
      y = a.values[d] ?? 0;
    ((o[u] = y), c[p]++);
  }
  return o;
}
const p2 = (a, i) => {
  const o = $e.createTransformer(i),
    c = bs(a),
    u = bs(i);
  return c.indexes.var.length === u.indexes.var.length &&
    c.indexes.color.length === u.indexes.color.length &&
    c.indexes.number.length >= u.indexes.number.length
    ? (Mu.has(a) && !u.values.length) || (Mu.has(i) && !c.values.length)
      ? u2(a, i)
      : _i(Vy(h2(c, u), u.values), o)
    : xo(a, i);
};
function _y(a, i, o) {
  return typeof a == "number" && typeof i == "number" && typeof o == "number"
    ? Vt(a, i, o)
    : rf(a)(a, i);
}
const m2 = (a) => {
    const i = ({ timestamp: o }) => a(o);
    return {
      start: (o = !0) => _t.update(i, o),
      stop: () => In(i),
      now: () => (le.isProcessing ? le.timestamp : fe.now()),
    };
  },
  Uy = (a, i, o = 10) => {
    let c = "";
    const u = Math.max(Math.round(i / o), 2);
    for (let p = 0; p < u; p++)
      c += Math.round(a(p / (u - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${c.substring(0, c.length - 2)})`;
  },
  Ao = 2e4;
function uf(a) {
  let i = 0;
  const o = 50;
  let c = a.next(i);
  for (; !c.done && i < Ao;) ((i += o), (c = a.next(i)));
  return i >= Ao ? 1 / 0 : i;
}
function y2(a, i = 100, o) {
  const c = o({ ...a, keyframes: [0, i] }),
    u = Math.min(uf(c), Ao);
  return {
    type: "keyframes",
    ease: (p) => c.next(u * p).value / i,
    duration: ke(u),
  };
}
const qt = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: 0.3,
  visualDuration: 0.3,
  restSpeed: { granular: 0.01, default: 2 },
  restDelta: { granular: 0.005, default: 0.5 },
  minDuration: 0.01,
  maxDuration: 10,
  minDamping: 0.05,
  maxDamping: 1,
};
function zu(a, i) {
  return a * Math.sqrt(1 - i * i);
}
const g2 = 12;
function v2(a, i, o) {
  let c = o;
  for (let u = 1; u < g2; u++) c = c - a(c) / i(c);
  return c;
}
const uu = 0.001;
function x2({
  duration: a = qt.duration,
  bounce: i = qt.bounce,
  velocity: o = qt.velocity,
  mass: c = qt.mass,
}) {
  let u,
    p,
    d = 1 - i;
  ((d = sn(qt.minDamping, qt.maxDamping, d)),
    (a = sn(qt.minDuration, qt.maxDuration, ke(a))),
    d < 1
      ? ((u = (m) => {
          const x = m * d,
            A = x * a,
            S = x - o,
            O = zu(m, d),
            M = Math.exp(-A);
          return uu - (S / O) * M;
        }),
        (p = (m) => {
          const A = m * d * a,
            S = A * o + o,
            O = Math.pow(d, 2) * Math.pow(m, 2) * a,
            M = Math.exp(-A),
            w = zu(Math.pow(m, 2), d);
          return ((-u(m) + uu > 0 ? -1 : 1) * ((S - O) * M)) / w;
        }))
      : ((u = (m) => {
          const x = Math.exp(-m * a),
            A = (m - o) * a + 1;
          return -uu + x * A;
        }),
        (p = (m) => {
          const x = Math.exp(-m * a),
            A = (o - m) * (a * a);
          return x * A;
        })));
  const y = 5 / a,
    g = v2(u, p, y);
  if (((a = Re(a)), isNaN(g)))
    return { stiffness: qt.stiffness, damping: qt.damping, duration: a };
  {
    const m = Math.pow(g, 2) * c;
    return { stiffness: m, damping: d * 2 * Math.sqrt(c * m), duration: a };
  }
}
const A2 = ["duration", "bounce"],
  b2 = ["stiffness", "damping", "mass"];
function Zm(a, i) {
  return i.some((o) => a[o] !== void 0);
}
function S2(a) {
  let i = {
    velocity: qt.velocity,
    stiffness: qt.stiffness,
    damping: qt.damping,
    mass: qt.mass,
    isResolvedFromDuration: !1,
    ...a,
  };
  if (!Zm(a, b2) && Zm(a, A2))
    if (((i.velocity = 0), a.visualDuration)) {
      const o = a.visualDuration,
        c = (2 * Math.PI) / (o * 1.2),
        u = c * c,
        p = 2 * sn(0.05, 1, 1 - (a.bounce || 0)) * Math.sqrt(u);
      i = { ...i, mass: qt.mass, stiffness: u, damping: p };
    } else {
      const o = x2({ ...a, velocity: 0 });
      ((i = { ...i, ...o, mass: qt.mass }), (i.isResolvedFromDuration = !0));
    }
  return i;
}
function bo(a = qt.visualDuration, i = qt.bounce) {
  const o =
    typeof a != "object"
      ? { visualDuration: a, keyframes: [0, 1], bounce: i }
      : a;
  let { restSpeed: c, restDelta: u } = o;
  const p = o.keyframes[0],
    d = o.keyframes[o.keyframes.length - 1],
    y = { done: !1, value: p },
    {
      stiffness: g,
      damping: m,
      mass: x,
      duration: A,
      velocity: S,
      isResolvedFromDuration: O,
    } = S2({ ...o, velocity: -ke(o.velocity || 0) }),
    M = S || 0,
    w = m / (2 * Math.sqrt(g * x)),
    q = d - p,
    Y = ke(Math.sqrt(g / x)),
    X = Math.abs(q) < 5;
  (c || (c = X ? qt.restSpeed.granular : qt.restSpeed.default),
    u || (u = X ? qt.restDelta.granular : qt.restDelta.default));
  let Q, Z, nt, ct, F, $;
  if (w < 1)
    ((nt = zu(Y, w)),
      (ct = (M + w * Y * q) / nt),
      (Q = (b) => {
        const ht = Math.exp(-w * Y * b);
        return d - ht * (ct * Math.sin(nt * b) + q * Math.cos(nt * b));
      }),
      (F = w * Y * ct + q * nt),
      ($ = w * Y * q - ct * nt),
      (Z = (b) =>
        Math.exp(-w * Y * b) * (F * Math.sin(nt * b) + $ * Math.cos(nt * b))));
  else if (w === 1) {
    Q = (ht) => d - Math.exp(-Y * ht) * (q + (M + Y * q) * ht);
    const b = M + Y * q;
    Z = (ht) => Math.exp(-Y * ht) * (Y * b * ht - M);
  } else {
    const b = Y * Math.sqrt(w * w - 1);
    Q = (Ct) => {
      const Mt = Math.exp(-w * Y * Ct),
        _ = Math.min(b * Ct, 300);
      return (
        d - (Mt * ((M + w * Y * q) * Math.sinh(_) + b * q * Math.cosh(_))) / b
      );
    };
    const ht = (M + w * Y * q) / b,
      ot = w * Y * ht - q * b,
      $t = w * Y * q - ht * b;
    Z = (Ct) => {
      const Mt = Math.exp(-w * Y * Ct),
        _ = Math.min(b * Ct, 300);
      return Mt * (ot * Math.sinh(_) + $t * Math.cosh(_));
    };
  }
  const st = {
    calculatedDuration: (O && A) || null,
    velocity: (b) => Re(Z(b)),
    next: (b) => {
      if (!O && w < 1) {
        const ot = Math.exp(-w * Y * b),
          $t = Math.sin(nt * b),
          Ct = Math.cos(nt * b),
          Mt = d - ot * (ct * $t + q * Ct),
          _ = Re(ot * (F * $t + $ * Ct));
        return (
          (y.done = Math.abs(_) <= c && Math.abs(d - Mt) <= u),
          (y.value = y.done ? d : Mt),
          y
        );
      }
      const ht = Q(b);
      if (O) y.done = b >= A;
      else {
        const ot = Re(Z(b));
        y.done = Math.abs(ot) <= c && Math.abs(d - ht) <= u;
      }
      return ((y.value = y.done ? d : ht), y);
    },
    toString: () => {
      const b = Math.min(uf(st), Ao),
        ht = Uy((ot) => st.next(b * ot).value, b, 30);
      return b + "ms " + ht;
    },
    toTransition: () => {},
  };
  return st;
}
bo.applyToOptions = (a) => {
  const i = y2(a, 100, bo);
  return (
    (a.ease = i.ease),
    (a.duration = Re(i.duration)),
    (a.type = "keyframes"),
    a
  );
};
const T2 = 5;
function By(a, i, o) {
  const c = Math.max(i - T2, 0);
  return yy(o - a(c), i - c);
}
function Nu({
  keyframes: a,
  velocity: i = 0,
  power: o = 0.8,
  timeConstant: c = 325,
  bounceDamping: u = 10,
  bounceStiffness: p = 500,
  modifyTarget: d,
  min: y,
  max: g,
  restDelta: m = 0.5,
  restSpeed: x,
}) {
  const A = a[0],
    S = { done: !1, value: A },
    O = ($) => (y !== void 0 && $ < y) || (g !== void 0 && $ > g),
    M = ($) =>
      y === void 0
        ? g
        : g === void 0 || Math.abs(y - $) < Math.abs(g - $)
          ? y
          : g;
  let w = o * i;
  const q = A + w,
    Y = d === void 0 ? q : d(q);
  Y !== q && (w = Y - A);
  const X = ($) => -w * Math.exp(-$ / c),
    Q = ($) => Y + X($),
    Z = ($) => {
      const st = X($),
        b = Q($);
      ((S.done = Math.abs(st) <= m), (S.value = S.done ? Y : b));
    };
  let nt, ct;
  const F = ($) => {
    O(S.value) &&
      ((nt = $),
      (ct = bo({
        keyframes: [S.value, M(S.value)],
        velocity: By(Q, $, S.value),
        damping: u,
        stiffness: p,
        restDelta: m,
        restSpeed: x,
      })));
  };
  return (
    F(0),
    {
      calculatedDuration: null,
      next: ($) => {
        let st = !1;
        return (
          !ct && nt === void 0 && ((st = !0), Z($), F($)),
          nt !== void 0 && $ >= nt ? ct.next($ - nt) : (!st && Z($), S)
        );
      },
    }
  );
}
function j2(a, i, o) {
  const c = [],
    u = o || Wn.mix || _y,
    p = a.length - 1;
  for (let d = 0; d < p; d++) {
    let y = u(a[d], a[d + 1]);
    if (i) {
      const g = Array.isArray(i) ? i[d] || Ye : i;
      y = _i(g, y);
    }
    c.push(y);
  }
  return c;
}
function E2(a, i, { clamp: o = !0, ease: c, mixer: u } = {}) {
  const p = a.length;
  if ((Do(p === i.length), p === 1)) return () => i[0];
  if (p === 2 && i[0] === i[1]) return () => i[1];
  const d = a[0] === a[1];
  a[0] > a[p - 1] && ((a = [...a].reverse()), (i = [...i].reverse()));
  const y = j2(i, c, u),
    g = y.length,
    m = (x) => {
      if (d && x < a[0]) return i[0];
      let A = 0;
      if (g > 1) for (; A < a.length - 2 && !(x < a[A + 1]); A++);
      const S = Di(a[A], a[A + 1], x);
      return y[A](S);
    };
  return o ? (x) => m(sn(a[0], a[p - 1], x)) : m;
}
function M2(a, i) {
  const o = a[a.length - 1];
  for (let c = 1; c <= i; c++) {
    const u = Di(0, i, c);
    a.push(Vt(o, 1, u));
  }
}
function z2(a) {
  const i = [0];
  return (M2(i, a.length - 1), i);
}
function N2(a, i) {
  return a.map((o) => o * i);
}
function C2(a, i) {
  return a.map(() => i || Ey).splice(0, a.length - 1);
}
function Ei({
  duration: a = 300,
  keyframes: i,
  times: o,
  ease: c = "easeInOut",
}) {
  const u = Bx(c) ? c.map(Gm) : Gm(c),
    p = { done: !1, value: i[0] },
    d = N2(o && o.length === i.length ? o : z2(i), a),
    y = E2(d, i, { ease: Array.isArray(u) ? u : C2(i, u) });
  return {
    calculatedDuration: a,
    next: (g) => ((p.value = y(g)), (p.done = g >= a), p),
  };
}
const D2 = (a) => a !== null;
function Ro(a, { repeat: i, repeatType: o = "loop" }, c, u = 1) {
  const p = a.filter(D2),
    y = u < 0 || (i && o !== "loop" && i % 2 === 1) ? 0 : p.length - 1;
  return !y || c === void 0 ? p[y] : c;
}
const R2 = { decay: Nu, inertia: Nu, tween: Ei, keyframes: Ei, spring: bo };
function Ly(a) {
  typeof a.type == "string" && (a.type = R2[a.type]);
}
class ff {
  constructor() {
    this.updateFinished();
  }
  get finished() {
    return this._finished;
  }
  updateFinished() {
    this._finished = new Promise((i) => {
      this.resolve = i;
    });
  }
  notifyFinished() {
    this.resolve();
  }
  then(i, o) {
    return this.finished.then(i, o);
  }
}
const O2 = (a) => a / 100;
class So extends ff {
  constructor(i) {
    (super(),
      (this.state = "idle"),
      (this.startTime = null),
      (this.isStopped = !1),
      (this.currentTime = 0),
      (this.holdTime = null),
      (this.playbackSpeed = 1),
      (this.delayState = { done: !1, value: void 0 }),
      (this.stop = () => {
        const { motionValue: o } = this.options;
        (o && o.updatedAt !== fe.now() && this.tick(fe.now()),
          (this.isStopped = !0),
          this.state !== "idle" && (this.teardown(), this.options.onStop?.()));
      }),
      (this.options = i),
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause());
  }
  initAnimation() {
    const { options: i } = this;
    Ly(i);
    const {
      type: o = Ei,
      repeat: c = 0,
      repeatDelay: u = 0,
      repeatType: p,
      velocity: d = 0,
    } = i;
    let { keyframes: y } = i;
    const g = o || Ei;
    g !== Ei &&
      typeof y[0] != "number" &&
      ((this.mixKeyframes = _i(O2, _y(y[0], y[1]))), (y = [0, 100]));
    const m = g({ ...i, keyframes: y });
    (p === "mirror" &&
      (this.mirroredGenerator = g({
        ...i,
        keyframes: [...y].reverse(),
        velocity: -d,
      })),
      m.calculatedDuration === null && (m.calculatedDuration = uf(m)));
    const { calculatedDuration: x } = m;
    ((this.calculatedDuration = x),
      (this.resolvedDuration = x + u),
      (this.totalDuration = this.resolvedDuration * (c + 1) - u),
      (this.generator = m));
  }
  updateTime(i) {
    const o = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null
      ? (this.currentTime = this.holdTime)
      : (this.currentTime = o);
  }
  tick(i, o = !1) {
    const {
      generator: c,
      totalDuration: u,
      mixKeyframes: p,
      mirroredGenerator: d,
      resolvedDuration: y,
      calculatedDuration: g,
    } = this;
    if (this.startTime === null) return c.next(0);
    const {
      delay: m = 0,
      keyframes: x,
      repeat: A,
      repeatType: S,
      repeatDelay: O,
      type: M,
      onUpdate: w,
      finalKeyframe: q,
    } = this.options;
    (this.speed > 0
      ? (this.startTime = Math.min(this.startTime, i))
      : this.speed < 0 &&
        (this.startTime = Math.min(i - u / this.speed, this.startTime)),
      o ? (this.currentTime = i) : this.updateTime(i));
    const Y = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1),
      X = this.playbackSpeed >= 0 ? Y < 0 : Y > u;
    ((this.currentTime = Math.max(Y, 0)),
      this.state === "finished" &&
        this.holdTime === null &&
        (this.currentTime = u));
    let Q = this.currentTime,
      Z = c;
    if (A) {
      const $ = Math.min(this.currentTime, u) / y;
      let st = Math.floor($),
        b = $ % 1;
      (!b && $ >= 1 && (b = 1),
        b === 1 && st--,
        (st = Math.min(st, A + 1)),
        st % 2 &&
          (S === "reverse"
            ? ((b = 1 - b), O && (b -= O / y))
            : S === "mirror" && (Z = d)),
        (Q = sn(0, 1, b) * y));
    }
    let nt;
    (X
      ? ((this.delayState.value = x[0]), (nt = this.delayState))
      : (nt = Z.next(Q)),
      p && !X && (nt.value = p(nt.value)));
    let { done: ct } = nt;
    !X &&
      g !== null &&
      (ct =
        this.playbackSpeed >= 0
          ? this.currentTime >= u
          : this.currentTime <= 0);
    const F =
      this.holdTime === null &&
      (this.state === "finished" || (this.state === "running" && ct));
    return (
      F && M !== Nu && (nt.value = Ro(x, this.options, q, this.speed)),
      w && w(nt.value),
      F && this.finish(),
      nt
    );
  }
  then(i, o) {
    return this.finished.then(i, o);
  }
  get duration() {
    return ke(this.calculatedDuration);
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + ke(i);
  }
  get time() {
    return ke(this.currentTime);
  }
  set time(i) {
    ((i = Re(i)),
      (this.currentTime = i),
      this.startTime === null ||
      this.holdTime !== null ||
      this.playbackSpeed === 0
        ? (this.holdTime = i)
        : this.driver &&
          (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver
        ? this.driver.start(!1)
        : ((this.startTime = 0),
          (this.state = "paused"),
          (this.holdTime = i),
          this.tick(i)));
  }
  getGeneratorVelocity() {
    const i = this.currentTime;
    if (i <= 0) return this.options.velocity || 0;
    if (this.generator.velocity) return this.generator.velocity(i);
    const o = this.generator.next(i).value;
    return By((c) => this.generator.next(c).value, i, o);
  }
  get speed() {
    return this.playbackSpeed;
  }
  set speed(i) {
    const o = this.playbackSpeed !== i;
    (o && this.driver && this.updateTime(fe.now()),
      (this.playbackSpeed = i),
      o && this.driver && (this.time = ke(this.currentTime)));
  }
  play() {
    if (this.isStopped) return;
    const { driver: i = m2, startTime: o } = this.options;
    (this.driver || (this.driver = i((u) => this.tick(u))),
      this.options.onPlay?.());
    const c = this.driver.now();
    (this.state === "finished"
      ? (this.updateFinished(), (this.startTime = c))
      : this.holdTime !== null
        ? (this.startTime = c - this.holdTime)
        : this.startTime || (this.startTime = o ?? c),
      this.state === "finished" &&
        this.speed < 0 &&
        (this.startTime += this.calculatedDuration),
      (this.holdTime = null),
      (this.state = "running"),
      this.driver.start());
  }
  pause() {
    ((this.state = "paused"),
      this.updateTime(fe.now()),
      (this.holdTime = this.currentTime));
  }
  complete() {
    (this.state !== "running" && this.play(),
      (this.state = "finished"),
      (this.holdTime = null));
  }
  finish() {
    (this.notifyFinished(),
      this.teardown(),
      (this.state = "finished"),
      this.options.onComplete?.());
  }
  cancel() {
    ((this.holdTime = null),
      (this.startTime = 0),
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.());
  }
  teardown() {
    ((this.state = "idle"),
      this.stopDriver(),
      (this.startTime = this.holdTime = null));
  }
  stopDriver() {
    this.driver && (this.driver.stop(), (this.driver = void 0));
  }
  sample(i) {
    return ((this.startTime = 0), this.tick(i, !0));
  }
  attachTimeline(i) {
    return (
      this.options.allowFlatten &&
        ((this.options.type = "keyframes"),
        (this.options.ease = "linear"),
        this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
    );
  }
}
function w2(a) {
  for (let i = 1; i < a.length; i++) a[i] ?? (a[i] = a[i - 1]);
}
const Ea = (a) => (a * 180) / Math.PI,
  Cu = (a) => {
    const i = Ea(Math.atan2(a[1], a[0]));
    return Du(i);
  },
  V2 = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: (a) => (Math.abs(a[0]) + Math.abs(a[3])) / 2,
    rotate: Cu,
    rotateZ: Cu,
    skewX: (a) => Ea(Math.atan(a[1])),
    skewY: (a) => Ea(Math.atan(a[2])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[2])) / 2,
  },
  Du = (a) => ((a = a % 360), a < 0 && (a += 360), a),
  Km = Cu,
  Jm = (a) => Math.sqrt(a[0] * a[0] + a[1] * a[1]),
  Fm = (a) => Math.sqrt(a[4] * a[4] + a[5] * a[5]),
  _2 = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: Jm,
    scaleY: Fm,
    scale: (a) => (Jm(a) + Fm(a)) / 2,
    rotateX: (a) => Du(Ea(Math.atan2(a[6], a[5]))),
    rotateY: (a) => Du(Ea(Math.atan2(-a[2], a[0]))),
    rotateZ: Km,
    rotate: Km,
    skewX: (a) => Ea(Math.atan(a[4])),
    skewY: (a) => Ea(Math.atan(a[1])),
    skew: (a) => (Math.abs(a[1]) + Math.abs(a[4])) / 2,
  };
function Ru(a) {
  return a.includes("scale") ? 1 : 0;
}
function Ou(a, i) {
  if (!a || a === "none") return Ru(i);
  const o = a.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let c, u;
  if (o) ((c = _2), (u = o));
  else {
    const y = a.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    ((c = V2), (u = y));
  }
  if (!u) return Ru(i);
  const p = c[i],
    d = u[1].split(",").map(B2);
  return typeof p == "function" ? p(d) : d[p];
}
const U2 = (a, i) => {
  const { transform: o = "none" } = getComputedStyle(a);
  return Ou(o, i);
};
function B2(a) {
  return parseFloat(a.trim());
}
const js = [
    "transformPerspective",
    "x",
    "y",
    "z",
    "translateX",
    "translateY",
    "translateZ",
    "scale",
    "scaleX",
    "scaleY",
    "rotate",
    "rotateX",
    "rotateY",
    "rotateZ",
    "skew",
    "skewX",
    "skewY",
  ],
  Es = new Set([...js, "pathRotation"]),
  $m = (a) => a === Ts || a === tt,
  L2 = new Set(["x", "y", "z"]),
  H2 = js.filter((a) => !L2.has(a));
function G2(a) {
  const i = [];
  return (
    H2.forEach((o) => {
      const c = a.getValue(o);
      c !== void 0 &&
        (i.push([o, c.get()]), c.set(o.startsWith("scale") ? 1 : 0));
    }),
    i
  );
}
const $n = {
  width: (
    { x: a },
    { paddingLeft: i = "0", paddingRight: o = "0", boxSizing: c },
  ) => {
    const u = a.max - a.min;
    return c === "border-box" ? u : u - parseFloat(i) - parseFloat(o);
  },
  height: (
    { y: a },
    { paddingTop: i = "0", paddingBottom: o = "0", boxSizing: c },
  ) => {
    const u = a.max - a.min;
    return c === "border-box" ? u : u - parseFloat(i) - parseFloat(o);
  },
  top: (a, { top: i }) => parseFloat(i),
  left: (a, { left: i }) => parseFloat(i),
  bottom: ({ y: a }, { top: i }) => parseFloat(i) + (a.max - a.min),
  right: ({ x: a }, { left: i }) => parseFloat(i) + (a.max - a.min),
  x: (a, { transform: i }) => Ou(i, "x"),
  y: (a, { transform: i }) => Ou(i, "y"),
};
$n.translateX = $n.x;
$n.translateY = $n.y;
const Ma = new Set();
let wu = !1,
  Vu = !1,
  _u = !1;
function Hy() {
  if (Vu) {
    const a = Array.from(Ma).filter((c) => c.needsMeasurement),
      i = new Set(a.map((c) => c.element)),
      o = new Map();
    (i.forEach((c) => {
      const u = G2(c);
      u.length && (o.set(c, u), c.render());
    }),
      a.forEach((c) => c.measureInitialState()),
      i.forEach((c) => {
        c.render();
        const u = o.get(c);
        u &&
          u.forEach(([p, d]) => {
            c.getValue(p)?.set(d);
          });
      }),
      a.forEach((c) => c.measureEndState()),
      a.forEach((c) => {
        c.suspendedScrollY !== void 0 && window.scrollTo(0, c.suspendedScrollY);
      }));
  }
  ((Vu = !1), (wu = !1), Ma.forEach((a) => a.complete(_u)), Ma.clear());
}
function Gy() {
  Ma.forEach((a) => {
    (a.readKeyframes(), a.needsMeasurement && (Vu = !0));
  });
}
function q2() {
  ((_u = !0), Gy(), Hy(), (_u = !1));
}
class df {
  constructor(i, o, c, u, p, d = !1) {
    ((this.state = "pending"),
      (this.isAsync = !1),
      (this.needsMeasurement = !1),
      (this.unresolvedKeyframes = [...i]),
      (this.onComplete = o),
      (this.name = c),
      (this.motionValue = u),
      (this.element = p),
      (this.isAsync = d));
  }
  scheduleResolve() {
    ((this.state = "scheduled"),
      this.isAsync
        ? (Ma.add(this),
          wu || ((wu = !0), _t.read(Gy), _t.resolveKeyframes(Hy)))
        : (this.readKeyframes(), this.complete()));
  }
  readKeyframes() {
    const {
      unresolvedKeyframes: i,
      name: o,
      element: c,
      motionValue: u,
    } = this;
    if (i[0] === null) {
      const p = u?.get(),
        d = i[i.length - 1];
      if (p !== void 0) i[0] = p;
      else if (c && o) {
        const y = c.readValue(o, d);
        y != null && (i[0] = y);
      }
      (i[0] === void 0 && (i[0] = d), u && p === void 0 && u.set(i[0]));
    }
    w2(i);
  }
  setFinalKeyframe() {}
  measureInitialState() {}
  renderEndStyles() {}
  measureEndState() {}
  complete(i = !1) {
    ((this.state = "complete"),
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Ma.delete(this));
  }
  cancel() {
    this.state === "scheduled" && (Ma.delete(this), (this.state = "pending"));
  }
  resume() {
    this.state === "pending" && this.scheduleResolve();
  }
}
const k2 = (a) => a.startsWith("--");
function qy(a, i, o) {
  k2(i) ? a.style.setProperty(i, o) : (a.style[i] = o);
}
const Y2 = {};
function ky(a, i) {
  const o = my(a);
  return () => Y2[i] ?? o();
}
const X2 = ky(() => window.ScrollTimeline !== void 0, "scrollTimeline"),
  Yy = ky(() => {
    try {
      document
        .createElement("div")
        .animate({ opacity: 0 }, { easing: "linear(0, 1)" });
    } catch {
      return !1;
    }
    return !0;
  }, "linearEasing"),
  Ti = ([a, i, o, c]) => `cubic-bezier(${a}, ${i}, ${o}, ${c})`,
  Pm = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: Ti([0, 0.65, 0.55, 1]),
    circOut: Ti([0.55, 0, 1, 0.45]),
    backIn: Ti([0.31, 0.01, 0.66, -0.59]),
    backOut: Ti([0.33, 1.53, 0.69, 0.99]),
  };
function Xy(a, i) {
  if (a)
    return typeof a == "function"
      ? Yy()
        ? Uy(a, i)
        : "ease-out"
      : My(a)
        ? Ti(a)
        : Array.isArray(a)
          ? a.map((o) => Xy(o, i) || Pm.easeOut)
          : Pm[a];
}
function Q2(
  a,
  i,
  o,
  {
    delay: c = 0,
    duration: u = 300,
    repeat: p = 0,
    repeatType: d = "loop",
    ease: y = "easeOut",
    times: g,
  } = {},
  m = void 0,
) {
  const x = { [i]: o };
  g && (x.offset = g);
  const A = Xy(y, u);
  Array.isArray(A) && (x.easing = A);
  const S = {
    delay: c,
    duration: u,
    easing: Array.isArray(A) ? "linear" : A,
    fill: "both",
    iterations: p + 1,
    direction: d === "reverse" ? "alternate" : "normal",
  };
  return (m && (S.pseudoElement = m), a.animate(x, S));
}
function Qy(a) {
  return typeof a == "function" && "applyToOptions" in a;
}
function Z2({ type: a, ...i }) {
  return Qy(a) && Yy()
    ? a.applyToOptions(i)
    : (i.duration ?? (i.duration = 300), i.ease ?? (i.ease = "easeOut"), i);
}
class Zy extends ff {
  constructor(i) {
    if (
      (super(),
      (this.finishedTime = null),
      (this.isStopped = !1),
      (this.manualStartTime = null),
      !i)
    )
      return;
    const {
      element: o,
      name: c,
      keyframes: u,
      pseudoElement: p,
      allowFlatten: d = !1,
      finalKeyframe: y,
      onComplete: g,
    } = i;
    ((this.isPseudoElement = !!p),
      (this.allowFlatten = d),
      (this.options = i),
      Do(typeof i.type != "string"));
    const m = Z2(i);
    ((this.animation = Q2(o, c, u, m, p)),
      m.autoplay === !1 && this.animation.pause(),
      (this.animation.onfinish = () => {
        if (((this.finishedTime = this.time), !p)) {
          const x = Ro(u, this.options, y, this.speed);
          (this.updateMotionValue && this.updateMotionValue(x),
            qy(o, c, x),
            this.animation.cancel());
        }
        (g?.(), this.notifyFinished());
      }));
  }
  play() {
    this.isStopped ||
      ((this.manualStartTime = null),
      this.animation.play(),
      this.state === "finished" && this.updateFinished());
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.finish?.();
  }
  cancel() {
    try {
      this.animation.cancel();
    } catch {}
  }
  stop() {
    if (this.isStopped) return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" ||
      i === "finished" ||
      (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel());
  }
  commitStyles() {
    const i = this.options?.element;
    !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.();
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return ke(Number(i));
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + ke(i);
  }
  get time() {
    return ke(Number(this.animation.currentTime) || 0);
  }
  set time(i) {
    const o = this.finishedTime !== null;
    ((this.manualStartTime = null),
      (this.finishedTime = null),
      (this.animation.currentTime = Re(i)),
      o && this.animation.pause());
  }
  get speed() {
    return this.animation.playbackRate;
  }
  set speed(i) {
    (i < 0 && (this.finishedTime = null), (this.animation.playbackRate = i));
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState;
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime);
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i;
  }
  attachTimeline({ timeline: i, rangeStart: o, rangeEnd: c, observe: u }) {
    return (
      this.allowFlatten &&
        this.animation.effect?.updateTiming({ easing: "linear" }),
      (this.animation.onfinish = null),
      i && X2()
        ? ((this.animation.timeline = i),
          o && (this.animation.rangeStart = o),
          c && (this.animation.rangeEnd = c),
          Ye)
        : u(this)
    );
  }
}
const Ky = { anticipate: Sy, backInOut: by, circInOut: jy };
function K2(a) {
  return a in Ky;
}
function J2(a) {
  typeof a.ease == "string" && K2(a.ease) && (a.ease = Ky[a.ease]);
}
const fu = 10;
class F2 extends Zy {
  constructor(i) {
    (J2(i),
      Ly(i),
      super(i),
      i.startTime !== void 0 &&
        i.autoplay !== !1 &&
        (this.startTime = i.startTime),
      (this.options = i));
  }
  updateMotionValue(i) {
    const {
      motionValue: o,
      onUpdate: c,
      onComplete: u,
      element: p,
      ...d
    } = this.options;
    if (!o) return;
    if (i !== void 0) {
      o.set(i);
      return;
    }
    const y = new So({ ...d, autoplay: !1 }),
      g = Math.max(fu, fe.now() - this.startTime),
      m = sn(0, fu, g - fu),
      x = y.sample(g).value,
      { name: A } = this.options;
    (p && A && qy(p, A, x),
      o.setWithVelocity(y.sample(Math.max(0, g - m)).value, x, m),
      y.stop());
  }
}
const Wm = (a, i) =>
  i === "zIndex"
    ? !1
    : !!(
        typeof a == "number" ||
        Array.isArray(a) ||
        (typeof a == "string" &&
          ($e.test(a) || a === "0") &&
          !a.startsWith("url("))
      );
function $2(a) {
  const i = a[0];
  if (a.length === 1) return !0;
  for (let o = 0; o < a.length; o++) if (a[o] !== i) return !0;
}
function P2(a, i, o, c) {
  const u = a[0];
  if (u === null) return !1;
  if (i === "display" || i === "visibility") return !0;
  const p = a[a.length - 1],
    d = Wm(u, i),
    y = Wm(p, i);
  return !d || !y ? !1 : $2(a) || ((o === "spring" || Qy(o)) && c);
}
function Uu(a) {
  ((a.duration = 0), (a.type = "keyframes"));
}
const Jy = new Set([
    "opacity",
    "clipPath",
    "filter",
    "transform",
    "backgroundColor",
  ]),
  W2 = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function I2(a) {
  for (let i = 0; i < a.length; i++)
    if (typeof a[i] == "string" && W2.test(a[i])) return !0;
  return !1;
}
const tA = new Set([
    "color",
    "backgroundColor",
    "outlineColor",
    "fill",
    "stroke",
    "borderColor",
    "borderTopColor",
    "borderRightColor",
    "borderBottomColor",
    "borderLeftColor",
  ]),
  eA = my(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function nA(a) {
  const {
      motionValue: i,
      name: o,
      repeatDelay: c,
      repeatType: u,
      damping: p,
      type: d,
      keyframes: y,
    } = a,
    g = i?.owner?.current;
  if (!(g instanceof HTMLElement) && !(g instanceof SVGElement)) return !1;
  const { onUpdate: m, transformTemplate: x } = i.owner.getProps();
  return (
    eA() &&
    o &&
    (Jy.has(o) || (tA.has(o) && I2(y))) &&
    (o !== "transform" || !x) &&
    !m &&
    !c &&
    u !== "mirror" &&
    p !== 0 &&
    d !== "inertia"
  );
}
const aA = 40;
class sA extends ff {
  constructor({
    autoplay: i = !0,
    delay: o = 0,
    type: c = "keyframes",
    repeat: u = 0,
    repeatDelay: p = 0,
    repeatType: d = "loop",
    keyframes: y,
    name: g,
    motionValue: m,
    element: x,
    ...A
  }) {
    (super(),
      (this.stop = () => {
        (this._animation && (this._animation.stop(), this.stopTimeline?.()),
          this.keyframeResolver?.cancel());
      }),
      (this.createdAt = fe.now()));
    const S = {
        autoplay: i,
        delay: o,
        type: c,
        repeat: u,
        repeatDelay: p,
        repeatType: d,
        name: g,
        motionValue: m,
        element: x,
        ...A,
      },
      O = x?.KeyframeResolver || df;
    ((this.keyframeResolver = new O(
      y,
      (M, w, q) => this.onKeyframesResolved(M, w, S, !q),
      g,
      m,
      x,
    )),
      this.keyframeResolver?.scheduleResolve());
  }
  onKeyframesResolved(i, o, c, u) {
    this.keyframeResolver = void 0;
    const {
      name: p,
      type: d,
      velocity: y,
      delay: g,
      isHandoff: m,
      onUpdate: x,
    } = c;
    this.resolvedAt = fe.now();
    let A = !0;
    P2(i, p, d, y) ||
      ((A = !1),
      (Wn.instantAnimations || !g) && x?.(Ro(i, c, o)),
      (i[0] = i[i.length - 1]),
      Uu(c),
      (c.repeat = 0));
    const O = {
        startTime: u
          ? this.resolvedAt
            ? this.resolvedAt - this.createdAt > aA
              ? this.resolvedAt
              : this.createdAt
            : this.createdAt
          : void 0,
        finalKeyframe: o,
        ...c,
        keyframes: i,
      },
      M = A && !m && nA(O),
      w = O.motionValue?.owner?.current;
    let q;
    if (M)
      try {
        q = new F2({ ...O, element: w });
      } catch {
        q = new So(O);
      }
    else q = new So(O);
    (q.finished
      .then(() => {
        this.notifyFinished();
      })
      .catch(Ye),
      this.pendingTimeline &&
        ((this.stopTimeline = q.attachTimeline(this.pendingTimeline)),
        (this.pendingTimeline = void 0)),
      (this._animation = q));
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished;
  }
  then(i, o) {
    return this.finished.finally(i).then(() => {});
  }
  get animation() {
    return (
      this._animation || (this.keyframeResolver?.resume(), q2()),
      this._animation
    );
  }
  get duration() {
    return this.animation.duration;
  }
  get iterationDuration() {
    return this.animation.iterationDuration;
  }
  get time() {
    return this.animation.time;
  }
  set time(i) {
    this.animation.time = i;
  }
  get speed() {
    return this.animation.speed;
  }
  get state() {
    return this.animation.state;
  }
  set speed(i) {
    this.animation.speed = i;
  }
  get startTime() {
    return this.animation.startTime;
  }
  attachTimeline(i) {
    return (
      this._animation
        ? (this.stopTimeline = this.animation.attachTimeline(i))
        : (this.pendingTimeline = i),
      () => this.stop()
    );
  }
  play() {
    this.animation.play();
  }
  pause() {
    this.animation.pause();
  }
  complete() {
    this.animation.complete();
  }
  cancel() {
    (this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel());
  }
}
function Fy(a, i, o, c = 0, u = 1) {
  const p = Array.from(a)
      .sort((m, x) => m.sortNodePosition(x))
      .indexOf(i),
    d = a.size,
    y = (d - 1) * c;
  return typeof o == "function" ? o(p, d) : u === 1 ? p * c : y - p * c;
}
const Im = 30,
  iA = (a) => !isNaN(parseFloat(a));
class lA {
  constructor(i, o = {}) {
    ((this.canTrackVelocity = null),
      (this.events = {}),
      (this.updateAndNotify = (c) => {
        const u = fe.now();
        if (
          (this.updatedAt !== u && this.setPrevFrameValue(),
          (this.prev = this.current),
          this.setCurrent(c),
          this.current !== this.prev &&
            (this.events.change?.notify(this.current), this.dependents))
        )
          for (const p of this.dependents) p.dirty();
      }),
      (this.hasAnimated = !1),
      this.setCurrent(i),
      (this.owner = o.owner));
  }
  setCurrent(i) {
    ((this.current = i),
      (this.updatedAt = fe.now()),
      this.canTrackVelocity === null &&
        i !== void 0 &&
        (this.canTrackVelocity = iA(this.current)));
  }
  setPrevFrameValue(i = this.current) {
    ((this.prevFrameValue = i), (this.prevUpdatedAt = this.updatedAt));
  }
  onChange(i) {
    return this.on("change", i);
  }
  on(i, o) {
    this.events[i] || (this.events[i] = new nf());
    const c = this.events[i].add(o);
    return i === "change"
      ? () => {
          (c(),
            _t.read(() => {
              this.events.change.getSize() || this.stop();
            }));
        }
      : c;
  }
  clearListeners() {
    for (const i in this.events) this.events[i].clear();
  }
  attach(i, o) {
    ((this.passiveEffect = i), (this.stopPassiveEffect = o));
  }
  set(i) {
    this.passiveEffect
      ? this.passiveEffect(i, this.updateAndNotify)
      : this.updateAndNotify(i);
  }
  setWithVelocity(i, o, c) {
    (this.set(o),
      (this.prev = void 0),
      (this.prevFrameValue = i),
      (this.prevUpdatedAt = this.updatedAt - c));
  }
  jump(i, o = !0) {
    (this.updateAndNotify(i),
      (this.prev = i),
      (this.prevUpdatedAt = this.prevFrameValue = void 0),
      o && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
  dirty() {
    this.events.change?.notify(this.current);
  }
  addDependent(i) {
    (this.dependents || (this.dependents = new Set()), this.dependents.add(i));
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i);
  }
  get() {
    return this.current;
  }
  getPrevious() {
    return this.prev;
  }
  getVelocity() {
    const i = fe.now();
    if (
      !this.canTrackVelocity ||
      this.prevFrameValue === void 0 ||
      i - this.updatedAt > Im
    )
      return 0;
    const o = Math.min(this.updatedAt - this.prevUpdatedAt, Im);
    return yy(parseFloat(this.current) - parseFloat(this.prevFrameValue), o);
  }
  start(i) {
    return (
      this.stop(),
      new Promise((o) => {
        ((this.hasAnimated = !0),
          (this.animation = i(o)),
          this.events.animationStart && this.events.animationStart.notify());
      }).then(() => {
        (this.events.animationComplete &&
          this.events.animationComplete.notify(),
          this.clearAnimation());
      })
    );
  }
  stop() {
    (this.animation &&
      (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation());
  }
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  destroy() {
    (this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect());
  }
}
function Ss(a, i) {
  return new lA(a, i);
}
function hf(a, i) {
  if (a?.inherit && i) {
    const { inherit: o, ...c } = a;
    return { ...i, ...c };
  }
  return a;
}
function pf(a, i) {
  const o = a?.[i] ?? a?.default ?? a;
  return o !== a ? hf(o, a) : o;
}
const oA = { type: "spring", stiffness: 500, damping: 25, restSpeed: 10 },
  cA = (a) => ({
    type: "spring",
    stiffness: 550,
    damping: a === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10,
  }),
  rA = { type: "keyframes", duration: 0.8 },
  uA = { type: "keyframes", ease: [0.25, 0.1, 0.35, 1], duration: 0.3 },
  fA = (a, { keyframes: i }) =>
    i.length > 2
      ? rA
      : Es.has(a)
        ? a.startsWith("scale")
          ? cA(i[1])
          : oA
        : uA,
  dA = new Set([
    "when",
    "delay",
    "delayChildren",
    "staggerChildren",
    "staggerDirection",
    "repeat",
    "repeatType",
    "repeatDelay",
    "from",
    "elapsed",
  ]);
function hA(a) {
  for (const i in a) if (!dA.has(i)) return !0;
  return !1;
}
const mf =
    (a, i, o, c = {}, u, p) =>
    (d) => {
      const y = pf(c, a) || {},
        g = y.delay || c.delay || 0;
      let { elapsed: m = 0 } = c;
      m = m - Re(g);
      const x = {
        keyframes: Array.isArray(o) ? o : [null, o],
        ease: "easeOut",
        velocity: i.getVelocity(),
        ...y,
        delay: -m,
        onUpdate: (S) => {
          (i.set(S), y.onUpdate && y.onUpdate(S));
        },
        onComplete: () => {
          (d(), y.onComplete && y.onComplete());
        },
        name: a,
        motionValue: i,
        element: p ? void 0 : u,
      };
      (hA(y) || Object.assign(x, fA(a, x)),
        x.duration && (x.duration = Re(x.duration)),
        x.repeatDelay && (x.repeatDelay = Re(x.repeatDelay)),
        x.from !== void 0 && (x.keyframes[0] = x.from));
      let A = !1;
      if (
        ((x.type === !1 || (x.duration === 0 && !x.repeatDelay)) &&
          (Uu(x), x.delay === 0 && (A = !0)),
        (Wn.instantAnimations ||
          Wn.skipAnimations ||
          u?.shouldSkipAnimations ||
          y.skipAnimations) &&
          ((A = !0), Uu(x), (x.delay = 0)),
        (x.allowFlatten = !y.type && !y.ease),
        A && !p && i.get() !== void 0)
      ) {
        const S = Ro(x.keyframes, y);
        if (S !== void 0) {
          _t.update(() => {
            (x.onUpdate(S), x.onComplete());
          });
          return;
        }
      }
      return y.isSync ? new So(x) : new sA(x);
    },
  pA = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function mA(a) {
  const i = pA.exec(a);
  if (!i) return [,];
  const [, o, c, u] = i;
  return [`--${o ?? c}`, u];
}
function $y(a, i, o = 1) {
  const [c, u] = mA(a);
  if (!c) return;
  const p = window.getComputedStyle(i).getPropertyValue(c);
  if (p) {
    const d = p.trim();
    return dy(d) ? parseFloat(d) : d;
  }
  return lf(u) ? $y(u, i, o + 1) : u;
}
function t1(a) {
  const i = [{}, {}];
  return (
    a?.values.forEach((o, c) => {
      ((i[0][c] = o.get()), (i[1][c] = o.getVelocity()));
    }),
    i
  );
}
function yf(a, i, o, c) {
  if (typeof i == "function") {
    const [u, p] = t1(c);
    i = i(o !== void 0 ? o : a.custom, u, p);
  }
  if (
    (typeof i == "string" && (i = a.variants && a.variants[i]),
    typeof i == "function")
  ) {
    const [u, p] = t1(c);
    i = i(o !== void 0 ? o : a.custom, u, p);
  }
  return i;
}
function As(a, i, o) {
  const c = a.getProps();
  return yf(c, i, o !== void 0 ? o : c.custom, a);
}
const Py = new Set([
    "width",
    "height",
    "top",
    "left",
    "right",
    "bottom",
    ...js,
  ]),
  Bu = (a) => Array.isArray(a);
function yA(a, i, o) {
  a.hasValue(i) ? a.getValue(i).set(o) : a.addValue(i, Ss(o));
}
function gA(a) {
  return Bu(a) ? a[a.length - 1] || 0 : a;
}
function vA(a, i) {
  const o = As(a, i);
  let { transitionEnd: c = {}, transition: u = {}, ...p } = o || {};
  p = { ...p, ...c };
  for (const d in p) {
    const y = gA(p[d]);
    yA(a, d, y);
  }
}
const ce = (a) => !!(a && a.getVelocity);
function xA(a) {
  return !!(ce(a) && a.add);
}
function Lu(a, i) {
  const o = a.getValue("willChange");
  if (xA(o)) return o.add(i);
  if (!o && Wn.WillChange) {
    const c = new Wn.WillChange("auto");
    (a.addValue("willChange", c), c.add(i));
  }
}
function gf(a) {
  return a.replace(/([A-Z])/g, (i) => `-${i.toLowerCase()}`);
}
const AA = "framerAppearId",
  Wy = "data-" + gf(AA);
function Iy(a) {
  return a.props[Wy];
}
function bA({ protectedKeys: a, needsAnimating: i }, o) {
  const c = a.hasOwnProperty(o) && i[o] !== !0;
  return ((i[o] = !1), c);
}
function t0(a, i, { delay: o = 0, transitionOverride: c, type: u } = {}) {
  let { transition: p, transitionEnd: d, ...y } = i;
  const g = a.getDefaultTransition();
  p = p ? hf(p, g) : g;
  const m = p?.reduceMotion,
    x = p?.skipAnimations;
  c && (p = c);
  const A = [],
    S = u && a.animationState && a.animationState.getState()[u],
    O = p?.path;
  O && O.animateVisualElement(a, y, p, o, A);
  for (const M in y) {
    const w = a.getValue(M, a.latestValues[M] ?? null),
      q = y[M];
    if (q === void 0 || (S && bA(S, M))) continue;
    const Y = { delay: o, ...pf(p || {}, M) };
    x && (Y.skipAnimations = !0);
    const X = w.get();
    if (
      X !== void 0 &&
      !w.isAnimating() &&
      !Array.isArray(q) &&
      q === X &&
      !Y.velocity
    ) {
      _t.update(() => w.set(q));
      continue;
    }
    let Q = !1;
    if (window.MotionHandoffAnimation) {
      const ct = Iy(a);
      if (ct) {
        const F = window.MotionHandoffAnimation(ct, M, _t);
        F !== null && ((Y.startTime = F), (Q = !0));
      }
    }
    Lu(a, M);
    const Z = m ?? a.shouldReduceMotion;
    w.start(mf(M, w, q, Z && Py.has(M) ? { type: !1 } : Y, a, Q));
    const nt = w.animation;
    nt && A.push(nt);
  }
  if (d) {
    const M = () =>
      _t.update(() => {
        d && vA(a, d);
      });
    A.length ? Promise.all(A).then(M) : M();
  }
  return A;
}
function Hu(a, i, o = {}) {
  const c = As(a, i, o.type === "exit" ? a.presenceContext?.custom : void 0);
  let { transition: u = a.getDefaultTransition() || {} } = c || {};
  o.transitionOverride && (u = o.transitionOverride);
  const p = c ? () => Promise.all(t0(a, c, o)) : () => Promise.resolve(),
    d =
      a.variantChildren && a.variantChildren.size
        ? (g = 0) => {
            const {
              delayChildren: m = 0,
              staggerChildren: x,
              staggerDirection: A,
            } = u;
            return SA(a, i, g, m, x, A, o);
          }
        : () => Promise.resolve(),
    { when: y } = u;
  if (y) {
    const [g, m] = y === "beforeChildren" ? [p, d] : [d, p];
    return g().then(() => m());
  } else return Promise.all([p(), d(o.delay)]);
}
function SA(a, i, o = 0, c = 0, u = 0, p = 1, d) {
  const y = [];
  for (const g of a.variantChildren)
    (g.notify("AnimationStart", i),
      y.push(
        Hu(g, i, {
          ...d,
          delay:
            o +
            (typeof c == "function" ? 0 : c) +
            Fy(a.variantChildren, g, c, u, p),
        }).then(() => g.notify("AnimationComplete", i)),
      ));
  return Promise.all(y);
}
function TA(a, i, o = {}) {
  a.notify("AnimationStart", i);
  let c;
  if (Array.isArray(i)) {
    const u = i.map((p) => Hu(a, p, o));
    c = Promise.all(u);
  } else if (typeof i == "string") c = Hu(a, i, o);
  else {
    const u = typeof i == "function" ? As(a, i, o.custom) : i;
    c = Promise.all(t0(a, u, o));
  }
  return c.then(() => {
    a.notify("AnimationComplete", i);
  });
}
const jA = { test: (a) => a === "auto", parse: (a) => a },
  e0 = (a) => (i) => i.test(a),
  n0 = [Ts, tt, an, jn, $x, Fx, jA],
  e1 = (a) => n0.find(e0(a));
function EA(a) {
  return typeof a == "number"
    ? a === 0
    : a !== null
      ? a === "none" || a === "0" || py(a)
      : !0;
}
const MA = new Set(["brightness", "contrast", "saturate", "opacity"]);
function zA(a) {
  const [i, o] = a.slice(0, -1).split("(");
  if (i === "drop-shadow") return a;
  const [c] = o.match(of) || [];
  if (!c) return a;
  const u = o.replace(c, "");
  let p = MA.has(i) ? 1 : 0;
  return (c !== o && (p *= 100), i + "(" + p + u + ")");
}
const NA = /\b([a-z-]*)\(.*?\)/gu,
  Gu = {
    ...$e,
    getAnimatableNone: (a) => {
      const i = a.match(NA);
      return i ? i.map(zA).join(" ") : a;
    },
  },
  qu = {
    ...$e,
    getAnimatableNone: (a) => {
      const i = $e.parse(a);
      return $e.createTransformer(a)(
        i.map((c) =>
          typeof c == "number"
            ? 0
            : typeof c == "object"
              ? { ...c, alpha: 1 }
              : c,
        ),
      );
    },
  },
  n1 = { ...Ts, transform: Math.round },
  CA = {
    rotate: jn,
    pathRotation: jn,
    rotateX: jn,
    rotateY: jn,
    rotateZ: jn,
    scale: so,
    scaleX: so,
    scaleY: so,
    scaleZ: so,
    skew: jn,
    skewX: jn,
    skewY: jn,
    distance: tt,
    translateX: tt,
    translateY: tt,
    translateZ: tt,
    x: tt,
    y: tt,
    z: tt,
    perspective: tt,
    transformPerspective: tt,
    opacity: Ri,
    originX: km,
    originY: km,
    originZ: tt,
  },
  To = {
    borderWidth: tt,
    borderTopWidth: tt,
    borderRightWidth: tt,
    borderBottomWidth: tt,
    borderLeftWidth: tt,
    borderRadius: tt,
    borderTopLeftRadius: tt,
    borderTopRightRadius: tt,
    borderBottomRightRadius: tt,
    borderBottomLeftRadius: tt,
    width: tt,
    maxWidth: tt,
    height: tt,
    maxHeight: tt,
    top: tt,
    right: tt,
    bottom: tt,
    left: tt,
    inset: tt,
    insetBlock: tt,
    insetBlockStart: tt,
    insetBlockEnd: tt,
    insetInline: tt,
    insetInlineStart: tt,
    insetInlineEnd: tt,
    padding: tt,
    paddingTop: tt,
    paddingRight: tt,
    paddingBottom: tt,
    paddingLeft: tt,
    paddingBlock: tt,
    paddingBlockStart: tt,
    paddingBlockEnd: tt,
    paddingInline: tt,
    paddingInlineStart: tt,
    paddingInlineEnd: tt,
    margin: tt,
    marginTop: tt,
    marginRight: tt,
    marginBottom: tt,
    marginLeft: tt,
    marginBlock: tt,
    marginBlockStart: tt,
    marginBlockEnd: tt,
    marginInline: tt,
    marginInlineStart: tt,
    marginInlineEnd: tt,
    fontSize: tt,
    backgroundPositionX: tt,
    backgroundPositionY: tt,
    ...CA,
    zIndex: n1,
    fillOpacity: Ri,
    strokeOpacity: Ri,
    numOctaves: n1,
  },
  DA = {
    ...To,
    color: Ft,
    backgroundColor: Ft,
    outlineColor: Ft,
    fill: Ft,
    stroke: Ft,
    borderColor: Ft,
    borderTopColor: Ft,
    borderRightColor: Ft,
    borderBottomColor: Ft,
    borderLeftColor: Ft,
    filter: Gu,
    WebkitFilter: Gu,
    mask: qu,
    WebkitMask: qu,
  },
  a0 = (a) => DA[a],
  RA = new Set([Gu, qu]);
function s0(a, i) {
  let o = a0(a);
  return (
    RA.has(o) || (o = $e),
    o.getAnimatableNone ? o.getAnimatableNone(i) : void 0
  );
}
const OA = new Set(["auto", "none", "0"]);
function wA(a, i, o) {
  let c = 0,
    u;
  for (; c < a.length && !u;) {
    const p = a[c];
    (typeof p == "string" && !OA.has(p) && bs(p).values.length && (u = a[c]),
      c++);
  }
  if (u && o) for (const p of i) a[p] = s0(o, u);
}
class VA extends df {
  constructor(i, o, c, u, p) {
    super(i, o, c, u, p, !0);
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: o, name: c } = this;
    if (!o || !o.current) return;
    super.readKeyframes();
    for (let x = 0; x < i.length; x++) {
      let A = i[x];
      if (typeof A == "string" && ((A = A.trim()), lf(A))) {
        const S = $y(A, o.current);
        (S !== void 0 && (i[x] = S),
          x === i.length - 1 && (this.finalKeyframe = A));
      }
    }
    if ((this.resolveNoneKeyframes(), !Py.has(c) || i.length !== 2)) return;
    const [u, p] = i,
      d = e1(u),
      y = e1(p),
      g = qm(u),
      m = qm(p);
    if (g !== m && $n[c]) {
      this.needsMeasurement = !0;
      return;
    }
    if (d !== y)
      if ($m(d) && $m(y))
        for (let x = 0; x < i.length; x++) {
          const A = i[x];
          typeof A == "string" && (i[x] = parseFloat(A));
        }
      else $n[c] && (this.needsMeasurement = !0);
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: o } = this,
      c = [];
    for (let u = 0; u < i.length; u++) (i[u] === null || EA(i[u])) && c.push(u);
    c.length && wA(i, c, o);
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: o, name: c } = this;
    if (!i || !i.current) return;
    (c === "height" && (this.suspendedScrollY = window.pageYOffset),
      (this.measuredOrigin = $n[c](
        i.measureViewportBox(),
        window.getComputedStyle(i.current),
      )),
      (o[0] = this.measuredOrigin));
    const u = o[o.length - 1];
    u !== void 0 && i.getValue(c, u).jump(u, !1);
  }
  measureEndState() {
    const { element: i, name: o, unresolvedKeyframes: c } = this;
    if (!i || !i.current) return;
    const u = i.getValue(o);
    u && u.jump(this.measuredOrigin, !1);
    const p = c.length - 1,
      d = c[p];
    ((c[p] = $n[o](i.measureViewportBox(), window.getComputedStyle(i.current))),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      this.removedTransforms?.length &&
        this.removedTransforms.forEach(([y, g]) => {
          i.getValue(y).set(g);
        }),
      this.resolveNoneKeyframes());
  }
}
const vf = [
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderBottomRightRadius",
  "borderBottomLeftRadius",
];
function i0(a, i, o) {
  if (a == null) return [];
  if (a instanceof EventTarget) return [a];
  if (typeof a == "string") {
    let c = document;
    const u = o?.[a] ?? c.querySelectorAll(a);
    return u ? Array.from(u) : [];
  }
  return Array.from(a).filter((c) => c != null);
}
const ku = (a, i) => (i && typeof a == "number" ? i.transform(a) : a);
function Yu(a) {
  return hy(a) && "offsetHeight" in a && !("ownerSVGElement" in a);
}
const { schedule: xf } = zy(queueMicrotask, !1),
  Fe = { x: !1, y: !1 };
function l0() {
  return Fe.x || Fe.y;
}
function _A(a) {
  return a === "x" || a === "y"
    ? Fe[a]
      ? null
      : ((Fe[a] = !0),
        () => {
          Fe[a] = !1;
        })
    : Fe.x || Fe.y
      ? null
      : ((Fe.x = Fe.y = !0),
        () => {
          Fe.x = Fe.y = !1;
        });
}
function o0(a, i) {
  const o = i0(a),
    c = new AbortController(),
    u = { passive: !0, ...i, signal: c.signal };
  return [o, u, () => c.abort()];
}
function UA(a) {
  return !(a.pointerType === "touch" || l0());
}
function BA(a, i, o = {}) {
  const [c, u, p] = o0(a, o);
  return (
    c.forEach((d) => {
      let y = !1,
        g = !1,
        m;
      const x = () => {
          d.removeEventListener("pointerleave", M);
        },
        A = (q) => {
          (m && (m(q), (m = void 0)), x());
        },
        S = (q) => {
          ((y = !1),
            window.removeEventListener("pointerup", S),
            window.removeEventListener("pointercancel", S),
            g && ((g = !1), A(q)));
        },
        O = () => {
          ((y = !0),
            window.addEventListener("pointerup", S, u),
            window.addEventListener("pointercancel", S, u));
        },
        M = (q) => {
          if (q.pointerType !== "touch") {
            if (y) {
              g = !0;
              return;
            }
            A(q);
          }
        },
        w = (q) => {
          if (!UA(q)) return;
          g = !1;
          const Y = i(d, q);
          typeof Y == "function" &&
            ((m = Y), d.addEventListener("pointerleave", M, u));
        };
      (d.addEventListener("pointerenter", w, u),
        d.addEventListener("pointerdown", O, u));
    }),
    p
  );
}
const c0 = (a, i) => (i ? (a === i ? !0 : c0(a, i.parentElement)) : !1),
  Af = (a) =>
    a.pointerType === "mouse"
      ? typeof a.button != "number" || a.button <= 0
      : a.isPrimary !== !1,
  LA = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function HA(a) {
  return LA.has(a.tagName) || a.isContentEditable === !0;
}
const GA = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function qA(a) {
  return GA.has(a.tagName) || a.isContentEditable === !0;
}
const uo = new WeakSet();
function a1(a) {
  return (i) => {
    i.key === "Enter" && a(i);
  };
}
function du(a, i) {
  a.dispatchEvent(
    new PointerEvent("pointer" + i, { isPrimary: !0, bubbles: !0 }),
  );
}
const kA = (a, i) => {
  const o = a.currentTarget;
  if (!o) return;
  const c = a1(() => {
    if (uo.has(o)) return;
    du(o, "down");
    const u = a1(() => {
        du(o, "up");
      }),
      p = () => du(o, "cancel");
    (o.addEventListener("keyup", u, i), o.addEventListener("blur", p, i));
  });
  (o.addEventListener("keydown", c, i),
    o.addEventListener("blur", () => o.removeEventListener("keydown", c), i));
};
function s1(a) {
  return Af(a) && !l0();
}
const i1 = new WeakSet();
function YA(a, i, o = {}) {
  const [c, u, p] = o0(a, o),
    d = (y) => {
      const g = y.currentTarget;
      if (!s1(y) || i1.has(y)) return;
      (uo.add(g), o.stopPropagation && i1.add(y));
      const m = i(g, y),
        x = { ...u, capture: !0 },
        A = (M, w) => {
          (window.removeEventListener("pointerup", S, x),
            window.removeEventListener("pointercancel", O, x),
            uo.has(g) && uo.delete(g),
            s1(M) && typeof m == "function" && m(M, { success: w }));
        },
        S = (M) => {
          A(
            M,
            g === window ||
              g === document ||
              o.useGlobalTarget ||
              c0(g, M.target),
          );
        },
        O = (M) => {
          A(M, !1);
        };
      (window.addEventListener("pointerup", S, x),
        window.addEventListener("pointercancel", O, x));
    };
  return (
    c.forEach((y) => {
      ((o.useGlobalTarget ? window : y).addEventListener("pointerdown", d, u),
        Yu(y) &&
          (y.addEventListener("focus", (m) => kA(m, u)),
          !HA(y) && !y.hasAttribute("tabindex") && (y.tabIndex = 0)));
    }),
    p
  );
}
function bf(a) {
  return hy(a) && "ownerSVGElement" in a;
}
const fo = new WeakMap();
let ho;
const r0 = (a, i, o) => (c, u) =>
    u && u[0]
      ? u[0][a + "Size"]
      : bf(c) && "getBBox" in c
        ? c.getBBox()[i]
        : c[o],
  XA = r0("inline", "width", "offsetWidth"),
  QA = r0("block", "height", "offsetHeight");
function ZA({ target: a, borderBoxSize: i }) {
  fo.get(a)?.forEach((o) => {
    o(a, {
      get width() {
        return XA(a, i);
      },
      get height() {
        return QA(a, i);
      },
    });
  });
}
function KA(a) {
  a.forEach(ZA);
}
function JA() {
  typeof ResizeObserver > "u" || (ho = new ResizeObserver(KA));
}
function FA(a, i) {
  ho || JA();
  const o = i0(a);
  return (
    o.forEach((c) => {
      let u = fo.get(c);
      (u || ((u = new Set()), fo.set(c, u)), u.add(i), ho?.observe(c));
    }),
    () => {
      o.forEach((c) => {
        const u = fo.get(c);
        (u?.delete(i), u?.size || ho?.unobserve(c));
      });
    }
  );
}
const po = new Set();
let gs;
function $A() {
  ((gs = () => {
    const a = {
      get width() {
        return window.innerWidth;
      },
      get height() {
        return window.innerHeight;
      },
    };
    po.forEach((i) => i(a));
  }),
    window.addEventListener("resize", gs));
}
function PA(a) {
  return (
    po.add(a),
    gs || $A(),
    () => {
      (po.delete(a),
        !po.size &&
          typeof gs == "function" &&
          (window.removeEventListener("resize", gs), (gs = void 0)));
    }
  );
}
function l1(a, i) {
  return typeof a == "function" ? PA(a) : FA(a, i);
}
function WA(a) {
  return bf(a) && a.tagName === "svg";
}
const IA = [...n0, Ft, $e],
  tb = (a) => IA.find(e0(a)),
  o1 = () => ({ translate: 0, scale: 1, origin: 0, originPoint: 0 }),
  vs = () => ({ x: o1(), y: o1() }),
  c1 = () => ({ min: 0, max: 0 }),
  Wt = () => ({ x: c1(), y: c1() }),
  eb = new WeakMap();
function Oo(a) {
  return a !== null && typeof a == "object" && typeof a.start == "function";
}
function Oi(a) {
  return typeof a == "string" || Array.isArray(a);
}
const Sf = [
    "animate",
    "whileInView",
    "whileFocus",
    "whileHover",
    "whileTap",
    "whileDrag",
    "exit",
  ],
  Tf = ["initial", ...Sf];
function wo(a) {
  return Oo(a.animate) || Tf.some((i) => Oi(a[i]));
}
function u0(a) {
  return !!(wo(a) || a.variants);
}
function nb(a, i, o) {
  for (const c in i) {
    const u = i[c],
      p = o[c];
    if (ce(u)) a.addValue(c, u);
    else if (ce(p)) a.addValue(c, Ss(u, { owner: a }));
    else if (p !== u)
      if (a.hasValue(c)) {
        const d = a.getValue(c);
        d.liveStyle === !0 ? d.jump(u) : d.hasAnimated || d.set(u);
      } else {
        const d = a.getStaticValue(c);
        a.addValue(c, Ss(d !== void 0 ? d : u, { owner: a }));
      }
  }
  for (const c in o) i[c] === void 0 && a.removeValue(c);
  return i;
}
const Xu = { current: null },
  f0 = { current: !1 },
  ab = typeof window < "u";
function sb() {
  if (((f0.current = !0), !!ab))
    if (window.matchMedia) {
      const a = window.matchMedia("(prefers-reduced-motion)"),
        i = () => (Xu.current = a.matches);
      (a.addEventListener("change", i), i());
    } else Xu.current = !1;
}
const r1 = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete",
];
let jo = {};
function d0(a) {
  jo = a;
}
function ib() {
  return jo;
}
class lb {
  scrapeMotionValuesFromProps(i, o, c) {
    return {};
  }
  constructor(
    {
      parent: i,
      props: o,
      presenceContext: c,
      reducedMotionConfig: u,
      skipAnimations: p,
      blockInitialAnimation: d,
      visualState: y,
    },
    g = {},
  ) {
    ((this.current = null),
      (this.children = new Set()),
      (this.isVariantNode = !1),
      (this.isControllingVariants = !1),
      (this.shouldReduceMotion = null),
      (this.shouldSkipAnimations = !1),
      (this.values = new Map()),
      (this.KeyframeResolver = df),
      (this.features = {}),
      (this.valueSubscriptions = new Map()),
      (this.prevMotionValues = {}),
      (this.hasBeenMounted = !1),
      (this.events = {}),
      (this.propEventSubscriptions = {}),
      (this.notifyUpdate = () => this.notify("Update", this.latestValues)),
      (this.render = () => {
        this.current &&
          (this.triggerBuild(),
          this.renderInstance(
            this.current,
            this.renderState,
            this.props.style,
            this.projection,
          ));
      }),
      (this.renderScheduledAt = 0),
      (this.scheduleRender = () => {
        const O = fe.now();
        this.renderScheduledAt < O &&
          ((this.renderScheduledAt = O), _t.render(this.render, !1, !0));
      }));
    const { latestValues: m, renderState: x } = y;
    ((this.latestValues = m),
      (this.baseTarget = { ...m }),
      (this.initialValues = o.initial ? { ...m } : {}),
      (this.renderState = x),
      (this.parent = i),
      (this.props = o),
      (this.presenceContext = c),
      (this.depth = i ? i.depth + 1 : 0),
      (this.reducedMotionConfig = u),
      (this.skipAnimationsConfig = p),
      (this.options = g),
      (this.blockInitialAnimation = !!d),
      (this.isControllingVariants = wo(o)),
      (this.isVariantNode = u0(o)),
      this.isVariantNode && (this.variantChildren = new Set()),
      (this.manuallyAnimateOnMount = !!(i && i.current)));
    const { willChange: A, ...S } = this.scrapeMotionValuesFromProps(
      o,
      {},
      this,
    );
    for (const O in S) {
      const M = S[O];
      m[O] !== void 0 && ce(M) && M.set(m[O]);
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const o in this.initialValues)
        (this.values.get(o)?.jump(this.initialValues[o]),
          (this.latestValues[o] = this.initialValues[o]));
    ((this.current = i),
      eb.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent &&
        this.isVariantNode &&
        !this.isControllingVariants &&
        (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((o, c) => this.bindToMotionValue(c, o)),
      this.reducedMotionConfig === "never"
        ? (this.shouldReduceMotion = !1)
        : this.reducedMotionConfig === "always"
          ? (this.shouldReduceMotion = !0)
          : (f0.current || sb(), (this.shouldReduceMotion = Xu.current)),
      (this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1),
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      (this.hasBeenMounted = !0));
  }
  unmount() {
    (this.projection && this.projection.unmount(),
      In(this.notifyUpdate),
      In(this.render),
      this.valueSubscriptions.forEach((i) => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this));
    for (const i in this.events) this.events[i].clear();
    for (const i in this.features) {
      const o = this.features[i];
      o && (o.unmount(), (o.isMounted = !1));
    }
    this.current = null;
  }
  addChild(i) {
    (this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set()),
      this.enteringChildren.add(i));
  }
  removeChild(i) {
    (this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i));
  }
  bindToMotionValue(i, o) {
    if (
      (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
      o.accelerate && Jy.has(i) && this.current instanceof HTMLElement)
    ) {
      const {
          factory: d,
          keyframes: y,
          times: g,
          ease: m,
          duration: x,
        } = o.accelerate,
        A = new Zy({
          element: this.current,
          name: i,
          keyframes: y,
          times: g,
          ease: m,
          duration: Re(x),
        }),
        S = d(A);
      this.valueSubscriptions.set(i, () => {
        (S(), A.cancel());
      });
      return;
    }
    const c = Es.has(i);
    c && this.onBindTransform && this.onBindTransform();
    const u = o.on("change", (d) => {
      ((this.latestValues[i] = d),
        this.props.onUpdate && _t.preRender(this.notifyUpdate),
        c && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender());
    });
    let p;
    (typeof window < "u" &&
      window.MotionCheckAppearSync &&
      (p = window.MotionCheckAppearSync(this, i, o)),
      this.valueSubscriptions.set(i, () => {
        (u(), p && p());
      }));
  }
  sortNodePosition(i) {
    return !this.current ||
      !this.sortInstanceNodePosition ||
      this.type !== i.type
      ? 0
      : this.sortInstanceNodePosition(this.current, i.current);
  }
  updateFeatures() {
    let i = "animation";
    for (i in jo) {
      const o = jo[i];
      if (!o) continue;
      const { isEnabled: c, Feature: u } = o;
      if (
        (!this.features[i] &&
          u &&
          c(this.props) &&
          (this.features[i] = new u(this)),
        this.features[i])
      ) {
        const p = this.features[i];
        p.isMounted ? p.update() : (p.mount(), (p.isMounted = !0));
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props);
  }
  measureViewportBox() {
    return this.current
      ? this.measureInstanceViewportBox(this.current, this.props)
      : Wt();
  }
  getStaticValue(i) {
    return this.latestValues[i];
  }
  setStaticValue(i, o) {
    this.latestValues[i] = o;
  }
  update(i, o) {
    ((i.transformTemplate || this.props.transformTemplate) &&
      this.scheduleRender(),
      (this.prevProps = this.props),
      (this.props = i),
      (this.prevPresenceContext = this.presenceContext),
      (this.presenceContext = o));
    for (let c = 0; c < r1.length; c++) {
      const u = r1[c];
      this.propEventSubscriptions[u] &&
        (this.propEventSubscriptions[u](),
        delete this.propEventSubscriptions[u]);
      const p = "on" + u,
        d = i[p];
      d && (this.propEventSubscriptions[u] = this.on(u, d));
    }
    ((this.prevMotionValues = nb(
      this,
      this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this),
      this.prevMotionValues,
    )),
      this.handleChildMotionValue && this.handleChildMotionValue());
  }
  getProps() {
    return this.props;
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0;
  }
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode
      ? this
      : this.parent
        ? this.parent.getClosestVariantNode()
        : void 0;
  }
  addVariantChild(i) {
    const o = this.getClosestVariantNode();
    if (o)
      return (
        o.variantChildren && o.variantChildren.add(i),
        () => o.variantChildren.delete(i)
      );
  }
  addValue(i, o) {
    const c = this.values.get(i);
    o !== c &&
      (c && this.removeValue(i),
      this.bindToMotionValue(i, o),
      this.values.set(i, o),
      (this.latestValues[i] = o.get()));
  }
  removeValue(i) {
    this.values.delete(i);
    const o = this.valueSubscriptions.get(i);
    (o && (o(), this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState));
  }
  hasValue(i) {
    return this.values.has(i);
  }
  getValue(i, o) {
    if (this.props.values && this.props.values[i]) return this.props.values[i];
    let c = this.values.get(i);
    return (
      c === void 0 &&
        o !== void 0 &&
        ((c = Ss(o === null ? void 0 : o, { owner: this })),
        this.addValue(i, c)),
      c
    );
  }
  readValue(i, o) {
    let c =
      this.latestValues[i] !== void 0 || !this.current
        ? this.latestValues[i]
        : (this.getBaseTargetFromProps(this.props, i) ??
          this.readValueFromInstance(this.current, i, this.options));
    return (
      c != null &&
        (typeof c == "string" && (dy(c) || py(c))
          ? (c = parseFloat(c))
          : !tb(c) && $e.test(o) && (c = s0(i, o)),
        this.setBaseTarget(i, ce(c) ? c.get() : c)),
      ce(c) ? c.get() : c
    );
  }
  setBaseTarget(i, o) {
    this.baseTarget[i] = o;
  }
  getBaseTarget(i) {
    const { initial: o } = this.props;
    let c;
    if (typeof o == "string" || typeof o == "object") {
      const p = yf(this.props, o, this.presenceContext?.custom);
      p && (c = p[i]);
    }
    if (o && c !== void 0) return c;
    const u = this.getBaseTargetFromProps(this.props, i);
    return u !== void 0 && !ce(u)
      ? u
      : this.initialValues[i] !== void 0 && c === void 0
        ? void 0
        : this.baseTarget[i];
  }
  on(i, o) {
    return (
      this.events[i] || (this.events[i] = new nf()),
      this.events[i].add(o)
    );
  }
  notify(i, ...o) {
    this.events[i] && this.events[i].notify(...o);
  }
  scheduleRenderMicrotask() {
    xf.render(this.render);
  }
}
class h0 extends lb {
  constructor() {
    (super(...arguments), (this.KeyframeResolver = VA));
  }
  sortInstanceNodePosition(i, o) {
    return i.compareDocumentPosition(o) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(i, o) {
    const c = i.style;
    return c ? c[o] : void 0;
  }
  removeValueFromRenderState(i, { vars: o, style: c }) {
    (delete o[i], delete c[i]);
  }
  handleChildMotionValue() {
    this.childSubscription &&
      (this.childSubscription(), delete this.childSubscription);
    const { children: i } = this.props;
    ce(i) &&
      (this.childSubscription = i.on("change", (o) => {
        this.current && (this.current.textContent = `${o}`);
      }));
  }
}
class ta {
  constructor(i) {
    ((this.isMounted = !1), (this.node = i));
  }
  update() {}
}
function p0({ top: a, left: i, right: o, bottom: c }) {
  return { x: { min: i, max: o }, y: { min: a, max: c } };
}
function ob({ x: a, y: i }) {
  return { top: i.min, right: a.max, bottom: i.max, left: a.min };
}
function cb(a, i) {
  if (!i) return a;
  const o = i({ x: a.left, y: a.top }),
    c = i({ x: a.right, y: a.bottom });
  return { top: o.y, left: o.x, bottom: c.y, right: c.x };
}
function hu(a) {
  return a === void 0 || a === 1;
}
function Qu({ scale: a, scaleX: i, scaleY: o }) {
  return !hu(a) || !hu(i) || !hu(o);
}
function Sa(a) {
  return (
    Qu(a) ||
    m0(a) ||
    a.z ||
    a.rotate ||
    a.rotateX ||
    a.rotateY ||
    a.skewX ||
    a.skewY
  );
}
function m0(a) {
  return u1(a.x) || u1(a.y);
}
function u1(a) {
  return a && a !== "0%";
}
function Eo(a, i, o) {
  const c = a - o,
    u = i * c;
  return o + u;
}
function f1(a, i, o, c, u) {
  return (u !== void 0 && (a = Eo(a, u, c)), Eo(a, o, c) + i);
}
function Zu(a, i = 0, o = 1, c, u) {
  ((a.min = f1(a.min, i, o, c, u)), (a.max = f1(a.max, i, o, c, u)));
}
function y0(a, { x: i, y: o }) {
  (Zu(a.x, i.translate, i.scale, i.originPoint),
    Zu(a.y, o.translate, o.scale, o.originPoint));
}
const d1 = 0.999999999999,
  h1 = 1.0000000000001;
function rb(a, i, o, c = !1) {
  const u = o.length;
  if (!u) return;
  i.x = i.y = 1;
  let p, d;
  for (let y = 0; y < u; y++) {
    ((p = o[y]), (d = p.projectionDelta));
    const { visualElement: g } = p.options;
    (g && g.props.style && g.props.style.display === "contents") ||
      (c &&
        p.options.layoutScroll &&
        p.scroll &&
        p !== p.root &&
        (nn(a.x, -p.scroll.offset.x), nn(a.y, -p.scroll.offset.y)),
      d && ((i.x *= d.x.scale), (i.y *= d.y.scale), y0(a, d)),
      c && Sa(p.latestValues) && mo(a, p.latestValues, p.layout?.layoutBox));
  }
  (i.x < h1 && i.x > d1 && (i.x = 1), i.y < h1 && i.y > d1 && (i.y = 1));
}
function nn(a, i) {
  ((a.min += i), (a.max += i));
}
function p1(a, i, o, c, u = 0.5) {
  const p = Vt(a.min, a.max, u);
  Zu(a, i, o, p, c);
}
function m1(a, i) {
  return typeof a == "string" ? (parseFloat(a) / 100) * (i.max - i.min) : a;
}
function mo(a, i, o) {
  const c = o ?? a;
  (p1(a.x, m1(i.x, c.x), i.scaleX, i.scale, i.originX),
    p1(a.y, m1(i.y, c.y), i.scaleY, i.scale, i.originY));
}
function g0(a, i) {
  return p0(cb(a.getBoundingClientRect(), i));
}
function ub(a, i, o) {
  const c = g0(a, o),
    { scroll: u } = i;
  return (u && (nn(c.x, u.offset.x), nn(c.y, u.offset.y)), c);
}
const fb = {
    x: "translateX",
    y: "translateY",
    z: "translateZ",
    transformPerspective: "perspective",
  },
  db = js.length;
function hb(a, i, o) {
  let c = "",
    u = !0;
  for (let d = 0; d < db; d++) {
    const y = js[d],
      g = a[y];
    if (g === void 0) continue;
    let m = !0;
    if (typeof g == "number") m = g === (y.startsWith("scale") ? 1 : 0);
    else {
      const x = parseFloat(g);
      m = y.startsWith("scale") ? x === 1 : x === 0;
    }
    if (!m || o) {
      const x = ku(g, To[y]);
      if (!m) {
        u = !1;
        const A = fb[y] || y;
        c += `${A}(${x}) `;
      }
      o && (i[y] = x);
    }
  }
  const p = a.pathRotation;
  return (
    p && ((u = !1), (c += `rotate(${ku(p, To.pathRotation)}) `)),
    (c = c.trim()),
    o ? (c = o(i, u ? "" : c)) : u && (c = "none"),
    c
  );
}
function jf(a, i, o) {
  const { style: c, vars: u, transformOrigin: p } = a;
  let d = !1,
    y = !1;
  for (const g in i) {
    const m = i[g];
    if (Es.has(g)) {
      d = !0;
      continue;
    } else if (Cy(g)) {
      u[g] = m;
      continue;
    } else {
      const x = ku(m, To[g]);
      g.startsWith("origin") ? ((y = !0), (p[g] = x)) : (c[g] = x);
    }
  }
  if (
    (i.transform ||
      (d || o
        ? (c.transform = hb(i, a.transform, o))
        : c.transform && (c.transform = "none")),
    y)
  ) {
    const { originX: g = "50%", originY: m = "50%", originZ: x = 0 } = p;
    c.transformOrigin = `${g} ${m} ${x}`;
  }
}
function v0(a, { style: i, vars: o }, c, u) {
  const p = a.style;
  let d;
  for (d in i) p[d] = i[d];
  u?.applyProjectionStyles(p, c);
  for (d in o) p.setProperty(d, o[d]);
}
function y1(a, i) {
  return i.max === i.min ? 0 : (a / (i.max - i.min)) * 100;
}
const Ai = {
    correct: (a, i) => {
      if (!i.target) return a;
      if (typeof a == "string")
        if (tt.test(a)) a = parseFloat(a);
        else return a;
      const o = y1(a, i.target.x),
        c = y1(a, i.target.y);
      return `${o}% ${c}%`;
    },
  },
  pb = {
    correct: (a, { treeScale: i, projectionDelta: o }) => {
      const c = a,
        u = $e.parse(a);
      if (u.length > 5) return c;
      const p = $e.createTransformer(a),
        d = typeof u[0] != "number" ? 1 : 0,
        y = o.x.scale * i.x,
        g = o.y.scale * i.y;
      ((u[0 + d] /= y), (u[1 + d] /= g));
      const m = Vt(y, g, 0.5);
      return (
        typeof u[2 + d] == "number" && (u[2 + d] /= m),
        typeof u[3 + d] == "number" && (u[3 + d] /= m),
        p(u)
      );
    },
  },
  Ku = {
    borderRadius: { ...Ai, applyTo: [...vf] },
    borderTopLeftRadius: Ai,
    borderTopRightRadius: Ai,
    borderBottomLeftRadius: Ai,
    borderBottomRightRadius: Ai,
    boxShadow: pb,
  };
function x0(a, { layout: i, layoutId: o }) {
  return (
    Es.has(a) ||
    a.startsWith("origin") ||
    ((i || o !== void 0) && (!!Ku[a] || a === "opacity"))
  );
}
function Ef(a, i, o) {
  const c = a.style,
    u = i?.style,
    p = {};
  if (!c) return p;
  for (const d in c)
    (ce(c[d]) ||
      (u && ce(u[d])) ||
      x0(d, a) ||
      o?.getValue(d)?.liveStyle !== void 0) &&
      (p[d] = c[d]);
  return p;
}
function mb(a) {
  return window.getComputedStyle(a);
}
class yb extends h0 {
  constructor() {
    (super(...arguments), (this.type = "html"), (this.renderInstance = v0));
  }
  mount(i) {
    (Do(!!i.style), super.mount(i));
  }
  readValueFromInstance(i, o) {
    if (Es.has(o)) return this.projection?.isProjecting ? Ru(o) : U2(i, o);
    {
      const c = mb(i),
        u = (Cy(o) ? c.getPropertyValue(o) : c[o]) || 0;
      return typeof u == "string" ? u.trim() : u;
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: o }) {
    return g0(i, o);
  }
  build(i, o, c) {
    jf(i, o, c.transformTemplate);
  }
  scrapeMotionValuesFromProps(i, o, c) {
    return Ef(i, o, c);
  }
}
const gb = { offset: "stroke-dashoffset", array: "stroke-dasharray" },
  vb = { offset: "strokeDashoffset", array: "strokeDasharray" };
function xb(a, i, o = 1, c = 0, u = !0) {
  a.pathLength = 1;
  const p = u ? gb : vb;
  ((a[p.offset] = `${-c}`), (a[p.array] = `${i} ${o}`));
}
const Ab = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function A0(
  a,
  {
    attrX: i,
    attrY: o,
    attrScale: c,
    pathLength: u,
    pathSpacing: p = 1,
    pathOffset: d = 0,
    ...y
  },
  g,
  m,
  x,
) {
  if ((jf(a, y, m), g)) {
    a.style.viewBox && (a.attrs.viewBox = a.style.viewBox);
    return;
  }
  ((a.attrs = a.style), (a.style = {}));
  const { attrs: A, style: S } = a;
  (A.transform && ((S.transform = A.transform), delete A.transform),
    (S.transform || A.transformOrigin) &&
      ((S.transformOrigin = A.transformOrigin ?? "50% 50%"),
      delete A.transformOrigin),
    S.transform &&
      ((S.transformBox = x?.transformBox ?? "fill-box"),
      delete A.transformBox));
  for (const O of Ab) A[O] !== void 0 && ((S[O] = A[O]), delete A[O]);
  (i !== void 0 && (A.x = i),
    o !== void 0 && (A.y = o),
    c !== void 0 && (A.scale = c),
    u !== void 0 && xb(A, u, p, d, !1));
}
const b0 = new Set([
    "baseFrequency",
    "diffuseConstant",
    "kernelMatrix",
    "kernelUnitLength",
    "keySplines",
    "keyTimes",
    "limitingConeAngle",
    "markerHeight",
    "markerWidth",
    "numOctaves",
    "targetX",
    "targetY",
    "surfaceScale",
    "specularConstant",
    "specularExponent",
    "stdDeviation",
    "tableValues",
    "viewBox",
    "gradientTransform",
    "pathLength",
    "startOffset",
    "textLength",
    "lengthAdjust",
  ]),
  S0 = (a) => typeof a == "string" && a.toLowerCase() === "svg";
function bb(a, i, o, c) {
  v0(a, i, void 0, c);
  for (const u in i.attrs) a.setAttribute(b0.has(u) ? u : gf(u), i.attrs[u]);
}
function T0(a, i, o) {
  const c = Ef(a, i, o);
  for (const u in a)
    if (ce(a[u]) || ce(i[u])) {
      const p =
        js.indexOf(u) !== -1
          ? "attr" + u.charAt(0).toUpperCase() + u.substring(1)
          : u;
      c[p] = a[u];
    }
  return c;
}
class Sb extends h0 {
  constructor() {
    (super(...arguments),
      (this.type = "svg"),
      (this.isSVGTag = !1),
      (this.measureInstanceViewportBox = Wt));
  }
  getBaseTargetFromProps(i, o) {
    return i[o];
  }
  readValueFromInstance(i, o) {
    if (Es.has(o)) {
      const c = a0(o);
      return (c && c.default) || 0;
    }
    return ((o = b0.has(o) ? o : gf(o)), i.getAttribute(o));
  }
  scrapeMotionValuesFromProps(i, o, c) {
    return T0(i, o, c);
  }
  build(i, o, c) {
    A0(i, o, this.isSVGTag, c.transformTemplate, c.style);
  }
  renderInstance(i, o, c, u) {
    bb(i, o, c, u);
  }
  mount(i) {
    ((this.isSVGTag = S0(i.tagName)), super.mount(i));
  }
}
const Tb = Tf.length;
function j0(a) {
  if (!a) return;
  if (!a.isControllingVariants) {
    const o = a.parent ? j0(a.parent) || {} : {};
    return (a.props.initial !== void 0 && (o.initial = a.props.initial), o);
  }
  const i = {};
  for (let o = 0; o < Tb; o++) {
    const c = Tf[o],
      u = a.props[c];
    (Oi(u) || u === !1) && (i[c] = u);
  }
  return i;
}
function E0(a, i) {
  if (!Array.isArray(i)) return !1;
  const o = i.length;
  if (o !== a.length) return !1;
  for (let c = 0; c < o; c++) if (i[c] !== a[c]) return !1;
  return !0;
}
const jb = [...Sf].reverse(),
  Eb = Sf.length;
function Mb(a) {
  return (i) =>
    Promise.all(i.map(({ animation: o, options: c }) => TA(a, o, c)));
}
function zb(a) {
  let i = Mb(a),
    o = g1(),
    c = !0,
    u = !1;
  const p = (m) => (x, A) => {
    const S = As(a, A, m === "exit" ? a.presenceContext?.custom : void 0);
    if (S) {
      const { transition: O, transitionEnd: M, ...w } = S;
      x = { ...x, ...w, ...M };
    }
    return x;
  };
  function d(m) {
    i = m(a);
  }
  function y(m) {
    const { props: x } = a,
      A = j0(a.parent) || {},
      S = [],
      O = new Set();
    let M = {},
      w = 1 / 0;
    for (let Y = 0; Y < Eb; Y++) {
      const X = jb[Y],
        Q = o[X],
        Z = x[X] !== void 0 ? x[X] : A[X],
        nt = Oi(Z),
        ct = X === m ? Q.isActive : null;
      ct === !1 && (w = Y);
      let F = Z === A[X] && Z !== x[X] && nt;
      if (
        (F && (c || u) && a.manuallyAnimateOnMount && (F = !1),
        (Q.protectedKeys = { ...M }),
        (!Q.isActive && ct === null) ||
          (!Z && !Q.prevProp) ||
          Oo(Z) ||
          typeof Z == "boolean")
      )
        continue;
      if (X === "exit" && Q.isActive && ct !== !0) {
        Q.prevResolvedValues && (M = { ...M, ...Q.prevResolvedValues });
        continue;
      }
      const $ = Nb(Q.prevProp, Z);
      let st = $ || (X === m && Q.isActive && !F && nt) || (Y > w && nt),
        b = !1;
      const ht = Array.isArray(Z) ? Z : [Z];
      let ot = ht.reduce(p(X), {});
      ct === !1 && (ot = {});
      const { prevResolvedValues: $t = {} } = Q,
        Ct = { ...$t, ...ot },
        Mt = (P) => {
          ((st = !0),
            O.has(P) && ((b = !0), O.delete(P)),
            (Q.needsAnimating[P] = !0));
          const ft = a.getValue(P);
          ft && (ft.liveStyle = !1);
        };
      for (const P in Ct) {
        const ft = ot[P],
          yt = $t[P];
        if (M.hasOwnProperty(P)) continue;
        let j = !1;
        (Bu(ft) && Bu(yt) ? (j = !E0(ft, yt) || $) : (j = ft !== yt),
          j
            ? ft != null
              ? Mt(P)
              : O.add(P)
            : ft !== void 0 && O.has(P)
              ? Mt(P)
              : (Q.protectedKeys[P] = !0));
      }
      ((Q.prevProp = Z),
        (Q.prevResolvedValues = ot),
        Q.isActive && (M = { ...M, ...ot }),
        (c || u) && a.blockInitialAnimation && (st = !1));
      const _ = F && $;
      st &&
        (!_ || b) &&
        S.push(
          ...ht.map((P) => {
            const ft = { type: X };
            if (
              typeof P == "string" &&
              (c || u) &&
              !_ &&
              a.manuallyAnimateOnMount &&
              a.parent
            ) {
              const { parent: yt } = a,
                j = As(yt, P);
              if (yt.enteringChildren && j) {
                const { delayChildren: L } = j.transition || {};
                ft.delay = Fy(yt.enteringChildren, a, L);
              }
            }
            return { animation: P, options: ft };
          }),
        );
    }
    if (O.size) {
      const Y = {};
      if (typeof x.initial != "boolean") {
        const X = As(a, Array.isArray(x.initial) ? x.initial[0] : x.initial);
        X && X.transition && (Y.transition = X.transition);
      }
      (O.forEach((X) => {
        const Q = a.getBaseTarget(X),
          Z = a.getValue(X);
        (Z && (Z.liveStyle = !0), (Y[X] = Q ?? null));
      }),
        S.push({ animation: Y }));
    }
    let q = !!S.length;
    return (
      c &&
        (x.initial === !1 || x.initial === x.animate) &&
        !a.manuallyAnimateOnMount &&
        (q = !1),
      (c = !1),
      (u = !1),
      q ? i(S) : Promise.resolve()
    );
  }
  function g(m, x) {
    if (o[m].isActive === x) return Promise.resolve();
    (a.variantChildren?.forEach((S) => S.animationState?.setActive(m, x)),
      (o[m].isActive = x));
    const A = y(m);
    for (const S in o) o[S].protectedKeys = {};
    return A;
  }
  return {
    animateChanges: y,
    setActive: g,
    setAnimateFunction: d,
    getState: () => o,
    reset: () => {
      ((o = g1()), (u = !0));
    },
  };
}
function Nb(a, i) {
  return typeof i == "string" ? i !== a : Array.isArray(i) ? !E0(i, a) : !1;
}
function Aa(a = !1) {
  return {
    isActive: a,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {},
  };
}
function g1() {
  return {
    animate: Aa(!0),
    whileInView: Aa(),
    whileHover: Aa(),
    whileTap: Aa(),
    whileDrag: Aa(),
    whileFocus: Aa(),
    exit: Aa(),
  };
}
function Ju(a, i) {
  ((a.min = i.min), (a.max = i.max));
}
function Ke(a, i) {
  (Ju(a.x, i.x), Ju(a.y, i.y));
}
function v1(a, i) {
  ((a.translate = i.translate),
    (a.scale = i.scale),
    (a.originPoint = i.originPoint),
    (a.origin = i.origin));
}
const M0 = 1e-4,
  Cb = 1 - M0,
  Db = 1 + M0,
  z0 = 0.01,
  Rb = 0 - z0,
  Ob = 0 + z0;
function de(a) {
  return a.max - a.min;
}
function wb(a, i, o) {
  return Math.abs(a - i) <= o;
}
function x1(a, i, o, c = 0.5) {
  ((a.origin = c),
    (a.originPoint = Vt(i.min, i.max, a.origin)),
    (a.scale = de(o) / de(i)),
    (a.translate = Vt(o.min, o.max, a.origin) - a.originPoint),
    ((a.scale >= Cb && a.scale <= Db) || isNaN(a.scale)) && (a.scale = 1),
    ((a.translate >= Rb && a.translate <= Ob) || isNaN(a.translate)) &&
      (a.translate = 0));
}
function Mi(a, i, o, c) {
  (x1(a.x, i.x, o.x, c ? c.originX : void 0),
    x1(a.y, i.y, o.y, c ? c.originY : void 0));
}
function A1(a, i, o, c = 0) {
  const u = c ? Vt(o.min, o.max, c) : o.min;
  ((a.min = u + i.min), (a.max = a.min + de(i)));
}
function Vb(a, i, o, c) {
  (A1(a.x, i.x, o.x, c?.x), A1(a.y, i.y, o.y, c?.y));
}
function b1(a, i, o, c = 0) {
  const u = c ? Vt(o.min, o.max, c) : o.min;
  ((a.min = i.min - u), (a.max = a.min + de(i)));
}
function Mo(a, i, o, c) {
  (b1(a.x, i.x, o.x, c?.x), b1(a.y, i.y, o.y, c?.y));
}
function S1(a, i, o, c, u) {
  return (
    (a -= i),
    (a = Eo(a, 1 / o, c)),
    u !== void 0 && (a = Eo(a, 1 / u, c)),
    a
  );
}
function _b(a, i = 0, o = 1, c = 0.5, u, p = a, d = a) {
  if (
    (an.test(i) &&
      ((i = parseFloat(i)), (i = Vt(d.min, d.max, i / 100) - d.min)),
    typeof i != "number")
  )
    return;
  let y = Vt(p.min, p.max, c);
  (a === p && (y -= i),
    (a.min = S1(a.min, i, o, y, u)),
    (a.max = S1(a.max, i, o, y, u)));
}
function T1(a, i, [o, c, u], p, d) {
  _b(a, i[o], i[c], i[u], i.scale, p, d);
}
const Ub = ["x", "scaleX", "originX"],
  Bb = ["y", "scaleY", "originY"];
function j1(a, i, o, c) {
  (T1(a.x, i, Ub, o ? o.x : void 0, c ? c.x : void 0),
    T1(a.y, i, Bb, o ? o.y : void 0, c ? c.y : void 0));
}
function E1(a) {
  return a.translate === 0 && a.scale === 1;
}
function N0(a) {
  return E1(a.x) && E1(a.y);
}
function M1(a, i) {
  return a.min === i.min && a.max === i.max;
}
function Lb(a, i) {
  return M1(a.x, i.x) && M1(a.y, i.y);
}
function z1(a, i) {
  return (
    Math.round(a.min) === Math.round(i.min) &&
    Math.round(a.max) === Math.round(i.max)
  );
}
function C0(a, i) {
  return z1(a.x, i.x) && z1(a.y, i.y);
}
function N1(a) {
  return de(a.x) / de(a.y);
}
function C1(a, i) {
  return (
    a.translate === i.translate &&
    a.scale === i.scale &&
    a.originPoint === i.originPoint
  );
}
function en(a) {
  return [a("x"), a("y")];
}
function Hb(a, i, o) {
  let c = "";
  const u = a.x.translate / i.x,
    p = a.y.translate / i.y,
    d = o?.z || 0;
  if (
    ((u || p || d) && (c = `translate3d(${u}px, ${p}px, ${d}px) `),
    (i.x !== 1 || i.y !== 1) && (c += `scale(${1 / i.x}, ${1 / i.y}) `),
    o)
  ) {
    const {
      transformPerspective: m,
      rotate: x,
      pathRotation: A,
      rotateX: S,
      rotateY: O,
      skewX: M,
      skewY: w,
    } = o;
    (m && (c = `perspective(${m}px) ${c}`),
      x && (c += `rotate(${x}deg) `),
      A && (c += `rotate(${A}deg) `),
      S && (c += `rotateX(${S}deg) `),
      O && (c += `rotateY(${O}deg) `),
      M && (c += `skewX(${M}deg) `),
      w && (c += `skewY(${w}deg) `));
  }
  const y = a.x.scale * i.x,
    g = a.y.scale * i.y;
  return ((y !== 1 || g !== 1) && (c += `scale(${y}, ${g})`), c || "none");
}
const Gb = vf.length,
  D1 = (a) => (typeof a == "string" ? parseFloat(a) : a),
  R1 = (a) => typeof a == "number" || tt.test(a);
function qb(a, i, o, c, u, p) {
  u
    ? ((a.opacity = Vt(0, o.opacity ?? 1, kb(c))),
      (a.opacityExit = Vt(i.opacity ?? 1, 0, Yb(c))))
    : p && (a.opacity = Vt(i.opacity ?? 1, o.opacity ?? 1, c));
  for (let d = 0; d < Gb; d++) {
    const y = vf[d];
    let g = O1(i, y),
      m = O1(o, y);
    if (g === void 0 && m === void 0) continue;
    (g || (g = 0),
      m || (m = 0),
      g === 0 || m === 0 || R1(g) === R1(m)
        ? ((a[y] = Math.max(Vt(D1(g), D1(m), c), 0)),
          (an.test(m) || an.test(g)) && (a[y] += "%"))
        : (a[y] = m));
  }
  (i.rotate || o.rotate) && (a.rotate = Vt(i.rotate || 0, o.rotate || 0, c));
}
function O1(a, i) {
  return a[i] !== void 0 ? a[i] : a.borderRadius;
}
const kb = D0(0, 0.5, Ty),
  Yb = D0(0.5, 0.95, Ye);
function D0(a, i, o) {
  return (c) => (c < a ? 0 : c > i ? 1 : o(Di(a, i, c)));
}
function Xb(a, i, o) {
  const c = ce(a) ? a : Ss(a);
  return (c.start(mf("", c, i, o)), c.animation);
}
function wi(a, i, o, c = { passive: !0 }) {
  return (a.addEventListener(i, o, c), () => a.removeEventListener(i, o, c));
}
const Qb = (a, i) => a.depth - i.depth;
class Zb {
  constructor() {
    ((this.children = []), (this.isDirty = !1));
  }
  add(i) {
    (ef(this.children, i), (this.isDirty = !0));
  }
  remove(i) {
    (vo(this.children, i), (this.isDirty = !0));
  }
  forEach(i) {
    (this.isDirty && this.children.sort(Qb),
      (this.isDirty = !1),
      this.children.forEach(i));
  }
}
function Kb(a, i) {
  const o = fe.now(),
    c = ({ timestamp: u }) => {
      const p = u - o;
      p >= i && (In(c), a(p - i));
    };
  return (_t.setup(c, !0), () => In(c));
}
function yo(a) {
  return ce(a) ? a.get() : a;
}
class Jb {
  constructor() {
    this.members = [];
  }
  add(i) {
    ef(this.members, i);
    for (let o = this.members.length - 1; o >= 0; o--) {
      const c = this.members[o];
      if (c === i || c === this.lead || c === this.prevLead) continue;
      const u = c.instance;
      (!u || u.isConnected === !1) &&
        !c.snapshot &&
        (vo(this.members, c), c.unmount());
    }
    i.scheduleRender();
  }
  remove(i) {
    if (
      (vo(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead)
    ) {
      const o = this.members[this.members.length - 1];
      o && this.promote(o);
    }
  }
  relegate(i) {
    for (let o = this.members.indexOf(i) - 1; o >= 0; o--) {
      const c = this.members[o];
      if (c.isPresent !== !1 && c.instance?.isConnected !== !1)
        return (this.promote(c), !0);
    }
    return !1;
  }
  promote(i, o) {
    const c = this.lead;
    if (i !== c && ((this.prevLead = c), (this.lead = i), i.show(), c)) {
      (c.updateSnapshot(), i.scheduleRender());
      const { layoutDependency: u } = c.options,
        { layoutDependency: p } = i.options;
      ((u === void 0 || u !== p) &&
        ((i.resumeFrom = c),
        o && (c.preserveOpacity = !0),
        c.snapshot &&
          ((i.snapshot = c.snapshot),
          (i.snapshot.latestValues = c.animationValues || c.latestValues)),
        i.root?.isUpdating && (i.isLayoutDirty = !0)),
        i.options.crossfade === !1 && c.hide());
    }
  }
  exitAnimationComplete() {
    this.members.forEach((i) => {
      (i.options.onExitComplete?.(),
        i.resumingFrom?.options.onExitComplete?.());
    });
  }
  scheduleRender() {
    this.members.forEach((i) => i.instance && i.scheduleRender(!1));
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0);
  }
}
const go = { hasAnimatedSinceResize: !0, hasEverUpdated: !1 },
  pu = ["", "X", "Y", "Z"],
  Fb = 1e3;
let $b = 0;
function mu(a, i, o, c) {
  const { latestValues: u } = i;
  u[a] && ((o[a] = u[a]), i.setStaticValue(a, 0), c && (c[a] = 0));
}
function R0(a) {
  if (((a.hasCheckedOptimisedAppear = !0), a.root === a)) return;
  const { visualElement: i } = a.options;
  if (!i) return;
  const o = Iy(i);
  if (window.MotionHasOptimisedAnimation(o, "transform")) {
    const { layout: u, layoutId: p } = a.options;
    window.MotionCancelOptimisedAnimation(o, "transform", _t, !(u || p));
  }
  const { parent: c } = a;
  c && !c.hasCheckedOptimisedAppear && R0(c);
}
function O0({
  attachResizeListener: a,
  defaultParent: i,
  measureScroll: o,
  checkIsScrollRoot: c,
  resetTransform: u,
}) {
  return class {
    constructor(d = {}, y = i?.()) {
      ((this.id = $b++),
        (this.animationId = 0),
        (this.animationCommitId = 0),
        (this.children = new Set()),
        (this.options = {}),
        (this.isTreeAnimating = !1),
        (this.isAnimationBlocked = !1),
        (this.isLayoutDirty = !1),
        (this.isProjectionDirty = !1),
        (this.isSharedProjectionDirty = !1),
        (this.isTransformDirty = !1),
        (this.updateManuallyBlocked = !1),
        (this.updateBlockedByResize = !1),
        (this.isUpdating = !1),
        (this.isSVG = !1),
        (this.needsReset = !1),
        (this.shouldResetTransform = !1),
        (this.hasCheckedOptimisedAppear = !1),
        (this.treeScale = { x: 1, y: 1 }),
        (this.eventHandlers = new Map()),
        (this.hasTreeAnimated = !1),
        (this.layoutVersion = 0),
        (this.updateScheduled = !1),
        (this.scheduleUpdate = () => this.update()),
        (this.projectionUpdateScheduled = !1),
        (this.checkUpdateFailed = () => {
          this.isUpdating && ((this.isUpdating = !1), this.clearAllSnapshots());
        }),
        (this.updateProjection = () => {
          ((this.projectionUpdateScheduled = !1),
            this.nodes.forEach(Ib),
            this.nodes.forEach(iS),
            this.nodes.forEach(lS),
            this.nodes.forEach(tS));
        }),
        (this.resolvedRelativeTargetAt = 0),
        (this.linkedParentVersion = 0),
        (this.hasProjected = !1),
        (this.isVisible = !0),
        (this.animationProgress = 0),
        (this.sharedNodes = new Map()),
        (this.latestValues = d),
        (this.root = y ? y.root || y : this),
        (this.path = y ? [...y.path, y] : []),
        (this.parent = y),
        (this.depth = y ? y.depth + 1 : 0));
      for (let g = 0; g < this.path.length; g++)
        this.path[g].shouldResetTransform = !0;
      this.root === this && (this.nodes = new Zb());
    }
    addEventListener(d, y) {
      return (
        this.eventHandlers.has(d) || this.eventHandlers.set(d, new nf()),
        this.eventHandlers.get(d).add(y)
      );
    }
    notifyListeners(d, ...y) {
      const g = this.eventHandlers.get(d);
      g && g.notify(...y);
    }
    hasListeners(d) {
      return this.eventHandlers.has(d);
    }
    mount(d) {
      if (this.instance) return;
      ((this.isSVG = bf(d) && !WA(d)), (this.instance = d));
      const { layoutId: y, layout: g, visualElement: m } = this.options;
      if (
        (m && !m.current && m.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (g || y) && (this.isLayoutDirty = !0),
        a)
      ) {
        let x,
          A = 0;
        const S = () => (this.root.updateBlockedByResize = !1);
        (_t.read(() => {
          A = window.innerWidth;
        }),
          a(d, () => {
            const O = window.innerWidth;
            O !== A &&
              ((A = O),
              (this.root.updateBlockedByResize = !0),
              x && x(),
              (x = Kb(S, 250)),
              go.hasAnimatedSinceResize &&
                ((go.hasAnimatedSinceResize = !1), this.nodes.forEach(_1)));
          }));
      }
      (y && this.root.registerSharedNode(y, this),
        this.options.animate !== !1 &&
          m &&
          (y || g) &&
          this.addEventListener(
            "didUpdate",
            ({
              delta: x,
              hasLayoutChanged: A,
              hasRelativeLayoutChanged: S,
              layout: O,
            }) => {
              if (this.isTreeAnimationBlocked()) {
                ((this.target = void 0), (this.relativeTarget = void 0));
                return;
              }
              const M =
                  this.options.transition || m.getDefaultTransition() || fS,
                { onLayoutAnimationStart: w, onLayoutAnimationComplete: q } =
                  m.getProps(),
                Y = !this.targetLayout || !C0(this.targetLayout, O),
                X = !A && S;
              if (
                this.options.layoutRoot ||
                this.resumeFrom ||
                X ||
                (A && (Y || !this.currentAnimation))
              ) {
                this.resumeFrom &&
                  ((this.resumingFrom = this.resumeFrom),
                  (this.resumingFrom.resumingFrom = void 0));
                const Q = { ...pf(M, "layout"), onPlay: w, onComplete: q };
                ((m.shouldReduceMotion || this.options.layoutRoot) &&
                  ((Q.delay = 0), (Q.type = !1)),
                  this.startAnimation(Q),
                  this.setAnimationOrigin(x, X, Q.path));
              } else
                (A || _1(this),
                  this.isLead() &&
                    this.options.onExitComplete &&
                    this.options.onExitComplete());
              this.targetLayout = O;
            },
          ));
    }
    unmount() {
      (this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this));
      const d = this.getStack();
      (d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        (this.instance = void 0),
        this.eventHandlers.clear(),
        In(this.updateProjection));
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return (
        this.isAnimationBlocked ||
        (this.parent && this.parent.isTreeAnimationBlocked()) ||
        !1
      );
    }
    startUpdate() {
      this.isUpdateBlocked() ||
        ((this.isUpdating = !0),
        this.nodes && this.nodes.forEach(oS),
        this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate;
    }
    willUpdate(d = !0) {
      if (((this.root.hasTreeAnimated = !0), this.root.isUpdateBlocked())) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (
        (window.MotionCancelOptimisedAnimation &&
          !this.hasCheckedOptimisedAppear &&
          R0(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
      )
        return;
      this.isLayoutDirty = !0;
      for (let x = 0; x < this.path.length; x++) {
        const A = this.path[x];
        ((A.shouldResetTransform = !0),
          (typeof A.latestValues.x == "string" ||
            typeof A.latestValues.y == "string") &&
            (A.isLayoutDirty = !0),
          A.updateScroll("snapshot"),
          A.options.layoutRoot && A.willUpdate(!1));
      }
      const { layoutId: y, layout: g } = this.options;
      if (y === void 0 && !g) return;
      const m = this.getTransformTemplate();
      ((this.prevTransformTemplateValue = m
        ? m(this.latestValues, "")
        : void 0),
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate"));
    }
    update() {
      if (((this.updateScheduled = !1), this.isUpdateBlocked())) {
        const g = this.updateBlockedByResize;
        (this.unblockUpdate(),
          (this.updateBlockedByResize = !1),
          this.clearAllSnapshots(),
          g && this.nodes.forEach(nS),
          this.nodes.forEach(w1));
        return;
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(V1);
        return;
      }
      ((this.animationCommitId = this.animationId),
        this.isUpdating
          ? ((this.isUpdating = !1),
            this.nodes.forEach(aS),
            this.nodes.forEach(sS),
            this.nodes.forEach(Pb),
            this.nodes.forEach(Wb))
          : this.nodes.forEach(V1),
        this.clearAllSnapshots());
      const y = fe.now();
      ((le.delta = sn(0, 1e3 / 60, y - le.timestamp)),
        (le.timestamp = y),
        (le.isProcessing = !0),
        lu.update.process(le),
        lu.preRender.process(le),
        lu.render.process(le),
        (le.isProcessing = !1));
    }
    didUpdate() {
      this.updateScheduled ||
        ((this.updateScheduled = !0), xf.read(this.scheduleUpdate));
    }
    clearAllSnapshots() {
      (this.nodes.forEach(eS), this.sharedNodes.forEach(cS));
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled ||
        ((this.projectionUpdateScheduled = !0),
        _t.preRender(this.updateProjection, !1, !0));
    }
    scheduleCheckAfterUnmount() {
      _t.postRender(() => {
        this.isLayoutDirty
          ? this.root.didUpdate()
          : this.root.checkUpdateFailed();
      });
    }
    updateSnapshot() {
      this.snapshot ||
        !this.instance ||
        ((this.snapshot = this.measure()),
        this.snapshot &&
          !de(this.snapshot.measuredBox.x) &&
          !de(this.snapshot.measuredBox.y) &&
          (this.snapshot = void 0));
    }
    updateLayout() {
      if (
        !this.instance ||
        (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) &&
          !this.isLayoutDirty)
      )
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let g = 0; g < this.path.length; g++) this.path[g].updateScroll();
      const d = this.layout;
      ((this.layout = this.measure(!1)),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = Wt()),
        (this.isLayoutDirty = !1),
        (this.projectionDelta = void 0),
        this.notifyListeners("measure", this.layout.layoutBox));
      const { visualElement: y } = this.options;
      y &&
        y.notify(
          "LayoutMeasure",
          this.layout.layoutBox,
          d ? d.layoutBox : void 0,
        );
    }
    updateScroll(d = "measure") {
      let y = !!(this.options.layoutScroll && this.instance);
      if (
        (this.scroll &&
          this.scroll.animationId === this.root.animationId &&
          this.scroll.phase === d &&
          (y = !1),
        y && this.instance)
      ) {
        const g = c(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: g,
          offset: o(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : g,
        };
      }
    }
    resetTransform() {
      if (!u) return;
      const d =
          this.isLayoutDirty ||
          this.shouldResetTransform ||
          this.options.alwaysMeasureLayout,
        y = this.projectionDelta && !N0(this.projectionDelta),
        g = this.getTransformTemplate(),
        m = g ? g(this.latestValues, "") : void 0,
        x = m !== this.prevTransformTemplateValue;
      d &&
        this.instance &&
        (y || Sa(this.latestValues) || x) &&
        (u(this.instance, m),
        (this.shouldResetTransform = !1),
        this.scheduleRender());
    }
    measure(d = !0) {
      const y = this.measurePageBox();
      let g = this.removeElementScroll(y);
      return (
        d && (g = this.removeTransform(g)),
        dS(g),
        {
          animationId: this.root.animationId,
          measuredBox: y,
          layoutBox: g,
          latestValues: {},
          source: this.id,
        }
      );
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d) return Wt();
      const y = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(hS))) {
        const { scroll: m } = this.root;
        m && (nn(y.x, m.offset.x), nn(y.y, m.offset.y));
      }
      return y;
    }
    removeElementScroll(d) {
      const y = Wt();
      if ((Ke(y, d), this.scroll?.wasRoot)) return y;
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g],
          { scroll: x, options: A } = m;
        m !== this.root &&
          x &&
          A.layoutScroll &&
          (x.wasRoot && Ke(y, d), nn(y.x, x.offset.x), nn(y.y, x.offset.y));
      }
      return y;
    }
    applyTransform(d, y = !1, g) {
      const m = g || Wt();
      Ke(m, d);
      for (let x = 0; x < this.path.length; x++) {
        const A = this.path[x];
        (!y &&
          A.options.layoutScroll &&
          A.scroll &&
          A !== A.root &&
          (nn(m.x, -A.scroll.offset.x), nn(m.y, -A.scroll.offset.y)),
          Sa(A.latestValues) && mo(m, A.latestValues, A.layout?.layoutBox));
      }
      return (
        Sa(this.latestValues) &&
          mo(m, this.latestValues, this.layout?.layoutBox),
        m
      );
    }
    removeTransform(d) {
      const y = Wt();
      Ke(y, d);
      for (let g = 0; g < this.path.length; g++) {
        const m = this.path[g];
        if (!Sa(m.latestValues)) continue;
        let x;
        (m.instance &&
          (Qu(m.latestValues) && m.updateSnapshot(),
          (x = Wt()),
          Ke(x, m.measurePageBox())),
          j1(y, m.latestValues, m.snapshot?.layoutBox, x));
      }
      return (Sa(this.latestValues) && j1(y, this.latestValues), y);
    }
    setTargetDelta(d) {
      ((this.targetDelta = d),
        this.root.scheduleUpdateProjection(),
        (this.isProjectionDirty = !0));
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0,
      };
    }
    clearMeasurements() {
      ((this.scroll = void 0),
        (this.layout = void 0),
        (this.snapshot = void 0),
        (this.prevTransformTemplateValue = void 0),
        (this.targetDelta = void 0),
        (this.target = void 0),
        (this.isLayoutDirty = !1));
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent &&
        this.relativeParent.resolvedRelativeTargetAt !== le.timestamp &&
        this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(d = !1) {
      const y = this.getLead();
      (this.isProjectionDirty || (this.isProjectionDirty = y.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = y.isTransformDirty),
        this.isSharedProjectionDirty ||
          (this.isSharedProjectionDirty = y.isSharedProjectionDirty));
      const g = !!this.resumingFrom || this !== y;
      if (!(
        d ||
        (g && this.isSharedProjectionDirty) ||
        this.isProjectionDirty ||
        this.parent?.isProjectionDirty ||
        this.attemptToResolveRelativeTarget ||
        this.root.updateBlockedByResize
      ))
        return;
      const { layout: x, layoutId: A } = this.options;
      if (!this.layout || !(x || A)) return;
      this.resolvedRelativeTargetAt = le.timestamp;
      const S = this.getClosestProjectingParent();
      (S &&
        this.linkedParentVersion !== S.layoutVersion &&
        !S.options.layoutRoot &&
        this.removeRelativeTarget(),
        !this.targetDelta &&
          !this.relativeTarget &&
          (this.options.layoutAnchor !== !1 && S && S.layout
            ? this.createRelativeTarget(
                S,
                this.layout.layoutBox,
                S.layout.layoutBox,
              )
            : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) &&
          (this.target ||
            ((this.target = Wt()), (this.targetWithTransforms = Wt())),
          this.relativeTarget &&
          this.relativeTargetOrigin &&
          this.relativeParent &&
          this.relativeParent.target
            ? (this.forceRelativeParentToResolveTarget(),
              Vb(
                this.target,
                this.relativeTarget,
                this.relativeParent.target,
                this.options.layoutAnchor || void 0,
              ))
            : this.targetDelta
              ? (this.resumingFrom
                  ? this.applyTransform(this.layout.layoutBox, !1, this.target)
                  : Ke(this.target, this.layout.layoutBox),
                y0(this.target, this.targetDelta))
              : Ke(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget &&
            ((this.attemptToResolveRelativeTarget = !1),
            this.options.layoutAnchor !== !1 &&
            S &&
            !!S.resumingFrom == !!this.resumingFrom &&
            !S.options.layoutScroll &&
            S.target &&
            this.animationProgress !== 1
              ? this.createRelativeTarget(S, this.target, S.target)
              : (this.relativeParent = this.relativeTarget = void 0))));
    }
    getClosestProjectingParent() {
      if (!(
        !this.parent ||
        Qu(this.parent.latestValues) ||
        m0(this.parent.latestValues)
      ))
        return this.parent.isProjecting()
          ? this.parent
          : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!(
        (this.relativeTarget || this.targetDelta || this.options.layoutRoot) &&
        this.layout
      );
    }
    createRelativeTarget(d, y, g) {
      ((this.relativeParent = d),
        (this.linkedParentVersion = d.layoutVersion),
        this.forceRelativeParentToResolveTarget(),
        (this.relativeTarget = Wt()),
        (this.relativeTargetOrigin = Wt()),
        Mo(
          this.relativeTargetOrigin,
          y,
          g,
          this.options.layoutAnchor || void 0,
        ),
        Ke(this.relativeTarget, this.relativeTargetOrigin));
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0;
    }
    calcProjection() {
      const d = this.getLead(),
        y = !!this.resumingFrom || this !== d;
      let g = !0;
      if (
        ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (g = !1),
        y &&
          (this.isSharedProjectionDirty || this.isTransformDirty) &&
          (g = !1),
        this.resolvedRelativeTargetAt === le.timestamp && (g = !1),
        g)
      )
        return;
      const { layout: m, layoutId: x } = this.options;
      if (
        ((this.isTreeAnimating = !!(
          (this.parent && this.parent.isTreeAnimating) ||
          this.currentAnimation ||
          this.pendingAnimation
        )),
        this.isTreeAnimating ||
          (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || x))
      )
        return;
      Ke(this.layoutCorrected, this.layout.layoutBox);
      const A = this.treeScale.x,
        S = this.treeScale.y;
      (rb(this.layoutCorrected, this.treeScale, this.path, y),
        d.layout &&
          !d.target &&
          (this.treeScale.x !== 1 || this.treeScale.y !== 1) &&
          ((d.target = d.layout.layoutBox), (d.targetWithTransforms = Wt())));
      const { target: O } = d;
      if (!O) {
        this.prevProjectionDelta &&
          (this.createProjectionDeltas(), this.scheduleRender());
        return;
      }
      (!this.projectionDelta || !this.prevProjectionDelta
        ? this.createProjectionDeltas()
        : (v1(this.prevProjectionDelta.x, this.projectionDelta.x),
          v1(this.prevProjectionDelta.y, this.projectionDelta.y)),
        Mi(this.projectionDelta, this.layoutCorrected, O, this.latestValues),
        (this.treeScale.x !== A ||
          this.treeScale.y !== S ||
          !C1(this.projectionDelta.x, this.prevProjectionDelta.x) ||
          !C1(this.projectionDelta.y, this.prevProjectionDelta.y)) &&
          ((this.hasProjected = !0),
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", O)));
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(d = !0) {
      if ((this.options.visualElement?.scheduleRender(), d)) {
        const y = this.getStack();
        y && y.scheduleRender();
      }
      this.resumingFrom &&
        !this.resumingFrom.instance &&
        (this.resumingFrom = void 0);
    }
    createProjectionDeltas() {
      ((this.prevProjectionDelta = vs()),
        (this.projectionDelta = vs()),
        (this.projectionDeltaWithTransform = vs()));
    }
    setAnimationOrigin(d, y = !1, g) {
      const m = this.snapshot,
        x = m ? m.latestValues : {},
        A = { ...this.latestValues },
        S = vs();
      ((!this.relativeParent || !this.relativeParent.options.layoutRoot) &&
        (this.relativeTarget = this.relativeTargetOrigin = void 0),
        (this.attemptToResolveRelativeTarget = !y));
      const O = Wt(),
        M = m ? m.source : void 0,
        w = this.layout ? this.layout.source : void 0,
        q = M !== w,
        Y = this.getStack(),
        X = !Y || Y.members.length <= 1,
        Q = !!(q && !X && this.options.crossfade === !0 && !this.path.some(uS));
      this.animationProgress = 0;
      let Z;
      const nt = g?.interpolateProjection(d);
      ((this.mixTargetDelta = (ct) => {
        const F = ct / 1e3,
          $ = nt?.(F);
        ($
          ? ((S.x.translate = $.x),
            (S.x.scale = Vt(d.x.scale, 1, F)),
            (S.x.origin = d.x.origin),
            (S.x.originPoint = d.x.originPoint),
            (S.y.translate = $.y),
            (S.y.scale = Vt(d.y.scale, 1, F)),
            (S.y.origin = d.y.origin),
            (S.y.originPoint = d.y.originPoint))
          : (U1(S.x, d.x, F), U1(S.y, d.y, F)),
          this.setTargetDelta(S),
          this.relativeTarget &&
            this.relativeTargetOrigin &&
            this.layout &&
            this.relativeParent &&
            this.relativeParent.layout &&
            (Mo(
              O,
              this.layout.layoutBox,
              this.relativeParent.layout.layoutBox,
              this.options.layoutAnchor || void 0,
            ),
            rS(this.relativeTarget, this.relativeTargetOrigin, O, F),
            Z && Lb(this.relativeTarget, Z) && (this.isProjectionDirty = !1),
            Z || (Z = Wt()),
            Ke(Z, this.relativeTarget)),
          q &&
            ((this.animationValues = A), qb(A, x, this.latestValues, F, Q, X)),
          $ &&
            $.rotate !== void 0 &&
            (this.animationValues || (this.animationValues = A),
            (this.animationValues.pathRotation = $.rotate)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          (this.animationProgress = F));
      }),
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0));
    }
    startAnimation(d) {
      (this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation &&
          (In(this.pendingAnimation), (this.pendingAnimation = void 0)),
        (this.pendingAnimation = _t.update(() => {
          ((go.hasAnimatedSinceResize = !0),
            this.motionValue || (this.motionValue = Ss(0)),
            this.motionValue.jump(0, !1),
            (this.currentAnimation = Xb(this.motionValue, [0, 1e3], {
              ...d,
              velocity: 0,
              isSync: !0,
              onUpdate: (y) => {
                (this.mixTargetDelta(y), d.onUpdate && d.onUpdate(y));
              },
              onComplete: () => {
                (d.onComplete && d.onComplete(), this.completeAnimation());
              },
            })),
            this.resumingFrom &&
              (this.resumingFrom.currentAnimation = this.currentAnimation),
            (this.pendingAnimation = void 0));
        })));
    }
    completeAnimation() {
      this.resumingFrom &&
        ((this.resumingFrom.currentAnimation = void 0),
        (this.resumingFrom.preserveOpacity = void 0));
      const d = this.getStack();
      (d && d.exitAnimationComplete(),
        (this.resumingFrom =
          this.currentAnimation =
          this.animationValues =
            void 0),
        this.notifyListeners("animationComplete"));
    }
    finishAnimation() {
      (this.currentAnimation &&
        (this.mixTargetDelta && this.mixTargetDelta(Fb),
        this.currentAnimation.stop()),
        this.completeAnimation());
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let {
        targetWithTransforms: y,
        target: g,
        layout: m,
        latestValues: x,
      } = d;
      if (!(!y || !g || !m)) {
        if (
          this !== d &&
          this.layout &&
          m &&
          w0(this.options.animationType, this.layout.layoutBox, m.layoutBox)
        ) {
          g = this.target || Wt();
          const A = de(this.layout.layoutBox.x);
          ((g.x.min = d.target.x.min), (g.x.max = g.x.min + A));
          const S = de(this.layout.layoutBox.y);
          ((g.y.min = d.target.y.min), (g.y.max = g.y.min + S));
        }
        (Ke(y, g),
          mo(y, x),
          Mi(this.projectionDeltaWithTransform, this.layoutCorrected, y, x));
      }
    }
    registerSharedNode(d, y) {
      (this.sharedNodes.has(d) || this.sharedNodes.set(d, new Jb()),
        this.sharedNodes.get(d).add(y));
      const m = y.options.initialPromotionConfig;
      y.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity:
          m && m.shouldPreserveFollowOpacity
            ? m.shouldPreserveFollowOpacity(y)
            : void 0,
      });
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0;
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this;
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0;
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d) return this.root.sharedNodes.get(d);
    }
    promote({ needsReset: d, transition: y, preserveFollowOpacity: g } = {}) {
      const m = this.getStack();
      (m && m.promote(this, g),
        d && ((this.projectionDelta = void 0), (this.needsReset = !0)),
        y && this.setOptions({ transition: y }));
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1;
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d) return;
      let y = !1;
      const { latestValues: g } = d;
      if (
        ((g.z ||
          g.rotate ||
          g.rotateX ||
          g.rotateY ||
          g.rotateZ ||
          g.skewX ||
          g.skewY) &&
          (y = !0),
        !y)
      )
        return;
      const m = {};
      g.z && mu("z", d, m, this.animationValues);
      for (let x = 0; x < pu.length; x++)
        (mu(`rotate${pu[x]}`, d, m, this.animationValues),
          mu(`skew${pu[x]}`, d, m, this.animationValues));
      d.render();
      for (const x in m)
        (d.setStaticValue(x, m[x]),
          this.animationValues && (this.animationValues[x] = m[x]));
      d.scheduleRender();
    }
    applyProjectionStyles(d, y) {
      if (!this.instance || this.isSVG) return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return;
      }
      const g = this.getTransformTemplate();
      if (this.needsReset) {
        ((this.needsReset = !1),
          (d.visibility = ""),
          (d.opacity = ""),
          (d.pointerEvents = yo(y?.pointerEvents) || ""),
          (d.transform = g ? g(this.latestValues, "") : "none"));
        return;
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        (this.options.layoutId &&
          ((d.opacity =
            this.latestValues.opacity !== void 0
              ? this.latestValues.opacity
              : 1),
          (d.pointerEvents = yo(y?.pointerEvents) || "")),
          this.hasProjected &&
            !Sa(this.latestValues) &&
            ((d.transform = g ? g({}, "") : "none"), (this.hasProjected = !1)));
        return;
      }
      d.visibility = "";
      const x = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let A = Hb(this.projectionDeltaWithTransform, this.treeScale, x);
      (g && (A = g(x, A)), (d.transform = A));
      const { x: S, y: O } = this.projectionDelta;
      ((d.transformOrigin = `${S.origin * 100}% ${O.origin * 100}% 0`),
        m.animationValues
          ? (d.opacity =
              m === this
                ? (x.opacity ?? this.latestValues.opacity ?? 1)
                : this.preserveOpacity
                  ? this.latestValues.opacity
                  : x.opacityExit)
          : (d.opacity =
              m === this
                ? x.opacity !== void 0
                  ? x.opacity
                  : ""
                : x.opacityExit !== void 0
                  ? x.opacityExit
                  : 0));
      for (const M in Ku) {
        if (x[M] === void 0) continue;
        const { correct: w, applyTo: q, isCSSVariable: Y } = Ku[M],
          X = A === "none" ? x[M] : w(x[M], m);
        if (q) {
          const Q = q.length;
          for (let Z = 0; Z < Q; Z++) d[q[Z]] = X;
        } else
          Y ? (this.options.visualElement.renderState.vars[M] = X) : (d[M] = X);
      }
      this.options.layoutId &&
        (d.pointerEvents = m === this ? yo(y?.pointerEvents) || "" : "none");
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    resetTree() {
      (this.root.nodes.forEach((d) => d.currentAnimation?.stop()),
        this.root.nodes.forEach(w1),
        this.root.sharedNodes.clear());
    }
  };
}
function Pb(a) {
  a.updateLayout();
}
function Wb(a) {
  const i = a.resumeFrom?.snapshot || a.snapshot;
  if (a.isLead() && a.layout && i && a.hasListeners("didUpdate")) {
    const { layoutBox: o, measuredBox: c } = a.layout,
      { animationType: u } = a.options,
      p = i.source !== a.layout.source;
    if (u === "size")
      en((x) => {
        const A = p ? i.measuredBox[x] : i.layoutBox[x],
          S = de(A);
        ((A.min = o[x].min), (A.max = A.min + S));
      });
    else if (u === "x" || u === "y") {
      const x = u === "x" ? "y" : "x";
      Ju(p ? i.measuredBox[x] : i.layoutBox[x], o[x]);
    } else
      w0(u, i.layoutBox, o) &&
        en((x) => {
          const A = p ? i.measuredBox[x] : i.layoutBox[x],
            S = de(o[x]);
          ((A.max = A.min + S),
            a.relativeTarget &&
              !a.currentAnimation &&
              ((a.isProjectionDirty = !0),
              (a.relativeTarget[x].max = a.relativeTarget[x].min + S)));
        });
    const d = vs();
    Mi(d, o, i.layoutBox);
    const y = vs();
    p ? Mi(y, a.applyTransform(c, !0), i.measuredBox) : Mi(y, o, i.layoutBox);
    const g = !N0(d);
    let m = !1;
    if (!a.resumeFrom) {
      const x = a.getClosestProjectingParent();
      if (x && !x.resumeFrom) {
        const { snapshot: A, layout: S } = x;
        if (A && S) {
          const O = a.options.layoutAnchor || void 0,
            M = Wt();
          Mo(M, i.layoutBox, A.layoutBox, O);
          const w = Wt();
          (Mo(w, o, S.layoutBox, O),
            C0(M, w) || (m = !0),
            x.options.layoutRoot &&
              ((a.relativeTarget = w),
              (a.relativeTargetOrigin = M),
              (a.relativeParent = x)));
        }
      }
    }
    a.notifyListeners("didUpdate", {
      layout: o,
      snapshot: i,
      delta: y,
      layoutDelta: d,
      hasLayoutChanged: g,
      hasRelativeLayoutChanged: m,
    });
  } else if (a.isLead()) {
    const { onExitComplete: o } = a.options;
    o && o();
  }
  a.options.transition = void 0;
}
function Ib(a) {
  a.parent &&
    (a.isProjecting() || (a.isProjectionDirty = a.parent.isProjectionDirty),
    a.isSharedProjectionDirty ||
      (a.isSharedProjectionDirty = !!(
        a.isProjectionDirty ||
        a.parent.isProjectionDirty ||
        a.parent.isSharedProjectionDirty
      )),
    a.isTransformDirty || (a.isTransformDirty = a.parent.isTransformDirty));
}
function tS(a) {
  a.isProjectionDirty = a.isSharedProjectionDirty = a.isTransformDirty = !1;
}
function eS(a) {
  a.clearSnapshot();
}
function w1(a) {
  a.clearMeasurements();
}
function nS(a) {
  ((a.isLayoutDirty = !0), a.updateLayout());
}
function V1(a) {
  a.isLayoutDirty = !1;
}
function aS(a) {
  a.isAnimationBlocked &&
    a.layout &&
    !a.isLayoutDirty &&
    ((a.snapshot = a.layout), (a.isLayoutDirty = !0));
}
function sS(a) {
  const { visualElement: i } = a.options;
  (i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    a.resetTransform());
}
function _1(a) {
  (a.finishAnimation(),
    (a.targetDelta = a.relativeTarget = a.target = void 0),
    (a.isProjectionDirty = !0));
}
function iS(a) {
  a.resolveTargetDelta();
}
function lS(a) {
  a.calcProjection();
}
function oS(a) {
  a.resetSkewAndRotation();
}
function cS(a) {
  a.removeLeadSnapshot();
}
function U1(a, i, o) {
  ((a.translate = Vt(i.translate, 0, o)),
    (a.scale = Vt(i.scale, 1, o)),
    (a.origin = i.origin),
    (a.originPoint = i.originPoint));
}
function B1(a, i, o, c) {
  ((a.min = Vt(i.min, o.min, c)), (a.max = Vt(i.max, o.max, c)));
}
function rS(a, i, o, c) {
  (B1(a.x, i.x, o.x, c), B1(a.y, i.y, o.y, c));
}
function uS(a) {
  return a.animationValues && a.animationValues.opacityExit !== void 0;
}
const fS = { duration: 0.45, ease: [0.4, 0, 0.1, 1] },
  L1 = (a) =>
    typeof navigator < "u" &&
    navigator.userAgent &&
    navigator.userAgent.toLowerCase().includes(a),
  H1 = L1("applewebkit/") && !L1("chrome/") ? Math.round : Ye;
function G1(a) {
  ((a.min = H1(a.min)), (a.max = H1(a.max)));
}
function dS(a) {
  (G1(a.x), G1(a.y));
}
function w0(a, i, o) {
  return (
    a === "position" || (a === "preserve-aspect" && !wb(N1(i), N1(o), 0.2))
  );
}
function hS(a) {
  return a !== a.root && a.scroll?.wasRoot;
}
const pS = O0({
    attachResizeListener: (a, i) => wi(a, "resize", i),
    measureScroll: () => ({
      x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
      y: document.documentElement.scrollTop || document.body?.scrollTop || 0,
    }),
    checkIsScrollRoot: () => !0,
  }),
  yu = { current: void 0 },
  V0 = O0({
    measureScroll: (a) => ({ x: a.scrollLeft, y: a.scrollTop }),
    defaultParent: () => {
      if (!yu.current) {
        const a = new pS({});
        (a.mount(window), a.setOptions({ layoutScroll: !0 }), (yu.current = a));
      }
      return yu.current;
    },
    resetTransform: (a, i) => {
      a.style.transform = i !== void 0 ? i : "none";
    },
    checkIsScrollRoot: (a) => window.getComputedStyle(a).position === "fixed",
  }),
  Vi = k.createContext({
    transformPagePoint: (a) => a,
    isStatic: !1,
    reducedMotion: "never",
  });
function q1(a, i) {
  if (typeof a == "function") return a(i);
  a != null && (a.current = i);
}
function mS(...a) {
  return (i) => {
    let o = !1;
    const c = a.map((u) => {
      const p = q1(u, i);
      return (!o && typeof p == "function" && (o = !0), p);
    });
    if (o)
      return () => {
        for (let u = 0; u < c.length; u++) {
          const p = c[u];
          typeof p == "function" ? p() : q1(a[u], null);
        }
      };
  };
}
function yS(...a) {
  return k.useCallback(mS(...a), a);
}
class gS extends k.Component {
  getSnapshotBeforeUpdate(i) {
    const o = this.props.childRef.current;
    if (o && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const c = o.offsetParent,
        u = (Yu(c) && c.offsetWidth) || 0,
        p = (Yu(c) && c.offsetHeight) || 0,
        d = this.props.sizeRef.current;
      ((d.height = o.offsetHeight || 0),
        (d.width = o.offsetWidth || 0),
        (d.top = o.offsetTop),
        (d.left = o.offsetLeft),
        (d.right = u - d.width - d.left),
        (d.bottom = p - d.height - d.top));
    }
    return null;
  }
  componentDidUpdate() {}
  render() {
    return this.props.children;
  }
}
function vS({
  children: a,
  isPresent: i,
  anchorX: o,
  anchorY: c,
  root: u,
  pop: p,
}) {
  const d = k.useId(),
    y = k.useRef(null),
    g = k.useRef({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }),
    { nonce: m } = k.useContext(Vi),
    x = a.props?.ref ?? a?.ref,
    A = yS(y, x);
  return (
    k.useInsertionEffect(() => {
      const {
        width: S,
        height: O,
        top: M,
        left: w,
        right: q,
        bottom: Y,
      } = g.current;
      if (i || p === !1 || !y.current || !S || !O) return;
      const X = o === "left" ? `left: ${w}` : `right: ${q}`,
        Q = c === "bottom" ? `bottom: ${Y}` : `top: ${M}`;
      y.current.dataset.motionPopId = d;
      const Z = document.createElement("style");
      m && (Z.nonce = m);
      const nt = u ?? document.head;
      return (
        nt.appendChild(Z),
        Z.sheet &&
          Z.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${S}px !important;
            height: ${O}px !important;
            ${X}px !important;
            ${Q}px !important;
          }
        `),
        () => {
          nt.contains(Z) && nt.removeChild(Z);
        }
      );
    }, [i]),
    f.jsx(gS, {
      isPresent: i,
      childRef: y,
      sizeRef: g,
      pop: p,
      children: p === !1 ? a : k.cloneElement(a, { ref: A }),
    })
  );
}
const xS = ({
  children: a,
  initial: i,
  isPresent: o,
  onExitComplete: c,
  custom: u,
  presenceAffectsLayout: p,
  mode: d,
  anchorX: y,
  anchorY: g,
  root: m,
}) => {
  const x = No(AS),
    A = k.useId();
  let S = !0,
    O = k.useMemo(
      () => (
        (S = !1),
        {
          id: A,
          initial: i,
          isPresent: o,
          custom: u,
          onExitComplete: (M) => {
            x.set(M, !0);
            for (const w of x.values()) if (!w) return;
            c && c();
          },
          register: (M) => (x.set(M, !1), () => x.delete(M)),
        }
      ),
      [o, x, c],
    );
  return (
    p && S && (O = { ...O }),
    k.useMemo(() => {
      x.forEach((M, w) => x.set(w, !1));
    }, [o]),
    k.useEffect(() => {
      !o && !x.size && c && c();
    }, [o]),
    (a = f.jsx(vS, {
      pop: d === "popLayout",
      isPresent: o,
      anchorX: y,
      anchorY: g,
      root: m,
      children: a,
    })),
    f.jsx(Co.Provider, { value: O, children: a })
  );
};
function AS() {
  return new Map();
}
function _0(a = !0) {
  const i = k.useContext(Co);
  if (i === null) return [!0, null];
  const { isPresent: o, onExitComplete: c, register: u } = i,
    p = k.useId();
  k.useEffect(() => {
    if (a) return u(p);
  }, [a]);
  const d = k.useCallback(() => a && c && c(p), [p, c, a]);
  return !o && c ? [!1, d] : [!0];
}
const io = (a) => a.key || "";
function k1(a) {
  const i = [];
  return (
    k.Children.forEach(a, (o) => {
      k.isValidElement(o) && i.push(o);
    }),
    i
  );
}
const gu = ({
    children: a,
    custom: i,
    initial: o = !0,
    onExitComplete: c,
    presenceAffectsLayout: u = !0,
    mode: p = "sync",
    propagate: d = !1,
    anchorX: y = "left",
    anchorY: g = "top",
    root: m,
  }) => {
    const [x, A] = _0(d),
      S = k.useMemo(() => k1(a), [a]),
      O = d && !x ? [] : S.map(io),
      M = k.useRef(!0),
      w = k.useRef(S),
      q = No(() => new Map()),
      Y = k.useRef(new Set()),
      [X, Q] = k.useState(S),
      [Z, nt] = k.useState(S);
    fy(() => {
      ((M.current = !1), (w.current = S));
      for (let $ = 0; $ < Z.length; $++) {
        const st = io(Z[$]);
        O.includes(st)
          ? (q.delete(st), Y.current.delete(st))
          : q.get(st) !== !0 && q.set(st, !1);
      }
    }, [Z, O.length, O.join("-")]);
    const ct = [];
    if (S !== X) {
      let $ = [...S];
      for (let st = 0; st < Z.length; st++) {
        const b = Z[st],
          ht = io(b);
        O.includes(ht) || ($.splice(st, 0, b), ct.push(b));
      }
      return (p === "wait" && ct.length && ($ = ct), nt(k1($)), Q(S), null);
    }
    const { forceRender: F } = k.useContext(tf);
    return f.jsx(f.Fragment, {
      children: Z.map(($) => {
        const st = io($),
          b = d && !x ? !1 : S === Z || O.includes(st),
          ht = () => {
            if (Y.current.has(st)) return;
            if ((Y.current.add(st), q.has(st))) q.set(st, !0);
            else return;
            let ot = !0;
            (q.forEach(($t) => {
              $t || (ot = !1);
            }),
              ot && (F?.(), nt(w.current), d && A?.(), c && c()));
          };
        return f.jsx(
          xS,
          {
            isPresent: b,
            initial: !M.current || o ? void 0 : !1,
            custom: i,
            presenceAffectsLayout: u,
            mode: p,
            root: m,
            onExitComplete: b ? void 0 : ht,
            anchorX: y,
            anchorY: g,
            children: $,
          },
          st,
        );
      }),
    });
  },
  U0 = k.createContext({ strict: !1 }),
  Y1 = {
    animation: [
      "animate",
      "variants",
      "whileHover",
      "whileTap",
      "exit",
      "whileInView",
      "whileFocus",
      "whileDrag",
    ],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"],
  };
let X1 = !1;
function bS() {
  if (X1) return;
  const a = {};
  for (const i in Y1) a[i] = { isEnabled: (o) => Y1[i].some((c) => !!o[c]) };
  (d0(a), (X1 = !0));
}
function B0() {
  return (bS(), ib());
}
function SS(a) {
  const i = B0();
  for (const o in a) i[o] = { ...i[o], ...a[o] };
  d0(i);
}
const TS = new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "custom",
  "inherit",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "globalTapTarget",
  "propagate",
  "ignoreStrict",
  "viewport",
]);
function zo(a) {
  return (
    a.startsWith("while") ||
    (a.startsWith("drag") && a !== "draggable") ||
    a.startsWith("layout") ||
    a.startsWith("onTap") ||
    a.startsWith("onPan") ||
    a.startsWith("onLayout") ||
    TS.has(a)
  );
}
let L0 = (a) => !zo(a);
function H0(a) {
  typeof a == "function" && (L0 = (i) => (i.startsWith("on") ? !zo(i) : a(i)));
}
try {
  H0(require("@emotion/is-prop-valid").default);
} catch {}
function jS(a, i, o) {
  const c = {};
  for (const u in a)
    (u === "values" && typeof a.values == "object") ||
      ((L0(u) ||
        (o === !0 && zo(u)) ||
        (!i && !zo(u)) ||
        (a.draggable && u.startsWith("onDrag"))) &&
        (c[u] = a[u]));
  return c;
}
function ES({ children: a, isValidProp: i, ...o }) {
  i && H0(i);
  const c = k.useContext(Vi);
  ((o = { ...c, ...o }),
    (o.transition = hf(o.transition, c.transition)),
    (o.isStatic = No(() => o.isStatic)));
  const u = k.useMemo(
    () => o,
    [
      JSON.stringify(o.transition),
      o.transformPagePoint,
      o.reducedMotion,
      o.skipAnimations,
    ],
  );
  return f.jsx(Vi.Provider, { value: u, children: a });
}
const Vo = k.createContext({});
function MS(a, i) {
  if (wo(a)) {
    const { initial: o, animate: c } = a;
    return {
      initial: o === !1 || Oi(o) ? o : void 0,
      animate: Oi(c) ? c : void 0,
    };
  }
  return a.inherit !== !1 ? i : {};
}
function zS(a) {
  const { initial: i, animate: o } = MS(a, k.useContext(Vo));
  return k.useMemo(() => ({ initial: i, animate: o }), [Q1(i), Q1(o)]);
}
function Q1(a) {
  return Array.isArray(a) ? a.join(" ") : a;
}
const Mf = () => ({ style: {}, transform: {}, transformOrigin: {}, vars: {} });
function G0(a, i, o) {
  for (const c in i) !ce(i[c]) && !x0(c, o) && (a[c] = i[c]);
}
function NS({ transformTemplate: a }, i) {
  return k.useMemo(() => {
    const o = Mf();
    return (jf(o, i, a), Object.assign({}, o.vars, o.style));
  }, [i]);
}
function CS(a, i) {
  const o = a.style || {},
    c = {};
  return (G0(c, o, a), Object.assign(c, NS(a, i)), c);
}
function DS(a, i) {
  const o = {},
    c = CS(a, i);
  return (
    a.drag &&
      a.dragListener !== !1 &&
      ((o.draggable = !1),
      (c.userSelect = c.WebkitUserSelect = c.WebkitTouchCallout = "none"),
      (c.touchAction =
        a.drag === !0 ? "none" : `pan-${a.drag === "x" ? "y" : "x"}`)),
    a.tabIndex === void 0 &&
      (a.onTap || a.onTapStart || a.whileTap) &&
      (o.tabIndex = 0),
    (o.style = c),
    o
  );
}
const q0 = () => ({ ...Mf(), attrs: {} });
function RS(a, i, o, c) {
  const u = k.useMemo(() => {
    const p = q0();
    return (
      A0(p, i, S0(c), a.transformTemplate, a.style),
      { ...p.attrs, style: { ...p.style } }
    );
  }, [i]);
  if (a.style) {
    const p = {};
    (G0(p, a.style, a), (u.style = { ...p, ...u.style }));
  }
  return u;
}
const OS = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view",
];
function zf(a) {
  return typeof a != "string" || a.includes("-")
    ? !1
    : !!(OS.indexOf(a) > -1 || /[A-Z]/u.test(a));
}
function wS(a, i, o, { latestValues: c }, u, p = !1, d) {
  const g = ((d ?? zf(a)) ? RS : DS)(i, c, u, a),
    m = jS(i, typeof a == "string", p),
    x = a !== k.Fragment ? { ...m, ...g, ref: o } : {},
    { children: A } = i,
    S = k.useMemo(() => (ce(A) ? A.get() : A), [A]);
  return k.createElement(a, { ...x, children: S });
}
function VS({ scrapeMotionValuesFromProps: a, createRenderState: i }, o, c, u) {
  return { latestValues: _S(o, c, u, a), renderState: i() };
}
function _S(a, i, o, c) {
  const u = {},
    p = c(a, {});
  for (const S in p) u[S] = yo(p[S]);
  let { initial: d, animate: y } = a;
  const g = wo(a),
    m = u0(a);
  i &&
    m &&
    !g &&
    a.inherit !== !1 &&
    (d === void 0 && (d = i.initial), y === void 0 && (y = i.animate));
  let x = o ? o.initial === !1 : !1;
  x = x || d === !1;
  const A = x ? y : d;
  if (A && typeof A != "boolean" && !Oo(A)) {
    const S = Array.isArray(A) ? A : [A];
    for (let O = 0; O < S.length; O++) {
      const M = yf(a, S[O]);
      if (M) {
        const { transitionEnd: w, transition: q, ...Y } = M;
        for (const X in Y) {
          let Q = Y[X];
          if (Array.isArray(Q)) {
            const Z = x ? Q.length - 1 : 0;
            Q = Q[Z];
          }
          Q !== null && (u[X] = Q);
        }
        for (const X in w) u[X] = w[X];
      }
    }
  }
  return u;
}
const k0 = (a) => (i, o) => {
    const c = k.useContext(Vo),
      u = k.useContext(Co),
      p = () => VS(a, i, c, u);
    return o ? p() : No(p);
  },
  US = k0({ scrapeMotionValuesFromProps: Ef, createRenderState: Mf }),
  BS = k0({ scrapeMotionValuesFromProps: T0, createRenderState: q0 }),
  LS = Symbol.for("motionComponentSymbol");
function HS(a, i, o) {
  const c = k.useRef(o);
  k.useInsertionEffect(() => {
    c.current = o;
  });
  const u = k.useRef(null);
  return k.useCallback(
    (p) => {
      p && a.onMount?.(p);
      const d = c.current;
      if (typeof d == "function")
        if (p) {
          const y = d(p);
          typeof y == "function" && (u.current = y);
        } else u.current ? (u.current(), (u.current = null)) : d(p);
      else d && (d.current = p);
      i && (p ? i.mount(p) : i.unmount());
    },
    [i],
  );
}
const Y0 = k.createContext({});
function hs(a) {
  return (
    a &&
    typeof a == "object" &&
    Object.prototype.hasOwnProperty.call(a, "current")
  );
}
function GS(a, i, o, c, u, p) {
  const { visualElement: d } = k.useContext(Vo),
    y = k.useContext(U0),
    g = k.useContext(Co),
    m = k.useContext(Vi),
    x = m.reducedMotion,
    A = m.skipAnimations,
    S = k.useRef(null),
    O = k.useRef(!1);
  ((c = c || y.renderer),
    !S.current &&
      c &&
      ((S.current = c(a, {
        visualState: i,
        parent: d,
        props: o,
        presenceContext: g,
        blockInitialAnimation: g ? g.initial === !1 : !1,
        reducedMotionConfig: x,
        skipAnimations: A,
        isSVG: p,
      })),
      O.current && S.current && (S.current.manuallyAnimateOnMount = !0)));
  const M = S.current,
    w = k.useContext(Y0);
  M &&
    !M.projection &&
    u &&
    (M.type === "html" || M.type === "svg") &&
    qS(S.current, o, u, w);
  const q = k.useRef(!1);
  k.useInsertionEffect(() => {
    M && q.current && M.update(o, g);
  });
  const Y = o[Wy],
    X = k.useRef(
      !!Y &&
        typeof window < "u" &&
        !window.MotionHandoffIsComplete?.(Y) &&
        window.MotionHasOptimisedAnimation?.(Y),
    );
  return (
    fy(() => {
      ((O.current = !0),
        M &&
          ((q.current = !0),
          (window.MotionIsMounted = !0),
          M.updateFeatures(),
          M.scheduleRenderMicrotask(),
          X.current && M.animationState && M.animationState.animateChanges()));
    }),
    k.useEffect(() => {
      M &&
        (!X.current && M.animationState && M.animationState.animateChanges(),
        X.current &&
          (queueMicrotask(() => {
            window.MotionHandoffMarkAsComplete?.(Y);
          }),
          (X.current = !1)),
        (M.enteringChildren = void 0));
    }),
    M
  );
}
function qS(a, i, o, c) {
  const {
    layoutId: u,
    layout: p,
    drag: d,
    dragConstraints: y,
    layoutScroll: g,
    layoutRoot: m,
    layoutCrossfade: x,
  } = i;
  ((a.projection = new o(
    a.latestValues,
    i["data-framer-portal-id"] ? void 0 : X0(a.parent),
  )),
    a.projection.setOptions({
      layoutId: u,
      layout: p,
      alwaysMeasureLayout: !!d || (y && hs(y)),
      visualElement: a,
      animationType: typeof p == "string" ? p : "both",
      initialPromotionConfig: c,
      crossfade: x,
      layoutScroll: g,
      layoutRoot: m,
    }));
}
function X0(a) {
  if (a) return a.options.allowProjection !== !1 ? a.projection : X0(a.parent);
}
function vu(a, { forwardMotionProps: i = !1, type: o } = {}, c, u) {
  c && SS(c);
  const p = o ? o === "svg" : zf(a),
    d = p ? BS : US;
  function y(m, x) {
    let A;
    const S = { ...k.useContext(Vi), ...m, layoutId: kS(m) },
      { isStatic: O } = S,
      M = zS(m),
      w = d(m, O);
    if (!O && typeof window < "u") {
      YS();
      const q = XS(S);
      ((A = q.MeasureLayout),
        (M.visualElement = GS(a, w, S, u, q.ProjectionNode, p)));
    }
    return f.jsxs(Vo.Provider, {
      value: M,
      children: [
        A && M.visualElement
          ? f.jsx(A, { visualElement: M.visualElement, ...S })
          : null,
        wS(a, m, HS(w, M.visualElement, x), w, O, i, p),
      ],
    });
  }
  y.displayName = `motion.${typeof a == "string" ? a : `create(${a.displayName ?? a.name ?? ""})`}`;
  const g = k.forwardRef(y);
  return ((g[LS] = a), g);
}
function kS({ layoutId: a }) {
  const i = k.useContext(tf).id;
  return i && a !== void 0 ? i + "-" + a : a;
}
function YS(a, i) {
  k.useContext(U0).strict;
}
function XS(a) {
  const i = B0(),
    { drag: o, layout: c } = i;
  if (!o && !c) return {};
  const u = { ...o, ...c };
  return {
    MeasureLayout:
      o?.isEnabled(a) || c?.isEnabled(a) ? u.MeasureLayout : void 0,
    ProjectionNode: u.ProjectionNode,
  };
}
function QS(a, i) {
  if (typeof Proxy > "u") return vu;
  const o = new Map(),
    c = (p, d) => vu(p, d, a, i),
    u = (p, d) => c(p, d);
  return new Proxy(u, {
    get: (p, d) =>
      d === "create"
        ? c
        : (o.has(d) || o.set(d, vu(d, void 0, a, i)), o.get(d)),
  });
}
const ZS = (a, i) =>
  (i.isSVG ?? zf(a))
    ? new Sb(i)
    : new yb(i, { allowProjection: a !== k.Fragment });
class KS extends ta {
  constructor(i) {
    (super(i), i.animationState || (i.animationState = zb(i)));
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    Oo(i) && (this.unmountControls = i.subscribe(this.node));
  }
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: i } = this.node.getProps(),
      { animate: o } = this.node.prevProps || {};
    i !== o && this.updateAnimationControlsSubscription();
  }
  unmount() {
    (this.node.animationState.reset(), this.unmountControls?.());
  }
}
let JS = 0;
class FS extends ta {
  constructor() {
    (super(...arguments), (this.id = JS++));
  }
  update() {
    if (!this.node.presenceContext) return;
    const { isPresent: i, onExitComplete: o } = this.node.presenceContext,
      { isPresent: c } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === c) return;
    const u = this.node.animationState.setActive("exit", !i);
    o &&
      !i &&
      u.then(() => {
        o(this.id);
      });
  }
  mount() {
    const { register: i, onExitComplete: o } = this.node.presenceContext || {};
    (o && o(this.id), i && (this.unmount = i(this.id)));
  }
  unmount() {}
}
const $S = { animation: { Feature: KS }, exit: { Feature: FS } };
function Li(a) {
  return { point: { x: a.pageX, y: a.pageY } };
}
const PS = (a) => (i) => Af(i) && a(i, Li(i));
function zi(a, i, o, c) {
  return wi(a, i, PS(o), c);
}
const Q0 = ({ current: a }) => (a ? a.ownerDocument.defaultView : null),
  Z1 = (a, i) => Math.abs(a - i);
function WS(a, i) {
  const o = Z1(a.x, i.x),
    c = Z1(a.y, i.y);
  return Math.sqrt(o ** 2 + c ** 2);
}
const K1 = new Set(["auto", "scroll"]);
class Z0 {
  constructor(
    i,
    o,
    {
      transformPagePoint: c,
      contextWindow: u = window,
      dragSnapToOrigin: p = !1,
      distanceThreshold: d = 3,
      element: y,
    } = {},
  ) {
    if (
      ((this.startEvent = null),
      (this.lastMoveEvent = null),
      (this.lastMoveEventInfo = null),
      (this.handlers = {}),
      (this.contextWindow = window),
      (this.scrollPositions = new Map()),
      (this.removeScrollListeners = null),
      (this.onElementScroll = (O) => {
        this.handleScroll(O.target);
      }),
      (this.onWindowScroll = () => {
        this.handleScroll(window);
      }),
      (this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo)) return;
        const O = Au(this.lastMoveEventInfo, this.history),
          M = this.startEvent !== null,
          w = WS(O.offset, { x: 0, y: 0 }) >= this.distanceThreshold;
        if (!M && !w) return;
        const { point: q } = O,
          { timestamp: Y } = le;
        this.history.push({ ...q, timestamp: Y });
        const { onStart: X, onMove: Q } = this.handlers;
        (M ||
          (X && X(this.lastMoveEvent, O),
          (this.startEvent = this.lastMoveEvent)),
          Q && Q(this.lastMoveEvent, O));
      }),
      (this.handlePointerMove = (O, M) => {
        ((this.lastMoveEvent = O),
          (this.lastMoveEventInfo = xu(M, this.transformPagePoint)),
          _t.update(this.updatePoint, !0));
      }),
      (this.handlePointerUp = (O, M) => {
        this.end();
        const { onEnd: w, onSessionEnd: q, resumeAnimation: Y } = this.handlers;
        if (
          ((this.dragSnapToOrigin || !this.startEvent) && Y && Y(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
        )
          return;
        const X = Au(
          O.type === "pointercancel"
            ? this.lastMoveEventInfo
            : xu(M, this.transformPagePoint),
          this.history,
        );
        (this.startEvent && w && w(O, X), q && q(O, X));
      }),
      !Af(i))
    )
      return;
    ((this.dragSnapToOrigin = p),
      (this.handlers = o),
      (this.transformPagePoint = c),
      (this.distanceThreshold = d),
      (this.contextWindow = u || window));
    const g = Li(i),
      m = xu(g, this.transformPagePoint),
      { point: x } = m,
      { timestamp: A } = le;
    this.history = [{ ...x, timestamp: A }];
    const { onSessionStart: S } = o;
    (S && S(i, Au(m, this.history)),
      (this.removeListeners = _i(
        zi(this.contextWindow, "pointermove", this.handlePointerMove),
        zi(this.contextWindow, "pointerup", this.handlePointerUp),
        zi(this.contextWindow, "pointercancel", this.handlePointerUp),
      )),
      y && this.startScrollTracking(y));
  }
  startScrollTracking(i) {
    let o = i.parentElement;
    for (; o;) {
      const c = getComputedStyle(o);
      ((K1.has(c.overflowX) || K1.has(c.overflowY)) &&
        this.scrollPositions.set(o, { x: o.scrollLeft, y: o.scrollTop }),
        (o = o.parentElement));
    }
    (this.scrollPositions.set(window, { x: window.scrollX, y: window.scrollY }),
      window.addEventListener("scroll", this.onElementScroll, { capture: !0 }),
      window.addEventListener("scroll", this.onWindowScroll),
      (this.removeScrollListeners = () => {
        (window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0,
        }),
          window.removeEventListener("scroll", this.onWindowScroll));
      }));
  }
  handleScroll(i) {
    const o = this.scrollPositions.get(i);
    if (!o) return;
    const c = i === window,
      u = c
        ? { x: window.scrollX, y: window.scrollY }
        : { x: i.scrollLeft, y: i.scrollTop },
      p = { x: u.x - o.x, y: u.y - o.y };
    (p.x === 0 && p.y === 0) ||
      (c
        ? this.lastMoveEventInfo &&
          ((this.lastMoveEventInfo.point.x += p.x),
          (this.lastMoveEventInfo.point.y += p.y))
        : this.history.length > 0 &&
          ((this.history[0].x -= p.x), (this.history[0].y -= p.y)),
      this.scrollPositions.set(i, u),
      _t.update(this.updatePoint, !0));
  }
  updateHandlers(i) {
    this.handlers = i;
  }
  end() {
    (this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      In(this.updatePoint));
  }
}
function xu(a, i) {
  return i ? { point: i(a.point) } : a;
}
function J1(a, i) {
  return { x: a.x - i.x, y: a.y - i.y };
}
function Au({ point: a }, i) {
  return {
    point: a,
    delta: J1(a, K0(i)),
    offset: J1(a, IS(i)),
    velocity: t3(i, 0.1),
  };
}
function IS(a) {
  return a[0];
}
function K0(a) {
  return a[a.length - 1];
}
function t3(a, i) {
  if (a.length < 2) return { x: 0, y: 0 };
  let o = a.length - 1,
    c = null;
  const u = K0(a);
  for (; o >= 0 && ((c = a[o]), !(u.timestamp - c.timestamp > Re(i)));) o--;
  if (!c) return { x: 0, y: 0 };
  c === a[0] &&
    a.length > 2 &&
    u.timestamp - c.timestamp > Re(i) * 2 &&
    (c = a[1]);
  const p = ke(u.timestamp - c.timestamp);
  if (p === 0) return { x: 0, y: 0 };
  const d = { x: (u.x - c.x) / p, y: (u.y - c.y) / p };
  return (d.x === 1 / 0 && (d.x = 0), d.y === 1 / 0 && (d.y = 0), d);
}
function e3(a, { min: i, max: o }, c) {
  return (
    i !== void 0 && a < i
      ? (a = c ? Vt(i, a, c.min) : Math.max(a, i))
      : o !== void 0 && a > o && (a = c ? Vt(o, a, c.max) : Math.min(a, o)),
    a
  );
}
function F1(a, i, o) {
  return {
    min: i !== void 0 ? a.min + i : void 0,
    max: o !== void 0 ? a.max + o - (a.max - a.min) : void 0,
  };
}
function n3(a, { top: i, left: o, bottom: c, right: u }) {
  return { x: F1(a.x, o, u), y: F1(a.y, i, c) };
}
function $1(a, i) {
  let o = i.min - a.min,
    c = i.max - a.max;
  return (
    i.max - i.min < a.max - a.min && ([o, c] = [c, o]),
    { min: o, max: c }
  );
}
function a3(a, i) {
  return { x: $1(a.x, i.x), y: $1(a.y, i.y) };
}
function s3(a, i) {
  let o = 0.5;
  const c = de(a),
    u = de(i);
  return (
    u > c
      ? (o = Di(i.min, i.max - c, a.min))
      : c > u && (o = Di(a.min, a.max - u, i.min)),
    sn(0, 1, o)
  );
}
function i3(a, i) {
  const o = {};
  return (
    i.min !== void 0 && (o.min = i.min - a.min),
    i.max !== void 0 && (o.max = i.max - a.min),
    o
  );
}
const Fu = 0.35;
function l3(a = Fu) {
  return (
    a === !1 ? (a = 0) : a === !0 && (a = Fu),
    { x: P1(a, "left", "right"), y: P1(a, "top", "bottom") }
  );
}
function P1(a, i, o) {
  return { min: W1(a, i), max: W1(a, o) };
}
function W1(a, i) {
  return typeof a == "number" ? a : a[i] || 0;
}
const o3 = new WeakMap();
class c3 {
  constructor(i) {
    ((this.openDragLock = null),
      (this.isDragging = !1),
      (this.currentDirection = null),
      (this.originPoint = { x: 0, y: 0 }),
      (this.constraints = !1),
      (this.hasMutatedConstraints = !1),
      (this.elastic = Wt()),
      (this.latestPointerEvent = null),
      (this.latestPanInfo = null),
      (this.visualElement = i));
  }
  start(i, { snapToCursor: o = !1, distanceThreshold: c } = {}) {
    const { presenceContext: u } = this.visualElement;
    if (u && u.isPresent === !1) return;
    const p = (A) => {
        (o && this.snapToCursor(Li(A).point), this.stopAnimation());
      },
      d = (A, S) => {
        const { drag: O, dragPropagation: M, onDragStart: w } = this.getProps();
        if (
          O &&
          !M &&
          (this.openDragLock && this.openDragLock(),
          (this.openDragLock = _A(O)),
          !this.openDragLock)
        )
          return;
        ((this.latestPointerEvent = A),
          (this.latestPanInfo = S),
          (this.isDragging = !0),
          (this.currentDirection = null),
          this.resolveConstraints(),
          this.visualElement.projection &&
            ((this.visualElement.projection.isAnimationBlocked = !0),
            (this.visualElement.projection.target = void 0)),
          en((Y) => {
            let X = this.getAxisMotionValue(Y).get() || 0;
            if (an.test(X)) {
              const { projection: Q } = this.visualElement;
              if (Q && Q.layout) {
                const Z = Q.layout.layoutBox[Y];
                Z && (X = de(Z) * (parseFloat(X) / 100));
              }
            }
            this.originPoint[Y] = X;
          }),
          w && _t.update(() => w(A, S), !1, !0),
          Lu(this.visualElement, "transform"));
        const { animationState: q } = this.visualElement;
        q && q.setActive("whileDrag", !0);
      },
      y = (A, S) => {
        ((this.latestPointerEvent = A), (this.latestPanInfo = S));
        const {
          dragPropagation: O,
          dragDirectionLock: M,
          onDirectionLock: w,
          onDrag: q,
        } = this.getProps();
        if (!O && !this.openDragLock) return;
        const { offset: Y } = S;
        if (M && this.currentDirection === null) {
          ((this.currentDirection = u3(Y)),
            this.currentDirection !== null && w && w(this.currentDirection));
          return;
        }
        (this.updateAxis("x", S.point, Y),
          this.updateAxis("y", S.point, Y),
          this.visualElement.render(),
          q && _t.update(() => q(A, S), !1, !0));
      },
      g = (A, S) => {
        ((this.latestPointerEvent = A),
          (this.latestPanInfo = S),
          this.stop(A, S),
          (this.latestPointerEvent = null),
          (this.latestPanInfo = null));
      },
      m = () => {
        const { dragSnapToOrigin: A } = this.getProps();
        (A || this.constraints) && this.startAnimation({ x: 0, y: 0 });
      },
      { dragSnapToOrigin: x } = this.getProps();
    this.panSession = new Z0(
      i,
      {
        onSessionStart: p,
        onStart: d,
        onMove: y,
        onSessionEnd: g,
        resumeAnimation: m,
      },
      {
        transformPagePoint: this.visualElement.getTransformPagePoint(),
        dragSnapToOrigin: x,
        distanceThreshold: c,
        contextWindow: Q0(this.visualElement),
        element: this.visualElement.current,
      },
    );
  }
  stop(i, o) {
    const c = i || this.latestPointerEvent,
      u = o || this.latestPanInfo,
      p = this.isDragging;
    if ((this.cancel(), !p || !u || !c)) return;
    const { velocity: d } = u;
    this.startAnimation(d);
    const { onDragEnd: y } = this.getProps();
    y && _t.postRender(() => y(c, u));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: o } = this.visualElement;
    (i && (i.isAnimationBlocked = !1), this.endPanSession());
    const { dragPropagation: c } = this.getProps();
    (!c &&
      this.openDragLock &&
      (this.openDragLock(), (this.openDragLock = null)),
      o && o.setActive("whileDrag", !1));
  }
  endPanSession() {
    (this.panSession && this.panSession.end(), (this.panSession = void 0));
  }
  updateAxis(i, o, c) {
    const { drag: u } = this.getProps();
    if (!c || !lo(i, u, this.currentDirection)) return;
    const p = this.getAxisMotionValue(i);
    let d = this.originPoint[i] + c[i];
    (this.constraints &&
      this.constraints[i] &&
      (d = e3(d, this.constraints[i], this.elastic[i])),
      p.set(d));
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: o } = this.getProps(),
      c =
        this.visualElement.projection && !this.visualElement.projection.layout
          ? this.visualElement.projection.measure(!1)
          : this.visualElement.projection?.layout,
      u = this.constraints;
    (i && hs(i)
      ? this.constraints || (this.constraints = this.resolveRefConstraints())
      : i && c
        ? (this.constraints = n3(c.layoutBox, i))
        : (this.constraints = !1),
      (this.elastic = l3(o)),
      u !== this.constraints &&
        !hs(i) &&
        c &&
        this.constraints &&
        !this.hasMutatedConstraints &&
        en((p) => {
          this.constraints !== !1 &&
            this.getAxisMotionValue(p) &&
            (this.constraints[p] = i3(c.layoutBox[p], this.constraints[p]));
        }));
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: o } = this.getProps();
    if (!i || !hs(i)) return !1;
    const c = i.current,
      { projection: u } = this.visualElement;
    if (!u || !u.layout) return !1;
    const p = ub(c, u.root, this.visualElement.getTransformPagePoint());
    let d = a3(u.layout.layoutBox, p);
    if (o) {
      const y = o(ob(d));
      ((this.hasMutatedConstraints = !!y), y && (d = p0(y)));
    }
    return d;
  }
  startAnimation(i) {
    const {
        drag: o,
        dragMomentum: c,
        dragElastic: u,
        dragTransition: p,
        dragSnapToOrigin: d,
        onDragTransitionEnd: y,
      } = this.getProps(),
      g = this.constraints || {},
      m = en((x) => {
        if (!lo(x, o, this.currentDirection)) return;
        let A = (g && g[x]) || {};
        d && (A = { min: 0, max: 0 });
        const S = u ? 200 : 1e6,
          O = u ? 40 : 1e7,
          M = {
            type: "inertia",
            velocity: c ? i[x] : 0,
            bounceStiffness: S,
            bounceDamping: O,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...p,
            ...A,
          };
        return this.startAxisValueAnimation(x, M);
      });
    return Promise.all(m).then(y);
  }
  startAxisValueAnimation(i, o) {
    const c = this.getAxisMotionValue(i);
    return (
      Lu(this.visualElement, i),
      c.start(mf(i, c, 0, o, this.visualElement, !1))
    );
  }
  stopAnimation() {
    en((i) => this.getAxisMotionValue(i).stop());
  }
  getAxisMotionValue(i) {
    const o = `_drag${i.toUpperCase()}`,
      c = this.visualElement.getProps(),
      u = c[o];
    return (
      u ||
      this.visualElement.getValue(i, (c.initial ? c.initial[i] : void 0) || 0)
    );
  }
  snapToCursor(i) {
    en((o) => {
      const { drag: c } = this.getProps();
      if (!lo(o, c, this.currentDirection)) return;
      const { projection: u } = this.visualElement,
        p = this.getAxisMotionValue(o);
      if (u && u.layout) {
        const { min: d, max: y } = u.layout.layoutBox[o],
          g = p.get() || 0;
        p.set(i[o] - Vt(d, y, 0.5) + g);
      }
    });
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current) return;
    const { drag: i, dragConstraints: o } = this.getProps(),
      { projection: c } = this.visualElement;
    if (!hs(o) || !c || !this.constraints) return;
    this.stopAnimation();
    const u = { x: 0, y: 0 };
    en((d) => {
      const y = this.getAxisMotionValue(d);
      if (y && this.constraints !== !1) {
        const g = y.get();
        u[d] = s3({ min: g, max: g }, this.constraints[d]);
      }
    });
    const { transformTemplate: p } = this.visualElement.getProps();
    ((this.visualElement.current.style.transform = p ? p({}, "") : "none"),
      c.root && c.root.updateScroll(),
      c.updateLayout(),
      (this.constraints = !1),
      this.resolveConstraints(),
      en((d) => {
        if (!lo(d, i, null)) return;
        const y = this.getAxisMotionValue(d),
          { min: g, max: m } = this.constraints[d];
        y.set(Vt(g, m, u[d]));
      }),
      this.visualElement.render());
  }
  addListeners() {
    if (!this.visualElement.current) return;
    o3.set(this.visualElement, this);
    const i = this.visualElement.current,
      o = zi(i, "pointerdown", (m) => {
        const { drag: x, dragListener: A = !0 } = this.getProps(),
          S = m.target,
          O = S !== i && qA(S);
        x && A && !O && this.start(m);
      });
    let c;
    const u = () => {
        const { dragConstraints: m } = this.getProps();
        hs(m) &&
          m.current &&
          ((this.constraints = this.resolveRefConstraints()),
          c ||
            (c = r3(i, m.current, () =>
              this.scalePositionWithinConstraints(),
            )));
      },
      { projection: p } = this.visualElement,
      d = p.addEventListener("measure", u);
    (p && !p.layout && (p.root && p.root.updateScroll(), p.updateLayout()),
      _t.read(u));
    const y = wi(window, "resize", () => this.scalePositionWithinConstraints()),
      g = p.addEventListener(
        "didUpdate",
        ({ delta: m, hasLayoutChanged: x }) => {
          this.isDragging &&
            x &&
            (en((A) => {
              const S = this.getAxisMotionValue(A);
              S &&
                ((this.originPoint[A] += m[A].translate),
                S.set(S.get() + m[A].translate));
            }),
            this.visualElement.render());
        },
      );
    return () => {
      (y(), o(), d(), g && g(), c && c());
    };
  }
  getProps() {
    const i = this.visualElement.getProps(),
      {
        drag: o = !1,
        dragDirectionLock: c = !1,
        dragPropagation: u = !1,
        dragConstraints: p = !1,
        dragElastic: d = Fu,
        dragMomentum: y = !0,
      } = i;
    return {
      ...i,
      drag: o,
      dragDirectionLock: c,
      dragPropagation: u,
      dragConstraints: p,
      dragElastic: d,
      dragMomentum: y,
    };
  }
}
function I1(a) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return;
    }
    a();
  };
}
function r3(a, i, o) {
  const c = l1(a, I1(o)),
    u = l1(i, I1(o));
  return () => {
    (c(), u());
  };
}
function lo(a, i, o) {
  return (i === !0 || i === a) && (o === null || o === a);
}
function u3(a, i = 10) {
  let o = null;
  return (Math.abs(a.y) > i ? (o = "y") : Math.abs(a.x) > i && (o = "x"), o);
}
class f3 extends ta {
  constructor(i) {
    (super(i),
      (this.removeGroupControls = Ye),
      (this.removeListeners = Ye),
      (this.controls = new c3(i)));
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    (i && (this.removeGroupControls = i.subscribe(this.controls)),
      (this.removeListeners = this.controls.addListeners() || Ye));
  }
  update() {
    const { dragControls: i } = this.node.getProps(),
      { dragControls: o } = this.node.prevProps || {};
    i !== o &&
      (this.removeGroupControls(),
      i && (this.removeGroupControls = i.subscribe(this.controls)));
  }
  unmount() {
    (this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession());
  }
}
const bu = (a) => (i, o) => {
  a && _t.update(() => a(i, o), !1, !0);
};
class d3 extends ta {
  constructor() {
    (super(...arguments), (this.removePointerDownListener = Ye));
  }
  onPointerDown(i) {
    this.session = new Z0(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: Q0(this.node),
    });
  }
  createPanHandlers() {
    const {
      onPanSessionStart: i,
      onPanStart: o,
      onPan: c,
      onPanEnd: u,
    } = this.node.getProps();
    return {
      onSessionStart: bu(i),
      onStart: bu(o),
      onMove: bu(c),
      onEnd: (p, d) => {
        (delete this.session, u && _t.postRender(() => u(p, d)));
      },
    };
  }
  mount() {
    this.removePointerDownListener = zi(this.node.current, "pointerdown", (i) =>
      this.onPointerDown(i),
    );
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    (this.removePointerDownListener(), this.session && this.session.end());
  }
}
let Su = !1;
class h3 extends k.Component {
  componentDidMount() {
    const {
        visualElement: i,
        layoutGroup: o,
        switchLayoutGroup: c,
        layoutId: u,
      } = this.props,
      { projection: p } = i;
    (p &&
      (o.group && o.group.add(p),
      c && c.register && u && c.register(p),
      Su && p.root.didUpdate(),
      p.addEventListener("animationComplete", () => {
        this.safeToRemove();
      }),
      p.setOptions({
        ...p.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove(),
      })),
      (go.hasEverUpdated = !0));
  }
  getSnapshotBeforeUpdate(i) {
    const {
        layoutDependency: o,
        visualElement: c,
        drag: u,
        isPresent: p,
      } = this.props,
      { projection: d } = c;
    return (
      d &&
        ((d.isPresent = p),
        i.layoutDependency !== o &&
          d.setOptions({ ...d.options, layoutDependency: o }),
        (Su = !0),
        u || i.layoutDependency !== o || o === void 0 || i.isPresent !== p
          ? d.willUpdate()
          : this.safeToRemove(),
        i.isPresent !== p &&
          (p
            ? d.promote()
            : d.relegate() ||
              _t.postRender(() => {
                const y = d.getStack();
                (!y || !y.members.length) && this.safeToRemove();
              }))),
      null
    );
  }
  componentDidUpdate() {
    const { projection: i } = this.props.visualElement;
    i &&
      (i.root.didUpdate(),
      xf.postRender(() => {
        !i.currentAnimation && i.isLead() && this.safeToRemove();
      }));
  }
  componentWillUnmount() {
    const {
        visualElement: i,
        layoutGroup: o,
        switchLayoutGroup: c,
      } = this.props,
      { projection: u } = i;
    ((Su = !0),
      u &&
        (u.scheduleCheckAfterUnmount(),
        o && o.group && o.group.remove(u),
        c && c.deregister && c.deregister(u)));
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i();
  }
  render() {
    return null;
  }
}
function J0(a) {
  const [i, o] = _0(),
    c = k.useContext(tf);
  return f.jsx(h3, {
    ...a,
    layoutGroup: c,
    switchLayoutGroup: k.useContext(Y0),
    isPresent: i,
    safeToRemove: o,
  });
}
const p3 = {
  pan: { Feature: d3 },
  drag: { Feature: f3, ProjectionNode: V0, MeasureLayout: J0 },
};
function ty(a, i, o) {
  const { props: c } = a;
  a.animationState &&
    c.whileHover &&
    a.animationState.setActive("whileHover", o === "Start");
  const u = "onHover" + o,
    p = c[u];
  p && _t.postRender(() => p(i, Li(i)));
}
class m3 extends ta {
  mount() {
    const { current: i } = this.node;
    i &&
      (this.unmount = BA(
        i,
        (o, c) => (ty(this.node, c, "Start"), (u) => ty(this.node, u, "End")),
      ));
  }
  unmount() {}
}
class y3 extends ta {
  constructor() {
    (super(...arguments), (this.isActive = !1));
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible");
    } catch {
      i = !0;
    }
    !i ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !0),
      (this.isActive = !0));
  }
  onBlur() {
    !this.isActive ||
      !this.node.animationState ||
      (this.node.animationState.setActive("whileFocus", !1),
      (this.isActive = !1));
  }
  mount() {
    this.unmount = _i(
      wi(this.node.current, "focus", () => this.onFocus()),
      wi(this.node.current, "blur", () => this.onBlur()),
    );
  }
  unmount() {}
}
function ey(a, i, o) {
  const { props: c } = a;
  if (a.current instanceof HTMLButtonElement && a.current.disabled) return;
  a.animationState &&
    c.whileTap &&
    a.animationState.setActive("whileTap", o === "Start");
  const u = "onTap" + (o === "End" ? "" : o),
    p = c[u];
  p && _t.postRender(() => p(i, Li(i)));
}
class g3 extends ta {
  mount() {
    const { current: i } = this.node;
    if (!i) return;
    const { globalTapTarget: o, propagate: c } = this.node.props;
    this.unmount = YA(
      i,
      (u, p) => (
        ey(this.node, p, "Start"),
        (d, { success: y }) => ey(this.node, d, y ? "End" : "Cancel")
      ),
      { useGlobalTarget: o, stopPropagation: c?.tap === !1 },
    );
  }
  unmount() {}
}
const $u = new WeakMap(),
  Tu = new WeakMap(),
  v3 = (a) => {
    const i = $u.get(a.target);
    i && i(a);
  },
  x3 = (a) => {
    a.forEach(v3);
  };
function A3({ root: a, ...i }) {
  const o = a || document;
  Tu.has(o) || Tu.set(o, {});
  const c = Tu.get(o),
    u = JSON.stringify(i);
  return (
    c[u] || (c[u] = new IntersectionObserver(x3, { root: a, ...i })),
    c[u]
  );
}
function b3(a, i, o) {
  const c = A3(i);
  return (
    $u.set(a, o),
    c.observe(a),
    () => {
      ($u.delete(a), c.unobserve(a));
    }
  );
}
const S3 = { some: 0, all: 1 };
class T3 extends ta {
  constructor() {
    (super(...arguments), (this.hasEnteredView = !1), (this.isInView = !1));
  }
  startObserver() {
    this.unmount();
    const { viewport: i = {} } = this.node.getProps(),
      { root: o, margin: c, amount: u = "some", once: p } = i,
      d = {
        root: o ? o.current : void 0,
        rootMargin: c,
        threshold: typeof u == "number" ? u : S3[u],
      },
      y = (g) => {
        const { isIntersecting: m } = g;
        if (
          this.isInView === m ||
          ((this.isInView = m), p && !m && this.hasEnteredView)
        )
          return;
        (m && (this.hasEnteredView = !0),
          this.node.animationState &&
            this.node.animationState.setActive("whileInView", m));
        const { onViewportEnter: x, onViewportLeave: A } = this.node.getProps(),
          S = m ? x : A;
        S && S(g);
      };
    return b3(this.node.current, d, y);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u") return;
    const { props: i, prevProps: o } = this.node;
    ["amount", "margin", "root"].some(j3(i, o)) && this.startObserver();
  }
  unmount() {}
}
function j3({ viewport: a = {} }, { viewport: i = {} } = {}) {
  return (o) => a[o] !== i[o];
}
const E3 = {
    inView: { Feature: T3 },
    tap: { Feature: g3 },
    focus: { Feature: y3 },
    hover: { Feature: m3 },
  },
  M3 = { layout: { ProjectionNode: V0, MeasureLayout: J0 } },
  z3 = { ...$S, ...E3, ...p3, ...M3 },
  xs = QS(z3, ZS);
const F0 = (...a) =>
  a
    .filter((i, o, c) => !!i && i.trim() !== "" && c.indexOf(i) === o)
    .join(" ")
    .trim();
const N3 = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const C3 = (a) =>
  a.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, o, c) =>
    c ? c.toUpperCase() : o.toLowerCase(),
  );
const ny = (a) => {
  const i = C3(a);
  return i.charAt(0).toUpperCase() + i.slice(1);
};
var D3 = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const R3 = (a) => {
  for (const i in a)
    if (i.startsWith("aria-") || i === "role" || i === "title") return !0;
  return !1;
};
const O3 = k.forwardRef(
  (
    {
      color: a = "currentColor",
      size: i = 24,
      strokeWidth: o = 2,
      absoluteStrokeWidth: c,
      className: u = "",
      children: p,
      iconNode: d,
      ...y
    },
    g,
  ) =>
    k.createElement(
      "svg",
      {
        ref: g,
        ...D3,
        width: i,
        height: i,
        stroke: a,
        strokeWidth: c ? (Number(o) * 24) / Number(i) : o,
        className: F0("lucide", u),
        ...(!p && !R3(y) && { "aria-hidden": "true" }),
        ...y,
      },
      [
        ...d.map(([m, x]) => k.createElement(m, x)),
        ...(Array.isArray(p) ? p : [p]),
      ],
    ),
);
const Et = (a, i) => {
  const o = k.forwardRef(({ className: c, ...u }, p) =>
    k.createElement(O3, {
      ref: p,
      iconNode: i,
      className: F0(`lucide-${N3(ny(a))}`, `lucide-${a}`, c),
      ...u,
    }),
  );
  return ((o.displayName = ny(a)), o);
};
const w3 = [
    ["path", { d: "M12 5v14", key: "s699le" }],
    ["path", { d: "m19 12-7 7-7-7", key: "1idqje" }],
  ],
  V3 = Et("arrow-down", w3);
const _3 = [
    ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
    ["path", { d: "M19 12H5", key: "x3x0zl" }],
  ],
  U3 = Et("arrow-left", _3);
const B3 = [
    ["path", { d: "M5 12h14", key: "1ays0h" }],
    ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
  ],
  Ta = Et("arrow-right", B3);
const L3 = [
    ["path", { d: "M7 7h10v10", key: "1tivn9" }],
    ["path", { d: "M7 17 17 7", key: "1vkiza" }],
  ],
  De = Et("arrow-up-right", L3);
const H3 = [
    [
      "path",
      {
        d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
        key: "1yiouv",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
  ],
  ju = Et("award", H3);
const G3 = [
    ["path", { d: "M12 7v14", key: "1akyts" }],
    [
      "path",
      {
        d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
        key: "ruj8y",
      },
    ],
  ],
  bi = Et("book-open", G3);
const q3 = [
    [
      "path",
      {
        d: "M17 3a2 2 0 0 1 2 2v15a1 1 0 0 1-1.496.868l-4.512-2.578a2 2 0 0 0-1.984 0l-4.512 2.578A1 1 0 0 1 5 20V5a2 2 0 0 1 2-2z",
        key: "oz39mx",
      },
    ],
  ],
  ay = Et("bookmark", q3);
const k3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]],
  Pn = Et("check", k3);
const Y3 = [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]],
  X3 = Et("chevron-down", Y3);
const Q3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]],
  Z3 = Et("chevron-left", Q3);
const K3 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]],
  J3 = Et("chevron-right", K3);
const F3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  ps = Et("circle-check", F3);
const $3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3", key: "1u773s" }],
    ["path", { d: "M12 17h.01", key: "p32p05" }],
  ],
  P3 = Et("circle-question-mark", $3);
const W3 = [
    ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
    ["path", { d: "M12 6v6h4", key: "135r8i" }],
  ],
  oo = Et("clock-3", W3);
const I3 = [
    ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
    ["path", { d: "M10 14 21 3", key: "gplh6r" }],
    [
      "path",
      {
        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
        key: "a6xqqp",
      },
    ],
  ],
  sy = Et("external-link", I3);
const tT = [
    [
      "path",
      {
        d: "M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",
        key: "3pnvol",
      },
    ],
    ["circle", { cx: "12", cy: "8", r: "2", key: "1822b1" }],
    ["path", { d: "M12 10v12", key: "6ubwww" }],
    [
      "path",
      { d: "M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z", key: "9hd38g" },
    ],
    [
      "path",
      { d: "M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z", key: "ufn41s" },
    ],
  ],
  iy = Et("flower-2", tT);
const eT = [
    [
      "path",
      {
        d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
        key: "mvr1a0",
      },
    ],
  ],
  nT = Et("heart", eT);
const aT = [
    ["path", { d: "M10 18v-7", key: "wt116b" }],
    [
      "path",
      {
        d: "M11.12 2.198a2 2 0 0 1 1.76.006l7.866 3.847c.476.233.31.949-.22.949H3.474c-.53 0-.695-.716-.22-.949z",
        key: "1m329m",
      },
    ],
    ["path", { d: "M14 18v-7", key: "vav6t3" }],
    ["path", { d: "M18 18v-7", key: "aexdmj" }],
    ["path", { d: "M3 22h18", key: "8prr45" }],
    ["path", { d: "M6 18v-7", key: "1ivflk" }],
  ],
  sT = Et("landmark", aT);
const iT = [
    [
      "path",
      {
        d: "M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",
        key: "zw3jo",
      },
    ],
    [
      "path",
      {
        d: "M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",
        key: "1wduqc",
      },
    ],
    [
      "path",
      {
        d: "M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",
        key: "kqbvx6",
      },
    ],
  ],
  ly = Et("layers", iT);
const lT = [
    [
      "path",
      {
        d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
        key: "1gvzjb",
      },
    ],
    ["path", { d: "M9 18h6", key: "x1upvd" }],
    ["path", { d: "M10 22h4", key: "ceow96" }],
  ],
  $0 = Et("lightbulb", lT);
const oT = [
    ["path", { d: "M4 5h16", key: "1tepv9" }],
    ["path", { d: "M4 12h16", key: "1lakjw" }],
    ["path", { d: "M4 19h16", key: "1djgab" }],
  ],
  cT = Et("menu", oT);
const rT = [
    ["circle", { cx: "8", cy: "18", r: "4", key: "1fc0mg" }],
    ["path", { d: "M12 18V2l7 4", key: "g04rme" }],
  ],
  uT = Et("music-2", rT);
const fT = [
    [
      "path",
      {
        d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
        key: "10ikf1",
      },
    ],
  ],
  dT = Et("play", fT);
const hT = [
    [
      "path",
      { d: "M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "1357e3" },
    ],
    ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ],
  Ni = Et("rotate-ccw", hT);
const pT = [
    ["path", { d: "m21 21-4.34-4.34", key: "14j7rj" }],
    ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ],
  oy = Et("search", pT);
const mT = [
    [
      "path",
      {
        d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
        key: "oel41y",
      },
    ],
    ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
  ],
  cy = Et("shield-check", mT);
const yT = [
    [
      "path",
      {
        d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
        key: "1s2grr",
      },
    ],
    ["path", { d: "M20 2v4", key: "1rf3ol" }],
    ["path", { d: "M22 4h-4", key: "gwowj6" }],
    ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }],
  ],
  _o = Et("sparkles", yT);
const gT = [
    [
      "path",
      {
        d: "M14 9.536V7a4 4 0 0 1 4-4h1.5a.5.5 0 0 1 .5.5V5a4 4 0 0 1-4 4 4 4 0 0 0-4 4c0 2 1 3 1 5a5 5 0 0 1-1 3",
        key: "139s4v",
      },
    ],
    ["path", { d: "M4 9a5 5 0 0 1 8 4 5 5 0 0 1-8-4", key: "1dlkgp" }],
    ["path", { d: "M5 21h14", key: "11awu3" }],
  ],
  ry = Et("sprout", gT);
const vT = [
    [
      "path",
      {
        d: "M10 14.66v1.626a2 2 0 0 1-.976 1.696A5 5 0 0 0 7 21.978",
        key: "1n3hpd",
      },
    ],
    [
      "path",
      {
        d: "M14 14.66v1.626a2 2 0 0 0 .976 1.696A5 5 0 0 1 17 21.978",
        key: "rfe1zi",
      },
    ],
    ["path", { d: "M18 9h1.5a1 1 0 0 0 0-5H18", key: "7xy6bh" }],
    ["path", { d: "M4 22h16", key: "57wxv0" }],
    [
      "path",
      {
        d: "M6 9a6 6 0 0 0 12 0V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1z",
        key: "1mhfuq",
      },
    ],
    ["path", { d: "M6 9H4.5a1 1 0 0 1 0-5H6", key: "tex48p" }],
  ],
  Pu = Et("trophy", vT);
const xT = [
    [
      "path",
      {
        d: "M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",
        key: "uqj9uw",
      },
    ],
    ["path", { d: "M16 9a5 5 0 0 1 0 6", key: "1q6k2b" }],
    ["path", { d: "M19.364 18.364a9 9 0 0 0 0-12.728", key: "ijwkga" }],
  ],
  AT = Et("volume-2", xT);
const bT = [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ],
  Ci = Et("x", bT);
function ST({ children: a, onClose: i, title: o, wide: c = !1 }) {
  const u = k.useRef(null),
    p = k.useRef(i);
  return (
    k.useEffect(() => {
      p.current = i;
    }, [i]),
    k.useEffect(() => {
      const d = document.activeElement,
        y = document.body.style.overflow;
      ((document.body.style.overflow = "hidden"), u.current?.focus());
      const g = (m) => {
        if ((m.key === "Escape" && p.current(), m.key === "Tab" && u.current)) {
          const x = Array.from(
              u.current.querySelectorAll(
                'a[href], button:not([disabled]), input, select, textarea, [tabindex="0"]',
              ),
            ).filter((O) => O.offsetParent !== null),
            A = x[0],
            S = x[x.length - 1];
          if (!A) {
            m.preventDefault();
            return;
          }
          m.shiftKey &&
          (document.activeElement === A || document.activeElement === u.current)
            ? (m.preventDefault(), S.focus())
            : !m.shiftKey &&
              (document.activeElement === S ||
                document.activeElement === u.current) &&
              (m.preventDefault(), A.focus());
        }
      };
      return (
        document.addEventListener("keydown", g),
        () => {
          ((document.body.style.overflow = y),
            document.removeEventListener("keydown", g),
            d?.focus());
        }
      );
    }, []),
    f.jsx(xs.div, {
      className: "modal-backdrop",
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: i,
      "data-source-loc": "src/components/Modal.tsx:28:9",
      children: f.jsxs(xs.div, {
        ref: u,
        role: "dialog",
        "aria-modal": "true",
        "aria-label": o,
        tabIndex: -1,
        className: `modal-panel ${c ? "modal-wide" : ""}`,
        initial: { opacity: 0, y: 24, scale: 0.98 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 12, scale: 0.98 },
        transition: { duration: 0.22 },
        onClick: (d) => d.stopPropagation(),
        "data-source-loc": "src/components/Modal.tsx:29:4",
        children: [
          f.jsx("button", {
            className: "modal-close icon-button",
            "aria-label": "Жабу / Закрыть",
            onClick: i,
            "data-source-loc": "src/components/Modal.tsx:30:6",
            children: f.jsx(Ci, {
              size: 21,
              "data-source-loc": "src/components/Modal.tsx:30:96",
            }),
          }),
          a,
        ],
      }),
    })
  );
}
const za = (a, i, o) => (a === "kz" ? i : o),
  Si = [
    {
      id: "language",
      title: "Тіл әлемі",
      titleRu: "Мир языка",
      description: "Әр сөздің артында — тұтас бір әлем.",
      descriptionRu: "За каждым словом — целый мир.",
      image: "/images/language.webp",
      tag: "ҮЙРЕН",
      tagRu: "ИЗУЧАЙ",
    },
    {
      id: "culture",
      title: "Мәдениет пен өнер",
      titleRu: "Культура и искусство",
      description: "Ұлттың үні. Даланың әуені.",
      descriptionRu: "Голос народа. Мелодия степи.",
      image: "/images/dombyra.webp",
      tag: "СЕЗІН",
      tagRu: "ПОЧУВСТВУЙ",
    },
    {
      id: "history",
      title: "Тарих пен тұлғалар",
      titleRu: "История и личности",
      description: "Өткенді таны. Болашақты түсін.",
      descriptionRu: "Познай прошлое. Пойми будущее.",
      image: "/images/turkestan.webp",
      tag: "ТАНЫ",
      tagRu: "ПОЗНАВАЙ",
    },
    {
      id: "traditions",
      title: "Салт-дәстүр",
      titleRu: "Традиции",
      description: "Ұрпақтан ұрпаққа жалғасқан мұра.",
      descriptionRu: "Наследие, объединяющее поколения.",
      image: "/images/steppe-yurt.webp",
      tag: "ДӘРІПТЕ",
      tagRu: "СОХРАНЯЙ",
    },
  ],
  Je = [
    {
      id: "letters",
      category: "language",
      title: "Қазақ тілінің ерекше әріптері",
      titleRu: "Особые буквы казахского языка",
      intro: "Тілмен танысу дыбыстан басталады.",
      introRu: "Знакомство с языком начинается со звука.",
      body: [
        "Қазақ әліпбиіндегі Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І әріптеріне назар аудар. Олар сөздің дыбысталуын және мағынасын ажыратуға көмектеседі.",
        "Мысалы: әже — бабушка, ғалым — учёный, қала — город, аң — зверь, өнер — искусство, ұлт — нация, үй — дом, қаһарман — герой, тіл — язык. Сөздерді дауыстап айтып көр.",
      ],
      bodyRu: [
        "Обрати внимание на буквы Ә, Ғ, Қ, Ң, Ө, Ұ, Ү, Һ, І в казахском алфавите. Они помогают различать произношение и значение слов.",
        "Примеры: әже — бабушка, ғалым — учёный, қала — город, аң — зверь, өнер — искусство, ұлт — нация, үй — дом, қаһарман — герой, тіл — язык. Попробуй произнести слова вслух.",
      ],
      fact: "«Ұ» мен «Ү» — екі бөлек дыбыс. Салыстыр: ұн (мука) — үн (голос).",
      factRu: "«Ұ» и «Ү» — разные звуки. Сравни: ұн (мука) — үн (голос).",
      image: "/images/language.webp",
    },
    {
      id: "greetings",
      category: "language",
      title: "Алғашқы әңгіме",
      titleRu: "Первый разговор",
      intro: "Бір «Сәлем!» жаңа достыққа жол ашады.",
      introRu: "Одно «Сәлем!» открывает путь к дружбе.",
      body: [
        "Сәлем! — Привет! Сәлеметсіз бе? — Здравствуйте! Қалыңыз қалай? — Как ваши дела? Рақмет! — Спасибо! Сау болыңыз! — До свидания!",
        "Өзіңді таныстыр: «Менің атым — ...» (Меня зовут ...). «Танысқаныма қуаныштымын!» (Рад знакомству!). Үлкен кісіге немесе бейтаныс адамға сөйлегенде «Сіз» деген сыпайы түрін қолдан.",
      ],
      bodyRu: [
        "Сәлем! — Привет! Сәлеметсіз бе? — Здравствуйте! Қалыңыз қалай? — Как ваши дела? Рақмет! — Спасибо! Сау болыңыз! — До свидания!",
        "Представься: «Менің атым — ...» (Меня зовут ...). «Танысқаныма қуаныштымын!» (Рад знакомству!). Обращаясь к старшим или незнакомым людям, используй вежливое «Сіз».",
      ],
      fact: "Бүгін бір адаммен қазақша амандасып көр!",
      factRu: "Попробуй сегодня поздороваться с кем-нибудь по-казахски!",
    },
    {
      id: "proverbs",
      category: "language",
      title: "Мақал — сөздің мәйегі",
      titleRu: "Мудрость в пословицах",
      intro: "Аз сөзге сыйған терең ой.",
      introRu: "Глубокая мысль в нескольких словах.",
      body: [
        "«Отан — оттан да ыстық». Бұл мақал туған жердің адамға қаншалықты қымбат екенін білдіреді.",
        "«Оқу — білім бұлағы, білім — өмір шырағы». Оқу арқылы адам білімге жетеді, ал білім өмірде жол көрсетеді. Өзіңе ұнаған мақалды жаттап ал.",
      ],
      bodyRu: [
        "«Отан — оттан да ыстық» — «Родина жарче огня». Пословица говорит о том, насколько дорога человеку родная земля.",
        "«Оқу — білім бұлағы, білім — өмір шырағы» — «Учение — источник знаний, знание — светоч жизни». Учёба даёт знания, а знания помогают найти путь. Выучи понравившуюся пословицу.",
      ],
      fact: "Мақал-мәтелдер — халықтың өмір тәжірибесін жеткізетін ауыз әдебиетінің жанры.",
      factRu:
        "Пословицы и поговорки — жанр устного народного творчества, передающий жизненный опыт.",
    },
    {
      id: "dombyra",
      category: "culture",
      title: "Домбыра — даланың үні",
      titleRu: "Домбыра — голос степи",
      intro: "Екі ішекке сыйған ұлы тарих.",
      introRu: "Великая история в двух струнах.",
      body: [
        "Домбыра — қазақ халқының екі ішекті, шертіп ойналатын музыкалық аспабы. Оның үнімен қуаныш та, сағыныш та, батырлық та баяндалады.",
        "Күй — аспапта орындалатын музыкалық шығарма. Домбыра күйін орындау өнері ЮНЕСКО-ның адамзаттың материалдық емес мәдени мұрасының репрезентативтік тізіміне 2014 жылы енгізілді.",
      ],
      bodyRu: [
        "Домбыра — казахский двухструнный щипковый музыкальный инструмент. Её звучание передаёт радость, тоску и героические истории.",
        "Кюй — инструментальная музыкальная пьеса. Традиционное искусство исполнения домбрового кюя включено в Репрезентативный список нематериального культурного наследия человечества ЮНЕСКО в 2014 году.",
      ],
      fact: "Домбырада екі ішек бар. Ал оның жеткізер әңгімесі — шексіз.",
      factRu:
        "У домбыры две струны. А историй, которые она рассказывает, — бесконечно много.",
      image: "/images/dombyra.webp",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "ornament",
      category: "culture",
      title: "Ою-өрнек тілі",
      titleRu: "Язык орнамента",
      intro: "Әр өрнек — бір әңгіме.",
      introRu: "Каждый узор рассказывает историю.",
      body: [
        "Қазақтың ою-өрнегі киізден жасалған бұйымдарда, киімде, зергерлік әшекейлерде және ағаш бұйымдарда кездеседі. Өрнек затты безендіріп қана қоймай, ұлттық дүниетанымды да көрсетеді.",
        "«Қошқармүйіз» — қошқардың иірілген мүйізіне ұқсайтын кең тараған ою. Осы сайттың алтын түсті өрнектері берілген ұлттық орнамент үлгісінен жасалды. Оның симметриясы мен ырғақты қайталануына назар аудар.",
      ],
      bodyRu: [
        "Казахский орнамент встречается на войлочных изделиях, одежде, украшениях и предметах из дерева. Он не только украшает вещь, но и отражает национальное мировосприятие.",
        "«Қошқармүйіз» — распространённый узор, напоминающий закрученные рога барана. Золотые узоры этого сайта созданы из предоставленного образца национального орнамента. Обрати внимание на симметрию и ритм повторения.",
      ],
      fact: "«Ою» — узор. «Мүйіз» — рог. «Қошқар» — баран.",
      factRu: "«Ою» — узор. «Мүйіз» — рог. «Қошқар» — баран.",
    },
    {
      id: "aitys",
      category: "culture",
      title: "Айтыс — сөз сайысы",
      titleRu: "Айтыс — состязание слова",
      intro: "Ой ұшқырлығы мен суырыпсалма өнер.",
      introRu: "Остроумие и искусство импровизации.",
      body: [
        "Айтыс — ақындардың суырыпсалып өлеңмен жарысу өнері. Ақындар бір-біріне кезекпен жауап беріп, ойды ұтымды жеткізуге тырысады.",
        "Айтыста тіл байлығы, тапқырлық және орындау шеберлігі қатар көрінеді. Домбыра сүйемелдеуі сөздің ырғағын күшейтеді.",
      ],
      bodyRu: [
        "Айтыс — искусство поэтического состязания импровизаторов. Акыны по очереди отвечают друг другу в стихах, стараясь выразить мысль метко и ярко.",
        "В айтысе соединяются богатство языка, находчивость и исполнительское мастерство. Звучание домбыры подчёркивает ритм слова.",
      ],
      fact: "Айтыс өнері — қазақ пен қырғыз халықтарына ортақ мұра.",
      factRu:
        "Искусство айтыса — общее наследие казахского и кыргызского народов.",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "turkestan",
      category: "history",
      title: "Түркістан — рухани мекен",
      titleRu: "Туркестан — духовный центр",
      intro: "Ұлы Жібек жолының ізімен.",
      introRu: "По следам Великого шёлкового пути.",
      body: [
        "Түркістан — Қазақстанның тарихи қалаларының бірі. Қаладағы Қожа Ахмет Ясауи кесенесі — ортағасырлық сәулет өнерінің көрнекті ескерткіші.",
        "Кесене Әмір Темірдің бұйрығымен XIV ғасырдың соңында салына бастады. Ғимараттың зәулім порталы мен көгілдір күмбезі Түркістанның танымал бейнесіне айналды.",
      ],
      bodyRu: [
        "Туркестан — один из исторических городов Казахстана. Мавзолей Ходжи Ахмеда Ясави — выдающийся памятник средневековой архитектуры.",
        "Строительство мавзолея началось в конце XIV века по приказу Амира Тимура. Монументальный портал и голубой купол стали узнаваемым образом Туркестана.",
      ],
      fact: "Қожа Ахмет Ясауи кесенесі 2003 жылы ЮНЕСКО-ның Бүкіләлемдік мұра тізіміне енгізілді.",
      factRu:
        "Мавзолей Ходжи Ахмеда Ясави включён в Список всемирного наследия ЮНЕСКО в 2003 году.",
      image: "/images/turkestan.webp",
      source: "https://whc.unesco.org/en/list/1103/",
    },
    {
      id: "abai",
      category: "history",
      title: "Абай Құнанбайұлы",
      titleRu: "Абай Кунанбайулы",
      intro: "1845–1904 · Ақын, ойшыл, композитор",
      introRu: "1845–1904 · Поэт, мыслитель, композитор",
      body: [
        "Абай Құнанбайұлы — қазақтың ұлы ақыны, ойшылы және композиторы. Оның шығармалары білімге, еңбекке және адамгершілікке үндейді.",
        "Абайдың «Қара сөздері» — адам мінезі, білім, ар-ұят және қоғам туралы толғаныстар. Ақынның өлеңдері мен әндері қазақ мәдениетінде ерекше орын алады.",
      ],
      bodyRu: [
        "Абай Кунанбайулы — великий казахский поэт, мыслитель и композитор. Его произведения призывают к знаниям, труду и человечности.",
        "«Слова назидания» Абая — размышления о характере человека, знаниях, совести и обществе. Стихи и песни поэта занимают особое место в казахской культуре.",
      ],
      fact: "«Ғылым таппай мақтанба» — Абайдың білім мен адамгершілік туралы әйгілі өлеңі.",
      factRu:
        "«Ғылым таппай мақтанба» — известное стихотворение Абая о знаниях и нравственности.",
      image: "/images/abai.jpg",
      source: "https://oq.gov.kz/en/abai/abai-bio",
    },
    {
      id: "shokan",
      category: "history",
      title: "Шоқан Уәлиханов",
      titleRu: "Шокан Уалиханов",
      intro: "1835–1865 · Ғалым, саяхатшы, этнограф",
      introRu: "1835–1865 · Учёный, путешественник, этнограф",
      body: [
        "Шоқан Уәлиханов — қазақ ғалымы, тарихшы, этнограф және саяхатшы. Ол Орталық Азия халықтарының тарихы мен мәдениетін зерттеді.",
        "Шоқан халық ауыз әдебиетін жинап, саяхат жазбалары мен ғылыми еңбектер қалдырды. Оның зерттеулері қазақ ғылымының дамуына маңызды үлес қосты.",
      ],
      bodyRu: [
        "Шокан Уалиханов — казахский учёный, историк, этнограф и путешественник. Он изучал историю и культуру народов Центральной Азии.",
        "Шокан собирал произведения устного народного творчества, оставил путевые заметки и научные труды. Его исследования внесли важный вклад в развитие казахской науки.",
      ],
      fact: "Шоқан зерттеуші ғана емес, сурет салуға да қабілетті болған.",
      factRu:
        "Шокан был не только исследователем, но и талантливым рисовальщиком.",
      image: "/images/shokan.jpg",
      source: "https://iie.kz/?p=26188",
    },
    {
      id: "yurt",
      category: "traditions",
      title: "Киіз үй — көшпенділер әлемі",
      titleRu: "Юрта — мир кочевников",
      intro: "Шаңырақтан басталған жылулық.",
      introRu: "Тепло, которое начинается с шанырака.",
      body: [
        "Киіз үй — көшпелі өмірге бейімделген дәстүрлі баспана. Оның ағаш қаңқасы кереге, уық және шаңырақтан құралады, ал сырты киізбен жабылады.",
        "Кереге — үйдің жиналмалы қабырғасы. Уық — кереге мен шаңырақты жалғайтын иілген ағаш. Шаңырақ — төбедегі дөңгелек бөлік, отбасылық бірлік пен үйдің символы.",
      ],
      bodyRu: [
        "Юрта — традиционное жилище, приспособленное к кочевому образу жизни. Её деревянный каркас состоит из кереге, уыков и шанырака, а снаружи покрывается войлоком.",
        "Кереге — складная решётчатая стена. Уық — изогнутая жердь, соединяющая стену с шаныраком. Шаңырақ — круглая вершина юрты, символ дома и семейного единства.",
      ],
      fact: "«Шаңырағың биік болсын!» — отбасына айтылатын ізгі тілек.",
      factRu: "«Шаңырағың биік болсын!» — доброе пожелание благополучия семье.",
      image: "/images/steppe-yurt.webp",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "nauryz",
      category: "traditions",
      title: "Наурыз — жаңару мерекесі",
      titleRu: "Наурыз — праздник обновления",
      intro: "Жаңа күн. Жаңа үміт. Жаңа бастау.",
      introRu: "Новый день. Новая надежда. Новое начало.",
      body: [
        "Наурыз — көктемгі жаңару мен берекенің мерекесі. Адамдар бір-біріне ізгі тілек айтып, қонаққа барып, дастарқан жаяды.",
        "Мерекенің дәстүрлі тағамы — наурыз көже. Оған жеті түрлі дәм қосу дәстүрі кең тараған, ал құрамы өңір мен отбасыға қарай өзгеруі мүмкін.",
      ],
      bodyRu: [
        "Наурыз — праздник весеннего обновления и благополучия. Люди желают друг другу добра, ходят в гости и собираются за общим столом.",
        "Традиционное блюдо праздника — наурыз коже. Распространена традиция добавлять семь компонентов; состав может различаться по регионам и семьям.",
      ],
      fact: "«Ұлыс оң болсын, ақ мол болсын!» — Наурызда айтылатын дәстүрлі тілек.",
      factRu:
        "«Ұлыс оң болсын, ақ мол болсын!» — традиционное пожелание благополучия и изобилия на Наурыз.",
      image: "/images/steppe-yurt.webp",
      source: "https://ich.unesco.org/en/state/kazakhstan-KZ",
    },
    {
      id: "hospitality",
      category: "traditions",
      title: "Қонақжайлық — асыл қасиет",
      titleRu: "Гостеприимство — ценная традиция",
      intro: "Қонақ келсе, құт келеді.",
      introRu: "Гость приходит — счастье приносит.",
      body: [
        "Қазақ мәдениетінде қонаққа құрмет көрсетуге ерекше мән беріледі. Үйге келген адамды жылы қарсы алып, төрге отырғызу — сыйластық белгісі.",
        "Дастарқан басында үлкенге құрмет көрсетіп, асқа бата беру дәстүрі бар. Бата — жақсылық, амандық және береке тілейтін ізгі сөз.",
      ],
      bodyRu: [
        "В казахской культуре уважению к гостю придают особое значение. Тепло встретить человека и предложить почётное место — знак почтения.",
        "За столом проявляют уважение к старшим и произносят бата — благословение с пожеланиями добра, здоровья и благополучия.",
      ],
      fact: "«Төр» — үйдегі қонаққа ұсынылатын құрметті орын.",
      factRu: "«Төр» — почётное место в доме, которое предлагают гостю.",
    },
  ],
  ms = [
    {
      word: "Атамекен",
      transcription: "a-ta-me-ken",
      translation: "Родная земля",
      definition: "Ата-бабадан ұрпаққа қалған, кіндік қаның тамған туған жер.",
      example: "Қазақстан — менің атамекенім.",
      exampleRu: "Казахстан — моя родная земля.",
    },
    {
      word: "Шаңырақ",
      transcription: "sha-ny-raq",
      translation: "Шанырак, семейный очаг",
      definition:
        "Киіз үйдің төбесіндегі дөңгелек бөлік. Отбасы мен бірліктің нышаны.",
      example: "Шаңырағың биік болсын!",
      exampleRu: "Пусть процветает твой дом!",
    },
    {
      word: "Мейірім",
      transcription: "mei-i-rim",
      translation: "Доброта, милосердие",
      definition: "Адамның өзгеге деген жылы ықыласы, ізгі ниеті.",
      example: "Әженің жүрегі мейірімге толы.",
      exampleRu: "Сердце бабушки наполнено добротой.",
    },
    {
      word: "Өнер",
      transcription: "ö-ner",
      translation: "Искусство",
      definition: "Адамның шығармашылық шеберлігі мен әсемдікті бейнелеуі.",
      example: "Домбыра тарту — үлкен өнер.",
      exampleRu: "Игра на домбыре — большое искусство.",
    },
    {
      word: "Бірлік",
      transcription: "bir-lik",
      translation: "Единство",
      definition: "Адамдардың ынтымақтасып, ортақ мақсатқа ұмтылуы.",
      example: "Бірлік бар жерде тірлік бар.",
      exampleRu: "Где единство, там и благополучие.",
    },
  ],
  co = [
    {
      word: "Отан — оттан да ыстық.",
      transcription: "Халық мақалы",
      translation: "Родина жарче огня.",
      definition: "Туған жердің адам үшін бәрінен қымбат екенін білдіреді.",
      example: "Отанға деген сүйіспеншілік — жүректе.",
      exampleRu: "Любовь к родине живёт в сердце.",
    },
    {
      word: "Өнер алды — қызыл тіл.",
      transcription: "Халық мақалы",
      translation: "Первое из искусств — красноречие.",
      definition: "Сөз өнерінің, шешендіктің ерекше құндылығын көрсетеді.",
      example: "Жақсы сөз — жарым ырыс.",
      exampleRu: "Доброе слово — половина счастья.",
    },
    {
      word: "Бірлік болмай, тірлік болмас.",
      transcription: "Халық мақалы",
      translation: "Без единства нет благополучия.",
      definition: "Ынтымақ пен бірлескен еңбектің маңызын түсіндіреді.",
      example: "Бірге жасаған жұмыс берекелі болады.",
      exampleRu: "Совместный труд приносит плоды.",
    },
  ],
  ds = [
    {
      q: "Домбырада неше ішек бар?",
      ru: "Сколько струн у домбыры?",
      options: ["Бір / Одна", "Екі / Две", "Үш / Три", "Төрт / Четыре"],
      answer: 1,
      fact: "Домбыра — екі ішекті ұлттық музыкалық аспап.",
      factRu: "Домбыра — национальный двухструнный музыкальный инструмент.",
    },
    {
      q: "«Рақмет» сөзінің мағынасы қандай?",
      ru: "Что означает слово «Рақмет»?",
      options: ["Привет", "До свидания", "Спасибо", "Добро пожаловать"],
      answer: 2,
      fact: "«Рақмет» — алғыс білдіретін сөз.",
      factRu: "«Рақмет» — слово благодарности: «спасибо».",
    },
    {
      q: "Киіз үйдің төбесіндегі дөңгелек бөлік қалай аталады?",
      ru: "Как называется круглая вершина юрты?",
      options: ["Кереге", "Уық", "Есік", "Шаңырақ"],
      answer: 3,
      fact: "Шаңырақ — киіз үйдің төбесі әрі отбасы бірлігінің нышаны.",
      factRu: "Шанырак — вершина юрты и символ семейного единства.",
    },
    {
      q: "Абай Құнанбайұлы кім?",
      ru: "Кто такой Абай Кунанбайулы?",
      options: [
        "Ақын, ойшыл / Поэт, мыслитель",
        "Сәулетші / Архитектор",
        "Спортшы / Спортсмен",
        "Дәрігер / Врач",
      ],
      answer: 0,
      fact: "Абай — ұлы ақын, ойшыл және композитор.",
      factRu: "Абай — великий поэт, мыслитель и композитор.",
    },
    {
      q: "«Өнер» сөзінің орысша аудармасы қандай?",
      ru: "Как переводится «Өнер» на русский язык?",
      options: ["Наука", "Искусство", "Природа", "Дружба"],
      answer: 1,
      fact: "Өнер — искусство. Домбыра тарту, сурет салу — өнер түрлері.",
      factRu: "Өнер — искусство. Игра на домбыре и рисование — виды искусства.",
    },
    {
      q: "Көктемгі жаңару мерекесі қалай аталады?",
      ru: "Как называется праздник весеннего обновления?",
      options: ["Наурыз", "Айтыс", "Бата", "Күй"],
      answer: 0,
      fact: "Наурыз — көктемгі жаңару мен берекенің мерекесі.",
      factRu: "Наурыз — праздник весеннего обновления и благополучия.",
    },
  ],
  ba = [
    { id: 0, kz: "Отан", ru: "Родина" },
    { id: 1, kz: "Білім", ru: "Знание" },
    { id: 2, kz: "Достық", ru: "Дружба" },
    { id: 3, kz: "Мұра", ru: "Наследие" },
  ],
  uy = [
    {
      answer: "ҚАЗАҚ",
      clue: "Еліміздің байырғы халқы",
      clueRu: "Коренной народ Казахстана",
      letters: ["А", "Қ", "З", "Қ", "А"],
    },
    {
      answer: "ДОМБЫРА",
      clue: "Қазақтың екі ішекті аспабы",
      clueRu: "Казахский двухструнный инструмент",
      letters: ["Б", "А", "Д", "Р", "М", "О", "Ы"],
    },
    {
      answer: "МҰРА",
      clue: "Ұрпақтан ұрпаққа қалған қазына",
      clueRu: "То, что передаётся от поколения к поколению",
      letters: ["А", "Р", "М", "Ұ"],
    },
  ];
function Nf({ lang: a, title: i, description: o, points: c, onRestart: u }) {
  return f.jsxs("div", {
    className: "game-result",
    "data-source-loc": "src/components/Games.tsx:9:9",
    children: [
      f.jsxs("div", {
        className: "result-trophy",
        "data-source-loc": "src/components/Games.tsx:9:38",
        children: [
          f.jsx(Pu, {
            size: 44,
            strokeWidth: 1.4,
            "data-source-loc": "src/components/Games.tsx:9:69",
          }),
          f.jsx(_o, {
            className: "trophy-spark",
            size: 22,
            "data-source-loc": "src/components/Games.tsx:9:106",
          }),
        ],
      }),
      f.jsx("p", {
        className: "eyebrow",
        "data-source-loc": "src/components/Games.tsx:9:158",
        children: za(a, "ЖАРАЙСЫҢ!", "ОТЛИЧНАЯ РАБОТА!"),
      }),
      f.jsx("h2", {
        "data-source-loc": "src/components/Games.tsx:9:235",
        children: i,
      }),
      f.jsx("p", {
        "data-source-loc": "src/components/Games.tsx:9:251",
        children: o,
      }),
      f.jsxs("div", {
        className: "result-points",
        "data-source-loc": "src/components/Games.tsx:9:271",
        children: [
          c,
          " XP ",
          f.jsx("span", {
            "data-source-loc": "src/components/Games.tsx:9:314",
            children: za(a, "жеке рекорд сақталды", "личный рекорд сохранён"),
          }),
        ],
      }),
      f.jsxs("button", {
        className: "primary-button",
        onClick: u,
        "data-source-loc": "src/components/Games.tsx:9:400",
        children: [
          f.jsx(Ni, {
            size: 17,
            "data-source-loc": "src/components/Games.tsx:9:455",
          }),
          za(a, "Қайта ойнау", "Сыграть ещё"),
        ],
      }),
    ],
  });
}
function TT({ lang: a, onComplete: i }) {
  const [o, c] = k.useState(0),
    [u, p] = k.useState(null),
    [d, y] = k.useState(0),
    [g, m] = k.useState(!1),
    x = (M, w) => za(a, M, w),
    A = ds[o],
    S = (M) => {
      u === null && (p(M), M === A.answer && y((w) => w + 1));
    },
    O = () => {
      o === ds.length - 1
        ? (m(!0), i("quiz", d * 10))
        : (c((M) => M + 1), p(null));
    };
  return g
    ? f.jsx(Nf, {
        lang: a,
        title: `${d} / ${ds.length} ${x("дұрыс жауап", "правильных ответов")}`,
        description: x(
          "Әр сұрақ — жаңа білім. Білмегеніңді тақырыптардан оқып, тағы байқап көр!",
          "Каждый вопрос — новое знание. Изучи темы и попробуй улучшить результат!",
        ),
        points: d * 10,
        onRestart: () => {
          (c(0), p(null), y(0), m(!1));
        },
        "data-source-loc": "src/components/Games.tsx:21:23",
      })
    : f.jsxs("div", {
        className: "game-content",
        "data-source-loc": "src/components/Games.tsx:22:9",
        children: [
          f.jsx("div", {
            className: "modal-symbol",
            "data-source-loc": "src/components/Games.tsx:22:39",
            children: f.jsx(P3, {
              size: 28,
              "data-source-loc": "src/components/Games.tsx:22:69",
            }),
          }),
          f.jsx("p", {
            className: "eyebrow",
            "data-source-loc": "src/components/Games.tsx:22:98",
            children: x("БІЛІМ САЙЫСЫ", "КВИЗ О КАЗАХСТАНЕ"),
          }),
          f.jsxs("div", {
            className: "game-progress-label",
            "data-source-loc": "src/components/Games.tsx:22:165",
            children: [
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:22:202",
                children: [x("Сұрақ", "Вопрос"), " ", o + 1, " / ", ds.length],
              }),
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:22:274",
                children: [d, " ", x("дұрыс", "верно")],
              }),
            ],
          }),
          f.jsx("div", {
            className: "progress-track",
            "data-source-loc": "src/components/Games.tsx:22:322",
            children: f.jsx("span", {
              style: { width: `${((o + 1) / ds.length) * 100}%` },
              "data-source-loc": "src/components/Games.tsx:22:354",
            }),
          }),
          f.jsx("h2", {
            className: "question-title",
            "data-source-loc": "src/components/Games.tsx:22:433",
            children: x(A.q, A.ru),
          }),
          f.jsx("div", {
            className: "quiz-options",
            "data-source-loc": "src/components/Games.tsx:22:497",
            children: A.options.map((M, w) =>
              f.jsxs(
                "button",
                {
                  disabled: u !== null,
                  className: `quiz-option ${u !== null && w === A.answer ? "is-correct" : ""} ${u === w && w !== A.answer ? "is-wrong" : ""}`,
                  onClick: () => S(w),
                  "data-source-loc": "src/components/Games.tsx:22:564",
                  children: [
                    f.jsx("span", {
                      className: "option-letter",
                      "data-source-loc": "src/components/Games.tsx:22:787",
                      children: "ABCD"[w],
                    }),
                    M,
                    u !== null &&
                      w === A.answer &&
                      f.jsx(Pn, {
                        size: 18,
                        "data-source-loc": "src/components/Games.tsx:22:890",
                      }),
                    u === w &&
                      w !== A.answer &&
                      f.jsx(Ci, {
                        size: 18,
                        "data-source-loc": "src/components/Games.tsx:22:952",
                      }),
                  ],
                },
                M,
              ),
            ),
          }),
          u !== null &&
            f.jsxs("div", {
              className: `answer-feedback ${u === A.answer ? "" : "feedback-learn"}`,
              role: "status",
              "data-source-loc": "src/components/Games.tsx:22:1004",
              children: [
                f.jsx($0, {
                  size: 19,
                  "data-source-loc": "src/components/Games.tsx:22:1107",
                }),
                f.jsx("span", {
                  "data-source-loc": "src/components/Games.tsx:22:1129",
                  children: x(A.fact, A.factRu),
                }),
              ],
            }),
          f.jsxs("button", {
            className: "primary-button game-next",
            disabled: u === null,
            onClick: O,
            "data-source-loc": "src/components/Games.tsx:22:1184",
            children: [
              o === ds.length - 1
                ? x("Нәтижені көру", "Посмотреть результат")
                : x("Келесі сұрақ", "Следующий вопрос"),
              f.jsx(Ta, {
                size: 18,
                "data-source-loc": "src/components/Games.tsx:22:1392",
              }),
            ],
          }),
        ],
      });
}
function jT({ lang: a, onComplete: i }) {
  const [o, c] = k.useState(null),
    [u, p] = k.useState(null),
    [d, y] = k.useState([]),
    [g, m] = k.useState(!1),
    [x, A] = k.useState(0),
    S = (M, w) => za(a, M, w),
    O = (M, w) => {
      m(!1);
      const q = M === "left" ? w : o,
        Y = M === "right" ? w : u;
      if ((M === "left" ? c(w) : p(w), q !== null && Y !== null)) {
        if ((A((X) => X + 1), q === Y)) {
          const X = [...d, q];
          (y(X), X.length === ba.length && i("match", 30));
        } else m(!0);
        (c(null), p(null));
      }
    };
  return d.length === ba.length
    ? f.jsx(Nf, {
        lang: a,
        title: S("Барлық жұп табылды!", "Все пары найдены!"),
        description: `${S("Сен төрт қазақша сөзді қайталадың.", "Ты повторил четыре казахских слова.")} ${S("Әрекет саны:", "Количество попыток:")} ${x}.`,
        points: 30,
        onRestart: () => {
          (y([]), A(0), m(!1));
        },
        "data-source-loc": "src/components/Games.tsx:44:54",
      })
    : f.jsxs("div", {
        className: "game-content",
        "data-source-loc": "src/components/Games.tsx:45:9",
        children: [
          f.jsx("div", {
            className: "modal-symbol sage",
            "data-source-loc": "src/components/Games.tsx:45:39",
            children: f.jsx(_o, {
              size: 28,
              "data-source-loc": "src/components/Games.tsx:45:74",
            }),
          }),
          f.jsx("p", {
            className: "eyebrow",
            "data-source-loc": "src/components/Games.tsx:45:101",
            children: S("СӨЗДЕРДІ СӘЙКЕСТЕНДІР", "НАЙДИ ПАРЫ"),
          }),
          f.jsx("h2", {
            "data-source-loc": "src/components/Games.tsx:45:170",
            children: S("Мағынасын тап", "Соедини по смыслу"),
          }),
          f.jsx("p", {
            className: "modal-description",
            "data-source-loc": "src/components/Games.tsx:45:220",
            children: S(
              "Қазақша сөзді және оның орысша аудармасын таңда.",
              "Выбери казахское слово и его перевод на русский.",
            ),
          }),
          f.jsxs("div", {
            className: "game-progress-label",
            "data-source-loc": "src/components/Games.tsx:45:364",
            children: [
              f.jsx("span", {
                "data-source-loc": "src/components/Games.tsx:45:401",
                children: S("Табылған жұптар", "Найдено пар"),
              }),
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:45:451",
                children: [d.length, " / 4"],
              }),
            ],
          }),
          f.jsx("div", {
            className: "progress-track",
            "data-source-loc": "src/components/Games.tsx:45:490",
            children: f.jsx("span", {
              style: { width: `${d.length * 25}%` },
              "data-source-loc": "src/components/Games.tsx:45:522",
            }),
          }),
          f.jsxs("div", {
            className: "matching-board",
            "data-source-loc": "src/components/Games.tsx:45:580",
            children: [
              f.jsxs("div", {
                "data-source-loc": "src/components/Games.tsx:45:612",
                children: [
                  f.jsx("div", {
                    className: "matching-label",
                    "data-source-loc": "src/components/Games.tsx:45:617",
                    children: "ҚАЗАҚША",
                  }),
                  ba.map((M) =>
                    f.jsxs(
                      "button",
                      {
                        disabled: d.includes(M.id),
                        onClick: () => O("left", M.id),
                        className: `match-tile ${o === M.id ? "selected" : ""} ${d.includes(M.id) ? "matched" : ""}`,
                        "data-source-loc": "src/components/Games.tsx:45:689",
                        children: [
                          M.kz,
                          d.includes(M.id) &&
                            f.jsx(Pn, {
                              size: 17,
                              "data-source-loc":
                                "src/components/Games.tsx:45:936",
                            }),
                        ],
                      },
                      M.id,
                    ),
                  ),
                ],
              }),
              f.jsxs("div", {
                "data-source-loc": "src/components/Games.tsx:45:972",
                children: [
                  f.jsx("div", {
                    className: "matching-label",
                    "data-source-loc": "src/components/Games.tsx:45:977",
                    children: "РУССКИЙ",
                  }),
                  [ba[2], ba[0], ba[3], ba[1]].map((M) =>
                    f.jsxs(
                      "button",
                      {
                        disabled: d.includes(M.id),
                        onClick: () => O("right", M.id),
                        className: `match-tile ${u === M.id ? "selected" : ""} ${d.includes(M.id) ? "matched" : ""}`,
                        "data-source-loc": "src/components/Games.tsx:45:1108",
                        children: [
                          M.ru,
                          d.includes(M.id) &&
                            f.jsx(Pn, {
                              size: 17,
                              "data-source-loc":
                                "src/components/Games.tsx:45:1357",
                            }),
                        ],
                      },
                      M.id,
                    ),
                  ),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: `match-status ${g ? "wrong-text" : ""}`,
            role: "status",
            "data-source-loc": "src/components/Games.tsx:45:1399",
            children: g
              ? S(
                  "Бұл сөздер жұп емес. Тағы байқап көр!",
                  "Эти слова не пара. Попробуй ещё!",
                )
              : d.length > 0
                ? S("Керемет! Жалғастыра бер.", "Отлично! Продолжай.")
                : S("Алғашқы сөзді таңда.", "Выбери первое слово."),
          }),
        ],
      });
}
function ET({ lang: a, onComplete: i }) {
  const [o, c] = k.useState(0),
    [u, p] = k.useState([]),
    [d, y] = k.useState(null),
    [g, m] = k.useState(!1),
    x = (M, w) => za(a, M, w),
    A = uy[o],
    S = () => {
      y(u.map((M) => A.letters[M]).join("") === A.answer ? "correct" : "wrong");
    },
    O = () => {
      o === uy.length - 1
        ? (m(!0), i("word", 40))
        : (c((M) => M + 1), p([]), y(null));
    };
  return g
    ? f.jsx(Nf, {
        lang: a,
        title: x("Сөз шебері!", "Мастер слова!"),
        description: x(
          "Үш сөзді де дұрыс құрастырдың. Қазақша сөздік қорың кеңейіп келеді!",
          "Ты правильно составил все три слова. Твой казахский словарный запас растёт!",
        ),
        points: 40,
        onRestart: () => {
          (c(0), p([]), y(null), m(!1));
        },
        "data-source-loc": "src/components/Games.tsx:57:23",
      })
    : f.jsxs("div", {
        className: "game-content",
        "data-source-loc": "src/components/Games.tsx:58:9",
        children: [
          f.jsx("div", {
            className: "modal-symbol sand",
            "data-source-loc": "src/components/Games.tsx:58:39",
            children: f.jsx("span", {
              className: "letter-symbol",
              "data-source-loc": "src/components/Games.tsx:58:74",
              children: "Ә",
            }),
          }),
          f.jsx("p", {
            className: "eyebrow",
            "data-source-loc": "src/components/Games.tsx:58:120",
            children: x("ӘРІПТЕРДЕН СӨЗ ҚҰРА", "СОБЕРИ СЛОВО"),
          }),
          f.jsxs("div", {
            className: "game-progress-label",
            "data-source-loc": "src/components/Games.tsx:58:189",
            children: [
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:58:226",
                children: [x("Сөз", "Слово"), " ", o + 1, " / 3"],
              }),
              f.jsxs("span", {
                "data-source-loc": "src/components/Games.tsx:58:274",
                children: [A.answer.length, " ", x("әріп", "букв")],
              }),
            ],
          }),
          f.jsx("div", {
            className: "progress-track",
            "data-source-loc": "src/components/Games.tsx:58:335",
            children: f.jsx("span", {
              style: { width: `${((o + 1) / 3) * 100}%` },
              "data-source-loc": "src/components/Games.tsx:58:367",
            }),
          }),
          f.jsx("h2", {
            className: "question-title",
            "data-source-loc": "src/components/Games.tsx:58:427",
            children: x(A.clue, A.clueRu),
          }),
          f.jsx("div", {
            className: "word-slots",
            "data-source-loc": "src/components/Games.tsx:58:494",
            children: Array.from(A.answer).map((M, w) =>
              f.jsx(
                "button",
                {
                  className: `word-slot ${d === "correct" ? "is-correct" : ""}`,
                  "aria-label": `${x("Әріпті өшіру", "Удалить букву")} ${w + 1}`,
                  disabled: u[w] === void 0 || d === "correct",
                  onClick: () => {
                    (p(u.filter((q, Y) => Y !== w)), y(null));
                  },
                  "data-source-loc": "src/components/Games.tsx:58:563",
                  children: u[w] !== void 0 ? A.letters[u[w]] : "",
                },
                w,
              ),
            ),
          }),
          f.jsx("div", {
            className: "letter-bank",
            "data-source-loc": "src/components/Games.tsx:58:932",
            children: A.letters.map((M, w) =>
              f.jsx(
                "button",
                {
                  className: "letter-tile",
                  disabled: u.includes(w) || d === "correct",
                  onClick: () => {
                    (p([...u, w]), y(null));
                  },
                  "data-source-loc": "src/components/Games.tsx:58:996",
                  children: M,
                },
                w,
              ),
            ),
          }),
          f.jsxs("button", {
            className: "text-button reset-letters",
            disabled: !u.length || d === "correct",
            onClick: () => {
              (p([]), y(null));
            },
            "data-source-loc": "src/components/Games.tsx:58:1183",
            children: [
              f.jsx(Ni, {
                size: 14,
                "data-source-loc": "src/components/Games.tsx:58:1334",
              }),
              x("Тазалау", "Очистить"),
            ],
          }),
          d &&
            f.jsxs("div", {
              className: `answer-feedback ${d === "wrong" ? "feedback-learn" : ""}`,
              role: "status",
              "data-source-loc": "src/components/Games.tsx:58:1403",
              children: [
                d === "correct"
                  ? f.jsx(ps, {
                      size: 19,
                      "data-source-loc": "src/components/Games.tsx:58:1524",
                    })
                  : f.jsx($0, {
                      size: 19,
                      "data-source-loc": "src/components/Games.tsx:58:1552",
                    }),
                f.jsx("span", {
                  "data-source-loc": "src/components/Games.tsx:58:1575",
                  children:
                    d === "correct"
                      ? x("Дұрыс! Өте жақсы.", "Верно! Отличная работа.")
                      : x(
                          "Әріптердің орнын өзгертіп көр.",
                          "Попробуй изменить порядок букв.",
                        ),
                }),
              ],
            }),
          d === "correct"
            ? f.jsxs("button", {
                className: "primary-button game-next",
                onClick: O,
                "data-source-loc": "src/components/Games.tsx:58:1768",
                children: [
                  o === 2
                    ? x("Нәтижені көру", "Посмотреть результат")
                    : x("Келесі сөз", "Следующее слово"),
                  f.jsx(Ta, {
                    size: 18,
                    "data-source-loc": "src/components/Games.tsx:58:1923",
                  }),
                ],
              })
            : f.jsxs("button", {
                className: "primary-button game-next",
                disabled: u.length !== A.answer.length,
                onClick: S,
                "data-source-loc": "src/components/Games.tsx:58:1958",
                children: [
                  x("Тексеру", "Проверить"),
                  f.jsx(Pn, {
                    size: 18,
                    "data-source-loc": "src/components/Games.tsx:58:2097",
                  }),
                ],
              }),
        ],
      });
}
const Wu = { completed: [], words: [], games: {} },
  P0 = "qazaq-tili-progress-v1";
function MT() {
  try {
    const a = JSON.parse(localStorage.getItem(P0) || "null");
    return !a ||
      !Array.isArray(a.completed) ||
      !Array.isArray(a.words) ||
      !a.games ||
      typeof a.games != "object"
      ? Wu
      : {
          completed: [
            ...new Set(
              a.completed.filter(
                (i) => typeof i == "string" && Je.some((o) => o.id === i),
              ),
            ),
          ],
          words: [
            ...new Set(
              a.words.filter(
                (i) => typeof i == "string" && ms.some((o) => o.word === i),
              ),
            ),
          ],
          games: Object.fromEntries(
            Object.entries(a.games).filter(
              ([i, o]) =>
                ["quiz", "match", "word"].includes(i) &&
                typeof o == "number" &&
                Number.isFinite(o) &&
                o >= 0 &&
                o <= 60,
            ),
          ),
        };
  } catch {
    return Wu;
  }
}
function ue({ className: a = "", style: i }) {
  return f.jsx("span", {
    className: `ornament-motif ${a}`,
    style: i,
    "aria-hidden": "true",
    "data-source-loc": "src/App.tsx:21:9",
  });
}
const zT = [
  {
    id: "abai",
    kind: "people",
    image: "/images/abai.jpg",
    title: "Абай Құнанбайұлы",
    titleRu: "Абай Кунанбайулы",
    subtitle: "Ақын. Ойшыл. Дәуір үні.",
    subtitleRu: "Поэт. Мыслитель. Голос эпохи.",
  },
  {
    id: "yurt",
    kind: "tradition",
    image: "/images/steppe-yurt.webp",
    title: "Шаңырақтың шуағы",
    titleRu: "Под сводом шанырака",
    subtitle: "Көшпенділердің киелі мекені",
    subtitleRu: "Священный дом кочевников",
  },
  {
    id: "shokan",
    kind: "people",
    image: "/images/shokan.jpg",
    title: "Шоқан Уәлиханов",
    titleRu: "Шокан Уалиханов",
    subtitle: "Ғылымға жол ашқан жұлдыз",
    subtitleRu: "Звезда, осветившая путь науке",
  },
  {
    id: "dombyra",
    kind: "tradition",
    image: "/images/dombyra.webp",
    title: "Қос ішектің құдіреті",
    titleRu: "Сила двух струн",
    subtitle: "Жүрекке жеткен дала әуені",
    subtitleRu: "Мелодия степи, трогающая сердце",
  },
];
function NT() {
  const [a, i] = k.useState("kz"),
    [o, c] = k.useState(!1),
    [u, p] = k.useState("home"),
    [d, y] = k.useState(null),
    [g, m] = k.useState(MT),
    [x, A] = k.useState(""),
    [S, O] = k.useState(0),
    [M, w] = k.useState("word"),
    [q, Y] = k.useState(!1),
    [X, Q] = k.useState("all"),
    [Z, nt] = k.useState("all"),
    [ct, F] = k.useState(""),
    [$, st] = k.useState(!1),
    b = (R, H) => za(a, R, H),
    ht =
      g.completed.length * 20 +
      g.words.length * 5 +
      Object.values(g.games).reduce((R, H) => R + (H || 0), 0),
    ot = (M === "word" ? ms : co)[S % (M === "word" ? ms.length : co.length)],
    $t =
      ht >= 250
        ? b("Мұра сақтаушысы", "Хранитель наследия")
        : ht >= 80
          ? b("Зерттеуші", "Исследователь")
          : b("Жас саяхатшы", "Начинающий путешественник");
  (k.useEffect(() => {
    try {
      localStorage.setItem(P0, JSON.stringify(g));
    } catch {}
  }, [g]),
    k.useEffect(() => {
      document.documentElement.lang = a === "kz" ? "kk" : "ru";
    }, [a]),
    k.useEffect(() => {
      if (!x) return;
      const R = window.setTimeout(() => A(""), 4200);
      return () => clearTimeout(R);
    }, [x]),
    k.useEffect(() => {
      const R = new IntersectionObserver(
        (H) => {
          H.forEach((lt) => {
            lt.isIntersecting && p(lt.target.id);
          });
        },
        { rootMargin: "-15% 0px -65% 0px", threshold: 0 },
      );
      return (
        document.querySelectorAll("section[id]").forEach((H) => R.observe(H)),
        () => R.disconnect()
      );
    }, []));
  const Ct = (R) => {
      A(R);
    },
    Mt = (R) => {
      (c(!1),
        p(R),
        document
          .getElementById(R)
          ?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          }));
    },
    _ = (R, H) => {
      m((lt) => ({
        ...lt,
        games: { ...lt.games, [R]: Math.max(lt.games[R] ?? 0, H) },
      }));
    },
    K = () => {
      if (g.words.includes(ot.word)) {
        Ct(
          b("Бұл сөз сенің сөздігіңде бар.", "Это слово уже в твоём словаре."),
        );
        return;
      }
      (m((R) => ({ ...R, words: [...R.words, ot.word] })),
        Ct(
          b(
            "Жаңа сөз сөздігіңе қосылды. +5 XP",
            "Новое слово добавлено в словарь. +5 XP",
          ),
        ));
    },
    P = () => {
      if (!("speechSynthesis" in window)) {
        Ct(
          b(
            "Бұл браузер дыбыстауды қолдамайды. Транскрипцияға назар аудар.",
            "Браузер не поддерживает озвучивание. Используй транскрипцию.",
          ),
        );
        return;
      }
      const R = window.speechSynthesis
        .getVoices()
        .find((lt) => lt.lang.toLowerCase().startsWith("kk"));
      if (!R) {
        Ct(
          b(
            "Қазақша дауыс құрылғыда орнатылмаған. Оқылуы: " + ot.transcription,
            "На устройстве нет казахского голоса. Произношение: " +
              ot.transcription,
          ),
        );
        return;
      }
      window.speechSynthesis.cancel();
      const H = new SpeechSynthesisUtterance(ot.word);
      ((H.lang = "kk-KZ"),
        (H.voice = R),
        (H.rate = 0.8),
        (H.onstart = () => st(!0)),
        (H.onend = () => st(!1)),
        (H.onerror = () => {
          (st(!1),
            Ct(
              b(
                "Дыбыстау қолжетімсіз. Транскрипцияны оқып көр.",
                "Озвучивание недоступно. Используй транскрипцию.",
              ),
            ));
        }),
        window.speechSynthesis.speak(H));
    },
    ft = (R) => {
      g.completed.includes(R.id) ||
        (m((H) => ({ ...H, completed: [...H.completed, R.id] })),
        Ct(
          b(
            "Бір қадам алға! Сабақ аяқталды. +20 XP",
            "Ещё шаг вперёд! Урок завершён. +20 XP",
          ),
        ));
    },
    yt = () => {
      (nt("all"), F(""), y({ type: "all" }));
    },
    j = (R) => {
      const H = M === "word" ? ms.length : co.length;
      (O((lt) => (lt + R + H) % H), Y(!1));
    },
    L = [
      { id: "home", title: b("Басты бет", "Главная") },
      { id: "explore", title: b("Таным әлемі", "Мир познания") },
      { id: "games", title: b("Ойындар", "Игры") },
      { id: "heritage", title: b("Мұра галереясы", "Галерея наследия") },
    ],
    J = (R, H = 19) =>
      R === "language"
        ? f.jsx(bi, { size: H, "data-source-loc": "src/App.tsx:80:74" })
        : R === "culture"
          ? f.jsx(uT, { size: H, "data-source-loc": "src/App.tsx:80:119" })
          : R === "history"
            ? f.jsx(sT, { size: H, "data-source-loc": "src/App.tsx:80:162" })
            : f.jsx(iy, { size: H, "data-source-loc": "src/App.tsx:80:188" }),
    W = (R) =>
      f.jsx("div", {
        className: "lesson-list",
        "data-source-loc": "src/App.tsx:82:47",
        children: R.map((H, lt) =>
          f.jsxs(
            "button",
            {
              className: "lesson-list-item",
              onClick: () => y({ type: "lesson", lesson: H }),
              "data-source-loc": "src/App.tsx:82:101",
              children: [
                f.jsx("span", {
                  className: `lesson-number ${g.completed.includes(H.id) ? "done" : ""}`,
                  "data-source-loc": "src/App.tsx:82:206",
                  children: g.completed.includes(H.id)
                    ? f.jsx(Pn, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:82:338",
                      })
                    : String(lt + 1).padStart(2, "0"),
                }),
                f.jsxs("span", {
                  className: "lesson-list-copy",
                  "data-source-loc": "src/App.tsx:82:397",
                  children: [
                    f.jsx("strong", {
                      "data-source-loc": "src/App.tsx:82:432",
                      children: b(H.title, H.titleRu),
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:82:482",
                      children: b(H.intro, H.introRu),
                    }),
                  ],
                }),
                f.jsx(De, {
                  size: 20,
                  "data-source-loc": "src/App.tsx:82:535",
                }),
              ],
            },
            H.id,
          ),
        ),
      }),
    rt = (R = !1) =>
      f.jsx("div", {
        className: `gallery-grid ${R ? "gallery-full" : ""}`,
        "data-source-loc": "src/App.tsx:84:42",
        children: zT
          .filter((H) => R || X === "all" || H.kind === X)
          .map((H) =>
            f.jsxs(
              "button",
              {
                className: `gallery-card ${H.kind === "people" ? "portrait-card" : ""}`,
                onClick: () => {
                  const lt = Je.find((kt) => kt.id === H.id);
                  lt && y({ type: "lesson", lesson: lt });
                },
                "data-source-loc": "src/App.tsx:84:209",
                children: [
                  f.jsx("img", {
                    src: H.image,
                    alt: b(H.title, H.titleRu),
                    loading: "lazy",
                    "data-source-loc": "src/App.tsx:84:427",
                  }),
                  f.jsx("span", {
                    className: "gallery-image-shade",
                    "data-source-loc": "src/App.tsx:84:499",
                  }),
                  f.jsx("span", {
                    className: "gallery-card-category",
                    "data-source-loc": "src/App.tsx:84:538",
                    children:
                      H.kind === "people"
                        ? b("ҰЛЫ ТҰЛҒАЛАР", "ВЕЛИКИЕ ЛИЧНОСТИ")
                        : b("ҰЛТТЫҚ МҰРА", "НАЦИОНАЛЬНОЕ НАСЛЕДИЕ"),
                  }),
                  f.jsxs("span", {
                    className: "gallery-card-content",
                    "data-source-loc": "src/App.tsx:84:693",
                    children: [
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:84:732",
                        children: b(H.title, H.titleRu),
                      }),
                      f.jsx("span", {
                        "data-source-loc": "src/App.tsx:84:778",
                        children: b(H.subtitle, H.subtitleRu),
                      }),
                    ],
                  }),
                  f.jsx("span", {
                    className: "gallery-arrow",
                    "data-source-loc": "src/App.tsx:84:833",
                    children: f.jsx(De, {
                      size: 19,
                      "data-source-loc": "src/App.tsx:84:865",
                    }),
                  }),
                ],
              },
              H.id,
            ),
          ),
      }),
    mt = () => {
      if (!d) return null;
      if (d.type === "game") {
        const R = { lang: a, onComplete: _ };
        return d.game === "quiz"
          ? f.jsx(TT, { ...R, "data-source-loc": "src/App.tsx:88:112" })
          : d.game === "match"
            ? f.jsx(jT, { ...R, "data-source-loc": "src/App.tsx:88:161" })
            : f.jsx(ET, { ...R, "data-source-loc": "src/App.tsx:88:187" });
      }
      if (d.type === "category") {
        const R = Si.find((lt) => lt.id === d.id),
          H = Je.filter((lt) => lt.category === d.id);
        return f.jsxs("div", {
          className: "catalog-panel",
          "data-source-loc": "src/App.tsx:92:13",
          children: [
            f.jsx("div", {
              className: "modal-symbol",
              "data-source-loc": "src/App.tsx:92:44",
              children: J(d.id, 28),
            }),
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:92:107",
              children: b("ТАНЫМ ӘЛЕМІ", "МИР ПОЗНАНИЯ"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:92:168",
              children: b(R.title, R.titleRu),
            }),
            f.jsx("p", {
              className: "modal-description",
              "data-source-loc": "src/App.tsx:92:214",
              children: b(R.description, R.descriptionRu),
            }),
            f.jsxs("div", {
              className: "catalog-summary",
              "data-source-loc": "src/App.tsx:92:300",
              children: [
                f.jsxs("span", {
                  "data-source-loc": "src/App.tsx:92:333",
                  children: [
                    f.jsx(bi, {
                      size: 15,
                      "data-source-loc": "src/App.tsx:92:339",
                    }),
                    H.length,
                    " ",
                    b("шағын сабақ", "мини-урока"),
                  ],
                }),
                f.jsxs("span", {
                  "data-source-loc": "src/App.tsx:92:413",
                  children: [
                    f.jsx(oo, {
                      size: 15,
                      "data-source-loc": "src/App.tsx:92:419",
                    }),
                    b("Әр сабақ 2–3 минут", "По 2–3 минуты"),
                  ],
                }),
              ],
            }),
            W(H),
            f.jsxs("div", {
              className: "catalog-hint",
              "data-source-loc": "src/App.tsx:92:517",
              children: [
                f.jsx(cy, {
                  size: 18,
                  "data-source-loc": "src/App.tsx:92:547",
                }),
                b(
                  "Әр аяқталған сабақ үшін 20 XP жина. Өз қарқыныңмен үйрен.",
                  "Получай 20 XP за каждый завершённый урок. Учись в своём темпе.",
                ),
              ],
            }),
          ],
        });
      }
      if (d.type === "lesson") {
        const R = d.lesson,
          H = g.completed.includes(R.id),
          lt = Je.find(
            (kt) =>
              kt.category === R.category &&
              kt.id !== R.id &&
              !g.completed.includes(kt.id),
          );
        return f.jsxs("article", {
          className: "lesson-panel",
          "data-source-loc": "src/App.tsx:98:13",
          children: [
            f.jsxs("button", {
              className: "text-button lesson-back",
              onClick: () => y({ type: "category", id: R.category }),
              "data-source-loc": "src/App.tsx:98:47",
              children: [
                f.jsx(U3, {
                  size: 16,
                  "data-source-loc": "src/App.tsx:98:158",
                }),
                b(
                  Si.find((kt) => kt.id === R.category).title,
                  Si.find((kt) => kt.id === R.category).titleRu,
                ),
              ],
            }),
            R.image &&
              f.jsx("img", {
                className: `lesson-cover ${["abai", "shokan"].includes(R.id) ? "lesson-portrait" : ""}`,
                src: R.image,
                alt: b(R.title, R.titleRu),
                "data-source-loc": "src/App.tsx:98:321",
              }),
            f.jsxs("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:98:479",
              children: [
                b("МҰРАҢДЫ ТАНЫ", "ПОЗНАЙ СВОЁ НАСЛЕДИЕ"),
                " ",
                f.jsxs("span", {
                  "data-source-loc": "src/App.tsx:98:546",
                  children: ["· 3 ", b("минут", "минуты")],
                }),
              ],
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:98:589",
              children: b(R.title, R.titleRu),
            }),
            f.jsx("p", {
              className: "lesson-intro",
              "data-source-loc": "src/App.tsx:98:631",
              children: b(R.intro, R.introRu),
            }),
            R.id === "letters" &&
              f.jsx("div", {
                className: "kazakh-letters",
                "data-source-loc": "src/App.tsx:98:724",
                children: Array.from("ӘҒҚҢӨҰҮҺІ").map((kt) =>
                  f.jsx(
                    "span",
                    { "data-source-loc": "src/App.tsx:98:795", children: kt },
                    kt,
                  ),
                ),
              }),
            R.id === "ornament" &&
              f.jsxs("div", {
                className: "ornament-lesson",
                "data-source-loc": "src/App.tsx:98:867",
                children: [
                  f.jsx(ue, { "data-source-loc": "src/App.tsx:98:900" }),
                  f.jsx(ue, { "data-source-loc": "src/App.tsx:98:908" }),
                  f.jsx(ue, { "data-source-loc": "src/App.tsx:98:916" }),
                ],
              }),
            f.jsx("div", {
              className: "lesson-body",
              "data-source-loc": "src/App.tsx:98:931",
              children: (a === "kz" ? R.body : R.bodyRu).map((kt) =>
                f.jsx(
                  "p",
                  { "data-source-loc": "src/App.tsx:98:1024", children: kt },
                  kt,
                ),
              ),
            }),
            f.jsxs("div", {
              className: "lesson-fact",
              "data-source-loc": "src/App.tsx:98:1066",
              children: [
                f.jsx(CT, { "data-source-loc": "src/App.tsx:98:1095" }),
                f.jsx("p", {
                  "data-source-loc": "src/App.tsx:98:1111",
                  children: b(R.fact, R.factRu),
                }),
              ],
            }),
            R.source &&
              f.jsxs("a", {
                className: "source-link",
                href: R.source,
                target: "_blank",
                rel: "noreferrer",
                "data-source-loc": "src/App.tsx:98:1173",
                children: [
                  b("Дереккөзді қарау", "Посмотреть источник"),
                  f.jsx(sy, {
                    size: 12,
                    "data-source-loc": "src/App.tsx:98:1300",
                  }),
                ],
              }),
            f.jsxs("div", {
              className: "lesson-actions",
              "data-source-loc": "src/App.tsx:98:1330",
              children: [
                f.jsx("button", {
                  className: `primary-button ${H ? "completed-button" : ""}`,
                  onClick: () =>
                    H
                      ? y(
                          lt
                            ? { type: "lesson", lesson: lt }
                            : { type: "category", id: R.category },
                        )
                      : ft(R),
                  "data-source-loc": "src/App.tsx:98:1362",
                  children: H
                    ? f.jsxs(f.Fragment, {
                        children: [
                          lt
                            ? b("Келесі сабақ", "Следующий урок")
                            : b("Бөлімге оралу", "Вернуться к темам"),
                          f.jsx(Ta, {
                            size: 17,
                            "data-source-loc": "src/App.tsx:98:1681",
                          }),
                        ],
                      })
                    : f.jsxs(f.Fragment, {
                        children: [
                          f.jsx(ps, {
                            size: 18,
                            "data-source-loc": "src/App.tsx:98:1712",
                          }),
                          b("Оқыдым, түсіндім", "Прочитано и понятно"),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:98:1783",
                            children: "+20 XP",
                          }),
                        ],
                      }),
                }),
                H &&
                  f.jsxs("span", {
                    className: "completed-label",
                    "data-source-loc": "src/App.tsx:98:1826",
                    children: [
                      f.jsx(Pn, {
                        size: 15,
                        "data-source-loc": "src/App.tsx:98:1860",
                      }),
                      b("Сабақ аяқталды", "Урок завершён"),
                    ],
                  }),
              ],
            }),
          ],
        });
      }
      if (d.type === "all") {
        const R = Je.filter(
          (H) =>
            (Z === "all" || H.category === Z) &&
            `${H.title} ${H.titleRu} ${H.intro}`
              .toLocaleLowerCase()
              .includes(ct.toLocaleLowerCase()),
        );
        return f.jsxs("div", {
          className: "catalog-panel",
          "data-source-loc": "src/App.tsx:102:13",
          children: [
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:102:44",
              children: b("СЕНІҢ БІЛІМ КЕҢІСТІГІҢ", "ТВОЁ ПРОСТРАНСТВО ЗНАНИЙ"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:102:128",
              children: b("Таным кітапханасы", "Библиотека знаний"),
            }),
            f.jsx("p", {
              className: "modal-description",
              "data-source-loc": "src/App.tsx:102:182",
              children: b(
                "12 шағын сабақ. Төрт бағыт. Шексіз шабыт.",
                "12 мини-уроков. Четыре направления. Бесконечное вдохновение.",
              ),
            }),
            f.jsxs("label", {
              className: "search-field",
              "data-source-loc": "src/App.tsx:102:331",
              children: [
                f.jsx(oy, {
                  size: 18,
                  "data-source-loc": "src/App.tsx:102:363",
                }),
                f.jsx("input", {
                  value: ct,
                  onChange: (H) => F(H.target.value),
                  placeholder: b("Тақырып іздеу...", "Найти тему..."),
                  "aria-label": b("Тақырып іздеу", "Поиск темы"),
                  "data-source-loc": "src/App.tsx:102:382",
                }),
                ct &&
                  f.jsx("button", {
                    className: "icon-button",
                    onClick: () => F(""),
                    "aria-label": b("Іздеуді тазалау", "Очистить поиск"),
                    "data-source-loc": "src/App.tsx:102:554",
                    children: f.jsx(Ci, {
                      size: 16,
                      "data-source-loc": "src/App.tsx:102:667",
                    }),
                  }),
              ],
            }),
            f.jsxs("div", {
              className: "catalog-filters",
              "data-source-loc": "src/App.tsx:102:699",
              children: [
                f.jsx("button", {
                  className: Z === "all" ? "active" : "",
                  onClick: () => nt("all"),
                  "data-source-loc": "src/App.tsx:102:732",
                  children: b("Барлығы", "Все"),
                }),
                Si.map((H) =>
                  f.jsx(
                    "button",
                    {
                      className: Z === H.id ? "active" : "",
                      onClick: () => nt(H.id),
                      "data-source-loc": "src/App.tsx:102:883",
                      children: b(H.title, H.titleRu),
                    },
                    H.id,
                  ),
                ),
              ],
            }),
            R.length
              ? W(R)
              : f.jsxs("div", {
                  className: "empty-state",
                  "data-source-loc": "src/App.tsx:102:1072",
                  children: [
                    f.jsx(oy, {
                      size: 32,
                      "data-source-loc": "src/App.tsx:102:1101",
                    }),
                    f.jsx("h3", {
                      "data-source-loc": "src/App.tsx:102:1120",
                      children: b("Тақырып табылмады", "Тема не найдена"),
                    }),
                    f.jsx("p", {
                      "data-source-loc": "src/App.tsx:102:1172",
                      children: b(
                        "Басқа сөзбен іздеп көр немесе сүзгіні өзгерт.",
                        "Попробуй другое слово или измени фильтр.",
                      ),
                    }),
                    f.jsxs("button", {
                      className: "text-button",
                      onClick: () => {
                        (F(""), nt("all"));
                      },
                      "data-source-loc": "src/App.tsx:102:1275",
                      children: [
                        b("Барлық сабақты көрсету", "Показать все уроки"),
                        f.jsx(Ta, {
                          size: 15,
                          "data-source-loc": "src/App.tsx:102:1416",
                        }),
                      ],
                    }),
                  ],
                }),
          ],
        });
      }
      if (d.type === "gallery")
        return f.jsxs("div", {
          className: "catalog-panel",
          "data-source-loc": "src/App.tsx:104:40",
          children: [
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:104:71",
              children: b("ӨТКЕННЕН — БОЛАШАҚҚА", "ИЗ ПРОШЛОГО — В БУДУЩЕЕ"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:104:152",
              children: b("Мұра галереясы", "Галерея наследия"),
            }),
            f.jsx("p", {
              className: "modal-description",
              "data-source-loc": "src/App.tsx:104:202",
              children: b(
                "Әр бейненің артында — бір тарих. Таңдап, танысып көр.",
                "За каждым образом — история. Выбери и узнай больше.",
              ),
            }),
            rt(!0),
            f.jsx("p", {
              className: "image-credit",
              "data-source-loc": "src/App.tsx:104:375",
              children: b(
                "Тұлғалар портреттері: Отандастар қоры, e-history.kz. Мәдени көріністер — иллюстрациялық AI-бейнелер.",
                "Портреты: Фонд Отандастар, e-history.kz. Культурные сцены — иллюстративные AI-изображения.",
              ),
            }),
          ],
        });
      if (d.type === "progress") {
        const R = [
          {
            icon: f.jsx(ry, { "data-source-loc": "src/App.tsx:106:30" }),
            label: b("Алғашқы қадам", "Первый шаг"),
            detail: b("1 сабақты аяқта", "Заверши 1 урок"),
            done: g.completed.length > 0,
          },
          {
            icon: f.jsx(bi, { "data-source-loc": "src/App.tsx:106:177" }),
            label: b("Тіл жанашыры", "Друг языка"),
            detail: b("3 тіл сабағын оқы", "Пройди 3 урока языка"),
            done: Je.filter((H) => H.category === "language").every((H) =>
              g.completed.includes(H.id),
            ),
          },
          {
            icon: f.jsx(Pu, { "data-source-loc": "src/App.tsx:106:396" }),
            label: b("Ойын шебері", "Мастер игры"),
            detail: b("3 ойынды аяқта", "Заверши 3 игры"),
            done: Object.keys(g.games).length === 3,
          },
          {
            icon: f.jsx(ay, { "data-source-loc": "src/App.tsx:106:552" }),
            label: b("Сөз жинаушы", "Коллекционер слов"),
            detail: b("5 сөзді сақта", "Сохрани 5 слов"),
            done: g.words.length === 5,
          },
        ];
        return f.jsxs("div", {
          className: "progress-panel",
          "data-source-loc": "src/App.tsx:107:13",
          children: [
            f.jsx("div", {
              className: "modal-symbol",
              "data-source-loc": "src/App.tsx:107:45",
              children: f.jsx(ju, {
                size: 30,
                "data-source-loc": "src/App.tsx:107:75",
              }),
            }),
            f.jsx("p", {
              className: "eyebrow",
              "data-source-loc": "src/App.tsx:107:99",
              children: b("ӘР ҚАДАМЫҢ МАҢЫЗДЫ", "КАЖДЫЙ ШАГ ВАЖЕН"),
            }),
            f.jsx("h2", {
              "data-source-loc": "src/App.tsx:107:171",
              children: b("Менің жетістіктерім", "Мои достижения"),
            }),
            f.jsxs("div", {
              className: "profile-level",
              "data-source-loc": "src/App.tsx:107:224",
              children: [
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:255",
                  children: [
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:260",
                      children: b("Сенің дәрежең", "Твой уровень"),
                    }),
                    f.jsx("h3", {
                      "data-source-loc": "src/App.tsx:107:309",
                      children: $t,
                    }),
                  ],
                }),
                f.jsxs("strong", {
                  "data-source-loc": "src/App.tsx:107:331",
                  children: [
                    ht,
                    f.jsx("small", {
                      "data-source-loc": "src/App.tsx:107:343",
                      children: "XP",
                    }),
                  ],
                }),
              ],
            }),
            f.jsxs("div", {
              className: "progress-stats",
              "data-source-loc": "src/App.tsx:107:375",
              children: [
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:407",
                  children: [
                    f.jsxs("strong", {
                      "data-source-loc": "src/App.tsx:107:412",
                      children: [
                        g.completed.length,
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:107:447",
                          children: "/12",
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:474",
                      children: b("Оқылған сабақ", "Уроков пройдено"),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:532",
                  children: [
                    f.jsxs("strong", {
                      "data-source-loc": "src/App.tsx:107:537",
                      children: [
                        Object.keys(g.games).length,
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:107:581",
                          children: "/3",
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:607",
                      children: b("Аяқталған ойын", "Игр завершено"),
                    }),
                  ],
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:107:664",
                  children: [
                    f.jsxs("strong", {
                      "data-source-loc": "src/App.tsx:107:669",
                      children: [
                        g.words.length,
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:107:700",
                          children: "/5",
                        }),
                      ],
                    }),
                    f.jsx("span", {
                      "data-source-loc": "src/App.tsx:107:726",
                      children: b("Жаңа сөз", "Новых слов"),
                    }),
                  ],
                }),
              ],
            }),
            f.jsx("h3", {
              className: "panel-subheading",
              "data-source-loc": "src/App.tsx:107:780",
              children: b("Сенің белгілерің", "Твои значки"),
            }),
            f.jsx("div", {
              className: "badge-grid",
              "data-source-loc": "src/App.tsx:107:856",
              children: R.map((H) =>
                f.jsxs(
                  "div",
                  {
                    className: `achievement-badge ${H.done ? "earned" : ""}`,
                    "data-source-loc": "src/App.tsx:107:901",
                    children: [
                      f.jsxs("span", {
                        "data-source-loc": "src/App.tsx:107:978",
                        children: [
                          H.icon,
                          H.done &&
                            f.jsx(Pn, {
                              className: "badge-check",
                              size: 12,
                              "data-source-loc": "src/App.tsx:107:1003",
                            }),
                        ],
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:107:1053",
                        children: H.label,
                      }),
                      f.jsx("small", {
                        "data-source-loc": "src/App.tsx:107:1079",
                        children: H.detail,
                      }),
                    ],
                  },
                  H.label,
                ),
              ),
            }),
            g.words.length > 0 &&
              f.jsxs("div", {
                className: "saved-words",
                "data-source-loc": "src/App.tsx:107:1148",
                children: [
                  f.jsx("h3", {
                    className: "panel-subheading",
                    "data-source-loc": "src/App.tsx:107:1177",
                    children: b("Менің сөздігім", "Мой словарь"),
                  }),
                  g.words.map((H) =>
                    f.jsxs(
                      "span",
                      {
                        "data-source-loc": "src/App.tsx:107:1279",
                        children: [
                          H,
                          f.jsx("small", {
                            "data-source-loc": "src/App.tsx:107:1302",
                            children: ms.find((lt) => lt.word === H)
                              ?.translation,
                          }),
                        ],
                      },
                      H,
                    ),
                  ),
                ],
              }),
            f.jsxs("button", {
              className: "primary-button full-width",
              onClick: () =>
                y({
                  type: "lesson",
                  lesson: Je.find((H) => !g.completed.includes(H.id)) || Je[0],
                }),
              "data-source-loc": "src/App.tsx:107:1380",
              children: [
                b("Саяхатты жалғастыру", "Продолжить путешествие"),
                f.jsx(Ta, {
                  size: 18,
                  "data-source-loc": "src/App.tsx:107:1599",
                }),
              ],
            }),
            f.jsxs("p", {
              className: "storage-note",
              "data-source-loc": "src/App.tsx:107:1631",
              children: [
                f.jsx(cy, {
                  size: 14,
                  "data-source-loc": "src/App.tsx:107:1659",
                }),
                b(
                  "Жетістіктер осы браузерде сақталады. Тіркелу қажет емес.",
                  "Прогресс хранится в этом браузере. Регистрация не нужна.",
                ),
              ],
            }),
            f.jsx("button", {
              className: "reset-progress",
              onClick: () => y({ type: "reset" }),
              "data-source-loc": "src/App.tsx:107:1810",
              children: b("Жетістіктерді қалпына келтіру", "Сбросить прогресс"),
            }),
          ],
        });
      }
      return d.type === "reset"
        ? f.jsxs("div", {
            className: "catalog-panel",
            "data-source-loc": "src/App.tsx:109:38",
            children: [
              f.jsx("div", {
                className: "modal-symbol sand",
                "data-source-loc": "src/App.tsx:109:69",
                children: f.jsx(Ni, {
                  size: 28,
                  "data-source-loc": "src/App.tsx:109:104",
                }),
              }),
              f.jsx("h2", {
                "data-source-loc": "src/App.tsx:109:132",
                children: b(
                  "Бәрін қайта бастаймыз ба?",
                  "Начать с чистого листа?",
                ),
              }),
              f.jsx("p", {
                className: "modal-description",
                "data-source-loc": "src/App.tsx:109:200",
                children: b(
                  "Оқылған сабақтар, сақталған сөздер мен ойын нәтижелері өшіріледі. Бұл әрекетті кері қайтару мүмкін емес.",
                  "Пройденные уроки, сохранённые слова и результаты игр будут удалены. Это действие нельзя отменить.",
                ),
              }),
              f.jsxs("div", {
                className: "confirm-actions",
                "data-source-loc": "src/App.tsx:109:449",
                children: [
                  f.jsx("button", {
                    className: "secondary-button",
                    onClick: () => y({ type: "progress" }),
                    "data-source-loc": "src/App.tsx:109:482",
                    children: b("Бас тарту", "Отмена"),
                  }),
                  f.jsx("button", {
                    className: "primary-button",
                    onClick: () => {
                      (m(Wu),
                        y({ type: "progress" }),
                        Ct(
                          b(
                            "Жаңа саяхатқа дайынсың!",
                            "Всё готово к новому путешествию!",
                          ),
                        ));
                    },
                    "data-source-loc": "src/App.tsx:109:600",
                    children: b("Қайта бастау", "Сбросить"),
                  }),
                ],
              }),
            ],
          })
        : f.jsxs("div", {
            className: "about-panel",
            "data-source-loc": "src/App.tsx:110:11",
            children: [
              f.jsx(ue, { "data-source-loc": "src/App.tsx:110:40" }),
              f.jsx("p", {
                className: "eyebrow",
                "data-source-loc": "src/App.tsx:110:48",
                children: "QAZAQ TILI",
              }),
              f.jsx("h2", {
                "data-source-loc": "src/App.tsx:110:85",
                children: b(
                  `Тамыры терең.
Танымы шексіз.`,
                  `Глубокие корни.
Безграничное познание.`,
                ),
              }),
              f.jsx("p", {
                className: "modal-description",
                "data-source-loc": "src/App.tsx:110:173",
                children: b(
                  "Тілді таны. Елді таны.",
                  "Познавай язык. Познавай страну.",
                ),
              }),
              f.jsx("p", {
                "data-source-loc": "src/App.tsx:110:274",
                children: b(
                  "QAZAQ TILI — қазақ тілі мен ұлттық мұраны жаңаша танытатын интерактивті білім кеңістігі. Біз тіл, өнер, тарих пен дәстүрді бір сапарға біріктірдік.",
                  "QAZAQ TILI — интерактивное образовательное пространство, которое по-новому знакомит с казахским языком и национальным наследием. Мы объединили язык, искусство, историю и традиции в одном путешествии.",
                ),
              }),
              f.jsxs("div", {
                className: "about-steps",
                "data-source-loc": "src/App.tsx:110:638",
                children: [
                  f.jsxs("span", {
                    "data-source-loc": "src/App.tsx:110:667",
                    children: [
                      f.jsx(bi, {
                        size: 23,
                        "data-source-loc": "src/App.tsx:110:673",
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:110:694",
                        children: b("Таны", "Познавай"),
                      }),
                      b("Шағын сабақтарды оқы", "Читай мини-уроки"),
                    ],
                  }),
                  f.jsxs("span", {
                    "data-source-loc": "src/App.tsx:110:788",
                    children: [
                      f.jsx(ly, {
                        size: 23,
                        "data-source-loc": "src/App.tsx:110:794",
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:110:814",
                        children: b("Үйрен", "Изучай"),
                      }),
                      b("Сөздер мен мағыналарды аш", "Открывай слова и смыслы"),
                    ],
                  }),
                  f.jsxs("span", {
                    "data-source-loc": "src/App.tsx:110:919",
                    children: [
                      f.jsx(Pu, {
                        size: 23,
                        "data-source-loc": "src/App.tsx:110:925",
                      }),
                      f.jsx("strong", {
                        "data-source-loc": "src/App.tsx:110:944",
                        children: b("Ойна", "Играй"),
                      }),
                      b("Біліміңді ойынмен бекіт", "Закрепляй знания в игре"),
                    ],
                  }),
                ],
              }),
              f.jsx("p", {
                className: "about-note",
                "data-source-loc": "src/App.tsx:110:1051",
                children: b(
                  "Материалдар бастапқы танысуға арналған. Тарихи және мәдени деректердің сілтемелері сабақтарда берілген. Декордың негізі — ұсынылған қазақ ою-өрнегі. Мәдени көріністер AI көмегімен жасалған иллюстрациялар, тарихи тұлғалардың портреттері ашық дереккөздерден алынған.",
                  "Материалы предназначены для первого знакомства. Ссылки на исторические и культурные источники приведены в уроках. Декор основан на предоставленном казахском орнаменте. Культурные сцены — AI-иллюстрации, портреты исторических личностей взяты из открытых источников.",
                ),
              }),
              f.jsxs("button", {
                className: "primary-button",
                onClick: () => {
                  (y(null), Mt("explore"));
                },
                "data-source-loc": "src/App.tsx:110:1620",
                children: [
                  b("Саяхатты бастау", "Начать путешествие"),
                  f.jsx(Ta, {
                    size: 18,
                    "data-source-loc": "src/App.tsx:110:1750",
                  }),
                ],
              }),
            ],
          });
    };
  return f.jsxs(ES, {
    reducedMotion: "user",
    "data-source-loc": "src/App.tsx:114:4",
    children: [
      f.jsx("a", {
        className: "skip-link",
        href: "#explore",
        "data-source-loc": "src/App.tsx:114:39",
        children: b("Мазмұнға өту", "Перейти к содержимому"),
      }),
      f.jsxs("header", {
        className: "site-header",
        "data-source-loc": "src/App.tsx:115:6",
        children: [
          f.jsxs("div", {
            className: "header-inner container",
            "data-source-loc": "src/App.tsx:115:38",
            children: [
              f.jsxs("a", {
                className: "brand",
                href: "#home",
                onClick: (R) => {
                  (R.preventDefault(), Mt("home"));
                },
                "aria-label": "QAZAQ TILI — басты бет",
                "data-source-loc": "src/App.tsx:115:78",
                children: [
                  f.jsx("span", {
                    className: "brand-emblem",
                    "data-source-loc": "src/App.tsx:115:200",
                    children: f.jsx(ue, {
                      "data-source-loc": "src/App.tsx:115:231",
                    }),
                  }),
                  f.jsxs("span", {
                    className: "brand-name",
                    "data-source-loc": "src/App.tsx:115:246",
                    children: [
                      "QAZAQ ",
                      f.jsx("b", {
                        "data-source-loc": "src/App.tsx:115:281",
                        children: "TILI",
                      }),
                      f.jsx("small", {
                        "data-source-loc": "src/App.tsx:115:292",
                        children: b(
                          "ТІЛДІ ТАНЫ. ЕЛДІ ТАНЫ.",
                          "ПОЗНАВАЙ ЯЗЫК И СТРАНУ.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("nav", {
                className: "desktop-nav",
                "aria-label": b("Негізгі мәзір", "Главное меню"),
                "data-source-loc": "src/App.tsx:115:374",
                children: L.map((R) =>
                  f.jsx(
                    "a",
                    {
                      href: `#${R.id}`,
                      onClick: (H) => {
                        (H.preventDefault(), Mt(R.id));
                      },
                      className: u === R.id ? "active" : "",
                      "data-source-loc": "src/App.tsx:115:473",
                      children: R.title,
                    },
                    R.id,
                  ),
                ),
              }),
              f.jsxs("div", {
                className: "header-actions",
                "data-source-loc": "src/App.tsx:115:638",
                children: [
                  f.jsxs("button", {
                    className: "language-button",
                    "aria-label": b(
                      "Переключить на русский",
                      "Қазақ тіліне ауысу",
                    ),
                    onClick: () => i((R) => (R === "kz" ? "ru" : "kz")),
                    "data-source-loc": "src/App.tsx:115:670",
                    children: [
                      a === "kz" ? "ҚАЗ" : "РУС",
                      f.jsx(X3, {
                        size: 13,
                        "data-source-loc": "src/App.tsx:115:855",
                      }),
                    ],
                  }),
                  f.jsxs("button", {
                    className: "progress-button",
                    onClick: () => y({ type: "progress" }),
                    "data-source-loc": "src/App.tsx:115:888",
                    children: [
                      f.jsx(ju, {
                        size: 17,
                        "data-source-loc": "src/App.tsx:115:970",
                      }),
                      f.jsx("span", {
                        "data-source-loc": "src/App.tsx:115:988",
                        children: b("Менің жетістіктерім", "Мои достижения"),
                      }),
                      ht > 0 &&
                        f.jsx("i", {
                          "data-source-loc": "src/App.tsx:115:1056",
                          children: ht,
                        }),
                    ],
                  }),
                  f.jsx("button", {
                    className: "mobile-menu-button icon-button",
                    "aria-expanded": o,
                    "aria-label": b("Мәзірді ашу", "Открыть меню"),
                    onClick: () => c(!o),
                    "data-source-loc": "src/App.tsx:115:1077",
                    children: o
                      ? f.jsx(Ci, {
                          size: 24,
                          "data-source-loc": "src/App.tsx:115:1258",
                        })
                      : f.jsx(cT, {
                          size: 24,
                          "data-source-loc": "src/App.tsx:115:1275",
                        }),
                  }),
                ],
              }),
            ],
          }),
          f.jsx(gu, {
            "data-source-loc": "src/App.tsx:115:1314",
            children:
              o &&
              f.jsxs(xs.nav, {
                className: "mobile-nav",
                initial: { opacity: 0, height: 0 },
                animate: { opacity: 1, height: "auto" },
                exit: { opacity: 0, height: 0 },
                "data-source-loc": "src/App.tsx:115:1346",
                children: [
                  L.map((R) =>
                    f.jsxs(
                      "a",
                      {
                        href: `#${R.id}`,
                        onClick: (H) => {
                          (H.preventDefault(), Mt(R.id));
                        },
                        "data-source-loc": "src/App.tsx:115:1513",
                        children: [
                          R.title,
                          f.jsx(De, {
                            size: 17,
                            "data-source-loc": "src/App.tsx:115:1616",
                          }),
                        ],
                      },
                      R.id,
                    ),
                  ),
                  f.jsxs("button", {
                    onClick: () => {
                      (c(!1), y({ type: "progress" }));
                    },
                    "data-source-loc": "src/App.tsx:115:1647",
                    children: [
                      f.jsx(ju, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:115:1727",
                      }),
                      b("Менің жетістіктерім", "Мои достижения"),
                    ],
                  }),
                ],
              }),
          }),
        ],
      }),
      f.jsxs("main", {
        "data-source-loc": "src/App.tsx:117:6",
        children: [
          f.jsxs("section", {
            className: "hero",
            id: "home",
            "data-source-loc": "src/App.tsx:118:8",
            children: [
              f.jsx("div", {
                className: "hero-ambient",
                "data-source-loc": "src/App.tsx:118:44",
              }),
              f.jsxs("div", {
                className: "hero-inner container",
                "data-source-loc": "src/App.tsx:118:75",
                children: [
                  f.jsxs(xs.div, {
                    className: "hero-copy",
                    initial: { opacity: 0, y: 18 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.65, ease: "easeOut" },
                    "data-source-loc": "src/App.tsx:118:113",
                    children: [
                      f.jsxs("div", {
                        className: "hero-kicker",
                        "data-source-loc": "src/App.tsx:118:258",
                        children: [
                          f.jsx("span", {
                            className: "tiny-spark",
                            "data-source-loc": "src/App.tsx:118:287",
                            children: "✧",
                          }),
                          b(
                            "ҰЛТТЫҚ МҰРА. ЖАҢА КӨЗҚАРАС.",
                            "НАЦИОНАЛЬНОЕ НАСЛЕДИЕ. НОВЫЙ ВЗГЛЯД.",
                          ),
                        ],
                      }),
                      f.jsx("h1", {
                        "data-source-loc": "src/App.tsx:118:404",
                        children:
                          a === "kz"
                            ? f.jsxs(f.Fragment, {
                                children: [
                                  "Тіл – халық",
                                  f.jsx("br", {
                                    "data-source-loc": "src/App.tsx:118:438",
                                  }),
                                  f.jsx("em", {
                                    "data-source-loc": "src/App.tsx:118:443",
                                    children: "қазынасы",
                                  }),
                                  f.jsx("span", {
                                    className: "heading-dot",
                                    "data-source-loc": "src/App.tsx:118:460",
                                    children: ".",
                                  }),
                                ],
                              })
                            : f.jsxs(f.Fragment, {
                                children: [
                                  "Язык — душа",
                                  f.jsx("br", {
                                    "data-source-loc": "src/App.tsx:118:517",
                                  }),
                                  f.jsx("em", {
                                    "data-source-loc": "src/App.tsx:118:522",
                                    children: "народа",
                                  }),
                                  f.jsx("span", {
                                    className: "heading-dot",
                                    "data-source-loc": "src/App.tsx:118:537",
                                    children: ".",
                                  }),
                                ],
                              }),
                      }),
                      f.jsx("h2", {
                        "data-source-loc": "src/App.tsx:118:584",
                        children: b(
                          "Тілді таны. Елді таны.",
                          "Познавай язык. Познавай страну.",
                        ),
                      }),
                      f.jsx("p", {
                        className: "hero-description",
                        "data-source-loc": "src/App.tsx:118:657",
                        children: b(
                          "Қазақ тілінің сұлулығын, ұлы даланың тарихын және ұлттық мұрамызды бірге ашайық. Әр қадам — жаңа таным, әр сөз — жаңа әлем.",
                          "Открой красоту казахского языка, историю великой степи и национальное наследие. Каждый шаг — новое открытие. Каждое слово — новый мир.",
                        ),
                      }),
                      f.jsxs("div", {
                        className: "hero-buttons",
                        "data-source-loc": "src/App.tsx:118:961",
                        children: [
                          f.jsxs("button", {
                            className: "primary-button",
                            onClick: () => Mt("explore"),
                            "data-source-loc": "src/App.tsx:118:991",
                            children: [
                              b("Саяхатты бастау", "Начать путешествие"),
                              f.jsx(De, {
                                size: 19,
                                "data-source-loc": "src/App.tsx:118:1102",
                              }),
                            ],
                          }),
                          f.jsxs("button", {
                            className: "hero-about",
                            onClick: () => y({ type: "about" }),
                            "data-source-loc": "src/App.tsx:118:1136",
                            children: [
                              f.jsx("span", {
                                className: "play-circle",
                                "data-source-loc": "src/App.tsx:118:1210",
                                children: f.jsx(dT, {
                                  size: 12,
                                  fill: "currentColor",
                                  "data-source-loc": "src/App.tsx:118:1240",
                                }),
                              }),
                              b("Жоба туралы", "О проекте"),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "hero-assurances",
                        "data-source-loc": "src/App.tsx:118:1330",
                        children: [
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:1363",
                            children: [
                              f.jsx(ps, {
                                size: 14,
                                "data-source-loc": "src/App.tsx:118:1369",
                              }),
                              b("Тегін әрі қолжетімді", "Бесплатно и доступно"),
                            ],
                          }),
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:1452",
                            children: [
                              f.jsx(ps, {
                                size: 14,
                                "data-source-loc": "src/App.tsx:118:1458",
                              }),
                              b("Өз қарқыныңмен үйрен", "Учись в своём темпе"),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "hero-lower",
                        "data-source-loc": "src/App.tsx:118:1546",
                        children: [
                          f.jsx("span", {
                            className: "mini-line",
                            "data-source-loc": "src/App.tsx:118:1574",
                          }),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:118:1603",
                            children: b(
                              "Тамырымыз тереңде. Болашағымыз білімде.",
                              "Наши корни — в истории. Будущее — в знаниях.",
                            ),
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsxs(xs.div, {
                    className: "hero-art",
                    initial: { opacity: 0, y: 15 },
                    animate: { opacity: 1, y: 0 },
                    transition: { duration: 0.9, delay: 0.1, ease: "easeOut" },
                    "data-source-loc": "src/App.tsx:118:1729",
                    children: [
                      f.jsx("div", {
                        className: "hero-arch-outline",
                        "data-source-loc": "src/App.tsx:118:1883",
                      }),
                      f.jsx("div", {
                        className: "hero-arch-outline second",
                        "data-source-loc": "src/App.tsx:118:1919",
                      }),
                      f.jsx("div", {
                        className: "hero-ornament-strip",
                        "aria-hidden": "true",
                        "data-source-loc": "src/App.tsx:118:1962",
                      }),
                      f.jsxs("div", {
                        className: "hero-photo",
                        "data-source-loc": "src/App.tsx:118:2019",
                        children: [
                          f.jsx("img", {
                            src: "/images/steppe-yurt.webp",
                            alt: b(
                              "Асқар таулар аясындағы қазақтың оюлы ақ киіз үйі",
                              "Казахская белая юрта с орнаментом на фоне гор",
                            ),
                            fetchPriority: "high",
                            "data-source-loc": "src/App.tsx:118:2047",
                          }),
                          f.jsx("div", {
                            className: "photo-vignette",
                            "data-source-loc": "src/App.tsx:118:2214",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "hero-seal",
                        "data-source-loc": "src/App.tsx:118:2253",
                        children: [
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:118:2280",
                            children: "ҰЛЫ ДАЛА",
                          }),
                          f.jsx(ue, {
                            "data-source-loc": "src/App.tsx:118:2301",
                          }),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:118:2309",
                            children: "ҰЛАҒАТЫ",
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "image-caption",
                        "data-source-loc": "src/App.tsx:118:2335",
                        children: [
                          f.jsx("span", {
                            className: "caption-line",
                            "data-source-loc": "src/App.tsx:118:2366",
                          }),
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:2398",
                            children: [
                              "48° N · 68° E ",
                              f.jsx("b", {
                                "data-source-loc": "src/App.tsx:118:2418",
                                children: "QAZAQSTAN",
                              }),
                            ],
                          }),
                        ],
                      }),
                      f.jsxs("div", {
                        className: "floating-note",
                        "data-source-loc": "src/App.tsx:118:2447",
                        children: [
                          f.jsx("span", {
                            className: "floating-icon",
                            "data-source-loc": "src/App.tsx:118:2478",
                            children: f.jsx(ry, {
                              size: 24,
                              strokeWidth: 1.4,
                              "data-source-loc": "src/App.tsx:118:2510",
                            }),
                          }),
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:118:2554",
                            children: [
                              f.jsx("strong", {
                                "data-source-loc": "src/App.tsx:118:2560",
                                children: b(
                                  "Мұраны таны. Өзіңді тап.",
                                  "Познай наследие. Найди себя.",
                                ),
                              }),
                              f.jsx("small", {
                                "data-source-loc": "src/App.tsx:118:2640",
                                children: b(
                                  "Бабалар аманаты — болашаққа жол",
                                  "Наследие предков — путь в будущее",
                                ),
                              }),
                            ],
                          }),
                          f.jsx("span", {
                            className: "note-star",
                            "data-source-loc": "src/App.tsx:118:2737",
                            children: "✧",
                          }),
                        ],
                      }),
                      f.jsx("span", {
                        className: "art-spark spark-one",
                        "data-source-loc": "src/App.tsx:118:2779",
                        children: "✦",
                      }),
                      f.jsx("span", {
                        className: "art-spark spark-two",
                        "data-source-loc": "src/App.tsx:118:2825",
                        children: "✧",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsxs("button", {
                className: "scroll-cue",
                onClick: () => Mt("explore"),
                "aria-label": b("Төменге өту", "Прокрутить вниз"),
                "data-source-loc": "src/App.tsx:118:2890",
                children: [
                  f.jsx("span", {
                    "data-source-loc": "src/App.tsx:118:3002",
                    children: b("ТАНЫМҒА ҚАДАМ", "ШАГ К ПОЗНАНИЮ"),
                  }),
                  f.jsx(V3, {
                    size: 14,
                    "data-source-loc": "src/App.tsx:118:3053",
                  }),
                ],
              }),
            ],
          }),
          f.jsx("div", {
            className: "value-strip",
            "data-source-loc": "src/App.tsx:120:8",
            children: f.jsxs("div", {
              className: "container value-strip-inner",
              "data-source-loc": "src/App.tsx:120:37",
              children: [
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:120:82",
                  children: [
                    f.jsx("span", {
                      className: "value-icon",
                      "data-source-loc": "src/App.tsx:120:87",
                      children: f.jsx(bi, {
                        size: 21,
                        strokeWidth: 1.5,
                        "data-source-loc": "src/App.tsx:120:116",
                      }),
                    }),
                    f.jsxs("span", {
                      "data-source-loc": "src/App.tsx:120:162",
                      children: [
                        f.jsx("strong", {
                          "data-source-loc": "src/App.tsx:120:168",
                          children: b(
                            "Тілден басталған таным",
                            "Познание начинается с языка",
                          ),
                        }),
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:120:245",
                          children: b(
                            "Сөздің сырына үңіл",
                            "Открой тайну каждого слова",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsx("span", {
                  className: "value-divider",
                  "data-source-loc": "src/App.tsx:120:328",
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:120:361",
                  children: [
                    f.jsx("span", {
                      className: "value-icon",
                      "data-source-loc": "src/App.tsx:120:366",
                      children: f.jsx(ly, {
                        size: 21,
                        strokeWidth: 1.5,
                        "data-source-loc": "src/App.tsx:120:395",
                      }),
                    }),
                    f.jsxs("span", {
                      "data-source-loc": "src/App.tsx:120:440",
                      children: [
                        f.jsx("strong", {
                          "data-source-loc": "src/App.tsx:120:446",
                          children: b(
                            "Ойна. Үйрен. Есте сақта.",
                            "Играй. Изучай. Запоминай.",
                          ),
                        }),
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:120:523",
                          children: b(
                            "Білімді қызыққа айналдыр",
                            "Преврати обучение в открытие",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
                f.jsx("span", {
                  className: "value-divider",
                  "data-source-loc": "src/App.tsx:120:614",
                }),
                f.jsxs("div", {
                  "data-source-loc": "src/App.tsx:120:647",
                  children: [
                    f.jsx("span", {
                      className: "value-icon",
                      "data-source-loc": "src/App.tsx:120:652",
                      children: f.jsx(iy, {
                        size: 22,
                        strokeWidth: 1.5,
                        "data-source-loc": "src/App.tsx:120:681",
                      }),
                    }),
                    f.jsxs("span", {
                      "data-source-loc": "src/App.tsx:120:726",
                      children: [
                        f.jsx("strong", {
                          "data-source-loc": "src/App.tsx:120:732",
                          children: b(
                            "Ұлттық рух, заманауи әлем",
                            "Национальный дух, новый мир",
                          ),
                        }),
                        f.jsx("small", {
                          "data-source-loc": "src/App.tsx:120:812",
                          children: b(
                            "Дәстүрді жаңаша сезін",
                            "Почувствуй традиции по-новому",
                          ),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          f.jsxs("section", {
            className: "explore-section section-space container",
            id: "explore",
            "data-source-loc": "src/App.tsx:122:8",
            children: [
              f.jsxs("div", {
                className: "section-heading",
                "data-source-loc": "src/App.tsx:122:82",
                children: [
                  f.jsxs("div", {
                    "data-source-loc": "src/App.tsx:122:115",
                    children: [
                      f.jsxs("p", {
                        className: "eyebrow",
                        "data-source-loc": "src/App.tsx:122:120",
                        children: [
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:122:143",
                          }),
                          " ",
                          b("ҚАЗАҚ ӘЛЕМІНЕ ҚАДАМ БАС", "ОТКРОЙ КАЗАХСКИЙ МИР"),
                        ],
                      }),
                      f.jsx("h2", {
                        "data-source-loc": "src/App.tsx:122:209",
                        children: b(
                          "Сенің таным саяхатың",
                          "Твоё путешествие к знаниям",
                        ),
                      }),
                      f.jsx("p", {
                        className: "section-description",
                        "data-source-loc": "src/App.tsx:122:275",
                        children: b(
                          "Өзіңе жақын бағытты таңда. Әр бөлім — жаңа бір әлем.",
                          "Выбери близкое направление. Каждый раздел — новый мир.",
                        ),
                      }),
                    ],
                  }),
                  f.jsxs("button", {
                    className: "section-link",
                    onClick: yt,
                    "data-source-loc": "src/App.tsx:122:437",
                    children: [
                      b("Барлық тақырыптар", "Все темы"),
                      f.jsx(De, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:122:528",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "category-grid",
                "data-source-loc": "src/App.tsx:122:568",
                children: Si.map((R, H) =>
                  f.jsxs(
                    "button",
                    {
                      className: `category-card category-${R.id}`,
                      onClick: () => y({ type: "category", id: R.id }),
                      "data-source-loc": "src/App.tsx:122:632",
                      children: [
                        f.jsxs("div", {
                          className: "category-image",
                          "data-source-loc": "src/App.tsx:122:773",
                          children: [
                            f.jsx("img", {
                              src: R.image,
                              alt: b(R.title, R.titleRu),
                              loading: "lazy",
                              "data-source-loc": "src/App.tsx:122:805",
                            }),
                            f.jsx("span", {
                              className: "category-tag",
                              "data-source-loc": "src/App.tsx:122:889",
                              children: b(R.tag, R.tagRu),
                            }),
                            f.jsxs("span", {
                              className: "category-order",
                              "data-source-loc": "src/App.tsx:122:960",
                              children: ["0", H + 1],
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "category-body",
                          "data-source-loc": "src/App.tsx:122:1014",
                          children: [
                            f.jsx("span", {
                              className: "category-card-icon",
                              "data-source-loc": "src/App.tsx:122:1045",
                              children: J(R.id, 20),
                            }),
                            f.jsx("h3", {
                              "data-source-loc": "src/App.tsx:122:1120",
                              children: b(R.title, R.titleRu),
                            }),
                            f.jsx("p", {
                              "data-source-loc": "src/App.tsx:122:1166",
                              children: b(R.description, R.descriptionRu),
                            }),
                            f.jsxs("div", {
                              className: "category-bottom",
                              "data-source-loc": "src/App.tsx:122:1222",
                              children: [
                                f.jsxs("span", {
                                  "data-source-loc": "src/App.tsx:122:1255",
                                  children: [
                                    Je.filter((lt) => lt.category === R.id)
                                      .length,
                                    " ",
                                    b(
                                      "интерактивті сабақ",
                                      "интерактивных урока",
                                    ),
                                  ],
                                }),
                                f.jsx("span", {
                                  className: "circle-arrow",
                                  "data-source-loc": "src/App.tsx:122:1373",
                                  children: f.jsx(De, {
                                    size: 17,
                                    "data-source-loc": "src/App.tsx:122:1404",
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    R.id,
                  ),
                ),
              }),
            ],
          }),
          f.jsxs("section", {
            className: "daily-section container",
            id: "learn",
            "data-source-loc": "src/App.tsx:124:8",
            children: [
              f.jsxs("div", {
                className: "daily-editorial",
                "data-source-loc": "src/App.tsx:124:64",
                children: [
                  f.jsxs("p", {
                    className: "eyebrow",
                    "data-source-loc": "src/App.tsx:124:97",
                    children: [
                      f.jsx("span", {
                        "data-source-loc": "src/App.tsx:124:120",
                      }),
                      b(
                        "КҮН САЙЫН — ЖАҢА ТАНЫМ",
                        "КАЖДЫЙ ДЕНЬ — НОВОЕ ОТКРЫТИЕ",
                      ),
                    ],
                  }),
                  f.jsx("h2", {
                    "data-source-loc": "src/App.tsx:124:192",
                    children: b(
                      `Бір сөз.
Мың мағына.`,
                      `Одно слово.
Тысяча смыслов.`,
                    ),
                  }),
                  f.jsx("p", {
                    "data-source-loc": "src/App.tsx:124:261",
                    children: b(
                      "Тіл — жай ғана сөздер жиынтығы емес. Ол — халықтың жаны, тарихы мен дүниетанымы. Қазақ сөзінің тереңіне бірге үңілейік.",
                      "Язык — больше, чем просто слова. Это душа, история и мировоззрение народа. Давай откроем глубину казахского слова.",
                    ),
                  }),
                  f.jsxs("button", {
                    className: "section-link",
                    onClick: () => y({ type: "category", id: "language" }),
                    "data-source-loc": "src/App.tsx:124:512",
                    children: [
                      b("Тіл әлеміне ену", "Открыть мир языка"),
                      f.jsx(Ta, {
                        size: 17,
                        "data-source-loc": "src/App.tsx:124:650",
                      }),
                    ],
                  }),
                  f.jsxs("div", {
                    className: "daily-ornament",
                    "aria-hidden": "true",
                    "data-source-loc": "src/App.tsx:124:682",
                    children: [
                      f.jsx(ue, { "data-source-loc": "src/App.tsx:124:733" }),
                      f.jsx(ue, { "data-source-loc": "src/App.tsx:124:741" }),
                      f.jsx(ue, { "data-source-loc": "src/App.tsx:124:749" }),
                    ],
                  }),
                ],
              }),
              f.jsxs("div", {
                className: "word-feature",
                "data-source-loc": "src/App.tsx:124:769",
                children: [
                  f.jsxs("div", {
                    className: "word-feature-top",
                    "data-source-loc": "src/App.tsx:124:799",
                    children: [
                      f.jsxs("div", {
                        className: "word-tabs",
                        "data-source-loc": "src/App.tsx:124:833",
                        children: [
                          f.jsx("button", {
                            className: M === "word" ? "active" : "",
                            onClick: () => {
                              (w("word"), O(0), Y(!1));
                            },
                            "data-source-loc": "src/App.tsx:124:860",
                            children: b("Күннің сөзі", "Слово дня"),
                          }),
                          f.jsx("button", {
                            className: M === "proverb" ? "active" : "",
                            onClick: () => {
                              (w("proverb"), O(0), Y(!1));
                            },
                            "data-source-loc": "src/App.tsx:124:1030",
                            children: b("Мақал-мәтел", "Пословица"),
                          }),
                        ],
                      }),
                      f.jsxs("span", {
                        className: "word-count",
                        "data-source-loc": "src/App.tsx:124:1212",
                        children: [
                          String(S + 1).padStart(2, "0"),
                          " ",
                          f.jsxs("span", {
                            "data-source-loc": "src/App.tsx:124:1282",
                            children: ["/ ", M === "word" ? "05" : "03"],
                          }),
                        ],
                      }),
                    ],
                  }),
                  f.jsx("div", {
                    className: `word-card ${q ? "is-flipped" : ""}`,
                    "data-source-loc": "src/App.tsx:124:1344",
                    children: f.jsxs("div", {
                      className: "word-card-inner",
                      "data-source-loc": "src/App.tsx:124:1404",
                      children: [
                        f.jsxs("div", {
                          className: "word-card-front",
                          "aria-hidden": q,
                          "data-source-loc": "src/App.tsx:124:1437",
                          children: [
                            f.jsxs("div", {
                              className: "word-card-top",
                              "data-source-loc": "src/App.tsx:124:1492",
                              children: [
                                f.jsxs("span", {
                                  "data-source-loc": "src/App.tsx:124:1523",
                                  children: [
                                    f.jsx("span", {
                                      className: "gold-dot",
                                      "data-source-loc": "src/App.tsx:124:1529",
                                    }),
                                    M === "word"
                                      ? b("СӨЗ ҚАЗЫНАСЫ", "СОКРОВИЩНИЦА СЛОВ")
                                      : b(
                                          "ХАЛЫҚ ДАНАЛЫҒЫ",
                                          "НАРОДНАЯ МУДРОСТЬ",
                                        ),
                                  ],
                                }),
                                f.jsx("button", {
                                  className: `audio-button ${$ ? "speaking" : ""}`,
                                  onClick: P,
                                  tabIndex: q ? -1 : 0,
                                  "aria-label": b(
                                    "Қазақша тыңдау",
                                    "Послушать по-казахски",
                                  ),
                                  "data-source-loc": "src/App.tsx:124:1668",
                                  children: f.jsx(AT, {
                                    size: 20,
                                    "data-source-loc": "src/App.tsx:124:1835",
                                  }),
                                }),
                              ],
                            }),
                            f.jsxs("button", {
                              className: "word-flip-target",
                              onClick: () => Y(!0),
                              tabIndex: q ? -1 : 0,
                              "aria-label": b(
                                "Карточканы аударып, аудармасын көру",
                                "Перевернуть карточку и посмотреть перевод",
                              ),
                              "data-source-loc": "src/App.tsx:124:1870",
                              children: [
                                f.jsx("h3", {
                                  className:
                                    M === "proverb" ? "proverb-heading" : "",
                                  "data-source-loc": "src/App.tsx:124:2067",
                                  children: ot.word,
                                }),
                                f.jsxs("span", {
                                  className: "transcription",
                                  "data-source-loc": "src/App.tsx:124:2153",
                                  children: ["[ ", ot.transcription, " ]"],
                                }),
                                f.jsx("p", {
                                  "data-source-loc": "src/App.tsx:124:2223",
                                  children:
                                    a === "kz" ? ot.definition : ot.translation,
                                }),
                                f.jsxs("span", {
                                  className: "flip-instruction",
                                  "data-source-loc": "src/App.tsx:124:2296",
                                  children: [
                                    f.jsx(Ni, {
                                      size: 13,
                                      "data-source-loc": "src/App.tsx:124:2331",
                                    }),
                                    b(
                                      "Мағынасын ашу үшін карточканы аудар",
                                      "Переверни карточку, чтобы узнать больше",
                                    ),
                                  ],
                                }),
                              ],
                            }),
                            f.jsx(ue, {
                              className: "word-watermark",
                              "data-source-loc": "src/App.tsx:124:2454",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "word-card-back",
                          "aria-hidden": !q,
                          "data-source-loc": "src/App.tsx:124:2495",
                          children: [
                            f.jsx("span", {
                              className: "eyebrow",
                              "data-source-loc": "src/App.tsx:124:2550",
                              children: b("СӨЗДІҢ МАҒЫНАСЫ", "ЗНАЧЕНИЕ СЛОВА"),
                            }),
                            f.jsx("h3", {
                              "data-source-loc": "src/App.tsx:124:2623",
                              children: ot.translation,
                            }),
                            f.jsxs("p", {
                              className: "word-example",
                              "data-source-loc": "src/App.tsx:124:2657",
                              children: ["«", ot.example, "»"],
                            }),
                            f.jsx("p", {
                              "data-source-loc": "src/App.tsx:124:2712",
                              children: ot.exampleRu,
                            }),
                            f.jsxs("button", {
                              className: "back-flip text-button",
                              tabIndex: q ? 0 : -1,
                              onClick: () => Y(!1),
                              "data-source-loc": "src/App.tsx:124:2742",
                              children: [
                                f.jsx(Ni, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:124:2847",
                                }),
                                b("Қазақша сөзге оралу", "Вернуться к слову"),
                              ],
                            }),
                            f.jsx(ue, {
                              className: "word-watermark",
                              "data-source-loc": "src/App.tsx:124:2925",
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  f.jsxs("div", {
                    className: "word-feature-bottom",
                    "data-source-loc": "src/App.tsx:124:2978",
                    children: [
                      M === "word"
                        ? f.jsxs("button", {
                            className: `save-word text-button ${g.words.includes(ot.word) ? "saved" : ""}`,
                            onClick: K,
                            "data-source-loc": "src/App.tsx:124:3037",
                            children: [
                              g.words.includes(ot.word)
                                ? f.jsx(ps, {
                                    size: 16,
                                    "data-source-loc": "src/App.tsx:124:3206",
                                  })
                                : f.jsx(ay, {
                                    size: 16,
                                    "data-source-loc": "src/App.tsx:124:3234",
                                  }),
                              g.words.includes(ot.word)
                                ? b("Сөздігіме қосылды", "В моём словаре")
                                : b("Сөздігіме қосу", "Добавить в словарь"),
                            ],
                          })
                        : f.jsx("span", {
                            className: "proverb-note",
                            "data-source-loc": "src/App.tsx:124:3399",
                            children: b(
                              "Халық даналығы — асыл мұра",
                              "Народная мудрость — ценное наследие",
                            ),
                          }),
                      f.jsxs("div", {
                        className: "word-pagination",
                        "data-source-loc": "src/App.tsx:124:3510",
                        children: [
                          f.jsx("button", {
                            className: "icon-button",
                            "aria-label": b(
                              "Алдыңғы карточка",
                              "Предыдущая карточка",
                            ),
                            onClick: () => j(-1),
                            "data-source-loc": "src/App.tsx:124:3543",
                            children: f.jsx(Z3, {
                              size: 18,
                              "data-source-loc": "src/App.tsx:124:3662",
                            }),
                          }),
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:124:3695",
                            children: Array.from({
                              length: M === "word" ? ms.length : co.length,
                            }).map((R, H) =>
                              f.jsx(
                                "button",
                                {
                                  "aria-label": `${b("Карточка", "Карточка")} ${H + 1}`,
                                  className: S === H ? "active" : "",
                                  onClick: () => {
                                    (O(H), Y(!1));
                                  },
                                  "data-source-loc": "src/App.tsx:124:3792",
                                },
                                H,
                              ),
                            ),
                          }),
                          f.jsx("button", {
                            className: "icon-button",
                            "aria-label": b(
                              "Келесі карточка",
                              "Следующая карточка",
                            ),
                            onClick: () => j(1),
                            "data-source-loc": "src/App.tsx:124:3970",
                            children: f.jsx(J3, {
                              size: 18,
                              "data-source-loc": "src/App.tsx:124:4086",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          f.jsx("section", {
            className: "games-section section-space",
            id: "games",
            "data-source-loc": "src/App.tsx:126:8",
            children: f.jsxs("div", {
              className: "container",
              "data-source-loc": "src/App.tsx:126:68",
              children: [
                f.jsxs("div", {
                  className: "section-heading",
                  "data-source-loc": "src/App.tsx:126:95",
                  children: [
                    f.jsxs("div", {
                      "data-source-loc": "src/App.tsx:126:128",
                      children: [
                        f.jsxs("p", {
                          className: "eyebrow",
                          "data-source-loc": "src/App.tsx:126:133",
                          children: [
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:156",
                            }),
                            b(
                              "ҚЫЗЫҚТЫ ОЙЫН. ПАЙДАЛЫ БІЛІМ.",
                              "ИНТЕРЕСНЫЕ ИГРЫ. ПОЛЕЗНЫЕ ЗНАНИЯ.",
                            ),
                          ],
                        }),
                        f.jsx("h2", {
                          "data-source-loc": "src/App.tsx:126:239",
                          children: b(
                            "Ойнай отырып, ой-өрісіңді кеңейт",
                            "Играй и расширяй кругозор",
                          ),
                        }),
                        f.jsx("p", {
                          className: "section-description",
                          "data-source-loc": "src/App.tsx:126:316",
                          children: b(
                            "Біліміңді сына, жаңа сөздер үйрен және жетістіктерге жет.",
                            "Проверь знания, выучи новые слова и собери достижения.",
                          ),
                        }),
                      ],
                    }),
                    f.jsxs("span", {
                      className: "small-label",
                      "data-source-loc": "src/App.tsx:126:483",
                      children: [
                        f.jsx(_o, {
                          size: 16,
                          "data-source-loc": "src/App.tsx:126:513",
                        }),
                        b(
                          "Әр ойын — алға бір қадам",
                          "Каждая игра — шаг вперёд",
                        ),
                      ],
                    }),
                  ],
                }),
                f.jsxs("div", {
                  className: "games-grid",
                  "data-source-loc": "src/App.tsx:126:606",
                  children: [
                    f.jsxs("button", {
                      className: "game-card game-quiz",
                      onClick: () => y({ type: "game", game: "quiz" }),
                      "data-source-loc": "src/App.tsx:126:634",
                      children: [
                        f.jsxs("div", {
                          className: "game-card-top",
                          "data-source-loc": "src/App.tsx:126:730",
                          children: [
                            f.jsx("span", {
                              className: "game-type",
                              "data-source-loc": "src/App.tsx:126:761",
                              children: b("ВИКТОРИНА", "ВИКТОРИНА"),
                            }),
                            f.jsx("span", {
                              className: "game-xp",
                              "data-source-loc": "src/App.tsx:126:825",
                              children: "60 XP",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "game-illustration quiz-illustration",
                          "data-source-loc": "src/App.tsx:126:869",
                          children: [
                            f.jsx("span", {
                              className: "quiz-orbit",
                              "data-source-loc": "src/App.tsx:126:922",
                            }),
                            f.jsx("span", {
                              className: "question-block",
                              "data-source-loc": "src/App.tsx:126:952",
                              children: "?",
                            }),
                            f.jsx("span", {
                              className: "quiz-check",
                              "data-source-loc": "src/App.tsx:126:993",
                              children: f.jsx(Pn, {
                                size: 25,
                                "data-source-loc": "src/App.tsx:126:1022",
                              }),
                            }),
                            f.jsx("span", {
                              className: "illustration-star",
                              "data-source-loc": "src/App.tsx:126:1047",
                              children: "✦",
                            }),
                          ],
                        }),
                        f.jsx("h3", {
                          "data-source-loc": "src/App.tsx:126:1097",
                          children: b(
                            "Қаншалықты білесің?",
                            "Что ты знаешь о Казахстане?",
                          ),
                        }),
                        f.jsx("p", {
                          "data-source-loc": "src/App.tsx:126:1163",
                          children: b(
                            "Тіл, мәдениет және тарих туралы 6 сұрақ. Өз біліміңді сынап көр!",
                            "6 вопросов о языке, культуре и истории. Проверь свои знания!",
                          ),
                        }),
                        f.jsxs("div", {
                          className: "game-card-bottom",
                          "data-source-loc": "src/App.tsx:126:1305",
                          children: [
                            f.jsxs("span", {
                              "data-source-loc": "src/App.tsx:126:1339",
                              children: [
                                f.jsx(oo, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:126:1345",
                                }),
                                "3 ",
                                b("минут", "минуты"),
                              ],
                            }),
                            f.jsxs("span", {
                              className: "game-play",
                              "data-source-loc": "src/App.tsx:126:1395",
                              children: [
                                b("Бастау", "Начать"),
                                f.jsx(De, {
                                  size: 17,
                                  "data-source-loc": "src/App.tsx:126:1446",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("button", {
                      className: "game-card game-word",
                      onClick: () => y({ type: "game", game: "word" }),
                      "data-source-loc": "src/App.tsx:126:1493",
                      children: [
                        f.jsxs("div", {
                          className: "game-card-top",
                          "data-source-loc": "src/App.tsx:126:1589",
                          children: [
                            f.jsx("span", {
                              className: "game-type",
                              "data-source-loc": "src/App.tsx:126:1620",
                              children: b("СӨЗ ОЙЫНЫ", "СЛОВЕСНАЯ ИГРА"),
                            }),
                            f.jsx("span", {
                              className: "game-xp",
                              "data-source-loc": "src/App.tsx:126:1689",
                              children: "40 XP",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "game-illustration word-illustration",
                          "data-source-loc": "src/App.tsx:126:1733",
                          children: [
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:1786",
                              children: "Қ",
                            }),
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:1800",
                              children: "А",
                            }),
                            f.jsx("span", {
                              "data-source-loc": "src/App.tsx:126:1814",
                              children: "З",
                            }),
                            f.jsx("small", {
                              "data-source-loc": "src/App.tsx:126:1828",
                              children: "✧",
                            }),
                          ],
                        }),
                        f.jsx("h3", {
                          "data-source-loc": "src/App.tsx:126:1850",
                          children: b(
                            "Әріптен әлем құра",
                            "Собери мир из букв",
                          ),
                        }),
                        f.jsx("p", {
                          "data-source-loc": "src/App.tsx:126:1905",
                          children: b(
                            "Шашылған әріптерді жинап, жасырынған қазақша сөзді тап.",
                            "Расставь буквы по местам и найди спрятанное казахское слово.",
                          ),
                        }),
                        f.jsxs("div", {
                          className: "game-card-bottom",
                          "data-source-loc": "src/App.tsx:126:2038",
                          children: [
                            f.jsxs("span", {
                              "data-source-loc": "src/App.tsx:126:2072",
                              children: [
                                f.jsx(oo, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:126:2078",
                                }),
                                "2 ",
                                b("минут", "минуты"),
                              ],
                            }),
                            f.jsxs("span", {
                              className: "game-play",
                              "data-source-loc": "src/App.tsx:126:2128",
                              children: [
                                b("Ойнау", "Играть"),
                                f.jsx(De, {
                                  size: 17,
                                  "data-source-loc": "src/App.tsx:126:2178",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    f.jsxs("button", {
                      className: "game-card game-match",
                      onClick: () => y({ type: "game", game: "match" }),
                      "data-source-loc": "src/App.tsx:126:2225",
                      children: [
                        f.jsxs("div", {
                          className: "game-card-top",
                          "data-source-loc": "src/App.tsx:126:2323",
                          children: [
                            f.jsx("span", {
                              className: "game-type",
                              "data-source-loc": "src/App.tsx:126:2354",
                              children: b("СӘЙКЕСТЕНДІРУ", "НАЙДИ ПАРУ"),
                            }),
                            f.jsx("span", {
                              className: "game-xp",
                              "data-source-loc": "src/App.tsx:126:2423",
                              children: "30 XP",
                            }),
                          ],
                        }),
                        f.jsxs("div", {
                          className: "game-illustration match-illustration",
                          "data-source-loc": "src/App.tsx:126:2467",
                          children: [
                            f.jsx("span", {
                              className: "match-mini-card",
                              "data-source-loc": "src/App.tsx:126:2521",
                              children: f.jsx(ue, {
                                "data-source-loc": "src/App.tsx:126:2555",
                              }),
                            }),
                            f.jsx("span", {
                              className: "match-mini-card",
                              "data-source-loc": "src/App.tsx:126:2570",
                              children: f.jsx(ue, {
                                "data-source-loc": "src/App.tsx:126:2604",
                              }),
                            }),
                            f.jsx("span", {
                              className: "match-dotted-line",
                              "data-source-loc": "src/App.tsx:126:2619",
                            }),
                          ],
                        }),
                        f.jsx("h3", {
                          "data-source-loc": "src/App.tsx:126:2662",
                          children: b(
                            "Сөздер тоғысқанда",
                            "Когда слова встречаются",
                          ),
                        }),
                        f.jsx("p", {
                          "data-source-loc": "src/App.tsx:126:2722",
                          children: b(
                            "Сөз бен мағынаны сәйкестендір. Есте сақтау қабілетіңді шыңда.",
                            "Соедини слова с их переводами. Тренируй память и учись новому.",
                          ),
                        }),
                        f.jsxs("div", {
                          className: "game-card-bottom",
                          "data-source-loc": "src/App.tsx:126:2863",
                          children: [
                            f.jsxs("span", {
                              "data-source-loc": "src/App.tsx:126:2897",
                              children: [
                                f.jsx(oo, {
                                  size: 14,
                                  "data-source-loc": "src/App.tsx:126:2903",
                                }),
                                "2 ",
                                b("минут", "минуты"),
                              ],
                            }),
                            f.jsxs("span", {
                              className: "game-play",
                              "data-source-loc": "src/App.tsx:126:2953",
                              children: [
                                b("Жұбын табу", "Найти пары"),
                                f.jsx(De, {
                                  size: 17,
                                  "data-source-loc": "src/App.tsx:126:3012",
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
          f.jsxs("section", {
            className: "heritage-section section-space container",
            id: "heritage",
            "data-source-loc": "src/App.tsx:128:8",
            children: [
              f.jsxs("div", {
                className: "section-heading",
                "data-source-loc": "src/App.tsx:128:84",
                children: [
                  f.jsxs("div", {
                    "data-source-loc": "src/App.tsx:128:117",
                    children: [
                      f.jsxs("p", {
                        className: "eyebrow",
                        "data-source-loc": "src/App.tsx:128:122",
                        children: [
                          f.jsx("span", {
                            "data-source-loc": "src/App.tsx:128:145",
                          }),
                          b("ҰРПАҚҚА АМАНАТ", "НАСЛЕДИЕ ПОКОЛЕНИЙ"),
                        ],
                      }),
                      f.jsx("h2", {
                        "data-source-loc": "src/App.tsx:128:199",
                        children: b(
                          "Ұлы дала. Ұлы мұра.",
                          "Великая степь. Великое наследие.",
                        ),
                      }),
                      f.jsx("p", {
                        className: "section-description",
                        "data-source-loc": "src/App.tsx:128:270",
                        children: b(
                          "Елді ел еткен тұлғалар мен ұлтты ұйыстырған құндылықтар.",
                          "Личности, создавшие историю, и ценности, объединившие народ.",
                        ),
                      }),
                    ],
                  }),
                  f.jsxs("button", {
                    className: "section-link",
                    onClick: () => y({ type: "gallery" }),
                    "data-source-loc": "src/App.tsx:128:442",
                    children: [
                      b("Галереяны ашу", "Открыть галерею"),
                      f.jsx(De, {
                        size: 18,
                        "data-source-loc": "src/App.tsx:128:559",
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("div", {
                className: "gallery-filters",
                "data-source-loc": "src/App.tsx:128:599",
                children: [
                  { id: "all", text: b("Барлығы", "Всё наследие") },
                  { id: "people", text: b("Ұлы тұлғалар", "Великие личности") },
                  {
                    id: "tradition",
                    text: b("Дәстүр мен өнер", "Традиции и искусство"),
                  },
                ].map((R) =>
                  f.jsx(
                    "button",
                    {
                      className: X === R.id ? "active" : "",
                      "aria-pressed": X === R.id,
                      onClick: () => Q(R.id),
                      "data-source-loc": "src/App.tsx:128:835",
                      children: R.text,
                    },
                    R.id,
                  ),
                ),
              }),
              rt(),
            ],
          }),
          f.jsx("section", {
            className: "closing-section container",
            "data-source-loc": "src/App.tsx:130:8",
            children: f.jsxs("div", {
              className: "closing-inner",
              "data-source-loc": "src/App.tsx:130:55",
              children: [
                f.jsx("div", {
                  className: "closing-ornament",
                  "data-source-loc": "src/App.tsx:130:86",
                }),
                f.jsx("div", {
                  className: "closing-emblem",
                  "data-source-loc": "src/App.tsx:130:121",
                  children: f.jsx(ue, {
                    "data-source-loc": "src/App.tsx:130:153",
                  }),
                }),
                f.jsx("p", {
                  className: "eyebrow",
                  "data-source-loc": "src/App.tsx:130:167",
                  children: b(
                    "ТІЛ — КЕШЕ МЕН ЕРТЕҢНІҢ АРАСЫНДАҒЫ КӨПІР",
                    "ЯЗЫК — МОСТ МЕЖДУ ПРОШЛЫМ И БУДУЩИМ",
                  ),
                }),
                f.jsx("h2", {
                  "data-source-loc": "src/App.tsx:130:280",
                  children: b(
                    "Өз тіліңнен — өз әлеміңе.",
                    "Через родной язык — к своему миру.",
                  ),
                }),
                f.jsx("p", {
                  "data-source-loc": "src/App.tsx:130:359",
                  children: b(
                    "Ұлы сапар кішкентай қадамнан басталады. Бүгін бір сөз үйрен. Бір тарихты таны.",
                    "Большое путешествие начинается с маленького шага. Выучи одно слово. Узнай одну историю.",
                  ),
                }),
                f.jsxs("button", {
                  className: "gold-button",
                  onClick: () =>
                    y({
                      type: "lesson",
                      lesson:
                        Je.find((R) => !g.completed.includes(R.id)) || Je[0],
                    }),
                  "data-source-loc": "src/App.tsx:130:542",
                  children: [
                    b("Алғашқы қадамды жаса", "Сделай первый шаг"),
                    f.jsx(De, {
                      size: 18,
                      "data-source-loc": "src/App.tsx:130:743",
                    }),
                  ],
                }),
                f.jsxs("span", {
                  className: "closing-small",
                  "data-source-loc": "src/App.tsx:130:777",
                  children: [
                    f.jsx(nT, {
                      size: 12,
                      "data-source-loc": "src/App.tsx:130:809",
                    }),
                    b(
                      "Ұлттық мұраға деген сүйіспеншілікпен",
                      "С любовью к национальному наследию",
                    ),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
      f.jsxs("footer", {
        className: "site-footer container",
        "data-source-loc": "src/App.tsx:133:6",
        children: [
          f.jsxs("div", {
            className: "footer-top",
            "data-source-loc": "src/App.tsx:133:48",
            children: [
              f.jsxs("a", {
                href: "#home",
                className: "brand",
                onClick: (R) => {
                  (R.preventDefault(), Mt("home"));
                },
                "data-source-loc": "src/App.tsx:133:76",
                children: [
                  f.jsx("span", {
                    className: "brand-emblem",
                    "data-source-loc": "src/App.tsx:133:162",
                    children: f.jsx(ue, {
                      "data-source-loc": "src/App.tsx:133:193",
                    }),
                  }),
                  f.jsxs("span", {
                    className: "brand-name",
                    "data-source-loc": "src/App.tsx:133:208",
                    children: [
                      "QAZAQ ",
                      f.jsx("b", {
                        "data-source-loc": "src/App.tsx:133:243",
                        children: "TILI",
                      }),
                      f.jsx("small", {
                        "data-source-loc": "src/App.tsx:133:254",
                        children: b(
                          "ТІЛДІ ТАНЫ. ЕЛДІ ТАНЫ.",
                          "ПОЗНАВАЙ ЯЗЫК И СТРАНУ.",
                        ),
                      }),
                    ],
                  }),
                ],
              }),
              f.jsx("p", {
                "data-source-loc": "src/App.tsx:133:336",
                children: b(
                  "Тамыры терең. Танымы шексіз.",
                  "Глубокие корни. Безграничное познание.",
                ),
              }),
              f.jsxs("button", {
                className: "text-button",
                onClick: () => y({ type: "about" }),
                "data-source-loc": "src/App.tsx:133:420",
                children: [
                  b("Жоба туралы", "О проекте"),
                  f.jsx(De, {
                    size: 15,
                    "data-source-loc": "src/App.tsx:133:526",
                  }),
                ],
              }),
              f.jsxs("a", {
                className: "text-button",
                href: "https://ich.unesco.org/en/state/kazakhstan-KZ",
                target: "_blank",
                rel: "noreferrer",
                "data-source-loc": "src/App.tsx:133:560",
                children: [
                  b("Мұра дереккөздері", "Источники о наследии"),
                  f.jsx(sy, {
                    size: 13,
                    "data-source-loc": "src/App.tsx:133:721",
                  }),
                ],
              }),
            ],
          }),
          f.jsxs("div", {
            className: "footer-bottom",
            "data-source-loc": "src/App.tsx:133:756",
            children: [
              f.jsxs("span", {
                "data-source-loc": "src/App.tsx:133:787",
                children: [
                  "© 2026 QAZAQ TILI. ",
                  b(
                    "Білім. Мәдениет. Мұра.",
                    "Образование. Культура. Наследие.",
                  ),
                ],
              }),
              f.jsxs("span", {
                "data-source-loc": "src/App.tsx:133:884",
                children: [
                  f.jsx("span", {
                    className: "footer-dot",
                    "data-source-loc": "src/App.tsx:133:890",
                  }),
                  b("Қазақстанда шабыттанған", "Вдохновлено Казахстаном"),
                ],
              }),
              f.jsxs("button", {
                onClick: () => Mt("home"),
                "data-source-loc": "src/App.tsx:133:984",
                children: [
                  b("Жоғарыға", "Наверх"),
                  f.jsx(De, {
                    size: 14,
                    "data-source-loc": "src/App.tsx:133:1046",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
      f.jsx(gu, {
        mode: "wait",
        "data-source-loc": "src/App.tsx:135:6",
        children:
          d &&
          f.jsx(
            ST,
            {
              title: b("Таным кеңістігі", "Пространство знаний"),
              onClose: () => {
                (y(null),
                  "speechSynthesis" in window &&
                    window.speechSynthesis.cancel(),
                  st(!1));
              },
              wide: ["all", "gallery"].includes(d.type),
              "data-source-loc": "src/App.tsx:135:44",
              children: mt(),
            },
            d.type === "game"
              ? d.game
              : d.type === "lesson"
                ? d.lesson.id
                : d.type,
          ),
      }),
      f.jsx(gu, {
        "data-source-loc": "src/App.tsx:135:403",
        children:
          x &&
          f.jsxs(xs.div, {
            className: "toast",
            role: "status",
            initial: { opacity: 0, y: 18 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: 12 },
            "data-source-loc": "src/App.tsx:135:430",
            children: [
              f.jsx(ps, { size: 20, "data-source-loc": "src/App.tsx:135:566" }),
              f.jsx("span", {
                "data-source-loc": "src/App.tsx:135:591",
                children: x,
              }),
              f.jsx("button", {
                className: "icon-button",
                onClick: () => A(""),
                "aria-label": b("Хабарламаны жабу", "Закрыть уведомление"),
                "data-source-loc": "src/App.tsx:135:611",
                children: f.jsx(Ci, {
                  size: 16,
                  "data-source-loc": "src/App.tsx:135:730",
                }),
              }),
            ],
          }),
      }),
    ],
  });
}
function CT() {
  return f.jsx(_o, {
    size: 22,
    strokeWidth: 1.6,
    "data-source-loc": "src/App.tsx:140:34",
  });
}
Dx.createRoot(document.getElementById("root")).render(
  f.jsx(k.StrictMode, {
    "data-source-loc": "src/main.tsx:7:2",
    children: f.jsx(NT, { "data-source-loc": "src/main.tsx:8:4" }),
  }),
);
