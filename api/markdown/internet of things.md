The Internet of Things (IoT) is a distributed computing paradigm in which physical objects embedded with sensors, actuators, microcontrollers, and wireless communication modules collect, exchange, and act upon data autonomously over IP networks. IoT deployments span a layered architecture from resource-constrained end-devices through edge gateways to cloud analytics platforms, relying on lightweight protocols such as MQTT, CoAP, AMQP, and LwM2M designed for low-bandwidth, high-latency, or lossy network environments. The paradigm encompasses consumer IoT (smart home devices, wearables), Industrial IoT (IIoT) for manufacturing and critical infrastructure, and urban-scale deployments in smart cities and precision agriculture. Security, interoperability, and device lifecycle management are defining engineering challenges across all IoT segments.

### Overview

- IoT extends conventional internet connectivity to everyday physical objects — manufacturing equipment, household appliances, environmental monitors, agricultural sensors, medical devices, and urban infrastructure — enabling them to collect and exchange data without direct human intervention.
- The defining characteristics of IoT deployments include:
  - **Scale**: billions of concurrently connected endpoints with highly heterogeneous hardware and software stacks.
  - **Constraint**: end-devices are often severely limited in processing power, RAM, flash storage, and battery capacity, requiring purpose-built protocols and lightweight runtimes.
  - **Latency diversity**: some applications tolerate high latency (agricultural soil monitoring); others require deterministic sub-millisecond response (industrial safety interlocks).
  - **Heterogeneity**: multiple wireless standards, operating systems, and hardware architectures co-exist within a single deployment.
- IoT is categorised into several broad verticals:
  - **Consumer IoT**: smart speakers, thermostats, wearables, connected appliances.
  - **Industrial IoT (IIoT)**: factory automation, predictive maintenance, asset tracking in manufacturing and logistics.
  - **Smart City IoT**: traffic management, environmental monitoring, public lighting, waste management.
  - **Healthcare IoT**: remote patient monitoring, infusion pump management, smart implants.
  - **Agricultural IoT**: precision farming, livestock tracking, irrigation automation.
- IoT is positioned at the convergence of [[Embedded System]], [[Network Infrastructure]], [[Cloud Computing]], and [[Data]] analytics, and increasingly integrates with [[Machine Learning]] at the edge for real-time inference without cloud round-trips.

### Key Components

#### End-Device Layer

- **[[Sensor]]s**: transduce physical phenomena (temperature, pressure, light, motion, gas concentration) into digital signals.
- **[[Actuator]]s**: translate digital commands into physical action (motors, relays, solenoids, displays).
- **[[Microcontroller]]s**: low-power processing units (ARM Cortex-M, RISC-V, ESP32) that run device firmware, manage peripherals, and handle communication stacks.
- **Wireless radios**: Bluetooth Low Energy (BLE), Zigbee (IEEE 802.15.4), Z-Wave, LoRaWAN, NB-IoT, LTE-M, [[5G]] depending on range and power budget.

#### Gateway Layer

- **[[IoT Gateway]]s**: protocol-translation devices that bridge heterogeneous short-range radio protocols (BLE, Zigbee) to IP-based backhaul (Ethernet, Wi-Fi, cellular). Examples include AWS IoT Greengrass, Azure IoT Edge, and open-source options like Eclipse Kura.
- Gateways may perform local [[Edge Computing]] — filtering, aggregation, lightweight [[Machine Learning]] inference — before forwarding data upstream.

#### Connectivity Protocols

- **[[MQTT]]** (Message Queuing Telemetry Transport): publish/subscribe over TCP/TLS; OASIS standard; widely used for reliable device-to-cloud messaging.
- **[[CoAP]]** (Constrained Application Protocol): REST-like over UDP; RFC 7252; suited for constrained devices unable to maintain persistent TCP connections.
- **AMQP**: Advanced Message Queuing Protocol; used in enterprise IoT messaging buses.
- **LwM2M** (Lightweight Machine-to-Machine): OMA standard for device management (bootstrap, provisioning, firmware update, monitoring) over CoAP.
- **HTTP/2, WebSockets**: used at gateway-to-cloud tier where resource constraints are relaxed.

