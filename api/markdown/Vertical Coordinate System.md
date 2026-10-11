A vertical coordinate system is a one-dimensional coordinate system used to express gravity-related height or depth.[^1]

In the OGC abstract specification a vertical coordinate reference system is built on a vertical reference frame, which is the vertical datum. The specification defines the two terms separately, so the coordinate system and the datum are related but are not the same thing.[^1]

Gravity-related heights include orthometric and normal heights, which approximate the distance of a point above mean sea level. The same specification places ellipsoidal heights in a three-dimensional ellipsoidal system rather than a vertical one, so a height from a satellite positioning solution is not automatically a value in a vertical coordinate system of this kind.[^1]

In practice a vertical system may express land elevations or water depths, and NOAA describes both geodetic and water-level datums. Moving data between them needs a documented transformation, and NOAA's VDatum tool provides such transformations for specified regions. The retained sources do not give a general accuracy for these conversions.[^2][^3]

[^1]: Open Geospatial Consortium, *OGC Abstract Specification Topic 2: Referencing by coordinates Corrigendum*, version 5.0.1. https://docs.ogc.org/as/18-005r5/18-005r5.html
[^2]: NOAA National Ocean Service, “What is a datum?” https://oceanservice.noaa.gov/facts/datum.html
[^3]: NOAA, “VDatum: Vertical Datum Transformation”. https://vdatum.noaa.gov/

