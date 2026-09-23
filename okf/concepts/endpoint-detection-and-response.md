---
okf_version: "0.2"
type: Class
title: Endpoint Detection and Response
resource: urn:ngm:class:endpoint-detection-and-response
domain: security
description: Endpoint Detection and Response (EDR) is a cybersecurity technology that continuously records endpoint activity, detects suspicious or malicious behaviour, and provides investigation and response capabilities on hosts such as laptops, servers and workstations. Lightweight agents stream rich telemetry to an analytics backend that applies behavioural detection, threat intelligence and anomaly models
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:threat-detection
hasPart:
  - urn:ngm:class:telemetry
  - urn:ngm:class:anomaly-detection
requires:
  - urn:ngm:class:monitoring
enables:
  - urn:ngm:class:incident-response
uses:
  - urn:ngm:class:threat-intelligence
  - urn:ngm:class:anomaly-detection
supports:
  - urn:ngm:class:security-operations-centre
  - urn:ngm:class:zero-trust-architecture
partOf:
  - urn:ngm:class:cybersecurity
relatedTo:
  - urn:ngm:class:siem
  - urn:ngm:class:soar
  - urn:ngm:class:data-breach
  - urn:ngm:class:vulnerability-management
---

# Endpoint Detection and Response

Endpoint Detection and Response (EDR) is a cybersecurity technology that continuously records endpoint activity, detects suspicious or malicious behaviour, and provides investigation and response capabilities on hosts such as laptops, servers and workstations. Lightweight agents stream rich telemetry to an analytics backend that applies behavioural detection, threat intelligence and anomaly models to surface and contain threats that bypass preventive controls. EDR enables analysts to investigate incidents, isolate compromised hosts and remediate threats, and increasingly feeds extended detection and response and managed services.
