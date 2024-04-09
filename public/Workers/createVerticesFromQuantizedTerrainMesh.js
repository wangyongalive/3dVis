define([
  './AxisAlignedBoundingBox-8b0fdc16',
  './Matrix2-47e98d76',
  './defaultValue-81eec7ed',
  './TerrainEncoding-133730d1',
  './IndexDatatype-f1dcdf35',
  './ComponentDatatype-a15c9a19',
  './RuntimeError-8952249c',
  './Transforms-08771371',
  './WebMercatorProjection-79b3214e',
  './createTaskProcessorWorker',
  './AttributeCompression-80665726',
  './WebGLConstants-508b9636',
  './_commonjsHelpers-3aae1032-26891ab7',
  './combine-3c023bda'
], function (e, t, r, n, o, i, a, s, c, d, h, u, l, I) {
  'use strict'
  function g() {
    a.DeveloperError.throwInstantiationError()
  }
  Object.defineProperties(g.prototype, {
    errorEvent: { get: a.DeveloperError.throwInstantiationError },
    credit: { get: a.DeveloperError.throwInstantiationError },
    tilingScheme: { get: a.DeveloperError.throwInstantiationError },
    ready: { get: a.DeveloperError.throwInstantiationError },
    readyPromise: { get: a.DeveloperError.throwInstantiationError },
    hasWaterMask: { get: a.DeveloperError.throwInstantiationError },
    hasVertexNormals: { get: a.DeveloperError.throwInstantiationError },
    availability: { get: a.DeveloperError.throwInstantiationError }
  })
  const m = []
  g.getRegularGridIndices = function (e, t) {
    let n = m[e]
    r.defined(n) || (m[e] = n = [])
    let o = n[t]
    return (
      r.defined(o) ||
        ((o =
          e * t < i.CesiumMath.SIXTY_FOUR_KILOBYTES
            ? (n[t] = new Uint16Array((e - 1) * (t - 1) * 6))
            : (n[t] = new Uint32Array((e - 1) * (t - 1) * 6))),
        p(e, t, o, 0)),
      o
    )
  }
  const T = []
  g.getRegularGridIndicesAndEdgeIndices = function (e, t) {
    let n = T[e]
    r.defined(n) || (T[e] = n = [])
    let o = n[t]
    if (!r.defined(o)) {
      const r = g.getRegularGridIndices(e, t),
        i = f(e, t),
        a = i.westIndicesSouthToNorth,
        s = i.southIndicesEastToWest,
        c = i.eastIndicesNorthToSouth,
        d = i.northIndicesWestToEast
      o = n[t] = {
        indices: r,
        westIndicesSouthToNorth: a,
        southIndicesEastToWest: s,
        eastIndicesNorthToSouth: c,
        northIndicesWestToEast: d
      }
    }
    return o
  }
  const E = []
  function f(e, t) {
    const r = new Array(t),
      n = new Array(e),
      o = new Array(t),
      i = new Array(e)
    let a
    for (a = 0; a < e; ++a) (i[a] = a), (n[a] = e * t - 1 - a)
    for (a = 0; a < t; ++a) (o[a] = (a + 1) * e - 1), (r[a] = (t - a - 1) * e)
    return {
      westIndicesSouthToNorth: r,
      southIndicesEastToWest: n,
      eastIndicesNorthToSouth: o,
      northIndicesWestToEast: i
    }
  }
  function p(e, t, r, n) {
    let o = 0
    for (let i = 0; i < t - 1; ++i) {
      for (let t = 0; t < e - 1; ++t) {
        const t = o,
          i = t + e,
          a = i + 1,
          s = t + 1
        ;(r[n++] = t),
          (r[n++] = i),
          (r[n++] = s),
          (r[n++] = s),
          (r[n++] = i),
          (r[n++] = a),
          ++o
      }
      ++o
    }
  }
  function y(e, t, r, n) {
    let o = e[0]
    const i = e.length
    for (let a = 1; a < i; ++a) {
      const i = e[a]
      ;(r[n++] = o),
        (r[n++] = i),
        (r[n++] = t),
        (r[n++] = t),
        (r[n++] = i),
        (r[n++] = t + 1),
        (o = i),
        ++t
    }
    return n
  }
  ;(g.getRegularGridAndSkirtIndicesAndEdgeIndices = function (e, t) {
    let n = E[e]
    r.defined(n) || (E[e] = n = [])
    let i = n[t]
    if (!r.defined(i)) {
      const r = e * t,
        a = (e - 1) * (t - 1) * 6,
        s = 2 * e + 2 * t,
        c = r + s,
        d = a + 6 * Math.max(0, s - 4),
        h = f(e, t),
        u = h.westIndicesSouthToNorth,
        l = h.southIndicesEastToWest,
        I = h.eastIndicesNorthToSouth,
        m = h.northIndicesWestToEast,
        T = o.IndexDatatype.createTypedArray(c, d)
      p(e, t, T, 0),
        g.addSkirtIndices(u, l, I, m, r, T, a),
        (i = n[t] =
          {
            indices: T,
            westIndicesSouthToNorth: u,
            southIndicesEastToWest: l,
            eastIndicesNorthToSouth: I,
            northIndicesWestToEast: m,
            indexCountWithoutSkirts: a
          })
    }
    return i
  }),
    (g.addSkirtIndices = function (e, t, r, n, o, i, a) {
      let s = o
      ;(a = y(e, s, i, a)),
        (s += e.length),
        (a = y(t, s, i, a)),
        (s += t.length),
        (a = y(r, s, i, a)),
        (s += r.length),
        y(n, s, i, a)
    }),
    (g.heightmapTerrainQuality = 0.25),
    (g.getEstimatedLevelZeroGeometricErrorForAHeightmap = function (e, t, r) {
      return (
        (2 * e.maximumRadius * Math.PI * g.heightmapTerrainQuality) / (t * r)
      )
    }),
    (g.prototype.requestTileGeometry =
      a.DeveloperError.throwInstantiationError),
    (g.prototype.getLevelMaximumGeometricError =
      a.DeveloperError.throwInstantiationError),
    (g.prototype.getTileDataAvailable =
      a.DeveloperError.throwInstantiationError),
    (g.prototype.loadTileDataAvailability =
      a.DeveloperError.throwInstantiationError)
  const N = 32767,
    w = new t.Cartesian3(),
    S = new t.Cartesian3(),
    M = new t.Cartesian3(),
    x = new t.Cartographic(),
    b = new t.Cartesian2()
  function A(e, r, n, o, a, s, c, d, h) {
    let u = Number.POSITIVE_INFINITY
    const l = a.north,
      I = a.south
    let g = a.east
    const m = a.west
    g < m && (g += i.CesiumMath.TWO_PI)
    const T = e.length
    for (let a = 0; a < T; ++a) {
      const T = e[a],
        E = n[T],
        f = o[T]
      ;(x.longitude = i.CesiumMath.lerp(m, g, f.x)),
        (x.latitude = i.CesiumMath.lerp(I, l, f.y)),
        (x.height = E - r)
      const p = s.cartographicToCartesian(x, w)
      t.Matrix4.multiplyByPoint(c, p, p),
        t.Cartesian3.minimumByComponent(p, d, d),
        t.Cartesian3.maximumByComponent(p, h, h),
        (u = Math.min(u, x.height))
    }
    return u
  }
  function C(e, t, n, o, a, s, d, h, u, l, I, g, m, T) {
    const E = r.defined(d),
      f = u.north,
      p = u.south
    let y = u.east
    const N = u.west
    y < N && (y += i.CesiumMath.TWO_PI)
    const S = n.length
    for (let r = 0; r < S; ++r) {
      const u = n[r],
        S = a[u],
        M = s[u]
      ;(x.longitude = i.CesiumMath.lerp(N, y, M.x) + m),
        (x.latitude = i.CesiumMath.lerp(p, f, M.y) + T),
        (x.height = S - l)
      const A = h.cartographicToCartesian(x, w)
      if (E) {
        const e = 2 * u
        ;(b.x = d[e]), (b.y = d[e + 1])
      }
      let C, W
      o.hasWebMercatorT &&
        (C =
          (c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(x.latitude) -
            I) *
          g),
        o.hasGeodeticSurfaceNormals && (W = h.geodeticSurfaceNormal(A)),
        (t = o.encode(e, t, A, M, x.height, b, C, W))
    }
  }
  function W(e, t) {
    let n
    return (
      'function' == typeof e.slice &&
        ((n = e.slice()), 'function' != typeof n.sort && (n = void 0)),
      r.defined(n) || (n = Array.prototype.slice.call(e)),
      n.sort(t),
      n
    )
  }
  return d(function (a, d) {
    const h = a.quantizedVertices,
      u = h.length / 3,
      l = a.octEncodedNormals,
      I =
        a.westIndices.length +
        a.eastIndices.length +
        a.southIndices.length +
        a.northIndices.length,
      m = a.includeWebMercatorT,
      T = a.exaggeration,
      E = a.exaggerationRelativeHeight,
      f = 1 !== T,
      p = t.Rectangle.clone(a.rectangle),
      y = p.west,
      v = p.south,
      P = p.east,
      D = p.north,
      k = t.Ellipsoid.clone(a.ellipsoid),
      F = a.minimumHeight,
      H = a.maximumHeight,
      _ = a.relativeToCenter,
      G = s.Transforms.eastNorthUpToFixedFrame(_, k),
      V = t.Matrix4.inverseTransformation(G, new t.Matrix4())
    let Y, O
    m &&
      ((Y = c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(v)),
      (O =
        1 / (c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(D) - Y)))
    const B = h.subarray(0, u),
      R = h.subarray(u, 2 * u),
      L = h.subarray(2 * u, 3 * u),
      j = r.defined(l),
      U = new Array(u),
      z = new Array(u),
      q = new Array(u),
      Q = m ? new Array(u) : [],
      K = f ? new Array(u) : [],
      X = S
    ;(X.x = Number.POSITIVE_INFINITY),
      (X.y = Number.POSITIVE_INFINITY),
      (X.z = Number.POSITIVE_INFINITY)
    const Z = M
    ;(Z.x = Number.NEGATIVE_INFINITY),
      (Z.y = Number.NEGATIVE_INFINITY),
      (Z.z = Number.NEGATIVE_INFINITY)
    let J = Number.POSITIVE_INFINITY,
      $ = Number.NEGATIVE_INFINITY,
      ee = Number.POSITIVE_INFINITY,
      te = Number.NEGATIVE_INFINITY
    for (let e = 0; e < u; ++e) {
      const r = B[e],
        n = R[e],
        o = r / N,
        a = n / N,
        s = i.CesiumMath.lerp(F, H, L[e] / N)
      ;(x.longitude = i.CesiumMath.lerp(y, P, o)),
        (x.latitude = i.CesiumMath.lerp(v, D, a)),
        (x.height = s),
        (J = Math.min(x.longitude, J)),
        ($ = Math.max(x.longitude, $)),
        (ee = Math.min(x.latitude, ee)),
        (te = Math.max(x.latitude, te))
      const d = k.cartographicToCartesian(x)
      ;(U[e] = new t.Cartesian2(o, a)),
        (z[e] = s),
        (q[e] = d),
        m &&
          (Q[e] =
            (c.WebMercatorProjection.geodeticLatitudeToMercatorAngle(
              x.latitude
            ) -
              Y) *
            O),
        f && (K[e] = k.geodeticSurfaceNormal(d)),
        t.Matrix4.multiplyByPoint(V, d, w),
        t.Cartesian3.minimumByComponent(w, X, X),
        t.Cartesian3.maximumByComponent(w, Z, Z)
    }
    const re = W(a.westIndices, function (e, t) {
        return U[e].y - U[t].y
      }),
      ne = W(a.eastIndices, function (e, t) {
        return U[t].y - U[e].y
      }),
      oe = W(a.southIndices, function (e, t) {
        return U[t].x - U[e].x
      }),
      ie = W(a.northIndices, function (e, t) {
        return U[e].x - U[t].x
      })
    let ae
    if (F < 0) {
      ae = new n.EllipsoidalOccluder(
        k
      ).computeHorizonCullingPointPossiblyUnderEllipsoid(_, q, F)
    }
    let se = F
    ;(se = Math.min(
      se,
      A(a.westIndices, a.westSkirtHeight, z, U, p, k, V, X, Z)
    )),
      (se = Math.min(
        se,
        A(a.southIndices, a.southSkirtHeight, z, U, p, k, V, X, Z)
      )),
      (se = Math.min(
        se,
        A(a.eastIndices, a.eastSkirtHeight, z, U, p, k, V, X, Z)
      )),
      (se = Math.min(
        se,
        A(a.northIndices, a.northSkirtHeight, z, U, p, k, V, X, Z)
      ))
    const ce = new e.AxisAlignedBoundingBox(X, Z, _),
      de = new n.TerrainEncoding(_, ce, se, H, G, j, m, f, T, E),
      he = de.stride,
      ue = new Float32Array(u * he + I * he)
    let le = 0
    for (let e = 0; e < u; ++e) {
      if (j) {
        const t = 2 * e
        ;(b.x = l[t]), (b.y = l[t + 1])
      }
      le = de.encode(ue, le, q[e], U[e], z[e], b, Q[e], K[e])
    }
    const Ie = Math.max(0, 2 * (I - 4)),
      ge = a.indices.length + 3 * Ie,
      me = o.IndexDatatype.createTypedArray(u + I, ge)
    me.set(a.indices, 0)
    const Te = 1e-4,
      Ee = ($ - J) * Te,
      fe = (te - ee) * Te,
      pe = -Ee,
      ye = Ee,
      Ne = fe,
      we = -fe
    let Se = u * he
    return (
      C(ue, Se, re, de, z, U, l, k, p, a.westSkirtHeight, Y, O, pe, 0),
      (Se += a.westIndices.length * he),
      C(ue, Se, oe, de, z, U, l, k, p, a.southSkirtHeight, Y, O, 0, we),
      (Se += a.southIndices.length * he),
      C(ue, Se, ne, de, z, U, l, k, p, a.eastSkirtHeight, Y, O, ye, 0),
      (Se += a.eastIndices.length * he),
      C(ue, Se, ie, de, z, U, l, k, p, a.northSkirtHeight, Y, O, 0, Ne),
      g.addSkirtIndices(re, oe, ne, ie, u, me, a.indices.length),
      d.push(ue.buffer, me.buffer),
      {
        vertices: ue.buffer,
        indices: me.buffer,
        westIndicesSouthToNorth: re,
        southIndicesEastToWest: oe,
        eastIndicesNorthToSouth: ne,
        northIndicesWestToEast: ie,
        vertexStride: he,
        center: _,
        minimumHeight: F,
        maximumHeight: H,
        occludeePointInScaledSpace: ae,
        encoding: de,
        indexCountWithoutSkirts: a.indices.length
      }
    )
  })
})
