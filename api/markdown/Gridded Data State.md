Gridded data state is the processing state of data that have been through a gridding process and are held on a regular grid [^1].

SWEET's state module makes the class a data state with a restriction that some process in its history is a gridding process [^1]. The state is defined by that history and not by the grid geometry alone.

In the NASA processing-level scheme the nearest counterpart is Level 3, described as variables mapped on uniform space-time grid scales [^2]. The NASA SAR Handbook uses a similar idea for its own Level 2, covering products projected to the ground and gridded in regular grids [^3].

Nothing in the retained sources establishes whether a regridded product keeps this state or takes a different one, although the ontology names regridding as a separate subclass of the geospatial service module [^4]. Level labels differ between programmes, so the mapping from gridded state to a level is indicative only [^2] [^3].

[^1]: ESIP SWEET ontology (GitHub), “SWEET State Data Processing (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels
[^3]: NASA Earthdata SAR Handbook, “Chapter 2: Basics of Synthetic Aperture Radar”. https://earthdata.nasa.gov/s3fs-public/2025-04/SARHB_CH2_Content.pdf
[^4]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Service Geospatial (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl

