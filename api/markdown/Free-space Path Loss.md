
Free-space path loss is the ideal propagation loss between isotropic antennas in a perfect free-space reference environment.

ITU-R P.525-5 gives the positive loss as Lbf = 20 log10(4 pi R / lambda) dB, with path length R and wavelength lambda in the same unit. For R in kilometres and frequency f in megahertz, the equivalent expression is Lbf = 32.4 + 20 log10(f) + 20 log10(R) dB. The constant changes when the units change. In a link budget, subtract the positive loss or list it as a negative contribution, and keep that sign convention consistent.[^1]

For a satellite link, R is the transmitter-to-receiver path length at the time being assessed, usually the slant range. Orbital altitude alone is not the path distance. Lbf describes geometric spreading in the ideal reference medium; it does not include atmospheric absorption, rain, pointing, polarisation mismatch, feeder loss, blockage or interference.[^1][^2]

A complete budget therefore keeps free-space loss distinct from antenna gains and other propagation or equipment terms. NASA's example budget lists path loss, atmospheric effects, polarisation and pointing separately, although it combines some atmospheric contributions into an equivalent-loss term. Preserve the source budget's reference planes and avoid counting an impairment twice.[^3] Frequency, range and geometry must be stated when comparing link budgets; the term alone does not predict received power or service availability.[^4]

[^1]: https://www.itu.int/dms_pubrec/itu-r/rec/p/R-REC-P.525-5-202411-I%21%21PDF-E.pdf
[^2]: https://www.nasa.gov/smallsat-institute/sst-soa/ground-data-systems-and-mission-operations/
[^3]: https://ntrs.nasa.gov/api/citations/20040066071/downloads/20040066071.pdf?attachment=true
[^4]: https://tmo.jpl.nasa.gov/2010-2019/progress_report/42-208/208B.pdf

