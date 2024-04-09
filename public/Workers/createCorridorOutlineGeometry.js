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
  e,
  t,
  i,
  r,
  o,
  n,
  s,
  a,
  l,
  d,
  u,
  p,
  f,
  c,
  h,
  y,
  g,
  b,
  m,
  A,
  _,
  E,
  C
) {
  'use strict'
  const G = new r.Cartesian3(),
    T = new r.Cartesian3(),
    P = new r.Cartesian3()
  function v(e, t) {
    const i = [],
      o = e.positions,
      f = e.corners,
      c = e.endPositions,
      h = new u.GeometryAttributes()
    let y,
      g,
      b,
      m = 0,
      A = 0,
      _ = 0
    for (g = 0; g < o.length; g += 2)
      (b = o[g].length - 3),
        (m += b),
        (_ += (b / 3) * 4),
        (A += o[g + 1].length - 3)
    for (m += 3, A += 3, g = 0; g < f.length; g++) {
      y = f[g]
      const e = f[g].leftPositions
      l.defined(e)
        ? ((b = e.length), (m += b), (_ += (b / 3) * 2))
        : ((b = f[g].rightPositions.length), (A += b), (_ += (b / 3) * 2))
    }
    const E = l.defined(c)
    let C
    E && ((C = c[0].length - 3), (m += C), (A += C), (C /= 3), (_ += 4 * C))
    const v = m + A,
      w = new Float64Array(v)
    let L,
      D,
      x,
      k,
      V,
      H,
      N = 0,
      O = v - 1
    const I = C / 2,
      S = p.IndexDatatype.createTypedArray(v / 3, _ + 4)
    let B = 0
    if (((S[B++] = N / 3), (S[B++] = (O - 2) / 3), E)) {
      i.push(N / 3), (H = G), (V = T)
      const e = c[0]
      for (g = 0; g < I; g++)
        (H = r.Cartesian3.fromArray(e, 3 * (I - 1 - g), H)),
          (V = r.Cartesian3.fromArray(e, 3 * (I + g), V)),
          a.CorridorGeometryLibrary.addAttribute(w, V, N),
          a.CorridorGeometryLibrary.addAttribute(w, H, void 0, O),
          (D = N / 3),
          (k = D + 1),
          (L = (O - 2) / 3),
          (x = L - 1),
          (S[B++] = L),
          (S[B++] = x),
          (S[B++] = D),
          (S[B++] = k),
          (N += 3),
          (O -= 3)
    }
    let M = 0,
      R = o[M++],
      U = o[M++]
    for (
      w.set(R, N),
        w.set(U, O - U.length + 1),
        b = U.length - 3,
        i.push(N / 3, (O - 2) / 3),
        g = 0;
      g < b;
      g += 3
    )
      (D = N / 3),
        (k = D + 1),
        (L = (O - 2) / 3),
        (x = L - 1),
        (S[B++] = L),
        (S[B++] = x),
        (S[B++] = D),
        (S[B++] = k),
        (N += 3),
        (O -= 3)
    for (g = 0; g < f.length; g++) {
      let e
      y = f[g]
      const n = y.leftPositions,
        d = y.rightPositions
      let u,
        p = P
      if (l.defined(n)) {
        for (O -= 3, u = x, i.push(k), e = 0; e < n.length / 3; e++)
          (p = r.Cartesian3.fromArray(n, 3 * e, p)),
            (S[B++] = u - e - 1),
            (S[B++] = u - e),
            a.CorridorGeometryLibrary.addAttribute(w, p, void 0, O),
            (O -= 3)
        i.push(u - Math.floor(n.length / 6)),
          t === s.CornerType.BEVELED && i.push((O - 2) / 3 + 1),
          (N += 3)
      } else {
        for (N += 3, u = k, i.push(x), e = 0; e < d.length / 3; e++)
          (p = r.Cartesian3.fromArray(d, 3 * e, p)),
            (S[B++] = u + e),
            (S[B++] = u + e + 1),
            a.CorridorGeometryLibrary.addAttribute(w, p, N),
            (N += 3)
        i.push(u + Math.floor(d.length / 6)),
          t === s.CornerType.BEVELED && i.push(N / 3 - 1),
          (O -= 3)
      }
      for (
        R = o[M++],
          U = o[M++],
          R.splice(0, 3),
          U.splice(U.length - 3, 3),
          w.set(R, N),
          w.set(U, O - U.length + 1),
          b = U.length - 3,
          e = 0;
        e < U.length;
        e += 3
      )
        (k = N / 3),
          (D = k - 1),
          (x = (O - 2) / 3),
          (L = x + 1),
          (S[B++] = L),
          (S[B++] = x),
          (S[B++] = D),
          (S[B++] = k),
          (N += 3),
          (O -= 3)
      ;(N -= 3), (O += 3), i.push(N / 3, (O - 2) / 3)
    }
    if (E) {
      ;(N += 3), (O -= 3), (H = G), (V = T)
      const e = c[1]
      for (g = 0; g < I; g++)
        (H = r.Cartesian3.fromArray(e, 3 * (C - g - 1), H)),
          (V = r.Cartesian3.fromArray(e, 3 * g, V)),
          a.CorridorGeometryLibrary.addAttribute(w, H, void 0, O),
          a.CorridorGeometryLibrary.addAttribute(w, V, N),
          (k = N / 3),
          (D = k - 1),
          (x = (O - 2) / 3),
          (L = x + 1),
          (S[B++] = L),
          (S[B++] = x),
          (S[B++] = D),
          (S[B++] = k),
          (N += 3),
          (O -= 3)
      i.push(N / 3)
    } else i.push(N / 3, (O - 2) / 3)
    return (
      (S[B++] = N / 3),
      (S[B++] = (O - 2) / 3),
      (h.position = new d.GeometryAttribute({
        componentDatatype: n.ComponentDatatype.DOUBLE,
        componentsPerAttribute: 3,
        values: w
      })),
      { attributes: h, indices: S, wallIndices: i }
    )
  }
  function w(e) {
    const t = (e = l.defaultValue(e, l.defaultValue.EMPTY_OBJECT)).positions,
      i = e.width,
      o = l.defaultValue(e.height, 0),
      a = l.defaultValue(e.extrudedHeight, o)
    ;(this._positions = t),
      (this._ellipsoid = r.Ellipsoid.clone(
        l.defaultValue(e.ellipsoid, r.Ellipsoid.WGS84)
      )),
      (this._width = i),
      (this._height = Math.max(o, a)),
      (this._extrudedHeight = Math.min(o, a)),
      (this._cornerType = l.defaultValue(e.cornerType, s.CornerType.ROUNDED)),
      (this._granularity = l.defaultValue(
        e.granularity,
        n.CesiumMath.RADIANS_PER_DEGREE
      )),
      (this._offsetAttribute = e.offsetAttribute),
      (this._workerName = 'createCorridorOutlineGeometry'),
      (this.packedLength =
        1 + t.length * r.Cartesian3.packedLength + r.Ellipsoid.packedLength + 6)
  }
  w.pack = function (e, t, i) {
    i = l.defaultValue(i, 0)
    const o = e._positions,
      n = o.length
    t[i++] = n
    for (let e = 0; e < n; ++e, i += r.Cartesian3.packedLength)
      r.Cartesian3.pack(o[e], t, i)
    return (
      r.Ellipsoid.pack(e._ellipsoid, t, i),
      (i += r.Ellipsoid.packedLength),
      (t[i++] = e._width),
      (t[i++] = e._height),
      (t[i++] = e._extrudedHeight),
      (t[i++] = e._cornerType),
      (t[i++] = e._granularity),
      (t[i] = l.defaultValue(e._offsetAttribute, -1)),
      t
    )
  }
  const L = r.Ellipsoid.clone(r.Ellipsoid.UNIT_SPHERE),
    D = {
      positions: void 0,
      ellipsoid: L,
      width: void 0,
      height: void 0,
      extrudedHeight: void 0,
      cornerType: void 0,
      granularity: void 0,
      offsetAttribute: void 0
    }
  return (
    (w.unpack = function (e, t, i) {
      t = l.defaultValue(t, 0)
      const o = e[t++],
        n = new Array(o)
      for (let i = 0; i < o; ++i, t += r.Cartesian3.packedLength)
        n[i] = r.Cartesian3.unpack(e, t)
      const s = r.Ellipsoid.unpack(e, t, L)
      t += r.Ellipsoid.packedLength
      const a = e[t++],
        d = e[t++],
        u = e[t++],
        p = e[t++],
        f = e[t++],
        c = e[t]
      return l.defined(i)
        ? ((i._positions = n),
          (i._ellipsoid = r.Ellipsoid.clone(s, i._ellipsoid)),
          (i._width = a),
          (i._height = d),
          (i._extrudedHeight = u),
          (i._cornerType = p),
          (i._granularity = f),
          (i._offsetAttribute = -1 === c ? void 0 : c),
          i)
        : ((D.positions = n),
          (D.width = a),
          (D.height = d),
          (D.extrudedHeight = u),
          (D.cornerType = p),
          (D.granularity = f),
          (D.offsetAttribute = -1 === c ? void 0 : c),
          new w(D))
    }),
    (w.createGeometry = function (o) {
      let s = o._positions
      const u = o._width,
        c = o._ellipsoid
      s = (function (e, t) {
        for (let i = 0; i < e.length; i++)
          e[i] = t.scaleToGeodeticSurface(e[i], e[i])
        return e
      })(s, c)
      const h = t.arrayRemoveDuplicates(s, r.Cartesian3.equalsEpsilon)
      if (h.length < 2 || u <= 0) return
      const y = o._height,
        g = o._extrudedHeight,
        b = !n.CesiumMath.equalsEpsilon(y, g, 0, n.CesiumMath.EPSILON2),
        m = {
          ellipsoid: c,
          positions: h,
          width: u,
          cornerType: o._cornerType,
          granularity: o._granularity,
          saveAttributes: !1
        }
      let A
      if (b)
        (m.height = y),
          (m.extrudedHeight = g),
          (m.offsetAttribute = o._offsetAttribute),
          (A = (function (t) {
            const i = t.ellipsoid,
              r = v(
                a.CorridorGeometryLibrary.computePositions(t),
                t.cornerType
              ),
              o = r.wallIndices,
              s = t.height,
              u = t.extrudedHeight,
              c = r.attributes,
              h = r.indices
            let y = c.position.values,
              g = y.length,
              b = new Float64Array(g)
            b.set(y)
            const m = new Float64Array(2 * g)
            if (
              ((y = f.PolygonPipeline.scaleToGeodeticHeight(y, s, i)),
              (b = f.PolygonPipeline.scaleToGeodeticHeight(b, u, i)),
              m.set(y),
              m.set(b, g),
              (c.position.values = m),
              (g /= 3),
              l.defined(t.offsetAttribute))
            ) {
              let i = new Uint8Array(2 * g)
              if (t.offsetAttribute === e.GeometryOffsetAttribute.TOP)
                i = e.arrayFill(i, 1, 0, g)
              else {
                const r =
                  t.offsetAttribute === e.GeometryOffsetAttribute.NONE ? 0 : 1
                i = e.arrayFill(i, r)
              }
              c.applyOffset = new d.GeometryAttribute({
                componentDatatype: n.ComponentDatatype.UNSIGNED_BYTE,
                componentsPerAttribute: 1,
                values: i
              })
            }
            let A
            const _ = h.length,
              E = p.IndexDatatype.createTypedArray(
                m.length / 3,
                2 * (_ + o.length)
              )
            E.set(h)
            let C,
              G,
              T = _
            for (A = 0; A < _; A += 2) {
              const e = h[A],
                t = h[A + 1]
              ;(E[T++] = e + g), (E[T++] = t + g)
            }
            for (A = 0; A < o.length; A++)
              (C = o[A]), (G = C + g), (E[T++] = C), (E[T++] = G)
            return { attributes: c, indices: E }
          })(m))
      else {
        if (
          ((A = v(a.CorridorGeometryLibrary.computePositions(m), m.cornerType)),
          (A.attributes.position.values =
            f.PolygonPipeline.scaleToGeodeticHeight(
              A.attributes.position.values,
              y,
              c
            )),
          l.defined(o._offsetAttribute))
        ) {
          const t = A.attributes.position.values.length,
            i = new Uint8Array(t / 3),
            r = o._offsetAttribute === e.GeometryOffsetAttribute.NONE ? 0 : 1
          e.arrayFill(i, r),
            (A.attributes.applyOffset = new d.GeometryAttribute({
              componentDatatype: n.ComponentDatatype.UNSIGNED_BYTE,
              componentsPerAttribute: 1,
              values: i
            }))
        }
      }
      const _ = A.attributes,
        E = i.BoundingSphere.fromVertices(_.position.values, void 0, 3)
      return new d.Geometry({
        attributes: _,
        indices: A.indices,
        primitiveType: d.PrimitiveType.LINES,
        boundingSphere: E,
        offsetAttribute: o._offsetAttribute
      })
    }),
    function (e, t) {
      return (
        l.defined(t) && (e = w.unpack(e, t)),
        (e._ellipsoid = r.Ellipsoid.clone(e._ellipsoid)),
        w.createGeometry(e)
      )
    }
  )
})
