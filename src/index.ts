import { Lohnsteuer2006Big } from './calculators/Lohnsteuer2006Big';
import { Lohnsteuer2007Big } from './calculators/Lohnsteuer2007Big';
import { Lohnsteuer2008Big } from './calculators/Lohnsteuer2008Big';
import { Lohnsteuer2009Big } from './calculators/Lohnsteuer2009Big';
import { Lohnsteuer2010Big } from './calculators/Lohnsteuer2010Big';
import { Lohnsteuer2011Big as Lohnsteuer2011BisNovember } from './calculators/Lohnsteuer2011BisNovember';
import { Lohnsteuer2011Big as Lohnsteuer2011Dezember } from './calculators/Lohnsteuer2011Dezember';
import { Lohnsteuer2012Big as Lohnsteuer2012 } from './calculators/Lohnsteuer2012';
import { Lohnsteuer2013Big as Lohnsteuer2013_2 } from './calculators/Lohnsteuer2013_2';
import { Lohnsteuer2014Big as Lohnsteuer2014 } from './calculators/Lohnsteuer2014';
import { Lohnsteuer2015Big as Lohnsteuer2015BisNovember } from './calculators/Lohnsteuer2015BisNovember';
import { Lohnsteuer2015DezemberBig as Lohnsteuer2015Dezember } from './calculators/Lohnsteuer2015Dezember';
import { Lohnsteuer2016Big as Lohnsteuer2016 } from './calculators/Lohnsteuer2016';
import { Lohnsteuer2017Big as Lohnsteuer2017 } from './calculators/Lohnsteuer2017';
import { Lohnsteuer2018Big as Lohnsteuer2018 } from './calculators/Lohnsteuer2018';


export const calculatorList = [
  Lohnsteuer2006Big,
  Lohnsteuer2007Big,
  Lohnsteuer2008Big,
  Lohnsteuer2009Big,
  Lohnsteuer2010Big,
  Lohnsteuer2011BisNovember, Lohnsteuer2011Dezember,
  Lohnsteuer2012,
  Lohnsteuer2013_2,
  Lohnsteuer2014,
  Lohnsteuer2015BisNovember, Lohnsteuer2015Dezember,
  Lohnsteuer2016,
  Lohnsteuer2017,
  Lohnsteuer2018
];

export const calculatorsByMonth = {
  2006: months( Lohnsteuer2006Big, Lohnsteuer2006Big ),
  2007: months( Lohnsteuer2007Big, Lohnsteuer2007Big ),
  2008: months( Lohnsteuer2008Big, Lohnsteuer2008Big ),
  2009: months( Lohnsteuer2009Big, Lohnsteuer2009Big ),
  2010: months( Lohnsteuer2010Big, Lohnsteuer2010Big ),
  2011: months( Lohnsteuer2011BisNovember, Lohnsteuer2011Dezember ),
  2012: months( Lohnsteuer2012, Lohnsteuer2012 ),
  2013: months( Lohnsteuer2013_2, Lohnsteuer2013_2 ),
  2014: months( Lohnsteuer2014, Lohnsteuer2014 ),
  2015: months( Lohnsteuer2015BisNovember, Lohnsteuer2015Dezember ),
  2016: months( Lohnsteuer2016, Lohnsteuer2016 ),
  2017: months( Lohnsteuer2017, Lohnsteuer2017 ),
  2018: months( Lohnsteuer2018, Lohnsteuer2018 )
};


function months<C1, C2>( calculator: C1, calculatorDec: C2 ): {
  1: C1, 2: C1, 3: C1, 4: C1, 5: C1, 6: C1,
  7: C1, 8: C1, 9: C1, 10: C1, 11: C1, 12: C2
} {
  return {
    1: calculator, 2: calculator, 3: calculator,
    4: calculator, 5: calculator, 6: calculator,
    7: calculator, 8: calculator, 9: calculator,
    10: calculator, 11: calculator, 12: calculatorDec
  }
}

