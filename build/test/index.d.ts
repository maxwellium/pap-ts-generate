import { Outputs } from './parameters';
export declare function compare(outputs: Outputs, bmfOutputs: Outputs): {
    pass: boolean;
    result: {
        [k: string]: string;
    };
};
export declare function run(count: number): Promise<void>;
export declare function rerun(): void;
