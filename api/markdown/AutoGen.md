public:: true

# AutoGen
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fdfae3b111eba7caa003037ec66843a4aa28054a6e319fa06058fd04e124ca3a",
  "@type": "Page",
  "vc:slug": "auto-gen",
  "title": "AutoGen",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:tool-use",
      "vc:label": "Tool Use"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-coordination",
      "vc:label": "Multi-Agent Coordination"
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
      "@id": "urn:visionflow:linked:function-calling",
      "vc:label": "Function Calling"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-systems",
      "vc:label": "Multi-Agent Systems"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "AutoGen"
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
  "@id": "urn:ngm:class:auto-gen",
  "@type": "Class",
  "label": "AutoGen",
  "definition": "AutoGen is an open-source framework from Microsoft for building applications with multiple cooperating language model agents. It defines conversable agents that exchange messages to complete tasks.",
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
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      },
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
  "@id": "urn:visionflow:annotation:link-resolutions:auto-gen:c13155c197f7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fdfae3b111eba7caa003037ec66843a4aa28054a6e319fa06058fd04e124ca3a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tool Use]]",
      "resolved": "urn:visionflow:linked:tool-use",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Agent Coordination]]",
      "resolved": "urn:visionflow:linked:multi-agent-coordination",
      "kind": "StubLink"
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
      "raw": "[[Function Calling]]",
      "resolved": "urn:visionflow:linked:function-calling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Agent Systems]]",
      "resolved": "urn:visionflow:linked:multi-agent-systems",
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
  - AutoGen is an open-source framework from Microsoft for building applications with multiple cooperating language model agents. It defines conversable agents that exchange messages to complete tasks.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AutoGen
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Multi-Agent Systems]]
  - bridges-to:: [[AI Agent]], [[Function Calling]]
  - requires:: [[Language Model]], [[Tool Use]]
  - enables:: [[Multi-Agent Coordination]], [[Agentic Workflow]]

- ### Content
  - AutoGen structures applications as conversations between agents that can include language models, tools and human participants. Agents pass messages to each other and can call functions, which supports patterns such as a planner agent directing an executor agent.
  - The framework is used for code generation, data analysis and task automation where dividing work across specialised agents improves results. It is distributed as a Python library.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
