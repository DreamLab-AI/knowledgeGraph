public:: true

# Physics Simulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:db4f7a72de3eb29056ec9448e77b2673e159f31de3d10d5852c46b5f22ea845e",
  "@type": "Page",
  "vc:slug": "physics-simulation",
  "title": "Physics Simulation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9124"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Physics Simulation"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:physics-simulation",
  "@type": "Class",
  "label": "Physics Simulation",
  "definition": "Physics Simulation is the computational modelling of physical phenomena — encompassing rigid-body dynamics, soft-body deformation, fluid behaviour, cloth simulation, collision detection, and constraint solving — to produce physically plausible behaviour in real-time or offline virtual environments. It applies classical mechanics, continuum mechanics, and numerical integration methods to generate deterministic or probabilistic trajectories of simulated objects and agents. Physics simulation is foundational to interactive 3D applications, robotics training, digital-twin fidelity, and scientific computation, enabling rapid exploration of scenarios that would be costly or dangerous in the physical world. Modern implementations exploit GPU parallelism, hierarchical spatial data structures, and position-based dynamics to meet real-time performance budgets across heterogeneous hardware.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:rigid-body-dynamics", "label": "Rigid Body Dynamics"},
      {"@id": "urn:ngm:class:soft-body-physics", "label": "Soft Body Physics"},
      {"@id": "urn:ngm:class:fluid-simulation", "label": "Fluid Simulation"},
      {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"},
      {"@id": "urn:ngm:class:constraint-solver", "label": "Constraint Solver"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:numerical-integration", "label": "Numerical Integration"},
      {"@id": "urn:ngm:class:spatial-data-structure", "label": "Spatial Data Structure"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-reality", "label": "Virtual Reality"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:robotics", "label": "Robotics"},
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:finite-element-method", "label": "Finite Element Method"},
      {"@id": "urn:ngm:class:smoothed-particle-hydrodynamics", "label": "Smoothed Particle Hydrodynamics"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robot-learning", "label": "Robot Learning"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:sim-to-real-transfer", "label": "Sim-to-Real Transfer"},
      {"@id": "urn:ngm:class:neural-physics", "label": "Neural Physics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:3d-rendering", "label": "3D Rendering"},
      {"@id": "urn:ngm:class:animation", "label": "Animation"},
      {"@id": "urn:ngm:class:scientific-computing", "label": "Scientific Computing"},
      {"@id": "urn:ngm:class:real-time-systems", "label": "Real-Time Systems"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:kinematic-animation", "label": "Kinematic Animation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:physics-engine", "label": "Physics Engine"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:physics-simulation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:db4f7a72de3eb29056ec9448e77b2673e159f31de3d10d5852c46b5f22ea845e"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Physics Simulation is the computational modelling of physical phenomena — including [[Rigid Body Dynamics]], [[Soft Body Physics]], [[Fluid Simulation]], [[Collision Detection]], and constraint solving — to produce physically plausible behaviour in real-time or pre-computed virtual environments. It applies classical mechanics, continuum mechanics, and [[Numerical Integration]] methods to deterministically or probabilistically evolve the state of simulated objects over discrete time steps. Physics simulation underpins [[Virtual Reality]], [[Robotics]], [[Digital Twin]], and scientific workflows by enabling rapid, safe, and inexpensive exploration of scenarios that would be costly or hazardous to test in the physical world. Modern engines exploit [[GPU Compute]], hierarchical spatial structures, and iterative solvers to achieve real-time performance across heterogeneous hardware.

- ### Overview
  - Physics simulation bridges mathematical physics with interactive computing, converting equations of motion into frame-by-frame state updates for virtual objects.
  - The core loop: (1) apply external forces and torques; (2) run [[Collision Detection]] to find intersecting pairs; (3) resolve contacts and constraints via an iterative [[Constraint Solver]]; (4) integrate velocities and positions with [[Numerical Integration]] (Euler, Verlet, Runge-Kutta); (5) update the scene graph for [[3D Rendering]].
  - Fidelity is governed by the time-step size, solver iteration count, and the physical model chosen (penalty-based, impulse-based, or position-based dynamics).
  - Real-time applications tolerate approximations — fixed-step integration, simplified geometry proxies, early-exit broadphase — that offline scientific simulations do not.
  - The field is mature: physics middleware (NVIDIA PhysX, Havok, Bullet, ODE) has been embedded in commercial [[Game Engine]] stacks since the early 2000s, and is now also a first-class feature of robotics simulators (Isaac Sim, MuJoCo, Gazebo) and engineering tools (ANSYS, ABAQUS, OpenFOAM).

- ### Key Components
  - #### Dynamics Subsystems
    - [[Rigid Body Dynamics]] — treats objects as perfectly stiff; tracks position, orientation, linear and angular momentum; conserves energy through impulse resolution at contacts.
    - [[Soft Body Physics]] — models deformable objects (rubber, tissue, cloth) via mass-spring lattices or [[Finite Element Method]] discretisation; captures bending, stretching, and tearing.
    - [[Fluid Simulation]] — approximates liquid and gas behaviour using [[Smoothed Particle Hydrodynamics]] (Lagrangian, particle-based) or grid-based Navier-Stokes solvers (Eulerian); used for water, smoke, fire effects.
    - Cloth simulation — specialised soft-body solver with distance constraints for realistic fabric draping, creasing, and self-collision.
    - Ragdoll physics — hierarchical rigid-body chains driven by physics rather than [[Animation]] curves; used for character death and impact reactions.
  - #### Collision Pipeline
    - Broadphase — fast approximate overlap test using Axis-Aligned Bounding Boxes (AABBs), Bounding Volume Hierarchies (BVH), or sweep-and-prune; eliminates most non-colliding pairs cheaply.
    - Narrowphase — precise geometry tests using GJK (Gilbert-Johnson-Keerthi) algorithm and EPA (Expanding Polytope Algorithm) for convex shapes; SAT (Separating Axis Theorem) for polytopes.
    - Continuous Collision Detection (CCD) — predicts future intersections to prevent tunnelling of fast-moving thin objects.
    - Contact manifold generation — computes contact points, normals, and penetration depths for solver input.
  - #### Solvers and Integration
    - [[Constraint Solver]] — resolves joint limits, contact forces, and friction using Sequential Impulses (SI), Projected Gauss-Seidel (PGS), or direct methods (LCP).
    - Position-Based Dynamics (PBD) — directly corrects positions to satisfy constraints; unconditionally stable, popular in real-time cloth and soft body.
    - Extended Position-Based Dynamics (XPBD) — adds compliance parameter to PBD, better recovering elastic behaviour.
    - [[Numerical Integration]] — semi-implicit Euler is the workhorse for real-time; Runge-Kutta for offline accuracy.
  - #### Spatial Acceleration
    - [[Spatial Data Structure]] — BVH trees, octrees, and spatial hashing partition scene geometry to accelerate broadphase and ray queries.
    - [[GPU Compute]] parallelises broadphase pair generation, constraint solving, and particle updates across thousands of CUDA/Metal/Vulkan compute threads.

- ### Applications and Use Cases
  - #### Interactive Entertainment
    - [[Game Engine]] integration (Unity, Unreal Engine, Godot) provides out-of-the-box physics for vehicles, projectiles, destructible environments, and character controllers.
    - [[Virtual Reality]] presence is undermined by objects that pass through each other or fail to react; high-fidelity collision and grasping physics are critical to immersion.
    - [[Augmented Reality]] overlays must respect real-world geometry, requiring fast physics queries against reconstructed meshes.
  - #### Robotics and Autonomous Systems
    - [[Robotics]] simulators (NVIDIA Isaac, MuJoCo, PyBullet, Gazebo) allow [[Robot Learning]] via [[Reinforcement Learning]] without hardware wear; thousands of parallel simulation instances run on a single GPU cluster.
    - [[Sim-to-Real Transfer]] is the central challenge: reducing the reality gap requires accurate contact and actuator dynamics in simulation.
    - [[Autonomous Vehicle]] development uses physics-accurate virtual environments (CARLA, LGSVL) to test edge cases impassable in real traffic.
  - #### Digital Engineering
    - [[Digital Twin]] platforms embed physics engines to mirror factory floor, infrastructure, or space-craft state in real time, enabling predictive maintenance and anomaly detection.
    - Scientific computing (computational fluid dynamics, structural FEA, molecular dynamics) uses high-precision physics solvers beyond real-time budgets.
    - Surgical simulation and medical training require deformable tissue models for haptic feedback systems.
  - #### Film and VFX
    - Offline physics renderers (Houdini FX, Maya nCloth, Bifrost) compute high-accuracy fluid, cloth, and destruction caches that [[3D Rendering]] engines render without real-time constraints.

- ### Relationships
  - hasPart:: [[Rigid Body Dynamics]]
  - hasPart:: [[Soft Body Physics]]
  - hasPart:: [[Fluid Simulation]]
  - hasPart:: [[Collision Detection]]
  - hasPart:: [[Constraint Solver]]
  - partOf:: [[Game Engine]]
  - partOf:: [[Digital Twin]]
  - requires:: [[Numerical Integration]]
  - requires:: [[Spatial Data Structure]]
  - requires:: [[GPU Compute]]
  - enables:: [[Virtual Reality]]
  - enables:: [[Augmented Reality]]
  - enables:: [[Robotics]]
  - enables:: [[Autonomous Vehicle]]
  - uses:: [[Finite Element Method]]
  - uses:: [[Smoothed Particle Hydrodynamics]]
  - supports:: [[Robot Learning]]
  - supports:: [[Reinforcement Learning]]
  - bridges-to:: [[Sim-to-Real Transfer]]
  - bridges-to:: [[Neural Physics]]
  - relatedTo:: [[3D Rendering]]
  - relatedTo:: [[Animation]]
  - relatedTo:: [[Scientific Computing]]
  - relatedTo:: [[Real-Time Systems]]
  - contrastsWith:: [[Kinematic Animation]]

- ### Standards and Context
  - No single international standard governs physics simulation APIs; de-facto standards are established by widely adopted middleware.
  - **NVIDIA PhysX** (open-sourced as PhysX SDK) is embedded in Unreal Engine and Unity; GPU-accelerated via CUDA and WARP.
  - **Havok Physics** — proprietary middleware dominant in AAA game development; acquired by Microsoft (2015).
  - **Bullet Physics** (open source, zlib licence) is the reference implementation for robotics research (PyBullet) and visual effects (Blender).
  - **MuJoCo** (Multi-Joint dynamics with Contact) — open-sourced by DeepMind (2022); specialised for articulated rigid-body control in robotics [[Reinforcement Learning]].
  - **Open Dynamics Engine (ODE)** — early open-source library influential in robotics and [[Game Engine]] prototyping.
  - **OpenFOAM** — open-source computational fluid dynamics solver used in engineering and scientific workflows.
  - Khronos Group's **OpenXR** standard interfaces [[Virtual Reality]] and [[Augmented Reality]] runtimes but does not specify physics; physics behaviour sits above the XR API layer.
  - IEEE and ISO standards for digital twins (ISO 23247, IEC 62832) indirectly require physics-accurate modelling for manufacturing process simulation.
  - Robotics Operating System (**ROS**) ecosystem integrates physics simulators (Gazebo, Isaac) via standardised topic/service APIs.

- ### Neural and Learned Physics
  - Traditional physics solvers are deterministic but computationally expensive at high resolution. Machine learning is increasingly used to accelerate or replace parts of the pipeline.
  - [[Neural Physics]] approaches (Graph Neural Networks, Neural ODEs, Fourier Neural Operators) learn surrogate models from simulation data, running orders of magnitude faster at inference time.
  - [[Reinforcement Learning]] for control depends on physics simulation as an environment; differentiable physics (Warp, Taichi, DiffTaichi) enables gradient-based policy optimisation.
  - Physics-informed neural networks (PINNs) embed PDE constraints into the loss function, blending data-driven and first-principles modelling.
  - [[Sim-to-Real Transfer]] remains the open research problem: domain randomisation, system identification, and adaptive simulation parameters attempt to narrow the reality gap.

- ### Provenance
  - sources:: NVIDIA PhysX SDK documentation; Bullet Physics library (Erwin Coumans); MuJoCo documentation (DeepMind); Havok Physics technical overview; Unity Physics Manual; Unreal Engine Physics documentation; PyBullet quickstart guide.
  - updated:: 2026-06-13
