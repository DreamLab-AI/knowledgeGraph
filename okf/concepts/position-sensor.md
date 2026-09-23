---
okf_version: "0.2"
type: Class
title: Position Sensor
resource: urn:ngm:class:position-sensor
domain: robotics
description: A position sensor is a transducer that measures the displacement, angle, or spatial location of an object or joint relative to a reference frame, converting mechanical position into an electrical signal suitable for control system feedback. Position sensors are fundamental to closed-loop robotic and mechatronic systems, enabling precise joint control, end-effector placement, and localisation. They
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:sensor
enables:
  - urn:ngm:class:localisation
  - urn:ngm:class:robot-manipulation
supports:
  - urn:ngm:class:robot-kinematics
  - urn:ngm:class:robotic-control
relatedTo:
  - urn:ngm:class:encoder
  - urn:ngm:class:rotary-encoder
  - urn:ngm:class:linear-encoder
  - urn:ngm:class:proprioceptive-sensor
  - urn:ngm:class:imu
---

# Position Sensor

A position sensor is a transducer that measures the displacement, angle, or spatial location of an object or joint relative to a reference frame, converting mechanical position into an electrical signal suitable for control system feedback. Position sensors are fundamental to closed-loop robotic and mechatronic systems, enabling precise joint control, end-effector placement, and localisation. They span a wide range of physical measurement principles including optical encoding, magnetic hall-effect sensing, capacitive displacement, and inductive resolver techniques.
