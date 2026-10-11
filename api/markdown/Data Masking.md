Data masking in Earth observation is the use of per-pixel flag layers that mark observations assessed as, for example, cloud, cloud shadow, land or water, or snow or ice, so that users can select or exclude them during analysis.[^1]

The CEOS Analysis Ready Data specification for surface reflectance says per-pixel metadata should allow users to discriminate between observations on the basis of their individual suitability for an application. Cloud and cloud shadow flags are threshold items in that specification, while land and water, and snow and ice, flags are goal items.[^1] A mask records an assessment, and the decision to drop flagged pixels remains with the user.[^1]

The Landsat 8-9 Level 2 QA_PIXEL band carries cloud confidence, cloud shadow and snow or ice flags derived from the CFMask algorithm. The product guide says water values are recalculated and high-confidence cloud pixels are dilated, so the layer is not a raw detection result.[^2] Fmask is a separate, openly documented algorithm that detects clouds and cloud shadows in Landsat 4-9 and Sentinel-2 imagery.[^3] These sources do not compare its output with the CFMask flags, so the choice of algorithm and version should be recorded with a mask.[^2][^3]

These sources concern quality and classification masks on image data. They do not cover masking in the sense of hiding sensitive values, and the page should not be read as evidence about that use.

[^1]: Committee on Earth Observation Satellites, *CEOS-ARD Product Family Specification: Surface Reflectance*, version 5.0.2, May 2026. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf
[^2]: US Geological Survey, *Landsat 8-9 Collection 2 Level 2 Science Product Guide*, LSDS-1619, version 6.0, May 2024. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf
[^3]: Geographic Environmental Remote Sensing Laboratory, “Fmask”. https://raw.githubusercontent.com/GERSL/Fmask/master/README.md

