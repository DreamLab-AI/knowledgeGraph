public:: true

# Mixture of Experts
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2a6cfb24f8a9ce2cd77d723a1c0aa81662cb4ca659e21b7348c72ab7fe3bac96",
  "@type": "Page",
  "vc:slug": "mixture-of-experts",
  "title": "Mixture of Experts",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neural-network-architecture",
      "vc:label": "Neural Network Architecture"
    },
    {
      "@id": "urn:visionflow:linked:transformer-architecture",
      "vc:label": "Transformer Architecture"
    },
    {
      "@id": "urn:visionflow:linked:model-scaling",
      "vc:label": "Model Scaling"
    },
    {
      "@id": "urn:visionflow:linked:monolithic-ai",
      "vc:label": "Monolithic Ai"
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
  "@id": "urn:ngm:class:mixture-of-experts",
  "@type": "Class",
  "label": "Mixture of Experts",
  "definition": "A sparse neural network architecture in which a learned router (gating network) dispatches each input — in modern transformers, each token at each MoE layer — to a small subset of many parallel expert sub-networks, so that total parameter count can grow enormously while per-token computation stays roughly constant; introduced by Jacobs and Jordan in 1991 and revived at scale by Shazeer's sparsely-gated MoE and the Switch Transformer, it underpins frontier models such as Mixtral and DeepSeek-V3.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:neural-network-architecture",
    "label": "Neural Network Architecture"
  },
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:model-scaling",
        "label": "Model Scaling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:monolithic-ai",
        "label": "Monolithic AI"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:transformer-architecture",
        "label": "Transformer Architecture"
      },
      {
        "@id": "urn:ngm:class:ensemble-methods",
        "label": "Ensemble Methods"
      },
      {
        "@id": "urn:ngm:class:attention-mechanisms",
        "label": "Attention Mechanisms"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A sparse neural network architecture in which a learned router (gating network) dispatches each input — in modern transformers, each token at each MoE layer — to a small subset of many parallel expert sub-networks, so that total parameter count can grow enormously while per-token computation stays roughly constant; introduced by Jacobs and Jordan in 1991 and revived at scale by Shazeer's sparsely-gated MoE and the Switch Transformer, it underpins frontier models such as Mixtral and DeepSeek-V3."

- ### Semantic Classification
  - owl-class:: machine-learning:MixtureOfExperts
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Neural Network Architecture]]
  - enables:: [[Model Scaling]]
  - contrasts-with:: [[Monolithic Ai]]
  - related-to:: [[Transformer Architecture]], [[Ensemble Methods]]

- ### Content

  ## Definition

  **Mixture of Experts (MoE)** is an architecture built on conditional computation: instead of pushing every input through one large, fully activated network, a lightweight *router* selects a few specialised *experts* from a large pool and combines their outputs, weighted by the router's confidence. The idea dates to Jacobs, Jordan, Nowlan and Hinton's "Adaptive Mixtures of Local Experts" (1991), where a gating network learned to partition the input space among small networks. Its modern significance comes from Shazeer et al.'s Sparsely-Gated Mixture-of-Experts layer (2017), which showed that top-k routing over thousands of experts could scale recurrent language models past 100 billion parameters at tractable cost, and from the Switch Transformer (Fedus et al., 2021), which simplified routing to a single expert per token inside the [[Transformer Architecture]].

  In a transformer MoE, the dense feed-forward block of some or all layers is replaced by N parallel FFN experts plus a router; each token activates only k of them (typically k=1 or 2, or a handful of fine-grained experts plus shared experts in DeepSeek-style designs). The decisive property is the decoupling of *total* parameters from *active* parameters: Mixtral 8×7B holds ~47B parameters but activates ~13B per token; DeepSeek-V3 holds 671B and activates 37B. Scaling-law studies show MoE models reach a given loss with substantially less training compute than dense models of equivalent quality, which is why the pattern — long used in Google's GLaM and widely believed to power several frontier systems — now dominates cost-efficient [[Model Scaling]].

  Conceptually MoE sits between a monolithic network and an ensemble: unlike [[Ensemble Methods]], the experts are trained jointly and only a few run per input; unlike [[Monolithic Ai]], capacity is modular and specialisation emerges from routing. Interpretability work finds expert specialisation is real but often token- or syntax-level rather than the tidy domain-level division the name suggests.

  ## Technical Details

  - **Routing**: softmax gate over experts with top-k selection; noisy top-k (Shazeer) aids exploration; expert-choice routing inverts the direction (experts pick tokens) to guarantee balance.
  - **Load balancing**: auxiliary losses penalise routing collapse onto few experts; capacity factors cap tokens per expert, with overflow dropped or rerouted — a key training-stability lever.
  - **Systems cost**: experts shard across devices, so MoE trades FLOPs for memory and all-to-all communication; inference must hold all experts resident even though few fire per token.
  - **Design axes**: expert count and granularity (few large vs many fine-grained), shared always-on experts (DeepSeekMoE), k per token, and which layers are sparse.
  - **Exemplars**: GShard and Switch Transformer (Google), GLaM, Mixtral 8×7B/8×22B (Mistral), DeepSeek-V2/V3, Qwen-MoE, Grok-1 — establishing sparse MoE as the default recipe for frontier-scale efficiency.

  ## Current Landscape

  - MoE is now the default architecture for frontier-scale open-weight models: DeepSeek-V3 (December 2024; 671B total, 37B active, 256 routed experts plus one shared) and its R1 reasoning derivative (January 2025) set the template of fine-grained experts with auxiliary-loss-free load balancing.
  - Meta's Llama 4 Scout and Maverick (April 2025) were the company's first MoE releases — Maverick pairs ~400B total parameters with only 17B active across 128 experts; Alibaba's Qwen3-235B-A22B activates 22B of 235B (8 of 128 experts per token), encoding the active count in its name.
  - Moonshot AI's Kimi K2 (July 2025) pushed open weights past a trillion total parameters (~1T, 32B active, 384 experts), and OpenAI returned to open weights with gpt-oss-120b (August 2025): 117B total but just 5.1B active — a 4.4% activation ratio.
  - Activation sparsity keeps falling — Mixtral activated 27.6% of parameters per token (2023), DeepSeek-V3 5.5%, Kimi K2 ~3% — and the total/active parameter pair is now the headline specification of every model release.
  - NVIDIA reported in December 2025 that the ten most intelligent open-source models on the Artificial Analysis leaderboard all use MoE architectures, and serving stacks (vLLM, llm-d) now ship wide expert-parallelism modes specifically for DeepSeek-style MoEs.

  **Sources**:
  - https://blogs.nvidia.com/blog/mixture-of-experts-frontier-models/
  - https://friendli.ai/blog/moe-models-comparison
  - https://developers.redhat.com/articles/2025/09/08/scaling-deepseek-style-moes-vllm-and-llm-d-using-wide-ep

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
