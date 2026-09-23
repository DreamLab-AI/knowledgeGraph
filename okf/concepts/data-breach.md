---
okf_version: "0.2"
type: Class
title: Data Breach
resource: urn:ngm:class:data-breach
domain: artificial-intelligence
description: A Data Breach is a security incident in which sensitive, protected, or confidential data is accessed, disclosed, copied, transmitted, or destroyed by an unauthorised actor, whether through external attack, insider threat, or accidental exposure. In AI contexts, data breaches can compromise training datasets, model weights, inference outputs, or user interaction logs, triggering GDPR notification o
maturity: established
quality: 0.9
is-a:
  - urn:ngm:class:ai-governance-and-ethics
  - urn:ngm:class:risk
hasPart:
  - urn:ngm:class:external-attack
  - urn:ngm:class:insider-threat
  - urn:ngm:class:accidental-exposure
  - urn:ngm:class:model-inversion
  - urn:ngm:class:membership-inference
  - urn:ngm:class:ransomware
  - urn:ngm:class:data-exfiltration
  - urn:ngm:class:model-extraction
  - urn:ngm:class:data-poisoning
requires:
  - urn:ngm:class:security
  - urn:ngm:class:vulnerability
  - urn:ngm:class:access-control
  - urn:ngm:class:cybersecurity
enables:
  - urn:ngm:class:privacy
  - urn:ngm:class:incident-response
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:risk-assessment
dependsOn:
  - urn:ngm:class:artificial-intelligence
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:adversarial-attack
implements:
  - urn:ngm:class:risk-management
  - urn:ngm:class:threat-intelligence
contrastsWith:
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:privacy-preserving-machine-learning
  - urn:ngm:class:federated-learning
  - urn:ngm:class:encryption
  - urn:ngm:class:zero-trust-architecture
uses:
  - urn:ngm:class:membership-inference
  - urn:ngm:class:model-inversion
  - urn:ngm:class:adversarial-attack
  - urn:ngm:class:data-poisoning
  - urn:ngm:class:model-extraction
  - urn:ngm:class:ransomware
supports:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:risk-management
  - urn:ngm:class:threat-intelligence
  - urn:ngm:class:audit-trail
relatedTo:
  - urn:ngm:class:cybersecurity
  - urn:ngm:class:data-protection
  - urn:ngm:class:audit-trail
  - urn:ngm:class:regulatory-compliance
  - urn:ngm:class:privacy-preserving-data-mining
  - urn:ngm:class:encryption
  - urn:ngm:class:gdpr
  - urn:ngm:class:differential-privacy
  - urn:ngm:class:federated-learning
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:access-control
  - urn:ngm:class:healthcare-ai
  - urn:ngm:class:insider-threat
  - urn:ngm:class:vulnerability
---

# Data Breach

A Data Breach is a security incident in which sensitive, protected, or confidential data is accessed, disclosed, copied, transmitted, or destroyed by an unauthorised actor, whether through external attack, insider threat, or accidental exposure. In AI contexts, data breaches can compromise training datasets, model weights, inference outputs, or user interaction logs, triggering GDPR notification obligations (within 72 hours to supervisory authorities), regulatory penalties, and reputational damage. AI systems increase both the attack surface (by aggregating and processing large personal-data collections) and the potential for novel breach vectors such as model-inversion attacks and membership-inference attacks that reconstruct or identify individuals from model outputs without direct database access.
