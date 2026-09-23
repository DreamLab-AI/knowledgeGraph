---
okf_version: "0.2"
type: Class
title: rb 0044 velocity
resource: urn:ngm:class:rb-0044-velocity
domain: robotics
description: "In robotics, velocity refers to the time-derivative of position, encompassing both linear velocity (metres per second) at the end-effector or a body-frame point, and angular velocity (radians per second) describing rotational rate. Velocity is the central quantity in differential kinematics: the Jacobian matrix maps joint-space velocity vectors to Cartesian task-space velocities. Velocity limits a"
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robot-kinematics
requires:
  - urn:ngm:class:rb-0021-robot-kinematics
enables:
  - urn:ngm:class:rb-0055-velocity-control
  - urn:ngm:class:rb-0049-motion-planning
standardizedBy:
  - urn:ngm:class:rb-0093-speed-limitation
relatedTo:
  - urn:ngm:class:rb-0045-acceleration
  - urn:ngm:class:rb-0043-torque
  - urn:ngm:class:rb-0030-jacobian-matrix
  - urn:ngm:class:differential-kinematics
---

# rb 0044 velocity

In robotics, velocity refers to the time-derivative of position, encompassing both linear velocity (metres per second) at the end-effector or a body-frame point, and angular velocity (radians per second) describing rotational rate. Velocity is the central quantity in differential kinematics: the Jacobian matrix maps joint-space velocity vectors to Cartesian task-space velocities. Velocity limits are safety-critical parameters in collaborative robot standards (ISO/TS 15066) where end-effector speed directly determines permissible human contact force.
