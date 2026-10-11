Image mosaicking is the assembly of spatially overlapping or adjacent images or products into a single continuous image, positioned by their geocoding.[^1][^2]

ESA's SNAP Mosaic operator states that the mosaicking is achieved from the geocoding of the source products, so that geocoding needs to be very accurate, and it recommends terrain and radiometric correction first.[^1] That page lists normalisation and weighted averaging of overlapping areas as ways to blend the result.[^1] GDAL describes its warping utility as an image mosaicing, reprojection and warping tool, so in practice mosaicking is entangled with resampling onto a common grid.[^2]

USGS's Landsat Image Mosaic of Antarctica shows a stacking approach, in which each pixel takes its value from the uppermost scene that has a value there and unwanted portions such as clouds are omitted so lower scenes show through.[^3] Its scenes were orthorectified and adjusted for geometric, sensor and illumination variations before merging.[^3] A mosaic can therefore also remove cloud, which is why it is separated from compositing only by its spatial, rather than temporal, assembly of inputs.

Retained sources do not establish a standard seam-line method, a radiometric balancing rule or a processing level for mosaics. They describe one software operator, one utility and one continental product.[^1][^3]

[^1]: ESA STEP, “Mosaic Operator”. https://step.esa.int/main/wp-content/help/versions/9.0.0/snap-toolboxes/org.esa.s1tbx.s1tbx.op.sar.processing.ui/operators/MosaicOp.html
[^2]: GDAL project, “gdalwarp”. https://gdal.org/en/stable/programs/gdalwarp.html
[^3]: USGS, “The Landsat Image Mosaic of Antarctica”. https://lima.usgs.gov/limadoc.php

