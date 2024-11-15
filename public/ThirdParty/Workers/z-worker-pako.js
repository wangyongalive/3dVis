!(function () {
  'use strict'
  const {
      Array: t,
      Object: e,
      Math: n,
      Error: s,
      Uint8Array: a,
      Uint16Array: r,
      Uint32Array: i,
      Int32Array: c,
      DataView: o,
      TextEncoder: l,
      crypto: h,
      postMessage: p
    } = globalThis,
    d = []
  for (let t = 0; 256 > t; t++) {
    let e = t
    for (let t = 0; 8 > t; t++)
      1 & e ? (e = (e >>> 1) ^ 3988292384) : (e >>>= 1)
    d[t] = e
  }
  class u {
    constructor(t) {
      this.crc = t || -1
    }
    append(t) {
      let e = 0 | this.crc
      for (let n = 0, s = 0 | t.length; s > n; n++)
        e = (e >>> 8) ^ d[255 & (e ^ t[n])]
      this.crc = e
    }
    get() {
      return ~this.crc
    }
  }
  const f = {
      concat(t, e) {
        if (0 === t.length || 0 === e.length) return t.concat(e)
        const n = t[t.length - 1],
          s = f.getPartial(n)
        return 32 === s
          ? t.concat(e)
          : f._shiftRight(e, s, 0 | n, t.slice(0, t.length - 1))
      },
      bitLength(t) {
        const e = t.length
        if (0 === e) return 0
        const n = t[e - 1]
        return 32 * (e - 1) + f.getPartial(n)
      },
      clamp(t, e) {
        if (32 * t.length < e) return t
        const s = (t = t.slice(0, n.ceil(e / 32))).length
        return (
          (e &= 31),
          s > 0 &&
            e &&
            (t[s - 1] = f.partial(e, t[s - 1] & (2147483648 >> (e - 1)), 1)),
          t
        )
      },
      partial: (t, e, n) =>
        32 === t ? e : (n ? 0 | e : e << (32 - t)) + 1099511627776 * t,
      getPartial: (t) => n.round(t / 1099511627776) || 32,
      _shiftRight(t, e, n, s) {
        for (void 0 === s && (s = []); e >= 32; e -= 32) s.push(n), (n = 0)
        if (0 === e) return s.concat(t)
        for (let a = 0; a < t.length; a++)
          s.push(n | (t[a] >>> e)), (n = t[a] << (32 - e))
        const a = t.length ? t[t.length - 1] : 0,
          r = f.getPartial(a)
        return s.push(f.partial((e + r) & 31, e + r > 32 ? n : s.pop(), 1)), s
      }
    },
    g = {
      bytes: {
        fromBits(t) {
          const e = f.bitLength(t) / 8,
            n = new a(e)
          let s
          for (let a = 0; e > a; a++)
            0 == (3 & a) && (s = t[a / 4]), (n[a] = s >>> 24), (s <<= 8)
          return n
        },
        toBits(t) {
          const e = []
          let n,
            s = 0
          for (n = 0; n < t.length; n++)
            (s = (s << 8) | t[n]), 3 == (3 & n) && (e.push(s), (s = 0))
          return 3 & n && e.push(f.partial(8 * (3 & n), s)), e
        }
      }
    },
    w = {
      sha1: function (t) {
        t
          ? ((this._h = t._h.slice(0)),
            (this._buffer = t._buffer.slice(0)),
            (this._length = t._length))
          : this.reset()
      }
    }
  w.sha1.prototype = {
    blockSize: 512,
    reset: function () {
      const t = this
      return (t._h = this._init.slice(0)), (t._buffer = []), (t._length = 0), t
    },
    update: function (t) {
      const e = this
      'string' == typeof t && (t = g.utf8String.toBits(t))
      const n = (e._buffer = f.concat(e._buffer, t)),
        a = e._length,
        r = (e._length = a + f.bitLength(t))
      if (r > 9007199254740991)
        throw new s('Cannot hash more than 2^53 - 1 bits')
      const c = new i(n)
      let o = 0
      for (
        let t = e.blockSize + a - ((e.blockSize + a) & (e.blockSize - 1));
        r >= t;
        t += e.blockSize
      )
        e._block(c.subarray(16 * o, 16 * (o + 1))), (o += 1)
      return n.splice(0, 16 * o), e
    },
    finalize: function () {
      const t = this
      let e = t._buffer
      const s = t._h
      e = f.concat(e, [f.partial(1, 1)])
      for (let t = e.length + 2; 15 & t; t++) e.push(0)
      for (
        e.push(n.floor(t._length / 4294967296)), e.push(0 | t._length);
        e.length;

      )
        t._block(e.splice(0, 16))
      return t.reset(), s
    },
    _init: [1732584193, 4023233417, 2562383102, 271733878, 3285377520],
    _key: [1518500249, 1859775393, 2400959708, 3395469782],
    _f: (t, e, n, s) =>
      t > 19
        ? t > 39
          ? t > 59
            ? t > 79
              ? void 0
              : e ^ n ^ s
            : (e & n) | (e & s) | (n & s)
          : e ^ n ^ s
        : (e & n) | (~e & s),
    _S: (t, e) => (e << t) | (e >>> (32 - t)),
    _block: function (e) {
      const s = this,
        a = s._h,
        r = t(80)
      for (let t = 0; 16 > t; t++) r[t] = e[t]
      let i = a[0],
        c = a[1],
        o = a[2],
        l = a[3],
        h = a[4]
      for (let t = 0; 79 >= t; t++) {
        16 > t || (r[t] = s._S(1, r[t - 3] ^ r[t - 8] ^ r[t - 14] ^ r[t - 16]))
        const e =
          (s._S(5, i) + s._f(t, c, o, l) + h + r[t] + s._key[n.floor(t / 20)]) |
          0
        ;(h = l), (l = o), (o = s._S(30, c)), (c = i), (i = e)
      }
      ;(a[0] = (a[0] + i) | 0),
        (a[1] = (a[1] + c) | 0),
        (a[2] = (a[2] + o) | 0),
        (a[3] = (a[3] + l) | 0),
        (a[4] = (a[4] + h) | 0)
    }
  }
  const y = {
      getRandomValues(t) {
        const e = new i(t.buffer),
          s = (t) => {
            let e = 987654321
            const s = 4294967295
            return () => (
              (e = (36969 * (65535 & e) + (e >> 16)) & s),
              ((((e << 16) + (t = (18e3 * (65535 & t) + (t >> 16)) & s)) & s) /
                4294967296 +
                0.5) *
                (n.random() > 0.5 ? 1 : -1)
            )
          }
        for (let a, r = 0; r < t.length; r += 4) {
          let t = s(4294967296 * (a || n.random()))
          ;(a = 987654071 * t()), (e[r / 4] = (4294967296 * t()) | 0)
        }
        return t
      }
    },
    _ = {
      importKey: (t) => new _.hmacSha1(g.bytes.toBits(t)),
      pbkdf2(t, e, n, a) {
        if (((n = n || 1e4), 0 > a || 0 > n))
          throw new s('invalid params to pbkdf2')
        const r = (1 + (a >> 5)) << 2
        let i, c, l, h, p
        const d = new ArrayBuffer(r)
        let u = new o(d),
          w = 0
        const y = f
        for (e = g.bytes.toBits(e), p = 1; (r || 1) > w; p++) {
          for (i = c = t.encrypt(y.concat(e, [p])), l = 1; n > l; l++)
            for (c = t.encrypt(c), h = 0; h < c.length; h++) i[h] ^= c[h]
          for (l = 0; (r || 1) > w && l < i.length; l++)
            u.setInt32(w, i[l]), (w += 4)
        }
        return d.slice(0, a / 8)
      },
      hmacSha1: class {
        constructor(t) {
          const e = this,
            n = (e._hash = w.sha1),
            s = [[], []],
            a = n.prototype.blockSize / 32
          ;(e._baseHash = [new n(), new n()]), t.length > a && (t = n.hash(t))
          for (let e = 0; a > e; e++)
            (s[0][e] = 909522486 ^ t[e]), (s[1][e] = 1549556828 ^ t[e])
          e._baseHash[0].update(s[0]),
            e._baseHash[1].update(s[1]),
            (e._resultHash = new n(e._baseHash[0]))
        }
        reset() {
          const t = this
          ;(t._resultHash = new t._hash(t._baseHash[0])), (t._updated = !1)
        }
        update(t) {
          ;(this._updated = !0), this._resultHash.update(t)
        }
        digest() {
          const t = this,
            e = t._resultHash.finalize(),
            n = new t._hash(t._baseHash[1]).update(e).finalize()
          return t.reset(), n
        }
        encrypt(t) {
          if (this._updated)
            throw new s('encrypt on already updated hmac called!')
          return this.update(t), this.digest(t)
        }
      }
    },
    m = 'Invalid pasword',
    b = 16,
    k = { name: 'PBKDF2' },
    v = e.assign({ hash: { name: 'HMAC' } }, k),
    z = e.assign({ iterations: 1e3, hash: { name: 'SHA-1' } }, k),
    C = ['deriveBits'],
    S = [8, 12, 16],
    B = [16, 24, 32],
    I = 10,
    D = [0, 0, 0, 0],
    V = void 0 !== h,
    H = V && void 0 !== h.subtle,
    K = g.bytes,
    A = class {
      constructor(t) {
        const e = this
        ;(e._tables = [
          [[], [], [], [], []],
          [[], [], [], [], []]
        ]),
          e._tables[0][0][0] || e._precompute()
        const n = e._tables[0][4],
          a = e._tables[1],
          r = t.length
        let i,
          c,
          o,
          l = 1
        if (4 !== r && 6 !== r && 8 !== r) throw new s('invalid aes key size')
        for (
          e._key = [(c = t.slice(0)), (o = [])], i = r;
          4 * r + 28 > i;
          i++
        ) {
          let t = c[i - 1]
          ;(i % r == 0 || (8 === r && i % r == 4)) &&
            ((t =
              (n[t >>> 24] << 24) ^
              (n[(t >> 16) & 255] << 16) ^
              (n[(t >> 8) & 255] << 8) ^
              n[255 & t]),
            i % r == 0 &&
              ((t = (t << 8) ^ (t >>> 24) ^ (l << 24)),
              (l = (l << 1) ^ (283 * (l >> 7))))),
            (c[i] = c[i - r] ^ t)
        }
        for (let t = 0; i; t++, i--) {
          const e = c[3 & t ? i : i - 4]
          o[t] =
            4 >= i || 4 > t
              ? e
              : a[0][n[e >>> 24]] ^
                a[1][n[(e >> 16) & 255]] ^
                a[2][n[(e >> 8) & 255]] ^
                a[3][n[255 & e]]
        }
      }
      encrypt(t) {
        return this._crypt(t, 0)
      }
      decrypt(t) {
        return this._crypt(t, 1)
      }
      _precompute() {
        const t = this._tables[0],
          e = this._tables[1],
          n = t[4],
          s = e[4],
          a = [],
          r = []
        let i, c, o, l
        for (let t = 0; 256 > t; t++)
          r[(a[t] = (t << 1) ^ (283 * (t >> 7))) ^ t] = t
        for (let h = (i = 0); !n[h]; h ^= c || 1, i = r[i] || 1) {
          let r = i ^ (i << 1) ^ (i << 2) ^ (i << 3) ^ (i << 4)
          ;(r = (r >> 8) ^ (255 & r) ^ 99),
            (n[h] = r),
            (s[r] = h),
            (l = a[(o = a[(c = a[h])])])
          let p = (16843009 * l) ^ (65537 * o) ^ (257 * c) ^ (16843008 * h),
            d = (257 * a[r]) ^ (16843008 * r)
          for (let n = 0; 4 > n; n++)
            (t[n][h] = d = (d << 24) ^ (d >>> 8)),
              (e[n][r] = p = (p << 24) ^ (p >>> 8))
        }
        for (let n = 0; 5 > n; n++)
          (t[n] = t[n].slice(0)), (e[n] = e[n].slice(0))
      }
      _crypt(t, e) {
        if (4 !== t.length) throw new s('invalid aes block size')
        const n = this._key[e],
          a = n.length / 4 - 2,
          r = [0, 0, 0, 0],
          i = this._tables[e],
          c = i[0],
          o = i[1],
          l = i[2],
          h = i[3],
          p = i[4]
        let d,
          u,
          f,
          g = t[0] ^ n[0],
          w = t[e ? 3 : 1] ^ n[1],
          y = t[2] ^ n[2],
          _ = t[e ? 1 : 3] ^ n[3],
          m = 4
        for (let t = 0; a > t; t++)
          (d =
            c[g >>> 24] ^
            o[(w >> 16) & 255] ^
            l[(y >> 8) & 255] ^
            h[255 & _] ^
            n[m]),
            (u =
              c[w >>> 24] ^
              o[(y >> 16) & 255] ^
              l[(_ >> 8) & 255] ^
              h[255 & g] ^
              n[m + 1]),
            (f =
              c[y >>> 24] ^
              o[(_ >> 16) & 255] ^
              l[(g >> 8) & 255] ^
              h[255 & w] ^
              n[m + 2]),
            (_ =
              c[_ >>> 24] ^
              o[(g >> 16) & 255] ^
              l[(w >> 8) & 255] ^
              h[255 & y] ^
              n[m + 3]),
            (m += 4),
            (g = d),
            (w = u),
            (y = f)
        for (let t = 0; 4 > t; t++)
          (r[e ? 3 & -t : t] =
            (p[g >>> 24] << 24) ^
            (p[(w >> 16) & 255] << 16) ^
            (p[(y >> 8) & 255] << 8) ^
            p[255 & _] ^
            n[m++]),
            (d = g),
            (g = w),
            (w = y),
            (y = _),
            (_ = d)
        return r
      }
    },
    R = class {
      constructor(t, e) {
        ;(this._prf = t), (this._initIv = e), (this._iv = e)
      }
      reset() {
        this._iv = this._initIv
      }
      update(t) {
        return this.calculate(this._prf, t, this._iv)
      }
      incWord(t) {
        if (255 == ((t >> 24) & 255)) {
          let e = (t >> 16) & 255,
            n = (t >> 8) & 255,
            s = 255 & t
          255 === e
            ? ((e = 0), 255 === n ? ((n = 0), 255 === s ? (s = 0) : ++s) : ++n)
            : ++e,
            (t = 0),
            (t += e << 16),
            (t += n << 8),
            (t += s)
        } else t += 1 << 24
        return t
      }
      incCounter(t) {
        0 === (t[0] = this.incWord(t[0])) && (t[1] = this.incWord(t[1]))
      }
      calculate(t, e, n) {
        let s
        if (!(s = e.length)) return []
        const a = f.bitLength(e)
        for (let a = 0; s > a; a += 4) {
          this.incCounter(n)
          const s = t.encrypt(n)
          ;(e[a] ^= s[0]),
            (e[a + 1] ^= s[1]),
            (e[a + 2] ^= s[2]),
            (e[a + 3] ^= s[3])
        }
        return f.clamp(e, a)
      }
    },
    W = _.hmacSha1
  class T {
    constructor(t, n, s) {
      e.assign(this, {
        password: t,
        signed: n,
        strength: s - 1,
        pendingInput: new a(0)
      })
    }
    async append(e) {
      const n = this
      if (n.password) {
        const a = E(e, 0, S[n.strength] + 2)
        await (async (t, e, n) => {
          await L(t, n, E(e, 0, S[t.strength]))
          const a = E(e, S[t.strength]),
            r = t.keys.passwordVerification
          if (r[0] != a[0] || r[1] != a[1]) throw new s(m)
        })(n, a, n.password),
          (n.password = null),
          (n.aesCtrGladman = new R(new A(n.keys.key), t.from(D))),
          (n.hmac = new W(n.keys.authentication)),
          (e = E(e, S[n.strength] + 2))
      }
      return G(n, e, new a(e.length - I - ((e.length - I) % b)), 0, I, !0)
    }
    flush() {
      const t = this,
        e = t.pendingInput,
        n = E(e, 0, e.length - I),
        s = E(e, e.length - I)
      let r = new a(0)
      if (n.length) {
        const e = K.toBits(n)
        t.hmac.update(e)
        const s = t.aesCtrGladman.update(e)
        r = K.fromBits(s)
      }
      let i = !0
      if (t.signed) {
        const e = E(K.fromBits(t.hmac.digest()), 0, I)
        for (let t = 0; I > t; t++) e[t] != s[t] && (i = !1)
      }
      return { valid: i, data: r }
    }
  }
  class U {
    constructor(t, n) {
      e.assign(this, { password: t, strength: n - 1, pendingInput: new a(0) })
    }
    async append(e) {
      const n = this
      let s = new a(0)
      n.password &&
        ((s = await (async (t, e) => {
          const n =
            ((s = new a(S[t.strength])),
            V && 'function' == typeof h.getRandomValues
              ? h.getRandomValues(s)
              : y.getRandomValues(s))
          var s
          return await L(t, e, n), P(n, t.keys.passwordVerification)
        })(n, n.password)),
        (n.password = null),
        (n.aesCtrGladman = new R(new A(n.keys.key), t.from(D))),
        (n.hmac = new W(n.keys.authentication)))
      const r = new a(s.length + e.length - (e.length % b))
      return r.set(s, 0), G(n, e, r, s.length, 0)
    }
    flush() {
      const t = this
      let e = new a(0)
      if (t.pendingInput.length) {
        const n = t.aesCtrGladman.update(K.toBits(t.pendingInput))
        t.hmac.update(n), (e = K.fromBits(n))
      }
      const n = E(K.fromBits(t.hmac.digest()), 0, I)
      return { data: P(e, n), signature: n }
    }
  }
  function G(t, e, n, s, r, i) {
    const c = e.length - r
    let o
    for (
      t.pendingInput.length &&
        ((e = P(t.pendingInput, e)),
        (n = ((t, e) => {
          if (e && e > t.length) {
            const n = t
            ;(t = new a(e)).set(n, 0)
          }
          return t
        })(n, c - (c % b)))),
        o = 0;
      c - b >= o;
      o += b
    ) {
      const a = K.toBits(E(e, o, o + b))
      i && t.hmac.update(a)
      const r = t.aesCtrGladman.update(a)
      i || t.hmac.update(r), n.set(K.fromBits(r), o + s)
    }
    return (t.pendingInput = E(e, o)), n
  }
  async function L(t, n, s) {
    const r = ((t) => {
        if (void 0 === l) {
          const e = new a((t = unescape(encodeURIComponent(t))).length)
          for (let n = 0; n < e.length; n++) e[n] = t.charCodeAt(n)
          return e
        }
        return new l().encode(t)
      })(n),
      i = await (async (t, e, n, s, a) =>
        V && H && 'function' == typeof h.subtle.importKey
          ? h.subtle.importKey('raw', e, n, !1, a)
          : _.importKey(e))(0, r, v, 0, C),
      c = await (async (t, e, n) =>
        V && H && 'function' == typeof h.subtle.deriveBits
          ? await h.subtle.deriveBits(t, e, n)
          : _.pbkdf2(e, t.salt, z.iterations, n))(
        e.assign({ salt: s }, z),
        i,
        8 * (2 * B[t.strength] + 2)
      ),
      o = new a(c)
    t.keys = {
      key: K.toBits(E(o, 0, B[t.strength])),
      authentication: K.toBits(E(o, B[t.strength], 2 * B[t.strength])),
      passwordVerification: E(o, 2 * B[t.strength])
    }
  }
  function P(t, e) {
    let n = t
    return (
      t.length + e.length &&
        ((n = new a(t.length + e.length)), n.set(t, 0), n.set(e, t.length)),
      n
    )
  }
  function E(t, e, n) {
    return t.subarray(e, n)
  }
  class M {
    constructor(t, n) {
      e.assign(this, { password: t, passwordVerification: n }), O(this, t)
    }
    append(t) {
      const e = this
      if (e.password) {
        const n = x(e, t.subarray(0, 12))
        if (((e.password = null), n[11] != e.passwordVerification))
          throw new s(m)
        t = t.subarray(12)
      }
      return x(e, t)
    }
    flush() {
      return { valid: !0, data: new a(0) }
    }
  }
  class j {
    constructor(t, n) {
      e.assign(this, { password: t, passwordVerification: n }), O(this, t)
    }
    append(t) {
      const e = this
      let n, s
      if (e.password) {
        e.password = null
        const r = h.getRandomValues(new a(12))
        ;(r[11] = e.passwordVerification),
          (n = new a(t.length + r.length)),
          n.set(F(e, r), 0),
          (s = 12)
      } else (n = new a(t.length)), (s = 0)
      return n.set(F(e, t), s), n
    }
    flush() {
      return { data: new a(0) }
    }
  }
  function x(t, e) {
    const n = new a(e.length)
    for (let s = 0; s < e.length; s++) (n[s] = J(t) ^ e[s]), q(t, n[s])
    return n
  }
  function F(t, e) {
    const n = new a(e.length)
    for (let s = 0; s < e.length; s++) (n[s] = J(t) ^ e[s]), q(t, e[s])
    return n
  }
  function O(t, e) {
    ;(t.keys = [305419896, 591751049, 878082192]),
      (t.crcKey0 = new u(t.keys[0])),
      (t.crcKey2 = new u(t.keys[2]))
    for (let n = 0; n < e.length; n++) q(t, e.charCodeAt(n))
  }
  function q(t, e) {
    t.crcKey0.append([e]),
      (t.keys[0] = ~t.crcKey0.get()),
      (t.keys[1] = Q(t.keys[1] + N(t.keys[0]))),
      (t.keys[1] = Q(n.imul(t.keys[1], 134775813) + 1)),
      t.crcKey2.append([t.keys[1] >>> 24]),
      (t.keys[2] = ~t.crcKey2.get())
  }
  function J(t) {
    const e = 2 | t.keys[2]
    return N(n.imul(e, 1 ^ e) >>> 8)
  }
  function N(t) {
    return 255 & t
  }
  function Q(t) {
    return 4294967295 & t
  }
  const X = 'deflate',
    Y = 'inflate',
    Z = 'Invalid signature'
  class $ {
    constructor(
      t,
      {
        signature: n,
        password: s,
        signed: a,
        compressed: r,
        zipCrypto: i,
        passwordVerification: c,
        encryptionStrength: o
      },
      { chunkSize: l }
    ) {
      const h = !!s
      e.assign(this, {
        signature: n,
        encrypted: h,
        signed: a,
        compressed: r,
        inflate: r && new t({ chunkSize: l }),
        crc32: a && new u(),
        zipCrypto: i,
        decrypt: h && i ? new M(s, c) : new T(s, a, o)
      })
    }
    async append(t) {
      const e = this
      return (
        e.encrypted && t.length && (t = await e.decrypt.append(t)),
        e.compressed && t.length && (t = await e.inflate.append(t)),
        (!e.encrypted || e.zipCrypto) &&
          e.signed &&
          t.length &&
          e.crc32.append(t),
        t
      )
    }
    async flush() {
      const t = this
      let e,
        n = new a(0)
      if (t.encrypted) {
        const e = t.decrypt.flush()
        if (!e.valid) throw new s(Z)
        n = e.data
      }
      if ((!t.encrypted || t.zipCrypto) && t.signed) {
        const n = new o(new a(4).buffer)
        if (
          ((e = t.crc32.get()),
          n.setUint32(0, e),
          t.signature != n.getUint32(0, !1))
        )
          throw new s(Z)
      }
      return (
        t.compressed &&
          ((n = (await t.inflate.append(n)) || new a(0)),
          await t.inflate.flush()),
        { data: n, signature: e }
      )
    }
  }
  class tt {
    constructor(
      t,
      {
        encrypted: n,
        signed: s,
        compressed: a,
        level: r,
        zipCrypto: i,
        password: c,
        passwordVerification: o,
        encryptionStrength: l
      },
      { chunkSize: h }
    ) {
      e.assign(this, {
        encrypted: n,
        signed: s,
        compressed: a,
        deflate: a && new t({ level: r || 5, chunkSize: h }),
        crc32: s && new u(),
        zipCrypto: i,
        encrypt: n && i ? new j(c, o) : new U(c, l)
      })
    }
    async append(t) {
      const e = this
      let n = t
      return (
        e.compressed && t.length && (n = await e.deflate.append(t)),
        e.encrypted && n.length && (n = await e.encrypt.append(n)),
        (!e.encrypted || e.zipCrypto) &&
          e.signed &&
          t.length &&
          e.crc32.append(t),
        n
      )
    }
    async flush() {
      const t = this
      let e,
        n = new a(0)
      if (
        (t.compressed && (n = (await t.deflate.flush()) || new a(0)),
        t.encrypted)
      ) {
        n = await t.encrypt.append(n)
        const s = t.encrypt.flush()
        e = s.signature
        const r = new a(n.length + s.data.length)
        r.set(n, 0), r.set(s.data, n.length), (n = r)
      }
      return (
        (t.encrypted && !t.zipCrypto) || !t.signed || (e = t.crc32.get()),
        { data: n, signature: e }
      )
    }
  }
  const et = {
    init(t) {
      t.scripts && t.scripts.length && importScripts.apply(void 0, t.scripts)
      const e = t.options
      let n
      self.initCodec && self.initCodec(),
        e.codecType.startsWith(X)
          ? (n = self.Deflate)
          : e.codecType.startsWith(Y) && (n = self.Inflate),
        (nt = ((t, e, n) =>
          e.codecType.startsWith(X)
            ? new tt(t, e, n)
            : e.codecType.startsWith(Y)
              ? new $(t, e, n)
              : void 0)(n, e, t.config))
    },
    append: async (t) => ({ data: await nt.append(t.data) }),
    flush: () => nt.flush()
  }
  let nt
  function st(t, n, s) {
    return class {
      constructor(r) {
        const i = this
        ;(i.codec = new t(e.assign({}, n, r))),
          s(i.codec, (t) => {
            if (i.pendingData) {
              const e = i.pendingData
              ;(i.pendingData = new a(e.length + t.length)),
                i.pendingData.set(e, 0),
                i.pendingData.set(t, e.length)
            } else i.pendingData = new a(t)
          })
      }
      async append(t) {
        return this.codec.push(t), r(this)
      }
      async flush() {
        return this.codec.push(new a(0), !0), r(this)
      }
    }
    function r(t) {
      if (t.pendingData) {
        const e = t.pendingData
        return (t.pendingData = null), e
      }
      return new a(0)
    }
  }
  addEventListener('message', async (t) => {
    const e = t.data,
      n = e.type,
      s = et[n]
    if (s)
      try {
        e.data && (e.data = new a(e.data))
        const t = (await s(e)) || {}
        if (((t.type = n), t.data))
          try {
            ;(t.data = t.data.buffer), p(t, [t.data])
          } catch (e) {
            p(t)
          }
        else p(t)
      } catch (t) {
        p({ type: n, error: { message: t.message, stack: t.stack } })
      }
  }),
    (self.initCodec = () => {
      const { Deflate: t, Inflate: e } = ((t, e = {}, n) => ({
        Deflate: st(t.Deflate, e.deflate, n),
        Inflate: st(t.Inflate, e.inflate, n)
      }))(
        pako,
        { deflate: { raw: !0 }, inflate: { raw: !0 } },
        (t, e) => (t.onData = e)
      )
      ;(self.Deflate = t), (self.Inflate = e)
    })
})()
