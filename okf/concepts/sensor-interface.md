---
okf_version: "0.2"
type: Class
title: Sensor Interface
resource: urn:ngm:class:sensor-interface
domain: robotics
description: "A sensor interface is the hardware and protocol boundary through which a controller acquires data from a sensor, encompassing signal conditioning, analogue-to-digital conversion, and bus protocols such as I2C, SPI, CAN, or analogue voltage lines. It standardises timing, addressing, and electrical levels so that heterogeneous sensors can be integrated into a control loop. It is a core subsystem of "
maturity: established
quality: 0.72
is-a:
  - urn:ngm:class:control-system
relatedTo:
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:control-system
---

# Sensor Interface

A sensor interface is the hardware and protocol boundary through which a controller acquires data from a sensor, encompassing signal conditioning, analogue-to-digital conversion, and bus protocols such as I2C, SPI, CAN, or analogue voltage lines. It standardises timing, addressing, and electrical levels so that heterogeneous sensors can be integrated into a control loop. It is a core subsystem of embedded and robotic control architectures.
