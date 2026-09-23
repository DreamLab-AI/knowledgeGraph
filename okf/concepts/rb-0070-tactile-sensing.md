---
okf_version: "0.2"
type: Class
title: rb 0070 tactile sensing
resource: urn:ngm:class:rb-0070-tactile-sensing
domain: robotics
description: Tactile sensing is the robotic capability to detect and measure contact forces, pressures, textures, and slip at points of physical interaction between the robot and its environment or human operators. Realised through arrays of pressure sensors, capacitive skins, or piezoelectric films distributed across end-effectors and link surfaces, tactile sensing enables compliant grasping, contact-triggere
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:tactile-sensor
enables:
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:collaborative-systems-modality-operation
uses:
  - urn:ngm:class:pressure-sensor
  - urn:ngm:class:force-torque-sensor
standardizedBy:
  - urn:ngm:class:iso-ts-15066
relatedTo:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:force-control
---

# rb 0070 tactile sensing

Tactile sensing is the robotic capability to detect and measure contact forces, pressures, textures, and slip at points of physical interaction between the robot and its environment or human operators. Realised through arrays of pressure sensors, capacitive skins, or piezoelectric films distributed across end-effectors and link surfaces, tactile sensing enables compliant grasping, contact-triggered safety stops, and rich feedback for teleoperation. It is a key enabling technology for human-robot collaboration under ISO/TS 15066.
