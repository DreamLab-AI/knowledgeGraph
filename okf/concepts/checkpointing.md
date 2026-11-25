---
okf_version: "0.2"
type: Class
title: Checkpointing
resource: urn:ngm:class:checkpointing
domain: distributed-systems
description: A fault-tolerance technique in which a system periodically captures a consistent snapshot of its execution state — memory, variables, message queues, or conversation context — and persists it to durable storage, so that after a crash, pre-emption, or migration the computation can resume from the most recent checkpoint rather than restarting from the beginning; foundational to long-running distribu
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:fault-tolerance
enables:
  - urn:ngm:class:reliability
  - urn:ngm:class:resilience
uses:
  - urn:ngm:class:snapshot
  - urn:ngm:class:state-management
relatedTo:
  - urn:ngm:class:agent-runtime
  - urn:ngm:class:distributed-systems
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Checkpointing

A fault-tolerance technique in which a system periodically captures a consistent snapshot of its execution state — memory, variables, message queues, or conversation context — and persists it to durable storage, so that after a crash, pre-emption, or migration the computation can resume from the most recent checkpoint rather than restarting from the beginning; foundational to long-running distributed workloads, ML training, and agent runtimes.
