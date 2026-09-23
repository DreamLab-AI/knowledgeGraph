---
okf_version: "0.2"
type: Class
title: PositionControl
resource: urn:ngm:class:position-control
domain: robotics
description: A closed-loop feedback control modology that commands a robotic manipulator, actuator, or motion platform to achieve and maintain a desired spatial position or angular orientation by continuously measuring the actual position via encoders, resolvers, or external sensing systems (vision, LIDAR), c...
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-algorithm
  - urn:ngm:class:feedback-control
  - urn:ngm:class:servosystem
  - urn:ngm:class:motion-control
hasPart:
  - urn:ngm:class:control-law
  - urn:ngm:class:error-calculation
  - urn:ngm:class:feedforward-compensation
  - urn:ngm:class:position-sensor
  - urn:ngm:class:position-sensor
  - urn:ngm:class:errorcalculation
  - urn:ngm:class:controllaw
  - urn:ngm:class:actuatorcommand
  - urn:ngm:class:feedforwardcompensation
requires:
  - urn:ngm:class:calibration
  - urn:ngm:class:kinematic-model
  - urn:ngm:class:motor-driver
  - urn:ngm:class:power-supply
  - urn:ngm:class:positionfeedback
  - urn:ngm:class:motor-driver
  - urn:ngm:class:power-supply
enables:
  - urn:ngm:class:pick-and-place
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:pickandplace
  - urn:ngm:class:pathfollowing
  - urn:ngm:class:trajectory-tracking
  - urn:ngm:class:homing
  - urn:ngm:class:synchronization
bridgesTo:
  - urn:ngm:class:control-algorithm
---

# PositionControl

A closed-loop feedback control modology that commands a robotic manipulator, actuator, or motion platform to achieve and maintain a desired spatial position or angular orientation by continuously measuring the actual position via encoders, resolvers, or external sensing systems (vision, LIDAR), c...
