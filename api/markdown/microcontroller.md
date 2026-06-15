- ### Definition
  - A microcontroller is a single-chip [[Hardware Component]] integrating a [[Processor]], [[Memory]] and input/output peripherals to run dedicated control logic. It executes [[Firmware]] in real time to read a [[Sensor]] and drive an [[Actuator]], forming the core of embedded and robotic devices.

- ### Overview
  - Microcontrollers trade raw computational power for integration, low cost and low power: everything needed to control a small system is on one chip, so the device can run for years on modest energy.
  - They are programmed with firmware that interacts directly with peripherals such as timers, analogue-to-digital converters, pulse-width-modulation generators and serial interfaces, giving precise, deterministic control over hardware.
  - Because their behaviour is predictable and their resources constrained, microcontrollers are typically programmed against the bare metal or a lightweight real-time operating system rather than a full general-purpose OS.

- ### Key aspects
  - An on-chip processor core executes the control program directly from integrated flash memory.
  - Built-in peripherals handle timing, analogue sensing, digital I/O and communication buses.
  - Deterministic, real-time execution allows tight control loops for sensing and actuation.
  - Low power modes let the device sleep between events to conserve energy.

- ### Applications
  - Robotics control loops driving motors, servos and sensors.
  - Internet-of-things endpoints that sense, process and report data.
  - Appliance, automotive and industrial embedded controllers.
  - Wearables and battery-powered devices needing long operating life.

- ### Relationships
  - subClassOf:: [[Hardware Component]]
  - hasPart:: [[Processor]]
  - hasPart:: [[Memory]]
  - hasPart:: [[Non-Volatile Memory]]
  - requires:: [[Firmware]]
  - uses:: [[Real-Time Operating System]]
  - supports:: [[Sensor]]
  - supports:: [[Actuator]]
  - enables:: [[Embedded System]]
  - enables:: [[IoT Device]]
  - partOf:: [[Embedded System]]
  - dependsOn:: [[Hardware]]
  - contrastsWith:: [[System-on-Chip]]
  - relatedTo:: [[Motor Driver]]
  - relatedTo:: [[Edge Computing]]
  - relatedTo:: [[Hardware Component]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation