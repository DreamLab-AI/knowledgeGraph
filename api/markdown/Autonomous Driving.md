public:: true

# autonomous driving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b42cd20f13fa64c023551dec2737e38a50cd8d02cf21561853aa97c371fd161f",
  "@type": "Page",
  "vc:slug": "autonomous-driving",
  "title": "autonomous driving",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autonomous-driving",
  "@type": "Class",
  "label": "Autonomous Driving",
  "definition": "Autonomous driving is the technical capability enabling a vehicle to perceive its environment, predict the behaviour of surrounding agents, plan a safe trajectory, and execute actuator commands without direct human intervention. The system architecture decomposes into perception (camera, Lidar, radar fusion), localisation (HD map matching, SLAM), prediction (probabilistic motion modelling), planning (route, behaviour, and motion planning layers), and control (longitudinal and lateral actuation). Safety assurance draws on formal verification, simulation, and real-world validation mileage, with regulatory oversight governed by frameworks such as SAE J3016, ISO 26262, and UN ECE WP.29. The field bridges robotics, machine learning, embedded systems, and transport infrastructure.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-application",
      "label": "AI Application"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:model-predictive-control",
        "label": "Model Predictive Control"
      },
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:robotaxi",
        "label": "Robotaxi"
      },
      {
        "@id": "urn:ngm:class:last-mile-delivery",
        "label": "Last-Mile Delivery"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:v2x-communication",
        "label": "V2X Communication"
      },
      {
        "@id": "urn:ngm:class:gnss",
        "label": "GNSS"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:sae-j-3016",
        "label": "SAE J3016"
      },
      {
        "@id": "urn:ngm:class:iso-26262",
        "label": "ISO 26262"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:advanced-driver-assistance-systems",
        "label": "Advanced Driver Assistance Systems"
      },
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:smart-city-infrastructure",
        "label": "Smart City Infrastructure"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:5g-networks",
        "label": "5G Networks"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:safety-critical-systems",
        "label": "Safety-Critical Systems"
      },
      {
        "@id": "urn:ngm:class:functional-safety",
        "label": "Functional Safety"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:self-driving-vehicle-technology",
      "label": "Self-Driving Vehicle Technology"
    },
    {
      "@id": "urn:ngm:class:driverless-driving",
      "label": "Driverless Driving"
    }
  ],
  "quality": 0.73,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Autonomous driving is the technical capability enabling a vehicle to perceive its environment, predict the behaviour of surrounding agents, plan a safe trajectory, and execute actuator commands without direct human control. It integrates [[Computer Vision]], [[Sensor Fusion]], [[Deep Learning]], and [[Motion Planning]] into a closed-loop pipeline running on embedded and cloud compute. The dominant taxonomy is [[SAE J3016]], which defines six levels of driving automation (L0–L5), and the field is governed by safety standards including [[ISO 26262]] (functional safety) and [[UN ECE WP.29]] (type-approval regulation). Autonomous driving sits at the intersection of [[Robotics]], [[Artificial Intelligence]], and transport engineering.

- ### Overview
  - Autonomous driving systems replace the human driver with a stack of algorithms and dedicated hardware that continuously senses, reasons, decides, and acts. The motivation is multifold: reducing road fatalities caused by human error, improving transport efficiency and accessibility, and enabling new mobility services such as [[Robotaxi]] fleets and autonomous freight.
  - The technical challenge is severe: the system must operate safely across all weather, lighting, and traffic conditions; handle rare but critical edge cases; comply with local traffic laws; and achieve mean times between dangerous failures measured in hundreds of millions of kilometres.
  - A key architectural principle is the **sense-plan-act** cycle: raw sensor data is processed into a structured scene understanding, a planner selects the safest manoeuvre, and a controller executes that manoeuvre via the vehicle's actuators. Modern stacks increasingly augment or replace modular pipelines with end-to-end [[Deep Learning]] models trained on large datasets of expert-driving demonstrations.

