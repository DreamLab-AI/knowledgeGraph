public:: true

# Human-Robot Collaboration
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:14737f64c9b7a3e32641e77319bcdb4de7c0353031a8a1b39df5e467857a16ac",
  "@type": "Page",
  "vc:slug": "human-robot-collaboration",
  "title": "Human-Robot Collaboration",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:human-robot-interaction",
      "vc:label": "Human Robot Interaction"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:collaborative-robot",
      "vc:label": "Collaborative Robot"
    },
    {
      "@id": "urn:visionflow:linked:assistive-robotics",
      "vc:label": "Assistive Robotics"
    },
    {
      "@id": "urn:visionflow:linked:exoskeleton",
      "vc:label": "Exoskeleton"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Human-Robot Collaboration"
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
  "@id": "urn:ngm:class:human-robot-collaboration",
  "@type": "Class",
  "label": "Human-Robot Collaboration",
  "definition": "Human-robot collaboration is the design and operation of robots that work alongside people in a shared workspace, coordinating tasks safely through sensing, control and interaction.",
  "domain": "robotics",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:robotics",
    "label": "Robotics"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:human-robot-interaction",
        "label": "Human Robot Interaction"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      },
      {
        "@id": "urn:ngm:class:collision-avoidance",
        "label": "Collision Avoidance"
      },
      {
        "@id": "urn:ngm:class:robot-perception",
        "label": "Robot Perception"
      },
      {
        "@id": "urn:ngm:class:safety-monitoring",
        "label": "Safety Monitoring"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-robot",
        "label": "Collaborative Robot"
      },
      {
        "@id": "urn:ngm:class:assistive-robotics",
        "label": "Assistive Robotics"
      },
      {
        "@id": "urn:ngm:class:flexible-manufacturing",
        "label": "Flexible Manufacturing"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:intent-recognition",
        "label": "Intent Recognition"
      },
      {
        "@id": "urn:ngm:class:force-torque-control",
        "label": "Force Torque Control"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:computer-vision",
        "label": "Computer Vision"
      },
      {
        "@id": "urn:ngm:class:exoskeleton",
        "label": "Exoskeleton"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:motion-planning",
        "label": "Robot Motion Planning"
      },
      {
        "@id": "urn:ngm:class:real-time-control",
        "label": "Real-Time Control Systems"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:iso-ts-15066",
        "label": "ISO TS 15066"
      },
      {
        "@id": "urn:ngm:class:iso-10218",
        "label": "ISO 10218"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:industrial-automation",
        "label": "IndustrialAutomation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human Computer Interaction"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:teleoperation",
        "label": "Teleoperation"
      },
      {
        "@id": "urn:ngm:class:human-factors",
        "label": "Human Factors Engineering"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:human-robot-teamwork",
      "label": "Human-Robot Teamwork"
    },
    {
      "@id": "urn:ngm:class:cobotics",
      "label": "Cobotics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:human-robot-collaboration:57529096697d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:14737f64c9b7a3e32641e77319bcdb4de7c0353031a8a1b39df5e467857a16ac"
  },
  "vc:resolutions": [
    {
      "raw": "[[Human Robot Interaction]]",
      "resolved": "urn:visionflow:linked:human-robot-interaction",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collaborative Robot]]",
      "resolved": "urn:visionflow:linked:collaborative-robot",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Assistive Robotics]]",
      "resolved": "urn:visionflow:linked:assistive-robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Exoskeleton]]",
      "resolved": "urn:visionflow:linked:exoskeleton",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
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
  - Human-robot collaboration is the design and operation of robots that work alongside people in a shared workspace, coordinating tasks safely through sensing, control and interaction.

- ### Semantic Classification
  - owl-class:: robotics:HumanRobotCollaboration
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Exoskeleton]]
  - requires:: [[Human Robot Interaction]], [[Sensor Fusion]]
  - enables:: [[Collaborative Robot]], [[Assistive Robotics]]

- ### Content
  - Human-robot collaboration covers settings where humans and robots share space and tasks rather than being separated by barriers, requiring reliable perception, compliant control and predictable behaviour to ensure safety. Force limiting, speed monitoring and intent recognition allow close cooperation.
  - Collaborative robots, assistive systems and exoskeletons are concrete forms of this collaboration across manufacturing, healthcare and logistics. Effective interaction depends on the robot interpreting human actions and signalling its own intentions clearly.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
