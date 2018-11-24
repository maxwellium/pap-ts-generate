"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bigdecimal_1 = require("bigdecimal");
class PAPBaseClass {
    constructor() {
        this.name = 'PAPBaseClass';
    }
    set inputs(inputs) {
        for (let key in inputs) {
            if (this._inputs[key] instanceof bigdecimal_1.BigDecimal) {
                this._inputs[key] = new bigdecimal_1.BigDecimal(inputs[key]);
            }
            else if ('number' === typeof this._inputs[key]) {
                this._inputs[key] = inputs[key];
            }
        }
    }
    get inputs() {
        const inputs = {};
        for (let key in this._inputs) {
            const input = this._inputs[key];
            if (input instanceof bigdecimal_1.BigDecimal) {
                inputs[key] = input.doubleValue();
            }
            else if ('number' === typeof input) {
                inputs[key] = input;
            }
        }
        return inputs;
    }
    get outputs() {
        const outputs = {};
        for (let key in this._outputs) {
            const output = this._outputs[key];
            if (output instanceof bigdecimal_1.BigDecimal) {
                outputs[key] = output.doubleValue();
            }
            else if ('number' === typeof output) {
                outputs[key] = output;
            }
        }
        return outputs;
    }
    get internals() {
        const internals = {};
        for (let key in this._internals) {
            const internal = this._internals[key];
            if (internal instanceof bigdecimal_1.BigDecimal) {
                internals[key] = internal.doubleValue();
            }
            else if ('number' === typeof internal) {
                internals[key] = internal;
            }
        }
        return internals;
    }
}
exports.PAPBaseClass = PAPBaseClass;
//# sourceMappingURL=PAPBaseClass.js.map