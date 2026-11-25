---
okf_version: "0.2"
type: Class
title: Intrusion Detection System
resource: urn:ngm:class:intrusion-detection-system
domain: security
description: An intrusion detection system (IDS) monitors network traffic or host activity to identify malicious behaviour, policy violations, and signs of compromise, raising alerts for investigation. It detects threats using signature matching against known attack patterns, anomaly detection against established baselines, or a hybrid of both. An IDS is a detective control that complements preventive measures
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:threat-detection
hasPart:
  - urn:ngm:class:anomaly-detection
requires:
  - urn:ngm:class:network-security
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-detection
dependsOn:
  - urn:ngm:class:network-security
contrastsWith:
  - urn:ngm:class:penetration-testing
uses:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:threat-intelligence
supports:
  - urn:ngm:class:siem
  - urn:ngm:class:vulnerability-management
partOf:
  - urn:ngm:class:security
relatedTo:
  - urn:ngm:class:siem
  - urn:ngm:class:threat-intelligence
  - urn:ngm:class:access-control
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Intrusion Detection System

An intrusion detection system (IDS) monitors network traffic or host activity to identify malicious behaviour, policy violations, and signs of compromise, raising alerts for investigation. It detects threats using signature matching against known attack patterns, anomaly detection against established baselines, or a hybrid of both. An IDS is a detective control that complements preventive measures; when it can also block traffic it becomes an intrusion prevention system.
