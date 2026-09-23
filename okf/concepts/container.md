---
okf_version: "0.2"
type: Class
title: Container
resource: urn:ngm:class:container
domain: ai
description: A container is a lightweight, isolated runtime package that bundles an application together with its dependencies, libraries and configuration so it runs consistently across environments. Containers share the host operating system kernel while using namespaces and control groups for isolation, making them far more efficient than full virtual machines. They are the standard unit of deployment for m
maturity: mature
quality: 0
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:ai-infrastructure
  - urn:ngm:class:cloud-native
  - urn:ngm:class:deployment-artifact
hasPart:
  - urn:ngm:class:deployment-artifact
  - urn:ngm:class:container-image
  - urn:ngm:class:container-registry
  - urn:ngm:class:container-runtime
  - urn:ngm:class:control-groups
  - urn:ngm:class:namespace
requires:
  - urn:ngm:class:containerisation
  - urn:ngm:class:resource-isolation
  - urn:ngm:class:linux-kernel
  - urn:ngm:class:containerisation
  - urn:ngm:class:open-container-initiative
enables:
  - urn:ngm:class:microservices
  - urn:ngm:class:model-deployment
  - urn:ngm:class:scalability
  - urn:ngm:class:reproducibility
  - urn:ngm:class:immutable-infrastructure
  - urn:ngm:class:edge-computing
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:high-availability
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:orchestration
  - urn:ngm:class:kubernetes
  - urn:ngm:class:containerd
  - urn:ngm:class:cri-o
  - urn:ngm:class:cloud-infrastructure
implements:
  - urn:ngm:class:resource-isolation
  - urn:ngm:class:software-supply-chain
  - urn:ngm:class:immutable-infrastructure
  - urn:ngm:class:gitops
contrastsWith:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:web-assembly
  - urn:ngm:class:serverless
  - urn:ngm:class:virtualisation
uses:
  - urn:ngm:class:cgroups
  - urn:ngm:class:namespace
  - urn:ngm:class:open-container-initiative
  - urn:ngm:class:ebpf
  - urn:ngm:class:control-groups
  - urn:ngm:class:namespace
  - urn:ngm:class:linux-kernel
  - urn:ngm:class:docker-containerisation-platform
supports:
  - urn:ngm:class:mlops
  - urn:ngm:class:ci-cd
  - urn:ngm:class:devops
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:gitops
  - urn:ngm:class:distributed-system
  - urn:ngm:class:microservices-architecture
standardizedBy:
  - urn:ngm:class:open-container-initiative
  - urn:ngm:class:cncf
partOf:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:devops
  - urn:ngm:class:serverless
  - urn:ngm:class:distributed-system
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:container-security
  - urn:ngm:class:service-mesh
  - urn:ngm:class:fault-tolerance
  - urn:ngm:class:high-availability
  - urn:ngm:class:gpu-computing
  - urn:ngm:class:kubeflow
  - urn:ngm:class:v-llm
  - urn:ngm:class:cncf
  - urn:ngm:class:digital-twin
  - urn:ngm:class:fintech
---

# Container

A container is a lightweight, isolated runtime package that bundles an application together with its dependencies, libraries and configuration so it runs consistently across environments. Containers share the host operating system kernel while using namespaces and control groups for isolation, making them far more efficient than full virtual machines. They are the standard unit of deployment for machine-learning services and microservices.
