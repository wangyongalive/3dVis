define([
  'exports',
  './ArcType-fc72c06c',
  './arrayRemoveDuplicates-dc2f4046',
  './Matrix2-47e98d76',
  './ComponentDatatype-a15c9a19',
  './defaultValue-81eec7ed',
  './EllipsoidRhumbLine-6145377b',
  './GeometryAttribute-64b853f6',
  './GeometryAttributes-32b29525',
  './GeometryPipeline-7ffd77ba',
  './IndexDatatype-f1dcdf35',
  './PolygonPipeline-32809f7a',
  './Transforms-08771371'
], function (e, t, n, i, o, r, a, s, c, l, u, h, f) {
  'use strict'
  function p() {
    ;(this._array = []), (this._offset = 0), (this._length = 0)
  }
  Object.defineProperties(p.prototype, {
    length: {
      get: function () {
        return this._length
      }
    }
  }),
    (p.prototype.enqueue = function (e) {
      this._array.push(e), this._length++
    }),
    (p.prototype.dequeue = function () {
      if (0 === this._length) return
      const e = this._array
      let t = this._offset
      const n = e[t]
      return (
        (e[t] = void 0),
        t++,
        t > 10 && 2 * t > e.length && ((this._array = e.slice(t)), (t = 0)),
        (this._offset = t),
        this._length--,
        n
      )
    }),
    (p.prototype.peek = function () {
      if (0 !== this._length) return this._array[this._offset]
    }),
    (p.prototype.contains = function (e) {
      return -1 !== this._array.indexOf(e)
    }),
    (p.prototype.clear = function () {
      this._array.length = this._offset = this._length = 0
    }),
    (p.prototype.sort = function (e) {
      this._offset > 0 &&
        ((this._array = this._array.slice(this._offset)), (this._offset = 0)),
        this._array.sort(e)
    })
  const d = {
      computeHierarchyPackedLength: function (e) {
        let t = 0
        const n = [e]
        for (; n.length > 0; ) {
          const e = n.pop()
          if (!r.defined(e)) continue
          t += 2
          const o = e.positions,
            a = e.holes
          if (
            (r.defined(o) && (t += o.length * i.Cartesian3.packedLength),
            r.defined(a))
          ) {
            const e = a.length
            for (let t = 0; t < e; ++t) n.push(a[t])
          }
        }
        return t
      },
      packPolygonHierarchy: function (e, t, n) {
        const o = [e]
        for (; o.length > 0; ) {
          const e = o.pop()
          if (!r.defined(e)) continue
          const a = e.positions,
            s = e.holes
          if (
            ((t[n++] = r.defined(a) ? a.length : 0),
            (t[n++] = r.defined(s) ? s.length : 0),
            r.defined(a))
          ) {
            const e = a.length
            for (let o = 0; o < e; ++o, n += 3) i.Cartesian3.pack(a[o], t, n)
          }
          if (r.defined(s)) {
            const e = s.length
            for (let t = 0; t < e; ++t) o.push(s[t])
          }
        }
        return n
      },
      unpackPolygonHierarchy: function (e, t) {
        const n = e[t++],
          o = e[t++],
          r = new Array(n),
          a = o > 0 ? new Array(o) : void 0
        for (let o = 0; o < n; ++o, t += i.Cartesian3.packedLength)
          r[o] = i.Cartesian3.unpack(e, t)
        for (let n = 0; n < o; ++n)
          (a[n] = d.unpackPolygonHierarchy(e, t)),
            (t = a[n].startingIndex),
            delete a[n].startingIndex
        return { positions: r, holes: a, startingIndex: t }
      }
    },
    y = new i.Cartesian3()
  function g(e, t, n, o) {
    return (
      i.Cartesian3.subtract(t, e, y),
      i.Cartesian3.multiplyByScalar(y, n / o, y),
      i.Cartesian3.add(e, y, y),
      [y.x, y.y, y.z]
    )
  }
  d.subdivideLineCount = function (e, t, n) {
    const r = i.Cartesian3.distance(e, t) / n,
      a = Math.max(0, Math.ceil(o.CesiumMath.log2(r)))
    return Math.pow(2, a)
  }
  const m = new i.Cartographic(),
    C = new i.Cartographic(),
    b = new i.Cartographic(),
    T = new i.Cartesian3()
  ;(d.subdivideRhumbLineCount = function (e, t, n, i) {
    const r = e.cartesianToCartographic(t, m),
      s = e.cartesianToCartographic(n, C),
      c = new a.EllipsoidRhumbLine(r, s, e).surfaceDistance / i,
      l = Math.max(0, Math.ceil(o.CesiumMath.log2(c)))
    return Math.pow(2, l)
  }),
    (d.subdivideLine = function (e, t, n, o) {
      const a = d.subdivideLineCount(e, t, n),
        s = i.Cartesian3.distance(e, t),
        c = s / a
      r.defined(o) || (o = [])
      const l = o
      l.length = 3 * a
      let u = 0
      for (let n = 0; n < a; n++) {
        const i = g(e, t, n * c, s)
        ;(l[u++] = i[0]), (l[u++] = i[1]), (l[u++] = i[2])
      }
      return l
    }),
    (d.subdivideRhumbLine = function (e, t, n, i, s) {
      const c = e.cartesianToCartographic(t, m),
        l = e.cartesianToCartographic(n, C),
        u = new a.EllipsoidRhumbLine(c, l, e),
        h = u.surfaceDistance / i,
        f = Math.max(0, Math.ceil(o.CesiumMath.log2(h))),
        p = Math.pow(2, f),
        d = u.surfaceDistance / p
      r.defined(s) || (s = [])
      const y = s
      y.length = 3 * p
      let g = 0
      for (let t = 0; t < p; t++) {
        const n = u.interpolateUsingSurfaceDistance(t * d, b),
          i = e.cartographicToCartesian(n, T)
        ;(y[g++] = i.x), (y[g++] = i.y), (y[g++] = i.z)
      }
      return y
    })
  const w = new i.Cartesian3(),
    I = new i.Cartesian3(),
    x = new i.Cartesian3(),
    v = new i.Cartesian3()
  ;(d.scaleToGeodeticHeightExtruded = function (e, t, n, o, a) {
    o = r.defaultValue(o, i.Ellipsoid.WGS84)
    const s = w
    let c = I
    const l = x
    let u = v
    if (
      r.defined(e) &&
      r.defined(e.attributes) &&
      r.defined(e.attributes.position)
    ) {
      const r = e.attributes.position.values,
        h = r.length / 2
      for (let e = 0; e < h; e += 3)
        i.Cartesian3.fromArray(r, e, l),
          o.geodeticSurfaceNormal(l, s),
          (u = o.scaleToGeodeticSurface(l, u)),
          (c = i.Cartesian3.multiplyByScalar(s, n, c)),
          (c = i.Cartesian3.add(u, c, c)),
          (r[e + h] = c.x),
          (r[e + 1 + h] = c.y),
          (r[e + 2 + h] = c.z),
          a && (u = i.Cartesian3.clone(l, u)),
          (c = i.Cartesian3.multiplyByScalar(s, t, c)),
          (c = i.Cartesian3.add(u, c, c)),
          (r[e] = c.x),
          (r[e + 1] = c.y),
          (r[e + 2] = c.z)
    }
    return e
  }),
    (d.polygonOutlinesFromHierarchy = function (e, t, o) {
      const a = [],
        s = new p()
      let c, l, u
      for (s.enqueue(e); 0 !== s.length; ) {
        const e = s.dequeue()
        let h = e.positions
        if (t)
          for (u = h.length, c = 0; c < u; c++)
            o.scaleToGeodeticSurface(h[c], h[c])
        if (
          ((h = n.arrayRemoveDuplicates(h, i.Cartesian3.equalsEpsilon, !0)),
          h.length < 3)
        )
          continue
        const f = e.holes ? e.holes.length : 0
        for (c = 0; c < f; c++) {
          const h = e.holes[c]
          let f = h.positions
          if (t)
            for (u = f.length, l = 0; l < u; ++l)
              o.scaleToGeodeticSurface(f[l], f[l])
          if (
            ((f = n.arrayRemoveDuplicates(f, i.Cartesian3.equalsEpsilon, !0)),
            f.length < 3)
          )
            continue
          a.push(f)
          let p = 0
          for (r.defined(h.holes) && (p = h.holes.length), l = 0; l < p; l++)
            s.enqueue(h.holes[l])
        }
        a.push(h)
      }
      return a
    }),
    (d.polygonsFromHierarchy = function (e, t, o, a) {
      const s = [],
        c = [],
        l = new p()
      for (l.enqueue(e); 0 !== l.length; ) {
        const e = l.dequeue()
        let u = e.positions
        const f = e.holes
        let p, d
        if (o)
          for (d = u.length, p = 0; p < d; p++)
            a.scaleToGeodeticSurface(u[p], u[p])
        if (
          ((u = n.arrayRemoveDuplicates(u, i.Cartesian3.equalsEpsilon, !0)),
          u.length < 3)
        )
          continue
        let y = t(u)
        if (!r.defined(y)) continue
        const g = []
        let m = h.PolygonPipeline.computeWindingOrder2D(y)
        m === h.WindingOrder.CLOCKWISE &&
          (y.reverse(), (u = u.slice().reverse()))
        let C = u.slice()
        const b = r.defined(f) ? f.length : 0,
          T = []
        let w
        for (p = 0; p < b; p++) {
          const e = f[p]
          let s = e.positions
          if (o)
            for (d = s.length, w = 0; w < d; ++w)
              a.scaleToGeodeticSurface(s[w], s[w])
          if (
            ((s = n.arrayRemoveDuplicates(s, i.Cartesian3.equalsEpsilon, !0)),
            s.length < 3)
          )
            continue
          const c = t(s)
          if (!r.defined(c)) continue
          ;(m = h.PolygonPipeline.computeWindingOrder2D(c)),
            m === h.WindingOrder.CLOCKWISE &&
              (c.reverse(), (s = s.slice().reverse())),
            T.push(s),
            g.push(C.length),
            (C = C.concat(s)),
            (y = y.concat(c))
          let u = 0
          for (r.defined(e.holes) && (u = e.holes.length), w = 0; w < u; w++)
            l.enqueue(e.holes[w])
        }
        s.push({ outerRing: u, holes: T }),
          c.push({ positions: C, positions2D: y, holes: g })
      }
      return { hierarchy: s, polygons: c }
    })
  const E = new i.Cartesian2(),
    A = new i.Cartesian3(),
    P = new f.Quaternion(),
    _ = new i.Matrix3()
  ;(d.computeBoundingRectangle = function (e, t, n, o, a) {
    const s = f.Quaternion.fromAxisAngle(e, o, P),
      c = i.Matrix3.fromQuaternion(s, _)
    let l = Number.POSITIVE_INFINITY,
      u = Number.NEGATIVE_INFINITY,
      h = Number.POSITIVE_INFINITY,
      p = Number.NEGATIVE_INFINITY
    const d = n.length
    for (let e = 0; e < d; ++e) {
      const o = i.Cartesian3.clone(n[e], A)
      i.Matrix3.multiplyByVector(c, o, o)
      const a = t(o, E)
      r.defined(a) &&
        ((l = Math.min(l, a.x)),
        (u = Math.max(u, a.x)),
        (h = Math.min(h, a.y)),
        (p = Math.max(p, a.y)))
    }
    return (a.x = l), (a.y = h), (a.width = u - l), (a.height = p - h), a
  }),
    (d.createGeometryFromPositions = function (e, n, i, r, a, c) {
      let u = h.PolygonPipeline.triangulate(n.positions2D, n.holes)
      u.length < 3 && (u = [0, 1, 2])
      const f = n.positions
      if (r) {
        const e = f.length,
          t = new Array(3 * e)
        let n = 0
        for (let i = 0; i < e; i++) {
          const e = f[i]
          ;(t[n++] = e.x), (t[n++] = e.y), (t[n++] = e.z)
        }
        const i = new s.Geometry({
          attributes: {
            position: new s.GeometryAttribute({
              componentDatatype: o.ComponentDatatype.DOUBLE,
              componentsPerAttribute: 3,
              values: t
            })
          },
          indices: u,
          primitiveType: s.PrimitiveType.TRIANGLES
        })
        return a.normal ? l.GeometryPipeline.computeNormal(i) : i
      }
      return c === t.ArcType.GEODESIC
        ? h.PolygonPipeline.computeSubdivision(e, f, u, i)
        : c === t.ArcType.RHUMB
          ? h.PolygonPipeline.computeRhumbLineSubdivision(e, f, u, i)
          : void 0
    })
  const G = [],
    L = new i.Cartesian3(),
    M = new i.Cartesian3()
  ;(d.computeWallGeometry = function (e, n, r, a, l) {
    let h,
      f,
      p,
      y,
      g,
      m = e.length,
      C = 0
    if (a)
      for (f = 3 * m * 2, h = new Array(2 * f), p = 0; p < m; p++)
        (y = e[p]),
          (g = e[(p + 1) % m]),
          (h[C] = h[C + f] = y.x),
          ++C,
          (h[C] = h[C + f] = y.y),
          ++C,
          (h[C] = h[C + f] = y.z),
          ++C,
          (h[C] = h[C + f] = g.x),
          ++C,
          (h[C] = h[C + f] = g.y),
          ++C,
          (h[C] = h[C + f] = g.z),
          ++C
    else {
      const i = o.CesiumMath.chordLength(r, n.maximumRadius)
      let a = 0
      if (l === t.ArcType.GEODESIC)
        for (p = 0; p < m; p++)
          a += d.subdivideLineCount(e[p], e[(p + 1) % m], i)
      else if (l === t.ArcType.RHUMB)
        for (p = 0; p < m; p++)
          a += d.subdivideRhumbLineCount(n, e[p], e[(p + 1) % m], i)
      for (f = 3 * (a + m), h = new Array(2 * f), p = 0; p < m; p++) {
        let o
        ;(y = e[p]),
          (g = e[(p + 1) % m]),
          l === t.ArcType.GEODESIC
            ? (o = d.subdivideLine(y, g, i, G))
            : l === t.ArcType.RHUMB && (o = d.subdivideRhumbLine(n, y, g, i, G))
        const r = o.length
        for (let e = 0; e < r; ++e, ++C) (h[C] = o[e]), (h[C + f] = o[e])
        ;(h[C] = g.x),
          (h[C + f] = g.x),
          ++C,
          (h[C] = g.y),
          (h[C + f] = g.y),
          ++C,
          (h[C] = g.z),
          (h[C + f] = g.z),
          ++C
      }
    }
    m = h.length
    const b = u.IndexDatatype.createTypedArray(m / 3, m - 6 * e.length)
    let T = 0
    for (m /= 6, p = 0; p < m; p++) {
      const e = p,
        t = e + 1,
        n = e + m,
        r = n + 1
      ;(y = i.Cartesian3.fromArray(h, 3 * e, L)),
        (g = i.Cartesian3.fromArray(h, 3 * t, M)),
        i.Cartesian3.equalsEpsilon(
          y,
          g,
          o.CesiumMath.EPSILON10,
          o.CesiumMath.EPSILON10
        ) ||
          ((b[T++] = e),
          (b[T++] = n),
          (b[T++] = t),
          (b[T++] = t),
          (b[T++] = n),
          (b[T++] = r))
    }
    return new s.Geometry({
      attributes: new c.GeometryAttributes({
        position: new s.GeometryAttribute({
          componentDatatype: o.ComponentDatatype.DOUBLE,
          componentsPerAttribute: 3,
          values: h
        })
      }),
      indices: b,
      primitiveType: s.PrimitiveType.TRIANGLES
    })
  }),
    (e.PolygonGeometryLibrary = d)
})
