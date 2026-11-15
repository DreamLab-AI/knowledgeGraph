---
okf_version: "0.2"
type: Class
title: Ceph
resource: urn:ngm:class:ceph
domain: infrastructure
description: An open-source software-defined storage platform that provides object, block, and file storage from a single self-healing cluster of commodity servers, using the CRUSH algorithm to place data deterministically without a central metadata bottleneck, and protecting data through replication or erasure coding; widely deployed beneath OpenStack and Kubernetes as exabyte-scale storage infrastructure.
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:distributed-storage
enables:
  - urn:ngm:class:high-availability
uses:
  - urn:ngm:class:erasure-coding
  - urn:ngm:class:replication
partOf:
  - urn:ngm:class:storage-infrastructure
relatedTo:
  - urn:ngm:class:distributed-file-system
  - urn:ngm:class:object-storage
  - urn:ngm:class:kubernetes
generated: {"by":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Ceph

An open-source software-defined storage platform that provides object, block, and file storage from a single self-healing cluster of commodity servers, using the CRUSH algorithm to place data deterministically without a central metadata bottleneck, and protecting data through replication or erasure coding; widely deployed beneath OpenStack and Kubernetes as exabyte-scale storage infrastructure.
