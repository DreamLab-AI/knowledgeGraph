---
okf_version: "0.2"
type: Class
title: Cloud-Native Applications
resource: urn:ngm:class:cloud-native-applications
domain: infrastructure
description: "Cloud-native applications are software systems specifically designed and architected to exploit the capabilities of cloud computing environments, built from loosely coupled microservices deployed via containers and orchestrated across private, public, or hybrid cloud infrastructure. They prioritise scalability, resilience, observability, and automated lifecycle management over the characteristics "
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:infra-computing-and-cloud
hasPart:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:serverless-architecture
  - urn:ngm:class:api-gateway
  - urn:ngm:class:containerisation
  - urn:ngm:class:service-mesh
requires:
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:kubernetes
  - urn:ngm:class:immutable-infrastructure
enables:
  - urn:ngm:class:platform-service
  - urn:ngm:class:industry-cloud-platforms
  - urn:ngm:class:autoscaling
dependsOn:
  - urn:ngm:class:twelve-factor-app
  - urn:ngm:class:service-discovery
contrastsWith:
  - urn:ngm:class:monolithic-architecture
bridgesTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:artificial-intelligence-operations
  - urn:ngm:class:sensor-input
uses:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:edge-cloud-collaboration
  - urn:ngm:class:devops
standardizedBy:
  - urn:ngm:class:cncf
  - urn:ngm:class:open-container-initiative
relatedTo:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:technology-infrastructure-domain-architecture
  - urn:ngm:class:site-reliability-engineering
---

# Cloud-Native Applications

Cloud-native applications are software systems specifically designed and architected to exploit the capabilities of cloud computing environments, built from loosely coupled microservices deployed via containers and orchestrated across private, public, or hybrid cloud infrastructure. They prioritise scalability, resilience, observability, and automated lifecycle management over the characteristics of traditional monolithic systems. The paradigm is distinguished not by where an application runs but by how it is constructed, operated, and evolved.
