public:: true

# Subsumption Architecture
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:bb3a84b2f2b999344f3ea124417a4d2740223a30ed98e5fc0adc462d171c3980",
  "@type": "Page",
  "vc:slug": "subsumption-architecture",
  "title": "Subsumption Architecture",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    },
    {
      "@id": "urn:visionflow:linked:swarm-intelligence",
      "vc:label": "Swarm Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-system",
      "vc:label": "Multi-Agent System"
    },
    {
      "@id": "urn:visionflow:linked:robotics",
      "vc:label": "Robotics"
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
      "vc:value": "Subsumption Architecture"
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
  "@id": "urn:ngm:class:subsumption-architecture",
  "@type": "Class",
  "label": "Subsumption Architecture",
  "definition": "Subsumption architecture is a layered control method for autonomous agents in which simple reactive behaviours are stacked, with higher layers able to suppress or override lower ones to produce competent behaviour without a central world model.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
    },
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:swarm-intelligence",
        "label": "Swarm Intelligence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:subsumption-architecture:b860841f2dbd",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:bb3a84b2f2b999344f3ea124417a4d2740223a30ed98e5fc0adc462d171c3980"
  },
  "vc:resolutions": [
    {
      "raw": "[[Autonomous Agent]]",
      "resolved": "urn:visionflow:linked:autonomous-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Swarm Intelligence]]",
      "resolved": "urn:visionflow:linked:swarm-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Agent System]]",
      "resolved": "urn:visionflow:linked:multi-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:linked:robotics",
      "kind": "ResolvedLink"
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
  - Subsumption architecture is a layered control method for autonomous agents in which simple reactive behaviours are stacked, with higher layers able to suppress or override lower ones to produce competent behaviour without a central world model.

- ### Semantic Classification
  - owl-class:: metaverse:SubsumptionArchitecture
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Multi-Agent System]], [[Robotics]]
  - requires:: [[Autonomous Agent]]
  - enables:: [[Swarm Intelligence]]

- ### Content
  - Each layer in a subsumption architecture couples sensing directly to action for one behaviour, such as avoiding obstacles or wandering. Layers run concurrently, and arbitration lets higher-priority behaviours inhibit lower ones, giving reliable real-world performance from tightly coupled perception and action.
  - The approach influenced behaviour-based robotics and feeds into swarm and multi-agent systems where many simple agents produce collective competence. It contrasts with deliberative planning that depends on a maintained internal model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
