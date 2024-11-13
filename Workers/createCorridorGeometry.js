define([
  './GeometryOffsetAttribute-8c5e10db',
  './arrayRemoveDuplicates-dc2f4046',
  './Transforms-08771371',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './PolylineVolumeGeometryLibrary-bd3abf28',
  './CorridorGeometryLibrary-791c363a',
  './defaultValue-81eec7ed',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './IndexDatatype-f1dcdf35',
  './PolygonPipeline-32809f7a',
  './VertexFormat-a0b706b0',
  './_commonjsHelpers-3aae1032-26891ab7',
  './combine-3c023bda',
  './WebGLConstants-508b9636',
  './EllipsoidTangentPlane-aa2df207',
  './AxisAlignedBoundingBox-8b0fdc16',
  './IntersectionTests-bc78300e',
  './Plane-3f01019d',
  './PolylinePipeline-e75581a7',
  './EllipsoidGeodesic-19e75e11',
  './EllipsoidRhumbLine-6145377b'
], function (
  t,
  e,
  r,
  a,
  i,
  o,
  n,
  s,
  l,
  d,
  u,
  c,
  m,
  y,
  f,
  p,
  g,
  h,
  b,
  C,
  A,
  _,
  w,
  v
) {
  'use strict'
  const T = new a.Cartesian3(),
    G = new a.Cartesian3(),
    E = new a.Cartesian3(),
    V = new a.Cartesian3(),
    x = new a.Cartesian3(),
    F = new a.Cartesian3(),
    L = new a.Cartesian3(),
    P = new a.Cartesian3()
  function N(t, e) {
    for (let r = 0; r < t.length; r++)
      t[r] = e.scaleToGeodeticSurface(t[r], t[r])
    return t
  }
  function D(t, e, r, i, o, n) {
    const l = t.normals,
      d = t.tangents,
      u = t.bitangents,
      c = a.Cartesian3.normalize(a.Cartesian3.cross(r, e, L), L)
    n.normal && s.CorridorGeometryLibrary.addAttribute(l, e, i, o),
      n.tangent && s.CorridorGeometryLibrary.addAttribute(d, c, i, o),
      n.bitangent && s.CorridorGeometryLibrary.addAttribute(u, r, i, o)
  }
  function M(t, e, r) {
    const i = t.positions,
      n = t.corners,
      m = t.endPositions,
      y = t.lefts,
      f = t.normals,
      p = new u.GeometryAttributes()
    let g,
      h,
      b,
      C = 0,
      A = 0,
      _ = 0
    for (h = 0; h < i.length; h += 2)
      (b = i[h].length - 3), (C += b), (_ += 2 * b), (A += i[h + 1].length - 3)
    for (C += 3, A += 3, h = 0; h < n.length; h++) {
      g = n[h]
      const t = n[h].leftPositions
      l.defined(t)
        ? ((b = t.length), (C += b), (_ += b))
        : ((b = n[h].rightPositions.length), (A += b), (_ += b))
    }
    const w = l.defined(m)
    let v
    w && ((v = m[0].length - 3), (C += v), (A += v), (v /= 3), (_ += 6 * v))
    const x = C + A,
      N = new Float64Array(x),
      M = {
        normals: e.normal ? new Float32Array(x) : void 0,
        tangents: e.tangent ? new Float32Array(x) : void 0,
        bitangents: e.bitangent ? new Float32Array(x) : void 0
      }
    let O,
      I,
      S,
      R,
      k,
      H,
      z = 0,
      B = x - 1,
      U = T,
      Y = G
    const W = v / 2,
      q = c.IndexDatatype.createTypedArray(x / 3, _)
    let j = 0
    if (w) {
      ;(H = E), (k = V)
      const t = m[0]
      for (
        U = a.Cartesian3.fromArray(f, 0, U),
          Y = a.Cartesian3.fromArray(y, 0, Y),
          h = 0;
        h < W;
        h++
      )
        (H = a.Cartesian3.fromArray(t, 3 * (W - 1 - h), H)),
          (k = a.Cartesian3.fromArray(t, 3 * (W + h), k)),
          s.CorridorGeometryLibrary.addAttribute(N, k, z),
          s.CorridorGeometryLibrary.addAttribute(N, H, void 0, B),
          D(M, U, Y, z, B, e),
          (I = z / 3),
          (R = I + 1),
          (O = (B - 2) / 3),
          (S = O - 1),
          (q[j++] = O),
          (q[j++] = I),
          (q[j++] = S),
          (q[j++] = S),
          (q[j++] = I),
          (q[j++] = R),
          (z += 3),
          (B -= 3)
    }
    let J,
      K,
      Q = 0,
      X = 0,
      Z = i[Q++],
      $ = i[Q++]
    for (
      N.set(Z, z),
        N.set($, B - $.length + 1),
        Y = a.Cartesian3.fromArray(y, X, Y),
        b = $.length - 3,
        h = 0;
      h < b;
      h += 3
    )
      (J = r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z, h, L), L)),
        (K = r.geodeticSurfaceNormal(a.Cartesian3.fromArray($, b - h, P), P)),
        (U = a.Cartesian3.normalize(a.Cartesian3.add(J, K, U), U)),
        D(M, U, Y, z, B, e),
        (I = z / 3),
        (R = I + 1),
        (O = (B - 2) / 3),
        (S = O - 1),
        (q[j++] = O),
        (q[j++] = I),
        (q[j++] = S),
        (q[j++] = S),
        (q[j++] = I),
        (q[j++] = R),
        (z += 3),
        (B -= 3)
    for (
      J = r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z, b, L), L),
        K = r.geodeticSurfaceNormal(a.Cartesian3.fromArray($, b, P), P),
        U = a.Cartesian3.normalize(a.Cartesian3.add(J, K, U), U),
        X += 3,
        h = 0;
      h < n.length;
      h++
    ) {
      let t
      g = n[h]
      const o = g.leftPositions,
        d = g.rightPositions
      let u,
        c,
        m = F,
        p = E,
        C = V
      if (((U = a.Cartesian3.fromArray(f, X, U)), l.defined(o))) {
        for (
          D(M, U, Y, void 0, B, e), B -= 3, u = R, c = S, t = 0;
          t < o.length / 3;
          t++
        )
          (m = a.Cartesian3.fromArray(o, 3 * t, m)),
            (q[j++] = u),
            (q[j++] = c - t - 1),
            (q[j++] = c - t),
            s.CorridorGeometryLibrary.addAttribute(N, m, void 0, B),
            (p = a.Cartesian3.fromArray(N, 3 * (c - t - 1), p)),
            (C = a.Cartesian3.fromArray(N, 3 * u, C)),
            (Y = a.Cartesian3.normalize(a.Cartesian3.subtract(p, C, Y), Y)),
            D(M, U, Y, void 0, B, e),
            (B -= 3)
        ;(m = a.Cartesian3.fromArray(N, 3 * u, m)),
          (p = a.Cartesian3.subtract(
            a.Cartesian3.fromArray(N, 3 * c, p),
            m,
            p
          )),
          (C = a.Cartesian3.subtract(
            a.Cartesian3.fromArray(N, 3 * (c - t), C),
            m,
            C
          )),
          (Y = a.Cartesian3.normalize(a.Cartesian3.add(p, C, Y), Y)),
          D(M, U, Y, z, void 0, e),
          (z += 3)
      } else {
        for (
          D(M, U, Y, z, void 0, e), z += 3, u = S, c = R, t = 0;
          t < d.length / 3;
          t++
        )
          (m = a.Cartesian3.fromArray(d, 3 * t, m)),
            (q[j++] = u),
            (q[j++] = c + t),
            (q[j++] = c + t + 1),
            s.CorridorGeometryLibrary.addAttribute(N, m, z),
            (p = a.Cartesian3.fromArray(N, 3 * u, p)),
            (C = a.Cartesian3.fromArray(N, 3 * (c + t), C)),
            (Y = a.Cartesian3.normalize(a.Cartesian3.subtract(p, C, Y), Y)),
            D(M, U, Y, z, void 0, e),
            (z += 3)
        ;(m = a.Cartesian3.fromArray(N, 3 * u, m)),
          (p = a.Cartesian3.subtract(
            a.Cartesian3.fromArray(N, 3 * (c + t), p),
            m,
            p
          )),
          (C = a.Cartesian3.subtract(
            a.Cartesian3.fromArray(N, 3 * c, C),
            m,
            C
          )),
          (Y = a.Cartesian3.normalize(
            a.Cartesian3.negate(a.Cartesian3.add(C, p, Y), Y),
            Y
          )),
          D(M, U, Y, void 0, B, e),
          (B -= 3)
      }
      for (
        Z = i[Q++],
          $ = i[Q++],
          Z.splice(0, 3),
          $.splice($.length - 3, 3),
          N.set(Z, z),
          N.set($, B - $.length + 1),
          b = $.length - 3,
          X += 3,
          Y = a.Cartesian3.fromArray(y, X, Y),
          t = 0;
        t < $.length;
        t += 3
      )
        (J = r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z, t, L), L)),
          (K = r.geodeticSurfaceNormal(a.Cartesian3.fromArray($, b - t, P), P)),
          (U = a.Cartesian3.normalize(a.Cartesian3.add(J, K, U), U)),
          D(M, U, Y, z, B, e),
          (R = z / 3),
          (I = R - 1),
          (S = (B - 2) / 3),
          (O = S + 1),
          (q[j++] = O),
          (q[j++] = I),
          (q[j++] = S),
          (q[j++] = S),
          (q[j++] = I),
          (q[j++] = R),
          (z += 3),
          (B -= 3)
      ;(z -= 3), (B += 3)
    }
    if (
      ((U = a.Cartesian3.fromArray(f, f.length - 3, U)), D(M, U, Y, z, B, e), w)
    ) {
      ;(z += 3), (B -= 3), (H = E), (k = V)
      const t = m[1]
      for (h = 0; h < W; h++)
        (H = a.Cartesian3.fromArray(t, 3 * (v - h - 1), H)),
          (k = a.Cartesian3.fromArray(t, 3 * h, k)),
          s.CorridorGeometryLibrary.addAttribute(N, H, void 0, B),
          s.CorridorGeometryLibrary.addAttribute(N, k, z),
          D(M, U, Y, z, B, e),
          (R = z / 3),
          (I = R - 1),
          (S = (B - 2) / 3),
          (O = S + 1),
          (q[j++] = O),
          (q[j++] = I),
          (q[j++] = S),
          (q[j++] = S),
          (q[j++] = I),
          (q[j++] = R),
          (z += 3),
          (B -= 3)
    }
    if (
      ((p.position = new d.GeometryAttribute({
        componentDatatype: o.ComponentDatatype.DOUBLE,
        componentsPerAttribute: 3,
        values: N
      })),
      e.st)
    ) {
      const t = new Float32Array((x / 3) * 2)
      let e,
        r,
        a = 0
      if (w) {
        ;(C /= 3), (A /= 3)
        const i = Math.PI / (v + 1)
        let n
        ;(r = 1 / (C - v + 1)), (e = 1 / (A - v + 1))
        const s = v / 2
        for (h = s + 1; h < v + 1; h++)
          (n = o.CesiumMath.PI_OVER_TWO + i * h),
            (t[a++] = e * (1 + Math.cos(n))),
            (t[a++] = 0.5 * (1 + Math.sin(n)))
        for (h = 1; h < A - v + 1; h++) (t[a++] = h * e), (t[a++] = 0)
        for (h = v; h > s; h--)
          (n = o.CesiumMath.PI_OVER_TWO - h * i),
            (t[a++] = 1 - e * (1 + Math.cos(n))),
            (t[a++] = 0.5 * (1 + Math.sin(n)))
        for (h = s; h > 0; h--)
          (n = o.CesiumMath.PI_OVER_TWO - i * h),
            (t[a++] = 1 - r * (1 + Math.cos(n))),
            (t[a++] = 0.5 * (1 + Math.sin(n)))
        for (h = C - v; h > 0; h--) (t[a++] = h * r), (t[a++] = 1)
        for (h = 1; h < s + 1; h++)
          (n = o.CesiumMath.PI_OVER_TWO + i * h),
            (t[a++] = r * (1 + Math.cos(n))),
            (t[a++] = 0.5 * (1 + Math.sin(n)))
      } else {
        for (
          C /= 3, A /= 3, r = 1 / (C - 1), e = 1 / (A - 1), h = 0;
          h < A;
          h++
        )
          (t[a++] = h * e), (t[a++] = 0)
        for (h = C; h > 0; h--) (t[a++] = (h - 1) * r), (t[a++] = 1)
      }
      p.st = new d.GeometryAttribute({
        componentDatatype: o.ComponentDatatype.FLOAT,
        componentsPerAttribute: 2,
        values: t
      })
    }
    return (
      e.normal &&
        (p.normal = new d.GeometryAttribute({
          componentDatatype: o.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: M.normals
        })),
      e.tangent &&
        (p.tangent = new d.GeometryAttribute({
          componentDatatype: o.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: M.tangents
        })),
      e.bitangent &&
        (p.bitangent = new d.GeometryAttribute({
          componentDatatype: o.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: M.bitangents
        })),
      { attributes: p, indices: q }
    )
  }
  function O(t, e, r) {
    ;(r[e++] = t[0]), (r[e++] = t[1]), (r[e++] = t[2])
    for (let a = 3; a < t.length; a += 3) {
      const i = t[a],
        o = t[a + 1],
        n = t[a + 2]
      ;(r[e++] = i),
        (r[e++] = o),
        (r[e++] = n),
        (r[e++] = i),
        (r[e++] = o),
        (r[e++] = n)
    }
    return (r[e++] = t[0]), (r[e++] = t[1]), (r[e++] = t[2]), r
  }
  function I(e, r) {
    const i = new y.VertexFormat({
        position: r.position,
        normal: r.normal || r.bitangent || e.shadowVolume,
        tangent: r.tangent,
        bitangent: r.normal || r.bitangent,
        st: r.st
      }),
      n = e.ellipsoid,
      u = M(s.CorridorGeometryLibrary.computePositions(e), i, n),
      f = e.height,
      p = e.extrudedHeight
    let g = u.attributes
    const h = u.indices
    let b = g.position.values,
      C = b.length
    const A = new Float64Array(6 * C)
    let _ = new Float64Array(C)
    _.set(b)
    let w,
      v = new Float64Array(4 * C)
    ;(b = m.PolygonPipeline.scaleToGeodeticHeight(b, f, n)),
      (v = O(b, 0, v)),
      (_ = m.PolygonPipeline.scaleToGeodeticHeight(_, p, n)),
      (v = O(_, 2 * C, v)),
      A.set(b),
      A.set(_, C),
      A.set(v, 2 * C),
      (g.position.values = A),
      (g = (function (t, e) {
        if (!(e.normal || e.tangent || e.bitangent || e.st)) return t
        const r = t.position.values
        let i, o
        ;(e.normal || e.bitangent) &&
          ((i = t.normal.values), (o = t.bitangent.values))
        const n = t.position.values.length / 18,
          l = 3 * n,
          d = 2 * n,
          u = 2 * l
        let c
        if (e.normal || e.bitangent || e.tangent) {
          const n = e.normal ? new Float32Array(6 * l) : void 0,
            d = e.tangent ? new Float32Array(6 * l) : void 0,
            m = e.bitangent ? new Float32Array(6 * l) : void 0
          let y = T,
            f = G,
            p = E,
            g = V,
            h = x,
            b = F,
            C = u
          for (c = 0; c < l; c += 3) {
            const t = C + u
            ;(y = a.Cartesian3.fromArray(r, c, y)),
              (f = a.Cartesian3.fromArray(r, c + l, f)),
              (p = a.Cartesian3.fromArray(r, (c + 3) % l, p)),
              (f = a.Cartesian3.subtract(f, y, f)),
              (p = a.Cartesian3.subtract(p, y, p)),
              (g = a.Cartesian3.normalize(a.Cartesian3.cross(f, p, g), g)),
              e.normal &&
                (s.CorridorGeometryLibrary.addAttribute(n, g, t),
                s.CorridorGeometryLibrary.addAttribute(n, g, t + 3),
                s.CorridorGeometryLibrary.addAttribute(n, g, C),
                s.CorridorGeometryLibrary.addAttribute(n, g, C + 3)),
              (e.tangent || e.bitangent) &&
                ((b = a.Cartesian3.fromArray(i, c, b)),
                e.bitangent &&
                  (s.CorridorGeometryLibrary.addAttribute(m, b, t),
                  s.CorridorGeometryLibrary.addAttribute(m, b, t + 3),
                  s.CorridorGeometryLibrary.addAttribute(m, b, C),
                  s.CorridorGeometryLibrary.addAttribute(m, b, C + 3)),
                e.tangent &&
                  ((h = a.Cartesian3.normalize(a.Cartesian3.cross(b, g, h), h)),
                  s.CorridorGeometryLibrary.addAttribute(d, h, t),
                  s.CorridorGeometryLibrary.addAttribute(d, h, t + 3),
                  s.CorridorGeometryLibrary.addAttribute(d, h, C),
                  s.CorridorGeometryLibrary.addAttribute(d, h, C + 3))),
              (C += 6)
          }
          if (e.normal) {
            for (n.set(i), c = 0; c < l; c += 3)
              (n[c + l] = -i[c]),
                (n[c + l + 1] = -i[c + 1]),
                (n[c + l + 2] = -i[c + 2])
            t.normal.values = n
          } else t.normal = void 0
          if (
            (e.bitangent
              ? (m.set(o), m.set(o, l), (t.bitangent.values = m))
              : (t.bitangent = void 0),
            e.tangent)
          ) {
            const e = t.tangent.values
            d.set(e), d.set(e, l), (t.tangent.values = d)
          }
        }
        if (e.st) {
          const e = t.st.values,
            r = new Float32Array(6 * d)
          r.set(e), r.set(e, d)
          let a = 2 * d
          for (let t = 0; t < 2; t++) {
            for (r[a++] = e[0], r[a++] = e[1], c = 2; c < d; c += 2) {
              const t = e[c],
                i = e[c + 1]
              ;(r[a++] = t), (r[a++] = i), (r[a++] = t), (r[a++] = i)
            }
            ;(r[a++] = e[0]), (r[a++] = e[1])
          }
          t.st.values = r
        }
        return t
      })(g, r))
    const L = C / 3
    if (e.shadowVolume) {
      const t = g.normal.values
      C = t.length
      let e = new Float32Array(6 * C)
      for (w = 0; w < C; w++) t[w] = -t[w]
      e.set(t, C),
        (e = O(t, 4 * C, e)),
        (g.extrudeDirection = new d.GeometryAttribute({
          componentDatatype: o.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: e
        })),
        r.normal || (g.normal = void 0)
    }
    if (l.defined(e.offsetAttribute)) {
      let r = new Uint8Array(6 * L)
      if (e.offsetAttribute === t.GeometryOffsetAttribute.TOP)
        (r = t.arrayFill(r, 1, 0, L)), (r = t.arrayFill(r, 1, 2 * L, 4 * L))
      else {
        const a = e.offsetAttribute === t.GeometryOffsetAttribute.NONE ? 0 : 1
        r = t.arrayFill(r, a)
      }
      g.applyOffset = new d.GeometryAttribute({
        componentDatatype: o.ComponentDatatype.UNSIGNED_BYTE,
        componentsPerAttribute: 1,
        values: r
      })
    }
    const P = h.length,
      N = L + L,
      D = c.IndexDatatype.createTypedArray(A.length / 3, 2 * P + 3 * N)
    D.set(h)
    let I,
      S,
      R,
      k,
      H = P
    for (w = 0; w < P; w += 3) {
      const t = h[w],
        e = h[w + 1],
        r = h[w + 2]
      ;(D[H++] = r + L), (D[H++] = e + L), (D[H++] = t + L)
    }
    for (w = 0; w < N; w += 2)
      (I = w + N),
        (S = I + N),
        (R = I + 1),
        (k = S + 1),
        (D[H++] = I),
        (D[H++] = S),
        (D[H++] = R),
        (D[H++] = R),
        (D[H++] = S),
        (D[H++] = k)
    return { attributes: g, indices: D }
  }
  const S = new a.Cartesian3(),
    R = new a.Cartesian3(),
    k = new a.Cartographic()
  function H(t, e, r, i, o, n) {
    const s = a.Cartesian3.subtract(e, t, S)
    a.Cartesian3.normalize(s, s)
    const l = r.geodeticSurfaceNormal(t, R),
      d = a.Cartesian3.cross(s, l, S)
    a.Cartesian3.multiplyByScalar(d, i, d)
    let u = o.latitude,
      c = o.longitude,
      m = n.latitude,
      y = n.longitude
    a.Cartesian3.add(t, d, R), r.cartesianToCartographic(R, k)
    let f = k.latitude,
      p = k.longitude
    ;(u = Math.min(u, f)),
      (c = Math.min(c, p)),
      (m = Math.max(m, f)),
      (y = Math.max(y, p)),
      a.Cartesian3.subtract(t, d, R),
      r.cartesianToCartographic(R, k),
      (f = k.latitude),
      (p = k.longitude),
      (u = Math.min(u, f)),
      (c = Math.min(c, p)),
      (m = Math.max(m, f)),
      (y = Math.max(y, p)),
      (o.latitude = u),
      (o.longitude = c),
      (n.latitude = m),
      (n.longitude = y)
  }
  const z = new a.Cartesian3(),
    B = new a.Cartesian3(),
    U = new a.Cartographic(),
    Y = new a.Cartographic()
  function W(t, r, i, o, s) {
    t = N(t, r)
    const d = e.arrayRemoveDuplicates(t, a.Cartesian3.equalsEpsilon),
      u = d.length
    if (u < 2 || i <= 0) return new a.Rectangle()
    const c = 0.5 * i
    let m, y
    if (
      ((U.latitude = Number.POSITIVE_INFINITY),
      (U.longitude = Number.POSITIVE_INFINITY),
      (Y.latitude = Number.NEGATIVE_INFINITY),
      (Y.longitude = Number.NEGATIVE_INFINITY),
      o === n.CornerType.ROUNDED)
    ) {
      const t = d[0]
      a.Cartesian3.subtract(t, d[1], z),
        a.Cartesian3.normalize(z, z),
        a.Cartesian3.multiplyByScalar(z, c, z),
        a.Cartesian3.add(t, z, B),
        r.cartesianToCartographic(B, k),
        (m = k.latitude),
        (y = k.longitude),
        (U.latitude = Math.min(U.latitude, m)),
        (U.longitude = Math.min(U.longitude, y)),
        (Y.latitude = Math.max(Y.latitude, m)),
        (Y.longitude = Math.max(Y.longitude, y))
    }
    for (let t = 0; t < u - 1; ++t) H(d[t], d[t + 1], r, c, U, Y)
    const f = d[u - 1]
    a.Cartesian3.subtract(f, d[u - 2], z),
      a.Cartesian3.normalize(z, z),
      a.Cartesian3.multiplyByScalar(z, c, z),
      a.Cartesian3.add(f, z, B),
      H(f, B, r, c, U, Y),
      o === n.CornerType.ROUNDED &&
        (r.cartesianToCartographic(B, k),
        (m = k.latitude),
        (y = k.longitude),
        (U.latitude = Math.min(U.latitude, m)),
        (U.longitude = Math.min(U.longitude, y)),
        (Y.latitude = Math.max(Y.latitude, m)),
        (Y.longitude = Math.max(Y.longitude, y)))
    const p = l.defined(s) ? s : new a.Rectangle()
    return (
      (p.north = Y.latitude),
      (p.south = U.latitude),
      (p.east = Y.longitude),
      (p.west = U.longitude),
      p
    )
  }
  function q(t) {
    const e = (t = l.defaultValue(t, l.defaultValue.EMPTY_OBJECT)).positions,
      r = t.width,
      i = l.defaultValue(t.height, 0),
      s = l.defaultValue(t.extrudedHeight, i)
    ;(this._positions = e),
      (this._ellipsoid = a.Ellipsoid.clone(
        l.defaultValue(t.ellipsoid, a.Ellipsoid.WGS84)
      )),
      (this._vertexFormat = y.VertexFormat.clone(
        l.defaultValue(t.vertexFormat, y.VertexFormat.DEFAULT)
      )),
      (this._width = r),
      (this._height = Math.max(i, s)),
      (this._extrudedHeight = Math.min(i, s)),
      (this._cornerType = l.defaultValue(t.cornerType, n.CornerType.ROUNDED)),
      (this._granularity = l.defaultValue(
        t.granularity,
        o.CesiumMath.RADIANS_PER_DEGREE
      )),
      (this._shadowVolume = l.defaultValue(t.shadowVolume, !1)),
      (this._workerName = 'createCorridorGeometry'),
      (this._offsetAttribute = t.offsetAttribute),
      (this._rectangle = void 0),
      (this.packedLength =
        1 +
        e.length * a.Cartesian3.packedLength +
        a.Ellipsoid.packedLength +
        y.VertexFormat.packedLength +
        7)
  }
  q.pack = function (t, e, r) {
    r = l.defaultValue(r, 0)
    const i = t._positions,
      o = i.length
    e[r++] = o
    for (let t = 0; t < o; ++t, r += a.Cartesian3.packedLength)
      a.Cartesian3.pack(i[t], e, r)
    return (
      a.Ellipsoid.pack(t._ellipsoid, e, r),
      (r += a.Ellipsoid.packedLength),
      y.VertexFormat.pack(t._vertexFormat, e, r),
      (r += y.VertexFormat.packedLength),
      (e[r++] = t._width),
      (e[r++] = t._height),
      (e[r++] = t._extrudedHeight),
      (e[r++] = t._cornerType),
      (e[r++] = t._granularity),
      (e[r++] = t._shadowVolume ? 1 : 0),
      (e[r] = l.defaultValue(t._offsetAttribute, -1)),
      e
    )
  }
  const j = a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),
    J = new y.VertexFormat(),
    K = {
      positions: void 0,
      ellipsoid: j,
      vertexFormat: J,
      width: void 0,
      height: void 0,
      extrudedHeight: void 0,
      cornerType: void 0,
      granularity: void 0,
      shadowVolume: void 0,
      offsetAttribute: void 0
    }
  return (
    (q.unpack = function (t, e, r) {
      e = l.defaultValue(e, 0)
      const i = t[e++],
        o = new Array(i)
      for (let r = 0; r < i; ++r, e += a.Cartesian3.packedLength)
        o[r] = a.Cartesian3.unpack(t, e)
      const n = a.Ellipsoid.unpack(t, e, j)
      e += a.Ellipsoid.packedLength
      const s = y.VertexFormat.unpack(t, e, J)
      e += y.VertexFormat.packedLength
      const d = t[e++],
        u = t[e++],
        c = t[e++],
        m = t[e++],
        f = t[e++],
        p = 1 === t[e++],
        g = t[e]
      return l.defined(r)
        ? ((r._positions = o),
          (r._ellipsoid = a.Ellipsoid.clone(n, r._ellipsoid)),
          (r._vertexFormat = y.VertexFormat.clone(s, r._vertexFormat)),
          (r._width = d),
          (r._height = u),
          (r._extrudedHeight = c),
          (r._cornerType = m),
          (r._granularity = f),
          (r._shadowVolume = p),
          (r._offsetAttribute = -1 === g ? void 0 : g),
          r)
        : ((K.positions = o),
          (K.width = d),
          (K.height = u),
          (K.extrudedHeight = c),
          (K.cornerType = m),
          (K.granularity = f),
          (K.shadowVolume = p),
          (K.offsetAttribute = -1 === g ? void 0 : g),
          new q(K))
    }),
    (q.computeRectangle = function (t, e) {
      const r = (t = l.defaultValue(t, l.defaultValue.EMPTY_OBJECT)).positions,
        i = t.width
      return W(
        r,
        l.defaultValue(t.ellipsoid, a.Ellipsoid.WGS84),
        i,
        l.defaultValue(t.cornerType, n.CornerType.ROUNDED),
        e
      )
    }),
    (q.createGeometry = function (i) {
      let n = i._positions
      const u = i._width,
        c = i._ellipsoid
      n = N(n, c)
      const y = e.arrayRemoveDuplicates(n, a.Cartesian3.equalsEpsilon)
      if (y.length < 2 || u <= 0) return
      const f = i._height,
        p = i._extrudedHeight,
        g = !o.CesiumMath.equalsEpsilon(f, p, 0, o.CesiumMath.EPSILON2),
        h = i._vertexFormat,
        b = {
          ellipsoid: c,
          positions: y,
          width: u,
          cornerType: i._cornerType,
          granularity: i._granularity,
          saveAttributes: !0
        }
      let C
      if (g)
        (b.height = f),
          (b.extrudedHeight = p),
          (b.shadowVolume = i._shadowVolume),
          (b.offsetAttribute = i._offsetAttribute),
          (C = I(b, h))
      else {
        if (
          ((C = M(s.CorridorGeometryLibrary.computePositions(b), h, c)),
          (C.attributes.position.values =
            m.PolygonPipeline.scaleToGeodeticHeight(
              C.attributes.position.values,
              f,
              c
            )),
          l.defined(i._offsetAttribute))
        ) {
          const e =
              i._offsetAttribute === t.GeometryOffsetAttribute.NONE ? 0 : 1,
            r = C.attributes.position.values.length,
            a = new Uint8Array(r / 3)
          t.arrayFill(a, e),
            (C.attributes.applyOffset = new d.GeometryAttribute({
              componentDatatype: o.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 1,
              values: a
            }))
        }
      }
      const A = C.attributes,
        _ = r.BoundingSphere.fromVertices(A.position.values, void 0, 3)
      return (
        h.position || (C.attributes.position.values = void 0),
        new d.Geometry({
          attributes: A,
          indices: C.indices,
          primitiveType: d.PrimitiveType.TRIANGLES,
          boundingSphere: _,
          offsetAttribute: i._offsetAttribute
        })
      )
    }),
    (q.createShadowVolume = function (t, e, r) {
      const a = t._granularity,
        i = t._ellipsoid,
        o = e(a, i),
        n = r(a, i)
      return new q({
        positions: t._positions,
        width: t._width,
        cornerType: t._cornerType,
        ellipsoid: i,
        granularity: a,
        extrudedHeight: o,
        height: n,
        vertexFormat: y.VertexFormat.POSITION_ONLY,
        shadowVolume: !0
      })
    }),
    Object.defineProperties(q.prototype, {
      rectangle: {
        get: function () {
          return (
            l.defined(this._rectangle) ||
              (this._rectangle = W(
                this._positions,
                this._ellipsoid,
                this._width,
                this._cornerType
              )),
            this._rectangle
          )
        }
      },
      textureCoordinateRotationPoints: {
        get: function () {
          return [0, 0, 0, 1, 1, 0]
        }
      }
    }),
    function (t, e) {
      return (
        l.defined(e) && (t = q.unpack(t, e)),
        (t._ellipsoid = a.Ellipsoid.clone(t._ellipsoid)),
        q.createGeometry(t)
      )
    }
  )
})
