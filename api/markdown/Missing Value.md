A missing value is a value that indicates data are absent at a position in a variable.[^1] The netCDF convention allows the missing value attribute to be a scalar or a vector of such values, and these values should lie outside the valid range so that generic applications treat them as missing.[^1]

A fill value attribute is a separate mechanism that pre-fills disk space for the variable, and the climate and forecast convention names fill value, missing value and the valid limits together as the ways to indicate missing data.[^1][^2] Missing data is allowed in data variables but not in coordinate variables.[^2]

SWEET lists missing value as a subclass of its value class.[^3] The retained sources do not establish agreed codes across missions, nor how consumers should report the proportion of missing data.

[^1]: Unidata, “NetCDF Users Guide, Appendix A: Attribute Conventions”. https://docs.unidata.ucar.edu/nug/current/attribute_conventions.html
[^2]: CF Conventions, “NetCDF Climate and Forecast (CF) Metadata Conventions 1.11”. https://cfconventions.org/Data/cf-conventions/cf-conventions-1.11/cf-conventions.html
[^3]: ESIP Federation, “SWEET reprDataProduct.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl

