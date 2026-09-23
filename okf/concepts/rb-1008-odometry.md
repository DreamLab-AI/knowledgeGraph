---
okf_version: "0.2"
type: Class
title: RB-1008-odometry
resource: urn:ngm:class:rb-1008-odometry
domain: robotics
description: RB-1008-odometry refers to the odometric positioning subsystem of the RB-1008 wheeled mobile robot platform, encompassing the encoder-based wheel odometry algorithms, sensor fusion pipelines, and ROS navigation stack integration used to estimate the robot's pose (position and orientation) relative to a starting frame. The system computes incremental displacement from differential or omnidirectiona
maturity: established
quality: 0.8
is-a:
  - urn:ngm:class:odometry
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:ros-navigation-stack
  - urn:ngm:class:slam
partOf:
  - urn:ngm:class:wheeled-mobile-robot
  - urn:ngm:class:mobile-robot-platform
relatedTo:
  - urn:ngm:class:localisation
  - urn:ngm:class:visual-odometry
  - urn:ngm:class:autonomous-navigation
---

# RB-1008-odometry

RB-1008-odometry refers to the odometric positioning subsystem of the RB-1008 wheeled mobile robot platform, encompassing the encoder-based wheel odometry algorithms, sensor fusion pipelines, and ROS navigation stack integration used to estimate the robot's pose (position and orientation) relative to a starting frame. The system computes incremental displacement from differential or omnidirectional wheel encoders, corrects for wheel slip and encoder quantisation errors, and fuses encoder data with inertial measurement unit (IMU) readings to produce a continuous odometric estimate used as the prior for simultaneous localisation and mapping (SLAM) and autonomous navigation. Accurate odometry is essential for maintaining coherent map frames and for the navigation stack's local cost-map updates between LIDAR scan matches.
