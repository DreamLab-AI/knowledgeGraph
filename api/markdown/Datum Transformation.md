A datum transformation is a common name for a coordinate transformation, an operation that changes coordinates from a source coordinate reference system to a target one when the two systems are based on different datums.[^1][^2]

The OGC specification records that a coordinate transformation is colloquially referred to as a datum transformation and calls that usage erroneous. Its reasoning is that a transformation changes coordinate values and does not change the definition of the datum, and that it operates between two coordinate reference systems, not between two datums.[^1]

Transformation parameters are derived empirically. The specification states that errors in the coordinates used to derive them are embedded in the transformation and passed to output coordinates, which contrasts with conversions whose parameters have specified values.[^1]

PROJ lists several transformation methods, and its Helmert transform changes coordinates from one reference frame to another with three, four or seven parameter shifts, or kinematic counterparts with six, eight or fourteen. The sources do not rank the methods or give accuracies for them.[^2][^3]

[^1]: Open Geospatial Consortium, *Geographic information: Spatial referencing by coordinates*, OGC 18-005r5. https://docs.ogc.org/as/18-005r5/18-005r5.html
[^2]: PROJ contributors, “Transformations”, PROJ documentation. https://proj.org/en/stable/operations/transformations/index.html
[^3]: PROJ contributors, “Helmert transform”, PROJ documentation. https://proj.org/en/stable/operations/transformations/helmert.html

