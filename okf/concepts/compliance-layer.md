---
okf_version: "0.2"
type: Class
title: Compliance Layer
resource: urn:ngm:class:compliance-layer
domain: governance
description: The Compliance Layer is the cross-cutting stratum that checks system behaviour against external obligations such as law, regulation, and contractual terms. It sits above the Policy Layer, consuming its enforcement records, and reports to the Regulatory and Governance Layers. It contains controls, evidence collection, audit trails, and conformance assessments rather than the operations being assess
maturity: emerging
quality: 0.6
is-a:
  - urn:ngm:class:infra-legal-and-regulatory
  - urn:ngm:class:owl-thing
requires:
  - urn:ngm:class:policy-layer
  - urn:ngm:class:governance-layer
enables:
  - urn:ngm:class:regulatory-layer
  - urn:ngm:class:institutional-layer
bridgesTo:
  - urn:ngm:class:audit
  - urn:ngm:class:risk-management
---

# Compliance Layer

The Compliance Layer is the cross-cutting stratum that checks system behaviour against external obligations such as law, regulation, and contractual terms. It sits above the Policy Layer, consuming its enforcement records, and reports to the Regulatory and Governance Layers. It contains controls, evidence collection, audit trails, and conformance assessments rather than the operations being assessed.
