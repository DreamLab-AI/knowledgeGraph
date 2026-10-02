The Enhanced Vegetation Index (EVI) is a spectral vegetation index designed to reduce canopy-background and aerosol effects and to retain more sensitivity than NDVI in dense vegetation. It remains a calculation from corrected reflectances. “Enhanced” describes those algorithm goals; it does not make EVI a direct measurement of biomass, leaf area, crop health or drought.[^1][^2]

## Algorithm

The MODIS Algorithm Theoretical Basis Document defines EVI as:

`EVI = (1 + L)(R_NIR - R_red) / (R_NIR + C1 R_red - C2 R_blue + L)`

For that implementation, the document gives L = 1, C₁ = 6.0 and C₂ = 7.5.[^3] L adjusts for canopy background. Blue and red coefficients use their wavelength-dependent response to aerosol scattering to stabilise the red-band term. These empirical parameters form part of the MODIS product definition; an implementation with different bands, coefficients or preprocessing is a different retrieval even if it carries the same EVI name.

MODIS computes EVI from atmosphere-corrected red, near-infrared and blue bidirectional surface reflectance.[^2] Calibration, atmospheric correction, co-registration and angular treatment therefore precede the formula. Applying it directly to uncorrected digital numbers or mixing bands acquired at different resolutions changes the quantity.

## Behaviour and limits

NDVI loses sensitivity in a dense green canopy as red reflectance approaches a low value. NASA describes EVI as not saturating as easily and MODIS as improving sensitivity under dense vegetation.[^1][^2] This is a relative claim. EVI can still lose sensitivity, and its response continues to depend on canopy structure, illumination, view geometry and the surface within the pixel.

Blue-band correction reduces a specified aerosol effect; it does not see through cloud or guarantee complete atmospheric correction. Thick aerosol, cloud, cloud shadow and sensor artefacts can make a retrieval invalid.[^1][^3] Sparse-canopy EVI can still reflect soil and background conditions. Because EVI includes a blue band and empirical coefficients, it may also respond differently from NDVI to residual correction error and sensor spectral response.

MODIS uses quality information to remove poor observations and produces 16-day composites.[^2][^3] Its constrained-view-angle procedure selects a representative acquisition rather than calculating a simple 16-day average. Users should preserve the observation date, input reflectances, quality flags, aerosol and cloud state, view geometry, compositing method and processing version.

## Interpretation and validation

EVI can track relative canopy change when acquisition and processing are comparable. A falling series may accompany senescence, harvest, disturbance, water stress or cloud contamination. The index alone cannot distinguish these causes. Relationships with leaf area, biomass, yield or productivity need field evidence or a separately validated model for the crop, biome, season and spatial scale.

The MODIS vegetation-index suite reports CEOS validation stage 3.[^2] CEOS stage 3 requires uncertainty to be assessed across representative locations and periods using community-agreed practice.[^4] This maturity statement applies to the named product and version. An EVI computed locally from another sensor does not inherit it.

## References

[^1]: NASA Science, [Measuring Vegetation: NDVI and EVI](https://science.nasa.gov/earth/earth-observatory/measuring-vegetation-ndvi-evi/).
[^2]: NASA MODIS, [Vegetation Index products](https://modis.gsfc.nasa.gov/data/dataprod/mod13.php).
[^3]: NASA MODIS, [Vegetation Index Algorithm Theoretical Basis Document](https://modis.gsfc.nasa.gov/data/atbd/atbd_mod13.pdf).
[^4]: CEOS Land Product Validation Subgroup, [Validation hierarchy](https://lpvs.gsfc.nasa.gov/).

