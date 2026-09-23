---
okf_version: "0.2"
type: Class
title: Start Configuration
resource: urn:ngm:class:start-configuration
domain: robotics
description: "A start configuration is the initial pose of a robot or articulated system, expressed as a point in its configuration space, from which a motion or path planner must compute a feasible route to a goal configuration. It encodes the complete set of joint values or positional parameters that fully describe the system's state at the beginning of a planned motion. Together with the goal configuration, "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:path-planning
  - urn:ngm:class:rb-1007-trajectory-generation
---

# Start Configuration

A start configuration is the initial pose of a robot or articulated system, expressed as a point in its configuration space, from which a motion or path planner must compute a feasible route to a goal configuration. It encodes the complete set of joint values or positional parameters that fully describe the system's state at the beginning of a planned motion. Together with the goal configuration, it bounds the planning query.
