public:: true

# Rigid Body Dynamics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8ac698f7d716c7cc93fad447018a3ca9a4c134276bfb8069a42e10041762a175",
  "@type": "Page",
  "vc:slug": "rigid-body-dynamics",
  "title": "Rigid Body Dynamics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9224"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Rigid Body Dynamics"
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
  "@id": "urn:ngm:class:rigid-body-dynamics",
  "@type": "Class",
  "label": "Rigid Body Dynamics",
  "definition": "Rigid Body Dynamics is the branch of classical mechanics that models solid objects as perfectly non-deformable, computing their translational and rotational motion under applied forces and torques using Newton-Euler equations or Lagrangian formulations. It addresses the full six-degree-of-freedom motion state — position, orientation, linear velocity, and angular velocity — and resolves contact constraints through collision detection, impulse resolution, and constraint solvers. The field underpins real-time simulation in game engines, robot motion planning, spacecraft attitude control, and extended-reality environments. Key numerical methods include symplectic Euler integration, Runge-Kutta schemes, and position-based dynamics for stable, interactive-rate simulation.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:physics-simulation",
      "label": "Physics Simulation"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:rigid-body-mechanics",
      "label": "Rigid Body Mechanics"
    },
    {
      "@id": "urn:ngm:class:multibody-dynamics",
      "label": "Multibody Dynamics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:classical-mechanics",
        "label": "Classical Mechanics"
      },
      {
        "@id": "urn:ngm:class:physics-simulation",
        "label": "Physics Simulation"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:collision-detection",
        "label": "Collision Detection"
      },
      {
        "@id": "urn:ngm:class:collision-response",
        "label": "Collision Response"
      },
      {
        "@id": "urn:ngm:class:constraint-satisfaction",
        "label": "Constraint Solving"
      },
      {
        "@id": "urn:ngm:class:numerical-integration",
        "label": "Numerical Integration"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:linear-algebra",
        "label": "Linear Algebra"
      },
      {
        "@id": "urn:ngm:class:quaternion-math",
        "label": "Quaternion Mathematics"
      },
      {
        "@id": "urn:ngm:class:inertia-tensor",
        "label": "Inertia Tensor"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:physics-engine",
        "label": "Physics Engine"
      },
      {
        "@id": "urn:ngm:class:physics-based-animation",
        "label": "Physics-Based Animation"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Robot Motion Planning"
      },
      {
        "@id": "urn:ngm:class:vehicle-simulation",
        "label": "Vehicle Simulation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:real-time-processing",
        "label": "Real-time Processing"
      },
      {
        "@id": "urn:ngm:class:coordinate-system",
        "label": "3D Coordinate Systems"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:soft-body-dynamics",
        "label": "Soft Body Dynamics"
      },
      {
        "@id": "urn:ngm:class:fluid-simulation",
        "label": "Fluid Simulation"
      },
      {
        "@id": "urn:ngm:class:finite-element-analysis",
        "label": "Finite Element Method"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ]
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:rigid-body-dynamics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8ac698f7d716c7cc93fad447018a3ca9a4c134276bfb8069a42e10041762a175"
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
  - Rigid Body Dynamics is the sub-discipline of [[Classical Mechanics]] that treats solid objects as perfectly non-deformable and computes their six-degree-of-freedom motion — governed by Newton-Euler equations — under forces, torques, and contact constraints. It encompasses [[Collision Detection]], impulse-based [[Collision Response]], and [[Constraint Solving]] to produce physically plausible behaviour for interactive and offline simulation. The field is foundational to [[Physics Engine]] design, [[Robot Motion Planning]], spacecraft attitude control, and the immersive fidelity of [[Spatial Computing]] environments. [[Numerical Integration]] schemes such as symplectic Euler and Runge-Kutta methods are central to stable real-time performance.

