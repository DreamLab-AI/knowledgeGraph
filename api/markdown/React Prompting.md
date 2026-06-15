public:: true

# React Prompting

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:react-prompting",
  "@type": "Page",
  "title": "React Prompting",
  "vc:slug": "react-prompting",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:react-prompting",
  "@type": "Class",
  "label": "React Prompting",
  "definition": "ReAct prompting is a prompting strategy that interleaves verbal reasoning traces with discrete actions, enabling a language model to think step by step while interacting with external tools or environments. The model alternates between generating a thought, taking an action such as a search or API call, and observing the result, then folding that observation back into subsequent reasoning. This synergy of reasoning and acting reduces hallucination and grounds the model's conclusions in retrieved evidence.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:prompt-engineering",
      "label": "Prompt Engineering"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:chain-of-thought-reasoning",
        "label": "Chain-of-Thought Reasoning"
      },
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      },
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:chain-of-thought-reasoning",
        "label": "Chain-of-Thought Reasoning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:agentic-ai",
        "label": "Agentic AI"
      },
      {
        "@id": "urn:ngm:class:autonomous-task-execution",
        "label": "Autonomous Task Execution"
      },
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:tool-use",
        "label": "Tool Use"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - ReAct prompting is a prompting strategy that interleaves verbal reasoning traces with discrete actions, enabling a language model to think step by step while interacting with external tools or environments. The model alternates between generating a thought, taking an action such as a search or API call, and observing the result, then folding that observation back into subsequent reasoning. This synergy of reasoning and acting reduces hallucination and grounds the model's conclusions in retrieved evidence.
  - Related core concepts: [[Prompt Engineering]] [[Chain-of-Thought Reasoning]] [[Tool Use]] [[Agentic AI]] [[Large Language Model]]
- ### Overview
  - ReAct emerged as a way to make large language models more reliable on knowledge-intensive and decision-making tasks. Rather than producing an answer in a single forward pass, the model is prompted to externalise its reasoning as a sequence of thought-action-observation triples. Thoughts decompose the problem, actions query the outside world, and observations supply fresh, factual context that the next thought can incorporate.
- ### Mechanisms
  - Thought-action-observation loop that alternates internal reasoning with external interaction
  - Action space typically includes search, retrieval, calculator, or arbitrary tool invocations
  - Observations are appended to the context window, grounding subsequent reasoning in evidence
  - Few-shot exemplars demonstrate the interleaved trace format to the model
  - Terminates when the model emits a final answer action rather than a further tool call
- ### Applications
  - Question answering grounded in live retrieval rather than parametric memory
  - Autonomous agents that plan and execute multi-step tasks against tools and APIs
  - Fact verification where each claim is checked against an external source
  - Web navigation and interactive decision-making environments
- ### Relationships
  - relatedTo:: [[Chain-of-Thought Reasoning]]
  - relatedTo:: [[In-Context Learning]]
  - relatedTo:: [[Few-Shot Learning]]
  - relatedTo:: [[Reasoning]]
  - contrastsWith:: [[Chain-of-Thought Reasoning]]
  - enables:: [[Agentic AI]]
  - enables:: [[Autonomous Task Execution]]
  - enables:: [[Tool Use]]
  - uses:: [[Tool Use]]
  - uses:: [[Large Language Model]]
  - supports:: [[AI Agent]]
  - requires:: [[Large Language Model]]
  - partOf:: [[Prompt Engineering]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
