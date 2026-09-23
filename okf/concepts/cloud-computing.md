---
okf_version: "0.2"
type: Class
title: Cloud Computing
resource: urn:ngm:class:cloud-computing
domain: infrastructure
description: Cloud computing is the on-demand delivery of computing resources — servers, storage, databases, networking, software, analytics, and AI accelerators — over the internet via provider-managed data centres, abstracting physical infrastructure into programmable APIs with pay-per-use economics. Service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid, multi-cloud) define the bou
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:distributed-systems
hasPart:
  - urn:ngm:class:infrastructure-as-a-service
  - urn:ngm:class:platform-as-a-service
  - urn:ngm:class:software-as-a-service
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:serverless-architecture
requires:
  - urn:ngm:class:network-infrastructure
  - urn:ngm:class:data-centre
  - urn:ngm:class:virtualisation
enables:
  - urn:ngm:class:mlops
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:distributed-training
  - urn:ngm:class:inference
  - urn:ngm:class:devops
  - urn:ngm:class:big-data
dependsOn:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:high-availability
contrastsWith:
  - urn:ngm:class:on-premises-computing
  - urn:ngm:class:mainframe-computing
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:digital-twin
  - urn:ngm:class:spatial-computing
uses:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:containerisation
  - urn:ngm:class:object-storage
  - urn:ngm:class:cdn
supports:
  - urn:ngm:class:cloud-platform
  - urn:ngm:class:edge-computing
  - urn:ngm:class:hybrid-cloud
standardizedBy:
  - urn:ngm:class:nist-cloud-computing
  - urn:ngm:class:iso-iec-17788
  - urn:ngm:class:nist-cloud-computing-definition
partOf:
  - urn:ngm:class:internet-infrastructure
relatedTo:
  - urn:ngm:class:multi-cloud
  - urn:ngm:class:cloud-security
  - urn:ngm:class:cost-optimisation
---

# Cloud Computing

Cloud computing is the on-demand delivery of computing resources — servers, storage, databases, networking, software, analytics, and AI accelerators — over the internet via provider-managed data centres, abstracting physical infrastructure into programmable APIs with pay-per-use economics. Service models (IaaS, PaaS, SaaS) and deployment models (public, private, hybrid, multi-cloud) define the boundary of managed responsibility between provider and consumer. Hyperscale providers such as AWS, Microsoft Azure, and Google Cloud Platform underpin modern AI training, inference serving, and distributed application deployment at global scale. The paradigm enables elastic provisioning — scaling from zero to thousands of compute nodes in seconds — transforming both software engineering and machine learning operations.
