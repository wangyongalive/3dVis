define([
  'exports',
  './Matrix2-47e98d76',
  './defaultValue-81eec7ed',
  './RuntimeError-8952249c',
  './Transforms-08771371',
  './ComponentDatatype-a15c9a19'
], function (t, n, a, e, o, r) {
  'use strict'
  const s = Math.cos,
    i = Math.sin,
    c = Math.sqrt,
    g = {
      computePosition: function (t, n, e, o, r, g, u) {
        const h = n.radiiSquared,
          l = t.nwCorner,
          C = t.boundingRectangle
        let S = l.latitude - t.granYCos * o + r * t.granXSin
        const d = s(S),
          w = i(S),
          M = h.z * w
        let m = l.longitude + o * t.granYSin + r * t.granXCos
        const X = d * s(m),
          Y = d * i(m),
          p = h.x * X,
          f = h.y * Y,
          x = c(p * X + f * Y + M * w)
        if (((g.x = p / x), (g.y = f / x), (g.z = M / x), e)) {
          const n = t.stNwCorner
          a.defined(n)
            ? ((S = n.latitude - t.stGranYCos * o + r * t.stGranXSin),
              (m = n.longitude + o * t.stGranYSin + r * t.stGranXCos),
              (u.x = (m - t.stWest) * t.lonScalar),
              (u.y = (S - t.stSouth) * t.latScalar))
            : ((u.x = (m - C.west) * t.lonScalar),
              (u.y = (S - C.south) * t.latScalar))
        }
      }
    },
    u = new n.Matrix2()
  let h = new n.Cartesian3()
  const l = new n.Cartographic()
  let C = new n.Cartesian3()
  const S = new o.GeographicProjection()
  function d(t, a, e, o, r, s, i) {
    const c = Math.cos(a),
      g = o * c,
      l = e * c,
      d = Math.sin(a),
      w = o * d,
      M = e * d
    ;(h = S.project(t, h)), (h = n.Cartesian3.subtract(h, C, h))
    const m = n.Matrix2.fromRotation(a, u)
    ;(h = n.Matrix2.multiplyByVector(m, h, h)),
      (h = n.Cartesian3.add(h, C, h)),
      (s -= 1),
      (i -= 1)
    const X = (t = S.unproject(h, t)).latitude,
      Y = X + s * M,
      p = X - g * i,
      f = X - g * i + s * M,
      x = Math.max(X, Y, p, f),
      R = Math.min(X, Y, p, f),
      G = t.longitude,
      y = G + s * l,
      O = G + i * w,
      P = G + i * w + s * l
    return {
      north: x,
      south: R,
      east: Math.max(G, y, O, P),
      west: Math.min(G, y, O, P),
      granYCos: g,
      granYSin: w,
      granXCos: l,
      granXSin: M,
      nwCorner: t
    }
  }
  ;(g.computeOptions = function (t, a, e, o, s, i, c) {
    let g,
      u = t.east,
      h = t.west,
      w = t.north,
      M = t.south,
      m = !1,
      X = !1
    w === r.CesiumMath.PI_OVER_TWO && (m = !0),
      M === -r.CesiumMath.PI_OVER_TWO && (X = !0)
    const Y = w - M
    g = h > u ? r.CesiumMath.TWO_PI - h + u : u - h
    const p = Math.ceil(g / a) + 1,
      f = Math.ceil(Y / a) + 1,
      x = g / (p - 1),
      R = Y / (f - 1),
      G = n.Rectangle.northwest(t, i),
      y = n.Rectangle.center(t, l)
    ;(0 === e && 0 === o) ||
      (y.longitude < G.longitude && (y.longitude += r.CesiumMath.TWO_PI),
      (C = S.project(y, C)))
    const O = R,
      P = x,
      W = n.Rectangle.clone(t, s),
      _ = {
        granYCos: O,
        granYSin: 0,
        granXCos: P,
        granXSin: 0,
        nwCorner: G,
        boundingRectangle: W,
        width: p,
        height: f,
        northCap: m,
        southCap: X
      }
    if (0 !== e) {
      const t = d(G, e, x, R, 0, p, f)
      ;(w = t.north),
        (M = t.south),
        (u = t.east),
        (h = t.west),
        (_.granYCos = t.granYCos),
        (_.granYSin = t.granYSin),
        (_.granXCos = t.granXCos),
        (_.granXSin = t.granXSin),
        (W.north = w),
        (W.south = M),
        (W.east = u),
        (W.west = h)
    }
    if (0 !== o) {
      e -= o
      const t = n.Rectangle.northwest(W, c),
        a = d(t, e, x, R, 0, p, f)
      ;(_.stGranYCos = a.granYCos),
        (_.stGranXCos = a.granXCos),
        (_.stGranYSin = a.granYSin),
        (_.stGranXSin = a.granXSin),
        (_.stNwCorner = t),
        (_.stWest = a.west),
        (_.stSouth = a.south)
    }
    return _
  }),
    (t.RectangleGeometryLibrary = g)
})
