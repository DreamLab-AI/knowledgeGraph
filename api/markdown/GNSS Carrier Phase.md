
GNSS carrier phase is the receiver's measured carrier-phase range from a satellite, recorded as phase cycles and containing an unresolved ambiguity.

If L is recorded in cycles at carrier frequency f, its phase range in metres is lambda L, where lambda = c/f. A common range-form model is Phi = rho + c(δtᵣ − δtˢ) + T − I(f) + lambda N + bPhi + MPhi + epsilonPhi. The ionospheric term has the opposite first-order sign to code group delay. N is an unknown integer ambiguity for a continuous tracking arc; hardware phase effects, antenna reference points, multipath and receiver noise also contribute.[^1][^2]

Carrier phase is usually substantially more precise than code timing, but it is not an absolute geometric range until ambiguities and relevant biases are resolved or estimated. Loss of lock can cause a cycle slip and break the ambiguity arc. Half-cycle tracking and signal-specific phase shifts require explicit handling; RINEX stores phase in whole cycles and defines phase alignment by constellation and frequency band. It does not align phases across constellations.[^1][^2]

When a receiver-clock offset is applied to RINEX data, epoch, pseudorange and phase must be corrected consistently; the phase correction scales with carrier frequency. Signal, receiver, antenna and clock conventions must match across the data being combined.[^1][^3][^4][^5]

[^1]: https://files.igs.org/pub/data/format/rinex_4.02.pdf
[^2]: https://gssc.esa.int/navipedia/index.php/GNSS_Basic_Observables
[^3]: https://www.esa.int/Applications/Satellite_navigation/Characterization_of_receivers
[^4]: https://www.gsc-europa.eu/sites/default/files/sites/all/files/Galileo_OS_SIS_ICD_in_force.pdf
[^5]: https://www.gps.gov/sites/default/files/2025-07/IS-GPS-200N.pdf

