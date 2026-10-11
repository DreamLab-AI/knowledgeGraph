Terrain slope is the steepness of the ground surface at a location, usually calculated for each cell of an elevation raster.[^1][^2]

Esri states that lower slope values mean flatter terrain and higher values steeper terrain. Output can be given in degrees or as percent rise, which is the rise divided by the run multiplied by one hundred.[^1]

Esri computes slope from the rate of change of elevation between a cell and its neighbours in a three by three window, in planar or geodesic form. Cells lacking enough valid neighbours, including the outermost rows and columns, receive no value.[^1] GDAL offers degrees or percent slope and a scaling factor for rasters whose horizontal and vertical units differ.[^2]

Slope is also an input to other analyses. NASA's NISAR overview notes that slopes lead to geometric distortions in radar imagery, with steeper angles giving more extreme layover.[^3] The sources do not give an accuracy for slope derived from any particular elevation model, and slope is distinct from aspect, which gives direction rather than steepness.[^1][^2]

[^1]: Esri, “How Slope works”, ArcMap documentation. https://desktop.arcgis.com/en/arcmap/latest/tools/spatial-analyst-toolbox/how-slope-works.htm
[^2]: GDAL project, “gdaldem”, program manual. https://gdal.org/en/stable/programs/gdaldem.html
[^3]: NASA NISAR, “SAR overview”. https://nisar.jpl.nasa.gov/mission/get-to-know-sar/overview/

