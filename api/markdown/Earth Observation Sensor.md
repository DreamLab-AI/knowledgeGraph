An Earth observation sensor is the functional system that carries out an observing procedure and produces a result about a property of the Earth, its oceans or its atmosphere. The term can denote a detector element, a physical sensing assembly or a wider observing system, depending on context. ESA's glossary uses it broadly for an instrument or device that collects data, while formal metrology and semantic standards draw different boundaries.[^1]

## Terminology and ontology boundary

The International Vocabulary of Metrology defines a sensor narrowly as the element of a measuring system directly affected by the phenomenon or by something carrying the quantity to be measured.[^2] Under that convention, a photocell can be the sensor inside a spectrometer, while the complete spectrometer is the instrument.

The W3C and OGC Semantic Sensor Network ontology uses a wider functional definition. A sensor or observer is a system that implements an observing procedure to determine the value of an observable property; it may be a device, infrastructure, person or software-based system.[^3] SSN keeps the sensor distinct from the observation, observed property, feature of interest, procedure and result. It also allows a system to be hosted by a platform.

For this corpus, `Earth Observation Sensor` means the system that performs the sensing function. A physical flight sensor may be part of, or coextensive with, an Earth observation instrument. Software that only derives a later product remains a processing system unless the wider SSN convention is explicitly intended. The spacecraft, aircraft or ground installation is the hosting platform rather than the sensor merely because it carries one.

## Response and measurement chain

A sensor responds to a stimulus such as incident radiance or a returned radar pulse. Detectors and front-end electronics convert that response into sampled digital values. Timing, pointing, orbit or position and engineering telemetry place those values in measurement context. Calibration then relates counts to physical quantities and geolocation before retrieval algorithms estimate surface or atmospheric properties.

This chain makes a raw observation different from a derived product. MicroCarb's infrared sensor records spectral measurements; UK-supported processors and scientific algorithms subsequently turn those observations into carbon-source and sink maps.[^4] Product provenance should retain the sensor, instrument, platform, acquisition time, procedure, calibration version and processing chain.

## Calibration, validation and uncertainty

Sensor performance is conditional. Relevant characteristics include spectral or frequency response, measurement range, noise, non-linearity, saturation, point-spread function, timing, pointing, stability and environmental sensitivity. Pre-flight calibration estimates these properties against references. Onboard sources and stable targets monitor change after launch.

Independent validation asks whether the delivered product represents its stated measurand within uncertainty. CEOS notes that post-launch calibration accounts for changes that onboard systems may not correct, while product validation also tests processors and retrieval algorithms.[^5] Fiducial reference measurements require traceability, uncertainty budgets, documented protocols and evidence that the comparison is representative of the satellite observation.

QA4EO extends this responsibility through the data-product chain. Its framework requires a traceable quality indicator and documentation of collection, processing and dissemination.[^6] Detector noise is therefore only one term. Calibration, atmosphere, geometry, auxiliary data, resampling, retrieval assumptions and validation comparison can contribute to uncertainty.

UK facilities at the National Centre for Earth Observation develop and validate sensing systems with radiometers, calibration blackbodies and emissivity measurements.[^7] Such facilities establish national capability and reference observations; they do not imply that every UK mission sensor has passed the same calibration procedure.

## References

[^1]: European Space Agency, [Earth observation glossary](https://www.esa.int/Applications/Observing_the_Earth/Earth_observation_glossary).
[^2]: Joint Committee for Guides in Metrology, [VIM 3.8: sensor](https://jcgm.bipm.org/vim/en/3.8.html).
[^3]: W3C and OGC, [Semantic Sensor Network Ontology, 2023 Edition](https://www.w3.org/TR/vocab-ssn-2023/).
[^4]: UK Space Agency, [MicroCarb](https://www.gov.uk/government/case-studies/microcarb).
[^5]: CEOS WGCV, [Roadmap towards an Assessment Framework for Fiducial Reference Measurements](https://calvalportal.ceos.org/documents/10136/958898/CEOS-FRM_Assessment_Framework_V1.pdf/a8318317-9f64-6f02-44db-e64f234c4036?t=1697787396736).
[^6]: QA4EO, [A Quality Assurance Framework for Earth Observation: Principles](https://qa4eo.org/docs/QA4EO_Principles_v4.0.pdf).
[^7]: National Centre for Earth Observation, [Instrument Development Laboratory](https://www.nceo.ac.uk/data-facilities/laboratories/instrument-development-laboratory/).

