
GNSS signal tracking is the continuing receiver process that follows an acquired signal's code delay, carrier phase and carrier frequency.

A common receiver uses a delay-locked loop (DLL) to refine code timing, a phase-locked loop (PLL) to follow carrier phase, and a frequency-locked loop (FLL) to follow carrier frequency or Doppler. Correlators compare sampled input with local code and carrier replicas; their outputs feed discriminators, loop filters and numerically controlled oscillators. Implementations can combine loops, use aiding or adopt other architectures.[^1][^2]

Integration time, loop bandwidth and filter order trade measurement noise against response to signal dynamics and tracking stability. Tracking can provide code, phase and Doppler estimates and support navigation-data demodulation, but it does not guarantee unbiased measurements under all conditions. Multipath, interference, antenna effects and dynamic stress can increase tracking error.[^1][^2][^5]

Loss of lock may require reacquisition. A discontinuity in carrier phase can be a cycle slip and break the continuous ambiguity arc; it differs from ordinary measurement noise. RINEX loss-of-lock indicators can flag a possible slip or half-cycle ambiguity, but detection and recovery methods depend on the receiver and processing software.[^3][^4]

[^1]: https://gssc.esa.int/navipedia/index.php?title=Tracking_Loops
[^2]: https://gssc.esa.int/navipedia/index.php/Baseband_Processing
[^3]: https://gssc.esa.int/navipedia/index.php/Receiver_Operations
[^4]: https://files.igs.org/pub/data/format/rinex_4.02.pdf
[^5]: https://www.esa.int/Applications/Satellite_navigation/Characterization_of_receivers

