A measurement scale factor is the multiplier by which stored data values are multiplied after reading to recover the physical values of a variable.[^1] In the netCDF attribute convention the multiplication is applied after the data are read, and when an offset is also present the data are scaled first and the offset added afterwards.[^1][^2] The convention applies to packed storage, where the stored variable is typically a narrow integer type and the unpacked values are floating point.[^1]

Any valid-range or missing-value attributes are expressed in the packed domain, so they are interpreted before the factor is applied.[^1][^2] SWEET declares its scale factor class a subclass of its value class and equivalent to its scaling class, which ties the term to values rather than to the act of rescaling.[^3]

Retained sources do not establish numeric ranges for factors, the units of a factor, or how a particular mission documents its own factors.

[^1]: Unidata, “NetCDF Users Guide, Appendix A: Attribute Conventions”. https://docs.unidata.ucar.edu/nug/current/attribute_conventions.html
[^2]: CF Conventions, “NetCDF Climate and Forecast (CF) Metadata Conventions 1.11”. https://cfconventions.org/Data/cf-conventions/cf-conventions-1.11/cf-conventions.html
[^3]: ESIP Federation, “SWEET reprDataProduct.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl

