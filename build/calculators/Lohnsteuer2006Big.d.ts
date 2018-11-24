import { BigDecimal } from 'bigdecimal';
import { PAPBaseClass } from '../PAPBaseClass';
export interface Inputs {
    /** Auf die Vollendung des 64. Lebensjahres folgende
               Kalenderjahr (erforderlich, wenn ALTER1=1) */
    AJAHR: number;
    /** 1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
               der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0 */
    ALTER1: number;
    /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
               fuer den Lohnzahlungszeitraum in Cents */
    HINZUR: BigDecimal;
    /** Jahresfreibetrag nach Ma&szlig;gabe der Eintragungen auf der
               Lohnsteuerkarte in Cents (ggf. 0) */
    JFREIB: BigDecimal;
    /** Jahreshinzurechnungsbetrag in Cents (ggf. 0) */
    JHINZU: BigDecimal;
    /** Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezuege und
               ohne Verguetung fuer mehrjaehrige Taetigkeit in Cents (ggf. 0)
               Anmerkung: Die Eingabe dieses Feldes ist erforderlich bei Eingabe
               „sonstiger Bezuege“ (Feld SONSTB) oder bei Eingabe der „Verguetung
               fuer mehrjaehrige Taetigkeit“ (Feld VMT). */
    JRE4: BigDecimal;
    /** In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0) */
    JVBEZ: BigDecimal;
    /** 1 = der Arbeitnehmer ist im Lohnzahlungszeitraum in der gesetzlichen
               Rentenversicherung versicherungsfrei und gehoert zu den in
               § 10 c Abs. 3 EStG genannten Personen.
               Bei anderen Arbeitnehmern ist „0“ einzusetzen.
               Fuer die Zuordnung sind allein die dem Arbeitgeber ohnehin bekannten
               Tatsachen ma&szlig;gebend; zusaetzliche Ermittlungen braucht
               der Arbeitgeber nicht anzustellen. */
    KRV: number;
    /** Lohnzahlungszeitraum:
               1 = Jahr
               2 = Monat
               3 = Woche
               4 = Tag */
    LZZ: number;
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
    /** Kapitalauszahlungen/Abfindungen bei Versorgungsbezuegen fuer mehrere Jahre in Cents (ggf. 0) */
    VKAPA: BigDecimal;
    /** Verguetung fuer mehrjaehrige Taetigkeit ohne Kapitalauszahlungen/Abfindungen bei
               Versorgungsbezuegen in Cents (ggf. 0) */
    VMT: BigDecimal;
    /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag
               fuer den Lohnzahlungszeitraum in Cents */
    WFUNDF: BigDecimal;
    /** Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
               I, II, III und IV) */
    ZKF: BigDecimal;
    /** Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
               erforderlich bei Jahresberechnung (LZZ = 1) */
    ZMVB: number;
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
}
export interface Internals {
    /** Altersentlastungsbetrag nach Alterseinkuenftegesetz in Cents */
    ALTE: BigDecimal;
    /** Arbeitnehmer-Pauschbetrag in EURO */
    ANP: BigDecimal;
    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
             auf ganze Cents abgerundet */
    ANTEIL1: BigDecimal;
    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
             auf ganze Cents aufgerundet */
    ANTEIL2: BigDecimal;
    /** Bemessungsgrundlage fuer Altersentlastungsbetrag in Cents */
    BMG: BigDecimal;
    /** Differenz zwischen ST1 und ST2 in EURO */
    DIFF: BigDecimal;
    /** Entlastungsbetrag fuer Alleinerziehende in EURO */
    EFA: BigDecimal;
    /** Versorgungsfreibetrag in Cents */
    FVB: BigDecimal;
    /** Zuschlag zum Versorgungsfreibetrag in EURO */
    FVBZ: BigDecimal;
    /** Massgeblich maximaler Versorgungsfreibetrag in Cents */
    HFVB: BigDecimal;
    /** Nummer der Tabellenwerte fuer Versorgungsparameter */
    J: number;
    /** Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
             Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO */
    JBMG: BigDecimal;
    /** Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
             UPANTEIL errechnet werden soll in Cents */
    JW: BigDecimal;
    /** Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag */
    K: number;
    /** Kennzeichen bei Verguetung fuer mehrjaehrige Taetigkeit
             0 = beim Vorwegabzug ist ZRE4VP zu beruecksichtigen
             1 = beim Vorwegabzug ist ZRE4VP1 zu beruecksichtigen */
    KENNZ: number;
    /** Summe der Freibetraege fuer Kinder in EURO */
    KFB: BigDecimal;
    /** Kennzahl fuer die Einkommensteuer-Tabellenart:
             1 = Grundtabelle
             2 = Splittingtabelle */
    KZTAB: number;
    /** Jahreslohnsteuer in EURO */
    LSTJAHR: BigDecimal;
    /** Zwischenfelder der Jahreslohnsteuer in Cents */
    LST1: BigDecimal;
    LST2: BigDecimal;
    LST3: BigDecimal;
    /** Mindeststeuer fuer die Steuerklassen V und VI in EURO */
    MIST: BigDecimal;
    /** Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
             fuer Versorgungsbezuege, des Altersentlastungsbetrags und des
             in der Lohnsteuerkarte eingetragenen Freibetrags und Hinzurechnung
             eines Hinzurechnungsbetrags in Cents. Entspricht dem Arbeitslohn,
             fuer den die Lohnsteuer im personellen Verfahren aus der
             zum Lohnzahlungszeitraum gehoerenden Tabelle abgelesen wuerde */
    RE4LZZ: BigDecimal;
    /** Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
             fuer Versorgungsbezuege und des Altersentlastungsbetrags in
             Cents zur Berechnung der Vorsorgepauschale */
    RE4LZZV: BigDecimal;
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
    /** Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents */
    VBEZB: BigDecimal;
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
    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 3 EStG in EURO */
    VSPKURZ: BigDecimal;
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
    /** Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG
             (2 Dezimalstellen) */
    X: BigDecimal;
    /** gem. § 32a Abs. 1 EStG (6 Dezimalstellen) */
    Y: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4LZZ in EURO, C (2 Dezimalstellen) */
    ZRE4: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4LZZV zur Berechnung
             der Vorsorgepauschale in EURO, C (2 Dezimalstellen) */
    ZRE4VP: BigDecimal;
    /** Sicherungsfeld von ZRE4VP in EURO,C bei der Berechnung des Vorwegabzugs
             fuer die Verguetung fuer mehrjaehrige Taetigkeit */
    ZRE4VP1: BigDecimal;
    /** Feste Tabellenfreibetraege (ohne Vorsorgepauschale) in EURO */
    ZTABFB: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
             EURO, C (2 Dezimalstellen) */
    ZVBEZ: BigDecimal;
    /** Zu versteuerndes Einkommen in EURO */
    ZVE: BigDecimal;
    /** Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
             Abs. 2 Satz 8 EStG in EURO.*/
    ZX: BigDecimal;
    ZZX: BigDecimal;
    HOCH: BigDecimal;
    VERGL: BigDecimal;
}
/**  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags  */
export declare const TAB1: number[];
/**  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags  */
export declare const TAB2: number[];
/**  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag  */
export declare const TAB3: number[];
/**  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags  */
export declare const TAB4: number[];
/**  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags  */
export declare const TAB5: number[];
/**  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte  */
export declare const ZAHL0: BigDecimal;
export declare const ZAHL1: BigDecimal;
export declare const ZAHL2: BigDecimal;
export declare const ZAHL3: BigDecimal;
export declare const ZAHL4: BigDecimal;
export declare const ZAHL5: BigDecimal;
export declare const ZAHL6: BigDecimal;
export declare const ZAHL7: BigDecimal;
export declare const ZAHL8: BigDecimal;
export declare const ZAHL9: BigDecimal;
export declare const ZAHL10: BigDecimal;
export declare const ZAHL11: BigDecimal;
export declare const ZAHL12: BigDecimal;
export declare const ZAHL100: BigDecimal;
export declare const ZAHL360: BigDecimal;
export declare class Lohnsteuer2006Big extends PAPBaseClass<Inputs, Outputs, Internals> {
    static readonly TAB1: number[];
    static readonly TAB2: number[];
    static readonly TAB3: number[];
    static readonly TAB4: number[];
    static readonly TAB5: number[];
    static readonly ZAHL0: BigDecimal;
    static readonly ZAHL1: BigDecimal;
    static readonly ZAHL2: BigDecimal;
    static readonly ZAHL3: BigDecimal;
    static readonly ZAHL4: BigDecimal;
    static readonly ZAHL5: BigDecimal;
    static readonly ZAHL6: BigDecimal;
    static readonly ZAHL7: BigDecimal;
    static readonly ZAHL8: BigDecimal;
    static readonly ZAHL9: BigDecimal;
    static readonly ZAHL10: BigDecimal;
    static readonly ZAHL11: BigDecimal;
    static readonly ZAHL12: BigDecimal;
    static readonly ZAHL100: BigDecimal;
    static readonly ZAHL360: BigDecimal;
    name: string;
    _inputs: {
        AJAHR: number;
        ALTER1: number;
        HINZUR: BigDecimal;
        JFREIB: BigDecimal;
        JHINZU: BigDecimal;
        JRE4: BigDecimal;
        JVBEZ: BigDecimal;
        KRV: number;
        LZZ: number;
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
        WFUNDF: BigDecimal;
        ZKF: BigDecimal;
        ZMVB: number;
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
    };
    _internals: {
        ALTE: BigDecimal;
        ANP: BigDecimal;
        ANTEIL1: BigDecimal;
        ANTEIL2: BigDecimal;
        BMG: BigDecimal;
        DIFF: BigDecimal;
        EFA: BigDecimal;
        FVB: BigDecimal;
        FVBZ: BigDecimal;
        HFVB: BigDecimal;
        J: number;
        JBMG: BigDecimal;
        JW: BigDecimal;
        K: number;
        KENNZ: number;
        KFB: BigDecimal;
        KZTAB: number;
        LSTJAHR: BigDecimal;
        LST1: BigDecimal;
        LST2: BigDecimal;
        LST3: BigDecimal;
        MIST: BigDecimal;
        RE4LZZ: BigDecimal;
        RE4LZZV: BigDecimal;
        RW: BigDecimal;
        SAP: BigDecimal;
        SOLZFREI: BigDecimal;
        SOLZJ: BigDecimal;
        SOLZMIN: BigDecimal;
        ST: BigDecimal;
        ST1: BigDecimal;
        ST2: BigDecimal;
        VBEZB: BigDecimal;
        VHB: BigDecimal;
        VSP: BigDecimal;
        VSPN: BigDecimal;
        VSP1: BigDecimal;
        VSP2: BigDecimal;
        VSPKURZ: BigDecimal;
        VSPMAX1: BigDecimal;
        VSPMAX2: BigDecimal;
        VSPO: BigDecimal;
        VSPREST: BigDecimal;
        VSPVOR: BigDecimal;
        X: BigDecimal;
        Y: BigDecimal;
        ZRE4: BigDecimal;
        ZRE4VP: BigDecimal;
        ZRE4VP1: BigDecimal;
        ZTABFB: BigDecimal;
        ZVBEZ: BigDecimal;
        ZVE: BigDecimal;
        ZX: BigDecimal;
        ZZX: BigDecimal;
        HOCH: BigDecimal;
        VERGL: BigDecimal;
    };
    /**  PROGRAMMABLAUFPLAN 2006  */
    main(): void;
    /**  Freibetraege fuer Versorgungsbezuege, Altersentlastungsbetrag (§39b Abs. 2 Satz 2 EStG)
         PAP Seite 10  */
    MRE4LZZ(): void;
    /**  Massgeblicher Arbeitslohn fuer die Jahreslohnsteuer
         PAP Seite 12  */
    MRE4(): void;
    /**  Ermittlung der festen Tabellenfreibetraege (ohne Vorsorgepauschale)
         PAP Seite 13  */
    MZTABFB(): void;
    /**  Ermittlung Jahreslohnsteuer
         PAP Seite 14  */
    MLSTJAHR(): void;
    /**  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG)
         PAP Seite 15  */
    UPEVP(): void;
    /**  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG) Vergleichsberechnung
         fuer Guenstigerpruefung
         PAP Seite 16  */
    MVSP(): void;
    /**  Vorsorgepauschale
         PAP Seite 17  */
    UMVSP(): void;
    /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG)
         PAP Seite 18  */
    MST5_6(): void;
    /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG)
         PAP Seite 18  */
    UP5_6(): void;
    /**  Solidaritaetszuschlag
         PAP Seite 19  */
    MSOLZ(): void;
    /**  Anteil von Jahresbetraegen fuer einen this._inputs.LZZ (§ 39b Abs. 2 Satz 10 EStG)
         PAP Seite 20  */
    UPANTEIL(): void;
    /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG)
         PAP Seite 21  */
    MSONST(): void;
    /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG)
         PAP Seite 21  */
    MRE4LZZ2(): void;
    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG)
         PAP Seite 22  */
    MVMT(): void;
    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG)
         PAP Seite 23  */
    UPTAB05(): void;
}
