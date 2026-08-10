public:: true

# Industrial Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:42846248f184215f82ec192cdd6afc41fa2f60e8bfd95ca27d147c705ff9bd0a",
  "@type": "Page",
  "vc:slug": "industrial-robotics",
  "title": "Industrial Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:actuators",
      "vc:label": "Actuators"
    },
    {
      "@id": "urn:visionflow:linked:collaborative-robots",
      "vc:label": "Collaborative Robots"
    },
    {
      "@id": "urn:visionflow:linked:control-theory",
      "vc:label": "Control Theory"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:linked:https-ifr-org",
      "vc:label": "https://ifr.org/"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-industrial-robot",
      "vc:label": "https://en.wikipedia.org/wiki/Industrial_robot"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Industrial Robotics"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:industrial-robotics",
  "@type": "Class",
  "label": "Industrial Robotics",
  "definition": "Industrial robotics is the application of programmable, reprogrammable robots to manufacturing tasks including assembly, welding, material handling, painting and inspection, operating within structured production environments to improve consistency, throughput and safety.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robotics-application",
      "label": "Robotics Application"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:end-effector",
        "label": "End Effectors"
      },
      {
        "@id": "urn:ngm:class:robot-control",
        "label": "Robot Controllers"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:manufacturing-automation",
        "label": "Manufacturing Automation"
      },
      {
        "@id": "urn:ngm:class:cyber-physical-systems",
        "label": "Cyber Physical Systems"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:actuators",
        "label": "Actuators"
      },
      {
        "@id": "urn:ngm:class:sensors",
        "label": "Sensors"
      },
      {
        "@id": "urn:ngm:class:control-theory",
        "label": "Control Theory"
      },
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Motion Planning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-robot",
        "label": "Collaborative Robots"
      },
      {
        "@id": "urn:ngm:class:flexible-manufacturing",
        "label": "Flexible Manufacturing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:logic",
        "label": "Programmable Logic Controllers"
      },
      {
        "@id": "urn:ngm:class:communication-protocols",
        "label": "Industrial Communication Protocols"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:robot-operating-system",
        "label": "Robot Operating System"
      },
      {
        "@id": "urn:ngm:class:iso-10218",
        "label": "ISO 10218"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:digital-twin",
        "label": "Digital Twin"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:supply-chain-automation",
        "label": "Supply Chain Automation"
      },
      {
        "@id": "urn:ngm:class:quality-control",
        "label": "Quality Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:service-robotics",
        "label": "Service Robotics"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:industry-4-0",
        "label": "Industry 4.0"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:autonomous-mobile-robots",
        "label": "Autonomous Mobile Robots"
      },
      {
        "@id": "urn:ngm:class:human-robot-collaboration",
        "label": "Human-Robot Collaboration"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:industrial-robot-systems",
      "label": "Industrial Robot Systems"
    },
    {
      "@id": "urn:ngm:class:factory-automation-robotics",
      "label": "Factory Automation Robotics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:industrial-robotics:5e5a7c87db7c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:42846248f184215f82ec192cdd6afc41fa2f60e8bfd95ca27d147c705ff9bd0a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Actuators]]",
      "resolved": "urn:visionflow:linked:actuators",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collaborative Robots]]",
      "resolved": "urn:visionflow:linked:collaborative-robots",
      "kind": "StubLink"
    },
    {
      "raw": "[[Control Theory]]",
      "resolved": "urn:visionflow:linked:control-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://ifr.org/]]",
      "resolved": "urn:visionflow:linked:https-ifr-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Industrial_robot]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-industrial-robot",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Industrial robotics is the application of programmable robots to manufacturing tasks such as assembly, welding, handling and inspection.

- ### Semantic Classification
  - owl-class:: robotics:IndustrialRobotics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics]]
  - bridges-to:: [[Control Theory]]
  - requires:: [[Actuators]]
  - enables:: [[Collaborative Robots]]

- ### Content
  - Industrial robots are programmable machines used in manufacturing for repetitive, precise or hazardous tasks. Common configurations include articulated arms, SCARA and delta robots, selected according to reach and payload.
  - These robots operate within structured production environments and integrate with conveyors, sensors and control systems. They improve consistency and throughput in tasks such as welding, painting, assembly and material handling.

