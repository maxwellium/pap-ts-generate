
import { BigDecimal } from 'bigdecimal';
import { PAPBaseClass } from '../PAPBaseClass';

export interface Inputs {

  /** Auf die Vollendung des 64. Lebensjahres folgende
             Kalenderjahr (erforderlich, wenn ALTER1=1) */
  AJAHR : number;

  /** 1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
             der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0 */
  ALTER1 : number;

  /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
             fuer den Lohnzahlungszeitraum in Cents */
  HINZUR : BigDecimal;

  /** Jahresfreibetrag nach Ma&szlig;gabe der Eintragungen auf der
             Lohnsteuerkarte in Cents (ggf. 0) */
  JFREIB : BigDecimal;

  /** Jahreshinzurechnungsbetrag in Cents (ggf. 0) */
  JHINZU : BigDecimal;

  /** Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezuege und
             ohne Verguetung fuer mehrjaehrige Taetigkeit in Cents (ggf. 0)
             Anmerkung: Die Eingabe dieses Feldes ist erforderlich bei Eingabe
             „sonstiger Bezuege“ (Feld SONSTB) oder bei Eingabe der „Verguetung
             fuer mehrjaehrige Taetigkeit“ (Feld VMT). */
  JRE4 : BigDecimal;

  /** In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0) */
  JVBEZ : BigDecimal;

  /** 1 = der Arbeitnehmer ist im Lohnzahlungszeitraum in der gesetzlichen
             Rentenversicherung versicherungsfrei und gehoert zu den in
             § 10 c Abs. 3 EStG genannten Personen.
             Bei anderen Arbeitnehmern ist „0“ einzusetzen.
             Fuer die Zuordnung sind allein die dem Arbeitgeber ohnehin bekannten
             Tatsachen ma&szlig;gebend; zusaetzliche Ermittlungen braucht
             der Arbeitgeber nicht anzustellen. */
  KRV : number;

  /** Lohnzahlungszeitraum:
             1 = Jahr
             2 = Monat
             3 = Woche
             4 = Tag */
  LZZ : number;

  /** Religionsgemeinschaft des Arbeitnehmers lt. Lohnsteuerkarte (bei
             keiner Religionszugehoerigkeit = 0) */
  R : number;

  /** Steuerpflichtiger Arbeitslohn vor Beruecksichtigung der Freibetraege
             fuer Versorgungsbezuege, des Altersentlastungsbetrags und des auf
             der Lohnsteuerkarte fuer den Lohnzahlungszeitraum eingetragenen
             Freibetrags in Cents. */
  RE4 : BigDecimal;

  /** Sonstige Bezuege (ohne Verguetung aus mehrjaehriger Taetigkeit) einschliesslich
             Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
             soweit es sich nicht um Bezuege fuer mehrere Jahre handelt in Cents (ggf. 0) */
  SONSTB : BigDecimal;

  /** Sterbegeld bei Versorgungsbezuegen sowie Kapitalauszahlungen/Abfindungen,
             soweit es sich nicht um Bezuege fuer mehrere Jahre handelt
             (in SONSTB enthalten) in Cents */
  STERBE : BigDecimal;

  /** Steuerklasse:
             1 = I
             2 = II
             3 = III
             4 = IV
             5 = V
             6 = VI */
  STKL : number;

  /** In RE4 enthaltene Versorgungsbezuege in Cents (ggf. 0) */
  VBEZ : BigDecimal;

  /** Vorsorgungsbezug im Januar 2005 bzw. fuer den ersten vollen Monat
             in Cents*/
  VBEZM : BigDecimal;

  /** Voraussichtliche Sonderzahlungen im Kalenderjahr des Versorgungsbeginns
             bei Versorgungsempfaengern ohne Sterbegeld, Kapitalauszahlungen/Abfindungen
             bei Versorgungsbezuegen in Cents*/
  VBEZS : BigDecimal;

  /** In SONSTB enthaltene Versorgungsbezuege einschliesslich Sterbegeld
            in Cents (ggf. 0) */
  VBS : BigDecimal;

  /** Jahr, in dem der Versorgungsbezug erstmalig gewaehrt wurde; werden
             mehrere Versorgungsbezuege gezahlt, so gilt der aelteste erstmalige Bezug */
  VJAHR : number;

  /** Kapitalauszahlungen/Abfindungen bei Versorgungsbezuegen fuer mehrere Jahre in Cents (ggf. 0) */
  VKAPA : BigDecimal;

  /** Verguetung fuer mehrjaehrige Taetigkeit ohne Kapitalauszahlungen/Abfindungen bei
             Versorgungsbezuegen in Cents (ggf. 0) */
  VMT : BigDecimal;

  /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag
             fuer den Lohnzahlungszeitraum in Cents */
  WFUNDF : BigDecimal;

  /** Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
             I, II, III und IV) */
  ZKF : BigDecimal;

  /** Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
             erforderlich bei Jahresberechnung (LZZ = 1) */
  ZMVB : number;

};

export interface Outputs {

  /** Bemessungsgrundlage fuer die Kirchenlohnsteuer in Cents */
  BK : BigDecimal;

  /** Bemessungsgrundlage der sonstigen Einkuenfte (ohne Verguetung
             fuer mehrjaehrige Taetigkeit) fuer die Kirchenlohnsteuer in Cents */
  BKS : BigDecimal;
BKV : BigDecimal;

  /** Fuer den Lohnzahlungszeitraum einzubehaltende Lohnsteuer in Cents */
  LSTLZZ : BigDecimal;

  /** Fuer den Lohnzahlungszeitraum einzubehaltender Solidaritaetszuschlag
             in Cents */
  SOLZLZZ : BigDecimal;

  /** Solidaritaetszuschlag fuer sonstige Bezuege (ohne Verguetung fuer mehrjaehrige
             Taetigkeit) in Cents */
  SOLZS : BigDecimal;

  /** Solidaritaetszuschlag fuer die Verguetung fuer mehrjaehrige Taetigkeit in
             Cents */
  SOLZV : BigDecimal;

  /** Lohnsteuer fuer sonstige Einkuenfte (ohne Verguetung fuer mehrjaehrige
             Taetigkeit) in Cents */
  STS : BigDecimal;

  /** Lohnsteuer fuer Verguetung fuer mehrjaehrige Taetigkeit in Cents */
  STV : BigDecimal;

};

export interface Internals {

    /** Altersentlastungsbetrag nach Alterseinkuenftegesetz in Cents */
  ALTE : BigDecimal;

    /** Arbeitnehmer-Pauschbetrag in EURO */
  ANP : BigDecimal;

    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
             auf ganze Cents abgerundet */
  ANTEIL1 : BigDecimal;

    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
             auf ganze Cents aufgerundet */
  ANTEIL2 : BigDecimal;

    /** Bemessungsgrundlage fuer Altersentlastungsbetrag in Cents */
  BMG : BigDecimal;

    /** Differenz zwischen ST1 und ST2 in EURO */
  DIFF : BigDecimal;

    /** Entlastungsbetrag fuer Alleinerziehende in EURO */
  EFA : BigDecimal;

    /** Versorgungsfreibetrag in Cents */
  FVB : BigDecimal;

    /** Zuschlag zum Versorgungsfreibetrag in EURO */
  FVBZ : BigDecimal;

