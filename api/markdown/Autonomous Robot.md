public:: true
alias:: AutonomousRobot

# Autonomous Robot
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cb5877d510d32a48a6f82d27ad0ac55811e4a4c6a8575bb75a2ba192660ac929",
  "@type": "Page",
  "vc:slug": "autonomous-robot",
  "title": "Autonomous Robot",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:actuators",
      "vc:label": "Actuators"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-identity",
      "vc:label": "BlockchainIdentity"
    },
    {
      "@id": "urn:visionflow:linked:dt-authenticated-by",
      "vc:label": "dt:authenticatedBy"
    },
    {
      "@id": "urn:visionflow:linked:dt-controlled-by",
      "vc:label": "dt:controlledBy"
    },
    {
      "@id": "urn:visionflow:linked:dt-coordinated-by",
      "vc:label": "dt:coordinatedBy"
    },
    {
      "@id": "urn:visionflow:linked:dt-navigates-using",
      "vc:label": "dt:navigatesUsing"
    },
    {
      "@id": "urn:visionflow:linked:dt-operates-in",
      "vc:label": "dt:operatesIn"
    },
    {
      "@id": "urn:visionflow:linked:has-sensor",
      "vc:label": "hasSensor"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-system",
      "vc:label": "MultiAgentSystem"
    },
    {
      "@id": "urn:visionflow:linked:navigates-in",
      "vc:label": "navigatesIn"
    },
    {
      "@id": "urn:visionflow:linked:obstacle-detection",
      "vc:label": "Obstacle Detection"
    },
    {
      "@id": "urn:visionflow:linked:performs-task",
      "vc:label": "performsTask"
    },
    {
      "@id": "urn:visionflow:linked:processing-units",
      "vc:label": "Processing Units"
    },
    {
      "@id": "urn:visionflow:linked:real-time-control",
      "vc:label": "Real-time Control"
    },
    {
      "@id": "urn:visionflow:linked:robot-perception",
      "vc:label": "RobotPerception"
    },
    {
      "@id": "urn:visionflow:linked:sensors",
      "vc:label": "Sensors"
    },
    {
      "@id": "urn:visionflow:linked:uses-controller",
      "vc:label": "usesController"
    },
    {
      "@id": "urn:visionflow:owl:class:aisystem",
      "vc:label": "AISystem"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-navigation",
      "vc:label": "Autonomous Navigation"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "ComputerVision"
    },
    {
      "@id": "urn:visionflow:owl:class:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:owl:class:mobile-robot",
      "vc:label": "MobileRobot"
    },
    {
      "@id": "urn:visionflow:owl:class:motion-planning",
      "vc:label": "Motion Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:obstacle-avoidance",
      "vc:label": "ObstacleAvoidance"
    },
    {
      "@id": "urn:visionflow:owl:class:path-planning",
      "vc:label": "PathPlanning"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:sensor-fusion",
      "vc:label": "SensorFusion"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-world",
      "vc:label": "VirtualWorld"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-3006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Autonomous Robot"
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
  "@id": "urn:ngm:class:autonomous-robot",
  "@type": "Class",
  "label": "Autonomous Robot",
  "definition": "A robotic system equipped with sensors, processing units, and actuators that operates independently to perform tasks without direct human control, using Artificial Intelligence and Autonomous Navigation to perceive, reason, and act in physical or virtual environments.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:robotic-system",
    "label": "Robotic System"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:sensors",
        "label": "Sensors"
      },
      {
        "@id": "urn:ngm:class:actuators",
        "label": "Actuators"
      },
      {
        "@id": "urn:ngm:class:obstacle-avoidance",
        "label": "Obstacle Avoidance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:robot-perception",
        "label": "Robot Perception"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-navigation",
        "label": "Autonomous Navigation"
      },
      {
        "@id": "urn:ngm:class:warehouse-automation",
        "label": "Warehouse Automation"
      },
      {
        "@id": "urn:ngm:class:autonomous-delivery",
        "label": "Autonomous Delivery"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:simultaneous-localisation-and-mapping",
        "label": "Simultaneous Localization and Mapping"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:ai-system",
        "label": "AI System"
      },
      {
        "@id": "urn:ngm:class:mobile-robot",
        "label": "Mobile Robot"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      },
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:teleoperated-robot",
        "label": "Teleoperated Robot"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      },
      {
        "@id": "urn:ngm:class:blockchain-identity",
        "label": "Blockchain Identity"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:robot-learning",
        "label": "Robot Learning"
      },
      {
        "@id": "urn:ngm:class:swarm-robotics",
        "label": "Swarm Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:autonomous-robotic-system",
      "label": "Autonomous Robotic System"
    },
    {
      "@id": "urn:ngm:class:self-navigating-robot",
      "label": "Self-Navigating Robot"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:autonomous-robot:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cb5877d510d32a48a6f82d27ad0ac55811e4a4c6a8575bb75a2ba192660ac929"
  },
  "vc:resolutions": [
    {
      "raw": "[[Actuators]]",
      "resolved": "urn:visionflow:linked:actuators",
      "kind": "StubLink"
    },
    {
      "raw": "[[BlockchainIdentity]]",
      "resolved": "urn:visionflow:linked:blockchain-identity",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:authenticatedBy]]",
      "resolved": "urn:visionflow:linked:dt-authenticated-by",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:controlledBy]]",
      "resolved": "urn:visionflow:linked:dt-controlled-by",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:coordinatedBy]]",
      "resolved": "urn:visionflow:linked:dt-coordinated-by",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:navigatesUsing]]",
      "resolved": "urn:visionflow:linked:dt-navigates-using",
      "kind": "StubLink"
    },
    {
      "raw": "[[dt:operatesIn]]",
      "resolved": "urn:visionflow:linked:dt-operates-in",
      "kind": "StubLink"
    },
    {
      "raw": "[[hasSensor]]",
      "resolved": "urn:visionflow:linked:has-sensor",
      "kind": "StubLink"
    },
    {
      "raw": "[[MultiAgentSystem]]",
      "resolved": "urn:visionflow:linked:multi-agent-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[navigatesIn]]",
      "resolved": "urn:visionflow:linked:navigates-in",
      "kind": "StubLink"
    },
    {
      "raw": "[[Obstacle Detection]]",
      "resolved": "urn:visionflow:linked:obstacle-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[performsTask]]",
      "resolved": "urn:visionflow:linked:performs-task",
      "kind": "StubLink"
    },
    {
      "raw": "[[Processing Units]]",
      "resolved": "urn:visionflow:linked:processing-units",
      "kind": "StubLink"
    },
    {
      "raw": "[[Real-time Control]]",
      "resolved": "urn:visionflow:linked:real-time-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[RobotPerception]]",
      "resolved": "urn:visionflow:linked:robot-perception",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensors]]",
      "resolved": "urn:visionflow:linked:sensors",
      "kind": "StubLink"
    },
    {
      "raw": "[[usesController]]",
      "resolved": "urn:visionflow:linked:uses-controller",
      "kind": "StubLink"
    },
    {
      "raw": "[[AISystem]]",
      "resolved": "urn:visionflow:owl:class:aisystem",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Navigation]]",
      "resolved": "urn:visionflow:owl:class:autonomous-navigation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComputerVision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:owl:class:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MobileRobot]]",
      "resolved": "urn:visionflow:owl:class:mobile-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Motion Planning]]",
      "resolved": "urn:visionflow:owl:class:motion-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ObstacleAvoidance]]",
      "resolved": "urn:visionflow:owl:class:obstacle-avoidance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[PathPlanning]]",
      "resolved": "urn:visionflow:owl:class:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SensorFusion]]",
      "resolved": "urn:visionflow:owl:class:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualWorld]]",
      "resolved": "urn:visionflow:owl:class:virtual-world",
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
  - A robotic system equipped with sensors, processing units, and actuators that operates independently to perform tasks without direct human control, using [[Artificial Intelligence]] and [[Autonomous Navigation]]. These systems integrate [[Computer Vision]], [[Motion Planning]], and [[Obstacle Detection]] to interact safely with physical environments.

