Data completeness is the degree to which a dataset contains the data it is meant to contain, described in the ISO 19115-3 data quality model through omission, meaning data absent from the dataset, and commission, meaning excess data present, each as described by the scope.[^1]

In Earth observation products the idea appears mostly as flags. The CEOS Analysis Ready Data specification for surface reflectance asks that pixels not corresponding to an observation are flagged as no data. It also asks that metadata identify pixels for which the per-pixel tests were not all completed, for example where ancillary data were missing.[^2] Absence of an observation and absence of a quality test are therefore recorded separately.[^2]

Landsat 8-9 Level 2 products include quality assessment masks indicating the usefulness of the pixel data.[^3] Usefulness is a different property from presence, since a pixel affected by cloud is present but may be unusable for some applications.[^3]

Those sources give code-list definitions and product requirements, not a single formula. The GeoNetwork page is software documentation that reproduces the ISO code list, and the ISO 19157 text was not opened, so how a given provider measures omission or commission is not established here.[^1]

[^1]: GeoNetwork opensource, “ISO 19115-3:2018 standard documentation”. https://docs.geonetwork-opensource.org/4.2/annexes/standards/iso19115-3.2018/
[^2]: Committee on Earth Observation Satellites, *CEOS-ARD Product Family Specification: Surface Reflectance*, version 5.0.2, May 2026. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf
[^3]: US Geological Survey, *Landsat 8-9 Collection 2 Level 2 Science Product Guide*, LSDS-1619, version 6.0, May 2024. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf

