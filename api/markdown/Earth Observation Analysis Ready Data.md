Earth observation analysis-ready data, or ARD, have undergone common preparation so that users can begin a stated class of analysis with less preprocessing. The CEOS stewardship glossary describes georeferencing as the minimum requirement and allows further geometric and radiometric processing.[^1] Operational product specifications normally require much more.

“Analysis ready” does not mean correct for every question. Readiness is defined against a product family, processing specification and intended use. A surface-reflectance product may be ready for regional optical time-series analysis yet unsuitable for an application that needs raw radiance, a different projection, finer spatial support or validated uncertainty at each pixel. ARD reduces repeated preparation; fitness for purpose remains an analytical judgement.

## What an ARD product contains

Useful ARD places observations on a documented spatial framework and applies consistent calibration and corrections. It also carries scale factors, units, acquisition and processing metadata, and pixel-level quality information for conditions such as cloud, shadow, saturation or poor atmospheric retrieval. These elements allow a workflow to exclude invalid observations and trace a result back to its inputs.

US Landsat Collection 2 ARD illustrates this bundle. It includes top-of-atmosphere reflectance and brightness temperature, surface reflectance, surface temperature and quality-assessment data. The observations are corrected consistently, gridded to a common Albers projection and tiling scheme, and distributed with metadata intended to retain provenance.[^2] The product uses Cloud Optimized GeoTIFF, but that access format does not establish the observations' physical accuracy.

Consistency helps time-series comparison, but it does not remove residual atmosphere, gaps, sensor differences or model assumptions. Users still need to inspect quality bands, product versions, uncertainty and known limitations. Reprocessing can improve a collection while also changing previously downloaded values, so versioned provenance matters.

## Standards and UK provision

Geospatial organisations are still formalising the term. The OGC Analysis Ready Data Standards Working Group is chartered to develop a multipart standard.[^3] It should be described as work in progress, not as a completed universal specification. Product-family requirements remain the sound basis for deciding what preparation a particular ARD collection guarantees.

In the UK, the Earth Observation Data Hub has exposed Sentinel-1 and Sentinel-2 ARD for the UK beside notebooks, APIs and processing environments.[^4] Co-locating prepared data and compute lowers the practical barrier to national-scale work. It does not make every dataset open, interchangeable or suitable for every decision, and the cited February 2026 access arrangements should be checked before use.

## References

[^1]: Committee on Earth Observation Satellites, [Analysis Ready Data](https://calvalportal.ceos.org/cal/val-wiki/-/wiki/CEOS_Terms_and_Definitions/Analysis%2BReady%2BData/pop_up), EO Data Stewardship Glossary.
[^2]: US Geological Survey EROS Center, [Landsat Collection 2 US Analysis Ready Data](https://www.usgs.gov/centers/eros/science/usgs-eros-archive-landsat-archives-landsat-collection-2-us-analysis-ready-data).
[^3]: Open Geospatial Consortium, [Analysis Ready Data Standards Working Group](https://www.ogc.org/standards-working-gr/analysis-ready-data-swg-ard-swg/).
[^4]: National Centre for Earth Observation, [EO DataHub user access](https://www.nceo.ac.uk/news-media/call-for-expressions-of-interest-eo-datahub-user-access/).

