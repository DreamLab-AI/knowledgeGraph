Semi-major axis is a length parameter that sets the scale of an elliptic orbit.

For an ellipse, the semi-major axis, written `a`, is half the longest diameter. In a two-body orbit with periapsis radius `r_p`, apoapsis radius `r_a` and eccentricity `e`,

`a = (r_p + r_a) / 2`, `r_p = a(1 - e)`, and `r_a = a(1 + e)`.[^1]

Both radii run from the central body's centre of mass. Semi-major axis is therefore not an altitude above a surface. A circular orbit is the `e = 0` limit, for which `a` equals the constant two-body orbital radius.[^1]

## Conic and dimensional conventions

Semi-major axis has dimensions of length. Earth-orbit messages commonly express it in kilometres, while JPL's approximate heliocentric planetary elements use astronomical units.[^2][^5] A numerical value is incomplete without its unit and central body.

Open-conic conventions need care. A parabola has no finite semi-major axis, and software may describe conics through periapsis distance and other variables. NAIF's `oscelt_c`, for example, returns perifocal distance rather than `a` while covering elliptic, parabolic and hyperbolic trajectories.[^3] The representation must therefore be stated before values from different systems are compared.

## Epoch, frame and element type

A real trajectory subject to non-spherical gravity, drag, third-body gravity and manoeuvres is not one fixed Keplerian ellipse. Osculating elements define the two-body conic tangent to the estimated position and velocity at a stated epoch. JPL warns that propagating such elements as an unperturbed two-body orbit can be badly wrong for some bodies.[^4] A reported `a` can change with epoch because the state changes and because perturbations produce periodic variations.

Mean elements remove selected periodic terms according to a named theory. They are not a theory-independent average. CCSDS makes the distinction operationally: an Orbit Parameter Message may contain osculating Keplerian elements, including `SEMI_MAJOR_AXIS` in kilometres, while an Orbit Mean-Elements Message carries a mean state for an analytical or semi-analytical model.[^2] A semi-major axis derived from mean motion also depends on the theory, constants and corrections used.

Two-line element data require particular care. General Perturbations element sets contain doubly averaged Brouwer mean elements fitted with SGP4. CelesTrak states that the matching SGP4 formulation must be used with those data.[^7] Treating a TLE's mean motion as if it defined an ordinary two-body semi-major axis and then using a generic Kepler propagator changes the represented trajectory.

Frame metadata still matters even though `a` is rotationally invariant in an ideal two-body conversion. The position and velocity used to estimate it belong to a central body, reference frame, epoch and time system. CCSDS requires those message semantics because transformations, force models and fitted observations can change the resulting state.[^2] JPL likewise reports osculating small-body elements with an epoch, reference-system equinox and units.[^6]

## Uncertainty and reporting

Operational reporting should include the value and unit, central body, epoch and time system, element type, force or mean-element theory, and the source solution. Where accuracy matters, provide covariance with its epoch, frame and parameter ordering. A single rounded uncertainty on `a` omits correlations with eccentricity, phase and other estimated parameters. JPL makes its small-body covariance applicable at the solution epoch, which can differ from the standard element epoch.[^6]

Formal covariance is conditional on the estimation model. NASA notes that a conventional state covariance can omit environmental, modelling, numerical and unknown errors.[^8] Comparisons should therefore use compatible states or propagate complete covariances to a common epoch and representation. Agreement between two printed semi-major axes does not establish agreement between the underlying trajectories.

## References

[^1]: NASA Science, [Chapter 3: Gravity and Mechanics](https://science.nasa.gov/learn/basics-of-space-flight/chapter3-1/).
[^2]: Consultative Committee for Space Data Systems, [Orbit Data Messages, CCSDS 502.0-B-3, Issue 3](https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/11/502x0b3e2.pdf).
[^3]: NASA Navigation and Ancillary Information Facility, [`oscelt_c`: osculating conic elements](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/C/cspice/oscelt_c.html).
[^4]: JPL Solar System Dynamics, [Frequently Asked Questions: orbital elements](https://ssd.jpl.nasa.gov/faq.html).
[^5]: JPL Solar System Dynamics, [Approximate Positions of the Planets](https://ssd.jpl.nasa.gov/planets/approx_pos.html).
[^6]: JPL Solar System Dynamics, [Small-Body Database API documentation](https://ssd-api.jpl.nasa.gov/doc/sbdb.html).
[^7]: CelesTrak, [A JavaScript SGP4 implementation](https://celestrak.org/software/tutorials/sgp4.php).
[^8]: NASA Technical Reports Server, [An Empirical State Error Covariance Matrix Orbit Determination Example](https://ntrs.nasa.gov/citations/20150004606).

