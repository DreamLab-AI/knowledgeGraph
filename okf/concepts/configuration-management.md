---
okf_version: "0.2"
type: Class
title: Configuration Management
resource: urn:ngm:class:configuration-management
domain: artificial-intelligence
description: Configuration management is the engineering discipline of systematically establishing, recording, and maintaining the desired state of a system's components, settings, and dependencies throughout its lifecycle. It ensures that environments are reproducible and consistent by treating configuration as versioned, auditable artefacts rather than ad hoc manual changes. In modern practice it underpins i
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:automation
hasPart:
  - urn:ngm:class:version-control
  - urn:ngm:class:change-management
  - urn:ngm:class:configuration-management-database
  - urn:ngm:class:configuration-item
  - urn:ngm:class:baseline
  - urn:ngm:class:idempotency
  - urn:ngm:class:audit
  - urn:ngm:class:policy-as-code
  - urn:ngm:class:sbom
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:idempotency
  - urn:ngm:class:audit
  - urn:ngm:class:build-automation
enables:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:devops
  - urn:ngm:class:reproducibility
  - urn:ngm:class:disaster-recovery
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:gitops
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:supply-chain-security
dependsOn:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:automation
  - urn:ngm:class:agile-software-development
implements:
  - urn:ngm:class:change-management
  - urn:ngm:class:policy-as-code
  - urn:ngm:class:immutable-infrastructure
  - urn:ngm:class:slsa
  - urn:ngm:class:sbom
contrastsWith:
  - urn:ngm:class:manual-administration
bridgesTo:
  - urn:ngm:class:devops
  - urn:ngm:class:infrastructure-as-code
uses:
  - urn:ngm:class:version-control
  - urn:ngm:class:ansible
  - urn:ngm:class:terraform
  - urn:ngm:class:gitops
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:kubernetes
  - urn:ngm:class:opentofu
  - urn:ngm:class:pulumi
  - urn:ngm:class:argo-cd
  - urn:ngm:class:flux-cd
  - urn:ngm:class:hashicorp-vault
  - urn:ngm:class:open-policy-agent
  - urn:ngm:class:sigstore
  - urn:ngm:class:chef
  - urn:ngm:class:puppet
  - urn:ngm:class:jenkins
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:quality-assurance
  - urn:ngm:class:compliance
  - urn:ngm:class:mlops
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:security-scanning
  - urn:ngm:class:testing
  - urn:ngm:class:observability
  - urn:ngm:class:dev-sec-ops
relatedTo:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:testing
  - urn:ngm:class:audit
  - urn:ngm:class:site-reliability-engineering
  - urn:ngm:class:dev-sec-ops
  - urn:ngm:class:platform-engineering
  - urn:ngm:class:microservices
  - urn:ngm:class:cloud-native
  - urn:ngm:class:containerisation
  - urn:ngm:class:cloud-computing
  - urn:ngm:class:software-delivery-lifecycle
  - urn:ngm:class:data-versioning
  - urn:ngm:class:automated-testing
  - urn:ngm:class:incident-response
  - urn:ngm:class:supply-chain-security
  - urn:ngm:class:sbom
---

# Configuration Management

Configuration management is the engineering discipline of systematically establishing, recording, and maintaining the desired state of a system's components, settings, and dependencies throughout its lifecycle. It ensures that environments are reproducible and consistent by treating configuration as versioned, auditable artefacts rather than ad hoc manual changes. In modern practice it underpins infrastructure-as-code and continuous delivery, using declarative tools to converge machines and services to a defined state and to track every change for traceability and rollback.
