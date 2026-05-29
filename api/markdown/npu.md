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