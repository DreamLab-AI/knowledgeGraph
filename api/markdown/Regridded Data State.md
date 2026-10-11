Regridded data state is the SWEET data-processing state of data that have been moved from one grid to another by a regridding process.[^1][^2]

In the SWEET state module the class Regridded is a subclass of DataState with a hadProcess restriction to Regridding.[^1] The geospatial module declares Regrid equivalent to Regridding and places it under Interpolate, and lists coordinate transformation as a subclass of Regridding.[^3]

NCAR defines regridding as interpolating from one grid resolution to a different grid resolution and says that quantitative evaluation of data on different grids requires regridding to a common grid.[^2] The ESMF documentation phrases it as changing the grid that underlies data values while preserving qualities of the original data.[^4] NCAR names bilinear, conservative and patch as the most commonly used methods, and the choice affects what is preserved.[^2]

Regridding is distinct from the first mapping of swath data to a fixed grid. NASA describes interpolation of swath data to the fixed Earth grid as unique to each sensor, which belongs to initial gridding.[^5] Retained sources do not establish whether a regridded product keeps the gridded state, or give error figures for any method.

[^1]: ESIP SWEET ontology (GitHub mirror), “stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: NCAR Climate Data Guide, “Regridding Overview”. https://climatedataguide.ucar.edu/climate-tools/regridding-overview
[^3]: ESIP SWEET ontology (GitHub mirror), “reprDataServiceGeospatial.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceGeospatial.ttl
[^4]: Earth System Modeling Framework (ESMF), “Regridding Status, ESMF 5.2.0rp3”. https://earthsystemmodeling.org/docs/release/ESMF_5_2_0rp3/esmf_5_2_0rp3_regridding_status.html
[^5]: NASA Earthdata, “Equal Area Scalable Earth Grid: A Move Toward Data Mapping Standards”. https://www.earthdata.nasa.gov/news/feature-articles/equal-area-scalable-earth-grid-move-toward-data-mapping-standards

