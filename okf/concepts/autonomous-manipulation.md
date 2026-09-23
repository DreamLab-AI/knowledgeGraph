---
okf_version: "0.2"
type: Class
title: Autonomous Manipulation
resource: urn:ngm:class:autonomous-manipulation
domain: robotics
description: Autonomous manipulation is the capability of a robot to perceive, plan and physically interact with objects to achieve a task goal without step-by-step human teleoperation. It integrates perception, grasp and motion planning, force control and feedback to handle uncertainty in object pose, shape and contact dynamics. The aim is robust, closed-loop interaction in unstructured environments rather th
maturity: emerging
quality: 0.62
is-a:
  - urn:ngm:class:robotic-manipulation
requires:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robot-perception
enables:
  - urn:ngm:class:humanoid-robotics
  - urn:ngm:class:pick-and-place
dependsOn:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:feedback-control
implements:
  - urn:ngm:class:motion-planning
uses:
  - urn:ngm:class:dexterous-manipulation
  - urn:ngm:class:robot-control
supports:
  - urn:ngm:class:pick-and-place
partOf:
  - urn:ngm:class:robotic-manipulation
relatedTo:
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:dexterous-manipulation
---

# Autonomous Manipulation

Autonomous manipulation is the capability of a robot to perceive, plan and physically interact with objects to achieve a task goal without step-by-step human teleoperation. It integrates perception, grasp and motion planning, force control and feedback to handle uncertainty in object pose, shape and contact dynamics. The aim is robust, closed-loop interaction in unstructured environments rather than the repetition of pre-programmed trajectories.
