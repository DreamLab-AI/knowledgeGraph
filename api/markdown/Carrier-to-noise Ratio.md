
Carrier-to-noise ratio (C/N) is carrier power divided by noise power within a stated noise bandwidth and at a stated receiver reference plane.

C/N is dimensionless and may be reported as a linear ratio or in decibels. Carrier-to-noise spectral-density ratio, C/N0, divides carrier power by noise power per hertz and is conventionally written in dB-Hz. Where definitions and reference planes are consistent, C/N0 = C/N + 10 log10(Bnoise), with noise bandwidth Bnoise in hertz. The equivalent receiver noise bandwidth need not equal the signal's occupied bandwidth.[^1]

For thermal noise, N0 = kTsys, where k is Boltzmann's constant and Tsys is system noise temperature in kelvins. A common link-budget form is C/N0 = EIRP - total losses + G/T + 228.6 dB-Hz when EIRP is in dBW and G/T is in dB/K. The DSN convention can include atmospheric loss and noise in G/T; check whether separate atmospheric corrections would duplicate those terms.[^1]

For bit rate Rb in bits per second, Eb/N0 in decibels is C/N0 in dB-Hz minus 10 log10(Rb). State whether the rate counts information bits or transmitted coded bits. NASA's worked example reports 500 MHz bandwidth, C/N0 of 63.93 dB-Hz and a 1 Mb/s bit rate, producing Eb/N0 of 3.93 dB under its stated budget assumptions.[^2] A C/N value without bandwidth, measurement point and included impairments is incomplete; carrier tracking and telemetry decoding can also have different thresholds.[^3]

[^1]: https://deepspace.jpl.nasa.gov/dsndocs/810-005/206/206E.pdf
[^2]: https://ntrs.nasa.gov/api/citations/20040066071/downloads/20040066071.pdf?attachment=true
[^3]: https://tmo.jpl.nasa.gov/2010-2019/progress_report/42-208/208B.pdf

