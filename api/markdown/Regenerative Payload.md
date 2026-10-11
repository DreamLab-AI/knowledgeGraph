
A regenerative payload processes a received communications signal or protocol onboard and generates a new outgoing signal, potentially including demodulation, protocol handling, routing or switching.

Protocol termination marks the key difference. ITU-R’s IMT-2020 architecture report describes a transparent payload as forwarding the satellite radio-interface protocol between service and feeder links while base-station functions remain on the ground. A regenerative payload processes that interface, with some or all base-station functions potentially onboard.[^1]

Transparent does not mean that the spacecraft performs no signal conditioning. Filtering, frequency conversion, signal processing and amplification can occur while the radio protocol is still forwarded transparently. A bent-pipe transponder is a common transparent relay: it translates and amplifies a received signal for retransmission without demodulating the carried user protocol. Digital transparent processing may additionally map or route channels while leaving protocol termination at a gateway.[^1][^4]

Regeneration can support onboard routing, switching or inter-satellite links, depending on the architecture. It can also move processing away from gateways. These options bring spacecraft resource and design trade-offs; ESA’s study treats mass, power, bandwidth and commercial viability as matters to assess rather than evidence that one architecture is always superior.[^1][^3]

ESA’s Redsat page documents a particular flight implementation on Hispasat 36W-1: its processor handled four channels and could convert data received in DVB-RCS to DVB-S2. That example demonstrates one implementation, not the capabilities of every regenerative payload.[^2] A payload’s regenerative or transparent class also does not determine whether its beams are fixed, steerable or hopping.[^1][^3]

[^1]: https://www.itu.int/dms_pub/itu-r/opb/rep/R-REP-M.2514-2022-PDF-E.pdf
[^2]: https://www.esa.int/Applications/Connectivity_and_Secure_Communications/SmallGEO/Redsat
[^3]: https://resilience.esa.int/archives/projects/evolution-board-processing-applications
[^4]: https://resilience.esa.int/archives/projects/high-throughput-processor-future-bent-pipe-broadband-networks

