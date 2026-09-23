---
okf_version: "0.2"
type: Class
title: Reference Frames
resource: urn:ngm:class:reference-frames
domain: robotics
description: A reference frame is a coordinate system, anchored to a chosen origin and orientation, against which positions, velocities, and orientations are measured. In robotics each link, sensor, and the world itself has its own frame, and motion is described by transformations between them. Correct frame definitions are essential for sensor fusion, kinematics, and consistent spatial reasoning.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:coordinate-transformation
  - urn:ngm:class:kinematics-model
---

# Reference Frames

A reference frame is a coordinate system, anchored to a chosen origin and orientation, against which positions, velocities, and orientations are measured. In robotics each link, sensor, and the world itself has its own frame, and motion is described by transformations between them. Correct frame definitions are essential for sensor fusion, kinematics, and consistent spatial reasoning.
