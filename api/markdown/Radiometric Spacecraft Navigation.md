Radiometric spacecraft navigation uses radio-link observables to estimate a spacecraft trajectory. The principal deep-space measurements are range, Doppler and very-long-baseline angular data. Each is a scalar or small set of observables tied to a signal path, station geometry, frequency reference and epoch. Orbit determination combines them with a dynamical model; it does not read a full position and velocity directly from the radio.[^1][^4]

## Range and range rate

Two-way range begins with a coded signal transmitted from a ground station. A spacecraft transponder returns it, and the network measures elapsed time. After applying the speed of light and accounting for the signal path, the result constrains station-to-spacecraft distance. The raw delay includes uplink and downlink propagation, station equipment, the spacecraft turnaround path and media effects. These terms are calibrated or estimated rather than ignored.[^3][^4]

Doppler is derived from received frequency or accumulated carrier phase. In coherent two-way tracking, the downlink is phase-related to the uplink through a known turnaround ratio, so the ground frequency standard supports both legs. The measurement chiefly constrains the rate of change of range along the station-spacecraft line of sight. One-way tracking instead depends on the spacecraft oscillator; non-coherent two-way and three-way configurations have different references and participants.[^5][^6]

Range is not the same as range rate, and Doppler is not a three-dimensional velocity vector. A precise range can leave the spacecraft poorly located on a surface of near-constant distance. Doppler can tightly constrain radial motion while leaving motion across the sky weak. Earth rotation, changing stations, spacecraft dynamics and a longer data arc gradually rotate the measurement geometry and make more state components observable.[^2][^4]

## Plane-of-sky information

Delta-DOR adds an angular observable. Two widely separated antennas observe the spacecraft signal and compare its arrival delay across the baseline. They also observe a nearby quasar with a well-known direction. Differencing the spacecraft and quasar measurements cancels much of the common station-clock and propagation error, improving the plane-of-sky constraint that range and Doppler supply only indirectly.[^1][^2]

Quasar differencing leaves residual error because the quasar and spacecraft do not follow identical paths through the troposphere, ionosphere and solar plasma. Station coordinates, baseline orientation, clocks, source structure and instrumental delay also matter. ESA uses baselines among its deep-space stations to obtain complementary sky directions; the resulting orbit accuracy still depends on target geometry and the rest of the tracking arc.[^2][^7]

Antenna pointing angles are normally inadequate as precision deep-space navigation observations. The antenna follows a predicted direction and its encoders support acquisition, but beamwidth, structural and atmospheric errors make those angles much less precise than interferometric measurements. Conflating antenna pointing with a Delta-DOR or optical angle gives a misleading error budget.[^4]

## Metadata, frames and timing

Radiometric data require enough metadata to reconstruct what was measured. The CCSDS Tracking Data Message identifies participants, signal path, tracking mode, transmit and receive bands, time system, integration interval, timetag reference, turnaround ratio, corrections and quality indicators. Range may be expressed in kilometres, seconds or agency-specific range units, and some ranging systems are ambiguous modulo a stated value.[^5]

An observation time may refer to transmission, reception, the start, middle or end of an integration, depending on type and convention. The station coordinate must be evaluated in an Earth-fixed frame and related to the inertial frame used for the spacecraft state. Earth orientation, station motion, planetary ephemerides and relativistic light-time modelling enter high-accuracy processing. A number without its participant path, frame and timing convention is not a reusable navigation measurement.

Frequency and time infrastructure is part of the sensor. NASA's Deep Space Network uses hydrogen masers and caesium standards, distributes reference frequencies and time codes, and monitors offsets among complexes. ESA's Estrack stations combine atomic-clock control, GPS-linked facilities, weather observations and navigation processing.[^3][^7] Receiver noise is only one term in the measurement uncertainty.

## Orbit determination and observability

Ground orbit determination propagates a reference trajectory, predicts each observation and forms observed-minus-computed residuals. An estimator adjusts initial state, force parameters and biases to fit an arc. Range and Doppler acquired over days or weeks can constrain lateral motion through the dynamics even though neither instantaneously measures that component.[^4] This inference is model-dependent: gravity, manoeuvres, solar radiation pressure, atmospheric drag where relevant, station coordinates and media corrections can trade against the state.

Quoted network precision is therefore not spacecraft-position accuracy. ESA reports typical random errors of about 1 m in range and below 0.1 mm/s in two-way range rate for its deep-space system.[^2] Those figures describe observables under stated operations. Estimated state uncertainty also reflects geometry, observation cadence, systematic errors, force-model quality and the validity of the estimator covariance.

Residuals should be inspected by station, pass, observable type, elevation, solar elongation and time. A trend may indicate a force-model error or manoeuvre; a station-dependent offset may indicate calibration; excess scatter may indicate media or link problems. Removing outliers can protect the solution, but wholesale editing can conceal a shared modelling mistake.

## Ground operations and onboard use

Deep-space radiometric navigation is traditionally ground-centred: networks schedule passes, generate calibrated observations, solve the trajectory and send manoeuvre products. It has operational depth, global infrastructure and human review, but incurs communications delay and station demand. Onboard processing can shorten the response loop if a spacecraft receives suitable one-way, two-way or crosslink observations and carries a clock, measurement model and estimator. Moving the filter onboard does not remove dependence on the external radio geometry that generated the measurement.

Network status and document dates matter. Estrack and the Deep Space Network are operational systems.[^3][^7] The JPL 26 m subnet document is valuable for distinguishing tracking modes, but it is a historical interface description and should not be used as a current whole-network performance specification.[^6] CCSDS supplies exchange conventions; compliance with the message format does not by itself validate a station calibration or orbit solution.

## References

[^1]: Catherine L. Thornton and James S. Border, [Radiometric Tracking Techniques for Deep-Space Navigation](https://descanso.jpl.nasa.gov/monograph/series1_section.html), JPL DESCANSO.
[^2]: European Space Agency, [Keeping track of spacecraft with Delta-DOR](https://www.esa.int/Enabling_Support/Operations/Keeping_track_of_spacecraft_with_Delta-DOR).
[^3]: NASA, [Basics of Space Flight: Deep Space Network](https://science.nasa.gov/learn/basics-of-space-flight/chapter18-1/).
[^4]: NASA, [Basics of Space Flight: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^5]: Consultative Committee for Space Data Systems, [Tracking Data Message](https://ccsds.org/Pubs/503x0b2c1.pdf), CCSDS 503.0-B-2 Corrigendum 1, July 2021.
[^6]: NASA Jet Propulsion Laboratory, [26-m Subnet Doppler and Ranging](https://deepspace.jpl.nasa.gov/dsndocs/810-005/204/204.pdf), DSN 810-005, module 204, revision E.
[^7]: European Space Agency, [Estrack: ESA's global ground station network](https://www.esa.int/Enabling_Support/Operations/ESA_Ground_Stations/Estrack_ESA_s_global_ground_station_network).

