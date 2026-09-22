public:: true

# Token Cost
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:67c26f6cac4e18ba56ab41bdf41950770fa84dafcbea3322bc1e5682708cdbe6",
  "@type": "Page",
  "vc:slug": "token-cost",
  "title": "Token Cost",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cost-efficient-inference",
      "vc:label": "Cost-Efficient Inference"
    },
    {
      "@id": "urn:visionflow:linked:context-window",
      "vc:label": "Context Window"
    },
    {
      "@id": "urn:visionflow:linked:tokeniser",
      "vc:label": "Tokeniser"
    },
    {
      "@id": "urn:visionflow:linked:large-language-model",
      "vc:label": "Large Language Model"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-07T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:token-cost",
  "@type": "Class",
  "label": "Token Cost",
  "definition": "Token cost is the economic and computational expense incurred when a large language model consumes and produces tokens, calculated as the sum of input (prompt) tokens and output (completion) tokens multiplied by their respective per-token prices, and it constitutes the dominant recurring cost driver of deployed generative-AI and agent-orchestration systems. Because providers meter usage in tokens rather than requests, token cost scales super-linearly with prompt length, conversation history, retrieved context, tool-call payloads, and multi-step agent fan-out, making it the primary budget variable an orchestrator must forecast, cap, and attribute. Managing token cost involves measurement (counting tokens per call and per session), attribution (allocating spend to tasks, agents, or tenants), and reduction levers such as prompt compression, context pruning, caching, model-tier routing, and truncation of chat history against the model context window.",
  "vc:plainGloss": "Token cost is how much you pay each time an AI model reads or writes text, priced per token in and out. Longer prompts, bigger histories, and chatty multi-agent runs all push the bill up.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:performance-metrics",
    "label": "Performance Metrics"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:tokeniser",
        "label": "Tokeniser"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cost-efficient-inference",
        "label": "Cost-Efficient Inference"
      },
      {
        "@id": "urn:ngm:class:cost-optimisation",
        "label": "Cost Optimisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ]
  },
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "GapFill"
  }
}
```

- ### Definition
  - "Token cost is the economic and computational expense incurred when a large language model consumes and produces tokens, calculated as the sum of input (prompt) tokens and output (completion) tokens multiplied by their respective per-token prices, and it constitutes the dominant recurring cost driver of deployed generative-AI and agent-orchestration systems. Because providers meter usage in tokens rather than requests, token cost scales super-linearly with prompt length, conversation history, retrieved context, tool-call payloads, and multi-step agent fan-out, making it the primary budget variable an orchestrator must forecast, cap, and attribute. Managing token cost involves measurement (counting tokens per call and per session), attribution (allocating spend to tasks, agents, or tenants), and reduction levers such as prompt compression, context pruning, caching, model-tier routing, and truncation of chat history against the model context window."

- ### In Plain Terms
  - Token cost is how much you pay each time an AI model reads or writes text, priced per token in and out. Longer prompts, bigger histories, and chatty multi-agent runs all push the bill up.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TokenCost
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Performance Metrics]]
  - related-to:: [[Context Window]]
  - related-to:: [[Large Language Model]]
  - requires:: [[Tokeniser]]
  - enables:: [[Cost-Efficient Inference]]
  - enables:: [[Cost Optimisation]]
  - contrasts-with:: [[Latency]]

- ### Content

  ## Definition

  **Token Cost** is the unit economics of large language model usage. Commercial providers bill by the token — the sub-word fragments produced by a [[Tokeniser]] — rather than by the request, so the price of any single model call is `(input_tokens × input_price) + (output_tokens × output_price)`. Input and output tokens are typically priced differently, with generated (output) tokens costing several times more than prompt (input) tokens. This metering model makes token cost the single most important operational variable in production generative-AI and agent-orchestration systems, because it is both large in absolute terms and highly sensitive to design choices that are easy to overlook.

  Unlike a fixed per-request fee, token cost compounds with everything an orchestrator adds to the prompt: system instructions, few-shot exemplars, retrieved documents, prior conversation turns, tool schemas, and intermediate tool results. In multi-agent workflows the effect multiplies, because each sub-agent re-sends shared context and each planning or critique loop re-processes the accumulated transcript. As a result, naïve agent designs can consume an order of magnitude more tokens than a carefully budgeted equivalent for the same task.

  ## Cost Drivers and Reduction Levers

  ### What inflates token cost
  - **Long context**: verbose prompts and large retrieved passages consume input tokens on every turn; cost grows with the [[Context Window]] that is actually filled, not the model's maximum.
  - **Conversation accumulation**: replaying the full chat history each turn makes cost grow quadratically over a long session.
  - **Fan-out**: parallel sub-agents that each carry a copy of shared context multiply the input-token bill.
  - **Verbose generation**: unbounded or poorly constrained outputs inflate the more expensive output-token count.

  ### What reduces it
  - **Prompt compression and context pruning**: trimming instructions, summarising history, and retrieving fewer, higher-relevance passages.
  - **Prompt caching**: reusing a cached prefix so repeated system prompts and shared context are billed at a discount.
  - **Model-tier routing**: sending easy sub-tasks to a smaller, cheaper model and reserving frontier models for hard steps.
  - **Output capping**: bounding completion length and using structured outputs to avoid rambling generations.

  Effective control depends on measurement first: token counts must be captured per call, aggregated per session, and attributed to the task, agent, or tenant that incurred them. This attribution turns token cost from an opaque monthly invoice into a per-workflow budget an orchestrator can forecast and enforce. In this way token cost is the metric that motivates and is optimised by [[Cost-Efficient Inference]] and broader [[Cost Optimisation]] practice.

  ## Trade-offs

  Token cost rarely stands alone. Reducing it usually trades against other objectives, most notably [[Latency]] and answer quality. Aggressive context pruning cuts cost but risks dropping information the model needs; routing to a smaller model cuts cost but may reduce accuracy; batching to improve throughput can raise per-request latency. A production orchestrator therefore treats token cost as one term in a multi-objective budget — cost, latency, and quality balanced against an explicit spend cap — rather than a value to minimise unconditionally.
