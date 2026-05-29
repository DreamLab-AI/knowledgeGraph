- ### Definition
  - The Internet of Things (IoT) is a distributed computing paradigm comprising physical objects embedded with sensors, actuators, microcontrollers, and wireless communication modules that collect, exchange, and act upon data autonomously over IP networks. IoT systems span a hierarchy from constrained end-devices through edge gateways to cloud analytics platforms, and rely on lightweight protocols such as MQTT, CoAP, and AMQP designed for low-bandwidth, high-latency, or lossy network conditions. IoT architectures underpin smart manufacturing, precision agriculture, smart-city infrastructure, and industrial automation applications.

- ### Semantic Classification
  - owl-class:: internet-of-things:Internet of Things
  - owl-role:: Concept

- ### Relationships
  - uses [[MQTT]]
  - uses [[Sensor]]
  - enables [[Edge Computing]]
  - enables [[Telemetry & Analytics]]
  - relatedTo [[Embedded Systems]]
  - relatedTo [[Sensor Data]]

- ### Content
  - IoT systems are characterised by large device populations (billions of endpoints globally), heterogeneous hardware, and constrained resources in terms of compute, memory, and battery life. Communication protocols are chosen to balance power budget against reliability and latency: MQTT over TCP/TLS is widely used for reliable device-to-cloud messaging; CoAP over UDP is preferred for constrained devices that cannot maintain persistent TCP connections; and Bluetooth Low Energy (BLE) and Zigbee serve short-range wireless mesh topologies.
  - Edge computing complements cloud-centric IoT architectures by pushing computation and data filtering closer to the source, reducing latency and bandwidth costs. Edge gateways running lightweight runtimes (e.g., Azure IoT Edge, AWS Greengrass) can execute local inference models for anomaly detection or control logic without round-tripping to the cloud. This is particularly critical in industrial IoT (IIoT) scenarios where deterministic real-time response is required.
  - Security is a structural challenge in IoT: constrained devices often cannot run full TLS stacks or receive firmware updates, creating large attack surfaces. Standards bodies including ETSI (ETSI EN 303 645), NIST, and the UK's DCMS have issued baseline security requirements for consumer IoT devices. Device management protocols such as LwM2M (Lightweight M2M) and the OMA DM standard address remote provisioning, monitoring, and over-the-air firmware updates across diverse IoT fleets.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z