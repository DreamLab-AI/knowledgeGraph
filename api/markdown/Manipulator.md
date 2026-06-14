public:: true
alias:: RB-0003-manipulator

# Manipulator
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:671b17c97b1858242b383b45416e1efb47beb39dfe2cce1e4487f2a0ac2c369f",
  "@type": "Page",
  "vc:slug": "manipulator",
  "title": "Manipulator",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-8373-2021",
      "vc:label": "ISO 8373:2021"
    },
    {
      "@id": "urn:visionflow:linked:robot-rb-0001",
      "vc:label": "Robot (RB-0001)"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Manipulator"
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
  "@id": "urn:ngm:class:manipulator",
  "@type": "Class",
  "label": "Manipulator",
  "definition": "A manipulator is a mechanically programmable device comprising a series of rigid links connected by actuated joints arranged in a serial or parallel kinematic chain, capable of displacing objects or tools through a defined workspace. The distal end carries an end-effector that interfaces directly with the task environment, enabling grasping, welding, assembly, or other physical interactions. Manipulators are parameterised by their degrees of freedom, workspace geometry, payload capacity, and control architecture, and are the foundational actuator subsystem in industrial, collaborative, and service robots. The ISO 8373:2021 standard defines a manipulator as the machine mechanism of a robot.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot",
      "label": "Robot"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:robotic-arm",
      "label": "Robotic Arm"
    },
    {
      "@id": "urn:ngm:class:robot-arm",
      "label": "Robot Arm"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effector"
      },
      {
        "@id": "urn:ngm:class:joint",
        "label": "Joint"
      },
      {
        "@id": "urn:ngm:class:link",
        "label": "Link"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:wrist",
        "label": "Wrist"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robot",
        "label": "Robot"
      },
      {
        "@id": "urn:ngm:class:robotic-system",
        "label": "Robotic System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:robot-controller",
        "label": "Robot Controller"
      },
      {
        "@id": "urn:ngm:class:kinematic-model",
        "label": "KinematicModel"
      },
      {
        "@id": "urn:ngm:class:trajectory-planning",
        "label": "Trajectory Planning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:pick-and-place",
        "label": "Pick and Place"
      },
      {
        "@id": "urn:ngm:class:assembly-automation",
        "label": "Assembly Automation"
      },
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      },
      {
        "@id": "urn:ngm:class:robot-welding",
        "label": "Robot Welding"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:forward-kinematics",
        "label": "Forward Kinematics"
      },
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:iso-8373-2021",
        "label": "ISO 8373 2021"
      },
      {
        "@id": "urn:ngm:class:denavit-hartenberg-convention",
        "label": "Denavit-Hartenberg Convention"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:force-torque-sensor",
        "label": "Force Torque Sensor"
      },
      {
        "@id": "urn:ngm:class:servo-motor",
        "label": "Servo Motor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-robot-collaboration",
        "label": "Human-Robot Collaboration"
      },
      {
        "@id": "urn:ngm:class:flexible-manufacturing",
        "label": "Flexible Manufacturing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:mobile-robot",
        "label": "Mobile Robot"
      },
      {
        "@id": "urn:ngm:class:autonomous-mobile-manipulator",
        "label": "Autonomous Mobile Manipulator"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:collaborative-robot",
        "label": "Collaborative Robot"
      },
      {
        "@id": "urn:ngm:class:parallel-robot",
        "label": "Parallel Robot"
      },
      {
        "@id": "urn:ngm:class:redundant-manipulator",
        "label": "Redundant Manipulator"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:manipulator:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:671b17c97b1858242b383b45416e1efb47beb39dfe2cce1e4487f2a0ac2c369f"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 8373:2021]]",
      "resolved": "urn:visionflow:linked:iso-8373-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robot (RB-0001)]]",
      "resolved": "urn:visionflow:linked:robot-rb-0001",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
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
  - A **manipulator** is a programmable mechanical device consisting of rigid [[Link]] segments connected by actuated [[Joint]] elements arranged in a [[Kinematic Chain]], with an [[End-Effector]] mounted at the distal end for interacting with the task environment. Manipulators are the foundational actuator subsystem of [[Robot]] systems, enabling physical work such as grasping, welding, painting, and assembly. The [[ISO 8373:2021]] standard formally defines a manipulator as "the machine mechanism of a robot", distinguishing it from the robot controller, sensors, and software stack. Their capabilities are characterised by degrees of freedom, workspace volume, repeatability, payload, and the nature of their [[Kinematic Model]].

- ### Overview
  - Manipulators are the most widely deployed class of robotic mechanism in industrial and research settings, with a technology lineage traceable to the Unimate arm deployed at General Motors in 1961.
  - A manipulator converts electrical or hydraulic energy into precise Cartesian motion of its end-effector by coordinating multiple actuated joints under closed-loop control.
  - The distinction between a manipulator and a complete [[Robot]] is taxonomic: the manipulator is the *mechanical* subsystem; the robot is the complete system including controller, sensors, and software.
  - Modern manipulators span a spectrum from heavy industrial arms with payloads exceeding 1,000 kg to collaborative desktop units weighing under 10 kg.
  - [[Collaborative Robot]] (cobot) manipulators are designed for direct human-robot proximity through compliant control, force limiting, and rounded geometries.
  - [[Parallel Robot]] manipulators (e.g. Stewart platforms, Delta robots) contrast with serial-chain architectures by connecting the end-effector to the base through multiple independent kinematic branches, yielding higher stiffness and speed at the cost of reduced workspace volume.

- ### Key Components
  - **[[Link]]** — rigid structural segment transmitting forces and torques between adjacent joints; geometry determines workspace and stiffness.
  - **[[Joint]]** — the kinematic pair connecting adjacent links; typically revolute (rotational) or prismatic (translational); each powered joint provides one degree of freedom.
  - **[[End-Effector]]** — the tool or gripper attached at the wrist; may be a vacuum cup, magnetic gripper, welding torch, surgical instrument, or dexterous robotic hand.
  - **[[Wrist]]** — the subset of joints closest to the end-effector; typically a spherical wrist (three intersecting rotational axes) enabling arbitrary end-effector orientation.
  - **[[Actuator]]** — the power source for each joint; electric servo motors dominate modern manipulators, with hydraulic actuation retained for heavy-duty applications.
  - **[[Servo Motor]]** — brushless DC or AC motors with high-resolution encoders providing the torque and position feedback required for precise trajectory tracking.
  - **[[Force-Torque Sensor]]** — mounted at the wrist to provide real-time contact force and torque data, enabling compliant assembly, surface following, and safe human-robot contact.
  - **[[Robot Controller]]** — the real-time embedded system executing joint-space control loops (typically at 1–8 kHz), interpreting task-space commands, and enforcing safety limits.

- ### Kinematic Architecture
  - **Serial (Open-Chain) Manipulators** — the dominant commercial form; joints arranged in a single chain from base to end-effector; workspace is large but stiffness and accuracy degrade at reach extremes.
    - [[Denavit-Hartenberg Convention]] (DH parameters) provides the canonical 4-parameter per-joint description of serial-chain geometry used universally in robot modelling.
    - Six degrees of freedom (6-DOF) is the minimum for arbitrary placement and orientation of the end-effector in 3D space.
    - Seven or more DOF yields a [[Redundant Manipulator]] with null-space motion enabling obstacle avoidance and singularity avoidance while maintaining end-effector pose.
  - **Parallel Manipulators** — multiple kinematic chains connect base to end-effector; higher stiffness, lower inertia, higher speed; limited workspace; examples include [[Delta Robot]] and [[Stewart Platform]].
  - **Hybrid Manipulators** — combine serial and parallel sub-structures to balance workspace with stiffness.

- ### Kinematics and Control
  - **[[Forward Kinematics]]** — computes end-effector pose from joint angles; analytically tractable for any serial chain via the DH product-of-transforms method.
  - **[[Inverse Kinematics]]** — computes joint angles achieving a desired end-effector pose; generally non-linear; may have multiple solutions, no solution (outside workspace), or a continuum of solutions (redundant arm).
  - **[[Trajectory Planning]]** — interpolates smooth joint-space or Cartesian-space paths between waypoints, respecting velocity and acceleration limits.
  - **[[Motion Planning]]** — higher-level planning in configuration space (C-space) to find collision-free paths; algorithms include RRT, PRM, and their variants.
  - **[[Jacobian Matrix]]** — the linear mapping from joint velocities to end-effector velocities; used in resolved-motion rate control and in detecting kinematic singularities.
  - **Torque/Impedance Control** — replaces pure position control with force-aware schemes; essential for assembly, grinding, and collaborative tasks where contact dynamics must be regulated.

- ### Applications
  - **Industrial Automation**
    - [[Robot Welding]] — arc and spot welding in automotive body shops; manipulators provide repeatable torch positioning at high duty cycles.
    - [[Assembly Automation]] — precision insertion, fastening, and mating operations in electronics and aerospace manufacturing.
    - [[Pick and Place]] — high-speed transfer of components between conveyors, magazines, and fixtures; Delta robots dominate in food and pharmaceutical lines.
    - Painting, sealing, and surface treatment using path-following manipulators with spray end-effectors.
  - **Collaborative and Human-Proximate Tasks**
    - [[Human-Robot Collaboration]] — cobots such as Universal Robots UR-series and KUKA LBR iiwa work directly beside human operators on shared assembly cells.
    - [[Teleoperation]] — bilateral teleoperation systems use a master manipulator to control a remote slave; applications span nuclear decommissioning, underwater intervention, and robotic surgery (e.g. da Vinci Surgical System).
  - **Research and Emerging Domains**
    - Agricultural harvesting robots using vision-guided manipulators for fruit picking.
    - [[Digital Twin]] simulation of manipulator work cells for virtual commissioning and offline programming.
    - [[Reinforcement Learning]] applied to dexterous manipulation — learning contact-rich tasks (peg insertion, cloth folding) from simulation with sim-to-real transfer.
    - Space manipulation — free-floating robotic arms on satellites and the International Space Station (SSRMS Canadarm2).

- ### Taxonomy
  - By kinematic structure: serial / parallel / hybrid
  - By actuation: electric / hydraulic / pneumatic / cable-driven / soft/continuum
  - By deployment context: industrial / collaborative / service / surgical / space
  - By workspace geometry: Cartesian (PPP) / cylindrical (RPP) / spherical (RRP) / SCARA (RRP) / articulated (RRR) / delta (parallel)
  - [[Collaborative Robot]] — torque-limited, force-sensing variant designed for proximity to humans without barriers.
  - [[Redundant Manipulator]] — 7+ DOF arm with null-space exploitable for secondary objectives.
  - [[Continuum Manipulator]] — lacks rigid links; motion via elastic deformation; inspired by elephant trunks and octopus arms; suited to confined spaces.

- ### Relationships
  - hasPart:: [[End-Effector]]
  - hasPart:: [[Joint]]
  - hasPart:: [[Link]]
  - hasPart:: [[Actuator]]
  - hasPart:: [[Wrist]]
  - partOf:: [[Robot]]
  - partOf:: [[Robotic System]]
  - requires:: [[Robot Controller]]
  - requires:: [[Kinematic Model]]
  - requires:: [[Trajectory Planning]]
  - enables:: [[Pick and Place]]
  - enables:: [[Assembly Automation]]
  - enables:: [[Teleoperation]]
  - enables:: [[Robot Welding]]
  - dependsOn:: [[Forward Kinematics]]
  - dependsOn:: [[Inverse Kinematics]]
  - dependsOn:: [[Motion Planning]]
  - implements:: [[ISO 8373:2021]]
  - implements:: [[Denavit-Hartenberg Convention]]
  - uses:: [[Sensor Fusion]]
  - uses:: [[Force-Torque Sensor]]
  - uses:: [[Servo Motor]]
  - supports:: [[Human-Robot Collaboration]]
  - supports:: [[Flexible Manufacturing]]
  - contrastsWith:: [[Mobile Robot]]
  - contrastsWith:: [[Autonomous Mobile Manipulator]]
  - bridgesTo:: [[Digital Twin]]
  - bridgesTo:: [[Reinforcement Learning]]
  - relatedTo:: [[Collaborative Robot]]
  - relatedTo:: [[Parallel Robot]]
  - relatedTo:: [[Redundant Manipulator]]

- ### Standards & Context
  - **[[ISO 8373:2021]]** — *Robotics — Vocabulary* — the primary international standard defining manipulator and related robot terminology; defines manipulator as "the machine mechanism of a robot" (clause 3.16).
  - **ISO 9283:1998** — *Manipulating Industrial Robots — Performance Criteria and Related Test Methods* — specifies how to measure pose accuracy, repeatability, path accuracy, and velocity performance.
  - **ISO/TS 15066:2016** — safety requirements for collaborative robot systems, including power-and-force-limiting manipulators operating alongside humans.
  - **IEC 62061 / ISO 13849** — functional safety standards governing the design of safety-rated control and monitoring functions in robot controllers.
  - **ROS (Robot Operating System)** — the dominant open-source middleware for manipulator programming; provides URDF (Unified Robot Description Format) for kinematic modelling, MoveIt for [[Motion Planning]], and ros_control for hardware abstraction.
  - **URDF / SDF** — XML-based formats describing manipulator geometry, inertia, and joint properties for simulation and planning.
  - Major commercial families: KUKA KR-series, ABB IRB-series, Fanuc M-series, YASKAWA Motoman, Universal Robots UR-series, Franka Emika Panda.

- ### Provenance
  - sources:: [[ISO 8373:2021]]
  - relatedStandard:: ISO 9283:1998
  - relatedStandard:: ISO/TS 15066:2016
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
