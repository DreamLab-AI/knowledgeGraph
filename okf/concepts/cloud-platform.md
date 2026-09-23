---
okf_version: "0.2"
type: Class
title: Cloud Platform
resource: urn:ngm:class:cloud-platform
domain: infrastructure
description: "A cloud platform is an integrated suite of managed infrastructure, runtime services, and developer tooling delivered over the internet that enables organisations to build, deploy, scale, and operate applications without owning physical hardware. Cloud platforms abstract away operational complexity through pay-as-you-go pricing, elastic scaling, and managed service lifecycles, spanning IaaS, PaaS, "
maturity: established
quality: 0.75
is-a:
  - urn:ngm:class:cloud-infrastructure
hasPart:
  - urn:ngm:class:platform-service
  - urn:ngm:class:platform-layer
  - urn:ngm:class:technology-infrastructure-domain-component
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:container-orchestration
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:virtualisation
  - urn:ngm:class:identity-and-access-management
enables:
  - urn:ngm:class:cloud-native-applications
  - urn:ngm:class:machine-learning-discipline-platform
  - urn:ngm:class:machine-learning-discipline-infrastructure
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:devops
  - urn:ngm:class:continuous-integration
dependsOn:
  - urn:ngm:class:data-centre
  - urn:ngm:class:internet-protocol
contrastsWith:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:on-premise-infrastructure
bridgesTo:
  - urn:ngm:class:foundation-model
  - urn:ngm:class:inference-infrastructure
  - urn:ngm:class:ai-inference-infrastructure
uses:
  - urn:ngm:class:version-control
  - urn:ngm:class:data-pipeline
  - urn:ngm:class:kubernetes
  - urn:ngm:class:api-gateway
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:finops
  - urn:ngm:class:data-governance
standardizedBy:
  - urn:ngm:class:cncf
  - urn:ngm:class:nist-cloud-computing
partOf:
  - urn:ngm:class:cloud-infrastructure
relatedTo:
  - urn:ngm:class:technology-infrastructure-domain-architecture
  - urn:ngm:class:service-oriented-architecture
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:platform-governance
  - urn:ngm:class:multi-cloud-strategy
---

# Cloud Platform

A cloud platform is an integrated suite of managed infrastructure, runtime services, and developer tooling delivered over the internet that enables organisations to build, deploy, scale, and operate applications without owning physical hardware. Cloud platforms abstract away operational complexity through pay-as-you-go pricing, elastic scaling, and managed service lifecycles, spanning IaaS, PaaS, and SaaS delivery models. The dominant hyperscale providers — Amazon Web Services, Microsoft Azure, and Google Cloud Platform — offer hundreds of services covering compute, storage, networking, databases, AI/ML, security, and observability, forming the primary substrate for modern enterprise and AI workloads.
