---
okf_version: "0.2"
type: Class
title: Dead Reckoning
resource: urn:ngm:class:dead-reckoning
domain: robotics
description: Dead reckoning is a navigation technique that estimates an entity's current position by applying its known speed, heading, and elapsed time to a previously determined position. It relies on relative motion measurements from sensors such as inertial measurement units and wheel encoders rather than external position fixes. Because errors accumulate over time as drift, dead reckoning is typically fus
maturity: established
quality: 0.62
is-a:
  - urn:ngm:class:localisation
requires:
  - urn:ngm:class:state-estimation
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:pose-estimation
dependsOn:
  - urn:ngm:class:inertial-measurement-unit
  - urn:ngm:class:odometry
contrastsWith:
  - urn:ngm:class:gps
bridgesTo:
  - urn:ngm:class:sensor-fusion
uses:
  - urn:ngm:class:accelerometer
  - urn:ngm:class:gyroscope
  - urn:ngm:class:velocity
supports:
  - urn:ngm:class:simultaneous-localisation-and-mapping
  - urn:ngm:class:mobile-robot
relatedTo:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:kalman-filter
  - urn:ngm:class:navigation
  - urn:ngm:class:imu
---

# Dead Reckoning

Dead reckoning is a navigation technique that estimates an entity's current position by applying its known speed, heading, and elapsed time to a previously determined position. It relies on relative motion measurements from sensors such as inertial measurement units and wheel encoders rather than external position fixes. Because errors accumulate over time as drift, dead reckoning is typically fused with absolute references like GPS to maintain accuracy.
