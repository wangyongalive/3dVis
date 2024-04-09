define(['exports', './ComponentDatatype-a15c9a19'], function (t, n) {
  'use strict'
  const o = {
    computePositions: function (t, o, e, s, r) {
      const a = 0.5 * t,
        c = -a,
        i = s + s,
        u = new Float64Array(3 * (r ? 2 * i : i))
      let y,
        f = 0,
        m = 0
      const p = r ? 3 * i : 0,
        h = r ? 3 * (i + s) : 3 * s
      for (y = 0; y < s; y++) {
        const t = (y / s) * n.CesiumMath.TWO_PI,
          i = Math.cos(t),
          l = Math.sin(t),
          C = i * e,
          M = l * e,
          d = i * o,
          P = l * o
        ;(u[m + p] = C),
          (u[m + p + 1] = M),
          (u[m + p + 2] = c),
          (u[m + h] = d),
          (u[m + h + 1] = P),
          (u[m + h + 2] = a),
          (m += 3),
          r &&
            ((u[f++] = C),
            (u[f++] = M),
            (u[f++] = c),
            (u[f++] = d),
            (u[f++] = P),
            (u[f++] = a))
      }
      return u
    }
  }
  t.CylinderGeometryLibrary = o
})
