
An indirect coordination mechanism in which agents interact through modifications to a shared environment rather than through direct peer-to-peer communication. Originating in the study of social insects, stigmergy underlies emergent collective behaviour in swarm robotics and multi-agent systems: individual agents leave environmental signals (analogous to pheromone trails) that guide subsequent agents, producing globally coordinated outcomes from purely local rules.

- ### Semantic Classification

- ### Content
  Stigmergy is a foundational principle in the study of self-organising systems. The term was coined by entomologist Pierre-Paul Grassé in the 1950s to describe how termites coordinate nest construction without any central planner: each deposit of material changes the local environment in a way that probabilistically attracts further deposits, leading to the formation of intricate structures. The concept was later formalised and applied to ant-colony optimisation algorithms, which use virtual pheromone trails to solve combinatorial problems such as vehicle routing and task scheduling.

  In robotics, stigmergic coordination is attractive precisely because it requires no explicit inter-robot communication channel. A robot modifies the world (marks a visited location, places a physical marker, or updates a shared memory structure), and other robots perceive those modifications when they encounter the same location. This decoupling of action from communication makes swarm systems robust to individual robot failures and highly scalable, since coordination complexity does not grow with swarm size.

- ### Provenance

