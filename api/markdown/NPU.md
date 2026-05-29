public:: true

# NPU
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dd12376f9d8bf886f1ddd82c1b6bf2f0216b28ca87b3bc67704dd90bde76cf55",
  "@type": "Page",
  "vc:slug": "npu",
  "title": "NPU",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:ai-hardware",
      "vc:label": "AI Hardware"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:edge-computing",
      "vc:label": "Edge Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-9005"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "NPU"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:npu",
  "@type": "Class",
  "label": "NPU",
  "definition": "A Neural Processing Unit (NPU) is a dedicated silicon accelerator architected to execute artificial neural network operations — principally matrix multiplications and activation functions — with far greater energy efficiency and throughput than general-purpose CPUs or GPUs. NPUs are integrated into mobile SoCs, edge devices, and data-centre accelerator cards to enable low-latency AI inference on-device. They are increasingly central to deploying large language models, computer vision pipelines, and speech recognition at the edge without relying on cloud round-trips.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure (Category)"
    },
    {
      "@id": "urn:ngm:class:ai-hardware",
      "label": "AI Hardware"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:ai-hardware", "label": "AI Hardware"},
      {"@id": "urn:ngm:class:ai-infrastructure", "label": "AI Infrastructure"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:inference", "label": "Inference"},
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:tpu", "label": "TPU"},
      {"@id": "urn:ngm:class:fpga", "label": "FPGA"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:npu:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dd12376f9d8bf886f1ddd82c1b6bf2f0216b28ca87b3bc67704dd90bde76cf55"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Hardware]]",
      "resolved": "urn:visionflow:owl:class:ai-hardware",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Edge Computing]]",
      "resolved": "urn:visionflow:owl:class:edge-computing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Neural Processing Unit, specialized hardware accelerators designed specifically for artificial neural network computations, optimized for AI inference and training.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:NPU
  - owl-role:: Object
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]

- ### Content

  ## Overview

  A Neural Processing Unit (NPU) is a fixed-function silicon block optimised for the tensor operations that underpin modern AI workloads — primarily dense matrix multiplications, convolutions, and element-wise activations. Unlike CPUs (designed for sequential scalar workloads) or GPUs (designed for massively parallel floating-point graphics pipelines), NPUs incorporate large systolic arrays, on-chip SRAM buffers, and quantisation-aware datapaths that minimise data movement and maximise operations per watt.

  ## Deployment Contexts

  NPUs appear in three distinct form factors. On-device NPUs embedded in smartphone and laptop SoCs (Apple Neural Engine, Qualcomm Hexagon, MediaTek APU) allow real-time inference for tasks such as face detection, speech recognition, and on-device language models without cloud latency. Edge NPUs in industrial and automotive hardware (Hailo-8, Google Coral, Intel Movidius) support computer vision pipelines in bandwidth-constrained environments. Data-centre NPUs (Google TPU, AWS Inferentia, Graphcore IPU) handle high-throughput batch inference for large-scale services. Each tier differs in power envelope, memory bandwidth, and supported precision formats (FP32, BF16, INT8, INT4).

  ## Relevance to Spatial and Immersive Computing

  NPUs are increasingly important for XR headsets and spatial computing devices, where sub-millisecond latency for scene understanding, hand-tracking, eye-tracking, and on-device AI assistants is critical and power budgets are tight. Devices such as the Apple Vision Pro integrate dedicated NPU silicon to run real-time neural rendering and context-aware features without offloading to a host machine.

- ### Provenance
  - sources:: [[AI Hardware]], [[Edge Computing]]
  - migration-date:: 2026-04-26T00:00:00Z
