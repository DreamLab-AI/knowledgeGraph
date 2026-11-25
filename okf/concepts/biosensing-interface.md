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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# Biosensing Interface

Physical sensor hardware system that detects physiological signals such as heart rate, electroencephalography (EEG), galvanic skin response (GSR), and electromyography (EMG) to enable real-time adaptation of virtual interaction and user experience.
