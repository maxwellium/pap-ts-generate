"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const readline_1 = require("readline");
const fs_1 = require("fs");
const events_1 = require("events");
const util_1 = require("util");
const crc32_1 = require("./crc32");
const appendFileAsync = util_1.promisify(fs_1.appendFile);
;
async function saveSamples(filename, samples) {
    await appendFileAsync(filename, samples.map(s => `${generateKey(s.y, s.m, s.i)} ${JSON.stringify(s)}\n`).join(''));
}
exports.saveSamples = saveSamples;
function generateKey(year, month, inputs) {
    return crc32_1.crc32(Buffer.from(`${year}${month}${JSON.stringify(inputs)}`));
}
exports.generateKey = generateKey;
function replaySampleStream(filename) {
    const emitter = new events_1.EventEmitter(), rl = readline_1.createInterface({
        input: fs_1.createReadStream(filename, 'utf8'),
        crlfDelay: Infinity
    });
    let n = -1;
    rl.on('line', l => {
        n++;
        if (!l.length) {
            return;
        }
        try {
            emitter.emit('line', JSON.parse(l.substr(l.indexOf(' '))));
        }
        catch (e) {
            console.error(`could not decode in ${filename} line ${n}`);
        }
    });
    return emitter;
}
exports.replaySampleStream = replaySampleStream;
//# sourceMappingURL=persistance.js.map