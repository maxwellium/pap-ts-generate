
import { BigDecimal } from 'bigdecimal';
import { PAPBaseClass } from '../PAPBaseClass';

export interface Inputs {

  /** 1, wenn die Anwendung des Faktorverfahrens gewählt wurden (nur in Steuerklasse IV) */
  af : number;

  /** Auf die Vollendung des 64. Lebensjahres folgende
             Kalenderjahr (erforderlich, wenn ALTER1=1) */
  AJAHR : number;

  /** 1, wenn das 64. Lebensjahr zu Beginn des Kalenderjahres vollendet wurde, in dem
             der Lohnzahlungszeitraum endet (§ 24 a EStG), sonst = 0 */
  ALTER1 : number;

  /** in VKAPA und VMT enthaltene Entschädigungen nach §24 Nummer 1 EStG in Cent */
  ENTSCH : BigDecimal;

  /** eingetragener Faktor mit drei Nachkommastellen */
  f : number;

  /** Jahresfreibetrag nach Maßgabe der Eintragungen auf der
             Lohnsteuerkarte in Cents (ggf. 0) */
  JFREIB : BigDecimal;

  /** Jahreshinzurechnungsbetrag in Cents (ggf. 0) */
  JHINZU : BigDecimal;

  /** Voraussichtlicher Jahresarbeitslohn ohne sonstige Bezüge und ohne Vergütung für mehrjährige Tätigkeit in Cent. 
             Anmerkung: Die Eingabe dieses Feldes (ggf. 0) ist erforderlich bei Eingabe „sonsti-ger Bezüge“ (Feld SONSTB) 
             oder bei Eingabe der „Vergütung für mehrjährige Tätigkeit“ (Feld VMT).
             Sind in einem vorangegangenen Abrechnungszeitraum bereits sonstige Bezüge gezahlt worden, so sind sie dem 
             voraussichtlichen Jahresarbeitslohn hinzuzurechnen. Vergütungen für mehrere Jahres aus einem vorangegangenen 
             Abrechnungszeitraum sind in voller Höhe hinzuzurechnen. */
  JRE4 : BigDecimal;

  /** In JRE4 enthaltene Versorgungsbezuege in Cents (ggf. 0) */
  JVBEZ : BigDecimal;

  /**Merker für die Vorsorgepauschale
      2 = der Arbeitnehmer ist NICCHT in der gesetzlichen Rentenversicherung versichert.
      
      1 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die 
        Beitragsbemessungsgrenze OST.
        
      0 = der Arbeitnehmer ist in der gesetzlichen Rentenversicherung versichert, es gilt die 
        Beitragsbemessungsgrenze WEST. */
  KRV : number;

  /** Lohnzahlungszeitraum:
             1 = Jahr
             2 = Monat
             3 = Woche
             4 = Tag */
  LZZ : number;

  /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Freibetrag für
             den Lohnzahlungszeitraum in Cent */
  LZZFREIB : BigDecimal;

  /** In der Lohnsteuerkarte des Arbeitnehmers eingetragener Hinzurechnungsbetrag
             für den Lohnzahlungszeitraum in Cent */
  LZZHINZU : BigDecimal;

  /** Dem Arbeitgeber mitgeteilte Zahlungen des Arbeitnehmers zur privaten
             Kranken- bzw. Pflegeversicherung im Sinne des §10 Abs. 1 Nr. 3 EStG 2010
             als Monatsbetrag in Cent (der Wert ist inabhängig vom Lohnzahlungszeitraum immer 
             als Monatsbetrag anzugeben).*/
  PKPV : BigDecimal;

  /** Krankenversicherung:
             0 = gesetzlich krankenversicherte Arbeitnehmer
             1 = ausschließlich privat krankenversicherte Arbeitnehmer OHNE Arbeitgeberzuschuss
             2 = ausschließlich privat krankenversicherte Arbeitnehmer MIT Arbeitgeberzuschuss */
  PKV : number;

  /** 1, wenn bei der sozialen Pflegeversicherung die Besonderheiten in Sachsen zu berücksichtigen sind bzw. 
             zu berücksichtigen wären, sonst 0. */
  PVS : number;

  /** 1, wenn er der Arbeitnehmer den Zuschlag zur sozialen Pflegeversicherung 
             zu zahlen hat, sonst 0. */
  PVZ : number;

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

  /** Kapitalauszahlungen / Abfindungen / Nachzahlungen bei Versorgungsbezügen 
             für mehrere Jahre in Cent (ggf. 0) */
  VKAPA : BigDecimal;

  /** Vergütung für mehrjährige Tätigkeit ohne Kapitalauszahlungen und ohne Abfindungen 
       bei Versorgungsbezügen in Cent (ggf. 0) */
  VMT : BigDecimal;

  /** Zahl der Freibetraege fuer Kinder (eine Dezimalstelle, nur bei Steuerklassen
             I, II, III und IV) */
  ZKF : BigDecimal;

  /** Zahl der Monate, fuer die Versorgungsbezuege gezahlt werden (nur
             erforderlich bei Jahresberechnung (LZZ = 1) */
  ZMVB : number;

  /** In JRE4 enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent */
  JRE4ENT : BigDecimal;

  /** In SONSTB enthaltene Entschädigungen nach § 24 Nummer 1 EStG in Cent */
  SONSTENT : BigDecimal;

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

  /** Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers zur
       privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. auch
       die Mindestvorsorgepauschale) in Cent beim laufenden Arbeitslohn. Für Zwecke der Lohn-
       steuerbescheinigung sind die einzelnen Ausgabewerte außerhalb des eigentlichen Lohn-
       steuerbescheinigungsprogramms zu addieren; hinzuzurechnen sind auch die Ausgabewerte
       VKVSONST */
  VKVLZZ : BigDecimal;

  /** Für den Lohnzahlungszeitraum berücksichtigte Beiträge des Arbeitnehmers 
       zur privaten Basis-Krankenversicherung und privaten Pflege-Pflichtversicherung (ggf. 
       auch die Mindestvorsorgepauschale) in Cent bei sonstigen Bezügen. Der Ausgabewert kann
       auch negativ sein. Für tarifermäßigt zu besteuernde Vergütungen für mehrjährige 
       Tätigkeiten enthält der PAP keinen entsprechenden Ausgabewert. */
  VKVSONST : BigDecimal;

};

export interface Internals {

    /** spezielles ZVE f. Einkommensteuer-Berechnung, dieses darf negativ werden. */
  zveEkSt : BigDecimal;
zveGemeinsam : BigDecimal;

    /** Altersentlastungsbetrag nach Alterseinkünftegesetz in €,
             Cent (2 Dezimalstellen) */
  ALTE : BigDecimal;

    /** Arbeitnehmer-Pauschbetrag in EURO */
  ANP : BigDecimal;

    /** Auf den Lohnzahlungszeitraum entfallender Anteil von Jahreswerten
             auf ganze Cents abgerundet */
  ANTEIL1 : BigDecimal;

    /** Bemessungsgrundlage für Altersentlastungsbetrag in €, Cent
             (2 Dezimalstellen) */
  BMG : BigDecimal;

    /** Differenz zwischen ST1 und ST2 in EURO */
  DIFF : BigDecimal;

    /** Entlastungsbetrag fuer Alleinerziehende in EURO */
  EFA : BigDecimal;

    /** Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) */
  FVB : BigDecimal;

    /** Versorgungsfreibetrag in €, Cent (2 Dezimalstellen) für die Berechnung
             der Lohnsteuer für den sonstigen Bezug */
  FVBSO : BigDecimal;

    /** Zuschlag zum Versorgungsfreibetrag in EURO */
  FVBZ : BigDecimal;

    /** Zuschlag zum Versorgungsfreibetrag in EURO fuer die Berechnung
             der Lohnsteuer beim sonstigen Bezug */
  FVBZSO : BigDecimal;

    /** Maximaler Altersentlastungsbetrag in € */
  HBALTE : BigDecimal;

