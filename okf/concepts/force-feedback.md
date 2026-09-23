---
okf_version: "0.2"
type: Class
title: Force Feedback
resource: urn:ngm:class:force-feedback
domain: robotics
description: Force feedback is a class of haptic technology that renders mechanical forces — including resistance, weight, texture, and impact — directly to a user's body through a controlled actuator system, enabling the sense of touch and proprioception to convey information about virtual or remote physical environments. Distinguished from simpler vibrotactile feedback by its ability to generate directional,
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:haptics
requires:
  - urn:ngm:class:real-time-control
enables:
  - urn:ngm:class:haptic-feedback-telepresence
  - urn:ngm:class:physics-simulation
  - urn:ngm:class:surgical-simulation
  - urn:ngm:class:dexterous-manipulation
contrastsWith:
  - urn:ngm:class:visual-feedback
bridgesTo:
  - urn:ngm:class:spatial-computing
  - urn:ngm:class:extended-reality
uses:
  - urn:ngm:class:actuator
  - urn:ngm:class:series-elastic-actuator
  - urn:ngm:class:motion-control
  - urn:ngm:class:impedance-control
  - urn:ngm:class:pid-controller
partOf:
  - urn:ngm:class:teleoperation
  - urn:ngm:class:human-robot-interaction
relatedTo:
  - urn:ngm:class:haptic-feedback
  - urn:ngm:class:haptic-feedback-system
  - urn:ngm:class:tactile-sensing
  - urn:ngm:class:proprioception
  - urn:ngm:class:teleoperation
---

# Force Feedback

Force feedback is a class of haptic technology that renders mechanical forces — including resistance, weight, texture, and impact — directly to a user's body through a controlled actuator system, enabling the sense of touch and proprioception to convey information about virtual or remote physical environments. Distinguished from simpler vibrotactile feedback by its ability to generate directional, grounded forces (requiring a mechanical linkage to the user), force feedback systems are used in surgical simulators, teleoperation of remote robots, vehicle simulation, and advanced XR interfaces. The fidelity of the rendered force field is constrained by the bandwidth, peak force, backdrivability, and transparency of the underlying actuator mechanism.
