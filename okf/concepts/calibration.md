---
okf_version: "0.2"
type: Class
title: Calibration
resource: urn:ngm:class:calibration
domain: robotics
description: Calibration is the systematic process of establishing, verifying, and correcting the quantitative relationship between a measurement instrument's or computational model's output and a known reference standard, encompassing intrinsic parameter estimation (gain, offset, nonlinearity, bias), extrinsic parameter determination (spatial pose and orientation relative to a reference frame), and inter-devi
maturity: mature
quality: 0.75
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:imu-calibration
  - urn:ngm:class:extrinsic-calibration
  - urn:ngm:class:temporal-calibration
requires:
  - urn:ngm:class:reference-standard
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:ground-truth-labels
  - urn:ngm:class:error-model
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:robot-control
  - urn:ngm:class:augmented-reality
dependsOn:
  - urn:ngm:class:optimisation
  - urn:ngm:class:least-squares
contrastsWith:
  - urn:ngm:class:validation-process
  - urn:ngm:class:verification
  - urn:ngm:class:validation-process
bridgesTo:
  - urn:ngm:class:model-calibration
  - urn:ngm:class:uncertainty-quantification
  - urn:ngm:class:probabilistic-calibration
uses:
  - urn:ngm:class:imu
  - urn:ngm:class:lidar
  - urn:ngm:class:fiducial-marker
  - urn:ngm:class:checkerboard-pattern
supports:
  - urn:ngm:class:autonomous-driving
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:medical-imaging
partOf:
  - urn:ngm:class:quality-assurance
  - urn:ngm:class:sensor-pipeline
relatedTo:
  - urn:ngm:class:sensor-noise
  - urn:ngm:class:systematic-error
  - urn:ngm:class:kinematic-calibration
---

# Calibration

Calibration is the systematic process of establishing, verifying, and correcting the quantitative relationship between a measurement instrument's or computational model's output and a known reference standard, encompassing intrinsic parameter estimation (gain, offset, nonlinearity, bias), extrinsic parameter determination (spatial pose and orientation relative to a reference frame), and inter-device consistency alignment. In physical systems it removes systematic error between raw sensor readings and true physical quantities; in machine learning it aligns predicted probability distributions to empirical frequencies. Calibration is a prerequisite for metrically accurate perception, reliable closed-loop control, trustworthy probabilistic inference, and coherent multi-modal data fusion across robotics, spatial computing, and AI systems.
