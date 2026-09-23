---
okf_version: "0.2"
type: Class
title: Conformity Assessment
resource: urn:ngm:class:conformity-assessment
domain: governance
description: Conformity Assessment is a structured set of procedures used to determine whether a product, system, service, or process meets specified requirements defined in regulations, standards, or contractual obligations. In the context of AI and digital systems, it encompasses technical documentation review, testing, auditing, risk analysis, and post-market surveillance carried out either by the developer
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:ai-governance-and-ethics
requires:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:transparency
  - urn:ngm:class:technical-documentation
  - urn:ngm:class:auditability
enables:
  - urn:ngm:class:market-access
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:trustworthy-ai
dependsOn:
  - urn:ngm:class:market-surveillance
  - urn:ngm:class:data-governance
  - urn:ngm:class:market-surveillance
implements:
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:iso-iec-17000
contrastsWith:
  - urn:ngm:class:self-certification
  - urn:ngm:class:voluntary-disclosure
bridgesTo:
  - urn:ngm:class:federated-learning
  - urn:ngm:class:model-cards
uses:
  - urn:ngm:class:explainability
  - urn:ngm:class:model-evaluation
  - urn:ngm:class:robustness-testing
  - urn:ngm:class:bias-testing
supports:
  - urn:ngm:class:ai-regulation
  - urn:ngm:class:ai-safety
  - urn:ngm:class:consumer-protection
standardizedBy:
  - urn:ngm:class:iso-iec-jtc1-sc42
  - urn:ngm:class:etsi
  - urn:ngm:class:nist
relatedTo:
  - urn:ngm:class:certification
  - urn:ngm:class:accreditation
---

# Conformity Assessment

Conformity Assessment is a structured set of procedures used to determine whether a product, system, service, or process meets specified requirements defined in regulations, standards, or contractual obligations. In the context of AI and digital systems, it encompasses technical documentation review, testing, auditing, risk analysis, and post-market surveillance carried out either by the developer as a self-assessment or by an accredited third-party notified body. Under frameworks such as the EU AI Act, ISO/IEC 17000-series standards, and NIST guidelines, the conformity declaration produced is a legal and operational precondition for market entry and continued deployment. It inherits procedural principles from product safety certification while adapting them to the probabilistic, data-dependent, and emergent behaviour of machine learning systems.
