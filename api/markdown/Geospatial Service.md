A geospatial service is a data service whose operation is tied to a location, so that every instance has at least one spatial location [^1].

SWEET defines the class as a subclass of its generic data service, with a restriction requiring at least one location, and gives it subclasses such as gridding, clip, geocode and georeference [^1]. It is a broad grouping, not a single operation.

Web standards show the practical range. The web map service delivers geo-registered map images from distributed geospatial databases [^2], the web feature service gives fine-grained access at feature level with query and transaction operations [^3], and the web coverage service supports retrieval of coverages [^4].

Nothing in the retained sources establishes a boundary between a geospatial service and a geospatial interface protocol beyond the ontology's separate parent classes [^1]. They also give no definition of the class beyond its axioms.

[^1]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Service Geospatial (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl
[^2]: Open Geospatial Consortium, “Web Map Service”. https://www.ogc.org/standards/wms/
[^3]: Open Geospatial Consortium, “OGC WFS Standard | Web Feature Service Specification”. https://www.ogc.org/standards/wfs/
[^4]: Open Geospatial Consortium, “OGC WCS Standard | Web Coverage Service Specification”. https://www.ogc.org/standards/wcs/

