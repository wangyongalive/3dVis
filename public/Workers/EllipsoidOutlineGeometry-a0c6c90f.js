define([
  'exports',
  './GeometryOffsetAttribute-8c5e10db',
  './Transforms-08771371',
  './Matrix2-47e98d76',
  './ComponentDatatype-a15c9a19',
  './defaultValue-81eec7ed',
  './RuntimeError-8952249c',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './IndexDatatype-f1dcdf35'
], function (t, i, e, n, a, o, r, s, u, m) {
  'use strict'
  const f = new n.Cartesian3(1, 1, 1),
    l = Math.cos,
    c = Math.sin
  function d(t) {
    t = o.defaultValue(t, o.defaultValue.EMPTY_OBJECT)
    const i = o.defaultValue(t.radii, f),
      e = o.defaultValue(t.innerRadii, i),
      r = o.defaultValue(t.minimumClock, 0),
      s = o.defaultValue(t.maximumClock, a.CesiumMath.TWO_PI),
      u = o.defaultValue(t.minimumCone, 0),
      m = o.defaultValue(t.maximumCone, a.CesiumMath.PI),
      l = Math.round(o.defaultValue(t.stackPartitions, 10)),
      c = Math.round(o.defaultValue(t.slicePartitions, 8)),
      d = Math.round(o.defaultValue(t.subdivisions, 128))
    ;(this._radii = n.Cartesian3.clone(i)),
      (this._innerRadii = n.Cartesian3.clone(e)),
      (this._minimumClock = r),
      (this._maximumClock = s),
      (this._minimumCone = u),
      (this._maximumCone = m),
      (this._stackPartitions = l),
      (this._slicePartitions = c),
      (this._subdivisions = d),
      (this._offsetAttribute = t.offsetAttribute),
      (this._workerName = 'createEllipsoidOutlineGeometry')
  }
  ;(d.packedLength = 2 * n.Cartesian3.packedLength + 8),
    (d.pack = function (t, i, e) {
      return (
        (e = o.defaultValue(e, 0)),
        n.Cartesian3.pack(t._radii, i, e),
        (e += n.Cartesian3.packedLength),
        n.Cartesian3.pack(t._innerRadii, i, e),
        (e += n.Cartesian3.packedLength),
        (i[e++] = t._minimumClock),
        (i[e++] = t._maximumClock),
        (i[e++] = t._minimumCone),
        (i[e++] = t._maximumCone),
        (i[e++] = t._stackPartitions),
        (i[e++] = t._slicePartitions),
        (i[e++] = t._subdivisions),
        (i[e] = o.defaultValue(t._offsetAttribute, -1)),
        i
      )
    })
  const C = new n.Cartesian3(),
    _ = new n.Cartesian3(),
    p = {
      radii: C,
      innerRadii: _,
      minimumClock: void 0,
      maximumClock: void 0,
      minimumCone: void 0,
      maximumCone: void 0,
      stackPartitions: void 0,
      slicePartitions: void 0,
      subdivisions: void 0,
      offsetAttribute: void 0
    }
  ;(d.unpack = function (t, i, e) {
    i = o.defaultValue(i, 0)
    const a = n.Cartesian3.unpack(t, i, C)
    i += n.Cartesian3.packedLength
    const r = n.Cartesian3.unpack(t, i, _)
    i += n.Cartesian3.packedLength
    const s = t[i++],
      u = t[i++],
      m = t[i++],
      f = t[i++],
      l = t[i++],
      c = t[i++],
      h = t[i++],
      y = t[i]
    return o.defined(e)
      ? ((e._radii = n.Cartesian3.clone(a, e._radii)),
        (e._innerRadii = n.Cartesian3.clone(r, e._innerRadii)),
        (e._minimumClock = s),
        (e._maximumClock = u),
        (e._minimumCone = m),
        (e._maximumCone = f),
        (e._stackPartitions = l),
        (e._slicePartitions = c),
        (e._subdivisions = h),
        (e._offsetAttribute = -1 === y ? void 0 : y),
        e)
      : ((p.minimumClock = s),
        (p.maximumClock = u),
        (p.minimumCone = m),
        (p.maximumCone = f),
        (p.stackPartitions = l),
        (p.slicePartitions = c),
        (p.subdivisions = h),
        (p.offsetAttribute = -1 === y ? void 0 : y),
        new d(p))
  }),
    (d.createGeometry = function (t) {
      const r = t._radii
      if (r.x <= 0 || r.y <= 0 || r.z <= 0) return
      const f = t._innerRadii
      if (f.x <= 0 || f.y <= 0 || f.z <= 0) return
      const d = t._minimumClock,
        C = t._maximumClock,
        _ = t._minimumCone,
        p = t._maximumCone,
        h = t._subdivisions,
        y = n.Ellipsoid.fromCartesian3(r)
      let k = t._slicePartitions + 1,
        b = t._stackPartitions + 1
      ;(k = Math.round((k * Math.abs(C - d)) / a.CesiumMath.TWO_PI)),
        (b = Math.round((b * Math.abs(p - _)) / a.CesiumMath.PI)),
        k < 2 && (k = 2),
        b < 2 && (b = 2)
      let x = 0,
        A = 1
      const P = f.x !== r.x || f.y !== r.y || f.z !== r.z
      let v = !1,
        M = !1
      P &&
        ((A = 2),
        _ > 0 && ((v = !0), (x += k)),
        p < Math.PI && ((M = !0), (x += k)))
      const w = h * A * (b + k),
        V = new Float64Array(3 * w),
        g = 2 * (w + x - (k + b) * A),
        E = m.IndexDatatype.createTypedArray(w, g)
      let G,
        O,
        D,
        I,
        T = 0
      const z = new Array(b),
        L = new Array(b)
      for (G = 0; G < b; G++)
        (I = _ + (G * (p - _)) / (b - 1)), (z[G] = c(I)), (L[G] = l(I))
      const R = new Array(h),
        N = new Array(h)
      for (G = 0; G < h; G++)
        (D = d + (G * (C - d)) / (h - 1)), (R[G] = c(D)), (N[G] = l(D))
      for (G = 0; G < b; G++)
        for (O = 0; O < h; O++)
          (V[T++] = r.x * z[G] * N[O]),
            (V[T++] = r.y * z[G] * R[O]),
            (V[T++] = r.z * L[G])
      if (P)
        for (G = 0; G < b; G++)
          for (O = 0; O < h; O++)
            (V[T++] = f.x * z[G] * N[O]),
              (V[T++] = f.y * z[G] * R[O]),
              (V[T++] = f.z * L[G])
      for (z.length = h, L.length = h, G = 0; G < h; G++)
        (I = _ + (G * (p - _)) / (h - 1)), (z[G] = c(I)), (L[G] = l(I))
      for (R.length = k, N.length = k, G = 0; G < k; G++)
        (D = d + (G * (C - d)) / (k - 1)), (R[G] = c(D)), (N[G] = l(D))
      for (G = 0; G < h; G++)
        for (O = 0; O < k; O++)
          (V[T++] = r.x * z[G] * N[O]),
            (V[T++] = r.y * z[G] * R[O]),
            (V[T++] = r.z * L[G])
      if (P)
        for (G = 0; G < h; G++)
          for (O = 0; O < k; O++)
            (V[T++] = f.x * z[G] * N[O]),
              (V[T++] = f.y * z[G] * R[O]),
              (V[T++] = f.z * L[G])
      for (T = 0, G = 0; G < b * A; G++) {
        const t = G * h
        for (O = 0; O < h - 1; O++) (E[T++] = t + O), (E[T++] = t + O + 1)
      }
      let B = b * h * A
      for (G = 0; G < k; G++)
        for (O = 0; O < h - 1; O++)
          (E[T++] = B + G + O * k), (E[T++] = B + G + (O + 1) * k)
      if (P)
        for (B = b * h * A + k * h, G = 0; G < k; G++)
          for (O = 0; O < h - 1; O++)
            (E[T++] = B + G + O * k), (E[T++] = B + G + (O + 1) * k)
      if (P) {
        let t = b * h * A,
          i = t + h * k
        if (v) for (G = 0; G < k; G++) (E[T++] = t + G), (E[T++] = i + G)
        if (M)
          for (t += h * k - k, i += h * k - k, G = 0; G < k; G++)
            (E[T++] = t + G), (E[T++] = i + G)
      }
      const S = new u.GeometryAttributes({
        position: new s.GeometryAttribute({
          componentDatatype: a.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: V
        })
      })
      if (o.defined(t._offsetAttribute)) {
        const e = V.length,
          n = new Uint8Array(e / 3),
          o = t._offsetAttribute === i.GeometryOffsetAttribute.NONE ? 0 : 1
        i.arrayFill(n, o),
          (S.applyOffset = new s.GeometryAttribute({
            componentDatatype: a.ComponentDatatype.UNSIGNED_BYTE,
            componentsPerAttribute: 1,
            values: n
          }))
      }
      return new s.Geometry({
        attributes: S,
        indices: E,
        primitiveType: s.PrimitiveType.LINES,
        boundingSphere: e.BoundingSphere.fromEllipsoid(y),
        offsetAttribute: t._offsetAttribute
      })
    }),
    (t.EllipsoidOutlineGeometry = d)
})