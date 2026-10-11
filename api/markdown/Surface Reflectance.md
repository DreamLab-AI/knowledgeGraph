Surface reflectance is the dimensionless reflectance of the land surface that remains after the atmospheric contribution has been removed from top-of-atmosphere measurements.[^1][^2]

The CEOS Analysis Ready Data specification for surface reflectance requires pixel values to be expressed as a measurement of the Surface Reflectance of the land, and it describes this as a dimensionless value.[^1] It adds that radiometric corrections must lead to a valid measurement of surface reflectance.[^1]

In practice the quantity is a processing product. For Landsat 8-9, the LaSRC algorithm starts from top-of-atmosphere reflectance and applies atmospheric correction using water vapour and ozone retrieved from MODIS or VIIRS, plus a digital elevation model.[^2] For Sentinel-2, the Level-2A product provides atmospherically corrected Surface Reflectance from Level-1C products, and the term replaced the former name Bottom of Atmosphere reflectance.[^3]

Surface reflectance is not necessarily terrain-corrected. A review notes that most atmospheric correction routines assume a horizontal, Lambertian surface, and that the result can be converted to surface reflectance once the topography is known.[^4] Retained sources give no accuracy figure for any surface reflectance product.

[^1]: Committee on Earth Observation Satellites, “CEOS-ARD Product Family Specification: Surface Reflectance, version 5.0.2”. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf
[^2]: US Geological Survey, “Landsat 8-9 Collection 2 Level 2 Science Product Guide”. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf
[^3]: Copernicus SentiWiki, “S2 Products”. https://sentiwiki.copernicus.eu/web/s2-products
[^4]: SciELO México, “Atmospheric Correction for Remote Sensing Imagery”. https://www.scielo.org.mx/scielo.php?pid=S0016-71692026000202187&script=sci_arttext