#### Platform Layer

- **Cloud IoT platforms**: AWS IoT Core, Azure IoT Hub, Google Cloud IoT (now Pub/Sub + Vertex AI), IBM Watson IoT — provide device registry, message routing, rule engines, and stream processing.
- **[[Telemetry and Analytics]]**: time-series databases (InfluxDB, TimescaleDB), stream processors (Apache Kafka, Apache Flink), and dashboards (Grafana) aggregate and visualise device telemetry.
- **[[Device Management]]**: over-the-air (OTA) firmware updates, certificate rotation, remote diagnostics, and fleet provisioning at scale.

#### Security Layer

- **[[Transport Layer Security]]** / DTLS: transport-layer encryption; DTLS preferred for CoAP over UDP.
- **Hardware Security Modules (HSM)** / Trusted Platform Modules (TPM): secure key storage and attestation for device identity.
- **Certificate-based authentication**: X.509 device certificates provisioned at manufacture; rotated via OTA.
- **Zero-trust network segmentation**: IoT devices placed in dedicated VLANs or micro-segmented network zones to limit lateral movement.

### Applications and Use Cases

#### Industrial IoT (IIoT)

- **[[Predictive Maintenance]]**: vibration and thermal sensors on rotating machinery feed ML models that predict bearing failure days in advance, reducing unplanned downtime.
- **[[Industrial Automation]]**: programmable logic controllers (PLCs) and distributed control systems (DCS) increasingly expose IoT interfaces for integration with MES and ERP systems.
- **Asset tracking**: RFID, BLE beacons, and GPS trackers applied to tools, pallets, and vehicles in logistics and warehousing.
- **Energy management**: smart meters and sub-meters in factories enable granular energy consumption monitoring and demand-response participation.

#### Smart Buildings and Cities

- **[[Smart City]]**: connected traffic signals, parking sensors, environmental air-quality monitors, and public transit trackers feed city operations dashboards.
- **HVAC and lighting automation**: occupancy sensors and BAS (building automation systems) optimise energy use in commercial buildings.
- **Smart metering**: electricity, gas, and water AMI (Advanced Metering Infrastructure) deployments automate billing and enable grid demand response.

#### Healthcare

- Remote patient monitoring (RPM): wearable ECG monitors, continuous glucose monitors (CGMs), and pulse oximeters transmit vital signs to care teams.
- Smart infusion pumps: network-connected drug delivery with real-time dose verification against pharmacy formularies.
- Hospital asset tracking: RFID- and BLE-tagged equipment reduces search time and theft in clinical environments.

#### Agriculture

- Soil moisture, pH, and nutrient sensors automate precision irrigation and fertiliser application.
- Drone-based multispectral imaging feeds crop health dashboards integrated with IoT ground sensors.
- Livestock monitoring: smart ear tags track location, temperature, and activity patterns to detect illness early.

#### Consumer IoT

- Smart thermostats (e.g., Nest, Ecobee) learn occupancy patterns and optimise energy use.
- Connected security cameras, doorbells, and locks form residential security ecosystems.
- Wearables (smartwatches, fitness trackers) capture biometric streams synchronised to health platforms.

### Standards and Governance

