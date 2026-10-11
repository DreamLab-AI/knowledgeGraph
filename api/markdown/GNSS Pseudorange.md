
A GNSS pseudorange is a code-derived apparent distance between a receiver and a satellite that includes clock offsets and other measurement biases.

A useful range model is P = rho + c(δtᵣ − δtˢ) + T + I(f) + bP + MP + εP. Here rho is geometric range between the relevant antenna phase centres, c is the speed of light (299 792 458 m/s), δtᵣ and δtˢ are receiver and satellite clock offsets from the applicable GNSS time scale, T is tropospheric delay, and I(f) is frequency-dependent ionospheric group delay. The remaining terms collect signal-specific hardware delay, multipath and receiver noise.[^1][^2]

RINEX stores C-type pseudorange observations in metres. Its basic relation is geometric distance plus c times the receiver-minus-satellite clock offset, with other biases included. A pseudorange is therefore not a direct geometric-range reading. For mixed-constellation processing, observations must refer to a common receiver clock and the relevant constellation time relationships and receiver-clock corrections must be handled consistently.[^1]

Code and frequency choice affect instrumental and ionospheric terms. Antenna phase-centre conventions also matter when geometric range is modelled precisely. Receivers experience measurement error under multipath, interference and dynamic stress, so a pseudorange value alone does not establish a position accuracy or integrity level.[^2][^3][^4][^5]

[^1]: https://files.igs.org/pub/data/format/rinex_4.02.pdf
[^2]: https://gssc.esa.int/navipedia/index.php/GNSS_Basic_Observables
[^3]: https://www.esa.int/Applications/Satellite_navigation/Characterization_of_receivers
[^4]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo_OS_SIS_ICD_in_force.pdf
[^5]: https://www.gps.gov/sites/default/files/2025-07/IS-GPS-200N.pdf

