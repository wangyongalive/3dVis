define([
  'exports',
  './RuntimeError-8952249c',
  './defaultValue-81eec7ed',
  './ComponentDatatype-a15c9a19'
], function (e, n, t, i) {
  'use strict'
  const d = i.CesiumMath.EPSILON10
  e.arrayRemoveDuplicates = function (e, n, i, u) {
    if (!t.defined(e)) return
    i = t.defaultValue(i, !1)
    const f = t.defined(u),
      r = e.length
    if (r < 2) return e
    let s,
      a,
      c,
      l = e[0],
      o = 0,
      p = -1
    for (s = 1; s < r; ++s)
      (a = e[s]),
        n(l, a, d)
          ? (t.defined(c) || ((c = e.slice(0, s)), (o = s - 1), (p = 0)),
            f && u.push(s))
          : (t.defined(c) && (c.push(a), (o = s), f && (p = u.length)), (l = a))
    return (
      i &&
        n(e[0], e[r - 1], d) &&
        (f && (t.defined(c) ? u.splice(p, 0, o) : u.push(r - 1)),
        t.defined(c) ? (c.length -= 1) : (c = e.slice(0, -1))),
      t.defined(c) ? c : e
    )
  }
})
