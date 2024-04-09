define([
  './AttributeCompression-80665726',
  './Matrix2-47e98d76',
  './ComponentDatatype-a15c9a19',
  './createTaskProcessorWorker',
  './RuntimeError-8952249c',
  './defaultValue-81eec7ed',
  './WebGLConstants-508b9636'
], function (e, t, a, r, n, o, i) {
  'use strict'
  const s = 32767,
    c = new t.Cartographic(),
    u = new t.Cartesian3(),
    p = new t.Rectangle(),
    l = new t.Ellipsoid(),
    m = { min: void 0, max: void 0 }
  return r(function (r, n) {
    const o = new Uint16Array(r.positions)
    !(function (e) {
      e = new Float64Array(e)
      let a = 0
      ;(m.min = e[a++]),
        (m.max = e[a++]),
        t.Rectangle.unpack(e, a, p),
        (a += t.Rectangle.packedLength),
        t.Ellipsoid.unpack(e, a, l)
    })(r.packedBuffer)
    const i = p,
      f = l,
      d = m.min,
      h = m.max,
      C = o.length / 3,
      g = o.subarray(0, C),
      b = o.subarray(C, 2 * C),
      w = o.subarray(2 * C, 3 * C)
    e.AttributeCompression.zigZagDeltaDecode(g, b, w)
    const k = new Float64Array(o.length)
    for (let e = 0; e < C; ++e) {
      const r = g[e],
        n = b[e],
        o = w[e],
        p = a.CesiumMath.lerp(i.west, i.east, r / s),
        l = a.CesiumMath.lerp(i.south, i.north, n / s),
        m = a.CesiumMath.lerp(d, h, o / s),
        C = t.Cartographic.fromRadians(p, l, m, c),
        y = f.cartographicToCartesian(C, u)
      t.Cartesian3.pack(y, k, 3 * e)
    }
    return n.push(k.buffer), { positions: k.buffer }
  })
})
