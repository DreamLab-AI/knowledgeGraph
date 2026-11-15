---
okf_version: "0.2"
type: Class
title: Round-Trip Time
resource: urn:ngm:class:round-trip-time
domain: infrastructure
description: Round-trip time is the duration measured from when a signal is sent to when its corresponding acknowledgement is received back at the origin, capturing the combined effect of propagation delay, processing delay, and queuing along the path. It is a standard diagnostic for network latency and is used to estimate achievable throughput, retransmission timers, and interactive responsiveness. Round-trip
maturity: draft
quality: 0.55
is-a:
  - urn:ngm:class:network-latency
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Round-Trip Time

Round-trip time is the duration measured from when a signal is sent to when its corresponding acknowledgement is received back at the origin, capturing the combined effect of propagation delay, processing delay, and queuing along the path. It is a standard diagnostic for network latency and is used to estimate achievable throughput, retransmission timers, and interactive responsiveness. Round-trip time grows with physical distance because of propagation delay but is also affected by congestion and routing.
