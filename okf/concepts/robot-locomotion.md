---
okf_version: "0.2"
type: Class
title: Robot Locomotion
resource: urn:ngm:class:robot-locomotion
domain: robotics
description: Robot locomotion is the study and engineering of how robots move through their environment, encompassing legged walking, wheeled rolling, crawling, swimming and flight. It integrates mechanical design, control theory and sensing to generate stable, efficient and adaptive movement over varied terrain. Locomotion distinguishes itself from manipulation by focusing on whole-body displacement and dynam
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:robo-actuation-and-control
hasPart:
  - urn:ngm:class:legged-robot
  - urn:ngm:class:locomotion
requires:
  - urn:ngm:class:actuator
  - urn:ngm:class:robotic-control
  - urn:ngm:class:motion-planning
enables:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robotic-control
contrastsWith:
  - urn:ngm:class:inverse-kinematics
bridgesTo:
  - urn:ngm:class:control-theory
  - urn:ngm:class:feedback-loop
uses:
  - urn:ngm:class:inverse-kinematics
supports:
  - urn:ngm:class:humanoid-robot
relatedTo:
  - urn:ngm:class:robotics
---

# Robot Locomotion

Robot locomotion is the study and engineering of how robots move through their environment, encompassing legged walking, wheeled rolling, crawling, swimming and flight. It integrates mechanical design, control theory and sensing to generate stable, efficient and adaptive movement over varied terrain. Locomotion distinguishes itself from manipulation by focusing on whole-body displacement and dynamic balance rather than interaction with objects.
