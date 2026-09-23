---
okf_version: "0.2"
type: Class
title: rb 0054 position control
resource: urn:ngm:class:rb-0054-position-control
domain: robotics
description: Position control is a robot control strategy in which the primary objective is to drive each joint or end-effector to a desired spatial configuration, using closed-loop feedback from encoders or resolvers to minimise position error. It forms the foundation for precise manipulation tasks and is typically implemented via PID controllers, and may be combined with force or impedance control for compli
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:motion-control
requires:
  - urn:ngm:class:rb-0051-trajectory-planning
uses:
  - urn:ngm:class:rb-0048-pid-controller
  - urn:ngm:class:rb-0047-feedback-control
  - urn:ngm:class:rb-0072-encoder
supports:
  - urn:ngm:class:rb-0091-safety-rated-monitored-stop
relatedTo:
  - urn:ngm:class:rb-0055-velocity-control
  - urn:ngm:class:rb-0053-force-control
  - urn:ngm:class:rb-0056-impedance-control
---

# rb 0054 position control

Position control is a robot control strategy in which the primary objective is to drive each joint or end-effector to a desired spatial configuration, using closed-loop feedback from encoders or resolvers to minimise position error. It forms the foundation for precise manipulation tasks and is typically implemented via PID controllers, and may be combined with force or impedance control for compliant operation in contact-rich environments.
