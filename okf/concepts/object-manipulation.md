---
okf_version: "0.2"
type: Class
title: Object Manipulation
resource: urn:ngm:class:object-manipulation
domain: robotics
description: The robotic capability to grasp, reorient, move, and release physical objects using end-effectors, encompassing grasp planning, force-torque control, dexterous in-hand manipulation, and task-level sequencing. Object manipulation integrates computer vision for object detection and pose estimation with tactile sensing and compliant actuation to handle diverse and unstructured items.
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:manipulation
requires:
  - urn:ngm:class:end-effector
  - urn:ngm:class:pose-estimation
enables:
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:collaborative-systems-modality-robot
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:force-control
---

# Object Manipulation

The robotic capability to grasp, reorient, move, and release physical objects using end-effectors, encompassing grasp planning, force-torque control, dexterous in-hand manipulation, and task-level sequencing. Object manipulation integrates computer vision for object detection and pose estimation with tactile sensing and compliant actuation to handle diverse and unstructured items.
