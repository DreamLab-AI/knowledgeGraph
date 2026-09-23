---
okf_version: "0.2"
type: Class
title: ADAS
resource: urn:ngm:class:adas
domain: robotics
description: Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance. ADAS operates at SAE Level 1–2 automation, augmenting rather than replacing the driver, and relies on sensor
maturity: emerging
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
requires:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:perception-system
contrastsWith:
  - urn:ngm:class:autonomous-vehicle
bridgesTo:
  - urn:ngm:class:autonomous-robot
uses:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:camera
  - urn:ngm:class:lidar
relatedTo:
  - urn:ngm:class:risk
---

# ADAS

Advanced Driver Assistance Systems (ADAS) are electronic systems that assist vehicle operators with driving and parking functions through automated technologies including adaptive cruise control, lane keeping assist, automatic emergency braking, blind spot detection, and parking assistance. ADAS operates at SAE Level 1–2 automation, augmenting rather than replacing the driver, and relies on sensor fusion across cameras, radar, and ultrasonic systems to perceive the vehicle's environment.
