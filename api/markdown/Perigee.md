Perigee is the Earth-specific periapsis, where an Earth-centred orbit or trajectory reaches its least geocentric distance.

NASA defines perigee as periapsis in Earth orbit, and JPL's Solar System Dynamics glossary describes it as a trajectory's closest point to Earth.[^1][^3] The latter wording includes flybys and escape paths as well as closed satellite orbits. `Periapsis` remains the generic term for any selected central body.

## Radius, altitude and clearance

The **perigee point** is chosen by minimum distance from Earth's adopted centre. **Perigee radius** reports that centre-to-centre distance. **Perigee altitude** reports a distance above an adopted surface. NASA's orbital-debris handbook defines the point by distance from Earth's centre and the altitude by distance above Earth's surface.[^2]

That surface is not unique at precision. Earth is oblate, and an ellipsoid, geoid, local vertical datum and terrain surface answer different questions. GMAT defines its `Altitude` parameter as distance to the tangent plane at the sub-satellite point on an assumed ellipsoid, while `RadPer` is the minimum osculating distance to the coordinate-system origin.[^6][^7] A value from another system may use a nominal scalar Earth radius or a radial ellipsoid intersection, so the convention must travel with the number.

Ordnance Survey distinguishes ellipsoid height, the geoid and local mean-sea-level height, with mainland British mapping tied to Ordnance Datum Newlyn.[^8] This is bounded evidence for the importance of a named reference surface. ODN is not an orbital perigee datum, and terrain clearance still needs an appropriate topographic model.

## State, model and epoch

An osculating perigee is derived from the conic matching an instantaneous state. JPL SPICE requires an inertial-frame state, epoch and the primary's gravitational parameter, and returns the perifocal distance with the equivalent conic elements.[^4] GMAT's `RadPer` is likewise explicitly osculating.[^6] Perturbations and manoeuvres can make the next propagated minimum differ from that value.

Mean elements remove selected periodic terms according to a named theory. A TLE is a set of SGP-family mean elements rather than an instantaneous inertial state. CCSDS OMM metadata carries the centre, reference frame, time system, epoch and mean-element theory, with SGP4-specific fields attached to the compatible model.[^5] A TLE-derived perigee should keep the original element set, TEME convention, propagation time and SGP4 implementation. Direct substitution into an unrelated Kepler solver is not an equivalent calculation.[^5]

## Edge cases and operational risk

A circular orbit has constant radius and no unique perigee direction. SPICE sets a conventional zero argument of periapsis when eccentricity is exactly zero and warns that the angle becomes inaccurate close to zero.[^4] Equal catalogue apogee and perigee values can be useful scalar summaries, while their associated apsidal direction remains indeterminate.

Parabolic and hyperbolic Earth trajectories retain one finite perigee but have no finite apogee.[^4][^9] In a perturbed numerical trajectory, there may also be several local radial minima. `Next perigee` must state the central body, force model, propagation interval, event rule and tolerance.

Perigee is often used in atmospheric lifetime, re-entry, impact and disposal work, but a nominal altitude is not a clearance or safety margin. The analysis needs the appropriate atmosphere, Earth shape, terrain and manoeuvre models, together with state and model uncertainty. CCSDS covariance metadata is tied to an epoch, frame and basis; the covariance must be propagated through the nonlinear event calculation before a confidence interval can be attached to perigee time or altitude.[^5]

## References

[^1]: NASA Science, [Basics of Space Flight glossary](https://science.nasa.gov/learn/basics-of-space-flight/glossary/).
[^2]: NASA, [NASA-HDBK-8719.14: Handbook for limiting orbital debris](https://standards.nasa.gov/sites/default/files/standards/NASA/Baseline/1/nasa-hdbk-871914_baseline_with_change_1.pdf).
[^3]: NASA Jet Propulsion Laboratory, [Solar System Dynamics glossary: Perigee](https://ssd.jpl.nasa.gov/glossary/perigee.html).
[^4]: NASA Jet Propulsion Laboratory, [CSPICE `oscelt_c`: osculating elements from a state](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^5]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3 Corrigendum 1: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^6]: NASA General Mission Analysis Tool documentation mirror, [Spacecraft Orbit State](https://documentation.help/GMAT/SpacecraftOrbitState.html).
[^7]: NASA General Mission Analysis Tool documentation mirror, [Calculation Parameters](https://documentation.help/GMAT/CalculationParameters.html).
[^8]: Ordnance Survey, [A guide to coordinate systems in Great Britain](https://www.ordnancesurvey.co.uk/documents/resources/guide-coordinate-systems-great-britain.pdf), version 3.6, 2020.
[^9]: European Space Agency, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).

