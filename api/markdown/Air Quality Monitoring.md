Air quality monitoring measures or estimates pollutants in the atmosphere across time and space. A complete system combines calibrated surface instruments, targeted sampling, emissions information, weather, chemical transport models and satellite observations. Each component describes a different volume of air and carries a different delay, resolution and uncertainty.

## UK surface measurements

The Automatic Urban and Rural Network (AURN) is the UK's largest automatic air-pollution network. Defra's May 2026 guidance records more than 200 stations and hourly measurements for pollutants including nitrogen oxides, ozone, sulphur dioxide, carbon monoxide, PM10 and PM2.5.[^1] Sites are selected and classified for purposes such as regulatory compliance, urban background or roadside monitoring. A concentration at one inlet represents that site and period; it does not describe every street nearby.

Near-real-time AURN data are provisionally scaled so that public information can be issued quickly. Later ratification uses calibrations, six-monthly intercomparison audits, equipment records and expert review. The 2024 technical report says that 184 stations operated during some or all of that year. Mean capture of ratified hourly data across its six reported pollutants was 92.9%, although individual pollutants and stations differed and some analysers failed uncertainty requirements.[^2] The present total of more than 200 and the 2024 count describe different dates and should not be treated as conflicting measurements of one network state.

Regulatory assessment adds spatial evidence where monitors cannot cover every road or zone. Defra's 2024 compliance report combines AURN and other network measurements with Pollution Climate Mapping, nitrogen-dioxide diffusion tubes or objective estimation. Where measurement and supplementary assessment both existed, the higher concentration generally governed the zone assessment.[^3] The rules are specific to each pollutant and regulation: the England PM2.5 environmental target, for example, was assessed from monitoring-station measurements.

## Models, forecasts and Earth observation

The Copernicus Atmosphere Monitoring Service (CAMS) publishes daily European analyses and four-day forecasts on a 0.1° grid, approximately 10 km, at hourly intervals. Eleven forecasting systems contribute to a median ensemble. Surface observations from the European Environment Agency are assimilated into the analysis, and the spread among models estimates forecast uncertainty.[^4] The grid resolves regional patterns rather than kerbside gradients, and ensemble spread may omit shared model or emissions errors.

CAMS evaluates its regional forecasts against independent measurements each day and publishes quarterly quality reports using surface, airborne and remote-sensing observations.[^5] The operational dataset regularly validates nitrogen monoxide, nitrogen dioxide, sulphur dioxide, ozone, PM2.5, PM10 and dust. It labels other forecast variables experimental. Regular evaluation reveals bias and change in performance; it does not mean every pollutant, location and episode has equal skill.

Satellite instruments add broad, repeated coverage. Sentinel-5P's TROPOMI Level-2 nitrogen-dioxide product retrieves the amount of NO2 between the surface and the top of the troposphere from measured radiance. It supplies precision estimates, averaging kernels and a quality value. The product guide recommends `qa_value > 0.75` for most uses, which removes cloud-covered and other problematic pixels.[^6] Cloud, snow and ice, surface reflectance, viewing geometry and the assumed vertical profile affect retrieval quality. Filtering improves reliability while creating spatial and temporal gaps.

A tropospheric column is not a surface concentration or personal exposure. Converting it to near-surface pollution or an emission estimate requires vertical information, meteorology and a model. The UK's National Centre for Earth Observation combines remote-sensing products with atmospheric chemistry, physics and data assimilation to study regional pollution and infer emissions.[^7] Such methods are particularly useful where ground networks are sparse, but the inference remains model-dependent and needs comparison with independent observations.

## Interpreting an air-quality product

An air-quality statement should name the pollutant, averaging time, height or column, spatial support and quality state. “Hourly” can describe a station mean or a 10 km model field. “Near-real-time” can mean provisionally calibrated surface data, a satellite retrieval or an assimilated analysis. Legal compliance, population exposure and a forecast are separate uses, each with its own evidence rules.

Ground instruments provide traceable local concentration measurements but leave spatial gaps. Satellites provide consistent regional sampling but lose data beneath cloud and observe columns. Models make complete fields and forecasts but depend on emissions, chemistry, meteorology and assimilation. Their combination is strongest when these roles and uncertainties remain visible.

## References

[^1]: Department for Environment, Food & Rural Affairs, [Air pollution monitoring: Automatic Urban and Rural Network](https://www.gov.uk/guidance/air-pollution-monitoring-automatic-urban-and-rural-network-aurn).
[^2]: Environment Agency and Ricardo, [AURN QAQC Annual Technical Report 2024](https://uk-air.defra.gov.uk/assets/documents/reports/cat05/2509300426_2024_AURN_QAQC_Annual_Technical_Report_Issue_1.pdf).
[^3]: Department for Environment, Food & Rural Affairs, [Air pollution in the UK 2024: compliance assessment summary](https://www.gov.uk/government/publications/air-pollution-in-the-uk-2024/air-pollution-in-the-uk-2024-compliance-assessment-summary).
[^4]: Copernicus Atmosphere Monitoring Service, [European air quality forecasts](https://ads.atmosphere.copernicus.eu/datasets/cams-europe-air-quality-forecasts?tab=overview).
[^5]: Copernicus Atmosphere Monitoring Service, [Evaluation and Quality Control](https://atmosphere.copernicus.eu/evaluation-and-quality-control-underpinning-reliability-cams-data).
[^6]: Copernicus Sentinel-5P Mission Performance Centre, [Nitrogen Dioxide Level-2 Product Readme](https://sentinels.copernicus.eu/documents/247904/3541593/Sentinel-5P-Nitrogen-Dioxide-Level-2-Product-Readme-File/3dc74cec-c5aa-40cf-b296-59a0f2140aaf).
[^7]: National Centre for Earth Observation, [Atmosphere and land emissions](https://www.nceo.ac.uk/our-research/atmosphere-and-land-emissions/).

