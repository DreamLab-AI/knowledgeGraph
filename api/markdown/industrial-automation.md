- ### Definition
  - Industrial automation is the systematic application of control technologies—[[Programmable Logic Controller]], [[Distributed Control System]], [[SCADA]], and robotic manipulators—together with information technologies to operate industrial processes and machinery with minimal or no human intervention. It spans both discrete manufacturing (assembly lines, packaging, welding) and continuous process industries (chemical plants, oil refineries, power generation), delivering gains in throughput, consistency, quality, and safety. The discipline converges with the [[Industrial IoT]], [[Digital Twin]] modelling, and [[Cyber-Physical Systems]] to enable adaptive, closed-loop manufacturing at scale.

- ### Overview
  - Industrial automation emerged during the second industrial revolution with the introduction of relay-based control panels and has evolved through successive generations: pneumatic control, analogue electronics, digital PLCs, networked DCS, and now AI-augmented cyber-physical production systems.
  - The core value proposition is threefold: increased throughput and consistency by removing variability from repetitive tasks; improved safety by removing humans from hazardous environments; and reduced operational cost through higher equipment utilisation and reduced scrap rates.
  - Modern industrial automation is characterised by the convergence of operational technology (OT) with information technology (IT), enabling real-time data flows from the shop floor to enterprise resource planning (ERP) systems and cloud analytics platforms.
  - The ISA-95 standard defines a five-layer automation hierarchy (field devices → control → supervisory → manufacturing operations → enterprise) that remains the canonical reference model for integration architects.

- ### Key Components
  - **[[Programmable Logic Controller]] (PLC)** — purpose-built industrial computer executing deterministic scan-cycle logic (read inputs → evaluate program → write outputs) within 1–100 ms windows; standardised under IEC 61131-3 in five programming languages (Ladder Diagram, Structured Text, Function Block Diagram, Instruction List, Sequential Function Chart).
  - **[[Distributed Control System]] (DCS)** — architecture distributing control across networked controllers suitable for large-scale continuous processes; communicates via proprietary or open [[Fieldbus]] protocols (HART, PROFIBUS, Foundation Fieldbus, EtherNet/IP).
  - **[[SCADA]] (Supervisory Control and Data Acquisition)** — software layer providing real-time monitoring, alarm management, and historian functions across geographically distributed assets such as pipelines, substations, and water treatment plants.
  - **[[Industrial Robot]]** — programmable mechanical manipulator executing precise repetitive tasks; canonical forms include six-axis articulated arms (KUKA, ABB, Fanuc), SCARA robots, and delta/parallel kinematics for high-speed pick-and-place.
  - **[[Collaborative Robot]] (Cobot)** — robot designed to operate alongside humans without fixed safety guarding, using force/torque limiting and speed supervision per ISO/TS 15066 and ISO 10218-2.
  - **[[Machine Vision]]** — camera-and-processing subsystem performing dimensional inspection, defect detection, barcode reading, and guidance; increasingly uses convolutional neural networks for robust classification under variable lighting.
  - **[[Human-Machine Interface]] (HMI)** — touchscreen or panel-mounted display providing operator visibility and control of the automation system; feeds from SCADA or PLC data servers via OPC-UA.
  - **[[Actuator]]** — output device converting control signals into mechanical, thermal, or fluidic action; categories include servo drives, stepper motors, pneumatic cylinders, and hydraulic actuators.
  - **[[Sensor]]** — input device transducing physical quantities (temperature, pressure, flow, proximity, vision) into electrical signals; accuracy and refresh rate define the control loop performance ceiling.
  - **[[Fieldbus]]** — deterministic industrial communication network linking field devices to controllers; dominant protocols include PROFIBUS-DP, DeviceNet, EtherNet/IP, PROFINET, and OPC-UA over TSN.

- ### Automation Hierarchy Levels
  - **Level 0 — Field** — physical sensors, actuators, drives, and instruments directly interfacing with the process.
  - **Level 1 — Control** — PLCs, DCS controllers, and safety instrumented systems (SIS) executing closed-loop control.
  - **Level 2 — Supervisory** — SCADA systems, HMIs, and real-time historians aggregating plant-wide data and alarms.
  - **Level 3 — Manufacturing Operations** — [[Manufacturing Execution System]] (MES) scheduling production orders, tracking WIP, managing quality, and coordinating maintenance.
  - **Level 4 — Enterprise** — ERP systems (SAP, Oracle) handling procurement, inventory, financials, and supply chain integration.

