---
okf_version: "0.2"
type: Class
title: Proprioceptive Sensor
resource: urn:ngm:class:proprioceptive-sensor
domain: robotics
description: ProprioceptiveSensor is a transducer or sensing system that measures a robot's internal physical state — encompassing joint angle, angular velocity, linear and angular acceleration, motor torque, drive current, strain, and contact force — without reference to external landmarks or environmental f...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:sensor
  - urn:ngm:class:robotic-subsystem
  - urn:ngm:class:control-feedback-element
  - urn:ngm:class:state-estimation-component
  - urn:ngm:class:mechatronic-component
hasPart:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:joint-encoder
  - urn:ngm:class:resolver
  - urn:ngm:class:strain-gauge
  - urn:ngm:class:tachometer
  - urn:ngm:class:current-sensor
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:tactile-sensor
requires:
  - urn:ngm:class:actuator
  - urn:ngm:class:motor-driver
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:sensor-calibration
  - urn:ngm:class:signal-conditioning
  - urn:ngm:class:analog-to-digital-converter
enables:
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:safe-human-robot-interaction
  - urn:ngm:class:closed-loop-control
  - urn:ngm:class:collision-detection
  - urn:ngm:class:impedance-control
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:state-estimation
  - urn:ngm:class:torque-control
  - urn:ngm:class:safe-human-robot-interaction
dependsOn:
  - urn:ngm:class:signal-processing
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:kinematics
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:real-time-control
implements:
  - urn:ngm:class:hall-effect-sensing
  - urn:ngm:class:gyroscope
  - urn:ngm:class:photometric-stereo
  - urn:ngm:class:quadrature-encoding
  - urn:ngm:class:series-elastic-actuation
  - urn:ngm:class:wheatstone-bridge-measurement
  - urn:ngm:class:gyroscope
contrastsWith:
  - urn:ngm:class:exteroceptive-sensor
  - urn:ngm:class:camera
  - urn:ngm:class:lidar
  - urn:ngm:class:radar
  - urn:ngm:class:ultrasonic-sensor
uses:
  - urn:ngm:class:can-bus
  - urn:ngm:class:ether-cat
  - urn:ngm:class:self-sovereign-identity-ssi
  - urn:ngm:class:spi
  - urn:ngm:class:i2c
  - urn:ngm:class:biss-c-protocol
  - urn:ngm:class:self-sovereign-identity-ssi
supports:
  - urn:ngm:class:exoskeleton-control
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:manipulation
  - urn:ngm:class:soft-robotics
standardizedBy:
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
  - urn:ngm:class:ieee-1451
  - urn:ngm:class:iso-9283-manipulating-industrial-robots-performance-criteria
  - urn:ngm:class:ieee-1451
  - urn:ngm:class:iso-9283-manipulating-industrial-robots-performance-criteria
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
relatedTo:
  - urn:ngm:class:model-predictive-control
  - urn:ngm:class:reinforcement-learning-for-robotics
  - urn:ngm:class:whole-body-control
  - urn:ngm:class:digital-twin
  - urn:ngm:class:ros
---

# Proprioceptive Sensor

ProprioceptiveSensor is a transducer or sensing system that measures a robot's internal physical state — encompassing joint angle, angular velocity, linear and angular acceleration, motor torque, drive current, strain, and contact force — without reference to external landmarks or environmental f...
