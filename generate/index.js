const child_process = require( 'child_process' ),
  { basename, join } = require( 'path' ),
  fs = require( 'fs' );


const dirXMLs = join( __dirname, '/../pap-xmls/' ),
  dirCalculators = join( __dirname, '/../src/calculators/' ),
  xmlFilenames = fs.readdirSync( dirXMLs );


for ( let xmlFilename of xmlFilenames ) {
  xslt( xmlFilename );
  postProcess( xmlFilename );
}


function xslt( xmlFilename ) {
  let base = basename( xmlFilename, '.xml' );
  child_process.execSync( `xsltproc -o ${ dirCalculators + base }.ts ${ __dirname }/generate.xsl ${ dirXMLs + xmlFilename }` );
}


function postProcess( xmlFilename ) {

  const calculatorFilename = `${ dirCalculators }${ basename( xmlFilename, '.xml' ) }.ts`

  let file = fs
    .readFileSync( calculatorFilename, 'utf8' )
    .replace( /\t/g, '  ' )
    .replace( /(\W)([0-9\.]+)[LD](\W)/g, '$1$2$3' )
    .replace( /BigDecimal\.(ZERO|ONE|TEN)/g, 'BigDecimal.$1()' );

  const [ , replaceBlocks ] = file.match( /\/\*--replaceBlock\n(.+)?\n\*\//ms ),
    matchers = replaceBlocks.split( '*' ).slice( 0, -1 ).map( s => s.split( ':' ) );

  let [ , methodsText ] = file.match( /\/\/--methodsstart\n+(.+)?\n+\/\/--methodsend/ms );


  for ( matcher of matchers ) {
    methodsText = methodsText.replace( new RegExp( matcher[ 0 ], 'g' ), '$1' + matcher[ 1 ] + '$2' );
  }


  file = file
    .replace( /\/\/--methodsstart.+?\/\/--methodsend/ms, () => methodsText )
    .replace( /\/\*--replaceBlock.+?\*\//ms, '' );

  fs.writeFileSync( calculatorFilename, file );
}
