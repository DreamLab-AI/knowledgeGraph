A compound coordinate reference system is a coordinate reference system built from two or more independent coordinate reference systems, such as a horizontal system combined with a vertical one.[^1]

According to the OGC specification, it is a non-repeating sequence of coordinate reference systems, none of which can itself be compound. Nesting is therefore not permitted, and the single systems are aggregated instead. Systems count as independent when coordinate values in one cannot be converted or transformed into values in the other.[^1]

Examples include a projected system with easting and northing combined with a vertical system whose coordinate is a gravity-related height; or a geographic system combined with a parametric system whose coordinate is pressure. For spatial coordinates the combined systems must not contain duplicate or redundant axes, and the standard lists the valid combinations.[^1]

Construction rules in this specification describe the normative requirements only, not how any particular software or dataset encodes a compound system, so a given file should be checked against its own documentation.[^1]

[^1]: Open Geospatial Consortium, *Geographic information: Spatial referencing by coordinates*, OGC 18-005r5. https://docs.ogc.org/as/18-005r5/18-005r5.html

