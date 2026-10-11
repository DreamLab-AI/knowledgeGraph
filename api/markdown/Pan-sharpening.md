Pan-sharpening is the fusion of a higher-resolution panchromatic image with a lower-resolution multiband image to produce a multiband image at the panchromatic resolution.[^1][^2]

Esri documents the output as a multiband raster with the resolution of the panchromatic raster where the two overlap, and describes the operation as a radiometric transformation.[^1] Its software offers five fusion methods, which is a statement about one product and not a general taxonomy of methods.[^1] The Humboldt State course gives Landsat 8 as an example of a sensor that also collects a panchromatic band at 15 m spatial resolution, finer than its multispectral bands.[^2]

Fusion changes pixel values: Esri says the purpose is a higher quality visual image and that, because the techniques alter radiometry and spectral characteristics, pan-sharpened imagery needs caution for analytical remote sensing.[^3] Humboldt likewise advises cautious use for spectral analysis.[^2][^3]

Neither source compares the fusion methods, quantify spectral distortion, or state conditions under which sharpened data are safe to use for index calculation.

[^1]: Esri ArcGIS Pro documentation, “Fundamentals of pan sharpening”. https://doc.esri.com/en/arcgis-pro/latest/help/analysis/raster-functions/fundamentals-of-pan-sharpening-pro.html
[^2]: Humboldt State University, GSP 216 online course, “Pan Sharpening”. http://gsp.humboldt.edu/olm/Courses/GSP_216/online/lesson7/pan-sharpen.html
[^3]: Esri ArcGIS Pro documentation, “Pansharpening function”. https://doc.esri.com/en/arcgis-pro/latest/help/analysis/raster-functions/pansharpening-function.html

