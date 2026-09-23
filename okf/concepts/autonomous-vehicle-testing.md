---
okf_version: "0.2"
type: Class
title: Autonomous Vehicle Testing
resource: urn:ngm:class:autonomous-vehicle-testing
domain: spatial-computing
description: Autonomous vehicle testing is the discipline of validating the safety, reliability, and performance of self-driving systems through simulation, closed-course trials, and supervised public-road operation. It exercises the perception, planning, and control stack against a vast space of driving scenarios, including rare and hazardous edge cases that are impractical to encounter physically. Simulation
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:autonomous-vehicle
hasPart:
  - urn:ngm:class:simulation
requires:
  - urn:ngm:class:perception-system
  - urn:ngm:class:computational-model
enables:
  - urn:ngm:class:self-driving-car
implements:
  - urn:ngm:class:computational-model
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:simulation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:physics-engine
supports:
  - urn:ngm:class:self-driving-car
  - urn:ngm:class:autonomous-driving
partOf:
  - urn:ngm:class:autonomous-vehicle
relatedTo:
  - urn:ngm:class:robotics
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:digital-twin
---

# Autonomous Vehicle Testing

Autonomous vehicle testing is the discipline of validating the safety, reliability, and performance of self-driving systems through simulation, closed-course trials, and supervised public-road operation. It exercises the perception, planning, and control stack against a vast space of driving scenarios, including rare and hazardous edge cases that are impractical to encounter physically. Simulation-based testing has become central because it enables scalable, repeatable, and safe exploration of these scenarios before real-world deployment.
