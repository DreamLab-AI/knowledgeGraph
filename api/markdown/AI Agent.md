public:: true

# AI Agent
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:73d762cf4574064331f4f3e6cf83504b1e2c6e77b16b557999e239ced5845903",
  "@type": "Page",
  "vc:slug": "ai-agent",
  "title": "AI Agent",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:tool-use",
      "vc:label": "Tool Use"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:linked:automated-planning",
      "vc:label": "Automated Planning"
    },
    {
      "@id": "urn:visionflow:linked:agentic-ai",
      "vc:label": "Agentic AI"
    },
    {
      "@id": "urn:visionflow:linked:autonomous-agent",
      "vc:label": "Autonomous Agent"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Agent"
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
  "@id": "urn:ngm:class:ai-agent",
  "@type": "Class",
  "label": "AI Agent",
  "definition": "A software system that perceives its environment, makes decisions and takes actions to achieve goals, often using a language model together with tools and memory.",
  "domain": "artificial-intelligence",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:autonomous-agent",
      "label": "Autonomous Agent"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:automated-planning",
        "label": "Automated Planning"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ai-agent:c1f78a0a51c1",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:73d762cf4574064331f4f3e6cf83504b1e2c6e77b16b557999e239ced5845903"
  },
  "vc:resolutions": [
    {
      "raw": "[[Tool Use]]",
      "resolved": "urn:visionflow:linked:tool-use",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Automated Planning]]",
      "resolved": "urn:visionflow:linked:automated-planning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agentic AI]]",
      "resolved": "urn:visionflow:linked:agentic-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Autonomous Agent]]",
      "resolved": "urn:visionflow:linked:autonomous-agent",
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
  - A software system that perceives its environment, makes decisions and takes actions to achieve goals, often using a language model together with tools and memory.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIAgent
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Autonomous Agent]]
  - bridges-to:: [[Agentic AI]]
  - requires:: [[Tool Use]], [[Large Language Models]]
  - enables:: [[Automated Planning]]

- ### Content
  - An AI agent couples a decision-making model with the ability to observe state and act on an environment. Contemporary agents commonly use a large language model as a controller that plans, calls external tools, reads results and iterates towards a goal.
  - Agent designs vary in how they manage memory, decompose tasks and recover from errors. Reliability depends on grounding the model in accurate observations and constraining its actions, since unconstrained agents can take incorrect or unsafe steps when their reasoning is mistaken.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
