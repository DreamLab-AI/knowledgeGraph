---
okf_version: "0.2"
type: Class
title: Gps Navigation
resource: urn:ngm:class:gps-navigation
domain: robotics
description: "GPS navigation is the use of the Global Positioning System — a satellite-based radio navigation system operated by the United States government — to determine the precise position, velocity, and time of a receiver anywhere on or near Earth. A GPS receiver calculates its location by measuring the time of arrival of signals from at least four satellites and applying trilateration. It is widely used "
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:robotics
  - urn:ngm:class:navigation-system
hasPart:
  - urn:ngm:class:gnss-receiver
  - urn:ngm:class:satellite-signal
requires:
  - urn:ngm:class:satellite-communication
  - urn:ngm:class:atomic-clock
  - urn:ngm:class:spectrum-allocation
enables:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:drone-navigation
  - urn:ngm:class:geofencing
contrastsWith:
  - urn:ngm:class:inertial-navigation
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:lidar-slam
uses:
  - urn:ngm:class:trilateration
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:sensor-fusion
supports:
  - urn:ngm:class:robot-localisation
  - urn:ngm:class:fleet-management
relatedTo:
  - urn:ngm:class:gnss
  - urn:ngm:class:dead-reckoning
  - urn:ngm:class:real-time-kinematic
---

# Gps Navigation

GPS navigation is the use of the Global Positioning System — a satellite-based radio navigation system operated by the United States government — to determine the precise position, velocity, and time of a receiver anywhere on or near Earth. A GPS receiver calculates its location by measuring the time of arrival of signals from at least four satellites and applying trilateration. It is widely used in autonomous robots, vehicles, aircraft, and mobile devices as a primary or complementary localisation sensor.
