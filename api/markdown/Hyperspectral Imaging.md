Hyperspectral imaging records a spectrum at each spatial sample, producing a data cube with two spatial dimensions and one spectral dimension. Unlike a multispectral instrument with a small set of broad bands, a hyperspectral instrument usually samples many narrow, contiguous bands. There is no universal band-count threshold, so a useful specification gives wavelength range, spectral sampling and spectral response rather than relying on the label alone.

## Measurement and interpretation

Materials absorb and reflect electromagnetic radiation differently across wavelength. Their spectral features can support estimates of vegetation condition, soil properties, minerals and water constituents. ESA's planned CHIME mission, for example, is designed to cover the visible to shortwave-infrared range from 400 nm to 2500 nm and to distinguish surface features through their spectral patterns.[^1]

Instrument data start as radiance measured at the detector. A material or abundance map is a later inference. Detector correction and radiometric, spectral and geometric calibration precede geolocation and atmospheric correction. The latter estimates surface reflectance by accounting for illumination, aerosols, gases and water vapour. Classification, regression or spectral unmixing then relates corrected spectra to classes or quantities. Mixed pixels, similar material spectra, spectral variability, atmospheric residuals and incomplete training libraries can all create ambiguity.

## Calibration, validation and design trades

Spectral calibration establishes the wavelength assigned to each channel and its response shape. Radiometric calibration relates detector output to radiance, while geometric calibration locates samples and aligns spectral bands. CEOS identifies field networks that provide surface reflectance, atmospheric observations, measurement geometry, uncertainty estimates and quality flags for post-launch calibration and validation.[^2] Reference data must be close enough to the satellite observation in time, location, wavelength and viewing geometry for the intended comparison.

Instrument design involves competing variables. Narrower bands divide the available photons more finely and can reduce signal-to-noise unless aperture, dwell time or spatial sampling changes. Finer ground sampling, wider swath, faster revisit, broad spectral coverage and manageable data volume cannot all be maximised independently. A product description should therefore give signal-to-noise performance, spectral and spatial sampling, swath, revisit assumptions, atmospheric method and uncertainty.

The National Centre for Earth Observation maintains UK airborne facilities with integrating spheres, spectral sources and thermal blackbodies. It reports regular calibration to keep measurements consistent from year to year.[^3] ESA's 2025 soil campaign combined field and airborne observations to support CHIME algorithm development and later orbital validation.[^4] Both show that calibration and validation continue beyond laboratory characterisation.

## UK programmes and mission status

TRUTHS is a UK-led mission planned for 2030. Airbus UK leads implementation, with UK partners working on its instrument, calibration and algorithms intended to retrieve hyperspectral surface reflectance with uncertainty estimates.[^5] Its proposed 50 m observations and daily data volume of about 5 TB remain design values until launch, commissioning and validation.

Dstl's Orpheus contract covers two hyperspectral payloads intended to fly in a lead-trail arrangement and observe land, littoral and ice targets.[^6] It is a planned mission: the contract establishes the design and procurement activity, not launch or in-orbit performance. CHIME is likewise a future Copernicus mission in the accepted evidence. These programmes demonstrate a substantial development pipeline, but they should not be presented as current operational hyperspectral services.

## References

[^1]: European Space Agency, [Going hyperspectral for CHIME](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Going_hyperspectral_for_CHIME).
[^2]: CEOS WGCV, [Hyperspectral calibration and validation resources](https://calvalportal.ceos.org/documents/10136/958739/Hyperspectral_CalVal_Resources_V1.pdf/21597e76-a2cf-c5e2-f5f2-f6891cae4236?t=1697793167228).
[^3]: National Centre for Earth Observation, [Airborne Earth-observation laboratories](https://www.nceo.ac.uk/data-facilities/laboratories/nceo-airborne-earth-observatory-laboratories/).
[^4]: European Space Agency, [Measuring soil from the sky for ROSE-L and CHIME](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Measuring_soil_from_the_sky_for_ROSE-L_and_CHIME).
[^5]: UK Space Agency, [TRUTHS](https://www.gov.uk/government/case-studies/truths).
[^6]: Defence Science and Technology Laboratory, [Dstl announces Orpheus satellite mission contract](https://www.gov.uk/government/news/dstl-announces-orpheus-satellite-mission-contract).

