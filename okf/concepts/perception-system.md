---
okf_version: "0.2"
type: Class
title: Perception System
resource: urn:ngm:class:perception-system
domain: artificial-intelligence
description: A Perception System is the sensor processing and environmental understanding component of Autonomous Systems that interprets raw Sensor Data to build a coherent representation of the surrounding environment, including Object Detection, Classification, Tracking, Localization, and Scene Understanding. Perception systems fuse data from multiple Sensor Modalities (Camera, LiDAR, Radar, Ultrasonic Sens
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ai-technique
hasPart:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:object-detection
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:localisation
requires:
  - urn:ngm:class:sensor-data
  - urn:ngm:class:training-data
enables:
  - urn:ngm:class:environmental-mapping
  - urn:ngm:class:object-recognition
  - urn:ngm:class:situational-awareness
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:autonomous-decision-making
dependsOn:
  - urn:ngm:class:uncertainty-quantification
contrastsWith:
  - urn:ngm:class:end-to-end-learning
bridgesTo:
  - urn:ngm:class:intelligent-virtual-entity
  - urn:ngm:class:smart-cities
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:deep-learning
  - urn:ngm:class:transformer
standardizedBy:
  - urn:ngm:class:iso-26262
  - urn:ngm:class:iso-21448
  - urn:ngm:class:sae-j-3016
partOf:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:ai-agent-system
  - urn:ngm:class:robotics-systems
  - urn:ngm:class:intelligent-virtual-entity
  - urn:ngm:class:autonomous-system
relatedTo:
  - urn:ngm:class:adversarial-robustness
---

# Perception System

A Perception System is the sensor processing and environmental understanding component of Autonomous Systems that interprets raw Sensor Data to build a coherent representation of the surrounding environment, including Object Detection, Classification, Tracking, Localization, and Scene Understanding. Perception systems fuse data from multiple Sensor Modalities (Camera, LiDAR, Radar, Ultrasonic Sensors) to create robust environmental models for Autonomous Decision-Making.
