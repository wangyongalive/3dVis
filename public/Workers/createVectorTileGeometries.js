define([
  './Transforms-08771371',
  './BoxGeometry-fc9234ab',
  './Matrix2-47e98d76',
  './Color-30e6999c',
  './CylinderGeometry-856b24ab',
  './defaultValue-81eec7ed',
  './EllipsoidGeometry-2873b6fd',
  './IndexDatatype-f1dcdf35',
  './createTaskProcessorWorker',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './WebGLConstants-508b9636',
  './_commonjsHelpers-3aae1032-26891ab7',
  './combine-3c023bda',
  './GeometryOffsetAttribute-8c5e10db',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './VertexFormat-a0b706b0',
  './CylinderGeometryLibrary-76cda53e'
], function (e, t, n, r, a, i, o, s, c, d, l, f, u, h, b, p, y, x, g) {
  'use strict'
  function m(e) {
    ;(this.offset = e.offset),
      (this.count = e.count),
      (this.color = e.color),
      (this.batchIds = e.batchIds)
  }
  const C = new n.Cartesian3(),
    I = n.Matrix4.packedLength + n.Cartesian3.packedLength,
    k = n.Matrix4.packedLength + 2,
    M = n.Matrix4.packedLength + n.Cartesian3.packedLength,
    B = n.Cartesian3.packedLength + 1,
    w = { modelMatrix: new n.Matrix4(), boundingVolume: new e.BoundingSphere() }
  function A(e, t) {
    let r = t * I
    const a = n.Cartesian3.unpack(e, r, C)
    r += n.Cartesian3.packedLength
    const i = n.Matrix4.unpack(e, r, w.modelMatrix)
    n.Matrix4.multiplyByScale(i, a, i)
    const o = w.boundingVolume
    return (
      n.Cartesian3.clone(n.Cartesian3.ZERO, o.center),
      (o.radius = Math.sqrt(3)),
      w
    )
  }
  function O(e, t) {
    let r = t * k
    const a = e[r++],
      i = e[r++],
      o = n.Cartesian3.fromElements(a, a, i, C),
      s = n.Matrix4.unpack(e, r, w.modelMatrix)
    n.Matrix4.multiplyByScale(s, o, s)
    const c = w.boundingVolume
    return (
      n.Cartesian3.clone(n.Cartesian3.ZERO, c.center),
      (c.radius = Math.sqrt(2)),
      w
    )
  }
  function L(e, t) {
    let r = t * M
    const a = n.Cartesian3.unpack(e, r, C)
    r += n.Cartesian3.packedLength
    const i = n.Matrix4.unpack(e, r, w.modelMatrix)
    n.Matrix4.multiplyByScale(i, a, i)
    const o = w.boundingVolume
    return n.Cartesian3.clone(n.Cartesian3.ZERO, o.center), (o.radius = 1), w
  }
  function v(e, t) {
    let r = t * B
    const a = e[r++],
      i = n.Cartesian3.unpack(e, r, C),
      o = n.Matrix4.fromTranslation(i, w.modelMatrix)
    n.Matrix4.multiplyByUniformScale(o, a, o)
    const s = w.boundingVolume
    return n.Cartesian3.clone(n.Cartesian3.ZERO, s.center), (s.radius = 1), w
  }
  const E = new n.Cartesian3()
  function U(t, a, o, s, c) {
    if (!i.defined(a)) return
    const d = o.length,
      l = s.attributes.position.values,
      f = s.indices,
      u = t.positions,
      h = t.vertexBatchIds,
      b = t.indices,
      p = t.batchIds,
      y = t.batchTableColors,
      x = t.batchedIndices,
      g = t.indexOffsets,
      C = t.indexCounts,
      I = t.boundingVolumes,
      k = t.modelMatrix,
      M = t.center
    let B = t.positionOffset,
      w = t.batchIdIndex,
      A = t.indexOffset
    const O = t.batchedIndicesOffset
    for (let t = 0; t < d; ++t) {
      const i = c(a, t),
        s = i.modelMatrix
      n.Matrix4.multiply(k, s, s)
      const d = o[t],
        L = l.length
      for (let e = 0; e < L; e += 3) {
        const t = n.Cartesian3.unpack(l, e, E)
        n.Matrix4.multiplyByPoint(s, t, t),
          n.Cartesian3.subtract(t, M, t),
          n.Cartesian3.pack(t, u, 3 * B + e),
          (h[w++] = d)
      }
      const v = f.length
      for (let e = 0; e < v; ++e) b[A + e] = f[e] + B
      const U = t + O
      ;(x[U] = new m({
        offset: A,
        count: v,
        color: r.Color.fromRgba(y[d]),
        batchIds: [d]
      })),
        (p[U] = d),
        (g[U] = A),
        (C[U] = v),
        (I[U] = e.BoundingSphere.transform(i.boundingVolume, s)),
        (B += L / 3),
        (A += v)
    }
    ;(t.positionOffset = B),
      (t.batchIdIndex = w),
      (t.indexOffset = A),
      (t.batchedIndicesOffset += d)
  }
  const G = new n.Cartesian3(),
    S = new n.Matrix4()
  function V(t, n, a) {
    const i = a.length,
      o =
        2 +
        i * e.BoundingSphere.packedLength +
        1 +
        (function (e) {
          const t = e.length
          let n = 0
          for (let a = 0; a < t; ++a)
            n += r.Color.packedLength + 3 + e[a].batchIds.length
          return n
        })(n),
      s = new Float64Array(o)
    let c = 0
    ;(s[c++] = t), (s[c++] = i)
    for (let t = 0; t < i; ++t)
      e.BoundingSphere.pack(a[t], s, c), (c += e.BoundingSphere.packedLength)
    const d = n.length
    s[c++] = d
    for (let e = 0; e < d; ++e) {
      const t = n[e]
      r.Color.pack(t.color, s, c),
        (c += r.Color.packedLength),
        (s[c++] = t.offset),
        (s[c++] = t.count)
      const a = t.batchIds,
        i = a.length
      s[c++] = i
      for (let e = 0; e < i; ++e) s[c++] = a[e]
    }
    return s
  }
  return c(function (e, r) {
    const c = i.defined(e.boxes) ? new Float32Array(e.boxes) : void 0,
      d = i.defined(e.boxBatchIds) ? new Uint16Array(e.boxBatchIds) : void 0,
      l = i.defined(e.cylinders) ? new Float32Array(e.cylinders) : void 0,
      f = i.defined(e.cylinderBatchIds)
        ? new Uint16Array(e.cylinderBatchIds)
        : void 0,
      u = i.defined(e.ellipsoids) ? new Float32Array(e.ellipsoids) : void 0,
      h = i.defined(e.ellipsoidBatchIds)
        ? new Uint16Array(e.ellipsoidBatchIds)
        : void 0,
      b = i.defined(e.spheres) ? new Float32Array(e.spheres) : void 0,
      p = i.defined(e.sphereBatchIds)
        ? new Uint16Array(e.sphereBatchIds)
        : void 0,
      y = i.defined(c) ? d.length : 0,
      x = i.defined(l) ? f.length : 0,
      g = i.defined(u) ? h.length : 0,
      m = i.defined(b) ? p.length : 0,
      C = t.BoxGeometry.getUnitBox(),
      I = a.CylinderGeometry.getUnitCylinder(),
      k = o.EllipsoidGeometry.getUnitEllipsoid(),
      M = C.attributes.position.values,
      B = I.attributes.position.values,
      w = k.attributes.position.values
    let E = M.length * y
    ;(E += B.length * x), (E += w.length * (g + m))
    const T = C.indices,
      F = I.indices,
      R = k.indices
    let Z = T.length * y
    ;(Z += F.length * x), (Z += R.length * (g + m))
    const D = new Float32Array(E),
      P = new Uint16Array(E / 3),
      _ = s.IndexDatatype.createTypedArray(E / 3, Z),
      q = y + x + g + m,
      W = new Uint16Array(q),
      j = new Array(q),
      H = new Uint32Array(q),
      N = new Uint32Array(q),
      Y = new Array(q)
    !(function (e) {
      const t = new Float64Array(e)
      let r = 0
      n.Cartesian3.unpack(t, r, G),
        (r += n.Cartesian3.packedLength),
        n.Matrix4.unpack(t, r, S)
    })(e.packedBuffer)
    const z = {
      batchTableColors: new Uint32Array(e.batchTableColors),
      positions: D,
      vertexBatchIds: P,
      indices: _,
      batchIds: W,
      batchedIndices: j,
      indexOffsets: H,
      indexCounts: N,
      boundingVolumes: Y,
      positionOffset: 0,
      batchIdIndex: 0,
      indexOffset: 0,
      batchedIndicesOffset: 0,
      modelMatrix: S,
      center: G
    }
    U(z, c, d, C, A), U(z, l, f, I, O), U(z, u, h, k, L), U(z, b, p, k, v)
    const J = V(_.BYTES_PER_ELEMENT, j, Y)
    return (
      r.push(D.buffer, P.buffer, _.buffer),
      r.push(W.buffer, H.buffer, N.buffer),
      r.push(J.buffer),
      {
        positions: D.buffer,
        vertexBatchIds: P.buffer,
        indices: _.buffer,
        indexOffsets: H.buffer,
        indexCounts: N.buffer,
        batchIds: W.buffer,
        packedBuffer: J.buffer
      }
    )
  })
})
