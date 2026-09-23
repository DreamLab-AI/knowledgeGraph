---
okf_version: "0.2"
type: Class
title: Robot Localisation
resource: urn:ngm:class:robot-localisation
domain: robotics
description: Robot localisation is the problem of estimating a robot's pose, its position and orientation, within a known map from noisy sensor measurements and motion commands. It is typically solved with probabilistic filters that maintain a belief over possible poses and update it as new observations arrive. Accurate localisation is a prerequisite for reliable navigation and planning.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:bayes-filter
  - urn:ngm:class:monte-carlo-localization
---

# Robot Localisation

Robot localisation is the problem of estimating a robot's pose, its position and orientation, within a known map from noisy sensor measurements and motion commands. It is typically solved with probabilistic filters that maintain a belief over possible poses and update it as new observations arrive. Accurate localisation is a prerequisite for reliable navigation and planning.
