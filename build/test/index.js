"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const bmf_steuerrechner_api_1 = require("bmf-steuerrechner-api");
const index_1 = require("../index");
const parameters_1 = require("./parameters");
const persistance_1 = require("./persistance");
const FILEMAME = path_1.join(__dirname, 'samples.txt');
const VERSION_MAP = [
    { y: 2006, m: [...Array(13).keys()].slice(1) },
    { y: 2007, m: [...Array(13).keys()].slice(1) },
    { y: 2008, m: [...Array(13).keys()].slice(1) },
    { y: 2009, m: [...Array(13).keys()].slice(1) },
    { y: 2010, m: [...Array(13).keys()].slice(1) },
    { y: 2011, m: [...Array(12).keys()].slice(1) },
    { y: 2011, m: [12] },
    { y: 2012, m: [...Array(13).keys()].slice(1) },
    { y: 2013, m: [...Array(13).keys()].slice(1) },
    { y: 2014, m: [...Array(13).keys()].slice(1) },
    { y: 2015, m: [...Array(12).keys()].slice(1) },
    { y: 2015, m: [12] },
    { y: 2016, m: [...Array(13).keys()].slice(1) },
    { y: 2017, m: [...Array(13).keys()].slice(1) },
    { y: 2018, m: [...Array(13).keys()].slice(1) },
];
function calculate(index, inputs) {
    let calculator = new index_1.calculatorList[index]();
    calculator.inputs = inputs;
    calculator.main();
    return calculator.outputs;
}
function compare(outputs, bmfOutputs) {
    let pass = true, result = {};
    for (let key in outputs) {
        if (outputs[key] !== bmfOutputs[key]) {
            result[key] = `${outputs[key]} | ${bmfOutputs[key]}`;
            pass = false;
        }
    }
    return {
        pass,
        result
    };
}
function transformBmfResponse(response) {
    const result = {};
    for (let key in response.ausgaben) {
        result[key] = parseInt(response.ausgaben[key].value);
    }
    return result;
}
async function run(count) {
    for (let i = 0; i < count; i++) {
        const inputs = parameters_1.randomized(), samples = [];
        for (let i = 0; i < index_1.calculatorList.length; i++) {
            const y = VERSION_MAP[i].y, m = VERSION_MAP[i].m[0], outputs = calculate(i, inputs), bmfResponse = await bmf_steuerrechner_api_1.bmf(inputs, y, m), bmfOutputs = transformBmfResponse(bmfResponse), comparison = compare(outputs, bmfOutputs);
            samples.push({ y, m, i: inputs, o: bmfOutputs });
            if (!comparison.pass) {
                console.log(comparison, inputs, outputs, { y, m });
            }
            else {
                console.log('passed');
            }
        }
        await persistance_1.saveSamples(FILEMAME, samples);
    }
}
exports.run = run;
function rerun() {
    const emitter = persistance_1.replaySampleStream(FILEMAME);
    emitter.on('line', (s) => {
        const calculator = new index_1.calculatorsByMonth[s.y][s.m]();
        calculator.inputs = s.i;
        calculator.main();
        const comparison = compare(calculator.outputs, s.o);
        if (!comparison.pass) {
            console.log(comparison, s.i, s.o, { y: s.y, m: s.m });
        }
        else {
            console.log('passed');
        }
    });
}
exports.rerun = rerun;
let count = 1;
if (process.argv && process.argv[2]) {
    count = parseInt(process.argv[2]);
    if (count === 0) {
        rerun();
    }
    else {
        run(count);
    }
}
//# sourceMappingURL=index.js.map