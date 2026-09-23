---
okf_version: "0.2"
type: Class
title: Attitude Estimation
resource: urn:ngm:class:attitude-estimation
domain: robotics
description: "Attitude estimation is the process of determining the orientation of a rigid body, typically expressed as roll, pitch and yaw or as a quaternion, relative to a reference frame. It fuses measurements from an inertial measurement unit's gyroscopes, accelerometers and magnetometers using sensor-fusion algorithms such as complementary or Kalman filters to counteract individual sensor drift and noise. "
maturity: established
quality: 0.55
is-a:
  - urn:ngm:class:sensor-fusion
---

# Attitude Estimation

Attitude estimation is the process of determining the orientation of a rigid body, typically expressed as roll, pitch and yaw or as a quaternion, relative to a reference frame. It fuses measurements from an inertial measurement unit's gyroscopes, accelerometers and magnetometers using sensor-fusion algorithms such as complementary or Kalman filters to counteract individual sensor drift and noise. Accurate attitude estimation is a prerequisite for stable flight control, robot balancing and any system that must reason about its own orientation in space.
