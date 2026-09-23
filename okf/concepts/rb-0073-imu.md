---
okf_version: "0.2"
type: Class
title: rb 0073 imu
resource: urn:ngm:class:rb-0073-imu
domain: robotics
description: An Inertial Measurement Unit (IMU) is an electronic device that measures and reports a body's specific force, angular rate, and sometimes magnetic field using a combination of accelerometers, gyroscopes, and optional magnetometers. In robotics, IMUs provide high-frequency proprioceptive feedback for state estimation, pose tracking, and stabilisation control, and are commonly fused with odometry or
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-perception
  - urn:ngm:class:inertial-measurement-unit
hasPart:
  - urn:ngm:class:accelerometer
  - urn:ngm:class:gyroscope
enables:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:odometry
  - urn:ngm:class:localisation
supports:
  - urn:ngm:class:autonomous-navigation
relatedTo:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:slam
  - urn:ngm:class:rb-0066-robot-sensor
  - urn:ngm:class:rb-0072-encoder
---

# rb 0073 imu

An Inertial Measurement Unit (IMU) is an electronic device that measures and reports a body's specific force, angular rate, and sometimes magnetic field using a combination of accelerometers, gyroscopes, and optional magnetometers. In robotics, IMUs provide high-frequency proprioceptive feedback for state estimation, pose tracking, and stabilisation control, and are commonly fused with odometry or SLAM algorithms to reduce drift.
