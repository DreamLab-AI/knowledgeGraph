Georeferencing establishes the relation between coordinates internal to an image or grid and a coordinate reference system (CRS) tied to the Earth. It can use a sensor model, an affine or higher-order mapping, control points or another declared coordinate operation. Geolocation is the broader act of assigning Earth positions to observations; georeferencing describes the explicit coordinate relationship used to place and exchange the resulting dataset.[^1]

## Raster coordinates and Earth coordinates

A georeferenced raster needs two linked definitions: its model CRS and the mapping from raster rows and columns to coordinates in that CRS. A CRS identifier alone does not locate the pixels. GeoTIFF can encode the mapping and the horizontal or vertical CRS, while its pixel-is-area and pixel-is-point conventions affect whether coordinates refer to cell extents or sample positions.[^2] Well-known text can represent CRSs and coordinate operations consistently between systems.[^3] These standards encode geometry; conformance to them does not prove that the observations, chosen transformation or resulting positions are accurate.

Coordinate conversion and coordinate transformation have distinct meanings. A conversion, such as a map projection, changes coordinate representation within one datum. A transformation relates different datums or reference frames and carries an area of use and uncertainty.[^1][^3] Software should preserve the source and target CRS, including axis order, units, reference-frame realisation and epoch where these matter.

For Great Britain, a simple Helmert transformation between ETRS89 and OSGB36 does not model the spatial distortion inherited from the legacy national network. Ordnance Survey limits that simple approach to work requiring only about 3 m accuracy and identifies OSTN15 as the definitive grid transformation for precise use.[^4] OSGM15 supplies the corresponding relationship between GNSS ellipsoid heights and national height datums.[^5] Professional guidance recommends official transformation models where they exist and recording the model and parameters used.[^6]

## Terrain and error

Satellite and aerial images also contain relief displacement. Orthorectification uses sensor geometry and an elevation model to correct it. Elevation error or misregistration between the image and elevation model can move pixels horizontally, with the effect depending on relief and viewing geometry.[^7] Resampling then creates a new grid, so interpolation method and output pixel convention also belong in the processing record.

Accuracy must be tested separately from the encoding. Residuals at ground control points used to estimate the mapping measure model fit and can be optimistic. Independent checkpoints test the finished product. Landsat metadata distinguishes geometric model residuals from verification residuals and records such inputs as the elevation source and ground-control version.[^7][^8]

Useful provenance includes the original raster or sensor geometry, source and target CRSs, coordinate operation, transformation or grid version, control and checkpoint sources, elevation model, software and processing version, resampling method and date. Reprocessing the same image with a newer control library or transformation model can change pixel positions without any change to the original observation.

## References

[^1]: Open Geospatial Consortium, [Abstract Specification Topic 2: Referencing by coordinates](https://docs.ogc.org/as/18-005r4/18-005r4.html).
[^2]: Open Geospatial Consortium, [GeoTIFF Standard 1.1](https://docs.ogc.org/is/19-008r4/19-008r4.html).
[^3]: Open Geospatial Consortium, [Well-known text representation of coordinate reference systems](https://www.ogc.org/standards/wkt-crs/).
[^4]: Ordnance Survey, [A Guide to Coordinate Systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf).
[^5]: Ordnance Survey, [Coordinate transformations](https://www.ordnancesurvey.co.uk/geodesy-positioning/coordinate-transformations).
[^6]: Royal Institution of Chartered Surveyors, [Use of GNSS in land surveying and mapping, third edition](https://www.rics.org/content/dam/ricsglobal/documents/standards/Use-of-GNSS-in-land-surveying-and-mapping_3rd-edition.pdf).
[^7]: US Geological Survey, [Landsat Levels of Processing](https://www.usgs.gov/landsat-missions/landsat-levels-processing).
[^8]: US Geological Survey, [Landsat Collection 2 Data Dictionary](https://www.usgs.gov/centers/eros/science/landsat-collection-2-data-dictionary).

