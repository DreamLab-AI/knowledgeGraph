---
okf_version: "0.2"
type: Class
title: Adaptive Control
resource: urn:ngm:class:adaptive-control
domain: robotics
description: A control strategy that automatically adjusts its parameters in real-time to maintain desired performance as system dynamics change or uncertainties are encountered. The controller learns and adapts to variations in the system or environment, using mechanisms such as system identification, parameter estimation, and online learning to compensate for model uncertainty and external disturbances.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:closed-loop-control
hasPart:
  - urn:ngm:class:planning-and-scheduling
requires:
  - urn:ngm:class:system-identification
  - urn:ngm:class:stability-analysis
  - urn:ngm:class:parameter-adaptation-mechanism
enables:
  - urn:ngm:class:robust-control
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:fault-tolerant-control
  - urn:ngm:class:self-tuning-systems
dependsOn:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:state-estimation
implements:
  - urn:ngm:class:online-learning
  - urn:ngm:class:optimal-control
contrastsWith:
  - urn:ngm:class:robust-control
  - urn:ngm:class:pid-control
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:ai-agent-system
uses:
  - urn:ngm:class:parameter-estimation
  - urn:ngm:class:system-identification
supports:
  - urn:ngm:class:robotics
partOf:
  - urn:ngm:class:control-theory
relatedTo:
  - urn:ngm:class:adaptive-systems
---

# Adaptive Control

A control strategy that automatically adjusts its parameters in real-time to maintain desired performance as system dynamics change or uncertainties are encountered. The controller learns and adapts to variations in the system or environment, using mechanisms such as system identification, parameter estimation, and online learning to compensate for model uncertainty and external disturbances.
