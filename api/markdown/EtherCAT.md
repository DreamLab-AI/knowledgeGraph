public:: true

# ethercat
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8f0c16cae49c3489e1d4a6e1927a0199e186f520cf759b7cb0fedd4190880c52",
  "@type": "Page",
  "vc:slug": "ether-cat",
  "title": "ethercat",
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
  "@id": "urn:ngm:class:ether-cat",
  "@type": "Class",
  "label": "EtherCAT",
  "definition": "EtherCAT (Ethernet for Control Automation Technology) is an open, IEC 61158-standardised real-time Ethernet fieldbus protocol developed by Beckhoff Automation, enabling deterministic, high-bandwidth communication between industrial master controllers and distributed slave devices such as servo drives, I/O modules, and encoders. Its on-the-fly processing architecture allows each slave node to extract addressed data from and insert its response into a propagating Ethernet frame, achieving sub-microsecond synchronisation across large distributed networks. Governed by the EtherCAT Technology Group (ETG), the standard is widely deployed in industrial robotics, CNC machining, semiconductor manufacturing, and laboratory automation, with the Safety over EtherCAT (FSoE) extension providing IEC 61784-3-compliant functional safety over the same physical layer.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Robo Actuation And Control"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:real-time-communication", "label": "Real-Time Communication"},
      {"@id": "urn:ngm:class:distributed-clock-synchronisation", "label": "Distributed Clock Synchronisation"},
      {"@id": "urn:ngm:class:multi-axis-control", "label": "Multi-Axis Control"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"},
      {"@id": "urn:ngm:class:servo-motor", "label": "Servo Motor"},
      {"@id": "urn:ngm:class:programmable-logic-controller", "label": "Programmable Logic Controller"},
      {"@id": "urn:ngm:class:cnc-machining", "label": "CNC Machining"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:ethernet", "label": "Ethernet"},
      {"@id": "urn:ngm:class:ethercat-master", "label": "EtherCAT Master"},
      {"@id": "urn:ngm:class:ethercat-slave-controller", "label": "EtherCAT Slave Controller"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:distributed-clocks", "label": "Distributed Clocks"},
      {"@id": "urn:ngm:class:safety-over-ethercat", "label": "Safety over EtherCAT"},
      {"@id": "urn:ngm:class:ethercat-automation-protocol", "label": "EtherCAT Automation Protocol"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:iec-61158", "label": "IEC 61158"},
      {"@id": "urn:ngm:class:iec-61784", "label": "IEC 61784"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ethercat-technology-group", "label": "EtherCAT Technology Group"},
      {"@id": "urn:ngm:class:iec", "label": "IEC"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:profinet", "label": "PROFINET"},
      {"@id": "urn:ngm:class:ethernetip", "label": "EtherNet/IP"},
      {"@id": "urn:ngm:class:powerlink", "label": "POWERLINK"},
      {"@id": "urn:ngm:class:sercos-iii", "label": "SERCOS III"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:industrial-automation", "label": "Industrial Automation"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:opc-ua", "label": "OPC-UA"},
      {"@id": "urn:ngm:class:robot-operating-system", "label": "Robot Operating System"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:time-sensitive-networking", "label": "Time-Sensitive Networking"},
      {"@id": "urn:ngm:class:industrial-internet-of-things", "label": "Industrial Internet of Things"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ethernet-for-control-automation-technology", "label": "Ethernet for Control Automation Technology"}
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - EtherCAT (Ethernet for Control Automation Technology) is a real-time [[Fieldbus]] protocol standardised under [[IEC 61158]] and [[IEC 61784]], originally developed by [[Beckhoff Automation]] and now governed by the [[EtherCAT Technology Group]] (ETG). It adapts standard [[Ethernet]] physical-layer hardware (IEEE 802.3) to achieve deterministic, sub-microsecond cycle times by using an on-the-fly processing model in which Ethernet frames pass through each slave node sequentially, each node reading its addressed data and inserting its response without interrupting frame propagation. [[Distributed Clocks]] synchronise all slave nodes to a common timebase with sub-microsecond accuracy, making EtherCAT the de-facto choice for [[Multi-Axis Control]] in [[Industrial Robot]] systems, [[CNC Machining]] centres, and semiconductor wafer-handling equipment.

- ### Overview
  - EtherCAT emerged from Beckhoff's research in the late 1990s as an answer to the latency and non-determinism of conventional [[Ethernet]] when used for industrial control. Traditional Ethernet routes packets store-and-forward through switches, introducing variable latency incompatible with servo-loop closure. EtherCAT sidesteps this by treating the network as a logical ring: a single master node transmits a frame that visits every slave in sequence before returning. Each slave processes the frame in hardware (using a dedicated [[EtherCAT Slave Controller]] ASIC), extracting its commanded setpoints and inserting feedback data in nanoseconds.
  - The result is a protocol that can coordinate hundreds of axes with cycle times as low as 100 µs and jitter in the tens-of-nanoseconds range — performance previously achievable only with dedicated motion-bus ASICs such as [[SERCOS III]]. Because the master can be implemented entirely in software on a standard Ethernet NIC, no specialised master hardware is required, lowering the entry cost compared to [[PROFINET]] IRT or [[EtherNet/IP]] with CIP Motion.
  - EtherCAT is a mature, widely adopted standard with over 7,000 registered ETG member companies and thousands of certified slave device types. It underpins the motion-control layer of many collaborative and industrial robot platforms, including those from KUKA, ABB, Yaskawa, and Bosch Rexroth, and is the default fieldbus in the [[Robot Operating System]] (ROS 2) EtherCAT Hardware Abstraction Layer (ethercat_driver_ros2).

- ### Key Components
  - **EtherCAT Master** — software process running on the controller PC or SoC that assembles and dispatches frames, manages the process image, and handles the state machine for all connected slaves. Open-source implementations include SOEM (Simple Open EtherCAT Master) and IgH EtherCAT Master.
  - **[[EtherCAT Slave Controller]] (ESC)** — dedicated ASIC or FPGA IP core embedded in each slave device that performs on-the-fly frame processing in hardware. Vendors include Beckhoff (ET1100/ET1200), Texas Instruments (Sitara AM243x), and Microchip (LAN9252/LAN9254).
  - **[[Distributed Clocks]] (DC)** — synchronisation subsystem in which one slave acts as reference clock; all others discipline their local oscillators to it via hardware timestamping. Achieves sub-1 µs synchronisation across the whole network without GPS or external triggers.
  - **Process Data Objects (PDO)** — cyclic real-time data mappings between master and slaves, configured during network initialisation via the ESI (EtherCAT Slave Information) XML file.
  - **Service Data Objects (SDO)** — acyclic mailbox channel layered on top of the cyclic frame, used for configuration, parameter upload/download, and diagnostics.
  - **[[Safety over EtherCAT]] (FSoE)** — functional-safety transport layer operating over the standard EtherCAT channel, certified to IEC 61784-3 / SIL 3 / PLe. Enables transmission of safety-critical I/O (e-stop, safety door, encoder) without a separate safety bus.
  - **[[EtherCAT Automation Protocol]] (EAP)** — UDP/IP-based messaging layer enabling peer-to-peer communication between EtherCAT masters across routed networks, bridging the real-time island to enterprise IT.
  - **EtherCAT P** — single-cable extension that superimposes 24 V DC power on the four-pair standard Cat.5e cabling alongside the data signal, reducing connector and wiring count for compact robot arms and peripheral modules.

- ### Applications and Use Cases
  - **Industrial Robotics** — dominant motion-control bus for multi-axis articulated arms, SCARA robots, and delta/parallel kinematics. Used by KUKA KR C5, Fanuc R-30iB, and many collaborative-robot platforms for sub-millisecond joint control.
  - **[[CNC Machining]]** — synchronises spindle, feed axes, and auxiliary I/O in high-speed milling and turning centres. Beckhoff TwinCAT NC/CNC and Siemens SINUMERIK Edge use EtherCAT as the servo bus.
  - **Semiconductor Manufacturing** — wafer transport, lithography stage control, and inspection-system gantries rely on EtherCAT's determinism and distributed-clock synchronisation for nanometre-level repeatability.
  - **Packaging and Printing** — high-speed web-tension control and registration on multi-station machines demand nanosecond-level axis synchronisation available through Distributed Clocks.
  - **[[Functional Safety]] Applications** — FSoE transports SIL 3 safety signals on the same cable as motion data, simplifying machine safety architecture compliant with Machinery Directive 2006/42/EC and ISO 13849.
  - **Collaborative Robots (Cobots)** — joint-torque sensing and force-control loops require fast, deterministic feedback; EtherCAT cycle times of 250 µs–1 ms satisfy ISO/TS 15066 power-and-force-limiting requirements.
  - **Laboratory and Scientific Automation** — synchrotron beamline positioning, electron-microscope stage control, and DNA sequencer sample-handling use EtherCAT for its cost-effective, PC-based master architecture.
  - **[[Industrial Internet of Things]] Edge** — EAP bridges cycle-accurate field data to OPC-UA servers and cloud historians, connecting the real-time control layer to IT analytics stacks without disrupting determinism.

- ### Relationships
  - enables:: [[Motion Control]]
  - enables:: [[Real-Time Communication]]
  - enables:: [[Distributed Clock Synchronisation]]
  - enables:: [[Multi-Axis Control]]
  - supports:: [[Industrial Robot]]
  - supports:: [[Servo Motor]]
  - supports:: [[Programmable Logic Controller]]
  - supports:: [[CNC Machining]]
  - requires:: [[Ethernet]]
  - requires:: [[EtherCAT Master]]
  - requires:: [[EtherCAT Slave Controller]]
  - hasPart:: [[Distributed Clocks]]
  - hasPart:: [[Safety over EtherCAT]]
  - hasPart:: [[EtherCAT Automation Protocol]]
  - implements:: [[IEC 61158]]
  - implements:: [[IEC 61784]]
  - standardizedBy:: [[EtherCAT Technology Group]]
  - standardizedBy:: [[IEC]]
  - contrastsWith:: [[PROFINET]]
  - contrastsWith:: [[EtherNet/IP]]
  - contrastsWith:: [[POWERLINK]]
  - contrastsWith:: [[SERCOS III]]
  - relatedTo:: [[Industrial Automation]]
  - relatedTo:: [[Functional Safety]]
  - relatedTo:: [[OPC-UA]]
  - relatedTo:: [[Robot Operating System]]
  - bridges-to:: [[Time-Sensitive Networking]]
  - bridges-to:: [[Industrial Internet of Things]]

- ### Standards and Context
  - **IEC 61158 Type 12** — physical and data-link specification for EtherCAT, part of the international fieldbus family standard maintained by IEC TC65/SC65C.
  - **IEC 61784-2 CP12** — communication profile defining EtherCAT's cyclic process data and acyclic SDO services.
  - **IEC 61784-3-12 (FSoE)** — functional-safety communication profile for Safety over EtherCAT, enabling SIL 3 / PLe safety channels.
  - **IEC 61800-7** — generic interface standard for adjustable-speed drives; EtherCAT profile CP12 maps servo-drive objects to PDOs.
  - **ETG.1000 series** — EtherCAT Technology Group's normative specification series covering the Data Link Layer, Application Layer, and device profiles.
  - **ETG.5001 Modular Device Profile (MDP)** — harmonised slave-device profile enabling interoperability across vendor implementations.
  - **IEEE 802.3** — underlying Ethernet physical layer (100BASE-TX or 1000BASE-T) used unmodified by EtherCAT at the physical layer.
  - **[[Time-Sensitive Networking]] (TSN)** — IEEE 802.1Q TSN standards offer a complementary convergence path; ETG has published an EtherCAT-over-TSN specification bridging deterministic fieldbuses to standard IEEE Ethernet infrastructure.
  - **[[OPC-UA]]** — IEC 62541 companion specification allows EtherCAT master data to be exposed as OPC-UA nodes for SCADA, MES, and cloud integration.
  - The [[EtherCAT Technology Group]] (ETG), founded in 2003, coordinates conformance testing, maintains the slave-device conformance test tool (CTT), and certifies interoperability across vendors. Membership exceeds 7,000 companies.

- ### Comparison with Competing Fieldbuses
  - **[[PROFINET]] IRT** — Siemens-backed standard requiring managed switches with IRT capability for the fastest isochronous class; EtherCAT achieves comparable or better cycle times without managed switches.
  - **[[EtherNet/IP]] with CIP Motion** — Rockwell/ODVA solution using UDP/IP multicast for I/O; generally higher latency and jitter than EtherCAT for tight motion control, but better native IT integration.
  - **[[POWERLINK]]** — Bernecker + Rainer (B&R)/open-source alternative; similar on-the-fly philosophy but uses SCNM (Slot Communication Network Management); smaller ecosystem.
  - **[[SERCOS III]]** — originally fibre-optic ring bus, now Ethernet ring; very deterministic but smaller market footprint than EtherCAT.
  - **[[Modbus]] TCP** — widely supported but not real-time; millisecond-class latency precludes servo-loop use without external synchronisation.
  - **[[CANopen]]** — predecessor bus commonly used for slow-cycle I/O and device configuration; EtherCAT often replaces CAN backbones with an EtherCAT-to-CAN gateway for legacy device continuity.

- ### Provenance
  - sources:: ETG.1000 EtherCAT Specification; IEC 61158-3-12; IEC 61784-2; Beckhoff EtherCAT technical documentation; ETG white papers
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
