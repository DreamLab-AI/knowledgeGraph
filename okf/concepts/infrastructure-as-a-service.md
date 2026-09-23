---
okf_version: "0.2"
type: Class
title: Infrastructure As A Service
resource: urn:ngm:class:infrastructure-as-a-service
domain: infrastructure
description: Infrastructure as a Service (IaaS) is a cloud computing service model in which a provider delivers virtualised computing resources — including virtual machines, storage, networking, and bare-metal servers — over the internet on a pay-per-use basis, while the customer manages the operating system, middleware, and applications. IaaS abstracts away physical hardware procurement and data centre operat
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:cloud-computing
hasPart:
  - urn:ngm:class:virtual-machine
  - urn:ngm:class:object-storage
  - urn:ngm:class:virtual-networking
enables:
  - urn:ngm:class:scalability
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:devops
dependsOn:
  - urn:ngm:class:virtualisation
  - urn:ngm:class:hypervisor
  - urn:ngm:class:data-centre
contrastsWith:
  - urn:ngm:class:platform-as-a-service
  - urn:ngm:class:software-as-a-service
  - urn:ngm:class:on-premises
uses:
  - urn:ngm:class:api
  - urn:ngm:class:automation
supports:
  - urn:ngm:class:containerisation
  - urn:ngm:class:kubernetes
partOf:
  - urn:ngm:class:cloud-computing
relatedTo:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:multi-cloud
---

# Infrastructure As A Service

Infrastructure as a Service (IaaS) is a cloud computing service model in which a provider delivers virtualised computing resources — including virtual machines, storage, networking, and bare-metal servers — over the internet on a pay-per-use basis, while the customer manages the operating system, middleware, and applications. IaaS abstracts away physical hardware procurement and data centre operations, enabling organisations to provision and de-provision compute capacity elastically. Major IaaS providers include Amazon Web Services (EC2/S3), Microsoft Azure (Virtual Machines), and Google Cloud Platform (Compute Engine).
