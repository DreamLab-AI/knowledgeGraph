---
okf_version: "0.2"
type: Class
title: Navigation
resource: urn:ngm:class:navigation
domain: robotics
description: Navigation is the autonomous discipline integrating localisation, mapping, path planning, motion control, and semantic interpretation to enable agents — ground robots, aerial vehicles, autonomous cars, and embodied AI systems — to move reliably from a start configuration to a goal state throu...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-navigation-and-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:motion-planning
  - urn:ngm:class:robotics
  - urn:ngm:class:control-theory
hasPart:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:costmap
  - urn:ngm:class:global-planner
  - urn:ngm:class:local-planner
  - urn:ngm:class:localisation
  - urn:ngm:class:mapping
  - urn:ngm:class:trajectory-optimisation
  - urn:ngm:class:collision-avoidance
  - urn:ngm:class:path-planning
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:behaviour-trees
requires:
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:collision-detection
  - urn:ngm:class:control-theory
  - urn:ngm:class:kinematics
  - urn:ngm:class:ros
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:drone-navigation
  - urn:ngm:class:mobile-robotics
  - urn:ngm:class:planetary-exploration
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:warehouse-automation
  - urn:ngm:class:social-robotics
  - urn:ngm:class:autonomous-vehicle
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:point-cloud-processing
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:graph-search
  - urn:ngm:class:gaussian-process
implements:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:a-star-algorithm
  - urn:ngm:class:rrt-algorithm
  - urn:ngm:class:rrt-star
  - urn:ngm:class:prm
  - urn:ngm:class:d-star-lite
  - urn:ngm:class:dwa
  - urn:ngm:class:teb-planner
  - urn:ngm:class:mppi
  - urn:ngm:class:mpc
  - urn:ngm:class:behaviour-trees
contrastsWith:
  - urn:ngm:class:teleoperation
  - urn:ngm:class:scripted-motion
  - urn:ngm:class:open-loop-control
uses:
  - urn:ngm:class:imu
  - urn:ngm:class:neural-network
  - urn:ngm:class:rgb-d-camera
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:gps
  - urn:ngm:class:lidar
  - urn:ngm:class:transformers
  - urn:ngm:class:rgb-d-camera
  - urn:ngm:class:neural-network
supports:
  - urn:ngm:class:multi-agent-systems
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:digital-twin
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:swarm-robotics
  - urn:ngm:class:simulation-environments
standardizedBy:
  - urn:ngm:class:iec-62443
  - urn:ngm:class:ieee-1872
  - urn:ngm:class:iso-13482
  - urn:ngm:class:nav2
  - urn:ngm:class:nav2
  - urn:ngm:class:ieee-1872
relatedTo:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:visual-language-navigation
  - urn:ngm:class:large-scale-pretrained-foundation-model
  - urn:ngm:class:object-detection
  - urn:ngm:class:scene-understanding
---

# Navigation

Navigation is the autonomous discipline integrating localisation, mapping, path planning, motion control, and semantic interpretation to enable agents — ground robots, aerial vehicles, autonomous cars, and embodied AI systems — to move reliably from a start configuration to a goal state throu...