    /** Massgeblich maximaler Versorgungsfreibetrag in Cents */
  HFVB : BigDecimal;

    /** Nummer der Tabellenwerte fuer Versorgungsparameter */
  J : number;

    /** Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
             Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO */
  JBMG : BigDecimal;

    /** Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
             UPANTEIL errechnet werden soll in Cents */
  JW : BigDecimal;

    /** Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag */
  K : number;

    /** Kennzeichen bei Verguetung fuer mehrjaehrige Taetigkeit
             0 = beim Vorwegabzug ist ZRE4VP zu beruecksichtigen
             1 = beim Vorwegabzug ist ZRE4VP1 zu beruecksichtigen */
  KENNZ : number;

    /** Summe der Freibetraege fuer Kinder in EURO */
  KFB : BigDecimal;

    /** Kennzahl fuer die Einkommensteuer-Tabellenart:
             1 = Grundtabelle
             2 = Splittingtabelle */
  KZTAB : number;

    /** Jahreslohnsteuer in EURO */
  LSTJAHR : BigDecimal;

    /** Zwischenfelder der Jahreslohnsteuer in Cents */
  LST1 : BigDecimal;
LST2 : BigDecimal;
LST3 : BigDecimal;

    /** Mindeststeuer fuer die Steuerklassen V und VI in EURO */
  MIST : BigDecimal;

    /** Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
             fuer Versorgungsbezuege, des Altersentlastungsbetrags und des
             in der Lohnsteuerkarte eingetragenen Freibetrags und Hinzurechnung
             eines Hinzurechnungsbetrags in Cents. Entspricht dem Arbeitslohn,
             fuer den die Lohnsteuer im personellen Verfahren aus der
             zum Lohnzahlungszeitraum gehoerenden Tabelle abgelesen wuerde */
  RE4LZZ : BigDecimal;

    /** Arbeitslohn des Lohnzahlungszeitraums nach Abzug der Freibetraege
             fuer Versorgungsbezuege und des Altersentlastungsbetrags in
             Cents zur Berechnung der Vorsorgepauschale */
  RE4LZZV : BigDecimal;

    /** Rechenwert in Gleitkommadarstellung */
  RW : BigDecimal;

    /** Sonderausgaben-Pauschbetrag in EURO */
  SAP : BigDecimal;

    /** Freigrenze fuer den Solidaritaetszuschlag in EURO */
  SOLZFREI : BigDecimal;

    /** Solidaritaetszuschlag auf die Jahreslohnsteuer in EURO, C (2 Dezimalstellen) */
  SOLZJ : BigDecimal;

    /** Zwischenwert fuer den Solidaritaetszuschlag auf die Jahreslohnsteuer
             in EURO, C (2 Dezimalstellen) */
  SOLZMIN : BigDecimal;

    /** Tarifliche Einkommensteuer in EURO */
  ST : BigDecimal;

    /** Tarifliche Einkommensteuer auf das 1,25-fache ZX in EURO */
  ST1 : BigDecimal;

    /** Tarifliche Einkommensteuer auf das 0,75-fache ZX in EURO */
  ST2 : BigDecimal;

    /** Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents */
  VBEZB : BigDecimal;

    /** Hoechstbetrag der Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C */
  VHB : BigDecimal;

    /** Vorsorgepauschale in EURO, C (2 Dezimalstellen) */
  VSP : BigDecimal;

    /** Vorsorgepauschale nach Alterseinkuenftegesetz in EURO, C */
  VSPN : BigDecimal;

    /** Zwischenwert 1 bei der Berechnung der Vorsorgepauschale nach
             dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen) */
  VSP1 : BigDecimal;

    /** Zwischenwert 2 bei der Berechnung der Vorsorgepauschale nach
             dem Alterseinkuenftegesetz in EURO, C (2 Dezimalstellen) */
  VSP2 : BigDecimal;

    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 3 EStG in EURO */
  VSPKURZ : BigDecimal;

    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 2 EStG in EURO */
  VSPMAX1 : BigDecimal;

    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 3 EStG in EURO */
  VSPMAX2 : BigDecimal;

    /** Vorsorgepauschale nach § 10c Abs. 2 Satz 2 EStG vor der Hoechstbetragsberechnung
             in EURO, C (2 Dezimalstellen) */
  VSPO : BigDecimal;

    /** Fuer den Abzug nach § 10c Abs. 2 Nrn. 2 und 3 EStG verbleibender
             Rest von VSPO in EURO, C (2 Dezimalstellen) */
  VSPREST : BigDecimal;

    /** Hoechstbetrag der Vorsorgepauschale nach § 10c Abs. 2 Nr. 1 EStG
             in EURO, C (2 Dezimalstellen) */
  VSPVOR : BigDecimal;

    /** Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG
             (2 Dezimalstellen) */
  X : BigDecimal;

    /** gem. § 32a Abs. 1 EStG (6 Dezimalstellen) */
  Y : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes RE4LZZ in EURO, C (2 Dezimalstellen) */
  ZRE4 : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes RE4LZZV zur Berechnung
             der Vorsorgepauschale in EURO, C (2 Dezimalstellen) */
  ZRE4VP : BigDecimal;

    /** Sicherungsfeld von ZRE4VP in EURO,C bei der Berechnung des Vorwegabzugs
             fuer die Verguetung fuer mehrjaehrige Taetigkeit */
  ZRE4VP1 : BigDecimal;

    /** Feste Tabellenfreibetraege (ohne Vorsorgepauschale) in EURO */
  ZTABFB : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
             EURO, C (2 Dezimalstellen) */
  ZVBEZ : BigDecimal;

    /** Zu versteuerndes Einkommen in EURO */
  ZVE : BigDecimal;

