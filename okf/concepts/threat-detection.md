---
okf_version: "0.2"
type: Class
title: Threat Detection
resource: urn:ngm:class:threat-detection
domain: security
description: Threat detection is the cybersecurity discipline concerned with identifying malicious or anomalous activity within a system or network in time to enable an effective defensive response, distinguishing genuine threats from benign anomalies across high-volume, noisy telemetry. It encompasses signature-based detection of known attack patterns, behavioural analytics for novel threats, and machine lear
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:cybersecurity
requires:
  - urn:ngm:class:telemetry
  - urn:ngm:class:log-management
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-surface-map
  - urn:ngm:class:security-operations
  - urn:ngm:class:threat-hunting
contrastsWith:
  - urn:ngm:class:vulnerability-scanning
bridgesTo:
  - urn:ngm:class:adversarial-machine-learning
  - urn:ngm:class:supply-chain-security
uses:
  - urn:ngm:class:ai-security
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:behavioural-analytics
  - urn:ngm:class:endpoint-detection-and-response
supports:
  - urn:ngm:class:network-security
  - urn:ngm:class:information-security
  - urn:ngm:class:zero-trust-architecture
  - urn:ngm:class:vulnerability-management
relatedTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:threat-model
  - urn:ngm:class:threat-actor
  - urn:ngm:class:attack-vector
  - urn:ngm:class:intrusion-detection-system
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:threat-intelligence
---

# Threat Detection

Threat detection is the cybersecurity discipline concerned with identifying malicious or anomalous activity within a system or network in time to enable an effective defensive response, distinguishing genuine threats from benign anomalies across high-volume, noisy telemetry. It encompasses signature-based detection of known attack patterns, behavioural analytics for novel threats, and machine learning models that model normal system baselines and flag statistical deviations. Effective threat detection must balance sensitivity (catching real attacks) against specificity (avoiding alert fatigue from false positives).
