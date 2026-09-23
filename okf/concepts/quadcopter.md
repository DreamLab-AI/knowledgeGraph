---
okf_version: "0.2"
type: Class
title: Quadcopter
resource: urn:ngm:class:quadcopter
domain: robotics
description: A vertical take-off and landing (VTOL) aerial robot with four fixed-pitch rotors arranged symmetrically around a central frame, achieving attitude control and thrust modulation by differentially varying rotor speeds. Quadcopters are mechanically simple (no swashplate), highly manoeuvrable, and statically stable in hover, making them the dominant platform for consumer UAVs, autonomous aerial roboti
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-robot-type
  - urn:ngm:class:multirotor-uav
hasPart:
  - urn:ngm:class:pid-controller
  - urn:ngm:class:imu
  - urn:ngm:class:inertial-measurement-unit
enables:
  - urn:ngm:class:autonomous-navigation
  - urn:ngm:class:swarm-robotics
uses:
  - urn:ngm:class:sensor-fusion
  - urn:ngm:class:embedded-systems
relatedTo:
  - urn:ngm:class:computer-vision
  - urn:ngm:class:slam
  - urn:ngm:class:aerial-robot
  - urn:ngm:class:lidar
---

# Quadcopter

A vertical take-off and landing (VTOL) aerial robot with four fixed-pitch rotors arranged symmetrically around a central frame, achieving attitude control and thrust modulation by differentially varying rotor speeds. Quadcopters are mechanically simple (no swashplate), highly manoeuvrable, and statically stable in hover, making them the dominant platform for consumer UAVs, autonomous aerial robotics research, and inspection applications.
