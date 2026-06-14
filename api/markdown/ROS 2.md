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
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
      {"@id": "urn:ngm:class:robot-operating-system", "label": "Robot Operating System"},
      {"@id": "urn:ngm:class:data-distribution-service", "label": "Data Distribution Service"},
      {"@id": "urn:ngm:class:publish-subscribe-pattern", "label": "Publish-Subscribe Pattern"},
      {"@id": "urn:ngm:class:colcon", "label": "Colcon"},
      {"@id": "urn:ngm:class:unified-robot-description-format", "label": "Unified Robot Description Format"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"},
      {"@id": "urn:ngm:class:multi-robot-systems", "label": "Multi-Robot Systems"},
      {"@id": "urn:ngm:class:autonomous-navigation", "label": "Autonomous Navigation"},
      {"@id": "urn:ngm:class:real-time-control", "label": "Real-Time Control"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:nav2", "label": "Nav2"},
      {"@id": "urn:ngm:class:moveit-2", "label": "MoveIt 2"},
      {"@id": "urn:ngm:class:ros2-control", "label": "ros2_control"},
      {"@id": "urn:ngm:class:rviz2", "label": "RViz 2"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:dds-security", "label": "DDS-Security"},
      {"@id": "urn:ngm:class:quality-of-service", "label": "Quality Of Service"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:robotics-middleware", "label": "Robotics Middleware"},
      {"@id": "urn:ngm:class:hardware-abstraction-layer", "label": "Hardware Abstraction Layer"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:robot-simulation", "label": "Robot Simulation"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ros-1", "label": "ROS 1"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:real-time", "label": "Real Time"},
      {"@id": "urn:ngm:class:simulation-software", "label": "Simulation Software"},
      {"@id": "urn:ngm:class:gazebo-simulator", "label": "Gazebo Simulator"},
      {"@id": "urn:ngm:class:cyclone-dds", "label": "Cyclone DDS"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:middleware", "label": "Middleware"},
      {"@id": "urn:ngm:class:industrial-automation", "label": "IndustrialAutomation"},
      {"@id": "urn:ngm:class:autonomous-vehicles", "label": "Autonomous Vehicles"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:robot-operating-system-2", "label": "Robot Operating System 2"},
    {"@id": "urn:ngm:class:ros2", "label": "ROS2"}
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

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
