Forward error correction (FEC) adds structured redundancy to transmitted data so that a receiver can detect and correct some channel errors without requesting retransmission.

For a block code that maps k information symbols to an n-symbol codeword, the code rate is R = k/n and the remaining n − k symbols provide redundancy. The code and decoder determine which error patterns can be corrected; the rate alone does not determine performance. FEC is useful when a return request or retransmission is unavailable or costly, but it cannot guarantee recovery from arbitrary corruption, loss of synchronisation or an outage.[^1]

CCSDS TM Synchronization and Channel Coding specifies a sublayer with error-control coding and decoding alongside frame synchronisation functions. Its Issue 6 lists coding families including convolutional, Reed–Solomon, Turbo and LDPC codes. A published standard defines options and procedures in scope; it does not show that a particular mission implements every option or achieves a universal error-rate threshold.[^1]

Coding is distinct from modulation: coding adds structured redundancy to information, while modulation maps symbols onto a physical carrier. A standard can define a combined coded-modulation scheme, as CCSDS 131.2 does for a particular high-rate telemetry downlink, without making FEC and modulation interchangeable terms.[^1][^2]

[^1]: https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2026/06/131x0b6ec1.pdf?gv-iframe=true
[^2]: https://ccsds.org/Pubs/131x2b2.pdf

