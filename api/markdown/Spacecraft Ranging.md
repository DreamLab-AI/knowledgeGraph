
Spacecraft ranging is a radiometric tracking measurement used to estimate distance along the line of sight between a ground station and a spacecraft.

In conventional two-way ranging, the ground transmits a ranging signal, the spacecraft returns it, and the measured round-trip light time is converted to range after accounting for calibrated equipment delays and propagation effects. The result is an observation with uncertainty, not a complete three-dimensional spacecraft position.[^1][^2]

Doppler tracking measures the frequency change of a received carrier and provides information about line-of-sight range-rate. Range and Doppler are complementary observations. Navigation teams fit tracking data over time to a trajectory model to estimate the spacecraft’s state and support manoeuvre planning; after a manoeuvre, further observations help assess the result.[^1][^2][^4]

Ranging performance depends on signal and station configuration, geometry, instrument calibration and propagation through the atmosphere and plasma. The detailed parameters and accuracy examples in the JPL monograph and NASA navigation material describe particular deep-space tracking systems and should not be treated as universal spacecraft specifications.[^1][^2]

Some architectures can derive ranging information from telemetry timing, but NASA’s telemetry-based ranging paper describes a specific technique with particular synchronisation conditions. This is not the default meaning of spacecraft ranging.[^5] Delta-DOR is another complementary tracking observable; despite its name, it is not the conventional two-way scalar range described above.[^3]

[^1]: https://science.nasa.gov/learn/basics-of-space-flight/chapter13-1/
[^2]: https://descanso.jpl.nasa.gov/monograph/series1/Descanso1_C03.pdf
[^3]: https://www.esa.int/Enabling_Support/Operations/Keeping_track_of_spacecraft_with_Delta-DOR
[^4]: https://www.nasa.gov/directorates/somd/space-communications-navigation-program/dsn-functions/
[^5]: https://ntrs.nasa.gov/archive/nasa/casi.ntrs.nasa.gov/20110012211.pdf

