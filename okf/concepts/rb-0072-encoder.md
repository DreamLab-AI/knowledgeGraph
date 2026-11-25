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
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0072 encoder

An encoder in robotics is a proprioceptive transducer that converts the angular or linear position of a joint or actuator shaft into a digital electrical signal, providing the position and velocity feedback essential for closed-loop control. Encoders are categorised as incremental (providing relative position pulses) or absolute (outputting a unique code for each position), with absolute rotary encoders being preferred in safety-critical collaborative robot applications due to their power-loss resilience. High-resolution encoders directly determine robot accuracy, repeatability, and the fidelity of safety functions such as speed limitation.
