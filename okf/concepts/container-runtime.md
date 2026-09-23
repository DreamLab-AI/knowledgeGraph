---
okf_version: "0.2"
type: Class
title: Container Runtime
resource: urn:ngm:class:container-runtime
domain: infrastructure
description: "A container runtime is the software responsible for running containers on a host: pulling and unpacking images, configuring isolation and resource limits, and starting, stopping and supervising container processes. Runtimes operate at low and high levels, from minimal process launchers to daemons that manage image lifecycles, and present standard interfaces consumed by orchestrators such as Kubern"
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:cloud-native
hasPart:
  - urn:ngm:class:orchestration
  - urn:ngm:class:resource-management
requires:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:resource-management
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:kubernetes
  - urn:ngm:class:continuous-deployment
dependsOn:
  - urn:ngm:class:network-protocol
implements:
  - urn:ngm:class:service-discovery
contrastsWith:
  - urn:ngm:class:virtual-machine
uses:
  - urn:ngm:class:orchestration
supports:
  - urn:ngm:class:scalability
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:devops
partOf:
  - urn:ngm:class:cloud-native
  - urn:ngm:class:infrastructure
relatedTo:
  - urn:ngm:class:kubernetes
  - urn:ngm:class:microservices
---

# Container Runtime

A container runtime is the software responsible for running containers on a host: pulling and unpacking images, configuring isolation and resource limits, and starting, stopping and supervising container processes. Runtimes operate at low and high levels, from minimal process launchers to daemons that manage image lifecycles, and present standard interfaces consumed by orchestrators such as Kubernetes. Container runtimes provide the execution foundation for portable, lightweight, cloud-native workloads.
