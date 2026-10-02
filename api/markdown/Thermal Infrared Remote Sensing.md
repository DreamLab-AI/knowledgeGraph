Thermal infrared remote sensing measures radiance emitted by the surface and modified as it passes through the atmosphere. A calibrated sensor records top-of-atmosphere radiance in thermal bands. Retrieval algorithms correct for atmospheric absorption and emission and account for surface emissivity before converting the signal into an estimate of land-surface temperature (LST).[^1]

## What the temperature represents

LST is the radiative skin temperature of the observed ground, vegetation, built surface or water, not the near-surface air temperature reported by a weather station.[^2] It can change rapidly with sunlight, shade, soil moisture, vegetation, material, slope, viewing direction and acquisition time. A daytime value and a night-time value therefore describe different surface states even at the same location.

Emissivity is the efficiency with which a real surface emits thermal radiation relative to an ideal emitter. It varies by material, wavelength and condition. An emissivity error propagates into the temperature estimate. Atmospheric water vapour and viewing path also influence the measured radiance. Most satellite thermal-infrared LST products are limited to pixels classified as clear sky because cloud blocks or contaminates the surface signal. Cloud screening can introduce sampling bias where cloudy conditions systematically differ from clear ones.[^3]

## Calibration, validation and uncertainty

Instrument calibration uses characterised radiance sources such as blackbodies. The National Centre for Earth Observation develops radiometers and blackbody facilities for satellite validation and notes that better than 1 K accuracy is needed for many climate applications.[^4] Field validation compares a satellite retrieval with traceable in-situ or airborne radiometers, following protocols such as the CEOS LST product-validation guidance.[^5]

Scale matching is critical. A ground radiometer samples a limited footprint, while a satellite pixel may contain a mixture of soil, vegetation, water, shade and buildings. Measurements must be sufficiently coincident in time and representative of the viewing geometry. Validation over a uniform site does not automatically transfer to a heterogeneous landscape.

Product uncertainty can include independent, locally correlated and systematic components. ESA's LST Climate Change Initiative guide supplies these components with product-specific dependencies such as emissivity, land cover and atmospheric water vapour.[^3] Averaging many pixels does not eliminate correlated or systematic error at the rate expected for independent noise. Users should retain uncertainty and quality fields, cloud flags, acquisition time, view angle and the collection's processing version.

Processing history matters because calibration and algorithms change. A March 2026 Sentinel-3 baseline introduced changes to SLSTR Level-1 data and Level-2 LST and fire products, including time-dependent vicarious calibration factors and associated uncertainty annotations.[^6] Analyses that combine downloads from different baselines should test for discontinuities rather than treating the files as identical measurements.

## Resolution, coverage and UK status

Thermal missions trade ground detail, swath, revisit, radiometric precision and cloud-free sampling. ESA notes that existing LST products range from roughly 100 m to kilometre-scale sampling.[^1] The planned two-satellite Copernicus LSTM mission targets field-scale temperature and emissivity from 2028, with 37 m native sampling and 50 m products.[^7] Those figures are planned specifications until commissioning and validation establish performance.

UK capability includes NCEO retrieval, climate-record and validation work.[^2][^4] The UK Space Agency's 2024–25 annual report describes a SatVu project with SSTL and KISPE as a high-resolution thermal-imaging capability that was space-proven and ready for deployment at scale.[^8] That wording supports a demonstrated technology and investment claim. It does not by itself establish a complete, continuously operating constellation or a guaranteed current revisit service.

## References

[^1]: European Space Agency Knowledge Hub, [Land surface temperature](https://knowledge-hub-gda.esa.int/eo_capability/land-surface-temperature/).
[^2]: National Centre for Earth Observation, [Land surface temperature](https://www.nceo.ac.uk/our-research/climate-analysis/land-surface-temperature/).
[^3]: ESA Climate Change Initiative, [LST Product User Guide](https://admin.climate.esa.int/documents/3019/LST-CCI-D4.3-PUG_-_i3r1_-_Product_User_Guide.pdf).
[^4]: National Centre for Earth Observation, [Instrument Development Laboratory](https://www.nceo.ac.uk/data-facilities/laboratories/instrument-development-laboratory/).
[^5]: CEOS Calibration and Validation Portal, [Methods, guidelines and good practices](https://calvalportal.ceos.org/zh/web/guest/methods-guidelines-good-practices).
[^6]: Copernicus Space Component Data Access, [Sentinel-3 products: new processing baseline](https://collgs.esa.int/copernicus-sentinel-3-products-new-processing-baseline/).
[^7]: European Space Agency, [Land Surface Temperature Monitoring mission](https://sup.apex.esa.int/en/missions/lstm).
[^8]: UK Space Agency, [Annual report and accounts 2024–25](https://www.gov.uk/government/publications/uk-space-agency-annual-report-and-accounts-2024-2025/uk-space-agency-annual-report-2024-2025).

