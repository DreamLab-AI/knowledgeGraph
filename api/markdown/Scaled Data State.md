A scaled data state is the condition of a dataset whose stored values have been transformed by a scale factor, usually with an additive offset, so that physical values are recovered only by applying the stated transformation.[^1][^2]

In netCDF practice the transformation is called packing: values are stored in a smaller data type than the original, for example double-precision values packed into short integers.[^1] The CF conventions state that after reading, values are multiplied by the scale_factor and have add_offset added, with scaling applied before the offset.[^2] On writing, the application subtracts the offset and then divides by the scale factor.[^2]

Packing trades precision for volume. CF describes it as altering the data in a way that reduces its precision with no other effect on accuracy, and the Unidata guide advises rounding to the nearest integer when packing so that truncation does not bias the unpacked values.[^2][^1]

Both retained sources are netCDF and CF documents. They do not establish how a scaled state relates to calibrated or normalised states in satellite products, nor a general definition outside packed storage.

[^1]: Unidata, “NetCDF Users Guide: Writing NetCDF Files: Best Practices”. https://docs.unidata.ucar.edu/nug/current/best_practices.html
[^2]: CF Conventions, “NetCDF Climate and Forecast (CF) Metadata Conventions”. https://cfconventions.org/Data/cf-conventions/cf-conventions-1.11/cf-conventions.html

