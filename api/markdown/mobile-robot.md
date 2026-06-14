- ### Definition
  - A mobile robot is an autonomous or semi-autonomous electromechanical system that can self-relocate within physical environments using wheels, tracks, legs, rotors, or other propulsion mechanisms, distinguishing it from fixed industrial systems such as [[Industrial Manipulator]] arms. Mobile robots integrate [[Robot Sensor Suite]] capabilities, [[Onboard Computer]] processing, and [[Motion Planning]] algorithms to perceive, reason about, and act within their surroundings. The concept subsumes a broad taxonomy spanning [[Unmanned Aerial Vehicle]] (UAV/drone), [[Autonomous Underwater Vehicle]] (AUV), ground-based rovers, and [[Legged Robot]] platforms. Under [[ISO 8373:2021]], a mobile robot is formally defined as a robot able to travel under its own control.

- ### Overview
  - Mobile robots are among the most commercially and scientifically significant embodiments of [[Robotics]], enabling machines to operate in unstructured, remote, or hazardous environments where fixed automation cannot reach.
  - Unlike stationary systems, their value proposition rests on **mobility** — the ability to transport sensing, manipulation, or payload capabilities to where they are needed rather than bringing the work to the machine.
  - Three core subsystems define every mobile robot:
    - **Locomotion** — the physical means of motion ([[Locomotion System]]: wheels, tracks, legs, propellers, jets).
    - **Perception** — sensing the environment via [[LiDAR]], cameras, [[Inertial Measurement Unit]], sonar, and tactile sensors.
    - **Cognition** — onboard or offloaded computation for [[Simultaneous Localisation and Mapping]], [[Motion Planning]], and decision-making.
  - The modern mobile robot stack almost universally runs on or interfaces with [[Robot Operating System]] (ROS/ROS 2), which provides hardware abstraction, message passing, and a rich ecosystem of navigation libraries (Nav2, move_base).

- ### Key Components

  - #### Locomotion Mechanisms
    - **Wheeled** — most common in flat-floor environments; differential-drive and omnidirectional (mecanum/holonomic) configurations dominate indoor logistics.
    - **Tracked** — high traction on rough terrain; used in military, agricultural, and search-and-rescue applications.
    - **Legged** — bipeds and quadrupeds (e.g. Boston Dynamics Spot) traverse stairs and rubble inaccessible to wheeled platforms; links to [[Legged Robot]].
    - **Aerial** — multirotor and fixed-wing UAVs; see [[Unmanned Aerial Vehicle]].
    - **Aquatic/Subaquatic** — propeller-driven or buoyancy-controlled; see [[Autonomous Underwater Vehicle]].

  - #### Sensing and Perception
    - [[LiDAR]] — rotating or solid-state time-of-flight scanners producing 2-D or 3-D point clouds; primary input for [[Simultaneous Localisation and Mapping]].
    - [[Computer Vision]] — RGB-D cameras, stereo rigs, and event cameras provide texture and colour for object recognition and lane following.
    - [[Inertial Measurement Unit]] — accelerometers and gyroscopes supply high-frequency dead-reckoning between slower exteroceptive updates.
    - Ultrasonic and infrared range-finders — close-range obstacle detection at low cost.
    - GPS/GNSS — outdoor global localisation; fused with IMU for robustness.

  - #### Computation and Software
    - [[Onboard Computer]] — SBCs (Raspberry Pi, NVIDIA Jetson) through full x86 compute modules; must balance power draw with computational demand.
    - [[Robot Operating System]] — de-facto middleware providing nodes, topics, services, and actions; ROS 2 adds DDS-based real-time comms.
    - [[Simultaneous Localisation and Mapping]] — builds a map while concurrently estimating the robot's pose within it; foundational for autonomous navigation.
    - [[Motion Planning]] — computes collision-free trajectories from current pose to goal; global planners (A*, D*) combined with local reactive planners (DWA, TEB).
    - [[Obstacle Avoidance]] — real-time reactive layer that overrides planned paths to prevent collisions.

  - #### Power and Actuation
    - [[Power Supply]] — lithium-polymer or lithium-iron-phosphate batteries; fuel cells for extended missions; wireless charging for indoor AMRs.
    - [[Actuator]] — brushless DC motors with encoders; servo joints for articulated legs; pneumatic actuators for soft robots.

