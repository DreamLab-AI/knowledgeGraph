---
okf_version: "0.2"
type: Class
title: rb 0034 repeatability
resource: urn:ngm:class:rb-0034-repeatability
domain: robotics
description: "Repeatability is a key performance metric of robot manipulators that quantifies the closeness of agreement between successive commanded returns to the same target position or pose, measured under identical conditions. It is formally defined in ISO 9283 as the radius of a sphere enclosing a specified percentage of attained positions from repeated attempts. Repeatability is distinct from accuracy — "
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
dependsOn:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0047-feedback-control
contrastsWith:
  - urn:ngm:class:rb-0035-accuracy
standardizedBy:
  - urn:ngm:class:rb-0087-safety-standard
partOf:
  - urn:ngm:class:rb-0036-resolution
relatedTo:
  - urn:ngm:class:precision
  - urn:ngm:class:calibration
  - urn:ngm:class:performance-metrics
---

# rb 0034 repeatability

Repeatability is a key performance metric of robot manipulators that quantifies the closeness of agreement between successive commanded returns to the same target position or pose, measured under identical conditions. It is formally defined in ISO 9283 as the radius of a sphere enclosing a specified percentage of attained positions from repeated attempts. Repeatability is distinct from accuracy — a robot may be highly repeatable but systematically offset from the commanded target — and is critical for applications such as assembly, welding, and precision manufacturing.
