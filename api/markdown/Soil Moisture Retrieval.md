Soil moisture retrieval estimates near-surface soil water from microwave observations. A radiometer measures brightness temperature and a radar or scatterometer measures backscatter. Neither instrument observes volumetric water content directly. The retrieval uses the contrast between the dielectric properties of water and dry soil together with a model of temperature, vegetation, roughness and observation geometry.[^1][^2]

## Passive and active retrievals

Passive algorithms invert microwave emission. The SMAP Level-2 algorithms use the tau-omega radiative-transfer model to relate brightness temperature to soil moisture through ancillary soil texture, soil temperature and vegetation water content.[^3] ESA's Land Parameter Retrieval Model similarly solves for the soil-moisture value whose modelled brightness temperature best matches the observation, retrieving vegetation optical depth alongside soil moisture and surface temperature.[^1]

Active algorithms use changes in radar backscatter after normalising incidence angle and accounting for other surface effects. ASCAT's method assumes that roughness and land cover are invariant at the scatterometer footprint scale, that vegetation phenology repeats between years and that backscatter in decibels changes approximately linearly with soil moisture.[^4] Cultivation, vegetation change, urban surfaces or unusual roughness can violate those assumptions.

Active and passive retrievals differ in wavelength, footprint, penetration, units, ancillary data and algorithm. ESA CCI explicitly warns that Level-2 products produced by different algorithms may not represent precisely the same physical quantity.[^1] Its ACTIVE product applies the TU Wien change-detection method, while the PASSIVE product applies LPRM. The COMBINED product merges eligible retrievals only after error characterisation and bias matching or rescaling.

## Surface layer and exclusions

Satellite surface soil moisture describes a shallow sensing layer. SMAP's baseline mission requirement refers to the top 5 cm, while the cited SMAP-Sentinel document notes that C- and X-band radiometers can sense less than 2 cm.[^5] Effective depth varies with wavelength, wetness, soil texture and surface conditions. A root-zone value is a different modelled quantity.

Vegetation attenuates and scatters the soil signal. Radar also responds strongly to surface roughness, while radiometric emission depends on physical temperature.[^2][^5] Dense vegetation, snow, frozen soil, open water, precipitation, steep terrain, urban cover and radio-frequency interference can degrade or prevent retrieval. SMAP and ASCAT therefore distribute processing, quality or advisory flags for these conditions.[^3][^4] Analysts should treat a flagged numerical value according to the product guide rather than assume it remains equally valid.

Retrieval design also trades spatial resolution against sensitivity. The SMAP-Sentinel ATBD describes the radiometer as coarse but more sensitive to soil moisture and the radar as finer but more affected by vegetation and roughness.[^5] Downscaling or active-passive fusion can create a finer grid, but ancillary-data error and registration mismatch become part of the retrieval uncertainty.

## Merging, assimilation and validation

ESA CCI merges multiple sensors into long records. Its workflow includes error characterisation, matching, rescaling and weighted combination; sensor changes and algorithm updates can introduce temporal breaks.[^1][^6] The associated peer-reviewed analysis explains that triple-collocation error estimates are used where reliable and vegetation-optical-depth regression fills some gaps in uncertainty information.[^6] A merged value is consequently an algorithmic estimate with a named reference climatology, not a simple mean of independent measurements.

Assimilation adds another layer. The Met Office used the JULES land-surface model and an extended Kalman filter to derive soil-moisture increments from ASCAT observations and screen-level temperature and humidity errors.[^7] The resulting analysis is a model state constrained by observations. It should not be labelled as the original satellite retrieval.

Validation must address depth, time and scale. A point probe does not automatically represent a microwave footprint tens of kilometres across. CEOS guidance covers sensor calibration, representative sampling, spatial scaling, root-zone estimation and long-term stability, and identifies the International Soil Moisture Network as the main in-situ repository.[^8] SMAP validation sites use networks intended to approximate grid-cell means for the upper soil layer.[^5]

Version matters. The CEDA version 08.1 COMBINED record is published but explicitly superseded, while ESA's current document index lists version 09.2 user and validation documents.[^9][^10] Users should record the input products, algorithm, scaling reference, flags, uncertainty fields and release version, and should not transfer validation results between releases without checking what changed.

## References

[^1]: ESA Climate Change Initiative, [Soil Moisture Algorithm Theoretical Baseline Document, version 09.0](https://climate.esa.int/documents/3007/ESA_CCI_SM_RD_D2.4_v2.0_ATBD_v09.0_I1.0.pdf).
[^2]: EUMETSAT, [Towards better flood and drought monitoring](https://www.eumetsat.int/features/towards-better-flood-and-drought-monitoring).
[^3]: National Snow and Ice Data Center, [SMAP L2 radiometer soil-moisture user guide, version 5](https://nsidc.org/sites/default/files/documents/user-guide/spl2smp-v005-userguide.pdf).
[^4]: EUMETSAT, [ASCAT Soil Moisture Product Handbook](https://user.eumetsat.int/s3/eup-strapi-media/pdf_soilmoisture_prod_hb_1d71a1af97.pdf).
[^5]: NASA/JPL and NSIDC, [SMAP-Sentinel active-passive soil-moisture ATBD](https://nsidc.org/sites/default/files/spl2smap_s_atbd_2019.pdf).
[^6]: Gruber et al., [Evolution of ESA CCI Soil Moisture climate data records and their merging methodology](https://essd.copernicus.org/articles/11/717/2019/).
[^7]: Met Office, [Parallel Suite 43 release notes](https://www.metoffice.gov.uk/services/data/met-office-data-for-reuse/ps43_ftp).
[^8]: CEOS WGCV, [Soil moisture product validation good practices protocol](https://www.usgs.gov/publications/soil-moisture-product-validation-good-practices-protocol-version-10).
[^9]: CEDA, [ESA Soil Moisture CCI COMBINED product, version 08.1](https://catalogue.ceda.ac.uk/uuid/6f99cdb86a9e4d3da2d47c79612c00a2/).
[^10]: ESA Climate Change Initiative, [Soil Moisture key documents](https://climate.esa.int/en/projects/soil-moisture/soil-moisture-key-documents/).

