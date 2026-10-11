A GNSS cycle slip is a discontinuity in a carrier-phase observation that changes its integer ambiguity by one or more whole cycles.[^1][^2][^3]

Carrier phase tracks the received signal’s cycles while the receiver maintains lock. If tracking is lost or degraded, the phase record can jump by a whole number of wavelengths. A slip describes that break in continuity; it does not prescribe how a receiver or later processing must respond.[^2][^3]

RINEX loss-of-lock indicators flag possible loss of lock and possible half-cycle conditions. They are evidence to consider alongside the signal, receiver behaviour and surrounding epochs, rather than a universal, automatically repaired slip diagnosis. Detection methods use phase changes, combinations across frequencies or satellites, and receiver or model information; their sensitivity depends on the data and assumptions.[^1][^2][^3]

After detecting a slip, processing can estimate and repair the integer jump when the observations support that decision. Otherwise, it can end the affected ambiguity arc and start a new estimate. The discontinuity applies to the affected satellite and signal arc; other tracked arcs may remain continuous.[^1][^2][^3]

[^1]: IGS/RTCM RINEX Committee, *RINEX: The Receiver Independent Exchange Format*, version 4.02. https://files.igs.org/pub/data/format/rinex_4.02.pdf
[^2]: ESA, *GNSS Data Processing, Volume I: Fundamentals and Algorithms*. https://gssc.esa.int/navipedia/GNSS_Book/ESA_GNSS-Book_TM-23_Vol_I.pdf
[^3]: ESA Navipedia, “Carrier Phase Cycle-Slip Detection”. https://gssc.esa.int/navipedia/index.php?title=Carrier_Phase_Cycle-Slip_Detection

