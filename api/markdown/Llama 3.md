public:: true

# Llama 3
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:llama-3",
  "@type": "Page",
  "vc:slug": "llama-3",
  "title": "Llama 3",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:llama-3",
  "@type": "Class",
  "label": "Llama 3",
  "definition": "Llama 3 is a family of open-weight large language models developed and released by Meta AI in April 2024, spanning 8 billion and 70 billion parameter base and instruction-tuned variants, with a 405 billion parameter model subsequently released in July 2024. Llama 3 models are trained on approximately 15 trillion tokens from a curated multilingual corpus, use a 128,000-token vocabulary with a custom BPE tokeniser, incorporate grouped-query attention for inference efficiency, and are post-trained with supervised fine-tuning and reinforcement learning from human feedback. The models are released under a custom Meta Llama 3 Community License that permits commercial use for most organisations while imposing restrictions on deployments exceeding 700 million monthly active users.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:rlhf", "label": "RLHF"},
      {"@id": "urn:ngm:class:instruction-tuning", "label": "Instruction Tuning"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"},
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:meta-ai", "label": "Meta AI"},
      {"@id": "urn:ngm:class:model-weights", "label": "Model Weights"},
      {"@id": "urn:ngm:class:benchmarks", "label": "Benchmarks"},
      {"@id": "urn:ngm:class:safety-and-alignment", "label": "Safety and alignment"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Llama 3]] is [[Meta AI]]'s third-generation family of open-weight [[Large Language Models]], released in April 2024 across 8B, 70B, and 405B parameter scales, trained on 15 trillion tokens with a 128K-token vocabulary, and post-trained with [[RLHF]] and [[Instruction Tuning]] to produce instruction-following variants competitive with proprietary frontier models.

- ### Relationships
  - Llama 3 models implement the [[Transformer Architecture]] with grouped-query attention and rotary positional embeddings, making them directly compatible with most open-source [[Inference Engine]] runtimes (vLLM, Ollama, llama.cpp). The public release of [[Model Weights]] under a permissive community licence makes Llama 3 the primary base for community [[Fine Tuning]] efforts, extending the model into domain-specific applications at far lower cost than training from scratch. [[Meta AI]]'s investment in [[Safety and alignment]] post-training — including Llama Guard safety classifiers released alongside the base models — reflects growing expectations around responsible open-weight releases. [[Benchmarks]] on MMLU, HumanEval, and MATH establish Llama 3 70B as competitive with GPT-3.5-class proprietary models.

- ### Content
  - The Llama model family began with Llama 1 (February 2023), which was the first widely available open-weight LLM to demonstrate competitive performance with GPT-3.5, released initially for research use. Llama 2 (July 2023) extended the approach with larger training datasets, reinforcement learning from human feedback post-training, and a commercial licence, catalysing a broad ecosystem of fine-tuned variants and community tooling. The release of Llama 3 in April 2024 represented a significant capability step: at 70B parameters, Llama 3 matched or exceeded GPT-4 on several reasoning benchmarks, challenging the assumption that open-weight models were categorically weaker than proprietary closed models.

  - Architecturally, Llama 3 uses a decoder-only Transformer with several efficiency improvements over Llama 2. Grouped-query attention (GQA) reduces the KV cache memory footprint during generation, enabling longer context at a given VRAM budget. The expanded vocabulary (128K BPE tokens vs. 32K in Llama 2) improves multilingual representation efficiency. Training data quality improvements — aggressive deduplication, heuristic quality filters, and domain resampling — contributed substantially to capability improvements beyond the raw token count increase. The 405B parameter model, trained on 15.6 trillion tokens across 16,000 H100 GPUs in a cluster configured for large-scale distributed training, achieved performance competitive with Claude 3 Opus and GPT-4 Turbo at the time of release.

  - Llama 3's significance extends beyond its benchmark performance. The open-weight release strategy fundamentally reshapes the AI model market by providing a free, commercially usable alternative to proprietary APIs that any organisation can run on its own infrastructure. This eliminates data-sharing concerns for sensitive enterprise deployments, enables offline inference without API dependency, and permits full model customisation through fine-tuning. The 8B parameter variant runs efficiently on a single consumer GPU (RTX 3090/4090), making capable LLM inference accessible to individual researchers and developers without cloud API costs.

  - In 2024-2025, the Llama 3 ecosystem expanded substantially. Meta released Llama 3.1 (July 2024) with 128K context window support across all sizes and the 405B model. Llama 3.2 (September 2024) introduced multimodal variants (11B and 90B vision models) and small, on-device models (1B and 3B) designed for mobile and edge inference. Llama 3.3 (December 2024) delivered a 70B instruction model with performance approaching the 405B model through improved post-training techniques. The ecosystem of Llama 3 fine-tunes — covering code generation, medical reasoning, multilingual instruction following, and function-calling — numbers in the thousands on the Hugging Face Hub.

