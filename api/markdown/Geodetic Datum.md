A geodetic datum relates a coordinate system to the Earth. It supplies the origin, orientation and scale needed to turn mathematical coordinates into positions. An ellipsoid supplies a model of the Earth's size and shape, but is only one part of this relationship: different datums or frames can use the same ellipsoid and still assign different coordinates to a point.[^1][^2]

## Datum and reference frame

Current ISO 19111 and OGC terminology calls a geodetic datum a **geodetic reference frame**. Established names, software and registry records still use *datum*, so the terms coexist.[^1] Older teaching material often distinguishes a datum definition from its physical realisation: the definition fixes the coordinate system with respect to Earth, while a terrestrial reference frame makes it usable through coordinates assigned to stations or satellites.[^2] That distinction remains useful when discussing a reference system such as ITRS and a realised frame such as ITRF.

A static frame excludes time evolution from its defining parameters. Coordinates referred to it are intended to remain fixed within that model. A dynamic frame includes time evolution because crustal motion and deformation can change coordinates.[^1][^3] A dynamic datum therefore requires more than a frame name for precise use: the frame reference epoch describes the frame definition, while the coordinate epoch says when a particular coordinate tuple is valid. “Static” describes the reference model and does not imply that the ground is physically motionless.

## Horizontal and vertical references

Geodetic and vertical references describe different quantities. Latitude and longitude, optionally with ellipsoid height, use a geodetic frame and an ellipsoidal coordinate system. A gravity-related height uses a vertical reference frame. Combining horizontal coordinates and an orthometric height therefore requires a compound CRS or equivalent explicit metadata; appending a height value without its vertical datum leaves the position ambiguous.[^1][^2]

Ordnance Datum Newlyn (ODN) illustrates the difference between a datum origin and its realisation. Ordnance Survey notes that *Datum* in the name strictly refers to the Newlyn tide-gauge initial point, while the national height frame was realised through levelling benchmarks.[^4] Modern high-accuracy access uses ETRS89 coordinates from OS Net with OSGM15, a geoid model that relates GNSS ellipsoid height to ODN and regional British height datums.[^5] ODN, an ellipsoid height and hydrographic Chart Datum are not interchangeable.

UK Hydrographic Office guidance accordingly requires bathymetric submissions to state both the horizontal datum or grid and the tidal datum to which depths were reduced.[^6] This preserves the reference surface as well as the numeric depth. It also allows later processing to distinguish a coordinate transformation from a change in vertical datum.

## Accuracy and provenance

A datum name alone is not an accuracy statement. Accuracy depends on its realised control, observation method, transformation and the condition of monuments or models used to access it. Reproducible coordinates should preserve the authority and identifier, frame realisation, coordinate epoch where relevant, axis order and units, vertical datum, transformation or geoid model and their versions, area of use and reported uncertainty.[^1][^5]

## References

[^1]: Open Geospatial Consortium, [Abstract Specification Topic 2: Referencing by coordinates](https://docs.ogc.org/as/18-005r8/18-005r8.pdf).
[^2]: Ordnance Survey, [A Guide to Coordinate Systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf).
[^3]: International Organization for Standardization, [ISO 19111:2019: Geographic information: Referencing by coordinates](https://www.iso.org/standard/74039.html).
[^4]: Ordnance Survey, [Ordnance Survey coordinate systems](https://docs.os.uk/more-than-maps/a-guide-to-coordinate-systems-in-great-britain/ordnance-survey-coordinate-systems).
[^5]: Ordnance Survey, [National Geoid Model OSGM15](https://docs.os.uk/more-than-maps/a-guide-to-coordinate-systems-in-great-britain/from-one-coordinate-system-to-another-geodetic-transformations/national-geoid-model-osgm15-etrs89-orthometric-height).
[^6]: UK Hydrographic Office, [Use of third-party data and H-Notes](https://www.gov.uk/guidance/use-of-third-party-data-and-h-notes).

