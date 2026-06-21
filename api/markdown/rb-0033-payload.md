- ### Definition
  - Payload is the maximum mass a robot can carry or manipulate at its end-effector whilst maintaining its specified performance characteristics including accuracy, repeatability, and speed. It is a primary specification parameter for industrial and collaborative robots, directly constraining the tools, workpieces, and sensors the robot can accommodate. Payload is typically quoted as a static value but dynamic payload — accounting for inertial forces during acceleration — is often lower than the static figure, particularly at high speeds or with extended reach configurations.

- ### Semantic Classification
  - owl-class:: robotics:Payload
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Payload capacity is closely coupled with structural stiffness and joint torque limits, since higher payloads generate greater bending moments at each joint. It directly affects achievable accuracy and repeatability: exceeding the rated payload degrades positional performance and can accelerate mechanical wear. In collaborative robots, payload ratings are defined under ISO 10218 and ISO/TS 15066, where the kinetic energy of a moving payload is also a safety consideration for power-and-force-limiting applications.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z