A Keplerian orbit is a conic solution of the isolated Newtonian two-body problem.

This model treats the bodies as point masses interacting only through mutual inverse-square gravity in an inertial frame. Bound solutions are circular or elliptical; the zero-energy boundary is parabolic and positive-energy solutions are hyperbolic.[^1][^3] `Keplerian` therefore identifies a dynamics model, not simply a six-number coordinate format.

## Model behaviour

Specific mechanical energy and angular momentum are constant under the model. The orbit remains in a fixed plane, its geometric elements stay fixed and orbital phase advances with time. ESA GODOT's Keplerian propagator demonstrates this distinction directly: the geometry is held constant while anomaly advances.[^1]

JPL SPICE describes its conic result as the nominal path followed without other Solar System bodies or non-gravitational forces.[^3] A Keplerian model excludes spherical-harmonic gravity, atmospheric drag, radiation pressure, thrust, tides and relativistic corrections. GMAT exposes these effects as separate force-model choices, showing why a higher-fidelity propagator has a different physical boundary.[^4]

## State representation and metadata

Classical Keplerian elements encode size or periapsis scale, shape, plane orientation, apsidal orientation and phase. A usable state also needs a central body, gravitational parameter, origin, reference frame, epoch, time system, units and angle conventions. SPICE requires an inertial-frame state at a specified epoch to derive osculating elements.[^2] CCSDS orbit messages carry centre, frame, time and representation metadata because the element values alone are ambiguous.[^6]

Reference frames are versioned physical conventions. IERS lists its 2010 Conventions as the approved standard on its current register and labels later working updates as non-definitive.[^10] An Earth-orbit element set should identify its actual frame rather than relying on `inertial` as a complete description.

## Representation is not force model

Mission software can express a state in Keplerian elements while numerically integrating a perturbed force model. Conversely, an analytic two-body propagator can begin from a Cartesian state. GMAT separates force-model configuration from state representation, and STK separates two-body, J2 and J4 propagators.[^4][^5] Documentation should name both choices.

An **osculating Keplerian orbit** is the conic tangent to the actual trajectory at an epoch. JPL warns that propagating this conic can become grossly inaccurate for some satellites and comets as time from the epoch grows.[^7] A **mean-element orbit** removes selected periodic terms according to a named analytical theory. NASA's mean-element paper states that mean elements do not directly represent instantaneous position and velocity.[^9] Osculating, mean and TLE/SGP4 elements must not be mixed without the appropriate transformations and propagator.

## Singularities and validity

Classical angles become singular at important limits. An exact circular orbit has no unique periapsis, so argument of periapsis and true anomaly from periapsis are undefined; ESA Navipedia suggests argument of latitude.[^8] An equatorial orbit has no unique ascending node. At a circular equatorial limit, several angles collapse into a longitude-like combination. SPICE uses explicit conventions for exact degeneracies and warns about poor accuracy nearby.[^2]

Cartesian or nonsingular element sets avoid these coordinate failures. Their use does not remove physical uncertainty, and conversion near a singularity can still amplify numerical error.

Keplerian propagation has no universal accuracy duration. Adequacy depends on orbit regime, force environment, elapsed time and the permitted position, timing or event error. A defensible result states its epoch, propagation span, omitted forces, numerical conventions and comparison against observations or a higher-fidelity reference.[^4][^5][^7]

## References

[^1]: European Space Agency, [GODOT: Two-body propagation and orbital quantities](https://godot.io.esa.int/docs/tutorials2/fundamentals/astro/02-two-body-propagation-and-orbital-quantities.html).
[^2]: NASA Jet Propulsion Laboratory, [CSPICE `oscelt_c`: osculating elements from a state](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^3]: NASA Jet Propulsion Laboratory, [CSPICE `conics_c`: state from conic elements](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/conics_c.html).
[^4]: NASA General Mission Analysis Tool documentation mirror, [Propagator and Force Model](https://documentation.help/GMAT/Propagator.html).
[^5]: Ansys, [STK two-body, J2 and J4 propagators](https://help.agi.com/stk/12.7.1/Content/stk/vehSat_orbitProp_2bodyJ2J4.htm).
[^6]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^7]: NASA Jet Propulsion Laboratory, [Solar System Dynamics frequently asked questions](https://ssd.jpl.nasa.gov/faq.html).
[^8]: ESA Navipedia, [Two-body Problem](https://gssc.esa.int/navipedia/index.php?title=Two-body_Problem).
[^9]: Gim J. Der and Roy Danchick, [Conversion of Osculating Orbital Elements to Mean Orbital Elements](https://ntrs.nasa.gov/api/citations/19960035775/downloads/19960035775.pdf), 1996.
[^10]: International Earth Rotation and Reference Systems Service, [IERS Conventions](https://www.iers.org/iers/en/dataproducts/conventions/conventions).

