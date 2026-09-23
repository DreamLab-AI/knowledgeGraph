---
okf_version: "0.2"
type: Class
title: CI/CD
resource: urn:ngm:class:ci-cd
domain: infrastructure
description: CI/CD (continuous integration and continuous delivery/deployment) is the software engineering practice of automatically building, testing and releasing every code change through a versioned pipeline. Continuous integration merges work into a shared trunk many times a day behind automated test gates; continuous delivery keeps the mainline permanently releasable; continuous deployment pushes each pa
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:devops
hasPart:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:continuous-deployment
enables:
  - urn:ngm:class:canary-deployment
  - urn:ngm:class:zero-downtime-deployment
uses:
  - urn:ngm:class:automated-testing
  - urn:ngm:class:version-control
  - urn:ngm:class:container
relatedTo:
  - urn:ngm:class:infrastructure-as-code
  - urn:ngm:class:software-engineering
---

# CI/CD

CI/CD (continuous integration and continuous delivery/deployment) is the software engineering practice of automatically building, testing and releasing every code change through a versioned pipeline. Continuous integration merges work into a shared trunk many times a day behind automated test gates; continuous delivery keeps the mainline permanently releasable; continuous deployment pushes each passing change to production automatically. Together they shrink feedback loops, reduce integration risk and enable progressive release strategies such as canary and zero-downtime deployments.
