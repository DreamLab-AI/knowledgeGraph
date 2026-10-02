Orbital dynamics is the study and prediction of spacecraft and natural-body motion under gravity and other forces. A two-body Keplerian orbit supplies the baseline: two point masses interact through mutual gravity, producing a conic trajectory. An operational trajectory is an estimate produced by integrating a stated initial state under a stated force model. It is not an immutable path.[^1]

## State, frame and time

A Cartesian state gives position and velocity at an epoch. An element set expresses the same nominal motion through size, shape, orientation and position along the orbit. Neither representation is complete without the central body, reference frame, time system, units and epoch. CCSDS orbit messages carry these items as metadata because the same numbers have different meanings in different frames or time scales.[^1]

Earth-orbit work commonly distinguishes a celestial frame from a frame fixed to the rotating Earth. The International Celestial Reference System is realised by the International Celestial Reference Frame. Relating it to a terrestrial frame requires Earth-orientation parameters, including polar motion and the changing rotation angle supplied by IERS.[^2][^3] A label such as “J2000” can be ambiguous because it is used for an epoch and for several frame conventions. Reproducible data should use the defined frame name and record the epoch separately.

## Forces and propagation

Real propagation adds forces according to the orbit and required accuracy. For Earth satellites these can include the non-spherical gravity field, atmospheric drag, gravity from the Moon, Sun and other bodies, solar-radiation pressure and commanded or unplanned manoeuvres.[^4][^5] Drag is especially important in low orbit and depends on atmospheric density, spacecraft attitude and area-to-mass ratio. Solar-radiation pressure depends on illumination, optical properties and geometry. A model that is adequate for one regime or prediction interval may be poor for another.

Numerical propagation advances the state and, when required, its uncertainty. Errors in the initial state, force parameters, manoeuvre execution and future environment cause predictions to diverge from the realised trajectory. NASA's ARTEMIS analysis, for example, found that position and velocity uncertainty rose after manoeuvres and with propagation time, requiring post-manoeuvre tracking to obtain a new solution.[^6] That case demonstrates the process rather than a transferable accuracy figure.

## Osculating and mean motion

Osculating elements describe the instantaneous Keplerian orbit tangent to a perturbed trajectory. They therefore contain short-period variations. Mean elements average selected variations according to a named theory. Their values depend on what that theory removes, so two mean-element theories need not produce the same elements from the same physical motion.[^1]

This distinction is operationally important for two-line element data. CCSDS identifies SGP4 mean elements with their propagation theory: they should be used with SGP4 rather than treated as generic osculating Keplerian elements.[^1] Converting or propagating an element set without preserving its averaging convention can introduce systematic error while leaving the numbers superficially plausible.

## Uncertainty and provenance

An orbit prediction should state the state epoch, reference frame and time system; observation cut-off; force and atmosphere models; estimated physical parameters; manoeuvre treatment; numerical settings; and prediction horizon. If covariance is supplied, its epoch, frame, ordering and confidence convention also matter.[^1] Formal covariance represents the uncertainties admitted by the model. Unmodelled forces and biases can make the real error larger.

## References

[^1]: Consultative Committee for Space Data Systems, [Orbit Data Messages, Recommended Standard 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^2]: International Earth Rotation and Reference Systems Service, [International Celestial Reference System](https://www.iers.org/iers/en/dataproducts/icrs/icrs).
[^3]: International Earth Rotation and Reference Systems Service, [Earth-orientation data and products](https://datacenter.iers.org/eop.php).
[^4]: NASA, [Low-thrust trajectory analysis using equinoctial elements](https://ntrs.nasa.gov/api/citations/19900012491/downloads/19900012491.pdf).
[^5]: European Space Agency, [Network of Models: Trajectory](https://nom.esa.int/models/trajectory).
[^6]: NASA, [Orbit Determination of Spacecraft in Earth-Moon L1 and L2 Libration Point Orbits](https://ntrs.nasa.gov/citations/20110009960).

