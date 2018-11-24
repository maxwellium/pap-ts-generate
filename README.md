# pap.js – German Tax Calculators
Javascript implementation of the Programmablaufpläne – pap(s) – as published by the BMF https://www.bmf-steuerrechner.de/interface/pap.jsp

index.js exposes all currently published calculators (2006-2017) including all versions where the BMF has published more than one PAP per year.

#### Usage
```javascript
const PAPs = require( 'pap-js' ),
  PAP2017  = PAPs[ 2017 ][ 0 ].calculator;

let calculator = new PAP2017(),
  input        = {
    LZZ:  1,
    STKL: 1,
    RE4:  2500000
  };

calculator.set( input );

calculator.main();

console.log( calculator.get( 'outputs' ) );
```
yielding
```javascript
{ BK: 0,
  BKS: 0,
  BKV: 0,
  LSTLZZ: 260100,
  SOLZLZZ: 14305,
  SOLZS: 0,
  SOLZV: 0,
  STS: 0,
  STV: 0,
  VKVLZZ: 0,
  VKVSONST: 0,
  VFRB: 100000,
  VFRBS1: 0,
  VFRBS2: 0,
  WVFRB: 1148500,
  WVFRBO: 0,
  WVFRBM: 0 }
```

which is the expected result according to the offical reference implementation by the BMF https://www.bmf-steuerrechner.de/interface/LSt2017.jsp?LZZ=1&RE4=2500000&STKL=1
```xml
<?xml version="1.0" encoding="UTF-8"?>        
<lohnsteuer jahr="2017">
    <eingaben>
        <eingabe name="STKL" value="1" status="ok" />
        <eingabe name="RE4" value="2500000" status="ok" />
        <eingabe name="LZZ" value="1" status="ok" />
    </eingaben>
    <ausgaben>
        <ausgabe name="BK" value="0" type="STANDARD"/>
        <ausgabe name="BKS" value="0" type="STANDARD"/>
        <ausgabe name="BKV" value="0" type="STANDARD"/>
        <ausgabe name="LSTLZZ" value="260100" type="STANDARD"/>
        <ausgabe name="SOLZLZZ" value="14305" type="STANDARD"/>
        <ausgabe name="SOLZS" value="0" type="STANDARD"/>
        <ausgabe name="SOLZV" value="0" type="STANDARD"/>
        <ausgabe name="STS" value="0" type="STANDARD"/>
        <ausgabe name="STV" value="0" type="STANDARD"/>
        <ausgabe name="VKVLZZ" value="0" type="STANDARD"/>
        <ausgabe name="VKVSONST" value="0" type="STANDARD"/>
        <ausgabe name="VFRB" value="100000" type="DBA" />
        <ausgabe name="VFRBS1" value="0" type="DBA" />
        <ausgabe name="VFRBS2" value="0" type="DBA" />
        <ausgabe name="WVFRB" value="1148500" type="DBA" />
        <ausgabe name="WVFRBO" value="0" type="DBA" />
        <ausgabe name="WVFRBM" value="0" type="DBA" />
    </ausgaben>
</lohnsteuer>
```

#### parameters
for a list of parameters just check the lib/calculators/[version].js. They are fairly neatly organized and include the full comments by the BMF on purpose and possible values of inputs, outputs and internals :)
The most important ones are usually
- LZZ – Lohnzahlungszeitraum: 1 = Jahr, 2 = Monat, 3 = Woche, 4 = Tag
- STKL – Steuerklasse: 1 = I, 2 = II, 3 = III, 4 = IV, 5 = V, 6 = VI
- RE4 – Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
               fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
               der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
               Freibetrags in Cents.

#### testing
I have included a basic test suite for playing around with the plethora of input combinations. Each call of `npm run test` generates a random data set and plugs it into every single version of the PAP. It also queries the official reference implementation via [bmf-steuerrechner-api](https://github.com/maxwellium/bmf-steuerrechner-api). The results of the api queries are stored in a simple leveldb, so the tests can be replayed without hitting the bmf api every time. Have a look at test/index.js and feel free to turn this into proper test calls via pull request ;)

#### future PAPs
This repository also contains the transform and generator files to automatically produce js code from the xmls the BMF provides. `npm run generate`
it will iterate over all xml files in the folder paps and produce the corresponding calculator class in lib/calculators.

## License
Proprietary Software! (c) Copyright 2018 bonnie + cloud UG, all rights reserved.
