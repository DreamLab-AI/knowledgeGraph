Orbital eccentricity is a dimensionless parameter that describes a conic orbit's shape.

For an ellipse, eccentricity `e` is the distance from the centre to either focus divided by the semi-major axis. The equivalent NASA convention divides the distance between both foci by the full major axis.[^1][^2] Eccentricity describes shape rather than size: two ellipses can share the same `e` while having very different semi-major axes and orbital periods.

## Conic ranges

In ideal two-body motion, eccentricity is non-negative and classifies the conic:

- `e = 0` is a bound circle with coincident centre and focus.
- `0 < e < 1` is a bound ellipse with finite periapsis and apoapsis.
- `e = 1` is the parabolic escape-energy boundary.
- `e > 1` is an unbound hyperbola.

JPL states the circular, elliptic and parabolic cases directly, while NAIF's conic-element routine covers elliptic, hyperbolic and parabolic states.[^1][^3] An estimated value close to one should not be assigned a firm conic class without its uncertainty: small changes in the state or gravitational parameter can move it across the parabolic boundary.

For an ellipse, periapsis and apoapsis radii follow `r_p = a(1-e)` and `r_a = a(1+e)`. Eccentricity alone does not give either distance because the scale `a` is also required. Nor does it identify the orientation of the closest approach; that needs an eccentricity vector or periapsis angles.[^2]

## Circular singularity

At `e = 0`, the orbit remains physically well defined but has no unique periapsis. Argument of periapsis and anomaly measured from periapsis therefore become undefined. NAIF responds to an exactly circular input by setting argument of periapsis to zero and warns that the angle can be inaccurate when eccentricity is merely close to zero.[^3] Such a zero is a software convention, not an observed direction.

Node geometry remains separate from periapsis geometry. A circular orbit with non-zero inclination still has an orbital plane that crosses the reference plane, so its node and RAAN remain defined. Only the periapsis direction is lost. Equinoctial or other nonsingular elements combine angles and eccentricity components to represent phase without requiring a defined periapsis; NASA developed such variables for low-thrust trajectories that pass through circular or low-eccentricity regimes.[^5]

## Estimated, osculating and mean values

An osculating eccentricity is calculated from a position and velocity at an epoch under a chosen central-body gravitational parameter. Its conic is tangent to the estimated trajectory at that instant. JPL stresses that this is an epoch-specific approximation and that unperturbed two-body propagation may fail badly for strongly perturbed bodies.[^6]

Mean eccentricity removes selected periodic behaviour according to a particular analytical theory. It should not be substituted for osculating eccentricity in a state conversion. CCSDS distinguishes optional osculating elements in an Orbit Parameter Message from mean elements in an Orbit Mean-Elements Message and requires the associated centre, reference frame, epoch and time system.[^4] Two-line element eccentricity is a theory-specific SGP4 mean parameter rather than a generic Keplerian measurement.

Although eccentricity itself has no unit and is invariant under a pure rotation of axes, its estimated value is not free of frame and epoch semantics. The state used to compute it has a central body, frame, time scale, force model and observation history. JPL's small-body service reports osculating eccentricity at a stated epoch and couples its uncertainty to that epoch.[^7]

## Uncertainty and reporting

Report enough significant figures for the use case, followed by the epoch, element type and solution source. Near zero, quoting many decimal places can conceal that periapsis orientation is weakly observable. Near one, it can conceal uncertainty in the conic classification. A scalar sigma does not preserve correlation with semi-major axis, periapsis time or other fitted parameters, so covariance is preferable for propagation or decision-making.[^7]

Covariance also has limits. NASA notes that conventional state-error covariance can omit environmental, force-model, numerical and unknown errors.[^8] Residuals, model assumptions, data arc and validation against withheld observations help establish whether the reported uncertainty is credible. “Exact eccentricity” is generally unsuitable language for a perturbed, estimated trajectory.

## References

[^1]: JPL Solar System Dynamics, [Eccentricity glossary](https://ssd.jpl.nasa.gov/glossary/eccentricity.html).
[^2]: NASA Science, [Chapter 3: Gravity and Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-1/).
[^3]: NASA Navigation and Ancillary Information Facility, [`oscelt_c`: osculating conic elements](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^4]: Consultative Committee for Space Data Systems, [Orbit Data Messages, CCSDS 502.0-B-3, Issue 3](https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/11/502x0b3e2.pdf).
[^5]: NASA Technical Reports Server, [Low-thrust trajectory analysis using equinoctial elements](https://ntrs.nasa.gov/api/citations/19900012491/downloads/19900012491.pdf).
[^6]: JPL Solar System Dynamics, [Frequently Asked Questions: orbital elements](https://ssd.jpl.nasa.gov/faq.html).
[^7]: JPL Solar System Dynamics, [Small-Body Database API documentation](https://ssd-api.jpl.nasa.gov/doc/sbdb.html).
[^8]: NASA Technical Reports Server, [An Empirical State Error Covariance Matrix Orbit Determination Example](https://ntrs.nasa.gov/citations/20150004606).

