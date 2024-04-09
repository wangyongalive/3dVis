var $jscomp = $jscomp || {}
$jscomp.scope = {}
$jscomp.owns = function (k, n) {
  return Object.prototype.hasOwnProperty.call(k, n)
}
$jscomp.ASSUME_ES5 = !1
$jscomp.ASSUME_NO_NATIVE_MAP = !1
$jscomp.ASSUME_NO_NATIVE_SET = !1
$jscomp.SIMPLE_FROUND_POLYFILL = !1
$jscomp.ISOLATE_POLYFILLS = !1
$jscomp.FORCE_POLYFILL_PROMISE = !1
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1
$jscomp.defineProperty =
  $jscomp.ASSUME_ES5 || 'function' == typeof Object.defineProperties
    ? Object.defineProperty
    : function (k, n, l) {
        if (k == Array.prototype || k == Object.prototype) return k
        k[n] = l.value
        return k
      }
$jscomp.getGlobal = function (k) {
  k = [
    'object' == typeof globalThis && globalThis,
    k,
    'object' == typeof window && window,
    'object' == typeof self && self,
    'object' == typeof global && global
  ]
  for (var n = 0; n < k.length; ++n) {
    var l = k[n]
    if (l && l.Math == Math) return l
  }
  throw Error('Cannot find global object')
}
$jscomp.global = $jscomp.getGlobal(this)
$jscomp.IS_SYMBOL_NATIVE =
  'function' === typeof Symbol && 'symbol' === typeof Symbol('x')
$jscomp.TRUST_ES6_POLYFILLS =
  !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE
$jscomp.polyfills = {}
$jscomp.propertyToPolyfillSymbol = {}
$jscomp.POLYFILL_PREFIX = '$jscp$'
var $jscomp$lookupPolyfilledValue = function (k, n) {
  var l = $jscomp.propertyToPolyfillSymbol[n]
  if (null == l) return k[n]
  l = k[l]
  return void 0 !== l ? l : k[n]
}
$jscomp.polyfill = function (k, n, l, p) {
  n &&
    ($jscomp.ISOLATE_POLYFILLS
      ? $jscomp.polyfillIsolated(k, n, l, p)
      : $jscomp.polyfillUnisolated(k, n, l, p))
}
$jscomp.polyfillUnisolated = function (k, n, l, p) {
  l = $jscomp.global
  k = k.split('.')
  for (p = 0; p < k.length - 1; p++) {
    var h = k[p]
    if (!(h in l)) return
    l = l[h]
  }
  k = k[k.length - 1]
  p = l[k]
  n = n(p)
  n != p &&
    null != n &&
    $jscomp.defineProperty(l, k, { configurable: !0, writable: !0, value: n })
}
$jscomp.polyfillIsolated = function (k, n, l, p) {
  var h = k.split('.')
  k = 1 === h.length
  p = h[0]
  p = !k && p in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global
  for (var A = 0; A < h.length - 1; A++) {
    var f = h[A]
    if (!(f in p)) return
    p = p[f]
  }
  h = h[h.length - 1]
  l = $jscomp.IS_SYMBOL_NATIVE && 'es6' === l ? p[h] : null
  n = n(l)
  null != n &&
    (k
      ? $jscomp.defineProperty($jscomp.polyfills, h, {
          configurable: !0,
          writable: !0,
          value: n
        })
      : n !== l &&
        (void 0 === $jscomp.propertyToPolyfillSymbol[h] &&
          ((l = (1e9 * Math.random()) >>> 0),
          ($jscomp.propertyToPolyfillSymbol[h] = $jscomp.IS_SYMBOL_NATIVE
            ? $jscomp.global.Symbol(h)
            : $jscomp.POLYFILL_PREFIX + l + '$' + h)),
        $jscomp.defineProperty(p, $jscomp.propertyToPolyfillSymbol[h], {
          configurable: !0,
          writable: !0,
          value: n
        })))
}
$jscomp.assign =
  $jscomp.TRUST_ES6_POLYFILLS && 'function' == typeof Object.assign
    ? Object.assign
    : function (k, n) {
        for (var l = 1; l < arguments.length; l++) {
          var p = arguments[l]
          if (p) for (var h in p) $jscomp.owns(p, h) && (k[h] = p[h])
        }
        return k
      }
