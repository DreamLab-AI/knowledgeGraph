Orbital insertion is the launch-vehicle phase or spacecraft manoeuvre that establishes a vehicle in a specified target orbit around a named body.[^nasa-navigation][^esa-flight-dynamics]

“Insertion” can refer to launch injection, capture into orbit at a destination, or a later orbit-acquisition manoeuvre. The description should name the event, central body, target orbit, reference frame and epoch. A target normally includes more than altitude: orbital energy, plane, phase and uncertainty may matter to the mission.[^nasa-navigation][^ccsds-orbit-data]

## Injection is a dispersed result

Launch vehicles deliver a realised state with statistical errors, not an exact nominal orbit. The Ariane 6 user manual gives typical one-sigma injection figures for different orbit classes. Its standard GTO example lists a 40 km semimajor-axis standard deviation; its 800 km SSO example at 98.6° lists 2.5 km. Those values belong to the manual’s stated cases and are not guarantees for another mission or a universal launcher specification.[^ariane6-manual]

After separation or capture, tracking and orbit determination estimate the achieved state and its covariance. Flight dynamics compares that estimate with the reference trajectory and determines whether a correction is needed, what it can achieve and how much propellant and time remain. A planned correction can be cancelled if the updated trajectory is already satisfactory: NASA reported this for Artemis II’s first outbound correction burn on 3 April 2026.[^nasa-navigation][^esa-flight-dynamics][^nasa-artemis-correction]

## Impulsive planning and finite execution

Early trajectory design may approximate a burn as an instantaneous velocity change. The approximation is useful when burn duration is short relative to orbital motion. A real engine acts over time, while gravity, spacecraft mass, attitude and position evolve. Long or low-thrust insertion burns therefore require a finite-thrust model and execution constraints, not only a target delta-v vector.[^ccsds-orbit-data]

CCSDS Orbit Data Messages distinguish impulse-style delta-v parameters from thrust parameters that describe finite burns, including successive low-thrust intervals. Operational records should identify the frame, epoch and burn model, and separate the planned manoeuvre from the reconstructed achieved state.[^ccsds-orbit-data]

Insertion accuracy is a combined result of launch guidance or spacecraft propulsion, navigation, environmental modelling and execution. A nominal orbit and a dispersion envelope should be reported with their conventions. After the event, state estimation and covariance provide the basis for any orbit correction and for downstream operations.[^ariane6-manual][^nasa-navigation]

## References

[^nasa-navigation]: NASA Science, [Chapter 13: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^ariane6-manual]: Arianespace, [Ariane 6 User’s Manual, issue 2 revision 0](https://ariane.group/app/uploads/sites/4/2024/10/Mua-6_Issue-2_Revision-0_March-2021-1.pdf), March 2021.
[^ccsds-orbit-data]: Consultative Committee for Space Data Systems, [Orbit Data Messages, CCSDS 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^esa-flight-dynamics]: European Space Agency, [Flight Dynamics](https://www.esa.int/Enabling_Support/Operations/Ground_Systems_Engineering/Flight_Dynamics).
[^nasa-artemis-correction]: NASA, [Artemis II Flight Day 3: Outbound Trajectory Correction Burn Update](https://www.nasa.gov/blogs/missions/2026/04/03/artemis-ii-flight-day-3-outbound-trajectory-correction-burn-update/), 3 April 2026.

