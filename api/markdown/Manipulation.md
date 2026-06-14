public:: true

# Manipulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2",
  "@type": "Page",
  "vc:slug": "manipulation",
  "title": "Manipulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0602"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Manipulation"
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
  "@id": "urn:ngm:class:manipulation",
  "@type": "Class",
  "label": "Manipulation",
  "definition": "Manipulation is the capability of robotic or autonomous systems to physically interact with, grasp, reposition, and transform objects in an environment through controlled mechanical action. It integrates perception, kinematics, dynamics, and planning to enable precise, dexterous, and adaptive contact-rich tasks. Robotic manipulation encompasses the full pipeline from object detection and pose estimation through grasp planning, motion execution, and force-regulated contact control. As a foundational capability in intelligent systems, it bridges physical embodiment with higher-level task reasoning and is central to industrial automation, service robotics, and human-robot collaboration.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics-systems",
      "label": "Robotics Systems"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:grasp-planning", "label": "Grasp Planning"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:trajectory-generation", "label": "Trajectory Generation"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:object-pose-estimation", "label": "Object Pose Estimation"},
      {"@id": "urn:ngm:class:collision-detection", "label": "Collision Detection"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:forward-kinematics", "label": "Forward Kinematics"},
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"},
      {"@id": "urn:ngm:class:tactile-sensing", "label": "Tactile Sensing"},
      {"@id": "urn:ngm:class:point-cloud", "label": "Point Cloud"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:assembly-automation", "label": "Assembly Automation"},
      {"@id": "urn:ngm:class:surgical-robotics", "label": "Surgical Robotics"},
      {"@id": "urn:ngm:class:pick-and-place", "label": "Pick and Place"},
      {"@id": "urn:ngm:class:teleoperation", "label": "Teleoperation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:locomotion", "label": "Locomotion"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:haptics", "label": "Haptics"},
      {"@id": "urn:ngm:class:dexterous-manipulation", "label": "Dexterous Manipulation"},
      {"@id": "urn:ngm:class:task-and-motion-planning", "label": "Task and Motion Planning"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:imitation-learning", "label": "Imitation Learning"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:robotic-manipulation", "label": "Robotic Manipulation"},
    {"@id": "urn:ngm:class:object-manipulation", "label": "Object Manipulation"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:manipulation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2416a5bb99cae4645130b012618f59725514c5a2c88d45baa488e69358d68ca2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
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
  - Manipulation is the capability of robotic and autonomous systems to physically interact with, grasp, reposition, and transform objects in their environment through controlled mechanical action. It integrates [[Perception]], [[Robot Kinematics]], [[Robot Dynamics]], and [[Motion Planning]] to achieve precise, adaptive, contact-rich behaviour. The domain spans from simple open-loop pick-and-place tasks to highly dexterous in-hand manipulation requiring continuous [[Force Control]] and real-time [[Tactile Sensing]] feedback. Manipulation is regarded as one of the central unsolved challenges in robotics and a key enabler of truly autonomous [[Robotics Systems]].

- ### Overview
  - Robotic manipulation translates high-level task goals into sequences of physical actions that produce purposeful changes in the world. Unlike [[Locomotion]], which moves the robot itself, manipulation moves objects extrinsic to the robot body.
  - The field draws from classical mechanics, control theory, computational geometry, and — increasingly — [[Machine Learning]] and [[Reinforcement Learning]] to cope with real-world variability in object shape, mass, friction, and clutter.
  - A complete manipulation system must solve the perception-to-action loop: sensing the scene via [[Computer Vision]] and [[Sensor Fusion]], estimating object state via [[Object Pose Estimation]], generating feasible motions via [[Motion Planning]], and executing them while monitoring contact forces.
  - Industrial manipulation (welding, painting, assembly) has been mature for decades. Unstructured manipulation — grasping novel objects, adapting to unexpected contacts — remains an active research frontier.

- ### Key Components
  - #### Mechanical Hardware
    - [[End Effector]] — the terminal device (gripper, hand, tool) that makes physical contact with objects; may be parallel-jaw, multi-fingered, suction-based, or task-specific.
    - [[Robotic Arm]] — the articulated kinematic chain that positions and orients the end effector in workspace; characterised by its degrees of freedom (DOF), reach, and payload.
    - [[Actuator]] — the motor, pneumatic, or hydraulic device that drives each joint; actuator bandwidth and back-driveability critically affect force sensitivity.
    - [[Tactile Sensing]] — arrays of pressure or deformation sensors embedded in fingertips or palm; provide rich contact information unavailable from proprioception alone.
  - #### Kinematics and Dynamics
    - [[Forward Kinematics]] — maps joint angles to end-effector pose; analytic for standard geometries, numerical otherwise.
    - [[Inverse Kinematics]] — the inverse problem: given a desired end-effector pose, compute joint angles; often admits multiple solutions and singularities.
    - [[Robot Dynamics]] — governs how forces and torques produce accelerations; essential for high-speed or precision tasks and for whole-body force control.
    - [[Jacobian Matrix]] — the geometric mapping between joint velocities and end-effector velocities; central to differential kinematics and resolved-rate control.
  - #### Planning
    - [[Grasp Planning]] — selects stable grasp configurations from contact points on object geometry; quality metrics include grasp wrench space and robustness to perturbation.
    - [[Motion Planning]] — finds collision-free joint-space or task-space paths from start to goal, typically using sampling-based planners (RRT, PRM) or optimisation-based methods.
    - [[Trajectory Generation]] — converts discrete waypoints into smooth, dynamically feasible time-parameterised trajectories.
    - [[Task and Motion Planning]] — integrates geometric motion planning with symbolic task planning to sequence multi-step manipulation actions.
    - [[Collision Detection]] — real-time geometric checks against environment models; safety-critical for unstructured scenes.
  - #### Control
    - [[Force Control]] — regulates contact force rather than position; essential whenever the robot makes and breaks contact with compliant or fragile objects.
    - [[Impedance Control]] — models the robot end-effector as a mass-spring-damper; provides compliant behaviour without explicit force sensing.
    - [[Admittance Control]] — the dual formulation: maps measured force inputs to velocity outputs; preferred when the environment is stiff.
    - [[Visual Servoing]] — closes the control loop using image-based feedback to reduce reliance on precise calibration.
  - #### Perception
    - [[Object Pose Estimation]] — determines the 6-DOF position and orientation of target objects from RGB-D images or [[Point Cloud]] data.
    - [[Instance Segmentation]] — identifies and delineates individual object instances in cluttered scenes.
    - [[Depth Sensing]] — provides metric distance maps via stereo cameras, structured light, or time-of-flight sensors; foundational for 3-D scene understanding.
    - [[Sensor Fusion]] — combines proprioception, vision, and contact data into coherent state estimates robust to individual sensor noise.

- ### Grasp Taxonomy
  - **Power grasps** — whole-hand enveloping contact; maximise stability and payload; typical in industrial grippers.
  - **Precision grasps** — fingertip-only contact; enable dexterous in-hand reorientation; require multi-finger hands.
  - **Non-prehensile manipulation** — pushing, pivoting, sliding without gripping; useful for objects too large or fragile to grasp.
  - **In-hand manipulation** — regrasping and reorienting an object within the hand fingers without releasing it; requires [[Dexterous Manipulation]] capability.
  - **Bimanual manipulation** — coordinated use of two robotic arms or hands to handle large, deformable, or assembly-level objects.
  - **Deformable object manipulation** — cloth, rope, food items; requires special representations since rigid-body assumptions break down.

- ### Learning-Based Approaches
  - [[Reinforcement Learning]] applied to manipulation trains policies end-to-end in simulation (MuJoCo, Isaac Sim) then transfers to real hardware via domain randomisation.
  - [[Imitation Learning]] (behaviour cloning, DAgger) bootstraps from human teleoperation demonstrations; drastically reduces sample complexity relative to RL from scratch.
  - [[Diffusion Policy]] and related generative-model approaches model the action distribution directly, capturing multi-modal behaviour in complex manipulation tasks.
  - [[Foundation Models]] (large vision-language models) are increasingly used as high-level task planners that decompose manipulation goals into sub-skills.
  - Sim-to-real transfer remains a central challenge: simulation cannot perfectly model friction, deformable contacts, and sensor noise.

- ### Applications
  - #### Industrial Automation
    - **Assembly** — inserting pegs, fastening bolts, joining sub-components on automotive and electronics production lines; requires sub-millimetre precision.
    - **Welding and painting** — path-following manipulation tasks where end-effector orientation and speed uniformity are paramount.
    - **Bin picking** — unstructured grasp of randomly oriented parts from containers; the canonical hard manipulation problem in industry.
    - **Palletising and depalletising** — high-throughput pick-and-place for logistics and warehousing.
  - #### Service and Collaborative Robotics
    - [[Human-Robot Collaboration]] — cobots such as the UR series and Franka Emika Panda work alongside humans; require safe, force-limited manipulation.
    - **Kitchen and domestic tasks** — opening jars, folding laundry, loading dishwashers; exemplify unstructured dexterous manipulation at the frontier of capability.
    - **Retail automation** — shelf stocking, item picking for e-commerce fulfilment (Amazon Kiva/Sparrow, Ocado).
  - #### Medical and Surgical Robotics
    - [[Surgical Robotics]] (e.g., da Vinci system) requires extreme precision, miniaturised end effectors, and tremor filtering.
    - Rehabilitation exoskeletons use manipulation principles for assisted limb movement.
    - Laboratory automation (pipetting, sample handling) demands high repeatability at sub-millilitre scale.
  - #### Space and Hazardous Environments
    - Satellite servicing manipulators (Canadarm, JEMRMS on ISS) operate in microgravity where reaction forces must be carefully managed.
    - Nuclear decommissioning robots handle radioactive material remotely via [[Teleoperation]] with haptic feedback.
    - Subsea manipulation for pipeline inspection and repair in high-pressure environments.
  - #### Extended Reality and Digital Twins
    - Manipulation planning and verification in [[Digital Twin]] environments lets engineers validate robot programs offline before deployment.
    - [[Spatial Computing]] interfaces enable operators to programme manipulation tasks intuitively via hand-tracking and gesture in AR/VR environments.

- ### Relationships
  - hasPart:: [[Grasp Planning]]
  - hasPart:: [[End Effector]]
  - hasPart:: [[Force Control]]
  - hasPart:: [[Trajectory Generation]]
  - requires:: [[Motion Planning]]
  - requires:: [[Inverse Kinematics]]
  - requires:: [[Object Pose Estimation]]
  - requires:: [[Collision Detection]]
  - uses:: [[Forward Kinematics]]
  - uses:: [[Impedance Control]]
  - uses:: [[Tactile Sensing]]
  - uses:: [[Point Cloud]]
  - enables:: [[Assembly Automation]]
  - enables:: [[Surgical Robotics]]
  - enables:: [[Pick and Place]]
  - enables:: [[Teleoperation]]
  - dependsOn:: [[Robot Kinematics]]
  - dependsOn:: [[Robot Dynamics]]
  - dependsOn:: [[Sensor Fusion]]
  - contrastsWith:: [[Locomotion]]
  - relatedTo:: [[Haptics]]
  - relatedTo:: [[Dexterous Manipulation]]
  - relatedTo:: [[Task and Motion Planning]]
  - bridgesTo:: [[Reinforcement Learning]]
  - bridgesTo:: [[Imitation Learning]]
  - bridgesTo:: [[Computer Vision]]

- ### Standards & Context
  - **ISO 10218-1/2** — safety requirements for industrial robots and robot systems; governs speed and force limits relevant to collaborative manipulation.
  - **ISO/TS 15066** — specifies power and force limiting thresholds for human-robot collaborative operation; directly constrains compliant manipulation controller design.
  - **ISO 9283** — defines manipulator performance metrics: positioning accuracy, repeatability, path accuracy, and velocity.
  - **ROS (Robot Operating System)** — the de-facto open middleware stack for manipulation research; MoveIt! is the canonical manipulation planning framework within ROS.
  - **URDF / SDF** — XML formats for describing robot kinematic and dynamic parameters; universally used for manipulation simulation in Gazebo, MuJoCo, Isaac Sim.
  - **OpenRAVE** — early open planning environment for manipulation; largely superseded by MoveIt! but historically influential.
  - Research benchmarks: YCB Object and Model Set (Yale-CMU-Berkeley), OCRTOC challenge, and the Real Robot Challenge provide standardised evaluation for manipulation systems.

- ### Semantic Classification
  - owl-class:: robotics:Manipulation
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics Systems]]

- ### Provenance
  - sources:: Mason, M.T. (2001) *Mechanics of Robotic Manipulation*. MIT Press. | Siciliano, B. et al. (2009) *Robotics: Modelling, Planning and Control*. Springer. | Murray, R.M., Li, Z., Sastry, S.S. (1994) *A Mathematical Introduction to Robotic Manipulation*. CRC Press.
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z
