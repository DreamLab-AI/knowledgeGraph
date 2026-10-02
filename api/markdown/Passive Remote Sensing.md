Passive remote sensing measures radiation supplied by a source outside the observing instrument. The signal may be sunlight reflected by the surface or atmosphere, thermal radiation emitted by the scene, or microwave emission. The instrument detects and records this radiation without transmitting the interrogation signal used for the observation.[^1] *Passive* describes the illumination arrangement, not the electrical power, complexity or calibration needs of the hardware.

## Reflected and emitted radiation

Visible, near-infrared and shortwave-infrared imagers commonly depend on reflected sunlight. Their observations vary with solar angle, viewing direction, atmosphere and the directional reflectance of the surface. Darkness prevents a reflected-solar acquisition, while cloud can block the surface. Atmospheric gases and aerosols can absorb or scatter selected wavelengths even in clear conditions.

Thermal-infrared and passive-microwave radiometers instead measure radiation emitted by the observed scene. They can operate at night because sunlight is not their source. Their ability to see the surface still depends on wavelength: cloud is a major obstacle for thermal infrared, while selected microwave bands can penetrate many clouds but have coarser footprints and other atmospheric sensitivities. Passive should therefore not be used as a synonym for daylight-only or clear-sky sensing.

Spectrometers and radiometers divide detected energy among bands or channels. Narrower bands can reveal spectral structure but collect fewer photons, affecting signal-to-noise unless aperture, integration time or spatial sampling changes. Spatial resolution, spectral resolution, radiometric performance, swath and revisit are coupled design choices. Sentinel-3 demonstrates this at mission scale: OLCI uses 21 bands across 400–1020 nm with a 1,270 km swath, while SLSTR provides visible through thermal channels at different spatial resolutions.[^2]

## From radiance to product

Detector output is not yet a surface or atmospheric property. Processing applies detector corrections, radiometric calibration, geolocation and quality screening. Reflected-solar products may also require solar geometry and atmospheric correction. Thermal and microwave retrievals require atmospheric and emissivity information appropriate to the band. Concentration, temperature, reflectance and classification products depend on those algorithms and auxiliary data.

Calibration characterises spectral response, gain, offset, non-linearity, noise, geometry and stability. Onboard sources can monitor change, while field and airborne instruments provide independent comparison data. The National Centre for Earth Observation maintains UK facilities with integrating spheres, spectral sources and thermal blackbodies, and performs regular calibration of its airborne instruments.[^3] Uncertainty should follow the measurement through correction and retrieval rather than stopping at the detector.

## UK examples and maturity

MicroCarb carries a passive infrared spectrometer that measures oxygen and carbon-dioxide absorption in four bands of reflected sunlight. The UK Space Agency records a July 2025 launch, first images in September 2025 and continuing fine calibration and processing-algorithm tuning.[^4] RAL Space designed its pointing and calibration system, while NPL provided an SI-traceable ground-calibration facility. MicroCarb is deployed, but those continuing activities distinguish launch from a mature validated product service.

EarthCARE also combines passive instruments with active ones. Its UK-supplied multispectral imager gives cloud and aerosol context across track, while the broadband radiometer measures top-of-atmosphere radiances used to test retrieved cloud radiative properties.[^5] Those passive measurements are complementary to the mission's lidar and radar profiles. The example shows why active and passive describe instrument methods rather than whole missions.

## References

[^1]: European Space Agency, [Newcomers Earth Observation Guide](https://business.esa.int/newcomers-earth-observation-guide).
[^2]: European Space Agency, [Sentinel-3 instruments](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-3/Instruments).
[^3]: National Centre for Earth Observation, [Airborne Earth Observatory Laboratories](https://www.nceo.ac.uk/data-facilities/laboratories/nceo-airborne-earth-observatory-laboratories/).
[^4]: UK Space Agency, [MicroCarb](https://www.gov.uk/government/case-studies/microcarb).
[^5]: UK Space Agency, [EarthCARE](https://www.gov.uk/government/case-studies/earthcare).

