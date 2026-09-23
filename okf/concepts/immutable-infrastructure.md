---
okf_version: "0.2"
type: Class
title: Immutable Infrastructure
resource: urn:ngm:class:immutable-infrastructure
domain: infrastructure
description: Immutable infrastructure is an operational model in which servers and components are never modified after deployment; instead, any change is delivered by building a new versioned artefact (image or container) and replacing the running instance. This eliminates configuration drift, makes deployments reproducible and rollbacks trivial, and pairs naturally with infrastructure-as-code and automated pi
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:infrastructure
  - urn:ngm:class:digital-infrastructure
requires:
  - urn:ngm:class:configuration-management
  - urn:ngm:class:cloud-computing
enables:
  - urn:ngm:class:continuous-deployment
dependsOn:
  - urn:ngm:class:infrastructure-as-code
implements:
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:continuous-deployment
bridgesTo:
  - urn:ngm:class:cloud-computing
uses:
  - urn:ngm:class:kubernetes
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:cloud-native
relatedTo:
  - urn:ngm:class:cloud-native
  - urn:ngm:class:devops
---

# Immutable Infrastructure

Immutable infrastructure is an operational model in which servers and components are never modified after deployment; instead, any change is delivered by building a new versioned artefact (image or container) and replacing the running instance. This eliminates configuration drift, makes deployments reproducible and rollbacks trivial, and pairs naturally with infrastructure-as-code and automated pipelines. It contrasts with mutable, in-place patching of long-lived servers.
