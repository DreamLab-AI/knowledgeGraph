---
okf_version: "0.2"
type: Class
title: Container Registry
resource: urn:ngm:class:container-registry
domain: infrastructure
description: A content-addressed storage and distribution service for container images that implements the OCI Distribution Specification's push, pull, and discovery API. Registries hold image layers and manifests under named, tagged repositories, enforce authentication and access control, and increasingly store signatures, SBOMs, and other supply-chain artefacts alongside images, making them the central hand-
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:containerisation
hasPart:
  - urn:ngm:class:container-image
contrastsWith:
  - urn:ngm:class:model-registry
partOf:
  - urn:ngm:class:docker-containerisation-platform
---

# Container Registry

A content-addressed storage and distribution service for container images that implements the OCI Distribution Specification's push, pull, and discovery API. Registries hold image layers and manifests under named, tagged repositories, enforce authentication and access control, and increasingly store signatures, SBOMs, and other supply-chain artefacts alongside images, making them the central hand-off point between build pipelines and every runtime that deploys containerised software.
