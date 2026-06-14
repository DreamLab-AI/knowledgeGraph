public:: true

# ONNX Runtime
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:onnx-runtime",
  "@type": "Page",
  "vc:slug": "onnx-runtime",
  "title": "ONNX Runtime",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:onnx-runtime",
  "@type": "Class",
  "label": "ONNX Runtime",
  "definition": "ONNX Runtime is an open-source, cross-platform inference and training acceleration engine developed by Microsoft that executes models represented in the Open Neural Network Exchange (ONNX) format. It applies a multi-pass graph optimisation pipeline—including operator fusion, constant folding, and common subexpression elimination—before routing computation through hardware-specific execution providers such as CUDA, TensorRT, DirectML, OpenVINO, CoreML, and QNN to maximise throughput and minimise latency. The runtime decouples training-time framework choice from deployment-time execution environment, allowing models trained in PyTorch, TensorFlow, or scikit-learn to be deployed with a single, vendor-neutral API. In 2024–2025 it extended into large language model inference via the onnxruntime-genai extensions, adding KV-cache management and autoregressive decoding primitives.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {"@id": "urn:ngm:class:inference-engine", "label": "Inference Engine"}
  ],
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:onnx-standard", "label": "ONNX Standard"},
      {"@id": "urn:ngm:class:onnx-operator-set", "label": "ONNX Operator Set"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:graph-optimisation", "label": "Graph Optimisation"},
      {"@id": "urn:ngm:class:operator-fusion", "label": "Operator Fusion"},
      {"@id": "urn:ngm:class:model-quantisation", "label": "Model Quantisation"},
      {"@id": "urn:ngm:class:execution-provider", "label": "Execution Provider"},
      {"@id": "urn:ngm:class:kv-cache", "label": "KV Cache"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:onnx", "label": "ONNX"},
      {"@id": "urn:ngm:class:onnx-model-format", "label": "ONNX Model Format"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:model-deployment", "label": "Model Deployment"},
      {"@id": "urn:ngm:class:edge-inference", "label": "Edge Inference"},
      {"@id": "urn:ngm:class:large-language-model-inference", "label": "Large Language Model Inference"},
      {"@id": "urn:ngm:class:real-time-inference", "label": "Real-Time Inference"},
      {"@id": "urn:ngm:class:mixed-precision-inference", "label": "Mixed-Precision Inference"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:pytorch", "label": "PyTorch"},
      {"@id": "urn:ngm:class:tensorflow", "label": "TensorFlow"},
      {"@id": "urn:ngm:class:hugging-face-transformers", "label": "Hugging Face Transformers"},
      {"@id": "urn:ngm:class:scikit-learn", "label": "scikit-learn"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:tensorrt", "label": "TensorRT"},
      {"@id": "urn:ngm:class:tensorrt-llm", "label": "TensorRT-LLM"},
      {"@id": "urn:ngm:class:vllm", "label": "vLLM"},
      {"@id": "urn:ngm:class:llama-cpp", "label": "llama.cpp"},
      {"@id": "urn:ngm:class:openvino", "label": "OpenVINO"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:cuda", "label": "CUDA"},
      {"@id": "urn:ngm:class:directml", "label": "DirectML"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-optimisation", "label": "Model Optimisation"},
      {"@id": "urn:ngm:class:neural-network-compilation", "label": "Neural Network Compilation"},
      {"@id": "urn:ngm:class:mlops", "label": "MLOps"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:windows-copilot-plus", "label": "Windows Copilot+"},
      {"@id": "urn:ngm:class:mobile-machine-learning", "label": "Mobile Machine Learning"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:onnx-community", "label": "ONNX Community"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:ort", "label": "ORT"}
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
  - [[ONNX Runtime]] (ORT) is an open-source cross-platform inference and training acceleration engine maintained by Microsoft that executes computational graphs expressed in the [[ONNX]] intermediate representation. It applies a multi-pass [[Graph Optimisation]] pipeline before dispatching work through hardware-specific [[Execution Provider]] plugins, enabling consistent high-performance [[Model Deployment]] across CPUs, GPUs, mobile neural engines, and custom accelerators. By decoupling model authorship (in [[PyTorch]] or [[TensorFlow]]) from model execution, ONNX Runtime is a foundational component of production [[MLOps]] infrastructure and sits at the core of Microsoft's Azure and Windows AI services.

- ### Overview
  - ONNX Runtime was open-sourced by Microsoft in 2018, initially serving as the inference backbone for Bing, Office 365, and Azure Cognitive Services.
  - It was co-developed alongside the [[ONNX]] format specification, which was jointly proposed by Microsoft, Facebook (Meta), and AWS in 2017 to address deep learning framework fragmentation.
  - Released under the MIT licence, ORT provides a vendor-neutral path for deploying models trained in [[PyTorch]], [[TensorFlow]], [[scikit-learn]], and other frameworks without framework-specific inference code.
  - The runtime is now one of the most widely deployed inference engines in enterprise settings and is the default inference backend for [[Hugging Face Transformers]] Optimum pipelines.
  - In 2024–2025 it expanded into [[Large Language Model Inference]] territory via the `onnxruntime-genai` extension library, addressing autoregressive generation natively.
  - It holds a uniquely broad hardware coverage: from cloud data-centre GPUs to Android and iOS mobile devices to Windows NPUs under [[Windows Copilot+]], giving it no direct single-product competitor with the same cross-platform reach.

- ### Key Components
  - #### Graph Optimisation Pipeline
    - ORT applies graph rewrites in multiple passes before any hardware execution.
    - **Operator Fusion**: collapses common sequences such as Conv + BatchNorm + ReLU into a single fused kernel, reducing kernel-launch overhead and memory round-trips.
    - **Constant Folding**: precomputes subgraphs whose inputs are compile-time constants, eliminating redundant runtime computation.
    - **Common Subexpression Elimination**: detects repeated computations in the graph and replaces them with shared nodes.
    - **Memory Planning**: assigns tensor buffers to minimise peak allocation and enable in-place operations where safe.
    - These optimisations are applied via the [[Graph Optimisation]] infrastructure before the graph is dispatched to [[Execution Provider]] backends.
  - #### Execution Providers (EPs)
    - The EP abstraction is ORT's primary extensibility mechanism: each EP claims responsibility for a subset of graph nodes it can accelerate.
    - **CUDA EP**: routes to NVIDIA GPUs via cuDNN and cuBLAS; supports FP32, FP16, and BF16 precision.
    - **TensorRT EP**: wraps NVIDIA [[TensorRT]] for layer-level precision calibration (INT8) and kernel auto-tuning; achieves the highest throughput on NVIDIA hardware.
    - **DirectML EP**: targets Windows GPU and NPU hardware via Microsoft's [[DirectML]] API, enabling acceleration on AMD, Intel, and Qualcomm GPUs without vendor-specific CUDA code.
    - **OpenVINO EP**: targets Intel CPUs, integrated GPUs, and VPUs via Intel [[OpenVINO]]; widely used in industrial edge deployments.
    - **CoreML EP**: uses Apple's CoreML framework to route computation to Apple Neural Engine on iOS and macOS devices.
    - **QNN EP**: targets Qualcomm NPUs (Hexagon DSP), central to [[Windows Copilot+]] Snapdragon X Elite deployments.
    - **CPU EP**: default fallback EP; uses Eigen and custom SIMD kernels; supports all ONNX opsets.
    - Multiple EPs can coexist in a single session; ORT partitions the graph so each subgraph runs on its preferred EP.
  - #### Session and API Layer
    - The `InferenceSession` API is available in Python, C++, C#, Java, JavaScript (Node.js + browser via WASM), and Swift.
    - `SessionOptions` controls graph optimisation level (0–99), EP registration order, thread pool sizing, and profiling hooks.
    - The `IOBinding` API allows pinning input/output tensors to device memory to eliminate host–device copies in multi-inference pipelines.
  - #### Quantisation Tooling
    - ORT ships `onnxruntime.quantization` for [[Model Quantisation]]: post-training static quantisation (PTQ) and quantisation-aware training (QAT) export.
    - INT8 and INT4 quantisation are supported, halving or quartering model memory footprint; typically achieves 1.5–4× throughput gains on supported hardware with minor accuracy loss.
    - `onnxruntime-genai` adds weight-only INT4/GPTQ quantisation for large transformer models.
  - #### onnxruntime-genai (LLM Extension)
    - A higher-level library built atop ORT that adds autoregressive generation primitives for [[Large Language Model Inference]].
    - Implements beam search, greedy decoding, top-k/top-p sampling with logits processors.
    - Manages [[KV Cache]] allocation and rotation for long-context generation.
    - Integrates with [[Hugging Face Transformers]] via the `optimum` package for one-command ONNX export and quantisation of BERT, GPT-2, LLaMA, Phi, and Mistral architectures.
  - #### Mobile and Embedded Build (ORT Mobile)
    - A stripped-down `ort-mobile` build targets Android and iOS with sub-5 MB binary sizes.
    - Supports a reduced operator set (configured at compile time) to minimise binary size.
    - The CoreML EP and NNAPI EP (Android Neural Networks API) provide hardware acceleration on mobile platforms, enabling [[Mobile Machine Learning]] without cloud round-trips.

- ### Applications and Use Cases
  - #### Cloud Inference Services
    - Microsoft Azure Cognitive Services, Bing Search, and Office 365 use ONNX Runtime as their production inference engine, processing billions of requests daily.
    - Azure Machine Learning deploys models via ORT as the default execution backend when ONNX export is selected.
    - The combination of mixed-precision support and TensorRT EP makes ORT competitive with framework-native serving solutions for vision and NLP models.
  - #### On-Device and Edge AI
    - ONNX Runtime's `ort-mobile` build powers on-device inference in Microsoft Office apps on iOS and Android, running grammar correction, layout analysis, and OCR locally.
    - Windows Hello facial recognition and Windows Ink handwriting recognition use ORT with the DirectML or QNN EP on Surface devices.
    - Industrial edge deployments (quality inspection, predictive maintenance) frequently use ORT with the OpenVINO EP on Intel MVIDs.
  - #### Windows Copilot+ and NPU Deployments
    - [[Windows Copilot+]] PCs with Snapdragon X Elite, Intel Lunar Lake, and AMD Strix Point include dedicated NPUs; ORT with the QNN and DirectML EPs is the primary inference path for Windows AI features (Cocreator, Live Captions, Recall).
    - The Windows AI Studio tooling wraps ORT for local Phi-3 and other SLM (small language model) deployments.
  - #### LLM and Generative AI
    - `onnxruntime-genai` enables local inference of quantised LLaMA, Phi-3, and Mistral models on Windows NPUs and Apple Silicon.
    - Integration with [[Hugging Face Transformers]] Optimum makes ORT the default ONNX-path inference engine for the Hugging Face ecosystem.
    - Competes with [[vLLM]], [[TensorRT-LLM]], and [[llama.cpp]] for on-device and self-hosted LLM serving, with a unique advantage in Windows and cross-platform coverage.
  - #### Research and Academic Pipelines
    - Researchers use ORT's `torch.onnx.export` + ORT pipeline to benchmark models in a standardised, framework-neutral environment.
    - ORT's profiling output (JSON trace compatible with Chrome DevTools) is used to identify per-operator latency bottlenecks during model architecture search.

- ### Relationships
  - implements:: [[ONNX Standard]]
  - implements:: [[ONNX Operator Set]]
  - uses:: [[Graph Optimisation]]
  - uses:: [[Operator Fusion]]
  - uses:: [[Model Quantisation]]
  - uses:: [[Execution Provider]]
  - uses:: [[KV Cache]]
  - requires:: [[ONNX]]
  - requires:: [[ONNX Model Format]]
  - enables:: [[Model Deployment]]
  - enables:: [[Edge Inference]]
  - enables:: [[Large Language Model Inference]]
  - enables:: [[Real-Time Inference]]
  - enables:: [[Mixed-Precision Inference]]
  - supports:: [[PyTorch]]
  - supports:: [[TensorFlow]]
  - supports:: [[Hugging Face Transformers]]
  - supports:: [[scikit-learn]]
  - dependsOn:: [[CUDA]]
  - dependsOn:: [[DirectML]]
  - contrastsWith:: [[TensorRT]]
  - contrastsWith:: [[TensorRT-LLM]]
  - contrastsWith:: [[vLLM]]
  - contrastsWith:: [[llama.cpp]]
  - contrastsWith:: [[OpenVINO]]
  - relatedTo:: [[Model Optimisation]]
  - relatedTo:: [[Neural Network Compilation]]
  - relatedTo:: [[MLOps]]
  - bridges-to:: [[Windows Copilot+]]
  - bridges-to:: [[Mobile Machine Learning]]
  - standardizedBy:: [[ONNX Community]]

- ### Standards and Context
  - ONNX Runtime implements the [[ONNX Standard]] opset versioning scheme; each ORT release declares its supported opset range (currently opsets 1–21 as of ORT 1.18).
  - The [[ONNX Community]] (hosted under the Linux Foundation AI & Data umbrella since 2019) governs the format spec; Microsoft, Meta, AWS, Intel, Qualcomm, and Nvidia are principal members.
  - ORT's execution provider interface is not formally standardised but has become a de facto industry pattern, with third-party EPs contributed by Qualcomm, Rockchip, Huawei, and others.
  - For quantisation interoperability, ORT follows the [[ONNX]] `QuantizeLinear`/`DequantizeLinear` operator convention, enabling exchange of quantised models between tools.
  - The `onnxruntime-genai` extension follows the [[Hugging Face Transformers]] tokeniser interface for tokenisation, ensuring ecosystem compatibility.
  - Microsoft publishes ORT under the MIT licence; the project resides at github.com/microsoft/onnxruntime.

- ### Provenance
  - sources:: Microsoft ONNX Runtime GitHub repository (github.com/microsoft/onnxruntime); ONNX community documentation (onnx.ai); Hugging Face Optimum documentation; Windows AI developer blog
  - updated:: 2026-06-13
