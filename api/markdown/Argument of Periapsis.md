Argument of periapsis is the in-plane angle from the ascending node to periapsis, measured in the direction of orbital motion.

It is normally written \(\omega\). The ascending node is where the orbit crosses the chosen reference plane in the positive direction; periapsis is the closest point of the conic to its central body. Earth-centred usage often calls the quantity the argument of perigee, while a Sun-centred orbit has an argument of perihelion. These names do not change the geometry.[^1]

## Convention and context

An isolated value of \(\omega\) is incomplete. It belongs to a central body, reference plane and reference direction, coordinate frame, epoch, angle unit and element convention. Changing from an Earth-equator frame to an ecliptic frame changes the node and can therefore change \(\omega\), even when the physical trajectory is unchanged. Precision ephemerides must also state the time scale; JPL Horizons, for example, labels the epoch and frame of its osculating-element output explicitly.[^3]

For a Cartesian state, let **h** be the orbital angular-momentum vector, **n** the node vector and **e** the eccentricity vector. A reliable conversion obtains \(\omega\) from signed sine and cosine information, using an `atan2`-style expression built from these vectors. A lone inverse cosine returns only a value from zero to \(\pi\) and cannot distinguish all quadrants. Normalising the result to \([0,2\pi)\) or another declared interval changes its representation, not the orbit.[^2]

## Singular cases

For a circular orbit, the eccentricity vector has zero magnitude and no unique direction, so periapsis and \(\omega\) are physically undefined. For an equatorial orbit, the line of nodes is undefined, so the separate longitude of ascending node \(\Omega\) and argument \(\omega\) cannot be recovered uniquely. Software may assign zero to an undefined angle to complete an element set; that value is a convention rather than a measured orientation.[^6]

Useful combinations preserve the geometry that remains observable:

- a circular inclined orbit can use argument of latitude \(u=\omega+\nu\), measured from the ascending node;
- an eccentric equatorial orbit can use longitude of periapsis \(\varpi=\Omega+\omega\), subject to its prograde or retrograde convention;
- a circular equatorial orbit can use true longitude or mean longitude from the reference direction.

Equinoctial and modified equinoctial elements encode eccentricity as components rather than a separate magnitude and periapsis angle. They avoid the common circular and equatorial singularities over their specified inclination domain, although a standard equinoctial set remains singular at exactly retrograde inclination and needs a suitable variant there.[^4][^5]

## Osculating, averaged and TLE values

An osculating argument of periapsis is the direction belonging to the instantaneous two-body conic tangent to a perturbed trajectory at its epoch. It changes as perturbations alter the orbital plane and eccentricity vector. An averaged or mean \(\omega\) removes selected short-period effects according to a particular theory, so “mean” is not a complete definition without naming that theory.

This distinction matters for two-line element sets. CCSDS separates osculating orbit messages from mean-element messages and records the mean-element theory.[^7] A TLE's mean argument of perigee is a parameter of its SGP4-family model and frame conventions; it should not be inserted unchanged into a generic two-body or high-fidelity numerical propagator as though it were an osculating angle.

## Uncertainty and use

Near circularity, a small change in the eccentricity vector can rotate the reported \(\omega\) sharply. A large angular uncertainty can therefore coexist with a well-constrained Cartesian position and velocity. Near equatorial inclination, the split between \(\Omega\) and \(\omega\) is similarly ill-conditioned. Estimation and covariance exchange are better performed in Cartesian, equinoctial or eccentricity-vector components, with classical angles derived for display under a stated convention.

Whenever \(\omega\) is reported, the accompanying record should identify the state epoch, frame, body, gravitational parameter, units, element type and covariance or validity information. Printed precision and angle-wrapping choices do not establish physical accuracy.

## References

[^1]: NASA, [Basics of Space Flight: Planetary Orbits](https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/).
[^2]: NASA, [Cartesian and classical orbital-element conversion appendix](https://ntrs.nasa.gov/api/citations/20040084254/downloads/20040084254.pdf).
[^3]: JPL Solar System Dynamics, [Horizons System manual](https://ssd.jpl.nasa.gov/horizons/manual.html).
[^4]: European Space Agency, [pykep orbital elements](https://esa.github.io/kep3/elements.html).
[^5]: Orekit, [CCSDS orbit element-set types](https://javadoc.io/static/org.orekit/orekit/12.2.1/org/orekit/files/ccsds/ndm/odm/ocm/OrbitElementsType.html), version 12.2.1.
[^6]: Ansys, [STK classical Keplerian coordinate type](https://help.agi.com/stk/Content/stk/vehSat_coordType_classical.htm).
[^7]: Consultative Committee for Space Data Systems, [Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), CCSDS 502.0-B-3 Corrigendum 1, October 2023.

