---
okf_version: "0.2"
type: Class
title: Neural Interface
resource: urn:ngm:class:neural-interface
domain: robotics
description: "A neural interface is a system that establishes a communication pathway between the nervous system and an external device, translating neural activity into machine-readable signals or delivering stimulation back to neural tissue. Interfaces range from non-invasive surface electrodes that read muscle or scalp potentials to implanted electrodes that record from or stimulate individual neurons. They "
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:human-robot-interaction
requires:
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:control-system
enables:
  - urn:ngm:class:teleoperation
  - urn:ngm:class:haptics
dependsOn:
  - urn:ngm:class:feedback-control
implements:
  - urn:ngm:class:actuator
bridgesTo:
  - urn:ngm:class:human-robot-interaction
uses:
  - urn:ngm:class:electromyography
  - urn:ngm:class:sensor
  - urn:ngm:class:signal-processing
supports:
  - urn:ngm:class:exoskeleton
partOf:
  - urn:ngm:class:prosthetics
relatedTo:
  - urn:ngm:class:robotics
---

# Neural Interface

A neural interface is a system that establishes a communication pathway between the nervous system and an external device, translating neural activity into machine-readable signals or delivering stimulation back to neural tissue. Interfaces range from non-invasive surface electrodes that read muscle or scalp potentials to implanted electrodes that record from or stimulate individual neurons. They enable direct neural control of prosthetics, robots, and computers, and the restoration of sensory feedback.
