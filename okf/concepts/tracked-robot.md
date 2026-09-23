---
okf_version: "0.2"
type: Class
title: Tracked Robot
resource: urn:ngm:class:tracked-robot
domain: robotics
description: A Tracked Robot is a ground mobile robot that uses continuous loop tracks—analogous to those on military tanks—rather than wheels to achieve locomotion. The large contact surface area of the track distributes the robot's weight, providing superior traction and stability on uneven, soft, or obstacle-dense terrain such as rubble, mud, stairs, and gravel. Tracked robots are widely deployed in search-
maturity: established
quality: 0
is-a:
  - urn:ngm:class:ground-robot
hasPart:
  - urn:ngm:class:lidar
requires:
  - urn:ngm:class:path-planning
contrastsWith:
  - urn:ngm:class:wheeled-robot
  - urn:ngm:class:legged-robot
uses:
  - urn:ngm:class:motion-planning
  - urn:ngm:class:perception-system
  - urn:ngm:class:slam
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:rescue-robot
  - urn:ngm:class:inspection-robot
  - urn:ngm:class:mobile-robot
---

# Tracked Robot

A Tracked Robot is a ground mobile robot that uses continuous loop tracks—analogous to those on military tanks—rather than wheels to achieve locomotion. The large contact surface area of the track distributes the robot's weight, providing superior traction and stability on uneven, soft, or obstacle-dense terrain such as rubble, mud, stairs, and gravel. Tracked robots are widely deployed in search-and-rescue, military reconnaissance, inspection, and agricultural automation where wheeled platforms would lose grip or become immobilised.
