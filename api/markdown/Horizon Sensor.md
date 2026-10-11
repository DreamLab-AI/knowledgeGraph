
A horizon sensor observes the limb of a planet to provide an attitude reference.

Horizon sensing begins with a detected transition between the planetary disk or atmosphere and space. Processing combines one or more limb crossings with a radiance and geometry model to infer the direction of the disk centre. The sensor does not observe that centre directly.[^nasa-ir-horizon]

## Measurement principles

Infrared Earth sensors use thermal contrast and can operate on the night side. Scanning designs sweep detectors across the limb and timestamp or encode space-to-Earth and Earth-to-space transitions. Static arrays and imaging sensors instead estimate a limb curve in their field. An ESA IRES N2 design uses four infrared detectors, a 10 Hz scanning mirror and an encoder to produce pitch and roll relative to the Earth disk centre in the 14–16 micrometre band.[^esa-ires-n2]

Atmosphere and instrument response determine the apparent limb. Temperature structure, clouds, latitude, season, spectral band and viewing geometry change the infrared radiance profile. Planetary oblateness and ephemeris error also affect the inferred centre. NASA's mission study modelled radiance through sensor optics and electronics to estimate radiance-dependent attitude errors; it drew on 12 missions flown between 1973 and 1984.[^nasa-ir-horizon]

Altitude changes the disk's angular size and the required field of view. Accuracy, noise-equivalent angle and usable scan range must therefore be stated with altitude, wavelength, channel combination and confidence level. A geostationary specification cannot be transferred directly to low orbit or to another planet.

## Observability

A nadir or disk-centre vector constrains pitch and roll for an Earth-pointing spacecraft but does not observe yaw about that vector. A second reference, gyro propagation, magnetic or Sun vector, payload measurement or dynamic model is needed for three-axis attitude. Sensor-to-body alignment and the transform from orbital to inertial frame also require position and time.[^nasa-sensor-calibration]

ERS-2 showed both the value and the missing degree of freedom after its last gyro failed. Operators filtered Digital Earth Sensor data to estimate pitch and roll. The sensor did not supply yaw, so the team inferred yaw drift from radar Doppler on the ground and built a repeatable disturbance model for onboard compensation. The Doppler result took hours and was not a real-time horizon-sensor output.[^esa-ers2]

Spinning spacecraft can use the time between a Sun sighting and a horizon crossing to estimate spin-axis attitude and phase. Meteosat Second Generation combines Sun-slit and Earth-horizon-crossing sensors with spin-rate processing and active nutation damping.[^esa-meteosat] This architecture depends on known spin geometry, ephemeris and valid crossings; it is distinct from a two-axis scanner on a three-axis-stabilised platform.

## Verification and evidence maturity

Testing should exercise radiance profiles, altitude and seasonal cases, field limits, false crossings, saturation, thermal drift, alignment, scan mechanism life, vibration and electronic latency. Flight validation compares reconstructed attitude against an independent source and checks geographic and seasonal residuals.

ESA's IRES N2 record documents engineering-qualification-model manufacture and a full qualification activity, with conditional GEO accuracy and altitude figures.[^esa-ires-n2] Those results apply to the named design and its test conditions.

University of Surrey studied a CubeSat solar-sail system using CMOS Sun and nadir sensors, a three-axis magnetometer and a MEMS rate sensor. Its reported ±2-degree stabilisation came from realistic simulations, not flight.[^surrey-solar-sail] The work supports an estimator and control architecture, while leaving hardware qualification and on-orbit accuracy unproven.

[^nasa-ir-horizon]: M. C. Phenneger et al., *Infrared Horizon Sensor Modeling for Attitude Determination and Control: Analysis and Mission Experience*, NASA-TM-86181 (1985), https://ntrs.nasa.gov/citations/19850010706
[^esa-ires-n2]: ESA, “InfraRed Earth Sensor IRES N2”, https://resilience.esa.int/archives/projects/infrared-earth-sensor-ires-n2
[^nasa-sensor-calibration]: NASA, *Generalized Calibration/Verification System for Spacecraft Attitude Sensors* (1982), https://ntrs.nasa.gov/api/citations/19820016405/downloads/19820016405.pdf
[^esa-ers2]: ESA, “ERS-2 goes gyro-less”, https://www.esa.int/Enabling_Support/Operations/ERS-2_goes_gyro-less
[^esa-meteosat]: ESA, “Meteosat Satellite Architecture”, https://www.esa.int/Applications/Observing_the_Earth/Meteorological_missions/Meteosat/Satellite_Architecture
[^surrey-solar-sail]: V. Lappas et al., “Cubesat solar sail attitude determination and control system hardware design and orbital analysis” (2010), https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Cubesat-solar-sail-attitude-determination-and/99514108302346

