define([
  'exports',
  './RuntimeError-8952249c',
  './defaultValue-81eec7ed'
], function (e, t, r) {
  'use strict'
  var a = Object.freeze({ NONE: 0, TOP: 1, ALL: 2 })
  ;(e.GeometryOffsetAttribute = a),
    (e.arrayFill = function (e, t, a, f) {
      if ('function' == typeof e.fill) return e.fill(t, a, f)
      const n = e.length >>> 0,
        l = r.defaultValue(a, 0)
      let u = l < 0 ? Math.max(n + l, 0) : Math.min(l, n)
      const i = r.defaultValue(f, n),
        o = i < 0 ? Math.max(n + i, 0) : Math.min(i, n)
      for (; u < o; ) (e[u] = t), u++
      return e
    })
})
