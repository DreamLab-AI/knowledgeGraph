Atmospheric correction estimates how a surface would appear without the scattering and absorption between it and a satellite sensor. The detector observes radiance, from which a calibrated top-of-atmosphere quantity may be produced. Bottom-of-atmosphere or surface reflectance is then retrieved through a physical model. It is not a direct measurement of the ground.

## From sensor signal to surface estimate

Molecules and aerosols change an optical observation through scattering, while gases including water vapour and ozone absorb radiation. A correction processor combines the satellite observation with viewing and illumination geometry, estimates of atmospheric state, terrain and a radiative-transfer model. Sentinel-2's Sen2Cor processor derives aerosol optical thickness and water-vapour maps before retrieving surface reflectance from look-up tables.[^1]

Measured radiance couples the atmospheric and surface contributions, so the inversion cannot completely separate them from that value alone. Sen2Cor therefore makes modelling choices, including Lambertian surface reflectance and a constant viewing angle within each 30 × 30 km sub-scene.[^1] Actual surfaces can reflect differently by direction, while aerosol and water vapour vary across a scene. The result is a model-conditioned estimate whose assumptions and processing baseline belong in its provenance.

Copernicus Sentinel-2 Level-2A packages orthorectified surface reflectance with scene classification, cloud and cloud-shadow classes, aerosol optical thickness and water-vapour layers.[^2] Those supporting layers are part of using the reflectance correctly rather than optional decoration.

## Uncertainty and quality screening

Correction quality changes with atmosphere, surface type and geometry. Low Sun angles lengthen the atmospheric path; bright, snow-covered, coastal and cloudy scenes can make aerosol or surface retrieval difficult. The Sen2Cor algorithm document warns that observations above a 70° solar-zenith angle are processed using a clipped angle, which can under-correct the atmospheric signal.[^1]

Validation must be tied to a processor version. A 2018 Sentinel-2 quality report, based on Sen2Cor 2.4 and 2.5.3, found that 97% of evaluated water-vapour retrievals met their stated requirement but only 39% of aerosol-optical-thickness retrievals did.[^3] This is evidence about those versions and tests, not a performance claim for every later baseline.

Quality flags remain necessary after correction. Landsat surface-reflectance products likewise include per-pixel quality bands for adverse instrument, atmospheric and surface conditions, including cloud contamination.[^4] Analysts should retain these masks, scale factors and processor metadata, and should treat invalid or high-uncertainty pixels as missing rather than as corrected measurements.

## References

[^1]: Copernicus Sentinel programme, [Sentinel-2 Level-2A Algorithm Theoretical Basis Document](https://sentinels.copernicus.eu/documents/247904/446933/Sentinel-2-Level-2A-Algorithm-Theoretical-Basis-Document-ATBD.pdf).
[^2]: Copernicus Sentinel programme, [Sentinel-2 Collection 1 MSI Level-2A](https://sentinels.copernicus.eu/-/collection-1-level-2a).
[^3]: Copernicus Sentinel programme, [Sentinel-2 Level-2A Data Quality Report](https://sentinels.copernicus.eu/documents/247904/3912630/Sentinel-2-L2A-Data-Quality-Report/e2981cd6-bb5e-4351-8b7f-fdb87a418727?version=1.1).
[^4]: US Geological Survey, [Landsat Surface Reflectance Quality Assessment](https://www.usgs.gov/landsat-missions/landsat-surface-reflectance-quality-assessment).

