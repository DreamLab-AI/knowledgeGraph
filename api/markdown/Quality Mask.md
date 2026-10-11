A quality mask is a per-pixel layer that records which pixels of an Earth observation product are affected by conditions that reduce their usefulness, such as cloud, cloud shadow, snow or sensor saturation.[^1][^2]

USGS describes the Landsat quality assessment band as holding, for each pixel, a value that represents bit-packed combinations of surface, atmosphere and sensor conditions that can affect the overall usefulness of the pixel.[^1] In Collection 2 Level 2 products the QA_PIXEL band is created by the CFMask algorithm, itself derived from Fmask.[^2] For Harmonized Landsat Sentinel-2, NASA applies Fmask to derive per-pixel cloud, cloud shadow, snow or ice, and water masks, dilates cloud and cloud shadow by 150 metres, and adds the aerosol level.[^3]

A mask supports a decision and does not make it. USGS advises users to refer to the quality assessment bands for pixel-level condition and validity flags, and to use either the clear and cloud bits or the confidence levels but not both.[^2] The bit layout, class set and dilation are therefore choices of a particular mission and processor.

All retained sources are Landsat or HLS documents. They do not establish a mission-independent bit scheme, and the NASA processing levels page listed as a seed does not define the term, so this page does not cite it.

[^1]: USGS, “Landsat Quality Assessment (QA) Tools User Guide”. https://landsat.usgs.gov/sites/default/files/documents/landsat_QA_tools_userguide.pdf
[^2]: USGS, “Landsat 4-7 Collection 2 (C2) Level 2 Science Product (L2SP) Guide”. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1618_Landsat-4-7_C2-L2-ScienceProductGuide-v4.pdf
[^3]: NASA HLS, “Atmospheric Correction”. https://hls.gsfc.nasa.gov/atmospheric-correction/

