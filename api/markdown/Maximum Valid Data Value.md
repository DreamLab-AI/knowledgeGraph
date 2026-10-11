Maximum valid data value is the upper limit of the range of values accepted as valid for a variable [^1].

The SWEET ontology makes the class a subclass of its value class, alongside the minimum valid value [^1]. The CF conventions show how such a bound is used, since they define missing data as all values outside the valid range [^2]. Applications that handle both a scale or offset and missing values should first check that a value is valid and then apply the transformation, so the bound is tested against stored values [^2].

Beyond that convention, the retained sources do not define a maximum valid value as a separate attribute, and they give no numeric limits.

[^1]: ESIP SWEET ontology (GitHub), “SWEET Representation Data Product (Turtle)”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl
[^2]: CF Conventions, “NetCDF Climate and Forecast (CF) Metadata Conventions”. https://cfconventions.org/Data/cf-conventions/cf-conventions-1.11/cf-conventions.html

