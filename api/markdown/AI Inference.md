public:: true

# AI Inference
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ai-inference",
  "@type": "Page",
  "vc:slug": "ai-inference",
  "title": "AI Inference",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-inference",
  "@type": "Class",
  "label": "AI Inference",
  "definition": "AI Inference is the operational phase of a machine learning system in which a trained model processes new input data to generate predictions, classifications, embeddings, or generative outputs — as distinct from the training phase in which model parameters are optimised. It is the production-time workload that determines the latency, throughput, cost, and scalability characteristics experienced by end users and downstream systems.",
  "domain": "ai",
  "maturity": "mature",
  "subClassOf": [
    {"@id": "urn:ngm:class:ai-machine-learning", "label": "Ai Machine Learning"}
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:gpu-acceleration", "label": "GPU Acceleration"},
      {"@id": "urn:ngm:class:ai-model", "label": "AI Model"},
      {"@id": "urn:ngm:class:ai-model-architecture", "label": "AI Model Architecture"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:real-time-ai-inference", "label": "Real-Time AI Inference"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[AI Inference]] is the computational process of applying a trained [[AI Model]] to input data to produce outputs — text, images, classifications, embeddings, or actions — using the learned parameters fixed at the end of training. Unlike training, which requires large GPU clusters and gradient computation, inference can be performed on a wide range of hardware from data-centre accelerators ([[GPU Acceleration]], TPUs, AI ASICs) to consumer devices (CPUs, NPUs in mobile SoCs). The inference serving stack must balance latency (time to first token, end-to-end response time), throughput (requests per second), cost (compute and memory per token), and accuracy (preserving model quality despite optimisation techniques).

- ### Relationships
  - [[AI Inference]] is a subclass of [[Ai Machine Learning]] operations. It uses [[AI Model]] parameters and [[AI Model Architecture]] design to determine computational complexity. [[GPU Acceleration]] is the dominant hardware substrate at scale. It enables [[Real-Time AI Inference]] for interactive applications and powers [[Generative AI]] products. [[Edge Computing]] is an increasingly important inference deployment context, pushing inference closer to data sources and users.

- ### Content
  - AI inference has existed since the earliest neural network deployments, but its economics and architecture were transformed by the scaling of deep learning from 2012 onwards. AlexNet's ImageNet inference ran on dual GPUs; ResNet-50 inference was optimised for server CPUs; transformer-based LLMs require tens to hundreds of gigabytes of GPU memory. The inference stack evolved from ad-hoc framework execution (TensorFlow Serving, TorchServe) to specialised inference runtimes (TensorRT, ONNX Runtime, OpenVINO) and, for LLMs specifically, to purpose-built engines (vLLM, TGI, SGLang) that implement continuous batching, paged attention (KV cache management), and speculative decoding.

  - LLM inference presents unique challenges compared to computer vision or classical ML inference. Autoregressive token generation is memory-bandwidth bound (the KV cache grows with sequence length, requiring careful memory management), variable-length outputs make batching complex, and the massive parameter counts (7B to 405B) require model parallelism across multiple GPUs. Key optimisation techniques include: quantisation (reducing parameter precision from FP16 to INT8 or INT4 for 2-4x memory reduction with minimal accuracy loss), speculative decoding (using a small draft model to propose tokens verified by the large model, improving throughput 2-3x), continuous batching (dynamically adding requests to running batches), and prefix caching (reusing KV cache for repeated prompt prefixes, critical for RAG workloads).

  - The inference infrastructure market has become a primary battleground in the AI industry. Cloud providers (AWS, Google, Azure, Oracle) operate large-scale inference fleets with H100 and A100 GPU clusters. Specialised inference providers (Groq, Cerebras, Together AI, Fireworks AI) offer lower-latency or higher-throughput alternatives. On-device inference for SLMs (small language models, 1B-8B parameters) is growing rapidly, driven by Apple Silicon Neural Engine, Qualcomm NPUs, and projects such as llama.cpp and Ollama that run models on consumer hardware without network connectivity.

  - By 2025, inference costs have fallen dramatically — GPT-4 class inference that cost ~$0.06 per 1K tokens in 2023 costs under $0.001 per 1K tokens for equivalent-quality open models in 2025, driven by hardware improvements, software efficiency, and competition. Inference is now the primary cost driver for AI deployments at scale, exceeding training costs for high-usage applications. The shift to reasoning models (OpenAI o1/o3, DeepSeek R1) that generate extended internal chains of thought before responding has renewed interest in inference compute scaling, with test-time compute trading inference cost for accuracy on complex tasks.