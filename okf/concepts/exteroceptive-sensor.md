---
okf_version: "0.2"
type: Class
title: Exteroceptive Sensor
resource: urn:ngm:class:exteroceptive-sensor
domain: robotics
description: Exteroceptive sensors are robot perception transducers that measure information about the external environment surrounding the robot rather than its internal kinematic, dynamic, or energetic state, providing the raw signals from which obstacle maps, semantic scene representations, object poses, t...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:sensor
  - urn:ngm:class:robot-sensor
  - urn:ngm:class:environmental-sensor
  - urn:ngm:class:perception-transducer
hasPart:
  - urn:ngm:class:interface
  - urn:ngm:class:sensor-housing
  - urn:ngm:class:signal-conditioning
  - urn:ngm:class:analog-to-digital-converter
  - urn:ngm:class:calibration-target
  - urn:ngm:class:sensing-element
  - urn:ngm:class:interface
  - urn:ngm:class:optical-window
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:coordinate-frame
  - urn:ngm:class:sensor-driver
  - urn:ngm:class:time-synchronisation
  - urn:ngm:class:power-supply
  - urn:ngm:class:computational-processing
enables:
  - urn:ngm:class:grasp-planning
  - urn:ngm:class:localisation
  - urn:ngm:class:mapping
  - urn:ngm:class:visual-servoing
  - urn:ngm:class:object-detection
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:scene-understanding
  - urn:ngm:class:social-robotics
  - urn:ngm:class:visual-servoing
dependsOn:
  - urn:ngm:class:environmental-properties
  - urn:ngm:class:sensor-noise-characteristics
  - urn:ngm:class:calibration
  - urn:ngm:class:geometric-calibration
  - urn:ngm:class:time-of-flight-principle
  - urn:ngm:class:wave-propagation
implements:
  - urn:ngm:class:acoustic-sensing
  - urn:ngm:class:event-driven-sensing
  - urn:ngm:class:radar
  - urn:ngm:class:range-sensing
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:thermal-sensing
  - urn:ngm:class:vision-sensing
  - urn:ngm:class:radar
contrastsWith:
  - urn:ngm:class:proprioceptive-sensor
  - urn:ngm:class:interoceptive-sensor
  - urn:ngm:class:virtual-sensor
bridgesTo:
  - urn:ngm:class:environmental-sensor
uses:
  - urn:ngm:class:bayesian-inference
  - urn:ngm:class:deep-neural-network
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:agricultural-robotics
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:drone-navigation
  - urn:ngm:class:humanoid-robotics
  - urn:ngm:class:mobile-manipulation
  - urn:ngm:class:surgical-robotics
standardizedBy:
  - urn:ngm:class:iec-61496
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-21448
  - urn:ngm:class:iso-ts-15066
  - urn:ngm:class:ros
  - urn:ngm:class:sae-j-3016
  - urn:ngm:class:ros
  - urn:ngm:class:iso-21448
relatedTo:
  - urn:ngm:class:3-d-perception
  - urn:ngm:class:bird-s-eye-view-perception
  - urn:ngm:class:multimodal-ai-architecture-learning
  - urn:ngm:class:computer-vision
  - urn:ngm:class:slam
  - urn:ngm:class:multi-modal-learning
---

# Exteroceptive Sensor

Exteroceptive sensors are robot perception transducers that measure information about the external environment surrounding the robot rather than its internal kinematic, dynamic, or energetic state, providing the raw signals from which obstacle maps, semantic scene representations, object poses, t...
