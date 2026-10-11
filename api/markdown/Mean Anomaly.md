Mean anomaly is a time-like orbital phase that advances uniformly on an ideal fixed Keplerian ellipse.

It is normally written \(M\) and measured from periapsis. For elliptic two-body motion,

\[
M(t)=M_0+n(t-t_0), \qquad n=\sqrt{\frac{\mu}{a^3}},
\]

where \(M_0\) is the mean anomaly at epoch \(t_0\), \(n\) is mean motion, \(\mu\) is the central body's gravitational parameter and \(a\) is semimajor axis.[^1] The linear relationship is exact only for a fixed two-body ellipse. In a perturbed orbit, all osculating elements can evolve; a mean-element model has its own propagation theory.

## From time to position

For an ellipse with \(0\le e<1\), mean anomaly is linked to eccentric anomaly \(E\) through Kepler's equation:

\[
M=E-e\sin E.
\]

This equation is nonlinear in \(E\), so position recovery normally uses a root-finding method. The initial estimate, convergence tolerance, maximum iteration count and handling near \(e=1\) are part of the numerical method. Angles are normally in radians. A degree-based implementation must convert the sine term consistently; JPL's approximate-planet method explicitly supplies the conversion rather than silently mixing degrees and radians.[^2]

After solving for \(E\), a quadrant-safe conversion gives true anomaly and the position on the conic. Newton iteration is efficient for many elliptic cases, but a poor initial estimate can behave badly as eccentricity approaches one. A solver residual and extra printed digits describe numerical convergence, not uncertainty in the state, force model or epoch.

## Range, revolutions and required context

On an ellipse, \(M\) is periodic modulo \(2\pi\). Software may return it in \([0,2\pi)\), \((-\pi,\pi]\), degrees or another declared interval. Wrapping changes the displayed phase but discards the revolution count. Long-arc propagation should retain an unwrapped phase or a separate revolution counter when elapsed revolutions matter.[^4]

A useful record includes the central body, \(\mu\), epoch, time system, element frame, units and whether the element is osculating or averaged. UTC, terrestrial and barycentric time scales are not interchangeable in precision orbit work. Uncertainty in \(M\) is also correlated with semimajor axis or mean motion and with epoch: a small mean-motion error becomes an increasing along-track phase error over time.

## Other conic domains

Elliptic mean anomaly should not be extended to every conic by wrapping it through \(2\pi\). Hyperbolic motion uses a hyperbolic anomaly \(H\) and

\[
M_h=e\sinh H-H,
\]

where \(M_h\) is not periodic.[^3] The parabolic case at \(e=1\) requires a parabolic equation such as Barker's equation, or a universal-variable formulation. Near-parabolic trajectories deserve explicit numerical conditioning rather than direct evaluation of expressions that assume a finite elliptic period.

For a circular orbit, \(M\), \(E\) and true anomaly can have the same numerical value under a chosen convention, but periapsis is arbitrary. Mean longitude or argument of latitude then carries the physically useful phase without pretending that a unique periapsis exists.

## Osculating, mean and TLE usage

“Mean anomaly” does not by itself prove that the other elements are averaged. A software object may store an osculating Keplerian state using mean anomaly as its selected phase coordinate. Conversely, a mean element set is defined by the perturbations and averaging method removed from an osculating trajectory.

A TLE contains model-specific mean elements at its epoch. SpaceTrack Report 3 defines the element fields used by the SGP family, and operational implementations treat the set as coupled input rather than six ordinary Keplerian numbers.[^6][^7] CCSDS likewise requires a mean-element theory for mean-element orbit messages.[^5] TLE mean anomaly should therefore be propagated with the matching SGP4-family conventions, including its reference frame and time treatment, rather than copied into a generic Kepler or numerical propagator.

University of Surrey research describes SGP4 as fast and widely used while comparing it with higher-precision propagation and learning corrections to its output.[^8] That work supports a bounded conclusion: speed and operational prevalence do not turn TLE elements into osculating states, nor do they remove the model's finite accuracy and validity horizon.

## References

[^1]: NASA, [Cartesian and classical orbital-element conversion appendix](https://ntrs.nasa.gov/api/citations/20040084254/downloads/20040084254.pdf).
[^2]: JPL Solar System Dynamics, [Approximate Positions of the Planets](https://ssd.jpl.nasa.gov/planets/approx_pos.html).
[^3]: JPL NAIF, [SPICE CONICS routine](https://naif.jpl.nasa.gov/pub/naif/toolkit_docs/FORTRAN/spicelib/conics.html).
[^4]: Orekit, [FieldKeplerianOrbit API](https://www.orekit.org/site-orekit-13.1.3/apidocs/org/orekit/orbits/FieldKeplerianOrbit.html), version 13.1.3.
[^5]: Consultative Committee for Space Data Systems, [Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), CCSDS 502.0-B-3 Corrigendum 1, October 2023.
[^6]: F. R. Hoots and R. L. Roehrich, [Spacetrack Report No. 3](https://www.amsat.org/amsat/ftp/docs/spacetrk.pdf), 1980.
[^7]: CelesTrak, [Revisiting Spacetrack Report No. 3: SGP4 FAQ](https://celestrak.org/publications/AIAA/2006-6753/faq.php).
[^8]: University of Surrey, [Closing the gap between SGP4 and high-precision propagation](https://openresearch.surrey.ac.uk/esploro/outputs/journalArticle/Closing-the-gap-between-SGP4-and/99940266502346).