- ### Key Components
  - **Perception** — builds a real-time model of the environment from sensor data
    - [[Computer Vision]]: semantic segmentation, [[Object Detection]], depth estimation, lane detection
    - [[Lidar]]: 3D point-cloud generation for precise range measurements; robust to lighting variation
    - [[Radar]]: long-range velocity estimation; resilient to fog, rain, and dust
    - Cameras: rich texture and colour information; cost-effective but sensitive to illumination
    - [[Sensor Fusion]]: combines camera, Lidar, and radar modalities using Kalman filtering or learned fusion networks to reduce per-sensor failure modes
  - **Localisation & Mapping**
    - [[Simultaneous Localisation and Mapping]] (SLAM): real-time map construction and vehicle pose estimation
    - [[HD Maps]]: centimetre-level prior maps encoding lane geometry, speed limits, traffic signs, and road topology; consumed by localisation modules for absolute pose fixing
    - [[GNSS]]: global positioning, typically combined with RTK corrections for lane-level accuracy; degraded in urban canyons
  - **Prediction**
    - Agent motion models: probabilistic prediction of pedestrian, cyclist, and vehicle trajectories using occupancy grids, Gaussian processes, or transformer-based social models
    - Interaction-aware prediction accounts for the influence of the ego-vehicle's actions on other agents
  - **Planning**
    - Route planning: graph search (Dijkstra, A*) over the road network graph derived from [[HD Maps]]
    - Behavioural planning: high-level decisions (lane change, overtake, yield) governed by a finite-state machine or learned policy
    - [[Motion Planning]]: local trajectory optimisation satisfying kinematic constraints, comfort limits, and collision-avoidance requirements; approaches include [[Model Predictive Control]], lattice planners, and sampling-based methods (RRT*)
  - **Control**
    - Longitudinal control: throttle and brake actuation to follow speed profiles
    - Lateral control: steering actuation to follow path curvature; PID controllers and [[Model Predictive Control]] are common
    - Actuator interfaces: drive-by-wire systems that translate software commands to physical actuators
  - **Safety & Validation**
    - [[Functional Safety]] assessment per [[ISO 26262]]: systematic hazard analysis, ASIL decomposition, fault-tolerant system architecture
    - Simulation-based testing using high-fidelity virtual environments (Carla, LGSVL) for scenario coverage that is impractical on real roads
    - [[Digital Twin]] environments that replicate specific real-world locations for targeted regression testing
    - Formal verification of planning and control components using model-checking tools
  - **Compute Platforms**
    - [[Edge Computing]] on-board: automotive SoCs (e.g., NVIDIA Drive, Mobileye EyeQ) providing teraflop-class inference at constrained power budgets
    - Cloud back-end: large-scale offline training, fleet-wide data mining, map updates, and over-the-air software deployment

- ### Applications & Use Cases
  - **Robotaxi services** — fully driverless commercial ride-hailing operating in geo-fenced urban areas; exemplified by Waymo One and Baidu Apollo Go
  - **Autonomous freight** — long-haul highway trucking at SAE L4, reducing driver fatigue and enabling continuous operation; companies including Waymo Via, Aurora, and Kodiak Robotics operate pilot programmes
  - **Last-mile delivery** — low-speed autonomous delivery robots and vans navigating pavements and urban streets
  - **Agricultural and off-road autonomy** — autonomous tractors and mining vehicles operating in structured, lower-complexity environments
  - **Shuttle and campus mobility** — fixed-route autonomous shuttles in controlled environments (airports, university campuses, industrial sites)
  - **Advanced driver assistance** — SAE L1–L2 features (adaptive cruise control, lane-keeping assist, automated emergency braking) already widely deployed, forming the commercial on-ramp to higher automation levels
  - **Military and logistics vehicles** — autonomous resupply and convoy following in structured environments

- ### SAE Automation Levels
  - **L0 — No Automation**: driver performs all tasks; system may issue warnings only
  - **L1 — Driver Assistance**: single automated function (e.g., adaptive cruise control or lane-keeping), driver monitors at all times
  - **L2 — Partial Automation**: simultaneous lateral and longitudinal control, driver must monitor environment continuously
  - **L3 — Conditional Automation**: system handles driving within operational design domain; driver may disengage attention but must respond to handover requests
  - **L4 — High Automation**: system handles all driving within a defined operational design domain without driver intervention; human can ignore driving task
  - **L5 — Full Automation**: system performs all driving tasks in all conditions with no operational design domain restriction

