---
okf_version: "0.2"
type: Class
title: DevOps
resource: urn:ngm:class:devops
domain: infrastructure
description: DevOps is a sociotechnical discipline that unifies software development (Dev) and IT operations (Ops) through cultural practices, shared toolchains, and automation pipelines to shorten the system development lifecycle and deliver high-quality software continuously. It operationalises collaboration between development and operations teams by eliminating organisational silos, embracing infrastructur
maturity: mature
quality: 0.72
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:monitoring-system
  - urn:ngm:class:incident-response
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:build-automation
  - urn:ngm:class:automated-testing
enables:
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:mlops
dependsOn:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:containerisation
  - urn:ngm:class:microservices
implements:
  - urn:ngm:class:agile-software-development
  - urn:ngm:class:lean-software-development
  - urn:ngm:class:shift-left-testing
contrastsWith:
  - urn:ngm:class:waterfall-development
  - urn:ngm:class:siloed-operations
bridgesTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:dev-sec-ops
uses:
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:kubernetes
  - urn:ngm:class:git-hub-actions
  - urn:ngm:class:terraform
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:git-hub-actions
supports:
  - urn:ngm:class:software-development
  - urn:ngm:class:cloud-platform
  - urn:ngm:class:security-scanning
partOf:
  - urn:ngm:class:software-delivery-lifecycle
relatedTo:
  - urn:ngm:class:feature-flags
  - urn:ngm:class:observability
  - urn:ngm:class:observability
---

# DevOps

DevOps is a sociotechnical discipline that unifies software development (Dev) and IT operations (Ops) through cultural practices, shared toolchains, and automation pipelines to shorten the system development lifecycle and deliver high-quality software continuously. It operationalises collaboration between development and operations teams by eliminating organisational silos, embracing infrastructure as code, and instrumenting every stage of delivery with feedback loops spanning continuous integration, continuous delivery, monitoring, and incident response. The discipline extends Agile principles beyond code authorship to encompass deployment, reliability engineering, and production observability as first-class engineering concerns.
