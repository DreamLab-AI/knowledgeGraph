---
okf_version: "0.2"
type: Class
title: Forward Error Correction
resource: urn:ngm:class:forward-error-correction
domain: infrastructure
description: Forward error correction (FEC) is a channel-coding technique in which redundant information is added to a transmitted data stream so that the receiver can detect and correct errors introduced by the channel without requesting retransmission. FEC codes trade bandwidth or storage overhead for improved reliability over noisy or lossy channels, eliminating the round-trip latency penalty of automatic r
maturity: mature
quality: 0.85
is-a:
  - urn:ngm:class:channel-coding
hasPart:
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:ldpc-codes
  - urn:ngm:class:hamming-codes
requires:
  - urn:ngm:class:data-redundancy
  - urn:ngm:class:channel-capacity
enables:
  - urn:ngm:class:packet-loss-recovery
  - urn:ngm:class:real-time-streaming
dependsOn:
  - urn:ngm:class:information-theory
implements:
  - urn:ngm:class:error-correction
bridgesTo:
  - urn:ngm:class:quantum-error-correction
uses:
  - urn:ngm:class:belief-propagation
supports:
  - urn:ngm:class:telecommunications
  - urn:ngm:class:satellite-communication
relatedTo:
  - urn:ngm:class:erasure-coding
---

# Forward Error Correction

Forward error correction (FEC) is a channel-coding technique in which redundant information is added to a transmitted data stream so that the receiver can detect and correct errors introduced by the channel without requesting retransmission. FEC codes trade bandwidth or storage overhead for improved reliability over noisy or lossy channels, eliminating the round-trip latency penalty of automatic repeat request (ARQ) schemes.
