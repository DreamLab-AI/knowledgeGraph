---
okf_version: "0.2"
type: Class
title: rb 0072 encoder
resource: urn:ngm:class:rb-0072-encoder
domain: robotics
description: An encoder in robotics is a proprioceptive transducer that converts the angular or linear position of a joint or actuator shaft into a digital electrical signal, providing the position and velocity feedback essential for closed-loop control. Encoders are categorised as incremental (providing relative position pulses) or absolute (outputting a unique code for each position), with absolute rotary en
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:proprioceptive-sensor
hasPart:
  - urn:ngm:class:rotary-encoder
uses:
  - urn:ngm:class:rb-0066-robot-sensor
supports:
  - urn:ngm:class:rb-0047-feedback-control
  - urn:ngm:class:rb-0054-position-control
  - urn:ngm:class:rb-0093-speed-limitation
relatedTo:
  - urn:ngm:class:rb-0034-repeatability
  - urn:ngm:class:rb-0035-accuracy
  - urn:ngm:class:rb-0026-robot-joint
---

# rb 0072 encoder

An encoder in robotics is a proprioceptive transducer that converts the angular or linear position of a joint or actuator shaft into a digital electrical signal, providing the position and velocity feedback essential for closed-loop control. Encoders are categorised as incremental (providing relative position pulses) or absolute (outputting a unique code for each position), with absolute rotary encoders being preferred in safety-critical collaborative robot applications due to their power-loss resilience. High-resolution encoders directly determine robot accuracy, repeatability, and the fidelity of safety functions such as speed limitation.
