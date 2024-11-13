define([
  'exports',
  './Matrix2-47e98d76',
  './defaultValue-81eec7ed',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19'
], function (t, e, i, o, a) {
  'use strict'
  function r(t) {
    ;(this._ellipsoid = i.defaultValue(t, e.Ellipsoid.WGS84)),
      (this._semimajorAxis = this._ellipsoid.maximumRadius),
      (this._oneOverSemimajorAxis = 1 / this._semimajorAxis)
  }
  Object.defineProperties(r.prototype, {
    ellipsoid: {
      get: function () {
        return this._ellipsoid
      }
    }
  }),
    (r.mercatorAngleToGeodeticLatitude = function (t) {
      return a.CesiumMath.PI_OVER_TWO - 2 * Math.atan(Math.exp(-t))
    }),
    (r.geodeticLatitudeToMercatorAngle = function (t) {
      t > r.MaximumLatitude
        ? (t = r.MaximumLatitude)
        : t < -r.MaximumLatitude && (t = -r.MaximumLatitude)
      const e = Math.sin(t)
      return 0.5 * Math.log((1 + e) / (1 - e))
    }),
    (r.MaximumLatitude = r.mercatorAngleToGeodeticLatitude(Math.PI)),
    (r.prototype.project = function (t, o) {
      const a = this._semimajorAxis,
        n = t.longitude * a,
        u = r.geodeticLatitudeToMercatorAngle(t.latitude) * a,
        d = t.height
      return i.defined(o)
        ? ((o.x = n), (o.y = u), (o.z = d), o)
        : new e.Cartesian3(n, u, d)
    }),
    (r.prototype.unproject = function (t, o) {
      const a = this._oneOverSemimajorAxis,
        n = t.x * a,
        u = r.mercatorAngleToGeodeticLatitude(t.y * a),
        d = t.z
      return i.defined(o)
        ? ((o.longitude = n), (o.latitude = u), (o.height = d), o)
        : new e.Cartographic(n, u, d)
    }),
    (t.WebMercatorProjection = r)
})
