- ### Definition
  - Industrial automation is the application of control systems—including programmable logic controllers (PLCs), distributed control systems (DCS), and robotic manipulators—along with information technologies to operate industrial processes and machinery with minimal or no human intervention. It spans discrete manufacturing (assembly lines, packaging, welding) and process industries (chemical plants, oil refineries, power generation), increasing throughput, consistency, and safety by removing humans from hazardous environments. Industrial automation integrates mechanical, electrical, and software engineering disciplines and is increasingly augmented by machine vision, collaborative robots, and AI-driven process optimisation.

- ### Semantic Classification
  - owl-class:: industrial-automation:IndustrialAutomation
  - owl-role:: Concept

- ### Relationships
  - uses [[Control System]]
  - uses [[Actuator]]
  - enables [[Industrial IoT]]
  - enables [[Predictive Maintenance]]
  - relatedTo [[Digital Twin]]
  - relatedTo [[Real-time Processing]]

- ### Content
  - Industrial automation progresses through four recognised levels: Level 1 (field devices: sensors and actuators), Level 2 (control: PLCs and DCS), Level 3 (supervisory: SCADA and MES), and Level 4 (enterprise: ERP integration). PLCs—standardised under IEC 61131-3—execute scan-cycle logic that reads input states, evaluates ladder or structured text programs, and writes outputs to actuators within deterministic time windows, typically 1–100 ms. DCS architectures distribute control across multiple controllers linked by a proprietary fieldbus (HART, PROFIBUS, EtherNet/IP), suited to continuous process industries.
  - Robotics in industrial settings ranges from traditional six-axis articulated arms (KUKA, ABB, Fanuc) performing welding, painting, and material handling, to collaborative robots (cobots) designed to work alongside humans without safety caging, following ISO 10218 and ISO/TS 15066 speed and force-limiting standards. Machine vision systems, integrated with pattern matching and deep learning classifiers, perform quality inspection at production line speeds.
  - The convergence of industrial automation with Industrial IoT and Digital Twin technology enables virtual commissioning—testing and validating automation programs in a simulation environment before physical deployment—and closed-loop process optimisation based on real-time telemetry. IEC 62443 addresses the cybersecurity of industrial control systems as OT networks become increasingly connected to enterprise IT.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z