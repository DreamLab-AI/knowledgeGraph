Swarm robotics control architecture where a central controller coordinates all robot agents, providing global optimisation but creating a single point of failure.

### Semantic Classification

### Content

Centralised swarm control operates through a master controller that maintains global awareness of all agents' states and communicates control commands to each robot individually. This approach simplifies task specification and enables sophisticated multi-robot optimisation algorithms that would be computationally intractable to distribute across embedded processors. Examples include autonomous warehouse systems where a central scheduler coordinates picker robots, [[Drone Swarms]] operating under air traffic control, and manufacturing systems with centralised [[Production Scheduling]].

The architecture's primary advantage is the ability to employ powerful optimisation algorithms—linear programming, model predictive control, or graph-based planners—that guarantee globally optimal or near-optimal swarm behaviour. Communication requirements are typically manageable if a high-bandwidth central link and reliable network exist. However, the centralised controller becomes a critical vulnerability: network latency, controller failure, or communication loss results in swarm-wide degradation or paralysis.

Modern centralised systems address these limitations through hierarchical extensions where regional controllers manage sub-swarms with fallback modes enabling local autonomy if the central link fails. Real-time operating systems and cloud-edge computing architectures distribute computation between central planners and edge controllers. Research investigates adaptive switching between centralised and decentralised modes based on network quality, hybrid architectures that inherit advantages of both paradigms, and formal verification of fault-tolerance properties.

### Provenance

