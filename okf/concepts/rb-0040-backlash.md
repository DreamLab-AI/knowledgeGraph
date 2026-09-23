---
okf_version: "0.2"
type: Class
title: rb 0040 backlash
resource: urn:ngm:class:rb-0040-backlash
domain: robotics
description: Backlash in robotics is the lost motion in a mechanical transmission — the angular or linear displacement of the output element when the input reverses direction without producing corresponding output movement, caused by clearance gaps between mating gear teeth or other drive components. Backlash degrades positional accuracy and repeatability, introduces nonlinearity into the control loop, and can
maturity: emerging
quality: 0.7
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:backlash
dependsOn:
  - urn:ngm:class:actuator
contrastsWith:
  - urn:ngm:class:rb-0034-repeatability
  - urn:ngm:class:rb-0035-accuracy
relatedTo:
  - urn:ngm:class:rb-0039-stiffness
  - urn:ngm:class:rb-0038-compliance
  - urn:ngm:class:rb-0026-robot-joint
  - urn:ngm:class:rb-0043-torque
  - urn:ngm:class:rb-0047-feedback-control
---

# rb 0040 backlash

Backlash in robotics is the lost motion in a mechanical transmission — the angular or linear displacement of the output element when the input reverses direction without producing corresponding output movement, caused by clearance gaps between mating gear teeth or other drive components. Backlash degrades positional accuracy and repeatability, introduces nonlinearity into the control loop, and can cause oscillation or chattering in feedback control systems. Minimising backlash is critical for precision robot joints, and it is typically reduced through the use of preloaded gear pairs, harmonic drives, or cycloidal transmissions.
