public:: true

# GPU
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:45c136d8f686da8a20bdaaf04901279178e2518f01466eba25a5a51bf8c51b5a",
  "@type": "Page",
  "vc:slug": "gpu",
  "title": "GPU",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:shader",
      "vc:label": "Shader"
    },
    {
      "@id": "urn:visionflow:linked:real-time-rendering",
      "vc:label": "Real-Time Rendering"
    },
    {
      "@id": "urn:visionflow:linked:rasterization",
      "vc:label": "Rasterization"
    },
    {
      "@id": "urn:visionflow:linked:ray-tracing",
      "vc:label": "Ray Tracing"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing-unit",
      "vc:label": "Graphics Processing Unit"
    },
    {
      "@id": "urn:visionflow:linked:graphics-processing",
      "vc:label": "Graphics Processing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GPU"
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
  "@id": "urn:ngm:class:gpu",
  "@type": "Class",
  "label": "GPU",
  "definition": "A GPU (Graphics Processing Unit) is a highly parallel processor optimised for the throughput-oriented computation required to render images and to accelerate data-parallel workloads, and increasingly used as the primary compute substrate for deep learning, scientific simulation, and XR rendering.",
  "domain": "infrastructure",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:graphics-processing",
      "label": "Graphics Processing"
    },
    {
      "@id": "urn:ngm:class:infra-computing-and-cloud",
      "label": "Computing and Cloud"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:shader",
        "label": "Shader"
      },
      {
        "@id": "urn:ngm:class:tensor-core",
        "label": "Tensor Core"
      },
      {
        "@id": "urn:ngm:class:video-memory",
        "label": "Video Memory"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:parallel-programming-model",
        "label": "Parallel Programming Model"
      },
      {
        "@id": "urn:ngm:class:gpu-driver",
        "label": "GPU Driver"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:real-time-rendering",
        "label": "Real-Time Rendering"
      },
      {
        "@id": "urn:ngm:class:rasterization",
        "label": "Rasterization"
      },
      {
        "@id": "urn:ngm:class:ray-tracing",
        "label": "Ray Tracing"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning Training"
      },
      {
        "@id": "urn:ngm:class:neural-network-inference",
        "label": "Neural Network Inference"
      },
      {
        "@id": "urn:ngm:class:scientific-computing",
        "label": "Scientific Computing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:pcie-bus",
        "label": "PCIe Bus"
      },
      {
        "@id": "urn:ngm:class:cpu",
        "label": "CPU"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:single-instruction-multiple-thread",
        "label": "Single-Instruction Multiple-Thread"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:cuda",
        "label": "CUDA"
      },
      {
        "@id": "urn:ngm:class:opencl",
        "label": "OpenCL"
      },
      {
        "@id": "urn:ngm:class:vulkan",
        "label": "Vulkan"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:virtual-reality",
        "label": "Virtual Reality"
      },
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:khronos-group",
        "label": "Khronos Group"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cpu",
        "label": "CPU"
      },
      {
        "@id": "urn:ngm:class:neural-processing-unit",
        "label": "Neural Processing Unit"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:mining",
        "label": "Blockchain Mining"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:graphics-pipeline",
        "label": "Graphics Pipeline"
      },
      {
        "@id": "urn:ngm:class:compute-shader",
        "label": "Compute Shader"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:graphics-processing-unit",
      "label": "Graphics Processing Unit"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gpu:e3c5ba51dba8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:45c136d8f686da8a20bdaaf04901279178e2518f01466eba25a5a51bf8c51b5a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Shader]]",
      "resolved": "urn:visionflow:linked:shader",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Real-Time Rendering]]",
      "resolved": "urn:visionflow:linked:real-time-rendering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rasterization]]",
      "resolved": "urn:visionflow:linked:rasterization",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Ray Tracing]]",
      "resolved": "urn:visionflow:linked:ray-tracing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graphics Processing Unit]]",
      "resolved": "urn:visionflow:linked:graphics-processing-unit",
      "kind": "StubLink"
    },
    {
      "raw": "[[Graphics Processing]]",
      "resolved": "urn:visionflow:linked:graphics-processing",
      "kind": "StubLink"
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
  - A GPU (Graphics Processing Unit) is a highly parallel processor optimised for the throughput-oriented computation required to render images and to accelerate data-parallel workloads.

- ### Semantic Classification
  - owl-class:: general:GPU
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Graphics Processing]]
  - bridges-to:: [[Graphics Processing Unit]]
  - requires:: [[Shader]]
  - enables:: [[Real-Time Rendering]], [[Rasterization]], [[Ray Tracing]]

