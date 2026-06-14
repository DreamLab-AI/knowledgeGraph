public:: true
alias:: Mobile Robots, MobileRobot

# Mobile Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3b2452c5bd0e7df0a50cdde8d5a71f54cf3ce47c32e8e3d8de113cedafae01e1",
  "@type": "Page",
  "vc:slug": "mobile-robot",
  "title": "Mobile Robot",
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
      "vc:value": "RB-0002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mobile Robot"
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
  "@id": "urn:ngm:class:mobile-robot",
  "@type": "Class",
  "label": "Mobile Robot",
  "definition": "A mobile robot is an autonomous or semi-autonomous electromechanical system equipped with a locomotion mechanism — wheels, tracks, legs, rotors, or thrusters — that enables it to navigate within or across physical environments without being fixed to a stationary base. Mobile robots integrate sensing, actuation, and computation to perceive their surroundings, plan feasible paths, and execute goal-directed motion, distinguishing them from fixed industrial manipulators. They span a wide spectrum of embodiments including ground vehicles (UGVs), aerial vehicles (UAVs/drones), underwater vehicles (AUVs), and legged walkers, unified by the capability to self-relocate in service of a task. Defined formally by ISO 8373:2021 as a robot able to travel under its own control.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robot",
      "label": "Robot"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:autonomous-mobile-robot",
      "label": "Autonomous Mobile Robot"
    },
    {
      "@id": "urn:ngm:class:amr",
      "label": "AMR"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:locomotion-system",
        "label": "Locomotion System"
      },
      {
        "@id": "urn:ngm:class:robot-sensor-suite",
        "label": "Robot Sensor Suite"
      },
      {
        "@id": "urn:ngm:class:onboard-computer",
        "label": "Onboard Computer"
      },
      {
        "@id": "urn:ngm:class:power-supply",
        "label": "Power Supply"
      },
      {
        "@id": "urn:ngm:class:actuator",
        "label": "Actuator"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      },
      {
        "@id": "urn:ngm:class:multi-robot-system",
        "label": "Multi-Robot System"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localisation and Mapping"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:obstacle-avoidance",
        "label": "Obstacle Avoidance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:last-mile-delivery",
        "label": "Last-Mile Delivery"
      },
      {
        "@id": "urn:ngm:class:search-and-rescue-robotics",
        "label": "Search and Rescue Robotics"
      },
      {
        "@id": "urn:ngm:class:warehouse-automation",
        "label": "Warehouse Automation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      },
      {
        "@id": "urn:ngm:class:inertial-measurement-unit",
        "label": "Inertial Measurement Unit"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Localisation"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-8373-2021",
        "label": "ISO 8373 2021"
      },
      {
        "@id": "urn:ngm:class:ansi-ria-r15-08",
        "label": "ANSI/RIA R15.08"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:industrial-manipulator",
        "label": "Industrial Manipulator"
      },
      {
        "@id": "urn:ngm:class:fixed-base-robot",
        "label": "Fixed-Base Robot"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:unmanned-aerial-vehicle",
        "label": "Unmanned Aerial Vehicle"
      },
      {
        "@id": "urn:ngm:class:autonomous-underwater-vehicle",
        "label": "Autonomous Underwater Vehicle"
      },
      {
        "@id": "urn:ngm:class:legged-robot",
        "label": "Legged Robot"
      },
      {
        "@id": "urn:ngm:class:swarm-robotics",
        "label": "Swarm Robotics"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  },
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-0002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Mobile Robot"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:mobile-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3b2452c5bd0e7df0a50cdde8d5a71f54cf3ce47c32e8e3d8de113cedafae01e1"
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
