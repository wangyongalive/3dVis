define(['exports'], function (e) {
  'use strict'
  var o =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof window
        ? window
        : 'undefined' != typeof global
          ? global
          : 'undefined' != typeof self
            ? self
            : {}
  ;(e.commonjsGlobal = o),
    (e.createCommonjsModule = function (e, o, n) {
      return (
        e(
          (n = {
            path: o,
            exports: {},
            require: function (e, o) {
              return (function () {
                throw new Error(
                  'Dynamic requires are not currently supported by @rollup/plugin-commonjs'
                )
              })(null == o && n.path)
            }
          }),
          n.exports
        ),
        n.exports
      )
    })
})
