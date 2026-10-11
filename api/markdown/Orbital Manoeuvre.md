An orbital manoeuvre is a deliberate propulsive action that changes or maintains a spacecraft trajectory.

Mission planning normally expresses the target as a velocity change or a finite-thrust trajectory at a defined time. A complete command context includes the reference frame, direction, magnitude, ignition epoch, duration, mass change and propulsion device. CCSDS treats a zero-duration manoeuvre as impulsive and can also represent device-specific thrust, acceleration and duty-cycle histories.[^1]

## Impulsive and finite-burn models

An impulsive manoeuvre changes velocity instantaneously while position and mass are treated through a discontinuity. It is useful for analytic design and for burns short relative to the orbital period. A real burn has bounded thrust and duration; mass, gravity and position evolve throughout it. NASA formulates conversion from impulse sequences to coast-thrust-coast finite-burn arcs as an optimal-control problem with burn timing and steering variables.[^4]

Finite duration introduces gravity and steering effects, attitude slews, ignition and shutdown transients, minimum impulse, plume constraints, thermal limits and settling time. Electric propulsion can require hundreds or thousands of operating hours under power and thrust constraints, whereas chemical propulsion is generally favoured for rapid, high-thrust changes.[^6] Equal nominal delta-v does not make these executions interchangeable.

## Energy, plane and timing changes

Tangential burns at apses commonly change periapsis or apoapsis. Radial and out-of-plane components change other elements, and phasing manoeuvres alter period so that relative position changes over later revolutions. Every burn is a vector change rather than a scalar addition.

For a pure instantaneous plane rotation by dihedral angle `δ` with unchanged speed `v`, the ideal cost is `Δv = 2v sin(δ/2)`.[^5] It is cheaper where speed is low, often near apoapsis. When one burn changes both energy and plane, the cost follows the difference between the complete before-and-after velocity vectors. Adding an independent plane-change cost is correct only for genuinely separate burns.

Execution time matters because the state and target move. Navigation estimates the present orbit, flight-path control supplies a delta-v vector and epoch, and spacecraft engineers turn these into attitude and thruster commands.[^3] A late burn can require a different vector or miss an encounter even if its scalar magnitude is unchanged.

## System and mission constraints

ECSS requires orbit-control capability to follow mission analysis for acquisition, transfer and on-station maintenance. It also requires mission-wide propellant sizing and records of pulse profiles and total impulse for thruster qualification.[^2] Propellant allocated to one correction is no longer available for station keeping, later collision avoidance or disposal.

Operational optimisation balances more than fuel. Landsat-7 manoeuvre planning had to preserve a repeating ground track, a narrow descending-node local-time range and longitude control while choosing altitude and plane corrections.[^8] This flight case shows why a locally small delta-v can still be unacceptable if it violates payload or orbit constraints.

## Uncertainty and post-burn knowledge

Initial-state error, ignition timing, magnitude, direction, thrust and mass-flow uncertainty disperse the post-burn state. NASA's manoeuvre-covariance study shows that modelling the nominal burn without its execution uncertainty cannot reproduce the final covariance unless burn uncertainty is zero.[^7] Covariance should be propagated through the manoeuvre with the same epoch, frame and state definition used for the nominal trajectory.

Tracking after execution reconstructs achieved magnitude and pointing, updates the orbit and identifies bias for later manoeuvres.[^3] A useful status vocabulary separates planned, commanded, executed and reconstructed manoeuvres. Command acceptance does not prove the planned state change occurred, and a reconstructed burn may differ from telemetry-based thruster-on time.

## Collision avoidance and debris constraints

Collision avoidance begins with screening and risk assessment rather than an automatic threshold. NASA recommends sharing predicted ephemerides that include planned manoeuvres and checking candidate mitigations for secondary conjunctions.[^9] Miss distance, covariance realism, time to closest approach, tracking quality, spacecraft capability and coordination with the other operator all affect the decision.

The UK National Space Operations Centre's service presents manoeuvre trade-space plots and recalculates conjunction probability as data change. Its 2024 announcement also emphasises finite fuel and retaining capability for future avoidance and end-of-life disposal.[^10] This is decision support for operators, not an autonomous command authority. ESA's 2019 account similarly describes collision-avoidance automation under development and calls for communication so automated plans do not conflict.[^11]

IADC guidance calls for limiting collision probability with known objects and planning post-mission disposal and passivation.[^12] Manoeuvre budgets must therefore preserve a credible disposal path. An avoidance manoeuvre that reduces immediate risk but creates another conjunction or defeats disposal objectives is not a complete solution.

## Validation and evidence

Verification should reproduce analytic special cases, confirm frames and units, propagate the installed finite-burn model, test spacecraft constraints and disperse navigation and execution errors. Independent software or calculation guards against a shared implementation mistake. Planned trajectories should be screened before command release and again when the orbit solution changes. Flight performance is established by telemetry and post-burn orbit determination; simulation, a converged optimiser or an uploaded command supports a more limited claim.

## References

[^1]: Consultative Committee for Space Data Systems, [Orbit Data Messages, CCSDS 502.0-B-3, Issue 3](https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/11/502x0b3e2.pdf).
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-60-30C: Satellite attitude and orbit control system requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-60-30C30August2013.pdf).
[^3]: NASA Science, [Chapter 13: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^4]: NASA Johnson Space Center, [Multi-Impulse to Time Optimal Finite Burn Trajectory Conversion](https://ntrs.nasa.gov/api/citations/20200011552/downloads/20200011552.pdf).
[^5]: Orbital Mechanics & Astrodynamics, [Plane Change Manoeuvres](https://orbital-mechanics.space/orbital-maneuvers/plane-change-maneuvers.html).
[^6]: NASA Small Spacecraft Systems Virtual Institute, [In-Space Propulsion](https://www.nasa.gov/smallsat-institute/sst-soa/in-space_propulsion/).
[^7]: NASA Technical Reports Server, [Adapting Covariance Propagation to Account for Modelled and Unmodelled Manoeuvres](https://ntrs.nasa.gov/api/citations/20070018023/downloads/20070018023.pdf).
[^8]: NASA Technical Reports Server, [Optimization of Maneuver Execution for Landsat-7 Routine Operations](https://ntrs.nasa.gov/api/citations/20000097047/downloads/20000097047.pdf).
[^9]: NASA Office of the Chief Engineer, [Spacecraft Conjunction Assessment and Collision Avoidance Best Practices Handbook](https://nodis3.gsfc.nasa.gov/OCE_docs/OCE_50.pdf).
[^10]: UK National Space Operations Centre, [Satellite Manoeuvre Support](https://www.gov.uk/government/news/monitor-space-hazards-new-feature-satellite-manoeuvre-support).
[^11]: European Space Agency, [Automating collision avoidance](https://www.esa.int/Space_Safety/Space_Debris/Automating_collision_avoidance).
[^12]: Inter-Agency Space Debris Coordination Committee, [Space Debris Mitigation Guidelines, Revision 2](https://orbitaldebris.jsc.nasa.gov/library/iadc-space-debris-guidelines-revision-2.pdf).