- ### Content
  - A GPU contains many simple cores organised for single-instruction multiple-data execution, which suits the per-pixel and per-vertex arithmetic of rendering as well as matrix-heavy compute tasks. Programmable shader stages and compute pipelines expose this parallelism to applications through graphics and compute APIs.
  - Beyond graphics, GPUs accelerate scientific computing, simulation and machine learning because many of those workloads map well onto wide parallel hardware. The term GPU is used interchangeably with Graphics Processing Unit.

- ### Current Landscape (2026)
  - NVIDIA's Blackwell generation has become the datacentre default: the B200 (192GB HBM3e, ~8TB/s, native FP4, 208B transistors, ~1,000W) shipped in volume from late 2025, with the GB200 NVL72 rack fusing 72 GPUs and 36 Grace CPUs into a single liquid-cooled NVLink domain; by December 2025 Blackwell represented roughly 70% of NVIDIA datacentre compute revenue.
  - The Blackwell Ultra refresh (B300/GB300 NVL72) began shipping in H2 2025 with 288GB HBM3e and higher FP4 throughput (~1.1 ExaFLOPS FP4 per rack), and NVIDIA's next architecture, Vera Rubin (R100, TSMC 3nm, HBM4), was detailed through CES/GTC 2026 for an H2 2026 launch.
  - AMD's Instinct MI350 series (CDNA 4, MI350X/MI355X) shipped from mid-2025 as the credible second source, offering 288GB HBM3e and competitive FP4/FP8 inference — AMD claims up to 1.3x B200 inference throughput on Llama 3.1 405B — running the open ROCm stack, typically priced below NVIDIA (~$25-30k vs ~$35-40k for a B200), with MI400 and rack-scale "Helios" slated for 2026.
  - Supply remains the binding constraint: TSMC CoWoS advanced-packaging capacity is oversubscribed through at least mid-2026 (NVIDIA pre-booked ~800,000-850,000 CoWoS wafers for 2026), HBM3e/HBM4 supply from SK hynix, Samsung and Micron is tight, and B200 orders were reported backordered into mid-2026.
  - US export policy shifted sharply: after the April 2025 H20 licence requirement (which forced NVIDIA to take ~$5.5bn in charges) and a July 2025 partial resumption, a 15 January 2026 BIS final rule moved H200 and AMD MI325X China review from presumption-of-denial to case-by-case for chips under 21,000 TPP and 6,500 GB/s DRAM bandwidth.
  - The new regime layers a 25% federal duty on China-bound advanced chips (signed 14 January 2026, on top of an August 2025 15%-revenue-share arrangement) plus a volume cap limiting China shipments to 50% of comparable US volume — roughly 800,000 to 1 million H200s eligible against ~2 million ordered; the entire Blackwell and Rubin line stays banned from China, preserving a deliberate one-generation gap.
  - Open challenges as of 2026 include ~1,000-1,400W per-GPU power driving mandatory liquid cooling and datacentre power constraints, HBM as the dominant cost and supply bottleneck, the risk of future controls targeting HBM directly, and China's accelerating pivot to domestic accelerators (e.g. Huawei) as US parts remain capped.

- ### References
  - 1. daily.dev — The Agentic AI Hub (2026). AI Hardware & Accelerators (Blackwell B200/B300, GB200 NVL72, Vera Rubin, AMD MI350/MI400). https://daily.dev/agentic-ai-hub/ai-hardware-accelerators/
  - 2. AMD (2025). AMD Instinct MI350 Series GPUs: A Game Changer for AI Inference. https://www.amd.com/en/blogs/2025/amd-instinct-mi350-series-game-changer.html
  - 3. gpusmith.com (2026). NVIDIA GPU Export Restrictions: Current US Chip Controls 2026. https://gpusmith.com/articles/en/nvidia-gpu-export-restrictions
  - 4. Spheron Network (2026). GPU Export Controls 2026: What It Means for Cloud Pricing. https://www.spheron.network/blog/gpu-export-controls-2026-cloud-pricing/
  - 5. Institute for Progress — ifp.org (2026). When Do More AI Chips for China Mean Fewer for the United States? https://ifp.org/ai-chip-supply-diversion/

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
