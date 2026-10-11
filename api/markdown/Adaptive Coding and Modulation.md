Adaptive coding and modulation (ACM) selects among supported coding and modulation modes in response to information about channel conditions.

An adaptation loop needs a receiver-side quality estimate, a means of reporting it, and a transmitter or gateway that changes the selected mode. In the DVB-S2X procedure described in ETSI EN 302 307-2 V1.4.1, the receiver reports reception quality including carrier-to-noise-plus-interference information and a requested MODCOD over an available return channel; the gateway then selects the protection mode. That is one specified system procedure, not a definition of every ACM implementation.[^2]

A mode with greater information throughput may require better channel quality, while a more error-tolerant mode may carry fewer user bits. The selected code and modulation jointly affect performance, but FEC remains the coding function and ACM is the selection process. CCSDS 131.2 defines a particular flexible coded-modulation scheme for high-rate telemetry; it does not imply that a mission has DVB-S2X-style receiver feedback.[^1][^2]

Adaptation is limited by supported modes, measurement quality, feedback delay, channel change during that delay, traffic policy and outages. ETSI specifies a measurement-and-delivery timing limit for the DVB-S2X procedure; satisfying that timing is not an availability, throughput or error-free service guarantee. The older 2005 ETSI user guide is explanatory historical guidance, while the cited EN version carries the current normative DVB-S2X procedure.[^2][^3]

[^1]: https://ccsds.org/Pubs/131x2b2.pdf
[^2]: https://www.etsi.org/deliver/etsi_en/302300_302399/30230702/01.04.01_20/en_30230702v010401a.pdf
[^3]: https://www.etsi.org/deliver/etsi_tr/102300_102399/102376/01.01.01_60/tr_102376v010101p.pdf

