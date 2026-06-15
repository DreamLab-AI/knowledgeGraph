public:: true

# Frontier Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:frontier-models",
  "@type": "Page",
  "vc:slug": "frontier-models",
  "title": "Frontier Models",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:frontier-models",
  "@type": "Class",
  "label": "Frontier Models",
  "definition": "Frontier models are large-scale AI systems trained at the leading edge of compute, data, and capability, exhibiting emergent behaviours not observed in smaller models and presenting both transformative societal potential and novel safety risks. The term typically refers to the most capable foundation models available at any given time, assessed across benchmarks spanning reasoning, coding, science, and multimodal tasks.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:large-scale-pretrained-foundation-model",
    "label": "Large-Scale Pretrained Foundation Model"
  },
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:emergent-capabilities",
        "label": "Emergent Capabilities"
      },
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:compute-governance",
        "label": "Compute Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:gpu-cluster",
        "label": "GPU Cluster"
      },
      {
        "@id": "urn:ngm:class:large-scale-pretraining",
        "label": "Large-Scale Pretraining"
      },
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning from Human Feedback"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:reasoning-models",
        "label": "Reasoning Models"
      },
      {
        "@id": "urn:ngm:class:multimodal-ai-architecture-ai",
        "label": "Multimodal AI"
      },
      {
        "@id": "urn:ngm:class:autonomous-agent",
        "label": "Autonomous Agents"
      },
      {
        "@id": "urn:ngm:class:ai-coding-assistants",
        "label": "AI Coding Assistants"
      },
      {
        "@id": "urn:ngm:class:scientific-discovery",
        "label": "Scientific Discovery AI"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:frontier-model-evaluation",
        "label": "Frontier Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:responsible-scaling-policy",
        "label": "Responsible Scaling Policies"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:mixture-of-experts-architecture",
        "label": "Mixture of Experts"
      },
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Extended Context Window"
      },
      {
        "@id": "urn:ngm:class:inference-time-compute-scaling",
        "label": "Inference-Time Compute Scaling"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      },
      {
        "@id": "urn:ngm:class:frontier-model-forum",
        "label": "Frontier Model Forum"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:small-language-models",
        "label": "Small Language Models"
      },
      {
        "@id": "urn:ngm:class:open-source-ai",
        "label": "Open-Source AI Models"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:international-ai-cooperation",
        "label": "International AI Cooperation"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:state-of-the-art-ai-models",
      "label": "State-of-the-Art AI Models"
    },
    {
      "@id": "urn:ngm:class:advanced-ai-systems",
      "label": "Advanced AI Systems"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Frontier Models]] are the most capable [[Large-Scale Pretrained Foundation Model]] at any given moment, trained at unprecedented compute scales, and distinguished by [[Emergent Capabilities]] such as in-context reasoning, tool use, and scientific problem-solving that were absent in prior-generation systems.

- ### Relationships
  - Frontier Models are governed by [[Scaling Laws]] that predict capability gains, require massive [[GPU Cluster]] infrastructure, enable downstream [[Reasoning Models]] and [[Multimodal AI]] systems, and are assessed through structured [[Frontier Model Evaluation]] frameworks.

- ### Content
  - The concept crystallised around 2022–2023 as GPT-4, PaLM-2, and Claude 2 demonstrated qualitative capability jumps relative to earlier models. The term "frontier" was popularised by the UK AI Safety Institute, the Frontier Model Forum (founded 2023 by Anthropic, Google, Microsoft, OpenAI), and subsequent G7 AI governance discussions. The 2023 Bletchley Declaration formally recognised frontier AI as requiring international cooperation on safety.
  - Frontier models are trained on trillions of tokens using thousands of specialised accelerators for weeks to months. Techniques such as RLHF (Reinforcement Learning from Human Feedback), constitutional AI, and DPO (Direct Preference Optimisation) are applied post-pretraining to align outputs. Architectures are predominantly transformer-based with context windows ranging from 128k to over 1M tokens. Mixture-of-Experts (MoE) variants activate only a fraction of parameters per token, enabling larger parameter counts within the same compute budget.
  - Frontier models underpin commercial AI products (coding assistants, scientific discovery tools, autonomous agents) while also driving the urgency of AI safety research. Their capability elicitation benchmarks—MMLU, GPQA, SWE-bench, ARC-AGI—shape regulatory frameworks. Governments mandate pre-deployment evaluations above specific compute thresholds (the EU AI Act uses 10^25 FLOPs as a provisional marker for frontier-level training runs).
  - As of 2024–2025, the leading frontier models include GPT-4o, Claude 3.5/3.7, Gemini 1.5/2.0, Llama 3.x, and DeepSeek V3/R1. Inference-time compute scaling (chain-of-thought, extended thinking) has partially decoupled capability from training compute, with models such as OpenAI o3 and Claude 3.7 Sonnet demonstrating that reasoning at inference time can unlock performance on tasks previously considered out of reach. Safety evaluation infrastructure—red-teaming, model cards, responsible scaling policies—has matured but remains contested in methodology.

