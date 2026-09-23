---
okf_version: "0.2"
type: Class
title: Continuous Monitoring
resource: urn:ngm:class:continuous-monitoring
domain: governance
description: An ongoing, automated process of collecting, analysing, and reporting metrics, logs, and events from systems, processes, or environments in near-real time to detect anomalies, ensure compliance, and support rapid response. Continuous monitoring operationalises oversight by replacing periodic audits with persistent telemetry streams fed into dashboards, alert rules, and automated remediation workfl
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:governance
hasPart:
  - urn:ngm:class:telemetry
  - urn:ngm:class:alerting
  - urn:ngm:class:log-management
  - urn:ngm:class:metrics-collection
requires:
  - urn:ngm:class:observability
  - urn:ngm:class:data-pipeline
enables:
  - urn:ngm:class:incident-response
  - urn:ngm:class:compliance-monitoring
  - urn:ngm:class:anomaly-detection
dependsOn:
  - urn:ngm:class:infrastructure
implements:
  - urn:ngm:class:risk-management
  - urn:ngm:class:security-operations
contrastsWith:
  - urn:ngm:class:periodic-audit
supports:
  - urn:ngm:class:accountability
  - urn:ngm:class:transparency
relatedTo:
  - urn:ngm:class:security-information-and-event-management
  - urn:ngm:class:dev-sec-ops
  - urn:ngm:class:audit-trail
---

# Continuous Monitoring

An ongoing, automated process of collecting, analysing, and reporting metrics, logs, and events from systems, processes, or environments in near-real time to detect anomalies, ensure compliance, and support rapid response. Continuous monitoring operationalises oversight by replacing periodic audits with persistent telemetry streams fed into dashboards, alert rules, and automated remediation workflows. It is fundamental to DevSecOps, regulatory compliance programmes, and risk management frameworks that require timely evidence of control effectiveness.
