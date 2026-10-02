Attitude determination estimates a spacecraft's orientation relative to a stated reference frame. Sensors measure star directions, the Sun vector, a magnetic-field vector or angular rate. An estimator combines those measurements with reference models and rotational dynamics to produce an attitude estimate, often with angular rate, sensor bias and covariance. The estimate is therefore an inference from observations rather than a direct sensor reading.[^1][^3]

## Frames and representations

Useful frames include a spacecraft body frame, an inertial frame and an Earth- or orbit-oriented frame. ECSS requires the frames used for attitude measurement, guidance and control to be identified unambiguously.[^2] A reported rotation should also state whether it maps inertial coordinates into the body frame or the reverse, together with axis order, handedness and quaternion multiplication convention.

A unit quaternion provides a compact, nonsingular representation of a three-dimensional rotation. Its four components satisfy a unit-length constraint, and `q` and `-q` represent the same physical orientation. Estimation software must preserve normalisation and handle that sign equivalence when differencing or averaging quaternions. NASA's NESC material derives quaternion kinematics and a Kalman estimator using attitude and gyro measurements.[^3] Three-angle representations can remain useful for reporting, but their coordinate singularities make them unsuitable as an unrestricted internal attitude state.

## Sensors and estimation

An instantaneous vector observation constrains attitude relative to its reference vector. One magnetic-field vector cannot determine rotation about itself at that instant. Two non-collinear vector observations can support snapshot methods such as TRIAD, QUEST or a solution of Wahba's problem.[^1][^3] A filter instead propagates a state through time and updates it when measurements arrive. Kalman-family estimators can include gyro bias and covariance, but their result depends on dynamics, noise assumptions, initialisation and the measurement model.

Sensors are complementary. A gyroscope supplies angular rate between absolute updates, but bias integration causes drift. Sun sensors lose their source in eclipse and can suffer albedo error. Magnetometers need a reference field model and can be contaminated by spacecraft currents, reaction wheels and torquers. Star trackers can provide fine attitude knowledge but have field-of-view, exclusion-angle, acquisition and systematic-error limits.[^1] NASA reports that non-Gaussian, time-varying star-tracker errors can remain significant and evaluates augmented extended and unscented Kalman filters with Lunar Reconnaissance Orbiter telemetry.[^5] Fusion does not remove an error unless the estimator represents it or another observation makes it observable.

## Observability, calibration and maturity

Magnetometer-only three-axis estimates illustrate the distinction between an observation and a time-dependent inference. A 2023 peer-reviewed study uses orbital field variation and a sequential extended Kalman filter to recover attitude over time, including simulated sensor-channel failures.[^6] The paper also states that its results are simulations and identifies hardware-in-the-loop and spacecraft application as future work. It therefore supports an algorithmic possibility under its model, not a flight-qualified universal replacement for multiple sensors.

Calibration covers bias, scale factor, non-orthogonality, timing and alignment between sensor, body and payload frames. NASA advises providing for on-orbit calibration because launch and thermal conditions can shift key body vectors such as an imager boresight.[^4] Validation should report the reference truth, manoeuvres, convergence and outage cases, angular-rate range, residual statistics and covariance consistency. A component accuracy or simulated estimator error should not be relabelled as spacecraft pointing performance.

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/).
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-60-30C: Satellite attitude and orbit control system requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-60-30C30August2013.pdf).
[^3]: NASA NESC Academy, [An Overview of Spacecraft Attitude Determination and Estimation](https://nescacademy.nasa.gov/video/bdeb764e048940a6b2ae05c3cfdf5d261d).
[^4]: NASA Small Spacecraft Reliability Initiative, [Attitude Determination and Control](https://s3vi.ndc.nasa.gov/ssri-kb/topics/28/).
[^5]: NASA Technical Reports Server, [Filtering Methods for Error Reduction in Spacecraft Attitude Estimation Using Quaternion Star Trackers](https://ntrs.nasa.gov/citations/20180001358).
[^6]: T. M. A. Habib, [Three-axis high-accuracy spacecraft attitude estimation via sequential extended Kalman filtering of single-axis magnetometer measurements](https://link.springer.com/article/10.1007/s42401-023-00221-w), *Aerospace Systems* 6 (2023).

