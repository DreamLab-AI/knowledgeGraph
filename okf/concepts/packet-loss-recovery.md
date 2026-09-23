---
okf_version: "0.2"
type: Class
title: Packet Loss Recovery
resource: urn:ngm:class:packet-loss-recovery
domain: infrastructure
description: Techniques used to recover from or mitigate the loss of data packets during transmission over a network. They include retransmission, forward error correction, and concealment of missing data.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:network-protocol
requires:
  - urn:ngm:class:forward-error-correction
enables:
  - urn:ngm:class:video-streaming
bridgesTo:
  - urn:ngm:class:network-protocol
---

# Packet Loss Recovery

Techniques used to recover from or mitigate the loss of data packets during transmission over a network. They include retransmission, forward error correction, and concealment of missing data.
