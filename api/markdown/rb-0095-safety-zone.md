- ### Definition
  - A **safety zone** is a spatially delimited region around a robot or autonomous system where the presence of humans or objects triggers protective behaviour. Zones are typically tiered: an outer warning zone reduces robot speed (see rb 0093 speed limitation), while an inner protective zone triggers a monitored or protective stop (rb 0091, rb 0092). Detection relies on safeguarding devices such as laser scanners and range finders (rb 0075).

- ### Semantic Classification
  - owl-class:: robotics:SafetyZone
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Requires risk assessment (rb 0089) to define zone extents and response thresholds.
  - Depends on range finders and LiDAR sensors for real-time occupancy monitoring.
  - Enabled by safeguarding infrastructure (rb 0096) and validated under safety standards (rb 0087, ISO 10218-2, ISO/TS 15066).

- ### Content
  - **Safety Zone** (RB-0095) is a defined spatial region around a robot or autonomous system within which human presence or object intrusion triggers protective actions. Zones are typically configured as concentric tiers using configurable safety laser scanners (e.g., SICK S300, Pilz PSENscan): an outer warning zone activates speed reduction (see [[rb 0093 speed limitation]]), while an inner protective zone triggers a monitored stop ([[rb 0091 safety rated monitored stop]]) or protective stop ([[rb 0092 protective stop]]).

  Zone extents are derived from risk assessment per ISO 10218-2:2025 (which consolidated ISO/TS 15066:2016), incorporating factors such as robot maximum speed, detection device response time, robot stopping time, and human walking speed. The minimum protective distance formula (formerly ISO/TS 15066 Clause 5.4, now integrated into ISO 10218-2:2025) governs the inner zone boundary. Safety zones must be validated by a competent person and re-validated whenever the robot programme, speed, or cell layout changes. Reconfigurable safety zones (software-configurable via safety-rated IO) are increasingly standard in flexible manufacturing cells, enabling different zone profiles for different operating modes.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z