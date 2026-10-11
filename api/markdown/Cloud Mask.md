A cloud mask is a per-pixel layer that records which observations in an image have been assessed as cloud, so that users can select or exclude them.[^1][^2]

The CEOS Analysis Ready Data specification for surface reflectance requires metadata that indicates whether a pixel is assessed as being cloud.[^1] It also asks for a scene-level cloud cover extent, which is a proportion rather than a pixel flag, so the two should not be confused.[^1]

In the Landsat Level 2 quality band, cloud confidence flags come from the CFMask algorithm, and high-confidence cloud pixels are dilated.[^2] Fmask is a separate, openly documented algorithm that detects clouds in Landsat and Sentinel-2 imagery and recommends a cloud dilation setting per sensor.[^3]

A cloud mask is therefore a product of a chosen algorithm and version, not an observed quantity. The retained sources do not compare the accuracy of the algorithms, so none is claimed.

[^1]: Committee on Earth Observation Satellites, “CEOS-ARD Product Family Specification: Surface Reflectance”. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf
[^2]: US Geological Survey, “Landsat 8-9 Collection 2 Level 2 Science Product Guide”. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf
[^3]: Geographic Environmental Remote Sensing Laboratory, “Fmask”. https://raw.githubusercontent.com/GERSL/Fmask/master/README.md

