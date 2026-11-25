---
okf_version: "0.2"
type: Class
title: Probabilistic Risk Assessment
resource: urn:ngm:class:probabilistic-risk-assessment
domain: infrastructure
description: Probabilistic Risk Assessment (PRA) is a systematic methodology for quantifying the likelihood and consequences of adverse events in complex engineered systems. It enumerates accident scenarios, estimates the probability of each contributing failure and combines them to produce numeric risk measures and confidence bounds. PRA underpins safety-critical decision-making in domains such as nuclear, ae
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:risk-assessment
requires:
  - urn:ngm:class:statistics
  - urn:ngm:class:fault-tree-analysis
enables:
  - urn:ngm:class:risk-assessment
  - urn:ngm:class:reliability-engineering
dependsOn:
  - urn:ngm:class:statistics
implements:
  - urn:ngm:class:uncertainty-quantification
contrastsWith:
  - urn:ngm:class:hazard-analysis
bridgesTo:
  - urn:ngm:class:reliability-engineering
uses:
  - urn:ngm:class:fault-tree-analysis
  - urn:ngm:class:hazard-analysis
  - urn:ngm:class:uncertainty-quantification
supports:
  - urn:ngm:class:safety-engineering
  - urn:ngm:class:reliability-engineering
partOf:
  - urn:ngm:class:risk-assessment
relatedTo:
  - urn:ngm:class:safety-engineering
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:fault-tolerance
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Probabilistic Risk Assessment

Probabilistic Risk Assessment (PRA) is a systematic methodology for quantifying the likelihood and consequences of adverse events in complex engineered systems. It enumerates accident scenarios, estimates the probability of each contributing failure and combines them to produce numeric risk measures and confidence bounds. PRA underpins safety-critical decision-making in domains such as nuclear, aerospace and critical infrastructure where rare, high-consequence failures must be rigorously characterised.
