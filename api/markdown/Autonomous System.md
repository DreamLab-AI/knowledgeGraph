```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@type": "Page",
  "@id": "urn:visionflow:page:autonomous-system",
  "title": "Autonomous System",
  "vc:slug": "autonomous-system",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```
alias:: Autonomous Systems

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autonomous-system",
  "@type": "Class",
  "label": "Autonomous System",
  "definition": "An Autonomous System is a computational or physical entity capable of perceiving its environment through sensors, reasoning over that perception, and executing goal-directed actions without continuous human intervention, forming closed-loop sense-plan-act cycles. Architecturally, autonomous systems combine perception pipelines, world-model maintenance, deliberative or reactive planning, and actuator control, often augmented by machine learning to handle environmental uncertainty. They operate across a spectrum from fully automated (no human input required) to conditionally autonomous (human on the loop), and encompass platforms as diverse as self-driving vehicles, unmanned aerial systems, autonomous underwater vehicles, industrial robotic cells, and intelligent software agents.",
  "domain": "robotics",
  "maturity": "established",
  "quality": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-robot-type",
      "label": "Robot Type"
    }
  ],
  "sameAs": [
    {"@id": "urn:ngm:class:autonomous-systems", "label": "Autonomous Systems"},
    {"@id": "urn:ngm:class:self-governing-system", "label": "Self-Governing System"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:perception-module", "label": "Perception Module"},
      {"@id": "urn:ngm:class:world-model", "label": "World Model"},
      {"@id": "urn:ngm:class:planning-module", "label": "Planning Module"},
      {"@id": "urn:ngm:class:actuation-system", "label": "Actuation System"},
      {"@id": "urn:ngm:class:sensor", "label": "Sensor"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:real-time-computing", "label": "Real-Time Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"},
      {"@id": "urn:ngm:class:autonomous-robot", "label": "Autonomous Robot"},
      {"@id": "urn:ngm:class:unmanned-aerial-vehicle", "label": "Unmanned Aerial Vehicle"},
      {"@id": "urn:ngm:class:autonomous-warehouse-robot", "label": "Autonomous Warehouse Robot"},
      {"@id": "urn:ngm:class:autonomous-agent", "label": "Autonomous Agent"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"},
      {"@id": "urn:ngm:class:control-theory", "label": "Control Theory"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:multi-robot-systems", "label": "Multi-Robot Systems"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-iec-42010", "label": "ISO/IEC 42010"},
      {"@id": "urn:ngm:class:sae-levels-of-driving-automation", "label": "SAE Levels of Driving Automation"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:teleoperated-system", "label": "Teleoperated System"},
      {"@id": "urn:ngm:class:semi-autonomous-system", "label": "Semi-Autonomous System"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"},
      {"@id": "urn:ngm:class:functional-safety", "label": "Functional Safety"},
      {"@id": "urn:ngm:class:cyber-physical-system", "label": "Cyber-Physical System"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - An **Autonomous System** is a computational or physical entity that perceives its environment, maintains an internal [[World Model]], reasons about goals and constraints, and executes actions — all without continuous human direction. The defining characteristic is the closed-loop [[Sense-Plan-Act Cycle]]: sensor data flows into a [[Perception Module]], interpreted data updates the world model, a [[Planning Module]] generates a sequence of actions, and an [[Actuation System]] carries those actions out. This distinguishes autonomous systems from [[Teleoperated System]]s (human in the loop) and [[Semi-Autonomous System]]s (human on the loop for critical decisions). The concept spans both physical platforms such as [[Autonomous Vehicle]]s and [[Unmanned Aerial Vehicle]]s and purely software entities such as [[Autonomous Agent]]s operating in digital environments.

- ### Overview
  - Autonomous systems emerged from decades of research in [[Robotics]], [[Control Theory]], and [[Artificial Intelligence]], converging into deployable products in the early 2010s with advances in [[Deep Learning]] and affordable high-resolution [[Sensor]] hardware.
  - The core value proposition is removing humans from dull, dirty, or dangerous tasks at scale — enabling 24/7 operation, sub-millisecond reaction times, and deployment in environments hostile to human operators.
  - Autonomy is not binary. The [[SAE Levels of Driving Automation]] (Levels 0–5) provide one widely adopted taxonomy; similar spectra exist in aerospace, maritime, and industrial domains.
  - Closed-loop operation requires the system to handle uncertainty in perception (sensor noise), in the world (dynamic environments), and in execution (actuator error), which drives the use of probabilistic methods and [[Reinforcement Learning]].
  - Distributed or swarm configurations — [[Multi-Robot Systems]] — extend the capability of individual autonomous systems by enabling cooperative sensing, task allocation, and fault tolerance.

- ### Key Components
  - **Perception Pipeline**
    - [[Sensor]]s (LiDAR, radar, cameras, IMUs, GPS, force/torque) provide raw environmental data
    - [[Sensor Fusion]] combines heterogeneous modalities into a unified scene representation
    - [[Computer Vision]] and signal processing extract semantic meaning from raw streams
    - [[State Estimation]] (Kalman filters, particle filters) tracks dynamic world state over time
  - **World Model**
    - Occupancy grids, semantic maps, or scene graphs encode spatial and semantic environment structure
    - [[Simultaneous Localisation and Mapping]] (SLAM) builds and updates the map while localising the robot within it
    - Object detection and tracking populate the model with dynamic agents
  - **Deliberation and Planning**
    - [[Motion Planning]] algorithms (RRT, A*, MPC) generate collision-free trajectories
    - Task planning decomposes high-level goals into sequences of primitive actions
    - Reactive layers (behaviour trees, subsumption architectures) handle time-critical responses
    - [[Reinforcement Learning]] trains policies for complex, high-dimensional action spaces
  - **Control and Actuation**
    - [[Control Theory]] (PID, LQR, MPC) closes the feedback loop between planned and executed motion
    - [[Actuation System]] components (motors, servos, hydraulics) translate commands to physical forces
    - [[Real-Time Computing]] guarantees bounded latency for safety-critical control loops
  - **Safety and Monitoring**
    - [[Robot Safety]] mechanisms include hardware interlocks, watchdog timers, and fail-safe states
    - [[Functional Safety]] standards (IEC 61508, ISO 26262) govern systematic safety lifecycle
    - Runtime monitors detect anomalies and trigger graceful degradation

- ### Applications / Use Cases
  - **Transportation**
    - [[Autonomous Vehicle]]s (SAE L3–L5) operating on public roads and geofenced campuses
    - Autonomous railway and metro systems with decades of operational history
    - Maritime surface and subsurface autonomous vessels for survey, inspection, and cargo
  - **Aerial Systems**
    - [[Unmanned Aerial Vehicle]]s for precision agriculture, infrastructure inspection, and last-mile delivery
    - Fixed-wing autonomous aircraft for long-endurance surveillance
  - **Industrial Automation**
    - [[Autonomous Warehouse Robot]]s (AMRs) for goods-to-person fulfilment
    - Collaborative robots (cobots) sharing workspace with human workers
    - Autonomous quality inspection on manufacturing lines
  - **Defence and Public Safety**
    - Explosive ordnance disposal robots, search-and-rescue platforms, perimeter patrol
    - Ethical and legal concerns around lethal autonomous weapons systems (LAWS) drive international governance debate
  - **Scientific Exploration**
    - Planetary rovers (Mars Perseverance, Ingenuity helicopter) operating with communication latency precluding teleoperation
    - Autonomous underwater vehicles (AUVs) mapping ocean floors and subsea infrastructure
  - **Software Agents**
    - Autonomous trading systems, scheduling agents, and orchestration daemons acting as digital autonomous systems operating purely in software environments

- ### Relationships
  - hasPart:: [[Perception Module]]
  - hasPart:: [[World Model]]
  - hasPart:: [[Planning Module]]
  - hasPart:: [[Actuation System]]
  - hasPart:: [[Sensor]]
  - requires:: [[Motion Planning]]
  - requires:: [[State Estimation]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[Real-Time Computing]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Autonomous Robot]]
  - enables:: [[Unmanned Aerial Vehicle]]
  - enables:: [[Autonomous Warehouse Robot]]
  - enables:: [[Autonomous Agent]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Computer Vision]]
  - uses:: [[Simultaneous Localisation and Mapping]]
  - uses:: [[Deep Learning]]
  - dependsOn:: [[Embedded Systems]]
  - dependsOn:: [[Control Theory]]
  - supports:: [[Human-Robot Interaction]]
  - supports:: [[Multi-Robot Systems]]
  - standardizedBy:: [[SAE Levels of Driving Automation]]
  - standardizedBy:: [[ISO/IEC 42010]]
  - contrastsWith:: [[Teleoperated System]]
  - contrastsWith:: [[Semi-Autonomous System]]
  - relatedTo:: [[Robot Safety]]
  - relatedTo:: [[Functional Safety]]
  - relatedTo:: [[Cyber-Physical System]]
  - bridges-to:: [[AI Safety]]
  - bridges-to:: [[Edge Computing]]

- ### Standards & Context
  - **SAE J3016** — Levels of Driving Automation (0–5); the reference taxonomy for automotive autonomy, maintained by SAE International.
  - **IEC 61508** — Functional Safety of E/E/PE Safety-Related Systems; the foundational standard underpinning many domain-specific derivatives.
  - **ISO 26262** — Road vehicle functional safety; derived from IEC 61508 and mandatory for automotive supply chains.
  - **DO-178C / DO-254** — Software and hardware certification standards for airborne systems, applied to autonomous aerial platforms.
  - **ROS 2** (Robot Operating System 2) — the de-facto open middleware standard for autonomous system development, with real-time and security extensions.
  - **ANSI/RIA R15.08** — Safety standard for mobile robots operating in industrial environments in North America.
  - **IEEE P7009** — Standard on Fail-Safe Design of Autonomous Systems (under development), addressing graceful degradation requirements.
  - Regulatory bodies including the FAA (USA), EASA (Europe), and IMO (maritime) are progressively certifying autonomous platforms under adapted frameworks.

- ### Provenance
  - sources:: SAE J3016 (Levels of Driving Automation); IEC 61508; ISO 26262; ROS 2 documentation; IEEE Robotics and Automation Society reference materials; Thrun, Burgard & Fox "Probabilistic Robotics" (MIT Press); Russell & Norvig "Artificial Intelligence: A Modern Approach"
  - updated:: 2026-06-13
