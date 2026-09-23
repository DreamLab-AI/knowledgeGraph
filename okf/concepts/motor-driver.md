---
okf_version: "0.2"
type: Class
title: Motor Driver
resource: urn:ngm:class:motor-driver
domain: robotics
description: "A Motor Driver is an electronic circuit or integrated circuit module that translates low-power control signals from a microcontroller or digital signal processor into the high-current, high-voltage waveforms required to operate electric motors, including DC brushed motors, brushless DC motors, and stepper motors. Motor drivers implement switching topologies such as H-bridge configurations and PWM "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:power-electronics
hasPart:
  - urn:ngm:class:h-bridge
  - urn:ngm:class:gate-driver
  - urn:ngm:class:current-sensor
requires:
  - urn:ngm:class:microcontroller
  - urn:ngm:class:pulse-width-modulation
  - urn:ngm:class:power-supply
enables:
  - urn:ngm:class:servo-control
  - urn:ngm:class:actuator
  - urn:ngm:class:robot-control
  - urn:ngm:class:field-oriented-control
dependsOn:
  - urn:ngm:class:mosfet
  - urn:ngm:class:embedded-systems
contrastsWith:
  - urn:ngm:class:servo-amplifier
bridgesTo:
  - urn:ngm:class:can-bus
  - urn:ngm:class:ether-cat
uses:
  - urn:ngm:class:real-time-control
  - urn:ngm:class:dc-servo-motor
  - urn:ngm:class:encoder
supports:
  - urn:ngm:class:electric-motor
  - urn:ngm:class:stepper-motor
  - urn:ngm:class:dc-servo-motor
partOf:
  - urn:ngm:class:robotic-system
  - urn:ngm:class:motor-control-system
relatedTo:
  - urn:ngm:class:servo-motor
  - urn:ngm:class:thermal-management
---

# Motor Driver

A Motor Driver is an electronic circuit or integrated circuit module that translates low-power control signals from a microcontroller or digital signal processor into the high-current, high-voltage waveforms required to operate electric motors, including DC brushed motors, brushless DC motors, and stepper motors. Motor drivers implement switching topologies such as H-bridge configurations and PWM (pulse-width modulation) generation to control motor direction, speed, and torque. Protection circuitry for over-current, over-temperature, and back-EMF clamping is typically integrated. Motor drivers are fundamental building blocks of robotic systems, electric vehicles, CNC machinery, and consumer appliances.
