A satellite link budget is an auditable calculation of the gains, losses and noise between a transmitter and receiver. It tests whether a chosen waveform and data rate meet their required carrier quality with adequate margin for a stated geometry and operating case. Separate budgets are normally needed for uplink and downlink, and for combinations of ground station, spacecraft antenna, data rate and mission phase.[^1]

## Main terms

For a radio-frequency link, effective isotropic radiated power combines transmitter output, transmit-antenna gain and losses before radiation. Free-space path loss then accounts for geometric spreading over the slant range. Pointing error, polarisation mismatch, cables, hardware, atmosphere and other effects add further losses. At the receiving end, antenna gain and system noise temperature are often combined as the figure of merit G/T.[^2]

Engineers convert the available carrier-to-noise-density ratio, C/N0, to energy per information bit relative to noise density, Eb/N0, by accounting for the information rate. The result is compared with the modem and coding threshold for a target error performance. Link margin is the excess above that threshold under the stated case. It is meaningful only when units, reference planes, bandwidths, coding assumptions and uncertainty allowances are consistent.

Free-space loss increases with range and, for fixed isotropic antennas, with frequency. A fixed physical aperture also provides more gain at shorter wavelengths, so frequency cannot be judged from free-space loss alone. Higher bands may offer more bandwidth but can incur greater atmospheric attenuation and tighter pointing requirements. ITU-R P.618-14 supplies the current in-force prediction framework for Earth-space propagation effects; site-specific rain, cloud and gaseous data are needed for an availability calculation.[^3]

## Margin, availability and operation

There is no universal correct margin. A routine low-Earth-orbit downlink, a critical command path and a deep-space telemetry link carry different uncertainties and consequences. The budget should cover worst planned range, elevation and equipment cases, then be checked against measured performance as hardware and operations mature. Diversity, adaptive coding and modulation, power control or a lower data rate can improve availability, but each changes the service design.

A closing budget is necessary but does not grant spectrum access or establish coexistence. In the UK, Ofcom authorises satellite earth stations, including non-geostationary gateways and user terminals, through the relevant licence regime.[^4] Operational infrastructure also remains mission-specific. Goonhilly provides UK-based deep-space communication services and has supported spacecraft beyond geostationary orbit,[^5] yet antenna availability alone says nothing about whether an arbitrary mission's frequency, geometry and waveform will close.

## References

[^1]: European Cooperation for Space Standardization, [ECSS-E-ST-50-05C Rev.2: Radio frequency and modulation](https://ecss.nl/standard/ecss-e-st-50-05c-rev2-radio-frequency-and-modulation-4-october-2011/).
[^2]: NASA Small Spacecraft Systems Virtual Institute, [Ground Data Systems and Mission Operations](https://www.nasa.gov/smallsat-institute/sst-soa/ground-data-systems-and-mission-operations/).
[^3]: International Telecommunication Union, [Recommendation ITU-R P.618-14](https://www.itu.int/rec/R-REC-P.618-14-202308-I).
[^4]: Ofcom, [Satellite earth stations](https://www.ofcom.org.uk/spectrum/space-and-satellites/satellite-earth?language=en).
[^5]: UK Space Agency, [Goonhilly to boost deep space communications capacity](https://www.gov.uk/government/news/goonhilly-to-boost-deep-space-communications-capacity).

