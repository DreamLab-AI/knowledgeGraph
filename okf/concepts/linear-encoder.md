---
okf_version: "0.2"
type: Class
title: Linear Encoder
resource: urn:ngm:class:linear-encoder
domain: robotics
description: "A Linear Encoder is a position sensing device that measures linear (translational) displacement along a single axis by converting physical motion into an electrical signal — typically a series of digital pulses or an analogue waveform — that a controller can interpret as position, velocity, or acceleration data. Linear encoders may be optical (using a diffraction grating or glass scale), magnetic "
maturity: established
quality: 0
is-a:
  - urn:ngm:class:robo-perception
hasPart:
  - urn:ngm:class:sensor
  - urn:ngm:class:sensor-technology
requires:
  - urn:ngm:class:feedback-control
  - urn:ngm:class:calibration
enables:
  - urn:ngm:class:motion-control
  - urn:ngm:class:position-control
  - urn:ngm:class:servo-control
bridgesTo:
  - urn:ngm:class:encoder
uses:
  - urn:ngm:class:feedback-loop
  - urn:ngm:class:feedback-mechanism
partOf:
  - urn:ngm:class:robot-hardware
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:robot-sensor
  - urn:ngm:class:robot-joint
  - urn:ngm:class:servo-motor
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:kinematics
---

# Linear Encoder

A Linear Encoder is a position sensing device that measures linear (translational) displacement along a single axis by converting physical motion into an electrical signal — typically a series of digital pulses or an analogue waveform — that a controller can interpret as position, velocity, or acceleration data. Linear encoders may be optical (using a diffraction grating or glass scale), magnetic (using a magnetised tape), or capacitive, with resolution ranging from micrometres to nanometres in precision metrology applications. They are essential feedback elements in CNC machine tools, semiconductor lithography stages, and high-precision robotic manipulators where closed-loop positional accuracy is required.