- ### Applications and Use Cases

  - #### Logistics and Warehousing
    - [[Warehouse Automation]] — Autonomous Mobile Robots (AMRs) such as those from Fetch Robotics, 6 River Systems, and Amazon Robotics autonomously transport totes and pallets, dynamically adapting routes around human workers without fixed conveyor infrastructure.
    - [[Last-Mile Delivery]] — pavement delivery robots (Starship Technologies, Kiwibot) navigate pedestrian environments for short-range package and food delivery.

  - #### Field and Service Robotics
    - [[Search and Rescue Robotics]] — ground and aerial robots enter collapsed buildings or disaster zones to locate survivors; integrate thermal cameras and gas sensors.
    - Agricultural robots — autonomous tractors, crop-spraying UAVs, and fruit-picking arms traverse unstructured outdoor terrain.
    - Inspection — pipeline, powerline, and bridge inspection drones and crawlers reduce human exposure to hazardous environments.
    - Healthcare — hospital logistics robots (medication and linen delivery) and disinfection UV robots operate alongside clinical staff.

  - #### Military and Defence
    - Explosive Ordnance Disposal (EOD) robots navigate to suspected devices and apply disruptors without risking human lives.
    - Unmanned ground vehicles for reconnaissance and convoy protection.
    - Collaborative autonomy between UAVs and UGVs for intelligence, surveillance, and reconnaissance (ISR) missions.

  - #### Scientific Exploration
    - Planetary rovers (NASA Curiosity, Perseverance) are canonical mobile robots operating in GPS-denied, communication-latency-constrained environments on Mars.
    - [[Autonomous Underwater Vehicle]] platforms survey deep-sea geology, ecology, and infrastructure.

  - #### Spatial Computing and Telepresence
    - Mobile robots equipped with AR/VR telepresence capabilities bridge physical and digital spaces, forming a natural intersection with [[Digital Twin]] and [[Internet of Things]] ecosystems.
    - Robot-as-avatar models allow remote workers to physically navigate and interact with a facility.

- ### Relationships
  - hasPart:: [[Locomotion System]]
  - hasPart:: [[Robot Sensor Suite]]
  - hasPart:: [[Onboard Computer]]
  - hasPart:: [[Power Supply]]
  - hasPart:: [[Actuator]]
  - partOf:: [[Robotics]]
  - partOf:: [[Multi-Robot System]]
  - requires:: [[Simultaneous Localisation and Mapping]]
  - requires:: [[Motion Planning]]
  - requires:: [[Obstacle Avoidance]]
  - enables:: [[Autonomous Navigation]]
  - enables:: [[Last-Mile Delivery]]
  - enables:: [[Search and Rescue Robotics]]
  - enables:: [[Warehouse Automation]]
  - uses:: [[LiDAR]]
  - uses:: [[Inertial Measurement Unit]]
  - uses:: [[Computer Vision]]
  - uses:: [[Robot Operating System]]
  - dependsOn:: [[Localisation]]
  - dependsOn:: [[Embedded Systems]]
  - standardizedBy:: [[ISO 8373:2021]]
  - standardizedBy:: [[ANSI/RIA R15.08]]
  - contrastsWith:: [[Industrial Manipulator]]
  - contrastsWith:: [[Fixed-Base Robot]]
  - bridgesTo:: [[Digital Twin]]
  - bridgesTo:: [[Edge Computing]]
  - bridgesTo:: [[Internet of Things]]
  - relatedTo:: [[Unmanned Aerial Vehicle]]
  - relatedTo:: [[Autonomous Underwater Vehicle]]
  - relatedTo:: [[Legged Robot]]
  - relatedTo:: [[Swarm Robotics]]

- ### Standards and Context
  - **[[ISO 8373:2021]]** — "Robots and robotic devices — Vocabulary" — the authoritative international standard defining mobile robot terminology; defines mobile robot as "robot able to travel under its own control" (clause 3.1.4).
  - **ANSI/RIA R15.08** — US standard for industrial mobile robots and robot systems safety; covers AGV and AMR integration in workplaces with human co-workers.
  - **IEC 62061 / ISO 13849** — functional safety standards applied to robot control systems, including mobile platforms.
  - **UL 3100** — Underwriters Laboratories standard for autonomous mobile robots in commercial, industrial, and service environments.
  - Key governing bodies: ISO/TC 299 (Robotics), IEEE Robotics and Automation Society (RAS), European Robotics Association (euRobotics).
  - The distinction between AGV (Automated Guided Vehicle, fixed-path magnetic tape/reflector following) and AMR (Autonomous Mobile Robot, free-navigation with onboard mapping) is commercially significant; AMRs are a subclass of mobile robots with higher autonomy.

- ### Taxonomy Note
  - Mobile robots are a subclass of [[Robot]] (the direct taxonomic parent), itself situated within [[Robotics]].
  - Major subclasses include:
    - Wheeled Mobile Robot (WMR)
    - [[Legged Robot]] (bipeds, quadrupeds, hexapods)
    - [[Unmanned Aerial Vehicle]] / drone
    - [[Autonomous Underwater Vehicle]]
    - [[Swarm Robotics]] unit (a mobile robot specialised for collective behaviour)
    - Autonomous Mobile Robot (AMR) — high-autonomy commercial logistics subtype
    - Automated Guided Vehicle (AGV) — lower-autonomy, infrastructure-guided predecessor

- ### Provenance
  - sources:: [[ISO 8373:2021]], [[Robot Operating System]], [[Simultaneous Localisation and Mapping]], [[Warehouse Automation]], [[Swarm Robotics]]
  - updated:: 2026-06-13
  - migration-date:: 2026-04-26T00:00:00Z