A gravitational two-body problem models two masses interacting only through their mutual attraction.

In its classical orbital form, both bodies are point masses, gravity follows Newton's inverse-square law and no external force acts. Extended-body gravity, other bodies, drag, radiation pressure, thrust, tides and relativity lie outside this model.[^5][^7]

## Barycentric and relative motion

Neither body is generally fixed. Both move around their common centre of mass, or barycentre, with distances inversely proportional to their masses.[^1][^2][^4] The barycentre moves uniformly in an inertial frame when no external force acts.

Separating the dynamics gives two simpler parts: uniform motion of the barycentre and internal motion of the separation vector. The relative separation obeys an inverse-square equation with gravitational parameter `G(m1+m2)`.[^1][^4] Its solution is a conic. Each body's barycentric orbit is a mass-scaled version of that relative orbit, so the relative radius and either body's distance from the barycentre are not interchangeable.

Reduced mass, `m1 m2/(m1+m2)`, lets the internal system be treated as an equivalent one-body problem.[^1][^3] Physics texts often use the symbol `mu` for reduced mass, while astrodynamics usually uses `mu` for gravitational parameter. Equations and interfaces should define the symbol rather than assume a convention.

## Conserved quantities and solutions

Mutual gravitational force is central, so torque about the relative origin is zero and angular momentum is conserved. Motion remains in the plane perpendicular to that vector. Mechanical energy is also conserved.[^3][^4][^5] Together, energy and angular momentum determine the conic type and shape.

Negative relative specific energy gives a bound ellipse, including the circular special case. Zero energy gives the parabolic escape boundary and positive energy gives a hyperbola.[^3][^5] A zero-angular-momentum radial collision or escape is degenerate and cannot be represented reliably by ordinary classical orbital angles. JPL SPICE rejects a zero specific angular-momentum state when deriving conic elements.[^6]

Newton's form of Kepler's third law uses the sum of the masses. Glasgow and Sheffield derive the period and barycentric distances for the comparable-mass case.[^1][^4] Replacing `m1+m2` by the primary mass is the restricted approximation, not the general result.

## Fixed-primary approximation

When one mass is much larger, the barycentre lies close to the larger body's centre and the reduced mass approaches the smaller mass. Treating the primary as fixed then gives a simpler central-body equation.[^1][^3] This is normally adequate for an artificial satellite but can fail for binary stars, planet-moon systems, stellar reflex motion or precision ephemerides.

Required accuracy determines whether the approximation is acceptable. A small barycentric displacement can remain measurable even when it is negligible for trajectory design. The chosen state origin must say whether it is barycentric, planet-centred or relative.

## Initial data and validity

An ideal solution requires the relative position and velocity at an epoch, the masses or combined gravitational parameter, and an inertial reference frame. SPICE similarly requires an inertial state, epoch and primary `GM` for an osculating conic.[^6] CCSDS orbit messages carry centre, reference frame, time system and epoch because a numeric state without this context is ambiguous.[^8]

Two-body solutions provide a baseline for analysis, transfer design and initial checking. They are not universal high-fidelity propagators. GMAT distinguishes point-mass gravity from spherical harmonics, atmosphere, third-body forces, solar radiation pressure and relativity.[^7] Model selection should follow altitude, duration, force environment and permitted error, and predictions should be compared with observations or an independently configured higher-fidelity model.

For a real trajectory, a two-body conic is commonly osculating: it matches the instantaneous state but changes as perturbations act. Its validity is local and purpose-dependent. A result should state the epoch, frame, origin, omitted forces, propagation interval and uncertainty rather than presenting the conic as the exact physical path.

## References

[^1]: University of Glasgow, [A1 Dynamical Astronomy: The two-body problem](https://radio.astro.gla.ac.uk/a1dynamics/twobody.pdf).
[^2]: NASA Science, [Basics of Space Flight: Gravity and Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-3/).
[^3]: University of Manchester, [Advanced dynamics: Orbits](https://theory.physics.manchester.ac.uk/~mikeb/lecture/pc167/gravity/orbits.html).
[^4]: University of Sheffield, [Newton's derivation of Kepler's laws](https://vikdhillon.staff.shef.ac.uk/teaching/phy105/celsphere/phy105_derivation.html).
[^5]: NASA, [Introduction to Orbital Mechanics and Spacecraft Attitudes for Thermal Engineers](https://ntrs.nasa.gov/api/citations/20205003902/downloads/Introduction%20to%20Orbital%20Mechanics%20and%20Spacecraft%20Attitudes%20for%20Thermal%20Engineers%20CHARTS%20PDF.pdf), 2020.
[^6]: NASA Jet Propulsion Laboratory, [CSPICE `oscelt_c`: osculating elements from a state](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^7]: NASA General Mission Analysis Tool documentation mirror, [Propagator and Force Model](https://documentation.help/GMAT/Propagator.html).
[^8]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.

