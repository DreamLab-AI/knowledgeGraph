public:: true

# OpenAI Agents SDK
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8287aa3b51c9c5185241e6792e137644f25a83833a0a3111c9db21b9805c9df8",
  "@type": "Page",
  "vc:slug": "open-ai-agents-sdk",
  "title": "OpenAI Agents SDK",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:language-model",
      "vc:label": "Language Model"
    },
    {
      "@id": "urn:visionflow:linked:function-calling",
      "vc:label": "Function Calling"
    },
    {
      "@id": "urn:visionflow:linked:multi-agent-coordination",
      "vc:label": "Multi-Agent Coordination"
    },
    {
      "@id": "urn:visionflow:linked:tool-use",
      "vc:label": "Tool Use"
    },
    {
      "@id": "urn:visionflow:linked:open-ai",
      "vc:label": "OpenAI"
    },
    {
      "@id": "urn:visionflow:linked:ai-agent",
      "vc:label": "AI Agent"
    },
    {
      "@id": "urn:visionflow:linked:agentic-workflow",
      "vc:label": "Agentic Workflow"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OpenAI Agents SDK"
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
  "@id": "urn:ngm:class:open-ai-agents-sdk",
  "@type": "Class",
  "label": "OpenAI Agents SDK",
  "definition": "The OpenAI Agents SDK is a software development kit for building agentic applications on OpenAI models, providing primitives for agents, tools and handoffs. It supports orchestrating one or more agents that call functions and pass control between each other.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:agentic-workflow",
      "label": "Agentic Workflow"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:multi-agent-coordination",
        "label": "Multi-Agent Coordination"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
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
  "@id": "urn:visionflow:annotation:link-resolutions:open-ai-agents-sdk:ea5a2eb8ce7e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8287aa3b51c9c5185241e6792e137644f25a83833a0a3111c9db21b9805c9df8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Language Model]]",
      "resolved": "urn:visionflow:linked:language-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Function Calling]]",
      "resolved": "urn:visionflow:linked:function-calling",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multi-Agent Coordination]]",
      "resolved": "urn:visionflow:linked:multi-agent-coordination",
      "kind": "StubLink"
    },
    {
      "raw": "[[Tool Use]]",
      "resolved": "urn:visionflow:linked:tool-use",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OpenAI]]",
      "resolved": "urn:visionflow:linked:open-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Agent]]",
      "resolved": "urn:visionflow:linked:ai-agent",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Agentic Workflow]]",
      "resolved": "urn:visionflow:linked:agentic-workflow",
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
  - The OpenAI Agents SDK is a software development kit for building agentic applications on OpenAI models, providing primitives for agents, tools and handoffs. It supports orchestrating one or more agents that call functions and pass control between each other.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:OpenAIAgentsSDK
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Agentic Workflow]]
  - bridges-to:: [[OpenAI]], [[AI Agent]]
  - requires:: [[Language Model]], [[Function Calling]]
  - enables:: [[Multi-Agent Coordination]], [[Tool Use]]

- ### Content
  - The OpenAI Agents SDK provides building blocks for agent loops, including tool registration, guardrails, tracing and handoffs that transfer a task from one agent to another. It is intended to reduce boilerplate when wiring models to external functions.
  - The SDK targets developers building assistants and automation that need to call APIs, run code or coordinate several specialised agents. It is released as an open-source library that works with OpenAI models.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
