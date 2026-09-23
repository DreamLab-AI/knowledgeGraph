---
okf_version: "0.2"
type: Class
title: Package Manager
resource: urn:ngm:class:package-manager
domain: artificial-intelligence
description: A package manager is a tool that automates the installation, upgrade, configuration and removal of software libraries and their dependencies from curated repositories. It resolves version constraints across a dependency graph and records lockfiles so environments are reproducible. Package managers are foundational infrastructure for modern software development and continuous integration.
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:software-development
requires:
  - urn:ngm:class:software-development
enables:
  - urn:ngm:class:reproducibility
  - urn:ngm:class:continuous-integration
dependsOn:
  - urn:ngm:class:version-control
uses:
  - urn:ngm:class:version-control
supports:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:reproducibility
partOf:
  - urn:ngm:class:software-development
relatedTo:
  - urn:ngm:class:version-control
  - urn:ngm:class:reproducibility
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:software-development
---

# Package Manager

A package manager is a tool that automates the installation, upgrade, configuration and removal of software libraries and their dependencies from curated repositories. It resolves version constraints across a dependency graph and records lockfiles so environments are reproducible. Package managers are foundational infrastructure for modern software development and continuous integration.
