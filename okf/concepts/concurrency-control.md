---
okf_version: "0.2"
type: Class
title: Concurrency Control
resource: urn:ngm:class:concurrency-control
domain: distributed-systems
description: Concurrency control is the set of techniques that coordinate simultaneous operations on shared data so that correctness is preserved despite interleaving. It ensures that concurrent transactions or processes produce results equivalent to some valid serial execution, preventing anomalies such as lost updates and inconsistent reads. It is foundational to databases, distributed systems, and collabora
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:distributed-systems
requires:
  - urn:ngm:class:transaction
  - urn:ngm:class:data-consistency
enables:
  - urn:ngm:class:data-consistency
dependsOn:
  - urn:ngm:class:concurrency
implements:
  - urn:ngm:class:data-consistency
contrastsWith:
  - urn:ngm:class:conflict-resolution
bridgesTo:
  - urn:ngm:class:database-system
uses:
  - urn:ngm:class:transaction
supports:
  - urn:ngm:class:database-system
partOf:
  - urn:ngm:class:distributed-systems
relatedTo:
  - urn:ngm:class:conflict-resolution
  - urn:ngm:class:state-synchronisation
---

# Concurrency Control

Concurrency control is the set of techniques that coordinate simultaneous operations on shared data so that correctness is preserved despite interleaving. It ensures that concurrent transactions or processes produce results equivalent to some valid serial execution, preventing anomalies such as lost updates and inconsistent reads. It is foundational to databases, distributed systems, and collaborative applications.
