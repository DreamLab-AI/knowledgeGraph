public:: true

# lora fine-tuning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:10b4262f336c591721bd13f3633d33e2bbdd1cc83a1fae09e7cf0657d7a53975",
  "@type": "Page",
  "vc:slug": "lo-ra-fine-tuning",
  "title": "lora fine-tuning",
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
  "@id": "urn:ngm:class:lo-ra-fine-tuning",
  "@type": "Class",
  "label": "LoRA Fine-Tuning",
  "definition": "LoRA (Low-Rank Adaptation) fine-tuning is a parameter-efficient fine-tuning technique that adapts large pre-trained transformer models by inserting pairs of trainable low-rank matrices (A ∈ ℝ^{d×r} and B ∈ ℝ^{r×d}, where r ≪ d) alongside frozen weight matrices in selected layers, so that the effective weight update ΔW = BA is constrained to a low-dimensional subspace. By training only the injected adapter matrices — typically representing 0.1–1% of the original parameter count — LoRA achieves near full fine-tuning performance at a fraction of the GPU memory and compute cost, enabling adaptation of billion-parameter models on consumer hardware. It is now the dominant technique in the PEFT ecosystem and is implemented in Hugging Face's PEFT library.",
  "domain": "artificial-intelligence",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:parameter-efficient-fine-tuning",
      "label": "Parameter-Efficient Fine-Tuning"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:pre-training", "label": "Pre Training"},
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:domain-adaptation", "label": "Domain Adaptation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:quantisation", "label": "Quantisation"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - LoRA (Low-Rank Adaptation) fine-tuning is a parameter-efficient fine-tuning technique that adapts large pre-trained transformer models by inserting pairs of trainable low-rank matrices (A ∈ ℝ^{d×r} and B ∈ ℝ^{r×d}, where r ≪ d) alongside frozen weight matrices in selected layers, so that the effective weight update ΔW = BA is constrained to a low-dimensional subspace. By training only the injected adapter matrices — typically representing 0.1–1% of the original parameter count — LoRA achieves near full fine-tuning performance at a fraction of the GPU memory and compute cost, enabling adaptation of billion-parameter models on consumer hardware. It is now the dominant technique in the PEFT ecosystem and is implemented in Hugging Face's PEFT library.

- ### Semantic Classification
  - owl-class:: lo-ra-fine-tuning:LoRA Fine-Tuning
  - owl-role:: Concept

- ### Relationships
  - requires [[Pre Training]]
  - requires [[Large Language Models]]
  - enables [[Fine Tuning]]
  - enables [[Domain Adaptation]]
  - relatedTo [[Quantisation]]
  - relatedTo [[Model Training]]

- ### Content
  - LoRA was proposed by Hu et al. at Microsoft in a 2021 paper and has become the dominant parameter-efficient fine-tuning approach for large language models due to its minimal overhead and strong empirical performance. The key theoretical motivation is the hypothesis that the weight update matrix during fine-tuning has low intrinsic rank — meaning that most of the relevant adaptation can be captured by a small number of directions in weight space. Empirically, rank values of r = 4 to r = 64 suffice for most downstream tasks, with higher ranks beneficial for diverse multi-task adaptation.
  - In practice, LoRA adapters are inserted into the query and value projection matrices of transformer attention layers (and optionally into MLP layers), with the original weights frozen. At inference time, the adapter matrices can be merged back into the base weights (W + BA) at zero runtime cost, or left separate to allow hot-swapping of task-specific adapters by different users sharing the same base model. This property makes LoRA particularly valuable in multi-tenant serving scenarios.
  - QLoRA (Quantised LoRA), introduced by Dettmers et al., extends LoRA by quantising the frozen base model to 4-bit NormalFloat (NF4) and training adapters in 16-bit, enabling fine-tuning of 70B-parameter models on a single consumer GPU with 48 GB VRAM. Variants including AdaLoRA (adaptive rank allocation), DoRA (weight decomposition), and LoftQ (quantisation-aware LoRA initialisation) further improve upon the original. LoRA is implemented in Hugging Face PEFT, LLaMA-Factory, Axolotl, and Unsloth, making it the de facto standard for open-source LLM fine-tuning workflows.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
