---
okf_version: "0.2"
type: Class
title: CPU Architecture
resource: urn:ngm:class:cpu-architecture
domain: infrastructure
description: "CPU architecture is the design of general-purpose central processors optimised for low-latency execution of sequential and branch-heavy code: a small number of powerful cores with deep pipelines, aggressive out-of-order execution, sophisticated branch prediction, and large multi-level caches. It is the deliberate opposite pole to GPU architecture, which trades single-thread latency for massive thr"
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:computer-hardware
hasPart:
  - urn:ngm:class:instruction-set-architecture
contrastsWith:
  - urn:ngm:class:gpu-architecture
relatedTo:
  - urn:ngm:class:cpu
  - urn:ngm:class:simd
  - urn:ngm:class:parallel-computing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# CPU Architecture

CPU architecture is the design of general-purpose central processors optimised for low-latency execution of sequential and branch-heavy code: a small number of powerful cores with deep pipelines, aggressive out-of-order execution, sophisticated branch prediction, and large multi-level caches. It is the deliberate opposite pole to GPU architecture, which trades single-thread latency for massive throughput; CPUs devote silicon to making one instruction stream fast, GPUs to running tens of thousands of streams concurrently.
