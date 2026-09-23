---
okf_version: "0.2"
type: Class
title: Automated Code Review
resource: urn:ngm:class:automated-code-review
domain: artificial-intelligence
description: Automated code review is the use of software tools, static analysis and, increasingly, large language models to inspect source code for defects, style violations, security weaknesses and maintainability issues without requiring manual reading of every change. It augments or partially replaces human review by surfacing actionable findings directly in pull requests and continuous integration pipelin
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:code-review
requires:
  - urn:ngm:class:version-control
enables:
  - urn:ngm:class:software-engineering
  - urn:ngm:class:continuous-integration
implements:
  - urn:ngm:class:code-review
bridgesTo:
  - urn:ngm:class:static-analysis
  - urn:ngm:class:code-generation
uses:
  - urn:ngm:class:static-analysis
  - urn:ngm:class:large-language-model
supports:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:devops
partOf:
  - urn:ngm:class:code-review
relatedTo:
  - urn:ngm:class:static-analysis
  - urn:ngm:class:code-generation
  - urn:ngm:class:technical-debt
---

# Automated Code Review

Automated code review is the use of software tools, static analysis and, increasingly, large language models to inspect source code for defects, style violations, security weaknesses and maintainability issues without requiring manual reading of every change. It augments or partially replaces human review by surfacing actionable findings directly in pull requests and continuous integration pipelines. Modern systems combine rule-based linters with learned models that reason about code intent and propose fixes.