- **ETSI EN 303 645**: Cyber Security for Consumer IoT — baseline security requirements (no default passwords, secure update mechanisms, minimal attack surface, etc.). Adopted into UK PSTI Act 2022.
- **ISO/IEC 30141**: IoT Reference Architecture — defines a conceptual reference model (CRM) for IoT systems.
- **IEEE 802.15.4**: PHY and MAC standard underpinning Zigbee, Thread, and 6LoWPAN wireless mesh networks.
- **RFC 7252 (CoAP)**, **RFC 7228 (Terminology for Constrained Nodes)**, **RFC 9176 (CoRE Resource Directory)**: IETF standards for constrained IoT protocol stack.
- **OMA LwM2M v1.2**: device management protocol for IoT fleets.
- **NIST SP 800-213**: IoT cybersecurity guidance for federal systems (USA).
- **Matter (formerly Project CHIP)**: Connectivity Standards Alliance (CSA) application-layer standard for smart-home interoperability over Thread and Wi-Fi; supported by Apple, Google, Amazon, and Samsung.
- **[[5G]] NR (NB-IoT / LTE-M)**: 3GPP standards for cellular IoT providing deep indoor coverage and ultra-low-power operation for wide-area IoT.
- **LoRaWAN**: LoRa Alliance specification for long-range, low-power wide-area network (LPWAN) IoT connectivity.
- Standards are co-produced across **[[ETSI]]**, **[[IEEE]]**, **IETF**, **[[ITU]]**, **OMA SpecWorks**, **LoRa Alliance**, and the **Connectivity Standards Alliance**, reflecting the fragmented multi-stakeholder landscape of IoT standardisation.

### Architectural Patterns

- **Three-tier architecture**: end-device → gateway → cloud; the dominant deployment model.
- **[[Fog Computing]]**: extends cloud services to the network edge (routers, base stations) for latency-sensitive workloads — intermediate tier between device and cloud.
- **[[Edge Computing]]**: computation performed at or near the device, on embedded hardware or local servers, to reduce bandwidth consumption and enable offline operation.
- **[[Digital Twin]]**: virtual replicas of physical IoT assets that are continuously synchronised with live sensor data, enabling simulation, optimisation, and what-if analysis.
- **Event-driven architectures**: IoT systems favour event-driven messaging (MQTT topics, Kafka partitions) over request-response models to handle high-throughput asynchronous data streams.
- **[[Cyber-Physical Systems]]**: a closely related architectural paradigm emphasising tight integration between computational logic and physical process control, e.g., in autonomous vehicles and power grids.

### Security Challenges

- Large-scale IoT deployments present structural security risks: constrained devices often cannot support full TLS stacks, receive timely security patches, or store secrets securely.
- Common attack vectors include: default credential exploitation, firmware extraction and reverse engineering, insecure OTA update channels, man-in-the-middle on unencrypted MQTT sessions, and side-channel attacks on constrained hardware.
- **[[Blockchain]]** has been explored for decentralised IoT device identity and tamper-evident audit logs, though production adoption remains limited.
- **[[Machine Learning]]**-based anomaly detection is applied to IoT network traffic to identify compromised devices exhibiting unusual communication patterns.
- Zero-trust network access (ZTNA) architectures are increasingly applied to IoT segments, replacing implicit perimeter trust with continuous device and user verification.

### Current Landscape (2026)

