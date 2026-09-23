---
okf_version: "0.2"
type: Class
title: rb 0035 accuracy
resource: urn:ngm:class:rb-0035-accuracy
domain: robotics
description: Robot accuracy is the closeness of agreement between a robot's commanded pose and its actual achieved pose, measured as the mean positional or orientational error across multiple repeated commanded positions. Defined in ISO 9283, it encompasses pose accuracy, path accuracy, and static compliance accuracy, and is distinct from repeatability, which measures the spread of repeated attempts at the sam
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
dependsOn:
  - urn:ngm:class:rb-0048-pid-controller
contrastsWith:
  - urn:ngm:class:rb-0034-repeatability
  - urn:ngm:class:rb-0036-resolution
bridgesTo:
  - urn:ngm:class:accuracy
standardizedBy:
  - urn:ngm:class:rb-0087-safety-standard
relatedTo:
  - urn:ngm:class:rb-0021-robot-kinematics
  - urn:ngm:class:rb-0029-inverse-kinematics
  - urn:ngm:class:calibration
  - urn:ngm:class:precision
---

# rb 0035 accuracy

Robot accuracy is the closeness of agreement between a robot's commanded pose and its actual achieved pose, measured as the mean positional or orientational error across multiple repeated commanded positions. Defined in ISO 9283, it encompasses pose accuracy, path accuracy, and static compliance accuracy, and is distinct from repeatability, which measures the spread of repeated attempts at the same pose rather than deviation from the commanded value.
