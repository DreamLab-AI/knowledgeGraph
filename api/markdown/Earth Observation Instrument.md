An Earth observation instrument is physical equipment used to make measurements of the Earth system. The International Vocabulary of Metrology defines a measuring instrument as a device used alone or with supplementary devices; a measuring system can combine one or more instruments with other components to generate measured values.[^1] Mission documentation may call a complete payload assembly an instrument even when it contains several sensing elements and subsystems.

## Instrument, sensor and platform

An instrument can include optics or antennas, a transmitter, detectors or receivers, filters or spectrometers, scanning and pointing mechanisms, calibration sources, thermal control and digital electronics. The exact contents depend on the observing method. An active radar or lidar requires a transmitter in its measurement arrangement; a passive radiometer does not transmit the signal it observes.

A sensor is the functional part or system that responds to a stimulus. In metrology it may be the directly affected detector element; in W3C/OGC SSN it can denote the wider system implementing an observing procedure.[^2] An instrument can therefore contain one or several sensors, while common EO writing may use both words for the same payload.

A platform hosts the instrument and provides structure, power, thermal environment, pointing, data handling, communications and orbit or flight path. EarthCARE illustrates the distinction: Airbus Defence and Space UK supplied the satellite base platform, while separate UK organisations contributed the multispectral imager, broadband radiometer, lidar detectors, telescope assembly and onboard software.[^3] Platform attitude sensors used to fly the spacecraft are not automatically EO instruments.

## Measurement and product chain

An instrument turns an incoming physical signal into time-tagged digital values. Calibration coefficients, pointing and orbit information relate those values to physical units and location. Ground processing then performs instrument corrections, geolocation and retrieval. A Level-2 temperature, reflectance, concentration or classification is a product derived from instrument measurements and auxiliary inputs.

One platform can host several instruments with separate or combined processing. Sentinel-3 carries the OLCI imaging spectrometer, SLSTR radiometer, active SRAL altimeter and passive microwave radiometer. The microwave radiometer supplies atmospheric information needed to correct the altimeter.[^4] ESA lists distinct chains for SLSTR, OLCI and SRAL, plus a combined SLSTR/OLCI chain.[^5] Combining observations can constrain a retrieval, but it does not erase each instrument's sampling, calibration and uncertainty.

## Calibration and uncertainty

Instrument characterisation covers spectral or frequency response, radiometric gain, noise, timing, geometry, polarisation, non-linearity, stability and environmental behaviour as applicable. Pre-flight work establishes a baseline. Onboard calibration sources, lunar or terrestrial targets and comparison with independent instruments can track changes after launch.

TRUTHS shows the intended end-to-end chain for a planned UK-led mission. RAL Space is preparing payload and satellite integration, test and calibration; NPL provides radiometric calibration facilities; UK groups are developing onboard calibration, image-quality work and algorithms that will transform transmitted counts into surface reflectance with uncertainty.[^6] These are planned capabilities and design activities, not in-orbit performance.

QA4EO requires quality information to remain traceable through collection, processing and dissemination.[^7] An uncertainty statement must therefore cover more than instrument noise. Calibration standards, drift, pointing, geolocation, atmosphere, auxiliary data, retrieval models, resampling and validation comparisons may all contribute.

## Development maturity

An instrument's maturity should be stated independently of its scientific promise. The UK Earth Observation Technology Programme has funded laboratory research, environmental tests and airborne demonstrations.[^8] The 2026 EO Missions and Technology Innovation call explicitly starts projects at Technology Readiness Levels 1–4.[^9] These stages establish development progress, not flight readiness. Useful status terms include concept, laboratory prototype, relevant-environment test, airborne demonstration, flight hardware, launched, commissioning and validated operational product.

EarthCARE is launched and operational, while TRUTHS remains planned. Environmental qualification or launch alone does not demonstrate calibrated science-product performance; commissioning and independent validation remain part of the measurement system's lifecycle.

## References

[^1]: Joint Committee for Guides in Metrology, [VIM 3.1: measuring instrument](https://jcgm.bipm.org/vim/en/3.1.html); [VIM 3.2: measuring system](https://jcgm.bipm.org/vim/en/3.2.html).
[^2]: W3C and OGC, [Semantic Sensor Network Ontology, 2023 Edition](https://www.w3.org/TR/vocab-ssn-2023/).
[^3]: UK Space Agency, [EarthCARE](https://www.gov.uk/government/case-studies/earthcare).
[^4]: European Space Agency, [Sentinel-3 instruments](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-3/Instruments).
[^5]: European Space Agency, [Sentinel-3 data products](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-3/Data_products).
[^6]: UK Space Agency, [TRUTHS](https://www.gov.uk/government/case-studies/truths).
[^7]: QA4EO, [A Quality Assurance Framework for Earth Observation: Principles](https://qa4eo.org/docs/QA4EO_Principles_v4.0.pdf).
[^8]: UK Space Agency, [Funding for technologies to monitor the Earth](https://www.gov.uk/government/news/uk-space-agency-funding-for-technologies-to-monitor-the-earth).
[^9]: UK Space Agency, [EO Missions and Technology Innovation Call 1 guidance](https://www.gov.uk/government/publications/earth-observation-missions-and-technology-innovation-call-1/call-guidance-eo-missions-and-technology-innovation-call-1--2).

