Receiver Autonomous Integrity Monitoring, or RAIM, is a user-side algorithm that determines the integrity of a GNSS position solution using the GNSS measurements themselves.[^1][^2]

RAIM works by redundancy. The algorithm compares the measurements with one another to check that they are consistent, using residuals, and when it detects an inconsistency it can determine the most likely failed satellite.[^1] This requires enough satellites in view, and conventional algorithms assume that only one satellite is faulty at a time and size their protection levels from satellite geometry.[^1][^3]

In aviation, RAIM is one technique within aircraft-based augmentation. Unlike satellite-based or ground-based augmentation it focuses on integrity only and provides no corrections that would improve accuracy.[^1][^4] A NASA technical report abstract describes the goal as a sufficient level of navigation integrity for all phases of flight based on the GPS satellite signals alone.[^2]

RAIM has several algorithm families, including measurement rejection and error characterisation approaches, that differ in their assumptions and in how often they can provide a solution.[^3] These sources are explanatory and date from the early period of the techniques, so they do not establish performance for any particular receiver or constellation, and RAIM does not by itself improve positioning accuracy.[^1][^3]

[^1]: ESA Navipedia, “RAIM”, 2011. https://gssc.esa.int/navipedia/index.php/RAIM
[^2]: NASA Technical Reports Server, “Receiver autonomous integrity monitoring (RAIM) - Techniques”, abstract. https://ntrs.nasa.gov/citations/19920056943
[^3]: ESA Navipedia, “RAIM Algorithms”, 2011. https://gssc.esa.int/navipedia/index.php/RAIM_Algorithms
[^4]: Federal Aviation Administration, “Navigation Programs: Satellite Navigation”. https://www.faa.gov/about/office_org/headquarters_offices/ato/service_units/techops/navservices/gnss

