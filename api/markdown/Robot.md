public:: true

# Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:117419dfa915d7e1851df02640e5ab9e93fa372662b543b5987ef040a3aaee24",
  "@type": "Page",
  "vc:slug": "robot",
  "title": "Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso-8373-2021",
      "vc:label": "ISO 8373:2021"
    },
    {
      "@id": "urn:visionflow:linked:mechatronic-system",
      "vc:label": "MechatronicSystem"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-agent",
      "vc:label": "AutonomousAgent"
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
      "vc:value": "RB-0001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robot"
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
  "@id": "urn:ngm:class:robot",
  "@type": "Class",
  "label": "Robot",
  "definition": "A robot is an actuated mechanism, programmable in two or more axes with a degree of autonomy, that moves within its environment to perform intended tasks without direct human intervention at the moment of task execution. Robots integrate mechanical structure, actuation, sensing, and control software to perceive their environment, reason about goals, and execute physical or digital actions. The concept spans a wide spectrum from fixed industrial manipulators to mobile autonomous agents, collaborative cobots, and software robots (robotic process automation). Standardised by ISO 8373:2021, the definition distinguishes robots from simple automated machines by requiring reprogrammability and environmental interaction.",
  "domain": "robotics",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:robot-controller",
        "label": "Robot Controller"
      },
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effector"
      },
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robotic-system",
        "label": "Robotic System"
      },
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber-Physical System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:kinematics",
        "label": "Kinematics"
      },
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      },
      {
        "@id": "urn:ngm:class:robotic-process-automation",
        "label": "Robotic Process Automation"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded System"
      },
      {
        "@id": "urn:ngm:class:power-systems",
        "label": "Power System"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-8373",
        "label": "ISO 8373"
      },
      {
        "@id": "urn:ngm:class:iec-62061",
        "label": "IEC 62061"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:drone",
        "label": "Drone"
      },
      {
        "@id": "urn:ngm:class:humanoid-robot",
        "label": "Humanoid Robot"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:autonomous-robot",
      "label": "Autonomous Robot"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:117419dfa915d7e1851df02640e5ab9e93fa372662b543b5987ef040a3aaee24"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO 8373:2021]]",
      "resolved": "urn:visionflow:linked:iso-8373-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[MechatronicSystem]]",
      "resolved": "urn:visionflow:linked:mechatronic-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[AutonomousAgent]]",
      "resolved": "urn:visionflow:owl:class:autonomous-agent",
      "kind": "ResolvedLink"
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
  - A robot is an actuated mechanism, programmable in two or more axes with a degree of autonomy, that perceives its environment through [[Sensor]] arrays, reasons about goals, and executes physical or digital actions without requiring direct human intervention at the moment of task execution. Robots are the embodied intersection of [[Mechatronic System]] engineering, [[Artificial Intelligence]], and [[Control Theory]], capable of ranging from rigidly programmed [[Industrial Automation]] arms to fully autonomous agents that learn and adapt in unstructured environments. The canonical definition is formalised in [[ISO 8373:2021]] and distinguishes robots from simpler [[Automated Machine]] devices by requiring reprogrammability across at least two motion axes and meaningful environmental interaction. The term encompasses both physical embodiments and software instantiations such as [[Robotic Process Automation]] bots.

- ### Overview
  - Robots are reprogrammable, multi-axis actuated systems that integrate mechanical, electronic, and computational subsystems to perform tasks with varying degrees of autonomy.
  - The core value proposition of a robot is the substitution of human physical or cognitive labour in contexts that are dangerous, repetitive, high-precision, or inaccessible.
  - Modern robots are increasingly defined by their software intelligence rather than purely their mechanical form, blurring the boundary with [[Autonomous Agent]] frameworks.
  - Key distinguishing properties:
    - **Reprogrammability**: behaviour can be changed without hardware modification.
    - **Multi-axis motion**: at least two degrees of freedom, enabling spatial reach and versatility.
    - **Environmental interaction**: the robot perceives and acts on the world, not merely on a predefined fixed path.
    - **Degree of autonomy**: ranges from tele-operated systems to fully autonomous decision-making machines.
  - The global landscape includes industrial manipulators (>3 million units operating in factories), mobile service robots, medical surgical robots, space exploration rovers, and emerging humanoid platforms.
  - [[Robotics]] as a discipline underpins robot design, and the field has accelerated dramatically with advances in [[Machine Learning]], [[Computer Vision]], and miniaturised [[Embedded System]] components.

- ### Key Components
  - #### Mechanical Structure
    - Rigid links and joints (revolute, prismatic, spherical) form the kinematic chain described by [[Kinematics]] models.
    - The [[End Effector]] (gripper, tool, nozzle) interfaces the robot to the task object.
    - Structural materials range from cast iron (heavy-payload industrial arms) to carbon fibre and compliant soft materials for [[Cobotic System]] designs.
  - #### Actuation
    - [[Actuator]] types include servo motors (most common), hydraulic cylinders (high force), pneumatic actuators (fast, compliant), and emerging shape-memory alloys for soft robots.
    - Gear trains, harmonic drives, and cable transmissions convert motor torque to joint motion.
  - #### Sensing
    - Proprioceptive sensors: encoders, IMUs, force-torque sensors at joints.
    - Exteroceptive sensors: cameras (2D/3D), LiDAR, ultrasonic rangers, tactile skins.
    - [[Computer Vision]] and depth sensing underpin scene understanding, object detection, and [[Simultaneous Localisation and Mapping]].
  - #### Control & Computation
    - The [[Robot Controller]] executes feedback control loops (PID, model-predictive, impedance control) at rates of 1–10 kHz.
    - [[Real-Time Control]] operating systems (e.g., PREEMPT-RT Linux, VxWorks) ensure deterministic timing.
    - [[Robot Operating System]] (ROS/ROS 2) is the de facto middleware for sensor fusion, communication, and tool integration across academia and industry.
  - #### Cognition & Planning
    - [[Motion Planning]] algorithms (RRT, PRM, trajectory optimisation) compute collision-free paths.
    - Task and mission planning layers translate high-level goals into motion primitives.
    - [[Machine Learning]] — particularly deep reinforcement learning and imitation learning — is increasingly used to learn manipulation skills directly from demonstrations.

- ### Taxonomy of Robot Types
  - **Industrial Robot**: fixed-base manipulator (SCARA, articulated, delta, cartesian, parallel) deployed in manufacturing.
  - **Mobile Robot**: wheeled, legged, or crawler platforms for navigation in unstructured environments; includes [[Autonomous Navigation]] ground vehicles (AGVs, AMRs).
  - **[[Humanoid Robot]]**: bipedal form factor designed to operate in human-centric environments; examples: Boston Dynamics Atlas, Agility Robotics Digit, 1X NEO.
  - **Aerial Robot / [[Drone]]**: fixed-wing UAVs and multirotor systems; navigation via GPS, vision, and IMU.
  - **Surgical Robot**: high-precision tele-operated systems (e.g., da Vinci Surgical System) with sub-millimetre repeatability.
  - **[[Cobotic System]]**: collaborative robot designed to work alongside humans with built-in force limiting and safety monitoring (ISO/TS 15066).
  - **Soft Robot**: compliant, deformable bodies inspired by biology; suited to delicate manipulation and human interaction.
  - **Software Robot / RPA Bot**: [[Robotic Process Automation]] agents that automate digital workflows without physical embodiment.

- ### Applications and Use Cases
  - #### Manufacturing
    - Welding, painting, assembly, and quality inspection on automotive, electronics, and aerospace lines.
    - [[Industrial Automation]] has expanded from structured conveyor environments to flexible cells with vision-guided bin picking.
  - #### Logistics and Supply Chain
    - Automated mobile robots (AMRs) for goods-to-person warehouse picking (Amazon Robotics, Geek+).
    - Autonomous forklifts and last-mile delivery robots in distribution centres.
  - #### Healthcare and Surgery
    - Surgical robots enable minimally invasive procedures with greater precision and reduced patient trauma.
    - Rehabilitation robots assist recovery of motor function; exoskeletons support mobility-impaired users.
    - Pharmacy automation robots dispense medications with near-zero error rates.
  - #### Agriculture
    - Precision spraying, seeding, harvesting, and fruit-picking robots reduce chemical use and labour costs.
    - Autonomous tractors and field robots operate via GPS-RTK and [[Computer Vision]].
  - #### Space Exploration
    - NASA Mars rovers (Curiosity, Perseverance) demonstrate long-range autonomous navigation on extraterrestrial terrain.
    - Robotic arms on the ISS (Canadarm2) handle external payloads.
  - #### Defence and Public Safety
    - EOD (explosive ordnance disposal) robots remotely investigate and neutralise threats.
    - Search-and-rescue robots operate in collapsed structures or hazardous environments.
  - #### Service and Social Interaction
    - Hospitality robots (room service, reception) deploy in hotels and airports.
    - Domestic robots (robotic vacuum cleaners, lawn mowers) are the largest consumer category by volume.
  - #### Digital and AI Augmentation
    - Software robots ([[Robotic Process Automation]]) automate structured digital workflows.
    - Integration with [[Digital Twin]] platforms enables simulation-driven robot deployment and predictive maintenance.

- ### Relationships
  - hasPart:: [[Actuator]], [[Sensor]], [[Robot Controller]], [[End Effector]], [[Robot Operating System]]
  - partOf:: [[Robotic System]], [[Cyber-Physical System]]
  - requires:: [[Motion Planning]], [[Kinematics]], [[Real-Time Control]]
  - enables:: [[Industrial Automation]], [[Robotic Process Automation]], [[Autonomous Navigation]]
  - dependsOn:: [[Embedded System]], [[Power System]]
  - uses:: [[Machine Learning]], [[Computer Vision]], [[Simultaneous Localisation and Mapping]]
  - standardizedBy:: [[ISO 8373]], [[IEC 62061]]
  - contrastsWith:: [[Autonomous Agent]], [[Automated Machine]]
  - bridges-to:: [[Artificial Intelligence]], [[Digital Twin]], [[Internet of Things]]
  - relatedTo:: [[Cobotic System]], [[Drone]], [[Humanoid Robot]]
  - sameAs:: [[Autonomous Robot]]

- ### Standards and Governance Context
  - **[[ISO 8373:2021]]** — "Robots and robotic devices — Vocabulary": the primary international standard defining robot terminology, coordinate systems, and performance metrics.
  - **ISO 10218-1/2** — Safety requirements for industrial robots and robot systems/integration.
  - **ISO/TS 15066** — Collaborative robots: speed/force limiting, safety-rated monitored stop, hand guiding.
  - **IEC 62061** — Functional safety of machinery, including robots with programmable safety controllers.
  - **RIA R15.06** — US-specific industrial robot safety standard (ANSI/RIA), harmonised with ISO 10218.
  - **EU Machinery Regulation (2023/1230)** — Classifies robots as machinery; upcoming AI Act provisions cover autonomous robots with significant safety impact as high-risk AI systems.
  - **IEEE Robotics & Automation Society** — Primary professional body; publishes IEEE Robotics and Automation Letters (RA-L) and hosts ICRA conference.
  - Key certification bodies: TÜV, CSA, UL (North America) for robot safety compliance.

- ### Integration with AI and Emerging Technologies
  - [[Machine Learning]] is transforming robot programming: instead of hand-coded motion sequences, robots learn manipulation policies from demonstrations or simulation (sim-to-real transfer).
  - [[Computer Vision]] with deep neural networks enables robust object detection, pose estimation, and scene understanding in unstructured environments.
  - [[Digital Twin]] platforms allow robots to be modelled, simulated, and optimised before physical deployment, with runtime monitoring feeding back to the twin.
  - [[Internet of Things]] connectivity enables fleets of robots to share sensor data, receive OTA updates, and participate in cloud-based fleet management.
  - [[Artificial Intelligence]] planning layers (large language model-based task planners, reinforcement-learning controllers) are increasingly layered atop traditional robot middleware.
  - Edge computing and neuromorphic chips reduce latency for time-critical perception-action loops.

- ### Current Landscape (2026)
  - The defining shift of 2024-2026 is the rise of robot foundation models: Physical Intelligence released the pi-0 generalist VLA (October 2024) and pi-0.5 with open-world generalisation (April 2025), while NVIDIA open-sourced Isaac GR00T N1 at GTC (March 2025) and iterated to GR00T N1.6 (December 2025) and the Apache-2.0 GR00T 1.7 checkpoint, all built on the dual-system Vision-Language-Action architecture (a VLM planner plus a diffusion-transformer action expert).
  - Google DeepMind advanced embodied AI from Gemini Robotics and Gemini Robotics-ER (March 2025) to Gemini Robotics 2 (July 2026), adding whole-body humanoid control, multi-robot teaming, an on-device variant, and the ASIMOV-Agentic safety benchmark.
  - Humanoid robots crossed from demo to real production: Figure AI's Figure 02 completed an 11-month programme at BMW Group Plant Spartanburg (1,250+ operating hours, 90,000+ sheet-metal parts, supporting 30,000+ X3 vehicles) confirmed by BMW, and the company moved Figure 03 into logistics sequencing; Agility Robotics' Digit is deployed with GXO and Amazon.
  - Boston Dynamics retired the hydraulic Atlas (2024) and moved the fully electric Atlas into production, showcasing sim-trained whole-body behaviours at CES 2026 with 2026 fleets committed to Hyundai and Google DeepMind; 1X began shipping its NEO and EVE platforms.
  - Scale is now concentrated in China: global humanoid shipments grew an estimated ~500% in 2025 to roughly 16,000-20,000 units, with AgiBot (cumulative ~15,000 by mid-2026) and Unitree accounting for close to 90% of volume, and 2026 projections of 50,000-100,000+ units.
  - Tesla Optimus remains a laggard on independently verified deployment: on the Q4 2025 earnings call (28 January 2026) Musk said Optimus was "not in usage in our factories in a material way", Fremont Gen 3 production only began ramping in late July-August 2026, and external sales are pushed to 2027.
  - The open frontier as of 2026 is bridging the gap between viral demos and audited commercial evidence: only the Figure/BMW and Agility/GXO programmes have independently corroborated throughput KPIs, deployments stay confined to structured material handling under heavy human oversight, and dexterity, generalisation, unit economics, and collaborative-safety certification remain unresolved.

- ### References
  - 1. Physical Intelligence (2025). pi-0.5: a VLA with Open-World Generalization. https://www.pi.website/blog/pi05
  - 2. NVIDIA (2025). NVIDIA Announces Isaac GR00T N1 — the World's First Open Humanoid Robot Foundation Model. https://nvidianews.nvidia.com/news/nvidia-isaac-gr00t-n1-open-humanoid-robot-foundation-model-simulation-frameworks
  - 3. NVIDIA GEAR Lab (2025). GR00T N1.6: An Improved Open Foundation Model for Generalist Humanoid Robots. https://research.nvidia.com/labs/gear/gr00t-n1_6/
  - 4. Google DeepMind (2026). Gemini Robotics 2 brings whole body intelligence to robots. https://deepmind.google/blog/gemini-robotics-2-brings-whole-body-intelligence-to-robots/
  - 5. Physical AI Journal (2026). Humanoid Deployment Evidence Report 2026. https://www.physicalaijournal.org/post/humanoid-deployment-evidence-report-2026
  - 6. Humanoid Guide / Technology.org (2026). Humanoid deployments in 2026 favor Figure and Agility. https://humanoid.guide/humanoid-deployments-in-2026-favor-figure-and-agility/

- ### Provenance
  - sources:: [[ISO 8373:2021]], [[Robotics]] domain knowledge base, [[IEEE Robotics and Automation Society]] publications
  - updated:: 2026-06-13
