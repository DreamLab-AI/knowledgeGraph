Spacecraft docking is the controlled contact and mechanical mating of two free-flying vehicles through compatible interfaces.

Docking starts before physical contact because the chaser's guidance, navigation and control system must deliver the docking interfaces within a capture envelope. It ends through a sequence rather than at first touch: initial contact, soft capture, attenuation of relative motion, alignment, retraction, hard capture, seal verification and, where required, connection of power, data or fluids.[^1][^4]

## Docking, capture and berthing

Docking and berthing should not be used as synonyms. NASA's contact-dynamics literature describes docking as kinetic-energy-assisted: a controlled approaching vehicle enters the mechanism's envelope and the interface arrests its residual motion. In berthing, a robotic manipulator generally places an already grappled or captured vehicle at a structural interface.[^3] The International Docking System Standard (IDSS) permits specified berthing uses of a compliant docking port, but does not define all berthing-only mechanisms or their operations.[^1]

Capture is a broader term. A probe and drogue, latches, a magnetic plate or a robotic gripper can restrain a target without creating a pressure-tight passage or a standard docking interface. Capture can precede berthing, servicing or disposal. An article should therefore state whether a demonstration achieved sensing, contact, restraint, soft capture, hard structural mate, pressure sealing or resource transfer.

## Approach conditions and capture envelope

A docking frame normally has an axis along the port normal and transverse axes fixed to the interface. At contact, relative position, pitch, yaw and roll misalignment, axial and lateral velocity and angular rates must lie within the mechanism's allowable envelope. Vehicle mass properties affect the energy and loads that the mechanism must absorb. IDSS Revision G specifies interface geometry and initial-contact conditions, but a programme still owns its approach navigation, alignment aids, vehicle dynamics and operational rules.[^1]

Chaser control should stop active pushing when required by the mechanism. In the NASA Docking System Block 1 sequence, the chaser enters free drift after initial contact and relies on the soft-capture system to complete capture and attenuation. Guide petals create coarse alignment; latches engage opposing strikers; actuators dissipate and settle relative motion, equalise for tunnel alignment and retract the rings. Structural hooks then pull the hard interfaces together and compress the seal before umbilical connectors can transfer power and data.[^4] Other mechanisms use different sequences, so this architecture should not be treated as a universal design.

## Contact dynamics, loads and contamination

Contact couples all six degrees of freedom. Local forces at petals, rings or latches can create rebound, rotation and structural loads away from the contact point. Compliance and damping need to arrest motion without exceeding vehicle or crew limits, while preventing a captured vehicle from escaping before hard mate.

Ground verification combines analytical contact models with hardware-in-the-loop rigs. NASA's Contact Dynamics Simulation Laboratory has been used to determine capture envelopes, measure interface loads and evaluate visual cues. Its real-time simulation feeds measured forces and moments into orbital equations of motion.[^3] JSC's Six Degree of Freedom Dynamic Test System similarly uses closed-loop force feedback with actual mechanical interfaces for development and qualification work.[^6] These facilities give stronger evidence than an animation or purely kinematic fit check, but their controller delay, stiffness, force measurement, gravity compensation and model fidelity still bound the result.

Thruster firing near contact can disturb the mechanism, load the other vehicle or contaminate seals, sensors and exposed surfaces. Approach control therefore uses firing masks, free-drift intervals or small pulses chosen with plume analysis. Post-contact vehicle control and mechanism control must also avoid commanding against one another.

## Interfaces and interoperability

IDSS standardises the androgynous mating geometry, soft- and hard-capture interfaces and related conditions so independently developed systems can be compatible. It does not remove programme-specific work. The current NASA standards index says international standards define interfaces and environments rather than dictating design beyond those interfaces; it lists IDSS Revision G for Gateway docking and a separate rendezvous standard.[^7] Rendezvous sensors, software safety, structural qualification, resource-transfer details and mission permission remain programme responsibilities.

ISS heritage includes several pressurised and unpressurised attachment mechanisms, so “ISS compatible” is too vague to establish a particular interface.[^2] Compatibility should name the standard revision, active or passive configuration, capture mode, tunnel and seal conditions, loads and connected services.

## Autonomy, crew and ground roles

Docking can be manually piloted, automated under supervision or autonomous for a defined interval. The responsible authority should be explicit at the final hold, approach initiation, retreat and contact. The onboard system needs a safe response if pose quality degrades or contact is outside the envelope; crew and ground need displays and commands appropriate to the communications delay. Human supervision does not make the underlying sequence manual, and automated capture does not prove independent mission-level autonomy.

## Development and status

The NASA Docking System paper reports qualification testing of the soft-capture system in 2016 over a set of initial contact conditions.[^4] That is configuration-specific qualification evidence, not a guarantee for every mass pair or arrival state.

ESA's 2017 International Berthing Docking Mechanism account describes a dual active control loop intended to reduce docking forces and accept a wider range of spacecraft masses and flight envelopes.[^5] The retained page does not establish a current qualified configuration or flight record, so those points remain development claims. An ESA Mars sample-transfer activity describes preliminary breadboard tests at technology-readiness level 3 and further functional and system testing.[^8] It is concept-feasibility evidence rather than a flight-qualified Mars-orbit capture or docking capability.

## References

[^1]: International Docking System Standard, [Interface Definition Document, Revision G](https://www.nasa.gov/wp-content/uploads/2026/01/m2m-idss-idd-rev-g-clean-1-23-2026.pdf?emrc=2599a0), released 23 January 2026.
[^2]: NASA, [ISS Interface Mechanisms and their Heritage](https://ntrs.nasa.gov/citations/20110010964), 2011.
[^3]: NASA, [Modeling and Testing of Docking and Berthing Mechanisms](https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20060046498.pdf), 2006.
[^4]: NASA, [NASA Docking System Block 1: NASA's New Direct Electric Docking System](https://ntrs.nasa.gov/api/citations/20180004167/downloads/20180004167.pdf?attachment=true), 2018.
[^5]: European Space Agency, [The International Berthing Docking Mechanism](https://www.esa.int/ESA_Multimedia/Images/2017/04/The_International_Berthing_Docking_Mechanism), 2017.
[^6]: NASA, [Six Degree of Freedom Dynamic Test System](https://ntrs.nasa.gov/citations/20205008864), 2020.
[^7]: NASA, [International Deep Space Standards](https://www.nasa.gov/international-deep-space-standards/), updated 17 March 2026.
[^8]: European Space Agency, [Capture and Docking Mechanisms](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Exploration/Capture_and_docking_mechanisms).

