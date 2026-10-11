A geospatial data layer is a named collection of geographic data of one kind, such as vector features or a raster, that can be displayed, queried and combined with other layers.[^1][^2]

SWEET makes layer a subclass of data product.[^1] In ArcGIS, layers are collections of geographic data that reference a data source and typically comprise vector, raster or three-dimensional data.[^2] In QGIS teaching material, features in a vector layer share the same geometry type and the same kinds of attributes.[^3] The OGC Web Map Service describes a request that defines the geographic layers and area of interest to be processed.[^4]

Different tools draw the boundaries of this word differently. A layer in desktop GIS is a view onto a data source, whereas SWEET treats it as a data product, and the retained sources do not reconcile the two senses. They also do not establish a service-level definition of layer beyond its role in a map request.

[^1]: ESIP SWEET, “reprDataProduct.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl
[^2]: Esri, “Layers”. https://pro.arcgis.com/en/pro-app/latest/help/mapping/layer-properties/layers.htm
[^3]: QGIS, “Vector Data”. https://docs.qgis.org/latest/en/docs/gentle_gis_introduction/vector_data.html
[^4]: OGC, “Web Map Service”. https://www.ogc.org/standards/wms/

