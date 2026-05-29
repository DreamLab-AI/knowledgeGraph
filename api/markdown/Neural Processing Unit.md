public:: true

# Neural Processing Unit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:neural-processing-unit",
  "@type": "Page",
  "vc:slug": "neural-processing-unit",
  "title": "Neural Processing Unit",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:neural-processing-unit",
  "@type": "Class",
  "label": "Neural Processing Unit",
  "definition": "A Neural Processing Unit (NPU) is a specialised integrated circuit designed to accelerate neural network inference workloads by providing high-throughput, energy-efficient execution of the matrix multiplication and convolution operations that dominate deep learning computation. NPUs are integrated into mobile SoCs, personal computers, and edge devices to enable on-device AI inference without reliance on cloud compute, targeting performance-per-watt objectives unachievable by general-purpose CPUs or GPUs for these workloads.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-hardware", "label": "AI Hardware"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:on-device-inference", "label": "On-Device Inference"},
      {"@id": "urn:ngm:class:edge-ai", "label": "Edge AI"},
      {"@id": "urn:ngm:class:real-time-ai-inference", "label": "Real-Time AI Inference"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:inference-hardware", "label": "Inference Hardware"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:npu", "label": "NPU"},
      {"@id": "urn:ngm:class:tensor-processing-unit", "label": "Tensor Processing Unit"},
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A [[Neural Processing Unit]] (NPU) is a dedicated hardware accelerator engineered to execute deep learning inference operations — primarily matrix multiplications, tensor convolutions, and activation functions — with orders of magnitude greater energy efficiency than a general-purpose CPU and significantly lower power consumption than a data-centre GPU. NPUs are typically integrated directly into system-on-chip (SoC) designs for smartphones, tablets, laptops, and embedded devices, enabling [[On-Device Inference]] for computer vision, speech recognition, natural language processing, and generative AI tasks without transmitting sensitive data to cloud servers.

- ### Relationships
  - The NPU is a form of [[Inference Hardware]] providing [[Hardware Acceleration]] for neural network workloads. It enables [[On-Device Inference]], [[Edge AI]], and [[Real-Time AI Inference]] at power budgets compatible with battery-operated devices. The generic [[NPU]] designation is used interchangeably with Neural Engine (Apple), Hexagon DSP (Qualcomm), and similar brand names. The [[Tensor Processing Unit]] (Google TPU) and [[GPU Compute]] represent the data-centre counterpart design space for training and large-scale inference.

- ### Content
  - Dedicated neural network accelerators emerged in the mid-2010s as mobile AI applications (face unlock, image classification, voice assistants) began exceeding the performance and energy budgets of conventional CPU and GPU processing on-device. Apple introduced the first commercial mobile NPU with the Neural Engine in the A11 Bionic chip (iPhone 8, 2017), delivering 600 billion operations per second for Core ML workloads. Huawei's Kirin 970 (2017) and Qualcomm's Hexagon DSP architecture followed, establishing mobile NPUs as a standard SoC component within two product cycles.

  - The internal architecture of an NPU is optimised for the compute-bound, data-parallel nature of neural network inference. Systolic arrays — grids of multiply-accumulate (MAC) units arranged to pass data in waves — maximise throughput for matrix multiplication. On-chip SRAM buffers are sized to hold entire neural network layers or activation maps, minimising expensive off-chip memory accesses that would bottleneck a general-purpose processor. Quantisation support (INT8, INT4, even binary weights) is typically built into the data path, enabling 4–8× compute density gains over FP32 with acceptable accuracy loss on most inference tasks. Sparse computation support allows skipping zero-valued activations, further improving efficiency.

  - The ecosystem of NPU-equipped hardware has expanded across all device classes. Apple Silicon (M1, M2, M3, M4) integrates a Neural Engine rated at up to 38 TOPS (tera-operations per second) in the M4. Qualcomm's Snapdragon X Elite NPU delivers 45 TOPS for Windows AI PCs. Intel's Meteor Lake CPUs integrate an NPU for Windows 11 AI features, and AMD's Ryzen AI series follows suit. Microsoft's Copilot+ PC specification (2024) mandates a minimum 40 TOPS NPU, establishing NPU capability as a platform requirement for next-generation AI-enhanced computing experiences.

  - In 2024–2025 the NPU landscape is being reshaped by generative AI. Running quantised large language models (7–13B parameters) on-device is now within reach of high-end mobile and laptop NPUs, enabling private, offline LLM inference. Apple's on-device model running on M-series and A-series chips, Microsoft's Phi-3 models tuned for NPU execution, and Qualcomm's AI Hub SDK demonstrate active industry investment. The key constraint is memory bandwidth — NPUs are compute-fast but feeding large transformer models saturates on-chip SRAM, requiring careful model partitioning and prefetching. Research into in-memory computing and photonic neural processors points toward the post-silicon NPU horizon.

