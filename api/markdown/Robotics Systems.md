public:: true

# Robotics Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:97d0ffe55f09899e6e5ff51679e983c8fb91cce15d65ed4f20a580416a7c2c3f",
  "@type": "Page",
  "vc:slug": "robotics-systems",
  "title": "Robotics Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:collaborative-robot",
      "vc:label": "Collaborative Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:human-robot-interaction",
      "vc:label": "HumanRobotInteraction"
    },
    {
      "@id": "urn:visionflow:owl:class:humanoid-robot",
      "vc:label": "Humanoid Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:manipulator",
      "vc:label": "Manipulator"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-technology",
      "vc:label": "Metaverse Technology"
    },
    {
      "@id": "urn:visionflow:owl:class:mobile-robot",
      "vc:label": "Mobile Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-planning",
      "vc:label": "Motion Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:robot-control",
      "vc:label": "Robot Control"
    },
    {
      "@id": "urn:visionflow:owl:class:robot-kinematics",
      "vc:label": "Robot Kinematics"
    },
    {
      "@id": "urn:visionflow:owl:class:robot-sensor",
      "vc:label": "Robot Sensor"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-systems",
      "vc:label": "Robotics Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:swarm-robotics",
      "vc:label": "SwarmRobotics"
    },
    {
      "@id": "urn:visionflow:owl:class:technology-domain",
      "vc:label": "Technology Domain"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-4001"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Robotics Systems"
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
  "@id": "urn:ngm:class:robotics-systems",
  "@type": "Class",
  "label": "Robotics Systems",
  "definition": "The foundational technology domain encompassing autonomous and semi-autonomous mechanical systems, including manipulators, mobile robots, humanoids, and collaborative robots (cobots), along with their control systems, sensors, actuators, kinematics, and the integration of perception, planning, and action for physical world interaction.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    },
    {
      "@id": "urn:ngm:class:technology-domain",
      "label": "Technology Domain"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:manipulator", "label": "Manipulator"},
      {"@id": "urn:ngm:class:mobile-robot", "label": "Mobile Robot"},
      {"@id": "urn:ngm:class:humanoid-robot", "label": "Humanoid Robot"},
      {"@id": "urn:ngm:class:collaborative-robot", "label": "Collaborative Robot"},
      {"@id": "urn:ngm:class:robot-control", "label": "Robot Control"},
      {"@id": "urn:ngm:class:robot-sensor", "label": "Robot Sensor"},
      {"@id": "urn:ngm:class:swarm-robotics", "label": "Swarm Robotics"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:robot-kinematics", "label": "Robot Kinematics"},
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:actuator", "label": "Actuator"},
      {"@id": "urn:ngm:class:robo-perception", "label": "Perception and Sensing"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:robotics-systems:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:97d0ffe55f09899e6e5ff51679e983c8fb91cce15d65ed4f20a580416a7c2c3f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collaborative Robot]]",
      "resolved": "urn:visionflow:owl:class:collaborative-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[HumanRobotInteraction]]",
      "resolved": "urn:visionflow:owl:class:human-robot-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Humanoid Robot]]",
      "resolved": "urn:visionflow:owl:class:humanoid-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Manipulator]]",
      "resolved": "urn:visionflow:owl:class:manipulator",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Metaverse Technology]]",
      "resolved": "urn:visionflow:owl:class:metaverse-technology",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Mobile Robot]]",
      "resolved": "urn:visionflow:owl:class:mobile-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Planning]]",
      "resolved": "urn:visionflow:owl:class:motion-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Control]]",
      "resolved": "urn:visionflow:owl:class:robot-control",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Kinematics]]",
      "resolved": "urn:visionflow:owl:class:robot-kinematics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robot Sensor]]",
      "resolved": "urn:visionflow:owl:class:robot-sensor",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics Systems]]",
      "resolved": "urn:visionflow:owl:class:robotics-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SwarmRobotics]]",
      "resolved": "urn:visionflow:owl:class:swarm-robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technology Domain]]",
      "resolved": "urn:visionflow:owl:class:technology-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - The foundational technology domain encompassing autonomous and semi-autonomous mechanical systems, including manipulators, mobile robots, humanoids, and collaborative robots (cobots), along with their control systems, sensors, actuators, kinematics, and the integration of perception, planning, and action for physical world interaction.

- ### Semantic Classification
  - owl-class:: robotics:RoboticsSystems
  - owl-role:: Domain
  - belongs-to-domain:: [[Robotics Systems]]

- ### Relationships
  - is-subclass-of:: [[Technology Domain]]
  - bridges-to:: [[Artificial Intelligence]] (via robot learning and perception)

- ### Content

  - #### Inverse Relationships (Inferred by Reasoner)
		    - Manipulator is-subclass-of Robotics Systems
		    - Mobile Robot is-subclass-of Robotics Systems
		    - Humanoid Robot is-subclass-of Robotics Systems
		    - Collaborative Robot is-subclass-of Robotics Systems
		    - Robot Control is-subclass-of Robotics Systems
		    - Robot Sensor is-subclass-of Robotics Systems
		    - Robot Kinematics is-subclass-of Robotics Systems
		    - Motion Planning is-subclass-of Robotics Systems
		    - HumanRobotInteraction is-subclass-of Robotics Systems
		- bridges-to:: [[Artificial Intelligence]] (via robot learning and perception)
		- bridges-to:: [[Metaverse Technology]] (via digital twins and teleoperation)
		- bridges-to:: [[Telecollaboration]] (via telepresence robots)
  - ## Overview
  - The Robotics Systems domain provides the complete ontological framework for understanding robotic technologies, from fundamental kinematic principles to advanced autonomous systems. This domain encompasses mechanical design, control theory, sensor integration, motion planning, and human-robot interaction across industrial, service, medical, and research applications.
  - ## Key Subcategories
  - [[Manipulator]] - Robotic arms and end effectors
  - [[Mobile Robot]] - Ground, aerial, and underwater platforms
  - [[Humanoid Robot]] - Human-form robots and bipedal locomotion
  - [[Collaborative Robot]] - Cobots for human-robot collaboration
  - [[Robot Control]] - Control systems, feedback loops, and stability
  - [[Robot Sensor]] - Perception systems including vision, LIDAR, tactile sensing
  - [[Robot Kinematics]] - Forward/inverse kinematics and dynamics
  - [[Motion Planning]] - Path planning, trajectory optimisation, collision avoidance
  - [[HumanRobotInteraction]] - Safety, collaboration, and communication interfaces
  - [[SwarmRobotics]] - Multi-robot coordination and collective behaviour
  - ## Cross-Domain Integration
  - **AI Integration**: Robot learning, computer vision, autonomous navigation
  - **Metaverse Integration**: Digital twins, virtual commissioning, teleoperation
  - **Telecollaboration Integration**: Telepresence robots, remote manipulation
  - **Blockchain Integration**: Secure robot coordination, supply chain verification
  - ## Standards and Safety
  - Key standards include ISO 10218 (industrial robots), ISO/TS 15066 (collaborative robots), ISO 13482 (personal care robots), and IEC 62443 (cybersecurity).

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
