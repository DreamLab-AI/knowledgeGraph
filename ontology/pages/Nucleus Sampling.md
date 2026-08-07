public:: true

# Nucleus Sampling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66a7ee0814cbad87fb9b5590e99aebc5bd9c230ef728052be0e57fada6f1e317",
  "@type": "Page",
  "vc:slug": "nucleus-sampling",
  "title": "Nucleus Sampling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sampling",
      "vc:label": "Sampling"
    },
    {
      "@id": "urn:visionflow:linked:beam-search",
      "vc:label": "Beam Search"
    },
    {
      "@id": "urn:visionflow:linked:greedy-decoding",
      "vc:label": "Greedy Decoding"
    },
    {
      "@id": "urn:visionflow:linked:text-generation",
      "vc:label": "Text Generation"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:nucleus-sampling",
  "@type": "Class",
  "label": "Nucleus Sampling",
  "definition": "A stochastic decoding strategy for autoregressive language models, also called top-p sampling, that at each step truncates the next-token distribution to the smallest set of tokens whose cumulative probability exceeds a threshold p, renormalises, and samples from that nucleus — adapting the candidate pool to the model's confidence and avoiding both the degenerate repetition of greedy search and the incoherent tail noise of unrestricted sampling.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:sampling",
    "label": "Sampling"
  },
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
        "@id": "urn:ngm:class:greedy-decoding",
        "label": "Greedy Decoding"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:large-language-models",
        "label": "Large Language Models"
      },
      {
        "@id": "urn:ngm:class:language-model",
        "label": "Language Model"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A stochastic decoding strategy for autoregressive language models, also called top-p sampling, that at each step truncates the next-token distribution to the smallest set of tokens whose cumulative probability exceeds a threshold p, renormalises, and samples from that nucleus — adapting the candidate pool to the model's confidence and avoiding both the degenerate repetition of greedy search and the incoherent tail noise of unrestricted sampling."

- ### Semantic Classification
  - owl-class:: machine-learning:NucleusSampling
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Sampling]]
  - is-part-of:: [[Text Generation]]
  - contrasts-with:: [[Beam Search]]
  - contrasts-with:: [[Greedy Decoding]]

- ### Content

  ## Definition

  **Nucleus sampling** (top-p sampling) was introduced by Holtzman et al. in "The Curious Case of Neural Text Degeneration" (ICLR 2020) to resolve a paradox in neural [[Text Generation]]: likelihood-maximising decoders such as [[Greedy Decoding]] and [[Beam Search]] produce bland, repetitive loops, whilst sampling from the full softmax distribution occasionally draws from its long, unreliable tail and derails into incoherence. The paper's diagnosis — human text is not maximum-likelihood text, and the tail of a language model's distribution is poorly calibrated — motivated truncating the distribution *adaptively* before sampling.

  At each decoding step, tokens are sorted by probability and the **nucleus** V_p is defined as the smallest prefix of that ordering whose cumulative probability exceeds the threshold p (typically 0.9–0.95). Probability mass outside the nucleus is zeroed, the remainder renormalised, and the next token drawn from the result. The key property is adaptivity: when the model is confident, the nucleus may contain only a handful of tokens (behaving almost greedily); when the distribution is flat, the nucleus widens to admit genuine diversity. Fixed top-k sampling, by contrast, keeps exactly k candidates regardless of the distribution's shape — too many when confidence is high, too few when it is low.

  Nucleus sampling composes with temperature scaling (applied to logits before truncation) and has become the default open-ended decoding configuration for [[Large Language Models]]: essentially every mainstream inference API exposes `top_p` alongside `temperature`, with repetition or presence penalties layered on for long-form generation. Deterministic search remains preferable for closed-form tasks (translation, summarisation with beam search historically; greedy for short factual answers), making decoder choice a task-dependent trade-off between fidelity and diversity.

  ## Technical Details

  - **Algorithm**: sort logits descending; compute the cumulative softmax; keep tokens until the cumulative mass first exceeds p; renormalise; sample. Cost is dominated by the sort over the vocabulary, negligible beside the forward pass.
  - **Interaction with temperature**: temperature τ < 1 sharpens the distribution (shrinking the nucleus); τ > 1 flattens it. Common practice tunes (τ, p) jointly, e.g. τ = 0.7, p = 0.9 for assistants; τ = 1.0, p = 0.95 for creative writing.
  - **Descendants and refinements**: typical sampling (information-theoretic truncation), locally typical/eta and epsilon sampling (entropy-relative cutoffs), Mirostat (perplexity-targeting adaptive control), and min-p sampling (threshold relative to the top token's probability, popular in open-weights communities since 2023–24 for high-temperature stability) all generalise the same insight: truncate the unreliable tail, keep the reliable head.
  - **Evaluation**: the original paper showed nucleus-sampled text approaches human perplexity, repetition, and Zipfian statistics far better than beam search (which loops) or pure sampling (which drifts); HUSE and MAUVE later formalised the quality-diversity trade-off decoders navigate.
