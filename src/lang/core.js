/*
 * Uni-code / lang/core.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = Object.freeze({
        Term      : Term,
        Evaluable : Evaluable,
        Assignable: Assignable
    });
}

function Term(pos) {
    this.pos = pos;
}

Term.prototype = Object.create(Object.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Term
    },
    run: {
        writable    : true,
        configurable: true,
        value: function (env) {
            throw new Error("not implemented");
        }
    }
});


function Evaluable(pos) {
    Term.call(this, pos);
}

Evaluable.prototype = Object.create(Term.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Evaluable
    },
    run: {
        writable    : true,
        configurable: true,
        value: function (env) {
            return this.eval(env, false);
        }
    },
    eval: {
        writable    : true,
        configurable: true,
        value: function (env, tail) {
            throw new Error("not implemented");
        }
    }
});


function Assignable(pos) {
    Evaluable.call(this, pos);
}

Assignable.prototype = Object.create(Evaluable.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: Assignable
    },
    assign: {
        writable    : true,
        configurable: true,
        value: function (env) {
            throw new Error("not implemented");
        }
    }
});

end();
