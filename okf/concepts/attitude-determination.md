---
okf_version: "0.2"
type: Class
title: Attitude Determination
resource: urn:ngm:class:attitude-determination
domain: space-science-and-systems
description: "Attitude estimation is the process of determining the orientation of a rigid body, typically expressed as roll, pitch and yaw or as a quaternion, relative to a reference frame. It fuses measurements from an inertial measurement unit's gyroscopes, accelerometers and magnetometers using sensor-fusion algorithms such as complementary or Kalman filters to counteract individual sensor drift and noise. "
maturity: draft
quality: 0
is-a:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
  - urn:ngm:class:sensor-fusion
bridgesTo:
  - urn:ngm:class:state-estimation
  - urn:ngm:class:attitude-determination
relatedTo:
  - urn:ngm:class:spacecraft-guidance-navigation-and-control
---

# Attitude Determination

Attitude estimation is the process of determining the orientation of a rigid body, typically expressed as roll, pitch and yaw or as a quaternion, relative to a reference frame. It fuses measurements from an inertial measurement unit's gyroscopes, accelerometers and magnetometers using sensor-fusion algorithms such as complementary or Kalman filters to counteract individual sensor drift and noise. Accurate attitude estimation is a prerequisite for stable flight control, robot balancing and any system that must reason about its own orientation in space.
