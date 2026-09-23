---
okf_version: "0.2"
type: Class
title: Programmable Logic Controller
resource: urn:ngm:class:programmable-logic-controller
domain: robotics
description: A programmable logic controller (PLC) is a ruggedised industrial computer designed to control machinery and processes by repeatedly scanning inputs, executing a stored control program, and updating outputs in real time. Built to withstand harsh factory environments, it interfaces with sensors and actuators and is typically programmed in standardised languages such as ladder logic. PLCs are foundat
maturity: mature
quality: 0.62
is-a:
  - urn:ngm:class:industrial-automation
hasPart:
  - urn:ngm:class:sensor
  - urn:ngm:class:actuator
requires:
  - urn:ngm:class:actuator
enables:
  - urn:ngm:class:automation
dependsOn:
  - urn:ngm:class:hardware
implements:
  - urn:ngm:class:automation
bridgesTo:
  - urn:ngm:class:robotics
uses:
  - urn:ngm:class:sensor
supports:
  - urn:ngm:class:scada
standardizedBy:
  - urn:ngm:class:standards
relatedTo:
  - urn:ngm:class:industrial-automation
  - urn:ngm:class:scada
  - urn:ngm:class:robot
  - urn:ngm:class:automation
---

# Programmable Logic Controller

A programmable logic controller (PLC) is a ruggedised industrial computer designed to control machinery and processes by repeatedly scanning inputs, executing a stored control program, and updating outputs in real time. Built to withstand harsh factory environments, it interfaces with sensors and actuators and is typically programmed in standardised languages such as ladder logic. PLCs are foundational building blocks of industrial automation and supervisory control systems.
