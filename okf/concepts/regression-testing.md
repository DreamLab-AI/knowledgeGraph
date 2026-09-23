---
okf_version: "0.2"
type: Class
title: Regression Testing
resource: urn:ngm:class:regression-testing
domain: infrastructure
description: Regression testing is the practice of re-executing previously passing tests after a code change to confirm that existing behaviour has not been broken. It guards against regressions introduced by new features, bug fixes or refactoring by maintaining a suite of repeatable checks that are run automatically as part of integration and delivery pipelines. The discipline trades upfront test authoring an
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-testing
hasPart:
  - urn:ngm:class:unit-testing
  - urn:ngm:class:integration-testing
requires:
  - urn:ngm:class:test-automation
enables:
  - urn:ngm:class:quality-assurance
dependsOn:
  - urn:ngm:class:version-control
contrastsWith:
  - urn:ngm:class:penetration-testing
uses:
  - urn:ngm:class:unit-testing
  - urn:ngm:class:test-automation
supports:
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:continuous-delivery
partOf:
  - urn:ngm:class:quality-assurance
relatedTo:
  - urn:ngm:class:reproducibility
  - urn:ngm:class:observability
---

# Regression Testing

Regression testing is the practice of re-executing previously passing tests after a code change to confirm that existing behaviour has not been broken. It guards against regressions introduced by new features, bug fixes or refactoring by maintaining a suite of repeatable checks that are run automatically as part of integration and delivery pipelines. The discipline trades upfront test authoring and maintenance for sustained confidence in evolving systems.
