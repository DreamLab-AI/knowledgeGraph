Terrain aspect is the compass direction that the downhill slope of a surface faces at a location, usually derived for each cell of an elevation raster.[^1][^2]

In the Esri documentation, aspect is measured clockwise in degrees from due north, so a value near the start and end of the range both point north. Cells with no downslope direction, the flat areas, receive a sentinel value rather than an angle.[^1]

GDAL describes the same quantity as the azimuth that slopes are facing, with north, east, south and west at the usual compass angles when the top of the raster points north. It uses a different nodata value for flat cells, and it can return a trigonometric angle instead of an azimuth, so a stated convention matters when comparing outputs from different tools.[^2]

Esri computes aspect from the elevation values of a cell and its neighbours in a moving window, with planar and geodesic options. The sources do not establish how aspect error varies with raster resolution or DEM quality, and aspect says nothing by itself about steepness, which is the separate quantity of slope.[^1][^2]

[^1]: Esri, “How Aspect works”, ArcMap documentation. https://desktop.arcgis.com/en/arcmap/latest/tools/spatial-analyst-toolbox/how-aspect-works.htm
[^2]: GDAL project, “gdaldem”, program manual. https://gdal.org/en/stable/programs/gdaldem.html

