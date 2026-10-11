Barycentric Dynamical Time is the uniform time scale used as the independent variable in the equations of motion of the planets, sun and moon, and the IAU has defined it since 2006 as a linear transformation of Barycentric Coordinate Time.[^1][^2]

The 2006 resolution recommends that, where a coordinate time scale linearly related to Barycentric Coordinate Time and close to Terrestrial Time at the geocentre is needed, TDB be defined by that linear transformation with stated defining constants. It notes that earlier definitions allowed more than one realisation of TDB, and that Barycentric Coordinate Time is the coordinate time scale of the Barycentric Celestial Reference System.[^2]

For the relation to Terrestrial Time, the resolution says the difference at the surface of the Earth stays under 2 ms for several millennia around the present epoch.[^2] SPICE computes the difference with a single periodic term that depends on the orbit of the Earth-Moon barycentre and ignores small-period fluctuations, and in its software ephemeris time means TDB.[^1]

TDB is not Terrestrial Time or UTC, and converting to either needs the stated constants and an agreed ephemeris. The sources do not cover how a particular mission pipeline applies the conversion.

[^1]: NASA JPL NAIF, *SPICE Time Subsystem*, required reading, revised 2021. https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/time.html
[^2]: IAU, “Re-definition of Barycentric Dynamical Time, TDB”, 2006 Resolution B3. https://iauarchive.eso.org/static/resolutions/IAU2006_Resol3.pdf

