- ### Definition
  - Subsumption architecture is a layered control method for autonomous agents in which simple reactive behaviours are stacked, with higher layers able to suppress or override lower ones to produce competent behaviour without a central world model.

- ### Semantic Classification
  - owl-class:: metaverse:SubsumptionArchitecture
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Multi-Agent System]], [[Robotics]]
  - requires:: [[Autonomous Agent]]
  - enables:: [[Swarm Intelligence]]

- ### Content
  - Each layer in a subsumption architecture couples sensing directly to action for one behaviour, such as avoiding obstacles or wandering. Layers run concurrently, and arbitration lets higher-priority behaviours inhibit lower ones, giving reliable real-world performance from tightly coupled perception and action.
  - The approach influenced behaviour-based robotics and feeds into swarm and multi-agent systems where many simple agents produce collective competence. It contrasts with deliberative planning that depends on a maintained internal model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z