
declare module 'bigdecimal' {
  import * as Big from 'bigdecimal';

  class BigDecimal {
    constructor( value: number | BigDecimal );
    static ROUND_DOWN: number;
    static ROUND_UP: number;
    static ONE(): BigDecimal;
    static ZERO(): BigDecimal;
    static TEN(): BigDecimal;
    static valueOf( value: number | BigDecimal ): BigDecimal;
    doubleValue(): number;
    longValue(): number;
    compareTo( value: number | BigDecimal ): number;
    setScale( scale: number, round?: number ): BigDecimal;
    divide( value: number | BigDecimal, precision?: number, round?: number ): BigDecimal;
    multiply( value: number | BigDecimal ): BigDecimal;
    add( value: number | BigDecimal ): BigDecimal;
    subtract( value: number | BigDecimal ): BigDecimal;
  }

  export { BigDecimal };
}
