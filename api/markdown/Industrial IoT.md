public:: true

# industrial iot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8db3db9533ef49f996f27dbe90b381569d49d4cfdc42abe866203b4070c69c69",
  "@type": "Page",
  "vc:slug": "industrial-io-t",
  "title": "industrial iot",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:industrial-io-t",
  "@type": "Class",
  "label": "Industrial IoT",
  "definition": "Industrial IoT (IIoT) is the application of Internet of Things technologies to industrial operational environments, connecting sensors, actuators, programmable logic controllers, and edge gateways to analytics platforms and supervisory control systems to enable real-time operational visibility, process optimisation, predictive maintenance, and remote asset management. IIoT bridges historically isolated operational technology (OT) networks—including SCADA systems, distributed control systems (DCS), and fieldbus networks—with IT infrastructure, creating a converged cyber-physical stack requiring rigorous security governance under frameworks such as IEC 62443. Key application-layer standards include OPC UA (IEC 62541), MQTT (ISO/IEC 20922), AMQP, and time-sensitive networking extensions (IEEE 802.1 TSN) for deterministic Ethernet.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:internet-of-things",
      "label": "Internet of Things"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"},
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:programmable-logic-controller", "label": "Programmable Logic Controller"},
      {"@id": "urn:ngm:class:edge-gateway", "label": "Edge Gateway"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:opc-ua", "label": "OPC UA"},
      {"@id": "urn:ngm:class:mqtt", "label": "MQTT"},
      {"@id": "urn:ngm:class:time-sensitive-networking", "label": "Time-Sensitive Networking"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:predictive-maintenance", "label": "Predictive Maintenance"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"},
      {"@id": "urn:ngm:class:industrial-automation", "label": "Industrial Automation"},
      {"@id": "urn:ngm:class:condition-monitoring", "label": "Condition Monitoring"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:operational-technology", "label": "Operational Technology"},
      {"@id": "urn:ngm:class:scada", "label": "SCADA"},
      {"@id": "urn:ngm:class:cybersecurity", "label": "Cybersecurity"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cloud-computing", "label": "Cloud Computing"},
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iec-62443", "label": "IEC 62443"},
      {"@id": "urn:ngm:class:iec-62541", "label": "IEC 62541"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:consumer-iot", "label": "Consumer IoT"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cyber-physical-systems", "label": "Cyber-Physical Systems"},
      {"@id": "urn:ngm:class:industry-4-0", "label": "Industry 4.0"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:iiot", "label": "IIoT"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Industrial IoT (IIoT) is the systematic integration of [[Internet of Things]] connectivity, sensing, and data-processing capabilities into industrial operational environments—factories, power grids, pipelines, mines, and logistics facilities—to unlock real-time operational insight, autonomous process control, and predictive asset management. Unlike [[Consumer IoT]], IIoT deployments operate under strict requirements for determinism, safety integrity, and uptime, and must bridge the historically separate worlds of [[Operational Technology]] (OT) and IT. The resulting cyber-physical stack enables [[Industry 4.0]] transformation by feeding granular telemetry from physical processes into [[Machine Learning]] models, [[Digital Twin]] simulations, and enterprise decision systems.

- ### Overview
  - IIoT emerged as a convergence of falling sensor costs, pervasive IP networking, and maturing cloud analytics. It extends TCP/IP connectivity into field devices—[[Sensor]], [[Actuator]], [[Programmable Logic Controller]] (PLC), distributed control systems, and [[SCADA]]—that previously communicated only over proprietary fieldbuses (PROFIBUS, Modbus, EtherNet/IP).
  - The economic case rests on four pillars: (1) operational efficiency through real-time process visibility, (2) asset lifecycle extension via [[Predictive Maintenance]], (3) quality improvement through in-line measurement and closed-loop feedback, and (4) new product-as-a-service revenue models enabled by remote monitoring.
  - IIoT is foundational to [[Industry 4.0]], the German-led fourth industrial revolution paradigm encompassing cyber-physical production systems, mass customisation, and autonomous factories.
  - Safety and security are first-class concerns. The convergence of OT with internet-connected infrastructure expands the attack surface—[[SCADA]] and PLC vulnerabilities have been exploited in real incidents (e.g., Stuxnet, Ukraine power grid attacks)—making [[Cybersecurity]] governance under [[IEC 62443]] a prerequisite.

- ### Key Components
  - #### Field Layer (Level 0–1)
    - [[Sensor]] — temperature, pressure, vibration, flow, current, vision sensors producing raw telemetry
    - [[Actuator]] — valves, drives, relays, and robotic joints controlled by supervisory systems
    - [[Programmable Logic Controller]] (PLC) — real-time scan-cycle controllers executing ladder logic or structured text
    - Distributed Control System (DCS) — process-industry controllers managing continuous production (refineries, power stations)
    - Remote Terminal Unit (RTU) — rugged field controllers for geographically dispersed assets (pipelines, substations)
  - #### Edge Layer (Level 2)
    - [[Edge Computing]] platforms (AWS IoT Greengrass, Azure IoT Edge, Eclipse Kura) aggregate, filter, and locally analyse data before upstream transmission
    - [[Edge Gateway]] — protocol translation between legacy fieldbus and IP, time-stamping, local buffering
    - [[Time-Sensitive Networking]] (TSN, IEEE 802.1AS/BA/Qbv) — deterministic sub-millisecond latency over standard Ethernet for closed-loop control
    - OPC UA Pub/Sub over TSN enables unified field-to-cloud data pipelines without proprietary middleware
  - #### Communication Protocols
    - [[OPC UA]] (IEC 62541) — unified information model, security model, and transport for industrial data exchange; the de-facto interoperability standard
    - [[MQTT]] (ISO/IEC 20922) — lightweight publish-subscribe broker protocol for constrained devices and high-volume telemetry
    - AMQP 1.0 — reliable message queuing for enterprise integration
    - PROFINET / EtherNet/IP — deterministic Ethernet protocols for motion control and factory automation
    - 5G / LTE-M / NB-IoT — wireless connectivity for mobile assets and geographically dispersed infrastructure
  - #### Cloud and Analytics Layer
    - [[Cloud Computing]] platforms (AWS IoT Core, Azure IoT Hub, Google Cloud IoT) provide device management, message routing, and data lake ingestion
    - [[Machine Learning]] inference on time-series telemetry for anomaly detection, [[Predictive Maintenance]], and process optimisation
    - [[Digital Twin]] platforms (ANSYS Twin Builder, Siemens Teamcenter, Azure Digital Twins) mirror physical assets in real time
    - Time-series databases (InfluxDB, TimescaleDB, OSIsoft PI) store high-frequency sensor streams efficiently
  - #### Security and Identity
    - [[Cybersecurity]] frameworks: [[IEC 62443]] (industrial automation and control systems security), NIST SP 800-82 (OT security guide)
    - Device identity via X.509 certificates or TPM-backed keys; mutual TLS for broker connections
    - Network segmentation (Purdue model / ISA-95 zones and conduits) separating OT from corporate IT
    - [[Operational Technology]] asset inventory and vulnerability management (Claroty, Dragos, Nozomi Networks)

- ### Applications and Use Cases
  - #### Manufacturing
    - Connected machine tools report spindle loads, coolant flow, and tool wear to [[Predictive Maintenance]] systems, reducing unplanned downtime
    - Statistical process control (SPC) with in-line measurement sensors feeds real-time quality dashboards
    - [[Digital Twin]] models of assembly lines simulate throughput bottlenecks before physical changes
  - #### Energy and Utilities
    - Smart grid substations transmit protection relay data via IEC 61850 GOOSE messages for sub-cycle fault isolation
    - Wind turbines stream vibration, pitch angle, and power output for fleet-level performance analytics
    - Oil and gas pipelines deploy RTUs and acoustic sensors for leak detection and integrity monitoring
  - #### Mining and Extraction
    - Autonomous haulage systems integrate GPS, LiDAR, and IIoT telemetry to run driverless trucks in open-cut mines
    - Underground environmental monitoring (gas, particulate, temperature) protects worker safety
  - #### Agriculture (AgriTech / IIoT overlap)
    - Precision irrigation combines soil moisture sensors with weather APIs and actuator control
    - Livestock monitoring with wearable sensors tracking health biomarkers
  - #### Logistics and Cold Chain
    - Refrigerated container monitoring uses MQTT-connected sensors to ensure temperature compliance across multimodal journeys
    - Asset tracking in warehouses via RFID and BLE beacons feeds ERP and WMS systems
  - #### Predictive Maintenance (cross-sector)
    - Vibration spectrum analysis (FFT-based) identifies bearing defects weeks before failure
    - Motor current signature analysis (MCSA) detects rotor bar faults without physical sensor access
    - [[Machine Learning]] models (LSTM, isolation forest, autoencoders) trained on historical failure data predict remaining useful life (RUL)

- ### Relationships
  - hasPart:: [[Sensor]]
  - hasPart:: [[Actuator]]
  - hasPart:: [[Programmable Logic Controller]]
  - hasPart:: [[Edge Gateway]]
  - uses:: [[Edge Computing]]
  - uses:: [[OPC UA]]
  - uses:: [[MQTT]]
  - uses:: [[Time-Sensitive Networking]]
  - enables:: [[Predictive Maintenance]]
  - enables:: [[Digital Twin]]
  - enables:: [[Industrial Automation]]
  - enables:: [[Condition Monitoring]]
  - requires:: [[Operational Technology]]
  - requires:: [[SCADA]]
  - requires:: [[Cybersecurity]]
  - dependsOn:: [[Cloud Computing]]
  - dependsOn:: [[Network Protocol]]
  - standardizedBy:: [[IEC 62443]]
  - standardizedBy:: [[IEC 62541]]
  - contrastsWith:: [[Consumer IoT]]
  - relatedTo:: [[Cyber-Physical Systems]]
  - relatedTo:: [[Industry 4.0]]
  - bridges-to:: [[Machine Learning]]
  - bridges-to:: [[Digital Twin]]

- ### Standards and Governance
  - **IEC 62443** — multi-part standard for industrial automation and control system (IACS) cybersecurity; defines security levels (SL 1–4) and zone/conduit architecture
  - **IEC 62541 (OPC UA)** — unified architecture for industrial interoperability; Part 14 defines Pub/Sub over MQTT and AMQP
  - **ISO/IEC 20922 (MQTT 3.1.1)** / MQTT 5.0 (OASIS) — messaging protocol specification
  - **IEEE 802.1 TSN** — suite of standards (802.1AS, 802.1Qbv, 802.1CB) enabling deterministic Ethernet for IIoT
  - **IEC 61850** — communication standard for power utility automation (substations)
  - **ISA-95 / IEC 62264** — enterprise-control system integration model defining the Purdue reference architecture
  - **NIST SP 800-82** — US guide to OT security
  - **IIOT Consortium** (Industrial Internet Consortium / IIC, now part of OpenFog / Object Management Group) — reference architectures and testbeds; publishes IIC Industrial Internet Reference Architecture (IIRA)
  - **Platform Industrie 4.0** (Germany) and **IEC SyC Smart Manufacturing** — national and international standards coordination for IIoT interoperability
  - Sector-specific compliance: NERC CIP (energy), ATEX/IECEx (hazardous area), ISA 84 / IEC 61511 (functional safety)

- ### Security Considerations
  - OT/IT convergence introduces IT-style threats (ransomware, supply-chain attacks) into environments designed for availability and safety, not confidentiality
  - The **Purdue Model** (ISA-99 / ISA-95) provides a hierarchical segmentation reference; modern implementations supplement it with zero-trust micro-segmentation
  - Legacy PLCs and RTUs often lack authentication or encryption; compensating controls (unidirectional data diodes, application-aware firewalls) are common
  - Incident response in OT must account for safety implications—patching or rebooting a controller may require process shutdown
  - Threat intelligence from OT-specific vendors (Dragos, Claroty, Nozomi) augments generic SIEM platforms with asset-awareness

- ### Provenance
  - sources:: IEC 62443-1-1:2009; IEC 62541 OPC UA specification; IEEE 802.1 TSN working group; ISA-95/IEC 62264; NIST SP 800-82 Rev.3; IIC Industrial Internet Reference Architecture v1.9
  - updated:: 2026-06-13
