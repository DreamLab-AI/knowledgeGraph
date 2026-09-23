---
okf_version: "0.2"
type: Class
title: Inertial Measurement Unit
resource: urn:ngm:class:inertial-measurement-unit
domain: robotics
description: An Inertial Measurement Unit (IMU) is an electronic device that integrates tri-axial accelerometers, tri-axial gyroscopes, and optionally tri-axial magnetometers to measure a rigid body's specific force, angular rate, and magnetic field, enabling computation of linear acceleration, orientation, and heading relative to an inertial reference frame. MEMS-based IMUs dominate consumer and robotics appl
maturity: mature
quality: 0.74
is-a:
  - urn:ngm:class:robot-sensor
hasPart:
  - urn:ngm:class:accelerometer
  - urn:ngm:class:gyroscope
  - urn:ngm:class:magnetometer
requires:
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:imu-calibration
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:odometry
  - urn:ngm:class:dead-reckoning
  - urn:ngm:class:attitude-estimation
  - urn:ngm:class:visual-inertial-odometry
contrastsWith:
  - urn:ngm:class:wheel-odometry
  - urn:ngm:class:optical-flow-sensor
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:augmented-reality-tracking
  - urn:ngm:class:pedestrian-dead-reckoning
uses:
  - urn:ngm:class:mems
  - urn:ngm:class:extended-kalman-filter
  - urn:ngm:class:complementary-filter
partOf:
  - urn:ngm:class:robot-hardware
  - urn:ngm:class:flight-control-system
  - urn:ngm:class:autonomous-vehicle
relatedTo:
  - urn:ngm:class:slam
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:gnss
  - urn:ngm:class:lidar
  - urn:ngm:class:allan-variance
---

# Inertial Measurement Unit

An Inertial Measurement Unit (IMU) is an electronic device that integrates tri-axial accelerometers, tri-axial gyroscopes, and optionally tri-axial magnetometers to measure a rigid body's specific force, angular rate, and magnetic field, enabling computation of linear acceleration, orientation, and heading relative to an inertial reference frame. MEMS-based IMUs dominate consumer and robotics applications due to low cost, small form factor, and adequate noise performance, while tactical, navigation, and strategic grades using ring-laser or fibre-optic gyroscopes serve aerospace, defence, and surveying applications demanding higher accuracy and lower drift. The raw sensor data are fused through algorithms such as extended Kalman filters, complementary filters, or pre-integration on manifolds to produce robust pose and velocity estimates for autonomous systems. IMUs are foundational to visual-inertial odometry, SLAM pipelines, flight control, pedestrian dead reckoning, and augmented reality tracking.
