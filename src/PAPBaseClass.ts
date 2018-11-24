import { BigDecimal } from 'bigdecimal';


export abstract class PAPBaseClass<Inputs, Outputs, Internals> {
  public name = 'PAPBaseClass';

  public abstract _inputs: Inputs;
  public abstract _outputs: Outputs;
  public abstract _internals: Internals;

  set inputs( inputs: { [ i in keyof Inputs ]: number } ) {
    for ( let key in inputs ) {
      if ( this._inputs[ key ] instanceof BigDecimal ) {
        ( <BigDecimal> <unknown> this._inputs[ key ] ) = new BigDecimal( inputs[ key ] );
      } else if ( 'number' === typeof this._inputs[ key ] ) {
        ( <number> <unknown> this._inputs[ key ] ) = inputs[ key ];
      }
    }
  }

  get inputs(): { [ i in keyof Inputs ]: number } {
    const inputs: any = {};
    for ( let key in this._inputs ) {
      const input = this._inputs[ key ];
      if ( input instanceof BigDecimal ) {
        inputs[ key ] = input.doubleValue();
      } else if ( 'number' === typeof input ) {
        inputs[ key ] = input;
      }
    }
    return inputs;
  }

  get outputs(): { [ i in keyof Outputs ]: number } {
    const outputs: any = {};
    for ( let key in this._outputs ) {
      const output = this._outputs[ key ];
      if ( output instanceof BigDecimal ) {
        outputs[ key ] = output.doubleValue();
      } else if ( 'number' === typeof output ) {
        outputs[ key ] = output;
      }
    }
    return outputs;
  }

  get internals(): { [ i in keyof Internals ]: number } {
    const internals: any = {};
    for ( let key in this._internals ) {
      const internal = this._internals[ key ];
      if ( internal instanceof BigDecimal ) {
        internals[ key ] = internal.doubleValue();
      } else if ( 'number' === typeof internal ) {
        internals[ key ] = internal;
      }
    }
    return internals;
  }

}
