define(['exports', './defaultValue-81eec7ed'], function (e, t) {
  'use strict'
  e.combine = function e(n, o, r) {
    r = t.defaultValue(r, !1)
    const f = {},
      i = t.defined(n),
      a = t.defined(o)
    let c, d, s
    if (i)
      for (c in n)
        n.hasOwnProperty(c) &&
          ((d = n[c]),
          a && r && 'object' == typeof d && o.hasOwnProperty(c)
            ? ((s = o[c]), (f[c] = 'object' == typeof s ? e(d, s, r) : d))
            : (f[c] = d))
    if (a)
      for (c in o)
        o.hasOwnProperty(c) && !f.hasOwnProperty(c) && ((s = o[c]), (f[c] = s))
    return f
  }
})
