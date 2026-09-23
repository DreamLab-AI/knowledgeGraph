---
okf_version: "0.2"
type: Class
title: Stewart Platform
resource: urn:ngm:class:stewart-platform
domain: robotics
description: A Stewart Platform (also known as a Gough-Stewart platform) is a type of parallel manipulator consisting of six variable-length prismatic actuators (struts) connecting a fixed base plate to a moveable top plate via universal or spherical joints, enabling six degrees of freedom—three translational and three rotational—within a compact, high-stiffness mechanical structure. First described by V.E. Go
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:parallel-robot
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:robot-joint
  - urn:ngm:class:end-effector
requires:
  - urn:ngm:class:kinematics
  - urn:ngm:class:robot-dynamics
  - urn:ngm:class:motion-planning
contrastsWith:
  - urn:ngm:class:industrial-robot
uses:
  - urn:ngm:class:robot-control
  - urn:ngm:class:robot-kinematics
relatedTo:
  - urn:ngm:class:surgical-robot
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:robot-singularity
---

# Stewart Platform

A Stewart Platform (also known as a Gough-Stewart platform) is a type of parallel manipulator consisting of six variable-length prismatic actuators (struts) connecting a fixed base plate to a moveable top plate via universal or spherical joints, enabling six degrees of freedom—three translational and three rotational—within a compact, high-stiffness mechanical structure. First described by V.E. Gough in 1954 for tyre testing and later analysed by D. Stewart in 1965 for flight simulation, the architecture is characterised by high load-bearing capacity, positional accuracy, and mechanical rigidity compared to serial manipulators.
