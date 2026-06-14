public:: true

# Mobile Manipulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b71fd351624f65ef012536729f721eb5437500843f585ac8002cd5ebfd7c7de",
  "@type": "Page",
  "vc:slug": "mobile-manipulation",
  "title": "Mobile Manipulation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:manipulator",
      "vc:label": "Manipulator"
    },
    {
      "@id": "urn:visionflow:linked:mobile-robot",
      "vc:label": "Mobile Robot"
    },
    {
      "@id": "urn:visionflow:linked:joint-configuration",
      "vc:label": "Joint Configuration"
    },
    {
      "@id": "urn:visionflow:linked:manipulation",
      "vc:label": "Manipulation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Mobile Manipulation"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mobile-manipulation",
  "@type": "Class",
  "label": "Mobile Manipulation",
  "definition": "Mobile manipulation is the subfield of robotics that integrates a locomoting mobile base with one or more robotic manipulator arms, enabling a robot to traverse unstructured environments and physically interact with objects beyond the reach of a fixed-base system. It requires the coordinated control of both navigation and dexterous manipulation, necessitating joint motion planning, whole-body control, and perception pipelines that resolve the relative pose of targets in the robot's frame. The discipline addresses challenges absent in purely fixed-arm or purely mobile systems, including base-arm kinematic coupling, dynamic stability during manipulation, and long-horizon task planning across navigation and contact phases.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:manipulation",
      "label": "Manipulation"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:whole-body-manipulation",
      "label": "Whole-Body Manipulation"
    },
    {
      "@id": "urn:ngm:class:loco-manipulation",
      "label": "Loco-Manipulation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:manipulator",
        "label": "Manipulator"
      },
      {
        "@id": "urn:ngm:class:mobile-robot",
        "label": "Mobile Robot"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:mobile-base",
        "label": "Mobile Base"
      },
      {
        "@id": "urn:ngm:class:robotic-arm",
        "label": "Robotic Arm"
      },
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effector"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:inverse-kinematics",
        "label": "Inverse Kinematics"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:whole-body-control",
        "label": "Whole-Body Control"
      },
      {
        "@id": "urn:ngm:class:joint-configuration",
        "label": "Joint Configuration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:warehouse-automation",
        "label": "Warehouse Automation"
      },
      {
        "@id": "urn:ngm:class:service-robotics",
        "label": "Service Robotics"
      },
      {
        "@id": "urn:ngm:class:domestic-robot",
        "label": "Domestic Robot"
      },
      {
        "@id": "urn:ngm:class:surgical-robot",
        "label": "Surgical Robot"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:robot-perception",
        "label": "Robot Perception"
      },
      {
        "@id": "urn:ngm:class:task-and-motion-planning",
        "label": "Task and Motion Planning"
      },
      {
        "@id": "urn:ngm:class:force-control",
        "label": "Force Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:fixed-base-manipulation",
        "label": "Fixed-Base Manipulation"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:humanoid-robot",
        "label": "Humanoid Robot"
      },
      {
        "@id": "urn:ngm:class:legged-robot",
        "label": "Legged Robot"
      },
      {
        "@id": "urn:ngm:class:robot-learning",
        "label": "Robot Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human-Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      }
    ]
  },
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:mobile-manipulation:18cc8b0112e7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5b71fd351624f65ef012536729f721eb5437500843f585ac8002cd5ebfd7c7de"
  },
  "vc:resolutions": [
    {
      "raw": "[[Manipulator]]",
      "resolved": "urn:visionflow:linked:manipulator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mobile Robot]]",
      "resolved": "urn:visionflow:linked:mobile-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Joint Configuration]]",
      "resolved": "urn:visionflow:linked:joint-configuration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Manipulation]]",
      "resolved": "urn:visionflow:linked:manipulation",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Mobile manipulation is the subfield of [[Robotics]] that integrates a locomoting [[Mobile Robot]] with one or more [[Robotic Arm]] systems, enabling a robot to traverse unstructured environments and physically interact with objects well beyond the fixed workspace of a stationary arm. Unlike [[Fixed-Base Manipulation]] or pure [[Autonomous Navigation]], mobile manipulation requires coordinated planning over both base degrees of freedom and arm [[Joint Configuration]], making it one of the most demanding integration problems in robotics. The field draws on [[Motion Planning]], [[Perception]], [[Force Control]], and [[Whole-Body Control]] to achieve reliable reach-and-grasp tasks in open-world settings.

- ### Overview
  - Mobile manipulation emerged as robotic systems moved from controlled industrial cells to partially structured and unstructured environments such as hospitals, warehouses, homes, and field sites. A fixed industrial arm has a fixed reachable workspace; a [[Mobile Base]] expands that workspace to the entire traversable environment. The key insight is that base repositioning and arm actuation are not independent — moving the base changes the kinematic chain and can introduce vibration or instability that disrupts a precision grasp.
  - The dual challenge is therefore:
    - **Navigation sub-problem**: getting the base close enough to an object, typically using [[Simultaneous Localisation and Mapping]] (SLAM) and [[Path Planning]].
    - **Manipulation sub-problem**: planning the arm to reach, grasp, and act on the target, requiring [[Inverse Kinematics]], [[Grasp Planning]], and [[Contact Modelling]].
  - These two sub-problems interact: the optimal base pose to approach an object depends on the arm's kinematics and any obstacles near the object; conversely, partial arm motions can shift the robot's centre of mass, affecting [[Locomotion Control]] for wheeled or legged bases.
  - The field is mature at the research level (active since the 1990s) and is rapidly transitioning to commercial deployment as of the mid-2020s, driven by advances in [[Robot Learning]], [[Imitation Learning]], and [[Transformer]]-based policy models.

- ### Key Components
  - #### Mobile Base
    - The base provides locomotion and determines the robot's overall mobility class:
      - **Wheeled bases** (differential drive, omnidirectional, skid-steer) — used in most warehouse and domestic robots for their energy efficiency and simplicity.
      - **Legged bases** ([[Legged Robot]], quadrupeds, bipeds) — provide stair-climbing and rough-terrain traversal at the cost of greater control complexity; examples include Boston Dynamics Spot with an arm, and [[Humanoid Robot]] platforms.
      - **Aerial bases** — drone-mounted manipulators for inspection tasks; a nascent category with strict payload constraints.
    - Base choice constrains the arm payload, velocity constraints during manipulation, and the type of [[Whole-Body Control]] needed.
  - #### Robotic Arm and End Effector
    - The arm provides the manipulative degrees of freedom. Common configurations are 6-DOF or 7-DOF serial arms (7-DOF adds kinematic redundancy, allowing null-space motion to avoid collisions while holding an [[End Effector]] pose).
    - The [[End Effector]] — gripper, suction cup, multi-fingered hand, or tool — must be selected for the target task. [[Dexterous Manipulation]] with multi-fingered hands remains an open research problem.
  - #### Perception System
    - [[Robot Perception]] for mobile manipulation typically fuses:
      - [[RGB-D Camera]] or structured-light depth sensors for object detection and pose estimation.
      - [[LiDAR]] for environment mapping and navigation.
      - Wrist-mounted cameras or tactile sensors for close-proximity manipulation.
    - [[Object Detection]] and [[6D Object Pose Estimation]] are critical sub-tasks; learned approaches using deep [[Convolutional Neural Network]] models and more recently [[Vision Transformer]] architectures dominate.
  - #### Motion Planning and Control
    - **[[Task and Motion Planning]] (TAMP)**: plans at the symbolic task level (pick, place, open door) and simultaneously generates feasible geometric motions.
    - **[[Sampling-Based Planning]]** (RRT, RRT*, PRM): widely used for arm and whole-body path planning in high-dimensional configuration spaces.
    - **[[Whole-Body Control]]**: real-time controller that satisfies multiple objectives simultaneously — end-effector pose, base velocity, joint limits, contact forces — typically via quadratic programming or hierarchical task control.
    - **[[Force Control]] and [[Impedance Control]]**: essential when the arm contacts surfaces, allowing compliant interaction rather than rigid position tracking.
  - #### Software and Middleware
    - [[Robot Operating System]] (ROS / ROS 2) is the de facto middleware, providing sensor drivers, planning libraries (MoveIt!, Nav2), and simulation environments (Gazebo, Isaac Sim).
    - [[Simulation]] environments are used for data generation for [[Robot Learning]] and for safe testing of manipulation policies.

- ### Applications and Use Cases
  - #### Warehouse and Logistics
    - Mobile manipulation robots pick, sort, and place items in fulfilment centres, addressing the "last mile" within the warehouse. Systems must handle unstructured bin contents ([[Bin Picking]]), variable object shapes, and tight timing constraints. Companies such as Amazon Robotics, Covariant, and Symbotic deploy or develop such systems.
  - #### Domestic and Assistive Robotics
    - [[Service Robotics]] for homes requires mobile manipulation to fetch objects, open doors, load dishwashers, and assist elderly or disabled users. Research platforms include PR2, HSR (Toyota), TIAGo (PAL Robotics), and Stretch (Hello Robot). The unstructured domestic environment remains a hard challenge.
  - #### Healthcare and Surgical Assistance
    - [[Surgical Robot]] platforms (e.g. Da Vinci) are fixed-base, but mobile surgical assistants for hospital logistics — medication delivery, sample transport, bed management — combine navigation with limited manipulation.
    - Assistive robots for rehabilitation and care rely on mobile manipulation to interact directly with patients or their environments.
  - #### Field and Inspection Robotics
    - Nuclear decommissioning, offshore inspection, and disaster response require robots to operate in GPS-denied, hazardous, or structurally complex environments. DARPA Robotics Challenge (2012–2015) drove significant advances in humanoid mobile manipulation for such scenarios.
  - #### Agriculture
    - Autonomous harvesting robots combine wheeled or tracked bases with arms and vision to pick delicate crops (strawberries, tomatoes, apples). The outdoor, unstructured nature of fields and natural variability of produce make this one of the hardest mobile manipulation problems.
  - #### Manufacturing Collaboration
    - Collaborative mobile manipulators ([[Cobot]]) in flexible manufacturing cells can be repositioned by operators and work alongside humans, contrasting with fixed industrial arms that require safety cages.

- ### Relationships
  - partOf:: [[Robotics]]
  - subClassOf:: [[Manipulation]]
  - requires:: [[Manipulator]], [[Mobile Robot]], [[Motion Planning]], [[Perception]]
  - hasPart:: [[Mobile Base]], [[Robotic Arm]], [[End Effector]]
  - uses:: [[Inverse Kinematics]], [[Simultaneous Localisation and Mapping]], [[Whole-Body Control]], [[Joint Configuration]]
  - enables:: [[Warehouse Automation]], [[Service Robotics]], [[Domestic Robot]], [[Surgical Robot]]
  - dependsOn:: [[Robot Perception]], [[Task and Motion Planning]], [[Force Control]]
  - contrastsWith:: [[Fixed-Base Manipulation]], [[Autonomous Navigation]]
  - relatedTo:: [[Humanoid Robot]], [[Legged Robot]], [[Robot Learning]], [[Reinforcement Learning]]
  - bridges-to:: [[Human-Robot Interaction]], [[Spatial Computing]]

- ### Research Landscape
  - Key research venues: IEEE International Conference on Robotics and Automation ([[ICRA]]), IEEE/RSJ International Conference on Intelligent Robots and Systems ([[IROS]]), Robotics: Science and Systems (RSS), International Journal of Robotics Research (IJRR).
  - Prominent research groups include MIT CSAIL, CMU Robotics Institute, Stanford AI Lab, ETH Zurich Robotic Systems Lab, and TU Delft.
  - The [[DARPA Robotics Challenge]] (2012–2015) catalysed whole-body mobile manipulation research at scale.
  - [[Foundation Model]] approaches (large language models as task planners, vision-language-action models) are an active frontier as of 2024–2025, enabling more flexible task specification and generalisation.
  - Key open problems include:
    - Generalisation to novel objects and scenes without task-specific training.
    - Real-time whole-body replanning in dynamic environments.
    - Safe physical human-robot interaction during manipulation.
    - Robust [[Grasp Planning]] for deformable or transparent objects.

- ### Standards and Context
  - No single international standard governs mobile manipulation as a unified system. Relevant standards and frameworks include:
    - **ISO 10218** (Industrial Robots — Safety) and **ISO/TS 15066** (Collaborative Robots): apply to the arm component when deployed in human-shared workspaces.
    - **IEC 62061** (Functional Safety for Machinery): relevant for safety-critical mobile manipulation in logistics.
    - **ROS REP (ROS Enhancement Proposals)**: community-driven specifications for interoperability of navigation (Nav2) and manipulation (MoveIt!) stacks.
    - **IEEE P3079** (Human-Robot Interaction Taxonomy): provides vocabulary relevant to mobile manipulation in collaborative settings.
  - Simulation benchmarks such as [[AI2-THOR]], [[Habitat]], and [[RLBench]] provide standardised task suites for reproducible comparison of mobile manipulation policies.

- ### Provenance
  - sources:: IEEE ICRA proceedings; IROS proceedings; International Journal of Robotics Research; Stanford Robotics; CMU Robotics Institute; ETH Zurich RSL; ROS documentation (ros.org); Springer Handbook of Robotics (Siciliano et al.)
  - updated:: 2026-06-13
