Geospatial buffering is the construction of a zone of a stated distance around input geometries, producing polygons that cover everything within that distance.[^1][^2]

SWEET places buffer beneath proximity, itself a geospatial service.[^1] PostGIS computes a polygon or multipolygon representing all points whose distance from the geometry is less than or equal to the given distance, and a negative distance shrinks the geometry.[^2] Esri creates buffer polygons around input features to a specified distance and offers Euclidean and geodesic methods, where Euclidean buffers measure distance in a flat two-dimensional Cartesian plane.[^3]

Distance units follow the spatial reference system of the geometry, so a buffer is only as meaningful as the coordinate system it is computed in.[^2] GIS software documentation and an ontology file are the retained sources. They do not establish any Earth observation specific use, such as buffering around ground stations or footprints.

[^1]: ESIP SWEET, “reprDataServiceGeospatial.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl
[^2]: PostGIS, “ST_Buffer”. https://postgis.net/docs/ST_Buffer.html
[^3]: Esri, “Buffer (Analysis)”. https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/buffer.htm

