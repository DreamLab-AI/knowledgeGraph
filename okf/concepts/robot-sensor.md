---
okf_version: "0.2"
type: Class
title: Robot Sensor
resource: urn:ngm:class:robot-sensor
domain: robotics
description: "A Robot Sensor is a transducer or measurement device integrated into a robotic system to acquire data about the robot's internal state (proprioception: joint angles, torques, currents) or external environment (exteroception: proximity, force, vision, lidar). Sensor data drives closed-loop control, obstacle avoidance, and higher-level perception pipelines."
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:sensor
  - urn:ngm:class:analog-to-digital-converter
requires:
  - urn:ngm:class:signal-conditioning
  - urn:ngm:class:sensor-calibration
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:obstacle-avoidance
dependsOn:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:ros
contrastsWith:
  - urn:ngm:class:robot-actuator
bridgesTo:
  - urn:ngm:class:digital-twin
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:kalman-filter
supports:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:human-robot-interaction
standardizedBy:
  - urn:ngm:class:iso-8373
  - urn:ngm:class:iec-61508
partOf:
  - urn:ngm:class:robotics
  - urn:ngm:class:robotic-system
relatedTo:
  - urn:ngm:class:lidar
  - urn:ngm:class:control-system
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:inertial-measurement-unit
---

# Robot Sensor

A Robot Sensor is a transducer or measurement device integrated into a robotic system to acquire data about the robot's internal state (proprioception: joint angles, torques, currents) or external environment (exteroception: proximity, force, vision, lidar). Sensor data drives closed-loop control, obstacle avoidance, and higher-level perception pipelines.
