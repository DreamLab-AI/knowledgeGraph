Orbit determination estimates a spacecraft or other object's state from observations, a force model and a measurement model. It does not directly measure an entire orbit. The result is a best-fitting state at a stated epoch, often with estimated physical or instrument parameters and a covariance that represents uncertainty under the estimator's assumptions.[^1]

## Observations and geometry

Tracking systems observe quantities such as range, Doppler or range-rate, angular direction, GNSS signals, satellite laser ranging and DORIS. Each constrains different components of the state. Two-way range measures line-of-sight distance and Doppler supplies line-of-sight rate, while angular information improves transverse knowledge. ESA uses Delta-DOR for precise angular measurements where range and Doppler geometry alone is weak.[^2]

Coverage and geometry matter as much as the nominal precision of one observation. Short arcs can leave some state components poorly observable. Biases in clocks, stations, media corrections or instruments may need estimation alongside the orbit. ESA's operational precise-orbit work for Sentinel missions combines several tracking techniques and can estimate frame and instrument biases.[^3] That deployed service does not mean that every Sentinel product uses every listed observation type.

## Estimation and prediction

A batch least-squares estimator adjusts a state and parameters over an observation arc to reduce weighted residuals between observed and computed measurements. Sequential methods such as an extended Kalman filter update an estimate and covariance as data arrive; a smoother can use later observations to refine earlier states.[^4][^5] The method name alone says little about accuracy. Results depend on tracking quality and quantity, observation geometry, force-model fidelity, parameterisation and the handling of manoeuvres and outliers.

Orbit solutions may reconstruct a past trajectory, estimate a current state or predict forward.[^1] Prediction propagates both state and uncertainty beyond the observation cut-off. Uncertainty normally grows with time and can rise sharply after an imperfectly executed manoeuvre. NASA's ARTEMIS case required several days of tracking after manoeuvres before its solution converged again.[^5] Its reported performance belongs to that mission, tracking schedule and dynamical regime.

## Covariance and validation

Residuals are diagnostic, but small residuals do not prove that the orbit or covariance is realistic. A conventional covariance can map assumed observation errors while omitting model deficiency, correlated biases and unknown disturbances.[^6] Good practice records its epoch, frame, coordinate ordering and confidence convention, then tests realism through independent data, overlapping solutions, prediction errors or calibrated process-noise models.

An orbit product should identify the observations and cut-off time, solution epoch, frame and time system, force and measurement models, estimated parameters, manoeuvre treatment, residual screening, covariance and propagation horizon. Accuracy should be tied to a component, confidence level, frame and time. A single unqualified distance is inadequate.

## UK operational setting

The National Space Operations Centre's Monitor Space Hazards service is deployed for eligible UK-licensed operators and government users, providing conjunction, re-entry and satellite-history functions.[^7] The separate cross-government space-domain-awareness requirements describe desired sensor coverage, data processing and fusion that can improve resident-space-object orbit determination.[^8] These requirements record need and procurement direction; they are not proof that every capability has been delivered.

CAA guidance requires UK orbital-operator applicants to show how operations will remain safe, responsible and sustainable through the mission.[^9] CAP2210 does not prescribe an orbit-determination algorithm, but it makes dependable orbit knowledge, collision-risk processes and transparent operational evidence material to licensed activity.

## References

[^1]: NASA, [Basics of Space Flight, Chapter 13: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^2]: European Space Agency, [Keeping track of spacecraft with Delta-DOR](https://www.esa.int/Enabling_Support/Operations/Keeping_track_of_spacecraft_with_Delta-DOR).
[^3]: European Space Agency Navigation Support Office, [Missions and programmes](https://dgnl7.esoc.esa.int/ESA_Missions_and_Programmes.html).
[^4]: European Space Agency, [GODOT orbit-determination estimation guide](https://godot.io.esa.int/docs/guides/cosmos/estimation.html).
[^5]: NASA, [Orbit Determination of Spacecraft in Earth-Moon L1 and L2 Libration Point Orbits](https://ntrs.nasa.gov/citations/20110009960).
[^6]: NASA, [An Empirical State Error Covariance Matrix Orbit Determination Example](https://ntrs.nasa.gov/citations/20150004606).
[^7]: UK National Space Operations Centre, [Monitor Space Hazards](https://www.monitor-space-hazards.service.gov.uk/).
[^8]: UK Government, [Cross-government space domain awareness requirements](https://www.gov.uk/government/publications/space-domain-awareness-requirements/cross-government-space-domain-awareness-sda-requirements).
[^9]: UK Civil Aviation Authority, [CAP2210: Guidance for Orbital Operator licence applicants and licensees](https://www.caa.co.uk/publication/download/18909).