- ### Relationships
  - requires:: [[Computer Vision]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[Lidar]]
  - requires:: [[Simultaneous Localisation and Mapping]]
  - requires:: [[Object Detection]]
  - requires:: [[HD Maps]]
  - uses:: [[Path Planning]]
  - uses:: [[Deep Learning]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Model Predictive Control]]
  - uses:: [[Convolutional Neural Network]]
  - uses:: [[Transformer Architecture]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Robotaxi]]
  - enables:: [[Last-Mile Delivery]]
  - dependsOn:: [[Edge Computing]]
  - dependsOn:: [[V2X Communication]]
  - dependsOn:: [[GNSS]]
  - standardizedBy:: [[SAE J3016]]
  - standardizedBy:: [[ISO 26262]]
  - standardizedBy:: [[UN ECE WP.29]]
  - contrastsWith:: [[Advanced Driver Assistance Systems]]
  - contrastsWith:: [[Teleoperation]]
  - bridgesTo:: [[Smart City Infrastructure]]
  - bridgesTo:: [[Digital Twin]]
  - bridgesTo:: [[5G Networks]]
  - relatedTo:: [[Robotics]]
  - relatedTo:: [[Motion Planning]]
  - relatedTo:: [[Safety-Critical Systems]]
  - relatedTo:: [[Functional Safety]]

- ### Standards & Regulatory Context
  - **[[SAE J3016]]** — Society of Automotive Engineers taxonomy and definitions for driving automation levels (L0–L5); the universal reference framework for industry, regulators, and media
  - **[[ISO 26262]]** — Functional safety standard for road vehicles; prescribes hazard analysis, ASIL (Automotive Safety Integrity Level) rating, and systematic safety development lifecycle for safety-critical automotive systems
  - **[[UN ECE WP.29]]** — United Nations Economic Commission for Europe Working Party 29; develops internationally harmonised vehicle regulations including GRVA (automated and connected vehicles sub-group) and the ALKS regulation (Automated Lane Keeping Systems)
  - **ISO/SAE PAS 21448 (SOTIF)** — Safety Of The Intended Functionality; addresses risks from performance limitations and foreseeable misuse, complementing ISO 26262
  - **IEEE 2846** — Assumptions for models in safety-critical autonomous driving scenarios
  - National frameworks: US NHTSA guidelines, EU AI Act high-risk classification for autonomous vehicles, UK AEVA (Automated and Electric Vehicles Act) and AVSA (Automated Vehicles Act 2024)
  - **Operational Design Domain (ODD)** — a formally specified set of conditions (geography, speed, weather, road type) within which an automated driving system is designed to operate; central to L3/L4 type-approval

- ### Technical Challenges
  - **Long-tail edge cases** — rare, dangerous scenarios (children chasing balls into streets, debris on motorways) are under-represented in training data and extremely costly to encounter and validate at scale
  - **Adverse weather** — rain, fog, snow, and glare degrade camera and Lidar performance; radar is more robust but has lower resolution
  - **V2X Communication** latency and coverage gaps in cooperative perception scenarios
  - **Map freshness** — [[HD Maps]] become stale due to road works, temporary signs, and accident debris; systems must detect map-reality divergence
  - **Cyber-security** — attack surface spans V2X links, OTA update channels, sensor spoofing (Lidar blinding, GPS spoofing), and CAN bus vulnerabilities
  - **Explainability** — end-to-end deep learning systems are difficult to audit for safety; regulatory acceptance requires traceable decision logic
  - **Ethical decision-making** — unavoidable harm scenarios (trolley-problem analogues) and how systems should be programmed to respond

- ### Industry Landscape
  - **Waymo** (Alphabet) — operates commercial robotaxi services in San Francisco and Phoenix at SAE L4; considered the technology leader by autonomous miles driven
  - **Cruise** (GM) — robotaxi operations in San Francisco; paused following a 2023 incident; resumed with safety reforms
  - **Baidu Apollo** — leading Chinese AV programme; Apollo Go robotaxi operating commercially in multiple Chinese cities
  - **Tesla Autopilot / FSD** — SAE L2+ ADAS with aspirations toward L3/L4; uses camera-only perception and end-to-end neural network architecture
  - **Mobileye** — dominant ADAS chip and software supplier; developing SuperVision (L2+) and Chauffeur (L4) stacks
  - **Aurora Innovation, Kodiak Robotics, TuSimple** — freight-focused autonomous trucking programmes

- ### Provenance
  - sources:: SAE J3016:2021, ISO 26262:2018, IEEE Spectrum AV coverage, UN ECE WP.29 GRVA documents
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