    /** Massgeblicher maximaler Versorgungsfreibetrag in € */
  HFVB : BigDecimal;

    /** Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €,Cent
             (2 Dezimalstellen) */
  HFVBZ : BigDecimal;

    /** Massgeblicher maximaler Zuschlag zum Versorgungsfreibetrag in €, Cent
             (2 Dezimalstellen) für die Berechnung der Lohnsteuer für den
             sonstigen Bezug */
  HFVBZSO : BigDecimal;

    /** Nummer der Tabellenwerte fuer Versorgungsparameter */
  J : number;

    /** Jahressteuer nach § 51a EStG, aus der Solidaritaetszuschlag und
             Bemessungsgrundlage fuer die Kirchenlohnsteuer ermittelt werden in EURO */
  JBMG : BigDecimal;

    /** Auf einen Jahreslohn hochgerechneter LZZFREIB in €, Cent
             (2 Dezimalstellen) */
  JLFREIB : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnete LZZHINZU in €, Cent
             (2 Dezimalstellen) */
  JLHINZU : BigDecimal;

    /** Jahreswert, dessen Anteil fuer einen Lohnzahlungszeitraum in
             UPANTEIL errechnet werden soll in Cents */
  JW : BigDecimal;

    /** Nummer der Tabellenwerte fuer Parameter bei Altersentlastungsbetrag */
  K : number;

    /** Merker für Berechnung Lohnsteuer für mehrjährige Tätigkeit.
       0 = normale Steuerberechnung
       1 = Steuerberechnung für mehrjährige Tätigkeit
       2 = entfällt */
  KENNVMT : number;

    /** Summe der Freibetraege fuer Kinder in EURO */
  KFB : BigDecimal;

    /** Beitragssatz des Arbeitgebers zur Krankenversicherung */
  KVSATZAG : BigDecimal;

    /** Beitragssatz des Arbeitnehmers zur Krankenversicherung */
  KVSATZAN : BigDecimal;

    /** Kennzahl fuer die Einkommensteuer-Tabellenart:
             1 = Grundtabelle
             2 = Splittingtabelle */
  KZTAB : number;

    /** Jahreslohnsteuer in EURO */
  LSTJAHR : BigDecimal;

    /** Zwischenfelder der Jahreslohnsteuer in Cent */
  LST1 : BigDecimal;
LST2 : BigDecimal;
LST3 : BigDecimal;
LSTOSO : BigDecimal;
LSTSO : BigDecimal;

    /** Mindeststeuer fuer die Steuerklassen V und VI in EURO */
  MIST : BigDecimal;

    /** Beitragssatz des Arbeitgebers zur Pflegeversicherung */
  PVSATZAG : BigDecimal;

    /** Beitragssatz des Arbeitnehmers zur Pflegeversicherung */
  PVSATZAN : BigDecimal;

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

    /** Zwischenfeld zur Ermittlung der Steuer auf Vergütungen für mehrjährige Tätigkeit */
  STOVMT : BigDecimal;

    /** Bemessungsgrundlage fuer den Versorgungsfreibetrag in Cents */
  VBEZB : BigDecimal;

    /** Bemessungsgrundlage für den Versorgungsfreibetrag in Cent für
             den sonstigen Bezug */
  VBEZBSO : BigDecimal;

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

    /** Vorsorgepauschale mit Teilbeträgen für die gesetzliche Kranken- und 
       soziale Pflegeversicherung nach fiktiven Beträgen oder ggf. für die
       private Basiskrankenversicherung und private Pflege-Pflichtversicherung 
       in Euro, Cent (2 Dezimalstellen) */
  VSP3 : BigDecimal;

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

    /** Zu versteuerndes Einkommen gem. § 32a Abs. 1 und 2 EStG €, C
             (2 Dezimalstellen) */
  X : BigDecimal;

    /** gem. § 32a Abs. 1 EStG (6 Dezimalstellen) */
  Y : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
             nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4. */
  ZRE4 : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen) */
  ZRE4J : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes RE4 in €, C (2 Dezimalstellen)
             nach Abzug des Versorgungsfreibetrags und des Alterentlastungsbetrags
             zur Berechnung der Vorsorgepauschale in €, Cent (2 Dezimalstellen) */
  ZRE4VP : BigDecimal;

    /** Feste Tabellenfreibeträge (ohne Vorsorgepauschale) in €, Cent
             (2 Dezimalstellen) */
  ZTABFB : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes (VBEZ abzueglich FVB) in
             EURO, C (2 Dezimalstellen) */
  ZVBEZ : BigDecimal;

    /** Auf einen Jahreslohn hochgerechnetes VBEZ in €, C (2 Dezimalstellen) */
  ZVBEZJ : BigDecimal;

    /** Zu versteuerndes Einkommen in €, C (2 Dezimalstellen) */
  ZVE : BigDecimal;

    /** Zwischenfelder zu X fuer die Berechnung der Steuer nach § 39b
             Abs. 2 Satz 7 EStG in € */
  ZX : BigDecimal;