- ### Applications and Use Cases
  - **Automotive** — body-in-white welding using fleets of 500+ articulated robots per line; paint-shop robots delivering consistent film thickness; end-of-line functional test stands with automated fault diagnosis.
  - **Pharmaceutical** — automated dispensing and filling lines operating under 21 CFR Part 11 electronic records requirements; serialisation and track-and-trace integration with MES for regulatory compliance.
  - **Food and Beverage** — hygienic-design pick-and-place robots handling fragile products; CIP (clean-in-place) automated cleaning cycles managed by DCS; vision-guided portioning and weight checking.
  - **Semiconductor Fabrication** — atmospheric and vacuum robotic wafer handling integrated with recipe-driven process equipment; APC (advanced process control) using statistical models to adjust etch and deposition parameters in real time.
  - **Oil and Gas** — DCS-controlled distillation columns and heat exchanger networks; pipeline SCADA monitoring thousands of remote RTU outstations; subsea production control systems.
  - **Power Generation** — turbine governor control, boiler drum-level regulation, and grid synchronisation automation in thermal, hydro, and nuclear plants.
  - **[[Lights-Out Manufacturing]]** — fully unmanned production facilities (exemplified by Fanuc's light-off factory) where robots self-monitor and replenish fixtures overnight.

- ### IIoT and Digital Convergence
  - [[Industrial IoT]] connects field devices via MQTT, OPC-UA, and REST APIs to cloud data lakes, enabling fleet-wide analytics and benchmarking across multiple plants.
  - [[Digital Twin]] models—built from CAD geometry, kinematic parameters, and process physics—allow virtual commissioning: testing and validating PLC and robot programs in simulation before physical deployment, reducing start-up time.
  - [[Predictive Maintenance]] uses vibration, temperature, and current-signature analytics from connected drives and motors to forecast bearing failures weeks in advance, replacing time-based maintenance schedules with condition-based regimes.
  - [[Edge Computing]] deployments run inference models at the line level, enabling sub-100 ms anomaly detection without cloud round-trip latency—critical for real-time reject decisions on high-speed packaging lines.
  - [[Machine Learning]] classifiers trained on defect images from vision systems achieve inspection accuracy exceeding human inspectors on high-volume, high-mix lines.

- ### Relationships
  - hasPart:: [[Programmable Logic Controller]]
  - hasPart:: [[Distributed Control System]]
  - hasPart:: [[SCADA]]
  - hasPart:: [[Industrial Robot]]
  - hasPart:: [[Machine Vision]]
  - uses:: [[Control System]]
  - uses:: [[Actuator]]
  - uses:: [[Sensor]]
  - uses:: [[Fieldbus]]
  - uses:: [[Human-Machine Interface]]
  - enables:: [[Industrial IoT]]
  - enables:: [[Predictive Maintenance]]
  - enables:: [[Mass Production]]
  - enables:: [[Lights-Out Manufacturing]]
  - dependsOn:: [[Real-Time Operating System]]
  - dependsOn:: [[Industrial Ethernet]]
  - standardizedBy:: [[IEC 61131]]
  - standardizedBy:: [[IEC 62443]]
  - standardizedBy:: [[ISO 10218]]
  - relatedTo:: [[Digital Twin]]
  - relatedTo:: [[Real-Time Processing]]
  - relatedTo:: [[Collaborative Robot]]
  - relatedTo:: [[Manufacturing Execution System]]
  - bridges-to:: [[Machine Learning]]
  - bridges-to:: [[Edge Computing]]
  - contrastsWith:: [[Manual Manufacturing]]

- ### Standards and Governance
  - **IEC 61131-3** — international standard defining five PLC programming languages; the dominant interoperability baseline across vendors.
  - **IEC 62443** — series addressing cybersecurity of industrial automation and control systems (IACS); defines security levels (SL 1–4) and roles for asset owners, integrators, and product suppliers. Critical as OT/IT convergence expands attack surface.
  - **ISO 10218-1 / -2** — safety requirements for industrial robots (robot design) and for robot integration into work cells respectively.
  - **ISO/TS 15066** — technical specification for collaborative robot safety, defining four collaboration modes (safety-rated monitored stop, hand guiding, speed and separation monitoring, power and force limiting).
  - **ISA-95 / IEC 62264** — enterprise–control system integration standard defining the automation hierarchy and data exchange models between MES and ERP.
  - **ISA-88 / IEC 61512** — batch control standard widely used in pharmaceutical and specialty chemical industries.
  - **OPC-UA (IEC 62541)** — platform-independent, service-oriented architecture for secure data exchange between field devices, SCADA, MES, and cloud platforms; the emerging universal connectivity fabric for Industry 4.0.
  - **PROFINET / EtherNet/IP** — leading Industrial Ethernet protocols for deterministic field-level communication; PROFINET dominates European discrete manufacturing; EtherNet/IP is prevalent in North America.

- ### Semantic Classification
  - owl-class:: industrial-automation:IndustrialAutomation
  - owl-role:: Concept

- ### Provenance
  - sources:: IEC 61131-3, IEC 62443, ISO 10218, ISA-95, ISA-88, OPC Foundation UA specifications; established domain knowledge
  - updated:: 2026-06-13