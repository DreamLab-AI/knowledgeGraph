public:: true

# Model Serving
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ceef99ca7a20ce62800bc505eb2f0ffdda8ccb3115b521b869b36f85e5f3b9f9",
  "@type": "Page",
  "vc:slug": "model-serving",
  "title": "Model Serving",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:model-deployment",
      "vc:label": "Model Deployment"
    },
    {
      "@id": "urn:visionflow:linked:rest-api",
      "vc:label": "REST API"
    },
    {
      "@id": "urn:visionflow:linked:inference-serving",
      "vc:label": "Inference Serving"
    },
    {
      "@id": "urn:visionflow:linked:mlops",
      "vc:label": "MLOps"
    },
    {
      "@id": "urn:visionflow:linked:latency",
      "vc:label": "Latency"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Serving"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-serving",
  "@type": "Class",
  "label": "Model Serving",
  "definition": "Model serving is the practice of making a trained machine learning model available to handle inference requests, typically behind an API. It covers loading models, batching and routing requests, and returning predictions under latency and throughput constraints at production scale.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-deployment",
      "label": "Model Deployment"
    },
    {
      "@id": "urn:ngm:class:inference-layer",
      "label": "Inference Layer"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:model-registry",
        "label": "Model Registry"
      },
      {
        "@id": "urn:ngm:class:autoscaling",
        "label": "Autoscaling"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-deployment",
        "label": "Model Deployment"
      },
      {
        "@id": "urn:ngm:class:rest-api",
        "label": "REST API"
      },
      {
        "@id": "urn:ngm:class:container-orchestration",
        "label": "Container Orchestration"
      },
      {
        "@id": "urn:ngm:class:load-balancing",
        "label": "Load Balancing"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:inference-serving",
        "label": "Inference Serving"
      },
      {
        "@id": "urn:ngm:class:real-time-prediction",
        "label": "Real-Time Prediction"
      },
      {
        "@id": "urn:ngm:class:batch-inference",
        "label": "Batch Inference"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:model-versioning",
        "label": "Model Versioning"
      },
      {
        "@id": "urn:ngm:class:feature-store",
        "label": "Feature Store"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:g-rpc",
        "label": "gRPC"
      },
      {
        "@id": "urn:ngm:class:openapi",
        "label": "OpenAPI"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gpu-computing",
        "label": "GPU Computing"
      },
      {
        "@id": "urn:ngm:class:model-quantization",
        "label": "Model Quantization"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:a-b-testing",
        "label": "A/B Testing"
      },
      {
        "@id": "urn:ngm:class:canary-deployment",
        "label": "Canary Deployment"
      },
      {
        "@id": "urn:ngm:class:model-monitoring",
        "label": "Model Monitoring"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:model-training",
        "label": "Model Training"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:api-gateway",
        "label": "API Gateway"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      },
      {
        "@id": "urn:ngm:class:triton-inference-server",
        "label": "Triton Inference Server"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:inference-serving",
      "label": "Inference Serving"
    },
    {
      "@id": "urn:ngm:class:model-inference-serving",
      "label": "Model Inference Serving"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:model-serving:ca580a411a7b",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ceef99ca7a20ce62800bc505eb2f0ffdda8ccb3115b521b869b36f85e5f3b9f9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Model Deployment]]",
      "resolved": "urn:visionflow:linked:model-deployment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[REST API]]",
      "resolved": "urn:visionflow:linked:rest-api",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Inference Serving]]",
      "resolved": "urn:visionflow:linked:inference-serving",
      "kind": "StubLink"
    },
    {
      "raw": "[[MLOps]]",
      "resolved": "urn:visionflow:linked:mlops",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Latency]]",
      "resolved": "urn:visionflow:linked:latency",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Model serving is the practice of making a trained machine learning model available to handle inference requests, typically behind an API. It covers loading models, routing requests and returning predictions under latency and throughput constraints.

- ### Semantic Classification
  - owl-class:: machine-learning:ModelServing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Model Deployment]]
  - bridges-to:: [[MLOps]], [[Latency]]
  - requires:: [[Model Deployment]], [[REST API]]
  - enables:: [[Inference Serving]]

