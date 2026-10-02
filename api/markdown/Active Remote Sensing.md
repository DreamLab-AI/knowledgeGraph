Active remote sensing supplies a controlled interrogation signal and measures how that signal returns after interacting with the atmosphere, surface or subsurface. An active instrument therefore includes, or controls, a transmitter as part of its observing arrangement. Radar, radar altimetry and lidar are common examples.[^1] The word *active* describes the source of illumination; it does not merely mean that the electronics consume power.

## Measurement chain

A radar transmits microwave pulses and measures returned amplitude, phase, polarisation, frequency or travel time. Different combinations support imaging, surface-height measurement, wind estimation and detection of change. Lidar applies a similar ranging principle at optical wavelengths and can profile aerosols, clouds, winds or surface height.[^1] The receiver first produces an electrical response. Calibration, timing and pointing information then relate that response to physical units and location before algorithms retrieve geophysical quantities.

Supplying the illumination removes dependence on sunlight, so an active system can observe by day or night. This does not make every active technique weather-independent. Radar sensitivity to rain, atmosphere and ionosphere depends on wavelength and conditions. Optical lidar is affected by aerosols and can be blocked by thick cloud. Radio-frequency interference, transmitter power, duty cycle, antenna or telescope size, viewing geometry and receiver noise also constrain performance.

Resolution and coverage belong to a particular mode and product. Short pulses or wide bandwidth can improve range resolution; aperture and processing affect along-track resolution; beam width and scan pattern affect swath. Higher resolution, wider coverage, stronger signal-to-noise, lower power and faster revisit cannot all be maximised together. A quoted performance figure should state wavelength, mode, geometry, footprint or sampling, swath and processing level.

## Calibration and uncertainty

Calibration relates transmitted power, timing, frequency, pointing and receiver response to reference quantities. Onboard references may monitor change, while external targets and independent field or airborne observations check performance after launch. Remaining uncertainty can include transmitter stability, antenna pattern, ranging clock, pointing, propagation, speckle, geolocation and retrieval-model effects. A Level-2 height, wind or backscatter product is therefore a processed estimate rather than an unaltered detector measurement.

EarthCARE shows how active and passive measurements can complement one another. Its operational payload includes a 355 nm atmospheric lidar and a 94 GHz cloud-profiling radar, alongside a multispectral imager and broadband radiometer.[^2] The active instruments provide vertical profiles; the passive instruments add horizontal and radiative context. The UK contributed across the platform and payload: Airbus Defence and Space UK supplied the base platform, while UK organisations provided instrument, detector, software and algorithm elements.[^3]

## Category boundary and UK status

GNSS reflectometry is a useful boundary case. The receiver measures direct and Earth-reflected navigation signals, but the transmitter is a separate GNSS satellite and is not part of the observing instrument. ESA describes this as passive bistatic reflectometry.[^4] If the whole transmitter-target-receiver geometry is being discussed, it resembles active bistatic radar. For this corpus, the receiving EO instrument is classified as passive or signals-of-opportunity unless it generates the interrogation signal itself.

Sentinel-1C is a deployed active-radar example. It launched in December 2024 and carries a synthetic-aperture radar that images through darkness and cloud. Airbus Defence and Space in Portsmouth developed the radar electronics subsystem.[^5] This verifies a bounded UK instrument contribution, not complete UK manufacture of the spacecraft or radar. Mission status, calibration and product maturity should be checked separately.

## References

[^1]: European Space Agency, [Newcomers Earth Observation Guide](https://business.esa.int/newcomers-earth-observation-guide); [What is Earth observation?](https://www.esa.int/Applications/Observing_the_Earth/What_is_Earth_observation).
[^2]: European Space Agency, [EarthCARE](https://visuals.earth.esa.int/satellites/earthcare).
[^3]: UK Space Agency, [EarthCARE](https://www.gov.uk/government/case-studies/earthcare).
[^4]: European Space Agency GNSS Science Support Centre, [Earth Sciences](https://gssc.esa.int/domains/earth-sciences/).
[^5]: UK Space Agency, [Sentinel-1C: new radar satellite launched into space](https://www.gov.uk/government/news/sentinel-1c-new-radar-satellite-launched-into-space).

