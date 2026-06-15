- ### Definition
  - Firmware is the low-level software held in non-volatile memory that controls a hardware device, sitting between [[Hardware]] and higher software within [[Embedded Systems]]. It typically runs on a [[Microcontroller]] and is maintained through an [[Over-the-Air Update]].

- ### Overview
  - Firmware provides the persistent, device-specific logic that brings hardware to life: initialising peripherals, managing power, exposing functions and, in simple devices, constituting the entire software stack. It is stored in flash, ROM or other non-volatile memory so it survives power cycles.
  - Because it is tightly coupled to particular hardware, firmware bridges the gap between bare silicon and any operating system or application that runs above it, and is a frequent target of security hardening and update governance.

- ### Key aspects
  - The bootloader is the first code to execute, initialising the system and optionally validating and loading newer firmware images.
  - Device drivers within firmware translate generic requests into hardware-specific register operations.
  - Hardware abstraction layers let higher software interact with components without knowing their electrical details.
  - Secure and signed update mechanisms protect integrity and allow defect and vulnerability remediation in the field.

- ### Applications
  - Microcontrollers and embedded controllers in appliances, vehicles and industrial equipment.
  - Peripherals such as storage drives, network cards and printers.
  - Internet-of-things devices requiring remote update and management.
  - Battery management, sensor and actuator controllers.

- ### Relationships
  - subClassOf:: [[Embedded Systems]]
  - hasPart:: [[Bootloader]]
  - hasPart:: [[Device Driver]]
  - requires:: [[Microcontroller]]
  - requires:: [[Non-Volatile Memory]]
  - enables:: [[Hardware Abstraction]]
  - enables:: [[Device Functionality]]
  - uses:: [[Over-the-Air Update]]
  - supports:: [[IoT Device]]
  - supports:: [[Internet of Things]]
  - dependsOn:: [[Hardware]]
  - partOf:: [[Computer Hardware]]
  - relatedTo:: [[Operating System]]
  - relatedTo:: [[Real-Time Operating System]]
  - contrastsWith:: [[Application Software]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation