public:: true

# Kinematics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c2682b164a2c7cc024ce272161329b353049f7a2f40ab0624ff0c2ce8244c55e",
  "@type": "Page",
  "vc:slug": "kinematics",
  "title": "Kinematics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9516"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Kinematics"
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
  "@id": "urn:ngm:class:kinematics",
  "@type": "Class",
  "label": "Kinematics",
  "definition": "Kinematics is the branch of mechanics that studies the geometry and mathematics of motion — positions, velocities, accelerations, and trajectories of bodies — without consideration of the forces or torques that cause that motion. In robotics and spatial computing, it encompasses forward kinematics (mapping joint-space parameters to Cartesian end-effector pose via homogeneous transformation matrices and Denavit-Hartenberg conventions) and inverse kinematics (solving the reverse mapping from desired pose to joint configurations). Kinematic analysis underpins motion planning, trajectory generation, workspace characterisation, collision avoidance, and animation systems across robotics, biomechanics, computer graphics, and autonomous vehicles.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:mechanics",
      "label": "Mechanics"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:differential-kinematics", "label": "Differential Kinematics"},
      {"@id": "urn:ngm:class:jacobian-matrix", "label": "Jacobian Matrix"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:homogeneous-transformation", "label": "Homogeneous Transformation"},
      {"@id": "urn:ngm:class:denavit-hartenberg-parameters", "label": "Denavit-Hartenberg Parameters"},
      {"@id": "urn:ngm:class:coordinate-frame", "label": "Coordinate Frame"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:trajectory-generation", "label": "Trajectory Generation"},
      {"@id": "urn:ngm:class:workspace-analysis", "label": "Workspace Analysis"},
      {"@id": "urn:ngm:class:collision-avoidance", "label": "Collision Avoidance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:linear-algebra", "label": "Linear Algebra"},
      {"@id": "urn:ngm:class:rigid-body-mechanics", "label": "Rigid Body Mechanics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:robot-joint", "label": "Robot Joint"},
      {"@id": "urn:ngm:class:manipulator", "label": "Manipulator"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"},
      {"@id": "urn:ngm:class:kinematic-chain", "label": "Kinematic Chain"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:dynamics", "label": "Dynamics"},
      {"@id": "urn:ngm:class:statics", "label": "Statics"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:computer-animation", "label": "Computer Animation"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:biomechanics", "label": "Biomechanics"},
      {"@id": "urn:ngm:class:autonomous-vehicles", "label": "Autonomous Vehicles"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:kinematic-analysis", "label": "Kinematic Analysis"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:kinematics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c2682b164a2c7cc024ce272161329b353049f7a2f40ab0624ff0c2ce8244c55e"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
      "kind": "ResolvedLink"
    }
  ],
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
  - Kinematics is the mathematical study of motion — describing positions, velocities, and accelerations of physical bodies and mechanisms — without reference to the forces or masses that produce that motion. In [[Robotics]], it governs how [[Manipulator]] arm configurations relate to [[End Effector]] poses through [[Forward Kinematics]] and [[Inverse Kinematics]]. The field sits at the intersection of [[Mechanics]], [[Linear Algebra]], and [[Geometry]], providing the geometric foundation on which [[Robot Dynamics]], [[Motion Planning]], and [[Trajectory Generation]] build.

- ### Overview
  - Kinematics is one of the oldest formal disciplines in mechanics, formalised through the work of Ampère, Reuleaux, and later Denavit and Hartenberg in the mid-20th century. Despite its classical origins, it remains a live area of engineering and computing research because:
    - Robot architectures grow more complex (parallel robots, cable-driven systems, hyper-redundant arms).
    - Real-time inverse kinematics solvers are demanded in interactive applications such as [[Computer Animation]], [[Augmented Reality]], and surgical robotics.
    - [[Digital Twin]] simulation requires high-fidelity kinematic models updated from live sensor data.
  - The two canonical problems in kinematics are:
    - **Forward kinematics (FK)**: Given a vector of joint variables (angles, translations), compute the position and orientation of each link and the [[End Effector]] in the world frame. This is always unique and computationally straightforward, typically solved by composing a chain of [[Homogeneous Transformation]] matrices.
    - **Inverse kinematics (IK)**: Given a desired end-effector pose, find the joint variable vector(s) that achieve it. This is generally non-linear, may have multiple solutions, no solutions (outside the workspace), or infinitely many solutions (for redundant robots), and is the computationally harder problem.
  - Kinematics feeds directly into:
    - [[Robot Dynamics]] — once joint trajectories are known, forces/torques can be computed.
    - [[Motion Planning]] — planners operate in joint space or Cartesian space using kinematic models.
    - [[Workspace Analysis]] — reachable and dexterous workspaces are derived kinematically.
    - [[Collision Avoidance]] — link geometry sweeps are computed from kinematic configurations.

- ### Key Components
  - #### Kinematic Representations
    - **[[Denavit-Hartenberg Parameters]]** — the canonical four-parameter convention (link length, link twist, link offset, joint angle) for representing serial robot geometry as a product of four elementary transforms per joint. Widely used in industrial robotics and [[Robot Operating System]] (ROS) URDF files.
    - **[[Homogeneous Transformation]] matrices** — 4×4 matrices encoding rotation (SO(3)) and translation in a unified framework, enabling efficient chain multiplication for FK.
    - **Screw theory and product-of-exponentials (PoE)** — an alternative to DH parameters using Lie group SE(3) and the exponential map; geometrically cleaner and better suited to modern optimisation-based IK.
    - **Quaternion representation** — compact, singularity-free rotation encoding used in [[Computer Animation]], [[Augmented Reality]] tracking, and IMU-based pose estimation.
  - #### The Jacobian in Kinematics
    - The **[[Jacobian Matrix]]** relates infinitesimal joint velocities to end-effector linear and angular velocities, forming the core of [[Differential Kinematics]].
    - Jacobian pseudo-inverse and damped least-squares methods underpin iterative IK solvers.
    - Singularity analysis: when the Jacobian loses rank, the robot loses degrees of freedom in certain directions — critical for safety and path planning.
  - #### Inverse Kinematics Solution Methods
    - **Closed-form (analytical)** — possible for robots satisfying the Pieper criterion (three consecutive joint axes intersect at a point); yields all solution branches efficiently.
    - **Iterative numerical** — Newton-Raphson, Jacobian transpose, damped least-squares (Levenberg-Marquardt); general but require convergence management.
    - **Learning-based** — neural networks (FABRIK, deep IK) approximate IK for high-DoF and hyper-redundant systems; increasingly used in [[Reinforcement Learning]]-based robot control.
  - #### Kinematic Chain Topologies
    - **Serial (open-chain)** — each link connects to exactly one parent and one child; most industrial manipulators.
    - **Parallel** — multiple kinematic chains connect base to end-effector simultaneously (e.g. Stewart platform, delta robot); higher stiffness and payload but smaller workspace.
    - **Redundant** — more degrees of freedom than task constraints; enables obstacle avoidance and joint-limit avoidance via null-space motion.
    - **Closed-chain** — loops within the mechanism; require constraint equations rather than simple forward-chain multiplication.

- ### Applications / Use Cases
  - #### Industrial Robotics
    - [[Manipulator]] path programming in automotive assembly, welding, painting, and pick-and-place relies entirely on kinematic models to convert Cartesian task descriptions into joint commands.
    - Offline programming tools (e.g. ABB RobotStudio, KUKA.Sim) use kinematic simulation to verify reach and cycle time before deployment.
  - #### Computer Animation and Games
    - Character skeletal rigs use FK for authored motion clips and IK for procedural foot-planting, hand-reaching, and look-at behaviours in real-time engines (Unreal, Unity).
    - Motion capture data is retargeted across character skeletons via kinematic solving.
  - #### Augmented and Virtual Reality
    - [[Augmented Reality]] hand-tracking pipelines reconstruct finger joint angles from depth or RGB cameras using kinematic hand models.
    - VR full-body avatars use kinematic solvers to infer elbow and hip positions from sparse tracker data (headset + controllers).
    - [[Digital Twin]] industrial overlays require live kinematic state of physical machines synced to virtual counterparts.
  - #### Surgical and Medical Robotics
    - Laparoscopic robot systems (da Vinci) rely on IK to map surgeon hand motions at the console to instrument tip motions at the patient.
    - Prosthetic limb control and biomechanical gait analysis depend on kinematic modelling of human joints.
  - #### Autonomous Vehicles and Drones
    - [[Autonomous Vehicles]] use kinematic bicycle and unicycle models for path tracking and steering control at low speeds.
    - Multi-rotor UAV attitude control involves rigid-body kinematics of the vehicle frame and propeller geometry.
  - #### Space Robotics
    - On-orbit servicing arms (Canadarm, ERA on ISS) require precise FK/IK including flexible-body corrections for micro-gravity operations.

- ### Relationships
  - hasPart:: [[Forward Kinematics]]
  - hasPart:: [[Inverse Kinematics]]
  - hasPart:: [[Differential Kinematics]]
  - hasPart:: [[Jacobian Matrix]]
  - requires:: [[Homogeneous Transformation]]
  - requires:: [[Denavit-Hartenberg Parameters]]
  - requires:: [[Coordinate Frame]]
  - dependsOn:: [[Linear Algebra]]
  - dependsOn:: [[Rigid Body Mechanics]]
  - enables:: [[Motion Planning]]
  - enables:: [[Robot Dynamics]]
  - enables:: [[Trajectory Generation]]
  - enables:: [[Workspace Analysis]]
  - enables:: [[Collision Avoidance]]
  - uses:: [[Robot Joint]]
  - uses:: [[Manipulator]]
  - uses:: [[End Effector]]
  - uses:: [[Kinematic Chain]]
  - contrastsWith:: [[Dynamics]]
  - contrastsWith:: [[Statics]]
  - bridges-to:: [[Computer Animation]]
  - bridges-to:: [[Augmented Reality]]
  - bridges-to:: [[Digital Twin]]
  - relatedTo:: [[Biomechanics]]
  - relatedTo:: [[Autonomous Vehicles]]

- ### Standards & Context
  - **ISO 9283:1998** — Manipulating industrial robots: performance criteria and related test methods; relies on kinematic definitions for pose accuracy and repeatability.
  - **ROS URDF (Unified Robot Description Format)** — XML schema encoding kinematic and dynamic parameters (joint axes, limits, DH geometry) used universally in [[Robot Operating System]] ecosystems.
  - **IEEE Std 1872-2015 (CORA)** — Core Ontology for Robotics and Automation; formally defines kinematic concepts including joint, link, and kinematic chain.
  - **DIN ISO 8373** — Robots and robotic devices vocabulary; defines terms overlapping with kinematics (pose, dexterity, workspace).
  - Theoretical foundations are codified in Craig (2005) *Introduction to Robotics*, Siciliano et al. (2009) *Robotics: Modelling, Planning and Control*, and Murray, Li & Sastry (1994) *A Mathematical Introduction to Robotic Manipulation* (open-access).

- ### Semantic Classification
  - owl-class:: robotics:Kinematics
  - owl-role:: concept

- ### Provenance
  - sources:: Craig, J.J. (2005) Introduction to Robotics; Siciliano et al. (2009) Robotics: Modelling, Planning and Control; Murray, Li & Sastry (1994) A Mathematical Introduction to Robotic Manipulation
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
