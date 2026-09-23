---
okf_version: "0.2"
type: Class
title: Error Correction
resource: urn:ngm:class:error-correction
domain: infrastructure
description: Error correction is the set of techniques and mathematical frameworks that detect and rectify errors introduced into data during transmission, storage, or computation, by adding structured redundancy that allows a decoder to infer and restore the original information even when some fraction of the data has been corrupted or lost. Unlike error detection alone, error correction codes (ECCs) carry su
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:fault-tolerance-system
  - urn:ngm:class:distributed-storage
  - urn:ngm:class:quantum-computation-paradigm
uses:
  - urn:ngm:class:data-compression
  - urn:ngm:class:cryptographic-hash
relatedTo:
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:data-integrity
  - urn:ngm:class:reliability
---

# Error Correction

Error correction is the set of techniques and mathematical frameworks that detect and rectify errors introduced into data during transmission, storage, or computation, by adding structured redundancy that allows a decoder to infer and restore the original information even when some fraction of the data has been corrupted or lost. Unlike error detection alone, error correction codes (ECCs) carry sufficient redundancy to reconstruct the original codeword without retransmission, at the cost of additional bandwidth or storage overhead. Applications range from deep-space communication and data storage to quantum computing, where error correction is essential to suppress decoherence and enable fault-tolerant operation.
