export declare abstract class PAPBaseClass<Inputs, Outputs, Internals> {
    name: string;
    abstract _inputs: Inputs;
    abstract _outputs: Outputs;
    abstract _internals: Internals;
    abstract main(): void;
    set inputs(inputs: {
        [i in keyof Inputs]: number;
    });
    get inputs(): {
        [i in keyof Inputs]: number;
    };
    get outputs(): {
        [i in keyof Outputs]: number;
    };
    get internals(): {
        [i in keyof Internals]: number;
    };
}
