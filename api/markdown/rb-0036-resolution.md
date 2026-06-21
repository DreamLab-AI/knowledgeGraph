- ### Definition
  - ### Primary Definition
  Resolution (ISO 8373) is the smallest increment of motion or measurement that a robot system can distinguish or command. For manipulators, resolution is typically expressed in millimetres or microradians and is determined by the encoder bit-depth, gear ratio, and drive electronics; for sensors it is the minimum detectable change in the measured quantity. Resolution places an absolute lower bound on positioning and perception precision that neither calibration nor software compensation can overcome.

  Resolution, accuracy, and repeatability are distinct but interrelated performance metrics. A system may have high resolution but poor accuracy (systematic error) or good accuracy but low repeatability (stochastic error). Understanding all three is essential when specifying robot cells for tasks with tight dimensional tolerances.

- ### Semantic Classification
  - owl-class:: robotics:Resolution
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Related to: rb 0035 accuracy, rb 0034 repeatability, rb 0023 degrees of freedom, rb 0072 encoder
  - Depends on: rb 0040 backlash, rb 0026 robot joint
  - Supports: rb 0054 position control, rb 0032 manipulability

- ### Content
  - **Resolution** - Smallest incremental motion achievable by robot

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z