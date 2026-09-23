---
okf_version: "0.2"
type: Class
title: Tracking System
resource: urn:ngm:class:tracking-system
domain: infrastructure
description: "A Tracking System is a hardware and software assembly that continuously determines the position, orientation, and motion of one or more objects or agents within a defined reference frame, using sensing technologies such as optical cameras, inertial measurement units, electromagnetic emitters, ultrasound, GPS, or LiDAR. Tracking systems are foundational components of augmented and virtual reality, "
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:spatial-tracking-system
enables:
  - urn:ngm:class:augmented-reality
  - urn:ngm:class:surgical-navigation
  - urn:ngm:class:autonomous-navigation
uses:
  - urn:ngm:class:imu
  - urn:ngm:class:computer-vision
  - urn:ngm:class:lidar
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
relatedTo:
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:spatial-mapping
---

# Tracking System

A Tracking System is a hardware and software assembly that continuously determines the position, orientation, and motion of one or more objects or agents within a defined reference frame, using sensing technologies such as optical cameras, inertial measurement units, electromagnetic emitters, ultrasound, GPS, or LiDAR. Tracking systems are foundational components of augmented and virtual reality, robotics, surgical navigation, sports analytics, logistics, and autonomous vehicles, where precise real-time knowledge of spatial state is essential for interaction, control, or safety.
