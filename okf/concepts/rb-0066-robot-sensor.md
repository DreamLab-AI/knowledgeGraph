---
okf_version: "0.2"
type: Class
title: rb 0066 robot sensor
resource: urn:ngm:class:rb-0066-robot-sensor
domain: robotics
description: A robot sensor is a transducer or measurement device integrated into or used by a robot system to acquire information about the robot's own state or its surrounding environment. Robot sensors span proprioceptive types — such as encoders, IMUs, and force-torque sensors — and exteroceptive types such as vision systems, LiDAR, radar, and proximity sensors. The data they provide forms the perceptual b
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:rb-0067-force-torque-sensor
  - urn:ngm:class:rb-0068-vision-system
  - urn:ngm:class:rb-0069-lidar
  - urn:ngm:class:rb-0072-encoder
  - urn:ngm:class:rb-0073-imu
enables:
  - urn:ngm:class:rb-0052-collision-avoidance
  - urn:ngm:class:rb-0105-speed-and-separation-monitoring
bridgesTo:
  - urn:ngm:class:sensor
relatedTo:
  - urn:ngm:class:sensor-fusion
---

# rb 0066 robot sensor

A robot sensor is a transducer or measurement device integrated into or used by a robot system to acquire information about the robot's own state or its surrounding environment. Robot sensors span proprioceptive types — such as encoders, IMUs, and force-torque sensors — and exteroceptive types such as vision systems, LiDAR, radar, and proximity sensors. The data they provide forms the perceptual basis for control, motion planning, and safety functions.
