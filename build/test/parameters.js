"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const range = {};
exports.range = range;
// range.af = [
//   0,
//   1
// ];
/**  Auf die Vollendung des 64. Lebensjahres folgende
   Kalenderjahr (erforderlich, wenn ALTER1=1)  */
range.AJAHR = {
    min: 1900,
    max: 2100,
    whole: true
};
/**  1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
   der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0  */
range.ALTER1 = [
    0,
    1
];
/**  in VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent  */
//TODO: mutate? range.ENTSCH = 0;
/**  eingetragener Faktor mit drei Nachkommastellen  */
//TODO: mutate? range.f = 1.0;
/**  Jahresfreibetrag nach Maßgabe der Eintragungen auf der
   Lohnsteuerkarte in Cents (ggf. 0)  */
//TODO: mutate? range.JFREIB = new BigDecimal(0);
/**  Jahreshinzurechnungsbetrag in Cents (ggf. 0)  */
//TODO: mutate? range.JHINZU = new BigDecimal(0);
/**  Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent.
   Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingabe „sonsti-ger Bezüge“ (Feld SONSTB)
   oder bei Eingabe der „Vergütung für mehrjährige Tätigkeit“ (Feld VMT).
   Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem
   voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrere Jahres aus einem vorangegangenen
   Abrechnungszeitraum sind in voller Höhe hinzuzurechnen.  */
//TODO: mutate? range.JRE4 = new BigDecimal(0);
/**  In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)  */
//TODO: mutate? range.JVBEZ = new BigDecimal(0);
/** Merker für die Vorsorgepauschale
2 = der Arbeitnehmer ist NICHT in der gesetzlichen Rentenversicherung versichert.

1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
Beitragsbemessungsgrenze OST.

0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
Beitragsbemessungsgrenze WEST.  */
range.KRV = [
    0,
    1,
    2
];
/**  Einkommensbezogener Zusatzbeitragssatz eines gesetzlich krankenversicherten Arbeitnehmers,
auf dessen Basis der an die Krankenkasse zu zahlende Zusatzbeitrag berechnet wird,
in Prozent (bspw. 0,90 für 0,90 %) mit 2 Dezimalstellen.
Der von der Kranken-kasse festgesetzte Zusatzbeitragssatz ist bei Abweichungen unmaßgeblich.  */
range.KVZ = [
    0,
    0.1,
    0.5,
    0.9
];
/**  Lohnzahlungszeitraum:
   1 = Jahr
   2 = Monat
   3 = Woche
   4 = Tag  */
//TODO: mutate?
range.LZZ = 1;
/**  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für
   den Lohnzahlungszeitraum in Cent  */
//TODO: mutate? range.LZZFREIB = new BigDecimal(0);
/**  In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
   für den Lohnzahlungszeitraum in Cent  */
//TODO: mutate? range.LZZHINZU = new BigDecimal(0);
/**  Dem Arbeitgeber mitgeteilte Zahlungen des Arbeitnehmers zur privaten
   Kranken- bzw. Pflegeversicherung im Sinne des §10 Abs. 1 Nr. 3 EStG 2010
   als Monatsbetrag in Cent (der Wert ist inabhängig vom Lohnzahlungszeitraum immer
   als Monatsbetrag anzugeben). */
//TODO: mutate? range.PKPV = new BigDecimal(0);
/**  Krankenversicherung:
   0 = gesetzlich krankenversicherte Arbeitnehmer
   1 = ausschließlich privat krankenversicherte Arbeitnehmer OHNE Arbeitgeberzuschuss
   2 = ausschließlich privat krankenversicherte Arbeitnehmer MIT Arbeitgeberzuschuss  */
range.PKV = [
    0,
    1,
    2
];
/**  1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw.
   zu berücksichtigen wären, sonst 0.  */
range.PVS = [
    0,
    1
];
/**  1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung
   zu zahlen hat, sonst 0.  */
range.PVZ = [
    0,
    1
];
/**  Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
   keiner Religionszugehoerigkeit = 0)  */
range.R = [
    0,
    1
];
/**  Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
   fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
   der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
   Freibetrags in Cents.  */
range.RE4 = {
    max: 10000000,
    whole: true
};
/**  Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
   Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
   soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0)  */
//TODO: mutate? range.SONSTB = new BigDecimal( 0 );
/**  Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
   soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
   (in SONSTB enthalten) in Cents  */
//TODO: mutate? range.STERBE = new BigDecimal( 0 );
/**  Steuerklasse:
   1 = I
   2 = II
   3 = III
   4 = IV
   5 = V
   6 = VI  */
range.STKL = [
    1,
    2,
    3,
    4,
    5,
    6
];
/**  In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0)  */
//TODO: mutate? range.VBEZ = new BigDecimal( 0 );
/**  Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
   in Cents */
//TODO: mutate? range.VBEZM = new BigDecimal( 0 );
/**  Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
   bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
   bei Versorgungsbezuegen in Cents */
//TODO: mutate? range.VBEZS = new BigDecimal( 0 );
/**  In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
  in Cents (ggf. 0)  */
//TODO: mutate? range.VBS = new BigDecimal( 0 );
/**  Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
   mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug  */
//TODO: mutate? range.VJAHR = 0;
/**  Kapitalauszahlungen / Abfindungen / Nachzahlungen bei Versorgungsbezügen
   für mehrere Jahre in Cent (ggf. 0)  */
//TODO: mutate? range.VKAPA = new BigDecimal(0);
/**  Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen
bei Versorgungsbezügen in Cent (ggf. 0)  */
//TODO: mutate? range.VMT = new BigDecimal(0);
/**  Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
   I, II, III und IV)  */
range.ZKF = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10
];
;
;
function randomized() {
    let result = {};
    for (let parameter in range) {
        if ('object' === typeof range[parameter]) {
            if (range[parameter].hasOwnProperty('length')) {
                result[parameter] = range[parameter][Math.floor(Math.random() * range[parameter].length)];
            }
            else {
                let min = range[parameter].min || 0, span = (range[parameter].max || 0) - min;
                result[parameter] = Math.random() * span + min;
                if (range[parameter].whole) {
                    result[parameter] = Math.round(result[parameter]);
                }
            }
        }
        else {
            result[parameter] = range[parameter];
        }
    }
    return result;
}
exports.randomized = randomized;
//# sourceMappingURL=parameters.js.map