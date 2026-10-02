Land surface temperature (LST) is the radiometric skin temperature of the surface components within a sensor's field of view. A forest pixel mainly represents the canopy; a bare-soil pixel represents the ground; sparse vegetation can mix soil and leaf temperatures. LST is distinct from the air temperature measured above the surface, although surface and atmosphere exchange heat and influence one another.[^1][^2]

## From radiance to temperature

A thermal infrared instrument measures spectral radiance, often expressed first as brightness temperature. The radiance reaching the sensor depends on surface temperature and wavelength-dependent emissivity, as well as atmospheric absorption and emission. Retrieving LST therefore requires an atmospheric correction and either prescribed or jointly retrieved emissivity. It is an inverse estimate rather than a thermometer reading of a uniform surface.[^2]

Algorithms resolve this problem in different ways. The University of Leicester processing chain for the ESA Climate Change Initiative multisensor record uses a generalised split-window retrieval.[^3] NASA's MOD21 product uses temperature-emissivity separation across three MODIS thermal bands, while other MODIS products use split-window or day/night methods.[^4] The resulting products can differ because their bands, emissivity treatment, atmospheric inputs and assumptions differ.

Thermal infrared LST is ordinarily available only in clear sky. Under opaque cloud, the radiometer observes cloud-top emission rather than land-surface emission, so the CEDA record does not produce an LST value.[^3] Clear-sky sampling can itself be selective: persistent cloud removes particular places, seasons and weather states. A gridded time mean is consequently not an all-weather mean unless another observation or model supplies the missing conditions.

## Geometry and surface mixtures

View angle changes atmospheric path length and the proportions of soil, leaves, walls and roofs visible to a sensor. The cited CEDA product discards observations above a 60° satellite zenith angle because uncertainty rises near the edge of a geostationary disc.[^3] This threshold is a product rule. Other sensors and algorithms require their own angular limits.

Sub-pixel heterogeneity also complicates validation. A satellite pixel several kilometres across can contain surfaces with different temperatures and emissivities. NCEO notes that a ground radiometer intended to validate such a pixel must sample land cover representative of that footprint.[^5] A precise point observation can still be an unsuitable reference if it observes a different surface ensemble or time.

## Calibration, uncertainty and maturity

Instrument calibration and product validation answer different questions. NCEO calibrates field radiometers against traceable blackbody sources, including a source calibrated to an NPL standard.[^5] This establishes the radiometer response. Comparing the calibrated reference with a satellite retrieval then tests the retrieval, provided temporal alignment, atmospheric path, emissivity and spatial representativeness are addressed.

The CEDA version 3.00 record supplies per-pixel total uncertainty and components grouped by correlation length, along with observation time and viewing and solar geometry.[^3] Correlated uncertainty matters when pixels or times are aggregated: an error common to one instrument or processing period does not average away like independent noise. Users should retain the uncertainty fields, quality flags, input sensor, retrieval algorithm and version.

CEOS reported stage 3 as the highest validation stage reached for satellite-derived LST and emissivity when the page was retrieved on 2 October 2026.[^2] Stage 3 means uncertainty has been assessed over representative conditions using agreed practice, with spatial and temporal consistency evaluated.[^6] It is a maturity statement for qualifying products, not a universal sub-kelvin guarantee. The CEDA record is marked ongoing and citable, so its version and coverage dates remain part of any result.[^3]

## References

[^1]: National Centre for Earth Observation, [Land Surface Temperature](https://www.nceo.ac.uk/our-research/climate-analysis/land-surface-temperature/).
[^2]: CEOS Land Product Validation Subgroup, [LST and emissivity focus area](https://lpvs.gsfc.nasa.gov/LSTE/LSTE_home.html).
[^3]: CEDA, [ESA LST CCI three-hourly multisensor IR product, version 3.00](https://catalogue.ceda.ac.uk/uuid/6ab837fc79e4487a9930a221b294df01/).
[^4]: NASA Technical Reports Server, [MOD21 Land Surface Temperature and Emissivity Algorithm Theoretical Basis Document](https://ntrs.nasa.gov/citations/20160009380).
[^5]: National Centre for Earth Observation, [Instrument Development Laboratory](https://www.nceo.ac.uk/data-facilities/laboratories/instrument-development-laboratory/).
[^6]: CEOS Land Product Validation Subgroup, [Validation hierarchy](https://lpvs.gsfc.nasa.gov/).

