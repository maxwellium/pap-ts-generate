import { join } from 'path';
import { bmf } from 'bmf-steuerrechner-api';
import { BMFResponse } from 'bmf-steuerrechner-api/build/parse';

import { calculatorList, calculatorsByMonth } from '../index';
import { randomized, Inputs, Outputs } from './parameters';
import { replaySampleStream, Sample, saveSamples, Year, Month } from './persistance';


const FILEMAME = join( __dirname, 'samples.txt' );

const VERSION_MAP: { y: Year, m: Month[] }[] = [
  { y: 2006, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2007, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2008, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2009, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2010, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2011, m: <Month[]>[ ...Array( 12 ).keys() ].slice( 1 ) },
  { y: 2011, m: <Month[]>[ 12 ] },
  { y: 2012, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2013, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2014, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2015, m: <Month[]>[ ...Array( 12 ).keys() ].slice( 1 ) },
  { y: 2015, m: <Month[]>[ 12 ] },
  { y: 2016, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2017, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2018, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
  { y: 2019, m: <Month[]>[ ...Array( 13 ).keys() ].slice( 1 ) },
];


function calculate( index: number, inputs: Inputs ) {

  let calculator = new calculatorList[ index ]();

  calculator.inputs = inputs as any;
  calculator.main();

  return calculator.outputs;
}

export function compare( outputs: Outputs, bmfOutputs: Outputs ) {

  let pass = true,
    result: { [ k: string ]: string } = {};

  for ( let key in outputs ) {
    if ( outputs[ key ] !== bmfOutputs[ key ] ) {
      result[ key ] = `${ outputs[ key ] } | ${ bmfOutputs[ key ] }`;
      pass = false;
    }
  }

  return {
    pass,
    result
  };
}


function transformBmfResponse( response: BMFResponse ): Outputs {
  const result: Outputs = {};
  for ( let key in response.ausgaben ) {
    result[ key ] = parseInt( response.ausgaben[ key ].value );
  }
  return result;
}


export async function run( count: number ) {

  for ( let i = 0; i < count; i++ ) {

    const inputs = randomized(),
      samples: Sample[] = [];

    for ( let i = 0; i < calculatorList.length; i++ ) {

      const
        y = VERSION_MAP[ i ].y,
        m = VERSION_MAP[ i ].m[ 0 ],
        outputs = <Outputs> calculate( i, inputs ),
        bmfResponse = await bmf( inputs, y, m ),
        bmfOutputs = transformBmfResponse( bmfResponse ),
        comparison = compare( outputs, bmfOutputs );

      samples.push( { y, m, i: inputs, o: bmfOutputs } );
      if ( !comparison.pass ) {
        console.log( comparison, inputs, outputs, { y, m } );
      } else {
        console.log( 'passed' );
      }
    }

    await saveSamples( FILEMAME, samples );
  }
}

export function rerun() {
  const emitter = replaySampleStream( FILEMAME );

  emitter.on( 'line', ( s: Sample ) => {
    const calculator = new calculatorsByMonth[ s.y ][ s.m ]();
    calculator.inputs = s.i as any;
    calculator.main();

    const comparison = compare( calculator.outputs, s.o );
    if ( !comparison.pass ) {
      console.log( comparison, s.i, s.o, { y: s.y, m: s.m } );
    } else {
      console.log( 'passed' );
    }
  } );
}


let count = 0;

if ( process.argv && process.argv[ 2 ] ) {
  count = parseInt( process.argv[ 2 ] );
}
if ( isNaN( count ) || ( count === 0 ) ) {
  rerun();
} else {
  run( count );
}