- The connected-device base has kept scaling: IoT Analytics counts roughly 18.5 billion devices in 2024 rising to 21.1 billion in 2025, with industry estimates near 24 billion in 2026 and forecasts approaching 30 billion by the early 2030s. Global IoT market revenue is projected to cross the trillion-dollar mark in 2026 (about $864 billion in 2025 rising to an estimated $1.055 trillion).
- Matter has matured rapidly into the consumer-IoT interoperability baseline: version 1.4 (7 November 2024) added energy devices (solar, battery storage, heat pumps, water heaters, EV chargers) and the Home Router and Access Point (HRAP) class, followed by 1.4.1 (May 2025, NFC and multi-device onboarding) and 1.4.2 (11 August 2025, Certificate Revocation Lists, Access Restriction Lists and Vendor ID verification).
- Matter 1.5 (20 November 2025) was the broadest expansion yet, adding native cameras and video doorbells over WebRTC, a modular Closures framework (shades, gates, awnings), soil sensors, full TCP transport, and a standardised electrical-energy-tariff device type carrying dynamic pricing and carbon-intensity data. Governance is via the Connectivity Standards Alliance, which listed over 850 certified products by mid-2026 and nearly 900 participating companies.
- Thread 1.4 became mandatory for all new border-router certifications on 1 January 2026, standardising credential sharing so devices such as the Amazon eero 7, IKEA Dirigera and GL.iNet GL-S20 can merge previously isolated meshes into one network; Matter 1.4.2 further requires border routers to certify for Thread 1.4 and address at least 150 devices.
- Security is shifting from optional to regulated: the EU Cyber Resilience Act moves toward full roll-out imposing lifecycle security and update obligations and manufacturer liability, the US FCC Cyber Trust Mark gives consumer IoT a visible security label, and the UK PSTI Act plus ETSI EN 303 645 and ISO/IEC 27400 form a tightening compliance mesh. On the connectivity side, SGP.32 eSIM remote provisioning is maturing to simplify fleet-scale credential and lifecycle management.
- Key players consolidate around the big ecosystems (Apple Home, Google Home, Amazon Alexa, Samsung SmartThings) alongside broad vendor adoption including IKEA, Philips Hue, Aqara, Bosch, Yale, ABB and LG; IKEA in particular is driving mass adoption with sub-$10 Matter/Thread products.
- Open challenges as of 2026: fragmented and uneven ecosystem support (Matter 1.5 cameras initially work only on SmartThings), no mandated software-support lifespan, platform-dependent logging and underspecified secure storage in the Matter spec, cheap non-compliant imports falling outside regulatory scope, and the push toward hardware roots of trust (TPMs and secure elements) and AI-driven operational intelligence over raw connectivity.

### References

- 1. Institute of Internet Economics (2026). IoT – 2026 Stats and Summary Report (Mid-Year). https://instituteofinterneteconomics.org/iot-2026-stats-and-summary-report-mid-year/
- 2. Krasamo (2026). Building with Matter: Navigating the Matter Specification (up to 1.5). https://www.krasamo.com/matter-specification/
- 3. Wikipedia (2025). Matter (standard). https://en.wikipedia.org/wiki/Matter_(standard)
- 4. Smart Home Brief (2026). The Matter Smart Home 2026 Status Review. https://smarthomebrief.com/protocols-and-platforms/matter-smart-home-2026-status-review
- 5. GlobalSign (2026). IoT Security in 2026: Regulation, Standards & Trust. https://www.globalsign.com/en/blog/will-iot-security-finally-grow-up-in-2026
- 6. IoT Business News (2025). IoT in 2026: Regulatory Pressure, New Standards and the Race to Future-Proof Connectivity. https://iotbusinessnews.com/2025/12/23/iot-in-2026-regulatory-pressure-new-standards-and-the-race-to-future-proof-connectivity/

### Provenance

## Merged from IoT (needs reconciliation)
The Internet of Things (IoT) is a networked ecosystem of physical devices — sensors, actuators, microcontrollers, and embedded processors — connected via IP-based communication protocols to collect, exchange, and act upon data with minimal direct human intervention. IoT extends digital connectivity into the physical world by binding heterogeneous hardware through standardised messaging protocols such as MQTT and CoAP, gateway middleware for local aggregation, and cloud or on-premises analytics platforms. It spans consumer, industrial, agricultural, and healthcare domains, each imposing distinct constraints on power, latency, security, and regulatory compliance. The discipline integrates edge computing, machine learning inference, and digital twin modelling to close feedback loops between the physical and digital realms.

### Overview

- IoT bridges the physical and digital realms at scale, attaching computation and network capability to objects that previously had none.
- The term was coined by Kevin Ashton in 1999 in the context of RFID-linked supply chain tracking, though networked embedded control systems predated the phrase by decades in industrial automation.
- Architectural significance: IoT differs from conventional computing by operating under resource constraints (limited CPU, RAM, battery), heterogeneous radio environments, and deployment scales reaching billions of endpoints.
- Economic importance: IoT provides real-time physical-world data that enables closed-loop automation, condition-based maintenance, and data-driven supply chain optimisation across virtually every industry vertical.
- The discipline has matured from point connectivity solutions into a platform discipline encompassing device lifecycle management, over-the-air firmware updates, identity provisioning, and telemetry data pipelines.
- Security has become the dominant challenge: constrained devices often lack hardware cryptographic accelerators, firmware update paths are absent or insecure, and default credentials persist in deployed fleets.

