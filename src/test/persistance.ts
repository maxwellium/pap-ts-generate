import { createInterface } from 'readline';
import { createReadStream, appendFile } from 'fs';
import { EventEmitter } from 'events';
import { promisify } from 'util';

import { crc32 } from './crc32';
import { Inputs, Outputs } from './parameters';
import { calculatorsByMonth } from '../index';

const appendFileAsync = promisify( appendFile );

export type Year = keyof typeof calculatorsByMonth;
export type Month = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export interface Sample { y: Year, m: Month, i: Inputs, o: Outputs };

export async function saveSamples(
  filename: string, samples: Sample[]
) {
  await appendFileAsync(
    filename, samples.map( s => `${ generateKey( s.y, s.m, s.i ) } ${ JSON.stringify( s ) }\n` ).join('')
  );
}

export function generateKey( year: Year, month: Month, inputs: Inputs ) {
  return crc32( Buffer.from( `${ year }${ month }${ JSON.stringify( inputs ) }` ) );
}

export function replaySampleStream( filename: string ): EventEmitter {

  const emitter = new EventEmitter(),
    rl = createInterface( {
      input: createReadStream( filename, 'utf8' ),
      crlfDelay: Infinity
    } );

  let n = -1;

  rl.on( 'line', l => {
    n++;
    if ( !l.length ) {
      return;
    }

    try {
      emitter.emit( 'line', <Sample> JSON.parse( l.substr( l.indexOf( ' ' ) ) ) );
    } catch ( e ) {
      console.error( `could not decode in ${ filename } line ${ n }` );
    }
  } );

  return emitter;
}
