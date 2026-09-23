---
okf_version: "0.2"
type: Class
title: Static Analysis
resource: urn:ngm:class:static-analysis
domain: infrastructure
description: Static analysis is the examination of software source code, byte code or binaries without executing the program, in order to detect defects, security vulnerabilities, style violations and correctness properties. Techniques range from simple pattern-based linting to formal abstract interpretation and data-flow analysis over the program's control structure. It is commonly integrated into editors and
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-testing
requires:
  - urn:ngm:class:compiler
enables:
  - urn:ngm:class:code-review
  - urn:ngm:class:security-audit
implements:
  - urn:ngm:class:verification
contrastsWith:
  - urn:ngm:class:simulation
bridgesTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:compiler
uses:
  - urn:ngm:class:compiler
  - urn:ngm:class:code-generation
supports:
  - urn:ngm:class:software-testing
  - urn:ngm:class:code-review
relatedTo:
  - urn:ngm:class:formal-verification
  - urn:ngm:class:security-audit
  - urn:ngm:class:testing
---

# Static Analysis

Static analysis is the examination of software source code, byte code or binaries without executing the program, in order to detect defects, security vulnerabilities, style violations and correctness properties. Techniques range from simple pattern-based linting to formal abstract interpretation and data-flow analysis over the program's control structure. It is commonly integrated into editors and continuous-integration pipelines to provide early feedback before code runs.
