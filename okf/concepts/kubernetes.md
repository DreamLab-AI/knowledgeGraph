---
okf_version: "0.2"
type: Class
title: Kubernetes
resource: urn:ngm:class:kubernetes
domain: infrastructure
description: Kubernetes (K8s) is an open-source container orchestration platform originally developed by Google and donated to the Cloud Native Computing Foundation (CNCF) in 2014. It automates the deployment, scaling, scheduling, and lifecycle management of containerised workloads across clusters of physical or virtual machines. Kubernetes abstracts infrastructure resources into declarative objects—Pods, Depl
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:orchestration
enables:
  - urn:ngm:class:distributed-computing
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:resource-management
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:machine-learning-discipline-infrastructure
dependsOn:
  - urn:ngm:class:distributed-systems
  - urn:ngm:class:software-infrastructure
uses:
  - urn:ngm:class:api-gateway
  - urn:ngm:class:event-driven-architecture
supports:
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:distributed-training
relatedTo:
  - urn:ngm:class:microservices-architecture
  - urn:ngm:class:distributed-system
  - urn:ngm:class:cloud-native-applications
  - urn:ngm:class:software-platform
  - urn:ngm:class:technology-infrastructure
---

# Kubernetes

Kubernetes (K8s) is an open-source container orchestration platform originally developed by Google and donated to the Cloud Native Computing Foundation (CNCF) in 2014. It automates the deployment, scaling, scheduling, and lifecycle management of containerised workloads across clusters of physical or virtual machines. Kubernetes abstracts infrastructure resources into declarative objects—Pods, Deployments, Services, and Namespaces—that describe desired state, with a control plane continuously reconciling actual state to match the specification.
