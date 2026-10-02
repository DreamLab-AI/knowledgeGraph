An orbital element is one value in a parameter set used to describe an orbit. For an ideal two-body trajectory, six independent quantities fix the orbit's size and shape, the orientation of its plane, the direction of periapsis and the body's position along the orbit at an epoch. Element sets are compact and useful for analysis, but their meaning depends on conventions that must accompany the six numbers.[^1][^2]

## Classical elements

A common classical set contains:

- **semi-major axis**, which sets the orbit's scale;
- **eccentricity**, which sets its conic shape;
- **inclination**, the tilt of the orbital plane to a reference plane;
- **right ascension of the ascending node**, the direction where the orbit crosses that plane northwards;
- **argument of periapsis**, the angle in the orbital plane from the ascending node to periapsis; and
- an **anomaly** or equivalent time quantity locating the body in its orbit.

There is no single universal choice for the sixth field. A set may use true, eccentric or mean anomaly at the epoch, while NASA's introductory formulation uses time of periapsis passage.[^2] Period is operationally useful but, in the two-body model, is derived from semi-major axis and the central body's gravitational parameter rather than being an additional independent element.

## Conventions and singularities

An element set also needs the central body, reference frame and plane, epoch, time system, units, angle ranges and direction conventions. It must state whether the values are **osculating**, describing the instantaneous tangent Keplerian orbit, or **mean**, with selected perturbations averaged according to a named theory.[^1] SGP4 mean elements, including those distributed in two-line element form, remain tied to SGP4. They are not generic Keplerian elements.

Classical elements become singular in important ordinary cases. In a circular orbit, periapsis has no unique direction, so argument of periapsis and anomaly measured from it are undefined separately. In an equatorial orbit, there is no unique ascending node, so right ascension of the node is undefined.[^3] Near these limits, formally defined angles can still be poorly conditioned.

Software can avoid a particular singularity by using Cartesian position and velocity, equinoctial elements or combined angles such as longitude of periapsis or argument of latitude.[^3] The selected variant must be named: “equinoctial elements” covers more than one convention, especially for retrograde motion. Changing representation improves numerical behaviour but does not remove observation or force-model uncertainty.

## Exchange and provenance

CCSDS orbit messages support several representations. An Orbit Ephemeris Message carries time-tagged Cartesian states; parameter and mean-element messages carry their own required metadata; the OCM format can distinguish osculating and named mean-element conventions and attach covariance.[^1] ESA's Trajectory model similarly requires users to distinguish Cartesian input, osculating Keplerian elements, OEM and TLE input.[^4]

A reusable element record should therefore preserve the element-set type, central body, frame, epoch and time scale, units, mean-element theory or osculating flag, source observations or product, and covariance where supplied. Six unlabelled numbers are not a reproducible orbit description.

## References

[^1]: Consultative Committee for Space Data Systems, [Orbit Data Messages, Recommended Standard 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf).
[^2]: NASA, [Basics of Space Flight, Chapter 5: Planetary Orbits](https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/).
[^3]: NASA, [Low-thrust trajectory analysis using equinoctial elements](https://ntrs.nasa.gov/api/citations/19900012491/downloads/19900012491.pdf).
[^4]: European Space Agency, [Network of Models: Trajectory](https://nom.esa.int/models/trajectory).

