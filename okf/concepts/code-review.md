---
okf_version: "0.2"
type: Class
title: Code Review
resource: urn:ngm:class:code-review
domain: infrastructure
description: Code review is the systematic, human-led examination of proposed source code changes by one or more reviewers other than the original author, intended to detect defects, enforce coding standards, and disseminate architectural knowledge across a development team. It is most commonly performed asynchronously via pull requests or merge requests in version-controlled repositories, augmented by automat
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
requires:
  - urn:ngm:class:version-control
  - urn:ngm:class:pull-request
  - urn:ngm:class:coding-standards
enables:
  - urn:ngm:class:quality-assurance
  - urn:ngm:class:knowledge-sharing
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:secure-development-lifecycle
dependsOn:
  - urn:ngm:class:collaborative-workflow
  - urn:ngm:class:source-code-management
contrastsWith:
  - urn:ngm:class:pair-programming
  - urn:ngm:class:formal-inspection
bridgesTo:
  - urn:ngm:class:automated-code-review
  - urn:ngm:class:large-language-model
uses:
  - urn:ngm:class:static-analysis
  - urn:ngm:class:diff-algorithm
  - urn:ngm:class:inline-commenting
supports:
  - urn:ngm:class:software-testing
  - urn:ngm:class:technical-debt-management
  - urn:ngm:class:code-maintainability
partOf:
  - urn:ngm:class:software-development
  - urn:ngm:class:devops
relatedTo:
  - urn:ngm:class:agile-software-development
  - urn:ngm:class:open-source-development
  - urn:ngm:class:refactoring
  - urn:ngm:class:agile-software-development
---

# Code Review

Code review is the systematic, human-led examination of proposed source code changes by one or more reviewers other than the original author, intended to detect defects, enforce coding standards, and disseminate architectural knowledge across a development team. It is most commonly performed asynchronously via pull requests or merge requests in version-controlled repositories, augmented by automated static analysis, linting, and continuous integration checks. Effective code review functions as both a quality gate and a collaborative learning mechanism, reducing the cost of defects by catching them before integration into the main codebase. It is a foundational practice in professional software engineering, distributed-collaboration workflows, and secure development lifecycles.
