Station keeping is the set of orbit-control manoeuvres used to keep a spacecraft within defined orbital, phase, longitude, ground-track or relative-position limits despite perturbations.[^esa-geo-station-keeping][^esa-flight-dynamics]

Operators should state the controlled quantity and its tolerance. In geostationary orbit (GEO), north-south manoeuvres counter inclination growth, while east-west control manages longitude drift and related orbital effects. Other missions may maintain a repeating ground track, formation geometry or libration-point orbit. The operation is defined by its mission limits, not simply by remaining near one point in space.[^esa-geo-station-keeping][^nasa-geo-platform-study]

## Closed-loop control and budget

Operators use tracking and orbit determination to estimate the spacecraft state, compare it with the reference orbit and design a correction. The burn is then commanded and executed, after which tracking can reconstruct the achieved state. This feedback loop distinguishes a planned or commanded manoeuvre from the orbit the spacecraft actually reached.[^nasa-navigation][^esa-flight-dynamics]

A mission delta-v budget accumulates expected maintenance manoeuvres over the service life, along with acquisition, collision avoidance, momentum or attitude-control use and end-of-life disposal. Propellant needs depend on orbit, deadbands, perturbations, mission duration, spacecraft area-to-mass, propulsion, attitude geometry and margins. There is no universal station-keeping allowance. A NASA GEO platform study from 1990 illustrates how propulsion choices and platform design change the budget; its figures describe that historical study, not current typical spacecraft.[^nasa-geo-platform-study]

Station-keeping manoeuvres have finite execution time. Thrust and attitude vary, propellant is consumed, and gravity acts throughout the burn. CCSDS distinguishes instantaneous delta-v descriptions from finite-thrust representations, including time-varying intervals for long or low-thrust burns. Design estimates should use a suitable model, while post-burn orbit determination establishes the realised result.[^ccsds-orbit-data][^nasa-navigation]

## Lifetime and current operations

Propellant can limit the service life of a GEO satellite even when its payload remains functional. ESA describes an active Phoenix Partnership project intended to mature a European servicing spacecraft that could support station keeping and attitude control. As of the announcement on 23 September 2026, this was a design-maturation effort rather than an operational servicing capability.[^esa-phoenix-servicing]

Station keeping also competes with other uses of finite propellant and power. Operators should preserve sufficient capability for collision avoidance and disposal, and should revise the control plan if state estimates, subsystem health or mission duration change. The budget and control limits are mission-specific and should be reported with their orbit and propulsion assumptions.[^nasa-geo-platform-study][^nasa-navigation]

## References

[^esa-geo-station-keeping]: European Space Agency, [Station keeping for a GEO satellite](https://www.esa.int/ESA_Multimedia/Images/2008/03/Station_keeping_for_a_GEO_satellite2), 10 April 2008.
[^nasa-geo-platform-study]: NASA Technical Reports Server, [GEO platform propulsion benefits study](https://ntrs.nasa.gov/api/citations/19900018469/downloads/19900018469.pdf), 1990.
[^ccsds-orbit-data]: Consultative Committee for Space Data Systems, [Orbit Data Messages, CCSDS 502.0-B-3](https://ccsds.org/Pubs/502x0b3e1.pdf), April 2023.
[^nasa-navigation]: NASA Science, [Chapter 13: Navigation](https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/).
[^esa-flight-dynamics]: European Space Agency, [Flight Dynamics](https://www.esa.int/Enabling_Support/Operations/Ground_Systems_Engineering/Flight_Dynamics).
[^esa-phoenix-servicing]: European Space Agency, [ESA supports development of European spacecraft for servicing geostationary satellites](https://www.esa.int/Applications/Connectivity_and_Secure_Communications/ESA_supports_development_of_European_spacecraft_for_servicing_geostationary_satellites), 23 September 2026.