    /** Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
             Abs. 2 Satz 8 EStG in EURO.*/
  ZX : BigDecimal;
ZZX : BigDecimal;
HOCH : BigDecimal;
VERGL : BigDecimal;

};


        /**  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags  */
        export const TAB1 = [BigDecimal.valueOf (0.0), BigDecimal.valueOf (0.4), BigDecimal.valueOf (0.384), BigDecimal.valueOf (0.368), BigDecimal.valueOf (0.352), BigDecimal.valueOf (0.336), BigDecimal.valueOf (0.32), BigDecimal.valueOf (0.304), BigDecimal.valueOf (0.288), BigDecimal.valueOf (0.272), BigDecimal.valueOf (0.256), BigDecimal.valueOf (0.24), BigDecimal.valueOf (0.224), BigDecimal.valueOf (0.208), BigDecimal.valueOf (0.192), BigDecimal.valueOf (0.176), BigDecimal.valueOf (0.16), BigDecimal.valueOf (0.152), BigDecimal.valueOf (0.144), BigDecimal.valueOf (0.136), BigDecimal.valueOf (0.128), BigDecimal.valueOf (0.12), BigDecimal.valueOf (0.112), BigDecimal.valueOf (0.104), BigDecimal.valueOf (0.096), BigDecimal.valueOf (0.088), BigDecimal.valueOf (0.08), BigDecimal.valueOf (0.072), BigDecimal.valueOf (0.064), BigDecimal.valueOf (0.056), BigDecimal.valueOf (0.048), BigDecimal.valueOf (0.04), BigDecimal.valueOf (0.032), BigDecimal.valueOf (0.024), BigDecimal.valueOf (0.016), BigDecimal.valueOf (0.008), BigDecimal.valueOf (0.0)];

        /**  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags  */
        export const TAB2 = [BigDecimal.valueOf (0), BigDecimal.valueOf (3000), BigDecimal.valueOf (2880), BigDecimal.valueOf (2760), BigDecimal.valueOf (2640), BigDecimal.valueOf (2520), BigDecimal.valueOf (2400), BigDecimal.valueOf (2280), BigDecimal.valueOf (2160), BigDecimal.valueOf (2040), BigDecimal.valueOf (1920), BigDecimal.valueOf (1800), BigDecimal.valueOf (1680), BigDecimal.valueOf (1560), BigDecimal.valueOf (1440), BigDecimal.valueOf (1320), BigDecimal.valueOf (1200), BigDecimal.valueOf (1140), BigDecimal.valueOf (1080), BigDecimal.valueOf (1020), BigDecimal.valueOf (960), BigDecimal.valueOf (900), BigDecimal.valueOf (840), BigDecimal.valueOf (780), BigDecimal.valueOf (720), BigDecimal.valueOf (660), BigDecimal.valueOf (600), BigDecimal.valueOf (540), BigDecimal.valueOf (480), BigDecimal.valueOf (420), BigDecimal.valueOf (360), BigDecimal.valueOf (300), BigDecimal.valueOf (240), BigDecimal.valueOf (180), BigDecimal.valueOf (120), BigDecimal.valueOf (60), BigDecimal.valueOf (0)];

        /**  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag  */
        export const TAB3 = [BigDecimal.valueOf (0), BigDecimal.valueOf (900), BigDecimal.valueOf (864), BigDecimal.valueOf (828), BigDecimal.valueOf (792), BigDecimal.valueOf (756), BigDecimal.valueOf (720), BigDecimal.valueOf (684), BigDecimal.valueOf (648), BigDecimal.valueOf (612), BigDecimal.valueOf (576), BigDecimal.valueOf (540), BigDecimal.valueOf (504), BigDecimal.valueOf (468), BigDecimal.valueOf (432), BigDecimal.valueOf (396), BigDecimal.valueOf (360), BigDecimal.valueOf (342), BigDecimal.valueOf (324), BigDecimal.valueOf (306), BigDecimal.valueOf (288), BigDecimal.valueOf (270), BigDecimal.valueOf (252), BigDecimal.valueOf (234), BigDecimal.valueOf (216), BigDecimal.valueOf (198), BigDecimal.valueOf (180), BigDecimal.valueOf (162), BigDecimal.valueOf (144), BigDecimal.valueOf (126), BigDecimal.valueOf (108), BigDecimal.valueOf (90), BigDecimal.valueOf (72), BigDecimal.valueOf (54), BigDecimal.valueOf (36), BigDecimal.valueOf (18), BigDecimal.valueOf (0)];

        /**  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags  */
        export const TAB4 = [BigDecimal.valueOf (0.0), BigDecimal.valueOf (0.4), BigDecimal.valueOf (0.384), BigDecimal.valueOf (0.368), BigDecimal.valueOf (0.352), BigDecimal.valueOf (0.336), BigDecimal.valueOf (0.32), BigDecimal.valueOf (0.304), BigDecimal.valueOf (0.288), BigDecimal.valueOf (0.272), BigDecimal.valueOf (0.256), BigDecimal.valueOf (0.24), BigDecimal.valueOf (0.224), BigDecimal.valueOf (0.208), BigDecimal.valueOf (0.192), BigDecimal.valueOf (0.176), BigDecimal.valueOf (0.16), BigDecimal.valueOf (0.152), BigDecimal.valueOf (0.144), BigDecimal.valueOf (0.136), BigDecimal.valueOf (0.128), BigDecimal.valueOf (0.12), BigDecimal.valueOf (0.112), BigDecimal.valueOf (0.104), BigDecimal.valueOf (0.096), BigDecimal.valueOf (0.088), BigDecimal.valueOf (0.08), BigDecimal.valueOf (0.072), BigDecimal.valueOf (0.064), BigDecimal.valueOf (0.056), BigDecimal.valueOf (0.048), BigDecimal.valueOf (0.04), BigDecimal.valueOf (0.032), BigDecimal.valueOf (0.024), BigDecimal.valueOf (0.016), BigDecimal.valueOf (0.008), BigDecimal.valueOf (0.0)];

        /**  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags  */
        export const TAB5 = [BigDecimal.valueOf (0), BigDecimal.valueOf (1900), BigDecimal.valueOf (1824), BigDecimal.valueOf (1748), BigDecimal.valueOf (1672), BigDecimal.valueOf (1596), BigDecimal.valueOf (1520), BigDecimal.valueOf (1444), BigDecimal.valueOf (1368), BigDecimal.valueOf (1292), BigDecimal.valueOf (1216), BigDecimal.valueOf (1140), BigDecimal.valueOf (1064), BigDecimal.valueOf (988), BigDecimal.valueOf (912), BigDecimal.valueOf (836), BigDecimal.valueOf (760), BigDecimal.valueOf (722), BigDecimal.valueOf (684), BigDecimal.valueOf (646), BigDecimal.valueOf (608), BigDecimal.valueOf (570), BigDecimal.valueOf (532), BigDecimal.valueOf (494), BigDecimal.valueOf (456), BigDecimal.valueOf (418), BigDecimal.valueOf (380), BigDecimal.valueOf (342), BigDecimal.valueOf (304), BigDecimal.valueOf (266), BigDecimal.valueOf (228), BigDecimal.valueOf (190), BigDecimal.valueOf (152), BigDecimal.valueOf (114), BigDecimal.valueOf (76), BigDecimal.valueOf (38), BigDecimal.valueOf (0)];

        /**  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte  */
        export const ZAHL1 = BigDecimal.ONE();
        export const ZAHL2 = new BigDecimal(2);
        export const ZAHL3 = new BigDecimal(3);
        export const ZAHL4 = new BigDecimal(4);
        export const ZAHL5 = new BigDecimal(5);
        export const ZAHL6 = new BigDecimal(6);
        export const ZAHL7 = new BigDecimal(7);
        export const ZAHL8 = new BigDecimal(8);
        export const ZAHL9 = new BigDecimal(9);
        export const ZAHL10 = BigDecimal.TEN();
        export const ZAHL11 = new BigDecimal(11);
        export const ZAHL12 = new BigDecimal(12);
        export const ZAHL100 = new BigDecimal(100);
        export const ZAHL360 = new BigDecimal(360);

    

export class Lohnsteuer2007Big extends PAPBaseClass<Inputs, Outputs, Internals> {

  static readonly TAB1 = TAB1;
  static readonly TAB2 = TAB2;
  static readonly TAB3 = TAB3;
  static readonly TAB4 = TAB4;
  static readonly TAB5 = TAB5;
  static readonly ZAHL1 = ZAHL1;
  static readonly ZAHL2 = ZAHL2;
  static readonly ZAHL3 = ZAHL3;
  static readonly ZAHL4 = ZAHL4;
  static readonly ZAHL5 = ZAHL5;
  static readonly ZAHL6 = ZAHL6;
  static readonly ZAHL7 = ZAHL7;
  static readonly ZAHL8 = ZAHL8;
  static readonly ZAHL9 = ZAHL9;
  static readonly ZAHL10 = ZAHL10;
  static readonly ZAHL11 = ZAHL11;
  static readonly ZAHL12 = ZAHL12;
  static readonly ZAHL100 = ZAHL100;
  static readonly ZAHL360 = ZAHL360;


