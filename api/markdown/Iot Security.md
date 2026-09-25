IoT security is the discipline of protecting Internet of Things devices, the networks they connect to, and the data they generate and exchange. It addresses the constrained compute, intermittent connectivity, and large attack surface characteristic of embedded sensors and actuators, applying authentication, encryption, secure boot, and lifecycle patch management. Because IoT devices are often physically exposed and deployed at scale, weak credentials and unpatched firmware are recurrent risks that can be conscripted into botnets.

- [[Iot Security]] is a branch of [[Network Security]] that protects [[IoT Device]] fleets, their links, and their data using [[Encryption]], [[Secure Boot]], and [[Authentication]].

### Overview

- IoT security extends classic security controls to resource-constrained, physically exposed embedded devices.
- Device fleets are heterogeneous and long-lived, so identity, key management, and update mechanisms must scale to millions of endpoints.
- Default or hard-coded credentials and unpatched firmware are the most exploited weaknesses, frequently leading to botnet conscription.
- Defence spans the device, the network transport, the cloud backend, and the management lifecycle.

### Mechanisms

- Device identity: per-device keys, certificates, and secure elements anchor trust.
- Secure boot and firmware signing prevent unauthorised code from running.
- Transport protection via TLS, mutual TLS, or DTLS secures telemetry and commands.
- Lifecycle management: provisioning, over-the-air updates, and decommissioning.
- Monitoring detects anomalous device behaviour indicative of compromise.

### Applications

- Securing industrial control and OT sensor networks.
- Protecting smart-home and consumer devices from hijacking.
- Hardening connected medical and automotive systems.
- Defending smart-city infrastructure against large-scale attacks.

### Provenance

