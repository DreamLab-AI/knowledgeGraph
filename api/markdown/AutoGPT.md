public:: true

# AutoGPT
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f05bbbb1c5084fad53555d28c6a3cdc82eaeb315d8a6f9b3394f4ab510ab88c5",
  "@type": "Page",
  "vc:slug": "auto-gpt",
  "title": "AutoGPT",
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
      "@id": "urn:visionflow:linked:agentic-workflow",
      "vc:label": "Agentic Workflow"
    },
    {
      "@id": "urn:visionflow:linked:ai-agent",
      "vc:label": "AI Agent"
    },
    {
      "@id": "urn:visionflow:linked:agent-memory",
      "vc:label": "Agent Memory"
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
      "vc:value": "AutoGPT"
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
  "@id": "urn:ngm:class:auto-gpt",
  "@type": "Class",
  "label": "AutoGPT",
  "definition": "AutoGPT is an open-source application that chains language model calls to pursue a high-level goal with limited human input. It was an early demonstration of autonomous agents that plan, act and use tools in a loop.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
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
  "@id": "urn:visionflow:annotation:link-resolutions:auto-gpt:6ad106225328",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f05bbbb1c5084fad53555d28c6a3cdc82eaeb315d8a6f9b3394f4ab510ab88c5"
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
      "raw": "[[Agent Memory]]",
      "resolved": "urn:visionflow:linked:agent-memory",
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
  - AutoGPT is an open-source application that chains language model calls to pursue a high-level goal with limited human input. It was an early demonstration of autonomous agents that plan, act and use tools in a loop.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AutoGPT
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Autonomous Agent]]
  - bridges-to:: [[AI Agent]], [[Agent Memory]]
  - requires:: [[Language Model]], [[Tool Use]]
  - enables:: [[Agentic Workflow]]

- ### Content
  - AutoGPT takes a stated objective and repeatedly prompts a language model to decide a next action, execute it through tools such as web access or file operations, and then reflect on the result. It popularised the pattern of an autonomous loop driven by a single goal.
  - The project highlighted both the promise and the limits of early autonomous agents, including drift from the goal and looping behaviour. It influenced later agent frameworks that added more structured planning and memory.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