  public name = 'Lohnsteuer2007Big';
  public _inputs = {
    AJAHR : 0,
    ALTER1 : 0,
    HINZUR : new BigDecimal(0),
    JFREIB : new BigDecimal(0),
    JHINZU : new BigDecimal(0),
    JRE4 : new BigDecimal(0),
    JVBEZ : new BigDecimal(0),
    KRV : 0,
    LZZ : 0,
    R : 0,
    RE4 : new BigDecimal(0),
    SONSTB : new BigDecimal(0),
    STERBE : new BigDecimal(0),
    STKL : 0,
    VBEZ : new BigDecimal(0),
    VBEZM : new BigDecimal(0),
    VBEZS : new BigDecimal(0),
    VBS : new BigDecimal(0),
    VJAHR : 0,
    VKAPA : new BigDecimal(0),
    VMT : new BigDecimal(0),
    WFUNDF : new BigDecimal(0),
    ZKF : new BigDecimal(0),
    ZMVB : 0,
  };
  public _outputs = {
    BK : new BigDecimal(0),
    BKS : new BigDecimal(0),
    BKV : new BigDecimal(0),
    LSTLZZ : new BigDecimal(0),
    SOLZLZZ : new BigDecimal(0),
    SOLZS : new BigDecimal(0),
    SOLZV : new BigDecimal(0),
    STS : new BigDecimal(0),
    STV : new BigDecimal(0),
  };
  public _internals = {
    ALTE : new BigDecimal(0),
    ANP : new BigDecimal(0),
    ANTEIL1 : new BigDecimal(0),
    ANTEIL2 : new BigDecimal(0),
    BMG : new BigDecimal(0),
    DIFF : new BigDecimal(0),
    EFA : new BigDecimal(0),
    FVB : new BigDecimal(0),
    FVBZ : new BigDecimal(0),
    HFVB : new BigDecimal(0),
    J : 0,
    JBMG : new BigDecimal(0),
    JW : new BigDecimal(0),
    K : 0,
    KENNZ : 0,
    KFB : new BigDecimal(0),
    KZTAB : 0,
    LSTJAHR : new BigDecimal(0),
    LST1 : new BigDecimal(0),
    LST2 : new BigDecimal(0),
    LST3 : new BigDecimal(0),
    MIST : new BigDecimal(0),
    RE4LZZ : new BigDecimal(0),
    RE4LZZV : new BigDecimal(0),
    RW : new BigDecimal(0),
    SAP : new BigDecimal(0),
    SOLZFREI : new BigDecimal(0),
    SOLZJ : new BigDecimal(0),
    SOLZMIN : new BigDecimal(0),
    ST : new BigDecimal(0),
    ST1 : new BigDecimal(0),
    ST2 : new BigDecimal(0),
    VBEZB : new BigDecimal(0),
    VHB : new BigDecimal(0),
    VSP : new BigDecimal(0),
    VSPN : new BigDecimal(0),
    VSP1 : new BigDecimal(0),
    VSP2 : new BigDecimal(0),
    VSPKURZ : new BigDecimal(0),
    VSPMAX1 : new BigDecimal(0),
    VSPMAX2 : new BigDecimal(0),
    VSPO : new BigDecimal(0),
    VSPREST : new BigDecimal(0),
    VSPVOR : new BigDecimal(0),
    X : new BigDecimal(0),
    Y : new BigDecimal(0),
    ZRE4 : new BigDecimal(0),
    ZRE4VP : new BigDecimal(0),
    ZRE4VP1 : new BigDecimal(0),
    ZTABFB : new BigDecimal(0),
    ZVBEZ : new BigDecimal(0),
    ZVE : new BigDecimal(0),
    ZX : new BigDecimal(0),
    ZZX : new BigDecimal(0),
    HOCH : new BigDecimal(0),
    VERGL : new BigDecimal(0),
  };

  

  /**  PROGRAMMABLAUFPLAN 2007, PAP Seite 9  */

  main() {
    this.MRE4LZZ();
    this._internals.KENNZ= 0;
    this._internals.RE4LZZ= this._inputs.RE4.subtract (this._internals.FVB).subtract (this._internals.ALTE).subtract (this._inputs.WFUNDF).add (this._inputs.HINZUR);
    this._internals.RE4LZZV= this._inputs.RE4.subtract (this._internals.FVB).subtract (this._internals.ALTE);
    this.MRE4();
    this.MZTABFB();
    this.MLSTJAHR();
    this._internals.LSTJAHR= this._internals.ST;
    this._internals.JW= this._internals.LSTJAHR.multiply (ZAHL100);
    this.UPANTEIL();
    this._outputs.LSTLZZ= this._internals.ANTEIL1;
    if (this._inputs.ZKF.compareTo (BigDecimal.ZERO()) == 1) {
      
        this._internals.ZTABFB= this._internals.ZTABFB.add (this._internals.KFB);
        this.MLSTJAHR();
        this._internals.JBMG= this._internals.ST;
      
      } else {
        this._internals.JBMG= this._internals.LSTJAHR;
      
    }
    this.MSOLZ();
    this.MSONST();
    this.MVMT();
  }

  /**  Freibetraege fuer Versorgungsbezuege, Altersentlastungsbetrag (§39b Abs. 2 Satz 2 EStG), PAP Seite 10  */

