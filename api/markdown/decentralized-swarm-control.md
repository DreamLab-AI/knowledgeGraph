- ### Definition
  - Decentralised swarm control distributes decision-making across all robot agents, where each robot computes commands based solely on local sensor information and direct communication with neighbouring agents. This architecture inherently tolerates individual robot failures, scales to arbitrarily large swarms, and enables emergence of collective behaviours from simple local rules, contrasting with [[Centralized Swarm Control]].

- ### Semantic Classification
  - owl-class:: robotics:DecentralizedSwarmControl
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - bridges-to:: [[AI Agent System]]
  - is-subclass-of:: [[Swarm Control]], [[Robotics]]
  - has-part:: [[Local Decision Logic]], [[Neighbourhood Communication]], [[Emergent Behaviour]], [[Agent Autonomy]]
  - requires:: [[Local Sensing]], [[Inter-Agent Communication]], [[Distributed Algorithm]], [[Asynchronous Coordination]]
  - enables:: [[Fault Tolerance]], [[Scalability]], [[Adaptive Swarm Behaviour]], [[Emergent Task Performance]]
  - bridges-to:: [[Biologically Inspired Robotics]], [[Multi-Agent Systems]]

- ### Content
  Decentralised control leverages simple local rules executed independently by each robot to generate complex collective behaviour. Examples include flocking algorithms where robots maintain target separation distance and velocity alignment with neighbours, consensus algorithms where agents iteratively exchange state and converge on common values, and task allocation schemes where robots locally negotiate task assignments. The absence of a central coordinator eliminates single points of failure and enables operation when global communication is unavailable.

  This approach requires careful algorithm design to ensure that local rules lead to desired global emergent behaviour and convergence to stable states. [[Graph Theory]] and [[Distributed Control Theory]] provide analysis frameworks proving convergence under communication delays, network failures, and asynchronous updates. Decentralised algorithms typically require more communication bandwidth amongst agents compared to centralised instruction broadcasting, and convergence time scales with swarm size in ways that can render decentralised approaches inefficient for rapidly changing commands.

  Practical decentralised systems employ hierarchical hybrids combining local autonomy with occasional global synchronisation, or adaptive strategies that shift between decentralised and centralised coordination based on task requirements. Applications include [[Foraging Robots]], [[Collective Construction]], and [[Autonomous Vehicle Platooning]] where decentralisation provides resilience and [[Cooperative Behaviour]]. Research explores learning-based decentralised control where [[Neural Networks]] approximate optimal local policies, swarm algorithms with provable performance bounds, and biological analogues from insect colonies and fish schools.

- ### Provenance
  - sources:: [[Swarm Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z