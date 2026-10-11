
GNSS signal acquisition is the receiver process that detects a candidate satellite signal and estimates initial code-delay and carrier-frequency parameters.

When a receiver channel lacks recent estimates, it searches hypotheses for code delay and Doppler frequency, correlating incoming samples with a local code replica. A detected correlation response gives coarse parameters with which to initialise tracking; acquisition alone does not guarantee sustained lock or a navigation solution.[^1][^2]

Acquisition may be serial, parallel or assisted by previously decoded or externally supplied information. A cold start has little prior knowledge and searches broadly; a warm start can use a rough position and relatively current almanacs; a hot start can also use satellite ephemerides to narrow the search. Receiver products do not always use these labels identically.[^2]

Acquisition time and sensitivity depend on signal strength, code-delay and Doppler search span, integration strategy, false-alarm and detection criteria, dynamics, interference and assistance data. There is no single acquisition time or sensitivity value for all signals and receivers; performance claims need receiver-specific test conditions.[^1][^2]

[^1]: https://gssc.esa.int/navipedia/index.php/Baseband_Processing
[^2]: https://gssc.esa.int/navipedia/index.php/Receiver_Operations

