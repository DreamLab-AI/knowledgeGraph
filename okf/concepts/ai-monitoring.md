---
okf_version: "0.2"
type: Class
title: AI Monitoring
resource: urn:ngm:class:ai-monitoring
domain: artificial-intelligence
description: The systematic and ongoing observation, measurement, and analysis of an artificial intelligence system's behaviour, performance, inputs, outputs, and impacts during operational use, employing automated tools and human oversight to detect degradation, anomalies, bias, safety issues, or unintended consequences, enabling timely intervention, maintenance, and continuous improvement whilst ensuring acc
maturity: draft
quality: 0.65
is-a:
  - urn:ngm:class:ai-lifecycle
hasPart:
  - urn:ngm:class:performance-monitoring
  - urn:ngm:class:data-drift-detection
  - urn:ngm:class:fairness-monitoring
  - urn:ngm:class:anomaly-detection
requires:
  - urn:ngm:class:alert-thresholds
  - urn:ngm:class:baseline-metrics
  - urn:ngm:class:monitoring-infrastructure
  - urn:ngm:class:data-logging
enables:
  - urn:ngm:class:ai-maintenance
  - urn:ngm:class:continuous-improvement
  - urn:ngm:class:model-updating
  - urn:ngm:class:human-oversight
  - urn:ngm:class:incident-response
dependsOn:
  - urn:ngm:class:ai-deployment
  - urn:ngm:class:model-performance
contrastsWith:
  - urn:ngm:class:ai-audit
  - urn:ngm:class:static-testing
bridgesTo:
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:data-drift
supports:
  - urn:ngm:class:ai-audit
  - urn:ngm:class:risk-management
  - urn:ngm:class:fairness
  - urn:ngm:class:bias
standardizedBy:
  - urn:ngm:class:iso-iec-42001-2023
  - urn:ngm:class:nist-ai-rmf
  - urn:ngm:class:eu-ai-act-regulatory-instrument
  - urn:ngm:class:iso-iec-23894-2023
partOf:
  - urn:ngm:class:ai-lifecycle
  - urn:ngm:class:ai-governance
relatedTo:
  - urn:ngm:class:ai-operator
  - urn:ngm:class:explainability
  - urn:ngm:class:model-retraining
---

# AI Monitoring

The systematic and ongoing observation, measurement, and analysis of an artificial intelligence system's behaviour, performance, inputs, outputs, and impacts during operational use, employing automated tools and human oversight to detect degradation, anomalies, bias, safety issues, or unintended consequences, enabling timely intervention, maintenance, and continuous improvement whilst ensuring accountability and compliance with governance requirements.
