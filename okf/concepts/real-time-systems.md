---
okf_version: "0.2"
type: Class
title: Real Time Systems
resource: urn:ngm:class:real-time-systems
domain: spatial-computing
description: Real-time systems are computing systems whose correctness depends not only on logical results but also on the time at which those results are produced. They must respond to events within defined timing constraints, classified as hard, firm or soft depending on the consequences of a missed deadline. Such systems are central to control, robotics, simulation and immersive applications where late resu
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:embedded-system
  - urn:ngm:class:sc-platform-and-environment
requires:
  - urn:ngm:class:determinism
  - urn:ngm:class:latency
  - urn:ngm:class:real-time-operating-system
enables:
  - urn:ngm:class:real-time-rendering
  - urn:ngm:class:autonomous-vehicle
dependsOn:
  - urn:ngm:class:determinism
  - urn:ngm:class:real-time-operating-system
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:robotics
  - urn:ngm:class:control-system
  - urn:ngm:class:physics-simulation
partOf:
  - urn:ngm:class:embedded-system
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:latency
  - urn:ngm:class:edge-computing
  - urn:ngm:class:real-time-rendering
---

# Real Time Systems

Real-time systems are computing systems whose correctness depends not only on logical results but also on the time at which those results are produced. They must respond to events within defined timing constraints, classified as hard, firm or soft depending on the consequences of a missed deadline. Such systems are central to control, robotics, simulation and immersive applications where late results are useless or dangerous.
