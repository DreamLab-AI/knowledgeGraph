- ### Definition
  - **Power and Force Limiting** (PFL) is a collaborative application safety mode in which the robot's mechanical power, force, and momentum are continuously constrained so that any contact with a human remains below biomechanical injury thresholds. It is now defined in ISO 10218-2:2025, which superseded and consolidated ISO/TS 15066:2016. Unlike speed-and-separation monitoring, PFL allows direct physical contact by ensuring that contact forces can never exceed prescribed quasi-static and transient limits.

- ### Semantic Classification
  - owl-class:: robotics:rb0094powerandforcelimiting
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - standardizedBy:: ISO 10218-1:2025, ISO 10218-2:2025
  - relatedTo:: [[rb 0091 safety rated monitored stop]], [[rb 0092 protective stop]], [[rb 0093 speed limitation]], [[rb 0089 risk assessment]]
  - requires:: [[rb 0067 force torque sensor]]
  - supports:: [[rb 0057 admittance control]]

- ### Content
  - **Power and Force Limiting** (RB-0094) enables a cobot to operate in direct contact with humans by ensuring all contact forces remain within the biomechanical limits now tabulated in ISO 10218-2:2025 (formerly ISO/TS 15066:2016 Annex A). The limits distinguish between quasi-static contact (sustained pressing) and transient contact (brief impact), with different thresholds for different body regions. Typical limit values are in the range of 65–160 N for transient contact depending on body part.

  PFL is implemented via a combination of torque-sensing (often integrated into each joint), real-time force estimation from motor currents, and compliant mechanical design. Robots certified for PFL operation include the Universal Robots UR series, KUKA LBR iiwa, and FANUC CR series, all of which carry ISO 10218-1 conformance declarations. Force-torque sensors at the wrist provide redundant verification. PFL cobots are widely deployed in automotive assembly, electronics manufacturing, and laboratory automation where direct human collaboration is required.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z