
Antenna gain is the directional radiation or reception ratio of an antenna relative to a stated reference antenna.

Isotropic-reference gain is commonly expressed in dBi. Gain is a dimensionless ratio; dBi expresses that ratio logarithmically and is not a power unit. Gain varies with direction and frequency, so a link budget should use gain towards the intended endpoint under the relevant pointing and polarisation conditions rather than assume the antenna's maximum value applies in every direction.[^1]

Receive performance is often summarised by G/T, the ratio of effective receive antenna gain G to system noise temperature Tsys. In logarithmic form, G/T in dB/K equals G in dBi minus 10 log10(Tsys in kelvins). The DSN handbook's convention includes atmospheric attenuation and atmospheric noise-temperature contribution in its effective G/T; another budget may model those effects separately. Check the reference plane before combining terms.[^2]

Gain and G/T are configuration-dependent. Frequency, elevation angle, weather, antenna, feed and receiver configuration can change the values. A source's tabulated performance is evidence for the stated configuration and assumptions, not a universal property of a band, orbit or spacecraft class.[^2][^3] When feeder, pointing or polarisation losses are listed separately, make sure they are not already included in a realised or measured gain value.[^4]

[^1]: https://search.itu.int/history/HistoryDigitalCollectionDocLibrary/1.49.48.en.101.pdf
[^2]: https://deepspace.jpl.nasa.gov/dsndocs/810-005/206/206E.pdf
[^3]: https://www.nasa.gov/smallsat-institute/sst-soa/ground-data-systems-and-mission-operations/
[^4]: https://ntrs.nasa.gov/api/citations/20040066071/downloads/20040066071.pdf?attachment=true

