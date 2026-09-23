---
okf_version: "0.2"
type: Class
title: ROS Navigation Stack
resource: urn:ngm:class:ros-navigation-stack
domain: robotics
description: "The ROS Navigation Stack is a collection of software packages within the Robot Operating System (ROS) framework that provides a robot with the capability to move autonomously through an environment by combining map building, localisation, global path planning, local obstacle avoidance, and motor control into an integrated pipeline. It abstracts sensor inputs (laser scan, odometry, IMU), maintains "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:ros
hasPart:
  - urn:ngm:class:move-base
  - urn:ngm:class:costmap
  - urn:ngm:class:global-planner
  - urn:ngm:class:local-planner
requires:
  - urn:ngm:class:occupancy-grid
  - urn:ngm:class:odometry
  - urn:ngm:class:transform-tree
enables:
  - urn:ngm:class:path-planning
  - urn:ngm:class:obstacle-avoidance
  - urn:ngm:class:autonomous-robot
  - urn:ngm:class:autonomous-navigation
dependsOn:
  - urn:ngm:class:publish-subscribe-pattern
bridgesTo:
  - urn:ngm:class:machine-learning-discipline
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:lidar
  - urn:ngm:class:localisation
  - urn:ngm:class:monte-carlo-localization
  - urn:ngm:class:simultaneous-localisation-and-mapping
partOf:
  - urn:ngm:class:ros
relatedTo:
  - urn:ngm:class:ros-2
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:nav2
  - urn:ngm:class:mobile-robot
---

# ROS Navigation Stack

The ROS Navigation Stack is a collection of software packages within the Robot Operating System (ROS) framework that provides a robot with the capability to move autonomously through an environment by combining map building, localisation, global path planning, local obstacle avoidance, and motor control into an integrated pipeline. It abstracts sensor inputs (laser scan, odometry, IMU), maintains a 2D occupancy grid map and cost layers, runs AMCL (Adaptive Monte Carlo Localisation) for pose estimation, and uses A* or Dijkstra for global plans combined with DWA (Dynamic Window Approach) or TEB (Timed Elastic Band) for local reactive navigation. The Navigation Stack is the de facto standard for mobile ground-robot navigation in research and production robotics.
