---
okf_version: "0.2"
type: Class
title: CI-CD Automation
resource: urn:ngm:class:ci-cd-automation
domain: infrastructure
description: Continuous integration and continuous delivery (CI/CD) automation is the practice of automatically building, testing, and deploying software changes through a defined pipeline triggered by source-control events. Continuous integration merges and validates changes frequently to detect defects early; continuous delivery extends this to produce always-deployable artefacts, while continuous deployment
maturity: established
quality: 0.78
is-a:
  - urn:ngm:class:automation
uses:
  - urn:ngm:class:data-pipeline
relatedTo:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:model-deployment
---

# CI-CD Automation

Continuous integration and continuous delivery (CI/CD) automation is the practice of automatically building, testing, and deploying software changes through a defined pipeline triggered by source-control events. Continuous integration merges and validates changes frequently to detect defects early; continuous delivery extends this to produce always-deployable artefacts, while continuous deployment automates release to production. CI/CD automation reduces integration risk, shortens feedback loops, and makes deployments repeatable and auditable. It is implemented through pipeline-as-code definitions executed by orchestrators such as GitHub Actions, GitLab CI, and Jenkins.
