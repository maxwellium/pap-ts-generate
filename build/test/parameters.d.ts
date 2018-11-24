declare const range: any;
/**  Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
   erforderlich bei Jahresberechnung (LZZ = 1)  */
/**  In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent  */
/**  In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent  */
interface Outputs {
    [k: string]: number;
}
interface Inputs {
    [k: string]: number;
}
declare function randomized(): Inputs;
export { range, randomized, Inputs, Outputs };
