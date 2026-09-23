---
okf_version: "0.2"
type: Class
title: rb 0052 collision avoidance
resource: urn:ngm:class:rb-0052-collision-avoidance
domain: robotics
description: Collision avoidance in robotics is the capability of a robot system to detect and react to obstacles — including other robots, infrastructure, and human operators — so as to prevent physical contact that could cause damage or injury. It encompasses both reactive techniques (e.g. potential field methods, velocity obstacles) and proactive planning approaches that embed free-space constraints into th
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:motion-planning
requires:
  - urn:ngm:class:rb-0066-robot-sensor
  - urn:ngm:class:rb-0049-motion-planning
enables:
  - urn:ngm:class:rb-0103-collaborative-operation
dependsOn:
  - urn:ngm:class:rb-0051-trajectory-planning
relatedTo:
  - urn:ngm:class:rb-0095-safety-zone
  - urn:ngm:class:rb-0092-protective-stop
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:rb-0105-speed-and-separation-monitoring
---

# rb 0052 collision avoidance

Collision avoidance in robotics is the capability of a robot system to detect and react to obstacles — including other robots, infrastructure, and human operators — so as to prevent physical contact that could cause damage or injury. It encompasses both reactive techniques (e.g. potential field methods, velocity obstacles) and proactive planning approaches that embed free-space constraints into the trajectory from the outset. It is a prerequisite for safe autonomous navigation and collaborative operation.
