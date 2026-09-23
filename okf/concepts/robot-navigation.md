---
okf_version: "0.2"
type: Class
title: Robot Navigation
resource: urn:ngm:class:robot-navigation
domain: robotics
description: Robot navigation is the capability of a mobile robot to determine its position, plan a route, and move safely through an environment toward a goal while avoiding obstacles. It integrates localisation, mapping, path planning, and motion control into a continuous perception-action loop. Robot navigation combines sensor fusion with algorithms such as SLAM to operate in unknown or dynamic surroundings
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:robo-navigation-and-planning
requires:
  - urn:ngm:class:localisation
  - urn:ngm:class:mapping
  - urn:ngm:class:path-planning
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:mobile-robot
dependsOn:
  - urn:ngm:class:robot-perception
  - urn:ngm:class:environmental-mapping
implements:
  - urn:ngm:class:motion-planning
uses:
  - urn:ngm:class:slam
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:lidar
  - urn:ngm:class:odometry
supports:
  - urn:ngm:class:wheeled-mobile-robot
  - urn:ngm:class:manipulation
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:path-planning
---

# Robot Navigation

Robot navigation is the capability of a mobile robot to determine its position, plan a route, and move safely through an environment toward a goal while avoiding obstacles. It integrates localisation, mapping, path planning, and motion control into a continuous perception-action loop. Robot navigation combines sensor fusion with algorithms such as SLAM to operate in unknown or dynamic surroundings.
