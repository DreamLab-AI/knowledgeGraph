---
okf_version: "0.2"
type: Class
title: rb 0078 infrared sensor
resource: urn:ngm:class:rb-0078-infrared-sensor
domain: robotics
description: An infrared (IR) sensor is an exteroceptive sensor that detects and measures infrared radiation emitted or reflected by objects in the environment, enabling proximity detection, thermal profiling, and obstacle identification in robotic systems. IR sensors operate across near-infrared (NIR), short-wave, mid-wave, and long-wave bands; common robotics applications include proximity switches, line-fol
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
bridgesTo:
  - urn:ngm:class:sensor
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:exteroceptive-sensor
supports:
  - urn:ngm:class:rb-0052-collision-avoidance
  - urn:ngm:class:rb-0095-safety-zone
relatedTo:
  - urn:ngm:class:rb-0066-robot-sensor
  - urn:ngm:class:rb-0069-lidar
  - urn:ngm:class:rb-0075-range-finder
  - urn:ngm:class:proximity-sensor
  - urn:ngm:class:infrared-sensor
---

# rb 0078 infrared sensor

An infrared (IR) sensor is an exteroceptive sensor that detects and measures infrared radiation emitted or reflected by objects in the environment, enabling proximity detection, thermal profiling, and obstacle identification in robotic systems. IR sensors operate across near-infrared (NIR), short-wave, mid-wave, and long-wave bands; common robotics applications include proximity switches, line-following, and thermal imaging for human detection. They complement other ranging sensors such as LiDAR and ultrasonic devices, and are frequently fused in multi-modal perception pipelines.
