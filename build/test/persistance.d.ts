/// <reference types="node" />
import { EventEmitter } from 'events';
import { Inputs, Outputs } from './parameters';
import { calculatorsByMonth } from '../index';
export declare type Year = keyof typeof calculatorsByMonth;
export declare type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
export interface Sample {
    y: Year;
    m: Month;
    i: Inputs;
    o: Outputs;
}
export declare function saveSamples(filename: string, samples: Sample[]): Promise<void>;
export declare function generateKey(year: Year, month: Month, inputs: Inputs): number;
export declare function replaySampleStream(filename: string): EventEmitter;
