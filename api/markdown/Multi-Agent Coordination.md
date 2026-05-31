public:: true

# Multi-Agent Coordination
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ca02ae6e9e8b916b030a510d26be8ff8ca8cc7556edab0f40d446ca38b5bd16b",
  "@type": "Page",
  "vc:slug": "multi-agent-coordination",
  "title": "Multi-Agent Coordination",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:multi-agent-systems",
      "vc:label": "Multi-Agent Systems"
    },
    {
      "@id": "urn:visionflow:linked:agentic-workflow",
      "vc:label": "Agentic Workflow"
    },
    {
      "@id": "urn:visionflow:linked:ai-agent",
      "vc:label": "AI Agent"
    },
    {
      "@id": "urn:visionflow:linked:game-theory",
      "vc:label": "Game Theory"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Multi-Agent Coordination"
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
  "@id": "urn:ngm:class:multi-agent-coordination",
  "@type": "Class",
  "label": "Multi-Agent Coordination",
  "definition": "Multi-agent coordination is the process by which several autonomous agents organise their actions to achieve shared or compatible goals. It addresses task allocation, communication and conflict resolution among agents.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multi-agent-systems",
      "label": "Multi-Agent Systems"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:multi-agent-systems",
        "label": "Multi-Agent Systems"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agentic-workflow",
        "label": "Agentic Workflow"
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
  "@id": "urn:visionflow:annotation:link-resolutions:multi-agent-coordination:dd000fbd5f57",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ca02ae6e9e8b916b030a510d26be8ff8ca8cc7556edab0f40d446ca38b5bd16b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Multi-Agent Systems]]",
      "resolved": "urn:visionflow:linked:multi-agent-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agentic Workflow]]",
      "resolved": "urn:visionflow:linked:agentic-workflow",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agent]]",
      "resolved": "urn:visionflow:linked:ai-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Theory]]",
      "resolved": "urn:visionflow:linked:game-theory",
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
  - Multi-agent coordination is the process by which several autonomous agents organise their actions to achieve shared or compatible goals. It addresses task allocation, communication and conflict resolution among agents.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:MultiAgentCoordination
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Multi-Agent Systems]]
  - bridges-to:: [[AI Agent]], [[Game Theory]]
  - requires:: [[Multi-Agent Systems]]
  - enables:: [[Agentic Workflow]]

- ### Content
  - Multi-agent coordination concerns how agents divide work, share information and avoid interfering with one another while pursuing objectives. Mechanisms include negotiation protocols, role assignment, shared plans and communication languages that let agents signal intent.
  - In language model agent systems, coordination is often implemented through orchestration frameworks where a controller routes subtasks to specialised agents and merges their results. Game theory provides tools for analysing strategic interaction when agents have differing incentives.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
