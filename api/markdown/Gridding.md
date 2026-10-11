Gridding is a geospatial service that places data onto a regular grid, producing gridded data [^1].

In the SWEET ontology gridding is a subclass of the geospatial service, and the related regrid class is a subclass of interpolate [^1]. This ties the operation to resampling or interpolating values at grid nodes, though the retained sources do not give an algorithm for it.

NASA describes the typical output as Level 3 data, variables mapped on uniform space-time grid scales, and notes that periodic summaries of Level 2 products are generally the Level 3A form [^2]. The web coverage service is the OGC route for retrieving such gridded data, since coverages include regular and irregular grids [^3].

Nothing in the retained sources establishes interpolation methods, grid conventions or accuracy effects of gridding.

[^1]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Service Geospatial (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl
[^2]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels
[^3]: Open Geospatial Consortium, “OGC WCS Standard | Web Coverage Service Specification”. https://www.ogc.org/standards/wcs/

