/*
 * Uni-code / lang/core.js
 * copyright (c) 2016 Susisu
 */

"use strict";

function end() {
    module.exports = Object.freeze({
        Term : Term,
        EvalR: EvalR,
        EvalL: EvalL
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

function EvalR(pos) {
    Term.call(this, pos);
}

EvalR.prototype = Object.create(Term.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: EvalR
    },
    run: {
        writable    : true,
        configurable: true,
        value: function (env) {
            return this.eval(env, false);
        }
    },
    "eval": {
        writable    : true,
        configurable: true,
        value: function (env, tail) {
            throw new Error("not implemented");
        }
    }
});

function EvalL(pos) {
    EvalR.call(this, pos);
}

EvalL.prototype = Object.create(EvalR.prototype, {
    constructor: {
        writable    : true,
        configurable: true,
        value: EvalL
    },
    "evalL": {
        writable    : true,
        configurable: true,
        value: function (env) {
            throw new Error("not implemented");
        }
    }
});

end();
