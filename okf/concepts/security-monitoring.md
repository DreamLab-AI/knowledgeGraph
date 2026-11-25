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
  - urn:ngm:class:logging
  - urn:ngm:class:anomaly-detection
supports:
  - urn:ngm:class:security-operations-centre
  - urn:ngm:class:threat-intelligence
relatedTo:
  - urn:ngm:class:alerting
  - urn:ngm:class:defence-in-depth
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Security Monitoring

Security monitoring is the continuous collection, correlation and analysis of telemetry from systems, networks and applications to detect indicators of compromise and policy violations. It feeds detection rules, baselines and analytics that surface suspicious behaviour for investigation and response. As a discipline it spans log aggregation, intrusion detection, threat intelligence enrichment and alerting, and is a core function of a security operations centre.