### Key Components

- **Device Layer**
  - [[Sensor]]s — transducers converting physical phenomena (temperature, pressure, light, motion, chemical concentration) to digital signals.
  - [[Actuator]]s — electromechanical components (relays, motors, valves) that translate digital commands into physical action.
  - [[Embedded System]]s — microcontroller-based compute platforms (ARM Cortex-M, RISC-V, ESP32) that host firmware and local logic.
  - Resource-constrained MCUs operate at milliwatts for years on battery or energy harvesting, necessitating duty-cycling and compressed data formats.
- **Connectivity Layer**
  - [[LPWAN]] (Low-Power Wide-Area Network) protocols — [[LoRaWAN]], NB-IoT, LTE-M — enable kilometre-range battery-powered connectivity.
  - Short-range radios — Zigbee (IEEE 802.15.4), Z-Wave, Bluetooth Low Energy, Wi-Fi — serve indoor mesh and consumer device scenarios.
  - [[MQTT]] (Message Queuing Telemetry Transport) — lightweight publish-subscribe protocol over TCP/IP, dominant in IoT messaging.
  - [[CoAP]] (Constrained Application Protocol) — RESTful protocol for highly constrained nodes, often transported over UDP with DTLS security.
  - 5G network slicing offers ultra-reliable low-latency communications (URLLC) for industrial control and autonomous vehicle applications.
- **Gateway and Edge Layer**
  - [[IoT Gateway]]s perform protocol translation, local filtering, and data aggregation, reducing upstream bandwidth requirements.
  - [[Edge Computing]] nodes run ML inference, stream processing, and local storage, reducing latency and cloud dependency.
  - Time-Sensitive Networking (TSN) extensions to Ethernet deliver deterministic sub-millisecond latency for hard real-time industrial control.
- **Cloud and Application Layer**
  - [[Cloud Computing]] platforms (AWS IoT Core, Azure IoT Hub, Google Cloud IoT) manage device registries, message routing, and analytics pipelines.
  - [[Time-Series Data]] stores (InfluxDB, TimescaleDB) persist high-frequency telemetry for historical analysis and model training.
  - [[Digital Twin]] platforms maintain virtual replicas of physical assets, enabling simulation, anomaly detection, and operational optimisation.

### Architecture Patterns

- **Four-tier reference model**: device → connectivity → gateway/edge → cloud/application.
- **Publish-subscribe telemetry**: devices publish sensor readings to a broker (e.g. MQTT broker); downstream subscribers (analytics, dashboards, actuator controllers) consume only relevant topics.
- **Command-and-control**: bidirectional messaging channels allow cloud platforms to push firmware updates, configuration changes, and actuation commands down to devices.
- **Offline-first edge**: [[Edge Computing]] nodes buffer and process data locally during network outages, synchronising with the cloud on reconnection.
- **Device shadow / desired-reported state**: a cloud-side document tracks the last-known device state and desired configuration, decoupling device connectivity from application logic.

### Applications and Use Cases

- **Industrial IoT (IIoT)**: manufacturing execution systems, [[Predictive Maintenance]] for rotating machinery, energy monitoring, and OPC-UA integration with SCADA systems. Highest per-device business value, driving adoption of [[Distributed Systems]] reliability patterns.
- **Smart Buildings and Facilities**: HVAC control, occupancy sensing, energy management, access control, and fire/life safety systems integrated via BACnet/IP and emerging Matter gateways.
- **[[Smart City]]**: connected street lighting, waste bin monitoring, environmental air quality sensing, traffic signal optimisation, and parking management using [[LPWAN]] backhaul.
- **[[Supply Chain Management]]**: real-time asset tracking with RFID, GPS, and BLE beacons; cold-chain temperature monitoring with automated alert escalation; dock-door load sensing for warehouse automation.
- **[[Precision Agriculture]]**: soil-moisture and nutrient sensors, weather stations, drone imagery pipelines, and automated irrigation controllers reducing water consumption and optimising yield.
- **Healthcare and Wearables**: continuous glucose monitors, cardiac event recorders, fall-detection wearables, remote patient monitoring for chronic disease management, and hospital asset tracking.
- **Consumer Smart Home**: smart thermostats, door locks, lighting, appliances, and security cameras integrated through voice assistants and the [[Matter Standard]] application layer.
- **Fleet and Transport**: OBD-II telematics, cold-chain trailers, railway axle condition monitoring, and autonomous vehicle sensor fusion.

