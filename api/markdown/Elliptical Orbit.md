An elliptical orbit is a bound conic orbit with eccentricity from zero to less than one in the ideal two-body model.

An ellipse is a closed plane curve for which the sum of the distances to two fixed foci is constant. Its semi-major axis sets scale and its eccentricity sets shape. Coincident foci give the circular special case at eccentricity zero.[^1]

## Focus geometry and motion

In the usual relative-orbit description, the gravitating origin lies at one focus rather than at the geometric centre of the ellipse. Radius varies from periapsis to apoapsis. Manchester's dynamics notes give these ideal distances as `a(1-e)` and `a(1+e)`, where `a` is semi-major axis and `e` is eccentricity.[^3]

Orbital speed and angular rate vary around the ellipse. Conservation of angular momentum gives Kepler's equal-area law: the radius vector sweeps equal areas in equal times, so speed rises near periapsis and falls near apoapsis.[^2][^4] For negative specific orbital energy, the solution is bound. Energy fixes semi-major axis, while energy and angular momentum together determine eccentricity and the semilatus rectum.[^3]

Period depends on semi-major axis and gravitational parameter, not on eccentricity, in the ideal model. Newton's general form uses the sum of both masses.[^4][^5] The familiar spacecraft expression using only central-body `GM` neglects spacecraft mass and should be identified as that approximation.

## Barycentre and the focus

Kepler's original planetary statement places the Sun at one focus.[^2] Newtonian two-body mechanics is more precise: both bodies move around their common barycentre.[^5] Each body traces a scaled ellipse about that barycentre, while their relative separation traces the conic governed by `G(m1+m2)`. Treating one primary as fixed is justified only to the accuracy allowed by the mass ratio.

This distinction matters for binary stars, planetary ephemerides and precision mass estimation. For an ordinary spacecraft the central body's displacement is negligible for most calculations, but the approximation should still be explicit in the model definition.

## Elements, epoch and real trajectories

Six classical elements can describe an osculating ellipse and a position on it, but the state is incomplete without a central body, gravitational parameter, origin, reference frame, epoch, time system and units. JPL SPICE requires an inertial-frame state at an epoch and the primary's gravitational parameter to construct an equivalent conic.[^7] CCSDS orbit messages carry the associated centre, frame, time and representation metadata for exchange.[^8]

An osculating ellipse is tangent to the actual trajectory at its epoch. JPL cautions that real planetary or spacecraft paths are only approximately elliptical and that two-body propagation can become grossly inaccurate for strongly perturbed bodies.[^6] Oblateness, third-body gravity, drag, radiation pressure, relativity and thrust make the osculating ellipse change with time.

Mean elliptical elements remove selected periodic terms according to a named theory. They are neither an instantaneous state nor a unique average independent of method. A claim that an orbit is elliptical should therefore state whether it refers to an osculating conic, a mean-element model, a planned reference orbit or a bounded description of the propagated trajectory.

Near the circular limit, periapsis direction becomes ill-conditioned even while semi-major axis and radius remain useful. At eccentricity one the closed ellipse boundary ends; a parabolic conic is unbound, and eccentricity greater than one gives a hyperbola.[^3][^7]

## References

[^1]: NASA Science, [Basics of Space Flight: Ellipses and eccentricity](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-1/).
[^2]: NASA Science, [Orbits and Kepler's Laws](https://science.nasa.gov/solar-system/orbits-and-keplers-laws/).
[^3]: University of Manchester, [Advanced dynamics: Orbits](https://theory.physics.manchester.ac.uk/~mikeb/lecture/pc167/gravity/orbits.html).
[^4]: University of Sheffield, [Newton's derivation of Kepler's laws](https://vikdhillon.staff.shef.ac.uk/teaching/phy105/celsphere/phy105_derivation.html).
[^5]: NASA Science, [Basics of Space Flight: Gravity and Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-3/).
[^6]: NASA Jet Propulsion Laboratory, [Solar System Dynamics frequently asked questions](https://ssd.jpl.nasa.gov/faq.html).
[^7]: NASA Jet Propulsion Laboratory, [CSPICE `oscelt_c`: osculating elements from a state](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^8]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.

