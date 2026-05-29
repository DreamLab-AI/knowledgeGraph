- ### Definition
  - Industrial IoT (IIoT) is the extension of Internet of Things technologies into industrial operational environments, connecting sensors, actuators, controllers, and edge gateways to cloud analytics and control systems in order to enable real-time operational visibility, process optimisation, predictive maintenance, and remote asset management. IIoT integrates historically isolated operational technology (OT) networks—such as SCADA systems and programmable logic controllers (PLCs)—with IT infrastructure, requiring careful management of the resulting cyber-physical attack surface. Key communication standards include OPC UA, MQTT, and AMQP.

- ### Semantic Classification
  - owl-class:: industrial-io-t:Industrial IoT
  - owl-role:: Concept

- ### Relationships
  - uses [[Sensor]]
  - uses [[Edge Computing]]
  - enables [[Predictive Maintenance]]
  - enables [[Digital Twin]]
  - relatedTo [[IndustrialAutomation]]
  - relatedTo [[Cyber Physical Systems]]

- ### Content
  - IIoT architectures typically follow a three-tier model: field devices (sensors, actuators, PLCs) at the edge, an edge computing layer that aggregates and filters data locally, and a cloud or data centre tier that performs heavy analytics and hosts control applications. The edge layer is critical for low-latency closed-loop control and for reducing the data volumes transmitted over constrained uplinks. Platforms such as AWS IoT Greengrass, Azure IoT Edge, and open-source Eclipse Kura implement this edge intelligence layer.
  - OPC UA (IEC 62541) provides the dominant application-layer protocol for IIoT, offering a unified information model, security mechanisms, and publish-subscribe transport over TCP/IP. MQTT, standardised as ISO/IEC 20922, serves as a lightweight publish-subscribe protocol suited to constrained devices. Time-Sensitive Networking (TSN, IEEE 802.1 series) extensions to Ethernet address deterministic latency requirements in manufacturing automation.
  - Predictive maintenance is a primary economic driver of IIoT investment: vibration, temperature, and current sensors feed machine-learning models that predict bearing failures, pump cavitation, and motor degradation days or weeks before failure, reducing unplanned downtime. Digital Twin representations of industrial assets ingest IIoT telemetry to enable simulation-based what-if analysis. Security standards such as IEC 62443 address the specific OT/IT convergence threat landscape in IIoT deployments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z