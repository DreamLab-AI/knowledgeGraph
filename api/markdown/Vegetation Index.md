A vegetation index is a mathematical combination of spectral reflectances designed to emphasise vegetation-related contrast. The sensor first measures radiance. Calibration, atmospheric correction and, for some products, correction for viewing and illumination geometry produce the reflectances used in the index. The index is therefore a derived spectral quantity rather than a direct measurement of plant health, biomass or productivity.[^1][^2]

## Spectral definition

Normalised Difference Vegetation Index (NDVI) is the most widely used example:

`NDVI = (R_NIR - R_red) / (R_NIR + R_red)`

Here, R denotes reflectance in the near-infrared and red bands. Green leaves absorb much of the visible red light used in photosynthesis and reflect strongly in the near-infrared, giving vegetated surfaces a positive contrast.[^1] The normalised ratio has a mathematical range from −1 to +1. Those limits do not supply universal ecological thresholds: water, snow, bare soil, senescent vegetation and mixed pixels can produce overlapping values.

Copernicus calls NDVI a proxy for vegetation amount, while MODIS describes canopy greenness as a composite of leaf area, chlorophyll and canopy structure.[^2][^3] A lower value may reflect reduced leaf area or chlorophyll, but also harvest, cold, cloud contamination, soil exposure, a change of view angle or a different sensor response. Inferring drought, disease or land-management cause requires other observations and a tested interpretation.

## Sensitivity and saturation

NDVI loses sensitivity as a dense canopy increasingly absorbs red light. This behaviour is commonly called saturation, although it is a gradual loss of response rather than a single global threshold.[^1][^4] In sparse vegetation, soil brightness, soil moisture and canopy background can have a substantial influence. Band placement and width also differ between sensors, so equivalent-looking NDVI products are not automatically interchangeable.

Cloud, cloud shadow, aerosol and illumination geometry can corrupt optical indices. Atmospheric and bidirectional-reflectance corrections reduce specified effects but cannot recover a surface hidden by opaque cloud. MODIS therefore derives its vegetation indices from atmosphere-corrected bidirectional surface reflectance and applies quality-guided compositing.[^2] Copernicus Collection 300 m NDVI uses BRDF-normalised top-of-canopy reflectance and distributes uncertainty, observation-count and quality layers with the index.[^3]

## Time series and validation

A composite value is not necessarily an average over its nominal period. The MODIS algorithm screens daily observations, takes the two highest acceptable NDVI values and selects the one viewed closest to nadir.[^2] That choice reduces cloud and angular effects but means the output represents a selected acquisition. Trend analysis should retain acquisition timing, quality flags, compositing rule, observation count, sensor, processing baseline and any cross-sensor harmonisation.

Validation also belongs to a named product version. The MODIS product page reports CEOS validation stage 3 for its vegetation-index suite.[^2] CEOS defines this as uncertainty quantified over representative locations and periods using community good practice, alongside spatial and temporal consistency assessment.[^5] The stage is evidence about validation coverage and maturity. It does not give every pixel the same error or transfer automatically to an index calculated from another sensor.

## References

[^1]: NASA Science, [Measuring Vegetation: NDVI and EVI](https://science.nasa.gov/earth/earth-observatory/measuring-vegetation-ndvi-evi/).
[^2]: NASA MODIS, [Vegetation Index products](https://modis.gsfc.nasa.gov/data/dataprod/mod13.php).
[^3]: Copernicus Global Land, [NDVI 300 m version 2 Product User Manual](https://land.copernicus.eu/en/technical-library/product-user-manual-normalised-difference-vegetation-index-333-m-version-2/%40%40download/file).
[^4]: NASA MODIS, [Vegetation Index Algorithm Theoretical Basis Document](https://modis.gsfc.nasa.gov/data/atbd/atbd_mod13.pdf).
[^5]: CEOS Land Product Validation Subgroup, [Validation hierarchy](https://lpvs.gsfc.nasa.gov/).

