public:: true

# Few-Shot Prompting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:few-shot-prompting",
  "@type": "Page",
  "vc:slug": "few-shot-prompting",
  "title": "Few-Shot Prompting",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:few-shot-prompting",
  "@type": "Class",
  "label": "Few-Shot Prompting",
  "definition": "Few-shot prompting is a prompt engineering technique in which a small number of input-output demonstration examples are included directly in the context provided to a large language model, guiding the model to produce outputs conforming to the demonstrated pattern without any parameter updates. The approach exploits the in-context learning capability of transformer-based models, allowing task specification through examples rather than task-specific fine-tuning.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:prompt-engineering",
      "label": "Prompt Engineering"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      },
      {
        "@id": "urn:ngm:class:few-shot-examples",
        "label": "Few-Shot Examples"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:zero-shot-prompting",
        "label": "Zero-Shot Prompting"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought-prompting",
        "label": "Chain-of-Thought Prompting"
      },
      {
        "@id": "urn:ngm:class:instruction-tuning",
        "label": "Instruction Tuning"
      },
      {
        "@id": "urn:ngm:class:retrieval-augmented-generation",
        "label": "Retrieval-Augmented Generation"
      },
      {
        "@id": "urn:ngm:class:meta-learning",
        "label": "Meta-Learning"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:context-window",
        "label": "Context Window"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:few-shot-learning",
        "label": "Few-Shot Learning"
      },
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine-Tuning"
      },
      {
        "@id": "urn:ngm:class:zero-shot-prompting",
        "label": "Zero-Shot Prompting"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:task-adaptation",
        "label": "Task Adaptation"
      },
      {
        "@id": "urn:ngm:class:structured-output",
        "label": "Structured Output Generation"
      },
      {
        "@id": "urn:ngm:class:information-extraction",
        "label": "Information Extraction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      },
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:few-shot-in-context-learning",
      "label": "Few-Shot In-Context Learning"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  Few-shot prompting is a [[Prompt Engineering]] technique that supplies a handful of worked examples within the model's [[Context Window]], enabling a [[Language Model]] to generalise the demonstrated task format and reasoning pattern to new inputs without any weight updates.

- ### Relationships
  Few-shot prompting is a specialisation of [[Prompt Engineering]] and relies on the [[In-Context Learning]] capability of transformer models. It uses [[Few-Shot Examples]] as its mechanism and sits in contrast with [[Zero-Shot Prompting]] (no examples) and [[Chain-of-Thought Prompting]] (explicit reasoning steps). It is bounded by the [[Context Window]] available to the model and is conceptually distinct from gradient-based [[Few-Shot Learning]].

- ### Content
  - The technique was characterised and named in the landmark GPT-3 paper (Brown et al., 2020), which demonstrated that large language models acquire the ability to perform new tasks from only a few demonstrations provided entirely within the input prompt. This finding was striking because it showed that scale alone—without any task-specific training—could enable flexible task adaptation. Prior to GPT-3, few-shot adaptation typically meant fine-tuning models on small labelled datasets; the in-context formulation shifted the paradigm towards purely inference-time specification.
  - In practice, few-shot prompting works by prepending the user query with k demonstration pairs, each consisting of an example input and its desired output, formatted consistently. The model's attention mechanism over the combined context allows it to extract the implicit mapping and apply it to the final query. The quality of performance is sensitive to the choice of examples (representative, diverse, and correctly formatted examples improve accuracy), their ordering, and the format used. For classification tasks, k typically ranges from 1 to 32; for complex generation tasks, 3-8 high-quality examples often saturate performance gains.
  - Few-shot prompting is widely used in production systems where fine-tuning is impractical—rapid prototyping, low-resource languages, proprietary tasks, and dynamic task switching. It allows non-experts to specify model behaviour through natural examples without requiring ML infrastructure. Applications include information extraction, sentiment analysis, code generation, translation into domain-specific formats, and structured output generation. It is the workhorse of many enterprise integrations with foundation model APIs.
  - By 2024-2025, few-shot prompting has been systematically studied and partially superseded or augmented. Instruction-tuned models (GPT-4, Claude 3, Gemini) perform strongly in zero-shot settings, reducing but not eliminating the need for examples. Research into automatic example selection—using retrieval over labelled pools to find the most relevant demonstrations for each query—has improved consistency. Chain-of-thought variants that interleave reasoning steps within demonstrations further boost performance on multi-step tasks. Prompt compression techniques now allow more examples within fixed context budgets, and few-shot prompting remains a standard baseline in benchmarking new models.