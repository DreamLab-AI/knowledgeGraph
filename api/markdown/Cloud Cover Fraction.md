Cloud cover fraction is a scene-level quality figure giving the proportion of observations affected by cloud, with some specifications also counting cloud shadow and restricting the count to land.[^1]

The CEOS Analysis Ready Data specification for surface reflectance gives overall cloud cover extent as the proportion of observations over land affected by non-target phenomena such as cloud and cloud shadow.[^1] The scene-level figure rests on per-pixel assessments. The same specification asks that metadata indicate whether each pixel is assessed as cloud, and the Landsat 8-9 Level 2 quality band carries cloud confidence, cloud shadow and snow or ice flags derived from the CFMask algorithm.[^1][^2] Fmask is a published algorithm for detecting clouds and cloud shadows in Landsat and Sentinel-2 imagery.[^3]

Landsat Level 2 example metadata lists one cloud cover element and a separate land cloud cover element, so a single product can carry more than one figure.[^2] The Copernicus Data Space Ecosystem STAC browser lets users filter Sentinel-2 Level 2A items on a cloud cover value when searching a catalogue.[^4]

A figure is only as consistent as the detection behind it. The Landsat guide defers the Collection 2 cloud cover assessment algorithm to a separate document, and these sources do not show how values compare between missions or algorithms.[^2] A scene-level fraction also does not say where the cloud lies, so a low value does not guarantee that a given area of interest is clear.

[^1]: Committee on Earth Observation Satellites, *CEOS-ARD Product Family Specification: Surface Reflectance*, version 5.0.2, May 2026. https://ceos.org/ard/files/PFS/SR/v5.0.2/CEOS-ARD-PFS-SR-v5.0.2.pdf
[^2]: US Geological Survey, *Landsat 8-9 Collection 2 Level 2 Science Product Guide*, LSDS-1619, version 6.0, May 2024. https://d9-wret.s3.us-west-2.amazonaws.com/assets/palladium/production/s3fs-public/media/files/LSDS-1619_Landsat8-9-Collection2-Level2-Science-Product-Guide-v6.pdf
[^3]: Geographic Environmental Remote Sensing Laboratory, “Fmask”. https://raw.githubusercontent.com/GERSL/Fmask/master/README.md
[^4]: Copernicus Data Space Ecosystem, “STAC product catalogue”. https://documentation.dataspace.copernicus.eu/APIs/STAC.html

