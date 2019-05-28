"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Lohnsteuer2006Big_1 = require("./calculators/Lohnsteuer2006Big");
const Lohnsteuer2007Big_1 = require("./calculators/Lohnsteuer2007Big");
const Lohnsteuer2008Big_1 = require("./calculators/Lohnsteuer2008Big");
const Lohnsteuer2009Big_1 = require("./calculators/Lohnsteuer2009Big");
const Lohnsteuer2010Big_1 = require("./calculators/Lohnsteuer2010Big");
const Lohnsteuer2011BisNovember_1 = require("./calculators/Lohnsteuer2011BisNovember");
const Lohnsteuer2011Dezember_1 = require("./calculators/Lohnsteuer2011Dezember");
const Lohnsteuer2012_1 = require("./calculators/Lohnsteuer2012");
const Lohnsteuer2013_2_1 = require("./calculators/Lohnsteuer2013_2");
const Lohnsteuer2014_1 = require("./calculators/Lohnsteuer2014");
const Lohnsteuer2015BisNovember_1 = require("./calculators/Lohnsteuer2015BisNovember");
const Lohnsteuer2015Dezember_1 = require("./calculators/Lohnsteuer2015Dezember");
const Lohnsteuer2016_1 = require("./calculators/Lohnsteuer2016");
const Lohnsteuer2017_1 = require("./calculators/Lohnsteuer2017");
const Lohnsteuer2018_1 = require("./calculators/Lohnsteuer2018");
const Lohnsteuer2019_1 = require("./calculators/Lohnsteuer2019");
exports.calculatorList = [
    Lohnsteuer2006Big_1.Lohnsteuer2006Big,
    Lohnsteuer2007Big_1.Lohnsteuer2007Big,
    Lohnsteuer2008Big_1.Lohnsteuer2008Big,
    Lohnsteuer2009Big_1.Lohnsteuer2009Big,
    Lohnsteuer2010Big_1.Lohnsteuer2010Big,
    Lohnsteuer2011BisNovember_1.Lohnsteuer2011Big, Lohnsteuer2011Dezember_1.Lohnsteuer2011Big,
    Lohnsteuer2012_1.Lohnsteuer2012Big,
    Lohnsteuer2013_2_1.Lohnsteuer2013Big,
    Lohnsteuer2014_1.Lohnsteuer2014Big,
    Lohnsteuer2015BisNovember_1.Lohnsteuer2015Big, Lohnsteuer2015Dezember_1.Lohnsteuer2015DezemberBig,
    Lohnsteuer2016_1.Lohnsteuer2016Big,
    Lohnsteuer2017_1.Lohnsteuer2017Big,
    Lohnsteuer2018_1.Lohnsteuer2018Big,
    Lohnsteuer2019_1.Lohnsteuer2019Big
];
exports.calculatorsByMonth = {
    2006: months(Lohnsteuer2006Big_1.Lohnsteuer2006Big, Lohnsteuer2006Big_1.Lohnsteuer2006Big),
    2007: months(Lohnsteuer2007Big_1.Lohnsteuer2007Big, Lohnsteuer2007Big_1.Lohnsteuer2007Big),
    2008: months(Lohnsteuer2008Big_1.Lohnsteuer2008Big, Lohnsteuer2008Big_1.Lohnsteuer2008Big),
    2009: months(Lohnsteuer2009Big_1.Lohnsteuer2009Big, Lohnsteuer2009Big_1.Lohnsteuer2009Big),
    2010: months(Lohnsteuer2010Big_1.Lohnsteuer2010Big, Lohnsteuer2010Big_1.Lohnsteuer2010Big),
    2011: months(Lohnsteuer2011BisNovember_1.Lohnsteuer2011Big, Lohnsteuer2011Dezember_1.Lohnsteuer2011Big),
    2012: months(Lohnsteuer2012_1.Lohnsteuer2012Big, Lohnsteuer2012_1.Lohnsteuer2012Big),
    2013: months(Lohnsteuer2013_2_1.Lohnsteuer2013Big, Lohnsteuer2013_2_1.Lohnsteuer2013Big),
    2014: months(Lohnsteuer2014_1.Lohnsteuer2014Big, Lohnsteuer2014_1.Lohnsteuer2014Big),
    2015: months(Lohnsteuer2015BisNovember_1.Lohnsteuer2015Big, Lohnsteuer2015Dezember_1.Lohnsteuer2015DezemberBig),
    2016: months(Lohnsteuer2016_1.Lohnsteuer2016Big, Lohnsteuer2016_1.Lohnsteuer2016Big),
    2017: months(Lohnsteuer2017_1.Lohnsteuer2017Big, Lohnsteuer2017_1.Lohnsteuer2017Big),
    2018: months(Lohnsteuer2018_1.Lohnsteuer2018Big, Lohnsteuer2018_1.Lohnsteuer2018Big),
    2019: months(Lohnsteuer2019_1.Lohnsteuer2019Big, Lohnsteuer2019_1.Lohnsteuer2019Big)
};
function months(calculator, calculatorDec) {
    return {
        1: calculator, 2: calculator, 3: calculator,
        4: calculator, 5: calculator, 6: calculator,
        7: calculator, 8: calculator, 9: calculator,
        10: calculator, 11: calculator, 12: calculatorDec
    };
}
//# sourceMappingURL=index.js.map