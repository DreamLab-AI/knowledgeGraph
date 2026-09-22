public:: true

# Safetensors
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:safetensors",
  "@type": "Page",
  "vc:slug": "safetensors",
  "title": "Safetensors",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:safetensors",
  "@type": "Class",
  "label": "Safetensors",
  "definition": "Safetensors is a secure, simple, and fast file format for storing and loading neural network tensor weights, developed by Hugging Face as a safe alternative to Python's pickle-based serialisation. The format stores tensor metadata in a JSON header followed by raw binary data, enabling zero-copy memory-mapped loading without executing arbitrary code during deserialisation.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:data-serialization", "label": "Data Serialization"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:model-weights", "label": "Model Weights"},
      {"@id": "urn:ngm:class:hugging-face", "label": "Hugging Face"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-checkpoint", "label": "Model Checkpoint"},
      {"@id": "urn:ngm:class:ai-model-inference-engine", "label": "AI Model Inference Engine"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:safetensors-format", "label": "Safetensors Format"},
      {"@id": "urn:ngm:class:hugging-face-model-hub", "label": "Hugging Face Model Hub"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Safetensors]] is an open file format for neural network [[Model Weights|model weights]] that eliminates arbitrary code execution risks inherent in pickle-based serialisation by storing tensors as raw binary data preceded by a JSON metadata header, enabling secure zero-copy memory-mapped loading.

- ### Relationships
  - Safetensors stores [[Model Weights]] and is developed and maintained by [[Hugging Face]], with native support in the [[Hugging Face Model Hub]]. It enables fast, safe [[Model Checkpoint]] loading for [[AI Model Inference Engine|inference engines]] and is specified by the [[Safetensors Format]] standard. It is positioned as the secure replacement for PyTorch's `.pt` and `.bin` formats.

- ### Content
  - Safetensors was created by Nicolas Patry at Hugging Face in 2022, motivated by security vulnerabilities in the dominant pickle format used by PyTorch's `torch.save`. Pickle deserialisation executes arbitrary Python bytecode, making any pickle file downloaded from the internet a potential vector for arbitrary code execution attacks. Safetensors addresses this by design: the format consists of a fixed-size 8-byte header indicating JSON length, the JSON metadata describing tensor shapes, dtypes, and byte offsets, followed by the raw binary tensor data.

  - The format supports all major tensor frameworks through language bindings in Python, Rust, C, C++, and JavaScript. Zero-copy loading is achieved via memory mapping (`mmap`), which allows the operating system to map the file directly into process address space without buffering data through user space. This makes loading a 70B-parameter model an order of magnitude faster than pickle loading on the same hardware. Lazy loading is also supported, enabling selective loading of specific tensors without reading the entire file.

  - Security properties beyond anti-pickle include: no unbounded allocation (tensor sizes are bounded by file size), no pointer arithmetic vulnerabilities (pure value-type storage), and no hidden state. The format is endian-agnostic and stores tensor data in C-contiguous row-major order by default. Supported dtypes include float16, bfloat16, float32, float64, int8, int16, int32, int64, bool, and the experimental float8 variants.

  - By 2024-2025, safetensors has become the de facto standard for model weight distribution on the Hugging Face Hub, with the vast majority of new model uploads using the format. Stable Diffusion, Llama, Mistral, Falcon, and most major open-weight models are distributed in safetensors. The format is natively supported by vLLM, TGI, Transformers, and Diffusers, and is under evaluation for standardisation by the broader ML ecosystem. Security audits have confirmed the format's safety guarantees against known exploit classes.

