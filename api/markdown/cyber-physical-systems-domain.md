- ### Definition
  - The Cyber Physical Systems Domain classifies concepts for engineered systems in which computation and networking are tightly coupled with physical processes through sensing and actuation. It covers control loops, embedded computing, and the integration of digital models with physical behaviour. As a subject classification under the Robotics Domain, it scopes the joint design of the computational and physical elements rather than the mechanical platform alone.

- ### Semantic Classification
  - owl-class:: cps:CyberPhysicalSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Networking Domain]], [[Information Security Domain]], [[Artificial Intelligence Domain]]
  - has-part:: [[Embedded Control System]], [[Sensor Network]], [[Actuator System]], [[Digital Twin]], [[Real-Time Control Loop]]
  - requires:: [[Sensing Infrastructure]], [[Real-Time Computing]], [[Networking Domain]]
  - enables:: [[Autonomous Control]], [[Industrial Automation]], [[Condition Monitoring]]

- ### Content
  - The Cyber Physical Systems Domain organises systems where software directly governs physical action. Sensors observe the environment, embedded controllers compute responses, and actuators effect change, all within timing constraints that the physical process imposes. Digital twins maintain a synchronised model of the physical asset to support prediction and supervision.
  - Correctness in these systems is as much about timing as about logic, so real-time computing and deterministic networking are central requirements. A late control signal can be as harmful as a wrong one, which makes scheduling, jitter, and fault tolerance first-class concerns. Security is critical because a compromised controller can cause physical harm, not merely data loss.
  - Beneath the Robotics Domain, cyber physical systems bridge to networking for communication, to information security for protection, and to artificial intelligence for perception and planning. Treating the coupling of computation and physical process as its own classification keeps control and integration concerns distinct from the mechanical and actuation hardware.

- ### Provenance
  - sources:: [[IEC 61131]], [[NIST SP 1500-201]]
  - migration-date:: 2026-05-29T00:00:00Z