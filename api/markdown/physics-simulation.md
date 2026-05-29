- ### Definition
  - Physics Simulation is the computational modelling of physical phenomena — including rigid-body dynamics, soft-body deformation, fluid behaviour, and collision detection — to produce physically plausible behaviour in virtual environments. It underpins interactive experiences in virtual reality, robotics training, and digital-twin applications.

- ### Semantic Classification
  - owl-class:: spatial-computing:PhysicsSimulation
  - owl-role:: Concept

- ### Relationships
  - enables:: [[Virtual Reality]]
  - enables:: [[Robotics]]
  - uses:: [[Game Engine]]
  - supports:: [[Robot Learning]]
  - supports:: [[Autonomous Vehicle]]

- ### Content
  # PhysicsSimulation
  PhysicsSimulation provides computationally efficient approximations of real-world physical behavior for virtual objects through mathematical modeling of forces, motion, collisions, constraints, and material properties. Core functionalities include rigid body dynamics simulating solid objects with mass, inertia, and momentum conservation, soft body physics modeling deformable materials like rubber or organic tissue using mass-spring systems or finite element methods, cloth simulation replicating fabric behavior with realistic folding, draping, and tearing, fluid dynamics approximating liquid and gas behavior through particle-based or grid-based methods, and ragdoll physics creating believable character animation during falls or impacts. Modern physics engines employ spatially-optimized algorithms like broadphase collision detection using bounding volume hierarchies or spatial hashing, narrowphase collision using GJK (Gilbert-Johnson-Keerthi) and EPA (Expanding Polytope Algorithm), iterative constraint solvers like Sequential Impulses or Position-Based Dynamics resolving joints and contacts, continuous collision detection preventing tunneling where fast objects pass through thin obstacles, and parallel processing leveraging multiple CPU cores or GPU compute for large-scale simulations with thousands of dynamic objects.
  - https://pybullet.org/ - PyBullet physics simulation for robotics and ML
  - https://developer.nvidia.com/physx-sdk - NVIDIA PhysX real-time physics engine
  - https://docs.unity3d.com/Manual/PhysicsOverview.html - Unity integrated physics system
  - https://www.havok.com/ - Havok Physics middleware for games

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z