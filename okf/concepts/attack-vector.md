---
okf_version: "0.2"
type: Class
title: Attack Vector
resource: urn:ngm:class:attack-vector
domain: security
description: A specific path, method, or mechanism that a threat actor uses to gain unauthorised access, exploit vulnerabilities, or cause damage to a system, network, or organisation. Attack vectors span network-based exploitation, social engineering, supply-chain compromise, and AI-specific techniques such as prompt injection or model poisoning, and are categorised by access method, target layer, and sophist
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:infra-security-and-identity
  - urn:ngm:class:artificial-intelligence
hasPart:
  - urn:ngm:class:social-engineering
  - urn:ngm:class:supply-chain-attack
requires:
  - urn:ngm:class:vulnerability
  - urn:ngm:class:threat-actor
  - urn:ngm:class:access-control
enables:
  - urn:ngm:class:exploit
  - urn:ngm:class:data-breach
  - urn:ngm:class:privilege-escalation
contrastsWith:
  - urn:ngm:class:resilience
  - urn:ngm:class:security
  - urn:ngm:class:defense-in-depth
bridgesTo:
  - urn:ngm:class:adversarial-machine-learning
  - urn:ngm:class:blockchain
uses:
  - urn:ngm:class:malware
  - urn:ngm:class:zero-day-exploits
standardizedBy:
  - urn:ngm:class:cvss
partOf:
  - urn:ngm:class:threat-model
relatedTo:
  - urn:ngm:class:risk
  - urn:ngm:class:adversarial-robustness
  - urn:ngm:class:incident-response
  - urn:ngm:class:intrusion-detection
---

# Attack Vector

A specific path, method, or mechanism that a threat actor uses to gain unauthorised access, exploit vulnerabilities, or cause damage to a system, network, or organisation. Attack vectors span network-based exploitation, social engineering, supply-chain compromise, and AI-specific techniques such as prompt injection or model poisoning, and are categorised by access method, target layer, and sophistication.
