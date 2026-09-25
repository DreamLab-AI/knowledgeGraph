Model serving is the practice of making a trained machine learning model available to handle inference requests, typically behind an API. It covers loading models, batching and routing requests, and returning predictions under latency and throughput constraints at production scale.

### Semantic Classification

### Content

- Model serving exposes a model so that applications can send inputs and receive predictions, usually over HTTP or a remote procedure interface. The serving layer manages model loading, batching of requests and scaling to meet demand.
- Serving systems are judged on latency, throughput and reliability, and often include features such as versioned endpoints, autoscaling and monitoring. They draw models from a registry and form the runtime half of an MLOps workflow.

### Current Landscape (2026)

- Prefill-decode disaggregation has moved from research (DistServe, OSDI 2024, reporting up to 7.4x more requests within the same SLOs) to the default architecture across every serious serving stack by mid-2026, splitting the compute-bound prefill and memory-bandwidth-bound decode phases onto independently sized GPU pools that stream the KV cache over RDMA/NVLink.
- NVIDIA launched Dynamo at GTC 2025 (open-sourced on GitHub, reaching v1.0 and shipping v1.3.1 by August 2026) as a Rust/Python orchestration layer above vLLM, SGLang and TensorRT-LLM, adding KV-aware routing, disaggregated serving and multi-tier KV offload; NVIDIA reports up to 30x more requests served for DeepSeek-R1 on GB200 NVL72 versus non-disaggregated serving.
- The engine layer has consolidated around three open-source runtimes: vLLM (PagedAttention, the general-purpose default), SGLang (RadixAttention and fast structured/constrained decoding via XGrammar) and NVIDIA TensorRT-LLM (per-model compiled engines, fastest peak throughput on NVIDIA hardware), with Hugging Face TGI, LMDeploy and DeepSpeed still in production use.
- Red Hat, Google Cloud, IBM Research, NVIDIA and CoreWeave founded the Kubernetes-native llm-d project in May 2025 (now a CNCF Sandbox project, released v0.5.0 in February 2026), pairing a vLLM-aware inference scheduler with disaggregated serving and multi-tier KV cache atop the Gateway API Inference Extension.
- KServe v0.16 introduced the LLMInferenceService CRD offering OpenAI-compatible APIs, token streaming and native llm-d integration, cementing the OpenAI-compatible HTTP interface plus Kubernetes Gateway API Inference Extension as the de facto serving standards; Red Hat AI Inference now ships this stack on CoreWeave and Azure managed Kubernetes.
- KV-cache management has become a distinct storage tier: Moonshot AI's Mooncake (FAST 2025 best paper) and the University of Chicago's LMCache are now standard cluster-scale KV backends, exposed through vLLM's KVConnector interface (NixlConnector, LMCacheConnector, MooncakeConnector), with NVIDIA's NIXL moving KV tensors directly VRAM-to-VRAM across RDMA, InfiniBand, NVMe-oF and S3 backends.
- Open challenges as of 2026 include tuning the prefill-to-decode worker ratio (typically 1:3 to 1:5 for chat) to avoid stranded capacity, treating RDMA/interconnect bandwidth and HBM pressure as first-class capacity constraints rather than raw FLOPs, and the operational cost and per-model compilation burden of engines like TensorRT-LLM, which only pays back above roughly 5-10 million tokens per day per model.

### References

- 1. NVIDIA Developer (2025). Introducing NVIDIA Dynamo, A Low-Latency Distributed Inference Framework for Scaling Reasoning AI Models. https://developer.nvidia.com/blog/introducing-nvidia-dynamo-a-low-latency-distributed-inference-framework-for-scaling-reasoning-ai-models/
- 2. Particula Tech (2026). Prefill-Decode Disaggregation for LLM Serving at Scale. https://particula.tech/blog/prefill-decode-disaggregation-llm-serving-scale
- 3. Hao AI Lab, UCSD (2025). Disaggregated Inference: 18 Months Later. https://haoailab.com/blogs/distserve-retro/
- 4. Google Cloud (2025). Enhancing vLLM for distributed inference with llm-d. https://cloud.google.com/blog/products/ai-machine-learning/enhancing-vllm-for-distributed-inference-with-llm-d
- 5. Red Hat Developers (2026). Combining KServe and llm-d for optimized generative AI inference. https://developers.redhat.com/articles/2026/04/21/kserve-llm-d-optimized-gen-ai-inference
- 6. MarkTechPost (2025). Comparing the Top 6 Inference Runtimes for LLM Serving in 2025. https://www.marktechpost.com/2025/11/07/comparing-the-top-6-inference-runtimes-for-llm-serving-in-2025/

### Provenance

