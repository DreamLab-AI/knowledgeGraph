---
okf_version: "0.2"
type: Class
title: Debugging
resource: urn:ngm:class:debugging
domain: infrastructure
description: "Debugging is the systematic process of locating, diagnosing and resolving defects in software so that it behaves as intended. It typically involves reproducing the fault, observing program state through breakpoints, logging and runtime inspection, forming hypotheses about the cause, and verifying a fix. Debugging spans interactive use of debuggers, analysis of stack traces and logs, and reasoning "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-development
requires:
  - urn:ngm:class:runtime-environment
enables:
  - urn:ngm:class:fault-tolerance
dependsOn:
  - urn:ngm:class:observability
implements:
  - urn:ngm:class:software-testing
contrastsWith:
  - urn:ngm:class:testing
bridgesTo:
  - urn:ngm:class:devops
uses:
  - urn:ngm:class:runtime-environment
  - urn:ngm:class:observability
supports:
  - urn:ngm:class:reliability
  - urn:ngm:class:software-engineering
partOf:
  - urn:ngm:class:software-engineering
relatedTo:
  - urn:ngm:class:software-testing
  - urn:ngm:class:version-control
  - urn:ngm:class:reliability
---

# Debugging

Debugging is the systematic process of locating, diagnosing and resolving defects in software so that it behaves as intended. It typically involves reproducing the fault, observing program state through breakpoints, logging and runtime inspection, forming hypotheses about the cause, and verifying a fix. Debugging spans interactive use of debuggers, analysis of stack traces and logs, and reasoning about concurrency and integration boundaries. It is a core software development activity complementary to, but distinct from, automated testing.
