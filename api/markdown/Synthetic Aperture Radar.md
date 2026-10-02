Synthetic aperture radar (SAR) is an active microwave imaging method. A spacecraft or aircraft transmits pulses towards the surface and coherently combines the returning echoes recorded along its flight path. The platform's motion creates a synthetic aperture much longer than the physical antenna, enabling finer along-track resolution. The resulting complex data contain both amplitude and phase. Amplitude describes the strength of radar backscatter; phase records propagation-path information that can support interferometry.[^1]

## Measurement and image formation

Because SAR supplies its own microwave illumination, it can operate by day or night and usually image through cloud. “All-weather” remains a shorthand rather than a guarantee. Performance can be affected by frequency-dependent atmospheric and ionospheric effects, severe precipitation and radio-frequency interference. Surface response also depends on wavelength, polarisation, incidence angle, slope, roughness and dielectric properties such as moisture. A bright pixel therefore does not identify one material without context.

Coherent imaging produces granular speckle. Side-looking geometry produces foreshortening where slopes face the sensor, layover where a high feature is recorded ahead of its base, and shadow where terrain receives no illumination. Multilooking and speckle filters can reduce variance, but they usually sacrifice spatial detail. Processing cannot reconstruct a surface hidden in radar shadow or resolve every layover ambiguity.

Resolution and coverage are properties of an acquisition mode, not one fixed sensor number. Sentinel-1's C-band instrument illustrates the trade: stripmap mode offers nominal 5 m by 5 m resolution over an 80 km swath, while extra-wide-swath mode offers 20 m by 40 m over 400 km.[^1] Its interferometric-wide mode covers 250 km at 5 m by 20 m. Pixel spacing, nominal resolution and geolocation accuracy should be reported separately. Sentinel-1C launched in December 2024 and Sentinel-1D in November 2025; the earlier 1A and 1B missions have ended.[^2]

## Calibration and uncertainty

Reliable products require radiometric calibration of measured backscatter and geometric calibration of position. External corner reflectors, active targets and stable natural sites allow operators to monitor calibration over time and compare systems. CEOS's SARCalNet framework defines requirements, curation and reference data for such sites.[^3] Calibration does not remove scene-dependent uncertainty from speckle, terrain, moisture, vegetation, processing choices or imperfect knowledge of the antenna pattern. A quantitative result should retain acquisition geometry, polarisation, calibration convention, processing level and quality information.

## UK capability and status

NovaSAR-1, launched in September 2018, is a deployed UK-manufactured S-band technology-demonstration spacecraft.[^4] Its operating modes make the coverage trade visible: a stripmap mode reaches about 6 m resolution over a 15–20 km swath, while a 30 m wide-area mode covers 140 km. The maritime mode extends beyond 400 km with unequal along-track and across-track resolution. These are mode specifications, not interchangeable performance claims.

Airbus UK built ESA's Biomass spacecraft in Stevenage; the UK Space Agency subsequently recorded support for its launch during 2025–26.[^5] Biomass is therefore a deployed mission, although UK spacecraft construction does not imply that every component was made in the UK. The two Airbus UK Oberon SAR spacecraft remain planned, with the Ministry of Defence announcement giving an expected 2027 launch.[^6] Their proposed performance should be described as a design or contract objective until commissioning data are available.

## References

[^1]: European Space Agency, [Sentinel-1 instrument](https://www.esa.int/Applications/Observing_the_Earth/Copernicus/Sentinel-1/Instrument).
[^2]: European Space Agency, [Sentinel-1 facts and figures](https://www.esa.int/content/view/full/427259).
[^3]: CEOS WGCV SAR Subgroup, [SARCalNet Handbook](https://www.sarcalnet.org/wp-content/uploads/2024/03/CEOS_SARCALNET_Handbook.pdf).
[^4]: UK Space Agency, [North Star Metric: NovaSAR-1](https://www.gov.uk/government/publications/the-north-star-metric-investment-outcomes-from-uk-space-agency-funding/the-north-star-metric-investment-outcomes-from-uk-space-agency-funding-html); Surrey Satellite Technology Ltd, [NovaSAR-1](https://www.sstl.co.uk/space-portfolio/launched-missions/2010-2019/novasar-1-launched-2018).
[^5]: UK Space Agency, [British satellite to map Earth's forests in 3D](https://www.gov.uk/government/news/british-satellite-to-map-earths-forests-in-3d-for-the-first-time-to-help-combat-climate-change); [Annual report and accounts 2025–26](https://www.gov.uk/government/publications/uk-space-agency-annual-report-and-accounts-2025-2026/uk-space-agency-annual-report-2025-2026).
[^6]: UK Ministry of Defence, [New satellite deal to boost military operations, jobs and growth](https://www.gov.uk/government/news/new-satellite-deal-to-boost-military-operations-jobs-and-growth).