$jscomp.polyfill(
  'Object.assign',
  function (k) {
    return k || $jscomp.assign
  },
  'es6',
  'es3'
)
$jscomp.arrayIteratorImpl = function (k) {
  var n = 0
  return function () {
    return n < k.length ? { done: !1, value: k[n++] } : { done: !0 }
  }
}
$jscomp.arrayIterator = function (k) {
  return { next: $jscomp.arrayIteratorImpl(k) }
}
$jscomp.makeIterator = function (k) {
  var n = 'undefined' != typeof Symbol && Symbol.iterator && k[Symbol.iterator]
  return n ? n.call(k) : $jscomp.arrayIterator(k)
}
$jscomp.polyfill(
  'Promise',
  function (k) {
    function n() {
      this.batch_ = null
    }
    function l(f) {
      return f instanceof h
        ? f
        : new h(function (q, v) {
            q(f)
          })
    }
    if (
      k &&
      (!(
        $jscomp.FORCE_POLYFILL_PROMISE ||
        ($jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION &&
          'undefined' === typeof $jscomp.global.PromiseRejectionEvent)
      ) ||
        !$jscomp.global.Promise ||
        -1 === $jscomp.global.Promise.toString().indexOf('[native code]'))
    )
      return k
    n.prototype.asyncExecute = function (f) {
      if (null == this.batch_) {
        this.batch_ = []
        var q = this
        this.asyncExecuteFunction(function () {
          q.executeBatch_()
        })
      }
      this.batch_.push(f)
    }
    var p = $jscomp.global.setTimeout
    n.prototype.asyncExecuteFunction = function (f) {
      p(f, 0)
    }
    n.prototype.executeBatch_ = function () {
      for (; this.batch_ && this.batch_.length; ) {
        var f = this.batch_
        this.batch_ = []
        for (var q = 0; q < f.length; ++q) {
          var v = f[q]
          f[q] = null
          try {
            v()
          } catch (z) {
            this.asyncThrow_(z)
          }
        }
      }
      this.batch_ = null
    }
    n.prototype.asyncThrow_ = function (f) {
      this.asyncExecuteFunction(function () {
        throw f
      })
    }
    var h = function (f) {
      this.state_ = 0
      this.result_ = void 0
      this.onSettledCallbacks_ = []
      this.isRejectionHandled_ = !1
      var q = this.createResolveAndReject_()
      try {
        f(q.resolve, q.reject)
      } catch (v) {
        q.reject(v)
      }
    }
    h.prototype.createResolveAndReject_ = function () {
      function f(z) {
        return function (F) {
          v || ((v = !0), z.call(q, F))
        }
      }
      var q = this,
        v = !1
      return { resolve: f(this.resolveTo_), reject: f(this.reject_) }
    }
    h.prototype.resolveTo_ = function (f) {
      if (f === this)
        this.reject_(new TypeError('A Promise cannot resolve to itself'))
      else if (f instanceof h) this.settleSameAsPromise_(f)
      else {
        a: switch (typeof f) {
          case 'object':
            var q = null != f
            break a
          case 'function':
            q = !0
            break a
          default:
            q = !1
        }
        q ? this.resolveToNonPromiseObj_(f) : this.fulfill_(f)
      }
    }
    h.prototype.resolveToNonPromiseObj_ = function (f) {
      var q = void 0
      try {
        q = f.then
      } catch (v) {
        this.reject_(v)
        return
      }
      'function' == typeof q
        ? this.settleSameAsThenable_(q, f)
        : this.fulfill_(f)
    }
    h.prototype.reject_ = function (f) {
      this.settle_(2, f)
    }
    h.prototype.fulfill_ = function (f) {
      this.settle_(1, f)
    }
    h.prototype.settle_ = function (f, q) {
      if (0 != this.state_)
        throw Error(
          'Cannot settle(' +
            f +
            ', ' +
            q +
            '): Promise already settled in state' +
            this.state_
        )
      this.state_ = f
      this.result_ = q
      2 === this.state_ && this.scheduleUnhandledRejectionCheck_()
      this.executeOnSettledCallbacks_()
    }
    h.prototype.scheduleUnhandledRejectionCheck_ = function () {
      var f = this
      p(function () {
        if (f.notifyUnhandledRejection_()) {
          var q = $jscomp.global.console
          'undefined' !== typeof q && q.error(f.result_)
        }
      }, 1)
    }
    h.prototype.notifyUnhandledRejection_ = function () {
      if (this.isRejectionHandled_) return !1
      var f = $jscomp.global.CustomEvent,
        q = $jscomp.global.Event,
        v = $jscomp.global.dispatchEvent
      if ('undefined' === typeof v) return !0
      'function' === typeof f
        ? (f = new f('unhandledrejection', { cancelable: !0 }))
        : 'function' === typeof q
          ? (f = new q('unhandledrejection', { cancelable: !0 }))
          : ((f = $jscomp.global.document.createEvent('CustomEvent')),
            f.initCustomEvent('unhandledrejection', !1, !0, f))
      f.promise = this
      f.reason = this.result_
      return v(f)
    }
    h.prototype.executeOnSettledCallbacks_ = function () {
      if (null != this.onSettledCallbacks_) {
        for (var f = 0; f < this.onSettledCallbacks_.length; ++f)
          A.asyncExecute(this.onSettledCallbacks_[f])
        this.onSettledCallbacks_ = null
      }
    }
    var A = new n()
    h.prototype.settleSameAsPromise_ = function (f) {
      var q = this.createResolveAndReject_()
      f.callWhenSettled_(q.resolve, q.reject)
    }
    h.prototype.settleSameAsThenable_ = function (f, q) {
      var v = this.createResolveAndReject_()
      try {
        f.call(q, v.resolve, v.reject)
      } catch (z) {
        v.reject(z)
      }
    }
    h.prototype.then = function (f, q) {
      function v(Q, u) {
        return 'function' == typeof Q
          ? function (x) {
              try {
                z(Q(x))
              } catch (D) {
                F(D)
              }
            }
          : u
      }
      var z,
        F,
        da = new h(function (Q, u) {
          z = Q
          F = u
        })
      this.callWhenSettled_(v(f, z), v(q, F))
      return da
    }
    h.prototype.catch = function (f) {
      return this.then(void 0, f)
    }
    h.prototype.callWhenSettled_ = function (f, q) {
      function v() {
        switch (z.state_) {
          case 1:
            f(z.result_)
            break
          case 2:
            q(z.result_)
            break
          default:
            throw Error('Unexpected state: ' + z.state_)
        }
      }
      var z = this
      null == this.onSettledCallbacks_
        ? A.asyncExecute(v)
        : this.onSettledCallbacks_.push(v)
      this.isRejectionHandled_ = !0
    }
    h.resolve = l
    h.reject = function (f) {
      return new h(function (q, v) {
        v(f)
      })
    }
    h.race = function (f) {
      return new h(function (q, v) {
        for (
          var z = $jscomp.makeIterator(f), F = z.next();
          !F.done;
          F = z.next()
        )
          l(F.value).callWhenSettled_(q, v)
      })
    }
    h.all = function (f) {
      var q = $jscomp.makeIterator(f),
        v = q.next()
      return v.done
        ? l([])
        : new h(function (z, F) {
            function da(x) {
              return function (D) {
                Q[x] = D
                u--
                0 == u && z(Q)
              }
            }
            var Q = [],
              u = 0
            do
              Q.push(void 0),
                u++,
                l(v.value).callWhenSettled_(da(Q.length - 1), F),
                (v = q.next())
            while (!v.done)
          })
    }
    return h
  },
  'es6',
  'es3'
)
$jscomp.checkStringArgs = function (k, n, l) {
  if (null == k)
    throw new TypeError(
      "The 'this' value for String.prototype." +
        l +
        ' must not be null or undefined'
    )
  if (n instanceof RegExp)
    throw new TypeError(
      'First argument to String.prototype.' +
        l +
        ' must not be a regular expression'
    )
  return k + ''
}
$jscomp.polyfill(
  'String.prototype.startsWith',
  function (k) {
    return k
      ? k
      : function (n, l) {
          var p = $jscomp.checkStringArgs(this, n, 'startsWith')
          n += ''
          var h = p.length,
            A = n.length
          l = Math.max(0, Math.min(l | 0, p.length))
          for (var f = 0; f < A && l < h; ) if (p[l++] != n[f++]) return !1
          return f >= A
        }
  },
  'es6',
  'es3'
)
$jscomp.polyfill(
  'Array.prototype.copyWithin',
  function (k) {
    function n(l) {
      l = Number(l)
      return Infinity === l || -Infinity === l ? l : l | 0
    }
    return k
      ? k
      : function (l, p, h) {
          var A = this.length
          l = n(l)
          p = n(p)
          h = void 0 === h ? A : n(h)
          l = 0 > l ? Math.max(A + l, 0) : Math.min(l, A)
          p = 0 > p ? Math.max(A + p, 0) : Math.min(p, A)
          h = 0 > h ? Math.max(A + h, 0) : Math.min(h, A)
          if (l < p)
            for (; p < h; )
              p in this ? (this[l++] = this[p++]) : (delete this[l++], p++)
          else
            for (h = Math.min(h, A + p - l), l += h - p; h > p; )
              --h in this ? (this[--l] = this[h]) : delete this[--l]
          return this
        }
  },
  'es6',
  'es3'
)
$jscomp.typedArrayCopyWithin = function (k) {
  return k ? k : Array.prototype.copyWithin
}
$jscomp.polyfill(
  'Int8Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Uint8Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Uint8ClampedArray.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Int16Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Uint16Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Int32Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Uint32Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Float32Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
$jscomp.polyfill(
  'Float64Array.prototype.copyWithin',
  $jscomp.typedArrayCopyWithin,
  'es6',
  'es5'
)
var DracoDecoderModule = (function () {
  var k =
    'undefined' !== typeof document && document.currentScript
      ? document.currentScript.src
      : void 0
  'undefined' !== typeof __filename && (k = k || __filename)
  return function (n) {
    function l(e) {
      return a.locateFile ? a.locateFile(e, V) : V + e
    }
    function p(e, b, c) {
      var d = b + c
      for (c = b; e[c] && !(c >= d); ) ++c
      if (16 < c - b && e.subarray && xa) return xa.decode(e.subarray(b, c))
      for (d = ''; b < c; ) {
        var g = e[b++]
        if (g & 128) {
          var t = e[b++] & 63
          if (192 == (g & 224)) d += String.fromCharCode(((g & 31) << 6) | t)
          else {
            var W = e[b++] & 63
            g =
              224 == (g & 240)
                ? ((g & 15) << 12) | (t << 6) | W
                : ((g & 7) << 18) | (t << 12) | (W << 6) | (e[b++] & 63)
            65536 > g
              ? (d += String.fromCharCode(g))
              : ((g -= 65536),
                (d += String.fromCharCode(
                  55296 | (g >> 10),
                  56320 | (g & 1023)
                )))
          }
        } else d += String.fromCharCode(g)
      }
      return d
    }
    function h(e, b) {
      return e ? p(ea, e, b) : ''
    }
    function A(e) {
      ya = e
      a.HEAP8 = Y = new Int8Array(e)
      a.HEAP16 = new Int16Array(e)
      a.HEAP32 = G = new Int32Array(e)
      a.HEAPU8 = ea = new Uint8Array(e)
      a.HEAPU16 = new Uint16Array(e)
      a.HEAPU32 = new Uint32Array(e)
      a.HEAPF32 = new Float32Array(e)
      a.HEAPF64 = new Float64Array(e)
    }
    function f(e) {
      if (a.onAbort) a.onAbort(e)
      e = 'Aborted(' + e + ')'
      ca(e)
      za = !0
      e = new WebAssembly.RuntimeError(
        e + '. Build with -s ASSERTIONS=1 for more info.'
      )
      oa(e)
      throw e
    }
    function q(e) {
      try {
        if (e == R && fa) return new Uint8Array(fa)
        if (pa) return pa(e)
        throw 'both async and sync fetching of the wasm failed'
      } catch (b) {
        f(b)
      }
    }
    function v() {
      if (!fa && (Aa || ha)) {
        if ('function' === typeof fetch && !R.startsWith('file://'))
          return fetch(R, { credentials: 'same-origin' })
            .then(function (e) {
              if (!e.ok) throw "failed to load wasm binary file at '" + R + "'"
              return e.arrayBuffer()
            })
            .catch(function () {
              return q(R)
            })
        if (qa)
          return new Promise(function (e, b) {
            qa(
              R,
              function (c) {
                e(new Uint8Array(c))
              },
              b
            )
          })
      }
      return Promise.resolve().then(function () {
        return q(R)
      })
    }
    function z(e) {
      for (; 0 < e.length; ) {
        var b = e.shift()
        if ('function' == typeof b) b(a)
        else {
          var c = b.func
          'number' === typeof c
            ? void 0 === b.arg
              ? F(c)()
              : F(c)(b.arg)
            : c(void 0 === b.arg ? null : b.arg)
        }
      }
    }
    function F(e) {
      var b = ka[e]
      b || (e >= ka.length && (ka.length = e + 1), (ka[e] = b = Ba.get(e)))
      return b
    }
    function da(e) {
      this.excPtr = e
      this.ptr = e - 16
      this.set_type = function (b) {
        G[(this.ptr + 4) >> 2] = b
      }
      this.get_type = function () {
        return G[(this.ptr + 4) >> 2]
      }
      this.set_destructor = function (b) {
        G[(this.ptr + 8) >> 2] = b
      }
      this.get_destructor = function () {
        return G[(this.ptr + 8) >> 2]
      }
      this.set_refcount = function (b) {
        G[this.ptr >> 2] = b
      }
      this.set_caught = function (b) {
        Y[(this.ptr + 12) >> 0] = b ? 1 : 0
      }
      this.get_caught = function () {
        return 0 != Y[(this.ptr + 12) >> 0]
      }
      this.set_rethrown = function (b) {
        Y[(this.ptr + 13) >> 0] = b ? 1 : 0
      }
      this.get_rethrown = function () {
        return 0 != Y[(this.ptr + 13) >> 0]
      }
      this.init = function (b, c) {
        this.set_type(b)
        this.set_destructor(c)
        this.set_refcount(0)
        this.set_caught(!1)
        this.set_rethrown(!1)
      }
      this.add_ref = function () {
        G[this.ptr >> 2] += 1
      }
      this.release_ref = function () {
        var b = G[this.ptr >> 2]
        G[this.ptr >> 2] = b - 1
        return 1 === b
      }
    }
    function Q(e) {
      function b() {
        if (!la && ((la = !0), (a.calledRun = !0), !za)) {
          Ca = !0
          z(ra)
          Da(a)
          if (a.onRuntimeInitialized) a.onRuntimeInitialized()
          if (a.postRun)
            for (
              'function' == typeof a.postRun && (a.postRun = [a.postRun]);
              a.postRun.length;

            )
              Ea.unshift(a.postRun.shift())
          z(Ea)
        }
      }
      if (!(0 < ba)) {
        if (a.preRun)
          for (
            'function' == typeof a.preRun && (a.preRun = [a.preRun]);
            a.preRun.length;

          )
            Fa.unshift(a.preRun.shift())
        z(Fa)
        0 < ba ||
          (a.setStatus
            ? (a.setStatus('Running...'),
              setTimeout(function () {
                setTimeout(function () {
                  a.setStatus('')
                }, 1)
                b()
              }, 1))
            : b())
      }
    }
    function u() {}
    function x(e) {
      return (e || u).__cache__
    }
    function D(e, b) {
      var c = x(b),
        d = c[e]
      if (d) return d
      d = Object.create((b || u).prototype)
      d.ptr = e
      return (c[e] = d)
    }
    function aa(e) {
      if ('string' === typeof e) {
        for (var b = 0, c = 0; c < e.length; ++c) {
          var d = e.charCodeAt(c)
          55296 <= d &&
            57343 >= d &&
            (d = (65536 + ((d & 1023) << 10)) | (e.charCodeAt(++c) & 1023))
          127 >= d ? ++b : (b = 2047 >= d ? b + 2 : 65535 >= d ? b + 3 : b + 4)
        }
        b = Array(b + 1)
        c = 0
        d = b.length
        if (0 < d) {
          d = c + d - 1
          for (var g = 0; g < e.length; ++g) {
            var t = e.charCodeAt(g)
            if (55296 <= t && 57343 >= t) {
              var W = e.charCodeAt(++g)
              t = (65536 + ((t & 1023) << 10)) | (W & 1023)
            }
            if (127 >= t) {
              if (c >= d) break
              b[c++] = t
            } else {
              if (2047 >= t) {
                if (c + 1 >= d) break
                b[c++] = 192 | (t >> 6)
              } else {
                if (65535 >= t) {
                  if (c + 2 >= d) break
                  b[c++] = 224 | (t >> 12)
                } else {
                  if (c + 3 >= d) break
                  b[c++] = 240 | (t >> 18)
                  b[c++] = 128 | ((t >> 12) & 63)
                }
                b[c++] = 128 | ((t >> 6) & 63)
              }
              b[c++] = 128 | (t & 63)
            }
          }
          b[c] = 0
        }
        e = r.alloc(b, Y)
        r.copy(b, Y, e)
        return e
      }
      return e
    }
    function sa(e) {
      if ('object' === typeof e) {
        var b = r.alloc(e, Y)
        r.copy(e, Y, b)
        return b
      }
      return e
    }
    function Z() {
      throw 'cannot construct a VoidPtr, no constructor in IDL'
    }
    function T() {
      this.ptr = Ga()
      x(T)[this.ptr] = this
    }
    function S() {
      this.ptr = Ha()
      x(S)[this.ptr] = this
    }
    function X() {
      this.ptr = Ia()
      x(X)[this.ptr] = this
    }
    function w() {
      this.ptr = Ja()
      x(w)[this.ptr] = this
    }
    function C() {
      this.ptr = Ka()
      x(C)[this.ptr] = this
    }
    function H() {
      this.ptr = La()
      x(H)[this.ptr] = this
    }
    function I() {
      this.ptr = Ma()
      x(I)[this.ptr] = this
    }
    function E() {
      this.ptr = Na()
      x(E)[this.ptr] = this
    }
    function U() {
      this.ptr = Oa()
      x(U)[this.ptr] = this
    }
    function B() {
      throw 'cannot construct a Status, no constructor in IDL'
    }
    function J() {
      this.ptr = Pa()
      x(J)[this.ptr] = this
    }
    function K() {
      this.ptr = Qa()
      x(K)[this.ptr] = this
    }
    function L() {
      this.ptr = Ra()
      x(L)[this.ptr] = this
    }
    function M() {
      this.ptr = Sa()
      x(M)[this.ptr] = this
    }
    function N() {
      this.ptr = Ta()
      x(N)[this.ptr] = this
    }
    function O() {
      this.ptr = Ua()
      x(O)[this.ptr] = this
    }
    function P() {
      this.ptr = Va()
      x(P)[this.ptr] = this
    }
    function y() {
      this.ptr = Wa()
      x(y)[this.ptr] = this
    }
    function m() {
      this.ptr = Xa()
      x(m)[this.ptr] = this
    }
    n = n || {}
    var a = 'undefined' !== typeof n ? n : {},
      Ya = Object.assign,
      Da,
      oa
    a.ready = new Promise(function (e, b) {
      Da = e
      oa = b
    })
    var Za = !1,
      $a = !1
    a.onRuntimeInitialized = function () {
      Za = !0
      if ($a && 'function' === typeof a.onModuleLoaded) a.onModuleLoaded(a)
    }
    a.onModuleParsed = function () {
      $a = !0
      if (Za && 'function' === typeof a.onModuleLoaded) a.onModuleLoaded(a)
    }
    a.isVersionSupported = function (e) {
      if ('string' !== typeof e) return !1
      e = e.split('.')
      return 2 > e.length || 3 < e.length
        ? !1
        : 1 == e[0] && 0 <= e[1] && 5 >= e[1]
          ? !0
          : 0 != e[0] || 10 < e[1]
            ? !1
            : !0
    }
    var ab = Ya({}, a),
      Aa = 'object' === typeof window,
      ha = 'function' === typeof importScripts,
      V = '',
      ta,
      ma
    if (
      'object' === typeof process &&
      'object' === typeof process.versions &&
      'string' === typeof process.versions.node
    ) {
      V = ha ? require('path').dirname(V) + '/' : __dirname + '/'
      var bb = function () {
        ma || ((ta = require('fs')), (ma = require('path')))
      }
      var cb = function (e, b) {
        bb()
        e = ma.normalize(e)
        return ta.readFileSync(e, b ? null : 'utf8')
      }
      var pa = function (e) {
        e = cb(e, !0)
        e.buffer || (e = new Uint8Array(e))
        return e
      }
      var qa = function (e, b, c) {
        bb()
        e = ma.normalize(e)
        ta.readFile(e, function (d, g) {
          d ? c(d) : b(g.buffer)
        })
      }
      1 < process.argv.length && process.argv[1].replace(/\\/g, '/')
      process.argv.slice(2)
      a.inspect = function () {
        return '[Emscripten Module object]'
      }
    } else if (Aa || ha)
      ha
        ? (V = self.location.href)
        : 'undefined' !== typeof document &&
          document.currentScript &&
          (V = document.currentScript.src),
        k && (V = k),
        (V =
          0 !== V.indexOf('blob:')
            ? V.substr(0, V.replace(/[?#].*/, '').lastIndexOf('/') + 1)
            : ''),
        (cb = function (e) {
          var b = new XMLHttpRequest()
          b.open('GET', e, !1)
          b.send(null)
          return b.responseText
        }),
        ha &&
          (pa = function (e) {
            var b = new XMLHttpRequest()
            b.open('GET', e, !1)
            b.responseType = 'arraybuffer'
            b.send(null)
            return new Uint8Array(b.response)
          }),
        (qa = function (e, b, c) {
          var d = new XMLHttpRequest()
          d.open('GET', e, !0)
          d.responseType = 'arraybuffer'
          d.onload = function () {
            200 == d.status || (0 == d.status && d.response)
              ? b(d.response)
              : c()
          }
          d.onerror = c
          d.send(null)
        })
    var xd = a.print || console.log.bind(console),
      ca = a.printErr || console.warn.bind(console)
    Ya(a, ab)
    ab = null
    var fa
    a.wasmBinary && (fa = a.wasmBinary)
    'object' !== typeof WebAssembly && f('no native wasm support detected')
    var na,
      za = !1,
      xa =
        'undefined' !== typeof TextDecoder ? new TextDecoder('utf8') : void 0,
      ya,
      Y,
      ea,
      G,
      Ba,
      Fa = [],
      ra = [],
      Ea = [],
      Ca = !1,
      ba = 0,
      ua = null,
      ia = null
    a.preloadedImages = {}
    a.preloadedAudios = {}
    var R = 'draco_decoder.wasm'
    R.startsWith('data:application/octet-stream;base64,') || (R = l(R))
    var ka = [],
      yd = 0,
      ja = {
        mappings: {},
        buffers: [null, [], []],
        printChar: function (e, b) {
          var c = ja.buffers[e]
          0 === b || 10 === b
            ? ((1 === e ? xd : ca)(p(c, 0)), (c.length = 0))
            : c.push(b)
        },
        varargs: void 0,
        get: function () {
          ja.varargs += 4
          return G[(ja.varargs - 4) >> 2]
        },
        getStr: function (e) {
          return h(e)
        },
        get64: function (e, b) {
          return e
        }
      },
      zd = {
        h: function (e) {
          return db(e + 16) + 16
        },
        g: function (e, b, c) {
          new da(e).init(b, c)
          yd++
          throw e
        },
        a: function () {
          f('')
        },
        f: function (e, b, c) {
          ea.copyWithin(e, b, b + c)
        },
        d: function (e) {
          var b = ea.length
          e >>>= 0
          if (2147483648 < e) return !1
          for (var c = 1; 4 >= c; c *= 2) {
            var d = b * (1 + 0.2 / c)
            d = Math.min(d, e + 100663296)
            var g = Math,
              t = g.min
            d = Math.max(e, d)
            0 < d % 65536 && (d += 65536 - (d % 65536))
            g = t.call(g, 2147483648, d)
            a: {
              try {
                na.grow((g - ya.byteLength + 65535) >>> 16)
                A(na.buffer)
                var W = 1
                break a
              } catch (va) {}
              W = void 0
            }
            if (W) return !0
          }
          return !1
        },
        e: function (e) {
          return 0
        },
        c: function (e, b, c, d, g) {},
        b: function (e, b, c, d) {
          for (var g = 0, t = 0; t < c; t++) {
            var W = G[b >> 2],
              va = G[(b + 4) >> 2]
            b += 8
            for (var wa = 0; wa < va; wa++) ja.printChar(e, ea[W + wa])
            g += va
          }
          G[d >> 2] = g
          return 0
        }
      }
    ;(function () {
      function e(g, t) {
        a.asm = g.exports
        na = a.asm.i
        A(na.buffer)
        Ba = a.asm.k
        ra.unshift(a.asm.j)
        ba--
        a.monitorRunDependencies && a.monitorRunDependencies(ba)
        0 == ba &&
          (null !== ua && (clearInterval(ua), (ua = null)),
          ia && ((g = ia), (ia = null), g()))
      }
      function b(g) {
        e(g.instance)
      }
      function c(g) {
        return v()
          .then(function (t) {
            return WebAssembly.instantiate(t, d)
          })
          .then(function (t) {
            return t
          })
          .then(g, function (t) {
            ca('failed to asynchronously prepare wasm: ' + t)
            f(t)
          })
      }
      var d = { a: zd }
      ba++
      a.monitorRunDependencies && a.monitorRunDependencies(ba)
      if (a.instantiateWasm)
        try {
          return a.instantiateWasm(d, e)
        } catch (g) {
          return (
            ca('Module.instantiateWasm callback failed with error: ' + g), !1
          )
        }
      ;(function () {
        return fa ||
          'function' !== typeof WebAssembly.instantiateStreaming ||
          R.startsWith('data:application/octet-stream;base64,') ||
          R.startsWith('file://') ||
          'function' !== typeof fetch
          ? c(b)
          : fetch(R, { credentials: 'same-origin' }).then(function (g) {
              return WebAssembly.instantiateStreaming(g, d).then(
                b,
                function (t) {
                  ca('wasm streaming compile failed: ' + t)
                  ca('falling back to ArrayBuffer instantiation')
                  return c(b)
                }
              )
            })
      })().catch(oa)
      return {}
    })()
    a.___wasm_call_ctors = function () {
      return (a.___wasm_call_ctors = a.asm.j).apply(null, arguments)
    }
    var eb = (a._emscripten_bind_VoidPtr___destroy___0 = function () {
        return (eb = a._emscripten_bind_VoidPtr___destroy___0 = a.asm.l).apply(
          null,
          arguments
        )
      }),
      Ga = (a._emscripten_bind_DecoderBuffer_DecoderBuffer_0 = function () {
        return (Ga = a._emscripten_bind_DecoderBuffer_DecoderBuffer_0 =
          a.asm.m).apply(null, arguments)
      }),
      fb = (a._emscripten_bind_DecoderBuffer_Init_2 = function () {
        return (fb = a._emscripten_bind_DecoderBuffer_Init_2 = a.asm.n).apply(
          null,
          arguments
        )
      }),
      gb = (a._emscripten_bind_DecoderBuffer___destroy___0 = function () {
        return (gb = a._emscripten_bind_DecoderBuffer___destroy___0 =
          a.asm.o).apply(null, arguments)
      }),
      Ha = (a._emscripten_bind_AttributeTransformData_AttributeTransformData_0 =
        function () {
          return (Ha =
            a._emscripten_bind_AttributeTransformData_AttributeTransformData_0 =
              a.asm.p).apply(null, arguments)
        }),
      hb = (a._emscripten_bind_AttributeTransformData_transform_type_0 =
        function () {
          return (hb =
            a._emscripten_bind_AttributeTransformData_transform_type_0 =
              a.asm.q).apply(null, arguments)
        }),
      ib = (a._emscripten_bind_AttributeTransformData___destroy___0 =
        function () {
          return (ib = a._emscripten_bind_AttributeTransformData___destroy___0 =
            a.asm.r).apply(null, arguments)
        }),
      Ia = (a._emscripten_bind_GeometryAttribute_GeometryAttribute_0 =
        function () {
          return (Ia =
            a._emscripten_bind_GeometryAttribute_GeometryAttribute_0 =
              a.asm.s).apply(null, arguments)
        }),
      jb = (a._emscripten_bind_GeometryAttribute___destroy___0 = function () {
        return (jb = a._emscripten_bind_GeometryAttribute___destroy___0 =
          a.asm.t).apply(null, arguments)
      }),
      Ja = (a._emscripten_bind_PointAttribute_PointAttribute_0 = function () {
        return (Ja = a._emscripten_bind_PointAttribute_PointAttribute_0 =
          a.asm.u).apply(null, arguments)
      }),
      kb = (a._emscripten_bind_PointAttribute_size_0 = function () {
        return (kb = a._emscripten_bind_PointAttribute_size_0 = a.asm.v).apply(
          null,
          arguments
        )
      }),
      lb = (a._emscripten_bind_PointAttribute_GetAttributeTransformData_0 =
        function () {
          return (lb =
            a._emscripten_bind_PointAttribute_GetAttributeTransformData_0 =
              a.asm.w).apply(null, arguments)
        }),
      mb = (a._emscripten_bind_PointAttribute_attribute_type_0 = function () {
        return (mb = a._emscripten_bind_PointAttribute_attribute_type_0 =
          a.asm.x).apply(null, arguments)
      }),
      nb = (a._emscripten_bind_PointAttribute_data_type_0 = function () {
        return (nb = a._emscripten_bind_PointAttribute_data_type_0 =
          a.asm.y).apply(null, arguments)
      }),
      ob = (a._emscripten_bind_PointAttribute_num_components_0 = function () {
        return (ob = a._emscripten_bind_PointAttribute_num_components_0 =
          a.asm.z).apply(null, arguments)
      }),
      pb = (a._emscripten_bind_PointAttribute_normalized_0 = function () {
        return (pb = a._emscripten_bind_PointAttribute_normalized_0 =
          a.asm.A).apply(null, arguments)
      }),
      qb = (a._emscripten_bind_PointAttribute_byte_stride_0 = function () {
        return (qb = a._emscripten_bind_PointAttribute_byte_stride_0 =
          a.asm.B).apply(null, arguments)
      }),
      rb = (a._emscripten_bind_PointAttribute_byte_offset_0 = function () {
        return (rb = a._emscripten_bind_PointAttribute_byte_offset_0 =
          a.asm.C).apply(null, arguments)
      }),
      sb = (a._emscripten_bind_PointAttribute_unique_id_0 = function () {
        return (sb = a._emscripten_bind_PointAttribute_unique_id_0 =
          a.asm.D).apply(null, arguments)
      }),
      tb = (a._emscripten_bind_PointAttribute___destroy___0 = function () {
        return (tb = a._emscripten_bind_PointAttribute___destroy___0 =
          a.asm.E).apply(null, arguments)
      }),
      Ka =
        (a._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0 =
          function () {
            return (Ka =
              a._emscripten_bind_AttributeQuantizationTransform_AttributeQuantizationTransform_0 =
                a.asm.F).apply(null, arguments)
          }),
      ub =
        (a._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1 =
          function () {
            return (ub =
              a._emscripten_bind_AttributeQuantizationTransform_InitFromAttribute_1 =
                a.asm.G).apply(null, arguments)
          }),
      vb =
        (a._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0 =
          function () {
            return (vb =
              a._emscripten_bind_AttributeQuantizationTransform_quantization_bits_0 =
                a.asm.H).apply(null, arguments)
          }),
      wb = (a._emscripten_bind_AttributeQuantizationTransform_min_value_1 =
        function () {
          return (wb =
            a._emscripten_bind_AttributeQuantizationTransform_min_value_1 =
              a.asm.I).apply(null, arguments)
        }),
      xb = (a._emscripten_bind_AttributeQuantizationTransform_range_0 =
        function () {
          return (xb =
            a._emscripten_bind_AttributeQuantizationTransform_range_0 =
              a.asm.J).apply(null, arguments)
        }),
      yb = (a._emscripten_bind_AttributeQuantizationTransform___destroy___0 =
        function () {
          return (yb =
            a._emscripten_bind_AttributeQuantizationTransform___destroy___0 =
              a.asm.K).apply(null, arguments)
        }),
      La =
        (a._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0 =
          function () {
            return (La =
              a._emscripten_bind_AttributeOctahedronTransform_AttributeOctahedronTransform_0 =
                a.asm.L).apply(null, arguments)
          }),
      zb =
        (a._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1 =
          function () {
            return (zb =
              a._emscripten_bind_AttributeOctahedronTransform_InitFromAttribute_1 =
                a.asm.M).apply(null, arguments)
          }),
      Ab =
        (a._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0 =
          function () {
            return (Ab =
              a._emscripten_bind_AttributeOctahedronTransform_quantization_bits_0 =
                a.asm.N).apply(null, arguments)
          }),
      Bb = (a._emscripten_bind_AttributeOctahedronTransform___destroy___0 =
        function () {
          return (Bb =
            a._emscripten_bind_AttributeOctahedronTransform___destroy___0 =
              a.asm.O).apply(null, arguments)
        }),
      Ma = (a._emscripten_bind_PointCloud_PointCloud_0 = function () {
        return (Ma = a._emscripten_bind_PointCloud_PointCloud_0 =
          a.asm.P).apply(null, arguments)
      }),
      Cb = (a._emscripten_bind_PointCloud_num_attributes_0 = function () {
        return (Cb = a._emscripten_bind_PointCloud_num_attributes_0 =
          a.asm.Q).apply(null, arguments)
      }),
      Db = (a._emscripten_bind_PointCloud_num_points_0 = function () {
        return (Db = a._emscripten_bind_PointCloud_num_points_0 =
          a.asm.R).apply(null, arguments)
      }),
      Eb = (a._emscripten_bind_PointCloud___destroy___0 = function () {
        return (Eb = a._emscripten_bind_PointCloud___destroy___0 =
          a.asm.S).apply(null, arguments)
      }),
      Na = (a._emscripten_bind_Mesh_Mesh_0 = function () {
        return (Na = a._emscripten_bind_Mesh_Mesh_0 = a.asm.T).apply(
          null,
          arguments
        )
      }),
      Fb = (a._emscripten_bind_Mesh_num_faces_0 = function () {
        return (Fb = a._emscripten_bind_Mesh_num_faces_0 = a.asm.U).apply(
          null,
          arguments
        )
      }),
      Gb = (a._emscripten_bind_Mesh_num_attributes_0 = function () {
        return (Gb = a._emscripten_bind_Mesh_num_attributes_0 = a.asm.V).apply(
          null,
          arguments
        )
      }),
      Hb = (a._emscripten_bind_Mesh_num_points_0 = function () {
        return (Hb = a._emscripten_bind_Mesh_num_points_0 = a.asm.W).apply(
          null,
          arguments
        )
      }),
      Ib = (a._emscripten_bind_Mesh___destroy___0 = function () {
        return (Ib = a._emscripten_bind_Mesh___destroy___0 = a.asm.X).apply(
          null,
          arguments
        )
      }),
      Oa = (a._emscripten_bind_Metadata_Metadata_0 = function () {
        return (Oa = a._emscripten_bind_Metadata_Metadata_0 = a.asm.Y).apply(
          null,
          arguments
        )
      }),
      Jb = (a._emscripten_bind_Metadata___destroy___0 = function () {
        return (Jb = a._emscripten_bind_Metadata___destroy___0 = a.asm.Z).apply(
          null,
          arguments
        )
      }),
      Kb = (a._emscripten_bind_Status_code_0 = function () {
        return (Kb = a._emscripten_bind_Status_code_0 = a.asm._).apply(
          null,
          arguments
        )
      }),
      Lb = (a._emscripten_bind_Status_ok_0 = function () {
        return (Lb = a._emscripten_bind_Status_ok_0 = a.asm.$).apply(
          null,
          arguments
        )
      }),
      Mb = (a._emscripten_bind_Status_error_msg_0 = function () {
        return (Mb = a._emscripten_bind_Status_error_msg_0 = a.asm.aa).apply(
          null,
          arguments
        )
      }),
      Nb = (a._emscripten_bind_Status___destroy___0 = function () {
        return (Nb = a._emscripten_bind_Status___destroy___0 = a.asm.ba).apply(
          null,
          arguments
        )
      }),
      Pa = (a._emscripten_bind_DracoFloat32Array_DracoFloat32Array_0 =
        function () {
          return (Pa =
            a._emscripten_bind_DracoFloat32Array_DracoFloat32Array_0 =
              a.asm.ca).apply(null, arguments)
        }),
      Ob = (a._emscripten_bind_DracoFloat32Array_GetValue_1 = function () {
        return (Ob = a._emscripten_bind_DracoFloat32Array_GetValue_1 =
          a.asm.da).apply(null, arguments)
      }),
      Pb = (a._emscripten_bind_DracoFloat32Array_size_0 = function () {
        return (Pb = a._emscripten_bind_DracoFloat32Array_size_0 =
          a.asm.ea).apply(null, arguments)
      }),
      Qb = (a._emscripten_bind_DracoFloat32Array___destroy___0 = function () {
        return (Qb = a._emscripten_bind_DracoFloat32Array___destroy___0 =
          a.asm.fa).apply(null, arguments)
      }),
      Qa = (a._emscripten_bind_DracoInt8Array_DracoInt8Array_0 = function () {
        return (Qa = a._emscripten_bind_DracoInt8Array_DracoInt8Array_0 =
          a.asm.ga).apply(null, arguments)
      }),
      Rb = (a._emscripten_bind_DracoInt8Array_GetValue_1 = function () {
        return (Rb = a._emscripten_bind_DracoInt8Array_GetValue_1 =
          a.asm.ha).apply(null, arguments)
      }),
      Sb = (a._emscripten_bind_DracoInt8Array_size_0 = function () {
        return (Sb = a._emscripten_bind_DracoInt8Array_size_0 = a.asm.ia).apply(
          null,
          arguments
        )
      }),
      Tb = (a._emscripten_bind_DracoInt8Array___destroy___0 = function () {
        return (Tb = a._emscripten_bind_DracoInt8Array___destroy___0 =
          a.asm.ja).apply(null, arguments)
      }),
      Ra = (a._emscripten_bind_DracoUInt8Array_DracoUInt8Array_0 = function () {
        return (Ra = a._emscripten_bind_DracoUInt8Array_DracoUInt8Array_0 =
          a.asm.ka).apply(null, arguments)
      }),
      Ub = (a._emscripten_bind_DracoUInt8Array_GetValue_1 = function () {
        return (Ub = a._emscripten_bind_DracoUInt8Array_GetValue_1 =
          a.asm.la).apply(null, arguments)
      }),
      Vb = (a._emscripten_bind_DracoUInt8Array_size_0 = function () {
        return (Vb = a._emscripten_bind_DracoUInt8Array_size_0 =
          a.asm.ma).apply(null, arguments)
      }),
      Wb = (a._emscripten_bind_DracoUInt8Array___destroy___0 = function () {
        return (Wb = a._emscripten_bind_DracoUInt8Array___destroy___0 =
          a.asm.na).apply(null, arguments)
      }),
      Sa = (a._emscripten_bind_DracoInt16Array_DracoInt16Array_0 = function () {
        return (Sa = a._emscripten_bind_DracoInt16Array_DracoInt16Array_0 =
          a.asm.oa).apply(null, arguments)
      }),
      Xb = (a._emscripten_bind_DracoInt16Array_GetValue_1 = function () {
        return (Xb = a._emscripten_bind_DracoInt16Array_GetValue_1 =
          a.asm.pa).apply(null, arguments)
      }),
      Yb = (a._emscripten_bind_DracoInt16Array_size_0 = function () {
        return (Yb = a._emscripten_bind_DracoInt16Array_size_0 =
          a.asm.qa).apply(null, arguments)
      }),
      Zb = (a._emscripten_bind_DracoInt16Array___destroy___0 = function () {
        return (Zb = a._emscripten_bind_DracoInt16Array___destroy___0 =
          a.asm.ra).apply(null, arguments)
      }),
      Ta = (a._emscripten_bind_DracoUInt16Array_DracoUInt16Array_0 =
        function () {
          return (Ta = a._emscripten_bind_DracoUInt16Array_DracoUInt16Array_0 =
            a.asm.sa).apply(null, arguments)
        }),
      $b = (a._emscripten_bind_DracoUInt16Array_GetValue_1 = function () {
        return ($b = a._emscripten_bind_DracoUInt16Array_GetValue_1 =
          a.asm.ta).apply(null, arguments)
      }),
      ac = (a._emscripten_bind_DracoUInt16Array_size_0 = function () {
        return (ac = a._emscripten_bind_DracoUInt16Array_size_0 =
          a.asm.ua).apply(null, arguments)
      }),
      bc = (a._emscripten_bind_DracoUInt16Array___destroy___0 = function () {
        return (bc = a._emscripten_bind_DracoUInt16Array___destroy___0 =
          a.asm.va).apply(null, arguments)
      }),
      Ua = (a._emscripten_bind_DracoInt32Array_DracoInt32Array_0 = function () {
        return (Ua = a._emscripten_bind_DracoInt32Array_DracoInt32Array_0 =
          a.asm.wa).apply(null, arguments)
      }),
      cc = (a._emscripten_bind_DracoInt32Array_GetValue_1 = function () {
        return (cc = a._emscripten_bind_DracoInt32Array_GetValue_1 =
          a.asm.xa).apply(null, arguments)
      }),
      dc = (a._emscripten_bind_DracoInt32Array_size_0 = function () {
        return (dc = a._emscripten_bind_DracoInt32Array_size_0 =
          a.asm.ya).apply(null, arguments)
      }),
      ec = (a._emscripten_bind_DracoInt32Array___destroy___0 = function () {
        return (ec = a._emscripten_bind_DracoInt32Array___destroy___0 =
          a.asm.za).apply(null, arguments)
      }),
      Va = (a._emscripten_bind_DracoUInt32Array_DracoUInt32Array_0 =
        function () {
          return (Va = a._emscripten_bind_DracoUInt32Array_DracoUInt32Array_0 =
            a.asm.Aa).apply(null, arguments)
        }),
      fc = (a._emscripten_bind_DracoUInt32Array_GetValue_1 = function () {
        return (fc = a._emscripten_bind_DracoUInt32Array_GetValue_1 =
          a.asm.Ba).apply(null, arguments)
      }),
      gc = (a._emscripten_bind_DracoUInt32Array_size_0 = function () {
        return (gc = a._emscripten_bind_DracoUInt32Array_size_0 =
          a.asm.Ca).apply(null, arguments)
      }),
      hc = (a._emscripten_bind_DracoUInt32Array___destroy___0 = function () {
        return (hc = a._emscripten_bind_DracoUInt32Array___destroy___0 =
          a.asm.Da).apply(null, arguments)
      }),
      Wa = (a._emscripten_bind_MetadataQuerier_MetadataQuerier_0 = function () {
        return (Wa = a._emscripten_bind_MetadataQuerier_MetadataQuerier_0 =
          a.asm.Ea).apply(null, arguments)
      }),
      ic = (a._emscripten_bind_MetadataQuerier_HasEntry_2 = function () {
        return (ic = a._emscripten_bind_MetadataQuerier_HasEntry_2 =
          a.asm.Fa).apply(null, arguments)
      }),
      jc = (a._emscripten_bind_MetadataQuerier_GetIntEntry_2 = function () {
        return (jc = a._emscripten_bind_MetadataQuerier_GetIntEntry_2 =
          a.asm.Ga).apply(null, arguments)
      }),
      kc = (a._emscripten_bind_MetadataQuerier_GetIntEntryArray_3 =
        function () {
          return (kc = a._emscripten_bind_MetadataQuerier_GetIntEntryArray_3 =
            a.asm.Ha).apply(null, arguments)
        }),
      lc = (a._emscripten_bind_MetadataQuerier_GetDoubleEntry_2 = function () {
        return (lc = a._emscripten_bind_MetadataQuerier_GetDoubleEntry_2 =
          a.asm.Ia).apply(null, arguments)
      }),
      mc = (a._emscripten_bind_MetadataQuerier_GetStringEntry_2 = function () {
        return (mc = a._emscripten_bind_MetadataQuerier_GetStringEntry_2 =
          a.asm.Ja).apply(null, arguments)
      }),
      nc = (a._emscripten_bind_MetadataQuerier_NumEntries_1 = function () {
        return (nc = a._emscripten_bind_MetadataQuerier_NumEntries_1 =
          a.asm.Ka).apply(null, arguments)
      }),
      oc = (a._emscripten_bind_MetadataQuerier_GetEntryName_2 = function () {
        return (oc = a._emscripten_bind_MetadataQuerier_GetEntryName_2 =
          a.asm.La).apply(null, arguments)
      }),
      pc = (a._emscripten_bind_MetadataQuerier___destroy___0 = function () {
        return (pc = a._emscripten_bind_MetadataQuerier___destroy___0 =
          a.asm.Ma).apply(null, arguments)
      }),
      Xa = (a._emscripten_bind_Decoder_Decoder_0 = function () {
        return (Xa = a._emscripten_bind_Decoder_Decoder_0 = a.asm.Na).apply(
          null,
          arguments
        )
      }),
      qc = (a._emscripten_bind_Decoder_DecodeArrayToPointCloud_3 = function () {
        return (qc = a._emscripten_bind_Decoder_DecodeArrayToPointCloud_3 =
          a.asm.Oa).apply(null, arguments)
      }),
      rc = (a._emscripten_bind_Decoder_DecodeArrayToMesh_3 = function () {
        return (rc = a._emscripten_bind_Decoder_DecodeArrayToMesh_3 =
          a.asm.Pa).apply(null, arguments)
      }),
      sc = (a._emscripten_bind_Decoder_GetAttributeId_2 = function () {
        return (sc = a._emscripten_bind_Decoder_GetAttributeId_2 =
          a.asm.Qa).apply(null, arguments)
      }),
      tc = (a._emscripten_bind_Decoder_GetAttributeIdByName_2 = function () {
        return (tc = a._emscripten_bind_Decoder_GetAttributeIdByName_2 =
          a.asm.Ra).apply(null, arguments)
      }),
      uc = (a._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3 =
        function () {
          return (uc =
            a._emscripten_bind_Decoder_GetAttributeIdByMetadataEntry_3 =
              a.asm.Sa).apply(null, arguments)
        }),
      vc = (a._emscripten_bind_Decoder_GetAttribute_2 = function () {
        return (vc = a._emscripten_bind_Decoder_GetAttribute_2 =
          a.asm.Ta).apply(null, arguments)
      }),
      wc = (a._emscripten_bind_Decoder_GetAttributeByUniqueId_2 = function () {
        return (wc = a._emscripten_bind_Decoder_GetAttributeByUniqueId_2 =
          a.asm.Ua).apply(null, arguments)
      }),
      xc = (a._emscripten_bind_Decoder_GetMetadata_1 = function () {
        return (xc = a._emscripten_bind_Decoder_GetMetadata_1 = a.asm.Va).apply(
          null,
          arguments
        )
      }),
      yc = (a._emscripten_bind_Decoder_GetAttributeMetadata_2 = function () {
        return (yc = a._emscripten_bind_Decoder_GetAttributeMetadata_2 =
          a.asm.Wa).apply(null, arguments)
      }),
      zc = (a._emscripten_bind_Decoder_GetFaceFromMesh_3 = function () {
        return (zc = a._emscripten_bind_Decoder_GetFaceFromMesh_3 =
          a.asm.Xa).apply(null, arguments)
      }),
      Ac = (a._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2 =
        function () {
          return (Ac = a._emscripten_bind_Decoder_GetTriangleStripsFromMesh_2 =
            a.asm.Ya).apply(null, arguments)
        }),
      Bc = (a._emscripten_bind_Decoder_GetTrianglesUInt16Array_3 = function () {
        return (Bc = a._emscripten_bind_Decoder_GetTrianglesUInt16Array_3 =
          a.asm.Za).apply(null, arguments)
      }),
      Cc = (a._emscripten_bind_Decoder_GetTrianglesUInt32Array_3 = function () {
        return (Cc = a._emscripten_bind_Decoder_GetTrianglesUInt32Array_3 =
          a.asm._a).apply(null, arguments)
      }),
      Dc = (a._emscripten_bind_Decoder_GetAttributeFloat_3 = function () {
        return (Dc = a._emscripten_bind_Decoder_GetAttributeFloat_3 =
          a.asm.$a).apply(null, arguments)
      }),
      Ec = (a._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3 =
        function () {
          return (Ec =
            a._emscripten_bind_Decoder_GetAttributeFloatForAllPoints_3 =
              a.asm.ab).apply(null, arguments)
        }),
      Fc = (a._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3 =
        function () {
          return (Fc =
            a._emscripten_bind_Decoder_GetAttributeIntForAllPoints_3 =
              a.asm.bb).apply(null, arguments)
        }),
      Gc = (a._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3 =
        function () {
          return (Gc =
            a._emscripten_bind_Decoder_GetAttributeInt8ForAllPoints_3 =
              a.asm.cb).apply(null, arguments)
        }),
      Hc = (a._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3 =
        function () {
          return (Hc =
            a._emscripten_bind_Decoder_GetAttributeUInt8ForAllPoints_3 =
              a.asm.db).apply(null, arguments)
        }),
      Ic = (a._emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3 =
        function () {
          return (Ic =
            a._emscripten_bind_Decoder_GetAttributeInt16ForAllPoints_3 =
              a.asm.eb).apply(null, arguments)
        }),
      Jc = (a._emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3 =
        function () {
          return (Jc =
            a._emscripten_bind_Decoder_GetAttributeUInt16ForAllPoints_3 =
              a.asm.fb).apply(null, arguments)
        }),
      Kc = (a._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3 =
        function () {
          return (Kc =
            a._emscripten_bind_Decoder_GetAttributeInt32ForAllPoints_3 =
              a.asm.gb).apply(null, arguments)
        }),
      Lc = (a._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3 =
        function () {
          return (Lc =
            a._emscripten_bind_Decoder_GetAttributeUInt32ForAllPoints_3 =
              a.asm.hb).apply(null, arguments)
        }),
      Mc = (a._emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5 =
        function () {
          return (Mc =
            a._emscripten_bind_Decoder_GetAttributeDataArrayForAllPoints_5 =
              a.asm.ib).apply(null, arguments)
        }),
      Nc = (a._emscripten_bind_Decoder_SkipAttributeTransform_1 = function () {
        return (Nc = a._emscripten_bind_Decoder_SkipAttributeTransform_1 =
          a.asm.jb).apply(null, arguments)
      }),
      Oc = (a._emscripten_bind_Decoder_GetEncodedGeometryType_Deprecated_1 =
        function () {
          return (Oc =
            a._emscripten_bind_Decoder_GetEncodedGeometryType_Deprecated_1 =
              a.asm.kb).apply(null, arguments)
        }),
      Pc = (a._emscripten_bind_Decoder_DecodeBufferToPointCloud_2 =
        function () {
          return (Pc = a._emscripten_bind_Decoder_DecodeBufferToPointCloud_2 =
            a.asm.lb).apply(null, arguments)
        }),
      Qc = (a._emscripten_bind_Decoder_DecodeBufferToMesh_2 = function () {
        return (Qc = a._emscripten_bind_Decoder_DecodeBufferToMesh_2 =
          a.asm.mb).apply(null, arguments)
      }),
      Rc = (a._emscripten_bind_Decoder___destroy___0 = function () {
        return (Rc = a._emscripten_bind_Decoder___destroy___0 = a.asm.nb).apply(
          null,
          arguments
        )
      }),
      Sc =
        (a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM =
          function () {
            return (Sc =
              a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_INVALID_TRANSFORM =
                a.asm.ob).apply(null, arguments)
          }),
      Tc =
        (a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM =
          function () {
            return (Tc =
              a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_NO_TRANSFORM =
                a.asm.pb).apply(null, arguments)
          }),
      Uc =
        (a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM =
          function () {
            return (Uc =
              a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_QUANTIZATION_TRANSFORM =
                a.asm.qb).apply(null, arguments)
          }),
      Vc =
        (a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM =
          function () {
            return (Vc =
              a._emscripten_enum_draco_AttributeTransformType_ATTRIBUTE_OCTAHEDRON_TRANSFORM =
                a.asm.rb).apply(null, arguments)
          }),
      Wc = (a._emscripten_enum_draco_GeometryAttribute_Type_INVALID =
        function () {
          return (Wc = a._emscripten_enum_draco_GeometryAttribute_Type_INVALID =
            a.asm.sb).apply(null, arguments)
        }),
      Xc = (a._emscripten_enum_draco_GeometryAttribute_Type_POSITION =
        function () {
          return (Xc =
            a._emscripten_enum_draco_GeometryAttribute_Type_POSITION =
              a.asm.tb).apply(null, arguments)
        }),
      Yc = (a._emscripten_enum_draco_GeometryAttribute_Type_NORMAL =
        function () {
          return (Yc = a._emscripten_enum_draco_GeometryAttribute_Type_NORMAL =
            a.asm.ub).apply(null, arguments)
        }),
      Zc = (a._emscripten_enum_draco_GeometryAttribute_Type_COLOR =
        function () {
          return (Zc = a._emscripten_enum_draco_GeometryAttribute_Type_COLOR =
            a.asm.vb).apply(null, arguments)
        }),
      $c = (a._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD =
        function () {
          return ($c =
            a._emscripten_enum_draco_GeometryAttribute_Type_TEX_COORD =
              a.asm.wb).apply(null, arguments)
        }),
      ad = (a._emscripten_enum_draco_GeometryAttribute_Type_GENERIC =
        function () {
          return (ad = a._emscripten_enum_draco_GeometryAttribute_Type_GENERIC =
            a.asm.xb).apply(null, arguments)
        }),
      bd = (a._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE =
        function () {
          return (bd =
            a._emscripten_enum_draco_EncodedGeometryType_INVALID_GEOMETRY_TYPE =
              a.asm.yb).apply(null, arguments)
        }),
      cd = (a._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD =
        function () {
          return (cd =
            a._emscripten_enum_draco_EncodedGeometryType_POINT_CLOUD =
              a.asm.zb).apply(null, arguments)
        }),
      dd = (a._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH =
        function () {
          return (dd =
            a._emscripten_enum_draco_EncodedGeometryType_TRIANGULAR_MESH =
              a.asm.Ab).apply(null, arguments)
        }),
      ed = (a._emscripten_enum_draco_DataType_DT_INVALID = function () {
        return (ed = a._emscripten_enum_draco_DataType_DT_INVALID =
          a.asm.Bb).apply(null, arguments)
      }),
      fd = (a._emscripten_enum_draco_DataType_DT_INT8 = function () {
        return (fd = a._emscripten_enum_draco_DataType_DT_INT8 =
          a.asm.Cb).apply(null, arguments)
      }),
      gd = (a._emscripten_enum_draco_DataType_DT_UINT8 = function () {
        return (gd = a._emscripten_enum_draco_DataType_DT_UINT8 =
          a.asm.Db).apply(null, arguments)
      }),
      hd = (a._emscripten_enum_draco_DataType_DT_INT16 = function () {
        return (hd = a._emscripten_enum_draco_DataType_DT_INT16 =
          a.asm.Eb).apply(null, arguments)
      }),
      id = (a._emscripten_enum_draco_DataType_DT_UINT16 = function () {
        return (id = a._emscripten_enum_draco_DataType_DT_UINT16 =
          a.asm.Fb).apply(null, arguments)
      }),
      jd = (a._emscripten_enum_draco_DataType_DT_INT32 = function () {
        return (jd = a._emscripten_enum_draco_DataType_DT_INT32 =
          a.asm.Gb).apply(null, arguments)
      }),
      kd = (a._emscripten_enum_draco_DataType_DT_UINT32 = function () {
        return (kd = a._emscripten_enum_draco_DataType_DT_UINT32 =
          a.asm.Hb).apply(null, arguments)
      }),
      ld = (a._emscripten_enum_draco_DataType_DT_INT64 = function () {
        return (ld = a._emscripten_enum_draco_DataType_DT_INT64 =
          a.asm.Ib).apply(null, arguments)
      }),
      md = (a._emscripten_enum_draco_DataType_DT_UINT64 = function () {
        return (md = a._emscripten_enum_draco_DataType_DT_UINT64 =
          a.asm.Jb).apply(null, arguments)
      }),
      nd = (a._emscripten_enum_draco_DataType_DT_FLOAT32 = function () {
        return (nd = a._emscripten_enum_draco_DataType_DT_FLOAT32 =
          a.asm.Kb).apply(null, arguments)
      }),
      od = (a._emscripten_enum_draco_DataType_DT_FLOAT64 = function () {
        return (od = a._emscripten_enum_draco_DataType_DT_FLOAT64 =
          a.asm.Lb).apply(null, arguments)
      }),
      pd = (a._emscripten_enum_draco_DataType_DT_BOOL = function () {
        return (pd = a._emscripten_enum_draco_DataType_DT_BOOL =
          a.asm.Mb).apply(null, arguments)
      }),
      qd = (a._emscripten_enum_draco_DataType_DT_TYPES_COUNT = function () {
        return (qd = a._emscripten_enum_draco_DataType_DT_TYPES_COUNT =
          a.asm.Nb).apply(null, arguments)
      }),
      rd = (a._emscripten_enum_draco_StatusCode_OK = function () {
        return (rd = a._emscripten_enum_draco_StatusCode_OK = a.asm.Ob).apply(
          null,
          arguments
        )
      }),
      sd = (a._emscripten_enum_draco_StatusCode_DRACO_ERROR = function () {
        return (sd = a._emscripten_enum_draco_StatusCode_DRACO_ERROR =
          a.asm.Pb).apply(null, arguments)
      }),
      td = (a._emscripten_enum_draco_StatusCode_IO_ERROR = function () {
        return (td = a._emscripten_enum_draco_StatusCode_IO_ERROR =
          a.asm.Qb).apply(null, arguments)
      }),
      ud = (a._emscripten_enum_draco_StatusCode_INVALID_PARAMETER =
        function () {
          return (ud = a._emscripten_enum_draco_StatusCode_INVALID_PARAMETER =
            a.asm.Rb).apply(null, arguments)
        }),
      vd = (a._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION =
        function () {
          return (vd = a._emscripten_enum_draco_StatusCode_UNSUPPORTED_VERSION =
            a.asm.Sb).apply(null, arguments)
        }),
      wd = (a._emscripten_enum_draco_StatusCode_UNKNOWN_VERSION = function () {
        return (wd = a._emscripten_enum_draco_StatusCode_UNKNOWN_VERSION =
          a.asm.Tb).apply(null, arguments)
      }),
      db = (a._malloc = function () {
        return (db = a._malloc = a.asm.Ub).apply(null, arguments)
      })
    a._free = function () {
      return (a._free = a.asm.Vb).apply(null, arguments)
    }
    var la
    ia = function b() {
      la || Q()
      la || (ia = b)
    }
    a.run = Q
    if (a.preInit)
      for (
        'function' == typeof a.preInit && (a.preInit = [a.preInit]);
        0 < a.preInit.length;

      )
        a.preInit.pop()()
    Q()
    u.prototype = Object.create(u.prototype)
    u.prototype.constructor = u
    u.prototype.__class__ = u
    u.__cache__ = {}
    a.WrapperObject = u
    a.getCache = x
    a.wrapPointer = D
    a.castObject = function (b, c) {
      return D(b.ptr, c)
    }
    a.NULL = D(0)
    a.destroy = function (b) {
      if (!b.__destroy__)
        throw 'Error: Cannot destroy object. (Did you create it yourself?)'
      b.__destroy__()
      delete x(b.__class__)[b.ptr]
    }
    a.compare = function (b, c) {
      return b.ptr === c.ptr
    }
    a.getPointer = function (b) {
      return b.ptr
    }
    a.getClass = function (b) {
      return b.__class__
    }
    var r = {
      buffer: 0,
      size: 0,
      pos: 0,
      temps: [],
      needed: 0,
      prepare: function () {
        if (r.needed) {
          for (var b = 0; b < r.temps.length; b++) a._free(r.temps[b])
          r.temps.length = 0
          a._free(r.buffer)
          r.buffer = 0
          r.size += r.needed
          r.needed = 0
        }
        r.buffer ||
          ((r.size += 128),
          (r.buffer = a._malloc(r.size)),
          r.buffer || f(void 0))
        r.pos = 0
      },
      alloc: function (b, c) {
        r.buffer || f(void 0)
        b = b.length * c.BYTES_PER_ELEMENT
        b = (b + 7) & -8
        r.pos + b >= r.size
          ? (0 < b || f(void 0),
            (r.needed += b),
            (c = a._malloc(b)),
            r.temps.push(c))
          : ((c = r.buffer + r.pos), (r.pos += b))
        return c
      },
      copy: function (b, c, d) {
        d >>>= 0
        switch (c.BYTES_PER_ELEMENT) {
          case 2:
            d >>>= 1
            break
          case 4:
            d >>>= 2
            break
          case 8:
            d >>>= 3
        }
        for (var g = 0; g < b.length; g++) c[d + g] = b[g]
      }
    }
    Z.prototype = Object.create(u.prototype)
    Z.prototype.constructor = Z
    Z.prototype.__class__ = Z
    Z.__cache__ = {}
    a.VoidPtr = Z
    Z.prototype.__destroy__ = Z.prototype.__destroy__ = function () {
      eb(this.ptr)
    }
    T.prototype = Object.create(u.prototype)
    T.prototype.constructor = T
    T.prototype.__class__ = T
    T.__cache__ = {}
    a.DecoderBuffer = T
    T.prototype.Init = T.prototype.Init = function (b, c) {
      var d = this.ptr
      r.prepare()
      'object' == typeof b && (b = sa(b))
      c && 'object' === typeof c && (c = c.ptr)
      fb(d, b, c)
    }
    T.prototype.__destroy__ = T.prototype.__destroy__ = function () {
      gb(this.ptr)
    }
    S.prototype = Object.create(u.prototype)
    S.prototype.constructor = S
    S.prototype.__class__ = S
    S.__cache__ = {}
    a.AttributeTransformData = S
    S.prototype.transform_type = S.prototype.transform_type = function () {
      return hb(this.ptr)
    }
    S.prototype.__destroy__ = S.prototype.__destroy__ = function () {
      ib(this.ptr)
    }
    X.prototype = Object.create(u.prototype)
    X.prototype.constructor = X
    X.prototype.__class__ = X
    X.__cache__ = {}
    a.GeometryAttribute = X
    X.prototype.__destroy__ = X.prototype.__destroy__ = function () {
      jb(this.ptr)
    }
    w.prototype = Object.create(u.prototype)
    w.prototype.constructor = w
    w.prototype.__class__ = w
    w.__cache__ = {}
    a.PointAttribute = w
    w.prototype.size = w.prototype.size = function () {
      return kb(this.ptr)
    }
    w.prototype.GetAttributeTransformData =
      w.prototype.GetAttributeTransformData = function () {
        return D(lb(this.ptr), S)
      }
    w.prototype.attribute_type = w.prototype.attribute_type = function () {
      return mb(this.ptr)
    }
    w.prototype.data_type = w.prototype.data_type = function () {
      return nb(this.ptr)
    }
    w.prototype.num_components = w.prototype.num_components = function () {
      return ob(this.ptr)
    }
    w.prototype.normalized = w.prototype.normalized = function () {
      return !!pb(this.ptr)
    }
    w.prototype.byte_stride = w.prototype.byte_stride = function () {
      return qb(this.ptr)
    }
    w.prototype.byte_offset = w.prototype.byte_offset = function () {
      return rb(this.ptr)
    }
    w.prototype.unique_id = w.prototype.unique_id = function () {
      return sb(this.ptr)
    }
    w.prototype.__destroy__ = w.prototype.__destroy__ = function () {
      tb(this.ptr)
    }
    C.prototype = Object.create(u.prototype)
    C.prototype.constructor = C
    C.prototype.__class__ = C
    C.__cache__ = {}
    a.AttributeQuantizationTransform = C
    C.prototype.InitFromAttribute = C.prototype.InitFromAttribute = function (
      b
    ) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return !!ub(c, b)
    }
    C.prototype.quantization_bits = C.prototype.quantization_bits =
      function () {
        return vb(this.ptr)
      }
    C.prototype.min_value = C.prototype.min_value = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return wb(c, b)
    }
    C.prototype.range = C.prototype.range = function () {
      return xb(this.ptr)
    }
    C.prototype.__destroy__ = C.prototype.__destroy__ = function () {
      yb(this.ptr)
    }
    H.prototype = Object.create(u.prototype)
    H.prototype.constructor = H
    H.prototype.__class__ = H
    H.__cache__ = {}
    a.AttributeOctahedronTransform = H
    H.prototype.InitFromAttribute = H.prototype.InitFromAttribute = function (
      b
    ) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return !!zb(c, b)
    }
    H.prototype.quantization_bits = H.prototype.quantization_bits =
      function () {
        return Ab(this.ptr)
      }
    H.prototype.__destroy__ = H.prototype.__destroy__ = function () {
      Bb(this.ptr)
    }
    I.prototype = Object.create(u.prototype)
    I.prototype.constructor = I
    I.prototype.__class__ = I
    I.__cache__ = {}
    a.PointCloud = I
    I.prototype.num_attributes = I.prototype.num_attributes = function () {
      return Cb(this.ptr)
    }
    I.prototype.num_points = I.prototype.num_points = function () {
      return Db(this.ptr)
    }
    I.prototype.__destroy__ = I.prototype.__destroy__ = function () {
      Eb(this.ptr)
    }
    E.prototype = Object.create(u.prototype)
    E.prototype.constructor = E
    E.prototype.__class__ = E
    E.__cache__ = {}
    a.Mesh = E
    E.prototype.num_faces = E.prototype.num_faces = function () {
      return Fb(this.ptr)
    }
    E.prototype.num_attributes = E.prototype.num_attributes = function () {
      return Gb(this.ptr)
    }
    E.prototype.num_points = E.prototype.num_points = function () {
      return Hb(this.ptr)
    }
    E.prototype.__destroy__ = E.prototype.__destroy__ = function () {
      Ib(this.ptr)
    }
    U.prototype = Object.create(u.prototype)
    U.prototype.constructor = U
    U.prototype.__class__ = U
    U.__cache__ = {}
    a.Metadata = U
    U.prototype.__destroy__ = U.prototype.__destroy__ = function () {
      Jb(this.ptr)
    }
    B.prototype = Object.create(u.prototype)
    B.prototype.constructor = B
    B.prototype.__class__ = B
    B.__cache__ = {}
    a.Status = B
    B.prototype.code = B.prototype.code = function () {
      return Kb(this.ptr)
    }
    B.prototype.ok = B.prototype.ok = function () {
      return !!Lb(this.ptr)
    }
    B.prototype.error_msg = B.prototype.error_msg = function () {
      return h(Mb(this.ptr))
    }
    B.prototype.__destroy__ = B.prototype.__destroy__ = function () {
      Nb(this.ptr)
    }
    J.prototype = Object.create(u.prototype)
    J.prototype.constructor = J
    J.prototype.__class__ = J
    J.__cache__ = {}
    a.DracoFloat32Array = J
    J.prototype.GetValue = J.prototype.GetValue = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return Ob(c, b)
    }
    J.prototype.size = J.prototype.size = function () {
      return Pb(this.ptr)
    }
    J.prototype.__destroy__ = J.prototype.__destroy__ = function () {
      Qb(this.ptr)
    }
    K.prototype = Object.create(u.prototype)
    K.prototype.constructor = K
    K.prototype.__class__ = K
    K.__cache__ = {}
    a.DracoInt8Array = K
    K.prototype.GetValue = K.prototype.GetValue = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return Rb(c, b)
    }
    K.prototype.size = K.prototype.size = function () {
      return Sb(this.ptr)
    }
    K.prototype.__destroy__ = K.prototype.__destroy__ = function () {
      Tb(this.ptr)
    }
    L.prototype = Object.create(u.prototype)
    L.prototype.constructor = L
    L.prototype.__class__ = L
    L.__cache__ = {}
    a.DracoUInt8Array = L
    L.prototype.GetValue = L.prototype.GetValue = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return Ub(c, b)
    }
    L.prototype.size = L.prototype.size = function () {
      return Vb(this.ptr)
    }
    L.prototype.__destroy__ = L.prototype.__destroy__ = function () {
      Wb(this.ptr)
    }
    M.prototype = Object.create(u.prototype)
    M.prototype.constructor = M
    M.prototype.__class__ = M
    M.__cache__ = {}
    a.DracoInt16Array = M
    M.prototype.GetValue = M.prototype.GetValue = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return Xb(c, b)
    }
    M.prototype.size = M.prototype.size = function () {
      return Yb(this.ptr)
    }
    M.prototype.__destroy__ = M.prototype.__destroy__ = function () {
      Zb(this.ptr)
    }
    N.prototype = Object.create(u.prototype)
    N.prototype.constructor = N
    N.prototype.__class__ = N
    N.__cache__ = {}
    a.DracoUInt16Array = N
    N.prototype.GetValue = N.prototype.GetValue = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return $b(c, b)
    }
    N.prototype.size = N.prototype.size = function () {
      return ac(this.ptr)
    }
    N.prototype.__destroy__ = N.prototype.__destroy__ = function () {
      bc(this.ptr)
    }
    O.prototype = Object.create(u.prototype)
    O.prototype.constructor = O
    O.prototype.__class__ = O
    O.__cache__ = {}
    a.DracoInt32Array = O
    O.prototype.GetValue = O.prototype.GetValue = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return cc(c, b)
    }
    O.prototype.size = O.prototype.size = function () {
      return dc(this.ptr)
    }
    O.prototype.__destroy__ = O.prototype.__destroy__ = function () {
      ec(this.ptr)
    }
    P.prototype = Object.create(u.prototype)
    P.prototype.constructor = P
    P.prototype.__class__ = P
    P.__cache__ = {}
    a.DracoUInt32Array = P
    P.prototype.GetValue = P.prototype.GetValue = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return fc(c, b)
    }
    P.prototype.size = P.prototype.size = function () {
      return gc(this.ptr)
    }
    P.prototype.__destroy__ = P.prototype.__destroy__ = function () {
      hc(this.ptr)
    }
    y.prototype = Object.create(u.prototype)
    y.prototype.constructor = y
    y.prototype.__class__ = y
    y.__cache__ = {}
    a.MetadataQuerier = y
    y.prototype.HasEntry = y.prototype.HasEntry = function (b, c) {
      var d = this.ptr
      r.prepare()
      b && 'object' === typeof b && (b = b.ptr)
      c = c && 'object' === typeof c ? c.ptr : aa(c)
      return !!ic(d, b, c)
    }
    y.prototype.GetIntEntry = y.prototype.GetIntEntry = function (b, c) {
      var d = this.ptr
      r.prepare()
      b && 'object' === typeof b && (b = b.ptr)
      c = c && 'object' === typeof c ? c.ptr : aa(c)
      return jc(d, b, c)
    }
    y.prototype.GetIntEntryArray = y.prototype.GetIntEntryArray = function (
      b,
      c,
      d
    ) {
      var g = this.ptr
      r.prepare()
      b && 'object' === typeof b && (b = b.ptr)
      c = c && 'object' === typeof c ? c.ptr : aa(c)
      d && 'object' === typeof d && (d = d.ptr)
      kc(g, b, c, d)
    }
    y.prototype.GetDoubleEntry = y.prototype.GetDoubleEntry = function (b, c) {
      var d = this.ptr
      r.prepare()
      b && 'object' === typeof b && (b = b.ptr)
      c = c && 'object' === typeof c ? c.ptr : aa(c)
      return lc(d, b, c)
    }
    y.prototype.GetStringEntry = y.prototype.GetStringEntry = function (b, c) {
      var d = this.ptr
      r.prepare()
      b && 'object' === typeof b && (b = b.ptr)
      c = c && 'object' === typeof c ? c.ptr : aa(c)
      return h(mc(d, b, c))
    }
    y.prototype.NumEntries = y.prototype.NumEntries = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return nc(c, b)
    }
    y.prototype.GetEntryName = y.prototype.GetEntryName = function (b, c) {
      var d = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      c && 'object' === typeof c && (c = c.ptr)
      return h(oc(d, b, c))
    }
    y.prototype.__destroy__ = y.prototype.__destroy__ = function () {
      pc(this.ptr)
    }
    m.prototype = Object.create(u.prototype)
    m.prototype.constructor = m
    m.prototype.__class__ = m
    m.__cache__ = {}
    a.Decoder = m
    m.prototype.DecodeArrayToPointCloud = m.prototype.DecodeArrayToPointCloud =
      function (b, c, d) {
        var g = this.ptr
        r.prepare()
        'object' == typeof b && (b = sa(b))
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return D(qc(g, b, c, d), B)
      }
    m.prototype.DecodeArrayToMesh = m.prototype.DecodeArrayToMesh = function (
      b,
      c,
      d
    ) {
      var g = this.ptr
      r.prepare()
      'object' == typeof b && (b = sa(b))
      c && 'object' === typeof c && (c = c.ptr)
      d && 'object' === typeof d && (d = d.ptr)
      return D(rc(g, b, c, d), B)
    }
    m.prototype.GetAttributeId = m.prototype.GetAttributeId = function (b, c) {
      var d = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      c && 'object' === typeof c && (c = c.ptr)
      return sc(d, b, c)
    }
    m.prototype.GetAttributeIdByName = m.prototype.GetAttributeIdByName =
      function (b, c) {
        var d = this.ptr
        r.prepare()
        b && 'object' === typeof b && (b = b.ptr)
        c = c && 'object' === typeof c ? c.ptr : aa(c)
        return tc(d, b, c)
      }
    m.prototype.GetAttributeIdByMetadataEntry =
      m.prototype.GetAttributeIdByMetadataEntry = function (b, c, d) {
        var g = this.ptr
        r.prepare()
        b && 'object' === typeof b && (b = b.ptr)
        c = c && 'object' === typeof c ? c.ptr : aa(c)
        d = d && 'object' === typeof d ? d.ptr : aa(d)
        return uc(g, b, c, d)
      }
    m.prototype.GetAttribute = m.prototype.GetAttribute = function (b, c) {
      var d = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      c && 'object' === typeof c && (c = c.ptr)
      return D(vc(d, b, c), w)
    }
    m.prototype.GetAttributeByUniqueId = m.prototype.GetAttributeByUniqueId =
      function (b, c) {
        var d = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        return D(wc(d, b, c), w)
      }
    m.prototype.GetMetadata = m.prototype.GetMetadata = function (b) {
      var c = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      return D(xc(c, b), U)
    }
    m.prototype.GetAttributeMetadata = m.prototype.GetAttributeMetadata =
      function (b, c) {
        var d = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        return D(yc(d, b, c), U)
      }
    m.prototype.GetFaceFromMesh = m.prototype.GetFaceFromMesh = function (
      b,
      c,
      d
    ) {
      var g = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      c && 'object' === typeof c && (c = c.ptr)
      d && 'object' === typeof d && (d = d.ptr)
      return !!zc(g, b, c, d)
    }
    m.prototype.GetTriangleStripsFromMesh =
      m.prototype.GetTriangleStripsFromMesh = function (b, c) {
        var d = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        return Ac(d, b, c)
      }
    m.prototype.GetTrianglesUInt16Array = m.prototype.GetTrianglesUInt16Array =
      function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Bc(g, b, c, d)
      }
    m.prototype.GetTrianglesUInt32Array = m.prototype.GetTrianglesUInt32Array =
      function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Cc(g, b, c, d)
      }
    m.prototype.GetAttributeFloat = m.prototype.GetAttributeFloat = function (
      b,
      c,
      d
    ) {
      var g = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      c && 'object' === typeof c && (c = c.ptr)
      d && 'object' === typeof d && (d = d.ptr)
      return !!Dc(g, b, c, d)
    }
    m.prototype.GetAttributeFloatForAllPoints =
      m.prototype.GetAttributeFloatForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Ec(g, b, c, d)
      }
    m.prototype.GetAttributeIntForAllPoints =
      m.prototype.GetAttributeIntForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Fc(g, b, c, d)
      }
    m.prototype.GetAttributeInt8ForAllPoints =
      m.prototype.GetAttributeInt8ForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Gc(g, b, c, d)
      }
    m.prototype.GetAttributeUInt8ForAllPoints =
      m.prototype.GetAttributeUInt8ForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Hc(g, b, c, d)
      }
    m.prototype.GetAttributeInt16ForAllPoints =
      m.prototype.GetAttributeInt16ForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Ic(g, b, c, d)
      }
    m.prototype.GetAttributeUInt16ForAllPoints =
      m.prototype.GetAttributeUInt16ForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Jc(g, b, c, d)
      }
    m.prototype.GetAttributeInt32ForAllPoints =
      m.prototype.GetAttributeInt32ForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Kc(g, b, c, d)
      }
    m.prototype.GetAttributeUInt32ForAllPoints =
      m.prototype.GetAttributeUInt32ForAllPoints = function (b, c, d) {
        var g = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        return !!Lc(g, b, c, d)
      }
    m.prototype.GetAttributeDataArrayForAllPoints =
      m.prototype.GetAttributeDataArrayForAllPoints = function (b, c, d, g, t) {
        var W = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        d && 'object' === typeof d && (d = d.ptr)
        g && 'object' === typeof g && (g = g.ptr)
        t && 'object' === typeof t && (t = t.ptr)
        return !!Mc(W, b, c, d, g, t)
      }
    m.prototype.SkipAttributeTransform = m.prototype.SkipAttributeTransform =
      function (b) {
        var c = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        Nc(c, b)
      }
    m.prototype.GetEncodedGeometryType_Deprecated =
      m.prototype.GetEncodedGeometryType_Deprecated = function (b) {
        var c = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        return Oc(c, b)
      }
    m.prototype.DecodeBufferToPointCloud =
      m.prototype.DecodeBufferToPointCloud = function (b, c) {
        var d = this.ptr
        b && 'object' === typeof b && (b = b.ptr)
        c && 'object' === typeof c && (c = c.ptr)
        return D(Pc(d, b, c), B)
      }
    m.prototype.DecodeBufferToMesh = m.prototype.DecodeBufferToMesh = function (
      b,
      c
    ) {
      var d = this.ptr
      b && 'object' === typeof b && (b = b.ptr)
      c && 'object' === typeof c && (c = c.ptr)
      return D(Qc(d, b, c), B)
    }
    m.prototype.__destroy__ = m.prototype.__destroy__ = function () {
      Rc(this.ptr)
    }
    ;(function () {
      function b() {
        a.ATTRIBUTE_INVALID_TRANSFORM = Sc()
        a.ATTRIBUTE_NO_TRANSFORM = Tc()
        a.ATTRIBUTE_QUANTIZATION_TRANSFORM = Uc()
        a.ATTRIBUTE_OCTAHEDRON_TRANSFORM = Vc()
        a.INVALID = Wc()
        a.POSITION = Xc()
        a.NORMAL = Yc()
        a.COLOR = Zc()
        a.TEX_COORD = $c()
        a.GENERIC = ad()
        a.INVALID_GEOMETRY_TYPE = bd()
        a.POINT_CLOUD = cd()
        a.TRIANGULAR_MESH = dd()
        a.DT_INVALID = ed()
        a.DT_INT8 = fd()
        a.DT_UINT8 = gd()
        a.DT_INT16 = hd()
        a.DT_UINT16 = id()
        a.DT_INT32 = jd()
        a.DT_UINT32 = kd()
        a.DT_INT64 = ld()
        a.DT_UINT64 = md()
        a.DT_FLOAT32 = nd()
        a.DT_FLOAT64 = od()
        a.DT_BOOL = pd()
        a.DT_TYPES_COUNT = qd()
        a.OK = rd()
        a.DRACO_ERROR = sd()
        a.IO_ERROR = td()
        a.INVALID_PARAMETER = ud()
        a.UNSUPPORTED_VERSION = vd()
        a.UNKNOWN_VERSION = wd()
      }
      Ca ? b() : ra.unshift(b)
    })()
    if ('function' === typeof a.onModuleParsed) a.onModuleParsed()
    a.Decoder.prototype.GetEncodedGeometryType = function (b) {
      if (b.__class__ && b.__class__ === a.DecoderBuffer)
        return a.Decoder.prototype.GetEncodedGeometryType_Deprecated(b)
      if (8 > b.byteLength) return a.INVALID_GEOMETRY_TYPE
      switch (b[7]) {
        case 0:
          return a.POINT_CLOUD
        case 1:
          return a.TRIANGULAR_MESH
        default:
          return a.INVALID_GEOMETRY_TYPE
      }
    }
    return n.ready
  }
})()
'object' === typeof exports && 'object' === typeof module
  ? (module.exports = DracoDecoderModule)
  : 'function' === typeof define && define.amd
    ? define([], function () {
        return DracoDecoderModule
      })
    : 'object' === typeof exports &&
      (exports.DracoDecoderModule = DracoDecoderModule)