### Security Considerations

- IoT presents an enlarged attack surface because billions of devices with long field lifetimes often run outdated firmware with unpatched CVEs.
- Key vulnerabilities: hard-coded credentials, unencrypted local traffic, absent certificate pinning, insecure firmware update mechanisms, and physical access to debug ports (JTAG, UART).
- Mitigations: hardware root of trust (TPM, secure element), TLS 1.3 for transport, [[Device Identity]] provisioning via X.509 certificates, code signing for OTA firmware, and network segmentation (IoT VLAN isolation).
- Regulatory environment: EU Cyber Resilience Act (2024) mandates vulnerability disclosure programmes and minimum patching commitments for connected product manufacturers. US Executive Order 14028 promotes IoT labelling schemes and NIST guidelines (NISTIR 8259A).
- [[Blockchain]] has been proposed for decentralised device identity and audit trails, though production adoption remains limited.

### Standards and Governance

- **[[Matter Standard]]** (formerly Project CHIP): unified application layer for consumer IoT, managed by the Connectivity Standards Alliance (CSA), adopted by Apple, Google, Amazon, and Samsung. Released 2022; v1.3 adds energy management and EV charging profiles.
- **[[oneM2M]]**: global standards partnership (ETSI, TSDSI, ATIS, TTA, CCSA, ARIB, TTC) producing a horizontal service layer specification for device management, security, and semantic interoperability.
- **[[IEEE 802.15.4]]**: MAC and PHY standard underlying Zigbee, Thread, 6LoWPAN, and WirelessHART, defining the low-rate WPAN radio interface.
- **IETF standards**: CoAP (RFC 7252), MQTT v5 (OASIS), 6LoWPAN (RFC 4944), DTLS 1.3 (RFC 9147) for constrained environments.
- **IEC 62443**: industrial cybersecurity standard series specifying security levels for IACS (Industrial Automation and Control Systems) including IoT-integrated plant.
- **W3C Web of Things (WoT)**: Thing Description (TD) specification for semantic interoperability, allowing heterogeneous devices to be described and discovered through machine-readable metadata.
- **ETSI EN 303 645**: baseline cybersecurity standard for consumer IoT, underpinning the EU Cyber Resilience Act and UK Product Security and Telecommunications Infrastructure Act (PSTI).

### Convergence with Adjacent Technologies

- **[[Edge Computing]]**: the shift of ML inference and stream analytics to near-device nodes is the defining architectural trend in IoT, reducing latency, cloud costs, and data egress volumes.
- **[[Machine Learning]]**: TinyML frameworks (TensorFlow Lite Micro, Edge Impulse) enable anomaly detection, keyword spotting, and image classification directly on microcontrollers, closing the actuation loop without cloud round-trips.
- **[[Digital Twin]]**: IoT telemetry feeds real-time synchronisation of asset twins in platforms such as Azure Digital Twins, enabling simulation-based predictive maintenance and process optimisation.
- **[[Blockchain]]**: decentralised ledgers are explored for immutable audit logs of IoT sensor readings (e.g. food provenance, emissions reporting), though on-chain latency and cost constrain real-time use.
- **[[Spatial Computing]]**: AR overlays contextualised by live IoT data enable field technicians to visualise sensor readings, asset status, and maintenance history spatially via HMDs.
- **[[5G]]**: network slicing and URLLC modes promise deterministic low-latency connectivity for industrial control and collaborative robotics beyond what current LPWAN or Wi-Fi provide.

