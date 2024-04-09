define([
  'exports',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './defaultValue-81eec7ed',
  './ComponentDatatype-a15c9a19'
], function (n, e, a, t, r) {
  'use strict'
  function i(n, a) {
    ;(this.normal = e.Cartesian3.clone(n)), (this.distance = a)
  }
  i.fromPointNormal = function (n, a, r) {
    const s = -e.Cartesian3.dot(a, n)
    return t.defined(r)
      ? (e.Cartesian3.clone(a, r.normal), (r.distance = s), r)
      : new i(a, s)
  }
  const s = new e.Cartesian3()
  ;(i.fromCartesian4 = function (n, a) {
    const r = e.Cartesian3.fromCartesian4(n, s),
      o = n.w
    return t.defined(a)
      ? (e.Cartesian3.clone(r, a.normal), (a.distance = o), a)
      : new i(r, o)
  }),
    (i.getPointDistance = function (n, a) {
      return e.Cartesian3.dot(n.normal, a) + n.distance
    })
  const o = new e.Cartesian3()
  i.projectPointOntoPlane = function (n, a, r) {
    t.defined(r) || (r = new e.Cartesian3())
    const s = i.getPointDistance(n, a),
      c = e.Cartesian3.multiplyByScalar(n.normal, s, o)
    return e.Cartesian3.subtract(a, c, r)
  }
  const c = new e.Matrix4(),
    l = new e.Cartesian4(),
    d = new e.Cartesian3()
  ;(i.transform = function (n, a, t) {
    const r = n.normal,
      s = n.distance,
      o = e.Matrix4.inverseTranspose(a, c)
    let C = e.Cartesian4.fromElements(r.x, r.y, r.z, s, l)
    C = e.Matrix4.multiplyByVector(o, C, C)
    const u = e.Cartesian3.fromCartesian4(C, d)
    return (
      (C = e.Cartesian4.divideByScalar(C, e.Cartesian3.magnitude(u), C)),
      i.fromCartesian4(C, t)
    )
  }),
    (i.clone = function (n, a) {
      return t.defined(a)
        ? (e.Cartesian3.clone(n.normal, a.normal), (a.distance = n.distance), a)
        : new i(n.normal, n.distance)
    }),
    (i.equals = function (n, a) {
      return (
        n.distance === a.distance && e.Cartesian3.equals(n.normal, a.normal)
      )
    }),
    (i.ORIGIN_XY_PLANE = Object.freeze(new i(e.Cartesian3.UNIT_Z, 0))),
    (i.ORIGIN_YZ_PLANE = Object.freeze(new i(e.Cartesian3.UNIT_X, 0))),
    (i.ORIGIN_ZX_PLANE = Object.freeze(new i(e.Cartesian3.UNIT_Y, 0))),
    (n.Plane = i)
})
