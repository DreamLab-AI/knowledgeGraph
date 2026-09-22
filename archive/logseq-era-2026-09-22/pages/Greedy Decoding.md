public:: true

# Greedy Decoding

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:greedy-decoding",
  "@type": "Page",
  "title": "Greedy Decoding",
  "vc:slug": "greedy-decoding",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:greedy-decoding",
  "@type": "Class",
  "label": "Greedy Decoding",
  "definition": "Greedy Decoding is a sequence generation strategy that, at each step of an autoregressive model, selects the single token with the highest predicted probability. It is the simplest decoding method, fully deterministic and computationally cheap, but it can be myopic and miss globally higher-probability sequences. It serves as the baseline against which beam search and sampling-based strategies are compared.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:text-generation",
      "label": "Text Generation"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:text-generation",
        "label": "Text Generation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:speculative-decoding",
        "label": "Speculative Decoding"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:text-generation",
        "label": "Text Generation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:foundation-model",
        "label": "Foundation Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      },
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:text-generation",
        "label": "Text Generation"
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
  - Greedy Decoding is a sequence generation strategy that, at each step of an autoregressive model, selects the single token with the highest predicted probability. It is the simplest decoding method, fully deterministic and computationally cheap, but it can be myopic and miss globally higher-probability sequences. It serves as the baseline against which beam search and sampling-based strategies are compared.
  - Related concepts: [[Text Generation]] [[Beam Search]] [[Sampling]] [[Language Model]]
- ### Overview
  - Greedy decoding generates a sequence by repeatedly committing to the locally most probable next token. Because it never reconsiders earlier choices, it is fast and reproducible but prone to suboptimal or repetitive output. It contrasts with beam search, which maintains several candidate hypotheses, and with stochastic sampling methods that trade determinism for diversity. Greedy decoding is often used when exactness and speed matter more than variety.
- ### Key aspects
  - Deterministic selection of the argmax token per step
  - Lowest computational and memory overhead among strategies
  - Susceptibility to local optima and repetition
  - No diversity or sampling temperature control
  - Common default for tasks needing reproducible output
- ### Mechanisms
  - Deterministic selection of the argmax token per step
  - Lowest computational and memory overhead among strategies
  - Susceptibility to local optima and repetition
- ### Applications
  - Deterministic inference for evaluation and testing
  - Latency-sensitive generation pipelines
  - Baseline comparison for decoding research
  - Structured output where variety is undesirable
  - Speculative decoding draft-token verification baselines
- ### Relationships
  - subClassOf:: [[Text Generation]]
  - partOf:: [[Text Generation]]
  - contrastsWith:: [[Beam Search]]
  - contrastsWith:: [[Sampling]]
  - contrastsWith:: [[Speculative Decoding]]
  - uses:: [[Language Model]]
  - dependsOn:: [[Transformer]]
  - enables:: [[Text Generation]]
  - supports:: [[Foundation Model]]
  - relatedTo:: [[KV Cache]]
  - relatedTo:: [[Language Model]]
  - bridgesTo:: [[Text Generation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
