---
okf_version: "0.2"
type: Class
title: Fault Tree Analysis
resource: urn:ngm:class:fault-tree-analysis
domain: infrastructure
description: Fault Tree Analysis (FTA) is a top-down, deductive reliability and safety method that models how combinations of component failures and events can lead to a defined undesired top-level event. Using Boolean logic gates to connect basic events, it identifies minimal cut sets — the smallest combinations of failures sufficient to cause the top event — and can be evaluated qualitatively or quantitative
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:risk-assessment
requires:
  - urn:ngm:class:system-model
enables:
  - urn:ngm:class:safety-certification
  - urn:ngm:class:probabilistic-risk-assessment
contrastsWith:
  - urn:ngm:class:failure-mode-and-effects-analysis
bridgesTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:artificial-intelligence
uses:
  - urn:ngm:class:boolean-algebra
supports:
  - urn:ngm:class:reliability-engineering
  - urn:ngm:class:functional-safety
standardizedBy:
  - urn:ngm:class:mil-std-882
relatedTo:
  - urn:ngm:class:safety-evaluation
  - urn:ngm:class:hazard-analysis
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:enrichment-swarm/6","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Fault Tree Analysis

Fault Tree Analysis (FTA) is a top-down, deductive reliability and safety method that models how combinations of component failures and events can lead to a defined undesired top-level event. Using Boolean logic gates to connect basic events, it identifies minimal cut sets — the smallest combinations of failures sufficient to cause the top event — and can be evaluated qualitatively or quantitatively with probabilities. Originating in aerospace and nuclear engineering, FTA is a cornerstone of system safety, risk assessment, and certification across safety-critical industries.
