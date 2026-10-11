A cloud shadow mask is a per-pixel layer that records which observations have been assessed as lying in the shadow cast by cloud.[^1][^2]

The CEOS Analysis Ready Data specification lists cloud shadow as a separate pixel-level item from cloud, with its own identifier.[^1] The Landsat Level 2 quality band likewise carries a cloud shadow flag and a cloud shadow confidence field alongside the cloud flags.[^2]

Fmask states that its cloud shadow detection relies on the physical geometric relationship between identified clouds and their corresponding shadows.[^3] In that algorithm a shadow flag therefore depends on the cloud detection that precedes it.[^3]

Retained sources do not establish how often shadow detection fails, nor how terrain shadow differs in practice. CEOS lists terrain shadow as a distinct mask, and this page does not cover it.[^1]

[^1]: Committee on Earth Observation Satellites, “CEOS-ARD Product Family Specification: Surface Reflectance”. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf
[^2]: US Geological Survey, “Landsat 8-9 Collection 2 Level 2 Science Product Guide”. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf
[^3]: Geographic Environmental Remote Sensing Laboratory, “Fmask”. https://raw.githubusercontent.com/GERSL/Fmask/master/README.md