ZZX : BigDecimal;
HOCH : BigDecimal;
VERGL : BigDecimal;

    /** Jahreswert der berücksichtigten Beiträge zur privaten Basis-Krankenversicherung und 
        privaten Pflege-Pflichtversicherung (ggf. auch die Mindestvorsorgepauschale) in Cent. */
  VKV : BigDecimal;

};


        /**  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags  */
        export const TAB1 = [BigDecimal.valueOf (0.0), BigDecimal.valueOf (0.4),                BigDecimal.valueOf (0.384), BigDecimal.valueOf (0.368),                BigDecimal.valueOf (0.352), BigDecimal.valueOf (0.336),                BigDecimal.valueOf (0.32), BigDecimal.valueOf (0.304),                BigDecimal.valueOf (0.288), BigDecimal.valueOf (0.272),                BigDecimal.valueOf (0.256), BigDecimal.valueOf (0.24),                BigDecimal.valueOf (0.224), BigDecimal.valueOf (0.208),                BigDecimal.valueOf (0.192), BigDecimal.valueOf (0.176),                BigDecimal.valueOf (0.16), BigDecimal.valueOf (0.152),                BigDecimal.valueOf (0.144), BigDecimal.valueOf (0.136),                BigDecimal.valueOf (0.128), BigDecimal.valueOf (0.12),                BigDecimal.valueOf (0.112), BigDecimal.valueOf (0.104),                BigDecimal.valueOf (0.096), BigDecimal.valueOf (0.088),                BigDecimal.valueOf (0.08), BigDecimal.valueOf (0.072),                BigDecimal.valueOf (0.064), BigDecimal.valueOf (0.056),                BigDecimal.valueOf (0.048), BigDecimal.valueOf (0.04),                BigDecimal.valueOf (0.032), BigDecimal.valueOf (0.024),                BigDecimal.valueOf (0.016), BigDecimal.valueOf (0.008),                BigDecimal.valueOf (0.0)];

        /**  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags  */
        export const TAB2 = [BigDecimal.valueOf (0), BigDecimal.valueOf (3000),                  BigDecimal.valueOf (2880), BigDecimal.valueOf (2760),                  BigDecimal.valueOf (2640), BigDecimal.valueOf (2520),                  BigDecimal.valueOf (2400), BigDecimal.valueOf (2280),                  BigDecimal.valueOf (2160), BigDecimal.valueOf (2040),                  BigDecimal.valueOf (1920), BigDecimal.valueOf (1800),                  BigDecimal.valueOf (1680), BigDecimal.valueOf (1560),                  BigDecimal.valueOf (1440), BigDecimal.valueOf (1320),                  BigDecimal.valueOf (1200), BigDecimal.valueOf (1140),                  BigDecimal.valueOf (1080), BigDecimal.valueOf (1020),                  BigDecimal.valueOf (960), BigDecimal.valueOf (900),                  BigDecimal.valueOf (840), BigDecimal.valueOf (780),                  BigDecimal.valueOf (720), BigDecimal.valueOf (660),                  BigDecimal.valueOf (600), BigDecimal.valueOf (540),                  BigDecimal.valueOf (480), BigDecimal.valueOf (420),                  BigDecimal.valueOf (360), BigDecimal.valueOf (300),                  BigDecimal.valueOf (240), BigDecimal.valueOf (180),                  BigDecimal.valueOf (120), BigDecimal.valueOf (60),                  BigDecimal.valueOf (0)];

        /**  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag  */
        export const TAB3 = [BigDecimal.valueOf (0), BigDecimal.valueOf (900),                  BigDecimal.valueOf (864), BigDecimal.valueOf (828),                  BigDecimal.valueOf (792), BigDecimal.valueOf (756),                  BigDecimal.valueOf (720), BigDecimal.valueOf (684),                  BigDecimal.valueOf (648), BigDecimal.valueOf (612),                  BigDecimal.valueOf (576), BigDecimal.valueOf (540),                  BigDecimal.valueOf (504), BigDecimal.valueOf (468),                  BigDecimal.valueOf (432), BigDecimal.valueOf (396),                  BigDecimal.valueOf (360), BigDecimal.valueOf (342),                  BigDecimal.valueOf (324), BigDecimal.valueOf (306),                  BigDecimal.valueOf (288), BigDecimal.valueOf (270),                  BigDecimal.valueOf (252), BigDecimal.valueOf (234),                  BigDecimal.valueOf (216), BigDecimal.valueOf (198),                  BigDecimal.valueOf (180), BigDecimal.valueOf (162),                  BigDecimal.valueOf (144), BigDecimal.valueOf (126),                  BigDecimal.valueOf (108), BigDecimal.valueOf (90),                  BigDecimal.valueOf (72), BigDecimal.valueOf (54),                  BigDecimal.valueOf (36), BigDecimal.valueOf (18),                  BigDecimal.valueOf (0)];

        /**  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags  */
        export const TAB4 = [BigDecimal.valueOf (0.0), BigDecimal.valueOf (0.4),                  BigDecimal.valueOf (0.384), BigDecimal.valueOf (0.368),                  BigDecimal.valueOf (0.352), BigDecimal.valueOf (0.336),                  BigDecimal.valueOf (0.32), BigDecimal.valueOf (0.304),                  BigDecimal.valueOf (0.288), BigDecimal.valueOf (0.272),                  BigDecimal.valueOf (0.256), BigDecimal.valueOf (0.24),                  BigDecimal.valueOf (0.224), BigDecimal.valueOf (0.208),                  BigDecimal.valueOf (0.192), BigDecimal.valueOf (0.176),                  BigDecimal.valueOf (0.16), BigDecimal.valueOf (0.152),                  BigDecimal.valueOf (0.144), BigDecimal.valueOf (0.136),                  BigDecimal.valueOf (0.128), BigDecimal.valueOf (0.12),                  BigDecimal.valueOf (0.112), BigDecimal.valueOf (0.104),                  BigDecimal.valueOf (0.096), BigDecimal.valueOf (0.088),                  BigDecimal.valueOf (0.08), BigDecimal.valueOf (0.072),                  BigDecimal.valueOf (0.064), BigDecimal.valueOf (0.056),                  BigDecimal.valueOf (0.048), BigDecimal.valueOf (0.04),                  BigDecimal.valueOf (0.032), BigDecimal.valueOf (0.024),                  BigDecimal.valueOf (0.016), BigDecimal.valueOf (0.008),                  BigDecimal.valueOf (0.0)];

        /**  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags  */
        export const TAB5 = [BigDecimal.valueOf (0), BigDecimal.valueOf (1900),                  BigDecimal.valueOf (1824), BigDecimal.valueOf (1748),                  BigDecimal.valueOf (1672), BigDecimal.valueOf (1596),                  BigDecimal.valueOf (1520), BigDecimal.valueOf (1444),                  BigDecimal.valueOf (1368), BigDecimal.valueOf (1292),                  BigDecimal.valueOf (1216), BigDecimal.valueOf (1140),                  BigDecimal.valueOf (1064), BigDecimal.valueOf (988),                  BigDecimal.valueOf (912), BigDecimal.valueOf (836),                  BigDecimal.valueOf (760), BigDecimal.valueOf (722),                  BigDecimal.valueOf (684), BigDecimal.valueOf (646),                  BigDecimal.valueOf (608), BigDecimal.valueOf (570),                  BigDecimal.valueOf (532), BigDecimal.valueOf (494),                  BigDecimal.valueOf (456), BigDecimal.valueOf (418),                  BigDecimal.valueOf (380), BigDecimal.valueOf (342),                  BigDecimal.valueOf (304), BigDecimal.valueOf (266),                  BigDecimal.valueOf (228), BigDecimal.valueOf (190),                  BigDecimal.valueOf (152), BigDecimal.valueOf (114),                  BigDecimal.valueOf (76), BigDecimal.valueOf (38),                  BigDecimal.valueOf (0)];
 
        /**  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte  */
        export const ZAHL0 = BigDecimal.ZERO();
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
        export const ZAHL500 = new BigDecimal(500);
        export const ZAHL700 = new BigDecimal(700);
        export const ZAHL1000 = new BigDecimal(1000);
        
        /**  Rentenbemessungs-Grenze neue Bundesländer in EUR  */
        /**  Neuer Wert  2014  */
      export const RENTBEMESSUNGSGR_OST = new BigDecimal(60000);
      
      /**  Rentenbemessungs-Grenze alte Bundesländer in EUR  */
      /**  Neuer Wert 2014  */
      export const RENTBEMESSUNGSGR_WEST = new BigDecimal(71400);

    

export class Lohnsteuer2014Big extends PAPBaseClass<Inputs, Outputs, Internals> {

  static readonly TAB1 = TAB1;
  static readonly TAB2 = TAB2;
  static readonly TAB3 = TAB3;
  static readonly TAB4 = TAB4;
  static readonly TAB5 = TAB5;
  static readonly ZAHL0 = ZAHL0;
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
  static readonly ZAHL500 = ZAHL500;
  static readonly ZAHL700 = ZAHL700;
  static readonly ZAHL1000 = ZAHL1000;
  static readonly RENTBEMESSUNGSGR_OST = RENTBEMESSUNGSGR_OST;
  static readonly RENTBEMESSUNGSGR_WEST = RENTBEMESSUNGSGR_WEST;


