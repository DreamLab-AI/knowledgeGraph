
A GNSS navigation message is structured data encoded onto one or more satellite signal components for reception and interpretation by user equipment.

Depending on constellation and message family, its contents can include satellite orbit and clock parameters, system-time relationships, satellite health or data-validity flags, and service-specific data. The message format may organise these fields into words, pages or subframes with synchronisation and error-detection or correction coding. The message is a data structure conveyed by the signal; it is neither the waveform itself nor the receiver's navigation solution.[^1][^2][^3]

Control segments generate and upload navigation data, which satellites broadcast for receivers to decode. Receivers use applicable orbit and clock fields to model satellite states and correct signal timing. Messages and their update patterns are system-specific: Galileo F/NAV and I/NAV, and GPS legacy and modernised message families, do not share one frame layout or rate.[^1][^4][^5]

A receiver should check health, data-validity and issue-of-data consistency as well as data age. Newly received bits are not automatically valid for navigation use. The current Galileo OS SIS ICD is v2.2 (November 2025); GPS.gov lists IS-GPS-200N and later revision notices. Older overview articles are helpful for concepts but should not govern implementation details.[^1][^2][^3]

[^1]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo_OS_SIS_ICD_in_force.pdf
[^2]: https://www.gps.gov/interface-control-documents-icds-interface-specifications-iss
[^3]: https://www.gps.gov/sites/default/files/2025-07/IS-GPS-200N.pdf
[^4]: https://gssc.esa.int/navipedia/index.php/Galileo_Navigation_Message
[^5]: https://gssc.esa.int/navipedia/index.php/GPS_Navigation_Message

