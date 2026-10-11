A calibrated data state is the processing state of data to which a calibration process has been applied, relating instrument indications to values realized by standards.[^1][^2]

SWEET defines Calibrated as a subclass of DataState restricted to data that had some Calibration process.[^1] NIST Technical Note 1551 defines calibration as a set of operations that establish the relationship between values indicated by a measuring instrument and the corresponding values realized by standards, and says the result permits assigning values of measurands to the indications or determining corrections to them.[^2]

NASA's Level 1A description records radiometric and geometric calibration coefficients as ancillary information, and Level 1B data are Level 1A data processed to instrument units.[^3] NOAA describes its AMSR-2 Level 2 products as calibrated, corrected, reformatted and flagged.[^4] The retained sources do not establish at which processing level calibration is applied for every instrument, so the state is bounded by the process that produced it rather than by a level number.

[^1]: ESIP Federation (SWEET), “SWEET stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: NIST and IEEE GRSS, “Recommended Terminology for Microwave Radiometry (NIST Technical Note 1551)”. https://www.grss-ieee.org/wp-content/uploads/2009/09/TN1551.pdf
[^3]: NASA Earthdata, “Data Processing Levels”. https://www.earthdata.nasa.gov/learn/earth-observation-data-basics/data-processing-levels
[^4]: NOAA, “AMSR-2 Microwave Brightness Temperatures”. https://vlab.noaa.gov/web/towr-s/amsr-2-mbt

