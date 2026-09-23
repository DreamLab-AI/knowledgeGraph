---
okf_version: "0.2"
type: Class
title: Robot Hardware
resource: urn:ngm:class:robot-hardware
domain: robotics
description: "RobotHardware is the integrated electromechanical substrate of robotic systems encompassing all physical components required for autonomous or semi-autonomous operation: compute platforms (NVIDIA Jetson Orin NX/AGX, Raspberry Pi 5, BeagleBone AI-64), real-time microcontrollers (STM32H7, Teensy 4...."
maturity: established
quality: 0.52
is-a:
  - urn:ngm:class:robo-actuation-and-control
  - urn:ngm:class:mobile-robot-platform
  - urn:ngm:class:robotics-platform
  - urn:ngm:class:embedded-systems
  - urn:ngm:class:mechatronics
  - urn:ngm:class:industrial-robot
hasPart:
  - urn:ngm:class:actuator
  - urn:ngm:class:battery-management-system
  - urn:ngm:class:controller
  - urn:ngm:class:motor-driver
  - urn:ngm:class:sensor-suite
  - urn:ngm:class:controller
  - urn:ngm:class:wiring-harness
  - urn:ngm:class:power-distribution-board
  - urn:ngm:class:communication-bus
requires:
  - urn:ngm:class:can-fd-bus
  - urn:ngm:class:ether-cat
  - urn:ngm:class:imu
  - urn:ngm:class:motor-encoder
  - urn:ngm:class:real-time-operating-system
  - urn:ngm:class:ros-2
  - urn:ngm:class:lipo-battery
  - urn:ngm:class:imu
enables:
  - urn:ngm:class:autonomous-operation
  - urn:ngm:class:robot-perception
  - urn:ngm:class:kinematics-model
  - urn:ngm:class:motion-control
  - urn:ngm:class:navigation
  - urn:ngm:class:proprioceptive-sensor
  - urn:ngm:class:teleoperation
dependsOn:
  - urn:ngm:class:control-algorithm
  - urn:ngm:class:real-time-scheduling
  - urn:ngm:class:power-electronics
  - urn:ngm:class:mechanical-component
  - urn:ngm:class:thermal-management
implements:
  - urn:ngm:class:can-fd-protocol
  - urn:ngm:class:dds-middleware
  - urn:ngm:class:ether-cat
  - urn:ngm:class:micro-ros
  - urn:ngm:class:ros2-control-framework
  - urn:ngm:class:urdf
  - urn:ngm:class:ether-cat
  - urn:ngm:class:urdf
contrastsWith:
  - urn:ngm:class:simulation-environment
  - urn:ngm:class:digital-twin
  - urn:ngm:class:software-robot
  - urn:ngm:class:virtual-agent
uses:
  - urn:ngm:class:fpga
  - urn:ngm:class:nvidia-corporation-jetson
  - urn:ngm:class:arm-cortex-m
  - urn:ngm:class:stm32-microcontroller
  - urn:ngm:class:fpga
  - urn:ngm:class:ethernet-switch
supports:
  - urn:ngm:class:exoskeleton
  - urn:ngm:class:ground-robot
  - urn:ngm:class:hydraulic-actuator
  - urn:ngm:class:industrial-robot
  - urn:ngm:class:mobile-robot-platform
  - urn:ngm:class:surgical-robot
standardizedBy:
  - urn:ngm:class:ether-cat
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
  - urn:ngm:class:iso-10218-robot-safety
  - urn:ngm:class:ros-rep
  - urn:ngm:class:iec-61800-adjustable-speed-electrical-power-drive-systems
  - urn:ngm:class:ros-rep
  - urn:ngm:class:ether-cat
  - urn:ngm:class:cia-301-canopen-standard
relatedTo:
  - urn:ngm:class:edge-computing
  - urn:ngm:class:hardware-and-edge
  - urn:ngm:class:model-based-control
  - urn:ngm:class:nvidia-corporation-omniverse-platform
  - urn:ngm:class:predictive-maintenance
---

# Robot Hardware

RobotHardware is the integrated electromechanical substrate of robotic systems encompassing all physical components required for autonomous or semi-autonomous operation: compute platforms (NVIDIA Jetson Orin NX/AGX, Raspberry Pi 5, BeagleBone AI-64), real-time microcontrollers (STM32H7, Teensy 4....
