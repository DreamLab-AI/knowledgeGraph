Measurement scaling is the transformation of stored data values into physical values by applying a scale factor, usually together with an offset.[^1] In the netCDF convention the packed data are multiplied by the factor and then shifted by the offset, and the reverse operation applies when data are written.[^1]

Scaling is a property of storage packing, so attributes that mark missing or invalid values stay in the packed domain and are tested before unpacking.[^1][^2] SWEET gives its scaling class no parent and declares the scale factor class equivalent to it, so the ontology does not separate the operation from its parameter.[^3] This page keeps the operation distinct from the factor itself.

Retained sources do not establish scaling methods other than linear packing, such as logarithmic or nonlinear transforms, nor the accuracy lost through packing.

[^1]: Unidata, “NetCDF Users Guide, Appendix A: Attribute Conventions”. https://docs.unidata.ucar.edu/nug/current/attribute_conventions.html
[^2]: CF Conventions, “NetCDF Climate and Forecast (CF) Metadata Conventions 1.11”. https://cfconventions.org/Data/cf-conventions/cf-conventions-1.11/cf-conventions.html
[^3]: ESIP Federation, “SWEET reprDataProduct.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl

