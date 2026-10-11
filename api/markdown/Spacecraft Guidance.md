Spacecraft guidance converts a mission objective into feasible commanded motion for a spacecraft.

It uses the current state supplied by [[Spacecraft Navigation]], a desired trajectory or attitude, vehicle constraints and mission rules to generate target states, manoeuvres or profiles for control to follow. Translational guidance can define burn time, direction, duration or acceleration. Attitude guidance can define orientation, angular rate and slew profiles for payload, antenna, power and thermal needs.[^1][^2]

## Guidance within the loop

Guidance sits between estimation and execution. Navigation estimates where the spacecraft is and how it is moving. Guidance determines where it should go next. Control compares the commanded and estimated states and drives actuators to reduce the error.[^1][^2] Mission software may host all three functions in one process, but their inputs, outputs and uncertainties remain distinct.[^1][^2]

A reference trajectory or attitude schedule supplies the nominal path. Guidance responds to navigation updates, expected dynamics and constraints by retaining that path or designing a correction. NASA's public spaceflight chapter groups mission design, orbit determination and flight-path control under the broad heading of navigation.[^1] For an engineering interface, state estimation remains navigation and reference or manoeuvre generation is guidance.[^1]

## Command metadata and constraints

A guidance command needs a reference frame, epoch or validity interval, time system, units, direction convention and target definition. Attitude commands also require a source-to-destination frame mapping and rotation convention. Orbit and attitude exchange standards carry these fields because identical numbers can denote different physical commands under different frames or time scales.[^3][^4]

Commands must be achievable. Translational profiles are limited by available thrust, propellant, pointing, thermal conditions and manoeuvre timing. Attitude profiles are limited by torque, angular momentum, slew rate, settling time, sensor fields of view and flexible dynamics.[^2] A planned or commanded manoeuvre is not evidence of achieved motion; execution error belongs in the closed-loop performance result.[^2]

Flexible structures can make an otherwise valid command unusable. An Airbus UK activity modelled attitude guidance and control for spacecraft with long wire booms and demonstrated active damping on a DLR laboratory rig. ESA records that some modes remained uncontrollable but lightly damped, the work closed in 2021 and no mission was planned.[^10] This is ground-development evidence rather than flight qualification.[^10]

## Ground and onboard authority

Guidance can run on the ground, onboard or across both segments. Ground systems can use long data arcs, larger computing resources and human review. Onboard guidance reduces communication delay and can react during loss of contact, but it must operate within flight-computer, sensor and assurance limits.[^5] The allocation should name which target selection, manoeuvre design, constraint checks, inhibits and approvals the spacecraft owns.[^5]

Deep Space 1 flight-demonstrated an onboard chain that acquired asteroid and star images, estimated position, selected ion-thrust direction and duration, and commanded the attitude-control and propulsion systems towards a target assigned by the ground.[^6] DART's terminal SMART Nav system performed image processing, target selection, guidance and divert commanding onboard because ground latency could not meet the impact requirement. The spacecraft struck Dimorphos in September 2022 without human intervention during the terminal sequence.[^7] These are mission-specific autonomy architectures, not interchangeable templates.[^6][^7]

ATV Jules Verne used another allocation. The spacecraft automatically navigated and executed staged rendezvous manoeuvres, while ground teams and the International Space Station crew retained go/no-go, hold, retreat and escape authority. The successful April 2008 docking demonstrates that automated execution and human supervision can coexist in one guidance concept.[^8]

## Modes and fault response

Guidance modes can include acquisition, detumble, safe pointing, slew, station keeping, orbit correction, rendezvous, retreat and escape. Each mode needs entry and exit conditions, available sensors and actuators, command limits, authority and a defined fallback. A stale navigation state, lost target, actuator saturation or violated keep-out condition must not leave nominal guidance issuing unsafe commands.[^2][^8]

Fault management spans requirements, hazard and containment analysis, architecture, verification, contingency procedures and operations. NASA's 2012 fault-management handbook draft lays out that lifecycle and its review gates.[^9] Its draft status matters: it is useful process guidance rather than a current normative requirement.[^9]

## Verification and evidence

Verification should trace every guidance requirement to analysis or test across nominal and off-nominal cases. Useful evidence includes Monte Carlo dispersion analysis, software tests, processor timing, sensor and actuator models, fault injection, hardware-in-the-loop testing, closed-loop vehicle simulation and flight calibration.[^2][^9] Tests should exercise mode transitions, stale or rejected estimates, command discontinuities, actuator limits and recovery paths.[^2][^9]

Maturity statements should identify the tested boundary. An algorithm in simulation, a flight-software build on representative hardware, an integrated ground test, a technology demonstration and operational mission use are different evidence levels. Deep Space 1, DART and ATV provide flight evidence for their named implementations; the Airbus UK flexible-control work remains a laboratory result.[^6][^7][^8][^10]

## References

[^1]: NASA Science, [Basics of Space Flight, Chapter 13: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^2]: European Cooperation for Space Standardization, [ECSS-E-ST-60-30C: Satellite attitude and orbit control system requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-60-30C30August2013.pdf), 30 August 2013.
[^3]: Consultative Committee for Space Data Systems, [CCSDS 504.0-B-2: Attitude Data Messages](https://ccsds.org/Pubs/504x0b2.pdf), January 2024.
[^4]: Consultative Committee for Space Data Systems, [CCSDS 502.0-B-3 Corrigendum 1: Orbit Data Messages](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^5]: European Space Agency, [New tool aids space mission design](https://www.esa.int/Enabling_Support/Preparing_for_the_Future/Discovery_and_Preparation/New_tool_aids_space_mission_design), 26 February 2019.
[^6]: NASA Jet Propulsion Laboratory, [Deep Space 1: Autonomous Navigation](https://www.jpl.nasa.gov/nmp/ds1/tech/autonav.html).
[^7]: NASA and Johns Hopkins Applied Physics Laboratory, [DART Final Technical Report](https://ntrs.nasa.gov/api/citations/20230015804/downloads/DART%20Final%20Technical%20Report.pdf), October 2023.
[^8]: European Space Agency, [ATV-1 Jules Verne operations](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/ATV/ATV-1_Jules_Verne_operations).
[^9]: NASA, [Draft NASA-HDBK-1002: Fault Management Handbook](https://www.nasa.gov/wp-content/uploads/2015/04/636372main_NASA-HDBK-1002_Draft.pdf), 2 April 2012.
[^10]: European Space Agency, [Airbus UK flexible-spacecraft control activity](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/Robust_Attitude_Guidance_and_Control_for_Flexible_Spacecraft).

