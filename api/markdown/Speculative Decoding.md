public:: true

# speculative decoding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:33101ee3e206175fb9388bed6ad13a288affc1bda40a77ae76f9606e7e249ffd",
  "@type": "Page",
  "vc:slug": "speculative-decoding",
  "title": "speculative decoding",
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
  "@id": "urn:ngm:class:speculative-decoding",
  "@type": "Class",
  "label": "Speculative Decoding",
  "definition": "Speculative decoding is an LLM inference acceleration technique that exploits the observation that a smaller, faster draft model can propose plausible multi-token continuations which a larger, higher-quality target model verifies in a single parallel forward pass. Accepted tokens are committed; rejected tokens are discarded, and generation resumes from the rejection point. Because the target model evaluates multiple candidate tokens simultaneously rather than autoregressively one at a time, the effective throughput in tokens per second increases substantially—often two to four times—while the output distribution remains statistically identical to that of the target model running alone. Speculative decoding is particularly effective when the draft and target models share a vocabulary and the task distribution is predictable.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:inference-hardware", "label": "Inference Hardware"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-compression-for-edge", "label": "Model Compression for Edge"},
      {"@id": "urn:ngm:class:context-window", "label": "Context Window"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Speculative decoding is an LLM inference acceleration technique that exploits the observation that a smaller, faster draft model can propose plausible multi-token continuations which a larger, higher-quality target model verifies in a single parallel forward pass. Accepted tokens are committed; rejected tokens are discarded, and generation resumes from the rejection point. Because the target model evaluates multiple candidate tokens simultaneously rather than autoregressively one at a time, the effective throughput in tokens per second increases substantially—often two to four times—while the output distribution remains statistically identical to that of the target model running alone. Speculative decoding is particularly effective when the draft and target models share a vocabulary and the task distribution is predictable.

- ### Semantic Classification
  - owl-class:: speculative-decoding:Speculative Decoding
  - owl-role:: Concept

- ### Relationships
  - uses [[Large Language Models]]
  - uses [[Inference]]
  - enables [[Inference Hardware]]
  - relatedTo [[Model Compression for Edge]]
  - relatedTo [[Context Window]]

- ### Content
  - Speculative decoding was introduced to address a fundamental bottleneck in autoregressive language model inference: each forward pass of the target model produces only one token, yet modern accelerators such as GPUs are memory-bandwidth-bound rather than compute-bound during generation, leaving significant arithmetic throughput unused. By batching the verification of K candidate tokens in a single forward pass, speculative decoding achieves compute utilisation closer to the hardware ceiling.
  - The algorithm proceeds as follows: the draft model autoregressively generates a sequence of K candidate tokens. The target model performs a single forward pass over the original context plus all K candidates, computing logits for each position in parallel. The acceptance criterion is applied token-by-token: if the draft token's probability under the target model meets or exceeds the draft model's probability, it is accepted; otherwise it is rejected with a corrected sample from the difference distribution. The process guarantees exact sampling from the target distribution—a key property for safety-sensitive applications.
  - Variants of speculative decoding include: Medusa, which adds multiple draft heads to the target model itself rather than using a separate small model; SpecInfer, which maintains a tree of draft candidates rather than a linear sequence; and self-speculative decoding (aka draft-on-skip) which uses earlier layers of the target model as the draft. Speculative decoding is complementary to other inference optimisations such as quantisation, KV-cache optimisation, and continuous batching, and is now integrated into production inference frameworks including vLLM and TensorRT-LLM.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
