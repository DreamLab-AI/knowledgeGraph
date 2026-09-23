---
okf_version: "0.2"
type: Class
title: Gaze Control
resource: urn:ngm:class:gaze-control
domain: robotics
description: Gaze control regulates robot eye and head movement to establish, maintain, and redirect visual attention toward objects and people, conveying robot intent and facilitating natural Human-Robot Interaction.
maturity: emerging
quality: 0.5
is-a:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:robotics
  - urn:ngm:class:attention-control
hasPart:
  - urn:ngm:class:eye-movement-controller
  - urn:ngm:class:head-movement-mechanism
  - urn:ngm:class:gaze-target-estimator
  - urn:ngm:class:visual-attention-model
requires:
  - urn:ngm:class:target-tracking
  - urn:ngm:class:visual-perception
  - urn:ngm:class:camera-actuators
  - urn:ngm:class:social-understanding
enables:
  - urn:ngm:class:joint-attention
  - urn:ngm:class:natural-interaction
  - urn:ngm:class:attention-redirection
  - urn:ngm:class:social-signal-transmission
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:target-detection
  - urn:ngm:class:kinematics-computation
bridgesTo:
  - urn:ngm:class:neural-network
  - urn:ngm:class:telecollaboration
---

# Gaze Control

Gaze control regulates robot eye and head movement to establish, maintain, and redirect visual attention toward objects and people, conveying robot intent and facilitating natural Human-Robot Interaction.
