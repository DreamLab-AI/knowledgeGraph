
Spacecraft telemetry is data sent from a spacecraft for remote monitoring and analysis.

Telemetry can report platform health and status, measured quantities, orbit-related information, memory contents, command-reception status and data produced by a science payload. Its content depends on the mission: “telemetry” is not limited to housekeeping data.[^1][^2]

Onboard command and data handling gathers or routes data and may multiplex it into transfer frames for downlink. The CCSDS TM Space Data Link Protocol defines data-link services and frame procedures for transporting data over a space link; it does not define what a mission’s individual measurements mean, how they are stored in a telemetry database or how the RF signal is implemented.[^1][^4]

On the ground, stations acquire the signal and mission systems process, decode, archive or distribute the recovered data. ESA describes telemetry processing as part of a wider mission data system connected to station networks and specialist science centres. A student-mission example shows a mission-control computer storing received telemetry and sharing it with participating teams.[^3][^5]

Telemetry is distinct from tracking. A telemetry packet may contain orbit or navigation information, but the tracking function produces observations such as signal timing or Doppler that are analysed to estimate a trajectory. Likewise, a telemetry indication that a command was received does not by itself show that the requested action completed; operators assess the later spacecraft state and mission-specific execution reports.[^1][^2]

[^1]: https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Onboard_Computers_and_Data_Handling/Telemetry_Telecommand
[^2]: https://www.nasa.gov/directorates/somd/space-communications-navigation-program/dsn-functions/
[^3]: https://www.esa.int/About_Us/ESOC/Ground_segment_preparing_for_launch
[^4]: https://ccsds.org/Pubs/132x0b3.pdf
[^5]: https://www.esa.int/Education/SSETI_Express/Ground_segment

