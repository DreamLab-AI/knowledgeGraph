A ground control point (GCP) is a feature that can be identified in imagery or survey data and whose coordinates are known in the required output reference system. Its measured ground coordinates and corresponding image location constrain a geometric model. The uncertainty of both observations matters: an accurately surveyed point is poor control if the feature is ambiguous, has moved or cannot be marked consistently in the image.[^1]

## Control design

Control quality depends on geometry as well as count. Points should be distributed through a survey block and around its edges so that the model is constrained across the area rather than extrapolated beyond a cluster. Height variation also matters for a three-dimensional or terrain-sensitive adjustment. RICS guidance says control should be materially more accurate than the product, giving three times better as an example rather than a universal rule.[^1]

Each point needs a declared horizontal CRS and, where height is used, a vertical datum. Survey method, reference-frame realisation, epoch, transformation model, equipment and observation record belong with the values. RICS GNSS guidance recommends official transformation models where available and detailed field and processing records.[^2] Retaining the raw measurements allows coordinates to be recomputed when a national model or reference-frame realisation changes.

Direct georeferencing can reduce the amount of ground control by using integrated GNSS and inertial measurements to position and orient the sensor. It does not remove the need to calibrate the sensor system, transform into the required frame or verify the output.[^1] ESA's Sentinel-2 operations description gives an example of GPS-based direct geolocation with a 20 m ground requirement before ground control is considered.[^3]

## Control points and checkpoints

A point used to estimate model parameters is control. Its residual shows model fit at an observation that influenced that model. A checkpoint is withheld from fitting and used to test the completed product. Reusing the same point for both roles does not provide independent validation.[^1] The Environment Agency's lidar ground-truth surveys illustrate the independent role: separately surveyed reference points are compared with lidar surfaces and are accompanied by reference-point accuracy and quality-control information.[^4]

An accuracy report should identify which points were control and which were checkpoints, their spatial distribution, their own uncertainty and the statistic calculated. Root mean square error summarises squared residuals; it is neither a maximum error nor evidence that error is spatially uniform. Model RMSE and independent verification RMSE therefore answer different questions.

Landsat processing reflects this distinction. The available GCPs, their accuracy and distribution help determine processing level, while Collection 2 metadata records GCP count and version and distinguishes geometric model residuals from independent verification results.[^5][^6] Cloud, snow, surface change and weak image texture can prevent reliable matching even when a reference library exists. Control provenance should consequently include imagery dates and matching method as well as point coordinates.

## References

[^1]: Royal Institution of Chartered Surveyors, [Earth observation and aerial surveys, sixth edition](https://www.rics.org/content/dam/ricsglobal/documents/standards/Earth%20observation%20and%20aerial%20surveys%206th%20edition.pdf).
[^2]: Royal Institution of Chartered Surveyors, [Use of GNSS in land surveying and mapping, third edition](https://www.rics.org/content/dam/ricsglobal/documents/standards/Use-of-GNSS-in-land-surveying-and-mapping_3rd-edition.pdf).
[^3]: European Space Agency, [Sentinel-2 operations](https://www.esa.int/Enabling_Support/Operations/Sentinel-2_operations).
[^4]: Environment Agency, [LIDAR Ground Truth Surveys](https://www.data.gov.uk/dataset/123fd228-9033-4cac-afc4-4084977dd30a/lidar-ground-truth-surveys).
[^5]: US Geological Survey, [Landsat Levels of Processing](https://www.usgs.gov/landsat-missions/landsat-levels-processing).
[^6]: US Geological Survey, [Landsat Collection 2 Data Dictionary](https://www.usgs.gov/centers/eros/science/landsat-collection-2-data-dictionary).

