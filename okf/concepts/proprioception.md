---
okf_version: "0.2"
type: Class
title: Proprioception
resource: urn:ngm:class:proprioception
domain: robotics
description: Proprioception is a robot's internal sense of its own configuration and motion, derived from sensors that report joint angles, velocities, motor torques, body orientation and contact forces. Distinct from exteroceptive sensing of the external world, proprioceptive feedback lets a system estimate its pose and dynamics without external references, which is essential for stable balance, compliant int
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:robo-perception
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:feedback-control
enables:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:humanoid-robotics
dependsOn:
  - urn:ngm:class:sensor-calibration
bridgesTo:
  - urn:ngm:class:robotic-manipulation
uses:
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:robotic-manipulation
  - urn:ngm:class:humanoid-robotics
partOf:
  - urn:ngm:class:robot-perception
relatedTo:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:sensor-fusion
---

# Proprioception

Proprioception is a robot's internal sense of its own configuration and motion, derived from sensors that report joint angles, velocities, motor torques, body orientation and contact forces. Distinct from exteroceptive sensing of the external world, proprioceptive feedback lets a system estimate its pose and dynamics without external references, which is essential for stable balance, compliant interaction and dead-reckoning. It provides the fast, low-latency state signal that closed-loop motor controllers depend upon.
