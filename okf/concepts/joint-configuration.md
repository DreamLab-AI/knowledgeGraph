---
okf_version: "0.2"
type: Class
title: Joint Configuration
resource: urn:ngm:class:joint-configuration
domain: robotics
description: Joint configuration is the complete set of joint positions of a robot manipulator that together determine the pose of its links and end effector.
maturity: established
quality: 0.6
is-a:
  - urn:ngm:class:kinematics
requires:
  - urn:ngm:class:forward-kinematics
enables:
  - urn:ngm:class:mobile-manipulation
bridgesTo:
  - urn:ngm:class:manipulator
---

# Joint Configuration

Joint configuration is the complete set of joint positions of a robot manipulator that together determine the pose of its links and end effector.
