public:: true
alias:: AutonomousNavigation

# Autonomous Navigation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2207aa41242e30089f50cfb69d8f406c2a3fe36f5f9d3ad05bf693c7a41ee52d",
  "@type": "Page",
  "vc:slug": "autonomous-navigation",
  "title": "Autonomous Navigation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:localisation",
      "vc:label": "Localisation"
    },
    {
      "@id": "urn:visionflow:owl:class:autonomous-robot",
      "vc:label": "Autonomous Robot"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:owl:class:slam",
      "vc:label": "SLAM"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0355"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Autonomous Navigation"
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
  "@id": "urn:ngm:class:autonomous-navigation",
  "@type": "Class",
  "label": "Autonomous Navigation",
  "definition": "Autonomous Navigation encompasses the complete system capability for a robot or autonomous agent to move from one location to another without human guidance, integrating perception, localisation, mapping, path planning, obstacle avoidance, and control. Autonomous navigation systems employ SLAM, sensor fusion, and AI-based decision-making to operate safely in unknown or dynamic environments.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:autonomous-agent",
    "label": "Autonomous Agent"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:localisation",
        "label": "Localisation"
      },
      {
        "@id": "urn:ngm:class:obstacle-avoidance",
        "label": "Obstacle Avoidance"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:mobile-robotics",
        "label": "Mobile Robotics"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:slam",
        "label": "SLAM"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:odometry",
        "label": "Odometry"
      },
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:lidar",
        "label": "Lidar"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:autonomous-robot",
        "label": "Autonomous Robot"
      },
      {
        "@id": "urn:ngm:class:autonomous-vehicle",
        "label": "Autonomous Vehicle"
      },
      {
        "@id": "urn:ngm:class:unmanned-aerial-vehicle",
        "label": "Unmanned Aerial Vehicle"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:real-time-computing",
        "label": "Real-Time Computing"
      },
      {
        "@id": "urn:ngm:class:coordinate-frame",
        "label": "Coordinate Frame"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:a-star-algorithm",
        "label": "A* Algorithm"
      },
      {
        "@id": "urn:ngm:class:pid-controller",
        "label": "Pid Controller"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:search-and-rescue-robotics",
        "label": "Search and Rescue Robotics"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kalman-filter",
        "label": "Kalman Filter"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:robot-navigation",
      "label": "Robot Navigation"
    },
    {
      "@id": "urn:ngm:class:autonomous-mobility",
      "label": "Autonomous Mobility"
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
  "@id": "urn:visionflow:annotation:link-resolutions:autonomous-navigation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2207aa41242e30089f50cfb69d8f406c2a3fe36f5f9d3ad05bf693c7a41ee52d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Localisation]]",
      "resolved": "urn:visionflow:linked:localisation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Autonomous Robot]]",
      "resolved": "urn:visionflow:owl:class:autonomous-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Path Planning]]",
      "resolved": "urn:visionflow:owl:class:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SLAM]]",
      "resolved": "urn:visionflow:owl:class:slam",
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
  - Autonomous Navigation encompasses the complete system capability for a robot or autonomous agent to move from one location to another without human guidance, integrating perception, localisation, mapping, path planning, obstacle avoidance, and control. Autonomous navigation systems employ SLAM, sensor fusion, and AI-based decision-making to operate in unknown or dynamic environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:AutonomousNavigation
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[Autonomous Robot]] (rb)
  - requires:: [[SLAM]]
  - requires:: [[Sensor Fusion]]
  - requires:: [[Odometry]]
  - requires:: [[Perception]]
  - uses:: [[Path Planning]]
  - uses:: [[Motion Planning]]
  - uses:: [[Reinforcement Learning]]
  - uses:: [[Computer Vision]]
  - uses:: [[LiDAR]]
  - enables:: [[Autonomous Robot]]
  - enables:: [[Autonomous Vehicle]]
  - enables:: [[Unmanned Aerial Vehicle]]
  - enables:: [[Delivery Robot]]
  - hasPart:: [[Localisation]]
  - hasPart:: [[Obstacle Avoidance]]
  - partOf:: [[Mobile Robotics]]
  - dependsOn:: [[Real-Time Computing]]
  - dependsOn:: [[Coordinate Frame]]
  - implements:: [[A* Algorithm]]
  - implements:: [[PID Controller]]
  - supports:: [[Human Robot Interaction]]
  - supports:: [[Search and Rescue Robotics]]
  - contrastsWith:: [[Teleoperation]]
  - bridgesTo:: [[Spatial Computing]]
  - bridgesTo:: [[Digital Twin]]
  - relatedTo:: [[Kalman Filter]]

