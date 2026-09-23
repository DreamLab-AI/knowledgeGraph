---
okf_version: "0.2"
type: Class
title: Threat Model
resource: urn:ngm:class:threat-model
domain: security
description: A threat model is a structured representation of the security properties, assumptions, and adversarial conditions relevant to a system, used to identify potential attack vectors, prioritise mitigations, and reason systematically about security guarantees. It defines who the adversary is (capabilities, motivations, access), what assets are worth protecting, and what attacks — such as those catalogu
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:security-framework
hasPart:
  - urn:ngm:class:trust-boundary
  - urn:ngm:class:threat-surface-map
requires:
  - urn:ngm:class:asset-inventory
  - urn:ngm:class:data-flow-diagram
enables:
  - urn:ngm:class:security-architecture
  - urn:ngm:class:risk-mitigation
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:security-by-design
dependsOn:
  - urn:ngm:class:adversary-model
contrastsWith:
  - urn:ngm:class:penetration-testing
  - urn:ngm:class:security-audit
bridgesTo:
  - urn:ngm:class:adversarial-robustness
  - urn:ngm:class:ai-risk-management
  - urn:ngm:class:formal-verification
uses:
  - urn:ngm:class:attack-vector
  - urn:ngm:class:vulnerability
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:cvss
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:mitre-attck
relatedTo:
  - urn:ngm:class:threat-surface-map
  - urn:ngm:class:cryptographic-protocol
  - urn:ngm:class:regulatory-compliance
---

# Threat Model

A threat model is a structured representation of the security properties, assumptions, and adversarial conditions relevant to a system, used to identify potential attack vectors, prioritise mitigations, and reason systematically about security guarantees. It defines who the adversary is (capabilities, motivations, access), what assets are worth protecting, and what attacks — such as those catalogued in STRIDE or MITRE ATT&CK — could compromise confidentiality, integrity, or availability. Threat modelling is applied during system design to surface architectural weaknesses before implementation, and updated continuously as the threat landscape evolves. It is a prerequisite for sound security architecture, cryptographic protocol design, and regulatory compliance.
