---
okf_version: "0.2"
type: Class
title: Security Monitoring
resource: urn:ngm:class:security-monitoring
domain: security
description: "Security monitoring is the continuous collection, correlation and analysis of telemetry from systems, networks and applications to detect indicators of compromise and policy violations. It feeds detection rules, baselines and analytics that surface suspicious behaviour for investigation and response. As a discipline it spans log aggregation, intrusion detection, threat intelligence enrichment and "
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:threat-detection
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:metrics-collection
  - urn:ngm:class:audit-logging
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:threat-detection
  - urn:ngm:class:vulnerability-management
contrastsWith:
  - urn:ngm:class:intrusion-detection
uses:
  - urn:ngm:class:siem
  - urn:ngm:class:audit-logging
  - urn:ngm:class:anomaly-detection
supports:
  - urn:ngm:class:security-operations-centre
  - urn:ngm:class:threat-intelligence
relatedTo:
  - urn:ngm:class:alerting
  - urn:ngm:class:defense-in-depth
---

# Security Monitoring

Security monitoring is the continuous collection, correlation and analysis of telemetry from systems, networks and applications to detect indicators of compromise and policy violations. It feeds detection rules, baselines and analytics that surface suspicious behaviour for investigation and response. As a discipline it spans log aggregation, intrusion detection, threat intelligence enrichment and alerting, and is a core function of a security operations centre.