- ### Current Landscape (2026)
  - The IFR's World Robotics 2025 report (25 Sep 2025) recorded 542,076 industrial robots installed in 2024 and an operational stock of 4.66 million (+9% YoY), with global robot density rising to 177 units per 10,000 manufacturing workers; the IFR's January 2026 trends note put the annual market value of installations at an all-time high of US$16.7 billion.
  - China now dominates the sector, taking 54% of global installations (295,000 units in 2024) and surpassing 2 million operational units, and for the first time domestic Chinese suppliers outsold foreign vendors in their home market; the US operational stock (393,700) trails China roughly five to one.
  - ISO 10218-1:2025 and ISO 10218-2:2025 (published February 2025; EN versions effective 13 Feb 2026) replaced the 2011 editions, introducing cybersecurity requirements for the first time, Class I/Class II functional-safety classification, and absorbing the collaborative-robot content formerly in ISO/TS 15066.
  - Vision-language-action (VLA) "robot foundation models" moved from research into production cells: NVIDIA's open Isaac GR00T (N1 at GTC March 2025 through the Apache-2.0, commercially licensed N1.7 in April 2026, with GR00T N2 and Cosmos 3 previewed), Physical Intelligence's Pi0/Pi0.5 (Pi0 open-weighted July 2025), Google DeepMind's Gemini Robotics and its June 2025 On-Device variant, and Figure's Helix now compete to replace hand-coded teach-pendant programming with few-shot demonstration.
  - Consolidation reshaped the incumbents: ABB agreed to divest its Robotics & Discrete Automation division to SoftBank for US$5.375 billion (announced late 2025, closing early 2026), while ABB, FANUC, KUKA, Yaskawa and Universal Robots opened or planned US factories amid reshoring pressure.
  - Industrial humanoids scaled roughly tenfold in 2025 to around 16,000-20,000 units shipped (+508% YoY), with Chinese firms AgiBot and Unitree accounting for the vast majority; early paid deployments include Agility's Digit at a GXO warehouse (RaaS), UBTECH's Walker S2 on BYD and Foxconn lines, BMW-Figure at Spartanburg and Mercedes-Apptronik Apollo, and Apptronik raised US$520 million (Feb 2026) at a ~US$5 billion valuation.
  - Open challenges as of 2026 include a governance gap around AI-driven robots (ISO 10218-1:2025 and EU AI Act Articles 12-14 cover cybersecurity and logging but not AI model identity or confidence-based command gating), the sim-to-real generalisation gap for VLA policies, and geopolitical friction after the US banned imports of new Chinese humanoid robots on 28 July 2026 on national-security grounds.

- ### References
  - 1. International Federation of Robotics (2025). World Robotics 2025 report – Industrial Robots: global robot demand in factories doubles over 10 years. https://ifr.org/ifr-press-releases/news/global-robot-demand-in-factories-doubles-over-10-years
  - 2. International Federation of Robotics (2026). Top 5 Global Robotics Trends 2026. https://ifr.org/ifr-press-releases/news/top-5-global-robotics-trends-2026
  - 3. International Organization for Standardization (2025). ISO 10218-1:2025 — Robotics — Safety requirements — Part 1: Industrial robots. https://www.iso.org/standard/73933.html
  - 4. The Robot Report (2026). 2026 State of the Robotics Industry Report (outlook; ABB Robotics divestiture to SoftBank). https://www.therobotreport.com/wp-content/uploads/2026/01/TheRobotReport2026_outlook.pdf
  - 5. NVIDIA (2026). NVIDIA and Global Robotics Leaders Take Physical AI to the Real World (Isaac GR00T N1.7/N2, Cosmos 3). https://nvidianews.nvidia.com/news/nvidia-and-global-robotics-leaders-take-physical-ai-to-the-real-world
  - 6. IoT Digital Twin PLM (2026). Foundation Models for Industrial Robotics: State of Production (2026). https://iotdigitaltwinplm.com/foundation-models-industrial-robotics-state-2026/

- ### Provenance
  - sources:: [[https://ifr.org/]], [[https://en.wikipedia.org/wiki/Industrial_robot]]
  - migration-date:: 2026-05-29T00:00:00Z
