Periapsis is the point or event at which an orbiting or passing body is closest to its selected central body.

Periapsis is independent of the primary. `Perigee` applies about Earth, `perihelion` about the Sun, `perijove` about Jupiter and `perichron` about Saturn. NASA records both `perilune` and `periselene` for lunar orbit.[^1][^2] The generic term is useful when the central body is stated separately or when specialised naming varies.

## Radius is not clearance

Periapsis is selected by a minimum centre-to-centre distance. The **periapsis radius** measures from the adopted origin of the central body. **Periapsis altitude** measures from a declared surface, and terrain clearance adds a physical topography model. These are different quantities.[^3][^5][^6]

For Earth, a single subtraction by a nominal mean radius hides oblateness. GMAT's `Altitude` parameter is the distance to a tangent plane at the sub-satellite point on an assumed ellipsoid, while its `RadPer` is an osculating minimum distance to the coordinate-system origin.[^5][^6] Another flight-dynamics system may implement another convention, so the output name alone is insufficient.

Ordnance Survey provides a bounded UK illustration of the surface problem. It distinguishes an ellipsoid, the geoid, local mean-sea-level surfaces and Ordnance Datum Newlyn, and notes that mainland British map heights use the local datum.[^8] This evidence explains why a reference surface must be named; ODN is not an orbit-altitude standard.

## Orbit representations

JPL SPICE derives an equivalent conic from an inertial-frame state, its epoch and the primary's gravitational parameter. Its first returned element is the perifocal distance.[^3] This osculating periapsis matches the instantaneous state under the two-body conic model. Perturbations or thrust can move the osculating line of apsides and change whether the predicted trajectory reaches that radius.

Mean periapsis belongs to an averaging theory. GMAT exposes distinct short-term and long-term Brouwer-Lyddane mean elements, and the NASA-hosted conversion paper explains that mean elements support longer prediction but do not directly represent the instantaneous position and velocity.[^5][^7] A mean periapsis should therefore retain the theory, reference frame and element epoch.

A TLE or CCSDS OMM is also theory-bound. CCSDS carries the centre, frame, time system, epoch and `MEAN_ELEMENT_THEORY`, with SGP4 fields attached to the compatible theory.[^4] A perigee or periapsis derived from those elements is a model output, not a separately observed closest approach. It should be regenerated with a compatible SGP-family propagator and the original metadata.[^4]

## Edge cases and events

A circular conic has no unique periapsis direction because its radius is constant. SPICE assigns a conventional zero argument of periapsis for exact zero eccentricity and warns about accuracy near zero.[^3] In a near-circular orbit, the scalar minimum may still be operationally useful, but a rapidly varying argument of periapsis is weak evidence of a physical rotation.

A parabolic or hyperbolic conic retains a finite periapsis even though it has no finite apoapsis.[^3][^9] This makes periapsis applicable to a flyby or escape trajectory as well as a closed orbit. The two-body label still requires care near a sphere-of-influence transition or under strong third-body perturbation.

Numerical propagation can locate periapsis as a local radial minimum. The answer depends on the central body, force model, integration interval and event tolerance. Low terrain clearance, atmospheric passage or impact assessment also requires shape, atmosphere and terrain models plus state and model uncertainty. A nominal periapsis radius or altitude is not a safety margin, and a covariance must be propagated into the nonlinear event quantity before a confidence claim is made.[^4][^6]

## References

[^1]: NASA Science, [Basics of Space Flight glossary](https://science.nasa.gov/learn/basics-of-space-flight/glossary/).
[^2]: NASA Science, [Basics of Space Flight: Gravity and Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-4/).
[^3]: NASA Jet Propulsion Laboratory, [CSPICE `oscelt_c`: osculating elements from a state](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^4]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3 Corrigendum 1: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^5]: NASA General Mission Analysis Tool documentation mirror, [Spacecraft Orbit State](https://documentation.help/GMAT/SpacecraftOrbitState.html).
[^6]: NASA General Mission Analysis Tool documentation mirror, [Calculation Parameters](https://documentation.help/GMAT/CalculationParameters.html).
[^7]: Gim J. Der and Roy Danchick, [Conversion of Osculating Orbital Elements to Mean Orbital Elements](https://ntrs.nasa.gov/api/citations/19960035775/downloads/19960035775.pdf), 1996.
[^8]: Ordnance Survey, [A guide to coordinate systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf), version 3.6, 2020.
[^9]: European Space Agency, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).

