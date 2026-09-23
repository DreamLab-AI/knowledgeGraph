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
  - urn:ngm:class:fmea
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
---

# Fault Tree Analysis

Fault Tree Analysis (FTA) is a top-down, deductive reliability and safety method that models how combinations of component failures and events can lead to a defined undesired top-level event. Using Boolean logic gates to connect basic events, it identifies minimal cut sets — the smallest combinations of failures sufficient to cause the top event — and can be evaluated qualitatively or quantitatively with probabilities. Originating in aerospace and nuclear engineering, FTA is a cornerstone of system safety, risk assessment, and certification across safety-critical industries.
