A geographic coordinate reference system (CRS) locates positions with an ellipsoidal coordinate system tied to Earth by a geodetic reference frame or datum ensemble. It normally uses latitude and longitude in two dimensions, or latitude, longitude and ellipsoid height in three dimensions.[^1]

## Components and coordinate metadata

A coordinate system defines axes, order, units and dimensionality. The geodetic reference frame supplies the Earth relationship. A geographic CRS combines both; neither latitude and longitude nor an ellipsoid name defines one by itself.[^1] Exchange metadata should therefore preserve an authoritative CRS identifier and definition, axis order, angular units, dimensionality and the relevant frame realisation.

Axis order needs explicit handling. User interfaces often display longitude before latitude, while an authoritative CRS can prescribe latitude then longitude. Reordering coordinates for storage or display is not a change of datum, but losing the declared order can put positions in the wrong place. Well-known text represents the CRS components and can carry identifiers and dynamic-frame information, although correct encoding does not validate the observations.[^2]

For a dynamic CRS, the coordinate epoch is part of the metadata required to make coordinates unambiguous.[^1][^2] It says when a coordinate tuple is valid. The frame reference epoch instead belongs to the frame definition. ISO notes that the CRS definition does not change with time even though coordinate values in a dynamic CRS can change.[^3]

## Conversion, transformation and height

ETRS89 positions can be represented as geocentric Cartesian XYZ or as ellipsoidal latitude, longitude and height on GRS80.[^4] Calculating one representation from the other is a **coordinate conversion** within the same frame. A **coordinate transformation** relates coordinates based on different datums or frames and carries uncertainty, an area of use and often time-dependent parameters.[^1] Treating every operation as a generic “conversion” hides this difference.

Ellipsoid height is geometric. A gravity-related height such as Ordnance Datum Newlyn belongs to a vertical CRS, not to a two-dimensional geographic CRS. In Great Britain, OSGM15 supplies a geoid model that relates ETRS89 ellipsoid heights to ODN and regional height datums.[^5] A three-dimensional geographic CRS with ellipsoid height and a compound CRS with orthometric height are different coordinate constructs even when both contain three numbers.

## Identifiers and accuracy

The EPSG Dataset records CRS definitions and the transformations and conversions between them.[^6] An identifier improves interoperability, but its meaning must remain exact. IOGP distinguishes users who need a particular ETRS89 realisation and coordinate epoch from users for whom the ETRS89 datum ensemble is accurate enough.[^7] The same care applies to WGS 84: a generic label should not be treated as an exact, timeless realisation for centimetre-level work.

A useful provenance record includes the CRS authority, code and registry version; axes and units; frame or ensemble and realisation; coordinate epoch; coordinate operation and version; vertical CRS where present; area of use; and observation and transformation uncertainty. The presence of an EPSG code establishes the definition, not the accuracy of the source coordinates.

## References

[^1]: Open Geospatial Consortium, [Abstract Specification Topic 2: Referencing by coordinates](https://docs.ogc.org/as/18-005r8/18-005r8.pdf).
[^2]: Open Geospatial Consortium, [Well-known text representation of coordinate reference systems](https://docs.ogc.org/is/18-010r7/18-010r7.html).
[^3]: International Organization for Standardization, [ISO 19111:2019: Geographic information: Referencing by coordinates](https://www.iso.org/standard/74039.html).
[^4]: Ordnance Survey, [A Guide to Coordinate Systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf).
[^5]: Ordnance Survey, [National Geoid Model OSGM15](https://docs.os.uk/more-than-maps/a-guide-to-coordinate-systems-in-great-britain/from-one-coordinate-system-to-another-geodetic-transformations/national-geoid-model-osgm15-etrs89-orthometric-height).
[^6]: International Association of Oil & Gas Producers, [Understanding the EPSG Geodetic Parameter Dataset](https://idms.iogp.org/Documents/473).
[^7]: International Association of Oil & Gas Producers, [ETRS89 in the EPSG Dataset](https://www.iogp.org/bookstore/product/epsg-guidance-note-7-7-etrs89-in-the-epsg-dataset/).

