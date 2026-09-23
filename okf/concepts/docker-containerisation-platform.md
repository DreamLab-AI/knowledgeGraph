---
okf_version: "0.2"
type: Class
title: Docker Containerisation Platform
resource: urn:ngm:class:docker-containerisation-platform
domain: infrastructure
description: Docker is an open-source platform that automates the deployment, scaling, and management of applications by packaging them together with their runtime dependencies into lightweight, portable containers built on Linux kernel primitives (namespaces and cgroups). Unlike virtual machines, Docker containers share the host operating system kernel, providing process and filesystem isolation with far lowe
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:software-platform
hasPart:
  - urn:ngm:class:container-image
  - urn:ngm:class:container-registry
  - urn:ngm:class:container-runtime
  - urn:ngm:class:docker-compose
requires:
  - urn:ngm:class:linux-kernel
  - urn:ngm:class:operating-system-namespaces
  - urn:ngm:class:control-groups
enables:
  - urn:ngm:class:cloud-native-applications
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:devops
  - urn:ngm:class:continuous-integration
dependsOn:
  - urn:ngm:class:open-source-software
  - urn:ngm:class:cloud-platform
contrastsWith:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:serverless-architecture
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:gpu-computing
uses:
  - urn:ngm:class:overlay-filesystem
  - urn:ngm:class:container-networking
supports:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:software-engineering
  - urn:ngm:class:model-ops
  - urn:ngm:class:edge-computing
  - urn:ngm:class:model-ops
standardizedBy:
  - urn:ngm:class:open-container-initiative
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:software-infrastructure
  - urn:ngm:class:development-platform
---

# Docker Containerisation Platform

Docker is an open-source platform that automates the deployment, scaling, and management of applications by packaging them together with their runtime dependencies into lightweight, portable containers built on Linux kernel primitives (namespaces and cgroups). Unlike virtual machines, Docker containers share the host operating system kernel, providing process and filesystem isolation with far lower overhead while guaranteeing consistent execution across heterogeneous computing environments. Launched in 2013 by Docker Inc., the platform introduced an intuitive developer-facing toolchain, a layered image format, and the Docker Hub public registry, collectively mainstreaming container technology and catalysing the cloud-native ecosystem. Docker standardised container packaging through the Open Container Initiative (OCI) specification and remains the dominant interface for building, distributing, and running container images in both development and production contexts.
