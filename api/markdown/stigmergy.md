- ### Definition
  - Indirect coordination mechanism in swarm robotics where agents communicate through environmental modifications, enabling emergent collective behavior without direct communication.

- ### Semantic Classification
  - owl-class:: robotics:Stigmergy
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Stigmergy is a foundational principle in the study of self-organising systems. The term was coined by entomologist Pierre-Paul Grassé in the 1950s to describe how termites coordinate nest construction without any central planner: each deposit of material changes the local environment in a way that probabilistically attracts further deposits, leading to the formation of intricate structures. The concept was later formalised and applied to ant-colony optimisation algorithms, which use virtual pheromone trails to solve combinatorial problems such as vehicle routing and task scheduling.

  In robotics, stigmergic coordination is attractive precisely because it requires no explicit inter-robot communication channel. A robot modifies the world (marks a visited location, places a physical marker, or updates a shared memory structure), and other robots perceive those modifications when they encounter the same location. This decoupling of action from communication makes swarm systems robust to individual robot failures and highly scalable, since coordination complexity does not grow with swarm size.

- ### Provenance
  - sources:: [[Swarm Intelligence]], [[Robotics Research]]
  - migration-date:: 2026-04-26T00:00:00Z