  MRE4LZZ() {
    if (this._inputs.VBEZ.compareTo (BigDecimal.ZERO()) == 0) {
      
        this._internals.FVBZ= BigDecimal.ZERO();
        this._internals.FVB= BigDecimal.ZERO();
      
      } else {
        if (this._inputs.VJAHR < 2006) {
          
            this._internals.J= 1;
          
          } else {
            if (this._inputs.VJAHR < 2040) {
              
                this._internals.J= this._inputs.VJAHR - 2004;
              
              } else {
                this._internals.J= 36;
              
            }
          
        }
        if (this._inputs.LZZ == 1) {
          
            if (((this._inputs.STERBE.add (this._inputs.VKAPA)).compareTo (BigDecimal.ZERO())) == 1) {
              
                this._internals.VBEZB= (this._inputs.VBEZM.multiply (BigDecimal.valueOf (this._inputs.ZMVB))).add (this._inputs.VBEZS);
                this._internals.HFVB= TAB2[this._internals.J].multiply (ZAHL100);
                this._internals.FVBZ= TAB3[this._internals.J];
              
              } else {
                this._internals.VBEZB= (this._inputs.VBEZM.multiply (BigDecimal.valueOf (this._inputs.ZMVB))).add (this._inputs.VBEZS);
/**  Achtung! Rechengenauigkeit Division?  */
                this._internals.HFVB= TAB2[this._internals.J].divide (ZAHL12).multiply (BigDecimal.valueOf (this._inputs.ZMVB)).multiply (ZAHL100);
                this._internals.FVBZ= TAB3[this._internals.J].divide (ZAHL12).multiply (BigDecimal.valueOf (this._inputs.ZMVB)).setScale (0, BigDecimal.ROUND_UP);
              
            }
          
          } else {
            this._internals.VBEZB= ((this._inputs.VBEZM.multiply (ZAHL12)).add (this._inputs.VBEZS)).setScale (2, BigDecimal.ROUND_DOWN);
            this._internals.HFVB= TAB2[this._internals.J].multiply (ZAHL100);
            this._internals.FVBZ= TAB3[this._internals.J];
          
        }
        this._internals.FVB= (this._internals.VBEZB.multiply (TAB1[this._internals.J])).setScale (2, BigDecimal.ROUND_UP);
        if (this._internals.FVB.compareTo (this._internals.HFVB) == 1) {
          
            this._internals.FVB = this._internals.HFVB;
          
        }
        this._internals.JW= this._internals.FVB;
        this.UPANTEIL();
        this._internals.FVB= this._internals.ANTEIL2;
      
    }
    if (this._inputs.ALTER1 == 0) {
      
        this._internals.ALTE= BigDecimal.ZERO();
      
      } else {
        if (this._inputs.AJAHR < 2006) {
          
            this._internals.K= 1;
          
          } else {
            if (this._inputs.AJAHR < 2040) {
              
                this._internals.K= this._inputs.AJAHR - 2004;
              
              } else {
                this._internals.K= 36;
              
            }
          
        }
        this._internals.BMG= this._inputs.RE4.subtract (this._inputs.VBEZ);
        this._internals.ALTE= (this._internals.BMG.multiply (TAB4[this._internals.K])).setScale (2, BigDecimal.ROUND_UP);
        this._internals.JW= TAB5[this._internals.K].multiply (ZAHL100);
        this.UPANTEIL();
        if (this._internals.ALTE.compareTo (this._internals.ANTEIL2) == 1) {
          
            this._internals.ALTE= this._internals.ANTEIL2;
          
        }
      
    }
  }

  /**  Massgeblicher Arbeitslohn fuer die Jahreslohnsteuer, PAP Seite 12  */

