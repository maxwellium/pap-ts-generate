export declare abstract class PAPBaseClass<Inputs, Outputs, Internals> {
    name: string;
    abstract _inputs: Inputs;
    abstract _outputs: Outputs;
    abstract _internals: Internals;
    inputs: {
        [i in keyof Inputs]: number;
    };
    readonly outputs: {
        [i in keyof Outputs]: number;
    };
    readonly internals: {
        [i in keyof Internals]: number;
    };
}
