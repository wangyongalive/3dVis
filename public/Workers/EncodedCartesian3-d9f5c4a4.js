define([
  'exports',
  './Matrix2-47e98d76',
  './RuntimeError-8952249c',
  './defaultValue-81eec7ed'
], function (e, n, o, i) {
  'use strict'
  function t() {
    ;(this.high = n.Cartesian3.clone(n.Cartesian3.ZERO)),
      (this.low = n.Cartesian3.clone(n.Cartesian3.ZERO))
  }
  t.encode = function (e, n) {
    let o
    return (
      i.defined(n) || (n = { high: 0, low: 0 }),
      e >= 0
        ? ((o = 65536 * Math.floor(e / 65536)), (n.high = o), (n.low = e - o))
        : ((o = 65536 * Math.floor(-e / 65536)),
          (n.high = -o),
          (n.low = e + o)),
      n
    )
  }
  const h = { high: 0, low: 0 }
  t.fromCartesian = function (e, n) {
    i.defined(n) || (n = new t())
    const o = n.high,
      r = n.low
    return (
      t.encode(e.x, h),
      (o.x = h.high),
      (r.x = h.low),
      t.encode(e.y, h),
      (o.y = h.high),
      (r.y = h.low),
      t.encode(e.z, h),
      (o.z = h.high),
      (r.z = h.low),
      n
    )
  }
  const r = new t()
  ;(t.writeElements = function (e, n, o) {
    t.fromCartesian(e, r)
    const i = r.high,
      h = r.low
    ;(n[o] = i.x),
      (n[o + 1] = i.y),
      (n[o + 2] = i.z),
      (n[o + 3] = h.x),
      (n[o + 4] = h.y),
      (n[o + 5] = h.z)
  }),
    (e.EncodedCartesian3 = t)
})
