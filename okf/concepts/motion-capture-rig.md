---
okf_version: "0.2"
type: Class
title: Motion Capture Rig
resource: urn:ngm:class:motion-capture-rig
domain: spatial-computing
description: Physical hardware or software system capturing human motion for animation or simulation through cameras, markers, sensors, and tracking infrastructure.
maturity: established
quality: 0.35
is-a:
  - urn:ngm:class:sc-interaction
hasPart:
  - urn:ngm:class:imu-sensors
  - urn:ngm:class:calibration-target
  - urn:ngm:class:motion-markers
  - urn:ngm:class:optical-cameras
  - urn:ngm:class:tracking-volume
  - urn:ngm:class:data-processing-unit
requires:
  - urn:ngm:class:camera-calibration
  - urn:ngm:class:high-speed-networking
  - urn:ngm:class:motion-solver-software
  - urn:ngm:class:synchronized-timing
enables:
  - urn:ngm:class:performance-capture
  - urn:ngm:class:animation-retargeting
  - urn:ngm:class:virtual-production
  - urn:ngm:class:biomechanical-analysis
dependsOn:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:skeletal-tracking
  - urn:ngm:class:data-fusion
bridgesTo:
  - urn:ngm:class:sensor-input
partOf:
  - urn:ngm:class:reality-capture-system
---

# Motion Capture Rig

Physical hardware or software system capturing human motion for animation or simulation through cameras, markers, sensors, and tracking infrastructure.
