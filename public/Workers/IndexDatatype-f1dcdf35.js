define([
  'exports',
  './defaultValue-81eec7ed',
  './RuntimeError-8952249c',
  './ComponentDatatype-a15c9a19',
  './WebGLConstants-508b9636'
], function (e, t, r, n, E) {
  'use strict'
  const N = {
    UNSIGNED_BYTE: E.WebGLConstants.UNSIGNED_BYTE,
    UNSIGNED_SHORT: E.WebGLConstants.UNSIGNED_SHORT,
    UNSIGNED_INT: E.WebGLConstants.UNSIGNED_INT,
    getSizeInBytes: function (e) {
      switch (e) {
        case N.UNSIGNED_BYTE:
          return Uint8Array.BYTES_PER_ELEMENT
        case N.UNSIGNED_SHORT:
          return Uint16Array.BYTES_PER_ELEMENT
        case N.UNSIGNED_INT:
          return Uint32Array.BYTES_PER_ELEMENT
      }
    },
    fromSizeInBytes: function (e) {
      switch (e) {
        case 2:
          return N.UNSIGNED_SHORT
        case 4:
          return N.UNSIGNED_INT
        case 1:
          return N.UNSIGNED_BYTE
      }
    },
    validate: function (e) {
      return (
        t.defined(e) &&
        (e === N.UNSIGNED_BYTE ||
          e === N.UNSIGNED_SHORT ||
          e === N.UNSIGNED_INT)
      )
    },
    createTypedArray: function (e, t) {
      return e >= n.CesiumMath.SIXTY_FOUR_KILOBYTES
        ? new Uint32Array(t)
        : new Uint16Array(t)
    },
    createTypedArrayFromArrayBuffer: function (e, t, r, E) {
      return e >= n.CesiumMath.SIXTY_FOUR_KILOBYTES
        ? new Uint32Array(t, r, E)
        : new Uint16Array(t, r, E)
    }
  }
  var a = Object.freeze(N)
  e.IndexDatatype = a
})
