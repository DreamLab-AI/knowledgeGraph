Top-of-atmosphere reflectance is the reflectance of the whole Earth-atmosphere system as seen from above, obtained by converting calibrated radiance to a ratio against incoming solar irradiance.[^1][^2]

One teaching text describes it as the reflectance of the entire Earth-Atmosphere system, and notes that both the atmosphere and the surface influence it.[^1] A review states that it is also known as apparent reflectance.[^2]

Sentinel-2 Level-1C products provide Top Of Atmosphere reflectance images derived from Level-1B products.[^3] For Landsat 8-9, the LaSRC algorithm generates top-of-atmosphere reflectance using the calibration parameters from the metadata, and then applies atmospheric correction to that reflectance to reach surface reflectance.[^4]

Top-of-atmosphere reflectance is therefore an intermediate, sensor-side quantity that sits before atmospheric correction. Retained sources do not give a numerical error budget for the conversion from radiance, and they do not compare agencies' conventions for solar irradiance or scaling, so none is claimed here.

[^1]: LibreTexts Geosciences, “Calculations of TOA radiance and TOA reflectance”. https://geo.libretexts.org/Bookshelves/Geography_(Physical)/Remote_Sensing_(Knudby)/01:_Chapters/1.03:_Calculations_of_TOA_radiance_and_TOA_reflectance
[^2]: SciELO México, “Atmospheric Correction for Remote Sensing Imagery”. https://www.scielo.org.mx/scielo.php?pid=S0016-71692026000202187&script=sci_arttext
[^3]: Copernicus SentiWiki, “S2 Products”. https://sentiwiki.copernicus.eu/web/s2-products
[^4]: US Geological Survey, “Landsat 8-9 Collection 2 Level 2 Science Product Guide”. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf

