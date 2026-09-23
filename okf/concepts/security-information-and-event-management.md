---
okf_version: "0.2"
type: Class
title: Security Information and Event Management
resource: urn:ngm:class:security-information-and-event-management
domain: security
description: Security Information and Event Management (SIEM) is a security discipline and platform category that aggregates, normalises and correlates log and event data from across an estate to detect, investigate and respond to threats. It combines real-time monitoring and alerting with longer-term storage for forensics and compliance reporting. SIEM is the analytical core of most security operations, turni
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:network-security
hasPart:
  - urn:ngm:class:threat-detection
  - urn:ngm:class:audit-logging
requires:
  - urn:ngm:class:observability
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-detection
dependsOn:
  - urn:ngm:class:audit-logging
implements:
  - urn:ngm:class:threat-detection
bridgesTo:
  - urn:ngm:class:observability
uses:
  - urn:ngm:class:anomaly-detection
  - urn:ngm:class:threat-intelligence
supports:
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:incident-response
standardizedBy:
  - urn:ngm:class:cybersecurity
partOf:
  - urn:ngm:class:cybersecurity
relatedTo:
  - urn:ngm:class:vulnerability-management
  - urn:ngm:class:data-loss-prevention
---

# Security Information and Event Management

Security Information and Event Management (SIEM) is a security discipline and platform category that aggregates, normalises and correlates log and event data from across an estate to detect, investigate and respond to threats. It combines real-time monitoring and alerting with longer-term storage for forensics and compliance reporting. SIEM is the analytical core of most security operations, turning raw telemetry into actionable detections.
