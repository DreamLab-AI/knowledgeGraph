Restricted three-body problem is an idealised gravitational model in which two massive primaries move under their mutual gravity while a third, negligible-mass body moves under their attraction without changing the primaries’ motion.[^1345]

## Circular model and rotating frame

CR3BP adds the assumptions that the primaries are point masses in circular orbits about their common barycentre and that the spacecraft is unforced. It is a useful autonomous model for studying motion near libration points, but it is not a literal account of a mission in the full Solar System.[^1345][^1346]

A common normalised synodic frame places the barycentre at the origin, the x-axis along the primary-to-secondary line, the z-axis along the primaries’ angular-momentum vector and the y-axis to complete a right-handed frame. The primaries are stationary in this rotating frame. Length is often scaled by their separation and time by the inverse mean motion. In that convention the mass fraction is `μ = m₂/(m₁ + m₂)`, with the smaller primary at `x = 1 − μ` and the larger at `x = −μ`.[^1347]

Authors may reverse primary labels, choose another axis sign or use `μ` for the dimensional gravitational parameter `GM`. A state or equation therefore needs its body order, origin, axes, rotation sense, units and scaling. Do not reuse a coordinate or numerical mass parameter until those conventions are matched.[^1346][^1347]

## Equations and invariants

In the usual normalised convention, the rotating-frame equations include Coriolis terms, for example `ẍ − 2ẏ = ∂Ω/∂x`, `ÿ + 2ẋ = ∂Ω/∂y`, and `z̈ = ∂Ω/∂z`, where `Ω` combines the centrifugal potential with the two point-mass potentials. A corresponding Jacobi constant is conserved for the unforced CR3BP. Its sign and scaling must be stated because published formulations differ.[^1345][^1347]

Five equilibrium solutions are fixed in this frame, not in an inertial frame. General closed-form trajectory solutions are unavailable, so numerical propagation, correction and continuation construct periodic or quasi-periodic families and their transfers.[^1345][^1346]

## Stability and model limits

Linear stability depends on the equilibrium and primary mass ratio. Collinear points have stable and unstable modes, so a nearby bounded orbit can coexist with a direction that departs from the reference. The triangular points are linearly stable only within the ideal model’s mass-ratio condition. Neither result says that every nearby trajectory behaves the same way, or that perturbations are absent.[^1346][^1348]

Real trajectories add effects such as primary eccentricity, other bodies, non-spherical gravity, solar-radiation pressure and manoeuvres. Exact CR3BP equilibria do not persist in a higher-fidelity cislunar model, although many nearby dynamical structures remain useful approximations. Flight design must match the model to the mission, epoch and required accuracy, then assess uncertainty and maintenance under the selected force model.[^1346]

UK research context is bounded: the University of Surrey lists two- and three-body trajectory optimisation and maintenance of periodic and quasi-periodic orbits among its research areas. That documents research capability, not a flight-qualified trajectory or operation of a particular mission.[^1359]

## References

[^1345]: Breckenridge et al., [“The Circular Restricted 3-Body Problem”](https://ntrs.nasa.gov/api/citations/20220000309/downloads/AAS_Breckenridge_DavisSpreenScheuerleHowell_v2.pdf), AAS 22-1292.
[^1346]: NASA, [*Astrodynamics Convention & Modeling Reference*, version 1.1](https://ntrs.nasa.gov/api/citations/20220014814/downloads/NASA%20TP%2020220014814%20final.pdf), 2022.
[^1347]: NASA/JPL, [Three-Body Periodic Orbits API documentation](https://ssd-api.jpl.nasa.gov/doc/periodic_orbits.html).
[^1348]: NASA Science, [“What is a Lagrange Point?”](https://science.nasa.gov/resource/what-is-a-lagrange-point/).
[^1359]: University of Surrey Space Centre, [“Astrodynamics research”](https://www.surrey.ac.uk/surrey-space-centre/research/astrodynamics).

