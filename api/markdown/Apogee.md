Apogee is the Earth-specific apoapsis, where an Earth-centred orbit or trajectory reaches its greatest geocentric distance.

NASA's glossary defines apogee as apoapsis in Earth orbit, while its orbital-debris handbook defines the point by maximum distance from Earth's centre.[^1][^2] `Apoapsis` is the appropriate generic term for another central body. The distinction is terminological rather than dynamical.

## Point, radius and altitude

The **apogee point** is the location or event. **Apogee radius** is its distance from the adopted Earth-centred origin. **Apogee altitude** measures from a declared Earth surface. NASA's handbook makes this point/radius versus surface-altitude distinction explicitly.[^2]

Earth is oblate and has several useful reference surfaces. An apogee altitude formed by subtracting one nominal Earth radius from a geocentric radius is not identical to ellipsoidal height, geoid height or terrain clearance. GMAT documents altitude as a distance to a tangent plane on an assumed ellipsoid, whereas its `RadApo` parameter is the maximum osculating distance to the coordinate-system origin.[^4][^5]

Ordnance Survey distinguishes ellipsoid height, the geoid, local mean sea level and Ordnance Datum Newlyn for British mapping.[^6] That UK record illustrates why every precise height needs a reference surface. It does not make ODN suitable for orbital apogee reporting; an orbital product should state its own Earth model and altitude convention.

## Deriving apogee

An osculating apogee comes from the conic that matches a state at a stated epoch. The answer depends on the origin, reference frame, time system and gravitational parameter. GMAT labels `RadApo` as osculating, which distinguishes it from a long-term maximum on the fully perturbed trajectory.[^4]

A mean-element apogee depends on the averaging theory. A TLE-derived value is more specific still. CCSDS OMM metadata records the centre, reference frame, time system, epoch and mean-element theory; its SGP4 fields belong to that model family.[^3] The Vallado record supplies public SGP4 source code and verification cases.[^8] A reproducible TLE-derived apogee therefore retains the element set, epoch, TEME convention, propagation time and compatible SGP4 implementation.[^3][^8]

These representations should not be silently mixed. An osculating state, a Brouwer-type mean orbit and an SGP4 mean element set can yield different apogee values while each remains valid within its own definition. A catalogue apogee is derived data unless the provider states another method.

## Operational use and limitations

ESA's transfer-orbit description uses apogee for the farthest point from Earth and describes a burn there to circularise into geostationary orbit.[^7] This is ideal manoeuvre geometry. A real finite burn occurs over an arc, and thrust error, navigation uncertainty and perturbations affect the achieved orbit.

A circular Earth orbit has constant geocentric radius, so it has no unique apogee location or apsidal direction. Equal apogee and perigee scalar values can still summarise the radius, but they do not define a physical line of apsides. Near-circular catalogue angles can also be highly sensitive to small state errors.

Parabolic and hyperbolic Earth trajectories have no finite apogee. ESA identifies eccentricity one with a parabolic escape boundary and values greater than one with hyperbolic motion.[^7] A maximum altitude quoted over a tracking interval is an interval maximum, not an apogee of the open conic.

For a perturbed or manoeuvring spacecraft, `next apogee` is a local radial maximum found by propagation. It needs a declared force model, frame, central body, interval and numerical tolerance. Its uncertainty depends on the state covariance and model errors; the event time and radius require nonlinear uncertainty propagation rather than reuse of one input covariance component.[^3]

## References

[^1]: NASA Science, [Basics of Space Flight glossary](https://science.nasa.gov/learn/basics-of-space-flight/glossary/).
[^2]: NASA, [NASA-HDBK-8719.14: Handbook for limiting orbital debris](https://standards.nasa.gov/sites/default/files/standards/NASA/Baseline/1/nasa-hdbk-871914_baseline_with_change_1.pdf).
[^3]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3 Corrigendum 1: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^4]: NASA General Mission Analysis Tool documentation mirror, [Spacecraft Orbit State](https://documentation.help/GMAT/SpacecraftOrbitState.html).
[^5]: NASA General Mission Analysis Tool documentation mirror, [Calculation Parameters](https://documentation.help/GMAT/CalculationParameters.html).
[^6]: Ordnance Survey, [A guide to coordinate systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf), version 3.6, 2020.
[^7]: European Space Agency, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).
[^8]: David A. Vallado et al., [Revisiting Spacetrack Report #3](https://celestrak.org/publications/AIAA/2006-6753/), 2006.

