A geospatial interface protocol is a standardised request and response interface through which a client reaches geospatial data, maps or features held by a remote service [^1].

In the SWEET representation ontology the class is a subclass of the generic interface protocol, and the ontology lists the web map, web feature and web coverage servers as individuals of the class [^1]. The class is therefore a family of access conventions and not a processing method or a data format.

Open Geospatial Consortium standards named in the ontology differ in what they hand back. The web map service returns geo-registered map images, the web feature service gives access at the level of features and their properties, and the web coverage service returns coverages that can be regular or irregular grids [^2] [^3] [^4].

Nothing in the retained sources establishes a formal definition of the SWEET class, since the ontology records only the label, the parent and the three individuals [^1]. They also do not establish which other protocols, if any, the class is meant to include.

[^1]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Service Geospatial (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl
[^2]: Open Geospatial Consortium, “Web Map Service”. https://www.ogc.org/standards/wms/
[^3]: Open Geospatial Consortium, “OGC WFS Standard | Web Feature Service Specification”. https://www.ogc.org/standards/wfs/
[^4]: Open Geospatial Consortium, “OGC WCS Standard | Web Coverage Service Specification”. https://www.ogc.org/standards/wcs/

