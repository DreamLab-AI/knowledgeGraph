---
okf_version: "0.2"
type: Class
title: Continuous Integration
resource: urn:ngm:class:continuous-integration
domain: infrastructure
description: Continuous Integration (CI) is a software engineering practice in which developers frequently merge code changes into a shared repository — typically multiple times per day — triggering automated build and test pipelines that provide rapid feedback on integration correctness. CI reduces the cost and risk of integration by detecting conflicts, regressions, and build failures early, and serves as th
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:build-automation
  - urn:ngm:class:automated-testing
  - urn:ngm:class:static-code-analysis
  - urn:ngm:class:pipeline-as-code
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:build-server
enables:
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:continuous-deployment
  - urn:ngm:class:code-review
  - urn:ngm:class:trunk-based-development
dependsOn:
  - urn:ngm:class:git
  - urn:ngm:class:containerisation
  - urn:ngm:class:test-driven-development
implements:
  - urn:ngm:class:shift-left-testing
  - urn:ngm:class:infrastructure-as-code
contrastsWith:
  - urn:ngm:class:waterfall-development
  - urn:ngm:class:big-bang-integration
bridgesTo:
  - urn:ngm:class:mlops
  - urn:ngm:class:model-evaluation
uses:
  - urn:ngm:class:git-hub-actions
  - urn:ngm:class:jenkins
  - urn:ngm:class:docker-containerisation-platform
  - urn:ngm:class:kubernetes
  - urn:ngm:class:git-hub-actions
  - urn:ngm:class:docker-containerisation-platform
supports:
  - urn:ngm:class:agile-software-development
  - urn:ngm:class:extreme-programming
  - urn:ngm:class:security-scanning
partOf:
  - urn:ngm:class:devops
  - urn:ngm:class:software-delivery-lifecycle
relatedTo:
  - urn:ngm:class:ci-cd-automation
  - urn:ngm:class:feature-flags
  - urn:ngm:class:observability
---

# Continuous Integration

Continuous Integration (CI) is a software engineering practice in which developers frequently merge code changes into a shared repository — typically multiple times per day — triggering automated build and test pipelines that provide rapid feedback on integration correctness. CI reduces the cost and risk of integration by detecting conflicts, regressions, and build failures early, and serves as the foundation of broader continuous delivery and DevOps workflows. Originating in Extreme Programming, the practice has become a cornerstone of modern software delivery, enabling teams to maintain a consistently releasable main branch through disciplined automation.
