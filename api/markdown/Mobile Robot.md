A mobile robot is an autonomous or semi-autonomous electromechanical system equipped with a locomotion mechanism — wheels, tracks, legs, rotors, or thrusters — that enables it to navigate within or across physical environments without being fixed to a stationary base. Mobile robots integrate sensing, actuation, and computation to perceive their surroundings, plan feasible paths, and execute goal-directed motion, distinguishing them from fixed industrial manipulators. They span a wide spectrum of embodiments including ground vehicles (UGVs), aerial vehicles (UAVs/drones), underwater vehicles (AUVs), and legged walkers, unified by the capability to self-relocate in service of a task. Defined formally by ISO 8373:2021 as a robot able to travel under its own control.

### Overview

- Mobile robots are among the most commercially and scientifically significant embodiments of [[Robotics]], enabling machines to operate in unstructured, remote, or hazardous environments where fixed automation cannot reach.
- Unlike stationary systems, their value proposition rests on **mobility** — the ability to transport sensing, manipulation, or payload capabilities to where they are needed rather than bringing the work to the machine.
- Three core subsystems define every mobile robot:
  - **Locomotion** — the physical means of motion ([[Locomotion System]]: wheels, tracks, legs, propellers, jets).
  - **Perception** — sensing the environment via [[LiDAR]], cameras, [[Inertial Measurement Unit]], sonar, and tactile sensors.
  - **Cognition** — onboard or offloaded computation for [[Simultaneous Localisation and Mapping]], [[Motion Planning]], and decision-making.
- The modern mobile robot stack almost universally runs on or interfaces with [[Robot Operating System]] (ROS/ROS 2), which provides hardware abstraction, message passing, and a rich ecosystem of navigation libraries (Nav2, move_base).

### Key Components

#### Locomotion Mechanisms

- **Wheeled** — most common in flat-floor environments; differential-drive and omnidirectional (mecanum/holonomic) configurations dominate indoor logistics.
- **Tracked** — high traction on rough terrain; used in military, agricultural, and search-and-rescue applications.
- **Legged** — bipeds and quadrupeds (e.g. Boston Dynamics Spot) traverse stairs and rubble inaccessible to wheeled platforms; links to [[Legged Robot]].
- **Aerial** — multirotor and fixed-wing UAVs; see [[Unmanned Aerial Vehicle]].
- **Aquatic/Subaquatic** — propeller-driven or buoyancy-controlled; see [[Autonomous Underwater Vehicle]].

#### Sensing and Perception

- [[LiDAR]] — rotating or solid-state time-of-flight scanners producing 2-D or 3-D point clouds; primary input for [[Simultaneous Localisation and Mapping]].
- [[Computer Vision]] — RGB-D cameras, stereo rigs, and event cameras provide texture and colour for object recognition and lane following.
- [[Inertial Measurement Unit]] — accelerometers and gyroscopes supply high-frequency dead-reckoning between slower exteroceptive updates.
- Ultrasonic and infrared range-finders — close-range obstacle detection at low cost.
- GPS/GNSS — outdoor global localisation; fused with IMU for robustness.

#### Computation and Software

- [[Onboard Computer]] — SBCs (Raspberry Pi, NVIDIA Jetson) through full x86 compute modules; must balance power draw with computational demand.
- [[Robot Operating System]] — de-facto middleware providing nodes, topics, services, and actions; ROS 2 adds DDS-based real-time comms.
- [[Simultaneous Localisation and Mapping]] — builds a map while concurrently estimating the robot's pose within it; foundational for autonomous navigation.
- [[Motion Planning]] — computes collision-free trajectories from current pose to goal; global planners (A*, D*) combined with local reactive planners (DWA, TEB).
- [[Obstacle Avoidance]] — real-time reactive layer that overrides planned paths to prevent collisions.

#### Power and Actuation

- [[Power Supply]] — lithium-polymer or lithium-iron-phosphate batteries; fuel cells for extended missions; wireless charging for indoor AMRs.
- [[Actuator]] — brushless DC motors with encoders; servo joints for articulated legs; pneumatic actuators for soft robots.

### Applications and Use Cases

#### Logistics and Warehousing

- [[Warehouse Automation]] — Autonomous Mobile Robots (AMRs) such as those from Fetch Robotics, 6 River Systems, and Amazon Robotics autonomously transport totes and pallets, dynamically adapting routes around human workers without fixed conveyor infrastructure.
- [[Last-Mile Delivery]] — pavement delivery robots (Starship Technologies, Kiwibot) navigate pedestrian environments for short-range package and food delivery.

#### Field and Service Robotics

- [[Search and Rescue Robotics]] — ground and aerial robots enter collapsed buildings or disaster zones to locate survivors; integrate thermal cameras and gas sensors.
- Agricultural robots — autonomous tractors, crop-spraying UAVs, and fruit-picking arms traverse unstructured outdoor terrain.
- Inspection — pipeline, powerline, and bridge inspection drones and crawlers reduce human exposure to hazardous environments.
- Healthcare — hospital logistics robots (medication and linen delivery) and disinfection UV robots operate alongside clinical staff.

#### Military and Defence

- Explosive Ordnance Disposal (EOD) robots navigate to suspected devices and apply disruptors without risking human lives.
- Unmanned ground vehicles for reconnaissance and convoy protection.
- Collaborative autonomy between UAVs and UGVs for intelligence, surveillance, and reconnaissance (ISR) missions.

#### Scientific Exploration

- Planetary rovers (NASA Curiosity, Perseverance) are canonical mobile robots operating in GPS-denied, communication-latency-constrained environments on Mars.
- [[Autonomous Underwater Vehicle]] platforms survey deep-sea geology, ecology, and infrastructure.

