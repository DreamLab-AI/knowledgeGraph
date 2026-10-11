Apoapsis is the point or event at which an orbiting body is farthest from its selected central body.

This is the generic term. `Apogee` names an apoapsis about Earth, `aphelion` one about the Sun, and `apojove` one about Jupiter. NASA also records `apolune` and `apselene` for lunar orbit and `apochron` for Saturn.[^1][^2] Naming the central body prevents an Earth-specific term from being applied to a solar, lunar or planetary trajectory.

## Point, radius and altitude

An apoapsis is a location or radial turning event. Its **apoapsis radius** is the distance from the central body's adopted origin, normally its centre of mass. Its **apoapsis altitude** is a distance from an adopted surface. Those quantities coincide only after a surface model and direction of measurement have been specified.[^3]

For an ideal two-body ellipse, apoapsis lies at the far end of the major axis, opposite periapsis. The spacecraft's radial motion reverses there. An impulsive manoeuvre near apoapsis is commonly used to change the opposite side of the orbit, although a finite burn, navigation error and perturbations make the achieved trajectory differ from the ideal impulse.[^2][^8]

## Osculating and mean apoapsis

An osculating orbit is the conic that matches an instantaneous position and velocity under a chosen central-body gravitational parameter. JPL SPICE requires an inertial-frame state, its epoch and the primary's `GM` to construct these elements.[^3] GMAT likewise defines `RadApo` as the maximum osculating distance to the celestial body at the selected coordinate-system origin.[^5] The resulting apoapsis belongs to that epoch and model; it need not be the maximum radius that a perturbed or thrusting spacecraft will actually reach later.

Mean elements suppress selected periodic variations. Their meaning depends on the averaging theory: GMAT distinguishes short-term and long-term Brouwer-Lyddane mean elements, while the NASA-hosted conversion paper treats mean elements as prediction variables that do not directly represent the instantaneous position and velocity.[^5][^6] A value derived from mean semi-major axis and eccentricity must therefore be labelled with the theory and epoch.

Two-line element sets require another boundary. CCSDS Orbit Mean-Elements Messages carry the centre, reference frame, time system, epoch and `MEAN_ELEMENT_THEORY`; SGP4-related fields are conditional on that theory.[^4] The public SGP4 record supplies compatible code and verification cases.[^7] A TLE-derived apoapsis should retain the original element set, propagation time and SGP4 implementation. Treating TLE values as an instantaneous Cartesian state or placing them in an unrelated Kepler solver can produce a physically inconsistent result.[^4][^7]

## Degenerate and non-Keplerian cases

A circular conic has constant radius. Every point is both a maximum and a minimum in the scalar sense, so there is no unique apoapsis direction or line of apsides. SPICE sets the argument of periapsis to zero when eccentricity is exactly zero and warns that it can be inaccurate when eccentricity is very small.[^3] A reported direction for a near-circular orbit therefore needs the software convention and numerical tolerance.

Parabolic and hyperbolic conics have a finite periapsis but no finite apoapsis: distance increases without returning after the encounter. ESA distinguishes elliptical, parabolic and hyperbolic trajectories by eccentricity.[^8] The greatest radius within a finite tracking or simulation interval is only an interval maximum, not an orbital apoapsis.

Under oblateness, third-body gravity, drag, radiation pressure or thrust, a propagated trajectory may have several local radial maxima and its osculating apsidal line can move. An operational `next apoapsis` should therefore state the force model, central body, frame, propagation interval, event function and tolerance. Uncertainty in the input state and model must also be propagated to the event time and radius; the nominal osculating value alone carries no confidence statement.[^3][^4]

## References

[^1]: NASA Science, [Basics of Space Flight glossary](https://science.nasa.gov/learn/basics-of-space-flight/glossary/).
[^2]: NASA Science, [Basics of Space Flight: Gravity and Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/).
[^3]: NASA Jet Propulsion Laboratory, [CSPICE `oscelt_c`: osculating elements from a state](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^4]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3 Corrigendum 1: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^5]: NASA General Mission Analysis Tool documentation mirror, [Spacecraft Orbit State](https://documentation.help/GMAT/SpacecraftOrbitState.html).
[^6]: Gim J. Der and Roy Danchick, [Conversion of Osculating Orbital Elements to Mean Orbital Elements](https://ntrs.nasa.gov/api/citations/19960035775/downloads/19960035775.pdf), 1996.
[^7]: David A. Vallado et al., [Revisiting Spacetrack Report #3](https://celestrak.org/publications/AIAA/2006-6753/), 2006.
[^8]: European Space Agency, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).