- ### Content
  - Model serving exposes a model so that applications can send inputs and receive predictions, usually over HTTP or a remote procedure interface. The serving layer manages model loading, batching of requests and scaling to meet demand.
  - Serving systems are judged on latency, throughput and reliability, and often include features such as versioned endpoints, autoscaling and monitoring. They draw models from a registry and form the runtime half of an MLOps workflow.

- ### Current Landscape (2026)
  - Prefill-decode disaggregation has moved from research (DistServe, OSDI 2024, reporting up to 7.4x more requests within the same SLOs) to the default architecture across every serious serving stack by mid-2026, splitting the compute-bound prefill and memory-bandwidth-bound decode phases onto independently sized GPU pools that stream the KV cache over RDMA/NVLink.
  - NVIDIA launched Dynamo at GTC 2025 (open-sourced on GitHub, reaching v1.0 and shipping v1.3.1 by August 2026) as a Rust/Python orchestration layer above vLLM, SGLang and TensorRT-LLM, adding KV-aware routing, disaggregated serving and multi-tier KV offload; NVIDIA reports up to 30x more requests served for DeepSeek-R1 on GB200 NVL72 versus non-disaggregated serving.
  - The engine layer has consolidated around three open-source runtimes: vLLM (PagedAttention, the general-purpose default), SGLang (RadixAttention and fast structured/constrained decoding via XGrammar) and NVIDIA TensorRT-LLM (per-model compiled engines, fastest peak throughput on NVIDIA hardware), with Hugging Face TGI, LMDeploy and DeepSpeed still in production use.
  - Red Hat, Google Cloud, IBM Research, NVIDIA and CoreWeave founded the Kubernetes-native llm-d project in May 2025 (now a CNCF Sandbox project, released v0.5.0 in February 2026), pairing a vLLM-aware inference scheduler with disaggregated serving and multi-tier KV cache atop the Gateway API Inference Extension.
  - KServe v0.16 introduced the LLMInferenceService CRD offering OpenAI-compatible APIs, token streaming and native llm-d integration, cementing the OpenAI-compatible HTTP interface plus Kubernetes Gateway API Inference Extension as the de facto serving standards; Red Hat AI Inference now ships this stack on CoreWeave and Azure managed Kubernetes.
  - KV-cache management has become a distinct storage tier: Moonshot AI's Mooncake (FAST 2025 best paper) and the University of Chicago's LMCache are now standard cluster-scale KV backends, exposed through vLLM's KVConnector interface (NixlConnector, LMCacheConnector, MooncakeConnector), with NVIDIA's NIXL moving KV tensors directly VRAM-to-VRAM across RDMA, InfiniBand, NVMe-oF and S3 backends.
  - Open challenges as of 2026 include tuning the prefill-to-decode worker ratio (typically 1:3 to 1:5 for chat) to avoid stranded capacity, treating RDMA/interconnect bandwidth and HBM pressure as first-class capacity constraints rather than raw FLOPs, and the operational cost and per-model compilation burden of engines like TensorRT-LLM, which only pays back above roughly 5-10 million tokens per day per model.

- ### References
  - 1. NVIDIA Developer (2025). Introducing NVIDIA Dynamo, A Low-Latency Distributed Inference Framework for Scaling Reasoning AI Models. https://developer.nvidia.com/blog/introducing-nvidia-dynamo-a-low-latency-distributed-inference-framework-for-scaling-reasoning-ai-models/
  - 2. Particula Tech (2026). Prefill-Decode Disaggregation for LLM Serving at Scale. https://particula.tech/blog/prefill-decode-disaggregation-llm-serving-scale
  - 3. Hao AI Lab, UCSD (2025). Disaggregated Inference: 18 Months Later. https://haoailab.com/blogs/distserve-retro/
  - 4. Google Cloud (2025). Enhancing vLLM for distributed inference with llm-d. https://cloud.google.com/blog/products/ai-machine-learning/enhancing-vllm-for-distributed-inference-with-llm-d
  - 5. Red Hat Developers (2026). Combining KServe and llm-d for optimized generative AI inference. https://developers.redhat.com/articles/2026/04/21/kserve-llm-d-optimized-gen-ai-inference
  - 6. MarkTechPost (2025). Comparing the Top 6 Inference Runtimes for LLM Serving in 2025. https://www.marktechpost.com/2025/11/07/comparing-the-top-6-inference-runtimes-for-llm-serving-in-2025/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
