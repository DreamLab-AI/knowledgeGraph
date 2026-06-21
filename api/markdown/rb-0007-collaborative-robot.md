- ### Definition
  - **Collaborative Robot** (RB-0007, cobot) is an industrial robot designed for direct physical interaction with humans in a shared workspace, certified under ISO/TS 15066. It implements one or more collaborative operation modes (safety-rated monitored stop, hand guiding, speed-and-separation monitoring, power-and-force limiting) to bound collision forces within biomechanically safe thresholds. Unlike traditional industrial robots, cobots operate without physical guarding when humans are present.

- ### Semantic Classification
  - owl-class:: robotics:rb0007collaborativerobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - implements:: rb 0103 collaborative operation, rb 0093 speed limitation, rb 0094 power and force limiting
  - relatedTo:: rb 0056 impedance control, rb 0105 speed and separation monitoring, Human-Robot Interaction
  - standardizedBy:: ISO TS 15066, rb 0087 safety standard
  - requires:: rb 0089 risk assessment

- ### Content
  - ### Primary Definition
  **Collaborative Robot** (RB-0007) is distinguished from conventional industrial robots by its safety architecture rather than mechanical form. A cobot must demonstrate, through risk assessment under ISO 10218-1/-2 and application-specific assessment under ISO/TS 15066, that contact with a human under its intended operating modes does not produce forces or pressures exceeding the biomechanical limits tabulated in Annex A of ISO/TS 15066.

  In practice, cobots achieve this through a combination of: (a) power-and-force limiting via torque-sensor or current-based contact detection, (b) speed limitation that caps TCP velocity when a human is within a monitored zone, and (c) mechanical design features (low inertia, rounded surfaces, no pinch points) that reduce injury potential. Impedance control (RB-0056) is frequently used as the underlying control strategy because it naturally yields to external contact forces.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z