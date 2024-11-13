define([
  'exports',
  './RuntimeError-8952249c',
  './defaultValue-81eec7ed',
  './ComponentDatatype-a15c9a19'
], function (t, e, n, r) {
  'use strict'
  function i(t, e, r) {
    ;(this.x = n.defaultValue(t, 0)),
      (this.y = n.defaultValue(e, 0)),
      (this.z = n.defaultValue(r, 0))
  }
  ;(i.fromSpherical = function (t, e) {
    n.defined(e) || (e = new i())
    const r = t.clock,
      a = t.cone,
      u = n.defaultValue(t.magnitude, 1),
      o = u * Math.sin(a)
    return (
      (e.x = o * Math.cos(r)),
      (e.y = o * Math.sin(r)),
      (e.z = u * Math.cos(a)),
      e
    )
  }),
    (i.fromElements = function (t, e, r, a) {
      return n.defined(a)
        ? ((a.x = t), (a.y = e), (a.z = r), a)
        : new i(t, e, r)
    }),
    (i.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e)
          ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), e)
          : new i(t.x, t.y, t.z)
    }),
    (i.fromCartesian4 = i.clone),
    (i.packedLength = 3),
    (i.pack = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        (e[r++] = t.x),
        (e[r++] = t.y),
        (e[r] = t.z),
        e
      )
    }),
    (i.unpack = function (t, e, r) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(r) || (r = new i()),
        (r.x = t[e++]),
        (r.y = t[e++]),
        (r.z = t[e]),
        r
      )
    }),
    (i.packArray = function (t, e) {
      const r = t.length,
        a = 3 * r
      n.defined(e)
        ? (Array.isArray(e) || e.length === a) &&
          e.length !== a &&
          (e.length = a)
        : (e = new Array(a))
      for (let n = 0; n < r; ++n) i.pack(t[n], e, 3 * n)
      return e
    }),
    (i.unpackArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r / 3) : (e = new Array(r / 3))
      for (let n = 0; n < r; n += 3) {
        const r = n / 3
        e[r] = i.unpack(t, n, e[r])
      }
      return e
    }),
    (i.fromArray = i.unpack),
    (i.maximumComponent = function (t) {
      return Math.max(t.x, t.y, t.z)
    }),
    (i.minimumComponent = function (t) {
      return Math.min(t.x, t.y, t.z)
    }),
    (i.minimumByComponent = function (t, e, n) {
      return (
        (n.x = Math.min(t.x, e.x)),
        (n.y = Math.min(t.y, e.y)),
        (n.z = Math.min(t.z, e.z)),
        n
      )
    }),
    (i.maximumByComponent = function (t, e, n) {
      return (
        (n.x = Math.max(t.x, e.x)),
        (n.y = Math.max(t.y, e.y)),
        (n.z = Math.max(t.z, e.z)),
        n
      )
    }),
    (i.clamp = function (t, e, n, i) {
      const a = r.CesiumMath.clamp(t.x, e.x, n.x),
        u = r.CesiumMath.clamp(t.y, e.y, n.y),
        o = r.CesiumMath.clamp(t.z, e.z, n.z)
      return (i.x = a), (i.y = u), (i.z = o), i
    }),
    (i.magnitudeSquared = function (t) {
      return t.x * t.x + t.y * t.y + t.z * t.z
    }),
    (i.magnitude = function (t) {
      return Math.sqrt(i.magnitudeSquared(t))
    })
  const a = new i()
  ;(i.distance = function (t, e) {
    return i.subtract(t, e, a), i.magnitude(a)
  }),
    (i.distanceSquared = function (t, e) {
      return i.subtract(t, e, a), i.magnitudeSquared(a)
    }),
    (i.normalize = function (t, e) {
      const n = i.magnitude(t)
      return (e.x = t.x / n), (e.y = t.y / n), (e.z = t.z / n), e
    }),
    (i.dot = function (t, e) {
      return t.x * e.x + t.y * e.y + t.z * e.z
    }),
    (i.multiplyComponents = function (t, e, n) {
      return (n.x = t.x * e.x), (n.y = t.y * e.y), (n.z = t.z * e.z), n
    }),
    (i.divideComponents = function (t, e, n) {
      return (n.x = t.x / e.x), (n.y = t.y / e.y), (n.z = t.z / e.z), n
    }),
    (i.add = function (t, e, n) {
      return (n.x = t.x + e.x), (n.y = t.y + e.y), (n.z = t.z + e.z), n
    }),
    (i.subtract = function (t, e, n) {
      return (n.x = t.x - e.x), (n.y = t.y - e.y), (n.z = t.z - e.z), n
    }),
    (i.multiplyByScalar = function (t, e, n) {
      return (n.x = t.x * e), (n.y = t.y * e), (n.z = t.z * e), n
    }),
    (i.divideByScalar = function (t, e, n) {
      return (n.x = t.x / e), (n.y = t.y / e), (n.z = t.z / e), n
    }),
    (i.negate = function (t, e) {
      return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), e
    }),
    (i.abs = function (t, e) {
      return (
        (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), (e.z = Math.abs(t.z)), e
      )
    })
  const u = new i()
  i.lerp = function (t, e, n, r) {
    return (
      i.multiplyByScalar(e, n, u),
      (r = i.multiplyByScalar(t, 1 - n, r)),
      i.add(u, r, r)
    )
  }
  const o = new i(),
    s = new i()
  i.angleBetween = function (t, e) {
    i.normalize(t, o), i.normalize(e, s)
    const n = i.dot(o, s),
      r = i.magnitude(i.cross(o, s, o))
    return Math.atan2(r, n)
  }
  const c = new i()
  ;(i.mostOrthogonalAxis = function (t, e) {
    const n = i.normalize(t, c)
    return (
      i.abs(n, n),
      (e =
        n.x <= n.y
          ? n.x <= n.z
            ? i.clone(i.UNIT_X, e)
            : i.clone(i.UNIT_Z, e)
          : n.y <= n.z
            ? i.clone(i.UNIT_Y, e)
            : i.clone(i.UNIT_Z, e))
    )
  }),
    (i.projectVector = function (t, e, n) {
      const r = i.dot(t, e) / i.dot(e, e)
      return i.multiplyByScalar(e, r, n)
    }),
    (i.equals = function (t, e) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          t.x === e.x &&
          t.y === e.y &&
          t.z === e.z)
      )
    }),
    (i.equalsArray = function (t, e, n) {
      return t.x === e[n] && t.y === e[n + 1] && t.z === e[n + 2]
    }),
    (i.equalsEpsilon = function (t, e, i, a) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          r.CesiumMath.equalsEpsilon(t.x, e.x, i, a) &&
          r.CesiumMath.equalsEpsilon(t.y, e.y, i, a) &&
          r.CesiumMath.equalsEpsilon(t.z, e.z, i, a))
      )
    }),
    (i.cross = function (t, e, n) {
      const r = t.x,
        i = t.y,
        a = t.z,
        u = e.x,
        o = e.y,
        s = e.z,
        c = i * s - a * o,
        l = a * u - r * s,
        f = r * o - i * u
      return (n.x = c), (n.y = l), (n.z = f), n
    }),
    (i.midpoint = function (t, e, n) {
      return (
        (n.x = 0.5 * (t.x + e.x)),
        (n.y = 0.5 * (t.y + e.y)),
        (n.z = 0.5 * (t.z + e.z)),
        n
      )
    }),
    (i.fromDegrees = function (t, e, n, a, u) {
      return (
        (t = r.CesiumMath.toRadians(t)),
        (e = r.CesiumMath.toRadians(e)),
        i.fromRadians(t, e, n, a, u)
      )
    })
  let l = new i(),
    f = new i()
  const d = new i(40680631590769, 40680631590769, 40408299984661.445)
  ;(i.fromRadians = function (t, e, r, a, u) {
    r = n.defaultValue(r, 0)
    const o = n.defined(a) ? a.radiiSquared : d,
      s = Math.cos(e)
    ;(l.x = s * Math.cos(t)),
      (l.y = s * Math.sin(t)),
      (l.z = Math.sin(e)),
      (l = i.normalize(l, l)),
      i.multiplyComponents(o, l, f)
    const c = Math.sqrt(i.dot(l, f))
    return (
      (f = i.divideByScalar(f, c, f)),
      (l = i.multiplyByScalar(l, r, l)),
      n.defined(u) || (u = new i()),
      i.add(f, l, u)
    )
  }),
    (i.fromDegreesArray = function (t, e, r) {
      const a = t.length
      n.defined(r) ? (r.length = a / 2) : (r = new Array(a / 2))
      for (let n = 0; n < a; n += 2) {
        const a = t[n],
          u = t[n + 1],
          o = n / 2
        r[o] = i.fromDegrees(a, u, 0, e, r[o])
      }
      return r
    }),
    (i.fromRadiansArray = function (t, e, r) {
      const a = t.length
      n.defined(r) ? (r.length = a / 2) : (r = new Array(a / 2))
      for (let n = 0; n < a; n += 2) {
        const a = t[n],
          u = t[n + 1],
          o = n / 2
        r[o] = i.fromRadians(a, u, 0, e, r[o])
      }
      return r
    }),
    (i.fromDegreesArrayHeights = function (t, e, r) {
      const a = t.length
      n.defined(r) ? (r.length = a / 3) : (r = new Array(a / 3))
      for (let n = 0; n < a; n += 3) {
        const a = t[n],
          u = t[n + 1],
          o = t[n + 2],
          s = n / 3
        r[s] = i.fromDegrees(a, u, o, e, r[s])
      }
      return r
    }),
    (i.fromRadiansArrayHeights = function (t, e, r) {
      const a = t.length
      n.defined(r) ? (r.length = a / 3) : (r = new Array(a / 3))
      for (let n = 0; n < a; n += 3) {
        const a = t[n],
          u = t[n + 1],
          o = t[n + 2],
          s = n / 3
        r[s] = i.fromRadians(a, u, o, e, r[s])
      }
      return r
    }),
    (i.ZERO = Object.freeze(new i(0, 0, 0))),
    (i.ONE = Object.freeze(new i(1, 1, 1))),
    (i.UNIT_X = Object.freeze(new i(1, 0, 0))),
    (i.UNIT_Y = Object.freeze(new i(0, 1, 0))),
    (i.UNIT_Z = Object.freeze(new i(0, 0, 1))),
    (i.prototype.clone = function (t) {
      return i.clone(this, t)
    }),
    (i.prototype.equals = function (t) {
      return i.equals(this, t)
    }),
    (i.prototype.equalsEpsilon = function (t, e, n) {
      return i.equalsEpsilon(this, t, e, n)
    }),
    (i.prototype.toString = function () {
      return `(${this.x}, ${this.y}, ${this.z})`
    })
  const h = new i(),
    m = new i()
  function y(t, e, a, u, o) {
    const s = t.x,
      c = t.y,
      l = t.z,
      f = e.x,
      d = e.y,
      y = e.z,
      p = s * s * f * f,
      x = c * c * d * d,
      w = l * l * y * y,
      M = p + x + w,
      g = Math.sqrt(1 / M),
      z = i.multiplyByScalar(t, g, h)
    if (M < u) return isFinite(g) ? i.clone(z, o) : void 0
    const C = a.x,
      O = a.y,
      b = a.z,
      S = m
    ;(S.x = z.x * C * 2), (S.y = z.y * O * 2), (S.z = z.z * b * 2)
    let q,
      R,
      _,
      T,
      V,
      A,
      E,
      I,
      N,
      U,
      P,
      L = ((1 - g) * i.magnitude(t)) / (0.5 * i.magnitude(S)),
      k = 0
    do {
      ;(L -= k),
        (_ = 1 / (1 + L * C)),
        (T = 1 / (1 + L * O)),
        (V = 1 / (1 + L * b)),
        (A = _ * _),
        (E = T * T),
        (I = V * V),
        (N = A * _),
        (U = E * T),
        (P = I * V),
        (q = p * A + x * E + w * I - 1),
        (R = p * N * C + x * U * O + w * P * b)
      k = q / (-2 * R)
    } while (Math.abs(q) > r.CesiumMath.EPSILON12)
    return n.defined(o)
      ? ((o.x = s * _), (o.y = c * T), (o.z = l * V), o)
      : new i(s * _, c * T, l * V)
  }
  function p(t, e, r) {
    ;(this.longitude = n.defaultValue(t, 0)),
      (this.latitude = n.defaultValue(e, 0)),
      (this.height = n.defaultValue(r, 0))
  }
  ;(p.fromRadians = function (t, e, r, i) {
    return (
      (r = n.defaultValue(r, 0)),
      n.defined(i)
        ? ((i.longitude = t), (i.latitude = e), (i.height = r), i)
        : new p(t, e, r)
    )
  }),
    (p.fromDegrees = function (t, e, n, i) {
      return (
        (t = r.CesiumMath.toRadians(t)),
        (e = r.CesiumMath.toRadians(e)),
        p.fromRadians(t, e, n, i)
      )
    })
  const x = new i(),
    w = new i(),
    M = new i(),
    g = new i(1 / 6378137, 1 / 6378137, 1 / 6356752.314245179),
    z = new i(1 / 40680631590769, 1 / 40680631590769, 1 / 40408299984661.445),
    C = r.CesiumMath.EPSILON1
  function O(t, e, a, u) {
    ;(e = n.defaultValue(e, 0)),
      (a = n.defaultValue(a, 0)),
      (u = n.defaultValue(u, 0)),
      (t._radii = new i(e, a, u)),
      (t._radiiSquared = new i(e * e, a * a, u * u)),
      (t._radiiToTheFourth = new i(
        e * e * e * e,
        a * a * a * a,
        u * u * u * u
      )),
      (t._oneOverRadii = new i(
        0 === e ? 0 : 1 / e,
        0 === a ? 0 : 1 / a,
        0 === u ? 0 : 1 / u
      )),
      (t._oneOverRadiiSquared = new i(
        0 === e ? 0 : 1 / (e * e),
        0 === a ? 0 : 1 / (a * a),
        0 === u ? 0 : 1 / (u * u)
      )),
      (t._minimumRadius = Math.min(e, a, u)),
      (t._maximumRadius = Math.max(e, a, u)),
      (t._centerToleranceSquared = r.CesiumMath.EPSILON1),
      0 !== t._radiiSquared.z &&
        (t._squaredXOverSquaredZ = t._radiiSquared.x / t._radiiSquared.z)
  }
  function b(t, e, n) {
    ;(this._radii = void 0),
      (this._radiiSquared = void 0),
      (this._radiiToTheFourth = void 0),
      (this._oneOverRadii = void 0),
      (this._oneOverRadiiSquared = void 0),
      (this._minimumRadius = void 0),
      (this._maximumRadius = void 0),
      (this._centerToleranceSquared = void 0),
      (this._squaredXOverSquaredZ = void 0),
      O(this, t, e, n)
  }
  ;(p.fromCartesian = function (t, e, a) {
    const u = n.defined(e) ? e.oneOverRadii : g,
      o = n.defined(e) ? e.oneOverRadiiSquared : z,
      s = y(t, u, o, n.defined(e) ? e._centerToleranceSquared : C, w)
    if (!n.defined(s)) return
    let c = i.multiplyComponents(s, o, x)
    c = i.normalize(c, c)
    const l = i.subtract(t, s, M),
      f = Math.atan2(c.y, c.x),
      d = Math.asin(c.z),
      h = r.CesiumMath.sign(i.dot(l, t)) * i.magnitude(l)
    return n.defined(a)
      ? ((a.longitude = f), (a.latitude = d), (a.height = h), a)
      : new p(f, d, h)
  }),
    (p.toCartesian = function (t, e, n) {
      return i.fromRadians(t.longitude, t.latitude, t.height, e, n)
    }),
    (p.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e)
          ? ((e.longitude = t.longitude),
            (e.latitude = t.latitude),
            (e.height = t.height),
            e)
          : new p(t.longitude, t.latitude, t.height)
    }),
    (p.equals = function (t, e) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          t.longitude === e.longitude &&
          t.latitude === e.latitude &&
          t.height === e.height)
      )
    }),
    (p.equalsEpsilon = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        t === e ||
          (n.defined(t) &&
            n.defined(e) &&
            Math.abs(t.longitude - e.longitude) <= r &&
            Math.abs(t.latitude - e.latitude) <= r &&
            Math.abs(t.height - e.height) <= r)
      )
    }),
    (p.ZERO = Object.freeze(new p(0, 0, 0))),
    (p.prototype.clone = function (t) {
      return p.clone(this, t)
    }),
    (p.prototype.equals = function (t) {
      return p.equals(this, t)
    }),
    (p.prototype.equalsEpsilon = function (t, e) {
      return p.equalsEpsilon(this, t, e)
    }),
    (p.prototype.toString = function () {
      return `(${this.longitude}, ${this.latitude}, ${this.height})`
    }),
    Object.defineProperties(b.prototype, {
      radii: {
        get: function () {
          return this._radii
        }
      },
      radiiSquared: {
        get: function () {
          return this._radiiSquared
        }
      },
      radiiToTheFourth: {
        get: function () {
          return this._radiiToTheFourth
        }
      },
      oneOverRadii: {
        get: function () {
          return this._oneOverRadii
        }
      },
      oneOverRadiiSquared: {
        get: function () {
          return this._oneOverRadiiSquared
        }
      },
      minimumRadius: {
        get: function () {
          return this._minimumRadius
        }
      },
      maximumRadius: {
        get: function () {
          return this._maximumRadius
        }
      }
    }),
    (b.clone = function (t, e) {
      if (!n.defined(t)) return
      const r = t._radii
      return n.defined(e)
        ? (i.clone(r, e._radii),
          i.clone(t._radiiSquared, e._radiiSquared),
          i.clone(t._radiiToTheFourth, e._radiiToTheFourth),
          i.clone(t._oneOverRadii, e._oneOverRadii),
          i.clone(t._oneOverRadiiSquared, e._oneOverRadiiSquared),
          (e._minimumRadius = t._minimumRadius),
          (e._maximumRadius = t._maximumRadius),
          (e._centerToleranceSquared = t._centerToleranceSquared),
          e)
        : new b(r.x, r.y, r.z)
    }),
    (b.fromCartesian3 = function (t, e) {
      return (
        n.defined(e) || (e = new b()),
        n.defined(t) ? (O(e, t.x, t.y, t.z), e) : e
      )
    }),
    (b.WGS84 = Object.freeze(new b(6378137, 6378137, 6356752.314245179))),
    (b.UNIT_SPHERE = Object.freeze(new b(1, 1, 1))),
    (b.MOON = Object.freeze(
      new b(
        r.CesiumMath.LUNAR_RADIUS,
        r.CesiumMath.LUNAR_RADIUS,
        r.CesiumMath.LUNAR_RADIUS
      )
    )),
    (b.prototype.clone = function (t) {
      return b.clone(this, t)
    }),
    (b.packedLength = i.packedLength),
    (b.pack = function (t, e, r) {
      return (r = n.defaultValue(r, 0)), i.pack(t._radii, e, r), e
    }),
    (b.unpack = function (t, e, r) {
      e = n.defaultValue(e, 0)
      const a = i.unpack(t, e)
      return b.fromCartesian3(a, r)
    }),
    (b.prototype.geocentricSurfaceNormal = i.normalize),
    (b.prototype.geodeticSurfaceNormalCartographic = function (t, e) {
      const r = t.longitude,
        a = t.latitude,
        u = Math.cos(a),
        o = u * Math.cos(r),
        s = u * Math.sin(r),
        c = Math.sin(a)
      return (
        n.defined(e) || (e = new i()),
        (e.x = o),
        (e.y = s),
        (e.z = c),
        i.normalize(e, e)
      )
    }),
    (b.prototype.geodeticSurfaceNormal = function (t, e) {
      if (!i.equalsEpsilon(t, i.ZERO, r.CesiumMath.EPSILON14))
        return (
          n.defined(e) || (e = new i()),
          (e = i.multiplyComponents(t, this._oneOverRadiiSquared, e)),
          i.normalize(e, e)
        )
    })
  const S = new i(),
    q = new i()
  ;(b.prototype.cartographicToCartesian = function (t, e) {
    const r = S,
      a = q
    this.geodeticSurfaceNormalCartographic(t, r),
      i.multiplyComponents(this._radiiSquared, r, a)
    const u = Math.sqrt(i.dot(r, a))
    return (
      i.divideByScalar(a, u, a),
      i.multiplyByScalar(r, t.height, r),
      n.defined(e) || (e = new i()),
      i.add(a, r, e)
    )
  }),
    (b.prototype.cartographicArrayToCartesianArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r) : (e = new Array(r))
      for (let n = 0; n < r; n++)
        e[n] = this.cartographicToCartesian(t[n], e[n])
      return e
    })
  const R = new i(),
    _ = new i(),
    T = new i()
  ;(b.prototype.cartesianToCartographic = function (t, e) {
    const a = this.scaleToGeodeticSurface(t, _)
    if (!n.defined(a)) return
    const u = this.geodeticSurfaceNormal(a, R),
      o = i.subtract(t, a, T),
      s = Math.atan2(u.y, u.x),
      c = Math.asin(u.z),
      l = r.CesiumMath.sign(i.dot(o, t)) * i.magnitude(o)
    return n.defined(e)
      ? ((e.longitude = s), (e.latitude = c), (e.height = l), e)
      : new p(s, c, l)
  }),
    (b.prototype.cartesianArrayToCartographicArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r) : (e = new Array(r))
      for (let n = 0; n < r; ++n)
        e[n] = this.cartesianToCartographic(t[n], e[n])
      return e
    }),
    (b.prototype.scaleToGeodeticSurface = function (t, e) {
      return y(
        t,
        this._oneOverRadii,
        this._oneOverRadiiSquared,
        this._centerToleranceSquared,
        e
      )
    }),
    (b.prototype.scaleToGeocentricSurface = function (t, e) {
      n.defined(e) || (e = new i())
      const r = t.x,
        a = t.y,
        u = t.z,
        o = this._oneOverRadiiSquared,
        s = 1 / Math.sqrt(r * r * o.x + a * a * o.y + u * u * o.z)
      return i.multiplyByScalar(t, s, e)
    }),
    (b.prototype.transformPositionToScaledSpace = function (t, e) {
      return (
        n.defined(e) || (e = new i()),
        i.multiplyComponents(t, this._oneOverRadii, e)
      )
    }),
    (b.prototype.transformPositionFromScaledSpace = function (t, e) {
      return (
        n.defined(e) || (e = new i()), i.multiplyComponents(t, this._radii, e)
      )
    }),
    (b.prototype.equals = function (t) {
      return this === t || (n.defined(t) && i.equals(this._radii, t._radii))
    }),
    (b.prototype.toString = function () {
      return this._radii.toString()
    }),
    (b.prototype.getSurfaceNormalIntersectionWithZAxis = function (t, e, r) {
      e = n.defaultValue(e, 0)
      const a = this._squaredXOverSquaredZ
      if (
        (n.defined(r) || (r = new i()),
        (r.x = 0),
        (r.y = 0),
        (r.z = t.z * (1 - a)),
        !(Math.abs(r.z) >= this._radii.z - e))
      )
        return r
    })
  const V = [
      0.14887433898163, 0.43339539412925, 0.67940956829902, 0.86506336668898,
      0.97390652851717, 0
    ],
    A = [
      0.29552422471475, 0.26926671930999, 0.21908636251598, 0.14945134915058,
      0.066671344308684, 0
    ]
  function E(t, e, n) {
    const r = 0.5 * (e + t),
      i = 0.5 * (e - t)
    let a = 0
    for (let t = 0; t < 5; t++) {
      const e = i * V[t]
      a += A[t] * (n(r + e) + n(r - e))
    }
    return (a *= i), a
  }
  function I(t, e, r, i, a, u, o, s, c) {
    ;(this[0] = n.defaultValue(t, 0)),
      (this[1] = n.defaultValue(i, 0)),
      (this[2] = n.defaultValue(o, 0)),
      (this[3] = n.defaultValue(e, 0)),
      (this[4] = n.defaultValue(a, 0)),
      (this[5] = n.defaultValue(s, 0)),
      (this[6] = n.defaultValue(r, 0)),
      (this[7] = n.defaultValue(u, 0)),
      (this[8] = n.defaultValue(c, 0))
  }
  ;(b.prototype.surfaceArea = function (t) {
    const e = t.west
    let n = t.east
    const i = t.south,
      a = t.north
    for (; n < e; ) n += r.CesiumMath.TWO_PI
    const u = this._radiiSquared,
      o = u.x,
      s = u.y,
      c = u.z,
      l = o * s
    return E(i, a, function (t) {
      const r = Math.cos(t),
        i = Math.sin(t)
      return (
        Math.cos(t) *
        E(e, n, function (t) {
          const e = Math.cos(t),
            n = Math.sin(t)
          return Math.sqrt(l * i * i + c * (s * e * e + o * n * n) * r * r)
        })
      )
    })
  }),
    (I.packedLength = 9),
    (I.pack = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        (e[r++] = t[0]),
        (e[r++] = t[1]),
        (e[r++] = t[2]),
        (e[r++] = t[3]),
        (e[r++] = t[4]),
        (e[r++] = t[5]),
        (e[r++] = t[6]),
        (e[r++] = t[7]),
        (e[r++] = t[8]),
        e
      )
    }),
    (I.unpack = function (t, e, r) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(r) || (r = new I()),
        (r[0] = t[e++]),
        (r[1] = t[e++]),
        (r[2] = t[e++]),
        (r[3] = t[e++]),
        (r[4] = t[e++]),
        (r[5] = t[e++]),
        (r[6] = t[e++]),
        (r[7] = t[e++]),
        (r[8] = t[e++]),
        r
      )
    }),
    (I.packArray = function (t, e) {
      const r = t.length,
        i = 9 * r
      n.defined(e)
        ? (Array.isArray(e) || e.length === i) &&
          e.length !== i &&
          (e.length = i)
        : (e = new Array(i))
      for (let n = 0; n < r; ++n) I.pack(t[n], e, 9 * n)
      return e
    }),
    (I.unpackArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r / 9) : (e = new Array(r / 9))
      for (let n = 0; n < r; n += 9) {
        const r = n / 9
        e[r] = I.unpack(t, n, e[r])
      }
      return e
    }),
    (I.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e)
          ? ((e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[8] = t[8]),
            e)
          : new I(t[0], t[3], t[6], t[1], t[4], t[7], t[2], t[5], t[8])
    }),
    (I.fromArray = I.unpack),
    (I.fromColumnMajorArray = function (t, e) {
      return I.clone(t, e)
    }),
    (I.fromRowMajorArray = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t[0]),
          (e[1] = t[3]),
          (e[2] = t[6]),
          (e[3] = t[1]),
          (e[4] = t[4]),
          (e[5] = t[7]),
          (e[6] = t[2]),
          (e[7] = t[5]),
          (e[8] = t[8]),
          e)
        : new I(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8])
    }),
    (I.fromQuaternion = function (t, e) {
      const r = t.x * t.x,
        i = t.x * t.y,
        a = t.x * t.z,
        u = t.x * t.w,
        o = t.y * t.y,
        s = t.y * t.z,
        c = t.y * t.w,
        l = t.z * t.z,
        f = t.z * t.w,
        d = t.w * t.w,
        h = r - o - l + d,
        m = 2 * (i - f),
        y = 2 * (a + c),
        p = 2 * (i + f),
        x = -r + o - l + d,
        w = 2 * (s - u),
        M = 2 * (a - c),
        g = 2 * (s + u),
        z = -r - o + l + d
      return n.defined(e)
        ? ((e[0] = h),
          (e[1] = p),
          (e[2] = M),
          (e[3] = m),
          (e[4] = x),
          (e[5] = g),
          (e[6] = y),
          (e[7] = w),
          (e[8] = z),
          e)
        : new I(h, m, y, p, x, w, M, g, z)
    }),
    (I.fromHeadingPitchRoll = function (t, e) {
      const r = Math.cos(-t.pitch),
        i = Math.cos(-t.heading),
        a = Math.cos(t.roll),
        u = Math.sin(-t.pitch),
        o = Math.sin(-t.heading),
        s = Math.sin(t.roll),
        c = r * i,
        l = -a * o + s * u * i,
        f = s * o + a * u * i,
        d = r * o,
        h = a * i + s * u * o,
        m = -s * i + a * u * o,
        y = -u,
        p = s * r,
        x = a * r
      return n.defined(e)
        ? ((e[0] = c),
          (e[1] = d),
          (e[2] = y),
          (e[3] = l),
          (e[4] = h),
          (e[5] = p),
          (e[6] = f),
          (e[7] = m),
          (e[8] = x),
          e)
        : new I(c, l, f, d, h, m, y, p, x)
    }),
    (I.fromScale = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t.x),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = t.y),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = t.z),
          e)
        : new I(t.x, 0, 0, 0, t.y, 0, 0, 0, t.z)
    }),
    (I.fromUniformScale = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = t),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = t),
          e)
        : new I(t, 0, 0, 0, t, 0, 0, 0, t)
    }),
    (I.fromCrossProduct = function (t, e) {
      return n.defined(e)
        ? ((e[0] = 0),
          (e[1] = t.z),
          (e[2] = -t.y),
          (e[3] = -t.z),
          (e[4] = 0),
          (e[5] = t.x),
          (e[6] = t.y),
          (e[7] = -t.x),
          (e[8] = 0),
          e)
        : new I(0, -t.z, t.y, t.z, 0, -t.x, -t.y, t.x, 0)
    }),
    (I.fromRotationX = function (t, e) {
      const r = Math.cos(t),
        i = Math.sin(t)
      return n.defined(e)
        ? ((e[0] = 1),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = r),
          (e[5] = i),
          (e[6] = 0),
          (e[7] = -i),
          (e[8] = r),
          e)
        : new I(1, 0, 0, 0, r, -i, 0, i, r)
    }),
    (I.fromRotationY = function (t, e) {
      const r = Math.cos(t),
        i = Math.sin(t)
      return n.defined(e)
        ? ((e[0] = r),
          (e[1] = 0),
          (e[2] = -i),
          (e[3] = 0),
          (e[4] = 1),
          (e[5] = 0),
          (e[6] = i),
          (e[7] = 0),
          (e[8] = r),
          e)
        : new I(r, 0, i, 0, 1, 0, -i, 0, r)
    }),
    (I.fromRotationZ = function (t, e) {
      const r = Math.cos(t),
        i = Math.sin(t)
      return n.defined(e)
        ? ((e[0] = r),
          (e[1] = i),
          (e[2] = 0),
          (e[3] = -i),
          (e[4] = r),
          (e[5] = 0),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 1),
          e)
        : new I(r, -i, 0, i, r, 0, 0, 0, 1)
    }),
    (I.toArray = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          e)
        : [t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8]]
    }),
    (I.getElementIndex = function (t, e) {
      return 3 * t + e
    }),
    (I.getColumn = function (t, e, n) {
      const r = 3 * e,
        i = t[r],
        a = t[r + 1],
        u = t[r + 2]
      return (n.x = i), (n.y = a), (n.z = u), n
    }),
    (I.setColumn = function (t, e, n, r) {
      const i = 3 * e
      return (
        ((r = I.clone(t, r))[i] = n.x), (r[i + 1] = n.y), (r[i + 2] = n.z), r
      )
    }),
    (I.getRow = function (t, e, n) {
      const r = t[e],
        i = t[e + 3],
        a = t[e + 6]
      return (n.x = r), (n.y = i), (n.z = a), n
    }),
    (I.setRow = function (t, e, n, r) {
      return (
        ((r = I.clone(t, r))[e] = n.x), (r[e + 3] = n.y), (r[e + 6] = n.z), r
      )
    })
  const N = new i()
  I.setScale = function (t, e, n) {
    const r = I.getScale(t, N),
      i = e.x / r.x,
      a = e.y / r.y,
      u = e.z / r.z
    return (
      (n[0] = t[0] * i),
      (n[1] = t[1] * i),
      (n[2] = t[2] * i),
      (n[3] = t[3] * a),
      (n[4] = t[4] * a),
      (n[5] = t[5] * a),
      (n[6] = t[6] * u),
      (n[7] = t[7] * u),
      (n[8] = t[8] * u),
      n
    )
  }
  const U = new i()
  I.setUniformScale = function (t, e, n) {
    const r = I.getScale(t, U),
      i = e / r.x,
      a = e / r.y,
      u = e / r.z
    return (
      (n[0] = t[0] * i),
      (n[1] = t[1] * i),
      (n[2] = t[2] * i),
      (n[3] = t[3] * a),
      (n[4] = t[4] * a),
      (n[5] = t[5] * a),
      (n[6] = t[6] * u),
      (n[7] = t[7] * u),
      (n[8] = t[8] * u),
      n
    )
  }
  const P = new i()
  I.getScale = function (t, e) {
    return (
      (e.x = i.magnitude(i.fromElements(t[0], t[1], t[2], P))),
      (e.y = i.magnitude(i.fromElements(t[3], t[4], t[5], P))),
      (e.z = i.magnitude(i.fromElements(t[6], t[7], t[8], P))),
      e
    )
  }
  const L = new i()
  I.getMaximumScale = function (t) {
    return I.getScale(t, L), i.maximumComponent(L)
  }
  const k = new i()
  I.setRotation = function (t, e, n) {
    const r = I.getScale(t, k)
    return (
      (n[0] = e[0] * r.x),
      (n[1] = e[1] * r.x),
      (n[2] = e[2] * r.x),
      (n[3] = e[3] * r.y),
      (n[4] = e[4] * r.y),
      (n[5] = e[5] * r.y),
      (n[6] = e[6] * r.z),
      (n[7] = e[7] * r.z),
      (n[8] = e[8] * r.z),
      n
    )
  }
  const W = new i()
  ;(I.getRotation = function (t, e) {
    const n = I.getScale(t, W)
    return (
      (e[0] = t[0] / n.x),
      (e[1] = t[1] / n.x),
      (e[2] = t[2] / n.x),
      (e[3] = t[3] / n.y),
      (e[4] = t[4] / n.y),
      (e[5] = t[5] / n.y),
      (e[6] = t[6] / n.z),
      (e[7] = t[7] / n.z),
      (e[8] = t[8] / n.z),
      e
    )
  }),
    (I.multiply = function (t, e, n) {
      const r = t[0] * e[0] + t[3] * e[1] + t[6] * e[2],
        i = t[1] * e[0] + t[4] * e[1] + t[7] * e[2],
        a = t[2] * e[0] + t[5] * e[1] + t[8] * e[2],
        u = t[0] * e[3] + t[3] * e[4] + t[6] * e[5],
        o = t[1] * e[3] + t[4] * e[4] + t[7] * e[5],
        s = t[2] * e[3] + t[5] * e[4] + t[8] * e[5],
        c = t[0] * e[6] + t[3] * e[7] + t[6] * e[8],
        l = t[1] * e[6] + t[4] * e[7] + t[7] * e[8],
        f = t[2] * e[6] + t[5] * e[7] + t[8] * e[8]
      return (
        (n[0] = r),
        (n[1] = i),
        (n[2] = a),
        (n[3] = u),
        (n[4] = o),
        (n[5] = s),
        (n[6] = c),
        (n[7] = l),
        (n[8] = f),
        n
      )
    }),
    (I.add = function (t, e, n) {
      return (
        (n[0] = t[0] + e[0]),
        (n[1] = t[1] + e[1]),
        (n[2] = t[2] + e[2]),
        (n[3] = t[3] + e[3]),
        (n[4] = t[4] + e[4]),
        (n[5] = t[5] + e[5]),
        (n[6] = t[6] + e[6]),
        (n[7] = t[7] + e[7]),
        (n[8] = t[8] + e[8]),
        n
      )
    }),
    (I.subtract = function (t, e, n) {
      return (
        (n[0] = t[0] - e[0]),
        (n[1] = t[1] - e[1]),
        (n[2] = t[2] - e[2]),
        (n[3] = t[3] - e[3]),
        (n[4] = t[4] - e[4]),
        (n[5] = t[5] - e[5]),
        (n[6] = t[6] - e[6]),
        (n[7] = t[7] - e[7]),
        (n[8] = t[8] - e[8]),
        n
      )
    }),
    (I.multiplyByVector = function (t, e, n) {
      const r = e.x,
        i = e.y,
        a = e.z,
        u = t[0] * r + t[3] * i + t[6] * a,
        o = t[1] * r + t[4] * i + t[7] * a,
        s = t[2] * r + t[5] * i + t[8] * a
      return (n.x = u), (n.y = o), (n.z = s), n
    }),
    (I.multiplyByScalar = function (t, e, n) {
      return (
        (n[0] = t[0] * e),
        (n[1] = t[1] * e),
        (n[2] = t[2] * e),
        (n[3] = t[3] * e),
        (n[4] = t[4] * e),
        (n[5] = t[5] * e),
        (n[6] = t[6] * e),
        (n[7] = t[7] * e),
        (n[8] = t[8] * e),
        n
      )
    }),
    (I.multiplyByScale = function (t, e, n) {
      return (
        (n[0] = t[0] * e.x),
        (n[1] = t[1] * e.x),
        (n[2] = t[2] * e.x),
        (n[3] = t[3] * e.y),
        (n[4] = t[4] * e.y),
        (n[5] = t[5] * e.y),
        (n[6] = t[6] * e.z),
        (n[7] = t[7] * e.z),
        (n[8] = t[8] * e.z),
        n
      )
    }),
    (I.multiplyByUniformScale = function (t, e, n) {
      return (
        (n[0] = t[0] * e),
        (n[1] = t[1] * e),
        (n[2] = t[2] * e),
        (n[3] = t[3] * e),
        (n[4] = t[4] * e),
        (n[5] = t[5] * e),
        (n[6] = t[6] * e),
        (n[7] = t[7] * e),
        (n[8] = t[8] * e),
        n
      )
    }),
    (I.negate = function (t, e) {
      return (
        (e[0] = -t[0]),
        (e[1] = -t[1]),
        (e[2] = -t[2]),
        (e[3] = -t[3]),
        (e[4] = -t[4]),
        (e[5] = -t[5]),
        (e[6] = -t[6]),
        (e[7] = -t[7]),
        (e[8] = -t[8]),
        e
      )
    }),
    (I.transpose = function (t, e) {
      const n = t[0],
        r = t[3],
        i = t[6],
        a = t[1],
        u = t[4],
        o = t[7],
        s = t[2],
        c = t[5],
        l = t[8]
      return (
        (e[0] = n),
        (e[1] = r),
        (e[2] = i),
        (e[3] = a),
        (e[4] = u),
        (e[5] = o),
        (e[6] = s),
        (e[7] = c),
        (e[8] = l),
        e
      )
    })
  const v = [1, 0, 0],
    B = [2, 2, 1]
  function $(t) {
    let e = 0
    for (let n = 0; n < 3; ++n) {
      const r = t[I.getElementIndex(B[n], v[n])]
      e += 2 * r * r
    }
    return Math.sqrt(e)
  }
  function j(t, e) {
    const n = r.CesiumMath.EPSILON15
    let i = 0,
      a = 1
    for (let e = 0; e < 3; ++e) {
      const n = Math.abs(t[I.getElementIndex(B[e], v[e])])
      n > i && ((a = e), (i = n))
    }
    let u = 1,
      o = 0
    const s = v[a],
      c = B[a]
    if (Math.abs(t[I.getElementIndex(c, s)]) > n) {
      const e =
        (t[I.getElementIndex(c, c)] - t[I.getElementIndex(s, s)]) /
        2 /
        t[I.getElementIndex(c, s)]
      let n
      ;(n =
        e < 0
          ? -1 / (-e + Math.sqrt(1 + e * e))
          : 1 / (e + Math.sqrt(1 + e * e))),
        (u = 1 / Math.sqrt(1 + n * n)),
        (o = n * u)
    }
    return (
      ((e = I.clone(I.IDENTITY, e))[I.getElementIndex(s, s)] = e[
        I.getElementIndex(c, c)
      ] =
        u),
      (e[I.getElementIndex(c, s)] = o),
      (e[I.getElementIndex(s, c)] = -o),
      e
    )
  }
  const X = new I(),
    Z = new I()
  ;(I.computeEigenDecomposition = function (t, e) {
    const i = r.CesiumMath.EPSILON20
    let a = 0,
      u = 0
    n.defined(e) || (e = {})
    const o = (e.unitary = I.clone(I.IDENTITY, e.unitary)),
      s = (e.diagonal = I.clone(t, e.diagonal)),
      c =
        i *
        (function (t) {
          let e = 0
          for (let n = 0; n < 9; ++n) {
            const r = t[n]
            e += r * r
          }
          return Math.sqrt(e)
        })(s)
    for (; u < 10 && $(s) > c; )
      j(s, X),
        I.transpose(X, Z),
        I.multiply(s, X, s),
        I.multiply(Z, s, s),
        I.multiply(o, X, o),
        ++a > 2 && (++u, (a = 0))
    return e
  }),
    (I.abs = function (t, e) {
      return (
        (e[0] = Math.abs(t[0])),
        (e[1] = Math.abs(t[1])),
        (e[2] = Math.abs(t[2])),
        (e[3] = Math.abs(t[3])),
        (e[4] = Math.abs(t[4])),
        (e[5] = Math.abs(t[5])),
        (e[6] = Math.abs(t[6])),
        (e[7] = Math.abs(t[7])),
        (e[8] = Math.abs(t[8])),
        e
      )
    }),
    (I.determinant = function (t) {
      const e = t[0],
        n = t[3],
        r = t[6],
        i = t[1],
        a = t[4],
        u = t[7],
        o = t[2],
        s = t[5],
        c = t[8]
      return e * (a * c - s * u) + i * (s * r - n * c) + o * (n * u - a * r)
    }),
    (I.inverse = function (t, e) {
      const n = t[0],
        r = t[1],
        i = t[2],
        a = t[3],
        u = t[4],
        o = t[5],
        s = t[6],
        c = t[7],
        l = t[8],
        f = I.determinant(t)
      ;(e[0] = u * l - c * o),
        (e[1] = c * i - r * l),
        (e[2] = r * o - u * i),
        (e[3] = s * o - a * l),
        (e[4] = n * l - s * i),
        (e[5] = a * i - n * o),
        (e[6] = a * c - s * u),
        (e[7] = s * r - n * c),
        (e[8] = n * u - a * r)
      const d = 1 / f
      return I.multiplyByScalar(e, d, e)
    })
  const D = new I()
  function Y(t, e, r, i) {
    ;(this.x = n.defaultValue(t, 0)),
      (this.y = n.defaultValue(e, 0)),
      (this.z = n.defaultValue(r, 0)),
      (this.w = n.defaultValue(i, 0))
  }
  ;(I.inverseTranspose = function (t, e) {
    return I.inverse(I.transpose(t, D), e)
  }),
    (I.equals = function (t, e) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          t[0] === e[0] &&
          t[1] === e[1] &&
          t[2] === e[2] &&
          t[3] === e[3] &&
          t[4] === e[4] &&
          t[5] === e[5] &&
          t[6] === e[6] &&
          t[7] === e[7] &&
          t[8] === e[8])
      )
    }),
    (I.equalsEpsilon = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        t === e ||
          (n.defined(t) &&
            n.defined(e) &&
            Math.abs(t[0] - e[0]) <= r &&
            Math.abs(t[1] - e[1]) <= r &&
            Math.abs(t[2] - e[2]) <= r &&
            Math.abs(t[3] - e[3]) <= r &&
            Math.abs(t[4] - e[4]) <= r &&
            Math.abs(t[5] - e[5]) <= r &&
            Math.abs(t[6] - e[6]) <= r &&
            Math.abs(t[7] - e[7]) <= r &&
            Math.abs(t[8] - e[8]) <= r)
      )
    }),
    (I.IDENTITY = Object.freeze(new I(1, 0, 0, 0, 1, 0, 0, 0, 1))),
    (I.ZERO = Object.freeze(new I(0, 0, 0, 0, 0, 0, 0, 0, 0))),
    (I.COLUMN0ROW0 = 0),
    (I.COLUMN0ROW1 = 1),
    (I.COLUMN0ROW2 = 2),
    (I.COLUMN1ROW0 = 3),
    (I.COLUMN1ROW1 = 4),
    (I.COLUMN1ROW2 = 5),
    (I.COLUMN2ROW0 = 6),
    (I.COLUMN2ROW1 = 7),
    (I.COLUMN2ROW2 = 8),
    Object.defineProperties(I.prototype, {
      length: {
        get: function () {
          return I.packedLength
        }
      }
    }),
    (I.prototype.clone = function (t) {
      return I.clone(this, t)
    }),
    (I.prototype.equals = function (t) {
      return I.equals(this, t)
    }),
    (I.equalsArray = function (t, e, n) {
      return (
        t[0] === e[n] &&
        t[1] === e[n + 1] &&
        t[2] === e[n + 2] &&
        t[3] === e[n + 3] &&
        t[4] === e[n + 4] &&
        t[5] === e[n + 5] &&
        t[6] === e[n + 6] &&
        t[7] === e[n + 7] &&
        t[8] === e[n + 8]
      )
    }),
    (I.prototype.equalsEpsilon = function (t, e) {
      return I.equalsEpsilon(this, t, e)
    }),
    (I.prototype.toString = function () {
      return `(${this[0]}, ${this[3]}, ${this[6]})\n(${this[1]}, ${this[4]}, ${this[7]})\n(${this[2]}, ${this[5]}, ${this[8]})`
    }),
    (Y.fromElements = function (t, e, r, i, a) {
      return n.defined(a)
        ? ((a.x = t), (a.y = e), (a.z = r), (a.w = i), a)
        : new Y(t, e, r, i)
    }),
    (Y.fromColor = function (t, e) {
      return n.defined(e)
        ? ((e.x = t.red), (e.y = t.green), (e.z = t.blue), (e.w = t.alpha), e)
        : new Y(t.red, t.green, t.blue, t.alpha)
    }),
    (Y.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e)
          ? ((e.x = t.x), (e.y = t.y), (e.z = t.z), (e.w = t.w), e)
          : new Y(t.x, t.y, t.z, t.w)
    }),
    (Y.packedLength = 4),
    (Y.pack = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        (e[r++] = t.x),
        (e[r++] = t.y),
        (e[r++] = t.z),
        (e[r] = t.w),
        e
      )
    }),
    (Y.unpack = function (t, e, r) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(r) || (r = new Y()),
        (r.x = t[e++]),
        (r.y = t[e++]),
        (r.z = t[e++]),
        (r.w = t[e]),
        r
      )
    }),
    (Y.packArray = function (t, e) {
      const r = t.length,
        i = 4 * r
      n.defined(e)
        ? (Array.isArray(e) || e.length === i) &&
          e.length !== i &&
          (e.length = i)
        : (e = new Array(i))
      for (let n = 0; n < r; ++n) Y.pack(t[n], e, 4 * n)
      return e
    }),
    (Y.unpackArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r / 4) : (e = new Array(r / 4))
      for (let n = 0; n < r; n += 4) {
        const r = n / 4
        e[r] = Y.unpack(t, n, e[r])
      }
      return e
    }),
    (Y.fromArray = Y.unpack),
    (Y.maximumComponent = function (t) {
      return Math.max(t.x, t.y, t.z, t.w)
    }),
    (Y.minimumComponent = function (t) {
      return Math.min(t.x, t.y, t.z, t.w)
    }),
    (Y.minimumByComponent = function (t, e, n) {
      return (
        (n.x = Math.min(t.x, e.x)),
        (n.y = Math.min(t.y, e.y)),
        (n.z = Math.min(t.z, e.z)),
        (n.w = Math.min(t.w, e.w)),
        n
      )
    }),
    (Y.maximumByComponent = function (t, e, n) {
      return (
        (n.x = Math.max(t.x, e.x)),
        (n.y = Math.max(t.y, e.y)),
        (n.z = Math.max(t.z, e.z)),
        (n.w = Math.max(t.w, e.w)),
        n
      )
    }),
    (Y.clamp = function (t, e, n, i) {
      const a = r.CesiumMath.clamp(t.x, e.x, n.x),
        u = r.CesiumMath.clamp(t.y, e.y, n.y),
        o = r.CesiumMath.clamp(t.z, e.z, n.z),
        s = r.CesiumMath.clamp(t.w, e.w, n.w)
      return (i.x = a), (i.y = u), (i.z = o), (i.w = s), i
    }),
    (Y.magnitudeSquared = function (t) {
      return t.x * t.x + t.y * t.y + t.z * t.z + t.w * t.w
    }),
    (Y.magnitude = function (t) {
      return Math.sqrt(Y.magnitudeSquared(t))
    })
  const F = new Y()
  ;(Y.distance = function (t, e) {
    return Y.subtract(t, e, F), Y.magnitude(F)
  }),
    (Y.distanceSquared = function (t, e) {
      return Y.subtract(t, e, F), Y.magnitudeSquared(F)
    }),
    (Y.normalize = function (t, e) {
      const n = Y.magnitude(t)
      return (
        (e.x = t.x / n), (e.y = t.y / n), (e.z = t.z / n), (e.w = t.w / n), e
      )
    }),
    (Y.dot = function (t, e) {
      return t.x * e.x + t.y * e.y + t.z * e.z + t.w * e.w
    }),
    (Y.multiplyComponents = function (t, e, n) {
      return (
        (n.x = t.x * e.x),
        (n.y = t.y * e.y),
        (n.z = t.z * e.z),
        (n.w = t.w * e.w),
        n
      )
    }),
    (Y.divideComponents = function (t, e, n) {
      return (
        (n.x = t.x / e.x),
        (n.y = t.y / e.y),
        (n.z = t.z / e.z),
        (n.w = t.w / e.w),
        n
      )
    }),
    (Y.add = function (t, e, n) {
      return (
        (n.x = t.x + e.x),
        (n.y = t.y + e.y),
        (n.z = t.z + e.z),
        (n.w = t.w + e.w),
        n
      )
    }),
    (Y.subtract = function (t, e, n) {
      return (
        (n.x = t.x - e.x),
        (n.y = t.y - e.y),
        (n.z = t.z - e.z),
        (n.w = t.w - e.w),
        n
      )
    }),
    (Y.multiplyByScalar = function (t, e, n) {
      return (
        (n.x = t.x * e), (n.y = t.y * e), (n.z = t.z * e), (n.w = t.w * e), n
      )
    }),
    (Y.divideByScalar = function (t, e, n) {
      return (
        (n.x = t.x / e), (n.y = t.y / e), (n.z = t.z / e), (n.w = t.w / e), n
      )
    }),
    (Y.negate = function (t, e) {
      return (e.x = -t.x), (e.y = -t.y), (e.z = -t.z), (e.w = -t.w), e
    }),
    (Y.abs = function (t, e) {
      return (
        (e.x = Math.abs(t.x)),
        (e.y = Math.abs(t.y)),
        (e.z = Math.abs(t.z)),
        (e.w = Math.abs(t.w)),
        e
      )
    })
  const G = new Y()
  Y.lerp = function (t, e, n, r) {
    return (
      Y.multiplyByScalar(e, n, G),
      (r = Y.multiplyByScalar(t, 1 - n, r)),
      Y.add(G, r, r)
    )
  }
  const H = new Y()
  ;(Y.mostOrthogonalAxis = function (t, e) {
    const n = Y.normalize(t, H)
    return (
      Y.abs(n, n),
      (e =
        n.x <= n.y
          ? n.x <= n.z
            ? n.x <= n.w
              ? Y.clone(Y.UNIT_X, e)
              : Y.clone(Y.UNIT_W, e)
            : n.z <= n.w
              ? Y.clone(Y.UNIT_Z, e)
              : Y.clone(Y.UNIT_W, e)
          : n.y <= n.z
            ? n.y <= n.w
              ? Y.clone(Y.UNIT_Y, e)
              : Y.clone(Y.UNIT_W, e)
            : n.z <= n.w
              ? Y.clone(Y.UNIT_Z, e)
              : Y.clone(Y.UNIT_W, e))
    )
  }),
    (Y.equals = function (t, e) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          t.x === e.x &&
          t.y === e.y &&
          t.z === e.z &&
          t.w === e.w)
      )
    }),
    (Y.equalsArray = function (t, e, n) {
      return (
        t.x === e[n] && t.y === e[n + 1] && t.z === e[n + 2] && t.w === e[n + 3]
      )
    }),
    (Y.equalsEpsilon = function (t, e, i, a) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          r.CesiumMath.equalsEpsilon(t.x, e.x, i, a) &&
          r.CesiumMath.equalsEpsilon(t.y, e.y, i, a) &&
          r.CesiumMath.equalsEpsilon(t.z, e.z, i, a) &&
          r.CesiumMath.equalsEpsilon(t.w, e.w, i, a))
      )
    }),
    (Y.ZERO = Object.freeze(new Y(0, 0, 0, 0))),
    (Y.ONE = Object.freeze(new Y(1, 1, 1, 1))),
    (Y.UNIT_X = Object.freeze(new Y(1, 0, 0, 0))),
    (Y.UNIT_Y = Object.freeze(new Y(0, 1, 0, 0))),
    (Y.UNIT_Z = Object.freeze(new Y(0, 0, 1, 0))),
    (Y.UNIT_W = Object.freeze(new Y(0, 0, 0, 1))),
    (Y.prototype.clone = function (t) {
      return Y.clone(this, t)
    }),
    (Y.prototype.equals = function (t) {
      return Y.equals(this, t)
    }),
    (Y.prototype.equalsEpsilon = function (t, e, n) {
      return Y.equalsEpsilon(this, t, e, n)
    }),
    (Y.prototype.toString = function () {
      return `(${this.x}, ${this.y}, ${this.z}, ${this.w})`
    })
  const Q = new Float32Array(1),
    J = new Uint8Array(Q.buffer),
    K = new Uint32Array([287454020]),
    tt = 68 === new Uint8Array(K.buffer)[0]
  function et(t, e, r, i, a, u, o, s, c, l, f, d, h, m, y, p) {
    ;(this[0] = n.defaultValue(t, 0)),
      (this[1] = n.defaultValue(a, 0)),
      (this[2] = n.defaultValue(c, 0)),
      (this[3] = n.defaultValue(h, 0)),
      (this[4] = n.defaultValue(e, 0)),
      (this[5] = n.defaultValue(u, 0)),
      (this[6] = n.defaultValue(l, 0)),
      (this[7] = n.defaultValue(m, 0)),
      (this[8] = n.defaultValue(r, 0)),
      (this[9] = n.defaultValue(o, 0)),
      (this[10] = n.defaultValue(f, 0)),
      (this[11] = n.defaultValue(y, 0)),
      (this[12] = n.defaultValue(i, 0)),
      (this[13] = n.defaultValue(s, 0)),
      (this[14] = n.defaultValue(d, 0)),
      (this[15] = n.defaultValue(p, 0))
  }
  ;(Y.packFloat = function (t, e) {
    return (
      n.defined(e) || (e = new Y()),
      (Q[0] = t),
      tt
        ? ((e.x = J[0]), (e.y = J[1]), (e.z = J[2]), (e.w = J[3]))
        : ((e.x = J[3]), (e.y = J[2]), (e.z = J[1]), (e.w = J[0])),
      e
    )
  }),
    (Y.unpackFloat = function (t) {
      return (
        tt
          ? ((J[0] = t.x), (J[1] = t.y), (J[2] = t.z), (J[3] = t.w))
          : ((J[0] = t.w), (J[1] = t.z), (J[2] = t.y), (J[3] = t.x)),
        Q[0]
      )
    }),
    (et.packedLength = 16),
    (et.pack = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        (e[r++] = t[0]),
        (e[r++] = t[1]),
        (e[r++] = t[2]),
        (e[r++] = t[3]),
        (e[r++] = t[4]),
        (e[r++] = t[5]),
        (e[r++] = t[6]),
        (e[r++] = t[7]),
        (e[r++] = t[8]),
        (e[r++] = t[9]),
        (e[r++] = t[10]),
        (e[r++] = t[11]),
        (e[r++] = t[12]),
        (e[r++] = t[13]),
        (e[r++] = t[14]),
        (e[r] = t[15]),
        e
      )
    }),
    (et.unpack = function (t, e, r) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(r) || (r = new et()),
        (r[0] = t[e++]),
        (r[1] = t[e++]),
        (r[2] = t[e++]),
        (r[3] = t[e++]),
        (r[4] = t[e++]),
        (r[5] = t[e++]),
        (r[6] = t[e++]),
        (r[7] = t[e++]),
        (r[8] = t[e++]),
        (r[9] = t[e++]),
        (r[10] = t[e++]),
        (r[11] = t[e++]),
        (r[12] = t[e++]),
        (r[13] = t[e++]),
        (r[14] = t[e++]),
        (r[15] = t[e]),
        r
      )
    }),
    (et.packArray = function (t, e) {
      const r = t.length,
        i = 16 * r
      n.defined(e)
        ? (Array.isArray(e) || e.length === i) &&
          e.length !== i &&
          (e.length = i)
        : (e = new Array(i))
      for (let n = 0; n < r; ++n) et.pack(t[n], e, 16 * n)
      return e
    }),
    (et.unpackArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r / 16) : (e = new Array(r / 16))
      for (let n = 0; n < r; n += 16) {
        const r = n / 16
        e[r] = et.unpack(t, n, e[r])
      }
      return e
    }),
    (et.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e)
          ? ((e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[8] = t[8]),
            (e[9] = t[9]),
            (e[10] = t[10]),
            (e[11] = t[11]),
            (e[12] = t[12]),
            (e[13] = t[13]),
            (e[14] = t[14]),
            (e[15] = t[15]),
            e)
          : new et(
              t[0],
              t[4],
              t[8],
              t[12],
              t[1],
              t[5],
              t[9],
              t[13],
              t[2],
              t[6],
              t[10],
              t[14],
              t[3],
              t[7],
              t[11],
              t[15]
            )
    }),
    (et.fromArray = et.unpack),
    (et.fromColumnMajorArray = function (t, e) {
      return et.clone(t, e)
    }),
    (et.fromRowMajorArray = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t[0]),
          (e[1] = t[4]),
          (e[2] = t[8]),
          (e[3] = t[12]),
          (e[4] = t[1]),
          (e[5] = t[5]),
          (e[6] = t[9]),
          (e[7] = t[13]),
          (e[8] = t[2]),
          (e[9] = t[6]),
          (e[10] = t[10]),
          (e[11] = t[14]),
          (e[12] = t[3]),
          (e[13] = t[7]),
          (e[14] = t[11]),
          (e[15] = t[15]),
          e)
        : new et(
            t[0],
            t[1],
            t[2],
            t[3],
            t[4],
            t[5],
            t[6],
            t[7],
            t[8],
            t[9],
            t[10],
            t[11],
            t[12],
            t[13],
            t[14],
            t[15]
          )
    }),
    (et.fromRotationTranslation = function (t, e, r) {
      return (
        (e = n.defaultValue(e, i.ZERO)),
        n.defined(r)
          ? ((r[0] = t[0]),
            (r[1] = t[1]),
            (r[2] = t[2]),
            (r[3] = 0),
            (r[4] = t[3]),
            (r[5] = t[4]),
            (r[6] = t[5]),
            (r[7] = 0),
            (r[8] = t[6]),
            (r[9] = t[7]),
            (r[10] = t[8]),
            (r[11] = 0),
            (r[12] = e.x),
            (r[13] = e.y),
            (r[14] = e.z),
            (r[15] = 1),
            r)
          : new et(
              t[0],
              t[3],
              t[6],
              e.x,
              t[1],
              t[4],
              t[7],
              e.y,
              t[2],
              t[5],
              t[8],
              e.z,
              0,
              0,
              0,
              1
            )
      )
    }),
    (et.fromTranslationQuaternionRotationScale = function (t, e, r, i) {
      n.defined(i) || (i = new et())
      const a = r.x,
        u = r.y,
        o = r.z,
        s = e.x * e.x,
        c = e.x * e.y,
        l = e.x * e.z,
        f = e.x * e.w,
        d = e.y * e.y,
        h = e.y * e.z,
        m = e.y * e.w,
        y = e.z * e.z,
        p = e.z * e.w,
        x = e.w * e.w,
        w = s - d - y + x,
        M = 2 * (c - p),
        g = 2 * (l + m),
        z = 2 * (c + p),
        C = -s + d - y + x,
        O = 2 * (h - f),
        b = 2 * (l - m),
        S = 2 * (h + f),
        q = -s - d + y + x
      return (
        (i[0] = w * a),
        (i[1] = z * a),
        (i[2] = b * a),
        (i[3] = 0),
        (i[4] = M * u),
        (i[5] = C * u),
        (i[6] = S * u),
        (i[7] = 0),
        (i[8] = g * o),
        (i[9] = O * o),
        (i[10] = q * o),
        (i[11] = 0),
        (i[12] = t.x),
        (i[13] = t.y),
        (i[14] = t.z),
        (i[15] = 1),
        i
      )
    }),
    (et.fromTranslationRotationScale = function (t, e) {
      return et.fromTranslationQuaternionRotationScale(
        t.translation,
        t.rotation,
        t.scale,
        e
      )
    }),
    (et.fromTranslation = function (t, e) {
      return et.fromRotationTranslation(I.IDENTITY, t, e)
    }),
    (et.fromScale = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t.x),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = t.y),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = t.z),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e)
        : new et(t.x, 0, 0, 0, 0, t.y, 0, 0, 0, 0, t.z, 0, 0, 0, 0, 1)
    }),
    (et.fromUniformScale = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t),
          (e[1] = 0),
          (e[2] = 0),
          (e[3] = 0),
          (e[4] = 0),
          (e[5] = t),
          (e[6] = 0),
          (e[7] = 0),
          (e[8] = 0),
          (e[9] = 0),
          (e[10] = t),
          (e[11] = 0),
          (e[12] = 0),
          (e[13] = 0),
          (e[14] = 0),
          (e[15] = 1),
          e)
        : new et(t, 0, 0, 0, 0, t, 0, 0, 0, 0, t, 0, 0, 0, 0, 1)
    }),
    (et.fromRotation = function (t, e) {
      return (
        n.defined(e) || (e = new et()),
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = 0),
        (e[4] = t[3]),
        (e[5] = t[4]),
        (e[6] = t[5]),
        (e[7] = 0),
        (e[8] = t[6]),
        (e[9] = t[7]),
        (e[10] = t[8]),
        (e[11] = 0),
        (e[12] = 0),
        (e[13] = 0),
        (e[14] = 0),
        (e[15] = 1),
        e
      )
    })
  const nt = new i(),
    rt = new i(),
    it = new i()
  ;(et.fromCamera = function (t, e) {
    const r = t.position,
      a = t.direction,
      u = t.up
    i.normalize(a, nt),
      i.normalize(i.cross(nt, u, rt), rt),
      i.normalize(i.cross(rt, nt, it), it)
    const o = rt.x,
      s = rt.y,
      c = rt.z,
      l = nt.x,
      f = nt.y,
      d = nt.z,
      h = it.x,
      m = it.y,
      y = it.z,
      p = r.x,
      x = r.y,
      w = r.z,
      M = o * -p + s * -x + c * -w,
      g = h * -p + m * -x + y * -w,
      z = l * p + f * x + d * w
    return n.defined(e)
      ? ((e[0] = o),
        (e[1] = h),
        (e[2] = -l),
        (e[3] = 0),
        (e[4] = s),
        (e[5] = m),
        (e[6] = -f),
        (e[7] = 0),
        (e[8] = c),
        (e[9] = y),
        (e[10] = -d),
        (e[11] = 0),
        (e[12] = M),
        (e[13] = g),
        (e[14] = z),
        (e[15] = 1),
        e)
      : new et(o, s, c, M, h, m, y, g, -l, -f, -d, z, 0, 0, 0, 1)
  }),
    (et.computePerspectiveFieldOfView = function (t, e, n, r, i) {
      const a = 1 / Math.tan(0.5 * t),
        u = a / e,
        o = (r + n) / (n - r),
        s = (2 * r * n) / (n - r)
      return (
        (i[0] = u),
        (i[1] = 0),
        (i[2] = 0),
        (i[3] = 0),
        (i[4] = 0),
        (i[5] = a),
        (i[6] = 0),
        (i[7] = 0),
        (i[8] = 0),
        (i[9] = 0),
        (i[10] = o),
        (i[11] = -1),
        (i[12] = 0),
        (i[13] = 0),
        (i[14] = s),
        (i[15] = 0),
        i
      )
    }),
    (et.computeOrthographicOffCenter = function (t, e, n, r, i, a, u) {
      let o = 1 / (e - t),
        s = 1 / (r - n),
        c = 1 / (a - i)
      const l = -(e + t) * o,
        f = -(r + n) * s,
        d = -(a + i) * c
      return (
        (o *= 2),
        (s *= 2),
        (c *= -2),
        (u[0] = o),
        (u[1] = 0),
        (u[2] = 0),
        (u[3] = 0),
        (u[4] = 0),
        (u[5] = s),
        (u[6] = 0),
        (u[7] = 0),
        (u[8] = 0),
        (u[9] = 0),
        (u[10] = c),
        (u[11] = 0),
        (u[12] = l),
        (u[13] = f),
        (u[14] = d),
        (u[15] = 1),
        u
      )
    }),
    (et.computePerspectiveOffCenter = function (t, e, n, r, i, a, u) {
      const o = (2 * i) / (e - t),
        s = (2 * i) / (r - n),
        c = (e + t) / (e - t),
        l = (r + n) / (r - n),
        f = -(a + i) / (a - i),
        d = (-2 * a * i) / (a - i)
      return (
        (u[0] = o),
        (u[1] = 0),
        (u[2] = 0),
        (u[3] = 0),
        (u[4] = 0),
        (u[5] = s),
        (u[6] = 0),
        (u[7] = 0),
        (u[8] = c),
        (u[9] = l),
        (u[10] = f),
        (u[11] = -1),
        (u[12] = 0),
        (u[13] = 0),
        (u[14] = d),
        (u[15] = 0),
        u
      )
    }),
    (et.computeInfinitePerspectiveOffCenter = function (t, e, n, r, i, a) {
      const u = (2 * i) / (e - t),
        o = (2 * i) / (r - n),
        s = (e + t) / (e - t),
        c = (r + n) / (r - n),
        l = -2 * i
      return (
        (a[0] = u),
        (a[1] = 0),
        (a[2] = 0),
        (a[3] = 0),
        (a[4] = 0),
        (a[5] = o),
        (a[6] = 0),
        (a[7] = 0),
        (a[8] = s),
        (a[9] = c),
        (a[10] = -1),
        (a[11] = -1),
        (a[12] = 0),
        (a[13] = 0),
        (a[14] = l),
        (a[15] = 0),
        a
      )
    }),
    (et.computeViewportTransformation = function (t, e, r, i) {
      n.defined(i) || (i = new et()),
        (t = n.defaultValue(t, n.defaultValue.EMPTY_OBJECT))
      const a = n.defaultValue(t.x, 0),
        u = n.defaultValue(t.y, 0),
        o = n.defaultValue(t.width, 0),
        s = n.defaultValue(t.height, 0)
      e = n.defaultValue(e, 0)
      const c = 0.5 * o,
        l = 0.5 * s,
        f = 0.5 * ((r = n.defaultValue(r, 1)) - e),
        d = c,
        h = l,
        m = f,
        y = a + c,
        p = u + l,
        x = e + f
      return (
        (i[0] = d),
        (i[1] = 0),
        (i[2] = 0),
        (i[3] = 0),
        (i[4] = 0),
        (i[5] = h),
        (i[6] = 0),
        (i[7] = 0),
        (i[8] = 0),
        (i[9] = 0),
        (i[10] = m),
        (i[11] = 0),
        (i[12] = y),
        (i[13] = p),
        (i[14] = x),
        (i[15] = 1),
        i
      )
    }),
    (et.computeView = function (t, e, n, r, a) {
      return (
        (a[0] = r.x),
        (a[1] = n.x),
        (a[2] = -e.x),
        (a[3] = 0),
        (a[4] = r.y),
        (a[5] = n.y),
        (a[6] = -e.y),
        (a[7] = 0),
        (a[8] = r.z),
        (a[9] = n.z),
        (a[10] = -e.z),
        (a[11] = 0),
        (a[12] = -i.dot(r, t)),
        (a[13] = -i.dot(n, t)),
        (a[14] = i.dot(e, t)),
        (a[15] = 1),
        a
      )
    }),
    (et.toArray = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[3]),
          (e[4] = t[4]),
          (e[5] = t[5]),
          (e[6] = t[6]),
          (e[7] = t[7]),
          (e[8] = t[8]),
          (e[9] = t[9]),
          (e[10] = t[10]),
          (e[11] = t[11]),
          (e[12] = t[12]),
          (e[13] = t[13]),
          (e[14] = t[14]),
          (e[15] = t[15]),
          e)
        : [
            t[0],
            t[1],
            t[2],
            t[3],
            t[4],
            t[5],
            t[6],
            t[7],
            t[8],
            t[9],
            t[10],
            t[11],
            t[12],
            t[13],
            t[14],
            t[15]
          ]
    }),
    (et.getElementIndex = function (t, e) {
      return 4 * t + e
    }),
    (et.getColumn = function (t, e, n) {
      const r = 4 * e,
        i = t[r],
        a = t[r + 1],
        u = t[r + 2],
        o = t[r + 3]
      return (n.x = i), (n.y = a), (n.z = u), (n.w = o), n
    }),
    (et.setColumn = function (t, e, n, r) {
      const i = 4 * e
      return (
        ((r = et.clone(t, r))[i] = n.x),
        (r[i + 1] = n.y),
        (r[i + 2] = n.z),
        (r[i + 3] = n.w),
        r
      )
    }),
    (et.getRow = function (t, e, n) {
      const r = t[e],
        i = t[e + 4],
        a = t[e + 8],
        u = t[e + 12]
      return (n.x = r), (n.y = i), (n.z = a), (n.w = u), n
    }),
    (et.setRow = function (t, e, n, r) {
      return (
        ((r = et.clone(t, r))[e] = n.x),
        (r[e + 4] = n.y),
        (r[e + 8] = n.z),
        (r[e + 12] = n.w),
        r
      )
    }),
    (et.setTranslation = function (t, e, n) {
      return (
        (n[0] = t[0]),
        (n[1] = t[1]),
        (n[2] = t[2]),
        (n[3] = t[3]),
        (n[4] = t[4]),
        (n[5] = t[5]),
        (n[6] = t[6]),
        (n[7] = t[7]),
        (n[8] = t[8]),
        (n[9] = t[9]),
        (n[10] = t[10]),
        (n[11] = t[11]),
        (n[12] = e.x),
        (n[13] = e.y),
        (n[14] = e.z),
        (n[15] = t[15]),
        n
      )
    })
  const at = new i()
  et.setScale = function (t, e, n) {
    const r = et.getScale(t, at),
      i = e.x / r.x,
      a = e.y / r.y,
      u = e.z / r.z
    return (
      (n[0] = t[0] * i),
      (n[1] = t[1] * i),
      (n[2] = t[2] * i),
      (n[3] = t[3]),
      (n[4] = t[4] * a),
      (n[5] = t[5] * a),
      (n[6] = t[6] * a),
      (n[7] = t[7]),
      (n[8] = t[8] * u),
      (n[9] = t[9] * u),
      (n[10] = t[10] * u),
      (n[11] = t[11]),
      (n[12] = t[12]),
      (n[13] = t[13]),
      (n[14] = t[14]),
      (n[15] = t[15]),
      n
    )
  }
  const ut = new i()
  et.setUniformScale = function (t, e, n) {
    const r = et.getScale(t, ut),
      i = e / r.x,
      a = e / r.y,
      u = e / r.z
    return (
      (n[0] = t[0] * i),
      (n[1] = t[1] * i),
      (n[2] = t[2] * i),
      (n[3] = t[3]),
      (n[4] = t[4] * a),
      (n[5] = t[5] * a),
      (n[6] = t[6] * a),
      (n[7] = t[7]),
      (n[8] = t[8] * u),
      (n[9] = t[9] * u),
      (n[10] = t[10] * u),
      (n[11] = t[11]),
      (n[12] = t[12]),
      (n[13] = t[13]),
      (n[14] = t[14]),
      (n[15] = t[15]),
      n
    )
  }
  const ot = new i()
  et.getScale = function (t, e) {
    return (
      (e.x = i.magnitude(i.fromElements(t[0], t[1], t[2], ot))),
      (e.y = i.magnitude(i.fromElements(t[4], t[5], t[6], ot))),
      (e.z = i.magnitude(i.fromElements(t[8], t[9], t[10], ot))),
      e
    )
  }
  const st = new i()
  et.getMaximumScale = function (t) {
    return et.getScale(t, st), i.maximumComponent(st)
  }
  const ct = new i()
  et.setRotation = function (t, e, n) {
    const r = et.getScale(t, ct)
    return (
      (n[0] = e[0] * r.x),
      (n[1] = e[1] * r.x),
      (n[2] = e[2] * r.x),
      (n[3] = t[3]),
      (n[4] = e[3] * r.y),
      (n[5] = e[4] * r.y),
      (n[6] = e[5] * r.y),
      (n[7] = t[7]),
      (n[8] = e[6] * r.z),
      (n[9] = e[7] * r.z),
      (n[10] = e[8] * r.z),
      (n[11] = t[11]),
      (n[12] = t[12]),
      (n[13] = t[13]),
      (n[14] = t[14]),
      (n[15] = t[15]),
      n
    )
  }
  const lt = new i()
  ;(et.getRotation = function (t, e) {
    const n = et.getScale(t, lt)
    return (
      (e[0] = t[0] / n.x),
      (e[1] = t[1] / n.x),
      (e[2] = t[2] / n.x),
      (e[3] = t[4] / n.y),
      (e[4] = t[5] / n.y),
      (e[5] = t[6] / n.y),
      (e[6] = t[8] / n.z),
      (e[7] = t[9] / n.z),
      (e[8] = t[10] / n.z),
      e
    )
  }),
    (et.multiply = function (t, e, n) {
      const r = t[0],
        i = t[1],
        a = t[2],
        u = t[3],
        o = t[4],
        s = t[5],
        c = t[6],
        l = t[7],
        f = t[8],
        d = t[9],
        h = t[10],
        m = t[11],
        y = t[12],
        p = t[13],
        x = t[14],
        w = t[15],
        M = e[0],
        g = e[1],
        z = e[2],
        C = e[3],
        O = e[4],
        b = e[5],
        S = e[6],
        q = e[7],
        R = e[8],
        _ = e[9],
        T = e[10],
        V = e[11],
        A = e[12],
        E = e[13],
        I = e[14],
        N = e[15],
        U = r * M + o * g + f * z + y * C,
        P = i * M + s * g + d * z + p * C,
        L = a * M + c * g + h * z + x * C,
        k = u * M + l * g + m * z + w * C,
        W = r * O + o * b + f * S + y * q,
        v = i * O + s * b + d * S + p * q,
        B = a * O + c * b + h * S + x * q,
        $ = u * O + l * b + m * S + w * q,
        j = r * R + o * _ + f * T + y * V,
        X = i * R + s * _ + d * T + p * V,
        Z = a * R + c * _ + h * T + x * V,
        D = u * R + l * _ + m * T + w * V,
        Y = r * A + o * E + f * I + y * N,
        F = i * A + s * E + d * I + p * N,
        G = a * A + c * E + h * I + x * N,
        H = u * A + l * E + m * I + w * N
      return (
        (n[0] = U),
        (n[1] = P),
        (n[2] = L),
        (n[3] = k),
        (n[4] = W),
        (n[5] = v),
        (n[6] = B),
        (n[7] = $),
        (n[8] = j),
        (n[9] = X),
        (n[10] = Z),
        (n[11] = D),
        (n[12] = Y),
        (n[13] = F),
        (n[14] = G),
        (n[15] = H),
        n
      )
    }),
    (et.add = function (t, e, n) {
      return (
        (n[0] = t[0] + e[0]),
        (n[1] = t[1] + e[1]),
        (n[2] = t[2] + e[2]),
        (n[3] = t[3] + e[3]),
        (n[4] = t[4] + e[4]),
        (n[5] = t[5] + e[5]),
        (n[6] = t[6] + e[6]),
        (n[7] = t[7] + e[7]),
        (n[8] = t[8] + e[8]),
        (n[9] = t[9] + e[9]),
        (n[10] = t[10] + e[10]),
        (n[11] = t[11] + e[11]),
        (n[12] = t[12] + e[12]),
        (n[13] = t[13] + e[13]),
        (n[14] = t[14] + e[14]),
        (n[15] = t[15] + e[15]),
        n
      )
    }),
    (et.subtract = function (t, e, n) {
      return (
        (n[0] = t[0] - e[0]),
        (n[1] = t[1] - e[1]),
        (n[2] = t[2] - e[2]),
        (n[3] = t[3] - e[3]),
        (n[4] = t[4] - e[4]),
        (n[5] = t[5] - e[5]),
        (n[6] = t[6] - e[6]),
        (n[7] = t[7] - e[7]),
        (n[8] = t[8] - e[8]),
        (n[9] = t[9] - e[9]),
        (n[10] = t[10] - e[10]),
        (n[11] = t[11] - e[11]),
        (n[12] = t[12] - e[12]),
        (n[13] = t[13] - e[13]),
        (n[14] = t[14] - e[14]),
        (n[15] = t[15] - e[15]),
        n
      )
    }),
    (et.multiplyTransformation = function (t, e, n) {
      const r = t[0],
        i = t[1],
        a = t[2],
        u = t[4],
        o = t[5],
        s = t[6],
        c = t[8],
        l = t[9],
        f = t[10],
        d = t[12],
        h = t[13],
        m = t[14],
        y = e[0],
        p = e[1],
        x = e[2],
        w = e[4],
        M = e[5],
        g = e[6],
        z = e[8],
        C = e[9],
        O = e[10],
        b = e[12],
        S = e[13],
        q = e[14],
        R = r * y + u * p + c * x,
        _ = i * y + o * p + l * x,
        T = a * y + s * p + f * x,
        V = r * w + u * M + c * g,
        A = i * w + o * M + l * g,
        E = a * w + s * M + f * g,
        I = r * z + u * C + c * O,
        N = i * z + o * C + l * O,
        U = a * z + s * C + f * O,
        P = r * b + u * S + c * q + d,
        L = i * b + o * S + l * q + h,
        k = a * b + s * S + f * q + m
      return (
        (n[0] = R),
        (n[1] = _),
        (n[2] = T),
        (n[3] = 0),
        (n[4] = V),
        (n[5] = A),
        (n[6] = E),
        (n[7] = 0),
        (n[8] = I),
        (n[9] = N),
        (n[10] = U),
        (n[11] = 0),
        (n[12] = P),
        (n[13] = L),
        (n[14] = k),
        (n[15] = 1),
        n
      )
    }),
    (et.multiplyByMatrix3 = function (t, e, n) {
      const r = t[0],
        i = t[1],
        a = t[2],
        u = t[4],
        o = t[5],
        s = t[6],
        c = t[8],
        l = t[9],
        f = t[10],
        d = e[0],
        h = e[1],
        m = e[2],
        y = e[3],
        p = e[4],
        x = e[5],
        w = e[6],
        M = e[7],
        g = e[8],
        z = r * d + u * h + c * m,
        C = i * d + o * h + l * m,
        O = a * d + s * h + f * m,
        b = r * y + u * p + c * x,
        S = i * y + o * p + l * x,
        q = a * y + s * p + f * x,
        R = r * w + u * M + c * g,
        _ = i * w + o * M + l * g,
        T = a * w + s * M + f * g
      return (
        (n[0] = z),
        (n[1] = C),
        (n[2] = O),
        (n[3] = 0),
        (n[4] = b),
        (n[5] = S),
        (n[6] = q),
        (n[7] = 0),
        (n[8] = R),
        (n[9] = _),
        (n[10] = T),
        (n[11] = 0),
        (n[12] = t[12]),
        (n[13] = t[13]),
        (n[14] = t[14]),
        (n[15] = t[15]),
        n
      )
    }),
    (et.multiplyByTranslation = function (t, e, n) {
      const r = e.x,
        i = e.y,
        a = e.z,
        u = r * t[0] + i * t[4] + a * t[8] + t[12],
        o = r * t[1] + i * t[5] + a * t[9] + t[13],
        s = r * t[2] + i * t[6] + a * t[10] + t[14]
      return (
        (n[0] = t[0]),
        (n[1] = t[1]),
        (n[2] = t[2]),
        (n[3] = t[3]),
        (n[4] = t[4]),
        (n[5] = t[5]),
        (n[6] = t[6]),
        (n[7] = t[7]),
        (n[8] = t[8]),
        (n[9] = t[9]),
        (n[10] = t[10]),
        (n[11] = t[11]),
        (n[12] = u),
        (n[13] = o),
        (n[14] = s),
        (n[15] = t[15]),
        n
      )
    }),
    (et.multiplyByScale = function (t, e, n) {
      const r = e.x,
        i = e.y,
        a = e.z
      return 1 === r && 1 === i && 1 === a
        ? et.clone(t, n)
        : ((n[0] = r * t[0]),
          (n[1] = r * t[1]),
          (n[2] = r * t[2]),
          (n[3] = t[3]),
          (n[4] = i * t[4]),
          (n[5] = i * t[5]),
          (n[6] = i * t[6]),
          (n[7] = t[7]),
          (n[8] = a * t[8]),
          (n[9] = a * t[9]),
          (n[10] = a * t[10]),
          (n[11] = t[11]),
          (n[12] = t[12]),
          (n[13] = t[13]),
          (n[14] = t[14]),
          (n[15] = t[15]),
          n)
    }),
    (et.multiplyByUniformScale = function (t, e, n) {
      return (
        (n[0] = t[0] * e),
        (n[1] = t[1] * e),
        (n[2] = t[2] * e),
        (n[3] = t[3]),
        (n[4] = t[4] * e),
        (n[5] = t[5] * e),
        (n[6] = t[6] * e),
        (n[7] = t[7]),
        (n[8] = t[8] * e),
        (n[9] = t[9] * e),
        (n[10] = t[10] * e),
        (n[11] = t[11]),
        (n[12] = t[12]),
        (n[13] = t[13]),
        (n[14] = t[14]),
        (n[15] = t[15]),
        n
      )
    }),
    (et.multiplyByVector = function (t, e, n) {
      const r = e.x,
        i = e.y,
        a = e.z,
        u = e.w,
        o = t[0] * r + t[4] * i + t[8] * a + t[12] * u,
        s = t[1] * r + t[5] * i + t[9] * a + t[13] * u,
        c = t[2] * r + t[6] * i + t[10] * a + t[14] * u,
        l = t[3] * r + t[7] * i + t[11] * a + t[15] * u
      return (n.x = o), (n.y = s), (n.z = c), (n.w = l), n
    }),
    (et.multiplyByPointAsVector = function (t, e, n) {
      const r = e.x,
        i = e.y,
        a = e.z,
        u = t[0] * r + t[4] * i + t[8] * a,
        o = t[1] * r + t[5] * i + t[9] * a,
        s = t[2] * r + t[6] * i + t[10] * a
      return (n.x = u), (n.y = o), (n.z = s), n
    }),
    (et.multiplyByPoint = function (t, e, n) {
      const r = e.x,
        i = e.y,
        a = e.z,
        u = t[0] * r + t[4] * i + t[8] * a + t[12],
        o = t[1] * r + t[5] * i + t[9] * a + t[13],
        s = t[2] * r + t[6] * i + t[10] * a + t[14]
      return (n.x = u), (n.y = o), (n.z = s), n
    }),
    (et.multiplyByScalar = function (t, e, n) {
      return (
        (n[0] = t[0] * e),
        (n[1] = t[1] * e),
        (n[2] = t[2] * e),
        (n[3] = t[3] * e),
        (n[4] = t[4] * e),
        (n[5] = t[5] * e),
        (n[6] = t[6] * e),
        (n[7] = t[7] * e),
        (n[8] = t[8] * e),
        (n[9] = t[9] * e),
        (n[10] = t[10] * e),
        (n[11] = t[11] * e),
        (n[12] = t[12] * e),
        (n[13] = t[13] * e),
        (n[14] = t[14] * e),
        (n[15] = t[15] * e),
        n
      )
    }),
    (et.negate = function (t, e) {
      return (
        (e[0] = -t[0]),
        (e[1] = -t[1]),
        (e[2] = -t[2]),
        (e[3] = -t[3]),
        (e[4] = -t[4]),
        (e[5] = -t[5]),
        (e[6] = -t[6]),
        (e[7] = -t[7]),
        (e[8] = -t[8]),
        (e[9] = -t[9]),
        (e[10] = -t[10]),
        (e[11] = -t[11]),
        (e[12] = -t[12]),
        (e[13] = -t[13]),
        (e[14] = -t[14]),
        (e[15] = -t[15]),
        e
      )
    }),
    (et.transpose = function (t, e) {
      const n = t[1],
        r = t[2],
        i = t[3],
        a = t[6],
        u = t[7],
        o = t[11]
      return (
        (e[0] = t[0]),
        (e[1] = t[4]),
        (e[2] = t[8]),
        (e[3] = t[12]),
        (e[4] = n),
        (e[5] = t[5]),
        (e[6] = t[9]),
        (e[7] = t[13]),
        (e[8] = r),
        (e[9] = a),
        (e[10] = t[10]),
        (e[11] = t[14]),
        (e[12] = i),
        (e[13] = u),
        (e[14] = o),
        (e[15] = t[15]),
        e
      )
    }),
    (et.abs = function (t, e) {
      return (
        (e[0] = Math.abs(t[0])),
        (e[1] = Math.abs(t[1])),
        (e[2] = Math.abs(t[2])),
        (e[3] = Math.abs(t[3])),
        (e[4] = Math.abs(t[4])),
        (e[5] = Math.abs(t[5])),
        (e[6] = Math.abs(t[6])),
        (e[7] = Math.abs(t[7])),
        (e[8] = Math.abs(t[8])),
        (e[9] = Math.abs(t[9])),
        (e[10] = Math.abs(t[10])),
        (e[11] = Math.abs(t[11])),
        (e[12] = Math.abs(t[12])),
        (e[13] = Math.abs(t[13])),
        (e[14] = Math.abs(t[14])),
        (e[15] = Math.abs(t[15])),
        e
      )
    }),
    (et.equals = function (t, e) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          t[12] === e[12] &&
          t[13] === e[13] &&
          t[14] === e[14] &&
          t[0] === e[0] &&
          t[1] === e[1] &&
          t[2] === e[2] &&
          t[4] === e[4] &&
          t[5] === e[5] &&
          t[6] === e[6] &&
          t[8] === e[8] &&
          t[9] === e[9] &&
          t[10] === e[10] &&
          t[3] === e[3] &&
          t[7] === e[7] &&
          t[11] === e[11] &&
          t[15] === e[15])
      )
    }),
    (et.equalsEpsilon = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        t === e ||
          (n.defined(t) &&
            n.defined(e) &&
            Math.abs(t[0] - e[0]) <= r &&
            Math.abs(t[1] - e[1]) <= r &&
            Math.abs(t[2] - e[2]) <= r &&
            Math.abs(t[3] - e[3]) <= r &&
            Math.abs(t[4] - e[4]) <= r &&
            Math.abs(t[5] - e[5]) <= r &&
            Math.abs(t[6] - e[6]) <= r &&
            Math.abs(t[7] - e[7]) <= r &&
            Math.abs(t[8] - e[8]) <= r &&
            Math.abs(t[9] - e[9]) <= r &&
            Math.abs(t[10] - e[10]) <= r &&
            Math.abs(t[11] - e[11]) <= r &&
            Math.abs(t[12] - e[12]) <= r &&
            Math.abs(t[13] - e[13]) <= r &&
            Math.abs(t[14] - e[14]) <= r &&
            Math.abs(t[15] - e[15]) <= r)
      )
    }),
    (et.getTranslation = function (t, e) {
      return (e.x = t[12]), (e.y = t[13]), (e.z = t[14]), e
    }),
    (et.getMatrix3 = function (t, e) {
      return (
        (e[0] = t[0]),
        (e[1] = t[1]),
        (e[2] = t[2]),
        (e[3] = t[4]),
        (e[4] = t[5]),
        (e[5] = t[6]),
        (e[6] = t[8]),
        (e[7] = t[9]),
        (e[8] = t[10]),
        e
      )
    })
  const ft = new I(),
    dt = new I(),
    ht = new Y(),
    mt = new Y(0, 0, 0, 1)
  ;(et.inverse = function (t, n) {
    const i = t[0],
      a = t[4],
      u = t[8],
      o = t[12],
      s = t[1],
      c = t[5],
      l = t[9],
      f = t[13],
      d = t[2],
      h = t[6],
      m = t[10],
      y = t[14],
      p = t[3],
      x = t[7],
      w = t[11],
      M = t[15]
    let g = m * M,
      z = y * w,
      C = h * M,
      O = y * x,
      b = h * w,
      S = m * x,
      q = d * M,
      R = y * p,
      _ = d * w,
      T = m * p,
      V = d * x,
      A = h * p
    const E = g * c + O * l + b * f - (z * c + C * l + S * f),
      N = z * s + q * l + T * f - (g * s + R * l + _ * f),
      U = C * s + R * c + V * f - (O * s + q * c + A * f),
      P = S * s + _ * c + A * l - (b * s + T * c + V * l),
      L = z * a + C * u + S * o - (g * a + O * u + b * o),
      k = g * i + R * u + _ * o - (z * i + q * u + T * o),
      W = O * i + q * a + A * o - (C * i + R * a + V * o),
      v = b * i + T * a + V * u - (S * i + _ * a + A * u)
    ;(g = u * f),
      (z = o * l),
      (C = a * f),
      (O = o * c),
      (b = a * l),
      (S = u * c),
      (q = i * f),
      (R = o * s),
      (_ = i * l),
      (T = u * s),
      (V = i * c),
      (A = a * s)
    const B = g * x + O * w + b * M - (z * x + C * w + S * M),
      $ = z * p + q * w + T * M - (g * p + R * w + _ * M),
      j = C * p + R * x + V * M - (O * p + q * x + A * M),
      X = S * p + _ * x + A * w - (b * p + T * x + V * w),
      Z = C * m + S * y + z * h - (b * y + g * h + O * m),
      D = _ * y + g * d + R * m - (q * m + T * y + z * d),
      F = q * h + A * y + O * d - (V * y + C * d + R * h),
      G = V * m + b * d + T * h - (_ * h + A * m + S * d)
    let H = i * E + a * N + u * U + o * P
    if (Math.abs(H) < r.CesiumMath.EPSILON21) {
      if (
        I.equalsEpsilon(et.getMatrix3(t, ft), dt, r.CesiumMath.EPSILON7) &&
        Y.equals(et.getRow(t, 3, ht), mt)
      )
        return (
          (n[0] = 0),
          (n[1] = 0),
          (n[2] = 0),
          (n[3] = 0),
          (n[4] = 0),
          (n[5] = 0),
          (n[6] = 0),
          (n[7] = 0),
          (n[8] = 0),
          (n[9] = 0),
          (n[10] = 0),
          (n[11] = 0),
          (n[12] = -t[12]),
          (n[13] = -t[13]),
          (n[14] = -t[14]),
          (n[15] = 1),
          n
        )
      throw new e.RuntimeError(
        'matrix is not invertible because its determinate is zero.'
      )
    }
    return (
      (H = 1 / H),
      (n[0] = E * H),
      (n[1] = N * H),
      (n[2] = U * H),
      (n[3] = P * H),
      (n[4] = L * H),
      (n[5] = k * H),
      (n[6] = W * H),
      (n[7] = v * H),
      (n[8] = B * H),
      (n[9] = $ * H),
      (n[10] = j * H),
      (n[11] = X * H),
      (n[12] = Z * H),
      (n[13] = D * H),
      (n[14] = F * H),
      (n[15] = G * H),
      n
    )
  }),
    (et.inverseTransformation = function (t, e) {
      const n = t[0],
        r = t[1],
        i = t[2],
        a = t[4],
        u = t[5],
        o = t[6],
        s = t[8],
        c = t[9],
        l = t[10],
        f = t[12],
        d = t[13],
        h = t[14],
        m = -n * f - r * d - i * h,
        y = -a * f - u * d - o * h,
        p = -s * f - c * d - l * h
      return (
        (e[0] = n),
        (e[1] = a),
        (e[2] = s),
        (e[3] = 0),
        (e[4] = r),
        (e[5] = u),
        (e[6] = c),
        (e[7] = 0),
        (e[8] = i),
        (e[9] = o),
        (e[10] = l),
        (e[11] = 0),
        (e[12] = m),
        (e[13] = y),
        (e[14] = p),
        (e[15] = 1),
        e
      )
    })
  const yt = new et()
  function pt(t, e, r, i) {
    ;(this.west = n.defaultValue(t, 0)),
      (this.south = n.defaultValue(e, 0)),
      (this.east = n.defaultValue(r, 0)),
      (this.north = n.defaultValue(i, 0))
  }
  ;(et.inverseTranspose = function (t, e) {
    return et.inverse(et.transpose(t, yt), e)
  }),
    (et.IDENTITY = Object.freeze(
      new et(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
    )),
    (et.ZERO = Object.freeze(
      new et(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
    )),
    (et.COLUMN0ROW0 = 0),
    (et.COLUMN0ROW1 = 1),
    (et.COLUMN0ROW2 = 2),
    (et.COLUMN0ROW3 = 3),
    (et.COLUMN1ROW0 = 4),
    (et.COLUMN1ROW1 = 5),
    (et.COLUMN1ROW2 = 6),
    (et.COLUMN1ROW3 = 7),
    (et.COLUMN2ROW0 = 8),
    (et.COLUMN2ROW1 = 9),
    (et.COLUMN2ROW2 = 10),
    (et.COLUMN2ROW3 = 11),
    (et.COLUMN3ROW0 = 12),
    (et.COLUMN3ROW1 = 13),
    (et.COLUMN3ROW2 = 14),
    (et.COLUMN3ROW3 = 15),
    Object.defineProperties(et.prototype, {
      length: {
        get: function () {
          return et.packedLength
        }
      }
    }),
    (et.prototype.clone = function (t) {
      return et.clone(this, t)
    }),
    (et.prototype.equals = function (t) {
      return et.equals(this, t)
    }),
    (et.equalsArray = function (t, e, n) {
      return (
        t[0] === e[n] &&
        t[1] === e[n + 1] &&
        t[2] === e[n + 2] &&
        t[3] === e[n + 3] &&
        t[4] === e[n + 4] &&
        t[5] === e[n + 5] &&
        t[6] === e[n + 6] &&
        t[7] === e[n + 7] &&
        t[8] === e[n + 8] &&
        t[9] === e[n + 9] &&
        t[10] === e[n + 10] &&
        t[11] === e[n + 11] &&
        t[12] === e[n + 12] &&
        t[13] === e[n + 13] &&
        t[14] === e[n + 14] &&
        t[15] === e[n + 15]
      )
    }),
    (et.prototype.equalsEpsilon = function (t, e) {
      return et.equalsEpsilon(this, t, e)
    }),
    (et.prototype.toString = function () {
      return `(${this[0]}, ${this[4]}, ${this[8]}, ${this[12]})\n(${this[1]}, ${this[5]}, ${this[9]}, ${this[13]})\n(${this[2]}, ${this[6]}, ${this[10]}, ${this[14]})\n(${this[3]}, ${this[7]}, ${this[11]}, ${this[15]})`
    }),
    Object.defineProperties(pt.prototype, {
      width: {
        get: function () {
          return pt.computeWidth(this)
        }
      },
      height: {
        get: function () {
          return pt.computeHeight(this)
        }
      }
    }),
    (pt.packedLength = 4),
    (pt.pack = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        (e[r++] = t.west),
        (e[r++] = t.south),
        (e[r++] = t.east),
        (e[r] = t.north),
        e
      )
    }),
    (pt.unpack = function (t, e, r) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(r) || (r = new pt()),
        (r.west = t[e++]),
        (r.south = t[e++]),
        (r.east = t[e++]),
        (r.north = t[e]),
        r
      )
    }),
    (pt.computeWidth = function (t) {
      let e = t.east
      const n = t.west
      return e < n && (e += r.CesiumMath.TWO_PI), e - n
    }),
    (pt.computeHeight = function (t) {
      return t.north - t.south
    }),
    (pt.fromDegrees = function (t, e, i, a, u) {
      return (
        (t = r.CesiumMath.toRadians(n.defaultValue(t, 0))),
        (e = r.CesiumMath.toRadians(n.defaultValue(e, 0))),
        (i = r.CesiumMath.toRadians(n.defaultValue(i, 0))),
        (a = r.CesiumMath.toRadians(n.defaultValue(a, 0))),
        n.defined(u)
          ? ((u.west = t), (u.south = e), (u.east = i), (u.north = a), u)
          : new pt(t, e, i, a)
      )
    }),
    (pt.fromRadians = function (t, e, r, i, a) {
      return n.defined(a)
        ? ((a.west = n.defaultValue(t, 0)),
          (a.south = n.defaultValue(e, 0)),
          (a.east = n.defaultValue(r, 0)),
          (a.north = n.defaultValue(i, 0)),
          a)
        : new pt(t, e, r, i)
    }),
    (pt.fromCartographicArray = function (t, e) {
      let i = Number.MAX_VALUE,
        a = -Number.MAX_VALUE,
        u = Number.MAX_VALUE,
        o = -Number.MAX_VALUE,
        s = Number.MAX_VALUE,
        c = -Number.MAX_VALUE
      for (let e = 0, n = t.length; e < n; e++) {
        const n = t[e]
        ;(i = Math.min(i, n.longitude)),
          (a = Math.max(a, n.longitude)),
          (s = Math.min(s, n.latitude)),
          (c = Math.max(c, n.latitude))
        const l =
          n.longitude >= 0 ? n.longitude : n.longitude + r.CesiumMath.TWO_PI
        ;(u = Math.min(u, l)), (o = Math.max(o, l))
      }
      return (
        a - i > o - u &&
          ((i = u),
          (a = o),
          a > r.CesiumMath.PI && (a -= r.CesiumMath.TWO_PI),
          i > r.CesiumMath.PI && (i -= r.CesiumMath.TWO_PI)),
        n.defined(e)
          ? ((e.west = i), (e.south = s), (e.east = a), (e.north = c), e)
          : new pt(i, s, a, c)
      )
    }),
    (pt.fromCartesianArray = function (t, e, i) {
      e = n.defaultValue(e, b.WGS84)
      let a = Number.MAX_VALUE,
        u = -Number.MAX_VALUE,
        o = Number.MAX_VALUE,
        s = -Number.MAX_VALUE,
        c = Number.MAX_VALUE,
        l = -Number.MAX_VALUE
      for (let n = 0, i = t.length; n < i; n++) {
        const i = e.cartesianToCartographic(t[n])
        ;(a = Math.min(a, i.longitude)),
          (u = Math.max(u, i.longitude)),
          (c = Math.min(c, i.latitude)),
          (l = Math.max(l, i.latitude))
        const f =
          i.longitude >= 0 ? i.longitude : i.longitude + r.CesiumMath.TWO_PI
        ;(o = Math.min(o, f)), (s = Math.max(s, f))
      }
      return (
        u - a > s - o &&
          ((a = o),
          (u = s),
          u > r.CesiumMath.PI && (u -= r.CesiumMath.TWO_PI),
          a > r.CesiumMath.PI && (a -= r.CesiumMath.TWO_PI)),
        n.defined(i)
          ? ((i.west = a), (i.south = c), (i.east = u), (i.north = l), i)
          : new pt(a, c, u, l)
      )
    }),
    (pt.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e)
          ? ((e.west = t.west),
            (e.south = t.south),
            (e.east = t.east),
            (e.north = t.north),
            e)
          : new pt(t.west, t.south, t.east, t.north)
    }),
    (pt.equalsEpsilon = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        t === e ||
          (n.defined(t) &&
            n.defined(e) &&
            Math.abs(t.west - e.west) <= r &&
            Math.abs(t.south - e.south) <= r &&
            Math.abs(t.east - e.east) <= r &&
            Math.abs(t.north - e.north) <= r)
      )
    }),
    (pt.prototype.clone = function (t) {
      return pt.clone(this, t)
    }),
    (pt.prototype.equals = function (t) {
      return pt.equals(this, t)
    }),
    (pt.equals = function (t, e) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          t.west === e.west &&
          t.south === e.south &&
          t.east === e.east &&
          t.north === e.north)
      )
    }),
    (pt.prototype.equalsEpsilon = function (t, e) {
      return pt.equalsEpsilon(this, t, e)
    }),
    (pt.validate = function (t) {}),
    (pt.southwest = function (t, e) {
      return n.defined(e)
        ? ((e.longitude = t.west), (e.latitude = t.south), (e.height = 0), e)
        : new p(t.west, t.south)
    }),
    (pt.northwest = function (t, e) {
      return n.defined(e)
        ? ((e.longitude = t.west), (e.latitude = t.north), (e.height = 0), e)
        : new p(t.west, t.north)
    }),
    (pt.northeast = function (t, e) {
      return n.defined(e)
        ? ((e.longitude = t.east), (e.latitude = t.north), (e.height = 0), e)
        : new p(t.east, t.north)
    }),
    (pt.southeast = function (t, e) {
      return n.defined(e)
        ? ((e.longitude = t.east), (e.latitude = t.south), (e.height = 0), e)
        : new p(t.east, t.south)
    }),
    (pt.center = function (t, e) {
      let i = t.east
      const a = t.west
      i < a && (i += r.CesiumMath.TWO_PI)
      const u = r.CesiumMath.negativePiToPi(0.5 * (a + i)),
        o = 0.5 * (t.south + t.north)
      return n.defined(e)
        ? ((e.longitude = u), (e.latitude = o), (e.height = 0), e)
        : new p(u, o)
    }),
    (pt.intersection = function (t, e, i) {
      let a = t.east,
        u = t.west,
        o = e.east,
        s = e.west
      a < u && o > 0
        ? (a += r.CesiumMath.TWO_PI)
        : o < s && a > 0 && (o += r.CesiumMath.TWO_PI),
        a < u && s < 0
          ? (s += r.CesiumMath.TWO_PI)
          : o < s && u < 0 && (u += r.CesiumMath.TWO_PI)
      const c = r.CesiumMath.negativePiToPi(Math.max(u, s)),
        l = r.CesiumMath.negativePiToPi(Math.min(a, o))
      if ((t.west < t.east || e.west < e.east) && l <= c) return
      const f = Math.max(t.south, e.south),
        d = Math.min(t.north, e.north)
      return f >= d
        ? void 0
        : n.defined(i)
          ? ((i.west = c), (i.south = f), (i.east = l), (i.north = d), i)
          : new pt(c, f, l, d)
    }),
    (pt.simpleIntersection = function (t, e, r) {
      const i = Math.max(t.west, e.west),
        a = Math.max(t.south, e.south),
        u = Math.min(t.east, e.east),
        o = Math.min(t.north, e.north)
      if (!(a >= o || i >= u))
        return n.defined(r)
          ? ((r.west = i), (r.south = a), (r.east = u), (r.north = o), r)
          : new pt(i, a, u, o)
    }),
    (pt.union = function (t, e, i) {
      n.defined(i) || (i = new pt())
      let a = t.east,
        u = t.west,
        o = e.east,
        s = e.west
      a < u && o > 0
        ? (a += r.CesiumMath.TWO_PI)
        : o < s && a > 0 && (o += r.CesiumMath.TWO_PI),
        a < u && s < 0
          ? (s += r.CesiumMath.TWO_PI)
          : o < s && u < 0 && (u += r.CesiumMath.TWO_PI)
      const c = r.CesiumMath.negativePiToPi(Math.min(u, s)),
        l = r.CesiumMath.negativePiToPi(Math.max(a, o))
      return (
        (i.west = c),
        (i.south = Math.min(t.south, e.south)),
        (i.east = l),
        (i.north = Math.max(t.north, e.north)),
        i
      )
    }),
    (pt.expand = function (t, e, r) {
      return (
        n.defined(r) || (r = new pt()),
        (r.west = Math.min(t.west, e.longitude)),
        (r.south = Math.min(t.south, e.latitude)),
        (r.east = Math.max(t.east, e.longitude)),
        (r.north = Math.max(t.north, e.latitude)),
        r
      )
    }),
    (pt.contains = function (t, e) {
      let n = e.longitude
      const i = e.latitude,
        a = t.west
      let u = t.east
      return (
        u < a &&
          ((u += r.CesiumMath.TWO_PI), n < 0 && (n += r.CesiumMath.TWO_PI)),
        (n > a || r.CesiumMath.equalsEpsilon(n, a, r.CesiumMath.EPSILON14)) &&
          (n < u || r.CesiumMath.equalsEpsilon(n, u, r.CesiumMath.EPSILON14)) &&
          i >= t.south &&
          i <= t.north
      )
    })
  const xt = new p()
  function wt(t, e) {
    ;(this.x = n.defaultValue(t, 0)), (this.y = n.defaultValue(e, 0))
  }
  ;(pt.subsample = function (t, e, i, a) {
    ;(e = n.defaultValue(e, b.WGS84)),
      (i = n.defaultValue(i, 0)),
      n.defined(a) || (a = [])
    let u = 0
    const o = t.north,
      s = t.south,
      c = t.east,
      l = t.west,
      f = xt
    ;(f.height = i),
      (f.longitude = l),
      (f.latitude = o),
      (a[u] = e.cartographicToCartesian(f, a[u])),
      u++,
      (f.longitude = c),
      (a[u] = e.cartographicToCartesian(f, a[u])),
      u++,
      (f.latitude = s),
      (a[u] = e.cartographicToCartesian(f, a[u])),
      u++,
      (f.longitude = l),
      (a[u] = e.cartographicToCartesian(f, a[u])),
      u++,
      (f.latitude = o < 0 ? o : s > 0 ? s : 0)
    for (let n = 1; n < 8; ++n)
      (f.longitude = -Math.PI + n * r.CesiumMath.PI_OVER_TWO),
        pt.contains(t, f) && ((a[u] = e.cartographicToCartesian(f, a[u])), u++)
    return (
      0 === f.latitude &&
        ((f.longitude = l),
        (a[u] = e.cartographicToCartesian(f, a[u])),
        u++,
        (f.longitude = c),
        (a[u] = e.cartographicToCartesian(f, a[u])),
        u++),
      (a.length = u),
      a
    )
  }),
    (pt.subsection = function (t, e, i, a, u, o) {
      if ((n.defined(o) || (o = new pt()), t.west <= t.east)) {
        const n = t.east - t.west
        ;(o.west = t.west + e * n), (o.east = t.west + a * n)
      } else {
        const n = r.CesiumMath.TWO_PI + t.east - t.west
        ;(o.west = r.CesiumMath.negativePiToPi(t.west + e * n)),
          (o.east = r.CesiumMath.negativePiToPi(t.west + a * n))
      }
      const s = t.north - t.south
      return (
        (o.south = t.south + i * s),
        (o.north = t.south + u * s),
        1 === e && (o.west = t.east),
        1 === a && (o.east = t.east),
        1 === i && (o.south = t.north),
        1 === u && (o.north = t.north),
        o
      )
    }),
    (pt.MAX_VALUE = Object.freeze(
      new pt(
        -Math.PI,
        -r.CesiumMath.PI_OVER_TWO,
        Math.PI,
        r.CesiumMath.PI_OVER_TWO
      )
    )),
    (wt.fromElements = function (t, e, r) {
      return n.defined(r) ? ((r.x = t), (r.y = e), r) : new wt(t, e)
    }),
    (wt.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e) ? ((e.x = t.x), (e.y = t.y), e) : new wt(t.x, t.y)
    }),
    (wt.fromCartesian3 = wt.clone),
    (wt.fromCartesian4 = wt.clone),
    (wt.packedLength = 2),
    (wt.pack = function (t, e, r) {
      return (r = n.defaultValue(r, 0)), (e[r++] = t.x), (e[r] = t.y), e
    }),
    (wt.unpack = function (t, e, r) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(r) || (r = new wt()),
        (r.x = t[e++]),
        (r.y = t[e]),
        r
      )
    }),
    (wt.packArray = function (t, e) {
      const r = t.length,
        i = 2 * r
      n.defined(e)
        ? (Array.isArray(e) || e.length === i) &&
          e.length !== i &&
          (e.length = i)
        : (e = new Array(i))
      for (let n = 0; n < r; ++n) wt.pack(t[n], e, 2 * n)
      return e
    }),
    (wt.unpackArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r / 2) : (e = new Array(r / 2))
      for (let n = 0; n < r; n += 2) {
        const r = n / 2
        e[r] = wt.unpack(t, n, e[r])
      }
      return e
    }),
    (wt.fromArray = wt.unpack),
    (wt.maximumComponent = function (t) {
      return Math.max(t.x, t.y)
    }),
    (wt.minimumComponent = function (t) {
      return Math.min(t.x, t.y)
    }),
    (wt.minimumByComponent = function (t, e, n) {
      return (n.x = Math.min(t.x, e.x)), (n.y = Math.min(t.y, e.y)), n
    }),
    (wt.maximumByComponent = function (t, e, n) {
      return (n.x = Math.max(t.x, e.x)), (n.y = Math.max(t.y, e.y)), n
    }),
    (wt.clamp = function (t, e, n, i) {
      const a = r.CesiumMath.clamp(t.x, e.x, n.x),
        u = r.CesiumMath.clamp(t.y, e.y, n.y)
      return (i.x = a), (i.y = u), i
    }),
    (wt.magnitudeSquared = function (t) {
      return t.x * t.x + t.y * t.y
    }),
    (wt.magnitude = function (t) {
      return Math.sqrt(wt.magnitudeSquared(t))
    })
  const Mt = new wt()
  ;(wt.distance = function (t, e) {
    return wt.subtract(t, e, Mt), wt.magnitude(Mt)
  }),
    (wt.distanceSquared = function (t, e) {
      return wt.subtract(t, e, Mt), wt.magnitudeSquared(Mt)
    }),
    (wt.normalize = function (t, e) {
      const n = wt.magnitude(t)
      return (e.x = t.x / n), (e.y = t.y / n), e
    }),
    (wt.dot = function (t, e) {
      return t.x * e.x + t.y * e.y
    }),
    (wt.cross = function (t, e) {
      return t.x * e.y - t.y * e.x
    }),
    (wt.multiplyComponents = function (t, e, n) {
      return (n.x = t.x * e.x), (n.y = t.y * e.y), n
    }),
    (wt.divideComponents = function (t, e, n) {
      return (n.x = t.x / e.x), (n.y = t.y / e.y), n
    }),
    (wt.add = function (t, e, n) {
      return (n.x = t.x + e.x), (n.y = t.y + e.y), n
    }),
    (wt.subtract = function (t, e, n) {
      return (n.x = t.x - e.x), (n.y = t.y - e.y), n
    }),
    (wt.multiplyByScalar = function (t, e, n) {
      return (n.x = t.x * e), (n.y = t.y * e), n
    }),
    (wt.divideByScalar = function (t, e, n) {
      return (n.x = t.x / e), (n.y = t.y / e), n
    }),
    (wt.negate = function (t, e) {
      return (e.x = -t.x), (e.y = -t.y), e
    }),
    (wt.abs = function (t, e) {
      return (e.x = Math.abs(t.x)), (e.y = Math.abs(t.y)), e
    })
  const gt = new wt()
  wt.lerp = function (t, e, n, r) {
    return (
      wt.multiplyByScalar(e, n, gt),
      (r = wt.multiplyByScalar(t, 1 - n, r)),
      wt.add(gt, r, r)
    )
  }
  const zt = new wt(),
    Ct = new wt()
  wt.angleBetween = function (t, e) {
    return (
      wt.normalize(t, zt),
      wt.normalize(e, Ct),
      r.CesiumMath.acosClamped(wt.dot(zt, Ct))
    )
  }
  const Ot = new wt()
  function bt(t, e, r, i) {
    ;(this[0] = n.defaultValue(t, 0)),
      (this[1] = n.defaultValue(r, 0)),
      (this[2] = n.defaultValue(e, 0)),
      (this[3] = n.defaultValue(i, 0))
  }
  ;(wt.mostOrthogonalAxis = function (t, e) {
    const n = wt.normalize(t, Ot)
    return (
      wt.abs(n, n),
      (e = n.x <= n.y ? wt.clone(wt.UNIT_X, e) : wt.clone(wt.UNIT_Y, e))
    )
  }),
    (wt.equals = function (t, e) {
      return (
        t === e || (n.defined(t) && n.defined(e) && t.x === e.x && t.y === e.y)
      )
    }),
    (wt.equalsArray = function (t, e, n) {
      return t.x === e[n] && t.y === e[n + 1]
    }),
    (wt.equalsEpsilon = function (t, e, i, a) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          r.CesiumMath.equalsEpsilon(t.x, e.x, i, a) &&
          r.CesiumMath.equalsEpsilon(t.y, e.y, i, a))
      )
    }),
    (wt.ZERO = Object.freeze(new wt(0, 0))),
    (wt.ONE = Object.freeze(new wt(1, 1))),
    (wt.UNIT_X = Object.freeze(new wt(1, 0))),
    (wt.UNIT_Y = Object.freeze(new wt(0, 1))),
    (wt.prototype.clone = function (t) {
      return wt.clone(this, t)
    }),
    (wt.prototype.equals = function (t) {
      return wt.equals(this, t)
    }),
    (wt.prototype.equalsEpsilon = function (t, e, n) {
      return wt.equalsEpsilon(this, t, e, n)
    }),
    (wt.prototype.toString = function () {
      return `(${this.x}, ${this.y})`
    }),
    (bt.packedLength = 4),
    (bt.pack = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        (e[r++] = t[0]),
        (e[r++] = t[1]),
        (e[r++] = t[2]),
        (e[r++] = t[3]),
        e
      )
    }),
    (bt.unpack = function (t, e, r) {
      return (
        (e = n.defaultValue(e, 0)),
        n.defined(r) || (r = new bt()),
        (r[0] = t[e++]),
        (r[1] = t[e++]),
        (r[2] = t[e++]),
        (r[3] = t[e++]),
        r
      )
    }),
    (bt.packArray = function (t, e) {
      const r = t.length,
        i = 4 * r
      n.defined(e)
        ? (Array.isArray(e) || e.length === i) &&
          e.length !== i &&
          (e.length = i)
        : (e = new Array(i))
      for (let n = 0; n < r; ++n) bt.pack(t[n], e, 4 * n)
      return e
    }),
    (bt.unpackArray = function (t, e) {
      const r = t.length
      n.defined(e) ? (e.length = r / 4) : (e = new Array(r / 4))
      for (let n = 0; n < r; n += 4) {
        const r = n / 4
        e[r] = bt.unpack(t, n, e[r])
      }
      return e
    }),
    (bt.clone = function (t, e) {
      if (n.defined(t))
        return n.defined(e)
          ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
          : new bt(t[0], t[2], t[1], t[3])
    }),
    (bt.fromArray = bt.unpack),
    (bt.fromColumnMajorArray = function (t, e) {
      return bt.clone(t, e)
    }),
    (bt.fromRowMajorArray = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t[0]), (e[1] = t[2]), (e[2] = t[1]), (e[3] = t[3]), e)
        : new bt(t[0], t[1], t[2], t[3])
    }),
    (bt.fromScale = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t.x), (e[1] = 0), (e[2] = 0), (e[3] = t.y), e)
        : new bt(t.x, 0, 0, t.y)
    }),
    (bt.fromUniformScale = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t), (e[1] = 0), (e[2] = 0), (e[3] = t), e)
        : new bt(t, 0, 0, t)
    }),
    (bt.fromRotation = function (t, e) {
      const r = Math.cos(t),
        i = Math.sin(t)
      return n.defined(e)
        ? ((e[0] = r), (e[1] = i), (e[2] = -i), (e[3] = r), e)
        : new bt(r, -i, i, r)
    }),
    (bt.toArray = function (t, e) {
      return n.defined(e)
        ? ((e[0] = t[0]), (e[1] = t[1]), (e[2] = t[2]), (e[3] = t[3]), e)
        : [t[0], t[1], t[2], t[3]]
    }),
    (bt.getElementIndex = function (t, e) {
      return 2 * t + e
    }),
    (bt.getColumn = function (t, e, n) {
      const r = 2 * e,
        i = t[r],
        a = t[r + 1]
      return (n.x = i), (n.y = a), n
    }),
    (bt.setColumn = function (t, e, n, r) {
      const i = 2 * e
      return ((r = bt.clone(t, r))[i] = n.x), (r[i + 1] = n.y), r
    }),
    (bt.getRow = function (t, e, n) {
      const r = t[e],
        i = t[e + 2]
      return (n.x = r), (n.y = i), n
    }),
    (bt.setRow = function (t, e, n, r) {
      return ((r = bt.clone(t, r))[e] = n.x), (r[e + 2] = n.y), r
    })
  const St = new wt()
  bt.setScale = function (t, e, n) {
    const r = bt.getScale(t, St),
      i = e.x / r.x,
      a = e.y / r.y
    return (
      (n[0] = t[0] * i),
      (n[1] = t[1] * i),
      (n[2] = t[2] * a),
      (n[3] = t[3] * a),
      n
    )
  }
  const qt = new wt()
  bt.setUniformScale = function (t, e, n) {
    const r = bt.getScale(t, qt),
      i = e / r.x,
      a = e / r.y
    return (
      (n[0] = t[0] * i),
      (n[1] = t[1] * i),
      (n[2] = t[2] * a),
      (n[3] = t[3] * a),
      n
    )
  }
  const Rt = new wt()
  bt.getScale = function (t, e) {
    return (
      (e.x = wt.magnitude(wt.fromElements(t[0], t[1], Rt))),
      (e.y = wt.magnitude(wt.fromElements(t[2], t[3], Rt))),
      e
    )
  }
  const _t = new wt()
  bt.getMaximumScale = function (t) {
    return bt.getScale(t, _t), wt.maximumComponent(_t)
  }
  const Tt = new wt()
  bt.setRotation = function (t, e, n) {
    const r = bt.getScale(t, Tt)
    return (
      (n[0] = e[0] * r.x),
      (n[1] = e[1] * r.x),
      (n[2] = e[2] * r.y),
      (n[3] = e[3] * r.y),
      n
    )
  }
  const Vt = new wt()
  ;(bt.getRotation = function (t, e) {
    const n = bt.getScale(t, Vt)
    return (
      (e[0] = t[0] / n.x),
      (e[1] = t[1] / n.x),
      (e[2] = t[2] / n.y),
      (e[3] = t[3] / n.y),
      e
    )
  }),
    (bt.multiply = function (t, e, n) {
      const r = t[0] * e[0] + t[2] * e[1],
        i = t[0] * e[2] + t[2] * e[3],
        a = t[1] * e[0] + t[3] * e[1],
        u = t[1] * e[2] + t[3] * e[3]
      return (n[0] = r), (n[1] = a), (n[2] = i), (n[3] = u), n
    }),
    (bt.add = function (t, e, n) {
      return (
        (n[0] = t[0] + e[0]),
        (n[1] = t[1] + e[1]),
        (n[2] = t[2] + e[2]),
        (n[3] = t[3] + e[3]),
        n
      )
    }),
    (bt.subtract = function (t, e, n) {
      return (
        (n[0] = t[0] - e[0]),
        (n[1] = t[1] - e[1]),
        (n[2] = t[2] - e[2]),
        (n[3] = t[3] - e[3]),
        n
      )
    }),
    (bt.multiplyByVector = function (t, e, n) {
      const r = t[0] * e.x + t[2] * e.y,
        i = t[1] * e.x + t[3] * e.y
      return (n.x = r), (n.y = i), n
    }),
    (bt.multiplyByScalar = function (t, e, n) {
      return (
        (n[0] = t[0] * e),
        (n[1] = t[1] * e),
        (n[2] = t[2] * e),
        (n[3] = t[3] * e),
        n
      )
    }),
    (bt.multiplyByScale = function (t, e, n) {
      return (
        (n[0] = t[0] * e.x),
        (n[1] = t[1] * e.x),
        (n[2] = t[2] * e.y),
        (n[3] = t[3] * e.y),
        n
      )
    }),
    (bt.multiplyByUniformScale = function (t, e, n) {
      return (
        (n[0] = t[0] * e),
        (n[1] = t[1] * e),
        (n[2] = t[2] * e),
        (n[3] = t[3] * e),
        n
      )
    }),
    (bt.negate = function (t, e) {
      return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = -t[3]), e
    }),
    (bt.transpose = function (t, e) {
      const n = t[0],
        r = t[2],
        i = t[1],
        a = t[3]
      return (e[0] = n), (e[1] = r), (e[2] = i), (e[3] = a), e
    }),
    (bt.abs = function (t, e) {
      return (
        (e[0] = Math.abs(t[0])),
        (e[1] = Math.abs(t[1])),
        (e[2] = Math.abs(t[2])),
        (e[3] = Math.abs(t[3])),
        e
      )
    }),
    (bt.equals = function (t, e) {
      return (
        t === e ||
        (n.defined(t) &&
          n.defined(e) &&
          t[0] === e[0] &&
          t[1] === e[1] &&
          t[2] === e[2] &&
          t[3] === e[3])
      )
    }),
    (bt.equalsArray = function (t, e, n) {
      return (
        t[0] === e[n] &&
        t[1] === e[n + 1] &&
        t[2] === e[n + 2] &&
        t[3] === e[n + 3]
      )
    }),
    (bt.equalsEpsilon = function (t, e, r) {
      return (
        (r = n.defaultValue(r, 0)),
        t === e ||
          (n.defined(t) &&
            n.defined(e) &&
            Math.abs(t[0] - e[0]) <= r &&
            Math.abs(t[1] - e[1]) <= r &&
            Math.abs(t[2] - e[2]) <= r &&
            Math.abs(t[3] - e[3]) <= r)
      )
    }),
    (bt.IDENTITY = Object.freeze(new bt(1, 0, 0, 1))),
    (bt.ZERO = Object.freeze(new bt(0, 0, 0, 0))),
    (bt.COLUMN0ROW0 = 0),
    (bt.COLUMN0ROW1 = 1),
    (bt.COLUMN1ROW0 = 2),
    (bt.COLUMN1ROW1 = 3),
    Object.defineProperties(bt.prototype, {
      length: {
        get: function () {
          return bt.packedLength
        }
      }
    }),
    (bt.prototype.clone = function (t) {
      return bt.clone(this, t)
    }),
    (bt.prototype.equals = function (t) {
      return bt.equals(this, t)
    }),
    (bt.prototype.equalsEpsilon = function (t, e) {
      return bt.equalsEpsilon(this, t, e)
    }),
    (bt.prototype.toString = function () {
      return `(${this[0]}, ${this[2]})\n(${this[1]}, ${this[3]})`
    }),
    (t.Cartesian2 = wt),
    (t.Cartesian3 = i),
    (t.Cartesian4 = Y),
    (t.Cartographic = p),
    (t.Ellipsoid = b),
    (t.Matrix2 = bt),
    (t.Matrix3 = I),
    (t.Matrix4 = et),
    (t.Rectangle = pt)
})
