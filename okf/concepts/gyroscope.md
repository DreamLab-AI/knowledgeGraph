---
okf_version: "0.2"
type: Class
title: Gyroscope
resource: urn:ngm:class:gyroscope
domain: robotics
description: Gyroscope - An angular velocity sensor that detects rotation rates about three orthogonal axes, enabling Attitude Estimation, Roll/Pitch/Yaw Measurement, and Orientation Tracking for balance control and Inertial Navigation in aerial and mobile robots.
maturity: draft
quality: 0.56
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:robotics
  - urn:ngm:class:inertial-sensor
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:bias-compensation
enables:
  - urn:ngm:class:balance-control
  - urn:ngm:class:drone-stabilisation
  - urn:ngm:class:orientation-reference
bridgesTo:
  - urn:ngm:class:sensor
  - urn:ngm:class:ai-agent-system
uses:
  - urn:ngm:class:robotics
partOf:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:attitude-determination
---

# Gyroscope

Gyroscope - An angular velocity sensor that detects rotation rates about three orthogonal axes, enabling Attitude Estimation, Roll/Pitch/Yaw Measurement, and Orientation Tracking for balance control and Inertial Navigation in aerial and mobile robots.
