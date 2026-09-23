---
okf_version: "0.2"
type: Class
title: Tracking Hardware
resource: urn:ngm:class:tracking-hardware
domain: spatial-computing
description: Tracking Hardware comprises the physical sensors and devices used to determine the position and orientation of users, controllers, and objects within spatial computing environments. This includes inertial measurement units, optical trackers, hand-tracking cameras, eye-tracking modules, and SLAM-based inside-out tracking systems that together provide the 6-DoF pose data essential for immersive VR/A
maturity: emerging
quality: 0.35
is-a:
  - urn:ngm:class:sc-interaction
hasPart:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:optical-tracking
enables:
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:eye-tracking
bridgesTo:
  - urn:ngm:class:tracking-technology
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
---

# Tracking Hardware

Tracking Hardware comprises the physical sensors and devices used to determine the position and orientation of users, controllers, and objects within spatial computing environments. This includes inertial measurement units, optical trackers, hand-tracking cameras, eye-tracking modules, and SLAM-based inside-out tracking systems that together provide the 6-DoF pose data essential for immersive VR/AR experiences.
