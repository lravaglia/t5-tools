var W,
  d,
  Q,
  t_,
  x,
  G,
  X,
  $,
  C = {},
  B = [],
  n_ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
  R = Array.isArray;
function w(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function Y(e) {
  var _ = e.parentNode;
  _ && _.removeChild(e);
}
function o_(e, _, t) {
  var r,
    o,
    l,
    s = {};
  for (l in _)
    l == "key" ? (r = _[l]) : l == "ref" ? (o = _[l]) : (s[l] = _[l]);
  if (
    (arguments.length > 2 &&
      (s.children = arguments.length > 3 ? W.call(arguments, 2) : t),
    typeof e == "function" && e.defaultProps != null)
  )
    for (l in e.defaultProps) s[l] === void 0 && (s[l] = e.defaultProps[l]);
  return L(e, s, r, o, null);
}
function L(e, _, t, r, o) {
  var l = {
    type: e,
    props: _,
    key: t,
    ref: r,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __d: void 0,
    __c: null,
    constructor: void 0,
    __v: o ?? ++Q,
    __i: -1,
    __u: 0,
  };
  return o == null && d.vnode != null && d.vnode(l), l;
}
function A(e) {
  return e.children;
}
function M(e, _) {
  (this.props = e), (this.context = _);
}
function S(e, _) {
  if (_ == null) return e.__ ? S(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? S(e) : null;
}
function r_(e, _, t) {
  var r,
    o = e.__v,
    l = o.__e,
    s = e.__P;
  if (s)
    return (
      ((r = w({}, o)).__v = o.__v + 1),
      d.vnode && d.vnode(r),
      O(
        s,
        r,
        o,
        e.__n,
        s.ownerSVGElement !== void 0,
        32 & o.__u ? [l] : null,
        _,
        l ?? S(o),
        !!(32 & o.__u),
        t,
      ),
      (r.__v = o.__v),
      (r.__.__k[r.__i] = r),
      (r.__d = void 0),
      r.__e != l && Z(r),
      r
    );
}
function Z(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return Z(e);
  }
}
function V(e) {
  ((!e.__d && (e.__d = !0) && x.push(e) && !N.__r++) ||
    G !== d.debounceRendering) &&
    ((G = d.debounceRendering) || X)(N);
}
function N() {
  var e,
    _,
    t,
    r = [],
    o = [];
  for (x.sort($); (e = x.shift()); )
    e.__d &&
      ((t = x.length),
      (_ = r_(e, r, o) || _),
      t === 0 || x.length > t
        ? (F(r, _, o), (o.length = r.length = 0), (_ = void 0), x.sort($))
        : _ && d.__c && d.__c(_, B));
  _ && F(r, _, o), (N.__r = 0);
}
function __(e, _, t, r, o, l, s, u, c, i, p) {
  var n,
    g,
    f,
    h,
    k,
    v = (r && r.__k) || B,
    a = _.length;
  for (t.__d = c, l_(t, _, v), c = t.__d, n = 0; n < a; n++)
    (f = t.__k[n]) != null &&
      typeof f != "boolean" &&
      typeof f != "function" &&
      ((g = f.__i === -1 ? C : v[f.__i] || C),
      (f.__i = n),
      O(e, f, g, o, l, s, u, c, i, p),
      (h = f.__e),
      f.ref &&
        g.ref != f.ref &&
        (g.ref && j(g.ref, null, f), p.push(f.ref, f.__c || h, f)),
      k == null && h != null && (k = h),
      65536 & f.__u || g.__k === f.__k
        ? (c = e_(f, c, e))
        : typeof f.type == "function" && f.__d !== void 0
          ? (c = f.__d)
          : h && (c = h.nextSibling),
      (f.__d = void 0),
      (f.__u &= -196609));
  (t.__d = c), (t.__e = k);
}
function l_(e, _, t) {
  var r,
    o,
    l,
    s,
    u,
    c = _.length,
    i = t.length,
    p = i,
    n = 0;
  for (e.__k = [], r = 0; r < c; r++)
    (s = r + n),
      (o = e.__k[r] =
        (o = _[r]) == null || typeof o == "boolean" || typeof o == "function"
          ? null
          : typeof o == "string" ||
              typeof o == "number" ||
              typeof o == "bigint" ||
              o.constructor == String
            ? L(null, o, null, null, null)
            : R(o)
              ? L(A, { children: o }, null, null, null)
              : o.constructor === void 0 && o.__b > 0
                ? L(o.type, o.props, o.key, o.ref ? o.ref : null, o.__v)
                : o) != null
        ? ((o.__ = e),
          (o.__b = e.__b + 1),
          (u = i_(o, t, s, p)),
          (o.__i = u),
          (l = null),
          u !== -1 && (p--, (l = t[u]) && (l.__u |= 131072)),
          l == null || l.__v === null
            ? (u == -1 && n--, typeof o.type != "function" && (o.__u |= 65536))
            : u !== s &&
              (u === s + 1
                ? n++
                : u > s
                  ? p > c - s
                    ? (n += u - s)
                    : n--
                  : u < s
                    ? u == s - 1 && (n = u - s)
                    : (n = 0),
              u !== r + n && (o.__u |= 65536)))
        : (l = t[s]) &&
          l.key == null &&
          l.__e &&
          !(131072 & l.__u) &&
          (l.__e == e.__d && (e.__d = S(l)), I(l, l, !1), (t[s] = null), p--);
  if (p)
    for (r = 0; r < i; r++)
      (l = t[r]) != null &&
        !(131072 & l.__u) &&
        (l.__e == e.__d && (e.__d = S(l)), I(l, l));
}
function e_(e, _, t) {
  var r, o;
  if (typeof e.type == "function") {
    for (r = e.__k, o = 0; r && o < r.length; o++)
      r[o] && ((r[o].__ = e), (_ = e_(r[o], _, t)));
    return _;
  }
  e.__e != _ && (t.insertBefore(e.__e, _ || null), (_ = e.__e));
  do _ = _ && _.nextSibling;
  while (_ != null && _.nodeType === 8);
  return _;
}
function i_(e, _, t, r) {
  var o = e.key,
    l = e.type,
    s = t - 1,
    u = t + 1,
    c = _[t];
  if (c === null || (c && o == c.key && l === c.type && !(131072 & c.__u)))
    return t;
  if (r > (c != null && !(131072 & c.__u) ? 1 : 0))
    for (; s >= 0 || u < _.length; ) {
      if (s >= 0) {
        if ((c = _[s]) && !(131072 & c.__u) && o == c.key && l === c.type)
          return s;
        s--;
      }
      if (u < _.length) {
        if ((c = _[u]) && !(131072 & c.__u) && o == c.key && l === c.type)
          return u;
        u++;
      }
    }
  return -1;
}
function q(e, _, t) {
  _[0] === "-"
    ? e.setProperty(_, t ?? "")
    : (e[_] =
        t == null ? "" : typeof t != "number" || n_.test(_) ? t : t + "px");
}
function U(e, _, t, r, o) {
  var l;
  _: if (_ === "style")
    if (typeof t == "string") e.style.cssText = t;
    else {
      if ((typeof r == "string" && (e.style.cssText = r = ""), r))
        for (_ in r) (t && _ in t) || q(e.style, _, "");
      if (t) for (_ in t) (r && t[_] === r[_]) || q(e.style, _, t[_]);
    }
  else if (_[0] === "o" && _[1] === "n")
    (l = _ !== (_ = _.replace(/(PointerCapture)$|Capture$/i, "$1"))),
      (_ = _.toLowerCase() in e ? _.toLowerCase().slice(2) : _.slice(2)),
      e.l || (e.l = {}),
      (e.l[_ + l] = t),
      t
        ? r
          ? (t.u = r.u)
          : ((t.u = Date.now()), e.addEventListener(_, l ? K : J, l))
        : e.removeEventListener(_, l ? K : J, l);
  else {
    if (o) _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      _ !== "width" &&
      _ !== "height" &&
      _ !== "href" &&
      _ !== "list" &&
      _ !== "form" &&
      _ !== "tabIndex" &&
      _ !== "download" &&
      _ !== "rowSpan" &&
      _ !== "colSpan" &&
      _ !== "role" &&
      _ in e
    )
      try {
        e[_] = t ?? "";
        break _;
      } catch {}
    typeof t == "function" ||
      (t == null || (t === !1 && _[4] !== "-")
        ? e.removeAttribute(_)
        : e.setAttribute(_, t));
  }
}
function J(e) {
  if (this.l) {
    var _ = this.l[e.type + !1];
    if (e.t) {
      if (e.t <= _.u) return;
    } else e.t = Date.now();
    return _(d.event ? d.event(e) : e);
  }
}
function K(e) {
  if (this.l) return this.l[e.type + !0](d.event ? d.event(e) : e);
}
function O(e, _, t, r, o, l, s, u, c, i) {
  var p,
    n,
    g,
    f,
    h,
    k,
    v,
    a,
    y,
    b,
    D,
    P,
    z,
    T,
    H,
    m = _.type;
  if (_.constructor !== void 0) return null;
  128 & t.__u && ((c = !!(32 & t.__u)), (l = [(u = _.__e = t.__e)])),
    (p = d.__b) && p(_);
  _: if (typeof m == "function")
    try {
      if (
        ((a = _.props),
        (y = (p = m.contextType) && r[p.__c]),
        (b = p ? (y ? y.props.value : p.__) : r),
        t.__c
          ? (v = (n = _.__c = t.__c).__ = n.__E)
          : ("prototype" in m && m.prototype.render
              ? (_.__c = n = new m(a, b))
              : ((_.__c = n = new M(a, b)),
                (n.constructor = m),
                (n.render = f_)),
            y && y.sub(n),
            (n.props = a),
            n.state || (n.state = {}),
            (n.context = b),
            (n.__n = r),
            (g = n.__d = !0),
            (n.__h = []),
            (n._sb = [])),
        n.__s == null && (n.__s = n.state),
        m.getDerivedStateFromProps != null &&
          (n.__s == n.state && (n.__s = w({}, n.__s)),
          w(n.__s, m.getDerivedStateFromProps(a, n.__s))),
        (f = n.props),
        (h = n.state),
        (n.__v = _),
        g)
      )
        m.getDerivedStateFromProps == null &&
          n.componentWillMount != null &&
          n.componentWillMount(),
          n.componentDidMount != null && n.__h.push(n.componentDidMount);
      else {
        if (
          (m.getDerivedStateFromProps == null &&
            a !== f &&
            n.componentWillReceiveProps != null &&
            n.componentWillReceiveProps(a, b),
          !n.__e &&
            ((n.shouldComponentUpdate != null &&
              n.shouldComponentUpdate(a, n.__s, b) === !1) ||
              _.__v === t.__v))
        ) {
          for (
            _.__v !== t.__v && ((n.props = a), (n.state = n.__s), (n.__d = !1)),
              _.__e = t.__e,
              _.__k = t.__k,
              _.__k.forEach(function (E) {
                E && (E.__ = _);
              }),
              D = 0;
            D < n._sb.length;
            D++
          )
            n.__h.push(n._sb[D]);
          (n._sb = []), n.__h.length && s.push(n);
          break _;
        }
        n.componentWillUpdate != null && n.componentWillUpdate(a, n.__s, b),
          n.componentDidUpdate != null &&
            n.__h.push(function () {
              n.componentDidUpdate(f, h, k);
            });
      }
      if (
        ((n.context = b),
        (n.props = a),
        (n.__P = e),
        (n.__e = !1),
        (P = d.__r),
        (z = 0),
        "prototype" in m && m.prototype.render)
      ) {
        for (
          n.state = n.__s,
            n.__d = !1,
            P && P(_),
            p = n.render(n.props, n.state, n.context),
            T = 0;
          T < n._sb.length;
          T++
        )
          n.__h.push(n._sb[T]);
        n._sb = [];
      } else
        do
          (n.__d = !1),
            P && P(_),
            (p = n.render(n.props, n.state, n.context)),
            (n.state = n.__s);
        while (n.__d && ++z < 25);
      (n.state = n.__s),
        n.getChildContext != null && (r = w(w({}, r), n.getChildContext())),
        g ||
          n.getSnapshotBeforeUpdate == null ||
          (k = n.getSnapshotBeforeUpdate(f, h)),
        __(
          e,
          R(
            (H =
              p != null && p.type === A && p.key == null
                ? p.props.children
                : p),
          )
            ? H
            : [H],
          _,
          t,
          r,
          o,
          l,
          s,
          u,
          c,
          i,
        ),
        (n.base = _.__e),
        (_.__u &= -161),
        n.__h.length && s.push(n),
        v && (n.__E = n.__ = null);
    } catch (E) {
      (_.__v = null),
        c || l != null
          ? ((_.__e = u), (_.__u |= c ? 160 : 32), (l[l.indexOf(u)] = null))
          : ((_.__e = t.__e), (_.__k = t.__k)),
        d.__e(E, _, t);
    }
  else
    l == null && _.__v === t.__v
      ? ((_.__k = t.__k), (_.__e = t.__e))
      : (_.__e = s_(t.__e, _, t, r, o, l, s, c, i));
  (p = d.diffed) && p(_);
}
function F(e, _, t) {
  for (var r = 0; r < t.length; r++) j(t[r], t[++r], t[++r]);
  d.__c && d.__c(_, e),
    e.some(function (o) {
      try {
        (e = o.__h),
          (o.__h = []),
          e.some(function (l) {
            l.call(o);
          });
      } catch (l) {
        d.__e(l, o.__v);
      }
    });
}
function s_(e, _, t, r, o, l, s, u, c) {
  var i,
    p,
    n,
    g,
    f,
    h,
    k,
    v = t.props,
    a = _.props,
    y = _.type;
  if ((y === "svg" && (o = !0), l != null)) {
    for (i = 0; i < l.length; i++)
      if (
        (f = l[i]) &&
        "setAttribute" in f == !!y &&
        (y ? f.localName === y : f.nodeType === 3)
      ) {
        (e = f), (l[i] = null);
        break;
      }
  }
  if (e == null) {
    if (y === null) return document.createTextNode(a);
    (e = o
      ? document.createElementNS("http://www.w3.org/2000/svg", y)
      : document.createElement(y, a.is && a)),
      (l = null),
      (u = !1);
  }
  if (y === null) v === a || (u && e.data === a) || (e.data = a);
  else {
    if (((l = l && W.call(e.childNodes)), (v = t.props || C), !u && l != null))
      for (v = {}, i = 0; i < e.attributes.length; i++)
        v[(f = e.attributes[i]).name] = f.value;
    for (i in v)
      (f = v[i]),
        i == "children" ||
          (i == "dangerouslySetInnerHTML"
            ? (n = f)
            : i === "key" || i in a || U(e, i, null, f, o));
    for (i in a)
      (f = a[i]),
        i == "children"
          ? (g = f)
          : i == "dangerouslySetInnerHTML"
            ? (p = f)
            : i == "value"
              ? (h = f)
              : i == "checked"
                ? (k = f)
                : i === "key" ||
                  (u && typeof f != "function") ||
                  v[i] === f ||
                  U(e, i, f, v[i], o);
    if (p)
      u ||
        (n && (p.__html === n.__html || p.__html === e.innerHTML)) ||
        (e.innerHTML = p.__html),
        (_.__k = []);
    else if (
      (n && (e.innerHTML = ""),
      __(
        e,
        R(g) ? g : [g],
        _,
        t,
        r,
        o && y !== "foreignObject",
        l,
        s,
        l ? l[0] : t.__k && S(t, 0),
        u,
        c,
      ),
      l != null)
    )
      for (i = l.length; i--; ) l[i] != null && Y(l[i]);
    u ||
      ((i = "value"),
      h !== void 0 &&
        (h !== e[i] ||
          (y === "progress" && !h) ||
          (y === "option" && h !== v[i])) &&
        U(e, i, h, v[i], !1),
      (i = "checked"),
      k !== void 0 && k !== e[i] && U(e, i, k, v[i], !1));
  }
  return e;
}
function j(e, _, t) {
  try {
    typeof e == "function" ? e(_) : (e.current = _);
  } catch (r) {
    d.__e(r, t);
  }
}
function I(e, _, t) {
  var r, o;
  if (
    (d.unmount && d.unmount(e),
    (r = e.ref) && ((r.current && r.current !== e.__e) || j(r, null, _)),
    (r = e.__c) != null)
  ) {
    if (r.componentWillUnmount)
      try {
        r.componentWillUnmount();
      } catch (l) {
        d.__e(l, _);
      }
    (r.base = r.__P = null), (e.__c = void 0);
  }
  if ((r = e.__k))
    for (o = 0; o < r.length; o++)
      r[o] && I(r[o], _, t || typeof e.type != "function");
  t || e.__e == null || Y(e.__e), (e.__ = e.__e = e.__d = void 0);
}
function f_(e, _, t) {
  return this.constructor(e, t);
}
function u_(e, _, t) {
  var r, o, l, s;
  d.__ && d.__(e, _),
    (o = (r = typeof t == "function") ? null : (t && t.__k) || _.__k),
    (l = []),
    (s = []),
    O(
      _,
      (e = ((!r && t) || _).__k = o_(A, null, [e])),
      o || C,
      C,
      _.ownerSVGElement !== void 0,
      !r && t ? [t] : o ? null : _.firstChild ? W.call(_.childNodes) : null,
      l,
      !r && t ? t : o ? o.__e : _.firstChild,
      r,
      s,
    ),
    (e.__d = void 0),
    F(l, e, s);
}
function c_(e, _) {
  u_(e, _, c_);
}
(W = B.slice),
  (d = {
    __e: function (e, _, t, r) {
      for (var o, l, s; (_ = _.__); )
        if ((o = _.__c) && !o.__)
          try {
            if (
              ((l = o.constructor) &&
                l.getDerivedStateFromError != null &&
                (o.setState(l.getDerivedStateFromError(e)), (s = o.__d)),
              o.componentDidCatch != null &&
                (o.componentDidCatch(e, r || {}), (s = o.__d)),
              s)
            )
              return (o.__E = o);
          } catch (u) {
            e = u;
          }
      throw e;
    },
  }),
  (Q = 0),
  (t_ = function (e) {
    return e != null && e.constructor == null;
  }),
  (M.prototype.setState = function (e, _) {
    var t;
    (t =
      this.__s != null && this.__s !== this.state
        ? this.__s
        : (this.__s = w({}, this.state))),
      typeof e == "function" && (e = e(w({}, t), this.props)),
      e && w(t, e),
      e != null && this.__v && (_ && this._sb.push(_), V(this));
  }),
  (M.prototype.forceUpdate = function (e) {
    this.__v && ((this.__e = !0), e && this.__h.push(e), V(this));
  }),
  (M.prototype.render = A),
  (x = []),
  (X =
    typeof Promise == "function"
      ? Promise.prototype.then.bind(Promise.resolve())
      : setTimeout),
  ($ = function (e, _) {
    return e.__v.__b - _.__v.__b;
  }),
  (N.__r = 0);
export { u_ as B, c_ as E, M as b, A as g, d as l, t_ as t, o_ as y };
