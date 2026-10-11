---
okf_version: "0.2"
type: Class
title: Forward Error Correction
resource: urn:ngm:class:forward-error-correction
domain: infrastructure
description: Forward error correction (FEC) adds structured redundancy to transmitted data so that a receiver can detect and correct some channel errors without requesting retransmission.
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

Forward error correction (FEC) adds structured redundancy to transmitted data so that a receiver can detect and correct some channel errors without requesting retransmission.
