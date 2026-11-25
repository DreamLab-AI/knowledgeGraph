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
  - urn:ngm:class:machine-learning
  - urn:ngm:class:rb-0049-motion-planning
supports:
  - urn:ngm:class:rb-0096-safeguarding
relatedTo:
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:rb-0007-collaborative-robot
  - urn:ngm:class:rb-0012-wheeled-mobile-robot
  - urn:ngm:class:autonomous-navigation
generated: {"by":"did:nostr:b41654017f6850b13857d19d8ae0e3f88f1365600cab0321e8101c9e92682f7a","via":"agent:ontology-mesh/1","process":"process:vault-migrate/1.0","at":"2026-09-22T12:41:39.024503178Z"}
---

# rb 0008 autonomous robot

An autonomous robot is a robotic system capable of performing tasks in unstructured environments without continuous human intervention, relying on onboard sensing, perception, decision-making, and actuation. Autonomy spans a spectrum from simple programmed responses to full cognitive agency; key enabling technologies include SLAM, path planning, machine learning-based perception, and safety-certified control architectures.
