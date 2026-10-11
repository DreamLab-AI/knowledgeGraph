A geospatial overlay is an analysis operation that combines two or more sets of spatial features so that their spatial relationships are resolved into a new set of features [^1].

In the SWEET representation ontology overlay is a subclass of visualisation within the data analysis service module [^2]. GIS software documents it more operationally, describing overlay as joining two sets of features into a single set that identifies spatial relationships between the input features [^1].

Usual operations are clip, intersect, union, erase and difference. Esri lists tools that combine, erase, modify or update features and write the result to a new feature class [^1], while QGIS describes intersection as extracting the portions of input features that overlap features in the overlay layer, and clip as keeping only the parts that fall within the overlay polygons [^3].

Nothing in the retained sources establishes whether overlay of raster data is covered by the same class. The ontology places it under visualisation, whereas the software documentation treats it as a vector analysis step that produces new geometry and attributes [^2] [^3].

[^1]: Esri ArcGIS Pro documentation, “An overview of the Overlay toolset”. https://pro.arcgis.com/en/pro-app/latest/tool-reference/analysis/an-overview-of-the-overlay-toolset.htm
[^2]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Service Analysis (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl
[^3]: QGIS Documentation, “Vector overlay”. https://docs.qgis.org/latest/en/docs/user_manual/processing_algs/qgis/vectoroverlay.html

