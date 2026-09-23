---
okf_version: "0.2"
type: Class
title: GitOps
resource: urn:ngm:class:gitops
domain: infrastructure
description: GitOps is an operational model in which the desired state of infrastructure and applications is declared in version-controlled repositories and continuously reconciled into running systems by automated agents. Git becomes the single source of truth, so changes flow through pull requests and merges while reconcilers detect and correct drift. It applies software-delivery practices, review, audit and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure-as-code
requires:
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:configuration-management
enables:
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:disaster-recovery
dependsOn:
  - urn:ngm:class:kubernetes
implements:
  - urn:ngm:class:infrastructure-as-code
uses:
  - urn:ngm:class:version-control
  - urn:ngm:class:git
supports:
  - urn:ngm:class:container-orchestration
  - urn:ngm:class:observability
relatedTo:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:containerisation
  - urn:ngm:class:audit-logging
---

# GitOps

GitOps is an operational model in which the desired state of infrastructure and applications is declared in version-controlled repositories and continuously reconciled into running systems by automated agents. Git becomes the single source of truth, so changes flow through pull requests and merges while reconcilers detect and correct drift. It applies software-delivery practices, review, audit and rollback, to operations.
