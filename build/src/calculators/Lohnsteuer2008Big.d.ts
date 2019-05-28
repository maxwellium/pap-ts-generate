import { BigDecimal } from 'bigdecimal';
import { PAPBaseClass } from '../PAPBaseClass';
export interface Inputs {
    /** Auf die Vollendung des 64. Lebensjahres folgende
               Kalenderjahr (erforderlich, wenn ALTER1=1) */
    AJAHR: number;
    /** 1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
               der Lohnzahlungszeitraum endet (Â§ 24 a EStG), sonst = 0 */
    ALTER1: number;
    /** Jahresfreibetrag nach Ma&szlig;gabe der Eintragungen auf der
               Lohnsteuerkarte in Cents (ggf. 0) */
    JFREIB: BigDecimal;
    /** Jahreshinzurechnungsbetrag in Cents (ggf. 0) */
    JHINZU: BigDecimal;
    /** Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezuege und
               ohne Verguetung fuer mehrjaehrige Taetigkeit in Cents (ggf. 0)
               Anmerkung: Die Eingabe dieses Feldes ist erforderlich bei Eingabe
               â€žsonstiger Bezuegeâ€œ (Feld SONSTB) oder bei Eingabe der â€žVerguetung
               fuer mehrjaehrige Taetigkeitâ€œ (Feld VMT). */
    JRE4: BigDecimal;
    /** In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0) */
    JVBEZ: BigDecimal;
    /** 2 = fÃ¼r den Arbeitnehmer wird die gekÃ¼rzte Vorsorgepauschale nach dem Recht 2008 angesetzt
               (Â§ 10c Abs. 3 EStG n.F.), jedoch bei der GÃ¼nstigerprÃ¼fung die ungekÃ¼rzte Vorsorgepauschale
               nach dem Recht bis 2004 berÃ¼cksichtigt (Â§ 10c Abs. 2 EStG a.F.); Ã„nderung durch das JStG 2008.
               1 = fÃ¼r den Arbeitnehmer wird die gekÃ¼rzte Vorsorgepauschale angewandt (Â§ 10c Abs. 3 EStG),
               soweit nicht Arbeitnehmer der Fallgruppe 2.
               0 = andere Arbeitnehmer.
               FÃ¼r die Zuordnung sind allein die dem Arbeitgeber ohnehin bekannten Tatsachen maÃŸgebend;
               zusÃ¤tzliche Ermittlungen braucht der Arbeitgeber nicht anzustellen. */
    KRV: number;
    /** Lohnzahlungszeitraum:
               1 = Jahr
               2 = Monat
               3 = Woche
               4 = Tag */
    LZZ: number;
    /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag fÃ¼r
               den Lohnzahlungszeitraum in Cent */
    LZZFREIB: BigDecimal;
    /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
               fÃ¼r den Lohnzahlungszeitraum in Cent */
    LZZHINZU: BigDecimal;
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
    /** Altersentlastungsbetrag nach AlterseinkÃ¼nftegesetz in â‚¬,
             Cent (2 Dezimalstellen) */
    ALTE: BigDecimal;
    /** Arbeitnehmer-Pauschbetrag in EURO */
    ANP: BigDecimal;
    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
             auf ganze Cents abgerundet */
    ANTEIL1: BigDecimal;
    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
             auf ganze Cents aufgerundet */
    ANTEIL2: BigDecimal;
    /** Bemessungsgrundlage fÃ¼r Altersentlastungsbetrag in â‚¬, Cent
             (2 Dezimalstellen) */
    BMG: BigDecimal;
    /** Differenz zwischen ST1 und ST2 in EURO */
    DIFF: BigDecimal;
    /** Entlastungsbetrag fuer Alleinerziehende in EURO */
    EFA: BigDecimal;
    /** Versorgungsfreibetrag in â‚¬, Cent (2 Dezimalstellen) */
    FVB: BigDecimal;
    /** Versorgungsfreibetrag in â‚¬, Cent (2 Dezimalstellen) fÃ¼r die Berechnung
             der Lohnsteuer fÃ¼r den sonstigen Bezug */
    FVBSO: BigDecimal;
    /** Zuschlag zum Versorgungsfreibetrag in EURO */
    FVBZ: BigDecimal;
    /** Zuschlag zum Versorgungsfreibetrag in EURO fuer die Berechnung
             der Lohnsteuer beim sonstigen Bezug */
    FVBZSO: BigDecimal;
    /** Sicherungsfeld fÃ¼r den Zuschlag zum Versorgungsfreibetrag in â‚¬ fÃ¼r
             die Berechnung der Lohnsteuer fÃ¼r die VergÃ¼tung fÃ¼r mehrjÃ¤hrige
             TÃ¤tigkeit */
    FVBZOSO: BigDecimal;
    /** Maximaler Altersentlastungsbetrag in â‚¬ */
    HBALTE: BigDecimal;
    /** MaÃŸgeblicher maximaler Versorgungsfreibetrag in â‚¬ */
    HFVB: BigDecimal;
    /** MaÃŸgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in â‚¬,Cent
             (2 Dezimalstellen) */
    HFVBZ: BigDecimal;
    /** MaÃŸgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in â‚¬, Cent
             (2 Dezimalstellen) fÃ¼r die Berechnung der Lohnsteuer fÃ¼r den
             sonstigen Bezug */
    HFVBZSO: BigDecimal;
    /** Nummer der Tabellenwerte fuer Versorgungsparameter */
    J: number;
    /** Jahressteuer nach Â§ 51a EStG, aus der Solidaritaetszuschlag und
             Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO */
    JBMG: BigDecimal;
    /** Auf einen Jahreslohn hochgerechneter LZZFREIB in â‚¬, Cent
             (2 Dezimalstellen) */
    JLFREIB: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnete LZZHINZU in â‚¬, Cent
             (2 Dezimalstellen) */
    JLHINZU: BigDecimal;
    /** Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
             UPANTEIL errechnet werden soll in Cents */
    JW: BigDecimal;
    /** Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag */
    K: number;
    /** Merker fÃ¼r Berechnung Lohnsteuer fÃ¼r mehrjÃ¤hrige TÃ¤tigkeit.
             0 = normale Steuerberechnung
             1 = Steuerberechnung fÃ¼r mehrjÃ¤hrige TÃ¤tigkeit
             2 = Steuerberechnung fÃ¼r mehrjÃ¤hrige TÃ¤tigkeit Sonderfall nach Â§ 34 Abs. 1 Satz 3 EStG */
    KENNVMT: number;
    /** Summe der Freibetraege fuer Kinder in EURO */
    KFB: BigDecimal;
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
    /** Bemessungsgrundlage fÃ¼r den Versorgungsfreibetrag in Cent fÃ¼r
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
    /** Hoechstbetrag der Vorsorgepauschale nach Â§ 10c Abs. 3 EStG in EURO */
    VSPKURZ: BigDecimal;
    /** Hoechstbetrag der Vorsorgepauschale nach Â§ 10c Abs. 2 Nr. 2 EStG in EURO */
    VSPMAX1: BigDecimal;
    /** Hoechstbetrag der Vorsorgepauschale nach Â§ 10c Abs. 2 Nr. 3 EStG in EURO */
    VSPMAX2: BigDecimal;
    /** Vorsorgepauschale nach Â§ 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
             in EURO, C (2 Dezimalstellen) */
    VSPO: BigDecimal;
    /** Fuer den Abzug nach Â§ 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
             Rest von VSPO in EURO, C (2 Dezimalstellen) */
    VSPREST: BigDecimal;
    /** Hoechstbetrag der Vorsorgepauschale nach Â§ 10c Abs. 2 Nr. 1 EStG
             in EURO, C (2 Dezimalstellen) */
    VSPVOR: BigDecimal;
    /** Zu versteuerndes Einkommen gem. Â§ 32a Abs. 1 und 2 EStG â‚¬, C
             (2 Dezimalstellen) */
    X: BigDecimal;
    /** gem. Â§ 32a Abs. 1 EStG (6 Dezimalstellen) */
    Y: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4 in â‚¬, C (2 Dezimalstellen)
             nach Abzug der FreibetrÃ¤ge nach Â§ 39 b Abs. 2 Satz 3 und 4. */
    ZRE4: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4 in â‚¬, C (2 Dezimalstellen) */
    ZRE4J: BigDecimal;
    /** Sicherungsfeld von ZRE4 bei der Berechnung der Lohnsteuer fÃ¼r
             die VergÃ¼tung fÃ¼r mehrjÃ¤hrige TÃ¤tigkeit in â‚¬, C (2 Dezimalstellen) */
    ZRE4OSO: BigDecimal;
    /** 1/5 des mehrjÃ¤hriger Bezugs abzÃ¼glich der auf diesen Lohnbestandteil
             entfallenden festen TabellenfreibetrÃ¤ge in â‚¬, C (2 Dezimalstellen) */
    ZRE4VMT: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes RE4 in â‚¬, C (2 Dezimalstellen)
             nach Abzug des Versorgungsfreibetrags und des Alterentlastungsbetrags
             zur Berechnung der Vorsorgepauschale in â‚¬, Cent (2 Dezimalstellen) */
    ZRE4VP: BigDecimal;
    /** Feste TabellenfreibetrÃ¤ge (ohne Vorsorgepauschale) in â‚¬, Cent
             (2 Dezimalstellen) */
    ZTABFB: BigDecimal;
    /** Sicherungsfeld von ZTABFB bei der Berechnung fÃ¼r die VergÃ¼tung
             fÃ¼r mehrjÃ¤hrige TÃ¤tigkeit in â‚¬, Cent (2 Dezimalstellen) */
    ZTABFBOSO: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
             EURO, C (2 Dezimalstellen) */
    ZVBEZ: BigDecimal;
    /** Auf einen Jahreslohn hochgerechnetes VBEZ in â‚¬, C (2 Dezimalstellen) */
    ZVBEZJ: BigDecimal;
    /** Zu versteuerndes Einkommen in â‚¬, C (2 Dezimalstellen) */
    ZVE: BigDecimal;
    /** Zwischenfelder zu X fuer die Berechnung der Steuer nach Â§ 39b
             Abs. 2 Satz 8 EStG in EURO. */
    ZX: BigDecimal;
    ZZX: BigDecimal;
    HOCH: BigDecimal;
    VERGL: BigDecimal;
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
export declare const ZAHL700: BigDecimal;
export declare class Lohnsteuer2008Big extends PAPBaseClass<Inputs, Outputs, Internals> {
    static readonly TAB1: BigDecimal[];
    static readonly TAB2: BigDecimal[];
    static readonly TAB3: BigDecimal[];
    static readonly TAB4: BigDecimal[];
    static readonly TAB5: BigDecimal[];
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
    static readonly ZAHL700: BigDecimal;
    name: string;
    _inputs: {
        AJAHR: number;
        ALTER1: number;
        JFREIB: BigDecimal;
        JHINZU: BigDecimal;
        JRE4: BigDecimal;
        JVBEZ: BigDecimal;
        KRV: number;
        LZZ: number;
        LZZFREIB: BigDecimal;
        LZZHINZU: BigDecimal;
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
        FVBSO: BigDecimal;
        FVBZ: BigDecimal;
        FVBZSO: BigDecimal;
        FVBZOSO: BigDecimal;
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
        KZTAB: number;
        LSTJAHR: BigDecimal;
        LST1: BigDecimal;
        LST2: BigDecimal;
        LST3: BigDecimal;
        LSTOSO: BigDecimal;
        LSTSO: BigDecimal;
        MIST: BigDecimal;
        RW: BigDecimal;
        SAP: BigDecimal;
        SOLZFREI: BigDecimal;
        SOLZJ: BigDecimal;
        SOLZMIN: BigDecimal;
        ST: BigDecimal;
        ST1: BigDecimal;
        ST2: BigDecimal;
        VBEZB: BigDecimal;
        VBEZBSO: BigDecimal;
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
        ZRE4J: BigDecimal;
        ZRE4OSO: BigDecimal;
        ZRE4VMT: BigDecimal;
        ZRE4VP: BigDecimal;
        ZTABFB: BigDecimal;
        ZTABFBOSO: BigDecimal;
        ZVBEZ: BigDecimal;
        ZVBEZJ: BigDecimal;
        ZVE: BigDecimal;
        ZX: BigDecimal;
        ZZX: BigDecimal;
        HOCH: BigDecimal;
        VERGL: BigDecimal;
    };
    /**  PROGRAMMABLAUFPLAN 2008, PAP Seite 10  */
    main(): void;
    /**  Ermittlung des Jahresarbeitslohns und der FreibetrÃ¤ge Â§ 39 b Abs. 2 Satz 2 EStG, PAP Seite 11  */
    MRE4JL(): void;
    /**  FreibetrÃ¤ge fÃ¼r VersorgungsbezÃ¼ge, Altersentlastungsbetrag (Â§ 39b Abs. 2 Satz 3 EStG), PAP Seite 12  */
    MRE4(): void;
    /**  Altersentlastungsbetrag (Â§ 39b Abs. 2 Satz 3 EStG), PAP Seite 13  */
    MRE4ALTE(): void;
    /**  Ermittlung des Jahresarbeitslohns nach Abzug der FreibetrÃ¤ge nach Â§ 39 b Abs. 2 Satz 3 und 4 EStG, PAP Seite 15  */
    MRE4ABZ(): void;
    /**  Ermittlung der festen TabellenfreibetrÃ¤ge (ohne Vorsorgepauschale), PAP Seite 16  */
    MZTABFB(): void;
    /**  Ermittlung Jahreslohnsteuer, PAP Seite 17  */
    MLSTJAHR(): void;
    /**  Vorsorgepauschale (Â§ 39b Abs. 2 Satz 6 Nr 3 EStG) nach AlterseinkÃ¼nftegesetz, PAP Seite 18  */
    UPEVP(): void;
    /**  Vorsorgepauschale (Â§39b Abs. 2 Satz 6 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 19  */
    MVSP(): void;
    /**  Vorsorgepauschale, PAP Seite 20  */
    UMVSP(): void;
    /**  Lohnsteuer fuer die Steuerklassen V und VI (Â§ 39b Abs. 2 Satz 8 EStG), PAP Seite 21  */
    MST5_6(): void;
    /**  Lohnsteuer fuer die Steuerklassen V und VI (Â§ 39b Abs. 2 Satz 8 EStG), PAP Seite 21  */
    UP5_6(): void;
    /**  Solidaritaetszuschlag, PAP Seite 22  */
    MSOLZ(): void;
    /**  Anteil von Jahresbetraegen fuer einen this._inputs.LZZ (Â§ 39b Abs. 2 Satz 10 EStG), PAP Seite 23  */
    UPANTEIL(): void;
    /**  Berechnung sonstiger Bezuege nach Â§ 39b Abs. 3 Saetze 1 bis 7 EStG), PAP Seite 24  */
    MSONST(): void;
    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach Â§ 39b Abs. 3 Satz 9 EStG), PAP Seite 25  */
    MVMT(): void;
    /**  Sonderberechnung ohne sonstige BezÃ¼ge fÃ¼r Berechnung bei sonstigen BezÃ¼gen oder VergÃ¼tung fÃ¼r mehrjÃ¤hrige TÃ¤tigkeit, PAP Seite 26  */
    MOSONST(): void;
    /**  Sonderberechnung mit sonstige BezÃ¼ge fÃ¼r Berechnung bei sonstigen BezÃ¼gen oder VergÃ¼tung fÃ¼r mehrjÃ¤hrige TÃ¤tigkeit, PAP Seite 26  */
    MRE4SONST(): void;
    /**  Tarifliche Einkommensteuer Â§32a EStG, PAP Seite 27  */
    UPTAB07(): void;
}
