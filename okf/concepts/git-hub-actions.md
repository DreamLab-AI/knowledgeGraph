---
okf_version: "0.2"
type: Class
title: Git Hub Actions
resource: urn:ngm:class:git-hub-actions
domain: infrastructure
description: "A CI/CD automation platform integrated into GitHub that executes workflow pipelines triggered by repository events, schedules, or manual dispatch. GitHub Actions enables ML model training, data versioning with DVC, experiment tracking with MLflow, fairness testing, Docker container builds, and scheduled retraining, making it the standard orchestration layer for MLOps pipelines on GitHub-hosted or "
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:software-engineering
enables:
  - urn:ngm:class:machine-learning-discipline-pipeline
  - urn:ngm:class:version-control
uses:
  - urn:ngm:class:machine-learning-discipline-infrastructure
supports:
  - urn:ngm:class:fairness-oecd
relatedTo:
  - urn:ngm:class:agentic-ai
  - urn:ngm:class:knowledge-graph
---

# Git Hub Actions

A CI/CD automation platform integrated into GitHub that executes workflow pipelines triggered by repository events, schedules, or manual dispatch. GitHub Actions enables ML model training, data versioning with DVC, experiment tracking with MLflow, fairness testing, Docker container builds, and scheduled retraining, making it the standard orchestration layer for MLOps pipelines on GitHub-hosted or self-hosted runners.
