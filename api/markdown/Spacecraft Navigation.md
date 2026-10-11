Spacecraft navigation estimates a spacecraft's state at a stated time and quantifies the uncertainty in that estimate.

A navigation state normally includes position and velocity, and may also include attitude, angular rate, clock error, sensor biases, force parameters or a target-relative pose. Navigation combines observations with geometry, dynamics and prior information. A sensor measurement is an input to the estimate rather than a complete state by itself.[^1][^4]

## State, frame and epoch

A navigation solution needs the state definition and ordering, reference-frame origin and axes, epoch, time system and units. An orbit message also needs its central body, covariance frame and basis, and relevant manoeuvre history.[^4] An attitude history needs the source and destination frames, rotation convention, time system, interpolation and angular-rate metadata.[^3] Values stripped of this context can remain numerically plausible while describing the wrong physical state.[^3][^4]

Covariance describes the estimator's admitted uncertainty in a particular coordinate basis and at an epoch. It is not measured truth. Biases, force-model errors, timing faults or correlations excluded from the estimator can make real error larger than formal covariance.[^4][^9] A useful product records the observation cut-off, model and calibration versions and whether the state is predicted, filtered, smoothed or reconstructed.[^4][^9]

## Observations and estimation

Navigation observations can include GNSS fixes, radiometric range and Doppler, optical lines of sight, lidar, inertial measurements, star or limb directions and spacecraft crosslinks. Each has a measurement model and geometry. Several precise observations along almost the same line of sight can leave some state components weakly observed.[^1][^2]

An estimator propagates a dynamic or kinematic model and uses observations to update the state. Batch methods fit an arc together; sequential filters update as measurements arrive; a smoother uses later data to refine earlier epochs.[^9] The chosen process and measurement noise, estimated biases, data editing and force models affect both the solution and covariance.[^9]

## Ground and onboard navigation

Ground processing can combine long tracking arcs, large models, analyst review and later observations. Onboard processing reduces latency and supports control during contact gaps, but must fit flight processor, memory, power, sensor and assurance limits.[^1] Ground and onboard solutions may have different data cut-offs and model fidelity; neither location guarantees better accuracy for every phase.[^1]

NASA's Goddard Enhanced Onboard Navigation System is a configurable software library for real-time absolute and relative solutions using GNSS, ground, crosslink, camera, accelerometer and attitude-sensor data. NASA reports more than 20 years of heritage for its core algorithms and named flight integrations.[^8] The same page labels attitude solutions as a future capability, so its heritage should not be expanded into a claim of general operational attitude navigation.[^8]

ESA's GODOT documentation describes configurable orbit-determination and batch-estimation infrastructure for ground analysis.[^9] The software's availability is not mission qualification; a flight project still needs its own dynamics, observations, parameters, covariance assumptions, residual review and independent validation.[^9]

## Navigation, guidance and control

Navigation supplies the estimate consumed by [[Spacecraft Guidance]]. Guidance compares it with a reference trajectory or target and generates a correction. Control converts that command into actuator demands and closes the physical loop.[^2] NASA's public Basics of Space Flight chapter uses `navigation` more broadly for mission design, orbit determination and flight-path control; the functional boundary should be stated when systems exchange data.[^2]

Deep Space 1 showed the functions working onboard: AutoNav acquired asteroid and star images, estimated the spacecraft's location, determined whether it was on course and then selected future thrust direction and duration.[^5] This completed flight demonstration establishes one integrated architecture, not a universal accuracy or autonomy result for optical navigation.[^5]

## Attitude and science reconstruction

Real-time attitude navigation and later science reconstruction can be different products. Gaia uses star-tracker and payload-star observations in its closed-loop attitude system, calibrates the star-tracker relationship to the focal plane and later refines raw onboard quaternions during ground processing.[^6] The refined history improves science processing but cannot replace the estimate that the spacecraft required in real time.[^6]

Proba demonstrated onboard flight dynamics, an autonomous star sensor, two Kalman filters and automatic large-angle slews, alongside automatic ground-segment functions for passes, distribution and performance evaluation.[^7] Its sensor figures and filter update rates should not be reported as end-to-end spacecraft navigation or pointing accuracy.[^7]

## Verification and status

Navigation verification should cover measurement calibration, frame and time conversion, estimator convergence, weak observability, covariance consistency, data gaps, rejected observations, manoeuvres, sensor faults and mode transitions. Monte Carlo analysis, independent truth or overlap comparison, processor tests, hardware-in-the-loop work and on-orbit residual monitoring establish different parts of the case.[^3][^4][^9]

Status belongs to the exact configuration. A software library with flight heritage, a ground estimator, a flight-demonstrated autonomous sequence and an operational mission product are separate evidence classes. Published vendor or survey performance also needs configuration and environment context; NASA warns that some current small-spacecraft catalogue values rely on manufacturer information and may not have independent verification.[^1]

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/), 7 May 2026.
[^2]: NASA Science, [Basics of Space Flight, Chapter 13: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^3]: Consultative Committee for Space Data Systems, [CCSDS 504.0-B-2: Attitude Data Messages](https://ccsds.org/Pubs/504x0b2.pdf), January 2024.
[^4]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3 Corrigendum 1: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^5]: NASA Jet Propulsion Laboratory, [Deep Space 1: Autonomous Navigation](https://www.jpl.nasa.gov/nmp/ds1/tech/autonav.html).
[^6]: European Space Agency, [Gaia EDR3 documentation: The spacecraft](https://gea.esac.esa.int/archive/documentation/GEDR3/Introduction/chap_cu0int/cu0int_sec_mission/cu0int_ssec_spacecraft_intro.html).
[^7]: European Space Agency, [Proba payloads](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Proba_Missions/Proba_payloads2).
[^8]: NASA Goddard Space Flight Center, [Goddard Enhanced Onboard Navigation System](https://etd.gsfc.nasa.gov/capabilities/capabilities-listing/geons/).
[^9]: European Space Agency, [GODOT: Orbit Determination and Estimation](https://godot.io.esa.int/docs/guides/cosmos/estimation.html), version 1.20.0.

