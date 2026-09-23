---
okf_version: "0.2"
type: Class
title: IMU
resource: urn:ngm:class:imu
domain: spatial-computing
description: An Inertial Measurement Unit (IMU) is a self-contained electronic sensor module that integrates tri-axial accelerometers, gyroscopes, and optionally magnetometers to measure a rigid body's specific force, angular rate, and magnetic heading relative to an inertial reference frame without dependence on external infrastructure. MEMS-fabricated IMUs fuse their outputs through Kalman or complementary f
maturity: mature
quality: 0.76
is-a:
  - urn:ngm:class:sensor
hasPart:
  - urn:ngm:class:accelerometer
  - urn:ngm:class:gyroscope
  - urn:ngm:class:magnetometer
  - urn:ngm:class:digital-motion-processor
requires:
  - urn:ngm:class:mems
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:analog-to-digital-converter
  - urn:ngm:class:analog-to-digital-converter
enables:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:motion-tracking
  - urn:ngm:class:dead-reckoning
  - urn:ngm:class:6-do-f-tracking
  - urn:ngm:class:attitude-estimation
  - urn:ngm:class:6-do-f-tracking
dependsOn:
  - urn:ngm:class:real-time-operating-system
implements:
  - urn:ngm:class:newton-euler-dynamics
  - urn:ngm:class:strapdown-navigation
contrastsWith:
  - urn:ngm:class:gps
  - urn:ngm:class:optical-tracking
bridgesTo:
  - urn:ngm:class:autonomous-vehicle
  - urn:ngm:class:motion-capture
  - urn:ngm:class:robot-proprioception
  - urn:ngm:class:motion-capture
uses:
  - urn:ngm:class:quaternion-math
  - urn:ngm:class:euler-angles
  - urn:ngm:class:complementary-filter
  - urn:ngm:class:rotation-matrix
  - urn:ngm:class:quaternion-math
supports:
  - urn:ngm:class:slam
  - urn:ngm:class:pose-estimation
  - urn:ngm:class:visual-inertial-odometry
  - urn:ngm:class:hand-tracking
  - urn:ngm:class:gait-analysis
standardizedBy:
  - urn:ngm:class:ieee-1559
  - urn:ngm:class:ieee-952
partOf:
  - urn:ngm:class:inertial-navigation-system
  - urn:ngm:class:xr-headset
  - urn:ngm:class:flight-controller
relatedTo:
  - urn:ngm:class:lidar
  - urn:ngm:class:extended-reality
  - urn:ngm:class:gnss
  - urn:ngm:class:motion-sickness
---

# IMU

An Inertial Measurement Unit (IMU) is a self-contained electronic sensor module that integrates tri-axial accelerometers, gyroscopes, and optionally magnetometers to measure a rigid body's specific force, angular rate, and magnetic heading relative to an inertial reference frame without dependence on external infrastructure. MEMS-fabricated IMUs fuse their outputs through Kalman or complementary filter algorithms to yield real-time pose and orientation estimates at high sample rates, feeding inertial navigation, SLAM pipelines, and 6-DoF tracking systems. IMUs span performance grades from low-cost consumer MEMS units (bias instability >1°/hr) to navigation-grade fibre-optic and ring-laser gyro systems used in aerospace and submarine applications. They are integral to XR headsets, autonomous vehicles, UAVs, legged robots, wearables, and surgical instruments wherever low-latency, infrastructure-independent motion awareness is required.
