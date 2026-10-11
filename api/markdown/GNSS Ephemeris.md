
GNSS broadcast ephemeris is satellite-specific orbit information used to compute that satellite's position at a stated time.

Broadcast ephemeris is a parameterised orbit model referenced to an epoch and interpreted using the applicable constellation algorithm. Receivers use it with related clock corrections, time references, issue-of-data and health or data-validity fields to calculate a satellite state and pseudorange correction. Orbit and clock parameters can be carried across multiple message words or pages, so the receiver must assemble a coherent data set.[^1][^2][^6]

Broadcast ephemeris is intended for a limited interval. Its age, reference epoch, issue-of-data consistency and validity or health status matter; stale or invalid parameters can produce an unreliable state even while the receiver tracks the satellite's signal. Update cadences and validity rules vary by message family, constellation and operating conditions, so there is no single interval that applies to every GNSS ephemeris.[^1][^2][^3]

Reference-point conventions also matter in high-precision work. Broadcast coordinates may refer to a signal-specific satellite antenna phase centre, while precise orbit products can refer to the satellite centre of mass. Processing must match antenna offsets and orbit-product conventions; do not apply the same correction twice.[^4][^5]

[^1]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo_OS_SIS_ICD_in_force.pdf
[^2]: https://www.gps.gov/sites/default/files/2025-07/IS-GPS-200N.pdf
[^3]: https://gssc.esa.int/navipedia/index.php/GPS_Receivers
[^4]: https://gssc.esa.int/navipedia/index.php/PPP_Standards
[^5]: https://gssc.esa.int/navipedia/index.php?title=Antenna_Phase_Centre
[^6]: https://gssc.esa.int/navipedia/index.php/GPS_Navigation_Message

