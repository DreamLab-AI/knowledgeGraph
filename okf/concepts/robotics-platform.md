---
okf_version: "0.2"
type: Class
title: Robotics Platform
resource: urn:ngm:class:robotics-platform
domain: robotics
description: RoboticsPlatform is an integrated hardware–software–middleware ecosystem providing standardised communication layers, hardware abstraction, simulation environments, motion-planning stacks, real-time control loops, and cloud-edge orchestration that collectively reduce engineering effort for robot ...
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:software-framework
  - urn:ngm:class:control-system
  - urn:ngm:class:embedded-system
  - urn:ngm:class:middleware
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:digital-twin
hasPart:
  - urn:ngm:class:dds-middleware
  - urn:ngm:class:hardware-abstraction-layer
  - urn:ngm:class:localisation
  - urn:ngm:class:real-time-control
  - urn:ngm:class:motion-planning
  - urn:ngm:class:path-planning
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:ros
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:gripper-control
requires:
  - urn:ngm:class:dds
  - urn:ngm:class:ethernet
  - urn:ngm:class:gpu-compute
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:rgb-d-camera
  - urn:ngm:class:force-torque-sensor
  - urn:ngm:class:lidar
enables:
  - urn:ngm:class:fleet-management
  - urn:ngm:class:robot-manipulation
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:digital-twin
  - urn:ngm:class:human-robot-interaction
  - urn:ngm:class:task-planning
  - urn:ngm:class:teleoperation
dependsOn:
  - urn:ngm:class:dds-qos
  - urn:ngm:class:posix-real-time
  - urn:ngm:class:can-bus
  - urn:ngm:class:ether-cat
  - urn:ngm:class:cuda
  - urn:ngm:class:omniverse-usd
  - urn:ngm:class:pcl
  - urn:ngm:class:eigen-layer
implements:
  - urn:ngm:class:behaviour-tree
  - urn:ngm:class:micro-ros
  - urn:ngm:class:move-it-2
  - urn:ngm:class:nav2
  - urn:ngm:class:ros-2
  - urn:ngm:class:ros2-control
  - urn:ngm:class:urdf
  - urn:ngm:class:imitation-learning
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:slam
contrastsWith:
  - urn:ngm:class:proprietary-robot-controller
  - urn:ngm:class:plc
  - urn:ngm:class:scada
  - urn:ngm:class:custom-rtos-firmware
  - urn:ngm:class:ros
bridgesTo:
  - urn:ngm:class:simulation-environment
uses:
  - urn:ngm:class:eigen-layer
  - urn:ngm:class:openai-research-organisation
  - urn:ngm:class:open-cv
  - urn:ngm:class:python
  - urn:ngm:class:sdf
  - urn:ngm:class:urdf
  - urn:ngm:class:usd
  - urn:ngm:class:rust-systems-programming-language
  - urn:ngm:class:c
  - urn:ngm:class:pcl
  - urn:ngm:class:eigen-layer
  - urn:ngm:class:openai-research-organisation
supports:
  - urn:ngm:class:agricultural-robotics
  - urn:ngm:class:assistive-robotics
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:space-robotics
  - urn:ngm:class:surgical-robotics
  - urn:ngm:class:warehouse-robotics
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:field-robotics
standardizedBy:
  - urn:ngm:class:iec-61508
  - urn:ngm:class:ieee-1872
  - urn:ngm:class:iso-10218
  - urn:ngm:class:iso-9283
  - urn:ngm:class:dds
  - urn:ngm:class:ros-rep
  - urn:ngm:class:dds
  - urn:ngm:class:vda-5050
relatedTo:
  - urn:ngm:class:5-g
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:digital-manufacturing
  - urn:ngm:class:internet-of-things
  - urn:ngm:class:computer-vision
  - urn:ngm:class:edge-computing
  - urn:ngm:class:machine-learning-discipline
  - urn:ngm:class:autonomous-vehicle
---

# Robotics Platform

RoboticsPlatform is an integrated hardware–software–middleware ecosystem providing standardised communication layers, hardware abstraction, simulation environments, motion-planning stacks, real-time control loops, and cloud-edge orchestration that collectively reduce engineering effort for robot ...
