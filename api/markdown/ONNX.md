public:: true

# ONNX
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:onnx",
  "@type": "Page",
  "vc:slug": "onnx",
  "title": "ONNX",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:onnx",
  "@type": "Class",
  "label": "ONNX",
  "definition": "ONNX (Open Neural Network Exchange) is an open, vendor-neutral interchange format and operator specification for representing machine learning models as directed acyclic computation graphs serialised via Protocol Buffers, enabling trained models to be exported from one deep learning framework (e.g. PyTorch, TensorFlow, MXNet) and executed on any compatible runtime or hardware accelerator without retraining. The ONNX ecosystem encompasses the format specification, versioned opset definitions, a model zoo of pretrained models, and the ONNX Runtime (ORT) inference engine with pluggable hardware execution providers. Originally co-created by Meta and Microsoft in 2017 and later adopted under Linux Foundation AI and Data governance, ONNX addresses framework fragmentation by providing a common intermediate representation (IR) that bridges the training-deployment gap in production ML systems. The specification supports standard neural network operations, control flow constructs, sparse tensors, dynamic shapes, and extended data types needed for large language model and on-device AI inference workloads.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:interoperability-standard", "label": "Interoperability Standard"}
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:onnx-operator-set", "label": "ONNX Operator Set"},
      {"@id": "urn:ngm:class:onnx-runtime", "label": "ONNX Runtime"},
      {"@id": "urn:ngm:class:onnx-model-zoo", "label": "ONNX Model Zoo"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:protocol-buffers", "label": "Protocol Buffers"},
      {"@id": "urn:ngm:class:computation-graph", "label": "Computation Graph"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-deployment", "label": "Model Deployment"},
      {"@id": "urn:ngm:class:hardware-acceleration", "label": "Hardware Acceleration"},
      {"@id": "urn:ngm:class:model-optimization", "label": "Model Optimization"},
      {"@id": "urn:ngm:class:edge-inference", "label": "Edge Inference"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:open-standard", "label": "Open Standard"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:deep-learning-framework", "label": "Deep Learning Framework"},
      {"@id": "urn:ngm:class:quantisation", "label": "Quantisation"},
      {"@id": "urn:ngm:class:graph-optimisation", "label": "Graph Optimisation"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"},
      {"@id": "urn:ngm:class:large-language-model", "label": "Large Language Model"},
      {"@id": "urn:ngm:class:transformer-architecture", "label": "Transformer Architecture"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:tensorflow-savedmodel", "label": "TensorFlow SavedModel"},
      {"@id": "urn:ngm:class:torchscript", "label": "TorchScript"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:neural-processing-unit", "label": "Neural Processing Unit"},
      {"@id": "urn:ngm:class:mlops", "label": "MLOps"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-serialisation", "label": "Model Serialisation"},
      {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"},
      {"@id": "urn:ngm:class:knowledge-distillation", "label": "Knowledge Distillation"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:open-neural-network-exchange", "label": "Open Neural Network Exchange"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - [[ONNX]] (Open Neural Network Exchange) is a vendor-neutral [[Interoperability Standard]] and file format for serialising [[Neural Network]] computation graphs, enabling models trained in any major [[Deep Learning Framework]] — such as [[PyTorch]], [[TensorFlow]], or [[MXNet]] — to be executed by any compatible [[Inference Engine]] on heterogeneous hardware without framework-specific runtime dependencies. The format uses [[Protocol Buffers]] for binary serialisation of directed acyclic graphs composed of typed operators, tensor weights, and metadata, providing a common [[Model Serialisation]] substrate that decouples training environments from deployment targets.

- ### Overview
  - ONNX was co-created by Meta (then Facebook) and Microsoft in September 2017 as a direct response to deep learning framework fragmentation, where models trained in Caffe2 or [[PyTorch]] could not easily cross into [[TensorFlow]] Serving or hardware-vendor runtimes.
  - [[Linux Foundation AI and Data]] adopted ONNX governance in 2019, transforming it from a bilateral collaboration into a community-stewarded [[Open Standard]] with broad industry participation.
  - The central design principle is a portable [[Computation Graph]] IR: nodes are named typed operators (defined in the [[ONNX Operator Set]]), edges are typed tensors, and graph inputs/outputs have declared shapes and data types.
  - The versioned opset scheme (opset 1 through 21+ as of 2025) allows backward-compatible evolution of supported operations, so older models remain valid as new operators are added.
  - ONNX solves the "train anywhere, deploy anywhere" problem: research teams train in flexible Python-based frameworks while production infrastructure uses optimised, hardware-specific runtimes without any retraining penalty.
  - The ecosystem is among the most widely adopted ML interchange formats, supported by virtually every major hardware vendor (NVIDIA, Intel, Qualcomm, AMD, ARM, Apple) and cloud ML platform.

- ### Key Components
  - **ONNX Format Specification**
    - Binary representation using [[Protocol Buffers]] (`.onnx` files); the schema is defined in `onnx.proto`.
    - A graph is composed of nodes (operators), value infos (typed tensor edges), initialisers (weights/constants), inputs, outputs, and metadata properties.
    - Supports scalar, tensor, sequence, map, optional, and sparse tensor types.
    - Dynamic shapes are expressed via symbolic dimension parameters, essential for variable-length inputs in [[Transformer Architecture]] models.
  - **ONNX Operator Set (Opset)**
    - Each opset release adds or updates operators; models declare which opset version they target.
    - Standard domains: `ai.onnx` (core ops), `ai.onnx.ml` (classical ML ops such as SVMs, tree ensembles), `com.microsoft` (extended ops used by ONNX Runtime).
    - Operators include standard [[Neural Network]] primitives (Conv, Gemm, MatMul, Relu, Softmax), control flow (If, Loop, Scan), data manipulation (Reshape, Gather, Concat), and normalisation ops.
  - **ONNX Runtime (ORT)**
    - Production-grade [[Inference Engine]] released by Microsoft in 2019; cross-platform (Linux, Windows, macOS, Android, iOS, WASM).
    - Pluggable Execution Providers (EPs) dispatch operators to hardware backends: CUDA, TensorRT, DirectML, CoreML, OpenVINO, ROCm, QNN (Qualcomm), NNAPI, and CPU.
    - Graph optimisation pipeline applies constant folding, operator fusion, layout transformation, and memory planning before execution.
    - ORT GenAI extends the runtime to support generative [[Large Language Model]] inference with KV-cache management, beam search, and token sampling.
  - **ONNX Model Zoo**
    - Curated repository of pretrained ONNX models (image classification, object detection, NLP, speech) for benchmarking and drop-in deployment.
    - Models include ResNet, EfficientNet, BERT, GPT-2, Whisper, and Stable Diffusion variants exported to ONNX.

- ### Mechanisms
  - **Export Pipeline**
    - Framework-specific exporters (`torch.onnx.export`, `tf2onnx`, `sklearn-onnx`) trace or script models to capture the computation graph and operator calls, then serialise them as ONNX graphs.
    - Shape inference and validation utilities (`onnx.checker`, `onnx.shape_inference`) verify model correctness post-export.
  - **[[Graph Optimisation]]**
    - Level 1: constant folding, redundant node elimination.
    - Level 2: node fusions (e.g. Conv+BN+Relu → fused op), attention pattern fusion for [[Transformer Architecture]] models.
    - Level 3: layout optimisation (NCHW ↔ NHWC transposes absorbed), memory-aware reuse.
  - **[[Quantisation]]**
    - Post-training quantisation (PTQ) to INT8 or INT4 reduces model size and latency on CPU and [[Neural Processing Unit]] targets.
    - Quantisation-aware training (QAT) export preserves calibration metadata in the ONNX graph for higher accuracy at lower precision.
    - Enables deployment on edge devices (Qualcomm Snapdragon NPU, Intel Arc, Apple ANE) via [[Edge Inference]] runtimes.
  - **Hardware Dispatch via Execution Providers**
    - At runtime, ORT's EP selection algorithm assigns each node to the highest-priority EP that can handle it; unassigned nodes fall back to CPU.
    - Allows heterogeneous execution: attention heads on GPU (TensorRT), embedding lookup on CPU, decode step on NPU — within a single inference call.

- ### Applications
  - **Enterprise ML Inference**
    - Models trained in [[PyTorch]] on research clusters are exported to ONNX and served via [[ONNX Runtime]] in Azure ML, SageMaker, or on-premise inference servers, achieving framework-independent deployment pipelines.
    - Embedded in Windows AI Platform, Xbox inference stack, and Microsoft Office AI features.
  - **Optimum & Hugging Face**
    - The Hugging Face `optimum` library wraps ORT for high-performance [[Transformer Architecture]] inference; users export BERT, T5, Whisper, and LLM variants with one-line API calls.
    - ONNX export is a standard step in [[MLOps]] pipelines for reproducible model delivery.
  - **On-Device and Edge AI**
    - [[Edge Inference]] on smartphones, laptops, and embedded systems uses quantised ONNX models served by ORT with QNN or CoreML EPs targeting [[Neural Processing Unit]] silicon.
    - Windows Copilot+ PC initiative mandates ONNX/ORT as the standardised runtime for NPU workloads across AMD, Intel, and Qualcomm Snapdragon X platforms.
  - **Generative AI**
    - ORT GenAI enables efficient [[Large Language Model]] inference for models such as Phi-3, Llama 2/3, Mistral, and Gemma exported to ONNX quantised format.
    - [[Knowledge Distillation]] pipelines output distilled student models in ONNX for deployment without requiring the original training framework.
  - **Classical ML Interoperability**
    - `ai.onnx.ml` opset supports decision trees, random forests, gradient boosted machines, and linear models, enabling scikit-learn or XGBoost models to be deployed via ORT without Python runtime dependencies.

- ### Relationships
  - hasPart:: [[ONNX Operator Set]]
  - hasPart:: [[ONNX Runtime]]
  - hasPart:: [[ONNX Model Zoo]]
  - requires:: [[Protocol Buffers]]
  - requires:: [[Computation Graph]]
  - enables:: [[Model Deployment]]
  - enables:: [[Hardware Acceleration]]
  - enables:: [[Model Optimization]]
  - enables:: [[Edge Inference]]
  - implements:: [[Open Standard]]
  - uses:: [[Deep Learning Framework]]
  - uses:: [[Quantisation]]
  - uses:: [[Graph Optimisation]]
  - supports:: [[Neural Network]]
  - supports:: [[Large Language Model]]
  - supports:: [[Transformer Architecture]]
  - contrastsWith:: [[TensorFlow SavedModel]]
  - contrastsWith:: [[TorchScript]]
  - bridges-to:: [[Neural Processing Unit]]
  - bridges-to:: [[MLOps]]
  - relatedTo:: [[Model Serialisation]]
  - relatedTo:: [[Inference Engine]]
  - relatedTo:: [[Knowledge Distillation]]

- ### Standards & Context
  - ONNX is governed by the [[Linux Foundation AI and Data]] (LF AI & Data) foundation, with technical steering provided by representatives from Microsoft, Meta, NVIDIA, Intel, AMD, Qualcomm, Hugging Face, and others.
  - The specification is versioned via opset numbers (current: opset 21+); models declare `opset_import` to pin operator semantics, ensuring reproducible inference across runtime versions.
  - ONNX does not define a training standard — it is purely an inference IR; training graphs (autograd, optimiser state) are out of scope by design.
  - Complementary standards and tools:
    - [[Flatbuffers]]-based `.ort` format: ORT-specific compact serialisation for embedded deployments.
    - [[TensorFlow Lite]] (TFLite): Google's comparable edge inference format, convertible to/from ONNX via `onnx-tf`.
    - [[CoreML]] format (Apple): macOS/iOS native format; ORT CoreML EP bridges ONNX graphs to CoreML execution.
    - [[OpenVINO]] (Intel): accepts ONNX models directly via its model conversion API.
    - [[TensorRT]] (NVIDIA): ORT TensorRT EP converts ONNX subgraphs to TRT engines for GPU acceleration.
  - The [[ONNX Operator Set]] specification is publicly available at `github.com/onnx/onnx` under the Apache 2.0 licence; operator tests form part of the compliance suite for runtime implementers.
  - ONNX interoperates with [[MLOps]] platforms: model registries (MLflow, Azure ML Model Registry) store models in ONNX format and track opset versions as model metadata.

- ### Provenance
  - sources:: ONNX specification repository (github.com/onnx/onnx), Microsoft ONNX Runtime documentation, Linux Foundation AI & Data ONNX project page, Hugging Face Optimum documentation, established training knowledge through January 2026.
  - updated:: 2026-06-13
