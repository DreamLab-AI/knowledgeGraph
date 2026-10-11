True anomaly is the in-plane angle at the focus from periapsis to an orbiting body's position vector.

It is normally written \(\nu\) and measured in the direction of motion. It describes where the body lies on its osculating conic, but it does not define the orbital plane or an inertial longitude by itself. The central body, state epoch, coordinate frame, reference plane, angle units and the remaining elements are required to reconstruct an inertial position.[^1][^2]

## Geometry and time

For a conic with semilatus rectum \(p\) and eccentricity \(e\), radius is

\[
r=\frac{p}{1+e\cos\nu}.
\]

Periapsis is \(\nu=0\); an ellipse reaches apoapsis at \(\nu=\pi\). True anomaly is a geometric coordinate rather than a uniformly advancing clock. Kepler's second law means that an object on an ellipse passes through true anomaly fastest near periapsis and slowest near apoapsis.[^7] Equal increments of \(\nu\) therefore represent unequal intervals of time except for a circle.

For elliptic propagation, time is commonly advanced through mean anomaly, Kepler's equation is solved for eccentric anomaly, and \(E\) is converted to \(\nu\). A quadrant-safe form uses both numerator and denominator signs, for example

\[
\nu=2\,\operatorname{atan2}\!\left(\sqrt{1+e}\sin\frac{E}{2},\sqrt{1-e}\cos\frac{E}{2}\right).
\]

Equivalent paired sine-and-cosine formulae are also suitable. A single `acos` cannot distinguish whether the spacecraft is moving from periapsis towards apoapsis or returning, and a plain one-argument `atan` loses quadrant information. NASA's SCENIC conversion work explicitly follows the true-anomaly, eccentric-anomaly and mean-anomaly sequence with quadrant handling and unit tests.[^3]

## Singularities and alternative angles

When \(e=0\), the eccentricity vector has no direction and periapsis is undefined. The split between argument of periapsis and true anomaly is then arbitrary even if software reports finite numbers. In a circular inclined orbit, argument of latitude \(u=\omega+\nu\) measures the physical phase from the ascending node. In a circular equatorial orbit, true longitude measures it from a specified reference direction.[^6]

Near circularity, small state changes can rotate the estimated eccentricity vector and cause large, opposing changes in \(\omega\) and \(\nu\), while their sum and the Cartesian state remain stable. Estimation and covariance work should use Cartesian, equinoctial or vector components and treat the classical angles as derived display quantities under a documented convention. A software rule that sets \(\omega=0\) makes its reported “true anomaly” act as a nonsingular longitude; it does not create a physical periapsis.

## Elliptic, hyperbolic and parabolic motion

Geometry and the conic radius equation extend beyond ellipses, but the permitted angle domain changes. On a hyperbola, true anomaly is bounded by the incoming and outgoing asymptotes rather than cycling through every angle in \([0,2\pi)\). A normalised software return value does not imply that every wrapped angle corresponds to a physical point on that branch. Hyperbolic propagation uses hyperbolic anomaly and its own Kepler equation.[^4][^5]

At the parabolic boundary \(e=1\), an elliptic conversion containing \(\sqrt{1-e}\) is singular. Barker's equation or a universal-variable method is appropriate. Near that boundary, algorithms should state their domain, branch convention and conditioning rather than switch formulae on the basis of rounded eccentricity.

## Osculating meaning and uncertainty

True anomaly computed from a Cartesian state is normally the phase on the instantaneous osculating two-body conic at that epoch. Perturbations change its plane, periapsis and shape; propagating \(\nu\) while freezing the other elements is therefore only a two-body approximation. JPL's conic tools take a complete epoch-labelled element set and gravitational parameter, reflecting that dependence.[^4]

No anomaly value carries its own accuracy. Position uncertainty depends on the covariance of the complete state, correlations between elements, timing uncertainty and the propagation model. Near a singularity, a conventional standard deviation for \(\nu\) can be misleading or strongly non-Gaussian. Report the state representation, covariance frame, epoch and prediction horizon rather than treating decimal places in \(\nu\) as evidence of orbit knowledge.

## References

[^1]: NASA, [Basics of Space Flight: Planetary Orbits](https://science.nasa.gov/learn/basics-of-space-flight/chapter5-1/).
[^2]: NASA, [Cartesian and classical orbital-element conversion appendix](https://ntrs.nasa.gov/api/citations/20040084254/downloads/20040084254.pdf).
[^3]: NASA, [SCENIC orbital-element conversion routines](https://ntrs.nasa.gov/api/citations/20180008672/downloads/20180008672.pdf), 2018.
[^4]: JPL NAIF, [SPICE CONICS routine](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/FORTRAN/spicelib/conics.html).
[^5]: European Space Agency, [pykep orbital elements](https://esa.github.io/kep3/elements.html).
[^6]: Ansys, [STK classical Keplerian coordinate type](https://help.agi.com/stk/Content/stk/vehSat_coordType_classical.htm).
[^7]: NASA Goddard Space Flight Center, [How Orbital Motion is Calculated](https://cdaweb.gsfc.nasa.gov/pub/documents/archived_websites/pwg.gsfc.nasa.gov/stargaze/Smotion.htm).