  public name = 'Lohnsteuer2014Big';
  public _inputs = {
    af : 1.0,
    AJAHR : 0,
    ALTER1 : 0,
    ENTSCH : new BigDecimal(0),
    f : 1.0,
    JFREIB : new BigDecimal(0),
    JHINZU : new BigDecimal(0),
    JRE4 : new BigDecimal(0),
    JVBEZ : new BigDecimal(0),
    KRV : 0,
    LZZ : 0,
    LZZFREIB : new BigDecimal(0),
    LZZHINZU : new BigDecimal(0),
    PKPV : new BigDecimal(0),
    PKV : 0,
    PVS : 0,
    PVZ : 0,
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
    ZKF : new BigDecimal(0),
    ZMVB : 0,
    JRE4ENT : BigDecimal.ZERO(),
    SONSTENT : BigDecimal.ZERO(),
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
    VKVLZZ : new BigDecimal(0),
    VKVSONST : new BigDecimal(0),
  };
  public _internals = {
    zveEkSt : new BigDecimal(0),
    zveGemeinsam : new BigDecimal(0),
    ALTE : new BigDecimal(0),
    ANP : new BigDecimal(0),
    ANTEIL1 : new BigDecimal(0),
    BMG : new BigDecimal(0),
    DIFF : new BigDecimal(0),
    EFA : new BigDecimal(0),
    FVB : new BigDecimal(0),
    FVBSO : new BigDecimal(0),
    FVBZ : new BigDecimal(0),
    FVBZSO : new BigDecimal(0),
    HBALTE : new BigDecimal(0),
    HFVB : new BigDecimal(0),
    HFVBZ : new BigDecimal(0),
    HFVBZSO : new BigDecimal(0),
    J : 0,
    JBMG : new BigDecimal(0),
    JLFREIB : new BigDecimal(0),
    JLHINZU : new BigDecimal(0),
    JW : new BigDecimal(0),
    K : 0,
    KENNVMT : 0,
    KFB : new BigDecimal(0),
    KVSATZAG : new BigDecimal(0),
    KVSATZAN : new BigDecimal(0),
    KZTAB : 0,
    LSTJAHR : new BigDecimal(0),
    LST1 : new BigDecimal(0),
    LST2 : new BigDecimal(0),
    LST3 : new BigDecimal(0),
    LSTOSO : new BigDecimal(0),
    LSTSO : new BigDecimal(0),
    MIST : new BigDecimal(0),
    PVSATZAG : new BigDecimal(0),
    PVSATZAN : new BigDecimal(0),
    RW : new BigDecimal(0),
    SAP : new BigDecimal(0),
    SOLZFREI : new BigDecimal(0),
    SOLZJ : new BigDecimal(0),
    SOLZMIN : new BigDecimal(0),
    ST : new BigDecimal(0),
    ST1 : new BigDecimal(0),
    ST2 : new BigDecimal(0),
    STOVMT : new BigDecimal(0),
    VBEZB : new BigDecimal(0),
    VBEZBSO : new BigDecimal(0),
    VHB : new BigDecimal(0),
    VSP : new BigDecimal(0),
    VSPN : new BigDecimal(0),
    VSP1 : new BigDecimal(0),
    VSP2 : new BigDecimal(0),
    VSP3 : new BigDecimal(0),
    VSPKURZ : new BigDecimal(0),
    VSPMAX1 : new BigDecimal(0),
    VSPMAX2 : new BigDecimal(0),
    VSPO : new BigDecimal(0),
    VSPREST : new BigDecimal(0),
    VSPVOR : new BigDecimal(0),
    X : new BigDecimal(0),
    Y : new BigDecimal(0),
    ZRE4 : new BigDecimal(0),
    ZRE4J : new BigDecimal(0),
    ZRE4VP : new BigDecimal(0),
    ZTABFB : new BigDecimal(0),
    ZVBEZ : new BigDecimal(0),
    ZVBEZJ : new BigDecimal(0),
    ZVE : new BigDecimal(0),
    ZX : new BigDecimal(0),
    ZZX : new BigDecimal(0),
    HOCH : new BigDecimal(0),
    VERGL : new BigDecimal(0),
    VKV : new BigDecimal(0),
  };

  



  /**  PROGRAMMABLAUFPLAN, PAP Seite 12  */
  main() {
    this.MRE4JL();
    this._internals.VBEZBSO= BigDecimal.ZERO();
    this._internals.KENNVMT= 0;
    this.MRE4();
    this.MRE4ABZ();
    this.MZTABFB();
    this.MLSTJAHR();
    this._internals.LSTJAHR= this._internals.ST.multiply(BigDecimal.valueOf(this._inputs.f)).setScale(0,BigDecimal.ROUND_DOWN);
    this._internals.JW= this._internals.LSTJAHR.multiply(ZAHL100);
    this.UPLSTLZZ();
    this.UPVKVLZZ();

    if (this._inputs.ZKF.compareTo (BigDecimal.ZERO()) == 1) {
      
          this._internals.ZTABFB= (this._internals.ZTABFB.add (this._internals.KFB)).setScale (2, BigDecimal.ROUND_DOWN);
          this.MRE4ABZ();
          this.MLSTJAHR();
          this._internals.JBMG= this._internals.ST.multiply(BigDecimal.valueOf(this._inputs.f)).setScale(0, BigDecimal.ROUND_DOWN);
      
      } else {
          this._internals.JBMG= this._internals.LSTJAHR;
      
    }
    this.MSOLZ();
    this.MSONST();
    this.MVMT();
  }

