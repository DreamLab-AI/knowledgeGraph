
A bent-pipe transponder is a transparent satellite relay that retransmits a received signal without decoding its user information and rebuilding it as a new link.

A bent-pipe payload can still perform substantial RF or channel processing, including amplification, frequency translation, filtering, channelisation, beam switching or routing. “Transparent” describes the boundary at which user information is not demodulated and decoded; it does not mean that the payload contains no electronics or processing.[^1][^2]

In the transparent path analysed by ITU-R, uplink and downlink impairments remain coupled. The comparison with regenerative processing depends on the noise distribution and modelling assumptions, so regeneration should not be described as automatically improving every end-to-end link.[^1]

A digital channel or beam processor can operate with a transparent payload. ESA’s future bent-pipe processor study describes a forward TDM and return MF-TDMA scenario while retaining transparent payload operation. By contrast, a regenerative design can recover and process information onboard and create a new outgoing waveform; ESA’s TINA white paper and REDSAT example describe proposed and flown instances, respectively.[^2][^3][^4]

Bent-pipe architecture is therefore distinct from modulation, channel coding and multiple access. Those functions may be implemented in gateways, user terminals or payload equipment according to the system design; the term alone does not specify their location or guarantee a service capability.[^2][^3]

[^1]: https://www.itu.int/dms_pubrec/itu-r/rec/s/R-REC-S.1329-0-199709-I%21%21PDF-E.pdf
[^2]: https://connectivity.esa.int/wp-content/uploads/2023/07/ARTES-5G_TINA_Interim-White-Paper_v11.pdf
[^3]: https://resilience.esa.int/archives/projects/high-throughput-processor-future-bent-pipe-broadband-networks
[^4]: https://www.esa.int/Applications/Connectivity_and_Secure_Communications/SmallGEO/Redsat

