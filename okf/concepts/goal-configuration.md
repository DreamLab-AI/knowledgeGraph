---
okf_version: "0.2"
type: Class
title: Goal Configuration
resource: urn:ngm:class:goal-configuration
domain: robotics
description: A goal configuration is the desired target state of a robot or articulated system, expressed in its configuration space as a set of joint angles or a pose. Motion planners search for a collision-free path from the start configuration to this goal. Specifying it precisely is a prerequisite for path planning and trajectory generation.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:rb-1007-trajectory-generation
---

# Goal Configuration

A goal configuration is the desired target state of a robot or articulated system, expressed in its configuration space as a set of joint angles or a pose. Motion planners search for a collision-free path from the start configuration to this goal. Specifying it precisely is a prerequisite for path planning and trajectory generation.
