A Hohmann transfer is a two-impulse transfer between coplanar circular orbits using an ellipse tangent to both.

Classical Hohmann analysis assumes a point-mass central body, circular concentric initial and final orbits, no perturbations and instantaneous tangential velocity changes. Under those assumptions the first impulse enters the transfer ellipse and the second circularises at the opposite apsis. Hohmann is minimum delta-v among two-impulse transfers within this specific problem; it is not a universal optimum over other impulse counts, plane changes, flight times or propulsion modes.[^1][^2]

## Ideal two-body calculation

Let the circular-orbit radii be `r_1` and `r_2`, the central-body gravitational parameter be `μ`, and the transfer semi-major axis be

`a_t = (r_1 + r_2) / 2`.

Circular speed at radius `r` is `sqrt(μ/r)`. Transfer-ellipse speed at either endpoint follows vis-viva, `v_t = sqrt[μ(2/r - 1/a_t)]`. For an outward transfer where `r_2 > r_1`, the ideal impulses are

`Δv_1 = sqrt(μ/r_1) [sqrt(2r_2/(r_1+r_2)) - 1]`

and

`Δv_2 = sqrt(μ/r_2) [1 - sqrt(2r_1/(r_1+r_2))]`.

Propellant calculations use the sum of the impulse magnitudes. An inward transfer reverses which endpoint is periapsis and which burns reduce rather than increase speed, but the total cost still sums positive magnitudes. The ideal coast time is half the transfer-ellipse period,

`t_H = π sqrt(a_t^3/μ)`.[^2]

Radii must be measured from the central body's centre rather than from its surface. Units for `r`, `μ`, velocity and time must be consistent. These equations do not include launch losses, attitude settling, finite ignition or shutdown, reserve margins or trajectory corrections.

## Timing and phasing

An ellipse that intersects the destination orbit does not ensure an encounter. Departure must be timed so the target reaches the arrival point after the transfer coast. NASA's Earth-to-Mars example makes this explicit: minimum-energy opportunities recur only when the planetary phase geometry is suitable.[^1] Earth-orbit rendezvous has the same logical condition, although the periods and operational constraints differ.

Navigation also changes the planned result. Injection error, solar radiation pressure, non-spherical gravity and other disturbances move the spacecraft away from a reference trajectory. Tracking supports orbit determination, while flight-path control designs a delta-v vector and execution epoch to correct the difference.[^4] Mission budgets therefore include injection dispersions, correction manoeuvres and statistical reserves rather than only the two analytic impulses.

## From impulses to burns

An impulse is a mathematical discontinuity in velocity. A real engine supplies bounded thrust for a finite duration while gravity, mass and position continue to change. NASA's finite-burn work treats burn start, stop and steering as an optimal-control problem and uses impulsive trajectories as starting approximations.[^3] The approximation is strongest when burn duration is short compared with the local orbital period and the state changes little during thrust.

Installed propulsion determines the execution. Chemical systems suit rapid high-thrust manoeuvres, whereas electric propulsion may supply greater total impulse through burns lasting hundreds or thousands of hours under power and thrust constraints.[^5] A low-thrust spiral is therefore not a slowly executed Hohmann transfer. It follows a different continuously forced trajectory and needs its own optimisation. University of Strathclyde research comparing high-thrust, bi-elliptic and hybrid high/low-thrust transfers illustrates how propulsion mass and transfer duration can change the preferred architecture.[^7] This is analytical evidence, not a claim that a particular transfer has been flight-qualified.

## Operational reporting and validation

A reproducible manoeuvre record gives ignition epoch, duration, reference frame, delta-v vector or thrust history, mass change and propulsion device. CCSDS distinguishes an impulsive case by zero duration and can represent finite thrust and duty cycles.[^6] A scalar delta-v without time and frame cannot reconstruct the state change.

Validation should first reproduce the closed-form two-body result, then add the mission force model, finite burns, attitude constraints, navigation uncertainty and dispersions. Independent propagation and unit checks catch many setup errors. After execution, tracking reconstructs achieved magnitude and pointing so that the orbit solution and later commands can be updated.[^4] A design should report whether a quoted cost is analytic, numerically optimised, Monte Carlo dispersed, commanded or reconstructed from flight data.

## References

[^1]: NASA Science, [Chapter 4: Trajectories](https://science.nasa.gov/learn/basics-of-space-flight/chapter4-1/).
[^2]: Orbital Mechanics & Astrodynamics, [Hohmann Transfer](https://orbital-mechanics.space/orbital-maneuvers/hohmann-transfer.html).
[^3]: NASA Johnson Space Center, [Multi-Impulse to Time Optimal Finite Burn Trajectory Conversion](https://ntrs.nasa.gov/api/citations/20200011552/downloads/20200011552.pdf).
[^4]: NASA Science, [Chapter 13: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^5]: NASA Small Spacecraft Systems Virtual Institute, [In-Space Propulsion](https://www.nasa.gov/smallsat-institute/sst-soa/in-space_propulsion/).
[^6]: Consultative Committee for Space Data Systems, [Orbit Data Messages, CCSDS 502.0-B-3, Issue 3](https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/11/502x0b3e2.pdf).
[^7]: Steven Owens and Malcolm Macdonald, University of Strathclyde, [An Analogy to Bi-Elliptic Transfers Incorporating High and Low-Thrust](https://strathprints.strath.ac.uk/43802/1/Owens_S_Macdonald_M_An_analogy_to_bi_ellilptic_transfers_incorporating_high_and_low_thrust_Aug_2012.pdf).

