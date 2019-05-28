"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bigdecimal_1 = require("bigdecimal");
const PAPBaseClass_1 = require("../PAPBaseClass");
;
;
;
/**  Tabelle fuer die Vomhundertsaetze des Versorgungsfreibetrags  */
exports.TAB1 = [0.0, 0.400, 0.384, 0.368, 0.352, 0.336, 0.320, 0.304, 0.288, 0.272, 0.256, 0.240, 0.224, 0.208, 0.192, 0.176, 0.160, 0.152, 0.144, 0.136, 0.128, 0.120, 0.112, 0.104, 0.096, 0.088, 0.080, 0.072, 0.064, 0.056, 0.048, 0.040, 0.032, 0.024, 0.016, 0.008, 0.000];
/**  Tabelle fuer die Hoechstbetrage des Versorgungsfreibetrags  */
exports.TAB2 = [0, 3000, 2880, 2760, 2640, 2520, 2400, 2280, 2160, 2040, 1920, 1800, 1680, 1560, 1440, 1320, 1200, 1140, 1080, 1020, 960, 900, 840, 780, 720, 660, 600, 540, 480, 420, 360, 300, 240, 180, 120, 60, 0];
/**  Tabelle fuer die Zuschlaege zum Versorgungsfreibetrag  */
exports.TAB3 = [0, 900, 864, 828, 792, 756, 720, 684, 648, 612, 576, 540, 504, 468, 432, 396, 360, 342, 324, 306, 288, 270, 252, 234, 216, 198, 180, 162, 144, 126, 108, 90, 72, 54, 36, 18, 0];
/**  Tabelle fuer die Vomhundertsaetze des Altersentlastungsbetrags  */
exports.TAB4 = [0.0, 0.400, 0.384, 0.368, 0.352, 0.336, 0.320, 0.304, 0.288, 0.272, 0.256, 0.240, 0.224, 0.208, 0.192, 0.176, 0.160, 0.152, 0.144, 0.136, 0.128, 0.120, 0.112, 0.104, 0.096, 0.088, 0.080, 0.072, 0.064, 0.056, 0.048, 0.040, 0.032, 0.024, 0.016, 0.008, 0.000];
/**  Tabelle fuer die Hoechstbetraege des Altersentlastungsbetrags  */
exports.TAB5 = [0, 1900, 1824, 1748, 1672, 1596, 1520, 1444, 1368, 1292, 1216, 1140, 1064, 988, 912, 836, 760, 722, 684, 646, 608, 570, 532, 494, 456, 418, 380, 342, 304, 266, 228, 190, 152, 114, 76, 38, 0];
/**  Zahlenkonstanten fuer im Plan oft genutzte BigDecimal Werte  */
exports.ZAHL0 = new bigdecimal_1.BigDecimal(0);
exports.ZAHL1 = new bigdecimal_1.BigDecimal(1);
exports.ZAHL2 = new bigdecimal_1.BigDecimal(2);
exports.ZAHL3 = new bigdecimal_1.BigDecimal(3);
exports.ZAHL4 = new bigdecimal_1.BigDecimal(4);
exports.ZAHL5 = new bigdecimal_1.BigDecimal(5);
exports.ZAHL6 = new bigdecimal_1.BigDecimal(6);
exports.ZAHL7 = new bigdecimal_1.BigDecimal(7);
exports.ZAHL8 = new bigdecimal_1.BigDecimal(8);
exports.ZAHL9 = new bigdecimal_1.BigDecimal(9);
exports.ZAHL10 = new bigdecimal_1.BigDecimal(10);
exports.ZAHL11 = new bigdecimal_1.BigDecimal(11);
exports.ZAHL12 = new bigdecimal_1.BigDecimal(12);
exports.ZAHL100 = new bigdecimal_1.BigDecimal(100);
exports.ZAHL360 = new bigdecimal_1.BigDecimal(360);
class Lohnsteuer2006Big extends PAPBaseClass_1.PAPBaseClass {
    constructor() {
        super(...arguments);
        this.name = 'Lohnsteuer2006Big';
        this._inputs = {
            AJAHR: 0,
            ALTER1: 0,
            HINZUR: new bigdecimal_1.BigDecimal(0),
            JFREIB: new bigdecimal_1.BigDecimal(0),
            JHINZU: new bigdecimal_1.BigDecimal(0),
            JRE4: new bigdecimal_1.BigDecimal(0),
            JVBEZ: new bigdecimal_1.BigDecimal(0),
            KRV: 0,
            LZZ: 0,
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
            WFUNDF: new bigdecimal_1.BigDecimal(0),
            ZKF: new bigdecimal_1.BigDecimal(0),
            ZMVB: 0,
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
            ALTE: new bigdecimal_1.BigDecimal(0),
            ANP: new bigdecimal_1.BigDecimal(0),
            ANTEIL1: new bigdecimal_1.BigDecimal(0),
            ANTEIL2: new bigdecimal_1.BigDecimal(0),
            BMG: new bigdecimal_1.BigDecimal(0),
            DIFF: new bigdecimal_1.BigDecimal(0),
            EFA: new bigdecimal_1.BigDecimal(0),
            FVB: new bigdecimal_1.BigDecimal(0),
            FVBZ: new bigdecimal_1.BigDecimal(0),
            HFVB: new bigdecimal_1.BigDecimal(0),
            J: 0,
            JBMG: new bigdecimal_1.BigDecimal(0),
            JW: new bigdecimal_1.BigDecimal(0),
            K: 0,
            KENNZ: 0,
            KFB: new bigdecimal_1.BigDecimal(0),
            KZTAB: 0,
            LSTJAHR: new bigdecimal_1.BigDecimal(0),
            LST1: new bigdecimal_1.BigDecimal(0),
            LST2: new bigdecimal_1.BigDecimal(0),
            LST3: new bigdecimal_1.BigDecimal(0),
            MIST: new bigdecimal_1.BigDecimal(0),
            RE4LZZ: new bigdecimal_1.BigDecimal(0),
            RE4LZZV: new bigdecimal_1.BigDecimal(0),
            RW: new bigdecimal_1.BigDecimal(0),
            SAP: new bigdecimal_1.BigDecimal(0),
            SOLZFREI: new bigdecimal_1.BigDecimal(0),
            SOLZJ: new bigdecimal_1.BigDecimal(0),
            SOLZMIN: new bigdecimal_1.BigDecimal(0),
            ST: new bigdecimal_1.BigDecimal(0),
            ST1: new bigdecimal_1.BigDecimal(0),
            ST2: new bigdecimal_1.BigDecimal(0),
            VBEZB: new bigdecimal_1.BigDecimal(0),
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
            ZRE4VP: new bigdecimal_1.BigDecimal(0),
            ZRE4VP1: new bigdecimal_1.BigDecimal(0),
            ZTABFB: new bigdecimal_1.BigDecimal(0),
            ZVBEZ: new bigdecimal_1.BigDecimal(0),
            ZVE: new bigdecimal_1.BigDecimal(0),
            ZX: new bigdecimal_1.BigDecimal(0),
            ZZX: new bigdecimal_1.BigDecimal(0),
            HOCH: new bigdecimal_1.BigDecimal(0),
            VERGL: new bigdecimal_1.BigDecimal(0),
        };
    }
    /**  PROGRAMMABLAUFPLAN 2006  */
    main() {
        this.MRE4LZZ();
        this._internals.KENNZ = 0;
        this._internals.RE4LZZ = this._inputs.RE4.subtract(this._internals.FVB).subtract(this._internals.ALTE).subtract(this._inputs.WFUNDF).add(this._inputs.HINZUR);
        this._internals.RE4LZZV = this._inputs.RE4.subtract(this._internals.FVB).subtract(this._internals.ALTE);
        this.MRE4();
        this.MZTABFB();
        this.MLSTJAHR();
        this._internals.LSTJAHR = this._internals.ST;
        this._internals.JW = this._internals.LSTJAHR.multiply(exports.ZAHL100);
        this.UPANTEIL();
        this._outputs.LSTLZZ = this._internals.ANTEIL1;
        if (this._inputs.ZKF.compareTo(exports.ZAHL0) == 1) {
            this._internals.ZTABFB = this._internals.ZTABFB.add(this._internals.KFB);
            this.MLSTJAHR();
            this._internals.JBMG = this._internals.ST;
        }
        else {
            this._internals.JBMG = this._internals.LSTJAHR;
        }
        this.MSOLZ();
        this.MSONST();
        this.MVMT();
    }
    /**  Freibetraege fuer Versorgungsbezuege, Altersentlastungsbetrag (§39b Abs. 2 Satz 2 EStG)
         PAP Seite 10  */
    MRE4LZZ() {
        if (this._inputs.VBEZ.compareTo(exports.ZAHL0) == 0) {
            this._internals.FVBZ = exports.ZAHL0;
            this._internals.FVB = exports.ZAHL0;
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
                if (((this._inputs.STERBE.add(this._inputs.VKAPA)).compareTo(exports.ZAHL0)) == 1) {
                    this._internals.VBEZB = (this._inputs.VBEZM.multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.ZMVB))).add(this._inputs.VBEZS);
                    this._internals.HFVB = bigdecimal_1.BigDecimal.valueOf(exports.TAB2[this._internals.J] * 100);
                    this._internals.FVBZ = bigdecimal_1.BigDecimal.valueOf(exports.TAB3[this._internals.J]);
                }
                else {
                    this._internals.VBEZB = (this._inputs.VBEZM.multiply(bigdecimal_1.BigDecimal.valueOf(this._inputs.ZMVB))).add(this._inputs.VBEZS);
                    this._internals.HFVB = bigdecimal_1.BigDecimal.valueOf(exports.TAB2[this._internals.J] / 12 * this._inputs.ZMVB * 100);
                    this._internals.FVBZ = (bigdecimal_1.BigDecimal.valueOf(exports.TAB3[this._internals.J] / 12 * this._inputs.ZMVB)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
                }
            }
            else {
                this._internals.VBEZB = ((this._inputs.VBEZM.multiply(exports.ZAHL12)).add(this._inputs.VBEZS)).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.HFVB = bigdecimal_1.BigDecimal.valueOf(exports.TAB2[this._internals.J] * 100);
                this._internals.FVBZ = bigdecimal_1.BigDecimal.valueOf(exports.TAB3[this._internals.J]);
            }
            this._internals.FVB = (this._internals.VBEZB.multiply(bigdecimal_1.BigDecimal.valueOf(exports.TAB1[this._internals.J]))).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            if (this._internals.FVB.compareTo(this._internals.HFVB) == 1) {
                this._internals.FVB = this._internals.HFVB;
            }
            else {
            }
            this._internals.JW = this._internals.FVB;
            this.UPANTEIL();
            this._internals.FVB = this._internals.ANTEIL2;
        }
        if (this._inputs.ALTER1 == 0) {
            this._internals.ALTE = exports.ZAHL0;
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
            this._internals.BMG = this._inputs.RE4.subtract(this._inputs.VBEZ);
            this._internals.ALTE = (this._internals.BMG.multiply(bigdecimal_1.BigDecimal.valueOf(exports.TAB4[this._internals.K]))).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            this._internals.JW = bigdecimal_1.BigDecimal.valueOf(exports.TAB5[this._internals.K] * 100);
            this.UPANTEIL();
            if (this._internals.ALTE.compareTo(this._internals.ANTEIL2) == 1) {
                this._internals.ALTE = this._internals.ANTEIL2;
            }
            else {
            }
        }
    }
    /**  Massgeblicher Arbeitslohn fuer die Jahreslohnsteuer
         PAP Seite 12  */
    MRE4() {
        if (this._inputs.LZZ == 1) {
            this._internals.ZRE4 = this._internals.RE4LZZ.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.ZRE4VP = this._internals.RE4LZZV.divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.ZVBEZ = (this._inputs.VBEZ.subtract(this._internals.FVB)).divide(exports.ZAHL100, 2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        else {
            if (this._inputs.LZZ == 2) {
                this._internals.ZRE4 = ((this._internals.RE4LZZ.add(bigdecimal_1.BigDecimal.valueOf(0.67))).multiply(bigdecimal_1.BigDecimal.valueOf(0.12))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.ZRE4VP = ((this._internals.RE4LZZV.add(bigdecimal_1.BigDecimal.valueOf(0.67))).multiply(bigdecimal_1.BigDecimal.valueOf(0.12))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.ZVBEZ = ((this._inputs.VBEZ.subtract(this._internals.FVB).add(bigdecimal_1.BigDecimal.valueOf(0.67))).multiply(bigdecimal_1.BigDecimal.valueOf(0.12))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                if (this._inputs.LZZ == 3) {
                    this._internals.ZRE4 = ((this._internals.RE4LZZ.add(bigdecimal_1.BigDecimal.valueOf(0.89))).multiply(bigdecimal_1.BigDecimal.valueOf(3.6 / 7.0))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ZRE4VP = ((this._internals.RE4LZZV.add(bigdecimal_1.BigDecimal.valueOf(0.89))).multiply(bigdecimal_1.BigDecimal.valueOf(3.6 / 7.0))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ZVBEZ = ((this._inputs.VBEZ.subtract(this._internals.FVB).add(bigdecimal_1.BigDecimal.valueOf(0.89))).multiply(bigdecimal_1.BigDecimal.valueOf(3.6 / 7.0))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    this._internals.ZRE4 = ((this._internals.RE4LZZ.add(bigdecimal_1.BigDecimal.valueOf(0.56))).multiply(bigdecimal_1.BigDecimal.valueOf(3.6))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ZRE4VP = ((this._internals.RE4LZZV.add(bigdecimal_1.BigDecimal.valueOf(0.56))).multiply(bigdecimal_1.BigDecimal.valueOf(3.6))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.ZVBEZ = ((this._inputs.VBEZ.subtract(this._internals.FVB).add(bigdecimal_1.BigDecimal.valueOf(0.56))).multiply(bigdecimal_1.BigDecimal.valueOf(3.6))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
            }
        }
        if (this._internals.ZRE4.compareTo(exports.ZAHL0) == -1) {
            this._internals.ZRE4 = exports.ZAHL0;
        }
        else {
        }
        if (this._internals.ZVBEZ.compareTo(exports.ZAHL0) == -1) {
            this._internals.ZVBEZ = exports.ZAHL0;
        }
        else {
        }
    }
    /**  Ermittlung der festen Tabellenfreibetraege (ohne Vorsorgepauschale)
         PAP Seite 13  */
    MZTABFB() {
        this._internals.ANP = exports.ZAHL0;
        if (this._internals.ZVBEZ.compareTo(exports.ZAHL0) == 1) {
            if (this._internals.ZVBEZ.compareTo(this._internals.FVBZ) == -1) {
                /**  Fehler im PAP? double -> int, Nachkommastellen abschneiden  */
                this._internals.FVBZ = this._internals.ZVBEZ.setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
            }
        }
        else {
        }
        if (this._inputs.STKL < 6) {
            if (this._internals.ZVBEZ.compareTo(exports.ZAHL0) == 1) {
                if ((this._internals.ZVBEZ.subtract(this._internals.FVBZ)).compareTo(bigdecimal_1.BigDecimal.valueOf(102)) == -1) {
                    /**  Fehler im PAP? double -> int, Nachkommastellen abschneiden  */
                    this._internals.ANP = (this._internals.ZVBEZ.subtract(this._internals.FVBZ)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    this._internals.ANP = bigdecimal_1.BigDecimal.valueOf(102);
                }
            }
            else {
            }
        }
        else {
        }
        if (this._inputs.STKL < 6) {
            if (this._internals.ZRE4.compareTo(this._internals.ZVBEZ) == 1) {
                if ((this._internals.ZRE4.subtract(this._internals.ZVBEZ)).compareTo(bigdecimal_1.BigDecimal.valueOf(920)) == -1) {
                    /**  Fehler im PAP? double -> int, Nachkommastellen abschneiden  */
                    this._internals.ANP = (this._internals.ANP.add(this._internals.ZRE4).subtract(this._internals.ZVBEZ)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    this._internals.ANP = this._internals.ANP.add(bigdecimal_1.BigDecimal.valueOf(920));
                }
            }
            else {
            }
        }
        else {
        }
        this._internals.KZTAB = 1;
        if (this._inputs.STKL == 1) {
            /**  this._inputs.ZKF ist double und this._internals.KFB ist integer. Nachkommastellen abschneiden! 4x!!!  */
            this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
            this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(5808))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        else {
            if (this._inputs.STKL == 2) {
                this._internals.EFA = bigdecimal_1.BigDecimal.valueOf(1308);
                this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
                this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(5808))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                if (this._inputs.STKL == 3) {
                    this._internals.KZTAB = 2;
                    this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(72);
                    this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(5808))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    if (this._inputs.STKL == 4) {
                        this._internals.SAP = bigdecimal_1.BigDecimal.valueOf(36);
                        this._internals.KFB = (this._inputs.ZKF.multiply(bigdecimal_1.BigDecimal.valueOf(2904))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    }
                    else {
                        this._internals.KFB = exports.ZAHL0;
                    }
                }
            }
        }
        this._internals.ZTABFB = this._internals.EFA.add(this._internals.ANP).add(this._internals.SAP).add(this._internals.FVBZ);
    }
    /**  Ermittlung Jahreslohnsteuer
         PAP Seite 14  */
    MLSTJAHR() {
        if (this._inputs.STKL < 5) {
            this.UPEVP();
        }
        else {
            this._internals.VSP = exports.ZAHL0;
        }
        /**  this._internals.ZVE ist in EURO, this._internals.ZRE4 in EURO,Cent  */
        this._internals.ZVE = (this._internals.ZRE4.subtract(this._internals.ZTABFB).subtract(this._internals.VSP)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        if (this._internals.ZVE.compareTo(exports.ZAHL1) == -1) {
            this._internals.ZVE = exports.ZAHL0;
            this._internals.X = exports.ZAHL0;
        }
        else {
            this._internals.X = this._internals.ZVE.divide(bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB), 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        if (this._inputs.STKL < 5) {
            this.UPTAB05();
        }
        else {
            this.MST5_6();
        }
    }
    /**  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG)
         PAP Seite 15  */
    UPEVP() {
        if (this._inputs.KRV == 1) {
            this._internals.VSP1 = exports.ZAHL0;
        }
        else {
            if (this._internals.ZRE4VP.compareTo(bigdecimal_1.BigDecimal.valueOf(63000)) == 1) {
                this._internals.ZRE4VP = bigdecimal_1.BigDecimal.valueOf(63000);
            }
            else {
            }
            this._internals.VSP1 = (this._internals.ZRE4VP.multiply(bigdecimal_1.BigDecimal.valueOf(0.24))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.VSP1 = (this._internals.VSP1.multiply(bigdecimal_1.BigDecimal.valueOf(0.0975))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        this._internals.VSP2 = this._internals.ZRE4VP.multiply(bigdecimal_1.BigDecimal.valueOf(0.11));
        this._internals.VHB = bigdecimal_1.BigDecimal.valueOf(1500 * this._internals.KZTAB);
        if (this._internals.VSP2.compareTo(this._internals.VHB) == 1) {
            this._internals.VSP2 = this._internals.VHB;
        }
        else {
        }
        /**  Erst auf 2 nachkommastellen kuerzen, dann aufrunden, sonst
             wird die Jahreslohnsteuer ggf. um 1 EUR zu hoch angesetzt.
             Hinweis: wieder aufgehoben, da bei this._internals.VSP1 eine Rundung fehlte.  */
        this._internals.VSPN = (this._internals.VSP1.add(this._internals.VSP2)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
        this.MVSP();
        if (this._internals.VSPN.compareTo(this._internals.VSP) == 1) {
            this._internals.VSP = this._internals.VSPN.setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        else {
        }
    }
    /**  Vorsorgepauschale (§39b Abs. 2 Satz 6 Nr 3 EStG) Vergleichsberechnung
         fuer Guenstigerpruefung
         PAP Seite 16  */
    MVSP() {
        if (this._internals.KENNZ == 1) {
            this._internals.VSPO = this._internals.ZRE4VP1.multiply(bigdecimal_1.BigDecimal.valueOf(0.2));
        }
        else {
            this._internals.VSPO = this._internals.ZRE4VP.multiply(bigdecimal_1.BigDecimal.valueOf(0.2));
        }
        this._internals.VSPVOR = bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB * 3068);
        this._internals.VSPMAX1 = bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB * 1334);
        this._internals.VSPMAX2 = bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB * 667);
        this._internals.VSPKURZ = bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB * 1134);
        if (this._inputs.KRV == 1) {
            if (this._internals.VSPO.compareTo(this._internals.VSPKURZ) == 1) {
                this._internals.VSP = this._internals.VSPKURZ;
            }
            else {
                this._internals.VSP = this._internals.VSPO.setScale(2, bigdecimal_1.BigDecimal.ROUND_UP);
            }
        }
        else {
            this.UMVSP();
        }
    }
    /**  Vorsorgepauschale
         PAP Seite 17  */
    UMVSP() {
        if (this._internals.KENNZ == 1) {
            this._internals.VSPVOR = this._internals.VSPVOR.subtract(this._internals.ZRE4VP1.multiply(bigdecimal_1.BigDecimal.valueOf(0.16)));
        }
        else {
            this._internals.VSPVOR = this._internals.VSPVOR.subtract(this._internals.ZRE4VP.multiply(bigdecimal_1.BigDecimal.valueOf(0.16)));
        }
        if (this._internals.VSPVOR.compareTo(exports.ZAHL0) == -1) {
            this._internals.VSPVOR = exports.ZAHL0;
        }
        else {
        }
        if (this._internals.VSPO.compareTo(this._internals.VSPVOR) == 1) {
            this._internals.VSP = this._internals.VSPVOR;
            this._internals.VSPREST = this._internals.VSPO.subtract(this._internals.VSPVOR);
            if (this._internals.VSPREST.compareTo(this._internals.VSPMAX1) == 1) {
                this._internals.VSP = this._internals.VSP.add(this._internals.VSPMAX1);
                this._internals.VSPREST = (this._internals.VSPREST.subtract(this._internals.VSPMAX1)).divide(exports.ZAHL2, 2, bigdecimal_1.BigDecimal.ROUND_UP);
                if (this._internals.VSPREST.compareTo(this._internals.VSPMAX2) == 1) {
                    this._internals.VSP = (this._internals.VSP.add(this._internals.VSPMAX2)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
                }
                else {
                    this._internals.VSP = (this._internals.VSP.add(this._internals.VSPREST)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
                }
            }
            else {
                this._internals.VSP = (this._internals.VSP.add(this._internals.VSPREST)).setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
            }
        }
        else {
            this._internals.VSP = this._internals.VSPO.setScale(0, bigdecimal_1.BigDecimal.ROUND_UP);
        }
    }
    /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG)
         PAP Seite 18  */
    MST5_6() {
        this._internals.ZZX = this._internals.X;
        if (this._internals.ZZX.compareTo(bigdecimal_1.BigDecimal.valueOf(25812)) == 1) {
            this._internals.ZX = bigdecimal_1.BigDecimal.valueOf(25812);
            this.UP5_6();
            this._internals.ST = (this._internals.ST.add((this._internals.ZZX.subtract(bigdecimal_1.BigDecimal.valueOf(25812))).multiply(bigdecimal_1.BigDecimal.valueOf(0.42)))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        }
        else {
            this._internals.ZX = this._internals.ZZX;
            this.UP5_6();
            if (this._internals.ZZX.compareTo(bigdecimal_1.BigDecimal.valueOf(9144)) == 1) {
                this._internals.VERGL = this._internals.ST;
                this._internals.ZX = bigdecimal_1.BigDecimal.valueOf(9144);
                this.UP5_6();
                this._internals.HOCH = (this._internals.ST.add((this._internals.ZZX.subtract(bigdecimal_1.BigDecimal.valueOf(9144))).multiply(bigdecimal_1.BigDecimal.valueOf(0.42)))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                if (this._internals.HOCH.compareTo(this._internals.VERGL) == -1) {
                    this._internals.ST = this._internals.HOCH;
                }
                else {
                    this._internals.ST = this._internals.VERGL;
                }
            }
            else {
            }
        }
    }
    /**  Lohnsteuer fuer die Steuerklassen V und VI (§ 39b Abs. 2 Satz 8 EStG)
         PAP Seite 18  */
    UP5_6() {
        this._internals.X = this._internals.ZX.multiply(bigdecimal_1.BigDecimal.valueOf(1.25));
        this.UPTAB05();
        this._internals.ST1 = this._internals.ST;
        this._internals.X = this._internals.ZX.multiply(bigdecimal_1.BigDecimal.valueOf(0.75));
        this.UPTAB05();
        this._internals.ST2 = this._internals.ST;
        this._internals.DIFF = (this._internals.ST1.subtract(this._internals.ST2)).multiply(exports.ZAHL2);
        this._internals.MIST = (this._internals.ZX.multiply(bigdecimal_1.BigDecimal.valueOf(0.15))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
        if (this._internals.MIST.compareTo(this._internals.DIFF) == 1) {
            this._internals.ST = this._internals.MIST;
        }
        else {
            this._internals.ST = this._internals.DIFF;
        }
    }
    /**  Solidaritaetszuschlag
         PAP Seite 19  */
    MSOLZ() {
        this._internals.SOLZFREI = bigdecimal_1.BigDecimal.valueOf(972 * this._internals.KZTAB);
        if (this._internals.JBMG.compareTo(this._internals.SOLZFREI) == 1) {
            this._internals.SOLZJ = (this._internals.JBMG.multiply(bigdecimal_1.BigDecimal.valueOf(5.5 / 100))).setScale(2, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this._internals.SOLZMIN = (this._internals.JBMG.subtract(this._internals.SOLZFREI)).multiply(bigdecimal_1.BigDecimal.valueOf(20.0 / 100.0));
            if (this._internals.SOLZMIN.compareTo(this._internals.SOLZJ) == -1) {
                this._internals.SOLZJ = this._internals.SOLZMIN;
            }
            else {
            }
            this._internals.JW = this._internals.SOLZJ.multiply(exports.ZAHL100).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            this.UPANTEIL();
            this._outputs.SOLZLZZ = this._internals.ANTEIL1;
        }
        else {
            this._outputs.SOLZLZZ = exports.ZAHL0;
        }
        if (this._inputs.R > 0) {
            this._internals.JW = this._internals.JBMG.multiply(exports.ZAHL100);
            this.UPANTEIL();
            this._outputs.BK = this._internals.ANTEIL1;
        }
        else {
            this._outputs.BK = exports.ZAHL0;
        }
    }
    /**  Anteil von Jahresbetraegen fuer einen this._inputs.LZZ (§ 39b Abs. 2 Satz 10 EStG)
         PAP Seite 20  */
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
    /**  Berechnung sonstiger Bezuege nach § 39b Abs. 3 Saetze 1 bis 7 EStG)
         PAP Seite 21  */
    MSONST() {
        if (this._inputs.SONSTB.compareTo(exports.ZAHL0) == 1) {
            this._inputs.LZZ = 1;
            this._inputs.VBEZ = this._inputs.JVBEZ;
            this._inputs.RE4 = this._inputs.JRE4;
            this.MRE4LZZ();
            this.MRE4LZZ2();
            this.MLSTJAHR();
            this._internals.LST1 = this._internals.ST.multiply(exports.ZAHL100);
            this._inputs.VBEZ = this._inputs.JVBEZ.add(this._inputs.VBS);
            this._inputs.RE4 = this._inputs.JRE4.add(this._inputs.SONSTB);
            this._inputs.VBEZS = this._inputs.VBEZS.add(this._inputs.STERBE);
            this.MRE4LZZ();
            this.MRE4LZZ2();
            this.MLSTJAHR();
            this._internals.LST2 = this._internals.ST.multiply(exports.ZAHL100);
            this._outputs.STS = this._internals.LST2.subtract(this._internals.LST1);
            this._outputs.SOLZS = this._outputs.STS.multiply(bigdecimal_1.BigDecimal.valueOf(5.5)).divide(exports.ZAHL100, 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            if (this._inputs.R > 0) {
                this._outputs.BKS = this._outputs.STS;
            }
            else {
                this._outputs.BKS = exports.ZAHL0;
            }
        }
        else {
            this._outputs.STS = exports.ZAHL0;
            this._outputs.SOLZS = exports.ZAHL0;
            this._outputs.BKS = exports.ZAHL0;
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
    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG)
         PAP Seite 22  */
    MVMT() {
        if ((this._inputs.VMT.add(this._inputs.VKAPA)).compareTo(exports.ZAHL0) == 1) {
            this._inputs.LZZ = 1;
            this._inputs.VBEZ = this._inputs.JVBEZ.add(this._inputs.VBS);
            this._inputs.RE4 = this._inputs.JRE4.add(this._inputs.SONSTB);
            this.MRE4LZZ();
            this.MRE4LZZ2();
            this.MLSTJAHR();
            this._internals.LST1 = this._internals.ST.multiply(exports.ZAHL100);
            this._inputs.VMT = this._inputs.VMT.add(this._inputs.VKAPA);
            this._inputs.VBEZS = this._inputs.VBEZS.add(this._inputs.VKAPA);
            this._inputs.VBEZ = this._inputs.VBEZ.add(this._inputs.VKAPA);
            this._inputs.RE4 = this._inputs.JRE4.add(this._inputs.SONSTB).add(this._inputs.VMT);
            this.MRE4LZZ();
            this.MRE4LZZ2();
            this._internals.KENNZ = 1;
            this._internals.ZRE4VP1 = this._internals.ZRE4VP;
            this.MLSTJAHR();
            this._internals.LST3 = this._internals.ST.multiply(exports.ZAHL100);
            this._inputs.VBEZ = this._inputs.VBEZ.subtract(this._inputs.VKAPA);
            this._inputs.RE4 = this._inputs.JRE4.add(this._inputs.SONSTB);
            this.MRE4LZZ();
            if ((this._inputs.RE4.subtract(this._inputs.JFREIB).add(this._inputs.JHINZU)).compareTo(exports.ZAHL0) == -1) {
                this._inputs.RE4 = this._inputs.RE4.subtract(this._inputs.JFREIB).add(this._inputs.JHINZU);
                this._inputs.JFREIB = exports.ZAHL0;
                this._inputs.JHINZU = exports.ZAHL0;
                this._inputs.RE4 = (this._inputs.RE4.add(this._inputs.VMT)).divide(exports.ZAHL5, 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this.MRE4LZZ2();
                this.MLSTJAHR();
                this._internals.LST2 = this._internals.ST.multiply(exports.ZAHL100);
                this._outputs.STV = this._internals.LST2.multiply(exports.ZAHL5);
            }
            else {
                this._inputs.RE4 = this._inputs.RE4.add(this._inputs.VMT.divide(exports.ZAHL5, 0, bigdecimal_1.BigDecimal.ROUND_DOWN));
                this.MRE4LZZ2();
                this.MLSTJAHR();
                this._internals.LST2 = this._internals.ST.multiply(exports.ZAHL100);
                this._outputs.STV = (this._internals.LST2.subtract(this._internals.LST1)).multiply(exports.ZAHL5);
            }
            this._internals.LST3 = this._internals.LST3.subtract(this._internals.LST1);
            if (this._internals.LST3.compareTo(this._outputs.STV) == -1) {
                this._outputs.STV = this._internals.LST3;
            }
            else {
            }
            this._outputs.SOLZV = (this._outputs.STV.multiply(bigdecimal_1.BigDecimal.valueOf(5.5))).divide(exports.ZAHL100, 0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            if (this._inputs.R > 0) {
                this._outputs.BKV = this._outputs.STV;
            }
            else {
                this._outputs.BKV = exports.ZAHL0;
            }
        }
        else {
            this._outputs.STV = exports.ZAHL0;
            this._outputs.SOLZV = exports.ZAHL0;
            this._outputs.BKV = exports.ZAHL0;
        }
    }
    /**  Berechnung der Verguetung fuer mehrjaehrige Taetigkeit nach § 39b Abs. 3 Satz 9 EStG)
         PAP Seite 23  */
    UPTAB05() {
        if (this._internals.X.compareTo(bigdecimal_1.BigDecimal.valueOf(7665)) == -1) {
            this._internals.ST = exports.ZAHL0;
        }
        else {
            if (this._internals.X.compareTo(bigdecimal_1.BigDecimal.valueOf(12740)) == -1) {
                this._internals.Y = (this._internals.X.subtract(bigdecimal_1.BigDecimal.valueOf(7664))).divide(bigdecimal_1.BigDecimal.valueOf(10000), 6, bigdecimal_1.BigDecimal.ROUND_DOWN);
                this._internals.RW = this._internals.Y.multiply(bigdecimal_1.BigDecimal.valueOf(883.74));
                this._internals.RW = this._internals.RW.add(bigdecimal_1.BigDecimal.valueOf(1500));
                this._internals.ST = (this._internals.RW.multiply(this._internals.Y)).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
            }
            else {
                if (this._internals.X.compareTo(bigdecimal_1.BigDecimal.valueOf(52152)) == -1) {
                    this._internals.Y = (this._internals.X.subtract(bigdecimal_1.BigDecimal.valueOf(12739))).divide(bigdecimal_1.BigDecimal.valueOf(10000), 6, bigdecimal_1.BigDecimal.ROUND_DOWN);
                    this._internals.RW = this._internals.Y.multiply(bigdecimal_1.BigDecimal.valueOf(228.74));
                    this._internals.RW = this._internals.RW.add(bigdecimal_1.BigDecimal.valueOf(2397));
                    this._internals.RW = this._internals.RW.multiply(this._internals.Y);
                    this._internals.ST = (this._internals.RW.add(bigdecimal_1.BigDecimal.valueOf(989))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
                else {
                    this._internals.ST = ((this._internals.X.multiply(bigdecimal_1.BigDecimal.valueOf(0.42))).subtract(bigdecimal_1.BigDecimal.valueOf(7914))).setScale(0, bigdecimal_1.BigDecimal.ROUND_DOWN);
                }
            }
        }
        this._internals.ST = this._internals.ST.multiply(bigdecimal_1.BigDecimal.valueOf(this._internals.KZTAB));
    }
}
Lohnsteuer2006Big.TAB1 = exports.TAB1;
Lohnsteuer2006Big.TAB2 = exports.TAB2;
Lohnsteuer2006Big.TAB3 = exports.TAB3;
Lohnsteuer2006Big.TAB4 = exports.TAB4;
Lohnsteuer2006Big.TAB5 = exports.TAB5;
Lohnsteuer2006Big.ZAHL0 = exports.ZAHL0;
Lohnsteuer2006Big.ZAHL1 = exports.ZAHL1;
Lohnsteuer2006Big.ZAHL2 = exports.ZAHL2;
Lohnsteuer2006Big.ZAHL3 = exports.ZAHL3;
Lohnsteuer2006Big.ZAHL4 = exports.ZAHL4;
Lohnsteuer2006Big.ZAHL5 = exports.ZAHL5;
Lohnsteuer2006Big.ZAHL6 = exports.ZAHL6;
Lohnsteuer2006Big.ZAHL7 = exports.ZAHL7;
Lohnsteuer2006Big.ZAHL8 = exports.ZAHL8;
Lohnsteuer2006Big.ZAHL9 = exports.ZAHL9;
Lohnsteuer2006Big.ZAHL10 = exports.ZAHL10;
Lohnsteuer2006Big.ZAHL11 = exports.ZAHL11;
Lohnsteuer2006Big.ZAHL12 = exports.ZAHL12;
Lohnsteuer2006Big.ZAHL100 = exports.ZAHL100;
Lohnsteuer2006Big.ZAHL360 = exports.ZAHL360;
exports.Lohnsteuer2006Big = Lohnsteuer2006Big;
//# sourceMappingURL=Lohnsteuer2006Big.js.map