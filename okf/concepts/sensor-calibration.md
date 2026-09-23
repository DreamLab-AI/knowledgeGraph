---
okf_version: "0.2"
type: Class
title: Sensor Calibration
resource: urn:ngm:class:sensor-calibration
domain: robotics
description: Sensor calibration is the process of determining and correcting systematic measurement errors in sensing devices by comparing their outputs against known reference values or through geometric constraint solving, yielding intrinsic parameter models and extrinsic transformation matrices that map raw sensor readings to physically meaningful quantities. It is a prerequisite for sensor fusion, percepti
maturity: mature
quality: 0.8
is-a:
  - urn:ngm:class:calibration
hasPart:
  - urn:ngm:class:calibration
  - urn:ngm:class:extrinsic-calibration
requires:
  - urn:ngm:class:reference-standard
  - urn:ngm:class:reprojection-error
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:localisation
  - urn:ngm:class:visual-inertial-odometry
  - urn:ngm:class:autonomous-driving-perception
  - urn:ngm:class:robot-perception
dependsOn:
  - urn:ngm:class:sensor
contrastsWith:
  - urn:ngm:class:sensor
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:calibration-target
  - urn:ngm:class:coordinate-transformation
  - urn:ngm:class:camera-intrinsics
  - urn:ngm:class:levenberg-marquardt-algorithm
  - urn:ngm:class:optimisation
  - urn:ngm:class:allan-variance
supports:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:3-d-reconstruction
relatedTo:
  - urn:ngm:class:imu
  - urn:ngm:class:lidar
  - urn:ngm:class:camera-calibration
---

# Sensor Calibration

Sensor calibration is the process of determining and correcting systematic measurement errors in sensing devices by comparing their outputs against known reference values or through geometric constraint solving, yielding intrinsic parameter models and extrinsic transformation matrices that map raw sensor readings to physically meaningful quantities. It is a prerequisite for sensor fusion, perception pipelines, and any application requiring quantitatively accurate environmental measurements.
