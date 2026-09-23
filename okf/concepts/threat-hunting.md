---
okf_version: "0.2"
type: Class
title: Threat Hunting
resource: urn:ngm:class:threat-hunting
domain: security
description: Threat hunting is a proactive cybersecurity practice in which analysts iteratively search through networks, endpoints, and data repositories for hidden adversarial activity that has evaded automated detection. Unlike reactive incident response, threat hunting is hypothesis-driven, combining threat intelligence, behavioural analytics, and expert intuition to identify indicators of compromise or att
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:security
hasPart:
  - urn:ngm:class:hypothesis-generation
  - urn:ngm:class:indicator-of-compromise
requires:
  - urn:ngm:class:security-operations-centre
  - urn:ngm:class:log-management
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-intelligence
  - urn:ngm:class:cyber-resilience
dependsOn:
  - urn:ngm:class:threat-intelligence-platform
  - urn:ngm:class:network-traffic-analysis
contrastsWith:
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:intrusion-detection-system
uses:
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:endpoint-detection-and-response
supports:
  - urn:ngm:class:zero-trust-architecture
relatedTo:
  - urn:ngm:class:red-team
  - urn:ngm:class:penetration-testing
  - urn:ngm:class:mitre-attack
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:mitre-atlas
---

# Threat Hunting

Threat hunting is a proactive cybersecurity practice in which analysts iteratively search through networks, endpoints, and data repositories for hidden adversarial activity that has evaded automated detection. Unlike reactive incident response, threat hunting is hypothesis-driven, combining threat intelligence, behavioural analytics, and expert intuition to identify indicators of compromise or attack techniques before they manifest as confirmed incidents. The discipline reduces dwell time and surfaces novel attacker tradecraft for which signatures do not yet exist.
