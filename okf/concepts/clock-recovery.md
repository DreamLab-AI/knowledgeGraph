---
okf_version: "0.2"
type: Class
title: Clock Recovery
resource: urn:ngm:class:clock-recovery
domain: infrastructure
description: Clock recovery (clock and data recovery, CDR) is the physical-layer process by which a receiver extracts a synchronised timing reference from an incoming data stream that carries no separate clock signal. It uses phase-locked loops or oversampling to align sampling instants with the centre of each symbol, compensating for jitter and frequency offset between transmitter and receiver. It matters bec
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:infra-network-and-comms
relatedTo:
  - urn:ngm:class:physical-layer
---

# Clock Recovery

Clock recovery (clock and data recovery, CDR) is the physical-layer process by which a receiver extracts a synchronised timing reference from an incoming data stream that carries no separate clock signal. It uses phase-locked loops or oversampling to align sampling instants with the centre of each symbol, compensating for jitter and frequency offset between transmitter and receiver. It matters because correct sampling timing is essential for reliable symbol detection in serial communication links.
