public:: true

# Autonomous Systems Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a18c3ea8ff9b32e576781f63f4eae438e7c1a24eefbc4881b2c86d60cd2c9fff",
  "@type": "Page",
  "vc:slug": "autonomous-systems-domain",
  "title": "Autonomous Systems Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:perception",
      "vc:label": "Perception"
    },
    {
      "@id": "urn:visionflow:linked:path-planning",
      "vc:label": "Path Planning"
    },
    {
      "@id": "urn:visionflow:linked:decision-making",
      "vc:label": "Decision Making"
    },
    {
      "@id": "urn:visionflow:linked:safety-assurance",
      "vc:label": "Safety Assurance"
    },
    {
      "@id": "urn:visionflow:linked:sensor-fusion",
      "vc:label": "Sensor Fusion"
    },
    {
      "@id": "urn:visionflow:linked:control-systems-domain",
      "vc:label": "Control Systems Domain"
    },
    {
      "@id": "urn:visionflow:linked:artificial-intelligence-domain",
      "vc:label": "Artificial Intelligence Domain"
    },
    {
      "@id": "urn:visionflow:linked:self-driving-operation",
      "vc:label": "Self-Driving Operation"
    },
    {
      "@id": "urn:visionflow:linked:unmanned-missions",
      "vc:label": "Unmanned Missions"
    },
    {
      "@id": "urn:visionflow:linked:robotics-domain",
      "vc:label": "Robotics Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-26262",
      "vc:label": "ISO 26262"
    },
    {
      "@id": "urn:visionflow:linked:sae-j-3016",
      "vc:label": "SAE J3016"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Autonomous Systems Domain"
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
  "@id": "urn:ngm:class:autonomous-systems-domain",
  "@type": "Class",
  "label": "Autonomous Systems Domain",
  "definition": "The Autonomous Systems Domain classifies concepts concerning systems that sense, decide and act towards goals with limited human intervention. It covers perception, planning, decision-making and the safety assurance of autonomous operation. As a top-level subject axis it integrates control, intelligence and engineering into systems that operate independently.",
  "domain": "robotics",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Robo Navigation And Planning"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:perception",
        "label": "Perception"
      },
      {
        "@id": "urn:ngm:class:path-planning",
        "label": "Path Planning"
      },
      {
        "@id": "urn:ngm:class:decision-making",
        "label": "Decision Making"
      },
      {
        "@id": "urn:ngm:class:safety-assurance",
        "label": "Safety Assurance"
      },
      {
        "@id": "urn:ngm:class:sensor-fusion",
        "label": "Sensor Fusion"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:control-systems-domain",
        "label": "Control Systems Domain"
      },
      {
        "@id": "urn:ngm:class:artificial-intelligence-domain",
        "label": "Artificial Intelligence Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:self-driving-operation",
        "label": "Self-Driving Operation"
      },
      {
        "@id": "urn:ngm:class:unmanned-missions",
        "label": "Unmanned Missions"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:autonomous-systems-domain:0cde3055f13f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a18c3ea8ff9b32e576781f63f4eae438e7c1a24eefbc4881b2c86d60cd2c9fff"
  },
  "vc:resolutions": [
    {
      "raw": "[[Perception]]",
      "resolved": "urn:visionflow:linked:perception",
      "kind": "StubLink"
    },
    {
      "raw": "[[Path Planning]]",
      "resolved": "urn:visionflow:linked:path-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decision Making]]",
      "resolved": "urn:visionflow:linked:decision-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[Safety Assurance]]",
      "resolved": "urn:visionflow:linked:safety-assurance",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sensor Fusion]]",
      "resolved": "urn:visionflow:linked:sensor-fusion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Control Systems Domain]]",
      "resolved": "urn:visionflow:linked:control-systems-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence Domain]]",
      "resolved": "urn:visionflow:linked:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Self-Driving Operation]]",
      "resolved": "urn:visionflow:linked:self-driving-operation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Unmanned Missions]]",
      "resolved": "urn:visionflow:linked:unmanned-missions",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics Domain]]",
      "resolved": "urn:visionflow:linked:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO 26262]]",
      "resolved": "urn:visionflow:linked:iso-26262",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SAE J3016]]",
      "resolved": "urn:visionflow:linked:sae-j-3016",
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
  - The Autonomous Systems Domain classifies concepts concerning systems that sense, decide and act towards goals with limited human intervention. It covers perception, planning, decision-making and the safety assurance of autonomous operation. As a top-level subject axis it integrates control, intelligence and engineering into systems that operate independently.

- ### Semantic Classification
  - owl-class:: auto:AutonomousSystemsDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Robotics Domain]], [[Control Systems Domain]]
  - has-part:: [[Perception]], [[Path Planning]], [[Decision Making]], [[Safety Assurance]], [[Sensor Fusion]]
  - requires:: [[Control Systems Domain]], [[Artificial Intelligence Domain]]
  - enables:: [[Self-Driving Operation]], [[Unmanned Missions]]

- ### Content
  - Autonomous systems perceive their environment, reason about it and act to achieve goals without continuous human direction. They combine sensing and fusion to build a model of the world, planning to select courses of action and control to execute them. The degree of autonomy ranges from assisted operation to full independence.
  - Decision-making under uncertainty is central, requiring systems to act on incomplete and noisy information while bounding the risk of harm. Safety assurance treats the question of how to demonstrate, and bound, the behaviour of systems whose decisions are not fully specified in advance. Verification, monitoring and fallback behaviours guard against failure.
  - Autonomous systems bridge to robotics, which provides their physical embodiment, and to control systems, which regulate their motion. They depend on artificial intelligence for perception and decision-making and on control theory for stable actuation.

- ### Provenance
  - sources:: [[ISO 26262]], [[SAE J3016]]
  - migration-date:: 2026-05-29T00:00:00Z
