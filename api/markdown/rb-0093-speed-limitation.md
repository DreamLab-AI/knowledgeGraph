- ### Definition
  - **Speed Limitation** (RB-0093) is a safety function that caps robot velocity to a safe threshold for collaborative applications, as defined in ISO 10218-2:2025 (which consolidated ISO/TS 15066:2016). It enables human-robot collaboration without physical barriers and works in conjunction with speed-and-separation monitoring and power-and-force limiting to provide layered protective behaviour.

- ### Semantic Classification
  - owl-class:: robotics:SpeedLimitation
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - relatedTo:: rb 0105 speed and separation monitoring, rb 0094 power and force limiting, rb 0092 protective stop
  - requires:: rb 0072 encoder, rb 0055 velocity control
  - standardizedBy:: ISO 10218-2:2025

- ### Content
  - ### Primary Definition
  **Speed Limitation** (RB-0093) restricts the maximum operational speed of a robot's joints or tool centre point to a predefined safe value. The velocity threshold is derived from biomechanical injury data and the minimum protective distance between robot and human at the moment of detection, as specified in ISO 10218-2:2025 (which absorbed the biomechanical limit tables formerly in ISO/TS 15066:2016 Annex A).

  Speed limitation is one of the four collaborative application modes consolidated in ISO 10218-2:2025, alongside safety-rated monitored stop, hand guiding, and speed-and-separation monitoring. It is frequently combined with power-and-force limiting to provide defence-in-depth: even if contact occurs at the limited speed, the resulting force is bounded within acceptable injury thresholds.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z