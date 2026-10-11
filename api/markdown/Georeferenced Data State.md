A georeferenced data state is the condition of a dataset that has undergone a georeferencing process, so that its elements are tied to locations in a map coordinate system.[^1][^2]

In the SWEET ontology the class is a kind of data state restricted to things that had a georeferencing process.[^1] In practice the process defines a raster's location using map coordinates and assigns the coordinate system of the map frame.[^2] Reconstructed instrument data can already carry georeferencing parameters such as platform ephemeris as ancillary annotation.[^3]

Being in this state does not imply positional accuracy. Modern satellite images tend to have relatively accurate location information but may need slight adjustment to line up with other GIS data.[^2] The retained sources do not establish how the state is recorded in file metadata or how accuracy should be reported alongside it.

[^1]: ESIP SWEET, “stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: Esri, “Overview of georeferencing”. https://doc.esri.com/en/arcgis-pro/latest/help/data/imagery/overview-of-georeferencing.html
[^3]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels

