public:: true

# Bullet Physics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bullet-physics",
  "@type": "Page",
  "vc:slug": "bullet-physics",
  "title": "Bullet Physics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bullet-physics",
  "@type": "Class",
  "label": "Bullet Physics",
  "definition": "Bullet Physics is an open-source, real-time physics simulation library that provides collision detection, rigid body dynamics, and soft body simulation for use in games, robotics, visual effects, and scientific computing. Originally developed by Erwin Coumans, it implements discrete and continuous collision detection alongside a constraint solver, enabling physically plausible interactions between complex 3D geometries at interactive frame rates.",
  "domain": "spatial-computing",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:physics-engine", "label": "Physics Engine"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:rigid-body-dynamics", "label": "Rigid Body Dynamics"},
      {"@id": "urn:ngm:class:soft-body-dynamics", "label": "Soft Body Dynamics"},
      {"@id": "urn:ngm:class:fluid-simulation", "label": "Fluid Simulation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"},
      {"@id": "urn:ngm:class:constraint-solver", "label": "Constraint Solver"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:game-engine", "label": "Game Engine"},
      {"@id": "urn:ngm:class:game-development", "label": "Game Development"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Bullet Physics]] is a portable, open-source physics simulation SDK implementing [[Rigid Body Dynamics]], [[Soft Body Dynamics]], and [[Collision Detection]] for interactive 3D applications. It provides a broadphase-narrowphase collision pipeline using axis-aligned bounding box trees (DBVT), convex shape algorithms (GJK/EPA), and triangle mesh collision shapes. A sequential impulse [[Constraint Solver]] resolves contact forces, joints, and motors at each simulation timestep, enabling realistic interaction in [[Game Engine]] environments, robotics simulators, and scientific visualisation tools.

- ### Relationships
  - Bullet Physics sits within the [[Physics Engine]] class family and is a foundational dependency for many [[Game Engine]] and [[Game Development]] toolchains. It enables [[Rigid Body Dynamics]] simulation including stacking, stacking, and impulse response, and [[Soft Body Dynamics]] for cloth and deformable meshes. Its [[Collision Detection]] subsystem feeds the [[Constraint Solver]] to produce physically consistent contact resolution. The library's C API bindings make it accessible to Python-based robotics simulators (PyBullet) and machine-learning training environments alike.

- ### Content
  - Bullet Physics was initiated by Erwin Coumans around 2003 whilst he was at Sony Computer Entertainment and released publicly in 2005 under a permissive zlib licence. It was designed from the outset to be platform-agnostic and suitable for PlayStation, Xbox, and PC targets simultaneously — an unusual requirement at a time when most physics middleware was platform-specific and commercially licensed. Its adoption accelerated rapidly through the mid-2000s as game studios sought an alternative to Havok's commercial engine; titles such as Grand Theft Auto IV integrated Bullet for partial physics tasks.

  - Technically, Bullet's simulation pipeline begins with broadphase collision detection using a dynamic bounding volume tree (DBVT) or sweep-and-prune (SAP) algorithm to quickly cull non-colliding pairs. Narrowphase detection then applies the Gilbert-Johnson-Keerthi (GJK) algorithm for convex shape pairs, augmented by the Expanding Polytope Algorithm (EPA) for penetration depth recovery. Contact manifolds are passed to the constraint solver — an iterative sequential impulse (SI) solver — which resolves linear and angular impulses subject to friction, restitution, and joint constraints. Soft body simulation extends this pipeline with position-based dynamics and FEM (finite element method) approaches.

  - In the robotics and AI community, PyBullet (the Python binding of Bullet 3) has become one of the dominant simulation backends for reinforcement learning research. OpenAI Gym, Google's dm_control, and various robot manipulation benchmarks rely on Bullet for physical environment simulation. This trajectory reflects a broader shift from entertainment-focused physics engines to scientific simulation infrastructure. Bullet also integrates with Blender via its Game Engine (deprecated but influential) and NVIDIA's Isaac Sim uses Bullet-compatible interfaces for ground-truth data generation.

  - By 2024–2025, Bullet Physics coexists with GPU-accelerated physics engines such as NVIDIA PhysX and Warp, which offer superior throughput for massively parallel simulation required by modern reinforcement learning. However, Bullet retains a strong position due to its zero-cost licensing, excellent CPU-side determinism, and deep integration in open robotics toolchains (ROS, Gazebo, PyBullet). Active development continues on Bullet 3, with GPU broadphase extensions and improved soft-body solvers. Its open-source nature and MIT-compatible licence ensure continued use in academic and applied research contexts.

