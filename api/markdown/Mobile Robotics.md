public:: true

# Mobile Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mobile-robotics",
  "@type": "Page",
  "vc:slug": "mobile-robotics",
  "title": "Mobile Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mobile-robotics",
  "@type": "Class",
  "label": "Mobile Robotics",
  "definition": "Mobile robotics is the engineering and scientific discipline concerned with the design, construction, and programming of robots capable of autonomous locomotion through unstructured or semi-structured physical environments. It integrates mechanical locomotion systems (wheeled, tracked, legged, aerial, aquatic), onboard sensor suites, simultaneous localisation and mapping (SLAM) for spatial state estimation, motion planning for collision-free trajectory generation, and control systems for execution — all without continuous human tele-operation. The field is fundamentally interdisciplinary, drawing on computer science, control theory, mechanical engineering, and artificial intelligence, and underpins major commercial domains including warehouse automation, autonomous vehicles, agricultural robotics, and planetary exploration.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:robotics", "label": "Robotics"}, {"@id": "urn:ngm:class:robo-navigation-and-planning", "label": "Navigation and Planning"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:path-planning", "label": "Path Planning"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:lidar", "label": "Lidar"},
      {"@id": "urn:ngm:class:inertial-measurement-unit", "label": "Inertial Measurement Unit"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:logistics-automation", "label": "Logistics Automation"},
      {"@id": "urn:ngm:class:autonomous-vehicle", "label": "Autonomous Vehicle"},
      {"@id": "urn:ngm:class:precision-agriculture", "label": "Precision Agriculture"},
      {"@id": "urn:ngm:class:search-and-rescue-robotics", "label": "Search and Rescue Robotics"},
      {"@id": "urn:ngm:class:planetary-exploration", "label": "Planetary Exploration"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:localisation", "label": "Localisation"},
      {"@id": "urn:ngm:class:occupancy-mapping", "label": "Occupancy Mapping"},
      {"@id": "urn:ngm:class:real-time-computing", "label": "Real-Time Computing"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:robot-operating-system", "label": "Robot Operating System"},
      {"@id": "urn:ngm:class:embedded-systems", "label": "Embedded Systems"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning-for-robotics", "label": "Reinforcement Learning for Robotics"},
      {"@id": "urn:ngm:class:legged-locomotion", "label": "Legged Locomotion"},
      {"@id": "urn:ngm:class:drone", "label": "Drone"},
      {"@id": "urn:ngm:class:humanoid-robot", "label": "Humanoid Robot"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:digital-twin", "label": "Digital Twin"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:iso-3691-4", "label": "ISO 3691-4"},
      {"@id": "urn:ngm:class:iec-61508", "label": "IEC 61508"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:autonomous-mobile-robot", "label": "Autonomous Mobile Robot"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Mobile robotics is the engineering and scientific discipline concerned with building robots capable of autonomous locomotion through physical environments — integrating [[Sensor Fusion]], [[Simultaneous Localisation and Mapping]], [[Path Planning]], and [[Motion Control]] to enable goal-directed movement without continuous human guidance. Unlike fixed-base [[Industrial Robotics]], mobile platforms must actively maintain spatial awareness of a changing world, estimate their own position within it, and plan safe trajectories in real time. The field encompasses wheeled [[Autonomous Mobile Robot]] platforms, [[Legged Locomotion]] systems, [[Drone]] aerial vehicles, and aquatic robots, and directly underpins [[Autonomous Vehicle]] technology, warehouse [[Logistics Automation]], and space [[Planetary Exploration]] missions.

- ### Overview
  - Mobile robotics sits at the intersection of mechanical engineering, control theory, and artificial intelligence. Its defining challenge is the simultaneous need to perceive, model, and act within an incompletely known environment under sensor noise, actuation uncertainty, and real-time computational constraints.
  - The field's theoretical foundations — probabilistic state estimation, Bayes filtering, and graph-search motion planning — were formalised in the 1990s through the work of Sebastian Thrun, Wolfram Burgard, and Dieter Fox, synthesised in the landmark *Probabilistic Robotics* textbook. These probabilistic methods replace brittle symbolic world-models with distributions over possible states, enabling robust behaviour under uncertainty.
  - Commercial adoption accelerated through the 2010s with the rise of [[Autonomous Mobile Robot]] (AMR) platforms in warehouse logistics, and through the 2010–2020s with autonomous driving research. By the mid-2020s, deep-learning-based perception and large foundation models are reshaping robot navigation, reducing reliance on hand-engineered pipelines and enabling zero-shot generalisation to novel environments.
  - Safety and certification remain active challenges: operating alongside humans requires rigorous validation of perception reliability, emergency stop behaviour, and fail-safe degradation, governed by functional safety standards including [[ISO 3691-4]] for industrial AMRs and [[IEC 61508]] for safety-critical programmable systems.

- ### Key Components
  - **Locomotion System** — the physical platform: differential-drive wheels (most AMRs), omnidirectional wheels (holonomic motion), tracks (outdoor terrain), legs ([[Legged Locomotion]] — Boston Dynamics Spot, ANYmal), aerial rotors ([[Drone]]), or aquatic thrusters.
  - **Sensor Suite** — [[LiDAR]] for 3-D point-cloud mapping, RGB-D cameras for colour-plus-depth perception, monocular/stereo cameras for [[Computer Vision]] tasks, [[Inertial Measurement Unit]] (IMU) for acceleration and angular-rate sensing, wheel encoders for odometry, ultrasonic sensors for close-range obstacle detection, and GPS/GNSS for outdoor global positioning.
  - **[[Sensor Fusion]]** — combining heterogeneous sensor streams via Kalman filters (Extended Kalman Filter, Unscented Kalman Filter) or particle filters to produce consistent, low-noise state estimates. Modern systems use factor-graph optimisation (iSAM2, GTSAM) for tightly-coupled fusion of visual, inertial, and LiDAR measurements.
  - **[[Simultaneous Localisation and Mapping]] (SLAM)** — the core computational problem: building a map of an unknown environment while simultaneously estimating the robot's location within it. Approaches include EKF-SLAM, FastSLAM (particle filter), and graph-based SLAM optimised with sparse nonlinear least squares. Key open-source systems: ORB-SLAM3, RTAB-Map, LIO-SAM, LOAM.
  - **[[Path Planning]]** — generating collision-free routes from a start pose to a goal. Global planners (Dijkstra, A*, D* Lite) operate on costmaps; local planners (Dynamic Window Approach, TEB Planner, MPC-based) handle real-time obstacle avoidance. Sampling-based methods (RRT, RRT*) handle high-dimensional configuration spaces for [[Legged Locomotion]] and manipulation-combined mobile platforms.
  - **[[Motion Control]]** — converting planned trajectories into actuator commands (motor torques or velocities), handling low-level dynamics, slip compensation, and stability (especially critical for legged platforms).
  - **[[Localisation]]** — estimating the robot's pose (position + orientation) within a pre-built or concurrently-built map. Techniques include Monte Carlo localisation (Adaptive MCL), scan-matching, visual place recognition, and topological localisation with [[Computer Vision]]-based descriptor matching.
  - **Middleware** — [[Robot Operating System]] (ROS / ROS 2) is the de facto middleware framework, providing publish-subscribe message passing, sensor drivers, visualisation tools (RViz), simulation (Gazebo), and a community ecosystem of navigation stacks (Nav2 for ROS 2).

- ### Applications and Use Cases
  - **Warehouse and Logistics Automation** — [[Autonomous Mobile Robot]] platforms (Fetch, MiR, Geek+, 6 River Systems) move goods between storage and packing stations in fulfilment centres, replacing fixed conveyor infrastructure with flexible, reprogrammable fleets. [[Logistics Automation]] via AMR fleets is one of the highest-volume commercial deployments of mobile robotics.
  - **[[Autonomous Vehicle]]** — road vehicles (Waymo, Cruise, Mobileye), port trucks, and mining haul vehicles apply the same SLAM-navigation-planning stack at larger scale, with additional requirements for V2X communication, regulatory compliance, and passenger safety.
  - **[[Precision Agriculture]]** — wheeled and aerial mobile robots (drones) for crop scouting, targeted spraying, and yield monitoring, reducing chemical inputs and providing per-plant resolution data inaccessible to tractor-mounted systems.
  - **Industrial Inspection** — legged robots (Spot) and aerial drones inspect offshore oil platforms, wind turbines, mines, and construction sites for structural defects, gas leaks, and equipment status, operating in environments too hazardous or geometrically complex for wheeled platforms.
  - **[[Search and Rescue Robotics]]** — ground and aerial mobile robots deployed in disaster zones (earthquake rubble, chemical spills, nuclear exclusion zones) to locate survivors, map hazardous areas, and deliver supplies, reducing risk to human responders.
  - **[[Planetary Exploration]]** — NASA's Mars rovers (Curiosity, Perseverance) and China's Zhurong represent the most demanding mobile robotics deployments, requiring fully autonomous navigation given multi-minute communication latency to Earth, under extreme temperature and terrain variation.
  - **Domestic Service Robots** — robotic vacuum cleaners (iRobot Roomba), lawn mowers, and floor-cleaning platforms represent the highest-volume consumer mobile robot segment, using simplified reactive SLAM with limited sensor suites.
  - **Healthcare and Logistics in Hospitals** — autonomous delivery robots (Savioke, Aethon TUG) transport medications, linens, and meals through hospital corridors, reducing staff burden and contamination risk.
  - **[[Humanoid Robot]] Deployment** — bipedal mobile platforms (Boston Dynamics Atlas, Agility Digit, Figure 02, 1X Neo) are transitioning from research into early-stage industrial deployment for tasks requiring human-form-factor tool use and stair climbing in existing human-built environments.

- ### Relationships
  - uses:: [[Sensor Fusion]]
  - uses:: [[Path Planning]]
  - uses:: [[Computer Vision]]
  - uses:: [[Simultaneous Localisation and Mapping]]
  - uses:: [[Motion Control]]
  - uses:: [[LiDAR]]
  - uses:: [[Inertial Measurement Unit]]
  - enables:: [[Logistics Automation]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Precision Agriculture]]
  - enables:: [[Search and Rescue Robotics]]
  - enables:: [[Planetary Exploration]]
  - requires:: [[Localisation]]
  - requires:: [[Occupancy Mapping]]
  - requires:: [[Real-Time Computing]]
  - dependsOn:: [[Robot Operating System]]
  - dependsOn:: [[Embedded Systems]]
  - relatedTo:: [[Reinforcement Learning for Robotics]]
  - relatedTo:: [[Legged Locomotion]]
  - relatedTo:: [[Drone]]
  - relatedTo:: [[Humanoid Robot]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Digital Twin]]
  - standardizedBy:: [[ISO 3691-4]]
  - standardizedBy:: [[IEC 61508]]

- ### Standards and Context
  - **ISO 3691-4:2020** — Industrial trucks: safety requirements and verification for driverless trucks and their systems, the primary standard governing AMR operation in warehouses. Specifies risk assessment, protective field requirements, and residual risk documentation.
  - **IEC 61508** — Functional safety of electrical/electronic/programmable electronic safety-related systems; applied to safety-critical perception and stop functions in mobile robots operating alongside humans.
  - **ISO 10218** (parts 1 and 2) — Safety requirements for industrial robots and robot systems; increasingly referenced for mobile manipulation platforms that combine AMR bases with robotic arms.
  - **ROS 2 / DDS** — the open-source middleware standard for modern mobile robot software stacks, using Data Distribution Service (DDS) for real-time, reliable publish-subscribe communication replacing ROS 1's XMLRPC-based model.
  - **DARPA Challenges** — The DARPA Grand Challenge (2004/2005) and Urban Challenge (2007) served as catalytic public benchmarks that advanced outdoor autonomous navigation substantially, spawning the talent base that founded the autonomous vehicle industry.
  - **IEEE RAS (Robotics and Automation Society)** — primary professional body, publishing IEEE Transactions on Robotics and co-organising ICRA (International Conference on Robotics and Automation), the leading venue for mobile robotics research.
  - **Integration with [[Digital Twin]]** — mobile robots increasingly feed live telemetry into digital twin environments, allowing facility operators to visualise real-time robot positions and occupancy within simulated plant layouts, bridging to [[Spatial Computing]] platforms.

- ### Current Landscape (2026)
  - Vision-Language-Action (VLA) models moved from research curiosity to production stack and now feature in roughly 40% of new robot deployments: DeepMind shipped Gemini Robotics (March 2025) with zero-shot cross-embodiment transfer, followed by Gemini Robotics 1.5 and the Gemini Robotics 2 / ER 2 series (July 2026), while Physical Intelligence progressed from open-sourced pi0 (October 2024) through pi0.5, pi0.6 and pi0.7 (April 2026).
  - Open humanoid foundation models matured rapidly: NVIDIA's GR00T line ran from N1 (GTC, March 2025) to N1.7 Early Access (April 2026), a 3B-parameter commercially licensed VLA on a Cosmos-Reason2 backbone with an Action Cascade dual-system architecture; open alternatives include OpenVLA (7B), RDT-1B, and HuggingFace's 450M SmolVLA (June 2025).
  - Humanoid mobile manipulators reached paid factory work: Figure 03 (Helix model) deployed on BMW's Spartanburg line, Boston Dynamics' all-electric Atlas (56 DoF, up to 50 kg lift) began production in early 2026 with Hyundai and DeepMind commitments, Agility's Digit was tested in live Amazon operations, and Unitree's G1 shipped as a sub-$16,000 research platform.
  - Humanoid shipments jumped from around 3,000 units in 2024 to about 13,000 in 2025 (Omdia), with Counterpoint estimating over 50,000 humanoids operating commercially in 2026; the broader autonomous mobile robot market is put at roughly USD 4.5-5.5 billion in 2025-2026 with the installed industrial AMR fleet passing 1.2 million units.
  - Navigation is shifting from LiDAR-only to sensor-fusion with Visual SLAM for cheaper semantic mapping, aided by 5G-Advanced connectivity, UWB positioning and lower-cost lithium-ion batteries enabling heavy-payload (above 1,000 kg) AMRs.
  - Safety and standards tightened around ISO 3691-4:2023 (driverless industrial trucks), the ANSI/RIA R15.08 industrial mobile robot family (Part 2 added October 2023), ISO/DIS 13482 for service robots, and the EU Machinery Regulation (EU) 2023/1230 requiring CE marking; DeepMind also released the ASIMOV-Agentic embodied-AI safety benchmark alongside Gemini Robotics 2.
  - Open challenges as of 2026 include the persistent sim-to-real gap for agile whole-body control (addressed by work such as NVIDIA's ASAP), the absence of standardised fleet-communication protocols that locks buyers into single-vendor ecosystems, on-device inference and latency constraints, and formal safety verification for language-conditioned autonomy in shared human spaces.

- ### References
  - 1. Robotics Center / SVRC (2026). State of Robotics 2026 Report: $38B Market, 12 Humanoids, VLA Adoption. https://www.roboticscenter.ai/state-of-robotics-2026
  - 2. Vicon (2026). What Are Humanoid Robots? The State of Robotics in 2026. https://www.vicon.com/resources/blog/the-rise-of-humanoid-robots-where-are-we-in-2026/
  - 3. MarkTechPost (2026). Top 10 Physical AI Models Powering Real-World Robots in 2026. https://www.marktechpost.com/2026/04/28/top-10-physical-ai-models-powering-real-world-robots-in-2026/
  - 4. SiliconANGLE (2026). Google DeepMind debuts Gemini Robotics 2 model series for humanoid robots. https://siliconangle.com/2026/07/30/google-deepmind-debuts-gemini-robotics-2-model-series-humanoid-robots/
  - 5. Mordor Intelligence (2026). Autonomous Mobile Robot Market Size, Share & Outlook 2031. https://www.mordorintelligence.com/industry-reports/autonomous-mobile-robot-market
  - 6. A3 / Automate.org. The Latest in Autonomous Mobile Robots: New Safety Standards, Greater Usability, and Advanced Features. https://www.automate.org/robotics/industry-insights/autonomous-mobile-robot-safety-updates-new-features

- ### Provenance
  - sources:: Thrun, Burgard & Fox — *Probabilistic Robotics* (MIT Press, 2005); LaValle — *Planning Algorithms* (Cambridge, 2006); IEEE Transactions on Robotics; ICRA/IROS proceedings; ROS 2 documentation; ISO 3691-4:2020 standard synopsis
  - updated:: 2026-06-13
