---
okf_version: "0.2"
type: Class
title: Transport Protocol
resource: urn:ngm:class:transport-protocol
domain: infrastructure
description: A transport protocol is a network-layer specification that governs end-to-end delivery of data between processes, handling concerns such as multiplexing, reliability, ordering, and flow and congestion control. Examples including TCP, UDP, and QUIC sit above the network layer and provide the communication substrate over which higher-level application and agent protocols operate.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:network-protocol
relatedTo:
  - urn:ngm:class:model-control-protocols-like-mcp
  - urn:ngm:class:infra-network-and-comms
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Transport Protocol

A transport protocol is a network-layer specification that governs end-to-end delivery of data between processes, handling concerns such as multiplexing, reliability, ordering, and flow and congestion control. Examples including TCP, UDP, and QUIC sit above the network layer and provide the communication substrate over which higher-level application and agent protocols operate.
