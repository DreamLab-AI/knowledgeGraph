A coordinate conversion is a coordinate operation that changes coordinates in a source coordinate reference system to coordinates in a target coordinate reference system when both systems are based on the same datum.[^1]

According to the OGC specification, a conversion uses parameters which have specified values. Examples include mapping ellipsoidal coordinates to Cartesian coordinates with a map projection, and changing units, such as radians to degrees or feet to metres. A map projection is itself defined as a coordinate conversion from an ellipsoidal coordinate system to a plane.[^1]

A conversion is one specialisation of a coordinate operation, which the specification also divides into transformations and point motion operations. The boundary with a transformation is the datum: PROJ documents transformations as operations between systems based on different datums.[^1][^2]

Software routines that count as conversions beyond these definitions are not stated, and PROJ is software documentation rather than a standard. A conversion changes how a position is expressed, not the datum it refers to.[^1][^2]

[^1]: Open Geospatial Consortium, *Geographic information: Spatial referencing by coordinates*, OGC 18-005r5. https://docs.ogc.org/as/18-005r5/18-005r5.html
[^2]: PROJ contributors, “Transformations”, PROJ documentation. https://proj.org/en/stable/operations/transformations/index.html

