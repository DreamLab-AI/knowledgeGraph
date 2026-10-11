
A spacecraft magnetometer measures the local magnetic-field vector in its sensor frame.

An attitude system compares that vector with a field model evaluated at the spacecraft's position and time. The comparison supplies two-axis attitude information at an instant because rotation about the field vector is unobservable. A second non-collinear reference or a time history with spacecraft dynamics is needed for full attitude and rate estimation.[^nasa-smallsat-gnc]

## Measurement and calibration

A fluxgate sensor drives a ferromagnetic core into alternating saturation. External field changes the symmetry of the induced response, and electronics recover the field component from its harmonics. Three near-orthogonal axes form a vector measurement.[^cluster-daily-calibration] Other spacecraft magnetometers use magnetoresistive, search-coil, optically pumped or scalar principles; the word magnetometer does not imply a single noise, range or bandwidth.

Raw output contains sensor offset, gain, axis non-orthogonality and alignment error. Temperature, range switching, ageing and electronics add time dependence. Calibration converts the three sensor-axis outputs into physical units in an orthogonal frame whose orientation relative to the spacecraft is known. Cluster used 12 parameters for each triad and measurement range, with ground values followed by regular in-flight updates.[^cluster-daily-calibration][^cluster-long-term]

Calibration manoeuvres must excite the unknown parameters. GOES-16's original manoeuvre provided insufficient independent-axis rotation, leaving estimated bias uncertainty of 3–5 nT against a 1 nT requirement. GOES-17 used multiple full rotations about two orthogonal axes to improve observability.[^nasa-goes17-calibration] More samples cannot compensate for missing geometry.

## Magnetic cleanliness and accommodation

A magnetometer measures all local fields, regardless of source. Permanent magnets, ferromagnetic fasteners, current loops, cabling, solar arrays, reaction-wheel motors and active magnetorquers can contaminate the planetary field. Torquer operation may require separated sensing and actuation windows. Characterisation should cover spacecraft operating modes, current levels, moving hardware and temperature.[^nasa-smallsat-gnc]

Mounting a sensor on a boom reduces nearby dipole fields, which fall rapidly with distance. It does not remove fields from electrical wiring, boom magnetism, deployment-alignment error or distant sources. Swarm combined spacecraft magnetic-property control with stable boom accommodation.[^esa-swarm] SOSMAG instead combines two boom fluxgates and two body magnetoresistive sensors to estimate spacecraft disturbance on a platform without a magnetic-cleanliness programme.[^esa-sosmag]

Cluster's two triads occupied different positions on a 5.2 m boom. The inboard unit could identify artificial disturbances while the outboard sensor supplied science data. Imperial College London's final calibration used cross-instrument and inter-spacecraft comparisons; long-term analysis found offsets more temperature-sensitive than gains and angles.[^cluster-daily-calibration][^cluster-long-term]

## Attitude sensor and science instrument

A bus attitude magnetometer is selected to support state estimation and magnetic-torquer control within a known field range. Accuracy should be reported in nanotesla or as a percentage of a declared full scale, alongside linearity, resolution, noise density, bandwidth, axis alignment and calibration state. A three-axis measurement does not itself provide three-axis attitude.

AAC Clyde Space's MAG-3 is a bounded commercial example. AAC describes three simultaneous fluxgate axes, configurable range, ±0.75% full-scale accuracy, ±0.015% full-scale linearity and flight heritage for the product and its predecessors.[^aac-mag3] These are supplier claims. Range selection and spacecraft magnetic environment remain part of installed performance.

Science magnetometers have a different purpose: they seek an accurate ambient field for research. UK teams have led instruments on Solar Orbiter, JUICE and IMAP. Imperial College led Solar Orbiter's two-sensor boom instrument on a mission launched in 2020.[^uksa-solar-orbiter] Imperial also led JUICE J-MAG, with Leicester contributing radiation-hardness and mechanical design; JUICE launched in 2023 and is travelling to Jupiter.[^uksa-juice] IMAP launched in September 2025 carrying an Imperial-built MAG.[^uksa-imap]

This heritage establishes UK capability in science magnetometry, calibration and flight delivery. It does not provide a bus attitude-knowledge figure or qualify a commercial ADCS magnetometer. Science accuracy, attitude estimation and spacecraft pointing must remain separate claims.

[^nasa-smallsat-gnc]: NASA Small Spacecraft Systems Virtual Institute, “Guidance, Navigation, and Control”, https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/
[^cluster-daily-calibration]: N. Grimmich et al., “Daily Calibration of the Fluxgate Magnetometer Onboard the Cluster Spacecraft”, *Journal of Geophysical Research: Space Physics* (2026), https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2026JA035236
[^cluster-long-term]: L. N. S. Alconcel et al., “Long-Term Trends in the Calibration of the Cluster Fluxgate Magnetometer Instruments”, *Journal of Geophysical Research: Space Physics* (2026), https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2026JA035179
[^nasa-goes17-calibration]: NASA/NOAA, “GOES-17 Magnetometer On-Orbit Calibration Design and Results” (2019), https://ntrs.nasa.gov/citations/20190002274
[^esa-swarm]: ESA, “Swarm operations”, https://www.esa.int/Enabling_Support/Operations/Swarm_operations
[^esa-sosmag]: ESA Space Weather Service Network, “SOSMAG”, https://swe.ssa.esa.int/sosmag
[^aac-mag3]: AAC Clyde Space, “MAG-3 Three Axis Satellite Magnetometer”, https://www.aac-clyde.space/what-we-do/space-products-components/adcs/mag-3
[^uksa-solar-orbiter]: UK Space Agency, “Solar Orbiter”, https://www.gov.uk/government/case-studies/solar-orbiter--2
[^uksa-juice]: UK Space Agency, “Jupiter Icy Moons Explorer”, https://www.gov.uk/government/case-studies/jupiter-icy-moon-explorer-juice
[^uksa-imap]: UK Space Agency, “UK technology launches into space aboard NASA's IMAP mission” (2025), https://www.gov.uk/government/news/uk-technology-launches-into-space-aboard-nasas-imap-mission

