public:: true

# GPT 4
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c2d1c26e9b97b83132df03d9bb5b02d125f9d22e2d025bbc2caa05062caadd5a",
  "@type": "Page",
  "vc:slug": "gpt-4",
  "title": "GPT 4",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:open-ai",
      "vc:label": "OpenAI"
    },
    {
      "@id": "urn:visionflow:linked:in-context-learning",
      "vc:label": "In-Context Learning"
    },
    {
      "@id": "urn:visionflow:linked:multimodal-ai",
      "vc:label": "Multimodal AI"
    },
    {
      "@id": "urn:visionflow:linked:large-language-models",
      "vc:label": "Large Language Models"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GPT 4"
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
  "@id": "urn:ngm:class:gpt-4",
  "@type": "Class",
  "label": "GPT 4",
  "definition": "A large multimodal language model released by OpenAI in 2023, capable of accepting text and image inputs and producing text outputs, and a successor to the GPT-3.5 series.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:large-language-models",
      "label": "Large Language Models"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:openai-research-organisation",
        "label": "OpenAI Research Organisation"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning-from-human-feedback",
        "label": "Reinforcement Learning From Human Feedback"
      },
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:in-context-learning",
        "label": "In-Context Learning"
      },
      {
        "@id": "urn:ngm:class:code-generation",
        "label": "Code Generation"
      },
      {
        "@id": "urn:ngm:class:text-summarisation",
        "label": "Text Summarisation"
      },
      {
        "@id": "urn:ngm:class:question-answering",
        "label": "Question Answering"
      },
      {
        "@id": "urn:ngm:class:multimodal-ai-architecture-reasoning",
        "label": "Multimodal Reasoning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:multimodal-ai-architecture-ai",
        "label": "Multimodal AI"
      },
      {
        "@id": "urn:ngm:class:prompt-engineering",
        "label": "Prompt Engineering"
      },
      {
        "@id": "urn:ngm:class:chain-of-thought-prompting",
        "label": "Chain Of Thought Prompting"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:instruction-following",
        "label": "Instruction Following"
      },
      {
        "@id": "urn:ngm:class:function-calling",
        "label": "Function Calling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:gpt",
        "label": "GPT 3"
      },
      {
        "@id": "urn:ngm:class:meta-llama-model-family",
        "label": "LLaMA"
      },
      {
        "@id": "urn:ngm:class:gemini-multimodal-language-model",
        "label": "Gemini"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:ai-alignment",
        "label": "AI Alignment"
      },
      {
        "@id": "urn:ngm:class:scaling-laws",
        "label": "Neural Scaling Laws"
      },
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-agent",
        "label": "AI Agent"
      },
      {
        "@id": "urn:ngm:class:robotics",
        "label": "Robotics"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gpt4",
      "label": "GPT4"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gpt-4:1b1ae7069716",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:c2d1c26e9b97b83132df03d9bb5b02d125f9d22e2d025bbc2caa05062caadd5a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[OpenAI Research Organisation]]",
      "resolved": "urn:visionflow:linked:open-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[In-Context Learning]]",
      "resolved": "urn:visionflow:linked:in-context-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multimodal AI]]",
      "resolved": "urn:visionflow:linked:multimodal-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:linked:large-language-models",
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
  - A large multimodal language model released by OpenAI in 2023, capable of accepting text and image inputs and producing text outputs, and a successor to the GPT-3.5 series.

- ### Semantic Classification
  - owl-class:: natural-language-processing:GPT4
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Large Language Models]]
  - bridges-to:: [[Multimodal AI]]
  - requires:: [[Transformer]], [[OpenAI Research Organisation]]
  - enables:: [[In-Context Learning]]

- ### Content
  - GPT-4 is a transformer-based language model trained on large text corpora and aligned with human feedback. It accepts longer context windows than earlier GPT releases and can process images alongside text in its multimodal configuration.
  - OpenAI did not publish full architectural or training details, so public knowledge rests on the technical report and observed behaviour. The model is offered through an API and consumer products, and is used for tasks including drafting, summarisation, coding assistance and question answering.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
