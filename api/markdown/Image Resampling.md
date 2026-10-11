Image resampling is the computation of pixel values on a new grid from values on an existing raster when the pixel size or coordinate reference system changes.[^1]

GDAL states that its warping utility transforms images between different coordinate reference systems and spatial resolutions, and that the resampling algorithm weights source pixels either by the fraction covered by the destination pixel or by distance between pixel centres.[^1] ESA's SNAP Mosaic operator offers a similar choice of nearest neighbour, bilinear, cubic, bi-sinc or bi-cubic resampling, which shows that the choice is exposed to the user in both toolchains.[^2]

Methods trade cost against fidelity. GDAL describes nearest neighbour as the default for non-COG drivers, the fastest algorithm and the one with the worst interpolation quality.[^1] A GIS textbook chapter places resampling between raster resolutions among the uses of spatial interpolation, so the algorithm that fills the new grid is an interpolation method and the operation applied to the raster is resampling.[^3]

Retained sources do not establish which method suits which data type, the radiometric effect of resampling on a given sensor, or a processing level for resampled products. Those depend on the product documentation.[^1][^3]

[^1]: GDAL project, “gdalwarp”. https://gdal.org/en/stable/programs/gdalwarp.html
[^2]: ESA STEP, “Mosaic Operator”. https://step.esa.int/main/wp-content/help/versions/9.0.0/snap-toolboxes/org.esa.s1tbx.s1tbx.op.sar.processing.ui/operators/MosaicOp.html
[^3]: L. Mitas and H. Mitasova, “Spatial interpolation (GIS book chapter 34)”. https://www.geos.ed.ac.uk/~gisteac/gis_book_abridged/files/ch34.pdf

