---
okf_version: "0.2"
type: Class
title: Configuration Space
resource: urn:ngm:class:configuration-space
domain: robotics
description: Configuration space, often written C-space, is the set of all possible configurations of a robot, where each point fully specifies the position of every part of the mechanism. Its dimensionality equals the robot's degrees of freedom, and obstacles in the physical workspace map to forbidden regions, partitioning C-space into free and blocked subsets. Motion planning is then recast as finding a cont
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:motion-planning
hasPart:
  - urn:ngm:class:degrees-of-freedom
  - urn:ngm:class:joint-space
requires:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:collision-detection
enables:
  - urn:ngm:class:path-planning
  - urn:ngm:class:obstacle-avoidance
bridgesTo:
  - urn:ngm:class:workspace
uses:
  - urn:ngm:class:sampling-based-planning
supports:
  - urn:ngm:class:robot-manipulation
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:inverse-kinematics
  - urn:ngm:class:kinematics
  - urn:ngm:class:rapidly-exploring-random-tree
  - urn:ngm:class:probabilistic-roadmap
---

# Configuration Space

Configuration space, often written C-space, is the set of all possible configurations of a robot, where each point fully specifies the position of every part of the mechanism. Its dimensionality equals the robot's degrees of freedom, and obstacles in the physical workspace map to forbidden regions, partitioning C-space into free and blocked subsets. Motion planning is then recast as finding a continuous path through the free portion of configuration space.
