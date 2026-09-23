---
okf_version: "0.2"
type: Class
title: Navigation Stack
resource: urn:ngm:class:navigation-stack
domain: robotics
description: A navigation stack is the integrated software subsystem of a mobile robot responsible for taking it from a current pose to a goal pose while avoiding obstacles. It composes mapping, localisation, global path planning, and local trajectory control into a coordinated pipeline. The stack consumes sensor data and a map, and emits velocity commands that drive the robot's actuators.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:robo-navigation-and-planning
relatedTo:
  - urn:ngm:class:nav2
  - urn:ngm:class:ground-robot
---

# Navigation Stack

A navigation stack is the integrated software subsystem of a mobile robot responsible for taking it from a current pose to a goal pose while avoiding obstacles. It composes mapping, localisation, global path planning, and local trajectory control into a coordinated pipeline. The stack consumes sensor data and a map, and emits velocity commands that drive the robot's actuators.
