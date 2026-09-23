---
okf_version: "0.2"
type: Class
title: Unit Testing
resource: urn:ngm:class:unit-testing
domain: infrastructure
description: Unit testing is a software testing practice in which individual units of source code — typically functions, methods, or classes — are exercised in isolation to verify that each behaves as specified. Tests are written as small, deterministic, automated checks that assert expected outputs for given inputs and run quickly as part of the development loop. The practice underpins refactoring confidence,
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-testing
hasPart:
  - urn:ngm:class:test-automation
  - urn:ngm:class:regression-testing
requires:
  - urn:ngm:class:test-automation
enables:
  - urn:ngm:class:test-driven-development
contrastsWith:
  - urn:ngm:class:integration-testing
  - urn:ngm:class:regression-testing
bridgesTo:
  - urn:ngm:class:continuous-integration
uses:
  - urn:ngm:class:test-automation
supports:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:software-engineering
  - urn:ngm:class:software-development
partOf:
  - urn:ngm:class:software-testing
  - urn:ngm:class:quality-assurance
relatedTo:
  - urn:ngm:class:continuous-delivery
  - urn:ngm:class:verification
  - urn:ngm:class:software-quality
---

# Unit Testing

Unit testing is a software testing practice in which individual units of source code — typically functions, methods, or classes — are exercised in isolation to verify that each behaves as specified. Tests are written as small, deterministic, automated checks that assert expected outputs for given inputs and run quickly as part of the development loop. The practice underpins refactoring confidence, regression protection, and continuous integration pipelines.