- ### Overview
  - Rigid body dynamics abstracts away material deformation, representing every solid body by its mass, centre of mass, and [[Inertia Tensor]]. This simplification makes the equations of motion computationally tractable at interactive rates.
  - The state of a rigid body at any instant is fully described by six scalar quantities (three translational, three rotational) plus their time derivatives — twelve values in total. Integrating Newton's second law for both linear and angular components over time produces a trajectory.
  - Contact and joint constraints couple multiple bodies; resolving these constraints is the primary computational challenge and drives the design of [[Physics Engine]] architectures.
  - The field is mature: foundational equations date to the 18th century (Euler, Lagrange, d'Alembert), and robust real-time solvers have been available since the early 2000s (PhysX, Bullet, Havok, MuJoCo).

- ### Key Components
  - #### State Representation
    - **Position and orientation** — typically stored as a 3-vector plus a [[Quaternion Mathematics]] (or rotation matrix) to avoid gimbal lock.
    - **Linear velocity and angular velocity** — first time derivatives of position and orientation respectively.
    - **[[Inertia Tensor]]** — a 3×3 symmetric positive-definite matrix encoding mass distribution; transforms angular momentum to angular velocity.
  - #### Equations of Motion
    - **Newton-Euler equations** — $F = ma$ for translation; $\tau = I\alpha + \omega \times (I\omega)$ for rotation.
    - **Lagrangian formulation** — generalised coordinates and the Euler-Lagrange equations; common in multi-link [[Kinematics]] chains.
    - **d'Alembert's principle** — recasts dynamic problems as instantaneous static equilibria of virtual work.
  - #### [[Numerical Integration]]
    - **Symplectic (semi-implicit) Euler** — first-order, energy-preserving on average; preferred for real-time game physics.
    - **Runge-Kutta (RK4)** — higher accuracy for offline simulation and robotics planning.
    - **[[Position-Based Dynamics]]** — directly manipulates positions rather than velocities; highly stable for interactive use (cloth, soft coupling).
    - **Verlet integration** — time-reversible; popular in molecular dynamics and some game physics toolkits.
  - #### [[Collision Detection]]
    - **Broad phase** — axis-aligned bounding box (AABB) trees or sweep-and-prune to quickly cull non-colliding pairs.
    - **Narrow phase** — GJK (Gilbert-Johnson-Keerthi) and EPA (Expanding Polytope Algorithm) for exact contact manifold computation.
    - **Continuous collision detection (CCD)** — tunnelling prevention for fast-moving or thin objects.
  - #### [[Collision Response]]
    - **Impulse-based resolution** — applies instantaneous velocity changes at contact points using restitution and friction coefficients.
    - **Sequential Impulse (SI) / Projected Gauss-Seidel (PGS)** — iterative constraint solver used in PhysX, Bullet, and Box2D.
    - **Linear Complementarity Problem (LCP)** — exact formulation; computationally expensive but used in offline high-fidelity simulators.
  - #### [[Constraint Solving]]
    - Joints (hinge, ball, prismatic, universal) are encoded as bilateral or unilateral constraints limiting relative motion between bodies.
    - Articulated body algorithm (Featherstone) solves multi-body constraint trees in O(n) instead of O(n³).

- ### Applications and Use Cases
  - #### Game Engines and [[Spatial Computing]]
    - Every major game engine integrates a rigid body solver: Unreal Engine uses Chaos Physics (natively developed); Unity uses PhysX (now transitioning to Havok). These handle thousands of interacting bodies at 60+ Hz.
    - [[Extended Reality]] (XR) headsets require physics fidelity to maintain presence; virtual objects must respond to controller grabs with plausible contact and momentum transfer.
    - [[Virtual Worlds]] simulations — from racing games to virtual manufacturing training — rely on rigid body dynamics for physical credibility.
  - #### Robotics
    - [[Robot Motion Planning]] algorithms (RRT, PRM) use rigid body dynamics models to verify that planned trajectories are collision-free and dynamically feasible.
    - Torque-controlled manipulators solve the inverse dynamics problem (given desired acceleration, compute joint torques) using rigid body equations.
    - [[Sim-to-Real Transfer]] in [[Reinforcement Learning]] depends on accurate rigid body simulation (MuJoCo, Isaac Gym) to train policies transferable to physical hardware.
  - #### Engineering and Scientific Simulation
    - [[Digital Twin]] platforms for machinery, bridges, and aerospace structures use rigid body models as the backbone before coupling deformable body or [[Finite Element Method]] layers.
    - Spacecraft attitude determination and control — satellite reaction wheels and thruster firing are modelled as rigid body angular momentum exchanges.
    - Crash simulation (automotive) uses rigid body surrogates for early-stage analysis before FEM refinement.
  - #### Film and Visual Effects
    - [[Physics-Based Animation]] in VFX pipelines (Houdini, Maya) uses rigid body solvers to simulate debris, shatter, and prop interactions, dramatically reducing key-frame animation labour.
    - Destruction simulations fracture objects at runtime using Voronoi decomposition, with each fragment becoming an independent rigid body.

- ### Relationships
  - partOf:: [[Classical Mechanics]]
  - partOf:: [[Physics Simulation]]
  - hasPart:: [[Collision Detection]]
  - hasPart:: [[Collision Response]]
  - hasPart:: [[Constraint Solving]]
  - hasPart:: [[Numerical Integration]]
  - requires:: [[Linear Algebra]]
  - requires:: [[Quaternion Mathematics]]
  - requires:: [[Inertia Tensor]]
  - enables:: [[Physics Engine]]
  - enables:: [[Physics-Based Animation]]
  - enables:: [[Robot Motion Planning]]
  - enables:: [[Vehicle Simulation]]
  - uses:: [[Real-time Processing]]
  - uses:: [[3D Coordinate Systems]]
  - contrastsWith:: [[Soft Body Dynamics]]
  - contrastsWith:: [[Fluid Simulation]]
  - contrastsWith:: [[Finite Element Method]]
  - relatedTo:: [[Kinematics]]
  - relatedTo:: [[Inverse Kinematics]]
  - relatedTo:: [[Spatial Computing]]
  - bridges-to:: [[Reinforcement Learning]]
  - bridges-to:: [[Digital Twin]]

- ### Standards and Context
  - No single ISO/IEEE standard governs rigid body dynamics; practice is defined by open-source solver APIs and engine-specific documentation.
  - **Bullet Physics** (open source, Pybullet) is the de facto reference implementation for research and academic benchmarking.
  - **MuJoCo** (acquired by DeepMind/Google) is the standard simulator for robotics [[Reinforcement Learning]] research; its contact model combines smooth complementarity with implicit integration.
  - **PhysX** (NVIDIA) is the dominant real-time solver in commercial game engines; GPU acceleration via CUDA enables large-scale scenes.
  - **Havok Physics** (Microsoft) is widely used in AAA game titles and now integrates with Xbox cloud gaming infrastructure.
  - **OpenUSD Physics** — Universal Scene Description includes a physics schema (`UsdPhysics`) enabling rigid body scenes to be described declaratively and exchanged between applications — increasingly relevant for [[Digital Twin]] workflows and [[Metaverse]] interoperability.
  - Khronos Group's **glTF** and **OpenXR** standards intersect with rigid body state export and XR physics interoperability.

- ### Semantic Classification
  - owl-class:: spatial-computing:RigidBodyDynamics
  - owl-role:: Concept

- ### Provenance
  - sources:: Bullet Physics documentation; MuJoCo technical report; Erin Catto GDC presentations (Box2D / constraint solving); Featherstone "Rigid Body Dynamics Algorithms" (Springer, 2008); NVIDIA PhysX SDK documentation; OpenUSD Physics schema specification
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
