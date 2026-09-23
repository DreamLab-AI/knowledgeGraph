---
okf_version: "0.2"
type: Class
title: RB 1013 localization
resource: urn:ngm:class:rb-1013-localization
domain: robotics
description: RB 1013 localization is a robotics navigation concept addressing the problem of a mobile robot determining its pose within a known or partially known environment. It encompasses probabilistic state estimation techniques such as particle filters, extended Kalman filters, and scan-matching algorithms applied to sensor data from LiDAR, wheel odometry, and IMUs to produce continuous pose estimates sui
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:robo-navigation-and-planning
enables:
  - urn:ngm:class:autonomous-navigation
uses:
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:lidar
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:localisation
  - urn:ngm:class:visual-odometry
---

# RB 1013 localization

RB 1013 localization is a robotics navigation concept addressing the problem of a mobile robot determining its pose within a known or partially known environment. It encompasses probabilistic state estimation techniques such as particle filters, extended Kalman filters, and scan-matching algorithms applied to sensor data from LiDAR, wheel odometry, and IMUs to produce continuous pose estimates suitable for autonomous navigation.
