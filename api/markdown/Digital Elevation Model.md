A digital elevation model (DEM) is a georeferenced representation of elevation, commonly stored as a regular raster grid. The term is broad and is not used uniformly between organisations. A dataset's product definition, reference systems and processing history are more informative than its acronym alone.[^1][^2]

## DEM, DSM and DTM

A digital surface model (DSM) represents the upper surface sensed, including terrain, buildings and vegetation. A bare-earth product removes or classifies above-ground objects to estimate the underlying terrain. UK Environment Agency products call that raster a digital terrain model (DTM), while some US usage reserves DTM for mass points and breaklines.[^1][^3] The intended surface and storage model should therefore be stated explicitly.

A source lidar point cloud is neither a DSM nor a DTM. It contains measured returns with classifications from which raster surfaces are derived.[^4] Ground classification, filtering, interpolation and manual editing can all change the terrain model. The Environment Agency notes manual editing in its DTM workflow, so even a DTM derived from classified ground points should not be treated as an untouched copy of them.[^4][^5]

Composite products add another processing layer. The Environment Agency's 2 m composite DTM merges surveys acquired between 2000 and 2022, resampling some data with bilinear interpolation.[^6] Its 2022 label is a production vintage rather than a common acquisition date for every cell. The programme catalogue supplies survey date and identifier metadata needed to trace a location back to its source survey.[^3]

## Reference systems and resolution

An elevation value needs both a horizontal CRS and a vertical datum. Environment Agency land lidar uses OS National Grid horizontally and Ordnance Datum Newlyn for mainland heights.[^5][^6] Defra's marine DEM uses ETRS89 horizontally and Chart Datum vertically.[^7] Equal numeric values in ODN, Chart Datum and GNSS ellipsoid height do not describe the same surface. Joining land and seabed models requires declared horizontal and vertical transformations, including the relevant transformation or geoid model and its area of use.[^8]

Grid spacing is not accuracy. A 1 m or 2 m cell size describes sampling or storage, while vertical and horizontal accuracy describe agreement with a reference under a stated test. Features smaller than a cell may also be smoothed or absent. The Environment Agency states a ±15 cm vertical RMSE acceptance level for contributing lidar surveys, but that statistic is not a per-cell error bound.[^5][^6]

Validation uses independent reference points that are more accurate than the product. It should report their distribution, uncertainty and a defined statistic. The Environment Agency publishes separate ground-truth survey data for this purpose.[^9] RMSE gives greater weight to larger residuals and does not show whether errors vary with slope, vegetation, survey strip or location.

## Use and provenance

Elevation models support terrain analysis, flood and visibility modelling and image orthorectification. In orthorectification, elevation error can become horizontal image displacement; the size and direction depend on relief, viewing geometry and registration between the image and DEM.[^10] Vertical RMSE alone therefore does not quantify the resulting image-location error.

Reproducible use requires the sensor and acquisition date, point classification, filtering and editing, interpolation and resampling, source tiles, grid convention and cell size, horizontal CRS, vertical datum, transformation or geoid version and validation result. For a composite, provenance should remain traceable per source area because age, density and processing can vary within one apparently continuous grid.

## References

[^1]: Guth et al., [Digital elevation models: terminology and definitions](https://www.usgs.gov/publications/digital-elevation-models-terminology-and-definitions).
[^2]: US Geological Survey, [Projection, horizontal datum, vertical datum and resolution for DEMs](https://www.usgs.gov/faqs/what-projection-horizontal-datum-vertical-datum-and-resolution-a-usgs-digital-elevation-model).
[^3]: Environment Agency, [National LIDAR Programme index catalogue](https://environment.data.gov.uk/KB6uNVj5ZcJr7jUP/ArcGIS/rest/services/National_LIDAR_Programme_Catalogues/FeatureServer/0).
[^4]: Environment Agency, [LIDAR Time Stamped Point Cloud](https://www.data.gov.uk/dataset/977a4ca4-1759-4f26-baa7-b566bd7ca7bf/lidar-time-stamped-point-cloud).
[^5]: Environment Agency, [LIDAR DTM Time Stamped Tiles](https://www.data.gov.uk/dataset/8275e71e-1516-42a1-bb0c-4fa73807fe2b/lidar-dtm-time-stamped-tiles).
[^6]: Environment Agency, [LIDAR Composite Digital Terrain Model 2 m](https://www.data.gov.uk/dataset/e529ca2f-b4ce-403e-8cef-ab821061c4f3/lidar-composite-digital-terrain-model-dtm-2m).
[^7]: Department for Environment, Food and Rural Affairs, [Marine Digital Elevation Model, 6 arc seconds](https://www.data.gov.uk/dataset/20e7d416-dde6-4c19-86e9-faf38bc29259/defras-marine-digital-elevation-model-dem-6-arc-seconds).
[^8]: Ordnance Survey, [A Guide to Coordinate Systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf).
[^9]: Environment Agency, [LIDAR Ground Truth Surveys](https://www.data.gov.uk/dataset/123fd228-9033-4cac-afc4-4084977dd30a/lidar-ground-truth-surveys).
[^10]: US Geological Survey, [Landsat Levels of Processing](https://www.usgs.gov/landsat-missions/landsat-levels-processing).

