---
okf_version: "0.2"
type: Class
title: Software Testing
resource: urn:ngm:class:software-testing
domain: infrastructure
description: Software Testing is the systematic discipline of evaluating software systems and components by executing them under controlled conditions, observing emergent behaviour, and verifying conformance to specified requirements, design intent, and quality attributes. It encompasses a hierarchy of test granularity — from unit and integration tests that validate individual components to system, end-to-end,
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:software-engineering
hasPart:
  - urn:ngm:class:unit-testing
  - urn:ngm:class:integration-testing
  - urn:ngm:class:regression-testing
  - urn:ngm:class:performance-testing
  - urn:ngm:class:system-testing
  - urn:ngm:class:acceptance-testing
requires:
  - urn:ngm:class:test-automation
  - urn:ngm:class:test-data-management
enables:
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:defect-detection
  - urn:ngm:class:reliability
  - urn:ngm:class:reliability
dependsOn:
  - urn:ngm:class:requirements-engineering
  - urn:ngm:class:version-control
contrastsWith:
  - urn:ngm:class:static-analysis
  - urn:ngm:class:formal-verification
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:simulation
  - urn:ngm:class:ai-testing
uses:
  - urn:ngm:class:test-driven-development
  - urn:ngm:class:mock-objects
  - urn:ngm:class:code-coverage
supports:
  - urn:ngm:class:robustness
  - urn:ngm:class:safety
  - urn:ngm:class:software-security
standardizedBy:
  - urn:ngm:class:ieee-829
  - urn:ngm:class:iso-iec-29119
partOf:
  - urn:ngm:class:software-development-lifecycle
  - urn:ngm:class:continuous-integration
relatedTo:
  - urn:ngm:class:devops
  - urn:ngm:class:agile-software-development
  - urn:ngm:class:agile-software-development
---

# Software Testing

Software Testing is the systematic discipline of evaluating software systems and components by executing them under controlled conditions, observing emergent behaviour, and verifying conformance to specified requirements, design intent, and quality attributes. It encompasses a hierarchy of test granularity — from unit and integration tests that validate individual components to system, end-to-end, and acceptance tests that assess the complete product — as well as specialised dimensions such as performance, security, accessibility, regression, and exploratory testing. Testing is an integral quality assurance mechanism embedded throughout the software development lifecycle, supporting early defect detection, risk mitigation, and continuous delivery. Alongside static analysis and formal verification, it constitutes the primary empirical evidence base for software correctness and reliability.
