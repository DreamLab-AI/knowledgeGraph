Spacecraft proximity operations are controlled relative motions close enough to another object that navigation, control or propulsion errors can create a collision, plume or contact hazard.

Proximity operations can include approach, station keeping, inspection, fly-around, capture preparation, servicing and departure. Their boundary is mission-specific. NASA human-rating language defines proximity through entry into a crewed spacecraft's safety zone, while other missions use an approach ellipsoid, keep-out zone or a change from absolute to relative navigation.[^2] A distance without the corresponding geometry and safety rule does not define the phase.

## Relative guidance and constrained motion

Navigation estimates the chaser's position and velocity relative to the target and, when required, relative attitude and angular rate. The state must name its frame: target body axes, docking-port coordinates and a local orbital frame lead to different component values and dynamics. Guidance converts the mission objective into approach corridors, hold points, inspection arcs or departure paths. Control then allocates thrusters or other actuators while respecting plume and target constraints.

Close-range observability changes with sensor type and geometry. Optical line of sight alone lacks instantaneous range; lidar or radio range does not by itself determine all transverse components; a symmetric or tumbling target can make pose ambiguous. NASA's small-spacecraft review records both relative-navigation demonstrations and missions whose wider capture or docking goals were prevented by propulsion, power or control failures.[^4] Successful sensing is therefore evidence for one part of the loop, not proof of a safe proximity-operation system.

## Holds, departures and passive safety

A hold arrests planned closing motion or keeps the vehicle inside a defined relative-state box while systems and authority are checked. A retreat deliberately increases separation along a controlled path. An escape or collision-avoidance manoeuvre responds to immediate danger with a rapid departure. An abort ends or reconfigures the operation and may contain one of those manoeuvres. Programme terminology varies, so the commanded state change matters more than its label.

Passive safety describes what happens without another successful command. A free-drift trajectory can be designed to miss the protected volume for a specified time under stated dispersions. An active departure still needs navigation, decision logic and propulsion. ESA's ATV design illustrates the layered approach: a passively safe leg to the 250 m point, a 200 m keep-out zone, planned holds at 20 m and 12 m, crew and ground confirmation, independent monitoring, fault detection, escape and collision-avoidance functions.[^1] These values belong to the cooperative ATV/ISS system.

NASA's human-rating requirements reserve hold, stop, continue and breakout capability when an uncrewed active spacecraft operates near a crewed vehicle.[^2] Automation can execute nominal guidance while crew or ground retains intervention authority. For high communications latency or link loss, an onboard monitor may need to hold or depart before a human response could arrive.

## Plume, contamination and target interaction

Reaction-control plumes can impose force, torque and heat and can contaminate sensors, radiators, optics or docking surfaces. Hazard depends on thruster chemistry, thrust and mass flow, pulse history, separation, plume angle, target shape and surface sensitivity. It cannot be reduced to a single safe distance.

NASA's 2026 Plume Impingement Software Module work distinguishes costly direct-simulation Monte Carlo analysis from faster engineering models intended for real-time use.[^3] The retained source describes a research prototype rather than an operationally qualified planning tool. Any fast model needs a stated validation domain, uncertainty and conservative response outside that domain.

An inhibited jet or a failed thruster changes the available force and torque. Guidance must know whether the remaining configuration can maintain the corridor, hold and depart safely. It should also account for translation caused by attitude-control firings and for centre-of-mass changes during capture or transfer.

## Flight and UK evidence

Astroscale's operator account says ELSA-d achieved an absolute-to-relative navigation handover and held a relative home position for more than seven hours. Anomalous spacecraft conditions stopped the planned autonomous capture attempt. Later operations achieved controlled close approaches despite the loss of four of eight thrusters.[^5] This supports flight evidence for relative navigation, station keeping and degraded-control operations; it does not support a claim that autonomous debris capture was completed.

The University of Surrey's RemoveDEBRIS mission acquired conventional-camera and flash-lidar data during an in-orbit vision-based-navigation experiment. The data were returned to Earth for processing.[^8] This was representative flight-data acquisition, not onboard closed-loop proximity navigation.

The UK Space Agency's regulatory sandbox ran a mock licensing exercise around a fictitious mission, including cooperative and non-cooperative targets, docking and debris removal.[^7] Its 2025–26 annual report records COSMIC and CLEAR concept work and a £75.6 million active-debris-removal tender whose anticipated award was delayed to summer 2026.[^6] The 2026 UK Space Strategy states future funding intentions, including up to £77 million for a national mission.[^9] These sources establish regulatory work, concepts, procurement and planned investment. They do not establish an awarded, launched or operational UK removal service.

## Verification

Evidence should progress from dynamics and plume analysis through sensor calibration, software and processor tests, hardware-in-the-loop relative motion, fault injection, integrated vehicle trials and flight. Cases should include navigation bias and latency, target tumble, lighting or reflectance changes, missed burns, stuck or inhibited jets, link loss, false contact indications and entry into departure modes. A technology demonstration should state which functions were onboard, which were supervised and which objective was actually completed.

## References

[^1]: European Space Agency, [Automated Transfer Vehicle rendezvous and docking](https://www.esa.int/esapub/onstation/os11.pdf), *on Station*, no. 11, December 2002.
[^2]: NASA, [NPR 8705.2B: Human-Rating Requirements for Space Systems](https://nodis3.gsfc.nasa.gov/displayAll.cfm?Internal_ID=N_PR_8705_002B_&page_name=all).
[^3]: NASA, [Plume Impingement Software Module](https://ntrs.nasa.gov/citations/20260001852), 2026.
[^4]: NASA Small Spacecraft Systems Virtual Institute, [State of the Art of Small Spacecraft Technology: Guidance, Navigation, and Control](https://www.nasa.gov/smallsat-institute/sst-soa/guidance-navigation-and-control/), 2026.
[^5]: Astroscale, [ELSA-d Finalizes De-Orbit Operations Marking Successful Mission Conclusion](https://www.astroscale.com/en/news/astroscales-elsa-d-finalizes-de-orbit-operations-marking-successful-mission-conclusion).
[^6]: UK Space Agency, [Annual Report and Accounts 2025-2026](https://www.gov.uk/government/publications/uk-space-agency-annual-report-and-accounts-2025-2026/uk-space-agency-annual-report-2025-2026).
[^7]: UK Space Agency, [Regulatory Sandbox for Rendezvous and Proximity Operations: Stage 1 Report](https://www.gov.uk/government/publications/regulatory-sandbox-for-rendezvous-and-proximity-operations-stage-1/regulatory-sandbox-for-rendezvous-and-proximity-operations-stage-1-report).
[^8]: University of Surrey, [RemoveDEBRIS mission](https://www.surrey.ac.uk/surrey-space-centre/missions/removedebris).
[^9]: HM Government, [UK Space Strategy](https://www.gov.uk/government/publications/uk-space-strategy/uk-space-strategy), 2026.

