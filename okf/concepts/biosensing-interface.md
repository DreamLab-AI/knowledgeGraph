---
okf_version: "0.2"
type: Class
title: Biosensing Interface
resource: urn:ngm:class:biosensing-interface
domain: robotics
description: Physical sensor hardware system that detects physiological signals such as heart rate, electroencephalography (EEG), galvanic skin response (GSR), and electromyography (EMG) to enable real-time adaptation of virtual interaction and user experience.
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:sensor-system
hasPart:
  - urn:ngm:class:signal-processing-unit
  - urn:ngm:class:electrocardiogram-sensor
  - urn:ngm:class:electroencephalography-sensor
  - urn:ngm:class:galvanic-skin-response-sensor
  - urn:ngm:class:pulse-oximeter
requires:
  - urn:ngm:class:analog-to-digital-converter
  - urn:ngm:class:power-supply
  - urn:ngm:class:wireless-communication-module
  - urn:ngm:class:skin-contact-electrodes
enables:
  - urn:ngm:class:adaptive-virtual-experience
  - urn:ngm:class:emotional-state-detection
  - urn:ngm:class:stress-monitoring
  - urn:ngm:class:biofeedback-systems
dependsOn:
  - urn:ngm:class:xr-headset
  - urn:ngm:class:wearable-computing-platform
  - urn:ngm:class:cloud-analytics-service
bridgesTo:
  - urn:ngm:class:sensor-system
  - urn:ngm:class:neurotechnology
  - urn:ngm:class:wearable-computing
partOf:
  - urn:ngm:class:affective-computing
  - urn:ngm:class:physiological-computing-system
  - urn:ngm:class:affective-computing
---

# Biosensing Interface

Physical sensor hardware system that detects physiological signals such as heart rate, electroencephalography (EEG), galvanic skin response (GSR), and electromyography (EMG) to enable real-time adaptation of virtual interaction and user experience.