#### Spatial Computing and Telepresence

- Mobile robots equipped with AR/VR telepresence capabilities bridge physical and digital spaces, forming a natural intersection with [[Digital Twin]] and [[Internet of Things]] ecosystems.
- Robot-as-avatar models allow remote workers to physically navigate and interact with a facility.

### Standards and Context

- **[[ISO 8373:2021]]** — "Robots and robotic devices — Vocabulary" — the authoritative international standard defining mobile robot terminology; defines mobile robot as "robot able to travel under its own control" (clause 3.1.4).
- **ANSI/RIA R15.08** — US standard for industrial mobile robots and robot systems safety; covers AGV and AMR integration in workplaces with human co-workers.
- **IEC 62061 / ISO 13849** — functional safety standards applied to robot control systems, including mobile platforms.
- **UL 3100** — Underwriters Laboratories standard for autonomous mobile robots in commercial, industrial, and service environments.
- Key governing bodies: ISO/TC 299 (Robotics), IEEE Robotics and Automation Society (RAS), European Robotics Association (euRobotics).
- The distinction between AGV (Automated Guided Vehicle, fixed-path magnetic tape/reflector following) and AMR (Autonomous Mobile Robot, free-navigation with onboard mapping) is commercially significant; AMRs are a subclass of mobile robots with higher autonomy.

### Taxonomy Note

- Mobile robots are a subclass of [[Robot]] (the direct taxonomic parent), itself situated within [[Robotics]].
- Major subclasses include:
  - Wheeled Mobile Robot (WMR)
  - [[Legged Robot]] (bipeds, quadrupeds, hexapods)
  - [[Unmanned Aerial Vehicle]] / drone
  - [[Autonomous Underwater Vehicle]]
  - [[Swarm Robotics]] unit (a mobile robot specialised for collective behaviour)
  - Autonomous Mobile Robot (AMR) — high-autonomy commercial logistics subtype
  - Automated Guided Vehicle (AGV) — lower-autonomy, infrastructure-guided predecessor

### Current Landscape (2026)

- AI foundation models moved into fleet coordination: in June 2025 Amazon deployed its one-millionth warehouse robot and launched DeepFleet, a generative-AI foundation model that orchestrates robot traffic and is claimed to improve fleet travel efficiency by roughly 10%.
- Vendor platforms shifted from 2D laser guidance to AI-driven 3D Visual SLAM: ABB's Flexley Mover P603/P604 (launched June 2025, handling up to 1,500 kg) pairs Visual SLAM with the AMR Studio programming platform and won an iF Design Award in April 2026; OMRON showed next-generation LD-150/LD-300 units with fast wireless charging at Automate 2026.
- VDA 5050 version 3.0.0 (2025) advanced the vendor-neutral MQTT interface between mobile robots and fleet-control systems, pushing multi-vendor interoperability as a procurement requirement.
- Safety standardisation consolidated around ISO 3691-4:2023 (driverless industrial trucks) and the ANSI/A3 R15.08 family — Part 1 (2020), Part 2 (2023) and Part 3 (user-side, targeted late 2025) — with personnel-detection functions typically resolving to PL d / Category 3 and requiring certified safety laser scanners rather than navigation LiDAR.
- The EU AI Act's phased implementation began imposing explainability and conformity obligations on autonomous navigation systems, raising certification cost and timelines for AMR makers selling into Europe.
- Market consolidation accelerated through late 2025 into 2026: Aptiv partnered with Vecna and Chang Robotics with OTTO/Rockwell (Dec 2025), while Serve Robotics acquired Diligent Robotics (Jan 2026), Amazon acquired stair-climbing specialist Rivr (Mar 2026), Skild AI bought Zebra's Fetch Robotics division (Apr 2026) and Meta acquired Assured Robot Intelligence (May 2026).
- Competition is led by Geek+ (reported top global AMR share for seven consecutive years, ~48.5% of goods-to-person), alongside ABB, OMRON, KUKA, Zebra/Fetch, Locus Robotics, MiR, Seegrid and OTTO Motors, with 2026 market estimates spanning roughly USD 2.75–5.5 billion and CAGR forecasts of ~14–19%.
- Open frontiers as of 2026 include safe, certifiable operation in mixed human-robot environments, convergence of AMRs with humanoid and mobile-manipulation platforms, and turning interoperability standards into genuine cross-vendor fleet portability.

### References

- 1. MarknTel Advisors (2026). Autonomous Mobile Robots Market Trends Forecast 2032 (Amazon DeepFleet, ABB Flexley Mover). https://www.marknteladvisors.com/research-library/autonomous-mobile-robots-market-study.html
- 2. Grand View Research (2026). Autonomous Mobile Robots Market Size Report, 2026-2033 (recent partnerships and SLAM upgrades). https://www.grandviewresearch.com/industry-analysis/autonomous-mobile-robots-market
- 3. Knowledge Sourcing Intelligence (2026). Autonomous Mobile Robots (AMR) Market — Key Developments 2025-2026 M&A. https://www.knowledge-sourcing.com/report/autonomous-mobile-robots-amr-market
- 4. VDA (2025). VDA 5050 v3.0.0 — Interface for the Communication between Mobile Robots and a Fleet Control. https://www.vda.de/dam/jcr:09f03b91-13e2-4db3-bf30-4f221710071b/VDA5050-V3.0.0-2025-03.pdf
- 5. FSD (2026). ANSI/RIA R15.08 Explained — North America's Mobile Robot Safety Standard for AGVs and AMRs. https://www.fsddsk.com/ansi-ria-r1508-explained-mobile-robot-safety-standard-agv-amr-north-america

### Provenance

