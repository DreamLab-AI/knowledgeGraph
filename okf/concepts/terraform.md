---
okf_version: "0.2"
type: Class
title: Terraform
resource: urn:ngm:class:terraform
domain: infrastructure
description: Terraform is an open-source infrastructure-as-code tool that lets engineers define cloud and on-premises resources in declarative configuration files and provision them through a consistent execution workflow. It maintains a state file that records the real-world mapping of declared resources, computes a plan describing the changes needed to reach the desired state, and applies those changes idemp
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure-as-code
enables:
  - urn:ngm:class:automation
  - urn:ngm:class:reproducibility
implements:
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:configuration-management
contrastsWith:
  - urn:ngm:class:configuration-management
bridgesTo:
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:version-control
supports:
  - urn:ngm:class:cloud-infrastructure
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:kubernetes
partOf:
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:configuration-management
  - urn:ngm:class:data-centre
---

# Terraform

Terraform is an open-source infrastructure-as-code tool that lets engineers define cloud and on-premises resources in declarative configuration files and provision them through a consistent execution workflow. It maintains a state file that records the real-world mapping of declared resources, computes a plan describing the changes needed to reach the desired state, and applies those changes idempotently. Terraform supports many providers through a plugin model, enabling multi-cloud and hybrid provisioning from a single configuration language.
