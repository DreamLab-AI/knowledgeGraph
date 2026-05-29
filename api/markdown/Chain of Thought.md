public:: true

# chain of thought
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:74c1451971265462ca972707e5a673acd33b933b815d1177e674684dc2671617",
  "@type": "Page",
  "vc:slug": "chain-of-thought",
  "title": "chain of thought",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:chain-of-thought",
  "@type": "Class",
  "label": "Chain of Thought",
  "definition": "Chain-of-Thought (CoT) prompting is a prompting technique for large language models in which the model is encouraged to produce explicit intermediate reasoning steps prior to its final answer, substantially improving accuracy on arithmetic, symbolic, and commonsense reasoning tasks. The technique exploits the sequential token-generation process of autoregressive transformers: each generated reasoning step conditions all subsequent steps, allowing multi-hop deductions that single-step prompting cannot reliably perform. CoT has given rise to a family of variants including zero-shot CoT, self-consistency CoT, and tree-of-thought search strategies.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:chain-of-thought-reasoning", "label": "Chain-of-Thought Reasoning"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Chain-of-Thought (CoT) prompting is a prompting technique for large language models in which the model is encouraged to produce explicit intermediate reasoning steps prior to its final answer, substantially improving accuracy on arithmetic, symbolic, and commonsense reasoning tasks. The technique exploits the sequential token-generation process of autoregressive transformers: each generated reasoning step conditions all subsequent steps, allowing multi-hop deductions that single-step prompting cannot reliably perform. CoT has given rise to a family of variants including zero-shot CoT, self-consistency CoT, and tree-of-thought search strategies.

- ### Semantic Classification
  - owl-class:: chain-of-thought:Chain of Thought
  - owl-role:: Concept

- ### Relationships
  - requires [[Large Language Models]]
  - requires [[Prompt Engineering]]
  - enables [[Reasoning]]
  - relatedTo [[Chain-of-Thought Reasoning]]
  - relatedTo [[Transformer]]

- ### Content
  - Chain-of-Thought prompting emerged as a practical technique for unlocking latent multi-step reasoning capability in Large Language Models without any parameter updates. In its few-shot form, exemplar prompts include worked solutions — e.g., "Let's think step by step" followed by intermediate calculations — and the model learns to mimic this structure for new questions. In its zero-shot form, appending "Let's think step by step" to a prompt alone has been shown to materially improve accuracy on grade-school maths benchmarks and logical inference tasks.
  - The self-consistency variant samples multiple reasoning paths from the model and takes a majority vote over final answers, trading inference compute for higher reliability. Tree-of-Thought extends the idea further by treating the reasoning trace as a search problem, using breadth-first or depth-first expansion of candidate reasoning steps, with a verifier scoring each branch. These developments link CoT directly to classical symbolic AI search paradigms.
  - CoT interacts closely with Transformer architecture because the reasoning capacity appears to scale with model size and is sensitive to the precise phrasing of the prompt. Prompt Engineering discipline studies which cues, orderings, and exemplar styles most reliably elicit coherent reasoning chains. Chain-of-Thought Reasoning is a closely related concept that treats the same phenomenon as an emergent property of the model rather than as an elicitation artefact, emphasising the internal computations that intermediate tokens perform.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