- ### Semantic Classification
  - owl-class:: robotics:AutonomousRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - requires:: [[Sensor Fusion]]
  - requires:: [[Computer Vision]]
  - uses:: [[Motion Planning]]
  - uses:: [[Reinforcement Learning]]
  - relatedTo:: [[Multi-Agent Systems]]
  - relatedTo:: [[Robot Learning]]
  - bridges-to:: [[Deep Learning]] (domain: ai→robotics, type: implementation)

- ### Content
  - A physical or virtual agent equipped with [[Sensors]], [[Actuators]], and [[Processing Units]] that operates independently to accomplish objectives without continuous human direction. Autonomous robots utilise [[Computer Vision]], [[Motion Planning]], and [[Real-time Control]] systems to perceive their environment and execute coordinated physical or digital actions safely.

- ### Current Landscape (2026)
  - Vision-Language-Action (VLA) models have become the dominant control paradigm for autonomous robots, crossing from research artefact to production infrastructure: NVIDIA's open GR00T foundation-model line advanced from N1 (GTC, March 2025) through N1.5 (May 2025) and N1.6 (CES, January 2026) to N1.7 Early Access (17 April 2026, a 3B-parameter model on a Cosmos-Reason2 backbone with a 32-layer diffusion-transformer action head).
  - Competing generalist policies matured in parallel — Physical Intelligence shipped π0 (October 2024), π0.5 (April 2025) and π0.7 (16 April 2026); Google DeepMind released Gemini Robotics and Gemini Robotics-ER (12 March 2025), then Gemini Robotics 1.5 and ER 1.6 (April 2026); and Figure AI's Helix (February 2025) was the first VLA to drive full humanoid upper-body control and two cooperating robots.
  - The economics of embodied AI have inverted: teleoperation data-collection costs fell from roughly USD 340/hour in 2024 to about USD 118/hour by March 2026, and fine-tuning a base VLA on 200–500 demonstrations now typically beats task-specific policies trained from scratch on 1,000+, making enterprise pilots financially viable for the first time.
  - Humanoids moved from lab demos toward commercial platforms: Boston Dynamics announced mass production of the all-electric Atlas at CES (January 2026), twelve commercial humanoid platforms became available to buy or lease in 2026, and Japan Airlines began a Haneda Airport trial with Unitree-based humanoids (~USD 15,400/unit) in May 2026 for baggage and cabin work.
  - Open-weight tooling proliferated — OpenVLA (7B, ~970k demonstrations), RDT-1B, and Unitree's UnifoLM-VLA-0 (built on Qwen2.5-VL-7B, open-sourced March 2026 as a G1 baseline) — while quantised VLAs now run at 10–25 Hz on consumer GPUs, enabling real-time manipulation loops.
  - In the industrial autonomous mobile robot (AMR) segment, market estimates cluster around USD 4.5–5.2 billion for 2025–2026 at a ~15–16% CAGR, led by warehouse and logistics; key players include Geek+, Locus Robotics, MiR/Zebra (Fetch), Symbotic, Seegrid, ABB and Hai Robotics, with ABB adding 3D Visual SLAM and its AMR Studio platform in June 2025.
  - Safety and regulatory frameworks tightened: ISO 10218-1/-2:2025 updated industrial-robot power-and-force-limiting thresholds, ISO 3691-4:2023 and ANSI/RIA R15.08 (Part 2, 2023) anchor AMR safety, the EU AI Act (Regulation (EU) 2024/1689) reaches a key high-risk operational milestone in August 2026, and the EU Machinery Regulation (EU) 2023/1230 applies from 20 January 2027.
  - Open challenges as of 2026 include the lack of standardised fleet-communication protocols (forcing single-vendor lock-in), sim-to-real transfer and long-horizon reliability, explainable/verifiable perception for high-risk certification, and a patchwork of sidewalk-delivery regulation even as deployments scale (Starship Technologies passed 8 million cumulative autonomous deliveries by April 2025).

- ### References
  - 1. Robotics Center (2026). State of Robotics 2026 Report: $38B Market, 12 Humanoids, VLA. https://www.roboticscenter.ai/state-of-robotics-2026
  - 2. MarkTechPost (2026). Top 10 Physical AI Models Powering Real-World Robots in 2026. https://www.marktechpost.com/2026/04/28/top-10-physical-ai-models-powering-real-world-robots-in-2026/
  - 3. Backpropagation.ai (2026). The State of Robotics in 2026: A Citation-Grounded Survey. https://backpropagation.ai/posts/robotics-research-companies-icml-iclr-neurips-2024-2026/
  - 4. KraneShares (2026). Humanoid Robotics in 2026: The Race From Pilot To Platform. https://kraneshares.eu/humanoid-robotics-in-2026-the-race-from-pilot-to-platform/
  - 5. Mordor Intelligence (2026). Autonomous Mobile Robot Market Size & Share Analysis. https://www.mordorintelligence.com/industry-reports/autonomous-mobile-robot-market
  - 6. Bjorck et al. / NVIDIA (2025). GR00T N1: An Open Foundation Model for Generalist Humanoid Robots. https://arxiv.org/abs/2503.14734

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
