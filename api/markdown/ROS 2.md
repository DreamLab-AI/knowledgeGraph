public:: true
alias:: ROS2

# ros 2
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d69bc7091def0864af11376ead8c3179d5f42b8fcaba303da1dd582fc4463f78",
  "@type": "Page",
  "vc:slug": "ros-2",
  "title": "ros 2",
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
  "@id": "urn:ngm:class:ros-2",
  "@type": "Class",
  "label": "ROS 2",
  "definition": "ROS 2 (Robot Operating System 2) is an open-source robotics middleware framework developed by Open Robotics that provides a standardised publish-subscribe communication layer built on the DDS (Data Distribution Service) standard, along with a comprehensive ecosystem of drivers, libraries, and tools for sensor integration, motion planning, simulation, and hardware abstraction. ROS 2 supersedes ROS 1 with support for real-time execution, multi-robot systems, production-grade security via DDS-Security, and native Windows and macOS compatibility. It has become the de facto standard software framework for research and increasingly for commercial robotic platforms.",
  "domain": "robotics",
  "subClassOf": {
    "@id": "urn:ngm:class:robo-actuation-and-control",
    "label": "Actuation and Control"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      },
      {
        "@id": "urn:ngm:class:data-distribution-service",
        "label": "Data Distribution Service"
      },
      {
        "@id": "urn:ngm:class:publish-subscribe-pattern",
        "label": "Publish-Subscribe Pattern"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Control"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:multi-robot-systems",
        "label": "Multi-Robot Systems"
      },
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:nav2",
        "label": "Nav2"
      },
      {
        "@id": "urn:ngm:class:move-it-2",
        "label": "MoveIt 2"
      },
      {
        "@id": "urn:ngm:class:ros2-control",
        "label": "ros2_control"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:quality-of-service",
        "label": "Quality Of Service"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Robotics Middleware"
      },
      {
        "@id": "urn:ngm:class:hardware-abstraction-layer",
        "label": "Hardware Abstraction Layer"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:robot-simulation",
        "label": "Robot Simulation"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:ros",
        "label": "ROS 1"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:real-time",
        "label": "Real Time"
      },
      {
        "@id": "urn:ngm:class:simulation-software",
        "label": "Simulation Software"
      },
      {
        "@id": "urn:ngm:class:gazebo-simulator",
        "label": "Gazebo Simulator"
      },
      {
        "@id": "urn:ngm:class:dds",
        "label": "Cyclone DDS"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:middleware",
        "label": "Middleware"
      },
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicles"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:robot-operating-system-2",
      "label": "Robot Operating System 2"
    },
    {
      "@id": "urn:ngm:class:ros2",
      "label": "ROS2"
    }
  ],
  "qualityScore": 0.72,
  "maturity": "emerging",
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```


- ### Definition
  - ROS 2 (Robot Operating System 2) is an open-source robotics middleware framework developed by Open Robotics that provides a standardised publish-subscribe communication layer built on the DDS (Data Distribution Service) standard, along with a comprehensive ecosystem of drivers, libraries, and tools for sensor integration, motion planning, simulation, and hardware abstraction. ROS 2 supersedes ROS 1 with support for real-time execution, multi-robot systems, production-grade security via DDS-Security, and native Windows and macOS compatibility. It has become the de facto standard software framework for research and increasingly for commercial robotic platforms.

- ### Semantic Classification
  - owl-class:: ros-2:ROS 2
  - owl-role:: Concept

- ### Relationships
  - uses [[Communication Protocol]]
  - uses [[Robot Operating System]]
  - enables [[Motion Planning]]
  - enables [[Robot Control]]
  - enables [[Sensor Fusion]]
  - relatedTo [[Real Time]]
  - relatedTo [[Simulation Software]]

- ### Content
  - ROS 2 is structured around the concept of nodes—self-contained processes that publish and subscribe to typed message topics, provide and call services, and expose action servers for long-running tasks. The underlying transport is DDS (most commonly Eclipse Cyclone DDS or eProsima Fast DDS), which provides configurable Quality of Service (QoS) policies including reliability, durability, and deadline settings essential for real-time robotic applications.
  - The ROS 2 ecosystem includes Navigation 2 (Nav2) for autonomous mobile robot navigation, MoveIt 2 for manipulator motion planning, ros2_control for hardware-abstracted joint control, and Gazebo or Ignition simulators for physics-accurate robot simulation. The colcon build tool and the ROS package manager rosdep standardise dependency management across the ecosystem. URDF and SDF robot description formats are used to define kinematic and dynamic properties of robot models consumed by simulation, motion planning, and visualisation tools such as RViz 2.
  - ROS 2's adoption in production environments is driven by its support for AUTOSAR-compliant real-time executors (via the rclcpp Executor API), DDS-Security for encrypted, authenticated inter-node communication, and its compatibility with safety-certified operating systems such as QNX. The ROS 2 Iron Irwini and Jazzy Jalisco LTS distributions support extended maintenance periods appropriate for product deployment cycles.

- ### Current Landscape (2026)
  - The release cadence has settled into a yearly LTS/non-LTS rhythm: Kilted Kaiju (eleventh release, May 2025, non-LTS, EOL late 2026) followed by Lyrical Luth (twelfth release and latest LTS, 22 May 2026, supported to May 2031 on Ubuntu 26.04), while Jazzy Jalisco (May 2024, LTS to 2029) remains the practical default for mature package support and Humble Hawksbill still dominates deployed industrial fleets.
  - Kilted Kaiju made Eclipse Zenoh (rmw_zenoh_cpp) the first non-DDS middleware promoted to Tier 1, packaged with the binary releases; it uses a brokered zenohd router for discovery instead of DDS UDP multicast, making cloud-connected and multi-host graphs far easier to route over TCP/QUIC/TLS, though Fast DDS remains the shipped default RMW.
  - Kilted delivered concrete tooling gains: a Python events executor ported from rclcpp (up to ~10x lower callback latency, opt-in), CLI action introspection via ros2 action echo, multi-bag rosbag playback with a progress bar and a first-class recording action server, NV12 image support in common_interfaces, and a switch to Pixi/Conda for reproducible Windows installs.
  - The end of ROS 1 was a defining event: Noetic reached EOL on 31 May 2025, ending all security patches and pushing teams onto ros1_bridge incremental migration, per-node rewrites, or freeze-and-greenfield strategies; MCAP has become the recommended rosbag backend over SQLite3.
  - The 2026 stack has consolidated around ROS 2 plus Nav2, MoveIt 2, ros2_control, Gazebo Harmonic and NVIDIA Isaac Sim 5.0, increasingly topped by vision-language-action models (OpenVLA, pi0, GR00T N1) on humanoid platforms; ABI Research reported roughly 72% of commercial robots using ROS/ROS 2 in 2025.
  - Security remains the sharpest open challenge: default ROS 2 deployments still ship without authentication or encryption, SROS2/DDS-Security is complex to configure and carries known weaknesses (the 2022 Deng et al. V1–V3 findings, a 2025 demonstration of trojanised sros2 CLI supply-chain attacks exfiltrating keystore credentials), and real-world incidents such as Ghost Robotics Vision 60 CVE-2025-41108 (CVSS 9.2, disclosed October 2025) underline the exposure.
  - Functional-safety certification is still a frontier: ROS 2 itself is not safety-certified, so industrial integrators lean on separate SIL 3/PLe safety PLCs alongside standards such as ISO 10218, ISO/TS 15066 and IEC 62443, while the ROS-Industrial Conference 2025 flagged documentation quality, real-time performance and humanoid safety as persistent gaps.

- ### References
  - 1. Open Robotics (2025). ROS 2 Kilted Kaiju released. https://www.openrobotics.org/blog/2025/5/23/ros-2-kilted-kaiju-released
  - 2. ROS 2 Documentation (2025). Kilted Kaiju (codename 'kilted'; May, 2025) release notes. https://docs.ros.org/en/jazzy/Releases/Release-Kilted-Kaiju.html
  - 3. ROS 2 Documentation (2026). Different ROS 2 middleware vendors (Rolling). https://docs.ros.org/en/rolling/Concepts/Intermediate/About-Different-Middleware-Vendors.html
  - 4. iotdigitaltwinplm.com (2026). ROS 2 DDS vs Zenoh: Robotics Middleware Compared (2026). https://iotdigitaltwinplm.com/ros2-dds-vs-zenoh-robotics-middleware-comparison-2026/
  - 5. ROS-Industrial (2026). ROS 2 in Industry: Key Takeaways from the ROS-Industrial Conference 2025. https://rosindustrial.org/news/2026/2/17/ros-2-in-industry-key-takeaways-from-the-ros-industrial-conference-2025
  - 6. arXiv (2026). Cybersecurity of Teleoperated Quadruped Robots: A Systematic Review. https://arxiv.org/html/2602.23404v1

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
