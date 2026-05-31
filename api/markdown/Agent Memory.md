public:: true

# Agent Memory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1062b709197b562f9dd3151ae21e021544f65376cec9b5c4b4cdb97cfd1bb1a3",
  "@type": "Page",
  "vc:slug": "agent-memory",
  "title": "Agent Memory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:vector-database",
      "vc:label": "Vector Database"
    },
    {
      "@id": "urn:visionflow:linked:embeddings",
      "vc:label": "Embeddings"
    },
    {
      "@id": "urn:visionflow:linked:agentic-workflow",
      "vc:label": "Agentic Workflow"
    },
    {
      "@id": "urn:visionflow:linked:retrieval-augmented-generation",
      "vc:label": "Retrieval-Augmented Generation"
    },
    {
      "@id": "urn:visionflow:linked:context-window",
      "vc:label": "Context Window"
    },
    {
      "@id": "urn:visionflow:linked:ai-agent",
      "vc:label": "AI Agent"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Agent Memory"
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
  "@id": "urn:ngm:class:agent-memory",
  "@type": "Class",
  "label": "Agent Memory",
  "definition": "Agent memory is the mechanism by which an autonomous agent stores and retrieves information across steps and sessions. It allows an agent to recall past observations, decisions and facts beyond the immediate context window.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-agent",
      "label": "AI Agent"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      },
      {
        "@id": "urn:ngm:class:embeddings",
        "label": "Embeddings"
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
  "@id": "urn:visionflow:annotation:link-resolutions:agent-memory:22a9405c3d21",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1062b709197b562f9dd3151ae21e021544f65376cec9b5c4b4cdb97cfd1bb1a3"
  },
  "vc:resolutions": [
    {
      "raw": "[[Vector Database]]",
      "resolved": "urn:visionflow:linked:vector-database",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Embeddings]]",
      "resolved": "urn:visionflow:linked:embeddings",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agentic Workflow]]",
      "resolved": "urn:visionflow:linked:agentic-workflow",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Retrieval-Augmented Generation]]",
      "resolved": "urn:visionflow:linked:retrieval-augmented-generation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Context Window]]",
      "resolved": "urn:visionflow:linked:context-window",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agent]]",
      "resolved": "urn:visionflow:linked:ai-agent",
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
  - Agent memory is the mechanism by which an autonomous agent stores and retrieves information across steps and sessions. It allows an agent to recall past observations, decisions and facts beyond the immediate context window.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AgentMemory
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[AI Agent]]
  - bridges-to:: [[Retrieval-Augmented Generation]], [[Context Window]]
  - requires:: [[Vector Database]], [[Embeddings]]
  - enables:: [[Agentic Workflow]]

- ### Content
  - Agent memory gives a language model agent persistent state, distinguishing short-term working memory held in the prompt context from long-term memory stored externally. Long-term stores are commonly built on vector databases that index past content by embedding for later retrieval.
  - Memory designs separate episodic records of what happened from semantic facts and procedural skills, and retrieval brings relevant items back into context when needed. This extends an agent beyond the limits of a single context window and supports coherent behaviour over time.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
