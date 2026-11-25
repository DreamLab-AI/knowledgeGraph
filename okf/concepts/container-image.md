---
okf_version: "0.2"
type: Class
title: Container Image
resource: urn:ngm:class:container-image
domain: infrastructure
description: An immutable, layered filesystem bundle packaging an application together with its runtime, libraries, and configuration metadata, from which container instances are created. Defined by the OCI Image Specification as content-addressed layers plus a manifest and configuration, images are built once, distributed through registries, and executed identically on any compliant runtime, providing the rep
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:containerisation
enables:
  - urn:ngm:class:container
partOf:
  - urn:ngm:class:docker-containerisation-platform
relatedTo:
  - urn:ngm:class:container-registry
  - urn:ngm:class:edge-computing
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:lcr-swarm/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Container Image

An immutable, layered filesystem bundle packaging an application together with its runtime, libraries, and configuration metadata, from which container instances are created. Defined by the OCI Image Specification as content-addressed layers plus a manifest and configuration, images are built once, distributed through registries, and executed identically on any compliant runtime, providing the reproducible unit of software delivery that underpins containerised infrastructure from cloud clusters to edge devices.