  /**  Ermittlung des Jahresarbeitslohns nach § 39 b Abs. 2 Satz 2 EStG, PAP Seite 12  */
  MRE4JL() {
    if (this._inputs.LZZ == 1) {
      
        this._internals.ZRE4J= this._inputs.RE4.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
        this._internals.ZVBEZJ= this._inputs.VBEZ.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
        this._internals.JLFREIB= this._inputs.LZZFREIB.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
        this._internals.JLHINZU= this._inputs.LZZHINZU.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
      
      } else {
        if (this._inputs.LZZ == 2) {
          
            this._internals.ZRE4J= (this._inputs.RE4.multiply (ZAHL12)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
            this._internals.ZVBEZJ= (this._inputs.VBEZ.multiply (ZAHL12)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
            this._internals.JLFREIB= (this._inputs.LZZFREIB.multiply (ZAHL12)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
            this._internals.JLHINZU= (this._inputs.LZZHINZU.multiply (ZAHL12)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
          
          } else {
            if (this._inputs.LZZ == 3) {
              
                this._internals.ZRE4J= (this._inputs.RE4.multiply (ZAHL360)).divide (ZAHL700, 2, BigDecimal.ROUND_DOWN);
                this._internals.ZVBEZJ= (this._inputs.VBEZ.multiply (ZAHL360)).divide (ZAHL700, 2, BigDecimal.ROUND_DOWN);
                this._internals.JLFREIB= (this._inputs.LZZFREIB.multiply (ZAHL360)).divide (ZAHL700, 2, BigDecimal.ROUND_DOWN);
                this._internals.JLHINZU= (this._inputs.LZZHINZU.multiply (ZAHL360)).divide (ZAHL700, 2, BigDecimal.ROUND_DOWN);
              
              } else {
                this._internals.ZRE4J= (this._inputs.RE4.multiply (ZAHL360)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
                this._internals.ZVBEZJ= (this._inputs.VBEZ.multiply (ZAHL360)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
                this._internals.JLFREIB= (this._inputs.LZZFREIB.multiply (ZAHL360)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
                this._internals.JLHINZU= (this._inputs.LZZHINZU.multiply (ZAHL360)).divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
              
            }
          
        }
      
    }
    if (this._inputs.af == 0) {
    
      this._inputs.f= 1;
    
    }
  }



  /**  Freibeträge this._inputs.für Versorgungsbezüge, Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 13  */
  MRE4() {
    if (this._internals.ZVBEZJ.compareTo (BigDecimal.ZERO()) == 0) {
      
        this._internals.FVBZ= BigDecimal.ZERO();
        this._internals.FVB= BigDecimal.ZERO();
        this._internals.FVBZSO= BigDecimal.ZERO();
        this._internals.FVBSO= BigDecimal.ZERO();
      
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
          
            this._internals.VBEZB= (this._inputs.VBEZM.multiply (BigDecimal.valueOf (this._inputs.ZMVB))).add (this._inputs.VBEZS);
            this._internals.HFVB= TAB2[this._internals.J].divide (ZAHL12).multiply (BigDecimal.valueOf (this._inputs.ZMVB));
            this._internals.FVBZ= TAB3[this._internals.J].divide (ZAHL12).multiply (BigDecimal.valueOf (this._inputs.ZMVB)).setScale (0, BigDecimal.ROUND_UP);
           
          } else {
            this._internals.VBEZB= ((this._inputs.VBEZM.multiply (ZAHL12)).add (this._inputs.VBEZS)).setScale (2, BigDecimal.ROUND_DOWN);
            this._internals.HFVB= TAB2[this._internals.J];
            this._internals.FVBZ= TAB3[this._internals.J];
          
        }
        this._internals.FVB= ((this._internals.VBEZB.multiply (TAB1[this._internals.J]))).divide (ZAHL100).setScale (2, BigDecimal.ROUND_UP);
        if (this._internals.FVB.compareTo (this._internals.HFVB) == 1) {
          
            this._internals.FVB = this._internals.HFVB;
          
        }
        this._internals.FVBSO= (this._internals.FVB.add((this._internals.VBEZBSO.multiply (TAB1[this._internals.J])).divide (ZAHL100))).setScale (2, BigDecimal.ROUND_UP);
        if (this._internals.FVBSO.compareTo (TAB2[this._internals.J]) == 1) {
          
            this._internals.FVBSO = TAB2[this._internals.J];
           
        }
        this._internals.HFVBZSO= (((this._internals.VBEZB.add(this._internals.VBEZBSO)).divide (ZAHL100)).subtract (this._internals.FVBSO)).setScale (2, BigDecimal.ROUND_DOWN);        
        this._internals.FVBZSO= (this._internals.FVBZ.add((this._internals.VBEZBSO).divide (ZAHL100))).setScale (0, BigDecimal.ROUND_UP);
        if (this._internals.FVBZSO.compareTo (this._internals.HFVBZSO) == 1) {
          
            this._internals.FVBZSO = this._internals.HFVBZSO.setScale(0, BigDecimal.ROUND_UP);
          
        }
        if (this._internals.FVBZSO.compareTo (TAB3[this._internals.J]) == 1) {
          
            this._internals.FVBZSO = TAB3[this._internals.J];
          
        } 
        this._internals.HFVBZ= ((this._internals.VBEZB.divide (ZAHL100)).subtract (this._internals.FVB)).setScale (2, BigDecimal.ROUND_DOWN);
        if (this._internals.FVBZ.compareTo (this._internals.HFVBZ) == 1) {
          
            this._internals.FVBZ = this._internals.HFVBZ.setScale (0, BigDecimal.ROUND_UP);
          
        }
      
    }
    this.MRE4ALTE();
  }



  /**  Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 14  */
  MRE4ALTE() {
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
        this._internals.BMG= this._internals.ZRE4J.subtract (this._internals.ZVBEZJ);
        /**  Lt. PAP muss hier auf ganze EUR gerundet werden  */
        this._internals.ALTE = (this._internals.BMG.multiply(TAB4[this._internals.K])).setScale(0, BigDecimal.ROUND_UP);
        this._internals.HBALTE= TAB5[this._internals.K];
        if (this._internals.ALTE.compareTo (this._internals.HBALTE) == 1) {
          
            this._internals.ALTE= this._internals.HBALTE;
          
        }
      
    }
  }



  /**  Ermittlung des Jahresarbeitslohns nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4 EStG, PAP Seite 16  */

  MRE4ABZ() { 
    this._internals.ZRE4= (this._internals.ZRE4J.subtract (this._internals.FVB).subtract   (this._internals.ALTE).subtract (this._internals.JLFREIB).add (this._internals.JLHINZU)).setScale (2, BigDecimal.ROUND_DOWN);
    if (this._internals.ZRE4.compareTo (BigDecimal.ZERO()) == -1) { 
       
        this._internals.ZRE4= BigDecimal.ZERO(); 
       
    } 
    this._internals.ZRE4VP= this._internals.ZRE4J;

    if (this._internals.KENNVMT == 2) { 
       
          this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.ENTSCH.divide(ZAHL100)).setScale(2,BigDecimal.ROUND_DOWN); 
       
    }

    this._internals.ZVBEZ = this._internals.ZVBEZJ.subtract(this._internals.FVB).setScale(2, BigDecimal.ROUND_DOWN);

    if (this._internals.ZVBEZ.compareTo(BigDecimal.ZERO()) == -1) { 
       
        this._internals.ZVBEZ = BigDecimal.ZERO(); 
       
    } 
  }



  /**  Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 17  */
  MZTABFB() {
    this._internals.ANP= BigDecimal.ZERO();
    if (this._internals.ZVBEZ.compareTo (BigDecimal.ZERO()) >= 0 && this._internals.ZVBEZ.compareTo(this._internals.FVBZ) == -1) {
      
        this._internals.FVBZ = BigDecimal.valueOf(this._internals.ZVBEZ.longValue());
      
    }
    if (this._inputs.STKL < 6) {
      
        if (this._internals.ZVBEZ.compareTo (BigDecimal.ZERO()) == 1) {
          
            if ((this._internals.ZVBEZ.subtract (this._internals.FVBZ)).compareTo (BigDecimal.valueOf (102)) == -1) {
              
                this._internals.ANP= (this._internals.ZVBEZ.subtract (this._internals.FVBZ)).setScale (0, BigDecimal.ROUND_UP);
              
              } else {
                this._internals.ANP= BigDecimal.valueOf (102);
              
            }
          
        }
      
      } else {
        this._internals.FVBZ= BigDecimal.valueOf (0);
        this._internals.FVBZSO= BigDecimal.valueOf (0);
      
    }
    if (this._inputs.STKL < 6) {
      
        if (this._internals.ZRE4.compareTo(this._internals.ZVBEZ) == 1) {
          
            if (this._internals.ZRE4.subtract(this._internals.ZVBEZ).compareTo(ZAHL1000) == -1) {
              
                this._internals.ANP = this._internals.ANP.add(this._internals.ZRE4).subtract(this._internals.ZVBEZ).setScale(0,BigDecimal.ROUND_UP);
              
              } else {
                this._internals.ANP = this._internals.ANP.add(ZAHL1000);
              
            }
          
        }
      
    }
    this._internals.KZTAB= 1;
    if (this._inputs.STKL == 1) {
      
        this._internals.SAP= BigDecimal.valueOf (36);
        this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (7008))).setScale (0, BigDecimal.ROUND_DOWN);
      
        } else {
          if (this._inputs.STKL == 2) {
            
              this._internals.EFA= BigDecimal.valueOf (1308);
              this._internals.SAP= BigDecimal.valueOf (36);
              this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (7008))).setScale (0, BigDecimal.ROUND_DOWN);
            
          }  
           else {
              if (this._inputs.STKL == 3) {
                
                  this._internals.KZTAB= 2;
                  this._internals.SAP= BigDecimal.valueOf (36);
                  this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (7008))).setScale (0, BigDecimal.ROUND_DOWN);
                
              }  
               else {
                if (this._inputs.STKL == 4) {
                  
                    this._internals.SAP= BigDecimal.valueOf (36);
                    this._internals.KFB= (this._inputs.ZKF.multiply (BigDecimal.valueOf (3504))).setScale (0, BigDecimal.ROUND_DOWN);
                   
                }
                   else {
                    if (this._inputs.STKL == 5) {
                      
                        this._internals.SAP= BigDecimal.valueOf (36);
                        this._internals.KFB= BigDecimal.ZERO();
                       
                    }
                       else {
                          this._internals.KFB= BigDecimal.ZERO();
                      }
                  }
              }    
          }    
          
    }
    this._internals.ZTABFB= (this._internals.EFA.add (this._internals.ANP).add (this._internals.SAP).add (this._internals.FVBZ)).setScale (2, BigDecimal.ROUND_DOWN);
  }



  /**  Ermittlung Jahreslohnsteuer, PAP Seite 18  */
  MLSTJAHR() {
     this.UPEVP();
    if (this._internals.KENNVMT != 1) {
      
        this._internals.ZVE= (this._internals.ZRE4.subtract (this._internals.ZTABFB).subtract (this._internals.VSP)).setScale (2, BigDecimal.ROUND_DOWN);
        this.UPMLST();
      
      } else {
        this._internals.ZVE= (this._internals.ZRE4.subtract (this._internals.ZTABFB).subtract (this._internals.VSP).subtract ((this._inputs.VMT).divide (ZAHL100)).subtract ((this._inputs.VKAPA).divide (ZAHL100))).setScale (2, BigDecimal.ROUND_DOWN);
        if (this._internals.ZVE.compareTo (BigDecimal.ZERO()) == -1) {
          
             this._internals.ZVE = this._internals.ZVE.add(this._inputs.VMT.divide(ZAHL100)).add(this._inputs.VKAPA.divide(ZAHL100)).divide(ZAHL5).setScale(2,BigDecimal.ROUND_DOWN);
            this.UPMLST();
            this._internals.ST= (this._internals.ST.multiply (ZAHL5)).setScale (0, BigDecimal.ROUND_DOWN); 
          
          } else {
            this.UPMLST();
          this._internals.STOVMT= this._internals.ST;
            this._internals.ZVE= (this._internals.ZVE.add(((this._inputs.VMT.add (this._inputs.VKAPA)).divide (ZAHL500)))).setScale (2, BigDecimal.ROUND_DOWN);
            this.UPMLST();
            this._internals.ST= (((this._internals.ST.subtract (this._internals.STOVMT)).multiply (ZAHL5)).add (this._internals.STOVMT)).setScale (0, BigDecimal.ROUND_DOWN); 
          
        }
      
    } 
  }
  

  UPVKVLZZ() {
   this.UPVKV();
   this._internals.JW = this._internals.VKV;
   this.UPANTEIL();
   this._outputs.VKVLZZ = this._internals.ANTEIL1;
  }

 
  UPVKV() {
   if (this._inputs.PKV > 0) {
    
      if (this._internals.VSP2.compareTo(this._internals.VSP3) == 1) {
        
          this._internals.VKV = this._internals.VSP2.multiply(ZAHL100);
        
        } else {
          this._internals.VKV = this._internals.VSP3.multiply(ZAHL100);
        
      }
    
    } else {
      this._internals.VKV = BigDecimal.ZERO();
    
  }
  }
  
 
   UPLSTLZZ() {
       this._internals.JW = this._internals.LSTJAHR.multiply(ZAHL100);
    this.UPANTEIL();
    this._outputs.LSTLZZ = this._internals.ANTEIL1;
   }
  
  
  
  
  /**  PAP Seite 20 Ermittlung der Jahreslohnsteuer aus dem Einkommensteuertarif  */
  UPMLST() {
  if (this._internals.ZVE.compareTo (ZAHL1) == -1) {
      
        this._internals.ZVE= BigDecimal.ZERO();
        this._internals.X= BigDecimal.ZERO();
      
      } else {
        this._internals.X= (this._internals.ZVE.divide (BigDecimal.valueOf(this._internals.KZTAB))).setScale (0, BigDecimal.ROUND_DOWN);
      
    }
  if (this._inputs.STKL < 5) {
      
        this.UPTAB14(); /**  Neu 2014  */
      
      } else {
        this.MST5_6();
      
    }
  }    


  
  /**    Vorsorgepauschale (§ 39b Absatz 2 Satz 5 Nummer 3 und Absatz 4 EStG)
        Achtung: Es wird davon ausgegangen, dass  
          a) Es wird davon ausge-gangen, dassa) this._inputs.für die BBG (Ost) 60.000 Euro und this._inputs.für die BBG (West) 71.400 Euro festgelegt wird sowie
          b) der Beitragssatz zur Rentenversicherung auf 18,9 % gesenkt wird.
        
        PAP Seite 21   */
        /**  Neu 2014  */
  UPEVP() {
    if (this._inputs.KRV > 1) {
      
        this._internals.VSP1= BigDecimal.ZERO();
      
      } else {      
            if (this._inputs.KRV == 0) {
                        /**  Neuer Wert 2014  */
                  if (this._internals.ZRE4VP.compareTo(RENTBEMESSUNGSGR_WEST) == 1) {
                    
                      this._internals.ZRE4VP = RENTBEMESSUNGSGR_WEST;
                    
                  } 
              
            }        
             else {          /**  Neuer Wert 2014  */         
              if (this._internals.ZRE4VP.compareTo(RENTBEMESSUNGSGR_OST) == 1) {
                
                  this._internals.ZRE4VP = RENTBEMESSUNGSGR_OST;
                
              } 
            }
             /**  Neuer Wert 2014  */ 
            this._internals.VSP1 = (this._internals.ZRE4VP.multiply(BigDecimal.valueOf(0.56))).setScale(2,BigDecimal.ROUND_DOWN);
            this._internals.VSP1 = (this._internals.VSP1.multiply(BigDecimal.valueOf(0.0945))).setScale(2,BigDecimal.ROUND_DOWN);
      
    }
    this._internals.VSP2 = (this._internals.ZRE4VP.multiply(BigDecimal.valueOf(0.12))).setScale(2,BigDecimal.ROUND_DOWN);
    if (this._inputs.STKL == 3) {
      
          this._internals.VHB = BigDecimal.valueOf(3000);
      
    }     
     else {
          this._internals.VHB = BigDecimal.valueOf(1900);
    }
    if (this._internals.VSP2.compareTo (this._internals.VHB) == 1) {
      
        this._internals.VSP2= this._internals.VHB;
      
    }
    this._internals.VSPN= (this._internals.VSP1.add (this._internals.VSP2)).setScale (0, BigDecimal.ROUND_UP);
    this.MVSP();
    if (this._internals.VSPN.compareTo (this._internals.VSP) == 1) {
      
        this._internals.VSP= this._internals.VSPN.setScale (2, BigDecimal.ROUND_DOWN);
      
    }
  }
 


  /**  Vorsorgepauschale (§39b Abs. 2 Satz 5 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 22  */
  /**  Neu 2014  */
  MVSP() {
   /**  Neuer Wert 2014  */  
    if (this._internals.ZRE4VP.compareTo( BigDecimal.valueOf(48600) ) == 1) {
      
       /**  Neuer Wert 2014  */  
      this._internals.ZRE4VP = BigDecimal.valueOf(48600);
    
    }

    if (this._inputs.PKV > 0) {
      
          if (this._inputs.STKL == 6) {
            
                this._internals.VSP3 = BigDecimal.ZERO();
            
            } else {
                this._internals.VSP3 = this._inputs.PKPV.multiply(ZAHL12).divide(ZAHL100);
                if (this._inputs.PKV == 2) {
                  
                      this._internals.KVSATZAG = BigDecimal.valueOf(0.07).setScale(5);
                      if (this._inputs.PVS == 1) {
                        
                          this._internals.PVSATZAG = BigDecimal.valueOf(0.00525).setScale(5);
                        
                        } else {
                          this._internals.PVSATZAG = BigDecimal.valueOf(0.01025).setScale(5);
                        
                      }
                      this._internals.VSP3 = this._internals.VSP3.subtract(this._internals.ZRE4VP.multiply(this._internals.KVSATZAG.add(this._internals.PVSATZAG))).setScale(2, BigDecimal.ROUND_DOWN);
                            
                }
            
          }
      
      } else {
        this._internals.KVSATZAN = BigDecimal.valueOf(0.079).setScale(5);
        if (this._inputs.PVS == 1) {
          
            this._internals.PVSATZAN = BigDecimal.valueOf(0.01525).setScale(5);
          
          } else {
            this._internals.PVSATZAN = BigDecimal.valueOf(0.01025).setScale(5);
          
        }
        if (this._inputs.PVZ == 1) {
          
            this._internals.PVSATZAN = this._internals.PVSATZAN.add(BigDecimal.valueOf(0.0025));
          
        }
        this._internals.VSP3 = this._internals.ZRE4VP.multiply(this._internals.KVSATZAN.add(this._internals.PVSATZAN)).setScale(2, BigDecimal.ROUND_DOWN);
      
    }
    this._internals.VSP = this._internals.VSP3.add(this._internals.VSP1).setScale(0, BigDecimal.ROUND_UP);
  }

  UMVSP() {
    this._internals.VSPVOR = (this._internals.VSPVOR.subtract(this._internals.ZRE4VP.multiply(BigDecimal.valueOf(0.16)))).setScale(2, BigDecimal.ROUND_DOWN);
    if (this._internals.VSPVOR.compareTo(BigDecimal.ZERO()) == -1) {
      
        this._internals.VSPVOR = BigDecimal.ZERO();
      
    }
    if (this._internals.VSPO.compareTo(this._internals.VSPVOR) == 1) {
      
        this._internals.VSP = this._internals.VSPVOR;
        this._internals.VSPREST = this._internals.VSPO.subtract(this._internals.VSPVOR);
        if (this._internals.VSPREST.compareTo(this._internals.VSPMAX1) == 1) {
          
            this._internals.VSP = this._internals.VSP.add(this._internals.VSPMAX1);
            this._internals.VSPREST = (this._internals.VSPREST.subtract(this._internals.VSPMAX1)).divide(ZAHL2, 2,BigDecimal.ROUND_UP);
            if (this._internals.VSPREST.compareTo(this._internals.VSPMAX2) == 1) {
              
                this._internals.VSP = (this._internals.VSP.add(this._internals.VSPMAX2)).setScale(0,BigDecimal.ROUND_DOWN);
              
              } else {
                this._internals.VSP = (this._internals.VSP.add(this._internals.VSPREST)).setScale(0,BigDecimal.ROUND_DOWN);
              
            }
          
          } else {
            this._internals.VSP = (this._internals.VSP.add(this._internals.VSPREST)).setScale(0, BigDecimal.ROUND_DOWN);
          
        }
      
      } else {
        this._internals.VSP = this._internals.VSPO.setScale(0, BigDecimal.ROUND_DOWN);
      
    }
  }

  /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 23  */
  /**  Neu 2014  */
  MST5_6() {
    this._internals.ZZX= this._internals.X;
    if (this._internals.ZZX.compareTo (BigDecimal.valueOf (26441)) == 1) {
      
        this._internals.ZX= BigDecimal.valueOf (26441);
        this.UP5_6();
      if (this._internals.ZZX.compareTo (BigDecimal.valueOf (200584)) == 1) {
        
            this._internals.ST= (this._internals.ST.add ((BigDecimal.valueOf (200584).subtract (BigDecimal.valueOf (26441))).multiply (BigDecimal.valueOf (0.42)))).setScale (0, BigDecimal.ROUND_DOWN);
            this._internals.ST= (this._internals.ST.add ((this._internals.ZZX.subtract (BigDecimal.valueOf (200584))).multiply (BigDecimal.valueOf (0.45)))).setScale (0, BigDecimal.ROUND_DOWN);
          
          } else {
            this._internals.ST= (this._internals.ST.add ((this._internals.ZZX.subtract (BigDecimal.valueOf (26441))).multiply (BigDecimal.valueOf (0.42)))).setScale (0, BigDecimal.ROUND_DOWN);
          
        }
      
      } else {
        this._internals.ZX= this._internals.ZZX;
        this.UP5_6();
        if (this._internals.ZZX.compareTo (BigDecimal.valueOf (9763)) == 1) { /**  Neuer Wert 2014  */
          
            this._internals.VERGL= this._internals.ST;
            this._internals.ZX= BigDecimal.valueOf (9763); /**  Neuer Wert 2014  */
            this.UP5_6();
            this._internals.HOCH= (this._internals.ST.add ((this._internals.ZZX.subtract (BigDecimal.valueOf (9763))).multiply (BigDecimal.valueOf (0.42)))).setScale (0, BigDecimal.ROUND_DOWN); /**  Neuer Wert 2014  */
            if (this._internals.HOCH.compareTo (this._internals.VERGL) == -1) {
              
                this._internals.ST= this._internals.HOCH;
              
              } else {
                this._internals.ST= this._internals.VERGL;
              
            }
          
        }
      
    }
  }

  
  
  /**  Unterprogramm zur Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 24  */
  UP5_6() {
    this._internals.X= (this._internals.ZX.multiply (BigDecimal.valueOf (1.25))).setScale (2, BigDecimal.ROUND_DOWN);
    this.UPTAB14(); /**  Neu 2014  */
    this._internals.ST1= this._internals.ST;
    this._internals.X= (this._internals.ZX.multiply (BigDecimal.valueOf (0.75))).setScale (2, BigDecimal.ROUND_DOWN);
    this.UPTAB14(); /**  Neu 2014  */
    this._internals.ST2= this._internals.ST;
    this._internals.DIFF= (this._internals.ST1.subtract (this._internals.ST2)).multiply (ZAHL2);
    this._internals.MIST= (this._internals.ZX.multiply (BigDecimal.valueOf (0.14))).setScale (0, BigDecimal.ROUND_DOWN);
    if (this._internals.MIST.compareTo (this._internals.DIFF) == 1) {
      
        this._internals.ST= this._internals.MIST;
      
      } else {
        this._internals.ST= this._internals.DIFF;
      
    }
  }



  /**  Solidaritaetszuschlag, PAP Seite 25  */
  MSOLZ() {
    this._internals.SOLZFREI= BigDecimal.valueOf (972 * this._internals.KZTAB);
    if (this._internals.JBMG.compareTo (this._internals.SOLZFREI) == 1) {
      
        this._internals.SOLZJ= (this._internals.JBMG.multiply (BigDecimal.valueOf (5.5))).divide(ZAHL100).setScale(2, BigDecimal.ROUND_DOWN);
        this._internals.SOLZMIN= (this._internals.JBMG.subtract (this._internals.SOLZFREI)).multiply (BigDecimal.valueOf (20)).divide (ZAHL100).setScale (2, BigDecimal.ROUND_DOWN);
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



  /**  Anteil von Jahresbetraegen fuer einen this._inputs.LZZ (§ 39b Abs. 2 Satz 9 EStG), PAP Seite 26  */
  UPANTEIL() {
    if (this._inputs.LZZ == 1) {
      
        this._internals.ANTEIL1= this._internals.JW;
      
      } else {
        if (this._inputs.LZZ == 2) {
          
            this._internals.ANTEIL1= this._internals.JW.divide (ZAHL12, 0, BigDecimal.ROUND_DOWN);
          
          } else {
            if (this._inputs.LZZ == 3) {
               
                this._internals.ANTEIL1= (this._internals.JW.multiply (ZAHL7)).divide (ZAHL360, 0, BigDecimal.ROUND_DOWN);
              
              } else {
                this._internals.ANTEIL1= this._internals.JW.divide (ZAHL360, 0, BigDecimal.ROUND_DOWN);
              
            }
          
        }
      
    }
  }



  /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 8 EStG), PAP Seite 27  */
  MSONST() {
    this._inputs.LZZ= 1;
    if (this._inputs.ZMVB == 0) {
      
        this._inputs.ZMVB= 12;
      
    }
    if (this._inputs.SONSTB.compareTo (BigDecimal.ZERO()) == 0) {
      
        this._outputs.VKVSONST= BigDecimal.ZERO();
        this._internals.LSTSO= BigDecimal.ZERO();
        this._outputs.STS= BigDecimal.ZERO();
        this._outputs.SOLZS= BigDecimal.ZERO();
        this._outputs.BKS= BigDecimal.ZERO();
      
      } else {
        this.MOSONST();
        this.UPVKV();
        this._outputs.VKVSONST = this._internals.VKV;
        this._internals.ZRE4J= ((this._inputs.JRE4.add (this._inputs.SONSTB)).divide (ZAHL100)).setScale (2, BigDecimal.ROUND_DOWN);
        this._internals.ZVBEZJ= ((this._inputs.JVBEZ.add (this._inputs.VBS)).divide (ZAHL100)).setScale (2, BigDecimal.ROUND_DOWN);
        this._internals.VBEZBSO= this._inputs.STERBE;
        this.MRE4SONST();
        this.MLSTJAHR();
        this.UPVKV();
        this._outputs.VKVSONST = this._internals.VKV.subtract(this._outputs.VKVSONST);
        this._internals.LSTSO= this._internals.ST.multiply (ZAHL100);
        /**    lt. PAP muss hier auf ganze EUR aufgerundet werden, 
              allerdings muss der Wert in Cent vorgehalten werden,
              deshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
              wieder die Multiplikation mit 100  */
        this._outputs.STS = this._internals.LSTSO.subtract(this._internals.LSTOSO).multiply(BigDecimal.valueOf(this._inputs.f)).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN).multiply(ZAHL100);
        if (this._outputs.STS.compareTo (BigDecimal.ZERO()) == -1) {
          
            this._outputs.STS= BigDecimal.ZERO();
          
        }
        this._outputs.SOLZS= this._outputs.STS.multiply (BigDecimal.valueOf (5.5)).divide (ZAHL100, 0, BigDecimal.ROUND_DOWN);
        if (this._inputs.R > 0) {
          
            this._outputs.BKS= this._outputs.STS;
          
          } else {
            this._outputs.BKS= BigDecimal.ZERO();
          
        }
      
    }
  }



  /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 und 10 EStG), PAP Seite 28  */
  MVMT() {
    if (this._inputs.VKAPA.compareTo (BigDecimal.ZERO()) == -1) {
      
        this._inputs.VKAPA= BigDecimal.ZERO();
      
    }
    if ((this._inputs.VMT.add (this._inputs.VKAPA)).compareTo (BigDecimal.ZERO()) == 1) {
      
        if (this._internals.LSTSO.compareTo (BigDecimal.ZERO()) == 0) {
          
            this.MOSONST();
            this._internals.LST1= this._internals.LSTOSO;
          
          } else {
            this._internals.LST1= this._internals.LSTSO;
          
        }
        this._internals.VBEZBSO= this._inputs.STERBE.add (this._inputs.VKAPA);
        this._internals.ZRE4J= ((this._inputs.JRE4.add (this._inputs.SONSTB).add (this._inputs.VMT).add (this._inputs.VKAPA)).divide (ZAHL100)).setScale (2, BigDecimal.ROUND_DOWN);
        this._internals.ZVBEZJ= ((this._inputs.JVBEZ.add (this._inputs.VBS).add (this._inputs.VKAPA)).divide (ZAHL100)).setScale (2, BigDecimal.ROUND_DOWN);
        this._internals.KENNVMT = 2;
        this.MRE4SONST();
        this.MLSTJAHR();
        this._internals.LST3= this._internals.ST.multiply (ZAHL100);
        this.MRE4ABZ();
        this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.JRE4ENT.divide(ZAHL100)).subtract(this._inputs.SONSTENT.divide(ZAHL100));
        this._internals.KENNVMT= 1;
        this.MLSTJAHR();
        this._internals.LST2= this._internals.ST.multiply (ZAHL100);
        this._outputs.STV= this._internals.LST2.subtract (this._internals.LST1); 
        this._internals.LST3= this._internals.LST3.subtract (this._internals.LST1);
        if (this._internals.LST3.compareTo (this._outputs.STV) == -1) {
          
            this._outputs.STV= this._internals.LST3;
          
        }
        if (this._outputs.STV.compareTo (BigDecimal.ZERO()) == -1) {
          
            this._outputs.STV= BigDecimal.ZERO();
          
          } else {
            /**   
              lt. PAP muss hier auf ganze EUR abgerundet werden.
               Allerdings muss auch hier der Wert in Cent vorgehalten werden,
              weshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
              wieder die Multiplikation mit 100 erfolgt.
             */
            this._outputs.STV = this._outputs.STV.multiply(BigDecimal.valueOf(this._inputs.f)).divide(ZAHL100, 0, BigDecimal.ROUND_DOWN).multiply(ZAHL100);
          
        }
        this._outputs.SOLZV= ((this._outputs.STV.multiply (BigDecimal.valueOf (5.5))).divide (ZAHL100)).setScale (0, BigDecimal.ROUND_DOWN);
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



  /**  Sonderberechnung ohne sonstige Bezüge this._inputs.für Berechnung bei sonstigen Bezügen oder Vergütung this._inputs.für mehrjährige Tätigkeit, PAP Seite 29  */
  MOSONST() {
    this._internals.ZRE4J= (this._inputs.JRE4.divide (ZAHL100)).setScale (2, BigDecimal.ROUND_DOWN);
    this._internals.ZVBEZJ= (this._inputs.JVBEZ.divide (ZAHL100)).setScale (2, BigDecimal.ROUND_DOWN);
    this._internals.JLFREIB= this._inputs.JFREIB.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
    this._internals.JLHINZU= this._inputs.JHINZU.divide (ZAHL100, 2, BigDecimal.ROUND_DOWN);
    this.MRE4();
    this.MRE4ABZ();
    this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.JRE4ENT.divide(ZAHL100));
    this.MZTABFB();
    this.MLSTJAHR();
    this._internals.LSTOSO= this._internals.ST.multiply (ZAHL100);
  }



  /**  Sonderberechnung mit sonstige Bezüge this._inputs.für Berechnung bei sonstigen Bezügen oder Vergütung this._inputs.für mehrjährige Tätigkeit, PAP Seite 29  */
  MRE4SONST() {
    this.MRE4();
    this._internals.FVB= this._internals.FVBSO;
    this.MRE4ABZ();
    this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.JRE4ENT.divide(ZAHL100)).subtract(this._inputs.SONSTENT.divide(ZAHL100));
    this._internals.FVBZ= this._internals.FVBZSO;
    this.MZTABFB();
  }
  
  


   /**  Tarifliche Einkommensteuer §32a EStG, PAP Seite 30  */
   /**  Neu 2014  */
  UPTAB14() {
    if (this._internals.X.compareTo (BigDecimal.valueOf (8355)) == -1) { /**  Neuer Wert 2014  */
      
        this._internals.ST= BigDecimal.ZERO();
      
      } else {
        if (this._internals.X.compareTo (BigDecimal.valueOf (13470)) == -1) {
          
            this._internals.Y= (this._internals.X.subtract (BigDecimal.valueOf (8354))).divide (BigDecimal.valueOf (10000), 6, BigDecimal.ROUND_DOWN); /**  Neuer Wert 2014  */
            this._internals.RW= this._internals.Y.multiply (BigDecimal.valueOf (974.58)); /**  Neuer Wert 2014  */
            this._internals.RW= this._internals.RW.add (BigDecimal.valueOf (1400));
            this._internals.ST= (this._internals.RW.multiply (this._internals.Y)).setScale (0, BigDecimal.ROUND_DOWN);
          
          } else {
            if (this._internals.X.compareTo (BigDecimal.valueOf (52882)) == -1) {
              
                this._internals.Y= (this._internals.X.subtract (BigDecimal.valueOf (13469))).divide (BigDecimal.valueOf (10000), 6, BigDecimal.ROUND_DOWN);
                this._internals.RW= this._internals.Y.multiply (BigDecimal.valueOf (228.74));
                this._internals.RW= this._internals.RW.add (BigDecimal.valueOf (2397));
                this._internals.RW= this._internals.RW.multiply (this._internals.Y);
                this._internals.ST= (this._internals.RW.add (BigDecimal.valueOf (971))).setScale (0, BigDecimal.ROUND_DOWN); /**  Neuer Wert 2014  */
              
              } else {
              if (this._internals.X.compareTo (BigDecimal.valueOf (250731)) == -1) {
                
                  /**  Neuer Wert 2014  */
                    this._internals.ST= ((this._internals.X.multiply (BigDecimal.valueOf (0.42))).subtract (BigDecimal.valueOf (8239))).setScale (0, BigDecimal.ROUND_DOWN); 
                  
                  } else {
                    /**  Neuer Wert 2014  */
                    this._internals.ST= ((this._internals.X.multiply (BigDecimal.valueOf (0.45))).subtract (BigDecimal.valueOf (15761))).setScale (0, BigDecimal.ROUND_DOWN); 
                  
                }
              
            }
          
        }
      
    }
    this._internals.ST= this._internals.ST.multiply (BigDecimal.valueOf (this._internals.KZTAB));
  }
  



}


  