- ### Content
  - Autonomous Navigation encompasses the complete system capability for a robot or autonomous agent to move from one location to another without human guidance, integrating perception, localisation, mapping, path planning, obstacle avoidance, and control. Autonomous navigation systems employ SLAM, sensor fusion, and AI-based decision-making to operate in unknown or dynamic environments.

				- ## Seamless Navigation
					- Users can easily move between different metaverse instances while maintaining their identity and preferences.

  - # Recent Developments (2024-2025)
  - The period between late 2024 and early 2025 has marked a significant turning point for AI, with a shift from passive assistants to proactive, autonomous agents. This has been driven by advancements in LLMs and increased enterprise adoption.

  - # What's already happening
  - {{renderer :linkpreview,https://www.theguardian.com/world/2024/apr/03/israel-gaza-ai-database-hamas-airstrikes}}
  - [Autonomous F-16 Fighters Are ‘Roughly Even’ With Human Pilots Said Air Force Chief | The National Interest](https://nationalinterest.org/blog/buzz/autonomous-f-16-fighters-are-%E2%80%98roughly-even%E2%80%99-human-pilots-said-air-force-chief-210974)

				- ## Seamless Navigation
					- Users can easily move between different metaverse instances while maintaining their identity and preferences.

  - # Recent Developments (2024-2025)
  - The period between late 2024 and early 2025 has marked a significant turning point for AI, with a shift from passive assistants to proactive, autonomous agents. This has been driven by advancements in LLMs and increased enterprise adoption.

  - # What's already happening
  - {{renderer :linkpreview,https://www.theguardian.com/world/2024/apr/03/israel-gaza-ai-database-hamas-airstrikes}}
  - [Autonomous F-16 Fighters Are ‘Roughly Even’ With Human Pilots Said Air Force Chief | The National Interest](https://nationalinterest.org/blog/buzz/autonomous-f-16-fighters-are-%E2%80%98roughly-even%E2%80%99-human-pilots-said-air-force-chief-210974)

  - # Recent Developments (2024-2025)
  - The period between late 2024 and early 2025 has marked a significant turning point for AI, with a shift from passive assistants to proactive, autonomous agents. This has been driven by advancements in LLMs and increased enterprise adoption.

  - # What's already happening
  - {{renderer :linkpreview,https://www.theguardian.com/world/2024/apr/03/israel-gaza-ai-database-hamas-airstrikes}}
  - [Autonomous F-16 Fighters Are ‘Roughly Even’ With Human Pilots Said Air Force Chief | The National Interest](https://nationalinterest.org/blog/buzz/autonomous-f-16-fighters-are-%E2%80%98roughly-even%E2%80%99-human-pilots-said-air-force-chief-210974)

  - ### Biomedical:
			- Open-Source Collaboration

  - # Approaches to AI scaffolding

  - # Decentralisation & The Web

		- ### Resource Management and Financial Autonomy:

  - #### Concluding Insights
  - The integration of AI into education is not just about adopting new technology; it's about reimagining the learning process. As AI continues to evolve, it will challenge traditional educational paradigms, offering opportunities for more personalised, engaging, and effective teaching and learning experiences. However, this journey necessitates careful navigation, balancing the innovative potential of AI with the timeless values of human interaction and ethical responsibility. The future of education with AI looks promising, but it requires a thoughtful, adaptive approach that prioritises the enrichment of the human element in learning.

  - #### Concluding Insights
  - The integration of AI into education is not just about adopting new technology; it's about reimagining the learning process. As AI continues to evolve, it will challenge traditional educational paradigms, offering opportunities for more personalised, engaging, and effective teaching and learning experiences. However, this journey necessitates careful navigation, balancing the innovative potential of AI with the timeless values of human interaction and ethical responsibility. The future of education with AI looks promising, but it requires a thoughtful, adaptive approach that prioritises the enrichment of the human element in learning.

  ## Core Characteristics

  - **Simultaneous Localisation and Mapping (SLAM)**: Real-time mapping and localisation
  - **Global and Local Planning**: Multi-scale path planning
  - **Dynamic Obstacle Avoidance**: Real-time collision avoidance
  - **Goal-Directed Behaviour**: Navigation to specified destinations
  - **Adaptive Behaviour**: Response to environmental changes

  ## Relationships

  - **Integrates**: Perception, Localisation, Path Planning, Control
  - **Related**: SLAM, Path Planning, Mobile Robotics
  - **Used In**: Autonomous Vehicle, Mobile Robot, Drone

  ## Key Literature

  1. Thrun, S., Burgard, W., & Fox, D. (2005). *Probabilistic Robotics*. MIT Press.

  2. Siegwart, R., Nourbakhsh, I. R., & Scaramuzza, D. (2011). *Introduction to Autonomous Mobile Robots*. MIT Press.

  ## See Also

  - [[Path Planning]]
  - [[SLAM]]
  - [[Localisation]]

  ## Core Characteristics

  - **Simultaneous Localisation and Mapping (SLAM)**: Real-time mapping and localisation
  - **Global and Local Planning**: Multi-scale path planning
  - **Dynamic Obstacle Avoidance**: Real-time collision avoidance
  - **Goal-Directed Behaviour**: Navigation to specified destinations
  - **Adaptive Behaviour**: Response to environmental changes

  ## Relationships

  - **Integrates**: Perception, Localisation, Path Planning, Control
  - **Related**: SLAM, Path Planning, Mobile Robotics
  - **Used In**: Autonomous Vehicle, Mobile Robot, Drone

  ## Key Literature

  1. Thrun, S., Burgard, W., & Fox, D. (2005). *Probabilistic Robotics*. MIT Press.

  2. Siegwart, R., Nourbakhsh, I. R., & Scaramuzza, D. (2011). *Introduction to Autonomous Mobile Robots*. MIT Press.

  ## See Also

  - [[Path Planning]]
  - [[SLAM]]
  - [[Localisation]]

- ### Current Landscape (2026)
  - The field has pivoted from purely geometric SLAM toward AI-native, semantic navigation: 2025-2026 work fuses vision foundation models with mapping, e.g. DINO-VO (2025) using DINOv2 features for robust monocular visual odometry, and Gaussian-splatting SLAM systems such as OpenGS-SLAM (2025) and FeatureSLAM (2026) that build open-vocabulary semantic maps.
  - Vision-Language-Action (VLA) generalist models moved into navigation pipelines in 2026 — surveyed comprehensively in the April 2026 "Foundation Models in Robotics" review (arXiv:2604.15395), covering models like UniVLA (8.5B params) — enabling instruction-following, long-horizon planning rather than task-specific policies.
  - NVIDIA shipped a unified 3D perception stack for robots in 2025: cuVSLAM (now with a PyCuVSLAM Python API), the zero-shot FoundationStereo depth model (CVPR 2025 best-paper nominee), and the nvblox GPU reconstruction library, lowering the barrier to onboard real-time localisation and mapping.
  - Waymo became the first robotaxi service at genuine commercial scale: by mid-2026 roughly 3,500-3,871 vehicles, ~500,000 paid rides and ~4M autonomous miles per week, and over 200M cumulative driverless miles; it raised a $16B round at a $126B valuation in February 2026.
  - Rapid geographic expansion through 2025-2026 took Waymo to 11 US metros, added freeway rides (introduced November 2025, paused May-July 2026 over construction-zone handling, restored from 29 July 2026), and set first international launches in London (targeted September 2026) and Tokyo.
  - Regulation and safety scrutiny intensified: NHTSA opened investigations into Waymo behaviour, issued recall 26E035 tied to freeway construction zones, and set a 31 July 2026 deadline for AV operators to submit first-responder remediation plans; each new US market still needs separate state DMV and CPUC-style approvals.
  - VLA-SLAM patenting accelerated in 2024-2026 (e.g. Hefei Keda's 2026 filings integrating VLA models into loop closure, keyframe selection and hierarchical situational maps), signalling a shift from geometry-first to task-semantics-first navigation.
  - Open challenges as of 2026 remain robustness under adverse conditions (low light, fog, motion blur, dynamic obstacles), efficient deployment of large models on embedded/edge compute, GNSS-denied long-range relocalisation, and closing the gap between benchmark performance and safety-critical real-world generalisation.

- ### References
  - 1. arXiv (Ravichandran et al.) (2026). Foundation Models in Robotics: A Comprehensive Review of Navigation, Manipulation and Perception. https://arxiv.org/abs/2604.15395
  - 2. Edge AI and Vision Alliance / NVIDIA Research (2025). R²D²: Building AI-based 3D Robot Perception and Mapping (cuVSLAM, FoundationStereo, nvblox). https://www.edge-ai-vision.com/2025/06/r%C2%B2d%C2%B2-building-ai-based-3d-robot-perception-and-mapping-with-nvidia-research/
  - 3. PatSnap Eureka (2026). Robot SLAM Technology Landscape 2026. https://www.patsnap.com/resources/blog/rd-blog/robot-slam-technology-landscape-2026-patsnap-eureka/
  - 4. The Charge Port (2026). Robotaxi Status Tracker — Waymo, Tesla & Zoox (July 2026). https://thechargeport.com/robotaxi-tracker
  - 5. Electrek (2026). Waymo goes driverless in Las Vegas, with Denver, San Diego, Tampa next. https://electrek.co/2026/07/08/waymo-driverless-las-vegas-four-new-cities/
  - 6. Wikipedia (2026). Waymo. https://en.wikipedia.org/wiki/Waymo

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
