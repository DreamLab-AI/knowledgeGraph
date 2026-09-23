---
okf_version: "0.2"
type: Class
title: rb 0008 autonomous robot
resource: urn:ngm:class:rb-0008-autonomous-robot
domain: robotics
description: An autonomous robot is a robotic system capable of performing tasks in unstructured environments without continuous human intervention, relying on onboard sensing, perception, decision-making, and actuation. Autonomy spans a spectrum from simple programmed responses to full cognitive agency; key enabling technologies include SLAM, path planning, machine learning-based perception, and safety-certif
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-robot-type
requires:
  - urn:ngm:class:perception-system
  - urn:ngm:class:rb-0089-risk-assessment
uses:
  - urn:ngm:class:slam
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:rb-0049-motion-planning
supports:
  - urn:ngm:class:rb-0096-safeguarding
relatedTo:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:rb-0007-collaborative-robot
  - urn:ngm:class:rb-0012-wheeled-mobile-robot
  - urn:ngm:class:autonomous-navigation
---

# rb 0008 autonomous robot

An autonomous robot is a robotic system capable of performing tasks in unstructured environments without continuous human intervention, relying on onboard sensing, perception, decision-making, and actuation. Autonomy spans a spectrum from simple programmed responses to full cognitive agency; key enabling technologies include SLAM, path planning, machine learning-based perception, and safety-certified control architectures.
