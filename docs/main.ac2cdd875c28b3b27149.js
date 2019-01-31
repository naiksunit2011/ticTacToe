(window.webpackJsonp = window.webpackJsonp || []).push([
    [1], {
        0: function(t, e, n) {
            t.exports = n("zUnb")
        },
        crnd: function(t, e) {
            function n(t) {
                return Promise.resolve().then(function() {
                    var e = new Error("Cannot find module '" + t + "'");
                    throw e.code = "MODULE_NOT_FOUND", e
                })
            }
            n.keys = function() {
                return []
            }, n.resolve = n, t.exports = n, n.id = "crnd"
        },
        zUnb: function(t, e, n) {
            "use strict";
            n.r(e);
            var r = function(t, e) {
                return (r = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            };

            function o(t, e) {
                function n() {
                    this.constructor = t
                }
                r(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }
            var i = function() {
                return (i = Object.assign || function(t) {
                    for (var e, n = 1, r = arguments.length; n < r; n++)
                        for (var o in e = arguments[n]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
                    return t
                }).apply(this, arguments)
            };

            function a(t, e, n, r) {
                var o, i = arguments.length,
                    a = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, n) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, r);
                else
                    for (var u = t.length - 1; u >= 0; u--)(o = t[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(e, n, a) : o(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            }

            function u(t, e) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(t, e)
            }

            function s(t) {
                var e = "function" == typeof Symbol && t[Symbol.iterator],
                    n = 0;
                return e ? e.call(t) : {
                    next: function() {
                        return t && n >= t.length && (t = void 0), {
                            value: t && t[n++],
                            done: !t
                        }
                    }
                }
            }

            function c(t, e) {
                var n = "function" == typeof Symbol && t[Symbol.iterator];
                if (!n) return t;
                var r, o, i = n.call(t),
                    a = [];
                try {
                    for (;
                        (void 0 === e || e-- > 0) && !(r = i.next()).done;) a.push(r.value)
                } catch (u) {
                    o = {
                        error: u
                    }
                } finally {
                    try {
                        r && !r.done && (n = i.return) && n.call(i)
                    } finally {
                        if (o) throw o.error
                    }
                }
                return a
            }

            function l() {
                for (var t = [], e = 0; e < arguments.length; e++) t = t.concat(c(arguments[e]));
                return t
            }
            var f = Array.isArray || function(t) {
                return t && "number" == typeof t.length
            };

            function p(t) {
                return null != t && "object" == typeof t
            }

            function h(t) {
                return "function" == typeof t
            }
            var d, v = {
                e: {}
            };

            function g() {
                try {
                    return d.apply(this, arguments)
                } catch (t) {
                    return v.e = t, v
                }
            }

            function y(t) {
                return d = t, g
            }

            function m(t) {
                return Error.call(this), this.message = t ? t.length + " errors occurred during unsubscription:\n" + t.map(function(t, e) {
                    return e + 1 + ") " + t.toString()
                }).join("\n  ") : "", this.name = "UnsubscriptionError", this.errors = t, this
            }
            m.prototype = Object.create(Error.prototype);
            var w = m,
                b = function() {
                    function t(t) {
                        this.closed = !1, this._parent = null, this._parents = null, this._subscriptions = null, t && (this._unsubscribe = t)
                    }
                    var e;
                    return t.prototype.unsubscribe = function() {
                        var t, e = !1;
                        if (!this.closed) {
                            var n = this._parent,
                                r = this._parents,
                                o = this._unsubscribe,
                                i = this._subscriptions;
                            this.closed = !0, this._parent = null, this._parents = null, this._subscriptions = null;
                            for (var a = -1, u = r ? r.length : 0; n;) n.remove(this), n = ++a < u && r[a] || null;
                            if (h(o) && y(o).call(this) === v && (e = !0, t = t || (v.e instanceof w ? _(v.e.errors) : [v.e])), f(i))
                                for (a = -1, u = i.length; ++a < u;) {
                                    var s = i[a];
                                    if (p(s) && y(s.unsubscribe).call(s) === v) {
                                        e = !0, t = t || [];
                                        var c = v.e;
                                        c instanceof w ? t = t.concat(_(c.errors)) : t.push(c)
                                    }
                                }
                            if (e) throw new w(t)
                        }
                    }, t.prototype.add = function(e) {
                        if (!e || e === t.EMPTY) return t.EMPTY;
                        if (e === this) return this;
                        var n = e;
                        switch (typeof e) {
                            case "function":
                                n = new t(e);
                            case "object":
                                if (n.closed || "function" != typeof n.unsubscribe) return n;
                                if (this.closed) return n.unsubscribe(), n;
                                if ("function" != typeof n._addParent) {
                                    var r = n;
                                    (n = new t)._subscriptions = [r]
                                }
                                break;
                            default:
                                throw new Error("unrecognized teardown " + e + " added to Subscription.")
                        }
                        return (this._subscriptions || (this._subscriptions = [])).push(n), n._addParent(this), n
                    }, t.prototype.remove = function(t) {
                        var e = this._subscriptions;
                        if (e) {
                            var n = e.indexOf(t); - 1 !== n && e.splice(n, 1)
                        }
                    }, t.prototype._addParent = function(t) {
                        var e = this._parent,
                            n = this._parents;
                        e && e !== t ? n ? -1 === n.indexOf(t) && n.push(t) : this._parents = [t] : this._parent = t
                    }, t.EMPTY = ((e = new t).closed = !0, e), t
                }();

            function _(t) {
                return t.reduce(function(t, e) {
                    return t.concat(e instanceof w ? e.errors : e)
                }, [])
            }
            var C = !1,
                x = {
                    Promise: void 0,
                    set useDeprecatedSynchronousErrorHandling(t) {
                        C = t
                    },
                    get useDeprecatedSynchronousErrorHandling() {
                        return C
                    }
                };

            function S(t) {
                setTimeout(function() {
                    throw t
                })
            }
            var E = {
                    closed: !0,
                    next: function(t) {},
                    error: function(t) {
                        if (x.useDeprecatedSynchronousErrorHandling) throw t;
                        S(t)
                    },
                    complete: function() {}
                },
                T = "function" == typeof Symbol ? Symbol("rxSubscriber") : "@@rxSubscriber_" + Math.random(),
                k = function(t) {
                    function e(n, r, o) {
                        var i = t.call(this) || this;
                        switch (i.syncErrorValue = null, i.syncErrorThrown = !1, i.syncErrorThrowable = !1, i.isStopped = !1, i._parentSubscription = null, arguments.length) {
                            case 0:
                                i.destination = E;
                                break;
                            case 1:
                                if (!n) {
                                    i.destination = E;
                                    break
                                }
                                if ("object" == typeof n) {
                                    n instanceof e ? (i.syncErrorThrowable = n.syncErrorThrowable, i.destination = n, n.add(i)) : (i.syncErrorThrowable = !0, i.destination = new I(i, n));
                                    break
                                }
                            default:
                                i.syncErrorThrowable = !0, i.destination = new I(i, n, r, o)
                        }
                        return i
                    }
                    return o(e, t), e.prototype[T] = function() {
                        return this
                    }, e.create = function(t, n, r) {
                        var o = new e(t, n, r);
                        return o.syncErrorThrowable = !1, o
                    }, e.prototype.next = function(t) {
                        this.isStopped || this._next(t)
                    }, e.prototype.error = function(t) {
                        this.isStopped || (this.isStopped = !0, this._error(t))
                    }, e.prototype.complete = function() {
                        this.isStopped || (this.isStopped = !0, this._complete())
                    }, e.prototype.unsubscribe = function() {
                        this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this))
                    }, e.prototype._next = function(t) {
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        this.destination.error(t), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.destination.complete(), this.unsubscribe()
                    }, e.prototype._unsubscribeAndRecycle = function() {
                        var t = this._parent,
                            e = this._parents;
                        return this._parent = null, this._parents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parent = t, this._parents = e, this._parentSubscription = null, this
                    }, e
                }(b),
                I = function(t) {
                    function e(e, n, r, o) {
                        var i, a = t.call(this) || this;
                        a._parentSubscriber = e;
                        var u = a;
                        return h(n) ? i = n : n && (i = n.next, r = n.error, o = n.complete, n !== E && (h((u = Object.create(n)).unsubscribe) && a.add(u.unsubscribe.bind(u)), u.unsubscribe = a.unsubscribe.bind(a))), a._context = u, a._next = i, a._error = r, a._complete = o, a
                    }
                    return o(e, t), e.prototype.next = function(t) {
                        if (!this.isStopped && this._next) {
                            var e = this._parentSubscriber;
                            x.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? this.__tryOrSetError(e, this._next, t) && this.unsubscribe() : this.__tryOrUnsub(this._next, t)
                        }
                    }, e.prototype.error = function(t) {
                        if (!this.isStopped) {
                            var e = this._parentSubscriber,
                                n = x.useDeprecatedSynchronousErrorHandling;
                            if (this._error) n && e.syncErrorThrowable ? (this.__tryOrSetError(e, this._error, t), this.unsubscribe()) : (this.__tryOrUnsub(this._error, t), this.unsubscribe());
                            else if (e.syncErrorThrowable) n ? (e.syncErrorValue = t, e.syncErrorThrown = !0) : S(t), this.unsubscribe();
                            else {
                                if (this.unsubscribe(), n) throw t;
                                S(t)
                            }
                        }
                    }, e.prototype.complete = function() {
                        var t = this;
                        if (!this.isStopped) {
                            var e = this._parentSubscriber;
                            if (this._complete) {
                                var n = function() {
                                    return t._complete.call(t._context)
                                };
                                x.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable ? (this.__tryOrSetError(e, n), this.unsubscribe()) : (this.__tryOrUnsub(n), this.unsubscribe())
                            } else this.unsubscribe()
                        }
                    }, e.prototype.__tryOrUnsub = function(t, e) {
                        try {
                            t.call(this._context, e)
                        } catch (n) {
                            if (this.unsubscribe(), x.useDeprecatedSynchronousErrorHandling) throw n;
                            S(n)
                        }
                    }, e.prototype.__tryOrSetError = function(t, e, n) {
                        if (!x.useDeprecatedSynchronousErrorHandling) throw new Error("bad call");
                        try {
                            e.call(this._context, n)
                        } catch (r) {
                            return x.useDeprecatedSynchronousErrorHandling ? (t.syncErrorValue = r, t.syncErrorThrown = !0, !0) : (S(r), !0)
                        }
                        return !1
                    }, e.prototype._unsubscribe = function() {
                        var t = this._parentSubscriber;
                        this._context = null, this._parentSubscriber = null, t.unsubscribe()
                    }, e
                }(k),
                R = "function" == typeof Symbol && Symbol.observable || "@@observable";

            function P() {}

            function A() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                return O(t)
            }

            function O(t) {
                return t ? 1 === t.length ? t[0] : function(e) {
                    return t.reduce(function(t, e) {
                        return e(t)
                    }, e)
                } : P
            }
            var N = function() {
                function t(t) {
                    this._isScalar = !1, t && (this._subscribe = t)
                }
                return t.prototype.lift = function(e) {
                    var n = new t;
                    return n.source = this, n.operator = e, n
                }, t.prototype.subscribe = function(t, e, n) {
                    var r = this.operator,
                        o = function(t, e, n) {
                            if (t) {
                                if (t instanceof k) return t;
                                if (t[T]) return t[T]()
                            }
                            return t || e || n ? new k(t, e, n) : new k(E)
                        }(t, e, n);
                    if (r ? r.call(o, this.source) : o.add(this.source || x.useDeprecatedSynchronousErrorHandling && !o.syncErrorThrowable ? this._subscribe(o) : this._trySubscribe(o)), x.useDeprecatedSynchronousErrorHandling && o.syncErrorThrowable && (o.syncErrorThrowable = !1, o.syncErrorThrown)) throw o.syncErrorValue;
                    return o
                }, t.prototype._trySubscribe = function(t) {
                    try {
                        return this._subscribe(t)
                    } catch (e) {
                        x.useDeprecatedSynchronousErrorHandling && (t.syncErrorThrown = !0, t.syncErrorValue = e),
                            function(t) {
                                for (; t;) {
                                    var e = t.destination;
                                    if (t.closed || t.isStopped) return !1;
                                    t = e && e instanceof k ? e : null
                                }
                                return !0
                            }(t) ? t.error(e) : console.warn(e)
                    }
                }, t.prototype.forEach = function(t, e) {
                    var n = this;
                    return new(e = D(e))(function(e, r) {
                        var o;
                        o = n.subscribe(function(e) {
                            try {
                                t(e)
                            } catch (n) {
                                r(n), o && o.unsubscribe()
                            }
                        }, r, e)
                    })
                }, t.prototype._subscribe = function(t) {
                    var e = this.source;
                    return e && e.subscribe(t)
                }, t.prototype[R] = function() {
                    return this
                }, t.prototype.pipe = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                    return 0 === t.length ? this : O(t)(this)
                }, t.prototype.toPromise = function(t) {
                    var e = this;
                    return new(t = D(t))(function(t, n) {
                        var r;
                        e.subscribe(function(t) {
                            return r = t
                        }, function(t) {
                            return n(t)
                        }, function() {
                            return t(r)
                        })
                    })
                }, t.create = function(e) {
                    return new t(e)
                }, t
            }();

            function D(t) {
                if (t || (t = x.Promise || Promise), !t) throw new Error("no Promise impl found");
                return t
            }

            function j() {
                return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this
            }
            j.prototype = Object.create(Error.prototype);
            var M = j,
                U = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.subject = e, r.subscriber = n, r.closed = !1, r
                    }
                    return o(e, t), e.prototype.unsubscribe = function() {
                        if (!this.closed) {
                            this.closed = !0;
                            var t = this.subject,
                                e = t.observers;
                            if (this.subject = null, e && 0 !== e.length && !t.isStopped && !t.closed) {
                                var n = e.indexOf(this.subscriber); - 1 !== n && e.splice(n, 1)
                            }
                        }
                    }, e
                }(b),
                V = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.destination = e, n
                    }
                    return o(e, t), e
                }(k),
                H = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.observers = [], e.closed = !1, e.isStopped = !1, e.hasError = !1, e.thrownError = null, e
                    }
                    return o(e, t), e.prototype[T] = function() {
                        return new V(this)
                    }, e.prototype.lift = function(t) {
                        var e = new L(this, this);
                        return e.operator = t, e
                    }, e.prototype.next = function(t) {
                        if (this.closed) throw new M;
                        if (!this.isStopped)
                            for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].next(t)
                    }, e.prototype.error = function(t) {
                        if (this.closed) throw new M;
                        this.hasError = !0, this.thrownError = t, this.isStopped = !0;
                        for (var e = this.observers, n = e.length, r = e.slice(), o = 0; o < n; o++) r[o].error(t);
                        this.observers.length = 0
                    }, e.prototype.complete = function() {
                        if (this.closed) throw new M;
                        this.isStopped = !0;
                        for (var t = this.observers, e = t.length, n = t.slice(), r = 0; r < e; r++) n[r].complete();
                        this.observers.length = 0
                    }, e.prototype.unsubscribe = function() {
                        this.isStopped = !0, this.closed = !0, this.observers = null
                    }, e.prototype._trySubscribe = function(e) {
                        if (this.closed) throw new M;
                        return t.prototype._trySubscribe.call(this, e)
                    }, e.prototype._subscribe = function(t) {
                        if (this.closed) throw new M;
                        return this.hasError ? (t.error(this.thrownError), b.EMPTY) : this.isStopped ? (t.complete(), b.EMPTY) : (this.observers.push(t), new U(this, t))
                    }, e.prototype.asObservable = function() {
                        var t = new N;
                        return t.source = this, t
                    }, e.create = function(t, e) {
                        return new L(t, e)
                    }, e
                }(N),
                L = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.destination = e, r.source = n, r
                    }
                    return o(e, t), e.prototype.next = function(t) {
                        var e = this.destination;
                        e && e.next && e.next(t)
                    }, e.prototype.error = function(t) {
                        var e = this.destination;
                        e && e.error && this.destination.error(t)
                    }, e.prototype.complete = function() {
                        var t = this.destination;
                        t && t.complete && this.destination.complete()
                    }, e.prototype._subscribe = function(t) {
                        return this.source ? this.source.subscribe(t) : b.EMPTY
                    }, e
                }(H);

            function F(t) {
                return t && "function" == typeof t.schedule
            }
            var z = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.parent = e, o.outerValue = n, o.outerIndex = r, o.index = 0, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        this.parent.notifyNext(this.outerValue, t, this.outerIndex, this.index++, this)
                    }, e.prototype._error = function(t) {
                        this.parent.notifyError(t, this), this.unsubscribe()
                    }, e.prototype._complete = function() {
                        this.parent.notifyComplete(this), this.unsubscribe()
                    }, e
                }(k),
                B = function(t) {
                    return function(e) {
                        for (var n = 0, r = t.length; n < r && !e.closed; n++) e.next(t[n]);
                        e.closed || e.complete()
                    }
                },
                q = function(t) {
                    return function(e) {
                        return t.then(function(t) {
                            e.closed || (e.next(t), e.complete())
                        }, function(t) {
                            return e.error(t)
                        }).then(null, S), e
                    }
                };

            function Z() {
                return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
            }
            var G = Z(),
                Q = function(t) {
                    return function(e) {
                        for (var n = t[G]();;) {
                            var r = n.next();
                            if (r.done) {
                                e.complete();
                                break
                            }
                            if (e.next(r.value), e.closed) break
                        }
                        return "function" == typeof n.return && e.add(function() {
                            n.return && n.return()
                        }), e
                    }
                },
                W = function(t) {
                    return function(e) {
                        var n = t[R]();
                        if ("function" != typeof n.subscribe) throw new TypeError("Provided object does not correctly implement Symbol.observable");
                        return n.subscribe(e)
                    }
                },
                K = function(t) {
                    return t && "number" == typeof t.length && "function" != typeof t
                };

            function $(t) {
                return t && "function" != typeof t.subscribe && "function" == typeof t.then
            }
            var X = function(t) {
                if (t instanceof N) return function(e) {
                    return t._isScalar ? (e.next(t.value), void e.complete()) : t.subscribe(e)
                };
                if (t && "function" == typeof t[R]) return W(t);
                if (K(t)) return B(t);
                if ($(t)) return q(t);
                if (t && "function" == typeof t[G]) return Q(t);
                var e = p(t) ? "an invalid object" : "'" + t + "'";
                throw new TypeError("You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")
            };

            function Y(t, e, n, r, o) {
                if (void 0 === o && (o = new z(t, n, r)), !o.closed) return X(e)(o)
            }
            var J = function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return o(e, t), e.prototype.notifyNext = function(t, e, n, r, o) {
                    this.destination.next(e)
                }, e.prototype.notifyError = function(t, e) {
                    this.destination.error(t)
                }, e.prototype.notifyComplete = function(t) {
                    this.destination.complete()
                }, e
            }(k);

            function tt(t, e) {
                return function(n) {
                    if ("function" != typeof t) throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
                    return n.lift(new et(t, e))
                }
            }
            var et = function() {
                    function t(t, e) {
                        this.project = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new nt(t, this.project, this.thisArg))
                    }, t
                }(),
                nt = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.project = n, o.count = 0, o.thisArg = r || o, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.project.call(this.thisArg, t, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(e)
                    }, e
                }(k);

            function rt(t, e) {
                return new N(e ? function(n) {
                    var r = new b,
                        o = 0;
                    return r.add(e.schedule(function() {
                        o !== t.length ? (n.next(t[o++]), n.closed || r.add(this.schedule())) : n.complete()
                    })), r
                } : B(t))
            }

            function ot(t, e) {
                if (!e) return t instanceof N ? t : new N(X(t));
                if (null != t) {
                    if (function(t) {
                            return t && "function" == typeof t[R]
                        }(t)) return function(t, e) {
                        return new N(e ? function(n) {
                            var r = new b;
                            return r.add(e.schedule(function() {
                                var o = t[R]();
                                r.add(o.subscribe({
                                    next: function(t) {
                                        r.add(e.schedule(function() {
                                            return n.next(t)
                                        }))
                                    },
                                    error: function(t) {
                                        r.add(e.schedule(function() {
                                            return n.error(t)
                                        }))
                                    },
                                    complete: function() {
                                        r.add(e.schedule(function() {
                                            return n.complete()
                                        }))
                                    }
                                }))
                            })), r
                        } : W(t))
                    }(t, e);
                    if ($(t)) return function(t, e) {
                        return new N(e ? function(n) {
                            var r = new b;
                            return r.add(e.schedule(function() {
                                return t.then(function(t) {
                                    r.add(e.schedule(function() {
                                        n.next(t), r.add(e.schedule(function() {
                                            return n.complete()
                                        }))
                                    }))
                                }, function(t) {
                                    r.add(e.schedule(function() {
                                        return n.error(t)
                                    }))
                                })
                            })), r
                        } : q(t))
                    }(t, e);
                    if (K(t)) return rt(t, e);
                    if (function(t) {
                            return t && "function" == typeof t[G]
                        }(t) || "string" == typeof t) return function(t, e) {
                        if (!t) throw new Error("Iterable cannot be null");
                        return new N(e ? function(n) {
                            var r, o = new b;
                            return o.add(function() {
                                r && "function" == typeof r.return && r.return()
                            }), o.add(e.schedule(function() {
                                r = t[G](), o.add(e.schedule(function() {
                                    if (!n.closed) {
                                        var t, e;
                                        try {
                                            var o = r.next();
                                            t = o.value, e = o.done
                                        } catch (i) {
                                            return void n.error(i)
                                        }
                                        e ? n.complete() : (n.next(t), this.schedule())
                                    }
                                }))
                            })), o
                        } : Q(t))
                    }(t, e)
                }
                throw new TypeError((null !== t && typeof t || t) + " is not observable")
            }

            function it(t, e, n) {
                return void 0 === n && (n = Number.POSITIVE_INFINITY), "function" == typeof e ? function(r) {
                    return r.pipe(it(function(n, r) {
                        return ot(t(n, r)).pipe(tt(function(t, o) {
                            return e(n, t, r, o)
                        }))
                    }, n))
                } : ("number" == typeof e && (n = e), function(e) {
                    return e.lift(new at(t, n))
                })
            }
            var at = function() {
                    function t(t, e) {
                        void 0 === e && (e = Number.POSITIVE_INFINITY), this.project = t, this.concurrent = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new ut(t, this.project, this.concurrent))
                    }, t
                }(),
                ut = function(t) {
                    function e(e, n, r) {
                        void 0 === r && (r = Number.POSITIVE_INFINITY);
                        var o = t.call(this, e) || this;
                        return o.project = n, o.concurrent = r, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        this.active < this.concurrent ? this._tryNext(t) : this.buffer.push(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this.active++, this._innerSub(e, t, n)
                    }, e.prototype._innerSub = function(t, e, n) {
                        var r = new z(this, void 0, void 0);
                        this.destination.add(r), Y(this, t, e, n, r)
                    }, e.prototype._complete = function() {
                        this.hasCompleted = !0, 0 === this.active && 0 === this.buffer.length && this.destination.complete(), this.unsubscribe()
                    }, e.prototype.notifyNext = function(t, e, n, r, o) {
                        this.destination.next(e)
                    }, e.prototype.notifyComplete = function(t) {
                        var e = this.buffer;
                        this.remove(t), this.active--, e.length > 0 ? this._next(e.shift()) : 0 === this.active && this.hasCompleted && this.destination.complete()
                    }, e
                }(J);

            function st(t) {
                return t
            }

            function ct(t) {
                return void 0 === t && (t = Number.POSITIVE_INFINITY), it(st, t)
            }

            function lt() {
                return function(t) {
                    return t.lift(new ft(t))
                }
            }
            var ft = function() {
                    function t(t) {
                        this.connectable = t
                    }
                    return t.prototype.call = function(t, e) {
                        var n = this.connectable;
                        n._refCount++;
                        var r = new pt(t, n),
                            o = e.subscribe(r);
                        return r.closed || (r.connection = n.connect()), o
                    }, t
                }(),
                pt = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return o(e, t), e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._refCount;
                            if (e <= 0) this.connection = null;
                            else if (t._refCount = e - 1, e > 1) this.connection = null;
                            else {
                                var n = this.connection,
                                    r = t._connection;
                                this.connection = null, !r || n && r !== n || r.unsubscribe()
                            }
                        } else this.connection = null
                    }, e
                }(k),
                ht = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.source = e, r.subjectFactory = n, r._refCount = 0, r._isComplete = !1, r
                    }
                    return o(e, t), e.prototype._subscribe = function(t) {
                        return this.getSubject().subscribe(t)
                    }, e.prototype.getSubject = function() {
                        var t = this._subject;
                        return t && !t.isStopped || (this._subject = this.subjectFactory()), this._subject
                    }, e.prototype.connect = function() {
                        var t = this._connection;
                        return t || (this._isComplete = !1, (t = this._connection = new b).add(this.source.subscribe(new vt(this.getSubject(), this))), t.closed ? (this._connection = null, t = b.EMPTY) : this._connection = t), t
                    }, e.prototype.refCount = function() {
                        return lt()(this)
                    }, e
                }(N).prototype,
                dt = {
                    operator: {
                        value: null
                    },
                    _refCount: {
                        value: 0,
                        writable: !0
                    },
                    _subject: {
                        value: null,
                        writable: !0
                    },
                    _connection: {
                        value: null,
                        writable: !0
                    },
                    _subscribe: {
                        value: ht._subscribe
                    },
                    _isComplete: {
                        value: ht._isComplete,
                        writable: !0
                    },
                    getSubject: {
                        value: ht.getSubject
                    },
                    connect: {
                        value: ht.connect
                    },
                    refCount: {
                        value: ht.refCount
                    }
                },
                vt = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.connectable = n, r
                    }
                    return o(e, t), e.prototype._error = function(e) {
                        this._unsubscribe(), t.prototype._error.call(this, e)
                    }, e.prototype._complete = function() {
                        this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this)
                    }, e.prototype._unsubscribe = function() {
                        var t = this.connectable;
                        if (t) {
                            this.connectable = null;
                            var e = t._connection;
                            t._refCount = 0, t._subject = null, t._connection = null, e && e.unsubscribe()
                        }
                    }, e
                }(V);

            function gt() {
                return new H
            }

            function yt(t) {
                for (var e in t)
                    if (t[e] === yt) return e;
                throw Error("Could not find renamed property on target object.")
            }
            var mt = yt({
                    ngComponentDef: yt
                }),
                wt = yt({
                    ngInjectableDef: yt
                }),
                bt = yt({
                    ngInjectorDef: yt
                }),
                _t = yt({
                    ngModuleDef: yt
                }),
                Ct = yt({
                    __NG_ELEMENT_ID__: yt
                });

            function xt(t) {
                return {
                    providedIn: t.providedIn || null,
                    factory: t.factory,
                    value: void 0
                }
            }

            function St(t) {
                return t && t.hasOwnProperty(wt) ? t[wt] : null
            }

            function Et(t) {
                return t && t.hasOwnProperty(bt) ? t[bt] : null
            }
            var Tt = function() {
                    function t(t, e) {
                        this._desc = t, this.ngMetadataName = "InjectionToken", this.ngInjectableDef = void 0 !== e ? xt({
                            providedIn: e.providedIn || "root",
                            factory: e.factory
                        }) : void 0
                    }
                    return t.prototype.toString = function() {
                        return "InjectionToken " + this._desc
                    }, t
                }(),
                kt = "__parameters__";

            function It(t, e, n) {
                var r = function(t) {
                    return function() {
                        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                        if (t) {
                            var r = t.apply(void 0, l(e));
                            for (var o in r) this[o] = r[o]
                        }
                    }
                }(e);

                function o() {
                    for (var t, e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    if (this instanceof o) return r.apply(this, e), this;
                    var i = new((t = o).bind.apply(t, l([void 0], e)));
                    return a.annotation = i, a;

                    function a(t, e, n) {
                        for (var r = t.hasOwnProperty(kt) ? t[kt] : Object.defineProperty(t, kt, {
                                value: []
                            })[kt]; r.length <= n;) r.push(null);
                        return (r[n] = r[n] || []).push(i), t
                    }
                }
                return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = t, o.annotationCls = o, o
            }
            var Rt = new Tt("AnalyzeForEntryComponents"),
                Pt = "undefined" != typeof window && window,
                At = "undefined" != typeof self && "undefined" != typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && self,
                Ot = "undefined" != typeof global && global || Pt || At,
                Nt = Promise.resolve(0),
                Dt = null;

            function jt() {
                if (!Dt) {
                    var t = Ot.Symbol;
                    if (t && t.iterator) Dt = t.iterator;
                    else
                        for (var e = Object.getOwnPropertyNames(Map.prototype), n = 0; n < e.length; ++n) {
                            var r = e[n];
                            "entries" !== r && "size" !== r && Map.prototype[r] === Map.prototype.entries && (Dt = r)
                        }
                }
                return Dt
            }

            function Mt(t) {
                "undefined" == typeof Zone ? Nt.then(function() {
                    t && t.apply(null, null)
                }) : Zone.current.scheduleMicroTask("scheduleMicrotask", t)
            }

            function Ut(t, e) {
                return t === e || "number" == typeof t && "number" == typeof e && isNaN(t) && isNaN(e)
            }

            function Vt(t) {
                if ("string" == typeof t) return t;
                if (t instanceof Array) return "[" + t.map(Vt).join(", ") + "]";
                if (null == t) return "" + t;
                if (t.overriddenName) return "" + t.overriddenName;
                if (t.name) return "" + t.name;
                var e = t.toString();
                if (null == e) return "" + e;
                var n = e.indexOf("\n");
                return -1 === n ? e : e.substring(0, n)
            }
            var Ht = yt({
                __forward_ref__: yt
            });

            function Lt(t) {
                return t.__forward_ref__ = Lt, t.toString = function() {
                    return Vt(this())
                }, t
            }

            function Ft(t) {
                var e = t;
                return "function" == typeof e && e.hasOwnProperty(Ht) && e.__forward_ref__ === Lt ? e() : t
            }
            var zt = function(t) {
                    return t[t.Emulated = 0] = "Emulated", t[t.Native = 1] = "Native", t[t.None = 2] = "None", t[t.ShadowDom = 3] = "ShadowDom", t
                }({}),
                Bt = 0,
                qt = 1,
                Zt = 2,
                Gt = 3,
                Qt = 5,
                Wt = 6,
                Kt = 7,
                $t = 8,
                Xt = 9,
                Yt = 10,
                Jt = 11,
                te = 12,
                ee = 13,
                ne = 15,
                re = 17,
                oe = 18,
                ie = 0,
                ae = 1,
                ue = 6,
                se = 8,
                ce = "__ngContext__",
                le = 8,
                fe = 8,
                pe = 9,
                he = -1,
                de = function() {
                    return function(t, e, n) {
                        this.factory = t, this.resolving = !1, this.canSeeViewProviders = e, this.injectImpl = n
                    }
                }(),
                ve = de.prototype;

            function ge(t) {
                return "function" == typeof t ? t.name || t : "string" == typeof t ? t : null == t ? "" : "object" == typeof t && "function" == typeof t.type ? t.type.name || t.type : "" + t
            }

            function ye(t) {
                for (; Array.isArray(t);) t = t[Qt];
                return t
            }

            function me(t, e) {
                return ye(e[t.index])
            }

            function we(t, e) {
                var n = e[t];
                return n.length >= oe ? n : n[Qt]
            }

            function be(t) {
                return null !== t.template
            }

            function _e(t) {
                return t[ce]
            }

            function Ce(t) {
                var e = _e(t);
                return e ? Array.isArray(e) ? e : e.lView : null
            }

            function xe(t) {
                return 32767 & t
            }

            function Se(t, e) {
                for (var n = t >> 16, r = e; n > 0;) r = r[re], n--;
                return r
            }
            var Ee = ("undefined" != typeof requestAnimationFrame && requestAnimationFrame || setTimeout).bind(Ot);

            function Te(t) {
                for (var e = t[Wt]; e && 2 === e.type;) e = (t = t[re])[Wt];
                return t
            }
            var ke, Ie, Re, Pe, Ae = It("Inject", function(t) {
                    return {
                        token: t
                    }
                }),
                Oe = It("Optional"),
                Ne = It("Self"),
                De = It("SkipSelf"),
                je = function(t) {
                    return t[t.Default = 0] = "Default", t[t.Host = 1] = "Host", t[t.Self = 2] = "Self", t[t.SkipSelf = 4] = "SkipSelf", t[t.Optional = 8] = "Optional", t
                }({}),
                Me = void 0;

            function Ue(t) {
                var e = Me;
                return Me = t, e
            }

            function Ve(t) {
                var e = ke;
                return ke = t, e
            }

            function He(t, e) {
                return void 0 === e && (e = je.Default), (ke || function(t, e) {
                    if (void 0 === e && (e = je.Default), void 0 === Me) throw new Error("inject() must be called from an injection context");
                    return null === Me ? Le(t, void 0, e) : Me.get(t, e & je.Optional ? null : void 0, e)
                })(t, e)
            }

            function Le(t, e, n) {
                var r = St(t);
                if (r && "root" == r.providedIn) return void 0 === r.value ? r.value = r.factory() : r.value;
                if (n & je.Optional) return null;
                if (void 0 !== e) return e;
                throw new Error("Injector: NOT_FOUND [" + Vt(t) + "]")
            }

            function Fe(t) {
                for (var e = [], n = 0; n < t.length; n++) {
                    var r = t[n];
                    if (Array.isArray(r)) {
                        if (0 === r.length) throw new Error("Arguments array must have arguments.");
                        for (var o = void 0, i = je.Default, a = 0; a < r.length; a++) {
                            var u = r[a];
                            u instanceof Oe || "Optional" === u.ngMetadataName ? i |= je.Optional : u instanceof De || "SkipSelf" === u.ngMetadataName ? i |= je.SkipSelf : u instanceof Ne || "Self" === u.ngMetadataName ? i |= je.Self : o = u instanceof Ae ? u.token : u
                        }
                        e.push(He(o, i))
                    } else e.push(He(r))
                }
                return e
            }

            function ze(t, e, n) {
                t.afterContentInit && (e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentInit), t.afterContentChecked && ((e.contentHooks || (e.contentHooks = [])).push(n, t.afterContentChecked), (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, t.afterContentChecked))
            }

            function Be(t, e, n) {
                t.afterViewInit && (e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewInit), t.afterViewChecked && ((e.viewHooks || (e.viewHooks = [])).push(n, t.afterViewChecked), (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, t.afterViewChecked))
            }

            function qe(t, e, n) {
                null != t.onDestroy && (e.destroyHooks || (e.destroyHooks = [])).push(n, t.onDestroy)
            }

            function Ze(t, e, n, r) {
                if (!r) {
                    var o = 2 & t[qt] ? e : n;
                    o && Ge(t, o)
                }
            }

            function Ge(t, e) {
                for (var n = 0; n < e.length; n += 2) e[n + 1].call(t[e[n]])
            }

            function Qe() {
                return Pe
            }

            function We() {
                return Ie
            }

            function Ke(t) {
                Ie = t
            }

            function $e(t, e) {
                Ie = t, Pe = e
            }

            function Xe() {
                return Re
            }

            function Ye(t) {
                Re = t
            }

            function Je(t) {
                return void 0 === t && (t = Pe), 1 == (1 & t[qt])
            }
            var tn = !1;

            function en() {
                return tn
            }

            function nn(t) {
                tn = t
            }
            var rn = !0;

            function on() {
                return rn
            }

            function an(t) {
                rn = t
            }

            function un(t, e) {
                var n = Pe;
                t && (rn = t[Bt].firstTemplatePass);
                return Ie = e, Re = !0, Pe = t, n
            }

            function sn(t) {
                var e = Pe[Bt];
                Je(Pe) ? Pe[qt] &= -2 : (Ze(Pe, e.viewHooks, e.viewCheckHooks, tn), Pe[qt] &= -11, Pe[qt] |= 32, Pe[Kt] = e.bindingStartIndex), un(t, null)
            }
            var cn = !0;

            function ln(t) {
                var e = cn;
                return cn = t, e
            }
            var fn = 255,
                pn = 0;

            function hn(t, e) {
                t.push(0, 0, 0, 0, 0, 0, 0, 0, e)
            }

            function dn(t, e) {
                return -1 === t.injectorIndex || t.parent && t.parent.injectorIndex === t.injectorIndex || null == e[t.injectorIndex + fe] ? -1 : t.injectorIndex
            }

            function vn(t, e) {
                if (t.parent && -1 !== t.parent.injectorIndex) return t.parent.injectorIndex;
                for (var n = e[Wt], r = 1; n && -1 === n.injectorIndex;) n = (e = e[re]) ? e[Wt] : null, r++;
                return n ? n.injectorIndex | r << 16 : -1
            }
            var gn = {};

            function yn(t, e, n, r, o, i) {
                var a = e[Bt],
                    u = a.data[t + le],
                    s = function(t, e, n, r, o) {
                        for (var i = t.providerIndexes, a = e[Bt].data, u = 65535 & i, s = t.directiveStart, c = i >> 16, l = o ? u + c : t.directiveEnd, f = r ? u : u + c; f < l; f++) {
                            var p = a[f];
                            if (f < s && n === p || f >= s && p.type === n) return f
                        }
                        if (o) {
                            var h = a[s];
                            if (h && be(h) && h.type === n) return s
                        }
                        return null
                    }(u, e, n, null == r ? function(t) {
                        return 1 == (1 & t.flags)
                    }(u) && cn : r != a && 3 === u.type, o & je.Host && i === u);
                return null !== s ? mn(a.data, e, s, u) : gn
            }

            function mn(t, e, n, r) {
                var o, i = e[n];
                if (null != (o = i) && "object" == typeof o && Object.getPrototypeOf(o) == ve) {
                    var a = i;
                    if (a.resolving) throw new Error("Circular dep for " + ge(t[n]));
                    var u = ln(a.canSeeViewProviders);
                    a.resolving = !0;
                    var s = void 0;
                    a.injectImpl && (s = Ve(a.injectImpl));
                    var c = We(),
                        l = Qe();
                    $e(r, e);
                    try {
                        i = e[n] = a.factory(null, t, e, r)
                    } finally {
                        a.injectImpl && Ve(s), ln(u), a.resolving = !1, $e(c, l)
                    }
                }
                return i
            }

            function wn(t, e, n) {
                var r = 64 & t,
                    o = 32 & t;
                return !!((128 & t ? r ? o ? n[e + 7] : n[e + 6] : o ? n[e + 5] : n[e + 4] : r ? o ? n[e + 3] : n[e + 2] : o ? n[e + 1] : n[e]) & 1 << t)
            }

            function bn(t, e) {
                return !(t & je.Self || t & je.Host && e)
            }
            var _n = function() {
                function t(t, e) {
                    this._tNode = t, this._lView = e
                }
                return t.prototype.get = function(t, e) {
                    return function(t, e, n, r, o) {
                        if (void 0 === r && (r = je.Default), t) {
                            var i = function(t) {
                                if ("string" == typeof t) return t.charCodeAt(0) || 0;
                                var e = t[Ct];
                                return "number" == typeof e ? e & fn : e
                            }(n);
                            if ("function" == typeof i) {
                                var a = We(),
                                    u = Qe();
                                $e(t, e);
                                try {
                                    var s = i();
                                    if (null != s || r & je.Optional) return s;
                                    throw new Error("No provider for " + ge(n) + "!")
                                } finally {
                                    $e(a, u)
                                }
                            } else if ("number" == typeof i) {
                                var c = null,
                                    l = dn(t, e),
                                    f = he,
                                    p = r & je.Host ? Te(e)[Wt] : null;
                                for ((-1 === l || r & je.SkipSelf) && (f = -1 === l ? vn(t, e) : e[l + fe], bn(r, !1) ? (c = e[Bt], l = xe(f), e = Se(f, e)) : l = -1); - 1 !== l;) {
                                    f = e[l + fe];
                                    var h = e[Bt];
                                    if (wn(i, l, h.data)) {
                                        var d = yn(l, e, n, c, r, p);
                                        if (d !== gn) return d
                                    }
                                    bn(r, e[Bt].data[l + le] === p) && wn(i, l, e) ? (c = h, l = xe(f), e = Se(f, e)) : l = -1
                                }
                            }
                        }
                        if (r & je.Optional && void 0 === o && (o = null), 0 == (r & (je.Self | je.Host))) {
                            var v = e[Yt];
                            return v ? v.get(n, o, r & je.Optional) : Le(n, o, r & je.Optional)
                        }
                        if (r & je.Optional) return o;
                        throw new Error("NodeInjector: NOT_FOUND [" + ge(n) + "]")
                    }(this._tNode, this._lView, t, void 0, e)
                }, t
            }();

            function Cn(t, e) {
                t[ce] = e
            }
            var xn = /([A-Z])/g;

            function Sn(t) {
                try {
                    return null != t ? t.toString().slice(0, 30) : t
                } catch (e) {
                    return "[ERROR] Exception while trying to serialize the value"
                }
            }

            function En(t, e) {
                var n = In(t),
                    r = In(e);
                return n && r ? function(t, e, n) {
                    for (var r = t[jt()](), o = e[jt()]();;) {
                        var i = r.next(),
                            a = o.next();
                        if (i.done && a.done) return !0;
                        if (i.done || a.done) return !1;
                        if (!n(i.value, a.value)) return !1
                    }
                }(t, e, En) : !(n || !t || "object" != typeof t && "function" != typeof t || r || !e || "object" != typeof e && "function" != typeof e) || Ut(t, e)
            }
            var Tn = function() {
                    function t(t) {
                        this.wrapped = t
                    }
                    return t.wrap = function(e) {
                        return new t(e)
                    }, t.unwrap = function(e) {
                        return t.isWrapped(e) ? e.wrapped : e
                    }, t.isWrapped = function(e) {
                        return e instanceof t
                    }, t
                }(),
                kn = function() {
                    function t(t, e, n) {
                        this.previousValue = t, this.currentValue = e, this.firstChange = n
                    }
                    return t.prototype.isFirstChange = function() {
                        return this.firstChange
                    }, t
                }();

            function In(t) {
                return !!Rn(t) && (Array.isArray(t) || !(t instanceof Map) && jt() in t)
            }

            function Rn(t) {
                return null !== t && ("function" == typeof t || "object" == typeof t)
            }
            var Pn = {},
                An = "ngProjectAs";

            function On(t) {
                return !!t.listen
            }
            var Nn = {
                    createRenderer: function(t, e) {
                        return document
                    }
                },
                Dn = [];

            function jn(t, e, n, r, o) {
                0 === t ? On(e) ? e.insertBefore(n, r, o) : n.insertBefore(r, o, !0) : 1 === t ? On(e) ? e.removeChild(n, r) : n.removeChild(r) : 2 === t && e.destroyNode(r)
            }

            function Mn(t) {
                var e = t[Bt].childIndex;
                return -1 === e ? null : t[e]
            }

            function Un(t, e) {
                var n;
                return t.length >= oe && (n = t[Wt]) && 2 === n.type ? function(e, n) {
                    if (-1 === e.index) {
                        var r = t[ne];
                        return r > -1 ? t[Zt][r] : null
                    }
                    return t[Zt][e.parent.index]
                }(n) : t[Zt] === e ? null : t[Zt]
            }

            function Vn(t) {
                if (t.length >= oe) {
                    var e = t;
                    ! function(t) {
                        var e, n = t[Bt];
                        null != n && null != (e = n.destroyHooks) && Ge(t, e)
                    }(e), (o = (r = e)[Bt] && r[Bt].pipeDestroyHooks) && Ge(r, o),
                        function(t) {
                            var e = t[Bt].cleanup;
                            if (null != e) {
                                for (var n = t[$t], r = 0; r < e.length - 1; r += 2)
                                    if ("string" == typeof e[r]) {
                                        var o = n[e[r + 2]],
                                            i = ye(t[e[r + 1]]),
                                            a = e[r + 3];
                                        "boolean" == typeof a ? i.removeEventListener(e[r], o, a) : a >= 0 ? n[a]() : n[-a].unsubscribe(), r += 2
                                    } else "number" == typeof e[r] ? (0, n[e[r]])() : e[r].call(n[e[r + 1]]);
                                t[$t] = null
                            }
                        }(e);
                    var n = e[Wt];
                    n && 3 === n.type && On(e[te]) && e[te].destroy()
                }
                var r, o
            }
            var Hn = "@",
                Ln = Promise.resolve(null);

            function Fn(t) {
                var e = t[Bt];
                if (e.firstTemplatePass = !1, an(!1), !Je(t)) {
                    var n = en();
                    (function(t, e, n) {
                        !n && 32 & t[qt] && (Ze(t, e.initHooks, e.checkHooks, n), t[qt] &= -33)
                    })(t, e, n),
                    function(t) {
                        for (var e = Mn(t); null !== e; e = e[Gt])
                            if (e.length < oe && -1 === e[ie])
                                for (var n = e, r = 0; r < n[ae].length; r++) {
                                    var o = n[ae][r];
                                    qn(o, o[Bt], o[Xt])
                                }
                    }(t),
                    function(t) {
                        if (null != t.contentQueries)
                            for (var e = 0; e < t.contentQueries.length; e += 2) {
                                var n = t.contentQueries[e];
                                t.data[n].contentQueriesRefresh(n - oe, t.contentQueries[e + 1])
                            }
                    }(e), Ze(t, e.contentHooks, e.contentCheckHooks, n),
                        function(t, e) {
                            if (t.expandoInstructions)
                                for (var n = e[Kt] = t.expandoStartIndex, r = -1, o = -1, i = 0; i < t.expandoInstructions.length; i++) {
                                    var a = t.expandoInstructions[i];
                                    if ("number" == typeof a)
                                        if (a <= 0) {
                                            o = -a;
                                            var u = t.expandoInstructions[++i];
                                            r = n += pe + u
                                        } else n += a;
                                    else null !== a && (e[Kt] = n, a(2, ye(e[r]), o)), r++
                                }
                        }(e, t)
                }! function(t) {
                    if (null != t)
                        for (var e = 0; e < t.length; e++) void 0, void 0, 16 == (16 & (n = we(t[e], Qe()))[qt]) && 12 & n[qt] && (function(t) {
                            for (var e = t[Bt], n = t.length; n < e.blueprint.length; n++) t[n] = e.blueprint[n]
                        }(n), tr(n, n[Xt]));
                    var n
                }(e.components)
            }

            function zn(t, e, n, r, o, i, a, u) {
                var s = e.blueprint.slice();
                return s[qt] = 51 | r, s[Zt] = s[re] = t, s[Xt] = n, s[Jt] = o || t && t[Jt], s[te] = i || t && t[te], s[ee] = a || t && t[ee] || null, s[Yt] = u || t && t[Yt] || null, s
            }

            function Bn(t, e, n, r, o) {
                var i = Qe(),
                    a = i[Bt],
                    u = t + oe;
                i[u] = n;
                var s = a.data[u];
                null == s && (s = a.data[u] = $n(i, e, u, r, o, null));
                var c = We(),
                    l = Xe();
                return c && (!l || null != c.child || null === s.parent && 2 !== c.type ? l || (c.next = s) : c.child = s), null == a.firstChild && (a.firstChild = s), Ke(s), Ye(!0), s
            }

            function qn(t, e, n) {
                var r, o = Xe(),
                    i = We();
                if (Ye(!0), Ke(null), 128 & t[qt]) Xn(function(t) {
                    for (var e = Array.isArray(t) ? t : Ce(t); e && !(128 & e[qt]);) e = e[Zt];
                    return e
                }(t)[Xt]);
                else try {
                    Ye(!0), Ke(null), r = un(t, t[Wt]), Wn(), e.template(Gn(t), n), t[Bt].firstTemplatePass = !1, an(!1), Fn(t)
                } finally {
                    sn(r), Ye(o), Ke(i)
                }
            }

            function Zn(t, e, n) {
                var r = t[Jt],
                    o = un(t, t[Wt]),
                    i = !en();
                try {
                    i && r.begin && r.begin(), Je(t) && (n && (Wn(), n(1, e)), Fn(t), t[qt] &= -2), n && n(2, e), Fn(t)
                } finally {
                    i && r.end && r.end(), sn(o)
                }
            }

            function Gn(t) {
                return Je(t) ? 1 : 2
            }
            var Qn = null;

            function Wn() {
                Qn = null
            }

            function Kn(t, e, n, r, o, i, a) {
                var u = oe + n,
                    s = u + r,
                    c = function(t, e) {
                        var n = new Array(e).fill(null, 0, t).fill(Pn, t);
                        return n[ne] = -1, n[Kt] = t, n
                    }(u, s);
                return c[Bt] = {
                    id: t,
                    blueprint: c,
                    template: e,
                    viewQuery: a,
                    node: null,
                    data: c.slice(),
                    childIndex: -1,
                    bindingStartIndex: u,
                    expandoStartIndex: s,
                    expandoInstructions: null,
                    firstTemplatePass: !0,
                    initHooks: null,
                    checkHooks: null,
                    contentHooks: null,
                    contentCheckHooks: null,
                    viewHooks: null,
                    viewCheckHooks: null,
                    destroyHooks: null,
                    pipeDestroyHooks: null,
                    cleanup: null,
                    contentQueries: null,
                    components: null,
                    directiveRegistry: "function" == typeof o ? o() : o,
                    pipeRegistry: "function" == typeof i ? i() : i,
                    firstChild: null
                }
            }

            function $n(t, e, n, r, o, i) {
                var a = We(),
                    u = Xe() ? a : a && a.parent,
                    s = u && t && u !== t[Wt] ? u : null;
                return {
                    type: e,
                    index: n,
                    injectorIndex: s ? s.injectorIndex : -1,
                    directiveStart: -1,
                    directiveEnd: -1,
                    flags: 0,
                    providerIndexes: 0,
                    tagName: r,
                    attrs: o,
                    localNames: null,
                    initialInputs: void 0,
                    inputs: void 0,
                    outputs: void 0,
                    tViews: i,
                    next: null,
                    child: null,
                    parent: s,
                    detached: null,
                    stylingTemplate: null,
                    projection: null
                }
            }

            function Xn(t) {
                for (var e = 0; e < t.components.length; e++) {
                    var n = t.components[e];
                    Zn(Ce(n), n)
                }
            }

            function Yn(t, e) {
                var n = t[Jt];
                n.begin && n.begin(), Je(t) && tr(t, e), tr(t, e), n.end && n.end()
            }

            function Jn(t) {
                Xn(t[Xt])
            }

            function tr(t, e) {
                var n = t[Bt],
                    r = un(t, t[Wt]),
                    o = n.template,
                    i = n.viewQuery;
                try {
                    Wn(),
                        function(e, n, r) {
                            e && Je(t) && e(1, r)
                        }(i, 0, e), o(Gn(t), e), Fn(t),
                        function(e, n, r) {
                            e && !Je(t) && e(2, r)
                        }(i, 0, e)
                } finally {
                    sn(r)
                }
            }
            var er = Ln;

            function nr(t, e, n, r, o, i) {
                Re = !1, Ie = null;
                var a, u = n[Bt],
                    s = zn(n, (a = e.template).ngPrivateData || (a.ngPrivateData = Kn(-1, a, e.consts, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery)), null, e.onPush ? 8 : 4, r, o, i),
                    c = Bn(0, 3, t, null, null);
                return u.firstTemplatePass && (function(t, e, n) {
                    var r = "string" != typeof n ? n[Ct] : n.charCodeAt(0) || 0;
                    null == r && (r = n[Ct] = pn++);
                    var o = r & fn,
                        i = 1 << o,
                        a = 64 & o,
                        u = 32 & o,
                        s = e.data;
                    128 & o ? a ? u ? s[t + 7] |= i : s[t + 6] |= i : u ? s[t + 5] |= i : s[t + 4] |= i : a ? u ? s[t + 3] |= i : s[t + 2] |= i : u ? s[t + 1] |= i : s[t] |= i
                }(function(t, e) {
                    var n = dn(t, e);
                    if (-1 !== n) return n;
                    var r = e[Bt];
                    r.firstTemplatePass && (t.injectorIndex = e.length, hn(r.data, t), hn(e, null), hn(r.blueprint, null));
                    var o = vn(t, e),
                        i = xe(o),
                        a = Se(o, e),
                        u = t.injectorIndex;
                    if (o !== he)
                        for (var s = a[Bt].data, c = 0; c < 8; c++) e[u + c] = a[i + c] | s[i + c];
                    return e[u + fe] = o, u
                }(c, n), n[Bt], e.type), c.flags = 1, function(t, e, n) {
                    t.flags = 1 & t.flags, t.directiveStart = e, t.directiveEnd = e + 1, t.providerIndexes = e
                }(c, n.length), function(t) {
                    var e = Qe()[Bt];
                    (e.components || (e.components = [])).push(t.index)
                }(c)), s[Qt] = n[oe], s[Wt] = c, n[oe] = s
            }

            function rr(t, e, n, r, o) {
                var i = n[Bt],
                    a = function(t, e, n) {
                        var r = We();
                        t.firstTemplatePass && (n.providersResolver && n.providersResolver(n), function(t, e, n) {
                            var o = -(r.index - oe),
                                i = t.data.length - (65535 & r.providerIndexes);
                            (t.expandoInstructions || (t.expandoInstructions = [])).push(o, i, 1)
                        }(t), function(t, e, n, r) {
                            t.data.push(n);
                            var o = new de(r, be(n), null);
                            t.blueprint.push(o), e.push(o)
                        }(t, e, n, n.factory));
                        var o = mn(t.data, e, e.length - 1, r);
                        return function(t, e, n, r) {
                            var o = me(e, t);
                            Cn(n, t), o && Cn(o, t), null != r.attributes && 3 == e.type && function(t, e) {
                                for (var n = Qe()[te], r = On(n), o = 0; o < e.length;) {
                                    var i = e[o++];
                                    if ("number" == typeof i) {
                                        if (0 !== i) break;
                                        var a = e[o++],
                                            u = e[o++],
                                            s = e[o++];
                                        r ? n.setAttribute(t, u, s, a) : t.setAttributeNS(a, u, s)
                                    } else s = e[o++], i !== An && (i[0] === Hn ? r && n.setProperty(t, i, s) : r ? n.setAttribute(t, i, s) : t.setAttribute(i, s))
                                }
                            }(o, r.attributes)
                        }(e, r, o, n), o
                    }(i, n, e);
                if (r.components.push(a), t[Xt] = a, o && o.forEach(function(t) {
                        return t(a, e)
                    }), i.firstTemplatePass && e.hostBindings) {
                    var u = We();
                    e.hostBindings(1, a, u.index - oe)
                }
                return a
            }

            function or(t, e) {
                return {
                    components: [],
                    scheduler: t || Ee,
                    clean: er,
                    playerHandler: e || null,
                    flags: 0
                }
            }

            function ir(t, e) {
                var n, r, o, i, a = Ce(t)[Bt],
                    u = a.data.length - 1;
                n = u, o = e.doCheck, i = a, (r = e.onInit) && (i.initHooks || (i.initHooks = [])).push(n, r), o && ((i.initHooks || (i.initHooks = [])).push(n, o), (i.checkHooks || (i.checkHooks = [])).push(n, o)),
                    function(t, e) {
                        if (t.firstTemplatePass)
                            for (var n = e.directiveStart, r = e.directiveEnd; n < r; n++) {
                                var o = t.data[n];
                                ze(o, t, n), Be(o, t, n), qe(o, t, n)
                            }
                    }(a, {
                        directiveStart: u,
                        directiveEnd: u + 1
                    })
            }

            function ar() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
            }
            var ur = "__source",
                sr = new Object,
                cr = sr,
                lr = new Tt("INJECTOR"),
                fr = function() {
                    function t() {}
                    return t.prototype.get = function(t, e) {
                        if (void 0 === e && (e = sr), e === sr) throw new Error("NullInjectorError: No provider for " + Vt(t) + "!");
                        return e
                    }, t
                }(),
                pr = function() {
                    function t() {}
                    return t.create = function(t, e) {
                        return Array.isArray(t) ? new Cr(t, e) : new Cr(t.providers, t.parent, t.name || null)
                    }, t.THROW_IF_NOT_FOUND = sr, t.NULL = new fr, t.ngInjectableDef = xt({
                        providedIn: "any",
                        factory: function() {
                            return He(lr)
                        }
                    }), t.__NG_ELEMENT_ID__ = function() {
                        return hr()
                    }, t
                }(),
                hr = ar,
                dr = function(t) {
                    return t
                },
                vr = [],
                gr = dr,
                yr = function() {
                    return Array.prototype.slice.call(arguments)
                },
                mr = yt({
                    provide: String,
                    useValue: yt
                }),
                wr = pr.NULL,
                br = /\n/gm,
                _r = "\u0275",
                Cr = function() {
                    function t(t, e, n) {
                        void 0 === e && (e = wr), void 0 === n && (n = null), this.parent = e, this.source = n;
                        var r = this._records = new Map;
                        r.set(pr, {
                                token: pr,
                                fn: dr,
                                deps: vr,
                                value: this,
                                useNew: !1
                            }), r.set(lr, {
                                token: lr,
                                fn: dr,
                                deps: vr,
                                value: this,
                                useNew: !1
                            }),
                            function t(e, n) {
                                if (n)
                                    if ((n = Ft(n)) instanceof Array)
                                        for (var r = 0; r < n.length; r++) t(e, n[r]);
                                    else {
                                        if ("function" == typeof n) throw Er("Function/Class not supported", n);
                                        if (!n || "object" != typeof n || !n.provide) throw Er("Unexpected provider", n);
                                        var o = Ft(n.provide),
                                            i = function(t) {
                                                var e = function(t) {
                                                        var e = vr,
                                                            n = t.deps;
                                                        if (n && n.length) {
                                                            e = [];
                                                            for (var r = 0; r < n.length; r++) {
                                                                var o = 6;
                                                                if ((s = Ft(n[r])) instanceof Array)
                                                                    for (var i = 0, a = s; i < a.length; i++) {
                                                                        var u = a[i];
                                                                        u instanceof Oe || u == Oe ? o |= 1 : u instanceof De || u == De ? o &= -3 : u instanceof Ne || u == Ne ? o &= -5 : s = u instanceof Ae ? u.token : Ft(u)
                                                                    }
                                                                e.push({
                                                                    token: s,
                                                                    options: o
                                                                })
                                                            }
                                                        } else if (t.useExisting) {
                                                            var s;
                                                            e = [{
                                                                token: s = Ft(t.useExisting),
                                                                options: 6
                                                            }]
                                                        } else if (!(n || mr in t)) throw Er("'deps' required", t);
                                                        return e
                                                    }(t),
                                                    n = dr,
                                                    r = vr,
                                                    o = !1,
                                                    i = Ft(t.provide);
                                                if (mr in t) r = t.useValue;
                                                else if (t.useFactory) n = t.useFactory;
                                                else if (t.useExisting);
                                                else if (t.useClass) o = !0, n = Ft(t.useClass);
                                                else {
                                                    if ("function" != typeof i) throw Er("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable", t);
                                                    o = !0, n = i
                                                }
                                                return {
                                                    deps: e,
                                                    fn: n,
                                                    useNew: o,
                                                    value: r
                                                }
                                            }(n);
                                        if (!0 === n.multi) {
                                            var a = e.get(o);
                                            if (a) {
                                                if (a.fn !== yr) throw xr(o)
                                            } else e.set(o, a = {
                                                token: n.provide,
                                                deps: [],
                                                useNew: !1,
                                                fn: yr,
                                                value: vr
                                            });
                                            a.deps.push({
                                                token: o = n,
                                                options: 6
                                            })
                                        }
                                        var u = e.get(o);
                                        if (u && u.fn == yr) throw xr(o);
                                        e.set(o, i)
                                    }
                            }(r, t)
                    }
                    return t.prototype.get = function(t, e, n) {
                        void 0 === n && (n = je.Default);
                        var r = this._records.get(t);
                        try {
                            return function t(e, n, r, o, i, a) {
                                try {
                                    return function(e, n, r, o, i, a) {
                                        var u, s;
                                        if (!n || a & je.SkipSelf) a & je.Self || (s = o.get(e, i, je.Default));
                                        else {
                                            if ((s = n.value) == gr) throw Error(_r + "Circular dependency");
                                            if (s === vr) {
                                                n.value = gr;
                                                var c = n.useNew,
                                                    f = n.fn,
                                                    p = n.deps,
                                                    h = vr;
                                                if (p.length) {
                                                    h = [];
                                                    for (var d = 0; d < p.length; d++) {
                                                        var v = p[d],
                                                            g = v.options,
                                                            y = 2 & g ? r.get(v.token) : void 0;
                                                        h.push(t(v.token, y, r, y || 4 & g ? o : wr, 1 & g ? null : pr.THROW_IF_NOT_FOUND, je.Default))
                                                    }
                                                }
                                                n.value = s = c ? new((u = f).bind.apply(u, l([void 0], h))) : f.apply(void 0, h)
                                            }
                                        }
                                        return s
                                    }(e, n, r, o, i, a)
                                } catch (u) {
                                    throw u instanceof Error || (u = new Error(u)), (u.ngTempTokenPath = u.ngTempTokenPath || []).unshift(e), n && n.value == gr && (n.value = vr), u
                                }
                            }(t, r, this._records, this.parent, e, n)
                        } catch (i) {
                            var o = i.ngTempTokenPath;
                            throw t[ur] && o.unshift(t[ur]), i.message = Sr("\n" + i.message, o, this.source), i.ngTokenPath = o, i.ngTempTokenPath = null, i
                        }
                    }, t.prototype.toString = function() {
                        var t = [];
                        return this._records.forEach(function(e, n) {
                            return t.push(Vt(n))
                        }), "StaticInjector[" + t.join(", ") + "]"
                    }, t
                }();

            function xr(t) {
                return Er("Cannot mix multi providers and regular providers", t)
            }

            function Sr(t, e, n) {
                void 0 === n && (n = null), t = t && "\n" === t.charAt(0) && t.charAt(1) == _r ? t.substr(2) : t;
                var r = Vt(e);
                if (e instanceof Array) r = e.map(Vt).join(" -> ");
                else if ("object" == typeof e) {
                    var o = [];
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var a = e[i];
                            o.push(i + ":" + ("string" == typeof a ? JSON.stringify(a) : Vt(a)))
                        } r = "{" + o.join(", ") + "}"
                }
                return "StaticInjectorError" + (n ? "(" + n + ")" : "") + "[" + r + "]: " + t.replace(br, "\n  ")
            }

            function Er(t, e) {
                return new Error(Sr(t, e))
            }
            var Tr = new Tt("The presence of this token marks an injector as being the root injector."),
                kr = {},
                Ir = {},
                Rr = [],
                Pr = void 0;

            function Ar() {
                return void 0 === Pr && (Pr = new fr), Pr
            }
            var Or = function() {
                function t(t, e, n) {
                    var r = this;
                    this.parent = n, this.records = new Map, this.injectorDefTypes = new Set, this.onDestroy = new Set, this.destroyed = !1;
                    var o = [];
                    jr([t], function(t) {
                        return r.processInjectorType(t, [], o)
                    }), e && jr(e, function(n) {
                        return r.processProvider(n, t, e)
                    }), this.records.set(lr, Dr(void 0, this)), this.isRootInjector = this.records.has(Tr), this.injectorDefTypes.forEach(function(t) {
                        return r.get(t)
                    })
                }
                return t.prototype.destroy = function() {
                    this.assertNotDestroyed(), this.destroyed = !0;
                    try {
                        this.onDestroy.forEach(function(t) {
                            return t.ngOnDestroy()
                        })
                    } finally {
                        this.records.clear(), this.onDestroy.clear(), this.injectorDefTypes.clear()
                    }
                }, t.prototype.get = function(t, e, n) {
                    void 0 === e && (e = cr), void 0 === n && (n = je.Default), this.assertNotDestroyed();
                    var r, o = Ue(this);
                    try {
                        if (!(n & je.SkipSelf)) {
                            var i = this.records.get(t);
                            if (void 0 === i) {
                                var a = ("function" == typeof(r = t) || "object" == typeof r && r instanceof Tt) && St(t);
                                a && this.injectableDefInScope(a) && (i = Dr(Nr(t), kr), this.records.set(t, i))
                            }
                            if (void 0 !== i) return this.hydrate(t, i)
                        }
                        return (n & je.Self ? Ar() : this.parent).get(t, e)
                    } finally {
                        Ue(o)
                    }
                }, t.prototype.assertNotDestroyed = function() {
                    if (this.destroyed) throw new Error("Injector has already been destroyed.")
                }, t.prototype.processInjectorType = function(t, e, n) {
                    var r = this;
                    if (t = Ft(t)) {
                        var o = Et(t),
                            i = null == o && t.ngModule || void 0,
                            a = void 0 === i ? t : i,
                            u = -1 !== n.indexOf(a),
                            s = void 0 !== i && t.providers || Rr;
                        if (void 0 !== i && (o = Et(i)), null != o) {
                            if (this.injectorDefTypes.add(a), this.records.set(a, Dr(o.factory, kr)), null != o.imports && !u) {
                                n.push(a);
                                try {
                                    jr(o.imports, function(t) {
                                        return r.processInjectorType(t, e, n)
                                    })
                                } finally {}
                            }
                            var c = o.providers;
                            if (null != c && !u) {
                                var l = t;
                                jr(c, function(t) {
                                    return r.processProvider(t, l, c)
                                })
                            }
                            var f = t.ngModule;
                            jr(s, function(t) {
                                return r.processProvider(t, f, s)
                            })
                        }
                    }
                }, t.prototype.processProvider = function(t, e, n) {
                    var r = Ur(t = Ft(t)) ? t : Ft(t && t.provide),
                        o = function(t, e, n) {
                            var r = function(t, e, n) {
                                var r, o = void 0;
                                if (Ur(t)) return Nr(Ft(t));
                                if (Mr(t)) o = function() {
                                    return Ft(t.useValue)
                                };
                                else if ((r = t) && r.useExisting) o = function() {
                                    return He(Ft(t.useExisting))
                                };
                                else if (t && t.useFactory) o = function() {
                                    return t.useFactory.apply(t, l(Fe(t.deps || [])))
                                };
                                else {
                                    var i = Ft(t && (t.useClass || t.provide));
                                    if (!i) {
                                        var a = "";
                                        throw e && n && (a = " - only instances of Provider and Type are allowed, got: [" + n.map(function(e) {
                                            return e == t ? "?" + t + "?" : "..."
                                        }).join(", ") + "]"), new Error("Invalid provider for the NgModule '" + Vt(e) + "'" + a)
                                    }
                                    if (!t.deps) return Nr(i);
                                    o = function() {
                                        return new(i.bind.apply(i, l([void 0], Fe(t.deps))))
                                    }
                                }
                                return o
                            }(t, e, n);
                            return Mr(t) ? Dr(void 0, t.useValue) : Dr(r, kr)
                        }(t, e, n);
                    if (Ur(t) || !0 !== t.multi) {
                        var i = this.records.get(r);
                        if (i && void 0 !== i.multi) throw new Error("Mixed multi-provider for " + Vt(r))
                    } else {
                        var a = this.records.get(r);
                        if (a) {
                            if (void 0 === a.multi) throw new Error("Mixed multi-provider for " + r + ".")
                        } else(a = Dr(void 0, kr, !0)).factory = function() {
                            return Fe(a.multi)
                        }, this.records.set(r, a);
                        r = t, a.multi.push(t)
                    }
                    this.records.set(r, o)
                }, t.prototype.hydrate = function(t, e) {
                    if (e.value === Ir) throw new Error("Cannot instantiate cyclic dependency! " + Vt(t));
                    var n;
                    return e.value === kr && (e.value = Ir, e.value = e.factory()), "object" == typeof e.value && e.value && "object" == typeof(n = e.value) && null != n && n.ngOnDestroy && "function" == typeof n.ngOnDestroy && this.onDestroy.add(e.value), e.value
                }, t.prototype.injectableDefInScope = function(t) {
                    return !!t.providedIn && ("string" == typeof t.providedIn ? "any" === t.providedIn || "root" === t.providedIn && this.isRootInjector : this.injectorDefTypes.has(t.providedIn))
                }, t
            }();

            function Nr(t) {
                var e = St(t);
                if (null === e) {
                    var n = Et(t);
                    if (null !== n) return n.factory;
                    if (t instanceof Tt) throw new Error("Token " + Vt(t) + " is missing an ngInjectableDef definition.");
                    if (t instanceof Function) {
                        var r = t.length;
                        if (r > 0) {
                            var o = new Array(r).fill("?");
                            throw new Error("Can't resolve all parameters for " + Vt(t) + ": (" + o.join(", ") + ").")
                        }
                        return function() {
                            return new t
                        }
                    }
                    throw new Error("unreachable")
                }
                return e.factory
            }

            function Dr(t, e, n) {
                return void 0 === n && (n = !1), {
                    factory: t,
                    value: e,
                    multi: n ? [] : void 0
                }
            }

            function jr(t, e) {
                t.forEach(function(t) {
                    return Array.isArray(t) ? jr(t, e) : e(t)
                })
            }

            function Mr(t) {
                return t && "object" == typeof t && mr in t
            }

            function Ur(t) {
                return "function" == typeof t
            }
            var Vr = function() {
                    return function() {}
                }(),
                Hr = function() {
                    return function() {}
                }();

            function Lr(t) {
                var e = Error("No component factory found for " + Vt(t) + ". Did you add it to @NgModule.entryComponents?");
                return e[zr] = t, e
            }
            var Fr, zr = "ngComponent",
                Br = function() {
                    function t() {}
                    return t.prototype.resolveComponentFactory = function(t) {
                        throw Lr(t)
                    }, t
                }(),
                qr = function() {
                    function t() {}
                    return t.NULL = new Br, t
                }(),
                Zr = function() {
                    function t(t, e, n) {
                        this._parent = e, this._ngModule = n, this._factories = new Map;
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            this._factories.set(o.componentType, o)
                        }
                    }
                    return t.prototype.resolveComponentFactory = function(t) {
                        var e = this._factories.get(t);
                        if (!e && this._parent && (e = this._parent.resolveComponentFactory(t)), !e) throw Lr(t);
                        return new Gr(e, this._ngModule)
                    }, t
                }(),
                Gr = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.factory = e, r.ngModule = n, r.selector = e.selector, r.componentType = e.componentType, r.ngContentSelectors = e.ngContentSelectors, r.inputs = e.inputs, r.outputs = e.outputs, r
                    }
                    return o(e, t), e.prototype.create = function(t, e, n, r) {
                        return this.factory.create(t, e, n, r || this.ngModule)
                    }, e
                }(Hr),
                Qr = function() {
                    return function() {}
                }(),
                Wr = function() {
                    return function() {}
                }(),
                Kr = function(t) {
                    function e(e) {
                        var n = t.call(this, e, null, -1) || this;
                        return n._view = e, n
                    }
                    return o(e, t), e.prototype.detectChanges = function() {
                        Jn(this._view)
                    }, e.prototype.checkNoChanges = function() {
                        ! function(t) {
                            nn(!0);
                            try {
                                Jn(t)
                            } finally {
                                nn(!1)
                            }
                        }(this._view)
                    }, Object.defineProperty(e.prototype, "context", {
                        get: function() {
                            return null
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e
                }(function() {
                    function t(t, e, n) {
                        this._context = e, this._componentIndex = n, this._appRef = null, this._viewContainerRef = null, this._tViewNode = null, this._lView = t
                    }
                    return Object.defineProperty(t.prototype, "rootNodes", {
                        get: function() {
                            return null == this._lView[Qt] ? function t(e, n, r) {
                                for (var o = n.child; o;) r.push(me(o, e)), 4 === o.type && t(e, o, r), o = o.next;
                                return r
                            }(this._lView, this._lView[Wt], []) : []
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "context", {
                        get: function() {
                            return this._context ? this._context : this._lookUpContext()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "destroyed", {
                        get: function() {
                            return 64 == (64 & this._lView[qt])
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.destroy = function() {
                        if (this._appRef) this._appRef.detachView(this);
                        else if (this._viewContainerRef) {
                            var t = this._viewContainerRef.indexOf(this);
                            t > -1 && this._viewContainerRef.detach(t), this._viewContainerRef = null
                        }
                        var e, n;
                        On(n = (e = this._lView)[te]) && n.destroyNode && function(t, n, r, o, i) {
                                for (var a = e[Bt].node, u = -1, s = e, c = a.child; c;) {
                                    var l = null;
                                    if (3 === c.type) {
                                        jn(2, r, null, me(c, s), i);
                                        var f = s[c.index];
                                        v = f, Array.isArray(v) && v.length === se && jn(2, r, null, f[ue], i)
                                    } else if (0 === c.type) {
                                        var p = s[c.index];
                                        jn(2, r, null, p[ue], i), p[ae].length && (l = (s = p[ae][0])[Bt].node, i = p[ue])
                                    } else if (1 === c.type) {
                                        var h = Te(s),
                                            d = h[Wt].projection[c.projection];
                                        Dn[++u] = c, Dn[++u] = s, d && (l = (s = h[Zt])[Bt].data[d.index])
                                    } else l = c.child;
                                    if (null === l)
                                        for (null === c.next && 2 & c.flags && (s = Dn[u--], c = Dn[u--]), l = c.next; !l;) {
                                            if (null === (c = c.parent || s[Bt].node) || c === a) return null;
                                            0 === c.type && (i = (s = s[Zt])[c.index][ue]), l = 2 === c.type && s[Gt] ? (s = s[Gt])[Bt].node : c.next
                                        }
                                    c = l
                                }
                                var v
                            }(0, 0, n),
                            function(t) {
                                if (-1 === t[Bt].childIndex) return Vn(t);
                                for (var e = Mn(t); e;) {
                                    var n = null;
                                    if (e.length >= oe ? e[Bt].childIndex > -1 && (n = Mn(e)) : e[ae].length && (n = e[ae][0]), null == n) {
                                        for (; e && !e[Gt] && e !== t;) Vn(e), e = Un(e, t);
                                        Vn(e || t), n = e && e[Gt]
                                    }
                                    e = n
                                }
                            }(e), e[qt] |= 64
                    }, t.prototype.onDestroy = function(t) {
                        var e, n;
                        n = t,
                            function(t) {
                                return t[$t] || (t[$t] = [])
                            }(e = this._lView).push(n), e[Bt].firstTemplatePass && function(t) {
                                return t[Bt].cleanup || (t[Bt].cleanup = [])
                            }(e).push(e[$t].length - 1, null)
                    }, t.prototype.markForCheck = function() {
                        ! function(t) {
                            for (; t && !(128 & t[qt]);) t[qt] |= 8, t = t[Zt];
                            var e, n, r;
                            t[qt] |= 8, r = 0 === (e = t[Xt]).flags, e.flags |= 1, r && e.clean == Ln && (e.clean = new Promise(function(t) {
                                return n = t
                            }), e.scheduler(function() {
                                if (1 & e.flags && (e.flags &= -2, Xn(e)), 2 & e.flags) {
                                    e.flags &= -3;
                                    var t = e.playerHandler;
                                    t && t.flushPlayers()
                                }
                                e.clean = Ln, n(null)
                            }))
                        }(this._lView)
                    }, t.prototype.detach = function() {
                        this._lView[qt] &= -17
                    }, t.prototype.reattach = function() {
                        this._lView[qt] |= 16
                    }, t.prototype.detectChanges = function() {
                        Yn(this._lView, this.context)
                    }, t.prototype.checkNoChanges = function() {
                        ! function(t) {
                            nn(!0);
                            try {
                                ! function(t) {
                                    Yn(function(t) {
                                        var e, n = _e(t);
                                        if (Array.isArray(n)) {
                                            var r = function(t, e) {
                                                var n = t[Bt].components;
                                                if (n)
                                                    for (var r = 0; r < n.length; r++) {
                                                        var o = n[r];
                                                        if (we(o, t)[Xt] === e) return o
                                                    } else if (we(oe, t)[Xt] === e) return oe;
                                                return -1
                                            }(n, t);
                                            (o = function(t, e, n) {
                                                return {
                                                    lView: t,
                                                    nodeIndex: e,
                                                    native: n,
                                                    component: void 0,
                                                    directives: void 0,
                                                    localRefs: void 0
                                                }
                                            }(n, r, (e = we(r, n))[Qt])).component = t, Cn(t, o), Cn(o.native, o)
                                        } else {
                                            var o;
                                            e = we((o = n).nodeIndex, o.lView)
                                        }
                                        return e
                                    }(t), t)
                                }(t)
                            } finally {
                                nn(!1)
                            }
                        }(this.context)
                    }, t.prototype.attachToViewContainerRef = function(t) {
                        if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                        this._viewContainerRef = t
                    }, t.prototype.detachFromAppRef = function() {
                        this._appRef = null
                    }, t.prototype.attachToAppRef = function(t) {
                        if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                        this._appRef = t
                    }, t.prototype._lookUpContext = function() {
                        return this._context = this._lView[Zt][this._componentIndex]
                    }, t
                }()),
                $r = function() {
                    function t(t) {
                        this.nativeElement = t
                    }
                    return t.__NG_ELEMENT_ID__ = function() {
                        return Xr(t)
                    }, t
                }(),
                Xr = ar,
                Yr = function() {
                    return function() {}
                }(),
                Jr = function() {
                    return function() {}
                }(),
                to = function(t) {
                    return t[t.Important = 1] = "Important", t[t.DashCase = 2] = "DashCase", t
                }({}),
                eo = function() {
                    function t() {}
                    return t.__NG_ELEMENT_ID__ = function() {
                        return no()
                    }, t
                }(),
                no = ar,
                ro = function(t) {
                    return t[t.NONE = 0] = "NONE", t[t.HTML = 1] = "HTML", t[t.STYLE = 2] = "STYLE", t[t.SCRIPT = 3] = "SCRIPT", t[t.URL = 4] = "URL", t[t.RESOURCE_URL = 5] = "RESOURCE_URL", t
                }({}),
                oo = function() {
                    return function() {}
                }(),
                io = new(function() {
                    return function(t) {
                        this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
                    }
                }())("7.2.2"),
                ao = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.ngModule = e, n
                    }
                    return o(e, t), e.prototype.resolveComponentFactory = function(t) {
                        return new fo(t[mt] || null, this.ngModule)
                    }, e
                }(qr);

            function uo(t) {
                var e = [];
                for (var n in t) t.hasOwnProperty(n) && e.push({
                    propName: t[n],
                    templateName: n
                });
                return e
            }
            var so = new Tt("ROOT_CONTEXT_TOKEN", {
                    providedIn: "root",
                    factory: function() {
                        return or(He(co))
                    }
                }),
                co = new Tt("SCHEDULER_TOKEN", {
                    providedIn: "root",
                    factory: function() {
                        return Ee
                    }
                }),
                lo = {},
                fo = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.componentDef = e, r.ngModule = n, r.componentType = e.type, r.selector = e.selectors[0][0], r.ngContentSelectors = [], r
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "inputs", {
                        get: function() {
                            return uo(this.componentDef.inputs)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "outputs", {
                        get: function() {
                            return uo(this.componentDef.outputs)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.create = function(t, e, n, r) {
                        var i, a, u, s, c = void 0 === n,
                            l = (r = r || this.ngModule) ? function(t, e) {
                                return {
                                    get: function(n, r) {
                                        var o = t.get(n, lo);
                                        return o !== lo || r === lo ? o : e.get(n, r)
                                    }
                                }
                            }(t, r.injector) : t,
                            f = l.get(Jr, Nn),
                            p = l.get(oo, null),
                            h = c ? (u = this.selector, On(s = f.createRenderer(null, this.componentDef) || Qe()[te]) ? s.createElement(u, Qn) : null === Qn ? s.createElement(u) : s.createElementNS(Qn, u)) : (i = n, a = f.createRenderer(null, null), "string" == typeof i ? On(a) ? a.selectRootElement(i) : a.querySelector(i) : i),
                            d = this.componentDef.onPush ? 136 : 132,
                            v = c ? or() : l.get(so),
                            g = f.createRenderer(h, this.componentDef);
                        n && h && (On(g) ? g.setAttribute(h, "ng-version", io.full) : h.setAttribute("ng-version", io.full));
                        var y, m, w = zn(null, Kn(-1, null, 1, 0, null, null, null), v, d, f, g, p, l),
                            b = un(w, null);
                        try {
                            f.begin && f.begin();
                            var _ = nr(h, this.componentDef, w, f, g);
                            if (m = w[Bt].data[0 + oe], e)
                                for (var C = 0, x = w[Bt], S = m.projection = [], E = 0; E < e.length; E++) {
                                    for (var T = e[E], k = null, I = null, R = 0; R < T.length; R++) {
                                        x.firstTemplatePass && (x.expandoStartIndex++, x.blueprint.splice(++C + oe, 0, null), x.data.splice(C + oe, 0, null), w.splice(C + oe, 0, null));
                                        var P = Bn(C, 3, T[R], null, null);
                                        I ? I.next = P : k = P, I = P
                                    }
                                    S.push(k)
                                }
                            y = rr(_, this.componentDef, w, v, [ir]),
                                function(t, e, n) {
                                    var r = t[Bt],
                                        o = on();
                                    t[14] ? t[14][Gt] = n : o && (r.childIndex = e), t[14] = n
                                }(w, oe, _), Fn(w)
                        } finally {
                            sn(b), f.end && f.end()
                        }
                        var A = new po(this.componentType, y, function(t, e, n) {
                            return Fr || (Fr = function(t) {
                                function e() {
                                    return null !== t && t.apply(this, arguments) || this
                                }
                                return o(e, t), e
                            }($r)), new Fr(me(e, n))
                        }(0, m, w), w, m);
                        return c && (A.hostView._tViewNode.child = m), A
                    }, e
                }(Hr),
                po = function(t) {
                    function e(e, n, r, o, i) {
                        var a, u = t.call(this) || this;
                        return u.location = r, u._rootLView = o, u._tNode = i, u.destroyCbs = [], u.instance = n, u.hostView = u.changeDetectorRef = new Kr(o), u.hostView._tViewNode = (-1, null == (a = o)[Bt].node && (a[Bt].node = $n(a, 2, -1, null, null, null)), a[Wt] = a[Bt].node), u.componentType = e, u
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "injector", {
                        get: function() {
                            return new _n(this._tNode, this._rootLView)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.destroy = function() {
                        this.destroyCbs.forEach(function(t) {
                            return t()
                        }), this.destroyCbs = null, this.hostView.destroy()
                    }, e.prototype.onDestroy = function(t) {
                        this.destroyCbs.push(t)
                    }, e
                }(Vr),
                ho = !0,
                vo = !1;

            function go() {
                return vo = !0, ho
            }
            var yo = function() {
                    function t(t) {
                        if (this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert"), this.inertBodyElement = this.inertDocument.body, null == this.inertBodyElement) {
                            var e = this.inertDocument.createElement("html");
                            this.inertDocument.appendChild(e), this.inertBodyElement = this.inertDocument.createElement("body"), e.appendChild(this.inertBodyElement)
                        }
                        this.inertBodyElement.innerHTML = '<svg><g onload="this.parentNode.remove()"></g></svg>', !this.inertBodyElement.querySelector || this.inertBodyElement.querySelector("svg") ? (this.inertBodyElement.innerHTML = '<svg><p><style><img src="</style><img src=x onerror=alert(1)//">', this.getInertBodyElement = this.inertBodyElement.querySelector && this.inertBodyElement.querySelector("svg img") && function() {
                            try {
                                return !!window.DOMParser
                            } catch (t) {
                                return !1
                            }
                        }() ? this.getInertBodyElement_DOMParser : this.getInertBodyElement_InertDocument) : this.getInertBodyElement = this.getInertBodyElement_XHR
                    }
                    return t.prototype.getInertBodyElement_XHR = function(t) {
                        t = "<body><remove></remove>" + t + "</body>";
                        try {
                            t = encodeURI(t)
                        } catch (r) {
                            return null
                        }
                        var e = new XMLHttpRequest;
                        e.responseType = "document", e.open("GET", "data:text/html;charset=utf-8," + t, !1), e.send(void 0);
                        var n = e.response.body;
                        return n.removeChild(n.firstChild), n
                    }, t.prototype.getInertBodyElement_DOMParser = function(t) {
                        t = "<body><remove></remove>" + t + "</body>";
                        try {
                            var e = (new window.DOMParser).parseFromString(t, "text/html").body;
                            return e.removeChild(e.firstChild), e
                        } catch (n) {
                            return null
                        }
                    }, t.prototype.getInertBodyElement_InertDocument = function(t) {
                        var e = this.inertDocument.createElement("template");
                        return "content" in e ? (e.innerHTML = t, e) : (this.inertBodyElement.innerHTML = t, this.defaultDoc.documentMode && this.stripCustomNsAttrs(this.inertBodyElement), this.inertBodyElement)
                    }, t.prototype.stripCustomNsAttrs = function(t) {
                        for (var e = t.attributes, n = e.length - 1; 0 < n; n--) {
                            var r = e.item(n).name;
                            "xmlns:ns1" !== r && 0 !== r.indexOf("ns1:") || t.removeAttribute(r)
                        }
                        for (var o = t.firstChild; o;) o.nodeType === Node.ELEMENT_NODE && this.stripCustomNsAttrs(o), o = o.nextSibling
                    }, t
                }(),
                mo = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:\/?#]*(?:[\/?#]|$))/gi,
                wo = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;

            function bo(t) {
                return (t = String(t)).match(mo) || t.match(wo) ? t : (go() && console.warn("WARNING: sanitizing unsafe URL value " + t + " (see http://g.co/ng/security#xss)"), "unsafe:" + t)
            }

            function _o(t) {
                var e, n, r = {};
                try {
                    for (var o = s(t.split(",")), i = o.next(); !i.done; i = o.next()) r[i.value] = !0
                } catch (a) {
                    e = {
                        error: a
                    }
                } finally {
                    try {
                        i && !i.done && (n = o.return) && n.call(o)
                    } finally {
                        if (e) throw e.error
                    }
                }
                return r
            }

            function Co() {
                for (var t, e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
                var o = {};
                try {
                    for (var i = s(n), a = i.next(); !a.done; a = i.next()) {
                        var u = a.value;
                        for (var c in u) u.hasOwnProperty(c) && (o[c] = !0)
                    }
                } catch (l) {
                    t = {
                        error: l
                    }
                } finally {
                    try {
                        a && !a.done && (e = i.return) && e.call(i)
                    } finally {
                        if (t) throw t.error
                    }
                }
                return o
            }
            var xo, So = _o("area,br,col,hr,img,wbr"),
                Eo = _o("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
                To = _o("rp,rt"),
                ko = Co(To, Eo),
                Io = Co(So, Co(Eo, _o("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), Co(To, _o("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ko),
                Ro = _o("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
                Po = _o("srcset"),
                Ao = Co(Ro, Po, _o("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width")),
                Oo = function() {
                    function t() {
                        this.sanitizedSomething = !1, this.buf = []
                    }
                    return t.prototype.sanitizeChildren = function(t) {
                        for (var e = t.firstChild, n = !0; e;)
                            if (e.nodeType === Node.ELEMENT_NODE ? n = this.startElement(e) : e.nodeType === Node.TEXT_NODE ? this.chars(e.nodeValue) : this.sanitizedSomething = !0, n && e.firstChild) e = e.firstChild;
                            else
                                for (; e;) {
                                    e.nodeType === Node.ELEMENT_NODE && this.endElement(e);
                                    var r = this.checkClobberedElement(e, e.nextSibling);
                                    if (r) {
                                        e = r;
                                        break
                                    }
                                    e = this.checkClobberedElement(e, e.parentNode)
                                }
                        return this.buf.join("")
                    }, t.prototype.startElement = function(t) {
                        var e, n = t.nodeName.toLowerCase();
                        if (!Io.hasOwnProperty(n)) return this.sanitizedSomething = !0, !1;
                        this.buf.push("<"), this.buf.push(n);
                        for (var r = t.attributes, o = 0; o < r.length; o++) {
                            var i = r.item(o),
                                a = i.name,
                                u = a.toLowerCase();
                            if (Ao.hasOwnProperty(u)) {
                                var s = i.value;
                                Ro[u] && (s = bo(s)), Po[u] && (e = s, s = (e = String(e)).split(",").map(function(t) {
                                    return bo(t.trim())
                                }).join(", ")), this.buf.push(" ", a, '="', jo(s), '"')
                            } else this.sanitizedSomething = !0
                        }
                        return this.buf.push(">"), !0
                    }, t.prototype.endElement = function(t) {
                        var e = t.nodeName.toLowerCase();
                        Io.hasOwnProperty(e) && !So.hasOwnProperty(e) && (this.buf.push("</"), this.buf.push(e), this.buf.push(">"))
                    }, t.prototype.chars = function(t) {
                        this.buf.push(jo(t))
                    }, t.prototype.checkClobberedElement = function(t, e) {
                        if (e && (t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error("Failed to sanitize html because the element is clobbered: " + t.outerHTML);
                        return e
                    }, t
                }(),
                No = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                Do = /([^\#-~ |!])/g;

            function jo(t) {
                return t.replace(/&/g, "&amp;").replace(No, function(t) {
                    return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
                }).replace(Do, function(t) {
                    return "&#" + t.charCodeAt(0) + ";"
                }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
            }

            function Mo(t) {
                return "content" in t && function(t) {
                    return t.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === t.nodeName
                }(t) ? t.content : null
            }
            var Uo = {
                    provide: qr,
                    useClass: ao,
                    deps: [Qr]
                },
                Vo = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        r._parent = n, r._bootstrapComponents = [], r.injector = r, r.destroyCbs = [];
                        var o = function(t, n) {
                            var r = e[_t] || null;
                            return r
                        }();
                        return r._bootstrapComponents = o.bootstrap, r._r3Injector = function(t, e, n) {
                            return void 0 === e && (e = null), void 0 === n && (n = null), e = e || Ar(), new Or(t, n, e)
                        }(e, n, [{
                            provide: Qr,
                            useValue: r
                        }, Uo]), r.instance = r.get(e), r
                    }
                    return o(e, t), e.prototype.get = function(t, e, n) {
                        return void 0 === e && (e = pr.THROW_IF_NOT_FOUND), void 0 === n && (n = je.Default), t === pr || t === Qr || t === lr ? this : this._r3Injector.get(t, e, n)
                    }, Object.defineProperty(e.prototype, "componentFactoryResolver", {
                        get: function() {
                            return this.get(qr)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.destroy = function() {
                        this.destroyCbs.forEach(function(t) {
                            return t()
                        }), this.destroyCbs = null
                    }, e.prototype.onDestroy = function(t) {
                        this.destroyCbs.push(t)
                    }, e
                }(Qr);
            ! function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n.moduleType = e, n
                }
                o(e, t), e.prototype.create = function(t) {
                    return new Vo(this.moduleType, t)
                }
            }(Wr);
            var Ho = function(t) {
                    function e(e) {
                        void 0 === e && (e = !1);
                        var n = t.call(this) || this;
                        return n.__isAsync = e, n
                    }
                    return o(e, t), e.prototype.emit = function(e) {
                        t.prototype.next.call(this, e)
                    }, e.prototype.subscribe = function(e, n, r) {
                        var o, i = function(t) {
                                return null
                            },
                            a = function() {
                                return null
                            };
                        e && "object" == typeof e ? (o = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return e.next(t)
                            })
                        } : function(t) {
                            e.next(t)
                        }, e.error && (i = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return e.error(t)
                            })
                        } : function(t) {
                            e.error(t)
                        }), e.complete && (a = this.__isAsync ? function() {
                            setTimeout(function() {
                                return e.complete()
                            })
                        } : function() {
                            e.complete()
                        })) : (o = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return e(t)
                            })
                        } : function(t) {
                            e(t)
                        }, n && (i = this.__isAsync ? function(t) {
                            setTimeout(function() {
                                return n(t)
                            })
                        } : function(t) {
                            n(t)
                        }), r && (a = this.__isAsync ? function() {
                            setTimeout(function() {
                                return r()
                            })
                        } : function() {
                            r()
                        }));
                        var u = t.prototype.subscribe.call(this, o, i, a);
                        return e instanceof b && e.add(u), u
                    }, e
                }(H),
                Lo = function() {
                    function t() {}
                    return t.__NG_ELEMENT_ID__ = function() {
                        return Fo(t, $r)
                    }, t
                }(),
                Fo = ar,
                zo = new RegExp("^([-,.\"'%_!# a-zA-Z0-9]+|(?:(?:matrix|translate|scale|rotate|skew|perspective)(?:X|Y|3d)?|(?:rgb|hsl)a?|(?:repeating-)?(?:linear|radial)-gradient|(?:calc|attr))\\([-0-9.%, #a-zA-Z]+\\))$", "g"),
                Bo = /^url\(([^)]+)\)$/,
                qo = function() {
                    return function() {}
                }();
            Function, String, String;
            var Zo = "ngDebugContext",
                Go = "ngOriginalError",
                Qo = "ngErrorLogger";

            function Wo(t) {
                return t[Zo]
            }

            function Ko(t) {
                return t[Go]
            }

            function $o(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                t.error.apply(t, l(e))
            }
            var Xo = function() {
                function t() {
                    this._console = console
                }
                return t.prototype.handleError = function(t) {
                    var e = this._findOriginalError(t),
                        n = this._findContext(t),
                        r = function(t) {
                            return t[Qo] || $o
                        }(t);
                    r(this._console, "ERROR", t), e && r(this._console, "ORIGINAL ERROR", e), n && r(this._console, "ERROR CONTEXT", n)
                }, t.prototype._findContext = function(t) {
                    return t ? Wo(t) ? Wo(t) : this._findContext(Ko(t)) : null
                }, t.prototype._findOriginalError = function(t) {
                    for (var e = Ko(t); e && Ko(e);) e = Ko(e);
                    return e
                }, t
            }();

            function Yo(t) {
                return !!t && "function" == typeof t.then
            }

            function Jo(t) {
                return !!t && "function" == typeof t.subscribe
            }
            var ti = new Tt("Application Initializer"),
                ei = function() {
                    function t(t) {
                        var e = this;
                        this.appInits = t, this.initialized = !1, this.done = !1, this.donePromise = new Promise(function(t, n) {
                            e.resolve = t, e.reject = n
                        })
                    }
                    return t.prototype.runInitializers = function() {
                        var t = this;
                        if (!this.initialized) {
                            var e = [],
                                n = function() {
                                    t.done = !0, t.resolve()
                                };
                            if (this.appInits)
                                for (var r = 0; r < this.appInits.length; r++) {
                                    var o = this.appInits[r]();
                                    Yo(o) && e.push(o)
                                }
                            Promise.all(e).then(function() {
                                n()
                            }).catch(function(e) {
                                t.reject(e)
                            }), 0 === e.length && n(), this.initialized = !0
                        }
                    }, t
                }(),
                ni = new Tt("AppId");

            function ri() {
                return "" + oi() + oi() + oi()
            }

            function oi() {
                return String.fromCharCode(97 + Math.floor(25 * Math.random()))
            }
            var ii = new Tt("Platform Initializer"),
                ai = new Tt("Platform ID"),
                ui = new Tt("appBootstrapListener"),
                si = function() {
                    function t() {}
                    return t.prototype.log = function(t) {
                        console.log(t)
                    }, t.prototype.warn = function(t) {
                        console.warn(t)
                    }, t
                }();

            function ci() {
                throw new Error("Runtime compiler is not loaded")
            }
            var li, fi, pi = ci,
                hi = ci,
                di = ci,
                vi = ci,
                gi = function() {
                    function t() {
                        this.compileModuleSync = pi, this.compileModuleAsync = hi, this.compileModuleAndAllComponentsSync = di, this.compileModuleAndAllComponentsAsync = vi
                    }
                    return t.prototype.clearCache = function() {}, t.prototype.clearCacheFor = function(t) {}, t.prototype.getModuleId = function(t) {}, t
                }(),
                yi = function() {
                    return function() {}
                }();

            function mi() {
                var t = Ot.wtf;
                return !(!t || !(li = t.trace) || (fi = li.events, 0))
            }
            var wi = mi();

            function bi(t, e) {
                return null
            }
            var _i = wi ? function(t, e) {
                    return void 0 === e && (e = null), fi.createScope(t, e)
                } : function(t, e) {
                    return bi
                },
                Ci = wi ? function(t, e) {
                    return li.leaveScope(t, e), e
                } : function(t, e) {
                    return e
                },
                xi = function() {
                    function t(t) {
                        var e, n = t.enableLongStackTrace,
                            r = void 0 !== n && n;
                        if (this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ho(!1), this.onMicrotaskEmpty = new Ho(!1), this.onStable = new Ho(!1), this.onError = new Ho(!1), "undefined" == typeof Zone) throw new Error("In this configuration Angular requires Zone.js");
                        Zone.assertZonePatched(), this._nesting = 0, this._outer = this._inner = Zone.current, Zone.wtfZoneSpec && (this._inner = this._inner.fork(Zone.wtfZoneSpec)), Zone.TaskTrackingZoneSpec && (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec)), r && Zone.longStackTraceZoneSpec && (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)), (e = this)._inner = e._inner.fork({
                            name: "angular",
                            properties: {
                                isAngularZone: !0
                            },
                            onInvokeTask: function(t, n, r, o, i, a) {
                                try {
                                    return ki(e), t.invokeTask(r, o, i, a)
                                } finally {
                                    Ii(e)
                                }
                            },
                            onInvoke: function(t, n, r, o, i, a, u) {
                                try {
                                    return ki(e), t.invoke(r, o, i, a, u)
                                } finally {
                                    Ii(e)
                                }
                            },
                            onHasTask: function(t, n, r, o) {
                                t.hasTask(r, o), n === r && ("microTask" == o.change ? (e.hasPendingMicrotasks = o.microTask, Ti(e)) : "macroTask" == o.change && (e.hasPendingMacrotasks = o.macroTask))
                            },
                            onHandleError: function(t, n, r, o) {
                                return t.handleError(r, o), e.runOutsideAngular(function() {
                                    return e.onError.emit(o)
                                }), !1
                            }
                        })
                    }
                    return t.isInAngularZone = function() {
                        return !0 === Zone.current.get("isAngularZone")
                    }, t.assertInAngularZone = function() {
                        if (!t.isInAngularZone()) throw new Error("Expected to be in Angular Zone, but it is not!")
                    }, t.assertNotInAngularZone = function() {
                        if (t.isInAngularZone()) throw new Error("Expected to not be in Angular Zone, but it is!")
                    }, t.prototype.run = function(t, e, n) {
                        return this._inner.run(t, e, n)
                    }, t.prototype.runTask = function(t, e, n, r) {
                        var o = this._inner,
                            i = o.scheduleEventTask("NgZoneEvent: " + r, t, Ei, Si, Si);
                        try {
                            return o.runTask(i, e, n)
                        } finally {
                            o.cancelTask(i)
                        }
                    }, t.prototype.runGuarded = function(t, e, n) {
                        return this._inner.runGuarded(t, e, n)
                    }, t.prototype.runOutsideAngular = function(t) {
                        return this._outer.run(t)
                    }, t
                }();

            function Si() {}
            var Ei = {};

            function Ti(t) {
                if (0 == t._nesting && !t.hasPendingMicrotasks && !t.isStable) try {
                    t._nesting++, t.onMicrotaskEmpty.emit(null)
                } finally {
                    if (t._nesting--, !t.hasPendingMicrotasks) try {
                        t.runOutsideAngular(function() {
                            return t.onStable.emit(null)
                        })
                    } finally {
                        t.isStable = !0
                    }
                }
            }

            function ki(t) {
                t._nesting++, t.isStable && (t.isStable = !1, t.onUnstable.emit(null))
            }

            function Ii(t) {
                t._nesting--, Ti(t)
            }
            var Ri, Pi = function() {
                    function t() {
                        this.hasPendingMicrotasks = !1, this.hasPendingMacrotasks = !1, this.isStable = !0, this.onUnstable = new Ho, this.onMicrotaskEmpty = new Ho, this.onStable = new Ho, this.onError = new Ho
                    }
                    return t.prototype.run = function(t) {
                        return t()
                    }, t.prototype.runGuarded = function(t) {
                        return t()
                    }, t.prototype.runOutsideAngular = function(t) {
                        return t()
                    }, t.prototype.runTask = function(t) {
                        return t()
                    }, t
                }(),
                Ai = function() {
                    function t(t) {
                        var e = this;
                        this._ngZone = t, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, this._watchAngularEvents(), t.run(function() {
                            e.taskTrackingZone = "undefined" == typeof Zone ? null : Zone.current.get("TaskTrackingZone")
                        })
                    }
                    return t.prototype._watchAngularEvents = function() {
                        var t = this;
                        this._ngZone.onUnstable.subscribe({
                            next: function() {
                                t._didWork = !0, t._isZoneStable = !1
                            }
                        }), this._ngZone.runOutsideAngular(function() {
                            t._ngZone.onStable.subscribe({
                                next: function() {
                                    xi.assertNotInAngularZone(), Mt(function() {
                                        t._isZoneStable = !0, t._runCallbacksIfReady()
                                    })
                                }
                            })
                        })
                    }, t.prototype.increasePendingRequestCount = function() {
                        return this._pendingCount += 1, this._didWork = !0, this._pendingCount
                    }, t.prototype.decreasePendingRequestCount = function() {
                        if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
                        return this._runCallbacksIfReady(), this._pendingCount
                    }, t.prototype.isStable = function() {
                        return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
                    }, t.prototype._runCallbacksIfReady = function() {
                        var t = this;
                        if (this.isStable()) Mt(function() {
                            for (; 0 !== t._callbacks.length;) {
                                var e = t._callbacks.pop();
                                clearTimeout(e.timeoutId), e.doneCb(t._didWork)
                            }
                            t._didWork = !1
                        });
                        else {
                            var e = this.getPendingTasks();
                            this._callbacks = this._callbacks.filter(function(t) {
                                return !t.updateCb || !t.updateCb(e) || (clearTimeout(t.timeoutId), !1)
                            }), this._didWork = !0
                        }
                    }, t.prototype.getPendingTasks = function() {
                        return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(function(t) {
                            return {
                                source: t.source,
                                creationLocation: t.creationLocation,
                                data: t.data
                            }
                        }) : []
                    }, t.prototype.addCallback = function(t, e, n) {
                        var r = this,
                            o = -1;
                        e && e > 0 && (o = setTimeout(function() {
                            r._callbacks = r._callbacks.filter(function(t) {
                                return t.timeoutId !== o
                            }), t(r._didWork, r.getPendingTasks())
                        }, e)), this._callbacks.push({
                            doneCb: t,
                            timeoutId: o,
                            updateCb: n
                        })
                    }, t.prototype.whenStable = function(t, e, n) {
                        if (n && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');
                        this.addCallback(t, e, n), this._runCallbacksIfReady()
                    }, t.prototype.getPendingRequestCount = function() {
                        return this._pendingCount
                    }, t.prototype.findProviders = function(t, e, n) {
                        return []
                    }, t
                }(),
                Oi = function() {
                    function t() {
                        this._applications = new Map, Ni.addToWindow(this)
                    }
                    return t.prototype.registerApplication = function(t, e) {
                        this._applications.set(t, e)
                    }, t.prototype.unregisterApplication = function(t) {
                        this._applications.delete(t)
                    }, t.prototype.unregisterAllApplications = function() {
                        this._applications.clear()
                    }, t.prototype.getTestability = function(t) {
                        return this._applications.get(t) || null
                    }, t.prototype.getAllTestabilities = function() {
                        return Array.from(this._applications.values())
                    }, t.prototype.getAllRootElements = function() {
                        return Array.from(this._applications.keys())
                    }, t.prototype.findTestabilityInTree = function(t, e) {
                        return void 0 === e && (e = !0), Ni.findTestabilityInTree(this, t, e)
                    }, a([u("design:paramtypes", [])], t)
                }(),
                Ni = new(function() {
                    function t() {}
                    return t.prototype.addToWindow = function(t) {}, t.prototype.findTestabilityInTree = function(t, e, n) {
                        return null
                    }, t
                }()),
                Di = new Tt("AllowMultipleToken"),
                ji = function() {
                    return function(t, e) {
                        this.name = t, this.token = e
                    }
                }();

            function Mi(t, e, n) {
                void 0 === n && (n = []);
                var r = "Platform: " + e,
                    o = new Tt(r);
                return function(e) {
                    void 0 === e && (e = []);
                    var i = Ui();
                    if (!i || i.injector.get(Di, !1))
                        if (t) t(n.concat(e).concat({
                            provide: o,
                            useValue: !0
                        }));
                        else {
                            var a = n.concat(e).concat({
                                provide: o,
                                useValue: !0
                            });
                            ! function(t) {
                                if (Ri && !Ri.destroyed && !Ri.injector.get(Di, !1)) throw new Error("There can be only one platform. Destroy the previous one to create a new one.");
                                Ri = t.get(Vi);
                                var e = t.get(ii, null);
                                e && e.forEach(function(t) {
                                    return t()
                                })
                            }(pr.create({
                                providers: a,
                                name: r
                            }))
                        } return function(t) {
                        var e = Ui();
                        if (!e) throw new Error("No platform exists!");
                        if (!e.injector.get(t, null)) throw new Error("A platform with a different configuration has been created. Please destroy it first.");
                        return e
                    }(o)
                }
            }

            function Ui() {
                return Ri && !Ri.destroyed ? Ri : null
            }
            var Vi = function() {
                function t(t) {
                    this._injector = t, this._modules = [], this._destroyListeners = [], this._destroyed = !1
                }
                return t.prototype.bootstrapModuleFactory = function(t, e) {
                    var n, r = this,
                        o = "noop" === (n = e ? e.ngZone : void 0) ? new Pi : ("zone.js" === n ? void 0 : n) || new xi({
                            enableLongStackTrace: go()
                        }),
                        i = [{
                            provide: xi,
                            useValue: o
                        }];
                    return o.run(function() {
                        var e = pr.create({
                                providers: i,
                                parent: r.injector,
                                name: t.moduleType.name
                            }),
                            n = t.create(e),
                            a = n.injector.get(Xo, null);
                        if (!a) throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");
                        return n.onDestroy(function() {
                                return Fi(r._modules, n)
                            }), o.runOutsideAngular(function() {
                                return o.onError.subscribe({
                                    next: function(t) {
                                        a.handleError(t)
                                    }
                                })
                            }),
                            function(t, e, o) {
                                try {
                                    var i = ((a = n.injector.get(ei)).runInitializers(), a.donePromise.then(function() {
                                        return r._moduleDoBootstrap(n), n
                                    }));
                                    return Yo(i) ? i.catch(function(n) {
                                        throw e.runOutsideAngular(function() {
                                            return t.handleError(n)
                                        }), n
                                    }) : i
                                } catch (u) {
                                    throw e.runOutsideAngular(function() {
                                        return t.handleError(u)
                                    }), u
                                }
                                var a
                            }(a, o)
                    })
                }, t.prototype.bootstrapModule = function(t, e) {
                    var n = this;
                    void 0 === e && (e = []);
                    var r = Hi({}, e);
                    return function(t, e, n) {
                        return t.get(yi).createCompiler([e]).compileModuleAsync(n)
                    }(this.injector, r, t).then(function(t) {
                        return n.bootstrapModuleFactory(t, r)
                    })
                }, t.prototype._moduleDoBootstrap = function(t) {
                    var e = t.injector.get(Li);
                    if (t._bootstrapComponents.length > 0) t._bootstrapComponents.forEach(function(t) {
                        return e.bootstrap(t)
                    });
                    else {
                        if (!t.instance.ngDoBootstrap) throw new Error("The module " + Vt(t.instance.constructor) + ' was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.');
                        t.instance.ngDoBootstrap(e)
                    }
                    this._modules.push(t)
                }, t.prototype.onDestroy = function(t) {
                    this._destroyListeners.push(t)
                }, Object.defineProperty(t.prototype, "injector", {
                    get: function() {
                        return this._injector
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.destroy = function() {
                    if (this._destroyed) throw new Error("The platform has already been destroyed!");
                    this._modules.slice().forEach(function(t) {
                        return t.destroy()
                    }), this._destroyListeners.forEach(function(t) {
                        return t()
                    }), this._destroyed = !0
                }, Object.defineProperty(t.prototype, "destroyed", {
                    get: function() {
                        return this._destroyed
                    },
                    enumerable: !0,
                    configurable: !0
                }), t
            }();

            function Hi(t, e) {
                return Array.isArray(e) ? e.reduce(Hi, t) : i({}, t, e)
            }
            var Li = function() {
                function t(t, e, n, r, o, i) {
                    var a = this;
                    this._zone = t, this._console = e, this._injector = n, this._exceptionHandler = r, this._componentFactoryResolver = o, this._initStatus = i, this._bootstrapListeners = [], this._views = [], this._runningTick = !1, this._enforceNoNewChanges = !1, this._stable = !0, this.componentTypes = [], this.components = [], this._enforceNoNewChanges = go(), this._zone.onMicrotaskEmpty.subscribe({
                        next: function() {
                            a._zone.run(function() {
                                a.tick()
                            })
                        }
                    });
                    var u = new N(function(t) {
                            a._stable = a._zone.isStable && !a._zone.hasPendingMacrotasks && !a._zone.hasPendingMicrotasks, a._zone.runOutsideAngular(function() {
                                t.next(a._stable), t.complete()
                            })
                        }),
                        s = new N(function(t) {
                            var e;
                            a._zone.runOutsideAngular(function() {
                                e = a._zone.onStable.subscribe(function() {
                                    xi.assertNotInAngularZone(), Mt(function() {
                                        a._stable || a._zone.hasPendingMacrotasks || a._zone.hasPendingMicrotasks || (a._stable = !0, t.next(!0))
                                    })
                                })
                            });
                            var n = a._zone.onUnstable.subscribe(function() {
                                xi.assertInAngularZone(), a._stable && (a._stable = !1, a._zone.runOutsideAngular(function() {
                                    t.next(!1)
                                }))
                            });
                            return function() {
                                e.unsubscribe(), n.unsubscribe()
                            }
                        });
                    this.isStable = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = Number.POSITIVE_INFINITY,
                            r = null,
                            o = t[t.length - 1];
                        return F(o) ? (r = t.pop(), t.length > 1 && "number" == typeof t[t.length - 1] && (n = t.pop())) : "number" == typeof o && (n = t.pop()), null === r && 1 === t.length && t[0] instanceof N ? t[0] : ct(n)(rt(t, r))
                    }(u, s.pipe(function(t) {
                        return lt()((e = gt, function(t) {
                            var n;
                            n = "function" == typeof e ? e : function() {
                                return e
                            };
                            var r = Object.create(t, dt);
                            return r.source = t, r.subjectFactory = n, r
                        })(t));
                        var e
                    }))
                }
                var e;
                return e = t, t.prototype.bootstrap = function(t, e) {
                    var n, r = this;
                    if (!this._initStatus.done) throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");
                    n = t instanceof Hr ? t : this._componentFactoryResolver.resolveComponentFactory(t), this.componentTypes.push(n.componentType);
                    var o = n instanceof Gr ? null : this._injector.get(Qr),
                        i = n.create(pr.NULL, [], e || n.selector, o);
                    i.onDestroy(function() {
                        r._unloadComponent(i)
                    });
                    var a = i.injector.get(Ai, null);
                    return a && i.injector.get(Oi).registerApplication(i.location.nativeElement, a), this._loadComponent(i), go() && this._console.log("Angular is running in the development mode. Call enableProdMode() to enable the production mode."), i
                }, t.prototype.tick = function() {
                    var t = this;
                    if (this._runningTick) throw new Error("ApplicationRef.tick is called recursively");
                    var n = e._tickScope();
                    try {
                        this._runningTick = !0, this._views.forEach(function(t) {
                            return t.detectChanges()
                        }), this._enforceNoNewChanges && this._views.forEach(function(t) {
                            return t.checkNoChanges()
                        })
                    } catch (r) {
                        this._zone.runOutsideAngular(function() {
                            return t._exceptionHandler.handleError(r)
                        })
                    } finally {
                        this._runningTick = !1, Ci(n)
                    }
                }, t.prototype.attachView = function(t) {
                    var e = t;
                    this._views.push(e), e.attachToAppRef(this)
                }, t.prototype.detachView = function(t) {
                    var e = t;
                    Fi(this._views, e), e.detachFromAppRef()
                }, t.prototype._loadComponent = function(t) {
                    this.attachView(t.hostView), this.tick(), this.components.push(t), this._injector.get(ui, []).concat(this._bootstrapListeners).forEach(function(e) {
                        return e(t)
                    })
                }, t.prototype._unloadComponent = function(t) {
                    this.detachView(t.hostView), Fi(this.components, t)
                }, t.prototype.ngOnDestroy = function() {
                    this._views.slice().forEach(function(t) {
                        return t.destroy()
                    })
                }, Object.defineProperty(t.prototype, "viewCount", {
                    get: function() {
                        return this._views.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t._tickScope = _i("ApplicationRef#tick()"), t
            }();

            function Fi(t, e) {
                var n = t.indexOf(e);
                n > -1 && t.splice(n, 1)
            }
            var zi = function() {
                    function t() {
                        this.dirty = !0, this._results = [], this.changes = new Ho, this.length = 0
                    }
                    return t.prototype.map = function(t) {
                        return this._results.map(t)
                    }, t.prototype.filter = function(t) {
                        return this._results.filter(t)
                    }, t.prototype.find = function(t) {
                        return this._results.find(t)
                    }, t.prototype.reduce = function(t, e) {
                        return this._results.reduce(t, e)
                    }, t.prototype.forEach = function(t) {
                        this._results.forEach(t)
                    }, t.prototype.some = function(t) {
                        return this._results.some(t)
                    }, t.prototype.toArray = function() {
                        return this._results.slice()
                    }, t.prototype[jt()] = function() {
                        return this._results[jt()]()
                    }, t.prototype.toString = function() {
                        return this._results.toString()
                    }, t.prototype.reset = function(t) {
                        this._results = function t(e) {
                            return e.reduce(function(e, n) {
                                var r = Array.isArray(n) ? t(n) : n;
                                return e.concat(r)
                            }, [])
                        }(t), this.dirty = !1, this.length = this._results.length, this.last = this._results[this.length - 1], this.first = this._results[0]
                    }, t.prototype.notifyOnChanges = function() {
                        this.changes.emit(this)
                    }, t.prototype.setDirty = function() {
                        this.dirty = !0
                    }, t.prototype.destroy = function() {
                        this.changes.complete(), this.changes.unsubscribe()
                    }, t
                }(),
                Bi = function() {
                    return function() {}
                }(),
                qi = {
                    factoryPathPrefix: "",
                    factoryPathSuffix: ".ngfactory"
                },
                Zi = function() {
                    function t(t, e) {
                        this._compiler = t, this._config = e || qi
                    }
                    return t.prototype.load = function(t) {
                        return this._compiler instanceof gi ? this.loadFactory(t) : this.loadAndCompile(t)
                    }, t.prototype.loadAndCompile = function(t) {
                        var e = this,
                            r = c(t.split("#"), 2),
                            o = r[0],
                            i = r[1];
                        return void 0 === i && (i = "default"), n("crnd")(o).then(function(t) {
                            return t[i]
                        }).then(function(t) {
                            return Gi(t, o, i)
                        }).then(function(t) {
                            return e._compiler.compileModuleAsync(t)
                        })
                    }, t.prototype.loadFactory = function(t) {
                        var e = c(t.split("#"), 2),
                            r = e[0],
                            o = e[1],
                            i = "NgFactory";
                        return void 0 === o && (o = "default", i = ""), n("crnd")(this._config.factoryPathPrefix + r + this._config.factoryPathSuffix).then(function(t) {
                            return t[o + i]
                        }).then(function(t) {
                            return Gi(t, r, o)
                        })
                    }, t
                }();

            function Gi(t, e, n) {
                if (!t) throw new Error("Cannot find '" + n + "' in '" + e + "'");
                return t
            }
            var Qi, Wi = function() {
                    function t() {}
                    return t.__NG_ELEMENT_ID__ = function() {
                        return Ki(t, $r)
                    }, t
                }(),
                Ki = ar,
                $i = function() {
                    function t() {}
                    return t.__NG_ELEMENT_ID__ = function() {
                        return Xi()
                    }, t
                }(),
                Xi = function() {
                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e]
                },
                Yi = (o(function() {
                    return null !== Qi && Qi.apply(this, arguments) || this
                }, Qi = $i), function() {
                    return function(t, e) {
                        this.name = t, this.callback = e
                    }
                }()),
                Ji = function() {
                    function t(t, e, n) {
                        this.listeners = [], this.parent = null, this._debugContext = n, this.nativeNode = t, e && e instanceof ta && e.addChild(this)
                    }
                    return Object.defineProperty(t.prototype, "injector", {
                        get: function() {
                            return this._debugContext.injector
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "componentInstance", {
                        get: function() {
                            return this._debugContext.component
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "context", {
                        get: function() {
                            return this._debugContext.context
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "references", {
                        get: function() {
                            return this._debugContext.references
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "providerTokens", {
                        get: function() {
                            return this._debugContext.providerTokens
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                ta = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n, r) || this;
                        return o.properties = {}, o.attributes = {}, o.classes = {}, o.styles = {}, o.childNodes = [], o.nativeElement = e, o
                    }
                    return o(e, t), e.prototype.addChild = function(t) {
                        t && (this.childNodes.push(t), t.parent = this)
                    }, e.prototype.removeChild = function(t) {
                        var e = this.childNodes.indexOf(t); - 1 !== e && (t.parent = null, this.childNodes.splice(e, 1))
                    }, e.prototype.insertChildrenAfter = function(t, e) {
                        var n, r = this,
                            o = this.childNodes.indexOf(t); - 1 !== o && ((n = this.childNodes).splice.apply(n, l([o + 1, 0], e)), e.forEach(function(e) {
                            e.parent && e.parent.removeChild(e), t.parent = r
                        }))
                    }, e.prototype.insertBefore = function(t, e) {
                        var n = this.childNodes.indexOf(t); - 1 === n ? this.addChild(e) : (e.parent && e.parent.removeChild(e), e.parent = this, this.childNodes.splice(n, 0, e))
                    }, e.prototype.query = function(t) {
                        return this.queryAll(t)[0] || null
                    }, e.prototype.queryAll = function(t) {
                        var e = [];
                        return function t(e, n, r) {
                            e.childNodes.forEach(function(e) {
                                e instanceof ta && (n(e) && r.push(e), t(e, n, r))
                            })
                        }(this, t, e), e
                    }, e.prototype.queryAllNodes = function(t) {
                        var e = [];
                        return function t(e, n, r) {
                            e instanceof ta && e.childNodes.forEach(function(e) {
                                n(e) && r.push(e), e instanceof ta && t(e, n, r)
                            })
                        }(this, t, e), e
                    }, Object.defineProperty(e.prototype, "children", {
                        get: function() {
                            return this.childNodes.filter(function(t) {
                                return t instanceof e
                            })
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.triggerEventHandler = function(t, e) {
                        this.listeners.forEach(function(n) {
                            n.name == t && n.callback(e)
                        })
                    }, e
                }(Ji),
                ea = new Map,
                na = function(t) {
                    return ea.get(t) || null
                };

            function ra(t) {
                ea.set(t.nativeNode, t)
            }
            var oa = function() {
                    function t() {}
                    return t.prototype.supports = function(t) {
                        return In(t)
                    }, t.prototype.create = function(t) {
                        return new aa(t)
                    }, t
                }(),
                ia = function(t, e) {
                    return e
                },
                aa = function() {
                    function t(t) {
                        this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || ia
                    }
                    return t.prototype.forEachItem = function(t) {
                        var e;
                        for (e = this._itHead; null !== e; e = e._next) t(e)
                    }, t.prototype.forEachOperation = function(t) {
                        for (var e = this._itHead, n = this._removalsHead, r = 0, o = null; e || n;) {
                            var i = !n || e && e.currentIndex < la(n, r, o) ? e : n,
                                a = la(i, r, o),
                                u = i.currentIndex;
                            if (i === n) r--, n = n._nextRemoved;
                            else if (e = e._next, null == i.previousIndex) r++;
                            else {
                                o || (o = []);
                                var s = a - r,
                                    c = u - r;
                                if (s != c) {
                                    for (var l = 0; l < s; l++) {
                                        var f = l < o.length ? o[l] : o[l] = 0,
                                            p = f + l;
                                        c <= p && p < s && (o[l] = f + 1)
                                    }
                                    o[i.previousIndex] = c - s
                                }
                            }
                            a !== u && t(i, a, u)
                        }
                    }, t.prototype.forEachPreviousItem = function(t) {
                        var e;
                        for (e = this._previousItHead; null !== e; e = e._nextPrevious) t(e)
                    }, t.prototype.forEachAddedItem = function(t) {
                        var e;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                    }, t.prototype.forEachMovedItem = function(t) {
                        var e;
                        for (e = this._movesHead; null !== e; e = e._nextMoved) t(e)
                    }, t.prototype.forEachRemovedItem = function(t) {
                        var e;
                        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                    }, t.prototype.forEachIdentityChange = function(t) {
                        var e;
                        for (e = this._identityChangesHead; null !== e; e = e._nextIdentityChange) t(e)
                    }, t.prototype.diff = function(t) {
                        if (null == t && (t = []), !In(t)) throw new Error("Error trying to diff '" + Vt(t) + "'. Only arrays and iterables are allowed");
                        return this.check(t) ? this : null
                    }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var e = this;
                        this._reset();
                        var n, r, o, i = this._itHead,
                            a = !1;
                        if (Array.isArray(t)) {
                            this.length = t.length;
                            for (var u = 0; u < this.length; u++) o = this._trackByFn(u, r = t[u]), null !== i && Ut(i.trackById, o) ? (a && (i = this._verifyReinsertion(i, r, o, u)), Ut(i.item, r) || this._addIdentityChange(i, r)) : (i = this._mismatch(i, r, o, u), a = !0), i = i._next
                        } else n = 0,
                            function(t, e) {
                                if (Array.isArray(t))
                                    for (var n = 0; n < t.length; n++) e(t[n]);
                                else
                                    for (var r = t[jt()](), o = void 0; !(o = r.next()).done;) e(o.value)
                            }(t, function(t) {
                                o = e._trackByFn(n, t), null !== i && Ut(i.trackById, o) ? (a && (i = e._verifyReinsertion(i, t, o, n)), Ut(i.item, t) || e._addIdentityChange(i, t)) : (i = e._mismatch(i, t, o, n), a = !0), i = i._next, n++
                            }), this.length = n;
                        return this._truncate(i), this.collection = t, this.isDirty
                    }, Object.defineProperty(t.prototype, "isDirty", {
                        get: function() {
                            return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0,
                                e = void 0;
                            for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
                            for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = e) t.previousIndex = t.currentIndex, e = t._nextMoved;
                            this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
                        }
                    }, t.prototype._mismatch = function(t, e, n, r) {
                        var o;
                        return null === t ? o = this._itTail : (o = t._prev, this._remove(t)), null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(n, r)) ? (Ut(t.item, e) || this._addIdentityChange(t, e), this._moveAfter(t, o, r)) : null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null)) ? (Ut(t.item, e) || this._addIdentityChange(t, e), this._reinsertAfter(t, o, r)) : t = this._addAfter(new ua(e, n), o, r), t
                    }, t.prototype._verifyReinsertion = function(t, e, n, r) {
                        var o = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(n, null);
                        return null !== o ? t = this._reinsertAfter(o, t._prev, r) : t.currentIndex != r && (t.currentIndex = r, this._addToMoves(t, r)), t
                    }, t.prototype._truncate = function(t) {
                        for (; null !== t;) {
                            var e = t._next;
                            this._addToRemovals(this._unlink(t)), t = e
                        }
                        null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
                    }, t.prototype._reinsertAfter = function(t, e, n) {
                        null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
                        var r = t._prevRemoved,
                            o = t._nextRemoved;
                        return null === r ? this._removalsHead = o : r._nextRemoved = o, null === o ? this._removalsTail = r : o._prevRemoved = r, this._insertAfter(t, e, n), this._addToMoves(t, n), t
                    }, t.prototype._moveAfter = function(t, e, n) {
                        return this._unlink(t), this._insertAfter(t, e, n), this._addToMoves(t, n), t
                    }, t.prototype._addAfter = function(t, e, n) {
                        return this._insertAfter(t, e, n), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
                    }, t.prototype._insertAfter = function(t, e, n) {
                        var r = null === e ? this._itHead : e._next;
                        return t._next = r, t._prev = e, null === r ? this._itTail = t : r._prev = t, null === e ? this._itHead = t : e._next = t, null === this._linkedRecords && (this._linkedRecords = new ca), this._linkedRecords.put(t), t.currentIndex = n, t
                    }, t.prototype._remove = function(t) {
                        return this._addToRemovals(this._unlink(t))
                    }, t.prototype._unlink = function(t) {
                        null !== this._linkedRecords && this._linkedRecords.remove(t);
                        var e = t._prev,
                            n = t._next;
                        return null === e ? this._itHead = n : e._next = n, null === n ? this._itTail = e : n._prev = e, t
                    }, t.prototype._addToMoves = function(t, e) {
                        return t.previousIndex === e ? t : (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t, t)
                    }, t.prototype._addToRemovals = function(t) {
                        return null === this._unlinkedRecords && (this._unlinkedRecords = new ca), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
                    }, t.prototype._addIdentityChange = function(t, e) {
                        return t.item = e, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
                    }, t
                }(),
                ua = function() {
                    return function(t, e) {
                        this.item = t, this.trackById = e, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
                    }
                }(),
                sa = function() {
                    function t() {
                        this._head = null, this._tail = null
                    }
                    return t.prototype.add = function(t) {
                        null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
                    }, t.prototype.get = function(t, e) {
                        var n;
                        for (n = this._head; null !== n; n = n._nextDup)
                            if ((null === e || e <= n.currentIndex) && Ut(n.trackById, t)) return n;
                        return null
                    }, t.prototype.remove = function(t) {
                        var e = t._prevDup,
                            n = t._nextDup;
                        return null === e ? this._head = n : e._nextDup = n, null === n ? this._tail = e : n._prevDup = e, null === this._head
                    }, t
                }(),
                ca = function() {
                    function t() {
                        this.map = new Map
                    }
                    return t.prototype.put = function(t) {
                        var e = t.trackById,
                            n = this.map.get(e);
                        n || (n = new sa, this.map.set(e, n)), n.add(t)
                    }, t.prototype.get = function(t, e) {
                        var n = this.map.get(t);
                        return n ? n.get(t, e) : null
                    }, t.prototype.remove = function(t) {
                        var e = t.trackById;
                        return this.map.get(e).remove(t) && this.map.delete(e), t
                    }, Object.defineProperty(t.prototype, "isEmpty", {
                        get: function() {
                            return 0 === this.map.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.clear = function() {
                        this.map.clear()
                    }, t
                }();

            function la(t, e, n) {
                var r = t.previousIndex;
                if (null === r) return r;
                var o = 0;
                return n && r < n.length && (o = n[r]), r + e + o
            }
            var fa = function() {
                    function t() {}
                    return t.prototype.supports = function(t) {
                        return t instanceof Map || Rn(t)
                    }, t.prototype.create = function() {
                        return new pa
                    }, t
                }(),
                pa = function() {
                    function t() {
                        this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
                    }
                    return Object.defineProperty(t.prototype, "isDirty", {
                        get: function() {
                            return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.forEachItem = function(t) {
                        var e;
                        for (e = this._mapHead; null !== e; e = e._next) t(e)
                    }, t.prototype.forEachPreviousItem = function(t) {
                        var e;
                        for (e = this._previousMapHead; null !== e; e = e._nextPrevious) t(e)
                    }, t.prototype.forEachChangedItem = function(t) {
                        var e;
                        for (e = this._changesHead; null !== e; e = e._nextChanged) t(e)
                    }, t.prototype.forEachAddedItem = function(t) {
                        var e;
                        for (e = this._additionsHead; null !== e; e = e._nextAdded) t(e)
                    }, t.prototype.forEachRemovedItem = function(t) {
                        var e;
                        for (e = this._removalsHead; null !== e; e = e._nextRemoved) t(e)
                    }, t.prototype.diff = function(t) {
                        if (t) {
                            if (!(t instanceof Map || Rn(t))) throw new Error("Error trying to diff '" + Vt(t) + "'. Only maps and objects are allowed")
                        } else t = new Map;
                        return this.check(t) ? this : null
                    }, t.prototype.onDestroy = function() {}, t.prototype.check = function(t) {
                        var e = this;
                        this._reset();
                        var n = this._mapHead;
                        if (this._appendAfter = null, this._forEach(t, function(t, r) {
                                if (n && n.key === r) e._maybeAddToChanges(n, t), e._appendAfter = n, n = n._next;
                                else {
                                    var o = e._getOrCreateRecordForKey(r, t);
                                    n = e._insertBeforeOrAppend(n, o)
                                }
                            }), n) {
                            n._prev && (n._prev._next = null), this._removalsHead = n;
                            for (var r = n; null !== r; r = r._nextRemoved) r === this._mapHead && (this._mapHead = null), this._records.delete(r.key), r._nextRemoved = r._next, r.previousValue = r.currentValue, r.currentValue = null, r._prev = null, r._next = null
                        }
                        return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
                    }, t.prototype._insertBeforeOrAppend = function(t, e) {
                        if (t) {
                            var n = t._prev;
                            return e._next = t, e._prev = n, t._prev = e, n && (n._next = e), t === this._mapHead && (this._mapHead = e), this._appendAfter = t, t
                        }
                        return this._appendAfter ? (this._appendAfter._next = e, e._prev = this._appendAfter) : this._mapHead = e, this._appendAfter = e, null
                    }, t.prototype._getOrCreateRecordForKey = function(t, e) {
                        if (this._records.has(t)) {
                            var n = this._records.get(t);
                            this._maybeAddToChanges(n, e);
                            var r = n._prev,
                                o = n._next;
                            return r && (r._next = o), o && (o._prev = r), n._next = null, n._prev = null, n
                        }
                        var i = new ha(t);
                        return this._records.set(t, i), i.currentValue = e, this._addToAdditions(i), i
                    }, t.prototype._reset = function() {
                        if (this.isDirty) {
                            var t = void 0;
                            for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
                            for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
                            for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
                            this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
                        }
                    }, t.prototype._maybeAddToChanges = function(t, e) {
                        Ut(e, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = e, this._addToChanges(t))
                    }, t.prototype._addToAdditions = function(t) {
                        null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
                    }, t.prototype._addToChanges = function(t) {
                        null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
                    }, t.prototype._forEach = function(t, e) {
                        t instanceof Map ? t.forEach(e) : Object.keys(t).forEach(function(n) {
                            return e(t[n], n)
                        })
                    }, t
                }(),
                ha = function() {
                    return function(t) {
                        this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
                    }
                }(),
                da = function() {
                    function t(t) {
                        this.factories = t
                    }
                    return t.create = function(e, n) {
                        if (null != n) {
                            var r = n.factories.slice();
                            e = e.concat(r)
                        }
                        return new t(e)
                    }, t.extend = function(e) {
                        return {
                            provide: t,
                            useFactory: function(n) {
                                if (!n) throw new Error("Cannot extend IterableDiffers without a parent injector");
                                return t.create(e, n)
                            },
                            deps: [
                                [t, new De, new Oe]
                            ]
                        }
                    }, t.prototype.find = function(t) {
                        var e, n = this.factories.find(function(e) {
                            return e.supports(t)
                        });
                        if (null != n) return n;
                        throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'")
                    }, t.ngInjectableDef = xt({
                        providedIn: "root",
                        factory: function() {
                            return new t([new oa])
                        }
                    }), t
                }(),
                va = function() {
                    function t(t) {
                        this.factories = t
                    }
                    return t.create = function(e, n) {
                        if (n) {
                            var r = n.factories.slice();
                            e = e.concat(r)
                        }
                        return new t(e)
                    }, t.extend = function(e) {
                        return {
                            provide: t,
                            useFactory: function(n) {
                                if (!n) throw new Error("Cannot extend KeyValueDiffers without a parent injector");
                                return t.create(e, n)
                            },
                            deps: [
                                [t, new De, new Oe]
                            ]
                        }
                    }, t.prototype.find = function(t) {
                        var e = this.factories.find(function(e) {
                            return e.supports(t)
                        });
                        if (e) return e;
                        throw new Error("Cannot find a differ supporting object '" + t + "'")
                    }, t.ngInjectableDef = xt({
                        providedIn: "root",
                        factory: function() {
                            return new t([new fa])
                        }
                    }), t
                }(),
                ga = [new fa],
                ya = new da([new oa]),
                ma = new va(ga),
                wa = Mi(null, "core", [{
                    provide: ai,
                    useValue: "unknown"
                }, {
                    provide: Vi,
                    deps: [pr]
                }, {
                    provide: Oi,
                    deps: []
                }, {
                    provide: si,
                    deps: []
                }]),
                ba = new Tt("LocaleId");

            function _a() {
                return ya
            }

            function Ca() {
                return ma
            }

            function xa(t) {
                return t || "en-US"
            }
            var Sa = function() {
                return function(t) {}
            }();

            function Ea(t, e, n) {
                var r = t.state,
                    o = 1792 & r;
                return o === e ? (t.state = -1793 & r | n, t.initIndex = -1, !0) : o === n
            }

            function Ta(t, e, n) {
                return (1792 & t.state) === e && t.initIndex <= n && (t.initIndex = n + 1, !0)
            }

            function ka(t, e) {
                return t.nodes[e]
            }

            function Ia(t, e) {
                return t.nodes[e]
            }

            function Ra(t, e) {
                return t.nodes[e]
            }

            function Pa(t, e) {
                return t.nodes[e]
            }

            function Aa(t, e) {
                return t.nodes[e]
            }
            var Oa = {
                setCurrentNode: void 0,
                createRootView: void 0,
                createEmbeddedView: void 0,
                createComponentView: void 0,
                createNgModuleRef: void 0,
                overrideProvider: void 0,
                overrideComponentView: void 0,
                clearOverrides: void 0,
                checkAndUpdateView: void 0,
                checkNoChangesView: void 0,
                destroyView: void 0,
                resolveDep: void 0,
                createDebugContext: void 0,
                handleEvent: void 0,
                updateDirectives: void 0,
                updateRenderer: void 0,
                dirtyParentQueries: void 0
            };

            function Na(t, e, n, r) {
                var o = "ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '" + e + "'. Current value: '" + n + "'.";
                return r && (o += " It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook ?"),
                    function(t, e) {
                        var n = new Error(t);
                        return Da(n, e), n
                    }(o, t)
            }

            function Da(t, e) {
                t[Zo] = e, t[Qo] = e.logError.bind(e)
            }

            function ja(t) {
                return new Error("ViewDestroyedError: Attempt to use a destroyed view: " + t)
            }
            var Ma = function() {},
                Ua = new Map;

            function Va(t) {
                var e = Ua.get(t);
                return e || (e = Vt(t) + "_" + Ua.size, Ua.set(t, e)), e
            }
            var Ha = "$$undefined",
                La = "$$empty";

            function Fa(t) {
                return {
                    id: Ha,
                    styles: t.styles,
                    encapsulation: t.encapsulation,
                    data: t.data
                }
            }
            var za = 0;

            function Ba(t, e, n, r) {
                return !(!(2 & t.state) && Ut(t.oldValues[e.bindingIndex + n], r))
            }

            function qa(t, e, n, r) {
                return !!Ba(t, e, n, r) && (t.oldValues[e.bindingIndex + n] = r, !0)
            }

            function Za(t, e, n, r) {
                var o = t.oldValues[e.bindingIndex + n];
                if (1 & t.state || !En(o, r)) {
                    var i = e.bindings[n].name;
                    throw Na(Oa.createDebugContext(t, e.nodeIndex), i + ": " + o, i + ": " + r, 0 != (1 & t.state))
                }
            }

            function Ga(t) {
                for (var e = t; e;) 2 & e.def.flags && (e.state |= 8), e = e.viewContainerParent || e.parent
            }

            function Qa(t, e) {
                for (var n = t; n && n !== e;) n.state |= 64, n = n.viewContainerParent || n.parent
            }

            function Wa(t, e, n, r) {
                try {
                    return Ga(33554432 & t.def.nodes[e].flags ? Ia(t, e).componentView : t), Oa.handleEvent(t, e, n, r)
                } catch (o) {
                    t.root.errorHandler.handleError(o)
                }
            }

            function Ka(t) {
                return t.parent ? Ia(t.parent, t.parentNodeDef.nodeIndex) : null
            }

            function $a(t) {
                return t.parent ? t.parentNodeDef.parent : null
            }

            function Xa(t, e) {
                switch (201347067 & e.flags) {
                    case 1:
                        return Ia(t, e.nodeIndex).renderElement;
                    case 2:
                        return ka(t, e.nodeIndex).renderText
                }
            }

            function Ya(t) {
                return !!t.parent && !!(32768 & t.parentNodeDef.flags)
            }

            function Ja(t) {
                return !(!t.parent || 32768 & t.parentNodeDef.flags)
            }

            function tu(t) {
                var e = {},
                    n = 0,
                    r = {};
                return t && t.forEach(function(t) {
                    var o = c(t, 2),
                        i = o[0],
                        a = o[1];
                    "number" == typeof i ? (e[i] = a, n |= function(t) {
                        return 1 << t % 32
                    }(i)) : r[i] = a
                }), {
                    matchedQueries: e,
                    references: r,
                    matchedQueryIds: n
                }
            }

            function eu(t, e) {
                return t.map(function(t) {
                    var n, r, o;
                    return Array.isArray(t) ? (o = (n = c(t, 2))[0], r = n[1]) : (o = 0, r = t), r && ("function" == typeof r || "object" == typeof r) && e && Object.defineProperty(r, ur, {
                        value: e,
                        configurable: !0
                    }), {
                        flags: o,
                        token: r,
                        tokenKey: Va(r)
                    }
                })
            }

            function nu(t, e, n) {
                var r = n.renderParent;
                return r ? 0 == (1 & r.flags) || 0 == (33554432 & r.flags) || r.element.componentRendererType && r.element.componentRendererType.encapsulation === zt.Native ? Ia(t, n.renderParent.nodeIndex).renderElement : void 0 : e
            }
            var ru = new WeakMap;

            function ou(t) {
                var e = ru.get(t);
                return e || ((e = t(function() {
                    return Ma
                })).factory = t, ru.set(t, e)), e
            }

            function iu(t, e, n, r, o) {
                3 === e && (n = t.renderer.parentNode(Xa(t, t.def.lastRenderRootNode))), au(t, e, 0, t.def.nodes.length - 1, n, r, o)
            }

            function au(t, e, n, r, o, i, a) {
                for (var u = n; u <= r; u++) {
                    var s = t.def.nodes[u];
                    11 & s.flags && su(t, s, e, o, i, a), u += s.childCount
                }
            }

            function uu(t, e, n, r, o, i) {
                for (var a = t; a && !Ya(a);) a = a.parent;
                for (var u = a.parent, s = $a(a), c = s.nodeIndex + s.childCount, l = s.nodeIndex + 1; l <= c; l++) {
                    var f = u.def.nodes[l];
                    f.ngContentIndex === e && su(u, f, n, r, o, i), l += f.childCount
                }
                if (!u.parent) {
                    var p = t.root.projectableNodes[e];
                    if (p)
                        for (l = 0; l < p.length; l++) cu(t, p[l], n, r, o, i)
                }
            }

            function su(t, e, n, r, o, i) {
                if (8 & e.flags) uu(t, e.ngContent.index, n, r, o, i);
                else {
                    var a = Xa(t, e);
                    if (3 === n && 33554432 & e.flags && 48 & e.bindingFlags ? (16 & e.bindingFlags && cu(t, a, n, r, o, i), 32 & e.bindingFlags && cu(Ia(t, e.nodeIndex).componentView, a, n, r, o, i)) : cu(t, a, n, r, o, i), 16777216 & e.flags)
                        for (var u = Ia(t, e.nodeIndex).viewContainer._embeddedViews, s = 0; s < u.length; s++) iu(u[s], n, r, o, i);
                    1 & e.flags && !e.element.name && au(t, n, e.nodeIndex + 1, e.nodeIndex + e.childCount, r, o, i)
                }
            }

            function cu(t, e, n, r, o, i) {
                var a = t.renderer;
                switch (n) {
                    case 1:
                        a.appendChild(r, e);
                        break;
                    case 2:
                        a.insertBefore(r, e, o);
                        break;
                    case 3:
                        a.removeChild(r, e);
                        break;
                    case 0:
                        i.push(e)
                }
            }
            var lu = /^:([^:]+):(.+)$/;

            function fu(t) {
                if (":" === t[0]) {
                    var e = t.match(lu);
                    return [e[1], e[2]]
                }
                return ["", t]
            }

            function pu(t) {
                for (var e = 0, n = 0; n < t.length; n++) e |= t[n].flags;
                return e
            }

            function hu(t, e, n, r, o, i, a, u, s, c, l, f, p, h, d, v, g, y, m, w) {
                switch (t) {
                    case 1:
                        return e + du(n) + r;
                    case 2:
                        return e + du(n) + r + du(o) + i;
                    case 3:
                        return e + du(n) + r + du(o) + i + du(a) + u;
                    case 4:
                        return e + du(n) + r + du(o) + i + du(a) + u + du(s) + c;
                    case 5:
                        return e + du(n) + r + du(o) + i + du(a) + u + du(s) + c + du(l) + f;
                    case 6:
                        return e + du(n) + r + du(o) + i + du(a) + u + du(s) + c + du(l) + f + du(p) + h;
                    case 7:
                        return e + du(n) + r + du(o) + i + du(a) + u + du(s) + c + du(l) + f + du(p) + h + du(d) + v;
                    case 8:
                        return e + du(n) + r + du(o) + i + du(a) + u + du(s) + c + du(l) + f + du(p) + h + du(d) + v + du(g) + y;
                    case 9:
                        return e + du(n) + r + du(o) + i + du(a) + u + du(s) + c + du(l) + f + du(p) + h + du(d) + v + du(g) + y + du(m) + w;
                    default:
                        throw new Error("Does not support more than 9 expressions")
                }
            }

            function du(t) {
                return null != t ? t.toString() : ""
            }

            function vu(t, e, n, r, o, i) {
                t |= 1;
                var a = tu(e);
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    flags: t,
                    checkIndex: -1,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: a.matchedQueries,
                    matchedQueryIds: a.matchedQueryIds,
                    references: a.references,
                    ngContentIndex: n,
                    childCount: r,
                    bindings: [],
                    bindingFlags: 0,
                    outputs: [],
                    element: {
                        ns: null,
                        name: null,
                        attrs: null,
                        template: i ? ou(i) : null,
                        componentProvider: null,
                        componentView: null,
                        componentRendererType: null,
                        publicProviders: null,
                        allProviders: null,
                        handleEvent: o || Ma
                    },
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }

            function gu(t, e, n, r, o, i, a, u, s, l, f, p) {
                var h;
                void 0 === a && (a = []), l || (l = Ma);
                var d = tu(n),
                    v = d.matchedQueries,
                    g = d.references,
                    y = d.matchedQueryIds,
                    m = null,
                    w = null;
                i && (m = (h = c(fu(i), 2))[0], w = h[1]), u = u || [];
                for (var b = new Array(u.length), _ = 0; _ < u.length; _++) {
                    var C = c(u[_], 3),
                        x = C[0],
                        S = C[2],
                        E = c(fu(C[1]), 2),
                        T = E[0],
                        k = E[1],
                        I = void 0,
                        R = void 0;
                    switch (15 & x) {
                        case 4:
                            R = S;
                            break;
                        case 1:
                        case 8:
                            I = S
                    }
                    b[_] = {
                        flags: x,
                        ns: T,
                        name: k,
                        nonMinifiedName: k,
                        securityContext: I,
                        suffix: R
                    }
                }
                s = s || [];
                var P = new Array(s.length);
                for (_ = 0; _ < s.length; _++) {
                    var A = c(s[_], 2);
                    P[_] = {
                        type: 0,
                        target: A[0],
                        eventName: A[1],
                        propName: null
                    }
                }
                var O = (a = a || []).map(function(t) {
                    var e = c(t, 2),
                        n = e[1],
                        r = c(fu(e[0]), 2);
                    return [r[0], r[1], n]
                });
                return p = function(t) {
                    if (t && t.id === Ha) {
                        var e = null != t.encapsulation && t.encapsulation !== zt.None || t.styles.length || Object.keys(t.data).length;
                        t.id = e ? "c" + za++ : La
                    }
                    return t && t.id === La && (t = null), t || null
                }(p), f && (e |= 33554432), {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: e |= 1,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: v,
                    matchedQueryIds: y,
                    references: g,
                    ngContentIndex: r,
                    childCount: o,
                    bindings: b,
                    bindingFlags: pu(b),
                    outputs: P,
                    element: {
                        ns: m,
                        name: w,
                        attrs: O,
                        template: null,
                        componentProvider: null,
                        componentView: f || null,
                        componentRendererType: p,
                        publicProviders: null,
                        allProviders: null,
                        handleEvent: l || Ma
                    },
                    provider: null,
                    text: null,
                    query: null,
                    ngContent: null
                }
            }

            function yu(t, e, n) {
                var r, o = n.element,
                    i = t.root.selectorOrNode,
                    a = t.renderer;
                if (t.parent || !i) {
                    r = o.name ? a.createElement(o.name, o.ns) : a.createComment("");
                    var u = nu(t, e, n);
                    u && a.appendChild(u, r)
                } else r = a.selectRootElement(i, !!o.componentRendererType && o.componentRendererType.encapsulation === zt.ShadowDom);
                if (o.attrs)
                    for (var s = 0; s < o.attrs.length; s++) {
                        var l = c(o.attrs[s], 3);
                        a.setAttribute(r, l[1], l[2], l[0])
                    }
                return r
            }

            function mu(t, e, n, r) {
                for (var o = 0; o < n.outputs.length; o++) {
                    var i = n.outputs[o],
                        a = wu(t, n.nodeIndex, (f = i.eventName, (l = i.target) ? l + ":" + f : f)),
                        u = i.target,
                        s = t;
                    "component" === i.target && (u = null, s = e);
                    var c = s.renderer.listen(u || r, i.eventName, a);
                    t.disposables[n.outputIndex + o] = c
                }
                var l, f
            }

            function wu(t, e, n) {
                return function(r) {
                    return Wa(t, e, n, r)
                }
            }

            function bu(t, e, n, r) {
                if (!qa(t, e, n, r)) return !1;
                var o = e.bindings[n],
                    i = Ia(t, e.nodeIndex),
                    a = i.renderElement,
                    u = o.name;
                switch (15 & o.flags) {
                    case 1:
                        ! function(t, e, n, r, o, i) {
                            var a = e.securityContext,
                                u = a ? t.root.sanitizer.sanitize(a, i) : i;
                            u = null != u ? u.toString() : null;
                            var s = t.renderer;
                            null != i ? s.setAttribute(n, o, u, r) : s.removeAttribute(n, o, r)
                        }(t, o, a, o.ns, u, r);
                        break;
                    case 2:
                        ! function(t, e, n, r) {
                            var o = t.renderer;
                            r ? o.addClass(e, n) : o.removeClass(e, n)
                        }(t, a, u, r);
                        break;
                    case 4:
                        ! function(t, e, n, r, o) {
                            var i = t.root.sanitizer.sanitize(ro.STYLE, o);
                            if (null != i) {
                                i = i.toString();
                                var a = e.suffix;
                                null != a && (i += a)
                            } else i = null;
                            var u = t.renderer;
                            null != i ? u.setStyle(n, r, i) : u.removeStyle(n, r)
                        }(t, o, a, u, r);
                        break;
                    case 8:
                        ! function(t, e, n, r, o) {
                            var i = e.securityContext,
                                a = i ? t.root.sanitizer.sanitize(i, o) : o;
                            t.renderer.setProperty(n, r, a)
                        }(33554432 & e.flags && 32 & o.flags ? i.componentView : t, o, a, u, r)
                }
                return !0
            }
            var _u = new Object,
                Cu = Va(pr),
                xu = Va(lr),
                Su = Va(Qr);

            function Eu(t, e, n, r) {
                return n = Ft(n), {
                    index: -1,
                    deps: eu(r, Vt(e)),
                    flags: t,
                    token: e,
                    value: n
                }
            }

            function Tu(t, e, n) {
                void 0 === n && (n = pr.THROW_IF_NOT_FOUND);
                var r, o, i = Ue(t);
                try {
                    if (8 & e.flags) return e.token;
                    if (2 & e.flags && (n = null), 1 & e.flags) return t._parent.get(e.token, n);
                    var a = e.tokenKey;
                    switch (a) {
                        case Cu:
                        case xu:
                        case Su:
                            return t
                    }
                    var u, s = t._def.providersByKey[a];
                    if (s) {
                        var c = t._providers[s.index];
                        return void 0 === c && (c = t._providers[s.index] = ku(t, s)), c === _u ? void 0 : c
                    }
                    if ((u = St(e.token)) && (r = t, null != (o = u).providedIn && (function(t, e) {
                            return t._def.modules.indexOf(o.providedIn) > -1
                        }(r) || "root" === o.providedIn && r._def.isRoot))) {
                        var l = t._providers.length;
                        return t._def.providersByKey[e.tokenKey] = {
                            flags: 5120,
                            value: u.factory,
                            deps: [],
                            index: l,
                            token: e.token
                        }, t._providers[l] = _u, t._providers[l] = ku(t, t._def.providersByKey[e.tokenKey])
                    }
                    return 4 & e.flags ? n : t._parent.get(e.token, n)
                } finally {
                    Ue(i)
                }
            }

            function ku(t, e) {
                var n;
                switch (201347067 & e.flags) {
                    case 512:
                        n = function(t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return new e;
                                case 1:
                                    return new e(Tu(t, n[0]));
                                case 2:
                                    return new e(Tu(t, n[0]), Tu(t, n[1]));
                                case 3:
                                    return new e(Tu(t, n[0]), Tu(t, n[1]), Tu(t, n[2]));
                                default:
                                    for (var o = new Array(r), i = 0; i < r; i++) o[i] = Tu(t, n[i]);
                                    return new(e.bind.apply(e, l([void 0], o)))
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 1024:
                        n = function(t, e, n) {
                            var r = n.length;
                            switch (r) {
                                case 0:
                                    return e();
                                case 1:
                                    return e(Tu(t, n[0]));
                                case 2:
                                    return e(Tu(t, n[0]), Tu(t, n[1]));
                                case 3:
                                    return e(Tu(t, n[0]), Tu(t, n[1]), Tu(t, n[2]));
                                default:
                                    for (var o = Array(r), i = 0; i < r; i++) o[i] = Tu(t, n[i]);
                                    return e.apply(void 0, l(o))
                            }
                        }(t, e.value, e.deps);
                        break;
                    case 2048:
                        n = Tu(t, e.deps[0]);
                        break;
                    case 256:
                        n = e.value
                }
                return n === _u || null == n || "object" != typeof n || 131072 & e.flags || "function" != typeof n.ngOnDestroy || (e.flags |= 131072), void 0 === n ? _u : n
            }

            function Iu(t, e) {
                var n = t.viewContainer._embeddedViews;
                if ((null == e || e >= n.length) && (e = n.length - 1), e < 0) return null;
                var r = n[e];
                return r.viewContainerParent = null, Ou(n, e), Oa.dirtyParentQueries(r), Pu(r), r
            }

            function Ru(t, e, n) {
                var r = e ? Xa(e, e.def.lastRenderRootNode) : t.renderElement,
                    o = n.renderer.parentNode(r),
                    i = n.renderer.nextSibling(r);
                iu(n, 2, o, i, void 0)
            }

            function Pu(t) {
                iu(t, 3, null, null, void 0)
            }

            function Au(t, e, n) {
                e >= t.length ? t.push(n) : t.splice(e, 0, n)
            }

            function Ou(t, e) {
                e >= t.length - 1 ? t.pop() : t.splice(e, 1)
            }
            var Nu = new Object;

            function Du(t, e, n, r, o, i) {
                return new ju(t, e, n, r, o, i)
            }
            var ju = function(t) {
                    function e(e, n, r, o, i, a) {
                        var u = t.call(this) || this;
                        return u.selector = e, u.componentType = n, u._inputs = o, u._outputs = i, u.ngContentSelectors = a, u.viewDefFactory = r, u
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "inputs", {
                        get: function() {
                            var t = [],
                                e = this._inputs;
                            for (var n in e) t.push({
                                propName: n,
                                templateName: e[n]
                            });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "outputs", {
                        get: function() {
                            var t = [];
                            for (var e in this._outputs) t.push({
                                propName: e,
                                templateName: this._outputs[e]
                            });
                            return t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.create = function(t, e, n, r) {
                        if (!r) throw new Error("ngModule should be provided");
                        var o = ou(this.viewDefFactory),
                            i = o.nodes[0].element.componentProvider.nodeIndex,
                            a = Oa.createRootView(t, e || [], n, o, r, Nu),
                            u = Ra(a, i).instance;
                        return n && a.renderer.setAttribute(Ia(a, 0).renderElement, "ng-version", io.full), new Mu(a, new Lu(a), u)
                    }, e
                }(Hr),
                Mu = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o._view = e, o._viewRef = n, o._component = r, o._elDef = o._view.def.nodes[0], o.hostView = n, o.changeDetectorRef = n, o.instance = r, o
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "location", {
                        get: function() {
                            return new $r(Ia(this._view, this._elDef.nodeIndex).renderElement)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "injector", {
                        get: function() {
                            return new qu(this._view, this._elDef)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "componentType", {
                        get: function() {
                            return this._component.constructor
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.destroy = function() {
                        this._viewRef.destroy()
                    }, e.prototype.onDestroy = function(t) {
                        this._viewRef.onDestroy(t)
                    }, e
                }(Vr);

            function Uu(t, e, n) {
                return new Vu(t, e, n)
            }
            var Vu = function() {
                function t(t, e, n) {
                    this._view = t, this._elDef = e, this._data = n, this._embeddedViews = []
                }
                return Object.defineProperty(t.prototype, "element", {
                    get: function() {
                        return new $r(this._data.renderElement)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "injector", {
                    get: function() {
                        return new qu(this._view, this._elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parentInjector", {
                    get: function() {
                        for (var t = this._view, e = this._elDef.parent; !e && t;) e = $a(t), t = t.parent;
                        return t ? new qu(t, e) : new qu(this._view, null)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.clear = function() {
                    for (var t = this._embeddedViews.length - 1; t >= 0; t--) {
                        var e = Iu(this._data, t);
                        Oa.destroyView(e)
                    }
                }, t.prototype.get = function(t) {
                    var e = this._embeddedViews[t];
                    if (e) {
                        var n = new Lu(e);
                        return n.attachToViewContainerRef(this), n
                    }
                    return null
                }, Object.defineProperty(t.prototype, "length", {
                    get: function() {
                        return this._embeddedViews.length
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.createEmbeddedView = function(t, e, n) {
                    var r = t.createEmbeddedView(e || {});
                    return this.insert(r, n), r
                }, t.prototype.createComponent = function(t, e, n, r, o) {
                    var i = n || this.parentInjector;
                    o || t instanceof Gr || (o = i.get(Qr));
                    var a = t.create(i, r, void 0, o);
                    return this.insert(a.hostView, e), a
                }, t.prototype.insert = function(t, e) {
                    if (t.destroyed) throw new Error("Cannot insert a destroyed View in a ViewContainer!");
                    var n, r, o, i, a = t;
                    return i = (n = this._data).viewContainer._embeddedViews, null == (r = e) && (r = i.length), (o = a._view).viewContainerParent = this._view, Au(i, r, o),
                        function(t, e) {
                            var n = Ka(e);
                            if (n && n !== t && !(16 & e.state)) {
                                e.state |= 16;
                                var r = n.template._projectedViews;
                                r || (r = n.template._projectedViews = []), r.push(e),
                                    function(t, n) {
                                        if (!(4 & n.flags)) {
                                            e.parent.def.nodeFlags |= 4, n.flags |= 4;
                                            for (var r = n.parent; r;) r.childFlags |= 4, r = r.parent
                                        }
                                    }(0, e.parentNodeDef)
                            }
                        }(n, o), Oa.dirtyParentQueries(o), Ru(n, r > 0 ? i[r - 1] : null, o), a.attachToViewContainerRef(this), t
                }, t.prototype.move = function(t, e) {
                    if (t.destroyed) throw new Error("Cannot move a destroyed View in a ViewContainer!");
                    var n, r, o, i, a, u = this._embeddedViews.indexOf(t._view);
                    return o = e, a = (i = (n = this._data).viewContainer._embeddedViews)[r = u], Ou(i, r), null == o && (o = i.length), Au(i, o, a), Oa.dirtyParentQueries(a), Pu(a), Ru(n, o > 0 ? i[o - 1] : null, a), t
                }, t.prototype.indexOf = function(t) {
                    return this._embeddedViews.indexOf(t._view)
                }, t.prototype.remove = function(t) {
                    var e = Iu(this._data, t);
                    e && Oa.destroyView(e)
                }, t.prototype.detach = function(t) {
                    var e = Iu(this._data, t);
                    return e ? new Lu(e) : null
                }, t
            }();

            function Hu(t) {
                return new Lu(t)
            }
            var Lu = function() {
                function t(t) {
                    this._view = t, this._viewContainerRef = null, this._appRef = null
                }
                return Object.defineProperty(t.prototype, "rootNodes", {
                    get: function() {
                        return iu(this._view, 0, void 0, void 0, t = []), t;
                        var t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "context", {
                    get: function() {
                        return this._view.context
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "destroyed", {
                    get: function() {
                        return 0 != (128 & this._view.state)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.markForCheck = function() {
                    Ga(this._view)
                }, t.prototype.detach = function() {
                    this._view.state &= -5
                }, t.prototype.detectChanges = function() {
                    var t = this._view.root.rendererFactory;
                    t.begin && t.begin();
                    try {
                        Oa.checkAndUpdateView(this._view)
                    } finally {
                        t.end && t.end()
                    }
                }, t.prototype.checkNoChanges = function() {
                    Oa.checkNoChangesView(this._view)
                }, t.prototype.reattach = function() {
                    this._view.state |= 4
                }, t.prototype.onDestroy = function(t) {
                    this._view.disposables || (this._view.disposables = []), this._view.disposables.push(t)
                }, t.prototype.destroy = function() {
                    this._appRef ? this._appRef.detachView(this) : this._viewContainerRef && this._viewContainerRef.detach(this._viewContainerRef.indexOf(this)), Oa.destroyView(this._view)
                }, t.prototype.detachFromAppRef = function() {
                    this._appRef = null, Pu(this._view), Oa.dirtyParentQueries(this._view)
                }, t.prototype.attachToAppRef = function(t) {
                    if (this._viewContainerRef) throw new Error("This view is already attached to a ViewContainer!");
                    this._appRef = t
                }, t.prototype.attachToViewContainerRef = function(t) {
                    if (this._appRef) throw new Error("This view is already attached directly to the ApplicationRef!");
                    this._viewContainerRef = t
                }, t
            }();

            function Fu(t, e) {
                return new zu(t, e)
            }
            var zu = function(t) {
                function e(e, n) {
                    var r = t.call(this) || this;
                    return r._parentView = e, r._def = n, r
                }
                return o(e, t), e.prototype.createEmbeddedView = function(t) {
                    return new Lu(Oa.createEmbeddedView(this._parentView, this._def, this._def.element.template, t))
                }, Object.defineProperty(e.prototype, "elementRef", {
                    get: function() {
                        return new $r(Ia(this._parentView, this._def.nodeIndex).renderElement)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e
            }(Lo);

            function Bu(t, e) {
                return new qu(t, e)
            }
            var qu = function() {
                function t(t, e) {
                    this.view = t, this.elDef = e
                }
                return t.prototype.get = function(t, e) {
                    return void 0 === e && (e = pr.THROW_IF_NOT_FOUND), Oa.resolveDep(this.view, this.elDef, !!this.elDef && 0 != (33554432 & this.elDef.flags), {
                        flags: 0,
                        token: t,
                        tokenKey: Va(t)
                    }, e)
                }, t
            }();

            function Zu(t) {
                return new Gu(t.renderer)
            }
            var Gu = function() {
                function t(t) {
                    this.delegate = t
                }
                return t.prototype.selectRootElement = function(t) {
                    return this.delegate.selectRootElement(t)
                }, t.prototype.createElement = function(t, e) {
                    var n = c(fu(e), 2),
                        r = this.delegate.createElement(n[1], n[0]);
                    return t && this.delegate.appendChild(t, r), r
                }, t.prototype.createViewRoot = function(t) {
                    return t
                }, t.prototype.createTemplateAnchor = function(t) {
                    var e = this.delegate.createComment("");
                    return t && this.delegate.appendChild(t, e), e
                }, t.prototype.createText = function(t, e) {
                    var n = this.delegate.createText(e);
                    return t && this.delegate.appendChild(t, n), n
                }, t.prototype.projectNodes = function(t, e) {
                    for (var n = 0; n < e.length; n++) this.delegate.appendChild(t, e[n])
                }, t.prototype.attachViewAfter = function(t, e) {
                    for (var n = this.delegate.parentNode(t), r = this.delegate.nextSibling(t), o = 0; o < e.length; o++) this.delegate.insertBefore(n, e[o], r)
                }, t.prototype.detachView = function(t) {
                    for (var e = 0; e < t.length; e++) {
                        var n = t[e],
                            r = this.delegate.parentNode(n);
                        this.delegate.removeChild(r, n)
                    }
                }, t.prototype.destroyView = function(t, e) {
                    for (var n = 0; n < e.length; n++) this.delegate.destroyNode(e[n])
                }, t.prototype.listen = function(t, e, n) {
                    return this.delegate.listen(t, e, n)
                }, t.prototype.listenGlobal = function(t, e, n) {
                    return this.delegate.listen(t, e, n)
                }, t.prototype.setElementProperty = function(t, e, n) {
                    this.delegate.setProperty(t, e, n)
                }, t.prototype.setElementAttribute = function(t, e, n) {
                    var r = c(fu(e), 2),
                        o = r[0],
                        i = r[1];
                    null != n ? this.delegate.setAttribute(t, i, n, o) : this.delegate.removeAttribute(t, i, o)
                }, t.prototype.setBindingDebugInfo = function(t, e, n) {}, t.prototype.setElementClass = function(t, e, n) {
                    n ? this.delegate.addClass(t, e) : this.delegate.removeClass(t, e)
                }, t.prototype.setElementStyle = function(t, e, n) {
                    null != n ? this.delegate.setStyle(t, e, n) : this.delegate.removeStyle(t, e)
                }, t.prototype.invokeElementMethod = function(t, e, n) {
                    t[e].apply(t, n)
                }, t.prototype.setText = function(t, e) {
                    this.delegate.setValue(t, e)
                }, t.prototype.animate = function() {
                    throw new Error("Renderer.animate is no longer supported!")
                }, t
            }();

            function Qu(t, e, n, r) {
                return new Wu(t, e, n, r)
            }
            var Wu = function() {
                    function t(t, e, n, r) {
                        this._moduleType = t, this._parent = e, this._bootstrapComponents = n, this._def = r, this._destroyListeners = [], this._destroyed = !1, this.injector = this,
                            function(t) {
                                for (var e = t._def, n = t._providers = new Array(e.providers.length), r = 0; r < e.providers.length; r++) {
                                    var o = e.providers[r];
                                    4096 & o.flags || void 0 === n[r] && (n[r] = ku(t, o))
                                }
                            }(this)
                    }
                    return t.prototype.get = function(t, e, n) {
                        void 0 === e && (e = pr.THROW_IF_NOT_FOUND), void 0 === n && (n = je.Default);
                        var r = 0;
                        return n & je.SkipSelf ? r |= 1 : n & je.Self && (r |= 4), Tu(this, {
                            token: t,
                            tokenKey: Va(t),
                            flags: r
                        }, e)
                    }, Object.defineProperty(t.prototype, "instance", {
                        get: function() {
                            return this.get(this._moduleType)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "componentFactoryResolver", {
                        get: function() {
                            return this.get(qr)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.destroy = function() {
                        if (this._destroyed) throw new Error("The ng module " + Vt(this.instance.constructor) + " has already been destroyed.");
                        this._destroyed = !0,
                            function(t, e) {
                                for (var n = t._def, r = new Set, o = 0; o < n.providers.length; o++)
                                    if (131072 & n.providers[o].flags) {
                                        var i = t._providers[o];
                                        if (i && i !== _u) {
                                            var a = i.ngOnDestroy;
                                            "function" != typeof a || r.has(i) || (a.apply(i), r.add(i))
                                        }
                                    }
                            }(this), this._destroyListeners.forEach(function(t) {
                                return t()
                            })
                    }, t.prototype.onDestroy = function(t) {
                        this._destroyListeners.push(t)
                    }, t
                }(),
                Ku = Va(Yr),
                $u = Va(eo),
                Xu = Va($r),
                Yu = Va(Wi),
                Ju = Va(Lo),
                ts = Va($i),
                es = Va(pr),
                ns = Va(lr);

            function rs(t, e, n, r, o, i, a, u) {
                var s = [];
                if (a)
                    for (var l in a) {
                        var f = c(a[l], 2);
                        s[f[0]] = {
                            flags: 8,
                            name: l,
                            nonMinifiedName: f[1],
                            ns: null,
                            securityContext: null,
                            suffix: null
                        }
                    }
                var p = [];
                if (u)
                    for (var h in u) p.push({
                        type: 1,
                        propName: h,
                        target: null,
                        eventName: u[h]
                    });
                return function(t, e, n, r, o, i, a, u, s) {
                    var c = tu(n),
                        l = c.matchedQueries,
                        f = c.references,
                        p = c.matchedQueryIds;
                    s || (s = []), u || (u = []), i = Ft(i);
                    var h = eu(a, Vt(o));
                    return {
                        nodeIndex: -1,
                        parent: null,
                        renderParent: null,
                        bindingIndex: -1,
                        outputIndex: -1,
                        checkIndex: t,
                        flags: e,
                        childFlags: 0,
                        directChildFlags: 0,
                        childMatchedQueries: 0,
                        matchedQueries: l,
                        matchedQueryIds: p,
                        references: f,
                        ngContentIndex: -1,
                        childCount: r,
                        bindings: u,
                        bindingFlags: pu(u),
                        outputs: s,
                        element: null,
                        provider: {
                            token: o,
                            value: i,
                            deps: h
                        },
                        text: null,
                        query: null,
                        ngContent: null
                    }
                }(t, e |= 16384, n, r, o, o, i, s, p)
            }

            function os(t, e) {
                return ss(t, e)
            }

            function is(t, e) {
                for (var n = t; n.parent && !Ya(n);) n = n.parent;
                return cs(n.parent, $a(n), !0, e.provider.value, e.provider.deps)
            }

            function as(t, e) {
                var n = cs(t, e.parent, (32768 & e.flags) > 0, e.provider.value, e.provider.deps);
                if (e.outputs.length)
                    for (var r = 0; r < e.outputs.length; r++) {
                        var o = e.outputs[r],
                            i = n[o.propName];
                        if (!Jo(i)) throw new Error("@Output " + o.propName + " not initialized in '" + n.constructor.name + "'.");
                        var a = i.subscribe(us(t, e.parent.nodeIndex, o.eventName));
                        t.disposables[e.outputIndex + r] = a.unsubscribe.bind(a)
                    }
                return n
            }

            function us(t, e, n) {
                return function(r) {
                    return Wa(t, e, n, r)
                }
            }

            function ss(t, e) {
                var n = (8192 & e.flags) > 0,
                    r = e.provider;
                switch (201347067 & e.flags) {
                    case 512:
                        return cs(t, e.parent, n, r.value, r.deps);
                    case 1024:
                        return function(t, e, n, r, o) {
                            var i = o.length;
                            switch (i) {
                                case 0:
                                    return r();
                                case 1:
                                    return r(fs(t, e, n, o[0]));
                                case 2:
                                    return r(fs(t, e, n, o[0]), fs(t, e, n, o[1]));
                                case 3:
                                    return r(fs(t, e, n, o[0]), fs(t, e, n, o[1]), fs(t, e, n, o[2]));
                                default:
                                    for (var a = Array(i), u = 0; u < i; u++) a[u] = fs(t, e, n, o[u]);
                                    return r.apply(void 0, l(a))
                            }
                        }(t, e.parent, n, r.value, r.deps);
                    case 2048:
                        return fs(t, e.parent, n, r.deps[0]);
                    case 256:
                        return r.value
                }
            }

            function cs(t, e, n, r, o) {
                var i = o.length;
                switch (i) {
                    case 0:
                        return new r;
                    case 1:
                        return new r(fs(t, e, n, o[0]));
                    case 2:
                        return new r(fs(t, e, n, o[0]), fs(t, e, n, o[1]));
                    case 3:
                        return new r(fs(t, e, n, o[0]), fs(t, e, n, o[1]), fs(t, e, n, o[2]));
                    default:
                        for (var a = new Array(i), u = 0; u < i; u++) a[u] = fs(t, e, n, o[u]);
                        return new(r.bind.apply(r, l([void 0], a)))
                }
            }
            var ls = {};

            function fs(t, e, n, r, o) {
                if (void 0 === o && (o = pr.THROW_IF_NOT_FOUND), 8 & r.flags) return r.token;
                var i = t;
                2 & r.flags && (o = null);
                var a = r.tokenKey;
                a === ts && (n = !(!e || !e.element.componentView)), e && 1 & r.flags && (n = !1, e = e.parent);
                for (var u = t; u;) {
                    if (e) switch (a) {
                        case Ku:
                            return Zu(ps(u, e, n));
                        case $u:
                            return ps(u, e, n).renderer;
                        case Xu:
                            return new $r(Ia(u, e.nodeIndex).renderElement);
                        case Yu:
                            return Ia(u, e.nodeIndex).viewContainer;
                        case Ju:
                            if (e.element.template) return Ia(u, e.nodeIndex).template;
                            break;
                        case ts:
                            return Hu(ps(u, e, n));
                        case es:
                        case ns:
                            return Bu(u, e);
                        default:
                            var s = (n ? e.element.allProviders : e.element.publicProviders)[a];
                            if (s) {
                                var c = Ra(u, s.nodeIndex);
                                return c || (c = {
                                    instance: ss(u, s)
                                }, u.nodes[s.nodeIndex] = c), c.instance
                            }
                    }
                    n = Ya(u), e = $a(u), u = u.parent, 4 & r.flags && (u = null)
                }
                var l = i.root.injector.get(r.token, ls);
                return l !== ls || o === ls ? l : i.root.ngModule.injector.get(r.token, o)
            }

            function ps(t, e, n) {
                var r;
                if (n) r = Ia(t, e.nodeIndex).componentView;
                else
                    for (r = t; r.parent && !Ya(r);) r = r.parent;
                return r
            }

            function hs(t, e, n, r, o, i) {
                if (32768 & n.flags) {
                    var a = Ia(t, n.parent.nodeIndex).componentView;
                    2 & a.def.flags && (a.state |= 8)
                }
                if (e.instance[n.bindings[r].name] = o, 524288 & n.flags) {
                    i = i || {};
                    var u = Tn.unwrap(t.oldValues[n.bindingIndex + r]);
                    i[n.bindings[r].nonMinifiedName] = new kn(u, o, 0 != (2 & t.state))
                }
                return t.oldValues[n.bindingIndex + r] = o, i
            }

            function ds(t, e) {
                if (t.def.nodeFlags & e)
                    for (var n = t.def.nodes, r = 0, o = 0; o < n.length; o++) {
                        var i = n[o],
                            a = i.parent;
                        for (!a && i.flags & e && gs(t, o, i.flags & e, r++), 0 == (i.childFlags & e) && (o += i.childCount); a && 1 & a.flags && o === a.nodeIndex + a.childCount;) a.directChildFlags & e && (r = vs(t, a, e, r)), a = a.parent
                    }
            }

            function vs(t, e, n, r) {
                for (var o = e.nodeIndex + 1; o <= e.nodeIndex + e.childCount; o++) {
                    var i = t.def.nodes[o];
                    i.flags & n && gs(t, o, i.flags & n, r++), o += i.childCount
                }
                return r
            }

            function gs(t, e, n, r) {
                var o = Ra(t, e);
                if (o) {
                    var i = o.instance;
                    i && (Oa.setCurrentNode(t, e), 1048576 & n && Ta(t, 512, r) && i.ngAfterContentInit(), 2097152 & n && i.ngAfterContentChecked(), 4194304 & n && Ta(t, 768, r) && i.ngAfterViewInit(), 8388608 & n && i.ngAfterViewChecked(), 131072 & n && i.ngOnDestroy())
                }
            }

            function ys(t) {
                for (var e = t.def.nodeMatchedQueries; t.parent && Ja(t);) {
                    var n = t.parentNodeDef;
                    t = t.parent;
                    for (var r = n.nodeIndex + n.childCount, o = 0; o <= r; o++) 67108864 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && (i.query.filterId & e) === i.query.filterId && Aa(t, o).setDirty(), !(1 & i.flags && o + i.childCount < n.nodeIndex) && 67108864 & i.childFlags && 536870912 & i.childFlags || (o += i.childCount)
                }
                if (134217728 & t.def.nodeFlags)
                    for (o = 0; o < t.def.nodes.length; o++) {
                        var i;
                        134217728 & (i = t.def.nodes[o]).flags && 536870912 & i.flags && Aa(t, o).setDirty(), o += i.childCount
                    }
            }

            function ms(t, e) {
                var n = Aa(t, e.nodeIndex);
                if (n.dirty) {
                    var r, o = void 0;
                    if (67108864 & e.flags) {
                        var i = e.parent.parent;
                        o = ws(t, i.nodeIndex, i.nodeIndex + i.childCount, e.query, []), r = Ra(t, e.parent.nodeIndex).instance
                    } else 134217728 & e.flags && (o = ws(t, 0, t.def.nodes.length - 1, e.query, []), r = t.component);
                    n.reset(o);
                    for (var a = e.query.bindings, u = !1, s = 0; s < a.length; s++) {
                        var c = a[s],
                            l = void 0;
                        switch (c.bindingType) {
                            case 0:
                                l = n.first;
                                break;
                            case 1:
                                l = n, u = !0
                        }
                        r[c.propName] = l
                    }
                    u && n.notifyOnChanges()
                }
            }

            function ws(t, e, n, r, o) {
                for (var i = e; i <= n; i++) {
                    var a = t.def.nodes[i],
                        u = a.matchedQueries[r.id];
                    if (null != u && o.push(bs(t, a, u)), 1 & a.flags && a.element.template && (a.element.template.nodeMatchedQueries & r.filterId) === r.filterId) {
                        var s = Ia(t, i);
                        if ((a.childMatchedQueries & r.filterId) === r.filterId && (ws(t, i + 1, i + a.childCount, r, o), i += a.childCount), 16777216 & a.flags)
                            for (var c = s.viewContainer._embeddedViews, l = 0; l < c.length; l++) {
                                var f = c[l],
                                    p = Ka(f);
                                p && p === s && ws(f, 0, f.def.nodes.length - 1, r, o)
                            }
                        var h = s.template._projectedViews;
                        if (h)
                            for (l = 0; l < h.length; l++) {
                                var d = h[l];
                                ws(d, 0, d.def.nodes.length - 1, r, o)
                            }
                    }(a.childMatchedQueries & r.filterId) !== r.filterId && (i += a.childCount)
                }
                return o
            }

            function bs(t, e, n) {
                if (null != n) switch (n) {
                    case 1:
                        return Ia(t, e.nodeIndex).renderElement;
                    case 0:
                        return new $r(Ia(t, e.nodeIndex).renderElement);
                    case 2:
                        return Ia(t, e.nodeIndex).template;
                    case 3:
                        return Ia(t, e.nodeIndex).viewContainer;
                    case 4:
                        return Ra(t, e.nodeIndex).instance
                }
            }

            function _s(t, e, n) {
                var r = nu(t, e, n);
                r && uu(t, n.ngContent.index, 1, r, null, void 0)
            }

            function Cs(t, e, n) {
                for (var r = new Array(n.length - 1), o = 1; o < n.length; o++) r[o - 1] = {
                    flags: 8,
                    name: null,
                    ns: null,
                    nonMinifiedName: null,
                    securityContext: null,
                    suffix: n[o]
                };
                return {
                    nodeIndex: -1,
                    parent: null,
                    renderParent: null,
                    bindingIndex: -1,
                    outputIndex: -1,
                    checkIndex: t,
                    flags: 2,
                    childFlags: 0,
                    directChildFlags: 0,
                    childMatchedQueries: 0,
                    matchedQueries: {},
                    matchedQueryIds: 0,
                    references: {},
                    ngContentIndex: e,
                    childCount: 0,
                    bindings: r,
                    bindingFlags: 8,
                    outputs: [],
                    element: null,
                    provider: null,
                    text: {
                        prefix: n[0]
                    },
                    query: null,
                    ngContent: null
                }
            }

            function xs(t, e, n) {
                var r, o = t.renderer;
                r = o.createText(n.text.prefix);
                var i = nu(t, e, n);
                return i && o.appendChild(i, r), {
                    renderText: r
                }
            }

            function Ss(t, e) {
                return (null != t ? t.toString() : "") + e.suffix
            }

            function Es(t, e, n, r) {
                for (var o = 0, i = 0, a = 0, u = 0, s = 0, c = null, l = null, f = !1, p = !1, h = null, d = 0; d < e.length; d++) {
                    var v = e[d];
                    if (v.nodeIndex = d, v.parent = c, v.bindingIndex = o, v.outputIndex = i, v.renderParent = l, a |= v.flags, s |= v.matchedQueryIds, v.element) {
                        var g = v.element;
                        g.publicProviders = c ? c.element.publicProviders : Object.create(null), g.allProviders = g.publicProviders, f = !1, p = !1, v.element.template && (s |= v.element.template.nodeMatchedQueries)
                    }
                    if (ks(c, v, e.length), o += v.bindings.length, i += v.outputs.length, !l && 3 & v.flags && (h = v), 20224 & v.flags) {
                        f || (f = !0, c.element.publicProviders = Object.create(c.element.publicProviders), c.element.allProviders = c.element.publicProviders);
                        var y = 0 != (32768 & v.flags);
                        0 == (8192 & v.flags) || y ? c.element.publicProviders[Va(v.provider.token)] = v : (p || (p = !0, c.element.allProviders = Object.create(c.element.publicProviders)), c.element.allProviders[Va(v.provider.token)] = v), y && (c.element.componentProvider = v)
                    }
                    if (c ? (c.childFlags |= v.flags, c.directChildFlags |= v.flags, c.childMatchedQueries |= v.matchedQueryIds, v.element && v.element.template && (c.childMatchedQueries |= v.element.template.nodeMatchedQueries)) : u |= v.flags, v.childCount > 0) c = v, Ts(v) || (l = v);
                    else
                        for (; c && d === c.nodeIndex + c.childCount;) {
                            var m = c.parent;
                            m && (m.childFlags |= c.childFlags, m.childMatchedQueries |= c.childMatchedQueries), l = (c = m) && Ts(c) ? c.renderParent : c
                        }
                }
                return {
                    factory: null,
                    nodeFlags: a,
                    rootNodeFlags: u,
                    nodeMatchedQueries: s,
                    flags: t,
                    nodes: e,
                    updateDirectives: n || Ma,
                    updateRenderer: r || Ma,
                    handleEvent: function(t, n, r, o) {
                        return e[n].element.handleEvent(t, r, o)
                    },
                    bindingCount: o,
                    outputCount: i,
                    lastRenderRootNode: h
                }
            }

            function Ts(t) {
                return 0 != (1 & t.flags) && null === t.element.name
            }

            function ks(t, e, n) {
                var r = e.element && e.element.template;
                if (r) {
                    if (!r.lastRenderRootNode) throw new Error("Illegal State: Embedded templates without nodes are not allowed!");
                    if (r.lastRenderRootNode && 16777216 & r.lastRenderRootNode.flags) throw new Error("Illegal State: Last root node of a template can't have embedded views, at index " + e.nodeIndex + "!")
                }
                if (20224 & e.flags && 0 == (1 & (t ? t.flags : 0))) throw new Error("Illegal State: StaticProvider/Directive nodes need to be children of elements or anchors, at index " + e.nodeIndex + "!");
                if (e.query) {
                    if (67108864 & e.flags && (!t || 0 == (16384 & t.flags))) throw new Error("Illegal State: Content Query nodes need to be children of directives, at index " + e.nodeIndex + "!");
                    if (134217728 & e.flags && t) throw new Error("Illegal State: View Query nodes have to be top level nodes, at index " + e.nodeIndex + "!")
                }
                if (e.childCount) {
                    var o = t ? t.nodeIndex + t.childCount : n - 1;
                    if (e.nodeIndex <= o && e.nodeIndex + e.childCount > o) throw new Error("Illegal State: childCount of node leads outside of parent, at index " + e.nodeIndex + "!")
                }
            }

            function Is(t, e, n, r) {
                var o = As(t.root, t.renderer, t, e, n);
                return Os(o, t.component, r), Ns(o), o
            }

            function Rs(t, e, n) {
                var r = As(t, t.renderer, null, null, e);
                return Os(r, n, n), Ns(r), r
            }

            function Ps(t, e, n, r) {
                var o, i = e.element.componentRendererType;
                return o = i ? t.root.rendererFactory.createRenderer(r, i) : t.root.renderer, As(t.root, o, t, e.element.componentProvider, n)
            }

            function As(t, e, n, r, o) {
                var i = new Array(o.nodes.length),
                    a = o.outputCount ? new Array(o.outputCount) : null;
                return {
                    def: o,
                    parent: n,
                    viewContainerParent: null,
                    parentNodeDef: r,
                    context: null,
                    component: null,
                    nodes: i,
                    state: 13,
                    root: t,
                    renderer: e,
                    oldValues: new Array(o.bindingCount),
                    disposables: a,
                    initIndex: -1
                }
            }

            function Os(t, e, n) {
                t.component = e, t.context = n
            }

            function Ns(t) {
                var e;
                Ya(t) && (e = Ia(t.parent, t.parentNodeDef.parent.nodeIndex).renderElement);
                for (var n = t.def, r = t.nodes, o = 0; o < n.nodes.length; o++) {
                    var i = n.nodes[o];
                    Oa.setCurrentNode(t, o);
                    var a = void 0;
                    switch (201347067 & i.flags) {
                        case 1:
                            var u = yu(t, e, i),
                                s = void 0;
                            if (33554432 & i.flags) {
                                var c = ou(i.element.componentView);
                                s = Oa.createComponentView(t, i, c, u)
                            }
                            mu(t, s, i, u), a = {
                                renderElement: u,
                                componentView: s,
                                viewContainer: null,
                                template: i.element.template ? Fu(t, i) : void 0
                            }, 16777216 & i.flags && (a.viewContainer = Uu(t, i, a));
                            break;
                        case 2:
                            a = xs(t, e, i);
                            break;
                        case 512:
                        case 1024:
                        case 2048:
                        case 256:
                            (a = r[o]) || 4096 & i.flags || (a = {
                                instance: os(t, i)
                            });
                            break;
                        case 16:
                            a = {
                                instance: is(t, i)
                            };
                            break;
                        case 16384:
                            (a = r[o]) || (a = {
                                instance: as(t, i)
                            }), 32768 & i.flags && Os(Ia(t, i.parent.nodeIndex).componentView, a.instance, a.instance);
                            break;
                        case 32:
                        case 64:
                        case 128:
                            a = {
                                value: void 0
                            };
                            break;
                        case 67108864:
                        case 134217728:
                            a = new zi;
                            break;
                        case 8:
                            _s(t, e, i), a = void 0
                    }
                    r[o] = a
                }
                zs(t, Fs.CreateViewNodes), Gs(t, 201326592, 268435456, 0)
            }

            function Ds(t) {
                Us(t), Oa.updateDirectives(t, 1), Bs(t, Fs.CheckNoChanges), Oa.updateRenderer(t, 1), zs(t, Fs.CheckNoChanges), t.state &= -97
            }

            function js(t) {
                1 & t.state ? (t.state &= -2, t.state |= 2) : t.state &= -3, Ea(t, 0, 256), Us(t), Oa.updateDirectives(t, 0), Bs(t, Fs.CheckAndUpdate), Gs(t, 67108864, 536870912, 0);
                var e = Ea(t, 256, 512);
                ds(t, 2097152 | (e ? 1048576 : 0)), Oa.updateRenderer(t, 0), zs(t, Fs.CheckAndUpdate), Gs(t, 134217728, 536870912, 0), ds(t, 8388608 | ((e = Ea(t, 512, 768)) ? 4194304 : 0)), 2 & t.def.flags && (t.state &= -9), t.state &= -97, Ea(t, 768, 1024)
            }

            function Ms(t, e, n, r, o, i, a, u, s, c, f, p, h) {
                return 0 === n ? function(t, e, n, r, o, i, a, u, s, c, l, f) {
                    switch (201347067 & e.flags) {
                        case 1:
                            return function(t, e, n, r, o, i, a, u, s, c, l, f) {
                                var p = e.bindings.length,
                                    h = !1;
                                return p > 0 && bu(t, e, 0, n) && (h = !0), p > 1 && bu(t, e, 1, r) && (h = !0), p > 2 && bu(t, e, 2, o) && (h = !0), p > 3 && bu(t, e, 3, i) && (h = !0), p > 4 && bu(t, e, 4, a) && (h = !0), p > 5 && bu(t, e, 5, u) && (h = !0), p > 6 && bu(t, e, 6, s) && (h = !0), p > 7 && bu(t, e, 7, c) && (h = !0), p > 8 && bu(t, e, 8, l) && (h = !0), p > 9 && bu(t, e, 9, f) && (h = !0), h
                            }(t, e, n, r, o, i, a, u, s, c, l, f);
                        case 2:
                            return function(t, e, n, r, o, i, a, u, s, c, l, f) {
                                var p = !1,
                                    h = e.bindings,
                                    d = h.length;
                                if (d > 0 && qa(t, e, 0, n) && (p = !0), d > 1 && qa(t, e, 1, r) && (p = !0), d > 2 && qa(t, e, 2, o) && (p = !0), d > 3 && qa(t, e, 3, i) && (p = !0), d > 4 && qa(t, e, 4, a) && (p = !0), d > 5 && qa(t, e, 5, u) && (p = !0), d > 6 && qa(t, e, 6, s) && (p = !0), d > 7 && qa(t, e, 7, c) && (p = !0), d > 8 && qa(t, e, 8, l) && (p = !0), d > 9 && qa(t, e, 9, f) && (p = !0), p) {
                                    var v = e.text.prefix;
                                    d > 0 && (v += Ss(n, h[0])), d > 1 && (v += Ss(r, h[1])), d > 2 && (v += Ss(o, h[2])), d > 3 && (v += Ss(i, h[3])), d > 4 && (v += Ss(a, h[4])), d > 5 && (v += Ss(u, h[5])), d > 6 && (v += Ss(s, h[6])), d > 7 && (v += Ss(c, h[7])), d > 8 && (v += Ss(l, h[8])), d > 9 && (v += Ss(f, h[9]));
                                    var g = ka(t, e.nodeIndex).renderText;
                                    t.renderer.setValue(g, v)
                                }
                                return p
                            }(t, e, n, r, o, i, a, u, s, c, l, f);
                        case 16384:
                            return function(t, e, n, r, o, i, a, u, s, c, l, f) {
                                var p = Ra(t, e.nodeIndex),
                                    h = p.instance,
                                    d = !1,
                                    v = void 0,
                                    g = e.bindings.length;
                                return g > 0 && Ba(t, e, 0, n) && (d = !0, v = hs(t, p, e, 0, n, v)), g > 1 && Ba(t, e, 1, r) && (d = !0, v = hs(t, p, e, 1, r, v)), g > 2 && Ba(t, e, 2, o) && (d = !0, v = hs(t, p, e, 2, o, v)), g > 3 && Ba(t, e, 3, i) && (d = !0, v = hs(t, p, e, 3, i, v)), g > 4 && Ba(t, e, 4, a) && (d = !0, v = hs(t, p, e, 4, a, v)), g > 5 && Ba(t, e, 5, u) && (d = !0, v = hs(t, p, e, 5, u, v)), g > 6 && Ba(t, e, 6, s) && (d = !0, v = hs(t, p, e, 6, s, v)), g > 7 && Ba(t, e, 7, c) && (d = !0, v = hs(t, p, e, 7, c, v)), g > 8 && Ba(t, e, 8, l) && (d = !0, v = hs(t, p, e, 8, l, v)), g > 9 && Ba(t, e, 9, f) && (d = !0, v = hs(t, p, e, 9, f, v)), v && h.ngOnChanges(v), 65536 & e.flags && Ta(t, 256, e.nodeIndex) && h.ngOnInit(), 262144 & e.flags && h.ngDoCheck(), d
                            }(t, e, n, r, o, i, a, u, s, c, l, f);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, e, n, r, o, i, a, u, s, c, l, f) {
                                var p = e.bindings,
                                    h = !1,
                                    d = p.length;
                                if (d > 0 && qa(t, e, 0, n) && (h = !0), d > 1 && qa(t, e, 1, r) && (h = !0), d > 2 && qa(t, e, 2, o) && (h = !0), d > 3 && qa(t, e, 3, i) && (h = !0), d > 4 && qa(t, e, 4, a) && (h = !0), d > 5 && qa(t, e, 5, u) && (h = !0), d > 6 && qa(t, e, 6, s) && (h = !0), d > 7 && qa(t, e, 7, c) && (h = !0), d > 8 && qa(t, e, 8, l) && (h = !0), d > 9 && qa(t, e, 9, f) && (h = !0), h) {
                                    var v = Pa(t, e.nodeIndex),
                                        g = void 0;
                                    switch (201347067 & e.flags) {
                                        case 32:
                                            g = new Array(p.length), d > 0 && (g[0] = n), d > 1 && (g[1] = r), d > 2 && (g[2] = o), d > 3 && (g[3] = i), d > 4 && (g[4] = a), d > 5 && (g[5] = u), d > 6 && (g[6] = s), d > 7 && (g[7] = c), d > 8 && (g[8] = l), d > 9 && (g[9] = f);
                                            break;
                                        case 64:
                                            g = {}, d > 0 && (g[p[0].name] = n), d > 1 && (g[p[1].name] = r), d > 2 && (g[p[2].name] = o), d > 3 && (g[p[3].name] = i), d > 4 && (g[p[4].name] = a), d > 5 && (g[p[5].name] = u), d > 6 && (g[p[6].name] = s), d > 7 && (g[p[7].name] = c), d > 8 && (g[p[8].name] = l), d > 9 && (g[p[9].name] = f);
                                            break;
                                        case 128:
                                            var y = n;
                                            switch (d) {
                                                case 1:
                                                    g = y.transform(n);
                                                    break;
                                                case 2:
                                                    g = y.transform(r);
                                                    break;
                                                case 3:
                                                    g = y.transform(r, o);
                                                    break;
                                                case 4:
                                                    g = y.transform(r, o, i);
                                                    break;
                                                case 5:
                                                    g = y.transform(r, o, i, a);
                                                    break;
                                                case 6:
                                                    g = y.transform(r, o, i, a, u);
                                                    break;
                                                case 7:
                                                    g = y.transform(r, o, i, a, u, s);
                                                    break;
                                                case 8:
                                                    g = y.transform(r, o, i, a, u, s, c);
                                                    break;
                                                case 9:
                                                    g = y.transform(r, o, i, a, u, s, c, l);
                                                    break;
                                                case 10:
                                                    g = y.transform(r, o, i, a, u, s, c, l, f)
                                            }
                                    }
                                    v.value = g
                                }
                                return h
                            }(t, e, n, r, o, i, a, u, s, c, l, f);
                        default:
                            throw "unreachable"
                    }
                }(t, e, r, o, i, a, u, s, c, f, p, h) : function(t, e, n) {
                    switch (201347067 & e.flags) {
                        case 1:
                            return function(t, e, n) {
                                for (var r = !1, o = 0; o < n.length; o++) bu(t, e, o, n[o]) && (r = !0);
                                return r
                            }(t, e, n);
                        case 2:
                            return function(t, e, n) {
                                for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) qa(t, e, i, n[i]) && (o = !0);
                                if (o) {
                                    var a = "";
                                    for (i = 0; i < n.length; i++) a += Ss(n[i], r[i]);
                                    a = e.text.prefix + a;
                                    var u = ka(t, e.nodeIndex).renderText;
                                    t.renderer.setValue(u, a)
                                }
                                return o
                            }(t, e, n);
                        case 16384:
                            return function(t, e, n) {
                                for (var r = Ra(t, e.nodeIndex), o = r.instance, i = !1, a = void 0, u = 0; u < n.length; u++) Ba(t, e, u, n[u]) && (i = !0, a = hs(t, r, e, u, n[u], a));
                                return a && o.ngOnChanges(a), 65536 & e.flags && Ta(t, 256, e.nodeIndex) && o.ngOnInit(), 262144 & e.flags && o.ngDoCheck(), i
                            }(t, e, n);
                        case 32:
                        case 64:
                        case 128:
                            return function(t, e, n) {
                                for (var r = e.bindings, o = !1, i = 0; i < n.length; i++) qa(t, e, i, n[i]) && (o = !0);
                                if (o) {
                                    var a = Pa(t, e.nodeIndex),
                                        u = void 0;
                                    switch (201347067 & e.flags) {
                                        case 32:
                                            u = n;
                                            break;
                                        case 64:
                                            for (u = {}, i = 0; i < n.length; i++) u[r[i].name] = n[i];
                                            break;
                                        case 128:
                                            var s = n[0],
                                                c = n.slice(1);
                                            u = s.transform.apply(s, l(c))
                                    }
                                    a.value = u
                                }
                                return o
                            }(t, e, n);
                        default:
                            throw "unreachable"
                    }
                }(t, e, r)
            }

            function Us(t) {
                var e = t.def;
                if (4 & e.nodeFlags)
                    for (var n = 0; n < e.nodes.length; n++) {
                        var r = e.nodes[n];
                        if (4 & r.flags) {
                            var o = Ia(t, n).template._projectedViews;
                            if (o)
                                for (var i = 0; i < o.length; i++) {
                                    var a = o[i];
                                    a.state |= 32, Qa(a, t)
                                }
                        } else 0 == (4 & r.childFlags) && (n += r.childCount)
                    }
            }

            function Vs(t, e, n, r, o, i, a, u, s, c, l, f, p) {
                return 0 === n ? function(t, e, n, r, o, i, a, u, s, c, l, f) {
                    var p = e.bindings.length;
                    p > 0 && Za(t, e, 0, n), p > 1 && Za(t, e, 1, r), p > 2 && Za(t, e, 2, o), p > 3 && Za(t, e, 3, i), p > 4 && Za(t, e, 4, a), p > 5 && Za(t, e, 5, u), p > 6 && Za(t, e, 6, s), p > 7 && Za(t, e, 7, c), p > 8 && Za(t, e, 8, l), p > 9 && Za(t, e, 9, f)
                }(t, e, r, o, i, a, u, s, c, l, f, p) : function(t, e, n) {
                    for (var r = 0; r < n.length; r++) Za(t, e, r, n[r])
                }(t, e, r), !1
            }

            function Hs(t, e) {
                if (Aa(t, e.nodeIndex).dirty) throw Na(Oa.createDebugContext(t, e.nodeIndex), "Query " + e.query.id + " not dirty", "Query " + e.query.id + " dirty", 0 != (1 & t.state))
            }

            function Ls(t) {
                if (!(128 & t.state)) {
                    if (Bs(t, Fs.Destroy), zs(t, Fs.Destroy), ds(t, 131072), t.disposables)
                        for (var e = 0; e < t.disposables.length; e++) t.disposables[e]();
                    ! function(t) {
                        if (16 & t.state) {
                            var e = Ka(t);
                            if (e) {
                                var n = e.template._projectedViews;
                                n && (Ou(n, n.indexOf(t)), Oa.dirtyParentQueries(t))
                            }
                        }
                    }(t), t.renderer.destroyNode && function(t) {
                        for (var e = t.def.nodes.length, n = 0; n < e; n++) {
                            var r = t.def.nodes[n];
                            1 & r.flags ? t.renderer.destroyNode(Ia(t, n).renderElement) : 2 & r.flags ? t.renderer.destroyNode(ka(t, n).renderText) : (67108864 & r.flags || 134217728 & r.flags) && Aa(t, n).destroy()
                        }
                    }(t), Ya(t) && t.renderer.destroy(), t.state |= 128
                }
            }
            var Fs = function(t) {
                return t[t.CreateViewNodes = 0] = "CreateViewNodes", t[t.CheckNoChanges = 1] = "CheckNoChanges", t[t.CheckNoChangesProjectedViews = 2] = "CheckNoChangesProjectedViews", t[t.CheckAndUpdate = 3] = "CheckAndUpdate", t[t.CheckAndUpdateProjectedViews = 4] = "CheckAndUpdateProjectedViews", t[t.Destroy = 5] = "Destroy", t
            }({});

            function zs(t, e) {
                var n = t.def;
                if (33554432 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var o = n.nodes[r];
                        33554432 & o.flags ? qs(Ia(t, r).componentView, e) : 0 == (33554432 & o.childFlags) && (r += o.childCount)
                    }
            }

            function Bs(t, e) {
                var n = t.def;
                if (16777216 & n.nodeFlags)
                    for (var r = 0; r < n.nodes.length; r++) {
                        var o = n.nodes[r];
                        if (16777216 & o.flags)
                            for (var i = Ia(t, r).viewContainer._embeddedViews, a = 0; a < i.length; a++) qs(i[a], e);
                        else 0 == (16777216 & o.childFlags) && (r += o.childCount)
                    }
            }

            function qs(t, e) {
                var n = t.state;
                switch (e) {
                    case Fs.CheckNoChanges:
                        0 == (128 & n) && (12 == (12 & n) ? Ds(t) : 64 & n && Zs(t, Fs.CheckNoChangesProjectedViews));
                        break;
                    case Fs.CheckNoChangesProjectedViews:
                        0 == (128 & n) && (32 & n ? Ds(t) : 64 & n && Zs(t, e));
                        break;
                    case Fs.CheckAndUpdate:
                        0 == (128 & n) && (12 == (12 & n) ? js(t) : 64 & n && Zs(t, Fs.CheckAndUpdateProjectedViews));
                        break;
                    case Fs.CheckAndUpdateProjectedViews:
                        0 == (128 & n) && (32 & n ? js(t) : 64 & n && Zs(t, e));
                        break;
                    case Fs.Destroy:
                        Ls(t);
                        break;
                    case Fs.CreateViewNodes:
                        Ns(t)
                }
            }

            function Zs(t, e) {
                Bs(t, e), zs(t, e)
            }

            function Gs(t, e, n, r) {
                if (t.def.nodeFlags & e && t.def.nodeFlags & n)
                    for (var o = t.def.nodes.length, i = 0; i < o; i++) {
                        var a = t.def.nodes[i];
                        if (a.flags & e && a.flags & n) switch (Oa.setCurrentNode(t, a.nodeIndex), r) {
                            case 0:
                                ms(t, a);
                                break;
                            case 1:
                                Hs(t, a)
                        }
                        a.childFlags & e && a.childFlags & n || (i += a.childCount)
                    }
            }
            var Qs = !1;

            function Ws(t, e, n, r, o, i) {
                var a = o.injector.get(Jr);
                return Rs($s(t, o, a, e, n), r, i)
            }

            function Ks(t, e, n, r, o, i) {
                var a = o.injector.get(Jr),
                    u = $s(t, o, new Ic(a), e, n),
                    s = ac(r);
                return Tc(vc.create, Rs, null, [u, s, i])
            }

            function $s(t, e, n, r, o) {
                var i = e.injector.get(oo),
                    a = e.injector.get(Xo),
                    u = n.createRenderer(null, null);
                return {
                    ngModule: e,
                    injector: t,
                    projectableNodes: r,
                    selectorOrNode: o,
                    sanitizer: i,
                    rendererFactory: n,
                    renderer: u,
                    errorHandler: a
                }
            }

            function Xs(t, e, n, r) {
                var o = ac(n);
                return Tc(vc.create, Is, null, [t, e, o, r])
            }

            function Ys(t, e, n, r) {
                return n = nc.get(e.element.componentProvider.provider.token) || ac(n), Tc(vc.create, Ps, null, [t, e, n, r])
            }

            function Js(t, e, n, r) {
                return Qu(t, e, n, function(t) {
                    var e = function(t) {
                            var e = !1,
                                n = !1;
                            return 0 === tc.size ? {
                                hasOverrides: e,
                                hasDeprecatedOverrides: n
                            } : (t.providers.forEach(function(t) {
                                var r = tc.get(t.token);
                                3840 & t.flags && r && (e = !0, n = n || r.deprecatedBehavior)
                            }), t.modules.forEach(function(t) {
                                ec.forEach(function(r, o) {
                                    St(o).providedIn === t && (e = !0, n = n || r.deprecatedBehavior)
                                })
                            }), {
                                hasOverrides: e,
                                hasDeprecatedOverrides: n
                            })
                        }(t),
                        n = e.hasDeprecatedOverrides;
                    return e.hasOverrides ? (function(t) {
                        for (var e = 0; e < t.providers.length; e++) {
                            var r = t.providers[e];
                            n && (r.flags |= 4096);
                            var o = tc.get(r.token);
                            o && (r.flags = -3841 & r.flags | o.flags, r.deps = eu(o.deps), r.value = o.value)
                        }
                        if (ec.size > 0) {
                            var i = new Set(t.modules);
                            ec.forEach(function(e, r) {
                                if (i.has(St(r).providedIn)) {
                                    var o = {
                                        token: r,
                                        flags: e.flags | (n ? 4096 : 0),
                                        deps: eu(e.deps),
                                        value: e.value,
                                        index: t.providers.length
                                    };
                                    t.providers.push(o), t.providersByKey[Va(r)] = o
                                }
                            })
                        }
                    }(t = t.factory(function() {
                        return Ma
                    })), t) : t
                }(r))
            }
            var tc = new Map,
                ec = new Map,
                nc = new Map;

            function rc(t) {
                var e;
                tc.set(t.token, t), "function" == typeof t.token && (e = St(t.token)) && "function" == typeof e.providedIn && ec.set(t.token, t)
            }

            function oc(t, e) {
                var n = ou(e.viewDefFactory),
                    r = ou(n.nodes[0].element.componentView);
                nc.set(t, r)
            }

            function ic() {
                tc.clear(), ec.clear(), nc.clear()
            }

            function ac(t) {
                if (0 === tc.size) return t;
                var e = function(t) {
                    for (var e = [], n = null, r = 0; r < t.nodes.length; r++) {
                        var o = t.nodes[r];
                        1 & o.flags && (n = o), n && 3840 & o.flags && tc.has(o.provider.token) && (e.push(n.nodeIndex), n = null)
                    }
                    return e
                }(t);
                if (0 === e.length) return t;
                t = t.factory(function() {
                    return Ma
                });
                for (var n = 0; n < e.length; n++) r(t, e[n]);
                return t;

                function r(t, e) {
                    for (var n = e + 1; n < t.nodes.length; n++) {
                        var r = t.nodes[n];
                        if (1 & r.flags) return;
                        if (3840 & r.flags) {
                            var o = r.provider,
                                i = tc.get(o.token);
                            i && (r.flags = -3841 & r.flags | i.flags, o.deps = eu(i.deps), o.value = i.value)
                        }
                    }
                }
            }

            function uc(t, e, n, r, o, i, a, u, s, c, l, f, p) {
                var h = t.def.nodes[e];
                return Ms(t, h, n, r, o, i, a, u, s, c, l, f, p), 224 & h.flags ? Pa(t, e).value : void 0
            }

            function sc(t, e, n, r, o, i, a, u, s, c, l, f, p) {
                var h = t.def.nodes[e];
                return Vs(t, h, n, r, o, i, a, u, s, c, l, f, p), 224 & h.flags ? Pa(t, e).value : void 0
            }

            function cc(t) {
                return Tc(vc.detectChanges, js, null, [t])
            }

            function lc(t) {
                return Tc(vc.checkNoChanges, Ds, null, [t])
            }

            function fc(t) {
                return Tc(vc.destroy, Ls, null, [t])
            }
            var pc, hc, dc, vc = function(t) {
                return t[t.create = 0] = "create", t[t.detectChanges = 1] = "detectChanges", t[t.checkNoChanges = 2] = "checkNoChanges", t[t.destroy = 3] = "destroy", t[t.handleEvent = 4] = "handleEvent", t
            }({});

            function gc(t, e) {
                hc = t, dc = e
            }

            function yc(t, e, n, r) {
                return gc(t, e), Tc(vc.handleEvent, t.def.handleEvent, null, [t, e, n, r])
            }

            function mc(t, e) {
                if (128 & t.state) throw ja(vc[pc]);
                return gc(t, Cc(t, 0)), t.def.updateDirectives(function(t, n, r) {
                    for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                    var a = t.def.nodes[n];
                    return 0 === e ? bc(t, a, r, o) : _c(t, a, r, o), 16384 & a.flags && gc(t, Cc(t, n)), 224 & a.flags ? Pa(t, a.nodeIndex).value : void 0
                }, t)
            }

            function wc(t, e) {
                if (128 & t.state) throw ja(vc[pc]);
                return gc(t, xc(t, 0)), t.def.updateRenderer(function(t, n, r) {
                    for (var o = [], i = 3; i < arguments.length; i++) o[i - 3] = arguments[i];
                    var a = t.def.nodes[n];
                    return 0 === e ? bc(t, a, r, o) : _c(t, a, r, o), 3 & a.flags && gc(t, xc(t, n)), 224 & a.flags ? Pa(t, a.nodeIndex).value : void 0
                }, t)
            }

            function bc(t, e, n, r) {
                if (Ms.apply(void 0, l([t, e, n], r))) {
                    var o = 1 === n ? r[0] : r;
                    if (16384 & e.flags) {
                        for (var i = {}, a = 0; a < e.bindings.length; a++) {
                            var u = e.bindings[a],
                                s = o[a];
                            8 & u.flags && (i[(h = u.nonMinifiedName, "ng-reflect-" + h.replace(/[$@]/g, "_").replace(xn, function() {
                                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                return "-" + t[1].toLowerCase()
                            }))] = Sn(s))
                        }
                        var c = e.parent,
                            f = Ia(t, c.nodeIndex).renderElement;
                        if (c.element.name)
                            for (var p in i) null != (s = i[p]) ? t.renderer.setAttribute(f, p, s) : t.renderer.removeAttribute(f, p);
                        else t.renderer.setValue(f, "bindings=" + JSON.stringify(i, null, 2))
                    }
                }
                var h
            }

            function _c(t, e, n, r) {
                Vs.apply(void 0, l([t, e, n], r))
            }

            function Cc(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (16384 & r.flags && r.bindings && r.bindings.length) return n
                }
                return null
            }

            function xc(t, e) {
                for (var n = e; n < t.def.nodes.length; n++) {
                    var r = t.def.nodes[n];
                    if (3 & r.flags && r.bindings && r.bindings.length) return n
                }
                return null
            }
            var Sc = function() {
                function t(t, e) {
                    this.view = t, this.nodeIndex = e, null == e && (this.nodeIndex = e = 0), this.nodeDef = t.def.nodes[e];
                    for (var n = this.nodeDef, r = t; n && 0 == (1 & n.flags);) n = n.parent;
                    if (!n)
                        for (; !n && r;) n = $a(r), r = r.parent;
                    this.elDef = n, this.elView = r
                }
                return Object.defineProperty(t.prototype, "elOrCompView", {
                    get: function() {
                        return Ia(this.elView, this.elDef.nodeIndex).componentView || this.view
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "injector", {
                    get: function() {
                        return Bu(this.elView, this.elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "component", {
                    get: function() {
                        return this.elOrCompView.component
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "context", {
                    get: function() {
                        return this.elOrCompView.context
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "providerTokens", {
                    get: function() {
                        var t = [];
                        if (this.elDef)
                            for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                var n = this.elView.def.nodes[e];
                                20224 & n.flags && t.push(n.provider.token), e += n.childCount
                            }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "references", {
                    get: function() {
                        var t = {};
                        if (this.elDef) {
                            Ec(this.elView, this.elDef, t);
                            for (var e = this.elDef.nodeIndex + 1; e <= this.elDef.nodeIndex + this.elDef.childCount; e++) {
                                var n = this.elView.def.nodes[e];
                                20224 & n.flags && Ec(this.elView, n, t), e += n.childCount
                            }
                        }
                        return t
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "componentRenderElement", {
                    get: function() {
                        var t = function(t) {
                            for (; t && !Ya(t);) t = t.parent;
                            return t.parent ? Ia(t.parent, $a(t).nodeIndex) : null
                        }(this.elOrCompView);
                        return t ? t.renderElement : void 0
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "renderNode", {
                    get: function() {
                        return 2 & this.nodeDef.flags ? Xa(this.view, this.nodeDef) : Xa(this.elView, this.elDef)
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.logError = function(t) {
                    for (var e, n, r = [], o = 1; o < arguments.length; o++) r[o - 1] = arguments[o];
                    2 & this.nodeDef.flags ? (e = this.view.def, n = this.nodeDef.nodeIndex) : (e = this.elView.def, n = this.elDef.nodeIndex);
                    var i = function(t, e) {
                            for (var n = -1, r = 0; r <= e; r++) 3 & t.nodes[r].flags && n++;
                            return n
                        }(e, n),
                        a = -1;
                    e.factory(function() {
                        var e;
                        return ++a === i ? (e = t.error).bind.apply(e, l([t], r)) : Ma
                    }), a < i && (t.error("Illegal state: the ViewDefinitionFactory did not call the logger!"), t.error.apply(t, l(r)))
                }, t
            }();

            function Ec(t, e, n) {
                for (var r in e.references) n[r] = bs(t, e, e.references[r])
            }

            function Tc(t, e, n, r) {
                var o = pc,
                    i = hc,
                    a = dc;
                try {
                    pc = t;
                    var u = e.apply(n, r);
                    return hc = i, dc = a, pc = o, u
                } catch (s) {
                    if (Wo(s) || !hc) throw s;
                    throw function(t, e) {
                        return t instanceof Error || (t = new Error(t.toString())), Da(t, e), t
                    }(s, kc())
                }
            }

            function kc() {
                return hc ? new Sc(hc, dc) : null
            }
            var Ic = function() {
                    function t(t) {
                        this.delegate = t
                    }
                    return t.prototype.createRenderer = function(t, e) {
                        return new Rc(this.delegate.createRenderer(t, e))
                    }, t.prototype.begin = function() {
                        this.delegate.begin && this.delegate.begin()
                    }, t.prototype.end = function() {
                        this.delegate.end && this.delegate.end()
                    }, t.prototype.whenRenderingDone = function() {
                        return this.delegate.whenRenderingDone ? this.delegate.whenRenderingDone() : Promise.resolve(null)
                    }, t
                }(),
                Rc = function() {
                    function t(t) {
                        this.delegate = t, this.debugContextFactory = kc, this.data = this.delegate.data
                    }
                    return t.prototype.createDebugContext = function(t) {
                        return this.debugContextFactory(t)
                    }, t.prototype.destroyNode = function(t) {
                        ! function(t) {
                            ea.delete(t.nativeNode)
                        }(na(t)), this.delegate.destroyNode && this.delegate.destroyNode(t)
                    }, t.prototype.destroy = function() {
                        this.delegate.destroy()
                    }, t.prototype.createElement = function(t, e) {
                        var n = this.delegate.createElement(t, e),
                            r = this.createDebugContext(n);
                        if (r) {
                            var o = new ta(n, null, r);
                            o.name = t, ra(o)
                        }
                        return n
                    }, t.prototype.createComment = function(t) {
                        var e = this.delegate.createComment(t),
                            n = this.createDebugContext(e);
                        return n && ra(new Ji(e, null, n)), e
                    }, t.prototype.createText = function(t) {
                        var e = this.delegate.createText(t),
                            n = this.createDebugContext(e);
                        return n && ra(new Ji(e, null, n)), e
                    }, t.prototype.appendChild = function(t, e) {
                        var n = na(t),
                            r = na(e);
                        n && r && n instanceof ta && n.addChild(r), this.delegate.appendChild(t, e)
                    }, t.prototype.insertBefore = function(t, e, n) {
                        var r = na(t),
                            o = na(e),
                            i = na(n);
                        r && o && r instanceof ta && r.insertBefore(i, o), this.delegate.insertBefore(t, e, n)
                    }, t.prototype.removeChild = function(t, e) {
                        var n = na(t),
                            r = na(e);
                        n && r && n instanceof ta && n.removeChild(r), this.delegate.removeChild(t, e)
                    }, t.prototype.selectRootElement = function(t, e) {
                        var n = this.delegate.selectRootElement(t, e),
                            r = kc();
                        return r && ra(new ta(n, null, r)), n
                    }, t.prototype.setAttribute = function(t, e, n, r) {
                        var o = na(t);
                        o && o instanceof ta && (o.attributes[r ? r + ":" + e : e] = n), this.delegate.setAttribute(t, e, n, r)
                    }, t.prototype.removeAttribute = function(t, e, n) {
                        var r = na(t);
                        r && r instanceof ta && (r.attributes[n ? n + ":" + e : e] = null), this.delegate.removeAttribute(t, e, n)
                    }, t.prototype.addClass = function(t, e) {
                        var n = na(t);
                        n && n instanceof ta && (n.classes[e] = !0), this.delegate.addClass(t, e)
                    }, t.prototype.removeClass = function(t, e) {
                        var n = na(t);
                        n && n instanceof ta && (n.classes[e] = !1), this.delegate.removeClass(t, e)
                    }, t.prototype.setStyle = function(t, e, n, r) {
                        var o = na(t);
                        o && o instanceof ta && (o.styles[e] = n), this.delegate.setStyle(t, e, n, r)
                    }, t.prototype.removeStyle = function(t, e, n) {
                        var r = na(t);
                        r && r instanceof ta && (r.styles[e] = null), this.delegate.removeStyle(t, e, n)
                    }, t.prototype.setProperty = function(t, e, n) {
                        var r = na(t);
                        r && r instanceof ta && (r.properties[e] = n), this.delegate.setProperty(t, e, n)
                    }, t.prototype.listen = function(t, e, n) {
                        if ("string" != typeof t) {
                            var r = na(t);
                            r && r.listeners.push(new Yi(e, n))
                        }
                        return this.delegate.listen(t, e, n)
                    }, t.prototype.parentNode = function(t) {
                        return this.delegate.parentNode(t)
                    }, t.prototype.nextSibling = function(t) {
                        return this.delegate.nextSibling(t)
                    }, t.prototype.setValue = function(t, e) {
                        return this.delegate.setValue(t, e)
                    }, t
                }();

            function Pc(t, e, n) {
                return new Ac(t, e, n)
            }
            var Ac = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.moduleType = e, o._bootstrapComponents = n, o._ngModuleDefFactory = r, o
                    }
                    return o(e, t), e.prototype.create = function(t) {
                        ! function() {
                            if (!Qs) {
                                Qs = !0;
                                var t = go() ? {
                                    setCurrentNode: gc,
                                    createRootView: Ks,
                                    createEmbeddedView: Xs,
                                    createComponentView: Ys,
                                    createNgModuleRef: Js,
                                    overrideProvider: rc,
                                    overrideComponentView: oc,
                                    clearOverrides: ic,
                                    checkAndUpdateView: cc,
                                    checkNoChangesView: lc,
                                    destroyView: fc,
                                    createDebugContext: function(t, e) {
                                        return new Sc(t, e)
                                    },
                                    handleEvent: yc,
                                    updateDirectives: mc,
                                    updateRenderer: wc
                                } : {
                                    setCurrentNode: function() {},
                                    createRootView: Ws,
                                    createEmbeddedView: Is,
                                    createComponentView: Ps,
                                    createNgModuleRef: Qu,
                                    overrideProvider: Ma,
                                    overrideComponentView: Ma,
                                    clearOverrides: Ma,
                                    checkAndUpdateView: js,
                                    checkNoChangesView: Ds,
                                    destroyView: Ls,
                                    createDebugContext: function(t, e) {
                                        return new Sc(t, e)
                                    },
                                    handleEvent: function(t, e, n, r) {
                                        return t.def.handleEvent(t, e, n, r)
                                    },
                                    updateDirectives: function(t, e) {
                                        return t.def.updateDirectives(0 === e ? uc : sc, t)
                                    },
                                    updateRenderer: function(t, e) {
                                        return t.def.updateRenderer(0 === e ? uc : sc, t)
                                    }
                                };
                                Oa.setCurrentNode = t.setCurrentNode, Oa.createRootView = t.createRootView, Oa.createEmbeddedView = t.createEmbeddedView, Oa.createComponentView = t.createComponentView, Oa.createNgModuleRef = t.createNgModuleRef, Oa.overrideProvider = t.overrideProvider, Oa.overrideComponentView = t.overrideComponentView, Oa.clearOverrides = t.clearOverrides, Oa.checkAndUpdateView = t.checkAndUpdateView, Oa.checkNoChangesView = t.checkNoChangesView, Oa.destroyView = t.destroyView, Oa.resolveDep = fs, Oa.createDebugContext = t.createDebugContext, Oa.handleEvent = t.handleEvent, Oa.updateDirectives = t.updateDirectives, Oa.updateRenderer = t.updateRenderer, Oa.dirtyParentQueries = ys
                            }
                        }();
                        var e = function(t) {
                            var e = Array.from(t.providers),
                                n = Array.from(t.modules),
                                r = {};
                            for (var o in t.providersByKey) r[o] = t.providersByKey[o];
                            return {
                                factory: t.factory,
                                isRoot: t.isRoot,
                                providers: e,
                                modules: n,
                                providersByKey: r
                            }
                        }(ou(this._ngModuleDefFactory));
                        return Oa.createNgModuleRef(this.moduleType, t || pr.NULL, this._bootstrapComponents, e)
                    }, e
                }(Wr),
                Oc = function() {
                    return function() {}
                }(),
                Nc = function() {
                    return function() {
                        this.title = "ticTacToe"
                    }
                }(),
                Dc = function() {
                    return function() {}
                }(),
                jc = new Tt("Location Initialized"),
                Mc = function() {
                    return function() {}
                }(),
                Uc = new Tt("appBaseHref"),
                Vc = function() {
                    function t(t) {
                        var n = this;
                        this._subject = new Ho, this._platformStrategy = t;
                        var r = this._platformStrategy.getBaseHref();
                        this._baseHref = e.stripTrailingSlash(Hc(r)), this._platformStrategy.onPopState(function(t) {
                            n._subject.emit({
                                url: n.path(!0),
                                pop: !0,
                                state: t.state,
                                type: t.type
                            })
                        })
                    }
                    var e;
                    return e = t, t.prototype.path = function(t) {
                        return void 0 === t && (t = !1), this.normalize(this._platformStrategy.path(t))
                    }, t.prototype.isCurrentPathEqualTo = function(t, n) {
                        return void 0 === n && (n = ""), this.path() == this.normalize(t + e.normalizeQueryParams(n))
                    }, t.prototype.normalize = function(t) {
                        return e.stripTrailingSlash(function(t, e) {
                            return t && e.startsWith(t) ? e.substring(t.length) : e
                        }(this._baseHref, Hc(t)))
                    }, t.prototype.prepareExternalUrl = function(t) {
                        return t && "/" !== t[0] && (t = "/" + t), this._platformStrategy.prepareExternalUrl(t)
                    }, t.prototype.go = function(t, e, n) {
                        void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.pushState(n, "", t, e)
                    }, t.prototype.replaceState = function(t, e, n) {
                        void 0 === e && (e = ""), void 0 === n && (n = null), this._platformStrategy.replaceState(n, "", t, e)
                    }, t.prototype.forward = function() {
                        this._platformStrategy.forward()
                    }, t.prototype.back = function() {
                        this._platformStrategy.back()
                    }, t.prototype.subscribe = function(t, e, n) {
                        return this._subject.subscribe({
                            next: t,
                            error: e,
                            complete: n
                        })
                    }, t.normalizeQueryParams = function(t) {
                        return t && "?" !== t[0] ? "?" + t : t
                    }, t.joinWithSlash = function(t, e) {
                        if (0 == t.length) return e;
                        if (0 == e.length) return t;
                        var n = 0;
                        return t.endsWith("/") && n++, e.startsWith("/") && n++, 2 == n ? t + e.substring(1) : 1 == n ? t + e : t + "/" + e
                    }, t.stripTrailingSlash = function(t) {
                        var e = t.match(/#|\?|$/),
                            n = e && e.index || t.length;
                        return t.slice(0, n - ("/" === t[n - 1] ? 1 : 0)) + t.slice(n)
                    }, t
                }();

            function Hc(t) {
                return t.replace(/\/index.html$/, "")
            }
            var Lc = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r._platformLocation = e, r._baseHref = "", null != n && (r._baseHref = n), r
                    }
                    return o(e, t), e.prototype.onPopState = function(t) {
                        this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                    }, e.prototype.getBaseHref = function() {
                        return this._baseHref
                    }, e.prototype.path = function(t) {
                        void 0 === t && (t = !1);
                        var e = this._platformLocation.hash;
                        return null == e && (e = "#"), e.length > 0 ? e.substring(1) : e
                    }, e.prototype.prepareExternalUrl = function(t) {
                        var e = Vc.joinWithSlash(this._baseHref, t);
                        return e.length > 0 ? "#" + e : e
                    }, e.prototype.pushState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Vc.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.pushState(t, e, o)
                    }, e.prototype.replaceState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Vc.normalizeQueryParams(r));
                        0 == o.length && (o = this._platformLocation.pathname), this._platformLocation.replaceState(t, e, o)
                    }, e.prototype.forward = function() {
                        this._platformLocation.forward()
                    }, e.prototype.back = function() {
                        this._platformLocation.back()
                    }, e
                }(Mc),
                Fc = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        if (r._platformLocation = e, null == n && (n = r._platformLocation.getBaseHrefFromDOM()), null == n) throw new Error("No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document.");
                        return r._baseHref = n, r
                    }
                    return o(e, t), e.prototype.onPopState = function(t) {
                        this._platformLocation.onPopState(t), this._platformLocation.onHashChange(t)
                    }, e.prototype.getBaseHref = function() {
                        return this._baseHref
                    }, e.prototype.prepareExternalUrl = function(t) {
                        return Vc.joinWithSlash(this._baseHref, t)
                    }, e.prototype.path = function(t) {
                        void 0 === t && (t = !1);
                        var e = this._platformLocation.pathname + Vc.normalizeQueryParams(this._platformLocation.search),
                            n = this._platformLocation.hash;
                        return n && t ? "" + e + n : e
                    }, e.prototype.pushState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Vc.normalizeQueryParams(r));
                        this._platformLocation.pushState(t, e, o)
                    }, e.prototype.replaceState = function(t, e, n, r) {
                        var o = this.prepareExternalUrl(n + Vc.normalizeQueryParams(r));
                        this._platformLocation.replaceState(t, e, o)
                    }, e.prototype.forward = function() {
                        this._platformLocation.forward()
                    }, e.prototype.back = function() {
                        this._platformLocation.back()
                    }, e
                }(Mc),
                zc = void 0,
                Bc = ["en", [
                        ["a", "p"],
                        ["AM", "PM"], zc
                    ],
                    [
                        ["AM", "PM"], zc, zc
                    ],
                    [
                        ["S", "M", "T", "W", "T", "F", "S"],
                        ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                        ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
                    ], zc, [
                        ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
                        ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                        ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
                    ], zc, [
                        ["B", "A"],
                        ["BC", "AD"],
                        ["Before Christ", "Anno Domini"]
                    ], 0, [6, 0],
                    ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
                    ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
                    ["{1}, {0}", zc, "{1} 'at' {0}", zc],
                    [".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
                    ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "$", "US Dollar", {},
                    function(t) {
                        var e = Math.floor(Math.abs(t)),
                            n = t.toString().replace(/^[^.]*\.?/, "").length;
                        return 1 === e && 0 === n ? 1 : 5
                    }
                ],
                qc = {},
                Zc = function(t) {
                    return t[t.Zero = 0] = "Zero", t[t.One = 1] = "One", t[t.Two = 2] = "Two", t[t.Few = 3] = "Few", t[t.Many = 4] = "Many", t[t.Other = 5] = "Other", t
                }({}),
                Gc = new Tt("UseV4Plurals"),
                Qc = function() {
                    return function() {}
                }(),
                Wc = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.locale = e, r.deprecatedPluralFn = n, r
                    }
                    return o(e, t), e.prototype.getPluralCategory = function(t, e) {
                        switch (this.deprecatedPluralFn ? this.deprecatedPluralFn(e || this.locale, t) : function(t) {
                            return function(t) {
                                var e = t.toLowerCase().replace(/_/g, "-"),
                                    n = qc[e];
                                if (n) return n;
                                var r = e.split("-")[0];
                                if (n = qc[r]) return n;
                                if ("en" === r) return Bc;
                                throw new Error('Missing locale data for the locale "' + t + '".')
                            }(t)[18]
                        }(e || this.locale)(t)) {
                            case Zc.Zero:
                                return "zero";
                            case Zc.One:
                                return "one";
                            case Zc.Two:
                                return "two";
                            case Zc.Few:
                                return "few";
                            case Zc.Many:
                                return "many";
                            default:
                                return "other"
                        }
                    }, e
                }(Qc),
                Kc = function() {
                    function t(t, e, n, r) {
                        this.$implicit = t, this.ngForOf = e, this.index = n, this.count = r
                    }
                    return Object.defineProperty(t.prototype, "first", {
                        get: function() {
                            return 0 === this.index
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "last", {
                        get: function() {
                            return this.index === this.count - 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "even", {
                        get: function() {
                            return this.index % 2 == 0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "odd", {
                        get: function() {
                            return !this.even
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                $c = function() {
                    function t(t, e, n) {
                        this._viewContainer = t, this._template = e, this._differs = n, this._ngForOfDirty = !0, this._differ = null
                    }
                    return Object.defineProperty(t.prototype, "ngForOf", {
                        set: function(t) {
                            this._ngForOf = t, this._ngForOfDirty = !0
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngForTrackBy", {
                        get: function() {
                            return this._trackByFn
                        },
                        set: function(t) {
                            go() && null != t && "function" != typeof t && console && console.warn && console.warn("trackBy must be a function, but received " + JSON.stringify(t) + ". See https://angular.io/docs/ts/latest/api/common/index/NgFor-directive.html#!#change-propagation for more information."), this._trackByFn = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngForTemplate", {
                        set: function(t) {
                            t && (this._template = t)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.ngDoCheck = function() {
                        if (this._ngForOfDirty) {
                            this._ngForOfDirty = !1;
                            var t = this._ngForOf;
                            if (!this._differ && t) try {
                                this._differ = this._differs.find(t).create(this.ngForTrackBy)
                            } catch (r) {
                                throw new Error("Cannot find a differ supporting object '" + t + "' of type '" + ((e = t).name || typeof e) + "'. NgFor only supports binding to Iterables such as Arrays.")
                            }
                        }
                        var e;
                        if (this._differ) {
                            var n = this._differ.diff(this._ngForOf);
                            n && this._applyChanges(n)
                        }
                    }, t.prototype._applyChanges = function(t) {
                        var e = this,
                            n = [];
                        t.forEachOperation(function(t, r, o) {
                            if (null == t.previousIndex) {
                                var i = e._viewContainer.createEmbeddedView(e._template, new Kc(null, e._ngForOf, -1, -1), o),
                                    a = new Xc(t, i);
                                n.push(a)
                            } else null == o ? e._viewContainer.remove(r) : (i = e._viewContainer.get(r), e._viewContainer.move(i, o), a = new Xc(t, i), n.push(a))
                        });
                        for (var r = 0; r < n.length; r++) this._perViewChange(n[r].view, n[r].record);
                        r = 0;
                        for (var o = this._viewContainer.length; r < o; r++) {
                            var i = this._viewContainer.get(r);
                            i.context.index = r, i.context.count = o, i.context.ngForOf = this._ngForOf
                        }
                        t.forEachIdentityChange(function(t) {
                            e._viewContainer.get(t.currentIndex).context.$implicit = t.item
                        })
                    }, t.prototype._perViewChange = function(t, e) {
                        t.context.$implicit = e.item
                    }, t.ngTemplateContextGuard = function(t, e) {
                        return !0
                    }, t
                }(),
                Xc = function() {
                    return function(t, e) {
                        this.record = t, this.view = e
                    }
                }(),
                Yc = function() {
                    function t(t, e) {
                        this._viewContainer = t, this._context = new Jc, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = e
                    }
                    return Object.defineProperty(t.prototype, "ngIf", {
                        set: function(t) {
                            this._context.$implicit = this._context.ngIf = t, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngIfThen", {
                        set: function(t) {
                            tl("ngIfThen", t), this._thenTemplateRef = t, this._thenViewRef = null, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ngIfElse", {
                        set: function(t) {
                            tl("ngIfElse", t), this._elseTemplateRef = t, this._elseViewRef = null, this._updateView()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype._updateView = function() {
                        this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
                    }, t.ngTemplateGuard_ngIf = function(t, e) {
                        return !0
                    }, t
                }(),
                Jc = function() {
                    return function() {
                        this.$implicit = null, this.ngIf = null
                    }
                }();

            function tl(t, e) {
                if (e && !e.createEmbeddedView) throw new Error(t + " must be a TemplateRef, but received '" + Vt(e) + "'.")
            }
            var el = function() {
                    return function() {}
                }(),
                nl = new Tt("DocumentToken"),
                rl = "server",
                ol = function() {
                    function t() {}
                    return t.ngInjectableDef = xt({
                        providedIn: "root",
                        factory: function() {
                            return new il(He(nl), window)
                        }
                    }), t
                }(),
                il = function() {
                    function t(t, e) {
                        this.document = t, this.window = e, this.offset = function() {
                            return [0, 0]
                        }
                    }
                    return t.prototype.setOffset = function(t) {
                        this.offset = Array.isArray(t) ? function() {
                            return t
                        } : t
                    }, t.prototype.getScrollPosition = function() {
                        return this.supportScrollRestoration() ? [this.window.scrollX, this.window.scrollY] : [0, 0]
                    }, t.prototype.scrollToPosition = function(t) {
                        this.supportScrollRestoration() && this.window.scrollTo(t[0], t[1])
                    }, t.prototype.scrollToAnchor = function(t) {
                        if (this.supportScrollRestoration()) {
                            var e = this.document.querySelector("#" + t);
                            if (e) return void this.scrollToElement(e);
                            var n = this.document.querySelector("[name='" + t + "']");
                            if (n) return void this.scrollToElement(n)
                        }
                    }, t.prototype.setHistoryScrollRestoration = function(t) {
                        if (this.supportScrollRestoration()) {
                            var e = this.window.history;
                            e && e.scrollRestoration && (e.scrollRestoration = t)
                        }
                    }, t.prototype.scrollToElement = function(t) {
                        var e = t.getBoundingClientRect(),
                            n = e.left + this.window.pageXOffset,
                            r = e.top + this.window.pageYOffset,
                            o = this.offset();
                        this.window.scrollTo(n - o[0], r - o[1])
                    }, t.prototype.supportScrollRestoration = function() {
                        try {
                            return !!this.window && !!this.window.scrollTo
                        } catch (t) {
                            return !1
                        }
                    }, t
                }(),
                al = new N(function(t) {
                    return t.complete()
                });

            function ul(t) {
                return t ? function(t) {
                    return new N(function(e) {
                        return t.schedule(function() {
                            return e.complete()
                        })
                    })
                }(t) : al
            }

            function sl(t) {
                var e = new N(function(e) {
                    e.next(t), e.complete()
                });
                return e._isScalar = !0, e.value = t, e
            }

            function cl() {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                var n = t[t.length - 1];
                switch (F(n) ? t.pop() : n = void 0, t.length) {
                    case 0:
                        return ul(n);
                    case 1:
                        return n ? rt(t, n) : sl(t[0]);
                    default:
                        return rt(t, n)
                }
            }
            var ll = function(t) {
                function e(e) {
                    var n = t.call(this) || this;
                    return n._value = e, n
                }
                return o(e, t), Object.defineProperty(e.prototype, "value", {
                    get: function() {
                        return this.getValue()
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype._subscribe = function(e) {
                    var n = t.prototype._subscribe.call(this, e);
                    return n && !n.closed && e.next(this._value), n
                }, e.prototype.getValue = function() {
                    if (this.hasError) throw this.thrownError;
                    if (this.closed) throw new M;
                    return this._value
                }, e.prototype.next = function(e) {
                    t.prototype.next.call(this, this._value = e)
                }, e
            }(H);

            function fl() {
                return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this
            }
            fl.prototype = Object.create(Error.prototype);
            var pl = fl,
                hl = {},
                dl = function() {
                    function t(t) {
                        this.resultSelector = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new vl(t, this.resultSelector))
                    }, t
                }(),
                vl = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.resultSelector = n, r.active = 0, r.values = [], r.observables = [], r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        this.values.push(hl), this.observables.push(t)
                    }, e.prototype._complete = function() {
                        var t = this.observables,
                            e = t.length;
                        if (0 === e) this.destination.complete();
                        else {
                            this.active = e, this.toRespond = e;
                            for (var n = 0; n < e; n++) {
                                var r = t[n];
                                this.add(Y(this, r, r, n))
                            }
                        }
                    }, e.prototype.notifyComplete = function(t) {
                        0 == (this.active -= 1) && this.destination.complete()
                    }, e.prototype.notifyNext = function(t, e, n, r, o) {
                        var i = this.values,
                            a = this.toRespond ? i[n] === hl ? --this.toRespond : this.toRespond : 0;
                        i[n] = e, 0 === a && (this.resultSelector ? this._tryResultSelector(i) : this.destination.next(i.slice()))
                    }, e.prototype._tryResultSelector = function(t) {
                        var e;
                        try {
                            e = this.resultSelector.apply(this, t)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        this.destination.next(e)
                    }, e
                }(J);

            function gl(t) {
                return new N(function(e) {
                    var n;
                    try {
                        n = t()
                    } catch (r) {
                        return void e.error(r)
                    }
                    return (n ? ot(n) : ul()).subscribe(e)
                })
            }

            function yl() {
                return ct(1)
            }

            function ml(t, e) {
                return function(n) {
                    return n.lift(new wl(t, e))
                }
            }
            var wl = function() {
                    function t(t, e) {
                        this.predicate = t, this.thisArg = e
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new bl(t, this.predicate, this.thisArg))
                    }, t
                }(),
                bl = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.predicate = n, o.thisArg = r, o.count = 0, o
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.count++)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        e && this.destination.next(t)
                    }, e
                }(k);

            function _l() {
                return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this
            }
            _l.prototype = Object.create(Error.prototype);
            var Cl = _l;

            function xl(t) {
                return function(e) {
                    return 0 === t ? ul() : e.lift(new Sl(t))
                }
            }
            var Sl = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new Cl
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new El(t, this.total))
                    }, t
                }(),
                El = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.ring = new Array, r.count = 0, r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e = this.ring,
                            n = this.total,
                            r = this.count++;
                        e.length < n ? e.push(t) : e[r % n] = t
                    }, e.prototype._complete = function() {
                        var t = this.destination,
                            e = this.count;
                        if (e > 0)
                            for (var n = this.count >= this.total ? this.total : this.count, r = this.ring, o = 0; o < n; o++) {
                                var i = e++ % n;
                                t.next(r[i])
                            }
                        t.complete()
                    }, e
                }(k);

            function Tl(t, e, n) {
                return function(r) {
                    return r.lift(new kl(t, e, n))
                }
            }
            var kl = function() {
                    function t(t, e, n) {
                        this.nextOrObserver = t, this.error = e, this.complete = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Il(t, this.nextOrObserver, this.error, this.complete))
                    }, t
                }(),
                Il = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i._tapNext = P, i._tapError = P, i._tapComplete = P, i._tapError = r || P, i._tapComplete = o || P, h(n) ? (i._context = i, i._tapNext = n) : n && (i._context = n, i._tapNext = n.next || P, i._tapError = n.error || P, i._tapComplete = n.complete || P), i
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        try {
                            this._tapNext.call(this._context, t)
                        } catch (e) {
                            return void this.destination.error(e)
                        }
                        this.destination.next(t)
                    }, e.prototype._error = function(t) {
                        try {
                            this._tapError.call(this._context, t)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        this.destination.error(t)
                    }, e.prototype._complete = function() {
                        try {
                            this._tapComplete.call(this._context)
                        } catch (t) {
                            return void this.destination.error(t)
                        }
                        return this.destination.complete()
                    }, e
                }(k),
                Rl = function(t) {
                    return void 0 === t && (t = Pl), Tl({
                        hasValue: !1,
                        next: function() {
                            this.hasValue = !0
                        },
                        complete: function() {
                            if (!this.hasValue) throw t()
                        }
                    })
                };

            function Pl() {
                return new pl
            }

            function Al(t) {
                return void 0 === t && (t = null),
                    function(e) {
                        return e.lift(new Ol(t))
                    }
            }
            var Ol = function() {
                    function t(t) {
                        this.defaultValue = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Nl(t, this.defaultValue))
                    }, t
                }(),
                Nl = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.defaultValue = n, r.isEmpty = !0, r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        this.isEmpty = !1, this.destination.next(t)
                    }, e.prototype._complete = function() {
                        this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete()
                    }, e
                }(k);

            function Dl(t, e) {
                var n = arguments.length >= 2;
                return function(r) {
                    return r.pipe(t ? ml(function(e, n) {
                        return t(e, n, r)
                    }) : st, xl(1), n ? Al(e) : Rl(function() {
                        return new pl
                    }))
                }
            }

            function jl(t) {
                return function(e) {
                    var n = new Ml(t),
                        r = e.lift(n);
                    return n.caught = r
                }
            }
            var Ml = function() {
                    function t(t) {
                        this.selector = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Ul(t, this.selector, this.caught))
                    }, t
                }(),
                Ul = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.selector = n, o.caught = r, o
                    }
                    return o(e, t), e.prototype.error = function(e) {
                        if (!this.isStopped) {
                            var n = void 0;
                            try {
                                n = this.selector(e, this.caught)
                            } catch (o) {
                                return void t.prototype.error.call(this, o)
                            }
                            this._unsubscribeAndRecycle();
                            var r = new z(this, void 0, void 0);
                            this.add(r), Y(this, n, void 0, void 0, r)
                        }
                    }, e
                }(J);

            function Vl(t) {
                return function(e) {
                    return 0 === t ? ul() : e.lift(new Hl(t))
                }
            }
            var Hl = function() {
                    function t(t) {
                        if (this.total = t, this.total < 0) throw new Cl
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Ll(t, this.total))
                    }, t
                }(),
                Ll = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.total = n, r.count = 0, r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e = this.total,
                            n = ++this.count;
                        n <= e && (this.destination.next(t), n === e && (this.destination.complete(), this.unsubscribe()))
                    }, e
                }(k);

            function Fl(t, e) {
                var n = arguments.length >= 2;
                return function(r) {
                    return r.pipe(t ? ml(function(e, n) {
                        return t(e, n, r)
                    }) : st, Vl(1), n ? Al(e) : Rl(function() {
                        return new pl
                    }))
                }
            }
            var zl = function() {
                    function t(t, e, n) {
                        this.predicate = t, this.thisArg = e, this.source = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Bl(t, this.predicate, this.thisArg, this.source))
                    }, t
                }(),
                Bl = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i.predicate = n, i.thisArg = r, i.source = o, i.index = 0, i.thisArg = r || i, i
                    }
                    return o(e, t), e.prototype.notifyComplete = function(t) {
                        this.destination.next(t), this.destination.complete()
                    }, e.prototype._next = function(t) {
                        var e = !1;
                        try {
                            e = this.predicate.call(this.thisArg, t, this.index++, this.source)
                        } catch (n) {
                            return void this.destination.error(n)
                        }
                        e || this.notifyComplete(!1)
                    }, e.prototype._complete = function() {
                        this.notifyComplete(!0)
                    }, e
                }(k);

            function ql(t, e) {
                return "function" == typeof e ? function(n) {
                    return n.pipe(ql(function(n, r) {
                        return ot(t(n, r)).pipe(tt(function(t, o) {
                            return e(n, t, r, o)
                        }))
                    }))
                } : function(e) {
                    return e.lift(new Zl(t))
                }
            }
            var Zl = function() {
                    function t(t) {
                        this.project = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Gl(t, this.project))
                    }, t
                }(),
                Gl = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.project = n, r.index = 0, r
                    }
                    return o(e, t), e.prototype._next = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.project(t, n)
                        } catch (r) {
                            return void this.destination.error(r)
                        }
                        this._innerSub(e, t, n)
                    }, e.prototype._innerSub = function(t, e, n) {
                        var r = this.innerSubscription;
                        r && r.unsubscribe();
                        var o = new z(this, void 0, void 0);
                        this.destination.add(o), this.innerSubscription = Y(this, t, e, n, o)
                    }, e.prototype._complete = function() {
                        var e = this.innerSubscription;
                        e && !e.closed || t.prototype._complete.call(this), this.unsubscribe()
                    }, e.prototype._unsubscribe = function() {
                        this.innerSubscription = null
                    }, e.prototype.notifyComplete = function(e) {
                        this.destination.remove(e), this.innerSubscription = null, this.isStopped && t.prototype._complete.call(this)
                    }, e.prototype.notifyNext = function(t, e, n, r, o) {
                        this.destination.next(e)
                    }, e
                }(J);

            function Ql(t, e) {
                var n = !1;
                return arguments.length >= 2 && (n = !0),
                    function(r) {
                        return r.lift(new Wl(t, e, n))
                    }
            }
            var Wl = function() {
                    function t(t, e, n) {
                        void 0 === n && (n = !1), this.accumulator = t, this.seed = e, this.hasSeed = n
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Kl(t, this.accumulator, this.seed, this.hasSeed))
                    }, t
                }(),
                Kl = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i.accumulator = n, i._seed = r, i.hasSeed = o, i.index = 0, i
                    }
                    return o(e, t), Object.defineProperty(e.prototype, "seed", {
                        get: function() {
                            return this._seed
                        },
                        set: function(t) {
                            this.hasSeed = !0, this._seed = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype._next = function(t) {
                        if (this.hasSeed) return this._tryNext(t);
                        this.seed = t, this.destination.next(t)
                    }, e.prototype._tryNext = function(t) {
                        var e, n = this.index++;
                        try {
                            e = this.accumulator(this.seed, t, n)
                        } catch (r) {
                            this.destination.error(r)
                        }
                        this.seed = e, this.destination.next(e)
                    }, e
                }(k);

            function $l(t, e) {
                return it(t, e, 1)
            }
            var Xl = function() {
                    function t(t) {
                        this.callback = t
                    }
                    return t.prototype.call = function(t, e) {
                        return e.subscribe(new Yl(t, this.callback))
                    }, t
                }(),
                Yl = function(t) {
                    function e(e, n) {
                        var r = t.call(this, e) || this;
                        return r.add(new b(n)), r
                    }
                    return o(e, t), e
                }(k),
                Jl = null;

            function tf() {
                return Jl
            }
            var ef, nf = {
                    class: "className",
                    innerHtml: "innerHTML",
                    readonly: "readOnly",
                    tabindex: "tabIndex"
                },
                rf = {
                    "\b": "Backspace",
                    "\t": "Tab",
                    "\x7f": "Delete",
                    "\x1b": "Escape",
                    Del: "Delete",
                    Esc: "Escape",
                    Left: "ArrowLeft",
                    Right: "ArrowRight",
                    Up: "ArrowUp",
                    Down: "ArrowDown",
                    Menu: "ContextMenu",
                    Scroll: "ScrollLock",
                    Win: "OS"
                },
                of = {
                    A: "1",
                    B: "2",
                    C: "3",
                    D: "4",
                    E: "5",
                    F: "6",
                    G: "7",
                    H: "8",
                    I: "9",
                    J: "*",
                    K: "+",
                    M: "-",
                    N: ".",
                    O: "/",
                    "`": "0",
                    "\x90": "NumLock"
                };
            Ot.Node && (ef = Ot.Node.prototype.contains || function(t) {
                return !!(16 & this.compareDocumentPosition(t))
            });
            var af, uf = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.parse = function(t) {
                        throw new Error("parse not implemented")
                    }, e.makeCurrent = function() {
                        var t;
                        t = new e, Jl || (Jl = t)
                    }, e.prototype.hasProperty = function(t, e) {
                        return e in t
                    }, e.prototype.setProperty = function(t, e, n) {
                        t[e] = n
                    }, e.prototype.getProperty = function(t, e) {
                        return t[e]
                    }, e.prototype.invoke = function(t, e, n) {
                        var r;
                        (r = t)[e].apply(r, l(n))
                    }, e.prototype.logError = function(t) {
                        window.console && (console.error ? console.error(t) : console.log(t))
                    }, e.prototype.log = function(t) {
                        window.console && window.console.log && window.console.log(t)
                    }, e.prototype.logGroup = function(t) {
                        window.console && window.console.group && window.console.group(t)
                    }, e.prototype.logGroupEnd = function() {
                        window.console && window.console.groupEnd && window.console.groupEnd()
                    }, Object.defineProperty(e.prototype, "attrToPropMap", {
                        get: function() {
                            return nf
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.contains = function(t, e) {
                        return ef.call(t, e)
                    }, e.prototype.querySelector = function(t, e) {
                        return t.querySelector(e)
                    }, e.prototype.querySelectorAll = function(t, e) {
                        return t.querySelectorAll(e)
                    }, e.prototype.on = function(t, e, n) {
                        t.addEventListener(e, n, !1)
                    }, e.prototype.onAndCancel = function(t, e, n) {
                        return t.addEventListener(e, n, !1),
                            function() {
                                t.removeEventListener(e, n, !1)
                            }
                    }, e.prototype.dispatchEvent = function(t, e) {
                        t.dispatchEvent(e)
                    }, e.prototype.createMouseEvent = function(t) {
                        var e = this.getDefaultDocument().createEvent("MouseEvent");
                        return e.initEvent(t, !0, !0), e
                    }, e.prototype.createEvent = function(t) {
                        var e = this.getDefaultDocument().createEvent("Event");
                        return e.initEvent(t, !0, !0), e
                    }, e.prototype.preventDefault = function(t) {
                        t.preventDefault(), t.returnValue = !1
                    }, e.prototype.isPrevented = function(t) {
                        return t.defaultPrevented || null != t.returnValue && !t.returnValue
                    }, e.prototype.getInnerHTML = function(t) {
                        return t.innerHTML
                    }, e.prototype.getTemplateContent = function(t) {
                        return "content" in t && this.isTemplateElement(t) ? t.content : null
                    }, e.prototype.getOuterHTML = function(t) {
                        return t.outerHTML
                    }, e.prototype.nodeName = function(t) {
                        return t.nodeName
                    }, e.prototype.nodeValue = function(t) {
                        return t.nodeValue
                    }, e.prototype.type = function(t) {
                        return t.type
                    }, e.prototype.content = function(t) {
                        return this.hasProperty(t, "content") ? t.content : t
                    }, e.prototype.firstChild = function(t) {
                        return t.firstChild
                    }, e.prototype.nextSibling = function(t) {
                        return t.nextSibling
                    }, e.prototype.parentElement = function(t) {
                        return t.parentNode
                    }, e.prototype.childNodes = function(t) {
                        return t.childNodes
                    }, e.prototype.childNodesAsList = function(t) {
                        for (var e = t.childNodes, n = new Array(e.length), r = 0; r < e.length; r++) n[r] = e[r];
                        return n
                    }, e.prototype.clearNodes = function(t) {
                        for (; t.firstChild;) t.removeChild(t.firstChild)
                    }, e.prototype.appendChild = function(t, e) {
                        t.appendChild(e)
                    }, e.prototype.removeChild = function(t, e) {
                        t.removeChild(e)
                    }, e.prototype.replaceChild = function(t, e, n) {
                        t.replaceChild(e, n)
                    }, e.prototype.remove = function(t) {
                        return t.parentNode && t.parentNode.removeChild(t), t
                    }, e.prototype.insertBefore = function(t, e, n) {
                        t.insertBefore(n, e)
                    }, e.prototype.insertAllBefore = function(t, e, n) {
                        n.forEach(function(n) {
                            return t.insertBefore(n, e)
                        })
                    }, e.prototype.insertAfter = function(t, e, n) {
                        t.insertBefore(n, e.nextSibling)
                    }, e.prototype.setInnerHTML = function(t, e) {
                        t.innerHTML = e
                    }, e.prototype.getText = function(t) {
                        return t.textContent
                    }, e.prototype.setText = function(t, e) {
                        t.textContent = e
                    }, e.prototype.getValue = function(t) {
                        return t.value
                    }, e.prototype.setValue = function(t, e) {
                        t.value = e
                    }, e.prototype.getChecked = function(t) {
                        return t.checked
                    }, e.prototype.setChecked = function(t, e) {
                        t.checked = e
                    }, e.prototype.createComment = function(t) {
                        return this.getDefaultDocument().createComment(t)
                    }, e.prototype.createTemplate = function(t) {
                        var e = this.getDefaultDocument().createElement("template");
                        return e.innerHTML = t, e
                    }, e.prototype.createElement = function(t, e) {
                        return (e = e || this.getDefaultDocument()).createElement(t)
                    }, e.prototype.createElementNS = function(t, e, n) {
                        return (n = n || this.getDefaultDocument()).createElementNS(t, e)
                    }, e.prototype.createTextNode = function(t, e) {
                        return (e = e || this.getDefaultDocument()).createTextNode(t)
                    }, e.prototype.createScriptTag = function(t, e, n) {
                        var r = (n = n || this.getDefaultDocument()).createElement("SCRIPT");
                        return r.setAttribute(t, e), r
                    }, e.prototype.createStyleElement = function(t, e) {
                        var n = (e = e || this.getDefaultDocument()).createElement("style");
                        return this.appendChild(n, this.createTextNode(t, e)), n
                    }, e.prototype.createShadowRoot = function(t) {
                        return t.createShadowRoot()
                    }, e.prototype.getShadowRoot = function(t) {
                        return t.shadowRoot
                    }, e.prototype.getHost = function(t) {
                        return t.host
                    }, e.prototype.clone = function(t) {
                        return t.cloneNode(!0)
                    }, e.prototype.getElementsByClassName = function(t, e) {
                        return t.getElementsByClassName(e)
                    }, e.prototype.getElementsByTagName = function(t, e) {
                        return t.getElementsByTagName(e)
                    }, e.prototype.classList = function(t) {
                        return Array.prototype.slice.call(t.classList, 0)
                    }, e.prototype.addClass = function(t, e) {
                        t.classList.add(e)
                    }, e.prototype.removeClass = function(t, e) {
                        t.classList.remove(e)
                    }, e.prototype.hasClass = function(t, e) {
                        return t.classList.contains(e)
                    }, e.prototype.setStyle = function(t, e, n) {
                        t.style[e] = n
                    }, e.prototype.removeStyle = function(t, e) {
                        t.style[e] = ""
                    }, e.prototype.getStyle = function(t, e) {
                        return t.style[e]
                    }, e.prototype.hasStyle = function(t, e, n) {
                        var r = this.getStyle(t, e) || "";
                        return n ? r == n : r.length > 0
                    }, e.prototype.tagName = function(t) {
                        return t.tagName
                    }, e.prototype.attributeMap = function(t) {
                        for (var e = new Map, n = t.attributes, r = 0; r < n.length; r++) {
                            var o = n.item(r);
                            e.set(o.name, o.value)
                        }
                        return e
                    }, e.prototype.hasAttribute = function(t, e) {
                        return t.hasAttribute(e)
                    }, e.prototype.hasAttributeNS = function(t, e, n) {
                        return t.hasAttributeNS(e, n)
                    }, e.prototype.getAttribute = function(t, e) {
                        return t.getAttribute(e)
                    }, e.prototype.getAttributeNS = function(t, e, n) {
                        return t.getAttributeNS(e, n)
                    }, e.prototype.setAttribute = function(t, e, n) {
                        t.setAttribute(e, n)
                    }, e.prototype.setAttributeNS = function(t, e, n, r) {
                        t.setAttributeNS(e, n, r)
                    }, e.prototype.removeAttribute = function(t, e) {
                        t.removeAttribute(e)
                    }, e.prototype.removeAttributeNS = function(t, e, n) {
                        t.removeAttributeNS(e, n)
                    }, e.prototype.templateAwareRoot = function(t) {
                        return this.isTemplateElement(t) ? this.content(t) : t
                    }, e.prototype.createHtmlDocument = function() {
                        return document.implementation.createHTMLDocument("fakeTitle")
                    }, e.prototype.getDefaultDocument = function() {
                        return document
                    }, e.prototype.getBoundingClientRect = function(t) {
                        try {
                            return t.getBoundingClientRect()
                        } catch (e) {
                            return {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            }
                        }
                    }, e.prototype.getTitle = function(t) {
                        return t.title
                    }, e.prototype.setTitle = function(t, e) {
                        t.title = e || ""
                    }, e.prototype.elementMatches = function(t, e) {
                        return !!this.isElementNode(t) && (t.matches && t.matches(e) || t.msMatchesSelector && t.msMatchesSelector(e) || t.webkitMatchesSelector && t.webkitMatchesSelector(e))
                    }, e.prototype.isTemplateElement = function(t) {
                        return this.isElementNode(t) && "TEMPLATE" === t.nodeName
                    }, e.prototype.isTextNode = function(t) {
                        return t.nodeType === Node.TEXT_NODE
                    }, e.prototype.isCommentNode = function(t) {
                        return t.nodeType === Node.COMMENT_NODE
                    }, e.prototype.isElementNode = function(t) {
                        return t.nodeType === Node.ELEMENT_NODE
                    }, e.prototype.hasShadowRoot = function(t) {
                        return null != t.shadowRoot && t instanceof HTMLElement
                    }, e.prototype.isShadowRoot = function(t) {
                        return t instanceof DocumentFragment
                    }, e.prototype.importIntoDoc = function(t) {
                        return document.importNode(this.templateAwareRoot(t), !0)
                    }, e.prototype.adoptNode = function(t) {
                        return document.adoptNode(t)
                    }, e.prototype.getHref = function(t) {
                        return t.getAttribute("href")
                    }, e.prototype.getEventKey = function(t) {
                        var e = t.key;
                        if (null == e) {
                            if (null == (e = t.keyIdentifier)) return "Unidentified";
                            e.startsWith("U+") && (e = String.fromCharCode(parseInt(e.substring(2), 16)), 3 === t.location && of .hasOwnProperty(e) && (e = of [e]))
                        }
                        return rf[e] || e
                    }, e.prototype.getGlobalEventTarget = function(t, e) {
                        return "window" === e ? window : "document" === e ? t : "body" === e ? t.body : null
                    }, e.prototype.getHistory = function() {
                        return window.history
                    }, e.prototype.getLocation = function() {
                        return window.location
                    }, e.prototype.getBaseHref = function(t) {
                        var e, n = sf || (sf = document.querySelector("base")) ? sf.getAttribute("href") : null;
                        return null == n ? null : (e = n, af || (af = document.createElement("a")), af.setAttribute("href", e), "/" === af.pathname.charAt(0) ? af.pathname : "/" + af.pathname)
                    }, e.prototype.resetBaseElement = function() {
                        sf = null
                    }, e.prototype.getUserAgent = function() {
                        return window.navigator.userAgent
                    }, e.prototype.setData = function(t, e, n) {
                        this.setAttribute(t, "data-" + e, n)
                    }, e.prototype.getData = function(t, e) {
                        return this.getAttribute(t, "data-" + e)
                    }, e.prototype.getComputedStyle = function(t) {
                        return getComputedStyle(t)
                    }, e.prototype.supportsWebAnimation = function() {
                        return "function" == typeof Element.prototype.animate
                    }, e.prototype.performanceNow = function() {
                        return window.performance && window.performance.now ? window.performance.now() : (new Date).getTime()
                    }, e.prototype.supportsCookies = function() {
                        return !0
                    }, e.prototype.getCookie = function(t) {
                        return function(t, e) {
                            var n, r;
                            e = encodeURIComponent(e);
                            try {
                                for (var o = s(t.split(";")), i = o.next(); !i.done; i = o.next()) {
                                    var a = i.value,
                                        u = a.indexOf("="),
                                        l = c(-1 == u ? [a, ""] : [a.slice(0, u), a.slice(u + 1)], 2),
                                        f = l[1];
                                    if (l[0].trim() === e) return decodeURIComponent(f)
                                }
                            } catch (p) {
                                n = {
                                    error: p
                                }
                            } finally {
                                try {
                                    i && !i.done && (r = o.return) && r.call(o)
                                } finally {
                                    if (n) throw n.error
                                }
                            }
                            return null
                        }(document.cookie, t)
                    }, e.prototype.setCookie = function(t, e) {
                        document.cookie = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                    }, e
                }(function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        e._animationPrefix = null, e._transitionEnd = null;
                        try {
                            var n = e.createElement("div", document);
                            if (null != e.getStyle(n, "animationName")) e._animationPrefix = "";
                            else
                                for (var r = ["Webkit", "Moz", "O", "ms"], o = 0; o < r.length; o++)
                                    if (null != e.getStyle(n, r[o] + "AnimationName")) {
                                        e._animationPrefix = "-" + r[o].toLowerCase() + "-";
                                        break
                                    } var i = {
                                WebkitTransition: "webkitTransitionEnd",
                                MozTransition: "transitionend",
                                OTransition: "oTransitionEnd otransitionend",
                                transition: "transitionend"
                            };
                            Object.keys(i).forEach(function(t) {
                                null != e.getStyle(n, t) && (e._transitionEnd = i[t])
                            })
                        } catch (a) {
                            e._animationPrefix = null, e._transitionEnd = null
                        }
                        return e
                    }
                    return o(e, t), e.prototype.getDistributedNodes = function(t) {
                        return t.getDistributedNodes()
                    }, e.prototype.resolveAndSetHref = function(t, e, n) {
                        t.href = null == n ? e : e + "/../" + n
                    }, e.prototype.supportsDOMEvents = function() {
                        return !0
                    }, e.prototype.supportsNativeShadowDOM = function() {
                        return "function" == typeof document.body.createShadowRoot
                    }, e.prototype.getAnimationPrefix = function() {
                        return this._animationPrefix ? this._animationPrefix : ""
                    }, e.prototype.getTransitionEnd = function() {
                        return this._transitionEnd ? this._transitionEnd : ""
                    }, e.prototype.supportsAnimation = function() {
                        return null != this._animationPrefix && null != this._transitionEnd
                    }, e
                }(function() {
                    function t() {
                        this.resourceLoaderType = null
                    }
                    return Object.defineProperty(t.prototype, "attrToPropMap", {
                        get: function() {
                            return this._attrToPropMap
                        },
                        set: function(t) {
                            this._attrToPropMap = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }())),
                sf = null,
                cf = nl;

            function lf() {
                return !!window.history.pushState
            }
            var ff = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n._init(), n
                    }
                    var n;
                    return o(e, t), e.prototype._init = function() {
                        this.location = tf().getLocation(), this._history = tf().getHistory()
                    }, e.prototype.getBaseHrefFromDOM = function() {
                        return tf().getBaseHref(this._doc)
                    }, e.prototype.onPopState = function(t) {
                        tf().getGlobalEventTarget(this._doc, "window").addEventListener("popstate", t, !1)
                    }, e.prototype.onHashChange = function(t) {
                        tf().getGlobalEventTarget(this._doc, "window").addEventListener("hashchange", t, !1)
                    }, Object.defineProperty(e.prototype, "pathname", {
                        get: function() {
                            return this.location.pathname
                        },
                        set: function(t) {
                            this.location.pathname = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "search", {
                        get: function() {
                            return this.location.search
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "hash", {
                        get: function() {
                            return this.location.hash
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.pushState = function(t, e, n) {
                        lf() ? this._history.pushState(t, e, n) : this.location.hash = n
                    }, e.prototype.replaceState = function(t, e, n) {
                        lf() ? this._history.replaceState(t, e, n) : this.location.hash = n
                    }, e.prototype.forward = function() {
                        this._history.forward()
                    }, e.prototype.back = function() {
                        this._history.back()
                    }, a([(n = Ae(cf), function(t, e) {
                        n(t, e, 0)
                    }), u("design:paramtypes", [Object])], e)
                }(Dc),
                pf = new Tt("TRANSITION_ID"),
                hf = [{
                    provide: ti,
                    useFactory: function(t, e, n) {
                        return function() {
                            n.get(ei).donePromise.then(function() {
                                var n = tf();
                                Array.prototype.slice.apply(n.querySelectorAll(e, "style[ng-transition]")).filter(function(e) {
                                    return n.getAttribute(e, "ng-transition") === t
                                }).forEach(function(t) {
                                    return n.remove(t)
                                })
                            })
                        }
                    },
                    deps: [pf, cf, pr],
                    multi: !0
                }],
                df = function() {
                    function t() {}
                    return t.init = function() {
                        var e;
                        e = new t, Ni = e
                    }, t.prototype.addToWindow = function(t) {
                        Ot.getAngularTestability = function(e, n) {
                            void 0 === n && (n = !0);
                            var r = t.findTestabilityInTree(e, n);
                            if (null == r) throw new Error("Could not find testability for element.");
                            return r
                        }, Ot.getAllAngularTestabilities = function() {
                            return t.getAllTestabilities()
                        }, Ot.getAllAngularRootElements = function() {
                            return t.getAllRootElements()
                        }, Ot.frameworkStabilizers || (Ot.frameworkStabilizers = []), Ot.frameworkStabilizers.push(function(t) {
                            var e = Ot.getAllAngularTestabilities(),
                                n = e.length,
                                r = !1,
                                o = function(e) {
                                    r = r || e, 0 == --n && t(r)
                                };
                            e.forEach(function(t) {
                                t.whenStable(o)
                            })
                        })
                    }, t.prototype.findTestabilityInTree = function(t, e, n) {
                        if (null == e) return null;
                        var r = t.getTestability(e);
                        return null != r ? r : n ? tf().isShadowRoot(e) ? this.findTestabilityInTree(t, tf().getHost(e), !0) : this.findTestabilityInTree(t, tf().parentElement(e), !0) : null
                    }, t
                }();

            function vf(t, e) {
                "undefined" != typeof COMPILED && COMPILED || ((Ot.ng = Ot.ng || {})[t] = e)
            }
            var gf = {
                ApplicationRef: Li,
                NgZone: xi
            };

            function yf(t) {
                return na(t)
            }
            var mf = new Tt("EventManagerPlugins"),
                wf = function() {
                    function t(t, e) {
                        var n = this;
                        this._zone = e, this._eventNameToPlugin = new Map, t.forEach(function(t) {
                            return t.manager = n
                        }), this._plugins = t.slice().reverse()
                    }
                    return t.prototype.addEventListener = function(t, e, n) {
                        return this._findPluginFor(e).addEventListener(t, e, n)
                    }, t.prototype.addGlobalEventListener = function(t, e, n) {
                        return this._findPluginFor(e).addGlobalEventListener(t, e, n)
                    }, t.prototype.getZone = function() {
                        return this._zone
                    }, t.prototype._findPluginFor = function(t) {
                        var e = this._eventNameToPlugin.get(t);
                        if (e) return e;
                        for (var n = this._plugins, r = 0; r < n.length; r++) {
                            var o = n[r];
                            if (o.supports(t)) return this._eventNameToPlugin.set(t, o), o
                        }
                        throw new Error("No event manager plugin found for event " + t)
                    }, t
                }(),
                bf = function() {
                    function t(t) {
                        this._doc = t
                    }
                    return t.prototype.addGlobalEventListener = function(t, e, n) {
                        var r = tf().getGlobalEventTarget(this._doc, t);
                        if (!r) throw new Error("Unsupported event target " + r + " for event " + e);
                        return this.addEventListener(r, e, n)
                    }, t
                }(),
                _f = function() {
                    function t() {
                        this._stylesSet = new Set
                    }
                    return t.prototype.addStyles = function(t) {
                        var e = this,
                            n = new Set;
                        t.forEach(function(t) {
                            e._stylesSet.has(t) || (e._stylesSet.add(t), n.add(t))
                        }), this.onStylesAdded(n)
                    }, t.prototype.onStylesAdded = function(t) {}, t.prototype.getAllStyles = function() {
                        return Array.from(this._stylesSet)
                    }, t
                }(),
                Cf = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n._hostNodes = new Set, n._styleNodes = new Set, n._hostNodes.add(e.head), n
                    }
                    return o(e, t), e.prototype._addStylesToHost = function(t, e) {
                        var n = this;
                        t.forEach(function(t) {
                            var r = n._doc.createElement("style");
                            r.textContent = t, n._styleNodes.add(e.appendChild(r))
                        })
                    }, e.prototype.addHost = function(t) {
                        this._addStylesToHost(this._stylesSet, t), this._hostNodes.add(t)
                    }, e.prototype.removeHost = function(t) {
                        this._hostNodes.delete(t)
                    }, e.prototype.onStylesAdded = function(t) {
                        var e = this;
                        this._hostNodes.forEach(function(n) {
                            return e._addStylesToHost(t, n)
                        })
                    }, e.prototype.ngOnDestroy = function() {
                        this._styleNodes.forEach(function(t) {
                            return tf().remove(t)
                        })
                    }, e
                }(_f),
                xf = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                },
                Sf = /%COMP%/g,
                Ef = "_nghost-%COMP%",
                Tf = "_ngcontent-%COMP%";

            function kf(t, e, n) {
                for (var r = 0; r < e.length; r++) {
                    var o = e[r];
                    Array.isArray(o) ? kf(t, o, n) : (o = o.replace(Sf, t), n.push(o))
                }
                return n
            }

            function If(t) {
                return function(e) {
                    !1 === t(e) && (e.preventDefault(), e.returnValue = !1)
                }
            }
            var Rf = function() {
                    function t(t, e) {
                        this.eventManager = t, this.sharedStylesHost = e, this.rendererByCompId = new Map, this.defaultRenderer = new Pf(t)
                    }
                    return t.prototype.createRenderer = function(t, e) {
                        if (!t || !e) return this.defaultRenderer;
                        switch (e.encapsulation) {
                            case zt.Emulated:
                                var n = this.rendererByCompId.get(e.id);
                                return n || (n = new Df(this.eventManager, this.sharedStylesHost, e), this.rendererByCompId.set(e.id, n)), n.applyToHost(t), n;
                            case zt.Native:
                            case zt.ShadowDom:
                                return new jf(this.eventManager, this.sharedStylesHost, t, e);
                            default:
                                if (!this.rendererByCompId.has(e.id)) {
                                    var r = kf(e.id, e.styles, []);
                                    this.sharedStylesHost.addStyles(r), this.rendererByCompId.set(e.id, this.defaultRenderer)
                                }
                                return this.defaultRenderer
                        }
                    }, t.prototype.begin = function() {}, t.prototype.end = function() {}, t
                }(),
                Pf = function() {
                    function t(t) {
                        this.eventManager = t, this.data = Object.create(null)
                    }
                    return t.prototype.destroy = function() {}, t.prototype.createElement = function(t, e) {
                        return e ? document.createElementNS(xf[e], t) : document.createElement(t)
                    }, t.prototype.createComment = function(t) {
                        return document.createComment(t)
                    }, t.prototype.createText = function(t) {
                        return document.createTextNode(t)
                    }, t.prototype.appendChild = function(t, e) {
                        t.appendChild(e)
                    }, t.prototype.insertBefore = function(t, e, n) {
                        t && t.insertBefore(e, n)
                    }, t.prototype.removeChild = function(t, e) {
                        t && t.removeChild(e)
                    }, t.prototype.selectRootElement = function(t, e) {
                        var n = "string" == typeof t ? document.querySelector(t) : t;
                        if (!n) throw new Error('The selector "' + t + '" did not match any elements');
                        return e || (n.textContent = ""), n
                    }, t.prototype.parentNode = function(t) {
                        return t.parentNode
                    }, t.prototype.nextSibling = function(t) {
                        return t.nextSibling
                    }, t.prototype.setAttribute = function(t, e, n, r) {
                        if (r) {
                            e = r + ":" + e;
                            var o = xf[r];
                            o ? t.setAttributeNS(o, e, n) : t.setAttribute(e, n)
                        } else t.setAttribute(e, n)
                    }, t.prototype.removeAttribute = function(t, e, n) {
                        if (n) {
                            var r = xf[n];
                            r ? t.removeAttributeNS(r, e) : t.removeAttribute(n + ":" + e)
                        } else t.removeAttribute(e)
                    }, t.prototype.addClass = function(t, e) {
                        t.classList.add(e)
                    }, t.prototype.removeClass = function(t, e) {
                        t.classList.remove(e)
                    }, t.prototype.setStyle = function(t, e, n, r) {
                        r & to.DashCase ? t.style.setProperty(e, n, r & to.Important ? "important" : "") : t.style[e] = n
                    }, t.prototype.removeStyle = function(t, e, n) {
                        n & to.DashCase ? t.style.removeProperty(e) : t.style[e] = ""
                    }, t.prototype.setProperty = function(t, e, n) {
                        Of(e, "property"), t[e] = n
                    }, t.prototype.setValue = function(t, e) {
                        t.nodeValue = e
                    }, t.prototype.listen = function(t, e, n) {
                        return Of(e, "listener"), "string" == typeof t ? this.eventManager.addGlobalEventListener(t, e, If(n)) : this.eventManager.addEventListener(t, e, If(n))
                    }, t
                }(),
                Af = "@".charCodeAt(0);

            function Of(t, e) {
                if (t.charCodeAt(0) === Af) throw new Error("Found the synthetic " + e + " " + t + '. Please include either "BrowserAnimationsModule" or "NoopAnimationsModule" in your application.')
            }
            var Nf, Df = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        o.component = r;
                        var i = kf(r.id, r.styles, []);
                        return n.addStyles(i), o.contentAttr = Tf.replace(Sf, r.id), o.hostAttr = Ef.replace(Sf, r.id), o
                    }
                    return o(e, t), e.prototype.applyToHost = function(e) {
                        t.prototype.setAttribute.call(this, e, this.hostAttr, "")
                    }, e.prototype.createElement = function(e, n) {
                        var r = t.prototype.createElement.call(this, e, n);
                        return t.prototype.setAttribute.call(this, r, this.contentAttr, ""), r
                    }, e
                }(Pf),
                jf = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        i.sharedStylesHost = n, i.hostEl = r, i.component = o, i.shadowRoot = o.encapsulation === zt.ShadowDom ? r.attachShadow({
                            mode: "open"
                        }) : r.createShadowRoot(), i.sharedStylesHost.addHost(i.shadowRoot);
                        for (var a = kf(o.id, o.styles, []), u = 0; u < a.length; u++) {
                            var s = document.createElement("style");
                            s.textContent = a[u], i.shadowRoot.appendChild(s)
                        }
                        return i
                    }
                    return o(e, t), e.prototype.nodeOrShadowRoot = function(t) {
                        return t === this.hostEl ? this.shadowRoot : t
                    }, e.prototype.destroy = function() {
                        this.sharedStylesHost.removeHost(this.shadowRoot)
                    }, e.prototype.appendChild = function(e, n) {
                        return t.prototype.appendChild.call(this, this.nodeOrShadowRoot(e), n)
                    }, e.prototype.insertBefore = function(e, n, r) {
                        return t.prototype.insertBefore.call(this, this.nodeOrShadowRoot(e), n, r)
                    }, e.prototype.removeChild = function(e, n) {
                        return t.prototype.removeChild.call(this, this.nodeOrShadowRoot(e), n)
                    }, e.prototype.parentNode = function(e) {
                        return this.nodeOrShadowRoot(t.prototype.parentNode.call(this, this.nodeOrShadowRoot(e)))
                    }, e
                }(Pf),
                Mf = "undefined" != typeof Zone && Zone.__symbol__ || function(t) {
                    return "__zone_symbol__" + t
                },
                Uf = Mf("addEventListener"),
                Vf = Mf("removeEventListener"),
                Hf = {},
                Lf = "__zone_symbol__propagationStopped";
            "undefined" != typeof Zone && Zone[Mf("BLACK_LISTED_EVENTS")] && (Nf = {});
            var Ff = function(t) {
                    return !!Nf && Nf.hasOwnProperty(t)
                },
                zf = function(t) {
                    var e = Hf[t.type];
                    if (e) {
                        var n = this[e];
                        if (n) {
                            var r = [t];
                            if (1 === n.length) return (a = n[0]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r);
                            for (var o = n.slice(), i = 0; i < o.length && !0 !== t[Lf]; i++) {
                                var a;
                                (a = o[i]).zone !== Zone.current ? a.zone.run(a.handler, this, r) : a.handler.apply(this, r)
                            }
                        }
                    }
                },
                Bf = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e) || this;
                        return o.ngZone = n, r && function(t) {
                            return t === rl
                        }(r) || o.patchEvent(), o
                    }
                    return o(e, t), e.prototype.patchEvent = function() {
                        if ("undefined" != typeof Event && Event && Event.prototype && !Event.prototype.__zone_symbol__stopImmediatePropagation) {
                            var t = Event.prototype.__zone_symbol__stopImmediatePropagation = Event.prototype.stopImmediatePropagation;
                            Event.prototype.stopImmediatePropagation = function() {
                                this && (this[Lf] = !0), t && t.apply(this, arguments)
                            }
                        }
                    }, e.prototype.supports = function(t) {
                        return !0
                    }, e.prototype.addEventListener = function(t, e, n) {
                        var r = this,
                            o = n;
                        if (!t[Uf] || xi.isInAngularZone() && !Ff(e)) t.addEventListener(e, o, !1);
                        else {
                            var i = Hf[e];
                            i || (i = Hf[e] = Mf("ANGULAR" + e + "FALSE"));
                            var a = t[i],
                                u = a && a.length > 0;
                            a || (a = t[i] = []);
                            var s = Ff(e) ? Zone.root : Zone.current;
                            if (0 === a.length) a.push({
                                zone: s,
                                handler: o
                            });
                            else {
                                for (var c = !1, l = 0; l < a.length; l++)
                                    if (a[l].handler === o) {
                                        c = !0;
                                        break
                                    } c || a.push({
                                    zone: s,
                                    handler: o
                                })
                            }
                            u || t[Uf](e, zf, !1)
                        }
                        return function() {
                            return r.removeEventListener(t, e, o)
                        }
                    }, e.prototype.removeEventListener = function(t, e, n) {
                        var r = t[Vf];
                        if (!r) return t.removeEventListener.apply(t, [e, n, !1]);
                        var o = Hf[e],
                            i = o && t[o];
                        if (!i) return t.removeEventListener.apply(t, [e, n, !1]);
                        for (var a = !1, u = 0; u < i.length; u++)
                            if (i[u].handler === n) {
                                a = !0, i.splice(u, 1);
                                break
                            } a ? 0 === i.length && r.apply(t, [e, zf, !1]) : t.removeEventListener.apply(t, [e, n, !1])
                    }, e
                }(bf),
                qf = {
                    pan: !0,
                    panstart: !0,
                    panmove: !0,
                    panend: !0,
                    pancancel: !0,
                    panleft: !0,
                    panright: !0,
                    panup: !0,
                    pandown: !0,
                    pinch: !0,
                    pinchstart: !0,
                    pinchmove: !0,
                    pinchend: !0,
                    pinchcancel: !0,
                    pinchin: !0,
                    pinchout: !0,
                    press: !0,
                    pressup: !0,
                    rotate: !0,
                    rotatestart: !0,
                    rotatemove: !0,
                    rotateend: !0,
                    rotatecancel: !0,
                    swipe: !0,
                    swipeleft: !0,
                    swiperight: !0,
                    swipeup: !0,
                    swipedown: !0,
                    tap: !0
                },
                Zf = new Tt("HammerGestureConfig"),
                Gf = new Tt("HammerLoader"),
                Qf = function() {
                    function t() {
                        this.events = [], this.overrides = {}
                    }
                    return t.prototype.buildHammer = function(t) {
                        var e = new Hammer(t, this.options);
                        for (var n in e.get("pinch").set({
                                enable: !0
                            }), e.get("rotate").set({
                                enable: !0
                            }), this.overrides) e.get(n).set(this.overrides[n]);
                        return e
                    }, t
                }(),
                Wf = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e) || this;
                        return i._config = n, i.console = r, i.loader = o, i
                    }
                    return o(e, t), e.prototype.supports = function(t) {
                        return !(!qf.hasOwnProperty(t.toLowerCase()) && !this.isCustomEvent(t) || !window.Hammer && !this.loader && (this.console.warn('The "' + t + '" event cannot be bound because Hammer.JS is not loaded and no custom loader has been specified.'), 1))
                    }, e.prototype.addEventListener = function(t, e, n) {
                        var r = this,
                            o = this.manager.getZone();
                        if (e = e.toLowerCase(), !window.Hammer && this.loader) {
                            var i = !1,
                                a = function() {
                                    i = !0
                                };
                            return this.loader().then(function() {
                                    if (!window.Hammer) return r.console.warn("The custom HAMMER_LOADER completed, but Hammer.JS is not present."), void(a = function() {});
                                    i || (a = r.addEventListener(t, e, n))
                                }).catch(function() {
                                    r.console.warn('The "' + e + '" event cannot be bound because the custom Hammer.JS loader failed.'), a = function() {}
                                }),
                                function() {
                                    a()
                                }
                        }
                        return o.runOutsideAngular(function() {
                            var i = r._config.buildHammer(t),
                                a = function(t) {
                                    o.runGuarded(function() {
                                        n(t)
                                    })
                                };
                            return i.on(e, a),
                                function() {
                                    i.off(e, a), "function" == typeof i.destroy && i.destroy()
                                }
                        })
                    }, e.prototype.isCustomEvent = function(t) {
                        return this._config.events.indexOf(t) > -1
                    }, e
                }(bf),
                Kf = ["alt", "control", "meta", "shift"],
                $f = {
                    alt: function(t) {
                        return t.altKey
                    },
                    control: function(t) {
                        return t.ctrlKey
                    },
                    meta: function(t) {
                        return t.metaKey
                    },
                    shift: function(t) {
                        return t.shiftKey
                    }
                },
                Xf = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    var n;
                    return o(e, t), n = e, e.prototype.supports = function(t) {
                        return null != n.parseEventName(t)
                    }, e.prototype.addEventListener = function(t, e, r) {
                        var o = n.parseEventName(e),
                            i = n.eventCallback(o.fullKey, r, this.manager.getZone());
                        return this.manager.getZone().runOutsideAngular(function() {
                            return tf().onAndCancel(t, o.domEventName, i)
                        })
                    }, e.parseEventName = function(t) {
                        var e = t.toLowerCase().split("."),
                            r = e.shift();
                        if (0 === e.length || "keydown" !== r && "keyup" !== r) return null;
                        var o = n._normalizeKey(e.pop()),
                            i = "";
                        if (Kf.forEach(function(t) {
                                var n = e.indexOf(t);
                                n > -1 && (e.splice(n, 1), i += t + ".")
                            }), i += o, 0 != e.length || 0 === o.length) return null;
                        var a = {};
                        return a.domEventName = r, a.fullKey = i, a
                    }, e.getEventFullKey = function(t) {
                        var e = "",
                            n = tf().getEventKey(t);
                        return " " === (n = n.toLowerCase()) ? n = "space" : "." === n && (n = "dot"), Kf.forEach(function(r) {
                            r != n && (0, $f[r])(t) && (e += r + ".")
                        }), e += n
                    }, e.eventCallback = function(t, e, r) {
                        return function(o) {
                            n.getEventFullKey(o) === t && r.runGuarded(function() {
                                return e(o)
                            })
                        }
                    }, e._normalizeKey = function(t) {
                        switch (t) {
                            case "esc":
                                return "escape";
                            default:
                                return t
                        }
                    }, e
                }(bf),
                Yf = function() {
                    return function() {}
                }(),
                Jf = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n._doc = e, n
                    }
                    return o(e, t), e.prototype.sanitize = function(t, e) {
                        if (null == e) return null;
                        switch (t) {
                            case ro.NONE:
                                return e;
                            case ro.HTML:
                                return e instanceof ep ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "HTML"), function(t, e) {
                                    var n = null;
                                    try {
                                        xo = xo || new yo(t);
                                        var r = e ? String(e) : "";
                                        n = xo.getInertBodyElement(r);
                                        var o = 5,
                                            i = r;
                                        do {
                                            if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
                                            o--, r = i, i = n.innerHTML, n = xo.getInertBodyElement(r)
                                        } while (r !== i);
                                        var a = new Oo,
                                            u = a.sanitizeChildren(Mo(n) || n);
                                        return go() && a.sanitizedSomething && console.warn("WARNING: sanitizing HTML stripped some content, see http://g.co/ng/security#xss"), u
                                    } finally {
                                        if (n)
                                            for (var s = Mo(n) || n; s.firstChild;) s.removeChild(s.firstChild)
                                    }
                                }(this._doc, String(e)));
                            case ro.STYLE:
                                return e instanceof np ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "Style"), function(t) {
                                    if (!(t = String(t).trim())) return "";
                                    var e = t.match(Bo);
                                    return e && bo(e[1]) === e[1] || t.match(zo) && function(t) {
                                        for (var e = !0, n = !0, r = 0; r < t.length; r++) {
                                            var o = t.charAt(r);
                                            "'" === o && n ? e = !e : '"' === o && e && (n = !n)
                                        }
                                        return e && n
                                    }(t) ? t : (go() && console.warn("WARNING: sanitizing unsafe style value " + t + " (see http://g.co/ng/security#xss)."), "unsafe")
                                }(e));
                            case ro.SCRIPT:
                                if (e instanceof rp) return e.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(e, "Script"), new Error("unsafe value used in a script context");
                            case ro.URL:
                                return e instanceof ip || e instanceof op ? e.changingThisBreaksApplicationSecurity : (this.checkNotSafeValue(e, "URL"), bo(String(e)));
                            case ro.RESOURCE_URL:
                                if (e instanceof ip) return e.changingThisBreaksApplicationSecurity;
                                throw this.checkNotSafeValue(e, "ResourceURL"), new Error("unsafe value used in a resource URL context (see http://g.co/ng/security#xss)");
                            default:
                                throw new Error("Unexpected SecurityContext " + t + " (see http://g.co/ng/security#xss)")
                        }
                    }, e.prototype.checkNotSafeValue = function(t, e) {
                        if (t instanceof tp) throw new Error("Required a safe " + e + ", got a " + t.getTypeName() + " (see http://g.co/ng/security#xss)")
                    }, e.prototype.bypassSecurityTrustHtml = function(t) {
                        return new ep(t)
                    }, e.prototype.bypassSecurityTrustStyle = function(t) {
                        return new np(t)
                    }, e.prototype.bypassSecurityTrustScript = function(t) {
                        return new rp(t)
                    }, e.prototype.bypassSecurityTrustUrl = function(t) {
                        return new op(t)
                    }, e.prototype.bypassSecurityTrustResourceUrl = function(t) {
                        return new ip(t)
                    }, e
                }(Yf),
                tp = function() {
                    function t(t) {
                        this.changingThisBreaksApplicationSecurity = t
                    }
                    return t.prototype.toString = function() {
                        return "SafeValue must use [property]=binding: " + this.changingThisBreaksApplicationSecurity + " (see http://g.co/ng/security#xss)"
                    }, t
                }(),
                ep = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "HTML"
                    }, e
                }(tp),
                np = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "Style"
                    }, e
                }(tp),
                rp = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "Script"
                    }, e
                }(tp),
                op = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "URL"
                    }, e
                }(tp),
                ip = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return o(e, t), e.prototype.getTypeName = function() {
                        return "ResourceURL"
                    }, e
                }(tp),
                ap = Mi(wa, "browser", [{
                    provide: ai,
                    useValue: "browser"
                }, {
                    provide: ii,
                    useValue: function() {
                        uf.makeCurrent(), df.init()
                    },
                    multi: !0
                }, {
                    provide: Dc,
                    useClass: ff,
                    deps: [cf]
                }, {
                    provide: cf,
                    useFactory: function() {
                        return document
                    },
                    deps: []
                }]);

            function up() {
                return new Xo
            }
            var sp = function() {
                function t(t) {
                    if (t) throw new Error("BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead.")
                }
                var e;
                return e = t, t.withServerTransition = function(t) {
                    return {
                        ngModule: e,
                        providers: [{
                            provide: ni,
                            useValue: t.appId
                        }, {
                            provide: pf,
                            useExisting: ni
                        }, hf]
                    }
                }, t
            }();
            "undefined" != typeof window && window;
            var cp = function() {
                    return function(t, e) {
                        this.id = t, this.url = e
                    }
                }(),
                lp = function(t) {
                    function e(e, n, r, o) {
                        void 0 === r && (r = "imperative"), void 0 === o && (o = null);
                        var i = t.call(this, e, n) || this;
                        return i.navigationTrigger = r, i.restoredState = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationStart(id: " + this.id + ", url: '" + this.url + "')"
                    }, e
                }(cp),
                fp = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.urlAfterRedirects = r, o
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "')"
                    }, e
                }(cp),
                pp = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.reason = r, o
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationCancel(id: " + this.id + ", url: '" + this.url + "')"
                    }, e
                }(cp),
                hp = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this, e, n) || this;
                        return o.error = r, o
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "NavigationError(id: " + this.id + ", url: '" + this.url + "', error: " + this.error + ")"
                    }, e
                }(cp),
                dp = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "RoutesRecognized(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(cp),
                vp = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "GuardsCheckStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(cp),
                gp = function(t) {
                    function e(e, n, r, o, i) {
                        var a = t.call(this, e, n) || this;
                        return a.urlAfterRedirects = r, a.state = o, a.shouldActivate = i, a
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "GuardsCheckEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ", shouldActivate: " + this.shouldActivate + ")"
                    }, e
                }(cp),
                yp = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "ResolveStart(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(cp),
                mp = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this, e, n) || this;
                        return i.urlAfterRedirects = r, i.state = o, i
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return "ResolveEnd(id: " + this.id + ", url: '" + this.url + "', urlAfterRedirects: '" + this.urlAfterRedirects + "', state: " + this.state + ")"
                    }, e
                }(cp),
                wp = function() {
                    function t(t) {
                        this.route = t
                    }
                    return t.prototype.toString = function() {
                        return "RouteConfigLoadStart(path: " + this.route.path + ")"
                    }, t
                }(),
                bp = function() {
                    function t(t) {
                        this.route = t
                    }
                    return t.prototype.toString = function() {
                        return "RouteConfigLoadEnd(path: " + this.route.path + ")"
                    }, t
                }(),
                _p = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ChildActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                Cp = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ChildActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                xp = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ActivationStart(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                Sp = function() {
                    function t(t) {
                        this.snapshot = t
                    }
                    return t.prototype.toString = function() {
                        return "ActivationEnd(path: '" + (this.snapshot.routeConfig && this.snapshot.routeConfig.path || "") + "')"
                    }, t
                }(),
                Ep = function() {
                    function t(t, e, n) {
                        this.routerEvent = t, this.position = e, this.anchor = n
                    }
                    return t.prototype.toString = function() {
                        return "Scroll(anchor: '" + this.anchor + "', position: '" + (this.position ? this.position[0] + ", " + this.position[1] : null) + "')"
                    }, t
                }(),
                Tp = function() {
                    return function() {}
                }(),
                kp = "primary",
                Ip = function() {
                    function t(t) {
                        this.params = t || {}
                    }
                    return t.prototype.has = function(t) {
                        return this.params.hasOwnProperty(t)
                    }, t.prototype.get = function(t) {
                        if (this.has(t)) {
                            var e = this.params[t];
                            return Array.isArray(e) ? e[0] : e
                        }
                        return null
                    }, t.prototype.getAll = function(t) {
                        if (this.has(t)) {
                            var e = this.params[t];
                            return Array.isArray(e) ? e : [e]
                        }
                        return []
                    }, Object.defineProperty(t.prototype, "keys", {
                        get: function() {
                            return Object.keys(this.params)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }();

            function Rp(t) {
                return new Ip(t)
            }
            var Pp = "ngNavigationCancelingError";

            function Ap(t) {
                var e = Error("NavigationCancelingError: " + t);
                return e[Pp] = !0, e
            }

            function Op(t, e, n) {
                var r = n.path.split("/");
                if (r.length > t.length) return null;
                if ("full" === n.pathMatch && (e.hasChildren() || r.length < t.length)) return null;
                for (var o = {}, i = 0; i < r.length; i++) {
                    var a = r[i],
                        u = t[i];
                    if (a.startsWith(":")) o[a.substring(1)] = u;
                    else if (a !== u.path) return null
                }
                return {
                    consumed: t.slice(0, r.length),
                    posParams: o
                }
            }
            var Np = function() {
                return function(t, e) {
                    this.routes = t, this.module = e
                }
            }();

            function Dp(t, e) {
                void 0 === e && (e = "");
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    jp(r, Mp(e, r))
                }
            }

            function jp(t, e) {
                if (!t) throw new Error("\n      Invalid configuration of route '" + e + "': Encountered undefined route.\n      The reason might be an extra comma.\n\n      Example:\n      const routes: Routes = [\n        { path: '', redirectTo: '/dashboard', pathMatch: 'full' },\n        { path: 'dashboard',  component: DashboardComponent },, << two commas\n        { path: 'detail/:id', component: HeroDetailComponent }\n      ];\n    ");
                if (Array.isArray(t)) throw new Error("Invalid configuration of route '" + e + "': Array cannot be specified");
                if (!t.component && !t.children && !t.loadChildren && t.outlet && t.outlet !== kp) throw new Error("Invalid configuration of route '" + e + "': a componentless route without children or loadChildren cannot have a named outlet set");
                if (t.redirectTo && t.children) throw new Error("Invalid configuration of route '" + e + "': redirectTo and children cannot be used together");
                if (t.redirectTo && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': redirectTo and loadChildren cannot be used together");
                if (t.children && t.loadChildren) throw new Error("Invalid configuration of route '" + e + "': children and loadChildren cannot be used together");
                if (t.redirectTo && t.component) throw new Error("Invalid configuration of route '" + e + "': redirectTo and component cannot be used together");
                if (t.path && t.matcher) throw new Error("Invalid configuration of route '" + e + "': path and matcher cannot be used together");
                if (void 0 === t.redirectTo && !t.component && !t.children && !t.loadChildren) throw new Error("Invalid configuration of route '" + e + "'. One of the following must be provided: component, redirectTo, children or loadChildren");
                if (void 0 === t.path && void 0 === t.matcher) throw new Error("Invalid configuration of route '" + e + "': routes must have either a path or a matcher specified");
                if ("string" == typeof t.path && "/" === t.path.charAt(0)) throw new Error("Invalid configuration of route '" + e + "': path cannot start with a slash");
                if ("" === t.path && void 0 !== t.redirectTo && void 0 === t.pathMatch) throw new Error("Invalid configuration of route '{path: \"" + e + '", redirectTo: "' + t.redirectTo + "\"}': please provide 'pathMatch'. The default value of 'pathMatch' is 'prefix', but often the intent is to use 'full'.");
                if (void 0 !== t.pathMatch && "full" !== t.pathMatch && "prefix" !== t.pathMatch) throw new Error("Invalid configuration of route '" + e + "': pathMatch can only be set to 'prefix' or 'full'");
                t.children && Dp(t.children, e)
            }

            function Mp(t, e) {
                return e ? t || e.path ? t && !e.path ? t + "/" : !t && e.path ? e.path : t + "/" + e.path : "" : t
            }

            function Up(t) {
                var e = t.children && t.children.map(Up),
                    n = e ? i({}, t, {
                        children: e
                    }) : i({}, t);
                return !n.component && (e || n.loadChildren) && n.outlet && n.outlet !== kp && (n.component = Tp), n
            }

            function Vp(t, e) {
                var n, r = Object.keys(t),
                    o = Object.keys(e);
                if (r.length != o.length) return !1;
                for (var i = 0; i < r.length; i++)
                    if (t[n = r[i]] !== e[n]) return !1;
                return !0
            }

            function Hp(t) {
                return Array.prototype.concat.apply([], t)
            }

            function Lp(t) {
                return t.length > 0 ? t[t.length - 1] : null
            }

            function Fp(t, e) {
                for (var n in t) t.hasOwnProperty(n) && e(t[n], n)
            }

            function zp(t) {
                return Jo(t) ? t : Yo(t) ? ot(Promise.resolve(t)) : cl(t)
            }

            function Bp(t, e, n) {
                return n ? function(t, e) {
                    return Vp(t, e)
                }(t.queryParams, e.queryParams) && function t(e, n) {
                    if (!Qp(e.segments, n.segments)) return !1;
                    if (e.numberOfChildren !== n.numberOfChildren) return !1;
                    for (var r in n.children) {
                        if (!e.children[r]) return !1;
                        if (!t(e.children[r], n.children[r])) return !1
                    }
                    return !0
                }(t.root, e.root) : function(t, e) {
                    return Object.keys(e).length <= Object.keys(t).length && Object.keys(e).every(function(n) {
                        return e[n] === t[n]
                    })
                }(t.queryParams, e.queryParams) && function t(e, n) {
                    return function e(n, r, o) {
                        if (n.segments.length > o.length) return !!Qp(a = n.segments.slice(0, o.length), o) && !r.hasChildren();
                        if (n.segments.length === o.length) {
                            if (!Qp(n.segments, o)) return !1;
                            for (var i in r.children) {
                                if (!n.children[i]) return !1;
                                if (!t(n.children[i], r.children[i])) return !1
                            }
                            return !0
                        }
                        var a = o.slice(0, n.segments.length),
                            u = o.slice(n.segments.length);
                        return !!Qp(n.segments, a) && !!n.children[kp] && e(n.children[kp], r, u)
                    }(e, n, n.segments)
                }(t.root, e.root)
            }
            var qp = function() {
                    function t(t, e, n) {
                        this.root = t, this.queryParams = e, this.fragment = n
                    }
                    return Object.defineProperty(t.prototype, "queryParamMap", {
                        get: function() {
                            return this._queryParamMap || (this._queryParamMap = Rp(this.queryParams)), this._queryParamMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return Xp.serialize(this)
                    }, t
                }(),
                Zp = function() {
                    function t(t, e) {
                        var n = this;
                        this.segments = t, this.children = e, this.parent = null, Fp(e, function(t, e) {
                            return t.parent = n
                        })
                    }
                    return t.prototype.hasChildren = function() {
                        return this.numberOfChildren > 0
                    }, Object.defineProperty(t.prototype, "numberOfChildren", {
                        get: function() {
                            return Object.keys(this.children).length
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return Yp(this)
                    }, t
                }(),
                Gp = function() {
                    function t(t, e) {
                        this.path = t, this.parameters = e
                    }
                    return Object.defineProperty(t.prototype, "parameterMap", {
                        get: function() {
                            return this._parameterMap || (this._parameterMap = Rp(this.parameters)), this._parameterMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return oh(this)
                    }, t
                }();

            function Qp(t, e) {
                return t.length === e.length && t.every(function(t, n) {
                    return t.path === e[n].path
                })
            }

            function Wp(t, e) {
                var n = [];
                return Fp(t.children, function(t, r) {
                    r === kp && (n = n.concat(e(t, r)))
                }), Fp(t.children, function(t, r) {
                    r !== kp && (n = n.concat(e(t, r)))
                }), n
            }
            var Kp = function() {
                    return function() {}
                }(),
                $p = function() {
                    function t() {}
                    return t.prototype.parse = function(t) {
                        var e = new ch(t);
                        return new qp(e.parseRootSegment(), e.parseQueryParams(), e.parseFragment())
                    }, t.prototype.serialize = function(t) {
                        var e, n;
                        return "/" + function t(e, n) {
                            if (!e.hasChildren()) return Yp(e);
                            if (n) {
                                var r = e.children[kp] ? t(e.children[kp], !1) : "",
                                    o = [];
                                return Fp(e.children, function(e, n) {
                                    n !== kp && o.push(n + ":" + t(e, !1))
                                }), o.length > 0 ? r + "(" + o.join("//") + ")" : r
                            }
                            var i = Wp(e, function(n, r) {
                                return r === kp ? [t(e.children[kp], !1)] : [r + ":" + t(n, !1)]
                            });
                            return Yp(e) + "/(" + i.join("//") + ")"
                        }(t.root, !0) + (e = t.queryParams, (n = Object.keys(e).map(function(t) {
                            var n = e[t];
                            return Array.isArray(n) ? n.map(function(e) {
                                return th(t) + "=" + th(e)
                            }).join("&") : th(t) + "=" + th(n)
                        })).length ? "?" + n.join("&") : "") + ("string" == typeof t.fragment ? "#" + encodeURI(t.fragment) : "")
                    }, t
                }(),
                Xp = new $p;

            function Yp(t) {
                return t.segments.map(function(t) {
                    return oh(t)
                }).join("/")
            }

            function Jp(t) {
                return encodeURIComponent(t).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
            }

            function th(t) {
                return Jp(t).replace(/%3B/gi, ";")
            }

            function eh(t) {
                return Jp(t).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
            }

            function nh(t) {
                return decodeURIComponent(t)
            }

            function rh(t) {
                return nh(t.replace(/\+/g, "%20"))
            }

            function oh(t) {
                return "" + eh(t.path) + (e = t.parameters, Object.keys(e).map(function(t) {
                    return ";" + eh(t) + "=" + eh(e[t])
                }).join(""));
                var e
            }
            var ih = /^[^\/()?;=#]+/;

            function ah(t) {
                var e = t.match(ih);
                return e ? e[0] : ""
            }
            var uh = /^[^=?&#]+/,
                sh = /^[^?&#]+/,
                ch = function() {
                    function t(t) {
                        this.url = t, this.remaining = t
                    }
                    return t.prototype.parseRootSegment = function() {
                        return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Zp([], {}) : new Zp([], this.parseChildren())
                    }, t.prototype.parseQueryParams = function() {
                        var t = {};
                        if (this.consumeOptional("?"))
                            do {
                                this.parseQueryParam(t)
                            } while (this.consumeOptional("&"));
                        return t
                    }, t.prototype.parseFragment = function() {
                        return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
                    }, t.prototype.parseChildren = function() {
                        if ("" === this.remaining) return {};
                        this.consumeOptional("/");
                        var t = [];
                        for (this.peekStartsWith("(") || t.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), t.push(this.parseSegment());
                        var e = {};
                        this.peekStartsWith("/(") && (this.capture("/"), e = this.parseParens(!0));
                        var n = {};
                        return this.peekStartsWith("(") && (n = this.parseParens(!1)), (t.length > 0 || Object.keys(e).length > 0) && (n[kp] = new Zp(t, e)), n
                    }, t.prototype.parseSegment = function() {
                        var t = ah(this.remaining);
                        if ("" === t && this.peekStartsWith(";")) throw new Error("Empty path url segment cannot have parameters: '" + this.remaining + "'.");
                        return this.capture(t), new Gp(nh(t), this.parseMatrixParams())
                    }, t.prototype.parseMatrixParams = function() {
                        for (var t = {}; this.consumeOptional(";");) this.parseParam(t);
                        return t
                    }, t.prototype.parseParam = function(t) {
                        var e = ah(this.remaining);
                        if (e) {
                            this.capture(e);
                            var n = "";
                            if (this.consumeOptional("=")) {
                                var r = ah(this.remaining);
                                r && this.capture(n = r)
                            }
                            t[nh(e)] = nh(n)
                        }
                    }, t.prototype.parseQueryParam = function(t) {
                        var e, n = (e = this.remaining.match(uh)) ? e[0] : "";
                        if (n) {
                            this.capture(n);
                            var r = "";
                            if (this.consumeOptional("=")) {
                                var o = function(t) {
                                    var e = t.match(sh);
                                    return e ? e[0] : ""
                                }(this.remaining);
                                o && this.capture(r = o)
                            }
                            var i = rh(n),
                                a = rh(r);
                            if (t.hasOwnProperty(i)) {
                                var u = t[i];
                                Array.isArray(u) || (t[i] = u = [u]), u.push(a)
                            } else t[i] = a
                        }
                    }, t.prototype.parseParens = function(t) {
                        var e = {};
                        for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
                            var n = ah(this.remaining),
                                r = this.remaining[n.length];
                            if ("/" !== r && ")" !== r && ";" !== r) throw new Error("Cannot parse url '" + this.url + "'");
                            var o = void 0;
                            n.indexOf(":") > -1 ? (o = n.substr(0, n.indexOf(":")), this.capture(o), this.capture(":")) : t && (o = kp);
                            var i = this.parseChildren();
                            e[o] = 1 === Object.keys(i).length ? i[kp] : new Zp([], i), this.consumeOptional("//")
                        }
                        return e
                    }, t.prototype.peekStartsWith = function(t) {
                        return this.remaining.startsWith(t)
                    }, t.prototype.consumeOptional = function(t) {
                        return !!this.peekStartsWith(t) && (this.remaining = this.remaining.substring(t.length), !0)
                    }, t.prototype.capture = function(t) {
                        if (!this.consumeOptional(t)) throw new Error('Expected "' + t + '".')
                    }, t
                }(),
                lh = function() {
                    function t(t) {
                        this._root = t
                    }
                    return Object.defineProperty(t.prototype, "root", {
                        get: function() {
                            return this._root.value
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.parent = function(t) {
                        var e = this.pathFromRoot(t);
                        return e.length > 1 ? e[e.length - 2] : null
                    }, t.prototype.children = function(t) {
                        var e = fh(t, this._root);
                        return e ? e.children.map(function(t) {
                            return t.value
                        }) : []
                    }, t.prototype.firstChild = function(t) {
                        var e = fh(t, this._root);
                        return e && e.children.length > 0 ? e.children[0].value : null
                    }, t.prototype.siblings = function(t) {
                        var e = ph(t, this._root);
                        return e.length < 2 ? [] : e[e.length - 2].children.map(function(t) {
                            return t.value
                        }).filter(function(e) {
                            return e !== t
                        })
                    }, t.prototype.pathFromRoot = function(t) {
                        return ph(t, this._root).map(function(t) {
                            return t.value
                        })
                    }, t
                }();

            function fh(t, e) {
                var n, r;
                if (t === e.value) return e;
                try {
                    for (var o = s(e.children), i = o.next(); !i.done; i = o.next()) {
                        var a = fh(t, i.value);
                        if (a) return a
                    }
                } catch (u) {
                    n = {
                        error: u
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return null
            }

            function ph(t, e) {
                var n, r;
                if (t === e.value) return [e];
                try {
                    for (var o = s(e.children), i = o.next(); !i.done; i = o.next()) {
                        var a = ph(t, i.value);
                        if (a.length) return a.unshift(e), a
                    }
                } catch (u) {
                    n = {
                        error: u
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return []
            }
            var hh = function() {
                function t(t, e) {
                    this.value = t, this.children = e
                }
                return t.prototype.toString = function() {
                    return "TreeNode(" + this.value + ")"
                }, t
            }();

            function dh(t) {
                var e = {};
                return t && t.children.forEach(function(t) {
                    return e[t.value.outlet] = t
                }), e
            }
            var vh = function(t) {
                function e(e, n) {
                    var r = t.call(this, e) || this;
                    return r.snapshot = n, _h(r, e), r
                }
                return o(e, t), e.prototype.toString = function() {
                    return this.snapshot.toString()
                }, e
            }(lh);

            function gh(t, e) {
                var n = function(t, e) {
                        var n = new wh([], {}, {}, "", {}, kp, e, null, t.root, -1, {});
                        return new bh("", new hh(n, []))
                    }(t, e),
                    r = new ll([new Gp("", {})]),
                    o = new ll({}),
                    i = new ll({}),
                    a = new ll({}),
                    u = new ll(""),
                    s = new yh(r, o, a, u, i, kp, e, n.root);
                return s.snapshot = n.root, new vh(new hh(s, []), n)
            }
            var yh = function() {
                function t(t, e, n, r, o, i, a, u) {
                    this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this._futureSnapshot = u
                }
                return Object.defineProperty(t.prototype, "routeConfig", {
                    get: function() {
                        return this._futureSnapshot.routeConfig
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "root", {
                    get: function() {
                        return this._routerState.root
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "parent", {
                    get: function() {
                        return this._routerState.parent(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "firstChild", {
                    get: function() {
                        return this._routerState.firstChild(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "children", {
                    get: function() {
                        return this._routerState.children(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "pathFromRoot", {
                    get: function() {
                        return this._routerState.pathFromRoot(this)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "paramMap", {
                    get: function() {
                        return this._paramMap || (this._paramMap = this.params.pipe(tt(function(t) {
                            return Rp(t)
                        }))), this._paramMap
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(t.prototype, "queryParamMap", {
                    get: function() {
                        return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe(tt(function(t) {
                            return Rp(t)
                        }))), this._queryParamMap
                    },
                    enumerable: !0,
                    configurable: !0
                }), t.prototype.toString = function() {
                    return this.snapshot ? this.snapshot.toString() : "Future(" + this._futureSnapshot + ")"
                }, t
            }();

            function mh(t, e) {
                void 0 === e && (e = "emptyOnly");
                var n = t.pathFromRoot,
                    r = 0;
                if ("always" !== e)
                    for (r = n.length - 1; r >= 1;) {
                        var o = n[r],
                            a = n[r - 1];
                        if (o.routeConfig && "" === o.routeConfig.path) r--;
                        else {
                            if (a.component) break;
                            r--
                        }
                    }
                return function(t) {
                    return t.reduce(function(t, e) {
                        return {
                            params: i({}, t.params, e.params),
                            data: i({}, t.data, e.data),
                            resolve: i({}, t.resolve, e._resolvedData)
                        }
                    }, {
                        params: {},
                        data: {},
                        resolve: {}
                    })
                }(n.slice(r))
            }
            var wh = function() {
                    function t(t, e, n, r, o, i, a, u, s, c, l) {
                        this.url = t, this.params = e, this.queryParams = n, this.fragment = r, this.data = o, this.outlet = i, this.component = a, this.routeConfig = u, this._urlSegment = s, this._lastPathIndex = c, this._resolve = l
                    }
                    return Object.defineProperty(t.prototype, "root", {
                        get: function() {
                            return this._routerState.root
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "parent", {
                        get: function() {
                            return this._routerState.parent(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "firstChild", {
                        get: function() {
                            return this._routerState.firstChild(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "children", {
                        get: function() {
                            return this._routerState.children(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "pathFromRoot", {
                        get: function() {
                            return this._routerState.pathFromRoot(this)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "paramMap", {
                        get: function() {
                            return this._paramMap || (this._paramMap = Rp(this.params)), this._paramMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "queryParamMap", {
                        get: function() {
                            return this._queryParamMap || (this._queryParamMap = Rp(this.queryParams)), this._queryParamMap
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.toString = function() {
                        return "Route(url:'" + this.url.map(function(t) {
                            return t.toString()
                        }).join("/") + "', path:'" + (this.routeConfig ? this.routeConfig.path : "") + "')"
                    }, t
                }(),
                bh = function(t) {
                    function e(e, n) {
                        var r = t.call(this, n) || this;
                        return r.url = e, _h(r, n), r
                    }
                    return o(e, t), e.prototype.toString = function() {
                        return Ch(this._root)
                    }, e
                }(lh);

            function _h(t, e) {
                e.value._routerState = t, e.children.forEach(function(e) {
                    return _h(t, e)
                })
            }

            function Ch(t) {
                var e = t.children.length > 0 ? " { " + t.children.map(Ch).join(", ") + " } " : "";
                return "" + t.value + e
            }

            function xh(t) {
                if (t.snapshot) {
                    var e = t.snapshot,
                        n = t._futureSnapshot;
                    t.snapshot = n, Vp(e.queryParams, n.queryParams) || t.queryParams.next(n.queryParams), e.fragment !== n.fragment && t.fragment.next(n.fragment), Vp(e.params, n.params) || t.params.next(n.params),
                        function(t, e) {
                            if (t.length !== e.length) return !1;
                            for (var n = 0; n < t.length; ++n)
                                if (!Vp(t[n], e[n])) return !1;
                            return !0
                        }(e.url, n.url) || t.url.next(n.url), Vp(e.data, n.data) || t.data.next(n.data)
                } else t.snapshot = t._futureSnapshot, t.data.next(t._futureSnapshot.data)
            }

            function Sh(t, e) {
                var n, r;
                return Vp(t.params, e.params) && Qp(n = t.url, r = e.url) && n.every(function(t, e) {
                    return Vp(t.parameters, r[e].parameters)
                }) && !(!t.parent != !e.parent) && (!t.parent || Sh(t.parent, e.parent))
            }

            function Eh(t) {
                return "object" == typeof t && null != t && !t.outlets && !t.segmentPath
            }

            function Th(t, e, n, r, o) {
                var i = {};
                return r && Fp(r, function(t, e) {
                    i[e] = Array.isArray(t) ? t.map(function(t) {
                        return "" + t
                    }) : "" + t
                }), new qp(n.root === t ? e : function t(e, n, r) {
                    var o = {};
                    return Fp(e.children, function(e, i) {
                        o[i] = e === n ? r : t(e, n, r)
                    }), new Zp(e.segments, o)
                }(n.root, t, e), i, o)
            }
            var kh = function() {
                    function t(t, e, n) {
                        if (this.isAbsolute = t, this.numberOfDoubleDots = e, this.commands = n, t && n.length > 0 && Eh(n[0])) throw new Error("Root segment cannot have matrix parameters");
                        var r = n.find(function(t) {
                            return "object" == typeof t && null != t && t.outlets
                        });
                        if (r && r !== Lp(n)) throw new Error("{outlets:{}} has to be the last command")
                    }
                    return t.prototype.toRoot = function() {
                        return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
                    }, t
                }(),
                Ih = function() {
                    return function(t, e, n) {
                        this.segmentGroup = t, this.processChildren = e, this.index = n
                    }
                }();

            function Rh(t) {
                return "object" == typeof t && null != t && t.outlets ? t.outlets[kp] : "" + t
            }

            function Ph(t, e, n) {
                if (t || (t = new Zp([], {})), 0 === t.segments.length && t.hasChildren()) return Ah(t, e, n);
                var r = function(t, e, n) {
                        for (var r = 0, o = e, i = {
                                match: !1,
                                pathIndex: 0,
                                commandIndex: 0
                            }; o < t.segments.length;) {
                            if (r >= n.length) return i;
                            var a = t.segments[o],
                                u = Rh(n[r]),
                                s = r < n.length - 1 ? n[r + 1] : null;
                            if (o > 0 && void 0 === u) break;
                            if (u && s && "object" == typeof s && void 0 === s.outlets) {
                                if (!jh(u, s, a)) return i;
                                r += 2
                            } else {
                                if (!jh(u, {}, a)) return i;
                                r++
                            }
                            o++
                        }
                        return {
                            match: !0,
                            pathIndex: o,
                            commandIndex: r
                        }
                    }(t, e, n),
                    o = n.slice(r.commandIndex);
                if (r.match && r.pathIndex < t.segments.length) {
                    var i = new Zp(t.segments.slice(0, r.pathIndex), {});
                    return i.children[kp] = new Zp(t.segments.slice(r.pathIndex), t.children), Ah(i, 0, o)
                }
                return r.match && 0 === o.length ? new Zp(t.segments, {}) : r.match && !t.hasChildren() ? Oh(t, e, n) : r.match ? Ah(t, 0, o) : Oh(t, e, n)
            }

            function Ah(t, e, n) {
                if (0 === n.length) return new Zp(t.segments, {});
                var r = function(t) {
                        var e, n;
                        return "object" != typeof t[0] ? ((e = {})[kp] = t, e) : void 0 === t[0].outlets ? ((n = {})[kp] = t, n) : t[0].outlets
                    }(n),
                    o = {};
                return Fp(r, function(n, r) {
                    null !== n && (o[r] = Ph(t.children[r], e, n))
                }), Fp(t.children, function(t, e) {
                    void 0 === r[e] && (o[e] = t)
                }), new Zp(t.segments, o)
            }

            function Oh(t, e, n) {
                for (var r = t.segments.slice(0, e), o = 0; o < n.length;) {
                    if ("object" == typeof n[o] && void 0 !== n[o].outlets) {
                        var i = Nh(n[o].outlets);
                        return new Zp(r, i)
                    }
                    if (0 === o && Eh(n[0])) r.push(new Gp(t.segments[e].path, n[0])), o++;
                    else {
                        var a = Rh(n[o]),
                            u = o < n.length - 1 ? n[o + 1] : null;
                        a && u && Eh(u) ? (r.push(new Gp(a, Dh(u))), o += 2) : (r.push(new Gp(a, {})), o++)
                    }
                }
                return new Zp(r, {})
            }

            function Nh(t) {
                var e = {};
                return Fp(t, function(t, n) {
                    null !== t && (e[n] = Oh(new Zp([], {}), 0, t))
                }), e
            }

            function Dh(t) {
                var e = {};
                return Fp(t, function(t, n) {
                    return e[n] = "" + t
                }), e
            }

            function jh(t, e, n) {
                return t == n.path && Vp(e, n.parameters)
            }
            var Mh = function() {
                function t(t, e, n, r) {
                    this.routeReuseStrategy = t, this.futureState = e, this.currState = n, this.forwardEvent = r
                }
                return t.prototype.activate = function(t) {
                    var e = this.futureState._root,
                        n = this.currState ? this.currState._root : null;
                    this.deactivateChildRoutes(e, n, t), xh(this.futureState.root), this.activateChildRoutes(e, n, t)
                }, t.prototype.deactivateChildRoutes = function(t, e, n) {
                    var r = this,
                        o = dh(e);
                    t.children.forEach(function(t) {
                        var e = t.value.outlet;
                        r.deactivateRoutes(t, o[e], n), delete o[e]
                    }), Fp(o, function(t, e) {
                        r.deactivateRouteAndItsChildren(t, n)
                    })
                }, t.prototype.deactivateRoutes = function(t, e, n) {
                    var r = t.value,
                        o = e ? e.value : null;
                    if (r === o)
                        if (r.component) {
                            var i = n.getContext(r.outlet);
                            i && this.deactivateChildRoutes(t, e, i.children)
                        } else this.deactivateChildRoutes(t, e, n);
                    else o && this.deactivateRouteAndItsChildren(e, n)
                }, t.prototype.deactivateRouteAndItsChildren = function(t, e) {
                    this.routeReuseStrategy.shouldDetach(t.value.snapshot) ? this.detachAndStoreRouteSubtree(t, e) : this.deactivateRouteAndOutlet(t, e)
                }, t.prototype.detachAndStoreRouteSubtree = function(t, e) {
                    var n = e.getContext(t.value.outlet);
                    if (n && n.outlet) {
                        var r = n.outlet.detach(),
                            o = n.children.onOutletDeactivated();
                        this.routeReuseStrategy.store(t.value.snapshot, {
                            componentRef: r,
                            route: t,
                            contexts: o
                        })
                    }
                }, t.prototype.deactivateRouteAndOutlet = function(t, e) {
                    var n = this,
                        r = e.getContext(t.value.outlet);
                    if (r) {
                        var o = dh(t),
                            i = t.value.component ? r.children : e;
                        Fp(o, function(t, e) {
                            return n.deactivateRouteAndItsChildren(t, i)
                        }), r.outlet && (r.outlet.deactivate(), r.children.onOutletDeactivated())
                    }
                }, t.prototype.activateChildRoutes = function(t, e, n) {
                    var r = this,
                        o = dh(e);
                    t.children.forEach(function(t) {
                        r.activateRoutes(t, o[t.value.outlet], n), r.forwardEvent(new Sp(t.value.snapshot))
                    }), t.children.length && this.forwardEvent(new Cp(t.value.snapshot))
                }, t.prototype.activateRoutes = function(t, e, n) {
                    var r = t.value,
                        o = e ? e.value : null;
                    if (xh(r), r === o)
                        if (r.component) {
                            var i = n.getOrCreateContext(r.outlet);
                            this.activateChildRoutes(t, e, i.children)
                        } else this.activateChildRoutes(t, e, n);
                    else if (r.component)
                        if (i = n.getOrCreateContext(r.outlet), this.routeReuseStrategy.shouldAttach(r.snapshot)) {
                            var a = this.routeReuseStrategy.retrieve(r.snapshot);
                            this.routeReuseStrategy.store(r.snapshot, null), i.children.onOutletReAttached(a.contexts), i.attachRef = a.componentRef, i.route = a.route.value, i.outlet && i.outlet.attach(a.componentRef, a.route.value), Uh(a.route)
                        } else {
                            var u = function(t) {
                                    for (var e = r.snapshot.parent; e; e = e.parent) {
                                        var n = e.routeConfig;
                                        if (n && n._loadedConfig) return n._loadedConfig;
                                        if (n && n.component) return null
                                    }
                                    return null
                                }(),
                                s = u ? u.module.componentFactoryResolver : null;
                            i.attachRef = null, i.route = r, i.resolver = s, i.outlet && i.outlet.activateWith(r, s), this.activateChildRoutes(t, null, i.children)
                        }
                    else this.activateChildRoutes(t, null, n)
                }, t
            }();

            function Uh(t) {
                xh(t.value), t.children.forEach(Uh)
            }

            function Vh(t) {
                return "function" == typeof t
            }

            function Hh(t) {
                return t instanceof qp
            }
            var Lh = function() {
                    return function(t) {
                        this.segmentGroup = t || null
                    }
                }(),
                Fh = function() {
                    return function(t) {
                        this.urlTree = t
                    }
                }();

            function zh(t) {
                return new N(function(e) {
                    return e.error(new Lh(t))
                })
            }

            function Bh(t) {
                return new N(function(e) {
                    return e.error(new Fh(t))
                })
            }

            function qh(t) {
                return new N(function(e) {
                    return e.error(new Error("Only absolute redirects can have named outlets. redirectTo: '" + t + "'"))
                })
            }
            var Zh = function() {
                function t(t, e, n, r, o) {
                    this.configLoader = e, this.urlSerializer = n, this.urlTree = r, this.config = o, this.allowRedirects = !0, this.ngModule = t.get(Qr)
                }
                return t.prototype.apply = function() {
                    var t = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, this.urlTree.root, kp).pipe(tt(function(e) {
                        return t.createUrlTree(e, t.urlTree.queryParams, t.urlTree.fragment)
                    })).pipe(jl(function(e) {
                        if (e instanceof Fh) return t.allowRedirects = !1, t.match(e.urlTree);
                        if (e instanceof Lh) throw t.noMatchError(e);
                        throw e
                    }))
                }, t.prototype.match = function(t) {
                    var e = this;
                    return this.expandSegmentGroup(this.ngModule, this.config, t.root, kp).pipe(tt(function(n) {
                        return e.createUrlTree(n, t.queryParams, t.fragment)
                    })).pipe(jl(function(t) {
                        if (t instanceof Lh) throw e.noMatchError(t);
                        throw t
                    }))
                }, t.prototype.noMatchError = function(t) {
                    return new Error("Cannot match any routes. URL Segment: '" + t.segmentGroup + "'")
                }, t.prototype.createUrlTree = function(t, e, n) {
                    var r, o = t.segments.length > 0 ? new Zp([], ((r = {})[kp] = t, r)) : t;
                    return new qp(o, e, n)
                }, t.prototype.expandSegmentGroup = function(t, e, n, r) {
                    return 0 === n.segments.length && n.hasChildren() ? this.expandChildren(t, e, n).pipe(tt(function(t) {
                        return new Zp([], t)
                    })) : this.expandSegment(t, n, e, n.segments, r, !0)
                }, t.prototype.expandChildren = function(t, e, n) {
                    var r = this;
                    return function(n, o) {
                        if (0 === Object.keys(n).length) return cl({});
                        var i = [],
                            a = [],
                            u = {};
                        return Fp(n, function(n, o) {
                            var s, c, l = (s = o, c = n, r.expandSegmentGroup(t, e, c, s)).pipe(tt(function(t) {
                                return u[o] = t
                            }));
                            o === kp ? i.push(l) : a.push(l)
                        }), cl.apply(null, i.concat(a)).pipe(yl(), Dl(), tt(function() {
                            return u
                        }))
                    }(n.children)
                }, t.prototype.expandSegment = function(t, e, n, r, o, i) {
                    var a = this;
                    return cl.apply(void 0, l(n)).pipe(tt(function(u) {
                        return a.expandSegmentAgainstRoute(t, e, n, u, r, o, i).pipe(jl(function(t) {
                            if (t instanceof Lh) return cl(null);
                            throw t
                        }))
                    }), yl(), Fl(function(t) {
                        return !!t
                    }), jl(function(t, n) {
                        if (t instanceof pl || "EmptyError" === t.name) {
                            if (a.noLeftoversInUrl(e, r, o)) return cl(new Zp([], {}));
                            throw new Lh(e)
                        }
                        throw t
                    }))
                }, t.prototype.noLeftoversInUrl = function(t, e, n) {
                    return 0 === e.length && !t.children[n]
                }, t.prototype.expandSegmentAgainstRoute = function(t, e, n, r, o, i, a) {
                    return Kh(r) !== i ? zh(e) : void 0 === r.redirectTo ? this.matchSegmentAgainstRoute(t, e, r, o) : a && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i) : zh(e)
                }, t.prototype.expandSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
                    return "**" === r.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(t, n, r, i) : this.expandRegularSegmentAgainstRouteUsingRedirect(t, e, n, r, o, i)
                }, t.prototype.expandWildCardWithParamsAgainstRouteUsingRedirect = function(t, e, n, r) {
                    var o = this,
                        i = this.applyRedirectCommands([], n.redirectTo, {});
                    return n.redirectTo.startsWith("/") ? Bh(i) : this.lineralizeSegments(n, i).pipe(it(function(n) {
                        var i = new Zp(n, {});
                        return o.expandSegment(t, i, e, n, r, !1)
                    }))
                }, t.prototype.expandRegularSegmentAgainstRouteUsingRedirect = function(t, e, n, r, o, i) {
                    var a = this,
                        u = Gh(e, r, o),
                        s = u.consumedSegments,
                        c = u.lastChild,
                        l = u.positionalParamSegments;
                    if (!u.matched) return zh(e);
                    var f = this.applyRedirectCommands(s, r.redirectTo, l);
                    return r.redirectTo.startsWith("/") ? Bh(f) : this.lineralizeSegments(r, f).pipe(it(function(r) {
                        return a.expandSegment(t, e, n, r.concat(o.slice(c)), i, !1)
                    }))
                }, t.prototype.matchSegmentAgainstRoute = function(t, e, n, r) {
                    var o = this;
                    if ("**" === n.path) return n.loadChildren ? this.configLoader.load(t.injector, n).pipe(tt(function(t) {
                        return n._loadedConfig = t, new Zp(r, {})
                    })) : cl(new Zp(r, {}));
                    var a = Gh(e, n, r),
                        u = a.consumedSegments,
                        c = a.lastChild;
                    if (!a.matched) return zh(e);
                    var l = r.slice(c);
                    return this.getChildConfig(t, n, r).pipe(it(function(t) {
                        var n = t.module,
                            r = t.routes,
                            a = function(t, e, n, r) {
                                return n.length > 0 && function(t, e, n) {
                                    return r.some(function(n) {
                                        return Wh(t, e, n) && Kh(n) !== kp
                                    })
                                }(t, n) ? {
                                    segmentGroup: Qh(new Zp(e, function(t, e) {
                                        var n, r, o = {};
                                        o[kp] = e;
                                        try {
                                            for (var i = s(t), a = i.next(); !a.done; a = i.next()) {
                                                var u = a.value;
                                                "" === u.path && Kh(u) !== kp && (o[Kh(u)] = new Zp([], {}))
                                            }
                                        } catch (c) {
                                            n = {
                                                error: c
                                            }
                                        } finally {
                                            try {
                                                a && !a.done && (r = i.return) && r.call(i)
                                            } finally {
                                                if (n) throw n.error
                                            }
                                        }
                                        return o
                                    }(r, new Zp(n, t.children)))),
                                    slicedSegments: []
                                } : 0 === n.length && function(t, e, n) {
                                    return r.some(function(n) {
                                        return Wh(t, e, n)
                                    })
                                }(t, n) ? {
                                    segmentGroup: Qh(new Zp(t.segments, function(t, e, n, r) {
                                        var o, a, u = {};
                                        try {
                                            for (var c = s(n), l = c.next(); !l.done; l = c.next()) {
                                                var f = l.value;
                                                Wh(t, e, f) && !r[Kh(f)] && (u[Kh(f)] = new Zp([], {}))
                                            }
                                        } catch (p) {
                                            o = {
                                                error: p
                                            }
                                        } finally {
                                            try {
                                                l && !l.done && (a = c.return) && a.call(c)
                                            } finally {
                                                if (o) throw o.error
                                            }
                                        }
                                        return i({}, r, u)
                                    }(t, n, r, t.children))),
                                    slicedSegments: n
                                } : {
                                    segmentGroup: t,
                                    slicedSegments: n
                                }
                            }(e, u, l, r),
                            c = a.segmentGroup,
                            f = a.slicedSegments;
                        return 0 === f.length && c.hasChildren() ? o.expandChildren(n, r, c).pipe(tt(function(t) {
                            return new Zp(u, t)
                        })) : 0 === r.length && 0 === f.length ? cl(new Zp(u, {})) : o.expandSegment(n, c, r, f, kp, !0).pipe(tt(function(t) {
                            return new Zp(u.concat(t.segments), t.children)
                        }))
                    }))
                }, t.prototype.getChildConfig = function(t, e, n) {
                    var r = this;
                    return e.children ? cl(new Np(e.children, t)) : e.loadChildren ? void 0 !== e._loadedConfig ? cl(e._loadedConfig) : function(t, e, n) {
                        var r, o = e.canLoad;
                        return o && 0 !== o.length ? ot(o).pipe(tt(function(r) {
                            var o, i = t.get(r);
                            if (function(t) {
                                    return t && Vh(t.canLoad)
                                }(i)) o = i.canLoad(e, n);
                            else {
                                if (!Vh(i)) throw new Error("Invalid CanLoad guard");
                                o = i(e, n)
                            }
                            return zp(o)
                        })).pipe(yl(), (r = function(t) {
                            return !0 === t
                        }, function(t) {
                            return t.lift(new zl(r, void 0, t))
                        })) : cl(!0)
                    }(t.injector, e, n).pipe(it(function(n) {
                        return n ? r.configLoader.load(t.injector, e).pipe(tt(function(t) {
                            return e._loadedConfig = t, t
                        })) : function(t) {
                            return new N(function(e) {
                                return e.error(Ap("Cannot load children because the guard of the route \"path: '" + t.path + "'\" returned false"))
                            })
                        }(e)
                    })) : cl(new Np([], t))
                }, t.prototype.lineralizeSegments = function(t, e) {
                    for (var n = [], r = e.root;;) {
                        if (n = n.concat(r.segments), 0 === r.numberOfChildren) return cl(n);
                        if (r.numberOfChildren > 1 || !r.children[kp]) return qh(t.redirectTo);
                        r = r.children[kp]
                    }
                }, t.prototype.applyRedirectCommands = function(t, e, n) {
                    return this.applyRedirectCreatreUrlTree(e, this.urlSerializer.parse(e), t, n)
                }, t.prototype.applyRedirectCreatreUrlTree = function(t, e, n, r) {
                    var o = this.createSegmentGroup(t, e.root, n, r);
                    return new qp(o, this.createQueryParams(e.queryParams, this.urlTree.queryParams), e.fragment)
                }, t.prototype.createQueryParams = function(t, e) {
                    var n = {};
                    return Fp(t, function(t, r) {
                        if ("string" == typeof t && t.startsWith(":")) {
                            var o = t.substring(1);
                            n[r] = e[o]
                        } else n[r] = t
                    }), n
                }, t.prototype.createSegmentGroup = function(t, e, n, r) {
                    var o = this,
                        i = this.createSegments(t, e.segments, n, r),
                        a = {};
                    return Fp(e.children, function(e, i) {
                        a[i] = o.createSegmentGroup(t, e, n, r)
                    }), new Zp(i, a)
                }, t.prototype.createSegments = function(t, e, n, r) {
                    var o = this;
                    return e.map(function(e) {
                        return e.path.startsWith(":") ? o.findPosParam(t, e, r) : o.findOrReturn(e, n)
                    })
                }, t.prototype.findPosParam = function(t, e, n) {
                    var r = n[e.path.substring(1)];
                    if (!r) throw new Error("Cannot redirect to '" + t + "'. Cannot find '" + e.path + "'.");
                    return r
                }, t.prototype.findOrReturn = function(t, e) {
                    var n, r, o = 0;
                    try {
                        for (var i = s(e), a = i.next(); !a.done; a = i.next()) {
                            var u = a.value;
                            if (u.path === t.path) return e.splice(o), u;
                            o++
                        }
                    } catch (c) {
                        n = {
                            error: c
                        }
                    } finally {
                        try {
                            a && !a.done && (r = i.return) && r.call(i)
                        } finally {
                            if (n) throw n.error
                        }
                    }
                    return t
                }, t
            }();

            function Gh(t, e, n) {
                if ("" === e.path) return "full" === e.pathMatch && (t.hasChildren() || n.length > 0) ? {
                    matched: !1,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                } : {
                    matched: !0,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                };
                var r = (e.matcher || Op)(n, t, e);
                return r ? {
                    matched: !0,
                    consumedSegments: r.consumed,
                    lastChild: r.consumed.length,
                    positionalParamSegments: r.posParams
                } : {
                    matched: !1,
                    consumedSegments: [],
                    lastChild: 0,
                    positionalParamSegments: {}
                }
            }

            function Qh(t) {
                if (1 === t.numberOfChildren && t.children[kp]) {
                    var e = t.children[kp];
                    return new Zp(t.segments.concat(e.segments), e.children)
                }
                return t
            }

            function Wh(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 !== n.redirectTo
            }

            function Kh(t) {
                return t.outlet || kp
            }
            var $h = function() {
                    return function(t) {
                        this.path = t, this.route = this.path[this.path.length - 1]
                    }
                }(),
                Xh = function() {
                    return function(t, e) {
                        this.component = t, this.route = e
                    }
                }();

            function Yh(t, e, n) {
                var r = function(t) {
                    if (!t) return null;
                    for (var e = t.parent; e; e = e.parent) {
                        var n = e.routeConfig;
                        if (n && n._loadedConfig) return n._loadedConfig
                    }
                    return null
                }(e);
                return (r ? r.module.injector : n).get(t)
            }

            function Jh(t, e, n, r, o) {
                void 0 === o && (o = {
                    canDeactivateChecks: [],
                    canActivateChecks: []
                });
                var i = dh(e);
                return t.children.forEach(function(t) {
                    ! function(t, e, n, r, o) {
                        void 0 === o && (o = {
                            canDeactivateChecks: [],
                            canActivateChecks: []
                        });
                        var i = t.value,
                            a = e ? e.value : null,
                            u = n ? n.getContext(t.value.outlet) : null;
                        if (a && i.routeConfig === a.routeConfig) {
                            var s = function(t, e, n) {
                                if ("function" == typeof n) return n(t, e);
                                switch (n) {
                                    case "pathParamsChange":
                                        return !Qp(t.url, e.url);
                                    case "pathParamsOrQueryParamsChange":
                                        return !Qp(t.url, e.url) || !Vp(t.queryParams, e.queryParams);
                                    case "always":
                                        return !0;
                                    case "paramsOrQueryParamsChange":
                                        return !Sh(t, e) || !Vp(t.queryParams, e.queryParams);
                                    case "paramsChange":
                                    default:
                                        return !Sh(t, e)
                                }
                            }(a, i, i.routeConfig.runGuardsAndResolvers);
                            s ? o.canActivateChecks.push(new $h(r)) : (i.data = a.data, i._resolvedData = a._resolvedData), Jh(t, e, i.component ? u ? u.children : null : n, r, o), s && o.canDeactivateChecks.push(new Xh(u && u.outlet && u.outlet.component || null, a))
                        } else a && td(e, u, o), o.canActivateChecks.push(new $h(r)), Jh(t, null, i.component ? u ? u.children : null : n, r, o)
                    }(t, i[t.value.outlet], n, r.concat([t.value]), o), delete i[t.value.outlet]
                }), Fp(i, function(t, e) {
                    return td(t, n.getContext(e), o)
                }), o
            }

            function td(t, e, n) {
                var r = dh(t),
                    o = t.value;
                Fp(r, function(t, r) {
                    td(t, o.component ? e ? e.children.getContext(r) : null : e, n)
                }), n.canDeactivateChecks.push(new Xh(o.component && e && e.outlet && e.outlet.isActivated ? e.outlet.component : null, o))
            }
            var ed = Symbol("INITIAL_VALUE");

            function nd() {
                return ql(function(t) {
                    return (function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        var n = null,
                            r = null;
                        return F(t[t.length - 1]) && (r = t.pop()), "function" == typeof t[t.length - 1] && (n = t.pop()), 1 === t.length && f(t[0]) && (t = t[0]), rt(t, r).lift(new dl(n))
                    }).apply(void 0, l(t.map(function(t) {
                        return t.pipe(Vl(1), function() {
                            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                            return function(e) {
                                var n = t[t.length - 1];
                                F(n) ? t.pop() : n = null;
                                var r = t.length;
                                return function() {
                                    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                                    return 1 === t.length || 2 === t.length && F(t[1]) ? ot(t[0]) : yl()(cl.apply(void 0, t))
                                }(1 !== r || n ? r > 0 ? rt(t, n) : ul(n) : sl(t[0]), e)
                            }
                        }(ed))
                    }))).pipe(Ql(function(t, e) {
                        var n = !1;
                        return e.reduce(function(t, r, o) {
                            if (t !== ed) return t;
                            if (r === ed && (n = !0), !n) {
                                if (!1 === r) return r;
                                if (o === e.length - 1 || Hh(r)) return r
                            }
                            return t
                        }, t)
                    }, ed), ml(function(t) {
                        return t !== ed
                    }), tt(function(t) {
                        return Hh(t) ? t : !0 === t
                    }), Vl(1))
                })
            }

            function rd(t, e) {
                return null !== t && e && e(new xp(t)), cl(!0)
            }

            function od(t, e) {
                return null !== t && e && e(new _p(t)), cl(!0)
            }

            function id(t, e, n) {
                var r = e.routeConfig ? e.routeConfig.canActivate : null;
                return r && 0 !== r.length ? cl(r.map(function(r) {
                    return gl(function() {
                        var o, i = Yh(r, e, n);
                        if (function(t) {
                                return t && Vh(t.canActivate)
                            }(i)) o = zp(i.canActivate(e, t));
                        else {
                            if (!Vh(i)) throw new Error("Invalid CanActivate guard");
                            o = zp(i(e, t))
                        }
                        return o.pipe(Fl())
                    })
                })).pipe(nd()) : cl(!0)
            }

            function ad(t, e, n) {
                var r = e[e.length - 1],
                    o = e.slice(0, e.length - 1).reverse().map(function(t) {
                        return function(t) {
                            var e = t.routeConfig ? t.routeConfig.canActivateChild : null;
                            return e && 0 !== e.length ? {
                                node: t,
                                guards: e
                            } : null
                        }(t)
                    }).filter(function(t) {
                        return null !== t
                    }).map(function(e) {
                        return gl(function() {
                            return cl(e.guards.map(function(o) {
                                var i, a = Yh(o, e.node, n);
                                if (function(t) {
                                        return t && Vh(t.canActivateChild)
                                    }(a)) i = zp(a.canActivateChild(r, t));
                                else {
                                    if (!Vh(a)) throw new Error("Invalid CanActivateChild guard");
                                    i = zp(a(r, t))
                                }
                                return i.pipe(Fl())
                            })).pipe(nd())
                        })
                    });
                return cl(o).pipe(nd())
            }
            var ud = function() {
                    return function() {}
                }(),
                sd = function() {
                    function t(t, e, n, r, o, i) {
                        this.rootComponentType = t, this.config = e, this.urlTree = n, this.url = r, this.paramsInheritanceStrategy = o, this.relativeLinkResolution = i
                    }
                    return t.prototype.recognize = function() {
                        try {
                            var t = fd(this.urlTree.root, [], [], this.config, this.relativeLinkResolution).segmentGroup,
                                e = this.processSegmentGroup(this.config, t, kp),
                                n = new wh([], Object.freeze({}), Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, {}, kp, this.rootComponentType, null, this.urlTree.root, -1, {}),
                                r = new hh(n, e),
                                o = new bh(this.url, r);
                            return this.inheritParamsAndData(o._root), cl(o)
                        } catch (a) {
                            return new N(function(t) {
                                return t.error(a)
                            })
                        }
                    }, t.prototype.inheritParamsAndData = function(t) {
                        var e = this,
                            n = t.value,
                            r = mh(n, this.paramsInheritanceStrategy);
                        n.params = Object.freeze(r.params), n.data = Object.freeze(r.data), t.children.forEach(function(t) {
                            return e.inheritParamsAndData(t)
                        })
                    }, t.prototype.processSegmentGroup = function(t, e, n) {
                        return 0 === e.segments.length && e.hasChildren() ? this.processChildren(t, e) : this.processSegment(t, e, e.segments, n)
                    }, t.prototype.processChildren = function(t, e) {
                        var n, r = this,
                            o = Wp(e, function(e, n) {
                                return r.processSegmentGroup(t, e, n)
                            });
                        return n = {}, o.forEach(function(t) {
                            var e = n[t.value.outlet];
                            if (e) {
                                var r = e.url.map(function(t) {
                                        return t.toString()
                                    }).join("/"),
                                    o = t.value.url.map(function(t) {
                                        return t.toString()
                                    }).join("/");
                                throw new Error("Two segments cannot have the same outlet name: '" + r + "' and '" + o + "'.")
                            }
                            n[t.value.outlet] = t.value
                        }), o.sort(function(t, e) {
                            return t.value.outlet === kp ? -1 : e.value.outlet === kp ? 1 : t.value.outlet.localeCompare(e.value.outlet)
                        }), o
                    }, t.prototype.processSegment = function(t, e, n, r) {
                        var o, i;
                        try {
                            for (var a = s(t), u = a.next(); !u.done; u = a.next()) {
                                var c = u.value;
                                try {
                                    return this.processSegmentAgainstRoute(c, e, n, r)
                                } catch (l) {
                                    if (!(l instanceof ud)) throw l
                                }
                            }
                        } catch (f) {
                            o = {
                                error: f
                            }
                        } finally {
                            try {
                                u && !u.done && (i = a.return) && i.call(a)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        if (this.noLeftoversInUrl(e, n, r)) return [];
                        throw new ud
                    }, t.prototype.noLeftoversInUrl = function(t, e, n) {
                        return 0 === e.length && !t.children[n]
                    }, t.prototype.processSegmentAgainstRoute = function(t, e, n, r) {
                        if (t.redirectTo) throw new ud;
                        if ((t.outlet || kp) !== r) throw new ud;
                        var o, a = [],
                            u = [];
                        if ("**" === t.path) {
                            var s = n.length > 0 ? Lp(n).parameters : {};
                            o = new wh(n, s, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, dd(t), r, t.component, t, cd(e), ld(e) + n.length, vd(t))
                        } else {
                            var c = function(t, e, n) {
                                if ("" === e.path) {
                                    if ("full" === e.pathMatch && (t.hasChildren() || n.length > 0)) throw new ud;
                                    return {
                                        consumedSegments: [],
                                        lastChild: 0,
                                        parameters: {}
                                    }
                                }
                                var r = (e.matcher || Op)(n, t, e);
                                if (!r) throw new ud;
                                var o = {};
                                Fp(r.posParams, function(t, e) {
                                    o[e] = t.path
                                });
                                var a = r.consumed.length > 0 ? i({}, o, r.consumed[r.consumed.length - 1].parameters) : o;
                                return {
                                    consumedSegments: r.consumed,
                                    lastChild: r.consumed.length,
                                    parameters: a
                                }
                            }(e, t, n);
                            a = c.consumedSegments, u = n.slice(c.lastChild), o = new wh(a, c.parameters, Object.freeze(i({}, this.urlTree.queryParams)), this.urlTree.fragment, dd(t), r, t.component, t, cd(e), ld(e) + a.length, vd(t))
                        }
                        var l = function(t) {
                                return t.children ? t.children : t.loadChildren ? t._loadedConfig.routes : []
                            }(t),
                            f = fd(e, a, u, l, this.relativeLinkResolution),
                            p = f.segmentGroup,
                            h = f.slicedSegments;
                        if (0 === h.length && p.hasChildren()) {
                            var d = this.processChildren(l, p);
                            return [new hh(o, d)]
                        }
                        if (0 === l.length && 0 === h.length) return [new hh(o, [])];
                        var v = this.processSegment(l, p, h, kp);
                        return [new hh(o, v)]
                    }, t
                }();

            function cd(t) {
                for (var e = t; e._sourceSegment;) e = e._sourceSegment;
                return e
            }

            function ld(t) {
                for (var e = t, n = e._segmentIndexShift ? e._segmentIndexShift : 0; e._sourceSegment;) n += (e = e._sourceSegment)._segmentIndexShift ? e._segmentIndexShift : 0;
                return n - 1
            }

            function fd(t, e, n, r, o) {
                if (n.length > 0 && function(t, e, n) {
                        return r.some(function(n) {
                            return pd(t, e, n) && hd(n) !== kp
                        })
                    }(t, n)) {
                    var a = new Zp(e, function(t, e, n, r) {
                        var o, i, a = {};
                        a[kp] = r, r._sourceSegment = t, r._segmentIndexShift = e.length;
                        try {
                            for (var u = s(n), c = u.next(); !c.done; c = u.next()) {
                                var l = c.value;
                                if ("" === l.path && hd(l) !== kp) {
                                    var f = new Zp([], {});
                                    f._sourceSegment = t, f._segmentIndexShift = e.length, a[hd(l)] = f
                                }
                            }
                        } catch (p) {
                            o = {
                                error: p
                            }
                        } finally {
                            try {
                                c && !c.done && (i = u.return) && i.call(u)
                            } finally {
                                if (o) throw o.error
                            }
                        }
                        return a
                    }(t, e, r, new Zp(n, t.children)));
                    return a._sourceSegment = t, a._segmentIndexShift = e.length, {
                        segmentGroup: a,
                        slicedSegments: []
                    }
                }
                if (0 === n.length && function(t, e, n) {
                        return r.some(function(n) {
                            return pd(t, e, n)
                        })
                    }(t, n)) {
                    var u = new Zp(t.segments, function(t, e, n, r, o, a) {
                        var u, c, l = {};
                        try {
                            for (var f = s(r), p = f.next(); !p.done; p = f.next()) {
                                var h = p.value;
                                if (pd(t, n, h) && !o[hd(h)]) {
                                    var d = new Zp([], {});
                                    d._sourceSegment = t, d._segmentIndexShift = "legacy" === a ? t.segments.length : e.length, l[hd(h)] = d
                                }
                            }
                        } catch (v) {
                            u = {
                                error: v
                            }
                        } finally {
                            try {
                                p && !p.done && (c = f.return) && c.call(f)
                            } finally {
                                if (u) throw u.error
                            }
                        }
                        return i({}, o, l)
                    }(t, e, n, r, t.children, o));
                    return u._sourceSegment = t, u._segmentIndexShift = e.length, {
                        segmentGroup: u,
                        slicedSegments: n
                    }
                }
                var c = new Zp(t.segments, t.children);
                return c._sourceSegment = t, c._segmentIndexShift = e.length, {
                    segmentGroup: c,
                    slicedSegments: n
                }
            }

            function pd(t, e, n) {
                return (!(t.hasChildren() || e.length > 0) || "full" !== n.pathMatch) && "" === n.path && void 0 === n.redirectTo
            }

            function hd(t) {
                return t.outlet || kp
            }

            function dd(t) {
                return t.data || {}
            }

            function vd(t) {
                return t.resolve || {}
            }

            function gd(t, e, n, r) {
                var o = Yh(t, e, r);
                return zp(o.resolve ? o.resolve(e, n) : o(e, n))
            }

            function yd(t) {
                return function(e) {
                    return e.pipe(ql(function(e) {
                        var n = t(e);
                        return n ? ot(n).pipe(tt(function() {
                            return e
                        })) : ot([e])
                    }))
                }
            }
            var md = function() {
                    return function() {}
                }(),
                wd = function() {
                    function t() {}
                    return t.prototype.shouldDetach = function(t) {
                        return !1
                    }, t.prototype.store = function(t, e) {}, t.prototype.shouldAttach = function(t) {
                        return !1
                    }, t.prototype.retrieve = function(t) {
                        return null
                    }, t.prototype.shouldReuseRoute = function(t, e) {
                        return t.routeConfig === e.routeConfig
                    }, t
                }(),
                bd = new Tt("ROUTES"),
                _d = function() {
                    function t(t, e, n, r) {
                        this.loader = t, this.compiler = e, this.onLoadStartListener = n, this.onLoadEndListener = r
                    }
                    return t.prototype.load = function(t, e) {
                        var n = this;
                        return this.onLoadStartListener && this.onLoadStartListener(e), this.loadModuleFactory(e.loadChildren).pipe(tt(function(r) {
                            n.onLoadEndListener && n.onLoadEndListener(e);
                            var o = r.create(t);
                            return new Np(Hp(o.injector.get(bd)).map(Up), o)
                        }))
                    }, t.prototype.loadModuleFactory = function(t) {
                        var e = this;
                        return "string" == typeof t ? ot(this.loader.load(t)) : zp(t()).pipe(it(function(t) {
                            return t instanceof Wr ? cl(t) : ot(e.compiler.compileModuleAsync(t))
                        }))
                    }, t
                }(),
                Cd = function() {
                    return function() {}
                }(),
                xd = function() {
                    function t() {}
                    return t.prototype.shouldProcessUrl = function(t) {
                        return !0
                    }, t.prototype.extract = function(t) {
                        return t
                    }, t.prototype.merge = function(t, e) {
                        return t
                    }, t
                }();

            function Sd(t) {
                throw t
            }

            function Ed(t, e, n) {
                return e.parse("/")
            }

            function Td(t, e) {
                return cl(null)
            }
            var kd = function() {
                    function t(t, e, n, r, o, i, a, u) {
                        var s = this;
                        this.rootComponentType = t, this.urlSerializer = e, this.rootContexts = n, this.location = r, this.config = u, this.lastSuccessfulNavigation = null, this.currentNavigation = null, this.navigationId = 0, this.isNgZoneEnabled = !1, this.events = new H, this.errorHandler = Sd, this.malformedUriErrorHandler = Ed, this.navigated = !1, this.lastSuccessfulId = -1, this.hooks = {
                            beforePreactivation: Td,
                            afterPreactivation: Td
                        }, this.urlHandlingStrategy = new xd, this.routeReuseStrategy = new wd, this.onSameUrlNavigation = "ignore", this.paramsInheritanceStrategy = "emptyOnly", this.urlUpdateStrategy = "deferred", this.relativeLinkResolution = "legacy", this.ngModule = o.get(Qr), this.console = o.get(si);
                        var c = o.get(xi);
                        this.isNgZoneEnabled = c instanceof xi, this.resetConfig(u), this.currentUrlTree = new qp(new Zp([], {}), {}, null), this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.parseUrl(this.location.path()), this.configLoader = new _d(i, a, function(t) {
                            return s.triggerEvent(new wp(t))
                        }, function(t) {
                            return s.triggerEvent(new bp(t))
                        }), this.routerState = gh(this.currentUrlTree, this.rootComponentType), this.transitions = new ll({
                            id: 0,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.currentUrlTree,
                            extractedUrl: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            urlAfterRedirects: this.urlHandlingStrategy.extract(this.currentUrlTree),
                            rawUrl: this.currentUrlTree,
                            extras: {},
                            resolve: null,
                            reject: null,
                            promise: Promise.resolve(!0),
                            source: "imperative",
                            restoredState: null,
                            currentSnapshot: this.routerState.snapshot,
                            targetSnapshot: null,
                            currentRouterState: this.routerState,
                            targetRouterState: null,
                            guards: {
                                canActivateChecks: [],
                                canDeactivateChecks: []
                            },
                            guardsResult: null
                        }), this.navigations = this.setupNavigations(this.transitions), this.processNavigations()
                    }
                    return t.prototype.setupNavigations = function(t) {
                        var e = this,
                            n = this.events;
                        return t.pipe(ml(function(t) {
                            return 0 !== t.id
                        }), tt(function(t) {
                            return i({}, t, {
                                extractedUrl: e.urlHandlingStrategy.extract(t.rawUrl)
                            })
                        }), Tl(function(t) {
                            e.currentNavigation = {
                                id: t.id,
                                initialUrl: t.currentRawUrl,
                                extractedUrl: t.extractedUrl,
                                trigger: t.source,
                                extras: t.extras,
                                previousNavigation: e.lastSuccessfulNavigation ? i({}, e.lastSuccessfulNavigation, {
                                    previousNavigation: null
                                }) : null
                            }
                        }), ql(function(t) {
                            var r, o, a, u, c = !1,
                                l = !1;
                            return cl(t).pipe(ql(function(t) {
                                var r, o, a, u, s = !e.navigated || t.extractedUrl.toString() !== e.browserUrlTree.toString();
                                if (("reload" === e.onSameUrlNavigation || s) && e.urlHandlingStrategy.shouldProcessUrl(t.rawUrl)) return cl(t).pipe(ql(function(t) {
                                    var r = e.transitions.getValue();
                                    return n.next(new lp(t.id, e.serializeUrl(t.extractedUrl), t.source, t.restoredState)), r !== e.transitions.getValue() ? al : [t]
                                }), ql(function(t) {
                                    return Promise.resolve(t)
                                }), (r = e.ngModule.injector, o = e.configLoader, a = e.urlSerializer, u = e.config, function(t) {
                                    return t.pipe(ql(function(t) {
                                        return function(e, n, r, o, i) {
                                            return new Zh(e, n, r, t.extractedUrl, i).apply()
                                        }(r, o, a, 0, u).pipe(tt(function(e) {
                                            return i({}, t, {
                                                urlAfterRedirects: e
                                            })
                                        }))
                                    }))
                                }), Tl(function(t) {
                                    e.currentNavigation = i({}, e.currentNavigation, {
                                        finalUrl: t.urlAfterRedirects
                                    })
                                }), function(t, n, r, o, a) {
                                    return function(r) {
                                        return r.pipe(it(function(r) {
                                            return function(t, e, n, r, o, i) {
                                                return void 0 === o && (o = "emptyOnly"), void 0 === i && (i = "legacy"), new sd(t, e, n, r, o, i).recognize()
                                            }(t, n, r.urlAfterRedirects, (u = r.urlAfterRedirects, e.serializeUrl(u)), o, a).pipe(tt(function(t) {
                                                return i({}, r, {
                                                    targetSnapshot: t
                                                })
                                            }));
                                            var u
                                        }))
                                    }
                                }(e.rootComponentType, e.config, 0, e.paramsInheritanceStrategy, e.relativeLinkResolution), Tl(function(t) {
                                    "eager" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(t.urlAfterRedirects, !!t.extras.replaceUrl, t.id), e.browserUrlTree = t.urlAfterRedirects)
                                }), Tl(function(t) {
                                    var r = new dp(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                    n.next(r)
                                }));
                                if (s && e.rawUrlTree && e.urlHandlingStrategy.shouldProcessUrl(e.rawUrlTree)) {
                                    var c = t.extractedUrl,
                                        l = t.source,
                                        f = t.restoredState,
                                        p = t.extras,
                                        h = new lp(t.id, e.serializeUrl(c), l, f);
                                    n.next(h);
                                    var d = gh(c, e.rootComponentType).snapshot;
                                    return cl(i({}, t, {
                                        targetSnapshot: d,
                                        urlAfterRedirects: c,
                                        extras: i({}, p, {
                                            skipLocationChange: !1,
                                            replaceUrl: !1
                                        })
                                    }))
                                }
                                return e.rawUrlTree = t.rawUrl, t.resolve(null), al
                            }), yd(function(t) {
                                var n = t.extras;
                                return e.hooks.beforePreactivation(t.targetSnapshot, {
                                    navigationId: t.id,
                                    appliedUrlTree: t.extractedUrl,
                                    rawUrlTree: t.rawUrl,
                                    skipLocationChange: !!n.skipLocationChange,
                                    replaceUrl: !!n.replaceUrl
                                })
                            }), Tl(function(t) {
                                var n = new vp(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                e.triggerEvent(n)
                            }), tt(function(t) {
                                return i({}, t, {
                                    guards: (n = t.targetSnapshot, r = t.currentSnapshot, o = e.rootContexts, a = n._root, Jh(a, r ? r._root : null, o, [a.value]))
                                });
                                var n, r, o, a
                            }), function(t, e) {
                                return function(n) {
                                    return n.pipe(it(function(n) {
                                        var r = n.targetSnapshot,
                                            o = n.currentSnapshot,
                                            a = n.guards,
                                            u = a.canActivateChecks,
                                            s = a.canDeactivateChecks;
                                        return 0 === s.length && 0 === u.length ? cl(i({}, n, {
                                            guardsResult: !0
                                        })) : function(t, e, n, r) {
                                            return ot(s).pipe(it(function(t) {
                                                return function(t, e, n, r, o) {
                                                    var i = e && e.routeConfig ? e.routeConfig.canDeactivate : null;
                                                    return i && 0 !== i.length ? cl(i.map(function(i) {
                                                        var a, u = Yh(i, e, o);
                                                        if (function(t) {
                                                                return t && Vh(t.canDeactivate)
                                                            }(u)) a = zp(u.canDeactivate(t, e, n, r));
                                                        else {
                                                            if (!Vh(u)) throw new Error("Invalid CanDeactivate guard");
                                                            a = zp(u(t, e, n, r))
                                                        }
                                                        return a.pipe(Fl())
                                                    })).pipe(nd()) : cl(!0)
                                                }(t.component, t.route, n, e, r)
                                            }), Fl(function(t) {
                                                return !0 !== t
                                            }, !0))
                                        }(0, r, o, t).pipe(it(function(n) {
                                            return n && "boolean" == typeof n ? function(t, e, n, r) {
                                                return ot(u).pipe($l(function(e) {
                                                    return ot([od(e.route.parent, r), rd(e.route, r), ad(t, e.path, n), id(t, e.route, n)]).pipe(yl(), Fl(function(t) {
                                                        return !0 !== t
                                                    }, !0))
                                                }), Fl(function(t) {
                                                    return !0 !== t
                                                }, !0))
                                            }(r, 0, t, e) : cl(n)
                                        }), tt(function(t) {
                                            return i({}, n, {
                                                guardsResult: t
                                            })
                                        }))
                                    }))
                                }
                            }(e.ngModule.injector, function(t) {
                                return e.triggerEvent(t)
                            }), Tl(function(t) {
                                if (Hh(t.guardsResult)) {
                                    var n = Ap('Redirecting to "' + e.serializeUrl(t.guardsResult) + '"');
                                    throw n.url = t.guardsResult, n
                                }
                            }), Tl(function(t) {
                                var n = new gp(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot, !!t.guardsResult);
                                e.triggerEvent(n)
                            }), ml(function(t) {
                                if (!t.guardsResult) {
                                    e.resetUrlToCurrentUrlTree();
                                    var r = new pp(t.id, e.serializeUrl(t.extractedUrl), "");
                                    return n.next(r), t.resolve(!1), !1
                                }
                                return !0
                            }), yd(function(t) {
                                if (t.guards.canActivateChecks.length) return cl(t).pipe(Tl(function(t) {
                                    var n = new yp(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                    e.triggerEvent(n)
                                }), (n = e.paramsInheritanceStrategy, r = e.ngModule.injector, function(t) {
                                    return t.pipe(it(function(t) {
                                        var e = t.targetSnapshot,
                                            o = t.guards.canActivateChecks;
                                        return o.length ? ot(o).pipe($l(function(t) {
                                            return function(t, n, r, o) {
                                                return function(t, e, n, r) {
                                                    var o = Object.keys(t);
                                                    if (0 === o.length) return cl({});
                                                    if (1 === o.length) {
                                                        var i = o[0];
                                                        return gd(t[i], e, n, r).pipe(tt(function(t) {
                                                            var e;
                                                            return (e = {})[i] = t, e
                                                        }))
                                                    }
                                                    var a = {};
                                                    return ot(o).pipe(it(function(o) {
                                                        return gd(t[o], e, n, r).pipe(tt(function(t) {
                                                            return a[o] = t, t
                                                        }))
                                                    })).pipe(Dl(), tt(function() {
                                                        return a
                                                    }))
                                                }(t._resolve, t, e, o).pipe(tt(function(e) {
                                                    return t._resolvedData = e, t.data = i({}, t.data, mh(t, r).resolve), null
                                                }))
                                            }(t.route, 0, n, r)
                                        }), function(t, e) {
                                            return arguments.length >= 2 ? function(e) {
                                                return A(Ql(t, void 0), xl(1), Al(void 0))(e)
                                            } : function(e) {
                                                return A(Ql(function(e, n, r) {
                                                    return t(e)
                                                }), xl(1))(e)
                                            }
                                        }(function(t, e) {
                                            return t
                                        }), tt(function(e) {
                                            return t
                                        })) : cl(t)
                                    }))
                                }), Tl(function(t) {
                                    var n = new mp(t.id, e.serializeUrl(t.extractedUrl), e.serializeUrl(t.urlAfterRedirects), t.targetSnapshot);
                                    e.triggerEvent(n)
                                }));
                                var n, r
                            }), yd(function(t) {
                                var n = t.extras;
                                return e.hooks.afterPreactivation(t.targetSnapshot, {
                                    navigationId: t.id,
                                    appliedUrlTree: t.extractedUrl,
                                    rawUrlTree: t.rawUrl,
                                    skipLocationChange: !!n.skipLocationChange,
                                    replaceUrl: !!n.replaceUrl
                                })
                            }), tt(function(t) {
                                var n, r, o, a = (o = function t(e, n, r) {
                                    if (r && e.shouldReuseRoute(n.value, r.value.snapshot)) {
                                        (c = r.value)._futureSnapshot = n.value;
                                        var o = function(e, n, r) {
                                            return n.children.map(function(n) {
                                                var o, i;
                                                try {
                                                    for (var a = s(r.children), u = a.next(); !u.done; u = a.next()) {
                                                        var c = u.value;
                                                        if (e.shouldReuseRoute(c.value.snapshot, n.value)) return t(e, n, c)
                                                    }
                                                } catch (l) {
                                                    o = {
                                                        error: l
                                                    }
                                                } finally {
                                                    try {
                                                        u && !u.done && (i = a.return) && i.call(a)
                                                    } finally {
                                                        if (o) throw o.error
                                                    }
                                                }
                                                return t(e, n)
                                            })
                                        }(e, n, r);
                                        return new hh(c, o)
                                    }
                                    var i = e.retrieve(n.value);
                                    if (i) {
                                        var a = i.route;
                                        return function t(e, n) {
                                            if (e.value.routeConfig !== n.value.routeConfig) throw new Error("Cannot reattach ActivatedRouteSnapshot created from a different route");
                                            if (e.children.length !== n.children.length) throw new Error("Cannot reattach ActivatedRouteSnapshot with a different number of children");
                                            n.value._futureSnapshot = e.value;
                                            for (var r = 0; r < e.children.length; ++r) t(e.children[r], n.children[r])
                                        }(n, a), a
                                    }
                                    var u, c = new yh(new ll((u = n.value).url), new ll(u.params), new ll(u.queryParams), new ll(u.fragment), new ll(u.data), u.outlet, u.component, u);
                                    return o = n.children.map(function(n) {
                                        return t(e, n)
                                    }), new hh(c, o)
                                }(e.routeReuseStrategy, (n = t.targetSnapshot)._root, (r = t.currentRouterState) ? r._root : void 0), new vh(o, n));
                                return i({}, t, {
                                    targetRouterState: a
                                })
                            }), Tl(function(t) {
                                e.currentUrlTree = t.urlAfterRedirects, e.rawUrlTree = e.urlHandlingStrategy.merge(e.currentUrlTree, t.rawUrl), e.routerState = t.targetRouterState, "deferred" === e.urlUpdateStrategy && (t.extras.skipLocationChange || e.setBrowserUrl(e.rawUrlTree, !!t.extras.replaceUrl, t.id, t.extras.state), e.browserUrlTree = t.urlAfterRedirects)
                            }), (o = e.rootContexts, a = e.routeReuseStrategy, u = function(t) {
                                return e.triggerEvent(t)
                            }, tt(function(t) {
                                return new Mh(a, t.targetRouterState, t.currentRouterState, u).activate(o), t
                            })), Tl({
                                next: function() {
                                    c = !0
                                },
                                complete: function() {
                                    c = !0
                                }
                            }), (r = function() {
                                if (!c && !l) {
                                    e.resetUrlToCurrentUrlTree();
                                    var r = new pp(t.id, e.serializeUrl(t.extractedUrl), "Navigation ID " + t.id + " is not equal to the current navigation id " + e.navigationId);
                                    n.next(r), t.resolve(!1)
                                }
                                e.currentNavigation = null
                            }, function(t) {
                                return t.lift(new Xl(r))
                            }), jl(function(r) {
                                if (l = !0, (u = r) && u[Pp]) {
                                    e.navigated = !0;
                                    var o = Hh(r.url);
                                    o || e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                                    var i = new pp(t.id, e.serializeUrl(t.extractedUrl), r.message);
                                    n.next(i), t.resolve(!1), o && e.navigateByUrl(r.url)
                                } else {
                                    e.resetStateAndUrl(t.currentRouterState, t.currentUrlTree, t.rawUrl);
                                    var a = new hp(t.id, e.serializeUrl(t.extractedUrl), r);
                                    n.next(a);
                                    try {
                                        t.resolve(e.errorHandler(r))
                                    } catch (s) {
                                        t.reject(s)
                                    }
                                }
                                var u;
                                return al
                            }))
                        }))
                    }, t.prototype.resetRootComponentType = function(t) {
                        this.rootComponentType = t, this.routerState.root.component = this.rootComponentType
                    }, t.prototype.getTransition = function() {
                        return this.transitions.value
                    }, t.prototype.setTransition = function(t) {
                        this.transitions.next(i({}, this.getTransition(), t))
                    }, t.prototype.initialNavigation = function() {
                        this.setUpLocationChangeListener(), 0 === this.navigationId && this.navigateByUrl(this.location.path(!0), {
                            replaceUrl: !0
                        })
                    }, t.prototype.setUpLocationChangeListener = function() {
                        var t = this;
                        this.locationSubscription || (this.locationSubscription = this.location.subscribe(function(e) {
                            var n = t.parseUrl(e.url),
                                r = "popstate" === e.type ? "popstate" : "hashchange",
                                o = e.state && e.state.navigationId ? e.state : null;
                            setTimeout(function() {
                                t.scheduleNavigation(n, r, o, {
                                    replaceUrl: !0
                                })
                            }, 0)
                        }))
                    }, Object.defineProperty(t.prototype, "url", {
                        get: function() {
                            return this.serializeUrl(this.currentUrlTree)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.getCurrentNavigation = function() {
                        return this.currentNavigation
                    }, t.prototype.triggerEvent = function(t) {
                        this.events.next(t)
                    }, t.prototype.resetConfig = function(t) {
                        Dp(t), this.config = t.map(Up), this.navigated = !1, this.lastSuccessfulId = -1
                    }, t.prototype.ngOnDestroy = function() {
                        this.dispose()
                    }, t.prototype.dispose = function() {
                        this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = null)
                    }, t.prototype.createUrlTree = function(t, e) {
                        void 0 === e && (e = {});
                        var n = e.relativeTo,
                            r = e.queryParams,
                            o = e.fragment,
                            a = e.preserveQueryParams,
                            u = e.queryParamsHandling,
                            s = e.preserveFragment;
                        go() && a && console && console.warn && console.warn("preserveQueryParams is deprecated, use queryParamsHandling instead.");
                        var c = n || this.routerState.root,
                            f = s ? this.currentUrlTree.fragment : o,
                            p = null;
                        if (u) switch (u) {
                            case "merge":
                                p = i({}, this.currentUrlTree.queryParams, r);
                                break;
                            case "preserve":
                                p = this.currentUrlTree.queryParams;
                                break;
                            default:
                                p = r || null
                        } else p = a ? this.currentUrlTree.queryParams : r || null;
                        return null !== p && (p = this.removeEmptyProps(p)),
                            function(t, e, n, r, o) {
                                if (0 === n.length) return Th(e.root, e.root, e, r, o);
                                var i = function(t) {
                                    if ("string" == typeof t[0] && 1 === t.length && "/" === t[0]) return new kh(!0, 0, t);
                                    var e = 0,
                                        n = !1,
                                        r = t.reduce(function(t, r, o) {
                                            if ("object" == typeof r && null != r) {
                                                if (r.outlets) {
                                                    var i = {};
                                                    return Fp(r.outlets, function(t, e) {
                                                        i[e] = "string" == typeof t ? t.split("/") : t
                                                    }), l(t, [{
                                                        outlets: i
                                                    }])
                                                }
                                                if (r.segmentPath) return l(t, [r.segmentPath])
                                            }
                                            return "string" != typeof r ? l(t, [r]) : 0 === o ? (r.split("/").forEach(function(r, o) {
                                                0 == o && "." === r || (0 == o && "" === r ? n = !0 : ".." === r ? e++ : "" != r && t.push(r))
                                            }), t) : l(t, [r])
                                        }, []);
                                    return new kh(n, e, r)
                                }(n);
                                if (i.toRoot()) return Th(e.root, new Zp([], {}), e, r, o);
                                var a = function(t, n, r) {
                                        if (t.isAbsolute) return new Ih(e.root, !0, 0);
                                        if (-1 === r.snapshot._lastPathIndex) return new Ih(r.snapshot._urlSegment, !0, 0);
                                        var o = Eh(t.commands[0]) ? 0 : 1;
                                        return function(e, n, i) {
                                            for (var a = r.snapshot._urlSegment, u = r.snapshot._lastPathIndex + o, s = t.numberOfDoubleDots; s > u;) {
                                                if (s -= u, !(a = a.parent)) throw new Error("Invalid number of '../'");
                                                u = a.segments.length
                                            }
                                            return new Ih(a, !1, u - s)
                                        }()
                                    }(i, 0, t),
                                    u = a.processChildren ? Ah(a.segmentGroup, a.index, i.commands) : Ph(a.segmentGroup, a.index, i.commands);
                                return Th(a.segmentGroup, u, e, r, o)
                            }(c, this.currentUrlTree, t, p, f)
                    }, t.prototype.navigateByUrl = function(t, e) {
                        void 0 === e && (e = {
                            skipLocationChange: !1
                        }), go() && this.isNgZoneEnabled && !xi.isInAngularZone() && this.console.warn("Navigation triggered outside Angular zone, did you forget to call 'ngZone.run()'?");
                        var n = Hh(t) ? t : this.parseUrl(t),
                            r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
                        return this.scheduleNavigation(r, "imperative", null, e)
                    }, t.prototype.navigate = function(t, e) {
                        return void 0 === e && (e = {
                                skipLocationChange: !1
                            }),
                            function(t) {
                                for (var e = 0; e < t.length; e++) {
                                    var n = t[e];
                                    if (null == n) throw new Error("The requested path contains " + n + " segment at index " + e)
                                }
                            }(t), this.navigateByUrl(this.createUrlTree(t, e), e)
                    }, t.prototype.serializeUrl = function(t) {
                        return this.urlSerializer.serialize(t)
                    }, t.prototype.parseUrl = function(t) {
                        var e;
                        try {
                            e = this.urlSerializer.parse(t)
                        } catch (n) {
                            e = this.malformedUriErrorHandler(n, this.urlSerializer, t)
                        }
                        return e
                    }, t.prototype.isActive = function(t, e) {
                        if (Hh(t)) return Bp(this.currentUrlTree, t, e);
                        var n = this.parseUrl(t);
                        return Bp(this.currentUrlTree, n, e)
                    }, t.prototype.removeEmptyProps = function(t) {
                        return Object.keys(t).reduce(function(e, n) {
                            var r = t[n];
                            return null != r && (e[n] = r), e
                        }, {})
                    }, t.prototype.processNavigations = function() {
                        var t = this;
                        this.navigations.subscribe(function(e) {
                            t.navigated = !0, t.lastSuccessfulId = e.id, t.events.next(new fp(e.id, t.serializeUrl(e.extractedUrl), t.serializeUrl(t.currentUrlTree))), t.lastSuccessfulNavigation = t.currentNavigation, t.currentNavigation = null, e.resolve(!0)
                        }, function(e) {
                            t.console.warn("Unhandled Navigation Error: ")
                        })
                    }, t.prototype.scheduleNavigation = function(t, e, n, r) {
                        var o = this.getTransition();
                        if (o && "imperative" !== e && "imperative" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "hashchange" == e && "popstate" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        if (o && "popstate" == e && "hashchange" === o.source && o.rawUrl.toString() === t.toString()) return Promise.resolve(!0);
                        var i = null,
                            a = null,
                            u = new Promise(function(t, e) {
                                i = t, a = e
                            }),
                            s = ++this.navigationId;
                        return this.setTransition({
                            id: s,
                            source: e,
                            restoredState: n,
                            currentUrlTree: this.currentUrlTree,
                            currentRawUrl: this.rawUrlTree,
                            rawUrl: t,
                            extras: r,
                            resolve: i,
                            reject: a,
                            promise: u,
                            currentSnapshot: this.routerState.snapshot,
                            currentRouterState: this.routerState
                        }), u.catch(function(t) {
                            return Promise.reject(t)
                        })
                    }, t.prototype.setBrowserUrl = function(t, e, n, r) {
                        var o = this.urlSerializer.serialize(t);
                        r = r || {}, this.location.isCurrentPathEqualTo(o) || e ? this.location.replaceState(o, "", i({}, r, {
                            navigationId: n
                        })) : this.location.go(o, "", i({}, r, {
                            navigationId: n
                        }))
                    }, t.prototype.resetStateAndUrl = function(t, e, n) {
                        this.routerState = t, this.currentUrlTree = e, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, n), this.resetUrlToCurrentUrlTree()
                    }, t.prototype.resetUrlToCurrentUrlTree = function() {
                        this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", {
                            navigationId: this.lastSuccessfulId
                        })
                    }, t
                }(),
                Id = function() {
                    return function() {
                        this.outlet = null, this.route = null, this.resolver = null, this.children = new Rd, this.attachRef = null
                    }
                }(),
                Rd = function() {
                    function t() {
                        this.contexts = new Map
                    }
                    return t.prototype.onChildOutletCreated = function(t, e) {
                        var n = this.getOrCreateContext(t);
                        n.outlet = e, this.contexts.set(t, n)
                    }, t.prototype.onChildOutletDestroyed = function(t) {
                        var e = this.getContext(t);
                        e && (e.outlet = null)
                    }, t.prototype.onOutletDeactivated = function() {
                        var t = this.contexts;
                        return this.contexts = new Map, t
                    }, t.prototype.onOutletReAttached = function(t) {
                        this.contexts = t
                    }, t.prototype.getOrCreateContext = function(t) {
                        var e = this.getContext(t);
                        return e || (e = new Id, this.contexts.set(t, e)), e
                    }, t.prototype.getContext = function(t) {
                        return this.contexts.get(t) || null
                    }, t
                }(),
                Pd = function() {
                    function t(t, e, n, r, o) {
                        this.parentContexts = t, this.location = e, this.resolver = n, this.changeDetector = o, this.activated = null, this._activatedRoute = null, this.activateEvents = new Ho, this.deactivateEvents = new Ho, this.name = r || kp, t.onChildOutletCreated(this.name, this)
                    }
                    return t.prototype.ngOnDestroy = function() {
                        this.parentContexts.onChildOutletDestroyed(this.name)
                    }, t.prototype.ngOnInit = function() {
                        if (!this.activated) {
                            var t = this.parentContexts.getContext(this.name);
                            t && t.route && (t.attachRef ? this.attach(t.attachRef, t.route) : this.activateWith(t.route, t.resolver || null))
                        }
                    }, Object.defineProperty(t.prototype, "isActivated", {
                        get: function() {
                            return !!this.activated
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "component", {
                        get: function() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this.activated.instance
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activatedRoute", {
                        get: function() {
                            if (!this.activated) throw new Error("Outlet is not activated");
                            return this._activatedRoute
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "activatedRouteData", {
                        get: function() {
                            return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.detach = function() {
                        if (!this.activated) throw new Error("Outlet is not activated");
                        this.location.detach();
                        var t = this.activated;
                        return this.activated = null, this._activatedRoute = null, t
                    }, t.prototype.attach = function(t, e) {
                        this.activated = t, this._activatedRoute = e, this.location.insert(t.hostView)
                    }, t.prototype.deactivate = function() {
                        if (this.activated) {
                            var t = this.component;
                            this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(t)
                        }
                    }, t.prototype.activateWith = function(t, e) {
                        if (this.isActivated) throw new Error("Cannot activate an already activated outlet");
                        this._activatedRoute = t;
                        var n = (e = e || this.resolver).resolveComponentFactory(t._futureSnapshot.routeConfig.component),
                            r = this.parentContexts.getOrCreateContext(this.name).children,
                            o = new Ad(t, r, this.location.injector);
                        this.activated = this.location.createComponent(n, this.location.length, o), this.changeDetector.markForCheck(), this.activateEvents.emit(this.activated.instance)
                    }, t
                }(),
                Ad = function() {
                    function t(t, e, n) {
                        this.route = t, this.childContexts = e, this.parent = n
                    }
                    return t.prototype.get = function(t, e) {
                        return t === yh ? this.route : t === Rd ? this.childContexts : this.parent.get(t, e)
                    }, t
                }(),
                Od = function() {
                    return function() {}
                }(),
                Nd = function() {
                    function t() {}
                    return t.prototype.preload = function(t, e) {
                        return e().pipe(jl(function() {
                            return cl(null)
                        }))
                    }, t
                }(),
                Dd = function() {
                    function t() {}
                    return t.prototype.preload = function(t, e) {
                        return cl(null)
                    }, t
                }(),
                jd = function() {
                    function t(t, e, n, r, o) {
                        this.router = t, this.injector = r, this.preloadingStrategy = o, this.loader = new _d(e, n, function(e) {
                            return t.triggerEvent(new wp(e))
                        }, function(e) {
                            return t.triggerEvent(new bp(e))
                        })
                    }
                    return t.prototype.setUpPreloading = function() {
                        var t = this;
                        this.subscription = this.router.events.pipe(ml(function(t) {
                            return t instanceof fp
                        }), $l(function() {
                            return t.preload()
                        })).subscribe(function() {})
                    }, t.prototype.preload = function() {
                        var t = this.injector.get(Qr);
                        return this.processRoutes(t, this.router.config)
                    }, t.prototype.ngOnDestroy = function() {
                        this.subscription.unsubscribe()
                    }, t.prototype.processRoutes = function(t, e) {
                        var n, r, o = [];
                        try {
                            for (var i = s(e), a = i.next(); !a.done; a = i.next()) {
                                var u = a.value;
                                if (u.loadChildren && !u.canLoad && u._loadedConfig) {
                                    var c = u._loadedConfig;
                                    o.push(this.processRoutes(c.module, c.routes))
                                } else u.loadChildren && !u.canLoad ? o.push(this.preloadConfig(t, u)) : u.children && o.push(this.processRoutes(t, u.children))
                            }
                        } catch (l) {
                            n = {
                                error: l
                            }
                        } finally {
                            try {
                                a && !a.done && (r = i.return) && r.call(i)
                            } finally {
                                if (n) throw n.error
                            }
                        }
                        return ot(o).pipe(ct(), tt(function(t) {}))
                    }, t.prototype.preloadConfig = function(t, e) {
                        var n = this;
                        return this.preloadingStrategy.preload(e, function() {
                            return n.loader.load(t.injector, e).pipe(it(function(t) {
                                return e._loadedConfig = t, n.processRoutes(t.module, t.routes)
                            }))
                        })
                    }, t
                }(),
                Md = function() {
                    function t(t, e, n) {
                        void 0 === n && (n = {}), this.router = t, this.viewportScroller = e, this.options = n, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, n.scrollPositionRestoration = n.scrollPositionRestoration || "disabled", n.anchorScrolling = n.anchorScrolling || "disabled"
                    }
                    return t.prototype.init = function() {
                        "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
                    }, t.prototype.createScrollEvents = function() {
                        var t = this;
                        return this.router.events.subscribe(function(e) {
                            e instanceof lp ? (t.store[t.lastId] = t.viewportScroller.getScrollPosition(), t.lastSource = e.navigationTrigger, t.restoredId = e.restoredState ? e.restoredState.navigationId : 0) : e instanceof fp && (t.lastId = e.id, t.scheduleScrollEvent(e, t.router.parseUrl(e.urlAfterRedirects).fragment))
                        })
                    }, t.prototype.consumeScrollEvents = function() {
                        var t = this;
                        return this.router.events.subscribe(function(e) {
                            e instanceof Ep && (e.position ? "top" === t.options.scrollPositionRestoration ? t.viewportScroller.scrollToPosition([0, 0]) : "enabled" === t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition(e.position) : e.anchor && "enabled" === t.options.anchorScrolling ? t.viewportScroller.scrollToAnchor(e.anchor) : "disabled" !== t.options.scrollPositionRestoration && t.viewportScroller.scrollToPosition([0, 0]))
                        })
                    }, t.prototype.scheduleScrollEvent = function(t, e) {
                        this.router.triggerEvent(new Ep(t, "popstate" === this.lastSource ? this.store[this.restoredId] : null, e))
                    }, t.prototype.ngOnDestroy = function() {
                        this.routerEventsSubscription && this.routerEventsSubscription.unsubscribe(), this.scrollEventsSubscription && this.scrollEventsSubscription.unsubscribe()
                    }, t
                }(),
                Ud = new Tt("ROUTER_CONFIGURATION"),
                Vd = new Tt("ROUTER_FORROOT_GUARD"),
                Hd = [Vc, {
                    provide: Kp,
                    useClass: $p
                }, {
                    provide: kd,
                    useFactory: Gd,
                    deps: [Li, Kp, Rd, Vc, pr, qo, gi, bd, Ud, [Cd, new Oe],
                        [md, new Oe]
                    ]
                }, Rd, {
                    provide: yh,
                    useFactory: Qd,
                    deps: [kd]
                }, {
                    provide: qo,
                    useClass: Zi
                }, jd, Dd, Nd, {
                    provide: Ud,
                    useValue: {
                        enableTracing: !1
                    }
                }];

            function Ld() {
                return new ji("Router", kd)
            }
            var Fd = function() {
                function t(t, e) {}
                var e;
                return e = t, t.forRoot = function(t, n) {
                    return {
                        ngModule: e,
                        providers: [Hd, Zd(t), {
                                provide: Vd,
                                useFactory: qd,
                                deps: [
                                    [kd, new Oe, new De]
                                ]
                            }, {
                                provide: Ud,
                                useValue: n || {}
                            }, {
                                provide: Mc,
                                useFactory: Bd,
                                deps: [Dc, [new Ae(Uc), new Oe], Ud]
                            }, {
                                provide: Md,
                                useFactory: zd,
                                deps: [kd, ol, Ud]
                            }, {
                                provide: Od,
                                useExisting: n && n.preloadingStrategy ? n.preloadingStrategy : Dd
                            }, {
                                provide: ji,
                                multi: !0,
                                useFactory: Ld
                            },
                            [Wd, {
                                provide: ti,
                                multi: !0,
                                useFactory: Kd,
                                deps: [Wd]
                            }, {
                                provide: Xd,
                                useFactory: $d,
                                deps: [Wd]
                            }, {
                                provide: ui,
                                multi: !0,
                                useExisting: Xd
                            }]
                        ]
                    }
                }, t.forChild = function(t) {
                    return {
                        ngModule: e,
                        providers: [Zd(t)]
                    }
                }, t
            }();

            function zd(t, e, n) {
                return n.scrollOffset && e.setOffset(n.scrollOffset), new Md(t, e, n)
            }

            function Bd(t, e, n) {
                return void 0 === n && (n = {}), n.useHash ? new Lc(t, e) : new Fc(t, e)
            }

            function qd(t) {
                if (t) throw new Error("RouterModule.forRoot() called twice. Lazy loaded modules should use RouterModule.forChild() instead.");
                return "guarded"
            }

            function Zd(t) {
                return [{
                    provide: Rt,
                    multi: !0,
                    useValue: t
                }, {
                    provide: bd,
                    multi: !0,
                    useValue: t
                }]
            }

            function Gd(t, e, n, r, o, i, a, u, s, c, l) {
                void 0 === s && (s = {});
                var f = new kd(null, e, n, r, o, i, a, Hp(u));
                if (c && (f.urlHandlingStrategy = c), l && (f.routeReuseStrategy = l), s.errorHandler && (f.errorHandler = s.errorHandler), s.malformedUriErrorHandler && (f.malformedUriErrorHandler = s.malformedUriErrorHandler), s.enableTracing) {
                    var p = tf();
                    f.events.subscribe(function(t) {
                        p.logGroup("Router Event: " + t.constructor.name), p.log(t.toString()), p.log(t), p.logGroupEnd()
                    })
                }
                return s.onSameUrlNavigation && (f.onSameUrlNavigation = s.onSameUrlNavigation), s.paramsInheritanceStrategy && (f.paramsInheritanceStrategy = s.paramsInheritanceStrategy), s.urlUpdateStrategy && (f.urlUpdateStrategy = s.urlUpdateStrategy), s.relativeLinkResolution && (f.relativeLinkResolution = s.relativeLinkResolution), f
            }

            function Qd(t) {
                return t.routerState.root
            }
            var Wd = function() {
                function t(t) {
                    this.injector = t, this.initNavigation = !1, this.resultOfPreactivationDone = new H
                }
                return t.prototype.appInitializer = function() {
                    var t = this;
                    return this.injector.get(jc, Promise.resolve(null)).then(function() {
                        var e = null,
                            n = new Promise(function(t) {
                                return e = t
                            }),
                            r = t.injector.get(kd),
                            o = t.injector.get(Ud);
                        if (t.isLegacyDisabled(o) || t.isLegacyEnabled(o)) e(!0);
                        else if ("disabled" === o.initialNavigation) r.setUpLocationChangeListener(), e(!0);
                        else {
                            if ("enabled" !== o.initialNavigation) throw new Error("Invalid initialNavigation options: '" + o.initialNavigation + "'");
                            r.hooks.afterPreactivation = function() {
                                return t.initNavigation ? cl(null) : (t.initNavigation = !0, e(!0), t.resultOfPreactivationDone)
                            }, r.initialNavigation()
                        }
                        return n
                    })
                }, t.prototype.bootstrapListener = function(t) {
                    var e = this.injector.get(Ud),
                        n = this.injector.get(jd),
                        r = this.injector.get(Md),
                        o = this.injector.get(kd),
                        i = this.injector.get(Li);
                    t === i.components[0] && (this.isLegacyEnabled(e) ? o.initialNavigation() : this.isLegacyDisabled(e) && o.setUpLocationChangeListener(), n.setUpPreloading(), r.init(), o.resetRootComponentType(i.componentTypes[0]), this.resultOfPreactivationDone.next(null), this.resultOfPreactivationDone.complete())
                }, t.prototype.isLegacyEnabled = function(t) {
                    return "legacy_enabled" === t.initialNavigation || !0 === t.initialNavigation || void 0 === t.initialNavigation
                }, t.prototype.isLegacyDisabled = function(t) {
                    return "legacy_disabled" === t.initialNavigation || !1 === t.initialNavigation
                }, t
            }();

            function Kd(t) {
                return t.appInitializer.bind(t)
            }

            function $d(t) {
                return t.bootstrapListener.bind(t)
            }
            var Xd = new Tt("Router Initializer"),
                Yd = Fa({
                    encapsulation: 2,
                    styles: [],
                    data: {}
                });

            function Jd(t) {
                return Es(0, [(t()(), gu(0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), rs(1, 212992, null, 0, Pd, [Rd, Wi, qr, [8, null], $i], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function tv(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 1, "ng-component", [], null, null, null, Jd, Yd)), rs(1, 49152, null, 0, Tp, [], null, null)], null, null)
            }
            var ev = Du("ng-component", Tp, tv, {}, {}, []),
                nv = function() {
                    function t() {
                        this.X = "X", this.O = "O", this.posMap = {}, this.arrX = [], this.arrO = [], this.winnerCombination = [], this.isAiPlayer = !0, this.winnerMsg = "", this.emptyPosArr = [], this.emptyPosArr = ["0_0", "0_1", "0_2", "1_0", "1_1", "1_2", "2_0", "2_1", "2_2"], this.posMap = {
                            "0_0": 1,
                            "0_1": 2,
                            "0_2": 3,
                            "1_0": 4,
                            "1_1": 5,
                            "1_2": 6,
                            "2_0": 7,
                            "2_1": 8,
                            "2_2": 9
                        }, this.winnerCombination = [
                            [1, 2, 3],
                            [4, 5, 6],
                            [7, 8, 9],
                            [1, 4, 7],
                            [2, 5, 8],
                            [3, 6, 9],
                            [1, 5, 9],
                            [3, 5, 7]
                        ], this.fieldCount = [0, 1, 2], this.rowCount = [0, 1, 2], this.currentPlayer = "O"
                    }
                    return t.prototype.ngOnInit = function() {
                        this.startGame()
                    }, t.prototype.startGame = function() {
                        var t = Math.floor(Math.random() * Math.floor(3)) + "_" + Math.floor(Math.random() * Math.floor(3));
                        this.addPosition(t)
                    }, t.prototype.checkWinner = function(t) {
                        var e = t.length;
                        t: for (var n = 0; n < e; n++)
                            for (var r = n + 1; r < e; r++)
                                for (var o = r + 1; o < e; o++) {
                                    var i = this.posMap[t[n]],
                                        a = this.posMap[t[r]],
                                        u = this.posMap[t[o]];
                                    for (var s in this.winnerCombination)
                                        if (this.winnerCombination[s].includes(i) && this.winnerCombination[s].includes(a) && this.winnerCombination[s].includes(u)) {
                                            this.endGame();
                                            break t
                                        }
                                }
                    }, t.prototype.checkWinnerDummy = function(t) {
                        var e = t.length,
                            n = !1;
                        t: for (var r = 0; r < e; r++)
                            for (var o = r + 1; o < e; o++)
                                for (var i = o + 1; i < e; i++) {
                                    var a = this.posMap[t[r]],
                                        u = this.posMap[t[o]],
                                        s = this.posMap[t[i]];
                                    for (var c in this.winnerCombination)
                                        if (this.winnerCombination[c].includes(a) && this.winnerCombination[c].includes(u) && this.winnerCombination[c].includes(s)) {
                                            n = !0;
                                            break t
                                        }
                                }
                        return n
                    }, t.prototype.endGame = function() {
                        this.winnerMsg = "Player " + this.currentPlayer + " is winner!!!"
                    }, t.prototype.addPosition = function(t) {
                        var e;
                        "" == this.winnerMsg && ("X" == this.currentPlayer ? (this.arrX.push(t), (e = this.emptyPosArr.indexOf(t)) > -1 && this.emptyPosArr.splice(e, 1), this.checkWinner(this.arrX), this.currentPlayer = "O", 1 == this.isAiPlayer && this.takeAiPlayerAction(this.arrO, this.arrX, this.emptyPosArr)) : (this.arrO.push(t), (e = this.emptyPosArr.indexOf(t)) > -1 && this.emptyPosArr.splice(e, 1), this.checkWinner(this.arrO), this.currentPlayer = "X"))
                    }, t.prototype.takeAiPlayerAction = function(t, e, n) {
                        var r = !1,
                            o = !1,
                            i = t.slice(),
                            a = e.slice(),
                            u = n.slice();
                        t: for (var s in u)
                            if (1 == (r = this.algorithm1(u[s], i))) {
                                this.addPosition(u[s]);
                                break t
                            }
                        if (0 == r) {
                            t: for (var s in u)
                                if (1 == (o = this.algorithm2(u[s], a))) {
                                    this.addPosition(u[s]);
                                    break t
                                }0 == o && (u.splice(0, 1), this.takeAiPlayerAction(i, a, u))
                        }
                    }, t.prototype.algorithm1 = function(t, e) {
                        return e.push(t), this.checkWinnerDummy(e)
                    }, t.prototype.algorithm2 = function(t, e) {
                        return e.push(t), this.checkWinnerDummy(e)
                    }, t
                }(),
                rv = Fa({
                    encapsulation: 0,
                    styles: [
                        [".board-outer-wrapper[_ngcontent-%COMP%]{width:156px;margin:0 auto;text-align:center}.board-text[_ngcontent-%COMP%]{padding:5px}.board-row[_ngcontent-%COMP%]{height:50px}.board-field[_ngcontent-%COMP%]{display:inline-block;height:50px;width:50px;border:1px solid;border-radius:5px}.fieldO[_ngcontent-%COMP%], .fieldX[_ngcontent-%COMP%]{float:left;padding:8px 0 0 14px;font-size:30px}.fieldX[_ngcontent-%COMP%]{color:red}.fieldO[_ngcontent-%COMP%]{color:green}"]
                    ],
                    data: {}
                });

            function ov(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 1, "div", [
                    ["class", "fieldX"]
                ], null, null, null, null, null)), (t()(), Cs(-1, null, ["X"]))], null, null)
            }

            function iv(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 1, "div", [
                    ["class", "fieldO"]
                ], null, null, null, null, null)), (t()(), Cs(-1, null, ["O"]))], null, null)
            }

            function av(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 4, "div", [
                    ["class", "board-field"]
                ], [
                    [8, "id", 0]
                ], [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.addPosition(t.parent.context.$implicit + "_" + t.context.$implicit) && r), r
                }, null, null)), (t()(), vu(16777216, null, null, 1, null, ov)), rs(2, 16384, null, 0, Yc, [Wi, Lo], {
                    ngIf: [0, "ngIf"]
                }, null), (t()(), vu(16777216, null, null, 1, null, iv)), rs(4, 16384, null, 0, Yc, [Wi, Lo], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var n = e.component;
                    t(e, 2, 0, n.arrX.indexOf(e.parent.context.$implicit + "_" + e.context.$implicit) > -1), t(e, 4, 0, n.arrO.indexOf(e.parent.context.$implicit + "_" + e.context.$implicit) > -1)
                }, function(t, e) {
                    t(e, 0, 0, hu(2, "", e.parent.context.$implicit, "_", e.context.$implicit, ""))
                })
            }

            function uv(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 2, "div", [
                    ["class", "board-row"]
                ], [
                    [8, "id", 0]
                ], null, null, null, null)), (t()(), vu(16777216, null, null, 1, null, av)), rs(2, 278528, null, 0, $c, [Wi, Lo, da], {
                    ngForOf: [0, "ngForOf"]
                }, null)], function(t, e) {
                    t(e, 2, 0, e.component.fieldCount)
                }, function(t, e) {
                    t(e, 0, 0, hu(1, "row_", e.context.$implicit, ""))
                })
            }

            function sv(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 2, "div", [], null, null, null, null, null)), (t()(), gu(1, 0, null, null, 1, "div", [], null, [
                    [null, "click"]
                ], function(t, e, n) {
                    var r = !0;
                    return "click" === e && (r = !1 !== t.component.restart() && r), r
                }, null, null)), (t()(), Cs(-1, null, ["~"]))], null, null)
            }

            function cv(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 8, "div", [
                    ["class", "board-outer-wrapper"]
                ], null, null, null, null, null)), (t()(), gu(1, 0, null, null, 1, "div", [
                    ["class", "board-text"]
                ], null, null, null, null, null)), (t()(), Cs(2, null, ["Current Player : ", ""])), (t()(), vu(16777216, null, null, 1, null, uv)), rs(4, 278528, null, 0, $c, [Wi, Lo, da], {
                    ngForOf: [0, "ngForOf"]
                }, null), (t()(), gu(5, 0, null, null, 1, "div", [
                    ["class", "board-text"]
                ], null, null, null, null, null)), (t()(), Cs(6, null, ["", ""])), (t()(), vu(16777216, null, null, 1, null, sv)), rs(8, 16384, null, 0, Yc, [Wi, Lo], {
                    ngIf: [0, "ngIf"]
                }, null)], function(t, e) {
                    var n = e.component;
                    t(e, 4, 0, n.rowCount), t(e, 8, 0, "" != n.winnerMsg)
                }, function(t, e) {
                    var n = e.component;
                    t(e, 2, 0, n.currentPlayer), t(e, 6, 0, n.winnerMsg)
                })
            }
            var lv = Fa({
                encapsulation: 0,
                styles: [
                    [""]
                ],
                data: {}
            });

            function fv(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 1, "app-board", [], null, null, null, cv, rv)), rs(1, 114688, null, 0, nv, [], null, null)], function(t, e) {
                    t(e, 1, 0)
                }, null)
            }

            function pv(t) {
                return Es(0, [(t()(), gu(0, 0, null, null, 1, "app-root", [], null, null, null, fv, lv)), rs(1, 49152, null, 0, Nc, [], null, null)], null, null)
            }
            var hv = Du("app-root", Nc, pv, {}, {}, []),
                dv = function() {
                    return function() {}
                }(),
                vv = Pc(Oc, [Nc], function(t) {
                    return function(t) {
                        for (var e = {}, n = [], r = !1, o = 0; o < t.length; o++) {
                            var i = t[o];
                            i.token === Tr && !0 === i.value && (r = !0), 1073741824 & i.flags && n.push(i.token), i.index = o, e[Va(i.token)] = i
                        }
                        return {
                            factory: null,
                            providersByKey: e,
                            providers: t,
                            modules: n,
                            isRoot: r
                        }
                    }([Eu(512, qr, Zr, [
                        [8, [ev, hv]],
                        [3, qr], Qr
                    ]), Eu(5120, ba, xa, [
                        [3, ba]
                    ]), Eu(4608, Qc, Wc, [ba, [2, Gc]]), Eu(5120, ni, ri, []), Eu(5120, da, _a, []), Eu(5120, va, Ca, []), Eu(4608, Yf, Jf, [nl]), Eu(6144, oo, null, [Yf]), Eu(4608, Zf, Qf, []), Eu(5120, mf, function(t, e, n, r, o, i, a, u) {
                        return [new Bf(t, e, n), new Xf(r), new Wf(o, i, a, u)]
                    }, [nl, xi, ai, nl, nl, Zf, si, [2, Gf]]), Eu(4608, wf, wf, [mf, xi]), Eu(135680, Cf, Cf, [nl]), Eu(4608, Rf, Rf, [wf, Cf]), Eu(6144, Jr, null, [Rf]), Eu(6144, _f, null, [Cf]), Eu(4608, Ai, Ai, [xi]), Eu(5120, yh, Qd, [kd]), Eu(4608, Dd, Dd, []), Eu(6144, Od, null, [Dd]), Eu(135680, jd, jd, [kd, qo, gi, pr, Od]), Eu(4608, Nd, Nd, []), Eu(5120, Md, zd, [kd, ol, Ud]), Eu(5120, Xd, $d, [Wd]), Eu(5120, ui, function(t) {
                        return [t]
                    }, [Xd]), Eu(1073742336, el, el, []), Eu(1024, Xo, up, []), Eu(1024, ji, function() {
                        return [Ld()]
                    }, []), Eu(512, Wd, Wd, [pr]), Eu(1024, ti, function(t, e) {
                        return [(n = t, vf("probe", yf), vf("coreTokens", i({}, gf, (n || []).reduce(function(t, e) {
                            return t[e.name] = e.token, t
                        }, {}))), function() {
                            return yf
                        }), Kd(e)];
                        var n
                    }, [
                        [2, ji], Wd
                    ]), Eu(512, ei, ei, [
                        [2, ti]
                    ]), Eu(131584, Li, Li, [xi, si, pr, Xo, qr, ei]), Eu(1073742336, Sa, Sa, [Li]), Eu(1073742336, sp, sp, [
                        [3, sp]
                    ]), Eu(1024, Vd, qd, [
                        [3, kd]
                    ]), Eu(512, Kp, $p, []), Eu(512, Rd, Rd, []), Eu(256, Ud, {}, []), Eu(1024, Mc, Bd, [Dc, [2, Uc], Ud]), Eu(512, Vc, Vc, [Mc]), Eu(512, gi, gi, []), Eu(512, qo, Zi, [gi, [2, Bi]]), Eu(1024, bd, function() {
                        return [
                            [{
                                path: "ticTacToe",
                                component: Nc,
                                children: []
                            }]
                        ]
                    }, []), Eu(1024, kd, Gd, [Li, Kp, Rd, Vc, pr, qo, gi, bd, Ud, [2, Cd],
                        [2, md]
                    ]), Eu(1073742336, Fd, Fd, [
                        [2, Vd],
                        [2, kd]
                    ]), Eu(1073742336, dv, dv, []), Eu(1073742336, Oc, Oc, []), Eu(256, Tr, !0, [])])
                });
            (function() {
                if (vo) throw new Error("Cannot enable prod mode after platform setup.");
                ho = !1
            })(), ap().bootstrapModuleFactory(vv).catch(function(t) {
                return console.error(t)
            })
        }
    },
    [
        [0, 0]
    ]
]);
