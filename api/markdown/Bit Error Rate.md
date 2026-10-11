
Bit error rate (BER) is the number of erroneous recovered bits divided by the total number of bits assessed at a specified point in a test or operating interval.

A BER result should identify where it is measured, whether it is before or after decoding, the observation interval and the relevant channel and receiver conditions. BER is not the same quantity as frame error rate (FER), packet loss or carrier-tracking performance.[^1]

A target BER's required signal-to-noise threshold depends on the modulation, receiver implementation and coding scheme. JPL distinguishes the carrier channel, which must maintain a tracking-loop signal-to-noise threshold, from the telemetry channel, whose Eb/N0 threshold is associated with a chosen BER or FER and coding scheme. A threshold published for one modem and code should not be transferred to another without verification.[^2]

When the received signal and noise fluctuate, a link's probability of exceeding an SNR threshold is not itself a direct estimate of achieved BER or FER. NASA's margin analysis explains that a statistical design must account for the coding performance curve and the fluctuation behaviour relevant to the codeword. BER therefore describes measured or required data-decision performance, not a synonym for received power, C/N or link margin.[^1][^3]

[^1]: https://tmo.jpl.nasa.gov/2010-2019/progress_report/42-208/208B.pdf
[^2]: https://deepspace.jpl.nasa.gov/dsndocs/810-005/
[^3]: https://ntrs.nasa.gov/citations/20160009671

