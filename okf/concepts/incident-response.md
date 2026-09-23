---
okf_version: "0.2"
type: Class
title: Incident Response
resource: urn:ngm:class:incident-response
domain: security
description: Incident Response is the structured organisational process for detecting, containing, eradicating, and recovering from cybersecurity incidents, followed by post-incident analysis to prevent recurrence and strengthen defensive posture. It is operationalised through lifecycle models such as NIST SP 800-61 and the SANS PICERL framework (Preparation, Identification, Containment, Eradication, Recovery,
maturity: established
quality: 0.74
is-a:
  - urn:ngm:class:cybersecurity
hasPart:
  - urn:ngm:class:threat-detection
  - urn:ngm:class:digital-forensics
  - urn:ngm:class:post-incident-review
  - urn:ngm:class:incident-containment
requires:
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:security-operations-centre
  - urn:ngm:class:threat-intelligence
enables:
  - urn:ngm:class:business-continuity
  - urn:ngm:class:cyber-resilience
  - urn:ngm:class:incident-reporting
contrastsWith:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:threat-hunting
bridgesTo:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:machine-learning-operations
  - urn:ngm:class:anomaly-detection
uses:
  - urn:ngm:class:digital-forensics-framework
  - urn:ngm:class:ai-trust-risk-and-security-management
  - urn:ngm:class:endpoint-detection-and-response
  - urn:ngm:class:user-and-entity-behaviour-analytics
  - urn:ngm:class:security-orchestration-automation-and-response
supports:
  - urn:ngm:class:cybersecurity-standard
  - urn:ngm:class:data-security
  - urn:ngm:class:risk-management
standardizedBy:
  - urn:ngm:class:nist-cybersecurity-framework
  - urn:ngm:class:iso-iec-27035
relatedTo:
  - urn:ngm:class:information-security
  - urn:ngm:class:data-breach
  - urn:ngm:class:vulnerability
  - urn:ngm:class:network-security
  - urn:ngm:class:identity-and-access-management
---

# Incident Response

Incident Response is the structured organisational process for detecting, containing, eradicating, and recovering from cybersecurity incidents, followed by post-incident analysis to prevent recurrence and strengthen defensive posture. It is operationalised through lifecycle models such as NIST SP 800-61 and the SANS PICERL framework (Preparation, Identification, Containment, Eradication, Recovery, Lessons Learned), enacted via security operations centre (SOC) playbooks, SIEM-driven detection pipelines, and SOAR-automated response actions. Effective incident response minimises dwell time—the interval between initial compromise and detection—limits lateral movement and data exfiltration, and satisfies regulatory notification obligations under frameworks such as GDPR and NIS2. AI-assisted triage, automated containment orchestration, and threat-intelligence enrichment have become defining characteristics of mature programmes.
