A bi-elliptic transfer moves between coplanar circular orbits through two transfer ellipses and three impulses.

For an outward transfer, the first impulse raises apoapsis from initial radius `r_1` to an intermediate radius `r_b` beyond target radius `r_2`. At `r_b`, the second impulse changes the periapsis of a second ellipse to `r_2`. The third impulse circularises there. The geometry is not unique until all three radii and the burn directions are stated.[^1][^2]

## Why the extra burn can help

Orbital speed is low at a distant apoapsis. A small velocity change there can produce a large change in the opposite apsis, so the three-impulse sum can fall below the two-impulse Hohmann cost despite the extra burn. The saving is purchased with a large excursion and a longer transfer time.[^2]

Each ellipse can be evaluated with vis-viva. If its endpoint radii are `r_p` and `r_a`, its semi-major axis is `(r_p+r_a)/2`; the velocity immediately before and after each impulse determines that impulse's magnitude. Total ideal cost is `|Δv_1| + |Δv_2| + |Δv_3|`. This is a vector problem if burn directions or planes differ.

## Classical break-even ranges

For the ideal two-body comparison with circular, coplanar endpoints and instantaneous tangential burns, let `R = r_2/r_1`:

- Below about `R = 11.94`, the Hohmann transfer has lower delta-v for every bi-elliptic intermediate radius.
- Between about `11.94` and `15.58`, the preferred transfer depends on `r_b/r_1`.
- Above about `15.58`, a sufficiently large `r_b` can make the bi-elliptic transfer lower in delta-v than Hohmann.

That final statement does not mean that every finite intermediate radius wins. At the limiting large-`r_b` end of the comparison, time of flight can become operationally unacceptable. The Strathclyde analysis confirms the intermediate region and shows why the intermediate radius must remain part of any efficiency claim.[^1][^2]

These thresholds are not universal mission rules. Eccentric endpoints, non-coplanar geometry, perturbations, finite thrust, burn errors, time limits and navigation constraints alter the result. “More efficient” must also name the objective: minimum delta-v, propellant, elapsed time, launch mass, electrical energy and operational risk are different measures.

## Plane changes and supersynchronous transfers

Plane rotation is cheaper where speed is low. For a pure impulsive rotation by dihedral angle `δ` at unchanged speed `v`, `Δv = 2v sin(δ/2)`.[^3] Placing part of an inclination change at the high intermediate apoapsis can therefore improve a combined transfer. The correct calculation subtracts the complete before-and-after velocity vectors; adding a separate plane-change scalar describes separate burns and can overstate the cost of one combined burn.

ESA describes a related operational choice for geostationary delivery: a supersynchronous transfer raises apogee beyond GEO so that later energy and inclination changes can be traded at lower speed.[^4] Supersynchronous does not automatically mean bi-elliptic. The exact sequence may use launch-vehicle injection, spacecraft burns or electric orbit raising and must be described from the flown arcs.

## Finite thrust and propulsion

Classical impulses serve as design seeds. Real thrust is bounded, has duration and changes spacecraft mass while gravity acts. NASA demonstrates conversion of multi-impulse solutions into coast-thrust-coast finite-burn trajectories and reports that long, inclination-changing burns form a particularly demanding optimisation class.[^5]

Propulsion choice can reverse the trade. Chemical thrust can approximate an impulse but consumes propellant rapidly; electric propulsion offers high total impulse at low thrust and can require hundreds or thousands of operating hours.[^6] Strathclyde's high/low-thrust study derives conditions for a hybrid Hohmann-spiral architecture and gives a worked technology case.[^1] Its results remain conditional on the engine, mass and duration assumptions, rather than flight proof for a general architecture.

## Design and validation

A mission study should compare Hohmann, bi-elliptic and other feasible families with the same force model, endpoints, epoch, propulsion limits and margins. Report `r_1`, `r_2`, `r_b`, all three burn vectors and epochs, time of flight, objective, mass history and constraints. Sensitivity to execution errors and perturbations is material because the long high-apogee coast magnifies timing and navigation demands.

High-fidelity tools support impulsive, finite-burn and continuous-thrust multi-phase optimisation, but convergence alone does not establish a global optimum. NASA's Copernicus assessment places such tools from preliminary design through flight operations and records vehicle-specific constraints and independent testing.[^7] Analytic limiting cases, an independent propagator, dispersion analysis and post-burn orbit determination remain necessary checks.

## References

[^1]: Steven Owens and Malcolm Macdonald, University of Strathclyde, [An Analogy to Bi-Elliptic Transfers Incorporating High and Low-Thrust](https://strathprints.strath.ac.uk/43802/1/Owens_S_Macdonald_M_An_analogy_to_bi_ellilptic_transfers_incorporating_high_and_low_thrust_Aug_2012.pdf).
[^2]: Orbital Mechanics & Astrodynamics, [Bi-elliptic Hohmann Transfer](https://orbital-mechanics.space/orbital-maneuvers/bielliptic-hohmann-transfer.html).
[^3]: Orbital Mechanics & Astrodynamics, [Plane Change Manoeuvres](https://orbital-mechanics.space/orbital-maneuvers/plane-change-maneuvers.html).
[^4]: European Space Agency, [Types of orbits](https://www.esa.int/Enabling_Support/Space_Transportation/Types_of_orbits).
[^5]: NASA Johnson Space Center, [Multi-Impulse to Time Optimal Finite Burn Trajectory Conversion](https://ntrs.nasa.gov/api/citations/20200011552/downloads/20200011552.pdf).
[^6]: NASA Small Spacecraft Systems Virtual Institute, [In-Space Propulsion](https://www.nasa.gov/smallsat-institute/sst-soa/in-space_propulsion/).
[^7]: NASA Engineering and Safety Center, [Improvements to the Copernicus Trajectory Design and Optimization System](https://ntrs.nasa.gov/api/citations/20190001055/downloads/20190001055.pdf).

