An angular coordinate is a coordinate that gives position by an angle, such as longitude or latitude, rather than by a distance along an axis.[^1][^2]

In the OGC and ISO referencing framework a polar coordinate system specifies position by one distance coordinate and one angular coordinate, and a spherical coordinate system by one distance coordinate and two angular coordinates.[^1] Angular units are among the unit types the specification lists, so a stated unit is part of any angular value.[^1]

Geodetic latitude is defined by the specification as the angle from the equatorial plane to the perpendicular to the ellipsoid through a given point, with north treated as positive. A spherical system is not the same thing as an ellipsoidal system degenerated into a sphere, and the two kinds of latitude should not be conflated.[^1]

In the NAIF CSPICE toolkit, the routine for converting rectangular to latitudinal coordinates returns latitude as the angle from the XY plane to the ray from the origin through the point, and returns angles in radians in a stated range.[^2] That is the convention of one toolkit. Other software may use colatitude or different ranges, so the convention should be checked before values are exchanged.[^1][^2]

[^1]: OGC, *OGC Abstract Specification Topic 2: Referencing by coordinates, Corrigendum*, document 18-005r5, 2021. https://docs.ogc.org/as/18-005r5/18-005r5.html
[^2]: NASA NAIF, “reclat_c: Rectangular to latitudinal coordinates”, CSPICE documentation. https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/reclat_c.html

