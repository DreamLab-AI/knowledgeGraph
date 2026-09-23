---
okf_version: "0.2"
type: Class
title: Shape Memory Alloy Actuator
resource: urn:ngm:class:shape-memory-alloy-actuator
domain: robotics
description: A shape memory alloy (SMA) actuator exploits the thermoelastic phase transformation of nickel-titanium (Nitinol) or similar alloys, which contract and generate force when thermally activated, then return to their original shape on cooling. SMA actuators are valued for their high force-to-weight ratio, silent operation, and inherent compliance, making them well-suited to soft robotics, minimally in
maturity: emerging
quality: 0.75
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:robotics
enables:
  - urn:ngm:class:surgical-robot
  - urn:ngm:class:exoskeleton-robot
  - urn:ngm:class:haptic-feedback
uses:
  - urn:ngm:class:tactile-sensor
partOf:
  - urn:ngm:class:soft-robotics
relatedTo:
  - urn:ngm:class:pneumatic-actuator
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:robot-actuator
  - urn:ngm:class:manipulation
  - urn:ngm:class:end-effector
---

# Shape Memory Alloy Actuator

A shape memory alloy (SMA) actuator exploits the thermoelastic phase transformation of nickel-titanium (Nitinol) or similar alloys, which contract and generate force when thermally activated, then return to their original shape on cooling. SMA actuators are valued for their high force-to-weight ratio, silent operation, and inherent compliance, making them well-suited to soft robotics, minimally invasive surgical tools, and wearable exoskeletons. Control bandwidth is limited by thermal cycle times, which remains a key engineering challenge.
