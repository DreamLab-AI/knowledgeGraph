Atmospheric composition monitoring measures or estimates the gases and particles in the atmosphere, their vertical distribution and their change through time. The observing system includes satellite radiances, ground and airborne instruments, emissions inventories and atmospheric models. These components do not measure the same quantity. Their combination can extend coverage and support forecasts, but it also adds assumptions that must remain visible.

## From radiance to composition

A satellite spectrometer measures radiance in selected wavelength bands. A retrieval algorithm then estimates a geophysical quantity such as a total column, tropospheric column or vertical profile. Sentinel-5P/TROPOMI Level-1B contains geolocated, radiometrically corrected radiance; Level-2 contains retrieved atmospheric parameters.[^1] ESA's near-real-time service covers ozone, sulphur dioxide, nitrogen dioxide, formaldehyde, carbon monoxide, cloud and aerosol products, with a three-hour delivery target for selected Level-2 products. Slower processing can use additional calibration and retrieval inputs.

Vertical quantity matters. GCOS defines separate products for carbon-monoxide mole fraction and tropospheric column, nitrogen-dioxide mole fraction and tropospheric column, and formaldehyde and sulphur-dioxide columns. Each has distinct resolution, timeliness, uncertainty and stability requirements.[^2] A column integrates material through part or all of the atmosphere. It is not a direct measurement of the concentration at breathing height.

Cloud, surface reflectance, viewing geometry, sunlight and the assumed vertical profile affect retrieval sensitivity and usable coverage. Quality filtering removes unreliable scenes but leaves non-random gaps. TROPOMI has had an operational validation service since 2018. Its current consolidated report covers April 2018 to May 2026 and compares products using automated monitoring, focused studies, validation projects and feedback from the Copernicus Atmosphere Monitoring Service.[^3] Users still need the quality flags, product readme and processor version for the variable they analyse.

## UK research and operations

The National Centre for Earth Observation at Leicester retrieves, validates and analyses carbon monoxide and other reactive trace gases from instruments including IASI and CrIS. Its IASI record spans about 15 years and supports trend research.[^4] Carbon monoxide illustrates the attribution problem: fires, transport, industry and domestic combustion can all contribute. An enhancement identifies atmospheric material, while assigning a source requires transport, chemistry and other evidence.

The Met Office operates the Air Quality in the Unified Model forecasting system. AQUM combines pollutant emissions with meteorology and chemical evolution and is subject to near-real-time verification.[^5] It predicts concentrations rather than observing them directly. Forecast skill can vary by pollutant, weather regime and location, especially where emissions or chemical processes are poorly represented.

Data assimilation connects observations and models. NCEO describes it as the integration of satellite measurements, ground observations and computer models, using mismatches to improve forecasts, reanalyses and understanding of the Earth system.[^6] Assimilation can produce a complete field from incomplete observations because a model carries information into unobserved places and times. A complete map should not be read as complete measurement coverage.

## Operational products and status

CAMS produces daily global forecasts and European air-quality forecasts. Its global system assimilates satellite observations into a model, while its European system combines several regional models. Reanalysis applies a consistent system to observations from past decades for scientific and trend work.[^7] Forecast, analysis and reanalysis are separate products: forecasts project forward, analyses estimate the current state, and reanalyses trade timeliness for temporal consistency.

CAMS classifies observation streams as assimilated, monitored or planned. Only assimilated streams constrain the named production system. Its real-time global system uses four-dimensional variational assimilation to initialise a five-day forecast; a delayed system runs several days behind so that slower research-satellite data can be included.[^8] Fire radiative power is also used to estimate biomass-burning emissions. That estimate depends on an emission model and is not a direct measurement of emitted mass.

An atmospheric-composition result should therefore state the species, vertical quantity, time window, processing mode, quality screening and uncertainty. Surface exposure, satellite column, emission estimate and model forecast answer different questions. Attribution requires a physical chain from source through transport and chemistry to the observed or retrieved signal.

## References

[^1]: European Space Agency, [Sentinel-5P data products](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-5P/Data_products).
[^2]: Global Climate Observing System, [Precursors for Aerosols and Ozone](https://gcos.wmo.int/site/global-climate-observing-system-gcos/essential-climate-variables/precursors-aerosols-and-ozone).
[^3]: Sentinel-5P Mission Performance Centre, [Quarterly Validation Report 31](https://mpc-vdaf.tropomi.eu/index.php?format=rawhtml&id=71&option=com_vdaf&view=showReport).
[^4]: National Centre for Earth Observation, [Carbon Monoxide and Reactive Trace Gases](https://www.nceo.ac.uk/our-research/atmosphere-and-land-emissions/carbon-monoxide-reactive-trace-gases/).
[^5]: Met Office, [Air quality and composition](https://www.metoffice.gov.uk/research/weather/atmospheric-dispersion/atmospheric-composition).
[^6]: National Centre for Earth Observation, [Data Assimilation](https://www.nceo.ac.uk/our-research/data-assimilation/).
[^7]: Copernicus Atmosphere Monitoring Service, [Production systems](https://atmosphere.copernicus.eu/production-systems).
[^8]: Copernicus Atmosphere Monitoring Service, [Satellite observations](https://atmosphere.copernicus.eu/satellite-observations).

