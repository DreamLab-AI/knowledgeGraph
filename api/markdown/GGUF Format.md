public:: true

# GGUF Format
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:gguf-format",
  "@type": "Page",
  "vc:slug": "gguf-format",
  "title": "GGUF Format",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gguf-format",
  "@type": "Class",
  "label": "GGUF Format",
  "definition": "GGUF (GPT-Generated Unified Format) is a binary file format for storing large language model weights, metadata, and tokenizer data in a single self-contained file optimised for fast loading and local inference. Developed in the llama.cpp ecosystem as a successor to GGML, it supports a range of quantization schemes and embeds the metadata needed to run a model without external configuration. It is the de facto format for running quantized LLMs on consumer hardware.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:model-optimisation-and-performance", "label": "Model Optimisation and Performance"}, {"@id": "urn:ngm:class:open-generative-ai-tools", "label": "Open Generative AI tools"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - GGUF is a unified binary container for quantized LLM weights and metadata; it is a key part of [[Model Optimisation and Performance]] workflows and is used by [[Open Generative AI Tools]] for local inference.
- ### Content
  - A GGUF file bundles tensors, hyperparameters, and tokenizer information with a versioned, extensible header, enabling memory-mapped loading and forward compatibility. It supports many quantization levels (e.g. 2-bit through 8-bit and k-quant variants) that trade accuracy for reduced memory footprint. This makes large models runnable on CPUs and modest GPUs, broadening access to local and offline inference.
