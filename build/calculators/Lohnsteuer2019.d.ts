import { BigDecimal } from 'bigdecimal';
import { PAPBaseClass } from '../PAPBaseClass';
export interface Inputs {
    /** 1, wenn die Anwendung des Faktorverfahrens gewählt wurden (nur in Steuerklasse IV) */
    af: number;
    /** Auf die Vollendung des 64. Lebensjahres folgende
                 Kalenderjahr (erforderlich, wenn ALTER1=1) */
    AJAHR: number;
    /** 1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
                 der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0 */
    ALTER1: number;
    /** in VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent */
    ENTSCH: BigDecimal;
    /** eingetragener Faktor mit drei Nachkommastellen */
    f: number;
    /** Jahresfreibetrag nach Maßgabe der Eintragungen auf der
                 Lohnsteuerkarte in Cents (ggf. 0) */
    JFREIB: BigDecimal;
    /** Jahreshinzurechnungsbetrag in Cents (ggf. 0) */
    JHINZU: BigDecimal;
    /** Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent.
                 Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingabe „sonsti-ger Bezüge“ (Feld SONSTB)
                 oder bei Eingabe der „Vergütung für mehrjährige Tätigkeit“ (Feld VMT).
                 Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem
                 voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrere Jahres aus einem vorangegangenen
                 Abrechnungszeitraum sind in voller Höhe hinzuzurechnen. */
    JRE4: BigDecimal;
    /** In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0) */
    JVBEZ: BigDecimal;
    /**Merker für die Vorsorgepauschale
          2 = der Arbeitnehmer ist NICHT in der gesetzlichen Rentenversicherung versichert.
          
          1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
            Beitragsbemessungsgrenze OST.
            
          0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die
            Beitragsbemessungsgrenze WEST. */
    KRV: number;
    /** Einkommensbezogener Zusatzbeitragssatz eines gesetzlich krankenversicherten Arbeitnehmers,
         auf dessen Basis der an die Krankenkasse zu zahlende Zusatzbeitrag berechnet wird,
         in Prozent (bspw. 0,90 für 0,90 %) mit 2 Dezimalstellen.
         Der von der Kranken-kasse festgesetzte Zusatzbeitragssatz ist bei Abweichungen unmaßgeblich. */
    KVZ: BigDecimal;
    /** Lohnzahlungszeitraum:
                 1 = Jahr
                 2 = Monat
                 3 = Woche
                 4 = Tag */
    LZZ: number;
    /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für
                 den Lohnzahlungszeitraum in Cent */
    LZZFREIB: BigDecimal;
    /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
                 für den Lohnzahlungszeitraum in Cent */
    LZZHINZU: BigDecimal;
    /** Dem Arbeitgeber mitgeteilte Zahlungen des Arbeitnehmers zur privaten
                 Kranken- bzw. Pflegeversicherung im Sinne des §10 Abs. 1 Nr. 3 EStG 2010
                 als Monatsbetrag in Cent (der Wert ist inabhängig vom Lohnzahlungszeitraum immer
                 als Monatsbetrag anzugeben).*/
    PKPV: BigDecimal;
    /** Krankenversicherung:
                 0 = gesetzlich krankenversicherte Arbeitnehmer
                 1 = ausschließlich privat krankenversicherte Arbeitnehmer OHNE Arbeitgeberzuschuss
                 2 = ausschließlich privat krankenversicherte Arbeitnehmer MIT Arbeitgeberzuschuss */
    PKV: number;
    /** 1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw.
                 zu berücksichtigen wären, sonst 0. */
    PVS: number;
    /** 1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung
                 zu zahlen hat, sonst 0. */
    PVZ: number;
    /** Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
                 keiner Religionszugehoerigkeit = 0) */
    R: number;
    /** Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
                 fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
                 der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
                 Freibetrags in Cents. */
    RE4: BigDecimal;
    /** Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
                 Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
                 soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0) */
    SONSTB: BigDecimal;
    /** Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
                 soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
                 (in SONSTB enthalten) in Cents */
    STERBE: BigDecimal;
    /** Steuerklasse:
                 1 = I
                 2 = II
                 3 = III
                 4 = IV
                 5 = V
                 6 = VI */
    STKL: number;
    /** In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0) */
    VBEZ: BigDecimal;
    /** Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
                 in Cents*/
    VBEZM: BigDecimal;
    /** Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
                 bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
                 bei Versorgungsbezuegen in Cents*/
    VBEZS: BigDecimal;
    /** In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
                in Cents (ggf. 0) */
    VBS: BigDecimal;
    /** Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
                 mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug */
    VJAHR: number;
    /** Kapitalauszahlungen / Abfindungen / Nachzahlungen bei Versorgungsbezügen
                 für mehrere Jahre in Cent (ggf. 0) */
    VKAPA: BigDecimal;
    /** Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen
           bei Versorgungsbezügen in Cent (ggf. 0) */
    VMT: BigDecimal;
    /** Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
                 I, II, III und IV) */
    ZKF: BigDecimal;
    /** Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
                 erforderlich bei Jahresberechnung (LZZ = 1) */
    ZMVB: number;
    /** In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent */
    JRE4ENT: BigDecimal;
    /** In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent */
    SONSTENT: BigDecimal;
}
export interface Outputs {
    /** Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents */
    BK: BigDecimal;
    /** Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
                 fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents */
    BKS: BigDecimal;
    BKV: BigDecimal;
    /** Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents */
    LSTLZZ: BigDecimal;
    /** Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
                 in Cents */
    SOLZLZZ: BigDecimal;
    /** Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
                 Taetigkeit) in Cents */
    SOLZS: BigDecimal;
    /** Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
                 Cents */
    SOLZV: BigDecimal;
    /** Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
                 Taetigkeit) in Cents */
    STS: BigDecimal;
    /** Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents */
    STV: BigDecimal;
    /** Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur
           privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch
           die Mindestvorsorgepauschale) in Cent beim laufenden Arbeitslohn. Für Zwecke der Lohn-
           steuerbescheinigung sind die einzelnen Ausgabewerte außerhalb des eigentlichen Lohn-
           steuerbescheinigungsprogramms zu addieren; hinzuzurechnen sind auch die Ausgabewerte
           VKVSONST */
    VKVLZZ: BigDecimal;
    /** Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers
           zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf.
           auch die Mindestvorsorgepauschale) in Cent bei sonstigen Bezügen. Der Ausgabewert kann
           auch negativ sein. Für tarifermäßigt zu besteuernde Vergütungen für mehrjährige
           Tätigkeiten enthält der PAP keinen entsprechenden Ausgabewert. */
    VKVSONST: BigDecimal;
    /** Verbrauchter Freibetrag bei Berechnung des laufenden Arbeitslohns, in Cent */
    VFRB: BigDecimal;
    /** Verbrauchter Freibetrag bei Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent */
    VFRBS1: BigDecimal;
    /** Verbrauchter Freibetrag bei Berechnung der sonstigen Bezüge, in Cent */
    VFRBS2: BigDecimal;
    /** Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über
          dem Grundfreibetrag bei der Berechnung des laufenden Arbeitslohns, in Cent */
    WVFRB: BigDecimal;
    /** Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE über dem Grundfreibetrag
          bei der Berechnung des voraussichtlichen Jahresarbeitslohns, in Cent */
    WVFRBO: BigDecimal;
    /** Für die weitergehende Berücksichtigung des Steuerfreibetrags nach dem DBA Türkei verfügbares ZVE
          über dem Grundfreibetrag bei der Berechnung der sonstigen Bezüge, in Cent */
    WVFRBM: BigDecimal;
}
export interface Internals {
    /** Altersentlastungsbetrag nach Alterseinkünftegesetz in €,
                 Cent (2 Dezimalstellen) */
    ALTE: BigDecimal;
    /** Arbeitnehmer-Pauschbetrag in EURO */
    ANP: BigDecimal;
    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
                 auf ganze Cents abgerundet */
    ANTEIL1: BigDecimal;
    /** Bemessungsgrundlage für Altersentlastungsbetrag in €, Cent
                 (2 Dezimalstellen) */
    BMG: BigDecimal;
    /** Beitragsbemessungsgrenze in der gesetzlichen Krankenversicherung
              und der sozialen Pflegeversicherung in Euro */
    BBGKVPV: BigDecimal;
    /**  Nach Programmablaufplan 2019 */
    bd: BigDecimal;
    /** allgemeine Beitragsbemessungsgrenze in der allgemeinen Renten-versicherung in Euro */
    BBGRV: BigDecimal;
    /** Differenz zwischen ST1 und ST2 in EURO */
    DIFF: BigDecimal;
    /** Entlastungsbetrag fuer Alleinerziehende in EURO */
    EFA: BigDecimal;
    /** Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) */
    FVB: BigDecimal;
    /** Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) für die Berechnung
                 der Lohnsteuer für den sonstigen Bezug */
    FVBSO: BigDecimal;
    /** Zuschlag zum Versorgungsfreibetrag in EURO */
    FVBZ: BigDecimal;
    /** Zuschlag zum Versorgungsfreibetrag in EURO fuer die Berechnung
                 der Lohnsteuer beim sonstigen Bezug */
    FVBZSO: BigDecimal;
    /** Grundfreibetrag in Euro */
    GFB: BigDecimal;
    /** Maximaler Altersentlastungsbetrag in € */
    HBALTE: BigDecimal;
    /** Massgeblicher maximaler Versorgungsfreibetrag in € */
    HFVB: BigDecimal;
    /** Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €,Cent
                 (2 Dezimalstellen) */
    HFVBZ: BigDecimal;
    /** Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €, Cent
                 (2 Dezimalstellen) für die Berechnung der Lohnsteuer für den
                 sonstigen Bezug */
    HFVBZSO: BigDecimal;
    /** Nummer der Tabellenwerte fuer Versorgungsparameter */
    J: number;
    /** Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
                 Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO */
    JBMG: BigDecimal;
    /** Auf einen Jahreslohn hochgerechneter LZZFREIB in €, Cent
                 (2 Dezimalstellen) */
    JLFREIB: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnete LZZHINZU in €, Cent
                 (2 Dezimalstellen) */
    JLHINZU: BigDecimal;
    /** Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
                 UPANTEIL errechnet werden soll in Cents */
    JW: BigDecimal;
    /** Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag */
    K: number;
    /** Merker für Berechnung Lohnsteuer für mehrjährige Tätigkeit.
           0 = normale Steuerberechnung
           1 = Steuerberechnung für mehrjährige Tätigkeit
           2 = entfällt */
    KENNVMT: number;
    /** Summe der Freibetraege fuer Kinder in EURO */
    KFB: BigDecimal;
    /** Beitragssatz des Arbeitgebers zur Krankenversicherung */
    KVSATZAG: BigDecimal;
    /** Beitragssatz des Arbeitnehmers zur Krankenversicherung */
    KVSATZAN: BigDecimal;
    /** Kennzahl fuer die Einkommensteuer-Tabellenart:
                 1 = Grundtabelle
                 2 = Splittingtabelle */
    KZTAB: number;
    /** Jahreslohnsteuer in EURO */
    LSTJAHR: BigDecimal;
    /** Zwischenfelder der Jahreslohnsteuer in Cent */
    LST1: BigDecimal;
    LST2: BigDecimal;
    LST3: BigDecimal;
    LSTOSO: BigDecimal;
    LSTSO: BigDecimal;
    /** Mindeststeuer fuer die Steuerklassen V und VI in EURO */
    MIST: BigDecimal;
    /** Beitragssatz des Arbeitgebers zur Pflegeversicherung */
    PVSATZAG: BigDecimal;
    /** Beitragssatz des Arbeitnehmers zur Pflegeversicherung */
    PVSATZAN: BigDecimal;
    /** Beitragssatz des Arbeitnehmers in der allgemeinen gesetzlichen Rentenversicherung (4 Dezimalstellen)  */
    RVSATZAN: BigDecimal;
    /** Rechenwert in Gleitkommadarstellung */
    RW: BigDecimal;
    /** Sonderausgaben-Pauschbetrag in EURO */
    SAP: BigDecimal;
    /** Freigrenze fuer den Solidaritaetszuschlag in EURO */
    SOLZFREI: BigDecimal;
    /** Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen) */
    SOLZJ: BigDecimal;
    /** Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
                 in EURO, C (2 Dezimalstellen) */
    SOLZMIN: BigDecimal;
    /** Tarifliche Einkommensteuer in EURO */
    ST: BigDecimal;
    /** Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO */
    ST1: BigDecimal;
    /** Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO */
    ST2: BigDecimal;
    /** Zwischenfeld zur Ermittlung der Steuer auf Vergütungen für mehrjährige Tätigkeit */
    STOVMT: BigDecimal;
    /** Teilbetragssatz der Vorsorgepauschale für die Rentenversicherung (2 Dezimalstellen) */
    TBSVORV: BigDecimal;
    /** Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents */
    VBEZB: BigDecimal;
    /** Bemessungsgrundlage für den Versorgungsfreibetrag in Cent für
                 den sonstigen Bezug */
    VBEZBSO: BigDecimal;
    /** Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C */
    VHB: BigDecimal;
    /** Vorsorgepauschale in EURO, C (2 Dezimalstellen) */
    VSP: BigDecimal;
    /** Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C */
    VSPN: BigDecimal;
    /** Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
                 dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen) */
    VSP1: BigDecimal;
    /** Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
                 dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen) */
    VSP2: BigDecimal;
    /** Vorsorgepauschale mit Teilbeträgen für die gesetzliche Kranken- und
           soziale Pflegeversicherung nach fiktiven Beträgen oder ggf. für die
           private Basiskrankenversicherung und private Pflege-Pflichtversicherung
           in Euro, Cent (2 Dezimalstellen) */
    VSP3: BigDecimal;
    /** Erster Grenzwert in Steuerklasse V/VI in Euro */
    W1STKL5: BigDecimal;
    /** Zweiter Grenzwert in Steuerklasse V/VI in Euro */
    W2STKL5: BigDecimal;
    /** Dritter Grenzwert in Steuerklasse V/VI in Euro */
    W3STKL5: BigDecimal;
    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO */
    VSPMAX1: BigDecimal;
    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO */
    VSPMAX2: BigDecimal;
    /** Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
                 in EURO, C (2 Dezimalstellen) */
    VSPO: BigDecimal;
    /** Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
                 Rest von VSPO in EURO, C (2 Dezimalstellen) */
    VSPREST: BigDecimal;
    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
                 in EURO, C (2 Dezimalstellen) */
    VSPVOR: BigDecimal;
    /** Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG €, C
                 (2 Dezimalstellen) */
    X: BigDecimal;
    /** gem. § 32a Abs. 1 EStG (6 Dezimalstellen) */
    Y: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
                 nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4. */
    ZRE4: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen) */
    ZRE4J: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
                 nach Abzug des Versorgungsfreibetrags und des Alterentlastungsbetrags
                 zur Berechnung der Vorsorgepauschale in €, Cent (2 Dezimalstellen) */
    ZRE4VP: BigDecimal;
    /** Feste Tabellenfreibeträge (ohne Vorsorgepauschale) in €, Cent
                 (2 Dezimalstellen) */
    ZTABFB: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
                 EURO, C (2 Dezimalstellen) */
    ZVBEZ: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes VBEZ in €, C (2 Dezimalstellen) */
    ZVBEZJ: BigDecimal;
    /** Zu versteuerndes Einkommen in €, C (2 Dezimalstellen) */
    ZVE: BigDecimal;
    /** Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
                 Abs. 2 Satz 7 EStG in € */
    ZX: BigDecimal;
    ZZX: BigDecimal;
    HOCH: BigDecimal;
    VERGL: BigDecimal;
    /** Jahreswert der berücksichtigten Beiträge zur privaten Basis-Krankenversicherung und
            privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent. */
    VKV: BigDecimal;
}
/**  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags  */
export declare const TAB1: BigDecimal[];
/**  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags  */
export declare const TAB2: BigDecimal[];
/**  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag  */
export declare const TAB3: BigDecimal[];
/**  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags  */
export declare const TAB4: BigDecimal[];
/**  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags  */
export declare const TAB5: BigDecimal[];
/**  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte  */
export declare const ZAHL1: BigDecimal;
export declare const ZAHL2: BigDecimal;
export declare const ZAHL5: BigDecimal;
export declare const ZAHL7: BigDecimal;
export declare const ZAHL12: BigDecimal;
export declare const ZAHL100: BigDecimal;
export declare const ZAHL360: BigDecimal;
export declare const ZAHL500: BigDecimal;
export declare const ZAHL700: BigDecimal;
export declare const ZAHL1000: BigDecimal;
export declare const ZAHL10000: BigDecimal;
export declare class Lohnsteuer2019Big extends PAPBaseClass<Inputs, Outputs, Internals> {
    static readonly TAB1: BigDecimal[];
    static readonly TAB2: BigDecimal[];
    static readonly TAB3: BigDecimal[];
    static readonly TAB4: BigDecimal[];
    static readonly TAB5: BigDecimal[];
    static readonly ZAHL1: BigDecimal;
    static readonly ZAHL2: BigDecimal;
    static readonly ZAHL5: BigDecimal;
    static readonly ZAHL7: BigDecimal;
    static readonly ZAHL12: BigDecimal;
    static readonly ZAHL100: BigDecimal;
    static readonly ZAHL360: BigDecimal;
    static readonly ZAHL500: BigDecimal;
    static readonly ZAHL700: BigDecimal;
    static readonly ZAHL1000: BigDecimal;
    static readonly ZAHL10000: BigDecimal;
    name: string;
    _inputs: {
        af: number;
        AJAHR: number;
        ALTER1: number;
        ENTSCH: BigDecimal;
        f: number;
        JFREIB: BigDecimal;
        JHINZU: BigDecimal;
        JRE4: BigDecimal;
        JVBEZ: BigDecimal;
        KRV: number;
        KVZ: BigDecimal;
        LZZ: number;
        LZZFREIB: BigDecimal;
        LZZHINZU: BigDecimal;
        PKPV: BigDecimal;
        PKV: number;
        PVS: number;
        PVZ: number;
        R: number;
        RE4: BigDecimal;
        SONSTB: BigDecimal;
        STERBE: BigDecimal;
        STKL: number;
        VBEZ: BigDecimal;
        VBEZM: BigDecimal;
        VBEZS: BigDecimal;
        VBS: BigDecimal;
        VJAHR: number;
        VKAPA: BigDecimal;
        VMT: BigDecimal;
        ZKF: BigDecimal;
        ZMVB: number;
        JRE4ENT: BigDecimal;
        SONSTENT: BigDecimal;
    };
    _outputs: {
        BK: BigDecimal;
        BKS: BigDecimal;
        BKV: BigDecimal;
        LSTLZZ: BigDecimal;
        SOLZLZZ: BigDecimal;
        SOLZS: BigDecimal;
        SOLZV: BigDecimal;
        STS: BigDecimal;
        STV: BigDecimal;
        VKVLZZ: BigDecimal;
        VKVSONST: BigDecimal;
        VFRB: BigDecimal;
        VFRBS1: BigDecimal;
        VFRBS2: BigDecimal;
        WVFRB: BigDecimal;
        WVFRBO: BigDecimal;
        WVFRBM: BigDecimal;
    };
    _internals: {
        ALTE: BigDecimal;
        ANP: BigDecimal;
        ANTEIL1: BigDecimal;
        BMG: BigDecimal;
        BBGKVPV: BigDecimal;
        bd: BigDecimal;
        BBGRV: BigDecimal;
        DIFF: BigDecimal;
        EFA: BigDecimal;
        FVB: BigDecimal;
        FVBSO: BigDecimal;
        FVBZ: BigDecimal;
        FVBZSO: BigDecimal;
        GFB: BigDecimal;
        HBALTE: BigDecimal;
        HFVB: BigDecimal;
        HFVBZ: BigDecimal;
        HFVBZSO: BigDecimal;
        J: number;
        JBMG: BigDecimal;
        JLFREIB: BigDecimal;
        JLHINZU: BigDecimal;
        JW: BigDecimal;
        K: number;
        KENNVMT: number;
        KFB: BigDecimal;
        KVSATZAG: BigDecimal;
        KVSATZAN: BigDecimal;
        KZTAB: number;
        LSTJAHR: BigDecimal;
        LST1: BigDecimal;
        LST2: BigDecimal;
        LST3: BigDecimal;
        LSTOSO: BigDecimal;
        LSTSO: BigDecimal;
        MIST: BigDecimal;
        PVSATZAG: BigDecimal;
        PVSATZAN: BigDecimal;
        RVSATZAN: BigDecimal;
        RW: BigDecimal;
        SAP: BigDecimal;
        SOLZFREI: BigDecimal;
        SOLZJ: BigDecimal;
        SOLZMIN: BigDecimal;
        ST: BigDecimal;
        ST1: BigDecimal;
        ST2: BigDecimal;
        STOVMT: BigDecimal;
        TBSVORV: BigDecimal;
        VBEZB: BigDecimal;
        VBEZBSO: BigDecimal;
        VHB: BigDecimal;
        VSP: BigDecimal;
        VSPN: BigDecimal;
        VSP1: BigDecimal;
        VSP2: BigDecimal;
        VSP3: BigDecimal;
        W1STKL5: BigDecimal;
        W2STKL5: BigDecimal;
        W3STKL5: BigDecimal;
        VSPMAX1: BigDecimal;
        VSPMAX2: BigDecimal;
        VSPO: BigDecimal;
        VSPREST: BigDecimal;
        VSPVOR: BigDecimal;
        X: BigDecimal;
        Y: BigDecimal;
        ZRE4: BigDecimal;
        ZRE4J: BigDecimal;
        ZRE4VP: BigDecimal;
        ZTABFB: BigDecimal;
        ZVBEZ: BigDecimal;
        ZVBEZJ: BigDecimal;
        ZVE: BigDecimal;
        ZX: BigDecimal;
        ZZX: BigDecimal;
        HOCH: BigDecimal;
        VERGL: BigDecimal;
        VKV: BigDecimal;
    };
    /**  PROGRAMMABLAUFPLAN, PAP Seite 13  */
    main(): void;
    /**  Zuweisung von Werten this._inputs.für bestimmte Sozialversicherungsparameter  PAP Seite 14  */
    MPARA(): void;
    /**  Ermittlung des Jahresarbeitslohns nach § 39 b Abs. 2 Satz 2 EStG, PAP Seite 15  */
    MRE4JL(): void;
    /**  Freibeträge this._inputs.für Versorgungsbezüge, Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 16  */
    MRE4(): void;
    /**  Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 17  */
    MRE4ALTE(): void;
    /**  Ermittlung des Jahresarbeitslohns nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4 EStG, PAP Seite 19  */
    MRE4ABZ(): void;
    /**  Berechnung fuer laufende Lohnzahlungszeitraueme Seite 20 */
    MBERECH(): void;
    /**  Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 21  */
    MZTABFB(): void;
    /**  Ermittlung Jahreslohnsteuer, PAP Seite 22  */
    MLSTJAHR(): void;
    /**  PAP Seite 23  */
    UPVKVLZZ(): void;
    /**  PAP Seite 23  */
    UPVKV(): void;
    /**  PAP Seite 24  */
    UPLSTLZZ(): void;
    /**  Ermittlung der Jahreslohnsteuer aus dem Einkommensteuertarif. PAP Seite 25  */
    UPMLST(): void;
    /**    Vorsorgepauschale (§ 39b Absatz 2 Satz 5 Nummer 3 und Absatz 4 EStG)
          Achtung: Es wird davon ausgegangen, dass
            a) Es wird davon ausge-gangen, dassa) this._inputs.für die BBG (Ost) 60.000 Euro und this._inputs.für die BBG (West) 71.400 Euro festgelegt wird sowie
            b) der Beitragssatz zur Rentenversicherung auf 18,9 % gesenkt wird.
          
          PAP Seite 26   */
    UPEVP(): void;
    /**  Vorsorgepauschale (§39b Abs. 2 Satz 5 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 27  */
    MVSP(): void;
    /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 28  */
    MST5_6(): void;
    /**  Unterprogramm zur Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 29  */
    UP5_6(): void;
    /**  Solidaritaetszuschlag, PAP Seite 30  */
    MSOLZ(): void;
    /**  Anteil von Jahresbetraegen fuer einen this._inputs.LZZ (§ 39b Abs. 2 Satz 9 EStG), PAP Seite 31  */
    UPANTEIL(): void;
    /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 8 EStG), PAP Seite 32  */
    MSONST(): void;
    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 und 10 EStG), PAP Seite 33  */
    MVMT(): void;
    /**  Sonderberechnung ohne sonstige Bezüge this._inputs.für Berechnung bei sonstigen Bezügen oder Vergütung this._inputs.für mehrjährige Tätigkeit, PAP Seite 34  */
    MOSONST(): void;
    /**  Sonderberechnung mit sonstige Bezüge this._inputs.für Berechnung bei sonstigen Bezügen oder Vergütung this._inputs.für mehrjährige Tätigkeit, PAP Seite 35  */
    MRE4SONST(): void;
    /**  Komplett Neu 2019  */
    /**  Tarifliche Einkommensteuer §32a EStG, PAP Seite 36  */
    UPTAB19(): void;
}
