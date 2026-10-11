Eccentric anomaly is an auxiliary angle that connects time and position on a Keplerian ellipse.

It is normally written \(E\). Unlike true anomaly, it is not the physical polar angle at the occupied focus. Geometrically, it can be constructed at the ellipse's centre using the corresponding point on the circumscribed circle and projection along the minor-axis direction.[^6] Its main practical role is to turn mean anomaly into an elliptic position through Kepler's equation.

## Elliptic geometry

In a periapsis-aligned orbital plane, with the central body at the focus and \(0\le e<1\),

\[
x=a(\cos E-e), \qquad
y=a\sqrt{1-e^2}\sin E,
\]

and

\[
r=a(1-e\cos E).
\]

Here \(a\) is semimajor axis and \(e\) is eccentricity.[^2][^4] These equations are tied to the stated perifocal axes. A complete state still requires the central body and gravitational parameter, epoch and time scale, orbital-plane orientation, coordinate frame and units.

Mean anomaly and eccentric anomaly satisfy

\[
M=E-e\sin E.
\]

Solving this transcendental equation is a numerical step. An implementation should specify angle units, initial estimate, convergence tolerance, stopping rule and behaviour close to the parabolic boundary. The returned root may be wrapped into a chosen interval, but applications that count elapsed revolutions must retain that information separately.[^4][^5]

## Conversion to true anomaly

For an ellipse, a quadrant-safe conversion is

\[
\nu=2\,\operatorname{atan2}\!\left(\sqrt{1+e}\sin\frac{E}{2},\sqrt{1-e}\cos\frac{E}{2}\right).
\]

Paired sine-and-cosine expressions give the same result when their signs are passed to `atan2`. A lone inverse cosine or one-argument arctangent cannot preserve the inbound or outbound quadrant. Position can also be formed directly from \(E\) using the perifocal equations before rotation into the declared reference frame.[^1]

For \(e=0\), \(E\), \(M\) and \(\nu\) can coincide numerically. This equality does not identify a unique periapsis: every diameter of a circle is geometrically eligible. Argument of latitude or true/mean longitude is a better physical phase where the classical periapsis angles are singular.[^6]

## Hyperbolic and near-parabolic cases

Unqualified eccentric anomaly normally means the elliptic variable \(E\). A hyperbola instead uses hyperbolic anomaly \(H\), hyperbolic functions and

\[
M_h=e\sinh H-H.
\]

It is not periodic, and its semimajor-axis sign convention should be stated. Elliptic expressions containing \(\sqrt{1-e^2}\), a finite period or a wrapped \(E\) cannot be transferred mechanically to a hyperbolic branch.[^3][^5]

At \(e=1\), the ellipse-specific construction is singular. Parabolic motion uses Barker's equation or a universal-variable treatment. Algorithms for near-parabolic trajectories need explicit conditioning because substituting a value merely rounded to either side of one can select an unstable or incorrect branch. NASA's near-parabolic work is a historical numerical-method reference rather than evidence that one modern implementation is universally suitable.[^7]

## State type and uncertainty

An eccentric anomaly derived from a Cartesian state belongs to the osculating conic at that epoch. An averaged element set uses the phase defined by its averaging theory. A TLE uses model-specific mean anomaly with SGP4 rather than supplying an elliptic \(E\) for direct insertion into a generic numerical propagator.

Precision in the solution of Kepler's equation is only one error source. Uncertainty in mean anomaly, eccentricity, semimajor axis, epoch, manoeuvres and the force model propagates into \(E\) and position, often appearing as along-track error over time. Near circularity, the separate periapsis direction is ill-conditioned even when phase around the circle is well known. Report covariance in a suitable state and frame, plus its epoch and propagation horizon; solver tolerance cannot replace this information.

Equinoctial formulations combine phase with eccentricity-vector components and avoid the separate periapsis angle over their declared domain. They can improve conditioning for nearly circular or equatorial orbits, but their exact prograde or retrograde convention must be recorded.

## References

[^1]: NASA, [Cartesian and classical orbital-element conversion appendix](https://ntrs.nasa.gov/api/citations/20040084254/downloads/20040084254.pdf).
[^2]: JPL Solar System Dynamics, [Approximate Positions of the Planets](https://ssd.jpl.nasa.gov/planets/approx_pos.html).
[^3]: JPL NAIF, [SPICE CONICS routine](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/FORTRAN/spicelib/conics.html).
[^4]: European Space Agency Advanced Concepts Team, [Invariant Motion study](https://www.esa.int/gsp/ACT/doc/ARI/ARI%20Study%20Report/ACT-RPT-MAD-ARI-04-4104b-InvariantMotion-Reading.pdf).
[^5]: Orekit, [FieldKeplerianOrbit API](https://www.orekit.org/site-orekit-13.1.3/apidocs/org/orekit/orbits/FieldKeplerianOrbit.html), version 13.1.3.
[^6]: Ansys, [STK classical Keplerian coordinate type](https://help.agi.com/stk/Content/stk/vehSat_coordType_classical.htm).
[^7]: NASA, [Near-parabolic orbit calculation](https://ntrs.nasa.gov/citations/19700013787), 1970.

