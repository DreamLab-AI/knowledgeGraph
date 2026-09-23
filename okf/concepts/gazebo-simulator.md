---
okf_version: "0.2"
type: Class
title: Gazebo Simulator
resource: urn:ngm:class:gazebo-simulator
domain: robotics
description: Gazebo Simulator (now branded Gz Sim following the Open Robotics / Intrinsic rebranding) is an open-source, physics-accurate 3D robotics simulator providing rigid-body dynamics (via ODE, Bullet, DART, or Simbody), sensor simulation (cameras, LiDAR, IMU, GPS), and a plugin architecture for custom ...
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
  - urn:ngm:class:physics-simulator
  - urn:ngm:class:robotics-development-tool
hasPart:
  - urn:ngm:class:sensors
  - urn:ngm:class:gz-physics-plugin
  - urn:ngm:class:sensors
  - urn:ngm:class:gz-rendering
  - urn:ngm:class:gz-transport
  - urn:ngm:class:sdf-world-model
  - urn:ngm:class:gazebo-plugin-api
requires:
  - urn:ngm:class:urdf-robot-model
  - urn:ngm:class:3-d-rendering-engine
  - urn:ngm:class:physics-engine
  - urn:ngm:class:sdf-robot-description
enables:
  - urn:ngm:class:hardware-in-the-loop-testing
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:sensor-simulation
  - urn:ngm:class:reinforcement-learning
  - urn:ngm:class:multi-robot-simulation
dependsOn:
  - urn:ngm:class:ogre3d-rendering-engine
  - urn:ngm:class:ignition-fuel-model-database
  - urn:ngm:class:colcon-build-system
implements:
  - urn:ngm:class:sdformat-specification
  - urn:ngm:class:gz-transport-message-protocol
  - urn:ngm:class:ros2-control-hardware-interface
bridgesTo:
  - urn:ngm:class:ros
  - urn:ngm:class:open-xr
  - urn:ngm:class:auto-ml
  - urn:ngm:class:web-assembly
partOf:
  - urn:ngm:class:sim-to-real-transfer
  - urn:ngm:class:ros
  - urn:ngm:class:sim-to-real-transfer
---

# Gazebo Simulator

Gazebo Simulator (now branded Gz Sim following the Open Robotics / Intrinsic rebranding) is an open-source, physics-accurate 3D robotics simulator providing rigid-body dynamics (via ODE, Bullet, DART, or Simbody), sensor simulation (cameras, LiDAR, IMU, GPS), and a plugin architecture for custom ...
