Spacecraft rendezvous brings a chaser from a separated orbit to a controlled relative state from which close approach, capture or docking can begin.

Rendezvous is an orbit-design and closed-loop guidance, navigation and control problem. It is more than reducing the distance between two objects: the chaser must arrive with acceptable relative position, velocity, attitude and angular rate while retaining a safe response to dispersions and failures. NASA treats trajectory profiles, sensors, navigation, control effectors, collision avoidance, separation manoeuvres, plume analysis and crew simulation as parts of the same rendezvous, proximity-operations and docking discipline.[^1]

## Phase boundary and relative state

There is no universal distance at which rendezvous becomes proximity operations. A mission should define the transition through an event or state, such as acquisition of relative navigation, entry into an approach ellipsoid, crossing a safety-zone boundary or arrival at a hold point. The target may be cooperative, with reflectors, radio links and a known attitude, or uncooperative, with uncertain shape, tumble and no navigation aids.

Relative state needs a declared coordinate frame and epoch. Far from the target, mission design may use inertial orbital elements or the difference between two absolute state vectors. Closer in, guidance commonly uses a target-centred local-vertical/local-horizontal frame or docking-port axes. A vector in target body axes rotates with the target; a vector in a local orbital frame follows the target orbit. Passing a state between navigation, guidance and control without the frame, origin and time can produce a plausible but unsafe command.

Range, line of sight, bearing, range rate and image features are measurements rather than the complete state. An estimator combines them with relative dynamics, sensor calibration and uncertainty. Observability changes with geometry: one bearing does not give instantaneous range, while a scalar range leaves transverse direction weak. Sensor placement, trajectory design, navigation and effector performance must therefore be designed together.[^4]

## Guidance, control and safety

Guidance selects transfers, approach axes and gates; navigation estimates whether the vehicle is where guidance assumes; control turns the desired motion into thruster or other actuator commands. A rendezvous profile normally includes checks before irreversible closure: relative-navigation quality, propulsion availability, command and telemetry links, target state and permission to proceed.

Passive safety and active collision avoidance are different claims. A passively safe trajectory misses the target after a defined loss of control, for a stated time and set of navigation and manoeuvre uncertainties. A collision-avoidance, escape or separation manoeuvre is an active burn that relies on detection, decision logic and working actuators. ESA's Automated Transfer Vehicle (ATV) approached the International Space Station through an approach ellipsoid towards a 250 m point outside a 200 m keep-out zone. Its eccentricity-increase design provided a passive recovery path on the way to that point; later stages used monitored holds and active escape or collision-avoidance responses.[^3] Those distances and trajectories belonged to the ATV/ISS geometry and are not universal limits.

Target conditions constrain control. Shuttle rendezvous experience records that reaction-control-system plume impingement can apply loads and torque and deposit contaminants on the target.[^2] Approach direction, attitude, pulse timing and inhibited jets should be assessed with the actual plume, target surfaces and separation. A historical Shuttle firing rule cannot simply be copied to a smaller servicing vehicle.

## Autonomy and operational authority

“Autonomous rendezvous” should say which functions run onboard. A vehicle may process relative measurements onboard while ground approves manoeuvres, or it may estimate, guide and control without immediate approval. Supervised automation can also reserve hold, retreat or escape commands to a crew or control centre.

For proximity to a crewed spacecraft, NASA human-rating requirements call for the crew to monitor and control an uncrewed active vehicle, including hold, stop, continue and breakout functions and direct voice communication where applicable.[^5] This does not require the crew to hand-fly every approach. It establishes intervention and awareness alongside automation. Communications latency and outage tolerance determine whether ground can remain in the immediate control loop; a lunar or deep-space operation may need onboard fault detection and departure logic that a low-Earth-orbit mission can supervise from the ground.

## Verification and evidence status

Verification should cover navigation errors, thruster dispersion, timing and frame faults, loss of sensors or links, target-state uncertainty, plume constraints and abort transitions. Useful stages include software simulation, processor-in-the-loop testing, calibrated sensor tests, six-degree-of-freedom hardware facilities, human-in-the-loop trials, integrated spacecraft tests and flight demonstration.

A NASA multi-sensor campaign used a six-degree-of-freedom laboratory with an Advanced Video Guidance Sensor and rangefinders across 35 open-loop nominal and contingency trajectories.[^6] That is substantive sensor and geometry evidence, but open-loop laboratory testing does not qualify a complete closed-loop spacecraft. Likewise, Orion RPOD studies establish a systems-design method rather than the current flight configuration of a particular vehicle.[^4]

The UK's rendezvous and proximity-operations regulatory sandbox used a fictitious debris-removal mission and a mock licensing process that included cooperative and non-cooperative targets and docking.[^7] It is evidence of regulatory learning, not government policy, a flight test or an operational UK rendezvous service. Engineering articles should label simulation, hardware test, qualification, flight demonstration and operational use separately.

## References

[^1]: NASA Johnson Space Center, [Rendezvous, Proximity Operations and Docking Subsystems](https://www.nasa.gov/reference/jsc-rendezvous-prox-ops-docking-subsystems/).
[^2]: NASA, [Space Shuttle Rendezvous and Proximity Operations Experience](https://ntrs.nasa.gov/citations/20070013549), 2007.
[^3]: European Space Agency, [Automated Transfer Vehicle rendezvous and docking](https://www.esa.int/esapub/onstation/os11.pdf), *on Station*, no. 11, December 2002.
[^4]: NASA, [Orion Rendezvous, Proximity Operations and Docking Design and Analysis](https://ntrs.nasa.gov/citations/20070025134), 2007.
[^5]: NASA, [NPR 8705.2B: Human-Rating Requirements for Space Systems](https://nodis3.gsfc.nasa.gov/displayAll.cfm?Internal_ID=N_PR_8705_002B_&page_name=all).
[^6]: NASA, [Multi-Sensor Testing for Automated Rendezvous and Docking](https://ntrs.nasa.gov/citations/20080018957), 2008.
[^7]: UK Space Agency, [Regulatory Sandbox for Rendezvous and Proximity Operations: Stage 1 Report](https://www.gov.uk/government/publications/regulatory-sandbox-for-rendezvous-and-proximity-operations-stage-1/regulatory-sandbox-for-rendezvous-and-proximity-operations-stage-1-report).

