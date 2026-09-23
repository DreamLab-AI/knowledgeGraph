---
okf_version: "0.2"
type: Class
title: Refactoring
resource: urn:ngm:class:refactoring
domain: infrastructure
description: "Refactoring is the disciplined practice of restructuring existing source code to improve its internal design—readability, modularity, and maintainability—without changing its external behaviour. It proceeds through small, behaviour-preserving transformations, typically guarded by automated tests that confirm functionality remains intact. Refactoring is a core technique for managing technical debt "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-engineering
requires:
  - urn:ngm:class:version-control
enables:
  - urn:ngm:class:version-control
  - urn:ngm:class:continuous-integration
contrastsWith:
  - urn:ngm:class:technical-debt
bridgesTo:
  - urn:ngm:class:web-application
uses:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:design-pattern
supports:
  - urn:ngm:class:devops
  - urn:ngm:class:version-control
partOf:
  - urn:ngm:class:software-engineering
relatedTo:
  - urn:ngm:class:technical-debt
  - urn:ngm:class:software-engineering
  - urn:ngm:class:design-pattern
---

# Refactoring

Refactoring is the disciplined practice of restructuring existing source code to improve its internal design—readability, modularity, and maintainability—without changing its external behaviour. It proceeds through small, behaviour-preserving transformations, typically guarded by automated tests that confirm functionality remains intact. Refactoring is a core technique for managing technical debt and sustaining the long-term evolvability of software systems.
