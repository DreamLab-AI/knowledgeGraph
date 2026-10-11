A measurement value is a number and reference together expressing the magnitude of a quantity, here as it is recorded in an Earth observation data product.[^1] The metrology vocabulary distinguishes a measured quantity value as one that represents a measurement result.[^1]

In data files, values are stored under attributes that say how stored numbers are read: a valid minimum, a fill value and a missing value marker qualify which stored numbers count as data.[^2] SWEET places its value class beneath its data class and lists minimum valid, missing value, offset and scale factor as subclasses, which treats these markers as kinds of value.[^3]

Retained sources do not establish a single definition used across Earth observation data products, nor how uncertainty is attached to each recorded value.

[^1]: JCGM, “International vocabulary of metrology (JCGM 200:2012)”. https://www.bipm.org/documents/20126/2071204/JCGM_200_2012.pdf
[^2]: Unidata, “NetCDF Users Guide, Appendix A: Attribute Conventions”. https://docs.unidata.ucar.edu/nug/current/attribute_conventions.html
[^3]: ESIP Federation, “SWEET reprDataProduct.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl

