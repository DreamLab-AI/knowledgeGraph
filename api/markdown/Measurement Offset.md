Measurement offset is the constant added to a stored value to recover the measurement it represents [^1][^2].

The SWEET ontology makes offset a subclass of its value class [^1]. In the CF conventions, packing reduces data volume by reducing the precision of the stored numbers, and when packed data are read the values are scaled before the offset is added [^2]. When scaled data are written, the application first subtracts the offset and then divides by the scale factor [^2].

Within that packing convention only, the retained sources describe the offset, so other uses of the term, such as instrument calibration offsets, are not established.

[^1]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Product (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl
[^2]: CF Conventions, “NetCDF Climate and Forecast (CF) Metadata Conventions”. https://cfconventions.org/Data/cf-conventions/cf-conventions-1.11/cf-conventions.html

