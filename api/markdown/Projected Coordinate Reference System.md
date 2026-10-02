A projected coordinate reference system (CRS) represents positions on a plane with Cartesian coordinates, normally eastings and northings. It is derived from a base geographic CRS by a map-projection conversion and inherits that base CRS's geodetic reference frame.[^1] Naming a projection method alone does not define the projected CRS.

## Definition and distortion

A complete projected CRS identifies the base geographic CRS, projection method and parameters, and Cartesian axes and units. Typical parameters include the latitude and longitude of origin, central meridian, scale factor, false easting and false northing.[^2][^3] Two CRSs can use the same projection method with different parameters or reference frames and produce different coordinates.

No projection can flatten a curved Earth without distortion or discontinuity.[^2] Different methods control angular, area, distance or directional behaviour for particular purposes, but no projected grid preserves every property everywhere. Scale factor and grid convergence vary with location. Grid distance can therefore differ from ground distance, and grid north from true north. Accuracy claims should state the area of use and account for projection distortion rather than treating planar coordinates as exact physical geometry.

A map projection is a **coordinate conversion** because it changes representation while retaining the base datum or frame. Moving between coordinates based on different frames is a **coordinate transformation**.[^1] A software pipeline may perform both, but recording only the final projected CRS does not preserve the transformation path or its uncertainty.

## British National Grid

British National Grid is a projected CRS based on OSGB36. It uses the Airy 1830 ellipsoid and a Transverse Mercator projection with its own origin, central meridian, scale factor and false origin; EPSG identifies the two-dimensional CRS as 27700.[^2][^3] A height is separate. A compound CRS can pair National Grid eastings and northings with an ODN height, but the map projection itself does not create that height.

Modern GNSS surveying in Great Britain operates in ETRS89. OSTN15 is the definitive transformation between ETRS89 and OSGB36 National Grid and models the spatial distortion inherited from the legacy triangulation.[^4] OS Net coordinates plus OSTN15 now define practical access to National Grid. Ordnance Survey reports about 0.1 m RMS agreement with old triangulation stations; this is a legacy-network comparison, not an allowance for GNSS observation error.[^4][^5]

A simple Helmert transformation does not model this spatially varying distortion. Ordnance Survey describes its simple WGS 84/OSGB36 calculation as accurate to about 3 m and directs higher-accuracy work to OSTN15 and OSGM15.[^6] OSGM15 is a separate geoid-based height transformation from ETRS89 ellipsoid height to ODN and regional height datums, not part of the projection.[^7]

## Operation choice and provenance

Coordinate operations have methods, parameters or grid files, scope, area of use and accuracy. EPSG guidance supplies formulae for its supported conversion and transformation methods.[^8] Reproducible projected data should retain source and target CRS identifiers and registry version, axis order and units, coordinate epoch where relevant, operation identifier and direction, transformation grid and version, software, area of use and the uncertainty contributed by observations and each operation.

## References

[^1]: Open Geospatial Consortium, [Abstract Specification Topic 2: Referencing by coordinates](https://docs.ogc.org/as/18-005r8/18-005r8.pdf).
[^2]: Ordnance Survey, [A Guide to Coordinate Systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf).
[^3]: Ordnance Survey, [Datum, ellipsoid and projection information](https://docs.os.uk/more-than-maps/a-guide-to-coordinate-systems-in-great-britain/datum-ellipsoid-and-projection-information).
[^4]: Ordnance Survey, [National Grid Transformation OSTN15](https://docs.os.uk/more-than-maps/a-guide-to-coordinate-systems-in-great-britain/from-one-coordinate-system-to-another-geodetic-transformations/national-grid-transformation-ostn15-etrs89-osgb36).
[^5]: Ordnance Survey, [Accuracy of OS Net, OSTN15 and OSGM15](https://www.ordnancesurvey.co.uk/geodesy-positioning/os-net/accuracy).
[^6]: Ordnance Survey, [Coordinate tools and resources](https://www.ordnancesurvey.co.uk/geodesy-positioning/coordinate-transformations/resources).
[^7]: Ordnance Survey, [National Geoid Model OSGM15](https://docs.os.uk/more-than-maps/a-guide-to-coordinate-systems-in-great-britain/from-one-coordinate-system-to-another-geodetic-transformations/national-geoid-model-osgm15-etrs89-orthometric-height).
[^8]: International Association of Oil & Gas Producers, [Coordinate conversions and transformations including formulas](https://idms.iogp.org/Documents/474).

