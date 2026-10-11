Julian date is a numerical time system that counts days, so that the interval in days between two epochs is easy to compute.[^1]

Any number alone does not fix a moment; NAIF recognises Julian Ephemeris Date, computed from TDB, and Julian Date UTC as separate systems whose names overlap but which correspond to different moments of time. The abbreviation JD is context-dependent in software, and NAIF advises labelling strings with their time scale when the context is unclear.[^1]

The IERS Conventions use the day count to anchor an epoch: J2000.0 is defined at the geocentre on 2000 January 1.5 TT, given as Julian Date 2451545.0 TT. That passage ties one epoch to one time scale; it does not describe the day count in general.[^2]

These sources do not establish the zero point of the count, conversion formulae to calendar dates or the modified variants, so those are left to the standard documentation of each system.

[^1]: NASA NAIF, *Time Required Reading*, CSPICE Toolkit. https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/time.html
[^2]: IERS, *IERS Conventions (2010)*, IERS Technical Note No. 36. https://iers-conventions.obspm.fr/content/tn36.pdf

