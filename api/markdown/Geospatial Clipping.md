Geospatial clipping is the extraction of the part of a dataset that falls inside a boundary of another dataset, leaving the remainder out.[^1][^2]

SWEET lists clip as a geospatial service.[^1] Esri describes using clip features as a cookie cutter, which is useful for creating a study area or area of interest containing a geographic subset of a larger dataset.[^2] QGIS clips a vector layer using the features of a polygon layer, so only the parts of input features falling within the overlay polygons are kept.[^3] For rasters, gdalwarp can crop the extent of the target dataset to the extent of a cutline taken from a vector dataset.[^4]

Clipping changes geometry rather than attributes, and QGIS states that attribute values are not modified although area or length properties change.[^3] The retained sources do not establish a single cross-tool definition, and they do not address clipping of swath or non-gridded satellite products.

[^1]: ESIP SWEET, “reprDataServiceGeospatial.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl
[^2]: Esri, “Clip (Analysis)”. https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/clip.htm
[^3]: QGIS, “Vector overlay”. https://docs.qgis.org/latest/en/docs/user_manual/processing_algs/qgis/vectoroverlay.html
[^4]: GDAL, “gdalwarp”. https://gdal.org/en/stable/programs/gdalwarp.html

