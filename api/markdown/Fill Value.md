A fill value is a reserved data value written into a variable to stand for undefined or missing data.[^1][^2]

The CF conventions describe the netCDF _FillValue attribute as a special value that indicates undefined or missing data and is returned when reading values that were not written.[^1] SWEET places fill value as a subclass of Value, which fits its use as a marker within a data array rather than a measurement.[^2]

The CF conventions require the _FillValue to lie outside the valid range when one is used, and they say that values identified as missing should not be transformed.[^1] The NOAA cooperative profile treats missing_value as a separate conventional name that the library does not handle specially, and it does not endorse any particular interpretation of the distinction between missing_value and _FillValue.[^3]

Retained sources do not establish a fill value convention outside netCDF and CF, such as in GeoTIFF NoData tags or HDF products, and they do not say which value a given archive uses.

[^1]: CF Conventions, “Variables (Conventions for CF Metadata 1.7, section 2.5)”. https://cfconventions.org/Data/cf-conventions/cf-conventions-1.7/build/ch02s05.html
[^2]: ESIP SWEET, “reprDataProduct.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl
[^3]: NOAA PMEL, “COARDS netCDF profile”. https://ferret.pmel.noaa.gov/noaa_coop/coop_cdf_profile.html

