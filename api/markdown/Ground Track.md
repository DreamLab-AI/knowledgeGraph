A ground track is the path traced by a spacecraft’s subsatellite point on a specified Earth-fixed reference surface.

In ESA’s convention, the subsatellite point is the normal projection of the spacecraft position onto an Earth reference ellipsoid. A ground track therefore depends on the chosen ellipsoid and projection convention; it is not necessarily a radial projection to a sphere. The output should identify geodetic or geocentric latitude, longitude sign convention, frame and epoch.[^1276]

To calculate ground longitude from an inertial orbit, transform the state into an Earth-fixed frame at the same epoch. The transformation depends on the adopted celestial and terrestrial reference systems and Earth-orientation data. Earth rotation angle uses UT1; UTC is a civil time scale, and TT is used for precession and nutation model time arguments. For precision work, record the time system and Earth-orientation product used, including its validity interval.[^1274][^1275][^1281][^1282]

A plotted track may be adequate for visual coverage planning, while station visibility or precise repeatability needs explicit state interpolation, ellipsoid and frame conventions. At low altitude, station latitude and orbit height also affect contact opportunities and durations, as ESA’s GOCE operations illustrate for its Kiruna and Svalbard network.[^1276]

[^1274]: [IERS Bulletin B 463, Earth orientation products](https://datacenter.iers.org/versionMetadata.php?filename=mt%2Fbulletinb-463.txt).
[^1275]: [JPL NAIF SPICE, Time Subsystem](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/time.html).
[^1276]: [ESA, Earth Observation Mission Conventions Document](https://eop-cfi.esa.int/Repo/PUBLIC/DOCUMENTATION/CFI/ENVCFI/5.9_Documentation/mcd2.0.pdf).
[^1281]: [IERS Conventions catalogue](https://www.iers.org/iers/en/dataproducts/conventions/conventions).
[^1282]: [IERS FAQ, Time argument for using IERS products](https://www.iers.org/iers/en/service/faqs/thenewiauresolutions/timeargumentforusingiersproducts-104-157).

