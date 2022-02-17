var app = function () {
    "use strict";

    function e() {}
    const t = e => e;

    function n(e) {
        return e()
    }

    function s() {
        return Object.create(null)
    }

    function r(e) {
        e.forEach(n)
    }

    function l(e) {
        return "function" == typeof e
    }

    function o(e, t) {
        return e != e ? t == t : e !== t || e && "object" == typeof e || "function" == typeof e
    }

    function a(t, n, s) {
        t.$$.on_destroy.push(function (t, ...n) {
            if (null == t) return e;
            const s = t.subscribe(...n);
            return s.unsubscribe ? () => s.unsubscribe() : s
        }(n, s))
    }

    function i(e, t, n, s) {
        if (e) {
            const r = c(e, t, n, s);
            return e[0](r)
        }
    }

    function c(e, t, n, s) {
        return e[1] && s ? function (e, t) {
            for (const n in t) e[n] = t[n];
            return e
        }(n.ctx.slice(), e[1](s(t))) : n.ctx
    }

    function u(e, t, n, s) {
        if (e[2] && s) {
            const r = e[2](s(n));
            if (void 0 === t.dirty) return r;
            if ("object" == typeof r) {
                const e = [],
                    n = Math.max(t.dirty.length, r.length);
                for (let s = 0; s < n; s += 1) e[s] = t.dirty[s] | r[s];
                return e
            }
            return t.dirty | r
        }
        return t.dirty
    }

    function d(e, t, n, s, r, l) {
        if (r) {
            const o = c(t, n, s, l);
            e.p(o, r)
        }
    }

    function h(e) {
        if (e.ctx.length > 32) {
            const t = [],
                n = e.ctx.length / 32;
            for (let e = 0; e < n; e++) t[e] = -1;
            return t
        }
        return -1
    }

    function g(e) {
        return null == e ? "" : e
    }

    function m(e, t, n) {
        return e.set(n), t
    }
    const f = "undefined" != typeof window;
    let v = f ? () => window.performance.now() : () => Date.now(),
        p = f ? e => requestAnimationFrame(e) : e;
    const b = new Set;

    function y(e) {
        b.forEach((t => {
            t.c(e) || (b.delete(t), t.f())
        })), 0 !== b.size && p(y)
    }

    function k(e) {
        let t;
        return 0 === b.size && p(y), {
            promise: new Promise((n => {
                b.add(t = {
                    c: e,
                    f: n
                })
            })),
            abort() {
                b.delete(t)
            }
        }
    }

    function w(e, t) {
        e.appendChild(t)
    }

    function $(e) {
        if (!e) return document;
        const t = e.getRootNode ? e.getRootNode() : e.ownerDocument;
        return t && t.host ? t : e.ownerDocument
    }

    function x(e) {
        const t = M("style");
        return function (e, t) {
            w(e.head || e, t)
        }($(e), t), t.sheet
    }

    function z(e, t, n) {
        e.insertBefore(t, n || null)
    }

    function _(e) {
        e.parentNode.removeChild(e)
    }

    function C(e, t) {
        for (let n = 0; n < e.length; n += 1) e[n] && e[n].d(t)
    }

    function M(e) {
        return document.createElement(e)
    }

    function q(e) {
        return document.createTextNode(e)
    }

    function j() {
        return q(" ")
    }

    function S(e, t, n, s) {
        return e.addEventListener(t, n, s), () => e.removeEventListener(t, n, s)
    }

    function L(e, t, n) {
        null == n ? e.removeAttribute(t) : e.getAttribute(t) !== n && e.setAttribute(t, n)
    }

    function G(e, t, n) {
        t in e ? e[t] = "boolean" == typeof e[t] && "" === n || n : L(e, t, n)
    }

    function T(e, t) {
        t = "" + t, e.wholeText !== t && (e.data = t)
    }

    function H(e, t, n, s) {
        null === n ? e.style.removeProperty(t) : e.style.setProperty(t, n, s ? "important" : "")
    }
    const E = new Map;
    let O, N = 0;

    function P(e, t, n, s, r, l, o, a = 0) {
        const i = 16.666 / s;
        let c = "{\n";
        for (let e = 0; e <= 1; e += i) {
            const s = t + (n - t) * l(e);
            c += 100 * e + `%{${o(s,1-s)}}\n`
        }
        const u = c + `100% {${o(n,1-n)}}\n}`,
            d = `__svelte_${function(e){let t=5381,n=e.length;for(;n--;)t=(t<<5)-t^e.charCodeAt(n);return t>>>0}(u)}_${a}`,
            h = $(e),
            {
                stylesheet: g,
                rules: m
            } = E.get(h) || function (e, t) {
                const n = {
                    stylesheet: x(t),
                    rules: {}
                };
                return E.set(e, n), n
            }(h, e);
        m[d] || (m[d] = !0, g.insertRule(`@keyframes ${d} ${u}`, g.cssRules.length));
        const f = e.style.animation || "";
        return e.style.animation = `${f?`${f}, `:""}${d} ${s}ms linear ${r}ms 1 both`, N += 1, d
    }

    function I(e, t) {
        const n = (e.style.animation || "").split(", "),
            s = n.filter(t ? e => e.indexOf(t) < 0 : e => -1 === e.indexOf("__svelte")),
            r = n.length - s.length;
        r && (e.style.animation = s.join(", "), N -= r, N || p((() => {
            N || (E.forEach((e => {
                const {
                    stylesheet: t
                } = e;
                let n = t.cssRules.length;
                for (; n--;) t.deleteRule(n);
                e.rules = {}
            })), E.clear())
        })))
    }

    function D(n, s, r, l) {
        if (!s) return e;
        const o = n.getBoundingClientRect();
        if (s.left === o.left && s.right === o.right && s.top === o.top && s.bottom === o.bottom) return e;
        const {
            delay: a = 0,
            duration: i = 300,
            easing: c = t,
            start: u = v() + a,
            end: d = u + i,
            tick: h = e,
            css: g
        } = r(n, {
            from: s,
            to: o
        }, l);
        let m, f = !0,
            p = !1;

        function b() {
            g && I(n, m), f = !1
        }
        return k((e => {
            if (!p && e >= u && (p = !0), p && e >= d && (h(1, 0), b()), !f) return !1;
            if (p) {
                const t = 0 + 1 * c((e - u) / i);
                h(t, 1 - t)
            }
            return !0
        })), g && (m = P(n, 0, 1, i, a, c, g)), a || (p = !0), h(0, 1), b
    }

    function A(e) {
        const t = getComputedStyle(e);
        if ("absolute" !== t.position && "fixed" !== t.position) {
            const {
                width: n,
                height: s
            } = t, r = e.getBoundingClientRect();
            e.style.position = "absolute", e.style.width = n, e.style.height = s, R(e, r)
        }
    }

    function R(e, t) {
        const n = e.getBoundingClientRect();
        if (t.left !== n.left || t.top !== n.top) {
            const s = getComputedStyle(e),
                r = "none" === s.transform ? "" : s.transform;
            e.style.transform = `${r} translate(${t.left-n.left}px, ${t.top-n.top}px)`
        }
    }

    function B(e) {
        O = e
    }
    const J = [],
        F = [],
        V = [],
        U = [],
        W = Promise.resolve();
    let X = !1;

    function Y(e) {
        V.push(e)
    }

    function Z(e) {
        U.push(e)
    }
    const K = new Set;
    let Q, ee = 0;

    function te() {
        const e = O;
        do {
            for (; ee < J.length;) {
                const e = J[ee];
                ee++, B(e), ne(e.$$)
            }
            for (B(null), J.length = 0, ee = 0; F.length;) F.pop()();
            for (let e = 0; e < V.length; e += 1) {
                const t = V[e];
                K.has(t) || (K.add(t), t())
            }
            V.length = 0
        } while (J.length);
        for (; U.length;) U.pop()();
        X = !1, K.clear(), B(e)
    }

    function ne(e) {
        if (null !== e.fragment) {
            e.update(), r(e.before_update);
            const t = e.dirty;
            e.dirty = [-1], e.fragment && e.fragment.p(e.ctx, t), e.after_update.forEach(Y)
        }
    }

    function se(e, t, n) {
        e.dispatchEvent(function (e, t, n = !1) {
            const s = document.createEvent("CustomEvent");
            return s.initCustomEvent(e, n, !1, t), s
        }(`${t?"intro":"outro"}${n}`))
    }
    const re = new Set;
    let le;

    function oe() {
        le = {
            r: 0,
            c: [],
            p: le
        }
    }

    function ae() {
        le.r || r(le.c), le = le.p
    }

    function ie(e, t) {
        e && e.i && (re.delete(e), e.i(t))
    }

    function ce(e, t, n, s) {
        if (e && e.o) {
            if (re.has(e)) return;
            re.add(e), le.c.push((() => {
                re.delete(e), s && (n && e.d(1), s())
            })), e.o(t)
        }
    }
    const ue = {
        duration: 0
    };

    function de(n, s, o, a) {
        let i = s(n, o),
            c = a ? 0 : 1,
            u = null,
            d = null,
            h = null;

        function g() {
            h && I(n, h)
        }

        function m(e, t) {
            const n = e.b - c;
            return t *= Math.abs(n), {
                a: c,
                b: e.b,
                d: n,
                duration: t,
                start: e.start,
                end: e.start + t,
                group: e.group
            }
        }

        function f(s) {
            const {
                delay: l = 0,
                duration: o = 300,
                easing: a = t,
                tick: f = e,
                css: p
            } = i || ue, b = {
                start: v() + l,
                b: s
            };
            s || (b.group = le, le.r += 1), u || d ? d = b : (p && (g(), h = P(n, c, s, o, l, a, p)), s && f(0, 1), u = m(b, o), Y((() => se(n, s, "start"))), k((e => {
                if (d && e > d.start && (u = m(d, o), d = null, se(n, u.b, "start"), p && (g(), h = P(n, c, u.b, u.duration, 0, a, i.css))), u)
                    if (e >= u.end) f(c = u.b, 1 - c), se(n, u.b, "end"), d || (u.b ? g() : --u.group.r || r(u.group.c)), u = null;
                    else if (e >= u.start) {
                    const t = e - u.start;
                    c = u.a + u.d * a(t / u.duration), f(c, 1 - c)
                }
                return !(!u && !d)
            })))
        }
        return {
            run(e) {
                l(i) ? (Q || (Q = Promise.resolve(), Q.then((() => {
                    Q = null
                }))), Q).then((() => {
                    i = i(), f(e)
                })) : f(e)
            },
            end() {
                g(), u = d = null
            }
        }
    }

    function he(e, t) {
        e.f(),
            function (e, t) {
                ce(e, 1, 1, (() => {
                    t.delete(e.key)
                }))
            }(e, t)
    }

    function ge(e, t, n, s, r, l, o, a, i, c, u, d) {
        let h = e.length,
            g = l.length,
            m = h;
        const f = {};
        for (; m--;) f[e[m].key] = m;
        const v = [],
            p = new Map,
            b = new Map;
        for (m = g; m--;) {
            const e = d(r, l, m),
                a = n(e);
            let i = o.get(a);
            i ? s && i.p(e, t) : (i = c(a, e), i.c()), p.set(a, v[m] = i), a in f && b.set(a, Math.abs(m - f[a]))
        }
        const y = new Set,
            k = new Set;

        function w(e) {
            ie(e, 1), e.m(a, u), o.set(e.key, e), u = e.first, g--
        }
        for (; h && g;) {
            const t = v[g - 1],
                n = e[h - 1],
                s = t.key,
                r = n.key;
            t === n ? (u = t.first, h--, g--) : p.has(r) ? !o.has(s) || y.has(s) ? w(t) : k.has(r) ? h-- : b.get(s) > b.get(r) ? (k.add(s), w(t)) : (y.add(r), h--) : (i(n, o), h--)
        }
        for (; h--;) {
            const t = e[h];
            p.has(t.key) || i(t, o)
        }
        for (; g;) w(v[g - 1]);
        return v
    }

    function me(e, t, n) {
        const s = e.$$.props[t];
        void 0 !== s && (e.$$.bound[s] = n, n(e.$$.ctx[s]))
    }

    function fe(e) {
        e && e.c()
    }

    function ve(e, t, s, o) {
        const {
            fragment: a,
            on_mount: i,
            on_destroy: c,
            after_update: u
        } = e.$$;
        a && a.m(t, s), o || Y((() => {
            const t = i.map(n).filter(l);
            c ? c.push(...t) : r(t), e.$$.on_mount = []
        })), u.forEach(Y)
    }

    function pe(e, t) {
        const n = e.$$;
        null !== n.fragment && (r(n.on_destroy), n.fragment && n.fragment.d(t), n.on_destroy = n.fragment = null, n.ctx = [])
    }

    function be(e, t) {
        -1 === e.$$.dirty[0] && (J.push(e), X || (X = !0, W.then(te)), e.$$.dirty.fill(0)), e.$$.dirty[t / 31 | 0] |= 1 << t % 31
    }

    function ye(t, n, l, o, a, i, c, u = [-1]) {
        const d = O;
        B(t);
        const h = t.$$ = {
            fragment: null,
            ctx: null,
            props: i,
            update: e,
            not_equal: a,
            bound: s(),
            on_mount: [],
            on_destroy: [],
            on_disconnect: [],
            before_update: [],
            after_update: [],
            context: new Map(n.context || (d ? d.$$.context : [])),
            callbacks: s(),
            dirty: u,
            skip_bound: !1,
            root: n.target || d.$$.root
        };
        c && c(h.root);
        let g = !1;
        if (h.ctx = l ? l(t, n.props || {}, ((e, n, ...s) => {
                const r = s.length ? s[0] : n;
                return h.ctx && a(h.ctx[e], h.ctx[e] = r) && (!h.skip_bound && h.bound[e] && h.bound[e](r), g && be(t, e)), n
            })) : [], h.update(), g = !0, r(h.before_update), h.fragment = !!o && o(h.ctx), n.target) {
            if (n.hydrate) {
                const e = function (e) {
                    return Array.from(e.childNodes)
                }(n.target);
                h.fragment && h.fragment.l(e), e.forEach(_)
            } else h.fragment && h.fragment.c();
            n.intro && ie(t.$$.fragment), ve(t, n.target, n.anchor, n.customElement), te()
        }
        B(d)
    }
    class ke {
        $destroy() {
            pe(this, 1), this.$destroy = e
        }
        $on(e, t) {
            const n = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
            return n.push(t), () => {
                const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
            }
        }
        $set(e) {
            var t;
            this.$$set && (t = e, 0 !== Object.keys(t).length) && (this.$$.skip_bound = !0, this.$$set(e), this.$$.skip_bound = !1)
        }
    }
    const we = [];

    function $e(t, n = e) {
        let s;
        const r = new Set;

        function l(e) {
            if (o(t, e) && (t = e, s)) {
                const e = !we.length;
                for (const e of r) e[1](), we.push(e, t);
                if (e) {
                    for (let e = 0; e < we.length; e += 2) we[e][0](we[e + 1]);
                    we.length = 0
                }
            }
        }
        return {
            set: l,
            update: function (e) {
                l(e(t))
            },
            subscribe: function (o, a = e) {
                const i = [o, a];
                return r.add(i), 1 === r.size && (s = n(l) || e), o(t), () => {
                    r.delete(i), 0 === r.size && (s(), s = null)
                }
            }
        }
    }
    const xe = (ze = new Date, Math.floor((ze - new Date(ze.getFullYear(), 0, 0)) / 1e3 / 60 / 60 / 24));
    var ze;
    const _e = JSON.parse('{"18":"wrike","19":"agile","20":"avoid","21":"chart","22":"gantt","23":"brief","24":"burst","25":"value","26":"capex","27":"study","28":"phase","29":"fixed","30":"float","31":"issue","32":"merge","33":"prism","34":"rasci","35":"scope","36":"scrum","37":"slack","38":"cycle","39":"start","40":"story","41":"limit", "42":"model"}')[xe],
        Ce = (e, t, n = !1) => {
            let s = localStorage.getItem(e) || t,
                r = $e("true" === s || n && void 0 === s);
            return r.subscribe((t => localStorage.setItem(e, t))), r
        },
        Me = (e, t) => {
            let n = JSON.parse(localStorage.getItem(e) || "{}"),
                s = $e(Object.keys(n).length ? n : t);
            return s.subscribe((t => localStorage.setItem(e, JSON.stringify(t)))), s
        },
        qe = e => {
            const t = JSON.stringify({
                gamesPlayed: 0,
                wins: 0,
                currentStreak: 0,
                maxStreak: 0,
                lastGameNumber: -1,
                currentGameNumber: -1,
                lastGame: 0,
                scores: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0
                }
            });
            let n = $e(JSON.parse(localStorage.getItem(e) || t));
            return n.subscribe((t => localStorage.setItem(e, JSON.stringify(t)))), n
        },
        je = (e, t) => {
            let n = $e(JSON.parse(localStorage.getItem(e) || t));
            return n.subscribe((t => localStorage.setItem(e, JSON.stringify(t)))), n
        },
        Se = {
            regular: {
                correct: "#6aaa64",
                present: "#c9b458"
            },
            colorblind: {
                correct: "#f5793a",
                present: "#85c0f9"
            },
            night: {
                background: "#121213",
                button: "#818384",
                text: "#ffffff",
                unselected: "#818384",
                absent: "#3a3a3c",
                border: "#3a3a3c"
            },
            day: {
                background: "#ffffff",
                button: "#d3d6da",
                text: "#000000",
                unselected: "#d3d6da",
                absent: "#787c7e",
                border: "#d3d6da"
            }
        },
        Le = $e(_e),
        Ge = {};
    "abcdefghijklmnopqrstuvwxyz".split("").forEach((e => Ge[e] = {
        letter: e,
        status: "unselected",
        color: Se.unselected
    }));
    const Te = {
            in_progress: Ce("in_progress"),
            night_mode: Ce("night_mode", void 0, window.matchMedia("(max-width: 767px)").matches),
            colorblind_mode: Ce("colorblind_mode"),
            bounce_row: Ce("bounce_row"),
            hard_mode: Ce("hard_mode"),
            last_gameboard: je("last_gameboard", "[]"),
            guess_array: je("guess_array", "[]"),
            current_letters: $e([])
        },
        He = ((e, t) => {
            let n, s;
            return e.subscribe((e => n = e)), t.subscribe((e => s = e)), $e({
                ...Se[n ? "colorblind" : "regular"],
                ...Se[s ? "night" : "day"]
            })
        })(Te.colorblind_mode, Te.night_mode),
        Ee = $e(null),
        Oe = $e(null),
        Ne = $e(xe - 18),
        Pe = Ge,
        Ie = $e(Se),
        De = $e([]),
        Ae = qe("stats"),
        Re = Me("keyboard_letters", Ge),
        Be = (e = "Error", t = !0, n = "default", s = 2e3) => {
            let r;
            De.update((s => (r = (s[s.length - 1] || {
                id: 0
            }).id + 1, [...s, {
                id: r,
                message: e,
                type: n,
                zIdx: t ? 9999 : 1999
            }]))), t && setTimeout((() => De.update((e => e.filter((e => e.id !== r))))), s)
        };

    function Je(t) {
        let n, s, l, o, a, i, c, u, d, h, g, m;
        return {
            c() {
                n = M("header"), s = M("div"), l = M("button"), l.innerHTML = '<game-icon icon="help"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="svelte-o2gzin"><path fill="var(--color-tone-3)" d="M11 18h2v-2h-2v2zm1-16C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-2.21 0-4 1.79-4 4h2c0-1.1.9-2 2-2s2 .9 2 2c0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4z"></path></svg></game-icon>', o = j(), a = M("div"), a.textContent = "WRIKLE", i = j(), c = M("div"), u = M("button"), u.innerHTML = '<game-icon icon="statistics"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="svelte-o2gzin"><path fill="var(--color-tone-3)" d="M16,11V3H8v6H2v12h20V11H16z M10,5h4v14h-4V5z M4,11h4v8H4V11z M20,19h-4v-6h4V19z"></path></svg></game-icon>', d = j(), h = M("button"), h.innerHTML = '<game-icon icon="settings"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" class="svelte-o2gzin"><path fill="var(--color-tone-3)" d="M19.14,12.94c0.04-0.3,0.06-0.61,0.06-0.94c0-0.32-0.02-0.64-0.07-0.94l2.03-1.58c0.18-0.14,0.23-0.41,0.12-0.61 l-1.92-3.32c-0.12-0.22-0.37-0.29-0.59-0.22l-2.39,0.96c-0.5-0.38-1.03-0.7-1.62-0.94L14.4,2.81c-0.04-0.24-0.24-0.41-0.48-0.41 h-3.84c-0.24,0-0.43,0.17-0.47,0.41L9.25,5.35C8.66,5.59,8.12,5.92,7.63,6.29L5.24,5.33c-0.22-0.08-0.47,0-0.59,0.22L2.74,8.87 C2.62,9.08,2.66,9.34,2.86,9.48l2.03,1.58C4.84,11.36,4.8,11.69,4.8,12s0.02,0.64,0.07,0.94l-2.03,1.58 c-0.18,0.14-0.23,0.41-0.12,0.61l1.92,3.32c0.12,0.22,0.37,0.29,0.59,0.22l2.39-0.96c0.5,0.38,1.03,0.7,1.62,0.94l0.36,2.54 c0.05,0.24,0.24,0.41,0.48,0.41h3.84c0.24,0,0.44-0.17,0.47-0.41l0.36-2.54c0.59-0.24,1.13-0.56,1.62-0.94l2.39,0.96 c0.22,0.08,0.47,0,0.59-0.22l1.92-3.32c0.12-0.22,0.07-0.47-0.12-0.61L19.14,12.94z M12,15.6c-1.98,0-3.6-1.62-3.6-3.6 s1.62-3.6,3.6-3.6s3.6,1.62,3.6,3.6S13.98,15.6,12,15.6z"></path></svg></game-icon>', L(l, "id", "help-button"), L(l, "class", "icon svelte-o2gzin"), L(l, "aria-label", "help"), L(s, "class", "menu"), L(a, "class", "title svelte-o2gzin"), L(u, "id", "statistics-button"), L(u, "class", "icon svelte-o2gzin"), L(u, "aria-label", "statistics"), L(h, "id", "settings-button"), L(h, "class", "icon svelte-o2gzin"), L(h, "aria-label", "settings"), L(c, "class", "menu"), L(n, "class", "svelte-o2gzin")
            },
            m(e, r) {
                z(e, n, r), w(n, s), w(s, l), w(n, o), w(n, a), w(n, i), w(n, c), w(c, u), w(c, d), w(c, h), g || (m = [S(l, "click", t[0]), S(u, "click", t[1]), S(h, "click", t[2])], g = !0)
            },
            p: e,
            i: e,
            o: e,
            d(e) {
                e && _(n), g = !1, r(m)
            }
        }
    }

    function Fe(e) {
        return [e => Oe.update((e => "help")), e => Oe.update((e => "statistics")), e => Oe.update((e => "settings"))]
    }
    class Ve extends ke {
        constructor(e) {
            super(), ye(this, e, Fe, Je, o, {})
        }
    }
    const Ue = {
            wrike: !0,
            agile: !0,
            avoid: !0,
            chart: !0,
            gantt: !0,
            brief: !0,
            burst: !0,
            value: !0,
            capex: !0,
            study: !0,
            phase: !0,
            fixed: !0,
            float: !0,
            issue: !0,
            merge: !0,
            prism: !0,
            rasci: !0,
            scope: !0,
            scrum: !0,
            slack: !0,
            cycle: !0,
            start: !0,
            story: !0,
            limit: !0,
            model: !0,
        },
        We = "⌫",
        Xe = {
            row1: "qwertyuiop".split(""),
            row2: "asdfghjkl".split(""),
            row3: ["enter", ..."zxcvbnm".split(""), We]
        };

    function Ye(e, t, n) {
        const s = e.slice();
        return s[41] = t[n], s[43] = n, s
    }

    function Ze(e, t, n) {
        const s = e.slice();
        return s[44] = t[n], s
    }

    function Ke(e) {
        let t, n, s, r, l, o, a, i, c = e[44] + "";
        return {
            c() {
                t = M("button"), n = q(c), L(t, "class", s = g("key " + (["enter", We].includes(e[44]) ? "one-and-a-half" : "")) + " svelte-ym3dyd"), L(t, "name", r = `${e[44]}_key`), t.value = l = e[44], L(t, "data-status", o = e[2][e[44]] ? e[2][e[44]].status : "")
            },
            m(s, r) {
                z(s, t, r), w(t, n), a || (i = S(t, "click", e[9]), a = !0)
            },
            p(e, n) {
                4 & n[0] && o !== (o = e[2][e[44]] ? e[2][e[44]].status : "") && L(t, "data-status", o)
            },
            d(e) {
                e && _(t), a = !1, i()
            }
        }
    }

    function Qe(e) {
        let t, n, s, r, l = 1 === e[43] && function (e) {
                let t;
                return {
                    c() {
                        t = M("div"), L(t, "class", "half svelte-ym3dyd")
                    },
                    m(e, n) {
                        z(e, t, n)
                    },
                    d(e) {
                        e && _(t)
                    }
                }
            }(),
            o = Xe[e[41]],
            a = [];
        for (let t = 0; t < o.length; t += 1) a[t] = Ke(Ze(e, o, t));
        let i = 1 === e[43] && function (e) {
            let t;
            return {
                c() {
                    t = M("div"), L(t, "class", "half svelte-ym3dyd")
                },
                m(e, n) {
                    z(e, t, n)
                },
                d(e) {
                    e && _(t)
                }
            }
        }();
        return {
            c() {
                t = M("div"), l && l.c(), n = j();
                for (let e = 0; e < a.length; e += 1) a[e].c();
                s = j(), i && i.c(), r = j(), L(t, "class", "row svelte-ym3dyd")
            },
            m(e, o) {
                z(e, t, o), l && l.m(t, null), w(t, n);
                for (let e = 0; e < a.length; e += 1) a[e].m(t, null);
                w(t, s), i && i.m(t, null), w(t, r)
            },
            p(e, n) {
                if (516 & n[0]) {
                    let r;
                    for (o = Xe[e[41]], r = 0; r < o.length; r += 1) {
                        const l = Ze(e, o, r);
                        a[r] ? a[r].p(l, n) : (a[r] = Ke(l), a[r].c(), a[r].m(t, s))
                    }
                    for (; r < a.length; r += 1) a[r].d(1);
                    a.length = o.length
                }
            },
            d(e) {
                e && _(t), l && l.d(), C(a, e), i && i.d()
            }
        }
    }

    function et(t) {
        let n, s, r, l, o, a = Object.keys(Xe),
            i = [];
        for (let e = 0; e < a.length; e += 1) i[e] = Qe(Ye(t, a, e));
        return {
            c() {
                n = M("div"), s = M("div");
                for (let e = 0; e < i.length; e += 1) i[e].c();
                L(s, "class", r = "keyboard " + (t[1] ? "night-mode" : "") + " svelte-ym3dyd"), L(n, "id", "keyboard"), H(n, "--correct-color", t[0].correct), H(n, "--present-color", t[0].present), H(n, "--absent-color", t[0].absent), H(n, "--background-color", t[0].background), H(n, "--text-color", t[0].text), H(n, "--unselected-button-color", t[0].button), H(n, "--unselected-text-color", t[1] ? t[0].text : "black"), L(n, "class", "svelte-ym3dyd")
            },
            m(e, r) {
                z(e, n, r), w(n, s);
                for (let e = 0; e < i.length; e += 1) i[e].m(s, null);
                l || (o = S(window, "keydown", t[10]), l = !0)
            },
            p(e, t) {
                if (516 & t[0]) {
                    let n;
                    for (a = Object.keys(Xe), n = 0; n < a.length; n += 1) {
                        const r = Ye(e, a, n);
                        i[n] ? i[n].p(r, t) : (i[n] = Qe(r), i[n].c(), i[n].m(s, null))
                    }
                    for (; n < i.length; n += 1) i[n].d(1);
                    i.length = a.length
                }
                2 & t[0] && r !== (r = "keyboard " + (e[1] ? "night-mode" : "") + " svelte-ym3dyd") && L(s, "class", r), 1 & t[0] && H(n, "--correct-color", e[0].correct), 1 & t[0] && H(n, "--present-color", e[0].present), 1 & t[0] && H(n, "--absent-color", e[0].absent), 1 & t[0] && H(n, "--background-color", e[0].background), 1 & t[0] && H(n, "--text-color", e[0].text), 1 & t[0] && H(n, "--unselected-button-color", e[0].button), 3 & t[0] && H(n, "--unselected-text-color", e[1] ? e[0].text : "black")
            },
            i: e,
            o: e,
            d(e) {
                e && _(n), C(i, e), l = !1, o()
            }
        }
    }

    function tt(e, t, n) {
        let s, r, l, o, i, c, u, d, h, g, f, v, p;
        a(e, Ie, (e => n(13, e))), a(e, Le, (e => n(14, r = e))), a(e, Ae, (e => n(17, i = e))), a(e, Ne, (e => n(18, c = e))), a(e, Oe, (e => n(19, u = e))), a(e, Ee, (e => n(20, d = e))), a(e, He, (e => n(0, f = e))), a(e, Re, (e => n(2, p = e)));
        let {
            currentLetters: b = []
        } = t, {
            in_progress: y,
            last_gameboard: k,
            guess_array: w,
            bounce_row: $,
            hard_mode: x,
            night_mode: z
        } = Te;
        a(e, y, (e => n(12, s = e))), a(e, k, (e => n(16, o = e))), a(e, w, (e => n(15, l = e))), a(e, $, (e => n(21, h = e))), a(e, x, (e => n(22, g = e))), a(e, z, (e => n(1, v = e)));
        const _ = e => {
                b.length < 5 && (n(11, b = [...b, {
                    letter: e.toLowerCase(),
                    status: "pending",
                    animation: "idle"
                }]), O())
            },
            C = () => {
                if (s && 5 === b.length) {
                    if (l.length >= 7) return;
                    if (!q()) return Be("Not in Word List");
                    if (g && !M()) return console.log("not a hard mode guess");
                    const e = T();
                    H(e);
                    let t = G(e) ? "win" : 7 === l.length ? "loss" : "active";
                    "win" === t ? m($, h = l.length - 2, h) : "loss" === t && Be(r.toUpperCase(), !1), "active" !== t && j(t)
                }
            },
            M = () => {
                if (1 === l.length) return !0;
                const e = (e, t, n) => {
                    t = t.toUpperCase();
                    let s = "correct" === n ? `${e+1}${(e=>{let t=e%10;return![1,2,3].includes(t)||[11,12,13].includes(e%100)?"th":1===t?"st":2===t?"nd":"rd"})(e+1)} letter should be ${t}` : `Guess must contain ${t}`;
                    Be(s)
                };
                return l[l.length - 2].every(((t, n, s) => "correct" !== t.status || ((e, t) => b[t].letter === e.letter)(t, n) ? !("present" === t.status && !((e, t) => {
                    let n = e.letter,
                        s = b.filter((e => e.letter === n)),
                        r = t.filter((e => e.letter === n && ["correct", "present"].includes(e.status)));
                    return s.length >= r.length
                })(t, s)) || (e(n, t.letter, "present"), !1) : (e(n, t.letter, "correct"), !1)))
            },
            q = () => {
                let e = b.map((e => e.letter)).join("");
                return Ue.hasOwnProperty(e)
            },
            j = e => {
                m(y, s = !1, s), m(Ee, d = e, d), S(e), L(), setTimeout((() => m(Oe, u = "statistics", u)), 1500)
            },
            S = e => {
                let t;
                m(Ae, i.gamesPlayed++, i), console.log("game_number", c), m(Ae, i.lastGameNumber = c, i), "win" === e ? (m(Ae, i.wins++, i), m(Ae, i.currentStreak++, i), t = l.length - 1, m(Ae, i.scores[t]++, i)) : m(Ae, i.currentStreak = 0, i), m(Ae, i.maxStreak = Math.max(i.currentStreak, i.maxStreak), i), m(Ae, i.lastGame = "win" === e ? t : "X", i)
            },
            L = () => m(k, o = l, o),
            G = e => e.every((e => "correct" === e.status)),
            T = () => {
                const e = N(b);
                return I(e), n(11, b = []), e
            },
            H = e => {
                w.update((t => [...t.slice(0, -1), e, []]))
            },
            E = () => {
                n(11, b = [...b.slice(0, -1)]), O()
            },
            O = () => {
                w.update((e => [...e.slice(0, -1), b]))
            },
            N = e => {
                let t = e.map(((e, t) => {
                    let n = e.letter === r[t] ? "correct" : r.includes(e.letter) ? "present" : "absent";
                    return {
                        letter: e.letter,
                        status: n
                    }
                }));
                return P(t), t
            },
            P = e => {
                let t = {},
                    n = {};
                r.split("").forEach((e => t[e] = (t[e] || 0) + 1)), e.forEach((e => n[e.letter] = (n[e.letter] || 0) + 1)), e.slice().reverse().forEach((e => {
                    let s = e.letter;
                    n[s] > t[s] && "correct" !== e.status && (e.status = "absent", n[s]--)
                }))
            },
            I = e => {
                const t = R(e, "absent"),
                    n = R(e, "present"),
                    s = R(e, "correct");
                Re.update((e => (Object.keys(e).forEach((r => {
                    let l = e[r];
                    D.isAbsent(l, t) && A(l, "absent"), D.isPresent(l, n) && A(l, "present"), D.isCorrect(l, s) && A(l, "correct")
                })), e)))
            },
            D = {
                isAbsent: (e, t) => !["correct", "present"].includes(e.status) && t.includes(e.letter),
                isPresent: (e, t) => "correct" !== e.status && t.includes(e.letter),
                isCorrect: (e, t) => t.includes(e.letter)
            },
            A = (e, t) => e.status = t,
            R = (e, t) => e.filter((e => e.status === t)).map((e => e.letter));
        return e.$$set = e => {
            "currentLetters" in e && n(11, b = e.currentLetters)
        }, [f, v, p, y, k, w, $, x, z, e => {
            if (!s) return;
            const t = e.target.value;
            "enter" === t ? C() : t === We ? E() : t.match(/[a-z]{1}/gi)[0] === t && _(t)
        }, e => {
            s && ("Enter" === e.key ? (e.preventDefault(), C()) : ["Delete", "Backspace"].includes(e.key) ? E() : 1 === e.key.length && e.key.match(/[a-z]{1}/gi) && _(e.key))
        }, b]
    }
    class nt extends ke {
        constructor(e) {
            super(), ye(this, e, tt, et, o, {
                currentLetters: 11
            }, null, [-1, -1])
        }
    }

    function st(e, t, n) {
        const s = e.slice();
        return s[5] = t[n], s[7] = n, s
    }

    function rt(e, t, n) {
        const s = e.slice();
        return s[5] = t[n], s[9] = n, s
    }

    function lt(e) {
        let t, n, s, r, l = (e[2][e[7]] && e[2][e[7]][e[9]] ? e[2][e[7]][e[9]].letter : "") + "";
        return {
            c() {
                t = M("div"), n = q(l), L(t, "class", "tile svelte-13wn1a1"), L(t, "data-status", s = e[2][e[7]] && e[2][e[7]][e[9]] ? e[2][e[7]][e[9]].status : ""), L(t, "data-animation", r = e[2][e[7]] && e[2][e[7]][e[9]] ? e[2][e[7]][e[9]].animation : "idle")
            },
            m(e, s) {
                z(e, t, s), w(t, n)
            },
            p(e, o) {
                4 & o && l !== (l = (e[2][e[7]] && e[2][e[7]][e[9]] ? e[2][e[7]][e[9]].letter : "") + "") && T(n, l), 4 & o && s !== (s = e[2][e[7]] && e[2][e[7]][e[9]] ? e[2][e[7]][e[9]].status : "") && L(t, "data-status", s), 4 & o && r !== (r = e[2][e[7]] && e[2][e[7]][e[9]] ? e[2][e[7]][e[9]].animation : "idle") && L(t, "data-animation", r)
            },
            d(e) {
                e && _(t)
            }
        }
    }

    function ot(e) {
        let t, n, s, r = Array(5),
            l = [];
        for (let t = 0; t < r.length; t += 1) l[t] = lt(rt(e, r, t));
        return {
            c() {
                t = M("div");
                for (let e = 0; e < l.length; e += 1) l[e].c();
                n = j(), L(t, "class", s = "row " + (e[7] === e[1] ? "win" : "") + " svelte-13wn1a1")
            },
            m(e, s) {
                z(e, t, s);
                for (let e = 0; e < l.length; e += 1) l[e].m(t, null);
                w(t, n)
            },
            p(e, o) {
                if (4 & o) {
                    let s;
                    for (r = Array(5), s = 0; s < r.length; s += 1) {
                        const a = rt(e, r, s);
                        l[s] ? l[s].p(a, o) : (l[s] = lt(a), l[s].c(), l[s].m(t, n))
                    }
                    for (; s < l.length; s += 1) l[s].d(1);
                    l.length = r.length
                }
                2 & o && s !== (s = "row " + (e[7] === e[1] ? "win" : "") + " svelte-13wn1a1") && L(t, "class", s)
            },
            d(e) {
                e && _(t), C(l, e)
            }
        }
    }

    function at(t) {
        let n, s, r = Array(6),
            l = [];
        for (let e = 0; e < r.length; e += 1) l[e] = ot(st(t, r, e));
        return {
            c() {
                n = M("div"), s = M("div");
                for (let e = 0; e < l.length; e += 1) l[e].c();
                L(s, "class", "board svelte-13wn1a1"), L(n, "id", "board-container"), H(n, "--correct-color", t[0].correct), H(n, "--present-color", t[0].present), H(n, "--absent-color", t[0].absent), H(n, "--background-color", t[0].background), H(n, "--text-color", t[0].text), H(n, "--border-color", t[0].border), L(n, "class", "svelte-13wn1a1")
            },
            m(e, t) {
                z(e, n, t), w(n, s);
                for (let e = 0; e < l.length; e += 1) l[e].m(s, null)
            },
            p(e, [t]) {
                if (6 & t) {
                    let n;
                    for (r = Array(6), n = 0; n < r.length; n += 1) {
                        const o = st(e, r, n);
                        l[n] ? l[n].p(o, t) : (l[n] = ot(o), l[n].c(), l[n].m(s, null))
                    }
                    for (; n < l.length; n += 1) l[n].d(1);
                    l.length = r.length
                }
                1 & t && H(n, "--correct-color", e[0].correct), 1 & t && H(n, "--present-color", e[0].present), 1 & t && H(n, "--absent-color", e[0].absent), 1 & t && H(n, "--background-color", e[0].background), 1 & t && H(n, "--text-color", e[0].text), 1 & t && H(n, "--border-color", e[0].border)
            },
            i: e,
            o: e,
            d(e) {
                e && _(n), C(l, e)
            }
        }
    }

    function it(e, t, n) {
        let s, r, l;
        a(e, He, (e => n(0, s = e)));
        let {
            bounce_row: o,
            guess_array: i
        } = Te;
        return a(e, o, (e => n(1, r = e))), a(e, i, (e => n(2, l = e))), [s, r, l, o, i]
    }
    class ct extends ke {
        constructor(e) {
            super(), ye(this, e, it, at, o, {})
        }
    }

    function ut(e) {
        let t, n, s, r, o, a, c;
        const g = e[3].default,
            m = i(g, e, e[2], null),
            f = m || function (e) {
                let t;
                return {
                    c() {
                        t = q(e[1])
                    },
                    m(e, n) {
                        z(e, t, n)
                    },
                    p(e, n) {
                        2 & n && T(t, e[1])
                    },
                    d(e) {
                        e && _(t)
                    }
                }
            }(e);
        return {
            c() {
                t = M("header"), n = M("h1"), f && f.c(), s = j(), r = M("game-icon"), r.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="var(--color-tone-3)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>', L(n, "class", "svelte-bv0qp8"), G(r, "icon", "close"), G(r, "class", "svelte-bv0qp8"), L(t, "class", "svelte-bv0qp8")
            },
            m(i, u) {
                z(i, t, u), w(t, n), f && f.m(n, null), w(t, s), w(t, r), o = !0, a || (c = S(r, "click", (function () {
                    l(e[0]) && e[0].apply(this, arguments)
                })), a = !0)
            },
            p(t, [n]) {
                e = t, m ? m.p && (!o || 4 & n) && d(m, g, e, e[2], o ? u(g, e[2], n, null) : h(e[2]), null) : f && f.p && (!o || 2 & n) && f.p(e, o ? n : -1)
            },
            i(e) {
                o || (ie(f, e), o = !0)
            },
            o(e) {
                ce(f, e), o = !1
            },
            d(e) {
                e && _(t), f && f.d(e), a = !1, c()
            }
        }
    }

    function dt(e, t, n) {
        let {
            $$slots: s = {},
            $$scope: r
        } = t, {
            onClose: l
        } = t, {
            title: o
        } = t;
        return e.$$set = e => {
            "onClose" in e && n(0, l = e.onClose), "title" in e && n(1, o = e.title), "$$scope" in e && n(2, r = e.$$scope)
        }, [l, o, r, s]
    }
    class ht extends ke {
        constructor(e) {
            super(), ye(this, e, dt, ut, o, {
                onClose: 0,
                title: 1
            })
        }
    }

    function gt(t) {
        let n, s, r, l, o, a, i, c, u, d, h, g, m, f, v, p, b, y, k, $;
        return {
            c() {
                n = M("section"), s = M("div"), r = M("p"), r.innerHTML = "Guess the <strong>Wrikle</strong> in 6 tries.", l = j(), o = M("p"), o.innerHTML = '<strong>WRIKLE</strong> is a Wrike and project management-themed variant of the viral word game <a href="https://www.powerlanguage.co.uk/wordle/" target="_blank">Wordle</a>.', a = j(), i = M("p"), i.innerHTML = "Each guess must be a valid 5 letter word. Hit the enter button to submit.", c = j(), u = M("p"), u.textContent = "After each guess, the color of the tiles will change to show how close your guess was to the target name.", d = j(), h = M("div"), g = M("p"), g.innerHTML = "<strong>Examples</strong>", m = j(), f = M("div"), f.innerHTML = '<div class="row"><game-tile letter="z" evaluation="correct" reveal="" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="correct" data-animation="idle">w</div></game-tile> \n          <game-tile letter="w" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="tbd" data-animation="idle">o</div></game-tile> \n          <game-tile letter="o" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="tbd" data-animation="idle">o</div></game-tile> \n          <game-tile letter="o" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="tbd" data-animation="idle">d</div></game-tile> \n          <game-tile letter="d" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="tbd" data-animation="idle">s</div></game-tile></div> \n        <p>The letter <strong>W</strong> is in the word and in the correct spot.</p>', v = j(), p = M("div"), p.innerHTML = '<div class="row"><game-tile letter="s" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="tbd" data-animation="idle">s</div></game-tile> \n          <game-tile letter="e" evaluation="present" reveal="" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="present" data-animation="idle">e</div></game-tile> \n          <game-tile letter="y" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="tbd" data-animation="idle">e</div></game-tile> \n          <game-tile letter="m" evaluation="absent" reveal="" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="absent" data-animation="idle">m</div></game-tile> \n          <game-tile letter="s" class="svelte-19dqvls"><div class="tile svelte-19dqvls" data-state="tbd" data-animation="idle">s</div></game-tile></div> \n        <p>The letter <strong>E</strong> is in the word but in the wrong spot.</p> \n        <p>The letter <strong>M</strong> is not in the word in any spot.</p>', b = j(), y = M("p"), y.innerHTML = "<strong>A new Wrikle will be available each day!<strong></strong></strong>", k = M("strong"), k.innerHTML = "<strong></strong>", $ = M("strong"), $.innerHTML = "<strong></strong>", L(f, "class", "example svelte-19dqvls"), L(p, "class", "example svelte-19dqvls"), L(h, "class", "examples svelte-19dqvls"), H(h, "--color-correct", t[0].correct), H(h, "--color-present", t[0].present), H(h, "--color-absent", t[0].absent), L(s, "class", "instructions svelte-19dqvls")
            },
            m(e, t) {
                z(e, n, t), w(n, s), w(s, r), w(s, l), w(s, o), w(s, a), w(s, i), w(s, c), w(s, u), w(s, d), w(s, h), w(h, g), w(h, m), w(h, f), w(h, v), w(h, p), w(s, b), w(s, y), w(s, k), w(n, $)
            },
            p(e, [t]) {
                1 & t && H(h, "--color-correct", e[0].correct), 1 & t && H(h, "--color-present", e[0].present), 1 & t && H(h, "--color-absent", e[0].absent)
            },
            i: e,
            o: e,
            d(e) {
                e && _(n)
            }
        }
    }

    function mt(e, t, n) {
        let s;
        return a(e, He, (e => n(0, s = e))), [s]
    }
    class ft extends ke {
        constructor(e) {
            super(), ye(this, e, mt, gt, o, {})
        }
    }

    function vt(t) {
        let n, s, l, o, a, i;
        return {
            c() {
                n = M("label"), s = M("input"), l = j(), o = M("span"), L(s, "type", "checkbox"), s.disabled = t[1], L(s, "class", "svelte-1mi9dgn"), L(o, "class", "slider svelte-1mi9dgn"), H(o, "--correct-color", t[2].correct), L(n, "class", "switch svelte-1mi9dgn")
            },
            m(e, r) {
                z(e, n, r), w(n, s), s.checked = t[0], w(n, l), w(n, o), a || (i = [S(s, "change", t[6]), S(o, "click", t[4])], a = !0)
            },
            p(e, [t]) {
                2 & t && (s.disabled = e[1]), 1 & t && (s.checked = e[0]), 4 & t && H(o, "--correct-color", e[2].correct)
            },
            i: e,
            o: e,
            d(e) {
                e && _(n), a = !1, r(i)
            }
        }
    }

    function pt(e, t, n) {
        let s, r;
        a(e, He, (e => n(2, r = e)));
        let {
            checked: l = !1
        } = t, {
            disabled: o = !1
        } = t, {
            colorblind_mode: i
        } = Te;
        a(e, i, (e => n(5, s = e)));
        return e.$$set = e => {
            "checked" in e && n(0, l = e.checked), "disabled" in e && n(1, o = e.disabled)
        }, e.$$.update = () => {
            e.$$.dirty
        }, [l, o, r, i, () => {
            o && Be("Hard mode can only be toggled at the start of a round")
        }, s, function () {
            l = this.checked, n(0, l)
        }]
    }
    class bt extends ke {
        constructor(e) {
            super(), ye(this, e, pt, vt, o, {
                checked: 0,
                disabled: 1
            })
        }
    }

    function yt(e) {
        let t, n, s, r, l, o, a, i, c, u, d, h, g, m, f, v, p, b, y, k, $, x, C, q;

        function S(t) {
            e[9](t)
        }
        let G = {
            disabled: e[8]
        };

        function T(t) {
            e[10](t)
        }
        void 0 !== e[2] && (G.checked = e[2]), o = new bt({
            props: G
        }), F.push((() => me(o, "checked", S)));
        let H = {};

        function E(t) {
            e[11](t)
        }
        void 0 !== e[1] && (H.checked = e[1]), g = new bt({
            props: H
        }), F.push((() => me(g, "checked", T)));
        let O = {};
        return void 0 !== e[0] && (O.checked = e[0]), k = new bt({
            props: O
        }), F.push((() => me(k, "checked", E))), {
            c() {
                t = M("section"), n = M("div"), s = M("div"), s.innerHTML = '<div class="title svelte-cmdoqi">Wrike Mode</div> \n      <div class="description svelte-cmdoqi">Any revealed hints must be used in subsequent guesses</div>', r = j(), l = M("div"), fe(o.$$.fragment), i = j(), c = M("div"), u = M("div"), u.innerHTML = '<div class="title svelte-cmdoqi">Color Blind Mode</div> \n      <div class="description svelte-cmdoqi">High contrast colors</div>', d = j(), h = M("div"), fe(g.$$.fragment), f = j(), v = M("div"), p = M("div"), p.innerHTML = '<div class="title svelte-cmdoqi">Night Mode</div> \n      <div class="description svelte-cmdoqi">To save your eyes</div>', b = j(), y = M("div"), fe(k.$$.fragment), x = j(), C = M("section"), C.innerHTML = '<div class="setting svelte-cmdoqi"><div class="text svelte-cmdoqi"><div class="title svelte-cmdoqi">Comments | Issues?</div></div> \n      <div class="control"><a href="https://twitter.com/jaasiaat" target="_blank" title="@jaasiaat" class="svelte-cmdoqi">Twitter</a></div></div>', L(s, "class", "text svelte-cmdoqi"), L(l, "class", "control"), L(n, "class", "setting svelte-cmdoqi"), L(u, "class", "text svelte-cmdoqi"), L(h, "class", "control"), L(c, "class", "setting svelte-cmdoqi"), L(p, "class", "text svelte-cmdoqi"), L(y, "class", "control"), L(v, "class", "setting svelte-cmdoqi")
            },
            m(e, a) {
                z(e, t, a), w(t, n), w(n, s), w(n, r), w(n, l), ve(o, l, null), w(t, i), w(t, c), w(c, u), w(c, d), w(c, h), ve(g, h, null), w(t, f), w(t, v), w(v, p), w(v, b), w(v, y), ve(k, y, null), w(t, x), w(t, C), q = !0
            },
            p(e, [t]) {
                const n = {};
                !a && 4 & t && (a = !0, n.checked = e[2], Z((() => a = !1))), o.$set(n);
                const s = {};
                !m && 2 & t && (m = !0, s.checked = e[1], Z((() => m = !1))), g.$set(s);
                const r = {};
                !$ && 1 & t && ($ = !0, r.checked = e[0], Z((() => $ = !1))), k.$set(r)
            },
            i(e) {
                q || (ie(o.$$.fragment, e), ie(g.$$.fragment, e), ie(k.$$.fragment, e), q = !0)
            },
            o(e) {
                ce(o.$$.fragment, e), ce(g.$$.fragment, e), ce(k.$$.fragment, e), q = !1
            },
            d(e) {
                e && _(t), pe(o), pe(g), pe(k)
            }
        }
    }

    function kt(e, t, n) {
        let s, r, l, o, i, {
            night_mode: c,
            colorblind_mode: u,
            in_progress: d,
            guess_array: h,
            hard_mode: g
        } = Te;
        a(e, c, (e => n(0, s = e))), a(e, u, (e => n(1, r = e))), a(e, d, (e => n(12, l = e))), a(e, h, (e => n(13, o = e))), a(e, g, (e => n(2, i = e)));
        let m = 0 !== o.length && l;
        return e.$$.update = () => {
            var t;
            2 & e.$$.dirty && (t = r, He.update((e => Object.assign(e, Se[t ? "colorblind" : "regular"])))), 1 & e.$$.dirty && ((e, t) => {
                t.update((t => Object.assign(t, Se[e ? "night" : "day"])))
            })(s, He)
        }, [s, r, i, c, u, d, h, g, m, function (e) {
            i = e, g.set(i)
        }, function (e) {
            r = e, u.set(r)
        }, function (e) {
            s = e, c.set(s)
        }]
    }
    class wt extends ke {
        constructor(e) {
            super(), ye(this, e, kt, yt, o, {})
        }
    }

    function $t(e) {
        let t, n;
        return t = new wt({}), {
            c() {
                fe(t.$$.fragment)
            },
            m(e, s) {
                ve(t, e, s), n = !0
            },
            i(e) {
                n || (ie(t.$$.fragment, e), n = !0)
            },
            o(e) {
                ce(t.$$.fragment, e), n = !1
            },
            d(e) {
                pe(t, e)
            }
        }
    }

    function xt(e) {
        let t, n;
        return t = new ft({}), {
            c() {
                fe(t.$$.fragment)
            },
            m(e, s) {
                ve(t, e, s), n = !0
            },
            i(e) {
                n || (ie(t.$$.fragment, e), n = !0)
            },
            o(e) {
                ce(t.$$.fragment, e), n = !1
            },
            d(e) {
                pe(t, e)
            }
        }
    }

    function zt(e) {
        let t, n, s, r, l, o, a, i;
        s = new ht({
            props: {
                title: e[3],
                onClose: e[1]
            }
        });
        const c = [xt, $t],
            u = [];

        function d(e, t) {
            return "help" === e[0] ? 0 : "settings" === e[0] ? 1 : -1
        }
        return ~(o = d(e)) && (a = u[o] = c[o](e)), {
            c() {
                t = M("div"), n = M("div"), fe(s.$$.fragment), r = j(), l = M("div"), a && a.c(), L(l, "class", "container svelte-152l0uh"), L(n, "class", "content svelte-152l0uh"), L(t, "class", "overlay svelte-152l0uh"), H(t, "--background-color", e[2].background)
            },
            m(e, a) {
                z(e, t, a), w(t, n), ve(s, n, null), w(n, r), w(n, l), ~o && u[o].m(l, null), i = !0
            },
            p(e, [n]) {
                const r = {};
                2 & n && (r.onClose = e[1]), s.$set(r);
                let h = o;
                o = d(e), o !== h && (a && (oe(), ce(u[h], 1, 1, (() => {
                    u[h] = null
                })), ae()), ~o ? (a = u[o], a || (a = u[o] = c[o](e), a.c()), ie(a, 1), a.m(l, null)) : a = null), (!i || 4 & n) && H(t, "--background-color", e[2].background)
            },
            i(e) {
                i || (ie(s.$$.fragment, e), ie(a), i = !0)
            },
            o(e) {
                ce(s.$$.fragment, e), ce(a), i = !1
            },
            d(e) {
                e && _(t), pe(s), ~o && u[o].d()
            }
        }
    }

    function _t(e, t, n) {
        let s;
        a(e, He, (e => n(2, s = e)));
        let {
            overlay: r
        } = t, {
            onClose: l
        } = t, o = "help" === r ? "How to Play" : r;
        return e.$$set = e => {
            "overlay" in e && n(0, r = e.overlay), "onClose" in e && n(1, l = e.onClose)
        }, [r, l, s, o]
    }
    class Ct extends ke {
        constructor(e) {
            super(), ye(this, e, _t, zt, o, {
                overlay: 0,
                onClose: 1
            })
        }
    }

    function Mt(t) {
        let n, s, r, l;
        return {
            c() {
                n = M("div"), s = M("button"), s.innerHTML = 'Share <game-icon icon="share" class="svelte-vm6c62"><svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="var(--white)" d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92c0-1.61-1.31-2.92-2.92-2.92zM18 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM6 13c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm12 7.02c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"></path></svg></game-icon>', L(s, "id", "share-button"), L(s, "class", "svelte-vm6c62"), L(n, "class", "share svelte-vm6c62"), H(n, "--key-bg-correct", t[0].correct)
            },
            m(e, o) {
                z(e, n, o), w(n, s), r || (l = S(s, "click", t[6]), r = !0)
            },
            p(e, [t]) {
                1 & t && H(n, "--key-bg-correct", e[0].correct)
            },
            i: e,
            o: e,
            d(e) {
                e && _(n), r = !1, l()
            }
        }
    }

    function qt(e, t, n) {
        let s, r, l, o, i, c, u, d;
        a(e, Ae, (e => n(7, s = e))), a(e, Ee, (e => n(10, o = e))), a(e, He, (e => n(0, d = e)));
        let {
            in_progress: h,
            colorblind_mode: g,
            last_gameboard: m,
            hard_mode: f,
            night_mode: v
        } = Te;
        a(e, h, (e => n(9, l = e))), a(e, g, (e => n(11, i = e))), a(e, m, (e => n(12, c = e))), a(e, f, (e => n(8, r = e))), a(e, v, (e => n(13, u = e)));
        const p = u ? "⬛" : "⬜",
            b = {
                regular: {
                    correct: "🟩",
                    present: "🟨",
                    absent: p
                },
                colorblind: {
                    correct: "🟧",
                    present: "🟦",
                    absent: p
                }
            };
        return console.log(s), [d, h, g, m, f, v, e => {
            let t = c.slice(0, -1).map((e => e.map((e => b[i ? "colorblind" : "regular"][e.status])).join(""))),
                n = "loss" === o ? "X" : t.length,
                a = `Wrikle ${l?s.lastGameNumber-1:s.lastGameNumber} ${n}/6${r?"*":""}🏒\nhttps://gordle.herokuapp.com\n\n${t.join("\n")}\n`;
            window.matchMedia("(max-width: 767px)").matches && -1 === navigator.userAgent.toLowerCase().indexOf("firefox") && navigator.share ? navigator.share({
                title: `Wrikle ${s.lastGameNumber}`,
                text: a
            }).catch((() => {
                navigator.clipboard.writeText(a).then((() => Be("Copied to Clipboard!")))
            })) : navigator.clipboard.writeText(a).then((() => Be("Copied to Clipboard!")))
        }]
    }
    class jt extends ke {
        constructor(e) {
            super(), ye(this, e, qt, Mt, o, {})
        }
    }

    function St(t) {
        let n, s = (t[0] ? t[0] : "00:00:00") + "";
        return {
            c() {
                n = q(s)
            },
            m(e, t) {
                z(e, n, t)
            },
            p(e, [t]) {
                1 & t && s !== (s = (e[0] ? e[0] : "00:00:00") + "") && T(n, s)
            },
            i: e,
            o: e,
            d(e) {
                e && _(n)
            }
        }
    }

    function Lt(e, t, n) {
        const s = () => {
            const e = e => e.toString().padStart(2, "0");
            let t = (new Date).setHours(24, 0, 0, 0) - new Date,
                n = Math.floor(t % 864e5 / 36e5),
                s = Math.floor(t % 36e5 / 6e4),
                r = Math.floor(t % 6e4 / 1e3);
            return `${e(n)}:${e(s)}:${e(r)}`
        };
        let r = s(),
            l = setInterval((() => {
                (new Date).setHours(24, 0, 0, 0) - new Date <= 0 && clearInterval(l), n(0, r = s())
            }), 1e3);
        return [r]
    }
    class Gt extends ke {
        constructor(e) {
            super(), ye(this, e, Lt, St, o, {})
        }
    }

    function Tt(e) {
        let t, n, s, r, l, o, a, i, c, u, d, h, g, m, f, v, p, b, y, k, $, x, C, S, G, E, O, N, P, I, D, A, R, B, J, F, V, U, W, X, Y, Z, K, Q, ee, te, ne, se, re, le, oe, ae, ie, ce = e[1].scores[1] + "",
            ue = e[1].scores[2] + "",
            de = e[1].scores[3] + "",
            he = e[1].scores[4] + "",
            ge = e[1].scores[5] + "",
            me = e[1].scores[6] + "";
        return {
            c() {
                t = M("div"), n = M("div"), n.textContent = "1", s = j(), r = M("div"), l = M("div"), o = M("div"), a = q(ce), c = j(), u = M("div"), d = M("div"), d.textContent = "2", h = j(), g = M("div"), m = M("div"), f = M("div"), v = q(ue), b = j(), y = M("div"), k = M("div"), k.textContent = "3", $ = j(), x = M("div"), C = M("div"), S = M("div"), G = q(de), O = j(), N = M("div"), P = M("div"), P.textContent = "4", I = j(), D = M("div"), A = M("div"), R = M("div"), B = q(he), F = j(), V = M("div"), U = M("div"), U.textContent = "5", W = j(), X = M("div"), Y = M("div"), Z = M("div"), K = q(ge), ee = j(), te = M("div"), ne = M("div"), ne.textContent = "6", se = j(), re = M("div"), le = M("div"), oe = M("div"), ae = q(me), L(n, "class", "guess"), L(o, "class", "num-guesses svelte-1c5hw95"), L(l, "class", i = "graph-bar align-right " + (1 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95"), H(l, "width", e[5](e[1].scores[1]) + "%"), L(r, "class", "graph svelte-1c5hw95"), L(t, "class", "graph-container svelte-1c5hw95"), L(d, "class", "guess"), L(f, "class", "num-guesses svelte-1c5hw95"), L(m, "class", p = "graph-bar align-right " + (2 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95"), H(m, "width", e[5](e[1].scores[2]) + "%"), L(g, "class", "graph svelte-1c5hw95"), L(u, "class", "graph-container svelte-1c5hw95"), L(k, "class", "guess"), L(S, "class", "num-guesses svelte-1c5hw95"), L(C, "class", E = "graph-bar align-right " + (3 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95"), H(C, "width", e[5](e[1].scores[3]) + "%"), H(C, "--highlight-color", e[0]), L(x, "class", "graph svelte-1c5hw95"), L(y, "class", "graph-container svelte-1c5hw95"), L(P, "class", "guess"), L(R, "class", "num-guesses svelte-1c5hw95"), L(A, "class", J = "graph-bar align-right " + (4 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95"), H(A, "width", e[5](e[1].scores[4]) + "%"), L(D, "class", "graph svelte-1c5hw95"), L(N, "class", "graph-container svelte-1c5hw95"), L(U, "class", "guess"), L(Z, "class", "num-guesses svelte-1c5hw95"), L(Y, "class", Q = "graph-bar align-right " + (5 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95"), H(Y, "width", e[5](e[1].scores[5]) + "%"), L(X, "class", "graph svelte-1c5hw95"), L(V, "class", "graph-container svelte-1c5hw95"), L(ne, "class", "guess"), L(oe, "class", "num-guesses svelte-1c5hw95"), L(le, "class", ie = "graph-bar align-right " + (6 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95"), H(le, "width", e[5](e[1].scores[6]) + "%"), L(re, "class", "graph svelte-1c5hw95"), L(te, "class", "graph-container svelte-1c5hw95")
            },
            m(e, i) {
                z(e, t, i), w(t, n), w(t, s), w(t, r), w(r, l), w(l, o), w(o, a), z(e, c, i), z(e, u, i), w(u, d), w(u, h), w(u, g), w(g, m), w(m, f), w(f, v), z(e, b, i), z(e, y, i), w(y, k), w(y, $), w(y, x), w(x, C), w(C, S), w(S, G), z(e, O, i), z(e, N, i), w(N, P), w(N, I), w(N, D), w(D, A), w(A, R), w(R, B), z(e, F, i), z(e, V, i), w(V, U), w(V, W), w(V, X), w(X, Y), w(Y, Z), w(Z, K), z(e, ee, i), z(e, te, i), w(te, ne), w(te, se), w(te, re), w(re, le), w(le, oe), w(oe, ae)
            },
            p(e, t) {
                2 & t && ce !== (ce = e[1].scores[1] + "") && T(a, ce), 2 & t && i !== (i = "graph-bar align-right " + (1 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95") && L(l, "class", i), 2 & t && H(l, "width", e[5](e[1].scores[1]) + "%"), 2 & t && ue !== (ue = e[1].scores[2] + "") && T(v, ue), 2 & t && p !== (p = "graph-bar align-right " + (2 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95") && L(m, "class", p), 2 & t && H(m, "width", e[5](e[1].scores[2]) + "%"), 2 & t && de !== (de = e[1].scores[3] + "") && T(G, de), 2 & t && E !== (E = "graph-bar align-right " + (3 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95") && L(C, "class", E), 2 & t && H(C, "width", e[5](e[1].scores[3]) + "%"), 1 & t && H(C, "--highlight-color", e[0]), 2 & t && he !== (he = e[1].scores[4] + "") && T(B, he), 2 & t && J !== (J = "graph-bar align-right " + (4 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95") && L(A, "class", J), 2 & t && H(A, "width", e[5](e[1].scores[4]) + "%"), 2 & t && ge !== (ge = e[1].scores[5] + "") && T(K, ge), 2 & t && Q !== (Q = "graph-bar align-right " + (5 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95") && L(Y, "class", Q), 2 & t && H(Y, "width", e[5](e[1].scores[5]) + "%"), 2 & t && me !== (me = e[1].scores[6] + "") && T(ae, me), 2 & t && ie !== (ie = "graph-bar align-right " + (6 === e[1].lastGame ? "highlight" : "") + " svelte-1c5hw95") && L(le, "class", ie), 2 & t && H(le, "width", e[5](e[1].scores[6]) + "%")
            },
            d(e) {
                e && _(t), e && _(c), e && _(u), e && _(b), e && _(y), e && _(O), e && _(N), e && _(F), e && _(V), e && _(ee), e && _(te)
            }
        }
    }

    function Ht(t) {
        let n;
        return {
            c() {
                n = M("div"), n.textContent = "No Data", L(n, "class", "no-data svelte-1c5hw95")
            },
            m(e, t) {
                z(e, n, t)
            },
            p: e,
            d(e) {
                e && _(n)
            }
        }
    }

    function Et(e) {
        let t, n, s, r, l, o, a, i, c, u, d, h, g;
        return u = new Gt({}), h = new jt({}), {
            c() {
                t = M("div"), n = M("div"), s = M("h1"), s.textContent = "Next WRIKLE", r = j(), l = M("div"), o = M("div"), a = M("div"), i = M("countdown-timer"), c = M("div"), fe(u.$$.fragment), d = j(), fe(h.$$.fragment), L(s, "class", "svelte-1c5hw95"), L(c, "id", "timer"), L(a, "class", "statistic timer svelte-1c5hw95"), L(o, "class", "statistic-container svelte-1c5hw95"), L(l, "id", "timer"), L(n, "class", "countdown svelte-1c5hw95"), L(t, "class", "footer svelte-1c5hw95")
            },
            m(e, m) {
                z(e, t, m), w(t, n), w(n, s), w(n, r), w(n, l), w(l, o), w(o, a), w(a, i), w(i, c), ve(u, c, null), w(t, d), ve(h, t, null), g = !0
            },
            i(e) {
                g || (ie(u.$$.fragment, e), ie(h.$$.fragment, e), g = !0)
            },
            o(e) {
                ce(u.$$.fragment, e), ce(h.$$.fragment, e), g = !1
            },
            d(e) {
                e && _(t), pe(u), pe(h)
            }
        }
    }

    function Ot(e) {
        let t, n, s, r, l, o, a, i, c, u, d, h, g, m, f, v, p, b, y, k, $, x, C, S, G, E, O, N, P, I, D, A, R, B = e[1].gamesPlayed + "",
            J = (0 !== e[1].wins ? (100 * e[1].wins / e[1].gamesPlayed).toFixed(0) : 0) + "",
            F = e[1].currentStreak + "",
            V = e[1].maxStreak + "";

        function U(e, t) {
            return 0 === e[1].gamesPlayed ? Ht : Tt
        }
        let W = U(e),
            X = W(e),
            Y = !e[2] && Et();
        return {
            c() {
                t = M("div"), n = M("h1"), n.textContent = "Statistics", s = j(), r = M("div"), l = M("div"), o = M("div"), a = q(B), i = j(), c = M("div"), c.textContent = "Played", u = j(), d = M("div"), h = M("div"), g = q(J), m = j(), f = M("div"), f.textContent = "Win %", v = j(), p = M("div"), b = M("div"), y = q(F), k = j(), $ = M("div"), $.textContent = "Current Streak", x = j(), C = M("div"), S = M("div"), G = q(V), E = j(), O = M("div"), O.textContent = "Max Streak", N = j(), P = M("h1"), P.textContent = "Guess Distribution", I = j(), D = M("div"), X.c(), A = j(), Y && Y.c(), L(n, "class", "svelte-1c5hw95"), L(o, "class", "statistic svelte-1c5hw95"), L(c, "class", "label svelte-1c5hw95"), L(l, "class", "statistic-container svelte-1c5hw95"), L(h, "class", "statistic svelte-1c5hw95"), L(f, "class", "label svelte-1c5hw95"), L(d, "class", "statistic-container svelte-1c5hw95"), L(b, "class", "statistic svelte-1c5hw95"), L($, "class", "label svelte-1c5hw95"), L(p, "class", "statistic-container svelte-1c5hw95"), L(S, "class", "statistic svelte-1c5hw95"), L(O, "class", "label svelte-1c5hw95"), L(C, "class", "statistic-container svelte-1c5hw95"), L(r, "id", "statistics"), L(r, "class", "svelte-1c5hw95"), L(P, "class", "svelte-1c5hw95"), L(D, "id", "guess-distribution"), H(D, "--accent-color", e[0]), L(D, "class", "svelte-1c5hw95"), L(t, "class", "container svelte-1c5hw95")
            },
            m(e, _) {
                z(e, t, _), w(t, n), w(t, s), w(t, r), w(r, l), w(l, o), w(o, a), w(l, i), w(l, c), w(r, u), w(r, d), w(d, h), w(h, g), w(d, m), w(d, f), w(r, v), w(r, p), w(p, b), w(b, y), w(p, k), w(p, $), w(r, x), w(r, C), w(C, S), w(S, G), w(C, E), w(C, O), w(t, N), w(t, P), w(t, I), w(t, D), X.m(D, null), w(t, A), Y && Y.m(t, null), R = !0
            },
            p(e, [n]) {
                (!R || 2 & n) && B !== (B = e[1].gamesPlayed + "") && T(a, B), (!R || 2 & n) && J !== (J = (0 !== e[1].wins ? (100 * e[1].wins / e[1].gamesPlayed).toFixed(0) : 0) + "") && T(g, J), (!R || 2 & n) && F !== (F = e[1].currentStreak + "") && T(y, F), (!R || 2 & n) && V !== (V = e[1].maxStreak + "") && T(G, V), W === (W = U(e)) && X ? X.p(e, n) : (X.d(1), X = W(e), X && (X.c(), X.m(D, null))), (!R || 1 & n) && H(D, "--accent-color", e[0]), e[2] ? Y && (oe(), ce(Y, 1, 1, (() => {
                    Y = null
                })), ae()) : Y ? 4 & n && ie(Y, 1) : (Y = Et(), Y.c(), ie(Y, 1), Y.m(t, null))
            },
            i(e) {
                R || (ie(Y), R = !0)
            },
            o(e) {
                ce(Y), R = !1
            },
            d(e) {
                e && _(t), X.d(), Y && Y.d()
            }
        }
    }

    function Nt(e, t, n) {
        let s, r, l;
        a(e, Ae, (e => n(1, r = e)));
        let {
            in_progress: o,
            colorblind_mode: i,
            night_mode: c
        } = Te;
        a(e, o, (e => n(2, l = e))), a(e, i, (e => n(6, s = e)));
        let u = Math.max(...Object.values(r.scores));
        let d;
        return e.$$.update = () => {
            64 & e.$$.dirty && n(0, d = s ? "#f5793a" : "#6aaa64")
        }, [d, r, l, o, i, e => 0 === e ? 7 : Math.max((100 * e / u).toFixed(0), 9), s]
    }
    class Pt extends ke {
        constructor(e) {
            super(), ye(this, e, Nt, Ot, o, {})
        }
    }

    function It(e) {
        let t, n;
        return t = new ft({}), {
            c() {
                fe(t.$$.fragment)
            },
            m(e, s) {
                ve(t, e, s), n = !0
            },
            i(e) {
                n || (ie(t.$$.fragment, e), n = !0)
            },
            o(e) {
                ce(t.$$.fragment, e), n = !1
            },
            d(e) {
                pe(t, e)
            }
        }
    }

    function Dt(e) {
        let t, n;
        return t = new Pt({}), {
            c() {
                fe(t.$$.fragment)
            },
            m(e, s) {
                ve(t, e, s), n = !0
            },
            i(e) {
                n || (ie(t.$$.fragment, e), n = !0)
            },
            o(e) {
                ce(t.$$.fragment, e), n = !1
            },
            d(e) {
                pe(t, e)
            }
        }
    }

    function At(e) {
        let t, n, s, o, a, c, g, m, f, v, p;
        const b = e[5].default,
            y = i(b, e, e[4], null),
            k = [Dt, It],
            $ = [];

        function x(e, t) {
            return "statistics" === e[1] ? 0 : "newPlayer" === e[1] ? 1 : -1
        }
        return ~(g = x(e)) && (m = $[g] = k[g](e)), {
            c() {
                t = M("div"), n = M("div"), y && y.c(), s = j(), o = M("div"), a = M("game-icon"), a.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path fill="var(--color-tone-3)" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path></svg>', c = j(), m && m.c(), G(a, "icon", "close"), G(a, "id", "icon"), G(a, "class", "svelte-9bz4ru"), L(o, "class", "close-icon svelte-9bz4ru"), L(n, "class", "content svelte-9bz4ru"), L(t, "class", "overlay svelte-9bz4ru"), L(t, "id", "overlay"), H(t, "--background-color", e[2].background)
            },
            m(r, i) {
                z(r, t, i), w(t, n), y && y.m(n, null), w(n, s), w(n, o), w(o, a), w(n, c), ~g && $[g].m(n, null), f = !0, v || (p = [S(a, "click", (function () {
                    l(e[0]) && e[0].apply(this, arguments)
                })), S(t, "click", e[3])], v = !0)
            },
            p(s, [r]) {
                e = s, y && y.p && (!f || 16 & r) && d(y, b, e, e[4], f ? u(b, e[4], r, null) : h(e[4]), null);
                let l = g;
                g = x(e), g !== l && (m && (oe(), ce($[l], 1, 1, (() => {
                    $[l] = null
                })), ae()), ~g ? (m = $[g], m || (m = $[g] = k[g](e), m.c()), ie(m, 1), m.m(n, null)) : m = null), (!f || 4 & r) && H(t, "--background-color", e[2].background)
            },
            i(e) {
                f || (ie(y, e), ie(m), f = !0)
            },
            o(e) {
                ce(y, e), ce(m), f = !1
            },
            d(e) {
                e && _(t), y && y.d(e), ~g && $[g].d(), v = !1, r(p)
            }
        }
    }

    function Rt(e, t, n) {
        let s;
        a(e, He, (e => n(2, s = e)));
        let {
            $$slots: r = {},
            $$scope: l
        } = t, {
            onClose: o
        } = t, {
            type: i
        } = t;
        return e.$$set = e => {
            "onClose" in e && n(0, o = e.onClose), "type" in e && n(1, i = e.type), "$$scope" in e && n(4, l = e.$$scope)
        }, [o, i, s, e => {
            e.target === e.currentTarget && o()
        }, l, r]
    }
    class Bt extends ke {
        constructor(e) {
            super(), ye(this, e, Rt, At, o, {
                onClose: 0,
                type: 1
            })
        }
    }

    function Jt(e) {
        const t = e - 1;
        return t * t * t + 1
    }

    function Ft(e, {
        from: t,
        to: n
    }, s = {}) {
        const r = getComputedStyle(e),
            o = "none" === r.transform ? "" : r.transform,
            [a, i] = r.transformOrigin.split(" ").map(parseFloat),
            c = t.left + t.width * a / n.width - (n.left + a),
            u = t.top + t.height * i / n.height - (n.top + i),
            {
                delay: d = 0,
                duration: h = (e => 120 * Math.sqrt(e)),
                easing: g = Jt
            } = s;
        return {
            delay: d,
            duration: l(h) ? h(Math.sqrt(c * c + u * u)) : h,
            easing: g,
            css: (e, s) => {
                const r = s * c,
                    l = s * u,
                    a = e + s * t.width / n.width,
                    i = e + s * t.height / n.height;
                return `transform: ${o} translate(${r}px, ${l}px) scale(${a}, ${i});`
            }
        }
    }

    function Vt(e, {
        delay: t = 0,
        duration: n = 400,
        easing: s = Jt,
        x: r = 0,
        y: l = 0,
        opacity: o = 0
    } = {}) {
        const a = getComputedStyle(e),
            i = +a.opacity,
            c = "none" === a.transform ? "" : a.transform,
            u = i * (1 - o);
        return {
            delay: t,
            duration: n,
            easing: s,
            css: (e, t) => `\n\t\t\ttransform: ${c} translate(${(1-e)*r}px, ${(1-e)*l}px);\n\t\t\topacity: ${i-u*t}`
        }
    }

    function Ut(e, t, n) {
        const s = e.slice();
        return s[3] = t[n], s
    }

    function Wt(e, t, n) {
        const s = e.slice();
        return s[3] = t[n], s
    }

    function Xt(e) {
        let t, n;
        return {
            c() {
                t = M("i"), L(t, "class", n = g(e[3].icon) + " svelte-wf5iyu")
            },
            m(e, n) {
                z(e, t, n)
            },
            p(e, s) {
                2 & s && n !== (n = g(e[3].icon) + " svelte-wf5iyu") && L(t, "class", n)
            },
            d(e) {
                e && _(t)
            }
        }
    }

    function Yt(t, n) {
        let s, r, l, o, a, i, c, u, d = n[3].message + "",
            h = e,
            g = n[3].icon && Xt(n);
        return {
            key: t,
            first: null,
            c() {
                s = M("div"), r = M("div"), l = q(d), o = j(), g && g.c(), a = j(), L(r, "class", "content svelte-wf5iyu"), H(r, "z-index", n[3].zIdx), L(s, "class", "toast svelte-wf5iyu"), this.first = s
            },
            m(e, t) {
                z(e, s, t), w(s, r), w(r, l), w(s, o), g && g.m(s, null), w(s, a), u = !0
            },
            p(e, t) {
                n = e, (!u || 2 & t) && d !== (d = n[3].message + "") && T(l, d), (!u || 2 & t) && H(r, "z-index", n[3].zIdx), n[3].icon ? g ? g.p(n, t) : (g = Xt(n), g.c(), g.m(s, a)) : g && (g.d(1), g = null)
            },
            r() {
                c = s.getBoundingClientRect()
            },
            f() {
                A(s), h(), R(s, c)
            },
            a() {
                h(), h = D(s, c, Ft, {})
            },
            i(e) {
                u || (Y((() => {
                    i || (i = de(s, Vt, {
                        y: 30
                    }, !0)), i.run(1)
                })), u = !0)
            },
            o(e) {
                i || (i = de(s, Vt, {
                    y: 30
                }, !1)), i.run(0), u = !1
            },
            d(e) {
                e && _(s), g && g.d(), e && i && i.end()
            }
        }
    }

    function Zt(e) {
        let t, n;
        return {
            c() {
                t = M("i"), L(t, "class", n = g(e[3].icon) + " svelte-wf5iyu")
            },
            m(e, n) {
                z(e, t, n)
            },
            p(e, s) {
                2 & s && n !== (n = g(e[3].icon) + " svelte-wf5iyu") && L(t, "class", n)
            },
            d(e) {
                e && _(t)
            }
        }
    }

    function Kt(t, n) {
        let s, r, l, o, a, i, c, u, d = n[3].message + "",
            h = e,
            g = n[3].icon && Zt(n);
        return {
            key: t,
            first: null,
            c() {
                s = M("div"), r = M("div"), l = q(d), o = j(), g && g.c(), a = j(), L(r, "class", "content svelte-wf5iyu"), H(r, "z-index", n[3].zIdx), L(s, "class", "toast svelte-wf5iyu"), this.first = s
            },
            m(e, t) {
                z(e, s, t), w(s, r), w(r, l), w(s, o), g && g.m(s, null), w(s, a), u = !0
            },
            p(e, t) {
                n = e, (!u || 2 & t) && d !== (d = n[3].message + "") && T(l, d), (!u || 2 & t) && H(r, "z-index", n[3].zIdx), n[3].icon ? g ? g.p(n, t) : (g = Zt(n), g.c(), g.m(s, a)) : g && (g.d(1), g = null)
            },
            r() {
                c = s.getBoundingClientRect()
            },
            f() {
                A(s), h(), R(s, c)
            },
            a() {
                h(), h = D(s, c, Ft, {})
            },
            i(e) {
                u || (Y((() => {
                    i || (i = de(s, Vt, {
                        y: 30
                    }, !0)), i.run(1)
                })), u = !0)
            },
            o(e) {
                i || (i = de(s, Vt, {
                    y: 30
                }, !1)), i.run(0), u = !1
            },
            d(e) {
                e && _(s), g && g.d(), e && i && i.end()
            }
        }
    }

    function Qt(e) {
        let t, n, s, r, l, o = [],
            a = new Map,
            i = [],
            c = new Map,
            u = e[1].filter(en);
        const d = e => e[3].id;
        for (let t = 0; t < u.length; t += 1) {
            let n = Wt(e, u, t),
                s = d(n);
            a.set(s, o[t] = Yt(s, n))
        }
        let h = e[1].filter(tn);
        const g = e => e[3].id;
        for (let t = 0; t < h.length; t += 1) {
            let n = Ut(e, h, t),
                s = g(n);
            c.set(s, i[t] = Kt(s, n))
        }
        return {
            c() {
                t = M("span"), n = M("div");
                for (let e = 0; e < o.length; e += 1) o[e].c();
                s = j(), r = M("div");
                for (let e = 0; e < i.length; e += 1) i[e].c();
                L(n, "class", "notifications svelte-wf5iyu"), H(n, "z-index", "9999"), L(r, "class", "notifications svelte-wf5iyu"), H(r, "z-index", "1999"), H(t, "--background-color", e[0] ? Se.day.unselected : Se.night.background), H(t, "--text-color", e[0] ? Se.day.text : Se.night.text)
            },
            m(e, a) {
                z(e, t, a), w(t, n);
                for (let e = 0; e < o.length; e += 1) o[e].m(n, null);
                w(t, s), w(t, r);
                for (let e = 0; e < i.length; e += 1) i[e].m(r, null);
                l = !0
            },
            p(e, [s]) {
                if (2 & s) {
                    u = e[1].filter(en), oe();
                    for (let e = 0; e < o.length; e += 1) o[e].r();
                    o = ge(o, s, d, 1, e, u, a, n, he, Yt, null, Wt);
                    for (let e = 0; e < o.length; e += 1) o[e].a();
                    ae()
                }
                if (2 & s) {
                    h = e[1].filter(tn), oe();
                    for (let e = 0; e < i.length; e += 1) i[e].r();
                    i = ge(i, s, g, 1, e, h, c, r, he, Kt, null, Ut);
                    for (let e = 0; e < i.length; e += 1) i[e].a();
                    ae()
                }(!l || 1 & s) && H(t, "--background-color", e[0] ? Se.day.unselected : Se.night.background), (!l || 1 & s) && H(t, "--text-color", e[0] ? Se.day.text : Se.night.text)
            },
            i(e) {
                if (!l) {
                    for (let e = 0; e < u.length; e += 1) ie(o[e]);
                    for (let e = 0; e < h.length; e += 1) ie(i[e]);
                    l = !0
                }
            },
            o(e) {
                for (let e = 0; e < o.length; e += 1) ce(o[e]);
                for (let e = 0; e < i.length; e += 1) ce(i[e]);
                l = !1
            },
            d(e) {
                e && _(t);
                for (let e = 0; e < o.length; e += 1) o[e].d();
                for (let e = 0; e < i.length; e += 1) i[e].d()
            }
        }
    }
    const en = e => 9999 === e.zIdx,
        tn = e => 1999 === e.zIdx;

    function nn(e, t, n) {
        let s, r;
        a(e, De, (e => n(1, r = e)));
        let {
            night_mode: l
        } = Te;
        return a(e, l, (e => n(0, s = e))), [s, r, l]
    }
    class sn extends ke {
        constructor(e) {
            super(), ye(this, e, nn, Qt, o, {})
        }
    }

    function rn(e) {
        let t, n;
        return t = new Bt({
            props: {
                onClose: e[6],
                type: e[1]
            }
        }), {
            c() {
                fe(t.$$.fragment)
            },
            m(e, s) {
                ve(t, e, s), n = !0
            },
            p(e, n) {
                const s = {};
                2 & n && (s.type = e[1]), t.$set(s)
            },
            i(e) {
                n || (ie(t.$$.fragment, e), n = !0)
            },
            o(e) {
                ce(t.$$.fragment, e), n = !1
            },
            d(e) {
                pe(t, e)
            }
        }
    }

    function ln(e) {
        let t, n;
        return t = new Ct({
            props: {
                overlay: e[1],
                onClose: e[6]
            }
        }), {
            c() {
                fe(t.$$.fragment)
            },
            m(e, s) {
                ve(t, e, s), n = !0
            },
            p(e, n) {
                const s = {};
                2 & n && (s.overlay = e[1]), t.$set(s)
            },
            i(e) {
                n || (ie(t.$$.fragment, e), n = !0)
            },
            o(e) {
                ce(t.$$.fragment, e), n = !1
            },
            d(e) {
                pe(t, e)
            }
        }
    }

    function on(e) {
        let t, n, s, r, l, o, a, i, c, u, d, h, m, f;
        s = new Ve({}), l = new ct({}), a = new nt({});
        const v = [ln, rn],
            p = [];

        function b(e, t) {
            return "settings" === e[1] || "help" === e[1] ? 0 : null !== e[1] ? 1 : -1
        }
        return ~(c = b(e)) && (u = p[c] = v[c](e)), h = new sn({}), {
            c() {
                t = M("span"), n = M("div"), fe(s.$$.fragment), r = j(), fe(l.$$.fragment), o = j(), fe(a.$$.fragment), i = j(), u && u.c(), d = j(), fe(h.$$.fragment), L(n, "id", "game"), L(n, "class", "svelte-fcduts"), L(t, "class", m = g(e[0] ? "nightmode" : "") + " svelte-fcduts"), H(t, "--background-color", e[2].background)
            },
            m(e, u) {
                z(e, t, u), w(t, n), ve(s, n, null), w(n, r), ve(l, n, null), w(n, o), ve(a, n, null), w(t, i), ~c && p[c].m(t, null), w(t, d), ve(h, t, null), f = !0
            },
            p(e, [n]) {
                let s = c;
                c = b(e), c === s ? ~c && p[c].p(e, n) : (u && (oe(), ce(p[s], 1, 1, (() => {
                    p[s] = null
                })), ae()), ~c ? (u = p[c], u ? u.p(e, n) : (u = p[c] = v[c](e), u.c()), ie(u, 1), u.m(t, d)) : u = null), (!f || 1 & n && m !== (m = g(e[0] ? "nightmode" : "") + " svelte-fcduts")) && L(t, "class", m), (!f || 4 & n) && H(t, "--background-color", e[2].background)
            },
            i(e) {
                f || (ie(s.$$.fragment, e), ie(l.$$.fragment, e), ie(a.$$.fragment, e), ie(u), ie(h.$$.fragment, e), f = !0)
            },
            o(e) {
                ce(s.$$.fragment, e), ce(l.$$.fragment, e), ce(a.$$.fragment, e), ce(u), ce(h.$$.fragment, e), f = !1
            },
            d(e) {
                e && _(t), pe(s), pe(l), pe(a), ~c && p[c].d(), pe(h)
            }
        }
    }

    function an(e, t, n) {
        let s, r, l, o, i, c, u, d, h;
        a(e, Ne, (e => n(7, r = e))), a(e, Ae, (e => n(8, l = e))), a(e, Oe, (e => n(1, o = e))), a(e, De, (e => n(10, c = e))), a(e, Re, (e => n(11, u = e))), a(e, He, (e => n(2, h = e)));
        let {
            in_progress: g,
            guess_array: f,
            night_mode: v
        } = Te;
        a(e, g, (e => n(12, d = e))), a(e, f, (e => n(9, i = e))), a(e, v, (e => n(0, s = e)));
        return 0 === i.length && -1 === l.lastGameNumber && m(Oe, o = "newPlayer", o), l.lastGameNumber !== r && (m(g, d = !0, d), m(f, i = [], i), m(Re, u = Pe, u), m(Ae, l.lastGameNumber = r, l), m(De, c = [], c)), e.$$.update = () => {
            1 & e.$$.dirty && window.document.body.classList.toggle("nightmode", s)
        }, [s, o, h, g, f, v, e => Oe.update((e => null))]
    }
    return new class extends ke {
        constructor(e) {
            super(), ye(this, e, an, on, o, {})
        }
    }({
        target: document.body
    })
}();