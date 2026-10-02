Change detection uses observations from two or more times to locate differences in a surface state or in its spectral behaviour. The immediate result is an observed difference or a statistical break. Explaining it as construction, fire, flood, vegetation stress or a lasting land-cover conversion is a further inference that usually needs classification and contextual evidence.

## Pairwise products and time-series models

A mapped change product may compare selected dates directly or model the trajectory of repeated observations. The US Geological Survey's Continuous Change Detection and Classification method fits harmonic models to clear Landsat observations for each pixel. Several later observations must confirm a possible break before the system records its timing and magnitude.[^1] Cloud or missing data can therefore delay detection.

A recorded break marks a departure from expected spectral behaviour; it does not identify the mechanism. LCMAP notes that a break can reflect a land-cover transition or a change in condition, such as disturbance followed by recovery.[^1] Fire records, field observations, planning data or another independent source are needed to support a causal account.

Sampling also affects results. Observation frequency varies with cloud, orbit and the historical sensor record. A peer-reviewed USGS study found that this irregularity can make Continuous Change Detection and Classification results inconsistent through time and across space; its band-first probability modification improved consistency in the tested data.[^2] That result supports careful validation rather than a claim that one algorithm solves every change problem.

## Product definitions and scale

Change depends on the product's spatial and thematic rules. CORINE Land Cover uses different minimum mapping units for status and change layers. Its guidance says users should use the dedicated change product rather than intersecting two status maps, because revisions, generalisation and the different mapping units would be mixed with real environmental change.[^3] A feature below the minimum area or width can be absent even though change occurred on the ground.

Reliable comparison also depends on stable geolocation, radiometry, atmospheric correction and quality masking. Residual cloud, shadow, atmosphere, seasonal vegetation and different observation density can all resemble change. Uncertainty should therefore cover input quality, temporal support, model threshold, mapping scale and validation against independent reference data.

The UK's Earth Observation Data Hub has offered Sentinel-1 and Sentinel-2 analysis-ready data for the UK, processing environments and applications for land-cover change.[^4] This reduces data preparation, but the analyst must still choose a method and interpretation suited to the place, period and change being studied. Access and service terms should be checked because the cited NCEO announcement was published in February 2026.

## References

[^1]: US Geological Survey, [LCMAP: Time of Spectral Change and Spectral Change Magnitude](https://www.usgs.gov/media/videos/lcmap-time-spectral-change-spectral-change-magnitude).
[^2]: Heather J. Tollerud et al., [Toward consistent change detection across irregular remote sensing time series observations](https://www.usgs.gov/publications/toward-consistent-change-detection-across-irregular-remote-sensing-time-series), *Remote Sensing of Environment* 285 (2023), article 113372.
[^3]: Copernicus Land Monitoring Service, [CORINE Land Cover FAQ](https://land.copernicus.eu/en/faq/products/corine-land-cover); see also the [product overview](https://land.copernicus.eu/en/products/corine-land-cover/?tab=technical_summary).
[^4]: National Centre for Earth Observation, [EO DataHub user access](https://www.nceo.ac.uk/news-media/call-for-expressions-of-interest-eo-datahub-user-access/).

