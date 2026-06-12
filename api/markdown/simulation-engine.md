- ### Definition
  - The computational core that manages state updates, inter-object interactions, deterministic execution, and data instrumentation within a simulation. Specialised engines include physics engines (PhysX, Bullet), behaviour-simulation engines, and AI training frameworks that expose parametric control, checkpointing, and massive parallelisation for large-scale experimental runs.

- ### Semantic Classification
  - owl-class:: infrastructure:SimulationEngine
  - owl-role:: Concept

- ### Relationships
  - Part Of [[Simulation Software]]
  - Uses [[GPU Compute]]
  - Uses [[Real-time Processing]]
  - Enables [[Digital Twin]]
  - Enables [[Machine Learning Discipline]]
  - Related To [[Rendering Engine]]

- ### Content
  # SimulationEngine
  SimulationEngine provides the computational infrastructure executing simulation models, managing state updates, handling inter-object interactions, and maintaining consistency across distributed participants. Specialized engines include physics engines (PhysX, Havok, Bullet) simulating mechanical interactions and collision, behavior simulation engines modeling agent decision-making and crowd dynamics using finite state machines, behavior trees, or utility AI, AI simulation frameworks training and deploying machine learning models within virtual environments, and specialized engines for fluids, soft bodies, or large-scale particle systems. Modern engines optimize performance through spatial partitioning reducing collision checks from O(n²) to O(n log n), multi-threading distributing computation across CPU cores, GPU acceleration offloading parallel tasks to graphics hardware, and deterministic execution ensuring identical results given the same inputs and random seeds for reproducible experiments or networked synchronization. SimulationEngines balance generality supporting diverse scenarios against specialization optimizing particular use cases, provide parametric control enabling scenario variation, support save/restore for checkpointing and analysis, and instrument outputs for data collection. Cloud-based simulation-as-a-service platforms enable massive parallelization running thousands of simulation variants exploring parameter spaces.
  - https://developer.nvidia.com/physx-sdk - NVIDIA PhysX physics simulation engine
  - https://pybullet.org/ - PyBullet physics simulation for ML and robotics
  - https://unity.com/products/unity-ml-agents - Unity ML-Agents simulation for AI
  - https://github.com/idmillington/cyclone-physics - Cyclone Physics simulation engine

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z