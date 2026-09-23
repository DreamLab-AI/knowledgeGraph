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
---

# Container Image

An immutable, layered filesystem bundle packaging an application together with its runtime, libraries, and configuration metadata, from which container instances are created. Defined by the OCI Image Specification as content-addressed layers plus a manifest and configuration, images are built once, distributed through registries, and executed identically on any compliant runtime, providing the reproducible unit of software delivery that underpins containerised infrastructure from cloud clusters to edge devices.
