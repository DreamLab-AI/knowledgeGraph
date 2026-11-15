---
okf_version: "0.2"
type: Class
title: Policy Layer
resource: urn:ngm:class:policy-layer
domain: governance
description: "The Policy Layer is the cross-cutting stratum that encodes machine-readable rules, constraints, and authorisations governing system behaviour. It sits above operational concerns and below the human-facing Governance Layer, translating governance intent into enforceable statements that other layers consult before acting. It contains policy definitions, decision points, and enforcement hooks rather "
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-legal-and-regulatory
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:identity-layer
  - urn:ngm:class:control-layer
enables:
  - urn:ngm:class:governance-layer
  - urn:ngm:class:compliance-layer
bridgesTo:
  - urn:ngm:class:access-control
  - urn:ngm:class:attribute-based-access-control
generated: {"by":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Policy Layer

The Policy Layer is the cross-cutting stratum that encodes machine-readable rules, constraints, and authorisations governing system behaviour. It sits above operational concerns and below the human-facing Governance Layer, translating governance intent into enforceable statements that other layers consult before acting. It contains policy definitions, decision points, and enforcement hooks rather than the data or compute those policies regulate.
