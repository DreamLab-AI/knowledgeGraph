---
okf_version: "0.2"
type: Class
title: Unmanned Aerial Vehicle
resource: urn:ngm:class:unmanned-aerial-vehicle
domain: robotics
description: An Unmanned Aerial Vehicle (UAV), commonly called a drone, is an aircraft that operates without an onboard human pilot, controlled either remotely or autonomously by onboard flight software. UAVs integrate flight control, navigation, sensing and communication subsystems to perform tasks ranging from aerial imaging to delivery and inspection. They span scales from small quadcopters to fixed-wing pl
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:robo-robot-type
requires:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:telemetry
enables:
  - urn:ngm:class:remote-sensing
  - urn:ngm:class:precision-agriculture
  - urn:ngm:class:surveillance
dependsOn:
  - urn:ngm:class:inertial-measurement-unit
implements:
  - urn:ngm:class:path-planning
bridgesTo:
  - urn:ngm:class:robot
uses:
  - urn:ngm:class:gps
  - urn:ngm:class:lidar
  - urn:ngm:class:computer-vision
  - urn:ngm:class:sensor
supports:
  - urn:ngm:class:mapping
  - urn:ngm:class:obstacle-avoidance
partOf:
  - urn:ngm:class:robotics
relatedTo:
  - urn:ngm:class:quadcopter
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:swarm-robotics
---

# Unmanned Aerial Vehicle

An Unmanned Aerial Vehicle (UAV), commonly called a drone, is an aircraft that operates without an onboard human pilot, controlled either remotely or autonomously by onboard flight software. UAVs integrate flight control, navigation, sensing and communication subsystems to perform tasks ranging from aerial imaging to delivery and inspection. They span scales from small quadcopters to fixed-wing platforms and increasingly rely on autonomy for navigation and obstacle avoidance.
