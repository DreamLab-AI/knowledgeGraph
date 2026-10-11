Spacecraft guidance, navigation and control is the feedback architecture that estimates vehicle state, chooses commanded motion and drives actuators to achieve it.

Navigation determines where the spacecraft is and how it is moving. Guidance determines the desired trajectory or attitude and generates commands subject to constraints. Control turns the difference between estimated and commanded state into actuator demands.[^1][^3] These functions may share processors and software, but they retain different inputs, outputs and evidence.[^1][^3]

## Closed-loop architecture

Sensors and time-tagged observations start the loop. A navigation estimator produces position, velocity, attitude, rate and uncertainty in declared frames. Guidance combines that state with a mission reference, constraints and mode logic. A controller and allocator command reaction wheels, magnetic torquers, thrusters or other effectors. Vehicle dynamics and disturbances create the next state, which sensors observe again.[^1][^2][^3]

Interfaces need more than numeric fields. They should define frame origin and axes, epoch and time system, units, rotation sense, state and covariance ordering, command validity, update rate, latency, data-quality flags and stale-data behaviour.[^3][^4] A controller can be mathematically correct yet act incorrectly if navigation and guidance use different frames or timing assumptions.[^3][^4]

## Knowledge, command and performance

Commanded, estimated and achieved states are different quantities. ECSS separates knowledge error from pointing performance: knowledge compares actual and estimated output, while performance compares target and achieved output and includes estimation, guidance, control and physical execution effects.[^3][^4] Sensor accuracy, control residual and payload performance should therefore occupy separate fields in a budget.[^3][^4]

Uncertainty crosses the loop. A navigation covariance informs guidance margins; manoeuvre dispersions affect later estimates; actuator saturation or structural response changes achieved motion. Correlated sensor, timing, alignment and disturbance terms cannot always be combined as independent root-sum-square contributions.[^4]

## Modes and authority

GNC modes partition behaviour for acquisition, detumble, safe pointing, slew, orbit manoeuvre, fine science, rendezvous and abort. Each mode needs entry and exit conditions, sensors and actuators, command limits, fault responses and recovery criteria.[^3] Orion's flight software, for example, spans launch, orbit, lunar transit, entry, rendezvous, docking and abort scenarios, with navigation sensors and pilot inputs feeding commands to effectors.[^2]

Ground and onboard systems can divide authority differently by phase. Communications delay, contact gaps and short hazard timelines favour onboard decisions; large models, long data arcs and human review favour ground processing. `Autonomous` should state exactly which observations, estimates, target choices, commands, inhibits and approvals occur onboard.[^5][^6][^7]

ATV Jules Verne executed an automated rendezvous and docking in April 2008, using staged navigation and manoeuvres while ground controllers and the International Space Station crew retained hold, retreat, escape and go/no-go authority.[^7] DART used a different allocation: its terminal optical navigation, target selection, guidance and divert commanding ran onboard because ground latency could not meet the impact requirement. It completed the September 2022 terminal sequence without human intervention.[^6]

NASA presents AstroNav and autoNGC as future technology demonstrations that integrate functions currently divided between spacecraft and ground.[^5] That programme should remain labelled planned. Its advertised architecture is not equivalent to the flight evidence from DART or ATV.[^5][^6][^7]

## Fault protection

Fault protection monitors the loop for invalid sensors, estimator divergence, actuator saturation, timing faults, mode violations and loss of communications or power. Responses can include sensor voting or exclusion, estimator reinitialisation, command inhibition, momentum unloading, hold, retreat, escape or transition to a power- and thermally safe attitude.[^3][^9]

A 2012 NASA draft handbook treats fault management as a lifecycle activity spanning requirements, hazard and containment analysis, architecture, verification, contingency procedures and operations.[^9] Its draft status prevents treating it as a current normative standard, but the lifecycle boundary remains useful for organising evidence.[^9]

Airbus UK participated in an ESA star-tracker safe-mode activity that tested three tracker models under high-rate and radiation-degraded conditions and verified reference-mission scenarios. ESA records closure in 2022 at TRL 4 functional verification.[^10] This is bounded ground-development evidence, not an operational flight system.[^10]

## Verification and validation

GNC verification should build from unit and software tests through Monte Carlo analysis, processor timing and numerical testing, sensor and actuator tests, hardware-in-the-loop work, integrated vehicle simulation and flight calibration. Cases should cover uncertainty dispersions, stale and rejected observations, sensor dropouts, actuator limits, mode transitions and off-nominal recovery.[^3][^4][^9]

ATV's pre-flight campaign provides an integrated example. Flight sensors and flight-control software were connected to simulated spacecraft dynamics and a physical relative-motion system for life-size closed-loop rendezvous testing before the later successful mission.[^8] The test and flight records together establish more than either a software simulation or sensor demonstration alone.[^7][^8]

Maturity remains configuration-specific. NASA warns that some current small-spacecraft component figures and TRL designations depend on manufacturer data, payload, environment and mission assumptions.[^1] UK CAP2210 version 3, dated 24 March 2026, is current orbital-operator guidance, but regulatory guidance does not prove that a named GNC design is qualified, licensed or safe.[^11]

## References

[^1]: NASA Small Spacecraft Systems Virtual Institute, [Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/), 7 May 2026.
[^2]: NASA, [Orion avionics and software](https://www.nasa.gov/reference/avionics-and-software/).
[^3]: European Cooperation for Space Standardization, [ECSS-E-ST-60-30C: Satellite attitude and orbit control system requirements](https://ecss.nl/wp-content/uploads/standards/ecss-e/ECSS-E-ST-60-30C30August2013.pdf), 30 August 2013.
[^4]: European Cooperation for Space Standardization, [ECSS-E-ST-60-10C: Control performance](https://ecss.nl/wp-content/uploads/2008/11/ECSS-E-ST-60-10C(15November2008).pdf), 15 November 2008.
[^5]: NASA, [AstroNav](https://www.nasa.gov/mission/astronav/).
[^6]: NASA and Johns Hopkins Applied Physics Laboratory, [DART Final Technical Report](https://ntrs.nasa.gov/api/citations/20230015804/downloads/DART%20Final%20Technical%20Report.pdf), October 2023.
[^7]: European Space Agency, [ATV-1 Jules Verne operations](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/ATV/ATV-1_Jules_Verne_operations).
[^8]: European Space Agency, [ATV closed-loop rendezvous testing](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/ATV/Successful_tests_of_ATV_rendezvous_replicate_the_2007_Jules_Verne_mission), 27 September 2006.
[^9]: NASA, [Draft NASA-HDBK-1002: Fault Management Handbook](https://www.nasa.gov/wp-content/uploads/2015/04/636372main_NASA-HDBK-1002_Draft.pdf), 2 April 2012.
[^10]: European Space Agency, [Safeguarding Safe Mode with Star Trackers](https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Shaping_the_Future/Safeguarding_Safe_Mode_with_Star_Trackers).
[^11]: UK Civil Aviation Authority, [CAP2210: Guidance for Orbital Operator licence applicants and licensees](https://www.caa.co.uk/data-and-publications/publications/documents/content/cap2210/), version 3, 24 March 2026.