### Current Landscape (2026)

- The Connectivity Standards Alliance closed the residential interoperability gap fast: Matter 1.4 (November 2024) added energy management and Enhanced Multi-Admin, Matter 1.5 (20 November 2025) added camera streaming over RTSP plus solar/battery/heat-pump energy clusters, and Matter 1.6 (June 2026) introduced NFC-based commissioning (setup before power-on), Joint Fabric for co-administered networks, and thermostat suggestions.
- Security certification has hardened in parallel: the CSA's Product Security 1.1 specification (June 2026) extends scope from individual devices to complete IoT systems, adds two assurance levels (self-assessment reviewed by an Authorised Test Laboratory versus independent ATL testing), and maps onto the EU Radio Equipment Directive harmonised standards and Singapore's labelling scheme.
- Regulation has shifted IoT security from optional to mandatory: the EU Radio Equipment Directive cybersecurity requirements (via EN 18031) became mandatory on 1 August 2025, and the EU Cyber Resilience Act (in force since 10 December 2024) phases in reporting duties from 11 September 2026 and full obligations from 11 December 2027, with fines up to EUR 15 million or 2.5% of global turnover.
- In the US the FCC launched the voluntary Cyber Trust Mark on 7 January 2025 (built on NIST IR 8425), and Executive Order 14306 (June 2025) pushed it toward de-facto mandatory by directing federal agencies to prioritise procurement of labelled devices from 2027; rollout has since faced administrative delays. Universal default passwords are now effectively illegal for new devices across the UK, EU and Japan, with mandated multi-year update support and SBOMs becoming standard.
- Markets keep scaling: IoT Analytics put connected IoT devices at 21.1 billion by end-2025 (up 13% YoY) and the enterprise IoT market at USD 324 billion, projecting 14% growth for 2026. Ericsson reported roughly 4.5 billion cellular IoT connections at end-2025.
- Connectivity is consolidating around 5G RedCap as the mid-tier bridge as 2G/3G sunset: 14 operators had launched RedCap commercially by end-2025 (the Apple Watch range adopted it), eRedCap modules arrive in 2026, and IoT Analytics projects RedCap chipset shipments at an 82% CAGR to 2030. Satellite-cellular hybrid modules are emerging for always-on remote links.
- The open frontier is intelligence at the edge: IoT Analytics estimates under 1% of the 21.1 billion connections carried a true edge-AI accelerator (NPU/GPU) as of December 2025, so TinyML on-device inference, secure lifecycle/update governance at fleet scale, and fragmented cross-jurisdiction compliance remain the key unsolved challenges.

### References

- 1. Connectivity Standards Alliance / 9to5Mac (2026). Matter 1.6 and Product Security 1.1 officially announced — here's what's new. https://9to5mac.com/2026/06/17/matter-1-6-and-product-security-1-1-officially-announced-heres-whats-new/
- 2. Amazon Web Services (2026). Adopting the Matter standard for IoT device makers (updated for Matter 1.5). https://docs.aws.amazon.com/pdfs/prescriptive-guidance/latest/strategy-matter-standard/strategy-matter-standard.pdf
- 3. IoT M2M Council (2026). Global Cybersecurity Regulation in 2025. https://iotm2mcouncil.org/iot-library/news/iot-security-public-policy/global-cybersecurity-regulation-in-2025/
- 4. European Commission (2026). Cyber Resilience Act — Shaping Europe's digital future. https://digital-strategy.ec.europa.eu/en/policies/cyber-resilience-act
- 5. IoT Analytics (2026). State of enterprise IoT: From IoT to autonomous connected operations. https://iot-analytics.com/state-of-enterprise-iot-from-iot-autonomous-connected-operations/
- 6. Ericsson (2026). IoT connections outlook — Ericsson Mobility Report. https://www.ericsson.com/en/reports-and-papers/mobility-report/dataforecasts/iot-connections-outlook

### Provenance

