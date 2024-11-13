define([
  './arrayRemoveDuplicates-dc2f4046',
  './BoundingRectangle-c745bb9d',
  './Transforms-08771371',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './CoplanarPolygonGeometryLibrary-42a6708e',
  './defaultValue-81eec7ed',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './GeometryInstance-4fbf16ba',
  './GeometryPipeline-7ffd77ba',
  './IndexDatatype-f1dcdf35',
  './PolygonGeometryLibrary-3e37a9d7',
  './PolygonPipeline-32809f7a',
  './VertexFormat-a0b706b0',
  './_commonjsHelpers-3aae1032-26891ab7',
  './combine-3c023bda',
  './WebGLConstants-508b9636',
  './OrientedBoundingBox-89c095b4',
  './EllipsoidTangentPlane-aa2df207',
  './AxisAlignedBoundingBox-8b0fdc16',
  './IntersectionTests-bc78300e',
  './Plane-3f01019d',
  './AttributeCompression-80665726',
  './EncodedCartesian3-d9f5c4a4',
  './ArcType-fc72c06c',
  './EllipsoidRhumbLine-6145377b'
], function (
  e,
  t,
  n,
  o,
  a,
  r,
  i,
  s,
  l,
  c,
  p,
  y,
  u,
  m,
  d,
  g,
  b,
  f,
  h,
  x,
  C,
  P,
  A,
  w,
  F,
  G,
  L,
  E
) {
  'use strict'
  const v = new o.Cartesian3(),
    T = new t.BoundingRectangle(),
    D = new o.Cartesian2(),
    _ = new o.Cartesian2(),
    V = new o.Cartesian3(),
    k = new o.Cartesian3(),
    R = new o.Cartesian3(),
    I = new o.Cartesian3(),
    M = new o.Cartesian3(),
    B = new o.Cartesian3(),
    H = new n.Quaternion(),
    O = new o.Matrix3(),
    z = new o.Matrix3(),
    S = new o.Cartesian3()
  function N(e, t, a, i, s, p, y, m) {
    const g = e.positions
    let b = d.PolygonPipeline.triangulate(e.positions2D, e.holes)
    b.length < 3 && (b = [0, 1, 2])
    const f = u.IndexDatatype.createTypedArray(g.length, b.length)
    f.set(b)
    let h = O
    if (0 !== i) {
      let e = n.Quaternion.fromAxisAngle(p, i, H)
      if (((h = o.Matrix3.fromQuaternion(e, h)), t.tangent || t.bitangent)) {
        e = n.Quaternion.fromAxisAngle(p, -i, H)
        const a = o.Matrix3.fromQuaternion(e, z)
        ;(y = o.Cartesian3.normalize(o.Matrix3.multiplyByVector(a, y, y), y)),
          t.bitangent &&
            (m = o.Cartesian3.normalize(o.Cartesian3.cross(p, y, m), m))
      }
    } else h = o.Matrix3.clone(o.Matrix3.IDENTITY, h)
    const x = _
    t.st && ((x.x = a.x), (x.y = a.y))
    const C = g.length,
      P = 3 * C,
      A = new Float64Array(P),
      w = t.normal ? new Float32Array(P) : void 0,
      F = t.tangent ? new Float32Array(P) : void 0,
      G = t.bitangent ? new Float32Array(P) : void 0,
      L = t.st ? new Float32Array(2 * C) : void 0
    let E = 0,
      T = 0,
      V = 0,
      k = 0,
      R = 0
    for (let e = 0; e < C; e++) {
      const n = g[e]
      if (((A[E++] = n.x), (A[E++] = n.y), (A[E++] = n.z), t.st)) {
        const e = s(o.Matrix3.multiplyByVector(h, n, v), D)
        o.Cartesian2.subtract(e, x, e)
        const t = r.CesiumMath.clamp(e.x / a.width, 0, 1),
          i = r.CesiumMath.clamp(e.y / a.height, 0, 1)
        ;(L[R++] = t), (L[R++] = i)
      }
      t.normal && ((w[T++] = p.x), (w[T++] = p.y), (w[T++] = p.z)),
        t.tangent && ((F[k++] = y.x), (F[k++] = y.y), (F[k++] = y.z)),
        t.bitangent && ((G[V++] = m.x), (G[V++] = m.y), (G[V++] = m.z))
    }
    const I = new c.GeometryAttributes()
    return (
      t.position &&
        (I.position = new l.GeometryAttribute({
          componentDatatype: r.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: A
        })),
      t.normal &&
        (I.normal = new l.GeometryAttribute({
          componentDatatype: r.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: w
        })),
      t.tangent &&
        (I.tangent = new l.GeometryAttribute({
          componentDatatype: r.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: F
        })),
      t.bitangent &&
        (I.bitangent = new l.GeometryAttribute({
          componentDatatype: r.ComponentDatatype.FLOAT,
          componentsPerAttribute: 3,
          values: G
        })),
      t.st &&
        (I.st = new l.GeometryAttribute({
          componentDatatype: r.ComponentDatatype.FLOAT,
          componentsPerAttribute: 2,
          values: L
        })),
      new l.Geometry({
        attributes: I,
        indices: f,
        primitiveType: l.PrimitiveType.TRIANGLES
      })
    )
  }
  function Q(e) {
    const t = (e = s.defaultValue(e, s.defaultValue.EMPTY_OBJECT))
        .polygonHierarchy,
      n = s.defaultValue(e.vertexFormat, g.VertexFormat.DEFAULT)
    ;(this._vertexFormat = g.VertexFormat.clone(n)),
      (this._polygonHierarchy = t),
      (this._stRotation = s.defaultValue(e.stRotation, 0)),
      (this._ellipsoid = o.Ellipsoid.clone(
        s.defaultValue(e.ellipsoid, o.Ellipsoid.WGS84)
      )),
      (this._workerName = 'createCoplanarPolygonGeometry'),
      (this.packedLength =
        m.PolygonGeometryLibrary.computeHierarchyPackedLength(t) +
        g.VertexFormat.packedLength +
        o.Ellipsoid.packedLength +
        2)
  }
  ;(Q.fromPositions = function (e) {
    return new Q({
      polygonHierarchy: {
        positions: (e = s.defaultValue(e, s.defaultValue.EMPTY_OBJECT))
          .positions
      },
      vertexFormat: e.vertexFormat,
      stRotation: e.stRotation,
      ellipsoid: e.ellipsoid
    })
  }),
    (Q.pack = function (e, t, n) {
      return (
        (n = s.defaultValue(n, 0)),
        (n = m.PolygonGeometryLibrary.packPolygonHierarchy(
          e._polygonHierarchy,
          t,
          n
        )),
        o.Ellipsoid.pack(e._ellipsoid, t, n),
        (n += o.Ellipsoid.packedLength),
        g.VertexFormat.pack(e._vertexFormat, t, n),
        (n += g.VertexFormat.packedLength),
        (t[n++] = e._stRotation),
        (t[n] = e.packedLength),
        t
      )
    })
  const j = o.Ellipsoid.clone(o.Ellipsoid.UNIT_SPHERE),
    U = new g.VertexFormat(),
    Y = { polygonHierarchy: {} }
  return (
    (Q.unpack = function (e, t, n) {
      t = s.defaultValue(t, 0)
      const a = m.PolygonGeometryLibrary.unpackPolygonHierarchy(e, t)
      ;(t = a.startingIndex), delete a.startingIndex
      const r = o.Ellipsoid.unpack(e, t, j)
      t += o.Ellipsoid.packedLength
      const i = g.VertexFormat.unpack(e, t, U)
      t += g.VertexFormat.packedLength
      const l = e[t++],
        c = e[t]
      return (
        s.defined(n) || (n = new Q(Y)),
        (n._polygonHierarchy = a),
        (n._ellipsoid = o.Ellipsoid.clone(r, n._ellipsoid)),
        (n._vertexFormat = g.VertexFormat.clone(i, n._vertexFormat)),
        (n._stRotation = l),
        (n.packedLength = c),
        n
      )
    }),
    (Q.createGeometry = function (t) {
      const a = t._vertexFormat,
        s = t._polygonHierarchy,
        c = t._stRotation
      let d = s.positions
      if (
        ((d = e.arrayRemoveDuplicates(d, o.Cartesian3.equalsEpsilon, !0)),
        d.length < 3)
      )
        return
      let g = V,
        b = k,
        f = R,
        h = M
      const x = B
      if (
        !i.CoplanarPolygonGeometryLibrary.computeProjectTo2DArguments(
          d,
          I,
          h,
          x
        )
      )
        return
      if (
        ((g = o.Cartesian3.cross(h, x, g)),
        (g = o.Cartesian3.normalize(g, g)),
        !o.Cartesian3.equalsEpsilon(
          I,
          o.Cartesian3.ZERO,
          r.CesiumMath.EPSILON6
        ))
      ) {
        const e = t._ellipsoid.geodeticSurfaceNormal(I, S)
        o.Cartesian3.dot(g, e) < 0 &&
          ((g = o.Cartesian3.negate(g, g)), (h = o.Cartesian3.negate(h, h)))
      }
      const C =
          i.CoplanarPolygonGeometryLibrary.createProjectPointsTo2DFunction(
            I,
            h,
            x
          ),
        P = i.CoplanarPolygonGeometryLibrary.createProjectPointTo2DFunction(
          I,
          h,
          x
        )
      a.tangent && (b = o.Cartesian3.clone(h, b)),
        a.bitangent && (f = o.Cartesian3.clone(x, f))
      const A = m.PolygonGeometryLibrary.polygonsFromHierarchy(s, C, !1),
        w = A.hierarchy,
        F = A.polygons
      if (0 === w.length) return
      d = w[0].outerRing
      const G = n.BoundingSphere.fromPoints(d),
        L = m.PolygonGeometryLibrary.computeBoundingRectangle(g, P, d, c, T),
        E = []
      for (let e = 0; e < F.length; e++) {
        const t = new p.GeometryInstance({
          geometry: N(F[e], a, L, c, P, g, b, f)
        })
        E.push(t)
      }
      const v = y.GeometryPipeline.combineInstances(E)[0]
      ;(v.attributes.position.values = new Float64Array(
        v.attributes.position.values
      )),
        (v.indices = u.IndexDatatype.createTypedArray(
          v.attributes.position.values.length / 3,
          v.indices
        ))
      const D = v.attributes
      return (
        a.position || delete D.position,
        new l.Geometry({
          attributes: D,
          indices: v.indices,
          primitiveType: v.primitiveType,
          boundingSphere: G
        })
      )
    }),
    function (e, t) {
      return s.defined(t) && (e = Q.unpack(e, t)), Q.createGeometry(e)
    }
  )
})
