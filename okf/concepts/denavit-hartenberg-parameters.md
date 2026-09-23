---
okf_version: "0.2"
type: Class
title: Denavit-Hartenberg Parameters
resource: urn:ngm:class:denavit-hartenberg-parameters
domain: robotics
description: Denavit-Hartenberg (DH) parameters are a standardised four-parameter convention for describing the relative geometry between consecutive links of a robotic manipulator. Each joint is characterised by link length, link twist, link offset, and joint angle, yielding a homogeneous transformation matrix per joint. Chaining these matrices gives a compact, systematic model of the arm's kinematics.
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-theory
relatedTo:
  - urn:ngm:class:forward-kinematics
  - urn:ngm:class:kinematics-model
---

# Denavit-Hartenberg Parameters

Denavit-Hartenberg (DH) parameters are a standardised four-parameter convention for describing the relative geometry between consecutive links of a robotic manipulator. Each joint is characterised by link length, link twist, link offset, and joint angle, yielding a homogeneous transformation matrix per joint. Chaining these matrices gives a compact, systematic model of the arm's kinematics.
