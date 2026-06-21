- ### Definition
  - ### Primary Definition
  A **Protective Stop** is a safety-initiated cessation of robot motion triggered when a monitored safety condition is violated — for example, when a person enters a restricted zone or a force threshold is exceeded. Unlike an emergency stop (which de-energises drives), a protective stop suspends motion while maintaining drive readiness, allowing automatic or supervised restart once the hazard is cleared. It is the core enforcement mechanism for collaborative robotic cells operating under ISO 10218-1/2 and ISO/TS 15066.

- ### Semantic Classification
  - owl-class:: robotics:ProtectiveStop
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Standardised by ISO 10218-1:2025 and ISO 10218-2:2025 (which consolidated ISO/TS 15066:2016).
  - Requires a functional safety architecture and prior risk assessment.
  - Enables safe collaborative operation and human-robot interaction by providing a deterministic halt pathway.
  - Distinct from an emergency stop: protective stops allow programmatic restart without full system reset.

- ### Content
  - **Protective Stop** (RB-0092) is the enforcement mechanism by which a robot's motion is halted when a monitored safety condition is violated — for example when a person enters a restricted zone detected by a laser scanner, or when a force threshold is exceeded. Unlike an emergency stop, a protective stop suspends motion while maintaining drive readiness, allowing automatic or supervised restart once the hazard clears.

  Protective stops are fundamental to the collaborative application modes consolidated in ISO 10218-2:2025 (the 2025 revision absorbed ISO/TS 15066:2016). In speed-and-separation monitoring applications, the protective stop is the terminal response when a person crosses the minimum protective distance. In power-and-force-limiting applications, it acts as a backup if the force-limiting mechanism fails to constrain contact forces within acceptable biomechanical limits. The stop function itself must meet a functional safety integrity level (PLd/SIL 2 minimum) per ISO 10218-1:2025 and ISO 13849-1.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z