  MRE4() {
    if (this._inputs.LZZ == 1) {
      
        this._internals.ZRE4= this._internals.RE4LZZ.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
        this._internals.ZRE4VP= this._internals.RE4LZZV.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
        this._internals.ZVBEZ= (this._inputs.VBEZ.subtract (this._internals.FVB)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
      
      } else {
        if (this._inputs.LZZ == 2) {
          
            this._internals.ZRE4= ((this._internals.RE4LZZ.add (BigDecimal.valueOf (0.67))).multiply (BigDecimal.valueOf (0.12))).setScale (2, BigDecimal.ROUND_DOWN);
            this._internals.ZRE4VP= ((this._internals.RE4LZZV.add (BigDecimal.valueOf (0.67))).multiply (BigDecimal.valueOf (0.12))).setScale(2, BigDecimal.ROUND_DOWN);
            this._internals.ZVBEZ= ((this._inputs.VBEZ.subtract (this._internals.FVB).add (BigDecimal.valueOf (0.67))).multiply (BigDecimal.valueOf (0.12))).setScale (2, BigDecimal.ROUND_DOWN);
          
          } else {
            if (this._inputs.LZZ == 3) {
              
                this._internals.ZRE4= ((this._internals.RE4LZZ.add (BigDecimal.valueOf (0.89))).multiply (BigDecimal.valueOf (3.6))).divide (BigDecimal.valueOf (7.0), 2, BigDecimal.ROUND_DOWN);
                this._internals.ZRE4VP= ((this._internals.RE4LZZV.add (BigDecimal.valueOf (0.89))).multiply (BigDecimal.valueOf (3.6))).divide (BigDecimal.valueOf (7.0), 2, BigDecimal.ROUND_DOWN);
                this._internals.ZVBEZ= ((this._inputs.VBEZ.subtract (this._internals.FVB).add (BigDecimal.valueOf (0.89))).multiply (BigDecimal.valueOf (3.6))).divide (BigDecimal.valueOf (7.0), 2, BigDecimal.ROUND_DOWN);
              
              } else {
                this._internals.ZRE4= ((this._internals.RE4LZZ.add (BigDecimal.valueOf (0.56))).multiply (BigDecimal.valueOf (3.6))).setScale (2, BigDecimal.ROUND_DOWN);
                this._internals.ZRE4VP= ((this._internals.RE4LZZV.add (BigDecimal.valueOf (0.56))).multiply (BigDecimal.valueOf (3.6))).setScale (2, BigDecimal.ROUND_DOWN);
                this._internals.ZVBEZ= ((this._inputs.VBEZ.subtract (this._internals.FVB).add (BigDecimal.valueOf (0.56))).multiply (BigDecimal.valueOf (3.6))).setScale (2, BigDecimal.ROUND_DOWN);
              
            }
          
        }
      
    }
    if (this._internals.RE4LZZ.compareTo (BigDecimal.ZERO()) == -1) {
      
        this._internals.ZRE4= BigDecimal.ZERO();
      
    }
    if (this._internals.RE4LZZV.compareTo (BigDecimal.ZERO()) == -1) {
      
        this._internals.ZRE4VP= BigDecimal.ZERO();
      
    }
    if (this._inputs.VBEZ.compareTo (BigDecimal.ZERO()) == 0) {

    
        if (this._internals.FVB.compareTo (BigDecimal.ZERO()) == 0) {
          
            this._internals.ZVBEZ= BigDecimal.ZERO();
          
        }
      
    } else {
    if ((this._inputs.VBEZ.subtract (this._internals.FVB)).compareTo (BigDecimal.ZERO()) == -1) {
          
            this._internals.ZVBEZ= BigDecimal.ZERO();
          
        }

    
    }
  }

  /**  Ermittlung der festen Tabellenfreibetraege (ohne Vorsorgepauschale), PAP Seite 13  */

  MZTABFB() {
    this._internals.ANP= BigDecimal.ZERO();
    if (this._internals.ZVBEZ.compareTo (BigDecimal.ZERO()) >= 0) {
      
        if (this._internals.ZVBEZ.compareTo (this._internals.FVBZ) == -1) {
          
            this._internals.FVBZ= this._internals.ZVBEZ.setScale (0, BigDecimal.ROUND_DOWN);
          
        }
      
    }
    if (this._inputs.STKL < 6) {
      
        if (this._internals.ZVBEZ.compareTo (BigDecimal.ZERO()) == 1) {
          
            if ((this._internals.ZVBEZ.subtract (this._internals.FVBZ)).compareTo (BigDecimal.valueOf (102)) == -1) {
              
                this._internals.ANP= (this._internals.ZVBEZ.subtract (this._internals.FVBZ)).setScale (0, BigDecimal.ROUND_DOWN);
              
              } else {
                this._internals.ANP= BigDecimal.valueOf (102);
              
            }
          
        }
      
    }
    if (this._inputs.STKL < 6) {
      
        if (this._internals.ZRE4.compareTo (this._internals.ZVBEZ) == 1) {
          
            if ((this._internals.ZRE4.subtract (this._internals.ZVBEZ)).compareTo (BigDecimal.valueOf (920)) == -1) {
              
                this._internals.ANP= (this._internals.ANP.add (this._internals.ZRE4).subtract (this._internals.ZVBEZ)).setScale (0, BigDecimal.ROUND_DOWN);
              
              } else {
                this._internals.ANP= this._internals.ANP.add (BigDecimal.valueOf (920));
              
            }
          
        }
      
    }
    this._internals.KZTAB= 1;
    if (this._inputs.STKL == 1) {
      
        this._internals.SAP= BigDecimal.valueOf (36);
        this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (5808))).setScale (0, BigDecimal.ROUND_DOWN);
      
      } else {
        if (this._inputs.STKL == 2) {
          
            this._internals.EFA= BigDecimal.valueOf (1308);
            this._internals.SAP= BigDecimal.valueOf (36);
            this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (5808))).setScale (0, BigDecimal.ROUND_DOWN);
          
          } else {
            if (this._inputs.STKL == 3) {
              
                this._internals.KZTAB= 2;
                this._internals.SAP= BigDecimal.valueOf (72);
                this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (5808))).setScale (0, BigDecimal.ROUND_DOWN);
              
              } else {
                if (this._inputs.STKL == 4) {
                  
                    this._internals.SAP= BigDecimal.valueOf (36);
                    this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (2904))).setScale (0, BigDecimal.ROUND_DOWN);
                  
                  } else {
                    this._internals.KFB= BigDecimal.ZERO();
                  
                }
              
            }
          
        }
      
    }
    this._internals.ZTABFB= this._internals.EFA.add (this._internals.ANP).add (this._internals.SAP).add (this._internals.FVBZ);
  }

  /**  Ermittlung Jahreslohnsteuer, PAP Seite 14  */

  MLSTJAHR() {
    if (this._inputs.STKL < 5) {
      
        this.UPEVP();
      
      } else {
        this._internals.VSP= BigDecimal.ZERO();
      
    }
    this._internals.ZVE= (this._internals.ZRE4.subtract (this._internals.ZTABFB).subtract (this._internals.VSP)).setScale (0, BigDecimal.ROUND_DOWN);
    if (this._internals.ZVE.compareTo (ZAHL1) == -1) {
      
        this._internals.ZVE= BigDecimal.ZERO();
        this._internals.X= BigDecimal.ZERO();
      
      } else {
        this._internals.X= this._internals.ZVE.divide (BigDecimal.valueOf (this._internals.KZTAB), 0, BigDecimal.ROUND_DOWN);
      
    }
    if (this._inputs.STKL < 5) {
      
        this.UPTAB07();
      
      } else {
        this.MST5_6();
      
    }
  }

  /**  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG), PAP Seite 15  */

  UPEVP() {

  /**  Achtung: Es wird davon ausgegangen, dass
    a) die Rentenversicherungsbemessungsgrenze gegenueber 2006 unveraendert bleibt und
    b) der Beitragssatz zur Rentenversicherung auf 9,95 v.H. angehoben wird
   */

    if (this._inputs.KRV == 1) {
      
        this._internals.VSP1= BigDecimal.ZERO();
      
      } else {
        if (this._internals.ZRE4VP.compareTo (BigDecimal.valueOf (63000)) == 1) {
          
            this._internals.ZRE4VP= BigDecimal.valueOf (63000);
          
        }
        this._internals.VSP1= (this._internals.ZRE4VP.multiply (BigDecimal.valueOf (0.28))).setScale (2, BigDecimal.ROUND_DOWN);
        this._internals.VSP1= (this._internals.VSP1.multiply (BigDecimal.valueOf (0.0995))).setScale (2, BigDecimal.ROUND_DOWN);
      
    }
    this._internals.VSP2= this._internals.ZRE4VP.multiply (BigDecimal.valueOf (0.11));
    this._internals.VHB= BigDecimal.valueOf(this._internals.KZTAB).multiply(BigDecimal.valueOf (1500));
    if (this._internals.VSP2.compareTo (this._internals.VHB) == 1) {
      
        this._internals.VSP2= this._internals.VHB;
      
    }
    this._internals.VSPN= (this._internals.VSP1.add (this._internals.VSP2)).setScale (0, BigDecimal.ROUND_UP);
    this.MVSP();
    if (this._internals.VSPN.compareTo (this._internals.VSP) == 1) {
      
        this._internals.VSP= this._internals.VSPN.setScale (2, BigDecimal.ROUND_DOWN);
      
    }
  }

  /**  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 16  */

  MVSP() {
    if (this._internals.KENNZ == 1) {
      
        this._internals.VSPO= this._internals.ZRE4VP1.multiply (BigDecimal.valueOf (0.2));
      
      } else {
        this._internals.VSPO= this._internals.ZRE4VP.multiply (BigDecimal.valueOf (0.2));
      
    }
    this._internals.VSPVOR= BigDecimal.valueOf (this._internals.KZTAB).multiply (BigDecimal.valueOf (3068));
    this._internals.VSPMAX1= BigDecimal.valueOf (this._internals.KZTAB).multiply (BigDecimal.valueOf (1334));
    this._internals.VSPMAX2= BigDecimal.valueOf (this._internals.KZTAB).multiply (BigDecimal.valueOf (667));
    this._internals.VSPKURZ= BigDecimal.valueOf (this._internals.KZTAB).multiply (BigDecimal.valueOf (1134));
    if (this._inputs.KRV == 1) {
      
        if (this._internals.VSPO.compareTo (this._internals.VSPKURZ) == 1) {
          
            this._internals.VSP= this._internals.VSPKURZ;
          
          } else {
            this._internals.VSP= this._internals.VSPO.setScale (0, BigDecimal.ROUND_DOWN);
          
        }
      
      } else {
        this.UMVSP();
      
    }
  }

  /**  Vorsorgepauschale, PAP Seite 17  */

  UMVSP() {
    if (this._internals.KENNZ == 1) {
      
        this._internals.VSPVOR= this._internals.VSPVOR.subtract (this._internals.ZRE4VP1.multiply (BigDecimal.valueOf (0.16)));
      
      } else {
        this._internals.VSPVOR= this._internals.VSPVOR.subtract (this._internals.ZRE4VP.multiply (BigDecimal.valueOf (0.16)));
      
    }
    if (this._internals.VSPVOR.compareTo (BigDecimal.ZERO()) == -1) {
      
        this._internals.VSPVOR= BigDecimal.ZERO();
      
    }
    if (this._internals.VSPO.compareTo (this._internals.VSPVOR) == 1) {
      
        this._internals.VSP= this._internals.VSPVOR;
        this._internals.VSPREST= this._internals.VSPO.subtract (this._internals.VSPVOR);
        if (this._internals.VSPREST.compareTo (this._internals.VSPMAX1) == 1) {
          
            this._internals.VSP= this._internals.VSP.add (this._internals.VSPMAX1);
            this._internals.VSPREST= (this._internals.VSPREST.subtract (this._internals.VSPMAX1)).divide (ZAHL2, 2, BigDecimal.ROUND_UP);
            if (this._internals.VSPREST.compareTo (this._internals.VSPMAX2) == 1) {
              
                this._internals.VSP= (this._internals.VSP.add (this._internals.VSPMAX2)).setScale (0, BigDecimal.ROUND_DOWN);
              
              } else {
                this._internals.VSP= (this._internals.VSP.add (this._internals.VSPREST)).setScale (0, BigDecimal.ROUND_DOWN);
              
            }
          
          } else {
            this._internals.VSP= (this._internals.VSP.add (this._internals.VSPREST)).setScale (0, BigDecimal.ROUND_DOWN);
          
        }
      
      } else {
        this._internals.VSP= this._internals.VSPO.setScale (0, BigDecimal.ROUND_DOWN);
      
    }
  }

  /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG), PAP Seite 18  */

  MST5_6() {
    this._internals.ZZX= this._internals.X;
    if (this._internals.ZZX.compareTo (BigDecimal.valueOf (25812)) == 1) {
      
        this._internals.ZX= BigDecimal.valueOf (25812);
        this.UP5_6();
      if (this._internals.ZZX.compareTo (BigDecimal.valueOf (200000)) == 1) {
        
            this._internals.ST= (this._internals.ST.add (BigDecimal.valueOf (73158.96))).setScale(0, BigDecimal.ROUND_DOWN);;
            this._internals.ST= (this._internals.ST.add ((this._internals.ZZX.subtract (BigDecimal.valueOf (200000))).multiply (BigDecimal.valueOf (0.45)))).setScale (0, BigDecimal.ROUND_DOWN);
          
          } else {
            this._internals.ST= (this._internals.ST.add ((this._internals.ZZX.subtract (BigDecimal.valueOf (25812))).multiply (BigDecimal.valueOf (0.42)))).setScale (0, BigDecimal.ROUND_DOWN);
          
        }
      
      } else {
        this._internals.ZX= this._internals.ZZX;
        this.UP5_6();
        if (this._internals.ZZX.compareTo (BigDecimal.valueOf (9144)) == 1) {
          
            this._internals.VERGL= this._internals.ST;
            this._internals.ZX= BigDecimal.valueOf (9144);
            this.UP5_6();
            this._internals.HOCH= (this._internals.ST.add ((this._internals.ZZX.subtract (BigDecimal.valueOf (9144))).multiply (BigDecimal.valueOf (0.42)))).setScale (0, BigDecimal.ROUND_DOWN);
            if (this._internals.HOCH.compareTo (this._internals.VERGL) == -1) {
              
                this._internals.ST= this._internals.HOCH;
              
              } else {
                this._internals.ST= this._internals.VERGL;
              
            }
          
        }
      
    }
  }

  /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG), PAP Seite 18  */

  UP5_6() {
    this._internals.X= this._internals.ZX.multiply (BigDecimal.valueOf (1.25));
    this.UPTAB07();
    this._internals.ST1= this._internals.ST;
    this._internals.X= this._internals.ZX.multiply (BigDecimal.valueOf (0.75));
    this.UPTAB07();
    this._internals.ST2= this._internals.ST;
    this._internals.DIFF= (this._internals.ST1.subtract (this._internals.ST2)).multiply (ZAHL2);
    this._internals.MIST= (this._internals.ZX.multiply (BigDecimal.valueOf (0.15))).setScale (0, BigDecimal.ROUND_DOWN);
    if (this._internals.MIST.compareTo (this._internals.DIFF) == 1) {
      
        this._internals.ST= this._internals.MIST;
      
      } else {
        this._internals.ST= this._internals.DIFF;
      
    }
  }

  /**  Solidaritaetszuschlag, PAP Seite 19  */

  MSOLZ() {
    this._internals.SOLZFREI= BigDecimal.valueOf (972 * this._internals.KZTAB);
    if (this._internals.JBMG.compareTo (this._internals.SOLZFREI) == 1) {
      
        this._internals.SOLZJ= (this._internals.JBMG.multiply (BigDecimal.valueOf (5.5))).divide(ZAHL100).setScale(2, BigDecimal.ROUND_DOWN);
        this._internals.SOLZMIN= (this._internals.JBMG.subtract (this._internals.SOLZFREI)).multiply (BigDecimal.valueOf (20)).divide (ZAHL100);
        if (this._internals.SOLZMIN.compareTo (this._internals.SOLZJ) == -1) {
          
            this._internals.SOLZJ= this._internals.SOLZMIN;
          
        }
        this._internals.JW= this._internals.SOLZJ.multiply (ZAHL100).setScale (0, BigDecimal.ROUND_DOWN);
        this.UPANTEIL();
        this._outputs.SOLZLZZ= this._internals.ANTEIL1;
      
      } else {
        this._outputs.SOLZLZZ= BigDecimal.ZERO();
      
    }
    if (this._inputs.R > 0) {
      
        this._internals.JW= this._internals.JBMG.multiply (ZAHL100);
        this.UPANTEIL();
        this._outputs.BK= this._internals.ANTEIL1;
      
      } else {
        this._outputs.BK= BigDecimal.ZERO();
      
    }
  }

  /**  Anteil von Jahresbetraegen fuer einen this._inputs.LZZ (§ 39b Abs. 2 Satz 10 EStG), PAP Seite 20  */

  UPANTEIL() {
    if (this._inputs.LZZ == 1) {
      
        this._internals.ANTEIL1= this._internals.JW;
        this._internals.ANTEIL2= this._internals.JW;
      
      } else {
        if (this._inputs.LZZ == 2) {
          
            this._internals.ANTEIL1= this._internals.JW.divide (ZAHL12, 0, BigDecimal.ROUND_DOWN);
            this._internals.ANTEIL2= this._internals.JW.divide (ZAHL12, 0, BigDecimal.ROUND_UP);
          
          } else {
            if (this._inputs.LZZ == 3) {
              
                this._internals.ANTEIL1= (this._internals.JW.multiply (ZAHL7)).divide (ZAHL360, 0, BigDecimal.ROUND_DOWN);
                this._internals.ANTEIL2= (this._internals.JW.multiply (ZAHL7)).divide (ZAHL360, 0, BigDecimal.ROUND_UP);
              
              } else {
                this._internals.ANTEIL1= this._internals.JW.divide (ZAHL360, 0, BigDecimal.ROUND_DOWN);
                this._internals.ANTEIL2= this._internals.JW.divide (ZAHL360, 0, BigDecimal.ROUND_UP);
              
            }
          
        }
      
    }
  }

  /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG), PAP Seite 21  */

  MSONST() {
    if (this._inputs.SONSTB.compareTo (BigDecimal.ZERO()) == 0) {
      
        this._outputs.STS= BigDecimal.ZERO();
        this._outputs.SOLZS= BigDecimal.ZERO();
        this._outputs.BKS= BigDecimal.ZERO();
      
      } else {
        this._inputs.LZZ= 1;
        this._inputs.VBEZ= this._inputs.JVBEZ;
        this._inputs.RE4= this._inputs.JRE4;
        this.MRE4LZZ();
        this.MRE4LZZ2();
        this.MLSTJAHR();
        this._internals.LST1= this._internals.ST.multiply (ZAHL100);
        this._inputs.VBEZ= this._inputs.JVBEZ.add (this._inputs.VBS);
        this._inputs.RE4= this._inputs.JRE4.add (this._inputs.SONSTB);
        this._inputs.VBEZS= this._inputs.VBEZS.add (this._inputs.STERBE);
        this.MRE4LZZ();
        this.MRE4LZZ2();
        this.MLSTJAHR();
        this._internals.LST2= this._internals.ST.multiply (ZAHL100);
        this._outputs.STS= this._internals.LST2.subtract (this._internals.LST1);
        if (this._inputs.SONSTB.compareTo (BigDecimal.ZERO()) == 1) {
          
            if (this._outputs.STS.compareTo (BigDecimal.ZERO()) == -1) {
              
                this._outputs.STS= BigDecimal.ZERO();
              
            }
          
      }
        this._outputs.SOLZS= this._outputs.STS.multiply (BigDecimal.valueOf (5.5)).divide (ZAHL100, 0, BigDecimal.ROUND_DOWN);
        if (this._inputs.R > 0) {
          
            this._outputs.BKS= this._outputs.STS;
          
          } else {
            this._outputs.BKS= BigDecimal.ZERO();
          
        }
      
    }
  }

    /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG)
         PAP Seite 21  */

    MRE4LZZ2() {

        this._internals.RE4LZZ = this._inputs.RE4.subtract(this._internals.FVB).subtract(this._internals.ALTE).subtract(this._inputs.JFREIB).add(this._inputs.JHINZU);
        this._internals.RE4LZZV = this._inputs.RE4.subtract(this._internals.FVB).subtract(this._internals.ALTE);
        this.MRE4();
        this.MZTABFB();

    }



    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG), PAP Seite 22  */

  MVMT() {
    if (this._inputs.VKAPA.compareTo (BigDecimal.ZERO()) == -1) {
      
        this._inputs.VKAPA= BigDecimal.ZERO();
      
    }
    if ((this._inputs.VMT.add (this._inputs.VKAPA)).compareTo (BigDecimal.ZERO()) == 1) {
      
        this._inputs.LZZ= 1;
        this._inputs.VBEZ= this._inputs.JVBEZ.add (this._inputs.VBS);
        this._inputs.RE4= this._inputs.JRE4.add (this._inputs.SONSTB);
        this.MRE4LZZ();
        this.MRE4LZZ2();
        this.MLSTJAHR();
        this._internals.LST1= this._internals.ST.multiply (ZAHL100);
        this._inputs.VMT= this._inputs.VMT.add (this._inputs.VKAPA);
        this._inputs.VBEZS= this._inputs.VBEZS.add (this._inputs.VKAPA);
        this._inputs.VBEZ= this._inputs.VBEZ.add (this._inputs.VKAPA);
        this._inputs.RE4= this._inputs.JRE4.add (this._inputs.SONSTB).add (this._inputs.VMT);
        this.MRE4LZZ();
        this.MRE4LZZ2();
        this._internals.KENNZ= 1;
        this._internals.ZRE4VP1= this._internals.ZRE4VP;
        this.MLSTJAHR();
        this._internals.LST3= this._internals.ST.multiply (ZAHL100);
        this._inputs.VBEZ= this._inputs.VBEZ.subtract (this._inputs.VKAPA);
        this._inputs.VBEZS= this._inputs.VBEZS.subtract (this._inputs.VKAPA);
        this._inputs.RE4= this._inputs.JRE4.add (this._inputs.SONSTB);
        this.MRE4LZZ();
        if ((this._inputs.RE4.subtract (this._inputs.JFREIB).add (this._inputs.JHINZU)).compareTo (BigDecimal.ZERO()) == -1) {
          
            this._inputs.RE4= this._inputs.RE4.subtract (this._inputs.JFREIB).add (this._inputs.JHINZU);
            this._inputs.JFREIB= BigDecimal.ZERO();
            this._inputs.JHINZU= BigDecimal.ZERO();
            this._inputs.RE4= (this._inputs.RE4.add (this._inputs.VMT)).divide (ZAHL5, 0, BigDecimal.ROUND_DOWN);
            this.MRE4LZZ2();
            this.MLSTJAHR();
            this._internals.LST2= this._internals.ST.multiply (ZAHL100);
            this._outputs.STV= this._internals.LST2.multiply (ZAHL5);
          
          } else {
            this._inputs.RE4= this._inputs.RE4.add (this._inputs.VMT.divide (ZAHL5, 0, BigDecimal.ROUND_DOWN));
            this.MRE4LZZ2();
            this.MLSTJAHR();
            this._internals.LST2= this._internals.ST.multiply (ZAHL100);
            this._outputs.STV= (this._internals.LST2.subtract (this._internals.LST1)).multiply (ZAHL5);
          
        }
        this._internals.LST3= this._internals.LST3.subtract (this._internals.LST1);
        if (this._internals.LST3.compareTo (this._outputs.STV) == -1) {
          
            this._outputs.STV= this._internals.LST3;
          
        }
        this._outputs.SOLZV= (this._outputs.STV.multiply (BigDecimal.valueOf (5.5))).divide (ZAHL100, 0, BigDecimal.ROUND_DOWN);
        if (this._inputs.R > 0) {
          
            this._outputs.BKV= this._outputs.STV;
          
          } else {
            this._outputs.BKV= BigDecimal.ZERO();
          
        }
      
      } else {
        this._outputs.STV= BigDecimal.ZERO();
        this._outputs.SOLZV= BigDecimal.ZERO();
        this._outputs.BKV= BigDecimal.ZERO();
      
    }
  }

  /**  Tarifliche Einkommensteuer §32a EStG, PAP Seite 23  */

  UPTAB07() {
    if (this._internals.X.compareTo (BigDecimal.valueOf (7665)) == -1) {
      
        this._internals.ST= BigDecimal.ZERO();
      
      } else {
        if (this._internals.X.compareTo (BigDecimal.valueOf (12740)) == -1) {
          
            this._internals.Y= (this._internals.X.subtract (BigDecimal.valueOf (7664))).divide (BigDecimal.valueOf (10000), 6, BigDecimal.ROUND_DOWN);
            this._internals.RW= this._internals.Y.multiply (BigDecimal.valueOf (883.74));
            this._internals.RW= this._internals.RW.add (BigDecimal.valueOf (1500));
            this._internals.ST= (this._internals.RW.multiply (this._internals.Y)).setScale (0, BigDecimal.ROUND_DOWN);
          
          } else {
            if (this._internals.X.compareTo (BigDecimal.valueOf (52152)) == -1) {
              
                this._internals.Y= (this._internals.X.subtract (BigDecimal.valueOf (12739))).divide (BigDecimal.valueOf (10000), 6, BigDecimal.ROUND_DOWN);
                this._internals.RW= this._internals.Y.multiply (BigDecimal.valueOf (228.74));
                this._internals.RW= this._internals.RW.add (BigDecimal.valueOf (2397));
                this._internals.RW= this._internals.RW.multiply (this._internals.Y);
                this._internals.ST= (this._internals.RW.add (BigDecimal.valueOf (989))).setScale (0, BigDecimal.ROUND_DOWN);
              
              } else {
              if (this._internals.X.compareTo (BigDecimal.valueOf (250001)) == -1) {
                
                    this._internals.ST= ((this._internals.X.multiply (BigDecimal.valueOf (0.42))).subtract (BigDecimal.valueOf (7914))).setScale (0, BigDecimal.ROUND_DOWN);
                  
                  } else {
                    this._internals.ST= ((this._internals.X.multiply (BigDecimal.valueOf (0.45))).subtract (BigDecimal.valueOf (15414))).setScale (0, BigDecimal.ROUND_DOWN);
                  
                }
              
            }
          
        }
      
    }
    this._internals.ST= this._internals.ST.multiply (BigDecimal.valueOf (this._internals.KZTAB));
  }




}


  