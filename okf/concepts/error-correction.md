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
  - urn:ngm:class:quantum-computing
uses:
  - urn:ngm:class:data-compression
  - urn:ngm:class:cryptographic-hash
relatedTo:
  - urn:ngm:class:reed-solomon-codes
  - urn:ngm:class:data-integrity
  - urn:ngm:class:reliability
  - urn:ngm:class:bit-error-rate
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Error Correction

Error correction is the set of techniques and mathematical frameworks that detect and rectify errors introduced into data during transmission, storage, or computation, by adding structured redundancy that allows a decoder to infer and restore the original information even when some fraction of the data has been corrupted or lost. Unlike error detection alone, error correction codes (ECCs) carry sufficient redundancy to reconstruct the original codeword without retransmission, at the cost of additional bandwidth or storage overhead. Applications range from deep-space communication and data storage to quantum computing, where error correction is essential to suppress decoherence and enable fault-tolerant operation.
