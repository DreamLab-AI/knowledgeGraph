---
okf_version: "0.2"
type: Class
title: Wheeled Robot
resource: urn:ngm:class:wheeled-robot
domain: robotics
description: A Wheeled Robot is a mobile robot platform that uses wheels as its primary locomotion mechanism. Wheeled robots offer high energy efficiency and speed on flat terrain, making them dominant in warehouse automation, last-mile delivery, and research platforms. Differential drive, omnidirectional, and car-like Ackermann steering configurations each present distinct kinematic constraints that influence
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:robo-robot-type
requires:
  - urn:ngm:class:odometry
  - urn:ngm:class:navigation
uses:
  - urn:ngm:class:ros
  - urn:ngm:class:slam
partOf:
  - urn:ngm:class:mobile-robot
---

# Wheeled Robot

A Wheeled Robot is a mobile robot platform that uses wheels as its primary locomotion mechanism. Wheeled robots offer high energy efficiency and speed on flat terrain, making them dominant in warehouse automation, last-mile delivery, and research platforms. Differential drive, omnidirectional, and car-like Ackermann steering configurations each present distinct kinematic constraints that influence navigation algorithm design.
