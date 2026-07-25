public:: true

# Autoregressive Decoding

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:autoregressive-decoding", "@type":"Page", "title":"Autoregressive Decoding", "vc:slug":"autoregressive-decoding", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:autoregressive-decoding",
  "@type": "Class",
  "label": "Autoregressive Decoding",
  "definition": "Autoregressive decoding is the process by which a sequence model, such as a transformer language model, generates output one token at a time, conditioning each new token on all previously generated tokens. At every step the model produces a probability distribution over the vocabulary, a token is selected by a chosen strategy, and the token is appended and fed back as input for the next step. It is the dominant generation paradigm for large language models and is the primary target of inference optimisations such as caching and speculative methods.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:large-language-model",
      "label": "Large Language Model"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:kv-cache",
        "label": "KV Cache"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:attention-mechanism",
        "label": "Attention Mechanism"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      },
      {
        "@id": "urn:ngm:class:speculative-decoding",
        "label": "Speculative Decoding"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:model-serving",
        "label": "Model Serving"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:beam-search",
        "label": "Beam Search"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
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
  - Autoregressive decoding generates a sequence token by token, with each token conditioned on the ones before it.
  - It is the standard generation method for a [[Large Language Model]] built on the [[Transformer]] architecture.
  - At each step it emits a distribution over the vocabulary from which a token is chosen by a [[Sampling]] or search strategy.
- ### Overview
  - In autoregressive generation the model factorises the probability of a sequence into a product of conditionals, predicting the next token given the prefix.
  - Generation is inherently sequential: each token depends on the previous output, so steps cannot be trivially parallelised, which makes decoding latency a central performance concern.
  - The [[Attention Mechanism]] lets each new token attend to the entire context, and reusing past computation via a [[KV Cache]] avoids recomputing attention over the prefix at every step.
- ### Key aspects
  - Step-by-step conditioning: the next token depends on all prior tokens in the sequence.
  - Distribution and selection: a logit vector is turned into probabilities and a token is chosen.
  - Selection strategies: greedy, [[Sampling]] with temperature and top-k or top-p, or [[Beam Search]].
  - Caching: a [[KV Cache]] stores attention keys and values to make each step cheaper.
  - Latency profile: dominated by many sequential, memory-bound steps rather than raw compute.
- ### Mechanisms
  - The model computes logits for the next position, converts them to probabilities, and selects a token.
  - The chosen token is appended and fed back as input for the subsequent step.
  - [[Speculative Decoding]] uses a small drafter to propose tokens that the large model verifies in parallel, reducing the number of expensive steps.
  - Reusing cached keys and values keeps per-step cost roughly constant as the sequence grows.
- ### Applications
  - Text generation, chat and completion in [[Large Language Model]] products.
  - Code generation and translation that emit tokens sequentially.
  - Streaming generation in [[Model Serving]] systems where tokens are returned as produced.
  - Baseline behaviour optimised by batching and speculative techniques.
- ### Relationships
  - partOf:: [[Large Language Model]]
  - hasPart:: [[Sampling]]
  - requires:: [[Transformer]]
  - enables:: [[Large Language Model]]
  - uses:: [[KV Cache]]
  - dependsOn:: [[Attention Mechanism]]
  - supports:: [[Model Serving]]
  - implements:: [[Sampling]]
  - relatedTo:: [[Beam Search]]
  - relatedTo:: [[Speculative Decoding]]
  - bridgesTo:: [[Model Serving]]
  - contrastsWith:: [[Beam Search]]
  - standardizedBy:: [[Transformer]]
- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
