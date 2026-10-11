
A GNSS code measurement is the receiver's estimate of the timing alignment between a received spreading code and a locally generated code replica.

Receiver baseband processing correlates incoming samples with a local pseudo-random-noise code replica over candidate delays. A code-tracking loop refines the delay estimate. Depending on the interface, the result may be reported in seconds, code chips or range-equivalent metres; multiplying a time delay by c converts it to a distance-like quantity.[^1][^2]

Code measurement describes timing alignment at a processing stage. A pseudorange is the range-scaled observable interpreted with receiver and satellite clock offsets and other biases. In RINEX, C identifies pseudorange observations and those values are stored in metres. Usage varies across technical writing and receiver APIs, so the term and units should be stated where ambiguity is possible.[^1][^2][^3]

Code delay depends on the signal and tracking mode. Ionospheric group delay, receiver and satellite hardware delays, multipath and receiver noise affect the resulting pseudorange; inter-channel calibration and signal-specific corrections may be needed for combined measurements.[^1][^4]

[^1]: https://gssc.esa.int/navipedia/index.php/GNSS_Basic_Observables
[^2]: https://gssc.esa.int/navipedia/index.php/Baseband_Processing
[^3]: https://files.igs.org/pub/data/format/rinex_4.02.pdf
[^4]: https://www.esa.int/Applications/Satellite_navigation/Characterization_of_receivers

