---
okf_version: "0.2"
type: Class
title: Low-Latency Computing
resource: urn:ngm:class:low-latency-computing
domain: infrastructure
description: Low-latency computing is an architectural discipline concerned with minimising the end-to-end delay between a request and its response, typically targeting sub-millisecond to single-digit-millisecond budgets. It combines hardware proximity, kernel-bypass networking, lock-free data structures, cache-aware memory layouts, and predictable scheduling to eliminate sources of jitter. Application domains
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:distributed-computing
enables:
  - urn:ngm:class:real-time-rendering
uses:
  - urn:ngm:class:edge-computing
relatedTo:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:network-protocol
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Low-Latency Computing

Low-latency computing is an architectural discipline concerned with minimising the end-to-end delay between a request and its response, typically targeting sub-millisecond to single-digit-millisecond budgets. It combines hardware proximity, kernel-bypass networking, lock-free data structures, cache-aware memory layouts, and predictable scheduling to eliminate sources of jitter. Application domains include high-frequency trading, real-time multiplayer rendering, industrial control, telecommunications signalling, and interactive AI inference, where tail latency rather than average throughput is the governing performance metric.
