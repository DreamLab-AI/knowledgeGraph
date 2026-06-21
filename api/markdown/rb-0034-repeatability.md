- ### Definition
  - Repeatability (RB-0034) is the ISO 9283-defined metric expressing how closely a robot returns to the same commanded position or orientation on repeated attempts under identical conditions. Measured as the radius RP of the sphere that contains 95% of attained positions, it is a direct function of mechanical compliance, backlash, controller resolution, and thermal effects. Repeatability is typically in the range 0.01–0.1 mm for precision industrial arms and is the dominant specification criterion for assembly and welding tasks.

- ### Semantic Classification
  - owl-class:: robotics:Repeatability
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Contrasts with: [[rb 0035 accuracy]]
  - Related to: [[Precision]], [[Calibration]], [[Performance Metrics]]
  - Depends on: [[rb 0021 robot kinematics]], [[rb 0047 feedback control]]
  - Part of: [[rb 0036 resolution]]

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z