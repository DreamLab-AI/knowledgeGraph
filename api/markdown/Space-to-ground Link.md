
A space-to-ground link is a communications hop between a spacecraft and an Earth station.

This term describes the relationship between the space and ground endpoints. An uplink is a transmission from Earth to the spacecraft; a downlink is a transmission from the spacecraft towards Earth. A full route can contain a space-to-space relay hop followed by a space-to-ground hop, so each hop and its endpoints should be identified.[^1][^2][^5]

Commands commonly travel on uplinks, while telemetry and mission data commonly travel on downlinks, but direction alone does not define content. A downlink can carry engineering telemetry, science observations, files or user traffic, and an uplink may carry data beyond commands. TT&C is best reserved for the operational tracking, telemetry and command function when that narrower meaning is intended.[^1][^2][^5]

A direct link requires suitable geometry and access to a ground station. For a spacecraft in low orbit, visibility windows, station availability, onboard storage, data-rate needs and command priorities shape contact planning. The ITU Earth Exploration-Satellite Service handbook supports these scheduling principles, but its 2011 numerical examples are historical and should not be treated as current typical pass durations or rates.[^9]

Ground infrastructure may track and acquire the spacecraft signal, process received data, deliver it to mission systems and route commands for transmission. NASA’s Deep Space Network is one documented example; commercial earth stations and other agency networks have different service boundaries and control arrangements. Deep-space operations add long light-time delays and weak received signals, but neither defines a particular band nor makes every space-to-ground system equivalent to the DSN.[^3][^4]

Atmospheric conditions affect availability. Rain and other propagation losses can reduce RF margin, especially at higher satellite frequencies; optical space-to-ground links can also be affected by clouds and turbulence. Power control, coding, site diversity and scheduling can mitigate some conditions, but none guarantees a link under all weather or geometry. NASA’s LCRD account records optical relay experiments in which weather affected signal availability and integrity.[^6][^7][^8]

[^1]: https://www.nasa.gov/smallsat-institute/sst-soa/soa-communications/
[^2]: https://science.nasa.gov/learn/basics-of-space-flight/chapter10-1/
[^3]: https://science.nasa.gov/learn/basics-of-space-flight/chapter18-3/
[^4]: https://deepspace.jpl.nasa.gov/dsndocs/810-005/
[^5]: https://www.itu.int/en/ITU-R/seminars/rrs/rrs-25-africa/Plenaries/0.%20ITU-R%20Regulatory%20Documents/1.%20Radio%20Regulations%20%202024%20and%20Rules%20of%20Procedure/Radio%20Regulations%20Ed%202024/RR_Ed-2024_Vol%201-E.pdf
[^6]: https://www.esa.int/Applications/Connectivity_and_Secure_Communications/Satellite_frequency_bands
[^7]: https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Uplink_power_control_method_and_apparatus_for_satellite_communications_networks
[^8]: https://www.nasa.gov/directorates/stmd/tech-demo-missions-program/laser-communications-relay-demonstration-lcrd-overview/
[^9]: https://www.itu.int/dms_pub/itu-r/opb/hdb/R-HDB-56-2011-PDF-E.pdf

