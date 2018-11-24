"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bigdecimal_1 = require("bigdecimal");
const PAPBaseClass_1 = require("../PAPBaseClass");
;
;
;
/**  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags  */
exports.TAB1 = [bigdecimal_1.BigDecimal.valueOf(0.0), bigdecimal_1.BigDecimal.valueOf(0.4), bigdecimal_1.BigDecimal.valueOf(0.384), bigdecimal_1.BigDecimal.valueOf(0.368), bigdecimal_1.BigDecimal.valueOf(0.352), bigdecimal_1.BigDecimal.valueOf(0.336), bigdecimal_1.BigDecimal.valueOf(0.32), bigdecimal_1.BigDecimal.valueOf(0.304), bigdecimal_1.BigDecimal.valueOf(0.288), bigdecimal_1.BigDecimal.valueOf(0.272), bigdecimal_1.BigDecimal.valueOf(0.256), bigdecimal_1.BigDecimal.valueOf(0.24), bigdecimal_1.BigDecimal.valueOf(0.224), bigdecimal_1.BigDecimal.valueOf(0.208), bigdecimal_1.BigDecimal.valueOf(0.192), bigdecimal_1.BigDecimal.valueOf(0.176), bigdecimal_1.BigDecimal.valueOf(0.16), bigdecimal_1.BigDecimal.valueOf(0.152), bigdecimal_1.BigDecimal.valueOf(0.144), bigdecimal_1.BigDecimal.valueOf(0.136), bigdecimal_1.BigDecimal.valueOf(0.128), bigdecimal_1.BigDecimal.valueOf(0.12), bigdecimal_1.BigDecimal.valueOf(0.112), bigdecimal_1.BigDecimal.valueOf(0.104), bigdecimal_1.BigDecimal.valueOf(0.096), bigdecimal_1.BigDecimal.valueOf(0.088), bigdecimal_1.BigDecimal.valueOf(0.08), bigdecimal_1.BigDecimal.valueOf(0.072), bigdecimal_1.BigDecimal.valueOf(0.064), bigdecimal_1.BigDecimal.valueOf(0.056), bigdecimal_1.BigDecimal.valueOf(0.048), bigdecimal_1.BigDecimal.valueOf(0.04), bigdecimal_1.BigDecimal.valueOf(0.032), bigdecimal_1.BigDecimal.valueOf(0.024), bigdecimal_1.BigDecimal.valueOf(0.016), bigdecimal_1.BigDecimal.valueOf(0.008), bigdecimal_1.BigDecimal.valueOf(0.0)];
/**  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags  */
exports.TAB2 = [bigdecimal_1.BigDecimal.valueOf(0), bigdecimal_1.BigDecimal.valueOf(3000), bigdecimal_1.BigDecimal.valueOf(2880), bigdecimal_1.BigDecimal.valueOf(2760), bigdecimal_1.BigDecimal.valueOf(2640), bigdecimal_1.BigDecimal.valueOf(2520), bigdecimal_1.BigDecimal.valueOf(2400), bigdecimal_1.BigDecimal.valueOf(2280), bigdecimal_1.BigDecimal.valueOf(2160), bigdecimal_1.BigDecimal.valueOf(2040), bigdecimal_1.BigDecimal.valueOf(1920), bigdecimal_1.BigDecimal.valueOf(1800), bigdecimal_1.BigDecimal.valueOf(1680), bigdecimal_1.BigDecimal.valueOf(1560), bigdecimal_1.BigDecimal.valueOf(1440), bigdecimal_1.BigDecimal.valueOf(1320), bigdecimal_1.BigDecimal.valueOf(1200), bigdecimal_1.BigDecimal.valueOf(1140), bigdecimal_1.BigDecimal.valueOf(1080), bigdecimal_1.BigDecimal.valueOf(1020), bigdecimal_1.BigDecimal.valueOf(960), bigdecimal_1.BigDecimal.valueOf(900), bigdecimal_1.BigDecimal.valueOf(840), bigdecimal_1.BigDecimal.valueOf(780), bigdecimal_1.BigDecimal.valueOf(720), bigdecimal_1.BigDecimal.valueOf(660), bigdecimal_1.BigDecimal.valueOf(600), bigdecimal_1.BigDecimal.valueOf(540), bigdecimal_1.BigDecimal.valueOf(480), bigdecimal_1.BigDecimal.valueOf(420), bigdecimal_1.BigDecimal.valueOf(360), bigdecimal_1.BigDecimal.valueOf(300), bigdecimal_1.BigDecimal.valueOf(240), bigdecimal_1.BigDecimal.valueOf(180), bigdecimal_1.BigDecimal.valueOf(120), bigdecimal_1.BigDecimal.valueOf(60), bigdecimal_1.BigDecimal.valueOf(0)];
/**  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag  */
exports.TAB3 = [bigdecimal_1.BigDecimal.valueOf(0), bigdecimal_1.BigDecimal.valueOf(900), bigdecimal_1.BigDecimal.valueOf(864), bigdecimal_1.BigDecimal.valueOf(828), bigdecimal_1.BigDecimal.valueOf(792), bigdecimal_1.BigDecimal.valueOf(756), bigdecimal_1.BigDecimal.valueOf(720), bigdecimal_1.BigDecimal.valueOf(684), bigdecimal_1.BigDecimal.valueOf(648), bigdecimal_1.BigDecimal.valueOf(612), bigdecimal_1.BigDecimal.valueOf(576), bigdecimal_1.BigDecimal.valueOf(540), bigdecimal_1.BigDecimal.valueOf(504), bigdecimal_1.BigDecimal.valueOf(468), bigdecimal_1.BigDecimal.valueOf(432), bigdecimal_1.BigDecimal.valueOf(396), bigdecimal_1.BigDecimal.valueOf(360), bigdecimal_1.BigDecimal.valueOf(342), bigdecimal_1.BigDecimal.valueOf(324), bigdecimal_1.BigDecimal.valueOf(306), bigdecimal_1.BigDecimal.valueOf(288), bigdecimal_1.BigDecimal.valueOf(270), bigdecimal_1.BigDecimal.valueOf(252), bigdecimal_1.BigDecimal.valueOf(234), bigdecimal_1.BigDecimal.valueOf(216), bigdecimal_1.BigDecimal.valueOf(198), bigdecimal_1.BigDecimal.valueOf(180), bigdecimal_1.BigDecimal.valueOf(162), bigdecimal_1.BigDecimal.valueOf(144), bigdecimal_1.BigDecimal.valueOf(126), bigdecimal_1.BigDecimal.valueOf(108), bigdecimal_1.BigDecimal.valueOf(90), bigdecimal_1.BigDecimal.valueOf(72), bigdecimal_1.BigDecimal.valueOf(54), bigdecimal_1.BigDecimal.valueOf(36), bigdecimal_1.BigDecimal.valueOf(18), bigdecimal_1.BigDecimal.valueOf(0)];
/**  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags  */
exports.TAB4 = [bigdecimal_1.BigDecimal.valueOf(0.0), bigdecimal_1.BigDecimal.valueOf(0.4), bigdecimal_1.BigDecimal.valueOf(0.384), bigdecimal_1.BigDecimal.valueOf(0.368), bigdecimal_1.BigDecimal.valueOf(0.352), bigdecimal_1.BigDecimal.valueOf(0.336), bigdecimal_1.BigDecimal.valueOf(0.32), bigdecimal_1.BigDecimal.valueOf(0.304), bigdecimal_1.BigDecimal.valueOf(0.288), bigdecimal_1.BigDecimal.valueOf(0.272), bigdecimal_1.BigDecimal.valueOf(0.256), bigdecimal_1.BigDecimal.valueOf(0.24), bigdecimal_1.BigDecimal.valueOf(0.224), bigdecimal_1.BigDecimal.valueOf(0.208), bigdecimal_1.BigDecimal.valueOf(0.192), bigdecimal_1.BigDecimal.valueOf(0.176), bigdecimal_1.BigDecimal.valueOf(0.16), bigdecimal_1.BigDecimal.valueOf(0.152), bigdecimal_1.BigDecimal.valueOf(0.144), bigdecimal_1.BigDecimal.valueOf(0.136), bigdecimal_1.BigDecimal.valueOf(0.128), bigdecimal_1.BigDecimal.valueOf(0.12), bigdecimal_1.BigDecimal.valueOf(0.112), bigdecimal_1.BigDecimal.valueOf(0.104), bigdecimal_1.BigDecimal.valueOf(0.096), bigdecimal_1.BigDecimal.valueOf(0.088), bigdecimal_1.BigDecimal.valueOf(0.08), bigdecimal_1.BigDecimal.valueOf(0.072), bigdecimal_1.BigDecimal.valueOf(0.064), bigdecimal_1.BigDecimal.valueOf(0.056), bigdecimal_1.BigDecimal.valueOf(0.048), bigdecimal_1.BigDecimal.valueOf(0.04), bigdecimal_1.BigDecimal.valueOf(0.032), bigdecimal_1.BigDecimal.valueOf(0.024), bigdecimal_1.BigDecimal.valueOf(0.016), bigdecimal_1.BigDecimal.valueOf(0.008), bigdecimal_1.BigDecimal.valueOf(0.0)];
/**  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags  */
exports.TAB5 = [bigdecimal_1.BigDecimal.valueOf(0), bigdecimal_1.BigDecimal.valueOf(1900), bigdecimal_1.BigDecimal.valueOf(1824), bigdecimal_1.BigDecimal.valueOf(1748), bigdecimal_1.BigDecimal.valueOf(1672), bigdecimal_1.BigDecimal.valueOf(1596), bigdecimal_1.BigDecimal.valueOf(1520), bigdecimal_1.BigDecimal.valueOf(1444), bigdecimal_1.BigDecimal.valueOf(1368), bigdecimal_1.BigDecimal.valueOf(1292), bigdecimal_1.BigDecimal.valueOf(1216), bigdecimal_1.BigDecimal.valueOf(1140), bigdecimal_1.BigDecimal.valueOf(1064), bigdecimal_1.BigDecimal.valueOf(988), bigdecimal_1.BigDecimal.valueOf(912), bigdecimal_1.BigDecimal.valueOf(836), bigdecimal_1.BigDecimal.valueOf(760), bigdecimal_1.BigDecimal.valueOf(722), bigdecimal_1.BigDecimal.valueOf(684), bigdecimal_1.BigDecimal.valueOf(646), bigdecimal_1.BigDecimal.valueOf(608), bigdecimal_1.BigDecimal.valueOf(570), bigdecimal_1.BigDecimal.valueOf(532), bigdecimal_1.BigDecimal.valueOf(494), bigdecimal_1.BigDecimal.valueOf(456), bigdecimal_1.BigDecimal.valueOf(418), bigdecimal_1.BigDecimal.valueOf(380), bigdecimal_1.BigDecimal.valueOf(342), bigdecimal_1.BigDecimal.valueOf(304), bigdecimal_1.BigDecimal.valueOf(266), bigdecimal_1.BigDecimal.valueOf(228), bigdecimal_1.BigDecimal.valueOf(190), bigdecimal_1.BigDecimal.valueOf(152), bigdecimal_1.BigDecimal.valueOf(114), bigdecimal_1.BigDecimal.valueOf(76), bigdecimal_1.BigDecimal.valueOf(38), bigdecimal_1.BigDecimal.valueOf(0)];
/**  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte  */
exports.ZAHL0 = bigdecimal_1.BigDecimal.ZERO();
exports.ZAHL1 = bigdecimal_1.BigDecimal.ONE();
exports.ZAHL2 = new bigdecimal_1.BigDecimal(2);
exports.ZAHL3 = new bigdecimal_1.BigDecimal(3);
exports.ZAHL4 = new bigdecimal_1.BigDecimal(4);
exports.ZAHL5 = new bigdecimal_1.BigDecimal(5);
exports.ZAHL6 = new bigdecimal_1.BigDecimal(6);
exports.ZAHL7 = new bigdecimal_1.BigDecimal(7);
exports.ZAHL8 = new bigdecimal_1.BigDecimal(8);
exports.ZAHL9 = new bigdecimal_1.BigDecimal(9);
exports.ZAHL10 = bigdecimal_1.BigDecimal.TEN();
exports.ZAHL11 = new bigdecimal_1.BigDecimal(11);
exports.ZAHL12 = new bigdecimal_1.BigDecimal(12);
exports.ZAHL100 = new bigdecimal_1.BigDecimal(100);
exports.ZAHL360 = new bigdecimal_1.BigDecimal(360);
exports.ZAHL500 = new bigdecimal_1.BigDecimal(500);
exports.ZAHL700 = new bigdecimal_1.BigDecimal(700);
class Lohnsteuer2011Big extends PAPBaseClass_1.PAPBaseClass {
    constructor() {
        super(...arguments);
        this.name = 'Lohnsteuer2011Big';
        this._inputs = {
            af: 1.0,
            AJAHR: 0,
            ALTER1: 0,
            ENTSCH: new bigdecimal_1.BigDecimal(0),
            f: 1.0,
            JFREIB: new bigdecimal_1.BigDecimal(0),
            JHINZU: new bigdecimal_1.BigDecimal(0),
            JRE4: new bigdecimal_1.BigDecimal(0),
            JVBEZ: new bigdecimal_1.BigDecimal(0),
            KRV: 0,
            LZZ: 0,
            LZZFREIB: new bigdecimal_1.BigDecimal(0),
            LZZHINZU: new bigdecimal_1.BigDecimal(0),
            PKPV: new bigdecimal_1.BigDecimal(0),
            PKV: 0,
            PVS: 0,
            PVZ: 0,
            R: 0,
            RE4: new bigdecimal_1.BigDecimal(0),
            SONSTB: new bigdecimal_1.BigDecimal(0),
            STERBE: new bigdecimal_1.BigDecimal(0),
            STKL: 0,
            VBEZ: new bigdecimal_1.BigDecimal(0),
            VBEZM: new bigdecimal_1.BigDecimal(0),
            VBEZS: new bigdecimal_1.BigDecimal(0),
            VBS: new bigdecimal_1.BigDecimal(0),
            VJAHR: 0,
            VKAPA: new bigdecimal_1.BigDecimal(0),
            VMT: new bigdecimal_1.BigDecimal(0),
            ZKF: new bigdecimal_1.BigDecimal(0),
            ZMVB: 0,
            JRE4ENT: bigdecimal_1.BigDecimal.ZERO(),
            SONSTENT: bigdecimal_1.BigDecimal.ZERO(),
        };
        this._outputs = {
            BK: new bigdecimal_1.BigDecimal(0),
            BKS: new bigdecimal_1.BigDecimal(0),
            BKV: new bigdecimal_1.BigDecimal(0),
            LSTLZZ: new bigdecimal_1.BigDecimal(0),
            SOLZLZZ: new bigdecimal_1.BigDecimal(0),
            SOLZS: new bigdecimal_1.BigDecimal(0),
            SOLZV: new bigdecimal_1.BigDecimal(0),
            STS: new bigdecimal_1.BigDecimal(0),
            STV: new bigdecimal_1.BigDecimal(0),
        };
        this._internals = {
            RENTBEMESSUNGSGR_OST_2011: new bigdecimal_1.BigDecimal(57600),
            RENTBEMESSUNGSGR_WEST: new bigdecimal_1.BigDecimal(66000),
            zveEkSt: new bigdecimal_1.BigDecimal(0),
            zveGemeinsam: new bigdecimal_1.BigDecimal(0),
            ALTE: new bigdecimal_1.BigDecimal(0),
            ANP: new bigdecimal_1.BigDecimal(0),
            ANTEIL1: new bigdecimal_1.BigDecimal(0),
            ANTEIL2: new bigdecimal_1.BigDecimal(0),
            BMG: new bigdecimal_1.BigDecimal(0),
            DIFF: new bigdecimal_1.BigDecimal(0),
            EFA: new bigdecimal_1.BigDecimal(0),
            FVB: new bigdecimal_1.BigDecimal(0),
            FVBSO: new bigdecimal_1.BigDecimal(0),
            FVBZ: new bigdecimal_1.BigDecimal(0),
            FVBZSO: new bigdecimal_1.BigDecimal(0),
            HBALTE: new bigdecimal_1.BigDecimal(0),
            HFVB: new bigdecimal_1.BigDecimal(0),
            HFVBZ: new bigdecimal_1.BigDecimal(0),
            HFVBZSO: new bigdecimal_1.BigDecimal(0),
            J: 0,
            JBMG: new bigdecimal_1.BigDecimal(0),
            JLFREIB: new bigdecimal_1.BigDecimal(0),
            JLHINZU: new bigdecimal_1.BigDecimal(0),
            JW: new bigdecimal_1.BigDecimal(0),
            K: 0,
            KENNVMT: 0,
            KFB: new bigdecimal_1.BigDecimal(0),
            KVSATZAG: new bigdecimal_1.BigDecimal(0),
            KVSATZAN: new bigdecimal_1.BigDecimal(0),
            KZTAB: 0,
            LSTJAHR: new bigdecimal_1.BigDecimal(0),
            LST1: new bigdecimal_1.BigDecimal(0),
            LST2: new bigdecimal_1.BigDecimal(0),
            LST3: new bigdecimal_1.BigDecimal(0),
            LSTOSO: new bigdecimal_1.BigDecimal(0),
            LSTSO: new bigdecimal_1.BigDecimal(0),
            MIST: new bigdecimal_1.BigDecimal(0),
            PVSATZAG: new bigdecimal_1.BigDecimal(0),
            PVSATZAN: new bigdecimal_1.BigDecimal(0),
            RW: new bigdecimal_1.BigDecimal(0),
            SAP: new bigdecimal_1.BigDecimal(0),
            SOLZFREI: new bigdecimal_1.BigDecimal(0),
            SOLZJ: new bigdecimal_1.BigDecimal(0),
            SOLZMIN: new bigdecimal_1.BigDecimal(0),
            ST: new bigdecimal_1.BigDecimal(0),
            ST1: new bigdecimal_1.BigDecimal(0),
            ST2: new bigdecimal_1.BigDecimal(0),
            STOVMT: new bigdecimal_1.BigDecimal(0),
            VBEZB: new bigdecimal_1.BigDecimal(0),
            VBEZBSO: new bigdecimal_1.BigDecimal(0),
            VHB: new bigdecimal_1.BigDecimal(0),
            VSP: new bigdecimal_1.BigDecimal(0),
            VSPN: new bigdecimal_1.BigDecimal(0),
            VSP1: new bigdecimal_1.BigDecimal(0),
            VSP2: new bigdecimal_1.BigDecimal(0),
            VSPKURZ: new bigdecimal_1.BigDecimal(0),
            VSPMAX1: new bigdecimal_1.BigDecimal(0),
            VSPMAX2: new bigdecimal_1.BigDecimal(0),
            VSPO: new bigdecimal_1.BigDecimal(0),
            VSPREST: new bigdecimal_1.BigDecimal(0),
            VSPVOR: new bigdecimal_1.BigDecimal(0),
            X: new bigdecimal_1.BigDecimal(0),
            Y: new bigdecimal_1.BigDecimal(0),
            ZRE4: new bigdecimal_1.BigDecimal(0),
            ZRE4J: new bigdecimal_1.BigDecimal(0),
            ZRE4VP: new bigdecimal_1.BigDecimal(0),
            ZTABFB: new bigdecimal_1.BigDecimal(0),
            ZVBEZ: new bigdecimal_1.BigDecimal(0),
            ZVBEZJ: new bigdecimal_1.BigDecimal(0),
            ZVE: new bigdecimal_1.BigDecimal(0),
            ZX: new bigdecimal_1.BigDecimal(0),
            ZZX: new bigdecimal_1.BigDecimal(0),
            HOCH: new bigdecimal_1.BigDecimal(0),
            VERGL: new bigdecimal_1.BigDecimal(0),
        };
    }
    /**  PROGRAMMABLAUFPLAN 2010, PAP Seite 10  */
    main() {
        this.MRE4JL();
        this._internals.VBEZBSO = bigdecimal_1.BigDecimal.ZERO();
        this._internals.KENNVMT = 0;
        this.MRE4();
        this.MRE4ABZ();
        this.MZTABFB();
        this.MLSTJAHR();
        this._internals.LSTJAHR = this._internals.ST.multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.f)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        this._internals.JW = this._internals.LSTJAHR.multiply(exports.ZAHL100);
        this.UPANTEIL();
        this._outputs.LSTLZZ = this._internals.ANTEIL1;
        if (this._inputs.ZKF.compareTo(bigdecimal_1.BigDecimal.ZERO()) == 1) {
            this._internals.ZTABFB = (this._internals.ZTABFB.add(this._internals.KFB)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this.MRE4ABZ();
            this.MLSTJAHR();
            this._internals.JBMG = this._internals.ST.multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.f)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        else {
            this._internals.JBMG = this._internals.LSTJAHR;
        }
        this.MSOLZ();
        this.MSONST();
        this.MVMT();
    }
    /**  Festlegung Arbeitnehmer-Pauschbetrag this._inputs.für aktiven Lohn mit möglicher Begrenzung nach § 9 EStG  */
    UPANP12() {
        if (this._inputs.LZZ == 1) {
            if ((this._internals.ZRE4.subtract(this._internals.ZVBEZ)).compareTo(bigdecimal_1.BigDecimal.valueOf(1000)) == -1) {
                this._internals.ANP = ((this._internals.ANP.add(this._internals.ZRE4)).subtract(this._internals.ZVBEZ)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            }
            else {
                this._internals.ANP = this._internals.ANP.add(bigdecimal_1.BigDecimal.valueOf(1000));
            }
        }
        else {
            if ((this._internals.ZRE4.subtract(this._internals.ZVBEZ)).compareTo(bigdecimal_1.BigDecimal.valueOf(1880)) == -1) {
                this._internals.ANP = ((this._internals.ANP.add(this._internals.ZRE4)).subtract(this._internals.ZVBEZ)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
                ;
            }
            else {
                this._internals.ANP = this._internals.ANP.add(bigdecimal_1.BigDecimal.valueOf(1880));
            }
        }
    }
    /**  Ermittlung des Jahresarbeitslohns nach § 39 b Abs. 2 Satz 2 EStG, PAP Seite 11  */
    MRE4JL() {
        if (this._inputs.LZZ == 1) {
            this._internals.ZRE4J = this._inputs.RE4.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.ZVBEZJ = this._inputs.VBEZ.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.JLFREIB = this._inputs.LZZFREIB.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.JLHINZU = this._inputs.LZZHINZU.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        else {
            if (this._inputs.LZZ == 2) {
                this._internals.ZRE4J = (this._inputs.RE4.multiply(exports.ZAHL12)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.ZVBEZJ = (this._inputs.VBEZ.multiply(exports.ZAHL12)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.JLFREIB = (this._inputs.LZZFREIB.multiply(exports.ZAHL12)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.JLHINZU = (this._inputs.LZZHINZU.multiply(exports.ZAHL12)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                if (this._inputs.LZZ == 3) {
                    this._internals.ZRE4J = (this._inputs.RE4.multiply(exports.ZAHL360)).divide(exports.ZAHL700, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ZVBEZJ = (this._inputs.VBEZ.multiply(exports.ZAHL360)).divide(exports.ZAHL700, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.JLFREIB = (this._inputs.LZZFREIB.multiply(exports.ZAHL360)).divide(exports.ZAHL700, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.JLHINZU = (this._inputs.LZZHINZU.multiply(exports.ZAHL360)).divide(exports.ZAHL700, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    this._internals.ZRE4J = (this._inputs.RE4.multiply(exports.ZAHL360)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ZVBEZJ = (this._inputs.VBEZ.multiply(exports.ZAHL360)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.JLFREIB = (this._inputs.LZZFREIB.multiply(exports.ZAHL360)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.JLHINZU = (this._inputs.LZZHINZU.multiply(exports.ZAHL360)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
            }
        }
        if (this._inputs.af == 0) {
            this._inputs.f = 1;
        }
    }
    /**  Freibeträge this._inputs.für Versorgungsbezüge, Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 12  */
    MRE4() {
        if (this._internals.ZVBEZJ.compareTo(bigdecimal_1.BigDecimal.ZERO()) == 0) {
            this._internals.FVBZ = bigdecimal_1.BigDecimal.ZERO();
            this._internals.FVB = bigdecimal_1.BigDecimal.ZERO();
            this._internals.FVBZSO = bigdecimal_1.BigDecimal.ZERO();
            this._internals.FVBSO = bigdecimal_1.BigDecimal.ZERO();
        }
        else {
            if (this._inputs.VJAHR < 2006) {
                this._internals.J = 1;
            }
            else {
                if (this._inputs.VJAHR < 2040) {
                    this._internals.J = this._inputs.VJAHR - 2004;
                }
                else {
                    this._internals.J = 36;
                }
            }
            if (this._inputs.LZZ == 1) {
                this._internals.VBEZB = (this._inputs.VBEZM.multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.ZMVB))).add(this._inputs.VBEZS);
                this._internals.HFVB = exports.TAB2[this._internals.J].divide(exports.ZAHL12).multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.ZMVB));
                this._internals.FVBZ = exports.TAB3[this._internals.J].divide(exports.ZAHL12).multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.ZMVB)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            }
            else {
                this._internals.VBEZB = ((this._inputs.VBEZM.multiply(exports.ZAHL12)).add(this._inputs.VBEZS)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.HFVB = exports.TAB2[this._internals.J];
                this._internals.FVBZ = exports.TAB3[this._internals.J];
            }
            this._internals.FVB = ((this._internals.VBEZB.multiply(exports.TAB1[this._internals.J]))).divide(exports.ZAHL100).setScale(2, bigdecimal_1.BigDecimal.ROUND_UP);
            if (this._internals.FVB.compareTo(this._internals.HFVB) == 1) {
                this._internals.FVB = this._internals.HFVB;
            }
            this._internals.FVBSO = (this._internals.FVB.add((this._internals.VBEZBSO.multiply(exports.TAB1[this._internals.J])).divide(exports.ZAHL100))).setScale(2, bigdecimal_1.BigDecimal.ROUND_UP);
            if (this._internals.FVBSO.compareTo(exports.TAB2[this._internals.J]) == 1) {
                this._internals.FVBSO = exports.TAB2[this._internals.J];
            }
            this._internals.HFVBZSO = (((this._internals.VBEZB.add(this._internals.VBEZBSO)).divide(exports.ZAHL100)).subtract(this._internals.FVBSO)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.FVBZSO = (this._internals.FVBZ.add((this._internals.VBEZBSO).divide(exports.ZAHL100))).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            if (this._internals.FVBZSO.compareTo(this._internals.HFVBZSO) == 1) {
                this._internals.FVBZSO = this._internals.HFVBZSO.setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            }
            if (this._internals.FVBZSO.compareTo(exports.TAB3[this._internals.J]) == 1) {
                this._internals.FVBZSO = exports.TAB3[this._internals.J];
            }
            this._internals.HFVBZ = ((this._internals.VBEZB.divide(exports.ZAHL100)).subtract(this._internals.FVB)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            if (this._internals.FVBZ.compareTo(this._internals.HFVBZ) == 1) {
                this._internals.FVBZ = this._internals.HFVBZ.setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            }
        }
        this.MRE4ALTE();
    }
    /**  Altersentlastungsbetrag (§ 39b Abs. 2 Satz 3 EStG), PAP Seite 13  */
    MRE4ALTE() {
        if (this._inputs.ALTER1 == 0) {
            this._internals.ALTE = bigdecimal_1.BigDecimal.ZERO();
        }
        else {
            if (this._inputs.AJAHR < 2006) {
                this._internals.K = 1;
            }
            else {
                if (this._inputs.AJAHR < 2040) {
                    this._internals.K = this._inputs.AJAHR - 2004;
                }
                else {
                    this._internals.K = 36;
                }
            }
            this._internals.BMG = this._internals.ZRE4J.subtract(this._internals.ZVBEZJ);
            /**  Lt. PAP muss hier auf ganze EUR gerundet werden  */
            this._internals.ALTE = (this._internals.BMG.multiply(exports.TAB4[this._internals.K])).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            this._internals.HBALTE = exports.TAB5[this._internals.K];
            if (this._internals.ALTE.compareTo(this._internals.HBALTE) == 1) {
                this._internals.ALTE = this._internals.HBALTE;
            }
        }
    }
    /**  Ermittlung des Jahresarbeitslohns nach Abzug der Freibeträge nach § 39 b Abs. 2 Satz 3 und 4 EStG, PAP Seite 15  */
    MRE4ABZ() {
        this._internals.ZRE4 = (this._internals.ZRE4J.subtract(this._internals.FVB).subtract(this._internals.ALTE).subtract(this._internals.JLFREIB).add(this._internals.JLHINZU)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        if (this._internals.ZRE4.compareTo(bigdecimal_1.BigDecimal.ZERO()) == -1) {
            this._internals.ZRE4 = bigdecimal_1.BigDecimal.ZERO();
        }
        this._internals.ZRE4VP = this._internals.ZRE4J;
        if (this._internals.KENNVMT == 2) {
            this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.ENTSCH.divide(exports.ZAHL100)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        this._internals.ZVBEZ = this._internals.ZVBEZJ.subtract(this._internals.FVB).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        if (this._internals.ZVBEZ.compareTo(bigdecimal_1.BigDecimal.ZERO()) == -1) {
            this._internals.ZVBEZ = bigdecimal_1.BigDecimal.ZERO();
        }
    }
    /**  Ermittlung der festen Tabellenfreibeträge (ohne Vorsorgepauschale), PAP Seite 16  */
    MZTABFB() {
        this._internals.ANP = bigdecimal_1.BigDecimal.ZERO();
        if (this._internals.ZVBEZ.compareTo(bigdecimal_1.BigDecimal.ZERO()) >= 0 && this._internals.ZVBEZ.compareTo(this._internals.FVBZ) == -1) {
            this._internals.FVBZ = bigdecimal_1.BigDecimal.valueOf(this._internals.ZVBEZ.longValue());
        }
        if (this._inputs.STKL < 6) {
            if (this._internals.ZVBEZ.compareTo(bigdecimal_1.BigDecimal.ZERO()) == 1) {
                if ((this._internals.ZVBEZ.subtract(this._internals.FVBZ)).compareTo(bigdecimal_1.BigDecimal.valueOf(102)) == -1) {
                    this._internals.ANP = (this._internals.ZVBEZ.subtract(this._internals.FVBZ)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
                }
                else {
                    this._internals.ANP = bigdecimal_1.BigDecimal.valueOf(102);
                }
            }
        }
        else {
            this._internals.FVBZ = bigdecimal_1.BigDecimal.valueOf(0);
            this._internals.FVBZSO = bigdecimal_1.BigDecimal.valueOf(0);
        }
        if (this._inputs.STKL < 6) {
            if (this._internals.ZRE4.compareTo(this._internals.ZVBEZ) == 1) {
                this.UPANP12();
            }
        }
        this._internals.KZTAB = 1;
        if (this._inputs.STKL == 1) {
            this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
            this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(7008))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        else {
            if (this._inputs.STKL == 2) {
                this._internals.EFA = bigdecimal_1.BigDecimal.valueOf(1308);
                this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
                this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(7008))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                if (this._inputs.STKL == 3) {
                    this._internals.KZTAB = 2;
                    this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
                    this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(7008))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    if (this._inputs.STKL == 4) {
                        this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
                        this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(3504))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    }
                    else {
                        if (this._inputs.STKL == 5) {
                            this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
                            this._internals.KFB = bigdecimal_1.BigDecimal.ZERO();
                        }
                        else {
                            this._internals.KFB = bigdecimal_1.BigDecimal.ZERO();
                        }
                    }
                }
            }
        }
        this._internals.ZTABFB = (this._internals.EFA.add(this._internals.ANP).add(this._internals.SAP).add(this._internals.FVBZ)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
    }
    /**  Ermittlung Jahreslohnsteuer, PAP Seite 17  */
    MLSTJAHR() {
        this.UPEVP();
        if (this._internals.KENNVMT != 1) {
            this._internals.ZVE = (this._internals.ZRE4.subtract(this._internals.ZTABFB).subtract(this._internals.VSP)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this.UPMLST();
        }
        else {
            this._internals.ZVE = (this._internals.ZRE4.subtract(this._internals.ZTABFB).subtract(this._internals.VSP).subtract((this._inputs.VMT).divide(exports.ZAHL100)).subtract((this._inputs.VKAPA).divide(exports.ZAHL100))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            if (this._internals.ZVE.compareTo(bigdecimal_1.BigDecimal.ZERO()) == -1) {
                this._internals.ZVE = this._internals.ZVE.add(this._inputs.VMT.divide(exports.ZAHL100)).add(this._inputs.VKAPA.divide(exports.ZAHL100)).divide(exports.ZAHL5).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this.UPMLST();
                this._internals.ST = (this._internals.ST.multiply(exports.ZAHL5)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                this.UPMLST();
                this._internals.STOVMT = this._internals.ST;
                this._internals.ZVE = (this._internals.ZVE.add(((this._inputs.VMT.add(this._inputs.VKAPA)).divide(exports.ZAHL500)))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this.UPMLST();
                this._internals.ST = (((this._internals.ST.subtract(this._internals.STOVMT)).multiply(exports.ZAHL5)).add(this._internals.STOVMT)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
        }
    }
    /**  PAP Seite 18 Ermittlung der Jahreslohnsteuer aus dem Einkommensteuertarif  */
    UPMLST() {
        if (this._internals.ZVE.compareTo(exports.ZAHL1) == -1) {
            this._internals.ZVE = bigdecimal_1.BigDecimal.ZERO();
            this._internals.X = bigdecimal_1.BigDecimal.ZERO();
        }
        else {
            this._internals.X = (this._internals.ZVE.divide(bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        if (this._inputs.STKL < 5) {
            this.UPTAB10();
        }
        else {
            this.MST5_6();
        }
    }
    /**    Vorsorgepauschale (§ 39b Abs. 2 Satz 5 Nr 3 EStG) nach dem Bürgerentlastungsgesetz Krankenversicherung
          Achtung: Es wird davon ausgegangen, dass
            a) Die Rentenversicherungsbemessungsgrenze sich 2010 this._inputs.für die alten Bundesländer auf 66.000 Euro erhöht
               und this._inputs.für die neuen Beundesländer auf 55.800 festgelegt wird sowie
               
            b) der Beitragssatz zur Rentenversicherung gegenüber 2009 unverändert bleibt.
          
          PAP Seite 19   */
    UPEVP() {
        if (this._inputs.KRV > 1) {
            this._internals.VSP1 = bigdecimal_1.BigDecimal.ZERO();
        }
        else {
            if (this._inputs.KRV == 0) {
                if (this._internals.ZRE4VP.compareTo(bigdecimal_1.BigDecimal.valueOf(66000)) == 1) {
                    this._internals.ZRE4VP = bigdecimal_1.BigDecimal.valueOf(66000);
                }
            }
            else {
                if (this._internals.ZRE4VP.compareTo(this._internals.RENTBEMESSUNGSGR_OST_2011) == 1) {
                    this._internals.ZRE4VP = this._internals.RENTBEMESSUNGSGR_OST_2011;
                }
            }
            this._internals.VSP1 = (this._internals.ZRE4VP.multiply(bigdecimal_1.BigDecimal.valueOf(0.44))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.VSP1 = (this._internals.VSP1.multiply(bigdecimal_1.BigDecimal.valueOf(0.0995))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        this._internals.VSP2 = (this._internals.ZRE4VP.multiply(bigdecimal_1.BigDecimal.valueOf(0.12))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        if (this._inputs.STKL == 3) {
            this._internals.VHB = bigdecimal_1.BigDecimal.valueOf(3000);
        }
        else {
            this._internals.VHB = bigdecimal_1.BigDecimal.valueOf(1900);
        }
        if (this._internals.VSP2.compareTo(this._internals.VHB) == 1) {
            this._internals.VSP2 = this._internals.VHB;
        }
        this._internals.VSPN = (this._internals.VSP1.add(this._internals.VSP2)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
        this.MVSP();
        if (this._internals.VSPN.compareTo(this._internals.VSP) == 1) {
            this._internals.VSP = this._internals.VSPN.setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
    }
    /**  Vorsorgepauschale (§39b Abs. 2 Satz 5 Nr 3 EStG) Vergleichsberechnung fuer Guenstigerpruefung, PAP Seite 20  */
    MVSP() {
        if (this._internals.ZRE4VP.compareTo(bigdecimal_1.BigDecimal.valueOf(44550)) == 1) {
            this._internals.ZRE4VP = bigdecimal_1.BigDecimal.valueOf(44550);
        }
        if (this._inputs.PKV > 0) {
            if (this._inputs.STKL == 6) {
                this._internals.VSP = bigdecimal_1.BigDecimal.ZERO();
            }
            else {
                this._internals.VSP = this._inputs.PKPV.multiply(exports.ZAHL12).divide(exports.ZAHL100);
                if (this._inputs.PKV == 2) {
                    this._internals.KVSATZAG = bigdecimal_1.BigDecimal.valueOf(0.07).setScale(5);
                    if (this._inputs.PVS == 1) {
                        this._internals.PVSATZAG = bigdecimal_1.BigDecimal.valueOf(0.00475).setScale(5);
                    }
                    else {
                        this._internals.PVSATZAG = bigdecimal_1.BigDecimal.valueOf(0.00975).setScale(5);
                    }
                    this._internals.VSP = this._internals.VSP.subtract(this._internals.ZRE4VP.multiply(this._internals.KVSATZAG.add(this._internals.PVSATZAG))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
            }
        }
        else {
            this._internals.KVSATZAN = bigdecimal_1.BigDecimal.valueOf(0.079).setScale(5);
            if (this._inputs.PVS == 1) {
                this._internals.PVSATZAN = bigdecimal_1.BigDecimal.valueOf(0.01475).setScale(5);
            }
            else {
                this._internals.PVSATZAN = bigdecimal_1.BigDecimal.valueOf(0.00975).setScale(5);
            }
            if (this._inputs.PVZ == 1) {
                this._internals.PVSATZAN = this._internals.PVSATZAN.add(bigdecimal_1.BigDecimal.valueOf(0.0025));
            }
            this._internals.VSP = this._internals.ZRE4VP.multiply(this._internals.KVSATZAN.add(this._internals.PVSATZAN)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        this._internals.VSP = this._internals.VSP.add(this._internals.VSP1).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
    }
    UMVSP() {
        this._internals.VSPVOR = (this._internals.VSPVOR.subtract(this._internals.ZRE4VP.multiply(bigdecimal_1.BigDecimal.valueOf(0.16)))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        if (this._internals.VSPVOR.compareTo(bigdecimal_1.BigDecimal.ZERO()) == -1) {
            this._internals.VSPVOR = bigdecimal_1.BigDecimal.ZERO();
        }
        if (this._internals.VSPO.compareTo(this._internals.VSPVOR) == 1) {
            this._internals.VSP = this._internals.VSPVOR;
            this._internals.VSPREST = this._internals.VSPO.subtract(this._internals.VSPVOR);
            if (this._internals.VSPREST.compareTo(this._internals.VSPMAX1) == 1) {
                this._internals.VSP = this._internals.VSP.add(this._internals.VSPMAX1);
                this._internals.VSPREST = (this._internals.VSPREST.subtract(this._internals.VSPMAX1)).divide(exports.ZAHL2, 2, bigdecimal_1.BigDecimal.ROUND_UP);
                if (this._internals.VSPREST.compareTo(this._internals.VSPMAX2) == 1) {
                    this._internals.VSP = (this._internals.VSP.add(this._internals.VSPMAX2)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    this._internals.VSP = (this._internals.VSP.add(this._internals.VSPREST)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
            }
            else {
                this._internals.VSP = (this._internals.VSP.add(this._internals.VSPREST)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
        }
        else {
            this._internals.VSP = this._internals.VSPO.setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
    }
    /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 21  */
    MST5_6() {
        this._internals.ZZX = this._internals.X;
        if (this._internals.ZZX.compareTo(bigdecimal_1.BigDecimal.valueOf(26441)) == 1) {
            this._internals.ZX = bigdecimal_1.BigDecimal.valueOf(26441);
            this.UP5_6();
            if (this._internals.ZZX.compareTo(bigdecimal_1.BigDecimal.valueOf(200584)) == 1) {
                this._internals.ST = (this._internals.ST.add((bigdecimal_1.BigDecimal.valueOf(200584).subtract(bigdecimal_1.BigDecimal.valueOf(26441))).multiply(bigdecimal_1.BigDecimal.valueOf(0.42)))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.ST = (this._internals.ST.add((this._internals.ZZX.subtract(bigdecimal_1.BigDecimal.valueOf(200584))).multiply(bigdecimal_1.BigDecimal.valueOf(0.45)))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                this._internals.ST = (this._internals.ST.add((this._internals.ZZX.subtract(bigdecimal_1.BigDecimal.valueOf(26441))).multiply(bigdecimal_1.BigDecimal.valueOf(0.42)))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
        }
        else {
            this._internals.ZX = this._internals.ZZX;
            this.UP5_6();
            if (this._internals.ZZX.compareTo(bigdecimal_1.BigDecimal.valueOf(9429)) == 1) {
                this._internals.VERGL = this._internals.ST;
                this._internals.ZX = bigdecimal_1.BigDecimal.valueOf(9429);
                this.UP5_6();
                this._internals.HOCH = (this._internals.ST.add((this._internals.ZZX.subtract(bigdecimal_1.BigDecimal.valueOf(9429))).multiply(bigdecimal_1.BigDecimal.valueOf(0.42)))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                if (this._internals.HOCH.compareTo(this._internals.VERGL) == -1) {
                    this._internals.ST = this._internals.HOCH;
                }
                else {
                    this._internals.ST = this._internals.VERGL;
                }
            }
        }
    }
    /**  Unterprogramm zur Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 7 EStG), PAP Seite 21  */
    UP5_6() {
        this._internals.X = (this._internals.ZX.multiply(bigdecimal_1.BigDecimal.valueOf(1.25))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        this.UPTAB10();
        this._internals.ST1 = this._internals.ST;
        this._internals.X = (this._internals.ZX.multiply(bigdecimal_1.BigDecimal.valueOf(0.75))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        this.UPTAB10();
        this._internals.ST2 = this._internals.ST;
        this._internals.DIFF = (this._internals.ST1.subtract(this._internals.ST2)).multiply(exports.ZAHL2);
        this._internals.MIST = (this._internals.ZX.multiply(bigdecimal_1.BigDecimal.valueOf(0.14))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        if (this._internals.MIST.compareTo(this._internals.DIFF) == 1) {
            this._internals.ST = this._internals.MIST;
        }
        else {
            this._internals.ST = this._internals.DIFF;
        }
    }
    /**  Solidaritaetszuschlag, PAP Seite 22  */
    MSOLZ() {
        this._internals.SOLZFREI = bigdecimal_1.BigDecimal.valueOf(972 * this._internals.KZTAB);
        if (this._internals.JBMG.compareTo(this._internals.SOLZFREI) == 1) {
            this._internals.SOLZJ = (this._internals.JBMG.multiply(bigdecimal_1.BigDecimal.valueOf(5.5))).divide(exports.ZAHL100).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.SOLZMIN = (this._internals.JBMG.subtract(this._internals.SOLZFREI)).multiply(bigdecimal_1.BigDecimal.valueOf(20)).divide(exports.ZAHL100).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            if (this._internals.SOLZMIN.compareTo(this._internals.SOLZJ) == -1) {
                this._internals.SOLZJ = this._internals.SOLZMIN;
            }
            this._internals.JW = this._internals.SOLZJ.multiply(exports.ZAHL100).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this.UPANTEIL();
            this._outputs.SOLZLZZ = this._internals.ANTEIL1;
        }
        else {
            this._outputs.SOLZLZZ = bigdecimal_1.BigDecimal.ZERO();
        }
        if (this._inputs.R > 0) {
            this._internals.JW = this._internals.JBMG.multiply(exports.ZAHL100);
            this.UPANTEIL();
            this._outputs.BK = this._internals.ANTEIL1;
        }
        else {
            this._outputs.BK = bigdecimal_1.BigDecimal.ZERO();
        }
    }
    /**  Anteil von Jahresbetraegen fuer einen this._inputs.LZZ (§ 39b Abs. 2 Satz 9 EStG), PAP Seite 23  */
    UPANTEIL() {
        if (this._inputs.LZZ == 1) {
            this._internals.ANTEIL1 = this._internals.JW;
            this._internals.ANTEIL2 = this._internals.JW;
        }
        else {
            if (this._inputs.LZZ == 2) {
                this._internals.ANTEIL1 = this._internals.JW.divide(exports.ZAHL12, 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.ANTEIL2 = this._internals.JW.divide(exports.ZAHL12, 0, bigdecimal_1.BigDecimal.ROUND_UP);
            }
            else {
                if (this._inputs.LZZ == 3) {
                    this._internals.ANTEIL1 = (this._internals.JW.multiply(exports.ZAHL7)).divide(exports.ZAHL360, 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ANTEIL2 = (this._internals.JW.multiply(exports.ZAHL7)).divide(exports.ZAHL360, 0, bigdecimal_1.BigDecimal.ROUND_UP);
                }
                else {
                    this._internals.ANTEIL1 = this._internals.JW.divide(exports.ZAHL360, 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ANTEIL2 = this._internals.JW.divide(exports.ZAHL360, 0, bigdecimal_1.BigDecimal.ROUND_UP);
                }
            }
        }
    }
    /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 8 EStG), PAP Seite 24  */
    MSONST() {
        this._inputs.LZZ = 1;
        if (this._inputs.ZMVB == 0) {
            this._inputs.ZMVB = 12;
        }
        if (this._inputs.SONSTB.compareTo(bigdecimal_1.BigDecimal.ZERO()) == 0) {
            this._internals.LSTSO = bigdecimal_1.BigDecimal.ZERO();
            this._outputs.STS = bigdecimal_1.BigDecimal.ZERO();
            this._outputs.SOLZS = bigdecimal_1.BigDecimal.ZERO();
            this._outputs.BKS = bigdecimal_1.BigDecimal.ZERO();
        }
        else {
            this.MOSONST();
            this._internals.ZRE4J = ((this._inputs.JRE4.add(this._inputs.SONSTB)).divide(exports.ZAHL100)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.ZVBEZJ = ((this._inputs.JVBEZ.add(this._inputs.VBS)).divide(exports.ZAHL100)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.VBEZBSO = this._inputs.STERBE;
            this.MRE4SONST();
            this.MLSTJAHR();
            this._internals.LSTSO = this._internals.ST.multiply(exports.ZAHL100);
            /**    lt. PAP muss hier auf ganze EUR aufgerundet werden,
                  allerdings muss der Wert in Cent vorgehalten werden,
                  deshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
                  wieder die Multiplikation mit 100  */
            this._outputs.STS = this._internals.LSTSO.subtract(this._internals.LSTOSO).multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.f)).divide(exports.ZAHL100, 0, bigdecimal_1.BigDecimal.ROUND_DOWN).multiply(exports.ZAHL100);
            if (this._outputs.STS.compareTo(bigdecimal_1.BigDecimal.ZERO()) == -1) {
                this._outputs.STS = bigdecimal_1.BigDecimal.ZERO();
            }
            this._outputs.SOLZS = this._outputs.STS.multiply(bigdecimal_1.BigDecimal.valueOf(5.5)).divide(exports.ZAHL100, 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            if (this._inputs.R > 0) {
                this._outputs.BKS = this._outputs.STS;
            }
            else {
                this._outputs.BKS = bigdecimal_1.BigDecimal.ZERO();
            }
        }
    }
    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 und 10 EStG), PAP Seite 25  */
    MVMT() {
        if (this._inputs.VKAPA.compareTo(bigdecimal_1.BigDecimal.ZERO()) == -1) {
            this._inputs.VKAPA = bigdecimal_1.BigDecimal.ZERO();
        }
        if ((this._inputs.VMT.add(this._inputs.VKAPA)).compareTo(bigdecimal_1.BigDecimal.ZERO()) == 1) {
            if (this._internals.LSTSO.compareTo(bigdecimal_1.BigDecimal.ZERO()) == 0) {
                this.MOSONST();
                this._internals.LST1 = this._internals.LSTOSO;
            }
            else {
                this._internals.LST1 = this._internals.LSTSO;
            }
            this._internals.VBEZBSO = this._inputs.STERBE.add(this._inputs.VKAPA);
            this._internals.ZRE4J = ((this._inputs.JRE4.add(this._inputs.SONSTB).add(this._inputs.VMT).add(this._inputs.VKAPA)).divide(exports.ZAHL100)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.ZVBEZJ = ((this._inputs.JVBEZ.add(this._inputs.VBS).add(this._inputs.VKAPA)).divide(exports.ZAHL100)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.KENNVMT = 2;
            this.MRE4SONST();
            this.MLSTJAHR();
            this._internals.LST3 = this._internals.ST.multiply(exports.ZAHL100);
            this.MRE4ABZ();
            this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.JRE4ENT.divide(exports.ZAHL100)).subtract(this._inputs.SONSTENT.divide(exports.ZAHL100));
            this._internals.KENNVMT = 1;
            this.MLSTJAHR();
            this._internals.LST2 = this._internals.ST.multiply(exports.ZAHL100);
            this._outputs.STV = this._internals.LST2.subtract(this._internals.LST1);
            this._internals.LST3 = this._internals.LST3.subtract(this._internals.LST1);
            if (this._internals.LST3.compareTo(this._outputs.STV) == -1) {
                this._outputs.STV = this._internals.LST3;
            }
            if (this._outputs.STV.compareTo(bigdecimal_1.BigDecimal.ZERO()) == -1) {
                this._outputs.STV = bigdecimal_1.BigDecimal.ZERO();
            }
            else {
                /**
                  lt. PAP muss hier auf ganze EUR abgerundet werden.
                   Allerdings muss auch hier der Wert in Cent vorgehalten werden,
                  weshalb nach dem Aufrunden auf ganze EUR durch 'divide(ZAHL100, 0, BigDecimal.ROUND_DOWN)'
                  wieder die Multiplikation mit 100 erfolgt.
                 */
                this._outputs.STV = this._outputs.STV.multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.f)).divide(exports.ZAHL100, 0, bigdecimal_1.BigDecimal.ROUND_DOWN).multiply(exports.ZAHL100);
            }
            this._outputs.SOLZV = ((this._outputs.STV.multiply(bigdecimal_1.BigDecimal.valueOf(5.5))).divide(exports.ZAHL100)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            if (this._inputs.R > 0) {
                this._outputs.BKV = this._outputs.STV;
            }
            else {
                this._outputs.BKV = bigdecimal_1.BigDecimal.ZERO();
            }
        }
        else {
            this._outputs.STV = bigdecimal_1.BigDecimal.ZERO();
            this._outputs.SOLZV = bigdecimal_1.BigDecimal.ZERO();
            this._outputs.BKV = bigdecimal_1.BigDecimal.ZERO();
        }
    }
    /**  Sonderberechnung ohne sonstige Bezüge this._inputs.für Berechnung bei sonstigen Bezügen oder Vergütung this._inputs.für mehrjährige Tätigkeit, PAP Seite 26  */
    MOSONST() {
        this._internals.ZRE4J = (this._inputs.JRE4.divide(exports.ZAHL100)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        this._internals.ZVBEZJ = (this._inputs.JVBEZ.divide(exports.ZAHL100)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        this._internals.JLFREIB = this._inputs.JFREIB.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        this._internals.JLHINZU = this._inputs.JHINZU.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        this.MRE4();
        this.MRE4ABZ();
        this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.JRE4ENT.divide(exports.ZAHL100));
        this.MZTABFB();
        this.MLSTJAHR();
        this._internals.LSTOSO = this._internals.ST.multiply(exports.ZAHL100);
    }
    /**  Sonderberechnung mit sonstige Bezüge this._inputs.für Berechnung bei sonstigen Bezügen oder Vergütung this._inputs.für mehrjährige Tätigkeit, PAP Seite 26  */
    MRE4SONST() {
        this.MRE4();
        this._internals.FVB = this._internals.FVBSO;
        this.MRE4ABZ();
        this._internals.ZRE4VP = this._internals.ZRE4VP.subtract(this._inputs.JRE4ENT.divide(exports.ZAHL100)).subtract(this._inputs.SONSTENT.divide(exports.ZAHL100));
        this._internals.FVBZ = this._internals.FVBZSO;
        this.MZTABFB();
    }
    /**  Tarifliche Einkommensteuer §32a EStG, PAP Seite 27  */
    UPTAB10() {
        if (this._internals.X.compareTo(bigdecimal_1.BigDecimal.valueOf(8005)) == -1) {
            this._internals.ST = bigdecimal_1.BigDecimal.ZERO();
        }
        else {
            if (this._internals.X.compareTo(bigdecimal_1.BigDecimal.valueOf(13470)) == -1) {
                this._internals.Y = (this._internals.X.subtract(bigdecimal_1.BigDecimal.valueOf(8004))).divide(bigdecimal_1.BigDecimal.valueOf(10000), 6, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.RW = this._internals.Y.multiply(bigdecimal_1.BigDecimal.valueOf(912.17));
                this._internals.RW = this._internals.RW.add(bigdecimal_1.BigDecimal.valueOf(1400));
                this._internals.ST = (this._internals.RW.multiply(this._internals.Y)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                if (this._internals.X.compareTo(bigdecimal_1.BigDecimal.valueOf(52882)) == -1) {
                    this._internals.Y = (this._internals.X.subtract(bigdecimal_1.BigDecimal.valueOf(13469))).divide(bigdecimal_1.BigDecimal.valueOf(10000), 6, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.RW = this._internals.Y.multiply(bigdecimal_1.BigDecimal.valueOf(228.74));
                    this._internals.RW = this._internals.RW.add(bigdecimal_1.BigDecimal.valueOf(2397));
                    this._internals.RW = this._internals.RW.multiply(this._internals.Y);
                    this._internals.ST = (this._internals.RW.add(bigdecimal_1.BigDecimal.valueOf(1038))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    if (this._internals.X.compareTo(bigdecimal_1.BigDecimal.valueOf(250731)) == -1) {
                        this._internals.ST = ((this._internals.X.multiply(bigdecimal_1.BigDecimal.valueOf(0.42))).subtract(bigdecimal_1.BigDecimal.valueOf(8172))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    }
                    else {
                        this._internals.ST = ((this._internals.X.multiply(bigdecimal_1.BigDecimal.valueOf(0.45))).subtract(bigdecimal_1.BigDecimal.valueOf(15694))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    }
                }
            }
        }
        this._internals.ST = this._internals.ST.multiply(bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB));
    }
}
Lohnsteuer2011Big.TAB1 = exports.TAB1;
Lohnsteuer2011Big.TAB2 = exports.TAB2;
Lohnsteuer2011Big.TAB3 = exports.TAB3;
Lohnsteuer2011Big.TAB4 = exports.TAB4;
Lohnsteuer2011Big.TAB5 = exports.TAB5;
Lohnsteuer2011Big.ZAHL0 = exports.ZAHL0;
Lohnsteuer2011Big.ZAHL1 = exports.ZAHL1;
Lohnsteuer2011Big.ZAHL2 = exports.ZAHL2;
Lohnsteuer2011Big.ZAHL3 = exports.ZAHL3;
Lohnsteuer2011Big.ZAHL4 = exports.ZAHL4;
Lohnsteuer2011Big.ZAHL5 = exports.ZAHL5;
Lohnsteuer2011Big.ZAHL6 = exports.ZAHL6;
Lohnsteuer2011Big.ZAHL7 = exports.ZAHL7;
Lohnsteuer2011Big.ZAHL8 = exports.ZAHL8;
Lohnsteuer2011Big.ZAHL9 = exports.ZAHL9;
Lohnsteuer2011Big.ZAHL10 = exports.ZAHL10;
Lohnsteuer2011Big.ZAHL11 = exports.ZAHL11;
Lohnsteuer2011Big.ZAHL12 = exports.ZAHL12;
Lohnsteuer2011Big.ZAHL100 = exports.ZAHL100;
Lohnsteuer2011Big.ZAHL360 = exports.ZAHL360;
Lohnsteuer2011Big.ZAHL500 = exports.ZAHL500;
Lohnsteuer2011Big.ZAHL700 = exports.ZAHL700;
exports.Lohnsteuer2011Big = Lohnsteuer2011Big;
//# sourceMappingURL=Lohnsteuer2011Dezember.js.map