---
okf_version: "0.2"
type: Class
title: Technical Debt
resource: urn:ngm:class:technical-debt
domain: infrastructure
description: "Technical debt is the implied future cost incurred when a software team chooses an expedient solution over a better but slower approach, accruing rework that must eventually be paid down through refactoring. Like financial debt it carries interest: the longer suboptimal code persists, the more effort future changes require. Managing it involves making the debt visible, prioritising repayment, and "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:software-engineering
requires:
  - urn:ngm:class:software-architecture
  - urn:ngm:class:project-management
enables:
  - urn:ngm:class:continuous-delivery
dependsOn:
  - urn:ngm:class:software-development
contrastsWith:
  - urn:ngm:class:software-testing
bridgesTo:
  - urn:ngm:class:devops
uses:
  - urn:ngm:class:code-review
  - urn:ngm:class:quality-assurance
supports:
  - urn:ngm:class:software-engineering
relatedTo:
  - urn:ngm:class:agile-software-development
  - urn:ngm:class:continuous-integration
  - urn:ngm:class:software-engineering
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Technical Debt

Technical debt is the implied future cost incurred when a software team chooses an expedient solution over a better but slower approach, accruing rework that must eventually be paid down through refactoring. Like financial debt it carries interest: the longer suboptimal code persists, the more effort future changes require. Managing it involves making the debt visible, prioritising repayment, and balancing delivery speed against long-term maintainability.
