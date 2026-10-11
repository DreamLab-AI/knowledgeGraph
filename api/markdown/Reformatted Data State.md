Reformatted data state is the SWEET data-processing state of data that have been through a reformatting process, meaning a conversion from one data format to another.[^1][^2]

In the SWEET state module the class Reformatted is a subclass of DataState with a hadProcess restriction to Reformat.[^1] The data-service module declares Reformat equivalent to Reformatting and to FormatConversion, and places it under DataService.[^2]

NASA services show the process in practice. NSIDC lists reformatting among customisation options beside reprojecting and spatial or parameter subsetting, and one Harmony service combines regridding with reformatting to GeoTIFF.[^3] The NASA data product guide adds that, given sufficient user demand for a particular output format, EOSDIS can usually provide reformatting services.[^4]

Conversion is not guaranteed to be numerically neutral: the same guide notes that different software reading a file could convert values expressed in ASCII to slightly different floating-point numbers.[^4] Retained sources do not establish whether a reformatted product keeps the lineage or processing level of its source, or how the state is recorded in metadata.

[^1]: ESIP SWEET ontology (GitHub mirror), “stateDataProcessing.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: ESIP SWEET ontology (GitHub mirror), “reprDataService.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataService.ttl
[^3]: NSIDC DAAC, “Search, order, and customize NSIDC DAAC data with NASA Earthdata Search”. https://nsidc.org/data/user-resources/help-center/search-order-and-customize-nsidc-daac-data-nasa-earthdata-search
[^4]: NASA Earthdata, “Data Product Development Guide for Data Producers V2.0”. https://www.earthdata.nasa.gov/engage/data-producer-resources/data-product-development-guide-producers-v2

