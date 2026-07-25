public:: true

# Swarm Control
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:68a78d89aa8062b9b48df7ad96cea30c5c53062f25d13ac98a2312d555200994",
  "@type": "Page",
  "vc:slug": "swarm-control",
  "title": "Swarm Control",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:multi-agent-system",
      "vc:label": "Multi-Agent System"
    },
    {
      "@id": "urn:visionflow:linked:swarm-intelligence",
      "vc:label": "Swarm Intelligence"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    },
    {
      "@id": "urn:visionflow:linked:subsumption-architecture",
      "vc:label": "Subsumption Architecture"
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
      "vc:value": "Swarm Control"
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
  "@id": "urn:ngm:class:swarm-control",
  "@type": "Class",
  "label": "Swarm Control",
  "definition": "Swarm control coordinates many simple agents through local rules and interactions so that useful collective behaviour emerges without centralised command.",
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
        "@id": "urn:ngm:class:multi-agent-system",
        "label": "Multi-Agent System"
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
  "@id": "urn:visionflow:annotation:link-resolutions:swarm-control:fc27267dfbfe",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:68a78d89aa8062b9b48df7ad96cea30c5c53062f25d13ac98a2312d555200994"
  },
  "vc:resolutions": [
    {
      "raw": "[[Multi-Agent System]]",
      "resolved": "urn:visionflow:linked:multi-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Swarm Intelligence]]",
      "resolved": "urn:visionflow:linked:swarm-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Agent]]",
      "resolved": "urn:visionflow:linked:autonomous-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Subsumption Architecture]]",
      "resolved": "urn:visionflow:linked:subsumption-architecture",
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
  - Swarm control coordinates many simple agents through local rules and interactions so that useful collective behaviour emerges without centralised command.

- ### Semantic Classification
  - owl-class:: metaverse:SwarmControl
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robotics Domain]]
  - bridges-to:: [[Autonomous Agent]], [[Subsumption Architecture]]
  - requires:: [[Multi-Agent System]]
  - enables:: [[Swarm Intelligence]]

- ### Content
  - Swarm control specifies local sensing and interaction rules for each agent such that flocking, aggregation, coverage or transport emerges at the group level. Resilience and scalability come from decentralisation, since no single agent is essential.
  - The approach draws on swarm intelligence and multi-agent systems and relates to behaviour-based control of individual agents. It applies to robot collectives and to simulated agents in virtual environments.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
