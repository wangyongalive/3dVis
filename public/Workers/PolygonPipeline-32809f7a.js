define([
  'exports',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './defaultValue-81eec7ed',
  './EllipsoidRhumbLine-6145377b',
  './GeometryAttribute-64b853f6',
  './WebGLConstants-508b9636'
], function (e, t, n, r, i, a, u, x) {
  'use strict'
  var o = p,
    s = p
  function p(e, t, n) {
    n = n || 2
    var r,
      i,
      a,
      u,
      x,
      o,
      s,
      p = t && t.length,
      f = p ? t[0] * n : e.length,
      c = l(e, 0, f, n, !0),
      v = []
    if (!c || c.next === c.prev) return v
    if (
      (p &&
        (c = (function (e, t, n, r) {
          var i,
            a,
            u,
            x = []
          for (i = 0, a = t.length; i < a; i++)
            (u = l(e, t[i] * r, i < a - 1 ? t[i + 1] * r : e.length, r, !1)) ===
              u.next && (u.steiner = !0),
              x.push(b(u))
          for (x.sort(m), i = 0; i < x.length; i++)
            n = h((n = C(x[i], n)), n.next)
          return n
        })(e, t, c, n)),
      e.length > 80 * n)
    ) {
      ;(r = a = e[0]), (i = u = e[1])
      for (var d = n; d < f; d += n)
        (x = e[d]) < r && (r = x),
          (o = e[d + 1]) < i && (i = o),
          x > a && (a = x),
          o > u && (u = o)
      s = 0 !== (s = Math.max(a - r, u - i)) ? 1 / s : 0
    }
    return y(c, v, n, r, i, s), v
  }
  function l(e, t, n, r, i) {
    var a, u
    if (i === W(e, t, n, r) > 0)
      for (a = t; a < n; a += r) u = G(a, e[a], e[a + 1], u)
    else for (a = n - r; a >= t; a -= r) u = G(a, e[a], e[a + 1], u)
    return u && S(u, u.next) && (O(u), (u = u.next)), u
  }
  function h(e, t) {
    if (!e) return e
    t || (t = e)
    var n,
      r = e
    do {
      if (
        ((n = !1), r.steiner || (!S(r, r.next) && 0 !== Z(r.prev, r, r.next)))
      )
        r = r.next
      else {
        if ((O(r), (r = t = r.prev) === r.next)) break
        n = !0
      }
    } while (n || r !== t)
    return t
  }
  function y(e, t, n, r, i, a, u) {
    if (e) {
      !u &&
        a &&
        (function (e, t, n, r) {
          var i = e
          do {
            null === i.z && (i.z = w(i.x, i.y, t, n, r)),
              (i.prevZ = i.prev),
              (i.nextZ = i.next),
              (i = i.next)
          } while (i !== e)
          ;(i.prevZ.nextZ = null),
            (i.prevZ = null),
            (function (e) {
              var t,
                n,
                r,
                i,
                a,
                u,
                x,
                o,
                s = 1
              do {
                for (n = e, e = null, a = null, u = 0; n; ) {
                  for (
                    u++, r = n, x = 0, t = 0;
                    t < s && (x++, (r = r.nextZ));
                    t++
                  );
                  for (o = s; x > 0 || (o > 0 && r); )
                    0 !== x && (0 === o || !r || n.z <= r.z)
                      ? ((i = n), (n = n.nextZ), x--)
                      : ((i = r), (r = r.nextZ), o--),
                      a ? (a.nextZ = i) : (e = i),
                      (i.prevZ = a),
                      (a = i)
                  n = r
                }
                ;(a.nextZ = null), (s *= 2)
              } while (u > 1)
            })(i)
        })(e, r, i, a)
      for (var x, o, s = e; e.prev !== e.next; )
        if (((x = e.prev), (o = e.next), a ? c(e, r, i, a) : f(e)))
          t.push(x.i / n),
            t.push(e.i / n),
            t.push(o.i / n),
            O(e),
            (e = o.next),
            (s = o.next)
        else if ((e = o) === s) {
          u
            ? 1 === u
              ? y((e = v(h(e), t, n)), t, n, r, i, a, 2)
              : 2 === u && d(e, t, n, r, i, a)
            : y(h(e), t, n, r, i, a, 1)
          break
        }
    }
  }
  function f(e) {
    var t = e.prev,
      n = e,
      r = e.next
    if (Z(t, n, r) >= 0) return !1
    for (var i = e.next.next; i !== e.prev; ) {
      if (
        E(t.x, t.y, n.x, n.y, r.x, r.y, i.x, i.y) &&
        Z(i.prev, i, i.next) >= 0
      )
        return !1
      i = i.next
    }
    return !0
  }
  function c(e, t, n, r) {
    var i = e.prev,
      a = e,
      u = e.next
    if (Z(i, a, u) >= 0) return !1
    for (
      var x = i.x < a.x ? (i.x < u.x ? i.x : u.x) : a.x < u.x ? a.x : u.x,
        o = i.y < a.y ? (i.y < u.y ? i.y : u.y) : a.y < u.y ? a.y : u.y,
        s = i.x > a.x ? (i.x > u.x ? i.x : u.x) : a.x > u.x ? a.x : u.x,
        p = i.y > a.y ? (i.y > u.y ? i.y : u.y) : a.y > u.y ? a.y : u.y,
        l = w(x, o, t, n, r),
        h = w(s, p, t, n, r),
        y = e.prevZ,
        f = e.nextZ;
      y && y.z >= l && f && f.z <= h;

    ) {
      if (
        y !== e.prev &&
        y !== e.next &&
        E(i.x, i.y, a.x, a.y, u.x, u.y, y.x, y.y) &&
        Z(y.prev, y, y.next) >= 0
      )
        return !1
      if (
        ((y = y.prevZ),
        f !== e.prev &&
          f !== e.next &&
          E(i.x, i.y, a.x, a.y, u.x, u.y, f.x, f.y) &&
          Z(f.prev, f, f.next) >= 0)
      )
        return !1
      f = f.nextZ
    }
    for (; y && y.z >= l; ) {
      if (
        y !== e.prev &&
        y !== e.next &&
        E(i.x, i.y, a.x, a.y, u.x, u.y, y.x, y.y) &&
        Z(y.prev, y, y.next) >= 0
      )
        return !1
      y = y.prevZ
    }
    for (; f && f.z <= h; ) {
      if (
        f !== e.prev &&
        f !== e.next &&
        E(i.x, i.y, a.x, a.y, u.x, u.y, f.x, f.y) &&
        Z(f.prev, f, f.next) >= 0
      )
        return !1
      f = f.nextZ
    }
    return !0
  }
  function v(e, t, n) {
    var r = e
    do {
      var i = r.prev,
        a = r.next.next
      !S(i, a) &&
        A(i, r, r.next, a) &&
        L(i, a) &&
        L(a, i) &&
        (t.push(i.i / n),
        t.push(r.i / n),
        t.push(a.i / n),
        O(r),
        O(r.next),
        (r = e = a)),
        (r = r.next)
    } while (r !== e)
    return h(r)
  }
  function d(e, t, n, r, i, a) {
    var u = e
    do {
      for (var x = u.next.next; x !== u.prev; ) {
        if (u.i !== x.i && M(u, x)) {
          var o = D(u, x)
          return (
            (u = h(u, u.next)),
            (o = h(o, o.next)),
            y(u, t, n, r, i, a),
            void y(o, t, n, r, i, a)
          )
        }
        x = x.next
      }
      u = u.next
    } while (u !== e)
  }
  function m(e, t) {
    return e.x - t.x
  }
  function C(e, t) {
    var n = (function (e, t) {
      var n,
        r = t,
        i = e.x,
        a = e.y,
        u = -1 / 0
      do {
        if (a <= r.y && a >= r.next.y && r.next.y !== r.y) {
          var x = r.x + ((a - r.y) * (r.next.x - r.x)) / (r.next.y - r.y)
          if (x <= i && x > u) {
            if (((u = x), x === i)) {
              if (a === r.y) return r
              if (a === r.next.y) return r.next
            }
            n = r.x < r.next.x ? r : r.next
          }
        }
        r = r.next
      } while (r !== t)
      if (!n) return null
      if (i === u) return n
      var o,
        s = n,
        p = n.x,
        l = n.y,
        h = 1 / 0
      r = n
      do {
        i >= r.x &&
          r.x >= p &&
          i !== r.x &&
          E(a < l ? i : u, a, p, l, a < l ? u : i, a, r.x, r.y) &&
          ((o = Math.abs(a - r.y) / (i - r.x)),
          L(r, e) &&
            (o < h || (o === h && (r.x > n.x || (r.x === n.x && g(n, r))))) &&
            ((n = r), (h = o))),
          (r = r.next)
      } while (r !== s)
      return n
    })(e, t)
    if (!n) return t
    var r = D(n, e),
      i = h(n, n.next)
    return h(r, r.next), t === n ? i : t
  }
  function g(e, t) {
    return Z(e.prev, e, t.prev) < 0 && Z(t.next, e, e.next) < 0
  }
  function w(e, t, n, r, i) {
    return (
      (e =
        1431655765 &
        ((e =
          858993459 &
          ((e =
            252645135 &
            ((e = 16711935 & ((e = 32767 * (e - n) * i) | (e << 8))) |
              (e << 4))) |
            (e << 2))) |
          (e << 1))) |
      ((t =
        1431655765 &
        ((t =
          858993459 &
          ((t =
            252645135 &
            ((t = 16711935 & ((t = 32767 * (t - r) * i) | (t << 8))) |
              (t << 4))) |
            (t << 2))) |
          (t << 1))) <<
        1)
    )
  }
  function b(e) {
    var t = e,
      n = e
    do {
      ;(t.x < n.x || (t.x === n.x && t.y < n.y)) && (n = t), (t = t.next)
    } while (t !== e)
    return n
  }
  function E(e, t, n, r, i, a, u, x) {
    return (
      (i - u) * (t - x) - (e - u) * (a - x) >= 0 &&
      (e - u) * (r - x) - (n - u) * (t - x) >= 0 &&
      (n - u) * (a - x) - (i - u) * (r - x) >= 0
    )
  }
  function M(e, t) {
    return (
      e.next.i !== t.i &&
      e.prev.i !== t.i &&
      !(function (e, t) {
        var n = e
        do {
          if (
            n.i !== e.i &&
            n.next.i !== e.i &&
            n.i !== t.i &&
            n.next.i !== t.i &&
            A(n, n.next, e, t)
          )
            return !0
          n = n.next
        } while (n !== e)
        return !1
      })(e, t) &&
      ((L(e, t) &&
        L(t, e) &&
        (function (e, t) {
          var n = e,
            r = !1,
            i = (e.x + t.x) / 2,
            a = (e.y + t.y) / 2
          do {
            n.y > a != n.next.y > a &&
              n.next.y !== n.y &&
              i < ((n.next.x - n.x) * (a - n.y)) / (n.next.y - n.y) + n.x &&
              (r = !r),
              (n = n.next)
          } while (n !== e)
          return r
        })(e, t) &&
        (Z(e.prev, e, t.prev) || Z(e, t.prev, t))) ||
        (S(e, t) && Z(e.prev, e, e.next) > 0 && Z(t.prev, t, t.next) > 0))
    )
  }
  function Z(e, t, n) {
    return (t.y - e.y) * (n.x - t.x) - (t.x - e.x) * (n.y - t.y)
  }
  function S(e, t) {
    return e.x === t.x && e.y === t.y
  }
  function A(e, t, n, r) {
    var i = R(Z(e, t, n)),
      a = R(Z(e, t, r)),
      u = R(Z(n, r, e)),
      x = R(Z(n, r, t))
    return (
      (i !== a && u !== x) ||
      !(0 !== i || !z(e, n, t)) ||
      !(0 !== a || !z(e, r, t)) ||
      !(0 !== u || !z(n, e, r)) ||
      !(0 !== x || !z(n, t, r))
    )
  }
  function z(e, t, n) {
    return (
      t.x <= Math.max(e.x, n.x) &&
      t.x >= Math.min(e.x, n.x) &&
      t.y <= Math.max(e.y, n.y) &&
      t.y >= Math.min(e.y, n.y)
    )
  }
  function R(e) {
    return e > 0 ? 1 : e < 0 ? -1 : 0
  }
  function L(e, t) {
    return Z(e.prev, e, e.next) < 0
      ? Z(e, t, e.next) >= 0 && Z(e, e.prev, t) >= 0
      : Z(e, t, e.prev) < 0 || Z(e, e.next, t) < 0
  }
  function D(e, t) {
    var n = new T(e.i, e.x, e.y),
      r = new T(t.i, t.x, t.y),
      i = e.next,
      a = t.prev
    return (
      (e.next = t),
      (t.prev = e),
      (n.next = i),
      (i.prev = n),
      (r.next = n),
      (n.prev = r),
      (a.next = r),
      (r.prev = a),
      r
    )
  }
  function G(e, t, n, r) {
    var i = new T(e, t, n)
    return (
      r
        ? ((i.next = r.next), (i.prev = r), (r.next.prev = i), (r.next = i))
        : ((i.prev = i), (i.next = i)),
      i
    )
  }
  function O(e) {
    ;(e.next.prev = e.prev),
      (e.prev.next = e.next),
      e.prevZ && (e.prevZ.nextZ = e.nextZ),
      e.nextZ && (e.nextZ.prevZ = e.prevZ)
  }
  function T(e, t, n) {
    ;(this.i = e),
      (this.x = t),
      (this.y = n),
      (this.prev = null),
      (this.next = null),
      (this.z = null),
      (this.prevZ = null),
      (this.nextZ = null),
      (this.steiner = !1)
  }
  function W(e, t, n, r) {
    for (var i = 0, a = t, u = n - r; a < n; a += r)
      (i += (e[u] - e[a]) * (e[a + 1] + e[u + 1])), (u = a)
    return i
  }
  ;(p.deviation = function (e, t, n, r) {
    var i = t && t.length,
      a = i ? t[0] * n : e.length,
      u = Math.abs(W(e, 0, a, n))
    if (i)
      for (var x = 0, o = t.length; x < o; x++) {
        var s = t[x] * n,
          p = x < o - 1 ? t[x + 1] * n : e.length
        u -= Math.abs(W(e, s, p, n))
      }
    var l = 0
    for (x = 0; x < r.length; x += 3) {
      var h = r[x] * n,
        y = r[x + 1] * n,
        f = r[x + 2] * n
      l += Math.abs(
        (e[h] - e[f]) * (e[y + 1] - e[h + 1]) -
          (e[h] - e[y]) * (e[f + 1] - e[h + 1])
      )
    }
    return 0 === u && 0 === l ? 0 : Math.abs((l - u) / u)
  }),
    (p.flatten = function (e) {
      for (
        var t = e[0][0].length,
          n = { vertices: [], holes: [], dimensions: t },
          r = 0,
          i = 0;
        i < e.length;
        i++
      ) {
        for (var a = 0; a < e[i].length; a++)
          for (var u = 0; u < t; u++) n.vertices.push(e[i][a][u])
        i > 0 && ((r += e[i - 1].length), n.holes.push(r))
      }
      return n
    }),
    (o.default = s)
  const $ = {
    CLOCKWISE: x.WebGLConstants.CW,
    COUNTER_CLOCKWISE: x.WebGLConstants.CCW,
    validate: function (e) {
      return e === $.CLOCKWISE || e === $.COUNTER_CLOCKWISE
    }
  }
  var P = Object.freeze($)
  const I = new t.Cartesian3(),
    B = new t.Cartesian3(),
    N = {
      computeArea2D: function (e) {
        const t = e.length
        let n = 0
        for (let r = t - 1, i = 0; i < t; r = i++) {
          const t = e[r],
            a = e[i]
          n += t.x * a.y - a.x * t.y
        }
        return 0.5 * n
      },
      computeWindingOrder2D: function (e) {
        return N.computeArea2D(e) > 0 ? P.COUNTER_CLOCKWISE : P.CLOCKWISE
      },
      triangulate: function (e, n) {
        const r = t.Cartesian2.packArray(e)
        return o(r, n, 2)
      }
    },
    U = new t.Cartesian3(),
    _ = new t.Cartesian3(),
    K = new t.Cartesian3(),
    V = new t.Cartesian3(),
    k = new t.Cartesian3(),
    q = new t.Cartesian3(),
    F = new t.Cartesian3()
  N.computeSubdivision = function (e, n, a, x) {
    x = i.defaultValue(x, r.CesiumMath.RADIANS_PER_DEGREE)
    const o = a.slice(0)
    let s
    const p = n.length,
      l = new Array(3 * p)
    let h = 0
    for (s = 0; s < p; s++) {
      const e = n[s]
      ;(l[h++] = e.x), (l[h++] = e.y), (l[h++] = e.z)
    }
    const y = [],
      f = {},
      c = e.maximumRadius,
      v = r.CesiumMath.chordLength(x, c),
      d = v * v
    for (; o.length > 0; ) {
      const e = o.pop(),
        n = o.pop(),
        r = o.pop(),
        a = t.Cartesian3.fromArray(l, 3 * r, U),
        u = t.Cartesian3.fromArray(l, 3 * n, _),
        x = t.Cartesian3.fromArray(l, 3 * e, K),
        p = t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(a, V), c, V),
        h = t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(u, k), c, k),
        v = t.Cartesian3.multiplyByScalar(t.Cartesian3.normalize(x, q), c, q),
        m = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(p, h, F)),
        C = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(h, v, F)),
        g = t.Cartesian3.magnitudeSquared(t.Cartesian3.subtract(v, p, F)),
        w = Math.max(m, C, g)
      let b, E
      w > d
        ? m === w
          ? ((b = `${Math.min(r, n)} ${Math.max(r, n)}`),
            (s = f[b]),
            i.defined(s) ||
              ((E = t.Cartesian3.add(a, u, F)),
              t.Cartesian3.multiplyByScalar(E, 0.5, E),
              l.push(E.x, E.y, E.z),
              (s = l.length / 3 - 1),
              (f[b] = s)),
            o.push(r, s, e),
            o.push(s, n, e))
          : C === w
            ? ((b = `${Math.min(n, e)} ${Math.max(n, e)}`),
              (s = f[b]),
              i.defined(s) ||
                ((E = t.Cartesian3.add(u, x, F)),
                t.Cartesian3.multiplyByScalar(E, 0.5, E),
                l.push(E.x, E.y, E.z),
                (s = l.length / 3 - 1),
                (f[b] = s)),
              o.push(n, s, r),
              o.push(s, e, r))
            : g === w &&
              ((b = `${Math.min(e, r)} ${Math.max(e, r)}`),
              (s = f[b]),
              i.defined(s) ||
                ((E = t.Cartesian3.add(x, a, F)),
                t.Cartesian3.multiplyByScalar(E, 0.5, E),
                l.push(E.x, E.y, E.z),
                (s = l.length / 3 - 1),
                (f[b] = s)),
              o.push(e, s, n),
              o.push(s, r, n))
        : (y.push(r), y.push(n), y.push(e))
    }
    return new u.Geometry({
      attributes: {
        position: new u.GeometryAttribute({
          componentDatatype: r.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: l
        })
      },
      indices: y,
      primitiveType: u.PrimitiveType.TRIANGLES
    })
  }
  const j = new t.Cartographic(),
    H = new t.Cartographic(),
    J = new t.Cartographic(),
    Q = new t.Cartographic()
  ;(N.computeRhumbLineSubdivision = function (e, n, x, o) {
    o = i.defaultValue(o, r.CesiumMath.RADIANS_PER_DEGREE)
    const s = x.slice(0)
    let p
    const l = n.length,
      h = new Array(3 * l)
    let y = 0
    for (p = 0; p < l; p++) {
      const e = n[p]
      ;(h[y++] = e.x), (h[y++] = e.y), (h[y++] = e.z)
    }
    const f = [],
      c = {},
      v = e.maximumRadius,
      d = r.CesiumMath.chordLength(o, v),
      m = new a.EllipsoidRhumbLine(void 0, void 0, e),
      C = new a.EllipsoidRhumbLine(void 0, void 0, e),
      g = new a.EllipsoidRhumbLine(void 0, void 0, e)
    for (; s.length > 0; ) {
      const n = s.pop(),
        r = s.pop(),
        a = s.pop(),
        u = t.Cartesian3.fromArray(h, 3 * a, U),
        x = t.Cartesian3.fromArray(h, 3 * r, _),
        o = t.Cartesian3.fromArray(h, 3 * n, K),
        l = e.cartesianToCartographic(u, j),
        y = e.cartesianToCartographic(x, H),
        v = e.cartesianToCartographic(o, J)
      m.setEndPoints(l, y)
      const w = m.surfaceDistance
      C.setEndPoints(y, v)
      const b = C.surfaceDistance
      g.setEndPoints(v, l)
      const E = g.surfaceDistance,
        M = Math.max(w, b, E)
      let Z, S, A, z
      M > d
        ? w === M
          ? ((Z = `${Math.min(a, r)} ${Math.max(a, r)}`),
            (p = c[Z]),
            i.defined(p) ||
              ((S = m.interpolateUsingFraction(0.5, Q)),
              (A = 0.5 * (l.height + y.height)),
              (z = t.Cartesian3.fromRadians(S.longitude, S.latitude, A, e, F)),
              h.push(z.x, z.y, z.z),
              (p = h.length / 3 - 1),
              (c[Z] = p)),
            s.push(a, p, n),
            s.push(p, r, n))
          : b === M
            ? ((Z = `${Math.min(r, n)} ${Math.max(r, n)}`),
              (p = c[Z]),
              i.defined(p) ||
                ((S = C.interpolateUsingFraction(0.5, Q)),
                (A = 0.5 * (y.height + v.height)),
                (z = t.Cartesian3.fromRadians(
                  S.longitude,
                  S.latitude,
                  A,
                  e,
                  F
                )),
                h.push(z.x, z.y, z.z),
                (p = h.length / 3 - 1),
                (c[Z] = p)),
              s.push(r, p, a),
              s.push(p, n, a))
            : E === M &&
              ((Z = `${Math.min(n, a)} ${Math.max(n, a)}`),
              (p = c[Z]),
              i.defined(p) ||
                ((S = g.interpolateUsingFraction(0.5, Q)),
                (A = 0.5 * (v.height + l.height)),
                (z = t.Cartesian3.fromRadians(
                  S.longitude,
                  S.latitude,
                  A,
                  e,
                  F
                )),
                h.push(z.x, z.y, z.z),
                (p = h.length / 3 - 1),
                (c[Z] = p)),
              s.push(n, p, r),
              s.push(p, a, r))
        : (f.push(a), f.push(r), f.push(n))
    }
    return new u.Geometry({
      attributes: {
        position: new u.GeometryAttribute({
          componentDatatype: r.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: h
        })
      },
      indices: f,
      primitiveType: u.PrimitiveType.TRIANGLES
    })
  }),
    (N.scaleToGeodeticHeight = function (e, n, r, a) {
      r = i.defaultValue(r, t.Ellipsoid.WGS84)
      let u = I,
        x = B
      if (
        ((n = i.defaultValue(n, 0)), (a = i.defaultValue(a, !0)), i.defined(e))
      ) {
        const i = e.length
        for (let o = 0; o < i; o += 3)
          t.Cartesian3.fromArray(e, o, x),
            a && (x = r.scaleToGeodeticSurface(x, x)),
            0 !== n &&
              ((u = r.geodeticSurfaceNormal(x, u)),
              t.Cartesian3.multiplyByScalar(u, n, u),
              t.Cartesian3.add(x, u, x)),
            (e[o] = x.x),
            (e[o + 1] = x.y),
            (e[o + 2] = x.z)
      }
      return e
    }),
    (e.PolygonPipeline = N),
    (e.WindingOrder = P)
})
