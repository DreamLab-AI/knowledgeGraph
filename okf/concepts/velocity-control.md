---
okf_version: "0.2"
type: Class
title: VelocityControl
resource: urn:ngm:class:velocity-control
domain: robotics
description: A closed-loop feedback control strategy that regulates the rate of change of position (linear velocity v in m/s or angular velocity ω in rad/s) of a robotic actuator, motor shaft, conveyor system, or mobile robot platform by continuously measuring actual velocity via tachometers (±full-scale accu...
maturity: established
quality: 0.5
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:control-algorithm
  - urn:ngm:class:feedback-control
  - urn:ngm:class:motion-control
  - urn:ngm:class:servo-control
hasPart:
  - urn:ngm:class:error-calculation
  - urn:ngm:class:feedforward-compensation
  - urn:ngm:class:state-observer
  - urn:ngm:class:velocitymeasurement
  - urn:ngm:class:errorcalculation
  - urn:ngm:class:picontroller
  - urn:ngm:class:feedforwardcompensation
  - urn:ngm:class:state-observer
requires:
  - urn:ngm:class:noise-suppression
  - urn:ngm:class:stability-analysis
  - urn:ngm:class:velocityestimation
  - urn:ngm:class:controllertuning
  - urn:ngm:class:bandwidthdesign
  - urn:ngm:class:stability-analysis
  - urn:ngm:class:noise-suppression
enables:
  - urn:ngm:class:energy-efficiency
  - urn:ngm:class:velocity-profiling
  - urn:ngm:class:speedregulation
  - urn:ngm:class:synchronizedmotion
  - urn:ngm:class:energyefficiency
  - urn:ngm:class:constantthroughput
  - urn:ngm:class:velocityprofiling
dependsOn:
  - urn:ngm:class:velocitysensor
  - urn:ngm:class:motor-driver
  - urn:ngm:class:currentamplifier
  - urn:ngm:class:pwmmodulator
  - urn:ngm:class:digitalcontroller
implements:
  - urn:ngm:class:cascade-control
  - urn:ngm:class:feedforward-control
  - urn:ngm:class:observer-design
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:picontrol
  - urn:ngm:class:feedforwardcontrol
  - urn:ngm:class:cascadecontrol
  - urn:ngm:class:adaptive-control
  - urn:ngm:class:observerdesign
---

# VelocityControl

A closed-loop feedback control strategy that regulates the rate of change of position (linear velocity v in m/s or angular velocity ω in rad/s) of a robotic actuator, motor shaft, conveyor system, or mobile robot platform by continuously measuring actual velocity via tachometers (±full-scale accu...
