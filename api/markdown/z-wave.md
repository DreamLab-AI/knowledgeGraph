- ### Definition
  - [[Z Wave]] is a [[wireless protocol]] operating in the sub-GHz band, forming [[mesh networking]] topologies for [[smart home]] and [[home automation]] use cases.
  - Governed by the Z-Wave Alliance, it prioritises interoperability across device manufacturers and supports up to 232 nodes per network.
  - Its sub-GHz operation gives it better wall-penetration characteristics compared to 2.4 GHz protocols such as [[Zigbee]] and [[Wi-Fi]].

- ### Overview
  - Z-Wave emerged in the early 2000s and became one of the dominant smart home wireless standards.
  - The protocol uses source routing where the controller calculates paths through the mesh.
  - Security S2 framework (introduced 2017) provides AES-128 encryption and protects against replay and man-in-the-middle attacks.
  - Silicon Labs acquired the Z-Wave IP portfolio and now serves as the primary chipset vendor.

- ### Key aspects
  - Sub-GHz frequency: 868 MHz (EU), 908 MHz (US), 919 MHz (AU) — avoids congested 2.4 GHz band.
  - Mesh range: up to ~30 metres per hop, typically 4 hops maximum.
  - Low power consumption enabling battery-operated sensors and actuators.
  - Mandatory interoperability certification by Z-Wave Alliance.
  - Z-Wave Long Range (ZWAVE-LR) extends coverage to over 1 km.

- ### Mechanisms
  - Nodes act as repeaters in the mesh, relaying packets on behalf of other nodes.
  - Network Management Interface (NMI) standardises controller APIs.
  - S2 security framework uses Elliptic Curve Diffie-Hellman for key exchange and AES-128-CCM for message encryption.
  - SmartStart provisioning via QR code simplifies device onboarding.

- ### Applications
  - Lighting control and scene management in residential and commercial buildings.
  - Door locks, garage openers, and access control systems.
  - HVAC and thermostat control.
  - Security sensors: door/window sensors, motion detectors, smoke alarms.
  - Energy monitoring and smart plugs.

- ### Relationships
  - contrastsWith:: [[Zigbee]]
  - contrastsWith:: [[Bluetooth Low Energy]]
  - contrastsWith:: [[Thread Protocol]]
  - implements:: [[Mesh Networking]]
  - implements:: [[Wireless Protocol]]
  - uses:: [[Encryption]]
  - enables:: [[Smart Home]]
  - enables:: [[Home Automation]]
  - relatedTo:: [[Lpwan]]
  - relatedTo:: [[Industrial IoT]]
  - standardizedBy:: [[Standards]]

- ### Provenance
  - updated:: 2026-06-15