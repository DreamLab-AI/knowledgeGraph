A halo orbit is a three-dimensional periodic trajectory near a collinear Lagrange point in a restricted three-body model, usually described in the frame rotating with the two primaries.[^1345][^1356]

## Orbit family and terminology

A halo orbit is not a Keplerian ellipse around a body at L1, L2 or L3. It is one member of a family of solutions produced by the coupled gravity of the primaries and motion in the rotating frame. NASA/JPL’s periodic-orbit catalogue distinguishes halo families from planar Lyapunov, vertical, resonant and other three-body families, with family-specific branches and stability data.[^1347]

In a simplified near-equilibrium picture, in-plane and out-of-plane oscillations can synchronise to form a periodic halo solution. Nearby choices whose frequencies do not synchronise generally produce quasi-periodic Lissajous trajectories. Public mission material sometimes uses these labels loosely, so a technical description should state whether it means the mathematical CR3BP family or an operational trajectory that is only approximately periodic in an ephemeris model.[^1356][^1357]

Halo families include near-rectilinear Earth-Moon solutions considered for cislunar mission design. A selected family and amplitude depend on access, eclipse, communication, science, collision-avoidance and control constraints. A mission concept or simulation is not evidence that a proposed orbit has been flown.[^1345][^1347]

## Insertion, navigation and station keeping

Collinear-point halo solutions have unstable modes. Navigation estimates and corrections therefore matter: orbit determination sets the current state and covariance, while targeting methods use the mission force model to calculate a correction that returns the trajectory to its allowed path. Solar-radiation pressure, other bodies, manoeuvre execution and attitude constraints change the realised motion and the maintenance demand.[^1356][^1369]

JWST is an operational Sun-Earth L2 halo-orbit example. STScI’s mission documentation reports an orbit period of about six months and station-keeping on average every 42 days, with manoeuvres skipped when the computed correction is negligible. Solar-radiation pressure on its large sunshield and the mission’s attitude profile contribute to the control problem. Those values describe JWST, not a general halo-orbit cadence or cost.[^1352]

UK research documents techniques rather than ownership of a flown mission. Surrey lists orbit maintenance of periodic and quasi-periodic trajectories as an astrodynamics research area. A University of Glasgow repository paper analyses halo-family selection and maintenance for the proposed Hevelius lunar microsatellite study; its candidate mission is not presented here as flown.[^1359][^1360]

A useful operational record identifies the primary pair and rotating frame, reference orbit family and phase, ephemeris and force model, orbit-determination epoch and covariance, manoeuvre history, station-keeping constraints, and validity interval. “Halo orbit” by itself does not specify those data or establish flight accuracy.[^1347][^1352][^1369]

## References

[^1345]: Breckenridge et al., [“The Circular Restricted 3-Body Problem”](https://ntrs.nasa.gov/api/citations/20220000309/downloads/AAS_Breckenridge_DavisSpreenScheuerleHowell_v2.pdf), AAS 22-1292.
[^1347]: NASA/JPL, [Three-Body Periodic Orbits API documentation](https://ssd-api.jpl.nasa.gov/doc/periodic_orbits.html).
[^1352]: Space Telescope Science Institute, [JWST Orbit](https://jwst-docs.stsci.edu/jwst-observatory-characteristics/jwst-orbit).
[^1356]: S. Gordon, [“Orbit Determination Error Analysis and Comparison of Station-Keeping Costs for Lissajous and Halo-Type Libration Point Orbits”](https://ntrs.nasa.gov/api/citations/19930015532/downloads/19930015532.pdf), 1993.
[^1357]: R. Farquhar and A. Kamel, [“Quasi-periodic orbits about the translunar libration point”](https://ntrs.nasa.gov/citations/19730051618), 1973.
[^1359]: University of Surrey Space Centre, [“Astrodynamics research”](https://www.surrey.ac.uk/surrey-space-centre/research/astrodynamics).
[^1360]: Pirovano et al., [“Halo orbit determination in the mission analysis of the Hevelius-Lunar Microsatellite Mission”](https://eprints.gla.ac.uk/30844/), University of Glasgow repository.
[^1369]: J. Petersen, [“L2 Station Keeping Maneuver Strategy for the James Webb Space Telescope”](https://ntrs.nasa.gov/citations/20190028877), 2019.

