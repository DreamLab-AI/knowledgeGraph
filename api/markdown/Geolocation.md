Geolocation assigns an Earth position to an observation. For satellite imagery, the calculation links a detector sample to a line of sight and then intersects that line with an Earth model. Platform position, attitude, acquisition time, instrument alignment and terrain can all affect the result. A product can therefore be geolocated before ground control has been applied, and the presence of coordinates does not by itself establish positional accuracy.[^1][^2]

## Sensor geometry and reference frames

Direct geolocation uses the sensor model with navigation and attitude measurements. ESA describes Sentinel-2 orbit determination using onboard GPS and a mission requirement to locate imagery to 20 m on the ground without ground control points.[^2] That figure is a mission requirement, not a general accuracy guarantee for every geolocated dataset. Product processing can later improve registration with reference imagery, ground control and a terrain model.

Numerical coordinates need a coordinate reference system (CRS). A coordinate system supplies axes, units and ordering; a datum or reference frame relates that system to the Earth.[^1] Latitude and longitude labelled only as “GPS” or “WGS 84” can be inadequate for precise work because realisations and epochs differ. Vertical position also has its own reference system. Ellipsoid height, a national mean-sea-level datum and hydrographic Chart Datum describe different quantities and cannot be exchanged by relabelling the values.

In Great Britain, Ordnance Survey's OSTN15 model transforms between ETRS89 and the OSGB36 National Grid. OSGM15 relates GNSS ellipsoid heights to the national height datums, including Ordnance Datum Newlyn on mainland Britain.[^3][^4] Some islands use local vertical datums, and offshore ODN is less well determined. The transformation, its version and its area of use are consequently part of the position rather than incidental processing details.

## Accuracy and provenance

Geolocation error can enter through orbit and attitude estimates, timing, sensor calibration, the geometric model, terrain height, reference-frame transformation and image matching. Terrain error has a horizontal effect when the sensor views the ground obliquely. Cloud, snow and weak image texture can also prevent reliable automated matching. Landsat therefore assigns processing levels according to the control and elevation data available, and publishes separate geometric model and verification statistics.[^5][^6]

Residuals on points used to fit a model describe how well the model fits those points. They do not independently establish product accuracy. Verification should use checkpoints withheld from the fit, with their reference source, sample and statistic reported.[^5][^7] A reproducible geolocation record should also preserve the sensor and acquisition time, orbit and attitude inputs, calibration and software versions, source and output CRS including epoch where relevant, transformation or grid version, elevation model, control dataset and resampling method.

## References

[^1]: Open Geospatial Consortium, [Abstract Specification Topic 2: Referencing by coordinates](https://docs.ogc.org/as/18-005r4/18-005r4.html).
[^2]: European Space Agency, [Sentinel-2 operations](https://www.esa.int/Enabling_Support/Operations/Sentinel-2_operations).
[^3]: Ordnance Survey, [Coordinate transformations](https://www.ordnancesurvey.co.uk/geodesy-positioning/coordinate-transformations).
[^4]: Ordnance Survey, [A Guide to Coordinate Systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf).
[^5]: US Geological Survey, [Landsat Levels of Processing](https://www.usgs.gov/landsat-missions/landsat-levels-processing).
[^6]: US Geological Survey, [Landsat Collection 2 Data Dictionary](https://www.usgs.gov/centers/eros/science/landsat-collection-2-data-dictionary).
[^7]: Royal Institution of Chartered Surveyors, [Earth observation and aerial surveys, sixth edition](https://www.rics.org/content/dam/ricsglobal/documents/standards/Earth%20observation%20and%20aerial%20surveys%206th%20edition.pdf).

