Orbit propagation calculates a spacecraft’s position and velocity at later epochs from a dated initial state and a stated dynamical or ephemeris model.

A reproducible propagated state identifies its epoch, origin, reference frame, time system, units and state representation. It also records the force model and input data, numerical method where applicable, and the prediction interval. In Earth-fixed calculations, time conversion and Earth orientation affect the transformation from an inertial state.[^1260][^1275]

A numerical propagator integrates equations of motion using a selected force model. An ephemeris propagator instead interpolates supplied trajectory data. Integration step size and tolerance control numerical approximation; they do not establish that the initial orbit, force model or environmental inputs represent the spacecraft accurately. High-fidelity trajectory design may include gravity fields, third-body effects, radiation pressure and drag, with statistical analysis of navigation and manoeuvre uncertainty.[^1263][^1265]

Orbit data formats carry different state meanings. CCSDS OPM can convey osculating state, OMM conveys mean elements, and OEM carries an ephemeris time history; the standard advises partners to use compatible propagation models and agreed modelling accuracy. Mean elements depend on their averaging theory. A TLE is a compact mean-element data product with a BSTAR field, and must be interpreted under its associated general-perturbations conventions rather than as an arbitrary osculating state.[^1260][^1261][^1280][^1264]

A prediction is valid only over the interval its model, observations and inputs support. Drag and other model errors accumulate with time, and future space-weather forecasts add uncertainty to low-Earth-orbit predictions. Segment ephemerides at gaps and manoeuvre discontinuities, and associate covariance with its epoch, frame, element set and perturbation assumptions.[^1260][^1264]

[^1260]: [CCSDS, Orbit Data Messages, 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^1261]: [CCSDS, active publication record for Orbit Data Messages](https://ccsds.org/publications/allpubs/entry/3073/).
[^1263]: [GMAT, Propagator documentation](https://documentation.help/GMAT/Propagator.html).
[^1264]: [ESA Advanced Concepts Team, Hybrid Propagation](https://www.esa.int/gsp/ACT/projects/HybridPropagation/).
[^1265]: [NASA Ames Flight Dynamics, Trajectory Design](https://www.nasa.gov/ames-engineering/spaceflight-division/flight-dynamics/trajectory-design/).
[^1275]: [JPL NAIF SPICE, Time Subsystem](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/req/time.html).
[^1280]: [CelesTrak, NORAD Two-Line Element Set Format](https://celestrak.org/NORAD/documentation/tle-fmt.php).

