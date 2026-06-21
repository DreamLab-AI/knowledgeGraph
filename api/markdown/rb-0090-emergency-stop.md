- ### Definition
  - An Emergency Stop (E-stop) is a mandatory safety function that immediately removes power or arrests robot motion upon activation, preventing injury to personnel or damage to equipment. Specified in ISO 10218-1/-2 and IEC 60204-1, it is a hardwired, independently monitored circuit classified as Stop Category 0 (immediate power removal) or Category 1 (controlled deceleration then power removal). The actuator must be clearly identifiable, readily accessible, and self-latching so the system cannot resume operation without a deliberate reset action.
  - E-stops differ from protective stops and safety-rated monitored stops in that they are operator-initiated, non-programmable safety functions. In collaborative robot deployments, the E-stop requirement is complemented by power-and-force limiting and speed limitation measures to address different hazard scenarios.

- ### Semantic Classification
  - owl-class:: robotics:EmergencyStop
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[rb 0087 safety standard]], [[Robot Safety]]
  - related-to:: [[rb 0091 safety rated monitored stop]], [[rb 0092 protective stop]], [[rb 0095 safety zone]], [[rb 0096 safeguarding]]
  - standardized-by:: [[ISO 10218]], [[Functional Safety]]
  - requires:: [[rb 0089 risk assessment]]
  - contrasts-with:: [[rb 0093 speed limitation]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z