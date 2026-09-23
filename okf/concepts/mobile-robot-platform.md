---
okf_version: "0.2"
type: Class
title: Mobile Robot Platform
resource: urn:ngm:class:mobile-robot-platform
domain: robotics
description: A Mobile Robot Platform is an integrated mechatronic base that provides locomotion, power, computing, and sensor-mounting infrastructure upon which higher-level autonomy stacks—perception, planning, and control—are deployed.
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:autonomous-system
  - urn:ngm:class:cyber-physical-system
  - urn:ngm:class:ground-robot
  - urn:ngm:class:embodied-ai
  - urn:ngm:class:mobile-robot
hasPart:
  - urn:ngm:class:communication-interface
  - urn:ngm:class:locomotion
  - urn:ngm:class:motor-controller
  - urn:ngm:class:onboard-computer
  - urn:ngm:class:power-systems
  - urn:ngm:class:sensor-suite
  - urn:ngm:class:locomotion
  - urn:ngm:class:power-systems
  - urn:ngm:class:chassis-frame
  - urn:ngm:class:payload-bay
requires:
  - urn:ngm:class:battery-management-system
  - urn:ngm:class:dds-middleware
  - urn:ngm:class:motor-driver
  - urn:ngm:class:nav2
  - urn:ngm:class:ros-2
  - urn:ngm:class:slam
enables:
  - urn:ngm:class:agricultural-robotics
  - urn:ngm:class:environment-mapping
  - urn:ngm:class:logistics-automation
  - urn:ngm:class:mobile-manipulation
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:teleoperation
  - urn:ngm:class:inspection-robotics
dependsOn:
  - urn:ngm:class:ros-2
  - urn:ngm:class:gazebo-simulator
  - urn:ngm:class:nvidia-corporation-isaac-sim
  - urn:ngm:class:lidar
  - urn:ngm:class:imu
  - urn:ngm:class:depth-camera
  - urn:ngm:class:nvidia-corporation-jetson
implements:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:legged-locomotion
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:path-planning
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:differential-drive-kinematics
contrastsWith:
  - urn:ngm:class:fixed-robot-manipulator
  - urn:ngm:class:aerial-robot
  - urn:ngm:class:marine-robot
  - urn:ngm:class:stationary-automation-platform
bridgesTo:
  - urn:ngm:class:embodied-ai
  - urn:ngm:class:cyber-physical-systems
uses:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:move-it-2
  - urn:ngm:class:nav2
  - urn:ngm:class:slam-toolbox
  - urn:ngm:class:fastdds
  - urn:ngm:class:pointcloud-library
supports:
  - urn:ngm:class:fleet-management
  - urn:ngm:class:multi-robot-systems
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:digital-twin
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:sim-to-real-transfer
standardizedBy:
  - urn:ngm:class:iso-13482
  - urn:ngm:class:ros-rep
  - urn:ngm:class:ros-2
  - urn:ngm:class:ros-2
  - urn:ngm:class:ros-2-iron
  - urn:ngm:class:rep-105
  - urn:ngm:class:ros-rep
  - urn:ngm:class:roscon
relatedTo:
  - urn:ngm:class:edge-ai
  - urn:ngm:class:computer-vision
  - urn:ngm:class:digital-twin
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:swarm-robotics
---

# Mobile Robot Platform

A Mobile Robot Platform is an integrated mechatronic base that provides locomotion, power, computing, and sensor-mounting infrastructure upon which higher-level autonomy stacks—perception, planning, and control—are deployed.
