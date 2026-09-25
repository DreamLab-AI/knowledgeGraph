Firmware is the low-level software stored in non-volatile memory that provides the control, monitoring and data-handling logic for a hardware device. It sits between the physical hardware and higher-level software, initialising components, exposing device functions and often forming the only software a simple device runs. Firmware is typically tightly coupled to specific hardware and is updated through controlled mechanisms such as over-the-air updates. It is foundational to embedded systems, peripherals and connected devices.

### Overview

- Firmware provides the persistent, device-specific logic that brings hardware to life: initialising peripherals, managing power, exposing functions and, in simple devices, constituting the entire software stack. It is stored in flash, ROM or other non-volatile memory so it survives power cycles.
- Because it is tightly coupled to particular hardware, firmware bridges the gap between bare silicon and any operating system or application that runs above it, and is a frequent target of security hardening and update governance.

### Key aspects

- The bootloader is the first code to execute, initialising the system and optionally validating and loading newer firmware images.
- Device drivers within firmware translate generic requests into hardware-specific register operations.
- Hardware abstraction layers let higher software interact with components without knowing their electrical details.
- Secure and signed update mechanisms protect integrity and allow defect and vulnerability remediation in the field.

### Applications

- Microcontrollers and embedded controllers in appliances, vehicles and industrial equipment.
- Peripherals such as storage drives, network cards and printers.
- Internet-of-things devices requiring remote update and management.
- Battery management, sensor and actuator controllers.

### Provenance

